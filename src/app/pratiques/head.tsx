import type { Metadata } from "next";
import hypnoseImg from "@/assets/escalier-spirale.webp";
import pnlImg from "@/assets/pnl-cerveau.webp";
import eftImg from "@/assets/eft-tapping-mains.webp";
import prepaMentaleImg from "@/assets/prepa-mentale.webp";
import dreamMachineImg from "@/assets/dream-machine.webp";

// Metadata pour Next.js
export const metadata: Metadata = {
	title: "Pratiques | Aurélia Desvaux",
	description:
		"Découvrez les thérapies brèves et accompagnements spécialisés proposés par Aurélia Desvaux à Valbonne et en ligne.",
	alternates: { canonical: "/pratiques" },
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

// Données pour JSON-LD
const therapiesBrèves = [
	{
		title: "Hypnose Ericksonienne",
		description:
			"L'hypnose Ericksonienne permet d'aller chercher des ressources inconscientes aidantes, permettant une réorganisation des perceptions.",
		link: "/hypnose",
	},
	{
		title: "Programmation Neuro-Linguistique",
		description:
			"La PNL permet d'accéder à une autre perception d'une situation, parfois conversationnelle, parfois par protocoles dynamiques.",
		link: "/pnl",
	},
	{
		title: "Emotional Freedom Techniques",
		description:
			"L'EFT permet, par stimulation de points énergétiques et verbalisation, de libérer des émotions coincées.",
		link: "/eft",
	},
];

const accompagnements = [
	{
		title: "Préparation mentale",
		description:
			"Mobilisez vos ressources internes pour aborder examens, compétitions et défis professionnels avec calme et confiance.",
		link: "/preparation-mentale",
	},
	{
		title: "Dream Machine",
		description:
			"Explorez des états modifiés de conscience et atteignez une relaxation profonde grâce à cette technologie lumineuse.",
		link: "/dream-machine",
	},
];

export function PratiquesHead() {
	return (
		<>
			{/* JSON-LD pour services */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "MedicalBusiness",
						name: "Aurélia Desvaux",
						url: "https://www.aureliadesvaux.com",
						logo: "https://www.aureliadesvaux.com/logo.png",
						sameAs: [
							"https://www.facebook.com/AureliaDesvauxPsychopraticienne/",
							"https://www.linkedin.com/in/aur%C3%A9lia-desvaux-876459a/",
							"https://www.instagram.com/aurelia_desvaux_therapiebreve/",
						],
						department: therapiesBrèves
							.concat(accompagnements)
							.map((p) => ({
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
