import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Aurélia Desvaux - Thérapies Brèves",
		short_name: "Aurélia Desvaux",
		description:
			"Thérapeute en Hypnose Ericksonienne, PNL et EFT à Valbonne Sophia-Antipolis",
		start_url: "/",
		display: "standalone",
		background_color: "#F8F4F4",
		theme_color: "#E8D5D5",
		orientation: "portrait-primary",
		icons: [
			{
				src: "/favicon.ico",
				sizes: "64x64",
				type: "image/x-icon",
			},
			{
				src: "/favicon-apple.png",
				sizes: "192x192",
				type: "image/png",
				purpose: "maskable",
			},
			{
				src: "/og-image.webp",
				sizes: "512x512",
				type: "image/webp",
				purpose: "any",
			},
		],
		categories: ["health", "wellness", "therapy"],
		lang: "fr-FR",
	};
}
