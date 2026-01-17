import { Metadata } from "next";
import { Suspense } from "react";
import HypnoseContent from "./content";

export const metadata: Metadata = {
	title: "Hypnose Ericksonienne à Valbonne | Aurélia Desvaux - Hypnothérapeute",
	description:
		"Séances d'hypnose Ericksonienne à Valbonne Sophia-Antipolis. Libérez-vous du stress, anxiété, phobies. Hypnothérapeute certifiée, accompagnement bienveillant.",
	keywords: [
		"hypnose ericksonienne",
		"hypnothérapeute",
		"Valbonne",
		"Sophia-Antipolis",
		"stress",
		"anxiété",
		"phobies",
		"confiance en soi",
	],
	alternates: {
		canonical: "https://aurelia-desvaux.fr/hypnose",
	},
	openGraph: {
		title: "Hypnose Ericksonienne à Valbonne | Aurélia Desvaux - Hypnothérapeute",
		description:
			"Séances d'hypnose Ericksonienne à Valbonne Sophia-Antipolis. Libérez-vous du stress, anxiété, phobies. Hypnothérapeute certifiée.",
		type: "website",
		url: "https://aurelia-desvaux.fr/hypnose",
		locale: "fr_FR",
		siteName: "Aurélia Desvaux - Thérapies Brèves",
		images: [
			{
				url: "https://aurelia-desvaux.fr/og-image.webp",
				width: 1200,
				height: 630,
				alt: "Aurélia Desvaux - Hypnose Ericksonienne à Valbonne",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Hypnose Ericksonienne à Valbonne | Aurélia Desvaux",
		description:
			"Séances d'hypnose Ericksonienne. Libérez-vous du stress et des blocages à Valbonne Sophia-Antipolis.",
		images: ["https://aurelia-desvaux.fr/og-image.webp"],
	},
};

export default function HypnosePage() {
	return (
		<Suspense fallback={<div>Chargement...</div>}>
			<HypnoseContent />
		</Suspense>
	);
}
