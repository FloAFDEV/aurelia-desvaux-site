import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { CookieBanner } from "@/components/CookieBanner";
import { ScrollToTop } from "@/components/ScrollToTop";

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
		"Aurélia Desvaux, spécialiste en Hypnose, PNL et EFT à Valbonne Sophia-Antipolis. Accompagnement pour stress, anxiété et bien-être.",
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/favicon-apple.png",
	},
	openGraph: {
		title: "Aurélia Desvaux | Thérapies Brèves",
		description: "Accompagnement en Hypnose, PNL et EFT à Valbonne.",
		url: "https://aurelia-desvaux.fr",
		siteName: "Aurélia Desvaux",
		images: [
			{
				url: "https://aurelia-desvaux.fr/og-image.webp",
				width: 1200,
				height: 630,
				alt: "Aurélia Desvaux - Thérapeute à Valbonne",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Aurélia Desvaux",
		description: "Thérapies brèves et accompagnement à Valbonne.",
		images: ["https://aurelia-desvaux.fr/og-image.webp"],
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

				{/* Preload des fonts critiques pour éviter FOIT */}
				<link
					rel="preload"
					href="/_next/static/media/cormorant-garamond-latin-400-normal.92f9a759.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/_next/static/media/cormorant-garamond-latin-600-normal.0e4e8436.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/_next/static/media/lora-latin-400-normal.1245abf6.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/_next/static/media/great-vibes-latin-400-normal.c27321a0.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
			</head>
			<body className={inter.className}>
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

				{/* JSON-LD Schema - Optimisé avec script defer */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "ProfessionalService",
							name: "Aurélia Desvaux",
							url: "https://aurelia-desvaux.fr",
							logo: "https://aurelia-desvaux.fr/tree-logo.webp",
							image: "https://aurelia-desvaux.fr/og-image.webp",
							description:
								"Thérapeute en Hypnose Ericksonienne, PNL et EFT à Valbonne Sophia‑Antipolis. Accompagnement bienveillant pour stress, anxiété, traumas et bien‑être.",
							telephone: "+33 6 12 34 56 78",
							email: "contact@aurelia-desvaux.fr",
							priceRange: "€€",
							address: {
								"@type": "PostalAddress",
								streetAddress: "123 Rue de l'Énergie",
								addressLocality: "Valbonne",
								addressRegion: "Provence‑Alpes‑Côte d'Azur",
								postalCode: "06560",
								addressCountry: "FR",
							},
							geo: {
								"@type": "GeoCoordinates",
								latitude: 43.6197,
								longitude: 7.0713,
							},
							openingHoursSpecification: [
								{
									"@type": "OpeningHoursSpecification",
									dayOfWeek: [
										"Monday",
										"Tuesday",
										"Wednesday",
										"Thursday",
										"Friday",
									],
									opens: "09:00",
									closes: "19:00",
								},
							],
							sameAs: [
								"https://www.facebook.com/AureliaDesvauxPsychopraticienne/",
								"https://www.instagram.com/aurelia_desvaux_therapiebreve/",
								"https://www.linkedin.com/in/aur%C3%A9lia-desvaux-876459a/?originalSubdomain=fr",
							],
						}),
					}}
				/>
			</body>
		</html>
	);
}
