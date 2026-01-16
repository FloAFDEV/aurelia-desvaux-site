/** @type {import('next').NextConfig} */
const nextConfig = {
	// ===============================
	// ROOT EXPLICIT POUR OUTPUT TRACING
	// ===============================
	outputFileTracingRoot: __dirname, // ← ajoute cette ligne

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

	compiler: {
		removeConsole:
			process.env.NODE_ENV === "production"
				? {
						exclude: ["error", "warn"],
				  }
				: false,
	},

	images: {
		formats: ["image/avif", "image/webp"],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		minimumCacheTTL: 31536000,
		dangerouslyAllowSVG: true,
		contentDispositionType: "attachment",
		contentSecurityPolicy:
			"default-src 'self'; script-src 'none'; sandbox;",
		remotePatterns: [],
		qualities: [75, 80, 85, 90, 100],
	},

	compress: true,
	poweredByHeader: false,
	productionBrowserSourceMaps: false,

	modularizeImports: {
		"lucide-react": {
			transform: "lucide-react/dist/esm/icons/{{kebabCase member}}",
		},
	},

	experimental: {
		optimizePackageImports: [
			"lucide-react",
			"@radix-ui/react-icons",
			"@radix-ui/react-dialog",
			"@radix-ui/react-accordion",
			"recharts",
		],
	},

	// Cibler ES2020+ pour éviter les polyfills inutiles
	transpilePackages: [],

	webpack: (config, { isServer }) => {
		// Configuration pour éviter les polyfills inutiles
		config.resolve.alias = {
			...config.resolve.alias,
		};

		if (!isServer) {
			config.optimization = {
				...config.optimization,
				splitChunks: {
					chunks: "all",
					cacheGroups: {
						default: false,
						vendors: false,
						framework: {
							name: "framework",
							test: /[\\/]node_modules[\\/](react|react-dom|next|scheduler)[\\/]/,
							priority: 40,
							enforce: true,
						},
						radixui: {
							name: "radix",
							test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
							priority: 30,
							enforce: true,
						},
						vendor: {
							name: "vendor",
							chunks: "all",
							test: /node_modules/,
							priority: 20,
							minSize: 20000,
							maxSize: 150000,
						},
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

	async headers() {
		return [
			{
				source: "/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico|woff|woff2|ttf|eot)",
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
			{
				source: "/:path*",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=0, must-revalidate",
					},
					{ key: "X-DNS-Prefetch-Control", value: "on" },
					{ key: "X-Frame-Options", value: "SAMEORIGIN" },
					{ key: "X-Content-Type-Options", value: "nosniff" },
					{
						key: "Referrer-Policy",
						value: "origin-when-cross-origin",
					},
					{
						key: "Permissions-Policy",
						value: "camera=(), microphone=(), geolocation=()",
					},
					// HSTS - Force HTTPS pendant 2 ans
					{
						key: "Strict-Transport-Security",
						value: "max-age=63072000; includeSubDomains; preload",
					},
					// COOP - Isolation de l'origine pour sécurité XSS
					{
						key: "Cross-Origin-Opener-Policy",
						value: "same-origin",
					},
					// CORP - Contrôle des ressources cross-origin
					{
						key: "Cross-Origin-Resource-Policy",
						value: "same-origin",
					},
					// CSP - Content Security Policy stricte
					{
						key: "Content-Security-Policy",
						value:
							"default-src 'self'; " +
							"script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; " +
							"style-src 'self' 'unsafe-inline'; " +
							"img-src 'self' data: https: blob:; " +
							"font-src 'self' data:; " +
							"connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com; " +
							"frame-src 'self' https://www.medoucine.com; " +
							"object-src 'none'; " +
							"base-uri 'self'; " +
							"form-action 'self' https://www.medoucine.com; " +
							"frame-ancestors 'self'; " +
							"upgrade-insecure-requests;",
					},
				],
			},
		];
	},

	// ========================================
	// REDIRECT VERS DOMAINE PRINCIPAL
	// ========================================
	async redirects() {
		return [
			{
				source: "/:path*",
				has: [
					{
						type: "host",
						value: "aurelia-desvaux-site.vercel.app",
					},
				],
				permanent: true,
				destination: "https://aurelia-desvaux.fr/:path*",
			},
			{
				source: "/:path*",
				has: [
					{
						type: "host",
						value: "www.aurelia-desvaux.fr",
					},
				],
				permanent: true,
				destination: "https://aurelia-desvaux.fr/:path*",
			},
		];
	},
};

module.exports = nextConfig;
