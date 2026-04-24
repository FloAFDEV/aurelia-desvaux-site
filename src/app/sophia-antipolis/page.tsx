import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: {
		absolute:
			"Hypnose & Thérapies Brèves à Sophia-Antipolis | Aurélia Desvaux",
	},
	description:
		"Praticienne en hypnose, PNL et EFT à 5 minutes de Sophia-Antipolis. Burnout, stress professionnel, performance : accompagnement sur-mesure pour les actifs du parc technologique.",
	alternates: { canonical: "https://aurelia-desvaux.fr/sophia-antipolis" },
	openGraph: {
		title: "Hypnose & Thérapies Brèves à Sophia-Antipolis | Aurélia Desvaux",
		description:
			"Cabinet à 5 min de Sophia-Antipolis. Gestion du stress, burnout, performance professionnelle. Séances d'hypnose, PNL et EFT pour les actifs du parc technologique.",
		url: "https://aurelia-desvaux.fr/sophia-antipolis",
		locale: "fr_FR",
		type: "website",
		siteName: "Aurélia Desvaux – Thérapies Brèves",
		images: [
			{
				url: "https://aurelia-desvaux.fr/og-image.webp",
				width: 1200,
				height: 630,
				alt: "Thérapies brèves à Sophia-Antipolis – Aurélia Desvaux",
			},
		],
	},
	robots: { index: true, follow: true },
};

const localSchema = {
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	name: "Aurélia Desvaux – Hypnose & Thérapies Brèves proche Sophia-Antipolis",
	description:
		"Cabinet de thérapies brèves à Valbonne, à 5 minutes de Sophia-Antipolis. Hypnose, PNL et EFT pour les actifs du parc technologique.",
	url: "https://aurelia-desvaux.fr/sophia-antipolis",
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
	areaServed: [{ "@type": "City", name: "Sophia-Antipolis" }],
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
		{ "@type": "ListItem", position: 2, name: "Sophia-Antipolis", item: "https://aurelia-desvaux.fr/sophia-antipolis" },
	],
};

export default function SophiaAntipolisPage() {
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
						<span className="text-foreground font-medium">Sophia-Antipolis</span>
					</div>
				</nav>

				{/* Hero */}
				<section className="py-20 bg-soft-pink/20">
					<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
						<h1 className="font-script text-5xl md:text-6xl text-foreground mb-6">
							Hypnose & Thérapies Brèves à Sophia-Antipolis
						</h1>
						<p className="font-body text-xl text-muted-foreground mb-4 leading-relaxed">
							Le cabinet d'Aurélia Desvaux est situé à Valbonne, <strong>à 5 minutes du parc
							technologique de Sophia-Antipolis</strong>. Ingénieurs, managers, entrepreneurs,
							consultants : les actifs de la Silicon Valley française trouveront ici un espace
							dédié à la gestion du stress professionnel, à la prévention du burnout et à
							l'optimisation des performances.
						</p>
						<p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
							Les thérapies brèves s'adaptent aux contraintes des emplois du temps chargés :
							des résultats concrets en quelques séances, sur des problématiques précises.
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

				{/* Problématiques pros */}
				<section className="py-16 bg-background">
					<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
						<h2 className="font-script text-4xl text-foreground mb-6">Les défis des actifs de Sophia-Antipolis</h2>
						<div className="font-body text-muted-foreground space-y-4 leading-relaxed">
							<p>
								Le monde du numérique et de la tech génère des niveaux de stress élevés :
								deadlines, surcharge cognitive, pression des résultats, management à distance,
								sentiment d'imposteur. Ces tensions s'accumulent et peuvent déboucher sur
								un épuisement professionnel, des troubles du sommeil ou une perte de motivation.
							</p>
							<p>
								Les thérapies brèves — hypnose, PNL, EFT — agissent précisément sur ces mécanismes.
								Elles permettent de reconfigurer les réponses automatiques au stress,
								de retrouver un ancrage émotionnel stable et de regagner en clarté mentale.
							</p>
						</div>
						<ul className="mt-6 grid sm:grid-cols-2 gap-3 font-body text-sm">
							{[
								"Burnout et épuisement professionnel",
								"Gestion du stress et de l'anxiété",
								"Amélioration des performances",
								"Confiance en soi et prise de décision",
								"Préparation à des prises de parole",
								"Gestion des conflits relationnels",
								"Troubles du sommeil liés au travail",
								"Reconversion et transition professionnelle",
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
						<h2 className="font-script text-4xl text-foreground mb-10">Approches thérapeutiques</h2>
						<div className="grid md:grid-cols-3 gap-6">
							{[
								{
									title: "Hypnose Ericksonienne",
									href: "/hypnose",
									desc: "Travaillez avec votre inconscient pour modifier en profondeur vos réponses au stress et lever les blocages qui entravent vos performances.",
								},
								{
									title: "PNL",
									href: "/pnl",
									desc: "Reprogrammez vos schémas mentaux limitants, améliorez votre communication et développez votre leadership.",
								},
								{
									title: "Préparation Mentale",
									href: "/preparation-mentale",
									desc: "Mobilisez vos ressources internes avant une présentation, une négociation ou un entretien décisif.",
								},
							].map((service) => (
								<Link
									key={service.href}
									href={service.href as any}
									className="block bg-background rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary/20"
								>
									<h3 className="font-display text-xl text-foreground mb-3">{service.title}</h3>
									<p className="font-body text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
									<span className="inline-block mt-4 text-sm text-primary font-medium">Découvrir →</span>
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* Accès */}
				<section className="py-16 bg-background">
					<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
						<h2 className="font-script text-4xl text-foreground mb-6">Accès depuis Sophia-Antipolis</h2>
						<div className="font-body text-muted-foreground space-y-3 leading-relaxed">
							<p><strong>En voiture :</strong> 5 à 10 minutes depuis n'importe quel point du parc technologique, via la route de Valbonne (D3).</p>
							<p><strong>Adresse :</strong> 1 Place Joseph BERMOND, Bâtiment Ophira 1 – 2e étage, 06560 Valbonne.</p>
							<p><strong>Parking :</strong> Stationnement gratuit à proximité immédiate du cabinet.</p>
							<p><strong>Séances en visio :</strong> Disponibles si votre emploi du temps ne vous permet pas de vous déplacer en journée.</p>
						</div>
					</div>
				</section>

				{/* Villes voisines */}
				<section className="py-12 bg-soft-pink/10">
					<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
						<p className="font-body text-sm text-muted-foreground mb-4">Également disponible pour les communes voisines :</p>
						<div className="flex flex-wrap gap-3">
							{[
								{ label: "Valbonne", href: "/valbonne" },
								{ label: "Antibes", href: "/antibes" },
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
						<h2 className="font-script text-4xl text-foreground mb-4">Reprenez le contrôle</h2>
						<p className="font-body text-muted-foreground mb-8">
							Un accompagnement professionnel et confidentiel, à 5 minutes de votre lieu de travail.
							Consultez les <Link href="/tarifs" className="text-primary underline underline-offset-2">tarifs</Link> ou réservez directement.
						</p>
						<a
							href="https://www.medoucine.com/consultation/valbonne/aurelia-desvaux/1951"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex px-10 py-4 bg-primary text-primary-foreground font-body rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
						>
							Réserver une séance
						</a>
					</div>
				</section>
			</div>
		</>
	);
}
