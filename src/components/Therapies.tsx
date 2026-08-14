"use client";

import { useInView } from "@/hooks/useInView";
import { LazyImage } from "@/components/LazyImage";
import Image from "next/image";
import Link from "next/link";
import cabinetImg from "@/assets/cabinet.webp";
import eftSessionImg from "@/assets/eft-session.webp";
import aureliaPortrait2 from "@/assets/aurelia-portrait-2.webp";
import treeLogo from "@/assets/tree-logo.webp";
import logoGrandArbre from "@/assets/logo-grand-arbre.webp";

export const Therapies = () => {
	const { ref, isInView } = useInView();

	return (
		<section
			id="therapies"
			className="py-24 bg-background relative overflow-hidden scroll-mt-16 md:scroll-mt-20 lg:scroll-mt-24"
		>
			{/* Decorative line top */}
			<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

			<div className="container mx-auto px-4 md:px-6 lg:px-8" ref={ref}>
				{/* Header */}
				<div className="text-center mb-16">
					<h2
						className={`font-script text-4xl md:text-5xl text-foreground mb-4 transition-all duration-400 ${
							isInView
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-3"
						}`}
					>
						Thérapies Brèves
					</h2>

					<Image
						src={logoGrandArbre}
						alt="Arbre de vie - Logo Aurélia Desvaux"
						width={400}
						height={400}
						className={`mx-auto my-6 w-full max-w-xs md:max-w-sm h-auto transition-all duration-500 delay-75 ${
							isInView
								? "opacity-100 scale-100"
								: "opacity-0 scale-95"
						}`}
					/>

					<p
						className={`font-body text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-400 delay-100 ${
							isInView
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-3"
						}`}
					>
						Vous portez beaucoup. Peut-être depuis longtemps. Et si vous n'aviez plus à porter ça seule ?
					</p>
				</div>

				{/* Grid: images + content */}
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					{/* Images */}
					<div
						className={`relative transition-all duration-400 delay-100 ${
							isInView
								? "opacity-100 translate-x-0"
								: "opacity-0 -translate-x-4"
						}`}
					>
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-4">
								<LazyImage
									src={eftSessionImg}
									alt="Séance EFT avec Aurélia Desvaux"
									className="w-full h-full object-cover"
									wrapperClassName="rounded-2xl shadow-card h-48"
								/>
								<LazyImage
									src={cabinetImg}
									alt="Cabinet de thérapie à Valbonne"
									className="w-full h-full object-cover"
									wrapperClassName="rounded-2xl shadow-card h-32"
								/>
							</div>
							<div className="pt-8">
								<div className="relative h-full">
									<LazyImage
										src={aureliaPortrait2}
										alt="Aurélia Desvaux - Thérapeute"
										className="w-full h-full object-cover"
										wrapperClassName="rounded-2xl shadow-card h-64"
									/>
									<div className="absolute -bottom-4 -right-4 w-20 h-20 bg-soft-pink rounded-full flex items-center justify-center shadow-soft overflow-hidden">
										<Image
											src={treeLogo}
											alt=""
											aria-hidden="true"
											width={56}
											height={56}
											className="w-14 h-14 rounded-full"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Content */}
					<div
						className={`relative z-10 space-y-6 transition-all duration-400 delay-150 ${
							isInView
								? "opacity-100 translate-x-0"
								: "opacity-0 translate-x-4"
						}`}
					>
						{/* Background blur overlay */}
						<div className="absolute -inset-4 md:-inset-6 bg-background/80 backdrop-blur-sm rounded-2xl -z-10" />

						<h3 className="font-display text-3xl text-foreground">
							Avancer, plutôt que ressasser.
						</h3>

						<p className="font-body text-muted-foreground leading-relaxed">
							Les thérapies brèves — Hypnose Ericksonienne, PNL, EFT — ne cherchent pas à analyser indéfiniment pourquoi vous en êtes arrivée là. Elles cherchent comment vous accompagner vers là où vous voulez aller.
						</p>

						<p className="font-body text-muted-foreground leading-relaxed">
							Ensemble, nous travaillons sur vos mécanismes inconscients — ces schémas qui tournent en boucle et qui vous épuisent — pour les transformer en douceur, mais durablement.
						</p>

						<p className="font-body text-muted-foreground leading-relaxed">
							En moyenne, entre 3 et 5 séances suffisent, espacées d'environ 3 semaines. Pas de miracle — mais des changements réels, souvent plus rapidement que vous ne l'imaginez.
						</p>

						{/* Tags */}
						<div className="flex flex-wrap gap-3 pt-4">
							{([
								{ label: "Stress & anxiété", href: "/stress-anxiete" },
								{ label: "Confiance en soi", href: "/confiance-en-soi" },
								{ label: "Arrêt du tabac", href: "/arret-tabac" },
								{ label: "Histoire de vie", href: null },
								{ label: "Estime de soi", href: null },
								{ label: "Épuisement", href: null },
								{ label: "Préparation mentale", href: "/preparation-mentale" },
								{ label: "Phobies", href: null },
							] as const).map((tag) => (
								tag.href ? (
									<Link
										key={tag.label}
										href={tag.href}
										className="px-4 py-2 bg-soft-pink text-foreground font-body text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
									>
										{tag.label}
									</Link>
								) : (
									<span
										key={tag.label}
										className="px-4 py-2 bg-soft-pink text-foreground font-body text-sm rounded-full"
									>
										{tag.label}
									</span>
								)
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
