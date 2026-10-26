"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X, Cookie, Shield, BarChart3, Megaphone } from "lucide-react";
import treeLogo from "@/assets/tree-logo.webp";
import {
	CONSENT_STORAGE_KEY,
	NO_CONSENT,
	OPEN_COOKIE_SETTINGS_EVENT,
	PREFERENCES_STORAGE_KEY,
	clearDeniedCookies,
	parseStoredConsent,
	preferencesFromConsent,
	toGtagConsent,
	type ConsentChoice,
	type ConsentData,
	type ConsentPreferences,
} from "@/lib/consent";

export const CookieBanner = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [showDetails, setShowDetails] = useState(false);
	// Cases décochées par défaut (CNIL : pas de consentement pré-coché)
	const [preferences, setPreferences] = useState<ConsentPreferences>(NO_CONSENT);
	// Bandeau rouvert sur un choix déjà enregistré : la croix ferme sans rien modifier
	const [hasSavedChoice, setHasSavedChoice] = useState(false);

	useEffect(() => {
		try {
			const storedConsent = localStorage.getItem(CONSENT_STORAGE_KEY);
			if (storedConsent) {
				// Le choix valide est réappliqué à GA dès l'init (layout) : rien à faire ici
				if (!parseStoredConsent(storedConsent)) {
					localStorage.removeItem(CONSENT_STORAGE_KEY);
					localStorage.removeItem(PREFERENCES_STORAGE_KEY);
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

	// « Gérer les cookies » (footer) : rouvre le bandeau sur les choix actuels
	useEffect(() => {
		const openSettings = () => {
			let stored: ConsentData | null = null;
			try {
				stored = parseStoredConsent(localStorage.getItem(CONSENT_STORAGE_KEY));
			} catch {
				// stockage indisponible : cases décochées
			}
			setPreferences(preferencesFromConsent(stored));
			setHasSavedChoice(stored !== null);
			setShowDetails(true);
			setIsVisible(true);
		};
		window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
		return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
	}, []);

	const applyConsent = (choice: ConsentChoice, prefs: ConsentPreferences) => {
		const consentData: ConsentData = {
			choice,
			timestamp: Date.now(),
			...(choice !== "essential" && { preferences: prefs }),
		};

		try {
			localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consentData));
			if (choice === "essential") {
				localStorage.removeItem(PREFERENCES_STORAGE_KEY);
			} else {
				localStorage.setItem(PREFERENCES_STORAGE_KEY, JSON.stringify(prefs));
			}
		} catch (e) {
			console.error("Erreur lors de l'enregistrement du consentement:", e);
		}

		if (typeof window.gtag === "function") {
			window.gtag("consent", "update", toGtagConsent(prefs));
		}
		clearDeniedCookies(prefs);
		setIsVisible(false);
		setShowDetails(false);
	};

	const handleAcceptAll = () => applyConsent("all", { analytics: true, marketing: true });

	const handleRejectAll = () => applyConsent("essential", NO_CONSENT);

	const handleSavePreferences = () => applyConsent("custom", preferences);

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
								onClick={() => {
									if (hasSavedChoice) {
										setIsVisible(false);
										setShowDetails(false);
									} else if (showDetails) {
										setShowDetails(false);
									} else {
										handleRejectAll();
									}
								}}
								className="text-foreground/60 hover:text-foreground transition-colors p-2 hover:bg-white/30 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary flex-shrink-0"
								aria-label={
									hasSavedChoice
										? "Fermer sans modifier mes choix"
										: showDetails
											? "Fermer les détails"
											: "Tout rejeter et fermer"
								}
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
								target="_blank"
								rel="noopener noreferrer"
								 className="text-primary hover:underline font-medium inline-flex items-center gap-1"
								>
								En savoir plus
								 <span aria-hidden="true">↗</span>
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
