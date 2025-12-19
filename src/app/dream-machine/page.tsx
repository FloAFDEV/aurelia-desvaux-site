import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Dream Machine – Luminothérapie méditative | Aurélia Desvaux",
	description:
		"Découvrez la Dream Machine, une expérience immersive de luminothérapie méditative pour explorer des états modifiés de conscience, réduire le stress et stimuler la créativité. Séances à Valbonne et Sophia-Antipolis.",
	keywords: [
		"Dream Machine",
		"luminothérapie",
		"méditation par la lumière",
		"états modifiés de conscience",
		"relaxation profonde",
		"gestion du stress",
		"créativité",
		"bien-être",
		"Valbonne",
		"Sophia-Antipolis",
		"Aurélia Desvaux",
	],
	alternates: {
		canonical: "https://aurelia-desvaux.com/dream-machine",
	},
	openGraph: {
		title: "Dream Machine – Voyage intérieur par la lumière",
		description:
			"Explorez des états de conscience profonds grâce à la Dream Machine. Une expérience unique de relaxation et de méditation par stimulation lumineuse à Valbonne.",
		url: "https://aurelia-desvaux.com/dream-machine",
		siteName: "Aurélia Desvaux – Thérapies brèves & bien-être",
		locale: "fr_FR",
		type: "website",
		images: [
			{
				url: "https://aurelia-desvaux.com/og-image.webp",
				width: 1200,
				height: 630,
				alt: "Dream Machine – Luminothérapie méditative à Valbonne",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Dream Machine – Aurélia Desvaux",
		description:
			"Luminothérapie méditative pour relaxation profonde, créativité et exploration intérieure. Séances Dream Machine à Valbonne.",
		images: ["https://aurelia-desvaux.com/og-image.webp"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},
	category: "wellness",
};

// Importer directement le composant depuis l'artifact
export { default } from "./content";
