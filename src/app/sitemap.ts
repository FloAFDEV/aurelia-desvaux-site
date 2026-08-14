import { MetadataRoute } from "next";
import { SEO } from "@/lib/seo";

const base = SEO.siteUrl;
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{ url: base,                                          lastModified: now, changeFrequency: "monthly", priority: 1.0 },
		{ url: `${base}/hypnose`,                             lastModified: now, changeFrequency: "monthly", priority: 0.9 },
		{ url: `${base}/hypnose-arret-tabac`,                 lastModified: now, changeFrequency: "monthly", priority: 0.9 },
		{ url: `${base}/tarifs`,                              lastModified: now, changeFrequency: "monthly", priority: 0.9 },
		{ url: `${base}/contact`,                             lastModified: now, changeFrequency: "yearly",  priority: 0.9 },
		{ url: `${base}/pnl`,                                 lastModified: now, changeFrequency: "monthly", priority: 0.8 },
		{ url: `${base}/eft`,                                 lastModified: now, changeFrequency: "monthly", priority: 0.8 },
		{ url: `${base}/preparation-mentale`,                 lastModified: now, changeFrequency: "monthly", priority: 0.8 },
		{ url: `${base}/stress-anxiete`,                      lastModified: now, changeFrequency: "monthly", priority: 0.8 },
		{ url: `${base}/confiance-en-soi`,                    lastModified: now, changeFrequency: "monthly", priority: 0.8 },
		// Page d'entrée émotionnelle sur l'arrêt du tabac : priorité volontairement
		// inférieure à /hypnose-arret-tabac, qui reste la page de référence (FAQ, tarif, schémas).
		{ url: `${base}/arret-tabac`,                         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
		{ url: `${base}/a-propos`,                            lastModified: now, changeFrequency: "monthly", priority: 0.8 },
		{ url: `${base}/ressources`,                          lastModified: now, changeFrequency: "monthly", priority: 0.6 },
		{ url: `${base}/dream-machine`,                       lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
	];
}
