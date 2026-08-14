import type { Metadata } from "next";
import StressAnxieteContent from "./content";

export const metadata: Metadata = {
	title: {
		absolute:
			"Hypnose & Thérapie pour le Stress et l'Anxiété — Antibes, Sophia-Antipolis | Aurélia Desvaux",
	},
	description:
		"Vous souffrez de crises d'angoisse ou d'anxiété chronique ? En thérapie brève (Hypnose, PNL, EFT) à Valbonne, près d'Antibes et Sophia-Antipolis, retrouvez sérénité et confiance en 3 à 5 séances.",
	alternates: {
		canonical: "/stress-anxiete",
	},
	openGraph: {
		title: "Hypnose & Thérapie pour le Stress et l'Anxiété — Antibes, Sophia-Antipolis",
		description:
			"Crises d'angoisse, anxiété chronique, épuisement émotionnel. Thérapie brève à Valbonne, accessible depuis Antibes et Sophia-Antipolis. 3 à 5 séances suffisent.",
		type: "website",
		url: "https://aurelia-desvaux.fr/stress-anxiete",
		locale: "fr_FR",
		siteName: "Aurélia Desvaux",
		images: [
			{
				url: "https://aurelia-desvaux.fr/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Aurélia Desvaux - Stress et anxiété, thérapie brève à Valbonne",
				type: "image/jpeg",
			},
		],
	},
};

export default function StressAnxietePage() {
	return <StressAnxieteContent />;
}
