import { Metadata } from "next";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
	title: "Mentions Légales | Aurélia Desvaux - Thérapeute à Valbonne",
	description:
		"Mentions légales du site aurelia-desvaux.com - Informations sur l'éditeur et l'hébergeur du site.",
	robots: {
		index: false,
		follow: true,
	},
	alternates: {
		canonical: "https://aurelia-desvaux.com/mentions-legales",
	},
};

export default function MentionsLegales() {
	return (
		<>
			<Header />

			<main className="pt-24">
				<section className="py-20 gradient-hero">
					<div className="container mx-auto px-4 text-center">
						<h1 className="font-display text-5xl text-foreground mb-4">
							Mentions Légales
						</h1>
					</div>
				</section>

				<section className="py-16 bg-background">
					<div className="container mx-auto px-4 max-w-3xl">
						<div className="prose prose-lg max-w-none">
							{/* ÉDITEUR */}
							<h2 className="font-display text-2xl text-foreground mb-4">
								Éditeur du site
							</h2>
							<div className="bg-card rounded-xl p-6 mb-8 shadow-soft">
								<p className="font-body text-muted-foreground mb-2">
									<strong className="text-foreground">
										Nom :
									</strong>{" "}
									Aurélia Desvaux
								</p>
								<p className="font-body text-muted-foreground mb-2">
									<strong className="text-foreground">
										Statut :
									</strong>{" "}
									Auto-entrepreneur
								</p>
								<p className="font-body text-muted-foreground mb-2">
									<strong className="text-foreground">
										SIRET :
									</strong>{" "}
									890 745 276 00018
								</p>
								<p className="font-body text-muted-foreground mb-2">
									<strong className="text-foreground">
										Profession :
									</strong>{" "}
									Thérapeute en Hypnose, PNL et EFT
								</p>
								<p className="font-body text-muted-foreground mb-2">
									<strong className="text-foreground">
										Adresse :
									</strong>{" "}
									1, Place Joseph BERMOND, Bat OPHIRA 1 - 2e
									étage, 06560 Valbonne Sophia-Antipolis
								</p>
								<p className="font-body text-muted-foreground mb-2">
									<strong className="text-foreground">
										Téléphone :
									</strong>{" "}
									06 20 14 53 06
								</p>
								<p className="font-body text-muted-foreground">
									<strong className="text-foreground">
										Email :
									</strong>{" "}
									desvauxaurelia@gmail.com
								</p>
							</div>

							{/* HÉBERGEMENT */}
							<h2 className="font-display text-2xl text-foreground mb-4">
								Hébergement
							</h2>
							<div className="bg-card rounded-xl p-6 mb-8 shadow-soft">
								<p className="font-body text-muted-foreground mb-2">
									<strong className="text-foreground">
										Hébergeur du site :
									</strong>{" "}
									Vercel Inc.
								</p>
								<p className="font-body text-muted-foreground mb-2">
									<strong className="text-foreground">
										Adresse :
									</strong>{" "}
									340 S Lemon Ave #4133, Walnut, CA 91789, USA
								</p>
								<p className="font-body text-muted-foreground mb-4">
									<strong className="text-foreground">
										Site web :
									</strong>{" "}
									<a
										href="https://vercel.com"
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary hover:underline"
									>
										vercel.com
									</a>
								</p>
								<p className="font-body text-muted-foreground mb-2">
									<strong className="text-foreground">
										Nom de domaine :
									</strong>{" "}
									aurelia-desvaux.com
								</p>
								<p className="font-body text-muted-foreground">
									<strong className="text-foreground">
										Registrar :
									</strong>{" "}
									OVH SAS
								</p>
							</div>

							{/* PROPRIÉTÉ INTELLECTUELLE */}
							<h2 className="font-display text-2xl text-foreground mb-4">
								Propriété intellectuelle
							</h2>
							<div className="bg-card rounded-xl p-6 mb-8 shadow-soft">
								<p className="font-body text-muted-foreground mb-4">
									L'ensemble de ce site relève de la
									législation française et internationale sur
									le droit d'auteur et la propriété
									intellectuelle. Tous les droits de
									reproduction sont réservés, y compris pour
									les documents téléchargeables et les
									représentations iconographiques et
									photographiques.
								</p>
								<p className="font-body text-muted-foreground mb-4">
									Certaines images et illustrations utilisées
									sur ce site proviennent de banques d'images
									libres de droits ou sous licence, notamment
									: Pixabay, Unsplash, Freepik et Adobe Stock.
									Leur utilisation respecte les conditions
									fixées par les licences correspondantes.
								</p>
								<p className="font-body text-muted-foreground">
									La reproduction de tout ou partie de ce site
									sur un support électronique ou autre, quel
									qu'il soit, est formellement interdite sauf
									autorisation expresse de l'éditeur.
								</p>
							</div>

							{/* RESPONSABILITÉ */}
							<h2 className="font-display text-2xl text-foreground mb-4">
								Responsabilité
							</h2>
							<div className="bg-card rounded-xl p-6 mb-8 shadow-soft">
								<p className="font-body text-muted-foreground mb-4">
									Les informations contenues sur ce site sont
									aussi précises que possible et le site est
									périodiquement mis à jour, mais peut
									toutefois contenir des inexactitudes, des
									omissions ou des lacunes.
								</p>
								<p className="font-body text-muted-foreground">
									L'éditeur ne pourra être tenu responsable
									des dommages directs et indirects causés au
									matériel de l'utilisateur lors de l'accès au
									site, et résultant soit de l'utilisation
									d'un matériel ne répondant pas aux
									spécifications techniques requises, soit de
									l'apparition d'un bug ou d'une
									incompatibilité.
								</p>
							</div>

							{/* DONNÉES PERSONNELLES */}
							<h2 className="font-display text-2xl text-foreground mb-4">
								Collecte de données personnelles
							</h2>
							<div className="bg-card rounded-xl p-6 shadow-soft">
								<p className="font-body text-muted-foreground mb-4">
									<strong className="text-foreground">
										Ce site ne collecte aucune donnée
										personnelle.
									</strong>{" "}
									Il s'agit d'un site exclusivement
									informatif, sans formulaire de contact, sans
									inscription et sans création de compte
									utilisateur.
								</p>
								<p className="font-body text-muted-foreground mb-4">
									Seuls des cookies techniques et analytiques
									(Google Analytics, avec votre consentement)
									peuvent être utilisés pour mesurer
									l'audience du site. Ces données sont
									anonymisées et ne permettent pas de vous
									identifier.
								</p>
								<p className="font-body text-muted-foreground">
									Pour toute question, vous pouvez contacter
									Aurélia Desvaux par email à l'adresse :
									desvauxaurelia@gmail.com
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
