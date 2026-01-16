"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FloatingCTA } from "@/components/FloatingCTA";
import { CookieBanner } from "@/components/CookieBanner";
import { useInView } from "@/hooks/useInView";
import {
	Clock,
	Phone,
	Mail,
	MapPin,
	Heart,
	Cigarette,
	Users,
	Sparkles,
	Lightbulb,
	Brain,
} from "lucide-react";
import treeLogo from "@/assets/tree-logo.webp";
import cabinetImage from "@/assets/cabinet.webp";

// Structure simple des prestations avec données statiques
interface Prestation {
	icon: typeof Heart;
	title: string;
	description: string;
	tarif: number;
	unit: string;
	badge?: string;
	link?: string;
}

// Données par défaut (fallback)
const DEFAULT_PRESTATIONS: Prestation[] = [
	{
		icon: Heart,
		title: "Accompagnement Thérapeutique",
		description: "Stress, anxiété, phobies, sommeil, perte de poids…",
		tarif: 70,
		unit: "/ séance",
	},
	{
		icon: Cigarette,
		title: "Arrêt du Tabac",
		description: "Programme personnalisé pour arrêter de fumer durablement",
		tarif: 120,
		unit: "/ séance",
	},
	{
		icon: Sparkles,
		title: "Guérison des 5 blessures",
		description: "Rejet, Abandon, Injustice, Trahison, Humiliation",
		tarif: 350,
		unit: "/ 6 séances",
		badge: "Package",
	},
	{
		icon: Users,
		title: "Package 5 séances",
		description: "Accompagnement personnalisé sur plusieurs séances",
		tarif: 300,
		unit: "/ 5 séances",
		badge: "Économisez 50€",
	},
	{
		icon: Lightbulb,
		title: "Session Dream Machine",
		description: "Voyage intérieur par stimulation lumineuse",
		tarif: 30,
		unit: "+ 1€/min",
		link: "/dream-machine",
	},
	{
		icon: Brain,
		title: "Préparation Mentale",
		description:
			"Préparation mentale personnalisée combinant PNL, hypnose, EFT et coaching pour renforcer vos ressources internes, clarifier vos objectifs et aborder vos défis avec confiance et sérénité.",
		tarif: 90,
		unit: "/ séance",
		link: "/preparation-mentale",
	},
];

