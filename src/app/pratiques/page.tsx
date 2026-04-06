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

const faqItems = [
	{
		question: "Qu'est-ce que les thérapies brèves ?",
		answer:
			"Les thérapies brèves sont des approches orientées solution qui visent à produire des changements durables en un nombre limité de séances. Contrairement aux thérapies analytiques longues, elles s'appuient sur les ressources présentes chez chaque personne pour dépasser rapidement les blocages. Hypnose Ericksonienne, PNL et EFT en sont les exemples les plus répandus.",
	},
	{
		question: "Quelle différence entre l'hypnose et la PNL ?",
		answer:
			"L'hypnose Ericksonienne travaille en état de conscience modifiée pour accéder directement aux ressources de l'inconscient. La PNL (Programmation Neuro-Linguistique) agit plutôt en état éveillé, en modifiant les représentations mentales et les schémas de pensée via des protocoles conversationnels ou dynamiques. Les deux sont complémentaires et peuvent être combinées selon les besoins.",
	},
	{
		question: "Combien de séances sont nécessaires ?",
		answer:
			"Le nombre de séances varie selon la problématique et la personne. En général, 3 à 6 séances suffisent pour des problématiques ciblées (phobies, stress ponctuel, confiance en soi). Des objectifs plus profonds ou des traumas anciens peuvent nécessiter un accompagnement plus long. Un premier échange permet d'estimer un cadre adapté à votre situation.",
	},
	{
		question: "L'EFT est-elle efficace pour les traumatismes ?",
		answer:
			"Oui, l'EFT (Emotional Freedom Techniques) est reconnue pour son efficacité sur les traumas, les états de stress post-traumatique et les émotions bloquées. La stimulation des points d'acupuncture associée à la verbalisation permet de désactiver la charge émotionnelle liée aux souvenirs douloureux, sans avoir à les revivre intensément.",
	},
	{
		question: "Les séances se font-elles en présentiel ou en ligne ?",
		answer:
			"Les séances ont lieu en présentiel au cabinet à Valbonne (06560), accessible depuis Antibes, Biot et Sophia-Antipolis. Certaines séances peuvent être proposées à distance selon la thérapie choisie. Contactez Aurélia pour convenir du format le mieux adapté.",
	},
];

export default function PratiquesPage() {
	return (
		<>
			{/* Hooks client globaux */}
			<ClientWrappers />

			{/* H1 SEO — visuellement intégré au hero de la page */}
			<div className="pt-28 pb-2 text-center bg-soft-pink/30">
				<h1 className="font-script text-5xl md:text-6xl text-foreground">
					Mes Pratiques
				</h1>
				<p className="font-body text-muted-foreground mt-2 text-lg">
					Thérapies Brèves à Valbonne — Hypnose, PNL, EFT
				</p>
			</div>

			{/* Contenu principal */}
			<Practices />

			{/* FAQ différenciante */}
			<section className="py-20 bg-soft-pink/20">
				<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
					<div className="text-center mb-12">
						<h2 className="font-script text-4xl md:text-5xl mb-4">
							Questions fréquentes
						</h2>
						<div className="w-24 h-px bg-primary mx-auto" />
					</div>

					<dl className="space-y-8">
						{faqItems.map((item) => (
							<div key={item.question} className="bg-background rounded-2xl p-6 shadow-card">
								<dt className="font-display text-lg text-foreground mb-3">
									{item.question}
								</dt>
								<dd className="font-body text-muted-foreground leading-relaxed">
									{item.answer}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</section>

			{/* JSON-LD ProfessionalService + OfferCatalog */}
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

			{/* JSON-LD FAQPage */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "FAQPage",
						mainEntity: faqItems.map((item) => ({
							"@type": "Question",
							name: item.question,
							acceptedAnswer: {
								"@type": "Answer",
								text: item.answer,
							},
						})),
					}),
				}}
			/>
		</>
	);
}
