"use client";

import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useInView } from "@/hooks/useInView";
import { useParallax } from "@/hooks/useParallax";
import { CheckCircle, ArrowRight, Clock } from "lucide-react";

import eftNatureImg from "@/assets/eft-nature.webp";
import eftTappingImg from "@/assets/eft-tapping.webp";
import eftLiberteImg from "@/assets/eft-liberte.webp";
import eftBeneficesImg from "@/assets/eft-benefices.webp";
import treeLogo from "@/assets/tree-logo.webp";

const benefits = [
	"Arrêt du tabac",
	"Gestion du stress",
	"Burn-out",
	"Anxiété",
	"Confiance en soi",
	"Perte de poids",
	"Préparation aux examens",
	"Libération des traumas",
	"Colère et frustration",
	"Peurs et phobies",
];

const galleryImages = [
	{
		src: eftTappingImg,
		alt: "Technique de tapping EFT",
	},
	{
		src: eftNatureImg,
		alt: "Sérénité et nature",
	},
	{
		src: eftLiberteImg,
		alt: "Liberté émotionnelle",
	},
	{
		src: eftBeneficesImg,
		alt: "Bienfaits de l'EFT",
	},
];

const sessions = [
	{
		title: "Première séance : 1h30",
		description:
			"C'est le moment de se découvrir, d'échanger à propos de votre histoire, de ce qui vous amène à venir me voir, de vos attentes. C'est aussi l'occasion pour moi de vous présenter les outils (PNL, hypnose, EFT) que je mets à votre disposition.",
	},
	{
		title: "Séances suivantes : 1h00",
		description:
			"Nous prenons un temps pour échanger autour des changements opérés depuis la séance précédente, réajuster vos objectifs. C'est en fonction de vos retours que s'adapte la suite de la séance. Chaque séance est unique, comme vous !",
	},
];

