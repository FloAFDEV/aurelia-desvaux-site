// hooks/useScrollPosition.ts - Centralisé & optimisé
"use client";

import { useState, useEffect } from "react";

/**
 * Hook centralisé pour la position de scroll
 * Utilise requestAnimationFrame pour optimiser les performances
 * Un seul listener scroll pour toute l'app
 */
export const useScrollPosition = () => {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		let ticking = false;

		const update = () => {
			setScrollY(window.scrollY);
			ticking = false;
		};

		const requestTick = () => {
			if (!ticking) {
				requestAnimationFrame(update);
				ticking = true;
			}
		};

		window.addEventListener("scroll", requestTick, { passive: true });
		requestTick(); // Init value

		return () => window.removeEventListener("scroll", requestTick);
	}, []);

	return scrollY;
};
