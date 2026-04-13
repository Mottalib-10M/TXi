export interface TarifFAQ {
  question: string;
  answer: string;
}

export interface TarifGridRow {
  label: string;
  priceDay: string;
  priceNight: string;
}

export interface TarifI18n {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  description: string;
  grid: TarifGridRow[];
  faq: TarifFAQ[];
}

export interface Tarif {
  slug: string;
  title: string;
  type: "aeroport" | "gare" | "ville" | "departement" | "special";
  lat: number;
  lng: number;
  i18n: {
    fr: TarifI18n;
    en: TarifI18n;
  };
}

export const tarifs: Tarif[] = [
  {
    slug: "tarif-taxi-paris",
    title: "Tarif Taxi Paris",
    type: "ville",
    lat: 48.8566,
    lng: 2.3522,
    i18n: {
      fr: {
        metaTitle: "Tarif Taxi Paris 2026 : prix, barème et forfaits | TaxiNeo",
        metaDescription: "Découvrez les tarifs taxi à Paris en 2026. Barème officiel, forfaits aéroport, tarifs jour/nuit et astuces pour payer le juste prix.",
        heroTitle: "Tarif Taxi Paris",
        heroSubtitle: "Tous les tarifs taxi à Paris en 2026 : barème officiel, forfaits et prix fixes TaxiNeo.",
        description: "Paris est la ville où les tarifs taxi sont les plus réglementés de France. Le compteur horokilométrique applique 4 tarifs (A, B, C, D) selon l'heure, le jour et la zone. Avec TaxiNeo, profitez de prix fixes sans compteur pour tous vos trajets parisiens.",
        grid: [
          { label: "Course courte (5 km)", priceDay: "12 — 18 €", priceNight: "15 — 22 €" },
          { label: "Traversée Paris (10 km)", priceDay: "20 — 30 €", priceNight: "25 — 35 €" },
          { label: "Paris → CDG", priceDay: "50 — 62 €", priceNight: "58 — 71 €" },
          { label: "Paris → Orly", priceDay: "35 — 45 €", priceNight: "40 — 52 €" },
          { label: "Paris → La Défense", priceDay: "25 — 35 €", priceNight: "30 — 40 €" },
          { label: "Paris → Versailles", priceDay: "40 — 55 €", priceNight: "46 — 63 €" },
        ],
        faq: [
          { question: "Quel est le tarif minimum d'un taxi à Paris ?", answer: "La prise en charge minimale est de 7,30 € en 2026. C'est le montant minimum facturé, même pour une course très courte." },
          { question: "Comment est calculé le prix d'un taxi parisien ?", answer: "Le prix combine une prise en charge fixe (2,60 €), un tarif au kilomètre (1,14 à 1,78 €/km selon le tarif) et un tarif horaire d'attente (38,96 €/h)." },
          { question: "Les tarifs taxi Paris sont-ils les mêmes le dimanche ?", answer: "Non, le dimanche et les jours fériés appliquent le tarif D, le plus élevé. Avec TaxiNeo, le prix fixe ne change pas le dimanche." },
          { question: "Existe-t-il des forfaits taxi Paris ?", answer: "Oui, les forfaits aéroport sont obligatoires depuis 2016. TaxiNeo propose des forfaits pour tous les trajets, pas seulement les aéroports." },
        ],
      },
      en: {
        metaTitle: "Paris Taxi Fares 2026: prices, rates & fixed fares | TaxiNeo",
        metaDescription: "Discover Paris taxi fares in 2026. Official rates, airport flat rates, day/night pricing and tips for paying the right price.",
        heroTitle: "Paris Taxi Fares",
        heroSubtitle: "All Paris taxi fares in 2026: official rates, flat rates and TaxiNeo fixed prices.",
        description: "Paris has the most regulated taxi fares in France. The meter applies 4 rates (A, B, C, D) depending on time, day and zone. With TaxiNeo, enjoy fixed prices without a meter for all your Paris journeys.",
        grid: [
          { label: "Short ride (5 km)", priceDay: "€12 — €18", priceNight: "€15 — €22" },
          { label: "Across Paris (10 km)", priceDay: "€20 — €30", priceNight: "€25 — €35" },
          { label: "Paris → CDG", priceDay: "€50 — €62", priceNight: "€58 — €71" },
          { label: "Paris → Orly", priceDay: "€35 — €45", priceNight: "€40 — €52" },
          { label: "Paris → La Défense", priceDay: "€25 — €35", priceNight: "€30 — €40" },
          { label: "Paris → Versailles", priceDay: "€40 — €55", priceNight: "€46 — €63" },
        ],
        faq: [
          { question: "What is the minimum taxi fare in Paris?", answer: "The minimum fare is €7.30 in 2026. This is the minimum charged even for very short rides." },
          { question: "How is the Paris taxi price calculated?", answer: "The price combines a fixed pick-up fee (€2.60), a per-km rate (€1.14 to €1.78/km depending on the rate) and an hourly waiting rate (€38.96/h)." },
          { question: "Are Paris taxi fares the same on Sundays?", answer: "No, Sundays and holidays use rate D, the highest. With TaxiNeo, the fixed price doesn't change on Sundays." },
          { question: "Are there flat-rate taxi fares in Paris?", answer: "Yes, airport flat rates have been mandatory since 2016. TaxiNeo offers flat rates for all journeys, not just airports." },
        ],
      },
    },
  },
  {
    slug: "tarif-taxi-cdg",
    title: "Tarif Taxi CDG",
    type: "aeroport",
    lat: 49.0097,
    lng: 2.5479,
    i18n: {
      fr: {
        metaTitle: "Tarif Taxi CDG 2026 : forfaits Paris, tarifs et prix | TaxiNeo",
        metaDescription: "Tarifs taxi depuis l'aéroport CDG en 2026. Forfait rive droite/gauche, prix vers Disneyland, La Défense et toutes les destinations.",
        heroTitle: "Tarif Taxi Aéroport CDG",
        heroSubtitle: "Forfaits réglementés et prix fixes depuis l'aéroport Charles de Gaulle.",
        description: "Les tarifs taxi depuis CDG sont encadrés par des forfaits obligatoires vers Paris. Rive droite : 56 €, rive gauche : 65 €. TaxiNeo propose des forfaits pour toutes les destinations, pas seulement Paris.",
        grid: [
          { label: "CDG → Paris Rive Droite", priceDay: "56 €", priceNight: "56 €" },
          { label: "CDG → Paris Rive Gauche", priceDay: "65 €", priceNight: "65 €" },
          { label: "CDG → Disneyland", priceDay: "60 — 80 €", priceNight: "69 — 92 €" },
          { label: "CDG → La Défense", priceDay: "55 — 70 €", priceNight: "63 — 81 €" },
          { label: "CDG → Versailles", priceDay: "70 — 90 €", priceNight: "81 — 104 €" },
          { label: "CDG → Orly", priceDay: "65 — 85 €", priceNight: "75 — 98 €" },
        ],
        faq: [
          { question: "Quel est le forfait taxi CDG — Paris ?", answer: "Le forfait officiel est de 56 € pour la rive droite et 65 € pour la rive gauche, fixé par arrêté préfectoral." },
          { question: "Le forfait CDG est-il le même de nuit ?", answer: "Oui, les forfaits aéroport officiels s'appliquent 24h/24 sans majoration. Les destinations hors Paris peuvent avoir un supplément nuit." },
          { question: "Comment payer le taxi à CDG ?", answer: "Par carte bancaire (obligatoire), espèces ou paiement via l'application TaxiNeo." },
          { question: "Où prendre un taxi à CDG ?", answer: "Les stations taxi se trouvent à la sortie de chaque terminal, signalées par des panneaux bleus." },
        ],
      },
      en: {
        metaTitle: "CDG Airport Taxi Fares 2026: flat rates & prices | TaxiNeo",
        metaDescription: "CDG airport taxi fares in 2026. Regulated flat rates to Paris, prices to Disneyland, La Défense and all destinations.",
        heroTitle: "CDG Airport Taxi Fares",
        heroSubtitle: "Regulated flat rates and fixed prices from Charles de Gaulle Airport.",
        description: "Taxi fares from CDG are regulated with mandatory flat rates to Paris. Right Bank: €56, Left Bank: €65. TaxiNeo offers flat rates to all destinations, not just Paris.",
        grid: [
          { label: "CDG → Paris Right Bank", priceDay: "€56", priceNight: "€56" },
          { label: "CDG → Paris Left Bank", priceDay: "€65", priceNight: "€65" },
          { label: "CDG → Disneyland", priceDay: "€60 — €80", priceNight: "€69 — €92" },
          { label: "CDG → La Défense", priceDay: "€55 — €70", priceNight: "€63 — €81" },
          { label: "CDG → Versailles", priceDay: "€70 — €90", priceNight: "€81 — €104" },
          { label: "CDG → Orly", priceDay: "€65 — €85", priceNight: "€75 — €98" },
        ],
        faq: [
          { question: "What is the flat rate taxi CDG — Paris?", answer: "The official flat rate is €56 for the Right Bank and €65 for the Left Bank, set by prefectural order." },
          { question: "Is the CDG flat rate the same at night?", answer: "Yes, official airport flat rates apply 24/7 with no surcharge. Destinations outside Paris may have a night supplement." },
          { question: "How to pay for a taxi at CDG?", answer: "By bank card (mandatory), cash or payment via the TaxiNeo app." },
          { question: "Where to find a taxi at CDG?", answer: "Taxi ranks are at the exit of each terminal, indicated by blue signs." },
        ],
      },
    },
  },
  {
    slug: "tarif-taxi-orly",
    title: "Tarif Taxi Orly",
    type: "aeroport",
    lat: 48.7262,
    lng: 2.3652,
    i18n: {
      fr: {
        metaTitle: "Tarif Taxi Orly 2026 : forfaits Paris, tarifs et prix | TaxiNeo",
        metaDescription: "Tarifs taxi depuis Orly en 2026. Forfait Paris rive droite/gauche, prix vers toutes les destinations.",
        heroTitle: "Tarif Taxi Aéroport d'Orly",
        heroSubtitle: "Forfaits réglementés et prix fixes depuis l'aéroport d'Orly.",
        description: "Les forfaits taxi Orly — Paris sont réglementés. Rive gauche : 35 €, rive droite : 41 €. TaxiNeo étend les forfaits à toutes les destinations.",
        grid: [
          { label: "Orly → Paris Rive Gauche", priceDay: "35 €", priceNight: "35 €" },
          { label: "Orly → Paris Rive Droite", priceDay: "41 €", priceNight: "41 €" },
          { label: "Orly → La Défense", priceDay: "50 — 65 €", priceNight: "58 — 75 €" },
          { label: "Orly → Versailles", priceDay: "40 — 55 €", priceNight: "46 — 63 €" },
          { label: "Orly → Disneyland", priceDay: "70 — 90 €", priceNight: "81 — 104 €" },
          { label: "Orly → CDG", priceDay: "65 — 85 €", priceNight: "75 — 98 €" },
        ],
        faq: [
          { question: "Quel est le forfait taxi Orly — Paris ?", answer: "35 € vers la rive gauche, 41 € vers la rive droite. Ces forfaits sont fixés par arrêté préfectoral." },
          { question: "Le forfait change-t-il la nuit ?", answer: "Non, les forfaits officiels aéroport sont identiques de jour comme de nuit." },
          { question: "Peut-on payer par carte à Orly ?", answer: "Oui, le paiement par carte bancaire est obligatoire dans tous les taxis français." },
          { question: "Comment trouver un taxi à Orly ?", answer: "Les stations taxi sont situées à la sortie de chaque terminal (Orly 1 à 4)." },
        ],
      },
      en: {
        metaTitle: "Orly Airport Taxi Fares 2026: flat rates & prices | TaxiNeo",
        metaDescription: "Orly airport taxi fares in 2026. Regulated flat rates to Paris, prices to all destinations.",
        heroTitle: "Orly Airport Taxi Fares",
        heroSubtitle: "Regulated flat rates and fixed prices from Orly Airport.",
        description: "Orly — Paris taxi flat rates are regulated. Left Bank: €35, Right Bank: €41. TaxiNeo extends flat rates to all destinations.",
        grid: [
          { label: "Orly → Paris Left Bank", priceDay: "€35", priceNight: "€35" },
          { label: "Orly → Paris Right Bank", priceDay: "€41", priceNight: "€41" },
          { label: "Orly → La Défense", priceDay: "€50 — €65", priceNight: "€58 — €75" },
          { label: "Orly → Versailles", priceDay: "€40 — €55", priceNight: "€46 — €63" },
          { label: "Orly → Disneyland", priceDay: "€70 — €90", priceNight: "€81 — €104" },
          { label: "Orly → CDG", priceDay: "€65 — €85", priceNight: "€75 — €98" },
        ],
        faq: [
          { question: "What is the flat rate Orly — Paris?", answer: "€35 to the Left Bank, €41 to the Right Bank. These flat rates are set by prefectural order." },
          { question: "Does the flat rate change at night?", answer: "No, official airport flat rates are the same day and night." },
          { question: "Can I pay by card at Orly?", answer: "Yes, card payment is mandatory in all French taxis." },
          { question: "How to find a taxi at Orly?", answer: "Taxi ranks are at the exit of each terminal (Orly 1 to 4)." },
        ],
      },
    },
  },
];

