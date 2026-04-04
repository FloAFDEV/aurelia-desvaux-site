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
		images: [
			{
				url: "/assets/prepa-mentale.webp",
				width: 1200,
				height: 630,
				alt: "Préparation mentale avec Aurélia Desvaux",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Préparation Mentale | Aurélia Desvaux",
		description:
			"Transformez le stress en énergie positive et ancrez une confiance durable.",
	},
};

export default function PreparationMentalePage() {
	return <PreparationMentaleContent />;
}
