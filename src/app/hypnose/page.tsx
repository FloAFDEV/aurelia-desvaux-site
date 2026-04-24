import { Metadata } from "next";
import { Suspense } from "react";
import HypnoseContent from "./content";

const serviceSchema = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "Hypnose Ericksonienne à Valbonne",
	description:
		"Séances d'hypnose Ericksonienne à Valbonne Sophia-Antipolis. Accompagnement pour stress, anxiété, phobies, insomnie, arrêt du tabac, confiance en soi et gestion de la douleur.",
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
		{ "@type": "City", name: "Mougins" },
	],
	url: "https://aurelia-desvaux.fr/hypnose",
	serviceType: "Hypnose Ericksonienne",
	termsOfService: "https://aurelia-desvaux.fr/cgu",
};

export const metadata: Metadata = {
	title: {
		absolute:
			"Hypnose à Valbonne – Stress, anxiété, phobies | Aurélia Desvaux",
	},
	description:
		"Séances d'hypnose Ericksonienne à Valbonne Sophia-Antipolis. Libérez-vous du stress, de l'anxiété et des phobies. Hypnothérapeute certifiée, accompagnement bienveillant.",
	keywords: [
		"hypnose ericksonienne",
		"hypnothérapeute",
		"Valbonne",
		"Sophia-Antipolis",
		"stress",
		"anxiété",
		"phobies",
		"confiance en soi",
	],
	alternates: {
		canonical: "https://aurelia-desvaux.fr/hypnose",
	},
	openGraph: {
		title: "Hypnose à Valbonne – Stress, anxiété, phobies | Aurélia Desvaux",
		description:
			"Séances d'hypnose Ericksonienne à Valbonne. Libérez-vous du stress, de l'anxiété et des phobies. Hypnothérapeute certifiée.",
		type: "website",
		url: "https://aurelia-desvaux.fr/hypnose",
		locale: "fr_FR",
		siteName: "Aurélia Desvaux - Thérapies Brèves",
		images: [
			{
				url: "https://aurelia-desvaux.fr/og-image.webp",
				width: 1200,
				height: 630,
				alt: "Aurélia Desvaux - Hypnose Ericksonienne à Valbonne",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Hypnose Ericksonienne à Valbonne | Aurélia Desvaux",
		description:
			"Séances d'hypnose Ericksonienne. Libérez-vous du stress et des blocages à Valbonne Sophia-Antipolis.",
		images: ["https://aurelia-desvaux.fr/og-image.webp"],
	},
};

export default function HypnosePage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
			/>
			<Suspense fallback={<div>Chargement...</div>}>
				<HypnoseContent />
			</Suspense>
		</>
	);
}
