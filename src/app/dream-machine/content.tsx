"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useInView } from "@/hooks/useInView";
import {
	Brain,
	Eye,
	Heart,
	Zap,
	Clock,
	Euro,
	AlertTriangle,
	Target,
	Lightbulb,
	Shield,
} from "lucide-react";
import treeLogo from "@/assets/tree-logo.webp";
import dreamMachineImg from "@/assets/dream-machine.webp";

const benefits = [
	{
		icon: Brain,
		title: "États modifiés de conscience",
		description:
			"Accédez à des états méditatifs profonds naturellement, sans substance, grâce à la stimulation lumineuse.",
	},
	{
		icon: Heart,
		title: "Relaxation profonde",
		description:
			"Libérez le stress et les tensions accumulées dans un état de détente absolue.",
	},
	{
		icon: Eye,
		title: "Visions hypnotiques",
		description:
			"Vivez une expérience visuelle unique avec des motifs kaléidoscopiques fascinants.",
	},
	{
		icon: Zap,
		title: "Créativité amplifiée",
		description:
			"Stimulez votre créativité et accédez à de nouvelles perspectives.",
	},
];

const efficacyPoints = [
	{
		icon: Lightbulb,
		title: "Stimulation de la créativité",
		description:
			"Améliore la fluence verbale et la capacité à produire rapidement des idées nouvelles.",
	},
	{
		icon: Heart,
		title: "Gestion du stress",
		description:
			"Alternative non invasive pour atteindre un état de tranquillité et de confort profond.",
	},
	{
		icon: Shield,
		title: "Soulagement de la douleur",
		description:
			"Aide à réduire les tensions physiques et à améliorer le bien-être général.",
	},
];

const experiences = [
	"Méditation guidée",
	"Relaxation profonde",
	"Voyage intérieur",
	"Stimulation créative",
	"Gestion du stress",
	"Amélioration du sommeil",
];

const contraindications = [
	"Épilepsie ou troubles neurologiques",
	"Troubles psychiatriques",
	"Grossesse (par précaution)",
	"Enfants (risque de troubles non détectés)",
];

