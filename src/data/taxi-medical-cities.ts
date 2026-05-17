// ─── Interfaces ─────────────────────────────────────────────

export interface TaxiMedicalPricingTier {
  type: string; // "aller-simple", "aller-retour", "serie-5", "serie-10"
  labelFr: string;
  labelEn: string;
  berline: string; // price range e.g. "25-35 €"
  van_pmr: string; // adapted vehicle for reduced mobility
}

export interface TaxiMedicalCityData {
  citySlug: string; // reference to cities.ts slug
  pricing: TaxiMedicalPricingTier[];
  hospitals: string[]; // 5-10 real hospital/clinic names
}

// ─── Pricing Templates ─────────────────────────────────────

/** Paris & close inner suburbs (92 inner, bordering 93/94) */
const PRICING_MEDICAL_PARIS: TaxiMedicalPricingTier[] = [
  {
    type: "aller-simple",
    labelFr: "Aller simple",
    labelEn: "One way",
    berline: "25-35 \u20ac",
    van_pmr: "35-50 \u20ac",
  },
  {
    type: "aller-retour",
    labelFr: "Aller-retour (attente incluse)",
    labelEn: "Round trip (waiting included)",
    berline: "45-65 \u20ac",
    van_pmr: "65-90 \u20ac",
  },
  {
    type: "serie-5",
    labelFr: "Forfait 5 aller-retour",
    labelEn: "5 round-trip package",
    berline: "200-280 \u20ac",
    van_pmr: "290-400 \u20ac",
  },
  {
    type: "serie-10",
    labelFr: "Forfait 10 aller-retour",
    labelEn: "10 round-trip package",
    berline: "380-520 \u20ac",
    van_pmr: "540-750 \u20ac",
  },
];

/** IDF suburbs (outer 92, 93, 94, 77, 78, 91, 95) */
const PRICING_MEDICAL_IDF: TaxiMedicalPricingTier[] = [
  {
    type: "aller-simple",
    labelFr: "Aller simple",
    labelEn: "One way",
    berline: "30-45 \u20ac",
    van_pmr: "40-60 \u20ac",
  },
  {
    type: "aller-retour",
    labelFr: "Aller-retour (attente incluse)",
    labelEn: "Round trip (waiting included)",
    berline: "55-80 \u20ac",
    van_pmr: "75-110 \u20ac",
  },
  {
    type: "serie-5",
    labelFr: "Forfait 5 aller-retour",
    labelEn: "5 round-trip package",
    berline: "240-350 \u20ac",
    van_pmr: "340-490 \u20ac",
  },
  {
    type: "serie-10",
    labelFr: "Forfait 10 aller-retour",
    labelEn: "10 round-trip package",
    berline: "450-650 \u20ac",
    van_pmr: "640-920 \u20ac",
  },
];

/** Grandes métropoles hors IDF */
const PRICING_MEDICAL_METROPOLE: TaxiMedicalPricingTier[] = [
  {
    type: "aller-simple",
    labelFr: "Aller simple",
    labelEn: "One way",
    berline: "20-35 \u20ac",
    van_pmr: "30-50 \u20ac",
  },
  {
    type: "aller-retour",
    labelFr: "Aller-retour (attente incluse)",
    labelEn: "Round trip (waiting included)",
    berline: "35-60 \u20ac",
    van_pmr: "55-85 \u20ac",
  },
  {
    type: "serie-5",
    labelFr: "Forfait 5 aller-retour",
    labelEn: "5 round-trip package",
    berline: "160-260 \u20ac",
    van_pmr: "250-380 \u20ac",
  },
  {
    type: "serie-10",
    labelFr: "Forfait 10 aller-retour",
    labelEn: "10 round-trip package",
    berline: "300-480 \u20ac",
    van_pmr: "460-700 \u20ac",
  },
];

// ─── Helper ─────────────────────────────────────────────────

function tmCity(citySlug: string, pricing: TaxiMedicalPricingTier[], hospitals: string[]): TaxiMedicalCityData {
  return { citySlug, pricing, hospitals };
}

// ─── Data (138 cities) ──────────────────────────────────────

