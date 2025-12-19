// app/therapies/page.tsx
import { Metadata } from "next";
import TherapiesContent from "./content";

export const metadata: Metadata = {
	title: "Thérapies Brèves | Aurélia Desvaux",
	description:
		"Hypnose Ericksonienne, PNL et EFT pour gérer le stress, l'anxiété, les traumas et atteindre vos objectifs. Libérez-vous de ce qui vous pèse.",
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
		title: "Thérapies Brèves | Aurélia Desvaux",
		description:
			"Hypnose Ericksonienne, PNL et EFT pour votre bien-être et développement personnel.",
		type: "website",
	},
};

export default function TherapiesPage() {
	return <TherapiesContent />;
}
