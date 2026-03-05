// ─── Interfaces ─────────────────────────────────────────────

export interface StationDestination {
  name: string;
  price: string;
  time: string;
}

export interface StationTestimonial {
  text: string;
  name: string;
  initials: string;
  role: string;
}

export interface StationFAQ {
  question: string;
  answer: string;
}

export interface StationI18n {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  testimonials: StationTestimonial[];
  faq: StationFAQ[];
}

export interface Station {
  name: string;
  slug: string;
  city: string;
  citySlug: string;
  lat: number;
  lng: number;
  distanceFromCity: string;
  transferTime: string;
  transferPrice: string;
  lines: string[];
  annualPassengers: string;
  destinations: StationDestination[];
  nearbyStations: string[];
  practicalInfo: string[];
  i18n: {
    fr: StationI18n;
    en: StationI18n;
  };
}

// ─── Helper ─────────────────────────────────────────────────

function station(
  name: string,
  slug: string,
  city: string,
  citySlug: string,
  lat: number,
  lng: number,
  distanceFromCity: string,
  transferTime: string,
  transferPrice: string,
  lines: string[],
  annualPassengers: string,
  destinations: StationDestination[],
  testimonials: StationTestimonial[],
  extraFaq: StationFAQ[],
  nearbyStations: string[],
  practicalInfo: string[],
): Station {
  return {
    name,
    slug,
    city,
    citySlug,
    lat,
    lng,
    distanceFromCity,
    transferTime,
    transferPrice,
    lines,
    annualPassengers,
    destinations,
    nearbyStations,
    practicalInfo,
    i18n: {
      fr: {
        metaTitle: `Taxi ${name} - Transfert gare forfaitaire 24h/24`,
        metaDescription: `Réservez votre taxi pour la gare ${name}. Transfert ponctuel, tarifs forfaitaires garantis, suivi des trains et aide aux bagages. Disponible 24h/24.`,
        heroTitle: `Taxi Gare ${name}`,
        heroSubtitle: `Transfert taxi vers et depuis la gare ${name}. Tarifs forfaitaires, chauffeur qui vous attend à la sortie de la gare, suivi des trains en temps réel.`,
        intro: `Besoin d'un taxi pour la gare ${name} ? TaxiNeo vous propose un service de transfert professionnel, ponctuel et au meilleur prix. Nos chauffeurs suivent votre train en temps réel et vous attendent à la sortie de la gare. En cas de retard de votre train, l'attente est gratuite.`,
        testimonials,
        faq: [
          {
            question: `Comment réserver un taxi pour la gare ${name} ?`,
            answer: `Utilisez le formulaire de réservation sur cette page. Entrez votre adresse de départ (ou d'arrivée), sélectionnez votre horaire et confirmez. Vous recevrez une confirmation par email avec les coordonnées de votre chauffeur.`,
          },
          {
            question: `Le chauffeur m'attend-il à l'arrivée à la gare ${name} ?`,
            answer: `Oui, votre chauffeur vous attend à la sortie de la gare. Il suit votre train en temps réel et adapte son heure d'arrivée. En cas de retard, l'attente est gratuite jusqu'à 30 minutes.`,
          },
          {
            question: `Les tarifs sont-ils forfaitaires pour la gare ${name} ?`,
            answer: `Oui, tous nos transferts gare sont au forfait. Le prix est fixé à la réservation et ne change pas, quels que soient les embouteillages ou le temps de trajet réel.`,
          },
          ...extraFaq,
        ],
      },
      en: {
        metaTitle: `Taxi ${name} Station - 24/7 fixed-fare transfer`,
        metaDescription: `Book your taxi to ${name} station. Reliable transfer with guaranteed fixed fares, real-time train tracking and luggage assistance at the exit. 24/7.`,
        heroTitle: `Taxi ${name} Station`,
        heroSubtitle: `Taxi transfer to and from ${name} station. Flat-rate fares, driver waiting for you at the station exit, real-time train tracking.`,
        intro: `Need a taxi to ${name} station? TaxiNeo offers a professional, punctual transfer service at the best price. Our drivers track your train in real time and wait for you at the station exit. If your train is delayed, the waiting time is free of charge.`,
        testimonials,
        faq: [
          {
            question: `How do I book a taxi to ${name} station?`,
            answer: `Use the booking form on this page. Enter your pickup (or drop-off) address, select your time slot and confirm. You will receive a confirmation email with your driver's details.`,
          },
          {
            question: `Does the driver wait for me when I arrive at ${name} station?`,
            answer: `Yes, your driver waits for you at the station exit. They track your train in real time and adjust their arrival accordingly. In case of delay, the wait is free for up to 30 minutes.`,
          },
          {
            question: `Are the fares flat-rate for ${name} station?`,
            answer: `Yes, all our station transfers are at a flat rate. The price is fixed at the time of booking and does not change, regardless of traffic or actual travel time.`,
          },
          ...extraFaq,
        ],
      },
    },
  };
}

// ─── 50 Stations ────────────────────────────────────────────

