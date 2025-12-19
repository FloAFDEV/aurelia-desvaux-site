"use client";

import { Suspense } from "react";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useInView } from "@/hooks/useInView";
import { useParallax } from "@/hooks/useParallax";
import { CheckCircle, Clock } from "lucide-react";
import aureliaPortrait from "@/assets/aurelia-portrait-cabinet.webp";
import hypnoseSeanceImg from "@/assets/hypnose-seance.webp";
import hypnoseBeneficesImg from "@/assets/hypnose-benefices.webp";
import hypnoseConscienceImg from "@/assets/hypnose-conscience.webp";
import hypnoseRelaxationImg from "@/assets/hypnose-relaxation.webp";
import hypnosePenduleImg from "@/assets/hypnose-pendule.webp";
import hypnoseHeroImg from "@/assets/escalier-spirale.webp";
import treeLogo from "@/assets/tree-logo.webp";

const benefits = [
	"Arrêt du tabac",
	"Gestion du stress",
	"Burn-out",
	"Anxiété",
	"Confiance en soi",
	"Perte de poids",
	"Préparation aux examens",
	"Prise de parole",
	"Entretien d'embauche",
	"Gestion de la douleur",
];

// Composant Breadcrumbs avec Suspense
function BreadcrumbsWrapper() {
	return (
		<Suspense fallback={<div className="h-12" />}>
			<Breadcrumbs
				items={[{ label: "Hypnose Ericksonienne", href: "/hypnose" }]}
			/>
		</Suspense>
	);
}

