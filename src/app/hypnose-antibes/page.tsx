import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CheckCircle, MapPin, Phone, Clock, ArrowRight } from "lucide-react";

/* =========================
   SEO / METADATA
========================= */
export const metadata: Metadata = {
	title: "Hypnose à Antibes | Aurélia Desvaux – Hypnothérapeute à Valbonne",
	description:
		"Vous cherchez un hypnothérapeute à Antibes ? Aurélia Desvaux reçoit en cabinet à Valbonne Sophia-Antipolis, à 15 min d'Antibes. Hypnose Ericksonienne, EFT, PNL pour stress, anxiété et phobies.",
	keywords: [
		"hypnose Antibes",
		"hypnothérapeute Antibes",
		"hypnose près d'Antibes",
		"thérapies brèves Antibes",
		"EFT Antibes",
		"PNL Antibes",
		"gestion stress Antibes",
		"thérapeute Sophia-Antipolis",
		"hypnose 06",
	],
	alternates: {
		canonical: "https://aurelia-desvaux.fr/hypnose-antibes",
	},
	openGraph: {
		title: "Hypnose à Antibes | Aurélia Desvaux – Hypnothérapeute",
		description:
			"Cabinet de thérapies brèves à 15 min d'Antibes. Hypnose Ericksonienne, EFT et PNL pour retrouver sérénité et confiance en soi.",
		url: "https://aurelia-desvaux.fr/hypnose-antibes",
		siteName: "Aurélia Desvaux",
		type: "website",
		locale: "fr_FR",
		images: [
			{
				url: "https://aurelia-desvaux.fr/og-image.webp",
				width: 1200,
				height: 630,
				alt: "Aurélia Desvaux – Hypnose près d'Antibes à Valbonne",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Hypnose à Antibes | Aurélia Desvaux",
		description:
			"Hypnothérapeute à 15 min d'Antibes. Séances d'hypnose, EFT et PNL à Valbonne Sophia-Antipolis.",
		images: ["https://aurelia-desvaux.fr/og-image.webp"],
	},
};

const structuredData = {
	"@context": "https://schema.org",
	"@type": "ProfessionalService",
	name: "Aurélia Desvaux – Hypnothérapeute près d'Antibes",
	url: "https://aurelia-desvaux.fr/hypnose-antibes",
	telephone: "+33620145306",
	email: "desvauxaurelia@gmail.com",
	description:
		"Praticienne en Hypnose Ericksonienne, EFT et PNL à Valbonne Sophia-Antipolis. À 15 minutes d'Antibes par la D35 ou la voie rapide.",
	address: {
		"@type": "PostalAddress",
		streetAddress: "1 Place Joseph BERMOND, Bat OPHIRA 1 - 2e étage",
		addressLocality: "Valbonne Sophia-Antipolis",
		addressRegion: "Provence-Alpes-Côte d'Azur",
		postalCode: "06560",
		addressCountry: "FR",
	},
	geo: {
		"@type": "GeoCoordinates",
		latitude: 43.6216,
		longitude: 7.0374,
	},
	areaServed: [
		{ "@type": "City", name: "Antibes" },
		{ "@type": "City", name: "Valbonne" },
		{ "@type": "City", name: "Sophia-Antipolis" },
		{ "@type": "City", name: "Biot" },
		{ "@type": "City", name: "Mougins" },
	],
	openingHoursSpecification: [
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
			opens: "08:15",
			closes: "19:00",
		},
	],
	hasOfferCatalog: {
		"@type": "OfferCatalog",
		name: "Thérapies disponibles pour les patients d'Antibes",
		itemListElement: [
			{
				"@type": "Service",
				name: "Hypnose Ericksonienne",
				url: "https://aurelia-desvaux.fr/hypnose",
			},
			{
				"@type": "Service",
				name: "EFT – Emotional Freedom Techniques",
				url: "https://aurelia-desvaux.fr/eft",
			},
			{
				"@type": "Service",
				name: "PNL – Programmation Neuro-Linguistique",
				url: "https://aurelia-desvaux.fr/pnl",
			},
			{
				"@type": "Service",
				name: "Préparation Mentale",
				url: "https://aurelia-desvaux.fr/preparation-mentale",
			},
		],
	},
};

const services = [
	{
		label: "Hypnose Ericksonienne",
		href: "/hypnose",
		desc: "Libération des blocages, gestion du stress et des phobies par l'état hypnotique.",
	},
	{
		label: "EFT – Tapping",
		href: "/eft",
		desc: "Stimulation de points d'acupuncture pour libérer les émotions bloquées.",
	},
	{
		label: "PNL",
		href: "/pnl",
		desc: "Reprogrammation des schémas de pensée limitants pour mieux avancer.",
	},
	{
		label: "Préparation Mentale",
		href: "/preparation-mentale",
		desc: "Coaching mental pour sportifs, étudiants et professionnels.",
	},
	{
		label: "Dream Machine",
		href: "/dream-machine",
		desc: "États modifiés de conscience par stimulation lumineuse et sonore.",
	},
];

const motifs = [
	"Stress et anxiété",
	"Phobies",
	"Confiance en soi",
	"Burn-out",
	"Gestion des émotions",
	"Préparation aux examens",
	"Arrêt du tabac",
	"Troubles du sommeil",
	"Douleurs chroniques",
	"Perte de poids",
];

/* =========================
   PAGE COMPONENT
========================= */
export default function HypnoseAntibesPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>

			<Breadcrumbs
				items={[{ label: "Hypnose à Antibes", href: "/hypnose-antibes" }]}
			/>

			{/* ── Hero ── */}
			<section className="pt-32 pb-20 bg-soft-pink/30">
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto text-center">
						<p className="inline-flex items-center gap-2 text-primary font-body text-sm mb-4">
							<MapPin className="w-4 h-4" />
							Cabinet à Valbonne · 15 min d&apos;Antibes
						</p>
						<h1 className="font-script text-5xl md:text-6xl text-foreground mb-6">
							Hypnose à Antibes
						</h1>
						<p className="font-body text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
							Vous habitez à Antibes, Juan-les-Pins ou au Cap
							d&apos;Antibes et vous recherchez un hypnothérapeute ?
							Mon cabinet est situé à Valbonne Sophia-Antipolis,{" "}
							<strong>à seulement 15 minutes d&apos;Antibes</strong>.
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
								href="/contact"
								className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary font-body rounded-full transition-all duration-300 hover:bg-primary/5"
							>
								Me contacter
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* ── Qui suis-je ── */}
			<section className="py-20 bg-background">
				<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
					<h2 className="font-script text-4xl md:text-5xl text-foreground mb-4">
						Votre thérapeute à proximité d&apos;Antibes
					</h2>
					<div className="w-20 h-px bg-primary mb-8" />
					<div className="space-y-5 font-body text-muted-foreground leading-relaxed">
						<p>
							Je suis <strong>Aurélia Desvaux</strong>, praticienne
							certifiée en Hypnose Ericksonienne, EFT et PNL. Mon
							cabinet est installé au cœur de{" "}
							<strong>Valbonne Sophia-Antipolis</strong>, à 15 minutes
							d&apos;Antibes via la D35 ou la voie rapide.
						</p>
						<p>
							Depuis plusieurs années, j&apos;accompagne des patients
							venant d&apos;Antibes, de Juan-les-Pins, du Cap
							d&apos;Antibes et de Sophia-Antipolis dans leur chemin
							vers le mieux-être. Chaque accompagnement est unique,
							adapté à votre histoire et à vos objectifs.
						</p>
						<p>
							Que vous souhaitiez travailler sur le{" "}
							<strong>stress</strong>, l&apos;<strong>anxiété</strong>,
							des <strong>phobies</strong>, la{" "}
							<strong>confiance en soi</strong> ou tout autre problème
							émotionnel ou comportemental, les thérapies brèves
							offrent des résultats concrets et durables.
						</p>
					</div>
				</div>
			</section>

			{/* ── Services ── */}
			<section className="py-20 bg-soft-pink/20">
				<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
					<h2 className="font-script text-4xl md:text-5xl text-foreground mb-4 text-center">
						Thérapies disponibles pour les patients d&apos;Antibes
					</h2>
					<div className="w-20 h-px bg-primary mx-auto mb-12" />
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{services.map((s) => (
							<Link
								key={s.href}
								href={s.href}
								className="group bg-background rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
							>
								<h3 className="font-display text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
									{s.label}
								</h3>
								<p className="font-body text-sm text-muted-foreground">
									{s.desc}
								</p>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* ── Motifs ── */}
			<section className="py-20 bg-background">
				<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
					<h2 className="font-script text-4xl md:text-5xl text-foreground mb-4">
						Pour quels motifs consulter ?
					</h2>
					<div className="w-20 h-px bg-primary mb-10" />
					<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
						{motifs.map((m) => (
							<div
								key={m}
								className="flex items-center gap-3 p-4 bg-soft-pink/30 rounded-xl"
							>
								<CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
								<span className="font-body text-sm text-foreground">
									{m}
								</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── Accès ── */}
			<section className="py-20 bg-soft-pink/20">
				<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
					<h2 className="font-script text-4xl md:text-5xl text-foreground mb-4">
						Comment venir depuis Antibes ?
					</h2>
					<div className="w-20 h-px bg-primary mb-8" />
					<div className="grid md:grid-cols-2 gap-8">
						<div className="space-y-4 font-body text-muted-foreground">
							<p>
								Mon cabinet est situé au{" "}
								<strong>
									1 Place Joseph BERMOND, Bat OPHIRA 1 – 2e étage,
									06560 Valbonne
								</strong>
								.
							</p>
							<p>
								<strong>En voiture depuis Antibes :</strong> 15 min
								via la D35 direction Sophia-Antipolis / Valbonne. Un
								parking gratuit est disponible à proximité.
							</p>
							<p>
								<strong>En bus :</strong> Lignes du réseau Zou /
								Envibus au départ d&apos;Antibes vers Sophia-Antipolis.
							</p>
						</div>
						<div className="space-y-4">
							<a
								href="tel:+33620145306"
								className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
							>
								<Phone className="w-5 h-5 text-primary" />
								<span className="font-display">06 20 14 53 06</span>
							</a>
							<div className="flex items-start gap-3">
								<MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
								<span className="font-body text-muted-foreground">
									1 Place Joseph BERMOND, Bat OPHIRA 1 - 2e étage
									<br />
									06560 Valbonne Sophia-Antipolis
								</span>
							</div>
							<div className="flex items-start gap-3">
								<Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
								<span className="font-body text-muted-foreground">
									Lun–Ven : 8h15 – 19h
									<br />
									Samedi sur demande
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ── CTA final ── */}
			<section className="py-20 bg-background">
				<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-2xl text-center">
					<h2 className="font-script text-4xl md:text-5xl text-foreground mb-4">
						Prêt(e) à commencer ?
					</h2>
					<p className="font-body text-muted-foreground mb-8">
						Prenez rendez-vous en ligne depuis Antibes. La première
						séance dure 1h30 et nous définissons ensemble vos objectifs
						thérapeutiques.
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
							href="/tarifs"
							className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary font-body rounded-full transition-all duration-300 hover:bg-primary/5"
						>
							Voir les tarifs
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
