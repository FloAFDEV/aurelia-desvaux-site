// Détection des clics de conversion (Google Ads via GA4).
// Aucun import : ce module est aussi testé directement par node --test.

export type TrackedClickEvent = "clic_telephone" | "clic_medoucine";

// Numéros de la cliente uniquement (le numéro de l'hébergeur des CGU est exclu)
const TRACKED_PHONE_NUMBERS = new Set(["33620145306", "33695530437"]);

const MEDOUCINE_HOST = /(^|\.)medoucine\.com$/i;

const safeDecode = (value: string): string => {
	try {
		return decodeURIComponent(value);
	} catch {
		return value;
	}
};

// tel:+33 6 20…, tel:0620…, tel:0033620… → 33620…
const normalizePhone = (value: string): string => {
	const digits = safeDecode(value).replace(/[^\d+]/g, "");
	if (digits.startsWith("+")) return digits.slice(1);
	if (digits.startsWith("00")) return digits.slice(2);
	if (digits.startsWith("0")) return `33${digits.slice(1)}`;
	return digits;
};

export const getTrackedClickEvent = (href: string): TrackedClickEvent | null => {
	if (href.toLowerCase().startsWith("tel:")) {
		const number = normalizePhone(href.slice(4).split(/[?;]/)[0]);
		return TRACKED_PHONE_NUMBERS.has(number) ? "clic_telephone" : null;
	}

	try {
		const url = new URL(href);
		if ((url.protocol === "https:" || url.protocol === "http:") && MEDOUCINE_HOST.test(url.hostname)) {
			return "clic_medoucine";
		}
	} catch {
		// href relatif ou invalide : non suivi
	}
	return null;
};
