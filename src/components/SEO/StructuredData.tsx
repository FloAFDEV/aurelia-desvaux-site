/**
 * StructuredData — Source de vérité unique pour les JSON-LD LocalBusiness + Person.
 *
 * Rendu SSR via <script dangerouslySetInnerHTML> : visible dans view-source
 * dès le premier octet, sans aucun chargement JavaScript différé.
 *
 * NE PAS utiliser next/script ici : il différerait l'injection hors SSR.
 *
 * @id permet à Google de résoudre l'entité cross-pages sans dupliquer les données.
 */

const localBusiness = {
	"@context": "https://schema.org",
	"@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
	"@id": "https://aurelia-desvaux.fr/#business",
	name: "Aurélia Desvaux",
	description:
		"Aurélia Desvaux, hypnothérapeute à Valbonne Sophia-Antipolis. Spécialisée en arrêt du tabac, perte de poids, gestion du stress et des phobies. Hypnose Ericksonienne, PNL et EFT.",
	url: "https://aurelia-desvaux.fr",
	logo: "https://aurelia-desvaux.fr/favicon-apple.png",
	image: "https://aurelia-desvaux.fr/og-image.jpg",
	telephone: "+33620145306",
	email: "desvauxaurelia@gmail.com",
	priceRange: "€€",
	knowsAbout: [
		"Hypnose Ericksonienne",
		"PNL – Programmation Neuro-Linguistique",
		"EFT – Emotional Freedom Techniques",
		"Arrêt du tabac",
		"Perte de poids",
		"Gestion du stress",
		"Phobies",
		"Préparation mentale",
		"Thérapies brèves",
	],
	address: {
		"@type": "PostalAddress",
		streetAddress: "1 Place Joseph BERMOND, Bat OPHIRA 1 - 2e étage",
		addressLocality: "Valbonne",
		addressRegion: "Alpes-Maritimes",
		postalCode: "06560",
		addressCountry: "FR",
	},
	geo: {
		"@type": "GeoCoordinates",
		latitude: 43.6216,
		longitude: 7.0374,
	},
	hasMap:
		"https://www.google.com/maps/place/1+Pl.+Joseph+Bermond,+06560+Valbonne",
	openingHoursSpecification: [
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
			],
			opens: "08:15",
			closes: "19:00",
		},
	],
	areaServed: [
		{ "@type": "City", name: "Valbonne" },
		{ "@type": "City", name: "Sophia-Antipolis" },
		{ "@type": "City", name: "Antibes" },
		{ "@type": "City", name: "Biot" },
		{ "@type": "City", name: "Mougins" },
		{ "@type": "City", name: "Cannes" },
		{ "@type": "City", name: "Nice" },
		{ "@type": "City", name: "Grasse" },
		{ "@type": "City", name: "Villeneuve-Loubet" },
		{ "@type": "City", name: "Roquefort-les-Pins" },
	],
	sameAs: [
		"https://www.facebook.com/AureliaDesvauxPsychopraticienne/",
		"https://www.instagram.com/aurelia_desvaux_therapiebreve/",
		"https://www.linkedin.com/in/aur%C3%A9lia-desvaux-876459a/?originalSubdomain=fr",
		"https://www.medoucine.com/consultation/valbonne/aurelia-desvaux/1951",
	],
};

const person = {
	"@context": "https://schema.org",
	"@type": "Person",
	"@id": "https://aurelia-desvaux.fr/#person",
	name: "Aurélia Desvaux",
	jobTitle: "Hypnothérapeute certifiée – Hypnose Ericksonienne, PNL et EFT",
	url: "https://aurelia-desvaux.fr",
	image: "https://aurelia-desvaux.fr/og-image.jpg",
	email: "desvauxaurelia@gmail.com",
	telephone: "+33620145306",
	knowsAbout: [
		"Hypnose Ericksonienne",
		"PNL – Programmation Neuro-Linguistique",
		"EFT – Emotional Freedom Techniques",
		"Arrêt du tabac",
		"Perte de poids",
		"Gestion du stress",
		"Phobies",
		"Préparation mentale",
	],
	worksFor: { "@id": "https://aurelia-desvaux.fr/#business" },
	sameAs: [
		"https://www.facebook.com/AureliaDesvauxPsychopraticienne/",
		"https://www.instagram.com/aurelia_desvaux_therapiebreve/",
		"https://www.linkedin.com/in/aur%C3%A9lia-desvaux-876459a/?originalSubdomain=fr",
		"https://www.medoucine.com/consultation/valbonne/aurelia-desvaux/1951",
	],
};

export function StructuredData() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
			/>
		</>
	);
}
