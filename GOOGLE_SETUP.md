# 📊 Configuration Google Analytics & Search Console

## ✅ Qu'est-ce qui a été fait ?

Tout est **pré-configuré** et prêt à l'emploi. Il suffit de remplacer les placeholders par les vrais IDs fournis par votre cliente.

---

## 🎯 Google Analytics 4 (GA4)

### Où se trouvent les configurations ?

1. **`src/app/layout.tsx`** (lignes 21-23)
   - Variable `GA_MEASUREMENT_ID` 
   - Scripts GA4 avec consentement par défaut refusé
   - Configuration automatique après acceptation des cookies

2. **`src/components/CookieBanner.tsx`**
   - Gestion du consentement GA4
   - Mise à jour automatique selon les choix utilisateur

### Comment configurer ?

#### Méthode 1 : Variable d'environnement (RECOMMANDÉ)

1. Créer un fichier `.env.local` à la racine :
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

2. Remplacer `G-XXXXXXXXXX` par le vrai ID GA4

3. Redémarrer le serveur :
```bash
npm run dev
```

#### Méthode 2 : Directement dans le code

Modifier `src/app/layout.tsx` ligne 23 :
```typescript
const GA_MEASUREMENT_ID = "G-VOTRE_VRAI_ID";
```

### Où trouver l'ID GA4 ?

1. Aller sur [Google Analytics](https://analytics.google.com/)
2. Admin (⚙️) > Flux de données
3. Cliquer sur votre site web
4. Copier **"ID de mesure"** (format: G-XXXXXXXXXX)

### Vérifier que ça fonctionne

1. Accepter les cookies sur le site
2. Ouvrir DevTools Console (F12)
3. Taper : `dataLayer`
4. Vous devriez voir un tableau avec les événements GA4

---

## 🔍 Google Search Console (GSC)

### Option 1 : Balise meta (plus simple)

**Où ?** `src/app/layout.tsx` lignes 73-77

```typescript
verification: {
  google: "VOTRE_CODE_GSC_ICI",
}
```

**Comment obtenir le code ?**
1. Aller sur [Google Search Console](https://search.google.com/search-console)
2. Ajouter une propriété
3. Choisir "Balise HTML"
4. Copier le code `content="..."`
5. Le coller dans `verification.google`

---

### Option 2 : Fichier HTML (recommandé)

1. Dans GSC, choisir "Fichier HTML"
2. Télécharger le fichier `google[...].html`
3. Le placer dans `/public/`
4. Vérifier sur GSC

**Avantage :** Pas de modification de code

---

### Option 3 : DNS (le plus propre)

1. Dans GSC, choisir "Enregistrement DNS"
2. Copier l'enregistrement TXT
3. L'ajouter dans votre DNS (chez votre hébergeur)
4. Vérifier sur GSC

**Avantage :** Aucune modification du site

---

## 🍪 Cookie Banner - Conformité RGPD

### Durée de conservation

**6 mois** (conforme CNIL)

Le consentement expire automatiquement et le banner réapparaît.

### Fonctionnement GA4 + Cookies

```
Chargement du site
    ↓
GA4 charge avec consentement REFUSÉ par défaut
    ↓
Cookie banner bloque le site
    ↓
Utilisateur fait son choix
    ↓
GA4 mis à jour selon le choix :
  - Tout accepter → analytics_storage: granted
  - Tout rejeter → analytics_storage: denied
  - Personnaliser → selon préférences
```

### Stockage des données

```javascript
localStorage["cookie-consent"] = {
  choice: "all" | "essential" | "custom",
  timestamp: 1234567890,
  preferences: {
    analytics: true,
    marketing: true
  }
}
```

---

## 📋 Checklist de mise en production

### Avant le déploiement

- [ ] Récupérer l'ID GA4 de votre cliente (format: G-XXXXXXXXXX)
- [ ] Créer `.env.local` avec `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- [ ] Tester en local : `npm run dev`
- [ ] Vérifier dans DevTools que GA4 charge après acceptation cookies

### Après le déploiement

- [ ] Vérifier le site sur Google Search Console
- [ ] Choisir méthode de vérification (balise meta / fichier / DNS)
- [ ] Soumettre le sitemap : `https://aurelia-desvaux.fr/sitemap.xml`
- [ ] Vérifier les données dans GA4 (24-48h pour voir du trafic)

### Tests cookie banner

- [ ] Tester "Tout accepter" → GA4 doit traquer
- [ ] Tester "Tout rejeter" → GA4 ne doit PAS traquer
- [ ] Tester "Personnaliser" → GA4 selon choix
- [ ] Effacer localStorage → banner réapparaît
- [ ] Attendre 6 mois (ou changer timestamp) → banner réapparaît

---

## 🛠️ Commandes utiles

```bash
# Développement
npm run dev

# Build production
npm run build

# Test production en local
npm run start

# Vérifier le sitemap
curl https://aurelia-desvaux.fr/sitemap.xml

# Effacer le consentement cookies (DevTools Console)
localStorage.clear()
```

---

## 🆘 Troubleshooting

### GA4 ne charge pas

1. Vérifier que l'ID commence par `G-` et non `UA-` (ancien format)
2. Vérifier `.env.local` ou la variable dans `layout.tsx`
3. Accepter les cookies dans le banner
4. Vérifier dans DevTools > Network > Filtrer "google-analytics"

### Cookie banner ne bloque pas le site

1. Vérifier `z-index: 9998` sur l'overlay
2. Vérifier `position: fixed` sur le banner
3. Effacer le cache navigateur

### Le consentement n'expire jamais

1. Vérifier que le timestamp est bien sauvegardé
2. Vérifier la constante `CONSENT_DURATION_MS` (6 mois)
3. Tester en changeant manuellement le timestamp dans localStorage

### GSC ne vérifie pas le site

1. **Balise meta :** Vérifier qu'elle est dans `<head>`
2. **Fichier HTML :** Vérifier qu'il est accessible via URL
3. **DNS :** Attendre 24-48h propagation DNS

---

## 📞 Contact

Pour toute question technique, contacter le développeur avec :
- Captures d'écran de la console (F12)
- URL de la page problématique
- Message d'erreur exact

---

**Dernière mise à jour :** Décembre 2024  
**Version :** 1.0 - Production Ready ✅
