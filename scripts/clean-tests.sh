#!/bin/bash

# Script de nettoyage - Supprime les fichiers de test Lighthouse

echo "🧹 Nettoyage des fichiers de test Lighthouse..."

# Supprimer les scripts de test
rm -f scripts/check-lighthouse.js
rm -f scripts/test-lighthouse.sh
rm -f scripts/check-optimizations.sh
rm -f scripts/README.md

# Supprimer les rapports lighthouse s'ils existent
rm -f lighthouse-report.html
rm -f lighthouse-report.json
rm -f lighthouse-report-*.html

echo "✅ Nettoyage terminé !"
echo ""
echo "Fichiers conservés :"
echo "  - scripts/analyze-images.js (utile pour optimisation)"
echo "  - README.md (documentation principale)"
