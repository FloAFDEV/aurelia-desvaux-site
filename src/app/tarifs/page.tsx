import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Tarifs from "@/components/Tarifs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Tarifs & Rendez-vous | Aurélia Desvaux",
	description:
		"Consultez les tarifs des séances de thérapies brèves avec Aurélia Desvaux à Valbonne. Hypnose, PNL, EFT, arrêt du tabac et Dream Machine.",
	alternates: { canonical: "https://aurelia-desvaux.com/tarifs" },
	openGraph: {
		title: "Tarifs & Rendez-vous | Aurélia Desvaux",
		description:
			"Tarifs des séances de thérapies brèves à Valbonne. Hypnose, PNL, EFT, arrêt du tabac. Prenez rendez-vous en ligne.",
		url: "https://aurelia-desvaux.com/tarifs",
		siteName: "Aurélia Desvaux - Thérapies Brèves",
		locale: "fr_FR",
		type: "website",
		images: [
			{
				url: "https://aurelia-desvaux.com/og-image.webp",
				width: 1200,
				height: 630,
				alt: "Tarifs thérapies brèves - Aurélia Desvaux à Valbonne",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Tarifs & Rendez-vous | Aurélia Desvaux",
		description:
			"Tarifs des séances de thérapies brèves à Valbonne. Hypnose, PNL, EFT, arrêt du tabac.",
		images: [
			{
				url: "https://aurelia-desvaux.com/og-image.webp",
				alt: "Aurélia Desvaux - Thérapeute à Valbonne",
			},
		],
	},
};

export default function TarifsPage() {
	return (
		<div className={inter.className}>
			<Tarifs />
		</div>
	);
}
