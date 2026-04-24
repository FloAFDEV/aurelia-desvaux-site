import type { Metadata } from "next";
import Tarifs from "@/components/Tarifs";

const priceSchema = {
	"@context": "https://schema.org",
	"@type": "ItemList",
	name: "Tarifs des séances – Aurélia Desvaux",
	description:
		"Tarifs des séances de thérapies brèves (hypnose, PNL, EFT, préparation mentale) à Valbonne Sophia-Antipolis.",
	url: "https://aurelia-desvaux.fr/tarifs",
	itemListElement: [
		{
			"@type": "ListItem",
			position: 1,
			item: {
				"@type": "Offer",
				name: "Accompagnement Thérapeutique",
				description: "Séance individuelle – Stress, anxiété, phobies, sommeil, perte de poids…",
				price: "70",
				priceCurrency: "EUR",
				seller: { "@type": "LocalBusiness", name: "Aurélia Desvaux" },
				url: "https://aurelia-desvaux.fr/tarifs",
			},
		},
		{
			"@type": "ListItem",
			position: 2,
			item: {
				"@type": "Offer",
				name: "Arrêt du Tabac",
				description: "Programme personnalisé pour arrêter de fumer durablement",
				price: "120",
				priceCurrency: "EUR",
				seller: { "@type": "LocalBusiness", name: "Aurélia Desvaux" },
				url: "https://aurelia-desvaux.fr/tarifs",
			},
		},
		{
			"@type": "ListItem",
			position: 3,
			item: {
				"@type": "Offer",
				name: "Package 5 séances",
				description: "Accompagnement personnalisé sur 5 séances",
				price: "300",
				priceCurrency: "EUR",
				seller: { "@type": "LocalBusiness", name: "Aurélia Desvaux" },
				url: "https://aurelia-desvaux.fr/tarifs",
			},
		},
		{
			"@type": "ListItem",
			position: 4,
			item: {
				"@type": "Offer",
				name: "Préparation Mentale",
				description: "Séance de préparation mentale (examens, sport, entretiens)",
				price: "90",
				priceCurrency: "EUR",
				seller: { "@type": "LocalBusiness", name: "Aurélia Desvaux" },
				url: "https://aurelia-desvaux.fr/tarifs",
			},
		},
		{
			"@type": "ListItem",
			position: 5,
			item: {
				"@type": "Offer",
				name: "Session Dream Machine",
				description: "Voyage intérieur par stimulation lumineuse",
				price: "30",
				priceCurrency: "EUR",
				seller: { "@type": "LocalBusiness", name: "Aurélia Desvaux" },
				url: "https://aurelia-desvaux.fr/dream-machine",
			},
		},
	],
};

export const metadata: Metadata = {
	title: {
		absolute: "Tarifs & Rendez-vous – Séances à Valbonne | Aurélia Desvaux",
	},
	description:
		"Consultez les tarifs des séances de thérapies brèves avec Aurélia Desvaux à Valbonne. Hypnose, PNL, EFT, arrêt du tabac et Dream Machine.",
	alternates: { canonical: "https://aurelia-desvaux.fr/tarifs" },
	openGraph: {
		title: "Tarifs & Rendez-vous | Aurélia Desvaux",
		description:
			"Tarifs des séances de thérapies brèves à Valbonne. Hypnose, PNL, EFT, arrêt du tabac. Prenez rendez-vous en ligne.",
		url: "https://aurelia-desvaux.fr/tarifs",
		siteName: "Aurélia Desvaux – Thérapies Brèves",
		locale: "fr_FR",
		type: "website",
		images: [
			{
				url: "https://aurelia-desvaux.fr/og-image.webp",
				width: 1200,
				height: 630,
				alt: "Tarifs thérapies brèves – Aurélia Desvaux à Valbonne",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Tarifs & Rendez-vous | Aurélia Desvaux",
		description:
			"Tarifs des séances de thérapies brèves à Valbonne. Hypnose, PNL, EFT, arrêt du tabac.",
		images: ["https://aurelia-desvaux.fr/og-image.webp"],
	},
};

export default function TarifsPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(priceSchema) }}
			/>
			<Tarifs />
		</>
	);
}
