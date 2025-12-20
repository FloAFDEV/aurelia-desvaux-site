#!/bin/bash

# Script de test Lighthouse optimisé
# Test le site en mode "propre" sans extensions Chrome

set -e

echo "🚀 Test Lighthouse - Aurelia Desvaux Site"
echo "=========================================="
echo ""

# Couleurs pour l'affichage
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# URL du site
SITE_URL="${1:-https://aurelia-desvaux-site.vercel.app}"

echo "📍 URL testée : $SITE_URL"
echo ""

# Créer un profil Chrome temporaire
TIMESTAMP=$(date +%s)
PROFILE_DIR="/tmp/lighthouse-profile-$TIMESTAMP"
mkdir -p "$PROFILE_DIR"

echo "✅ Profil Chrome temporaire créé : $PROFILE_DIR"
echo ""

# Vérifier si lighthouse est installé
if ! command -v lighthouse &> /dev/null; then
    echo -e "${YELLOW}⚠️  Lighthouse n'est pas installé globalement${NC}"
    echo "Installation en cours..."
    npm install -g lighthouse
    echo -e "${GREEN}✅ Lighthouse installé${NC}"
    echo ""
fi

# Lancer Lighthouse
echo "🔍 Lancement de Lighthouse..."
echo "Cela peut prendre 1-2 minutes..."
echo ""

lighthouse "$SITE_URL" \
  --chrome-flags="--user-data-dir=$PROFILE_DIR --disable-extensions --no-sandbox --disable-dev-shm-usage" \
  --output=html \
  --output=json \
  --output-path="./lighthouse-report" \
  --preset=desktop \
  --throttling-method=simulate \
  --view \
  --quiet

echo ""
echo -e "${GREEN}✅ Test Lighthouse terminé !${NC}"
echo ""
echo "📊 Rapports générés :"
echo "  - HTML : ./lighthouse-report.html"
echo "  - JSON : ./lighthouse-report.json"
echo ""

# Nettoyer le profil temporaire
rm -rf "$PROFILE_DIR"
echo -e "${GREEN}✅ Profil temporaire nettoyé${NC}"
echo ""

# Parser le JSON pour afficher les scores
if command -v jq &> /dev/null; then
    PERF=$(jq -r '.categories.performance.score * 100' lighthouse-report.json 2>/dev/null || echo "N/A")
    ACCESS=$(jq -r '.categories.accessibility.score * 100' lighthouse-report.json 2>/dev/null || echo "N/A")
    BP=$(jq -r '.categories["best-practices"].score * 100' lighthouse-report.json 2>/dev/null || echo "N/A")
    SEO=$(jq -r '.categories.seo.score * 100' lighthouse-report.json 2>/dev/null || echo "N/A")

    echo "🎯 SCORES LIGHTHOUSE :"
    echo "  Performance      : $PERF/100"
    echo "  Accessibilité    : $ACCESS/100"
    echo "  Bonnes pratiques : $BP/100"
    echo "  SEO              : $SEO/100"
    echo ""
else
    echo -e "${YELLOW}💡 Installez 'jq' pour voir les scores directement : brew install jq${NC}"
    echo ""
fi

echo "🌐 Rapport HTML ouvert dans votre navigateur"
echo ""
echo -e "${GREEN}✨ Test terminé avec succès !${NC}"
