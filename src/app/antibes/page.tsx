import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: {
		absolute:
			"Hypnose & Thérapies Brèves à Antibes | Aurélia Desvaux – Cabinet 06",
	},
	description:
		"Thérapeute en hypnose Ericksonienne, PNL et EFT à 15 minutes d'Antibes. Stress, anxiété, phobies, arrêt du tabac, confiance en soi. Prise de rendez-vous en ligne.",
	alternates: { canonical: "https://aurelia-desvaux.fr/antibes" },
	openGraph: {
		title: "Hypnose & Thérapies Brèves à Antibes | Aurélia Desvaux",
		description:
			"Cabinet à 15 minutes d'Antibes. Hypnose Ericksonienne, PNL et EFT pour stress, phobies, anxiété. Accompagnement adultes et adolescents.",
		url: "https://aurelia-desvaux.fr/antibes",
		locale: "fr_FR",
		type: "website",
		siteName: "Aurélia Desvaux – Thérapies Brèves",
		images: [
			{
				url: "https://aurelia-desvaux.fr/og-image.webp",
				width: 1200,
				height: 630,
				alt: "Thérapies brèves proches d'Antibes – Aurélia Desvaux",
			},
		],
	},
	robots: { index: true, follow: true },
};

const localSchema = {
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	name: "Aurélia Desvaux – Hypnose & Thérapies Brèves proches d'Antibes",
	description:
		"Cabinet de thérapies brèves à Valbonne, à 15 minutes d'Antibes. Hypnose, PNL et EFT pour adultes et adolescents.",
	url: "https://aurelia-desvaux.fr/antibes",
	telephone: "+33620145306",
	address: {
		"@type": "PostalAddress",
		streetAddress: "1 Place Joseph BERMOND, Bat OPHIRA 1 - 2e étage",
		addressLocality: "Valbonne",
		addressRegion: "Alpes-Maritimes",
		postalCode: "06560",
		addressCountry: "FR",
	},
	geo: { "@type": "GeoCoordinates", latitude: 43.6216, longitude: 7.0374 },
	areaServed: [{ "@type": "City", name: "Antibes" }],
	openingHoursSpecification: [
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
			opens: "08:15",
			closes: "19:00",
		},
	],
};

