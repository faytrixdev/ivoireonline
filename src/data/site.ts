export const site = {
  name: "Ivoire Online",
  tagline: "Entreprendre. Importer. Grandir.",
  description:
    "Votre partenaire pour entreprendre, importer et développer votre activité. Achat et importation de produits, formations en e-commerce et accompagnement business.",
  url: "https://ivoireonline.net",
  phone: "+225 07 06 89 11 28",
  whatsapp: "https://wa.me/2250706891128",
  whatsappPurchase:
    "https://wa.me/2250706891128?text=Bonjour+Ivoire+Online%2C+je+vous+contacte+depuis+votre+site+internet.+Je+souhaite+b%C3%A9n%C3%A9ficier+de+votre+service+d%E2%80%99achats+et+d%E2%80%99importation.+J%E2%80%99aimerais+obtenir+des+renseignements+sur+la+proc%C3%A9dure%2C+les+tarifs+et+les+d%C3%A9lais.+Merci.",
  socials: [
    { name: "TikTok", href: "https://www.tiktok.com/@mraymeric" },
    { name: "Instagram", href: "https://www.instagram.com/mr_aymeric" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/aymeric-soro-824408303" },
    { name: "Facebook", href: "https://www.facebook.com/share/1DkJpXF4fz/" },
    { name: "YouTube", href: "https://youtube.com/@aymericofficiel9403" },
  ],
};

export const navigation = [
  { label: "Accueil", href: "/", index: "01" },
  { label: "À propos", href: "/a-propos", index: "02" },
  { label: "Services", href: "/services", index: "03" },
  { label: "Témoignages", href: "/temoignages", index: "04" },
  { label: "Academy", href: "/formations", index: "05" },
  { label: "Boutique", href: "/boutique", index: "06" },
  { label: "Contact", href: "/contact", index: "07" },
];

export type Formation = {
  slug: string;
  index: string;
  title: string;
  summary: string;
  description: string[];
  price: number;
  currency: string;
  image: string;
  modules: number;
  lessons: number;
  program: { chapter: string; lessons: string[] }[];
  chapters?: { time: string; title: string }[];
};

export const formations: Formation[] = [
  {
    slug: "formationcompletepd",
    index: "01",
    title: "Formation complète E-commerce",
    summary:
      "J'accompagne déjà 500+ Africains dans ce domaine qui font des résultats extraordinaires 🎉",
    description: [
      "La formation phare d'Ivoire Online : tout ce qu'il faut savoir pour acheter, importer et revendre en ligne, de la recherche produit jusqu'aux campagnes publicitaires.",
      "Ce programme couvre l'importation, le marketing digital, la création de boutique et la publicité Facebook, avec une méthode adaptée au marché africain.",
    ],
    price: 70000,
    currency: "F CFA",
    image: "/images/academy/formation-ecommerce.jpg",
    modules: 8,
    lessons: 13,
    program: [
      {
        chapter: "Introduction",
        lessons: ["Introduction"],
      },
      {
        chapter: "Module 1 — Importation produit",
        lessons: ["Importation"],
      },
      {
        chapter: "Module 2 — Marketing digital",
        lessons: ["Marketing part 1", "Marketing part 2"],
      },
      {
        chapter: "Mention recapitulatif",
        lessons: ["Recapitulatif"],
      },
      {
        chapter: "Module 3 — Boutique en ligne YELEN",
        lessons: ["Boutique en ligne YELEN"],
      },
      {
        chapter: "Module 4 — Campagnes publicitaires Facebook",
        lessons: ["Première campagne pub"],
      },
      {
        chapter: "Module 5 — Boutique Youcan et Shopify",
        lessons: [
          "Création boutique Youcan P1",
          "Création boutique Youcan P2",
          "Création boutique Shopify P1",
          "Création boutique Shopify P2",
          "Campagne publicitaire Facebook Shopify",
        ],
      },
      { chapter: "Fin", lessons: ["Fin"] },
    ],
  },
  {
    slug: "marketing-digital-2",
    index: "02",
    title: "Marketing digital",
    summary:
      "Utiliser WhatsApp Business et TikTok pour promouvoir vos produits et générer des revenus grâce à l'e-commerce, avec un objectif de 10 % de conversion.",
    description: [
      "Dans cette formation, je vous explique comment utiliser WhatsApp Business et TikTok pour promouvoir vos produits et générer des revenus grâce à l'e-commerce. Je partage des stratégies efficaces pour attirer des clients, transformer des prospects et maximiser vos vues sur vos statuts, avec un objectif de 10 % de conversion.",
      "Je vous encourage à créer des listes de diffusion et à interagir avec de nouveaux contacts chaque jour pour élargir votre clientèle. N'oubliez pas de soigner votre présentation et d'utiliser des visuels permettant de gagner la confiance de vos clients.",
    ],
    price: 25000,
    currency: "F CFA",
    image: "/images/academy/formation-marketing.jpg",
    modules: 2,
    lessons: 4,
    program: [
      {
        chapter: "Module 1 — Marketing digital",
        lessons: ["Marketing digital WhatsApp", "Marketing digital TikTok"],
      },
      {
        chapter: "Module 2 — Campagnes publicitaires Facebook",
        lessons: ["Première campagne pub", "Deuxième campagne pub"],
      },
    ],
  },
  {
    slug: "boutiquesenlignespd",
    index: "03",
    title: "Boutique en ligne",
    summary:
      "Deux applications essentielles pour créer votre site internet : Youcan et Shopify.",
    description: [
      "Bonjour à tous, dans cette formation, je vous présente deux applications essentielles pour créer votre site internet : Youcan et Shopify. Youcan est une plateforme marocaine qui permet de créer un site facilement, avec un abonnement gratuit à 1 $ et la possibilité de générer jusqu'à 5 millions de chiffres d'affaires avant de payer des frais.",
      "Je vous montre également comment vous inscrire et créer votre boutique sur Youcan. Je vous demande de suivre attentivement les étapes et de poser les questions si nécessaire.",
    ],
    price: 25000,
    currency: "F CFA",
    image: "/images/academy/formation-boutique.jpg",
    modules: 4,
    lessons: 6,
    program: [
      { chapter: "Module 1 — Création boutique Yelen", lessons: ["Boutique Yelen"] },
      {
        chapter: "Module 2 — Création boutique Youcan",
        lessons: ["Création boutique Youcan P1", "Création boutique Youcan P2"],
      },
      {
        chapter: "Module 3 — Création boutique Shopify",
        lessons: ["Création boutique Shopify P1", "Création boutique Shopify P2"],
      },
      {
        chapter: "Module 4 — Campagne publicitaire Facebook",
        lessons: ["Campagne publicitaire Facebook"],
      },
    ],
  },
  {
    slug: "campagnesfacebookpd",
    index: "04",
    title: "Publicité Facebook",
    summary:
      "Créer des campagnes publicitaires rentables sur Facebook, de la configuration du portefeuille business au ciblage.",
    description: [
      "Dans cette formation, je vous guide à travers le processus de création de campagnes publicitaires sur Facebook en utilisant Andromeda. Nous avons abordé les étapes essentielles, comme la configuration de votre portefeuille business et le choix des objectifs de campagne, notamment l'option fan.",
      "Je vous encourage à définir un budget quotidien d'au moins 10 dollars pour commencer et à cibler des publics spécifiques, notamment à Abidjan. N'oubliez pas de vérifier vos paramètres de campagne et de vous abonner pour d'autres vidéos utiles. Assurez-vous de suivre ces étapes pour maximiser vos résultats.",
    ],
    price: 25000,
    currency: "F CFA",
    image: "/images/academy/formation-pubfb.jpg",
    modules: 1,
    lessons: 2,
    program: [
      {
        chapter: "Campagne publicitaire Facebook",
        lessons: ["Première campagne pub", "Deuxième campagne pub"],
      },
    ],
  },
  {
    slug: "maitriserimportationpd",
    index: "05",
    title: "Importation",
    summary:
      "Trouver de bons produits et négocier avec les fournisseurs sur Alibaba, pas à pas, même en étant novice.",
    description: [
      "Dans cette formation, je suis ravi de vous montrer comment maîtriser le e-commerce, en commençant par trouver de bons produits et négocier avec les fournisseurs sur Alibaba. Je vous guiderai pas à pas dans la création d'un compte et la navigation sur la plateforme, alors pas d'inquiétude si vous êtes novice.",
      "Suivez attentivement les instructions et créez votre compte rapidement si ce n'est pas déjà fait. Je vous montrerai également comment effectuer des recherches efficaces sur les produits, afin de distinguer les fournisseurs fiables des arnaqueurs. C'est parti ! Faisons le premier pas vers le succès dans le e-commerce !",
    ],
    price: 40000,
    currency: "F CFA",
    image: "/images/academy/formation-importation.jpg",
    modules: 1,
    lessons: 1,
    program: [{ chapter: "Importation de produit", lessons: ["Importation de produit"] }],
    chapters: [
      { time: "00:00", title: "Formation d'introduction au commerce électronique" },
      { time: "01:53", title: "Comprendre le produit et le marketing" },
      { time: "03:33", title: "Création d'un compte de messagerie" },
      { time: "05:36", title: "Utilisation des images de produits pour la recherche" },
      { time: "07:19", title: "Importance de la qualité des produits" },
      { time: "12:12", title: "Communication avec les fournisseurs" },
      { time: "25:41", title: "S'engager auprès de la communauté" },
      { time: "29:29", title: "Dernières réflexions" },
    ],
  },
];

export const coaching = [
  {
    index: "01",
    name: "Découverte",
    price: "25 900",
    description: "Séance privée en face à face de 1 à 2 heures.",
    features: ["Questions-réponses ciblées", "Présentation des prérequis pour démarrer"],
  },
  {
    index: "02",
    name: "Formation complète",
    price: "159 900",
    description: "Formation complète en présentiel, en une séance.",
    features: [
      "Support PDF",
      "Suivi en ligne pendant un mois",
      "Accès aux vidéos de formation inclus",
    ],
    featured: true,
  },
  {
    index: "03",
    name: "Premium — Accompagnement terrain",
    price: "289 900",
    description: "Formation complète en présentiel avec accompagnement pratique.",
    features: [
      "Module bonus de création de contenu",
      "Mise en place du système de vente",
      "Suivi en présentiel pendant un mois",
      "Lot de produits offert",
    ],
    note: "Après le premier mois : poursuite facultative de l'accompagnement à 150 000 FCFA par mois.",
  },
];

export type Product = {
  slug: string;
  name: string;
  price: number;
  oldPrice: number | null;
  currency: string;
  stock: number;
  image: string;
  summary: string;
  status: string;
  lead: string;
  sections: { title: string; items?: string[]; text?: string }[];
};

export const products: Product[] = [
  {
    slug: "sacoche-trapstar-d8df5722-4e72-408e-9cf4-389e934de220",
    name: "sacoche trapstar",
    price: 35000,
    oldPrice: 45000,
    currency: "F CFA",
    stock: 983,
    image: "/images/products/produit-sacoche.jpg",
    status: "Disponible",
    summary:
      "Avec 35 000 FCFA, vous pouvez lancer votre business dès aujourd'hui. Lot de 10 sacoches style Trapstar, à revendre entre 5 000 et 10 000 FCFA l'unité.",
    lead: "Idée de business : revendez des sacoches style Trapstar",
    sections: [
      {
        title: "",
        text: "Avec 35 000 FCFA, vous pouvez lancer votre business dès aujourd'hui.\n\nLe principe est simple : vous achetez un lot de 10 sacoches style Trapstar pour 35 000 FCFA, soit environ 3 500 FCFA la pièce, puis vous les revendez entre 5 000 et 10 000 FCFA l'unité.",
      },
      {
        title: "Pourquoi ça marche",
        items: [
          "Un produit streetwear tendance, très recherché par les jeunes",
          "Un petit budget de départ, accessible à tous",
          "Un article léger, facile à stocker, à livrer et à vendre sur Facebook, Instagram, TikTok ou WhatsApp",
          "Un produit qui se photographie bien, donc facile à promouvoir",
          "Vous réinvestissez vos bénéfices pour commander un plus gros lot",
        ],
      },
      {
        title: "Comment démarrer",
        items: [
          "Commandez votre lot de 10 sacoches auprès d'Ivoire Online",
          "Prenez de belles photos et vidéos de vos produits",
          "Publiez-les sur vos réseaux et vos statuts WhatsApp",
          "Vendez, encaissez, puis recommencez avec un lot plus grand",
        ],
      },
      {
        title: "",
        text: "Un petit budget, un produit qui se vend : votre premier business commence ici.",
      },
    ],
  },
];

export const services = [
  {
    index: "01",
    title: "Service d'achats",
    kicker: "Commande d'articles",
    image: "/images/academy/service-achats.jpg",
    lead: "Vous avez repéré un produit à l'étranger mais vous ne savez pas comment l'obtenir ?",
    body: "Ivoire Online s'occupe de tout. Nous commandons pour vous, depuis la Chine, la Turquie, Dubaï, la France et bien d'autres pays : vêtements, électronique, cosmétiques, équipements, articles de maison et plus encore.",
    extended:
      "Que vous soyez un particulier ou une entreprise, vous profitez d'un achat simple, rapide et sécurisé. Vous nous indiquez ce que vous voulez, nous sélectionnons le fournisseur, passons la commande, suivons le colis, puis vous le livrons en Côte d'Ivoire.",
    benefits: [
      "Accès à des produits introuvables localement",
      "Paiement sécurisé : plus de risque d'arnaque avec des vendeurs inconnus",
      "Suivi de votre commande de l'achat jusqu'à la livraison",
      "Un interlocuteur unique qui vous accompagne à chaque étape",
    ],
    cta: { label: "Faire une demande sur WhatsApp", href: site.whatsappPurchase, external: true },
    href: "/services#achats",
  },
  {
    index: "02",
    title: "Formations et Coaching",
    kicker: "Apprendre et entreprendre",
    image: "/images/academy/formation-ecommerce.jpg",
    lead: "Que vous vouliez importer des produits ou vendre en ligne, Ivoire Online vous donne les compétences pour réussir.",
    body: "Nos formations pratiques s'adressent aux jeunes qui veulent se lancer comme aux entrepreneurs qui souhaitent développer leur activité.",
    extended:
      "Formation Importation : apprenez à acheter depuis la Chine, la Turquie, Dubaï, la France et d'autres pays — trouver des fournisseurs fiables, négocier, payer en sécurité, gérer le transport et le dédouanement, puis revendre avec une vraie marge. Formation E-commerce Afrique : créez votre boutique en ligne et vendez en gros comme en détail grâce à la publicité Facebook, avec une méthode adaptée au marché africain.",
    benefits: [
      "Une méthode claire, testée sur le terrain",
      "Un accompagnement sur votre projet",
      "Les bons réflexes pour éviter les arnaques et les pertes",
      "Les outils pour passer de l'idée à vos premières ventes",
    ],
    cta: { label: "Découvrir nos formations", href: "/formations", external: false },
    href: "/formations",
  },
  {
    index: "03",
    title: "Idées de business et produits gagnants",
    kicker: "Trouver le bon produit",
    image: "/images/products/produit-sacoche.jpg",
    lead: "Vous voulez vous lancer mais ne savez pas quoi vendre ?",
    body: "Ivoire Online vous propose des idées de business adaptées à tous les budgets, de la petite mise de départ à l'investissement plus ambitieux, avec un objectif : maximiser vos bénéfices.",
    extended:
      "Nous repérons pour vous les produits gagnants, ceux qui se vendent vraiment et qui offrent une bonne marge, puis nous les fournissons. Vous n'avez plus à perdre du temps ni de l'argent à tester au hasard : vous partez avec des produits déjà identifiés pour vendre efficacement.",
    benefits: [
      "Des idées de business qui correspondent à votre budget",
      "Des produits à forte demande, sélectionnés pour leur potentiel de profit",
      "Un approvisionnement fiable, directement auprès d'Ivoire Online",
      "Un point de départ concret pour commencer à vendre rapidement",
    ],
    cta: { label: "Explorer notre boutique", href: "/boutique", external: false },
    href: "/boutique",
  },
];

export const stats = [
  { value: "3 500+", label: "clients accompagnés" },
  { value: "500+", label: "élèves formés" },
  { value: "5+", label: "ans d'expérience" },
  { value: "15+", label: "pays touchés" },
];

export const historicalStats = [
  { value: "966", label: "Étudiants inscrits" },
  { value: "253", label: "Vidéos instructives" },
  { value: "354+", label: "Certifications" },
  { value: "99,9 %", label: "Satisfaction annoncée" },
];

export const universes = [
  {
    title: "Ivoire Online Academy",
    word: "Apprendre.",
    text: "Des formations pratiques pour importer, vendre et communiquer en ligne.",
    cta: { label: "Explorer l'Academy", href: "/formations" },
    image: "/images/academy/client-banner.webp",
  },
  {
    title: "Agence marketing",
    word: "Rayonner.",
    text: "Un accompagnement sur mesure pour votre visibilité et vos ventes.",
    cta: { label: "Parlons de votre projet", href: "/contact" },
    image: "/images/academy/formation-marketing.jpg",
  },
  {
    title: "Boutique",
    word: "Découvrir.",
    text: "Des produits et des idées de business prêtes à revendre.",
    cta: { label: "Explorer la boutique", href: "/boutique" },
    image: "/images/products/produit-sacoche.jpg",
  },
];

export const testimonials = [
  {
    image: "/images/official/resultat-whatsapp-01.jpg",
    alt: "Capture WhatsApp d'un résultat client : tableau de ventes et échange de messages.",
  },
  {
    image: "/images/official/galerie-02.jpg",
    alt: "Capture d'un résultat client : suivi de progression.",
  },
  {
    image: "/images/official/galerie-03.jpg",
    alt: "Capture d'un retour client sur l'accompagnement.",
  },
];

export const testimonialSingle = {
  image: "/images/official/resultat-whatsapp-02.jpg",
  alt: "Capture WhatsApp d'un résultat client : évolution des ventes et messages transmis.",
};

export const partners = [
  { name: "AliExpress", logo: "/images/partners/aliexpress.png" },
  { name: "Alibaba", logo: "/images/partners/alibaba.png" },
  { name: "Shopify", logo: "/images/partners/shopify.png" },
  { name: "Ivoire Online", logo: "/images/ivoire-online-logo.jpg" },
  { name: "BLOOP", logo: "/images/partners/bloop.webp" },
];

export function formatPrice(value: number, currency = "F CFA") {
  return `${value.toLocaleString("fr-FR").replace(/\u202f|\u00a0/g, " ")} ${currency}`;
}
