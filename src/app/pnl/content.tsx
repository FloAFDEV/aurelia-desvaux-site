"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import { useParallax } from "@/hooks/useParallax";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CheckCircle, ArrowRight, Clock } from "lucide-react";

import pnlBilanImg from "@/assets/pnl-bilan.webp";
import pnlCerveauArtImg from "@/assets/pnl-cerveau-art.webp";
import pnlCerveauMaquetteImg from "@/assets/pnl-cerveau-maquette.webp";
import pnlDessinImg from "@/assets/pnl-dessin.webp";
import pnlAmpouleImg from "@/assets/pnl-ampoule.webp";
import pnlPracticeImg from "@/assets/pnl-cerveau2.webp";
import treeLogo from "@/assets/tree-logo.webp";

const benefits = [
	"Arrêt du tabac",
	"Gestion du stress",
	"Burn-out",
	"Anxiété",
	"Confiance en soi",
	"Perte de poids",
	"Préparation aux examens",
	"Évolution professionnelle",
	"Prise de parole",
	"Entretien d'embauche",
];

export default function Content() {
	const { ref: heroRef, isInView: heroInView } = useInView();
	const { ref: contentRef, isInView: contentInView } = useInView();
	const { ref: sessionRef, isInView: sessionInView } = useInView();
	const { ref: benefitsRef, isInView: benefitsInView } = useInView();
	const parallax = useParallax(0.15);

	return (
		<>
			<Breadcrumbs items={[{ label: "PNL", href: "/pnl" }]} />
			{/* Hero Section */}
			<section
				ref={heroRef}
				className="pt-32 pb-20 bg-soft-pink/30 relative overflow-hidden"
			>
				<div
					className="absolute inset-0 opacity-20"
					style={{
						backgroundImage: `url(${pnlPracticeImg.src})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						...parallax,
					}}
				/>
				<div className="absolute top-20 left-10 w-32 h-32 bg-blush/30 rounded-full blur-3xl" />
				<div className="absolute bottom-20 right-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />

				<div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
					<div className="max-w-4xl mx-auto text-center bg-gradient-to-b from-white/70 via-white/50 to-white/0 p-8 rounded-3xl shadow-xl backdrop-blur-sm">
						{/* Logo */}
						<div
							className={`inline-flex items-center justify-center gap-4 mb-6 transition-all duration-500 ${
								heroInView
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-4"
							}`}
						>
							<div className="relative w-20 h-20 rounded-full shadow-md">
								<Image
									src={treeLogo}
									alt=""
									fill
									className="object-cover rounded-full"
									aria-hidden="true"
								/>
							</div>
						</div>

						<h1
							className={`font-script text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 transition-all duration-500 delay-75 ${
								heroInView
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-4"
							}`}
						>
							Programmation Neuro-Linguistique
						</h1>
						<p
							className={`font-body text-xl text-muted-foreground max-w-2xl mx-auto mb-4 transition-all duration-500 delay-100 ${
								heroInView
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-4"
							}`}
						>
							Thérapies Brèves — PNL - Hypnose - EFT
						</p>
						<p
							className={`font-body text-lg text-muted-foreground/80 max-w-xl mx-auto mb-8 transition-all duration-500 delay-150 ${
								heroInView
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-4"
							}`}
						>
							Chaque personne est unique et mérite un
							accompagnement unique
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
								Prise de rendez-vous
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Content Section */}
			<section ref={contentRef} className="py-12 md:py-20 bg-background">
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<div className="max-w-6xl mx-auto">
						<div
							className={`mb-8 transition-all duration-500 ${
								contentInView
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-4"
							}`}
						>
							<div className="flex items-center gap-3 mb-4">
								<div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full">
									<Image
										src={treeLogo}
										alt=""
										fill
										className="object-cover rounded-full"
										aria-hidden="true"
									/>
								</div>
								<span className="font-display text-lg text-primary">
									Aurélia Desvaux
								</span>
							</div>
							<h2 className="font-script text-3xl md:text-4xl lg:text-5xl text-foreground">
								Qu'est-ce que la PNL ?
							</h2>
						</div>

						<div className="w-20 h-px bg-primary mb-8" />

						<div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
							{/* Texte principal */}
							<div
								className={`lg:col-span-3 space-y-6 font-body text-muted-foreground leading-relaxed transition-all duration-500 ${
									contentInView
										? "opacity-100 translate-x-0"
										: "opacity-0 -translate-x-6"
								}`}
							>
								<div className="relative">
									<div className="float-right ml-4 mb-2 md:hidden">
										<div className="relative w-14 h-14 rounded-full overflow-hidden shadow-md border-2 border-white/80 transition-all duration-300 hover:scale-110">
											<Image
												src={pnlBilanImg}
												alt="Bilan PNL"
												fill
												className="object-cover"
											/>
										</div>
									</div>
									<p>
										La PNL permet d'accéder à une autre
										perception d'une situation, parfois de
										façon conversationnelle, d'autres fois
										par des protocoles dynamiques, en
										accédant à nos ressources internes.
									</p>
								</div>
								<p>
									Quel que soit votre besoin, je me tiens à
									votre disposition pour effectuer ce chemin à
									vos côtés, en vous apportant mon expertise
									et ma bienveillance.
								</p>

								{/* Mini galerie mobile */}
								<div className="flex items-center justify-center gap-3 py-4 md:hidden">
									{[
										pnlCerveauArtImg,
										pnlCerveauMaquetteImg,
										pnlDessinImg,
									].map((img, idx) => (
										<div
											key={idx}
											className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg border-2 border-white/80 transition-all duration-300 hover:scale-110 hover:shadow-xl"
										>
											<Image
												src={img}
												alt=""
												fill
												className="object-cover"
											/>
										</div>
									))}
								</div>
							</div>

							{/* Galerie desktop */}
							<div
								className={`hidden md:grid lg:col-span-2 grid-cols-2 gap-3 transition-all duration-500 delay-150 ${
									contentInView
										? "opacity-100 translate-x-0"
										: "opacity-0 translate-x-6"
								}`}
							>
								{[
									pnlBilanImg,
									pnlCerveauArtImg,
									pnlCerveauMaquetteImg,
									pnlDessinImg,
								].map((img, idx) => (
									<div
										key={idx}
										className={`group overflow-hidden rounded-2xl shadow-card transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${
											idx % 2 === 1 ? "mt-6" : ""
										}`}
									>
										<div className="relative w-full aspect-[4/3]">
											<Image
												src={img}
												alt=""
												fill
												className="object-cover object-center rounded-2xl transition-transform duration-500 group-hover:scale-110"
											/>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Session Section */}
			<section ref={sessionRef} className="py-20 bg-soft-pink/20">
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto">
						<h2
							className={`font-script text-4xl md:text-5xl text-foreground mb-4 text-center transition-all duration-500 ${
								sessionInView
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-4"
							}`}
						>
							Déroulement d'une séance
						</h2>
						<div
							className={`w-20 h-px bg-primary mx-auto mb-12 transition-all duration-500 delay-75 ${
								sessionInView
									? "opacity-100 scale-x-100"
									: "opacity-0 scale-x-0"
							}`}
						/>

						<div className="grid md:grid-cols-2 gap-8">
							{[
								{
									title: "Première séance : 1h30",
									icon: Clock,
									text: "C'est le moment de se découvrir, d'échanger à propos de votre histoire, de ce qui vous amène à venir me voir, de vos attentes. C'est aussi l'occasion pour moi de vous présenter les outils (PNL, hypnose, EFT) que je mets à votre disposition.",
									delay: 100,
								},
								{
									title: "Séances suivantes : 1h00",
									icon: Clock,
									text: "Nous prenons un temps pour échanger autour des changements opérés depuis la séance précédente, réajuster vos objectifs. Chaque séance est unique, comme vous !",
									delay: 150,
								},
							].map((item, idx) => (
								<div
									key={idx}
									className={`bg-background rounded-2xl p-8 shadow-soft transition-all duration-500 delay-${
										item.delay
									} ${
										sessionInView
											? "opacity-100 translate-y-0"
											: "opacity-0 translate-y-4"
									}`}
								>
									<div className="flex items-center gap-3 mb-4">
										<item.icon className="w-6 h-6 text-primary" />
										<span className="font-display text-xl text-foreground">
											{item.title}
										</span>
									</div>
									<p className="font-body text-muted-foreground">
										{item.text}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section ref={benefitsRef} className="py-20 bg-background">
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div>
							<h2
								className={`font-script text-4xl md:text-5xl text-foreground mb-4 transition-all duration-500 ${
									benefitsInView
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-4"
								}`}
							>
								Les bénéfices attendus
							</h2>
							<div
								className={`w-20 h-px bg-primary mb-8 transition-all duration-500 delay-75 ${
									benefitsInView
										? "opacity-100 scale-x-100"
										: "opacity-0 scale-x-0"
								}`}
							/>

							<p
								className={`font-body text-muted-foreground mb-6 transition-all duration-500 delay-100 ${
									benefitsInView
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-4"
								}`}
							>
								À l'issue de votre séance vous repartez
								soulagé(e), avec une vision optimiste et des
								ressources aidantes pour avancer sur votre
								chemin. Vous gagnez en sérénité, en
								détermination et en confiance.
							</p>

							<p
								className={`font-body text-muted-foreground mb-8 transition-all duration-500 delay-150 ${
									benefitsInView
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-4"
								}`}
							>
								Ce travail permet de changer votre perception
								d'une situation, et donc de son impact sur vous.
								C'est comme si pendant toute une période de
								votre vie vous n'aviez vu qu'une seule porte et
								tout à coup il y avait plusieurs portes et des
								choix possibles pour atteindre vos objectifs.
							</p>

							<div
								className={`overflow-hidden rounded-2xl shadow-card transition-all duration-500 delay-200 ${
									benefitsInView
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-4"
								}`}
							>
								<div className="relative w-full h-56">
									<Image
										src={pnlAmpouleImg}
										alt="Silhouette de tête avec une ampoule colorée en forme de cerveau"
										fill
										className="object-cover object-[center_80%] transition-transform duration-500 hover:scale-110"
									/>
								</div>
							</div>
						</div>

						<div className="grid grid-cols-2 gap-4">
							{benefits.map((benefit, index) => (
								<div
									key={benefit}
									className={`flex items-center gap-3 p-4 bg-soft-pink/30 rounded-xl transition-all duration-500 hover:-translate-y-1 ${
										benefitsInView
											? "opacity-100 translate-y-0"
											: "opacity-0 translate-y-4"
									}`}
									style={{
										transitionDelay: `${
											150 + index * 30
										}ms`,
									}}
								>
									<CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
									<span className="font-body text-sm text-foreground">
										{benefit}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-soft-pink/30">
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto text-center">
						<div className="relative overflow-hidden w-32 h-32 mx-auto mb-8 rounded-full shadow-card">
							<Image
								src={pnlCerveauArtImg}
								alt="Représentation artistique du cerveau"
								fill
								className="object-cover transition-transform duration-500 hover:scale-110"
							/>
						</div>
						<h2 className="font-script text-4xl md:text-5xl text-foreground mb-4">
							Développez votre potentiel
						</h2>
						<p className="font-body text-muted-foreground mb-8">
							La PNL vous offre des outils concrets pour
							transformer votre vie. Ensemble, nous définirons vos
							objectifs et travaillerons à les atteindre.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="https://www.medoucine.com/consultation/valbonne/aurelia-desvaux/1951"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground font-body rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
							>
								Prendre rendez-vous{" "}
								<ArrowRight className="w-4 h-4" />
							</Link>
							<Link
								href="/"
								className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary font-body rounded-full transition-all duration-300 hover:bg-primary/5"
							>
								Retour à l'accueil
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
