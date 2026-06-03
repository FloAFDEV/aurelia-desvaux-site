"use client";

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useInView } from "@/hooks/useInView";
import { CheckCircle, Award, MapPin } from "lucide-react";
import aureliaPortrait from "@/assets/aurelia-portrait-nature.webp";
import aureliaPortrait2 from "@/assets/aurelia-portrait-cabinet.webp";
import aureliaPresentation from "@/assets/aurelia-presentation.webp";
import treeLogo from "@/assets/tree-logo.webp";

function BreadcrumbsWrapper() {
	return (
		<Suspense fallback={<div className="h-12" />}>
			<Breadcrumbs items={[{ label: "À propos", href: "/a-propos" }]} />
		</Suspense>
	);
}

export default function AProposContent() {
	const { ref: heroRef, isInView: heroInView } = useInView();
	const { ref: parcoursRef, isInView: parcoursInView } = useInView();
	const { ref: certifRef, isInView: certifInView } = useInView();
	const { ref: approcheRef, isInView: approcheInView } = useInView();
	const { ref: cabinetRef, isInView: cabinetInView } = useInView();

	return (
		<>
			<BreadcrumbsWrapper />

			{/* Hero */}
			<section
				ref={heroRef}
				className="pt-32 pb-20 bg-soft-pink/30 relative overflow-hidden"
			>
				<div className="absolute top-20 left-10 w-32 h-32 bg-blush/30 rounded-full blur-3xl" />
				<div className="absolute bottom-20 right-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />

				<div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
					<div className="max-w-5xl mx-auto">
						<div className="grid lg:grid-cols-2 gap-10 items-center">
							<div>
								<div
									className={`inline-flex items-center gap-3 mb-6 transition-all duration-500 ${
										heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
									}`}
								>
									<Image
										src={treeLogo}
										alt=""
										aria-hidden="true"
										width={48}
										height={48}
										priority
										quality={85}
										className="w-12 h-12 rounded-full shadow-md"
									/>
								</div>

								<h1
									className={`font-script text-5xl md:text-6xl lg:text-7xl text-foreground mb-4 transition-all duration-500 delay-75 ${
										heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
									}`}
								>
									Aurélia Desvaux
								</h1>

								<p
									className={`font-display text-2xl text-primary mb-4 transition-all duration-500 delay-100 ${
										heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
									}`}
								>
									Praticienne certifiée en Thérapies Brèves
								</p>

								<div
									className={`inline-flex items-center gap-2 mb-6 transition-all duration-500 delay-125 ${
										heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
									}`}
								>
									<MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
									<p className="font-body text-sm text-muted-foreground">
										Valbonne · Sophia-Antipolis · 06
									</p>
								</div>

								<p
									className={`font-body text-muted-foreground leading-relaxed transition-all duration-500 delay-150 ${
										heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
									}`}
								>
									Hypnose Ericksonienne · PNL · EFT · Préparation Mentale
								</p>
							</div>

							<figure
								className={`relative transition-all duration-700 delay-200 ${
									heroInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
								}`}
							>
								<div className="relative max-w-sm mx-auto">
									<Image
										src={aureliaPortrait}
										alt="Aurélia Desvaux, praticienne en thérapies brèves à Valbonne Sophia-Antipolis"
										className="w-full h-auto object-cover rounded-lg shadow-card"
										priority
										quality={85}
										sizes="(max-width: 768px) 100vw, 400px"
									/>
								</div>
							</figure>
						</div>
					</div>
				</div>
			</section>

			{/* Parcours */}
			<section ref={parcoursRef} className="py-20 bg-background">
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto">
						<div className="grid lg:grid-cols-2 gap-12 items-center">
							<div
								className={`transition-all duration-700 ${
									parcoursInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
								}`}
							>
								<h2 className="font-script text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
									Mon parcours
								</h2>
								<div className="w-20 h-px bg-primary mb-8" />

								<div className="space-y-6 font-body text-muted-foreground leading-relaxed">
									<p>
										Après plus de 15 ans à travailler en entreprise dans la gestion de projets
										et le management, j'ai choisi de me reconvertir pour mettre mes compétences
										au service de l'accompagnement humain.
									</p>
									<p>
										Cette transition n'a pas été un hasard : confrontée moi-même à des périodes
										de stress intense et de remise en question, j'ai découvert les thérapies
										brèves comme un outil de transformation profond et rapide. L'efficacité
										de ces approches m'a convaincue d'en faire mon métier.
									</p>
									<p>
										Aujourd'hui je reçois en cabinet à Valbonne, au cœur de Sophia-Antipolis,
										et en visioconférence des patients venus de Valbonne, Antibes, Biot,
										Mougins, Cannes et de toute la Côte d'Azur.
									</p>
								</div>
							</div>

							<figure
								className={`relative transition-all duration-700 delay-200 ${
									parcoursInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
								}`}
							>
								<div className="relative max-w-sm mx-auto">
									<Image
										src={aureliaPresentation}
										alt="Aurélia Desvaux en consultation au cabinet de Valbonne"
										className="w-full h-auto object-cover rounded-lg shadow-card"
										quality={85}
										sizes="(max-width: 768px) 100vw, 400px"
										loading="lazy"
									/>
								</div>
							</figure>
						</div>
					</div>
				</div>
			</section>

			{/* Certifications */}
			<section ref={certifRef} className="py-20 bg-soft-pink/20">
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto">
						<h2
							className={`font-script text-3xl md:text-4xl text-foreground mb-4 text-center transition-all duration-500 ${
								certifInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
							}`}
						>
							Formations &amp; Certifications
						</h2>
						<div
							className={`w-20 h-px bg-primary mx-auto mb-12 transition-all duration-500 delay-75 ${
								certifInView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
							}`}
						/>

						<div
							className={`space-y-4 transition-all duration-500 delay-100 ${
								certifInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
							}`}
						>
							{[
								"Praticienne certifiée en Hypnose Ericksonienne",
								"Praticienne certifiée en PNL (Programmation Neuro-Linguistique)",
								"Praticienne certifiée en EFT (Emotional Freedom Techniques)",
								"Praticienne en Havening Techniques®",
								"Formation en Préparation Mentale",
							].map((certif, index) => (
								<div
									key={index}
									className="flex items-start gap-4 p-5 bg-background rounded-xl shadow-soft"
									style={{ transitionDelay: `${100 + index * 50}ms` }}
								>
									<Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
									<p className="font-body text-foreground">{certif}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Approche */}
			<section ref={approcheRef} className="py-20 bg-background">
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto">
						<div className="grid lg:grid-cols-2 gap-12 items-center">
							<figure
								className={`relative transition-all duration-700 ${
									approcheInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
								}`}
							>
								<div className="relative max-w-sm mx-auto">
									<Image
										src={aureliaPortrait2}
										alt="Aurélia Desvaux souriante dans son cabinet de Valbonne"
										className="w-full h-auto object-cover rounded-lg shadow-card"
										quality={85}
										sizes="(max-width: 768px) 100vw, 400px"
										loading="lazy"
									/>
								</div>
							</figure>

							<div
								className={`transition-all duration-700 delay-200 ${
									approcheInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
								}`}
							>
								<h2 className="font-script text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
									Mon approche
								</h2>
								<div className="w-20 h-px bg-primary mb-8" />

								<div className="space-y-6 font-body text-muted-foreground leading-relaxed">
									<p>
										Je crois que chaque personne porte en elle les ressources nécessaires
										pour surmonter ses blocages. Mon rôle est de créer l'espace et les
										conditions pour qu'elles émergent.
									</p>
									<p>
										Chaque séance est unique, construite autour de vous et de vos objectifs.
										Je combine les approches — hypnose, PNL, EFT, Havening — selon ce qui
										sert le mieux votre avancement.
									</p>
									<p>
										La bienveillance, l'écoute sans jugement et la co-construction du
										chemin thérapeutique sont au cœur de ma pratique.
									</p>
								</div>

								<ul className="flex flex-wrap gap-3 mt-8">
									{["Bienveillance", "Écoute", "Expertise", "Personnalisation"].map((val) => (
										<li
											key={val}
											className="flex items-center gap-2 group cursor-default"
										>
											<span className="w-2.5 h-2.5 rounded-full bg-primary" aria-hidden="true" />
											<span className="font-body text-sm text-foreground">{val}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Cabinet + zones */}
			<section ref={cabinetRef} className="py-20 bg-soft-pink/20">
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto text-center">
						<h2
							className={`font-script text-3xl md:text-4xl text-foreground mb-4 transition-all duration-500 ${
								cabinetInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
							}`}
						>
							Le cabinet
						</h2>
						<div
							className={`w-20 h-px bg-primary mx-auto mb-8 transition-all duration-500 delay-75 ${
								cabinetInView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
							}`}
						/>

						<p className="font-body text-muted-foreground mb-2">
							1 Place Joseph Bermond, Bât Ophira 1 – 2e étage
						</p>
						<p className="font-body text-muted-foreground mb-6">
							06560 Valbonne (Sophia-Antipolis)
						</p>
						<p className="font-body text-sm text-muted-foreground mb-8">
							Accessible depuis Antibes · Biot · Mougins · Cannes · Nice · Grasse
							<br />
							Séances en visioconférence disponibles
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="https://www.medoucine.com/consultation/valbonne/aurelia-desvaux/1951"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex px-10 py-4 bg-primary text-primary-foreground rounded-full font-body shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-100"
							>
								Prendre rendez-vous
							</a>
							<Link
								href="/tarifs"
								className="inline-flex px-10 py-4 border border-primary text-primary rounded-full font-body transition-all duration-300 hover:bg-primary/5 hover:scale-105"
							>
								Voir les tarifs
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Maillage interne */}
			<section className="py-12 bg-background border-t border-border">
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<div className="max-w-2xl mx-auto text-center">
						<p className="font-body text-sm text-muted-foreground mb-6">
							Découvrez les accompagnements proposés
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<Link href="/hypnose" className="font-body text-sm text-primary underline underline-offset-2 hover:text-foreground transition-colors">Hypnose Ericksonienne</Link>
							<Link href="/hypnose-arret-tabac" className="font-body text-sm text-primary underline underline-offset-2 hover:text-foreground transition-colors">Arrêt du Tabac</Link>
							<Link href="/pnl" className="font-body text-sm text-primary underline underline-offset-2 hover:text-foreground transition-colors">PNL</Link>
							<Link href="/eft" className="font-body text-sm text-primary underline underline-offset-2 hover:text-foreground transition-colors">EFT</Link>
							<Link href="/preparation-mentale" className="font-body text-sm text-primary underline underline-offset-2 hover:text-foreground transition-colors">Préparation Mentale</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
