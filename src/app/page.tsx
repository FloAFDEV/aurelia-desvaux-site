import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Therapies } from "@/components/Therapies";
import { Practices } from "@/components/Practices";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
	title: {
		absolute: "Aurélia Desvaux | Hypnose, PNL & EFT à Valbonne Sophia-Antipolis",
	},
	description:
		"Hypnothérapeute à Valbonne Sophia-Antipolis – Hypnose Ericksonienne, PNL et EFT. Arrêt du tabac, perte de poids, stress, anxiété, phobies. Praticienne certifiée Psynapse.",
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "Aurélia Desvaux | Hypnose, PNL & EFT à Valbonne",
		description:
			"Hypnose Ericksonienne, PNL et EFT à Valbonne. Arrêt du tabac, perte de poids, stress, anxiété, phobies. Praticienne certifiée, cabinet à Sophia-Antipolis.",
		url: "https://aurelia-desvaux.fr",
		siteName: "Aurélia Desvaux",
		locale: "fr_FR",
		type: "website",
		images: [
			{
				url: "https://aurelia-desvaux.fr/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Aurélia Desvaux - Thérapeute à Valbonne",
				type: "image/jpeg",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Aurélia Desvaux | Hypnose, PNL & EFT à Valbonne",
		description:
			"Thérapeute en Hypnose, PNL & EFT. Accompagnement bienveillant pour votre bien-être à Valbonne Sophia-Antipolis.",
		images: ["https://aurelia-desvaux.fr/og-image.jpg"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},
};

// FAQ JSON-LD en Server Component — garanti présent dans le HTML initial
const faqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: [
		{
			"@type": "Question",
			name: "Comment se déroule une première séance de thérapie brève ?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "La première séance dure environ 1h30 et permet de faire connaissance, d'identifier votre problématique et vos objectifs. Nous explorons ensemble votre situation actuelle et définissons un plan d'accompagnement personnalisé. Cette séance est aussi l'occasion de découvrir les techniques que nous utiliserons (hypnose, PNL, EFT) et de répondre à toutes vos questions.",
			},
		},
		{
			"@type": "Question",
			name: "Combien de séances sont nécessaires pour voir des résultats ?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Les thérapies brèves portent bien leur nom : la plupart des personnes constatent des résultats significatifs en 3 à 6 séances. Certaines problématiques peuvent se résoudre en une seule séance, tandis que d'autres nécessitent un accompagnement plus long. Nous faisons régulièrement le point ensemble pour adapter l'accompagnement à vos progrès.",
			},
		},
		{
			"@type": "Question",
			name: "Quelle est la différence entre l'hypnose, la PNL et l'EFT ?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "L'hypnose agit avec l'inconscient pour créer des changements profonds et durables. La PNL modifie les schémas de pensée et comportements limitants. L'EFT libère les émotions bloquées par des tapotements sur des points d'acupuncture. Ces approches sont complémentaires et peuvent être combinées selon vos besoins.",
			},
		},
		{
			"@type": "Question",
			name: "Les séances sont-elles remboursées par la mutuelle ?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "De nombreuses mutuelles proposent un forfait médecine douce. Une facture détaillée vous est fournie pour transmission à votre organisme.",
			},
		},
		{
			"@type": "Question",
			name: "Puis-je consulter à distance en visio ?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Oui, les séances en visioconférence sont tout aussi efficaces. Seule la Dream Machine nécessite une séance en présentiel, car l'appareil doit être utilisé sur place.",
			},
		},
		{
			"@type": "Question",
			name: "Les thérapies brèves sont-elles adaptées aux adolescents ?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Oui, particulièrement l'hypnose et l'EFT. J'adapte les techniques à leur âge pour des problématiques comme le stress scolaire, les phobies ou le manque de confiance.",
			},
		},
		{
			"@type": "Question",
			name: "Quelle est la différence entre la préparation mentale et une thérapie ?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "La préparation mentale vise un objectif précis (examen, compétition, prise de parole) alors qu'une thérapie traite des problématiques de fond. Les deux approches peuvent être complémentaires.",
			},
		},
	],
};

export default function HomePage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
			/>
			<Hero />
			<Therapies />
			<Practices />
			<About />
			<Testimonials />
			<FAQ />
			<Contact />
		</>
	);
}
