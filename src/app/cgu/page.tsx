import { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		absolute:
			"Conditions Générales d'Utilisation | Aurélia Desvaux - Thérapeute à Valbonne",
	},
	description:
		"Conditions générales d'utilisation du site aurelia-desvaux.fr - Modalités d'accès et d'utilisation du site.",
	robots: {
		index: false,
		follow: true,
	},
	alternates: {
		canonical: "/cgu",
	},
};

// Import du content
export { default } from "./content";
