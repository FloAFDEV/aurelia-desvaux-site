import { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
	title: {
		absolute: "Ressources & Ateliers – Outils bien-être | Aurélia Desvaux",
	},
	description:
		"Découvrez des ressources gratuites pour votre bien-être : session audio de Havening, ateliers et actualités d'Aurélia Desvaux, thérapeute à Valbonne.",
	alternates: {
		canonical: "/ressources",
	},
	openGraph: {
		title: "Ressources & Ateliers | Aurélia Desvaux",
		description:
			"Ressources gratuites pour votre bien-être : session audio de Havening, ateliers et actualités d'Aurélia Desvaux à Valbonne.",
		type: "website",
		url: "https://aurelia-desvaux.fr/ressources",
		locale: "fr_FR",
		siteName: "Aurélia Desvaux",
		images: [
			{
				url: "https://aurelia-desvaux.fr/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Ressources bien-être gratuites – Aurélia Desvaux",
				type: "image/jpeg",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Ressources & Ateliers | Aurélia Desvaux",
		description:
			"Ressources gratuites pour votre bien-être : session audio de Havening, ateliers à Valbonne.",
		images: ["https://aurelia-desvaux.fr/og-image.jpg"],
	},
};

export default function RessourcesPage() {
	return <Content />;
}
