import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: {
		absolute:
			"Hypnose & Thérapies Brèves à Valbonne | Aurélia Desvaux – Cabinet 06560",
	},
	description:
		"Cabinet de thérapies brèves au cœur de Valbonne (06560). Aurélia Desvaux, praticienne certifiée en hypnose Ericksonienne, PNL et EFT. Rendez-vous sur place ou en visio.",
	alternates: { canonical: "https://aurelia-desvaux.fr/valbonne" },
	openGraph: {
		title: "Hypnose & Thérapies Brèves à Valbonne | Aurélia Desvaux",
		description:
			"Praticienne en hypnose, PNL et EFT installée à Valbonne (06560). Accompagnement bienveillant pour stress, anxiété, phobies et développement personnel.",
		url: "https://aurelia-desvaux.fr/valbonne",
		locale: "fr_FR",
		type: "website",
		siteName: "Aurélia Desvaux – Thérapies Brèves",
		images: [
			{
				url: "https://aurelia-desvaux.fr/og-image.webp",
				width: 1200,
				height: 630,
				alt: "Cabinet de thérapies brèves à Valbonne – Aurélia Desvaux",
			},
		],
	},
	robots: { index: true, follow: true },
};

const localSchema = {
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	name: "Aurélia Desvaux – Hypnose, PNL & EFT à Valbonne",
	description:
		"Cabinet de thérapies brèves à Valbonne. Hypnose Ericksonienne, PNL et EFT pour libérer stress, anxiété et blocages.",
	url: "https://aurelia-desvaux.fr/valbonne",
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
	areaServed: [{ "@type": "City", name: "Valbonne" }],
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
		{ "@type": "ListItem", position: 2, name: "Valbonne", item: "https://aurelia-desvaux.fr/valbonne" },
	],
};

export default function ValbonnePage() {
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
						<span className="text-foreground font-medium">Valbonne</span>
					</div>
				</nav>

				{/* Hero */}
				<section className="py-20 bg-soft-pink/20">
					<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
						<h1 className="font-script text-5xl md:text-6xl text-foreground mb-6">
							Hypnose & Thérapies Brèves à Valbonne
						</h1>
						<p className="font-body text-xl text-muted-foreground mb-8 leading-relaxed">
							Au cœur du village de Valbonne, Aurélia Desvaux vous accueille dans son cabinet
							du Bâtiment Ophira pour des séances d'hypnose Ericksonienne, de PNL et d'EFT.
							Un cadre apaisant, au cœur de la nature provençale, à deux pas du vieux village
							aux ruelles médiévales.
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

				{/* Cabinet & Accès */}
				<section className="py-16 bg-background">
					<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
						<h2 className="font-script text-4xl text-foreground mb-6">Le cabinet à Valbonne</h2>
						<div className="font-body text-muted-foreground space-y-4 leading-relaxed">
							<p>
								Le cabinet est situé <strong>1 Place Joseph Bermond, Bâtiment Ophira 1, 2e étage</strong>,
								à Valbonne (06560). Cet espace dédié au bien-être vous accueille dans un cadre
								calme et confidentiel, propice à l'accompagnement thérapeutique.
							</p>
							<p>
								Valbonne est une commune de la Communauté d'Agglomération Sophia Antipolis.
								Son village médiéval au plan en damier unique en France, ses places ombragées
								et son cadre naturel créent une atmosphère idéale pour se retrouver et amorcer
								un changement en profondeur.
							</p>
							<p>
								<strong>Accès :</strong> Parking gratuit disponible à proximité immédiate.
								Le cabinet est accessible depuis Sophia-Antipolis (5 min), Biot (8 min),
								Mougins (10 min) et Antibes (15 min) par la D3 et la D2085.
							</p>
						</div>
					</div>
				</section>

				{/* Services */}
				<section className="py-16 bg-soft-pink/10">
					<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
						<h2 className="font-script text-4xl text-foreground mb-10">Thérapies proposées à Valbonne</h2>
						<div className="grid md:grid-cols-2 gap-6">
							{[
								{
									title: "Hypnose Ericksonienne",
									href: "/hypnose",
									desc: "Accédez à vos ressources inconscientes pour vous libérer du stress, des phobies, des addictions et des blocages qui vous freinent.",
								},
								{
									title: "PNL – Programmation Neuro-Linguistique",
									href: "/pnl",
									desc: "Modifiez vos schémas de pensée limitants, développez votre confiance et améliorez votre communication au quotidien.",
								},
								{
									title: "EFT – Emotional Freedom Techniques",
									href: "/eft",
									desc: "Libérez les émotions bloquées grâce à des tapotements sur des points d'acupuncture combinés à la parole.",
								},
								{
									title: "Préparation Mentale",
									href: "/preparation-mentale",
									desc: "Préparez-vous aux examens, compétitions sportives et prises de parole avec des outils puissants et durables.",
								},
							].map((service) => (
								<Link
									key={service.href}
									href={service.href as any}
									className="block bg-background rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary/20"
								>
									<h3 className="font-display text-xl text-foreground mb-3">{service.title}</h3>
									<p className="font-body text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
									<span className="inline-block mt-4 text-sm text-primary font-medium">En savoir plus →</span>
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* Pourquoi Valbonne */}
				<section className="py-16 bg-background">
					<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
						<h2 className="font-script text-4xl text-foreground mb-6">Pourquoi choisir un thérapeute à Valbonne ?</h2>
						<div className="font-body text-muted-foreground space-y-4 leading-relaxed">
							<p>
								Habitant Valbonne ou ses environs, vous bénéficiez d'un accès rapide au cabinet
								sans traverser les grands axes saturés de la Côte d'Azur. Le village offre
								un cadre naturel et sécurisant qui facilite la mise en condition avant et après chaque séance.
							</p>
							<p>
								Les thérapies brèves permettent d'obtenir des résultats concrets en peu de séances.
								La plupart des personnes constatent des changements significatifs en 3 à 6 séances.
								Certaines problématiques, comme l'arrêt du tabac, peuvent être traitées en une seule séance.
							</p>
							<p>
								Les séances en visioconférence sont également disponibles, pour les personnes
								qui souhaitent un accompagnement depuis leur domicile.
							</p>
						</div>
					</div>
				</section>

				{/* Communes voisines */}
				<section className="py-12 bg-soft-pink/10">
					<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
						<h2 className="font-script text-3xl text-foreground mb-6">Zones desservies autour de Valbonne</h2>
						<div className="flex flex-wrap gap-3 font-body text-sm">
							{[
								{ label: "Sophia-Antipolis", href: "/sophia-antipolis" },
								{ label: "Antibes", href: "/antibes" },
								{ label: "Biot", href: "/biot" },
								{ label: "Mougins", href: "/mougins" },
							].map((city) => (
								<Link
									key={city.href}
									href={city.href as any}
									className="px-4 py-2 bg-background rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
								>
									{city.label}
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* CTA */}
				<section className="py-16 bg-primary/10 text-center">
					<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-2xl">
						<h2 className="font-script text-4xl text-foreground mb-4">Prêt(e) à franchir le pas ?</h2>
						<p className="font-body text-muted-foreground mb-8">
							Consultez les <Link href="/tarifs" className="text-primary underline underline-offset-2">tarifs des séances</Link> ou
							prenez directement rendez-vous en ligne. Premier contact également possible par téléphone.
						</p>
						<a
							href="https://www.medoucine.com/consultation/valbonne/aurelia-desvaux/1951"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex px-10 py-4 bg-primary text-primary-foreground font-body rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
						>
							Prendre rendez-vous à Valbonne
						</a>
					</div>
				</section>
			</div>
		</>
	);
}
