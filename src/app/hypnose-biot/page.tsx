import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CheckCircle, MapPin, Phone, Clock, ArrowRight } from "lucide-react";

/* =========================
   SEO / METADATA
========================= */
export const metadata: Metadata = {
	title: "Hypnose à Biot | Aurélia Desvaux – Thérapeute à Valbonne (10 min)",
	description:
		"Thérapeute en hypnose à proximité de Biot. Aurélia Desvaux reçoit à Valbonne Sophia-Antipolis, à 10 minutes de Biot. Hypnose Ericksonienne, EFT et PNL pour stress, anxiété, phobies.",
	keywords: [
		"hypnose Biot",
		"thérapeute Biot",
		"hypnothérapeute Biot",
		"EFT Biot",
		"PNL Biot",
		"thérapies brèves Biot",
		"gestion du stress Biot",
		"hypnose Sophia-Antipolis",
		"thérapeute 06",
	],
	alternates: {
		canonical: "https://aurelia-desvaux.fr/hypnose-biot",
	},
	openGraph: {
		title: "Hypnose à Biot | Aurélia Desvaux – Thérapeute à Valbonne",
		description:
			"Cabinet à 10 min de Biot. Hypnose Ericksonienne, EFT et PNL pour retrouver bien-être et sérénité.",
		url: "https://aurelia-desvaux.fr/hypnose-biot",
		siteName: "Aurélia Desvaux",
		type: "website",
		locale: "fr_FR",
		images: [
			{
				url: "https://aurelia-desvaux.fr/og-image.webp",
				width: 1200,
				height: 630,
				alt: "Aurélia Desvaux – Hypnose près de Biot à Valbonne",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Hypnose à Biot | Aurélia Desvaux",
		description:
			"Hypnothérapeute à 10 min de Biot. Séances d'hypnose, EFT et PNL à Valbonne Sophia-Antipolis.",
		images: ["https://aurelia-desvaux.fr/og-image.webp"],
	},
};

const structuredData = {
	"@context": "https://schema.org",
	"@type": "ProfessionalService",
	name: "Aurélia Desvaux – Hypnothérapeute près de Biot",
	url: "https://aurelia-desvaux.fr/hypnose-biot",
	telephone: "+33620145306",
	email: "desvauxaurelia@gmail.com",
	description:
		"Praticienne en Hypnose Ericksonienne, EFT et PNL à Valbonne Sophia-Antipolis. À 10 minutes de Biot via la D4.",
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
		{ "@type": "City", name: "Biot" },
		{ "@type": "City", name: "Valbonne" },
		{ "@type": "City", name: "Sophia-Antipolis" },
		{ "@type": "City", name: "Antibes" },
		{ "@type": "City", name: "Villeneuve-Loubet" },
	],
	openingHoursSpecification: [
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
			opens: "08:15",
			closes: "19:00",
		},
	],
};

const services = [
	{
		label: "Hypnose Ericksonienne",
		href: "/hypnose",
		desc: "Accès à l'inconscient pour transformer les schémas limitants et apaiser l'esprit.",
	},
	{
		label: "EFT – Tapping",
		href: "/eft",
		desc: "Technique douce sur les méridiens pour libérer stress et émotions bloquées.",
	},
	{
		label: "PNL",
		href: "/pnl",
		desc: "Outils de communication et de développement personnel pour changer de perspective.",
	},
	{
		label: "Préparation Mentale",
		href: "/preparation-mentale",
		desc: "Mobilisez vos ressources internes pour performer et surmonter vos défis.",
	},
	{
		label: "Dream Machine",
		href: "/dream-machine",
		desc: "Relaxation profonde par stimulation lumineuse et sonore.",
	},
];

const motifs = [
	"Stress et anxiété",
	"Phobies",
	"Confiance en soi",
	"Troubles du sommeil",
	"Gestion des émotions",
	"Deuil et séparation",
	"Arrêt du tabac",
	"Burn-out professionnel",
	"Préparation aux examens",
	"Douleurs chroniques",
];

/* =========================
   PAGE COMPONENT
========================= */
export default function HypnoseBiotPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>

			<Breadcrumbs
				items={[{ label: "Hypnose à Biot", href: "/hypnose-biot" }]}
			/>

			{/* ── Hero ── */}
			<section className="pt-32 pb-20 bg-soft-pink/30">
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto text-center">
						<p className="inline-flex items-center gap-2 text-primary font-body text-sm mb-4">
							<MapPin className="w-4 h-4" />
							Cabinet à Valbonne · 10 min de Biot
						</p>
						<h1 className="font-script text-5xl md:text-6xl text-foreground mb-6">
							Hypnose à Biot
						</h1>
						<p className="font-body text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
							Vous habitez à Biot ou dans le secteur Biot / Villeneuve-Loubet
							et vous souhaitez consulter un thérapeute spécialisé en
							thérapies brèves ? Mon cabinet est à{" "}
							<strong>10 minutes de Biot</strong>, au cœur de Valbonne
							Sophia-Antipolis.
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

			{/* ── Présentation ── */}
			<section className="py-20 bg-background">
				<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
					<h2 className="font-script text-4xl md:text-5xl text-foreground mb-4">
						Une thérapeute à deux pas de Biot
					</h2>
					<div className="w-20 h-px bg-primary mb-8" />
					<div className="space-y-5 font-body text-muted-foreground leading-relaxed">
						<p>
							Je suis <strong>Aurélia Desvaux</strong>, praticienne en
							Hypnose Ericksonienne, EFT et PNL certifiée. Mon cabinet
							de thérapies brèves est installé à{" "}
							<strong>Valbonne Sophia-Antipolis</strong>, facilement
							accessible depuis Biot en voiture (10 min via la D4).
						</p>
						<p>
							Nombreux sont mes patients qui viennent de Biot,
							Villeneuve-Loubet ou du plateau de Sophia-Antipolis.
							L&apos;accompagnement que je propose est personnalisé,
							bienveillant et orienté vers des résultats concrets — en
							général en quelques séances seulement.
						</p>
						<p>
							Les <strong>thérapies brèves</strong> (hypnose, EFT, PNL)
							sont particulièrement efficaces pour les habitants de la
							région souhaitant travailler sur le{" "}
							<strong>stress au travail</strong>, les{" "}
							<strong>phobies</strong>, la{" "}
							<strong>confiance en soi</strong> ou les{" "}
							<strong>émotions difficiles</strong>.
						</p>
					</div>
				</div>
			</section>

			{/* ── Services ── */}
			<section className="py-20 bg-soft-pink/20">
				<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
					<h2 className="font-script text-4xl md:text-5xl text-foreground mb-4 text-center">
						Thérapies disponibles pour les patients de Biot
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
						Motifs de consultation
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
						Accès depuis Biot
					</h2>
					<div className="w-20 h-px bg-primary mb-8" />
					<div className="grid md:grid-cols-2 gap-8">
						<div className="space-y-4 font-body text-muted-foreground">
							<p>
								<strong>En voiture depuis Biot :</strong> 10 min via la
								D4 direction Valbonne. Parking gratuit à proximité du
								cabinet.
							</p>
							<p>
								<strong>Depuis Villeneuve-Loubet :</strong> 15 min via
								l&apos;A8 sortie Sophia-Antipolis, puis D35.
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
						Faites le premier pas
					</h2>
					<p className="font-body text-muted-foreground mb-8">
						Réservez votre première séance depuis Biot. Premier entretien
						de 1h30 pour faire connaissance, définir vos objectifs et
						choisir la meilleure approche thérapeutique.
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
