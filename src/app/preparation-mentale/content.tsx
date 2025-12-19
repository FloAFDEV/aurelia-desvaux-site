"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import { useParallax } from "@/hooks/useParallax";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
	Brain,
	Target,
	BookOpen,
	Mic,
	Heart,
	Trophy,
	Briefcase,
	Focus,
	Gauge,
	ArrowRight,
} from "lucide-react";

import prepaMentaleImg from "@/assets/prepa-mentale.webp";
import prepaMentale2Img from "@/assets/prepa-mentale2.webp";
import aureliaPresentationImg from "@/assets/aurelia-presentation.webp";
import treeLogo from "@/assets/tree-logo.webp";

const badges = [
	{ icon: Gauge, label: "Gestion du stress & Émotions" },
	{ icon: BookOpen, label: "Préparation aux examens & Diplômes" },
	{ icon: Mic, label: "Prise de parole en public" },
	{ icon: Heart, label: "Confiance & Estime de soi" },
	{ icon: Trophy, label: "Performance sportive" },
	{ icon: Briefcase, label: "Entretiens d'embauche" },
	{ icon: Focus, label: "Concentration & Mémorisation" },
	{ icon: Target, label: "Gestion de la pression" },
];

const techniques = [
	{
		href: "/hypnose",
		icon: Brain,
		title: "Hypnose",
		description: "Accédez à vos ressources inconscientes",
	},
	{
		href: "/pnl",
		icon: Target,
		title: "PNL",
		description: "Reprogrammez vos schémas de pensée",
	},
	{
		href: "/eft",
		icon: Heart,
		title: "EFT",
		description: "Libérez vos émotions bloquées",
	},
];

