import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import Script from "next/script";
import { Inter } from "next/font/google";
import { StructuredData } from "@/components/SEO/StructuredData";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { CookieBanner } from "@/components/CookieBanner";
import { ScrollToTop } from "@/components/ScrollToTop";
import { WebVitals } from "@/components/analytics/WebVitals";

// Font optimisée avec display swap et préchargement
const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	preload: true,
	variable: "--font-inter",
	adjustFontFallback: true,
});

// ----- Configuration Google Analytics 4 -----
// 🔧 REMPLACER PAR VOTRE ID GA4 (format: G-XXXXXXXXXX)
const GA_MEASUREMENT_ID =
	process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-V96H9MXTZ6";

// ----- Metadata SEO -----
export const metadata: Metadata = {
	metadataBase: new URL("https://aurelia-desvaux.fr"),
	title: {
		default: "Aurélia Desvaux – Hypnose, PNL et EFT à Valbonne",
		template: "%s | Aurélia Desvaux",
	},
	description:
		"Aurélia Desvaux, praticienne en Hypnose Ericksonienne, PNL et EFT à Valbonne Sophia-Antipolis (06). Thérapies brèves pour stress, anxiété, phobies et développement personnel. Consultations sur rendez-vous.",
	keywords: [
		"hypnose Valbonne",
		"PNL Sophia-Antipolis",
		"EFT Alpes-Maritimes",
		"thérapeute Valbonne",
		"hypnothérapeute 06",
		"préparation mentale",
		"gestion du stress",
		"thérapies brèves",
		"Aurélia Desvaux",
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/favicon-apple.png",
	},
	openGraph: {
		type: "website",
		locale: "fr_FR",
		title: "Aurélia Desvaux | Hypnose, PNL et EFT à Valbonne",
		description:
			"Praticienne en Hypnose Ericksonienne, PNL et EFT. Accompagnement thérapeutique pour stress, anxiété et bien-être à Valbonne Sophia-Antipolis.",
		url: "https://aurelia-desvaux.fr",
		siteName: "Aurélia Desvaux",
		images: [
			{
				url: "https://aurelia-desvaux.fr/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Aurélia Desvaux - Praticienne en Hypnose, PNL et EFT à Valbonne",
				type: "image/jpeg",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Aurélia Desvaux | Hypnose, PNL et EFT",
		description:
			"Praticienne en thérapies brèves à Valbonne. Accompagnement pour stress, anxiété et développement personnel.",
		images: ["https://aurelia-desvaux.fr/og-image.jpg"],
		creator: "@aurelia_desvaux",
	},
	alternates: {
		canonical: "https://aurelia-desvaux.fr",
	},
	// Optimisation pour les moteurs de recherche
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},
	// Google Search Console - Balise de vérification
	// 🔧 REMPLACER PAR VOTRE CODE GSC (optionnel si vous utilisez DNS ou fichier)
	verification: {
		google: "gPrvdkmyVI58aWqULwTaBE9XR6TvimLmVk7XHnqvChI",
	},
};

// ----- Viewport global (Next 15+) -----
export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#E8D5D5" },
		{ media: "(prefers-color-scheme: dark)", color: "#2D2420" },
	],
};

// ----- Layout -----
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="fr">
			<head>
				{/* DNS prefetch uniquement pour Google Analytics (pas de preconnect inutile) */}
				<link
					rel="dns-prefetch"
					href="https://www.google-analytics.com"
				/>
				{/* Les fonts sont optimisées par next/font — pas de preload manuel
				    (les hashes changent à chaque build et génèrent des 404) */}
			</head>
			<body className={inter.className}>
				{/* JSON-LD LocalBusiness — SSR, visible dans view-source */}
				<StructuredData />

				{/* Google Analytics 4 - Chargé après interaction */}
				{GA_MEASUREMENT_ID && (
					<>
						<Script
							src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
							strategy="afterInteractive"
						/>
						<Script
							id="google-analytics"
							strategy="afterInteractive"
						>
							{`
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());

								// Google Consent Mode V2 - Collecte de données anonymes par défaut (conforme RGPD)
								gtag('consent', 'default', {
									'analytics_storage': 'denied',
									'ad_storage': 'denied',
									'ad_user_data': 'denied',
									'ad_personalization': 'denied',
									'wait_for_update': 500
								});

								// Configuration GA4 avec mode de consentement V2
								// Envoie des pings anonymes même sans consentement (pas de cookies)
								gtag('config', '${GA_MEASUREMENT_ID}', {
									page_path: window.location.pathname,
									'anonymize_ip': true,
									'allow_google_signals': false,
									'allow_ad_personalization_signals': false
								});
							`}
						</Script>
					</>
				)}

				{/* Core Web Vitals tracking */}
				<WebVitals />

				<Providers>
					{/* Header avec Suspense et fallback optimisé */}
					<Suspense
						fallback={
							<div className="h-20 bg-background/80 fixed top-0 left-0 right-0 z-50" />
						}
					>
						<Header />
					</Suspense>

					{/* Main content */}
					<main id="main-content">{children}</main>

					{/* Footer sans Suspense car non critique */}
					<Footer />
				</Providers>

				{/* TOUS LES COMPOSANTS FIXED EN DEHORS DE PROVIDERS */}
				{/* CTA flottant */}
				<Suspense fallback={null}>
					<FloatingCTA />
				</Suspense>

				{/* Scroll to top */}
				<Suspense fallback={null}>
					<ScrollToTop />
				</Suspense>

				{/* Cookie banner */}
				<CookieBanner />
			</body>
		</html>
	);
}
