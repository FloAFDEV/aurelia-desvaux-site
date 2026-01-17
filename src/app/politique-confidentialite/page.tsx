import { Metadata } from "next";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
	title: "Politique de Confidentialité | Aurélia Desvaux",
	description:
		"Politique de confidentialité et gestion des cookies du site Aurélia Desvaux - Thérapies Brèves à Valbonne.",
	robots: "noindex, follow",
	alternates: {
		canonical: "https://aurelia-desvaux.fr/politique-confidentialite",
	},
};

export default function PolitiqueConfidentialitePage() {
	return (
		<>
			<Header />
			<main className="pt-24">
				{/* Hero */}
				<section className="py-20 gradient-hero">
					<div className="container mx-auto px-4 text-center">
						<h1 className="font-display text-5xl text-foreground mb-4">
							Politique de Confidentialité
						</h1>
					</div>
				</section>

				{/* Contenu */}
				<section className="py-16 bg-background">
					<div className="container mx-auto px-4 max-w-3xl">
						<div className="prose prose-lg max-w-none">
							<p className="font-body text-muted-foreground mb-8">
								<em>Dernière mise à jour : Janvier 2025</em>
							</p>

							<h2 className="font-display text-2xl text-foreground mb-4">
								1. Site informatif sans collecte de données
							</h2>
							<div className="bg-card rounded-xl p-6 mb-8 shadow-soft">
								<p className="font-body text-muted-foreground mb-4">
									Le site aurelia-desvaux.fr est un site
									exclusivement informatif qui{" "}
									<strong className="text-foreground">
										ne collecte aucune donnée personnelle
									</strong>
									.
								</p>
								<ul className="list-disc pl-6 font-body text-muted-foreground space-y-2">
									<li>Aucun formulaire de contact</li>
									<li>
										Aucune inscription ou création de compte
									</li>
									<li>Aucune newsletter</li>
									<li>
										Aucun système de réservation en ligne
									</li>
								</ul>
								<p className="font-body text-muted-foreground mt-4">
									La prise de rendez-vous s'effectue via la
									plateforme externe Medoucine ou par contact
									téléphonique direct.
								</p>
							</div>

							<h2 className="font-display text-2xl text-foreground mb-4">
								2. Cookies utilisés
							</h2>
							<div className="bg-card rounded-xl p-6 mb-8 shadow-soft">
								<p className="font-body text-muted-foreground mb-4">
									Notre site utilise uniquement :
								</p>
								<ul className="list-disc pl-6 font-body text-muted-foreground space-y-2">
									<li>
										<strong className="text-foreground">
											Cookies techniques :
										</strong>{" "}
										Nécessaires au bon fonctionnement du
										site (mémorisation du choix cookies
										pendant 6 mois)
									</li>
									<li>
										<strong className="text-foreground">
											Cookies analytiques :
										</strong>{" "}
										Google Analytics pour mesurer l'audience
										du site (uniquement avec votre
										consentement)
									</li>
								</ul>
								<p className="font-body text-muted-foreground mt-4">
									Vous pouvez gérer vos préférences de cookies
									à tout moment via le bandeau de consentement
									affiché lors de votre première visite ou les
									paramètres de votre navigateur.
								</p>
							</div>

							<h2 className="font-display text-2xl text-foreground mb-4">
								3. Google Analytics
							</h2>
							<div className="bg-card rounded-xl p-6 mb-8 shadow-soft">
								<p className="font-body text-muted-foreground mb-4">
									Si vous acceptez les cookies analytiques,
									nous utilisons Google Analytics pour
									comprendre comment les visiteurs naviguent
									sur notre site. Cet outil génère des
									statistiques anonymisées sur :
								</p>
								<ul className="list-disc pl-6 font-body text-muted-foreground space-y-2">
									<li>Les pages consultées</li>
									<li>La durée des visites</li>
									<li>Les sources de trafic</li>
								</ul>
								<p className="font-body text-muted-foreground mt-4">
									<strong className="text-foreground">
										Ces données sont anonymisées et ne
										permettent pas de vous identifier
										personnellement.
									</strong>{" "}
									Vous pouvez désactiver Google Analytics en
									installant le module complémentaire
									disponible sur{" "}
									<a
										href="https://tools.google.com/dlpage/gaoptout"
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary hover:underline"
									>
										tools.google.com/dlpage/gaoptout
									</a>
									.
								</p>
							</div>

							<h2 className="font-display text-2xl text-foreground mb-4">
								4. Vos droits
							</h2>
							<div className="bg-card rounded-xl p-6 mb-8 shadow-soft">
								<p className="font-body text-muted-foreground mb-4">
									Bien que ce site ne collecte pas de données
									personnelles, conformément au RGPD, vous
									disposez de droits concernant les cookies
									analytiques :
								</p>
								<ul className="list-disc pl-6 font-body text-muted-foreground space-y-2">
									<li>
										<strong className="text-foreground">
											Droit de refus :
										</strong>{" "}
										Refuser les cookies analytiques lors de
										votre visite
									</li>
									<li>
										<strong className="text-foreground">
											Droit de retrait :
										</strong>{" "}
										Modifier vos préférences à tout moment
										via les paramètres de votre navigateur
									</li>
								</ul>
							</div>

							<h2 className="font-display text-2xl text-foreground mb-4">
								5. Secret professionnel
							</h2>
							<div className="bg-card rounded-xl p-6 mb-8 shadow-soft">
								<p className="font-body text-muted-foreground">
									Le secret professionnel s'applique à toutes
									les séances de thérapie en cabinet. Les
									informations partagées lors des
									consultations restent strictement
									confidentielles et ne sont en aucun cas
									liées à la navigation sur ce site.
								</p>
							</div>

							<h2 className="font-display text-2xl text-foreground mb-4">
								6. Contact
							</h2>
							<div className="bg-card rounded-xl p-6 shadow-soft">
								<p className="font-body text-muted-foreground mb-4">
									Pour toute question concernant cette
									politique de confidentialité :
								</p>
								<div className="mt-4 p-6 bg-soft-pink/30 rounded-xl">
									<p className="font-display text-lg text-foreground">
										Aurélia Desvaux
									</p>
									<p className="font-body text-muted-foreground">
										Auto-entrepreneur
									</p>
									<p className="font-body text-muted-foreground">
										SIRET : 890 745 276 00018
									</p>
									<p className="font-body text-muted-foreground mt-2">
										1, Place Joseph BERMOND
									</p>
									<p className="font-body text-muted-foreground">
										Bat OPHIRA 1 - 2e étage
									</p>
									<p className="font-body text-muted-foreground">
										06560 Valbonne Sophia-Antipolis
									</p>
									<p className="font-body text-muted-foreground mt-2">
										Email :{" "}
										<a
											href="mailto:desvauxaurelia@gmail.com"
											className="text-primary hover:underline"
										>
											desvauxaurelia@gmail.com
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
