// ─── Interfaces ─────────────────────────────────────────────

export interface MadPricingTier {
  duration: string; // "1h", "demi-journee", "journee", "soiree"
  labelFr: string;
  labelEn: string;
  berline: string; // price range e.g. "45-55 €"
  suv: string;
  van: string;
}

export interface MadCityData {
  citySlug: string; // reference to cities.ts slug
  pricing: MadPricingTier[];
}

// ─── Pricing Templates ─────────────────────────────────────

/** Paris & inner 92 suburbs (Boulogne, Neuilly, Issy, Levallois...) */
const PRICING_PARIS: MadPricingTier[] = [
  {
    duration: "1h",
    labelFr: "1 heure",
    labelEn: "1 hour",
    berline: "45-55 \u20ac",
    suv: "55-65 \u20ac",
    van: "65-75 \u20ac",
  },
  {
    duration: "demi-journee",
    labelFr: "Demi-journ\u00e9e (4 h)",
    labelEn: "Half day (4 h)",
    berline: "180-220 \u20ac",
    suv: "220-260 \u20ac",
    van: "260-300 \u20ac",
  },
  {
    duration: "journee",
    labelFr: "Journ\u00e9e (8 h)",
    labelEn: "Full day (8 h)",
    berline: "350-420 \u20ac",
    suv: "420-500 \u20ac",
    van: "500-580 \u20ac",
  },
  {
    duration: "soiree",
    labelFr: "Soir\u00e9e (5 h)",
    labelEn: "Evening (5 h)",
    berline: "200-250 \u20ac",
    suv: "250-300 \u20ac",
    van: "300-350 \u20ac",
  },
];

/** Close suburbs \u2013 92 outer ring, 93/94 adjacent, nearby 78 */
const PRICING_CLOSE_92: MadPricingTier[] = [
  {
    duration: "1h",
    labelFr: "1 heure",
    labelEn: "1 hour",
    berline: "50-60 \u20ac",
    suv: "60-70 \u20ac",
    van: "70-85 \u20ac",
  },
  {
    duration: "demi-journee",
    labelFr: "Demi-journ\u00e9e (4 h)",
    labelEn: "Half day (4 h)",
    berline: "200-240 \u20ac",
    suv: "240-290 \u20ac",
    van: "290-330 \u20ac",
  },
  {
    duration: "journee",
    labelFr: "Journ\u00e9e (8 h)",
    labelEn: "Full day (8 h)",
    berline: "390-460 \u20ac",
    suv: "460-550 \u20ac",
    van: "550-640 \u20ac",
  },
  {
    duration: "soiree",
    labelFr: "Soir\u00e9e (5 h)",
    labelEn: "Evening (5 h)",
    berline: "220-270 \u20ac",
    suv: "270-330 \u20ac",
    van: "330-385 \u20ac",
  },
];

/** Medium-distance IDF \u2013 outer 77 west/north, 78, 91, 95 cities */
const PRICING_MEDIUM_IDF: MadPricingTier[] = [
  {
    duration: "1h",
    labelFr: "1 heure",
    labelEn: "1 hour",
    berline: "55-65 \u20ac",
    suv: "65-75 \u20ac",
    van: "75-90 \u20ac",
  },
  {
    duration: "demi-journee",
    labelFr: "Demi-journ\u00e9e (4 h)",
    labelEn: "Half day (4 h)",
    berline: "210-260 \u20ac",
    suv: "260-310 \u20ac",
    van: "310-360 \u20ac",
  },
  {
    duration: "journee",
    labelFr: "Journ\u00e9e (8 h)",
    labelEn: "Full day (8 h)",
    berline: "420-500 \u20ac",
    suv: "500-590 \u20ac",
    van: "590-690 \u20ac",
  },
  {
    duration: "soiree",
    labelFr: "Soir\u00e9e (5 h)",
    labelEn: "Evening (5 h)",
    berline: "240-290 \u20ac",
    suv: "290-350 \u20ac",
    van: "350-410 \u20ac",
  },
];

