import { Metadata } from "next";
import { Suspense } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Content from "./content";

export const metadata: Metadata = {
	title: {
		absolute: "Ressources & Ateliers – Outils bien-être | Aurélia Desvaux",
	},
	description:
		"Découvrez des ressources gratuites pour votre bien-être : session audio de Havening, ateliers et actualités d'Aurélia Desvaux, thérapeute à Valbonne.",
	alternates: {
		canonical: "https://aurelia-desvaux.fr/ressources",
	},
	openGraph: {
		title: "Ressources & Ateliers | Aurélia Desvaux",
		description:
			"Ressources gratuites pour votre bien-être : session audio de Havening, ateliers et actualités d'Aurélia Desvaux à Valbonne.",
		type: "website",
		url: "https://aurelia-desvaux.fr/ressources",
		locale: "fr_FR",
		siteName: "Aurélia Desvaux – Thérapies Brèves",
		images: [
			{
				url: "https://aurelia-desvaux.fr/og-image.webp",
				width: 1200,
				height: 630,
				alt: "Ressources bien-être gratuites – Aurélia Desvaux",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Ressources & Ateliers | Aurélia Desvaux",
		description:
			"Ressources gratuites pour votre bien-être : session audio de Havening, ateliers à Valbonne.",
		images: ["https://aurelia-desvaux.fr/og-image.webp"],
	},
};

export default function RessourcesPage() {
	return (
		<>
			<Suspense fallback={<div className="h-12" />}>
				<Breadcrumbs items={[{ label: "Ressources & Ateliers", href: "/ressources" }]} />
			</Suspense>
			<Content />
		</>
	);
}
