"use client";

import Link from "next/link";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";

import hypnoseImg from "@/assets/escalier-spirale.webp";
import pnlImg from "@/assets/pnl-cerveau.webp";
import eftImg from "@/assets/eft-tapping-mains.webp";
import prepaMentaleImg from "@/assets/prepa-mentale.webp";
import dreamMachineImg from "@/assets/dream-machine.webp";

const therapiesBrèves = [
	{
		image: hypnoseImg,
		title: "Hypnose Ericksonienne",
		description:
			"L'hypnose Ericksonienne permet d'aller chercher des ressources inconscientes aidantes, permettant une réorganisation des perceptions.",
		link: "/hypnose" as const,
	},
	{
		image: pnlImg,
		title: "Programmation Neuro-Linguistique",
		description:
			"La PNL permet d'accéder à une autre perception d'une situation, parfois de façon conversationnelle, d'autres fois par des protocoles dynamiques, en accédant à nos ressources internes.",
		link: "/pnl" as const,
	},
	{
		image: eftImg,
		title: "Emotional Freedom Techniques",
		description:
			"L'EFT permet, par la stimulation de points énergétiques situés sur les méridiens associée à une verbalisation de nos émotions, à se libérer des émotions coincées en nous.",
		link: "/eft" as const,
	},
];

const accompagnements = [
	{
		image: prepaMentaleImg,
		title: "Préparation mentale",
		description:
			"Mobilisez vos ressources internes pour aborder compétitions, examens et défis professionnels avec calme, clarté et confiance durable.",
		link: "/preparation-mentale" as const,
	},
	{
		image: dreamMachineImg,
		title: "Dream Machine",
		description:
			"Explorez des états modifiés de conscience et atteignez une relaxation profonde grâce à cette technologie de stimulation lumineuse.",
		link: "/dream-machine" as const,
	},
];

export const Practices = () => {
	const { ref: refTherapies, isInView: therapiesInView } = useInView();
	const { ref: refAccomp, isInView: accompInView } = useInView();

	return (
		<>
			{/* ================== THÉRAPIES BRÈVES ================== */}
			<section
				id="pratiques"
				className="py-24 bg-soft-pink/30 relative overflow-hidden"
			>
				<div
					ref={refTherapies}
					className="container mx-auto px-4 md:px-6 lg:px-8"
				>
					<div className="text-center mb-16">
						<span
							className={`font-body text-sm text-muted-foreground tracking-widest uppercase inline-block mb-6 transition-all duration-600 ${
								therapiesInView
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-6"
							}`}
						>
							Expertise et compétences
						</span>

						<h2
							className={`font-script text-4xl md:text-5xl mb-4 transition-all duration-600 ${
								therapiesInView
									? "opacity-100 translate-y-0 scale-100"
									: "opacity-0 translate-y-6 scale-95"
							}`}
							style={{ transitionDelay: "150ms" }}
						>
							Thérapies Brèves
						</h2>

						<div
							className={`w-24 h-px bg-primary mx-auto mb-8 transition-all duration-700 ${
								therapiesInView
									? "opacity-100 scale-x-100"
									: "opacity-0 scale-x-0"
							}`}
							style={{ transitionDelay: "300ms" }}
						/>

						<p
							className={`font-body text-muted-foreground max-w-2xl mx-auto transition-all duration-600 ${
								therapiesInView
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-6"
							}`}
							style={{ transitionDelay: "400ms" }}
						>
							Quel que soit votre besoin, je me tiens à votre
							disposition pour effectuer ce chemin à vos côtés, en
							vous apportant mon expertise et ma bienveillance.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
						{therapiesBrèves.map((practice, index) => (
							<div
								key={practice.title}
								className={`group bg-background rounded-2xl overflow-hidden shadow-card transition-all duration-700 hover:shadow-soft hover:-translate-y-2 ${
									therapiesInView
										? "opacity-100 translate-y-0 scale-100"
										: "opacity-0 translate-y-8 scale-95"
								}`}
								style={{
									transitionDelay: `${500 + index * 150}ms`,
								}}
							>
								<div className="relative h-48 md:h-56 overflow-hidden rounded-2xl">
									<Image
										src={practice.image}
										alt={practice.title}
										fill
										sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
										className="object-cover transition-transform duration-400 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
								</div>

								<div className="p-6 md:p-8">
									<h3 className="font-display text-xl md:text-2xl mb-3">
										{practice.title}
									</h3>
									<div className="w-12 h-px bg-primary/50 mb-4" />
									<p className="font-body text-muted-foreground mb-6">
										{practice.description}
									</p>
									<Link
										href={practice.link}
										className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-all group-hover:gap-3"
									>
										En savoir plus <span>→</span>
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ================== ACCOMPAGNEMENTS ================== */}
			<section className="py-24 bg-background relative overflow-hidden">
				<div
					ref={refAccomp}
					className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8"
				>
					<div className="text-center mb-16">
						<span
							className={`font-body text-sm text-muted-foreground tracking-widest uppercase mb-6 inline-block transition-all ${
								accompInView
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-6"
							}`}
						>
							Aller plus loin
						</span>

						<h2
							className={`font-script text-4xl md:text-5xl mb-4 transition-all ${
								accompInView
									? "opacity-100 translate-y-0 scale-100"
									: "opacity-0 translate-y-6 scale-95"
							}`}
							style={{ transitionDelay: "150ms" }}
						>
							Accompagnements Spécialisés
						</h2>

						<div
							className={`w-24 h-px bg-primary mx-auto mb-8 transition-all ${
								accompInView
									? "opacity-100 scale-x-100"
									: "opacity-0 scale-x-0"
							}`}
							style={{ transitionDelay: "300ms" }}
						/>

						<p
							className={`font-body text-muted-foreground max-w-2xl mx-auto transition-all ${
								accompInView
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-6"
							}`}
							style={{ transitionDelay: "400ms" }}
						>
							Des approches complémentaires pour répondre à vos
							besoins spécifiques et explorer de nouvelles
							dimensions.
						</p>
					</div>

					<div className="flex flex-col md:flex-row gap-6 justify-center">
						{accompagnements.map((practice, index) => (
							<div
								key={practice.title}
								className={`group bg-soft-pink/20 border border-primary/10 rounded-2xl overflow-hidden shadow-card transition-all duration-700 hover:shadow-soft hover:-translate-y-2 max-w-md w-full ${
									accompInView
										? "opacity-100 translate-y-0 scale-100"
										: "opacity-0 translate-y-8 scale-95"
								}`}
								style={{
									transitionDelay: `${500 + index * 150}ms`,
								}}
							>
								{/* Wrapper de l'image avec overflow-hidden pour confiner le scale */}
								<div className="relative h-48 md:h-64 overflow-hidden rounded-t-2xl">
									<Image
										src={practice.image}
										alt={practice.title}
										fill
										sizes="(max-width: 768px) 100vw, 50vw"
										className="object-cover transition-transform duration-400 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
								</div>

								<div className="p-6 md:p-8 flex flex-col flex-1">
									<h3 className="font-display text-xl md:text-2xl mb-3">
										{practice.title}
									</h3>
									<div className="w-12 h-px bg-primary/50 mb-4" />
									<p className="font-body text-muted-foreground flex-1 mb-6">
										{practice.description}
									</p>
									<Link
										href={practice.link}
										className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-all group-hover:gap-3"
									>
										En savoir plus <span>→</span>
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};
