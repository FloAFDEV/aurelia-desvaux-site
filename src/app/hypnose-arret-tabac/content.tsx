"use client";

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useInView } from "@/hooks/useInView";
import { CheckCircle, Clock, Euro } from "lucide-react";
import aureliaPortrait from "@/assets/aurelia-portrait-cabinet.webp";
import hypnoseSeanceImg from "@/assets/hypnose-seance.webp";
import hypnosePenduleImg from "@/assets/hypnose-pendule.webp";
import hypnoseRelaxationImg from "@/assets/hypnose-relaxation.webp";
import treeLogo from "@/assets/tree-logo.webp";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const benefits = [
	"Suppression des envies de fumer",
	"Rupture du lien émotionnel à la cigarette",
	"Réduction du stress au sevrage",
	"Renforcement de la motivation profonde",
	"Gestion des situations à risque",
	"Ancrage d'une identité de non-fumeur",
	"Résultats durables dès la 1ère séance",
	"Sans prise de médicaments",
];

const faqs = [
	{
		question: "Combien de séances faut-il pour arrêter de fumer par l'hypnose ?",
		answer: "La plupart des personnes arrêtent de fumer en 1 à 2 séances d'hypnose Ericksonienne. La première séance de 1h30 est généralement suffisante. Une séance de suivi peut être programmée si nécessaire.",
	},
	{
		question: "L'hypnose est-elle vraiment efficace pour arrêter de fumer ?",
		answer: "L'hypnose Ericksonienne agit sur les mécanismes inconscients liés à la dépendance au tabac. Elle modifie le rapport émotionnel à la cigarette et renforce la motivation profonde à arrêter. Les résultats varient selon les personnes, mais l'hypnose reste l'une des méthodes les plus efficaces pour un arrêt durable.",
	},
	{
		question: "Quel est le prix d'une séance hypnose arrêt du tabac à Valbonne ?",
		answer: "Le programme hypnose arrêt du tabac est proposé à 120€ pour la première séance de 1h30. Une éventuelle séance de suivi est facturée 70€.",
	},
	{
		question: "Faut-il être motivé pour que l'hypnose fonctionne ?",
		answer: "Oui, une motivation sincère est le premier ingrédient du succès. L'hypnose amplifie et ancre cette motivation au niveau inconscient — elle ne remplace pas votre volonté, elle la renforce.",
	},
	{
		question: "La séance peut-elle se faire en visio ?",
		answer: "Oui, les séances d'hypnose pour l'arrêt du tabac peuvent se dérouler en visioconférence avec les mêmes résultats qu'en présentiel.",
	},
];

function BreadcrumbsWrapper() {
	return (
		<Suspense fallback={<div className="h-12" />}>
			<Breadcrumbs
				items={[
					{ label: "Hypnose Ericksonienne", href: "/hypnose" },
					{ label: "Arrêt du Tabac", href: "/hypnose-arret-tabac" },
				]}
			/>
		</Suspense>
	);
}

