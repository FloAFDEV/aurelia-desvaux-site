"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useInView } from "@/hooks/useInView";
import {
	Headphones,
	Heart,
	Calendar,
	Gift,
	MapPin,
	Clock,
	Phone,
} from "lucide-react";

import treeLogo from "@/assets/tree-logo.webp";
import liberationNatureImg from "@/assets/liberation-nature.webp";
import atelierSelfLoveImg from "@/assets/atelier-self-love.webp";
import aureliaPresentationImg from "@/assets/aurelia-presentation.webp";

const Content = () => {
	const [scrollY, setScrollY] = useState(0);
	const { ref: audioRef, isInView: audioInView } = useInView();
	const { ref: atelierRef, isInView: atelierInView } = useInView();

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<Breadcrumbs
				items={[
					{ label: "Ressources & Ateliers", href: "/ressources" },
				]}
			/>
			<section className="py-20 gradient-hero relative overflow-hidden">
				<div
					className="absolute inset-0 opacity-15"
					style={{
						backgroundImage: `url(${liberationNatureImg.src})`,
						backgroundSize: "cover",
						backgroundPosition: `center ${30 + scrollY * 0.05}%`,
						transform: `translateY(${scrollY * 0.3}px)`,
					}}
				/>
				<div className="absolute top-20 left-10 w-32 h-32 bg-blush/30 rounded-full blur-3xl animate-pulse-soft" />
				<div className="absolute bottom-20 right-20 w-48 h-48 bg-soft-pink/40 rounded-full blur-3xl animate-pulse-soft delay-300" />

				<div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
					<div className="max-w-3xl mx-auto text-center bg-gradient-to-b from-white/70 via-white/50 to-white/0 p-8 rounded-3xl shadow-xl backdrop-blur-sm">
						<div className="inline-flex items-center gap-3 mb-6 animate-fade-in-up opacity-0">
							<Image
								src={treeLogo}
								alt=""
								aria-hidden="true"
								width={64}
								height={64}
								className="w-16 h-16 rounded-full"
							/>
						</div>
						<h1 className="font-script text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 animate-fade-in-up opacity-0 delay-100">
							Ressources & Ateliers
						</h1>
						<p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up opacity-0 delay-200">
							Des outils et ressources pour accompagner votre
							chemin vers le bien-être
						</p>
					</div>
				</div>
			</section>

			{/* Havening Audio Section */}
			<section className="py-20 bg-background" ref={audioRef}>
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto">
						<div
							className={`bg-card rounded-2xl p-8 md:p-10 shadow-soft border border-border/30 transition-all duration-1000 ${
								audioInView
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-8"
							}`}
						>
							<div className="flex items-center gap-3 mb-6">
								<div className="w-12 h-12 rounded-full bg-soft-pink flex items-center justify-center">
									<Gift className="w-5 h-5 text-primary" />
								</div>
								<span className="px-3 py-1 bg-primary/10 text-primary text-sm font-body rounded-full">
									Offert
								</span>
							</div>

							<h2 className="font-script text-3xl md:text-4xl text-foreground mb-6">
								Session de Havening – Audio offert
							</h2>

							<div className="space-y-3 mb-8">
								<p className="font-body text-muted-foreground">
									Vous vous sentez stressé(e) ?
								</p>
								<p className="font-body text-muted-foreground">
									Vous avez une envie irrésistible de
									grignoter ? de fumer ?
								</p>
								<p className="font-body text-muted-foreground">
									Vous avez une montée d'angoisse ? de colère
									?
								</p>
								<p className="font-body text-primary font-medium mt-4">
									Cette session audio de Havening est pour
									vous !
								</p>
							</div>

							<div className="bg-soft-pink/30 rounded-xl p-5 mb-6">
								<p className="font-body text-foreground mb-2">
									Apprenez en 5 minutes à vous libérer de ce
									besoin grâce à cette session offerte.
								</p>
								<p className="font-body text-muted-foreground text-sm">
									Installez-vous confortablement dans le
									calme, mettez vos écouteurs, et respirez.
								</p>
							</div>

							{/* Audio Player */}
							<div className="bg-background rounded-xl p-5 border border-border">
								<div className="flex items-center gap-4 mb-4">
									<div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
										<Headphones className="w-7 h-7 text-primary-foreground" />
									</div>
									<div className="flex-1">
										<p className="font-display text-foreground">
											Session de Havening
										</p>
										<p className="font-body text-sm text-muted-foreground">
											par Aurélia Desvaux
										</p>
									</div>
								</div>
								<audio
									controls
									className="w-full h-10 rounded-lg"
									preload="metadata"
								>
									<source
										src="/audio/havening-session.mp3"
										type="audio/mpeg"
									/>
									Votre navigateur ne supporte pas l'élément
									audio.
								</audio>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Ateliers Section */}
			<section
				className="py-20 relative overflow-hidden"
				ref={atelierRef}
			>
				<div
					className="absolute inset-0 opacity-40 parallax-element"
					style={{
						backgroundImage: `url(${aureliaPresentationImg.src})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						transform: `translateY(${scrollY * 0.15}px) scale(1.1)`,
					}}
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-soft-pink/60 via-background/40 to-background/80" />

				<div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
					<div className="text-center mb-12">
						<div className="inline-flex items-center gap-2 mb-4">
							<Heart className="w-5 h-5 text-primary" />
							<span className="px-3 py-1 bg-primary/10 text-primary text-sm font-body rounded-full">
								Mes ateliers
							</span>
						</div>
						<h2 className="font-script text-3xl md:text-4xl lg:text-5xl text-foreground">
							Atelier Self-Love
						</h2>
					</div>

					<div
						className={`max-w-5xl mx-auto transition-all duration-1000 ${
							atelierInView
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}
					>
						<div className="grid lg:grid-cols-5 gap-10 items-center">
							<div className="relative group lg:col-span-3">
								<div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-blush/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
								<Image
									src={atelierSelfLoveImg}
									alt="Flyer Atelier Self-Love - Aurélia Desvaux"
									width={600}
									height={400}
									className="relative w-full rounded-2xl shadow-xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
									priority={false}
								/>
							</div>

							<div className="space-y-6 lg:col-span-2">
								<p className="font-body text-lg text-foreground leading-relaxed">
									Rejoignez-moi pour un moment unique de
									reconnexion à soi. Cet atelier vous offre un
									espace bienveillant pour explorer l'amour de
									soi à travers des exercices pratiques et des
									techniques de bien-être.
								</p>

								<div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 space-y-4 border border-border/30">
									<div className="flex items-center gap-3">
										<Calendar className="w-5 h-5 text-primary flex-shrink-0" />
										<span className="font-body text-foreground">
											Prochaine date à venir
										</span>
									</div>
									<div className="flex items-center gap-3">
										<Clock className="w-5 h-5 text-primary flex-shrink-0" />
										<span className="font-body text-foreground">
											Durée : 6h00
										</span>
									</div>
									<div className="flex items-center gap-3">
										<MapPin className="w-5 h-5 text-primary flex-shrink-0" />
										<span className="font-body text-foreground">
											Valbonne, Sophia-Antipolis
										</span>
									</div>
								</div>

								<a
									href="tel:+33695530437"
									className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground rounded-full font-body shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
								>
									<Phone className="w-4 h-4" />
									Me contacter pour s'inscrire
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Content;
