// ─── Interfaces ─────────────────────────────────────────────

export interface AirportDestination {
  name: string;
  price: string;
  time: string;
}

export interface AirportTestimonial {
  text: string;
  name: string;
  initials: string;
  role: string;
}

export interface AirportFAQ {
  question: string;
  answer: string;
}

export interface Airport {
  name: string;
  slug: string;
  iata: string;
  city: string;
  citySlug: string;
  lat: number;
  lng: number;
  distanceFromCity: string;
  transferTime: string;
  transferPrice: string;
  terminals: string[];
  airlines: string[];
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  destinations: AirportDestination[];
  testimonials: AirportTestimonial[];
  faq: AirportFAQ[];
  nearbyAirports: string[];
  practicalInfo: string[];
  annualPassengers: string;
}

// ─── Helper ─────────────────────────────────────────────────

function airport(
  name: string,
  slug: string,
  iata: string,
  city: string,
  citySlug: string,
  lat: number,
  lng: number,
  distanceFromCity: string,
  transferTime: string,
  transferPrice: string,
  terminals: string[],
  airlines: string[],
  annualPassengers: string,
  destinations: AirportDestination[],
  testimonials: AirportTestimonial[],
  extraFaq: AirportFAQ[],
  nearbyAirports: string[],
  practicalInfo: string[],
): Airport {
  return {
    name,
    slug,
    iata,
    city,
    citySlug,
    lat,
    lng,
    distanceFromCity,
    transferTime,
    transferPrice,
    terminals,
    airlines,
    annualPassengers,
    metaTitle: `Taxi Aéroport ${name} (${iata}) - Transfert 24h/24 | TaxiNoir`,
    metaDescription: `Réservez votre taxi pour l'aéroport ${name}. Transfert fiable, tarifs forfaitaires, suivi des vols, aide aux bagages. Disponible 24h/24.`,
    heroTitle: `Taxi Aéroport ${name}`,
    heroSubtitle: `Transfert taxi vers et depuis l'aéroport ${name} (${iata}). Tarifs forfaitaires, chauffeur qui vous attend en zone d'arrivée, suivi des vols en temps réel.`,
    intro: `Besoin d'un taxi pour l'aéroport ${name} ? TaxiNoir vous propose un service de transfert professionnel, ponctuel et au meilleur prix. Nos chauffeurs suivent votre vol en temps réel et vous attendent avec une pancarte nominative en zone d'arrivée. En cas de retard de votre vol, l'attente est gratuite.`,
    destinations,
    testimonials,
    faq: [
      {
        question: `Comment réserver un taxi pour l'aéroport ${name} ?`,
        answer: `Utilisez le formulaire de réservation sur cette page. Entrez votre adresse de départ (ou d'arrivée), sélectionnez votre horaire et confirmez. Vous recevrez une confirmation par email avec les coordonnées de votre chauffeur.`,
      },
      {
        question: `Le chauffeur m'attend-il à l'arrivée à ${name} ?`,
        answer: `Oui, votre chauffeur vous attend en zone d'arrivée avec une pancarte à votre nom. Il suit votre vol en temps réel et adapte son heure d'arrivée. En cas de retard, l'attente est gratuite jusqu'à 45 minutes.`,
      },
      {
        question: `Les tarifs sont-ils forfaitaires pour ${name} ?`,
        answer: `Oui, tous nos transferts aéroport sont au forfait. Le prix est fixé à la réservation et ne change pas, quels que soient les embouteillages ou le temps de trajet réel.`,
      },
      ...extraFaq,
    ],
    nearbyAirports,
    practicalInfo,
  };
}

// ─── 50 Airports ────────────────────────────────────────────

