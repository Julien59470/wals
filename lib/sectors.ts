export type SectorPage = {
  slug: string;
  name: string;
  shortName: string;
  title: string;
  description: string;
  problem: string;
  cadence: string;
  rewardIdeas: string[];
  scenarios: { title: string; description: string }[];
  faq: readonly (readonly [string, string])[];
};

export const sectors: SectorPage[] = [
  {
    slug: "boulangeries",
    name: "Boulangeries et pâtisseries",
    shortName: "Boulangeries",
    title: "Une fidélité digitale pensée pour les visites fréquentes en boulangerie",
    description:
      "Transformer les passages réguliers en relation durable avec une carte simple à retrouver, des récompenses compréhensibles et des rappels utiles.",
    problem:
      "La boulangerie bénéficie souvent d'une fréquence de visite élevée, mais la carte papier se perd facilement et la relation s'arrête généralement au comptoir.",
    cadence: "Fréquence élevée, achats récurrents et récompenses simples à comprendre.",
    rewardIdeas: ["Produit offert après plusieurs passages", "Avantage sur une formule", "Récompense anniversaire", "Offre découverte sur une nouveauté"],
    scenarios: [
      { title: "Au comptoir", description: "Le client scanne un QR code et ajoute sa carte au Wallet en quelques instants." },
      { title: "Après plusieurs visites", description: "La progression devient visible et la récompense reste claire sans carte papier." },
      { title: "Entre deux passages", description: "Le commerce peut préparer des rappels ou offres selon les mécanismes compatibles avec la plateforme Wallet utilisée." },
    ],
    faq: [
      ["La carte remplace-t-elle obligatoirement le papier ?", "Non. Le commerce peut faire évoluer son fonctionnement progressivement."],
      ["Peut-on utiliser des tampons ?", "Oui, le système de tampons fait partie des mécaniques de fidélité prévues par WALS."],
    ],
  },
  {
    slug: "coiffeurs-barbiers",
    name: "Coiffeurs et barbiers",
    shortName: "Coiffure",
    title: "Fidéliser entre deux rendez-vous, pas seulement au moment du paiement",
    description:
      "Créer une relation plus continue avec les clients d'un salon grâce à une fidélité digitale, des avantages et des actions de réactivation.",
    problem:
      "Les visites sont moins fréquentes qu'en commerce alimentaire, ce qui rend la relance, le rappel et la valeur de chaque retour particulièrement importants.",
    cadence: "Cycle de visite plus long, forte valeur de réactivation et potentiel de parrainage local.",
    rewardIdeas: ["Avantage après plusieurs rendez-vous", "Soin ou option offerte", "Parrainage d'un proche", "Offre de retour après une période d'inactivité"],
    scenarios: [
      { title: "Après la prestation", description: "Le client conserve sa carte dans son Wallet et visualise son prochain avantage." },
      { title: "Avant l'échéance habituelle", description: "Le salon prépare une campagne de retour plutôt qu'une promotion générique envoyée à tout le monde." },
      { title: "Parrainage", description: "Le client fidèle peut recommander le salon dans un parcours prévu pour suivre la recommandation." },
    ],
    faq: [
      ["WALS remplace-t-il un logiciel de réservation ?", "Non. WALS se concentre sur la fidélité et l'engagement client, pas sur le remplacement d'un agenda métier."],
      ["Peut-on différencier plusieurs avantages ?", "Oui, le programme est pensé pour proposer des règles adaptées aux offres du salon."],
    ],
  },
  {
    slug: "restaurants-cafes",
    name: "Restaurants et cafés",
    shortName: "Restauration",
    title: "Donner une raison de revenir dans un restaurant ou un café",
    description:
      "Utiliser la fidélité digitale pour soutenir la fréquence de visite, les offres ciblées et le bouche-à-oreille sans imposer une application dédiée.",
    problem:
      "La concurrence locale est forte et un client satisfait peut malgré tout changer facilement d'établissement s'il n'existe aucune raison de revenir.",
    cadence: "Visites variables, opportunités sur les heures creuses et forte importance de la recommandation.",
    rewardIdeas: ["Boisson ou dessert offert", "Avantage sur une formule", "Offre heures creuses", "Récompense de parrainage"],
    scenarios: [
      { title: "Première visite", description: "Le QR code donne accès à une carte simple à conserver dans le téléphone." },
      { title: "Période creuse", description: "Une campagne peut être préparée pour une audience pertinente plutôt qu'une remise permanente." },
      { title: "Client satisfait", description: "Le parcours de parrainage vise à transformer la satisfaction en recommandation mesurable." },
    ],
    faq: [
      ["La solution dépend-elle d'un système de caisse particulier ?", "Les intégrations de caisse compatibles seront précisées à l'ouverture. WALS n'annonce pas de compatibilité universelle."],
      ["Peut-on faire des offres limitées dans le temps ?", "Cette possibilité fait partie des fonctions de campagne prévues par WALS."],
    ],
  },
  {
    slug: "instituts-beaute",
    name: "Instituts de beauté et bien-être",
    shortName: "Beauté",
    title: "Créer une relation de fidélité plus premium pour les instituts",
    description:
      "Combiner récompenses, réactivation et parrainage pour valoriser une clientèle qui revient sur plusieurs semaines ou plusieurs mois.",
    problem:
      "Le cycle de visite peut être long et la fidélité dépend autant de l'expérience que de la capacité à rester présent entre deux rendez-vous.",
    cadence: "Cycle moyen à long, panier souvent plus élevé et forte valeur du client régulier.",
    rewardIdeas: ["Soin additionnel", "Avantage fidélité", "Offre anniversaire", "Crédit ou avantage de parrainage"],
    scenarios: [
      { title: "Après un soin", description: "La carte digitale matérialise la progression vers un avantage sans papier à conserver." },
      { title: "Réactivation", description: "Le commerce peut préparer une action de retour cohérente avec le cycle habituel de visite." },
      { title: "Ambassadeurs", description: "Le parrainage est prévu pour structurer les recommandations des clientes et clients fidèles." },
    ],
    faq: [
      ["WALS gère-t-il les rendez-vous ?", "Non. WALS se concentre sur la fidélité, l'engagement et le suivi client."],
      ["Peut-on conserver une image haut de gamme ?", "Oui, l'expérience est pensée pour respecter l'identité visuelle du commerce selon les possibilités de personnalisation proposées."],
    ],
  },
  {
    slug: "commerces-proximite",
    name: "Commerces de proximité",
    shortName: "Proximité",
    title: "Une base de fidélité adaptable aux commerces de proximité",
    description:
      "Construire un programme simple autour de la fréquence réelle du commerce, de ses récompenses et de ses objectifs de retour client.",
    problem:
      "Chaque commerce possède une fréquence, un panier et une relation client différents. Une fidélité efficace doit donc éviter le modèle unique imposé à tous.",
    cadence: "À adapter au secteur, au panier moyen et au rythme naturel de retour des clients.",
    rewardIdeas: ["Récompense après plusieurs achats", "Avantage VIP", "Offre anniversaire", "Parrainage", "Découverte d'un nouveau produit"],
    scenarios: [
      { title: "Programme adapté", description: "Le commerce définit une mécanique cohérente avec sa réalité plutôt qu'une règle générique." },
      { title: "Carte dans le téléphone", description: "Le client garde sa fidélité accessible dans son Wallet au lieu de multiplier les cartes papier." },
      { title: "Pilotage", description: "Les statistiques permettent de comprendre l'usage et d'ajuster les actions commerciales." },
    ],
    faq: [
      ["Quels commerces sont concernés ?", "Tout commerce pour lequel la récurrence, la recommandation ou la réactivation client ont une valeur réelle peut être pertinent."],
      ["Le programme est-il identique pour tous ?", "Non. WALS est pensé pour adapter les règles et les avantages à la réalité de chaque commerce."],
    ],
  },
];

export const getSector = (slug: string) => sectors.find((sector) => sector.slug === slug);
