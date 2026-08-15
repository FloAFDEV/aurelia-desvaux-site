import type { Metadata } from "next";
import ConfidenceEnSoiContent from "./content";
import { getSheetData, findTarif } from "@/lib/sheetData";

export const metadata: Metadata = {
	title: {
		absolute:
			"Retrouver Confiance en Soi & Estime de Soi — Antibes, Sophia-Antipolis | Aurélia Desvaux",
	},
	description:
		"Vous vous êtes oubliée dans vos rôles, vos relations, vos obligations ? En thérapie brève (Hypnose, PNL, EFT) à Valbonne, près d'Antibes et Sophia-Antipolis, retrouvez qui vous êtes vraiment.",
	alternates: {
		canonical: "/confiance-en-soi",
	},
	openGraph: {
		title: "Retrouver Confiance en Soi & Estime de Soi — Antibes, Sophia-Antipolis",
		description:
			"Vous ne savez plus qui vous êtes, ce que vous valez ? Thérapie brève à Valbonne, accessible depuis Antibes et Sophia-Antipolis. Retrouvez votre place — la vraie.",
		type: "website",
		url: "https://aurelia-desvaux.fr/confiance-en-soi",
		locale: "fr_FR",
		siteName: "Aurélia Desvaux",
		images: [
			{
				url: "https://aurelia-desvaux.fr/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Aurélia Desvaux - Confiance et estime de soi à Valbonne",
				type: "image/jpeg",
			},
		],
	},
};

export default async function ConfidenceEnSoiPage() {
	const { tarifs } = await getSheetData();
	const tarifSeanceStandard = findTarif(tarifs, "Accompagnement Thérapeutique");

	return <ConfidenceEnSoiContent tarifSeanceStandard={tarifSeanceStandard} />;
}
