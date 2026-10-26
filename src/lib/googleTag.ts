// Google tag (GA4, avec Google Ads lié côté Google) en Consent Mode v2 « basique » :
// rien n'est chargé ni envoyé tant que la mesure d'audience n'est pas acceptée.
import {
	CONSENT_DURATION_MS,
	clearDeniedCookies,
	toGtagConsent,
	type ConsentPreferences,
} from "@/lib/consent";

export const GA_MEASUREMENT_ID =
	process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-V96H9MXTZ6";

const isLoaded = () => typeof window.gtag === "function";

const loadGoogleTag = (prefs: ConsentPreferences) => {
	window.dataLayer = window.dataLayer || [];
	window.gtag = function gtag() {
		// gtag.js attend l'objet arguments, pas un tableau
		// eslint-disable-next-line prefer-rest-params
		window.dataLayer!.push(arguments);
	};
	window.gtag("js", new Date());
	window.gtag("consent", "default", toGtagConsent({ analytics: false, marketing: false }));
	window.gtag("consent", "update", toGtagConsent(prefs));
	// page_view de la page courante (page d'arrivée après acceptation) ;
	// les navigations internes sont mesurées par la mesure améliorée GA4
	window.gtag("config", GA_MEASUREMENT_ID, {
		allow_google_signals: false,
		allow_ad_personalization_signals: false,
		// Cookies Google : 6 mois maximum à compter du dépôt (même durée que le choix de
		// consentement), sans prolongation à chaque visite
		cookie_expires: CONSENT_DURATION_MS / 1000,
		cookie_update: false,
	});

	const script = document.createElement("script");
	script.async = true;
	script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
	document.head.appendChild(script);
};

/**
 * Applique un choix de consentement au Google tag :
 * - Analytics refusé et tag absent : rien n'est chargé ;
 * - Analytics accepté : chargement (une seule fois) avec les signaux du choix ;
 * - tag déjà chargé : mise à jour des signaux ; si Analytics est retiré, la page
 *   est rechargée pour décharger le tag (ga-disable ne coupe pas les signaux Ads).
 * Les cookies Google des catégories refusées sont supprimés dans tous les cas.
 */
export const applyGoogleConsent = (prefs: ConsentPreferences) => {
	if (!isLoaded()) {
		clearDeniedCookies(prefs);
		if (prefs.analytics) loadGoogleTag(prefs);
		return;
	}
	window.gtag!("consent", "update", toGtagConsent(prefs));
	clearDeniedCookies(prefs);
	if (!prefs.analytics) {
		(window as unknown as Record<string, boolean>)[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
		window.location.reload();
	}
};
