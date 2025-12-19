import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { CookieBanner } from "@/components/CookieBanner";
import { ScrollToTop } from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://aurelia-desvaux.fr"),
	title: { default: "Aurélia Desvaux", template: "%s | Aurélia Desvaux" },
	description:
		"Site officiel d'Aurélia Desvaux, thérapies brèves et accompagnement.",
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
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="fr">
			<body className={inter.className}>
				<Providers>
					<Suspense fallback={<div className="h-20" />}>
						<Header />
					</Suspense>
					<main>{children}</main>
					<Footer />
					<FloatingCTA />
					<Suspense fallback={null}>
						<ScrollToTop />
					</Suspense>
					<CookieBanner />

					{/* JSON-LD Schema */}
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
				</Providers>
			</body>
		</html>
	);
}
