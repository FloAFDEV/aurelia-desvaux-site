import type { Metadata } from "next";
import ArretTabacContent from "./content";

export const metadata: Metadata = {
	title: {
		absolute:
			"Arrêter de Fumer — Accompagnement à Antibes, Sophia-Antipolis | Aurélia Desvaux",
	},
	description:
		"Vous voulez arrêter de fumer sans vous battre contre vous-même ? En 1 à 2 séances d'hypnose et thérapie brève à Valbonne, près d'Antibes et Sophia-Antipolis, libérez-vous du tabac durablement.",
	alternates: {
		canonical: "/arret-tabac",
	},
	openGraph: {
		title: "Arrêter de Fumer — Accompagnement à Antibes, Sophia-Antipolis",
		description:
			"Arrêtez de fumer en 1 à 2 séances d'hypnose à Valbonne, accessible depuis Antibes et Sophia-Antipolis. Sans volonté à toute épreuve, sans lutte intérieure.",
		type: "website",
		url: "https://aurelia-desvaux.fr/arret-tabac",
		locale: "fr_FR",
		siteName: "Aurélia Desvaux",
		images: [
			{
				url: "https://aurelia-desvaux.fr/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Aurélia Desvaux - Arrêt du tabac par hypnose à Valbonne",
				type: "image/jpeg",
			},
		],
	},
};

export default function ArretTabacPage() {
	return <ArretTabacContent />;
}
