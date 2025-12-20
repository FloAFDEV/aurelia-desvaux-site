"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X, Cookie, Shield, BarChart3 } from "lucide-react";
import treeLogo from "@/assets/tree-logo.webp";

// Durée de conservation du consentement : 6 mois (conforme CNIL)
const CONSENT_DURATION_MS = 6 * 30 * 24 * 60 * 60 * 1000; // 6 mois

interface ConsentData {
	choice: "all" | "essential" | "custom";
	timestamp: number;
	preferences?: {
		analytics: boolean;
		functional: boolean;
	};
}

export const CookieBanner = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [showDetails, setShowDetails] = useState(false);
	const [preferences, setPreferences] = useState({
		analytics: true,
		functional: true,
	});

	useEffect(() => {
		try {
			const storedConsent = localStorage.getItem("cookie-consent");
			if (storedConsent) {
				const consentData: ConsentData = JSON.parse(storedConsent);
				const now = Date.now();
				const expirationDate =
					consentData.timestamp + CONSENT_DURATION_MS;

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

	const saveConsent = (
		choice: "all" | "essential" | "custom",
		prefs?: { analytics: boolean; functional: boolean }
	) => {
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
		saveConsent("all", { analytics: true, functional: true });
		setIsVisible(false);

		if (typeof window !== "undefined" && (window as any).gtag) {
			(window as any).gtag("consent", "update", {
				analytics_storage: "granted",
				ad_storage: "denied", // pas de pub
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
				ad_storage: "denied", // pas de pub
			});
		}
	};

	if (!isVisible) return null;

	return (
		<>
			{/* Overlay bloquant */}
			<div
				className="fixed inset-0 bg-black/40 z-[9998] backdrop-blur-[2px]"
				aria-hidden="true"
			/>

			{/* Cookie Banner */}
			<div
				className="fixed inset-x-0 bottom-0 z-[9999] px-3 pb-3 sm:px-4 sm:pb-6 pointer-events-none"
				role="dialog"
				aria-modal="true"
				aria-labelledby="cookie-banner-title"
				aria-describedby="cookie-banner-description"
			>
				<div className="container mx-auto max-w-4xl pointer-events-auto">
					<div className="bg-background border-2 border-border rounded-2xl shadow-2xl overflow-hidden animate-slide-up max-h-[85vh] flex flex-col">
						{/* Header */}
						<div className="bg-gradient-to-r from-soft-pink to-blush px-3 py-3 sm:px-8 sm:py-4 flex items-center gap-2 sm:gap-4 flex-shrink-0">
							<div className="relative w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden shadow-md flex-shrink-0 bg-white">
								<Image
									src={treeLogo}
									alt=""
									fill
									className="object-cover"
									aria-hidden="true"
								/>
							</div>
							<div className="flex-1 min-w-0">
								<h3
									id="cookie-banner-title"
									className="font-display text-base sm:text-2xl text-foreground font-semibold"
								>
									Protection de vos données
								</h3>
								<p className="text-xs sm:text-sm text-foreground/70 mt-0.5 hidden sm:block">
									Votre confidentialité nous tient à cœur
								</p>
							</div>
							<button
								onClick={handleRejectAll}
								className="text-foreground/60 hover:text-foreground transition-colors p-1.5 sm:p-2 hover:bg-white/30 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary flex-shrink-0"
								aria-label="Tout rejeter et fermer"
							>
								<X className="w-4 h-4 sm:w-5 sm:h-5" />
							</button>
						</div>

						{/* Contenu principal */}
						<div className="p-3 sm:p-8 overflow-y-auto flex-1">
							<p
								id="cookie-banner-description"
								className="font-body text-xs sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-6"
							>
								Nous utilisons des cookies pour améliorer votre
								expérience de navigation et analyser le trafic
								du site. Votre choix sera conservé pendant{" "}
								<strong className="text-foreground">
									6 mois
								</strong>
								.{" "}
								<Link
									href="/politique-confidentialite"
									className="text-primary hover:underline font-medium inline-flex items-center gap-1"
									target="_blank"
									rel="noopener noreferrer"
								>
									En savoir plus{" "}
									<span aria-hidden="true">→</span>
								</Link>
							</p>

							{showDetails && (
								<div className="mb-3 sm:mb-6 space-y-2.5 sm:space-y-4 border-t border-border pt-3 sm:pt-6 animate-fade-in">
									{/* Cookies nécessaires */}
									<div className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-4 bg-muted/30 rounded-lg sm:rounded-xl">
										<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
											<Shield
												className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400"
												aria-hidden="true"
											/>
										</div>
										<div className="flex-1 min-w-0">
											<div className="flex items-center justify-between gap-1.5 sm:gap-2 mb-1">
												<h4 className="font-semibold text-xs sm:text-base text-foreground">
													Cookies nécessaires
												</h4>
												<span className="text-[9px] sm:text-xs px-1.5 sm:px-2.5 py-0.5 sm:py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full font-medium whitespace-nowrap">
													Toujours actifs
												</span>
											</div>
											<p className="text-[11px] sm:text-sm text-muted-foreground leading-snug sm:leading-normal">
												Essentiels au fonctionnement du
												site (navigation, sécurité,
												préférences).
											</p>
										</div>
									</div>

									{/* Cookies analytiques */}
									<div className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-4 bg-muted/30 rounded-lg sm:rounded-xl">
										<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
											<BarChart3
												className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400"
												aria-hidden="true"
											/>
										</div>
										<div className="flex-1 min-w-0">
											<div className="flex items-center justify-between gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
												<label
													htmlFor="analytics"
													className="font-semibold text-xs sm:text-base text-foreground cursor-pointer"
												>
													Cookies analytiques
												</label>
												<input
													type="checkbox"
													id="analytics"
													checked={
														preferences.analytics
													}
													onChange={(e) =>
														setPreferences({
															...preferences,
															analytics:
																e.target
																	.checked,
														})
													}
													className="w-4 h-4 sm:w-5 sm:h-5 rounded border-gray-300 text-primary focus:ring-2 focus:ring-primary cursor-pointer flex-shrink-0"
												/>
											</div>
											<p className="text-[11px] sm:text-sm text-muted-foreground leading-snug sm:leading-normal">
												Nous aident à comprendre comment
												les visiteurs utilisent notre
												site via Google Analytics.
											</p>
										</div>
									</div>

									{/* Cookies fonctionnels optionnels */}
									<div className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-4 bg-muted/30 rounded-lg sm:rounded-xl">
										<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
											<Cookie
												className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 dark:text-purple-400"
												aria-hidden="true"
											/>
										</div>
										<div className="flex-1 min-w-0">
											<div className="flex items-center justify-between gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
												<label
													htmlFor="functional"
													className="font-semibold text-xs sm:text-base text-foreground cursor-pointer"
												>
													Cookies fonctionnels
													optionnels
												</label>
												<input
													type="checkbox"
													id="functional"
													checked={
														preferences.functional
													}
													onChange={(e) =>
														setPreferences({
															...preferences,
															functional:
																e.target
																	.checked,
														})
													}
													className="w-4 h-4 sm:w-5 sm:h-5 rounded border-gray-300 text-primary focus:ring-2 focus:ring-primary cursor-pointer flex-shrink-0"
												/>
											</div>
											<p className="text-[11px] sm:text-sm text-muted-foreground leading-snug sm:leading-normal">
												Permettent d’activer certains
												services externes (cartes,
												vidéos, contenus intégrés).
												Aucun usage publicitaire.
											</p>
										</div>
									</div>
								</div>
							)}
						</div>

						{/* Boutons */}
						<div className="p-3 sm:p-6 sm:pt-0 flex-shrink-0 border-t sm:border-0 border-border/50">
							<div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
								{!showDetails ? (
									<>
										<button
											onClick={handleRejectAll}
											className="w-full sm:w-auto px-4 py-2.5 sm:px-6 sm:py-3.5 border-2 border-border hover:border-primary text-foreground font-body text-xs sm:text-base font-medium rounded-full transition-all duration-300 hover:bg-muted motion-safe:hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
										>
											Tout rejeter
										</button>
										<button
											onClick={() => setShowDetails(true)}
											className="w-full sm:w-auto px-4 py-2.5 sm:px-6 sm:py-3.5 border-2 border-primary text-primary font-body text-xs sm:text-base font-medium rounded-full transition-all duration-300 hover:bg-primary/5 motion-safe:hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
										>
											Personnaliser
										</button>
										<button
											onClick={handleAcceptAll}
											className="w-full sm:w-auto px-4 py-2.5 sm:px-6 sm:py-3.5 bg-primary text-primary-foreground font-body text-xs sm:text-base font-medium rounded-full shadow-lg transition-all duration-300 hover:shadow-xl motion-safe:hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2"
										>
											Tout accepter
										</button>
									</>
								) : (
									<>
										<button
											onClick={() =>
												setShowDetails(false)
											}
											className="w-full sm:w-auto px-4 py-2.5 sm:px-6 sm:py-3.5 border-2 border-border text-foreground font-body text-xs sm:text-base font-medium rounded-full transition-all duration-300 hover:bg-muted motion-safe:hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
										>
											← Retour
										</button>
										<button
											onClick={handleSavePreferences}
											className="w-full sm:flex-1 px-4 py-2.5 sm:px-6 sm:py-3.5 bg-primary text-primary-foreground font-body text-xs sm:text-base font-medium rounded-full shadow-lg transition-all duration-300 hover:shadow-xl motion-safe:hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2"
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
