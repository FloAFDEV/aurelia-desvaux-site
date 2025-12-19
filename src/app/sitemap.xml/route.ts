// app/sitemap.xml/route.ts
import { NextResponse } from "next/server";

// Base URL
const baseUrl = "https://aurelia-desvaux.fr";

// Définition de toutes les pages principales et de leurs sous-pages
// On peut étendre facilement pour ajouter de nouvelles sections
const pages = [
	{ path: "/", changefreq: "weekly", priority: 1.0 },
	{ path: "/tarifs", changefreq: "monthly", priority: 0.8 },
	{ path: "/contact", changefreq: "monthly", priority: 0.7 },
	{ path: "/pratiques", changefreq: "monthly", priority: 0.7 },
	{ path: "/therapies", changefreq: "monthly", priority: 0.7 },
	{ path: "/mentions-legales", changefreq: "yearly", priority: 0.3 },
	{ path: "/cgu", changefreq: "yearly", priority: 0.3 },
	{ path: "/politique-confidentialite", changefreq: "yearly", priority: 0.3 },
	// Sous-pages Thérapies
	{ path: "/hypnose", changefreq: "monthly", priority: 0.9 },
	{ path: "/pnl", changefreq: "monthly", priority: 0.9 },
	{ path: "/eft", changefreq: "monthly", priority: 0.9 },
	{ path: "/preparation-mentale", changefreq: "monthly", priority: 0.9 },
	{ path: "/dream-machine", changefreq: "monthly", priority: 0.8 },
	{ path: "/ressources", changefreq: "monthly", priority: 0.7 },
];

// Si tu as d’autres sections à venir, tu peux simplement ajouter ici
// Exemple : { path: "/nouvelle-page", changefreq: "monthly", priority: 0.7 }

export const GET = async () => {
	const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

	const urlsXml = pages
		.map(
			(page) => `
  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
		)
		.join("");

	const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>`;

	return new NextResponse(sitemapXml, {
		headers: {
			"Content-Type": "application/xml",
		},
	});
};
