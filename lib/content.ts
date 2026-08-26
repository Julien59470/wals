export type FeatureStatus = "En préparation" | "Aperçu produit";

export type ProductFeature = {
  title: string;
  description: string;
  merchantBenefit: string;
  partnerAngle: string;
  status: FeatureStatus;
};

export const productFeatures: ProductFeature[] = [
  { title: "Carte de fidélité digitale", description: "Une carte pensée pour être ajoutée au Wallet du client, sans application WALS dédiée à installer.", merchantBenefit: "Remplacer la carte papier par une expérience plus simple à conserver et à retrouver.", partnerAngle: "Une première offre facile à démontrer à un commerce avec son identité et ses récompenses.", status: "Aperçu produit" },
  { title: "Récompenses et mécanique d'engagement", description: "Tampons, points, avantages et expériences ludiques destinés à donner une raison concrète de revenir.", merchantBenefit: "Créer des récompenses adaptées à la fréquence de visite et au panier moyen du commerce.", partnerAngle: "Construire plusieurs niveaux d'offre autour de la fidélité et de l'engagement.", status: "En préparation" },
  { title: "Communications ciblées", description: "Des campagnes et rappels conçus autour des mécanismes de communication réellement pris en charge par chaque plateforme Wallet.", merchantBenefit: "Rester présent entre deux visites avec des messages utiles, sans promettre une parité technique artificielle entre iOS et Android.", partnerAngle: "Vendre un service récurrent de fidélisation plutôt qu'une simple carte digitale.", status: "En préparation" },
  { title: "Parrainage", description: "Des parcours permettant à un client satisfait de recommander le commerce et d'être récompensé selon les règles définies.", merchantBenefit: "Transformer la satisfaction en acquisition mesurable.", partnerAngle: "Ajouter une brique d'acquisition locale à l'offre de fidélité.", status: "En préparation" },
  { title: "Base clients et statistiques", description: "Une vision synthétique de l'activité, des cartes, des visites, des récompenses et des actions commerciales.", merchantBenefit: "Décider à partir d'indicateurs simples au lieu de piloter la fidélité à l'intuition.", partnerAngle: "Suivre les résultats des commerces et disposer d'arguments de renouvellement plus solides.", status: "En préparation" },
  { title: "Avis et réputation locale", description: "Des parcours destinés à faciliter la sollicitation d'avis dans le respect des règles des plateformes concernées.", merchantBenefit: "Relier fidélité et visibilité locale sans présenter une automatisation comme garantie de résultat.", partnerAngle: "Créer une offre plus complète autour de la rétention et de la réputation.", status: "En préparation" },
];

export const partnerSupport = [
  { title: "Démos commerciales personnalisées", description: "Préparer une démonstration visuelle au nom du prospect pour éviter de vendre une idée abstraite." },
  { title: "Supports de vente", description: "Présentations, fiches d'offre, QR codes et visuels adaptables pour structurer la prospection." },
  { title: "Parcours de formation", description: "Des contenus courts pour comprendre le produit, préparer une offre et gérer les premiers clients." },
  { title: "Accompagnement", description: "Un point d'entrée WALS pour les questions produit, commerciales et techniques au démarrage." },
] as const;

export const merchantFaq = [
  ["Mes clients devront-ils installer une application WALS ?", "Le principe prévu repose sur une carte Wallet plutôt que sur une application WALS dédiée. Selon le téléphone du client, l'ajout et certaines fonctions dépendront des services Apple Wallet ou Google Wallet disponibles et configurés sur son appareil."],
  ["Pourrai-je choisir mes récompenses ?", "C'est l'objectif du produit : adapter le programme au commerce, à la fréquence d'achat et à la récompense proposée. Le périmètre final reste en cours de développement."],
  ["Faudra-t-il acheter du matériel spécifique ?", "Le parcours cible est conçu pour limiter le matériel dédié. Les modalités exactes d'encaissement, de validation et de contrôle seront précisées avant le lancement commercial."],
  ["Est-ce déjà disponible ?", "Non. WALS est en cours de développement. Les interfaces du site sont des aperçus produit et ne constituent pas un engagement contractuel sur toutes les fonctions finales."],
] as const;

export const partnerFaq = [
  ["Est-ce que je travaillerai pour WALS ?", "Non. Le modèle prévu vise une activité indépendante : votre marque, vos offres, vos prospects et votre relation commerciale. Les conditions exactes seront publiées à l'ouverture du programme partenaire."],
  ["Qui fixera le prix facturé au commerce ?", "Le futur partenaire restera libre de sa tarification de revente. Les montants 29, 39, 49, 59 et 69 € visibles dans le simulateur sont uniquement des scénarios d'interface : ils ne sont ni imposés ni recommandés par WALS."],
  ["La solution sera-t-elle totalement en marque blanche ?", "Le niveau exact de marque blanche est encore en cours de spécification. WALS confirmera précisément les surfaces personnalisables avant l'ouverture commerciale."],
  ["Pourrai-je démarrer avec un seul commerce ?", "C'est le parcours cible : identifier un prospect, préparer une démo, proposer une offre, activer le commerce puis reproduire le processus. Les modalités finales seront confirmées au lancement."],
  ["WALS fournira-t-il des outils commerciaux ?", "C'est prévu : démos personnalisées, supports, formation et accompagnement sont encore en préparation et ne sont pas accessibles aujourd'hui."],
] as const;
