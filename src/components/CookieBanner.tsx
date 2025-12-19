"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export const CookieBanner = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const consent = localStorage.getItem("cookie-consent");
		if (!consent) {
			// Small delay for better UX
			const timer = setTimeout(() => setIsVisible(true), 1000);
			return () => clearTimeout(timer);
		}
	}, []);

	const handleAcceptAll = () => {
		localStorage.setItem("cookie-consent", "all");
		setIsVisible(false);
		// Enable Google Analytics
		if (typeof window !== "undefined" && (window as any).gtag) {
			(window as any).gtag("consent", "update", {
				analytics_storage: "granted",
			});
		}
	};

	const handleRejectAll = () => {
		localStorage.setItem("cookie-consent", "essential");
		setIsVisible(false);
		// Disable Google Analytics
		if (typeof window !== "undefined" && (window as any).gtag) {
			(window as any).gtag("consent", "update", {
				analytics_storage: "denied",
			});
		}
	};

	if (!isVisible) return null;

	return (
		<div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in">
			<div className="container mx-auto">
				<div className="bg-background border border-border rounded-2xl shadow-card p-6 max-w-2xl mx-auto relative">
					<button
						onClick={handleRejectAll}
						className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
						aria-label="Fermer"
					>
						<X className="w-5 h-5" />
					</button>

					<h3 className="font-display text-xl text-foreground mb-3">
						Nous respectons votre vie privée
					</h3>

					<p className="font-body text-sm text-muted-foreground mb-6">
						Nous utilisons des cookies pour améliorer votre
						expérience de navigation et analyser notre trafic. En
						cliquant sur « Tout accepter », vous consentez à notre
						utilisation des cookies.{" "}
						<Link
							href="/politique-confidentialite"
							className="text-primary hover:underline"
						>
							Politique de confidentialité
						</Link>
					</p>

					<div className="flex flex-col sm:flex-row gap-3">
						<button
							onClick={handleRejectAll}
							className="px-6 py-2.5 border border-primary text-primary font-body text-sm rounded-full transition-all duration-300 hover:bg-primary/5"
						>
							Tout rejeter
						</button>
						<button
							onClick={handleAcceptAll}
							className="px-6 py-2.5 bg-primary text-primary-foreground font-body text-sm rounded-full transition-all duration-300 hover:shadow-soft"
						>
							Tout accepter
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CookieBanner;