export default function DreamMachine() {
	const { ref: benefitsRef, isInView: benefitsInView } = useInView();
	const { ref: efficacyRef, isInView: efficacyInView } = useInView();
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<Breadcrumbs
				items={[{ label: "Dream Machine", href: "/dream-machine" }]}
			/>{" "}
			{/* Hero Section */}
			<section className="py-24 gradient-hero relative overflow-hidden">
				<div
					className="absolute inset-0 opacity-15"
					style={{
						backgroundImage: `url(${dreamMachineImg.src})`,
						backgroundSize: "cover",
						backgroundPosition: "center 30%",
						transform: `translateY(${scrollY * 0.2}px)`,
						transition: "transform 0.1s ease-out",
					}}
				/>
				{/* Decorative circles */}
				<div className="absolute top-20 left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse-soft" />
				<div className="absolute bottom-20 right-20 w-56 h-56 bg-blush/30 rounded-full blur-3xl animate-pulse-soft delay-300" />
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-soft-pink/20 rounded-full blur-3xl animate-float" />

				<div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
					<div className="max-w-3xl mx-auto text-center bg-gradient-to-b from-white/70 via-white/50 to-white/0 p-8 rounded-3xl shadow-xl backdrop-blur-sm">
						<div className="inline-flex items-center gap-3 mb-8 animate-fade-in-up opacity-0">
							<Image
								src={treeLogo}
								alt=""
								aria-hidden="true"
								width={64}
								height={64}
								className="w-16 h-16 rounded-full"
								priority
							/>
						</div>

						<h1 className="font-script text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 animate-fade-in-up opacity-0 delay-100">
							Dream Machine
						</h1>

						<p className="font-display text-2xl text-muted-foreground mb-4 animate-fade-in-up opacity-0 delay-200">
							Voyage intérieur par la lumière
						</p>

						<p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0 delay-300">
							Explorez de nouveaux états de conscience grâce à
							cette technologie innovante de stimulation
							lumineuse. Une expérience unique de méditation
							profonde.
						</p>

						<a
							href="https://www.medoucine.com/consultation/valbonne/aurelia-desvaux/1951"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground font-body rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-100 animate-fade-in-up opacity-0 delay-400"
						>
							Réserver une session
						</a>
					</div>
				</div>
			</section>
			{/* Benefits Section */}
			<section className="py-24 bg-background" ref={benefitsRef}>
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<h2 className="font-script text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
							Qu'est-ce que la Dream Machine ?
						</h2>
						<div className="w-24 h-px bg-primary mx-auto mb-8" />
						<p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
							La Dream Machine génère une séquence de flashs
							lumineux soigneusement programmés en fonction de la
							session sélectionnée. À travers vos paupières
							fermées, ces stimulations lumineuses sont filtrées,
							permettant une activation douce mais rythmique de
							votre rétine.
						</p>
						<p className="font-body text-lg text-muted-foreground leading-relaxed">
							Chaque session comprend des phases où le rythme des
							flashs demeure stable, permettant l'instauration du
							phénomène de{" "}
							<strong className="text-foreground">
								pilotage photique
							</strong>
							. Ce processus guide votre cerveau vers une
							synchronisation harmonieuse avec le rythme lumineux,
							et ainsi, vers des{" "}
							<strong className="text-foreground">
								états de conscience modifiés
							</strong>
							.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{benefits.map((benefit, index) => (
							<div
								key={benefit.title}
								className={`group p-8 bg-card rounded-2xl shadow-soft transition-all duration-500 hover:shadow-glow hover:-translate-y-1 ${
									benefitsInView
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-8"
								}`}
								style={{
									transitionDelay: `${index * 100}ms`,
								}}
							>
								<div className="w-14 h-14 rounded-full bg-soft-pink flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
									<benefit.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
								</div>
								<h3 className="font-display text-2xl text-foreground mb-3">
									{benefit.title}
								</h3>
								<p className="font-body text-muted-foreground">
									{benefit.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* Efficacy Section */}
			<section className="py-24 bg-secondary/30" ref={efficacyRef}>
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<h2 className="font-script text-4xl md:text-5xl text-foreground mb-6">
							Son efficacité
						</h2>
						<div className="w-24 h-px bg-primary mx-auto mb-8" />
						<p className="font-body text-lg text-muted-foreground leading-relaxed">
							La stimulation stroboscopique a montré une
							efficacité remarquable dans l'amélioration de
							diverses facettes de notre vie mentale.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{efficacyPoints.map((point, index) => (
							<div
								key={point.title}
								className={`text-center p-8 bg-background rounded-2xl shadow-soft transition-all duration-500 hover:shadow-glow hover:-translate-y-1 ${
									efficacyInView
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-8"
								}`}
								style={{
									transitionDelay: `${index * 100}ms`,
								}}
							>
								<div className="w-16 h-16 rounded-full bg-soft-pink flex items-center justify-center mx-auto mb-6">
									<point.icon className="w-7 h-7 text-primary" />
								</div>
								<h3 className="font-display text-xl text-foreground mb-3">
									{point.title}
								</h3>
								<p className="font-body text-muted-foreground text-sm">
									{point.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* Objective Section */}
			<section className="py-24 bg-background">
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div>
							<div className="flex items-center gap-3 mb-6">
								<Target className="w-8 h-8 text-primary" />
								<h2 className="font-script text-4xl md:text-5xl text-foreground">
									Objectif principal
								</h2>
							</div>
							<div className="w-24 h-px bg-primary mb-8" />

							<p className="font-body text-muted-foreground leading-relaxed mb-6">
								Bien que la Dream Machine puisse contribuer à
								atténuer le stress et l'anxiété, et améliorer le
								sommeil, elle ne se substitue pas à un
								traitement thérapeutique ou médical.
							</p>
							<p className="font-body text-muted-foreground leading-relaxed mb-8">
								L'objectif principal de la Dream Machine est de{" "}
								<strong className="text-foreground">
									favoriser le bien-être
								</strong>
								, de{" "}
								<strong className="text-foreground">
									promouvoir l'auto-connaissance
								</strong>{" "}
								et d'
								<strong className="text-foreground">
									explorer les différents états de conscience
								</strong>
								.
							</p>

							<div className="flex flex-wrap gap-3">
								{experiences.map((exp) => (
									<span
										key={exp}
										className="px-4 py-2 bg-soft-pink text-foreground font-body text-sm rounded-full transition-colors hover:bg-primary hover:text-primary-foreground"
									>
										{exp}
									</span>
								))}
							</div>
						</div>

						<div className="relative max-w-md mx-auto">
							<div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-blush/30 rounded-full blur-2xl animate-pulse-soft" />
							<Image
								src={dreamMachineImg}
								alt="Dream Machine - Appareil de stimulation lumineuse"
								className="relative rounded-2xl shadow-glow w-full h-auto"
								width={600}
								height={400}
								loading="lazy"
							/>
						</div>
					</div>
				</div>
			</section>
			{/* Contraindications Section */}
			<section className="py-24 bg-secondary/30">
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<div className="flex items-center gap-3 mb-6 justify-center">
							<AlertTriangle className="w-7 h-7 text-primary" />
							<h2 className="font-script text-4xl md:text-5xl text-foreground">
								Contre-indications
							</h2>
						</div>
						<div className="w-24 h-px bg-primary mx-auto mb-8" />
						<p className="font-body text-muted-foreground leading-relaxed mb-10">
							La Dream Machine est accessible à tous, à
							l'exception des personnes concernées par les
							situations suivantes. Si vous avez des doutes,
							n'hésitez pas à consulter un professionnel de santé.
						</p>

						<div className="grid sm:grid-cols-2 gap-4">
							{contraindications.map((item, index) => (
								<div
									key={index}
									className="flex items-center gap-3 p-4 bg-background rounded-xl shadow-soft"
								>
									<div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
									<span className="font-body text-muted-foreground">
										{item}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			{/* Pricing Section */}
			<section className="py-24 bg-background">
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<div className="max-w-2xl mx-auto text-center">
						<h2 className="font-script text-4xl md:text-5xl text-foreground mb-6">
							Tarification
						</h2>
						<div className="w-24 h-px bg-primary mx-auto mb-12" />

						<div className="bg-card rounded-2xl p-10 shadow-soft">
							<div className="flex items-center justify-center gap-2 mb-4">
								<Euro className="w-8 h-8 text-primary" />
								<span className="font-display text-5xl text-foreground">
									30€
								</span>
								<span className="font-body text-muted-foreground">
									+ 1€/min
								</span>
							</div>

							<p className="font-body text-muted-foreground mb-6">
								Sessions allant de 10 à 70 minutes
							</p>

							<div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8">
								<Clock className="w-4 h-4" />
								<span className="font-body">
									Débutants : 1ère session de moins de 20
									minutes recommandée
								</span>
							</div>

							<a
								href="https://www.medoucine.com/consultation/valbonne/aurelia-desvaux/1951"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground font-body rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-100"
							>
								Réserver ma session
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
