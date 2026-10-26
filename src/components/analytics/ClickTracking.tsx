"use client";

import { useEffect } from "react";
import { trackEvent } from "@/hooks/useGoogleAnalytics";
import { getTrackedClickEvent } from "@/lib/clickTracking";

/**
 * Écoute globale des clics (un seul listener pour tout le site) :
 * envoie clic_telephone / clic_medoucine sans modifier les liens.
 * Les événements historiques phone_click / booking_click restent émis
 * par leurs composants respectifs, sous leur propre nom.
 */
export function ClickTracking() {
	useEffect(() => {
		const onClick = (e: MouseEvent) => {
			const link = (e.target as Element | null)?.closest?.("a");
			if (!link?.href) return;
			const eventName = getTrackedClickEvent(link.href);
			if (eventName) {
				trackEvent(eventName, { page_path: window.location.pathname });
			}
		};
		// Phase de capture : insensible à un éventuel stopPropagation
		document.addEventListener("click", onClick, true);
		return () => document.removeEventListener("click", onClick, true);
	}, []);

	return null;
}