export default function HypnoseArretTabacContent() {
	const { ref: heroRef, isInView: heroInView } = useInView();
	const { ref: contentRef, isInView: contentInView } = useInView();
	const { ref: sessionsRef, isInView: sessionsInView } = useInView();
	const { ref: benefitsRef, isInView: benefitsInView } = useInView();
	const { ref: faqRef, isInView: faqInView } = useInView();
	const { ref: paaRef, isInView: paaInView } = useInView();

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
					<div className="max-w-4xl mx-auto text-center bg-gradient-to-b from-white/70 via-white/50 to-white/0 p-8 rounded-3xl shadow-xl backdrop-blur-sm">
						<div
							className={`inline-flex items-center justify-center gap-4 mb-6 transition-all duration-500 ${
								heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
							}`}
						>
							<Image
								src={treeLogo}
								alt=""
								aria-hidden="true"
								width={80}
								height={80}
								priority
								quality={85}
								className="w-20 h-20 rounded-full shadow-md"
							/>
						</div>

						<h1
							className={`font-script text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 transition-all duration-500 delay-75 ${
								heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
							}`}
						>
							Arrêter de Fumer par l'Hypnose
						</h1>

						<p
							className={`font-body text-xl text-muted-foreground max-w-2xl mx-auto mb-4 transition-all duration-500 delay-100 ${
								heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
							}`}
						>
							Programme personnalisé en 1 à 2 séances à Valbonne Sophia-Antipolis
						</p>

						<p
							className={`font-body text-lg text-muted-foreground/80 max-w-xl mx-auto mb-4 transition-all duration-500 delay-125 ${
								heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
							}`}
						>
							Accessible depuis Antibes, Biot, Mougins et Cannes
						</p>

						<div
							className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-8 transition-all duration-500 delay-150 ${
								heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
							}`}
						>
							<Euro className="w-4 h-4 text-primary" aria-hidden="true" />
							<span className="font-body text-sm font-medium text-primary">
								120€ · Première séance 1h30
							</span>
						</div>

						<div
							className={`transition-all duration-500 delay-200 ${
								heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
							}`}
						>
							<a
								href="https://www.medoucine.com/consultation/valbonne/aurelia-desvaux/1951"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex px-10 py-4 bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground font-body rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-100"
							>
								Prendre rendez-vous
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Featured snippet – position 0 */}
			<div className="bg-background py-8 border-b border-border">
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<div className="max-w-2xl mx-auto text-center">
						<p className="font-body text-lg text-muted-foreground leading-relaxed">
							L'hypnose pour arrêter de fumer permet d'agir sur les automatismes inconscients liés à la cigarette.
							En 1 à 2 séances, il est possible de réduire les envies, gérer les compulsions et faciliter le sevrage tabagique.
						</p>
					</div>
				</div>
			</div>

			{/* Contenu principal */}
			<section ref={contentRef} className="py-12 md:py-20 bg-background">
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<div className="max-w-6xl mx-auto">
						<div
							className={`mb-8 transition-all duration-500 ${
								contentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
							}`}
						>
							<h2 className="font-script text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
								Pourquoi l'hypnose fonctionne pour arrêter de fumer
							</h2>
						</div>

						<div className="w-20 h-px bg-primary mb-8" />

						<div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
							<div
								className={`lg:col-span-3 space-y-6 font-body text-muted-foreground leading-relaxed transition-all duration-500 ${
									contentInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
								}`}
							>
								<p>
									La dépendance au tabac est en grande partie une dépendance psychologique et émotionnelle.
									L'hypnose Ericksonienne agit directement sur ces mécanismes inconscients : elle modifie
									le rapport émotionnel à la cigarette et ancre une nouvelle perception de vous-même
									en tant que non-fumeur.
								</p>

								<p>
									Contrairement aux substituts nicotiniques qui traitent uniquement la dépendance physique,
									l'hypnose s'attaque aux déclencheurs émotionnels : le stress, l'ennui, les habitudes
									sociales, le rituel. C'est pourquoi les résultats sont souvent durables dès la
									première séance.
								</p>

								<p>
									Au cabinet de Valbonne, à deux pas de Sophia-Antipolis et accessible depuis Antibes,
									Biot et Mougins, je vous accompagne dans un espace calme et bienveillant pour
									libérer définitivement ce lien à la cigarette.
								</p>
								<p>
									Hypnothérapeute à Valbonne Sophia-Antipolis spécialisée en arrêt du tabac et gestion des addictions, je
									m'appuie sur une formation certifiée (<Link href="/a-propos" className="text-primary underline underline-offset-2 hover:text-foreground transition-colors">voir mon parcours</Link>) et sur des techniques
									complémentaires comme la <Link href="/pnl" className="text-primary underline underline-offset-2 hover:text-foreground transition-colors">PNL</Link> ou l'<Link href="/eft" className="text-primary underline underline-offset-2 hover:text-foreground transition-colors">EFT</Link> pour renforcer les résultats à long terme.
								</p>
							</div>

							<div
								className={`lg:col-span-2 grid grid-cols-2 gap-4 transition-all duration-500 delay-100 ${
									contentInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
								}`}
							>
								{[
									{ src: hypnoseSeanceImg, alt: "Séance d'hypnose pour arrêt du tabac à Valbonne" },
									{ src: hypnosePenduleImg, alt: "Pendule hypnose Ericksonienne" },
									{ src: hypnoseRelaxationImg, alt: "Relaxation profonde en hypnose" },
								].map((imgObj, idx) => (
									<div
										key={idx}
										className={`overflow-hidden rounded-2xl shadow-card ${idx === 2 ? "col-span-2" : ""}`}
									>
										<div className="relative w-full aspect-[4/3]">
											<Image
												src={imgObj.src}
												alt={imgObj.alt}
												fill
												quality={85}
												className="object-cover object-center rounded-2xl"
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

			{/* Déroulement des séances */}
			<section ref={sessionsRef} className="py-20 bg-soft-pink/20">
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto">
						<h2
							className={`font-script text-4xl md:text-5xl text-foreground mb-4 text-center transition-all duration-500 ${
								sessionsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
							}`}
						>
							Déroulement du programme
						</h2>
						<div
							className={`w-20 h-px bg-primary mx-auto mb-12 transition-all duration-500 delay-75 ${
								sessionsInView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
							}`}
						/>

						<div className="grid md:grid-cols-2 gap-8">
							<div
								className={`bg-background rounded-2xl p-8 shadow-soft transition-all duration-500 delay-100 ${
									sessionsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
								}`}
							>
								<div className="flex items-center gap-3 mb-4">
									<Clock className="w-6 h-6 text-primary" />
									<span className="font-display text-xl text-foreground">
										Séance 1 · 1h30
									</span>
								</div>
								<p className="font-body text-muted-foreground mb-4">
									Bilan approfondi de votre histoire avec le tabac, identification des déclencheurs
									émotionnels, induction hypnotique personnalisée. La majorité des patients arrêtent
									de fumer à l'issue de cette séance.
								</p>
								<p className="font-body text-sm font-medium text-primary">
									120€
								</p>
							</div>

							<div
								className={`bg-background rounded-2xl p-8 shadow-soft transition-all duration-500 delay-150 ${
									sessionsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
								}`}
							>
								<div className="flex items-center gap-3 mb-4">
									<Clock className="w-6 h-6 text-primary" />
									<span className="font-display text-xl text-foreground">
										Séance 2 · 1h (si besoin)
									</span>
								</div>
								<p className="font-body text-muted-foreground mb-4">
									Consolidation des changements, travail sur les situations à risque
									(stress, événements sociaux), ancrage de votre nouvelle identité
									de non-fumeur.
								</p>
								<p className="font-body text-sm font-medium text-primary">
									70€
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Bénéfices */}
			<section ref={benefitsRef} className="py-20 bg-background">
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto">
						<h2 className="font-script text-4xl md:text-5xl text-foreground mb-4 text-center">
							Ce que vous gagnez
						</h2>
						<div className="w-20 h-px bg-primary mb-12 mx-auto" />

						<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
							{benefits.map((benefit, index) => (
								<div
									key={index}
									className={`flex items-start gap-3 p-4 bg-soft-pink/30 rounded-xl transition-all duration-500 hover:-translate-y-1 ${
										benefitsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
									}`}
									style={{ transitionDelay: `${150 + index * 30}ms` }}
								>
									<CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
									<span className="font-body text-sm text-foreground">{benefit}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section ref={faqRef} className="py-20 bg-soft-pink/10">
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto">
						<h2
							className={`font-script text-4xl md:text-5xl text-foreground mb-4 text-center transition-all duration-500 ${
								faqInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
							}`}
						>
							Vos questions
						</h2>
						<div
							className={`w-20 h-px bg-primary mx-auto mb-12 transition-all duration-500 delay-75 ${
								faqInView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
							}`}
						/>

						<Accordion type="single" collapsible className="space-y-4">
							{faqs.map((faq, index) => (
								<AccordionItem
									key={index}
									value={`item-${index}`}
									className="bg-card rounded-lg px-6 border border-border shadow-sm hover:shadow-md transition-shadow"
								>
									<AccordionTrigger className="font-display text-lg text-left hover:text-primary py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className="font-body text-muted-foreground leading-relaxed pb-5">
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</section>

			{/* Zones desservies + CTA */}
			<section className="py-20 bg-primary/10 text-center">
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<h2 className="font-script text-4xl md:text-5xl mb-6">
						Cabinet à Valbonne – Sophia-Antipolis
					</h2>
					<p className="font-body text-muted-foreground mb-2 max-w-xl mx-auto">
						1 Place Joseph Bermond, Bât Ophira 1 – 2e étage, 06560 Valbonne
					</p>
					<p className="font-body text-sm text-muted-foreground mb-8 max-w-xl mx-auto">
						Accessible depuis Antibes (15 min) · Biot (10 min) · Mougins (12 min) · Cannes (25 min)
						<br />
						Séances également disponibles en visioconférence
					</p>

					<p className="font-body text-sm text-muted-foreground mb-8">
						Programme à partir de{" "}
						<span className="font-medium text-foreground">120€</span>
						{" · "}
						<Link href="/tarifs" className="underline underline-offset-2 hover:text-foreground transition-colors duration-200">
							Voir tous les tarifs
						</Link>
					</p>

					<div className="w-32 h-32 relative mx-auto mb-8 rounded-full shadow-card overflow-hidden group">
						<Image
							src={aureliaPortrait}
							alt="Aurélia Desvaux, hypnothérapeute certifiée à Valbonne"
							fill
							quality={90}
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

			{/* PAA – Questions fréquentes H3 pour featured snippets */}
			<section ref={paaRef} className="py-16 bg-background border-t border-border">
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto">
						<h2
							className={`font-script text-3xl md:text-4xl text-foreground mb-4 text-center transition-all duration-500 ${
								paaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
							}`}
						>
							Questions fréquentes sur l'hypnose pour arrêter de fumer
						</h2>
						<div
							className={`w-20 h-px bg-primary mx-auto mb-10 transition-all duration-500 delay-75 ${
								paaInView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
							}`}
						/>
						<div
							className={`space-y-8 transition-all duration-500 delay-100 ${
								paaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
							}`}
						>
							{[
								{
									q: "Comment l'hypnose aide-t-elle à arrêter de fumer ?",
									a: "L'hypnose Ericksonienne agit sur les automatismes inconscients liés à la cigarette et modifie les comportements associés au tabac : stress, ennui, habitudes sociales. Elle travaille sur les déclencheurs émotionnels là où les substituts nicotiniques ne peuvent pas agir.",
								},
								{
									q: "Combien de séances sont nécessaires pour arrêter de fumer ?",
									a: "En 1 à 2 séances d'hypnose, il est possible d'amorcer un sevrage tabagique durable. La première séance de 1h30 suffit souvent. Une seconde séance de consolidation peut être proposée selon le profil.",
								},
								{
									q: "Est-ce efficace pour tout le monde ?",
									a: "L'efficacité dépend de la réceptivité et de l'implication de la personne dans le processus. Une motivation sincère est le premier facteur de réussite. L'hypnose amplifie et ancre cette motivation au niveau inconscient.",
								},
								{
									q: "L'hypnose aide-t-elle à gérer le stress du sevrage tabagique ?",
									a: "Oui. L'hypnose agit directement sur le stress, les compulsions et les déclencheurs émotionnels liés au tabac. Elle peut aussi être complétée par des techniques d'EFT pour renforcer la gestion des envies.",
								},
								{
									q: "Où se déroule la séance d'hypnose arrêt du tabac ?",
									a: "Les séances ont lieu au cabinet de Valbonne Sophia-Antipolis (1 Place Joseph Bermond, Bât Ophira 1), accessible depuis Antibes, Biot, Mougins et Cannes. Les séances en visioconférence sont également disponibles.",
								},
							].map((item, i) => (
								<div key={i}>
									<h3 className="font-display text-lg text-foreground font-medium mb-2">{item.q}</h3>
									<p className="font-body text-muted-foreground leading-relaxed">{item.a}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Maillage interne */}
			<section className="py-12 bg-background border-t border-border">
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<div className="max-w-2xl mx-auto text-center">
						<p className="font-body text-sm text-muted-foreground mb-6">
							Découvrez aussi les autres accompagnements proposés au cabinet
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<Link
								href="/hypnose"
								className="font-body text-sm text-primary underline underline-offset-2 hover:text-foreground transition-colors"
							>
								Hypnose Ericksonienne
							</Link>
							<Link
								href="/a-propos"
								className="font-body text-sm text-primary underline underline-offset-2 hover:text-foreground transition-colors"
							>
								À propos
							</Link>
							<Link
								href="/pnl"
								className="font-body text-sm text-primary underline underline-offset-2 hover:text-foreground transition-colors"
							>
								PNL
							</Link>
							<Link
								href="/eft"
								className="font-body text-sm text-primary underline underline-offset-2 hover:text-foreground transition-colors"
							>
								EFT
							</Link>
							<Link
								href="/preparation-mentale"
								className="font-body text-sm text-primary underline underline-offset-2 hover:text-foreground transition-colors"
							>
								Préparation Mentale
							</Link>
							<Link
								href="/tarifs"
								className="font-body text-sm text-primary underline underline-offset-2 hover:text-foreground transition-colors"
							>
								Tarifs
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
