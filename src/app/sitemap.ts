import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aurelia-desvaux.fr'
  
  // Pages statiques principales
  const staticPages = [
    '',
    '/hypnose',
    '/pnl',
    '/eft',
    '/preparation-mentale',
    '/dream-machine',
    '/ressources',
    '/tarifs',
    '/pratiques',
    '/therapies',
  ]

  // Pages légales
  const legalPages = [
    '/mentions-legales',
    '/politique-confidentialite',
    '/cgu',
  ]

  return [
    // Page d'accueil - priorité max
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Pages principales - haute priorité
    ...staticPages.slice(1).map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // Pages légales - basse priorité
    ...legalPages.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    })),
  ]
}
