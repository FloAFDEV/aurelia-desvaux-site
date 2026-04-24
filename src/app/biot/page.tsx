import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: {
		absolute:
			"Hypnose & Thérapies Brèves à Biot | Aurélia Desvaux – Cabinet proche 06",
	},
	description:
		"Cabinet de thérapies brèves à 8 minutes de Biot. Hypnose Ericksonienne, PNL et EFT pour libérer stress, anxiété et blocages émotionnels. Praticienne certifiée à Valbonne.",
	alternates: { canonical: "https://aurelia-desvaux.fr/biot" },
	openGraph: {
		title: "Hypnose & Thérapies Brèves à Biot | Aurélia Desvaux",
		description:
			"Praticienne certifiée à 8 minutes de Biot. Hypnose, PNL, EFT pour votre bien-être. Cabinet à Valbonne, accessible depuis le village potier.",
		url: "https://aurelia-desvaux.fr/biot",
		locale: "fr_FR",
		type: "website",
		siteName: "Aurélia Desvaux – Thérapies Brèves",
		images: [
			{
				url: "https://aurelia-desvaux.fr/og-image.webp",
				width: 1200,
				height: 630,
				alt: "Thérapies brèves proches de Biot – Aurélia Desvaux",
			},
		],
	},
	robots: { index: true, follow: true },
};

const localSchema = {
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	name: "Aurélia Desvaux – Hypnose & Thérapies Brèves proches de Biot",
	description:
		"Cabinet de thérapies brèves à Valbonne, à 8 minutes de Biot. Hypnose Ericksonienne, PNL et EFT.",
	url: "https://aurelia-desvaux.fr/biot",
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
	areaServed: [{ "@type": "City", name: "Biot" }],
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
		{ "@type": "ListItem", position: 2, name: "Biot", item: "https://aurelia-desvaux.fr/biot" },
	],
};

export default function BiotPage() {
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
						<span className="text-foreground font-medium">Biot</span>
					</div>
				</nav>

				{/* Hero */}
				<section className="py-20 bg-soft-pink/20">
					<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
						<h1 className="font-script text-5xl md:text-6xl text-foreground mb-6">
							Hypnose & Thérapies Brèves à Biot
						</h1>
						<p className="font-body text-xl text-muted-foreground mb-4 leading-relaxed">
							Depuis Biot, le village des artisans verriers et potiers, rejoignez le cabinet
							d'Aurélia Desvaux à Valbonne en <strong>8 minutes seulement</strong>. Deux
							villages voisins, deux ambiances provençales authentiques — et un espace
							thérapeutique conçu pour vous permettre de vous libérer de ce qui vous pèse.
						</p>
						<p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
							Les habitants de Biot choisissent souvent les thérapies holistiques et les
							approches naturelles du bien-être. L'hypnose, la PNL et l'EFT s'inscrivent
							naturellement dans cette sensibilité.
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

				{/* Approche */}
				<section className="py-16 bg-background">
					<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
						<h2 className="font-script text-4xl text-foreground mb-6">Une approche holistique du bien-être</h2>
						<div className="font-body text-muted-foreground space-y-4 leading-relaxed">
							<p>
								Les thérapies brèves partagent avec l'artisanat une même philosophie :
								travailler avec la matière vivante — les émotions, les croyances, les souvenirs —
								pour créer quelque chose de nouveau et de solide. Chaque séance est une
								création unique, adaptée à ce que vous traversez à ce moment précis de votre vie.
							</p>
							<p>
								L'hypnose Ericksonienne permet d'explorer les couches profondes de votre
								psyché, là où résident les croyances qui vous limitent. La PNL vous donne
								des outils concrets pour modifier vos schémas de pensée. L'EFT libère
								les tensions émotionnelles stockées dans le corps.
							</p>
							<p>
								Ces trois approches, combinées selon votre besoin, offrent une action
								rapide, douce et durable.
							</p>
						</div>
					</div>
				</section>

				{/* Services */}
				<section className="py-16 bg-soft-pink/10">
					<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
						<h2 className="font-script text-4xl text-foreground mb-10">Les thérapies disponibles</h2>
						<div className="grid md:grid-cols-2 gap-6">
							{[
								{
									title: "Hypnose Ericksonienne",
									href: "/hypnose",
									desc: "Une approche douce et naturelle pour accéder à vos ressources profondes et initier un changement durable.",
								},
								{
									title: "EFT – Tapotement émotionnel",
									href: "/eft",
									desc: "Technique corps-esprit qui libère les émotions bloquées. Particulièrement appréciée pour sa rapidité d'action.",
								},
								{
									title: "PNL",
									href: "/pnl",
									desc: "Reprogrammation des schémas mentaux pour développer confiance, communication et épanouissement.",
								},
								{
									title: "Dream Machine",
									href: "/dream-machine",
									desc: "Voyage intérieur par stimulation lumineuse. Une expérience unique de relaxation profonde et de créativité.",
								},
							].map((service) => (
								<Link key={service.href} href={service.href as any}
									className="block bg-background rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary/20">
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
						<h2 className="font-script text-4xl text-foreground mb-6">Accès depuis Biot</h2>
						<div className="font-body text-muted-foreground space-y-3 leading-relaxed">
							<p><strong>En voiture :</strong> 8 minutes depuis le village de Biot via la route de Sophia-Antipolis (D4 puis D3).</p>
							<p><strong>Depuis Biot village :</strong> Prendre la direction Valbonne par la D4, traverser Sophia-Antipolis.</p>
							<p><strong>Adresse du cabinet :</strong> 1 Place Joseph BERMOND, Bâtiment Ophira 1 – 2e étage, 06560 Valbonne.</p>
							<p><strong>Parking gratuit</strong> à proximité du cabinet.</p>
						</div>
					</div>
				</section>

				{/* Villes voisines */}
				<section className="py-12 bg-soft-pink/10">
					<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
						<p className="font-body text-sm text-muted-foreground mb-4">Également disponible pour :</p>
						<div className="flex flex-wrap gap-3">
							{[
								{ label: "Valbonne", href: "/valbonne" },
								{ label: "Sophia-Antipolis", href: "/sophia-antipolis" },
								{ label: "Antibes", href: "/antibes" },
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
						<h2 className="font-script text-4xl text-foreground mb-4">Commençons votre chemin</h2>
						<p className="font-body text-muted-foreground mb-8">
							À 8 minutes de Biot, le cabinet vous attend.
							Consultez les <Link href="/tarifs" className="text-primary underline underline-offset-2">tarifs</Link> ou prenez rendez-vous maintenant.
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
