import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CheckCircle, MapPin, ArrowRight } from "lucide-react";

/* =========================
   SEO / METADATA
========================= */
export const metadata: Metadata = {
	title: "Gestion du Stress à Valbonne, Antibes, Biot | Aurélia Desvaux",
	description:
		"Souffrez-vous de stress chronique ou d'anxiété ? Aurélia Desvaux vous accompagne à Valbonne Sophia-Antipolis (10 min de Biot, 15 min d'Antibes) grâce à l'hypnose, l'EFT, la PNL et la Dream Machine.",
	keywords: [
		"gestion du stress",
		"gestion stress Valbonne",
		"gestion stress Antibes",
		"gestion stress Biot",
		"thérapie anxiété Sophia-Antipolis",
		"hypnose stress",
		"EFT anxiété",
		"burn-out Alpes-Maritimes",
		"thérapeute stress 06",
		"bien-être Valbonne",
	],
	alternates: {
		canonical: "https://aurelia-desvaux.fr/gestion-du-stress",
	},
	openGraph: {
		title: "Gestion du Stress à Valbonne, Antibes, Biot | Aurélia Desvaux",
		description:
			"Hypnose, EFT, PNL et Dream Machine pour gérer le stress et l'anxiété. Cabinet à Valbonne Sophia-Antipolis, accessible depuis Antibes et Biot.",
		url: "https://aurelia-desvaux.fr/gestion-du-stress",
		siteName: "Aurélia Desvaux",
		type: "website",
		locale: "fr_FR",
		images: [
			{
				url: "https://aurelia-desvaux.fr/og-image.webp",
				width: 1200,
				height: 630,
				alt: "Gestion du stress – Aurélia Desvaux à Valbonne",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Gestion du Stress | Aurélia Desvaux – Valbonne, Antibes, Biot",
		description:
			"Hypnose, EFT et PNL pour vaincre le stress et l'anxiété. Cabinet à Valbonne Sophia-Antipolis.",
		images: ["https://aurelia-desvaux.fr/og-image.webp"],
	},
};

const structuredData = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "Gestion du Stress – Thérapies Brèves à Valbonne Sophia-Antipolis",
	url: "https://aurelia-desvaux.fr/gestion-du-stress",
	description:
		"Accompagnement thérapeutique pour la gestion du stress et de l'anxiété par Hypnose Ericksonienne, EFT, PNL et Dream Machine. Cabinet à Valbonne, accessible depuis Antibes et Biot.",
	provider: {
		"@type": "ProfessionalService",
		name: "Aurélia Desvaux",
		telephone: "+33620145306",
		address: {
			"@type": "PostalAddress",
			streetAddress: "1 Place Joseph BERMOND, Bat OPHIRA 1 - 2e étage",
			addressLocality: "Valbonne Sophia-Antipolis",
			postalCode: "06560",
			addressCountry: "FR",
		},
	},
	areaServed: [
		{ "@type": "City", name: "Valbonne" },
		{ "@type": "City", name: "Antibes" },
		{ "@type": "City", name: "Biot" },
		{ "@type": "City", name: "Sophia-Antipolis" },
		{ "@type": "City", name: "Mougins" },
	],
	hasOfferCatalog: {
		"@type": "OfferCatalog",
		name: "Approches thérapeutiques pour le stress",
		itemListElement: [
			{
				"@type": "Service",
				name: "Hypnose Ericksonienne contre le stress",
				url: "https://aurelia-desvaux.fr/hypnose",
			},
			{
				"@type": "Service",
				name: "EFT pour l'anxiété",
				url: "https://aurelia-desvaux.fr/eft",
			},
			{
				"@type": "Service",
				name: "PNL – Reprogrammation cognitive",
				url: "https://aurelia-desvaux.fr/pnl",
			},
			{
				"@type": "Service",
				name: "Dream Machine – Relaxation profonde",
				url: "https://aurelia-desvaux.fr/dream-machine",
			},
		],
	},
};

const approches = [
	{
		label: "Hypnose Ericksonienne",
		href: "/hypnose",
		icon: "🌀",
		desc: "L'hypnose permet d'accéder à l'inconscient pour désamorcer les mécanismes du stress. En quelques séances, les réactions automatiques face aux situations stressantes sont reprogrammées.",
		motsCles: ["stress chronique", "anxiété généralisée", "ruminations"],
	},
	{
		label: "EFT – Emotional Freedom Techniques",
		href: "/eft",
		icon: "🖐",
		desc: "Le tapping sur les points d'acupuncture libère les tensions émotionnelles accumulées. Technique rapide, douce et validée scientifiquement pour réduire le cortisol.",
		motsCles: ["burn-out", "stress aigu", "panique"],
	},
	{
		label: "PNL – Programmation Neuro-Linguistique",
		href: "/pnl",
		icon: "🧠",
		desc: "La PNL modifie les schémas de pensée qui amplifient le stress. Vous reprenez le contrôle de vos réactions et développez une meilleure résilience.",
		motsCles: ["perfectionnisme", "stress professionnel", "surmenage"],
	},
	{
		label: "Dream Machine",
		href: "/dream-machine",
		icon: "✨",
		desc: "Technologie de stimulation lumineuse et sonore qui induit des états de relaxation profonde. Idéale pour relâcher les tensions physiques et mentales liées au stress.",
		motsCles: ["stress physique", "tensions corporelles", "insomnie par stress"],
	},
];

const symptomes = [
	"Fatigue chronique",
	"Tensions musculaires",
	"Troubles du sommeil",
	"Irritabilité",
	"Anxiété et ruminations",
	"Difficultés de concentration",
	"Burn-out",
	"Crises d'angoisse",
	"Troubles digestifs liés au stress",
	"Perte de confiance en soi",
	"Procrastination par peur",
	"Épuisement émotionnel",
];

const faqs = [
	{
		q: "En combien de séances voit-on des résultats ?",
		a: "La plupart des patients constatent une amélioration significative dès les 2 à 3 premières séances. Un accompagnement complet dure généralement 4 à 8 séances selon les personnes.",
	},
	{
		q: "Quelle technique choisir pour le stress ?",
		a: "Tout dépend de votre profil et de vos préférences. Nous en discutons lors de la première séance (1h30) pour construire ensemble l'approche la plus adaptée — souvent une combinaison d'hypnose, d'EFT et de PNL.",
	},
	{
		q: "Vous recevez aussi des patients d'Antibes et de Biot ?",
		a: "Oui. Mon cabinet à Valbonne est accessible en 10 minutes depuis Biot et 15 minutes depuis Antibes. Je reçois régulièrement des patients venant de toute la Côte d'Azur.",
	},
	{
		q: "Les séances sont-elles remboursées ?",
		a: "Les thérapies brèves ne sont pas prises en charge par la Sécurité Sociale, mais certaines mutuelles remboursent partiellement. Renseignez-vous auprès de votre mutuelle.",
	},
];

/* =========================
   PAGE COMPONENT
========================= */
export default function GestionDuStressPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>

			<Breadcrumbs
				items={[
					{ label: "Gestion du stress", href: "/gestion-du-stress" },
				]}
			/>

			{/* ── Hero ── */}
			<section className="pt-32 pb-20 bg-soft-pink/30">
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto text-center">
						<p className="inline-flex items-center gap-2 text-primary font-body text-sm mb-4">
							<MapPin className="w-4 h-4" />
							Valbonne · Sophia-Antipolis · Antibes · Biot
						</p>
						<h1 className="font-script text-5xl md:text-6xl text-foreground mb-6">
							Gestion du Stress
						</h1>
						<p className="font-body text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
							Vous souffrez de stress chronique, d&apos;anxiété ou de
							burn-out ? Je vous accompagne avec des thérapies brèves
							efficaces dans mon cabinet à{" "}
							<strong>Valbonne Sophia-Antipolis</strong>, accessible
							depuis Antibes et Biot.
						</p>
						<p className="font-body text-base text-muted-foreground/80 mb-8 max-w-xl mx-auto">
							Hypnose Ericksonienne · EFT · PNL · Dream Machine
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="https://www.medoucine.com/consultation/valbonne/aurelia-desvaux/1951"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground font-body rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
							>
								Prendre rendez-vous
								<ArrowRight className="w-4 h-4" />
							</a>
							<Link
								href="/tarifs"
								className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary font-body rounded-full transition-all duration-300 hover:bg-primary/5"
							>
								Voir les tarifs
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* ── Le stress, c'est quoi ? ── */}
			<section className="py-20 bg-background">
				<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
					<h2 className="font-script text-4xl md:text-5xl text-foreground mb-4">
						Le stress, un signal à écouter
					</h2>
					<div className="w-20 h-px bg-primary mb-8" />
					<div className="space-y-5 font-body text-muted-foreground leading-relaxed">
						<p>
							Le stress est une réponse naturelle de l&apos;organisme
							face à une situation perçue comme menaçante. Ponctuel, il
							est utile. Chronique, il devient un{" "}
							<strong>facteur de risque majeur</strong> pour la santé
							physique et mentale : troubles cardiovasculaires, anxiété,
							dépression, burn-out.
						</p>
						<p>
							Dans notre région — Sophia-Antipolis, Antibes, Valbonne,
							Biot — les professionnels du secteur technologique et
							médical sont particulièrement exposés au{" "}
							<strong>stress professionnel intense</strong>. Les
							thérapies brèves offrent des outils concrets pour briser
							le cycle du stress sans médicaments.
						</p>
						<p>
							Mon approche combine plusieurs techniques selon votre
							profil : chaque parcours est unique, adapté à votre rythme
							et à vos objectifs.
						</p>
					</div>
				</div>
			</section>

			{/* ── Symptômes ── */}
			<section className="py-20 bg-soft-pink/20">
				<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
					<h2 className="font-script text-4xl md:text-5xl text-foreground mb-4">
						Reconnaissez-vous ces symptômes ?
					</h2>
					<div className="w-20 h-px bg-primary mb-10" />
					<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
						{symptomes.map((s) => (
							<div
								key={s}
								className="flex items-center gap-3 p-4 bg-background rounded-xl shadow-soft"
							>
								<CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
								<span className="font-body text-sm text-foreground">
									{s}
								</span>
							</div>
						))}
					</div>
					<p className="font-body text-muted-foreground mt-8 text-center">
						Si vous vous reconnaissez dans plusieurs de ces symptômes,
						une thérapie brève peut vous aider à retrouver l&apos;équilibre.
					</p>
				</div>
			</section>

			{/* ── Approches thérapeutiques ── */}
			<section className="py-20 bg-background">
				<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
					<h2 className="font-script text-4xl md:text-5xl text-foreground mb-4 text-center">
						4 approches pour gérer votre stress
					</h2>
					<div className="w-20 h-px bg-primary mx-auto mb-12" />
					<div className="grid md:grid-cols-2 gap-8">
						{approches.map((a) => (
							<div
								key={a.href}
								className="bg-soft-pink/20 rounded-2xl p-8 hover:shadow-card transition-all duration-300"
							>
								<div className="flex items-center gap-3 mb-4">
									<span className="text-3xl">{a.icon}</span>
									<h3 className="font-display text-xl text-foreground">
										<Link
											href={a.href}
											className="hover:text-primary transition-colors"
										>
											{a.label}
										</Link>
									</h3>
								</div>
								<p className="font-body text-muted-foreground mb-4 text-sm leading-relaxed">
									{a.desc}
								</p>
								<div className="flex flex-wrap gap-2">
									{a.motsCles.map((mc) => (
										<span
											key={mc}
											className="px-3 py-1 bg-primary/10 text-primary text-xs font-body rounded-full"
										>
											{mc}
										</span>
									))}
								</div>
								<Link
									href={a.href}
									className="inline-flex items-center gap-1 mt-4 text-primary text-sm font-body hover:gap-2 transition-all"
								>
									En savoir plus <ArrowRight className="w-3 h-3" />
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── Zone géographique ── */}
			<section className="py-20 bg-soft-pink/20">
				<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
					<h2 className="font-script text-4xl md:text-5xl text-foreground mb-4">
						Je reçois depuis Valbonne, Antibes et Biot
					</h2>
					<div className="w-20 h-px bg-primary mb-8" />
					<div className="grid md:grid-cols-3 gap-6">
						{[
							{
								ville: "Valbonne & Sophia-Antipolis",
								detail: "Cabinet sur place – 1 Place Joseph BERMOND",
								href: "/contact",
							},
							{
								ville: "Antibes & Juan-les-Pins",
								detail: "À 15 min par la D35 ou la voie rapide",
								href: "/hypnose-antibes",
							},
							{
								ville: "Biot & Villeneuve-Loubet",
								detail: "À 10 min via la D4",
								href: "/hypnose-biot",
							},
						].map((z) => (
							<Link
								key={z.ville}
								href={z.href}
								className="group bg-background rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
							>
								<MapPin className="w-6 h-6 text-primary mb-3" />
								<h3 className="font-display text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
									{z.ville}
								</h3>
								<p className="font-body text-sm text-muted-foreground">
									{z.detail}
								</p>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* ── FAQ ── */}
			<section className="py-20 bg-background">
				<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
					<h2 className="font-script text-4xl md:text-5xl text-foreground mb-4">
						Questions fréquentes
					</h2>
					<div className="w-20 h-px bg-primary mb-10" />
					<div className="space-y-6">
						{faqs.map((faq) => (
							<div
								key={faq.q}
								className="border-b border-border pb-6 last:border-0"
							>
								<h3 className="font-display text-lg text-foreground mb-2">
									{faq.q}
								</h3>
								<p className="font-body text-muted-foreground">
									{faq.a}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── CTA ── */}
			<section className="py-20 bg-soft-pink/30">
				<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-2xl text-center">
					<h2 className="font-script text-4xl md:text-5xl text-foreground mb-4">
						Reprenez le contrôle
					</h2>
					<p className="font-body text-muted-foreground mb-8">
						Ne laissez plus le stress décider à votre place. Contactez-moi
						pour une première séance à Valbonne — accessible depuis
						Antibes, Biot et toute la Côte d&apos;Azur.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="https://www.medoucine.com/consultation/valbonne/aurelia-desvaux/1951"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground font-body rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
						>
							Réserver ma séance
							<ArrowRight className="w-4 h-4" />
						</a>
						<Link
							href="/contact"
							className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary font-body rounded-full transition-all duration-300 hover:bg-primary/5"
						>
							Me contacter
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
