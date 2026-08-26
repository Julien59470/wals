# WALS

Vitrine Next.js de WALS. La plateforme est en cours de développement et présente deux parcours distincts :

- `/commercants` : futur parcours de fidélité digitale destiné directement aux commerces ;
- `/partenaires` : futur parcours en marque blanche destiné aux partenaires et revendeurs.

La racine `/` oriente explicitement vers le parcours correspondant. Aucun achat, abonnement ou accès commercial n'est présenté comme déjà ouvert.

## Stack

- Next.js App Router + TypeScript
- React
- Manrope via `next/font`
- Supabase pour la liste de lancement et la limitation anti-abus
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

La CI exécute les tests E2E sur ordinateur, tablette et mobile ainsi que les budgets locaux de FCP/LCP du contenu critique.

## Variables d'environnement

Copier `.env.example` vers `.env.local` et renseigner les valeurs Supabase.

L'indexation publique n'est autorisée par le code que lorsque `NEXT_PUBLIC_INDEXABLE=true`, `NEXT_PUBLIC_SITE_URL=https://wals.fr` et les informations juridiques obligatoires de l'éditeur sont renseignées. Les previews et environnements locaux doivent rester non indexables.

Les variables `LEGAL_*` doivent contenir les informations réelles de l'éditeur. Aucun nom, SIREN, adresse, téléphone ou directeur de publication fictif n'est fourni. Sur Vercel, les coordonnées publiques de l'hébergeur peuvent être utilisées automatiquement ; elles doivent être surchargées si l'hébergement de production change.

## Liste de lancement

Pendant le pré-lancement, les formulaires demandent uniquement une adresse email pour prévenir de l'ouverture du parcours choisi. Le texte affiché limite explicitement cette finalité et renvoie vers la politique de confidentialité et la désinscription.

Les routes `/api/launch` et `/api/unsubscribe` :

- contrôlent l'origine de la requête ;
- limitent la taille du corps JSON ;
- utilisent un honeypot ;
- normalisent et valident l'email ;
- utilisent une empreinte technique SHA-256 et une limitation de fréquence persistante ;
- ne révèlent pas si une adresse était déjà inscrite lors d'une désinscription.

Les tables Supabase ne sont pas accessibles directement aux rôles publics. Seuls les RPC nécessaires à l'inscription et à la désinscription sont exposés au rôle anonyme.

Les inscriptions de lancement enregistrent une version de consentement, ont une échéance maximale de 24 mois et sont purgées automatiquement. Une désinscription supprime immédiatement l'inscription correspondante.

## Pages réglementaires

- `/mentions-legales`
- `/confidentialite`
- `/cookies`
- `/accessibilite`
- `/desinscription`

La page d'accessibilité décrit la démarche réelle sans revendiquer une conformité RGAA non auditée. La page Cookies documente uniquement les outils effectivement chargés par le site actuel.

## Vérité produit

WALS n'est pas encore sorti. Les fonctionnalités publiques portent un statut explicite lorsqu'elles sont encore en préparation ou présentées sous forme d'aperçu. Les tableaux de bord utilisent des données de démonstration.

Le simulateur partenaire conserve les scénarios de revente `29 / 39 / 49 / 59 / 69 €`. Ils servent uniquement à illustrer un chiffre d'affaires brut potentiel : ce ne sont ni des prix WALS, ni une recommandation tarifaire, ni une promesse de revenu.

## Performance

Le contenu critique est rendu côté serveur et reste visible avant hydratation afin que le LCP ne dépende pas des animations JavaScript. Les sections hors écran utilisent `content-visibility`, les effets coûteux sont réduits sur tablette/mobile et les listeners de pointeur ne sont installés que sur les appareils adaptés.

Les anciennes feuilles CSS et composants devenus inutiles ne sont plus conservés dans l'arbre applicatif.
