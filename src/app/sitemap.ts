import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://aurelia-desvaux.fr";

	// Pages principales et sous-pages thérapeutiques
	const primaryPages = [
		{ path: "", changefreq: "weekly", priority: 1.0 }, // Accueil LCP max
		{ path: "/tarifs", changefreq: "monthly", priority: 0.9 },
		{ path: "/contact", changefreq: "monthly", priority: 0.9 },
		{ path: "/pratiques", changefreq: "monthly", priority: 0.8 },
		{ path: "/therapies", changefreq: "monthly", priority: 0.8 },
		{ path: "/hypnose", changefreq: "monthly", priority: 0.9 },
		{ path: "/pnl", changefreq: "monthly", priority: 0.9 },
		{ path: "/eft", changefreq: "monthly", priority: 0.9 },
		{ path: "/preparation-mentale", changefreq: "monthly", priority: 0.9 },
		{ path: "/dream-machine", changefreq: "monthly", priority: 0.8 },
		{ path: "/ressources", changefreq: "monthly", priority: 0.7 },
	];

	// Pages légales
	const legalPages = [
		{ path: "/mentions-legales", changefreq: "yearly", priority: 0.3 },
		{ path: "/cgu", changefreq: "yearly", priority: 0.3 },
		{
			path: "/politique-confidentialite",
			changefreq: "yearly",
			priority: 0.3,
		},
	];

	const today = new Date();

	// Concat toutes les pages
	const allPages = [...primaryPages, ...legalPages];

	return allPages.map((page) => ({
		url: `${baseUrl}${page.path}`,
		lastModified: today,
		changeFrequency: page.changefreq as "weekly" | "monthly" | "yearly",
		priority: page.priority,
	}));
}
