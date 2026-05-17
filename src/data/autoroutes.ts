// ─── Interfaces ─────────────────────────────────────────────

export interface ServiceArea {
  name: string;
  km: number;
  direction: string; // "nord" | "sud" | "est" | "ouest" | "both"
  services: string[]; // ["fuel","restaurant","hotel","repair"]
}

export interface AutoroutePricing {
  from: string;
  to: string;
  berline: string;
  van: string;
}

export interface AutorouteData {
  slug: string;
  name: string; // "Autoroute A6"
  fullName: string; // "Autoroute du Soleil"
  from: string;
  to: string;
  lengthKm: number;
  tollInfo: string; // approximate toll cost
  avgDailyTraffic: string; // e.g. "100 000 véhicules/jour"
  concessionaire: string;
  serviceAreas: ServiceArea[];
  citiesServed: string[]; // slugs from cities.ts that are along this autoroute
  pricing: AutoroutePricing[];
}

// ─── Data ─────────────────────────────────────────────

export const autoroutes: AutorouteData[] = [
  // ─── 1. A1 ─────────────────────────────────────────────
  {
    slug: "a1",
    name: "Autoroute A1",
    fullName: "Autoroute du Nord",
    from: "Paris",
    to: "Lille",
    lengthKm: 211,
    tollInfo: "~16 € pour le trajet complet Paris–Lille",
    avgDailyTraffic: "100 000 véhicules/jour",
    concessionaire: "SANEF",
    serviceAreas: [
      { name: "Aire de Vémars-Est", km: 25, direction: "nord", services: ["fuel", "restaurant"] },
      { name: "Aire de Saint-Léger", km: 55, direction: "nord", services: ["fuel", "restaurant", "hotel"] },
      { name: "Aire de Ressons-Ouest", km: 85, direction: "sud", services: ["fuel", "restaurant"] },
      { name: "Aire de Roye-Goyencourt", km: 110, direction: "nord", services: ["fuel", "restaurant", "repair"] },
      { name: "Aire d'Assevillers", km: 135, direction: "both", services: ["fuel", "restaurant", "hotel", "repair"] },
      { name: "Aire de Rumaucourt", km: 170, direction: "nord", services: ["fuel", "restaurant"] },
    ],
    citiesServed: ["paris", "saint-denis", "aubervilliers", "drancy", "le-blanc-mesnil", "aulnay-sous-bois", "villeparisis", "mitry-mory", "sarcelles", "lille"],
    pricing: [
      { from: "Paris", to: "Lille", berline: "280 €", van: "350 €" },
      { from: "Paris", to: "Amiens", berline: "180 €", van: "230 €" },
      { from: "Roissy CDG", to: "Lille", berline: "250 €", van: "320 €" },
      { from: "Paris", to: "Arras", berline: "230 €", van: "290 €" },
    ],
  },

  // ─── 2. A4 ─────────────────────────────────────────────
  {
    slug: "a4",
    name: "Autoroute A4",
    fullName: "Autoroute de l'Est",
    from: "Paris",
    to: "Strasbourg",
    lengthKm: 480,
    tollInfo: "~35 € pour le trajet complet Paris–Strasbourg",
    avgDailyTraffic: "80 000 véhicules/jour",
    concessionaire: "SANEF",
    serviceAreas: [
      { name: "Aire de Ferrières", km: 30, direction: "est", services: ["fuel", "restaurant"] },
      { name: "Aire de Meaux-Villenoy", km: 45, direction: "est", services: ["fuel", "restaurant"] },
      { name: "Aire de Reims-Champagne Nord", km: 140, direction: "est", services: ["fuel", "restaurant", "hotel"] },
      { name: "Aire de Verdun-Saint-Nicolas", km: 260, direction: "est", services: ["fuel", "restaurant", "repair"] },
      { name: "Aire de Saint-Avold", km: 380, direction: "est", services: ["fuel", "restaurant", "hotel"] },
      { name: "Aire de Brumath", km: 450, direction: "ouest", services: ["fuel", "restaurant"] },
    ],
    citiesServed: ["paris", "chelles", "champs-sur-marne", "torcy", "noisiel", "lognes", "bussy-saint-georges", "lagny-sur-marne", "meaux", "reims", "metz", "strasbourg"],
    pricing: [
      { from: "Paris", to: "Reims", berline: "200 €", van: "260 €" },
      { from: "Paris", to: "Metz", berline: "380 €", van: "470 €" },
      { from: "Paris", to: "Strasbourg", berline: "480 €", van: "590 €" },
      { from: "Meaux", to: "Reims", berline: "130 €", van: "170 €" },
      { from: "Reims", to: "Metz", berline: "200 €", van: "260 €" },
    ],
  },

  // ─── 3. A5 ─────────────────────────────────────────────
  {
    slug: "a5",
    name: "Autoroute A5",
    fullName: "Autoroute du Sud-Est",
    from: "Paris",
    to: "Langres",
    lengthKm: 260,
    tollInfo: "~18 € pour le trajet complet Paris–Langres",
    avgDailyTraffic: "40 000 véhicules/jour",
    concessionaire: "APRR",
    serviceAreas: [
      { name: "Aire de Villiers", km: 50, direction: "sud", services: ["fuel", "restaurant"] },
      { name: "Aire de Troyes-Le Plessis", km: 145, direction: "sud", services: ["fuel", "restaurant", "hotel"] },
      { name: "Aire d'Épineau-les-Voves", km: 80, direction: "sud", services: ["fuel", "restaurant"] },
      { name: "Aire de Châtillon-sur-Seine", km: 215, direction: "sud", services: ["fuel", "restaurant", "repair"] },
    ],
    citiesServed: ["paris", "fontainebleau", "montereau-fault-yonne", "provins"],
    pricing: [
      { from: "Paris", to: "Troyes", berline: "200 €", van: "260 €" },
      { from: "Paris", to: "Sens", berline: "150 €", van: "195 €" },
      { from: "Fontainebleau", to: "Troyes", berline: "140 €", van: "180 €" },
    ],
  },

  // ─── 4. A6 ─────────────────────────────────────────────
  {
    slug: "a6",
    name: "Autoroute A6",
    fullName: "Autoroute du Soleil",
    from: "Paris",
    to: "Lyon",
    lengthKm: 460,
    tollInfo: "~35 € pour le trajet complet Paris–Lyon",
    avgDailyTraffic: "90 000 véhicules/jour",
    concessionaire: "APRR",
    serviceAreas: [
      { name: "Aire de Nemours", km: 75, direction: "sud", services: ["fuel", "restaurant"] },
      { name: "Aire de Venoy-Soleil Levant", km: 165, direction: "sud", services: ["fuel", "restaurant", "hotel"] },
      { name: "Aire d'Avallon", km: 220, direction: "both", services: ["fuel", "restaurant", "repair"] },
      { name: "Aire de Beaune-Tailly", km: 310, direction: "sud", services: ["fuel", "restaurant", "hotel", "repair"] },
      { name: "Aire de Mâcon-Saint-Albain", km: 390, direction: "sud", services: ["fuel", "restaurant"] },
      { name: "Aire de Dardilly", km: 450, direction: "nord", services: ["fuel", "restaurant"] },
    ],
    citiesServed: ["paris", "evry-courcouronnes", "corbeil-essonnes", "fontainebleau", "nemours", "dijon", "lyon", "villeurbanne"],
    pricing: [
      { from: "Paris", to: "Lyon", berline: "480 €", van: "590 €" },
      { from: "Paris", to: "Auxerre", berline: "210 €", van: "270 €" },
      { from: "Paris", to: "Dijon", berline: "340 €", van: "430 €" },
      { from: "Dijon", to: "Lyon", berline: "200 €", van: "260 €" },
      { from: "Paris", to: "Beaune", berline: "350 €", van: "440 €" },
    ],
  },

  // ─── 5. A7 ─────────────────────────────────────────────
  {
    slug: "a7",
    name: "Autoroute A7",
    fullName: "Autoroute du Soleil (suite)",
    from: "Lyon",
    to: "Marseille",
    lengthKm: 310,
    tollInfo: "~25 € pour le trajet complet Lyon–Marseille",
    avgDailyTraffic: "80 000 véhicules/jour",
    concessionaire: "ASF",
    serviceAreas: [
      { name: "Aire de Vienne-Reventin", km: 25, direction: "sud", services: ["fuel", "restaurant"] },
      { name: "Aire de Saint-Rambert-d'Albon", km: 60, direction: "sud", services: ["fuel", "restaurant", "repair"] },
      { name: "Aire de Valence", km: 100, direction: "both", services: ["fuel", "restaurant", "hotel"] },
      { name: "Aire de Montélimar-Est", km: 155, direction: "sud", services: ["fuel", "restaurant", "hotel"] },
      { name: "Aire d'Orange-Le Grès", km: 210, direction: "sud", services: ["fuel", "restaurant"] },
      { name: "Aire de Lançon-de-Provence", km: 270, direction: "sud", services: ["fuel", "restaurant", "repair"] },
    ],
    citiesServed: ["lyon", "villeurbanne", "venissieux", "vaulx-en-velin", "valence", "avignon", "aix-en-provence", "marseille"],
    pricing: [
      { from: "Lyon", to: "Marseille", berline: "380 €", van: "470 €" },
      { from: "Lyon", to: "Valence", berline: "140 €", van: "180 €" },
      { from: "Lyon", to: "Avignon", berline: "270 €", van: "340 €" },
      { from: "Avignon", to: "Marseille", berline: "120 €", van: "155 €" },
      { from: "Valence", to: "Marseille", berline: "250 €", van: "320 €" },
    ],
  },

  // ─── 6. A8 ─────────────────────────────────────────────
  {
    slug: "a8",
    name: "Autoroute A8",
    fullName: "La Provençale",
    from: "Aix-en-Provence",
    to: "Nice (frontière italienne)",
    lengthKm: 224,
    tollInfo: "~22 € pour le trajet complet Aix–Nice",
    avgDailyTraffic: "60 000 véhicules/jour",
    concessionaire: "ESCOTA",
    serviceAreas: [
      { name: "Aire de Cambarette Nord", km: 35, direction: "est", services: ["fuel", "restaurant"] },
      { name: "Aire de Brignoles", km: 65, direction: "est", services: ["fuel", "restaurant", "repair"] },
      { name: "Aire du Canaver", km: 105, direction: "est", services: ["fuel", "restaurant"] },
      { name: "Aire de Vidauban", km: 90, direction: "est", services: ["fuel", "restaurant", "hotel"] },
      { name: "Aire de l'Esterel", km: 145, direction: "est", services: ["fuel", "restaurant"] },
      { name: "Aire de Nice-Saint-Isidore", km: 210, direction: "ouest", services: ["fuel", "restaurant"] },
    ],
    citiesServed: ["aix-en-provence", "toulon", "frejus", "cannes", "antibes", "nice"],
    pricing: [
      { from: "Aix-en-Provence", to: "Nice", berline: "260 €", van: "330 €" },
      { from: "Aix-en-Provence", to: "Cannes", berline: "200 €", van: "260 €" },
      { from: "Cannes", to: "Nice", berline: "65 €", van: "85 €" },
      { from: "Toulon", to: "Nice", berline: "180 €", van: "230 €" },
      { from: "Nice", to: "Fréjus", berline: "120 €", van: "155 €" },
    ],
  },

  // ─── 7. A9 ─────────────────────────────────────────────
  {
    slug: "a9",
    name: "Autoroute A9",
    fullName: "La Languedocienne",
    from: "Orange",
    to: "Le Perthus (frontière espagnole)",
    lengthKm: 280,
    tollInfo: "~24 € pour le trajet complet Orange–Le Perthus",
    avgDailyTraffic: "55 000 véhicules/jour",
    concessionaire: "ASF",
    serviceAreas: [
      { name: "Aire de Tavel", km: 15, direction: "sud", services: ["fuel", "restaurant"] },
      { name: "Aire de Nîmes-Marguerittes", km: 50, direction: "sud", services: ["fuel", "restaurant", "hotel"] },
      { name: "Aire de Montpellier-Fabrègues", km: 100, direction: "sud", services: ["fuel", "restaurant", "repair"] },
      { name: "Aire de Béziers-Montblanc", km: 155, direction: "sud", services: ["fuel", "restaurant"] },
      { name: "Aire de Narbonne-Vinassan", km: 185, direction: "sud", services: ["fuel", "restaurant", "hotel"] },
      { name: "Aire du Village Catalan", km: 260, direction: "sud", services: ["fuel", "restaurant", "repair"] },
    ],
    citiesServed: ["avignon", "nimes", "montpellier", "perpignan"],
    pricing: [
      { from: "Montpellier", to: "Perpignan", berline: "210 €", van: "270 €" },
      { from: "Nîmes", to: "Montpellier", berline: "75 €", van: "95 €" },
      { from: "Orange", to: "Montpellier", berline: "150 €", van: "195 €" },
      { from: "Montpellier", to: "Narbonne", berline: "130 €", van: "170 €" },
    ],
  },

  // ─── 8. A10 ─────────────────────────────────────────────
  {
    slug: "a10",
    name: "Autoroute A10",
    fullName: "L'Aquitaine",
    from: "Paris",
    to: "Bordeaux",
    lengthKm: 540,
    tollInfo: "~45 € pour le trajet complet Paris–Bordeaux",
    avgDailyTraffic: "70 000 véhicules/jour",
    concessionaire: "Vinci Autoroutes",
    serviceAreas: [
      { name: "Aire de Limours-Janvry", km: 35, direction: "sud", services: ["fuel", "restaurant"] },
      { name: "Aire d'Orléans-Saran", km: 120, direction: "sud", services: ["fuel", "restaurant", "hotel"] },
      { name: "Aire de Tours-Val de Loire", km: 235, direction: "sud", services: ["fuel", "restaurant", "hotel", "repair"] },
      { name: "Aire de Poitiers-Jaunay-Clan", km: 320, direction: "sud", services: ["fuel", "restaurant"] },
      { name: "Aire de Saint-André-de-Cubzac", km: 510, direction: "nord", services: ["fuel", "restaurant", "repair"] },
    ],
    citiesServed: ["paris", "massy", "orleans", "tours", "bordeaux"],
    pricing: [
      { from: "Paris", to: "Bordeaux", berline: "560 €", van: "690 €" },
      { from: "Paris", to: "Tours", berline: "280 €", van: "350 €" },
      { from: "Paris", to: "Orléans", berline: "170 €", van: "220 €" },
      { from: "Tours", to: "Bordeaux", berline: "320 €", van: "400 €" },
      { from: "Paris", to: "Poitiers", berline: "380 €", van: "470 €" },
    ],
  },

  // ─── 9. A11 ─────────────────────────────────────────────
  {
    slug: "a11",
    name: "Autoroute A11",
    fullName: "L'Océane",
    from: "Paris",
    to: "Nantes",
    lengthKm: 345,
    tollInfo: "~30 € pour le trajet complet Paris–Nantes",
    avgDailyTraffic: "50 000 véhicules/jour",
    concessionaire: "Vinci Autoroutes",
    serviceAreas: [
      { name: "Aire de Chartres-Gasville", km: 80, direction: "ouest", services: ["fuel", "restaurant"] },
      { name: "Aire du Mans-Arnage", km: 195, direction: "ouest", services: ["fuel", "restaurant", "hotel"] },
      { name: "Aire de La Ferté-Bernard", km: 160, direction: "ouest", services: ["fuel", "restaurant", "repair"] },
      { name: "Aire de Vaiges", km: 250, direction: "ouest", services: ["fuel", "restaurant"] },
      { name: "Aire d'Ancenis", km: 315, direction: "ouest", services: ["fuel", "restaurant"] },
    ],
    citiesServed: ["paris", "le-mans", "angers", "nantes"],
    pricing: [
      { from: "Paris", to: "Nantes", berline: "390 €", van: "480 €" },
      { from: "Paris", to: "Le Mans", berline: "220 €", van: "280 €" },
      { from: "Paris", to: "Angers", berline: "310 €", van: "390 €" },
      { from: "Le Mans", to: "Nantes", berline: "190 €", van: "240 €" },
    ],
  },

  // ─── 10. A13 ─────────────────────────────────────────────
  {
    slug: "a13",
    name: "Autoroute A13",
    fullName: "Autoroute de Normandie",
    from: "Paris",
    to: "Caen",
    lengthKm: 225,
    tollInfo: "~22 € pour le trajet complet Paris–Caen",
    avgDailyTraffic: "70 000 véhicules/jour",
    concessionaire: "SAPN",
    serviceAreas: [
      { name: "Aire de Rosny-sur-Seine", km: 55, direction: "ouest", services: ["fuel", "restaurant"] },
      { name: "Aire de Vironvay-Nord", km: 105, direction: "ouest", services: ["fuel", "restaurant", "hotel"] },
      { name: "Aire de Beuzeville", km: 160, direction: "ouest", services: ["fuel", "restaurant", "repair"] },
      { name: "Aire de Giberville", km: 215, direction: "est", services: ["fuel", "restaurant"] },
    ],
    citiesServed: ["paris", "nanterre", "rueil-malmaison", "saint-cloud", "versailles", "rouen", "caen"],
    pricing: [
      { from: "Paris", to: "Caen", berline: "280 €", van: "350 €" },
      { from: "Paris", to: "Rouen", berline: "180 €", van: "230 €" },
      { from: "Paris", to: "Deauville", berline: "240 €", van: "310 €" },
      { from: "Rouen", to: "Caen", berline: "140 €", van: "180 €" },
    ],
  },

  // ─── 11. A14 ─────────────────────────────────────────────
  {
    slug: "a14",
    name: "Autoroute A14",
    fullName: "Autoroute du Mantois",
    from: "Paris (La Défense)",
    to: "Orgeval",
    lengthKm: 16,
    tollInfo: "~8 € pour le trajet complet",
    avgDailyTraffic: "90 000 véhicules/jour",
    concessionaire: "SANEF",
    serviceAreas: [
      { name: "Aire de Nanterre (tunnel)", km: 3, direction: "ouest", services: ["fuel"] },
      { name: "Aire d'Orgeval", km: 15, direction: "ouest", services: ["fuel", "restaurant"] },
    ],
    citiesServed: ["nanterre", "puteaux", "courbevoie", "la-garenne-colombes", "rueil-malmaison"],
    pricing: [
      { from: "La Défense", to: "Orgeval", berline: "55 €", van: "70 €" },
      { from: "La Défense", to: "Poissy", berline: "45 €", van: "60 €" },
      { from: "Nanterre", to: "Orgeval", berline: "40 €", van: "55 €" },
    ],
  },

  // ─── 12. A15 ─────────────────────────────────────────────
  {
    slug: "a15",
    name: "Autoroute A15",
    fullName: "Autoroute du Nord de l'Île-de-France",
    from: "Paris",
    to: "Cergy-Pontoise",
    lengthKm: 26,
    tollInfo: "Gratuite",
    avgDailyTraffic: "120 000 véhicules/jour",
    concessionaire: "DIRIF (gratuite)",
    serviceAreas: [
      { name: "Aire de Gennevilliers", km: 5, direction: "nord", services: ["fuel"] },
      { name: "Aire d'Argenteuil", km: 10, direction: "nord", services: ["fuel", "restaurant"] },
      { name: "Aire de Cergy-Préfecture", km: 24, direction: "both", services: ["fuel", "restaurant"] },
    ],
    citiesServed: ["paris", "gennevilliers", "argenteuil", "colombes", "saint-denis", "cergy", "sarcelles"],
    pricing: [
      { from: "Paris", to: "Cergy-Pontoise", berline: "60 €", van: "80 €" },
      { from: "La Défense", to: "Cergy-Pontoise", berline: "50 €", van: "65 €" },
      { from: "Gennevilliers", to: "Cergy-Pontoise", berline: "45 €", van: "60 €" },
    ],
  },

  // ─── 13. A16 ─────────────────────────────────────────────
  {
    slug: "a16",
    name: "Autoroute A16",
    fullName: "Autoroute des Estuaires",
    from: "Paris",
    to: "Boulogne-sur-Mer",
    lengthKm: 305,
    tollInfo: "~22 € pour le trajet complet Paris–Boulogne",
    avgDailyTraffic: "45 000 véhicules/jour",
    concessionaire: "SANEF",
    serviceAreas: [
      { name: "Aire du Plessis-Belleville", km: 40, direction: "nord", services: ["fuel", "restaurant"] },
      { name: "Aire de Saint-Christophe", km: 85, direction: "nord", services: ["fuel", "restaurant", "hotel"] },
      { name: "Aire d'Amiens-Dury", km: 130, direction: "nord", services: ["fuel", "restaurant", "repair"] },
      { name: "Aire d'Abbeville", km: 175, direction: "nord", services: ["fuel", "restaurant"] },
      { name: "Aire de Baie de Somme", km: 200, direction: "nord", services: ["fuel", "restaurant"] },
    ],
    citiesServed: ["paris", "saint-denis", "sarcelles", "amiens", "le-havre"],
    pricing: [
      { from: "Paris", to: "Amiens", berline: "190 €", van: "240 €" },
      { from: "Paris", to: "Boulogne-sur-Mer", berline: "340 €", van: "420 €" },
      { from: "Paris", to: "Calais", berline: "360 €", van: "440 €" },
      { from: "Amiens", to: "Boulogne-sur-Mer", berline: "170 €", van: "220 €" },
    ],
  },

  // ─── 14. A20 ─────────────────────────────────────────────
  {
    slug: "a20",
    name: "Autoroute A20",
    fullName: "L'Occitane",
    from: "Vierzon",
    to: "Montauban",
    lengthKm: 350,
    tollInfo: "Gratuite",
    avgDailyTraffic: "30 000 véhicules/jour",
    concessionaire: "Gratuite (État)",
    serviceAreas: [
      { name: "Aire de Châteauroux-Déols", km: 50, direction: "sud", services: ["fuel", "restaurant"] },
      { name: "Aire de La Croisière", km: 120, direction: "sud", services: ["fuel", "restaurant"] },
      { name: "Aire de Limoges-Boisseuil", km: 170, direction: "sud", services: ["fuel", "restaurant", "repair"] },
      { name: "Aire de Brive-Nord", km: 235, direction: "sud", services: ["fuel", "restaurant", "hotel"] },
      { name: "Aire de Cahors-Sud", km: 295, direction: "sud", services: ["fuel", "restaurant"] },
    ],
    citiesServed: ["limoges", "toulouse"],
    pricing: [
      { from: "Limoges", to: "Toulouse", berline: "290 €", van: "360 €" },
      { from: "Limoges", to: "Brive", berline: "120 €", van: "155 €" },
      { from: "Brive", to: "Cahors", berline: "110 €", van: "140 €" },
      { from: "Cahors", to: "Montauban", berline: "90 €", van: "115 €" },
    ],
  },

  // ─── 15. A26 ─────────────────────────────────────────────
  {
    slug: "a26",
    name: "Autoroute A26",
    fullName: "Autoroute des Anglais",
    from: "Calais",
    to: "Troyes",
    lengthKm: 340,
    tollInfo: "~25 € pour le trajet complet Calais–Troyes",
    avgDailyTraffic: "25 000 véhicules/jour",
    concessionaire: "SANEF",
    serviceAreas: [
      { name: "Aire de Ruminghem", km: 20, direction: "sud", services: ["fuel", "restaurant"] },
      { name: "Aire de Lillers", km: 80, direction: "sud", services: ["fuel", "restaurant", "hotel"] },
      { name: "Aire de Baralle", km: 130, direction: "sud", services: ["fuel", "restaurant", "repair"] },
      { name: "Aire de Saint-Quentin-Harly", km: 185, direction: "sud", services: ["fuel", "restaurant"] },
      { name: "Aire de Reims-Gueux", km: 260, direction: "sud", services: ["fuel", "restaurant", "hotel"] },
    ],
    citiesServed: ["lille", "reims"],
    pricing: [
      { from: "Calais", to: "Reims", berline: "320 €", van: "400 €" },
      { from: "Calais", to: "Troyes", berline: "390 €", van: "480 €" },
      { from: "Calais", to: "Lille", berline: "150 €", van: "195 €" },
      { from: "Reims", to: "Troyes", berline: "130 €", van: "170 €" },
    ],
  },

  // ─── 16. A31 ─────────────────────────────────────────────
  {
    slug: "a31",
    name: "Autoroute A31",
    fullName: "Autoroute de Lorraine",
    from: "Luxembourg (frontière)",
    to: "Beaune",
    lengthKm: 310,
    tollInfo: "~15 € (section payante Toul–Beaune)",
    avgDailyTraffic: "50 000 véhicules/jour",
    concessionaire: "APRR / DIRIF",
    serviceAreas: [
      { name: "Aire de Thionville", km: 25, direction: "sud", services: ["fuel", "restaurant"] },
      { name: "Aire de Metz-Saint-Privat", km: 55, direction: "sud", services: ["fuel", "restaurant", "hotel"] },
      { name: "Aire de Nancy-Flavigny", km: 105, direction: "sud", services: ["fuel", "restaurant", "repair"] },
      { name: "Aire de Dijon-Brognon", km: 245, direction: "sud", services: ["fuel", "restaurant"] },
      { name: "Aire de Langres-Noidant", km: 195, direction: "sud", services: ["fuel", "restaurant"] },
    ],
    citiesServed: ["metz", "nancy", "dijon"],
    pricing: [
      { from: "Metz", to: "Nancy", berline: "95 €", van: "120 €" },
      { from: "Metz", to: "Dijon", berline: "280 €", van: "350 €" },
      { from: "Nancy", to: "Dijon", berline: "210 €", van: "270 €" },
      { from: "Metz", to: "Luxembourg", berline: "90 €", van: "115 €" },
    ],
  },

  // ─── 17. A35 ─────────────────────────────────────────────
  {
    slug: "a35",
    name: "Autoroute A35",
    fullName: "Autoroute d'Alsace",
    from: "Strasbourg",
    to: "Bâle (frontière suisse)",
    lengthKm: 145,
    tollInfo: "Gratuite",
    avgDailyTraffic: "70 000 véhicules/jour",
    concessionaire: "DIRIF (gratuite)",
    serviceAreas: [
      { name: "Aire de Strasbourg-Sud", km: 10, direction: "sud", services: ["fuel", "restaurant"] },
      { name: "Aire de Colmar-Nord", km: 65, direction: "sud", services: ["fuel", "restaurant", "repair"] },
      { name: "Aire de Mulhouse-Nord", km: 100, direction: "sud", services: ["fuel", "restaurant"] },
      { name: "Aire de Saint-Louis", km: 135, direction: "sud", services: ["fuel", "restaurant"] },
    ],
    citiesServed: ["strasbourg", "mulhouse"],
    pricing: [
      { from: "Strasbourg", to: "Mulhouse", berline: "160 €", van: "205 €" },
      { from: "Strasbourg", to: "Colmar", berline: "95 €", van: "120 €" },
      { from: "Colmar", to: "Mulhouse", berline: "70 €", van: "90 €" },
      { from: "Mulhouse", to: "Bâle", berline: "60 €", van: "80 €" },
    ],
  },

  // ─── 18. A36 ─────────────────────────────────────────────
  {
    slug: "a36",
    name: "Autoroute A36",
    fullName: "La Comtoise",
    from: "Beaune",
    to: "Mulhouse",
    lengthKm: 220,
    tollInfo: "~16 € pour le trajet complet Beaune–Mulhouse",
    avgDailyTraffic: "35 000 véhicules/jour",
    concessionaire: "APRR",
    serviceAreas: [
      { name: "Aire de Dole-Choisey", km: 45, direction: "est", services: ["fuel", "restaurant"] },
      { name: "Aire de Besançon-Marchaux", km: 90, direction: "est", services: ["fuel", "restaurant", "hotel"] },
      { name: "Aire de L'Isle-sur-le-Doubs", km: 130, direction: "est", services: ["fuel", "restaurant", "repair"] },
      { name: "Aire de Montbéliard", km: 165, direction: "est", services: ["fuel", "restaurant"] },
    ],
    citiesServed: ["dijon", "besancon", "mulhouse"],
    pricing: [
      { from: "Beaune", to: "Besançon", berline: "140 €", van: "180 €" },
      { from: "Besançon", to: "Mulhouse", berline: "150 €", van: "195 €" },
      { from: "Beaune", to: "Mulhouse", berline: "270 €", van: "340 €" },
      { from: "Dijon", to: "Besançon", berline: "120 €", van: "155 €" },
    ],
  },

  // ─── 19. A61 ─────────────────────────────────────────────
  {
    slug: "a61",
    name: "Autoroute A61",
    fullName: "Autoroute des Deux Mers",
    from: "Toulouse",
    to: "Narbonne",
    lengthKm: 150,
    tollInfo: "~12 € pour le trajet complet Toulouse–Narbonne",
    avgDailyTraffic: "40 000 véhicules/jour",
    concessionaire: "ASF",
    serviceAreas: [
      { name: "Aire de Villefranche-de-Lauragais", km: 35, direction: "est", services: ["fuel", "restaurant"] },
      { name: "Aire de Castelnaudary", km: 60, direction: "est", services: ["fuel", "restaurant", "repair"] },
      { name: "Aire de Carcassonne-Salvaza", km: 90, direction: "est", services: ["fuel", "restaurant", "hotel"] },
      { name: "Aire de Lézignan-Corbières", km: 125, direction: "est", services: ["fuel", "restaurant"] },
    ],
    citiesServed: ["toulouse", "montpellier"],
    pricing: [
      { from: "Toulouse", to: "Narbonne", berline: "190 €", van: "240 €" },
      { from: "Toulouse", to: "Carcassonne", berline: "120 €", van: "155 €" },
      { from: "Carcassonne", to: "Narbonne", berline: "80 €", van: "105 €" },
    ],
  },

  // ─── 20. A62 ─────────────────────────────────────────────
  {
    slug: "a62",
    name: "Autoroute A62",
    fullName: "Autoroute des Deux Mers",
    from: "Bordeaux",
    to: "Toulouse",
    lengthKm: 245,
    tollInfo: "~20 € pour le trajet complet Bordeaux–Toulouse",
    avgDailyTraffic: "45 000 véhicules/jour",
    concessionaire: "ASF",
    serviceAreas: [
      { name: "Aire de Brède", km: 20, direction: "sud", services: ["fuel", "restaurant"] },
      { name: "Aire d'Agen-Porte d'Aquitaine", km: 130, direction: "sud", services: ["fuel", "restaurant", "hotel"] },
      { name: "Aire de Castelsarrasin", km: 175, direction: "sud", services: ["fuel", "restaurant"] },
      { name: "Aire de Montauban-Nord", km: 210, direction: "sud", services: ["fuel", "restaurant", "repair"] },
      { name: "Aire de Frontonnais", km: 230, direction: "sud", services: ["fuel", "restaurant"] },
    ],
    citiesServed: ["bordeaux", "toulouse"],
    pricing: [
      { from: "Bordeaux", to: "Toulouse", berline: "310 €", van: "390 €" },
      { from: "Bordeaux", to: "Agen", berline: "180 €", van: "230 €" },
      { from: "Agen", to: "Toulouse", berline: "150 €", van: "195 €" },
      { from: "Bordeaux", to: "Montauban", berline: "270 €", van: "340 €" },
    ],
  },

  // ─── 21. A63 ─────────────────────────────────────────────
  {
    slug: "a63",
    name: "Autoroute A63",
    fullName: "Autoroute de la Côte Basque",
    from: "Bordeaux",
    to: "Bayonne (frontière espagnole)",
    lengthKm: 200,
    tollInfo: "~16 € pour le trajet complet Bordeaux–Bayonne",
    avgDailyTraffic: "40 000 véhicules/jour",
    concessionaire: "Vinci Autoroutes",
    serviceAreas: [
      { name: "Aire de Cestas-Gazinet", km: 20, direction: "sud", services: ["fuel", "restaurant"] },
      { name: "Aire de Labouheyre", km: 85, direction: "sud", services: ["fuel", "restaurant", "repair"] },
      { name: "Aire de Saubion", km: 170, direction: "sud", services: ["fuel", "restaurant"] },
      { name: "Aire de Seignanx", km: 190, direction: "sud", services: ["fuel", "restaurant", "hotel"] },
    ],
    citiesServed: ["bordeaux"],
    pricing: [
      { from: "Bordeaux", to: "Bayonne", berline: "250 €", van: "320 €" },
      { from: "Bordeaux", to: "Dax", berline: "180 €", van: "230 €" },
      { from: "Bayonne", to: "Bordeaux", berline: "250 €", van: "320 €" },
      { from: "Bordeaux", to: "Biarritz", berline: "260 €", van: "330 €" },
    ],
  },

  // ─── 22. A64 ─────────────────────────────────────────────
  {
    slug: "a64",
    name: "Autoroute A64",
    fullName: "La Pyrénéenne",
    from: "Bayonne",
    to: "Toulouse",
    lengthKm: 240,
    tollInfo: "~18 € pour le trajet complet Bayonne–Toulouse",
    avgDailyTraffic: "25 000 véhicules/jour",
    concessionaire: "ASF",
    serviceAreas: [
      { name: "Aire de Bidart", km: 10, direction: "est", services: ["fuel", "restaurant"] },
      { name: "Aire de Lacq-Audejos", km: 85, direction: "est", services: ["fuel", "restaurant", "repair"] },
      { name: "Aire de Pau-Pyrénées", km: 110, direction: "est", services: ["fuel", "restaurant", "hotel"] },
      { name: "Aire de Lannemezan", km: 165, direction: "est", services: ["fuel", "restaurant"] },
      { name: "Aire de Muret", km: 225, direction: "est", services: ["fuel", "restaurant"] },
    ],
    citiesServed: ["toulouse"],
    pricing: [
      { from: "Bayonne", to: "Toulouse", berline: "300 €", van: "380 €" },
      { from: "Bayonne", to: "Pau", berline: "140 €", van: "180 €" },
      { from: "Pau", to: "Toulouse", berline: "200 €", van: "260 €" },
      { from: "Bayonne", to: "Tarbes", berline: "170 €", van: "220 €" },
    ],
  },

  // ─── 23. A71 ─────────────────────────────────────────────
  {
    slug: "a71",
    name: "Autoroute A71",
    fullName: "Autoroute du Centre",
    from: "Orléans",
    to: "Clermont-Ferrand",
    lengthKm: 290,
    tollInfo: "~22 € pour le trajet complet Orléans–Clermont-Ferrand",
    avgDailyTraffic: "30 000 véhicules/jour",
    concessionaire: "APRR",
    serviceAreas: [
      { name: "Aire de Salbris", km: 55, direction: "sud", services: ["fuel", "restaurant"] },
      { name: "Aire de Vierzon", km: 80, direction: "sud", services: ["fuel", "restaurant", "repair"] },
      { name: "Aire de Bourges-Sainte-Thorette", km: 130, direction: "sud", services: ["fuel", "restaurant", "hotel"] },
      { name: "Aire de Saint-Amand-Montrond", km: 175, direction: "sud", services: ["fuel", "restaurant"] },
      { name: "Aire de Montmarault-Le Vieux Morat", km: 230, direction: "sud", services: ["fuel", "restaurant"] },
    ],
    citiesServed: ["orleans", "clermont-ferrand"],
    pricing: [
      { from: "Orléans", to: "Clermont-Ferrand", berline: "340 €", van: "420 €" },
      { from: "Orléans", to: "Bourges", berline: "160 €", van: "205 €" },
      { from: "Bourges", to: "Clermont-Ferrand", berline: "200 €", van: "260 €" },
      { from: "Paris", to: "Clermont-Ferrand", berline: "440 €", van: "540 €" },
    ],
  },

  // ─── 24. A75 ─────────────────────────────────────────────
  {
    slug: "a75",
    name: "Autoroute A75",
    fullName: "La Méridienne",
    from: "Clermont-Ferrand",
    to: "Béziers",
    lengthKm: 340,
    tollInfo: "Gratuite (sauf viaduc de Millau ~11 €)",
    avgDailyTraffic: "25 000 véhicules/jour",
    concessionaire: "Gratuite (État) / Eiffage (viaduc de Millau)",
    serviceAreas: [
      { name: "Aire d'Issoire", km: 40, direction: "sud", services: ["fuel", "restaurant"] },
      { name: "Aire de Massiac", km: 95, direction: "sud", services: ["fuel", "restaurant", "repair"] },
      { name: "Aire de Saint-Flour", km: 115, direction: "sud", services: ["fuel", "restaurant", "hotel"] },
      { name: "Aire du Viaduc de Millau", km: 205, direction: "both", services: ["fuel", "restaurant"] },
      { name: "Aire de Lodève", km: 275, direction: "sud", services: ["fuel", "restaurant"] },
    ],
    citiesServed: ["clermont-ferrand", "montpellier"],
    pricing: [
      { from: "Clermont-Ferrand", to: "Montpellier", berline: "360 €", van: "440 €" },
      { from: "Clermont-Ferrand", to: "Millau", berline: "230 €", van: "290 €" },
      { from: "Millau", to: "Montpellier", berline: "150 €", van: "195 €" },
      { from: "Clermont-Ferrand", to: "Béziers", berline: "380 €", van: "470 €" },
    ],
  },

  // ─── 25. A77 ─────────────────────────────────────────────
  {
    slug: "a77",
    name: "Autoroute A77",
    fullName: "Autoroute de l'Arbre",
    from: "Nemours",
    to: "Nevers",
    lengthKm: 155,
    tollInfo: "~12 € pour le trajet complet Nemours–Nevers",
    avgDailyTraffic: "20 000 véhicules/jour",
    concessionaire: "APRR",
    serviceAreas: [
      { name: "Aire de Dordives", km: 10, direction: "sud", services: ["fuel", "restaurant"] },
      { name: "Aire de Montargis-Châlette", km: 45, direction: "sud", services: ["fuel", "restaurant", "repair"] },
      { name: "Aire de Briare", km: 85, direction: "sud", services: ["fuel", "restaurant"] },
      { name: "Aire de La Charité-sur-Loire", km: 125, direction: "sud", services: ["fuel", "restaurant"] },
    ],
    citiesServed: ["nemours", "fontainebleau"],
    pricing: [
      { from: "Nemours", to: "Nevers", berline: "190 €", van: "240 €" },
      { from: "Nemours", to: "Montargis", berline: "70 €", van: "90 €" },
      { from: "Paris", to: "Nevers", berline: "290 €", van: "360 €" },
    ],
  },

  // ─── 26. A83 ─────────────────────────────────────────────
  {
    slug: "a83",
    name: "Autoroute A83",
    fullName: "Autoroute de la Vendée",
    from: "Nantes",
    to: "Niort",
    lengthKm: 135,
    tollInfo: "~10 € pour le trajet complet Nantes–Niort",
    avgDailyTraffic: "25 000 véhicules/jour",
    concessionaire: "ASF",
    serviceAreas: [
      { name: "Aire de Saint-Philbert-de-Grand-Lieu", km: 20, direction: "sud", services: ["fuel", "restaurant"] },
      { name: "Aire de La Roche-sur-Yon", km: 60, direction: "sud", services: ["fuel", "restaurant", "repair"] },
      { name: "Aire de Fontenay-le-Comte", km: 95, direction: "sud", services: ["fuel", "restaurant"] },
    ],
    citiesServed: ["nantes"],
    pricing: [
      { from: "Nantes", to: "Niort", berline: "180 €", van: "230 €" },
      { from: "Nantes", to: "La Roche-sur-Yon", berline: "90 €", van: "115 €" },
      { from: "La Roche-sur-Yon", to: "Niort", berline: "100 €", van: "130 €" },
    ],
  },

  // ─── 27. A84 ─────────────────────────────────────────────
  {
    slug: "a84",
    name: "Autoroute A84",
    fullName: "Autoroute des Estuaires",
    from: "Caen",
    to: "Rennes",
    lengthKm: 170,
    tollInfo: "Gratuite",
    avgDailyTraffic: "30 000 véhicules/jour",
    concessionaire: "Gratuite (État)",
    serviceAreas: [
      { name: "Aire de Villers-Bocage", km: 25, direction: "sud", services: ["fuel", "restaurant"] },
      { name: "Aire de Villedieu-les-Poêles", km: 60, direction: "sud", services: ["fuel", "restaurant", "repair"] },
      { name: "Aire d'Avranches-Val-Saint-Père", km: 90, direction: "sud", services: ["fuel", "restaurant"] },
      { name: "Aire de Pontorson–Le Mont Saint-Michel", km: 110, direction: "sud", services: ["fuel", "restaurant", "hotel"] },
      { name: "Aire de Fougères", km: 140, direction: "sud", services: ["fuel", "restaurant"] },
    ],
    citiesServed: ["caen", "rennes"],
    pricing: [
      { from: "Caen", to: "Rennes", berline: "210 €", van: "270 €" },
      { from: "Caen", to: "Le Mont Saint-Michel", berline: "140 €", van: "180 €" },
      { from: "Rennes", to: "Le Mont Saint-Michel", berline: "95 €", van: "120 €" },
      { from: "Caen", to: "Avranches", berline: "120 €", van: "155 €" },
    ],
  },

  // ─── 28. A86 ─────────────────────────────────────────────
  {
    slug: "a86",
    name: "Autoroute A86",
    fullName: "Super-périphérique",
    from: "Francilienne (rocade partielle)",
    to: "Francilienne (rocade partielle)",
    lengthKm: 80,
    tollInfo: "Tunnel A86 : ~12 € (véhicule léger)",
    avgDailyTraffic: "150 000 véhicules/jour",
    concessionaire: "DIRIF / Cofiroute (tunnel duplex)",
    serviceAreas: [
      { name: "Aire de Vélizy-Villacoublay", km: 15, direction: "both", services: ["fuel"] },
      { name: "Aire de Nanterre", km: 30, direction: "both", services: ["fuel", "restaurant"] },
      { name: "Aire de Créteil", km: 55, direction: "both", services: ["fuel", "restaurant"] },
    ],
    citiesServed: [
      "nanterre", "rueil-malmaison", "saint-cloud", "versailles", "meudon", "antony",
      "clamart", "fontenay-aux-roses", "bagneux", "chatillon", "montrouge", "malakoff",
      "issy-les-moulineaux", "boulogne-billancourt", "suresnes", "puteaux", "courbevoie",
      "colombes", "gennevilliers", "villeneuve-la-garenne", "saint-denis", "bobigny",
      "montreuil", "creteil", "vitry-sur-seine", "ivry-sur-seine", "maisons-alfort",
      "villejuif", "fontenay-sous-bois", "vincennes", "noisy-le-grand", "champigny-sur-marne",
      "saint-maur-des-fosses",
    ],
    pricing: [
      { from: "Versailles", to: "Créteil", berline: "75 €", van: "95 €" },
      { from: "Nanterre", to: "Bobigny", berline: "55 €", van: "70 €" },
      { from: "Saint-Denis", to: "Versailles", berline: "70 €", van: "90 €" },
      { from: "Boulogne-Billancourt", to: "Montreuil", berline: "55 €", van: "70 €" },
      { from: "Créteil", to: "Gennevilliers", berline: "65 €", van: "85 €" },
    ],
  },

  // ─── 29. A89 ─────────────────────────────────────────────
  {
    slug: "a89",
    name: "Autoroute A89",
    fullName: "La Transeuropéenne",
    from: "Bordeaux",
    to: "Lyon",
    lengthKm: 490,
    tollInfo: "~40 € pour le trajet complet Bordeaux–Lyon",
    avgDailyTraffic: "25 000 véhicules/jour",
    concessionaire: "ASF / APRR",
    serviceAreas: [
      { name: "Aire de Saint-André-de-Cubzac", km: 25, direction: "est", services: ["fuel", "restaurant"] },
      { name: "Aire de Périgueux-Boulazac", km: 110, direction: "est", services: ["fuel", "restaurant", "repair"] },
      { name: "Aire de Tulle-Est", km: 195, direction: "est", services: ["fuel", "restaurant"] },
      { name: "Aire de Clermont-Ferrand Ouest", km: 310, direction: "est", services: ["fuel", "restaurant", "hotel"] },
      { name: "Aire de Thiers-Les Palles", km: 345, direction: "est", services: ["fuel", "restaurant"] },
      { name: "Aire de Tarare", km: 440, direction: "est", services: ["fuel", "restaurant", "repair"] },
    ],
    citiesServed: ["bordeaux", "clermont-ferrand", "lyon", "villeurbanne"],
    pricing: [
      { from: "Bordeaux", to: "Lyon", berline: "520 €", van: "640 €" },
      { from: "Bordeaux", to: "Clermont-Ferrand", berline: "370 €", van: "460 €" },
      { from: "Clermont-Ferrand", to: "Lyon", berline: "190 €", van: "240 €" },
      { from: "Bordeaux", to: "Périgueux", berline: "150 €", van: "195 €" },
      { from: "Périgueux", to: "Clermont-Ferrand", berline: "240 €", van: "310 €" },
    ],
  },

  // ─── 30. A104 ─────────────────────────────────────────────
  {
    slug: "a104",
    name: "Autoroute A104",
    fullName: "Francilienne Est",
    from: "Cergy",
    to: "Melun / Sénart (rocade partielle)",
    lengthKm: 95,
    tollInfo: "Gratuite",
    avgDailyTraffic: "90 000 véhicules/jour",
    concessionaire: "DIRIF (gratuite)",
    serviceAreas: [
      { name: "Aire de Cergy-Saint-Christophe", km: 5, direction: "both", services: ["fuel", "restaurant"] },
      { name: "Aire de Roissy-en-France", km: 30, direction: "both", services: ["fuel", "restaurant"] },
      { name: "Aire de Chelles", km: 55, direction: "both", services: ["fuel", "restaurant"] },
      { name: "Aire de Combs-la-Ville", km: 80, direction: "both", services: ["fuel", "restaurant", "repair"] },
    ],
    citiesServed: [
      "cergy", "sarcelles", "aulnay-sous-bois", "sevran", "villeparisis", "mitry-mory",
      "claye-souilly", "chelles", "vaires-sur-marne", "torcy", "noisiel", "lognes",
      "bussy-saint-georges", "pontault-combault", "combs-la-ville", "savigny-le-temple",
      "brie-comte-robert", "evry-courcouronnes", "corbeil-essonnes",
    ],
    pricing: [
      { from: "Cergy", to: "Roissy CDG", berline: "65 €", van: "85 €" },
      { from: "Roissy CDG", to: "Marne-la-Vallée", berline: "55 €", van: "70 €" },
      { from: "Cergy", to: "Sénart", berline: "95 €", van: "120 €" },
      { from: "Marne-la-Vallée", to: "Sénart", berline: "55 €", van: "70 €" },
      { from: "Aulnay-sous-Bois", to: "Évry", berline: "70 €", van: "90 €" },
    ],
  },
];

// ─── Helpers ─────────────────────────────────────────────

export function getAutorouteBySlug(slug: string): AutorouteData | undefined {
  return autoroutes.find((a) => a.slug === slug);
}

export function getAutorouteSlugs(): string[] {
  return autoroutes.map((a) => a.slug);
}
