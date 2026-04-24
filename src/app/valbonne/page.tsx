import type { Metadata } from "next";
import Link from "next/link";

// Cette page répond à une intention de NAVIGATION, pas de découverte de service.
// Elle ne duplique aucune autre page : aucune autre page du site ne traite
// de l'accès physique au cabinet, du stationnement, des repères locaux.
// Elle n'est PAS une doorway page "hypnose à Valbonne" — c'est une page "accès".

export const metadata: Metadata = {
	title: {
		absolute:
			"Accès au cabinet – Valbonne Sophia-Antipolis | Aurélia Desvaux",
	},
	description:
		"Comment se rendre au cabinet d'Aurélia Desvaux à Valbonne (06560). Adresse, stationnement, accès depuis Sophia-Antipolis, Antibes et Mougins. Bâtiment Ophira 1.",
	alternates: { canonical: "https://aurelia-desvaux.fr/valbonne" },
	openGraph: {
		title: "Accès au cabinet – Valbonne | Aurélia Desvaux",
		description:
			"Cabinet d'Aurélia Desvaux : 1 Place Joseph Bermond, Bâtiment Ophira 1 – 2e étage, 06560 Valbonne. Parking gratuit, accessible depuis Sophia-Antipolis et Antibes.",
		url: "https://aurelia-desvaux.fr/valbonne",
		locale: "fr_FR",
		type: "website",
		siteName: "Aurélia Desvaux – Thérapies Brèves",
		images: [
			{
				url: "https://aurelia-desvaux.fr/og-image.webp",
				width: 1200,
				height: 630,
				alt: "Cabinet Aurélia Desvaux à Valbonne – Accès et itinéraire",
			},
		],
	},
	robots: { index: true, follow: true },
};

const localSchema = {
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	name: "Aurélia Desvaux – Cabinet de Thérapies Brèves",
	description:
		"Cabinet de thérapies brèves à Valbonne (06560). Hypnose Ericksonienne, PNL et EFT.",
	url: "https://aurelia-desvaux.fr",
	telephone: "+33620145306",
	email: "desvauxaurelia@gmail.com",
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
		{
			"@type": "ListItem",
			position: 1,
			name: "Accueil",
			item: "https://aurelia-desvaux.fr",
		},
		{
			"@type": "ListItem",
			position: 2,
			name: "Accès au cabinet",
			item: "https://aurelia-desvaux.fr/valbonne",
		},
	],
};

