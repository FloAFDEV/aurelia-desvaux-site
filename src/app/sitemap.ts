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
		// /therapies et /pratiques redirigent vers / — exclues du sitemap
		{ path: "/hypnose", changefreq: "monthly", priority: 0.9 },
		{ path: "/pnl", changefreq: "monthly", priority: 0.9 },
		{ path: "/eft", changefreq: "monthly", priority: 0.9 },
		{ path: "/preparation-mentale", changefreq: "monthly", priority: 0.9 },
		{ path: "/dream-machine", changefreq: "yearly", priority: 0.7 },
		{ path: "/ressources", changefreq: "monthly", priority: 0.7 },
	];

	// Pages légales exclues : elles ont robots noindex, les inclure dans le sitemap
	// créerait une contradiction et gaspillerait le crawl budget.

	const localPages = [
		{ path: "/valbonne", changefreq: "monthly", priority: 0.8 },
		{ path: "/sophia-antipolis", changefreq: "monthly", priority: 0.8 },
		{ path: "/antibes", changefreq: "monthly", priority: 0.8 },
		{ path: "/biot", changefreq: "monthly", priority: 0.7 },
		{ path: "/mougins", changefreq: "monthly", priority: 0.7 },
	];

	return [
		...primaryPages.map((page) => ({
			url: `${baseUrl}${page.path}`,
			lastModified: contentLastUpdated,
			changeFrequency: page.changefreq as "monthly" | "yearly",
			priority: page.priority,
		})),
		...localPages.map((page) => ({
			url: `${baseUrl}${page.path}`,
			lastModified: contentLastUpdated,
			changeFrequency: page.changefreq as "monthly",
			priority: page.priority,
		})),
	];
}
