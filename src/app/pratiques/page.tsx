import type { Metadata } from "next";
import ClientWrappers from "@/components/ClientWrappers";
import { Practices } from "@/components/Practices";

// Images pour JSON-LD
import hypnoseImg from "@/assets/escalier-spirale.webp";
import pnlImg from "@/assets/pnl-cerveau.webp";
import eftImg from "@/assets/eft-tapping-mains.webp";
import prepaMentaleImg from "@/assets/prepa-mentale.webp";
import dreamMachineImg from "@/assets/dream-machine.webp";

/* =========================
   SEO / METADATA
========================= */
export const metadata: Metadata = {
	title: "Pratiques | Aurélia Desvaux",
	description:
		"Découvrez les thérapies brèves et accompagnements spécialisés proposés par Aurélia Desvaux à Valbonne et en ligne.",
	alternates: {
		canonical: "https://www.aureliadesvaux.com/pratiques",
	},
	openGraph: {
		title: "Pratiques | Aurélia Desvaux",
		description:
			"Découvrez les thérapies brèves et accompagnements spécialisés proposés par Aurélia Desvaux.",
		url: "https://www.aureliadesvaux.com/pratiques",
		siteName: "Aurélia Desvaux",
		type: "website",
		images: [
			{
				url: "https://www.aureliadesvaux.com/og/pratiques.png",
				width: 1200,
				height: 630,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Pratiques | Aurélia Desvaux",
		description: "Thérapies brèves et accompagnements spécialisés",
		images: ["https://www.aureliadesvaux.com/og/pratiques.png"],
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
						"@type": "MedicalBusiness",
						name: "Aurélia Desvaux",
						url: "https://www.aureliadesvaux.com",
						department: therapiesBreves.map((p) => ({
							"@type": "MedicalProcedure",
							name: p.title,
							description: p.description,
							url: `https://www.aureliadesvaux.com${p.link}`,
						})),
					}),
				}}
			/>
		</>
	);
}