/** Far suburbs \u2013 south 77 (Fontainebleau, Provins, Nemours, Montereau...) */
const PRICING_FAR_77: MadPricingTier[] = [
  {
    duration: "1h",
    labelFr: "1 heure",
    labelEn: "1 hour",
    berline: "60-75 \u20ac",
    suv: "75-85 \u20ac",
    van: "85-100 \u20ac",
  },
  {
    duration: "demi-journee",
    labelFr: "Demi-journ\u00e9e (4 h)",
    labelEn: "Half day (4 h)",
    berline: "240-290 \u20ac",
    suv: "290-350 \u20ac",
    van: "350-410 \u20ac",
  },
  {
    duration: "journee",
    labelFr: "Journ\u00e9e (8 h)",
    labelEn: "Full day (8 h)",
    berline: "470-560 \u20ac",
    suv: "560-670 \u20ac",
    van: "670-780 \u20ac",
  },
  {
    duration: "soiree",
    labelFr: "Soir\u00e9e (5 h)",
    labelEn: "Evening (5 h)",
    berline: "270-340 \u20ac",
    suv: "340-400 \u20ac",
    van: "400-470 \u20ac",
  },
];

/** Grandes métropoles – Lyon, Marseille, Bordeaux, Toulouse, Nice, Lille, Nantes, Strasbourg, Montpellier, Rennes */
const PRICING_GRANDE_METROPOLE: MadPricingTier[] = [
  {
    duration: "1h",
    labelFr: "1 heure",
    labelEn: "1 hour",
    berline: "45-55 \u20ac",
    suv: "55-65 \u20ac",
    van: "65-75 \u20ac",
  },
  {
    duration: "demi-journee",
    labelFr: "Demi-journ\u00e9e (4 h)",
    labelEn: "Half day (4 h)",
    berline: "180-220 \u20ac",
    suv: "220-260 \u20ac",
    van: "260-300 \u20ac",
  },
  {
    duration: "journee",
    labelFr: "Journ\u00e9e (8 h)",
    labelEn: "Full day (8 h)",
    berline: "350-420 \u20ac",
    suv: "420-500 \u20ac",
    van: "500-580 \u20ac",
  },
  {
    duration: "soiree",
    labelFr: "Soir\u00e9e (5 h)",
    labelEn: "Evening (5 h)",
    berline: "200-250 \u20ac",
    suv: "250-300 \u20ac",
    van: "300-350 \u20ac",
  },
];

/** Métropoles 100k+ – autres grandes villes françaises */
const PRICING_METROPOLE: MadPricingTier[] = [
  {
    duration: "1h",
    labelFr: "1 heure",
    labelEn: "1 hour",
    berline: "50-60 \u20ac",
    suv: "60-70 \u20ac",
    van: "70-85 \u20ac",
  },
  {
    duration: "demi-journee",
    labelFr: "Demi-journ\u00e9e (4 h)",
    labelEn: "Half day (4 h)",
    berline: "200-240 \u20ac",
    suv: "240-290 \u20ac",
    van: "290-330 \u20ac",
  },
  {
    duration: "journee",
    labelFr: "Journ\u00e9e (8 h)",
    labelEn: "Full day (8 h)",
    berline: "390-460 \u20ac",
    suv: "460-550 \u20ac",
    van: "550-640 \u20ac",
  },
  {
    duration: "soiree",
    labelFr: "Soir\u00e9e (5 h)",
    labelEn: "Evening (5 h)",
    berline: "220-270 \u20ac",
    suv: "270-330 \u20ac",
    van: "330-385 \u20ac",
  },
];

// ─── Helper ─────────────────────────────────────────────────

function madCity(citySlug: string, pricing: MadPricingTier[]): MadCityData {
  return { citySlug, pricing };
}

// ─── Data (63 IDF cities) ───────────────────────────────────

