// Consentement cookies — source unique partagée par le bandeau, le footer et
// le script d'initialisation GA4 (Google Consent Mode v2).
// Aucun import : ce module est aussi testé directement par node --test.

export const CONSENT_STORAGE_KEY = "cookie-consent";
export const PREFERENCES_STORAGE_KEY = "cookie-preferences";

// Durée de conservation du consentement : 6 mois (conforme CNIL)
export const CONSENT_DURATION_MS = 6 * 30 * 24 * 60 * 60 * 1000;

// Événement DOM émis par « Gérer les cookies » pour rouvrir le bandeau
export const OPEN_COOKIE_SETTINGS_EVENT = "open-cookie-settings";

export type ConsentChoice = "all" | "essential" | "custom";

export interface ConsentPreferences {
	analytics: boolean;
	marketing: boolean;
}

export interface ConsentData {
	choice: ConsentChoice;
	timestamp: number;
	preferences?: ConsentPreferences;
}

export type ConsentSignal = "granted" | "denied";

export interface GtagConsent {
	analytics_storage: ConsentSignal;
	ad_storage: ConsentSignal;
	ad_user_data: ConsentSignal;
	ad_personalization: ConsentSignal;
}

export const NO_CONSENT: ConsentPreferences = { analytics: false, marketing: false };

export const parseStoredConsent = (
	raw: string | null,
	now: number = Date.now(),
): ConsentData | null => {
	if (!raw) return null;
	try {
		const data = JSON.parse(raw) as ConsentData;
		if (!data || typeof data.timestamp !== "number") return null;
		if (now - data.timestamp > CONSENT_DURATION_MS) return null;
		return data;
	} catch {
		return null;
	}
};

export const preferencesFromConsent = (data: ConsentData | null): ConsentPreferences => {
	if (!data) return NO_CONSENT;
	if (data.choice === "all") return { analytics: true, marketing: true };
	if (data.choice === "custom") {
		return {
			analytics: data.preferences?.analytics === true,
			marketing: data.preferences?.marketing === true,
		};
	}
	return NO_CONSENT;
};

// Marketing pilote les trois signaux publicitaires, Analytics uniquement analytics_storage
export const toGtagConsent = ({ analytics, marketing }: ConsentPreferences): GtagConsent => {
	const signal = (granted: boolean): ConsentSignal => (granted ? "granted" : "denied");
	return {
		analytics_storage: signal(analytics),
		ad_storage: signal(marketing),
		ad_user_data: signal(marketing),
		ad_personalization: signal(marketing),
	};
};

/**
 * Script inline exécuté juste après gtag('consent', 'default', …) et avant
 * gtag('config', …) : réapplique le choix sauvegardé dès le premier hit de
 * chaque page / visite. Doit rester équivalent à
 * toGtagConsent(preferencesFromConsent(parseStoredConsent(…))) — vérifié par
 * tests/consent.test.ts.
 */
export const buildConsentRestoreScript = (): string => `
try {
	var c = JSON.parse(localStorage.getItem(${JSON.stringify(CONSENT_STORAGE_KEY)}) || 'null');
	if (c && typeof c.timestamp === 'number' && Date.now() - c.timestamp <= ${CONSENT_DURATION_MS}) {
		var p = c.preferences || {};
		var a = c.choice === 'all' || (c.choice === 'custom' && p.analytics === true);
		var m = c.choice === 'all' || (c.choice === 'custom' && p.marketing === true);
		var s = function (v) { return v ? 'granted' : 'denied'; };
		gtag('consent', 'update', {
			'analytics_storage': s(a),
			'ad_storage': s(m),
			'ad_user_data': s(m),
			'ad_personalization': s(m)
		});
	}
} catch (e) {}
`;

// Cookies déposés par Google selon la catégorie retirée
const ANALYTICS_COOKIE_PREFIXES = ["_ga"];
const MARKETING_COOKIE_PREFIXES = ["_gcl"];

/** Supprime les cookies Google d'une catégorie dont le consentement est retiré. */
export const clearDeniedCookies = ({ analytics, marketing }: ConsentPreferences) => {
	if (typeof document === "undefined") return;
	const prefixes = [
		...(analytics ? [] : ANALYTICS_COOKIE_PREFIXES),
		...(marketing ? [] : MARKETING_COOKIE_PREFIXES),
	];
	if (prefixes.length === 0) return;

	const host = window.location.hostname;
	const rootDomain = host.split(".").slice(-2).join(".");
	const domains = ["", `; domain=${host}`, `; domain=.${rootDomain}`];

	document.cookie
		.split(";")
		.map((cookie) => cookie.split("=")[0].trim())
		.filter((name) => prefixes.some((prefix) => name.startsWith(prefix)))
		.forEach((name) => {
			domains.forEach((domain) => {
				document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
			});
		});
};
