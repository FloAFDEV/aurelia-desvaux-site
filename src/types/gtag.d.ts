// Déclaration globale unique pour window.gtag (Google Analytics / gtag.js)
// Source unique de vérité — ne pas redéclarer dans d'autres fichiers.

declare global {
	interface Window {
		gtag?: (...args: unknown[]) => void;
		dataLayer?: unknown[];
	}
}

export {};
