"use client";

import { useInView } from "@/hooks/useInView";
import { useParallax } from "@/hooks/useParallax";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import treeLogo from "@/assets/tree-logo.webp";
import {
	trackPhoneClick,
	trackEmailClick,
	trackAddressClick,
	trackBookingClick,
} from "@/hooks/useGoogleAnalytics";

export const Contact = () => {
	const { ref, isInView } = useInView();
	const parallaxDeco = useParallax(0.1);

	return (
		<section
			id="contact"
			className="py-24 bg-background relative overflow-hidden scroll-mt-16 md:scroll-mt-20 lg:scroll-mt-24"
		>
			{/* Parallax décoratif */}
			<div
				className="absolute top-10 left-10 w-40 h-40 bg-soft-pink/30 rounded-full blur-3xl pointer-events-none motion-safe:will-change-transform"
				style={parallaxDeco}
				aria-hidden="true"
			/>
			<div
				className="absolute bottom-20 right-20 w-56 h-56 bg-blush/20 rounded-full blur-3xl pointer-events-none motion-safe:will-change-transform"
				style={parallaxDeco}
				aria-hidden="true"
			/>

			<div className="container mx-auto px-4 md:px-6 lg:px-8" ref={ref}>
				<div className="grid lg:grid-cols-2 gap-16">
					{/* Infos de contact */}
					<div
						className={`transition-all duration-700 ease-out ${
							isInView
								? "opacity-100 translate-x-0 scale-100"
								: "opacity-0 -translate-x-8 scale-95"
						}`}
					>
						<h2 className="font-script text-4xl md:text-5xl text-foreground mb-4">
							Contact
						</h2>
						<div className="w-24 h-px bg-primary mb-8" />

						<p className="font-body text-muted-foreground mb-8">
							N'hésitez pas à me contacter pour prendre
							rendez-vous ou pour toute question.
						</p>

						<div className="space-y-6">
							{/* Téléphone */}
							<a
								href="tel:+33620145306"
								onClick={trackPhoneClick}
								className="flex items-center gap-4 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
							>
								<div className="w-12 h-12 rounded-full bg-soft-pink flex items-center justify-center group-hover:bg-primary transition-colors">
									<Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
								</div>
								<div>
									<p className="font-body text-sm text-muted-foreground">
										Téléphone
									</p>
									<p className="font-display text-lg text-foreground">
										06 20 14 53 06
									</p>
								</div>
							</a>

							{/* Email */}
							<a
								href="mailto:desvauxaurelia@gmail.com"
								onClick={trackEmailClick}
								className="flex items-center gap-4 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
							>
								<div className="w-12 h-12 rounded-full bg-soft-pink flex items-center justify-center group-hover:bg-primary transition-colors">
									<Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
								</div>
								<div>
									<p className="font-body text-sm text-muted-foreground">
										Email
									</p>
									<p className="font-display text-lg text-foreground">
										desvauxaurelia@gmail.com
									</p>
								</div>
							</a>

							{/* Adresse */}
							<a
								href="https://www.google.com/maps/dir/?api=1&destination=1+Place+Joseph+BERMOND,+06560+Valbonne+Sophia-Antipolis,+France"
								target="_blank"
								rel="noopener noreferrer"
								onClick={trackAddressClick}
								className="flex items-start gap-4 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
							>
								<div className="w-12 h-12 rounded-full bg-soft-pink flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
									<MapPin className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
								</div>
								<div>
									<p className="font-body text-sm text-muted-foreground">
										Adresse
									</p>
									<p className="font-display text-lg text-foreground">
										1, Place Joseph BERMOND
										<br />
										Bat OPHIRA 1 - 2e étage
										<br />
										06560 Valbonne Sophia-Antipolis
									</p>
								</div>
							</a>

							{/* Horaires */}
							<div className="flex items-start gap-4">
								<div className="w-12 h-12 rounded-full bg-soft-pink flex items-center justify-center flex-shrink-0">
									<Clock className="w-5 h-5 text-primary" />
								</div>
								<div>
									<p className="font-body text-sm text-muted-foreground">
										Horaires
									</p>
									<p className="font-display text-lg text-foreground">
										Du lundi au vendredi de 8h15 à 19h
										<br />
										<span className="text-base text-muted-foreground">
											Rendez-vous possibles en dehors de
											ces horaires
											<br />
											Et le samedi sur demande
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Carte Google Maps & CTA */}
					<div
						className={`transition-all duration-700 ease-out ${
							isInView
								? "opacity-100 translate-x-0 scale-100"
								: "opacity-0 translate-x-8 scale-95"
						}`}
						style={{ transitionDelay: isInView ? "300ms" : "0ms" }}
					>
						<div className="space-y-6">
							{/* Google Maps Embed */}
							<div className="rounded-2xl overflow-hidden shadow-card">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.2777140812454!2d7.037384376175118!3d43.6215784711036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cc2baff0228cab%3A0x117aec399987c98b!2s1%20Pl.%20Joseph%20Bermond%2C%2006560%20Valbonne%2C%20France!5e0!3m2!1sfr!2smg!4v1727422331244!5m2!1sfr!2smg"
									width="100%"
									height="300"
									style={{ border: 0 }}
									allowFullScreen
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
									title="Localisation du cabinet à Valbonne"
								/>
							</div>

							{/* CTA Card */}
							<div className="bg-soft-pink/50 rounded-2xl p-8 flex flex-col justify-center items-center text-center overflow-hidden">
								<Image
									src={treeLogo}
									alt=""
									width={80}
									height={80}
									priority
									aria-hidden="true"
									className="w-20 h-20 mb-4 animate-float rounded-full"
								/>

								<h3 className="font-display text-2xl text-foreground mb-3">
									Prêt(e) à commencer ?
								</h3>

								<p className="font-body text-muted-foreground mb-6 max-w-sm text-sm">
									Prenez rendez-vous dès maintenant pour votre
									première consultation.
								</p>

								<a
									href="https://www.medoucine.com/consultation/valbonne/aurelia-desvaux/1951"
									target="_blank"
									rel="noopener noreferrer"
									onClick={() =>
										trackBookingClick("contact_section")
									}
									className="inline-flex px-8 py-4 bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground font-body rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
								>
									Prendre rendez-vous
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
