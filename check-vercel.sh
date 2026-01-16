#!/bin/bash

echo "🔍 DIAGNOSTIC VERCEL DEPLOYMENT"
echo "================================"
echo ""

# 1. Git Status
echo "1️⃣ Git Status Local"
git status --short
echo ""

# 2. Derniers commits
echo "2️⃣ Derniers commits (3)"
git log --oneline -3
echo ""

# 3. Remote
echo "3️⃣ Remote GitHub"
git remote -v | grep origin
echo ""

# 4. Différence local/remote
echo "4️⃣ Synchronisation Local ↔ Remote"
git fetch origin 2>/dev/null
LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse origin/main)

if [ "$LOCAL" == "$REMOTE" ]; then
    echo "✅ Local = Remote (synchronisé)"
else
    echo "❌ Local != Remote"
    echo "   Local:  $LOCAL"
    echo "   Remote: $REMOTE"
fi
echo ""

# 5. Package.json
echo "5️⃣ Fichiers requis"
if [ -f "package.json" ]; then
    echo "✅ package.json"
else
    echo "❌ package.json MANQUANT"
fi

if [ -f "next.config.js" ]; then
    echo "✅ next.config.js"
else
    echo "❌ next.config.js MANQUANT"
fi
echo ""

# 6. Build test
echo "6️⃣ Test build local (rapide)"
if npm run build > /tmp/build.log 2>&1; then
    echo "✅ Build local réussi"
else
    echo "❌ Build local échoué"
    echo "   Voir /tmp/build.log pour détails"
fi
echo ""

echo "================================"
echo "✅ Diagnostic terminé"
echo ""
echo "📋 ACTIONS À FAIRE SUR VERCEL :"
echo ""
echo "1. Ouvrez https://vercel.com/dashboard"
echo "2. Cliquez sur votre projet"
echo "3. Onglet 'Deployments'"
echo "4. Vérifiez le dernier déploiement"
echo ""
echo "Si aucun déploiement :"
echo "   → Settings → Git → Reconnectez GitHub"
echo "   → OU lancez : vercel --prod"
echo ""
