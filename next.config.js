/** @type {import('next').NextConfig} */
const nextConfig = {
	typedRoutes: true,
	reactStrictMode: true,

	typescript: {
		ignoreBuildErrors: process.env.NODE_ENV === "production",
	},
	eslint: {
		ignoreDuringBuilds: process.env.NODE_ENV === "production",
	},

	// ========================================
	// OPTIMISATIONS LIGHTHOUSE PERFORMANCE
	// ========================================

	// Optimisation des images
	images: {
		formats: ["image/avif", "image/webp"], // Formats modernes
		deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Breakpoints optimisés
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Tailles icônes/thumbs
		minimumCacheTTL: 60, // Cache 60s minimum
		dangerouslyAllowSVG: true,
		contentDispositionType: "attachment",
		contentSecurityPolicy:
			"default-src 'self'; script-src 'none'; sandbox;",
	},

	// Compression Gzip/Brotli
	compress: true,

	// Supprime le header X-Powered-By
	poweredByHeader: false,

	// Headers de sécurité et performance
	async headers() {
		return [
			{
				source: "/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico|woff|woff2)",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
			{
				source: "/_next/static/:path*",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
