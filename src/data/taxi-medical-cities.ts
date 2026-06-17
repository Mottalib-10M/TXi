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
    berline: "25-35 €",
    van_pmr: "35-50 €",
  },
  {
    type: "aller-retour",
    labelFr: "Aller-retour (attente incluse)",
    labelEn: "Round trip (waiting included)",
    berline: "45-65 €",
    van_pmr: "65-90 €",
  },
  {
    type: "serie-5",
    labelFr: "Forfait 5 aller-retour",
    labelEn: "5 round-trip package",
    berline: "200-280 €",
    van_pmr: "290-400 €",
  },
  {
    type: "serie-10",
    labelFr: "Forfait 10 aller-retour",
    labelEn: "10 round-trip package",
    berline: "380-520 €",
    van_pmr: "540-750 €",
  },
];

/** IDF suburbs (outer 92, 93, 94, 77, 78, 91, 95) */
const PRICING_MEDICAL_IDF: TaxiMedicalPricingTier[] = [
  {
    type: "aller-simple",
    labelFr: "Aller simple",
    labelEn: "One way",
    berline: "30-45 €",
    van_pmr: "40-60 €",
  },
  {
    type: "aller-retour",
    labelFr: "Aller-retour (attente incluse)",
    labelEn: "Round trip (waiting included)",
    berline: "55-80 €",
    van_pmr: "75-110 €",
  },
  {
    type: "serie-5",
    labelFr: "Forfait 5 aller-retour",
    labelEn: "5 round-trip package",
    berline: "240-350 €",
    van_pmr: "340-490 €",
  },
  {
    type: "serie-10",
    labelFr: "Forfait 10 aller-retour",
    labelEn: "10 round-trip package",
    berline: "450-650 €",
    van_pmr: "640-920 €",
  },
];