const breadcrumbSchema = {
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: [
		{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://aurelia-desvaux.fr" },
		{ "@type": "ListItem", position: 2, name: "Antibes", item: "https://aurelia-desvaux.fr/antibes" },
	],
};

export default function AntibesPage() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

			<div className="pt-24">
				{/* Breadcrumb */}
				<nav aria-label="Breadcrumb" className="bg-background/80 border-b border-border py-3">
					<div className="container mx-auto px-4 md:px-6 lg:px-8 text-sm font-body text-muted-foreground">
						<Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
						<span className="mx-2" aria-hidden="true">›</span>
						<span className="text-foreground font-medium">Antibes</span>
					</div>
				</nav>

				{/* Hero */}
				<section className="py-20 bg-soft-pink/20">
					<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
						<h1 className="font-script text-5xl md:text-6xl text-foreground mb-6">
							Hypnose & Thérapies Brèves à Antibes
						</h1>
						<p className="font-body text-xl text-muted-foreground mb-4 leading-relaxed">
							Résidant à Antibes, Juan-les-Pins ou au Cap d'Antibes, vous rejoignez le cabinet
							d'Aurélia Desvaux à Valbonne en <strong>15 à 20 minutes</strong> par la D2085 ou
							la D3. Un déplacement court pour un accompagnement qui peut transformer
							durablement votre quotidien.
						</p>
						<p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
							Adultes, adolescents, familles : les thérapies brèves s'adressent à tous,
							pour des problématiques variées — du stress quotidien aux traumas profonds.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<a
								href="https://www.medoucine.com/consultation/valbonne/aurelia-desvaux/1951"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-body rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
							>
								Prendre rendez-vous
							</a>
							<a
								href="tel:+33620145306"
								className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary font-body rounded-full hover:bg-soft-pink/30 transition-all duration-300"
							>
								06 20 14 53 06
							</a>
						</div>
					</div>
				</section>

				{/* Problématiques */}
				<section className="py-16 bg-background">
					<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
						<h2 className="font-script text-4xl text-foreground mb-6">Ce que les thérapies brèves peuvent résoudre</h2>
						<p className="font-body text-muted-foreground mb-6 leading-relaxed">
							Contrairement aux thérapies traditionnelles qui s'étendent sur des mois ou des années,
							les approches brèves — hypnose Ericksonienne, PNL, EFT — ciblent précisément
							la problématique et cherchent à produire un changement rapide et durable.
						</p>
						<ul className="grid sm:grid-cols-2 gap-3 font-body text-sm">
							{[
								"Stress chronique et nervosité",
								"Anxiété généralisée et crises d'angoisse",
								"Phobies (serpents, avion, foule, etc.)",
								"Insomnie et troubles du sommeil",
								"Arrêt du tabac",
								"Perte de poids et rapport à l'alimentation",
								"Manque de confiance en soi",
								"Deuil et séparation",
								"Traumatismes et chocs émotionnels",
								"Préparation aux examens",
								"Problématiques des adolescents",
								"Burn-out et épuisement",
							].map((item) => (
								<li key={item} className="flex items-start gap-2 p-3 bg-soft-pink/20 rounded-xl">
									<span className="text-primary mt-0.5" aria-hidden="true">✓</span>
									{item}
								</li>
							))}
						</ul>
					</div>
				</section>

				{/* Services */}
				<section className="py-16 bg-soft-pink/10">
					<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
						<h2 className="font-script text-4xl text-foreground mb-10">Les thérapies proposées</h2>
						<div className="grid md:grid-cols-2 gap-6">
							{[
								{
									title: "Hypnose Ericksonienne",
									href: "/hypnose",
									desc: "État de conscience modifié pour accéder aux ressources de votre inconscient et opérer des changements en profondeur.",
								},
								{
									title: "PNL",
									href: "/pnl",
									desc: "Programmation Neuro-Linguistique pour modifier vos croyances limitantes et améliorer vos relations et communications.",
								},
								{
									title: "EFT",
									href: "/eft",
									desc: "Techniques de libération émotionnelle par tapotement sur des points d'acupuncture, très efficaces sur l'anxiété et les phobies.",
								},
								{
									title: "Préparation Mentale",
									href: "/preparation-mentale",
									desc: "Pour les examens du baccalauréat, du brevet ou des concours — particulièrement utile pour les lycéens et étudiants d'Antibes.",
								},
							].map((service) => (
								<Link key={service.href} href={service.href as any}
									className="block bg-background rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary/20">
									<h3 className="font-display text-xl text-foreground mb-3">{service.title}</h3>
									<p className="font-body text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
									<span className="inline-block mt-4 text-sm text-primary font-medium">En savoir plus →</span>
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* Accès */}
				<section className="py-16 bg-background">
					<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
						<h2 className="font-script text-4xl text-foreground mb-6">Accès depuis Antibes</h2>
						<div className="font-body text-muted-foreground space-y-3 leading-relaxed">
							<p><strong>En voiture depuis le centre d'Antibes :</strong> 15 à 20 minutes via la D2085 direction Valbonne, puis la D3.</p>
							<p><strong>Depuis Juan-les-Pins :</strong> 15 minutes via la route de Valbonne.</p>
							<p><strong>Depuis le Cap d'Antibes :</strong> 20 minutes en suivant la direction Sophia-Antipolis.</p>
							<p><strong>Adresse du cabinet :</strong> 1 Place Joseph BERMOND, Bâtiment Ophira 1 – 2e étage, 06560 Valbonne.</p>
							<p><strong>Séances en visio :</strong> Possibles pour toutes les thérapies, sauf la Dream Machine.</p>
						</div>
					</div>
				</section>

				{/* Villes voisines */}
				<section className="py-12 bg-soft-pink/10">
					<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
						<p className="font-body text-sm text-muted-foreground mb-4">Autres communes desservies :</p>
						<div className="flex flex-wrap gap-3">
							{[
								{ label: "Valbonne", href: "/valbonne" },
								{ label: "Sophia-Antipolis", href: "/sophia-antipolis" },
								{ label: "Biot", href: "/biot" },
								{ label: "Mougins", href: "/mougins" },
							].map((city) => (
								<Link key={city.href} href={city.href as any}
									className="px-4 py-2 bg-background rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors text-sm">
									{city.label}
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* CTA */}
				<section className="py-16 bg-primary/10 text-center">
					<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-2xl">
						<h2 className="font-script text-4xl text-foreground mb-4">Faites le premier pas</h2>
						<p className="font-body text-muted-foreground mb-8">
							Séance à partir de 70€. Consultez les <Link href="/tarifs" className="text-primary underline underline-offset-2">tarifs complets</Link> ou
							prenez rendez-vous directement en ligne.
						</p>
						<a
							href="https://www.medoucine.com/consultation/valbonne/aurelia-desvaux/1951"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex px-10 py-4 bg-primary text-primary-foreground font-body rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
						>
							Prendre rendez-vous
						</a>
					</div>
				</section>
			</div>
		</>
	);
}
