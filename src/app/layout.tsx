import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import { StructuredData } from "@/components/SEO/StructuredData";
import { SEO } from "@/lib/seo";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { CookieBanner } from "@/components/CookieBanner";
import { ScrollToTop } from "@/components/ScrollToTop";
import { WebVitals } from "@/components/analytics/WebVitals";
import { ClickTracking } from "@/components/analytics/ClickTracking";

// Font optimisée avec display swap et préchargement
const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	preload: true,
	variable: "--font-inter",
	adjustFontFallback: true,
});

// ----- Metadata SEO -----
export const metadata: Metadata = {
	metadataBase: new URL(SEO.siteUrl),
	title: {
		default: "Aurélia Desvaux | Thérapeute Hypnose, PNL & EFT — Antibes, Sophia-Antipolis, Valbonne",
		template: "%s | Aurélia Desvaux",
	},
	description:
		"Thérapeute en thérapies brèves à Valbonne, Antibes et Sophia-Antipolis — Hypnose Ericksonienne, PNL et EFT. Stress, anxiété, confiance en soi, histoire de vie, arrêt du tabac. 1ère séance 1h30.",
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
		title: "Aurélia Desvaux | Thérapeute Hypnose, PNL & EFT — Antibes, Sophia-Antipolis, Valbonne",
		description:
			"Hypnose Ericksonienne, PNL et EFT à Valbonne, Antibes et Sophia-Antipolis. Arrêt du tabac, perte de poids, stress, anxiété, phobies. Praticienne certifiée.",
		url: "/",
		siteName: SEO.siteName,
		images: [SEO.ogImage],
	},
	twitter: {
		card: "summary_large_image",
		title: "Aurélia Desvaux | Thérapeute Hypnose, PNL & EFT — Antibes, Sophia-Antipolis, Valbonne",
		description:
			"Thérapeute en Hypnose, PNL & EFT à Valbonne, Antibes et Sophia-Antipolis. Accompagnement bienveillant pour votre bien-être.",
		images: [SEO.ogImage.url],
		creator: SEO.twitterHandle,
	},
	alternates: {
		canonical: "/",
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

				{/* Google Analytics 4 : chargé par CookieBanner uniquement après consentement (src/lib/googleTag.ts) */}

				{/* Core Web Vitals tracking */}
				<WebVitals />

				{/* Clics téléphone / Médoucine (clic_telephone, clic_medoucine) */}
				<ClickTracking />

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
