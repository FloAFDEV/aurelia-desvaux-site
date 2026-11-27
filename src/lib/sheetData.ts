// Source de vérité unique pour les tarifs (Google Sheets), consommée par
// /api/sheet (client, via Tarifs.tsx) et par les Server Components qui ont
// besoin d'un tarif ponctuel (ex: pages Problématiques).
// Module serveur uniquement (next/cache) : les composants client importent
// leurs valeurs de secours depuis sheetFallback.ts, et seulement des types ici.

import { unstable_cache } from "next/cache";
import { FALLBACK_MEDOUCINE } from "@/lib/sheetFallback";

export interface SheetRow {
	prestation: string;
	tarif: number;
	description?: string;
	rating?: number;
	reviewCount?: number;
	lastUpdated?: string;
}

export interface SheetData {
	tarifs: SheetRow[];
	medoucine: {
		rating: number;
		reviewCount: number;
		lastUpdated: string;
	};
}

// Données de secours : utilisées seulement quand aucune donnée valide du Sheet
// n'a jamais pu être lue (aucun GOOGLE_SHEET_ID, ou panne de Google sans
// dernière version valide en cache). Elles ne remplacent jamais une donnée
// valide du Sheet.
const FALLBACK_DATA: SheetData = {
	tarifs: [
		{ prestation: "Accompagnement Thérapeutique", tarif: 70 },
		{ prestation: "Arrêt du Tabac", tarif: 120 },
		{ prestation: "Guérison des 5 blessures", tarif: 350 },
		{ prestation: "Package 5 séances", tarif: 300 },
		{ prestation: "Session Dream Machine", tarif: 30 },
		{ prestation: "Préparation Mentale", tarif: 90 },
	],
	// Défini dans sheetFallback.ts, partagé avec MedoucineBadge (client).
	medoucine: FALLBACK_MEDOUCINE,
};

export { FALLBACK_MEDOUCINE };

// Durée de validité des données du Sheet (secondes). Les pages qui les lisent
// héritent de cette durée pour leur régénération ISR : une modification de la
// feuille apparaît en général en moins d'une heure (donnée + page).
// À garder égale à `revalidate` dans src/app/api/sheet/route.ts.
const REVALIDATE_SECONDS = 1800;

// Délai maximal d'attente de Google Sheets.
const FETCH_TIMEOUT_MS = 8000;

// Une réponse HTTP 200 n'est pas forcément un CSV (feuille dépubliée, page de
// connexion Google, contenu vide…) : on la rejette avant de l'analyser.
const looksLikeCsv = (text: string): boolean => {
	const start = text.replace(/^\uFEFF/, "").trimStart();
	return start.length > 0 && !start.startsWith("<");
};

/**
 * Lit un nombre saisi naturellement dans la feuille : « 70 », « 70 € »,
 * « 70,50 € », « 1 200 », « 1.200,50 », « 4,95 », « 201 avis »…
 *
 * - les espaces (y compris insécables) et le symbole € ou EUR en tête sont ignorés ;
 * - une virgule ou un point suivi de 1 ou 2 chiffres est la décimale ;
 * - un séparateur suivi de 3 chiffres est un séparateur de milliers ;
 * - le texte après le nombre est ignoré, comme auparavant (« 120 la séance »).
 *
 * Toute écriture ambiguë (« 1,2345 », « 1,200,50 »…) est refusée plutôt que
 * devinée : la valeur est alors ignorée.
 */