export const airports: Airport[] = [
  airport(
    "Paris-Charles de Gaulle", "paris-charles-de-gaulle", "CDG",
    "Paris", "paris", 49.0097, 2.5479,
    "25 km du centre de Paris", "30-50 min", "56 €",
    ["Terminal 1", "Terminal 2A", "Terminal 2B", "Terminal 2C", "Terminal 2D", "Terminal 2E", "Terminal 2F", "Terminal 3"],
    ["Air France", "Lufthansa", "British Airways", "Emirates", "Delta", "United", "Ryanair"],
    "67 millions",
    [
      { name: "Paris centre (rive droite)", price: "56 €", time: "30-50 min" },
      { name: "Paris centre (rive gauche)", price: "65 €", time: "40-60 min" },
      { name: "La Défense", price: "52 €", time: "25-40 min" },
      { name: "Disneyland Paris", price: "65 €", time: "35-45 min" },
      { name: "Gare du Nord", price: "45 €", time: "25-35 min" },
      { name: "Aéroport d'Orly", price: "75 €", time: "45-60 min" },
    ],
    [
      { text: "Vol retardé de 2h et le chauffeur était toujours là, souriant. Pancarte à mon nom, aide avec les bagages, véhicule impeccable. Le meilleur transfert CDG que j'ai jamais eu.", name: "Sophie L.", initials: "SL", role: "Voyageuse fréquente" },
      { text: "Terminal 2E à 5h du matin, le chauffeur était ponctuel au point de rencontre. Trajet rapide vers le 8e arrondissement. Forfait respecté.", name: "Marc D.", initials: "MD", role: "Homme d'affaires" },
      { text: "Famille de 5 avec beaucoup de bagages. Le chauffeur avait un monospace parfait et nous a déposés à l'hôtel en 40 minutes.", name: "Emma R.", initials: "ER", role: "Touriste britannique" },
    ],
    [
      { question: "Quel est le forfait taxi Paris-CDG ?", answer: "Le forfait réglementé est de 56 € vers la rive droite et 65 € vers la rive gauche de Paris. Ce prix est fixe, sans supplément bagage ni variation horaire." },
      { question: "Où retrouver mon chauffeur à CDG ?", answer: "Votre chauffeur vous attend en zone d'arrivée, après le passage des douanes et la récupération des bagages. Il tient une pancarte avec votre nom. Les coordonnées exactes du point de rendez-vous sont envoyées par SMS." },
    ],
    ["paris-orly", "paris-beauvais"],
    ["Forfait réglementé rive droite / rive gauche", "Attente gratuite jusqu'à 45 min en cas de retard de vol", "Point de rendez-vous en zone d'arrivée avec pancarte", "Sièges enfant disponibles sur demande", "Wi-Fi à bord et chargeurs USB", "Paiement par carte ou application"],
  ),

  airport(
    "Paris-Orly", "paris-orly", "ORY",
    "Paris", "paris", 48.7262, 2.3652,
    "14 km du centre de Paris", "20-40 min", "38 €",
    ["Orly 1", "Orly 2", "Orly 3", "Orly 4"],
    ["Air France", "Transavia", "easyJet", "Vueling", "TAP Portugal", "Royal Air Maroc"],
    "33 millions",
    [
      { name: "Paris centre (rive gauche)", price: "38 €", time: "20-35 min" },
      { name: "Paris centre (rive droite)", price: "44 €", time: "25-40 min" },
      { name: "La Défense", price: "55 €", time: "35-50 min" },
      { name: "Versailles", price: "45 €", time: "25-35 min" },
      { name: "Gare de Lyon", price: "35 €", time: "20-30 min" },
    ],
    [
      { text: "Retour de vacances à Orly 3, taxi réservé la veille. Le chauffeur était là pile à l'heure, trajet fluide vers le 15e.", name: "Karim B.", initials: "KB", role: "Parisien" },
      { text: "Transfert Orly-Versailles parfait pour mon séminaire. Prix fixe annoncé, pas de mauvaise surprise.", name: "Claire M.", initials: "CM", role: "Cadre, Versailles" },
      { text: "Je prends TaxiNoir à chaque vol depuis Orly. Toujours fiable, même à 4h du matin.", name: "Farid A.", initials: "FA", role: "Entrepreneur" },
    ],
    [
      { question: "Quel est le forfait taxi Paris-Orly ?", answer: "Le forfait réglementé est de 38 € vers la rive gauche et 44 € vers la rive droite. Prix fixe garanti." },
      { question: "Orly 1, 2, 3 ou 4 : comment choisir ?", answer: "Vérifiez votre terminal sur votre billet d'avion. Le chauffeur vous dépose ou vous récupère directement au bon terminal." },
    ],
    ["paris-charles-de-gaulle", "paris-beauvais"],
    ["Forfait réglementé rive gauche / rive droite", "Plus proche de Paris que CDG (14 km)", "Attente gratuite en cas de retard de vol", "Dépose au terminal exact", "Véhicules berline et monospace"],
  ),

  airport(
    "Nice Côte d'Azur", "nice-cote-d-azur", "NCE",
    "Nice", "nice", 43.6584, 7.2159,
    "7 km du centre de Nice", "15-25 min", "32 €",
    ["Terminal 1", "Terminal 2"],
    ["Air France", "easyJet", "Ryanair", "British Airways", "Lufthansa", "Emirates"],
    "14 millions",
    [
      { name: "Nice centre", price: "32 €", time: "15-25 min" },
      { name: "Cannes", price: "85 €", time: "30-45 min" },
      { name: "Monaco", price: "90 €", time: "30-40 min" },
      { name: "Antibes", price: "55 €", time: "20-30 min" },
      { name: "Saint-Tropez", price: "250 €", time: "1h30-2h" },
    ],
    [
      { text: "Atterrissage à Nice T2, le chauffeur m'attendait avec une pancarte. Direction Monaco en 30 minutes, véhicule premium.", name: "Roberto F.", initials: "RF", role: "Homme d'affaires, Monaco" },
      { text: "Transfert aéroport-Cannes pour le Festival. Ponctuel malgré le trafic sur la Croisette.", name: "Charlotte V.", initials: "CV", role: "Journaliste" },
      { text: "Accueil parfait pour notre famille de 4. Le chauffeur connaît la Côte d'Azur par cœur.", name: "Diana K.", initials: "DK", role: "Touriste" },
    ],
    [
      { question: "Combien coûte un taxi Nice Aéroport – Monaco ?", answer: "Le forfait taxi Nice Côte d'Azur – Monaco est d'environ 90 €. Trajet de 30-40 minutes selon la circulation." },
      { question: "Peut-on réserver un taxi de nuit à Nice Aéroport ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, y compris pour les vols arrivant tard le soir ou tôt le matin." },
    ],
    ["marseille-provence", "toulon-hyeres"],
    ["Deuxième aéroport de France hors Paris", "Idéalement situé à 7 km du centre", "Transferts vers toute la Côte d'Azur", "Véhicules berline, monospace et premium"],
  ),

  airport(
    "Lyon-Saint Exupéry", "lyon-saint-exupery", "LYS",
    "Lyon", "lyon", 45.7256, 5.0811,
    "25 km du centre de Lyon", "25-40 min", "65 €",
    ["Terminal 1", "Terminal 2", "Terminal 3"],
    ["Air France", "easyJet", "Transavia", "Lufthansa", "KLM", "Turkish Airlines"],
    "12 millions",
    [
      { name: "Lyon Part-Dieu", price: "65 €", time: "25-35 min" },
      { name: "Lyon Perrache", price: "70 €", time: "30-40 min" },
      { name: "Lyon Confluence", price: "68 €", time: "28-38 min" },
      { name: "Grenoble", price: "120 €", time: "1h-1h15" },
      { name: "Annecy", price: "150 €", time: "1h15-1h30" },
    ],
    [
      { text: "Transfert parfait vers Part-Dieu. Le chauffeur suivait mon vol et m'a envoyé un SMS à l'atterrissage.", name: "Thomas R.", initials: "TR", role: "Consultant, Lyon" },
      { text: "Trajet Saint-Ex vers Grenoble en hiver pour les stations de ski. Chauffeur pro, véhicule équipé.", name: "Antoine G.", initials: "AG", role: "Skieur" },
      { text: "Départ à 5h du matin pour un vol business. Ponctualité irréprochable.", name: "Nathalie G.", initials: "NG", role: "Directrice commerciale" },
    ],
    [
      { question: "Combien coûte un taxi Lyon centre – Saint Exupéry ?", answer: "Le forfait taxi Lyon centre – Aéroport Saint Exupéry est de 65-70 € selon votre point de départ. Prix fixe garanti." },
      { question: "Le Rhônexpress est-il plus avantageux ?", answer: "Le Rhônexpress coûte 16,90 €/personne. Dès 2 passagers, le taxi TaxiNoir devient plus économique, avec l'avantage du porte-à-porte et de l'aide aux bagages." },
    ],
    ["grenoble-isere", "chambery-savoie-mont-blanc"],
    ["Gare TGV intégrée à l'aéroport", "Attente gratuite en cas de retard", "Transferts vers les stations de ski en hiver", "Véhicules équipés pneus neige en saison"],
  ),

  airport(
    "Marseille-Provence", "marseille-provence", "MRS",
    "Marseille", "marseille", 43.4393, 5.2214,
    "27 km du centre de Marseille", "25-40 min", "55 €",
    ["Terminal 1", "Terminal 2"],
    ["Air France", "Ryanair", "easyJet", "Vueling", "Volotea", "Transavia"],
    "10 millions",
    [
      { name: "Marseille Vieux-Port", price: "55 €", time: "25-40 min" },
      { name: "Aix-en-Provence", price: "45 €", time: "20-30 min" },
      { name: "Cassis", price: "65 €", time: "35-45 min" },
      { name: "Toulon", price: "95 €", time: "50-65 min" },
      { name: "Avignon", price: "120 €", time: "1h-1h15" },
    ],
    [
      { text: "Arrivée tardive à 23h, le chauffeur était présent. Trajet vers le Vieux-Port impeccable. Merci TaxiNoir.", name: "Karim B.", initials: "KB", role: "Marseillais" },
      { text: "Transfert aéroport vers Aix-en-Provence rapide et agréable. Le chauffeur m'a même recommandé un restaurant.", name: "Véronique M.", initials: "VM", role: "Touriste" },
      { text: "Service pro pour l'équipe commerciale : 3 véhicules coordonnés pour le même vol. Parfait.", name: "Pascal D.", initials: "PD", role: "Directeur commercial" },
    ],
    [
      { question: "Combien coûte un taxi Marseille-Provence – Aix ?", answer: "Le forfait taxi aéroport Provence – Aix-en-Provence est d'environ 45 €. Trajet de 20-30 minutes." },
    ],
    ["nice-cote-d-azur", "toulon-hyeres", "avignon-provence", "nimes-garons"],
    ["Desservant Marseille, Aix-en-Provence et toute la Provence", "Point de rendez-vous clair en zone arrivée", "Transferts vers les Calanques et la Côte Bleue"],
  ),

  airport(
    "Toulouse-Blagnac", "toulouse-blagnac", "TLS",
    "Toulouse", "toulouse", 43.6291, 1.3638,
    "8 km du centre de Toulouse", "15-25 min", "28 €",
    ["Hall A", "Hall B", "Hall C", "Hall D"],
    ["Air France", "easyJet", "Ryanair", "Volotea", "Transavia", "Iberia"],
    "10 millions",
    [
      { name: "Toulouse centre (Capitole)", price: "28 €", time: "15-25 min" },
      { name: "Airbus Blagnac", price: "15 €", time: "5-10 min" },
      { name: "Cité de l'Espace", price: "35 €", time: "20-30 min" },
      { name: "Carcassonne", price: "120 €", time: "1h-1h15" },
      { name: "Albi", price: "95 €", time: "50 min-1h" },
    ],
    [
      { text: "Transfert Blagnac-Capitole en 18 minutes. Le chauffeur m'a déposé pile devant mon hôtel. Prix imbattable.", name: "Laurent F.", initials: "LF", role: "Ingénieur, Airbus" },
      { text: "Vol arrivé avec 1h de retard, le chauffeur avait suivi et était là quand je suis sorti. Top.", name: "Isabelle C.", initials: "IC", role: "Commerciale" },
      { text: "Taxi pour toute la famille vers Albi. Confortable et le chauffeur a fait guide touristique en prime.", name: "André M.", initials: "AM", role: "Touriste" },
    ],
    [
      { question: "L'aéroport de Toulouse est-il loin du centre ?", answer: "Non, Blagnac est à seulement 8 km du centre. Le taxi met 15-25 minutes selon le trafic." },
    ],
    ["bordeaux-merignac", "carcassonne-salvaza", "pau-pyrenees", "perpignan-rivesaltes"],
    ["Très proche du centre-ville (8 km)", "Desservant aussi Airbus et l'industrie aéronautique", "Transferts vers le pays cathare et le Gers"],
  ),

  airport(
    "Bordeaux-Mérignac", "bordeaux-merignac", "BOD",
    "Bordeaux", "bordeaux", 44.8283, -0.7153,
    "12 km du centre de Bordeaux", "20-30 min", "35 €",
    ["Terminal A", "Terminal B", "Terminal billi"],
    ["Air France", "easyJet", "Ryanair", "Volotea", "Transavia", "KLM"],
    "7,7 millions",
    [
      { name: "Bordeaux centre (Saint-Jean)", price: "35 €", time: "20-30 min" },
      { name: "Bordeaux Lac / Parc des Expos", price: "25 €", time: "15-20 min" },
      { name: "Saint-Émilion", price: "75 €", time: "40-50 min" },
      { name: "Arcachon", price: "80 €", time: "45-55 min" },
      { name: "Médoc (Pauillac)", price: "90 €", time: "50 min-1h" },
    ],
    [
      { text: "Atterrissage au Terminal A, taxi réservé pour Saint-Émilion. Le chauffeur connaissait même les vignobles à visiter.", name: "Jean-Luc P.", initials: "JLP", role: "Œnologue" },
      { text: "Départ matinal, taxi ponctuel devant chez moi à 5h. Dépose au terminal billi sans stress.", name: "Alexis D.", initials: "AD", role: "Étudiant, Bordeaux" },
      { text: "Transfert vers Arcachon avec arrêt pour déjeuner à Gujan. Service sur mesure.", name: "Monique V.", initials: "MV", role: "Retraitée" },
    ],
    [
      { question: "Peut-on prendre un taxi vers les vignobles depuis l'aéroport ?", answer: "Oui, nos chauffeurs proposent des transferts directs vers Saint-Émilion, le Médoc, Pomerol et toutes les appellations bordelaises." },
    ],
    ["toulouse-blagnac", "biarritz-pays-basque", "bergerac-dordogne-perigord", "la-rochelle-ile-de-re"],
    ["Terminal billi dédié aux low-cost", "Transferts vers le vignoble bordelais", "Bassin d'Arcachon à 45 min"],
  ),

  airport(
    "Nantes-Atlantique", "nantes-atlantique", "NTE",
    "Nantes", "nantes", 47.1532, -1.6107,
    "10 km du centre de Nantes", "15-25 min", "30 €",
    ["Terminal unique"],
    ["Air France", "Transavia", "easyJet", "Volotea", "Ryanair", "HOP!"],
    "7,2 millions",
    [
      { name: "Nantes centre", price: "30 €", time: "15-25 min" },
      { name: "Île de Nantes", price: "28 €", time: "12-20 min" },
      { name: "La Baule", price: "85 €", time: "50 min-1h" },
      { name: "Saint-Nazaire", price: "70 €", time: "40-50 min" },
      { name: "Pornic", price: "65 €", time: "35-45 min" },
    ],
    [
      { text: "Transfert rapide vers le centre. Chauffeur très sympa et véhicule propre.", name: "Yann B.", initials: "YB", role: "Entrepreneur, Nantes" },
      { text: "Direction La Baule depuis l'aéroport, parfait pour commencer les vacances.", name: "Marine K.", initials: "MK", role: "Vacancière" },
      { text: "Utilisation régulière pour mes déplacements pro. Jamais déçu.", name: "François H.", initials: "FH", role: "Avocat" },
    ],
    [
      { question: "L'aéroport de Nantes va-t-il déménager ?", answer: "Le projet Notre-Dame-des-Landes a été abandonné. L'aéroport Nantes-Atlantique reste au même emplacement avec des travaux de modernisation." },
    ],
    ["rennes-bretagne", "la-rochelle-ile-de-re", "tours-val-de-loire"],
    ["Terminal unique, repérage facile", "Proche du centre-ville (10 km)", "Transferts vers la côte atlantique"],
  ),

  airport(
    "Paris-Beauvais", "paris-beauvais", "BVA",
    "Beauvais", "paris", 49.4544, 2.1126,
    "85 km du centre de Paris", "1h15-1h45", "130 €",
    ["Terminal 1", "Terminal 2"],
    ["Ryanair", "Wizz Air"],
    "4 millions",
    [
      { name: "Paris centre", price: "130 €", time: "1h15-1h45" },
      { name: "Gare du Nord", price: "120 €", time: "1h10-1h30" },
      { name: "La Défense", price: "115 €", time: "1h-1h20" },
      { name: "Beauvais centre", price: "18 €", time: "10-15 min" },
      { name: "Amiens", price: "90 €", time: "45 min-1h" },
    ],
    [
      { text: "Vol Ryanair arrivé à 23h30, aucun bus. Le taxi TaxiNoir m'a sauvé la mise. Chauffeur efficace.", name: "Pierre V.", initials: "PV", role: "Voyageur" },
      { text: "À 4 passagers le taxi revient moins cher que 4 billets de navette. Et c'est du porte-à-porte.", name: "Julie D.", initials: "JD", role: "Étudiante" },
      { text: "Réservé pour un vol à 6h du matin. Le chauffeur est venu me chercher à Paris à 3h. Pro.", name: "Damien C.", initials: "DC", role: "Commercial" },
    ],
    [
      { question: "Pourquoi prendre un taxi plutôt que la navette pour Beauvais ?", answer: "Le taxi est du porte-à-porte (pas d'arrêt Porte Maillot). Dès 2-3 passagers, c'est souvent moins cher que les navettes. Et surtout, il est disponible même pour les vols tardifs." },
      { question: "Beauvais est-il vraiment à Paris ?", answer: "L'aéroport de Beauvais-Tillé est à 85 km du centre de Paris (1h15-1h45 en taxi). Il est surtout utilisé par les compagnies low-cost." },
    ],
    ["paris-charles-de-gaulle", "paris-orly"],
    ["Alternative économique à CDG et Orly", "Spécialisé low-cost (Ryanair, Wizz Air)", "Navette taxi idéale à partir de 2 passagers", "Disponible même pour les vols très tardifs"],
  ),

  airport(
    "Bâle-Mulhouse-Fribourg", "bale-mulhouse", "BSL",
    "Mulhouse", "mulhouse", 47.5896, 7.5299,
    "25 km de Mulhouse, 8 km de Bâle", "25-35 min", "45 €",
    ["Terminal français", "Terminal suisse"],
    ["easyJet", "Air France", "Wizz Air", "Lufthansa", "Turkish Airlines", "Pegasus"],
    "9 millions",
    [
      { name: "Mulhouse centre", price: "45 €", time: "25-35 min" },
      { name: "Bâle centre", price: "40 €", time: "15-20 min" },
      { name: "Colmar", price: "75 €", time: "40-50 min" },
      { name: "Strasbourg", price: "130 €", time: "1h15-1h30" },
      { name: "Fribourg (Allemagne)", price: "70 €", time: "45-55 min" },
    ],
    [
      { text: "Aéroport trinational, le chauffeur savait exactement quel côté (français). Transfert vers Colmar parfait.", name: "Ingrid S.", initials: "IS", role: "Voyageuse" },
      { text: "Trajet vers Bâle en 15 minutes. Bien moins cher qu'un taxi suisse !", name: "Klaus M.", initials: "KM", role: "Frontalier" },
      { text: "Service fiable pour mes déplacements pro entre Mulhouse et l'aéroport.", name: "Albert W.", initials: "AW", role: "Cadre, Mulhouse" },
    ],
    [
      { question: "Côté français ou côté suisse ?", answer: "L'aéroport dispose de deux sorties : côté français et côté suisse. Précisez votre côté de sortie lors de la réservation. Nos chauffeurs desservent les deux." },
    ],
    ["strasbourg-entzheim", "colmar"],
    ["Aéroport trinational (France, Suisse, Allemagne)", "Sortie côté français et côté suisse", "Transferts vers l'Alsace, la Suisse et l'Allemagne"],
  ),

  airport(
    "Lille-Lesquin", "lille-lesquin", "LIL",
    "Lille", "lille", 50.5617, 3.0895,
    "10 km du centre de Lille", "15-20 min", "25 €",
    ["Terminal unique"],
    ["Air France", "easyJet", "Volotea", "Ryanair", "Transavia"],
    "2,2 millions",
    [
      { name: "Lille centre (Flandres)", price: "25 €", time: "15-20 min" },
      { name: "Euralille", price: "22 €", time: "12-18 min" },
      { name: "Villeneuve-d'Ascq", price: "18 €", time: "10-15 min" },
      { name: "Lens", price: "45 €", time: "30-40 min" },
      { name: "Arras", price: "55 €", time: "35-45 min" },
    ],
    [
      { text: "Transfert aéroport-gare Flandres rapide et pas cher. Parfait pour enchaîner avec l'Eurostar.", name: "Philippe B.", initials: "PB", role: "Homme d'affaires" },
      { text: "Taxi Lesquin fiable même pour mon vol de 6h. Le chauffeur était chez moi à 4h30.", name: "Valérie T.", initials: "VT", role: "Cadre, Lille" },
      { text: "Retour de vacances, le taxi nous attendait. En 15 min on était à la maison.", name: "Damien C.", initials: "DC", role: "Lillois" },
    ],
    [
      { question: "Lille-Lesquin est-il loin du centre ?", answer: "Non, l'aéroport est à 10 km seulement du centre de Lille. Le taxi met 15-20 minutes." },
    ],
    ["paris-beauvais", "paris-charles-de-gaulle"],
    ["Très proche du centre-ville", "Transferts vers Euralille et les gares TGV", "Dessert aussi Lens, Arras et le Bassin Minier"],
  ),

  airport(
    "Strasbourg-Entzheim", "strasbourg-entzheim", "SXB",
    "Strasbourg", "strasbourg", 48.5382, 7.6282,
    "12 km du centre de Strasbourg", "15-25 min", "35 €",
    ["Terminal unique"],
    ["Air France", "Ryanair", "Volotea", "Transavia", "Lufthansa"],
    "1,3 million",
    [
      { name: "Strasbourg centre", price: "35 €", time: "15-25 min" },
      { name: "Parlement européen", price: "30 €", time: "12-20 min" },
      { name: "Colmar", price: "70 €", time: "40-50 min" },
      { name: "Offenburg (Allemagne)", price: "55 €", time: "25-35 min" },
    ],
    [
      { text: "Transfert vers le Parlement européen impeccable. Chauffeur discret et professionnel.", name: "Hans M.", initials: "HM", role: "Fonctionnaire européen" },
      { text: "Arrivée tardive, taxi réservé via l'app, chauffeur ponctuel. Parfait.", name: "Catherine W.", initials: "CW", role: "Voyageuse" },
      { text: "Direction Colmar pour le marché de Noël. Le chauffeur connaissait le meilleur itinéraire.", name: "René K.", initials: "RK", role: "Touriste" },
    ],
    [
      { question: "Y a-t-il un train pour le centre depuis Entzheim ?", answer: "Oui, mais le taxi TaxiNoir est plus rapide (15 min vs 25 min) et vous dépose devant votre destination. Idéal avec des bagages." },
    ],
    ["bale-mulhouse", "metz-nancy-lorraine"],
    ["Proche du centre et du Parlement européen", "Transferts vers l'Alsace et l'Allemagne", "Idéal pour les marchés de Noël"],
  ),

  airport(
    "Montpellier-Méditerranée", "montpellier-mediterranee", "MPL",
    "Montpellier", "montpellier", 43.5762, 3.9630,
    "8 km du centre de Montpellier", "15-20 min", "25 €",
    ["Terminal unique"],
    ["Air France", "Transavia", "easyJet", "Ryanair", "Volotea"],
    "2 millions",
    [
      { name: "Montpellier centre (Comédie)", price: "25 €", time: "15-20 min" },
      { name: "Palavas-les-Flots", price: "30 €", time: "15-20 min" },
      { name: "Sète", price: "45 €", time: "30-35 min" },
      { name: "Nîmes", price: "65 €", time: "40-50 min" },
    ],
    [
      { text: "Transfert rapide vers la Place de la Comédie. Super rapport qualité-prix.", name: "Emma T.", initials: "ET", role: "Étudiante" },
      { text: "Direction Palavas pour le week-end. Le chauffeur nous a déposés les pieds dans le sable.", name: "Michel R.", initials: "MR", role: "Touriste" },
      { text: "Service fiable pour mes déplacements entre l'aéroport et Antigone.", name: "Sandrine L.", initials: "SL", role: "Consultante" },
    ],
    [
      { question: "L'aéroport est-il loin de la plage ?", answer: "Non, Palavas-les-Flots est à 15-20 minutes de l'aéroport en taxi (30 €)." },
    ],
    ["nimes-garons", "marseille-provence", "perpignan-rivesaltes"],
    ["Très proche du centre (8 km)", "Accès rapide aux plages méditerranéennes", "Transferts vers Sète et le Bassin de Thau"],
  ),

  airport(
    "Ajaccio-Napoléon Bonaparte", "ajaccio-napoleon-bonaparte", "AJA",
    "Ajaccio", "", 41.9236, 8.8029,
    "7 km du centre d'Ajaccio", "10-15 min", "25 €",
    ["Terminal unique"],
    ["Air France", "Air Corsica", "easyJet", "Volotea", "Transavia"],
    "1,7 million",
    [
      { name: "Ajaccio centre", price: "25 €", time: "10-15 min" },
      { name: "Porticcio", price: "35 €", time: "20-25 min" },
      { name: "Propriano", price: "95 €", time: "1h-1h15" },
      { name: "Porto", price: "110 €", time: "1h15-1h30" },
    ],
    [
      { text: "Accueil chaleureux à l'aéroport. Le chauffeur nous a donné plein de conseils pour découvrir la Corse.", name: "Mathilde F.", initials: "MF", role: "Vacancière" },
      { text: "Transfert vers Porticcio rapide et agréable. Vue magnifique pendant le trajet.", name: "Roland P.", initials: "RP", role: "Touriste" },
      { text: "Service parfait en haute saison. Réservation à l'avance indispensable en été.", name: "Corinne J.", initials: "CJ", role: "Habituée de la Corse" },
    ],
    [
      { question: "Faut-il réserver à l'avance en été ?", answer: "Fortement recommandé. En juillet-août, la demande est très forte. Réservez au moins 48h à l'avance." },
    ],
    ["bastia-poretta", "figari-sud-corse", "calvi-sainte-catherine"],
    ["Principal aéroport de Corse-du-Sud", "Transferts vers les plages et villages corses", "Réservation à l'avance recommandée en été"],
  ),

  airport(
    "Bastia-Poretta", "bastia-poretta", "BIA",
    "Bastia", "", 42.5527, 9.4837,
    "20 km du centre de Bastia", "20-30 min", "35 €",
    ["Terminal unique"],
    ["Air France", "Air Corsica", "easyJet", "Volotea"],
    "1,3 million",
    [
      { name: "Bastia centre", price: "35 €", time: "20-30 min" },
      { name: "Saint-Florent", price: "55 €", time: "35-45 min" },
      { name: "Calvi", price: "130 €", time: "1h30-2h" },
      { name: "Corte", price: "80 €", time: "50 min-1h" },
    ],
    [
      { text: "Transfert vers le Vieux-Port de Bastia. Chauffeur très sympa qui nous a parlé de l'île.", name: "Pierre-Jean L.", initials: "PJL", role: "Touriste" },
      { text: "Direction Saint-Florent pour les vacances. Trajet magnifique.", name: "Hélène S.", initials: "HS", role: "Vacancière" },
      { text: "Service fiable même en plein mois d'août. Bravo.", name: "Simon L.", initials: "SiL", role: "Corse de retour" },
    ],
    [
      { question: "Peut-on aller à Calvi depuis Bastia en taxi ?", answer: "Oui, comptez 130 € et 1h30-2h de route. Le trajet est magnifique via le col de Teghime ou par la côte." },
    ],
    ["ajaccio-napoleon-bonaparte", "calvi-sainte-catherine", "figari-sud-corse"],
    ["Dessert la Haute-Corse", "Transferts vers le Cap Corse et la Balagne", "Disponible en haute saison"],
  ),

  airport(
    "Brest-Bretagne", "brest-bretagne", "BES",
    "Brest", "brest", 48.4479, -4.4186,
    "10 km du centre de Brest", "12-18 min", "25 €",
    ["Terminal unique"],
    ["Air France", "Transavia", "Volotea", "Ryanair"],
    "1,1 million",
    [
      { name: "Brest centre", price: "25 €", time: "12-18 min" },
      { name: "Océanopolis", price: "20 €", time: "10-15 min" },
      { name: "Quimper", price: "85 €", time: "50 min-1h" },
      { name: "Roscoff (ferry)", price: "65 €", time: "40-50 min" },
    ],
    [
      { text: "Transfert aéroport-centre rapide. Le chauffeur nous a conseillé pour visiter Brest.", name: "Yves G.", initials: "YG", role: "Touriste" },
      { text: "Direction Roscoff pour le ferry. Ponctuel et fiable.", name: "Nolwenn R.", initials: "NR", role: "Voyageuse" },
      { text: "Service pro pour mes déplacements vers la base navale.", name: "Jean-Pierre M.", initials: "JPM", role: "Militaire" },
    ],
    [
      { question: "Peut-on prendre un taxi Brest-Roscoff pour le ferry ?", answer: "Oui, nous assurons les transferts vers le port de Roscoff (65 €, 40-50 min). Réservez à l'avance." },
    ],
    ["rennes-bretagne", "lorient-bretagne-sud", "quimper-cornouaille", "dinard-bretagne"],
    ["Porte d'entrée de la Bretagne occidentale", "Transferts vers Roscoff (ferry Irlande/Angleterre)", "Dessert le Finistère et le pays d'Iroise"],
  ),

  airport(
    "Biarritz-Pays Basque", "biarritz-pays-basque", "BIQ",
    "Biarritz", "", 43.4683, -1.5311,
    "3 km du centre de Biarritz", "5-10 min", "15 €",
    ["Terminal unique"],
    ["Air France", "easyJet", "Ryanair", "Transavia", "Volotea"],
    "1,2 million",
    [
      { name: "Biarritz centre", price: "15 €", time: "5-10 min" },
      { name: "Bayonne", price: "25 €", time: "12-18 min" },
      { name: "Saint-Jean-de-Luz", price: "30 €", time: "15-25 min" },
      { name: "San Sebastián (Espagne)", price: "85 €", time: "40-50 min" },
      { name: "Pau", price: "120 €", time: "1h-1h15" },
    ],
    [
      { text: "3 minutes de l'aéroport à mon hôtel sur la Grande Plage. Incroyable.", name: "Mikel E.", initials: "ME", role: "Surfeur" },
      { text: "Transfert vers Saint-Jean-de-Luz rapide et agréable. Vive le Pays Basque !", name: "Hélène S.", initials: "HS", role: "Touriste" },
      { text: "Direction San Sebastián pour le week-end. Passage de frontière sans souci.", name: "Pierre-Jean L.", initials: "PJL", role: "Gourmet" },
    ],
    [
      { question: "Peut-on aller en Espagne depuis Biarritz en taxi ?", answer: "Oui, nos chauffeurs assurent les transferts vers San Sebastián (85 €, 40-50 min) et d'autres villes du Pays Basque espagnol." },
    ],
    ["pau-pyrenees", "bordeaux-merignac", "tarbes-lourdes-pyrenees"],
    ["L'un des aéroports les plus proches d'un centre-ville en France", "Transferts vers le Pays Basque français et espagnol", "Accès rapide aux plages de la côte basque"],
  ),

  airport(
    "Toulon-Hyères", "toulon-hyeres", "TLN",
    "Toulon", "toulon", 43.0973, 6.1460,
    "22 km du centre de Toulon", "25-35 min", "45 €",
    ["Terminal unique"],
    ["Air France", "Transavia", "Volotea", "easyJet"],
    "700 000",
    [
      { name: "Toulon centre", price: "45 €", time: "25-35 min" },
      { name: "Hyères centre", price: "18 €", time: "8-12 min" },
      { name: "Saint-Tropez", price: "110 €", time: "1h-1h15" },
      { name: "Bandol", price: "50 €", time: "30-40 min" },
    ],
    [
      { text: "Transfert vers le port de Toulon pour le ferry Corse. Ponctuel et efficace.", name: "Jean-Marc D.", initials: "JMD", role: "Voyageur" },
      { text: "Direction Saint-Tropez depuis Hyères. Le trajet est magnifique le long de la côte.", name: "Léa M.", initials: "LM", role: "Vacancière" },
      { text: "Service fiable pour rejoindre l'île de Porquerolles via la navette.", name: "Fabien S.", initials: "FS", role: "Touriste" },
    ],
    [
      { question: "Peut-on prendre un taxi pour les îles d'Or ?", answer: "Le taxi vous dépose au port d'embarquement de la Tour Fondue pour Porquerolles, ou au port d'Hyères pour Port-Cros et Le Levant." },
    ],
    ["marseille-provence", "nice-cote-d-azur"],
    ["Porte d'entrée du Var et de la Côte d'Azur", "Transferts vers Saint-Tropez et les îles d'Or", "Accès au port de Toulon (ferries Corse)"],
  ),

  airport(
    "Rennes-Bretagne", "rennes-bretagne", "RNS",
    "Rennes", "rennes", 48.0694, -1.7348,
    "7 km du centre de Rennes", "12-18 min", "22 €",
    ["Terminal unique"],
    ["Air France", "easyJet", "Volotea", "Ryanair"],
    "800 000",
    [
      { name: "Rennes centre", price: "22 €", time: "12-18 min" },
      { name: "Gare de Rennes", price: "20 €", time: "10-15 min" },
      { name: "Saint-Malo", price: "85 €", time: "50 min-1h" },
      { name: "Dinard", price: "75 €", time: "45-55 min" },
    ],
    [
      { text: "Transfert rapide vers la gare pour mon TGV. Timing parfait.", name: "Olivier G.", initials: "OG", role: "Voyageur" },
      { text: "Direction Saint-Malo depuis l'aéroport. Service impeccable.", name: "Anne-Marie F.", initials: "AMF", role: "Touriste" },
      { text: "Taxi fiable à Rennes. Je l'utilise pour tous mes vols.", name: "Julien N.", initials: "JN", role: "Développeur, Rennes" },
    ],
    [
      { question: "L'aéroport de Rennes dessert-il Saint-Malo ?", answer: "Oui, un taxi TaxiNoir vous conduit de l'aéroport à Saint-Malo en 50 min-1h pour environ 85 €." },
    ],
    ["brest-bretagne", "nantes-atlantique", "dinard-bretagne", "lorient-bretagne-sud"],
    ["Proche du centre-ville (7 km)", "Connexion facile avec la gare TGV", "Transferts vers Saint-Malo et la côte bretonne"],
  ),

  airport(
    "Clermont-Ferrand Auvergne", "clermont-ferrand-auvergne", "CFE",
    "Clermont-Ferrand", "clermont-ferrand", 45.7867, 3.1631,
    "7 km du centre de Clermont-Ferrand", "12-18 min", "22 €",
    ["Terminal unique"],
    ["Air France", "Ryanair", "HOP!"],
    "400 000",
    [
      { name: "Clermont centre (Jaude)", price: "22 €", time: "12-18 min" },
      { name: "Gare de Clermont", price: "20 €", time: "10-15 min" },
      { name: "Vulcania", price: "45 €", time: "30-40 min" },
      { name: "Vichy", price: "65 €", time: "40-50 min" },
    ],
    [
      { text: "Petit aéroport, mais service taxi au top. En 12 minutes j'étais en centre-ville.", name: "Xavier B.", initials: "XB", role: "Cadre, Clermont" },
      { text: "Direction Vulcania en famille. Le chauffeur nous a raconté l'histoire des volcans.", name: "Didier C.", initials: "DC", role: "Papa en vacances" },
      { text: "Service fiable pour mon vol hebdomadaire vers Paris.", name: "Hélène A.", initials: "HA", role: "Consultante" },
    ],
    [
      { question: "L'aéroport est-il bien desservi par les taxis ?", answer: "Oui, TaxiNoir couvre l'aéroport de Clermont-Ferrand avec des chauffeurs disponibles pour tous les vols, même tôt le matin." },
    ],
    ["lyon-saint-exupery"],
    ["Proche du centre (7 km)", "Porte d'entrée de l'Auvergne", "Transferts vers Vulcania et les volcans"],
  ),

  airport(
    "Pau-Pyrénées", "pau-pyrenees", "PUF",
    "Pau", "pau", 43.3800, -0.4186,
    "10 km du centre de Pau", "12-18 min", "25 €",
    ["Terminal unique"],
    ["Air France", "Transavia", "Ryanair", "HOP!"],
    "600 000",
    [
      { name: "Pau centre", price: "25 €", time: "12-18 min" },
      { name: "Lourdes", price: "55 €", time: "35-45 min" },
      { name: "Oloron-Sainte-Marie", price: "45 €", time: "30-40 min" },
      { name: "Stations de ski (Gourette)", price: "85 €", time: "50 min-1h" },
    ],
    [
      { text: "Transfert aéroport vers Pau en 12 min. Vue sur les Pyrénées magnifique.", name: "Jean-Claude B.", initials: "JCB", role: "Béarnais" },
      { text: "Direction Lourdes pour le pèlerinage. Chauffeur attentionné et ponctuel.", name: "Simone D.", initials: "SD", role: "Pèlerine" },
      { text: "Transfert vers Gourette en hiver. Véhicule adapté à la montagne.", name: "Alexandra M.", initials: "AM", role: "Skieuse" },
    ],
    [
      { question: "Peut-on rejoindre Lourdes depuis l'aéroport de Pau ?", answer: "Oui, le trajet Pau Aéroport – Lourdes dure environ 35-45 minutes pour 55 €. Très fréquenté par les pèlerins." },
    ],
    ["biarritz-pays-basque", "tarbes-lourdes-pyrenees", "toulouse-blagnac"],
    ["Vue panoramique sur les Pyrénées", "Transferts vers Lourdes et les stations de ski", "Porte d'entrée du Béarn"],
  ),

  airport(
    "Perpignan-Rivesaltes", "perpignan-rivesaltes", "PGF",
    "Perpignan", "perpignan", 42.7404, 2.8706,
    "7 km du centre de Perpignan", "10-15 min", "20 €",
    ["Terminal unique"],
    ["Air France", "Ryanair", "Transavia"],
    "500 000",
    [
      { name: "Perpignan centre", price: "20 €", time: "10-15 min" },
      { name: "Collioure", price: "40 €", time: "25-30 min" },
      { name: "Canet-en-Roussillon", price: "22 €", time: "12-18 min" },
      { name: "Font-Romeu", price: "95 €", time: "1h-1h15" },
    ],
    [
      { text: "Petit aéroport mais taxi TaxiNoir toujours disponible. Direction Collioure.", name: "Carmen S.", initials: "CS", role: "Touriste" },
      { text: "Transfert vers Canet pour les vacances. Rapide et pratique.", name: "Luis P.", initials: "LP", role: "Vacancier" },
      { text: "Vol Ryanair de Londres, taxi à la sortie. Parfait.", name: "Peter H.", initials: "PH", role: "Touriste britannique" },
    ],
    [
      { question: "L'aéroport est-il proche des plages ?", answer: "Oui, Canet-en-Roussillon est à 12-18 minutes (22 €) et Saint-Cyprien à 15-20 minutes." },
    ],
    ["toulouse-blagnac", "montpellier-mediterranee", "carcassonne-salvaza"],
    ["Porte du Roussillon et de la Catalogne Nord", "Transferts vers les plages et la montagne", "Proche de la frontière espagnole"],
  ),

  airport(
    "La Rochelle-Île de Ré", "la-rochelle-ile-de-re", "LRH",
    "La Rochelle", "la-rochelle", 46.1792, -1.1953,
    "4 km du centre de La Rochelle", "8-12 min", "15 €",
    ["Terminal unique"],
    ["easyJet", "Ryanair", "Jet2"],
    "300 000",
    [
      { name: "La Rochelle centre", price: "15 €", time: "8-12 min" },
      { name: "Île de Ré", price: "35 €", time: "25-35 min" },
      { name: "Rochefort", price: "40 €", time: "25-30 min" },
      { name: "Royan", price: "75 €", time: "50 min-1h" },
    ],
    [
      { text: "L'aéroport est minuscule mais le taxi TaxiNoir était là. Direction l'Île de Ré !", name: "Mathilde F.", initials: "MF", role: "Vacancière" },
      { text: "Transfert vers le Vieux Port en 8 minutes. Parfait pour les week-ends.", name: "Roland P.", initials: "RP", role: "Touriste" },
      { text: "Service fiable pour nos vols easyJet depuis Londres.", name: "Andrew B.", initials: "AB", role: "Britannique" },
    ],
    [
      { question: "Peut-on aller à l'Île de Ré depuis l'aéroport ?", answer: "Oui, le trajet Aéroport – Île de Ré (via le pont) dure 25-35 minutes pour environ 35 €." },
    ],
    ["nantes-atlantique", "bordeaux-merignac", "poitiers-biard"],
    ["L'un des aéroports les plus proches d'un centre-ville", "Transferts vers l'Île de Ré et la côte charentaise", "Très prisé par les touristes britanniques"],
  ),

  airport(
    "Figari-Sud Corse", "figari-sud-corse", "FSC",
    "Porto-Vecchio", "", 41.5006, 9.0978,
    "25 km de Porto-Vecchio", "25-30 min", "45 €",
    ["Terminal unique"],
    ["Air France", "Air Corsica", "easyJet", "Volotea", "Transavia"],
    "700 000",
    [
      { name: "Porto-Vecchio", price: "45 €", time: "25-30 min" },
      { name: "Bonifacio", price: "35 €", time: "20-25 min" },
      { name: "Propriano", price: "65 €", time: "40-50 min" },
      { name: "Sainte-Lucie de Porto-Vecchio", price: "30 €", time: "15-20 min" },
    ],
    [
      { text: "Transfert aéroport – Bonifacio magnifique. Le chauffeur corse était un vrai guide.", name: "Mathilde F.", initials: "MF", role: "Touriste" },
      { text: "Direction Palombaggia en 30 minutes. Les vacances commencent dans le taxi.", name: "Roland P.", initials: "RP", role: "Vacancier" },
      { text: "Service impeccable en plein mois d'août. Réservation à l'avance indispensable.", name: "Corinne J.", initials: "CJ", role: "Habituée" },
    ],
    [
      { question: "Faut-il réserver longtemps à l'avance ?", answer: "En été (juin-septembre), réservez au minimum 72h à l'avance. L'aéroport de Figari est très fréquenté en saison." },
    ],
    ["ajaccio-napoleon-bonaparte", "bastia-poretta"],
    ["Porte d'entrée du sud de la Corse", "Transferts vers Porto-Vecchio, Bonifacio et les plages", "Réservation anticipée recommandée en été"],
  ),

  airport(
    "Calvi-Sainte Catherine", "calvi-sainte-catherine", "CLY",
    "Calvi", "", 42.5244, 8.7933,
    "7 km du centre de Calvi", "10-15 min", "20 €",
    ["Terminal unique"],
    ["Air France", "Air Corsica", "easyJet"],
    "350 000",
    [
      { name: "Calvi centre", price: "20 €", time: "10-15 min" },
      { name: "L'Île-Rousse", price: "35 €", time: "20-25 min" },
      { name: "Porto", price: "75 €", time: "50 min-1h" },
    ],
    [
      { text: "Arrivée à Calvi sous le soleil, taxi direct vers l'hôtel en bord de mer.", name: "Éric L.", initials: "EL", role: "Touriste" },
      { text: "Transfert vers L'Île-Rousse rapide et agréable en longeant la côte.", name: "Isabelle K.", initials: "IK", role: "Vacancière" },
      { text: "Petit aéroport mais service taxi parfait. Réservez à l'avance.", name: "Roger B.", initials: "RB", role: "Habitué de la Balagne" },
    ],
    [
      { question: "L'aéroport est-il loin de la plage ?", answer: "Non, Calvi est à 10-15 minutes. Les plus belles plages de Balagne sont accessibles en 20-30 minutes en taxi." },
    ],
    ["bastia-poretta", "ajaccio-napoleon-bonaparte", "figari-sud-corse"],
    ["Au cœur de la Balagne", "Transferts vers les plages de Calvi et L'Île-Rousse", "Très demandé en été"],
  ),

  airport(
    "Limoges-Bellegarde", "limoges-bellegarde", "LIG",
    "Limoges", "limoges", 45.8628, 1.1794,
    "10 km du centre de Limoges", "12-18 min", "22 €",
    ["Terminal unique"],
    ["Ryanair", "HOP!"],
    "300 000",
    [
      { name: "Limoges centre", price: "22 €", time: "12-18 min" },
      { name: "Gare des Bénédictins", price: "20 €", time: "10-15 min" },
      { name: "Oradour-sur-Glane", price: "30 €", time: "20-25 min" },
    ],
    [
      { text: "Vol Ryanair de Londres, taxi parfait vers le centre. Rapide et pas cher.", name: "Daniel F.", initials: "DF", role: "Voyageur" },
      { text: "Transfert vers la Gare des Bénédictins pour mon TGV. Timing impeccable.", name: "Pauline G.", initials: "PG", role: "Étudiante" },
      { text: "Service fiable pour mes déplacements professionnels.", name: "Odette V.", initials: "OV", role: "Cadre, Limoges" },
    ],
    [
      { question: "Limoges-Bellegarde dessert-il beaucoup de destinations ?", answer: "L'aéroport propose principalement des vols vers Londres et quelques destinations saisonnières. Nos taxis assurent tous les transferts." },
    ],
    ["clermont-ferrand-auvergne", "bordeaux-merignac", "tours-val-de-loire"],
    ["Populaire pour les vols Ryanair vers le Royaume-Uni", "Proche du centre-ville", "Transferts vers le Limousin et le Périgord"],
  ),

  airport(
    "Caen-Carpiquet", "caen-carpiquet", "CFR",
    "Caen", "caen", 49.1736, -0.4500,
    "7 km du centre de Caen", "10-15 min", "20 €",
    ["Terminal unique"],
    ["Air France", "HOP!", "Volotea"],
    "200 000",
    [
      { name: "Caen centre", price: "20 €", time: "10-15 min" },
      { name: "Ouistreham (ferry)", price: "30 €", time: "20-25 min" },
      { name: "Plages du Débarquement", price: "55 €", time: "30-40 min" },
      { name: "Bayeux", price: "40 €", time: "25-30 min" },
    ],
    [
      { text: "Transfert vers les plages du Débarquement. Moment émouvant, chauffeur respectueux.", name: "Andrew B.", initials: "AB", role: "Touriste américain" },
      { text: "Direction Ouistreham pour le ferry. Ponctuel et pratique.", name: "Gilles F.", initials: "GF", role: "Voyageur" },
      { text: "Taxi fiable pour mon vol vers Lyon. En 10 min j'étais à l'aéroport.", name: "Jacqueline P.", initials: "JP", role: "Caennaise" },
    ],
    [
      { question: "Peut-on visiter les plages du Débarquement en taxi ?", answer: "Oui, nos chauffeurs proposent des transferts et mises à disposition pour visiter Omaha Beach, Utah Beach, Arromanches et le cimetière américain." },
    ],
    ["rennes-bretagne", "deauville-normandie"],
    ["Porte de la Normandie", "Transferts vers les plages du Débarquement", "Connexion avec le ferry de Ouistreham"],
  ),

  airport(
    "Tours-Val de Loire", "tours-val-de-loire", "TUF",
    "Tours", "tours", 47.4322, 0.7275,
    "8 km du centre de Tours", "12-18 min", "22 €",
    ["Terminal unique"],
    ["Ryanair", "Air France"],
    "200 000",
    [
      { name: "Tours centre", price: "22 €", time: "12-18 min" },
      { name: "Amboise", price: "40 €", time: "25-30 min" },
      { name: "Chenonceau", price: "50 €", time: "30-35 min" },
      { name: "Chambord", price: "75 €", time: "45-55 min" },
    ],
    [
      { text: "Vol Ryanair depuis Porto, taxi direct vers Amboise. Les châteaux commencent.", name: "Florence D.", initials: "FD", role: "Touriste" },
      { text: "Transfert vers le centre de Tours impeccable. Chauffeur passionné par la région.", name: "Richard S.", initials: "RS", role: "Visiteur" },
      { text: "Service parfait pour rejoindre la gare TGV de Saint-Pierre-des-Corps.", name: "Maurice L.", initials: "ML", role: "Voyageur" },
    ],
    [
      { question: "Peut-on visiter les châteaux de la Loire en taxi ?", answer: "Oui, nos chauffeurs proposent des transferts vers Chambord, Chenonceau, Amboise, Azay-le-Rideau et tous les châteaux de la Loire." },
    ],
    ["nantes-atlantique", "poitiers-biard"],
    ["Porte d'entrée des Châteaux de la Loire", "Transferts vers Amboise, Chenonceau, Chambord", "Idéal pour les touristes internationaux"],
  ),

  airport(
    "Grenoble-Isère", "grenoble-isere", "GNB",
    "Grenoble", "grenoble", 45.3629, 5.3294,
    "40 km du centre de Grenoble", "35-45 min", "65 €",
    ["Terminal unique"],
    ["easyJet", "Ryanair", "Transavia"],
    "400 000",
    [
      { name: "Grenoble centre", price: "65 €", time: "35-45 min" },
      { name: "Alpe d'Huez", price: "120 €", time: "1h15-1h30" },
      { name: "Les Deux Alpes", price: "130 €", time: "1h20-1h40" },
      { name: "Chamrousse", price: "80 €", time: "50 min-1h" },
    ],
    [
      { text: "Transfert direct vers l'Alpe d'Huez depuis l'aéroport. Chauffeur habitué à la montagne.", name: "Lucie B.", initials: "LB", role: "Skieuse" },
      { text: "Vol charter en hiver, taxi avec pneus neige. Parfait pour attaquer les pistes.", name: "Antoine G.", initials: "AG", role: "Touriste britannique" },
      { text: "Direction Grenoble pour un congrès. Le chauffeur connaissait le meilleur itinéraire.", name: "Rémi T.", initials: "RT", role: "Ingénieur" },
    ],
    [
      { question: "L'aéroport est-il loin de Grenoble ?", answer: "Oui, l'aéroport est situé à Saint-Étienne-de-Saint-Geoirs, à 40 km de Grenoble (35-45 min en taxi). Il est surtout utilisé en hiver." },
      { question: "Les taxis sont-ils équipés pour la montagne ?", answer: "Oui, en saison hivernale nos véhicules sont équipés de pneus neige et/ou chaînes. Le chauffeur gère les conditions de route." },
    ],
    ["lyon-saint-exupery", "chambery-savoie-mont-blanc"],
    ["Spécialisé dans les transferts ski en hiver", "Véhicules équipés montagne", "Transferts vers toutes les stations de l'Isère"],
  ),

  airport(
    "Tarbes-Lourdes-Pyrénées", "tarbes-lourdes-pyrenees", "LDE",
    "Lourdes", "", 43.1787, -0.0065,
    "10 km de Lourdes, 12 km de Tarbes", "12-18 min", "22 €",
    ["Terminal unique"],
    ["Ryanair", "HOP!", "Volotea"],
    "400 000",
    [
      { name: "Lourdes centre", price: "22 €", time: "12-18 min" },
      { name: "Tarbes centre", price: "25 €", time: "15-20 min" },
      { name: "Cauterets", price: "55 €", time: "35-45 min" },
      { name: "Gavarnie", price: "65 €", time: "50 min-1h" },
    ],
    [
      { text: "Transfert aéroport – sanctuaire de Lourdes parfait pour notre pèlerinage.", name: "Simone D.", initials: "SD", role: "Pèlerine" },
      { text: "Direction Cauterets pour le ski. Chauffeur prudent sur les routes de montagne.", name: "Frédérique B.", initials: "FB", role: "Skieuse" },
      { text: "Vol Ryanair depuis Dublin, taxi immédiat. Super service.", name: "Patrick O.", initials: "PO", role: "Pèlerin irlandais" },
    ],
    [
      { question: "L'aéroport dessert-il principalement Lourdes ?", answer: "Oui, l'aéroport est très fréquenté par les pèlerins de Lourdes et les skieurs en hiver. Nos taxis assurent les deux types de transferts." },
    ],
    ["pau-pyrenees", "biarritz-pays-basque", "toulouse-blagnac"],
    ["Aéroport principal pour les pèlerinages de Lourdes", "Transferts vers les stations pyrénéennes", "Très fréquenté par les groupes internationaux"],
  ),

  airport(
    "Bergerac Dordogne Périgord", "bergerac-dordogne-perigord", "EGC",
    "Bergerac", "", 44.8253, 0.5186,
    "3 km du centre de Bergerac", "5-8 min", "12 €",
    ["Terminal unique"],
    ["Ryanair"],
    "280 000",
    [
      { name: "Bergerac centre", price: "12 €", time: "5-8 min" },
      { name: "Sarlat", price: "65 €", time: "45-55 min" },
      { name: "Périgueux", price: "55 €", time: "35-45 min" },
      { name: "Lascaux", price: "75 €", time: "50 min-1h" },
    ],
    [
      { text: "Direction Sarlat pour une semaine en Périgord. Le chauffeur nous a recommandé des restaurants.", name: "Andrew B.", initials: "AB", role: "Touriste britannique" },
      { text: "Transfert ultra-rapide vers le centre de Bergerac. 5 minutes montre en main.", name: "Claire M.", initials: "CM", role: "Résidente secondaire" },
      { text: "Service parfait pour notre groupe de 6. Deux taxis coordonnés.", name: "Peter H.", initials: "PH", role: "Touriste" },
    ],
    [
      { question: "Bergerac est-il un bon point d'entrée pour le Périgord ?", answer: "Oui, c'est l'aéroport idéal pour découvrir le Périgord Noir (Sarlat, Lascaux), le vignoble de Bergerac et la vallée de la Dordogne." },
    ],
    ["bordeaux-merignac", "toulouse-blagnac"],
    ["Porte d'entrée du Périgord et de la Dordogne", "Très prisé par les touristes britanniques", "Transferts vers Sarlat et Lascaux"],
  ),

  airport(
    "Carcassonne-Salvaza", "carcassonne-salvaza", "CCF",
    "Carcassonne", "", 43.2160, 2.3063,
    "3 km du centre de Carcassonne", "5-10 min", "12 €",
    ["Terminal unique"],
    ["Ryanair"],
    "400 000",
    [
      { name: "Carcassonne Cité Médiévale", price: "12 €", time: "5-10 min" },
      { name: "Narbonne", price: "55 €", time: "40-50 min" },
      { name: "Toulouse", price: "95 €", time: "1h-1h15" },
      { name: "Canal du Midi", price: "20 €", time: "10-15 min" },
    ],
    [
      { text: "Vol Ryanair de Londres, taxi direct vers la Cité Médiévale. Magique.", name: "Emily W.", initials: "EW", role: "Touriste" },
      { text: "3 minutes de l'aéroport et on y est. Le taxi le plus court de ma vie.", name: "Peter H.", initials: "PH", role: "Britannique" },
      { text: "Transfert vers Narbonne pour visiter les Corbières. Parfait.", name: "Diana K.", initials: "DK", role: "Œnotouriste" },
    ],
    [
      { question: "L'aéroport est-il loin de la Cité Médiévale ?", answer: "Non, seulement 3 km ! En taxi, vous êtes à la Cité en 5-10 minutes pour 12 €." },
    ],
    ["toulouse-blagnac", "perpignan-rivesaltes", "montpellier-mediterranee"],
    ["Ultra-proche de la Cité Médiévale (3 km)", "Porte du Pays Cathare", "Transferts vers le Canal du Midi et les Corbières"],
  ),

  airport(
    "Dinard-Bretagne", "dinard-bretagne", "DNR",
    "Dinard", "", 48.5877, -2.0800,
    "5 km du centre de Dinard", "8-12 min", "15 €",
    ["Terminal unique"],
    ["Ryanair"],
    "150 000",
    [
      { name: "Dinard centre", price: "15 €", time: "8-12 min" },
      { name: "Saint-Malo", price: "20 €", time: "12-18 min" },
      { name: "Dinan", price: "25 €", time: "18-25 min" },
      { name: "Rennes", price: "85 €", time: "55 min-1h10" },
    ],
    [
      { text: "Vol depuis Londres, taxi direct vers Saint-Malo. La Bretagne en quelques minutes.", name: "Andrew B.", initials: "AB", role: "Britannique" },
      { text: "Transfert vers Dinard rapide. Le chauffeur nous a conseillé les meilleurs restaurants.", name: "Emily W.", initials: "EW", role: "Touriste" },
      { text: "Service impeccable pour rejoindre Dinan et ses ruelles médiévales.", name: "Nolwenn R.", initials: "NR", role: "Bretonne" },
    ],
    [
      { question: "Peut-on aller à Saint-Malo depuis Dinard ?", answer: "Oui, Saint-Malo est à seulement 12-18 minutes en taxi (20 €). Plus rapide que le bus ou la vedette." },
    ],
    ["rennes-bretagne", "brest-bretagne"],
    ["Accès direct à Saint-Malo et la Côte d'Émeraude", "Très prisé par les touristes britanniques", "Alternative à Rennes pour le nord de la Bretagne"],
  ),

  airport(
    "Poitiers-Biard", "poitiers-biard", "PIS",
    "Poitiers", "poitiers", 46.5876, 0.3066,
    "4 km du centre de Poitiers", "8-12 min", "15 €",
    ["Terminal unique"],
    ["HOP!", "Air France"],
    "100 000",
    [
      { name: "Poitiers centre", price: "15 €", time: "8-12 min" },
      { name: "Futuroscope", price: "22 €", time: "12-18 min" },
      { name: "Châtellerault", price: "40 €", time: "30-35 min" },
    ],
    [
      { text: "Transfert rapide vers le Futuroscope. En 12 min on y était.", name: "Aurélien B.", initials: "AB", role: "Papa en sortie" },
      { text: "Service fiable pour mes vols professionnels.", name: "Karine D.", initials: "KD", role: "Cadre" },
      { text: "Taxi vers le centre de Poitiers en moins de 10 min. Pratique.", name: "Régine S.", initials: "RS", role: "Poitevine" },
    ],
    [
      { question: "L'aéroport est-il proche du Futuroscope ?", answer: "Oui, le Futuroscope est à 12-18 minutes de l'aéroport (22 € en taxi)." },
    ],
    ["tours-val-de-loire", "la-rochelle-ile-de-re", "limoges-bellegarde"],
    ["Accès rapide au Futuroscope", "Très proche du centre-ville", "Idéal pour les voyageurs d'affaires"],
  ),

  airport(
    "Rodez-Aveyron", "rodez-aveyron", "RDZ",
    "Rodez", "", 44.4079, 2.4827,
    "10 km du centre de Rodez", "12-18 min", "22 €",
    ["Terminal unique"],
    ["HOP!", "Ryanair"],
    "180 000",
    [
      { name: "Rodez centre", price: "22 €", time: "12-18 min" },
      { name: "Conques", price: "45 €", time: "30-40 min" },
      { name: "Millau (viaduc)", price: "75 €", time: "50 min-1h" },
    ],
    [
      { text: "Direction le viaduc de Millau. Le chauffeur a fait un arrêt photo. Magnifique.", name: "Patrick O.", initials: "PO", role: "Touriste" },
      { text: "Transfert vers Conques pour le chemin de Compostelle. Merci TaxiNoir.", name: "Simone D.", initials: "SD", role: "Pèlerine" },
      { text: "Service rapide vers le centre de Rodez et le musée Soulages.", name: "Frédéric W.", initials: "FW", role: "Amateur d'art" },
    ],
    [
      { question: "Peut-on visiter le viaduc de Millau depuis l'aéroport ?", answer: "Oui, le viaduc est à environ 50 min-1h de l'aéroport (75 €). Nos chauffeurs connaissent les meilleurs points de vue." },
    ],
    ["toulouse-blagnac", "clermont-ferrand-auvergne"],
    ["Porte d'entrée de l'Aveyron", "Transferts vers Conques et le viaduc de Millau", "Musée Soulages à Rodez"],
  ),

  airport(
    "Metz-Nancy-Lorraine", "metz-nancy-lorraine", "ETZ",
    "Metz/Nancy", "metz", 48.9822, 6.2513,
    "35 km de Metz, 40 km de Nancy", "30-40 min", "55 €",
    ["Terminal unique"],
    ["Air France", "Transavia", "easyJet"],
    "300 000",
    [
      { name: "Metz centre", price: "55 €", time: "30-40 min" },
      { name: "Nancy centre", price: "60 €", time: "35-45 min" },
      { name: "Gare Lorraine TGV", price: "15 €", time: "5-8 min" },
      { name: "Luxembourg", price: "110 €", time: "1h-1h15" },
    ],
    [
      { text: "Transfert vers la Place Stanislas à Nancy. Le chauffeur était très agréable.", name: "Sébastien L.", initials: "SL", role: "Touriste" },
      { text: "Direction Metz pour le Centre Pompidou. Trajet confortable.", name: "Frédéric W.", initials: "FW", role: "Amateur d'art" },
      { text: "Connexion aéroport – gare TGV Lorraine en 5 min. Parfait.", name: "Marie B.", initials: "MB", role: "Frontalière" },
    ],
    [
      { question: "L'aéroport est-il entre Metz et Nancy ?", answer: "Oui, l'aéroport est situé à mi-chemin, près de la gare TGV Lorraine. Idéal pour desservir les deux villes." },
    ],
    ["strasbourg-entzheim", "bale-mulhouse"],
    ["Dessert Metz et Nancy à parts égales", "Gare TGV Lorraine à côté de l'aéroport", "Transferts vers le Luxembourg"],
  ),

  airport(
    "Chambéry-Savoie Mont Blanc", "chambery-savoie-mont-blanc", "CMF",
    "Chambéry", "chambery", 45.6381, 5.8802,
    "10 km du centre de Chambéry", "12-18 min", "25 €",
    ["Terminal unique"],
    ["easyJet", "Jet2", "TUI"],
    "250 000",
    [
      { name: "Chambéry centre", price: "25 €", time: "12-18 min" },
      { name: "Courchevel", price: "140 €", time: "1h15-1h30" },
      { name: "Méribel", price: "130 €", time: "1h10-1h25" },
      { name: "Val Thorens", price: "150 €", time: "1h30-1h45" },
      { name: "Aix-les-Bains", price: "30 €", time: "15-20 min" },
    ],
    [
      { text: "Vol charter direct vers Courchevel. Taxi avec pneus neige, parfait.", name: "Frédérique B.", initials: "FB", role: "Skieuse" },
      { text: "Transfert vers Méribel confortable. Le chauffeur gère la montagne comme un pro.", name: "Andrew B.", initials: "AB", role: "Skieur britannique" },
      { text: "Service fiable pour accéder aux 3 Vallées depuis Chambéry.", name: "Stéphane A.", initials: "SA", role: "Moniteur de ski" },
    ],
    [
      { question: "L'aéroport est-il adapté aux skieurs ?", answer: "Oui, c'est l'aéroport de référence pour les 3 Vallées (Courchevel, Méribel, Val Thorens). Nos taxis sont équipés montagne en hiver." },
    ],
    ["lyon-saint-exupery", "grenoble-isere", "annecy-haute-savoie"],
    ["Aéroport de référence pour les 3 Vallées", "Véhicules équipés montagne en hiver", "Transferts ski door-to-slope"],
  ),

  airport(
    "Annecy-Haute-Savoie Mont Blanc", "annecy-haute-savoie", "NCY",
    "Annecy", "annecy", 45.9292, 6.0989,
    "5 km du centre d'Annecy", "8-12 min", "18 €",
    ["Terminal unique"],
    ["Air France", "easyJet (saisonnier)"],
    "100 000",
    [
      { name: "Annecy centre", price: "18 €", time: "8-12 min" },
      { name: "Lac d'Annecy (Talloires)", price: "25 €", time: "18-25 min" },
      { name: "La Clusaz", price: "55 €", time: "35-45 min" },
      { name: "Genève aéroport", price: "95 €", time: "45-55 min" },
    ],
    [
      { text: "Transfert vers les bords du lac. En 10 minutes, les pieds dans l'eau.", name: "Éric L.", initials: "EL", role: "Touriste" },
      { text: "Direction La Clusaz pour les vacances au ski. Service parfait.", name: "Isabelle K.", initials: "IK", role: "Skieuse" },
      { text: "Petit aéroport mais taxi TaxiNoir toujours disponible.", name: "Roger B.", initials: "RB", role: "Annécien" },
    ],
    [
      { question: "Mieux vaut-il arriver à Annecy ou Genève ?", answer: "Si un vol direct existe vers Annecy, c'est plus rapide. Sinon, Genève offre plus de vols et n'est qu'à 45-55 min en taxi." },
    ],
    ["chambery-savoie-mont-blanc", "lyon-saint-exupery", "grenoble-isere"],
    ["Au bord du lac d'Annecy", "Alternative à Genève pour la Haute-Savoie", "Transferts vers les stations des Aravis"],
  ),

  airport(
    "Lorient-Bretagne Sud", "lorient-bretagne-sud", "LRT",
    "Lorient", "", 47.7606, -3.4400,
    "8 km du centre de Lorient", "10-15 min", "18 €",
    ["Terminal unique"],
    ["HOP!", "Chalair"],
    "150 000",
    [
      { name: "Lorient centre", price: "18 €", time: "10-15 min" },
      { name: "Quiberon", price: "55 €", time: "40-50 min" },
      { name: "Carnac", price: "40 €", time: "25-35 min" },
      { name: "Vannes", price: "55 €", time: "35-45 min" },
    ],
    [
      { text: "Transfert vers Quiberon pour le bateau Belle-Île. Parfait.", name: "Yves G.", initials: "YG", role: "Breton" },
      { text: "Direction Carnac pour les mégalithes. Chauffeur connaisseur.", name: "Nolwenn R.", initials: "NR", role: "Touriste" },
      { text: "Service fiable pour le Festival Interceltique.", name: "Jean-Pierre M.", initials: "JPM", role: "Festivalier" },
    ],
    [
      { question: "L'aéroport est-il près de Carnac ?", answer: "Carnac est à 25-35 minutes en taxi (40 €). Quiberon et l'embarquement pour Belle-Île à 40-50 minutes." },
    ],
    ["rennes-bretagne", "brest-bretagne", "quimper-cornouaille", "nantes-atlantique"],
    ["Dessert le Morbihan et la Bretagne Sud", "Transferts vers Quiberon et Belle-Île", "Populaire lors du Festival Interceltique"],
  ),

  airport(
    "Avignon-Provence", "avignon-provence", "AVN",
    "Avignon", "avignon", 43.9073, 4.9019,
    "8 km du centre d'Avignon", "12-15 min", "20 €",
    ["Terminal unique"],
    ["Flybe (saisonnier)"],
    "80 000",
    [
      { name: "Avignon centre (Palais des Papes)", price: "20 €", time: "12-15 min" },
      { name: "Gare TGV Avignon", price: "15 €", time: "8-10 min" },
      { name: "Lubéron (Gordes)", price: "65 €", time: "40-50 min" },
      { name: "Orange", price: "35 €", time: "25-30 min" },
    ],
    [
      { text: "Direction le Lubéron depuis l'aéroport. Le chauffeur connaissait les plus beaux villages.", name: "Diana K.", initials: "DK", role: "Touriste" },
      { text: "Transfert rapide vers le Palais des Papes pour le Festival.", name: "Laure P.", initials: "LP", role: "Festivalière" },
      { text: "Service parfait pour rejoindre la gare TGV et mon train.", name: "Henri M.", initials: "HM", role: "Voyageur" },
    ],
    [
      { question: "L'aéroport d'Avignon est-il ouvert toute l'année ?", answer: "L'aéroport a un trafic principalement saisonnier. Nos taxis assurent les transferts toute l'année, y compris vers la gare TGV." },
    ],
    ["marseille-provence", "nimes-garons", "montpellier-mediterranee"],
    ["Au cœur de la Provence", "Transferts vers le Lubéron et les villages provençaux", "Connexion avec la gare TGV Avignon"],
  ),

  airport(
    "Nîmes-Garons", "nimes-garons", "FNI",
    "Nîmes", "nimes", 43.7574, 4.4163,
    "12 km du centre de Nîmes", "15-20 min", "25 €",
    ["Terminal unique"],
    ["Ryanair"],
    "200 000",
    [
      { name: "Nîmes centre (Arènes)", price: "25 €", time: "15-20 min" },
      { name: "Pont du Gard", price: "35 €", time: "25-30 min" },
      { name: "Uzès", price: "40 €", time: "30-35 min" },
      { name: "Camargue (Saintes-Maries)", price: "65 €", time: "45-55 min" },
    ],
    [
      { text: "Vol Ryanair, taxi vers les Arènes de Nîmes. Chauffeur qui connaît l'histoire romaine.", name: "Pascal D.", initials: "PD", role: "Passionné d'histoire" },
      { text: "Transfert vers le Pont du Gard. Magnifique excursion.", name: "Agnès S.", initials: "AS", role: "Touriste" },
      { text: "Direction la Camargue. Le chauffeur nous a donné les meilleures adresses.", name: "Mireille V.", initials: "MV", role: "Vacancière" },
    ],
    [
      { question: "Peut-on visiter le Pont du Gard en taxi ?", answer: "Oui, le Pont du Gard est à 25-30 minutes de l'aéroport (35 €). Idéal pour une excursion à la journée." },
    ],
    ["montpellier-mediterranee", "avignon-provence", "marseille-provence"],
    ["Porte de la Camargue et du patrimoine romain", "Transferts vers le Pont du Gard et Uzès", "Accès aux festivités nîmoises (féria)"],
  ),

  airport(
    "Deauville-Normandie", "deauville-normandie", "DOL",
    "Deauville", "", 49.3653, 0.1543,
    "8 km du centre de Deauville", "10-15 min", "20 €",
    ["Terminal unique"],
    ["Chalair", "CityJet (saisonnier)"],
    "100 000",
    [
      { name: "Deauville centre", price: "20 €", time: "10-15 min" },
      { name: "Trouville", price: "22 €", time: "12-18 min" },
      { name: "Honfleur", price: "30 €", time: "18-25 min" },
      { name: "Cabourg", price: "35 €", time: "20-30 min" },
    ],
    [
      { text: "Direction les planches de Deauville. Taxi rapide et élégant.", name: "Charlotte V.", initials: "CV", role: "Parisienne" },
      { text: "Transfert vers Honfleur pour le week-end. Service parfait.", name: "Roberto F.", initials: "RF", role: "Touriste" },
      { text: "Taxi pour le Festival du Cinéma Américain. Impeccable.", name: "Léa M.", initials: "LM", role: "Journaliste" },
    ],
    [
      { question: "Deauville est-il loin de Honfleur ?", answer: "Honfleur est à 18-25 minutes en taxi depuis l'aéroport (30 €). Un des plus beaux ports de Normandie." },
    ],
    ["caen-carpiquet"],
    ["Porte de la Côte Fleurie normande", "Transferts vers Deauville, Honfleur et Cabourg", "Populaire pour les événements (Festival, courses hippiques)"],
  ),

  airport(
    "Dole-Jura", "dole-jura", "DLE",
    "Dole", "", 47.0390, 5.4273,
    "5 km du centre de Dole", "8-12 min", "15 €",
    ["Terminal unique"],
    ["Ryanair", "TUI"],
    "200 000",
    [
      { name: "Dole centre", price: "15 €", time: "8-12 min" },
      { name: "Besançon", price: "55 €", time: "35-45 min" },
      { name: "Dijon", price: "55 €", time: "40-50 min" },
      { name: "Arc-et-Senans", price: "25 €", time: "15-20 min" },
    ],
    [
      { text: "Alternative à Genève pour le Jura. Taxi rapide et pas cher.", name: "Klaus M.", initials: "KM", role: "Randonneur" },
      { text: "Direction Besançon via la campagne jurassienne. Trajet agréable.", name: "Hervé M.", initials: "HM", role: "Voyageur" },
      { text: "Vol Ryanair, taxi immédiat. Service impeccable.", name: "Peter H.", initials: "PH", role: "Touriste" },
    ],
    [
      { question: "Dole-Jura dessert-il Besançon et Dijon ?", answer: "Oui, l'aéroport est à mi-chemin entre Besançon (35-45 min) et Dijon (40-50 min). Idéal pour les deux villes." },
    ],
    ["bale-mulhouse", "lyon-saint-exupery"],
    ["Entre Besançon et Dijon", "Porte d'entrée du Jura et de la Bourgogne", "Alternative économique aux grands aéroports"],
  ),

  airport(
    "Angoulême-Cognac", "angouleme-cognac", "ANG",
    "Angoulême", "", 45.7292, 0.2215,
    "10 km du centre d'Angoulême", "12-18 min", "22 €",
    ["Terminal unique"],
    ["Ryanair (saisonnier)"],
    "50 000",
    [
      { name: "Angoulême centre", price: "22 €", time: "12-18 min" },
      { name: "Cognac", price: "35 €", time: "25-30 min" },
      { name: "Jarnac", price: "30 €", time: "20-25 min" },
    ],
    [
      { text: "Direction les maisons de Cognac depuis l'aéroport. Le chauffeur est un vrai connaisseur.", name: "Andrew B.", initials: "AB", role: "Amateur de Cognac" },
      { text: "Transfert rapide vers le Festival de la BD d'Angoulême.", name: "Emily W.", initials: "EW", role: "Fan de BD" },
      { text: "Service parfait pour notre séjour en Charente.", name: "Claire M.", initials: "CM", role: "Touriste" },
    ],
    [
      { question: "Peut-on visiter les maisons de Cognac en taxi ?", answer: "Oui, Cognac est à 25-30 minutes de l'aéroport (35 €). Nos chauffeurs proposent aussi des mises à disposition pour visiter plusieurs maisons." },
    ],
    ["bordeaux-merignac", "limoges-bellegarde", "poitiers-biard", "la-rochelle-ile-de-re"],
    ["Porte du pays du Cognac", "Transferts vers les distilleries de Cognac et Jarnac", "Populaire lors du Festival de la BD"],
  ),

  airport(
    "Agen-La Garenne", "agen-la-garenne", "AGF",
    "Agen", "", 44.1747, 0.5906,
    "4 km du centre d'Agen", "6-10 min", "12 €",
    ["Terminal unique"],
    ["HOP!"],
    "50 000",
    [
      { name: "Agen centre", price: "12 €", time: "6-10 min" },
      { name: "Moissac", price: "35 €", time: "25-30 min" },
      { name: "Villeneuve-sur-Lot", price: "35 €", time: "25-35 min" },
    ],
    [
      { text: "Transfert ultra-rapide vers le centre d'Agen. 6 minutes.", name: "Pascal D.", initials: "PD", role: "Agenais" },
      { text: "Service fiable pour mes vols professionnels vers Paris.", name: "Karine D.", initials: "KD", role: "Cadre" },
      { text: "Taxi vers Moissac pour visiter le cloître. Recommandé.", name: "Richard S.", initials: "RS", role: "Touriste" },
    ],
    [
      { question: "L'aéroport d'Agen est-il ouvert toute l'année ?", answer: "Oui, avec des vols réguliers vers Paris-CDG. Nos taxis assurent les transferts pour tous les vols." },
    ],
    ["toulouse-blagnac", "bordeaux-merignac", "bergerac-dordogne-perigord"],
    ["Ultra-proche du centre-ville", "Vols réguliers Paris-Agen", "Transferts vers le Lot-et-Garonne"],
  ),

  airport(
    "Lannion-Côte de Granit Rose", "lannion-cote-de-granit-rose", "LAI",
    "Lannion", "", 48.7554, -3.4696,
    "5 km du centre de Lannion", "8-12 min", "15 €",
    ["Terminal unique"],
    ["HOP!", "Chalair"],
    "80 000",
    [
      { name: "Lannion centre", price: "15 €", time: "8-12 min" },
      { name: "Perros-Guirec", price: "22 €", time: "15-20 min" },
      { name: "Trégastel", price: "25 €", time: "18-25 min" },
      { name: "Ploumanac'h", price: "25 €", time: "18-22 min" },
    ],
    [
      { text: "Direction la Côte de Granit Rose. Paysage incroyable dès le taxi.", name: "Yves G.", initials: "YG", role: "Touriste" },
      { text: "Transfert vers Perros-Guirec rapide. Le chauffeur connaît tous les chemins.", name: "Nolwenn R.", initials: "NR", role: "Bretonne" },
      { text: "Service parfait pour rejoindre le centre de recherche de Lannion.", name: "Jean-Pierre M.", initials: "JPM", role: "Ingénieur" },
    ],
    [
      { question: "La Côte de Granit Rose est-elle loin de l'aéroport ?", answer: "Non, Perros-Guirec et la Côte de Granit Rose sont à 15-25 minutes en taxi. Un des plus beaux littoraux de France." },
    ],
    ["brest-bretagne", "rennes-bretagne", "dinard-bretagne"],
    ["Accès direct à la Côte de Granit Rose", "Dessert le pôle technologique de Lannion", "Petit aéroport, service personnalisé"],
  ),

  airport(
    "Quimper-Cornouaille", "quimper-cornouaille", "UIP",
    "Quimper", "", 47.9740, -4.1678,
    "7 km du centre de Quimper", "10-15 min", "18 €",
    ["Terminal unique"],
    ["HOP!", "Chalair"],
    "100 000",
    [
      { name: "Quimper centre", price: "18 €", time: "10-15 min" },
      { name: "Bénodet", price: "22 €", time: "15-20 min" },
      { name: "Concarneau", price: "30 €", time: "20-25 min" },
      { name: "Pont-Aven", price: "28 €", time: "18-25 min" },
    ],
    [
      { text: "Transfert vers Bénodet pour les vacances. Le chauffeur sentait la Bretagne.", name: "Jean-Pierre M.", initials: "JPM", role: "Vacancier" },
      { text: "Direction Concarneau et sa ville close. Service impeccable.", name: "Nolwenn R.", initials: "NR", role: "Touriste" },
      { text: "Taxi fiable pour le Festival de Cornouaille.", name: "Yves G.", initials: "YG", role: "Festivalier" },
    ],
    [
      { question: "L'aéroport de Quimper dessert-il Concarneau ?", answer: "Oui, Concarneau est à 20-25 minutes (30 €). Pont-Aven, la cité des peintres, à 18-25 minutes." },
    ],
    ["brest-bretagne", "lorient-bretagne-sud", "rennes-bretagne"],
    ["Porte de la Cornouaille bretonne", "Transferts vers les stations balnéaires du Finistère Sud", "Festival de Cornouaille"],
  ),

  airport(
    "Castres-Mazamet", "castres-mazamet", "DCM",
    "Castres", "", 43.5563, 2.2892,
    "8 km du centre de Castres", "10-15 min", "18 €",
    ["Terminal unique"],
    ["HOP!"],
    "50 000",
    [
      { name: "Castres centre", price: "18 €", time: "10-15 min" },
      { name: "Mazamet", price: "22 €", time: "15-20 min" },
      { name: "Albi", price: "55 €", time: "40-50 min" },
      { name: "Toulouse", price: "95 €", time: "1h-1h15" },
    ],
    [
      { text: "Vol vers Paris rapide, taxi vers le centre de Castres en 10 min.", name: "Pascal D.", initials: "PD", role: "Cadre, Castres" },
      { text: "Transfert vers Albi et le musée Toulouse-Lautrec. Recommandé.", name: "Sandrine L.", initials: "SL", role: "Touriste" },
      { text: "Service fiable pour mes déplacements professionnels.", name: "Michel R.", initials: "MR", role: "Industriel" },
    ],
    [
      { question: "L'aéroport de Castres dessert-il Albi ?", answer: "Oui, Albi est à 40-50 minutes (55 €). Une bonne alternative à Toulouse pour le Tarn." },
    ],
    ["toulouse-blagnac", "carcassonne-salvaza"],
    ["Dessert le bassin castrais et le Tarn", "Alternative à Toulouse pour le sud du Tarn", "Transferts vers Albi et la Montagne Noire"],
  ),
  airport(
    "Aurillac-Tronquières", "aurillac-tronquieres", "AUR",
    "Aurillac", "", 44.8914, 2.4219,
    "3 km du centre d'Aurillac", "5-8 min", "12 €",
    ["Terminal unique"],
    ["HOP!"],
    "50 000",
    [
      { name: "Aurillac centre", price: "12 €", time: "5-8 min" },
      { name: "Salers", price: "45 €", time: "35-40 min" },
      { name: "Le Lioran", price: "40 €", time: "30-35 min" },
    ],
    [
      { text: "Vol direct depuis Paris, taxi immédiat vers le centre. Idéal.", name: "Didier C.", initials: "DC", role: "Cantalien" },
      { text: "Direction Salers pour les vacances. Paysages magnifiques.", name: "Hélène A.", initials: "HA", role: "Touriste" },
      { text: "Service fiable pour mes déplacements pro.", name: "Xavier B.", initials: "XB", role: "Cadre" },
    ],
    [
      { question: "L'aéroport d'Aurillac est-il proche du centre ?", answer: "Oui, seulement 3 km. En taxi, vous êtes au centre-ville en 5-8 minutes pour 12 €." },
    ],
    ["clermont-ferrand-auvergne", "rodez-aveyron"],
    ["Ultra-proche du centre (3 km)", "Porte du Cantal et des volcans d'Auvergne", "Vols directs Paris-Aurillac"],
  ),

  airport(
    "Le Puy-Loudes", "le-puy-loudes", "LPY",
    "Le Puy-en-Velay", "", 45.0807, 3.7629,
    "10 km du centre du Puy", "12-18 min", "22 €",
    ["Terminal unique"],
    ["HOP!"],
    "30 000",
    [
      { name: "Le Puy-en-Velay centre", price: "22 €", time: "12-18 min" },
      { name: "Cathédrale du Puy", price: "20 €", time: "10-15 min" },
      { name: "Saint-Jacques départ GR65", price: "22 €", time: "12-18 min" },
    ],
    [
      { text: "Vol depuis Paris pour commencer le chemin de Compostelle. Taxi direct au Puy.", name: "Simone D.", initials: "SD", role: "Pèlerine" },
      { text: "Transfert rapide vers la vieille ville. Chauffeur sympa.", name: "Patrick O.", initials: "PO", role: "Touriste" },
      { text: "Service pratique pour rejoindre la Haute-Loire.", name: "Frédéric W.", initials: "FW", role: "Voyageur" },
    ],
    [
      { question: "L'aéroport dessert-il les pèlerins de Compostelle ?", answer: "Oui, beaucoup de pèlerins arrivent par avion et prennent un taxi pour rejoindre la cathédrale du Puy, point de départ de la Via Podiensis (GR65)." },
    ],
    ["clermont-ferrand-auvergne", "lyon-saint-exupery"],
    ["Point de départ du chemin de Compostelle", "Dessert la Haute-Loire et le Velay", "Vols directs Paris – Le Puy"],
  ),
];

