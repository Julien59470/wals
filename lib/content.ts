export type FeatureStatus = "En préparation" | "Aperçu produit";

export type ProductFeature = {
  title: string;
  description: string;
  merchantBenefit: string;
  partnerAngle: string;
  status: FeatureStatus;
};

export const productFeatures: ProductFeature[] = [
  {
    title: "Carte de fidélité digitale",
    description:
      "Une carte pensée pour être ajoutée au Wallet du client, sans application WALS dédiée à installer.",
    merchantBenefit: "Remplacer la carte papier par une expérience plus simple à conserver et à retrouver.",
    partnerAngle: "Une première offre facile à démontrer à un commerce avec son identité et ses récompenses.",
    status: "Aperçu produit",
  },
  {
    title: "Récompenses et mécanique d'engagement",
    description:
      "Tampons, points, avantages et expériences ludiques destinés à donner une raison concrète de revenir.",
    merchantBenefit: "Créer des récompenses adaptées à la fréquence de visite et au panier moyen du commerce.",
    partnerAngle: "Construire plusieurs niveaux d'offre autour de la fidélité et de l'engagement.",
    status: "En préparation",
  },
  {
    title: "Communications ciblées",
    description:
      "Des campagnes et rappels conçus autour des mécanismes de communication réellement pris en charge par chaque plateforme Wallet.",
    merchantBenefit: "Rester présent entre deux visites avec des messages utiles, sans promettre une parité technique artificielle entre iOS et Android.",
    partnerAngle: "Vendre un service récurrent de fidélisation plutôt qu'une simple carte digitale.",
    status: "En préparation",
  },
  {
    title: "Parrainage",
    description:
      "Des parcours permettant à un client satisfait de recommander le commerce et d'être récompensé selon les règles définies.",
    merchantBenefit: "Transformer la satisfaction en acquisition mesurable.",
    partnerAngle: "Ajouter une brique d'acquisition locale à l'offre de fidélité.",
    status: "En préparation",
  },
  {
    title: "Base clients et statistiques",
    description:
      "Une vision synthétique de l'activité, des cartes, des visites, des récompenses et des actions commerciales.",
    merchantBenefit: "Décider à partir d'indicateurs simples au lieu de piloter la fidélité à l'intuition.",
    partnerAngle: "Suivre les résultats des commerces et disposer d'arguments de renouvellement plus solides.",
    status: "En préparation",
  },
  {
    title: "Avis et réputation locale",
    description:
      "Des parcours destinés à faciliter la sollicitation d'avis dans le respect des règles des plateformes concernées.",
    merchantBenefit: "Relier fidélité et visibilité locale sans présenter une automatisation comme garantie de résultat.",
    partnerAngle: "Créer une offre plus complète autour de la rétention et de la réputation.",
    status: "En préparation",
  },
];

export const partnerSupport = [
  {
    title: "Démos commerciales personnalisées",
    description: "Préparer une démonstration visuelle au nom du prospect pour éviter de vendre une idée abstraite.",
  },
  {
    title: "Supports de vente",
    description: "Présentations, fiches d'offre, QR codes et visuels adaptables pour structurer la prospection.",
  },
  {
    title: "Parcours de formation",
    description: "Des contenus courts pour comprendre le produit, préparer une offre et gérer les premiers clients.",
  },
  {
    title: "Accompagnement",
    description: "Un point d'entrée WALS pour les questions produit, commerciales et techniques au démarrage.",
  },
] as const;

export const merchantFaq = [
  [
    "Mes clients doivent-ils installer une application WALS ?",
    "Non. Le principe présenté repose sur une carte Wallet. Selon le téléphone du client, l'ajout et certaines fonctions dépendent des services Apple Wallet ou Google Wallet disponibles et configurés sur son appareil.",
  ],
  [
    "Puis-je choisir mes récompenses ?",
    "Oui, c'est l'objectif du produit : adapter le programme au commerce, à la fréquence d'achat et à la récompense que vous souhaitez proposer. Le périmètre final reste en cours de développement.",
  ],
  [
    "Dois-je acheter du matériel spécifique ?",
    "Le parcours cible est conçu pour limiter le matériel dédié. Les modalités exactes d'encaissement, de validation et de contrôle seront précisées avant le lancement commercial.",
  ],
  [
    "Est-ce déjà disponible ?",
    "WALS est encore en préparation. Les interfaces du site sont des aperçus produit et ne constituent pas un engagement contractuel sur toutes les fonctions finales.",
  ],
] as const;

export const partnerFaq = [
  [
    "Est-ce que je travaille pour WALS ?",
    "Non. Le modèle présenté vise une activité indépendante : votre marque, vos offres, vos prospects et votre relation commerciale. WALS fournit l'infrastructure technologique selon les conditions du programme partenaire final.",
  ],
  [
    "Qui fixe le prix facturé au commerce ?",
    "Vous. Aucun tarif de revente n'est imposé dans la proposition actuelle. Les exemples de prix ont été supprimés du site tant que la tarification WALS et le modèle contractuel ne sont pas définitivement arrêtés.",
  ],
  [
    "La solution est-elle totalement en marque blanche ?",
    "Le niveau exact de marque blanche est encore en cours de spécification. Le site distingue clairement l'objectif produit de ce qui est contractuellement garanti afin d'éviter de promettre un masquage total avant validation technique.",
  ],
  [
    "Puis-je démarrer avec un seul commerce ?",
    "Oui, le parcours cible est progressif : identifier un prospect, préparer une démo, proposer une offre, activer le commerce puis reproduire le processus.",
  ],
  [
    "WALS fournit-il des outils commerciaux ?",
    "C'est prévu dans le parcours partenaire : démos personnalisées, supports, formation et accompagnement sont présentés comme des éléments en préparation tant qu'ils ne sont pas officiellement ouverts.",
  ],
] as const;
