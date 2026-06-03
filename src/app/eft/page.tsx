import { Metadata } from "next";
import Content from "./content";

const serviceSchema = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "EFT – Emotional Freedom Techniques à Valbonne",
	description:
		"Séances d'EFT pour libération émotionnelle, gestion du stress et de l'anxiété. Accompagnement personnalisé à Valbonne Sophia-Antipolis.",
	provider: { "@id": "https://aurelia-desvaux.fr/#business" },
	areaServed: [
		{ "@type": "City", name: "Valbonne" },
		{ "@type": "City", name: "Sophia-Antipolis" },
		{ "@type": "City", name: "Antibes" },
		{ "@type": "City", name: "Biot" },
	],
	url: "https://aurelia-desvaux.fr/eft",
	serviceType: "EFT – Emotional Freedom Techniques",
};

export const metadata: Metadata = {
	title: {
		absolute:
			"EFT à Valbonne – Libération émotionnelle & stress | Aurélia Desvaux",
	},
	description:
		"Séances d'EFT (Emotional Freedom Techniques) à Valbonne. Libérez émotions bloquées, stress et anxiété grâce au tapping. Praticienne certifiée, accompagnement bienveillant.",
	alternates: {
		canonical: "/eft",
	},
	openGraph: {
		title: "EFT à Valbonne – Libération émotionnelle | Aurélia Desvaux",
		description:
			"Libérez vos émotions bloquées grâce à l'EFT. Séances de tapping à Valbonne Sophia-Antipolis. Praticienne EFT certifiée.",
		type: "website",
		url: "https://aurelia-desvaux.fr/eft",
		locale: "fr_FR",
		siteName: "Aurélia Desvaux",
		images: [
			{
				url: "https://aurelia-desvaux.fr/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Aurélia Desvaux – EFT à Valbonne",
				type: "image/jpeg",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "EFT à Valbonne | Aurélia Desvaux",
		description:
			"Séances d'EFT pour libérer stress et émotions bloquées. Cabinet à Valbonne Sophia-Antipolis.",
		images: ["https://aurelia-desvaux.fr/og-image.jpg"],
	},
};

export default function EFTPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
			/>
			<Content />
		</>
	);
}
