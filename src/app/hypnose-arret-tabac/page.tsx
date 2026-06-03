import { Metadata } from "next";
import { Suspense } from "react";
import HypnoseArretTabacContent from "./content";

const serviceSchema = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "Hypnose pour Arrêter de Fumer à Valbonne",
	description:
		"Programme d'hypnose Ericksonienne pour le sevrage tabagique à Valbonne Sophia-Antipolis. Arrêt du tabac, gestion des compulsions et addiction cigarette en 1 à 2 séances. Praticienne certifiée Psynapse.",
	provider: { "@id": "https://aurelia-desvaux.fr/#business" },
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
			name: "Comment l'hypnose aide-t-elle à arrêter de fumer ?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "L'hypnose Ericksonienne agit sur les automatismes inconscients liés à la cigarette et modifie les comportements associés au tabac : stress, ennui, habitudes sociales. Elle travaille sur les déclencheurs émotionnels là où les substituts nicotiniques ne peuvent pas agir.",
			},
		},
		{
			"@type": "Question",
			name: "Combien de séances faut-il pour arrêter de fumer par l'hypnose ?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "En 1 à 2 séances d'hypnose, il est possible d'amorcer un sevrage tabagique durable. La première séance de 1h30 est généralement suffisante. Une séance de suivi peut être programmée selon le profil.",
			},
		},
		{
			"@type": "Question",
			name: "L'hypnose est-elle efficace pour tout le monde ?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "L'efficacité dépend de la réceptivité et de l'implication de la personne dans le processus. Une motivation sincère est le premier facteur de réussite. L'hypnose amplifie et ancre cette motivation au niveau inconscient.",
			},
		},
		{
			"@type": "Question",
			name: "L'hypnose aide-t-elle à gérer le stress du sevrage tabagique ?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Oui, l'hypnose agit directement sur le stress, les compulsions et les déclencheurs émotionnels liés au tabac.",
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
