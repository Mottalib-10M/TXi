// ─── Interfaces ─────────────────────────────────────────────

export interface AssistancePricingTier {
  type: string; // "immediate" | "scheduled" | "round-trip-garage" | "waiting"
  labelFr: string;
  labelEn: string;
  berline: string;
  van: string;
}

export interface AssistanceCityData {
  citySlug: string;
  pricing: AssistancePricingTier[];
  garages: string[]; // 5-8 real garages in the city
  majorRoads: string[]; // main roads near the city
  nearestAutoroutes: string[]; // autoroute slugs like ["a6","a77"]
}

// ─── Pricing Templates ─────────────────────────────────────

/** Paris & close inner suburbs */
const PRICING_ASSISTANCE_PARIS: AssistancePricingTier[] = [
  {
    type: "immediate",
    labelFr: "Intervention immédiate",
    labelEn: "Immediate response",
    berline: "35-55 €",
    van: "50-75 €",
  },
  {
    type: "scheduled",
    labelFr: "Intervention programmée",
    labelEn: "Scheduled pickup",
    berline: "25-40 €",
    van: "35-55 €",
  },
  {
    type: "round-trip-garage",
    labelFr: "Aller-retour garage",
    labelEn: "Round trip to garage",
    berline: "55-85 €",
    van: "75-110 €",
  },
  {
    type: "waiting",
    labelFr: "Attente (par 30 min)",
    labelEn: "Waiting (per 30 min)",
    berline: "15-20 €",
    van: "20-25 €",
  },
];

/** IDF suburbs (92, 93, 94, 77, 78, 91, 95) */
const PRICING_ASSISTANCE_IDF: AssistancePricingTier[] = [
  {
    type: "immediate",
    labelFr: "Intervention immédiate",
    labelEn: "Immediate response",
    berline: "40-65 €",
    van: "55-85 €",
  },
  {
    type: "scheduled",
    labelFr: "Intervention programmée",
    labelEn: "Scheduled pickup",
    berline: "30-45 €",
    van: "40-60 €",
  },
  {
    type: "round-trip-garage",
    labelFr: "Aller-retour garage",
    labelEn: "Round trip to garage",
    berline: "60-95 €",
    van: "80-120 €",
  },
  {
    type: "waiting",
    labelFr: "Attente (par 30 min)",
    labelEn: "Waiting (per 30 min)",
    berline: "15-20 €",
    van: "20-25 €",
  },
];

/** Grandes métropoles hors IDF */
const PRICING_ASSISTANCE_METROPOLE: AssistancePricingTier[] = [
  {
    type: "immediate",
    labelFr: "Intervention immédiate",
    labelEn: "Immediate response",
    berline: "30-50 €",
    van: "45-70 €",
  },
  {
    type: "scheduled",
    labelFr: "Intervention programmée",
    labelEn: "Scheduled pickup",
    berline: "20-35 €",
    van: "30-50 €",
  },
  {
    type: "round-trip-garage",
    labelFr: "Aller-retour garage",
    labelEn: "Round trip to garage",
    berline: "45-75 €",
    van: "65-100 €",
  },
  {
    type: "waiting",
    labelFr: "Attente (par 30 min)",
    labelEn: "Waiting (per 30 min)",
    berline: "12-18 €",
    van: "15-22 €",
  },
];

// ─── Helper ─────────────────────────────────────────────────

function adCity(
  citySlug: string,
  pricing: AssistancePricingTier[],
  garages: string[],
  majorRoads: string[],
  nearestAutoroutes: string[],
): AssistanceCityData {
  return { citySlug, pricing, garages, majorRoads, nearestAutoroutes };
}

// ─── Data (138 cities) ──────────────────────────────────────

