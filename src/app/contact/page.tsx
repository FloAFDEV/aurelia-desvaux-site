import { Metadata } from "next";
import ContactContent from "./content";

const contactPageSchema = {
	"@context": "https://schema.org",
	"@type": "ContactPage",
	name: "Contact & Rendez-vous – Aurélia Desvaux",
	url: "https://aurelia-desvaux.fr/contact",
	description:
		"Prenez rendez-vous avec Aurélia Desvaux, hypnothérapeute à Valbonne Sophia-Antipolis. Cabinet au 1 Place Joseph Bermond, séances également disponibles en visioconférence.",
	mainEntity: { "@id": "https://aurelia-desvaux.fr/#business" },
};

export const metadata: Metadata = {
	title: {
		absolute: "Contact & Rendez-vous – Cabinet à Valbonne | Aurélia Desvaux",
	},
	description:
		"Contactez Aurélia Desvaux pour prendre rendez-vous. Hypnothérapeute à Valbonne Sophia-Antipolis. Séances en cabinet ou en visioconférence.",
	alternates: {
		canonical: "/contact",
	},
	openGraph: {
		title: "Contact & Rendez-vous | Aurélia Desvaux – Hypnothérapeute à Valbonne",
		description:
			"Prenez rendez-vous avec Aurélia Desvaux, hypnothérapeute à Valbonne Sophia-Antipolis. Cabinet ou visioconférence.",
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
		title: "Contact | Aurélia Desvaux – Hypnothérapeute à Valbonne",
		description:
			"Prenez rendez-vous avec Aurélia Desvaux à Valbonne Sophia-Antipolis.",
		images: ["https://aurelia-desvaux.fr/og-image.jpg"],
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function ContactPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
			/>
			<ContactContent />
		</>
	);
}
