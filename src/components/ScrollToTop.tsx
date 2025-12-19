"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const LEGAL_PAGES = ["/mentions-legales", "/cgu", "/politique-confidentialite"];

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
		} else {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	}, [pathname, hash]);

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
			className={`fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full bg-background border border-border text-primary shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:border-primary ${
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