export const assistanceCities: AssistanceCityData[] = [
  // ── Paris ──────────────────────────────────────────────────
  adCity("paris", PRICING_ASSISTANCE_PARIS, [
    "Speedy Paris Bastille",
    "Midas Paris Convention",
    "Norauto Paris Bercy",
    "Feu Vert Paris Porte de Châtillon",
    "Euromaster Paris La Chapelle",
    "AD Expert Garage Saint-Antoine",
    "Point S Paris Daumesnil",
  ], ["Boulevard Périphérique", "A1", "A4", "A6", "Quai de Bercy"], ["a1", "a4", "a6"]),

  // ── 95 – Val-d'Oise ──────────────────────────────────────
  adCity("argenteuil", PRICING_ASSISTANCE_IDF, [
    "Speedy Argenteuil",
    "Midas Argenteuil",
    "Norauto Argenteuil",
    "Euromaster Argenteuil",
    "AD Expert Garage du Val",
    "Point S Argenteuil Centre",
  ], ["A15", "A86", "D311", "RD909"], ["a15", "a86"]),

  // ── 78 – Yvelines ──────────────────────────────────────────
  adCity("versailles", PRICING_ASSISTANCE_IDF, [
    "Speedy Versailles",
    "Midas Versailles",
    "Norauto Versailles Parly 2",
    "Euromaster Versailles",
    "Feu Vert Vélizy",
    "AD Expert Garage Royal Auto",
  ], ["A13", "A86", "N12", "D10", "D186"], ["a13", "a86"]),

  // ── 77 south – far ────────────────────────────────────────
  adCity("fontainebleau", PRICING_ASSISTANCE_IDF, [
    "Speedy Fontainebleau",
    "Garage Peugeot Fontainebleau",
    "AD Expert Garage du Château",
    "Euromaster Fontainebleau",
    "Point S Fontainebleau",
    "Garage Renault Fontainebleau",
  ], ["A6", "N7", "D607", "D606"], ["a6", "a77"]),
  adCity("avon", PRICING_ASSISTANCE_IDF, [
    "Garage Citroën Avon",
    "AD Expert Garage de la Forêt",
    "Point S Avon",
    "Euromaster Avon",
    "Garage Renault Avon",
  ], ["A6", "N7", "D607", "D137"], ["a6", "a77"]),
  adCity("moret-sur-loing", PRICING_ASSISTANCE_IDF, [
    "Garage Peugeot Moret",
    "AD Expert Garage du Loing",
    "Point S Moret-sur-Loing",
    "Garage Renault Moret",
    "Garage Citroën Moret",
  ], ["A6", "N6", "D606", "D403"], ["a6", "a77"]),
  adCity("barbizon", PRICING_ASSISTANCE_IDF, [
    "Garage de Barbizon",
    "AD Expert Garage des Peintres",
    "Garage Peugeot Chailly-en-Bière",
    "Speedy Fontainebleau",
    "Euromaster Fontainebleau",
  ], ["A6", "N7", "D64", "D607"], ["a6"]),
  adCity("montereau-fault-yonne", PRICING_ASSISTANCE_IDF, [
    "Speedy Montereau",
    "Garage Renault Montereau",
    "AD Expert Garage de la Confluence",
    "Point S Montereau",
    "Garage Peugeot Montereau",
    "Euromaster Montereau",
  ], ["A5", "D606", "N105", "D39"], ["a5", "a6"]),

  // ── 77 west / north – medium ────────────────────────────────
  adCity("chelles", PRICING_ASSISTANCE_IDF, [
    "Speedy Chelles",
    "Midas Chelles",
    "Norauto Chelles",
    "Euromaster Chelles",
    "AD Expert Garage de Chelles",
    "Feu Vert Chelles",
  ], ["A104", "A4", "D934", "D199"], ["a104", "a4"]),
  adCity("villeparisis", PRICING_ASSISTANCE_IDF, [
    "Speedy Villeparisis",
    "Midas Villeparisis",
    "Norauto Villeparisis",
    "Euromaster Villeparisis",
    "AD Expert Garage de Villeparisis",
  ], ["A104", "D212", "N3", "D84"], ["a104", "a4"]),
  adCity("mitry-mory", PRICING_ASSISTANCE_IDF, [
    "Garage Renault Mitry-Mory",
    "AD Expert Garage Mitry",
    "Point S Mitry-Mory",
    "Speedy Villeparisis",
    "Euromaster Claye-Souilly",
  ], ["A104", "D212", "N2", "D84"], ["a104", "a1"]),
  adCity("claye-souilly", PRICING_ASSISTANCE_IDF, [
    "Norauto Claye-Souilly",
    "Feu Vert Claye-Souilly",
    "Midas Claye-Souilly",
    "Euromaster Claye-Souilly",
    "AD Expert Garage de Souilly",
  ], ["A104", "N3", "D212", "D934"], ["a104", "a4"]),
  adCity("champs-sur-marne", PRICING_ASSISTANCE_IDF, [
    "Speedy Champs-sur-Marne",
    "Norauto Champs-sur-Marne",
    "Euromaster Torcy",
    "AD Expert Garage de la Marne",
    "Midas Noisiel",
  ], ["A4", "A104", "D199", "D370"], ["a4", "a104"]),
  adCity("torcy", PRICING_ASSISTANCE_IDF, [
    "Norauto Torcy Bay 1",
    "Feu Vert Torcy",
    "Speedy Torcy",
    "Euromaster Torcy",
    "Midas Noisiel",
    "AD Expert Garage de Torcy",
  ], ["A4", "A104", "D199", "D10"], ["a4", "a104"]),
  adCity("noisiel", PRICING_ASSISTANCE_IDF, [
    "Speedy Noisiel",
    "Midas Noisiel",
    "Euromaster Torcy",
    "AD Expert Garage de Noisiel",
    "Point S Lognes",
  ], ["A4", "A104", "D199", "D370"], ["a4", "a104"]),
  adCity("lognes", PRICING_ASSISTANCE_IDF, [
    "Speedy Lognes",
    "Euromaster Lognes",
    "Point S Lognes",
    "AD Expert Garage de Lognes",
    "Midas Noisiel",
  ], ["A4", "A104", "D199", "D471"], ["a4", "a104"]),
  adCity("bussy-saint-georges", PRICING_ASSISTANCE_IDF, [
    "Norauto Bussy-Saint-Georges",
    "Feu Vert Val d'Europe",
    "Euromaster Bussy",
    "AD Expert Garage Val d'Europe",
    "Point S Bussy-Saint-Georges",
  ], ["A4", "A104", "D471", "D344"], ["a4", "a104"]),
  adCity("lagny-sur-marne", PRICING_ASSISTANCE_IDF, [
    "Speedy Lagny-sur-Marne",
    "Midas Lagny",
    "Euromaster Lagny",
    "AD Expert Garage de Lagny",
    "Garage Renault Lagny",
  ], ["A4", "A104", "D934", "D418"], ["a4", "a104"]),
  adCity("pontault-combault", PRICING_ASSISTANCE_IDF, [
    "Norauto Pontault-Combault",
    "Feu Vert Pontault-Combault",
    "Speedy Pontault-Combault",
    "Midas Pontault-Combault",
    "AD Expert Garage de Pontault",
    "Euromaster Roissy-en-Brie",
  ], ["A4", "A104", "D21", "N104"], ["a4", "a104"]),
  adCity("roissy-en-brie", PRICING_ASSISTANCE_IDF, [
    "Speedy Roissy-en-Brie",
    "Euromaster Roissy-en-Brie",
    "AD Expert Garage de Roissy",
    "Point S Roissy-en-Brie",
    "Garage Peugeot Roissy-en-Brie",
  ], ["A4", "N104", "D21", "D471"], ["a4", "a104"]),
  adCity("ozoir-la-ferriere", PRICING_ASSISTANCE_IDF, [
    "Speedy Ozoir-la-Ferrière",
    "Midas Ozoir",
    "Euromaster Ozoir",
    "AD Expert Garage d'Ozoir",
    "Point S Ozoir-la-Ferrière",
  ], ["A4", "N104", "D21", "D471"], ["a4", "a104"]),
  adCity("vaires-sur-marne", PRICING_ASSISTANCE_IDF, [
    "Garage Renault Vaires",
    "AD Expert Garage de Vaires",
    "Speedy Chelles",
    "Euromaster Chelles",
    "Point S Vaires-sur-Marne",
  ], ["A4", "A104", "D934", "D45"], ["a4", "a104"]),
  adCity("dammarie-les-lys", PRICING_ASSISTANCE_IDF, [
    "Norauto Dammarie-les-Lys",
    "Feu Vert Dammarie",
    "Speedy Melun",
    "Euromaster Melun",
    "AD Expert Garage de Dammarie",
    "Midas Melun",
  ], ["A5", "N6", "D606", "D372"], ["a5", "a6"]),
  adCity("le-mee-sur-seine", PRICING_ASSISTANCE_IDF, [
    "Speedy Le Mée-sur-Seine",
    "Euromaster Melun",
    "AD Expert Garage du Mée",
    "Point S Melun",
    "Garage Renault Melun",
  ], ["A5", "N6", "D606", "D39"], ["a5", "a6"]),
  adCity("combs-la-ville", PRICING_ASSISTANCE_IDF, [
    "Norauto Combs-la-Ville",
    "Feu Vert Sénart",
    "Speedy Combs-la-Ville",
    "Euromaster Combs-la-Ville",
    "AD Expert Garage de Sénart",
    "Midas Lieusaint",
  ], ["A5", "N104", "D306", "D50"], ["a5", "a104"]),
  adCity("savigny-le-temple", PRICING_ASSISTANCE_IDF, [
    "Norauto Savigny-le-Temple",
    "Feu Vert Sénart",
    "Speedy Savigny-le-Temple",
    "Euromaster Savigny",
    "AD Expert Garage de Savigny",
  ], ["A5", "N104", "D306", "D50"], ["a5", "a104"]),
  adCity("brie-comte-robert", PRICING_ASSISTANCE_IDF, [
    "Speedy Brie-Comte-Robert",
    "Euromaster Brie-Comte-Robert",
    "AD Expert Garage de Brie",
    "Point S Brie-Comte-Robert",
    "Garage Renault Brie-Comte-Robert",
  ], ["A5", "N104", "D319", "D216"], ["a5", "a104"]),
  adCity("coulommiers", PRICING_ASSISTANCE_IDF, [
    "Speedy Coulommiers",
    "Garage Peugeot Coulommiers",
    "AD Expert Garage de Coulommiers",
    "Point S Coulommiers",
    "Euromaster Coulommiers",
  ], ["N34", "D402", "D934", "D222"], ["a4", "a104"]),
  adCity("provins", PRICING_ASSISTANCE_IDF, [
    "Garage Renault Provins",
    "AD Expert Garage de Provins",
    "Point S Provins",
    "Speedy Provins",
    "Garage Peugeot Provins",
  ], ["N19", "D619", "D231", "D403"], ["a5", "a4"]),
  adCity("nemours", PRICING_ASSISTANCE_IDF, [
    "Garage Peugeot Nemours",
    "AD Expert Garage de Nemours",
    "Point S Nemours",
    "Euromaster Nemours",
    "Garage Renault Nemours",
  ], ["A6", "N7", "D607", "D403"], ["a6", "a77"]),

  // ── 92 – Hauts-de-Seine ──────────────────────────────────
  adCity("nanterre", PRICING_ASSISTANCE_PARIS, [
    "Speedy Nanterre",
    "Midas Nanterre",
    "Norauto Nanterre",
    "Euromaster Nanterre",
    "AD Expert Garage de Nanterre",
    "Feu Vert Nanterre",
  ], ["A14", "A86", "RD913", "RD914"], ["a14", "a86"]),
  adCity("courbevoie", PRICING_ASSISTANCE_PARIS, [
    "Speedy Courbevoie",
    "Midas Courbevoie",
    "Euromaster La Défense",
    "AD Expert Garage de Courbevoie",
    "Point S Courbevoie",
  ], ["A14", "A86", "D992", "Boulevard Circulaire"], ["a14", "a86"]),
  adCity("levallois-perret", PRICING_ASSISTANCE_PARIS, [
    "Speedy Levallois",
    "Midas Levallois-Perret",
    "Euromaster Levallois",
    "AD Expert Garage de Levallois",
    "Point S Levallois",
  ], ["A86", "Boulevard Périphérique", "D908", "D909"], ["a86"]),
  adCity("neuilly-sur-seine", PRICING_ASSISTANCE_PARIS, [
    "Speedy Neuilly",
    "Garage Peugeot Neuilly",
    "AD Expert Garage de Neuilly",
    "Euromaster Levallois",
    "Point S Neuilly-sur-Seine",
  ], ["A14", "Boulevard Périphérique", "D1", "Avenue Charles-de-Gaulle"], ["a14", "a86"]),
  adCity("colombes", PRICING_ASSISTANCE_IDF, [
    "Speedy Colombes",
    "Midas Colombes",
    "Norauto Colombes",
    "Euromaster Colombes",
    "AD Expert Garage de Colombes",
    "Feu Vert Colombes",
  ], ["A86", "D986", "D909", "D311"], ["a86", "a15"]),
  adCity("rueil-malmaison", PRICING_ASSISTANCE_IDF, [
    "Speedy Rueil-Malmaison",
    "Midas Rueil",
    "Norauto Rueil-Malmaison",
    "Euromaster Rueil",
    "AD Expert Garage de Rueil",
  ], ["A86", "A13", "D913", "D7"], ["a86", "a13"]),
  adCity("asnieres-sur-seine", PRICING_ASSISTANCE_PARIS, [
    "Speedy Asnières",
    "Midas Asnières",
    "Euromaster Asnières",
    "AD Expert Garage d'Asnières",
    "Point S Asnières-sur-Seine",
  ], ["A86", "Boulevard Périphérique", "D986", "D911"], ["a86"]),
  adCity("boulogne-billancourt", PRICING_ASSISTANCE_PARIS, [
    "Speedy Boulogne-Billancourt",
    "Midas Boulogne",
    "Euromaster Boulogne",
    "AD Expert Garage de Boulogne",
    "Norauto Boulogne",
    "Point S Boulogne-Billancourt",
  ], ["A13", "Boulevard Périphérique", "D1", "D910"], ["a13", "a86"]),
  adCity("issy-les-moulineaux", PRICING_ASSISTANCE_PARIS, [
    "Speedy Issy-les-Moulineaux",
    "Midas Issy",
    "Euromaster Issy",
    "AD Expert Garage d'Issy",
    "Point S Issy-les-Moulineaux",
  ], ["Boulevard Périphérique", "A86", "D7", "D50"], ["a86"]),
  adCity("meudon", PRICING_ASSISTANCE_IDF, [
    "Speedy Meudon",
    "Euromaster Meudon",
    "AD Expert Garage de Meudon",
    "Point S Meudon",
    "Garage Renault Meudon",
  ], ["A86", "N118", "D2", "D181"], ["a86"]),
  adCity("antony", PRICING_ASSISTANCE_IDF, [
    "Speedy Antony",
    "Midas Antony",
    "Norauto Antony",
    "Euromaster Antony",
    "AD Expert Garage d'Antony",
    "Feu Vert Antony",
  ], ["A86", "A6", "N20", "D920"], ["a86", "a6"]),
  adCity("clichy", PRICING_ASSISTANCE_PARIS, [
    "Speedy Clichy",
    "Midas Clichy",
    "Euromaster Clichy",
    "AD Expert Garage de Clichy",
    "Point S Clichy",
  ], ["Boulevard Périphérique", "A86", "D986", "D909"], ["a86"]),
  adCity("gennevilliers", PRICING_ASSISTANCE_IDF, [
    "Speedy Gennevilliers",
    "Midas Gennevilliers",
    "Norauto Gennevilliers",
    "Euromaster Gennevilliers",
    "AD Expert Garage de Gennevilliers",
    "Feu Vert Gennevilliers",
  ], ["A86", "A15", "D986", "D19"], ["a86", "a15"]),
  adCity("villeneuve-la-garenne", PRICING_ASSISTANCE_IDF, [
    "Speedy Villeneuve-la-Garenne",
    "Euromaster Gennevilliers",
    "AD Expert Garage Villeneuve",
    "Point S Villeneuve-la-Garenne",
    "Norauto Gennevilliers",
  ], ["A86", "D986", "D911", "D19"], ["a86", "a15"]),
  adCity("puteaux", PRICING_ASSISTANCE_PARIS, [
    "Speedy Puteaux",
    "Euromaster La Défense",
    "AD Expert Garage de Puteaux",
    "Point S Puteaux",
    "Midas Courbevoie",
  ], ["A14", "A86", "Boulevard Circulaire", "D992"], ["a14", "a86"]),
  adCity("la-garenne-colombes", PRICING_ASSISTANCE_PARIS, [
    "Speedy La Garenne-Colombes",
    "Euromaster Colombes",
    "AD Expert Garage La Garenne",
    "Point S La Garenne-Colombes",
    "Midas Colombes",
  ], ["A86", "D992", "D986", "D909"], ["a86", "a14"]),
  adCity("suresnes", PRICING_ASSISTANCE_PARIS, [
    "Speedy Suresnes",
    "Euromaster Suresnes",
    "AD Expert Garage de Suresnes",
    "Point S Suresnes",
    "Midas Puteaux",
  ], ["A86", "A14", "D7", "N13"], ["a86", "a14"]),
  adCity("saint-cloud", PRICING_ASSISTANCE_IDF, [
    "Speedy Saint-Cloud",
    "Euromaster Saint-Cloud",
    "AD Expert Garage de Saint-Cloud",
    "Point S Saint-Cloud",
    "Garage Renault Saint-Cloud",
  ], ["A13", "A86", "N118", "D907"], ["a13", "a86"]),
  adCity("garches", PRICING_ASSISTANCE_IDF, [
    "Garage Renault Garches",
    "AD Expert Garage de Garches",
    "Euromaster Saint-Cloud",
    "Speedy Rueil-Malmaison",
    "Point S Garches",
  ], ["A13", "A86", "D913", "D182"], ["a13", "a86"]),
  adCity("chaville", PRICING_ASSISTANCE_IDF, [
    "Garage Peugeot Chaville",
    "AD Expert Garage de Chaville",
    "Euromaster Vélizy",
    "Speedy Meudon",
    "Point S Chaville",
  ], ["A86", "N118", "D181", "D407"], ["a86"]),
  adCity("sevres", PRICING_ASSISTANCE_IDF, [
    "Speedy Sèvres",
    "Euromaster Sèvres",
    "AD Expert Garage de Sèvres",
    "Point S Sèvres",
    "Garage Renault Sèvres",
  ], ["A86", "N118", "D910", "D181"], ["a86"]),
  adCity("ville-d-avray", PRICING_ASSISTANCE_IDF, [
    "Garage de Ville-d'Avray",
    "AD Expert Garage de Ville-d'Avray",
    "Euromaster Saint-Cloud",
    "Speedy Sèvres",
    "Point S Garches",
  ], ["A86", "N118", "D407", "D181"], ["a86", "a13"]),
  adCity("montrouge", PRICING_ASSISTANCE_PARIS, [
    "Speedy Montrouge",
    "Midas Montrouge",
    "Euromaster Montrouge",
    "AD Expert Garage de Montrouge",
    "Point S Montrouge",
  ], ["Boulevard Périphérique", "A6", "D920", "D128"], ["a6", "a86"]),
  adCity("malakoff", PRICING_ASSISTANCE_PARIS, [
    "Speedy Malakoff",
    "Euromaster Malakoff",
    "AD Expert Garage de Malakoff",
    "Point S Malakoff",
    "Midas Montrouge",
  ], ["Boulevard Périphérique", "A86", "D906", "D128"], ["a86", "a6"]),
  adCity("vanves", PRICING_ASSISTANCE_PARIS, [
    "Speedy Vanves",
    "Euromaster Issy",
    "AD Expert Garage de Vanves",
    "Point S Vanves",
    "Midas Malakoff",
  ], ["Boulevard Périphérique", "A86", "D50", "D906"], ["a86"]),
  adCity("chatillon", PRICING_ASSISTANCE_PARIS, [
    "Speedy Châtillon",
    "Midas Châtillon",
    "Euromaster Châtillon",
    "AD Expert Garage de Châtillon",
    "Point S Châtillon",
  ], ["A86", "D920", "D906", "D74"], ["a86", "a6"]),
  adCity("clamart", PRICING_ASSISTANCE_IDF, [
    "Speedy Clamart",
    "Midas Clamart",
    "Euromaster Clamart",
    "AD Expert Garage de Clamart",
    "Point S Clamart",
    "Norauto Vélizy",
  ], ["A86", "N118", "D906", "D2"], ["a86"]),
  adCity("bagneux", PRICING_ASSISTANCE_IDF, [
    "Speedy Bagneux",
    "Midas Bagneux",
    "Euromaster Bagneux",
    "AD Expert Garage de Bagneux",
    "Point S Bagneux",
  ], ["A86", "A6", "D920", "D128"], ["a86", "a6"]),
  adCity("fontenay-aux-roses", PRICING_ASSISTANCE_IDF, [
    "Speedy Fontenay-aux-Roses",
    "Euromaster Bagneux",
    "AD Expert Garage de Fontenay",
    "Point S Fontenay-aux-Roses",
    "Garage Renault Fontenay",
  ], ["A86", "D906", "D128", "D60"], ["a86", "a6"]),
  adCity("sceaux", PRICING_ASSISTANCE_IDF, [
    "Speedy Sceaux",
    "Euromaster Antony",
    "AD Expert Garage de Sceaux",
    "Point S Sceaux",
    "Garage Peugeot Sceaux",
  ], ["A86", "A6", "D920", "D67"], ["a86", "a6"]),
  adCity("bourg-la-reine", PRICING_ASSISTANCE_IDF, [
    "Speedy Bourg-la-Reine",
    "Euromaster Antony",
    "AD Expert Garage de Bourg-la-Reine",
    "Point S Bourg-la-Reine",
    "Midas Antony",
  ], ["A86", "A6", "D920", "D128"], ["a86", "a6"]),
  adCity("le-plessis-robinson", PRICING_ASSISTANCE_IDF, [
    "Speedy Le Plessis-Robinson",
    "Euromaster Clamart",
    "AD Expert Garage du Plessis",
    "Point S Le Plessis-Robinson",
    "Garage Renault Châtenay",
  ], ["A86", "D2", "D75", "D906"], ["a86"]),
  adCity("chatenay-malabry", PRICING_ASSISTANCE_IDF, [
    "Speedy Châtenay-Malabry",
    "Euromaster Antony",
    "AD Expert Garage de Châtenay",
    "Point S Châtenay-Malabry",
    "Norauto Vélizy",
  ], ["A86", "D920", "D75", "D2"], ["a86", "a6"]),

  // ── 93 – Seine-Saint-Denis ──────────────────────────────────
  adCity("saint-denis", PRICING_ASSISTANCE_IDF, [
    "Speedy Saint-Denis",
    "Midas Saint-Denis",
    "Norauto Saint-Denis",
    "Euromaster Saint-Denis",
    "AD Expert Garage de Saint-Denis",
    "Feu Vert Saint-Denis",
  ], ["A1", "A86", "Boulevard Périphérique", "D30"], ["a1", "a86"]),
  adCity("montreuil", PRICING_ASSISTANCE_IDF, [
    "Speedy Montreuil",
    "Midas Montreuil",
    "Norauto Montreuil",
    "Euromaster Montreuil",
    "AD Expert Garage de Montreuil",
    "Feu Vert Montreuil",
  ], ["A86", "Boulevard Périphérique", "A3", "D117"], ["a86", "a4"]),
  adCity("aubervilliers", PRICING_ASSISTANCE_IDF, [
    "Speedy Aubervilliers",
    "Midas Aubervilliers",
    "Norauto Aubervilliers",
    "Euromaster Aubervilliers",
    "AD Expert Garage d'Aubervilliers",
  ], ["A1", "A86", "Boulevard Périphérique", "D20"], ["a1", "a86"]),
  adCity("aulnay-sous-bois", PRICING_ASSISTANCE_IDF, [
    "Speedy Aulnay-sous-Bois",
    "Midas Aulnay",
    "Norauto Aulnay-sous-Bois",
    "Euromaster Aulnay",
    "AD Expert Garage d'Aulnay",
    "Feu Vert Aulnay-sous-Bois",
  ], ["A1", "A104", "A3", "N2", "D115"], ["a1", "a104"]),
  adCity("drancy", PRICING_ASSISTANCE_IDF, [
    "Speedy Drancy",
    "Midas Drancy",
    "Euromaster Drancy",
    "AD Expert Garage de Drancy",
    "Point S Drancy",
  ], ["A1", "A86", "N2", "D30"], ["a1", "a86"]),
  adCity("noisy-le-grand", PRICING_ASSISTANCE_IDF, [
    "Speedy Noisy-le-Grand",
    "Midas Noisy-le-Grand",
    "Norauto Noisy-le-Grand",
    "Euromaster Noisy",
    "AD Expert Garage de Noisy",
    "Feu Vert Noisy-le-Grand",
  ], ["A4", "A86", "A104", "D199"], ["a4", "a86", "a104"]),
  adCity("le-blanc-mesnil", PRICING_ASSISTANCE_IDF, [
    "Speedy Le Blanc-Mesnil",
    "Midas Le Blanc-Mesnil",
    "Euromaster Le Blanc-Mesnil",
    "AD Expert Garage du Blanc-Mesnil",
    "Point S Le Blanc-Mesnil",
  ], ["A1", "A104", "N2", "D115"], ["a1", "a104"]),
  adCity("pantin", PRICING_ASSISTANCE_IDF, [
    "Speedy Pantin",
    "Midas Pantin",
    "Euromaster Pantin",
    "AD Expert Garage de Pantin",
    "Point S Pantin",
  ], ["A86", "Boulevard Périphérique", "A3", "D20"], ["a86"]),
  adCity("epinay-sur-seine", PRICING_ASSISTANCE_IDF, [
    "Speedy Épinay-sur-Seine",
    "Euromaster Épinay",
    "AD Expert Garage d'Épinay",
    "Point S Épinay-sur-Seine",
    "Midas Villetaneuse",
  ], ["A86", "A1", "D30", "D125"], ["a86", "a1"]),
  adCity("bobigny", PRICING_ASSISTANCE_IDF, [
    "Speedy Bobigny",
    "Midas Bobigny",
    "Euromaster Bobigny",
    "AD Expert Garage de Bobigny",
    "Point S Bobigny",
    "Norauto Bobigny",
  ], ["A86", "A3", "N3", "D30"], ["a86"]),
  adCity("bondy", PRICING_ASSISTANCE_IDF, [
    "Speedy Bondy",
    "Midas Bondy",
    "Euromaster Bondy",
    "AD Expert Garage de Bondy",
    "Point S Bondy",
  ], ["A86", "A3", "N3", "D117"], ["a86"]),
  adCity("sevran", PRICING_ASSISTANCE_IDF, [
    "Speedy Sevran",
    "Midas Sevran",
    "Euromaster Sevran",
    "AD Expert Garage de Sevran",
    "Norauto Sevran",
  ], ["A104", "N2", "D115", "D40"], ["a104", "a1"]),
  adCity("saint-ouen-sur-seine", PRICING_ASSISTANCE_IDF, [
    "Speedy Saint-Ouen",
    "Midas Saint-Ouen",
    "Euromaster Saint-Ouen",
    "AD Expert Garage de Saint-Ouen",
    "Point S Saint-Ouen",
  ], ["Boulevard Périphérique", "A86", "D1", "D30"], ["a86"]),

  // ── 94 – Val-de-Marne ──────────────────────────────────────
  adCity("vitry-sur-seine", PRICING_ASSISTANCE_IDF, [
    "Speedy Vitry-sur-Seine",
    "Midas Vitry",
    "Norauto Vitry",
    "Euromaster Vitry-sur-Seine",
    "AD Expert Garage de Vitry",
    "Feu Vert Vitry",
  ], ["A86", "Boulevard Périphérique", "D5", "D148"], ["a86"]),
  adCity("creteil", PRICING_ASSISTANCE_IDF, [
    "Speedy Créteil",
    "Midas Créteil",
    "Norauto Créteil Soleil",
    "Euromaster Créteil",
    "AD Expert Garage de Créteil",
    "Feu Vert Créteil",
  ], ["A86", "A4", "D1", "D19"], ["a86", "a4"]),
  adCity("champigny-sur-marne", PRICING_ASSISTANCE_IDF, [
    "Speedy Champigny-sur-Marne",
    "Midas Champigny",
    "Euromaster Champigny",
    "AD Expert Garage de Champigny",
    "Point S Champigny",
    "Norauto Champigny",
  ], ["A4", "A86", "D4", "D145"], ["a4", "a86"]),
  adCity("saint-maur-des-fosses", PRICING_ASSISTANCE_IDF, [
    "Speedy Saint-Maur",
    "Midas Saint-Maur-des-Fossés",
    "Euromaster Saint-Maur",
    "AD Expert Garage de Saint-Maur",
    "Point S Saint-Maur-des-Fossés",
  ], ["A4", "A86", "D4", "D45"], ["a4", "a86"]),
  adCity("ivry-sur-seine", PRICING_ASSISTANCE_IDF, [
    "Speedy Ivry-sur-Seine",
    "Midas Ivry",
    "Euromaster Ivry",
    "AD Expert Garage d'Ivry",
    "Point S Ivry-sur-Seine",
  ], ["A86", "Boulevard Périphérique", "D5", "D19"], ["a86"]),
  adCity("maisons-alfort", PRICING_ASSISTANCE_IDF, [
    "Speedy Maisons-Alfort",
    "Midas Maisons-Alfort",
    "Euromaster Maisons-Alfort",
    "AD Expert Garage de Maisons-Alfort",
    "Point S Maisons-Alfort",
  ], ["A86", "A4", "D19", "D148"], ["a86", "a4"]),
  adCity("villejuif", PRICING_ASSISTANCE_IDF, [
    "Speedy Villejuif",
    "Midas Villejuif",
    "Euromaster Villejuif",
    "AD Expert Garage de Villejuif",
    "Point S Villejuif",
    "Norauto Villejuif",
  ], ["A86", "A6", "D7", "D148"], ["a86", "a6"]),
  adCity("fontenay-sous-bois", PRICING_ASSISTANCE_IDF, [
    "Speedy Fontenay-sous-Bois",
    "Midas Fontenay",
    "Euromaster Fontenay-sous-Bois",
    "AD Expert Garage de Fontenay",
    "Point S Fontenay-sous-Bois",
  ], ["A86", "A4", "D120", "D34"], ["a86", "a4"]),
  adCity("vincennes", PRICING_ASSISTANCE_IDF, [
    "Speedy Vincennes",
    "Midas Vincennes",
    "Euromaster Vincennes",
    "AD Expert Garage de Vincennes",
    "Point S Vincennes",
  ], ["A4", "Boulevard Périphérique", "D120", "N34"], ["a4", "a86"]),

  // ── 91 – Essonne ──────────────────────────────────────────
  adCity("evry-courcouronnes", PRICING_ASSISTANCE_IDF, [
    "Speedy Évry",
    "Midas Évry",
    "Norauto Évry 2",
    "Euromaster Évry",
    "AD Expert Garage d'Évry",
    "Feu Vert Évry",
  ], ["A6", "N7", "N104", "D445"], ["a6", "a104"]),
  adCity("corbeil-essonnes", PRICING_ASSISTANCE_IDF, [
    "Speedy Corbeil-Essonnes",
    "Midas Corbeil",
    "Euromaster Corbeil",
    "AD Expert Garage de Corbeil",
    "Point S Corbeil-Essonnes",
    "Norauto Corbeil",
  ], ["A6", "N7", "N104", "D26"], ["a6", "a104"]),
  adCity("massy", PRICING_ASSISTANCE_IDF, [
    "Speedy Massy",
    "Midas Massy",
    "Norauto Massy",
    "Euromaster Massy",
    "AD Expert Garage de Massy",
    "Feu Vert Massy",
  ], ["A6", "A10", "N20", "D117"], ["a6", "a10"]),

  // ── 95 – Val-d'Oise ──────────────────────────────────────
  adCity("cergy", PRICING_ASSISTANCE_IDF, [
    "Speedy Cergy",
    "Midas Cergy",
    "Norauto Cergy",
    "Euromaster Cergy",
    "AD Expert Garage de Cergy",
    "Feu Vert Cergy",
  ], ["A15", "A104", "D14", "D915"], ["a15", "a104"]),
  adCity("sarcelles", PRICING_ASSISTANCE_IDF, [
    "Speedy Sarcelles",
    "Midas Sarcelles",
    "Norauto Sarcelles",
    "Euromaster Sarcelles",
    "AD Expert Garage de Sarcelles",
  ], ["A1", "A16", "D316", "D125"], ["a1", "a16"]),

  // ── 78 – Yvelines ──────────────────────────────────────────
  adCity("sartrouville", PRICING_ASSISTANCE_IDF, [
    "Speedy Sartrouville",
    "Midas Sartrouville",
    "Euromaster Sartrouville",
    "AD Expert Garage de Sartrouville",
    "Point S Sartrouville",
  ], ["A86", "A15", "D308", "D121"], ["a86", "a15"]),

  // ── 77 – Seine-et-Marne ────────────────────────────────────
  adCity("meaux", PRICING_ASSISTANCE_IDF, [
    "Speedy Meaux",
    "Midas Meaux",
    "Norauto Meaux",
    "Euromaster Meaux",
    "AD Expert Garage de Meaux",
    "Feu Vert Meaux",
  ], ["A4", "A104", "N3", "D603"], ["a4", "a104"]),

  // ── Grandes métropoles ──────────────────────────────────────

  // Auvergne-Rhône-Alpes
  adCity("lyon", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Lyon Part-Dieu",
    "Midas Lyon Gerland",
    "Norauto Lyon Confluence",
    "Euromaster Lyon Vaise",
    "AD Expert Garage Lyon 3e",
    "Feu Vert Lyon 8e",
    "Point S Lyon Monplaisir",
  ], ["A6", "A7", "A43", "Boulevard Périphérique Laurent-Bonnevay", "Tunnel de Fourvière"], ["a6", "a7"]),
  adCity("saint-etienne", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Saint-Étienne",
    "Midas Saint-Étienne",
    "Norauto Saint-Étienne Villars",
    "Euromaster Saint-Étienne",
    "AD Expert Garage Stéphanois",
    "Feu Vert Saint-Étienne",
  ], ["A72", "N88", "D1082", "D8"], ["a72", "a89"]),
  adCity("grenoble", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Grenoble",
    "Midas Grenoble Échirolles",
    "Norauto Grenoble Comboire",
    "Euromaster Grenoble",
    "AD Expert Garage de Grenoble",
    "Feu Vert Échirolles",
  ], ["A480", "A41", "N87", "Rocade Sud"], ["a41", "a48"]),
  adCity("villeurbanne", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Villeurbanne",
    "Midas Villeurbanne",
    "Norauto Villeurbanne",
    "Euromaster Villeurbanne",
    "AD Expert Garage de Villeurbanne",
    "Point S Villeurbanne",
  ], ["A42", "Boulevard Périphérique Laurent-Bonnevay", "D383", "D517"], ["a6", "a7"]),
  adCity("clermont-ferrand", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Clermont-Ferrand",
    "Midas Clermont-Ferrand",
    "Norauto Clermont-Aubière",
    "Euromaster Clermont-Ferrand",
    "AD Expert Garage Clermontois",
    "Feu Vert Clermont-Ferrand",
  ], ["A75", "A71", "A89", "N89"], ["a75", "a71", "a89"]),
  adCity("annecy", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Annecy",
    "Midas Annecy",
    "Norauto Annecy Seynod",
    "Euromaster Annecy",
    "AD Expert Garage d'Annecy",
    "Point S Annecy",
  ], ["A41", "D1201", "D3508", "D16"], ["a41"]),
  adCity("valence", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Valence",
    "Midas Valence",
    "Norauto Valence Sud",
    "Euromaster Valence",
    "AD Expert Garage de Valence",
    "Feu Vert Valence",
  ], ["A7", "A49", "N7", "D532"], ["a7"]),
  adCity("chambery", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Chambéry",
    "Midas Chambéry",
    "Norauto Chambéry",
    "Euromaster Chambéry",
    "AD Expert Garage de Chambéry",
    "Point S Chambéry",
  ], ["A43", "A41", "D1006", "D912"], ["a43", "a41"]),
  adCity("venissieux", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Vénissieux",
    "Midas Vénissieux",
    "Norauto Vénissieux",
    "Euromaster Vénissieux",
    "AD Expert Garage de Vénissieux",
    "Feu Vert Vénissieux",
  ], ["A7", "Boulevard Périphérique Laurent-Bonnevay", "D307", "D12"], ["a7", "a6"]),
  adCity("vaulx-en-velin", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Vaulx-en-Velin",
    "Midas Vaulx-en-Velin",
    "Norauto Vaulx-en-Velin",
    "Euromaster Vaulx-en-Velin",
    "AD Expert Garage de Vaulx",
    "Feu Vert Vaulx-en-Velin",
  ], ["A42", "Boulevard Périphérique Laurent-Bonnevay", "D517", "D29"], ["a42", "a6"]),

  // Provence-Alpes-Côte d'Azur
  adCity("marseille", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Marseille La Valentine",
    "Midas Marseille Castellane",
    "Norauto Marseille Plan de Campagne",
    "Euromaster Marseille La Capelette",
    "AD Expert Garage Marseillais",
    "Feu Vert Marseille Grand Littoral",
    "Point S Marseille La Rose",
  ], ["A7", "A50", "A55", "Boulevard Michelet", "Tunnel Prado-Carénage"], ["a7"]),
  adCity("nice", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Nice",
    "Midas Nice Lingostière",
    "Norauto Nice Saint-Isidore",
    "Euromaster Nice",
    "AD Expert Garage Niçois",
    "Feu Vert Nice",
    "Point S Nice",
  ], ["A8", "Promenade des Anglais", "D6007", "D2204", "Voie Rapide"], ["a8"]),
  adCity("toulon", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Toulon",
    "Midas Toulon La Valette",
    "Norauto La Garde",
    "Euromaster Toulon",
    "AD Expert Garage Toulonnais",
    "Feu Vert La Valette",
  ], ["A57", "A50", "D2098", "D559"], ["a8"]),
  adCity("aix-en-provence", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Aix-en-Provence",
    "Midas Aix Les Milles",
    "Norauto Aix-en-Provence",
    "Euromaster Aix",
    "AD Expert Garage Aixois",
    "Feu Vert Aix-en-Provence",
  ], ["A8", "A51", "D9", "D7N"], ["a8"]),
  adCity("avignon", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Avignon",
    "Midas Avignon Le Pontet",
    "Norauto Avignon Nord",
    "Euromaster Avignon",
    "AD Expert Garage d'Avignon",
    "Feu Vert Avignon",
  ], ["A7", "A9", "N7", "D225", "Rocade Charles-de-Gaulle"], ["a7", "a9"]),
  adCity("antibes", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Antibes",
    "Midas Antibes",
    "Euromaster Antibes",
    "AD Expert Garage d'Antibes",
    "Point S Antibes",
    "Garage Renault Antibes",
  ], ["A8", "D6007", "D35", "D4"], ["a8"]),
  adCity("cannes", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Cannes",
    "Midas Cannes La Bocca",
    "Euromaster Cannes",
    "AD Expert Garage de Cannes",
    "Point S Cannes",
    "Norauto Mandelieu",
  ], ["A8", "D6007", "D6185", "Boulevard du Midi"], ["a8"]),
  adCity("la-seyne-sur-mer", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy La Seyne-sur-Mer",
    "Midas La Seyne",
    "Euromaster La Seyne",
    "AD Expert Garage de La Seyne",
    "Point S La Seyne-sur-Mer",
  ], ["A50", "D559", "D26", "D63"], ["a8"]),
  adCity("hyeres", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Hyères",
    "Midas Hyères",
    "Euromaster Hyères",
    "AD Expert Garage de Hyères",
    "Point S Hyères",
    "Garage Renault Hyères",
  ], ["A57", "D98", "D559", "D197"], ["a8"]),
  adCity("frejus", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Fréjus",
    "Midas Fréjus",
    "Euromaster Fréjus",
    "AD Expert Garage de Fréjus",
    "Point S Fréjus",
    "Norauto Fréjus",
  ], ["A8", "DN7", "D37", "D559"], ["a8"]),
  adCity("arles", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Arles",
    "Midas Arles",
    "Euromaster Arles",
    "AD Expert Garage d'Arles",
    "Point S Arles",
    "Garage Renault Arles",
  ], ["A54", "N113", "D570", "D17"], ["a54", "a9"]),

  // Occitanie
  adCity("toulouse", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Toulouse Purpan",
    "Midas Toulouse Balma",
    "Norauto Toulouse Gramont",
    "Euromaster Toulouse Labège",
    "AD Expert Garage Toulousain",
    "Feu Vert Toulouse Portet",
    "Point S Toulouse Minimes",
  ], ["A61", "A62", "A64", "Périphérique Toulousain", "D820"], ["a61", "a62", "a64"]),
  adCity("montpellier", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Montpellier",
    "Midas Montpellier Odysseum",
    "Norauto Montpellier Lattes",
    "Euromaster Montpellier",
    "AD Expert Garage de Montpellier",
    "Feu Vert Montpellier",
    "Point S Montpellier",
  ], ["A9", "A75", "D986", "D65", "Autoroute du Soleil"], ["a9", "a75"]),
  adCity("nimes", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Nîmes",
    "Midas Nîmes",
    "Norauto Nîmes",
    "Euromaster Nîmes",
    "AD Expert Garage de Nîmes",
    "Feu Vert Nîmes",
  ], ["A9", "A54", "N106", "D999"], ["a9"]),
  adCity("perpignan", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Perpignan",
    "Midas Perpignan",
    "Norauto Perpignan Claira",
    "Euromaster Perpignan",
    "AD Expert Garage de Perpignan",
    "Feu Vert Perpignan",
  ], ["A9", "D900", "D617", "D916"], ["a9"]),

  // Nouvelle-Aquitaine
  adCity("bordeaux", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Bordeaux Lac",
    "Midas Bordeaux Mériadeck",
    "Norauto Bordeaux Bègles",
    "Euromaster Bordeaux",
    "AD Expert Garage Bordelais",
    "Feu Vert Bordeaux Mérignac",
    "Point S Bordeaux Bastide",
  ], ["A10", "A63", "A62", "Rocade Bordelaise", "D1010"], ["a10", "a63", "a62"]),
  adCity("limoges", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Limoges",
    "Midas Limoges",
    "Norauto Limoges",
    "Euromaster Limoges",
    "AD Expert Garage de Limoges",
    "Feu Vert Limoges",
  ], ["A20", "N147", "N21", "D2000"], ["a20", "a89"]),

  // Pays de la Loire
  adCity("nantes", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Nantes",
    "Midas Nantes Beaujoire",
    "Norauto Nantes Saint-Herblain",
    "Euromaster Nantes",
    "AD Expert Garage Nantais",
    "Feu Vert Nantes Rezé",
    "Point S Nantes",
  ], ["A11", "A83", "Périphérique Nantais", "N137", "D723"], ["a11", "a83"]),
  adCity("angers", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Angers",
    "Midas Angers",
    "Norauto Angers Beaucouzé",
    "Euromaster Angers",
    "AD Expert Garage d'Angers",
    "Feu Vert Angers",
  ], ["A11", "A87", "N23", "D323", "Rocade d'Angers"], ["a11"]),
  adCity("le-mans", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Le Mans",
    "Midas Le Mans",
    "Norauto Le Mans",
    "Euromaster Le Mans",
    "AD Expert Garage du Mans",
    "Feu Vert Le Mans",
  ], ["A11", "A28", "N138", "D323"], ["a11"]),

  // Bretagne
  adCity("rennes", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Rennes",
    "Midas Rennes Alma",
    "Norauto Rennes Saint-Grégoire",
    "Euromaster Rennes",
    "AD Expert Garage de Rennes",
    "Feu Vert Rennes Chantepie",
  ], ["Rocade de Rennes", "N136", "N12", "D163"], ["a11", "a84"]),
  adCity("brest", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Brest",
    "Midas Brest",
    "Norauto Brest Guipavas",
    "Euromaster Brest",
    "AD Expert Garage de Brest",
    "Feu Vert Brest",
  ], ["N12", "N165", "D205", "D112"], ["a84"]),

  // Hauts-de-France
  adCity("lille", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Lille",
    "Midas Lille Euralille",
    "Norauto Villeneuve-d'Ascq",
    "Euromaster Lille",
    "AD Expert Garage Lillois",
    "Feu Vert Englos",
    "Point S Lille",
  ], ["A1", "A25", "A26", "Boulevard Périphérique de Lille", "D652"], ["a1", "a26"]),
  adCity("reims", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Reims",
    "Midas Reims",
    "Norauto Reims Cormontreuil",
    "Euromaster Reims",
    "AD Expert Garage de Reims",
    "Feu Vert Reims Tinqueux",
  ], ["A4", "A26", "A34", "N44", "D944"], ["a4", "a26"]),
  adCity("amiens", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Amiens",
    "Midas Amiens",
    "Norauto Amiens Glisy",
    "Euromaster Amiens",
    "AD Expert Garage d'Amiens",
    "Feu Vert Amiens",
  ], ["A16", "A29", "N25", "D1001", "Rocade d'Amiens"], ["a16", "a1"]),

  // Grand Est
  adCity("strasbourg", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Strasbourg",
    "Midas Strasbourg Neudorf",
    "Norauto Strasbourg Geispolsheim",
    "Euromaster Strasbourg",
    "AD Expert Garage Strasbourgeois",
    "Feu Vert Strasbourg Vendenheim",
    "Point S Strasbourg",
  ], ["A35", "A4", "N83", "D1083", "Autoroute de l'Est"], ["a35", "a4"]),
  adCity("metz", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Metz",
    "Midas Metz Technopole",
    "Norauto Metz Semécourt",
    "Euromaster Metz",
    "AD Expert Garage de Metz",
    "Feu Vert Metz Augny",
  ], ["A31", "A4", "D1003", "D955"], ["a31", "a4"]),
  adCity("mulhouse", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Mulhouse",
    "Midas Mulhouse Illzach",
    "Norauto Mulhouse Wittenheim",
    "Euromaster Mulhouse",
    "AD Expert Garage de Mulhouse",
    "Feu Vert Mulhouse",
  ], ["A36", "A35", "N66", "D430"], ["a36", "a35"]),
  adCity("nancy", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Nancy",
    "Midas Nancy Laxou",
    "Norauto Nancy Houdemont",
    "Euromaster Nancy",
    "AD Expert Garage de Nancy",
    "Feu Vert Nancy",
  ], ["A31", "A33", "N4", "D400"], ["a31"]),
  adCity("besancon", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Besançon",
    "Midas Besançon Châteaufarine",
    "Norauto Besançon",
    "Euromaster Besançon",
    "AD Expert Garage de Besançon",
    "Feu Vert Besançon",
  ], ["A36", "N57", "D683", "D70"], ["a36"]),

  // Normandie
  adCity("le-havre", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Le Havre",
    "Midas Le Havre",
    "Norauto Le Havre Montivilliers",
    "Euromaster Le Havre",
    "AD Expert Garage du Havre",
    "Feu Vert Le Havre",
  ], ["A13", "A29", "D6015", "D925"], ["a13"]),
  adCity("rouen", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Rouen",
    "Midas Rouen Barentin",
    "Norauto Rouen Tourville",
    "Euromaster Rouen",
    "AD Expert Garage de Rouen",
    "Feu Vert Rouen Mont-Saint-Aignan",
  ], ["A13", "A28", "N15", "D6015", "Pont Flaubert"], ["a13"]),
  adCity("caen", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Caen",
    "Midas Caen Mondeville",
    "Norauto Caen Hérouville",
    "Euromaster Caen",
    "AD Expert Garage de Caen",
    "Feu Vert Caen",
  ], ["A13", "A84", "N13", "Périphérique de Caen", "D562"], ["a13", "a84"]),

  // Centre-Val de Loire
  adCity("tours", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Tours",
    "Midas Tours Nord",
    "Norauto Tours Chambray",
    "Euromaster Tours",
    "AD Expert Garage de Tours",
    "Feu Vert Tours",
  ], ["A10", "A85", "N10", "D751", "Périphérique de Tours"], ["a10"]),
  adCity("orleans", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Orléans",
    "Midas Orléans Olivet",
    "Norauto Orléans Saran",
    "Euromaster Orléans",
    "AD Expert Garage d'Orléans",
    "Feu Vert Orléans",
  ], ["A10", "A71", "N20", "D2020", "Tangentielle d'Orléans"], ["a10", "a71"]),

  // Bourgogne-Franche-Comté
  adCity("dijon", PRICING_ASSISTANCE_METROPOLE, [
    "Speedy Dijon",
    "Midas Dijon Quetigny",
    "Norauto Dijon Chenôve",
    "Euromaster Dijon",
    "AD Expert Garage de Dijon",
    "Feu Vert Dijon",
  ], ["A31", "A39", "N274", "D974", "Rocade de Dijon"], ["a31"]),
];

// ─── Helpers ────────────────────────────────────────────────

export function getAdCityBySlug(slug: string): AssistanceCityData | undefined {
  return assistanceCities.find((c) => c.citySlug === slug);
}

export function getAdCitySlugs(): string[] {
  return assistanceCities.map((c) => c.citySlug);
}