export default function EFTContent() {
	const { ref: heroRef, isInView: heroInView } = useInView();
	const { ref: contentRef, isInView: contentInView } = useInView();
	const { ref: sessionRef, isInView: sessionInView } = useInView();
	const { ref: benefitsRef, isInView: benefitsInView } = useInView();
	const parallax = useParallax(0.15);

	return (
		<>
			<Breadcrumbs items={[{ label: "EFT", href: "/eft" }]} />
			{/* Hero Section */}
			<section
				ref={heroRef}
				className="pt-32 pb-20 bg-soft-pink/30 relative overflow-hidden"
			>
				<div
					className="absolute inset-0 opacity-10"
					style={{
						backgroundImage: `url(${eftTappingImg.src})`,
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
								quality={85}
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
							Emotional Freedom Techniques
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
						{/* Header */}
						<div
							className={`mb-8 transition-all duration-500 ${
								contentInView
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-4"
							}`}
						>
							<div className="flex items-center gap-3 mb-4">
								<Image
									src={treeLogo}
									alt=""
									aria-hidden="true"
									width={48}
									height={48}
									quality={85}
									className="w-10 h-10 md:w-12 md:h-12 rounded-full"
								/>
								<span className="font-display text-lg text-primary">
									Aurélia Desvaux
								</span>
							</div>
							<h2 className="font-script text-3xl md:text-4xl lg:text-5xl text-foreground">
								Qu'est-ce que l'EFT ?
							</h2>
						</div>

						<div className="w-20 h-px bg-primary mb-8" />

						{/* Contenu avec images intégrées */}
						<div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
							{/* Texte principal */}
							<div
								className={`lg:col-span-3 space-y-6 font-body text-muted-foreground leading-relaxed transition-all duration-500 ${
									contentInView
										? "opacity-100 translate-x-0"
										: "opacity-0 -translate-x-6"
								}`}
							>
								{/* Premier paragraphe avec badge rond flottant à droite sur mobile */}
								<div className="relative">
									<div className="float-right ml-4 mb-2 md:hidden">
										<div className="group w-14 h-14 rounded-full overflow-hidden shadow-md border-2 border-white/80 transition-all duration-300 hover:scale-110">
											<Image
												src={eftNatureImg}
												alt="Liberté émotionnelle"
												width={56}
												height={56}
												quality={85}
												className="w-full h-full object-cover"
											/>
										</div>
									</div>
									<p>
										L'EFT (Emotional Freedom Techniques)
										permet, par la stimulation de points
										énergétiques situés sur les méridiens
										associée à une verbalisation de nos
										émotions, de se libérer des émotions
										coincées en nous.
									</p>
								</div>

								<p>
									Ainsi colère, tristesse, peur, frustration,
									sont autorisées à exister, pour ensuite être
									libérées.
								</p>

								<p>
									Quel que soit votre besoin, je me tiens à
									votre disposition pour effectuer ce chemin à
									vos côtés, en vous apportant mon expertise
									et ma bienveillance.
								</p>

								{/* Mini galerie de badges ronds sur mobile */}
								<div className="flex items-center justify-center gap-3 py-4 md:hidden">
									<div className="group w-16 h-16 rounded-full overflow-hidden shadow-lg border-2 border-white/80 transition-all duration-300 hover:scale-110 hover:shadow-xl">
										<Image
											src={eftTappingImg}
											alt="Technique EFT"
											width={64}
											height={64}
											quality={85}
											className="w-full h-full object-cover"
										/>
									</div>
									<div className="group w-20 h-20 rounded-full overflow-hidden shadow-lg border-2 border-white/80 transition-all duration-300 hover:scale-110 hover:shadow-xl -mt-4">
										<Image
											src={eftLiberteImg}
											alt="Liberté émotionnelle"
											width={80}
											height={80}
											quality={85}
											className="w-full h-full object-cover"
										/>
									</div>
									<div className="group w-14 h-14 rounded-full overflow-hidden shadow-lg border-2 border-white/80 transition-all duration-300 hover:scale-110 hover:shadow-xl mt-2">
										<Image
											src={eftBeneficesImg}
											alt="Bienfaits EFT"
											width={56}
											height={56}
											quality={85}
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>

							{/* Images desktop/tablet - grille à droite */}
							<div
								className={`hidden md:grid lg:col-span-2 grid-cols-2 gap-3 transition-all duration-500 delay-150 ${
									contentInView
										? "opacity-100 translate-x-0"
										: "opacity-0 translate-x-6"
								}`}
							>
								{galleryImages.map((imgObj, idx) => (
									<div
										key={idx}
										className={`group overflow-hidden rounded-2xl shadow-card transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${
											idx % 2 === 1 ? "mt-6" : ""
										}`}
									>
										<div className="w-full aspect-[4/3] relative">
											<Image
												src={imgObj.src}
												alt={imgObj.alt}
												fill
												quality={85}
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
							{sessions.map((session, index) => (
								<div
									key={index}
									className={`bg-background rounded-2xl p-8 shadow-soft transition-all duration-500 ${
										sessionInView
											? "opacity-100 translate-y-0"
											: "opacity-0 translate-y-4"
									}`}
									style={{
										transitionDelay: `${
											100 + index * 50
										}ms`,
									}}
								>
									<div className="flex items-center gap-3 mb-4">
										<Clock className="w-6 h-6 text-primary" />
										<span className="font-display text-xl text-foreground">
											{session.title}
										</span>
									</div>
									<p className="font-body text-muted-foreground">
										{session.description}
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
								Vous vous libérez du poids qui entravait votre
								avancée personnelle ou professionnelle.
							</p>

							<div
								className={`overflow-hidden rounded-2xl shadow-card transition-all duration-500 delay-200 ${
									benefitsInView
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-4"
								}`}
							>
								<div className="relative w-full h-48">
									<Image
										src={eftNatureImg}
										alt="Femme assise paisiblement face à un panorama montagneux, symbolisant la sérénité retrouvée après une thérapie EFT"
										fill
										quality={85}
										className="object-cover transition-transform duration-500 hover:scale-110"
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
						<div className="overflow-hidden rounded-full w-32 h-32 mx-auto mb-8 shadow-card relative">
							<Image
								src={eftLiberteImg}
								alt="Symbole de liberté émotionnelle"
								fill
								quality={85}
								className="object-cover transition-transform duration-500 hover:scale-110"
							/>
						</div>
						<h2 className="font-script text-4xl md:text-5xl text-foreground mb-4">
							Libérez-vous émotionnellement
						</h2>
						<p className="font-body text-muted-foreground mb-8">
							L'EFT est une technique douce et efficace pour vous
							libérer de ce qui vous pèse. Je vous guide avec
							bienveillance dans ce processus de libération.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="https://www.medoucine.com/consultation/valbonne/aurelia-desvaux/1951"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground font-body rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
							>
								Prendre rendez-vous
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
			</section>
		</>
	);
}
