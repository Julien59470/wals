# WALS

Vitrine Next.js de WALS avec deux parcours commerciaux distincts :

- `/commercants` : fidélité digitale destinée directement aux commerces ;
- `/partenaires` : parcours marque blanche pour agences, indépendants et commerciaux.

La racine `/` présente WALS puis oriente explicitement vers le bon parcours. Le dernier choix peut être mémorisé localement pour l'UX, sans redirection automatique.

## Stack

- Next.js App Router + TypeScript
- React
- Supabase pour les leads et inscriptions de lancement
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

## Variables d'environnement

Copier `.env.example` vers `.env.local` et renseigner les valeurs Supabase.

L'indexation est volontairement explicite : `NEXT_PUBLIC_INDEXABLE=true` **et** `NEXT_PUBLIC_SITE_URL=https://wals.fr` sont requis pour autoriser `robots` et le sitemap. Les previews et environnements locaux doivent garder `NEXT_PUBLIC_INDEXABLE=false`.

Les champs `LEGAL_*` doivent être complétés avec les informations juridiques réelles avant ouverture commerciale. Le code ne fournit aucun fallback fictif pour la dénomination, le SIREN, le siège ou l'hébergeur légal.

## Vérité produit

Les fonctionnalités publiques portent un statut explicite : `Aperçu produit` ou `En préparation`. Les prix WALS ne sont pas publiés tant qu'ils ne sont pas arrêtés. Le simulateur partenaire utilise uniquement les valeurs saisies par le visiteur et ne constitue pas une promesse de revenus.

## Données et formulaires

Les demandes commerçants et partenaires sont séparées par le champ `audience`. La prise de contact n'active pas automatiquement les informations de lancement : le consentement marketing est facultatif et distinct. Une route de désinscription publique est disponible sur `/desinscription`.

Le formulaire applique une validation serveur, un honeypot, des contrôles d'origine et une limitation de fréquence persistante en base. Les tables de leads et d'abonnements ne sont pas lisibles par les rôles publics.

Les migrations Supabase versionnées dans `supabase/migrations` correspondent au schéma de production WALS appliqué le 25 août 2026.
