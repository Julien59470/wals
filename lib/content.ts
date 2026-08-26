export type FeatureStatus = "En préparation" | "Aperçu produit";

export type ProductFeature = {
  title: string;
  description: string;
  merchantBenefit: string;
  partnerAngle: string;
  status: FeatureStatus;
};

export const productFeatures: ProductFeature[] = [
  { title: "Carte de fidélité digitale", description: "Une carte pensée pour être ajoutée au Wallet du client, sans application WALS dédiée à installer.", merchantBenefit: "Remplacer la carte papier par une expérience plus simple à conserver et à retrouver.", partnerAngle: "Une première offre facile à présenter à un commerce avec son identité et ses récompenses.", status: "Aperçu produit" },
  { title: "Récompenses et mécanique d'engagement", description: "Tampons, points, avantages et expériences ludiques pour donner une raison concrète de revenir.", merchantBenefit: "Créer des récompenses adaptées à la fréquence de visite et au panier moyen du commerce.", partnerAngle: "Construire plusieurs niveaux d'offre autour de la fidélité et de l'engagement.", status: "En préparation" },
  { title: "Communications ciblées", description: "Des campagnes et rappels conçus autour des possibilités réellement prises en charge par chaque plateforme Wallet.", merchantBenefit: "Rester présent entre deux visites avec des messages utiles et adaptés au support utilisé.", partnerAngle: "Proposer un service récurrent de fidélisation au-delà de la carte digitale.", status: "En préparation" },
  { title: "Parrainage", description: "Des parcours permettant à un client satisfait de recommander le commerce et d'être récompensé selon les règles définies.", merchantBenefit: "Transformer la satisfaction en acquisition mesurable.", partnerAngle: "Ajouter une brique d'acquisition locale à l'offre de fidélité.", status: "En préparation" },
  { title: "Base clients et statistiques", description: "Une vision synthétique de l'activité, des cartes, des visites, des récompenses et des actions commerciales.", merchantBenefit: "Décider à partir d'indicateurs simples plutôt que de piloter la fidélité à l'intuition.", partnerAngle: "Suivre les résultats des commerces et disposer d'arguments de renouvellement plus solides.", status: "En préparation" },
  { title: "Avis et réputation locale", description: "Des parcours destinés à faciliter la sollicitation d'avis dans le respect des règles des plateformes concernées.", merchantBenefit: "Relier fidélité et visibilité locale avec une expérience cohérente pour le client.", partnerAngle: "Créer une offre plus complète autour de la rétention et de la réputation.", status: "En préparation" },
];

export const partnerSupport = [
  { title: "Démos commerciales personnalisées", description: "Préparer une démonstration visuelle au nom du prospect pour rendre l'offre immédiatement concrète." },
  { title: "Supports de vente", description: "Présentations, fiches d'offre, QR codes et visuels adaptables pour structurer la prospection." },
  { title: "Parcours de formation", description: "Des contenus courts pour comprendre le produit, préparer une offre et gérer les premiers clients." },
  { title: "Accompagnement", description: "Un point d'entrée WALS pour les questions produit, commerciales et techniques au démarrage." },
] as const;

export const merchantFaq = [
  ["Mes clients devront-ils installer une application WALS ?", "Non. Le parcours repose sur une carte Wallet plutôt que sur une application WALS dédiée. Selon le téléphone du client, l'ajout et certaines fonctions dépendront des services Apple Wallet ou Google Wallet disponibles sur son appareil."],
  ["Pourrai-je choisir mes récompenses ?", "Oui, le programme est pensé pour s'adapter au commerce, à sa fréquence d'achat et aux récompenses qu'il souhaite proposer. Le détail des options disponibles sera présenté à l'ouverture."],
  ["Faudra-t-il acheter du matériel spécifique ?", "WALS est pensé pour limiter le matériel dédié. Les modalités d'utilisation et les éventuelles intégrations compatibles seront détaillées à l'ouverture."],
  ["Est-ce déjà disponible ?", "Pas encore. WALS ouvrira prochainement. Vous pouvez laisser votre adresse email pour être prévenu dès que le parcours commerce sera disponible."],
] as const;

export const partnerFaq = [
  ["Est-ce que je travaillerai pour WALS ?", "Non. Le programme partenaire est conçu pour une activité indépendante : votre marque, vos offres, vos prospects et votre relation commerciale. Les conditions du programme seront présentées lors de son ouverture."],
  ["Qui fixera le prix facturé au commerce ?", "Vous resterez libre de votre tarification de revente. Les montants 29, 39, 49, 59 et 69 € visibles dans le simulateur sont des exemples de scénarios et ne sont ni imposés ni recommandés par WALS."],
  ["La solution sera-t-elle totalement en marque blanche ?", "Le programme est conçu pour placer votre identité au premier plan. Le périmètre précis de personnalisation sera détaillé lors de l'ouverture du programme partenaire."],
  ["Pourrai-je démarrer avec un seul commerce ?", "Oui, le parcours est pensé pour pouvoir commencer progressivement : identifier un prospect, préparer une démonstration, proposer une offre, accompagner le commerce puis reproduire le processus."],
  ["WALS fournira-t-il des outils commerciaux ?", "Des démonstrations personnalisées, supports, contenus de formation et ressources d'accompagnement sont prévus dans le programme partenaire."],
] as const;
