import { Metadata } from "next";
import Content from "./content";

const serviceSchema = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "PNL – Programmation Neuro-Linguistique à Valbonne",
	description:
		"Séances de PNL pour développement personnel, confiance en soi, évolution professionnelle. Accompagnement personnalisé à Valbonne Sophia-Antipolis.",
	provider: { "@id": "https://aurelia-desvaux.fr/#business" },
	areaServed: [
		{ "@type": "City", name: "Valbonne" },
		{ "@type": "City", name: "Sophia-Antipolis" },
		{ "@type": "City", name: "Antibes" },
		{ "@type": "City", name: "Biot" },
	],
	url: "https://aurelia-desvaux.fr/pnl",
	serviceType: "PNL – Programmation Neuro-Linguistique",
};

export const metadata: Metadata = {
	title: {
		absolute:
			"PNL à Valbonne – Développement personnel & confiance | Aurélia Desvaux",
	},
	description:
		"Séances de PNL (Programmation Neuro-Linguistique) à Valbonne. Développez votre potentiel, renforcez votre confiance et améliorez votre communication. Praticienne certifiée.",
	alternates: {
		canonical: "/pnl",
	},
	openGraph: {
		title: "PNL à Valbonne – Développement personnel | Aurélia Desvaux",
		description:
			"Séances de PNL pour développement personnel, confiance en soi, communication. Cabinet à Valbonne Sophia-Antipolis.",
		type: "website",
		url: "https://aurelia-desvaux.fr/pnl",
		locale: "fr_FR",
		siteName: "Aurélia Desvaux",
		images: [
			{
				url: "https://aurelia-desvaux.fr/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Aurélia Desvaux – PNL à Valbonne",
				type: "image/jpeg",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "PNL à Valbonne | Aurélia Desvaux",
		description:
			"Programmation Neuro-Linguistique pour développer votre potentiel. Cabinet à Valbonne Sophia-Antipolis.",
		images: ["https://aurelia-desvaux.fr/og-image.jpg"],
	},
};

export default function PNLPage() {
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
