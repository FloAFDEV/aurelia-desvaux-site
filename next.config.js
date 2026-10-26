// En développement, Next.js s'appuie sur eval() pour le Fast Refresh et sur un
// websocket pour le HMR. Sans ces autorisations, la CSP bloque le bundle React :
// la page est servie mais ne s'hydrate jamais (écran blanc trompeur).
// La production reste strictement inchangée : ni 'unsafe-eval', ni ws:.
const isDev = process.env.NODE_ENV !== "production";

const contentSecurityPolicy = [
	"default-src 'self'",
	`script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com https://www.google-analytics.com`,
	// Google Ads (tag AW lié à GA4) : origines relevées en navigateur, toutes en fetch/beacon
	//   pagead2.googlesyndication.com/ccm/collect — hit Ads sur chaque page vue (consentement refusé ou non)
	//   www.google.com/ccm/collect, ad.doubleclick.net/ccm/s — hits Ads une fois ad_storage accordé
	//   www.googleadservices.com/pagead/set_partitioned_cookie — arrivée depuis une annonce (gclid)
	//   analytics.google.com/g/collect — hit GA4 une fois le consentement accordé
	`connect-src 'self'${isDev ? " ws: wss:" : ""} https://*.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://stats.g.doubleclick.net https://pagead2.googlesyndication.com https://www.google.com https://ad.doubleclick.net https://www.googleadservices.com`,
	"img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com https://stats.g.doubleclick.net",
	"style-src 'self' 'unsafe-inline'",
	"font-src 'self' data:",
	"frame-src 'self' https://www.google.com https://www.googletagmanager.com",
	"object-src 'none'",
	"base-uri 'self'",
	"form-action 'self'",
	"frame-ancestors 'self'",
	// upgrade-insecure-requests casserait le http://localhost du serveur de dev
	...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ") + ";";

/** @type {import('next').NextConfig} */
const nextConfig = {
	typedRoutes: true,
	reactStrictMode: true,

	typescript: {
		ignoreBuildErrors: false,
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
		contentDispositionType: "inline",
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
		],
	},

	// Cibler ES2020+ pour éviter les polyfills inutiles
	transpilePackages: [],

	async headers() {
		return [
			{
				source: "/:path*.(svg|jpg|jpeg|png|webp|avif|gif|ico|woff|woff2|ttf|eot)",
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
					// (assouplie uniquement en dev : voir contentSecurityPolicy en haut)
					{
						key: "Content-Security-Policy",
						value: contentSecurityPolicy,
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
			// /therapies → homepage (301 permanent)
			{
				source: "/therapies",
				permanent: true,
				destination: "/",
			},
			// Domaine canonical : Vercel preview → apex
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
			// www → non-www
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
