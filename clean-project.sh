#!/bin/bash

echo "🧹 Nettoyage du projet Next.js..."
echo ""

# Supprimer les scripts de test Lighthouse
echo "📁 Suppression des scripts de test Lighthouse..."
rm -f scripts/check-lighthouse.js && echo "  ✅ check-lighthouse.js supprimé"
rm -f scripts/test-lighthouse.sh && echo "  ✅ test-lighthouse.sh supprimé"
rm -f scripts/check-optimizations.sh && echo "  ✅ check-optimizations.sh supprimé"
rm -f scripts/README.md && echo "  ✅ scripts/README.md supprimé"

# Supprimer les rapports lighthouse s'ils existent
if ls lighthouse-report*.html 1> /dev/null 2>&1; then
    rm -f lighthouse-report*.html && echo "  ✅ Rapports HTML Lighthouse supprimés"
fi

if ls lighthouse-report*.json 1> /dev/null 2>&1; then
    rm -f lighthouse-report*.json && echo "  ✅ Rapports JSON Lighthouse supprimés"
fi

echo ""
echo "✅ Nettoyage terminé !"
echo ""
echo "📦 Fichiers conservés :"
echo "  - scripts/analyze-images.js (optimisation continue)"
echo "  - README.md (documentation principale)"
echo ""
echo "🚀 Projet prêt pour la production !"