export default function Tarifs() {
	const { ref, isInView } = useInView();
	const [prestations, setPrestations] =
		useState<Prestation[]>(DEFAULT_PRESTATIONS);

	// Récupérer les tarifs depuis l'API
	useEffect(() => {
		const timestamp = new Date().getTime();
		fetch(`/api/sheet?ts=${timestamp}`)
			.then((res) => res.json())
			.then((data) => {
				if (data.tarifs && data.tarifs.length > 0) {
					const updated: Prestation[] = data.tarifs.map(
						(row: { prestation: string; tarif: number }) => {
							const defaultItem = DEFAULT_PRESTATIONS.find(
								(d) =>
									d.title.toLowerCase() ===
									row.prestation.toLowerCase()
							);

							return {
								icon: defaultItem?.icon || Heart,
								title: row.prestation,
								description: defaultItem?.description || "",
								tarif: row.tarif,
								unit: defaultItem?.unit || "/ séance",
								badge: defaultItem?.badge,
								link: defaultItem?.link,
							};
						}
					);

					setPrestations(updated);
				}
			})
			.catch((err) => {
				console.error("❌ Erreur récupération tarifs:", err);
			});
	}, []);

	return (
		<>
			<Header />
			<Breadcrumbs items={[{ label: "Tarifs", href: "/tarifs" }]} />

			<main>
				{/* Hero Section */}
				<section className="py-20 gradient-hero relative overflow-hidden">
					<div className="absolute top-20 left-10 w-32 h-32 bg-blush/30 rounded-full blur-3xl animate-pulse-soft" />
					<div className="absolute bottom-20 right-20 w-48 h-48 bg-soft-pink/40 rounded-full blur-3xl animate-pulse-soft delay-300" />

					<div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
						<div className="inline-flex items-center gap-3 mb-6 animate-fade-in-up opacity-0">
							<Image
								src={treeLogo}
								alt=""
								aria-hidden="true"
								width={64}
								height={64}
								className="w-16 h-16 rounded-full"
							/>
						</div>
						<h1 className="font-script text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 animate-fade-in-up opacity-0 delay-100">
							Tarifs & Rendez-vous
						</h1>
						<p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up opacity-0 delay-200">
							Des accompagnements personnalisés pour vous aider à
							atteindre vos objectifs de bien-être
						</p>
					</div>
				</section>

				{/* Tarifs Grid */}
				<section className="py-24 bg-background" ref={ref}>
					<div className="container mx-auto px-4 md:px-6 lg:px-8">
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{prestations.map((prestation, index) => {
								const Icon = prestation.icon;

								return (
									<div
										key={prestation.title}
										className={`group relative bg-card rounded-2xl p-8 shadow-soft transition-all duration-500 hover:shadow-card-hover hover:-translate-y-2 border border-transparent hover:border-primary/20 ${
											isInView
												? "opacity-100 translate-y-0"
												: "opacity-0 translate-y-8"
										}`}
										style={{
											transitionDelay: `${index * 50}ms`,
										}}
									>
										{prestation.badge && (
											<span className="absolute -top-3 right-6 px-4 py-1 bg-primary text-primary-foreground text-xs font-body rounded-full">
												{prestation.badge}
											</span>
										)}

										<div className="w-14 h-14 rounded-full bg-soft-pink flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
											<Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
										</div>

										<h3 className="font-display text-2xl text-foreground mb-3">
											{prestation.title}
										</h3>

										<p className="font-body text-muted-foreground mb-6 min-h-[3rem]">
											{prestation.description}
										</p>

										<div className="flex items-baseline gap-1">
											<span className="font-display text-4xl text-primary">
												{prestation.tarif}€
											</span>
											<span className="font-body text-muted-foreground">
												{prestation.unit}
											</span>
										</div>

										{prestation.link && (
											<a
												href={prestation.link}
												className="mt-4 inline-flex items-center gap-2 font-body text-sm text-primary hover:underline"
											>
												En savoir plus →
											</a>
										)}
									</div>
								);
							})}
						</div>

						<p className="text-center font-body text-muted-foreground mt-12">
							Pour les packages, merci de le signaler lors de la
							prise de rendez-vous.
						</p>
					</div>
				</section>

				{/* Contact & Booking Section */}
				<section className="py-24 bg-secondary/30">
					<div className="container mx-auto px-4 md:px-6 lg:px-8">
						<div className="grid lg:grid-cols-2 gap-16 items-center">
							<div className="relative">
								<div className="absolute inset-0 bg-soft-pink rounded-2xl transform rotate-2" />
								<Image
									src={cabinetImage}
									alt="Cabinet Aurélia Desvaux à Valbonne"
									width={600}
									height={400}
									loading="lazy"
									className="relative rounded-2xl shadow-card w-full"
								/>
							</div>

							<div>
								<h2 className="font-script text-4xl md:text-5xl text-foreground mb-8">
									Informations pratiques
								</h2>

								<div className="space-y-6 mb-10">
									<div className="flex items-start gap-4">
										<div className="w-12 h-12 rounded-full bg-soft-pink flex items-center justify-center flex-shrink-0">
											<Clock className="w-5 h-5 text-primary" />
										</div>
										<div>
											<p className="font-display text-lg text-foreground mb-1">
												Horaires
											</p>
											<p className="font-body text-muted-foreground">
												Du lundi au vendredi de 8h15 à
												19h
												<br />
												Rendez-vous possibles en dehors
												de ces horaires
												<br />
												Et le samedi sur demande (par
												mail / sms)
											</p>
										</div>
									</div>

									<a
										href="tel:+33620145306"
										className="flex items-start gap-4 group"
									>
										<div className="w-12 h-12 rounded-full bg-soft-pink flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
											<Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
										</div>
										<div>
											<p className="font-display text-lg text-foreground mb-1">
												Téléphone
											</p>
											<p className="font-body text-muted-foreground">
												06 20 14 53 06
											</p>
										</div>
									</a>

									<a
										href="mailto:desvauxaurelia@gmail.com"
										className="flex items-start gap-4 group"
									>
										<div className="w-12 h-12 rounded-full bg-soft-pink flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
											<Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
										</div>
										<div>
											<p className="font-display text-lg text-foreground mb-1">
												Email
											</p>
											<p className="font-body text-muted-foreground">
												desvauxaurelia@gmail.com
											</p>
										</div>
									</a>

									<a
										href="https://www.google.com/maps?q=1,+Place+Joseph+BERMOND+06560+Valbonne+Sophia-Antipolis"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-start gap-4 group"
									>
										<div className="w-12 h-12 rounded-full bg-soft-pink flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
											<MapPin className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
										</div>
										<div>
											<p className="font-display text-lg text-foreground mb-1">
												Adresse
											</p>
											<p className="font-body text-muted-foreground">
												1, Place Joseph BERMOND
												<br />
												Bat OPHIRA 1 - 2e étage
												<br />
												06560 Valbonne Sophia-Antipolis
											</p>
										</div>
									</a>
								</div>

								<a
									href="https://www.medoucine.com/consultation/valbonne/aurelia-desvaux/1951"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground font-body rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
								>
									Prendre rendez-vous
								</a>
							</div>
						</div>
					</div>
				</section>
			</main>

			<FloatingCTA />
			<CookieBanner />
		</>
	);
}
