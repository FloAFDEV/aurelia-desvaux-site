import type { Metadata } from "next";
import ClientWrappers from "@/components/ClientWrappers";
import { Practices } from "@/components/Practices";

/* =========================
   SEO / METADATA
========================= */
export const metadata: Metadata = {
	title: {
		absolute: "Thérapies Brèves à Valbonne – Hypnose, PNL, EFT | Aurélia Desvaux",
	},
	description:
		"Découvrez les thérapies brèves proposées par Aurélia Desvaux à Valbonne Sophia-Antipolis : Hypnose Ericksonienne, PNL, EFT, Préparation Mentale et Dream Machine.",
	alternates: {
		canonical: "https://aurelia-desvaux.fr/pratiques",
	},
	openGraph: {
		title: "Mes Pratiques | Aurélia Desvaux – Thérapies Brèves à Valbonne",
		description:
			"Hypnose, PNL, EFT, Préparation Mentale et Dream Machine à Valbonne Sophia-Antipolis. Accompagnement bienveillant par Aurélia Desvaux.",
		url: "https://aurelia-desvaux.fr/pratiques",
		siteName: "Aurélia Desvaux",
		type: "website",
		locale: "fr_FR",
		images: [
			{
				url: "https://aurelia-desvaux.fr/og-image.webp",
				width: 1200,
				height: 630,
				alt: "Aurélia Desvaux – Thérapies Brèves à Valbonne",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Mes Pratiques | Aurélia Desvaux",
		description: "Hypnose, PNL, EFT et thérapies brèves à Valbonne Sophia-Antipolis",
		images: ["https://aurelia-desvaux.fr/og-image.webp"],
	},
};

/* =========================
   DONNÉES STRUCTURÉES
========================= */
const therapiesBreves = [
	{
		title: "Hypnose Ericksonienne",
		description:
			"L'hypnose Ericksonienne permet d'aller chercher des ressources inconscientes aidantes.",
		link: "/hypnose",
	},
	{
		title: "Programmation Neuro-Linguistique",
		description:
			"La PNL permet d'accéder à une autre perception d'une situation.",
		link: "/pnl",
	},
	{
		title: "Emotional Freedom Techniques",
		description: "L'EFT permet de se libérer des émotions bloquées.",
		link: "/eft",
	},
	{
		title: "Préparation mentale",
		description:
			"Mobilisez vos ressources internes pour relever vos défis.",
		link: "/preparation-mentale",
	},
	{
		title: "Dream Machine",
		description: "États modifiés de conscience par stimulation lumineuse.",
		link: "/dream-machine",
	},
];

export default function PratiquesPage() {
	return (
		<>
			{/* Hooks client globaux */}
			<ClientWrappers />

			{/* Contenu principal */}
			<Practices />

			{/* JSON-LD */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "ProfessionalService",
						name: "Aurélia Desvaux – Thérapies Brèves",
						url: "https://aurelia-desvaux.fr",
						hasOfferCatalog: {
							"@type": "OfferCatalog",
							name: "Thérapies Brèves",
							itemListElement: therapiesBreves.map((p) => ({
								"@type": "Service",
								name: p.title,
								description: p.description,
								url: `https://aurelia-desvaux.fr${p.link}`,
								provider: {
									"@type": "ProfessionalService",
									name: "Aurélia Desvaux",
								},
							})),
						},
					}),
				}}
			/>
		</>
	);
}
