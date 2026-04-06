// app/therapies/page.tsx
import { Metadata } from "next";
import TherapiesContent from "./content";

export const metadata: Metadata = {
	title: {
		absolute: "Hypnose, PNL & EFT – Approche globale | Aurélia Desvaux",
	},
	description:
		"Hypnose Ericksonienne, PNL et EFT pour gérer le stress, l'anxiété, les traumas et atteindre vos objectifs. Libérez-vous de ce qui vous pèse. Cabinet à Valbonne.",
	alternates: {
		canonical: "https://aurelia-desvaux.fr/therapies",
	},
	keywords: [
		"hypnose",
		"PNL",
		"EFT",
		"thérapies brèves",
		"stress",
		"anxiété",
		"développement personnel",
	],
	openGraph: {
		title: "Hypnose, PNL & EFT – Thérapies Brèves | Aurélia Desvaux",
		description:
			"Hypnose Ericksonienne, PNL et EFT pour votre bien-être et développement personnel.",
		type: "website",
		url: "https://aurelia-desvaux.fr/therapies",
		locale: "fr_FR",
		images: [
			{
				url: "https://aurelia-desvaux.fr/og-image.webp",
				width: 1200,
				height: 630,
				alt: "Thérapies Brèves – Aurélia Desvaux à Valbonne",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Hypnose, PNL & EFT | Aurélia Desvaux",
		description:
			"Hypnose Ericksonienne, PNL et EFT pour votre bien-être. Cabinet à Valbonne Sophia-Antipolis.",
		images: ["https://aurelia-desvaux.fr/og-image.webp"],
	},
};

export default function TherapiesPage() {
	return <TherapiesContent />;
}