/** Grandes métropoles hors IDF */
const PRICING_MEDICAL_METROPOLE: TaxiMedicalPricingTier[] = [
  {
    type: "aller-simple",
    labelFr: "Aller simple",
    labelEn: "One way",
    berline: "20-35 €",
    van_pmr: "30-50 €",
  },
  {
    type: "aller-retour",
    labelFr: "Aller-retour (attente incluse)",
    labelEn: "Round trip (waiting included)",
    berline: "35-60 €",
    van_pmr: "55-85 €",
  },
  {
    type: "serie-5",
    labelFr: "Forfait 5 aller-retour",
    labelEn: "5 round-trip package",
    berline: "160-260 €",
    van_pmr: "250-380 €",
  },
  {
    type: "serie-10",
    labelFr: "Forfait 10 aller-retour",
    labelEn: "10 round-trip package",
    berline: "300-480 €",
    van_pmr: "460-700 €",
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
    "Hôpital Pitié-Salpêtrière",
    "Hôpital Necker-Enfants Malades",
    "Hôpital Cochin",
    "Hôpital Européen Georges-Pompidou",
    "Hôpital Saint-Louis",
    "Hôpital Lariboisière",
    "Hôpital Tenon",
    "Hôpital Robert-Debré",
    "Hôpital Bichat-Claude-Bernard",
    "Institut Curie",
  ]),

  // ── 95 – Val-d'Oise ──────────────────────────────────────
  tmCity("argenteuil", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier Victor-Dupouy",
    "Hôpital de Pontoise",
    "Centre Hospitalier de Gonesse",
    "Clinique Claude-Bernard",
    "Hôpital Beaujon (Clichy)",
  ]),

  // ── 78 – Yvelines ──────────────────────────────────────────
  tmCity("versailles", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Versailles",
    "Hôpital André-Mignot",
    "Hôpital de Poissy-Saint-Germain",
    "Clinique de la Porte Verte",
    "Hôpital Privé de Versailles",
    "Centre de Rééducation de Bois-Larris",
  ]),

  // ── 77 south – far ────────────────────────────────────────
  tmCity("fontainebleau", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Fontainebleau",
    "Pôle Santé Sud 77",
    "Centre Hospitalier de Nemours",
    "CH de Montereau-Fault-Yonne",
    "Clinique Saint-Jean-l'Évangeliste",
  ]),
  tmCity("avon", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Fontainebleau",
    "Pôle Santé Sud 77",
    "Centre Hospitalier de Nemours",
    "Clinique Saint-Jean-l'Évangeliste",
    "Centre de Dialyse Avon",
  ]),
  tmCity("moret-sur-loing", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Fontainebleau",
    "CH de Montereau-Fault-Yonne",
    "Pôle Santé Sud 77",
    "Centre Hospitalier de Nemours",
    "Centre Médical Moret",
  ]),
  tmCity("barbizon", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Fontainebleau",
    "Centre Hospitalier de Melun",
    "Pôle Santé Sud 77",
    "Centre Hospitalier Sud Francilien",
    "Clinique Saint-Jean-l'Évangeliste",
  ]),
  tmCity("montereau-fault-yonne", PRICING_MEDICAL_IDF, [
    "CH de Montereau-Fault-Yonne",
    "Centre Hospitalier de Fontainebleau",
    "Centre Hospitalier de Nemours",
    "Pôle Santé Sud 77",
    "CH de Sens",
  ]),

  // ── 77 west / north – medium ────────────────────────────────
  tmCity("chelles", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Chelles",
    "Hôpital de Lagny-sur-Marne",
    "Hôpital de Meaux",
    "Hôpital Robert-Debré (Paris)",
    "Centre Hospitalier de Jossigny",
  ]),
  tmCity("villeparisis", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Meaux",
    "Hôpital de Lagny-sur-Marne",
    "Centre Hospitalier de Jossigny",
    "Hôpital Robert-Debré (Paris)",
    "Centre Hospitalier de Montfermeil",
  ]),
  tmCity("mitry-mory", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Meaux",
    "Hôpital Robert-Ballanger (Aulnay)",
    "Centre Hospitalier de Montfermeil",
    "Hôpital Jean-Verdier (Bondy)",
    "Centre Hospitalier de Gonesse",
  ]),
  tmCity("claye-souilly", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Meaux",
    "Centre Hospitalier de Jossigny",
    "Hôpital Robert-Ballanger (Aulnay)",
    "Centre Hospitalier de Montfermeil",
    "Hôpital de Lagny-sur-Marne",
  ]),
  tmCity("champs-sur-marne", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Jossigny",
    "Hôpital de Lagny-sur-Marne",
    "Centre Hospitalier de Chelles",
    "Hôpital Henri-Mondor (Créteil)",
    "CHI de Créteil",
  ]),
  tmCity("torcy", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Jossigny",
    "Hôpital de Lagny-sur-Marne",
    "Centre Hospitalier de Chelles",
    "Hôpital Henri-Mondor (Créteil)",
    "Centre de Rééducation de Bussy",
  ]),
  tmCity("noisiel", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Jossigny",
    "Hôpital de Lagny-sur-Marne",
    "Centre Hospitalier de Chelles",
    "Hôpital Henri-Mondor (Créteil)",
    "Centre de Dialyse Marne-la-Vallée",
  ]),
  tmCity("lognes", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Jossigny",
    "Hôpital de Lagny-sur-Marne",
    "Centre Hospitalier de Chelles",
    "Hôpital Henri-Mondor (Créteil)",
    "Centre Médical de Lognes",
  ]),
  tmCity("bussy-saint-georges", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Jossigny",
    "Hôpital de Lagny-sur-Marne",
    "Centre Hospitalier de Meaux",
    "Hôpital Henri-Mondor (Créteil)",
    "Centre Médical Val d'Europe",
  ]),
  tmCity("lagny-sur-marne", PRICING_MEDICAL_IDF, [
    "Hôpital de Lagny-sur-Marne",
    "Centre Hospitalier de Jossigny",
    "Centre Hospitalier de Meaux",
    "Centre Hospitalier de Chelles",
    "Hôpital Henri-Mondor (Créteil)",
  ]),
  tmCity("pontault-combault", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Jossigny",
    "Hôpital Henri-Mondor (Créteil)",
    "Centre Hospitalier Intercommunal de Villeneuve-Saint-Georges",
    "Centre Hospitalier de Brie-Comte-Robert",
    "Hôpital de Lagny-sur-Marne",
  ]),
  tmCity("roissy-en-brie", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Jossigny",
    "Hôpital Henri-Mondor (Créteil)",
    "Hôpital de Lagny-sur-Marne",
    "Centre Hospitalier de Chelles",
    "Centre de Dialyse Roissy-en-Brie",
  ]),
  tmCity("ozoir-la-ferriere", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Jossigny",
    "Hôpital Henri-Mondor (Créteil)",
    "Hôpital de Lagny-sur-Marne",
    "Centre Hospitalier de Brie-Comte-Robert",
    "Centre Médical d'Ozoir",
  ]),
  tmCity("vaires-sur-marne", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Chelles",
    "Hôpital de Lagny-sur-Marne",
    "Centre Hospitalier de Jossigny",
    "Hôpital Robert-Debré (Paris)",
    "Centre de Soins Vaires",
  ]),
  tmCity("dammarie-les-lys", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Melun",
    "Pôle Santé Sud 77",
    "Centre Hospitalier de Fontainebleau",
    "Centre Hospitalier Sud Francilien",
    "Centre de Dialyse Melun",
  ]),
  tmCity("le-mee-sur-seine", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Melun",
    "Pôle Santé Sud 77",
    "Centre Hospitalier de Fontainebleau",
    "Centre Hospitalier Sud Francilien",
    "Clinique de l'Ermitage",
  ]),
  tmCity("combs-la-ville", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier Sud Francilien",
    "Centre Hospitalier de Melun",
    "Hôpital Henri-Mondor (Créteil)",
    "CHI de Villeneuve-Saint-Georges",
    "Centre Médical de Sénart",
  ]),
  tmCity("savigny-le-temple", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier Sud Francilien",
    "Centre Hospitalier de Melun",
    "Pôle Santé Sud 77",
    "CHI de Villeneuve-Saint-Georges",
    "Centre de Dialyse Sénart",
  ]),
  tmCity("brie-comte-robert", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Brie-Comte-Robert",
    "Centre Hospitalier Sud Francilien",
    "Hôpital Henri-Mondor (Créteil)",
    "Centre Hospitalier de Melun",
    "CHI de Villeneuve-Saint-Georges",
  ]),
  tmCity("coulommiers", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Coulommiers",
    "Centre Hospitalier de Meaux",
    "Hôpital de Lagny-sur-Marne",
    "Centre Hospitalier de Jossigny",
    "Centre Médical de Coulommiers",
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
    "Pôle Santé Sud 77",
    "CH de Montereau-Fault-Yonne",
    "Centre de Dialyse Nemours",
  ]),

  // ── 92 – Hauts-de-Seine ──────────────────────────────────
  tmCity("nanterre", PRICING_MEDICAL_PARIS, [
    "Hôpital Max-Fourestier (Nanterre)",
    "Hôpital Raymond-Poincaré (Garches)",
    "Hôpital Ambroise-Paré (Boulogne)",
    "Hôpital Beaujon (Clichy)",
    "Hôpital Foch (Suresnes)",
  ]),
  tmCity("courbevoie", PRICING_MEDICAL_PARIS, [
    "Hôpital Beaujon (Clichy)",
    "Hôpital Ambroise-Paré (Boulogne)",
    "Hôpital Foch (Suresnes)",
    "Hôpital Européen Georges-Pompidou",
    "Hôpital Necker-Enfants Malades",
  ]),
  tmCity("levallois-perret", PRICING_MEDICAL_PARIS, [
    "Hôpital Beaujon (Clichy)",
    "Hôpital Bichat-Claude-Bernard",
    "Hôpital Ambroise-Paré (Boulogne)",
    "Hôpital Européen Georges-Pompidou",
    "Hôpital Lariboisière",
  ]),
  tmCity("neuilly-sur-seine", PRICING_MEDICAL_PARIS, [
    "Hôpital Américain de Paris",
    "Hôpital Beaujon (Clichy)",
    "Hôpital Ambroise-Paré (Boulogne)",
    "Hôpital Européen Georges-Pompidou",
    "Hôpital Necker-Enfants Malades",
  ]),
  tmCity("colombes", PRICING_MEDICAL_IDF, [
    "Hôpital Louis-Mourier (Colombes)",
    "Hôpital Beaujon (Clichy)",
    "Hôpital Max-Fourestier (Nanterre)",
    "Hôpital Ambroise-Paré (Boulogne)",
    "Centre Hospitalier de Pontoise",
  ]),
  tmCity("rueil-malmaison", PRICING_MEDICAL_IDF, [
    "Hôpital Stell (Rueil-Malmaison)",
    "Hôpital Foch (Suresnes)",
    "Hôpital Ambroise-Paré (Boulogne)",
    "Hôpital Raymond-Poincaré (Garches)",
    "Hôpital Max-Fourestier (Nanterre)",
  ]),
  tmCity("asnieres-sur-seine", PRICING_MEDICAL_PARIS, [
    "Hôpital Beaujon (Clichy)",
    "Hôpital Louis-Mourier (Colombes)",
    "Hôpital Bichat-Claude-Bernard",
    "Hôpital Lariboisière",
    "Hôpital Saint-Louis",
  ]),
  tmCity("boulogne-billancourt", PRICING_MEDICAL_PARIS, [
    "Hôpital Ambroise-Paré (Boulogne)",
    "Hôpital Européen Georges-Pompidou",
    "Hôpital Necker-Enfants Malades",
    "Hôpital Cochin",
    "Institut Mutualiste Montsouris",
  ]),
  tmCity("issy-les-moulineaux", PRICING_MEDICAL_PARIS, [
    "Hôpital Corentin-Celton (Issy)",
    "Hôpital Européen Georges-Pompidou",
    "Hôpital Necker-Enfants Malades",
    "Hôpital Cochin",
    "Hôpital Antoine-Béclère (Clamart)",
  ]),
  tmCity("meudon", PRICING_MEDICAL_IDF, [
    "Hôpital Antoine-Béclère (Clamart)",
    "Hôpital Ambroise-Paré (Boulogne)",
    "Hôpital Percy (Clamart)",
    "Hôpital Européen Georges-Pompidou",
    "Hôpital Corentin-Celton (Issy)",
  ]),
  tmCity("antony", PRICING_MEDICAL_IDF, [
    "Hôpital Privé d'Antony",
    "Hôpital Antoine-Béclère (Clamart)",
    "Hôpital Bicêtre (Le Kremlin-Bicêtre)",
    "Institut Gustave-Roussy (Villejuif)",
    "Hôpital Paul-Brousse (Villejuif)",
  ]),
  tmCity("clichy", PRICING_MEDICAL_PARIS, [
    "Hôpital Beaujon (Clichy)",
    "Hôpital Bichat-Claude-Bernard",
    "Hôpital Louis-Mourier (Colombes)",
    "Hôpital Lariboisière",
    "Hôpital Saint-Louis",
  ]),
  tmCity("gennevilliers", PRICING_MEDICAL_IDF, [
    "Hôpital Louis-Mourier (Colombes)",
    "Hôpital Beaujon (Clichy)",
    "Hôpital Max-Fourestier (Nanterre)",
    "Hôpital Bichat-Claude-Bernard",
    "Centre Hospitalier de Saint-Denis",
  ]),
  tmCity("villeneuve-la-garenne", PRICING_MEDICAL_IDF, [
    "Hôpital Beaujon (Clichy)",
    "Hôpital Louis-Mourier (Colombes)",
    "Centre Hospitalier de Saint-Denis",
    "Hôpital Bichat-Claude-Bernard",
    "Hôpital Max-Fourestier (Nanterre)",
  ]),
  tmCity("puteaux", PRICING_MEDICAL_PARIS, [
    "Hôpital Foch (Suresnes)",
    "Hôpital Ambroise-Paré (Boulogne)",
    "Hôpital Beaujon (Clichy)",
    "Hôpital Européen Georges-Pompidou",
    "Hôpital Max-Fourestier (Nanterre)",
  ]),
  tmCity("la-garenne-colombes", PRICING_MEDICAL_PARIS, [
    "Hôpital Louis-Mourier (Colombes)",
    "Hôpital Beaujon (Clichy)",
    "Hôpital Ambroise-Paré (Boulogne)",
    "Hôpital Foch (Suresnes)",
    "Hôpital Max-Fourestier (Nanterre)",
  ]),
  tmCity("suresnes", PRICING_MEDICAL_PARIS, [
    "Hôpital Foch (Suresnes)",
    "Hôpital Ambroise-Paré (Boulogne)",
    "Hôpital Raymond-Poincaré (Garches)",
    "Hôpital Européen Georges-Pompidou",
    "Hôpital Max-Fourestier (Nanterre)",
  ]),
  tmCity("saint-cloud", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier des Quatre Villes (Saint-Cloud)",
    "Hôpital Foch (Suresnes)",
    "Hôpital Raymond-Poincaré (Garches)",
    "Hôpital Ambroise-Paré (Boulogne)",
    "Hôpital Européen Georges-Pompidou",
  ]),
  tmCity("garches", PRICING_MEDICAL_IDF, [
    "Hôpital Raymond-Poincaré (Garches)",
    "Hôpital Foch (Suresnes)",
    "Hôpital Ambroise-Paré (Boulogne)",
    "Centre Hospitalier de Versailles",
    "Hôpital Européen Georges-Pompidou",
  ]),
  tmCity("chaville", PRICING_MEDICAL_IDF, [
    "Hôpital Raymond-Poincaré (Garches)",
    "Hôpital Antoine-Béclère (Clamart)",
    "Hôpital Foch (Suresnes)",
    "Centre Hospitalier de Versailles",
    "Hôpital Ambroise-Paré (Boulogne)",
  ]),
  tmCity("sevres", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier des Quatre Villes",
    "Hôpital Antoine-Béclère (Clamart)",
    "Hôpital Raymond-Poincaré (Garches)",
    "Hôpital Foch (Suresnes)",
    "Hôpital Ambroise-Paré (Boulogne)",
  ]),
  tmCity("ville-d-avray", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier des Quatre Villes (Saint-Cloud)",
    "Hôpital Raymond-Poincaré (Garches)",
    "Hôpital Foch (Suresnes)",
    "Centre Hospitalier de Versailles",
    "Hôpital Antoine-Béclère (Clamart)",
  ]),
  tmCity("montrouge", PRICING_MEDICAL_PARIS, [
    "Hôpital Cochin",
    "Institut Mutualiste Montsouris",
    "Hôpital Bicêtre (Le Kremlin-Bicêtre)",
    "Hôpital Antoine-Béclère (Clamart)",
    "Institut Gustave-Roussy (Villejuif)",
  ]),
  tmCity("malakoff", PRICING_MEDICAL_PARIS, [
    "Hôpital Cochin",
    "Institut Mutualiste Montsouris",
    "Hôpital Antoine-Béclère (Clamart)",
    "Hôpital Bicêtre (Le Kremlin-Bicêtre)",
    "Hôpital Necker-Enfants Malades",
  ]),
  tmCity("vanves", PRICING_MEDICAL_PARIS, [
    "Hôpital Corentin-Celton (Issy)",
    "Hôpital Cochin",
    "Hôpital Antoine-Béclère (Clamart)",
    "Hôpital Européen Georges-Pompidou",
    "Hôpital Necker-Enfants Malades",
  ]),
  tmCity("chatillon", PRICING_MEDICAL_PARIS, [
    "Hôpital Antoine-Béclère (Clamart)",
    "Hôpital Cochin",
    "Hôpital Percy (Clamart)",
    "Institut Mutualiste Montsouris",
    "Hôpital Bicêtre (Le Kremlin-Bicêtre)",
  ]),
  tmCity("clamart", PRICING_MEDICAL_IDF, [
    "Hôpital Antoine-Béclère (Clamart)",
    "Hôpital Percy (Clamart)",
    "Hôpital Cochin",
    "Institut Mutualiste Montsouris",
    "Hôpital Bicêtre (Le Kremlin-Bicêtre)",
  ]),
  tmCity("bagneux", PRICING_MEDICAL_IDF, [
    "Hôpital Antoine-Béclère (Clamart)",
    "Hôpital Bicêtre (Le Kremlin-Bicêtre)",
    "Institut Gustave-Roussy (Villejuif)",
    "Hôpital Cochin",
    "Institut Mutualiste Montsouris",
  ]),
  tmCity("fontenay-aux-roses", PRICING_MEDICAL_IDF, [
    "Hôpital Antoine-Béclère (Clamart)",
    "Hôpital Bicêtre (Le Kremlin-Bicêtre)",
    "Institut Gustave-Roussy (Villejuif)",
    "Hôpital Percy (Clamart)",
    "Hôpital Cochin",
  ]),
  tmCity("sceaux", PRICING_MEDICAL_IDF, [
    "Hôpital Privé d'Antony",
    "Hôpital Antoine-Béclère (Clamart)",
    "Hôpital Bicêtre (Le Kremlin-Bicêtre)",
    "Institut Gustave-Roussy (Villejuif)",
    "Hôpital Paul-Brousse (Villejuif)",
  ]),
  tmCity("bourg-la-reine", PRICING_MEDICAL_IDF, [
    "Hôpital Privé d'Antony",
    "Hôpital Antoine-Béclère (Clamart)",
    "Hôpital Bicêtre (Le Kremlin-Bicêtre)",
    "Institut Gustave-Roussy (Villejuif)",
    "Hôpital Cochin",
  ]),
  tmCity("le-plessis-robinson", PRICING_MEDICAL_IDF, [
    "Hôpital Antoine-Béclère (Clamart)",
    "Hôpital Percy (Clamart)",
    "Hôpital Bicêtre (Le Kremlin-Bicêtre)",
    "Institut Gustave-Roussy (Villejuif)",
    "Hôpital Privé d'Antony",
  ]),
  tmCity("chatenay-malabry", PRICING_MEDICAL_IDF, [
    "Hôpital Antoine-Béclère (Clamart)",
    "Hôpital Privé d'Antony",
    "Hôpital Bicêtre (Le Kremlin-Bicêtre)",
    "Institut Gustave-Roussy (Villejuif)",
    "Hôpital Percy (Clamart)",
  ]),

  // ── 93 – Seine-Saint-Denis ──────────────────────────────────
  tmCity("saint-denis", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Saint-Denis",
    "Hôpital Delafontaine",
    "Hôpital Casanova",
    "Hôpital Avicenne (Bobigny)",
    "Hôpital Bichat-Claude-Bernard",
  ]),
  tmCity("montreuil", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier Intercommunal de Montreuil",
    "Hôpital Avicenne (Bobigny)",
    "Hôpital Saint-Antoine (Paris)",
    "Hôpital Tenon (Paris)",
    "Hôpital Henri-Mondor (Créteil)",
  ]),
  tmCity("aubervilliers", PRICING_MEDICAL_IDF, [
    "Hôpital Avicenne (Bobigny)",
    "Centre Hospitalier de Saint-Denis",
    "Hôpital Bichat-Claude-Bernard",
    "Hôpital Lariboisière",
    "Hôpital Robert-Debré (Paris)",
  ]),
  tmCity("aulnay-sous-bois", PRICING_MEDICAL_IDF, [
    "Hôpital Robert-Ballanger (Aulnay)",
    "Hôpital Avicenne (Bobigny)",
    "Hôpital Jean-Verdier (Bondy)",
    "Centre Hospitalier de Montfermeil",
    "Centre Hospitalier de Gonesse",
  ]),
  tmCity("drancy", PRICING_MEDICAL_IDF, [
    "Hôpital Avicenne (Bobigny)",
    "Hôpital Jean-Verdier (Bondy)",
    "Hôpital Robert-Ballanger (Aulnay)",
    "Centre Hospitalier de Saint-Denis",
    "Hôpital Bichat-Claude-Bernard",
  ]),
  tmCity("noisy-le-grand", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Noisy-le-Grand",
    "Hôpital Henri-Mondor (Créteil)",
    "Centre Hospitalier de Jossigny",
    "Hôpital Avicenne (Bobigny)",
    "Hôpital Saint-Camille (Bry-sur-Marne)",
  ]),
  tmCity("le-blanc-mesnil", PRICING_MEDICAL_IDF, [
    "Hôpital Avicenne (Bobigny)",
    "Hôpital Robert-Ballanger (Aulnay)",
    "Hôpital Jean-Verdier (Bondy)",
    "Centre Hospitalier de Gonesse",
    "Centre Hospitalier de Saint-Denis",
  ]),
  tmCity("pantin", PRICING_MEDICAL_IDF, [
    "Hôpital Avicenne (Bobigny)",
    "Hôpital Jean-Verdier (Bondy)",
    "Hôpital Robert-Debré (Paris)",
    "Hôpital Saint-Louis (Paris)",
    "Hôpital Lariboisière",
  ]),
  tmCity("epinay-sur-seine", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Saint-Denis",
    "Hôpital Avicenne (Bobigny)",
    "Hôpital Beaujon (Clichy)",
    "Centre Hospitalier de Gonesse",
    "Hôpital Bichat-Claude-Bernard",
  ]),
  tmCity("bobigny", PRICING_MEDICAL_IDF, [
    "Hôpital Avicenne (Bobigny)",
    "Hôpital Jean-Verdier (Bondy)",
    "Hôpital Robert-Ballanger (Aulnay)",
    "Centre Hospitalier de Saint-Denis",
    "Hôpital Robert-Debré (Paris)",
  ]),
  tmCity("bondy", PRICING_MEDICAL_IDF, [
    "Hôpital Jean-Verdier (Bondy)",
    "Hôpital Avicenne (Bobigny)",
    "Hôpital Robert-Ballanger (Aulnay)",
    "Hôpital Robert-Debré (Paris)",
    "Centre Hospitalier de Montfermeil",
  ]),
  tmCity("sevran", PRICING_MEDICAL_IDF, [
    "Hôpital Robert-Ballanger (Aulnay)",
    "Hôpital Jean-Verdier (Bondy)",
    "Centre Hospitalier de Montfermeil",
    "Centre Hospitalier de Gonesse",
    "Hôpital Avicenne (Bobigny)",
  ]),
  tmCity("saint-ouen-sur-seine", PRICING_MEDICAL_IDF, [
    "Hôpital Bichat-Claude-Bernard",
    "Centre Hospitalier de Saint-Denis",
    "Hôpital Beaujon (Clichy)",
    "Hôpital Lariboisière",
    "Hôpital Robert-Debré (Paris)",
  ]),

  // ── 94 – Val-de-Marne ──────────────────────────────────────
  tmCity("vitry-sur-seine", PRICING_MEDICAL_IDF, [
    "Hôpital Paul-Brousse (Villejuif)",
    "Institut Gustave-Roussy (Villejuif)",
    "Hôpital Bicêtre (Le Kremlin-Bicêtre)",
    "Hôpital Pitié-Salpêtrière",
    "CHI de Villeneuve-Saint-Georges",
  ]),
  tmCity("creteil", PRICING_MEDICAL_IDF, [
    "Hôpital Henri-Mondor (Créteil)",
    "CHI de Créteil",
    "Hôpital Albert-Chenevier",
    "Hôpital Bicêtre (Le Kremlin-Bicêtre)",
    "Institut Gustave-Roussy (Villejuif)",
  ]),
  tmCity("champigny-sur-marne", PRICING_MEDICAL_IDF, [
    "Hôpital Henri-Mondor (Créteil)",
    "CHI de Créteil",
    "Hôpital Saint-Camille (Bry-sur-Marne)",
    "Hôpital Pitié-Salpêtrière",
    "Hôpital Begin (Saint-Mandé)",
  ]),
  tmCity("saint-maur-des-fosses", PRICING_MEDICAL_IDF, [
    "Hôpital Henri-Mondor (Créteil)",
    "CHI de Créteil",
    "Hôpital Saint-Camille (Bry-sur-Marne)",
    "Hôpital Pitié-Salpêtrière",
    "Hôpital Begin (Saint-Mandé)",
  ]),
  tmCity("ivry-sur-seine", PRICING_MEDICAL_IDF, [
    "Hôpital Charles-Foix (Ivry)",
    "Hôpital Pitié-Salpêtrière",
    "Hôpital Paul-Brousse (Villejuif)",
    "Hôpital Bicêtre (Le Kremlin-Bicêtre)",
    "Institut Gustave-Roussy (Villejuif)",
  ]),
  tmCity("maisons-alfort", PRICING_MEDICAL_IDF, [
    "Hôpital Henri-Mondor (Créteil)",
    "CHI de Créteil",
    "Hôpital Pitié-Salpêtrière",
    "Hôpital Begin (Saint-Mandé)",
    "Hôpital Bicêtre (Le Kremlin-Bicêtre)",
  ]),
  tmCity("villejuif", PRICING_MEDICAL_IDF, [
    "Institut Gustave-Roussy (Villejuif)",
    "Hôpital Paul-Brousse (Villejuif)",
    "Hôpital Bicêtre (Le Kremlin-Bicêtre)",
    "Hôpital Pitié-Salpêtrière",
    "Hôpital Cochin",
  ]),
  tmCity("fontenay-sous-bois", PRICING_MEDICAL_IDF, [
    "Hôpital Begin (Saint-Mandé)",
    "Hôpital Henri-Mondor (Créteil)",
    "Hôpital Saint-Antoine (Paris)",
    "Hôpital Rothschild (Paris)",
    "Hôpital Avicenne (Bobigny)",
  ]),
  tmCity("vincennes", PRICING_MEDICAL_IDF, [
    "Hôpital Begin (Saint-Mandé)",
    "Hôpital Saint-Antoine (Paris)",
    "Hôpital Rothschild (Paris)",
    "Hôpital Henri-Mondor (Créteil)",
    "Hôpital Diaconesses Croix Saint-Simon",
  ]),

  // ── 91 – Essonne ──────────────────────────────────────────
  tmCity("evry-courcouronnes", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier Sud Francilien",
    "Hôpital Privé d'Évry",
    "Hôpital Bicêtre (Le Kremlin-Bicêtre)",
    "Institut Gustave-Roussy (Villejuif)",
    "Centre Hospitalier de Melun",
  ]),
  tmCity("corbeil-essonnes", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier Sud Francilien",
    "Hôpital Privé d'Évry",
    "Centre Hospitalier de Melun",
    "Hôpital Bicêtre (Le Kremlin-Bicêtre)",
    "Institut Gustave-Roussy (Villejuif)",
  ]),
  tmCity("massy", PRICING_MEDICAL_IDF, [
    "Hôpital Privé Jacques-Cartier (Massy)",
    "Hôpital Antoine-Béclère (Clamart)",
    "Hôpital Bicêtre (Le Kremlin-Bicêtre)",
    "Centre Hospitalier d'Orsay",
    "Institut Gustave-Roussy (Villejuif)",
  ]),

  // ── 95 – Val-d'Oise ──────────────────────────────────────
  tmCity("cergy", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Pontoise",
    "Hôpital René-Dubos",
    "Centre Hospitalier de Gonesse",
    "Hôpital Beaujon (Clichy)",
    "Centre Hospitalier de Poissy-Saint-Germain",
  ]),
  tmCity("sarcelles", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Gonesse",
    "Hôpital Delafontaine (Saint-Denis)",
    "Centre Hospitalier de Pontoise",
    "Hôpital Avicenne (Bobigny)",
    "Hôpital Bichat-Claude-Bernard",
  ]),

  // ── 78 – Yvelines ──────────────────────────────────────────
  tmCity("sartrouville", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Poissy-Saint-Germain",
    "Centre Hospitalier de Versailles",
    "Hôpital Max-Fourestier (Nanterre)",
    "Hôpital Beaujon (Clichy)",
    "Centre Hospitalier de Pontoise",
  ]),

  // ── 77 – Seine-et-Marne ────────────────────────────────────
  tmCity("meaux", PRICING_MEDICAL_IDF, [
    "Centre Hospitalier de Meaux",
    "Hôpital de Lagny-sur-Marne",
    "Centre Hospitalier de Jossigny",
    "Centre Hospitalier de Coulommiers",
    "Hôpital Robert-Debré (Paris)",
  ]),

  // ── Grandes métropoles ──────────────────────────────────────

  // Auvergne-Rhône-Alpes
  tmCity("lyon", PRICING_MEDICAL_METROPOLE, [
    "Hôpital Edouard-Herriot",
    "Hôpital de la Croix-Rousse",
    "Centre Hospitalier Lyon Sud",
    "Hôpital Femme Mère Enfant",
    "Centre Léon-Bérard",
    "Hôpital Cardio-Vasculaire Louis-Pradel",
    "Hôpital Neurologique Pierre-Wertheimer",
  ]),
  tmCity("saint-etienne", PRICING_MEDICAL_METROPOLE, [
    "CHU de Saint-Étienne — Hôpital Nord",
    "Hôpital de Bellevue",
    "Clinique Mutualiste de Saint-Étienne",
    "Hôpital Privé de la Loire",
    "Centre de Cancérologie Lucien-Neuwirth",
  ]),
  tmCity("grenoble", PRICING_MEDICAL_METROPOLE, [
    "CHU Grenoble Alpes",
    "Hôpital Albert-Michallon",
    "Hôpital Couple-Enfant",
    "Clinique Mutualiste de Grenoble",
    "Groupe Hospitalier Mutualiste de Grenoble",
    "Centre de Cancérologie de l'Isère",
  ]),
  tmCity("villeurbanne", PRICING_MEDICAL_METROPOLE, [
    "Hôpital Edouard-Herriot (Lyon)",
    "Hôpital de la Croix-Rousse (Lyon)",
    "Clinique du Tonkin",
    "Médipole Lyon-Villeurbanne",
    "Centre Léon-Bérard (Lyon)",
  ]),
  tmCity("clermont-ferrand", PRICING_MEDICAL_METROPOLE, [
    "CHU de Clermont-Ferrand — Hôpital Gabriel-Montpied",
    "Hôpital Henri-Mondor",
    "Centre Jean-Perrin",
    "Pôle Santé République",
    "Clinique la Châtaigneraie",
  ]),
  tmCity("annecy", PRICING_MEDICAL_METROPOLE, [
    "Centre Hospitalier Annecy-Genevois",
    "Hôpital de la Tour",
    "Clinique Générale d'Annecy",
    "Centre de Dialyse d'Annecy",
    "Centre de Rééducation de Marcy-l'Étoile",
  ]),
  tmCity("valence", PRICING_MEDICAL_METROPOLE, [
    "Centre Hospitalier de Valence",
    "Clinique Générale de Valence",
    "Clinique Kennedy",
    "Centre de Dialyse de Valence",
    "Maison de Santé de Valence",
  ]),
  tmCity("chambery", PRICING_MEDICAL_METROPOLE, [
    "Centre Hospitalier Métropole Savoie",
    "Hôpital de Chambéry",
    "Clinique Médicale de Chambéry",
    "Centre de Dialyse de Chambéry",
    "Centre de Rééducation de l'Arbière",
  ]),
  tmCity("venissieux", PRICING_MEDICAL_METROPOLE, [
    "Centre Hospitalier Lyon Sud",
    "Hôpital Edouard-Herriot (Lyon)",
    "Centre Léon-Bérard (Lyon)",
    "Hôpital Femme Mère Enfant (Lyon)",
    "Clinique du Vinatier",
  ]),
  tmCity("vaulx-en-velin", PRICING_MEDICAL_METROPOLE, [
    "Hôpital Edouard-Herriot (Lyon)",
    "Hôpital de la Croix-Rousse (Lyon)",
    "Centre Léon-Bérard (Lyon)",
    "Hôpital Neurologique Pierre-Wertheimer",
    "Clinique du Tonkin (Villeurbanne)",
  ]),

  // Provence-Alpes-Côte d'Azur
  tmCity("marseille", PRICING_MEDICAL_METROPOLE, [
    "Hôpital de la Timone",
    "Hôpital Nord de Marseille",
    "Hôpital de la Conception",
    "Hôpital Sainte-Marguerite",
    "Institut Paoli-Calmettes",
    "Hôpital Salvator",
    "Clinique Bouchard",
  ]),
  tmCity("nice", PRICING_MEDICAL_METROPOLE, [
    "CHU de Nice — Hôpital Pasteur 2",
    "Hôpital l'Archet 2",
    "Hôpital de Cimiez",
    "Centre Antoine-Lacassagne",
    "Clinique Saint-George",
    "Hôpital Lenval",
  ]),
  tmCity("toulon", PRICING_MEDICAL_METROPOLE, [
    "Hôpital d'Instruction des Armées Sainte-Anne",
    "Hôpital Font-Pré",
    "Hôpital de la Seyne-sur-Mer",
    "Clinique Saint-Michel",
    "Centre de Dialyse de Toulon",
  ]),
  tmCity("aix-en-provence", PRICING_MEDICAL_METROPOLE, [
    "Centre Hospitalier du Pays d'Aix",
    "Clinique Axium",
    "Clinique de Provence",
    "Centre de Rééducation du Petit Arbois",
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
    "Hôpital de la Fontonne",
    "Clinique Saint-Jean",
    "CHU de Nice — Hôpital l'Archet",
    "Centre Antoine-Lacassagne (Nice)",
  ]),
  tmCity("cannes", PRICING_MEDICAL_METROPOLE, [
    "Centre Hospitalier de Cannes — Hôpital Simone-Veil",
    "Clinique Oxford",
    "Clinique du Palais",
    "Centre Hospitalier d'Antibes",
    "CHU de Nice — Hôpital Pasteur",
  ]),
  tmCity("la-seyne-sur-mer", PRICING_MEDICAL_METROPOLE, [
    "Hôpital de la Seyne-sur-Mer",
    "Hôpital Font-Pré (Toulon)",
    "HIA Sainte-Anne (Toulon)",
    "Clinique Saint-Michel (Toulon)",
    "Centre de Dialyse Varois",
  ]),
  tmCity("hyeres", PRICING_MEDICAL_METROPOLE, [
    "Centre Hospitalier de Hyères",
    "Hôpital Renée-Sabran",
    "Hôpital Font-Pré (Toulon)",
    "HIA Sainte-Anne (Toulon)",
    "Clinique Médipôle de Savoie",
  ]),
  tmCity("frejus", PRICING_MEDICAL_METROPOLE, [
    "Centre Hospitalier Intercommunal de Fréjus-Saint-Raphaël",
    "Hôpital Bonnet",
    "Clinique Les Musicènes",
    "Centre Hospitalier de Draguignan",
    "Centre de Dialyse Fréjus",
  ]),
  tmCity("arles", PRICING_MEDICAL_METROPOLE, [
    "Centre Hospitalier Joseph-Imbert",
    "Clinique Jeanne d'Arc",
    "Hôpital de la Timone (Marseille)",
    "Centre Hospitalier de Salon-de-Provence",
    "Centre de Dialyse d'Arles",
  ]),

  // Occitanie
  tmCity("toulouse", PRICING_MEDICAL_METROPOLE, [
    "CHU de Toulouse — Hôpital Purpan",
    "Hôpital Rangueil",
    "Hôpital des Enfants",
    "Hôpital Pierre-Paul Riquet",
    "Institut Universitaire du Cancer de Toulouse",
    "Clinique Pasteur",
    "Clinique des Cèdres",
  ]),
  tmCity("montpellier", PRICING_MEDICAL_METROPOLE, [
    "CHU de Montpellier — Hôpital Lapeyronie",
    "Hôpital Arnaud-de-Villeneuve",
    "Hôpital Saint-Éloi",
    "Hôpital Gui de Chauliac",
    "Institut du Cancer de Montpellier",
    "Clinique du Millénaire",
  ]),
  tmCity("nimes", PRICING_MEDICAL_METROPOLE, [
    "CHU de Nîmes — Hôpital Carémeau",
    "Clinique Ste-Thérèse",
    "Polyclinique du Grand Sud",
    "Centre de Dialyse de Nîmes",
    "Clinique de Valdégour",
  ]),
  tmCity("perpignan", PRICING_MEDICAL_METROPOLE, [
    "Centre Hospitalier de Perpignan",
    "Hôpital Saint-Jean",
    "Clinique Saint-Pierre",
    "Centre de Dialyse de Perpignan",
    "Clinique Mutualiste Catalane",
  ]),

  // Nouvelle-Aquitaine
  tmCity("bordeaux", PRICING_MEDICAL_METROPOLE, [
    "CHU de Bordeaux — Hôpital Pellegrin",
    "Hôpital Saint-André",
    "Hôpital Haut-Lévêque",
    "Institut Bergonié",
    "Polyclinique Bordeaux Nord",
    "Clinique Tivoli-Ducos",
  ]),
  tmCity("limoges", PRICING_MEDICAL_METROPOLE, [
    "CHU de Limoges — Hôpital Dupuytren",
    "Hôpital de la Mère et de l'Enfant",
    "Clinique Chénieux",
    "Centre de Dialyse de Limoges",
    "Clinique François-Chénieux",
  ]),

  // Pays de la Loire
  tmCity("nantes", PRICING_MEDICAL_METROPOLE, [
    "CHU de Nantes — Hôtel-Dieu",
    "Hôpital Guillaume et René Laënnec",
    "Hôpital Femme-Enfant-Adolescent",
    "Institut de Cancérologie de l'Ouest",
    "Clinique Jules-Verne",
    "Clinique Brétéché",
  ]),
  tmCity("angers", PRICING_MEDICAL_METROPOLE, [
    "CHU d'Angers",
    "Hôpital Larrey",
    "ICO — Paul Papin",
    "Clinique de l'Anjou",
    "Centre de Dialyse d'Angers",
  ]),
  tmCity("le-mans", PRICING_MEDICAL_METROPOLE, [
    "Centre Hospitalier du Mans",
    "Clinique du Tertre-Rouge",
    "Clinique Victor-Hugo",
    "Centre de Dialyse du Mans",
    "Pôle Santé Sud du Mans",
  ]),

  // Bretagne
  tmCity("rennes", PRICING_MEDICAL_METROPOLE, [
    "CHU de Rennes — Hôpital Pontchaillou",
    "Hôpital Sud de Rennes",
    "Centre Eugène-Marquis",
    "Clinique Saint-Laurent",
    "Clinique Mutualiste La Sagesse",
  ]),
  tmCity("brest", PRICING_MEDICAL_METROPOLE, [
    "CHRU de Brest — Hôpital Morvan",
    "Hôpital de la Cavale-Blanche",
    "HIA Clermont-Tonnerre",
    "Clinique Pasteur",
    "Centre de Dialyse de Brest",
  ]),

  // Hauts-de-France
  tmCity("lille", PRICING_MEDICAL_METROPOLE, [
    "CHU de Lille — Hôpital Claude-Huriez",
    "Hôpital Jeanne de Flandre",
    "Hôpital Cardio-Pulmonaire",
    "Centre Oscar-Lambret",
    "Hôpital Roger-Salengro",
    "Clinique de la Louvière",
  ]),
  tmCity("reims", PRICING_MEDICAL_METROPOLE, [
    "CHU de Reims — Hôpital Robert-Debré",
    "Hôpital Maison-Blanche",
    "Institut Jean-Godinot",
    "Polyclinique de Courlancy",
    "Clinique de Bezannes",
  ]),
  tmCity("amiens", PRICING_MEDICAL_METROPOLE, [
    "CHU d'Amiens-Picardie",
    "Hôpital Nord",
    "Clinique de l'Europe",
    "Centre de Cancérologie de Picardie",
    "Centre de Dialyse d'Amiens",
  ]),

  // Grand Est
  tmCity("strasbourg", PRICING_MEDICAL_METROPOLE, [
    "CHU de Strasbourg — Hôpital de Hautepierre",
    "Hôpital Civil",
    "Hôpital Pasteur",
    "Centre Paul-Strauss",
    "Clinique Sainte-Odile",
    "Clinique Rhéna",
  ]),
  tmCity("metz", PRICING_MEDICAL_METROPOLE, [
    "CHR Metz-Thionville — Hôpital Mercy",
    "Hôpital de Bon-Secours",
    "Clinique Claude-Bernard",
    "Hôpital Robert-Schuman",
    "Centre de Dialyse de Metz",
  ]),
  tmCity("mulhouse", PRICING_MEDICAL_METROPOLE, [
    "Hôpital Émile-Muller",
    "Hôpital du Hasenrain",
    "Clinique du Diaconat",
    "Centre de Dialyse de Mulhouse",
    "Clinique de la Porte du Sud",
  ]),
  tmCity("nancy", PRICING_MEDICAL_METROPOLE, [
    "CHRU de Nancy — Hôpital de Brabois",
    "Hôpital Central de Nancy",
    "Centre Alexis-Vautrin",
    "Polyclinique de Gentilly",
    "Centre de Dialyse de Nancy",
  ]),
  tmCity("besancon", PRICING_MEDICAL_METROPOLE, [
    "CHU de Besançon — Hôpital Jean-Minjoz",
    "Hôpital Saint-Jacques",
    "Clinique Saint-Vincent",
    "Centre de Dialyse de Besançon",
    "Polyclinique de Franche-Comté",
  ]),

  // Normandie
  tmCity("le-havre", PRICING_MEDICAL_METROPOLE, [
    "Groupe Hospitalier du Havre",
    "Hôpital Jacques-Monod",
    "Clinique des Ormeaux",
    "Centre Henri-Becquerel (Rouen)",
    "Centre de Dialyse du Havre",
  ]),
  tmCity("rouen", PRICING_MEDICAL_METROPOLE, [
    "CHU de Rouen — Hôpital Charles-Nicolle",
    "Hôpital de Bois-Guillaume",
    "Centre Henri-Becquerel",
    "Clinique de l'Europe",
    "Clinique Mathilde",
  ]),
  tmCity("caen", PRICING_MEDICAL_METROPOLE, [
    "CHU de Caen-Normandie",
    "Centre François-Baclesse",
    "Clinique Saint-Martin",
    "Polyclinique du Parc",
    "Centre de Dialyse de Caen",
  ]),

  // Centre-Val de Loire
  tmCity("tours", PRICING_MEDICAL_METROPOLE, [
    "CHU de Tours — Hôpital Bretonneau",
    "Hôpital Trousseau",
    "Clinique de l'Alliance",
    "Clinique Vinci",
    "Centre de Dialyse de Tours",
  ]),
  tmCity("orleans", PRICING_MEDICAL_METROPOLE, [
    "CHR d'Orléans — Hôpital de la Source",
    "Hôpital Porte-Madeleine",
    "Clinique de l'Archette",
    "Polyclinique des Longues-Allées",
    "Centre de Dialyse d'Orléans",
  ]),

  // Bourgogne-Franche-Comté
  tmCity("dijon", PRICING_MEDICAL_METROPOLE, [
    "CHU Dijon Bourgogne — Hôpital François-Mitterrand",
    "Centre Georges-François Leclerc",
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
