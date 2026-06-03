import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://aurelia-desvaux.fr";
	const now = new Date();

	return [
		{ url: baseUrl,                                     lastModified: now, changeFrequency: "monthly", priority: 1.0 },
		{ url: `${baseUrl}/hypnose`,                        lastModified: now, changeFrequency: "monthly", priority: 0.9 },
		{ url: `${baseUrl}/hypnose-arret-tabac`,            lastModified: now, changeFrequency: "monthly", priority: 0.9 },
		{ url: `${baseUrl}/tarifs`,                         lastModified: now, changeFrequency: "monthly", priority: 0.9 },
		{ url: `${baseUrl}/contact`,                        lastModified: now, changeFrequency: "yearly",  priority: 0.9 },
		{ url: `${baseUrl}/pnl`,                            lastModified: now, changeFrequency: "monthly", priority: 0.8 },
		{ url: `${baseUrl}/eft`,                            lastModified: now, changeFrequency: "monthly", priority: 0.8 },
		{ url: `${baseUrl}/preparation-mentale`,            lastModified: now, changeFrequency: "monthly", priority: 0.8 },
		{ url: `${baseUrl}/a-propos`,                       lastModified: now, changeFrequency: "monthly", priority: 0.8 },
		{ url: `${baseUrl}/ressources`,                     lastModified: now, changeFrequency: "monthly", priority: 0.6 },
		{ url: `${baseUrl}/dream-machine`,                  lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
	];
}
