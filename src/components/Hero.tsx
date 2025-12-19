"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import aureliaPortrait from "@/assets/aurelia-portrait-nature.webp";
import treeLogo from "@/assets/tree-logo.webp";
import { Calendar, MapPin, Award } from "lucide-react";
import { MedoucineBadge } from "@/components/MedoucineBadge";
import { trackBookingClick } from "@/hooks/useGoogleAnalytics";

export const Hero = () => {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section
			id="accueil"
			className="relative flex items-center pt-16 min-h-screen pb-32 gradient-hero overflow-visible"
		>
			{/* Blobs décoratifs */}
			<div className="absolute inset-0 -z-10 pointer-events-none">
				<div
					className="hidden sm:block absolute top-20 left-10 w-40 h-40 bg-blush/40 rounded-full blur-3xl transition-transform duration-300 ease-out"
					style={{ transform: `translateY(${scrollY * 0.1}px)` }}
				/>
				<div
					className="absolute bottom-40 right-20 w-40 h-40 sm:w-56 sm:h-56 bg-soft-pink/50 rounded-full blur-3xl transition-transform duration-300 ease-out"
					style={{ transform: `translateY(${scrollY * -0.15}px)` }}
				/>
				<div
					className="hidden md:block absolute top-1/3 right-1/4 w-32 h-32 bg-rose-gold/30 rounded-full blur-2xl transition-transform duration-300 ease-out"
					style={{ transform: `translateY(${scrollY * 0.08}px)` }}
				/>
				<div
					className="hidden sm:block absolute bottom-1/4 left-1/4 w-28 h-28 bg-primary/20 rounded-full blur-2xl transition-transform duration-300 ease-out"
					style={{ transform: `translateY(${scrollY * -0.12}px)` }}
				/>
			</div>

			<div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 lg:py-20">
				<div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
					{/* Texte */}
					<div className="relative z-10 order-2 lg:order-1 text-center lg:text-left lg:pl-8 xl:pl-12 overflow-visible">
						<h1 className="relative z-50 font-script antialiased text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground mb-4 animate-fade-in-up opacity-0 tracking-tight leading-[1.6] lg:leading-[1.5] xl:leading-[1.5] py-6 break-words max-w-full">
							Aurélia Desvaux
						</h1>

						<div className="flex items-center gap-4 justify-center lg:justify-start mb-2 animate-fade-in-up opacity-0 delay-200">
							<div className="hidden lg:block w-12 h-px bg-primary-light/60" />
							<p className="font-display text-2xl md:text-3xl lg:text-4xl text-muted-foreground break-words max-w-full">
								Thérapies Brèves
							</p>
							<div className="hidden lg:block w-12 h-px bg-primary-light/60" />
						</div>

						<div className="inline-flex items-center gap-2 justify-center lg:justify-start mb-3 animate-fade-in-up opacity-0 delay-250 px-3 py-1.5 rounded-full bg-background/30 backdrop-blur-sm transition-all duration-300 hover:bg-background/50 hover:scale-105 hover:shadow-soft cursor-default group">
							<MapPin className="w-4 h-4 text-primary transition-transform duration-300 group-hover:scale-110" />
							<p className="font-body text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
								Valbonne • Sophia-Antipolis
							</p>
						</div>

						<p className="font-body text-lg md:text-xl text-primary font-medium mb-6 animate-fade-in-up opacity-0 delay-300 tracking-wide break-words max-w-full">
							PNL – Hypnose – EFT
						</p>

						<div className="max-w-lg lg:max-w-full mx-auto lg:mx-0 mb-4 animate-fade-in-up opacity-0 delay-400">
							<p className="font-body text-foreground bg-background/40 backdrop-blur-sm px-4 py-3 rounded-lg leading-relaxed break-words">
								Libérez-vous de ce qui vous pèse et atteignez
								vos objectifs sereinement et rapidement grâce
								aux Thérapies Brèves
							</p>
						</div>

						<div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
							<div className="inline-flex items-center gap-2 animate-fade-in-up opacity-0 delay-450 px-3 py-1.5 rounded-full bg-primary-light/10 backdrop-blur-sm transition-all duration-300 hover:bg-primary-light/20 hover:scale-105 hover:shadow-soft cursor-default group">
								<Award className="w-4 h-4 text-primary transition-all duration-300 group-hover:scale-110" />
								<p className="font-body text-sm text-primary font-medium">
									Praticienne certifiée
								</p>
							</div>

							<div className="animate-fade-in-up opacity-0 delay-500">
								<MedoucineBadge variant="compact" />
							</div>
						</div>

						<div className="animate-fade-in-up opacity-0 delay-550">
							<a
								href="https://www.medoucine.com/consultation/valbonne/aurelia-desvaux/1951"
								target="_blank"
								rel="noopener noreferrer"
								onClick={() => trackBookingClick("hero")}
								className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground font-body text-lg font-medium rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-1"
							>
								<Calendar className="w-5 h-5" />
								Prise de rendez-vous
								<svg
									className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</a>
						</div>
					</div>

					{/* Portrait + Logo flottant */}
					<div className="order-1 lg:order-2 flex justify-center">
						<div className="relative animate-scale-in opacity-0 group w-[22rem] h-[22rem] md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem]">
							{/* Cercles décoratifs */}
							<div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary-light/30 rounded-full transform rotate-12 transition-transform duration-700 group-hover:rotate-6" />
							<div className="absolute -bottom-4 -left-4 w-full h-full border border-blush/40 rounded-full transform -rotate-6 transition-transform duration-700 group-hover:-rotate-3" />

							{/* Portrait principal */}
							<div className="relative w-full h-full rounded-full overflow-hidden shadow-card transition-all duration-500 group-hover:shadow-glow">
								<Image
									src={aureliaPortrait}
									alt="Portrait d'Aurélia Desvaux"
									fill
									priority
									className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
								/>
							</div>

							{/* Logo flottant */}
							<div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-20 md:h-20">
								<div className="relative w-full h-full rounded-full overflow-hidden bg-background shadow-soft flex items-center justify-center animate-float transition-shadow duration-300 hover:shadow-glow">
									<Image
										src={treeLogo}
										alt=""
										aria-hidden="true"
										fill
										priority
										className="object-cover transition-transform duration-300 hover:scale-110"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Scroll indicator */}
			<div
				className="hidden sm:flex absolute bottom-24 md:bottom-20 lg:bottom-12 right-8 md:right-12 lg:left-1/2 lg:-translate-x-1/2 lg:right-auto cursor-pointer group flex-col items-center gap-2 transition-transform duration-300"
				onClick={() => {
					const element = document.getElementById("therapies");
					if (element) {
						const headerOffset = 50;
						const elementPosition =
							element.getBoundingClientRect().top;
						const offsetPosition =
							elementPosition + window.scrollY - headerOffset;

						window.scrollTo({
							top: offsetPosition,
							behavior: "smooth",
						});
					}
				}}
			>
				<div className="w-7 h-11 border-2 border-rose-gold rounded-full flex justify-center pt-2 transition-all duration-300 hover:shadow-soft group-hover:scale-110">
					<div className="w-2 h-2 rounded-full bg-rose-gold animate-scroll-guide shadow-sm group-hover:bg-primary transition-colors duration-300" />
				</div>
			</div>
		</section>
	);
};
