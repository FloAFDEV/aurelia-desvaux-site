#!/usr/bin/env node

/**
 * Script de vérification des optimisations Lighthouse
 * Vérifie que les bonnes pratiques sont appliquées
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Vérification des optimisations Lighthouse...\n');

let errors = 0;
let warnings = 0;
let success = 0;

// Fonction helper
function checkFile(filePath, checks) {
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Fichier introuvable: ${filePath}`);
    errors++;
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  checks.forEach(({ pattern, message, type = 'error' }) => {
    const found = pattern.test(content);
    const shouldFind = pattern.toString().includes('(?!');

    if ((shouldFind && !found) || (!shouldFind && found)) {
      if (type === 'warning') {
        console.warn(`⚠️  ${message}`);
        warnings++;
      } else {
        console.error(`❌ ${message}`);
        errors++;
      }
    } else {
      console.log(`✅ ${message}`);
      success++;
    }
  });
}

// Vérifications
console.log('📋 Vérification de next.config.js...');
checkFile('next.config.js', [
  {
    pattern: /formats:\s*\[['"]image\/avif['"],\s*['"]image\/webp['"]\]/,
    message: 'Formats images optimisés (AVIF, WebP)',
  },
  {
    pattern: /swcMinify:\s*true/,
    message: 'SWC minification activée',
  },
  {
    pattern: /compress:\s*true/,
    message: 'Compression activée',
  },
  {
    pattern: /productionBrowserSourceMaps:\s*false/,
    message: 'Sourcemaps désactivées en production',
  },
]);

console.log('\n📋 Vérification de src/app/layout.tsx...');
checkFile('src/app/layout.tsx', [
  {
    pattern: /<link\s+rel=['"]preconnect['"]/,
    message: 'Preconnect configuré',
  },
  {
    pattern: /display:\s*['"]swap['"]/,
    message: 'Font display swap',
  },
  {
    pattern: /<Suspense/,
    message: 'Suspense utilisé pour lazy loading',
  },
]);

console.log('\n📋 Vérification de src/app/globals.css...');
checkFile('src/app/globals.css', [
  {
    pattern: /@media\s+\(prefers-reduced-motion/,
    message: 'Support de prefers-reduced-motion',
  },
  {
    pattern: /text-rendering:\s*optimizeLegibility/,
    message: 'Optimisation du rendu de texte',
  },
  {
    pattern: /-webkit-font-smoothing:\s*antialiased/,
    message: 'Antialiasing des fonts',
  },
]);

// Vérification des images
console.log('\n📋 Recherche d\'images non optimisées...');
const componentsDir = 'src/components';
if (fs.existsSync(componentsDir)) {
  const files = fs.readdirSync(componentsDir);
  
  files.forEach(file => {
    if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      const filePath = path.join(componentsDir, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Recherche de <img> non optimisées
      const imgTags = content.match(/<img[^>]*>/g) || [];
      if (imgTags.length > 0) {
        console.warn(`⚠️  ${file}: Contient ${imgTags.length} balise(s) <img> (utiliser <Image> de Next.js)`);
        warnings++;
      }
    }
  });
}

// Vérification des fichiers générés
console.log('\n📋 Vérification des fichiers SEO...');
const seoFiles = [
  { path: 'src/app/sitemap.ts', name: 'Sitemap' },
  { path: 'src/app/robots.ts', name: 'Robots.txt' },
  { path: 'src/app/manifest.ts', name: 'Manifest PWA' },
];

seoFiles.forEach(({ path: filePath, name }) => {
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${name} configuré`);
    success++;
  } else {
    console.warn(`⚠️  ${name} manquant`);
    warnings++;
  }
});

// Résumé
console.log('\n' + '='.repeat(50));
console.log('📊 RÉSUMÉ DES VÉRIFICATIONS\n');
console.log(`✅ Réussis: ${success}`);
console.log(`⚠️  Avertissements: ${warnings}`);
console.log(`❌ Erreurs: ${errors}`);

if (errors === 0 && warnings === 0) {
  console.log('\n🎉 Toutes les optimisations sont en place!');
  console.log('💡 Lancez `npm run build` puis testez avec Lighthouse.');
  process.exit(0);
} else if (errors === 0) {
  console.log('\n⚠️  Des améliorations sont recommandées.');
  console.log('💡 Consultez le guide d\'optimisation pour plus de détails.');
  process.exit(0);
} else {
  console.log('\n❌ Des corrections sont nécessaires.');
  console.log('💡 Corrigez les erreurs avant de continuer.');
  process.exit(1);
}
