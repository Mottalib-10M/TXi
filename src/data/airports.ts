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

export interface AirportI18n {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  description: string;
  whyUs: { title: string; desc: string }[];
  testimonials: AirportTestimonial[];
  faq: AirportFAQ[];
  practicalInfo: string[];
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
  destinations: AirportDestination[];
  nearbyAirports: string[];
  annualPassengers: string;
  i18n: {
    fr: AirportI18n;
    en: AirportI18n;
  };
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
    destinations,
    nearbyAirports,
    i18n: {
      fr: {
        metaTitle: name.length <= 14
          ? `Taxi Aéroport ${name} — Transfert forfaitaire 24/7`
          : name.length <= 21
            ? `Taxi ${name} — Transfert forfaitaire 24h/24`
            : `Taxi ${name} — Transfert forfaitaire`,
        metaDescription: name.length <= 18
          ? `Réservez votre taxi pour l'aéroport ${name}. Transfert ponctuel, tarifs forfaitaires garantis, suivi des vols et aide aux bagages. Disponible 24h/24.`
          : name.length <= 27
            ? `Réservez votre taxi pour l'aéroport ${name}. Forfait garanti, suivi des vols en temps réel, aide aux bagages et accueil en zone d'arrivée.`
            : `Taxi ${name}. Transfert aéroport au forfait garanti, suivi des vols en temps réel, aide aux bagages et accueil en zone d'arrivée.`,
        heroTitle: `Taxi Aéroport ${name}`,
        heroSubtitle: `Transfert taxi vers et depuis l'aéroport ${name} (${iata}). Tarifs forfaitaires, chauffeur qui vous attend en zone d'arrivée, suivi des vols en temps réel.`,
        intro: `Besoin d'un taxi pour l'aéroport ${name} ? TaxiNeo vous propose un service de transfert professionnel, ponctuel et au meilleur prix. Nos chauffeurs suivent votre vol en temps réel et vous attendent avec une pancarte nominative en zone d'arrivée. En cas de retard de votre vol, l'attente est gratuite.`,
        description: `À l'aéroport ${name}, votre taxi vous attend directement en zone d'arrivée — pas en parking payant comme les VTC. Nos chauffeurs bénéficient des voies réservées taxi pour un trajet plus rapide. Service disponible 24h/24 pour les vols tôt le matin ou tard le soir, avec possibilité de réservation à l'avance pour ne jamais rater votre vol.`,
        whyUs: [],
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
        practicalInfo,
      },
      en: {
        metaTitle: name.length <= 14
          ? `Taxi ${name} Airport — 24/7 fixed-fare transfers`
          : name.length <= 21
            ? `Taxi ${name} — Fixed-fare airport transfers`
            : `Taxi ${name} — Fixed-fare transfers`,
        metaDescription: name.length <= 18
          ? `Book your taxi to ${name} Airport. Reliable transfer, guaranteed fixed fares, real-time flight tracking, luggage assistance and meet and greet. 24/7.`
          : name.length <= 27
            ? `Book your taxi to ${name}: fixed fares, flight tracking, luggage help and personalised meet and greet at the airport. Reserve online 24/7.`
            : `Book a taxi to ${name}. Fixed-fare airport transfer, flight tracking, luggage help and meet and greet on arrival. Reserve 24/7.`,
        heroTitle: `Taxi ${name} Airport`,
        heroSubtitle: `Taxi transfer to and from ${name} Airport (${iata}). Fixed fares, driver waiting in the arrivals area, real-time flight tracking.`,
        intro: `Need a taxi to ${name} Airport? TaxiNeo offers a professional, punctual transfer service at the best price. Our drivers track your flight in real time and greet you with a name board in the arrivals area. If your flight is delayed, the waiting time is free of charge.`,
        description: `At ${name} Airport, your taxi picks you up directly in the arrivals area — not in a paid car park like ride-hailing services. Our drivers use reserved taxi lanes for a faster journey. Available 24/7 for early morning or late night flights, with advance booking to ensure you never miss your flight.`,
        whyUs: [],
        testimonials,
        faq: [
          {
            question: `How do I book a taxi to ${name} Airport?`,
            answer: `Use the booking form on this page. Enter your pickup (or drop-off) address, select your time and confirm. You will receive a confirmation email with your driver's details.`,
          },
          {
            question: `Does the driver wait for me on arrival at ${name}?`,
            answer: `Yes, your driver waits in the arrivals area with a sign bearing your name. They track your flight in real time and adjust their arrival time. In case of delay, waiting is free for up to 45 minutes.`,
          },
          {
            question: `Are the fares fixed for ${name} Airport?`,
            answer: `Yes, all our airport transfers are at a fixed rate. The price is set at booking and does not change, regardless of traffic or actual travel time.`,
          },
          ...extraFaq,
        ],
        practicalInfo,
      },
    },
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
      { text: "Je prends TaxiNeo à chaque vol depuis Orly. Toujours fiable, même à 4h du matin.", name: "Farid A.", initials: "FA", role: "Entrepreneur" },
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
      { question: "Le Rhônexpress est-il plus avantageux ?", answer: "Le Rhônexpress coûte 16,90 €/personne. Dès 2 passagers, le taxi TaxiNeo devient plus économique, avec l'avantage du porte-à-porte et de l'aide aux bagages." },
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
      { text: "Arrivée tardive à 23h, le chauffeur était présent. Trajet vers le Vieux-Port impeccable. Merci TaxiNeo.", name: "Karim B.", initials: "KB", role: "Marseillais" },
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
      { text: "Vol Ryanair arrivé à 23h30, aucun bus. Le taxi TaxiNeo m'a sauvé la mise. Chauffeur efficace.", name: "Pierre V.", initials: "PV", role: "Voyageur" },
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
      { question: "Y a-t-il un train pour le centre depuis Entzheim ?", answer: "Oui, mais le taxi TaxiNeo est plus rapide (15 min vs 25 min) et vous dépose devant votre destination. Idéal avec des bagages." },
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
      { question: "L'aéroport de Rennes dessert-il Saint-Malo ?", answer: "Oui, un taxi TaxiNeo vous conduit de l'aéroport à Saint-Malo en 50 min-1h pour environ 85 €." },
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
      { question: "L'aéroport est-il bien desservi par les taxis ?", answer: "Oui, TaxiNeo couvre l'aéroport de Clermont-Ferrand avec des chauffeurs disponibles pour tous les vols, même tôt le matin." },
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
      { text: "Petit aéroport mais taxi TaxiNeo toujours disponible. Direction Collioure.", name: "Carmen S.", initials: "CS", role: "Touriste" },
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
      { text: "L'aéroport est minuscule mais le taxi TaxiNeo était là. Direction l'Île de Ré !", name: "Mathilde F.", initials: "MF", role: "Vacancière" },
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
      { text: "Transfert vers Conques pour le chemin de Compostelle. Merci TaxiNeo.", name: "Simone D.", initials: "SD", role: "Pèlerine" },
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
      { text: "Petit aéroport mais taxi TaxiNeo toujours disponible.", name: "Roger B.", initials: "RB", role: "Annécien" },
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
// ─── Unique airport content ──────────────────────────────────

const AIRPORT_CONTENT: Record<string, { fr: { intro: string; description: string; metaDescription: string; heroSubtitle: string; whyUs: { title: string; desc: string }[] }; en: { intro: string; description: string; metaDescription: string; heroSubtitle: string; whyUs: { title: string; desc: string }[] } }> = {
  "paris-charles-de-gaulle": {
    fr: {
      intro: "L'aéroport Paris-Charles de Gaulle (CDG) est le premier aéroport de France et l'un des plus grands hubs internationaux d'Europe. Avec ses 8 terminaux — du Terminal 1 historique aux halls du Terminal 2 (A à F) et au Terminal 3 dédié aux charters — il accueille plus de 67 millions de passagers par an. TaxiNeo vous garantit un prix fixe réglementé (56 € rive droite, 65 € rive gauche) et un chauffeur qui vous attend avec une pancarte nominative directement en zone d'arrivée, quel que soit votre terminal.",
      description: "À CDG, votre taxi TaxiNeo vous récupère en zone d'arrivée — pas en parking payant comme les VTC qui doivent stationner au P1 ou au PCD. Nos chauffeurs empruntent les voies réservées taxi sur l'A1 et l'A3 pour un trajet plus rapide vers Paris. Le service fonctionne 24h/24, idéal pour les longs-courriers qui atterrissent tôt le matin ou tard le soir. Le chauffeur suit votre vol en temps réel et utilise le CDGVAL (la navette inter-terminaux gratuite) pour se positionner au bon terminal. Réservez à l'avance pour ne jamais rater votre vol au départ.",
      metaDescription: "Taxi aéroport CDG : forfait réglementé 56-65 €, accueil en zone arrivée 8 terminaux, suivi de vol 24h/24. Réservez votre transfert Paris-Roissy en ligne.",
      heroSubtitle: "Premier hub européen avec 67 millions de passagers par an, Paris-CDG mérite un transfert à la hauteur. Votre chauffeur TaxiNeo vous attend en zone d'arrivée avec pancarte nominative, suit votre vol en temps réel et emprunte les voies réservées taxi sur l'A1 pour un trajet fluide vers Paris — prix fixe garanti, disponible 24h/24.",
      whyUs: [
        { title: "Voie express A1 et A3 réservée", desc: "Nos chauffeurs empruntent les voies taxi réservées sur l'A1 et l'A3, évitant les bouchons du Bourget pour rejoindre Paris en 35 min même aux heures de pointe." },
        { title: "Expert des 3 terminaux CDG", desc: "Nos chauffeurs connaissent la topographie complexe de CDG : accès direct T1, T2 (A-G) et T3, zones de prise en charge officielle et sorties bagages de chaque hall." },
        { title: "Correspondance TGV en gare CDG", desc: "Transfert rapide entre les terminaux et la gare TGV CDG 2 pour vos correspondances Thalys, Eurostar et TGV Nord/Est, avec suivi horaire en temps réel." },
      ],
    },
    en: {
      intro: "Paris-Charles de Gaulle Airport (CDG) is France's largest airport and one of Europe's busiest international hubs. With 8 terminals — from the iconic Terminal 1 to the sprawling Terminal 2 halls (A through F) and the charter-focused Terminal 3 — it handles over 67 million passengers a year. TaxiNeo guarantees a regulated fixed fare (56 EUR to the Right Bank, 65 EUR to the Left Bank) and a driver waiting with a name board directly in the arrivals area, regardless of your terminal.",
      description: "At CDG, your TaxiNeo taxi picks you up in the arrivals area — not in a paid car park like ride-hailing services that must wait at P1 or PCD. Our drivers use reserved taxi lanes on the A1 and A3 motorways for a faster journey into Paris. The service runs 24/7, perfect for long-haul flights landing early in the morning or late at night. Your driver tracks your flight in real time and uses the free CDGVAL shuttle between terminals to be at the right pickup point. Book in advance to never miss your departure flight.",
      metaDescription: "CDG airport taxi: regulated fixed fare 56-65 EUR, pickup in arrivals across all 8 terminals, 24/7 flight tracking. Book your Paris-Roissy transfer online.",
      heroSubtitle: "Europe's leading hub handling 67 million passengers a year, Paris-CDG deserves a seamless transfer. Your TaxiNeo driver meets you in the arrivals hall with a name board, tracks your flight in real time and uses reserved taxi lanes on the A1 for a smooth ride into Paris — guaranteed fixed fare, available around the clock.",
      whyUs: [
        { title: "Reserved A1/A3 express lanes", desc: "Our drivers use reserved taxi lanes on the A1 and A3 motorways, bypassing Le Bourget congestion to reach Paris in 35 min even during rush hour." },
        { title: "CDG 3-terminal expertise", desc: "Our drivers know the complex CDG layout: direct access to T1, T2 (A-G) and T3, official pickup zones and baggage exits for each hall." },
        { title: "TGV connection at CDG station", desc: "Quick transfer between terminals and CDG 2 TGV station for Thalys, Eurostar and TGV Nord/Est connections, with real-time schedule tracking." },
      ],
    }
  },
  "paris-orly": {
    fr: {
      intro: "L'aéroport Paris-Orly (ORY) est le deuxième aéroport parisien, situé à seulement 14 km au sud de Paris. Rénové et réorganisé en quatre secteurs — Orly 1, 2, 3 et 4 — il accueille 33 millions de passagers par an sur des vols domestiques, européens et vers le Maghreb, opérés par Air France, Transavia, easyJet et Vueling notamment. TaxiNeo vous propose un forfait réglementé de 38 € vers la rive gauche et 44 € vers la rive droite, avec un chauffeur présent en zone d'arrivée dès votre atterrissage.",
      description: "À Orly, votre taxi vous attend directement en zone de récupération des bagages côté arrivée — pas besoin de marcher jusqu'au parking P0 comme pour un VTC. Nos chauffeurs utilisent les voies réservées taxi sur l'A6 et l'A106 (l'Orlyval routier) pour rejoindre Paris rapidement. Disponible 24h/24, le service couvre aussi les vols de nuit et les départs matinaux vers Orly 4 (anciennement Orly Sud). Plus proche de Paris que CDG, Orly est idéal pour un transfert rapide. Réservez à l'avance pour que votre chauffeur soit positionné au bon secteur.",
      metaDescription: "Taxi Orly : forfait 38-44 €, prise en charge en zone arrivée secteurs 1 à 4, voies réservées A6. Transfert Paris-Orly rapide, réservation en ligne 24h/24.",
      heroSubtitle: "À 14 km de Paris, Orly est l'aéroport le plus proche de la capitale avec 33 millions de voyageurs par an. Votre chauffeur TaxiNeo se positionne au bon secteur grâce au suivi de vol, vous récupère en zone d'arrivée et rejoint Paris par les voies réservées de l'A6 — forfait réglementé, service de nuit inclus.",
      whyUs: [
        { title: "Voies réservées A6 et A106", desc: "Nos chauffeurs empruntent les couloirs taxi de l'A6 et l'A106 (Orlyval routier), contournant le trafic de Rungis pour un trajet de 25 min vers la rive gauche." },
        { title: "Maîtrise des 4 secteurs Orly", desc: "Après la rénovation, Orly est divisé en secteurs 1 à 4. Nos chauffeurs identifient le bon point de prise en charge grâce au numéro de votre vol et au suivi en temps réel." },
        { title: "Liaison OrlyVal et tramway T7", desc: "Si votre destination est en banlieue sud, nos chauffeurs coordonnent avec les horaires OrlyVal ou T7 pour un trajet combiné optimal vers Villejuif ou Antony." },
      ],
    },
    en: {
      intro: "Paris-Orly Airport (ORY) is the second-largest Parisian airport, located just 14 km south of the city centre. Renovated and reorganised into four sectors — Orly 1, 2, 3 and 4 — it serves 33 million passengers a year on domestic, European and North African routes operated by Air France, Transavia, easyJet and Vueling among others. TaxiNeo offers a regulated fixed fare of 38 EUR to the Left Bank and 44 EUR to the Right Bank, with a driver present in the arrivals area as soon as you land.",
      description: "At Orly, your taxi waits directly in the baggage reclaim arrivals zone — no need to walk to the P0 car park as you would for a ride-hailing service. Our drivers use reserved taxi lanes on the A6 and A106 motorways for a swift journey into Paris. Available 24/7, the service covers night flights and early morning departures from Orly 4 (formerly Orly Sud). Closer to Paris than CDG, Orly is ideal for a quick transfer. Book ahead so your driver is positioned at the correct sector.",
      metaDescription: "Orly airport taxi: fixed fare 38-44 EUR, pickup in arrivals across sectors 1-4, reserved A6 lanes. Fast Paris-Orly transfer, book online 24/7.",
      heroSubtitle: "Just 14 km from Paris, Orly is the closest airport to the capital serving 33 million travellers a year. Your TaxiNeo driver positions at the right sector using flight tracking, collects you in arrivals and reaches Paris via reserved A6 lanes — regulated fixed fare with night service included.",
      whyUs: [
        { title: "Reserved A6 and A106 lanes", desc: "Our drivers use dedicated taxi lanes on the A6 and A106 (road Orlyval), bypassing Rungis traffic for a 25-min ride to the Left Bank." },
        { title: "Mastery of all 4 Orly sectors", desc: "After renovation, Orly is split into sectors 1-4. Our drivers pinpoint the right pickup spot using your flight number and real-time tracking." },
        { title: "OrlyVal and T7 tram connection", desc: "For southern suburb destinations, our drivers coordinate with OrlyVal or T7 tram schedules for an optimal combined journey to Villejuif or Antony." },
      ],
    }
  },
  "nice-cote-d-azur": {
    fr: {
      intro: "L'aéroport Nice Côte d'Azur (NCE) est le deuxième aéroport de France hors Île-de-France, avec 14 millions de passagers par an répartis entre le Terminal 1 et le Terminal 2. Situé à seulement 7 km du centre de Nice, en bord de Méditerranée, il dessert toute la Riviera française — de Cannes à Monaco. TaxiNeo vous propose un transfert à prix fixe avec un chauffeur local qui connaît parfaitement la Promenade des Anglais, la Basse Corniche et les raccourcis pour éviter le trafic estival.",
      description: "À Nice Côte d'Azur, votre taxi TaxiNeo vous récupère en zone d'arrivée au Terminal 1 ou au Terminal 2, directement après les portes de sortie — pas au parking P6 comme les VTC. Nos chauffeurs bénéficient des voies réservées taxi sur la Promenade des Anglais et la voie Mathis. Service disponible 24h/24 pour les vols saisonniers nocturnes et les départs vers les compagnies low-cost. Transferts directs vers Cannes (30-45 min), Monaco (30-40 min) ou Antibes (20-30 min). Réservez à l'avance en haute saison pour garantir votre prise en charge.",
      metaDescription: "Taxi Nice Côte d'Azur : 14 M passagers/an, transfert forfaitaire vers Cannes, Monaco, Antibes. Accueil Terminal 1 & 2, voies réservées Promenade des Anglais.",
      heroSubtitle: "Deuxième aéroport régional de France, Nice Côte d'Azur est la porte de la Riviera. Votre chauffeur TaxiNeo vous accueille au Terminal 1 ou 2, emprunte les voies réservées de la Promenade des Anglais et assure des transferts directs vers Cannes, Monaco ou Antibes — prix fixe garanti, même en haute saison estivale.",
      whyUs: [
        { title: "Promenade des Anglais voie taxi", desc: "Nos chauffeurs empruntent la voie réservée taxi sur la Promenade des Anglais et la voie Mathis, évitant les embouteillages estivaux entre le T2 et le centre de Nice en 12 min." },
        { title: "Transferts Riviera Monaco-Cannes", desc: "Accès direct à Monaco via la Basse Corniche (30 min), Cannes par l'A8 (35 min) et Antibes (20 min). Nos chauffeurs connaissent les raccourcis des collines niçoises." },
        { title: "Accueil T1 et T2 séparés", desc: "Les terminaux 1 et 2 de Nice sont distants de 800 m. Votre chauffeur se positionne au bon terminal grâce au suivi de vol et vous retrouve à la porte de sortie exacte." },
      ],
    },
    en: {
      intro: "Nice Côte d'Azur Airport (NCE) is the second-busiest airport in France outside Paris, handling 14 million passengers a year across Terminal 1 and Terminal 2. Located just 7 km from Nice city centre, right on the Mediterranean coast, it serves the entire French Riviera — from Cannes to Monaco. TaxiNeo offers a fixed-price transfer with a local driver who knows the Promenade des Anglais, the Basse Corniche and the shortcuts to avoid summer traffic.",
      description: "At Nice Côte d'Azur, your TaxiNeo taxi picks you up in the arrivals area at Terminal 1 or Terminal 2, right after the exit doors — not at the P6 car park like ride-hailing services. Our drivers benefit from reserved taxi lanes on the Promenade des Anglais and the Voie Mathis. Available 24/7 for seasonal night flights and early departures with low-cost carriers. Direct transfers to Cannes (30-45 min), Monaco (30-40 min) or Antibes (20-30 min). Book in advance during peak season to guarantee your pickup.",
      metaDescription: "Nice Côte d'Azur taxi: 14M passengers/year, fixed-fare transfers to Cannes, Monaco, Antibes. Pickup at Terminal 1 & 2, reserved Promenade lanes.",
      heroSubtitle: "France's second-largest regional airport, Nice Côte d'Azur is the gateway to the Riviera. Your TaxiNeo driver greets you at Terminal 1 or 2, takes reserved lanes along the Promenade des Anglais and provides direct transfers to Cannes, Monaco or Antibes — fixed price guaranteed, even in peak summer.",
      whyUs: [
        { title: "Promenade des Anglais taxi lane", desc: "Our drivers use the reserved taxi lane on the Promenade des Anglais and Voie Mathis, avoiding summer gridlock between T2 and Nice centre in 12 min." },
        { title: "Riviera transfers Monaco-Cannes", desc: "Direct access to Monaco via the Basse Corniche (30 min), Cannes on the A8 (35 min) and Antibes (20 min). Our drivers know the hillside shortcuts." },
        { title: "Separate T1 and T2 pickup", desc: "Nice terminals 1 and 2 are 800 m apart. Your driver positions at the correct terminal via flight tracking and meets you at your exact exit gate." },
      ],
    }
  },
  "lyon-saint-exupery": {
    fr: {
      intro: "L'aéroport Lyon-Saint Exupéry (LYS) est le troisième aéroport régional de France avec 12 millions de passagers par an. Il dispose de trois terminaux et d'une gare TGV intégrée, ce qui en fait un hub multimodal unique. Situé à 25 km à l'est de Lyon, il est desservi par Air France, easyJet, Transavia et de nombreuses compagnies internationales. TaxiNeo vous garantit un transfert au forfait avec un chauffeur qui vous attend en zone d'arrivée, et propose aussi des transferts vers Grenoble et les stations de ski alpines en hiver.",
      description: "À Lyon-Saint Exupéry, votre taxi vous attend en zone d'arrivée au niveau 0 du terminal — pas au parking P5 longue durée comme les VTC. Nos chauffeurs empruntent les voies réservées taxi et connaissent les itinéraires optimaux via l'A43 et la rocade Est. Pour 2 passagers ou plus, le taxi TaxiNeo revient moins cher que le Rhônexpress (16,90 €/personne), avec l'avantage du porte-à-porte. Service 24h/24, y compris pour les vols charter ski en hiver. Véhicules équipés de pneus neige en saison pour les transferts vers les Alpes.",
      metaDescription: "Taxi Lyon-Saint Exupéry : hub multimodal avec gare TGV, forfait garanti, moins cher que le Rhônexpress à 2+. Transferts ski Alpes en hiver, 24h/24.",
      heroSubtitle: "Troisième aéroport régional de France avec gare TGV intégrée, Lyon-Saint Exupéry est un carrefour unique. Votre chauffeur TaxiNeo vous retrouve au niveau 0 en zone d'arrivée, propose un tarif porte-à-porte plus avantageux que le Rhônexpress et assure aussi les transferts vers les stations alpines en hiver — véhicules équipés neige.",
      whyUs: [
        { title: "Accès rapide par A43 rocade Est", desc: "Nos chauffeurs empruntent l'A43 puis la rocade Est lyonnaise, rejoignant la Part-Dieu en 25 min et la Presqu'île en 30 min sans traverser le centre congestionné." },
        { title: "Moins cher que le Rhônexpress", desc: "À partir de 2 passagers, le taxi TaxiNeo revient moins cher que deux billets Rhônexpress (16,90 €/pers.), avec le confort du porte-à-porte et la prise en charge des bagages." },
        { title: "Transferts ski Alpes en hiver", desc: "Nos véhicules sont équipés pneus neige et chaînes de novembre à avril pour les transferts vers les Alpes : Alpe d'Huez, Les Arcs, Val d'Isère depuis la gare TGV intégrée." },
      ],
    },
    en: {
      intro: "Lyon-Saint Exupéry Airport (LYS) is France's third-largest regional airport with 12 million passengers a year. It features three terminals and an integrated TGV train station, making it a unique multimodal hub. Located 25 km east of Lyon, it is served by Air France, easyJet, Transavia and many international carriers. TaxiNeo guarantees a fixed-fare transfer with a driver meeting you in the arrivals area, and also offers winter transfers to Grenoble and the Alpine ski resorts.",
      description: "At Lyon-Saint Exupéry, your taxi meets you in the arrivals area at terminal level 0 — not at the long-stay P5 car park like ride-hailing services. Our drivers use reserved taxi lanes and know the optimal routes via the A43 and the eastern ring road. For 2 or more passengers, a TaxiNeo taxi is cheaper than the Rhônexpress (16.90 EUR per person), with door-to-door convenience. Available 24/7, including for winter ski charter flights. Vehicles are fitted with snow tyres in season for Alpine transfers.",
      metaDescription: "Lyon-Saint Exupéry taxi: multimodal hub with TGV station, guaranteed fixed fare, cheaper than Rhônexpress for 2+. Alpine ski transfers in winter, 24/7.",
      heroSubtitle: "France's third-largest regional airport with an integrated TGV station, Lyon-Saint Exupéry is a unique crossroads. Your TaxiNeo driver meets you at level 0 in arrivals, offers a door-to-door fare beating the Rhônexpress and also covers winter Alpine resort transfers — snow-equipped vehicles included.",
      whyUs: [
        { title: "Fast A43 eastern ring route", desc: "Our drivers take the A43 then Lyon's eastern ring road, reaching Part-Dieu in 25 min and the Presqu'ile in 30 min without crossing the congested centre." },
        { title: "Cheaper than the Rhonexpress", desc: "From 2 passengers, a TaxiNeo taxi costs less than two Rhonexpress tickets (16.90 EUR each), with door-to-door comfort and luggage handling included." },
        { title: "Alpine ski transfers in winter", desc: "Our vehicles are fitted with snow tyres and chains from November to April for transfers to Alpe d'Huez, Les Arcs and Val d'Isere from the integrated TGV station." },
      ],
    }
  },
  "marseille-provence": {
    fr: {
      intro: "L'aéroport Marseille-Provence (MRS) est le cinquième aéroport français avec 10 millions de passagers annuels. Situé à Marignane, à 27 km au nord-ouest de Marseille, il dispose de deux terminaux desservis par Air France, Ryanair, easyJet, Vueling, Volotea et Transavia. Porte d'entrée de la Provence, il offre un accès rapide à Marseille, Aix-en-Provence, Cassis et Avignon. TaxiNeo vous propose un transfert au forfait avec un chauffeur marseillais qui vous attend en zone d'arrivée, pancarte à votre nom.",
      description: "À Marseille-Provence, votre taxi TaxiNeo vous récupère devant la porte de sortie en zone d'arrivée — pas au parking P7 éloigné comme les VTC. Nos chauffeurs empruntent l'autoroute A7 et connaissent les accès directs au Vieux-Port via le tunnel du Prado-Carénage. Service 24h/24 pour les vols vers le Maghreb et les low-cost qui atterrissent tard le soir. Transfert vers Aix-en-Provence en 20-30 min seulement. En réservant à l'avance, votre chauffeur coordonne sa présence avec l'heure réelle d'atterrissage grâce au suivi de vol.",
      metaDescription: "Taxi Marseille-Provence : 10 M passagers/an, forfait garanti vers Vieux-Port et Aix-en-Provence. Suivi de vol, accueil en arrivée, tunnel Prado 24h/24.",
      heroSubtitle: "Porte d'entrée de la Provence avec 10 millions de voyageurs annuels, Marseille-Provence dessert aussi Aix, Cassis et Avignon. Votre chauffeur TaxiNeo vous accueille en zone d'arrivée, coordonne sa présence grâce au suivi de vol et emprunte le tunnel Prado-Carénage pour un accès direct au Vieux-Port — forfait fixe, service 24h/24.",
      whyUs: [
        { title: "Tunnel Prado-Carénage direct", desc: "Nos chauffeurs empruntent le tunnel Prado-Carénage (péage inclus) pour un accès direct au Vieux-Port depuis l'A7, évitant le trafic du boulevard du Prado en 30 min." },
        { title: "Navette Aix-en-Provence 20 min", desc: "Aix-en-Provence n'est qu'à 20 min via l'A51 depuis Marignane. Nos chauffeurs vous déposent cours Mirabeau ou à la gare TGV d'Aix, avec aide aux bagages." },
        { title: "Vols Maghreb tard le soir", desc: "Marseille-Provence reçoit de nombreux vols du Maghreb entre 22h et 2h. Nos chauffeurs assurent un service de nuit avec suivi de vol et attente gratuite jusqu'à 45 min." },
      ],
    },
    en: {
      intro: "Marseille-Provence Airport (MRS) is France's fifth-largest airport with 10 million passengers a year. Located in Marignane, 27 km north-west of Marseille, it has two terminals served by Air France, Ryanair, easyJet, Vueling, Volotea and Transavia. As the gateway to Provence, it provides quick access to Marseille, Aix-en-Provence, Cassis and Avignon. TaxiNeo offers a fixed-fare transfer with a local Marseille driver who meets you in the arrivals area with a name board.",
      description: "At Marseille-Provence, your TaxiNeo taxi collects you at the exit door in the arrivals area — not at the remote P7 car park like ride-hailing services. Our drivers take the A7 motorway and know the direct routes to the Vieux-Port via the Prado-Carénage tunnel. Available 24/7 for North African flights and low-cost carriers landing late at night. Transfer to Aix-en-Provence in just 20-30 minutes. By booking in advance, your driver coordinates arrival with your actual landing time through real-time flight tracking.",
      metaDescription: "Marseille-Provence taxi: 10M passengers/year, fixed fare to Vieux-Port and Aix-en-Provence. Flight tracking, arrivals pickup, Prado tunnel route 24/7.",
      heroSubtitle: "Gateway to Provence handling 10 million travellers a year, Marseille-Provence also serves Aix, Cassis and Avignon. Your TaxiNeo driver greets you in arrivals, coordinates timing via flight tracking and takes the Prado-Carenage tunnel for direct Vieux-Port access — fixed fare, round-the-clock service.",
      whyUs: [
        { title: "Direct Prado-Carenage tunnel", desc: "Our drivers take the Prado-Carenage tunnel (toll included) for direct Vieux-Port access from the A7, avoiding Boulevard du Prado traffic in 30 min." },
        { title: "Aix-en-Provence shuttle 20 min", desc: "Aix-en-Provence is just 20 min via the A51 from Marignane. Our drivers drop you at Cours Mirabeau or Aix TGV station, with luggage assistance." },
        { title: "Late-night Maghreb flights", desc: "Marseille-Provence receives many North African flights between 10pm and 2am. Our drivers provide night service with flight tracking and free waiting up to 45 min." },
      ],
    }
  },
  "toulouse-blagnac": {
    fr: {
      intro: "L'aéroport Toulouse-Blagnac (TLS) est le sixième aéroport de France avec 10 millions de passagers par an, au cœur de la capitale européenne de l'aéronautique. Ses quatre halls (A, B, C, D) accueillent Air France, easyJet, Ryanair, Volotea et Iberia. Situé à seulement 8 km du centre-ville et du Capitole, c'est l'un des aéroports les mieux placés de France. TaxiNeo vous propose un transfert forfaitaire rapide avec un chauffeur qui connaît aussi bien le chemin vers Airbus Blagnac que vers la Place du Capitole.",
      description: "À Toulouse-Blagnac, votre taxi vous attend en zone d'arrivée du hall concerné — pas au parking P2 payant comme les VTC. Nos chauffeurs empruntent les voies réservées taxi et la rocade Arc-en-Ciel pour rejoindre le centre en 15-25 minutes. Le forfait de 28 € vers le Capitole en fait l'un des transferts aéroport les plus abordables de France. Service 24h/24, essentiel pour les employés d'Airbus qui prennent les premiers vols. Réservez à l'avance pour les départs matinaux vers les halls C et D.",
      metaDescription: "Taxi Toulouse-Blagnac : forfait 28 € vers le Capitole, 4 halls desservis, rocade Arc-en-Ciel. Capitale de l'aéronautique, transfert express 24h/24.",
      heroSubtitle: "Au cœur de la capitale européenne de l'aéronautique, Toulouse-Blagnac à 8 km du Capitole offre l'un des transferts les plus courts de France. Votre chauffeur TaxiNeo vous attend dans le hall d'arrivée concerné et rejoint le centre en 15-25 minutes par la rocade Arc-en-Ciel — forfait à 28 €, idéal aussi pour les employés Airbus.",
      whyUs: [
        { title: "Rocade Arc-en-Ciel express", desc: "Nos chauffeurs empruntent la rocade Arc-en-Ciel (A621) pour relier l'aéroport au Capitole en 15-20 min sans traverser Blagnac, même aux heures de pointe industrielle Airbus." },
        { title: "Desserte halls A, B, C et D", desc: "Toulouse-Blagnac a 4 halls séparés. Votre chauffeur se positionne au bon hall (C/D pour les low-cost, A/B pour Air France) grâce au numéro de vol." },
        { title: "Service employés Airbus Blagnac", desc: "Transfert direct vers le site Airbus Saint-Martin-du-Touch ou la zone Aéroconstellation en 5 min. Idéal pour les sous-traitants et ingénieurs en déplacement." },
      ],
    },
    en: {
      intro: "Toulouse-Blagnac Airport (TLS) is France's sixth-largest airport with 10 million passengers a year, at the heart of Europe's aerospace capital. Its four halls (A, B, C, D) host Air France, easyJet, Ryanair, Volotea and Iberia. Located just 8 km from the city centre and the Capitole square, it is one of the best-positioned airports in France. TaxiNeo offers a quick fixed-fare transfer with a driver who knows the way to Airbus Blagnac as well as the Place du Capitole.",
      description: "At Toulouse-Blagnac, your taxi waits in the arrivals area of your specific hall — not at the paid P2 car park like ride-hailing services. Our drivers use reserved taxi lanes and the Arc-en-Ciel ring road to reach the centre in 15-25 minutes. The 28 EUR fare to the Capitole makes it one of France's most affordable airport transfers. Available 24/7, essential for Airbus employees catching early flights. Book in advance for early morning departures from halls C and D.",
      metaDescription: "Toulouse-Blagnac taxi: 28 EUR fixed fare to Capitole, all 4 halls served, Arc-en-Ciel ring road. Aerospace capital, express transfer 24/7.",
      heroSubtitle: "At the heart of Europe's aerospace capital, Toulouse-Blagnac sits just 8 km from the Capitole, offering one of France's shortest airport transfers. Your TaxiNeo driver waits in your arrivals hall and reaches the centre in 15-25 minutes via the Arc-en-Ciel ring road — 28 EUR fixed fare, ideal for Airbus commuters too.",
      whyUs: [
        { title: "Arc-en-Ciel ring road express", desc: "Our drivers use the Arc-en-Ciel ring road (A621) to link the airport to the Capitole in 15-20 min without crossing Blagnac, even during Airbus rush hours." },
        { title: "Halls A, B, C and D served", desc: "Toulouse-Blagnac has 4 separate halls. Your driver positions at the right one (C/D for low-cost, A/B for Air France) using your flight number." },
        { title: "Airbus Blagnac staff service", desc: "Direct transfer to the Airbus Saint-Martin-du-Touch site or Aeroconstellation zone in 5 min. Ideal for subcontractors and engineers on business trips." },
      ],
    }
  },
  "bordeaux-merignac": {
    fr: {
      intro: "L'aéroport Bordeaux-Mérignac (BOD) accueille 7,7 millions de passagers par an dans ses trois terminaux : le Terminal A (vols internationaux), le Terminal B (Air France et réguliers) et le Terminal billi, dédié aux compagnies low-cost. Situé à 12 km à l'ouest de Bordeaux, il est la porte d'entrée du vignoble bordelais, du Bassin d'Arcachon et du Médoc. TaxiNeo vous propose un transfert au forfait avec un chauffeur bordelais qui vous attend en zone d'arrivée et peut vous conduire directement à Saint-Émilion ou Pauillac.",
      description: "À Bordeaux-Mérignac, votre taxi TaxiNeo vous récupère en zone d'arrivée de votre terminal — pas au parking P4 longue durée où attendent les VTC. Nos chauffeurs utilisent les voies réservées taxi et la rocade bordelaise pour rejoindre la gare Saint-Jean en 20-30 minutes. Service 24h/24 pour les vols easyJet et Ryanair arrivant en soirée au Terminal billi. Le chauffeur peut vous déposer directement dans les appellations viticoles : Saint-Émilion (40 min), le Médoc (50 min) ou Arcachon (45 min). Réservez à l'avance pour les week-ends de vendanges.",
      metaDescription: "Taxi Bordeaux-Mérignac : 7,7 M passagers, 3 terminaux, transfert forfaitaire vers Saint-Émilion, Arcachon, Médoc. Accueil en arrivée, réservation 24h/24.",
      heroSubtitle: "Porte du vignoble bordelais et du Bassin d'Arcachon, Bordeaux-Mérignac accueille 7,7 millions de voyageurs dans trois terminaux. Votre chauffeur TaxiNeo vous récupère en zone d'arrivée et peut vous conduire directement dans les appellations viticoles ou sur la côte atlantique — prix fixe garanti, aide bagages incluse.",
      whyUs: [
        { title: "Rocade bordelaise A630 express", desc: "Nos chauffeurs rejoignent la gare Saint-Jean en 20 min par la rocade A630 sans traverser le centre, ou le Vieux Bordeaux via les quais de la Garonne en 25 min." },
        { title: "Terminal billi low-cost dédié", desc: "Le Terminal billi (easyJet, Ryanair) est excentré. Nos chauffeurs le connaissent parfaitement et s'y positionnent pour les vols tardifs sans erreur de terminal." },
        { title: "Transfert direct Saint-Émilion", desc: "Nos chauffeurs vous conduisent directement dans les appellations viticoles : Saint-Émilion (40 min), Pauillac (50 min) ou le Bassin d'Arcachon (45 min) par l'A63." },
      ],
    },
    en: {
      intro: "Bordeaux-Mérignac Airport (BOD) serves 7.7 million passengers a year across three terminals: Terminal A (international flights), Terminal B (Air France and scheduled services) and Terminal billi, dedicated to low-cost carriers. Located 12 km west of Bordeaux, it is the gateway to the Bordeaux vineyards, the Arcachon Bay and the Médoc. TaxiNeo offers a fixed-fare transfer with a Bordeaux driver waiting in the arrivals area who can take you directly to Saint-Émilion or Pauillac.",
      description: "At Bordeaux-Mérignac, your TaxiNeo taxi picks you up in your terminal's arrivals area — not at the long-stay P4 car park where ride-hailing drivers wait. Our drivers use reserved taxi lanes and the Bordeaux ring road to reach Saint-Jean station in 20-30 minutes. Available 24/7 for late-evening easyJet and Ryanair flights arriving at Terminal billi. Your driver can take you straight to the wine appellations: Saint-Émilion (40 min), the Médoc (50 min) or Arcachon (45 min). Book ahead for harvest weekends.",
      metaDescription: "Bordeaux-Mérignac taxi: 7.7M passengers, 3 terminals, fixed-fare transfers to Saint-Émilion, Arcachon, Médoc. Arrivals pickup, book online 24/7.",
      heroSubtitle: "Gateway to Bordeaux vineyards and Arcachon Bay, Bordeaux-Mérignac welcomes 7.7 million travellers across three terminals. Your TaxiNeo driver collects you in arrivals and can drive you straight to the wine appellations or the Atlantic coast — guaranteed fixed price with luggage assistance included.",
      whyUs: [
        { title: "A630 Bordeaux ring road express", desc: "Our drivers reach Saint-Jean station in 20 min via the A630 ring road without crossing the centre, or Old Bordeaux via the Garonne quays in 25 min." },
        { title: "Dedicated billi low-cost terminal", desc: "Terminal billi (easyJet, Ryanair) is set apart. Our drivers know it perfectly and position there for late flights without terminal mix-ups." },
        { title: "Direct Saint-Emilion transfer", desc: "Our drivers take you straight to the wine appellations: Saint-Emilion (40 min), Pauillac (50 min) or Arcachon Bay (45 min) via the A63." },
      ],
    }
  },
  "nantes-atlantique": {
    fr: {
      intro: "L'aéroport Nantes-Atlantique (NTE) est le principal aéroport du Grand Ouest avec 7,2 millions de passagers par an. Son terminal unique facilite l'orientation des voyageurs. Situé à 10 km au sud-ouest de Nantes, il est desservi par Air France, Transavia, easyJet, Volotea et Ryanair. Après l'abandon du projet Notre-Dame-des-Landes, l'aéroport a été modernisé sur son site actuel. TaxiNeo vous propose un transfert forfaitaire avec prise en charge en zone d'arrivée, idéal pour rejoindre le centre nantais ou les plages de La Baule.",
      description: "À Nantes-Atlantique, votre taxi vous attend à la sortie du terminal unique, en zone d'arrivée — pas au parking P3 distant comme les VTC. Nos chauffeurs connaissent le périphérique nantais et les accès rapides à l'Île de Nantes, à Trentemoult ou à la gare TGV. Service 24h/24 pour les vols low-cost arrivant tard le soir. Le terminal unique rend le repérage très simple. Transferts directs vers La Baule (50 min-1h), Saint-Nazaire (40-50 min) et Pornic (35-45 min). Réservez votre taxi à l'avance pour les week-ends de pont.",
      metaDescription: "Taxi Nantes-Atlantique : aéroport du Grand Ouest, 7,2 M passagers, terminal unique. Forfait vers centre-ville, La Baule et Saint-Nazaire. Réservation 24h/24.",
      heroSubtitle: "Premier aéroport du Grand Ouest avec 7,2 millions de voyageurs, Nantes-Atlantique dispose d'un terminal unique modernisé qui simplifie votre arrivée. Votre chauffeur TaxiNeo vous récupère à la sortie, connaît le périphérique nantais et propose des transferts directs vers La Baule ou Saint-Nazaire — forfait garanti, service de nuit inclus.",
      whyUs: [
        { title: "Périphérique nantais sans détour", desc: "Nos chauffeurs maîtrisent le périphérique nantais et les sorties vers l'Île de Nantes, la gare TGV ou Trentemoult, évitant le pont de Cheviré aux heures de pointe." },
        { title: "Terminal unique modernisé", desc: "Après l'abandon de Notre-Dame-des-Landes, le terminal unique a été rénové. Un seul point de sortie simplifie le repérage : votre chauffeur est visible en 30 secondes." },
        { title: "Transfert plages La Baule direct", desc: "Nos chauffeurs rejoignent La Baule en 50 min par la N171 et Saint-Nazaire en 40 min. Idéal pour les week-ends balnéaires avec bagages, sans correspondance." },
      ],
    },
    en: {
      intro: "Nantes-Atlantique Airport (NTE) is the main airport for western France with 7.2 million passengers a year. Its single terminal makes navigation easy for travellers. Located 10 km south-west of Nantes, it is served by Air France, Transavia, easyJet, Volotea and Ryanair. Following the abandonment of the Notre-Dame-des-Landes project, the airport has been modernised on its current site. TaxiNeo offers a fixed-fare transfer with pickup in the arrivals area, ideal for reaching central Nantes or the beaches of La Baule.",
      description: "At Nantes-Atlantique, your taxi waits at the single terminal exit in the arrivals area — not at the distant P3 car park like ride-hailing services. Our drivers know the Nantes ring road and fast routes to the Île de Nantes, Trentemoult or the TGV station. Available 24/7 for late-night low-cost flights. The single terminal makes meeting your driver very straightforward. Direct transfers to La Baule (50 min-1h), Saint-Nazaire (40-50 min) and Pornic (35-45 min). Book your taxi ahead for bank holiday weekends.",
      metaDescription: "Nantes-Atlantique taxi: western France's main airport, 7.2M passengers, single terminal. Fixed fare to city centre, La Baule and Saint-Nazaire. Book 24/7.",
      heroSubtitle: "Western France's leading airport with 7.2 million travellers, Nantes-Atlantique has a modernised single terminal for a hassle-free arrival. Your TaxiNeo driver collects you at the exit, knows the Nantes ring road and offers direct transfers to La Baule or Saint-Nazaire — guaranteed fare with night service included.",
      whyUs: [
        { title: "Nantes ring road mastery", desc: "Our drivers master the Nantes ring road and exits to Ile de Nantes, the TGV station or Trentemoult, avoiding the Chevire bridge during rush hour." },
        { title: "Modernised single terminal", desc: "After the Notre-Dame-des-Landes cancellation, the single terminal was renovated. One exit point makes pickup simple: your driver is visible in 30 seconds." },
        { title: "Direct La Baule beach transfer", desc: "Our drivers reach La Baule in 50 min via the N171 and Saint-Nazaire in 40 min. Perfect for beach weekends with luggage, no connections needed." },
      ],
    }
  },
  "strasbourg-entzheim": {
    fr: {
      intro: "L'aéroport de Strasbourg-Entzheim (SXB) est l'aéroport de la capitale européenne, situé à 12 km au sud-ouest du centre-ville. Son terminal unique accueille 1,3 million de passagers par an avec des vols opérés par Air France, Ryanair, Volotea, Transavia et Lufthansa. Relié à Strasbourg par une ligne de train directe, il dessert aussi le Parlement européen et les institutions internationales. TaxiNeo vous offre un transfert plus rapide que le train (15 min contre 25 min), avec prise en charge directe en zone d'arrivée et aide aux bagages.",
      description: "À Strasbourg-Entzheim, votre taxi TaxiNeo vous récupère en zone d'arrivée du terminal — sans détour par le parking visiteur comme les VTC. Nos chauffeurs empruntent l'A35 et les voies réservées pour rejoindre la Petite France ou le Parlement européen en 15-20 minutes. Service idéal lors des sessions parlementaires et des grands salons (Foire européenne, marché de Noël). Disponible 24h/24 pour les vols Ryanair matinaux. Transferts vers Colmar (40-50 min) pour la Route des Vins et vers Offenburg en Allemagne (25-35 min).",
      metaDescription: "Taxi Strasbourg-Entzheim : capitale européenne, plus rapide que le train (15 min), transfert Parlement et Petite France. Route des Vins, Colmar, 24h/24.",
      heroSubtitle: "Aéroport de la capitale européenne, Strasbourg-Entzheim est le point d'accès au Parlement et à la Petite France. Votre chauffeur TaxiNeo vous rejoint en zone d'arrivée et rallie le centre en 15 minutes via l'A35 — plus rapide que la navette train, avec aide bagages et transferts vers Colmar ou la Route des Vins.",
      whyUs: [
        { title: "A35 plus rapide que le train", desc: "Nos chauffeurs empruntent l'A35 pour rallier la Petite France en 15 min, soit 10 min de moins que la navette train Entzheim-Gare Centrale, avec bagages en coffre." },
        { title: "Accès Parlement européen direct", desc: "Transfert direct vers le quartier européen (Parlement, Conseil de l'Europe, CEDH) en 18 min, essentiel lors des sessions plénières et des sommets diplomatiques." },
        { title: "Route des Vins et Colmar", desc: "Nos chauffeurs assurent des transferts vers Colmar (40 min via l'A35) et les villages de la Route des Vins d'Alsace : Riquewihr, Kaysersberg, Eguisheim." },
      ],
    },
    en: {
      intro: "Strasbourg-Entzheim Airport (SXB) serves the European capital, located 12 km south-west of the city centre. Its single terminal handles 1.3 million passengers a year with flights by Air France, Ryanair, Volotea, Transavia and Lufthansa. Connected to Strasbourg by a direct train line, it also serves the European Parliament and international institutions. TaxiNeo offers a faster transfer than the train (15 min versus 25 min), with direct pickup in the arrivals area and luggage assistance.",
      description: "At Strasbourg-Entzheim, your TaxiNeo taxi picks you up in the terminal arrivals area — no detour via the visitor car park like ride-hailing services. Our drivers take the A35 and reserved lanes to reach Petite France or the European Parliament in 15-20 minutes. An ideal service during parliamentary sessions and major events (European Fair, Christmas Market). Available 24/7 for early-morning Ryanair flights. Transfers to Colmar (40-50 min) for the Wine Route and to Offenburg in Germany (25-35 min).",
      metaDescription: "Strasbourg-Entzheim taxi: European capital airport, faster than train (15 min), Parliament and Petite France transfer. Wine Route, Colmar, 24/7.",
      heroSubtitle: "Serving the European capital, Strasbourg-Entzheim provides access to the Parliament and Petite France. Your TaxiNeo driver meets you in arrivals and reaches the centre in 15 minutes via the A35 — faster than the shuttle train, with luggage help and transfers to Colmar or the Alsace Wine Route.",
      whyUs: [
        { title: "A35 faster than shuttle train", desc: "Our drivers take the A35 to reach Petite France in 15 min, 10 min faster than the Entzheim-Central Station shuttle train, with luggage in the boot." },
        { title: "Direct European Parliament access", desc: "Direct transfer to the European quarter (Parliament, Council of Europe, ECHR) in 18 min, essential during plenary sessions and diplomatic summits." },
        { title: "Wine Route and Colmar", desc: "Our drivers provide transfers to Colmar (40 min via the A35) and Alsace Wine Route villages: Riquewihr, Kaysersberg, Eguisheim." },
      ],
    }
  },
  "lille-lesquin": {
    fr: {
      intro: "L'aéroport de Lille-Lesquin (LIL) dessert la métropole lilloise et toute la région des Hauts-de-France avec 2,2 millions de passagers par an. Son terminal unique est desservi par Air France, easyJet, Volotea, Ryanair et Transavia. Situé à 10 km du centre de Lille, il offre une connexion rapide vers les gares Lille-Flandres et Lille-Europe pour les correspondances Eurostar et TGV. TaxiNeo vous garantit un prix fixe de 25 € vers le centre et un chauffeur ch'ti qui vous attend en zone d'arrivée.",
      description: "À Lille-Lesquin, votre taxi vous attend en zone d'arrivée devant la porte de sortie — pas au parking dépose minute comme les VTC. Nos chauffeurs connaissent la rocade Sud-Est de Lille et rejoignent Euralille ou la gare Flandres en 15-20 minutes. Service 24h/24, indispensable pour les correspondances Eurostar vers Londres ou les TGV vers Bruxelles. L'aéroport étant compact, le repérage est immédiat. Transferts vers Lens (30-40 min) pour le Louvre-Lens et Arras (35-45 min). Réservez à l'avance pour les vols du matin.",
      metaDescription: "Taxi Lille-Lesquin : forfait 25 € vers le centre, correspondances Eurostar et TGV Bruxelles. 2,2 M passagers, accueil en arrivée, réservation 24h/24.",
      heroSubtitle: "Desservant toute la métropole lilloise et les Hauts-de-France, Lille-Lesquin offre des correspondances rapides Eurostar et TGV. Votre chauffeur TaxiNeo vous attend en zone d'arrivée et rejoint Euralille en 15-20 minutes — forfait à 25 €, transferts aussi vers le Louvre-Lens et Arras, service disponible 24h/24.",
      whyUs: [
        { title: "Rocade Sud-Est vers Euralille", desc: "Nos chauffeurs empruntent la rocade Sud-Est de Lille pour rejoindre Euralille et la gare Lille-Europe en 15 min, synchronisant avec vos correspondances Eurostar ou TGV." },
        { title: "Correspondances Eurostar Londres", desc: "Transfert rapide vers la gare Lille-Europe pour l'Eurostar vers Londres (1h20) ou le Thalys vers Bruxelles (35 min), avec suivi horaire de votre vol." },
        { title: "Transfert Louvre-Lens et Arras", desc: "Nos chauffeurs desservent le musée Louvre-Lens (30 min via l'A21) et la Grand'Place d'Arras (35 min), deux incontournables des Hauts-de-France." },
      ],
    },
    en: {
      intro: "Lille-Lesquin Airport (LIL) serves the Lille metropolitan area and the entire Hauts-de-France region with 2.2 million passengers a year. Its single terminal is served by Air France, easyJet, Volotea, Ryanair and Transavia. Located 10 km from Lille city centre, it offers fast connections to Lille-Flandres and Lille-Europe stations for Eurostar and TGV transfers. TaxiNeo guarantees a fixed fare of 25 EUR to the centre with a driver waiting in the arrivals area.",
      description: "At Lille-Lesquin, your taxi waits in the arrivals area in front of the exit door — not at the drop-off car park like ride-hailing services. Our drivers know the south-east ring road and reach Euralille or Gare Flandres in 15-20 minutes. Available 24/7, essential for Eurostar connections to London or TGVs to Brussels. The compact airport makes meeting your driver immediate. Transfers to Lens (30-40 min) for the Louvre-Lens museum and Arras (35-45 min). Book ahead for morning flights.",
      metaDescription: "Lille-Lesquin taxi: 25 EUR fixed fare to centre, Eurostar and Brussels TGV connections. 2.2M passengers, arrivals pickup, book online 24/7.",
      heroSubtitle: "Serving the Lille metropolis and Hauts-de-France, Lille-Lesquin offers fast Eurostar and TGV connections. Your TaxiNeo driver waits in arrivals and reaches Euralille in 15-20 minutes — 25 EUR fixed fare, transfers also to Louvre-Lens and Arras, available around the clock.",
      whyUs: [
        { title: "South-east ring to Euralille", desc: "Our drivers take Lille's south-east ring road to reach Euralille and Lille-Europe station in 15 min, synchronising with your Eurostar or TGV connections." },
        { title: "Eurostar London connections", desc: "Fast transfer to Lille-Europe station for the Eurostar to London (1h20) or Thalys to Brussels (35 min), with real-time flight schedule tracking." },
        { title: "Louvre-Lens and Arras transfer", desc: "Our drivers serve the Louvre-Lens museum (30 min via the A21) and the Grand'Place of Arras (35 min), two must-sees of Hauts-de-France." },
      ],
    }
  },
  "paris-beauvais": {
    fr: {
      intro: "L'aéroport de Paris-Beauvais (BVA) est l'aéroport low-cost de la région parisienne, situé à 85 km au nord de Paris dans l'Oise. Spécialisé dans les vols Ryanair et Wizz Air, il accueille 4 millions de passagers par an répartis entre le Terminal 1 et le Terminal 2. Malgré la distance, TaxiNeo propose un transfert porte-à-porte bien plus confortable que la navette bus Porte Maillot, avec un prix fixe et un chauffeur disponible même pour les vols arrivant après minuit.",
      description: "À Beauvais, votre taxi vous récupère directement à la sortie du terminal en zone d'arrivée — pas de marche vers un parking éloigné. Nos chauffeurs empruntent l'A16 puis le périphérique Nord pour rejoindre Paris en 1h15-1h45. Dès 2-3 passagers, le taxi TaxiNeo revient souvent moins cher que les billets de navette individuels. Service 24h/24, crucial car Beauvais est réputé pour ses horaires de vol tardifs et matinaux où aucun transport en commun ne circule. Réservez à l'avance pour les départs à 6h du matin.",
      metaDescription: "Taxi Paris-Beauvais : alternative confortable à la navette, forfait fixe, 4 M passagers Ryanair/Wizz Air. Transfert porte-à-porte vers Paris, 24h/24.",
      heroSubtitle: "Spécialisé dans les vols low-cost Ryanair et Wizz Air à 85 km de Paris, Beauvais nécessite un transfert fiable. Votre chauffeur TaxiNeo vous attend à la sortie du terminal et rejoint Paris par l'A16 — plus confortable que la navette bus, moins cher à 2-3 passagers, disponible même après minuit.",
      whyUs: [
        { title: "A16 trajet Paris porte-à-porte", desc: "Nos chauffeurs empruntent l'A16 puis le périphérique Nord pour un trajet de 1h15 vers Paris. Porte-à-porte contrairement à la navette qui s'arrête uniquement Porte Maillot." },
        { title: "Moins cher à 2-3 passagers", desc: "Dès 2 passagers, le taxi TaxiNeo revient souvent moins cher que les billets individuels de navette (29 €/pers.), avec le confort du véhicule privé et l'aide bagages." },
        { title: "Vols après minuit couverts", desc: "Beauvais est connu pour ses vols Ryanair et Wizz Air atterrissant entre 23h et 1h du matin. Nos chauffeurs assurent un service de nuit avec suivi de vol intégré." },
      ],
    },
    en: {
      intro: "Paris-Beauvais Airport (BVA) is the low-cost airport for the Paris region, located 85 km north of the capital in the Oise department. Specialising in Ryanair and Wizz Air flights, it handles 4 million passengers a year across Terminal 1 and Terminal 2. Despite the distance, TaxiNeo offers a door-to-door transfer far more comfortable than the Porte Maillot shuttle bus, with a fixed price and a driver available even for flights arriving after midnight.",
      description: "At Beauvais, your taxi picks you up right at the terminal exit in the arrivals area — no long walk to a remote car park. Our drivers take the A16 and then the northern ring road to reach Paris in 1h15-1h45. With 2-3 passengers, a TaxiNeo taxi often costs less than individual shuttle tickets. Available 24/7, crucial since Beauvais is known for late-night and early-morning flights when no public transport runs. Book ahead for 6am departures.",
      metaDescription: "Paris-Beauvais taxi: comfortable alternative to the shuttle, fixed fare, 4M Ryanair/Wizz Air passengers. Door-to-door Paris transfer, available 24/7.",
      heroSubtitle: "Handling low-cost Ryanair and Wizz Air flights 85 km from Paris, Beauvais needs a reliable transfer. Your TaxiNeo driver waits at the terminal exit and reaches Paris via the A16 — more comfortable than the shuttle bus, cheaper for 2-3 passengers, available even after midnight.",
      whyUs: [
        { title: "A16 door-to-door to Paris", desc: "Our drivers take the A16 then the northern ring road for a 1h15 ride to Paris. Door-to-door unlike the shuttle that only stops at Porte Maillot." },
        { title: "Cheaper for 2-3 passengers", desc: "From 2 passengers, a TaxiNeo taxi often costs less than individual shuttle tickets (29 EUR each), with private vehicle comfort and luggage help." },
        { title: "Post-midnight flights covered", desc: "Beauvais is known for Ryanair and Wizz Air flights landing between 11pm and 1am. Our drivers provide night service with integrated flight tracking." },
      ],
    }
  },
  "bale-mulhouse": {
    fr: {
      intro: "L'aéroport de Bâle-Mulhouse-Fribourg (BSL/MLH/EAP) est un aéroport binational unique en Europe, situé sur le territoire français mais desservant trois pays : la France, la Suisse et l'Allemagne. Avec 9 millions de passagers par an, il dispose d'une sortie côté français et d'une sortie côté suisse. Des compagnies comme easyJet, Air France, Wizz Air et Lufthansa y opèrent. TaxiNeo vous offre un transfert depuis le côté français avec des tarifs bien plus avantageux qu'un taxi suisse.",
      description: "À Bâle-Mulhouse, votre taxi TaxiNeo vous attend en zone d'arrivée côté français — précisez votre sortie lors de la réservation. Nos chauffeurs connaissent l'A35 vers Mulhouse (25-35 min) et l'autoroute vers Colmar pour la Route des Vins (40-50 min). Le tarif français est nettement inférieur à celui d'un taxi suisse pour les mêmes distances. Service 24h/24 pour les vols easyJet et Wizz Air. Transferts également vers Fribourg-en-Brisgau en Allemagne (45-55 min) et Strasbourg (1h15-1h30).",
      metaDescription: "Taxi Bâle-Mulhouse : aéroport binational 3 pays, 9 M passagers, tarif français avantageux. Transfert Mulhouse, Colmar, Fribourg. Réservation en ligne 24h/24.",
      heroSubtitle: "Unique aéroport binational d'Europe desservant la France, la Suisse et l'Allemagne, Bâle-Mulhouse accueille 9 millions de passagers. Votre chauffeur TaxiNeo vous attend côté français en zone d'arrivée et propose des transferts vers Mulhouse, Colmar ou Fribourg — tarif français bien inférieur aux prix suisses, disponible 24h/24.",
      whyUs: [
        { title: "Tarif français côté binational", desc: "L'aéroport a une sortie française et une suisse. Nos taxis côté français appliquent le tarif réglementé, nettement inférieur aux prix suisses pour les mêmes distances." },
        { title: "A35 vers Mulhouse et Colmar", desc: "Nos chauffeurs rejoignent Mulhouse centre en 25 min par l'A35 et Colmar en 40 min pour la Route des Vins, avec connaissance des douanes transfrontalières." },
        { title: "Transfert Fribourg Allemagne", desc: "Transfert transfrontalier vers Fribourg-en-Brisgau (45 min) ou Lörrach (20 min) en Allemagne, au tarif français plus avantageux qu'un taxi suisse ou allemand." },
      ],
    },
    en: {
      intro: "Basel-Mulhouse-Freiburg Airport (BSL/MLH/EAP) is a unique binational airport in Europe, located on French territory but serving three countries: France, Switzerland and Germany. With 9 million passengers a year, it has a French-side exit and a Swiss-side exit. Airlines including easyJet, Air France, Wizz Air and Lufthansa operate here. TaxiNeo offers transfers from the French side at rates far more competitive than a Swiss taxi.",
      description: "At Basel-Mulhouse, your TaxiNeo taxi meets you in the arrivals area on the French side — specify your exit when booking. Our drivers know the A35 to Mulhouse (25-35 min) and the motorway to Colmar for the Wine Route (40-50 min). French-side fares are significantly lower than Swiss taxi rates for the same distances. Available 24/7 for easyJet and Wizz Air flights. Transfers also available to Freiburg im Breisgau in Germany (45-55 min) and Strasbourg (1h15-1h30).",
      metaDescription: "Basel-Mulhouse taxi: binational airport serving 3 countries, 9M passengers, competitive French rates. Transfers to Mulhouse, Colmar, Freiburg. Book 24/7.",
      heroSubtitle: "Europe's only binational airport serving France, Switzerland and Germany, Basel-Mulhouse handles 9 million passengers. Your TaxiNeo driver meets you on the French side in arrivals with transfers to Mulhouse, Colmar or Freiburg — French-side fares well below Swiss prices, available around the clock.",
      whyUs: [
        { title: "French-side binational fare", desc: "The airport has a French exit and a Swiss exit. Our French-side taxis apply regulated rates, significantly lower than Swiss prices for the same distances." },
        { title: "A35 to Mulhouse and Colmar", desc: "Our drivers reach central Mulhouse in 25 min via the A35 and Colmar in 40 min for the Wine Route, with cross-border customs knowledge." },
        { title: "Freiburg Germany transfer", desc: "Cross-border transfer to Freiburg im Breisgau (45 min) or Loerrach (20 min) in Germany, at French rates more competitive than Swiss or German taxis." },
      ],
    }
  },
  "montpellier-mediterranee": {
    fr: {
      intro: "L'aéroport Montpellier-Méditerranée (MPL) dessert la métropole montpelliéraine et le littoral languedocien avec 2 millions de passagers par an. Son terminal unique est situé à seulement 8 km de la Place de la Comédie, au cœur de Montpellier. Desservi par Air France, Transavia, easyJet, Ryanair et Volotea, il offre un accès rapide aux plages de Palavas-les-Flots et de la Grande-Motte. TaxiNeo vous garantit un transfert forfaitaire avec un chauffeur qui connaît les raccourcis de la métropole.",
      description: "À Montpellier-Méditerranée, votre taxi vous attend en zone d'arrivée devant la porte principale — pas au parking visiteur P0 comme les VTC. Nos chauffeurs empruntent la D66 et le boulevard Philippe Lamour pour rejoindre Antigone ou la Comédie en 15-20 minutes. Service 24h/24 pour les vols low-cost et les arrivées tardives. Transfert vers Palavas-les-Flots en 15-20 min et Sète en 30-35 min. Le terminal unique simplifie la prise en charge. Réservez à l'avance pour les festivals d'été.",
      metaDescription: "Taxi Montpellier-Méditerranée : 2 M passagers, 8 km du centre, transfert Comédie en 15 min. Plages de Palavas et Sète, forfait garanti, réservation 24h/24.",
      heroSubtitle: "À seulement 8 km de la Place de la Comédie, Montpellier-Méditerranée est l'accès direct au littoral languedocien. Votre chauffeur TaxiNeo vous attend devant la porte principale du terminal unique et rejoint Antigone en 15 minutes — transferts aussi vers Palavas-les-Flots et Sète, forfait fixe, idéal pour les festivals d'été.",
      whyUs: [
        { title: "D66 express vers Antigone", desc: "Nos chauffeurs empruntent la D66 et le boulevard Philippe Lamour pour rejoindre le quartier Antigone et la Comédie en 15 min, évitant les embouteillages du tramway." },
        { title: "Plages Palavas en 15 minutes", desc: "Transfert direct vers Palavas-les-Flots (15 min), La Grande-Motte (25 min) ou Sète et ses canaux (30 min) pour profiter du littoral languedocien dès l'atterrissage." },
        { title: "Service festivals et congrès", desc: "Nos chauffeurs assurent les transferts pendant les festivals d'été, le FISE et les congrès au Corum, avec réservation anticipée garantie même en haute saison." },
      ],
    },
    en: {
      intro: "Montpellier-Méditerranée Airport (MPL) serves the Montpellier metropolitan area and the Languedoc coast with 2 million passengers a year. Its single terminal is just 8 km from the Place de la Comédie in the heart of Montpellier. Served by Air France, Transavia, easyJet, Ryanair and Volotea, it provides quick access to the beaches of Palavas-les-Flots and La Grande-Motte. TaxiNeo guarantees a fixed-fare transfer with a driver who knows the city's shortcuts.",
      description: "At Montpellier-Méditerranée, your taxi waits in the arrivals area by the main door — not at the P0 visitor car park like ride-hailing services. Our drivers take the D66 and Boulevard Philippe Lamour to reach Antigone or the Comédie in 15-20 minutes. Available 24/7 for low-cost flights and late arrivals. Transfer to Palavas-les-Flots in 15-20 min and Sète in 30-35 min. The single terminal makes pickup straightforward. Book ahead for summer festivals.",
      metaDescription: "Montpellier-Méditerranée taxi: 2M passengers, 8 km from centre, Comédie transfer in 15 min. Palavas and Sète beaches, fixed fare, book online 24/7.",
      heroSubtitle: "Just 8 km from the Place de la Comédie, Montpellier-Méditerranée is the direct gateway to the Languedoc coast. Your TaxiNeo driver waits at the single terminal main door and reaches Antigone in 15 minutes — transfers also to Palavas-les-Flots and Sète, fixed fare, perfect for summer festivals.",
      whyUs: [
        { title: "D66 express to Antigone", desc: "Our drivers take the D66 and Boulevard Philippe Lamour to reach the Antigone district and the Comedie in 15 min, avoiding tramway traffic jams." },
        { title: "Palavas beaches in 15 minutes", desc: "Direct transfer to Palavas-les-Flots (15 min), La Grande-Motte (25 min) or Sete and its canals (30 min) to enjoy the Languedoc coast right after landing." },
        { title: "Festival and congress service", desc: "Our drivers handle transfers during summer festivals, FISE and Corum congresses, with advance booking guaranteed even in peak season." },
      ],
    }
  },
  "ajaccio-napoleon-bonaparte": {
    fr: {
      intro: "L'aéroport Ajaccio-Napoléon Bonaparte (AJA) est le principal aéroport de Corse-du-Sud, avec 1,7 million de passagers par an. Situé à 7 km du centre d'Ajaccio dans le golfe éponyme, il est desservi par Air France, Air Corsica, easyJet, Volotea et Transavia. Nommé en l'honneur de l'illustre enfant de la ville, il offre un accès direct aux plages de Porticcio et aux Calanques de Piana. TaxiNeo propose un transfert forfaitaire avec un chauffeur corse qui partage volontiers ses bonnes adresses.",
      description: "À Ajaccio-Napoléon Bonaparte, votre taxi vous attend en zone d'arrivée à la sortie du terminal unique — pas de navette ni de marche vers un parking éloigné. Nos chauffeurs connaissent la route vers le centre-ville par le cours Napoléon ainsi que la D55 littorale vers Porticcio. Service 24h/24 pour les vols saisonniers et les arrivées estivales nocturnes. En juillet-août, réservez au moins 48h à l'avance car la demande est très forte. Transferts vers Propriano (1h) et les villages de Corse-du-Sud.",
      metaDescription: "Taxi Ajaccio-Napoléon Bonaparte : 1,7 M passagers, transfert Porticcio et Calanques de Piana. Chauffeur corse en zone arrivée, forfait garanti 24h/24.",
      heroSubtitle: "Principal aéroport de Corse-du-Sud face au golfe d'Ajaccio, Napoléon Bonaparte accueille 1,7 million de voyageurs et donne accès aux Calanques de Piana. Votre chauffeur TaxiNeo vous attend à la sortie du terminal et vous conduit vers Porticcio ou le cours Napoléon — forfait fixe, réservation conseillée 48h avant en été.",
      whyUs: [
        { title: "D55 littorale vers Porticcio", desc: "Nos chauffeurs empruntent la D55 littorale pour rejoindre les plages de Porticcio (Agosta, Mare e Sole) en 25 min, avec des panoramas sur le golfe d'Ajaccio." },
        { title: "Expert routes corses sinueuses", desc: "Les routes de Corse-du-Sud sont étroites et sinueuses. Nos chauffeurs locaux maîtrisent les cols vers Propriano (1h) et les Calanques de Piana (1h15) en toute sécurité." },
        { title: "Réservation anticipée été corse", desc: "En juillet-août, la demande de taxis explose à Ajaccio. TaxiNeo garantit votre réservation 48h à l'avance avec confirmation par SMS du nom et véhicule du chauffeur." },
      ],
    },
    en: {
      intro: "Ajaccio-Napoléon Bonaparte Airport (AJA) is the main airport for southern Corsica, handling 1.7 million passengers a year. Located 7 km from Ajaccio's centre on its namesake gulf, it is served by Air France, Air Corsica, easyJet, Volotea and Transavia. Named after the city's most famous son, it provides direct access to the beaches of Porticcio and the Calanques de Piana. TaxiNeo offers a fixed-fare transfer with a Corsican driver happy to share local recommendations.",
      description: "At Ajaccio-Napoléon Bonaparte, your taxi waits in the arrivals area at the single terminal exit — no shuttle or walk to a remote car park. Our drivers know the route to the city centre via Cours Napoléon and the coastal D55 to Porticcio. Available 24/7 for seasonal flights and late summer arrivals. In July-August, book at least 48 hours in advance as demand is very high. Transfers to Propriano (1h) and the villages of southern Corsica.",
      metaDescription: "Ajaccio Napoleon Bonaparte taxi: 1.7M passengers, transfers to Porticcio and Calanques de Piana. Corsican driver in arrivals, fixed fare 24/7.",
      heroSubtitle: "Southern Corsica's main airport facing Ajaccio Gulf, Napoleon Bonaparte handles 1.7 million travellers with access to the Calanques de Piana. Your TaxiNeo driver waits at the terminal exit and takes you to Porticcio or Cours Napoleon — fixed fare, advance booking recommended 48h ahead in summer.",
      whyUs: [
        { title: "Coastal D55 to Porticcio", desc: "Our drivers take the coastal D55 to reach Porticcio beaches (Agosta, Mare e Sole) in 25 min, with panoramic views over the Gulf of Ajaccio." },
        { title: "Winding Corsican road expert", desc: "Southern Corsica roads are narrow and winding. Our local drivers master the passes to Propriano (1h) and the Calanques de Piana (1h15) safely." },
        { title: "Advance summer Corsica booking", desc: "In July-August, taxi demand surges in Ajaccio. TaxiNeo guarantees your booking 48h ahead with SMS confirmation of driver name and vehicle." },
      ],
    }
  },
  "bastia-poretta": {
    fr: {
      intro: "L'aéroport Bastia-Poretta (BIA) dessert la Haute-Corse avec 1,3 million de passagers par an. Situé à Lucciana, à 20 km au sud de Bastia, il accueille les vols d'Air France, Air Corsica, easyJet et Volotea. C'est la porte d'entrée du Cap Corse, de la Balagne et de la Castagniccia. TaxiNeo vous propose un transfert au forfait avec un chauffeur qui connaît les routes corses sinueuses et peut vous conduire jusqu'à Saint-Florent, Calvi ou Corte.",
      description: "À Bastia-Poretta, votre taxi TaxiNeo vous récupère à la sortie du terminal unique en zone d'arrivée. Nos chauffeurs connaissent la route nationale vers Bastia et le Vieux-Port (20-30 min) ainsi que les cols vers la côte ouest. Contrairement aux VTC, pas besoin d'attendre dans un parking : le taxi est là dès votre sortie. Service 24h/24, y compris pour les vols de nuit en haute saison estivale. Transferts vers Saint-Florent (35-45 min) et le Cap Corse. Réservez tôt en juillet-août pour garantir votre chauffeur.",
      metaDescription: "Taxi Bastia-Poretta : porte du Cap Corse, 1,3 M passagers, transfert Vieux-Port en 20 min. Chauffeur connaissant les cols corses, forfait fixe 24h/24.",
      heroSubtitle: "Porte d'entrée de la Haute-Corse avec accès au Cap Corse, à la Balagne et à la Castagniccia, Bastia-Poretta accueille 1,3 million de voyageurs. Votre chauffeur TaxiNeo vous retrouve dès votre sortie du terminal et rejoint le Vieux-Port en 20-30 minutes — il connaît les cols et routes sinueuses, forfait garanti, réservez tôt en été.",
      whyUs: [
        { title: "Route nationale vers Vieux-Port", desc: "Nos chauffeurs empruntent la RT11 (ex-RN193) pour rallier le Vieux-Port de Bastia et la place Saint-Nicolas en 20 min, en évitant les travaux du contournement." },
        { title: "Cols vers la côte ouest maîtrisés", desc: "Les cols de Teghime et Santo Pietro vers Saint-Florent (35 min) et la Balagne sont des routes sinueuses. Nos chauffeurs corses les pratiquent quotidiennement." },
        { title: "Cap Corse et Castagniccia", desc: "Transfert vers le Cap Corse (Erbalunga, Macinaggio) ou la Castagniccia (couvents baroques, châtaigneraies) avec un chauffeur qui connaît chaque lacet de la D80." },
      ],
    },
    en: {
      intro: "Bastia-Poretta Airport (BIA) serves Upper Corsica with 1.3 million passengers a year. Located in Lucciana, 20 km south of Bastia, it handles flights from Air France, Air Corsica, easyJet and Volotea. It is the gateway to Cap Corse, the Balagne region and the Castagniccia. TaxiNeo offers a fixed-fare transfer with a driver who knows the winding Corsican roads and can take you to Saint-Florent, Calvi or Corte.",
      description: "At Bastia-Poretta, your TaxiNeo taxi meets you at the single terminal exit in the arrivals area. Our drivers know the main road to Bastia's Old Port (20-30 min) as well as the mountain passes to the west coast. Unlike ride-hailing services, no need to wait in a car park — the taxi is there as you walk out. Available 24/7, including for night flights in peak summer. Transfers to Saint-Florent (35-45 min) and Cap Corse. Book early in July-August to secure your driver.",
      metaDescription: "Bastia-Poretta taxi: gateway to Cap Corse, 1.3M passengers, Old Port transfer in 20 min. Driver who knows Corsican mountain passes, fixed fare 24/7.",
      heroSubtitle: "Gateway to Upper Corsica with access to Cap Corse, Balagne and Castagniccia, Bastia-Poretta welcomes 1.3 million travellers. Your TaxiNeo driver meets you at the terminal exit and reaches the Old Port in 20-30 minutes — experienced on winding mountain passes, guaranteed fare, book early in summer.",
      whyUs: [
        { title: "Main road to Old Port", desc: "Our drivers take the RT11 (ex-RN193) to reach Bastia's Old Port and Place Saint-Nicolas in 20 min, avoiding bypass construction works." },
        { title: "West coast passes mastered", desc: "The Teghime and Santo Pietro passes to Saint-Florent (35 min) and the Balagne are winding roads. Our Corsican drivers use them daily." },
        { title: "Cap Corse and Castagniccia", desc: "Transfer to Cap Corse (Erbalunga, Macinaggio) or the Castagniccia (baroque convents, chestnut groves) with a driver who knows every bend of the D80." },
      ],
    }
  },
  "brest-bretagne": {
    fr: {
      intro: "L'aéroport Brest-Bretagne (BES) est la porte d'entrée du Finistère et de la Bretagne occidentale, avec 1,1 million de passagers par an. Son terminal unique dessert des vols Air France, Transavia, Volotea et Ryanair vers Paris, Lyon, Marseille et des destinations européennes. Situé à 10 km au nord-est du centre de Brest, il offre un accès direct à l'Iroise, au port de Roscoff (pour les ferries vers l'Irlande) et à Océanopolis. TaxiNeo vous assure un transfert forfaitaire avec un chauffeur breton.",
      description: "À Brest-Bretagne, votre taxi vous attend à la sortie du terminal unique en zone d'arrivée — pas au parking visiteur P1. Nos chauffeurs connaissent la voie express RN12 et les accès rapides au port de commerce et à Océanopolis. Service 24h/24 pour les vols Ryanair arrivant tard. Transfert vers Roscoff (40-50 min) pour le ferry Brittany Ferries et vers Quimper (50 min-1h). L'aéroport étant compact, votre chauffeur est visible immédiatement à la sortie. Réservez à l'avance pour les Fêtes Maritimes de Brest.",
      metaDescription: "Taxi Brest-Bretagne : porte du Finistère, 1,1 M passagers, transfert Roscoff ferry et Océanopolis. Voie express RN12, forfait garanti, réservation 24h/24.",
      heroSubtitle: "Porte du Finistère et de la Bretagne occidentale, Brest-Bretagne dessert 1,1 million de passagers avec accès direct à l'Iroise et au ferry de Roscoff. Votre chauffeur TaxiNeo est visible dès la sortie du terminal compact et emprunte la RN12 pour un transfert rapide — forfait fixe, service 24h/24 y compris vols Ryanair tardifs.",
      whyUs: [
        { title: "RN12 voie express Finistère", desc: "Nos chauffeurs empruntent la voie express RN12 pour rallier le centre de Brest, le port de commerce et Océanopolis en 12 min, sans feux rouges ni ralentissements." },
        { title: "Ferry Roscoff-Irlande connecté", desc: "Transfert coordonné vers le terminal Brittany Ferries de Roscoff (40 min) avec suivi horaire du ferry vers Cork ou Rosslare, idéal pour les voyageurs irlandais." },
        { title: "Fêtes Maritimes de Brest", desc: "Lors des Fêtes Maritimes (tous les 4 ans), la demande explose. Nos chauffeurs connaissent les accès au port et les itinéraires alternatifs pendant les festivités." },
      ],
    },
    en: {
      intro: "Brest-Bretagne Airport (BES) is the gateway to Finistère and western Brittany, handling 1.1 million passengers a year. Its single terminal serves Air France, Transavia, Volotea and Ryanair flights to Paris, Lyon, Marseille and European destinations. Located 10 km north-east of central Brest, it offers direct access to the Iroise coast, the port of Roscoff (for ferries to Ireland) and Océanopolis. TaxiNeo provides a fixed-fare transfer with a Breton driver.",
      description: "At Brest-Bretagne, your taxi waits at the single terminal exit in the arrivals area — not at the P1 visitor car park. Our drivers know the RN12 dual carriageway and quick routes to the commercial port and Océanopolis. Available 24/7 for late Ryanair arrivals. Transfer to Roscoff (40-50 min) for the Brittany Ferries terminal and to Quimper (50 min-1h). The compact airport means your driver is visible immediately on exit. Book ahead for the Brest Maritime Festivals.",
      metaDescription: "Brest-Bretagne taxi: Finistère gateway, 1.1M passengers, Roscoff ferry and Océanopolis transfers. RN12 dual carriageway, fixed fare, book 24/7.",
      heroSubtitle: "Gateway to Finistère and western Brittany, Brest-Bretagne serves 1.1 million passengers with direct access to the Iroise coast and Roscoff ferry. Your TaxiNeo driver is visible right at the compact terminal exit and takes the RN12 for a swift transfer — fixed fare, 24/7 service including late Ryanair flights.",
      whyUs: [
        { title: "RN12 Finistere dual carriageway", desc: "Our drivers take the RN12 dual carriageway to reach central Brest, the commercial port and Oceanopolis in 12 min, with no traffic lights or slowdowns." },
        { title: "Roscoff-Ireland ferry connected", desc: "Coordinated transfer to the Brittany Ferries terminal in Roscoff (40 min) with ferry schedule tracking to Cork or Rosslare, ideal for Irish travellers." },
        { title: "Brest Maritime Festivals", desc: "During the Maritime Festivals (every 4 years), demand surges. Our drivers know port access routes and alternative itineraries during the festivities." },
      ],
    }
  },
  "biarritz-pays-basque": {
    fr: {
      intro: "L'aéroport Biarritz-Pays Basque (BIQ) est l'un des aéroports les plus proches d'un centre-ville en France : seulement 3 km de la Grande Plage de Biarritz. Avec 1,2 million de passagers par an, il accueille Air France, easyJet, Ryanair, Transavia et Volotea. Porte du Pays Basque français et espagnol, il permet de rejoindre Bayonne, Saint-Jean-de-Luz et même San Sebastián en Espagne. TaxiNeo vous propose un transfert forfaitaire ultra-rapide, avec un chauffeur basque disponible dès la zone d'arrivée.",
      description: "À Biarritz-Pays Basque, votre taxi TaxiNeo vous récupère en zone d'arrivée en quelques secondes après le passage des portes. En 5 minutes, vous êtes à la Grande Plage ou à l'Hôtel du Palais. Nos chauffeurs connaissent la corniche basque, la route vers Saint-Jean-de-Luz (15-25 min) et la frontière espagnole vers San Sebastián (40-50 min). Service 24h/24, idéal pour les surfeurs qui arrivent tôt et les festivaliers du soir. Le petit aéroport rend la prise en charge immédiate, sans longue marche.",
      metaDescription: "Taxi Biarritz-Pays Basque : à 3 km de la Grande Plage, transfert express 5 min. Saint-Jean-de-Luz, San Sebastián, corniche basque. Forfait garanti 24h/24.",
      heroSubtitle: "À seulement 3 km de la Grande Plage, Biarritz-Pays Basque est l'un des aéroports les mieux situés de France. Votre chauffeur TaxiNeo vous récupère en quelques secondes et vous dépose en 5 minutes à l'océan — transferts aussi vers Saint-Jean-de-Luz et San Sebastián par la corniche basque, forfait fixe, idéal pour les surfeurs.",
      whyUs: [
        { title: "Grande Plage en 5 minutes", desc: "L'aéroport n'est qu'à 3 km de la Grande Plage et de l'Hôtel du Palais. Nos chauffeurs vous déposent les pieds dans le sable en 5 min, planches de surf acceptées." },
        { title: "Corniche basque vers l'Espagne", desc: "Nos chauffeurs connaissent la corniche basque vers Saint-Jean-de-Luz (15 min), Hendaye (25 min) et la frontière espagnole pour San Sebastián (40 min) via l'A63." },
        { title: "Service surfeurs tôt le matin", desc: "Biarritz attire des surfeurs du monde entier. Nos chauffeurs assurent les transferts dès 5h vers les spots de la Côte des Basques, Anglet et Hossegor." },
      ],
    },
    en: {
      intro: "Biarritz-Pays Basque Airport (BIQ) is one of the closest airports to a city centre in France: just 3 km from Biarritz's Grande Plage. With 1.2 million passengers a year, it hosts Air France, easyJet, Ryanair, Transavia and Volotea. Gateway to the French and Spanish Basque Country, it provides access to Bayonne, Saint-Jean-de-Luz and even San Sebastián in Spain. TaxiNeo offers an ultra-fast fixed-fare transfer with a Basque driver available from the arrivals area.",
      description: "At Biarritz-Pays Basque, your TaxiNeo taxi picks you up in the arrivals area seconds after you walk through the doors. In 5 minutes you are at the Grande Plage or the Hôtel du Palais. Our drivers know the Basque coast road, the route to Saint-Jean-de-Luz (15-25 min) and the Spanish border to San Sebastián (40-50 min). Available 24/7, ideal for surfers arriving early and evening festival-goers. The small airport means immediate pickup with no long walk.",
      metaDescription: "Biarritz-Pays Basque taxi: 3 km from Grande Plage, 5-min express transfer. Saint-Jean-de-Luz, San Sebastián, Basque coast. Fixed fare 24/7.",
      heroSubtitle: "Just 3 km from the Grande Plage, Biarritz-Pays Basque is one of the best-located airports in France. Your TaxiNeo driver collects you in seconds and drops you at the ocean in 5 minutes — transfers also to Saint-Jean-de-Luz and San Sebastian along the Basque coast, fixed fare, perfect for surfers.",
      whyUs: [
        { title: "Grande Plage in 5 minutes", desc: "The airport is just 3 km from the Grande Plage and Hotel du Palais. Our drivers drop you on the sand in 5 min, surfboards welcome." },
        { title: "Basque coast to Spain", desc: "Our drivers know the Basque coastal road to Saint-Jean-de-Luz (15 min), Hendaye (25 min) and the Spanish border to San Sebastian (40 min) via the A63." },
        { title: "Early morning surfer service", desc: "Biarritz attracts surfers from around the world. Our drivers provide transfers from 5am to the Cote des Basques, Anglet and Hossegor surf spots." },
      ],
    }
  },
  "toulon-hyeres": {
    fr: {
      intro: "L'aéroport de Toulon-Hyères (TLN) dessert le Var et la côte varoise avec 700 000 passagers par an. Situé à Hyères, à 22 km à l'est de Toulon, il est desservi par Air France, Transavia, Volotea et easyJet. C'est la porte d'entrée vers Saint-Tropez, les Îles d'Or (Porquerolles, Port-Cros, Le Levant) et le port militaire de Toulon. TaxiNeo vous propose un transfert forfaitaire avec un chauffeur varois qui connaît les routes côtières et les raccourcis pour éviter le trafic estival.",
      description: "À Toulon-Hyères, votre taxi vous attend à la sortie du terminal unique en zone d'arrivée — pas au parking P2 éloigné. Nos chauffeurs empruntent l'A570 et la D98 pour rejoindre rapidement Toulon centre (25-35 min) ou le port d'embarquement de la Tour Fondue pour Porquerolles. Service 24h/24 pour les vols saisonniers estivaux. Transfert vers Saint-Tropez en 1h-1h15 le long de la magnifique côte varoise. Réservez à l'avance en été pour les correspondances avec les navettes maritimes vers les îles.",
      metaDescription: "Taxi Toulon-Hyères : accès Saint-Tropez et Îles d'Or (Porquerolles), 700 000 passagers. Chauffeur varois, routes côtières, forfait garanti 24h/24.",
      heroSubtitle: "Porte d'entrée de Saint-Tropez et des Îles d'Or, Toulon-Hyères dessert la côte varoise avec 700 000 passagers par an. Votre chauffeur TaxiNeo vous attend en zone d'arrivée et emprunte l'A570 vers Toulon ou la route côtière vers Porquerolles et Saint-Tropez — forfait fixe, correspondances ferry assurées en été.",
      whyUs: [
        { title: "A570 express vers Toulon centre", desc: "Nos chauffeurs empruntent l'A570 et la D98 pour rejoindre Toulon centre et le port militaire en 25 min, évitant les ralentissements de La Garde et La Valette." },
        { title: "Ferry Porquerolles Tour Fondue", desc: "Transfert coordonné vers l'embarcadère de la Tour Fondue (15 min) pour les navettes vers Porquerolles, avec synchronisation horaire du ferry en saison estivale." },
        { title: "Route côtière Saint-Tropez", desc: "Nos chauffeurs rejoignent Saint-Tropez en 1h par la D98 littorale et connaissent les raccourcis par les cols de la Londe et Bormes pour éviter le trafic estival." },
      ],
    },
    en: {
      intro: "Toulon-Hyères Airport (TLN) serves the Var department and its coast with 700,000 passengers a year. Located in Hyères, 22 km east of Toulon, it is served by Air France, Transavia, Volotea and easyJet. It is the gateway to Saint-Tropez, the Golden Islands (Porquerolles, Port-Cros, Le Levant) and Toulon's naval port. TaxiNeo offers a fixed-fare transfer with a local driver who knows the coastal roads and shortcuts to beat summer traffic.",
      description: "At Toulon-Hyères, your taxi waits at the single terminal exit in the arrivals area — not at the remote P2 car park. Our drivers take the A570 and D98 to reach central Toulon quickly (25-35 min) or the Tour Fondue embarkation point for Porquerolles. Available 24/7 for seasonal summer flights. Transfer to Saint-Tropez in 1h-1h15 along the stunning Var coast. Book ahead in summer for connections with island ferry shuttles.",
      metaDescription: "Toulon-Hyères taxi: access to Saint-Tropez and Golden Islands (Porquerolles), 700K passengers. Local driver, coastal routes, fixed fare 24/7.",
      heroSubtitle: "Gateway to Saint-Tropez and the Golden Islands, Toulon-Hyères serves the Var coast with 700,000 passengers a year. Your TaxiNeo driver waits in arrivals and takes the A570 to Toulon or the coastal road to Porquerolles and Saint-Tropez — fixed fare with summer ferry connections guaranteed.",
      whyUs: [
        { title: "A570 express to Toulon centre", desc: "Our drivers take the A570 and D98 to reach central Toulon and the naval port in 25 min, avoiding slowdowns through La Garde and La Valette." },
        { title: "Tour Fondue Porquerolles ferry", desc: "Coordinated transfer to the Tour Fondue jetty (15 min) for Porquerolles ferries, with summer schedule synchronisation for island connections." },
        { title: "Coastal road to Saint-Tropez", desc: "Our drivers reach Saint-Tropez in 1h via the D98 coast road and know shortcuts through the La Londe and Bormes passes to avoid summer traffic." },
      ],
    }
  },
  "rennes-bretagne": {
    fr: {
      intro: "L'aéroport Rennes-Bretagne (RNS) dessert la capitale de la Bretagne avec 800 000 passagers par an. Son terminal unique est situé à seulement 7 km au sud-ouest du centre-ville, à Saint-Jacques-de-la-Lande. Desservi par Air France, easyJet, Volotea et Ryanair, il offre des liaisons vers Paris, Lyon, Marseille, Londres et des destinations saisonnières. TaxiNeo vous propose un transfert forfaitaire rapide avec un chauffeur rennais qui assure aussi les liaisons vers Saint-Malo et la côte d'Émeraude.",
      description: "À Rennes-Bretagne, votre taxi vous attend en zone d'arrivée du terminal unique — pas au parking P0 dépose minute. Nos chauffeurs rejoignent le centre-ville par la rocade Sud et la rue de Nantes en 12-18 minutes. Service 24h/24, essentiel pour les correspondances avec les TGV Rennes-Paris (1h25). Transfert vers Saint-Malo en 50 min-1h et vers Dinard en 45-55 min. L'aéroport compact permet un repérage immédiat de votre chauffeur. Réservez à l'avance pour les grands départs vacances et les week-ends à Saint-Malo.",
      metaDescription: "Taxi Rennes-Bretagne : capitale bretonne, 800 000 passagers, correspondances TGV Paris 1h25. Transfert Saint-Malo et côte d'Émeraude, forfait 24h/24.",
      heroSubtitle: "Capitale de la Bretagne, Rennes-Bretagne accueille 800 000 passagers à seulement 7 km du centre-ville. Votre chauffeur TaxiNeo vous attend au terminal compact et rejoint le centre en 12 minutes — correspondances TGV vers Paris en 1h25, transferts vers Saint-Malo et la côte d'Émeraude, forfait garanti.",
      whyUs: [
        { title: "Rocade Sud vers gare TGV", desc: "Nos chauffeurs empruntent la rocade Sud et la rue de Nantes pour rejoindre la gare TGV en 12 min, synchronisant avec les TGV Paris en 1h25 et Lille en 3h." },
        { title: "Transfert Saint-Malo en 50 min", desc: "Nos chauffeurs rallient les remparts de Saint-Malo en 50 min par la RN137 et Dinard en 45 min, idéal pour les week-ends sur la côte d'Émeraude." },
        { title: "Terminal compact repérage facile", desc: "Le terminal unique de Rennes est compact : votre chauffeur est visible en 20 secondes à la sortie. Pas de navette, pas de marche, accueil immédiat avec pancarte." },
      ],
    },
    en: {
      intro: "Rennes-Bretagne Airport (RNS) serves the capital of Brittany with 800,000 passengers a year. Its single terminal is just 7 km south-west of the city centre in Saint-Jacques-de-la-Lande. Served by Air France, easyJet, Volotea and Ryanair, it offers connections to Paris, Lyon, Marseille, London and seasonal destinations. TaxiNeo provides a quick fixed-fare transfer with a Rennes driver who also covers routes to Saint-Malo and the Emerald Coast.",
      description: "At Rennes-Bretagne, your taxi waits in the arrivals area of the single terminal — not at the P0 drop-off car park. Our drivers reach the city centre via the southern ring road and Rue de Nantes in 12-18 minutes. Available 24/7, essential for TGV connections from Rennes to Paris (1h25). Transfer to Saint-Malo in 50 min-1h and Dinard in 45-55 min. The compact airport means you spot your driver immediately. Book ahead for holiday departures and Saint-Malo weekends.",
      metaDescription: "Rennes-Bretagne taxi: Brittany's capital, 800K passengers, TGV connections to Paris in 1h25. Saint-Malo and Emerald Coast transfers, fixed fare 24/7.",
      heroSubtitle: "Capital of Brittany, Rennes-Bretagne welcomes 800,000 passengers just 7 km from the city centre. Your TaxiNeo driver waits at the compact terminal and reaches downtown in 12 minutes — TGV connections to Paris in 1h25, transfers to Saint-Malo and the Emerald Coast, guaranteed fare.",
      whyUs: [
        { title: "South ring road to TGV station", desc: "Our drivers take the southern ring road and Rue de Nantes to reach the TGV station in 12 min, synchronising with TGVs to Paris in 1h25 and Lille in 3h." },
        { title: "Saint-Malo transfer in 50 min", desc: "Our drivers reach the Saint-Malo ramparts in 50 min via the RN137 and Dinard in 45 min, ideal for Emerald Coast weekends." },
        { title: "Compact terminal easy spotting", desc: "Rennes' single terminal is compact: your driver is visible within 20 seconds of exiting. No shuttle, no walking, instant meet-and-greet with name board." },
      ],
    }
  },
  "clermont-ferrand-auvergne": {
    fr: {
      intro: "L'aéroport Clermont-Ferrand Auvergne (CFE) dessert la capitale auvergnate et le Massif central avec 400 000 passagers par an. Situé à Aulnat, à 7 km à l'est du centre-ville et de la place de Jaude, il accueille les vols Air France, Ryanair et HOP! vers Paris, Porto et des destinations saisonnières. Porte d'entrée de la Chaîne des Puys (classée UNESCO) et de Vulcania, il est idéal pour les voyageurs d'affaires liés à Michelin. TaxiNeo vous propose un transfert rapide au forfait avec un chauffeur local.",
      description: "À Clermont-Ferrand Auvergne, votre taxi vous attend en zone d'arrivée du terminal unique — pas au parking P1 visiteur. Nos chauffeurs rejoignent la place de Jaude ou la gare SNCF en 12-18 minutes par l'avenue du Brézet. Service 24h/24 pour le vol matinal vers Paris-Orly. Transfert vers Vulcania en 30-40 min et vers Vichy en 40-50 min. Le terminal compact vous met face à votre chauffeur dès la sortie. Réservez à l'avance pour les événements Michelin et le festival du court-métrage.",
      metaDescription: "Taxi Clermont-Ferrand Auvergne : Chaîne des Puys UNESCO, Vulcania, siège Michelin. Forfait place de Jaude en 12 min, accueil en arrivée 24h/24.",
      heroSubtitle: "Porte de la Chaîne des Puys classée UNESCO et siège de Michelin, Clermont-Ferrand Auvergne dessert 400 000 passagers à 7 km du centre. Votre chauffeur TaxiNeo vous retrouve au terminal compact et rejoint la place de Jaude en 12 minutes — transferts aussi vers Vulcania et Vichy, forfait garanti, service 24h/24.",
      whyUs: [
        { title: "Avenue du Brézet centre rapide", desc: "Nos chauffeurs empruntent l'avenue du Brézet et la RN89 pour rejoindre la place de Jaude et la cathédrale en pierre de Volvic en 12 min, sans embouteillages." },
        { title: "Vulcania et Chaîne des Puys", desc: "Transfert direct vers Vulcania (30 min via l'A89) et le Puy de Dôme (25 min). Nos chauffeurs connaissent les routes du Parc des Volcans d'Auvergne classé UNESCO." },
        { title: "Navette Michelin et affaires", desc: "Transfert express vers le campus Michelin de Ladoux (15 min) et le Polydome pour les congrès. Service adapté aux voyageurs d'affaires avec vol matinal Paris-Orly." },
      ],
    },
    en: {
      intro: "Clermont-Ferrand Auvergne Airport (CFE) serves the Auvergne capital and the Massif Central with 400,000 passengers a year. Located in Aulnat, 7 km east of the city centre and Place de Jaude, it hosts Air France, Ryanair and HOP! flights to Paris, Porto and seasonal destinations. Gateway to the Chaîne des Puys (UNESCO World Heritage) and Vulcania, it is ideal for business travellers linked to Michelin. TaxiNeo offers a quick fixed-fare transfer with a local driver.",
      description: "At Clermont-Ferrand Auvergne, your taxi meets you in the arrivals area of the single terminal — not at the P1 visitor car park. Our drivers reach Place de Jaude or the railway station in 12-18 minutes via Avenue du Brézet. Available 24/7 for the early morning Paris-Orly flight. Transfer to Vulcania in 30-40 min and Vichy in 40-50 min. The compact terminal puts you face-to-face with your driver on exit. Book ahead for Michelin events and the short film festival.",
      metaDescription: "Clermont-Ferrand Auvergne taxi: UNESCO Chaîne des Puys, Vulcania, Michelin HQ. Fixed fare to Place de Jaude in 12 min, arrivals pickup 24/7.",
      heroSubtitle: "Gateway to the UNESCO Chaîne des Puys and Michelin headquarters, Clermont-Ferrand Auvergne serves 400,000 passengers 7 km from the centre. Your TaxiNeo driver meets you at the compact terminal and reaches Place de Jaude in 12 minutes — transfers also to Vulcania and Vichy, guaranteed fare, 24/7 service.",
      whyUs: [
        { title: "Avenue du Brezet fast route", desc: "Our drivers take Avenue du Brezet and the RN89 to reach Place de Jaude and the Volvic stone cathedral in 12 min, traffic-free." },
        { title: "Vulcania and Chaine des Puys", desc: "Direct transfer to Vulcania (30 min via the A89) and Puy de Dome (25 min). Our drivers know the roads of the UNESCO-listed Auvergne Volcanoes Park." },
        { title: "Michelin shuttle and business", desc: "Express transfer to the Michelin Ladoux campus (15 min) and Polydome congress centre. Tailored to business travellers on the early Paris-Orly flight." },
      ],
    }
  },
  "pau-pyrenees": {
    fr: {
      intro: "L'aéroport Pau-Pyrénées (PUF) dessert le Béarn et les Pyrénées-Atlantiques avec 600 000 passagers par an. Situé à Uzein, à 10 km au nord-ouest de Pau, il est desservi par Air France, Transavia, Ryanair et HOP! avec des liaisons vers Paris, Lyon et Londres. Porte d'entrée des Pyrénées, il offre un panorama unique sur la chaîne montagneuse et un accès direct à Lourdes pour les pèlerins. TaxiNeo propose un transfert forfaitaire avec un chauffeur béarnais habitué aux routes de montagne.",
      description: "À Pau-Pyrénées, votre taxi vous récupère en zone d'arrivée du terminal unique, face à la porte de sortie. Nos chauffeurs empruntent l'A64 et le boulevard des Pyrénées pour rejoindre le centre de Pau en 12-18 minutes, avec vue sur les montagnes. Service 24h/24, indispensable pour les pèlerins de Lourdes (35-45 min) et les skieurs en route vers Gourette ou La Pierre-Saint-Martin. Véhicules équipés montagne en hiver. Réservez à l'avance pour les grands pèlerinages et la saison de ski.",
      metaDescription: "Taxi Pau-Pyrénées : porte des Pyrénées, transfert Lourdes 35 min, stations Gourette. Chauffeur béarnais, véhicules montagne, forfait garanti 24h/24.",
      heroSubtitle: "Porte d'entrée des Pyrénées avec vue panoramique sur la chaîne montagneuse, Pau-Pyrénées dessert 600 000 passagers. Votre chauffeur TaxiNeo vous accueille en zone d'arrivée et rejoint Pau en 12 minutes par le boulevard des Pyrénées — transferts vers Lourdes et les stations de ski, véhicules équipés montagne en hiver.",
      whyUs: [
        { title: "A64 boulevard des Pyrénées", desc: "Nos chauffeurs empruntent l'A64 puis le boulevard des Pyrénées avec vue panoramique sur la chaîne pour rejoindre le centre de Pau en 12 min, un trajet unique en France." },
        { title: "Lourdes sanctuaire en 35 min", desc: "Transfert direct vers le sanctuaire de Lourdes (35 min via l'A64 et la N21). Nos chauffeurs sont habitués aux groupes de pèlerins et proposent un service adapté." },
        { title: "Stations ski Gourette équipées", desc: "Véhicules équipés pneus neige et chaînes de décembre à mars pour les transferts vers Gourette (50 min), La Pierre-Saint-Martin (1h) et les stations béarnaises." },
      ],
    },
    en: {
      intro: "Pau-Pyrénées Airport (PUF) serves the Béarn region and the Pyrénées-Atlantiques with 600,000 passengers a year. Located in Uzein, 10 km north-west of Pau, it is served by Air France, Transavia, Ryanair and HOP! with connections to Paris, Lyon and London. Gateway to the Pyrenees, it offers a unique panorama of the mountain range and direct access to Lourdes for pilgrims. TaxiNeo provides a fixed-fare transfer with a Béarnais driver experienced in mountain roads.",
      description: "At Pau-Pyrénées, your taxi picks you up in the arrivals area of the single terminal, facing the exit door. Our drivers take the A64 and Boulevard des Pyrénées to reach central Pau in 12-18 minutes, with mountain views. Available 24/7, essential for Lourdes pilgrims (35-45 min) and skiers heading to Gourette or La Pierre-Saint-Martin. Vehicles are mountain-equipped in winter. Book ahead for major pilgrimages and ski season.",
      metaDescription: "Pau-Pyrénées taxi: Pyrenees gateway, Lourdes transfer in 35 min, Gourette ski resorts. Béarnais driver, mountain vehicles, fixed fare 24/7.",
      heroSubtitle: "Gateway to the Pyrenees with panoramic mountain views, Pau-Pyrénées serves 600,000 passengers. Your TaxiNeo driver greets you in arrivals and reaches Pau in 12 minutes via Boulevard des Pyrénées — transfers to Lourdes and ski resorts, mountain-equipped vehicles in winter.",
      whyUs: [
        { title: "A64 Boulevard des Pyrenees", desc: "Our drivers take the A64 then Boulevard des Pyrenees with panoramic mountain views to reach central Pau in 12 min, a unique ride in France." },
        { title: "Lourdes sanctuary in 35 min", desc: "Direct transfer to the Lourdes sanctuary (35 min via the A64 and N21). Our drivers are used to pilgrim groups and offer a tailored service." },
        { title: "Gourette ski equipped vehicles", desc: "Vehicles fitted with snow tyres and chains from December to March for transfers to Gourette (50 min), La Pierre-Saint-Martin (1h) and Bearn resorts." },
      ],
    }
  },
  "perpignan-rivesaltes": {
    fr: {
      intro: "L'aéroport Perpignan-Rivesaltes (PGF) dessert le Roussillon et la Catalogne Nord avec 500 000 passagers par an. Situé à 7 km au nord de Perpignan, son terminal unique accueille des vols Air France, Ryanair et Transavia vers Paris, Londres et Charleroi. Décrit par Salvador Dalí comme « le centre du monde », l'aéroport est la porte des plages du Roussillon, de Collioure et des stations de ski des Pyrénées catalanes. TaxiNeo vous propose un transfert forfaitaire avec un chauffeur catalan.",
      description: "À Perpignan-Rivesaltes, votre taxi vous attend en zone d'arrivée du terminal — pas au parking visiteur. Nos chauffeurs rejoignent le centre-ville et le Castillet en 10-15 minutes par la D117. Service 24h/24 pour les vols Ryanair qui atterrissent en soirée. Transfert vers Collioure en 25-30 min et vers Font-Romeu en 1h-1h15 pour le ski ou la préparation en altitude. Le soleil catalan se vit dès la sortie de l'avion. Réservez à l'avance pour les vacances d'été sur la côte Vermeille.",
      metaDescription: "Taxi Perpignan-Rivesaltes : « centre du monde » selon Dalí, Collioure et Font-Romeu ski. 500 000 passagers, chauffeur catalan, forfait 24h/24.",
      heroSubtitle: "Décrit par Dalí comme « le centre du monde », Perpignan-Rivesaltes ouvre sur les plages du Roussillon et les Pyrénées catalanes. Votre chauffeur TaxiNeo vous attend en zone d'arrivée et rejoint le Castillet en 10 minutes — transferts vers Collioure ou Font-Romeu pour le ski, forfait fixe sous le soleil catalan.",
      whyUs: [
        { title: "D117 express vers le Castillet", desc: "Nos chauffeurs empruntent la D117 pour rejoindre le Castillet et le centre historique de Perpignan en 10 min. Accès rapide aussi à la gare TGV pour les correspondances vers Barcelone." },
        { title: "Côte Vermeille et Collioure", desc: "Transfert direct vers Collioure (25 min) et les criques de la Côte Vermeille via la route côtière. Nos chauffeurs connaissent aussi Banyuls et Cerbère à la frontière." },
        { title: "Font-Romeu altitude et ski", desc: "Transfert vers Font-Romeu (1h) et les stations des Pyrénées catalanes (Les Angles, Formiguères) avec véhicules équipés montagne pour l'entraînement en altitude ou le ski." },
      ],
    },
    en: {
      intro: "Perpignan-Rivesaltes Airport (PGF) serves the Roussillon and Northern Catalonia with 500,000 passengers a year. Located 7 km north of Perpignan, its single terminal hosts Air France, Ryanair and Transavia flights to Paris, London and Charleroi. Described by Salvador Dalí as 'the centre of the world', the airport is the gateway to Roussillon beaches, Collioure and the Catalan Pyrenees ski resorts. TaxiNeo offers a fixed-fare transfer with a Catalan driver.",
      description: "At Perpignan-Rivesaltes, your taxi waits in the terminal arrivals area — not at the visitor car park. Our drivers reach the city centre and the Castillet in 10-15 minutes via the D117. Available 24/7 for evening Ryanair flights. Transfer to Collioure in 25-30 min and Font-Romeu in 1h-1h15 for skiing or altitude training. The Catalan sun greets you the moment you step off the plane. Book ahead for summer holidays on the Côte Vermeille.",
      metaDescription: "Perpignan-Rivesaltes taxi: 'centre of the world' per Dalí, Collioure and Font-Romeu ski. 500K passengers, Catalan driver, fixed fare 24/7.",
      heroSubtitle: "Described by Dali as 'the centre of the world', Perpignan-Rivesaltes opens onto Roussillon beaches and the Catalan Pyrenees. Your TaxiNeo driver waits in arrivals and reaches the Castillet in 10 minutes — transfers to Collioure or Font-Romeu for skiing, fixed fare under the Catalan sun.",
      whyUs: [
        { title: "D117 express to the Castillet", desc: "Our drivers take the D117 to reach the Castillet and Perpignan's historic centre in 10 min. Quick access also to the TGV station for connections to Barcelona." },
        { title: "Cote Vermeille and Collioure", desc: "Direct transfer to Collioure (25 min) and Cote Vermeille coves via the coast road. Our drivers also know Banyuls and Cerbere at the border." },
        { title: "Font-Romeu altitude and skiing", desc: "Transfer to Font-Romeu (1h) and Catalan Pyrenees resorts (Les Angles, Formigueres) with mountain-equipped vehicles for altitude training or skiing." },
      ],
    }
  },
  "la-rochelle-ile-de-re": {
    fr: {
      intro: "L'aéroport La Rochelle-Île de Ré (LRH) est l'un des plus proches d'un centre-ville en France, à seulement 4 km du Vieux Port de La Rochelle. Avec 300 000 passagers par an, il accueille principalement des vols easyJet, Ryanair et Jet2 depuis le Royaume-Uni et l'Irlande. C'est la porte d'entrée de l'Île de Ré, accessible par le pont en 25-35 minutes. TaxiNeo vous propose un transfert forfaitaire avec un chauffeur rochelais qui vous dépose au pied de votre destination, que ce soit le port ou les plages rétaises.",
      description: "À La Rochelle-Île de Ré, votre taxi vous attend en zone d'arrivée du terminal unique — le trajet vers le Vieux Port ne prend que 8-12 minutes. Nos chauffeurs connaissent le pont de l'Île de Ré et les villages rétais (Ars, Saint-Martin, Les Portes). Service 24h/24 pour les arrivées tardives des vols britanniques. Le péage du pont est inclus dans le forfait vers l'Île de Ré. Terminal compact, prise en charge immédiate sans marche. Réservez à l'avance en été car l'Île de Ré attire des milliers de visiteurs.",
      metaDescription: "Taxi La Rochelle-Île de Ré : à 4 km du Vieux Port, pont Île de Ré inclus dans le forfait. Vols UK easyJet/Ryanair, prise en charge immédiate 24h/24.",
      heroSubtitle: "À seulement 4 km du Vieux Port, La Rochelle-Île de Ré est l'une des liaisons aéroport-centre les plus courtes de France. Votre chauffeur TaxiNeo vous récupère au terminal compact et peut vous conduire sur l'Île de Ré via le pont, péage inclus — forfait fixe, prise en charge immédiate, idéal pour les vols britanniques.",
      whyUs: [
        { title: "Vieux Port en 8 minutes", desc: "L'aéroport est à 4 km du Vieux Port de La Rochelle. Nos chauffeurs vous déposent devant les tours médiévales en 8 min, l'un des transferts les plus courts de France." },
        { title: "Pont Île de Ré péage inclus", desc: "Le péage du pont de l'Île de Ré (16,50 € en été) est inclus dans notre forfait. Nos chauffeurs connaissent les villages rétais : Ars, Saint-Martin, Les Portes-en-Ré." },
        { title: "Vols UK easyJet et Jet2", desc: "La Rochelle accueille de nombreux vols britanniques (easyJet, Ryanair, Jet2). Nos chauffeurs parlent anglais et assurent l'accueil même pour les arrivées tardives." },
      ],
    },
    en: {
      intro: "La Rochelle-Île de Ré Airport (LRH) is one of the closest to a city centre in France, just 4 km from La Rochelle's Old Port. With 300,000 passengers a year, it mainly hosts easyJet, Ryanair and Jet2 flights from the UK and Ireland. It is the gateway to the Île de Ré, accessible via the bridge in 25-35 minutes. TaxiNeo offers a fixed-fare transfer with a local driver who drops you at your destination, whether the harbour or the island's beaches.",
      description: "At La Rochelle-Île de Ré, your taxi waits in the single terminal arrivals area — the journey to the Old Port takes just 8-12 minutes. Our drivers know the Île de Ré bridge and the island villages (Ars, Saint-Martin, Les Portes). Available 24/7 for late British flight arrivals. The bridge toll is included in the Île de Ré fare. Compact terminal means immediate pickup with no walking. Book ahead in summer as the Île de Ré attracts thousands of visitors.",
      metaDescription: "La Rochelle-Île de Ré taxi: 4 km from Old Port, Île de Ré bridge toll included in fare. UK easyJet/Ryanair flights, instant pickup 24/7.",
      heroSubtitle: "Just 4 km from the Old Port, La Rochelle-Ile de Re offers one of France's shortest airport-to-centre transfers. Your TaxiNeo driver collects you at the compact terminal and can drive you to the Ile de Re via the bridge, toll included — fixed fare, instant pickup, ideal for British flights.",
      whyUs: [
        { title: "Old Port in 8 minutes", desc: "The airport is 4 km from La Rochelle's Old Port. Our drivers drop you at the medieval towers in 8 min, one of France's shortest transfers." },
        { title: "Ile de Re bridge toll included", desc: "The Ile de Re bridge toll (16.50 EUR in summer) is included in our fare. Our drivers know the island villages: Ars, Saint-Martin, Les Portes-en-Re." },
        { title: "UK easyJet and Jet2 flights", desc: "La Rochelle receives many British flights (easyJet, Ryanair, Jet2). Our drivers speak English and provide pickup even for late arrivals." },
      ],
    }
  },
  "figari-sud-corse": {
    fr: {
      intro: "L'aéroport Figari-Sud Corse (FSC) est la porte d'entrée du sud de la Corse, avec 700 000 passagers par an concentrés sur la saison estivale. Situé à 25 km de Porto-Vecchio et 20 km de Bonifacio, il est desservi par Air France, Air Corsica, easyJet, Volotea et Transavia. L'aéroport donne accès aux plus belles plages de Corse — Palombaggia, Santa Giulia, Rondinara — et aux falaises spectaculaires de Bonifacio. TaxiNeo vous propose un transfert forfaitaire avec un chauffeur qui connaît chaque crique du sud.",
      description: "À Figari-Sud Corse, votre taxi vous récupère à la sortie du terminal unique en zone d'arrivée, devant les portes. Nos chauffeurs connaissent les routes sinueuses de la D859 vers Porto-Vecchio (25-30 min) et de la N196 vers Bonifacio (20-25 min). Service 24h/24, même pour les vols charter du samedi soir en haute saison. L'été, la demande est très forte : réservez au minimum 72h à l'avance. Transfert vers Propriano (40-50 min) pour la côte ouest. L'aéroport compact rend le repérage du chauffeur immédiat.",
      metaDescription: "Taxi Figari-Sud Corse : Palombaggia, Bonifacio, Porto-Vecchio. 700 000 passagers estivaux, chauffeur local, forfait garanti. Réservez 72h avant en été.",
      heroSubtitle: "Accès aux plus belles plages de Corse — Palombaggia, Santa Giulia, Rondinara — et aux falaises de Bonifacio, Figari-Sud Corse accueille 700 000 voyageurs en saison. Votre chauffeur TaxiNeo vous attend à la sortie du terminal et connaît chaque route sinueuse vers Porto-Vecchio ou Bonifacio — forfait fixe, réservez 72h à l'avance en été.",
      whyUs: [
        { title: "D859 vers Porto-Vecchio expert", desc: "La D859 vers Porto-Vecchio est sinueuse et étroite. Nos chauffeurs corses la pratiquent quotidiennement et rejoignent Palombaggia ou Santa Giulia en 25-30 min en sécurité." },
        { title: "Falaises Bonifacio en 20 min", desc: "Nos chauffeurs empruntent la N196 pour rallier Bonifacio et ses falaises spectaculaires en 20 min. Accès direct au port pour les navettes vers la Sardaigne (Lavezzi)." },
        { title: "Réservation 72h haute saison", desc: "En juillet-août, les taxis sont pris d'assaut à Figari. TaxiNeo garantit votre réservation 72h à l'avance avec SMS de confirmation et suivi de vol le jour J." },
      ],
    },
    en: {
      intro: "Figari-Sud Corse Airport (FSC) is the gateway to southern Corsica, with 700,000 passengers a year concentrated in the summer season. Located 25 km from Porto-Vecchio and 20 km from Bonifacio, it is served by Air France, Air Corsica, easyJet, Volotea and Transavia. The airport gives access to Corsica's most beautiful beaches — Palombaggia, Santa Giulia, Rondinara — and the spectacular cliffs of Bonifacio. TaxiNeo offers a fixed-fare transfer with a driver who knows every cove in the south.",
      description: "At Figari-Sud Corse, your taxi picks you up at the single terminal exit in the arrivals area, right in front of the doors. Our drivers know the winding D859 to Porto-Vecchio (25-30 min) and the N196 to Bonifacio (20-25 min). Available 24/7, even for Saturday evening charter flights in peak season. In summer demand is very high: book at least 72 hours ahead. Transfer to Propriano (40-50 min) for the west coast. The compact airport makes spotting your driver immediate.",
      metaDescription: "Figari-Sud Corse taxi: Palombaggia, Bonifacio, Porto-Vecchio. 700K summer passengers, local driver, fixed fare. Book 72h ahead in summer.",
      heroSubtitle: "Access to Corsica's finest beaches — Palombaggia, Santa Giulia, Rondinara — and the cliffs of Bonifacio, Figari-Sud Corse welcomes 700,000 summer travellers. Your TaxiNeo driver waits at the terminal exit and knows every winding road to Porto-Vecchio or Bonifacio — fixed fare, book 72h ahead in summer.",
      whyUs: [
        { title: "D859 Porto-Vecchio road expert", desc: "The D859 to Porto-Vecchio is winding and narrow. Our Corsican drivers use it daily and reach Palombaggia or Santa Giulia in 25-30 min safely." },
        { title: "Bonifacio cliffs in 20 min", desc: "Our drivers take the N196 to reach Bonifacio and its spectacular cliffs in 20 min. Direct access to the port for Sardinia (Lavezzi) shuttle boats." },
        { title: "72h peak season booking", desc: "In July-August, taxis are overwhelmed at Figari. TaxiNeo guarantees your booking 72h ahead with SMS confirmation and flight tracking on the day." },
      ],
    }
  },
  "calvi-sainte-catherine": {
    fr: {
      intro: "L'aéroport Calvi-Sainte Catherine (CLY) dessert la Balagne, l'une des plus belles régions de Corse, avec 350 000 passagers par an. Situé à 7 km au sud-est de Calvi, il accueille les vols d'Air France, Air Corsica et easyJet. La piste d'atterrissage face à la mer offre un spectacle unique aux voyageurs. L'aéroport donne accès à la citadelle de Calvi, aux plages de la Balagne et au village perché de Sant'Antonino. TaxiNeo vous propose un transfert forfaitaire avec un chauffeur balanin.",
      description: "À Calvi-Sainte Catherine, votre taxi vous attend à la sortie du terminal unique — le petit aéroport rend la prise en charge instantanée. Nos chauffeurs rejoignent le centre de Calvi et la citadelle en 10-15 minutes, et L'Île-Rousse en 20-25 minutes par la route littorale de la Balagne. Service 24h/24 pour les vols saisonniers. En été, réservez impérativement à l'avance car les taxis sont très demandés. Transfert vers Porto et les Calanques de Piana en 50 min-1h.",
      metaDescription: "Taxi Calvi-Sainte Catherine : piste face à la mer, citadelle et plages de Balagne. 350 000 passagers, chauffeur balanin, forfait garanti 24h/24.",
      heroSubtitle: "Avec sa piste face à la Méditerranée, Calvi-Sainte Catherine dessert la Balagne et ses plages parmi les plus belles de Corse. Votre chauffeur TaxiNeo vous attend à la sortie du terminal et rejoint la citadelle en 10 minutes ou L'Île-Rousse par la route littorale — forfait fixe, réservation indispensable en été.",
      whyUs: [
        { title: "Citadelle de Calvi en 10 min", desc: "Nos chauffeurs rejoignent la citadelle génoise de Calvi et la plage de Calvi en 10 min par la route littorale, avec vue spectaculaire sur la baie depuis la piste." },
        { title: "Route littorale vers L'Île-Rousse", desc: "Transfert vers L'Île-Rousse en 20 min par la D81 littorale de Balagne, l'une des plus belles routes côtières de Corse, avec arrêt photo possible à Algajola." },
        { title: "Calanques de Piana en 50 min", desc: "Nos chauffeurs connaissent la route sinueuse vers Porto et les Calanques de Piana classées UNESCO (50 min), avec des routes de montagne qu'ils pratiquent au quotidien." },
      ],
    },
    en: {
      intro: "Calvi-Sainte Catherine Airport (CLY) serves the Balagne, one of Corsica's most beautiful regions, with 350,000 passengers a year. Located 7 km south-east of Calvi, it hosts Air France, Air Corsica and easyJet flights. The runway facing the sea offers a unique spectacle to travellers. The airport provides access to Calvi's citadel, the Balagne beaches and the hilltop village of Sant'Antonino. TaxiNeo offers a fixed-fare transfer with a local Balagne driver.",
      description: "At Calvi-Sainte Catherine, your taxi waits at the single terminal exit — the small airport means instant pickup. Our drivers reach central Calvi and the citadel in 10-15 minutes, and L'Île-Rousse in 20-25 minutes via the Balagne coastal road. Available 24/7 for seasonal flights. In summer, booking ahead is essential as taxis are in high demand. Transfer to Porto and the Calanques de Piana in 50 min-1h.",
      metaDescription: "Calvi-Sainte Catherine taxi: runway facing the sea, citadel and Balagne beaches. 350K passengers, local Balagne driver, fixed fare 24/7.",
      heroSubtitle: "With its runway facing the Mediterranean, Calvi-Sainte Catherine serves the Balagne and some of Corsica's most beautiful beaches. Your TaxiNeo driver waits at the terminal exit and reaches the citadel in 10 minutes or L'Ile-Rousse via the coastal road — fixed fare, advance booking essential in summer.",
      whyUs: [
        { title: "Calvi citadel in 10 min", desc: "Our drivers reach the Genoese citadel and Calvi beach in 10 min via the coast road, with a spectacular bay view from the runway approach." },
        { title: "Coastal road to L'Ile-Rousse", desc: "Transfer to L'Ile-Rousse in 20 min via the D81 Balagne coast road, one of Corsica's most beautiful coastal drives, with a photo stop at Algajola possible." },
        { title: "Calanques de Piana in 50 min", desc: "Our drivers know the winding road to Porto and the UNESCO Calanques de Piana (50 min), with mountain roads they use daily." },
      ],
    }
  },
  "limoges-bellegarde": {
    fr: {
      intro: "L'aéroport Limoges-Bellegarde (LIG) dessert le Limousin et le nord du Périgord avec 300 000 passagers par an. Très populaire auprès des résidents britanniques du centre de la France, il accueille principalement des vols Ryanair vers Londres-Stansted et des liaisons HOP! vers Paris. Situé à 10 km à l'ouest de Limoges, il offre un accès rapide à la célèbre Gare des Bénédictins et aux sites du Limousin. TaxiNeo vous propose un transfert forfaitaire avec un chauffeur limousin.",
      description: "À Limoges-Bellegarde, votre taxi vous attend en zone d'arrivée du terminal unique. Nos chauffeurs rejoignent le centre de Limoges et la Gare des Bénédictins en 10-15 minutes par la route de l'aéroport. Service 24h/24, adapté aux horaires des vols Ryanair qui arrivent souvent en soirée. Transfert vers Oradour-sur-Glane (20-25 min) et vers le Périgord Vert. Le terminal compact rend la prise en charge immédiate. Réservez à l'avance pour les correspondances TGV à la gare des Bénédictins.",
      metaDescription: "Taxi Limoges-Bellegarde : vols Ryanair Londres, Gare des Bénédictins en 10 min. 300 000 passagers, Périgord Vert, forfait garanti 24h/24.",
      heroSubtitle: "Prisé par les résidents britanniques du centre de la France, Limoges-Bellegarde dessert 300 000 passagers avec des vols Ryanair vers Londres. Votre chauffeur TaxiNeo vous attend au terminal compact et rejoint la Gare des Bénédictins en 10 minutes — correspondances TGV assurées, transferts vers Oradour et le Périgord Vert.",
      whyUs: [
        { title: "Gare des Bénédictins en 10 min", desc: "Nos chauffeurs rejoignent la Gare des Bénédictins (classée monument historique) en 10 min pour vos correspondances TGV vers Paris-Austerlitz ou Toulouse." },
        { title: "Oradour-sur-Glane mémorial", desc: "Transfert direct vers le village martyr d'Oradour-sur-Glane (20 min) et le Centre de la Mémoire, avec un chauffeur respectueux de l'histoire du Limousin." },
        { title: "Résidents britanniques bilingues", desc: "Limoges dessert de nombreux résidents anglais du Limousin et du Périgord Vert. Nos chauffeurs anglophones assurent l'accueil des vols Ryanair London-Stansted." },
      ],
    },
    en: {
      intro: "Limoges-Bellegarde Airport (LIG) serves the Limousin and northern Périgord with 300,000 passengers a year. Very popular with British residents in central France, it mainly hosts Ryanair flights to London Stansted and HOP! connections to Paris. Located 10 km west of Limoges, it provides quick access to the famous Gare des Bénédictins and Limousin heritage sites. TaxiNeo offers a fixed-fare transfer with a Limousin driver.",
      description: "At Limoges-Bellegarde, your taxi waits in the single terminal arrivals area. Our drivers reach central Limoges and the Gare des Bénédictins in 10-15 minutes via the airport road. Available 24/7, matching Ryanair flight schedules that often arrive in the evening. Transfer to Oradour-sur-Glane (20-25 min) and the Périgord Vert. The compact terminal means immediate pickup. Book ahead for TGV connections at the Gare des Bénédictins.",
      metaDescription: "Limoges-Bellegarde taxi: Ryanair London flights, Gare des Bénédictins in 10 min. 300K passengers, Périgord Vert access, fixed fare 24/7.",
      heroSubtitle: "Popular with British residents in central France, Limoges-Bellegarde serves 300,000 passengers with Ryanair London flights. Your TaxiNeo driver waits at the compact terminal and reaches the Gare des Benedictins in 10 minutes — TGV connections assured, transfers to Oradour and the Perigord Vert.",
      whyUs: [
        { title: "Gare des Benedictins in 10 min", desc: "Our drivers reach the Gare des Benedictins (listed historic monument) in 10 min for your TGV connections to Paris-Austerlitz or Toulouse." },
        { title: "Oradour-sur-Glane memorial", desc: "Direct transfer to the Oradour-sur-Glane martyred village (20 min) and Memorial Centre, with a driver respectful of Limousin history." },
        { title: "Bilingual British residents", desc: "Limoges serves many British residents in the Limousin and Perigord Vert. Our English-speaking drivers handle Ryanair London-Stansted flight pickups." },
      ],
    }
  },
  "caen-carpiquet": {
    fr: {
      intro: "L'aéroport de Caen-Carpiquet (CFR) est la porte de la Normandie, avec 200 000 passagers par an. Situé à 7 km à l'ouest de Caen, il est desservi par Air France, HOP! et Volotea avec des liaisons vers Lyon, Toulouse et des destinations saisonnières. L'aéroport est chargé d'histoire : situé sur un ancien terrain d'aviation de la Seconde Guerre mondiale, il offre un accès direct aux plages du Débarquement — Juno Beach, Sword Beach et Omaha Beach. TaxiNeo vous assure un transfert forfaitaire avec un chauffeur normand.",
      description: "À Caen-Carpiquet, votre taxi vous attend en zone d'arrivée du terminal unique. Nos chauffeurs rejoignent le centre de Caen (château et abbaye) en 10-15 minutes par la rocade. Service 24h/24. Transfert vers les plages du Débarquement (30-40 min) et le port de Ouistreham pour le ferry Brittany Ferries vers Portsmouth (20-25 min). Nos chauffeurs proposent aussi des mises à disposition pour visiter les sites mémoriels : cimetière américain de Colleville, Arromanches, Pointe du Hoc. Réservez à l'avance pour les commémorations du 6 juin.",
      metaDescription: "Taxi Caen-Carpiquet : porte de la Normandie, plages du Débarquement en 30 min, ferry Ouistreham. Ancien terrain WWII, forfait garanti 24h/24.",
      heroSubtitle: "Porte de la Normandie bâtie sur un ancien terrain d'aviation de la Seconde Guerre mondiale, Caen-Carpiquet offre un accès direct aux plages du Débarquement. Votre chauffeur TaxiNeo vous rejoint au terminal et peut vous conduire à Juno Beach, Omaha Beach ou au ferry de Ouistreham — forfait fixe, mise à disposition mémorielle disponible.",
      whyUs: [
        { title: "Plages du Débarquement 30 min", desc: "Transfert direct vers Juno Beach, Sword Beach et Omaha Beach en 30-40 min. Nos chauffeurs normands connaissent aussi Arromanches, la Pointe du Hoc et le cimetière américain." },
        { title: "Ferry Ouistreham-Portsmouth", desc: "Nos chauffeurs assurent les correspondances avec le ferry Brittany Ferries de Ouistreham vers Portsmouth (20 min de l'aéroport), avec suivi horaire du bateau." },
        { title: "Circuit mémoriel mise à disposition", desc: "Mise à disposition à la journée pour visiter les sites mémoriels : Mémorial de Caen, cimetière de Colleville, musée d'Arromanches et plages du Débarquement." },
      ],
    },
    en: {
      intro: "Caen-Carpiquet Airport (CFR) is the gateway to Normandy with 200,000 passengers a year. Located 7 km west of Caen, it is served by Air France, HOP! and Volotea with connections to Lyon, Toulouse and seasonal destinations. The airport is steeped in history: built on a former World War II airfield, it offers direct access to the D-Day beaches — Juno Beach, Sword Beach and Omaha Beach. TaxiNeo provides a fixed-fare transfer with a Norman driver.",
      description: "At Caen-Carpiquet, your taxi waits in the single terminal arrivals area. Our drivers reach central Caen (castle and abbey) in 10-15 minutes via the ring road. Available 24/7. Transfer to the D-Day beaches (30-40 min) and Ouistreham port for the Brittany Ferries service to Portsmouth (20-25 min). Our drivers also offer day hire for visiting memorial sites: the American Cemetery at Colleville, Arromanches, Pointe du Hoc. Book ahead for 6 June commemorations.",
      metaDescription: "Caen-Carpiquet taxi: gateway to Normandy, D-Day beaches in 30 min, Ouistreham ferry. Former WWII airfield, fixed fare 24/7.",
      heroSubtitle: "Gateway to Normandy built on a former WWII airfield, Caen-Carpiquet offers direct access to the D-Day beaches. Your TaxiNeo driver meets you at the terminal and can take you to Juno Beach, Omaha Beach or the Ouistreham ferry — fixed fare with memorial day-hire available.",
      whyUs: [
        { title: "D-Day beaches in 30 min", desc: "Direct transfer to Juno Beach, Sword Beach and Omaha Beach in 30-40 min. Our Norman drivers also know Arromanches, Pointe du Hoc and the American Cemetery." },
        { title: "Ouistreham-Portsmouth ferry", desc: "Our drivers handle Brittany Ferries connections from Ouistreham to Portsmouth (20 min from the airport), with ferry schedule tracking." },
        { title: "Memorial circuit day hire", desc: "Full-day hire for visiting memorial sites: Caen Memorial, Colleville Cemetery, Arromanches Museum and the D-Day beaches." },
      ],
    }
  },
  "tours-val-de-loire": {
    fr: {
      intro: "L'aéroport Tours-Val de Loire (TUF) est la porte d'entrée des Châteaux de la Loire, avec 200 000 passagers par an. Situé à 8 km au nord-est de Tours, il accueille principalement des vols Ryanair depuis Londres, Porto et Marrakech, ainsi que des liaisons Air France. L'aéroport offre un accès direct aux joyaux du Val de Loire : Amboise, Chenonceau, Chambord et Azay-le-Rideau. TaxiNeo vous propose un transfert forfaitaire avec un chauffeur tourangeau passionné de patrimoine.",
      description: "À Tours-Val de Loire, votre taxi vous attend en zone d'arrivée du terminal unique. Nos chauffeurs rejoignent le centre de Tours (Place Plumereau) en 12-18 minutes et la gare TGV de Saint-Pierre-des-Corps en 15 minutes. Service 24h/24 pour les vols Ryanair qui arrivent en soirée. Transfert direct vers Amboise (25-30 min), Chenonceau (30-35 min) et Chambord (45-55 min). Nos chauffeurs peuvent aussi assurer des circuits châteaux à la journée en mise à disposition. Réservez à l'avance pour la saison touristique.",
      metaDescription: "Taxi Tours-Val de Loire : Châteaux Amboise, Chenonceau, Chambord. Vols Ryanair Londres/Porto, gare TGV en 15 min. Forfait garanti, circuits châteaux.",
      heroSubtitle: "Porte d'entrée des Châteaux de la Loire, Tours-Val de Loire dessert 200 000 passagers depuis Londres, Porto et Marrakech. Votre chauffeur TaxiNeo vous attend au terminal et rejoint Amboise en 25 minutes ou Chenonceau en 30 minutes — circuits châteaux en mise à disposition et correspondances gare TGV incluses.",
      whyUs: [
        { title: "Gare TGV Saint-Pierre 15 min", desc: "Nos chauffeurs rejoignent la gare TGV de Saint-Pierre-des-Corps en 15 min pour vos correspondances vers Paris (55 min), Bordeaux (2h) ou Lyon (2h30)." },
        { title: "Circuits châteaux mise à disposition", desc: "Mise à disposition à la journée pour visiter Amboise (25 min), Chenonceau (30 min), Chambord (45 min) et Azay-le-Rideau, avec un chauffeur passionné de patrimoine." },
        { title: "Vols Ryanair Londres et Porto", desc: "Tours reçoit des vols Ryanair en soirée depuis Londres, Porto et Marrakech. Nos chauffeurs assurent les transferts même après 22h vers la Place Plumereau ou les châteaux." },
      ],
    },
    en: {
      intro: "Tours-Val de Loire Airport (TUF) is the gateway to the Loire Valley Châteaux with 200,000 passengers a year. Located 8 km north-east of Tours, it mainly hosts Ryanair flights from London, Porto and Marrakech, plus Air France connections. The airport provides direct access to the Loire Valley treasures: Amboise, Chenonceau, Chambord and Azay-le-Rideau. TaxiNeo offers a fixed-fare transfer with a Tours driver passionate about heritage.",
      description: "At Tours-Val de Loire, your taxi waits in the single terminal arrivals area. Our drivers reach central Tours (Place Plumereau) in 12-18 minutes and Saint-Pierre-des-Corps TGV station in 15 minutes. Available 24/7 for evening Ryanair flights. Direct transfers to Amboise (25-30 min), Chenonceau (30-35 min) and Chambord (45-55 min). Our drivers can also provide full-day château circuit hire. Book ahead for the tourist season.",
      metaDescription: "Tours-Val de Loire taxi: Châteaux Amboise, Chenonceau, Chambord. Ryanair London/Porto flights, TGV station in 15 min. Fixed fare, château circuits.",
      heroSubtitle: "Gateway to the Loire Valley Chateaux, Tours-Val de Loire serves 200,000 passengers from London, Porto and Marrakech. Your TaxiNeo driver waits at the terminal and reaches Amboise in 25 minutes or Chenonceau in 30 — full-day chateau circuits and TGV station connections included.",
      whyUs: [
        { title: "Saint-Pierre TGV station 15 min", desc: "Our drivers reach Saint-Pierre-des-Corps TGV station in 15 min for connections to Paris (55 min), Bordeaux (2h) or Lyon (2h30)." },
        { title: "Chateau circuit day hire", desc: "Full-day hire to visit Amboise (25 min), Chenonceau (30 min), Chambord (45 min) and Azay-le-Rideau, with a heritage-passionate driver." },
        { title: "Ryanair London and Porto flights", desc: "Tours receives evening Ryanair flights from London, Porto and Marrakech. Our drivers handle transfers even after 10pm to Place Plumereau or the chateaux." },
      ],
    }
  },
  "grenoble-isere": {
    fr: {
      intro: "L'aéroport Grenoble-Isère (GNB), situé à Saint-Étienne-de-Saint-Geoirs à 40 km de Grenoble, est le spécialiste des transferts ski dans les Alpes françaises avec 400 000 passagers par an. Principalement actif en saison hivernale, il accueille les vols charters et low-cost d'easyJet, Ryanair et Transavia depuis le Royaume-Uni et l'Europe du Nord. L'aéroport dessert l'Alpe d'Huez, Les Deux Alpes, Chamrousse et l'Oisans. TaxiNeo propose des transferts avec véhicules équipés montagne et chauffeurs habitués aux cols enneigés.",
      description: "À Grenoble-Isère, votre taxi vous attend en zone d'arrivée du terminal unique avec un chauffeur habitué aux conditions hivernales. Nos véhicules sont équipés de pneus neige et/ou chaînes en saison. Transfert vers l'Alpe d'Huez en 1h15-1h30 et vers Les Deux Alpes en 1h20-1h40. Service 24h/24, crucial pour les vols charter du samedi arrivant en milieu de journée. Les voies réservées taxi permettent de quitter l'aéroport plus vite que les navettes collectives. Réservez tôt en saison de ski car les places sont limitées.",
      metaDescription: "Taxi Grenoble-Isère : spécialiste transferts ski, Alpe d'Huez et Deux Alpes. Véhicules équipés neige, chauffeurs alpins, forfait garanti 24h/24.",
      heroSubtitle: "Spécialiste des transferts ski dans les Alpes, Grenoble-Isère dessert 400 000 passagers principalement en hiver. Votre chauffeur TaxiNeo vous attend au terminal avec un véhicule équipé pneus neige et chaînes pour rejoindre l'Alpe d'Huez ou Les Deux Alpes — plus rapide que les navettes collectives, forfait fixe, réservez tôt.",
      whyUs: [
        { title: "Véhicules 4x4 pneus neige", desc: "Nos véhicules sont équipés de pneus neige et chaînes de novembre à avril, avec barres de toit pour les skis. SUV et 4x4 disponibles pour les groupes jusqu'à 8 personnes." },
        { title: "Alpe d'Huez via RD1091 expert", desc: "Nos chauffeurs alpins maîtrisent les 21 virages de la montée de l'Alpe d'Huez (1h15) et le col du Lautaret vers Les Deux Alpes (1h20), même par fort enneigement." },
        { title: "Plus rapide que navettes ski", desc: "Les navettes collectives font plusieurs arrêts. Nos taxis privés quittent l'aéroport immédiatement par les voies réservées, gain de 30-45 min sur le trajet vers les stations." },
      ],
    },
    en: {
      intro: "Grenoble-Isère Airport (GNB), located in Saint-Étienne-de-Saint-Geoirs 40 km from Grenoble, is the specialist for ski transfers in the French Alps with 400,000 passengers a year. Mainly active in winter, it hosts charter and low-cost flights from easyJet, Ryanair and Transavia from the UK and Northern Europe. The airport serves Alpe d'Huez, Les Deux Alpes, Chamrousse and the Oisans valley. TaxiNeo provides transfers with mountain-equipped vehicles and drivers experienced in snowy passes.",
      description: "At Grenoble-Isère, your taxi waits in the single terminal arrivals area with a driver experienced in winter conditions. Our vehicles are fitted with snow tyres and/or chains in season. Transfer to Alpe d'Huez in 1h15-1h30 and Les Deux Alpes in 1h20-1h40. Available 24/7, crucial for Saturday charter flights arriving midday. Reserved taxi lanes mean a faster exit from the airport than shared shuttles. Book early in ski season as availability is limited.",
      metaDescription: "Grenoble-Isère taxi: ski transfer specialist, Alpe d'Huez and Les Deux Alpes. Snow-equipped vehicles, Alpine drivers, fixed fare 24/7.",
      heroSubtitle: "The Alpine ski transfer specialist, Grenoble-Isere serves 400,000 passengers mainly in winter. Your TaxiNeo driver waits at the terminal with a snow-tyre and chain-equipped vehicle to reach Alpe d'Huez or Les Deux Alpes — faster than shared shuttles, fixed fare, book early.",
      whyUs: [
        { title: "4x4 snow-tyre vehicles", desc: "Our vehicles are fitted with snow tyres and chains from November to April, with roof bars for skis. SUVs and 4x4s available for groups up to 8 people." },
        { title: "Alpe d'Huez via RD1091 expert", desc: "Our Alpine drivers master the 21 hairpins of Alpe d'Huez (1h15) and the Col du Lautaret to Les Deux Alpes (1h20), even in heavy snowfall." },
        { title: "Faster than ski shuttles", desc: "Shared shuttles make multiple stops. Our private taxis leave the airport immediately via reserved lanes, saving 30-45 min on the resort journey." },
      ],
    }
  },
  "tarbes-lourdes-pyrenees": {
    fr: {
      intro: "L'aéroport Tarbes-Lourdes-Pyrénées (LDE) est l'aéroport de référence pour les pèlerins de Lourdes et les skieurs des Pyrénées centrales, avec 400 000 passagers par an. Situé à Juillan, à 10 km de Lourdes et 12 km de Tarbes, il accueille des vols Ryanair, HOP! et Volotea depuis l'Italie, l'Espagne, l'Irlande et la Pologne. C'est le seul aéroport français dont le trafic est largement porté par le tourisme religieux. TaxiNeo offre un transfert forfaitaire vers le sanctuaire de Lourdes et les stations pyrénéennes.",
      description: "À Tarbes-Lourdes-Pyrénées, votre taxi vous attend en zone d'arrivée du terminal unique. Nos chauffeurs connaissent la route directe vers le sanctuaire de Lourdes (12-18 min) et le centre de Tarbes (15-20 min). Service 24h/24, essentiel pour les vols charters de pèlerins qui arrivent en groupe. Transfert vers les stations de Cauterets (35-45 min) et Gavarnie (50 min-1h), avec véhicules équipés montagne en hiver. Réservez à l'avance pour les grands pèlerinages internationaux (avril-octobre).",
      metaDescription: "Taxi Tarbes-Lourdes-Pyrénées : sanctuaire de Lourdes en 12 min, stations Cauterets et Gavarnie. Seul aéroport pèlerinage de France, forfait 24h/24.",
      heroSubtitle: "Seul aéroport français porté par le tourisme religieux, Tarbes-Lourdes-Pyrénées accueille 400 000 passagers dont de nombreux pèlerins internationaux. Votre chauffeur TaxiNeo vous conduit au sanctuaire de Lourdes en 12 minutes ou vers les stations de Cauterets et Gavarnie — véhicules montagne en hiver, forfait garanti, service groupes.",
      whyUs: [
        { title: "Sanctuaire Lourdes en 12 min", desc: "Nos chauffeurs empruntent la route directe vers le sanctuaire de Lourdes (12 min) et connaissent les accès aux hôtels et hospitalités pour les groupes de pèlerins." },
        { title: "Charters pèlerins internationaux", desc: "Tarbes reçoit des charters d'Italie, d'Espagne, de Pologne et d'Irlande. Nos chauffeurs sont habitués aux groupes organisés et parlent les bases des langues concernées." },
        { title: "Stations Cauterets et Gavarnie", desc: "Transfert vers Cauterets (35 min) et le cirque de Gavarnie classé UNESCO (50 min) avec véhicules équipés montagne, pneus neige et chaînes en saison hivernale." },
      ],
    },
    en: {
      intro: "Tarbes-Lourdes-Pyrénées Airport (LDE) is the main airport for Lourdes pilgrims and skiers in the central Pyrenees, with 400,000 passengers a year. Located in Juillan, 10 km from Lourdes and 12 km from Tarbes, it hosts Ryanair, HOP! and Volotea flights from Italy, Spain, Ireland and Poland. It is the only French airport whose traffic is largely driven by religious tourism. TaxiNeo offers a fixed-fare transfer to the Lourdes sanctuary and Pyrenean ski resorts.",
      description: "At Tarbes-Lourdes-Pyrénées, your taxi waits in the single terminal arrivals area. Our drivers know the direct route to the Lourdes sanctuary (12-18 min) and central Tarbes (15-20 min). Available 24/7, essential for pilgrim charter flights arriving in groups. Transfer to the resorts of Cauterets (35-45 min) and Gavarnie (50 min-1h), with mountain-equipped vehicles in winter. Book ahead for major international pilgrimages (April-October).",
      metaDescription: "Tarbes-Lourdes-Pyrénées taxi: Lourdes sanctuary in 12 min, Cauterets and Gavarnie resorts. France's only pilgrimage airport, fixed fare 24/7.",
      heroSubtitle: "France's only airport driven by religious tourism, Tarbes-Lourdes-Pyrenees welcomes 400,000 passengers including international pilgrims. Your TaxiNeo driver takes you to the Lourdes sanctuary in 12 minutes or to Cauterets and Gavarnie — mountain vehicles in winter, guaranteed fare, group service.",
      whyUs: [
        { title: "Lourdes sanctuary in 12 min", desc: "Our drivers take the direct route to the Lourdes sanctuary (12 min) and know the access to hotels and hospitality centres for pilgrim groups." },
        { title: "International pilgrim charters", desc: "Tarbes receives charters from Italy, Spain, Poland and Ireland. Our drivers are used to organised groups and speak basics of the relevant languages." },
        { title: "Cauterets and Gavarnie resorts", desc: "Transfer to Cauterets (35 min) and the UNESCO Gavarnie Cirque (50 min) with mountain-equipped vehicles, snow tyres and chains in winter." },
      ],
    }
  },
  "bergerac-dordogne-perigord": {
    fr: {
      intro: "L'aéroport Bergerac Dordogne Périgord (EGC) est la porte d'entrée du Périgord et de la vallée de la Dordogne, avec 280 000 passagers par an. Situé à seulement 3 km du centre de Bergerac, il accueille principalement des vols Ryanair depuis plusieurs villes britanniques. Très prisé par les résidents secondaires anglo-saxons, il offre un accès direct à Sarlat, aux grottes de Lascaux et aux vignobles de Bergerac et Monbazillac. TaxiNeo vous propose un transfert forfaitaire avec un chauffeur périgourdin.",
      description: "À Bergerac Dordogne Périgord, votre taxi vous attend en zone d'arrivée du petit terminal — en 5 minutes vous êtes au centre-ville. Nos chauffeurs connaissent les routes départementales vers Sarlat (45-55 min) à travers les paysages du Périgord Noir et vers Périgueux (35-45 min) par la vallée de la Dordogne. Service 24h/24 pour les vols Ryanair du soir. Transfert direct vers Lascaux (50 min-1h). Le terminal ultra-compact rend la prise en charge instantanée. Réservez à l'avance en été pour les séjours touristiques.",
      metaDescription: "Taxi Bergerac Dordogne Périgord : Sarlat, Lascaux, vignobles Monbazillac. À 3 km du centre, vols Ryanair UK. Forfait garanti, prise en charge instantanée.",
      heroSubtitle: "Porte du Périgord et de la vallée de la Dordogne, Bergerac accueille 280 000 passagers à seulement 3 km du centre. Votre chauffeur TaxiNeo vous récupère au terminal ultra-compact et connaît les routes vers Sarlat, Lascaux et les vignobles de Monbazillac — forfait fixe, prise en charge instantanée, service idéal pour les résidents britanniques.",
      whyUs: [
        { title: "Centre Bergerac en 5 minutes", desc: "L'aéroport est à seulement 3 km du centre : nos chauffeurs vous déposent au vieux Bergerac et la maison des Vins en 5 min, l'un des transferts les plus courts de France." },
        { title: "Routes Périgord Noir vers Sarlat", desc: "Nos chauffeurs connaissent les routes départementales sinueuses du Périgord Noir vers Sarlat (45 min) et Lascaux (50 min), traversant les plus beaux paysages de Dordogne." },
        { title: "Vignobles Monbazillac et Bergerac", desc: "Transfert direct vers le château de Monbazillac (10 min) et les domaines viticoles AOC Bergerac. Mise à disposition possible pour une journée de dégustation." },
      ],
    },
    en: {
      intro: "Bergerac Dordogne Périgord Airport (EGC) is the gateway to the Périgord and the Dordogne Valley with 280,000 passengers a year. Located just 3 km from Bergerac centre, it mainly hosts Ryanair flights from several British cities. Very popular with Anglo-Saxon second-home owners, it offers direct access to Sarlat, the Lascaux caves and the vineyards of Bergerac and Monbazillac. TaxiNeo provides a fixed-fare transfer with a Périgord driver.",
      description: "At Bergerac Dordogne Périgord, your taxi waits in the arrivals area of the small terminal — in 5 minutes you are in the town centre. Our drivers know the departmental roads to Sarlat (45-55 min) through the Périgord Noir landscape and to Périgueux (35-45 min) via the Dordogne valley. Available 24/7 for evening Ryanair flights. Direct transfer to Lascaux (50 min-1h). The ultra-compact terminal makes pickup instant. Book ahead in summer for tourist stays.",
      metaDescription: "Bergerac Dordogne Périgord taxi: Sarlat, Lascaux, Monbazillac vineyards. 3 km from centre, UK Ryanair flights. Fixed fare, instant pickup.",
      heroSubtitle: "Gateway to the Perigord and Dordogne Valley, Bergerac welcomes 280,000 passengers just 3 km from the centre. Your TaxiNeo driver collects you at the ultra-compact terminal and knows the roads to Sarlat, Lascaux and the Monbazillac vineyards — fixed fare, instant pickup, ideal for British residents.",
      whyUs: [
        { title: "Bergerac centre in 5 minutes", desc: "The airport is just 3 km from the centre: our drivers drop you at old Bergerac and the Wine House in 5 min, one of France's shortest transfers." },
        { title: "Perigord Noir roads to Sarlat", desc: "Our drivers know the winding departmental roads of Perigord Noir to Sarlat (45 min) and Lascaux (50 min), crossing the Dordogne's finest landscapes." },
        { title: "Monbazillac and Bergerac wines", desc: "Direct transfer to Chateau de Monbazillac (10 min) and AOC Bergerac wine estates. Day hire available for a tasting tour." },
      ],
    }
  },
  "carcassonne-salvaza": {
    fr: {
      intro: "L'aéroport Carcassonne-Salvaza (CCF) est l'un des plus proches d'un site UNESCO au monde : la Cité Médiévale de Carcassonne est à seulement 3 km. Avec 400 000 passagers par an, il accueille principalement des vols Ryanair depuis le Royaume-Uni, l'Irlande et le Benelux. Porte du Pays Cathare, il offre aussi un accès au Canal du Midi et aux Corbières viticoles. TaxiNeo vous propose un transfert express au forfait — en 5-10 minutes, vous êtes devant les remparts de la Cité.",
      description: "À Carcassonne-Salvaza, votre taxi vous attend à la porte du terminal unique — le transfert vers la Cité Médiévale est probablement le plus court de France (5-10 min, 12 €). Nos chauffeurs connaissent aussi les routes vers Narbonne (40-50 min), le Canal du Midi et les châteaux cathares. Service 24h/24 pour les vols Ryanair en soirée. Transfert vers Toulouse en 1h-1h15 si besoin. Le terminal est si petit que vous voyez votre chauffeur instantanément. Réservez à l'avance pour la saison du Festival de Carcassonne (juillet).",
      metaDescription: "Taxi Carcassonne-Salvaza : Cité Médiévale UNESCO à 3 km, transfert en 5 min à 12 €. Pays Cathare, Canal du Midi. Forfait garanti, réservation 24h/24.",
      heroSubtitle: "L'un des aéroports les plus proches d'un site UNESCO au monde, Carcassonne-Salvaza vous dépose devant les remparts médiévaux en 5 minutes. Votre chauffeur TaxiNeo vous accueille au terminal et connaît aussi les routes vers le Canal du Midi et les châteaux cathares — transfert express à 12 €, disponible 24h/24.",
      whyUs: [
        { title: "Cité Médiévale UNESCO 5 min", desc: "La Cité de Carcassonne est à seulement 3 km. Nos chauffeurs vous déposent au pied des remparts en 5 min pour un forfait de 12 €, le plus court transfert UNESCO de France." },
        { title: "Châteaux cathares et Corbières", desc: "Nos chauffeurs connaissent les routes vers les châteaux cathares (Peyrepertuse, Quéribus) et les vignobles des Corbières, avec mise à disposition possible à la journée." },
        { title: "Canal du Midi et Narbonne", desc: "Transfert vers le Canal du Midi (port de Trèbes, 10 min) ou Narbonne et sa cathédrale (40 min) par l'A61, idéal pour les croisières fluviales et le patrimoine romain." },
      ],
    },
    en: {
      intro: "Carcassonne-Salvaza Airport (CCF) is one of the closest to a UNESCO site in the world: the Medieval Citadel of Carcassonne is just 3 km away. With 400,000 passengers a year, it mainly hosts Ryanair flights from the UK, Ireland and Benelux. Gateway to Cathar Country, it also provides access to the Canal du Midi and the Corbières wine region. TaxiNeo offers an express fixed-fare transfer — in 5-10 minutes you are in front of the Citadel walls.",
      description: "At Carcassonne-Salvaza, your taxi waits at the single terminal door — the transfer to the Medieval Citadel is probably the shortest in France (5-10 min, 12 EUR). Our drivers also know the routes to Narbonne (40-50 min), the Canal du Midi and the Cathar castles. Available 24/7 for evening Ryanair flights. Transfer to Toulouse in 1h-1h15 if needed. The terminal is so small you see your driver instantly. Book ahead for the Carcassonne Festival season (July).",
      metaDescription: "Carcassonne-Salvaza taxi: UNESCO Medieval Citadel 3 km away, 5-min transfer at 12 EUR. Cathar Country, Canal du Midi. Fixed fare, book 24/7.",
      heroSubtitle: "One of the closest airports to a UNESCO site in the world, Carcassonne-Salvaza drops you at the medieval ramparts in 5 minutes. Your TaxiNeo driver greets you at the terminal and also knows routes to the Canal du Midi and Cathar castles — express transfer at 12 EUR, available around the clock.",
      whyUs: [
        { title: "UNESCO Medieval Citadel 5 min", desc: "The Cite de Carcassonne is just 3 km away. Our drivers drop you at the ramparts in 5 min for a 12 EUR fare, France's shortest UNESCO transfer." },
        { title: "Cathar castles and Corbieres", desc: "Our drivers know routes to the Cathar castles (Peyrepertuse, Queribus) and Corbieres vineyards, with full-day hire available." },
        { title: "Canal du Midi and Narbonne", desc: "Transfer to the Canal du Midi (Trebes port, 10 min) or Narbonne and its cathedral (40 min) via the A61, ideal for river cruises and Roman heritage." },
      ],
    }
  },
  "dinard-bretagne": {
    fr: {
      intro: "L'aéroport Dinard-Bretagne (DNR) est la porte de la Côte d'Émeraude et de Saint-Malo, avec 150 000 passagers par an. Situé à 5 km de Dinard et 12 km de Saint-Malo, il accueille principalement des vols Ryanair depuis le Royaume-Uni. Ce petit aéroport au charme breton offre un accès immédiat aux remparts de Saint-Malo, aux plages de Dinard et au village médiéval de Dinan. TaxiNeo vous propose un transfert forfaitaire avec un chauffeur qui connaît la côte nord-bretonne comme sa poche.",
      description: "À Dinard-Bretagne, votre taxi vous attend à la sortie du terminal unique — l'aéroport est si petit que le repérage est instantané. Nos chauffeurs rejoignent Saint-Malo intra-muros en 12-18 minutes par la D168 et le barrage de la Rance. Dinard centre en 8-12 minutes. Service 24h/24 pour les vols Ryanair. Transfert vers Dinan et ses ruelles médiévales en 18-25 min. Pas de bus fiable depuis l'aéroport : le taxi est la solution la plus pratique. Réservez à l'avance pour les week-ends et les vacances scolaires.",
      metaDescription: "Taxi Dinard-Bretagne : Saint-Malo intra-muros en 12 min, Côte d'Émeraude, Dinan médiéval. Vols Ryanair UK, forfait garanti, seul transport fiable.",
      heroSubtitle: "Porte de la Côte d'Émeraude et de Saint-Malo, Dinard-Bretagne accueille 150 000 passagers via des vols Ryanair britanniques. Votre chauffeur TaxiNeo vous attend à la sortie du petit terminal et rejoint les remparts de Saint-Malo en 12 minutes par le barrage de la Rance — forfait fixe, seule option fiable depuis l'aéroport.",
      whyUs: [
        { title: "D168 et barrage de la Rance", desc: "Nos chauffeurs empruntent la D168 puis le barrage de la Rance pour relier Saint-Malo intra-muros en 12 minutes, évitant les détours par la rocade sud de Dinard." },
        { title: "Spécialiste vols Ryanair UK", desc: "Dinard accueille quasi exclusivement des vols Ryanair depuis Londres, Manchester et East Midlands. Nos chauffeurs connaissent les horaires et adaptent la prise en charge au terminal unique." },
        { title: "Navette Dinan et Côte d'Émeraude", desc: "Transfert vers Dinan et ses ruelles médiévales en 18 min par la D766, ou vers le Cap Fréhel et Fort La Latte en 35 min — seul transport fiable depuis cet aéroport sans bus." },
      ],
    },
    en: {
      intro: "Dinard-Bretagne Airport (DNR) is the gateway to the Emerald Coast and Saint-Malo with 150,000 passengers a year. Located 5 km from Dinard and 12 km from Saint-Malo, it mainly hosts Ryanair flights from the UK. This small airport with Breton charm provides immediate access to the ramparts of Saint-Malo, the beaches of Dinard and the medieval village of Dinan. TaxiNeo offers a fixed-fare transfer with a driver who knows the north Brittany coast inside out.",
      description: "At Dinard-Bretagne, your taxi waits at the single terminal exit — the airport is so small that finding your driver is instant. Our drivers reach Saint-Malo intra-muros in 12-18 minutes via the D168 and the Rance dam. Dinard centre in 8-12 minutes. Available 24/7 for Ryanair flights. Transfer to Dinan and its medieval lanes in 18-25 min. No reliable bus from the airport: the taxi is the most practical option. Book ahead for weekends and school holidays.",
      metaDescription: "Dinard-Bretagne taxi: Saint-Malo intra-muros in 12 min, Emerald Coast, medieval Dinan. UK Ryanair flights, fixed fare, only reliable transport.",
      heroSubtitle: "Gateway to the Emerald Coast and Saint-Malo, Dinard-Bretagne welcomes 150,000 passengers on British Ryanair flights. Your TaxiNeo driver waits at the small terminal exit and reaches the Saint-Malo ramparts in 12 minutes via the Rance dam — fixed fare, the only reliable option from the airport.",
      whyUs: [
        { title: "D168 and Rance dam route", desc: "Our drivers take the D168 then the Rance dam to reach Saint-Malo intra-muros in 12 minutes, bypassing the southern Dinard ring road detour." },
        { title: "UK Ryanair flight specialist", desc: "Dinard hosts almost exclusively Ryanair flights from London, Manchester and East Midlands. Our drivers know every schedule and meet you at the single terminal." },
        { title: "Dinan and Emerald Coast shuttle", desc: "Transfer to medieval Dinan in 18 min via the D766, or to Cap Fréhel and Fort La Latte in 35 min — the only reliable transport from this bus-free airport." },
      ],
    }
  },
  "poitiers-biard": {
    fr: {
      intro: "L'aéroport Poitiers-Biard (PIS) dessert la Vienne et le Poitou avec 100 000 passagers par an. Situé à seulement 4 km à l'ouest du centre de Poitiers, c'est l'aéroport le plus proche du Futuroscope (12-18 min en taxi). Desservi par HOP! et Air France vers Paris et Lyon, il est surtout utilisé par les voyageurs d'affaires et les familles en route pour le parc d'attractions. TaxiNeo vous assure un transfert rapide au forfait avec un chauffeur poitevin.",
      description: "À Poitiers-Biard, votre taxi vous attend en zone d'arrivée du terminal unique. Nos chauffeurs rejoignent le centre-ville et la gare TGV en 8-12 minutes, et le Futuroscope en 12-18 minutes par la N10. Service 24h/24 pour les vols du matin et du soir. Le terminal est ultra-compact : en 30 secondes vous êtes dans le taxi. Transfert vers Châtellerault (30-35 min). Réservez à l'avance pour les séjours Futuroscope, surtout pendant les vacances scolaires.",
      metaDescription: "Taxi Poitiers-Biard : aéroport le plus proche du Futuroscope (12 min), gare TGV en 8 min. Terminal ultra-compact, forfait garanti 24h/24.",
      heroSubtitle: "Aéroport le plus proche du Futuroscope à seulement 4 km de Poitiers, Poitiers-Biard sert voyageurs d'affaires et familles. Votre chauffeur TaxiNeo vous accueille au terminal ultra-compact et rejoint le Futuroscope en 12 minutes ou la gare TGV en 8 — forfait fixe, en 30 secondes vous êtes dans le taxi.",
      whyUs: [
        { title: "Accès direct N10 Futuroscope", desc: "Nos chauffeurs rejoignent le Futuroscope en 12 minutes par la N10, entrée principale du parc, sans traverser le centre-ville de Poitiers ni la zone commerciale de Chasseneuil." },
        { title: "Terminal unique ultra-compact", desc: "Poitiers-Biard ne possède qu'un seul terminal de 800 m² : en 30 secondes après les bagages, vous êtes dans le taxi. Aucun risque de se perdre dans l'aérogare." },
        { title: "Liaison gare TGV Poitiers", desc: "Transfert vers la gare TGV de Poitiers en 8 minutes par la D910 pour vos correspondances vers Paris-Montparnasse, Bordeaux ou La Rochelle." },
      ],
    },
    en: {
      intro: "Poitiers-Biard Airport (PIS) serves the Vienne department and the Poitou region with 100,000 passengers a year. Located just 4 km west of Poitiers centre, it is the nearest airport to the Futuroscope theme park (12-18 min by taxi). Served by HOP! and Air France to Paris and Lyon, it is mainly used by business travellers and families heading to the park. TaxiNeo provides a fast fixed-fare transfer with a local Poitiers driver.",
      description: "At Poitiers-Biard, your taxi waits in the single terminal arrivals area. Our drivers reach the city centre and TGV station in 8-12 minutes, and the Futuroscope in 12-18 minutes via the N10. Available 24/7 for morning and evening flights. The terminal is ultra-compact: in 30 seconds you are in the taxi. Transfer to Châtellerault (30-35 min). Book ahead for Futuroscope stays, especially during school holidays.",
      metaDescription: "Poitiers-Biard taxi: nearest airport to Futuroscope (12 min), TGV station in 8 min. Ultra-compact terminal, fixed fare 24/7.",
      heroSubtitle: "The closest airport to Futuroscope, just 4 km from Poitiers, Poitiers-Biard serves business travellers and families. Your TaxiNeo driver greets you at the ultra-compact terminal and reaches Futuroscope in 12 minutes or the TGV station in 8 — fixed fare, in 30 seconds you are in the taxi.",
      whyUs: [
        { title: "Direct N10 Futuroscope access", desc: "Our drivers reach Futuroscope in 12 minutes via the N10 main entrance, bypassing Poitiers city centre and the Chasseneuil commercial zone entirely." },
        { title: "Ultra-compact single terminal", desc: "Poitiers-Biard has just one 800 m² terminal: 30 seconds after baggage claim and you are in the taxi. Zero risk of getting lost in the airport." },
        { title: "Poitiers TGV station link", desc: "Transfer to Poitiers TGV station in 8 minutes via the D910 for connections to Paris-Montparnasse, Bordeaux or La Rochelle." },
      ],
    }
  },
  "rodez-aveyron": {
    fr: {
      intro: "L'aéroport Rodez-Aveyron (RDZ) dessert l'Aveyron et le sud du Massif central avec 180 000 passagers par an. Situé à Marcillac-Vallon, à 10 km du centre de Rodez, il accueille les vols HOP! vers Paris-CDG et des liaisons Ryanair saisonnières. L'aéroport offre un accès direct au musée Soulages, au village de Conques (étape de Compostelle) et au célèbre viaduc de Millau. TaxiNeo vous propose un transfert forfaitaire avec un chauffeur aveyronnais qui connaît les routes sinueuses du Rouergue.",
      description: "À Rodez-Aveyron, votre taxi vous attend en zone d'arrivée du terminal unique. Nos chauffeurs rejoignent le centre de Rodez et le musée Soulages en 12-18 minutes. Service 24h/24 pour le vol quotidien vers Paris. Transfert vers Conques (30-40 min) pour les pèlerins de Compostelle et vers le viaduc de Millau (50 min-1h) pour les touristes. Les routes aveyronnaises sont sinueuses : un chauffeur local fait toute la différence. Réservez à l'avance pour les week-ends et les ponts.",
      metaDescription: "Taxi Rodez-Aveyron : musée Soulages, Conques (Compostelle), viaduc de Millau. 180 000 passagers, chauffeur local routes sinueuses, forfait 24h/24.",
      heroSubtitle: "Accès direct au musée Soulages, au village de Conques sur le chemin de Compostelle et au viaduc de Millau, Rodez-Aveyron dessert 180 000 passagers. Votre chauffeur TaxiNeo connaît les routes sinueuses du Rouergue et rejoint le centre en 12 minutes — forfait garanti, indispensable dans l'Aveyron.",
      whyUs: [
        { title: "Expertise routes sinueuses D901", desc: "Les routes aveyronnaises sont étroites et sinueuses. Nos chauffeurs locaux maîtrisent la D901 vers Marcillac-Vallon et la D988 vers Rodez sans GPS, en toute sécurité." },
        { title: "Transfert Conques pèlerins GR65", desc: "Transfert direct vers Conques, étape clé du chemin de Compostelle (GR65), en 30 minutes par la D901. Prise en charge des bagages de pèlerins incluse." },
        { title: "Accès viaduc de Millau par A75", desc: "Nos chauffeurs rejoignent le viaduc de Millau en 50 minutes par la D988 puis l'A75 gratuite, avec arrêt photo possible à l'aire du viaduc." },
      ],
    },
    en: {
      intro: "Rodez-Aveyron Airport (RDZ) serves the Aveyron and the southern Massif Central with 180,000 passengers a year. Located in Marcillac-Vallon, 10 km from Rodez centre, it hosts HOP! flights to Paris-CDG and seasonal Ryanair connections. The airport offers direct access to the Soulages Museum, the village of Conques (a Compostela pilgrimage stop) and the famous Millau Viaduct. TaxiNeo provides a fixed-fare transfer with an Aveyron driver who knows the winding Rouergue roads.",
      description: "At Rodez-Aveyron, your taxi waits in the single terminal arrivals area. Our drivers reach central Rodez and the Soulages Museum in 12-18 minutes. Available 24/7 for the daily Paris flight. Transfer to Conques (30-40 min) for Compostela pilgrims and to the Millau Viaduct (50 min-1h) for tourists. Aveyron roads are winding: a local driver makes all the difference. Book ahead for weekends and bank holidays.",
      metaDescription: "Rodez-Aveyron taxi: Soulages Museum, Conques (Compostela), Millau Viaduct. 180K passengers, local driver for winding roads, fixed fare 24/7.",
      heroSubtitle: "Direct access to the Soulages Museum, the Compostela village of Conques and the Millau Viaduct, Rodez-Aveyron serves 180,000 passengers. Your TaxiNeo driver knows the winding Rouergue roads and reaches the centre in 12 minutes — guaranteed fare, essential in the Aveyron.",
      whyUs: [
        { title: "Winding D901 road expertise", desc: "Aveyron roads are narrow and winding. Our local drivers master the D901 to Marcillac-Vallon and the D988 to Rodez without GPS, safely at all times." },
        { title: "Conques GR65 pilgrim transfer", desc: "Direct transfer to Conques, a key stop on the Camino de Santiago (GR65), in 30 minutes via the D901. Pilgrim luggage handling included." },
        { title: "Millau Viaduct via free A75", desc: "Our drivers reach the Millau Viaduct in 50 minutes via the D988 then the toll-free A75, with a photo stop available at the viaduct viewpoint." },
      ],
    }
  },
  "metz-nancy-lorraine": {
    fr: {
      intro: "L'aéroport Metz-Nancy-Lorraine (ETZ) dessert les deux grandes métropoles lorraines et le Luxembourg voisin avec 300 000 passagers par an. Situé à Goin, à mi-chemin entre Metz (35 km) et Nancy (40 km), il est couplé à la gare TGV Lorraine pour des correspondances rapides. Desservi par Air France, Transavia et easyJet, il propose des vols vers le sud de la France et la Méditerranée. TaxiNeo vous offre un transfert forfaitaire vers Metz (Centre Pompidou), Nancy (Place Stanislas) ou même le Luxembourg.",
      description: "À Metz-Nancy-Lorraine, votre taxi vous attend en zone d'arrivée du terminal unique. Nos chauffeurs rejoignent Metz centre en 30-40 minutes par l'A31 et Nancy centre en 35-45 minutes. Connexion avec la gare TGV Lorraine adjacente en 5-8 minutes. Service 24h/24 pour les vols matinaux et de soirée. Transfert vers le Luxembourg (1h-1h15) pour les frontaliers. Les voies réservées taxi assurent une sortie rapide de la zone aéroportuaire. Réservez à l'avance pour les correspondances TGV.",
      metaDescription: "Taxi Metz-Nancy-Lorraine : Metz, Nancy et Luxembourg desservis, gare TGV adjacente en 5 min. 300 000 passagers, forfait garanti 24h/24.",
      heroSubtitle: "Stratégiquement placé entre Metz et Nancy avec une gare TGV adjacente, Metz-Nancy-Lorraine dessert aussi le Luxembourg. Votre chauffeur TaxiNeo vous attend au terminal et rejoint le Centre Pompidou-Metz ou la Place Stanislas de Nancy — correspondances TGV en 5 minutes, transferts transfrontaliers, forfait fixe.",
      whyUs: [
        { title: "A31 express Metz et Nancy", desc: "Nos chauffeurs rejoignent Metz centre par l'A31 en 30 minutes et Nancy Place Stanislas en 35 minutes, avec connaissance des sorties optimales selon le trafic lorrain." },
        { title: "Correspondance gare TGV Lorraine", desc: "La gare TGV Lorraine est à 5 minutes du terminal. Nos chauffeurs assurent les correspondances TGV vers Paris-Est, Strasbourg et Luxembourg sans stress." },
        { title: "Transferts transfrontaliers Luxembourg", desc: "Nos chauffeurs effectuent des transferts vers Luxembourg-Ville en 1h par l'A31 puis l'A3 luxembourgeoise, idéal pour les frontaliers et voyageurs d'affaires." },
      ],
    },
    en: {
      intro: "Metz-Nancy-Lorraine Airport (ETZ) serves both major Lorraine cities and neighbouring Luxembourg with 300,000 passengers a year. Located in Goin, halfway between Metz (35 km) and Nancy (40 km), it is paired with the Lorraine TGV station for fast connections. Served by Air France, Transavia and easyJet, it offers flights to southern France and the Mediterranean. TaxiNeo provides a fixed-fare transfer to Metz (Centre Pompidou), Nancy (Place Stanislas) or even Luxembourg.",
      description: "At Metz-Nancy-Lorraine, your taxi waits in the single terminal arrivals area. Our drivers reach central Metz in 30-40 minutes via the A31 and central Nancy in 35-45 minutes. Connection with the adjacent Lorraine TGV station in 5-8 minutes. Available 24/7 for morning and evening flights. Transfer to Luxembourg (1h-1h15) for cross-border commuters. Reserved taxi lanes ensure a quick exit from the airport zone. Book ahead for TGV connections.",
      metaDescription: "Metz-Nancy-Lorraine taxi: serving Metz, Nancy and Luxembourg, adjacent TGV station in 5 min. 300K passengers, fixed fare 24/7.",
      heroSubtitle: "Strategically placed between Metz and Nancy with an adjacent TGV station, Metz-Nancy-Lorraine also serves Luxembourg. Your TaxiNeo driver waits at the terminal and reaches Centre Pompidou-Metz or Place Stanislas Nancy — TGV connections in 5 minutes, cross-border transfers, fixed fare.",
      whyUs: [
        { title: "A31 express to Metz and Nancy", desc: "Our drivers reach central Metz via the A31 in 30 minutes and Nancy Place Stanislas in 35 minutes, with knowledge of optimal exits based on Lorraine traffic flow." },
        { title: "Lorraine TGV station connection", desc: "The Lorraine TGV station is 5 minutes from the terminal. Our drivers handle TGV connections to Paris-Est, Strasbourg and Luxembourg stress-free." },
        { title: "Cross-border Luxembourg transfers", desc: "Our drivers transfer to Luxembourg City in 1h via the A31 then the Luxembourg A3 motorway, ideal for cross-border commuters and business travellers." },
      ],
    }
  },
  "chambery-savoie-mont-blanc": {
    fr: {
      intro: "L'aéroport Chambéry-Savoie Mont Blanc (CMF) est l'aéroport de référence pour les prestigieuses stations des 3 Vallées — Courchevel, Méribel, Val Thorens — avec 250 000 passagers par an, essentiellement en saison hivernale. Situé à 10 km de Chambéry, il accueille des vols charters et réguliers d'easyJet, Jet2 et TUI depuis le Royaume-Uni et la Scandinavie. TaxiNeo propose des transferts au forfait avec des véhicules 4x4 et SUV équipés montagne, conduits par des chauffeurs savoyards habitués aux routes alpines.",
      description: "À Chambéry-Savoie Mont Blanc, votre taxi vous attend en zone d'arrivée avec un chauffeur prêt pour la montagne. Nos véhicules sont équipés de pneus neige, chaînes et barres de toit pour les skis. Transfert vers Courchevel en 1h15-1h30, Méribel en 1h10-1h25 et Val Thorens en 1h30-1h45. Service 24h/24, crucial pour les vols charters du samedi matin. Plus rapide et plus confortable que les navettes collectives. Transfert vers Aix-les-Bains (15-20 min) aussi disponible. Réservez au moins une semaine à l'avance en saison de ski.",
      metaDescription: "Taxi Chambéry-Savoie : stations 3 Vallées (Courchevel, Méribel, Val Thorens). 4x4 équipés neige, chauffeurs savoyards, forfait garanti 24h/24.",
      heroSubtitle: "Aéroport de référence des 3 Vallées — Courchevel, Méribel, Val Thorens — Chambéry-Savoie Mont Blanc dessert 250 000 passagers en hiver. Votre chauffeur TaxiNeo vous attend avec un 4x4 équipé pneus neige, chaînes et barres de toit pour les skis — plus rapide que les navettes, forfait fixe, réservez une semaine avant.",
      whyUs: [
        { title: "4x4 équipés neige et chaînes", desc: "Nos SUV et 4x4 sont équipés de pneus neige homologués, chaînes et barres de toit pour les skis, indispensables sur la N90 et la D915 vers les 3 Vallées en hiver." },
        { title: "Chauffeurs alpins route Tarentaise", desc: "Nos chauffeurs savoyards connaissent la vallée de la Tarentaise par cœur : lacets de la D915 vers Méribel, montée de Courchevel par la D91a, col de la Loze." },
        { title: "Aix-les-Bains et lac du Bourget", desc: "Transfert vers Aix-les-Bains et le lac du Bourget en 15 minutes par la N201, idéal en été pour les curistes et les amateurs de voile sur le plus grand lac naturel de France." },
      ],
    },
    en: {
      intro: "Chambéry-Savoie Mont Blanc Airport (CMF) is the go-to airport for the prestigious 3 Valleys resorts — Courchevel, Méribel, Val Thorens — with 250,000 passengers a year, mainly in winter. Located 10 km from Chambéry, it hosts charter and scheduled flights from easyJet, Jet2 and TUI from the UK and Scandinavia. TaxiNeo offers fixed-fare transfers with 4x4 and SUV vehicles mountain-equipped, driven by Savoyard drivers experienced on Alpine roads.",
      description: "At Chambéry-Savoie Mont Blanc, your taxi waits in the arrivals area with a driver ready for the mountains. Our vehicles are equipped with snow tyres, chains and roof bars for skis. Transfer to Courchevel in 1h15-1h30, Méribel in 1h10-1h25 and Val Thorens in 1h30-1h45. Available 24/7, crucial for Saturday morning charter flights. Faster and more comfortable than shared shuttles. Transfer to Aix-les-Bains (15-20 min) also available. Book at least a week ahead in ski season.",
      metaDescription: "Chambéry-Savoie taxi: 3 Valleys resorts (Courchevel, Méribel, Val Thorens). Snow-equipped 4x4s, Savoyard drivers, fixed fare 24/7.",
      heroSubtitle: "The go-to airport for the 3 Valleys — Courchevel, Meribel, Val Thorens — Chambery-Savoie Mont Blanc serves 250,000 winter passengers. Your TaxiNeo driver waits with a snow-tyre 4x4 fitted with chains and ski roof bars — faster than shared shuttles, fixed fare, book a week ahead.",
      whyUs: [
        { title: "Snow-equipped 4x4s with chains", desc: "Our SUVs and 4x4s come with certified snow tyres, chains and ski roof bars, essential on the N90 and D915 to the 3 Valleys in winter." },
        { title: "Alpine drivers on Tarentaise road", desc: "Our Savoyard drivers know the Tarentaise valley inside out: D915 hairpins to Méribel, Courchevel climb on the D91a, Col de la Loze pass." },
        { title: "Aix-les-Bains and Lac du Bourget", desc: "Transfer to Aix-les-Bains and Lac du Bourget in 15 minutes via the N201, ideal in summer for spa-goers and sailors on France's largest natural lake." },
      ],
    }
  },
  "annecy-haute-savoie": {
    fr: {
      intro: "L'aéroport Annecy-Haute-Savoie Mont Blanc (NCY) est un petit aéroport régional situé à 5 km du lac d'Annecy, l'un des plus beaux lacs d'Europe. Avec 100 000 passagers par an, il accueille des vols Air France et des liaisons saisonnières easyJet. Alternative à l'aéroport de Genève (45-55 min en taxi), il offre un accès direct au vieux Annecy, au lac et aux stations de ski des Aravis (La Clusaz, Le Grand-Bornand). TaxiNeo vous propose un transfert forfaitaire avec un chauffeur haut-savoyard.",
      description: "À Annecy-Haute-Savoie, votre taxi vous attend en zone d'arrivée du petit terminal. En 8-12 minutes, vous êtes au bord du lac ou dans la vieille ville. Nos chauffeurs connaissent la route vers Talloires (18-25 min) et les stations de ski comme La Clusaz (35-45 min), avec véhicules équipés montagne en hiver. Service 24h/24. L'aéroport étant très compact, la prise en charge est instantanée. Transfert vers Genève (45-55 min) en alternative. Réservez à l'avance pour les week-ends d'été au lac et la saison de ski.",
      metaDescription: "Taxi Annecy-Haute-Savoie : lac d'Annecy en 8 min, La Clusaz ski, alternative à Genève. Véhicules montagne, prise en charge instantanée, forfait 24h/24.",
      heroSubtitle: "À 5 km de l'un des plus beaux lacs d'Europe, Annecy-Haute-Savoie est une alternative à Genève pour accéder aux Aravis. Votre chauffeur TaxiNeo vous rejoint au petit terminal et vous conduit au lac en 8 minutes ou à La Clusaz en 35 — véhicules montagne en hiver, prise en charge instantanée, forfait garanti.",
      whyUs: [
        { title: "Route D1508 vers lac d'Annecy", desc: "Nos chauffeurs empruntent la D1508 pour rejoindre les rives du lac d'Annecy en 8 minutes, avec dépose possible à Talloires, Menthon-Saint-Bernard ou le Pâquier." },
        { title: "Stations Aravis La Clusaz D909", desc: "Transfert vers La Clusaz et Le Grand-Bornand en 35 minutes par la D909 avec véhicules équipés pneus neige et chaînes en hiver. Chauffeurs haut-savoyards." },
        { title: "Alternative à Genève-Cointrin", desc: "À 45 minutes de Genève par l'A41, Annecy est une alternative pratique. Nos chauffeurs assurent aussi les transferts depuis Genève-Cointrin vers Annecy et les Aravis." },
      ],
    },
    en: {
      intro: "Annecy-Haute-Savoie Mont Blanc Airport (NCY) is a small regional airport located 5 km from Lake Annecy, one of the most beautiful lakes in Europe. With 100,000 passengers a year, it hosts Air France flights and seasonal easyJet services. An alternative to Geneva Airport (45-55 min by taxi), it offers direct access to old Annecy, the lake and the Aravis ski resorts (La Clusaz, Le Grand-Bornand). TaxiNeo provides a fixed-fare transfer with a Haute-Savoie driver.",
      description: "At Annecy-Haute-Savoie, your taxi waits in the small terminal arrivals area. In 8-12 minutes you are at the lakeside or in the old town. Our drivers know the road to Talloires (18-25 min) and ski resorts like La Clusaz (35-45 min), with mountain-equipped vehicles in winter. Available 24/7. The very compact airport means instant pickup. Transfer to Geneva (45-55 min) as an alternative. Book ahead for summer lake weekends and the ski season.",
      metaDescription: "Annecy-Haute-Savoie taxi: Lake Annecy in 8 min, La Clusaz skiing, Geneva alternative. Mountain vehicles, instant pickup, fixed fare 24/7.",
      heroSubtitle: "Just 5 km from one of Europe's most beautiful lakes, Annecy-Haute-Savoie is a Geneva alternative for reaching the Aravis. Your TaxiNeo driver meets you at the small terminal and takes you to the lake in 8 minutes or La Clusaz in 35 — mountain vehicles in winter, instant pickup, guaranteed fare.",
      whyUs: [
        { title: "D1508 route to Lake Annecy", desc: "Our drivers take the D1508 to reach the shores of Lake Annecy in 8 minutes, with drop-off at Talloires, Menthon-Saint-Bernard or the Pâquier promenade." },
        { title: "Aravis resorts via D909", desc: "Transfer to La Clusaz and Le Grand-Bornand in 35 minutes via the D909 with snow-tyre and chain-equipped vehicles in winter. Haute-Savoie local drivers." },
        { title: "Geneva-Cointrin alternative", desc: "Just 45 minutes from Geneva via the A41, Annecy is a practical alternative. Our drivers also cover transfers from Geneva-Cointrin to Annecy and the Aravis." },
      ],
    }
  },
  "lorient-bretagne-sud": {
    fr: {
      intro: "L'aéroport Lorient-Bretagne Sud (LRT) dessert le Morbihan et la côte sud de la Bretagne avec 150 000 passagers par an. Situé à Ploemeur, à 8 km du centre de Lorient, il accueille les vols HOP! et Chalair vers Paris. Porte d'entrée de Quiberon, Belle-Île-en-Mer et des alignements mégalithiques de Carnac, il est aussi l'aéroport du Festival Interceltique de Lorient. TaxiNeo vous propose un transfert forfaitaire avec un chauffeur morbihannais qui connaît la côte et les îles.",
      description: "À Lorient-Bretagne Sud, votre taxi vous attend en zone d'arrivée du terminal unique. Nos chauffeurs rejoignent le centre de Lorient en 10-15 minutes et Quiberon en 40-50 minutes pour l'embarquement vers Belle-Île. Service 24h/24. Transfert vers Carnac et ses mégalithes en 25-35 min et vers Vannes en 35-45 min. Pas de transport en commun fiable depuis l'aéroport : le taxi est indispensable. Réservez à l'avance pour le Festival Interceltique (août) et les traversées vers Belle-Île.",
      metaDescription: "Taxi Lorient-Bretagne Sud : Belle-Île, Carnac mégalithes, Festival Interceltique. 150 000 passagers, seul transport fiable, forfait garanti 24h/24.",
      heroSubtitle: "Porte de Belle-Île-en-Mer et des alignements de Carnac, Lorient-Bretagne Sud dessert 150 000 passagers et accueille le Festival Interceltique. Votre chauffeur TaxiNeo vous attend au terminal et rejoint Quiberon pour le ferry en 40 minutes — seul transport fiable depuis l'aéroport, forfait fixe, service 24h/24.",
      whyUs: [
        { title: "D768 express vers Quiberon", desc: "Nos chauffeurs empruntent la D768 puis la presqu'île de Quiberon pour vous déposer au port en 40 minutes, calé sur les horaires du ferry vers Belle-Île-en-Mer." },
        { title: "Expert mégalithes de Carnac", desc: "Transfert vers les alignements de Carnac et le musée de la Préhistoire en 25 minutes par la N165 puis la D781. Nos chauffeurs morbihannais connaissent chaque site." },
        { title: "Festival Interceltique en août", desc: "Pendant le Festival Interceltique (10 jours en août), Lorient est saturé. Nos chauffeurs anticipent les fermetures de rues et les déviations vers le palais des congrès." },
      ],
    },
    en: {
      intro: "Lorient-Bretagne Sud Airport (LRT) serves the Morbihan and Brittany's south coast with 150,000 passengers a year. Located in Ploemeur, 8 km from Lorient centre, it hosts HOP! and Chalair flights to Paris. Gateway to Quiberon, Belle-Île-en-Mer and the Carnac megalithic alignments, it is also the airport for the Lorient Interceltique Festival. TaxiNeo offers a fixed-fare transfer with a Morbihan driver who knows the coast and islands.",
      description: "At Lorient-Bretagne Sud, your taxi waits in the single terminal arrivals area. Our drivers reach central Lorient in 10-15 minutes and Quiberon in 40-50 minutes for the Belle-Île ferry. Available 24/7. Transfer to Carnac and its megaliths in 25-35 min and Vannes in 35-45 min. No reliable public transport from the airport: a taxi is essential. Book ahead for the Interceltique Festival (August) and Belle-Île crossings.",
      metaDescription: "Lorient-Bretagne Sud taxi: Belle-Île, Carnac megaliths, Interceltique Festival. 150K passengers, only reliable transport, fixed fare 24/7.",
      heroSubtitle: "Gateway to Belle-Ile-en-Mer and the Carnac alignments, Lorient-Bretagne Sud serves 150,000 passengers and hosts the Interceltique Festival. Your TaxiNeo driver waits at the terminal and reaches Quiberon for the ferry in 40 minutes — the only reliable transport from the airport, fixed fare, 24/7 service.",
      whyUs: [
        { title: "D768 express to Quiberon", desc: "Our drivers take the D768 then the Quiberon peninsula to drop you at the port in 40 minutes, timed to the Belle-Île-en-Mer ferry schedule." },
        { title: "Carnac megaliths expert", desc: "Transfer to the Carnac alignments and the Prehistory Museum in 25 minutes via the N165 then D781. Our Morbihan drivers know every site." },
        { title: "Interceltique Festival in August", desc: "During the 10-day Interceltique Festival in August, Lorient is gridlocked. Our drivers anticipate street closures and detours to the conference centre." },
      ],
    }
  },
  "avignon-provence": {
    fr: {
      intro: "L'aéroport Avignon-Provence (AVN) est un petit aéroport saisonnier situé à 8 km du centre d'Avignon et du Palais des Papes. Avec 80 000 passagers par an, il accueille principalement des vols saisonniers depuis le Royaume-Uni. Mais surtout, il est stratégiquement placé à côté de la gare TGV Avignon, ce qui en fait un point de correspondance clé. Porte du Lubéron, des Alpilles et du Ventoux, il offre un accès au cœur de la Provence. TaxiNeo assure un transfert forfaitaire vers la cité des Papes et les villages provençaux.",
      description: "À Avignon-Provence, votre taxi vous attend en zone d'arrivée du terminal unique. Nos chauffeurs rejoignent le Palais des Papes en 12-15 minutes et la gare TGV en 8-10 minutes. Service 24h/24, y compris pour les correspondances gare TGV. Transfert vers Gordes et le Lubéron (40-50 min), Orange et le théâtre antique (25-30 min). Idéal pendant le Festival d'Avignon (juillet) quand les taxis classiques sont pris d'assaut. Réservez à l'avance pour le festival et la saison de lavande.",
      metaDescription: "Taxi Avignon-Provence : Palais des Papes en 12 min, gare TGV en 8 min, Lubéron et Gordes. Festival d'Avignon, saison lavande. Forfait garanti 24h/24.",
      heroSubtitle: "Stratégiquement placé près de la gare TGV, Avignon-Provence ouvre sur le Lubéron, les Alpilles et le Mont Ventoux. Votre chauffeur TaxiNeo rejoint le Palais des Papes en 12 minutes et Gordes en 40 — idéal pendant le Festival d'Avignon quand les taxis sont pris d'assaut, forfait fixe, saison lavande incluse.",
      whyUs: [
        { title: "Liaison gare TGV Avignon 8 min", desc: "Nos chauffeurs relient l'aéroport à la gare TGV Avignon en 8 minutes par la rocade sud, assurant vos correspondances vers Paris-Gare de Lyon, Marseille et Lyon." },
        { title: "Expert Lubéron et villages perchés", desc: "Transfert vers Gordes, Roussillon et Bonnieux en 40 minutes par la D900 puis la D2. Nos chauffeurs connaissent les routes étroites des villages perchés du Lubéron." },
        { title: "Service Festival d'Avignon juillet", desc: "En juillet, le Festival d'Avignon sature les rues intra-muros. Nos chauffeurs maîtrisent les accès par la porte Saint-Lazare et les parkings relais du Palais des Papes." },
      ],
    },
    en: {
      intro: "Avignon-Provence Airport (AVN) is a small seasonal airport located 8 km from Avignon centre and the Palais des Papes. With 80,000 passengers a year, it mainly hosts seasonal flights from the UK. More importantly, it is strategically placed next to Avignon TGV station, making it a key connection point. Gateway to the Lubéron, the Alpilles and Mont Ventoux, it offers access to the heart of Provence. TaxiNeo provides a fixed-fare transfer to the papal city and Provençal villages.",
      description: "At Avignon-Provence, your taxi waits in the single terminal arrivals area. Our drivers reach the Palais des Papes in 12-15 minutes and the TGV station in 8-10 minutes. Available 24/7, including for TGV connections. Transfer to Gordes and the Lubéron (40-50 min), Orange and the Roman theatre (25-30 min). Ideal during the Festival d'Avignon (July) when regular taxis are overwhelmed. Book ahead for the festival and lavender season.",
      metaDescription: "Avignon-Provence taxi: Palais des Papes in 12 min, TGV station in 8 min, Lubéron and Gordes. Festival d'Avignon, lavender season. Fixed fare 24/7.",
      heroSubtitle: "Strategically placed near the TGV station, Avignon-Provence opens onto the Luberon, Alpilles and Mont Ventoux. Your TaxiNeo driver reaches the Palais des Papes in 12 minutes and Gordes in 40 — ideal during the Festival d'Avignon when taxis are overwhelmed, fixed fare, lavender season included.",
      whyUs: [
        { title: "Avignon TGV station in 8 min", desc: "Our drivers connect the airport to Avignon TGV station in 8 minutes via the southern ring road, ensuring connections to Paris-Gare de Lyon, Marseille and Lyon." },
        { title: "Luberon hilltop villages expert", desc: "Transfer to Gordes, Roussillon and Bonnieux in 40 minutes via the D900 then D2. Our drivers know the narrow roads of the perched Luberon villages." },
        { title: "Festival d'Avignon July service", desc: "In July, the Festival d'Avignon gridlocks the old town. Our drivers master access via Porte Saint-Lazare and the park-and-ride near the Palais des Papes." },
      ],
    }
  },
  "nimes-garons": {
    fr: {
      intro: "L'aéroport Nîmes-Garons (FNI) dessert la ville romaine de Nîmes, la Camargue et le Pont du Gard avec 200 000 passagers par an. Situé sur l'ancienne base aéronavale de Garons, à 12 km au sud de Nîmes, il accueille principalement des vols Ryanair depuis le Royaume-Uni et la Belgique. L'aéroport est la porte d'entrée du patrimoine antique nîmois (Arènes, Maison Carrée) et des paysages sauvages de Camargue. TaxiNeo vous offre un transfert forfaitaire avec un chauffeur qui connaît l'histoire de chaque pierre.",
      description: "À Nîmes-Garons, votre taxi vous attend en zone d'arrivée du terminal. Nos chauffeurs rejoignent les Arènes de Nîmes en 15-20 minutes par la route de l'aéroport. Service 24h/24, adapté aux horaires Ryanair. Transfert vers le Pont du Gard (25-30 min) et vers les Saintes-Maries-de-la-Mer en Camargue (45-55 min). Possibilité de mise à disposition pour les visites touristiques. Uzès et ses marchés provençaux à 30-35 min. Réservez à l'avance pour les férias de Nîmes (Pentecôte et septembre).",
      metaDescription: "Taxi Nîmes-Garons : Arènes romaines, Pont du Gard, Camargue sauvage. Ancienne base aéronavale, 200 000 passagers. Forfait garanti, férias 24h/24.",
      heroSubtitle: "Porte du patrimoine antique nîmois et de la Camargue sauvage, Nîmes-Garons dessert 200 000 passagers depuis son ancienne base aéronavale. Votre chauffeur TaxiNeo rejoint les Arènes en 15 minutes et propose des transferts vers le Pont du Gard ou les Saintes-Maries-de-la-Mer — mise à disposition possible, forfait fixe, idéal pour les férias.",
      whyUs: [
        { title: "Route aéroport D442 vers Arènes", desc: "Nos chauffeurs empruntent la D442 depuis l'ancienne base aéronavale de Garons pour rejoindre les Arènes de Nîmes en 15 minutes, sans traverser la zone industrielle sud." },
        { title: "Circuit Pont du Gard et Uzès", desc: "Transfert vers le Pont du Gard en 25 minutes par la D999 puis vers Uzès et ses marchés provençaux en 30 minutes. Mise à disposition journée pour les sites antiques." },
        { title: "Camargue et Saintes-Maries-de-la-Mer", desc: "Nos chauffeurs rejoignent les Saintes-Maries-de-la-Mer en 45 minutes par la D979 à travers les marais et les manades, idéal pour les férias de Pentecôte et septembre." },
      ],
    },
    en: {
      intro: "Nîmes-Garons Airport (FNI) serves the Roman city of Nîmes, the Camargue and the Pont du Gard with 200,000 passengers a year. Located on the former Garons naval air base, 12 km south of Nîmes, it mainly hosts Ryanair flights from the UK and Belgium. The airport is the gateway to Nîmes' ancient heritage (Arena, Maison Carrée) and the wild landscapes of the Camargue. TaxiNeo provides a fixed-fare transfer with a driver who knows the history of every stone.",
      description: "At Nîmes-Garons, your taxi waits in the terminal arrivals area. Our drivers reach the Nîmes Arena in 15-20 minutes via the airport road. Available 24/7, matching Ryanair schedules. Transfer to the Pont du Gard (25-30 min) and to Saintes-Maries-de-la-Mer in the Camargue (45-55 min). Day hire available for sightseeing tours. Uzès and its Provençal markets are 30-35 min away. Book ahead for the Nîmes ferias (Whitsun and September).",
      metaDescription: "Nîmes-Garons taxi: Roman Arena, Pont du Gard, wild Camargue. Former naval air base, 200K passengers. Fixed fare, ferias service 24/7.",
      heroSubtitle: "Gateway to Roman Nimes and the wild Camargue, Nimes-Garons serves 200,000 passengers from its former naval air base. Your TaxiNeo driver reaches the Arena in 15 minutes and offers transfers to the Pont du Gard or Saintes-Maries-de-la-Mer — day hire available, fixed fare, ideal for the ferias.",
      whyUs: [
        { title: "D442 airport road to the Arena", desc: "Our drivers take the D442 from the former Garons naval air base to reach the Nîmes Arena in 15 minutes, bypassing the southern industrial zone entirely." },
        { title: "Pont du Gard and Uzès circuit", desc: "Transfer to the Pont du Gard in 25 minutes via the D999 then to Uzès and its Provençal markets in 30 minutes. Full-day hire available for ancient sites." },
        { title: "Camargue and Saintes-Maries-de-la-Mer", desc: "Our drivers reach Saintes-Maries-de-la-Mer in 45 minutes via the D979 through the marshes and ranches, ideal for the Whitsun and September ferias." },
      ],
    }
  },
  "deauville-normandie": {
    fr: {
      intro: "L'aéroport Deauville-Normandie (DOL) dessert la Côte Fleurie normande avec 100 000 passagers par an. Situé à Saint-Gatien-des-Bois, à 8 km de Deauville, il accueille des vols Chalair et des liaisons saisonnières. Porte d'entrée de Deauville et ses planches célèbres, de Trouville et ses marchés de poissons, et de Honfleur et son Vieux Bassin peint par les impressionnistes. TaxiNeo vous assure un transfert forfaitaire vers les stations balnéaires normandes avec un chauffeur qui connaît les meilleurs itinéraires côtiers.",
      description: "À Deauville-Normandie, votre taxi vous attend en zone d'arrivée du terminal unique. Nos chauffeurs rejoignent les planches de Deauville en 10-15 minutes et Honfleur en 18-25 minutes. Service 24h/24. Transfert vers Cabourg (20-30 min) et la côte proustienne. Pas de transport en commun pratique depuis l'aéroport : le taxi est la seule option confortable. Réservez à l'avance pour le Festival du Cinéma Américain (septembre), les courses hippiques et les ventes de yearlings.",
      metaDescription: "Taxi Deauville-Normandie : planches en 10 min, Honfleur, Côte Fleurie. Festival du Cinéma, courses hippiques. Seule option confortable, forfait 24h/24.",
      heroSubtitle: "Porte de la Côte Fleurie normande, Deauville-Normandie ouvre sur les planches, Honfleur et les impressionnistes. Votre chauffeur TaxiNeo vous attend au terminal et rejoint Deauville en 10 minutes ou Honfleur en 18 — seule option de transport confortable depuis l'aéroport, forfait fixe, idéal pour le Festival du Cinéma.",
      whyUs: [
        { title: "D74 express vers les planches", desc: "Nos chauffeurs empruntent la D74 depuis Saint-Gatien-des-Bois pour rejoindre les planches de Deauville en 10 minutes, sans passer par le centre saturé de Trouville." },
        { title: "Honfleur et Vieux Bassin D579", desc: "Transfert vers Honfleur et son Vieux Bassin peint par Monet et Boudin en 18 minutes par la D579, avec dépose au pied de la lieutenance." },
        { title: "Courses hippiques et ventes yearlings", desc: "Nos chauffeurs connaissent l'accès à l'hippodrome de Deauville-La Touques et au centre de ventes de yearlings, essentiels pendant le meeting d'août et les ventes d'octobre." },
      ],
    },
    en: {
      intro: "Deauville-Normandie Airport (DOL) serves Normandy's Côte Fleurie with 100,000 passengers a year. Located in Saint-Gatien-des-Bois, 8 km from Deauville, it hosts Chalair flights and seasonal connections. Gateway to Deauville and its famous boardwalk, Trouville and its fish markets, and Honfleur and its Old Basin painted by the Impressionists. TaxiNeo provides a fixed-fare transfer to the Norman seaside resorts with a driver who knows the best coastal routes.",
      description: "At Deauville-Normandie, your taxi waits in the single terminal arrivals area. Our drivers reach the Deauville boardwalk in 10-15 minutes and Honfleur in 18-25 minutes. Available 24/7. Transfer to Cabourg (20-30 min) and the Proustian coast. No practical public transport from the airport: the taxi is the only comfortable option. Book ahead for the American Film Festival (September), horse racing and yearling sales.",
      metaDescription: "Deauville-Normandie taxi: boardwalk in 10 min, Honfleur, Côte Fleurie. Film Festival, horse racing. Only comfortable option, fixed fare 24/7.",
      heroSubtitle: "Gateway to Normandy's Cote Fleurie, Deauville-Normandie opens onto the boardwalk, Honfleur and the Impressionists. Your TaxiNeo driver waits at the terminal and reaches Deauville in 10 minutes or Honfleur in 18 — the only comfortable transport from the airport, fixed fare, ideal for the Film Festival.",
      whyUs: [
        { title: "D74 express to the boardwalk", desc: "Our drivers take the D74 from Saint-Gatien-des-Bois to reach the Deauville boardwalk in 10 minutes, avoiding the congested Trouville town centre." },
        { title: "Honfleur Old Basin via D579", desc: "Transfer to Honfleur and its Old Basin painted by Monet and Boudin in 18 minutes via the D579, with drop-off at the foot of the Lieutenance." },
        { title: "Horse racing and yearling sales", desc: "Our drivers know the access to Deauville-La Touques racecourse and the yearling sales centre, essential during the August meeting and October sales." },
      ],
    }
  },
  "dole-jura": {
    fr: {
      intro: "L'aéroport Dole-Jura (DLE) dessert la Franche-Comté et le nord de la Bourgogne avec 200 000 passagers par an. Situé à Tavaux, à 5 km de Dole (ville natale de Pasteur), il est à mi-chemin entre Besançon et Dijon. Desservi par Ryanair et TUI avec des vols vers le Portugal, le Maroc et le Royaume-Uni, il constitue une alternative économique aux grands aéroports. TaxiNeo vous propose un transfert forfaitaire avec un chauffeur franc-comtois qui dessert Besançon, Dijon et les stations du Jura.",
      description: "À Dole-Jura, votre taxi vous attend en zone d'arrivée du terminal unique. Nos chauffeurs rejoignent Dole centre en 8-12 minutes, Besançon en 35-45 min et Dijon en 40-50 min par l'A39. Service 24h/24 pour les vols Ryanair. Transfert vers les Salines d'Arc-et-Senans (UNESCO) en 15-20 min et vers les stations de ski du Jura en hiver. L'aéroport est bien positionné pour explorer le Jura et la Bourgogne. Réservez à l'avance pour les week-ends de randonnée et la saison de ski nordique.",
      metaDescription: "Taxi Dole-Jura : entre Besançon et Dijon, Salines UNESCO, ville de Pasteur. Vols Ryanair/TUI, ski nordique Jura. Forfait garanti 24h/24.",
      heroSubtitle: "Entre Besançon et Dijon, à 5 km de la ville natale de Pasteur, Dole-Jura est une alternative économique avec 200 000 passagers. Votre chauffeur TaxiNeo dessert les Salines d'Arc-et-Senans classées UNESCO en 15 minutes et les stations du Jura en hiver — forfait fixe, ski nordique et randonnée, service 24h/24.",
      whyUs: [
        { title: "A39 express Besançon et Dijon", desc: "Nos chauffeurs rejoignent Besançon en 35 minutes par l'A39 sortie 4 et Dijon en 40 minutes par l'A39 puis l'A36, connaissant les sorties optimales en cas de trafic." },
        { title: "Salines UNESCO Arc-et-Senans", desc: "Transfert vers les Salines Royales d'Arc-et-Senans, chef-d'œuvre de Ledoux classé UNESCO, en 15 minutes par la D472 depuis l'aéroport de Tavaux." },
        { title: "Stations ski nordique du Jura", desc: "En hiver, nos chauffeurs rejoignent Les Rousses et Métabief en 1h15 par la N5 avec véhicules équipés neige, idéal pour le ski de fond et la GTJ." },
      ],
    },
    en: {
      intro: "Dole-Jura Airport (DLE) serves Franche-Comté and northern Burgundy with 200,000 passengers a year. Located in Tavaux, 5 km from Dole (birthplace of Pasteur), it sits halfway between Besançon and Dijon. Served by Ryanair and TUI with flights to Portugal, Morocco and the UK, it is an affordable alternative to major airports. TaxiNeo offers a fixed-fare transfer with a Franc-Comtois driver serving Besançon, Dijon and the Jura resorts.",
      description: "At Dole-Jura, your taxi waits in the single terminal arrivals area. Our drivers reach Dole centre in 8-12 minutes, Besançon in 35-45 min and Dijon in 40-50 min via the A39. Available 24/7 for Ryanair flights. Transfer to the Arc-et-Senans Royal Saltworks (UNESCO) in 15-20 min and Jura ski resorts in winter. The airport is well positioned for exploring the Jura and Burgundy. Book ahead for hiking weekends and the cross-country ski season.",
      metaDescription: "Dole-Jura taxi: between Besançon and Dijon, UNESCO Saltworks, Pasteur's birthplace. Ryanair/TUI flights, Jura Nordic skiing. Fixed fare 24/7.",
      heroSubtitle: "Between Besancon and Dijon, 5 km from Pasteur's birthplace, Dole-Jura is an affordable alternative with 200,000 passengers. Your TaxiNeo driver serves the UNESCO Arc-et-Senans Saltworks in 15 minutes and Jura resorts in winter — fixed fare, Nordic skiing and hiking, 24/7 service.",
      whyUs: [
        { title: "A39 express to Besancon and Dijon", desc: "Our drivers reach Besançon in 35 minutes via the A39 exit 4 and Dijon in 40 minutes via the A39 then A36, knowing optimal exits in case of traffic." },
        { title: "UNESCO Arc-et-Senans Saltworks", desc: "Transfer to the Royal Saltworks of Arc-et-Senans, Ledoux's UNESCO masterpiece, in 15 minutes via the D472 from Tavaux airport." },
        { title: "Jura Nordic ski resorts", desc: "In winter, our drivers reach Les Rousses and Métabief in 1h15 via the N5 with snow-equipped vehicles, ideal for cross-country skiing and the GTJ trail." },
      ],
    }
  },
  "angouleme-cognac": {
    fr: {
      intro: "L'aéroport Angoulême-Cognac (ANG) est la porte du pays du Cognac et de la Charente, avec 50 000 passagers par an. Situé à Brie-Champniers, à 10 km au nord-est d'Angoulême, il accueille des vols saisonniers Ryanair vers le Royaume-Uni. L'aéroport offre un accès direct aux grandes maisons de Cognac (Hennessy, Martell, Rémy Martin) à Cognac et Jarnac, ainsi qu'au célèbre Festival International de la Bande Dessinée d'Angoulême. TaxiNeo propose un transfert forfaitaire avec un chauffeur charentais.",
      description: "À Angoulême-Cognac, votre taxi vous attend en zone d'arrivée du terminal unique. Nos chauffeurs rejoignent le centre d'Angoulême et ses fresques murales en 12-18 minutes et Cognac en 25-30 minutes par la N141. Service 24h/24 pour les vols saisonniers. Mise à disposition possible pour visiter les chais de Cognac (Hennessy, Martell, Courvoisier). Le petit terminal rend la prise en charge immédiate. Réservez à l'avance pour le Festival de la BD (janvier) et la saison touristique estivale.",
      metaDescription: "Taxi Angoulême-Cognac : maisons Hennessy, Martell, Festival BD. Pays du Cognac en 25 min, vols Ryanair UK. Visite chais en mise à disposition, forfait 24h/24.",
      heroSubtitle: "Porte du pays du Cognac et du Festival de la Bande Dessinée, Angoulême-Cognac accueille 50 000 passagers. Votre chauffeur TaxiNeo rejoint Cognac et ses maisons prestigieuses en 25 minutes par la N141 — mise à disposition possible pour visiter les chais Hennessy ou Martell, forfait fixe, prise en charge immédiate.",
      whyUs: [
        { title: "N141 express vers Cognac", desc: "Nos chauffeurs empruntent la N141 depuis Brie-Champniers pour rejoindre Cognac en 25 minutes, avec dépose directe devant les chais Hennessy ou Martell sur les quais de la Charente." },
        { title: "Visite chais en mise à disposition", desc: "Mise à disposition à la journée pour visiter les maisons Hennessy, Martell, Rémy Martin et Courvoisier à Cognac et Jarnac. Nos chauffeurs connaissent chaque domaine." },
        { title: "Festival BD Angoulême janvier", desc: "Pendant le Festival de la BD en janvier, la ville haute d'Angoulême est piétonne. Nos chauffeurs connaissent les accès par le plateau et les parkings relais de la gare." },
      ],
    },
    en: {
      intro: "Angoulême-Cognac Airport (ANG) is the gateway to Cognac country and the Charente with 50,000 passengers a year. Located in Brie-Champniers, 10 km north-east of Angoulême, it hosts seasonal Ryanair flights from the UK. The airport offers direct access to the great Cognac houses (Hennessy, Martell, Rémy Martin) in Cognac and Jarnac, and to the renowned Angoulême International Comics Festival. TaxiNeo provides a fixed-fare transfer with a Charente driver.",
      description: "At Angoulême-Cognac, your taxi waits in the single terminal arrivals area. Our drivers reach central Angoulême and its wall murals in 12-18 minutes and Cognac in 25-30 minutes via the N141. Available 24/7 for seasonal flights. Day hire available for visiting Cognac cellars (Hennessy, Martell, Courvoisier). The small terminal means instant pickup. Book ahead for the Comics Festival (January) and the summer tourist season.",
      metaDescription: "Angoulême-Cognac taxi: Hennessy, Martell houses, Comics Festival. Cognac country in 25 min, UK Ryanair flights. Cellar tours day hire, fixed fare 24/7.",
      heroSubtitle: "Gateway to Cognac country and the Comics Festival, Angouleme-Cognac welcomes 50,000 passengers. Your TaxiNeo driver reaches Cognac and its prestigious houses in 25 minutes via the N141 — day hire available for Hennessy or Martell cellar visits, fixed fare, instant pickup.",
      whyUs: [
        { title: "N141 express to Cognac", desc: "Our drivers take the N141 from Brie-Champniers to reach Cognac in 25 minutes, with drop-off directly in front of the Hennessy or Martell cellars on the Charente quays." },
        { title: "Cognac cellar day hire tours", desc: "Full-day hire to visit the Hennessy, Martell, Rémy Martin and Courvoisier houses in Cognac and Jarnac. Our drivers know every estate and access road." },
        { title: "Angouleme Comics Festival January", desc: "During the January Comics Festival, upper Angoulême is pedestrianised. Our drivers know plateau access routes and park-and-ride at the railway station." },
      ],
    }
  },
  "agen-la-garenne": {
    fr: {
      intro: "L'aéroport Agen-La Garenne (AGF) est un petit aéroport régional situé à seulement 4 km du centre d'Agen, avec 50 000 passagers par an. Desservi par HOP! avec des liaisons quotidiennes vers Paris-CDG, il est utilisé principalement par les voyageurs d'affaires et les habitants du Lot-et-Garonne. Agen est célèbre pour ses pruneaux, son rugby (SUA) et sa douceur de vivre gasconne. TaxiNeo vous garantit un transfert ultra-rapide au forfait vers le centre-ville en 6-10 minutes.",
      description: "À Agen-La Garenne, votre taxi vous attend à la sortie du terminal unique — le transfert vers le centre-ville est l'un des plus rapides de France (6-10 minutes). Nos chauffeurs connaissent les routes vers Moissac et son cloître roman (25-30 min) et Villeneuve-sur-Lot (25-35 min). Service 24h/24, calé sur les horaires des vols Paris-CDG. Le terminal est minuscule : vous voyez votre chauffeur instantanément. Transfert vers le stade Armandie pour les matchs du SUA Agen. Réservez à l'avance pour les jours de match.",
      metaDescription: "Taxi Agen-La Garenne : centre-ville en 6 min, l'un des plus rapides de France. Vols HOP! Paris-CDG, Moissac, rugby SUA. Forfait garanti 24h/24.",
      heroSubtitle: "L'un des transferts aéroport-centre les plus rapides de France avec 6 minutes vers Agen, La Garenne dessert 50 000 passagers via HOP! Paris-CDG. Votre chauffeur TaxiNeo vous attend au terminal minuscule et connaît les routes vers Moissac ou le stade Armandie pour les matchs du SUA — forfait fixe, douceur gasconne assurée.",
      whyUs: [
        { title: "6 min centre-ville par D813", desc: "Nos chauffeurs empruntent la D813 pour rejoindre le boulevard de la République à Agen en 6 minutes — l'un des transferts aéroport-centre les plus courts de France." },
        { title: "Cloître Moissac et canal latéral", desc: "Transfert vers Moissac et son cloître roman classé UNESCO en 25 minutes par la N113 le long du canal latéral à la Garonne, avec dépose au pied de l'abbaye." },
        { title: "Stade Armandie matchs SUA", desc: "Nos chauffeurs connaissent les accès au stade Armandie pour les matchs du SUA Agen (Pro D2 rugby), avec stationnement adapté les jours de match et retour garanti." },
      ],
    },
    en: {
      intro: "Agen-La Garenne Airport (AGF) is a small regional airport located just 4 km from Agen centre with 50,000 passengers a year. Served by HOP! with daily connections to Paris-CDG, it is mainly used by business travellers and Lot-et-Garonne residents. Agen is famous for its prunes, its rugby team (SUA) and its Gascon way of life. TaxiNeo guarantees an ultra-fast fixed-fare transfer to the city centre in 6-10 minutes.",
      description: "At Agen-La Garenne, your taxi waits at the single terminal exit — the transfer to the city centre is one of the fastest in France (6-10 minutes). Our drivers know the routes to Moissac and its Romanesque cloister (25-30 min) and Villeneuve-sur-Lot (25-35 min). Available 24/7, timed to Paris-CDG flight schedules. The terminal is tiny: you see your driver instantly. Transfer to Stade Armandie for SUA Agen matches. Book ahead for match days.",
      metaDescription: "Agen-La Garenne taxi: city centre in 6 min, one of France's fastest. HOP! Paris-CDG flights, Moissac, SUA rugby. Fixed fare 24/7.",
      heroSubtitle: "One of France's fastest airport-to-centre transfers at 6 minutes to Agen, La Garenne serves 50,000 passengers via HOP! Paris-CDG. Your TaxiNeo driver waits at the tiny terminal and knows routes to Moissac or Stade Armandie for SUA matches — fixed fare, Gascon charm guaranteed.",
      whyUs: [
        { title: "6 min to centre via D813", desc: "Our drivers take the D813 to reach Boulevard de la République in Agen in 6 minutes — one of the shortest airport-to-centre transfers in France." },
        { title: "UNESCO Moissac cloister transfer", desc: "Transfer to Moissac and its UNESCO-listed Romanesque cloister in 25 minutes via the N113 along the Canal latéral à la Garonne, with drop-off at the abbey." },
        { title: "Stade Armandie SUA match days", desc: "Our drivers know the access routes to Stade Armandie for SUA Agen rugby matches (Pro D2), with adapted parking on match days and guaranteed return." },
      ],
    }
  },
  "lannion-cote-de-granit-rose": {
    fr: {
      intro: "L'aéroport Lannion-Côte de Granit Rose (LAI) dessert les Côtes-d'Armor et l'un des littoraux les plus spectaculaires de France avec 80 000 passagers par an. Situé à 5 km du centre de Lannion, il accueille les vols HOP! et Chalair vers Paris. L'aéroport est aussi le point d'accès au pôle technologique de Lannion (télécommunications) et aux rochers de granit rose de Ploumanac'h, classés parmi les plus beaux sites naturels d'Europe. TaxiNeo vous propose un transfert forfaitaire avec un chauffeur trégorois.",
      description: "À Lannion-Côte de Granit Rose, votre taxi vous attend à la sortie du petit terminal unique. Nos chauffeurs rejoignent le centre de Lannion en 8-12 minutes et Perros-Guirec en 15-20 minutes. Service 24h/24 pour les vols du matin et du soir vers Paris. Transfert vers Trégastel et ses rochers roses (18-25 min) et vers Ploumanac'h (18-22 min). Pas de transport en commun pratique depuis l'aéroport. Réservez à l'avance pour la saison estivale et les événements technologiques de Lannion.",
      metaDescription: "Taxi Lannion-Côte de Granit Rose : rochers roses Ploumanac'h, pôle télécom. Perros-Guirec en 15 min, vols Paris. Forfait garanti, aucun bus 24h/24.",
      heroSubtitle: "Accès aux rochers de granit rose de Ploumanac'h parmi les plus beaux sites d'Europe, Lannion dessert aussi le pôle télécom breton. Votre chauffeur TaxiNeo vous attend au petit terminal et rejoint Perros-Guirec en 15 minutes ou Trégastel en 18 — aucun transport en commun depuis l'aéroport, forfait fixe, service 24h/24.",
      whyUs: [
        { title: "D788 côtière vers Perros-Guirec", desc: "Nos chauffeurs empruntent la D788 côtière pour rejoindre Perros-Guirec en 15 minutes et le sentier des douaniers de Ploumanac'h en 18 min, sans détour par l'intérieur." },
        { title: "Pôle télécom Nokia-Orange Lannion", desc: "Transfert direct vers le pôle technologique de Lannion (Nokia, Orange, startups télécom) en 8 minutes. Nos chauffeurs connaissent les zones d'activités de la Corderie et du Trégor." },
        { title: "Seul transport depuis l'aéroport", desc: "Aucun bus ni navette ne dessert l'aéroport de Lannion. Le taxi est le seul moyen de rejoindre Trégastel, l'Île-Grande ou le sentier du GR34 le long du littoral rose." },
      ],
    },
    en: {
      intro: "Lannion-Côte de Granit Rose Airport (LAI) serves the Côtes-d'Armor and one of France's most spectacular coastlines with 80,000 passengers a year. Located 5 km from Lannion centre, it hosts HOP! and Chalair flights to Paris. The airport is also the access point for Lannion's technology hub (telecommunications) and the pink granite rocks of Ploumanac'h, ranked among Europe's most beautiful natural sites. TaxiNeo offers a fixed-fare transfer with a Trégor driver.",
      description: "At Lannion-Côte de Granit Rose, your taxi waits at the small single terminal exit. Our drivers reach central Lannion in 8-12 minutes and Perros-Guirec in 15-20 minutes. Available 24/7 for morning and evening Paris flights. Transfer to Trégastel and its pink rocks (18-25 min) and Ploumanac'h (18-22 min). No practical public transport from the airport. Book ahead for the summer season and Lannion technology events.",
      metaDescription: "Lannion-Côte de Granit Rose taxi: pink Ploumanac'h rocks, telecom hub. Perros-Guirec in 15 min, Paris flights. Fixed fare, no bus service 24/7.",
      heroSubtitle: "Access to the pink granite rocks of Ploumanac'h among Europe's finest natural sites, Lannion also serves the Breton telecom hub. Your TaxiNeo driver waits at the small terminal and reaches Perros-Guirec in 15 minutes or Tregastel in 18 — no public transport from the airport, fixed fare, 24/7 service.",
      whyUs: [
        { title: "Coastal D788 to Perros-Guirec", desc: "Our drivers take the coastal D788 to reach Perros-Guirec in 15 minutes and the Ploumanac'h customs path in 18 min, without detours through the inland." },
        { title: "Nokia-Orange Lannion tech hub", desc: "Direct transfer to the Lannion technology hub (Nokia, Orange, telecom startups) in 8 minutes. Our drivers know the Corderie and Trégor business parks." },
        { title: "Only transport from the airport", desc: "No bus or shuttle serves Lannion airport. The taxi is the only way to reach Trégastel, Île-Grande or the GR34 coastal path along the pink granite shore." },
      ],
    }
  },
  "quimper-cornouaille": {
    fr: {
      intro: "L'aéroport Quimper-Cornouaille (UIP) dessert le Finistère Sud et la Cornouaille bretonne avec 100 000 passagers par an. Situé à Pluguffan, à 7 km du centre de Quimper, il accueille les vols HOP! et Chalair vers Paris-Orly. Porte d'entrée de la Cornouaille, il offre un accès direct à Bénodet, Concarneau (ville close), Pont-Aven (cité des peintres de l'école de Gauguin) et aux plages du Finistère Sud. TaxiNeo vous propose un transfert forfaitaire avec un chauffeur cornouaillais.",
      description: "À Quimper-Cornouaille, votre taxi vous attend en zone d'arrivée du terminal unique. Nos chauffeurs rejoignent le centre de Quimper (cathédrale Saint-Corentin) en 10-15 minutes et Bénodet en 15-20 minutes. Service 24h/24 pour les vols quotidiens vers Paris. Transfert vers Concarneau en 20-25 minutes et Pont-Aven en 18-25 minutes. Prise en charge immédiate dans ce petit aéroport breton. Réservez à l'avance pour le Festival de Cornouaille (juillet) et les grandes marées.",
      metaDescription: "Taxi Quimper-Cornouaille : Concarneau, Pont-Aven (Gauguin), Bénodet. Vols Paris-Orly quotidiens, Finistère Sud. Prise en charge immédiate, forfait 24h/24.",
      heroSubtitle: "Porte de la Cornouaille bretonne avec accès direct à Concarneau, Pont-Aven et Bénodet, Quimper-Cornouaille dessert 100 000 passagers vers Paris-Orly. Votre chauffeur TaxiNeo vous attend au petit terminal et rejoint la cathédrale Saint-Corentin en 10 minutes — forfait fixe, idéal pour le Festival de Cornouaille et les grandes marées.",
      whyUs: [
        { title: "D785 rapide vers Concarneau", desc: "Nos chauffeurs empruntent la D785 depuis Pluguffan pour rejoindre la ville close de Concarneau en 20 minutes et ses remparts du XIVe siècle, sans passer par le centre de Quimper." },
        { title: "Pont-Aven cité des peintres", desc: "Transfert vers Pont-Aven, la cité de Gauguin et de l'école de peinture, en 18 minutes par la D783 avec dépose au moulin du Bois d'Amour." },
        { title: "Festival de Cornouaille juillet", desc: "Pendant le Festival de Cornouaille (4e semaine de juillet), la vieille ville de Quimper est fermée. Nos chauffeurs connaissent les accès par les quais de l'Odet et le parking de la Providence." },
      ],
    },
    en: {
      intro: "Quimper-Cornouaille Airport (UIP) serves southern Finistère and the Breton Cornouaille with 100,000 passengers a year. Located in Pluguffan, 7 km from Quimper centre, it hosts HOP! and Chalair flights to Paris-Orly. Gateway to the Cornouaille, it provides direct access to Bénodet, Concarneau (walled town), Pont-Aven (artists' town of the Gauguin school) and the beaches of southern Finistère. TaxiNeo offers a fixed-fare transfer with a Cornouaille driver.",
      description: "At Quimper-Cornouaille, your taxi waits in the single terminal arrivals area. Our drivers reach central Quimper (Saint-Corentin Cathedral) in 10-15 minutes and Bénodet in 15-20 minutes. Available 24/7 for daily Paris flights. Transfer to Concarneau in 20-25 minutes and Pont-Aven in 18-25 minutes. Instant pickup at this small Breton airport. Book ahead for the Festival de Cornouaille (July) and the spring tides.",
      metaDescription: "Quimper-Cornouaille taxi: Concarneau, Pont-Aven (Gauguin), Bénodet. Daily Paris-Orly flights, southern Finistère. Instant pickup, fixed fare 24/7.",
      heroSubtitle: "Gateway to the Breton Cornouaille with direct access to Concarneau, Pont-Aven and Benodet, Quimper-Cornouaille serves 100,000 passengers to Paris-Orly. Your TaxiNeo driver waits at the small terminal and reaches Saint-Corentin Cathedral in 10 minutes — fixed fare, ideal for the Festival de Cornouaille and spring tides.",
      whyUs: [
        { title: "D785 fast route to Concarneau", desc: "Our drivers take the D785 from Pluguffan to reach the walled town of Concarneau in 20 minutes and its 14th-century ramparts, bypassing Quimper centre." },
        { title: "Pont-Aven artists' town", desc: "Transfer to Pont-Aven, Gauguin's town and home of the painting school, in 18 minutes via the D783 with drop-off at the Bois d'Amour mill." },
        { title: "Festival de Cornouaille in July", desc: "During the Festival de Cornouaille (4th week of July), old Quimper is closed to traffic. Our drivers know access via the Odet quays and Providence car park." },
      ],
    }
  },
  "castres-mazamet": {
    fr: {
      intro: "L'aéroport Castres-Mazamet (DCM) dessert le sud du Tarn et la Montagne Noire avec 50 000 passagers par an. Situé à 8 km du centre de Castres, il accueille des vols HOP! vers Paris-Orly, essentiels pour le tissu industriel et pharmaceutique de Castres (Pierre Fabre). L'aéroport offre aussi un accès à Mazamet, au pays de Cocagne et à la cité épiscopale d'Albi (classée UNESCO). TaxiNeo vous propose un transfert forfaitaire avec un chauffeur tarnais qui connaît les routes du Sidobre.",
      description: "À Castres-Mazamet, votre taxi vous attend en zone d'arrivée du terminal unique. Nos chauffeurs rejoignent le centre de Castres et les bords de l'Agout en 10-15 minutes. Service 24h/24, adapté aux horaires des navettes HOP! vers Paris. Transfert vers Mazamet (15-20 min) et vers Albi et le musée Toulouse-Lautrec (40-50 min). Terminal compact, prise en charge immédiate. Réservez à l'avance pour les déplacements professionnels Pierre Fabre.",
      metaDescription: "Taxi Castres-Mazamet : siège Pierre Fabre, Albi UNESCO en 40 min, Montagne Noire. Vols HOP! Paris-Orly, Sidobre. Forfait garanti, compact 24h/24.",
      heroSubtitle: "Essentiel au tissu pharmaceutique Pierre Fabre, Castres-Mazamet dessert 50 000 passagers vers Paris-Orly et donne accès à la cité d'Albi classée UNESCO. Votre chauffeur TaxiNeo rejoint le centre en 10 minutes et Albi en 40 par les routes du Sidobre — forfait fixe, prise en charge immédiate, service 24h/24.",
      whyUs: [
        { title: "D622 express vers siège Pierre Fabre", desc: "Nos chauffeurs empruntent la D622 pour rejoindre le siège mondial de Pierre Fabre à Castres en 10 minutes, avec connaissance des accès aux sites de Soual et Lavaur." },
        { title: "Albi UNESCO par N112 Sidobre", desc: "Transfert vers la cité épiscopale d'Albi et le musée Toulouse-Lautrec en 40 minutes par la N112 à travers les chaos granitiques du Sidobre." },
        { title: "Mazamet et Montagne Noire", desc: "Nos chauffeurs rejoignent Mazamet et la Montagne Noire en 15 minutes par la D612, avec accès au Pic de Nore (1 211 m) et aux villages du Haut-Languedoc." },
      ],
    },
    en: {
      intro: "Castres-Mazamet Airport (DCM) serves the southern Tarn and the Montagne Noire with 50,000 passengers a year. Located 8 km from Castres centre, it hosts HOP! flights to Paris-Orly, essential for the Castres industrial and pharmaceutical sector (Pierre Fabre). The airport also provides access to Mazamet, the Cocagne region and the episcopal city of Albi (UNESCO World Heritage). TaxiNeo offers a fixed-fare transfer with a Tarn driver who knows the Sidobre roads.",
      description: "At Castres-Mazamet, your taxi waits in the single terminal arrivals area. Our drivers reach central Castres and the Agout riverbank in 10-15 minutes. Available 24/7, matching HOP! shuttle schedules to Paris. Transfer to Mazamet (15-20 min) and Albi with its Toulouse-Lautrec Museum (40-50 min). Compact terminal means instant pickup. Book ahead for Pierre Fabre business travel.",
      metaDescription: "Castres-Mazamet taxi: Pierre Fabre HQ, UNESCO Albi in 40 min, Montagne Noire. HOP! Paris-Orly flights, Sidobre. Fixed fare, compact 24/7.",
      heroSubtitle: "Essential to the Pierre Fabre pharmaceutical sector, Castres-Mazamet serves 50,000 passengers to Paris-Orly and provides access to UNESCO-listed Albi. Your TaxiNeo driver reaches the centre in 10 minutes and Albi in 40 via Sidobre roads — fixed fare, instant pickup, 24/7 service.",
      whyUs: [
        { title: "D622 express to Pierre Fabre HQ", desc: "Our drivers take the D622 to reach Pierre Fabre's global headquarters in Castres in 10 minutes, with knowledge of access to the Soual and Lavaur sites." },
        { title: "UNESCO Albi via N112 Sidobre", desc: "Transfer to the episcopal city of Albi and the Toulouse-Lautrec Museum in 40 minutes via the N112 through the Sidobre granite boulder landscape." },
        { title: "Mazamet and Montagne Noire", desc: "Our drivers reach Mazamet and the Montagne Noire in 15 minutes via the D612, with access to Pic de Nore (1,211 m) and the Haut-Languedoc villages." },
      ],
    }
  },
  "aurillac-tronquieres": {
    fr: {
      intro: "L'aéroport Aurillac-Tronquières (AUR) est la porte du Cantal et du sud de l'Auvergne, avec 50 000 passagers par an. Situé à seulement 3 km du centre d'Aurillac, c'est l'un des aéroports les plus proches d'un centre-ville en France. Desservi par HOP! avec des vols quotidiens vers Paris-Orly, il est vital pour le désenclavement du Cantal. L'aéroport donne accès à Salers (plus beau village de France), au Puy Mary et à la station du Lioran. TaxiNeo vous propose un transfert express au forfait.",
      description: "À Aurillac-Tronquières, votre taxi vous attend en zone d'arrivée du terminal unique — en 5-8 minutes vous êtes au centre-ville. Nos chauffeurs connaissent les routes vers Salers (35-40 min) à travers les estives cantaliennes et vers la station du Lioran (30-35 min) pour le ski en hiver. Service 24h/24, calé sur les horaires des vols Paris-Orly. Le terminal est ultra-petit, la prise en charge est instantanée. Véhicules équipés montagne en hiver pour les routes enneigées du Cantal.",
      metaDescription: "Taxi Aurillac-Tronquières : centre en 5 min, Salers plus beau village, Puy Mary, Le Lioran ski. Vols HOP! Paris-Orly, véhicules montagne, forfait 24h/24.",
      heroSubtitle: "L'un des aéroports les plus proches d'un centre-ville en France à 3 km d'Aurillac, Tronquières dessert Salers, le Puy Mary et Le Lioran. Votre chauffeur TaxiNeo vous attend au terminal ultra-petit et rejoint le centre en 5 minutes — véhicules équipés montagne en hiver, forfait fixe calé sur les vols Paris-Orly.",
      whyUs: [
        { title: "5 min centre par avenue Gambetta", desc: "Nos chauffeurs empruntent l'avenue Gambetta depuis Tronquières pour rejoindre le centre d'Aurillac en 5 minutes — l'un des aéroports les plus proches d'un centre-ville en France." },
        { title: "Salers et Puy Mary par D922", desc: "Transfert vers Salers, classé plus beau village de France, en 35 minutes par la D922 à travers les estives cantaliennes, puis le Puy Mary en 45 min." },
        { title: "Le Lioran ski véhicules montagne", desc: "En hiver, nos chauffeurs rejoignent la station du Lioran en 30 minutes par la D926 avec véhicules équipés pneus neige et chaînes pour le col du Lioran à 1 150 m." },
      ],
    },
    en: {
      intro: "Aurillac-Tronquières Airport (AUR) is the gateway to the Cantal and southern Auvergne with 50,000 passengers a year. Located just 3 km from Aurillac centre, it is one of the closest airports to a city centre in France. Served by HOP! with daily flights to Paris-Orly, it is vital for Cantal connectivity. The airport gives access to Salers (one of France's most beautiful villages), the Puy Mary and the Le Lioran ski resort. TaxiNeo offers an express fixed-fare transfer.",
      description: "At Aurillac-Tronquières, your taxi waits in the single terminal arrivals area — in 5-8 minutes you are in the city centre. Our drivers know the roads to Salers (35-40 min) through the Cantal pastures and to Le Lioran (30-35 min) for winter skiing. Available 24/7, timed to Paris-Orly flight schedules. The ultra-small terminal means instant pickup. Mountain-equipped vehicles in winter for the snowy Cantal roads.",
      metaDescription: "Aurillac-Tronquières taxi: centre in 5 min, Salers most beautiful village, Puy Mary, Le Lioran skiing. HOP! Paris-Orly, mountain vehicles, fare 24/7.",
      heroSubtitle: "One of France's closest airports to a city centre at 3 km from Aurillac, Tronquieres serves Salers, Puy Mary and Le Lioran. Your TaxiNeo driver waits at the ultra-small terminal and reaches the centre in 5 minutes — mountain-equipped vehicles in winter, fixed fare timed to Paris-Orly flights.",
      whyUs: [
        { title: "5 min centre via Avenue Gambetta", desc: "Our drivers take Avenue Gambetta from Tronquières to reach Aurillac centre in 5 minutes — one of France's closest airports to a city centre." },
        { title: "Salers and Puy Mary via D922", desc: "Transfer to Salers, ranked among France's most beautiful villages, in 35 minutes via the D922 through Cantal summer pastures, then Puy Mary in 45 min." },
        { title: "Le Lioran ski mountain vehicles", desc: "In winter, our drivers reach Le Lioran resort in 30 minutes via the D926 with snow-tyre and chain-equipped vehicles for the Col du Lioran at 1,150 m." },
      ],
    }
  },
  "le-puy-loudes": {
    fr: {
      intro: "L'aéroport Le Puy-Loudes (LPY) est le plus petit des aéroports commerciaux d'Auvergne, avec 30 000 passagers par an. Situé à Loudes, à 10 km au nord-ouest du Puy-en-Velay, il accueille des vols HOP! vers Paris-Orly. L'aéroport a une vocation unique : c'est le point d'arrivée aérien des pèlerins qui entament le chemin de Saint-Jacques-de-Compostelle depuis la cathédrale du Puy, point de départ de la Via Podiensis (GR65). TaxiNeo vous dépose directement au pied de la cathédrale.",
      description: "Au Puy-Loudes, votre taxi vous attend à la sortie du minuscule terminal. Nos chauffeurs rejoignent le centre du Puy-en-Velay et la cathédrale en 12-18 minutes par la D590. Service 24h/24, adapté aux horaires du vol quotidien Paris-Orly. Transfert direct vers le point de départ du GR65 (chemin de Compostelle) pour les pèlerins du monde entier. Le terminal est le plus petit de France : en 20 secondes vous êtes dans le taxi. Réservez à l'avance pour la saison de pèlerinage (avril-septembre).",
      metaDescription: "Taxi Le Puy-Loudes : cathédrale et GR65 Compostelle en 12 min, plus petit terminal de France. Pèlerins Via Podiensis, HOP! Paris. Forfait 24h/24.",
      heroSubtitle: "Plus petit aéroport commercial de France et point d'arrivée des pèlerins de Compostelle, Le Puy-Loudes vous dépose au pied de la cathédrale en 12 minutes. Votre chauffeur TaxiNeo vous attend au terminal minuscule — en 20 secondes vous êtes dans le taxi, transfert direct vers le départ du GR65, forfait fixe calé sur le vol Paris-Orly.",
      whyUs: [
        { title: "D590 vers cathédrale et GR65", desc: "Nos chauffeurs empruntent la D590 depuis Loudes pour vous déposer au pied de la cathédrale Notre-Dame du Puy en 12 minutes, point de départ de la Via Podiensis (GR65)." },
        { title: "Plus petit terminal de France", desc: "Le terminal du Puy-Loudes est le plus petit aéroport commercial de France : en 20 secondes après les bagages, vous êtes dans le taxi. Zéro attente, zéro stress." },
        { title: "Accueil pèlerins Compostelle", desc: "Nos chauffeurs accueillent les pèlerins du monde entier et transportent leurs sacs à dos et bâtons. Transfert vers le gîte de départ ou l'hôtel-Dieu, avec conseils locaux sur le GR65." },
      ],
    },
    en: {
      intro: "Le Puy-Loudes Airport (LPY) is the smallest commercial airport in Auvergne with 30,000 passengers a year. Located in Loudes, 10 km north-west of Le Puy-en-Velay, it hosts HOP! flights to Paris-Orly. The airport has a unique purpose: it is the aerial arrival point for pilgrims starting the Way of Saint James from Le Puy Cathedral, the starting point of the Via Podiensis (GR65). TaxiNeo drops you directly at the foot of the cathedral.",
      description: "At Le Puy-Loudes, your taxi waits at the tiny terminal exit. Our drivers reach Le Puy-en-Velay centre and the cathedral in 12-18 minutes via the D590. Available 24/7, matching the daily Paris-Orly flight schedule. Direct transfer to the GR65 starting point (Camino de Santiago) for pilgrims from around the world. The terminal is the smallest in France: in 20 seconds you are in the taxi. Book ahead for the pilgrimage season (April-September).",
      metaDescription: "Le Puy-Loudes taxi: cathedral and GR65 Camino in 12 min, France's smallest terminal. Via Podiensis pilgrims, HOP! Paris. Fixed fare 24/7.",
      heroSubtitle: "France's smallest commercial airport and arrival point for Camino pilgrims, Le Puy-Loudes drops you at the cathedral in 12 minutes. Your TaxiNeo driver waits at the tiny terminal — in 20 seconds you are in the taxi, direct transfer to the GR65 start, fixed fare timed to the Paris-Orly flight.",
      whyUs: [
        { title: "D590 to cathedral and GR65", desc: "Our drivers take the D590 from Loudes to drop you at the foot of Notre-Dame du Puy Cathedral in 12 minutes, starting point of the Via Podiensis (GR65)." },
        { title: "France's smallest terminal", desc: "Le Puy-Loudes terminal is the smallest commercial airport in France: 20 seconds after baggage claim and you are in the taxi. Zero wait, zero stress." },
        { title: "Camino pilgrim welcome", desc: "Our drivers welcome pilgrims from around the world and carry backpacks and walking poles. Transfer to the departure gite or the Hôtel-Dieu, with local GR65 tips." },
      ],
    }
  },
};

// Apply unique content
for (const ap of airports) {
  const content = AIRPORT_CONTENT[ap.slug];
  if (content) {
    ap.i18n.fr.intro = content.fr.intro;
    ap.i18n.fr.description = content.fr.description;
    ap.i18n.fr.metaDescription = content.fr.metaDescription;
    ap.i18n.fr.heroSubtitle = content.fr.heroSubtitle;
    ap.i18n.fr.whyUs = content.fr.whyUs;
    ap.i18n.en.intro = content.en.intro;
    ap.i18n.en.description = content.en.description;
    ap.i18n.en.metaDescription = content.en.metaDescription;
    ap.i18n.en.heroSubtitle = content.en.heroSubtitle;
    ap.i18n.en.whyUs = content.en.whyUs;
  }
}

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
