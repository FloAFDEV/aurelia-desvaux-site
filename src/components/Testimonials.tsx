"use client";

import { useInView } from "@/hooks/useInView";
import { Star, Quote, ArrowRight } from "lucide-react";
import { MedoucineBadge } from "@/components/MedoucineBadge";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

const testimonials = [
	{
		name: "Fleur B.",
		text: "Aurélia est un véritable rayon de soleil. Sa positivité, sa bienveillance et sa disponibilité en font la personne idéale pour un accompagnement personnel. Je n'imaginerais plus me tourner vers quelqu'un d'autre pour prendre soin de mon bien-être.",
	},
	{
		name: "Sandrine C.",
		text: "Expérience très enrichissante et pleine de bienveillance, dont j'ai ressenti des effets quasi immédiats. Je recommande fortement Aurélia qui est douce et très à l'écoute, une vraie professionnelle de l'hypnose !",
	},
	{
		name: "Clara D.",
		text: "Aurélia est une personne très à l'écoute, attentive et extrêmement douce. Elle met très vite à l'aise. C'était ma première séance avec elle et j'y retournerai sans crainte, sans aucune appréhension et beaucoup plus de sérénité.",
	},
	{
		name: "Tatiana R.",
		text: "Une thérapeute avec une très grande empathie accompagnée de sa voix très douce et pleine de bienveillance. Une grande écoute et un partage respectueux. J'en suis repartie légère et confiante. Merci beaucoup !",
	},
];

export const Testimonials = () => {
	const { ref, isInView } = useInView();
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);

	const plugin = useRef(
		Autoplay({
			delay: 7000,
			stopOnInteraction: false,
			stopOnMouseEnter: true,
		})
	);

	useEffect(() => {
		if (!api) return;

		setCurrent(api.selectedScrollSnap());
		api.on("select", () => setCurrent(api.selectedScrollSnap()));
	}, [api]);

	return (
		<section
			id="temoignages"
			className="py-24 bg-soft-pink/30 relative overflow-hidden"
		>
			{/* Décorations flottantes parallax */}
			<div className="absolute top-20 right-20 w-56 h-56 bg-blush/30 rounded-full blur-3xl pointer-events-none motion-safe:animate-float-slow" />
			<div className="absolute bottom-10 left-20 w-40 h-40 bg-rose-gold/20 rounded-full blur-3xl pointer-events-none motion-safe:animate-float-slow" />

			<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

			<div className="container mx-auto px-4 md:px-6 lg:px-8" ref={ref}>
				{/* Header et badge */}
				<div className="text-center mb-8">
					<span
						className={`inline-block font-body text-sm text-muted-foreground tracking-widest uppercase mb-6 transition-all duration-600 ease-out ${
							isInView
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-6"
						}`}
					>
						Ce qu'ils disent
					</span>

					<h2
						className={`font-script text-4xl md:text-5xl text-foreground mb-4 transition-all duration-600 ease-out ${
							isInView
								? "opacity-100 translate-y-0 scale-100"
								: "opacity-0 translate-y-6 scale-95"
						}`}
						style={{ transitionDelay: isInView ? "150ms" : "0ms" }}
					>
						Témoignages
					</h2>

					<div
						className={`w-24 h-px bg-primary mx-auto mb-8 transition-all duration-700 ease-out ${
							isInView
								? "opacity-100 scale-x-100"
								: "opacity-0 scale-x-0"
						}`}
						style={{ transitionDelay: isInView ? "300ms" : "0ms" }}
					/>

					<div
						className={`flex justify-center transition-all duration-600 ease-out ${
							isInView
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-6"
						}`}
						style={{ transitionDelay: isInView ? "450ms" : "0ms" }}
					>
						<MedoucineBadge variant="full" />
					</div>
				</div>

				{/* Carousel */}
				<div
					className={`max-w-4xl mx-auto transition-all duration-700 ease-out ${
						isInView
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}
					style={{ transitionDelay: isInView ? "600ms" : "0ms" }}
				>
					<Carousel
						setApi={setApi}
						opts={{ align: "start", loop: true }}
						plugins={[plugin.current]}
						className="w-full"
						onMouseEnter={() => plugin.current.stop()}
						onMouseLeave={() => plugin.current.play()}
					>
						<CarouselContent>
							{testimonials.map((testimonial) => (
								<CarouselItem key={testimonial.name}>
									<div className="bg-background rounded-2xl p-8 md:p-10 shadow-card relative">
										<Quote className="absolute top-6 right-6 w-12 h-12 text-blush/50" />

										<div className="flex gap-1 mb-6">
											{[...Array(5)].map((_, i) => (
												<Star
													key={i}
													className="w-5 h-5 fill-primary text-primary"
												/>
											))}
										</div>

										<p className="font-body text-muted-foreground text-sm lg:text-md leading-relaxed mb-8 italic">
											"{testimonial.text}"
										</p>

										<div className="flex items-center gap-3">
											<div className="w-12 h-12 rounded-full bg-soft-pink flex items-center justify-center">
												<span className="font-display text-xl text-primary">
													{testimonial.name.charAt(0)}
												</span>
											</div>
											<span className="font-display text-xl text-foreground">
												{testimonial.name}
											</span>
										</div>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>

						<CarouselPrevious className="left-0 md:-left-12" />
						<CarouselNext className="right-0 md:-right-12" />
					</Carousel>

					{/* Pagination dots avec focus visible */}
					<div className="flex justify-center gap-2 mt-6">
						{testimonials.map((_, index) => (
							<button
								key={index}
								onClick={() => api?.scrollTo(index)}
								className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary ${
									current === index
										? "bg-primary w-8"
										: "bg-primary/30 hover:bg-primary/50"
								}`}
								aria-label={`Aller au témoignage ${index + 1}`}
							/>
						))}
					</div>
				</div>

				{/* CTA après témoignages */}
				<div
					className={`text-center mt-16 transition-all duration-700 ease-out ${
						isInView
							? "opacity-100 translate-y-0 scale-100"
							: "opacity-0 translate-y-8 scale-95"
					}`}
					style={{ transitionDelay: isInView ? "900ms" : "0ms" }}
				>
					<a
						href="https://www.medoucine.com/consultation/valbonne/aurelia-desvaux/1951"
						target="_blank"
						rel="noopener noreferrer"
						className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 rounded-full font-body text-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 focus:outline-none focus:ring-2 focus:ring-primary"
					>
						<span className="relative z-10">
							Prêt(e) à commencer votre parcours ?
						</span>
						<ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
					</a>
				</div>
			</div>
		</section>
	);
};
