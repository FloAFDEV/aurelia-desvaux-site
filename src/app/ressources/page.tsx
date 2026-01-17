import { Suspense } from "react";
import Head from "next/head"; // ✅ Remplace Helmet
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Content from "./content";

export default function RessourcesPage() {
	return (
		<>
			{/* SEO */}
			<Head>
				<title>
					Ressources & Ateliers | Aurélia Desvaux - Outils de
					bien-être gratuits
				</title>
				<meta
					name="description"
					content="Découvrez des ressources gratuites pour votre bien-être : session audio de Havening, ateliers et actualités d'Aurélia Desvaux, thérapeute à Valbonne."
				/>
				<link
					rel="canonical"
					href="https://aurelia-desvaux.fr/ressources"
				/>

				{/* Open Graph */}
				<meta
					property="og:title"
					content="Ressources & Ateliers | Aurélia Desvaux - Outils de bien-être gratuits"
				/>
				<meta
					property="og:description"
					content="Ressources gratuites pour votre bien-être : session audio de Havening, ateliers et actualités d'Aurélia Desvaux à Valbonne."
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content="https://aurelia-desvaux.fr/ressources"
				/>
				<meta property="og:locale" content="fr_FR" />
				<meta
					property="og:site_name"
					content="Aurélia Desvaux - Thérapies Brèves"
				/>
				<meta
					property="og:image"
					content="https://aurelia-desvaux.fr/og-image.webp"
				/>
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta
					property="og:image:alt"
					content="Ressources bien-être gratuites - Aurélia Desvaux"
				/>

				{/* Twitter Card */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="Ressources & Ateliers | Aurélia Desvaux"
				/>
				<meta
					name="twitter:description"
					content="Ressources gratuites pour votre bien-être : session audio de Havening, ateliers à Valbonne."
				/>
				<meta
					name="twitter:image"
					content="https://aurelia-desvaux.fr/og-image.webp"
				/>
				<meta
					name="twitter:image:alt"
					content="Aurélia Desvaux - Ressources bien-être"
				/>
			</Head>

			{/* Contenu principal */}
			<Content />
		</>
	);
}
