# WALS

Vitrine Next.js de WALS. La plateforme est actuellement en cours de développement et présente deux futurs parcours :

- `/commercants` : fidélité digitale destinée directement aux commerces ;
- `/partenaires` : parcours en marque blanche destiné aux agences, indépendants et commerciaux.

La racine `/` oriente explicitement vers le parcours correspondant. Aucun parcours commercial n'est présenté comme déjà ouvert.

## Stack

- Next.js App Router + TypeScript
- React
- Manrope via `next/font` avec fichiers de police auto-hébergés par Next.js
- Supabase pour les inscriptions de lancement et les données applicatives
- Vercel Analytics / Speed Insights
- Vitest + Playwright

## Développement

```bash
npm install
npm run dev
```

Contrôles avant mise en production :

```bash
npm run typecheck
npm run lint
npm run test
npm run build
npm run test:e2e
```

La CI exécute les tests E2E sur desktop, tablette et mobile, ainsi que des budgets locaux de FCP/LCP sur le contenu critique.

## Variables d'environnement

Copier `.env.example` vers `.env.local` et renseigner les valeurs Supabase.

L'indexation est volontairement explicite : `NEXT_PUBLIC_INDEXABLE=true` **et** `NEXT_PUBLIC_SITE_URL=https://wals.fr` sont requis pour autoriser `robots` et le sitemap. Les previews et environnements locaux doivent garder `NEXT_PUBLIC_INDEXABLE=false`.

Les champs `LEGAL_*` doivent être complétés avec les informations juridiques réelles avant ouverture commerciale. Le code ne fournit aucun fallback fictif pour la dénomination, le SIREN, le siège ou l'hébergeur légal.

## Vérité produit

Les fonctionnalités publiques portent un statut explicite : `Aperçu produit` ou `En préparation`. Les interfaces et tableaux de bord remplis utilisent des données de démonstration clairement signalées comme fictives.

Le simulateur partenaire propose les scénarios de revente `29 / 39 / 49 / 59 / 69 €`. Ces montants servent uniquement à visualiser différents modèles de chiffre d'affaires brut : ils ne correspondent pas au prix WALS, ne sont pas imposés aux futurs partenaires et ne constituent aucune promesse de revenu.

## Liste de lancement

Tant que WALS n'est pas ouvert, les pages commerçants et partenaires ne demandent pas de dossier ni de demande d'accès. Le visiteur renseigne uniquement son adresse email pour être prévenu de la sortie du parcours choisi.

La route `/api/launch` valide l'adresse côté serveur, applique un honeypot, vérifie l'origine de la requête et utilise une limitation de fréquence persistante. L'inscription est enregistrée par audience dans `launch_subscriptions`. Une route de désinscription publique est disponible sur `/desinscription`.

Les tables sensibles ne sont pas lisibles directement par les rôles publics.

## Performance

Le contenu critique est rendu côté serveur et reste visible avant hydratation afin que le LCP ne dépende pas des animations JavaScript. Les sections hors écran utilisent `content-visibility`, les effets de blur sont réduits sur tablette/mobile et les listeners de pointeur ne sont attachés qu'aux périphériques adaptés.

Les feuilles historiques non utilisées ne sont plus chargées globalement. Les assets publics principaux sont locaux et légers ; aucune image de hero distante n'est nécessaire pour le premier rendu.

## Base de données

Les migrations Supabase versionnées dans `supabase/migrations` correspondent au schéma utilisé par la vitrine, y compris le RPC `subscribe_launch` pour l'inscription simple à la liste de lancement.
