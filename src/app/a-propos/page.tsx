import { Metadata } from "next";
import { Suspense } from "react";
import AProposContent from "./content";

const personSchema = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Aurélia Desvaux",
	jobTitle: "Praticienne en Hypnose Ericksonienne, PNL et EFT",
	url: "https://aurelia-desvaux.fr",
	image: "https://aurelia-desvaux.fr/og-image.jpg",
	email: "desvauxaurelia@gmail.com",
	telephone: "+33620145306",
	description:
		"Aurélia Desvaux est praticienne certifiée en Hypnose Ericksonienne, PNL et EFT à Valbonne Sophia-Antipolis. Après 15 ans en gestion de projets et management, elle se consacre à l'accompagnement thérapeutique bienveillant.",
	worksFor: {
		"@type": "LocalBusiness",
		name: "Aurélia Desvaux – Thérapies Brèves",
		address: {
			"@type": "PostalAddress",
			streetAddress: "1 Place Joseph BERMOND, Bat OPHIRA 1 - 2e étage",
			addressLocality: "Valbonne",
			postalCode: "06560",
			addressCountry: "FR",
		},
	},
	sameAs: [
		"https://www.facebook.com/AureliaDesvauxPsychopraticienne/",
		"https://www.instagram.com/aurelia_desvaux_therapiebreve/",
		"https://www.linkedin.com/in/aur%C3%A9lia-desvaux-876459a/?originalSubdomain=fr",
		"https://www.medoucine.com/consultation/valbonne/aurelia-desvaux/1951",
	],
};

export const metadata: Metadata = {
	title: {
		absolute: "À propos – Aurélia Desvaux, Hypnothérapeute à Valbonne",
	},
	description:
		"Découvrez le parcours d'Aurélia Desvaux, praticienne certifiée en Hypnose Ericksonienne, PNL et EFT à Valbonne Sophia-Antipolis. Formations, certifications et approche thérapeutique.",
	alternates: {
		canonical: "/a-propos",
	},
	openGraph: {
		title: "À propos – Aurélia Desvaux | Hypnothérapeute à Valbonne",
		description:
			"Parcours, certifications et approche d'Aurélia Desvaux, praticienne en thérapies brèves à Valbonne Sophia-Antipolis.",
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
		title: "À propos – Aurélia Desvaux | Valbonne",
		description:
			"Parcours et certifications d'Aurélia Desvaux, praticienne en hypnose, PNL et EFT à Valbonne.",
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