// ─── Helpers ────────────────────────────────────────────────

export function getAirportBySlug(slug: string): Airport | undefined {
  return airports.find((a) => a.slug === slug);
}

export function getNearbyAirports(ap: Airport): Airport[] {
  return ap.nearbyAirports
    .map((slug) => getAirportBySlug(slug))
    .filter((a): a is Airport => a !== undefined);
}

export const popularAirports = airports.filter((a) =>
  ["paris-charles-de-gaulle", "paris-orly", "nice-cote-d-azur", "lyon-saint-exupery",
   "marseille-provence", "toulouse-blagnac", "bordeaux-merignac", "nantes-atlantique"].includes(a.slug)
);

export const airportServices = [
  {
    icon: "mdi:airplane",
    title: "Transfert arrivée",
    description: "Votre chauffeur vous attend en zone d'arrivée avec une pancarte à votre nom. Suivi de vol en temps réel.",
  },
  {
    icon: "solar:login-3-linear",
    title: "Transfert départ",
    description: "Prise en charge à domicile ou à l'hôtel, dépose au terminal exact de votre vol.",
  },
  {
    icon: "solar:users-group-rounded-linear",
    title: "Navette groupe",
    description: "Véhicules spacieux pour les familles et groupes. Monospace et van jusqu'à 8 passagers.",
  },
  {
    icon: "solar:star-linear",
    title: "Business & VIP",
    description: "Véhicules premium, chauffeur en costume, bouteille d'eau, journaux. Service haut de gamme.",
  },
  {
    icon: "solar:clock-circle-linear",
    title: "Mise à disposition",
    description: "Chauffeur à votre disposition pour la journée : transfert + attente + retour.",
  },
  {
    icon: "solar:heart-pulse-linear",
    title: "Transport médical",
    description: "Transfert adapté vers ou depuis l'aéroport pour les personnes à mobilité réduite.",
  },
];
