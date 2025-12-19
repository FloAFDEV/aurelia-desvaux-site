"use client";

import { useInView } from "@/hooks/useInView";
import Image, { StaticImageData } from "next/image";
import aureliaPortrait from "@/assets/aurelia-portrait-cabinet.webp";

const VALUE_BADGES = [
	{
		label: "Bienveillance",
		colorClass: "bg-primary",
		hoverClass: "group-hover:text-primary",
	},
	{
		label: "Écoute",
		colorClass: "bg-accent",
		hoverClass: "group-hover:text-accent",
	},
	{
		label: "Expertise",
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
			<div className="absolute top-20 right-0 w-48 md:w-64 h-48 md:h-64 bg-blush/20 rounded-full blur-3xl pointer-events-none" />
			<div className="absolute bottom-20 left-0 w-36 md:w-48 h-36 md:h-48 bg-soft-pink/30 rounded-full blur-3xl pointer-events-none" />

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
							Après plus de 15 ans à travailler en entreprise dans
							la gestion de projets et le management, j'ai décidé
							de changer de cap, et de recentrer mon activité
							professionnelle sur des valeurs qui me font vibrer :
							la bienveillance et l'accompagnement.
						</p>

						<p className="font-body text-muted-foreground leading-relaxed mb-6 md:mb-8 text-sm sm:text-base">
							Quel que soit votre besoin, je me tiens à votre
							disposition pour effectuer ce chemin à vos côtés, en
							vous apportant mon expertise et ma bienveillance.
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
