import { Metadata } from "next";
import { Suspense } from "react";
import AProposContent from "./content";

// Même @id que l'entité Person de StructuredData.tsx : ce bloc enrichit l'entité
// globale (hasCredential, alumniOf) au lieu d'en déclarer une seconde. jobTitle
// aligné sur l'entité globale pour éviter deux intitulés contradictoires.
const personSchema = {
	"@context": "https://schema.org",
	"@type": "Person",
	"@id": "https://aurelia-desvaux.fr/#person",
	name: "Aurélia Desvaux",
	jobTitle: "Hypnothérapeute certifiée – Hypnose Ericksonienne, PNL et EFT",
	url: "https://aurelia-desvaux.fr",
	image: "https://aurelia-desvaux.fr/og-image.jpg",
	email: "desvauxaurelia@gmail.com",
	telephone: "+33620145306",
	description:
		"Aurélia Desvaux est praticienne certifiée en Hypnose Ericksonienne, PNL et EFT à Valbonne, Antibes et Sophia-Antipolis. Spécialisée dans l'arrêt du tabac, la perte de poids et la gestion du stress, elle accompagne adultes et sportifs grâce aux thérapies brèves.",
	knowsAbout: [
		"Hypnose Ericksonienne",
		"PNL – Programmation Neuro-Linguistique",
		"EFT / TFT – Emotional Freedom Techniques",
		"Arrêt du tabac",
		"Perte de poids",
		"Gestion du stress",
		"Phobies",
		"Accompagnement thérapeutique",
	],
	hasCredential: [
		{
			"@type": "EducationalOccupationalCredential",
			name: "Formation de Maître Praticien en PNL",
			credentialCategory: "certification",
			dateCreated: "2020",
			recognizedBy: { "@type": "Organization", name: "Psynapse – École de psychothérapie" },
		},
		{
			"@type": "EducationalOccupationalCredential",
			name: "Spécialisation Anneau Gastrique Hypnotique",
			credentialCategory: "certification",
			dateCreated: "2020",
			recognizedBy: { "@type": "Organization", name: "Psynapse – École de psychothérapie" },
		},
		{
			"@type": "EducationalOccupationalCredential",
			name: "Formation de Spécialisation en Perte de Poids et Arrêt du Tabac",
			credentialCategory: "certification",
			dateCreated: "2020",
			recognizedBy: { "@type": "Organization", name: "Psynapse – École de psychothérapie" },
		},
		{
			"@type": "EducationalOccupationalCredential",
			name: "Formation de Praticien en Hypnose Ericksonienne",
			credentialCategory: "certification",
			dateCreated: "2020",
			recognizedBy: { "@type": "Organization", name: "Psynapse – École de psychothérapie" },
		},
		{
			"@type": "EducationalOccupationalCredential",
			name: "Accreditation of EFT / TFT Tapping Practitioner",
			credentialCategory: "certification",
			dateCreated: "2020",
			recognizedBy: { "@type": "Organization", name: "The Priority Academy" },
		},
	],
	alumniOf: [
		{ "@type": "Organization", name: "Psynapse – École de psychothérapie" },
		{ "@type": "Organization", name: "The Priority Academy" },
	],
	// Référence l'entité LocalBusiness globale (StructuredData.tsx) plutôt que d'en
	// redéclarer une copie partielle : évite un second établissement pour Google.
	worksFor: { "@id": "https://aurelia-desvaux.fr/#business" },
	sameAs: [
		"https://www.facebook.com/AureliaDesvauxPsychopraticienne/",
		"https://www.instagram.com/aurelia_desvaux_therapiebreve/",
		"https://www.linkedin.com/in/aur%C3%A9lia-desvaux-876459a/?originalSubdomain=fr",
		"https://www.medoucine.com/consultation/valbonne/aurelia-desvaux/1951",
	],
};

export const metadata: Metadata = {
	title: {
		absolute: "Aurélia Desvaux – Hypnothérapeute, PNL & EFT à Valbonne Sophia-Antipolis",
	},
	description:
		"Praticienne certifiée en Hypnose Ericksonienne, PNL et EFT à Valbonne. Spécialisée dans l'arrêt du tabac, la perte de poids et la gestion du stress. Découvrez son parcours et ses certifications.",
	alternates: {
		canonical: "/a-propos",
	},
	openGraph: {
		title: "Aurélia Desvaux – Hypnothérapeute certifiée à Valbonne Sophia-Antipolis",
		description:
			"Hypnose Ericksonienne, PNL, EFT à Valbonne. Spécialisée arrêt du tabac, perte de poids, gestion du stress. Praticienne certifiée, formations Psynapse et The Priority Academy.",
		url: "https://aurelia-desvaux.fr/a-propos",
		siteName: "Aurélia Desvaux",
		locale: "fr_FR",
		type: "profile",
		images: [
			{
				url: "https://aurelia-desvaux.fr/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Aurélia Desvaux – Hypnothérapeute à Valbonne",
				type: "image/jpeg",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Aurélia Desvaux – Hypnothérapeute, PNL & EFT à Valbonne",
		description:
			"Praticienne certifiée en hypnose, PNL et EFT à Valbonne. Spécialisée arrêt du tabac, perte de poids, stress.",
		images: ["https://aurelia-desvaux.fr/og-image.jpg"],
	},
};

export default function AProposPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
			/>
			<Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>
				<AProposContent />
			</Suspense>
		</>
	);
}