export const madCities: MadCityData[] = [
  // ── Paris ──────────────────────────────────────────────────
  madCity("paris", PRICING_PARIS),

  // ── 95 \u2013 Val-d\u2019Oise ──────────────────────────────────────
  madCity("argenteuil", PRICING_MEDIUM_IDF),

  // ── 78 \u2013 Yvelines ──────────────────────────────────────────
  madCity("versailles", PRICING_CLOSE_92),

  // ── 77 south \u2013 far ────────────────────────────────────────
  madCity("fontainebleau", PRICING_FAR_77),
  madCity("avon", PRICING_FAR_77),
  madCity("moret-sur-loing", PRICING_FAR_77),
  madCity("barbizon", PRICING_FAR_77),
  madCity("montereau-fault-yonne", PRICING_FAR_77),

  // ── 77 west / north \u2013 medium ────────────────────────────────
  madCity("chelles", PRICING_MEDIUM_IDF),
  madCity("villeparisis", PRICING_MEDIUM_IDF),
  madCity("mitry-mory", PRICING_MEDIUM_IDF),
  madCity("claye-souilly", PRICING_MEDIUM_IDF),
  madCity("champs-sur-marne", PRICING_MEDIUM_IDF),
  madCity("torcy", PRICING_MEDIUM_IDF),
  madCity("noisiel", PRICING_MEDIUM_IDF),
  madCity("lognes", PRICING_MEDIUM_IDF),
  madCity("bussy-saint-georges", PRICING_MEDIUM_IDF),
  madCity("lagny-sur-marne", PRICING_MEDIUM_IDF),
  madCity("pontault-combault", PRICING_MEDIUM_IDF),
  madCity("roissy-en-brie", PRICING_MEDIUM_IDF),
  madCity("ozoir-la-ferriere", PRICING_MEDIUM_IDF),
  madCity("vaires-sur-marne", PRICING_MEDIUM_IDF),
  madCity("dammarie-les-lys", PRICING_FAR_77),
  madCity("le-mee-sur-seine", PRICING_FAR_77),
  madCity("combs-la-ville", PRICING_MEDIUM_IDF),
  madCity("savigny-le-temple", PRICING_MEDIUM_IDF),
  madCity("brie-comte-robert", PRICING_MEDIUM_IDF),
  madCity("coulommiers", PRICING_FAR_77),
  madCity("provins", PRICING_FAR_77),
  madCity("nemours", PRICING_FAR_77),

  // ── 92 \u2013 Hauts-de-Seine (inner ring = PARIS pricing) ──────
  madCity("nanterre", PRICING_CLOSE_92),
  madCity("courbevoie", PRICING_PARIS),
  madCity("levallois-perret", PRICING_PARIS),
  madCity("neuilly-sur-seine", PRICING_PARIS),
  madCity("colombes", PRICING_CLOSE_92),
  madCity("rueil-malmaison", PRICING_CLOSE_92),
  madCity("asnieres-sur-seine", PRICING_PARIS),
  madCity("boulogne-billancourt", PRICING_PARIS),
  madCity("issy-les-moulineaux", PRICING_PARIS),
  madCity("meudon", PRICING_CLOSE_92),
  madCity("antony", PRICING_CLOSE_92),
  madCity("clichy", PRICING_PARIS),
  madCity("gennevilliers", PRICING_CLOSE_92),
  madCity("villeneuve-la-garenne", PRICING_CLOSE_92),
  madCity("puteaux", PRICING_PARIS),
  madCity("la-garenne-colombes", PRICING_PARIS),
  madCity("suresnes", PRICING_PARIS),
  madCity("saint-cloud", PRICING_CLOSE_92),
  madCity("garches", PRICING_CLOSE_92),
  madCity("chaville", PRICING_CLOSE_92),
  madCity("sevres", PRICING_CLOSE_92),
  madCity("ville-d-avray", PRICING_CLOSE_92),
  madCity("montrouge", PRICING_PARIS),
  madCity("malakoff", PRICING_PARIS),
  madCity("vanves", PRICING_PARIS),
  madCity("chatillon", PRICING_PARIS),
  madCity("clamart", PRICING_CLOSE_92),
  madCity("bagneux", PRICING_CLOSE_92),
  madCity("fontenay-aux-roses", PRICING_CLOSE_92),
  madCity("sceaux", PRICING_CLOSE_92),
  madCity("bourg-la-reine", PRICING_CLOSE_92),
  madCity("le-plessis-robinson", PRICING_CLOSE_92),
  madCity("chatenay-malabry", PRICING_CLOSE_92),

  // ── 93 – Seine-Saint-Denis ──────────────────────────────────
  madCity("saint-denis", PRICING_CLOSE_92),
  madCity("montreuil", PRICING_CLOSE_92),
  madCity("aubervilliers", PRICING_CLOSE_92),
  madCity("aulnay-sous-bois", PRICING_MEDIUM_IDF),
  madCity("drancy", PRICING_CLOSE_92),
  madCity("noisy-le-grand", PRICING_MEDIUM_IDF),
  madCity("le-blanc-mesnil", PRICING_CLOSE_92),
  madCity("pantin", PRICING_CLOSE_92),
  madCity("epinay-sur-seine", PRICING_CLOSE_92),
  madCity("bobigny", PRICING_CLOSE_92),
  madCity("bondy", PRICING_CLOSE_92),
  madCity("sevran", PRICING_MEDIUM_IDF),
  madCity("saint-ouen-sur-seine", PRICING_CLOSE_92),

  // ── 94 – Val-de-Marne ──────────────────────────────────────
  madCity("vitry-sur-seine", PRICING_CLOSE_92),
  madCity("creteil", PRICING_CLOSE_92),
  madCity("champigny-sur-marne", PRICING_CLOSE_92),
  madCity("saint-maur-des-fosses", PRICING_CLOSE_92),
  madCity("ivry-sur-seine", PRICING_CLOSE_92),
  madCity("maisons-alfort", PRICING_CLOSE_92),
  madCity("villejuif", PRICING_CLOSE_92),
  madCity("fontenay-sous-bois", PRICING_CLOSE_92),
  madCity("vincennes", PRICING_CLOSE_92),

  // ── 91 – Essonne ──────────────────────────────────────────
  madCity("evry-courcouronnes", PRICING_MEDIUM_IDF),
  madCity("corbeil-essonnes", PRICING_MEDIUM_IDF),
  madCity("massy", PRICING_MEDIUM_IDF),

  // ── 95 – Val-d'Oise ──────────────────────────────────────
  madCity("cergy", PRICING_MEDIUM_IDF),
  madCity("sarcelles", PRICING_MEDIUM_IDF),

  // ── 78 – Yvelines ──────────────────────────────────────────
  madCity("sartrouville", PRICING_MEDIUM_IDF),

  // ── 77 – Seine-et-Marne ────────────────────────────────────
  madCity("meaux", PRICING_MEDIUM_IDF),

  // ── Grandes métropoles (100k+) ──────────────────────────────

  // Auvergne-Rhône-Alpes
  madCity("lyon", PRICING_GRANDE_METROPOLE),
  madCity("saint-etienne", PRICING_METROPOLE),
  madCity("grenoble", PRICING_METROPOLE),
  madCity("villeurbanne", PRICING_METROPOLE),
  madCity("clermont-ferrand", PRICING_METROPOLE),
  madCity("annecy", PRICING_METROPOLE),
  madCity("valence", PRICING_METROPOLE),
  madCity("chambery", PRICING_METROPOLE),
  madCity("venissieux", PRICING_METROPOLE),
  madCity("vaulx-en-velin", PRICING_METROPOLE),

  // Provence-Alpes-Côte d'Azur
  madCity("marseille", PRICING_GRANDE_METROPOLE),
  madCity("nice", PRICING_GRANDE_METROPOLE),
  madCity("toulon", PRICING_METROPOLE),
  madCity("aix-en-provence", PRICING_METROPOLE),
  madCity("avignon", PRICING_METROPOLE),
  madCity("antibes", PRICING_METROPOLE),
  madCity("cannes", PRICING_METROPOLE),
  madCity("la-seyne-sur-mer", PRICING_METROPOLE),
  madCity("hyeres", PRICING_METROPOLE),
  madCity("frejus", PRICING_METROPOLE),
  madCity("arles", PRICING_METROPOLE),

  // Occitanie
  madCity("toulouse", PRICING_GRANDE_METROPOLE),
  madCity("montpellier", PRICING_GRANDE_METROPOLE),
  madCity("nimes", PRICING_METROPOLE),
  madCity("perpignan", PRICING_METROPOLE),

  // Nouvelle-Aquitaine
  madCity("bordeaux", PRICING_GRANDE_METROPOLE),
  madCity("limoges", PRICING_METROPOLE),

  // Pays de la Loire
  madCity("nantes", PRICING_GRANDE_METROPOLE),
  madCity("angers", PRICING_METROPOLE),
  madCity("le-mans", PRICING_METROPOLE),

  // Bretagne
  madCity("rennes", PRICING_GRANDE_METROPOLE),
  madCity("brest", PRICING_METROPOLE),

  // Hauts-de-France
  madCity("lille", PRICING_GRANDE_METROPOLE),
  madCity("reims", PRICING_METROPOLE),
  madCity("amiens", PRICING_METROPOLE),

  // Grand Est
  madCity("strasbourg", PRICING_GRANDE_METROPOLE),
  madCity("metz", PRICING_METROPOLE),
  madCity("mulhouse", PRICING_METROPOLE),
  madCity("nancy", PRICING_METROPOLE),
  madCity("besancon", PRICING_METROPOLE),

  // Normandie
  madCity("le-havre", PRICING_METROPOLE),
  madCity("rouen", PRICING_METROPOLE),
  madCity("caen", PRICING_METROPOLE),

  // Centre-Val de Loire
  madCity("tours", PRICING_METROPOLE),
  madCity("orleans", PRICING_METROPOLE),

  // Bourgogne-Franche-Comté
  madCity("dijon", PRICING_METROPOLE),
];

// ─── Helpers ────────────────────────────────────────────────

export function getMadCityBySlug(slug: string): MadCityData | undefined {
  return madCities.find((c) => c.citySlug === slug);
}

export function getMadCitySlugs(): string[] {
  return madCities.map((c) => c.citySlug);
}