export default function ValbonnePage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(breadcrumbSchema),
				}}
			/>

			<div className="pt-24">
				{/* Breadcrumb */}
				<nav
					aria-label="Breadcrumb"
					className="bg-background/80 border-b border-border py-3"
				>
					<div className="container mx-auto px-4 md:px-6 lg:px-8 text-sm font-body text-muted-foreground">
						<Link
							href="/"
							className="hover:text-primary transition-colors"
						>
							Accueil
						</Link>
						<span className="mx-2" aria-hidden="true">
							›
						</span>
						<span className="text-foreground font-medium">
							Accès au cabinet
						</span>
					</div>
				</nav>

				{/* Hero */}
				<section className="py-16 bg-soft-pink/20">
					<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
						<h1 className="font-script text-5xl md:text-6xl text-foreground mb-4">
							Accès au cabinet
						</h1>
						<p className="font-body text-xl text-muted-foreground leading-relaxed">
							Le cabinet est situé au cœur de Valbonne, Place Joseph
							Bermond, dans le Bâtiment Ophira 1. Voici tout ce qu'il
							vous faut pour préparer votre venue.
						</p>
					</div>
				</section>

				{/* Adresse & Horaires */}
				<section className="py-12 bg-background">
					<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
						<div className="grid md:grid-cols-2 gap-10">
							{/* Adresse */}
							<div>
								<h2 className="font-display text-2xl text-foreground mb-5">
									Adresse
								</h2>
								<address className="not-italic font-body text-muted-foreground space-y-2 leading-relaxed">
									<p className="text-foreground font-medium">
										Aurélia Desvaux
									</p>
									<p>1 Place Joseph BERMOND</p>
									<p>Bâtiment OPHIRA 1 — 2e étage</p>
									<p>06560 Valbonne</p>
									<p className="pt-3">
										<a
											href="tel:+33620145306"
											className="hover:text-primary transition-colors"
										>
											06 20 14 53 06
										</a>
									</p>
									<p>
										<a
											href="mailto:desvauxaurelia@gmail.com"
											className="hover:text-primary transition-colors"
										>
											desvauxaurelia@gmail.com
										</a>
									</p>
								</address>
								<a
									href="https://www.google.com/maps/dir/?api=1&destination=1+Place+Joseph+Bermond+06560+Valbonne"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-primary text-primary-foreground font-body text-sm rounded-full hover:shadow-soft transition-all duration-300"
								>
									Ouvrir dans Google Maps
								</a>
							</div>

							{/* Horaires */}
							<div>
								<h2 className="font-display text-2xl text-foreground mb-5">
									Horaires
								</h2>
								<dl className="font-body text-muted-foreground space-y-2">
									<div className="flex justify-between border-b border-border pb-2">
										<dt>Lundi – Vendredi</dt>
										<dd className="text-foreground font-medium">
											08h15 – 19h00
										</dd>
									</div>
									<div className="flex justify-between pb-2">
										<dt>Samedi – Dimanche</dt>
										<dd>Sur demande</dd>
									</div>
								</dl>
								<p className="font-body text-sm text-muted-foreground mt-4">
									Séances en visioconférence disponibles aux mêmes
									horaires pour tous les accompagnements (sauf Dream
									Machine).
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Accès & Stationnement */}
				<section className="py-12 bg-soft-pink/10">
					<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
						<h2 className="font-display text-2xl text-foreground mb-6">
							Comment se rendre au cabinet
						</h2>
						<div className="grid md:grid-cols-2 gap-8 font-body text-muted-foreground">
							<div className="space-y-4">
								<div>
									<h3 className="font-medium text-foreground mb-1">
										Depuis Sophia-Antipolis
									</h3>
									<p>
										5 à 10 minutes via la route de Valbonne (D3).
										Longer le parc technologique direction
										Valbonne-village.
									</p>
								</div>
								<div>
									<h3 className="font-medium text-foreground mb-1">
										Depuis Antibes / Juan-les-Pins
									</h3>
									<p>
										15 à 20 minutes. Prendre la D2085 direction
										Valbonne, puis la D3 jusqu'au village.
									</p>
								</div>
								<div>
									<h3 className="font-medium text-foreground mb-1">
										Depuis Mougins / Cannes
									</h3>
									<p>
										10 à 15 minutes via la D35 direction
										Valbonne, puis traverser le village.
									</p>
								</div>
								<div>
									<h3 className="font-medium text-foreground mb-1">
										Depuis Biot / Villeneuve-Loubet
									</h3>
									<p>
										8 à 12 minutes via la D4 direction
										Sophia-Antipolis puis D3.
									</p>
								</div>
							</div>
							<div className="space-y-4">
								<div>
									<h3 className="font-medium text-foreground mb-1">
										Stationnement
									</h3>
									<p>
										Parking gratuit disponible Place Joseph Bermond
										et dans les rues adjacentes du village. Pas de
										contrainte horaire.
									</p>
								</div>
								<div>
									<h3 className="font-medium text-foreground mb-1">
										Repères dans le bâtiment
									</h3>
									<p>
										Bâtiment OPHIRA 1, entrée principale Place
										Joseph Bermond. Prendre l'ascenseur ou
										l'escalier jusqu'au 2e étage.
									</p>
								</div>
								<div>
									<h3 className="font-medium text-foreground mb-1">
										Accessibilité
									</h3>
									<p>
										Le bâtiment est accessible aux personnes à
										mobilité réduite (ascenseur disponible).
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Carte embed */}
				<section className="py-4 bg-background">
					<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
						<iframe
							title="Localisation du cabinet – 1 Place Joseph Bermond, Valbonne"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.5!2d7.0374!3d43.6216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cc2b8a3b7f0001%3A0x1!2s1+Pl.+Joseph+Bermond%2C+06560+Valbonne!5e0!3m2!1sfr!2sfr!4v1"
							width="100%"
							height="380"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="rounded-2xl shadow-soft"
						/>
					</div>
				</section>

				{/* CTA */}
				<section className="py-14 bg-primary/10 text-center">
					<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-2xl">
						<h2 className="font-script text-4xl text-foreground mb-4">
							Prêt(e) à venir ?
						</h2>
						<p className="font-body text-muted-foreground mb-8">
							Prenez rendez-vous en ligne ou contactez Aurélia
							directement pour toute question sur l'accès ou les séances.
							Consultez aussi les{" "}
							<Link
								href="/tarifs"
								className="text-primary underline underline-offset-2"
							>
								tarifs
							</Link>{" "}
							avant votre premier rendez-vous.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="https://www.medoucine.com/consultation/valbonne/aurelia-desvaux/1951"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex px-10 py-4 bg-primary text-primary-foreground font-body rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
							>
								Prendre rendez-vous
							</a>
							<Link
								href="/contact"
								className="inline-flex px-10 py-4 border border-primary text-primary font-body rounded-full hover:bg-soft-pink/30 transition-all duration-300"
							>
								Nous contacter
							</Link>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