// Generate remaining tarifs programmatically
const simpleTarifs: Array<{
  slug: string; title: string; type: Tarif["type"]; lat: number; lng: number;
  frTitle: string; enTitle: string; frDesc: string; enDesc: string;
  grid: { label: string; day: string; night: string; dayEn: string; nightEn: string }[];
}> = [
  { slug: "tarif-taxi-lyon", title: "Tarif Taxi Lyon", type: "ville", lat: 45.764, lng: 4.8357,
    frTitle: "Tarif Taxi Lyon", enTitle: "Lyon Taxi Fares", frDesc: "Découvrez les tarifs taxi à Lyon en 2026. Prix des courses, forfaits aéroport Saint-Exupéry et tarifs vers les principales destinations lyonnaises.", enDesc: "Discover Lyon taxi fares in 2026. Ride prices, Saint-Exupéry airport flat rates and fares to Lyon's main destinations.",
    grid: [
      { label: "Course courte (5 km)", day: "10 — 15 €", night: "12 — 18 €", dayEn: "€10 — €15", nightEn: "€12 — €18" },
      { label: "Lyon → Aéroport", day: "50 — 65 €", night: "58 — 75 €", dayEn: "€50 — €65", nightEn: "€58 — €75" },
      { label: "Lyon → Part-Dieu", day: "10 — 18 €", night: "12 — 21 €", dayEn: "€10 — €18", nightEn: "€12 — €21" },
      { label: "Lyon → Grenoble", day: "130 — 160 €", night: "150 — 184 €", dayEn: "€130 — €160", nightEn: "€150 — €184" },
    ] },
  { slug: "tarif-taxi-nice", title: "Tarif Taxi Nice", type: "ville", lat: 43.7102, lng: 7.262,
    frTitle: "Tarif Taxi Nice", enTitle: "Nice Taxi Fares", frDesc: "Tarifs taxi à Nice en 2026. Prix des courses sur la Côte d'Azur, forfaits aéroport Nice et tarifs vers Monaco, Cannes et Antibes.", enDesc: "Nice taxi fares in 2026. French Riviera ride prices, Nice airport flat rates and fares to Monaco, Cannes and Antibes.",
    grid: [
      { label: "Nice Centre (5 km)", day: "10 — 15 €", night: "12 — 18 €", dayEn: "€10 — €15", nightEn: "€12 — €18" },
      { label: "Nice → Aéroport", day: "25 — 35 €", night: "29 — 40 €", dayEn: "€25 — €35", nightEn: "€29 — €40" },
      { label: "Nice → Monaco", day: "50 — 70 €", night: "58 — 81 €", dayEn: "€50 — €70", nightEn: "€58 — €81" },
      { label: "Nice → Cannes", day: "50 — 65 €", night: "58 — 75 €", dayEn: "€50 — €65", nightEn: "€58 — €75" },
    ] },
  { slug: "tarif-taxi-marseille", title: "Tarif Taxi Marseille", type: "ville", lat: 43.2965, lng: 5.3698,
    frTitle: "Tarif Taxi Marseille", enTitle: "Marseille Taxi Fares", frDesc: "Tarifs taxi à Marseille en 2026. Prix des courses, forfait aéroport Provence, tarifs vers Aix-en-Provence et Cassis.", enDesc: "Marseille taxi fares in 2026. Ride prices, Provence airport flat rates, fares to Aix-en-Provence and Cassis.",
    grid: [
      { label: "Marseille Centre (5 km)", day: "10 — 15 €", night: "12 — 18 €", dayEn: "€10 — €15", nightEn: "€12 — €18" },
      { label: "Marseille → Aéroport", day: "50 — 65 €", night: "58 — 75 €", dayEn: "€50 — €65", nightEn: "€58 — €75" },
      { label: "Marseille → Aix", day: "45 — 60 €", night: "52 — 69 €", dayEn: "€45 — €60", nightEn: "€52 — €69" },
      { label: "Marseille → Cassis", day: "35 — 50 €", night: "40 — 58 €", dayEn: "€35 — €50", nightEn: "€40 — €58" },
    ] },
  { slug: "tarif-taxi-toulouse", title: "Tarif Taxi Toulouse", type: "ville", lat: 43.6047, lng: 1.4442,
    frTitle: "Tarif Taxi Toulouse", enTitle: "Toulouse Taxi Fares", frDesc: "Tarifs taxi à Toulouse en 2026. Prix des courses, forfait aéroport Blagnac et tarifs vers Carcassonne.", enDesc: "Toulouse taxi fares in 2026. Ride prices, Blagnac airport flat rates and fares to Carcassonne.",
    grid: [
      { label: "Toulouse Centre (5 km)", day: "10 — 14 €", night: "12 — 16 €", dayEn: "€10 — €14", nightEn: "€12 — €16" },
      { label: "Toulouse → Aéroport", day: "30 — 40 €", night: "35 — 46 €", dayEn: "€30 — €40", nightEn: "€35 — €46" },
      { label: "Toulouse → Carcassonne", day: "110 — 140 €", night: "127 — 161 €", dayEn: "€110 — €140", nightEn: "€127 — €161" },
    ] },
  { slug: "tarif-taxi-bordeaux", title: "Tarif Taxi Bordeaux", type: "ville", lat: 44.8378, lng: -0.5792,
    frTitle: "Tarif Taxi Bordeaux", enTitle: "Bordeaux Taxi Fares", frDesc: "Tarifs taxi à Bordeaux en 2026. Prix des courses, forfait aéroport Mérignac, tarifs vers Saint-Émilion et Arcachon.", enDesc: "Bordeaux taxi fares in 2026. Ride prices, Mérignac airport flat rates, fares to Saint-Émilion and Arcachon.",
    grid: [
      { label: "Bordeaux Centre (5 km)", day: "10 — 14 €", night: "12 — 16 €", dayEn: "€10 — €14", nightEn: "€12 — €16" },
      { label: "Bordeaux → Aéroport", day: "35 — 45 €", night: "40 — 52 €", dayEn: "€35 — €45", nightEn: "€40 — €52" },
      { label: "Bordeaux → Saint-Émilion", day: "55 — 75 €", night: "63 — 86 €", dayEn: "€55 — €75", nightEn: "€63 — €86" },
      { label: "Bordeaux → Arcachon", day: "75 — 95 €", night: "86 — 109 €", dayEn: "€75 — €95", nightEn: "€86 — €109" },
    ] },
  { slug: "tarif-taxi-77", title: "Tarif Taxi Seine-et-Marne (77)", type: "departement", lat: 48.6, lng: 2.9,
    frTitle: "Tarif Taxi Seine-et-Marne (77)", enTitle: "Seine-et-Marne (77) Taxi Fares", frDesc: "Tarifs taxi en Seine-et-Marne (77). Prix vers CDG, Orly, Disneyland Paris et les principales villes du département.", enDesc: "Taxi fares in Seine-et-Marne (77). Prices to CDG, Orly, Disneyland Paris and main department towns.",
    grid: [
      { label: "Meaux → CDG", day: "50 — 70 €", night: "58 — 81 €", dayEn: "€50 — €70", nightEn: "€58 — €81" },
      { label: "Melun → Paris", day: "60 — 80 €", night: "69 — 92 €", dayEn: "€60 — €80", nightEn: "€69 — €92" },
      { label: "Fontainebleau → Paris", day: "80 — 100 €", night: "92 — 115 €", dayEn: "€80 — €100", nightEn: "€92 — €115" },
      { label: "Marne-la-Vallée → CDG", day: "40 — 55 €", night: "46 — 63 €", dayEn: "€40 — €55", nightEn: "€46 — €63" },
    ] },
  { slug: "tarif-taxi-91", title: "Tarif Taxi Essonne (91)", type: "departement", lat: 48.5, lng: 2.3,
    frTitle: "Tarif Taxi Essonne (91)", enTitle: "Essonne (91) Taxi Fares", frDesc: "Tarifs taxi en Essonne (91). Prix vers Paris, Orly, CDG et les villes du département.", enDesc: "Taxi fares in Essonne (91). Prices to Paris, Orly, CDG and department towns.",
    grid: [
      { label: "Évry → Paris", day: "40 — 55 €", night: "46 — 63 €", dayEn: "€40 — €55", nightEn: "€46 — €63" },
      { label: "Évry → Orly", day: "25 — 35 €", night: "29 — 40 €", dayEn: "€25 — €35", nightEn: "€29 — €40" },
      { label: "Massy → Paris", day: "30 — 40 €", night: "35 — 46 €", dayEn: "€30 — €40", nightEn: "€35 — €46" },
    ] },
  { slug: "tarif-taxi-92", title: "Tarif Taxi Hauts-de-Seine (92)", type: "departement", lat: 48.83, lng: 2.22,
    frTitle: "Tarif Taxi Hauts-de-Seine (92)", enTitle: "Hauts-de-Seine (92) Taxi Fares", frDesc: "Tarifs taxi dans les Hauts-de-Seine (92). Prix vers Paris, CDG, Orly et La Défense.", enDesc: "Taxi fares in Hauts-de-Seine (92). Prices to Paris, CDG, Orly and La Défense.",
    grid: [
      { label: "La Défense → Paris", day: "25 — 35 €", night: "29 — 40 €", dayEn: "€25 — €35", nightEn: "€29 — €40" },
      { label: "La Défense → CDG", day: "55 — 70 €", night: "63 — 81 €", dayEn: "€55 — €70", nightEn: "€63 — €81" },
      { label: "Boulogne → Orly", day: "35 — 45 €", night: "40 — 52 €", dayEn: "€35 — €45", nightEn: "€40 — €52" },
    ] },
  { slug: "tarif-taxi-93", title: "Tarif Taxi Seine-Saint-Denis (93)", type: "departement", lat: 48.91, lng: 2.48,
    frTitle: "Tarif Taxi Seine-Saint-Denis (93)", enTitle: "Seine-Saint-Denis (93) Taxi Fares", frDesc: "Tarifs taxi en Seine-Saint-Denis (93). Prix vers Paris, CDG, Orly et les villes du département.", enDesc: "Taxi fares in Seine-Saint-Denis (93). Prices to Paris, CDG, Orly and department towns.",
    grid: [
      { label: "Saint-Denis → CDG", day: "25 — 35 €", night: "29 — 40 €", dayEn: "€25 — €35", nightEn: "€29 — €40" },
      { label: "Bobigny → Paris", day: "20 — 30 €", night: "23 — 35 €", dayEn: "€20 — €30", nightEn: "€23 — €35" },
      { label: "Montreuil → Orly", day: "30 — 40 €", night: "35 — 46 €", dayEn: "€30 — €40", nightEn: "€35 — €46" },
    ] },
  { slug: "tarif-taxi-94", title: "Tarif Taxi Val-de-Marne (94)", type: "departement", lat: 48.78, lng: 2.47,
    frTitle: "Tarif Taxi Val-de-Marne (94)", enTitle: "Val-de-Marne (94) Taxi Fares", frDesc: "Tarifs taxi dans le Val-de-Marne (94). Prix vers Paris, Orly, CDG et les villes du département.", enDesc: "Taxi fares in Val-de-Marne (94). Prices to Paris, Orly, CDG and department towns.",
    grid: [
      { label: "Créteil → Paris", day: "25 — 35 €", night: "29 — 40 €", dayEn: "€25 — €35", nightEn: "€29 — €40" },
      { label: "Créteil → Orly", day: "20 — 30 €", night: "23 — 35 €", dayEn: "€20 — €30", nightEn: "€23 — €35" },
      { label: "Vincennes → CDG", day: "45 — 60 €", night: "52 — 69 €", dayEn: "€45 — €60", nightEn: "€52 — €69" },
    ] },
  { slug: "tarif-taxi-95", title: "Tarif Taxi Val-d'Oise (95)", type: "departement", lat: 49.05, lng: 2.17,
    frTitle: "Tarif Taxi Val-d'Oise (95)", enTitle: "Val-d'Oise (95) Taxi Fares", frDesc: "Tarifs taxi dans le Val-d'Oise (95). Prix vers Paris, CDG, Orly et les villes du département.", enDesc: "Taxi fares in Val-d'Oise (95). Prices to Paris, CDG, Orly and department towns.",
    grid: [
      { label: "Cergy → Paris", day: "45 — 60 €", night: "52 — 69 €", dayEn: "€45 — €60", nightEn: "€52 — €69" },
      { label: "Cergy → CDG", day: "40 — 55 €", night: "46 — 63 €", dayEn: "€40 — €55", nightEn: "€46 — €63" },
      { label: "Enghien → Paris", day: "25 — 35 €", night: "29 — 40 €", dayEn: "€25 — €35", nightEn: "€29 — €40" },
    ] },
  { slug: "tarif-taxi-78", title: "Tarif Taxi Yvelines (78)", type: "departement", lat: 48.8, lng: 1.9,
    frTitle: "Tarif Taxi Yvelines (78)", enTitle: "Yvelines (78) Taxi Fares", frDesc: "Tarifs taxi dans les Yvelines (78). Prix vers Paris, CDG, Orly, Versailles et les villes du département.", enDesc: "Taxi fares in Yvelines (78). Prices to Paris, CDG, Orly, Versailles and department towns.",
    grid: [
      { label: "Versailles → Paris", day: "40 — 55 €", night: "46 — 63 €", dayEn: "€40 — €55", nightEn: "€46 — €63" },
      { label: "Versailles → CDG", day: "70 — 90 €", night: "81 — 104 €", dayEn: "€70 — €90", nightEn: "€81 — €104" },
      { label: "Saint-Germain → Paris", day: "30 — 40 €", night: "35 — 46 €", dayEn: "€30 — €40", nightEn: "€35 — €46" },
    ] },
  { slug: "tarif-taxi-nuit", title: "Tarif Taxi Nuit", type: "special", lat: 48.8566, lng: 2.3522,
    frTitle: "Tarif Taxi de Nuit", enTitle: "Night Taxi Fares", frDesc: "Tarifs taxi de nuit en France. Majoration, horaires, réglementation et astuces pour payer moins cher la nuit.", enDesc: "Night taxi fares in France. Surcharges, hours, regulations and tips for paying less at night.",
    grid: [
      { label: "Majoration nuit Paris", day: "Tarif A/B", night: "+28 à 41 %", dayEn: "Rate A/B", nightEn: "+28 to 41%" },
      { label: "Majoration nuit province", day: "Tarif jour", night: "+15 à 30 %", dayEn: "Day rate", nightEn: "+15 to 30%" },
      { label: "Horaires nuit", day: "7h — 19h", night: "19h — 7h", dayEn: "7am — 7pm", nightEn: "7pm — 7am" },
    ] },
  { slug: "tarif-taxi-dimanche", title: "Tarif Taxi Dimanche", type: "special", lat: 48.8566, lng: 2.3522,
    frTitle: "Tarif Taxi Dimanche & Jours Fériés", enTitle: "Sunday & Holiday Taxi Fares", frDesc: "Tarifs taxi le dimanche et jours fériés en France. Majoration, réglementation et prix fixes TaxiNeo.", enDesc: "Sunday and holiday taxi fares in France. Surcharges, regulations and TaxiNeo fixed prices.",
    grid: [
      { label: "Majoration dimanche Paris", day: "—", night: "Tarif D toute la journée", dayEn: "—", nightEn: "Rate D all day" },
      { label: "Majoration jours fériés", day: "—", night: "+15 à 50 %", dayEn: "—", nightEn: "+15 to 50%" },
      { label: "Prix fixe TaxiNeo", day: "Identique", night: "Identique", dayEn: "Same", nightEn: "Same" },
    ] },
  { slug: "tarif-taxi-bagages", title: "Tarif Taxi Bagages", type: "special", lat: 48.8566, lng: 2.3522,
    frTitle: "Supplément Bagages Taxi", enTitle: "Taxi Luggage Surcharges", frDesc: "Supplément bagages en taxi : règles, tarifs et ce que dit la loi. Zéro supplément avec TaxiNeo.", enDesc: "Taxi luggage surcharges: rules, fares and what the law says. Zero surcharge with TaxiNeo.",
    grid: [
      { label: "Bagage standard", day: "Gratuit", night: "Gratuit", dayEn: "Free", nightEn: "Free" },
      { label: "Bagage volumineux", day: "0 — 3 €", night: "0 — 3 €", dayEn: "€0 — €3", nightEn: "€0 — €3" },
      { label: "TaxiNeo — tous bagages", day: "Gratuit", night: "Gratuit", dayEn: "Free", nightEn: "Free" },
    ] },
  { slug: "tarif-taxi-animaux", title: "Tarif Taxi Animaux", type: "special", lat: 48.8566, lng: 2.3522,
    frTitle: "Taxi avec Animaux : Tarifs et Règles", enTitle: "Taxi with Pets: Fares & Rules", frDesc: "Prendre un taxi avec un animal : suppléments, règles et droits des passagers.", enDesc: "Taking a taxi with a pet: surcharges, rules and passenger rights.",
    grid: [
      { label: "Petit animal en cage", day: "Gratuit", night: "Gratuit", dayEn: "Free", nightEn: "Free" },
      { label: "Chien moyen/grand", day: "0 — 5 €", night: "0 — 5 €", dayEn: "€0 — €5", nightEn: "€0 — €5" },
      { label: "Chien guide d'aveugle", day: "Gratuit (obligatoire)", night: "Gratuit", dayEn: "Free (mandatory)", nightEn: "Free" },
    ] },
];