function parseLocaleNumber(raw: string | undefined): number | null {
	if (!raw) return null;
	const compact = raw.replace(/\s+/g, "").replace(/^(€|eur)/i, "");
	const match =
		/^(\d{1,3}(?:([.,'])\d{3})(?:\2\d{3})*|\d+)(?:([.,])(\d{1,2}))?(?![\d]|[.,]\d)/.exec(
			compact
		);
	if (!match) return null;
	const [, integerPart, thousandsSep, decimalSep, decimals] = match;
	if (thousandsSep && decimalSep === thousandsSep) return null;
	const digits = thousandsSep
		? integerPart.split(thousandsSep).join("")
		: integerPart;
	const value = Number(decimals ? `${digits}.${decimals}` : digits);
	return Number.isFinite(value) ? value : null;
}

const pad2 = (n: number): string => String(n).padStart(2, "0");

/**
 * Date de mise à jour Médoucine, acceptée en jj/mm/aaaa, j/m/aaaa ou
 * aaaa-mm-jj, et restituée en jj/mm/aaaa (format attendu par MedoucineBadge).
 * Une date inexistante (31/02/2026) est refusée.
 */
function normalizeDate(raw: string | undefined): string | null {
	const value = raw?.trim();
	if (!value) return null;
	let day: number, month: number, year: number;
	const fr = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(value);
	const iso = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(value);
	if (fr) {
		[day, month, year] = [Number(fr[1]), Number(fr[2]), Number(fr[3])];
	} else if (iso) {
		[year, month, day] = [Number(iso[1]), Number(iso[2]), Number(iso[3])];
	} else {
		return null;
	}
	const date = new Date(Date.UTC(year, month - 1, day));
	if (
		date.getUTCFullYear() !== year ||
		date.getUTCMonth() !== month - 1 ||
		date.getUTCDate() !== day
	) {
		return null;
	}
	return `${pad2(day)}/${pad2(month)}/${year}`;
}

// Découpe le CSV en cellules brutes (colonnes : prestation, tarif,
// description, rating, reviewCount, lastUpdated).
function parseCSV(csv: string): string[][] {
	const lines = csv
		.trim()
		.split("\n")
		.map((line) => line.replace(/^\uFEFF/, "")); // enlève BOM au début

	const dataLines = lines.slice(1); // première ligne = en-têtes

	return dataLines.map((line) => {
		const values: string[] = [];
		let current = "";
		let inQuotes = false;

		for (let i = 0; i < line.length; i++) {
			const char = line[i];
			if (char === '"') {
				inQuotes = !inQuotes;
			} else if (char === "," && !inQuotes) {
				values.push(current.trim().replace(/^\uFEFF/, ""));
				current = "";
			} else {
				current += char;
			}
		}
		values.push(current.trim().replace(/^\uFEFF/, ""));
		return values;
	});
}

/**
 * Analyse le CSV de la feuille. Tarifs et Médoucine sont validés séparément :
 * une erreur sur l'un n'invalide jamais l'autre.
 *
 * - tarifs : lignes avec un intitulé et un prix positif lisible (les autres
 *   lignes sont ignorées) ;
 * - medoucine : première ligne qui renseigne la note, le nombre d'avis ou la
 *   date ; `null` si l'une de ces trois valeurs est absente ou invalide.
 */
export function parseSheetCsv(csv: string): {
	tarifs: SheetRow[];
	medoucine: SheetData["medoucine"] | null;
} {
	const rows = parseCSV(csv);

	const tarifs: SheetRow[] = [];
	for (const [prestation, tarif, description, rating, reviewCount, lastUpdated] of rows) {
		const price = parseLocaleNumber(tarif);
		if (!prestation || price === null || price <= 0) continue;
		tarifs.push({
			prestation,
			tarif: price,
			description: description || undefined,
			rating: parseLocaleNumber(rating) ?? undefined,
			reviewCount: parseLocaleNumber(reviewCount) ?? undefined,
			lastUpdated: lastUpdated || undefined,
		});
	}

	const medoucineCells = rows.find(
		([, , , rating, reviewCount, lastUpdated]) =>
			Boolean(rating || reviewCount || lastUpdated)
	);
	let medoucine: SheetData["medoucine"] | null = null;
	if (medoucineCells) {
		const rating = parseLocaleNumber(medoucineCells[3]);
		const reviewCount = parseLocaleNumber(medoucineCells[4]);
		const lastUpdated = normalizeDate(medoucineCells[5]);
		if (
			rating !== null &&
			rating >= 0 &&
			rating <= 5 &&
			reviewCount !== null &&
			Number.isInteger(reviewCount) &&
			lastUpdated !== null
		) {
			medoucine = { rating, reviewCount, lastUpdated };
		}
	}

	return { tarifs, medoucine };
}

function sheetCsvUrl(sheetId: string): string {
	return sheetId.startsWith("2PACX-")
		? `https://docs.google.com/spreadsheets/d/e/${sheetId}/pub?output=csv`
		: `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=0`;
}

// Les lectures des tarifs et de Médoucine lancées en même temps (une même
// régénération) partagent une seule requête vers Google.
let pendingCsv: { sheetId: string; promise: Promise<string> } | null = null;

function fetchSheetCsv(sheetId: string): Promise<string> {
	if (pendingCsv?.sheetId === sheetId) return pendingCsv.promise;
	const promise = (async () => {
		// Appelée uniquement depuis unstable_cache : Next ne met pas cette
		// réponse brute en cache. Seules les données validées le sont.
		const response = await fetch(sheetCsvUrl(sheetId), {
			signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
		});
		if (!response.ok) {
			throw new Error(`HTTP ${response.status}`);
		}
		const csv = await response.text();
		if (!looksLikeCsv(csv)) {
			throw new Error("réponse vide ou non CSV");
		}
		return csv;
	})().finally(() => {
		if (pendingCsv?.promise === promise) pendingCsv = null;
	});
	pendingCsv = { sheetId, promise };
	return promise;
}

// Cache des dernières données VALIDES, une entrée pour les tarifs et une pour
// Médoucine. Toute erreur (réseau, délai dépassé, HTTP, réponse non CSV,
// données invalides) est levée dans la fonction mise en cache : Next ne
// remplace alors pas l'entrée existante et continue de servir la dernière
// version valide, puis réessaie à la régénération suivante.
async function readTarifs(sheetId: string): Promise<SheetRow[]> {
	const { tarifs } = parseSheetCsv(await fetchSheetCsv(sheetId));
	if (tarifs.length === 0) {
		throw new Error("aucun tarif exploitable dans le Google Sheet");
	}
	return tarifs;
}

async function readMedoucine(sheetId: string): Promise<SheetData["medoucine"]> {
	const { medoucine } = parseSheetCsv(await fetchSheetCsv(sheetId));
	if (!medoucine) {
		throw new Error("données Médoucine absentes ou invalides dans le Google Sheet");
	}
	return medoucine;
}

const getCachedTarifs = unstable_cache(readTarifs, ["google-sheet-tarifs-v1"], {
	revalidate: REVALIDATE_SECONDS,
});

const getCachedMedoucine = unstable_cache(
	readMedoucine,
	["google-sheet-medoucine-v1"],
	{ revalidate: REVALIDATE_SECONDS }
);

export async function getSheetData(): Promise<SheetData> {
	const sheetId = process.env.GOOGLE_SHEET_ID;

	if (!sheetId) {
		console.warn(
			"⚠️ GOOGLE_SHEET_ID non défini, utilisation des données par défaut"
		);
		return FALLBACK_DATA;
	}

	// Ne lève jamais : sans aucune donnée valide connue (premier rendu pendant
	// une panne), repli sur FALLBACK_DATA pour la partie concernée seulement.
	const [tarifs, medoucine] = await Promise.all([
		getCachedTarifs(sheetId).catch((error: unknown) => {
			console.error("❌ Tarifs Google Sheet indisponibles, repli :", error);
			return FALLBACK_DATA.tarifs;
		}),
		getCachedMedoucine(sheetId).catch((error: unknown) => {
			console.error("❌ Médoucine Google Sheet indisponible, repli :", error);
			return FALLBACK_DATA.medoucine;
		}),
	]);

	return { tarifs, medoucine };
}

// Trouve le tarif d'une prestation par son nom (insensible à la casse).
// Si absente du tableau fourni (ex: ligne supprimée du Sheet), retombe sur
// FALLBACK_DATA — jamais sur une valeur numérique fournie par l'appelant,
// pour ne pas recréer une seconde source de vérité tarifaire.
export function findTarif(tarifs: SheetRow[], prestation: string): number {
	const match = (rows: SheetRow[]) =>
		rows.find(
			(t) => t.prestation.toLowerCase() === prestation.toLowerCase()
		);
	return match(tarifs)?.tarif ?? match(FALLBACK_DATA.tarifs)?.tarif ?? 0;
}
