import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: {
		absolute:
			"Hypnose & Thérapies Brèves à Mougins | Aurélia Desvaux – Cabinet 06",
	},
	description:
		"Praticienne en hypnose, PNL et EFT à 10 minutes de Mougins. Développement personnel, bien-être et gestion des émotions. Cabinet à Valbonne Sophia-Antipolis.",
	alternates: { canonical: "https://aurelia-desvaux.fr/mougins" },
	openGraph: {
		title: "Hypnose & Thérapies Brèves à Mougins | Aurélia Desvaux",
		description:
			"Cabinet à 10 minutes de Mougins. Hypnose, PNL et EFT pour développement personnel et bien-être. Séances à Valbonne ou en visioconférence.",
		url: "https://aurelia-desvaux.fr/mougins",
		locale: "fr_FR",
		type: "website",
		siteName: "Aurélia Desvaux – Thérapies Brèves",
		images: [
			{
				url: "https://aurelia-desvaux.fr/og-image.webp",
				width: 1200,
				height: 630,
				alt: "Thérapies brèves proches de Mougins – Aurélia Desvaux",
			},
		],
	},
	robots: { index: true, follow: true },
};

const localSchema = {
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	name: "Aurélia Desvaux – Hypnose & Thérapies Brèves proches de Mougins",
	description:
		"Cabinet de thérapies brèves à Valbonne, à 10 minutes de Mougins. Hypnose, PNL et EFT pour développement personnel et bien-être.",
	url: "https://aurelia-desvaux.fr/mougins",
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
	areaServed: [{ "@type": "City", name: "Mougins" }],
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
		{ "@type": "ListItem", position: 2, name: "Mougins", item: "https://aurelia-desvaux.fr/mougins" },
	],
};