// Build full tarif objects from simplified data
for (const t of simpleTarifs) {
  tarifs.push({
    slug: t.slug,
    title: t.title,
    type: t.type,
    lat: t.lat,
    lng: t.lng,
    i18n: {
      fr: {
        metaTitle: `${t.frTitle} 2026 : prix et barème | TaxiNeo`,
        metaDescription: t.frDesc,
        heroTitle: t.frTitle,
        heroSubtitle: `Tous les tarifs taxi en 2026 : barème officiel, forfaits et prix fixes TaxiNeo.`,
        description: t.frDesc,
        grid: t.grid.map((g) => ({ label: g.label, priceDay: g.day, priceNight: g.night })),
        faq: [
          { question: `Quel est le tarif taxi pour ${t.title.replace("Tarif Taxi ", "")} ?`, answer: `Les tarifs varient selon la distance et l'heure. Consultez notre grille tarifaire ci-dessus pour les prix détaillés.` },
          { question: "Les prix sont-ils garantis ?", answer: "Avec TaxiNeo, tous les prix sont fixés à la réservation et garantis. Pas de compteur, pas de surprise." },
          { question: "Y a-t-il un supplément pour les bagages ?", answer: "Non, aucun supplément bagage avec TaxiNeo. Nos véhicules accueillent jusqu'à 4 passagers avec leurs valises." },
          { question: "Comment réserver ?", answer: "Réservez en ligne sur taxineo.fr ou par téléphone. Réservation possible jusqu'à 30 jours à l'avance." },
        ],
      },
      en: {
        metaTitle: `${t.enTitle} 2026: prices & rates | TaxiNeo`,
        metaDescription: t.enDesc,
        heroTitle: t.enTitle,
        heroSubtitle: `All taxi fares in 2026: official rates, flat rates and TaxiNeo fixed prices.`,
        description: t.enDesc,
        grid: t.grid.map((g) => ({ label: g.label, priceDay: g.dayEn, priceNight: g.nightEn })),
        faq: [
          { question: `What is the taxi fare for ${t.enTitle.replace(" Taxi Fares", "")}?`, answer: `Fares vary by distance and time. See our fare grid above for detailed prices.` },
          { question: "Are prices guaranteed?", answer: "With TaxiNeo, all prices are set at booking and guaranteed. No meter, no surprises." },
          { question: "Is there a luggage surcharge?", answer: "No, no luggage surcharge with TaxiNeo. Our vehicles accommodate up to 4 passengers with suitcases." },
          { question: "How to book?", answer: "Book online at taxineo.fr or by phone. Booking available up to 30 days in advance." },
        ],
      },
    },
  });
}

export function getTarifBySlug(slug: string): Tarif | undefined {
  return tarifs.find((t) => t.slug === slug);
}

export function getTarifsByType(type: Tarif["type"]): Tarif[] {
  return tarifs.filter((t) => t.type === type);
}
