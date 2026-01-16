import { NextResponse } from "next/server";

// Types
export interface SheetRow {
	prestation: string;
	tarif: number;
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

// Fallback data
const FALLBACK_DATA: SheetData = {
	tarifs: [
		{ prestation: "Accompagnement Thérapeutique", tarif: 70 },
		{ prestation: "Arrêt du Tabac", tarif: 120 },
		{ prestation: "Guérison des 5 blessures", tarif: 350 },
		{ prestation: "Package 5 séances", tarif: 300 },
		{ prestation: "Session Dream Machine", tarif: 30 },
		{ prestation: "Préparation Mentale", tarif: 90 },
	],
	medoucine: {
		rating: 5,
		reviewCount: 85,
		lastUpdated: "16/01/2025",
	},
};

function parseCSV(csv: string): SheetRow[] {
	const lines = csv
		.trim()
		.split("\n")
		.map((line) => line.replace(/^\uFEFF/, "")); // enlève BOM au début

	const headers = lines[0].split(",").map((h) => h.trim()); // première ligne = headers
	const dataLines = lines.slice(1);

	return dataLines
		.map((line) => {
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

			const [prestation, tarif, rating, reviewCount, lastUpdated] =
				values;

			// Ignorer les lignes vides
			if (!prestation && !tarif) return null;

			return {
				prestation,
				tarif: tarif ? parseFloat(tarif) : 0,
				rating: rating ? parseFloat(rating) : undefined,
				reviewCount: reviewCount
					? parseInt(reviewCount, 10)
					: undefined,
				lastUpdated: lastUpdated || undefined,
			} as SheetRow;
		})
		.filter((row): row is SheetRow => row !== null);
}

export async function GET() {
	const sheetId = process.env.GOOGLE_SHEET_ID;

	if (!sheetId) {
		console.warn(
			"⚠️ GOOGLE_SHEET_ID non défini, utilisation des données par défaut"
		);
		return NextResponse.json(FALLBACK_DATA);
	}

	try {
		// URL CSV
		const csvUrl = sheetId.startsWith("2PACX-")
			? `https://docs.google.com/spreadsheets/d/e/${sheetId}/pub?output=csv`
			: `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`;

		// Récupération du CSV
		const response = await fetch(csvUrl, { next: { revalidate: 0 } });
		if (!response.ok) throw new Error(`HTTP ${response.status}`);

		const csv = await response.text();
		const rows = parseCSV(csv);

		// Séparer Médoucine (note globale) des autres prestations
		const medoucineRow = rows.find(
			(row) => row.rating != null && row.reviewCount != null
		);

		const medoucine = medoucineRow
			? {
					rating: medoucineRow.rating!,
					reviewCount: medoucineRow.reviewCount!,
					lastUpdated: medoucineRow.lastUpdated || "16/01/2025",
			  }
			: FALLBACK_DATA.medoucine;

		// Toutes les lignes sont renvoyées côté front, avec leurs rating/reviewCount si présents
		const tarifs = rows
			.filter((row) => row.tarif > 0)
			.map((row) => ({
				prestation: row.prestation,
				tarif: row.tarif,
				rating: row.rating,
				reviewCount: row.reviewCount,
				lastUpdated: row.lastUpdated,
			}));

		return NextResponse.json({ tarifs, medoucine });
	} catch (error) {
		if (process.env.NODE_ENV !== "production") {
			console.error("❌ Erreur récupération Google Sheet:", error);
		}
		return NextResponse.json(FALLBACK_DATA);
	}
}
