import Link from "next/link";
import Image from "next/image";
import treeLogo from "@/assets/tree-logo.webp";
import {
	Facebook,
	Phone,
	Mail,
	MapPin,
	Heart,
	Linkedin,
	Instagram,
} from "lucide-react";
import { MedoucineBadge } from "@/components/MedoucineBadge";

export const Footer = () => {
	return (
		<footer className="py-16 bg-secondary/50 border-t border-border">
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
					{/* Logo & Description */}
					<div>
						<Link href="/" className="flex items-center gap-3 mb-4">
							<Image
								src={treeLogo}
								alt="Aurélia Desvaux - Accueil"
								width={48}
								height={48}
								className="w-12 h-12 rounded-full"
							/>
							<span className="font-display text-xl text-foreground">
								Aurélia Desvaux
							</span>
						</Link>
						<p className="font-body text-sm text-muted-foreground leading-relaxed">
							Thérapeute en Hypnose, PNL et EFT à Valbonne
							Sophia-Antipolis. Accompagnement bienveillant vers
							votre bien-être.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="font-display text-lg text-foreground mb-4">
							Thérapies
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/hypnose"
									className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
								>
									Hypnose Ericksonienne
								</Link>
							</li>
							<li>
								<Link
									href="/pnl"
									className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
								>
									PNL
								</Link>
							</li>
							<li>
								<Link
									href="/eft"
									className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
								>
									EFT
								</Link>
							</li>
							<li>
								<Link
									href="/preparation-mentale"
									className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
								>
									Préparation mentale
								</Link>
							</li>
							<li>
								<Link
									href="/dream-machine"
									className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
								>
									Dream Machine
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className="font-display text-lg text-foreground mb-4">
							Contact
						</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="tel:+33620145306"
									className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
								>
									<Phone className="w-4 h-4" />
									06 20 14 53 06
								</a>
							</li>
							<li>
								<a
									href="mailto:desvauxaurelia@gmail.com"
									className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
								>
									<Mail className="w-4 h-4" />
									desvauxaurelia@gmail.com
								</a>
							</li>
							<li>
								<a
									href="https://www.google.com/maps/dir/?api=1&destination=1+Place+Joseph+Bermond+06560+Valbonne"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-start gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
								>
									<MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
									<span>
										1, Place Joseph BERMOND
										<br />
										06560 Valbonne
									</span>
								</a>
							</li>
						</ul>
					</div>

					{/* Social & CTA */}
					<div>
						<h3 className="font-display text-lg text-foreground mb-4">
							Suivez-moi
						</h3>
						<div className="flex items-center gap-3 mb-4">
							<a
								href="https://www.facebook.com/AureliaDesvauxPsychopraticienne/"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 rounded-full bg-soft-pink flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
								aria-label="Facebook"
							>
								<Facebook className="w-5 h-5" />
							</a>
							<a
								href="https://www.linkedin.com/in/aur%C3%A9lia-desvaux-876459a/?originalSubdomain=fr"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 rounded-full bg-soft-pink flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
								aria-label="LinkedIn"
							>
								<Linkedin className="w-5 h-5" />
							</a>
							<a
								href="https://www.instagram.com/aurelia_desvaux_therapiebreve/"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 rounded-full bg-soft-pink flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
								aria-label="Instagram"
							>
								<Instagram className="w-5 h-5" />
							</a>
							<a
								href="https://www.medoucine.com/consultation/valbonne/aurelia-desvaux/1951"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 rounded-full bg-soft-pink flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
								aria-label="Medoucine"
							>
								<Heart className="w-5 h-5" />
							</a>
						</div>

						<div className="animate-fade-in-up opacity-0 delay-500 mb-4">
							<MedoucineBadge variant="compact" />
						</div>

						<a
							href="https://www.medoucine.com/consultation/valbonne/aurelia-desvaux/1951"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex px-6 py-2.5 bg-primary text-primary-foreground font-body text-sm rounded-full transition-all duration-300 hover:shadow-soft hover:scale-105"
						>
							Prendre RDV
						</a>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
					<p className="font-body text-sm text-muted-foreground">
						© {new Date().getFullYear()} Aurélia Desvaux. Tous
						droits réservés.
					</p>
					<nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
						<a
							href="/mentions-legales"
							target="_blank"
							rel="noopener noreferrer"
							className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
						>
							Mentions légales
						</a>
						<a
							href="/cgu"
							target="_blank"
							rel="noopener noreferrer"
							className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
						>
							CGU
						</a>
						<a
							href="/politique-confidentialite"
							target="_blank"
							rel="noopener noreferrer"
							className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
						>
							Confidentialité
						</a>
						<Link
							href="/tarifs"
							className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
						>
							Tarifs
						</Link>
					</nav>
				</div>
			</div>
		</footer>
	);
};
