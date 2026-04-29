/**
 * Tarifs taxi réglementés en France — plafonds nationaux 2026.
 * Source : service-public.gouv.fr (arrêté du 24 décembre 2025).
 * https://www.service-public.gouv.fr/particuliers/actualites/A15396
 *
 * Variation maximale 2026 : +1,38 %, applicable au 1er février 2026.
 */
export const NATIONAL_TARIFFS = {
  year: 2026,
  priseEnCharge: 4.48,    // € — plafond prise en charge
  tarifKm: 1.30,          // €/km — plafond kilométrique
  tarifHoraire: 42.15,    // €/h — prix horaire maximum (attente/marche lente)
  minimumCourse: 8.00,    // € — minimum de perception
} as const;

/**
 * Noms des 101 départements français (métropole + DOM-TOM).
 * Clé = code département ("01", "2A", "75", "971", etc.)
 */
export const DEPARTMENT_NAMES: Record<string, string> = {
  "01": "Ain",
  "02": "Aisne",
  "03": "Allier",
  "04": "Alpes-de-Haute-Provence",
  "05": "Hautes-Alpes",
  "06": "Alpes-Maritimes",
  "07": "Ardèche",
  "08": "Ardennes",
  "09": "Ariège",
  "10": "Aube",
  "11": "Aude",
  "12": "Aveyron",
  "13": "Bouches-du-Rhône",
  "14": "Calvados",
  "15": "Cantal",
  "16": "Charente",
  "17": "Charente-Maritime",
  "18": "Cher",
  "19": "Corrèze",
  "2A": "Corse-du-Sud",
  "2B": "Haute-Corse",
  "21": "Côte-d'Or",
  "22": "Côtes-d'Armor",
  "23": "Creuse",
  "24": "Dordogne",
  "25": "Doubs",
  "26": "Drôme",
  "27": "Eure",
  "28": "Eure-et-Loir",
  "29": "Finistère",
  "30": "Gard",
  "31": "Haute-Garonne",
  "32": "Gers",
  "33": "Gironde",
  "34": "Hérault",
  "35": "Ille-et-Vilaine",
  "36": "Indre",
  "37": "Indre-et-Loire",
  "38": "Isère",
  "39": "Jura",
  "40": "Landes",
  "41": "Loir-et-Cher",
  "42": "Loire",
  "43": "Haute-Loire",
  "44": "Loire-Atlantique",
  "45": "Loiret",
  "46": "Lot",
  "47": "Lot-et-Garonne",
  "48": "Lozère",
  "49": "Maine-et-Loire",
  "50": "Manche",
  "51": "Marne",
  "52": "Haute-Marne",
  "53": "Mayenne",
  "54": "Meurthe-et-Moselle",
  "55": "Meuse",
  "56": "Morbihan",
  "57": "Moselle",
  "58": "Nièvre",
  "59": "Nord",
  "60": "Oise",
  "61": "Orne",
  "62": "Pas-de-Calais",
  "63": "Puy-de-Dôme",
  "64": "Pyrénées-Atlantiques",
  "65": "Hautes-Pyrénées",
  "66": "Pyrénées-Orientales",
  "67": "Bas-Rhin",
  "68": "Haut-Rhin",
  "69": "Rhône",
  "70": "Haute-Saône",
  "71": "Saône-et-Loire",
  "72": "Sarthe",
  "73": "Savoie",
  "74": "Haute-Savoie",
  "75": "Paris",
  "76": "Seine-Maritime",
  "77": "Seine-et-Marne",
  "78": "Yvelines",
  "79": "Deux-Sèvres",
  "80": "Somme",
  "81": "Tarn",
  "82": "Tarn-et-Garonne",
  "83": "Var",
  "84": "Vaucluse",
  "85": "Vendée",
  "86": "Vienne",
  "87": "Haute-Vienne",
  "88": "Vosges",
  "89": "Yonne",
  "90": "Territoire de Belfort",
  "91": "Essonne",
  "92": "Hauts-de-Seine",
  "93": "Seine-Saint-Denis",
  "94": "Val-de-Marne",
  "95": "Val-d'Oise",
  "971": "Guadeloupe",
  "972": "Martinique",
  "973": "Guyane",
  "974": "La Réunion",
  "976": "Mayotte",
};

/**
 * Forfaits aéroports réglementés 2026.
 * Source : service-public.gouv.fr (arrêté du 24 décembre 2025).
 * Chaque entrée : { route: description, price: tarif en € }
 * departmentCodes : départements pour lesquels afficher ces forfaits.
 */
export interface AirportFare {
  route: string;
  price: number;
}

export interface AirportFareGroup {
  airport: string;
  departmentCodes: string[];
  fares: AirportFare[];
}

/**
 * Suppléments réglementés 2026 pour les taxis parisiens.
 * Source : arrêté préfectoral de Paris, applicable du 01/02/2026 au 31/01/2027.
 */
export const AIRPORT_SUPPLEMENTS = {
  reservationImmediate: 4,    // € — supplément réservation immédiate
  reservationAvance: 7,       // € — supplément réservation à l'avance
  minimumPerception: 8,       // € — minimum de perception
  priseEnChargeMax: 4.48,     // € — prise en charge maximale
  validFrom: "2026-02-01",
  validThrough: "2027-01-31",
} as const;

/**
 * Accès simplifié aux forfaits aéroports Paris (CDG & Orly).
 */
export function getParisAirportFares() {
  const group = AIRPORT_FARES.find((g) => g.airport === "Paris CDG & Orly");
  if (!group) throw new Error("Paris airport fares not found");
  return {
    cdgRiveDroite: group.fares.find((f) => f.route.includes("CDG") && f.route.includes("droite"))!.price,
    cdgRiveGauche: group.fares.find((f) => f.route.includes("CDG") && f.route.includes("gauche"))!.price,
    orlyRiveDroite: group.fares.find((f) => f.route.includes("Orly") && f.route.includes("droite"))!.price,
    orlyRiveGauche: group.fares.find((f) => f.route.includes("Orly") && f.route.includes("gauche"))!.price,
    fares: group.fares,
    supplements: AIRPORT_SUPPLEMENTS,
  };
}

export const AIRPORT_FARES: AirportFareGroup[] = [
  {
    airport: "Paris CDG & Orly",
    departmentCodes: ["75", "92", "93", "94"],
    fares: [
      { route: "CDG ↔ Paris rive droite", price: 56 },
      { route: "CDG ↔ Paris rive gauche", price: 65 },
      { route: "Orly ↔ Paris rive droite", price: 45 },
      { route: "Orly ↔ Paris rive gauche", price: 36 },
    ],
  },
  {
    airport: "Nice Côte d'Azur",
    departmentCodes: ["06"],
    fares: [
      { route: "Nice Côte d'Azur ↔ Cannes", price: 85 },
      { route: "Nice Côte d'Azur ↔ Monaco", price: 95 },
      { route: "Nice Côte d'Azur ↔ Nice-centre", price: 32 },
      { route: "Nice Côte d'Azur ↔ Cap d'Antibes / Juan-les-Pins", price: 72 },
    ],
  },
];
