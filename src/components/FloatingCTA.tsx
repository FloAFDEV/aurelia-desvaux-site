"use client";

import { useState, useEffect, useCallback } from "react";
import { Calendar } from "lucide-react";
import { trackBookingClick } from "@/hooks/useGoogleAnalytics";

const DISMISS_KEY = "floating_cta_dismissed";

export const FloatingCTA = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [isDismissed, setIsDismissed] = useState(false);

	/* Restore dismissal - Sécurisé avec try/catch */
	useEffect(() => {
		if (typeof window === "undefined") return;

		try {
			const dismissed = localStorage?.getItem(DISMISS_KEY);
			if (dismissed === "true") {
				setIsDismissed(true);
			}
		} catch (e) {
			// localStorage non disponible ou bloqué, on continue sans
			console.warn("localStorage non disponible");
		}
	}, []);

	/* Scroll logic - Optimisé avec requestAnimationFrame */
	const handleScroll = useCallback(() => {
		if (typeof window === "undefined") return;

		const scrollY = window.scrollY;
		const windowHeight = window.innerHeight;
		const documentHeight = document.documentElement.scrollHeight;
		const distanceFromBottom = documentHeight - (scrollY + windowHeight);

		const shouldShow =
			scrollY > 400 && distanceFromBottom > 800 && !isDismissed;

		setIsVisible(shouldShow);
	}, [isDismissed]);

	useEffect(() => {
		let ticking = false;

		const requestTick = () => {
			if (!ticking) {
				requestAnimationFrame(() => {
					handleScroll();
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener("scroll", requestTick, { passive: true });
		requestTick(); // Init

		return () => window.removeEventListener("scroll", requestTick);
	}, [handleScroll]);

	return (
		<div
			className={`
				fixed bottom-6 right-6 z-[9990]
				transition-all duration-150 motion-safe:duration-300 ease-in-out
				${
					isVisible
						? "opacity-100 translate-y-0 scale-100"
						: "opacity-0 translate-y-8 scale-95 pointer-events-none"
				}
			`}
			aria-hidden={!isVisible}
		>
			<div className="relative group">
				{/* CTA principal */}
				<a
					href="https://www.medoucine.com/consultation/valbonne/aurelia-desvaux/1951"
					target="_blank"
					rel="noopener noreferrer"
					onClick={() => trackBookingClick("floating_cta")}
					aria-label="Prendre rendez-vous avec Aurélia Desvaux"
					className="
						relative
						flex items-center gap-3
						px-6 py-4
						bg-primary text-primary-foreground
						font-body font-medium
						rounded-full
						shadow-xl
						transition-all duration-300
						motion-safe:hover:scale-105
						motion-safe:hover:-translate-y-1
						hover:shadow-2xl
						focus-visible:outline-none
						focus-visible:ring-2
						focus-visible:ring-primary
						focus-visible:ring-offset-2
					"
				>
					<Calendar className="w-5 h-5 shrink-0" aria-hidden="true" />
					<span className="hidden sm:inline">Prendre rendez-vous</span>
					<span className="sm:hidden">RDV</span>
				</a>

				{/* Glow décoratif */}
				<div
					aria-hidden="true"
					className="
						absolute inset-0 -z-10
						rounded-full
						bg-primary/20
						blur-xl
						motion-safe:animate-pulse-soft
					"
				/>
			</div>
		</div>
	);
};
