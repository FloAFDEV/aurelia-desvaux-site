// app/therapies/content.tsx (ou section dans app/page.tsx)
"use client";

import { useInView } from "@/hooks/useInView";
import { LazyImage } from "@/components/LazyImage";
import Image from "next/image";
import cabinetImg from "@/assets/cabinet.webp";
import eftSessionImg from "@/assets/eft-session.webp";
import aureliaPortrait2 from "@/assets/aurelia-portrait-2.webp";
import treeLogo from "@/assets/tree-logo.webp";
import logoGrandArbre from "@/assets/logo-grand-arbre.webp";

const tags = [
	"Stress",
	"Anxiété",
	"Traumas",
	"Poids",
	"Tabac",
	"Douleurs",
	"Évolution professionnelle",
	"Préparation aux examens",
];

export default function TherapiesContent() {
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
						Libérez-vous de ce qui vous pèse et atteignez vos
						objectifs sereinement et rapidement.
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
								{/* Card 1 */}
								<div className="rounded-2xl shadow-card h-48 overflow-hidden group">
									<LazyImage
										src={eftSessionImg}
										alt="Séance EFT avec Aurélia Desvaux"
										className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
										wrapperClassName="w-full h-full"
									/>
								</div>
								{/* Card 2 */}
								<div className="rounded-2xl shadow-card h-32 overflow-hidden group">
									<LazyImage
										src={cabinetImg}
										alt="Cabinet de thérapie à Valbonne"
										className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
										wrapperClassName="w-full h-full"
									/>
								</div>
							</div>
							<div className="pt-8">
								<div className="relative h-full">
									{/* Card 3 avec logo */}
									<div className="rounded-2xl shadow-card h-64 overflow-hidden group">
										<LazyImage
											src={aureliaPortrait2}
											alt="Aurélia Desvaux - Thérapeute"
											className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
											wrapperClassName="w-full h-full"
										/>
									</div>
									{/* Logo badge - positionné en dehors pour éviter le décalage */}
									<div className="absolute -bottom-4 -right-4 w-20 h-20 bg-soft-pink rounded-full flex items-center justify-center shadow-soft overflow-hidden transition-transform duration-300 hover:scale-110 z-10">
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
							Hypnose et PNL pour votre bien-être
						</h3>

						<p className="font-body text-muted-foreground leading-relaxed">
							Vous avez peut-être, dans votre histoire de vie, des
							événements qui vous ont impacté(e) et qui vous
							empêchent de vous épanouir pleinement aujourd'hui ?
						</p>

						<p className="font-body text-muted-foreground leading-relaxed">
							Ou alors, vous vous sentez bloqué(e) à un certain
							stade de votre vie, et souhaitez être accompagné(e)
							afin d'atteindre l'objectif que vous vous êtes fixé
							?
						</p>

						<p className="font-body text-muted-foreground leading-relaxed">
							Ou peut-être encore, vous avez simplement envie de
							vous ouvrir au développement personnel et découvrir
							ces pratiques liées aux thérapies brèves que sont
							l'Hypnose Ericksonienne, la PNL, ou l'EFT (Emotional
							Freedom Technique) ?
						</p>

						{/* Tags */}
						<div className="flex flex-wrap gap-3 pt-4">
							{tags.map((tag) => (
								<span
									key={tag}
									className="px-4 py-2 bg-soft-pink text-foreground font-body text-sm rounded-full transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-md"
								>
									{tag}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
