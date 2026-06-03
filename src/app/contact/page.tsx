import { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		absolute: "Contact & Rendez-vous – Cabinet à Valbonne | Aurélia Desvaux",
	},
	description:
		"Contactez Aurélia Desvaux pour prendre rendez-vous. Cabinet à Valbonne Sophia-Antipolis. Téléphone, email et adresse disponibles.",
	alternates: {
		canonical: "/contact",
	},
	openGraph: {
		title: "Contact | Aurélia Desvaux",
		description:
			"Contactez Aurélia Desvaux pour prendre rendez-vous. Cabinet à Valbonne Sophia-Antipolis.",
		url: "https://aurelia-desvaux.fr/contact",
		siteName: "Aurélia Desvaux",
		locale: "fr_FR",
		type: "website",
		images: [
			{
				url: "https://aurelia-desvaux.fr/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Aurélia Desvaux - Contact",
				type: "image/jpeg",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Contact | Aurélia Desvaux",
		description: "Contactez Aurélia Desvaux pour prendre rendez-vous à Valbonne Sophia-Antipolis.",
		images: ["https://aurelia-desvaux.fr/og-image.jpg"],
	},
	robots: {
		index: true,
		follow: true,
	},
};

export { default } from "./content";
