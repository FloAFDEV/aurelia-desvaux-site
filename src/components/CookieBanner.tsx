"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X, Cookie, Shield, BarChart3, Megaphone } from "lucide-react";
import treeLogo from "@/assets/tree-logo.webp";

// Durée de conservation du consentement : 6 mois (conforme CNIL)
const CONSENT_DURATION_MS = 6 * 30 * 24 * 60 * 60 * 1000;

interface ConsentData {
	choice: "all" | "essential" | "custom";
	timestamp: number;
	preferences?: {
		analytics: boolean;
		marketing: boolean;
	};
}

export const CookieBanner = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [showDetails, setShowDetails] = useState(false);
	const [preferences, setPreferences] = useState({
		analytics: true,
		marketing: true,
	});

	useEffect(() => {
		try {
			const storedConsent = localStorage.getItem("cookie-consent");
			if (storedConsent) {
				const consentData: ConsentData = JSON.parse(storedConsent);
				const now = Date.now();
				const expirationDate = consentData.timestamp + CONSENT_DURATION_MS;

				if (now > expirationDate) {
					localStorage.removeItem("cookie-consent");
					localStorage.removeItem("cookie-preferences");
					setIsVisible(true);
				}
			} else {
				const timer = setTimeout(() => setIsVisible(true), 800);
				return () => clearTimeout(timer);
			}
		} catch (e) {
			console.error("Erreur lors de la lecture du consentement:", e);
			setIsVisible(true);
		}
	}, []);

	const saveConsent = (choice: "all" | "essential" | "custom", prefs?: { analytics: boolean; marketing: boolean }) => {
		const consentData: ConsentData = {
			choice,
			timestamp: Date.now(),
			...(prefs && { preferences: prefs }),
		};

		localStorage.setItem("cookie-consent", JSON.stringify(consentData));
		if (prefs) {
			localStorage.setItem("cookie-preferences", JSON.stringify(prefs));
		}
	};

	const handleAcceptAll = () => {
		saveConsent("all", { analytics: true, marketing: true });
		setIsVisible(false);

		if (typeof window !== "undefined" && (window as any).gtag) {
			(window as any).gtag("consent", "update", {
				analytics_storage: "granted",
				ad_storage: "granted",
			});
		}
	};

	const handleRejectAll = () => {
		saveConsent("essential");
		setIsVisible(false);

		if (typeof window !== "undefined" && (window as any).gtag) {
			(window as any).gtag("consent", "update", {
				analytics_storage: "denied",
				ad_storage: "denied",
			});
		}
	};

	const handleSavePreferences = () => {
		saveConsent("custom", preferences);
		setIsVisible(false);

		if (typeof window !== "undefined" && (window as any).gtag) {
			(window as any).gtag("consent", "update", {
				analytics_storage: preferences.analytics ? "granted" : "denied",
				ad_storage: preferences.marketing ? "granted" : "denied",
			});
		}
	};

	if (!isVisible) return null;

	return (
		<>
			<div
				className="fixed inset-0 bg-black/40 z-[9998] backdrop-blur-[2px]"
				aria-hidden="true"
			/>

			<div
				className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-4 sm:pb-6 pointer-events-none overflow-y-auto"
				role="dialog"
				aria-modal="true"
				aria-labelledby="cookie-banner-title"
				aria-describedby="cookie-banner-description"
			>
				<div className="w-full max-w-4xl pointer-events-auto my-auto">
					<div className="bg-background border-2 border-border rounded-2xl shadow-2xl overflow-hidden animate-slide-up max-h-[90vh] sm:max-h-[85vh] flex flex-col">
						<div className="bg-gradient-to-r from-soft-pink to-blush px-6 sm:px-8 py-4 flex items-center gap-4">
							<div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shadow-md flex-shrink-0 bg-white">
								<Image
									src={treeLogo}
									alt=""
									fill
									className="object-cover"
									aria-hidden="true"
								/>
							</div>
							<div className="flex-1">
								<h3
									id="cookie-banner-title"
									className="font-display text-xl sm:text-2xl text-foreground font-semibold"
								>
									Protection de vos données
								</h3>
								<p className="text-sm text-foreground/70 mt-0.5">
									Votre confidentialité nous tient à cœur
								</p>
							</div>
							<button
								onClick={handleRejectAll}
								className="text-foreground/60 hover:text-foreground transition-colors p-2 hover:bg-white/30 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary flex-shrink-0"
								aria-label="Tout rejeter et fermer"
							>
								<X className="w-5 h-5" />
							</button>
						</div>

						<div className="p-6 sm:p-8 overflow-y-auto flex-1">
							<p
								id="cookie-banner-description"
								className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-6"
							>
								Nous utilisons des cookies pour améliorer votre expérience de navigation, 
								analyser le trafic du site et personnaliser le contenu. 
								Votre choix sera conservé pendant <strong className="text-foreground">6 mois</strong>.{" "}
								<Link
									href="/politique-confidentialite"
									className="text-primary hover:underline font-medium inline-flex items-center gap-1"
									onClick={() => setIsVisible(false)}
								>
									En savoir plus
									<span aria-hidden="true">→</span>
								</Link>
							</p>

							{showDetails && (
								<div className="mb-6 space-y-4 border-t border-border pt-6 animate-fade-in">
									<div className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl">
										<div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
											<Shield className="w-5 h-5 text-green-600 dark:text-green-400" aria-hidden="true" />
										</div>
										<div className="flex-1 min-w-0">
											<div className="flex items-center justify-between gap-2 mb-1">
												<h4 className="font-semibold text-foreground">
													Cookies nécessaires
												</h4>
												<span className="text-xs px-2.5 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full font-medium whitespace-nowrap">
													Toujours actifs
												</span>
											</div>
											<p className="text-sm text-muted-foreground">
												Essentiels au fonctionnement du site (navigation, sécurité, préférences).
											</p>
										</div>
									</div>

									<div className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl">
										<div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
											<BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
										</div>
										<div className="flex-1 min-w-0">
											<div className="flex items-center justify-between gap-2 mb-2">
												<label htmlFor="analytics" className="font-semibold text-foreground cursor-pointer">
													Cookies analytiques
												</label>
												<input
													type="checkbox"
													id="analytics"
													checked={preferences.analytics}
													onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
													className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-2 focus:ring-primary cursor-pointer flex-shrink-0"
												/>
											</div>
											<p className="text-sm text-muted-foreground">
												Nous aident à comprendre comment les visiteurs utilisent notre site via Google Analytics.
											</p>
										</div>
									</div>

									<div className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl">
										<div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
											<Megaphone className="w-5 h-5 text-purple-600 dark:text-purple-400" aria-hidden="true" />
										</div>
										<div className="flex-1 min-w-0">
											<div className="flex items-center justify-between gap-2 mb-2">
												<label htmlFor="marketing" className="font-semibold text-foreground cursor-pointer">
													Cookies marketing
												</label>
												<input
													type="checkbox"
													id="marketing"
													checked={preferences.marketing}
													onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
													className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-2 focus:ring-primary cursor-pointer flex-shrink-0"
												/>
											</div>
											<p className="text-sm text-muted-foreground">
												Utilisés pour personnaliser les publicités et mesurer l'efficacité de nos campagnes.
											</p>
										</div>
									</div>
								</div>
							)}

							<div className="flex flex-col sm:flex-row gap-3">
								{!showDetails ? (
									<>
										<button
											onClick={handleRejectAll}
											className="w-full sm:w-auto px-6 py-3.5 border-2 border-primary/30 hover:border-primary text-foreground font-body text-sm sm:text-base font-medium rounded-full transition-all duration-300 hover:bg-primary/5 hover:shadow-sm motion-safe:hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
										>
											Tout rejeter
										</button>
										<button
											onClick={() => setShowDetails(true)}
											className="w-full sm:w-auto px-6 py-3.5 border-2 border-primary text-primary font-body text-sm sm:text-base font-medium rounded-full transition-all duration-300 hover:bg-primary/10 hover:shadow-sm motion-safe:hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
										>
											Personnaliser
										</button>
										<button
											onClick={handleAcceptAll}
											className="w-full sm:w-auto px-6 py-3.5 bg-primary text-primary-foreground font-body text-sm sm:text-base font-medium rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-primary/90 motion-safe:hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2"
										>
											Tout accepter
										</button>
									</>
								) : (
									<>
										{/* ✅ FIX RESPONSIVE : Les deux boutons ont maintenant la même largeur sur mobile et desktop */}
										<button
											onClick={() => setShowDetails(false)}
											className="w-full sm:w-auto sm:flex-1 px-6 py-3.5 border-2 border-primary/30 hover:border-primary text-foreground font-body text-sm sm:text-base font-medium rounded-full transition-all duration-300 hover:bg-primary/5 hover:shadow-sm motion-safe:hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
										>
											← Retour
										</button>
										<button
											onClick={handleSavePreferences}
											className="w-full sm:w-auto sm:flex-1 px-6 py-3.5 bg-primary text-primary-foreground font-body text-sm sm:text-base font-medium rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-primary/90 motion-safe:hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2"
										>
											Enregistrer mes préférences
										</button>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CookieBanner;
