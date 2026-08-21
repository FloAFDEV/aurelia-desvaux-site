import type { Metadata } from "next";
import Tarifs from "@/components/Tarifs";
import { getSheetData, findTarif } from "@/lib/sheetData";

/**
 * Offres décrites dans les données structurées.
 *
 * Le libellé, la description et l'URL sont éditoriaux et vivent ici ; le prix,
 * lui, est toujours lu dans le Google Sheet. C'est ce bloc que Google utilise
 * pour ses résultats enrichis : un tarif figé ici aurait été indexé à la place
 * du vrai dès la première mise à jour d'Aurélia.
 */
const OFFERS = [
	{
		name: "Accompagnement Thérapeutique",
		description: "Séance individuelle – Stress, anxiété, phobies, sommeil, perte de poids…",
		url: "https://aurelia-desvaux.fr/tarifs",
	},
	{
		name: "Arrêt du Tabac",
		description: "Programme personnalisé pour arrêter de fumer durablement",
		url: "https://aurelia-desvaux.fr/tarifs",
	},
	{
		name: "Package 5 séances",
		description: "Accompagnement personnalisé sur 5 séances",
		url: "https://aurelia-desvaux.fr/tarifs",
	},
	{
		name: "Préparation Mentale",
		description: "Séance de préparation mentale (examens, sport, entretiens)",
		url: "https://aurelia-desvaux.fr/preparation-mentale",
	},
	{
		name: "Session Dream Machine",
		description: "Voyage intérieur par stimulation lumineuse",
		url: "https://aurelia-desvaux.fr/dream-machine",
	},
] as const;

function buildPriceSchema(tarifs: Awaited<ReturnType<typeof getSheetData>>["tarifs"]) {
	return {
		"@context": "https://schema.org",
		"@type": "ItemList",
		name: "Tarifs des séances – Aurélia Desvaux",
		description:
			"Tarifs des séances de thérapies brèves (hypnose, PNL, EFT, préparation mentale) à Valbonne Sophia-Antipolis.",
		url: "https://aurelia-desvaux.fr/tarifs",
		itemListElement: OFFERS.map((offer, index) => ({
			"@type": "ListItem",
			position: index + 1,
			item: {
				"@type": "Offer",
				name: offer.name,
				description: offer.description,
				price: String(findTarif(tarifs, offer.name)),
				priceCurrency: "EUR",
				seller: { "@type": "LocalBusiness", name: "Aurélia Desvaux" },
				url: offer.url,
			},
		})),
	};
}

export const metadata: Metadata = {
	title: {
		absolute: "Tarifs & Rendez-vous – Séances à Valbonne | Aurélia Desvaux",
	},
	description:
		"Consultez les tarifs des séances de thérapies brèves avec Aurélia Desvaux à Valbonne. Hypnose, PNL, EFT, arrêt du tabac et Dream Machine.",
	alternates: { canonical: "/tarifs" },
	openGraph: {
		title: "Tarifs & Rendez-vous | Aurélia Desvaux",
		description:
			"Tarifs des séances de thérapies brèves à Valbonne. Hypnose, PNL, EFT, arrêt du tabac. Prenez rendez-vous en ligne.",
		url: "https://aurelia-desvaux.fr/tarifs",
		siteName: "Aurélia Desvaux",
		locale: "fr_FR",
		type: "website",
		images: [
			{
				url: "https://aurelia-desvaux.fr/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Tarifs thérapies brèves – Aurélia Desvaux à Valbonne",
				type: "image/jpeg",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Tarifs & Rendez-vous | Aurélia Desvaux",
		description:
			"Tarifs des séances de thérapies brèves à Valbonne. Hypnose, PNL, EFT, arrêt du tabac.",
		images: ["https://aurelia-desvaux.fr/og-image.jpg"],
	},
};

export default async function TarifsPage() {
	// Lecture serveur, mise en cache 1 h par `getSheetData` — repli automatique
	// si la feuille est indisponible.
	const { tarifs } = await getSheetData();

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(buildPriceSchema(tarifs)),
				}}
			/>
			<Tarifs rows={tarifs} />
		</>
	);
}
