"use client";

import { useEffect } from "react";
import { useReportWebVitals } from "next/web-vitals";

/**
 * Composant pour tracker les Core Web Vitals et les envoyer à Google Analytics
 *
 * Métriques trackées :
 * - CLS (Cumulative Layout Shift) - Stabilité visuelle
 * - FID (First Input Delay) - Interactivité
 * - FCP (First Contentful Paint) - Temps de premier contenu
 * - LCP (Largest Contentful Paint) - Temps de chargement principal
 * - TTFB (Time to First Byte) - Temps de réponse serveur
 * - INP (Interaction to Next Paint) - Réactivité (remplace FID)
 */
export function WebVitals() {
	useReportWebVitals((metric) => {
		// Vérifier que gtag est disponible (Google Analytics chargé)
		if (typeof window !== "undefined" && window.gtag) {
			// Envoyer l'événement à Google Analytics 4
			window.gtag("event", metric.name, {
				value: Math.round(
					metric.name === "CLS" ? metric.value * 1000 : metric.value
				),
				event_category: "Web Vitals",
				event_label: metric.id,
				non_interaction: true,
			});

			// Log en dev pour debug
			if (process.env.NODE_ENV === "development") {
				console.log(`[Web Vitals] ${metric.name}:`, {
					value: metric.value,
					rating: metric.rating,
					id: metric.id,
				});
			}
		}
	});

	// Hook pour détecter les changements de route et mesurer le temps de navigation
	useEffect(() => {
		if (typeof window !== "undefined" && "performance" in window) {
			// Mesurer le temps de navigation initial
			const navigationTiming =
				performance.getEntriesByType("navigation")[0];
			if (navigationTiming && window.gtag) {
				const loadTime = navigationTiming.duration;
				window.gtag("event", "page_load_time", {
					value: Math.round(loadTime),
					event_category: "Performance",
					non_interaction: true,
				});
			}
		}
	}, []);

	return null; // Composant invisible (analytics only)
}

// Augmenter le type Window pour TypeScript
declare global {
	interface Window {
		gtag?: (
			command: string,
			eventName: string,
			params?: Record<string, unknown>
		) => void;
	}
}