export default function Hypnose() {
	const { ref: heroRef, isInView: heroInView } = useInView();
	const { ref: contentRef, isInView: contentInView } = useInView();
	const { ref: sessionRef, isInView: sessionInView } = useInView();
	const { ref: benefitsRef, isInView: benefitsInView } = useInView();
	const parallax = useParallax(0.15);

	return (
		<>
			<BreadcrumbsWrapper />

			{/* Hero Section with Parallax */}
			<section
				ref={heroRef}
				className="pt-32 pb-20 bg-soft-pink/30 relative overflow-hidden"
			>
				<div
					className="absolute inset-0 opacity-10"
					style={{
						backgroundImage: `url(${hypnoseHeroImg.src})`,
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
								priority
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
							Hypnose Ericksonienne
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
								className="inline-flex px-10 py-4 bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground font-body rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-100"
							>
								Prise de rendez-vous
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
								<div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
									<Image
										src={treeLogo}
										alt=""
										aria-hidden="true"
										fill
										className="object-cover"
										priority
									/>
								</div>
								<span className="font-display text-lg text-primary">
									Aurélia Desvaux
								</span>
							</div>
							<h2 className="font-script text-3xl md:text-4xl lg:text-5xl text-foreground">
								Qu'est-ce que l'Hypnose Ericksonienne ?
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
										<div className="group w-14 h-14 rounded-full overflow-hidden shadow-md border-2 border-white/80 transition-all duration-300 hover:scale-110 relative">
											<Image
												src={hypnosePenduleImg}
												alt="Pendule hypnose"
												fill
												className="object-cover"
											/>
										</div>
									</div>
									<p>
										L'hypnose Ericksonienne permet d'aller
										chercher des ressources inconscientes
										aidantes, permettant une réorganisation
										des perceptions.
									</p>
								</div>

								<p>
									Contrairement aux idées reçues, vous restez
									conscient(e) et en contrôle pendant toute la
									séance. L'hypnose est un état naturel que
									nous expérimentons tous au quotidien.
								</p>

								<p>
									Quel que soit votre besoin, je me tiens à
									votre disposition pour effectuer ce chemin à
									vos côtés, en vous apportant mon expertise
									et ma bienveillance.
								</p>

								{/* Mini galerie de badges ronds sur mobile */}
								<div className="flex items-center justify-center gap-3 py-4 md:hidden">
									{[
										{
											src: hypnoseSeanceImg,
											alt: "Séance hypnose",
											w: "16",
											h: "16",
										},
										{
											src: hypnoseRelaxationImg,
											alt: "Relaxation",
											w: "20",
											h: "20",
											mt: "-mt-4",
										},
										{
											src: hypnoseConscienceImg,
											alt: "Conscience",
											w: "14",
											h: "14",
											mt: "mt-2",
										},
									].map((img, idx) => (
										<div
											key={idx}
											className={`group relative w-${
												img.w
											} h-${img.h} rounded-full overflow-hidden shadow-lg border-2 border-white/80 transition-all duration-300 hover:scale-110 hover:shadow-xl ${
												img.mt || ""
											}`}
										>
											<Image
												src={img.src}
												alt={img.alt}
												fill
												className="object-cover"
											/>
										</div>
									))}
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
								{[
									{
										src: hypnoseSeanceImg,
										alt: "Séance d'hypnose Ericksonienne",
									},
									{
										src: hypnosePenduleImg,
										alt: "Technique d'induction",
									},
									{
										src: hypnoseRelaxationImg,
										alt: "Relaxation profonde",
									},
									{
										src: hypnoseConscienceImg,
										alt: "État de conscience modifié",
									},
								].map((imgObj, idx) => (
									<div
										key={idx}
										className={`group overflow-hidden rounded-2xl shadow-card transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${
											idx % 2 === 1 ? "mt-6" : ""
										}`}
									>
										<div className="relative w-full aspect-[4/3]">
											<Image
												src={imgObj.src}
												alt={imgObj.alt}
												fill
												className="object-cover object-center rounded-2xl transition-transform duration-500 group-hover:scale-110"
												loading="lazy"
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
							<div
								className={`bg-background rounded-2xl p-8 shadow-soft transition-all duration-500 delay-100 ${
									sessionInView
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-4"
								}`}
							>
								<div className="flex items-center gap-3 mb-4">
									<Clock className="w-6 h-6 text-primary" />
									<span className="font-display text-xl text-foreground">
										Première séance : 1h30
									</span>
								</div>
								<p className="font-body text-muted-foreground">
									C'est le moment de se découvrir, d'échanger
									à propos de votre histoire, de ce qui vous
									amène à venir me voir, de vos attentes.
									C'est aussi l'occasion pour moi de vous
									présenter les outils (PNL, hypnose, EFT) que
									je mets à votre disposition.
								</p>
							</div>

							<div
								className={`bg-background rounded-2xl p-8 shadow-soft transition-all duration-500 delay-150 ${
									sessionInView
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-4"
								}`}
							>
								<div className="flex items-center gap-3 mb-4">
									<Clock className="w-6 h-6 text-primary" />
									<span className="font-display text-xl text-foreground">
										Séances suivantes : 1h00
									</span>
								</div>
								<p className="font-body text-muted-foreground">
									Les séances suivantes permettent de
									profondir les changements, de lever les
									blocages, et de consolider vos nouvelles
									ressources pour atteindre vos objectifs.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section ref={benefitsRef} className="py-20 bg-background">
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						{/* Texte + image */}
						<div>
							<h2 className="font-script text-4xl md:text-5xl text-foreground mb-4 text-center">
								Les bénéfices attendus
							</h2>
							<div className="w-20 h-px bg-primary mb-8 mx-auto" />

							<p className="font-body text-muted-foreground mb-6 text-center">
								À l'issue de votre séance vous repartez
								soulagé(e), avec une vision optimiste et des
								ressources aidantes pour avancer sur votre
								chemin. Vous gagnez en sérénité, en
								détermination et en confiance.
							</p>

							<p className="font-body text-muted-foreground mb-8 text-center">
								Ce travail permet de changer votre perception
								d'une situation, et donc de son impact sur vous.
								C'est comme si pendant toute une période de
								votre vie vous n'aviez vu qu'une seule porte et
								tout à coup il y avait plusieurs portes et des
								choix possibles pour atteindre vos objectifs.
							</p>

							<div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-card group">
								<Image
									src={hypnoseBeneficesImg}
									alt="Femme sereine contemplant un paysage de montagnes au coucher du soleil, symbolisant la liberté et le bien-être après une thérapie"
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-110"
									loading="lazy"
								/>
							</div>
						</div>

						{/* Liste des bénéfices */}
						<div className="grid grid-cols-2 gap-4">
							{benefits.map((benefit, index) => (
								<div
									key={index}
									className={`flex items-center gap-3 p-4 bg-soft-pink/30 rounded-xl transition-all duration-500 hover:-translate-y-1 ${
										benefitsInView
											? "opacity-100 translate-y-0"
											: "opacity-0 translate-y-4"
									}`}
									style={{
										transitionDelay: `${150 + index * 30}ms`,
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
			<section className="py-20 bg-primary/10 text-center">
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<h2 className="font-script text-4xl md:text-5xl mb-6">
						Prendre rendez-vous avec Aurélia
					</h2>
					<p className="font-body text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
						Un accompagnement personnalisé et bienveillant pour
						votre bien-être.
					</p>

					<div className="w-32 h-32 relative mx-auto mb-8 rounded-full shadow-card overflow-hidden group">
						<Image
							src={aureliaPortrait}
							alt="Aurélia Desvaux, hypnothérapeute certifiée à Valbonne"
							fill
							className="object-cover transition-transform duration-500 group-hover:scale-110"
							loading="lazy"
						/>
					</div>

					<a
						href="https://www.medoucine.com/consultation/valbonne/aurelia-desvaux/1951"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex px-12 py-4 bg-primary text-primary-foreground rounded-full font-body shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-100"
					>
						Prendre rendez-vous
					</a>
				</div>
			</section>
		</>
	);
}