export default function PreparationMentaleContent() {
	const { ref: heroRef, isInView: heroInView } = useInView();
	const { ref: contentRef, isInView: contentInView } = useInView();
	const { ref: badgesRef, isInView: badgesInView } = useInView();
	const { ref: ctaRef, isInView: ctaInView } = useInView();
	const parallax = useParallax(0.15);

	return (
		<>
			{/* Breadcrumbs sécurisés avec Suspense */}
			<Breadcrumbs
				items={[
					{
						label: "Préparation mentale",
						href: "/preparation-mentale",
					},
				]}
			/>
			<main>
				{/* Hero Section */}
				<section
					ref={heroRef}
					className="pt-32 pb-20 bg-soft-pink/30 relative overflow-hidden"
				>
					<div
						className="absolute inset-0 opacity-15"
						style={{
							backgroundImage: `url(${prepaMentaleImg.src})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							...parallax,
						}}
					/>
					<div className="absolute top-20 left-10 w-32 h-32 bg-blush/30 rounded-full blur-3xl" />
					<div className="absolute bottom-20 right-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
					<div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
						<div className="max-w-4xl mx-auto text-center bg-gradient-to-b from-white/70 via-white/50 to-white/0 p-8 rounded-3xl shadow-xl backdrop-blur-sm">
							<div
								className={`inline-flex items-center justify-center gap-4 mb-6 transition-all duration-500 ${
									heroInView
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-4"
								}`}
							>
								<Image
									src={treeLogo}
									alt=""
									aria-hidden="true"
									width={80}
									height={80}
									className="w-20 h-20 rounded-full shadow-md"
								/>
							</div>
							<h1
								className={`font-script text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 transition-all duration-500 delay-75 ${
									heroInView
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-4"
								}`}
							>
								Préparation mentale
							</h1>
							<p
								className={`font-body text-xl text-muted-foreground max-w-2xl mx-auto mb-4 transition-all duration-500 delay-100 ${
									heroInView
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-4"
								}`}
							>
								Thérapies Brèves — Hypnose - PNL - EFT
							</p>
							<p
								className={`font-body text-lg text-muted-foreground/80 max-w-xl mx-auto mb-8 transition-all duration-500 delay-150 ${
									heroInView
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-4"
								}`}
							>
								Transformez le stress en énergie positive et
								ancrez une confiance durable
							</p>
							<div
								className={`transition-all duration-500 delay-200 ${
									heroInView
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-4"
								}`}
							>
								<a
									href="https://www.medoucine.com/consultation/valbonne/aurelia-desvaux/1951"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex px-10 py-4 bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground font-body rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
								>
									Réserver un accompagnement
								</a>
							</div>
						</div>
					</div>
				</section>

				{/* Content Section */}
				<section
					ref={contentRef}
					className="py-12 md:py-20 bg-background"
				>
					<div className="container mx-auto px-4 md:px-6 lg:px-8">
						<div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
							<div
								className={`lg:col-span-7 space-y-6 transition-all duration-500 ${
									contentInView
										? "opacity-100 translate-x-0"
										: "opacity-0 -translate-x-6"
								}`}
							>
								<div className="flex items-center gap-3 mb-4">
									<Image
										src={treeLogo}
										alt=""
										aria-hidden="true"
										width={48}
										height={48}
										className="w-10 h-10 md:w-12 md:h-12 rounded-full"
									/>
									<span className="font-display text-lg text-primary">
										Aurélia Desvaux
									</span>
								</div>
								<h2 className="font-script text-3xl md:text-4xl lg:text-5xl text-foreground">
									Mobilisez vos ressources internes
								</h2>
								<div className="w-20 h-px bg-primary" />
								<p className="font-body text-muted-foreground leading-relaxed">
									La préparation mentale permet de mobiliser
									vos ressources internes pour aborder les
									moments clés de votre vie — compétition,
									examen ou défi professionnel — avec plus de
									calme et de clarté.
								</p>
								<p className="font-body text-muted-foreground leading-relaxed">
									Grâce à une approche sur-mesure mêlant{" "}
									<strong className="text-foreground">
										hypnose
									</strong>
									,{" "}
									<strong className="text-foreground">
										PNL
									</strong>{" "}
									et{" "}
									<strong className="text-foreground">
										EFT
									</strong>
									, nous travaillons ensemble à transformer le
									stress en énergie positive et à ancrer une
									confiance durable.
								</p>
								<p className="font-body text-muted-foreground leading-relaxed">
									Quel que soit votre défi, je suis là pour
									vous accompagner dans cette démarche, en
									vous offrant un cadre sécurisant et
									bienveillant pour atteindre vos objectifs
									avec sérénité.
								</p>
							</div>
							<div
								className={`lg:col-span-5 relative transition-all duration-500 delay-150 ${
									contentInView
										? "opacity-100 translate-x-0"
										: "opacity-0 translate-x-6"
								}`}
							>
								<div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-blush/30 rounded-3xl blur-2xl" />
								<div className="relative w-full h-64 md:h-auto lg:h-auto md:max-w-sm lg:max-w-md mx-auto lg:ml-auto">
									<Image
										src={prepaMentaleImg}
										alt="Préparation mentale - Cerveau symbolique"
										fill
										className="object-cover rounded-2xl shadow-glow relative"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Badges Section */}
				<section ref={badgesRef} className="py-20 bg-soft-pink/20">
					<div className="container mx-auto px-4 md:px-6 lg:px-8">
						<div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
							<div
								className={`relative order-last lg:order-first lg:col-span-5 transition-all duration-700 ${
									badgesInView
										? "opacity-100 translate-x-0"
										: "opacity-0 -translate-x-8"
								}`}
							>
								<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-background/50 rounded-full blur-3xl -z-10" />
								<div className="relative w-full h-64 lg:h-96 rounded-2xl overflow-hidden shadow-card rotate-1 hover:rotate-0 transition-transform duration-500">
									<Image
										src={prepaMentale2Img}
										alt="Méditation et préparation mentale - visualisation des objectifs"
										fill
										className="object-cover"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
								</div>
								<p className="text-center lg:text-left font-handwriting text-xl text-primary mt-6 opacity-80 pl-2">
									"La clé est dans la régularité."
								</p>
							</div>
							<div className="lg:col-span-7 flex flex-col justify-center">
								<h2
									className={`font-script text-4xl md:text-5xl text-foreground mb-4 text-center lg:text-left transition-all duration-500 ${
										badgesInView
											? "opacity-100 translate-y-0"
											: "opacity-0 translate-y-4"
									}`}
								>
									Je vous accompagne pour
								</h2>
								<div
									className={`w-20 h-px bg-primary mx-auto lg:mx-0 mb-10 transition-all duration-500 delay-75 ${
										badgesInView
											? "opacity-100 scale-x-100"
											: "opacity-0 scale-x-0"
									}`}
								/>
								<div className="grid sm:grid-cols-2 gap-5">
									{badges.map((badge, index) => (
										<div
											key={badge.label}
											className={`group flex items-center gap-4 p-4 bg-background rounded-xl shadow-soft transition-all duration-500 hover:shadow-glow hover:-translate-y-1 ${
												badgesInView
													? "opacity-100 translate-y-0"
													: "opacity-0 translate-y-4"
											}`}
											style={{
												transitionDelay: `${
													index * 50
												}ms`,
											}}
										>
											<div className="w-12 h-12 rounded-full bg-soft-pink flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
												<badge.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
											</div>
											<span className="font-body text-base text-foreground font-medium">
												{badge.label}
											</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Thérapies complémentaires */}
				<section className="py-20 bg-background">
					<div className="container mx-auto px-4 md:px-6 lg:px-8">
						<div className="max-w-4xl mx-auto text-center">
							<h2 className="font-script text-3xl md:text-4xl text-foreground mb-8">
								Une approche sur-mesure
							</h2>
							<p className="font-body text-muted-foreground mb-10 max-w-2xl mx-auto">
								La préparation mentale s'appuie sur des
								techniques complémentaires que j'adapte à vos
								besoins spécifiques.
							</p>
							<div className="grid sm:grid-cols-3 gap-6">
								{techniques.map((technique) => (
									<Link
										key={technique.href}
										href={technique.href as any}
										className="group p-6 bg-soft-pink/30 rounded-2xl transition-all duration-300 hover:bg-soft-pink/50 hover:-translate-y-1 text-center"
									>
										<technique.icon className="w-8 h-8 text-primary mx-auto mb-4" />
										<h3 className="font-display text-lg text-foreground mb-2">
											{technique.title}
										</h3>
										<p className="font-body text-sm text-muted-foreground">
											{technique.description}
										</p>
									</Link>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section ref={ctaRef} className="py-20 bg-secondary/30">
					<div className="container mx-auto px-4 md:px-6 lg:px-8">
						<div
							className={`max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-all duration-500 ${
								ctaInView
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-4"
							}`}
						>
							<div className="shrink-0 relative group w-48 h-48 md:w-56 md:h-56">
								<div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl transform group-hover:scale-105 transition-transform duration-500" />
								<Image
									src={aureliaPresentationImg}
									alt="Flyer Atelier Self-Love - Aurélia Desvaux"
									fill
									className="object-cover rounded-2xl border-2 border-white/50 shadow-card rotate-3 group-hover:rotate-0 transition-transform duration-500"
								/>
							</div>
							<div className="text-center md:text-left flex-1">
								<h2 className="font-script text-4xl md:text-5xl text-foreground mb-4">
									Prêt(e) à relever votre défi ?
								</h2>
								<p className="font-body text-muted-foreground mb-8">
									Prenez rendez-vous pour un accompagnement
									personnalisé en préparation mentale et
									activez vos ressources.
								</p>
								<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
									<a
										href="https://www.medoucine.com/consultation/valbonne/aurelia-desvaux/1951"
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground font-body rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
									>
										Prendre rendez-vous{" "}
										<ArrowRight className="w-4 h-4" />
									</a>
									<Link
										href="/"
										className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary font-body rounded-full transition-all duration-300 hover:bg-primary/5"
									>
										Retour à l'accueil
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
