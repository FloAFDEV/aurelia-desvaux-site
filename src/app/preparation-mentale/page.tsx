// app/preparation-mentale/page.tsx
import { Metadata } from "next";
import PreparationMentaleContent from "./content";

export const metadata: Metadata = {
	title: {
		absolute:
			"Préparation Mentale à Valbonne – Performance & Confiance | Aurélia Desvaux",
	},
	description:
		"Mobilisez vos ressources internes pour vos examens, compétitions ou entretiens. Transformez le stress en énergie positive grâce à l'hypnose, la PNL et l'EFT. Cabinet à Valbonne.",
	keywords: [
		"préparation mentale",
		"gestion du stress",
		"confiance en soi",
		"performance sportive",
		"examens",
		"entretiens d'embauche",
		"prise de parole",
		"hypnose",
		"PNL",
		"EFT",
		"concentration",
		"mémorisation",
	],
	openGraph: {
		title: "Préparation Mentale | Aurélia Desvaux",
		description:
			"Accompagnement personnalisé en préparation mentale : examens, sport, parole en public. Hypnose, PNL et EFT pour mobiliser vos ressources.",
		type: "website",
		url: "https://aurelia-desvaux.fr/preparation-mentale",
		locale: "fr_FR",
		siteName: "Aurélia Desvaux – Thérapies Brèves",
		images: [
			{
				url: "https://aurelia-desvaux.fr/og-image.webp",
				width: 1200,
				height: 630,
				alt: "Préparation Mentale – Aurélia Desvaux à Valbonne",
			},
		],
	},
	alternates: {
		canonical: "https://aurelia-desvaux.fr/preparation-mentale",
	},
	twitter: {
		card: "summary_large_image",
		title: "Préparation Mentale | Aurélia Desvaux",
		description:
			"Transformez le stress en énergie positive et ancrez une confiance durable.",
		images: ["https://aurelia-desvaux.fr/og-image.webp"],
	},
};

export default function PreparationMentalePage() {
	return <PreparationMentaleContent />;
}