export const stations: Station[] = [
  station(
    "Paris Gare du Nord", "paris-gare-du-nord",
    "Paris", "paris", 48.8809, 2.3553,
    "Centre de Paris (10e)", "5-15 min", "12 €",
    ["TGV", "Eurostar", "Thalys", "TER", "RER", "Transilien"],
    "292 millions",
    [
      { name: "Aéroport CDG", price: "56 €", time: "30-50 min" },
      { name: "Aéroport d'Orly", price: "45 €", time: "35-50 min" },
      { name: "La Défense", price: "35 €", time: "20-35 min" },
      { name: "Disneyland Paris", price: "65 €", time: "40-55 min" },
      { name: "Paris Gare de Lyon", price: "18 €", time: "10-20 min" },
    ],
    [
      { text: "Arrivée Eurostar à 22h, le chauffeur était là à la sortie. Transfert rapide vers le 16e. Parfait.", name: "James T.", initials: "JT", role: "Voyageur Eurostar" },
      { text: "Je prends le Thalys chaque semaine. TaxiNeo me récupère à chaque fois sans faille. Service pro.", name: "Pierre V.", initials: "PV", role: "Consultant, Bruxelles" },
      { text: "Famille avec 3 valises, le chauffeur nous a aidés et déposés à l'hôtel en 12 minutes.", name: "Anna K.", initials: "AK", role: "Touriste allemande" },
    ],
    [
      { question: "Où retrouver mon chauffeur à Gare du Nord ?", answer: "Votre chauffeur vous attend à la sortie principale de la gare, côté rue de Dunkerque. Les coordonnées exactes du point de rendez-vous sont envoyées par SMS." },
      { question: "Combien coûte un taxi Gare du Nord – CDG ?", answer: "Le forfait taxi Gare du Nord – Aéroport CDG est d'environ 56 €. Trajet de 30-50 minutes selon la circulation." },
    ],
    ["paris-gare-de-lyon", "paris-gare-de-l-est", "paris-saint-lazare", "paris-montparnasse"],
    ["Gare la plus fréquentée d'Europe", "Eurostar vers Londres (2h15)", "Thalys vers Bruxelles (1h22)", "Attente gratuite en cas de retard de train", "Paiement par carte ou application"],
  ),

  station(
    "Paris Gare de Lyon", "paris-gare-de-lyon",
    "Paris", "paris", 48.8443, 2.3735,
    "Centre de Paris (12e)", "5-15 min", "12 €",
    ["TGV", "TER", "RER", "Transilien"],
    "148 millions",
    [
      { name: "Aéroport CDG", price: "58 €", time: "35-55 min" },
      { name: "Aéroport d'Orly", price: "35 €", time: "20-35 min" },
      { name: "La Défense", price: "38 €", time: "25-40 min" },
      { name: "Paris Gare du Nord", price: "18 €", time: "10-20 min" },
      { name: "Disneyland Paris", price: "60 €", time: "35-50 min" },
    ],
    [
      { text: "TGV en retard de 40 min, le chauffeur avait suivi et m'attendait calmement. Service impeccable.", name: "Nathalie F.", initials: "NF", role: "Avocate, Lyon" },
      { text: "Transfert gare de Lyon vers Orly pour un vol. Ponctualité parfaite malgré la circulation.", name: "Romain P.", initials: "RP", role: "Cadre commercial" },
      { text: "Habitué des TGV Lyon-Paris, TaxiNeo est mon réflexe à l'arrivée. Toujours là.", name: "Laurent B.", initials: "LB", role: "Entrepreneur" },
    ],
    [
      { question: "Quel est le forfait taxi Gare de Lyon – Orly ?", answer: "Le forfait taxi Gare de Lyon – Aéroport d'Orly est d'environ 35 €. Trajet de 20-35 minutes." },
    ],
    ["paris-gare-du-nord", "paris-gare-d-austerlitz", "paris-gare-de-bercy", "paris-montparnasse"],
    ["TGV vers Lyon (2h), Marseille (3h15), Nice (5h30)", "Restaurant Le Train Bleu dans la gare", "Attente gratuite en cas de retard de train", "Sièges enfant disponibles sur demande", "Wi-Fi à bord et chargeurs USB"],
  ),

  station(
    "Paris Saint-Lazare", "paris-saint-lazare",
    "Paris", "paris", 48.8766, 2.3250,
    "Centre de Paris (8e)", "5-15 min", "12 €",
    ["Transilien", "TER", "Intercités"],
    "100 millions",
    [
      { name: "Aéroport CDG", price: "55 €", time: "30-50 min" },
      { name: "Aéroport d'Orly", price: "42 €", time: "30-45 min" },
      { name: "La Défense", price: "25 €", time: "15-25 min" },
      { name: "Versailles", price: "40 €", time: "25-35 min" },
      { name: "Paris Gare du Nord", price: "15 €", time: "8-15 min" },
    ],
    [
      { text: "Gare Saint-Lazare en pleine heure de pointe, le chauffeur m'a récupéré sans stress côté cour de Rome.", name: "Sandrine M.", initials: "SM", role: "Cadre, Rouen" },
      { text: "Train depuis Le Havre, taxi réservé à l'avance. Parfait pour rejoindre mon hôtel dans le Marais.", name: "Oliver W.", initials: "OW", role: "Touriste britannique" },
      { text: "Transfert vers La Défense rapide et confortable. Le chauffeur connaissait le meilleur itinéraire.", name: "David L.", initials: "DL", role: "Consultant" },
    ],
    [
      { question: "Saint-Lazare est-elle bien desservie en taxi ?", answer: "Oui, nos chauffeurs vous récupèrent directement à la sortie de la gare. Réservez à l'avance pour un service garanti." },
    ],
    ["paris-gare-du-nord", "paris-gare-de-l-est", "paris-montparnasse", "paris-gare-de-lyon"],
    ["Deuxième gare parisienne par la fréquentation", "Trains vers la Normandie (Rouen, Le Havre, Caen)", "Quartier des grands magasins à proximité", "Attente gratuite en cas de retard", "Véhicules berline et monospace"],
  ),

  station(
    "Paris Montparnasse", "paris-montparnasse",
    "Paris", "paris", 48.8414, 2.3219,
    "Centre de Paris (15e)", "5-15 min", "12 €",
    ["TGV", "TER", "Intercités"],
    "90 millions",
    [
      { name: "Aéroport CDG", price: "60 €", time: "40-60 min" },
      { name: "Aéroport d'Orly", price: "32 €", time: "20-30 min" },
      { name: "La Défense", price: "35 €", time: "20-35 min" },
      { name: "Paris Gare du Nord", price: "20 €", time: "12-22 min" },
      { name: "Versailles", price: "35 €", time: "20-30 min" },
    ],
    [
      { text: "Retour de Bordeaux en TGV, le taxi m'attendait pile à l'heure. Déposé chez moi dans le 7e en 8 minutes.", name: "François D.", initials: "FD", role: "Bordelais d'adoption" },
      { text: "Transfert Montparnasse-Orly avec beaucoup de bagages. Le chauffeur a tout géré, véhicule spacieux.", name: "Marie-Claire G.", initials: "MCG", role: "Voyageuse" },
      { text: "TGV depuis Rennes, taxi impeccable à l'arrivée. Je recommande à tous les Bretons montant à Paris !", name: "Yann L.", initials: "YL", role: "Rennais" },
    ],
    [
      { question: "Comment rejoindre Orly depuis Montparnasse ?", answer: "Le forfait taxi Montparnasse – Orly est d'environ 32 €, pour un trajet de 20-30 minutes. Plus rapide et confortable que le bus." },
    ],
    ["paris-gare-de-lyon", "paris-gare-d-austerlitz", "paris-saint-lazare", "paris-gare-du-nord"],
    ["TGV vers Bordeaux (2h04), Rennes (1h27), Nantes (2h15)", "Gare rénovée avec hall 1, 2 et 3", "Attente gratuite en cas de retard", "Paiement par carte ou application", "Transferts vers Orly en 20 min"],
  ),

  station(
    "Paris Gare de l'Est", "paris-gare-de-l-est",
    "Paris", "paris", 48.8763, 2.3592,
    "Centre de Paris (10e)", "5-15 min", "12 €",
    ["TGV Est", "TER", "ICE", "Intercités"],
    "50 millions",
    [
      { name: "Aéroport CDG", price: "55 €", time: "30-50 min" },
      { name: "Aéroport d'Orly", price: "42 €", time: "30-45 min" },
      { name: "La Défense", price: "35 €", time: "20-35 min" },
      { name: "Paris Gare du Nord", price: "8 €", time: "3-5 min" },
      { name: "Disneyland Paris", price: "65 €", time: "40-55 min" },
    ],
    [
      { text: "ICE depuis Francfort, arrivée à 21h. Le chauffeur parlait allemand, ça m'a facilité la vie.", name: "Klaus M.", initials: "KM", role: "Homme d'affaires, Munich" },
      { text: "TGV Est vers Strasbourg chaque semaine. TaxiNeo me dépose à la gare sans stress.", name: "Céline R.", initials: "CR", role: "Consultante" },
      { text: "Transfert rapide vers le Marais après un train de nuit. Service parfait même à 6h du matin.", name: "Hugo B.", initials: "HB", role: "Étudiant" },
    ],
    [
      { question: "La Gare de l'Est est-elle proche de la Gare du Nord ?", answer: "Oui, les deux gares sont à 300 mètres l'une de l'autre. Un transfert en taxi prend 3-5 minutes." },
    ],
    ["paris-gare-du-nord", "paris-gare-de-lyon", "paris-saint-lazare", "paris-montparnasse"],
    ["TGV Est vers Strasbourg (1h46), Reims (45 min)", "ICE vers Francfort et Stuttgart", "À 300 m de la Gare du Nord", "Attente gratuite en cas de retard", "Véhicules berline et monospace"],
  ),

  station(
    "Paris Gare d'Austerlitz", "paris-gare-d-austerlitz",
    "Paris", "paris", 48.8424, 2.3657,
    "Centre de Paris (13e)", "5-15 min", "12 €",
    ["Intercités", "TER", "Intercités de nuit"],
    "30 millions",
    [
      { name: "Aéroport CDG", price: "58 €", time: "35-55 min" },
      { name: "Aéroport d'Orly", price: "30 €", time: "20-30 min" },
      { name: "Paris Gare de Lyon", price: "10 €", time: "5-10 min" },
      { name: "La Défense", price: "38 €", time: "25-40 min" },
      { name: "Quartier Latin", price: "10 €", time: "5-8 min" },
    ],
    [
      { text: "Train de nuit depuis Toulouse, arrivée à 7h. Le chauffeur était là, café à la main. Quel service !", name: "Philippe T.", initials: "PT", role: "Toulousain" },
      { text: "Transfert vers Orly très rapide depuis Austerlitz. Prix imbattable.", name: "Fatima Z.", initials: "FZ", role: "Étudiante" },
      { text: "Gare moins connue mais très bien desservie par TaxiNeo. Chauffeur ponctuel et aimable.", name: "Bernard C.", initials: "BC", role: "Retraité" },
    ],
    [
      { question: "Quels trains partent de la Gare d'Austerlitz ?", answer: "La Gare d'Austerlitz dessert le Centre et le Sud-Ouest de la France (Limoges, Toulouse, Cahors) ainsi que les trains de nuit." },
    ],
    ["paris-gare-de-lyon", "paris-gare-de-bercy", "paris-montparnasse", "paris-gare-du-nord"],
    ["Trains vers le Centre et le Sud-Ouest", "Intercités de nuit vers le Midi", "Proche du Jardin des Plantes", "Attente gratuite en cas de retard", "Transfert rapide vers Orly (20 min)"],
  ),

  station(
    "Paris Gare de Bercy", "paris-gare-de-bercy",
    "Paris", "paris", 48.8392, 2.3828,
    "Centre de Paris (12e)", "5-15 min", "12 €",
    ["Intercités de nuit"],
    "2 millions",
    [
      { name: "Aéroport CDG", price: "58 €", time: "35-55 min" },
      { name: "Aéroport d'Orly", price: "32 €", time: "20-35 min" },
      { name: "Paris Gare de Lyon", price: "8 €", time: "3-5 min" },
      { name: "Bercy Village", price: "6 €", time: "2-3 min" },
      { name: "Paris centre (Châtelet)", price: "15 €", time: "10-15 min" },
    ],
    [
      { text: "Train auto/nuit depuis l'Italie, arrivée tôt le matin. Taxi ponctuel malgré l'heure.", name: "Marco R.", initials: "MR", role: "Voyageur italien" },
      { text: "Petit gare mais le chauffeur savait exactement où me trouver. Transfert express vers le 5e.", name: "Juliette H.", initials: "JH", role: "Étudiante" },
      { text: "Départ en train de nuit, le taxi m'a déposé juste devant. Simple et efficace.", name: "Pascal N.", initials: "PN", role: "Voyageur" },
    ],
    [
      { question: "La gare de Bercy est-elle loin de Gare de Lyon ?", answer: "Non, les deux gares sont à 500 mètres l'une de l'autre, soit environ 3-5 minutes en taxi." },
    ],
    ["paris-gare-de-lyon", "paris-gare-d-austerlitz", "paris-gare-du-nord"],
    ["Gare dédiée aux trains de nuit", "Proche de Bercy Village et de l'AccorHotels Arena", "À 500 m de la Gare de Lyon", "Attente gratuite en cas de retard"],
  ),

  station(
    "Lyon Part-Dieu", "lyon-part-dieu",
    "Lyon", "lyon", 45.7606, 4.8600,
    "Centre de Lyon", "5-10 min", "12 €",
    ["TGV", "TER", "Intercités"],
    "34 millions",
    [
      { name: "Aéroport Lyon Saint-Exupéry", price: "65 €", time: "25-35 min" },
      { name: "Lyon Presqu'île (Bellecour)", price: "15 €", time: "8-12 min" },
      { name: "Lyon Vieux-Lyon", price: "18 €", time: "10-15 min" },
      { name: "Villeurbanne", price: "12 €", time: "5-10 min" },
      { name: "Grenoble", price: "120 €", time: "1h-1h15" },
    ],
    [
      { text: "TGV depuis Paris, taxi immédiat à Part-Dieu. Déposé à Bellecour en 10 minutes. Parfait.", name: "Sophie M.", initials: "SM", role: "Parisienne" },
      { text: "Transfert Part-Dieu vers l'aéroport Saint-Exupéry, chauffeur ponctuel, prix fixe respecté.", name: "Alexandre D.", initials: "AD", role: "Homme d'affaires" },
      { text: "Gare très fréquentée mais le chauffeur savait exactement où me retrouver. Service top.", name: "Émilie P.", initials: "EP", role: "Lyonnaise" },
    ],
    [
      { question: "Combien coûte un taxi Part-Dieu – Aéroport Saint-Exupéry ?", answer: "Le forfait taxi Lyon Part-Dieu – Aéroport Saint-Exupéry est d'environ 65 €. Trajet de 25-35 minutes." },
    ],
    ["lyon-perrache", "lyon-saint-exupery-tgv", "grenoble", "saint-etienne-chateaucreux"],
    ["Plus grande gare de correspondance TGV de France", "TGV vers Paris (2h), Marseille (1h40), Montpellier (1h45)", "Centre commercial Part-Dieu attenant", "Attente gratuite en cas de retard", "Transferts vers les stations de ski en hiver"],
  ),

  station(
    "Lyon Perrache", "lyon-perrache",
    "Lyon", "lyon", 45.7488, 4.8265,
    "Centre de Lyon (2e)", "5-10 min", "12 €",
    ["TGV", "TER"],
    "10 millions",
    [
      { name: "Aéroport Lyon Saint-Exupéry", price: "70 €", time: "30-40 min" },
      { name: "Lyon Part-Dieu", price: "12 €", time: "8-12 min" },
      { name: "Lyon Confluence", price: "8 €", time: "3-5 min" },
      { name: "Vieux-Lyon", price: "10 €", time: "5-8 min" },
      { name: "Annecy", price: "150 €", time: "1h30-1h45" },
    ],
    [
      { text: "Gare Perrache est plus calme que Part-Dieu, le taxi était facile à trouver. Transfert vers Confluence parfait.", name: "Christophe R.", initials: "CR", role: "Lyonnais" },
      { text: "TER depuis Saint-Étienne, taxi rapide vers mon hôtel dans le Vieux-Lyon. Service impeccable.", name: "Aurélie V.", initials: "AV", role: "Stéphanoise" },
      { text: "Transfert Perrache-Aéroport tôt le matin. Le chauffeur était ponctuel à 5h.", name: "Michel D.", initials: "MD", role: "Voyageur fréquent" },
    ],
    [
      { question: "Perrache ou Part-Dieu, quelle gare choisir ?", answer: "Part-Dieu est la gare principale pour les TGV. Perrache est plus centrale et plus calme, desservie par certains TGV et TER." },
    ],
    ["lyon-part-dieu", "lyon-saint-exupery-tgv", "saint-etienne-chateaucreux", "grenoble"],
    ["Gare historique de Lyon en centre-ville", "Proche du quartier Confluence", "TGV et TER vers Saint-Étienne, Grenoble", "Attente gratuite en cas de retard"],
  ),

  station(
    "Marseille Saint-Charles", "marseille-saint-charles",
    "Marseille", "marseille", 43.3028, 5.3802,
    "Centre de Marseille", "5-10 min", "12 €",
    ["TGV", "TER", "Intercités"],
    "14 millions",
    [
      { name: "Aéroport Marseille-Provence", price: "55 €", time: "25-40 min" },
      { name: "Vieux-Port", price: "12 €", time: "5-10 min" },
      { name: "Calanques (Cassis)", price: "55 €", time: "30-40 min" },
      { name: "Aix-en-Provence", price: "55 €", time: "25-35 min" },
      { name: "Toulon", price: "80 €", time: "45-60 min" },
    ],
    [
      { text: "TGV depuis Paris, taxi direct vers le Vieux-Port. En 8 minutes j'étais à mon hôtel. Génial.", name: "Jérôme L.", initials: "JL", role: "Touriste parisien" },
      { text: "Transfert gare-aéroport pour un vol. Le chauffeur connaissait la route la plus rapide.", name: "Samira B.", initials: "SB", role: "Marseillaise" },
      { text: "Arrivée de nuit après un Intercités. Le taxi était là, professionnel et rassurant.", name: "Catherine P.", initials: "CP", role: "Voyageuse" },
    ],
    [
      { question: "Combien coûte un taxi Gare Saint-Charles – Aéroport ?", answer: "Le forfait taxi Marseille Saint-Charles – Aéroport Provence est d'environ 55 €. Trajet de 25-40 minutes." },
    ],
    ["avignon-tgv", "aix-en-provence-tgv", "toulon", "nice-ville"],
    ["TGV vers Paris (3h15), Lyon (1h40), Nice (2h30)", "Escalier monumental avec vue sur la ville", "Attente gratuite en cas de retard", "Transferts vers les Calanques et la Côte Bleue", "Paiement par carte ou application"],
  ),

  station(
    "Lille Flandres", "lille-flandres",
    "Lille", "lille", 50.6365, 3.0714,
    "Centre de Lille", "3-8 min", "10 €",
    ["TGV", "TER"],
    "22 millions",
    [
      { name: "Lille Europe", price: "8 €", time: "3-5 min" },
      { name: "Aéroport Lille-Lesquin", price: "25 €", time: "15-20 min" },
      { name: "Grand Place", price: "6 €", time: "2-4 min" },
      { name: "Roubaix", price: "25 €", time: "15-20 min" },
      { name: "Villeneuve-d'Ascq", price: "20 €", time: "12-18 min" },
    ],
    [
      { text: "TGV depuis Paris, taxi vers mon hôtel près de la Grand Place en 3 minutes. Imbattable.", name: "Patrick H.", initials: "PH", role: "Homme d'affaires" },
      { text: "Correspondance Flandres-Europe pour l'Eurostar. Le taxi a fait le trajet en 4 minutes.", name: "Sarah J.", initials: "SJ", role: "Voyageuse Londres-Lille" },
      { text: "Service fiable même pendant la Braderie de Lille. Le chauffeur connaissait les détours.", name: "Nicolas F.", initials: "NF", role: "Lillois" },
    ],
    [
      { question: "Comment aller de Lille Flandres à Lille Europe ?", answer: "Les deux gares sont à 300 mètres l'une de l'autre. Le taxi met 3-5 minutes, pratique avec des bagages." },
    ],
    ["lille-europe", "amiens", "paris-gare-du-nord"],
    ["Gare principale de Lille pour les TGV et TER", "À 300 m de Lille Europe", "TGV vers Paris (1h)", "En plein centre-ville de Lille", "Attente gratuite en cas de retard"],
  ),

  station(
    "Lille Europe", "lille-europe",
    "Lille", "lille", 50.6392, 3.0758,
    "Centre de Lille", "3-8 min", "10 €",
    ["Eurostar", "Thalys", "TGV"],
    "7 millions",
    [
      { name: "Lille Flandres", price: "8 €", time: "3-5 min" },
      { name: "Aéroport Lille-Lesquin", price: "25 €", time: "15-20 min" },
      { name: "Grand Place", price: "8 €", time: "3-5 min" },
      { name: "Euralille (Centre commercial)", price: "5 €", time: "2-3 min" },
      { name: "Courtrai (Belgique)", price: "55 €", time: "30-40 min" },
    ],
    [
      { text: "Eurostar depuis Londres, taxi immédiat vers mon hôtel. Le chauffeur parlait anglais. Parfait.", name: "Richard B.", initials: "RB", role: "Britannique" },
      { text: "Thalys depuis Bruxelles, transfert vers le Vieux-Lille impeccable.", name: "Élodie C.", initials: "EC", role: "Franco-belge" },
      { text: "Arrivée tardive par Eurostar, le taxi m'attendait malgré le retard du train.", name: "Helen S.", initials: "HS", role: "Touriste anglaise" },
    ],
    [
      { question: "L'Eurostar arrive-t-il à Lille Europe ?", answer: "Oui, Lille Europe est la gare de l'Eurostar (Londres) et du Thalys (Bruxelles, Amsterdam). Le trajet Londres-Lille dure 1h20." },
    ],
    ["lille-flandres", "amiens", "paris-gare-du-nord"],
    ["Gare Eurostar et Thalys", "Londres en 1h20, Bruxelles en 35 min", "Gare moderne dans le quartier Euralille", "Attente gratuite en cas de retard", "Véhicules berline et monospace"],
  ),

  station(
    "Bordeaux Saint-Jean", "bordeaux-saint-jean",
    "Bordeaux", "bordeaux", 44.8256, -0.5564,
    "Centre de Bordeaux", "5-10 min", "12 €",
    ["TGV", "TER", "Intercités"],
    "15 millions",
    [
      { name: "Aéroport Bordeaux-Mérignac", price: "35 €", time: "20-30 min" },
      { name: "Centre-ville (Place de la Bourse)", price: "12 €", time: "5-10 min" },
      { name: "Saint-Émilion", price: "75 €", time: "40-50 min" },
      { name: "Arcachon", price: "80 €", time: "45-55 min" },
      { name: "Cité du Vin", price: "12 €", time: "5-8 min" },
    ],
    [
      { text: "TGV depuis Paris en 2h04, taxi direct vers la Place des Quinconces. Bordeaux en un clin d'œil.", name: "Antoine G.", initials: "AG", role: "Parisien" },
      { text: "Transfert gare-aéroport impeccable. Forfait respecté, chauffeur pro.", name: "Valérie M.", initials: "VM", role: "Cadre, Bordeaux" },
      { text: "Week-end œnologique, le taxi nous a déposés directement à Saint-Émilion.", name: "Jean-Pierre D.", initials: "JPD", role: "Œnologue amateur" },
    ],
    [
      { question: "Combien de temps dure le TGV Paris-Bordeaux ?", answer: "Le TGV Paris-Bordeaux met 2h04 grâce à la LGV SEA. La gare Saint-Jean est en plein centre de Bordeaux." },
    ],
    ["toulouse-matabiau", "bayonne", "poitiers", "la-rochelle-ville"],
    ["TGV vers Paris (2h04), Toulouse (2h), Marseille (4h20)", "Gare rénovée et agrandie (2018)", "Proche des quais de Garonne", "Attente gratuite en cas de retard", "Transferts vers le vignoble bordelais"],
  ),

  station(
    "Toulouse Matabiau", "toulouse-matabiau",
    "Toulouse", "toulouse", 43.6112, 1.4536,
    "Centre de Toulouse", "5-10 min", "10 €",
    ["TGV", "TER", "Intercités"],
    "12 millions",
    [
      { name: "Aéroport Toulouse-Blagnac", price: "28 €", time: "15-25 min" },
      { name: "Capitole", price: "10 €", time: "5-8 min" },
      { name: "Cité de l'Espace", price: "22 €", time: "12-18 min" },
      { name: "Airbus Blagnac", price: "25 €", time: "15-20 min" },
      { name: "Carcassonne", price: "120 €", time: "1h-1h15" },
    ],
    [
      { text: "TGV depuis Paris, taxi rapide vers le Capitole. Le chauffeur m'a conseillé un bon restaurant.", name: "Lucie R.", initials: "LR", role: "Touriste" },
      { text: "Transfert gare-aéroport pour un vol. Chauffeur ponctuel et trajet rapide.", name: "Thierry N.", initials: "TN", role: "Ingénieur Airbus" },
      { text: "Correspondance TGV-TER, le taxi m'a fait gagner 30 min par rapport au bus.", name: "Isabelle F.", initials: "IF", role: "Commerciale" },
    ],
    [
      { question: "La gare Matabiau est-elle loin du centre ?", answer: "Non, la gare Matabiau est à 1 km de la place du Capitole, soit environ 5-8 minutes en taxi." },
    ],
    ["bordeaux-saint-jean", "montpellier-saint-roch", "perpignan", "bayonne"],
    ["TGV vers Paris (4h20), Bordeaux (2h)", "TER vers Carcassonne, Montpellier, Perpignan", "En plein centre-ville de Toulouse", "Attente gratuite en cas de retard", "Transferts vers Airbus et la Cité de l'Espace"],
  ),

  station(
    "Nice Ville", "nice-ville",
    "Nice", "nice", 43.7050, 7.2620,
    "Centre de Nice", "3-8 min", "10 €",
    ["TGV", "TER"],
    "8 millions",
    [
      { name: "Aéroport Nice Côte d'Azur", price: "25 €", time: "10-20 min" },
      { name: "Promenade des Anglais", price: "10 €", time: "5-8 min" },
      { name: "Monaco", price: "65 €", time: "25-35 min" },
      { name: "Cannes", price: "70 €", time: "30-40 min" },
      { name: "Antibes", price: "45 €", time: "20-30 min" },
    ],
    [
      { text: "TGV depuis Paris, taxi vers la Promenade des Anglais. En vacances en 10 minutes.", name: "Julie M.", initials: "JM", role: "Parisienne" },
      { text: "Transfert gare-Monaco rapide et confortable. Le chauffeur connaît la Côte d'Azur par cœur.", name: "Roberto F.", initials: "RF", role: "Homme d'affaires, Monaco" },
      { text: "TER depuis Cannes, taxi vers mon hôtel dans le Vieux-Nice. Simple et efficace.", name: "Diana K.", initials: "DK", role: "Touriste" },
    ],
    [
      { question: "Combien coûte un taxi Nice Gare – Aéroport ?", answer: "Le forfait taxi Nice Ville – Aéroport Nice Côte d'Azur est d'environ 25 €. Trajet de 10-20 minutes." },
    ],
    ["cannes", "toulon", "marseille-saint-charles"],
    ["TGV vers Paris (5h30), Marseille (2h30)", "TER le long de la Côte d'Azur", "En plein centre de Nice", "Transferts vers Monaco et Cannes", "Attente gratuite en cas de retard"],
  ),

  station(
    "Nantes", "nantes",
    "Nantes", "nantes", 47.2173, -1.5420,
    "Centre de Nantes", "3-8 min", "10 €",
    ["TGV", "TER", "Intercités"],
    "12 millions",
    [
      { name: "Aéroport Nantes Atlantique", price: "30 €", time: "15-25 min" },
      { name: "Château des Ducs", price: "8 €", time: "3-5 min" },
      { name: "Machines de l'Île", price: "10 €", time: "5-8 min" },
      { name: "La Baule", price: "80 €", time: "45-55 min" },
      { name: "Saint-Nazaire", price: "70 €", time: "40-50 min" },
    ],
    [
      { text: "TGV depuis Paris en 2h15, taxi vers mon hôtel près du château. Rapide et efficace.", name: "Mathieu L.", initials: "ML", role: "Touriste" },
      { text: "Transfert gare-aéroport impeccable pour un vol tôt le matin.", name: "Charlotte D.", initials: "CD", role: "Nantaise" },
      { text: "Week-end à La Baule, le taxi nous a déposés directement à l'hôtel depuis la gare.", name: "Dominique B.", initials: "DB", role: "Famille" },
    ],
    [
      { question: "Comment rejoindre La Baule depuis la gare de Nantes ?", answer: "Le forfait taxi Nantes – La Baule est d'environ 80 €, pour un trajet de 45-55 minutes. Alternative directe au TER." },
    ],
    ["rennes", "angers-saint-laud", "la-rochelle-ville", "tours"],
    ["TGV vers Paris (2h15), Rennes (1h20)", "Gare en plein centre-ville", "Transferts vers La Baule et le littoral", "Attente gratuite en cas de retard", "Véhicules berline et monospace"],
  ),

  station(
    "Strasbourg", "strasbourg",
    "Strasbourg", "strasbourg", 48.5850, 7.7350,
    "Centre de Strasbourg", "3-8 min", "10 €",
    ["TGV", "TER", "ICE"],
    "15 millions",
    [
      { name: "Aéroport Strasbourg-Entzheim", price: "25 €", time: "10-15 min" },
      { name: "Cathédrale / Petite France", price: "10 €", time: "5-8 min" },
      { name: "Parlement européen", price: "15 €", time: "8-12 min" },
      { name: "Colmar", price: "75 €", time: "40-50 min" },
      { name: "Europa-Park (Allemagne)", price: "65 €", time: "35-45 min" },
    ],
    [
      { text: "TGV depuis Paris en 1h46, taxi vers la Petite France. Magnifique arrivée à Strasbourg.", name: "Caroline T.", initials: "CT", role: "Touriste" },
      { text: "ICE depuis Francfort, transfert vers le Parlement européen. Chauffeur pro et ponctuel.", name: "Martin S.", initials: "MS", role: "Fonctionnaire européen" },
      { text: "Transfert gare-aéroport rapide, le chauffeur connaissait les raccourcis.", name: "Frédéric W.", initials: "FW", role: "Strasbourgeois" },
    ],
    [
      { question: "Combien de temps met le TGV Paris-Strasbourg ?", answer: "Le TGV Paris-Strasbourg met 1h46 via la LGV Est. La gare est en plein centre de Strasbourg." },
    ],
    ["mulhouse-ville", "metz", "nancy", "dijon-ville"],
    ["TGV vers Paris (1h46), ICE vers Francfort", "Gare avec verrière moderne en verre", "En plein centre historique", "Transferts vers Colmar et la Route des Vins", "Attente gratuite en cas de retard"],
  ),

  station(
    "Montpellier Saint-Roch", "montpellier-saint-roch",
    "Montpellier", "montpellier", 43.6049, 3.8804,
    "Centre de Montpellier", "3-8 min", "10 €",
    ["TGV", "TER", "Intercités"],
    "9 millions",
    [
      { name: "Aéroport Montpellier Méditerranée", price: "25 €", time: "10-15 min" },
      { name: "Place de la Comédie", price: "8 €", time: "3-5 min" },
      { name: "Plages (Palavas)", price: "25 €", time: "15-20 min" },
      { name: "Nîmes", price: "50 €", time: "30-40 min" },
      { name: "Sète", price: "40 €", time: "25-30 min" },
    ],
    [
      { text: "TGV depuis Paris, taxi vers la Place de la Comédie en 4 minutes. Top.", name: "Stéphane R.", initials: "SR", role: "Parisien" },
      { text: "Transfert vers les plages de Palavas rapide et agréable.", name: "Marina V.", initials: "MV", role: "Touriste" },
      { text: "Chauffeur ponctuel à chaque voyage d'affaires. Service de qualité.", name: "Olivier B.", initials: "OB", role: "Commercial" },
    ],
    [
      { question: "La gare Saint-Roch est-elle en centre-ville ?", answer: "Oui, la gare Montpellier Saint-Roch est en plein centre, à 300 m de la Place de la Comédie." },
    ],
    ["avignon-tgv", "perpignan", "toulouse-matabiau", "nice-ville"],
    ["TGV vers Paris (3h20), Lyon (1h45)", "En plein centre de Montpellier", "Transferts vers les plages méditerranéennes", "Attente gratuite en cas de retard", "Future gare TGV Montpellier Sud de France"],
  ),

  station(
    "Rennes", "rennes",
    "Rennes", "rennes", 48.1035, -1.6723,
    "Centre de Rennes", "3-8 min", "10 €",
    ["TGV", "TER"],
    "10 millions",
    [
      { name: "Aéroport Rennes Bretagne", price: "25 €", time: "10-15 min" },
      { name: "Centre historique", price: "8 €", time: "3-5 min" },
      { name: "Saint-Malo", price: "80 €", time: "50 min-1h" },
      { name: "Mont-Saint-Michel", price: "120 €", time: "1h-1h15" },
      { name: "Vitré", price: "45 €", time: "25-30 min" },
    ],
    [
      { text: "TGV depuis Paris en 1h27, taxi vers mon hôtel au centre. La Bretagne à portée de main.", name: "Yannick B.", initials: "YB", role: "Parisien" },
      { text: "Transfert gare-aéroport rapide. Le chauffeur était très sympa.", name: "Gwenaëlle L.", initials: "GL", role: "Rennaise" },
      { text: "Excursion au Mont-Saint-Michel depuis la gare, le taxi a fait le voyage aller-retour.", name: "François P.", initials: "FP", role: "Touriste" },
    ],
    [
      { question: "Combien de temps met le TGV Paris-Rennes ?", answer: "Le TGV Paris-Rennes met 1h27 via la LGV Bretagne. La gare est en plein centre de Rennes." },
    ],
    ["nantes", "le-mans", "caen", "angers-saint-laud"],
    ["TGV vers Paris (1h27), Nantes (1h20)", "Gare en plein centre-ville", "Transferts vers Saint-Malo et le Mont-Saint-Michel", "Attente gratuite en cas de retard", "Véhicules berline et monospace"],
  ),

  station(
    "Marne-la-Vallée Chessy", "marne-la-vallee-chessy",
    "Marne-la-Vallée", "marne-la-vallee", 48.8678, 2.7831,
    "10 km de Paris (77)", "25-40 min", "55 €",
    ["TGV", "RER"],
    "15 millions",
    [
      { name: "Disneyland Paris", price: "8 €", time: "2-3 min" },
      { name: "Paris centre (Châtelet)", price: "55 €", time: "25-40 min" },
      { name: "Aéroport CDG", price: "45 €", time: "20-30 min" },
      { name: "Aéroport d'Orly", price: "65 €", time: "35-50 min" },
      { name: "Val d'Europe", price: "10 €", time: "3-5 min" },
    ],
    [
      { text: "TGV depuis Lyon, taxi direct vers Disneyland. Les enfants étaient ravis !", name: "Stéphanie C.", initials: "SC", role: "Maman lyonnaise" },
      { text: "Transfert vers CDG après un séjour Disney. Le chauffeur avait des sièges enfant.", name: "Thomas B.", initials: "TB", role: "Papa" },
      { text: "Arrivée TGV de province, taxi vers notre hôtel Disney. Simple et rapide.", name: "Carole M.", initials: "CM", role: "Touriste" },
    ],
    [
      { question: "Comment rejoindre Disneyland depuis la gare ?", answer: "La gare TGV de Marne-la-Vallée Chessy est directement reliée à Disneyland Paris. Le taxi vous dépose devant votre hôtel Disney en 2-3 minutes." },
    ],
    ["paris-gare-de-lyon", "paris-gare-du-nord"],
    ["Gare TGV directement reliée à Disneyland Paris", "TGV directs depuis Lyon, Marseille, Lille, Bordeaux", "Sièges enfant disponibles sur demande", "Transferts vers les hôtels Disney et Val d'Europe"],
  ),

  station(
    "Lyon Saint-Exupéry TGV", "lyon-saint-exupery-tgv",
    "Lyon", "lyon", 45.7215, 5.0769,
    "25 km de Lyon", "25-40 min", "65 €",
    ["TGV"],
    "4 millions",
    [
      { name: "Lyon Part-Dieu", price: "65 €", time: "25-35 min" },
      { name: "Lyon Perrache", price: "70 €", time: "30-40 min" },
      { name: "Grenoble", price: "100 €", time: "50 min-1h" },
      { name: "Annecy", price: "130 €", time: "1h10-1h25" },
      { name: "Chambéry", price: "90 €", time: "40-50 min" },
    ],
    [
      { text: "TGV direct depuis Montpellier, puis taxi vers Lyon centre. Plus rapide que Part-Dieu avec correspondance.", name: "Vincent A.", initials: "VA", role: "Commercial" },
      { text: "Gare TGV + aéroport au même endroit. Le taxi m'a récupéré à la sortie TGV.", name: "Delphine G.", initials: "DG", role: "Voyageuse" },
      { text: "Transfert vers Grenoble pour les sports d'hiver. Chauffeur équipé pneus neige.", name: "Paul E.", initials: "PE", role: "Skieur" },
    ],
    [
      { question: "Pourquoi descendre à Lyon Saint-Exupéry TGV ?", answer: "Cette gare est pratique pour les correspondances TGV sans passer par Lyon centre, ou pour rejoindre directement Grenoble, Chambéry ou les stations de ski." },
    ],
    ["lyon-part-dieu", "lyon-perrache", "grenoble", "chambery"],
    ["Gare TGV intégrée à l'aéroport", "TGV directs depuis Marseille, Montpellier, Rennes", "Transferts vers les stations de ski", "Véhicules équipés pneus neige en saison", "Attente gratuite en cas de retard"],
  ),

  station(
    "Avignon TGV", "avignon-tgv",
    "Avignon", "avignon", 43.9217, 4.7863,
    "5 km du centre d'Avignon", "10-15 min", "15 €",
    ["TGV"],
    "4 millions",
    [
      { name: "Avignon centre (Palais des Papes)", price: "15 €", time: "10-15 min" },
      { name: "Avignon Centre (gare)", price: "12 €", time: "8-12 min" },
      { name: "Aix-en-Provence", price: "75 €", time: "45-55 min" },
      { name: "Nîmes", price: "45 €", time: "25-35 min" },
      { name: "Luberon (Gordes)", price: "75 €", time: "40-50 min" },
    ],
    [
      { text: "TGV depuis Paris, taxi direct vers le Palais des Papes. En 12 minutes j'étais dans l'histoire.", name: "Claire L.", initials: "CL", role: "Touriste" },
      { text: "Festival d'Avignon, le taxi m'a déposé en centre-ville malgré les rues fermées.", name: "Jean T.", initials: "JT", role: "Festivalier" },
      { text: "Transfert vers le Luberon magnifique. Le chauffeur connaissait les villages perchés.", name: "Margaret H.", initials: "MH", role: "Touriste anglaise" },
    ],
    [
      { question: "La gare TGV est-elle en centre-ville ?", answer: "Non, la gare Avignon TGV est à 5 km au sud du centre. Le taxi met 10-15 minutes pour rejoindre le Palais des Papes." },
    ],
    ["aix-en-provence-tgv", "marseille-saint-charles", "montpellier-saint-roch", "valence-tgv"],
    ["TGV vers Paris (2h40), Lyon (1h)", "Gare excentrée (5 km du centre)", "Transferts vers le Luberon et les Alpilles", "Festival d'Avignon en juillet", "Attente gratuite en cas de retard"],
  ),

  station(
    "Aix-en-Provence TGV", "aix-en-provence-tgv",
    "Aix-en-Provence", "aix-en-provence", 43.4554, 5.3174,
    "15 km du centre d'Aix", "15-25 min", "30 €",
    ["TGV"],
    "4 millions",
    [
      { name: "Aix-en-Provence centre", price: "30 €", time: "15-25 min" },
      { name: "Marseille centre", price: "55 €", time: "25-35 min" },
      { name: "Aéroport Marseille-Provence", price: "25 €", time: "10-15 min" },
      { name: "Calanques (Cassis)", price: "60 €", time: "30-40 min" },
      { name: "Luberon", price: "80 €", time: "45-55 min" },
    ],
    [
      { text: "TGV depuis Paris, taxi vers le Cours Mirabeau. Aix est magnifique, le trajet aussi.", name: "Virginie D.", initials: "VD", role: "Touriste" },
      { text: "Transfert rapide vers l'aéroport Marseille-Provence. Pratique et économique.", name: "Yves M.", initials: "YM", role: "Homme d'affaires" },
      { text: "Le chauffeur a fait le transfert vers les Calanques en passant par la route panoramique.", name: "Sonia R.", initials: "SR", role: "Randonneuse" },
    ],
    [
      { question: "La gare TGV est-elle loin du centre d'Aix ?", answer: "Oui, la gare Aix-en-Provence TGV est à 15 km du centre. Le taxi met 15-25 minutes et coûte environ 30 €." },
    ],
    ["marseille-saint-charles", "avignon-tgv", "toulon"],
    ["TGV vers Paris (3h), Lyon (1h25)", "Gare excentrée (15 km du centre)", "Proche de l'aéroport Marseille-Provence", "Transferts vers le Luberon et les Calanques", "Attente gratuite en cas de retard"],
  ),

  station(
    "Valence TGV", "valence-tgv",
    "Valence", "valence", 44.9813, 4.9699,
    "10 km du centre de Valence", "10-20 min", "20 €",
    ["TGV"],
    "2 millions",
    [
      { name: "Valence centre", price: "20 €", time: "10-20 min" },
      { name: "Valence Ville (gare centre)", price: "18 €", time: "10-15 min" },
      { name: "Montélimar", price: "45 €", time: "25-35 min" },
      { name: "Die (Vercors)", price: "80 €", time: "50 min-1h" },
      { name: "Romans-sur-Isère", price: "30 €", time: "15-20 min" },
    ],
    [
      { text: "TGV depuis Paris, taxi vers le centre de Valence. Pratique car la gare TGV est excentrée.", name: "Bruno P.", initials: "BP", role: "Valentinois" },
      { text: "Transfert vers le Vercors pour un week-end rando. Chauffeur sympa et ponctuel.", name: "Amélie J.", initials: "AJ", role: "Randonneuse" },
      { text: "Correspondance TGV parfaite avec taxi vers Montélimar. Service fiable.", name: "René C.", initials: "RC", role: "Voyageur" },
    ],
    [
      { question: "Pourquoi la gare TGV est-elle loin du centre ?", answer: "La gare Valence TGV est sur la LGV Méditerranée, à 10 km du centre. Le taxi est le moyen le plus rapide pour rejoindre Valence." },
    ],
    ["lyon-part-dieu", "avignon-tgv", "grenoble"],
    ["TGV vers Paris (2h15), Lyon (40 min)", "Gare excentrée (10 km du centre)", "Porte d'entrée du Vercors et de la Drôme", "Attente gratuite en cas de retard"],
  ),

  station(
    "Metz", "metz",
    "Metz", "metz", 49.1097, 6.1773,
    "Centre de Metz", "3-8 min", "10 €",
    ["TGV", "TER"],
    "7 millions",
    [
      { name: "Centre Pompidou-Metz", price: "8 €", time: "3-5 min" },
      { name: "Aéroport Metz-Nancy-Lorraine", price: "40 €", time: "25-30 min" },
      { name: "Nancy", price: "55 €", time: "35-45 min" },
      { name: "Luxembourg", price: "65 €", time: "40-50 min" },
      { name: "Thionville", price: "35 €", time: "20-25 min" },
    ],
    [
      { text: "TGV depuis Paris, taxi vers le Centre Pompidou. Metz est une ville magnifique.", name: "Stéphane G.", initials: "SG", role: "Touriste" },
      { text: "Transfert vers Luxembourg pour le travail. Chauffeur transfrontalier compétent.", name: "Alain H.", initials: "AH", role: "Frontalier" },
      { text: "Gare de Metz sublime, taxi immédiat vers mon hôtel. Service parfait.", name: "Cécile W.", initials: "CW", role: "Voyageuse" },
    ],
    [
      { question: "Peut-on prendre un taxi Metz-Luxembourg ?", answer: "Oui, le forfait taxi Metz-Luxembourg est d'environ 65 €, pour un trajet de 40-50 minutes." },
    ],
    ["nancy", "strasbourg", "reims"],
    ["TGV vers Paris (1h24)", "Gare néo-romane classée monument historique", "Centre Pompidou-Metz à 5 min", "Transferts vers le Luxembourg", "Attente gratuite en cas de retard"],
  ),

  station(
    "Nancy", "nancy",
    "Nancy", "nancy", 48.6899, 6.1741,
    "Centre de Nancy", "3-8 min", "10 €",
    ["TGV", "TER"],
    "7 millions",
    [
      { name: "Place Stanislas", price: "8 €", time: "3-5 min" },
      { name: "Aéroport Metz-Nancy-Lorraine", price: "40 €", time: "25-35 min" },
      { name: "Metz", price: "55 €", time: "35-45 min" },
      { name: "Épinal", price: "65 €", time: "40-50 min" },
      { name: "Vittel / Contrexéville", price: "90 €", time: "55 min-1h10" },
    ],
    [
      { text: "TGV depuis Paris, taxi vers la Place Stanislas. Magnifique arrivée.", name: "Hélène R.", initials: "HR", role: "Touriste" },
      { text: "Transfert gare-aéroport Lorraine. Le chauffeur connaissait bien la route.", name: "Franck B.", initials: "FB", role: "Nancéien" },
      { text: "Retour de week-end à Vittel, taxi ponctuel à la gare de Nancy.", name: "Mireille T.", initials: "MT", role: "Curiste" },
    ],
    [
      { question: "Combien de temps met le TGV Paris-Nancy ?", answer: "Le TGV Paris-Nancy met 1h30 environ. La gare est en plein centre de Nancy, à 5 minutes de la Place Stanislas." },
    ],
    ["metz", "strasbourg", "dijon-ville"],
    ["TGV vers Paris (1h30)", "Gare à 5 min de la Place Stanislas", "Transferts vers les Vosges et les stations thermales", "Attente gratuite en cas de retard", "Véhicules berline et monospace"],
  ),

  station(
    "Reims", "reims",
    "Reims", "reims", 49.2583, 4.0247,
    "Centre de Reims", "3-8 min", "10 €",
    ["TGV", "TER"],
    "5 millions",
    [
      { name: "Cathédrale de Reims", price: "10 €", time: "5-8 min" },
      { name: "Caves de Champagne (Pommery)", price: "12 €", time: "5-10 min" },
      { name: "Aéroport CDG", price: "120 €", time: "1h10-1h30" },
      { name: "Épernay", price: "40 €", time: "25-30 min" },
      { name: "Châlons-en-Champagne", price: "55 €", time: "30-40 min" },
    ],
    [
      { text: "TGV depuis Paris en 45 min, taxi vers les caves Pommery. Week-end champagne parfait.", name: "Ingrid V.", initials: "IV", role: "Touriste" },
      { text: "Transfert vers Épernay pour une visite des caves. Le chauffeur a fait guide.", name: "Benjamin R.", initials: "BR", role: "Œnologue amateur" },
      { text: "RDV professionnel à Reims, taxi ponctuel à la gare. Retour TGV le soir.", name: "Muriel K.", initials: "MK", role: "Cadre" },
    ],
    [
      { question: "Combien de temps met le TGV Paris-Reims ?", answer: "Le TGV Paris-Reims met seulement 45 minutes. La gare est en plein centre de Reims." },
    ],
    ["paris-gare-de-l-est", "metz", "nancy", "amiens"],
    ["TGV vers Paris (45 min)", "Capitale du Champagne", "Transferts vers Épernay et les caves", "Cathédrale UNESCO à 5 min", "Attente gratuite en cas de retard"],
  ),

  station(
    "Dijon Ville", "dijon-ville",
    "Dijon", "dijon", 47.3234, 5.0273,
    "Centre de Dijon", "3-8 min", "10 €",
    ["TGV", "TER"],
    "7 millions",
    [
      { name: "Palais des Ducs", price: "8 €", time: "3-5 min" },
      { name: "Beaune", price: "45 €", time: "25-30 min" },
      { name: "Aéroport Dijon-Bourgogne", price: "20 €", time: "10-15 min" },
      { name: "Auxerre", price: "110 €", time: "1h10-1h25" },
      { name: "Dole", price: "50 €", time: "30-35 min" },
    ],
    [
      { text: "TGV depuis Paris en 1h40, taxi vers le centre historique. Dijon est magnifique.", name: "Sylvie M.", initials: "SM", role: "Touriste" },
      { text: "Transfert vers Beaune pour la route des vins. Chauffeur connaisseur.", name: "Pierre-Antoine L.", initials: "PAL", role: "Œnologue" },
      { text: "Trajet professionnel, taxi fiable et ponctuel à chaque passage.", name: "Gaëlle N.", initials: "GN", role: "Commerciale" },
    ],
    [
      { question: "Peut-on visiter les vignobles de Bourgogne en taxi ?", answer: "Oui, nos chauffeurs proposent des transferts vers Beaune, Nuits-Saint-Georges et toute la Côte de Beaune/Nuits. Forfait sur mesure." },
    ],
    ["besancon-viotte", "lyon-part-dieu", "mulhouse-ville", "strasbourg"],
    ["TGV vers Paris (1h40), Lyon (1h40)", "Capitale de la Bourgogne", "Transferts vers la Route des Grands Crus", "Attente gratuite en cas de retard", "Gastronomie dijonnaise"],
  ),

  station(
    "Grenoble", "grenoble",
    "Grenoble", "grenoble", 45.1917, 5.7147,
    "Centre de Grenoble", "3-8 min", "10 €",
    ["TGV", "TER"],
    "5 millions",
    [
      { name: "Bastille (Téléphérique)", price: "10 €", time: "5-8 min" },
      { name: "Aéroport Lyon Saint-Exupéry", price: "120 €", time: "1h-1h15" },
      { name: "Alpe d'Huez", price: "110 €", time: "1h-1h15" },
      { name: "Chamrousse", price: "55 €", time: "35-45 min" },
      { name: "Voiron", price: "35 €", time: "20-25 min" },
    ],
    [
      { text: "TGV depuis Paris, taxi vers mon hôtel en centre-ville. Vue sur les montagnes magnifique.", name: "Arnaud S.", initials: "AS", role: "Parisien" },
      { text: "Transfert vers Alpe d'Huez pour le ski. Chauffeur équipé chaînes et pneus neige.", name: "Sophie D.", initials: "SD", role: "Skieuse" },
      { text: "Gare de Grenoble vers l'aéroport de Lyon. Trajet bien géré malgré la neige.", name: "Jean-Marc B.", initials: "JMB", role: "Homme d'affaires" },
    ],
    [
      { question: "Peut-on rejoindre les stations de ski en taxi ?", answer: "Oui, nos chauffeurs proposent des transferts vers toutes les stations (Alpe d'Huez, Chamrousse, les 2 Alpes, etc.) avec véhicules équipés hiver." },
    ],
    ["lyon-part-dieu", "lyon-saint-exupery-tgv", "chambery", "valence-tgv"],
    ["TGV vers Paris (3h)", "Capitale des Alpes", "Transferts vers les stations de ski", "Véhicules équipés pneus neige en hiver", "Attente gratuite en cas de retard"],
  ),

  station(
    "Tours", "tours",
    "Tours", "tours", 47.3900, 0.6943,
    "Centre de Tours", "3-8 min", "10 €",
    ["TGV", "TER", "Intercités"],
    "7 millions",
    [
      { name: "Château de Villandry", price: "30 €", time: "15-20 min" },
      { name: "Château de Chenonceau", price: "50 €", time: "30-35 min" },
      { name: "Amboise", price: "40 €", time: "20-25 min" },
      { name: "Aéroport Tours Val de Loire", price: "15 €", time: "8-12 min" },
      { name: "Chinon", price: "60 €", time: "35-45 min" },
    ],
    [
      { text: "TGV depuis Paris, taxi vers les châteaux de la Loire. Journée magique.", name: "Béatrice F.", initials: "BF", role: "Touriste" },
      { text: "Transfert rapide vers Chenonceau. Le chauffeur nous a raconté l'histoire du château.", name: "William S.", initials: "WS", role: "Touriste américain" },
      { text: "Habitué du TGV Paris-Tours, taxi toujours impeccable.", name: "Christophe V.", initials: "CV", role: "Cadre" },
    ],
    [
      { question: "Comment visiter les châteaux de la Loire en taxi ?", answer: "Nos chauffeurs proposent des circuits sur mesure : Villandry, Chenonceau, Amboise, Chambord. Forfait à la journée disponible." },
    ],
    ["le-mans", "poitiers", "orleans", "angers-saint-laud"],
    ["TGV vers Paris (1h15)", "Porte d'entrée des Châteaux de la Loire", "Transferts vers Chenonceau, Amboise, Villandry", "Attente gratuite en cas de retard", "Circuits œnotouristiques en Touraine"],
  ),

  station(
    "Le Mans", "le-mans",
    "Le Mans", "le-mans", 48.0070, 0.1925,
    "Centre du Mans", "3-8 min", "10 €",
    ["TGV", "TER"],
    "5 millions",
    [
      { name: "Circuit des 24 Heures", price: "15 €", time: "8-12 min" },
      { name: "Cité Plantagenêt", price: "8 €", time: "3-5 min" },
      { name: "Aéroport Le Mans-Arnage", price: "15 €", time: "8-12 min" },
      { name: "Laval", price: "75 €", time: "45-55 min" },
      { name: "Alençon", price: "70 €", time: "40-50 min" },
    ],
    [
      { text: "TGV depuis Paris pour les 24H du Mans. Taxi direct vers le circuit. Ambiance top.", name: "Julien P.", initials: "JP", role: "Fan de course auto" },
      { text: "Transfert vers la Cité Plantagenêt, le chauffeur connaissait l'histoire de la ville.", name: "Linda A.", initials: "LA", role: "Touriste" },
      { text: "TGV rapide depuis Paris, taxi ponctuel. Le Mans est sous-estimé comme destination.", name: "Nicolas M.", initials: "NM", role: "Voyageur" },
    ],
    [
      { question: "Combien de temps met le TGV Paris-Le Mans ?", answer: "Le TGV Paris-Le Mans met environ 55 minutes. Nœud ferroviaire vers la Bretagne et les Pays de la Loire." },
    ],
    ["rennes", "tours", "angers-saint-laud", "paris-montparnasse"],
    ["TGV vers Paris (55 min), Rennes (1h10)", "Circuit des 24 Heures à proximité", "Cité Plantagenêt médiévale", "Attente gratuite en cas de retard"],
  ),

  station(
    "Rouen Rive-Droite", "rouen-rive-droite",
    "Rouen", "rouen", 49.4487, 1.0937,
    "Centre de Rouen", "3-8 min", "10 €",
    ["TER", "Intercités"],
    "8 millions",
    [
      { name: "Cathédrale de Rouen", price: "8 €", time: "3-5 min" },
      { name: "Le Havre", price: "80 €", time: "50 min-1h" },
      { name: "Honfleur", price: "90 €", time: "55 min-1h10" },
      { name: "Giverny (Monet)", price: "75 €", time: "45-55 min" },
      { name: "Dieppe", price: "60 €", time: "35-45 min" },
    ],
    [
      { text: "Train depuis Paris Saint-Lazare, taxi vers le centre historique. Rouen est superbe.", name: "Pascale L.", initials: "PL", role: "Touriste" },
      { text: "Transfert vers Honfleur pour le week-end. Route magnifique, chauffeur agréable.", name: "Franck D.", initials: "FD", role: "Parisien" },
      { text: "Excursion à Giverny, le taxi a fait l'aller-retour. Monet vaut le détour.", name: "Emily B.", initials: "EB", role: "Touriste américaine" },
    ],
    [
      { question: "Comment aller de Rouen à Honfleur ?", answer: "Le forfait taxi Rouen-Honfleur est d'environ 90 €, pour un trajet de 55 min à 1h10. Pas de train direct." },
    ],
    ["caen", "amiens", "paris-saint-lazare"],
    ["Trains directs vers Paris Saint-Lazare (1h20)", "Capitale de la Normandie", "Transferts vers Honfleur, Giverny, Étretat", "Attente gratuite en cas de retard", "Cathédrale peinte par Monet"],
  ),

  station(
    "Toulon", "toulon",
    "Toulon", "toulon", 43.1288, 5.9303,
    "Centre de Toulon", "3-8 min", "10 €",
    ["TGV", "TER", "Intercités"],
    "3 millions",
    [
      { name: "Port de Toulon (ferries Corse)", price: "10 €", time: "5-8 min" },
      { name: "Hyères / Porquerolles", price: "35 €", time: "20-25 min" },
      { name: "Bandol", price: "30 €", time: "15-20 min" },
      { name: "Aéroport Toulon-Hyères", price: "35 €", time: "20-25 min" },
      { name: "Saint-Tropez", price: "120 €", time: "1h-1h15" },
    ],
    [
      { text: "TGV depuis Paris, taxi vers le port pour le ferry vers la Corse. Transition parfaite.", name: "Alain M.", initials: "AM", role: "Voyageur" },
      { text: "Transfert vers Porquerolles (embarquement Hyères). Le chauffeur connaissait les horaires des bateaux.", name: "Isabelle N.", initials: "IN", role: "Touriste" },
      { text: "Week-end à Bandol, taxi depuis la gare rapide et agréable.", name: "René L.", initials: "RL", role: "Provençal" },
    ],
    [
      { question: "Comment rejoindre la Corse depuis Toulon ?", answer: "Le port de Toulon est à 5-8 min en taxi de la gare. Ferries vers Bastia, Ajaccio, Porto-Vecchio." },
    ],
    ["marseille-saint-charles", "nice-ville", "cannes"],
    ["TGV vers Paris (4h), Marseille (1h)", "Port vers la Corse à 5 min", "Transferts vers les îles d'Or (Porquerolles)", "Attente gratuite en cas de retard"],
  ),

  station(
    "Clermont-Ferrand", "clermont-ferrand",
    "Clermont-Ferrand", "clermont-ferrand", 45.7792, 3.0997,
    "Centre de Clermont-Ferrand", "3-8 min", "10 €",
    ["TER", "Intercités"],
    "4 millions",
    [
      { name: "Place de Jaude", price: "8 €", time: "3-5 min" },
      { name: "Vulcania", price: "40 €", time: "25-30 min" },
      { name: "Puy de Dôme", price: "35 €", time: "20-25 min" },
      { name: "Vichy", price: "50 €", time: "30-35 min" },
      { name: "Aéroport Clermont-Ferrand Auvergne", price: "20 €", time: "10-15 min" },
    ],
    [
      { text: "Intercités depuis Paris, taxi vers la Place de Jaude. Clermont est une belle surprise.", name: "Pauline C.", initials: "PC", role: "Touriste" },
      { text: "Transfert vers Vulcania avec les enfants. Le chauffeur a été aux petits soins.", name: "Éric G.", initials: "EG", role: "Papa" },
      { text: "Déplacement pro, taxi fiable. Vivement le TGV pour Clermont !", name: "Anne-Sophie D.", initials: "ASD", role: "Cadre Michelin" },
    ],
    [
      { question: "Y a-t-il un TGV Paris-Clermont ?", answer: "Pas encore de LGV, mais le projet POCL est à l'étude. Actuellement le trajet est de 3h30 en Intercités." },
    ],
    ["lyon-part-dieu", "saint-etienne-chateaucreux", "limoges-benedictins"],
    ["Intercités vers Paris (3h30)", "Capitale de l'Auvergne", "Transferts vers les volcans et Vulcania", "Attente gratuite en cas de retard", "Siège de Michelin"],
  ),

  station(
    "Saint-Étienne Châteaucreux", "saint-etienne-chateaucreux",
    "Saint-Étienne", "saint-etienne", 45.4433, 4.3998,
    "Centre de Saint-Étienne", "3-8 min", "10 €",
    ["TER"],
    "4 millions",
    [
      { name: "Centre-ville (Place Jean Jaurès)", price: "8 €", time: "3-5 min" },
      { name: "Lyon Part-Dieu", price: "55 €", time: "35-45 min" },
      { name: "Aéroport Lyon Saint-Exupéry", price: "90 €", time: "50 min-1h" },
      { name: "Stade Geoffroy-Guichard", price: "10 €", time: "5-8 min" },
      { name: "Firminy (Le Corbusier)", price: "20 €", time: "12-15 min" },
    ],
    [
      { text: "TER depuis Lyon, taxi vers le stade Geoffroy-Guichard pour un match. Allez les Verts !", name: "Maxime V.", initials: "MV", role: "Supporter ASSE" },
      { text: "Transfert vers l'aéroport de Lyon pour un vol. Trajet bien géré.", name: "Christine F.", initials: "CF", role: "Stéphanoise" },
      { text: "Visite du site Le Corbusier à Firminy. Le taxi a facilité le déplacement.", name: "Jacques P.", initials: "JP", role: "Architecte" },
    ],
    [
      { question: "Comment aller de Saint-Étienne à Lyon ?", answer: "Le TER Saint-Étienne – Lyon met environ 50 minutes. En taxi, comptez 55 € et 35-45 minutes." },
    ],
    ["lyon-part-dieu", "lyon-perrache", "clermont-ferrand", "grenoble"],
    ["TER vers Lyon (50 min)", "Capitale du design (Cité du Design)", "Stade Geoffroy-Guichard à proximité", "Attente gratuite en cas de retard"],
  ),

  station(
    "Angers Saint-Laud", "angers-saint-laud",
    "Angers", "angers", 47.4643, -0.5566,
    "Centre d'Angers", "3-8 min", "10 €",
    ["TGV", "TER"],
    "5 millions",
    [
      { name: "Château d'Angers", price: "8 €", time: "3-5 min" },
      { name: "Aéroport Angers-Marcé", price: "30 €", time: "15-20 min" },
      { name: "Saumur", price: "55 €", time: "30-40 min" },
      { name: "Nantes", price: "70 €", time: "40-50 min" },
      { name: "Le Mans", price: "75 €", time: "45-55 min" },
    ],
    [
      { text: "TGV depuis Paris, taxi vers le château en 4 minutes. Angers est une pépite.", name: "Diane L.", initials: "DL", role: "Touriste" },
      { text: "Transfert vers Saumur et ses caves. Chauffeur ponctuel et sympathique.", name: "Hervé G.", initials: "HG", role: "Œnologue" },
      { text: "Habituée du TGV, le taxi TaxiNeo est mon réflexe en arrivant à Angers.", name: "Florence B.", initials: "FB", role: "Cadre" },
    ],
    [
      { question: "Combien de temps met le TGV Paris-Angers ?", answer: "Le TGV Paris-Angers met environ 1h30. La gare Saint-Laud est en plein centre d'Angers." },
    ],
    ["nantes", "le-mans", "tours", "rennes"],
    ["TGV vers Paris (1h30)", "Gare rénovée en centre-ville", "Transferts vers les châteaux de la Loire", "Vignobles d'Anjou à proximité", "Attente gratuite en cas de retard"],
  ),

  station(
    "Poitiers", "poitiers",
    "Poitiers", "poitiers", 46.5833, 0.3333,
    "Centre de Poitiers", "3-8 min", "10 €",
    ["TGV", "TER"],
    "4 millions",
    [
      { name: "Centre-ville (Notre-Dame-la-Grande)", price: "8 €", time: "3-5 min" },
      { name: "Futuroscope", price: "18 €", time: "10-15 min" },
      { name: "Aéroport Poitiers-Biard", price: "15 €", time: "8-12 min" },
      { name: "Châtellerault", price: "40 €", time: "25-30 min" },
      { name: "Niort", price: "70 €", time: "45-55 min" },
    ],
    [
      { text: "TGV depuis Paris, taxi direct vers le Futuroscope avec les enfants. Magique.", name: "Céline T.", initials: "CT", role: "Maman" },
      { text: "Déplacement professionnel, taxi rapide vers le centre. Service impeccable.", name: "Michel R.", initials: "MR", role: "Commercial" },
      { text: "Transfert gare-Futuroscope en 12 minutes. Idéal avec des enfants.", name: "Sandrine P.", initials: "SP", role: "Famille" },
    ],
    [
      { question: "Comment rejoindre le Futuroscope depuis la gare ?", answer: "Le Futuroscope est à 12 km de la gare de Poitiers, soit 10-15 minutes en taxi pour environ 18 €." },
    ],
    ["tours", "bordeaux-saint-jean", "la-rochelle-ville", "limoges-benedictins"],
    ["TGV vers Paris (1h20), Bordeaux (1h40)", "Futuroscope à 12 km", "Centre-ville médiéval", "Attente gratuite en cas de retard"],
  ),

  station(
    "Perpignan", "perpignan",
    "Perpignan", "perpignan", 42.6969, 2.8793,
    "Centre de Perpignan", "3-8 min", "10 €",
    ["TGV", "TER"],
    "2 millions",
    [
      { name: "Centre-ville (Castillet)", price: "8 €", time: "3-5 min" },
      { name: "Aéroport Perpignan-Rivesaltes", price: "15 €", time: "8-10 min" },
      { name: "Collioure", price: "30 €", time: "18-25 min" },
      { name: "Canet-en-Roussillon (plage)", price: "18 €", time: "10-15 min" },
      { name: "Barcelone (Espagne)", price: "250 €", time: "2h-2h30" },
    ],
    [
      { text: "TGV depuis Paris, taxi vers Collioure. Dali avait raison, c'est le centre du monde.", name: "Pascal M.", initials: "PM", role: "Touriste" },
      { text: "Transfert vers les plages de Canet rapide. Vacances commencées !", name: "Marion K.", initials: "MK", role: "Vacancière" },
      { text: "Gare magnifique, taxi immédiat. Perpignan est une ville sous-estimée.", name: "Éric B.", initials: "EB", role: "Voyageur" },
    ],
    [
      { question: "Perpignan est-elle la dernière gare avant l'Espagne ?", answer: "Oui, Perpignan est la dernière grande gare française avant Barcelone. Salvador Dali la considérait comme le centre du monde." },
    ],
    ["montpellier-saint-roch", "toulouse-matabiau"],
    ["TGV vers Paris (5h), Barcelone (1h30)", "Gare déclarée 'centre du monde' par Dali", "Transferts vers Collioure et la Côte Vermeille", "Attente gratuite en cas de retard"],
  ),

  station(
    "Caen", "caen",
    "Caen", "caen", 49.1787, -0.3468,
    "Centre de Caen", "3-8 min", "10 €",
    ["TER", "Intercités"],
    "4 millions",
    [
      { name: "Mémorial de Caen", price: "15 €", time: "8-12 min" },
      { name: "Plages du Débarquement", price: "65 €", time: "35-45 min" },
      { name: "Ouistreham (ferry)", price: "22 €", time: "12-18 min" },
      { name: "Deauville / Trouville", price: "80 €", time: "50 min-1h" },
      { name: "Bayeux", price: "40 €", time: "20-25 min" },
    ],
    [
      { text: "Train depuis Paris, taxi vers les plages du Débarquement. Émouvant et pratique.", name: "Robert J.", initials: "RJ", role: "Historien amateur" },
      { text: "Transfert gare-ferry Ouistreham pour l'Angleterre. Timing parfait.", name: "Trevor H.", initials: "TH", role: "Britannique" },
      { text: "Week-end à Deauville, le taxi nous a pris directement à la gare.", name: "Christine A.", initials: "CA", role: "Parisienne" },
    ],
    [
      { question: "Comment visiter les plages du Débarquement ?", answer: "Nos chauffeurs proposent des transferts et circuits vers Omaha Beach, Utah Beach, Arromanches. Forfaits à la journée disponibles." },
    ],
    ["rouen-rive-droite", "rennes", "le-mans"],
    ["Train direct vers Paris Saint-Lazare (2h)", "Mémorial de Caen à 10 min", "Plages du Débarquement à 35 min", "Ferry Ouistreham-Portsmouth", "Attente gratuite en cas de retard"],
  ),

  station(
    "Limoges Bénédictins", "limoges-benedictins",
    "Limoges", "limoges", 45.8361, 1.2671,
    "Centre de Limoges", "3-8 min", "10 €",
    ["TER", "Intercités"],
    "3 millions",
    [
      { name: "Centre-ville", price: "8 €", time: "3-5 min" },
      { name: "Aéroport Limoges-Bellegarde", price: "15 €", time: "8-12 min" },
      { name: "Oradour-sur-Glane", price: "35 €", time: "20-25 min" },
      { name: "Musée de la Porcelaine", price: "10 €", time: "5-8 min" },
      { name: "Brive-la-Gaillarde", price: "85 €", time: "55 min-1h05" },
    ],
    [
      { text: "Plus belle gare de France ! Le taxi m'attendait à la sortie de ce bijou Art Déco.", name: "Catherine B.", initials: "CB", role: "Touriste" },
      { text: "Transfert vers Oradour-sur-Glane, visite émouvante. Chauffeur respectueux.", name: "Didier S.", initials: "DS", role: "Historien" },
      { text: "Déplacement pro à Limoges, taxi ponctuel et professionnel.", name: "Karine L.", initials: "KL", role: "Commerciale" },
    ],
    [
      { question: "Pourquoi la gare de Limoges est-elle célèbre ?", answer: "La gare de Limoges-Bénédictins est considérée comme l'une des plus belles de France, avec son dôme et son campanile Art Déco." },
    ],
    ["clermont-ferrand", "poitiers", "orleans", "toulouse-matabiau"],
    ["Classée plus belle gare de France", "Intercités vers Paris (3h)", "Capitale de la porcelaine", "Attente gratuite en cas de retard"],
  ),

  station(
    "Orléans", "orleans",
    "Orléans", "orleans", 47.9084, 1.9053,
    "Centre d'Orléans", "3-8 min", "10 €",
    ["TER", "Intercités"],
    "5 millions",
    [
      { name: "Cathédrale Sainte-Croix", price: "8 €", time: "3-5 min" },
      { name: "Château de Chambord", price: "55 €", time: "30-40 min" },
      { name: "Blois", price: "55 €", time: "35-45 min" },
      { name: "Paris (Austerlitz)", price: "120 €", time: "1h10-1h30" },
      { name: "Aéroport CDG", price: "180 €", time: "1h30-2h" },
    ],
    [
      { text: "Train depuis Paris, taxi vers le centre. Orléans est une belle étape vers les châteaux.", name: "Valérie H.", initials: "VH", role: "Touriste" },
      { text: "Transfert vers Chambord, le chauffeur a fait guide bénévole !", name: "Gérard N.", initials: "GN", role: "Parisien" },
      { text: "Ville de Jeanne d'Arc, taxi rapide depuis la gare. Très bien.", name: "Morgane D.", initials: "MD", role: "Étudiante" },
    ],
    [
      { question: "Comment rejoindre Chambord depuis Orléans ?", answer: "Le forfait taxi Orléans-Chambord est d'environ 55 €, pour un trajet de 30-40 minutes." },
    ],
    ["tours", "paris-gare-d-austerlitz", "limoges-benedictins"],
    ["Train vers Paris (1h10)", "Transferts vers Chambord et les châteaux", "Ville de Jeanne d'Arc", "Attente gratuite en cas de retard"],
  ),

  station(
    "Mulhouse Ville", "mulhouse-ville",
    "Mulhouse", "mulhouse", 47.7419, 7.3425,
    "Centre de Mulhouse", "3-8 min", "10 €",
    ["TGV", "TER"],
    "4 millions",
    [
      { name: "Cité de l'Automobile", price: "10 €", time: "5-8 min" },
      { name: "EuroAirport Bâle-Mulhouse", price: "30 €", time: "20-25 min" },
      { name: "Colmar", price: "40 €", time: "25-30 min" },
      { name: "Bâle (Suisse)", price: "35 €", time: "20-25 min" },
      { name: "Fribourg (Allemagne)", price: "55 €", time: "35-45 min" },
    ],
    [
      { text: "TGV depuis Paris, taxi vers la Cité de l'Auto. Collection incroyable !", name: "Bruno F.", initials: "BF", role: "Passionné auto" },
      { text: "Transfert vers EuroAirport rapide et professionnel.", name: "Isabelle K.", initials: "IK", role: "Mulhousienne" },
      { text: "Taxi vers Bâle pour un congrès. Transfert transfrontalier impeccable.", name: "Markus S.", initials: "MS", role: "Médecin, Bâle" },
    ],
    [
      { question: "Peut-on prendre un taxi vers la Suisse ?", answer: "Oui, nos chauffeurs proposent des transferts vers Bâle (20-25 min, ~35 €) et l'EuroAirport (20-25 min, ~30 €)." },
    ],
    ["strasbourg", "besancon-viotte", "dijon-ville"],
    ["TGV vers Paris (2h50)", "Carrefour France-Suisse-Allemagne", "Cité de l'Automobile et du Train", "Transferts transfrontaliers", "Attente gratuite en cas de retard"],
  ),

  station(
    "Amiens", "amiens",
    "Amiens", "amiens", 49.8896, 2.3049,
    "Centre d'Amiens", "3-8 min", "10 €",
    ["TER", "Intercités"],
    "4 millions",
    [
      { name: "Cathédrale d'Amiens", price: "8 €", time: "3-5 min" },
      { name: "Hortillonnages", price: "10 €", time: "5-8 min" },
      { name: "Aéroport Beauvais-Tillé", price: "70 €", time: "45-55 min" },
      { name: "Baie de Somme", price: "60 €", time: "40-50 min" },
      { name: "Albert (Mémorial 14-18)", price: "35 €", time: "20-25 min" },
    ],
    [
      { text: "Train depuis Paris, taxi vers la cathédrale. Amiens est une ville magnifique.", name: "Thierry L.", initials: "TL", role: "Touriste" },
      { text: "Transfert vers la Baie de Somme, le chauffeur connaissait les bons spots.", name: "Brigitte M.", initials: "BM", role: "Nature lover" },
      { text: "Déplacement pro, taxi ponctuel. Bonne couverture TaxiNeo dans la Somme.", name: "Vincent C.", initials: "VC", role: "Commercial" },
    ],
    [
      { question: "Comment visiter la Baie de Somme ?", answer: "Le forfait taxi Amiens – Baie de Somme est d'environ 60 €, trajet de 40-50 minutes. Idéal pour voir les phoques." },
    ],
    ["lille-flandres", "rouen-rive-droite", "paris-gare-du-nord", "reims"],
    ["Train direct vers Paris Nord (1h10)", "Plus grande cathédrale gothique de France", "Hortillonnages (jardins flottants)", "Transferts vers la Baie de Somme", "Attente gratuite en cas de retard"],
  ),

  station(
    "Besançon Viotte", "besancon-viotte",
    "Besançon", "besancon", 47.2474, 6.0218,
    "Centre de Besançon", "3-8 min", "10 €",
    ["TGV", "TER"],
    "3 millions",
    [
      { name: "Citadelle Vauban", price: "10 €", time: "5-8 min" },
      { name: "Besançon Franche-Comté TGV", price: "20 €", time: "10-15 min" },
      { name: "Pontarlier (frontière suisse)", price: "60 €", time: "40-50 min" },
      { name: "Belfort", price: "70 €", time: "45-55 min" },
      { name: "Dole", price: "50 €", time: "30-35 min" },
    ],
    [
      { text: "TGV depuis Paris, taxi vers la Citadelle. Besançon est une ville sous-estimée.", name: "Marion T.", initials: "MT", role: "Touriste" },
      { text: "Transfert vers Pontarlier pour le ski de fond. Chauffeur ponctuel.", name: "Éric V.", initials: "EV", role: "Sportif" },
      { text: "Correspondance avec le TGV à la gare Franche-Comté. Taxi rapide.", name: "Nadia B.", initials: "NB", role: "Voyageuse" },
    ],
    [
      { question: "Y a-t-il deux gares à Besançon ?", answer: "Oui, la gare Viotte est en centre-ville et la gare TGV Besançon Franche-Comté est à 10 km. Un taxi relie les deux en 10-15 minutes." },
    ],
    ["dijon-ville", "mulhouse-ville", "strasbourg"],
    ["TGV vers Paris (2h)", "Citadelle Vauban (UNESCO)", "Capitale de l'horlogerie", "Transferts vers le Jura et la Suisse", "Attente gratuite en cas de retard"],
  ),

  station(
    "La Rochelle Ville", "la-rochelle-ville",
    "La Rochelle", "la-rochelle", 46.1526, -1.1467,
    "Centre de La Rochelle", "3-8 min", "10 €",
    ["TGV", "TER", "Intercités"],
    "2 millions",
    [
      { name: "Vieux-Port", price: "8 €", time: "3-5 min" },
      { name: "Aquarium de La Rochelle", price: "10 €", time: "5-8 min" },
      { name: "Île de Ré (pont)", price: "30 €", time: "20-25 min" },
      { name: "Aéroport La Rochelle-Laleu", price: "15 €", time: "8-12 min" },
      { name: "Royan", price: "80 €", time: "50 min-1h" },
    ],
    [
      { text: "TGV depuis Paris, taxi vers le Vieux-Port. L'air marin en 3 heures, magique.", name: "Sophie T.", initials: "ST", role: "Parisienne" },
      { text: "Transfert vers l'Île de Ré rapide. Vacances commencées dès la gare.", name: "Antoine R.", initials: "AR", role: "Vacancier" },
      { text: "Le taxi m'a déposé directement devant l'Aquarium. Pratique avec les enfants.", name: "Nathalie J.", initials: "NJ", role: "Maman" },
    ],
    [
      { question: "Comment rejoindre l'Île de Ré ?", answer: "Le forfait taxi La Rochelle – Île de Ré est d'environ 30 € (+ péage pont). Trajet de 20-25 minutes." },
    ],
    ["poitiers", "nantes", "bordeaux-saint-jean"],
    ["TGV vers Paris (3h)", "Gare à 5 min du Vieux-Port", "Transferts vers l'Île de Ré", "Aquarium à proximité", "Attente gratuite en cas de retard"],
  ),

  station(
    "Bayonne", "bayonne",
    "Bayonne", "bayonne", 43.4933, -1.4753,
    "Centre de Bayonne", "3-8 min", "10 €",
    ["TGV", "TER"],
    "2 millions",
    [
      { name: "Centre-ville (Cathédrale)", price: "8 €", time: "3-5 min" },
      { name: "Biarritz", price: "20 €", time: "10-15 min" },
      { name: "Aéroport Biarritz-Pays Basque", price: "22 €", time: "12-18 min" },
      { name: "Saint-Jean-de-Luz", price: "30 €", time: "18-25 min" },
      { name: "San Sebastián (Espagne)", price: "80 €", time: "45-55 min" },
    ],
    [
      { text: "TGV depuis Paris, taxi direct vers Biarritz. Les vagues m'attendaient.", name: "Julien S.", initials: "JS", role: "Surfeur" },
      { text: "Transfert vers Saint-Jean-de-Luz pour un mariage. Service impeccable.", name: "Marie L.", initials: "ML", role: "Invitée" },
      { text: "Taxi vers San Sebastián pour un week-end gastronomie. Transfert transfrontalier parfait.", name: "Carlos G.", initials: "CG", role: "Gourmet" },
    ],
    [
      { question: "Peut-on prendre un taxi vers l'Espagne ?", answer: "Oui, le forfait taxi Bayonne – San Sebastián est d'environ 80 €, pour un trajet de 45-55 minutes." },
    ],
    ["pau", "bordeaux-saint-jean", "toulouse-matabiau"],
    ["TGV vers Paris (4h)", "Porte du Pays Basque", "Transferts vers Biarritz et Saint-Jean-de-Luz", "Taxi transfrontalier vers l'Espagne", "Attente gratuite en cas de retard"],
  ),

  station(
    "Chambéry", "chambery",
    "Chambéry", "chambery", 45.5713, 5.9186,
    "Centre de Chambéry", "3-8 min", "10 €",
    ["TGV", "TER"],
    "3 millions",
    [
      { name: "Centre-ville (Château)", price: "8 €", time: "3-5 min" },
      { name: "Aéroport Chambéry-Savoie", price: "15 €", time: "8-12 min" },
      { name: "Courchevel", price: "120 €", time: "1h-1h15" },
      { name: "Val Thorens", price: "140 €", time: "1h15-1h30" },
      { name: "Lac du Bourget (Aix-les-Bains)", price: "25 €", time: "15-20 min" },
    ],
    [
      { text: "TGV direct depuis Paris, taxi vers Courchevel. Début des vacances au ski.", name: "Christine D.", initials: "CD", role: "Skieuse" },
      { text: "Transfert vers le Lac du Bourget. Paysage magnifique, chauffeur local.", name: "Philippe M.", initials: "PM", role: "Touriste" },
      { text: "Correspondance TGV parfaite, taxi immédiat vers mon hôtel. Chambéry est charmante.", name: "Léa V.", initials: "LV", role: "Voyageuse" },
    ],
    [
      { question: "Comment rejoindre les stations de ski depuis Chambéry ?", answer: "Nos chauffeurs proposent des transferts vers Courchevel (~120 €, 1h), Val Thorens (~140 €, 1h15), Méribel et les 3 Vallées. Véhicules équipés hiver." },
    ],
    ["grenoble", "lyon-part-dieu", "lyon-saint-exupery-tgv"],
    ["TGV vers Paris (3h)", "Porte des stations de ski savoyardes", "Courchevel, Méribel, Val Thorens accessibles", "Véhicules équipés pneus neige", "Attente gratuite en cas de retard"],
  ),

  station(
    "Cannes", "cannes",
    "Cannes", "cannes", 43.5527, 7.0170,
    "Centre de Cannes", "3-8 min", "10 €",
    ["TGV", "TER"],
    "3 millions",
    [
      { name: "La Croisette / Palais des Festivals", price: "10 €", time: "3-5 min" },
      { name: "Aéroport Nice Côte d'Azur", price: "85 €", time: "30-45 min" },
      { name: "Nice centre", price: "70 €", time: "30-40 min" },
      { name: "Monaco", price: "120 €", time: "50 min-1h" },
      { name: "Grasse (parfumeries)", price: "25 €", time: "15-20 min" },
    ],
    [
      { text: "TGV depuis Paris, taxi vers la Croisette. Cannes brille même hors Festival.", name: "Isabelle P.", initials: "IP", role: "Touriste" },
      { text: "Festival de Cannes, le taxi a géré les routes fermées comme un pro.", name: "Jean-Claude M.", initials: "JCM", role: "Professionnel du cinéma" },
      { text: "Transfert gare-aéroport Nice parfait pour mon vol.", name: "Angela T.", initials: "AT", role: "Cannoise" },
    ],
    [
      { question: "Comment se déplacer pendant le Festival de Cannes ?", answer: "Réservez votre taxi à l'avance pendant le Festival. Nos chauffeurs connaissent les itinéraires alternatifs pour éviter les routes fermées." },
    ],
    ["nice-ville", "toulon", "marseille-saint-charles"],
    ["TGV vers Paris (5h)", "Festival de Cannes en mai", "La Croisette à 3 min", "Transferts vers Nice, Monaco, Grasse", "Attente gratuite en cas de retard"],
  ),

  station(
    "Versailles Chantiers", "versailles-chantiers",
    "Versailles", "versailles", 48.7953, 2.1345,
    "Centre de Versailles", "3-8 min", "10 €",
    ["TER", "RER", "Transilien"],
    "15 millions",
    [
      { name: "Château de Versailles", price: "10 €", time: "3-5 min" },
      { name: "Paris centre (Châtelet)", price: "40 €", time: "25-40 min" },
      { name: "Aéroport CDG", price: "75 €", time: "50 min-1h10" },
      { name: "Aéroport d'Orly", price: "40 €", time: "25-35 min" },
      { name: "La Défense", price: "30 €", time: "20-30 min" },
    ],
    [
      { text: "Train depuis Paris, taxi direct vers le Château. Pas de file d'attente pour le transport.", name: "Keiko Y.", initials: "KY", role: "Touriste japonaise" },
      { text: "Transfert Versailles-Orly rapide pour mon vol. Pratique depuis Versailles.", name: "Laurent F.", initials: "LF", role: "Versaillais" },
      { text: "Famille nombreuse, le monospace nous a déposés devant le Château. Les enfants étaient ravis.", name: "Camille S.", initials: "CS", role: "Maman" },
    ],
    [
      { question: "Comment se rendre au Château depuis la gare ?", answer: "La gare Versailles Chantiers est à 10 minutes à pied du Château. En taxi, 3-5 minutes et le chauffeur vous dépose devant la grille." },
    ],
    ["paris-montparnasse", "paris-saint-lazare"],
    ["Gare principale de Versailles", "Château de Versailles à 3 min", "RER C, Transilien N et U", "Transferts vers Paris et les aéroports", "Attente gratuite en cas de retard"],
  ),

  station(
    "Pau", "pau",
    "Pau", "pau", 43.2951, -0.3708,
    "Centre de Pau", "3-8 min", "10 €",
    ["TGV", "TER"],
    "1,5 million",
    [
      { name: "Boulevard des Pyrénées", price: "8 €", time: "3-5 min" },
      { name: "Aéroport Pau-Pyrénées", price: "18 €", time: "10-15 min" },
      { name: "Lourdes", price: "45 €", time: "30-35 min" },
      { name: "Biarritz", price: "90 €", time: "55 min-1h10" },
      { name: "Gave de Pau (rafting)", price: "20 €", time: "10-15 min" },
    ],
    [
      { text: "TGV depuis Paris, taxi vers le Boulevard des Pyrénées. Vue sur les montagnes incroyable.", name: "Jacques R.", initials: "JR", role: "Touriste" },
      { text: "Transfert vers Lourdes pour le pèlerinage. Chauffeur attentionné.", name: "Maria C.", initials: "MC", role: "Pèlerine" },
      { text: "Taxi vers l'aéroport parfait pour mon vol vers Londres.", name: "Pierre G.", initials: "PG", role: "Palois" },
    ],
    [
      { question: "Comment rejoindre Lourdes depuis Pau ?", answer: "Le forfait taxi Pau – Lourdes est d'environ 45 €, pour un trajet de 30-35 minutes." },
    ],
    ["bayonne", "toulouse-matabiau", "bordeaux-saint-jean"],
    ["TGV vers Paris (4h30)", "Vue panoramique sur les Pyrénées", "Transferts vers Lourdes", "Porte des Pyrénées", "Attente gratuite en cas de retard"],
  ),
];

// ─── Helpers ────────────────────────────────────────────────

export function getStationBySlug(slug: string): Station | undefined {
  return stations.find((s) => s.slug === slug);
}

export function getNearbyStations(st: Station): Station[] {
  return st.nearbyStations
    .map((slug) => getStationBySlug(slug))
    .filter((s): s is Station => s !== undefined);
}

export const popularStations = stations.filter((s) =>
  ["paris-gare-du-nord", "paris-gare-de-lyon", "paris-montparnasse", "lyon-part-dieu",
   "marseille-saint-charles", "bordeaux-saint-jean", "lille-europe", "strasbourg"].includes(s.slug)
);

export const stationServices = [
  {
    icon: "solar:train-linear",
    title: "Transfert arrivée",
    description: "Votre chauffeur vous attend à la sortie de la gare. Suivi de train en temps réel.",
  },
  {
    icon: "solar:login-3-linear",
    title: "Transfert départ",
    description: "Prise en charge à domicile ou à l'hôtel, dépose devant l'entrée de la gare.",
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
    description: "Transfert adapté vers ou depuis la gare pour les personnes à mobilité réduite.",
  },
];
