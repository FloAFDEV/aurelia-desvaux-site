import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Conditions Générales d'Utilisation | Aurélia Desvaux - Thérapeute à Valbonne",
	description:
		"Conditions générales d'utilisation du site aurelia-desvaux.fr - Modalités d'accès et d'utilisation du site.",
	robots: {
		index: false,
		follow: true,
	},
	alternates: {
		canonical: "https://aurelia-desvaux.fr/cgu",
	},
};

// Import du content
export { default } from "./content";
