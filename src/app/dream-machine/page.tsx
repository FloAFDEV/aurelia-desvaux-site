import { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		absolute:
			"Dream Machine à Valbonne – Relaxation par la lumière | Aurélia Desvaux",
	},
	description:
		"Découvrez la Dream Machine, une expérience immersive de luminothérapie méditative pour explorer des états modifiés de conscience, réduire le stress et stimuler la créativité. Séances à Valbonne et Sophia-Antipolis.",
	alternates: {
		canonical: "/dream-machine",
	},
	openGraph: {
		title: "Dream Machine – Voyage intérieur par la lumière",
		description:
			"Explorez des états de conscience profonds grâce à la Dream Machine. Une expérience unique de relaxation et de méditation par stimulation lumineuse à Valbonne.",
		url: "https://aurelia-desvaux.fr/dream-machine",
		siteName: "Aurélia Desvaux",
		locale: "fr_FR",
		type: "website",
		images: [
			{
				url: "https://aurelia-desvaux.fr/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Dream Machine – Luminothérapie méditative à Valbonne",
				type: "image/jpeg",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Dream Machine – Aurélia Desvaux",
		description:
			"Luminothérapie méditative pour relaxation profonde, créativité et exploration intérieure. Séances Dream Machine à Valbonne.",
		images: ["https://aurelia-desvaux.fr/og-image.jpg"],
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

export { default } from "./content";