export default function MouginsPage() {
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
						<span className="text-foreground font-medium">Mougins</span>
					</div>
				</nav>

				{/* Hero */}
				<section className="py-20 bg-soft-pink/20">
					<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
						<h1 className="font-script text-5xl md:text-6xl text-foreground mb-6">
							Hypnose & Thérapies Brèves à Mougins
						</h1>
						<p className="font-body text-xl text-muted-foreground mb-4 leading-relaxed">
							Village des arts, de la gastronomie et du bien-être, Mougins abrite une
							clientèle sensible à la qualité de vie et à l'épanouissement personnel.
							Le cabinet d'Aurélia Desvaux, à <strong>10 minutes de Mougins</strong> à Valbonne,
							vous propose un accompagnement de même niveau d'exigence : personnalisé,
							bienveillant et profondément efficace.
						</p>
						<p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
							Que vous souhaitiez vous libérer d'un blocage, approfondir votre développement
							personnel ou explorer vos ressources intérieures, les thérapies brèves offrent
							un chemin direct et respectueux vers votre mieux-être.
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

				{/* Développement personnel */}
				<section className="py-16 bg-background">
					<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
						<h2 className="font-script text-4xl text-foreground mb-6">Développement personnel & bien-être</h2>
						<div className="font-body text-muted-foreground space-y-4 leading-relaxed">
							<p>
								Les thérapies brèves ne se limitent pas au traitement de la souffrance.
								Elles sont aussi de puissants outils de croissance personnelle : développer
								sa confiance, renforcer ses ressources, clarifier ses objectifs, améliorer
								ses relations, explorer ses potentiels inexploités.
							</p>
							<p>
								La PNL est particulièrement adaptée au développement personnel : elle permet
								de repérer et modifier les croyances limitantes, d'installer de nouvelles
								ressources et d'améliorer sensiblement la qualité de la communication
								interpersonnelle — que ce soit dans la sphère familiale, professionnelle ou sociale.
							</p>
							<p>
								L'hypnose Ericksonienne, quant à elle, ouvre l'accès à une sagesse intérieure
								souvent sous-estimée. En état de transe légère, vous pouvez explorer des
								pistes créatives inattendues et ancrer des changements profonds et durables.
							</p>
						</div>
					</div>
				</section>

				{/* Services */}
				<section className="py-16 bg-soft-pink/10">
					<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
						<h2 className="font-script text-4xl text-foreground mb-10">Thérapies & accompagnements</h2>
						<div className="grid md:grid-cols-2 gap-6">
							{[
								{
									title: "Hypnose Ericksonienne",
									href: "/hypnose",
									desc: "Explorez vos ressources profondes et initier des changements durables dans un état de détente profonde.",
								},
								{
									title: "PNL",
									href: "/pnl",
									desc: "Développez votre potentiel, renforcez votre confiance et améliorez vos relations grâce à la Programmation Neuro-Linguistique.",
								},
								{
									title: "EFT",
									href: "/eft",
									desc: "Libérez rapidement les tensions émotionnelles et les blocages qui freinent votre épanouissement.",
								},
								{
									title: "Dream Machine",
									href: "/dream-machine",
									desc: "Une expérience rare de relaxation profonde et de stimulation créative par lumière pulsée. Idéal pour les curieux du bien-être.",
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

				{/* Packages premium */}
				<section className="py-16 bg-background">
					<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
						<h2 className="font-script text-4xl text-foreground mb-6">Packages d'accompagnement</h2>
						<div className="font-body text-muted-foreground space-y-4 leading-relaxed">
							<p>
								Pour un accompagnement en profondeur, des packages multi-séances sont disponibles :
							</p>
							<ul className="space-y-3">
								<li className="p-4 bg-soft-pink/20 rounded-xl">
									<strong className="text-foreground">Package 5 séances — 300€</strong>
									<p className="text-sm mt-1">Accompagnement personnalisé sur 5 séances. Économisez 50€ par rapport aux séances individuelles.</p>
								</li>
								<li className="p-4 bg-soft-pink/20 rounded-xl">
									<strong className="text-foreground">Guérison des 5 blessures — 350€</strong>
									<p className="text-sm mt-1">Programme de 6 séances axé sur les blessures fondamentales : rejet, abandon, injustice, trahison, humiliation.</p>
								</li>
							</ul>
							<p>
								<Link href="/tarifs" className="text-primary underline underline-offset-2">Voir tous les tarifs →</Link>
							</p>
						</div>
					</div>
				</section>

				{/* Accès */}
				<section className="py-16 bg-soft-pink/10">
					<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
						<h2 className="font-script text-4xl text-foreground mb-6">Accès depuis Mougins</h2>
						<div className="font-body text-muted-foreground space-y-3 leading-relaxed">
							<p><strong>En voiture :</strong> 10 minutes depuis Mougins village via la D35 et la D3, direction Valbonne.</p>
							<p><strong>Depuis Mougins-le-Haut :</strong> 12 minutes en passant par Mougins-centre puis la D35.</p>
							<p><strong>Adresse du cabinet :</strong> 1 Place Joseph BERMOND, Bâtiment Ophira 1 – 2e étage, 06560 Valbonne.</p>
							<p><strong>Séances en visio disponibles</strong> pour tous les accompagnements.</p>
						</div>
					</div>
				</section>

				{/* Villes voisines */}
				<section className="py-12 bg-background">
					<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
						<p className="font-body text-sm text-muted-foreground mb-4">Autres communes desservies :</p>
						<div className="flex flex-wrap gap-3">
							{[
								{ label: "Valbonne", href: "/valbonne" },
								{ label: "Sophia-Antipolis", href: "/sophia-antipolis" },
								{ label: "Antibes", href: "/antibes" },
								{ label: "Biot", href: "/biot" },
							].map((city) => (
								<Link key={city.href} href={city.href as any}
									className="px-4 py-2 bg-soft-pink/20 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors text-sm">
									{city.label}
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* CTA */}
				<section className="py-16 bg-primary/10 text-center">
					<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-2xl">
						<h2 className="font-script text-4xl text-foreground mb-4">Investissez dans votre bien-être</h2>
						<p className="font-body text-muted-foreground mb-8">
							À 10 minutes de Mougins, un accompagnement sur-mesure vous attend.
							Séances à partir de 70€ — consultez les <Link href="/tarifs" className="text-primary underline underline-offset-2">tarifs détaillés</Link>.
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
