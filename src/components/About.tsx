"use client";

import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import Image, { StaticImageData } from "next/image";
import { DecorativeBlob } from "@/components/ui/DecorativeBlob";
import aureliaPortrait from "@/assets/aurelia-portrait-cabinet.webp";

const VALUE_BADGES = [
	{
		label: "Bienveillance",
		colorClass: "bg-primary",
		hoverClass: "group-hover:text-primary",
	},
	{
		label: "Sans jugement",
		colorClass: "bg-accent",
		hoverClass: "group-hover:text-accent",
	},
	{
		label: "Résultats concrets",
		colorClass: "bg-rose-gold",
		hoverClass: "group-hover:text-rose-gold",
	},
] as const;

export const About = () => {
	const { ref, isInView } = useInView();

	return (
		<section
			id="apropos"
			className="py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden"
			aria-labelledby="about-title"
		>
			{/* Decorative backgrounds */}
			<DecorativeBlob className="top-20 right-0 w-48 md:w-64 h-48 md:h-64 bg-blush/20" />
			<DecorativeBlob className="bottom-20 left-0 w-36 md:w-48 h-36 md:h-48 bg-soft-pink/30" />

			<div className="container mx-auto px-4 md:px-6 lg:px-8" ref={ref}>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
					{/* Image */}
					<figure
						className={`relative transition-all duration-700 ease-out ${
							isInView
								? "opacity-100 translate-y-0 scale-100"
								: "opacity-0 translate-y-8 scale-95"
						}`}
					>
						<div className="relative max-w-sm md:max-w-md mx-auto">
							<Image
								src={aureliaPortrait as StaticImageData}
								alt="Aurélia Desvaux souriante dans son cabinet de thérapies brèves à Valbonne"
								className="w-full h-auto object-cover rounded-lg shadow-card"
								priority
								quality={85}
								sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 445px"
							/>
						</div>
					</figure>

					{/* Content */}
					<div
						className={`transition-all duration-700 ease-out ${
							isInView
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}
						style={{ transitionDelay: isInView ? "200ms" : "0ms" }}
					>
						<h2
							id="about-title"
							className="font-script text-3xl sm:text-4xl lg:text-5xl text-foreground mb-3 md:mb-4"
						>
							Qui suis-je ?
						</h2>

						<div
							className="w-20 md:w-24 h-px bg-primary mb-6 md:mb-8 transition-transform duration-500 origin-left"
							style={{
								transform: isInView ? "scaleX(1)" : "scaleX(0)",
							}}
							aria-hidden="true"
						/>

						<h3 className="font-display text-xl sm:text-2xl text-primary mb-4 md:mb-6">
							Aurélia Desvaux
						</h3>

						<p className="font-body text-muted-foreground leading-relaxed mb-4 md:mb-6 text-sm sm:text-base">
							Pendant près de 15 ans en entreprise, j'ai moi aussi tout donné — jusqu'à l'épuisement, jusqu'à deux burn-outs. J'ai connu ce que c'est de s'oublier pour être à la hauteur, de chercher dans le regard des autres une validation qu'on n'arrivait pas à se donner soi-même.
						</p>

						<p className="font-body text-muted-foreground leading-relaxed mb-4 md:mb-6 text-sm sm:text-base">
							C'est cette expérience, autant que mes formations, qui m'a amenée à ce métier.
						</p>

						<p className="font-body text-muted-foreground leading-relaxed mb-6 md:mb-8 text-sm sm:text-base">
							Ce qui me touche profondément dans ce travail : voir quelqu'un repartir avec l'œil qui pétille, se tenir un peu plus droite, avoir osé poser une limite — et réaliser que le monde ne s'est pas effondré pour autant. Je crois que chacun fait du mieux qu'il peut avec ce qu'il a. Mon rôle n'est pas de juger d'où vous venez — c'est de vous accompagner, à votre rythme, vers qui vous avez envie d'être. Mon cabinet est à Valbonne, à quelques minutes d'Antibes, Sophia-Antipolis, Biot et Mougins.
						</p>

						<p className="font-body text-sm text-muted-foreground mb-5 md:mb-6">
							<Link
								href="/a-propos"
								className="text-primary underline underline-offset-2 hover:text-foreground transition-colors duration-200"
							>
								Découvrir le parcours d'Aurélia Desvaux
							</Link>
							{" "}— formations, certifications et approche thérapeutique.
						</p>

						<ul
							className="flex flex-wrap gap-3 sm:gap-4"
							aria-label="Valeurs"
						>
							{VALUE_BADGES.map(
								({ label, colorClass, hoverClass }) => (
									<li
										key={label}
										className="flex items-center gap-2 sm:gap-3 group cursor-default"
									>
										<span
											className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${colorClass} transition-transform duration-300 group-hover:scale-125`}
											aria-hidden="true"
										/>
										<span
											className={`font-body text-sm sm:text-base text-foreground transition-colors duration-300 ${hoverClass}`}
										>
											{label}
										</span>
									</li>
								)
							)}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};
