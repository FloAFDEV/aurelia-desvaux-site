import { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
	title: {
		absolute:
			"EFT à Valbonne – Libération émotionnelle & stress | Aurélia Desvaux",
	},
	description:
		"Séances d'EFT (Emotional Freedom Techniques) à Valbonne. Libérez émotions bloquées, stress et anxiété grâce au tapping. Praticienne certifiée, accompagnement bienveillant.",
	keywords: [
		"EFT Valbonne",
		"emotional freedom techniques",
		"tapping",
		"libération émotionnelle",
		"stress",
		"anxiété",
		"traumatismes",
		"burn-out",
		"confiance en soi",
	],
	alternates: {
		canonical: "https://aurelia-desvaux.fr/eft",
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
				url: "https://aurelia-desvaux.fr/og-image.webp",
				width: 1200,
				height: 630,
				alt: "Aurélia Desvaux – EFT à Valbonne",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "EFT à Valbonne | Aurélia Desvaux",
		description:
			"Séances d'EFT pour libérer stress et émotions bloquées. Cabinet à Valbonne Sophia-Antipolis.",
		images: ["https://aurelia-desvaux.fr/og-image.webp"],
	},
};

const serviceSchema = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "EFT – Emotional Freedom Techniques à Valbonne",
	description:
		"Séances d'EFT pour libération émotionnelle, gestion du stress et de l'anxiété. Accompagnement personnalisé à Valbonne Sophia-Antipolis.",
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
	url: "https://aurelia-desvaux.fr/eft",
};

export default function EFTPage() {
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
