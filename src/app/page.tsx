import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Therapies } from "@/components/Therapies";
import { Practices } from "@/components/Practices";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
	title: "Aurélia Desvaux | Hypnose, PNL & EFT à Valbonne Sophia-Antipolis",
	description:
		"Thérapeute en Hypnose Ericksonienne, PNL et EFT à Valbonne. Libérez-vous du stress, anxiété, traumas. Accompagnement bienveillant pour votre bien-être.",
	keywords: [
		"hypnose valbonne",
		"PNL sophia antipolis",
		"EFT valbonne",
		"thérapeute valbonne",
		"hypnose ericksonienne",
		"thérapies brèves",
		"stress",
		"anxiété",
		"bien-être",
	],
	alternates: {
		canonical: "https://aurelia-desvaux.fr",
	},
	openGraph: {
		title: "Aurélia Desvaux | Hypnose, PNL & EFT à Valbonne",
		description:
			"Thérapeute en Hypnose Ericksonienne, PNL et EFT à Valbonne Sophia-Antipolis. Accompagnement bienveillant pour stress, anxiété et développement personnel.",
		url: "https://aurelia-desvaux.fr",
		siteName: "Aurélia Desvaux - Thérapies Brèves",
		locale: "fr_FR",
		type: "website",
		images: [
			{
				url: "https://aurelia-desvaux.com/og-image.webp",
				width: 1200,
				height: 630,
				alt: "Aurélia Desvaux - Thérapeute à Valbonne",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Aurélia Desvaux | Hypnose, PNL & EFT à Valbonne",
		description:
			"Thérapeute en Hypnose, PNL & EFT. Accompagnement bienveillant pour votre bien-être à Valbonne Sophia-Antipolis.",
		images: ["https://aurelia-desvaux.com/og-image.webp"],
	},
	metadataBase: new URL("https://aurelia-desvaux.fr"),
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},
};

export default function HomePage() {
	return (
		<>
			<Hero />
			<Therapies />
			<Practices />
			<About />
			<Testimonials />
			<FAQ />
			<Contact />
		</>
	);
}