export const taxiMedicalCities: TaxiMedicalCityData[] = [
  // ── Paris ──────────────────────────────────────────────────
  tmCity("paris", PRICING_MEDICAL_PARIS, [
    "H\u00f4pital Piti\u00e9-Salp\u00eatri\u00e8re",
    "H\u00f4pital Necker-Enfants Malades",
    "H\u00f4pital Cochin",
    "H\u00f4pital Europ\u00e9en Georges-Pompidou",
    "H\u00f4pital Saint-Louis",
    "H\u00f4pital Lariboisi\u00e8re",
    "H\u00f4pital Tenon",
    "H\u00f4pital Robert-Debr\u00e9",
    "H\u00f4pital Bichat-Claude-Bernard",
    "Institut Curie",
  ]),

  // ── 95 – Val-d'Oise ──────────────────────────────────────
  tmCity("argenteuil", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier Victor-Dupouy",
    "H\u00f4pital de Pontoise",
    "Centre Hospitalier de Gonesse",
    "Clinique Claude-Bernard",
    "H\u00f4pital Beaujon (Clichy)",
  ]),

  // ── 78 – Yvelines ──────────────────────────────────────────
  tmCity("versailles", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Versailles",
    "H\u00f4pital Andr\u00e9-Mignot",
    "H\u00f4pital de Poissy-Saint-Germain",
    "Clinique de la Porte Verte",
    "H\u00f4pital Priv\u00e9 de Versailles",
    "Centre de R\u00e9\u00e9ducation de Bois-Larris",
  ]),

  // ── 77 south – far ────────────────────────────────────────
  tmCity("fontainebleau", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Fontainebleau",
    "P\u00f4le Sant\u00e9 Sud 77",
    "Centre Hospitalier de Nemours",
    "CH de Montereau-Fault-Yonne",
    "Clinique Saint-Jean-l'\u00c9vangeliste",
  ]),
  tmCity("avon", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Fontainebleau",
    "P\u00f4le Sant\u00e9 Sud 77",
    "Centre Hospitalier de Nemours",
    "Clinique Saint-Jean-l'\u00c9vangeliste",
    "Centre de Dialyse Avon",
  ]),
  tmCity("moret-sur-loing", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Fontainebleau",
    "CH de Montereau-Fault-Yonne",
    "P\u00f4le Sant\u00e9 Sud 77",
    "Centre Hospitalier de Nemours",
    "Centre M\u00e9dical Moret",
  ]),
  tmCity("barbizon", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Fontainebleau",
    "Centre Hospitalier de Melun",
    "P\u00f4le Sant\u00e9 Sud 77",
    "Centre Hospitalier Sud Francilien",
    "Clinique Saint-Jean-l'\u00c9vangeliste",
  ]),
  tmCity("montereau-fault-yonne", PRICING_MEDICAL_IDF, [
    "CH de Montereau-Fault-Yonne",
    "Centre Hospitalier de Fontainebleau",
    "Centre Hospitalier de Nemours",
    "P\u00f4le Sant\u00e9 Sud 77",
    "CH de Sens",
  ]),

  // ── 77 west / north – medium ────────────────────────────────
  tmCity("chelles", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Chelles",
    "H\u00f4pital de Lagny-sur-Marne",
    "H\u00f4pital de Meaux",
    "H\u00f4pital Robert-Debr\u00e9 (Paris)",
    "Centre Hospitalier de Jossigny",
  ]),
  tmCity("villeparisis", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Meaux",
    "H\u00f4pital de Lagny-sur-Marne",
    "Centre Hospitalier de Jossigny",
    "H\u00f4pital Robert-Debr\u00e9 (Paris)",
    "Centre Hospitalier de Montfermeil",
  ]),
  tmCity("mitry-mory", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Meaux",
    "H\u00f4pital Robert-Ballanger (Aulnay)",
    "Centre Hospitalier de Montfermeil",
    "H\u00f4pital Jean-Verdier (Bondy)",
    "Centre Hospitalier de Gonesse",
  ]),
  tmCity("claye-souilly", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Meaux",
    "Centre Hospitalier de Jossigny",
    "H\u00f4pital Robert-Ballanger (Aulnay)",
    "Centre Hospitalier de Montfermeil",
    "H\u00f4pital de Lagny-sur-Marne",
  ]),
  tmCity("champs-sur-marne", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Jossigny",
    "H\u00f4pital de Lagny-sur-Marne",
    "Centre Hospitalier de Chelles",
    "H\u00f4pital Henri-Mondor (Cr\u00e9teil)",
    "CHI de Cr\u00e9teil",
  ]),
  tmCity("torcy", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Jossigny",
    "H\u00f4pital de Lagny-sur-Marne",
    "Centre Hospitalier de Chelles",
    "H\u00f4pital Henri-Mondor (Cr\u00e9teil)",
    "Centre de R\u00e9\u00e9ducation de Bussy",
  ]),
  tmCity("noisiel", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Jossigny",
    "H\u00f4pital de Lagny-sur-Marne",
    "Centre Hospitalier de Chelles",
    "H\u00f4pital Henri-Mondor (Cr\u00e9teil)",
    "Centre de Dialyse Marne-la-Vall\u00e9e",
  ]),
  tmCity("lognes", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Jossigny",
    "H\u00f4pital de Lagny-sur-Marne",
    "Centre Hospitalier de Chelles",
    "H\u00f4pital Henri-Mondor (Cr\u00e9teil)",
    "Centre M\u00e9dical de Lognes",
  ]),
  tmCity("bussy-saint-georges", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Jossigny",
    "H\u00f4pital de Lagny-sur-Marne",
    "Centre Hospitalier de Meaux",
    "H\u00f4pital Henri-Mondor (Cr\u00e9teil)",
    "Centre M\u00e9dical Val d'Europe",
  ]),
  tmCity("lagny-sur-marne", PRICING_MEDICAL_IDF, [
    "H\u00f4pital de Lagny-sur-Marne",
    "Centre Hospitalier de Jossigny",
    "Centre Hospitalier de Meaux",
    "Centre Hospitalier de Chelles",
    "H\u00f4pital Henri-Mondor (Cr\u00e9teil)",
  ]),
  tmCity("pontault-combault", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Jossigny",
    "H\u00f4pital Henri-Mondor (Cr\u00e9teil)",
    "Centre Hospitalier Intercommunal de Villeneuve-Saint-Georges",
    "Centre Hospitalier de Brie-Comte-Robert",
    "H\u00f4pital de Lagny-sur-Marne",
  ]),
  tmCity("roissy-en-brie", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Jossigny",
    "H\u00f4pital Henri-Mondor (Cr\u00e9teil)",
    "H\u00f4pital de Lagny-sur-Marne",
    "Centre Hospitalier de Chelles",
    "Centre de Dialyse Roissy-en-Brie",
  ]),
  tmCity("ozoir-la-ferriere", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Jossigny",
    "H\u00f4pital Henri-Mondor (Cr\u00e9teil)",
    "H\u00f4pital de Lagny-sur-Marne",
    "Centre Hospitalier de Brie-Comte-Robert",
    "Centre M\u00e9dical d'Ozoir",
  ]),
  tmCity("vaires-sur-marne", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Chelles",
    "H\u00f4pital de Lagny-sur-Marne",
    "Centre Hospitalier de Jossigny",
    "H\u00f4pital Robert-Debr\u00e9 (Paris)",
    "Centre de Soins Vaires",
  ]),
  tmCity("dammarie-les-lys", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Melun",
    "P\u00f4le Sant\u00e9 Sud 77",
    "Centre Hospitalier de Fontainebleau",
    "Centre Hospitalier Sud Francilien",
    "Centre de Dialyse Melun",
  ]),
  tmCity("le-mee-sur-seine", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Melun",
    "P\u00f4le Sant\u00e9 Sud 77",
    "Centre Hospitalier de Fontainebleau",
    "Centre Hospitalier Sud Francilien",
    "Clinique de l'Ermitage",
  ]),
  tmCity("combs-la-ville", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier Sud Francilien",
    "Centre Hospitalier de Melun",
    "H\u00f4pital Henri-Mondor (Cr\u00e9teil)",
    "CHI de Villeneuve-Saint-Georges",
    "Centre M\u00e9dical de S\u00e9nart",
  ]),
  tmCity("savigny-le-temple", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier Sud Francilien",
    "Centre Hospitalier de Melun",
    "P\u00f4le Sant\u00e9 Sud 77",
    "CHI de Villeneuve-Saint-Georges",
    "Centre de Dialyse S\u00e9nart",
  ]),
  tmCity("brie-comte-robert", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Brie-Comte-Robert",
    "Centre Hospitalier Sud Francilien",
    "H\u00f4pital Henri-Mondor (Cr\u00e9teil)",
    "Centre Hospitalier de Melun",
    "CHI de Villeneuve-Saint-Georges",
  ]),
  tmCity("coulommiers", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Coulommiers",
    "Centre Hospitalier de Meaux",
    "H\u00f4pital de Lagny-sur-Marne",
    "Centre Hospitalier de Jossigny",
    "Centre M\u00e9dical de Coulommiers",
  ]),
  tmCity("provins", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Provins",
    "Centre Hospitalier de Melun",
    "CH de Montereau-Fault-Yonne",
    "Centre Hospitalier de Fontainebleau",
    "Centre de Soins de Provins",
  ]),
  tmCity("nemours", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Nemours",
    "Centre Hospitalier de Fontainebleau",
    "P\u00f4le Sant\u00e9 Sud 77",
    "CH de Montereau-Fault-Yonne",
    "Centre de Dialyse Nemours",
  ]),

  // ── 92 – Hauts-de-Seine ──────────────────────────────────
  tmCity("nanterre", PRICING_MEDICAL_PARIS, [
    "H\u00f4pital Max-Fourestier (Nanterre)",
    "H\u00f4pital Raymond-Poincar\u00e9 (Garches)",
    "H\u00f4pital Ambroise-Par\u00e9 (Boulogne)",
    "H\u00f4pital Beaujon (Clichy)",
    "H\u00f4pital Foch (Suresnes)",
  ]),
  tmCity("courbevoie", PRICING_MEDICAL_PARIS, [
    "H\u00f4pital Beaujon (Clichy)",
    "H\u00f4pital Ambroise-Par\u00e9 (Boulogne)",
    "H\u00f4pital Foch (Suresnes)",
    "H\u00f4pital Europ\u00e9en Georges-Pompidou",
    "H\u00f4pital Necker-Enfants Malades",
  ]),
  tmCity("levallois-perret", PRICING_MEDICAL_PARIS, [
    "H\u00f4pital Beaujon (Clichy)",
    "H\u00f4pital Bichat-Claude-Bernard",
    "H\u00f4pital Ambroise-Par\u00e9 (Boulogne)",
    "H\u00f4pital Europ\u00e9en Georges-Pompidou",
    "H\u00f4pital Lariboisi\u00e8re",
  ]),
  tmCity("neuilly-sur-seine", PRICING_MEDICAL_PARIS, [
    "H\u00f4pital Am\u00e9ricain de Paris",
    "H\u00f4pital Beaujon (Clichy)",
    "H\u00f4pital Ambroise-Par\u00e9 (Boulogne)",
    "H\u00f4pital Europ\u00e9en Georges-Pompidou",
    "H\u00f4pital Necker-Enfants Malades",
  ]),
  tmCity("colombes", PRICING_MEDICAL_IDF, [
    "H\u00f4pital Louis-Mourier (Colombes)",
    "H\u00f4pital Beaujon (Clichy)",
    "H\u00f4pital Max-Fourestier (Nanterre)",
    "H\u00f4pital Ambroise-Par\u00e9 (Boulogne)",
    "Centre Hospitalier de Pontoise",
  ]),
  tmCity("rueil-malmaison", PRICING_MEDICAL_IDF, [
    "H\u00f4pital Stell (Rueil-Malmaison)",
    "H\u00f4pital Foch (Suresnes)",
    "H\u00f4pital Ambroise-Par\u00e9 (Boulogne)",
    "H\u00f4pital Raymond-Poincar\u00e9 (Garches)",
    "H\u00f4pital Max-Fourestier (Nanterre)",
  ]),
  tmCity("asnieres-sur-seine", PRICING_MEDICAL_PARIS, [
    "H\u00f4pital Beaujon (Clichy)",
    "H\u00f4pital Louis-Mourier (Colombes)",
    "H\u00f4pital Bichat-Claude-Bernard",
    "H\u00f4pital Lariboisi\u00e8re",
    "H\u00f4pital Saint-Louis",
  ]),
  tmCity("boulogne-billancourt", PRICING_MEDICAL_PARIS, [
    "H\u00f4pital Ambroise-Par\u00e9 (Boulogne)",
    "H\u00f4pital Europ\u00e9en Georges-Pompidou",
    "H\u00f4pital Necker-Enfants Malades",
    "H\u00f4pital Cochin",
    "Institut Mutualiste Montsouris",
  ]),
  tmCity("issy-les-moulineaux", PRICING_MEDICAL_PARIS, [
    "H\u00f4pital Corentin-Celton (Issy)",
    "H\u00f4pital Europ\u00e9en Georges-Pompidou",
    "H\u00f4pital Necker-Enfants Malades",
    "H\u00f4pital Cochin",
    "H\u00f4pital Antoine-B\u00e9cl\u00e8re (Clamart)",
  ]),
  tmCity("meudon", PRICING_MEDICAL_IDF, [
    "H\u00f4pital Antoine-B\u00e9cl\u00e8re (Clamart)",
    "H\u00f4pital Ambroise-Par\u00e9 (Boulogne)",
    "H\u00f4pital Percy (Clamart)",
    "H\u00f4pital Europ\u00e9en Georges-Pompidou",
    "H\u00f4pital Corentin-Celton (Issy)",
  ]),
  tmCity("antony", PRICING_MEDICAL_IDF, [
    "H\u00f4pital Priv\u00e9 d'Antony",
    "H\u00f4pital Antoine-B\u00e9cl\u00e8re (Clamart)",
    "H\u00f4pital Bic\u00eatre (Le Kremlin-Bic\u00eatre)",
    "Institut Gustave-Roussy (Villejuif)",
    "H\u00f4pital Paul-Brousse (Villejuif)",
  ]),
  tmCity("clichy", PRICING_MEDICAL_PARIS, [
    "H\u00f4pital Beaujon (Clichy)",
    "H\u00f4pital Bichat-Claude-Bernard",
    "H\u00f4pital Louis-Mourier (Colombes)",
    "H\u00f4pital Lariboisi\u00e8re",
    "H\u00f4pital Saint-Louis",
  ]),
  tmCity("gennevilliers", PRICING_MEDICAL_IDF, [
    "H\u00f4pital Louis-Mourier (Colombes)",
    "H\u00f4pital Beaujon (Clichy)",
    "H\u00f4pital Max-Fourestier (Nanterre)",
    "H\u00f4pital Bichat-Claude-Bernard",
    "Centre Hospitalier de Saint-Denis",
  ]),
  tmCity("villeneuve-la-garenne", PRICING_MEDICAL_IDF, [
    "H\u00f4pital Beaujon (Clichy)",
    "H\u00f4pital Louis-Mourier (Colombes)",
    "Centre Hospitalier de Saint-Denis",
    "H\u00f4pital Bichat-Claude-Bernard",
    "H\u00f4pital Max-Fourestier (Nanterre)",
  ]),
  tmCity("puteaux", PRICING_MEDICAL_PARIS, [
    "H\u00f4pital Foch (Suresnes)",
    "H\u00f4pital Ambroise-Par\u00e9 (Boulogne)",
    "H\u00f4pital Beaujon (Clichy)",
    "H\u00f4pital Europ\u00e9en Georges-Pompidou",
    "H\u00f4pital Max-Fourestier (Nanterre)",
  ]),
  tmCity("la-garenne-colombes", PRICING_MEDICAL_PARIS, [
    "H\u00f4pital Louis-Mourier (Colombes)",
    "H\u00f4pital Beaujon (Clichy)",
    "H\u00f4pital Ambroise-Par\u00e9 (Boulogne)",
    "H\u00f4pital Foch (Suresnes)",
    "H\u00f4pital Max-Fourestier (Nanterre)",
  ]),
  tmCity("suresnes", PRICING_MEDICAL_PARIS, [
    "H\u00f4pital Foch (Suresnes)",
    "H\u00f4pital Ambroise-Par\u00e9 (Boulogne)",
    "H\u00f4pital Raymond-Poincar\u00e9 (Garches)",
    "H\u00f4pital Europ\u00e9en Georges-Pompidou",
    "H\u00f4pital Max-Fourestier (Nanterre)",
  ]),
  tmCity("saint-cloud", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier des Quatre Villes (Saint-Cloud)",
    "H\u00f4pital Foch (Suresnes)",
    "H\u00f4pital Raymond-Poincar\u00e9 (Garches)",
    "H\u00f4pital Ambroise-Par\u00e9 (Boulogne)",
    "H\u00f4pital Europ\u00e9en Georges-Pompidou",
  ]),
  tmCity("garches", PRICING_MEDICAL_IDF, [
    "H\u00f4pital Raymond-Poincar\u00e9 (Garches)",
    "H\u00f4pital Foch (Suresnes)",
    "H\u00f4pital Ambroise-Par\u00e9 (Boulogne)",
    "Centre Hospitalier de Versailles",
    "H\u00f4pital Europ\u00e9en Georges-Pompidou",
  ]),
  tmCity("chaville", PRICING_MEDICAL_IDF, [
    "H\u00f4pital Raymond-Poincar\u00e9 (Garches)",
    "H\u00f4pital Antoine-B\u00e9cl\u00e8re (Clamart)",
    "H\u00f4pital Foch (Suresnes)",
    "Centre Hospitalier de Versailles",
    "H\u00f4pital Ambroise-Par\u00e9 (Boulogne)",
  ]),
  tmCity("sevres", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier des Quatre Villes",
    "H\u00f4pital Antoine-B\u00e9cl\u00e8re (Clamart)",
    "H\u00f4pital Raymond-Poincar\u00e9 (Garches)",
    "H\u00f4pital Foch (Suresnes)",
    "H\u00f4pital Ambroise-Par\u00e9 (Boulogne)",
  ]),
  tmCity("ville-d-avray", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier des Quatre Villes (Saint-Cloud)",
    "H\u00f4pital Raymond-Poincar\u00e9 (Garches)",
    "H\u00f4pital Foch (Suresnes)",
    "Centre Hospitalier de Versailles",
    "H\u00f4pital Antoine-B\u00e9cl\u00e8re (Clamart)",
  ]),
  tmCity("montrouge", PRICING_MEDICAL_PARIS, [
    "H\u00f4pital Cochin",
    "Institut Mutualiste Montsouris",
    "H\u00f4pital Bic\u00eatre (Le Kremlin-Bic\u00eatre)",
    "H\u00f4pital Antoine-B\u00e9cl\u00e8re (Clamart)",
    "Institut Gustave-Roussy (Villejuif)",
  ]),
  tmCity("malakoff", PRICING_MEDICAL_PARIS, [
    "H\u00f4pital Cochin",
    "Institut Mutualiste Montsouris",
    "H\u00f4pital Antoine-B\u00e9cl\u00e8re (Clamart)",
    "H\u00f4pital Bic\u00eatre (Le Kremlin-Bic\u00eatre)",
    "H\u00f4pital Necker-Enfants Malades",
  ]),
  tmCity("vanves", PRICING_MEDICAL_PARIS, [
    "H\u00f4pital Corentin-Celton (Issy)",
    "H\u00f4pital Cochin",
    "H\u00f4pital Antoine-B\u00e9cl\u00e8re (Clamart)",
    "H\u00f4pital Europ\u00e9en Georges-Pompidou",
    "H\u00f4pital Necker-Enfants Malades",
  ]),
  tmCity("chatillon", PRICING_MEDICAL_PARIS, [
    "H\u00f4pital Antoine-B\u00e9cl\u00e8re (Clamart)",
    "H\u00f4pital Cochin",
    "H\u00f4pital Percy (Clamart)",
    "Institut Mutualiste Montsouris",
    "H\u00f4pital Bic\u00eatre (Le Kremlin-Bic\u00eatre)",
  ]),
  tmCity("clamart", PRICING_MEDICAL_IDF, [
    "H\u00f4pital Antoine-B\u00e9cl\u00e8re (Clamart)",
    "H\u00f4pital Percy (Clamart)",
    "H\u00f4pital Cochin",
    "Institut Mutualiste Montsouris",
    "H\u00f4pital Bic\u00eatre (Le Kremlin-Bic\u00eatre)",
  ]),
  tmCity("bagneux", PRICING_MEDICAL_IDF, [
    "H\u00f4pital Antoine-B\u00e9cl\u00e8re (Clamart)",
    "H\u00f4pital Bic\u00eatre (Le Kremlin-Bic\u00eatre)",
    "Institut Gustave-Roussy (Villejuif)",
    "H\u00f4pital Cochin",
    "Institut Mutualiste Montsouris",
  ]),
  tmCity("fontenay-aux-roses", PRICING_MEDICAL_IDF, [
    "H\u00f4pital Antoine-B\u00e9cl\u00e8re (Clamart)",
    "H\u00f4pital Bic\u00eatre (Le Kremlin-Bic\u00eatre)",
    "Institut Gustave-Roussy (Villejuif)",
    "H\u00f4pital Percy (Clamart)",
    "H\u00f4pital Cochin",
  ]),
  tmCity("sceaux", PRICING_MEDICAL_IDF, [
    "H\u00f4pital Priv\u00e9 d'Antony",
    "H\u00f4pital Antoine-B\u00e9cl\u00e8re (Clamart)",
    "H\u00f4pital Bic\u00eatre (Le Kremlin-Bic\u00eatre)",
    "Institut Gustave-Roussy (Villejuif)",
    "H\u00f4pital Paul-Brousse (Villejuif)",
  ]),
  tmCity("bourg-la-reine", PRICING_MEDICAL_IDF, [
    "H\u00f4pital Priv\u00e9 d'Antony",
    "H\u00f4pital Antoine-B\u00e9cl\u00e8re (Clamart)",
    "H\u00f4pital Bic\u00eatre (Le Kremlin-Bic\u00eatre)",
    "Institut Gustave-Roussy (Villejuif)",
    "H\u00f4pital Cochin",
  ]),
  tmCity("le-plessis-robinson", PRICING_MEDICAL_IDF, [
    "H\u00f4pital Antoine-B\u00e9cl\u00e8re (Clamart)",
    "H\u00f4pital Percy (Clamart)",
    "H\u00f4pital Bic\u00eatre (Le Kremlin-Bic\u00eatre)",
    "Institut Gustave-Roussy (Villejuif)",
    "H\u00f4pital Priv\u00e9 d'Antony",
  ]),
  tmCity("chatenay-malabry", PRICING_MEDICAL_IDF, [
    "H\u00f4pital Antoine-B\u00e9cl\u00e8re (Clamart)",
    "H\u00f4pital Priv\u00e9 d'Antony",
    "H\u00f4pital Bic\u00eatre (Le Kremlin-Bic\u00eatre)",
    "Institut Gustave-Roussy (Villejuif)",
    "H\u00f4pital Percy (Clamart)",
  ]),

  // ── 93 – Seine-Saint-Denis ──────────────────────────────────
  tmCity("saint-denis", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Saint-Denis",
    "H\u00f4pital Delafontaine",
    "H\u00f4pital Casanova",
    "H\u00f4pital Avicenne (Bobigny)",
    "H\u00f4pital Bichat-Claude-Bernard",
  ]),
  tmCity("montreuil", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier Intercommunal de Montreuil",
    "H\u00f4pital Avicenne (Bobigny)",
    "H\u00f4pital Saint-Antoine (Paris)",
    "H\u00f4pital Tenon (Paris)",
    "H\u00f4pital Henri-Mondor (Cr\u00e9teil)",
  ]),
  tmCity("aubervilliers", PRICING_MEDICAL_IDF, [
    "H\u00f4pital Avicenne (Bobigny)",
    "Centre Hospitalier de Saint-Denis",
    "H\u00f4pital Bichat-Claude-Bernard",
    "H\u00f4pital Lariboisi\u00e8re",
    "H\u00f4pital Robert-Debr\u00e9 (Paris)",
  ]),
  tmCity("aulnay-sous-bois", PRICING_MEDICAL_IDF, [
    "H\u00f4pital Robert-Ballanger (Aulnay)",
    "H\u00f4pital Avicenne (Bobigny)",
    "H\u00f4pital Jean-Verdier (Bondy)",
    "Centre Hospitalier de Montfermeil",
    "Centre Hospitalier de Gonesse",
  ]),
  tmCity("drancy", PRICING_MEDICAL_IDF, [
    "H\u00f4pital Avicenne (Bobigny)",
    "H\u00f4pital Jean-Verdier (Bondy)",
    "H\u00f4pital Robert-Ballanger (Aulnay)",
    "Centre Hospitalier de Saint-Denis",
    "H\u00f4pital Bichat-Claude-Bernard",
  ]),
  tmCity("noisy-le-grand", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Noisy-le-Grand",
    "H\u00f4pital Henri-Mondor (Cr\u00e9teil)",
    "Centre Hospitalier de Jossigny",
    "H\u00f4pital Avicenne (Bobigny)",
    "H\u00f4pital Saint-Camille (Bry-sur-Marne)",
  ]),
  tmCity("le-blanc-mesnil", PRICING_MEDICAL_IDF, [
    "H\u00f4pital Avicenne (Bobigny)",
    "H\u00f4pital Robert-Ballanger (Aulnay)",
    "H\u00f4pital Jean-Verdier (Bondy)",
    "Centre Hospitalier de Gonesse",
    "Centre Hospitalier de Saint-Denis",
  ]),
  tmCity("pantin", PRICING_MEDICAL_IDF, [
    "H\u00f4pital Avicenne (Bobigny)",
    "H\u00f4pital Jean-Verdier (Bondy)",
    "H\u00f4pital Robert-Debr\u00e9 (Paris)",
    "H\u00f4pital Saint-Louis (Paris)",
    "H\u00f4pital Lariboisi\u00e8re",
  ]),
  tmCity("epinay-sur-seine", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Saint-Denis",
    "H\u00f4pital Avicenne (Bobigny)",
    "H\u00f4pital Beaujon (Clichy)",
    "Centre Hospitalier de Gonesse",
    "H\u00f4pital Bichat-Claude-Bernard",
  ]),
  tmCity("bobigny", PRICING_MEDICAL_IDF, [
    "H\u00f4pital Avicenne (Bobigny)",
    "H\u00f4pital Jean-Verdier (Bondy)",
    "H\u00f4pital Robert-Ballanger (Aulnay)",
    "Centre Hospitalier de Saint-Denis",
    "H\u00f4pital Robert-Debr\u00e9 (Paris)",
  ]),
  tmCity("bondy", PRICING_MEDICAL_IDF, [
    "H\u00f4pital Jean-Verdier (Bondy)",
    "H\u00f4pital Avicenne (Bobigny)",
    "H\u00f4pital Robert-Ballanger (Aulnay)",
    "H\u00f4pital Robert-Debr\u00e9 (Paris)",
    "Centre Hospitalier de Montfermeil",
  ]),
  tmCity("sevran", PRICING_MEDICAL_IDF, [
    "H\u00f4pital Robert-Ballanger (Aulnay)",
    "H\u00f4pital Jean-Verdier (Bondy)",
    "Centre Hospitalier de Montfermeil",
    "Centre Hospitalier de Gonesse",
    "H\u00f4pital Avicenne (Bobigny)",
  ]),
  tmCity("saint-ouen-sur-seine", PRICING_MEDICAL_IDF, [
    "H\u00f4pital Bichat-Claude-Bernard",
    "Centre Hospitalier de Saint-Denis",
    "H\u00f4pital Beaujon (Clichy)",
    "H\u00f4pital Lariboisi\u00e8re",
    "H\u00f4pital Robert-Debr\u00e9 (Paris)",
  ]),

  // ── 94 – Val-de-Marne ──────────────────────────────────────
  tmCity("vitry-sur-seine", PRICING_MEDICAL_IDF, [
    "H\u00f4pital Paul-Brousse (Villejuif)",
    "Institut Gustave-Roussy (Villejuif)",
    "H\u00f4pital Bic\u00eatre (Le Kremlin-Bic\u00eatre)",
    "H\u00f4pital Piti\u00e9-Salp\u00eatri\u00e8re",
    "CHI de Villeneuve-Saint-Georges",
  ]),
  tmCity("creteil", PRICING_MEDICAL_IDF, [
    "H\u00f4pital Henri-Mondor (Cr\u00e9teil)",
    "CHI de Cr\u00e9teil",
    "H\u00f4pital Albert-Chenevier",
    "H\u00f4pital Bic\u00eatre (Le Kremlin-Bic\u00eatre)",
    "Institut Gustave-Roussy (Villejuif)",
  ]),
  tmCity("champigny-sur-marne", PRICING_MEDICAL_IDF, [
    "H\u00f4pital Henri-Mondor (Cr\u00e9teil)",
    "CHI de Cr\u00e9teil",
    "H\u00f4pital Saint-Camille (Bry-sur-Marne)",
    "H\u00f4pital Piti\u00e9-Salp\u00eatri\u00e8re",
    "H\u00f4pital Begin (Saint-Mand\u00e9)",
  ]),
  tmCity("saint-maur-des-fosses", PRICING_MEDICAL_IDF, [
    "H\u00f4pital Henri-Mondor (Cr\u00e9teil)",
    "CHI de Cr\u00e9teil",
    "H\u00f4pital Saint-Camille (Bry-sur-Marne)",
    "H\u00f4pital Piti\u00e9-Salp\u00eatri\u00e8re",
    "H\u00f4pital Begin (Saint-Mand\u00e9)",
  ]),
  tmCity("ivry-sur-seine", PRICING_MEDICAL_IDF, [
    "H\u00f4pital Charles-Foix (Ivry)",
    "H\u00f4pital Piti\u00e9-Salp\u00eatri\u00e8re",
    "H\u00f4pital Paul-Brousse (Villejuif)",
    "H\u00f4pital Bic\u00eatre (Le Kremlin-Bic\u00eatre)",
    "Institut Gustave-Roussy (Villejuif)",
  ]),
  tmCity("maisons-alfort", PRICING_MEDICAL_IDF, [
    "H\u00f4pital Henri-Mondor (Cr\u00e9teil)",
    "CHI de Cr\u00e9teil",
    "H\u00f4pital Piti\u00e9-Salp\u00eatri\u00e8re",
    "H\u00f4pital Begin (Saint-Mand\u00e9)",
    "H\u00f4pital Bic\u00eatre (Le Kremlin-Bic\u00eatre)",
  ]),
  tmCity("villejuif", PRICING_MEDICAL_IDF, [
    "Institut Gustave-Roussy (Villejuif)",
    "H\u00f4pital Paul-Brousse (Villejuif)",
    "H\u00f4pital Bic\u00eatre (Le Kremlin-Bic\u00eatre)",
    "H\u00f4pital Piti\u00e9-Salp\u00eatri\u00e8re",
    "H\u00f4pital Cochin",
  ]),
  tmCity("fontenay-sous-bois", PRICING_MEDICAL_IDF, [
    "H\u00f4pital Begin (Saint-Mand\u00e9)",
    "H\u00f4pital Henri-Mondor (Cr\u00e9teil)",
    "H\u00f4pital Saint-Antoine (Paris)",
    "H\u00f4pital Rothschild (Paris)",
    "H\u00f4pital Avicenne (Bobigny)",
  ]),
  tmCity("vincennes", PRICING_MEDICAL_IDF, [
    "H\u00f4pital Begin (Saint-Mand\u00e9)",
    "H\u00f4pital Saint-Antoine (Paris)",
    "H\u00f4pital Rothschild (Paris)",
    "H\u00f4pital Henri-Mondor (Cr\u00e9teil)",
    "H\u00f4pital Diaconesses Croix Saint-Simon",
  ]),

  // ── 91 – Essonne ──────────────────────────────────────────
  tmCity("evry-courcouronnes", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier Sud Francilien",
    "H\u00f4pital Priv\u00e9 d'\u00c9vry",
    "H\u00f4pital Bic\u00eatre (Le Kremlin-Bic\u00eatre)",
    "Institut Gustave-Roussy (Villejuif)",
    "Centre Hospitalier de Melun",
  ]),
  tmCity("corbeil-essonnes", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier Sud Francilien",
    "H\u00f4pital Priv\u00e9 d'\u00c9vry",
    "Centre Hospitalier de Melun",
    "H\u00f4pital Bic\u00eatre (Le Kremlin-Bic\u00eatre)",
    "Institut Gustave-Roussy (Villejuif)",
  ]),
  tmCity("massy", PRICING_MEDICAL_IDF, [
    "H\u00f4pital Priv\u00e9 Jacques-Cartier (Massy)",
    "H\u00f4pital Antoine-B\u00e9cl\u00e8re (Clamart)",
    "H\u00f4pital Bic\u00eatre (Le Kremlin-Bic\u00eatre)",
    "Centre Hospitalier d'Orsay",
    "Institut Gustave-Roussy (Villejuif)",
  ]),

  // ── 95 – Val-d'Oise ──────────────────────────────────────
  tmCity("cergy", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Pontoise",
    "H\u00f4pital Ren\u00e9-Dubos",
    "Centre Hospitalier de Gonesse",
    "H\u00f4pital Beaujon (Clichy)",
    "Centre Hospitalier de Poissy-Saint-Germain",
  ]),
  tmCity("sarcelles", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Gonesse",
    "H\u00f4pital Delafontaine (Saint-Denis)",
    "Centre Hospitalier de Pontoise",
    "H\u00f4pital Avicenne (Bobigny)",
    "H\u00f4pital Bichat-Claude-Bernard",
  ]),

  // ── 78 – Yvelines ──────────────────────────────────────────
  tmCity("sartrouville", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Poissy-Saint-Germain",
    "Centre Hospitalier de Versailles",
    "H\u00f4pital Max-Fourestier (Nanterre)",
    "H\u00f4pital Beaujon (Clichy)",
    "Centre Hospitalier de Pontoise",
  ]),

  // ── 77 – Seine-et-Marne ────────────────────────────────────
  tmCity("meaux", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Meaux",
    "H\u00f4pital de Lagny-sur-Marne",
    "Centre Hospitalier de Jossigny",
    "Centre Hospitalier de Coulommiers",
    "H\u00f4pital Robert-Debr\u00e9 (Paris)",
  ]),

  // ── Grandes métropoles ──────────────────────────────────────

  // Auvergne-Rhône-Alpes
  tmCity("lyon", PRICING_MEDICAL_METROPOLE, [
    "H\u00f4pital Edouard-Herriot",
    "H\u00f4pital de la Croix-Rousse",
    "Centre Hospitalier Lyon Sud",
    "H\u00f4pital Femme M\u00e8re Enfant",
    "Centre L\u00e9on-B\u00e9rard",
    "H\u00f4pital Cardio-Vasculaire Louis-Pradel",
    "H\u00f4pital Neurologique Pierre-Wertheimer",
  ]),
  tmCity("saint-etienne", PRICING_MEDICAL_METROPOLE, [
    "CHU de Saint-\u00c9tienne — H\u00f4pital Nord",
    "H\u00f4pital de Bellevue",
    "Clinique Mutualiste de Saint-\u00c9tienne",
    "H\u00f4pital Priv\u00e9 de la Loire",
    "Centre de Canc\u00e9rologie Lucien-Neuwirth",
  ]),
  tmCity("grenoble", PRICING_MEDICAL_METROPOLE, [
    "CHU Grenoble Alpes",
    "H\u00f4pital Albert-Michallon",
    "H\u00f4pital Couple-Enfant",
    "Clinique Mutualiste de Grenoble",
    "Groupe Hospitalier Mutualiste de Grenoble",
    "Centre de Canc\u00e9rologie de l'Is\u00e8re",
  ]),
  tmCity("villeurbanne", PRICING_MEDICAL_METROPOLE, [
    "H\u00f4pital Edouard-Herriot (Lyon)",
    "H\u00f4pital de la Croix-Rousse (Lyon)",
    "Clinique du Tonkin",
    "M\u00e9dipole Lyon-Villeurbanne",
    "Centre L\u00e9on-B\u00e9rard (Lyon)",
  ]),
  tmCity("clermont-ferrand", PRICING_MEDICAL_METROPOLE, [
    "CHU de Clermont-Ferrand — H\u00f4pital Gabriel-Montpied",
    "H\u00f4pital Henri-Mondor",
    "Centre Jean-Perrin",
    "P\u00f4le Sant\u00e9 R\u00e9publique",
    "Clinique la Ch\u00e2taigneraie",
  ]),
  tmCity("annecy", PRICING_MEDICAL_METROPOLE, [
    "Centre Hospitalier Annecy-Genevois",
    "H\u00f4pital de la Tour",
    "Clinique G\u00e9n\u00e9rale d'Annecy",
    "Centre de Dialyse d'Annecy",
    "Centre de R\u00e9\u00e9ducation de Marcy-l'\u00c9toile",
  ]),
  tmCity("valence", PRICING_MEDICAL_METROPOLE, [
    "Centre Hospitalier de Valence",
    "Clinique G\u00e9n\u00e9rale de Valence",
    "Clinique Kennedy",
    "Centre de Dialyse de Valence",
    "Maison de Sant\u00e9 de Valence",
  ]),
  tmCity("chambery", PRICING_MEDICAL_METROPOLE, [
    "Centre Hospitalier M\u00e9tropole Savoie",
    "H\u00f4pital de Chamb\u00e9ry",
    "Clinique M\u00e9dicale de Chamb\u00e9ry",
    "Centre de Dialyse de Chamb\u00e9ry",
    "Centre de R\u00e9\u00e9ducation de l'Arbi\u00e8re",
  ]),
  tmCity("venissieux", PRICING_MEDICAL_METROPOLE, [
    "Centre Hospitalier Lyon Sud",
    "H\u00f4pital Edouard-Herriot (Lyon)",
    "Centre L\u00e9on-B\u00e9rard (Lyon)",
    "H\u00f4pital Femme M\u00e8re Enfant (Lyon)",
    "Clinique du Vinatier",
  ]),
  tmCity("vaulx-en-velin", PRICING_MEDICAL_METROPOLE, [
    "H\u00f4pital Edouard-Herriot (Lyon)",
    "H\u00f4pital de la Croix-Rousse (Lyon)",
    "Centre L\u00e9on-B\u00e9rard (Lyon)",
    "H\u00f4pital Neurologique Pierre-Wertheimer",
    "Clinique du Tonkin (Villeurbanne)",
  ]),

  // Provence-Alpes-Côte d'Azur
  tmCity("marseille", PRICING_MEDICAL_METROPOLE, [
    "H\u00f4pital de la Timone",
    "H\u00f4pital Nord de Marseille",
    "H\u00f4pital de la Conception",
    "H\u00f4pital Sainte-Marguerite",
    "Institut Paoli-Calmettes",
    "H\u00f4pital Salvator",
    "Clinique Bouchard",
  ]),
  tmCity("nice", PRICING_MEDICAL_METROPOLE, [
    "CHU de Nice — H\u00f4pital Pasteur 2",
    "H\u00f4pital l'Archet 2",
    "H\u00f4pital de Cimiez",
    "Centre Antoine-Lacassagne",
    "Clinique Saint-George",
    "H\u00f4pital Lenval",
  ]),
  tmCity("toulon", PRICING_MEDICAL_METROPOLE, [
    "H\u00f4pital d'Instruction des Arm\u00e9es Sainte-Anne",
    "H\u00f4pital Font-Pr\u00e9",
    "H\u00f4pital de la Seyne-sur-Mer",
    "Clinique Saint-Michel",
    "Centre de Dialyse de Toulon",
  ]),
  tmCity("aix-en-provence", PRICING_MEDICAL_METROPOLE, [
    "Centre Hospitalier du Pays d'Aix",
    "Clinique Axium",
    "Clinique de Provence",
    "Centre de R\u00e9\u00e9ducation du Petit Arbois",
    "Centre de Dialyse d'Aix",
  ]),
  tmCity("avignon", PRICING_MEDICAL_METROPOLE, [
    "Centre Hospitalier Henri-Duffaut",
    "Clinique Rhône-Durance",
    "Polyclinique Urbain V",
    "Centre de Dialyse d'Avignon",
    "Institut Sainte-Catherine",
  ]),
  tmCity("antibes", PRICING_MEDICAL_METROPOLE, [
    "Centre Hospitalier d'Antibes",
    "H\u00f4pital de la Fontonne",
    "Clinique Saint-Jean",
    "CHU de Nice — H\u00f4pital l'Archet",
    "Centre Antoine-Lacassagne (Nice)",
  ]),
  tmCity("cannes", PRICING_MEDICAL_METROPOLE, [
    "Centre Hospitalier de Cannes — H\u00f4pital Simone-Veil",
    "Clinique Oxford",
    "Clinique du Palais",
    "Centre Hospitalier d'Antibes",
    "CHU de Nice — H\u00f4pital Pasteur",
  ]),
  tmCity("la-seyne-sur-mer", PRICING_MEDICAL_METROPOLE, [
    "H\u00f4pital de la Seyne-sur-Mer",
    "H\u00f4pital Font-Pr\u00e9 (Toulon)",
    "HIA Sainte-Anne (Toulon)",
    "Clinique Saint-Michel (Toulon)",
    "Centre de Dialyse Varois",
  ]),
  tmCity("hyeres", PRICING_MEDICAL_METROPOLE, [
    "Centre Hospitalier de Hy\u00e8res",
    "H\u00f4pital Ren\u00e9e-Sabran",
    "H\u00f4pital Font-Pr\u00e9 (Toulon)",
    "HIA Sainte-Anne (Toulon)",
    "Clinique M\u00e9dip\u00f4le de Savoie",
  ]),
  tmCity("frejus", PRICING_MEDICAL_METROPOLE, [
    "Centre Hospitalier Intercommunal de Fr\u00e9jus-Saint-Rapha\u00ebl",
    "H\u00f4pital Bonnet",
    "Clinique Les Music\u00e8nes",
    "Centre Hospitalier de Draguignan",
    "Centre de Dialyse Fr\u00e9jus",
  ]),
  tmCity("arles", PRICING_MEDICAL_METROPOLE, [
    "Centre Hospitalier Joseph-Imbert",
    "Clinique Jeanne d'Arc",
    "H\u00f4pital de la Timone (Marseille)",
    "Centre Hospitalier de Salon-de-Provence",
    "Centre de Dialyse d'Arles",
  ]),

  // Occitanie
  tmCity("toulouse", PRICING_MEDICAL_METROPOLE, [
    "CHU de Toulouse — H\u00f4pital Purpan",
    "H\u00f4pital Rangueil",
    "H\u00f4pital des Enfants",
    "H\u00f4pital Pierre-Paul Riquet",
    "Institut Universitaire du Cancer de Toulouse",
    "Clinique Pasteur",
    "Clinique des C\u00e8dres",
  ]),
  tmCity("montpellier", PRICING_MEDICAL_METROPOLE, [
    "CHU de Montpellier — H\u00f4pital Lapeyronie",
    "H\u00f4pital Arnaud-de-Villeneuve",
    "H\u00f4pital Saint-\u00c9loi",
    "H\u00f4pital Gui de Chauliac",
    "Institut du Cancer de Montpellier",
    "Clinique du Mill\u00e9naire",
  ]),
  tmCity("nimes", PRICING_MEDICAL_METROPOLE, [
    "CHU de N\u00eemes — H\u00f4pital Car\u00e9meau",
    "Clinique Ste-Th\u00e9r\u00e8se",
    "Polyclinique du Grand Sud",
    "Centre de Dialyse de N\u00eemes",
    "Clinique de Vald\u00e9gour",
  ]),
  tmCity("perpignan", PRICING_MEDICAL_METROPOLE, [
    "Centre Hospitalier de Perpignan",
    "H\u00f4pital Saint-Jean",
    "Clinique Saint-Pierre",
    "Centre de Dialyse de Perpignan",
    "Clinique Mutualiste Catalane",
  ]),

  // Nouvelle-Aquitaine
  tmCity("bordeaux", PRICING_MEDICAL_METROPOLE, [
    "CHU de Bordeaux — H\u00f4pital Pellegrin",
    "H\u00f4pital Saint-Andr\u00e9",
    "H\u00f4pital Haut-L\u00e9v\u00eaque",
    "Institut Bergoni\u00e9",
    "Polyclinique Bordeaux Nord",
    "Clinique Tivoli-Ducos",
  ]),
  tmCity("limoges", PRICING_MEDICAL_METROPOLE, [
    "CHU de Limoges — H\u00f4pital Dupuytren",
    "H\u00f4pital de la M\u00e8re et de l'Enfant",
    "Clinique Chénieux",
    "Centre de Dialyse de Limoges",
    "Clinique Fran\u00e7ois-Chénieux",
  ]),

  // Pays de la Loire
  tmCity("nantes", PRICING_MEDICAL_METROPOLE, [
    "CHU de Nantes — H\u00f4tel-Dieu",
    "H\u00f4pital Guillaume et Ren\u00e9 La\u00ebnnec",
    "H\u00f4pital Femme-Enfant-Adolescent",
    "Institut de Canc\u00e9rologie de l'Ouest",
    "Clinique Jules-Verne",
    "Clinique Br\u00e9t\u00e9ch\u00e9",
  ]),
  tmCity("angers", PRICING_MEDICAL_METROPOLE, [
    "CHU d'Angers",
    "H\u00f4pital Larrey",
    "ICO — Paul Papin",
    "Clinique de l'Anjou",
    "Centre de Dialyse d'Angers",
  ]),
  tmCity("le-mans", PRICING_MEDICAL_METROPOLE, [
    "Centre Hospitalier du Mans",
    "Clinique du Tertre-Rouge",
    "Clinique Victor-Hugo",
    "Centre de Dialyse du Mans",
    "P\u00f4le Sant\u00e9 Sud du Mans",
  ]),

  // Bretagne
  tmCity("rennes", PRICING_MEDICAL_METROPOLE, [
    "CHU de Rennes — H\u00f4pital Pontchaillou",
    "H\u00f4pital Sud de Rennes",
    "Centre Eug\u00e8ne-Marquis",
    "Clinique Saint-Laurent",
    "Clinique Mutualiste La Sagesse",
  ]),
  tmCity("brest", PRICING_MEDICAL_METROPOLE, [
    "CHRU de Brest — H\u00f4pital Morvan",
    "H\u00f4pital de la Cavale-Blanche",
    "HIA Clermont-Tonnerre",
    "Clinique Pasteur",
    "Centre de Dialyse de Brest",
  ]),

  // Hauts-de-France
  tmCity("lille", PRICING_MEDICAL_METROPOLE, [
    "CHU de Lille — H\u00f4pital Claude-Huriez",
    "H\u00f4pital Jeanne de Flandre",
    "H\u00f4pital Cardio-Pulmonaire",
    "Centre Oscar-Lambret",
    "H\u00f4pital Roger-Salengro",
    "Clinique de la Louvière",
  ]),
  tmCity("reims", PRICING_MEDICAL_METROPOLE, [
    "CHU de Reims — H\u00f4pital Robert-Debr\u00e9",
    "H\u00f4pital Maison-Blanche",
    "Institut Jean-Godinot",
    "Polyclinique de Courlancy",
    "Clinique de Bezannes",
  ]),
  tmCity("amiens", PRICING_MEDICAL_METROPOLE, [
    "CHU d'Amiens-Picardie",
    "H\u00f4pital Nord",
    "Clinique de l'Europe",
    "Centre de Canc\u00e9rologie de Picardie",
    "Centre de Dialyse d'Amiens",
  ]),

  // Grand Est
  tmCity("strasbourg", PRICING_MEDICAL_METROPOLE, [
    "CHU de Strasbourg — H\u00f4pital de Hautepierre",
    "H\u00f4pital Civil",
    "H\u00f4pital Pasteur",
    "Centre Paul-Strauss",
    "Clinique Sainte-Odile",
    "Clinique Rh\u00e9na",
  ]),
  tmCity("metz", PRICING_MEDICAL_METROPOLE, [
    "CHR Metz-Thionville — H\u00f4pital Mercy",
    "H\u00f4pital de Bon-Secours",
    "Clinique Claude-Bernard",
    "H\u00f4pital Robert-Schuman",
    "Centre de Dialyse de Metz",
  ]),
  tmCity("mulhouse", PRICING_MEDICAL_METROPOLE, [
    "H\u00f4pital \u00c9mile-Muller",
    "H\u00f4pital du Hasenrain",
    "Clinique du Diaconat",
    "Centre de Dialyse de Mulhouse",
    "Clinique de la Porte du Sud",
  ]),
  tmCity("nancy", PRICING_MEDICAL_METROPOLE, [
    "CHRU de Nancy — H\u00f4pital de Brabois",
    "H\u00f4pital Central de Nancy",
    "Centre Alexis-Vautrin",
    "Polyclinique de Gentilly",
    "Centre de Dialyse de Nancy",
  ]),
  tmCity("besancon", PRICING_MEDICAL_METROPOLE, [
    "CHU de Besan\u00e7on — H\u00f4pital Jean-Minjoz",
    "H\u00f4pital Saint-Jacques",
    "Clinique Saint-Vincent",
    "Centre de Dialyse de Besan\u00e7on",
    "Polyclinique de Franche-Comt\u00e9",
  ]),

  // Normandie
  tmCity("le-havre", PRICING_MEDICAL_METROPOLE, [
    "Groupe Hospitalier du Havre",
    "H\u00f4pital Jacques-Monod",
    "Clinique des Ormeaux",
    "Centre Henri-Becquerel (Rouen)",
    "Centre de Dialyse du Havre",
  ]),
  tmCity("rouen", PRICING_MEDICAL_METROPOLE, [
    "CHU de Rouen — H\u00f4pital Charles-Nicolle",
    "H\u00f4pital de Bois-Guillaume",
    "Centre Henri-Becquerel",
    "Clinique de l'Europe",
    "Clinique Mathilde",
  ]),
  tmCity("caen", PRICING_MEDICAL_METROPOLE, [
    "CHU de Caen-Normandie",
    "Centre Fran\u00e7ois-Baclesse",
    "Clinique Saint-Martin",
    "Polyclinique du Parc",
    "Centre de Dialyse de Caen",
  ]),

  // Centre-Val de Loire
  tmCity("tours", PRICING_MEDICAL_METROPOLE, [
    "CHU de Tours — H\u00f4pital Bretonneau",
    "H\u00f4pital Trousseau",
    "Clinique de l'Alliance",
    "Clinique Vinci",
    "Centre de Dialyse de Tours",
  ]),
  tmCity("orleans", PRICING_MEDICAL_METROPOLE, [
    "CHR d'Orl\u00e9ans — H\u00f4pital de la Source",
    "H\u00f4pital Porte-Madeleine",
    "Clinique de l'Archette",
    "Polyclinique des Longues-Allées",
    "Centre de Dialyse d'Orl\u00e9ans",
  ]),

  // Bourgogne-Franche-Comté
  tmCity("dijon", PRICING_MEDICAL_METROPOLE, [
    "CHU Dijon Bourgogne — H\u00f4pital Fran\u00e7ois-Mitterrand",
    "Centre Georges-Fran\u00e7ois Leclerc",
    "Clinique de Fontaine",
    "Polyclinique du Parc",
    "Centre de Dialyse de Dijon",
  ]),
];

// ─── Helpers ────────────────────────────────────────────────

export function getTmCityBySlug(slug: string): TaxiMedicalCityData | undefined {
  return taxiMedicalCities.find((c) => c.citySlug === slug);
}

export function getTmCitySlugs(): string[] {
  return taxiMedicalCities.map((c) => c.citySlug);
}
