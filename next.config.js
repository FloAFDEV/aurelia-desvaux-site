/** @type {import('next').NextConfig} */
const nextConfig = {
	typedRoutes: true,
	reactStrictMode: true,
	// Force Vercel rebuild - v2
	generateBuildId: async () => {
		return `build-${Date.now()}`;
	},

	typescript: {
		ignoreBuildErrors: process.env.NODE_ENV === "production",
	},
	eslint: {
		ignoreDuringBuilds: process.env.NODE_ENV === "production",
	},

	// ========================================
	// OPTIMISATIONS LIGHTHOUSE PERFORMANCE
	// ========================================

	// ✅ Compiler optimisé pour production
	compiler: {
		removeConsole:
			process.env.NODE_ENV === "production"
				? {
						exclude: ["error", "warn"],
				  }
				: false,
	},

	// Optimisation des images
	images: {
		formats: ["image/avif", "image/webp"],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		minimumCacheTTL: 31536000, // 1 an
		dangerouslyAllowSVG: true,
		contentDispositionType: "attachment",
		contentSecurityPolicy:
			"default-src 'self'; script-src 'none'; sandbox;",
		remotePatterns: [],
		// Définir les qualités d'image utilisées (requis pour Next.js 16+)
		qualities: [75, 80, 85, 90, 100],
	},

	// Compression Gzip/Brotli
	compress: true,

	// Supprime le header X-Powered-By
	poweredByHeader: false,

	// Désactivation des sourcemaps en production
	productionBrowserSourceMaps: false,

	// Optimisation des modules
	modularizeImports: {
		"lucide-react": {
			transform: "lucide-react/dist/esm/icons/{{kebabCase member}}",
		},
	},

	// ✅ Experimental features pour la performance
	experimental: {
		optimizePackageImports: [
			"lucide-react",
			"@radix-ui/react-icons",
			"@radix-ui/react-dialog",
			"@radix-ui/react-accordion",
			"recharts",
		],
	},

	// ✅ Webpack optimisations avancées
	webpack: (config, { isServer }) => {
		// Split chunks optimisé pour réduire le JS initial
		if (!isServer) {
			config.optimization = {
				...config.optimization,
				splitChunks: {
					chunks: "all",
					cacheGroups: {
						default: false,
						vendors: false,
						// React/Next core (toujours utilisé)
						framework: {
							name: "framework",
							test: /[\\/]node_modules[\\/](react|react-dom|next|scheduler)[\\/]/,
							priority: 40,
							enforce: true,
						},
						// Radix UI séparé (lourd)
						radixui: {
							name: "radix",
							test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
							priority: 30,
							enforce: true,
						},
						// Vendor chunk pour les libs lourdes
						vendor: {
							name: "vendor",
							chunks: "all",
							test: /node_modules/,
							priority: 20,
							minSize: 20000,
							maxSize: 150000,
						},
						// Chunk séparé pour les composants communs
						common: {
							name: "common",
							minChunks: 2,
							chunks: "all",
							priority: 10,
							reuseExistingChunk: true,
							enforce: true,
						},
					},
				},
				minimize: true,
			};
		}

		return config;
	},

	// Headers de sécurité et performance
	async headers() {
		return [
			{
				// Assets statiques (images, fonts)
				source: "/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico|woff|woff2|ttf|eot)",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
			{
				// Build Next.js
				source: "/_next/static/:path*",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
			{
				// Pages HTML - cache court avec revalidation
				source: "/:path*",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=0, must-revalidate",
					},
					// Headers de sécurité
					{
						key: "X-DNS-Prefetch-Control",
						value: "on",
					},
					{
						key: "X-Frame-Options",
						value: "SAMEORIGIN",
					},
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "Referrer-Policy",
						value: "origin-when-cross-origin",
					},
					{
						key: "Permissions-Policy",
						value: "camera=(), microphone=(), geolocation=()",
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
