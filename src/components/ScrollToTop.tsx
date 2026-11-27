"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const LEGAL_PAGES = ["/mentions-legales", "/cgu", "/politique-confidentialite"];

// Durée maximale d'attente d'une cible d'ancre au premier chargement. Sert
// uniquement au nettoyage (ancre inexistante) : elle ne déclenche jamais de défilement.
const HASH_TARGET_MAX_WAIT_MS = 10000;

// Identifiant visé par l'ancre de l'URL ; une ancre mal encodée (« %E9 »…)
// est utilisée telle quelle plutôt que de lever une exception.
function readHashTarget(): string {
	const raw = window.location.hash.slice(1);
	try {
		return decodeURIComponent(raw);
	} catch {
		return raw;
	}
}

export const ScrollToTop = () => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const [isVisible, setIsVisible] = useState(false);

	const hash = searchParams?.get("hash"); // pour simuler le hash si nécessaire

	// Scroll automatique à la navigation
	useEffect(() => {
		if (LEGAL_PAGES.includes(pathname)) return;

		if (hash) {
			setTimeout(() => {
				const el = document.getElementById(hash);
				if (el) el.scrollIntoView({ behavior: "smooth" });
			}, 100);
		} else if (!window.location.hash) {
			// Une ancre (ex. /#contact) est déjà gérée par Next.js : ne pas
			// remonter en haut de page par-dessus son défilement.
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	}, [pathname, hash]);

	// Accès direct ou rechargement avec une ancre (/#contact, /#faq…) : le
	// contenu de la page est révélé par React après le chargement (frontière
	// Suspense de loading.tsx), trop tard pour le défilement natif de Chromium.
	// On attend que la cible soit affichée, on y saute une seule fois (saut
	// instantané, comme un navigateur à l'ouverture d'une ancre), puis on arrête
	// d'observer. La navigation interne vers une ancre reste gérée par Next.js.
	useEffect(() => {
		const id = readHashTarget();
		if (!id) return;
		const destination = window.location.pathname + window.location.hash;

		const find = () => {
			const el = document.getElementById(id) ?? document.getElementsByName(id)[0];
			return el && !el.closest("[hidden]") ? el : null;
		};
		const jump = (el: Element) => el.scrollIntoView({ behavior: "instant" });

		const ready = find();
		if (ready) {
			jump(ready);
			return;
		}

		const userEvents = ["wheel", "touchstart", "keydown", "pointerdown"] as const;
		const stop = () => {
			observer.disconnect();
			window.clearTimeout(timeout);
			userEvents.forEach((e) => window.removeEventListener(e, stop));
			window.removeEventListener("hashchange", stop);
			window.removeEventListener("popstate", stop);
		};
		const observer = new MutationObserver(() => {
			// Destination changée entre-temps (navigation, nouvelle ancre) : on abandonne.
			if (window.location.pathname + window.location.hash !== destination) {
				stop();
				return;
			}
			const el = find();
			if (el) {
				stop();
				jump(el);
			}
		});
		observer.observe(document.body, {
			childList: true,
			subtree: true,
			attributes: true,
			attributeFilter: ["hidden"],
		});
		const timeout = window.setTimeout(stop, HASH_TARGET_MAX_WAIT_MS);
		userEvents.forEach((e) => window.addEventListener(e, stop, { passive: true }));
		window.addEventListener("hashchange", stop);
		window.addEventListener("popstate", stop);
		return stop;
	}, []);

	// Gestion de la visibilité du bouton
	useEffect(() => {
		const toggleVisibility = () => setIsVisible(window.scrollY > 400);
		window.addEventListener("scroll", toggleVisibility, { passive: true });
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

	return (
		<button
			onClick={scrollToTop}
			className={`fixed bottom-24 right-6 z-[9990] w-12 h-12 rounded-full bg-background border border-border text-primary shadow-lg flex items-center justify-center transition-all duration-300 motion-safe:hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
				isVisible
					? "opacity-100 translate-y-0"
					: "opacity-0 translate-y-4 pointer-events-none"
			}`}
			aria-label="Remonter en haut de la page"
		>
			<ArrowUp className="w-5 h-5" />
		</button>
	);
};
