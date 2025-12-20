#!/bin/bash

# Script de vérification des optimisations Lighthouse
# Vérifie que toutes les bonnes pratiques sont en place

set -e

echo "🔍 Vérification des optimisations Lighthouse"
echo "============================================="
echo ""

# Couleurs
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

ERRORS=0
WARNINGS=0

# Fonction de vérification
check() {
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✅ $2${NC}"
    else
        echo -e "${RED}❌ $2${NC}"
        ERRORS=$((ERRORS + 1))
    fi
}

warn() {
    echo -e "${YELLOW}⚠️  $1${NC}"
    WARNINGS=$((WARNINGS + 1))
}

# 1. Vérifier next.config.js
echo "📦 Configuration Next.js"
echo "------------------------"

if grep -q "swcMinify: true" next.config.js; then
    check 0 "swcMinify activé"
else
    check 1 "swcMinify manquant dans next.config.js"
fi

if grep -q "compress: true" next.config.js; then
    check 0 "Compression Gzip/Brotli activée"
else
    check 1 "Compression manquante dans next.config.js"
fi

if grep -q "productionBrowserSourceMaps: false" next.config.js; then
    check 0 "Source maps désactivées en production"
else
    warn "Source maps non désactivées (recommandé pour la performance)"
fi

if grep -q "formats.*avif.*webp" next.config.js; then
    check 0 "Formats images modernes (AVIF + WebP)"
else
    check 1 "Formats images modernes manquants"
fi

echo ""

# 2. Vérifier layout.tsx
echo "📄 Layout principal"
echo "-------------------"

if grep -q "preconnect" src/app/layout.tsx; then
    check 0 "Preconnect présent"
else
    check 1 "Preconnect manquant dans layout.tsx"
fi

if grep -q "display.*swap" src/app/layout.tsx; then
    check 0 "Font display: swap configuré"
else
    check 1 "Font display: swap manquant"
fi

if grep -q "adjustFontFallback: true" src/app/layout.tsx; then
    check 0 "adjustFontFallback activé (réduit CLS)"
else
    warn "adjustFontFallback manquant (recommandé pour CLS)"
fi

echo ""

# 3. Vérifier globals.css
echo "🎨 Styles globaux"
echo "-----------------"

if grep -q "prefers-reduced-motion" src/app/globals.css; then
    check 0 "Support prefers-reduced-motion"
else
    check 1 "prefers-reduced-motion manquant dans globals.css"
fi

if grep -q "font-display.*swap" src/app/globals.css; then
    check 0 "Font display: swap dans CSS"
else
    warn "Font display: swap manquant dans globals.css"
fi

echo ""

# 4. Vérifier les fichiers SEO
echo "🔎 Fichiers SEO"
echo "---------------"

if [ -f "src/app/sitemap.ts" ]; then
    check 0 "sitemap.ts présent"
else
    check 1 "sitemap.ts manquant"
fi

if [ -f "src/app/robots.ts" ]; then
    check 0 "robots.ts présent"
else
    check 1 "robots.ts manquant"
fi

if [ -f "src/app/manifest.ts" ]; then
    check 0 "manifest.ts présent (PWA)"
else
    warn "manifest.ts manquant (optionnel pour PWA)"
fi

echo ""

# 5. Vérifier les images non optimisées
echo "🖼️  Images"
echo "----------"

IMG_COUNT=$(find src -name "*.tsx" -o -name "*.jsx" | xargs grep -l "<img" | wc -l || echo "0")

if [ "$IMG_COUNT" -eq 0 ]; then
    check 0 "Aucune balise <img> trouvée (utilise <Image>)"
else
    check 1 "$IMG_COUNT fichiers contiennent des balises <img> au lieu de <Image>"
    echo ""
    echo "Fichiers concernés :"
    find src -name "*.tsx" -o -name "*.jsx" | xargs grep -l "<img" | head -5
fi

echo ""

# 6. Vérifier Google Maps lazy loading
echo "🗺️  Google Maps"
echo "---------------"

if grep -q "GoogleMapIframe" src/components/Contact.tsx 2>/dev/null; then
    check 0 "Google Maps avec lazy loading"
else
    warn "Google Maps pourrait être optimisé avec lazy loading"
fi

echo ""

# Résumé
echo "======================================="
echo ""

if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo -e "${GREEN}✨ Toutes les optimisations sont en place !${NC}"
    echo ""
    echo "🚀 Vous pouvez maintenant tester avec :"
    echo "   npm run lighthouse"
    echo "   ou"
    echo "   ./scripts/test-lighthouse.sh"
    exit 0
elif [ $ERRORS -eq 0 ]; then
    echo -e "${YELLOW}⚠️  $WARNINGS avertissements (optimisations recommandées)${NC}"
    echo ""
    echo "Le site est bien optimisé mais peut être amélioré."
    exit 0
else
    echo -e "${RED}❌ $ERRORS erreurs trouvées${NC}"
    echo -e "${YELLOW}⚠️  $WARNINGS avertissements${NC}"
    echo ""
    echo "Veuillez corriger les erreurs avant de tester avec Lighthouse."
    exit 1
fi
