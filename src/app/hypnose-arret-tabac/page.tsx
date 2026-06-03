import { Metadata } from "next";
import { Suspense } from "react";
import HypnoseArretTabacContent from "./content";

const serviceSchema = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "Hypnose pour Arrêter de Fumer à Valbonne",
	description:
		"Programme d'hypnose Ericksonienne pour l'arrêt du tabac à Valbonne Sophia-Antipolis. 1 à 2 séances pour arrêter durablement de fumer.",
	provider: {
		"@type": "LocalBusiness",
		name: "Aurélia Desvaux",
		url: "https://aurelia-desvaux.fr",
	},
	offers: {
		"@type": "Offer",
		price: "120",
		priceCurrency: "EUR",
		description: "Programme arrêt du tabac par hypnose – 1 à 2 séances",
	},
	areaServed: [
		{ "@type": "City", name: "Valbonne" },
		{ "@type": "City", name: "Sophia-Antipolis" },
		{ "@type": "City", name: "Antibes" },
		{ "@type": "City", name: "Biot" },
		{ "@type": "City", name: "Mougins" },
		{ "@type": "City", name: "Cannes" },
	],
	url: "https://aurelia-desvaux.fr/hypnose-arret-tabac",
	serviceType: "Hypnose Ericksonienne – Arrêt du tabac",
};

const faqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: [
		{
			"@type": "Question",
			name: "Combien de séances faut-il pour arrêter de fumer par l'hypnose ?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "La plupart des personnes arrêtent de fumer en 1 à 2 séances d'hypnose Ericksonienne. La première séance de 1h30 est généralement suffisante. Une séance de suivi peut être programmée si nécessaire.",
			},
		},
		{
			"@type": "Question",
			name: "L'hypnose est-elle vraiment efficace pour arrêter de fumer ?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "L'hypnose Ericksonienne agit sur les mécanismes inconscients liés à la dépendance au tabac. Elle modifie le rapport émotionnel à la cigarette et renforce la motivation profonde à arrêter. Les résultats varient selon les personnes, mais l'hypnose reste l'une des méthodes les plus efficaces pour un arrêt durable.",
			},
		},
		{
			"@type": "Question",
			name: "Quel est le prix d'une séance hypnose arrêt du tabac à Valbonne ?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Le programme hypnose arrêt du tabac est proposé à 120€ pour la première séance de 1h30. Une éventuelle séance de suivi est facturée 70€.",
			},
		},
		{
			"@type": "Question",
			name: "Faut-il être motivé pour que l'hypnose fonctionne ?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Oui, une motivation sincère est le premier ingrédient du succès. L'hypnose amplifie et ancre cette motivation au niveau inconscient — elle ne remplace pas votre volonté, elle la renforce.",
			},
		},
	],
};

export const metadata: Metadata = {
	title: {
		absolute: "Hypnose Arrêt du Tabac à Valbonne – 1 à 2 séances | Aurélia Desvaux",
	},
	description:
		"Arrêtez de fumer définitivement grâce à l'hypnose Ericksonienne à Valbonne Sophia-Antipolis. Programme personnalisé en 1 à 2 séances. 120€. Hypnothérapeute certifiée.",
	alternates: {
		canonical: "/hypnose-arret-tabac",
	},
	openGraph: {
		title: "Hypnose pour Arrêter de Fumer à Valbonne | Aurélia Desvaux",
		description:
			"Arrêtez de fumer par l'hypnose à Valbonne Sophia-Antipolis. Programme en 1 à 2 séances. Hypnothérapeute certifiée. 120€.",
		url: "https://aurelia-desvaux.fr/hypnose-arret-tabac",
		siteName: "Aurélia Desvaux",
		locale: "fr_FR",
		type: "website",
		images: [
			{
				url: "https://aurelia-desvaux.fr/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Hypnose arrêt du tabac – Aurélia Desvaux à Valbonne",
				type: "image/jpeg",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Hypnose Arrêt du Tabac à Valbonne | Aurélia Desvaux",
		description:
			"Arrêtez de fumer définitivement en 1 à 2 séances d'hypnose à Valbonne. 120€.",
		images: ["https://aurelia-desvaux.fr/og-image.jpg"],
	},
};

export default function HypnoseArretTabacPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
			/>
			<Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>
				<HypnoseArretTabacContent />
			</Suspense>
		</>
	);
}
