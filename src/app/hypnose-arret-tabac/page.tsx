import { Metadata } from "next";
import { Suspense } from "react";
import HypnoseArretTabacContent from "./content";

const serviceSchema = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "Hypnose pour Arrêter de Fumer à Valbonne",
	description:
		"Programme d'hypnose Ericksonienne pour le sevrage tabagique à Valbonne Sophia-Antipolis. Arrêt du tabac, gestion des compulsions et addiction cigarette en 1 à 2 séances. Praticienne certifiée Psynapse.",
	provider: {
		"@type": "LocalBusiness",
		name: "Aurélia Desvaux – Hypnothérapeute à Valbonne Sophia-Antipolis",
		url: "https://aurelia-desvaux.fr",
	},
	offers: {
		"@type": "Offer",
		price: "120",
		priceCurrency: "EUR",
		description: "Programme arrêt du tabac par hypnose – 1 à 2 séances",
	},
	hasOfferCatalog: {
		"@type": "OfferCatalog",
		name: "Programme hypnose arrêt du tabac",
		itemListElement: [
			{
				"@type": "Offer",
				name: "Séance 1 – Bilan et hypnose arrêt du tabac",
				price: "120",
				priceCurrency: "EUR",
				description:
					"Séance de 1h30 : bilan approfondi, identification des déclencheurs émotionnels, induction hypnotique personnalisée.",
			},
			{
				"@type": "Offer",
				name: "Séance 2 – Consolidation (si besoin)",
				price: "70",
				priceCurrency: "EUR",
				description:
					"Séance de 1h : consolidation des changements, gestion des situations à risque, ancrage identitaire non-fumeur.",
			},
		],
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
		absolute: "Hypnose Arrêt du Tabac Valbonne – Sevrage Tabagique | Aurélia Desvaux",
	},
	description:
		"Arrêtez de fumer par l'hypnose Ericksonienne à Valbonne. Sevrage tabagique, addiction à la cigarette, gestion du stress : programme en 1 à 2 séances. 120€. Praticienne certifiée Psynapse.",
	alternates: {
		canonical: "/hypnose-arret-tabac",
	},
	openGraph: {
		title: "Hypnose Arrêt du Tabac à Valbonne – Sevrage Tabagique | Aurélia Desvaux",
		description:
			"Sevrage tabagique par hypnose Ericksonienne à Valbonne. Addiction cigarette, stress, compulsions : accompagnement personnalisé en 1 à 2 séances. 120€.",
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
		title: "Hypnose Arrêt du Tabac & Sevrage Tabagique à Valbonne | Aurélia Desvaux",
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
