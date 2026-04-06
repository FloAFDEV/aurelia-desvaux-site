import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://aurelia-desvaux.fr";

	// Date de dernière mise à jour réelle du contenu (à mettre à jour manuellement lors d'une modification)
	const contentLastUpdated = new Date("2026-04-06");
	const legalLastUpdated = new Date("2025-01-01");

	const primaryPages = [
		{ path: "", changefreq: "monthly", priority: 1.0 },
		{ path: "/tarifs", changefreq: "monthly", priority: 0.9 },
		{ path: "/contact", changefreq: "yearly", priority: 0.9 },
		{ path: "/pratiques", changefreq: "monthly", priority: 0.8 },
		// /therapies redirige en 301 vers /pratiques — exclue du sitemap
		{ path: "/hypnose", changefreq: "monthly", priority: 0.9 },
		{ path: "/pnl", changefreq: "monthly", priority: 0.9 },
		{ path: "/eft", changefreq: "monthly", priority: 0.9 },
		{ path: "/preparation-mentale", changefreq: "monthly", priority: 0.9 },
		{ path: "/dream-machine", changefreq: "yearly", priority: 0.7 },
		{ path: "/ressources", changefreq: "monthly", priority: 0.7 },
	];

	const legalPages = [
		{ path: "/mentions-legales", changefreq: "yearly", priority: 0.3 },
		{ path: "/cgu", changefreq: "yearly", priority: 0.3 },
		{ path: "/politique-confidentialite", changefreq: "yearly", priority: 0.3 },
	];

	return [
		...primaryPages.map((page) => ({
			url: `${baseUrl}${page.path}`,
			lastModified: contentLastUpdated,
			changeFrequency: page.changefreq as "monthly" | "yearly",
			priority: page.priority,
		})),
		...legalPages.map((page) => ({
			url: `${baseUrl}${page.path}`,
			lastModified: legalLastUpdated,
			changeFrequency: page.changefreq as "yearly",
			priority: page.priority,
		})),
	];
}
