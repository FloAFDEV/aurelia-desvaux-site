#!/usr/bin/env node

/**
 * Script pour trouver et analyser les images non optimisées
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Analyse des images dans l\'application...\n');

let totalImages = 0;
let imgTags = 0;
let nextImages = 0;
let issuesFound = [];

// Fonction pour scanner récursivement
function scanDirectory(dir, baseDir = dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Ignorer node_modules, .next, etc.
      if (!['node_modules', '.next', '.git', 'dist', 'build'].includes(file)) {
        scanDirectory(filePath, baseDir);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      const content = fs.readFileSync(filePath, 'utf8');
      const relativePath = path.relative(baseDir, filePath);

      // Chercher <img>
      const imgMatches = content.match(/<img[^>]*>/g) || [];
      if (imgMatches.length > 0) {
        imgTags += imgMatches.length;
        issuesFound.push({
          type: 'img-tag',
          file: relativePath,
          count: imgMatches.length,
          lines: imgMatches.map(match => {
            const lines = content.split('\n');
            const lineNumber = lines.findIndex(line => line.includes(match)) + 1;
            return { line: lineNumber, code: match.trim() };
          }),
        });
      }

      // Chercher next/image
      const hasNextImage = /<Image[\s\S]*?\/>/g.test(content);
      if (hasNextImage) {
        const imageMatches = content.match(/<Image[\s\S]*?\/>/g) || [];
        nextImages += imageMatches.length;

        // Vérifier si les images ont des props importantes
        imageMatches.forEach(match => {
          const issues = [];
          
          if (!match.includes('alt=')) {
            issues.push('Missing alt attribute');
          }
          if (!match.includes('width=') && !match.includes('fill')) {
            issues.push('Missing width or fill prop');
          }
          if (!match.includes('height=') && !match.includes('fill')) {
            issues.push('Missing height or fill prop');
          }
          if (!match.includes('sizes=')) {
            issues.push('Missing sizes prop (recommended for responsive)');
          }

          if (issues.length > 0) {
            const lines = content.split('\n');
            const lineNumber = lines.findIndex(line => line.includes(match.substring(0, 30))) + 1;
            
            issuesFound.push({
              type: 'next-image-incomplete',
              file: relativePath,
              line: lineNumber,
              issues: issues,
              code: match.trim().substring(0, 100) + '...',
            });
          }
        });
      }

      totalImages = imgTags + nextImages;
    }
  });
}

// Scanner src/
if (fs.existsSync('src')) {
  console.log('📂 Scan du dossier src/...\n');
  scanDirectory('src');
}

// Résultats
console.log('=' .repeat(60));
console.log('📊 RÉSULTATS DE L\'ANALYSE\n');

console.log(`✅ Images Next.js optimisées : ${nextImages}`);
console.log(`❌ Balises <img> non optimisées : ${imgTags}`);
console.log(`📈 Total d'images trouvées : ${totalImages}\n`);

if (issuesFound.length === 0) {
  console.log('🎉 Aucun problème détecté ! Toutes vos images sont optimisées.\n');
} else {
  console.log('⚠️  PROBLÈMES DÉTECTÉS :\n');

  // Grouper par type
  const imgTagIssues = issuesFound.filter(i => i.type === 'img-tag');
  const incompleteIssues = issuesFound.filter(i => i.type === 'next-image-incomplete');

  if (imgTagIssues.length > 0) {
    console.log('🔴 BALISES <img> À REMPLACER PAR <Image> :\n');
    imgTagIssues.forEach(issue => {
      console.log(`📄 ${issue.file}`);
      console.log(`   Nombre de <img> : ${issue.count}\n`);
      
      issue.lines.forEach(({ line, code }) => {
        console.log(`   Ligne ${line}:`);
        console.log(`   ${code}\n`);
      });
      
      console.log(`   💡 Remplacer par :`);
      console.log(`   import Image from 'next/image';`);
      console.log(`   <Image src="..." alt="..." width={800} height={600} loading="lazy" />\n`);
      console.log('-'.repeat(60) + '\n');
    });
  }

  if (incompleteIssues.length > 0) {
    console.log('🟡 IMAGES NEXT.JS INCOMPLÈTES :\n');
    incompleteIssues.forEach(issue => {
      console.log(`📄 ${issue.file}:${issue.line}`);
      console.log(`   ${issue.code}`);
      console.log(`   ⚠️  Problèmes :`);
      issue.issues.forEach(i => console.log(`      - ${i}`));
      console.log();
    });
  }
}

// Conseils
console.log('=' .repeat(60));
console.log('💡 CONSEILS D\'OPTIMISATION\n');

if (imgTags > 0) {
  console.log('1. Remplacer TOUTES les <img> par <Image> de Next.js');
  console.log('   → Gain : meilleur lazy loading, formats modernes (WebP/AVIF)');
  console.log('   → Impact Lighthouse : +5 à +15 points Performance\n');
}

if (incompleteIssues.length > 0) {
  console.log('2. Ajouter les props manquantes sur vos <Image>');
  console.log('   - alt : pour le SEO et l\'accessibilité');
  console.log('   - width/height ou fill : évite le CLS');
  console.log('   - sizes : optimise le responsive');
  console.log('   → Impact Lighthouse : +2 à +5 points Accessibility & Performance\n');
}

console.log('3. Compresser vos images en WebP/AVIF');
console.log('   npm install -g sharp-cli');
console.log('   sharp -i input.jpg -o output.webp --webp-quality 85\n');

console.log('4. Tester après modifications :');
console.log('   npm run check:lighthouse');
console.log('   npm run build && npm run lighthouse\n');

// Estimation de l'impact
if (imgTags > 0 || incompleteIssues.length > 0) {
  console.log('=' .repeat(60));
  console.log('📈 ESTIMATION DE L\'IMPACT\n');
  
  const potentialGain = Math.min(
    (imgTags * 2) + (incompleteIssues.length * 0.5),
    20
  );
  
  console.log(`Impact estimé sur le score Lighthouse :`);
  console.log(`Performance : +${Math.round(potentialGain)} points`);
  console.log(`Accessibility : +${Math.min(incompleteIssues.length * 2, 10)} points`);
  console.log(`SEO : +${Math.min(imgTags, 5)} points\n`);
  
  console.log(`⏱️  Temps estimé pour corriger : ${Math.ceil((imgTags + incompleteIssues.length) * 3 / 60)}h`);
}

console.log('\n✨ Bon courage pour les optimisations !');

// Exit code
process.exit(imgTags > 0 ? 1 : 0);
