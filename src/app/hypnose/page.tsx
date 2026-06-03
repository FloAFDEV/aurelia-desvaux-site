import { Metadata } from "next";
import { Suspense } from "react";
import HypnoseContent from "./content";

const serviceSchema = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "Hypnose Ericksonienne à Valbonne",
	description:
		"Séances d'hypnose Ericksonienne à Valbonne Sophia-Antipolis. Accompagnement pour stress, anxiété, phobies, insomnie, arrêt du tabac, confiance en soi et gestion de la douleur.",
	provider: { "@id": "https://aurelia-desvaux.fr/#business" },
	areaServed: [
		{ "@type": "City", name: "Valbonne" },
		{ "@type": "City", name: "Sophia-Antipolis" },
		{ "@type": "City", name: "Antibes" },
		{ "@type": "City", name: "Biot" },
		{ "@type": "City", name: "Mougins" },
	],
	url: "https://aurelia-desvaux.fr/hypnose",
	serviceType: "Hypnose Ericksonienne",
	availableChannel: {
		"@type": "ServiceChannel",
		serviceLocation: {
			"@type": "Place",
			address: {
				"@type": "PostalAddress",
				addressLocality: "Valbonne",
				postalCode: "06560",
				addressCountry: "FR",
			},
		},
	},
	termsOfService: "https://aurelia-desvaux.fr/cgu",
};

export const metadata: Metadata = {
	title: {
		absolute:
			"Hypnose Ericksonienne à Valbonne – Arrêt du tabac, perte de poids, stress | Aurélia Desvaux",
	},
	description:
		"Séances d'hypnose Ericksonienne à Valbonne Sophia-Antipolis. Arrêt du tabac, perte de poids, stress, anxiété, phobies, insomnie. Praticienne certifiée Psynapse.",
	alternates: {
		canonical: "/hypnose",
	},
	openGraph: {
		title: "Hypnose Ericksonienne à Valbonne – Arrêt du tabac, stress, phobies | Aurélia Desvaux",
		description:
			"Arrêt du tabac, perte de poids, stress, anxiété, phobies par hypnose à Valbonne. Praticienne certifiée Psynapse.",
		type: "website",
		url: "https://aurelia-desvaux.fr/hypnose",
		locale: "fr_FR",
		siteName: "Aurélia Desvaux",
		images: [
			{
				url: "https://aurelia-desvaux.fr/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Aurélia Desvaux - Hypnose Ericksonienne à Valbonne",
				type: "image/jpeg",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Hypnose Ericksonienne à Valbonne | Aurélia Desvaux",
		description:
			"Séances d'hypnose Ericksonienne. Libérez-vous du stress et des blocages à Valbonne Sophia-Antipolis.",
		images: ["https://aurelia-desvaux.fr/og-image.jpg"],
	},
};

export default function HypnosePage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
			/>
			<Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>
				<HypnoseContent />
			</Suspense>
		</>
	);
}
