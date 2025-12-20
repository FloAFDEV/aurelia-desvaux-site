# Scripts d'optimisation Lighthouse

Ce dossier contient les scripts pour tester et vérifier les optimisations Lighthouse.

---

## 📁 Scripts disponibles

### 1. `test-lighthouse.sh`
Test Lighthouse complet sans extensions Chrome.

**Usage** :
```bash
chmod +x scripts/test-lighthouse.sh
./scripts/test-lighthouse.sh [URL]

# Par défaut teste : https://aurelia-desvaux-site.vercel.app
# Ou spécifier une URL :
./scripts/test-lighthouse.sh https://localhost:3000
```

**Ce que fait le script** :
1. ✅ Crée un profil Chrome temporaire propre
2. ✅ Désactive toutes les extensions
3. ✅ Lance Lighthouse en mode Desktop
4. ✅ Génère rapports HTML + JSON
5. ✅ Affiche les scores (si `jq` installé)
6. ✅ Ouvre le rapport dans le navigateur
7. ✅ Nettoie le profil temporaire

**Sorties** :
- `lighthouse-report.html` - Rapport visuel détaillé
- `lighthouse-report.json` - Données brutes pour analyse

---

### 2. `check-optimizations.sh`
Vérification automatique des bonnes pratiques Lighthouse.

**Usage** :
```bash
chmod +x scripts/check-optimizations.sh
./scripts/check-optimizations.sh
```

**Ce que vérifie le script** :
- ✅ Configuration `next.config.js`
  - swcMinify activé
  - Compression Gzip/Brotli
  - Formats images modernes (AVIF + WebP)
- ✅ Fonts optimisées dans `layout.tsx`
  - display: swap
  - adjustFontFallback
  - Preconnect
- ✅ Support `prefers-reduced-motion` dans CSS
- ✅ Fichiers SEO présents
  - sitemap.ts
  - robots.ts
  - manifest.ts (optionnel)
- ✅ Images optimisées
  - Pas de balises `<img>`
  - Utilisation de `<Image>` Next.js
- ✅ Google Maps avec lazy loading

**Codes de sortie** :
- `0` : Tout est OK ✅
- `1` : Des erreurs trouvées ❌

---

## 🚀 Via npm

Les scripts sont aussi disponibles via `package.json` :

```bash
# Vérifier les optimisations
npm run check:lighthouse

# Test Lighthouse (production)
npm run lighthouse

# Test Lighthouse (local)
npm run lighthouse:local
```

---

## 📊 Prérequis

### Obligatoires
- Node.js >= 18
- Chrome/Chromium installé
- Bash shell (macOS, Linux, WSL sur Windows)

### Optionnels
- `jq` - Pour afficher les scores directement
  ```bash
  # macOS
  brew install jq
  
  # Linux
  sudo apt install jq
  
  # Windows (WSL)
  sudo apt install jq
  ```

- `lighthouse` global - Pour tests manuels
  ```bash
  npm install -g lighthouse
  ```

---

## 🐛 Troubleshooting

### Script non exécutable
```bash
chmod +x scripts/*.sh
```

### Lighthouse non trouvé
```bash
npm install -g lighthouse
```

### Permission denied sur profil Chrome
```bash
# Nettoyer les profils temporaires
rm -rf /tmp/lighthouse-profile-*
```

### Windows sans WSL
Utilisez Git Bash ou installez WSL :
```bash
# Git Bash (fourni avec Git pour Windows)
bash scripts/test-lighthouse.sh

# Ou utilisez npm directement
npm run lighthouse
```

---

## 📈 Interpréter les résultats

### Scores Lighthouse

| Score | État | Action |
|-------|------|--------|
| 90-100 | ✅ Excellent | Maintenir |
| 50-89 | ⚠️ À améliorer | Optimiser |
| 0-49 | ❌ Critique | Corriger d'urgence |

### Core Web Vitals

| Métrique | Bon | À améliorer | Mauvais |
|----------|-----|-------------|---------|
| LCP | < 2.5s | 2.5-4s | > 4s |
| FID | < 100ms | 100-300ms | > 300ms |
| CLS | < 0.1 | 0.1-0.25 | > 0.25 |

---

## 💡 Bonnes pratiques

### 1. Tester régulièrement
```bash
# Avant chaque déploiement
npm run check:lighthouse
npm run lighthouse
```

### 2. Tester sur plusieurs environnements
```bash
# Local
npm run lighthouse:local

# Staging
./scripts/test-lighthouse.sh https://staging.example.com

# Production
npm run lighthouse
```

### 3. Comparer les scores
```bash
# Sauvegarder les rapports avec date
mv lighthouse-report.html lighthouse-report-$(date +%Y%m%d).html
```

### 4. Désactiver le cache
Pour tests précis, désactiver le cache dans DevTools (F12).

---

## 📚 Ressources

- [Lighthouse Documentation](https://developer.chrome.com/docs/lighthouse/)
- [Web Vitals](https://web.dev/vitals/)
- [Next.js Performance](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Core Web Vitals](https://web.dev/articles/vitals)

---

## 🆘 Support

Si vous rencontrez des problèmes :

1. Vérifier les prérequis (Node.js, Chrome)
2. Vérifier les permissions (`chmod +x`)
3. Tester en navigation privée d'abord
4. Consulter `GUIDE_LIGHTHOUSE.md` pour plus de détails

---

*Scripts créés le 20 décembre 2024*
