import { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
	title: {
		absolute:
			"PNL à Valbonne – Développement personnel & confiance | Aurélia Desvaux",
	},
	description:
		"Séances de PNL (Programmation Neuro-Linguistique) à Valbonne. Développez votre potentiel, renforcez votre confiance et améliorez votre communication. Praticienne certifiée.",
	alternates: {
		canonical: "https://aurelia-desvaux.fr/pnl",
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
				url: "https://aurelia-desvaux.fr/og-image.webp",
				width: 1200,
				height: 630,
				alt: "Aurélia Desvaux – PNL à Valbonne",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "PNL à Valbonne | Aurélia Desvaux",
		description:
			"Programmation Neuro-Linguistique pour développer votre potentiel. Cabinet à Valbonne Sophia-Antipolis.",
		images: ["https://aurelia-desvaux.fr/og-image.webp"],
	},
};

const serviceSchema = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "PNL – Programmation Neuro-Linguistique à Valbonne",
	description:
		"Séances de PNL pour développement personnel, confiance en soi, évolution professionnelle. Accompagnement personnalisé à Valbonne Sophia-Antipolis.",
	provider: {
		"@type": "LocalBusiness",
		name: "Aurélia Desvaux",
		url: "https://aurelia-desvaux.fr",
	},
	areaServed: [
		{ "@type": "City", name: "Valbonne" },
		{ "@type": "City", name: "Sophia-Antipolis" },
		{ "@type": "City", name: "Antibes" },
		{ "@type": "City", name: "Biot" },
	],
	url: "https://aurelia-desvaux.fr/pnl",
};

export default function PNLPage() {
	return (
		<>
			{/* Service schema SSR — visible dans view-source */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
			/>
			<Content />
		</>
	);
}
