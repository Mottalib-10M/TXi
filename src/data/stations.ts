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
  description: string;
  whyUs: { title: string; desc: string }[];
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
        metaTitle: name.length <= 10
          ? `Taxi Gare ${name} — Forfait garanti, réservation en ligne`
          : name.length <= 20
            ? `Taxi ${name} — Transfert gare forfaitaire 24/7`
            : `Taxi ${name} — Transfert gare au forfait`,
        metaDescription: name.length <= 13
          ? `Réservez votre taxi pour la gare de ${name}. Transfert ponctuel au forfait garanti, suivi des trains en temps réel et aide aux bagages. Disponible 24h/24.`
          : name.length <= 19
            ? `Réservez votre taxi pour la gare ${name}. Transfert ponctuel, tarifs forfaitaires garantis, suivi des trains et aide aux bagages. Disponible 24h/24.`
            : `Taxi pour la gare ${name}. Forfait garanti, suivi des trains en temps réel, aide aux bagages et chauffeur à la sortie. Disponible 24h/24.`,
        heroTitle: `Taxi Gare ${name}`,
        heroSubtitle: `Transfert taxi vers et depuis la gare ${name}. Tarifs forfaitaires, chauffeur qui vous attend à la sortie de la gare, suivi des trains en temps réel.`,
        intro: `Besoin d'un taxi pour la gare ${name} ? TaxiNeo vous propose un service de transfert professionnel, ponctuel et au meilleur prix. Nos chauffeurs suivent votre train en temps réel et vous attendent à la sortie de la gare. En cas de retard de votre train, l'attente est gratuite.`,
        description: `Devant la gare ${name}, votre taxi officiel stationne directement sur la zone de prise en charge — contrairement aux VTC qui n'ont pas le droit de s'arrêter devant. Disponible aux heures de pointe comme pour le premier et le dernier train, avec réservation à l'avance pour les correspondances serrées.`,
        whyUs: [],
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
        metaTitle: name.length <= 10
          ? `Taxi ${name} Station — Book your fixed-fare transfer 24/7`
          : name.length <= 20
            ? `Taxi ${name} — Fixed-fare station transfer 24/7`
            : `Taxi ${name} — Fixed-fare transfer 24/7`,
        metaDescription: name.length <= 5
          ? `Book your taxi to ${name} station. Fixed-fare transfer guaranteed, real-time train tracking, luggage assistance and your driver waiting at the station exit. 24/7.`
          : name.length <= 9
            ? `Book your taxi to ${name} station. Guaranteed fixed fares, real-time train tracking, luggage assistance and your driver waiting at the station exit. 24/7.`
            : name.length <= 15
              ? `Book your taxi to ${name} station. Reliable transfer with guaranteed fixed fares, real-time train tracking and luggage assistance at the exit. 24/7.`
              : name.length <= 20
                ? `Taxi to ${name}: book your fixed-fare station transfer. Real-time train tracking, luggage assistance and driver waiting at exit. Available 24/7.`
                : `Taxi to ${name}: fixed-fare transfer, train tracking, luggage help and driver waiting at the exit. Book your station transfer online 24/7.`,
        heroTitle: `Taxi ${name} Station`,
        heroSubtitle: `Taxi transfer to and from ${name} station. Flat-rate fares, driver waiting for you at the station exit, real-time train tracking.`,
        intro: `Need a taxi to ${name} station? TaxiNeo offers a professional, punctual transfer service at the best price. Our drivers track your train in real time and wait for you at the station exit. If your train is delayed, the waiting time is free of charge.`,
        description: `At ${name} station, your licensed taxi waits directly at the official taxi rank outside — unlike ride-hailing services that cannot stop in front of the station. Available during peak hours and for the first and last trains, with advance booking for tight connections.`,
        whyUs: [],
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

// ─── Unique station content ──────────────────────────────────

const STATION_CONTENT: Record<string, { fr: { intro: string; description: string; metaDescription: string; heroSubtitle: string; whyUs: { title: string; desc: string }[] }; en: { intro: string; description: string; metaDescription: string; heroSubtitle: string; whyUs: { title: string; desc: string }[] } }> = {
  "paris-gare-du-nord": {
    fr: {
      intro: "La Gare du Nord, située dans le 10e arrondissement de Paris, est la gare la plus fréquentée d'Europe avec 292 millions de voyageurs par an. Hub majeur desservant l'Eurostar vers Londres, le Thalys vers Bruxelles et Amsterdam, les TGV vers Lille et le Nord, ainsi que les TER, RER B et D et les Transilien. À seulement 5 à 15 minutes du centre de Paris, TaxiNeo vous garantit un prix fixe et un chauffeur professionnel qui vous attend directement à la sortie de la gare, rue de Dunkerque.",
      description: "Devant la Gare du Nord, la zone de taxis officiels se trouve côté rue de Dunkerque, un avantage exclusif que les VTC ne peuvent pas offrir puisqu'ils n'ont pas le droit de stationner devant. Nos chauffeurs assurent une disponibilité totale aux heures de pointe, pour le premier Eurostar de 5h40 comme pour le dernier Thalys de 21h25. En réservant à l'avance, vous sécurisez votre correspondance même lors des afflux de passagers internationaux. Le quartier est très animé : attention aux faux taxis devant la gare, privilégiez toujours une réservation TaxiNeo.",
      metaDescription: "Taxi Gare du Nord : 292 millions de voyageurs/an, hub Eurostar & Thalys vers Londres et Bruxelles. Forfait garanti, chauffeur à la sortie. Réservez 24h/24.",
      heroSubtitle: "Première gare d'Europe avec 292 millions de voyageurs par an, la Gare du Nord dessert Eurostar, Thalys et TGV Nord. Votre chauffeur TaxiNeo vous attend à la sortie rue de Dunkerque, avec suivi de train en temps réel et prix fixe garanti, disponible 24h/24.",
      whyUs: [
        { title: "Accès direct rue de Dunkerque", desc: "Station taxi officielle devant la sortie principale, rue de Dunkerque. Nos chauffeurs stationnent à 30 mètres des quais Eurostar et Thalys, sans traverser le hall bondé." },
        { title: "Expert Eurostar et Thalys", desc: "Nos chauffeurs connaissent les horaires des Eurostar (Londres 2h15), Thalys (Bruxelles 1h22) et TGV Nord. Ils adaptent leur arrivée au quai de débarquement exact." },
        { title: "Navette vers CDG en 35 minutes", desc: "Transfert direct Gare du Nord – CDG via l'A1 et les voies réservées taxi. 35 min hors pointe, 50 min en heure de pointe, forfait fixe de 56 €." },
      ],
    },
    en: {
      intro: "Gare du Nord, located in Paris' 10th arrondissement, is Europe's busiest station with 292 million passengers per year. A major hub serving Eurostar to London, Thalys to Brussels and Amsterdam, TGV to Lille and northern France, as well as TER, RER B and D, and Transilien lines. Just 5 to 15 minutes from central Paris, TaxiNeo guarantees you a fixed fare and a professional driver waiting for you right at the station exit on rue de Dunkerque.",
      description: "In front of Gare du Nord, the official taxi rank is located on the rue de Dunkerque side — an exclusive advantage that ride-hailing services cannot offer as they are not permitted to park there. Our drivers ensure full availability during peak hours, from the first Eurostar at 5:40am to the last Thalys at 9:25pm. By booking in advance, you secure your connection even during international passenger surges. The area is very busy: beware of unlicensed taxis outside the station, and always rely on a TaxiNeo reservation.",
      metaDescription: "Taxi Gare du Nord: Europe's busiest station with 292M passengers/year. Eurostar & Thalys hub to London and Brussels. Fixed fare, driver at exit. Book 24/7.",
      heroSubtitle: "Europe's busiest station with 292 million passengers per year, Gare du Nord serves Eurostar, Thalys and TGV Nord. Your TaxiNeo driver waits at the rue de Dunkerque exit, with real-time train tracking and a guaranteed fixed fare, available around the clock.",
      whyUs: [
        { title: "Direct Rue de Dunkerque access", desc: "Official taxi rank right at the main exit on Rue de Dunkerque. Our drivers park 30 metres from the Eurostar and Thalys platforms, no need to cross the crowded hall." },
        { title: "Eurostar & Thalys specialist", desc: "Our drivers know the schedules for Eurostar (London 2h15), Thalys (Brussels 1h22) and TGV Nord. They time their arrival to the exact unloading platform." },
        { title: "CDG shuttle in 35 minutes", desc: "Direct Gare du Nord – CDG transfer via the A1 motorway and reserved taxi lanes. 35 min off-peak, 50 min rush hour, fixed fare of €56." },
      ],
    }
  },
  "paris-gare-de-lyon": {
    fr: {
      intro: "La Gare de Lyon, dans le 12e arrondissement de Paris, accueille 148 millions de voyageurs par an. Terminus des TGV vers Lyon, Marseille, Nice, la Suisse et l'Italie, elle est aussi desservie par les TER, le RER A et D et les Transilien. Célèbre pour son beffroi et le mythique restaurant Le Train Bleu, la gare est à 5-15 minutes des principaux quartiers parisiens. TaxiNeo vous propose un transfert au forfait garanti avec un chauffeur qui suit votre TGV en temps réel.",
      description: "La zone de taxis officiels devant la Gare de Lyon se situe sur le parvis principal, un emplacement réservé aux taxis que les VTC ne peuvent pas utiliser. Que vous arriviez par un TGV à 6h du matin ou par le dernier train de 23h, nos chauffeurs sont disponibles. La gare est souvent saturée aux heures de pointe avec les correspondances vers les aéroports : réserver à l'avance vous évite toute attente sur le parvis. Le quartier de Bercy-Village et l'AccorHotels Arena sont accessibles en quelques minutes.",
      metaDescription: "Taxi Gare de Lyon : 148 millions de voyageurs/an, TGV vers Lyon, Marseille, Suisse et Italie. Forfait fixe garanti, suivi TGV en temps réel. Réservez.",
      heroSubtitle: "Terminus des TGV vers Lyon, Marseille, Nice, la Suisse et l'Italie, la Gare de Lyon accueille 148 millions de voyageurs par an. Votre chauffeur TaxiNeo suit votre train en temps réel et vous attend sur le parvis principal, au forfait garanti, de jour comme de nuit.",
      whyUs: [
        { title: "Parvis principal Hall 1 & 2", desc: "Prise en charge sur le parvis face à la sortie Hall 1 ou Hall 2. Précisez votre hall d'arrivée, nos chauffeurs s'adaptent en temps réel aux quais TGV Sud-Est." },
        { title: "Correspondance Suisse et Italie", desc: "Experts des TGV Lyria vers Genève et Lausanne et des Frecciarossa vers Milan. Nos chauffeurs suivent les horaires internationaux et gèrent les retards douaniers." },
        { title: "Transfert Orly via A6 en 25 min", desc: "Depuis la Gare de Lyon, Orly est accessible en 25 minutes par l'A6. Forfait fixe quelle que soit l'heure, idéal pour les vols matinaux ou les arrivées tardives." },
      ],
    },
    en: {
      intro: "Gare de Lyon, in Paris' 12th arrondissement, welcomes 148 million travellers per year. The terminus for TGV trains to Lyon, Marseille, Nice, Switzerland and Italy, it is also served by TER, RER A and D, and Transilien lines. Famous for its clock tower and the legendary Le Train Bleu restaurant, the station is 5-15 minutes from the main Parisian districts. TaxiNeo offers you a guaranteed fixed-fare transfer with a driver who tracks your TGV in real time.",
      description: "The official taxi rank in front of Gare de Lyon is located on the main forecourt — a spot reserved for licensed taxis that ride-hailing services are not permitted to use. Whether you arrive on a 6am TGV or the last train at 11pm, our drivers are available. The station is often packed during rush hours with airport connections: booking ahead spares you any wait on the forecourt. The Bercy Village district and AccorHotels Arena are reachable within minutes.",
      metaDescription: "Taxi Gare de Lyon: 148M passengers/year, TGV hub for South of France, Switzerland and Italy. Guaranteed fixed fare, real-time TGV tracking. Book online.",
      heroSubtitle: "Terminus for TGV trains to Lyon, Marseille, Nice, Switzerland and Italy, Gare de Lyon welcomes 148 million travellers yearly. Your TaxiNeo driver tracks your train in real time and waits on the main forecourt, at a guaranteed fixed fare, day and night.",
      whyUs: [
        { title: "Hall 1 & Hall 2 forecourt", desc: "Pickup on the forecourt facing Hall 1 or Hall 2 exits. Specify your arrival hall and our drivers adapt in real time to the TGV Sud-Est platform assignments." },
        { title: "Switzerland & Italy connections", desc: "Experts in TGV Lyria to Geneva and Lausanne plus Frecciarossa to Milan. Our drivers track international schedules and handle customs-related delays." },
        { title: "Orly transfer via A6 in 25 min", desc: "From Gare de Lyon, Orly Airport is reachable in 25 minutes via the A6 motorway. Fixed fare regardless of time, ideal for early flights or late arrivals." },
      ],
    }
  },
  "paris-saint-lazare": {
    fr: {
      intro: "La Gare Saint-Lazare, dans le 8e arrondissement de Paris, est la deuxième gare parisienne par sa fréquentation avec 100 millions de voyageurs par an. Elle dessert toute la Normandie via les Transilien, TER et Intercités : Rouen, Le Havre, Caen, Cherbourg et Deauville. Implantée au cœur du quartier des grands magasins, à proximité de l'Opéra et du boulevard Haussmann, elle se trouve à 5-15 minutes de tout Paris. TaxiNeo vous garantit un chauffeur à la sortie, côté cour de Rome.",
      description: "Devant la Gare Saint-Lazare, la station de taxis officiels est accessible côté cour de Rome — un accès direct que les VTC ne peuvent pas emprunter. Gare de banlieue par excellence, elle connaît des afflux massifs matin et soir : nos chauffeurs sont présents dès le premier train Transilien de 5h et jusqu'au dernier Intercités de nuit. Réserver à l'avance est particulièrement conseillé en semaine pour éviter les longues files. Le quartier regorge d'hôtels et de commerces, idéal pour un transfert rapide vers votre hébergement.",
      metaDescription: "Taxi Gare Saint-Lazare : 100 millions de voyageurs/an, porte de la Normandie et banlieue ouest. Chauffeur cour de Rome, forfait fixe. Réservez 24h/24.",
      heroSubtitle: "Deuxième gare parisienne avec 100 millions de voyageurs par an, Saint-Lazare dessert toute la Normandie vers Rouen, Caen et Deauville. Votre chauffeur TaxiNeo vous accueille cour de Rome avec un forfait fixe et une prise en charge adaptée aux heures de pointe.",
      whyUs: [
        { title: "Sortie cour de Rome immédiate", desc: "Station taxi officielle côté cour de Rome, à 20 mètres de la sortie Transilien. Nos chauffeurs évitent le passage souterrain bondé et vous récupèrent directement en surface." },
        { title: "Spécialiste lignes normandes", desc: "Maîtrise des horaires Transilien J & L vers Cergy et Ermont, et des Intercités vers Rouen (1h20), Caen (2h) et Deauville. Adaptation en cas de perturbation SNCF." },
        { title: "Quartier Opéra et Haussmann", desc: "À 300 mètres du boulevard Haussmann et des Galeries Lafayette. Transferts rapides vers l'Opéra Garnier, la Madeleine et la Concorde en 3-5 minutes." },
      ],
    },
    en: {
      intro: "Gare Saint-Lazare, in Paris' 8th arrondissement, is the second busiest Parisian station with 100 million passengers per year. It serves all of Normandy via Transilien, TER and Intercités trains: Rouen, Le Havre, Caen, Cherbourg and Deauville. Set in the heart of the department store district, close to the Opera and boulevard Haussmann, it is 5-15 minutes from anywhere in Paris. TaxiNeo guarantees a driver waiting for you at the exit on the cour de Rome side.",
      description: "In front of Gare Saint-Lazare, the official taxi rank is accessible from the cour de Rome side — a direct access that ride-hailing services cannot use. As the quintessential commuter station, it experiences massive surges morning and evening: our drivers are on hand from the first Transilien at 5am to the last night Intercités. Booking ahead is especially recommended on weekdays to avoid long queues. The area abounds with hotels and shops, perfect for a quick transfer to your accommodation.",
      metaDescription: "Taxi Gare Saint-Lazare: 100M passengers/year, gateway to Normandy and the western suburbs. Driver at cour de Rome exit, fixed fare guaranteed. Book 24/7.",
      heroSubtitle: "Paris' second busiest station with 100 million passengers yearly, Saint-Lazare serves all of Normandy including Rouen, Caen and Deauville. Your TaxiNeo driver meets you at the cour de Rome exit with a fixed fare, tailored to peak-hour travel.",
      whyUs: [
        { title: "Cour de Rome direct exit", desc: "Official taxi rank on the cour de Rome side, 20 metres from the Transilien exit. Our drivers skip the crowded underground passage and pick you up directly at street level." },
        { title: "Norman line specialist", desc: "Full knowledge of Transilien J & L schedules to Cergy and Ermont, plus Intercites to Rouen (1h20), Caen (2h) and Deauville. We adapt to SNCF disruptions." },
        { title: "Opera & Haussmann district", desc: "Just 300 metres from boulevard Haussmann and Galeries Lafayette. Quick transfers to Opera Garnier, La Madeleine and Place de la Concorde in 3-5 minutes." },
      ],
    }
  },
  "paris-montparnasse": {
    fr: {
      intro: "La Gare Montparnasse, dans le 15e arrondissement de Paris, accueille 90 millions de voyageurs par an. Principal terminus des TGV vers l'Ouest et le Sud-Ouest — Bordeaux en 2h04, Rennes en 1h27, Nantes en 2h15 — elle gère aussi les TER et Intercités vers la Bretagne, le Poitou et l'Aquitaine. Répartie en trois halls, la gare se situe à 5-15 minutes du centre de Paris. TaxiNeo vous garantit un forfait fixe et un chauffeur qui vous retrouve à la sortie de votre hall d'arrivée.",
      description: "Devant la Gare Montparnasse, la zone de taxis officiels est au pied de la tour, côté place Raoul Dautry — un emplacement interdit aux VTC. La gare est stratégique pour les transferts vers l'aéroport d'Orly, accessible en seulement 20-30 minutes. Nos chauffeurs sont disponibles pour le premier TGV de 6h comme pour les arrivées tardives de Bretagne. Réserver en avance est fortement conseillé le vendredi soir et le dimanche soir, périodes de forte affluence avec les retours de week-end. Le quartier offre un accès rapide à la Tour Eiffel et aux Invalides.",
      metaDescription: "Taxi Gare Montparnasse : 90 millions de voyageurs/an, TGV vers Bordeaux en 2h04 et Rennes en 1h27. Forfait fixe garanti, transfert Orly 20 min. Réservez.",
      heroSubtitle: "Terminus des TGV vers Bordeaux, Rennes, Nantes et toute la façade atlantique, Montparnasse accueille 90 millions de voyageurs par an. TaxiNeo vous attend place Raoul Dautry au forfait fixe, avec aide bagages et transferts rapides vers Orly en 20 minutes.",
      whyUs: [
        { title: "Place Raoul Dautry, 3 halls", desc: "Prise en charge adaptée aux trois halls (Pasteur, Atlantique, Vaugirard). Indiquez votre hall d'arrivée, nos chauffeurs se positionnent au plus proche de votre quai." },
        { title: "Transfert Orly express 20 min", desc: "Montparnasse est la gare parisienne la plus proche d'Orly : 20 min par le périphérique sud et l'A6. Forfait fixe, véhicule spacieux pour les gros bagages TGV." },
        { title: "Expert vendredi soir Bretagne", desc: "Le vendredi soir, les TGV Bretagne créent un pic massif. Nos chauffeurs anticipent les retards fréquents sur les TGV Rennes-Nantes et ajustent leur positionnement." },
      ],
    },
    en: {
      intro: "Gare Montparnasse, in Paris' 15th arrondissement, welcomes 90 million passengers per year. The main terminus for TGV trains to western and south-western France — Bordeaux in 2h04, Rennes in 1h27, Nantes in 2h15 — it also handles TER and Intercités to Brittany, Poitou and Aquitaine. Spread across three halls, the station is 5-15 minutes from central Paris. TaxiNeo guarantees a fixed fare and a driver who meets you at the exit of your arrival hall.",
      description: "In front of Gare Montparnasse, the official taxi zone is at the foot of the tower on the place Raoul Dautry side — a spot off-limits to ride-hailing services. The station is strategic for transfers to Orly Airport, reachable in just 20-30 minutes. Our drivers are available for the first TGV at 6am as well as late arrivals from Brittany. Booking ahead is strongly advised on Friday and Sunday evenings, peak periods with weekend return traffic. The area offers quick access to the Eiffel Tower and Les Invalides.",
      metaDescription: "Taxi Gare Montparnasse: 90M passengers/year, TGV to Bordeaux in 2h04 and Rennes in 1h27. Guaranteed fixed fare, Orly transfer in just 20 min. Book now.",
      heroSubtitle: "Terminus for TGV trains to Bordeaux, Rennes, Nantes and the Atlantic coast, Montparnasse welcomes 90 million passengers yearly. TaxiNeo meets you at place Raoul Dautry with a fixed fare, luggage assistance and fast Orly Airport transfers in 20 minutes.",
      whyUs: [
        { title: "Place Raoul Dautry, 3 halls", desc: "Pickup adapted to all three halls (Pasteur, Atlantique, Vaugirard). Tell us your arrival hall and our drivers position themselves as close as possible to your platform." },
        { title: "Express Orly transfer in 20 min", desc: "Montparnasse is the closest Paris station to Orly: 20 min via the southern ring road and the A6. Fixed fare, spacious vehicles for bulky TGV luggage." },
        { title: "Friday evening Brittany expert", desc: "Friday evenings see a massive surge from Brittany TGV services. Our drivers anticipate the frequent delays on Rennes-Nantes TGV trains and adjust their positioning." },
      ],
    }
  },
  "paris-gare-de-l-est": {
    fr: {
      intro: "La Gare de l'Est, dans le 10e arrondissement de Paris, accueille 50 millions de voyageurs par an. Elle est le terminus du TGV Est vers Strasbourg en 1h46, Reims en 45 minutes, et de l'ICE vers Francfort et Stuttgart. TER et Intercités desservent aussi la Champagne et la Lorraine. Située à seulement 300 mètres de la Gare du Nord, elle offre un accès rapide à tout Paris en 5-15 minutes. TaxiNeo vous assure un transfert au prix fixe avec un chauffeur qui vous attend dès la sortie.",
      description: "La station de taxis officiels de la Gare de l'Est se trouve sur le parvis, côté rue du 8-Mai-1945 — un accès privilégié réservé aux taxis, interdit aux VTC. Idéale pour les correspondances internationales avec l'ICE, la gare connaît des pics en semaine avec les voyageurs d'affaires franco-allemands. Nos chauffeurs couvrent tous les horaires, du premier TGV Est de 6h15 au dernier ICE en soirée. Sa proximité immédiate avec la Gare du Nord facilite les transferts entre les deux gares en 3-5 minutes pour vos correspondances Eurostar ou Thalys.",
      metaDescription: "Taxi Gare de l'Est : 50 millions de voyageurs/an, TGV vers Strasbourg en 1h46, ICE vers Francfort. Prix fixe garanti, lien Gare du Nord en 3 min. Réservez.",
      heroSubtitle: "Terminus du TGV Est vers Strasbourg et de l'ICE vers Francfort, la Gare de l'Est accueille 50 millions de voyageurs par an. TaxiNeo assure votre prise en charge au prix fixe, avec correspondance express vers la Gare du Nord en 3 minutes pour l'Eurostar.",
      whyUs: [
        { title: "Parvis rue du 8-Mai-1945", desc: "Station taxi au pied du parvis historique, côté rue du 8-Mai-1945. Accès en 1 minute depuis les quais du TGV Est et de l'ICE, sans détour par les souterrains." },
        { title: "Liaison Gare du Nord en 3 min", desc: "Correspondance express vers la Gare du Nord distante de 300 mètres. Nos chauffeurs assurent le transfert en 3 minutes pour vos connexions Eurostar ou Thalys." },
        { title: "Expert ICE franco-allemand", desc: "Connaissance des horaires ICE vers Francfort (3h50) et Stuttgart (3h10), et du TGV Est vers Strasbourg (1h46). Adaptation aux retards fréquents sur le réseau DB." },
      ],
    },
    en: {
      intro: "Gare de l'Est, in Paris' 10th arrondissement, welcomes 50 million passengers per year. It is the terminus for the TGV Est to Strasbourg in 1h46, Reims in 45 minutes, and for the ICE to Frankfurt and Stuttgart. TER and Intercités trains also serve Champagne and Lorraine. Located just 300 metres from Gare du Nord, it offers quick access to all of Paris in 5-15 minutes. TaxiNeo ensures a fixed-price transfer with a driver waiting for you right at the exit.",
      description: "The official taxi rank at Gare de l'Est is on the forecourt, on the rue du 8-Mai-1945 side — a privileged access reserved for taxis and off-limits to ride-hailing services. Ideal for international connections with the ICE, the station sees weekday peaks with Franco-German business travellers. Our drivers cover all schedules, from the first TGV Est at 6:15am to the last evening ICE. Its immediate proximity to Gare du Nord makes transfers between the two stations in 3-5 minutes easy for your Eurostar or Thalys connections.",
      metaDescription: "Taxi Gare de l'Est: 50M passengers/year, TGV to Strasbourg in 1h46 and ICE to Frankfurt. Guaranteed fixed price, Gare du Nord link 3 min away. Book now.",
      heroSubtitle: "Terminus for the TGV Est to Strasbourg and ICE to Frankfurt, Gare de l'Est welcomes 50 million passengers annually. TaxiNeo provides a fixed-price pickup with express connections to Gare du Nord in 3 minutes for Eurostar travellers.",
      whyUs: [
        { title: "Rue du 8-Mai-1945 forecourt", desc: "Taxi rank at the historic forecourt on Rue du 8-Mai-1945. Reach it in 1 minute from TGV Est and ICE platforms, no underground detours needed." },
        { title: "Gare du Nord link in 3 min", desc: "Express connection to Gare du Nord just 300 metres away. Our drivers complete the transfer in 3 minutes for your Eurostar or Thalys connections." },
        { title: "Franco-German ICE expert", desc: "Full knowledge of ICE schedules to Frankfurt (3h50) and Stuttgart (3h10), plus TGV Est to Strasbourg (1h46). We adapt to frequent DB network delays." },
      ],
    }
  },
  "paris-gare-d-austerlitz": {
    fr: {
      intro: "La Gare d'Austerlitz, dans le 13e arrondissement de Paris, dessert 30 millions de voyageurs par an. Spécialisée dans les Intercités et les trains de nuit, elle relie le Centre et le Sud-Ouest de la France : Limoges, Toulouse, Cahors et Brive. Située en bord de Seine, face au Jardin des Plantes et au Muséum d'histoire naturelle, la gare est à 5-15 minutes du cœur de Paris. TaxiNeo vous offre un chauffeur au forfait fixe, même pour les arrivées matinales des trains de nuit.",
      description: "La zone de taxis officiels de la Gare d'Austerlitz se situe sur le boulevard de l'Hôpital, avec un accès direct impossible pour les VTC. Gare de prédilection pour les trains de nuit, les arrivées se concentrent souvent entre 6h et 7h30 : nos chauffeurs sont spécialement mobilisés sur ce créneau. Le transfert vers Orly est particulièrement rapide depuis cette gare, 20-30 minutes seulement. Réserver à l'avance garantit votre prise en charge même lors des travaux qui affectent régulièrement le trafic de la gare en raison de son programme de rénovation.",
      metaDescription: "Taxi Gare d'Austerlitz : trains de nuit et Intercités, 30 millions de voyageurs/an. Prise en charge dès 5h du matin, transfert Orly 20 min. Forfait fixe.",
      heroSubtitle: "Spécialisée dans les trains de nuit et Intercités vers Toulouse et Limoges, la Gare d'Austerlitz accueille 30 millions de voyageurs. TaxiNeo mobilise ses chauffeurs dès 6h pour les arrivées matinales, avec forfait fixe et transfert express vers Orly.",
      whyUs: [
        { title: "Boulevard de l'Hôpital, sortie directe", desc: "Station taxi sur le boulevard de l'Hôpital, face à la sortie principale. Prise en charge en 2 minutes depuis les quais Intercités et trains de nuit, sans traverser le hall." },
        { title: "Arrivées trains de nuit dès 6h", desc: "Nos chauffeurs sont mobilisés dès 6h pour les trains de nuit depuis Toulouse (arrivée 6h30) et Rodez. Service matinal garanti même les dimanches et jours fériés." },
        { title: "Orly en 20 min par le quai d'Austerlitz", desc: "Trajet rapide vers Orly via les quais de Seine et l'A6b. 20 minutes hors pointe, forfait fixe, idéal pour enchaîner train de nuit et vol matinal." },
      ],
    },
    en: {
      intro: "Gare d'Austerlitz, in Paris' 13th arrondissement, serves 30 million passengers per year. Specialising in Intercités and overnight trains, it connects central and south-western France: Limoges, Toulouse, Cahors and Brive. Set along the Seine, facing the Jardin des Plantes and the Natural History Museum, the station is 5-15 minutes from the heart of Paris. TaxiNeo provides a driver at a fixed fare, even for early morning arrivals of overnight trains.",
      description: "The official taxi zone at Gare d'Austerlitz is located on boulevard de l'Hôpital, with direct access that ride-hailing services cannot use. As the station of choice for overnight trains, arrivals often cluster between 6am and 7:30am: our drivers are specially deployed during this window. The transfer to Orly is particularly fast from this station — just 20-30 minutes. Booking ahead guarantees your pickup even during the construction works that regularly affect station traffic as part of its ongoing renovation programme.",
      metaDescription: "Taxi Gare d'Austerlitz: overnight trains and Intercites services, 30M passengers/year. Early morning pickup from 5am, Orly transfer 20 min. Fixed fare 24/7.",
      heroSubtitle: "Specialising in overnight trains and Intercites to Toulouse and Limoges, Gare d'Austerlitz serves 30 million passengers. TaxiNeo deploys drivers from 6am for early arrivals, with a fixed fare and express transfers to Orly Airport.",
      whyUs: [
        { title: "Boulevard de l'Hopital exit", desc: "Taxi rank on boulevard de l'Hopital facing the main exit. Pickup in 2 minutes from the Intercites and overnight train platforms, no hall crossing needed." },
        { title: "Overnight train arrivals from 6am", desc: "Our drivers are deployed from 6am for overnight trains from Toulouse (arriving 6:30am) and Rodez. Early morning service guaranteed even on Sundays and bank holidays." },
        { title: "Orly in 20 min via Seine quays", desc: "Fast route to Orly via the Seine embankments and the A6b motorway. 20 minutes off-peak, fixed fare, ideal for connecting an overnight train to an early flight." },
      ],
    }
  },
  "paris-gare-de-bercy": {
    fr: {
      intro: "La Gare de Bercy, dans le 12e arrondissement de Paris, accueille 2 millions de voyageurs par an. Petite gare dédiée aux Intercités de nuit, elle dessert notamment l'Italie et le sud-est de la France avec des trains auto-couchettes. Située à 500 mètres de la Gare de Lyon, à côté de Bercy Village et de l'AccorHotels Arena, elle est à 5-15 minutes du centre de Paris. TaxiNeo assure votre transfert au forfait fixe, même pour les départs et arrivées à des heures inhabituelles.",
      description: "Devant la Gare de Bercy, un petit espace taxi officiel permet une prise en charge rapide — un avantage que les VTC n'ont pas, étant interdits de stationnement direct. Gare à taille humaine, elle offre une expérience plus calme que les grandes gares parisiennes. Les trains de nuit arrivent souvent tôt le matin, vers 6h-7h : nos chauffeurs sont toujours au rendez-vous. La proximité de la Gare de Lyon permet aussi de basculer facilement en cas de changement de programme. Bercy Village et ses restaurants sont à deux pas pour patienter avant un départ.",
      metaDescription: "Taxi Gare de Bercy : trains de nuit vers l'Italie et l'Autriche, 2 millions de voyageurs/an. Prise en charge dès l'aube, forfait fixe garanti. Réservez.",
      heroSubtitle: "Gare dédiée aux Intercités de nuit vers l'Italie et le Sud-Est, Bercy accueille 2 millions de voyageurs dans un cadre à taille humaine. TaxiNeo assure votre transfert au forfait fixe dès les premières arrivées matinales, à 500 mètres de la Gare de Lyon.",
      whyUs: [
        { title: "Gare intime, prise en charge rapide", desc: "Petite gare sans la cohue des grandes stations parisiennes. Station taxi à 15 mètres de la sortie, départ immédiat vers votre destination sans file d'attente." },
        { title: "Trains de nuit Italie dès 6h30", desc: "Arrivées des Intercités de nuit depuis Rome, Venise et Milan entre 6h et 7h30. Nos chauffeurs sont positionnés à l'heure exacte de chaque train, même le dimanche." },
        { title: "Bercy Village et Arena à 2 min", desc: "Transfert express vers Bercy Village et l'AccorHotels Arena en 2 minutes. Idéal pour les spectateurs de concerts, salons et événements sportifs au Palais Omnisports." },
      ],
    },
    en: {
      intro: "Gare de Bercy, in Paris' 12th arrondissement, welcomes 2 million passengers per year. A small station dedicated to overnight Intercités services, it notably serves Italy and south-eastern France with car-sleeper trains. Located 500 metres from Gare de Lyon, next to Bercy Village and the AccorHotels Arena, it is 5-15 minutes from central Paris. TaxiNeo ensures your fixed-fare transfer, even for departures and arrivals at unusual hours.",
      description: "In front of Gare de Bercy, a small official taxi stand allows quick pickup — an advantage ride-hailing services lack, being prohibited from parking directly. A human-scale station, it offers a calmer experience than Paris' major stations. Overnight trains often arrive early in the morning, around 6-7am: our drivers are always on time. The proximity of Gare de Lyon also makes it easy to switch in case of plan changes. Bercy Village and its restaurants are steps away to wait before a departure.",
      metaDescription: "Taxi Gare de Bercy: overnight trains to Italy and Austria, 2M passengers/year. Early morning pickup available, guaranteed fixed fare. Book your transfer now.",
      heroSubtitle: "Dedicated to overnight Intercites to Italy and south-eastern France, Bercy welcomes 2 million passengers in an intimate setting. TaxiNeo handles your fixed-fare transfer from the earliest morning arrivals, just 500 metres from Gare de Lyon.",
      whyUs: [
        { title: "Intimate station, instant pickup", desc: "A small station free from the chaos of major Paris terminals. Taxi rank 15 metres from the exit, immediate departure to your destination with no queue." },
        { title: "Italy overnight trains from 6:30am", desc: "Overnight Intercites arrivals from Rome, Venice and Milan between 6am and 7:30am. Our drivers are positioned at the exact time of each train, even on Sundays." },
        { title: "Bercy Village & Arena in 2 min", desc: "Express transfer to Bercy Village and AccorHotels Arena in 2 minutes. Perfect for concertgoers, exhibition visitors and sports fans at the Palais Omnisports." },
      ],
    }
  },
  "lyon-part-dieu": {
    fr: {
      intro: "Lyon Part-Dieu est la plus grande gare de correspondance TGV de France, avec 34 millions de voyageurs par an. Située au cœur du quartier d'affaires du 3e arrondissement de Lyon, elle accueille les TGV vers Paris en 2h, Marseille en 1h40, Montpellier en 1h45, les TER et Intercités vers toute la région Auvergne-Rhône-Alpes. Le centre commercial Part-Dieu est directement attenant. TaxiNeo vous propose un chauffeur au forfait fixe qui vous attend à la sortie Villette ou Vivier-Merle.",
      description: "La station de taxis officiels de Lyon Part-Dieu se trouve boulevard Vivier-Merle, face à la sortie principale — un accès direct interdit aux VTC. Gare la plus fréquentée de province, elle connaît une forte affluence continue tout au long de la journée. Nos chauffeurs sont présents du premier TGV de 5h45 au dernier de 22h30. Réserver à l'avance est indispensable les vendredis après-midi et les jours de match à l'OL. Les travaux du pôle d'échanges multimodal modifient régulièrement les accès : nos chauffeurs connaissent les itinéraires actualisés.",
      metaDescription: "Taxi Lyon Part-Dieu : plus grande gare TGV de France avec 34 millions de voyageurs/an. Paris en 2h, Marseille en 1h40. Forfait fixe garanti, réservez.",
      heroSubtitle: "Plus grande gare de correspondance TGV de France avec 34 millions de voyageurs par an, Lyon Part-Dieu relie Paris en 2h et Marseille en 1h40. TaxiNeo vous attend boulevard Vivier-Merle au forfait fixe, avec suivi de train en temps réel, de 5h45 à 22h30.",
      whyUs: [
        { title: "Boulevard Vivier-Merle sortie directe", desc: "Taxi officiel boulevard Vivier-Merle, face à la sortie principale. Accès sans détour malgré les travaux du pôle d'échanges multimodal, itinéraires constamment mis à jour." },
        { title: "Hub TGV province, toutes directions", desc: "Nos chauffeurs maîtrisent les correspondances TGV Paris-Marseille, Lyon-Montpellier et les Intercités vers Grenoble et Saint-Étienne. Adaptation aux retards de connexion." },
        { title: "Transfert aéroport Saint-Exupéry 25 min", desc: "Lyon Saint-Exupéry est à 25 minutes par l'A43. Forfait fixe incluant l'aide bagages, idéal pour les voyageurs en correspondance TGV-avion depuis Part-Dieu." },
      ],
    },
    en: {
      intro: "Lyon Part-Dieu is the largest TGV interchange station in France, with 34 million passengers per year. Located in the heart of the 3rd arrondissement business district of Lyon, it serves TGV trains to Paris in 2h, Marseille in 1h40, Montpellier in 1h45, as well as TER and Intercités across the Auvergne-Rhone-Alpes region. The Part-Dieu shopping centre is directly adjacent. TaxiNeo offers a driver at a fixed fare waiting for you at the Villette or Vivier-Merle exit.",
      description: "The official taxi rank at Lyon Part-Dieu is on boulevard Vivier-Merle, facing the main exit — direct access that is off-limits to ride-hailing services. The busiest station outside Paris, it experiences continuous heavy traffic throughout the day. Our drivers are present from the first TGV at 5:45am to the last at 10:30pm. Booking ahead is essential on Friday afternoons and on OL match days. Ongoing transport hub construction works regularly change access routes: our drivers know the updated itineraries.",
      metaDescription: "Taxi Lyon Part-Dieu: France's largest TGV hub with 34M passengers/year. Paris in 2h, Marseille in 1h40. Guaranteed fixed fare transfer. Book online 24/7.",
      heroSubtitle: "France's largest TGV interchange with 34 million passengers yearly, Lyon Part-Dieu connects Paris in 2h and Marseille in 1h40. TaxiNeo waits on boulevard Vivier-Merle at a fixed fare, with real-time train tracking, from 5:45am to 10:30pm.",
      whyUs: [
        { title: "Boulevard Vivier-Merle direct exit", desc: "Official taxi on boulevard Vivier-Merle facing the main exit. Seamless access despite the ongoing multimodal hub construction, routes constantly updated." },
        { title: "Provincial TGV hub, all directions", desc: "Our drivers master TGV connections Paris-Marseille, Lyon-Montpellier and Intercites to Grenoble and Saint-Etienne. We adapt to connection delays." },
        { title: "Saint-Exupery Airport in 25 min", desc: "Lyon Saint-Exupery is 25 minutes via the A43. Fixed fare including luggage assistance, ideal for TGV-to-flight connections from Part-Dieu." },
      ],
    }
  },
  "lyon-perrache": {
    fr: {
      intro: "La Gare de Lyon-Perrache, dans le 2e arrondissement de Lyon, accueille 10 millions de voyageurs par an. Gare historique de Lyon, elle est desservie par certains TGV ainsi que par les TER vers Saint-Étienne, Grenoble et la vallée du Rhône. Située en plein centre-ville, à proximité immédiate du quartier Confluence et du Vieux-Lyon, elle offre un cadre plus calme que Part-Dieu. TaxiNeo vous garantit un forfait fixe avec un chauffeur disponible à la sortie de la gare.",
      description: "La zone de taxis officiels de la Gare de Perrache est sur le cours de Verdun, en accès direct depuis la sortie — un emplacement réservé aux taxis que les VTC ne peuvent pas utiliser. Plus intimiste que Part-Dieu, Perrache est appréciée des voyageurs régionaux. Nos chauffeurs sont disponibles du premier TER de 5h30 au dernier TGV du soir. Le quartier Confluence, avec ses musées et restaurants, est à 3 minutes en taxi. Réserver à l'avance est recommandé lors des événements au Palais de Confluence ou à la Halle Tony Garnier.",
      metaDescription: "Taxi Lyon-Perrache : gare historique au cœur de Lyon, 10 millions de voyageurs/an. Quartier Confluence à 3 min. Forfait fixe garanti, chauffeur dès 5h30.",
      heroSubtitle: "Gare historique de Lyon avec 10 millions de voyageurs par an, Perrache dessert la vallée du Rhône et le quartier Confluence. Votre chauffeur TaxiNeo vous attend cours de Verdun au forfait fixe, avec un accueil personnalisé dès le premier TER de 5h30.",
      whyUs: [
        { title: "Cours de Verdun, accès calme", desc: "Station taxi cours de Verdun, en accès direct depuis la sortie. Ambiance plus calme que Part-Dieu, prise en charge sans stress pour les voyageurs régionaux." },
        { title: "Quartier Confluence en 3 min", desc: "Le musée des Confluences et le centre commercial Confluence sont à 3 minutes en taxi. Transfert idéal pour les visiteurs et les professionnels du quartier d'affaires." },
        { title: "Navette Part-Dieu en 12 min", desc: "Correspondance rapide vers Lyon Part-Dieu en 12 minutes par les quais du Rhône. Nos chauffeurs assurent vos connexions TGV entre les deux gares lyonnaises." },
      ],
    },
    en: {
      intro: "Lyon-Perrache station, in Lyon's 2nd arrondissement, welcomes 10 million passengers per year. Lyon's historic station, it is served by select TGV trains as well as TER services to Saint-Etienne, Grenoble and the Rhone valley. Set in the city centre, close to the Confluence district and Vieux-Lyon, it offers a calmer setting than Part-Dieu. TaxiNeo guarantees a fixed fare with a driver available at the station exit.",
      description: "The official taxi zone at Gare de Perrache is on the cours de Verdun, with direct access from the exit — a spot reserved for taxis that ride-hailing services cannot use. More intimate than Part-Dieu, Perrache is popular with regional travellers. Our drivers are available from the first TER at 5:30am to the last evening TGV. The Confluence district, with its museums and restaurants, is just 3 minutes by taxi. Booking ahead is recommended during events at the Confluence centre or Halle Tony Garnier.",
      metaDescription: "Taxi Lyon-Perrache: historic station in the heart of Lyon, 10M passengers/year. Confluence district just 3 min away. Guaranteed fixed fare, driver from 5:30am.",
      heroSubtitle: "Lyon's historic station with 10 million passengers yearly, Perrache serves the Rhone valley and the Confluence district. Your TaxiNeo driver waits on cours de Verdun at a fixed fare, with personalised welcome from the first TER at 5:30am.",
      whyUs: [
        { title: "Cours de Verdun, calm access", desc: "Taxi rank on cours de Verdun with direct access from the exit. Quieter than Part-Dieu, stress-free pickup for regional travellers." },
        { title: "Confluence district in 3 min", desc: "The Confluences Museum and Confluence shopping centre are 3 minutes by taxi. Perfect transfer for visitors and professionals in the business district." },
        { title: "Part-Dieu shuttle in 12 min", desc: "Quick connection to Lyon Part-Dieu in 12 minutes via the Rhone embankments. Our drivers ensure your TGV connections between the two Lyon stations." },
      ],
    }
  },
  "marseille-saint-charles": {
    fr: {
      intro: "La Gare Marseille Saint-Charles, perchée sur les hauteurs du centre de Marseille, accueille 14 millions de voyageurs par an. Desservie par les TGV vers Paris en 3h15, Lyon en 1h40 et Nice en 2h30, ainsi que par les TER et Intercités, elle est reconnaissable à son escalier monumental offrant une vue panoramique sur la ville. À 5-10 minutes du Vieux-Port, TaxiNeo vous attend au forfait fixe à la sortie de la gare, sur le boulevard d'Athènes.",
      description: "Devant la Gare Saint-Charles, la station de taxis officiels est au pied de l'escalier monumental, côté boulevard d'Athènes — une zone interdite au stationnement des VTC. Le quartier autour de la gare est animé et parfois désorientant pour les voyageurs : nos chauffeurs vous accueillent avec un panneau à votre nom. Disponibles du premier TGV matinal au dernier Intercités de nuit, nos taxis sont essentiels pour les correspondances avec les ferries vers la Corse et le Maghreb. Réservez à l'avance en été, haute saison sur la Côte d'Azur.",
      metaDescription: "Taxi Marseille Saint-Charles : 14 millions de voyageurs/an, TGV Paris en 3h15. Accueil nominatif, transfert ferry Corse et Calanques. Forfait fixe garanti.",
      heroSubtitle: "Perchée au-dessus de Marseille avec 14 millions de voyageurs par an, Saint-Charles dessert Paris en 3h15 et la Côte d'Azur. TaxiNeo vous accueille avec panneau nominatif au pied de l'escalier monumental, forfait garanti et correspondances ferry vers la Corse.",
      whyUs: [
        { title: "Escalier monumental, accueil nominatif", desc: "Prise en charge au pied de l'escalier monumental, boulevard d'Athènes. Accueil avec panneau nominatif pour les voyageurs internationaux dans un quartier animé." },
        { title: "Correspondance ferry Corse 15 min", desc: "Transfert vers le port de la Joliette en 15 minutes pour les ferries Corsica Linea et La Méridionale vers Bastia, Ajaccio et Porto-Vecchio. Horaires synchronisés." },
        { title: "Vieux-Port et Calanques accessibles", desc: "Le Vieux-Port est à 5 minutes, les Calanques de Cassis à 35 minutes. Nos chauffeurs connaissent les accès restreints du centre-ville et les parkings relais." },
      ],
    },
    en: {
      intro: "Marseille Saint-Charles station, perched on the heights of central Marseille, welcomes 14 million passengers per year. Served by TGV to Paris in 3h15, Lyon in 1h40 and Nice in 2h30, plus TER and Intercités, it is recognisable by its monumental staircase offering a panoramic view of the city. Just 5-10 minutes from the Vieux-Port, TaxiNeo waits for you at a fixed fare at the station exit on boulevard d'Athenes.",
      description: "In front of Gare Saint-Charles, the official taxi rank is at the foot of the monumental staircase on the boulevard d'Athenes side — a zone where ride-hailing services are prohibited from stopping. The area around the station is lively and sometimes disorienting for travellers: our drivers welcome you with a name sign. Available from the first morning TGV to the last overnight Intercites, our taxis are essential for connections to ferries to Corsica and North Africa. Book ahead in summer, peak season on the Cote d'Azur.",
      metaDescription: "Taxi Marseille Saint-Charles: 14M passengers/year, TGV to Paris in 3h15. Name-board welcome, Corsica ferry and Calanques transfers. Fixed fare, book online.",
      heroSubtitle: "Perched above Marseille with 14 million passengers yearly, Saint-Charles serves Paris in 3h15 and the Cote d'Azur. TaxiNeo greets you with a name board at the monumental staircase, guaranteed fare and ferry connections to Corsica.",
      whyUs: [
        { title: "Monumental staircase, name board", desc: "Pickup at the foot of the monumental staircase on boulevard d'Athenes. Name-board welcome for international travellers in this busy neighbourhood." },
        { title: "Corsica ferry connection 15 min", desc: "Transfer to the Joliette port in 15 minutes for Corsica Linea and La Meridionale ferries to Bastia, Ajaccio and Porto-Vecchio. Schedules synchronised." },
        { title: "Vieux-Port & Calanques access", desc: "The Vieux-Port is 5 minutes away, the Calanques de Cassis 35 minutes. Our drivers know the restricted city-centre access zones and park-and-ride options." },
      ],
    }
  },
  "lille-flandres": {
    fr: {
      intro: "La Gare de Lille Flandres, en plein centre-ville de Lille, accueille 22 millions de voyageurs par an. Gare principale de la métropole lilloise pour les TGV vers Paris en 1 heure et les TER vers le Nord-Pas-de-Calais, elle est située à 2 minutes à pied de la Grand Place. À seulement 300 mètres de Lille Europe, elle permet des correspondances faciles avec l'Eurostar et le Thalys. TaxiNeo vous garantit un chauffeur au forfait fixe à la sortie, place des Buisses.",
      description: "La station de taxis officiels de Lille Flandres se trouve place des Buisses, juste devant l'entrée — un accès exclusif interdit aux VTC. Gare de commuters par excellence en semaine, elle connaît aussi des pics le week-end avec les visiteurs du Vieux-Lille. Nos chauffeurs couvrent tous les horaires, du premier TGV de 6h au dernier TER de 23h. Réservez à l'avance pendant la Braderie de Lille en septembre, quand la circulation est fortement perturbée. Le transfert vers Lille Europe pour l'Eurostar prend seulement 3-5 minutes en taxi.",
      metaDescription: "Taxi Lille Flandres : 22 millions de voyageurs/an, TGV vers Paris en 1h. Correspondance Lille Europe en 3 min à pied. Forfait fixe garanti, réservez 24h/24.",
      heroSubtitle: "Gare principale de Lille avec 22 millions de voyageurs par an, Flandres relie Paris en 1h par TGV et Lille Europe en 3 minutes. TaxiNeo vous attend place des Buisses au forfait fixe, avec correspondance Eurostar et prise en charge du premier au dernier train.",
      whyUs: [
        { title: "Place des Buisses, Grand Place à 2 min", desc: "Station taxi place des Buisses, à 2 minutes à pied de la Grand Place et du Vieux-Lille. Prise en charge immédiate sans traverser la station bondée en heure de pointe." },
        { title: "Navette Lille Europe en 3 min", desc: "Correspondance express vers Lille Europe distante de 300 mètres pour l'Eurostar (Londres 1h20) et le Thalys (Bruxelles 35 min). Trajet garanti en 3 minutes." },
        { title: "Braderie de Lille en septembre", desc: "Pendant la Braderie de Lille, la circulation est coupée dans le centre. Nos chauffeurs connaissent les itinéraires de contournement et les accès temporaires au quartier." },
      ],
    },
    en: {
      intro: "Lille Flandres station, right in Lille's city centre, welcomes 22 million passengers per year. The main station of the Lille metropolitan area for TGV to Paris in 1 hour and TER to Nord-Pas-de-Calais, it is a 2-minute walk from the Grand Place. Just 300 metres from Lille Europe, it allows easy connections to Eurostar and Thalys. TaxiNeo guarantees a driver at a fixed fare at the exit on place des Buisses.",
      description: "The official taxi rank at Lille Flandres is on place des Buisses, right in front of the entrance — exclusive access off-limits to ride-hailing services. A commuter station par excellence on weekdays, it also sees peaks at weekends with visitors to Vieux-Lille. Our drivers cover all schedules from the first TGV at 6am to the last TER at 11pm. Book ahead during the Braderie de Lille in September when traffic is heavily disrupted. The transfer to Lille Europe for Eurostar takes only 3-5 minutes by taxi.",
      metaDescription: "Taxi Lille Flandres: 22M passengers/year, TGV to Paris in just 1 hour. Lille Europe Eurostar link 3 min walk away. Guaranteed fixed fare. Book online 24/7.",
      heroSubtitle: "Lille's main station with 22 million passengers yearly, Flandres connects Paris in 1h by TGV and Lille Europe in 3 minutes. TaxiNeo awaits on place des Buisses at a fixed fare, with Eurostar connections and coverage from first to last train.",
      whyUs: [
        { title: "Place des Buisses, Grand Place 2 min", desc: "Taxi rank on place des Buisses, 2 minutes on foot from the Grand Place and Vieux-Lille. Immediate pickup without crossing the packed station at rush hour." },
        { title: "Lille Europe shuttle in 3 min", desc: "Express connection to Lille Europe just 300 metres away for Eurostar (London 1h20) and Thalys (Brussels 35 min). Transfer guaranteed in 3 minutes." },
        { title: "Braderie de Lille in September", desc: "During the Braderie de Lille, the city centre is closed to traffic. Our drivers know the bypass routes and temporary access points to the district." },
      ],
    }
  },
  "lille-europe": {
    fr: {
      intro: "La Gare de Lille Europe, construite en 1994 au cœur du quartier Euralille, accueille 7 millions de voyageurs par an. Gare internationale dédiée à l'Eurostar vers Londres en 1h20 et au Thalys vers Bruxelles en 35 minutes et Amsterdam en 2h30, elle dessert aussi des TGV vers la province. Station moderne avec une architecture de verre et d'acier, elle est à 3-8 minutes du centre de Lille. TaxiNeo vous attend au forfait fixe à la sortie de la gare, avec des chauffeurs parlant anglais et néerlandais.",
      description: "Devant la Gare de Lille Europe, la zone taxi officielle est sur le parvis, côté centre commercial Euralille — un accès direct interdit aux VTC. Les horaires d'arrivée sont concentrés sur les créneaux Eurostar et Thalys, créant des pics d'affluence prévisibles. Nos chauffeurs anticipent ces créneaux et sont toujours positionnés à temps. Réservez impérativement à l'avance pour les arrivées Eurostar du vendredi soir et les départs du dimanche. Le quartier Euralille offre commerces et restauration si vous souhaitez patienter avant votre transfert.",
      metaDescription: "Taxi Lille Europe : gare Eurostar et Thalys, 7 millions de voyageurs/an. Londres en 1h20, Bruxelles en 35 min. Chauffeurs multilingues, forfait fixe garanti.",
      heroSubtitle: "Gare internationale dédiée à l'Eurostar vers Londres et au Thalys vers Bruxelles, Lille Europe accueille 7 millions de voyageurs. TaxiNeo propose des chauffeurs parlant anglais et néerlandais, au forfait fixe, positionnés à chaque arrivée internationale.",
      whyUs: [
        { title: "Chauffeurs anglais et néerlandais", desc: "Nos chauffeurs parlent anglais et néerlandais pour accueillir les voyageurs Eurostar et Thalys. Communication fluide dès votre sortie du contrôle des passeports." },
        { title: "Parvis Euralille, arrivées synchronisées", desc: "Station taxi sur le parvis côté Euralille. Nos chauffeurs se positionnent 10 minutes avant chaque arrivée Eurostar et Thalys, créneaux précis et prévisibles." },
        { title: "Transfert vers la Belgique au forfait", desc: "Forfait fixe vers Courtrai (30 min), Tournai (25 min) et Bruxelles (1h15). Trajets transfrontaliers sans supplément, chauffeurs habitués aux douanes." },
      ],
    },
    en: {
      intro: "Lille Europe station, built in 1994 in the heart of the Euralille district, welcomes 7 million passengers per year. An international station dedicated to Eurostar to London in 1h20 and Thalys to Brussels in 35 minutes and Amsterdam in 2h30, it also serves TGV to other French cities. A modern station with glass and steel architecture, it is 3-8 minutes from central Lille. TaxiNeo awaits you at a fixed fare at the station exit, with English and Dutch-speaking drivers.",
      description: "In front of Lille Europe station, the official taxi zone is on the forecourt on the Euralille shopping centre side — direct access off-limits to ride-hailing services. Arrival times are concentrated around Eurostar and Thalys schedules, creating predictable surges. Our drivers anticipate these windows and are always positioned on time. Book well ahead for Friday evening Eurostar arrivals and Sunday departures. The Euralille district offers shops and dining if you wish to wait before your transfer.",
      metaDescription: "Taxi Lille Europe: Eurostar and Thalys hub with 7M passengers/year. London in 1h20, Brussels in 35 min. Multilingual drivers, guaranteed fixed fare. Book now.",
      heroSubtitle: "International hub for Eurostar to London and Thalys to Brussels, Lille Europe welcomes 7 million passengers. TaxiNeo offers English and Dutch-speaking drivers at a fixed fare, positioned for every international arrival.",
      whyUs: [
        { title: "English & Dutch-speaking drivers", desc: "Our drivers speak English and Dutch to welcome Eurostar and Thalys passengers. Smooth communication from the moment you clear passport control." },
        { title: "Euralille forecourt, synced arrivals", desc: "Taxi rank on the Euralille-side forecourt. Our drivers position themselves 10 minutes before each Eurostar and Thalys arrival, precise and predictable slots." },
        { title: "Belgium transfers at fixed fare", desc: "Fixed fare to Kortrijk (30 min), Tournai (25 min) and Brussels (1h15). Cross-border trips with no surcharge, drivers experienced with customs." },
      ],
    }
  },
  "bordeaux-saint-jean": {
    fr: {
      intro: "La Gare de Bordeaux Saint-Jean, au cœur de la capitale girondine, accueille 15 millions de voyageurs par an. Grâce à la LGV SEA, le TGV depuis Paris ne prend que 2h04. TGV, TER et Intercités desservent aussi Toulouse, Bayonne, Arcachon et toute l'Aquitaine. Rénovée et agrandie en 2018, la gare est à 5-10 minutes des quais de Garonne et de la Place de la Bourse. TaxiNeo vous propose un transfert forfaitaire avec un chauffeur vous attendant côté parvis sud.",
      description: "La station de taxis officiels de Bordeaux Saint-Jean est située sur le parvis sud, face à la Belcier — une position de prise en charge réservée aux taxis que les VTC ne peuvent pas occuper. Les vendredis soirs sont particulièrement chargés avec les TGV Paris-Bordeaux : réserver à l'avance est essentiel. Nos chauffeurs sont également mobilisés pour les premiers trains de 6h et les dernières arrivées. Le quartier Belcier, en pleine transformation urbaine, peut dérouter les nouveaux visiteurs — nos chauffeurs connaissent parfaitement les accès actualisés.",
      metaDescription: "Taxi Bordeaux Saint-Jean : 15 millions de voyageurs/an, TGV Paris en 2h04. Prise en charge parvis sud, forfait fixe garanti et chauffeur dès 6h. Réservez.",
      heroSubtitle: "Reliée à Paris en 2h04 par la LGV SEA, Bordeaux Saint-Jean accueille 15 millions de voyageurs par an. TaxiNeo vous attend parvis sud au forfait fixe avec aide bagages, pour un transfert rapide vers les quais de Garonne ou l'aéroport de Mérignac.",
      whyUs: [
        { title: "Parvis sud quartier Belcier rénové", desc: "Station taxi sur le parvis sud face au quartier Belcier en pleine transformation. Nos chauffeurs connaissent les accès actualisés malgré les chantiers urbains permanents." },
        { title: "Aéroport Mérignac en 25 min", desc: "Transfert direct vers l'aéroport de Bordeaux-Mérignac en 25 minutes par la rocade. Forfait fixe incluant aide bagages, adapté aux vols internationaux." },
        { title: "Expert vignobles Saint-Émilion", desc: "Circuits œnotouristiques vers Saint-Émilion (35 min), Pauillac et le Médoc. Nos chauffeurs proposent des forfaits demi-journée pour les dégustations dans le vignoble bordelais." },
      ],
    },
    en: {
      intro: "Bordeaux Saint-Jean station, in the heart of the Gironde capital, welcomes 15 million passengers per year. Thanks to the high-speed SEA line, the TGV from Paris takes just 2h04. TGV, TER and Intercites serve Toulouse, Bayonne, Arcachon and all of Aquitaine. Renovated and expanded in 2018, the station is 5-10 minutes from the Garonne quays and Place de la Bourse. TaxiNeo offers a flat-rate transfer with a driver waiting for you on the south forecourt.",
      description: "The official taxi rank at Bordeaux Saint-Jean is on the south forecourt facing Belcier — a pickup position reserved for taxis that ride-hailing services cannot occupy. Friday evenings are particularly busy with Paris-Bordeaux TGV arrivals: booking ahead is essential. Our drivers are also deployed for the first trains at 6am and the last arrivals. The Belcier district, undergoing major urban transformation, can be confusing for new visitors — our drivers know the updated access routes perfectly.",
      metaDescription: "Taxi Bordeaux Saint-Jean: 15M passengers/year, TGV from Paris in just 2h04. South forecourt pickup, guaranteed fixed fare, driver from 6am. Book online now.",
      heroSubtitle: "Connected to Paris in 2h04 via the high-speed SEA line, Bordeaux Saint-Jean welcomes 15 million passengers yearly. TaxiNeo meets you on the south forecourt at a fixed fare with luggage help, for a swift transfer to the Garonne quays or Merignac Airport.",
      whyUs: [
        { title: "South forecourt, renovated Belcier", desc: "Taxi rank on the south forecourt facing the revamped Belcier district. Our drivers know the updated access routes despite the permanent urban construction." },
        { title: "Merignac Airport in 25 min", desc: "Direct transfer to Bordeaux-Merignac Airport in 25 minutes via the ring road. Fixed fare including luggage help, suited to international flights." },
        { title: "Saint-Emilion vineyard expert", desc: "Wine-tourism circuits to Saint-Emilion (35 min), Pauillac and the Medoc. Our drivers offer half-day packages for tastings across the Bordeaux wine region." },
      ],
    }
  },
  "toulouse-matabiau": {
    fr: {
      intro: "La Gare de Toulouse-Matabiau, à 1 km de la place du Capitole, accueille 12 millions de voyageurs par an. Elle est desservie par les TGV vers Paris en 4h20 et Bordeaux en 2h, les TER vers Carcassonne, Montpellier et Perpignan, ainsi que les Intercités vers le Sud-Ouest. Située sur le canal du Midi, elle est à 5-10 minutes du centre historique de la ville rose. TaxiNeo vous offre un transfert au forfait garanti avec un chauffeur à votre sortie.",
      description: "La station de taxis officiels de Toulouse-Matabiau se trouve en sortie de gare, côté boulevard Pierre-Sémard — un stationnement exclusivement réservé aux taxis, impossible pour les VTC. La gare est un hub régional majeur pour les correspondances vers le site Airbus de Blagnac et la Cité de l'Espace. Nos chauffeurs assurent les premiers et derniers trains, et sont particulièrement sollicités les jours de salon aéronautique. Réservez en amont pour les transferts vers l'aéroport Blagnac, surtout en semaine matin.",
      metaDescription: "Taxi Toulouse-Matabiau : 12 millions de voyageurs/an, TGV Paris en 4h20. Transfert direct vers le site Airbus Blagnac, forfait garanti. Réservez en ligne.",
      heroSubtitle: "Hub du Sud-Ouest avec 12 millions de voyageurs par an, Matabiau dessert Paris, Bordeaux et toute l'Occitanie. TaxiNeo assure votre transfert vers Airbus Blagnac ou la Cité de l'Espace au forfait fixe, avec chauffeur boulevard Pierre-Sémard.",
      whyUs: [
        { title: "Boulevard Pierre-Sémard, canal du Midi", desc: "Station taxi boulevard Pierre-Sémard, le long du canal du Midi. Prise en charge à 50 mètres de la sortie principale, sans traverser le parvis encombré." },
        { title: "Transfert Airbus Blagnac 20 min", desc: "Nos chauffeurs connaissent les accès sécurisés du site Airbus à Blagnac. Transfert en 20 minutes par la rocade, indispensable pour les salons aéronautiques." },
        { title: "Cité de l'Espace et Capitole", desc: "La Cité de l'Espace est à 15 minutes, la place du Capitole à 5 minutes. Nos chauffeurs proposent aussi les transferts vers Carcassonne et ses remparts en 50 minutes." },
      ],
    },
    en: {
      intro: "Toulouse-Matabiau station, 1 km from the Place du Capitole, welcomes 12 million passengers per year. It is served by TGV to Paris in 4h20 and Bordeaux in 2h, TER to Carcassonne, Montpellier and Perpignan, and Intercites to south-western France. Located on the Canal du Midi, it is 5-10 minutes from the historic centre of the Pink City. TaxiNeo offers a guaranteed flat-rate transfer with a driver at your exit.",
      description: "The official taxi rank at Toulouse-Matabiau is at the station exit on the boulevard Pierre-Semard side — parking exclusively reserved for taxis, unavailable to ride-hailing services. The station is a major regional hub for connections to the Airbus site in Blagnac and the Cite de l'Espace. Our drivers cover the first and last trains and are especially in demand during aerospace trade fairs. Book ahead for airport transfers to Blagnac, particularly on weekday mornings.",
      metaDescription: "Taxi Toulouse-Matabiau: 12M passengers/year, TGV to Paris in 4h20. Direct transfer to Airbus Blagnac site, guaranteed fixed fare. Book your ride online now.",
      heroSubtitle: "South-western hub with 12 million passengers yearly, Matabiau serves Paris, Bordeaux and all of Occitanie. TaxiNeo provides your transfer to Airbus Blagnac or the Cite de l'Espace at a fixed fare, with a driver on boulevard Pierre-Semard.",
      whyUs: [
        { title: "Boulevard Pierre-Semard, Canal du Midi", desc: "Taxi rank on boulevard Pierre-Semard along the Canal du Midi. Pickup 50 metres from the main exit, no need to cross the congested forecourt." },
        { title: "Airbus Blagnac transfer 20 min", desc: "Our drivers know the secure access points to the Airbus site at Blagnac. Transfer in 20 minutes via the ring road, essential during aerospace trade fairs." },
        { title: "Cite de l'Espace & Capitole", desc: "The Cite de l'Espace is 15 minutes away, Place du Capitole 5 minutes. Our drivers also offer transfers to Carcassonne and its ramparts in 50 minutes." },
      ],
    }
  },
  "nice-ville": {
    fr: {
      intro: "La Gare de Nice-Ville, en plein cœur de Nice, accueille 8 millions de voyageurs par an. Desservie par les TGV vers Paris en 5h30 et Marseille en 2h30, ainsi que par les TER longeant la Côte d'Azur vers Monaco, Cannes et Antibes, elle est à seulement 3-8 minutes de la Promenade des Anglais et du Vieux-Nice. TaxiNeo vous offre un chauffeur au forfait fixe qui vous attend à la sortie avenue Thiers, prêt à vous conduire vers votre destination sur la Riviera.",
      description: "Devant la Gare de Nice-Ville, la zone taxi officielle est avenue Thiers, un accès direct réservé aux taxis que les VTC ne peuvent pas utiliser. En été, la gare reçoit un flux constant de touristes : réserver à l'avance est indispensable entre juin et septembre. Nos chauffeurs connaissent parfaitement le littoral et assurent des transferts vers Monaco, Cannes, l'aéroport Nice Côte d'Azur et les villages de l'arrière-pays. Disponibles pour le premier TER du matin comme pour les arrivées TGV tardives, ils s'adaptent aussi aux événements comme le Carnaval de Nice.",
      metaDescription: "Taxi Nice-Ville : 8 millions de voyageurs/an, Côte d'Azur et Monaco. Transfert aéroport Nice, forfait fixe avenue Thiers. Réservez votre taxi Riviera 24h/24.",
      heroSubtitle: "Au cœur de la Riviera avec 8 millions de voyageurs par an, Nice-Ville dessert Monaco, Cannes et la Côte d'Azur. TaxiNeo vous attend avenue Thiers au forfait fixe pour un transfert vers la Promenade des Anglais, l'aéroport ou l'arrière-pays niçois.",
      whyUs: [
        { title: "Avenue Thiers, Promenade en 5 min", desc: "Station taxi avenue Thiers à la sortie directe. La Promenade des Anglais et le Vieux-Nice sont à 5 minutes, sans détour par les ruelles piétonnes encombrées." },
        { title: "Monaco et Menton par la Corniche", desc: "Transfert vers Monaco en 25 minutes par la Moyenne Corniche, Menton en 35 minutes. Nos chauffeurs évitent l'A8 saturée et empruntent les corniches panoramiques." },
        { title: "Aéroport Nice Côte d'Azur 12 min", desc: "L'aéroport NCE est à 12 minutes par la Promenade des Anglais. Forfait fixe vers les terminaux 1 et 2, idéal pour les correspondances train-avion sur la Riviera." },
      ],
    },
    en: {
      intro: "Nice-Ville station, in the heart of Nice, welcomes 8 million passengers per year. Served by TGV to Paris in 5h30 and Marseille in 2h30, plus TER along the Cote d'Azur to Monaco, Cannes and Antibes, it is just 3-8 minutes from the Promenade des Anglais and Vieux-Nice. TaxiNeo provides a driver at a fixed fare waiting at the avenue Thiers exit, ready to take you to your Riviera destination.",
      description: "In front of Nice-Ville station, the official taxi zone is on avenue Thiers — direct access reserved for taxis that ride-hailing services cannot use. In summer, the station receives a constant flow of tourists: booking ahead is essential between June and September. Our drivers know the coastline perfectly and provide transfers to Monaco, Cannes, Nice Cote d'Azur Airport and the hinterland villages. Available for the first morning TER as well as late TGV arrivals, they also adapt to events like the Nice Carnival.",
      metaDescription: "Taxi Nice-Ville: 8M passengers/year, gateway to the Cote d'Azur and Monaco. Airport transfer, fixed fare on avenue Thiers. Book your Riviera taxi online.",
      heroSubtitle: "In the heart of the Riviera with 8 million passengers yearly, Nice-Ville serves Monaco, Cannes and the Cote d'Azur. TaxiNeo waits on avenue Thiers at a fixed fare for transfers to the Promenade des Anglais, the airport or the hinterland villages.",
      whyUs: [
        { title: "Avenue Thiers, Promenade in 5 min", desc: "Taxi rank on avenue Thiers at the direct exit. The Promenade des Anglais and Vieux-Nice are 5 minutes away, no detour through crowded pedestrian lanes." },
        { title: "Monaco & Menton via Corniche roads", desc: "Transfer to Monaco in 25 minutes via the Moyenne Corniche, Menton in 35 minutes. Our drivers avoid the congested A8 and take the scenic corniche routes." },
        { title: "Nice Cote d'Azur Airport 12 min", desc: "NCE Airport is 12 minutes via the Promenade des Anglais. Fixed fare to Terminal 1 and 2, ideal for train-to-flight connections on the Riviera." },
      ],
    }
  },
  "nantes": {
    fr: {
      intro: "La Gare de Nantes, en plein centre-ville à quelques pas du Château des Ducs de Bretagne, accueille 12 millions de voyageurs par an. Desservie par le TGV vers Paris en 2h15, les TER et Intercités vers Rennes, La Baule, Saint-Nazaire et toute la Loire-Atlantique, elle est la porte d'entrée de l'Ouest. À 3-8 minutes des principaux sites, TaxiNeo vous garantit un forfait fixe et un chauffeur qui vous attend à la sortie sud de la gare.",
      description: "Devant la gare de Nantes, la zone de taxis officiels est sur le parvis sud, directement à la sortie — un emplacement réservé aux taxis que les VTC ne peuvent pas occuper. Hub régional majeur, la gare connaît une forte affluence le vendredi soir avec les retours de Paris. Nos chauffeurs assurent les transferts vers l'aéroport Nantes-Atlantique en 15-25 minutes et vers les stations balnéaires comme La Baule ou Pornic. Réserver à l'avance est conseillé durant les événements culturels comme le Voyage à Nantes en été.",
      metaDescription: "Taxi Gare de Nantes : 12 millions de voyageurs/an, TGV Paris en 2h15. Transfert aéroport en 15 min, excursions La Baule. Forfait fixe garanti. Réservez.",
      heroSubtitle: "Porte de l'Ouest avec 12 millions de voyageurs par an, Nantes relie Paris en 2h15 par TGV. TaxiNeo vous attend parvis sud au forfait fixe, pour un transfert vers l'aéroport Nantes-Atlantique en 15 minutes ou les plages de La Baule.",
      whyUs: [
        { title: "Parvis sud, Château des Ducs à 3 min", desc: "Station taxi parvis sud, à 3 minutes du Château des Ducs de Bretagne et de l'île de Nantes. Accès direct sans traverser les voies du tramway ligne 1." },
        { title: "Aéroport Nantes-Atlantique 15 min", desc: "Transfert rapide vers l'aéroport Nantes-Atlantique en 15 minutes par le périphérique sud. Forfait fixe, véhicules spacieux adaptés aux grands bagages." },
        { title: "La Baule et côte atlantique", desc: "Transfert vers La Baule en 50 minutes, Pornic en 40 minutes. Nos chauffeurs proposent des forfaits plage le week-end, idéal pour les voyageurs du TGV Paris-Nantes." },
      ],
    },
    en: {
      intro: "Nantes station, right in the city centre steps from the Chateau des Ducs de Bretagne, welcomes 12 million passengers per year. Served by TGV to Paris in 2h15, TER and Intercites to Rennes, La Baule, Saint-Nazaire and all of Loire-Atlantique, it is the gateway to western France. Just 3-8 minutes from the main sights, TaxiNeo guarantees a fixed fare and a driver waiting at the south exit of the station.",
      description: "In front of Nantes station, the official taxi zone is on the south forecourt, directly at the exit — a spot reserved for taxis that ride-hailing services cannot use. A major regional hub, the station sees heavy traffic on Friday evenings with Paris commuters returning. Our drivers provide transfers to Nantes-Atlantique Airport in 15-25 minutes and to seaside resorts like La Baule and Pornic. Booking ahead is advised during cultural events such as Le Voyage a Nantes in summer.",
      metaDescription: "Taxi Nantes station: 12M passengers/year, TGV to Paris in 2h15. Airport transfer in 15 min, La Baule day trips. Guaranteed fixed fare. Book your ride online.",
      heroSubtitle: "Gateway to western France with 12 million passengers yearly, Nantes connects to Paris in 2h15 by TGV. TaxiNeo awaits on the south forecourt at a fixed fare, for transfers to Nantes-Atlantique Airport in 15 minutes or La Baule beaches.",
      whyUs: [
        { title: "South forecourt, Chateau 3 min away", desc: "Taxi rank on the south forecourt, 3 minutes from the Chateau des Ducs de Bretagne and the Ile de Nantes. Direct access without crossing tramway line 1 tracks." },
        { title: "Nantes-Atlantique Airport 15 min", desc: "Fast transfer to Nantes-Atlantique Airport in 15 minutes via the southern ring road. Fixed fare, spacious vehicles suited to large luggage." },
        { title: "La Baule & Atlantic coast", desc: "Transfer to La Baule in 50 minutes, Pornic in 40 minutes. Our drivers offer weekend beach packages, ideal for Paris-Nantes TGV travellers." },
      ],
    }
  },
  "strasbourg": {
    fr: {
      intro: "La Gare de Strasbourg, avec sa spectaculaire verrière de verre inaugurée en 2007, accueille 15 millions de voyageurs par an. Desservie par le TGV vers Paris en 1h46 via la LGV Est, l'ICE vers Francfort et Stuttgart, et les TER vers l'Alsace et la Lorraine, c'est un carrefour franco-allemand majeur. Située en plein centre historique, à 5 minutes de la Cathédrale et de la Petite France, TaxiNeo vous attend au forfait fixe à la sortie de la gare, place de la Gare.",
      description: "La station de taxis officiels de la gare de Strasbourg est place de la Gare, en sortie directe — un accès exclusif interdit aux VTC. Capitale européenne, Strasbourg attire des voyageurs d'affaires du Parlement européen et du Conseil de l'Europe : nos chauffeurs assurent les transferts vers ces institutions en 8-12 minutes. Disponibles pour le premier TGV de 6h comme pour le dernier ICE de Francfort, ils proposent aussi des transferts vers Colmar, la Route des Vins et Europa-Park. Réservez en amont pendant le Marché de Noël, quand la ville est en effervescence.",
      metaDescription: "Taxi Gare de Strasbourg : 15 millions de voyageurs/an, TGV Paris en 1h46, ICE Francfort. Transfert Parlement européen en 10 min. Forfait fixe. Réservez.",
      heroSubtitle: "Carrefour franco-allemand avec 15 millions de voyageurs par an, Strasbourg dessert Paris en 1h46 et Francfort par ICE. TaxiNeo vous attend place de la Gare au forfait fixe, avec transferts vers le Parlement européen, Colmar et la Route des Vins.",
      whyUs: [
        { title: "Place de la Gare, verrière 2007", desc: "Station taxi place de la Gare, sous la verrière de verre inaugurée en 2007. Accès en 1 minute depuis les quais TGV et ICE, sans traverser le centre commercial." },
        { title: "Parlement européen en 8 min", desc: "Transfert vers le Parlement européen et le Conseil de l'Europe en 8 minutes par l'avenue de l'Europe. Indispensable pour les voyageurs d'affaires et diplomates." },
        { title: "Colmar et Route des Vins d'Alsace", desc: "Colmar est à 35 minutes, la Route des Vins d'Alsace et Europa-Park à 30 minutes. Nos chauffeurs proposent des circuits œnotouristiques au forfait demi-journée." },
      ],
    },
    en: {
      intro: "Strasbourg station, with its spectacular glass canopy unveiled in 2007, welcomes 15 million passengers per year. Served by TGV to Paris in 1h46 via the LGV Est, ICE to Frankfurt and Stuttgart, and TER across Alsace and Lorraine, it is a major Franco-German crossroads. Located in the historic centre, 5 minutes from the Cathedral and Petite France, TaxiNeo awaits you at a fixed fare at the station exit on place de la Gare.",
      description: "The official taxi rank at Strasbourg station is on place de la Gare, at the direct exit — exclusive access off-limits to ride-hailing services. As the European capital, Strasbourg attracts business travellers from the European Parliament and Council of Europe: our drivers provide transfers to these institutions in 8-12 minutes. Available from the first TGV at 6am to the last ICE from Frankfurt, they also offer transfers to Colmar, the Wine Route and Europa-Park. Book ahead during the Christmas Market when the city is buzzing.",
      metaDescription: "Taxi Strasbourg station: 15M passengers/year, TGV to Paris in 1h46 and ICE to Frankfurt. EU Parliament transfer in 10 min. Fixed fare guaranteed. Book now.",
      heroSubtitle: "Franco-German crossroads with 15 million passengers yearly, Strasbourg serves Paris in 1h46 and Frankfurt by ICE. TaxiNeo awaits on place de la Gare at a fixed fare, with transfers to the European Parliament, Colmar and the Wine Route.",
      whyUs: [
        { title: "Place de la Gare, 2007 canopy", desc: "Taxi rank on place de la Gare beneath the glass canopy unveiled in 2007. Reach it in 1 minute from TGV and ICE platforms, no shopping centre detour." },
        { title: "European Parliament in 8 min", desc: "Transfer to the European Parliament and Council of Europe in 8 minutes via avenue de l'Europe. Essential for business travellers and diplomats." },
        { title: "Colmar & Alsace Wine Route", desc: "Colmar is 35 minutes away, the Alsace Wine Route and Europa-Park 30 minutes. Our drivers offer half-day wine-tourism circuits at a fixed fare." },
      ],
    }
  },
  "montpellier-saint-roch": {
    fr: {
      intro: "La Gare de Montpellier Saint-Roch, à 300 mètres de la Place de la Comédie, accueille 9 millions de voyageurs par an. Desservie par le TGV vers Paris en 3h20 et Lyon en 1h45, les TER vers Nîmes, Sète et Perpignan, et les Intercités, c'est le point d'entrée du Languedoc. En plein centre de Montpellier, à 3-8 minutes des attractions principales, TaxiNeo vous assure un transfert au forfait fixe avec chauffeur à la sortie.",
      description: "Devant la gare Saint-Roch, la zone taxi officielle est sur le parvis, côté rue de la Méditerranée — un emplacement exclusif que les VTC ne peuvent pas utiliser. La gare est en pleine mutation avec le futur projet de la gare Montpellier-Sud de France TGV. Nos chauffeurs assurent les transferts vers l'aéroport Montpellier-Méditerranée en 10-15 minutes et vers les plages de Palavas en 15-20 minutes. Réservez à l'avance en été quand l'affluence touristique vers le littoral est à son maximum.",
      metaDescription: "Taxi Montpellier Saint-Roch : 9 millions de voyageurs/an, TGV Paris en 3h20. Aéroport en 10 min, plages de Palavas en 15 min. Forfait fixe garanti. Réservez.",
      heroSubtitle: "Porte du Languedoc avec 9 millions de voyageurs par an, Saint-Roch relie Paris en 3h20 et Lyon en 1h45. TaxiNeo vous attend rue de la Méditerranée au forfait fixe, avec transferts rapides vers l'aéroport ou les plages de Palavas.",
      whyUs: [
        { title: "Place de la Comédie à 300 mètres", desc: "Station taxi rue de la Méditerranée, à 300 mètres de la Place de la Comédie et de l'Écusson piétonnier. Accès rapide sans traverser les zones piétonnes bondées." },
        { title: "Aéroport Montpellier-Méditerranée 10 min", desc: "Transfert direct vers l'aéroport en 10 minutes par la D66. Forfait fixe adapté aux vols vers Paris-Orly, Londres et les destinations méditerranéennes." },
        { title: "Plages Palavas et Carnon 15 min", desc: "Les plages de Palavas-les-Flots et Carnon sont à 15 minutes. En été, nos chauffeurs assurent des navettes plage quotidiennes depuis la gare au forfait." },
      ],
    },
    en: {
      intro: "Montpellier Saint-Roch station, 300 metres from the Place de la Comedie, welcomes 9 million passengers per year. Served by TGV to Paris in 3h20 and Lyon in 1h45, TER to Nimes, Sete and Perpignan, and Intercites, it is the gateway to Languedoc. Right in central Montpellier, 3-8 minutes from the main attractions, TaxiNeo ensures a fixed-fare transfer with a driver at the exit.",
      description: "In front of Saint-Roch station, the official taxi zone is on the forecourt on the rue de la Mediterranee side — an exclusive spot ride-hailing services cannot use. The station is evolving with the future Montpellier-Sud de France TGV station project. Our drivers provide transfers to Montpellier-Mediterranee Airport in 10-15 minutes and to the Palavas beaches in 15-20 minutes. Book ahead in summer when tourist traffic to the coast peaks.",
      metaDescription: "Taxi Montpellier Saint-Roch: 9M passengers/year, TGV to Paris in 3h20. Airport in 10 min, Palavas beaches in 15 min. Guaranteed fixed fare. Book online now.",
      heroSubtitle: "Gateway to Languedoc with 9 million passengers yearly, Saint-Roch connects Paris in 3h20 and Lyon in 1h45. TaxiNeo waits on rue de la Mediterranee at a fixed fare, with fast transfers to the airport or the Palavas beaches.",
      whyUs: [
        { title: "Place de la Comedie 300 metres", desc: "Taxi rank on rue de la Mediterranee, 300 metres from Place de la Comedie and the pedestrian Ecusson district. Quick access without crossing crowded pedestrian zones." },
        { title: "Montpellier-Mediterranee Airport 10 min", desc: "Direct transfer to the airport in 10 minutes via the D66 road. Fixed fare suited to flights to Paris-Orly, London and Mediterranean destinations." },
        { title: "Palavas & Carnon beaches 15 min", desc: "Palavas-les-Flots and Carnon beaches are 15 minutes away. In summer, our drivers run daily beach shuttles from the station at a fixed fare." },
      ],
    }
  },
  "rennes": {
    fr: {
      intro: "La Gare de Rennes, en plein centre-ville, accueille 10 millions de voyageurs par an. Grâce à la LGV Bretagne-Pays de la Loire, le TGV depuis Paris ne met que 1h27. Les TER relient Saint-Malo, Saint-Brieuc, Brest et toute la Bretagne. Entièrement rénovée avec un parvis moderne, la gare est à 3-8 minutes du centre historique. TaxiNeo vous propose un transfert forfaitaire avec un chauffeur à votre sortie, idéal pour poursuivre vers les côtes bretonnes.",
      description: "Devant la gare de Rennes, la zone taxi officielle est sur le nouveau parvis nord — un accès direct interdit aux VTC. Rennes est aussi la base de départ idéale pour des excursions vers Saint-Malo et le Mont-Saint-Michel. Nos chauffeurs assurent ces transferts longue distance ainsi que les navettes vers l'aéroport Rennes-Bretagne en 10-15 minutes. Réserver à l'avance est recommandé pendant les festivals bretons et le week-end de la Route du Rock à Saint-Malo. Disponibles du premier TGV au dernier TER.",
      metaDescription: "Taxi Gare de Rennes : 10 millions de voyageurs/an, TGV Paris en 1h27. Transferts vers Saint-Malo et Mont-Saint-Michel. Forfait fixe garanti, réservez en ligne.",
      heroSubtitle: "Porte de la Bretagne avec 10 millions de voyageurs par an, Rennes est reliée à Paris en 1h27 par TGV. TaxiNeo vous attend parvis nord au forfait fixe, avec transferts longue distance vers Saint-Malo, le Mont-Saint-Michel et l'aéroport en 10 minutes.",
      whyUs: [
        { title: "Parvis nord modernisé 2019", desc: "Station taxi sur le parvis nord rénové en 2019, accès direct depuis les quais TGV. Nos chauffeurs maîtrisent la nouvelle configuration post-rénovation de la gare." },
        { title: "Saint-Malo et Mont-Saint-Michel", desc: "Transfert vers Saint-Malo en 55 minutes et le Mont-Saint-Michel en 1h10. Nos chauffeurs proposent des circuits sur mesure vers ces sites emblématiques bretons." },
        { title: "Aéroport Rennes-Bretagne 10 min", desc: "L'aéroport est à seulement 10 minutes par la rocade ouest. Forfait fixe, service disponible dès 5h pour les vols matinaux vers Lyon, Marseille et Londres." },
      ],
    },
    en: {
      intro: "Rennes station, right in the city centre, welcomes 10 million passengers per year. Thanks to the LGV Bretagne-Pays de la Loire high-speed line, the TGV from Paris takes just 1h27. TER trains connect Saint-Malo, Saint-Brieuc, Brest and all of Brittany. Fully renovated with a modern forecourt, the station is 3-8 minutes from the historic centre. TaxiNeo offers a flat-rate transfer with a driver at your exit, ideal for continuing to the Breton coast.",
      description: "In front of Rennes station, the official taxi zone is on the new north forecourt — direct access off-limits to ride-hailing services. Rennes is also the ideal starting point for excursions to Saint-Malo and Mont-Saint-Michel. Our drivers handle these long-distance transfers as well as shuttles to Rennes-Bretagne Airport in 10-15 minutes. Booking ahead is recommended during Breton festivals and the Route du Rock weekend in Saint-Malo. Available from the first TGV to the last TER.",
      metaDescription: "Taxi Rennes station: 10M passengers/year, TGV to Paris in just 1h27. Transfers to Saint-Malo and Mont-Saint-Michel. Guaranteed fixed fare. Book online now.",
      heroSubtitle: "Gateway to Brittany with 10 million passengers yearly, Rennes connects to Paris in 1h27 by TGV. TaxiNeo waits on the north forecourt at a fixed fare, with long-distance transfers to Saint-Malo, Mont-Saint-Michel and the airport in 10 minutes.",
      whyUs: [
        { title: "Modernised north forecourt 2019", desc: "Taxi rank on the north forecourt renovated in 2019, direct access from TGV platforms. Our drivers know the new post-renovation station layout." },
        { title: "Saint-Malo & Mont-Saint-Michel", desc: "Transfer to Saint-Malo in 55 minutes and Mont-Saint-Michel in 1h10. Our drivers offer bespoke circuits to these iconic Breton destinations." },
        { title: "Rennes-Bretagne Airport 10 min", desc: "The airport is just 10 minutes via the western ring road. Fixed fare, service available from 5am for early flights to Lyon, Marseille and London." },
      ],
    }
  },
  "marne-la-vallee-chessy": {
    fr: {
      intro: "La Gare de Marne-la-Vallée Chessy, directement reliée à Disneyland Paris, accueille 15 millions de voyageurs par an. Desservie par des TGV directs depuis Lyon, Marseille, Lille, Bordeaux et d'autres grandes villes, ainsi que par le RER A depuis Paris, c'est la porte d'entrée du premier parc d'attractions d'Europe. Située à 25-40 minutes de Paris, TaxiNeo vous propose un transfert au forfait fixe avec sièges enfants disponibles sur demande.",
      description: "Devant la gare de Marne-la-Vallée Chessy, la zone taxi officielle est sur le parvis de la gare TGV — un accès exclusif que les VTC ne peuvent pas utiliser. Les arrivées TGV de province créent des flux concentrés : nos chauffeurs anticipent chaque horaire d'arrivée. Le transfert vers les hôtels Disney et le Val d'Europe ne prend que 2-5 minutes. Réservez à l'avance pour les vacances scolaires et les week-ends prolongés, périodes de très forte affluence. Nos véhicules sont équipés de sièges enfants sur demande.",
      metaDescription: "Taxi Marne-la-Vallée Chessy : gare Disneyland Paris, 15 millions de voyageurs/an. Sièges enfants disponibles, hôtels Disney en 2 min. Forfait fixe garanti.",
      heroSubtitle: "Porte d'entrée de Disneyland Paris avec 15 millions de voyageurs par an et des TGV directs de toute la France. TaxiNeo vous attend au forfait fixe avec sièges enfants sur demande, pour un transfert en 2 minutes vers les hôtels Disney et le Val d'Europe.",
      whyUs: [
        { title: "Sièges enfants et poussettes", desc: "Véhicules équipés de sièges enfants (0-10 ans) sur simple demande. Coffres spacieux pour les poussettes et bagages de toute la famille, service adapté Disney." },
        { title: "Hôtels Disney Village en 2 min", desc: "Transfert express vers le Disneyland Hotel, le New York et le Santa Fe en 2 minutes. Nos chauffeurs connaissent les accès privés de chaque hôtel du resort." },
        { title: "CDG et Orly depuis le parc", desc: "Transfert Disneyland – CDG en 30 minutes, Disneyland – Orly en 40 minutes par l'A4 et la Francilienne. Forfait fixe retour après votre séjour au parc." },
      ],
    },
    en: {
      intro: "Marne-la-Vallee Chessy station, directly linked to Disneyland Paris, welcomes 15 million passengers per year. Served by direct TGV from Lyon, Marseille, Lille, Bordeaux and other major cities, plus the RER A from Paris, it is the gateway to Europe's top theme park. Located 25-40 minutes from Paris, TaxiNeo offers a fixed-fare transfer with child seats available on request.",
      description: "In front of Marne-la-Vallee Chessy station, the official taxi zone is on the TGV station forecourt — exclusive access unavailable to ride-hailing services. TGV arrivals from across France create concentrated flows: our drivers anticipate each arrival time. The transfer to Disney hotels and Val d'Europe takes just 2-5 minutes. Book ahead for school holidays and long weekends, peak attendance periods. Our vehicles are equipped with child seats on request.",
      metaDescription: "Taxi Marne-la-Vallee Chessy: Disneyland Paris station, 15M passengers/year. Child seats available, Disney hotels in just 2 min. Guaranteed fixed fare. Book now.",
      heroSubtitle: "Gateway to Disneyland Paris with 15 million passengers yearly and direct TGV from across France. TaxiNeo awaits at a fixed fare with child seats on request, for a 2-minute transfer to Disney hotels and Val d'Europe.",
      whyUs: [
        { title: "Child seats & pushchair space", desc: "Vehicles fitted with child seats (ages 0-10) on simple request. Spacious boots for pushchairs and family luggage, a Disney-tailored service." },
        { title: "Disney Village hotels in 2 min", desc: "Express transfer to the Disneyland Hotel, New York and Santa Fe in 2 minutes. Our drivers know the private access points for each resort hotel." },
        { title: "CDG & Orly from the park", desc: "Disneyland to CDG transfer in 30 minutes, Disneyland to Orly in 40 minutes via the A4 and Francilienne. Fixed-fare return after your park stay." },
      ],
    }
  },
  "lyon-saint-exupery-tgv": {
    fr: {
      intro: "La Gare de Lyon Saint-Exupéry TGV, intégrée à l'aéroport international de Lyon, accueille 4 millions de voyageurs par an. Desservie exclusivement par des TGV directs depuis Marseille, Montpellier, Rennes et d'autres grandes villes sans passer par Lyon-centre, elle est idéale pour les correspondances avion-train. Située à 25 km du centre de Lyon, TaxiNeo vous propose un transfert forfaitaire vers Lyon Part-Dieu, Grenoble ou les stations de ski alpines.",
      description: "La zone taxi officielle de Lyon Saint-Exupéry TGV se trouve à la sortie de la gare, niveau départs — un accès réservé aux taxis interdit aux VTC. La gare est un point stratégique pour rejoindre Grenoble en 50 minutes et les stations de ski de l'Isère et de la Savoie. Nos chauffeurs disposent de véhicules équipés en pneus neige pendant la saison hivernale. Réserver à l'avance est essentiel le week-end en période de sports d'hiver. Le transfert vers Lyon Part-Dieu prend 25-35 minutes par l'autoroute.",
      metaDescription: "Taxi Lyon Saint-Exupéry TGV : gare-aéroport combinée, 4 millions de voyageurs/an. Transfert stations de ski des Alpes, pneus neige. Forfait fixe garanti 24h/24.",
      heroSubtitle: "Intégrée à l'aéroport de Lyon avec 4 millions de voyageurs par an, Saint-Exupéry TGV est idéale pour les correspondances avion-train. TaxiNeo propose des transferts au forfait fixe vers Lyon, Grenoble ou les stations de ski avec véhicules équipés neige en hiver.",
      whyUs: [
        { title: "Correspondance avion-TGV directe", desc: "Gare intégrée à l'aéroport : passage direct du terminal au quai TGV. Nos chauffeurs assurent la transition entre vol et train sans détour, même avec bagages volumineux." },
        { title: "Pneus neige et chaînes en hiver", desc: "Véhicules systématiquement équipés de pneus neige de novembre à avril. Chaînes disponibles pour les transferts vers les stations de ski de Savoie et d'Isère." },
        { title: "Grenoble en 50 min par l'A48", desc: "Transfert direct vers Grenoble en 50 minutes par l'A48, point de départ des stations de l'Oisans. Forfait fixe, idéal pour les skieurs en correspondance avion." },
      ],
    },
    en: {
      intro: "Lyon Saint-Exupery TGV station, integrated into Lyon's international airport, welcomes 4 million passengers per year. Served exclusively by direct TGV from Marseille, Montpellier, Rennes and other major cities without passing through Lyon centre, it is ideal for plane-train connections. Located 25 km from central Lyon, TaxiNeo offers a flat-rate transfer to Lyon Part-Dieu, Grenoble or the Alpine ski resorts.",
      description: "The official taxi zone at Lyon Saint-Exupery TGV is at the station exit, departures level — access reserved for taxis and off-limits to ride-hailing services. The station is a strategic point for reaching Grenoble in 50 minutes and the ski resorts of Isere and Savoie. Our drivers have vehicles fitted with snow tyres during winter season. Booking ahead is essential on weekends during the winter sports period. The transfer to Lyon Part-Dieu takes 25-35 minutes via the motorway.",
      metaDescription: "Taxi Lyon Saint-Exupery TGV: combined airport-station hub, 4M passengers/year. Alpine ski resort transfers with snow tyres. Guaranteed fixed fare. Book 24/7.",
      heroSubtitle: "Integrated into Lyon Airport with 4 million passengers yearly, Saint-Exupery TGV is ideal for plane-train connections. TaxiNeo offers fixed-fare transfers to Lyon, Grenoble or ski resorts with winter-equipped vehicles including snow tyres.",
      whyUs: [
        { title: "Direct plane-to-TGV connection", desc: "Station integrated into the airport: walk straight from the terminal to the TGV platform. Our drivers handle the flight-to-train transition seamlessly, even with bulky luggage." },
        { title: "Snow tyres & chains in winter", desc: "Vehicles systematically fitted with snow tyres from November to April. Chains available for transfers to ski resorts in Savoie and Isere." },
        { title: "Grenoble in 50 min via A48", desc: "Direct transfer to Grenoble in 50 minutes via the A48, gateway to Oisans ski resorts. Fixed fare, ideal for skiers connecting from flights." },
      ],
    }
  },
  "avignon-tgv": {
    fr: {
      intro: "La Gare d'Avignon TGV, située à 5 km au sud du centre historique, accueille 4 millions de voyageurs par an. Sur la LGV Méditerranée, elle est desservie par des TGV vers Paris en 2h40 et Lyon en 1h. Gare excentrée mais moderne, elle est la porte d'entrée de la Provence : Palais des Papes, Luberon, Alpilles et villages perchés sont tous accessibles en taxi. TaxiNeo vous attend au forfait fixe pour votre transfert vers le centre d'Avignon en 10-15 minutes.",
      description: "Devant la gare Avignon TGV, la station taxi officielle est sur le parvis de la gare — un accès interdit aux VTC. Étant excentrée, le taxi est le moyen le plus pratique pour rejoindre le centre historique. Nos chauffeurs assurent aussi les transferts vers le Luberon, Gordes, l'Isle-sur-la-Sorgue et les Alpilles. Réservez impérativement à l'avance pendant le Festival d'Avignon en juillet, quand la demande explose. Nos taxis sont aussi disponibles pour les transferts vers la gare Avignon-Centre pour les correspondances TER.",
      metaDescription: "Taxi Avignon TGV : 4 millions de voyageurs/an, Paris en 2h40. Transfert vers le Luberon, Gordes et Festival d'Avignon. Centre-ville en 10 min, forfait fixe.",
      heroSubtitle: "Porte de la Provence avec 4 millions de voyageurs par an, Avignon TGV dessert Paris en 2h40 et Lyon en 1h. TaxiNeo vous transfère au forfait fixe vers le centre historique en 10 minutes, le Luberon ou les Alpilles, avec disponibilité renforcée pendant le Festival.",
      whyUs: [
        { title: "Centre historique et remparts 10 min", desc: "La gare TGV est à 5 km du centre : nos chauffeurs vous déposent au pied des remparts et du Palais des Papes en 10 minutes. Indispensable sans voiture." },
        { title: "Luberon, Gordes et Isle-sur-la-Sorgue", desc: "Transferts vers Gordes en 40 minutes, l'Isle-sur-la-Sorgue en 20 minutes et Roussillon. Forfaits demi-journée pour découvrir les villages perchés du Luberon." },
        { title: "Festival d'Avignon en juillet", desc: "En juillet, le Festival crée un pic de demande massif. Nos chauffeurs sont renforcés pendant les 3 semaines du festival, réservation anticipée indispensable." },
      ],
    },
    en: {
      intro: "Avignon TGV station, located 5 km south of the historic centre, welcomes 4 million passengers per year. On the LGV Mediterranee high-speed line, it is served by TGV to Paris in 2h40 and Lyon in 1h. An out-of-town but modern station, it is the gateway to Provence: the Palais des Papes, Luberon, Alpilles and hilltop villages are all accessible by taxi. TaxiNeo awaits you at a fixed fare for your 10-15 minute transfer to central Avignon.",
      description: "In front of Avignon TGV station, the official taxi rank is on the station forecourt — access off-limits to ride-hailing services. Being out of the centre, a taxi is the most practical way to reach the historic city. Our drivers also provide transfers to the Luberon, Gordes, l'Isle-sur-la-Sorgue and the Alpilles. Book well ahead during the Festival d'Avignon in July when demand surges. Our taxis are also available for transfers to Avignon-Centre station for TER connections.",
      metaDescription: "Taxi Avignon TGV: 4M passengers/year, Paris in 2h40. Transfers to the Luberon, Gordes and Festival d'Avignon. City centre in 10 min. Fixed fare. Book now.",
      heroSubtitle: "Gateway to Provence with 4 million passengers yearly, Avignon TGV serves Paris in 2h40 and Lyon in 1h. TaxiNeo transfers you at a fixed fare to the historic centre in 10 minutes, the Luberon or the Alpilles, with extra availability during the Festival.",
      whyUs: [
        { title: "Historic centre & ramparts 10 min", desc: "The TGV station is 5 km from the centre: our drivers drop you at the foot of the ramparts and Palais des Papes in 10 minutes. Essential without a car." },
        { title: "Luberon, Gordes & Isle-sur-la-Sorgue", desc: "Transfers to Gordes in 40 minutes, Isle-sur-la-Sorgue in 20 minutes and Roussillon. Half-day packages to explore the hilltop villages of the Luberon." },
        { title: "Festival d'Avignon in July", desc: "In July, the Festival creates a massive demand surge. Our driver fleet is reinforced during the 3-week festival; advance booking is essential." },
      ],
    }
  },
  "aix-en-provence-tgv": {
    fr: {
      intro: "La Gare d'Aix-en-Provence TGV, située à 15 km du centre-ville sur le plateau de l'Arbois, accueille 4 millions de voyageurs par an. Desservie par le TGV vers Paris en 3h et Lyon en 1h25, elle est aussi à proximité immédiate de l'aéroport Marseille-Provence. Le taxi est indispensable pour rejoindre le Cours Mirabeau et le vieil Aix en 15-25 minutes. TaxiNeo vous garantit un forfait fixe et un chauffeur qui vous attend à la sortie de la gare.",
      description: "La zone taxi officielle de la gare Aix-en-Provence TGV est sur le parvis, à la sortie principale — un accès exclusif interdit aux VTC. Gare excentrée par excellence, elle nécessite un transfert vers le centre-ville ou l'aéroport. Nos chauffeurs proposent aussi des transferts vers les Calanques de Cassis et le Luberon. Réservez à l'avance pendant les festivals d'art et les saisons touristiques de la Provence. Le transfert vers l'aéroport Marseille-Provence ne prend que 10-15 minutes, un atout majeur pour les voyageurs en correspondance.",
      metaDescription: "Taxi Aix-en-Provence TGV : 4 millions de voyageurs/an, TGV depuis Paris en 3h. Centre-ville Aix en 15 min, aéroport Marseille 10 min. Forfait fixe garanti.",
      heroSubtitle: "Située sur le plateau de l'Arbois avec 4 millions de voyageurs par an, Aix TGV relie Paris en 3h. TaxiNeo est indispensable pour rejoindre le Cours Mirabeau en 15 minutes ou l'aéroport Marseille-Provence en 10 minutes, au forfait garanti.",
      whyUs: [
        { title: "Cours Mirabeau et vieil Aix 15 min", desc: "La gare TGV est sur le plateau de l'Arbois, à 15 km du centre. Nos chauffeurs vous déposent directement cours Mirabeau en 15 minutes, sans détour." },
        { title: "Aéroport Marseille-Provence 10 min", desc: "L'aéroport MRS est à seulement 10 minutes par la D9. Correspondance avion-TGV optimale, forfait fixe incluant le transfert entre les deux terminaux." },
        { title: "Calanques de Cassis en 30 min", desc: "Les Calanques de Cassis sont à 30 minutes, le Luberon à 40 minutes. Nos chauffeurs connaissent les routes provençales et proposent des circuits demi-journée." },
      ],
    },
    en: {
      intro: "Aix-en-Provence TGV station, located 15 km from the city centre on the Arbois plateau, welcomes 4 million passengers per year. Served by TGV to Paris in 3h and Lyon in 1h25, it is also close to Marseille-Provence Airport. A taxi is essential to reach the Cours Mirabeau and old Aix in 15-25 minutes. TaxiNeo guarantees a fixed fare and a driver waiting for you at the station exit.",
      description: "The official taxi zone at Aix-en-Provence TGV is on the forecourt at the main exit — exclusive access off-limits to ride-hailing services. An out-of-town station par excellence, it requires a transfer to the city centre or airport. Our drivers also offer transfers to the Calanques de Cassis and the Luberon. Book ahead during art festivals and Provence tourist seasons. The transfer to Marseille-Provence Airport takes just 10-15 minutes, a major advantage for connecting travellers.",
      metaDescription: "Taxi Aix-en-Provence TGV: 4M passengers/year, TGV from Paris in 3h. Aix-en-Provence centre 15 min, Marseille airport 10 min. Guaranteed fixed fare. Book now.",
      heroSubtitle: "Set on the Arbois plateau with 4 million passengers yearly, Aix TGV connects Paris in 3h. TaxiNeo is essential to reach Cours Mirabeau in 15 minutes or Marseille-Provence Airport in 10 minutes, at a guaranteed fare.",
      whyUs: [
        { title: "Cours Mirabeau & old Aix 15 min", desc: "The TGV station sits on the Arbois plateau, 15 km from the centre. Our drivers take you straight to Cours Mirabeau in 15 minutes, no detour." },
        { title: "Marseille-Provence Airport 10 min", desc: "MRS Airport is just 10 minutes via the D9 road. Optimal flight-to-TGV connection, fixed fare including transfer between both terminals." },
        { title: "Calanques de Cassis in 30 min", desc: "The Calanques de Cassis are 30 minutes away, the Luberon 40 minutes. Our drivers know the Provencal roads and offer half-day circuits." },
      ],
    }
  },
  "valence-tgv": {
    fr: {
      intro: "La Gare de Valence TGV, sur la LGV Méditerranée à 10 km du centre de Valence, accueille 2 millions de voyageurs par an. Exclusivement desservie par des TGV vers Paris en 2h15 et Lyon en 40 minutes, elle est la porte d'entrée de la Drôme et du Vercors. Le taxi est le moyen le plus rapide pour rejoindre le centre-ville en 10-20 minutes. TaxiNeo vous attend au forfait fixe pour votre transfert depuis cette gare excentrée.",
      description: "Devant la gare Valence TGV, la zone taxi officielle est directement à la sortie — un emplacement exclusif que les VTC ne peuvent pas occuper. La gare est isolée, sans transport en commun fréquent vers le centre : le taxi s'impose. Nos chauffeurs proposent des transferts vers Valence centre, Montélimar, Romans-sur-Isère et les gorges du Vercors. Réservez à l'avance car la faible fréquence des transports publics crée une forte demande de taxis à chaque arrivée de TGV. Un seul conseil : anticipez votre réservation.",
      metaDescription: "Taxi Valence TGV : 2 millions de voyageurs/an, TGV Paris en 2h15. Gare isolée où le taxi est indispensable. Centre-ville en 10 min, Vercors. Forfait garanti.",
      heroSubtitle: "Sur la LGV Méditerranée avec 2 millions de voyageurs par an, Valence TGV dessert Paris en 2h15 et Lyon en 40 min. Gare isolée sans transport public fréquent : TaxiNeo est indispensable pour rejoindre le centre, Montélimar ou le Vercors au forfait fixe.",
      whyUs: [
        { title: "Gare isolée, taxi indispensable", desc: "Aucun transport en commun fréquent depuis cette gare excentrée. Nos chauffeurs sont positionnés à chaque arrivée de TGV pour éviter toute attente sur le parvis désert." },
        { title: "Centre de Valence en 15 min", desc: "Transfert vers le centre-ville, la Vieille Ville et la Côte du Rhône en 15 minutes par la N7. Forfait fixe garanti, même aux heures de pointe sur la nationale." },
        { title: "Vercors et Montélimar accessibles", desc: "Les gorges du Vercors sont à 40 minutes, Montélimar et ses nougats à 30 minutes. Nos chauffeurs assurent aussi les transferts vers Romans-sur-Isère en 20 minutes." },
      ],
    },
    en: {
      intro: "Valence TGV station, on the LGV Mediterranee 10 km from central Valence, welcomes 2 million passengers per year. Exclusively served by TGV to Paris in 2h15 and Lyon in 40 minutes, it is the gateway to the Drome and Vercors regions. A taxi is the fastest way to reach the city centre in 10-20 minutes. TaxiNeo awaits you at a fixed fare for your transfer from this out-of-town station.",
      description: "In front of Valence TGV station, the official taxi zone is right at the exit — an exclusive spot ride-hailing services cannot occupy. The station is isolated with no frequent public transport to the centre: a taxi is essential. Our drivers offer transfers to Valence centre, Montelimar, Romans-sur-Isere and the Vercors gorges. Book ahead as the lack of public transport creates high taxi demand at every TGV arrival. One tip: plan your booking in advance.",
      metaDescription: "Taxi Valence TGV: 2M passengers/year, TGV from Paris in 2h15. Isolated station where a taxi is essential. City centre in 10 min, Vercors area. Book online.",
      heroSubtitle: "On the LGV Mediterranee with 2 million passengers yearly, Valence TGV serves Paris in 2h15 and Lyon in 40 min. An isolated station with no frequent public transport: TaxiNeo is essential to reach the centre, Montelimar or the Vercors at a fixed fare.",
      whyUs: [
        { title: "Isolated station, taxi essential", desc: "No frequent public transport from this out-of-town station. Our drivers are positioned at every TGV arrival to spare you any wait on the empty forecourt." },
        { title: "Valence centre in 15 min", desc: "Transfer to the city centre, the Old Town and the Cotes du Rhone vineyards in 15 minutes via the N7 road. Guaranteed fixed fare even during rush hour." },
        { title: "Vercors & Montelimar access", desc: "The Vercors gorges are 40 minutes away, Montelimar and its nougat 30 minutes. Our drivers also handle transfers to Romans-sur-Isere in 20 minutes." },
      ],
    }
  },
  "metz": {
    fr: {
      intro: "La Gare de Metz, chef-d'œuvre d'architecture néo-romane classé monument historique, accueille 7 millions de voyageurs par an. Desservie par le TGV vers Paris en 1h24 et les TER vers Nancy, Luxembourg et Thionville, elle est un carrefour franco-luxembourgeois de premier plan. En plein centre-ville, à 3 minutes du Centre Pompidou-Metz, TaxiNeo vous propose un transfert forfaitaire avec un chauffeur habitué aux trajets transfrontaliers.",
      description: "La station de taxis officiels de la gare de Metz est sur le parvis, côté avenue Foch — un accès direct interdit aux VTC. De nombreux frontaliers transitent chaque jour vers le Luxembourg : nos chauffeurs assurent ce trajet en 40-50 minutes au forfait. Disponibles du premier TGV de 5h50 au dernier TER de 23h, ils couvrent aussi les transferts vers l'aéroport Metz-Nancy-Lorraine. Réservez à l'avance les jours de match au Stade Saint-Symphorien ou lors de grandes expositions au Centre Pompidou-Metz.",
      metaDescription: "Taxi Gare de Metz : 7 millions de voyageurs/an, TGV Paris en 1h24. Transfert Luxembourg en 40 min et Centre Pompidou-Metz. Forfait fixe transfrontalier.",
      heroSubtitle: "Carrefour franco-luxembourgeois avec 7 millions de voyageurs par an, Metz relie Paris en 1h24 par TGV. TaxiNeo assure vos transferts transfrontaliers vers le Luxembourg en 40 minutes au forfait fixe, avec chauffeurs habitués aux passages de frontière.",
      whyUs: [
        { title: "Avenue Foch, Pompidou-Metz à 3 min", desc: "Station taxi avenue Foch, à 3 minutes du Centre Pompidou-Metz et de la gare classée monument historique. Accès direct sans traverser le quartier de l'Amphithéâtre." },
        { title: "Luxembourg-Ville en 40 min au forfait", desc: "Transfert transfrontalier vers Luxembourg-Ville en 40 minutes par l'A31. Forfait fixe sans supplément frontalier, chauffeurs habitués aux heures de pointe du Kirchberg." },
        { title: "Aéroport Metz-Nancy-Lorraine 20 min", desc: "L'aéroport régional est à 20 minutes par l'A31 sud. Forfait fixe pour les vols vers Lyon, Marseille et les destinations saisonnières méditerranéennes." },
      ],
    },
    en: {
      intro: "Metz station, a neo-Romanesque architectural masterpiece listed as a historic monument, welcomes 7 million passengers per year. Served by TGV to Paris in 1h24 and TER to Nancy, Luxembourg and Thionville, it is a leading Franco-Luxembourgish crossroads. Right in the city centre, 3 minutes from Centre Pompidou-Metz, TaxiNeo offers a flat-rate transfer with a driver accustomed to cross-border trips.",
      description: "The official taxi rank at Metz station is on the forecourt on the avenue Foch side — direct access off-limits to ride-hailing services. Many cross-border commuters transit daily to Luxembourg: our drivers make this trip in 40-50 minutes at a flat rate. Available from the first TGV at 5:50am to the last TER at 11pm, they also cover transfers to Metz-Nancy-Lorraine Airport. Book ahead on match days at Stade Saint-Symphorien or during major exhibitions at Centre Pompidou-Metz.",
      metaDescription: "Taxi Metz station: 7M passengers/year, TGV to Paris in 1h24. Luxembourg transfer in 40 min and Pompidou-Metz museum. Cross-border guaranteed fixed fare. Book.",
      heroSubtitle: "Franco-Luxembourgish crossroads with 7 million passengers yearly, Metz connects Paris in 1h24 by TGV. TaxiNeo handles cross-border transfers to Luxembourg in 40 minutes at a fixed fare, with drivers experienced in border crossings.",
      whyUs: [
        { title: "Avenue Foch, Pompidou-Metz 3 min", desc: "Taxi rank on avenue Foch, 3 minutes from Centre Pompidou-Metz and the listed historic station. Direct access without crossing the Amphitheatre district." },
        { title: "Luxembourg City in 40 min flat rate", desc: "Cross-border transfer to Luxembourg City in 40 minutes via the A31. Fixed fare with no border surcharge, drivers familiar with Kirchberg rush hours." },
        { title: "Metz-Nancy-Lorraine Airport 20 min", desc: "The regional airport is 20 minutes via the A31 south. Fixed fare for flights to Lyon, Marseille and seasonal Mediterranean destinations." },
      ],
    }
  },
  "nancy": {
    fr: {
      intro: "La Gare de Nancy, à 5 minutes de la célèbre Place Stanislas classée au patrimoine mondial de l'UNESCO, accueille 7 millions de voyageurs par an. Desservie par le TGV vers Paris en 1h30 et les TER vers Metz, Strasbourg et Épinal, c'est le hub ferroviaire de la Lorraine. En plein centre-ville, TaxiNeo vous garantit un chauffeur au forfait fixe dès la sortie de la gare, côté place Thiers.",
      description: "Devant la gare de Nancy, la zone taxi officielle est place Thiers — un emplacement réservé aux taxis que les VTC ne peuvent pas utiliser. La gare est très fréquentée par les étudiants (Nancy compte 50 000 étudiants) et les voyageurs d'affaires. Nos chauffeurs assurent les transferts vers l'aéroport Metz-Nancy-Lorraine en 25-35 minutes et vers les stations thermales des Vosges (Vittel, Contrexéville). Réservez à l'avance pour les périodes de rentrée universitaire et les week-ends du Livre sur la Place en septembre.",
      metaDescription: "Taxi Gare de Nancy : 7 millions de voyageurs/an, TGV Paris en 1h30. Place Stanislas UNESCO à 5 min, aéroport en 25 min, Vosges. Forfait fixe garanti 24h/24.",
      heroSubtitle: "Hub ferroviaire lorrain avec 7 millions de voyageurs par an, Nancy est à 5 min de la Place Stanislas UNESCO. TaxiNeo vous attend place Thiers au forfait fixe, avec transferts vers l'aéroport en 25 minutes et les stations thermales des Vosges.",
      whyUs: [
        { title: "Place Thiers, Stanislas à 5 min", desc: "Station taxi place Thiers, à 5 minutes à pied de la célèbre Place Stanislas classée UNESCO. Prise en charge immédiate face à la sortie principale de la gare." },
        { title: "Thermes Vittel et Contrexéville", desc: "Transfert vers Vittel en 55 minutes et Contrexéville en 1h par la N57. Forfait fixe pour les curistes, service porte-à-porte depuis le quai du TGV." },
        { title: "50 000 étudiants, tarifs adaptés", desc: "Nancy accueille 50 000 étudiants : nos forfaits sont adaptés aux trajets campus-gare. Transferts vers Vandœuvre, le Technopôle et l'ARTEM en 8-12 minutes." },
      ],
    },
    en: {
      intro: "Nancy station, 5 minutes from the famous Place Stanislas — a UNESCO World Heritage Site — welcomes 7 million passengers per year. Served by TGV to Paris in 1h30 and TER to Metz, Strasbourg and Epinal, it is the railway hub of Lorraine. Right in the city centre, TaxiNeo guarantees a driver at a fixed fare right at the station exit on place Thiers.",
      description: "In front of Nancy station, the official taxi zone is on place Thiers — a spot reserved for taxis that ride-hailing services cannot use. The station is heavily used by students (Nancy has 50,000 students) and business travellers. Our drivers provide transfers to Metz-Nancy-Lorraine Airport in 25-35 minutes and to the Vosges spa towns (Vittel, Contrexeville). Book ahead for university term starts and the Livre sur la Place book fair weekends in September.",
      metaDescription: "Taxi Nancy station: 7M passengers/year, TGV to Paris in 1h30. UNESCO Place Stanislas 5 min away, airport in 25 min, Vosges. Guaranteed fixed fare. Book now.",
      heroSubtitle: "Lorraine's railway hub with 7 million passengers yearly, Nancy is 5 min from UNESCO-listed Place Stanislas. TaxiNeo waits on place Thiers at a fixed fare, with airport transfers in 25 minutes and connections to the Vosges spa towns.",
      whyUs: [
        { title: "Place Thiers, Stanislas 5 min away", desc: "Taxi rank on place Thiers, 5 minutes on foot from the famous UNESCO-listed Place Stanislas. Immediate pickup facing the main station exit." },
        { title: "Vittel & Contrexeville spa towns", desc: "Transfer to Vittel in 55 minutes and Contrexeville in 1h via the N57 road. Fixed fare for spa guests, door-to-door service from the TGV platform." },
        { title: "50,000 students, adapted fares", desc: "Nancy hosts 50,000 students: our fares are adapted for campus-to-station trips. Transfers to Vandoeuvre, the Technopole and ARTEM campus in 8-12 minutes." },
      ],
    }
  },
  "reims": {
    fr: {
      intro: "La Gare de Reims, en plein centre de la capitale du Champagne, accueille 5 millions de voyageurs par an. Desservie par le TGV vers Paris en seulement 45 minutes et les TER vers la Champagne, elle est à 5-8 minutes de la Cathédrale Notre-Dame et des grandes maisons de Champagne. TaxiNeo vous propose un chauffeur au forfait fixe à la sortie, boulevard Joffre, pour vous conduire vers vos dégustations ou votre hôtel.",
      description: "Devant la gare de Reims, la station taxi officielle est boulevard Joffre — un emplacement exclusif que les VTC ne peuvent pas utiliser. La proximité de Paris (45 min en TGV) fait de Reims une destination de day-trip très prisée pour les caves de Champagne. Nos chauffeurs proposent des circuits vers Épernay, les caves Pommery, Veuve Clicquot et Taittinger. Réservez à l'avance pour les week-ends d'œnotourisme et les fêtes de fin d'année. Disponibles pour le premier TGV de 6h30 comme pour les retours en soirée.",
      metaDescription: "Taxi Gare de Reims : 5 millions de voyageurs/an, TGV Paris en 45 min seulement. Circuits caves de Champagne et Épernay. Forfait fixe garanti, réservez en ligne.",
      heroSubtitle: "Capitale du Champagne avec 5 millions de voyageurs par an, Reims est à 45 min de Paris par TGV. TaxiNeo vous propose des circuits vers Épernay, Pommery et Veuve Clicquot au forfait fixe, avec chauffeur boulevard Joffre disponible dès 6h30.",
      whyUs: [
        { title: "Boulevard Joffre, Cathédrale à 5 min", desc: "Station taxi boulevard Joffre, à 5 minutes de la Cathédrale Notre-Dame classée UNESCO. Accès direct sans passer par les rues piétonnes encombrées du centre." },
        { title: "Circuits caves Pommery et Taittinger", desc: "Nos chauffeurs proposent des circuits vers les caves Pommery (5 min), Veuve Clicquot (8 min) et Taittinger (5 min). Forfait demi-journée avec temps d'attente inclus." },
        { title: "Épernay et avenue de Champagne", desc: "Transfert vers Épernay et la célèbre avenue de Champagne en 25 minutes par la D951. Circuit vignoble Hautvillers-Épernay au forfait, retour gare garanti." },
      ],
    },
    en: {
      intro: "Reims station, in the heart of the Champagne capital, welcomes 5 million passengers per year. Served by TGV to Paris in just 45 minutes and TER across Champagne, it is 5-8 minutes from Notre-Dame Cathedral and the great Champagne houses. TaxiNeo offers a driver at a fixed fare at the exit on boulevard Joffre, ready to take you to your tastings or hotel.",
      description: "In front of Reims station, the official taxi rank is on boulevard Joffre — an exclusive spot ride-hailing services cannot use. The proximity to Paris (45 min by TGV) makes Reims a highly popular day-trip destination for Champagne cellars. Our drivers offer circuits to Epernay, the Pommery, Veuve Clicquot and Taittinger cellars. Book ahead for wine-tourism weekends and year-end celebrations. Available from the first TGV at 6:30am through to evening returns.",
      metaDescription: "Taxi Reims station: 5M passengers/year, TGV to Paris in just 45 min. Champagne cellar circuits and Epernay day trips. Guaranteed fixed fare. Book online now.",
      heroSubtitle: "Champagne capital with 5 million passengers yearly, Reims is 45 min from Paris by TGV. TaxiNeo offers circuits to Epernay, Pommery and Veuve Clicquot at a fixed fare, with a driver on boulevard Joffre available from 6:30am.",
      whyUs: [
        { title: "Boulevard Joffre, Cathedral 5 min", desc: "Taxi rank on boulevard Joffre, 5 minutes from the UNESCO-listed Notre-Dame Cathedral. Direct access without navigating the crowded pedestrian centre." },
        { title: "Pommery & Taittinger cellar circuits", desc: "Our drivers offer circuits to the Pommery cellars (5 min), Veuve Clicquot (8 min) and Taittinger (5 min). Half-day package with waiting time included." },
        { title: "Epernay & Avenue de Champagne", desc: "Transfer to Epernay and the famous Avenue de Champagne in 25 minutes via the D951. Hautvillers-Epernay vineyard circuit at a fixed fare, station return guaranteed." },
      ],
    }
  },
  "dijon-ville": {
    fr: {
      intro: "La Gare de Dijon-Ville, au cœur de la capitale bourguignonne, accueille 7 millions de voyageurs par an. Desservie par le TGV vers Paris en 1h40 et Lyon en 1h40, les TER vers Besançon, Auxerre et toute la Bourgogne, c'est le point de départ idéal pour la Route des Grands Crus. À 3-5 minutes du Palais des Ducs, TaxiNeo vous attend au forfait fixe à la sortie de la gare.",
      description: "La zone taxi officielle de la gare de Dijon est sur le parvis, côté avenue Foch — un accès réservé aux taxis interdit aux VTC. Dijon est la porte d'entrée de la Route des Grands Crus de Bourgogne : nos chauffeurs proposent des transferts vers Beaune, Nuits-Saint-Georges, Gevrey-Chambertin et la Côte de Beaune. Réservez à l'avance pendant les vendanges en septembre-octobre et le festival Gastronomie & Vin. Nos chauffeurs couvrent aussi les transferts vers l'aéroport Dijon-Bourgogne et les correspondances TGV.",
      metaDescription: "Taxi Gare de Dijon : 7 millions de voyageurs/an, TGV Paris en 1h40. Route des Grands Crus de Bourgogne, Beaune et vendanges. Forfait fixe garanti. Réservez.",
      heroSubtitle: "Capitale bourguignonne avec 7 millions de voyageurs par an, Dijon relie Paris et Lyon en 1h40. TaxiNeo vous attend avenue Foch au forfait fixe, avec circuits œnotouristiques vers Beaune, Nuits-Saint-Georges et la Route des Grands Crus.",
      whyUs: [
        { title: "Avenue Foch, Palais des Ducs 3 min", desc: "Station taxi avenue Foch, à 3 minutes du Palais des Ducs et du marché couvert. Accès direct sans traverser les rues piétonnes de l'hyper-centre dijonnais." },
        { title: "Beaune et Nuits-Saint-Georges", desc: "Transfert vers Beaune en 30 minutes et Nuits-Saint-Georges en 20 minutes par la D974. Circuits Grands Crus au forfait avec temps de dégustation inclus." },
        { title: "Route des Grands Crus demi-journée", desc: "Circuit Gevrey-Chambertin, Vougeot, Vosne-Romanée au forfait demi-journée. Nos chauffeurs connaissent les vignerons et les domaines ouverts sur rendez-vous." },
      ],
    },
    en: {
      intro: "Dijon-Ville station, in the heart of the Burgundy capital, welcomes 7 million passengers per year. Served by TGV to Paris in 1h40 and Lyon in 1h40, TER to Besancon, Auxerre and all of Burgundy, it is the ideal starting point for the Route des Grands Crus. Just 3-5 minutes from the Palais des Ducs, TaxiNeo awaits you at a fixed fare at the station exit.",
      description: "The official taxi zone at Dijon station is on the forecourt on the avenue Foch side — access reserved for taxis and off-limits to ride-hailing services. Dijon is the gateway to the Burgundy Route des Grands Crus: our drivers offer transfers to Beaune, Nuits-Saint-Georges, Gevrey-Chambertin and the Cote de Beaune. Book ahead during the grape harvest in September-October and the Gastronomie & Vin festival. Our drivers also cover transfers to Dijon-Bourgogne Airport and TGV connections.",
      metaDescription: "Taxi Dijon station: 7M passengers/year, TGV to Paris in 1h40. Route des Grands Crus of Burgundy, Beaune and harvest season. Guaranteed fixed fare. Book now.",
      heroSubtitle: "Burgundy capital with 7 million passengers yearly, Dijon connects Paris and Lyon in 1h40. TaxiNeo waits on avenue Foch at a fixed fare, with wine-tourism circuits to Beaune, Nuits-Saint-Georges and the Route des Grands Crus.",
      whyUs: [
        { title: "Avenue Foch, Palais des Ducs 3 min", desc: "Taxi rank on avenue Foch, 3 minutes from the Palais des Ducs and the covered market. Direct access without crossing the pedestrian streets of central Dijon." },
        { title: "Beaune & Nuits-Saint-Georges", desc: "Transfer to Beaune in 30 minutes and Nuits-Saint-Georges in 20 minutes via the D974. Grands Crus circuits at a fixed fare with tasting time included." },
        { title: "Route des Grands Crus half-day", desc: "Half-day circuit through Gevrey-Chambertin, Vougeot and Vosne-Romanee at a fixed fare. Our drivers know the winemakers and estates open by appointment." },
      ],
    }
  },
  "grenoble": {
    fr: {
      intro: "La Gare de Grenoble, capitale des Alpes françaises, accueille 5 millions de voyageurs par an. Desservie par le TGV vers Paris en 3h et les TER vers Lyon, Valence et Chambéry, elle est le point de départ des stations de ski de l'Isère : Alpe d'Huez, Chamrousse, les Deux Alpes. À 3-8 minutes du centre-ville et de la Bastille, TaxiNeo vous offre un chauffeur au forfait fixe avec véhicules équipés neige en hiver.",
      description: "Devant la gare de Grenoble, la zone taxi officielle est sur le parvis, côté rue Émile Gueymard — un emplacement réservé aux taxis que les VTC ne peuvent pas occuper. En hiver, la gare est le hub des transferts vers les stations de ski : nos véhicules sont systématiquement équipés de pneus neige et chaînes. Réservez impérativement à l'avance pendant les vacances de février et les week-ends de sports d'hiver. En été, nos chauffeurs proposent des transferts vers le Vercors et les parcs naturels. Disponibles du premier TGV au dernier TER.",
      metaDescription: "Taxi Gare de Grenoble : 5 millions de voyageurs/an, transfert vers l'Alpe d'Huez et les Deux Alpes. Pneus neige inclus, forfait ski fixe garanti. Réservez.",
      heroSubtitle: "Capitale des Alpes avec 5 millions de voyageurs par an, Grenoble est le point de départ pour l'Alpe d'Huez et les Deux Alpes. TaxiNeo vous attend au forfait fixe avec véhicules équipés pneus neige et chaînes en hiver, disponible du premier au dernier train.",
      whyUs: [
        { title: "Rue Émile Gueymard, Bastille 5 min", desc: "Station taxi rue Émile Gueymard, à 5 minutes du téléphérique de la Bastille et du centre-ville. Accès direct depuis les quais TGV sans traverser le parking." },
        { title: "Alpe d'Huez et Deux Alpes en 1h", desc: "Transfert vers l'Alpe d'Huez en 1h et les Deux Alpes en 1h10. Véhicules 4x4 disponibles avec pneus neige et chaînes systématiques de décembre à mars." },
        { title: "Vercors et parcs naturels en été", desc: "En été, nos chauffeurs proposent des transferts vers le Parc naturel du Vercors en 30 minutes et les lacs de montagne de Laffrey et Chamrousse." },
      ],
    },
    en: {
      intro: "Grenoble station, capital of the French Alps, welcomes 5 million passengers per year. Served by TGV to Paris in 3h and TER to Lyon, Valence and Chambery, it is the departure point for Isere ski resorts: Alpe d'Huez, Chamrousse, Les Deux Alpes. Just 3-8 minutes from the city centre and the Bastille, TaxiNeo provides a driver at a fixed fare with winter-equipped vehicles.",
      description: "In front of Grenoble station, the official taxi zone is on the forecourt on the rue Emile Gueymard side — a spot reserved for taxis that ride-hailing services cannot use. In winter, the station is the hub for ski resort transfers: our vehicles are systematically fitted with snow tyres and chains. Book well ahead during February holidays and winter sports weekends. In summer, our drivers offer transfers to the Vercors and natural parks. Available from the first TGV to the last TER.",
      metaDescription: "Taxi Grenoble station: 5M passengers/year, transfers to Alpe d'Huez and Les Deux Alpes ski resorts. Snow tyres included. Guaranteed fixed fare. Book online.",
      heroSubtitle: "Capital of the French Alps with 5 million passengers yearly, Grenoble is the departure point for Alpe d'Huez and Les Deux Alpes. TaxiNeo awaits at a fixed fare with vehicles fitted with snow tyres and chains in winter, available from first to last train.",
      whyUs: [
        { title: "Rue Emile Gueymard, Bastille 5 min", desc: "Taxi rank on rue Emile Gueymard, 5 minutes from the Bastille cable car and city centre. Direct access from TGV platforms without crossing the car park." },
        { title: "Alpe d'Huez & Deux Alpes in 1h", desc: "Transfer to Alpe d'Huez in 1h and Les Deux Alpes in 1h10. 4x4 vehicles available with snow tyres and chains fitted as standard from December to March." },
        { title: "Vercors & nature parks in summer", desc: "In summer, our drivers offer transfers to the Vercors Natural Park in 30 minutes and to the mountain lakes of Laffrey and Chamrousse." },
      ],
    }
  },
  "tours": {
    fr: {
      intro: "La Gare de Tours, en plein centre de cette ville ligérienne, accueille 7 millions de voyageurs par an. Desservie par le TGV vers Paris en 1h15, les TER et Intercités vers Nantes, Poitiers et Orléans, c'est la porte d'entrée des châteaux de la Loire : Chenonceau, Amboise, Villandry et Chambord. À 3-8 minutes de la place Plumereau, TaxiNeo vous offre un forfait fixe et un chauffeur pour découvrir la Touraine.",
      description: "La station de taxis officiels de la gare de Tours est sur le parvis, côté boulevard Heurteloup — un accès réservé aux taxis interdit aux VTC. Plaque tournante de l'œnotourisme et du patrimoine ligérien, Tours attire des visiteurs du monde entier. Nos chauffeurs proposent des circuits sur mesure vers les châteaux de la Loire, avec des forfaits à la demi-journée ou à la journée. Réservez à l'avance pour les week-ends de mai et juin, haute saison des visites de châteaux. Transferts vers l'aéroport Tours Val de Loire en 8-12 minutes.",
      metaDescription: "Taxi Gare de Tours : 7 millions de voyageurs/an, TGV Paris en 1h15. Circuits vers les châteaux de la Loire, Chenonceau et Amboise. Forfait fixe garanti 24h/24.",
      heroSubtitle: "Porte des châteaux de la Loire avec 7 millions de voyageurs par an, Tours est reliée à Paris en 1h15 par TGV. TaxiNeo propose des circuits sur mesure vers Chenonceau, Amboise et Villandry au forfait fixe, avec aide bagages et accueil à la gare.",
      whyUs: [
        { title: "Boulevard Heurteloup, Plumereau 5 min", desc: "Station taxi boulevard Heurteloup, à 5 minutes de la place Plumereau et du quartier médiéval. Accès direct sans détour par les rues piétonnes du centre." },
        { title: "Chenonceau et Amboise en 25 min", desc: "Transfert vers Chenonceau en 25 minutes et Amboise en 20 minutes. Nos chauffeurs proposent des circuits châteaux à la demi-journée ou journée complète au forfait." },
        { title: "Vignobles de Vouvray et Chinon", desc: "Les caves de Vouvray sont à 10 minutes, Chinon et Azay-le-Rideau à 30 minutes. Circuits œnotouristiques combinant châteaux et dégustations en Touraine." },
      ],
    },
    en: {
      intro: "Tours station, right in the centre of this Loire Valley city, welcomes 7 million passengers per year. Served by TGV to Paris in 1h15, TER and Intercites to Nantes, Poitiers and Orleans, it is the gateway to the Loire chateaux: Chenonceau, Amboise, Villandry and Chambord. Just 3-8 minutes from Place Plumereau, TaxiNeo offers a fixed fare and a driver to explore Touraine.",
      description: "The official taxi rank at Tours station is on the forecourt on the boulevard Heurteloup side — access reserved for taxis and off-limits to ride-hailing services. A hub for wine tourism and Loire heritage, Tours attracts visitors from around the world. Our drivers offer tailor-made circuits to the Loire chateaux with half-day or full-day packages. Book ahead for May and June weekends, peak season for chateau visits. Transfers to Tours Val de Loire Airport in 8-12 minutes.",
      metaDescription: "Taxi Tours station: 7M passengers/year, TGV to Paris in 1h15. Loire Valley chateau circuits to Chenonceau and Amboise. Guaranteed fixed fare. Book online now.",
      heroSubtitle: "Gateway to the Loire chateaux with 7 million passengers yearly, Tours connects to Paris in 1h15 by TGV. TaxiNeo offers bespoke circuits to Chenonceau, Amboise and Villandry at a fixed fare, with luggage help and station welcome.",
      whyUs: [
        { title: "Boulevard Heurteloup, Plumereau 5 min", desc: "Taxi rank on boulevard Heurteloup, 5 minutes from Place Plumereau and the medieval quarter. Direct access without navigating the pedestrian city centre." },
        { title: "Chenonceau & Amboise in 25 min", desc: "Transfer to Chenonceau in 25 minutes and Amboise in 20 minutes. Our drivers offer half-day or full-day chateau circuits at a fixed fare." },
        { title: "Vouvray & Chinon vineyards", desc: "The Vouvray caves are 10 minutes away, Chinon and Azay-le-Rideau 30 minutes. Wine-tourism circuits combining chateaux and tastings across Touraine." },
      ],
    }
  },
  "le-mans": {
    fr: {
      intro: "La Gare du Mans, nœud ferroviaire entre Paris, la Bretagne et les Pays de la Loire, accueille 5 millions de voyageurs par an. Desservie par le TGV vers Paris en 55 minutes et Rennes en 1h10, ainsi que par les TER régionaux, elle est aussi la porte d'accès au mythique Circuit des 24 Heures. En centre-ville, à 3-5 minutes de la Cité Plantagenêt, TaxiNeo vous garantit un transfert au forfait fixe.",
      description: "Devant la gare du Mans, la zone taxi officielle est sur le parvis sud — un accès réservé aux taxis interdit aux VTC. La gare connaît un pic massif en juin lors des 24 Heures du Mans : réserver un taxi est alors absolument indispensable. Nos chauffeurs assurent les transferts vers le circuit en 8-12 minutes et vers la Cité Plantagenêt en 3-5 minutes. Disponibles pour les premiers et derniers trains, ils sont aussi mobilisés pour les correspondances TGV vers la Bretagne. Le quartier gare offre des hôtels pratiques pour les étapes.",
      metaDescription: "Taxi Gare du Mans : 5 millions de voyageurs/an, TGV Paris en 55 min. Circuit des 24 Heures en 8 min, Cité Plantagenêt. Forfait fixe garanti, réservez en ligne.",
      heroSubtitle: "Nœud ferroviaire avec 5 millions de voyageurs par an, Le Mans relie Paris en 55 minutes par TGV. TaxiNeo vous attend parvis sud au forfait fixe, avec transferts vers le circuit des 24 Heures en 8 minutes, indispensable en juin.",
      whyUs: [
        { title: "Parvis sud, Cité Plantagenêt 3 min", desc: "Station taxi parvis sud, à 3 minutes de la Cité Plantagenêt et de la vieille ville médiévale. Prise en charge rapide dès l'arrivée des TGV depuis Paris en 55 minutes." },
        { title: "Circuit 24 Heures en 8 min", desc: "Transfert vers le Circuit des 24 Heures du Mans en 8 minutes par la route du circuit. En juin, nos chauffeurs sont mobilisés 24h/24 pendant la course légendaire." },
        { title: "Carrefour Bretagne-Pays de la Loire", desc: "Le Mans est au croisement des TGV vers Rennes (1h10), Nantes (1h20) et Angers (40 min). Nos chauffeurs assurent les correspondances entre les lignes ouest." },
      ],
    },
    en: {
      intro: "Le Mans station, a railway junction between Paris, Brittany and the Pays de la Loire, welcomes 5 million passengers per year. Served by TGV to Paris in 55 minutes and Rennes in 1h10, plus regional TER, it is also the gateway to the legendary 24 Hours of Le Mans circuit. In the city centre, 3-5 minutes from the Cite Plantagenet, TaxiNeo guarantees a fixed-fare transfer.",
      description: "In front of Le Mans station, the official taxi zone is on the south forecourt — access reserved for taxis and off-limits to ride-hailing services. The station sees a massive peak in June during the 24 Hours of Le Mans: booking a taxi is then absolutely essential. Our drivers provide transfers to the circuit in 8-12 minutes and to the Cite Plantagenet in 3-5 minutes. Available for the first and last trains, they are also deployed for TGV connections towards Brittany. The station area offers convenient hotels for stopovers.",
      metaDescription: "Taxi Le Mans station: 5M passengers/year, TGV to Paris in 55 min. Famous 24 Hours circuit in 8 min, Cite Plantagenet old town. Guaranteed fixed fare. Book now.",
      heroSubtitle: "Railway junction with 5 million passengers yearly, Le Mans connects Paris in 55 minutes by TGV. TaxiNeo waits on the south forecourt at a fixed fare, with transfers to the 24 Hours circuit in 8 minutes, essential in June.",
      whyUs: [
        { title: "South forecourt, Cite Plantagenet 3 min", desc: "Taxi rank on the south forecourt, 3 minutes from the Cite Plantagenet and medieval old town. Quick pickup upon arrival of Paris TGV services in 55 minutes." },
        { title: "24 Hours circuit in 8 min", desc: "Transfer to the 24 Hours of Le Mans circuit in 8 minutes via the circuit road. In June, our drivers are deployed around the clock during the legendary race." },
        { title: "Brittany-Loire crossroads", desc: "Le Mans sits at the crossroads of TGV lines to Rennes (1h10), Nantes (1h20) and Angers (40 min). Our drivers handle connections between the western lines." },
      ],
    }
  },
  "rouen-rive-droite": {
    fr: {
      intro: "La Gare de Rouen Rive-Droite, dans le centre historique de la capitale normande, accueille 8 millions de voyageurs par an. Desservie par les trains directs vers Paris Saint-Lazare en 1h20 et les TER et Intercités vers Le Havre, Caen et Dieppe, elle est à 3-5 minutes de la Cathédrale peinte par Monet. TaxiNeo vous offre un transfert au forfait fixe depuis cette gare au charme typiquement normand.",
      description: "La station de taxis officiels de Rouen Rive-Droite est sur le parvis, rue Jeanne d'Arc — un accès exclusif interdit aux VTC. Capitale de la Normandie, Rouen est aussi le point de départ idéal pour Honfleur, Étretat et Giverny, accessibles uniquement en taxi ou en voiture. Nos chauffeurs proposent des transferts et circuits vers ces destinations emblématiques. Réservez à l'avance pour les week-ends de l'Armada de Rouen et les grandes marées. Disponibles pour le premier train de 5h30 vers Paris comme pour les retours de soirée.",
      metaDescription: "Taxi Gare de Rouen : 8 millions de voyageurs/an, Paris en 1h20. Circuits vers Honfleur, Étretat et Giverny. Forfait fixe garanti, chauffeur dès 5h30. Réservez.",
      heroSubtitle: "Capitale normande avec 8 millions de voyageurs par an, Rouen est reliée à Paris en 1h20. TaxiNeo vous attend rue Jeanne d'Arc au forfait fixe, avec des circuits vers Honfleur, Étretat et Giverny, destinations accessibles uniquement en taxi.",
      whyUs: [
        { title: "Rue Jeanne d'Arc, Cathédrale 3 min", desc: "Station taxi rue Jeanne d'Arc, à 3 minutes de la Cathédrale de Monet et du Gros-Horloge. Prise en charge immédiate dans le cœur historique de la ville." },
        { title: "Honfleur et Étretat en taxi seul", desc: "Honfleur est à 50 minutes, Étretat à 1h10. Ces destinations ne sont pas desservies par le train : le taxi est le seul moyen de transport direct depuis Rouen." },
        { title: "Giverny et jardins de Monet 45 min", desc: "Transfert vers Giverny et les jardins de Claude Monet en 45 minutes par l'A13. Circuit impressionniste au forfait avec temps de visite inclus." },
      ],
    },
    en: {
      intro: "Rouen Rive-Droite station, in the historic centre of the Norman capital, welcomes 8 million passengers per year. Served by direct trains to Paris Saint-Lazare in 1h20, plus TER and Intercites to Le Havre, Caen and Dieppe, it is 3-5 minutes from the Cathedral painted by Monet. TaxiNeo offers a fixed-fare transfer from this station with its typically Norman charm.",
      description: "The official taxi rank at Rouen Rive-Droite is on the forecourt on rue Jeanne d'Arc — exclusive access off-limits to ride-hailing services. Capital of Normandy, Rouen is also the ideal starting point for Honfleur, Etretat and Giverny, accessible only by taxi or car. Our drivers offer transfers and circuits to these iconic destinations. Book ahead for the Rouen Armada weekends and spring tides. Available from the first train at 5:30am to Paris through to evening returns.",
      metaDescription: "Taxi Rouen station: 8M passengers/year, Paris in 1h20. Day trips to Honfleur, Etretat cliffs and Giverny gardens. Fixed fare, driver from 5:30am. Book now.",
      heroSubtitle: "Norman capital with 8 million passengers yearly, Rouen connects to Paris in 1h20. TaxiNeo waits on rue Jeanne d'Arc at a fixed fare, with circuits to Honfleur, Etretat and Giverny, destinations accessible only by taxi.",
      whyUs: [
        { title: "Rue Jeanne d'Arc, Cathedral 3 min", desc: "Taxi rank on rue Jeanne d'Arc, 3 minutes from Monet's Cathedral and the Gros-Horloge. Immediate pickup in the historic heart of the city." },
        { title: "Honfleur & Etretat by taxi only", desc: "Honfleur is 50 minutes away, Etretat 1h10. These destinations are not served by train: a taxi is the only direct transport from Rouen." },
        { title: "Giverny & Monet's gardens 45 min", desc: "Transfer to Giverny and Claude Monet's gardens in 45 minutes via the A13. Impressionist circuit at a fixed fare with visiting time included." },
      ],
    }
  },
  "toulon": {
    fr: {
      intro: "La Gare de Toulon, au centre de cette ville portuaire méditerranéenne, accueille 3 millions de voyageurs par an. Desservie par le TGV vers Paris en 4h, Marseille en 1h, les TER et Intercités vers Nice et la Côte d'Azur, elle est aussi à 5-8 minutes du port d'où partent les ferries vers la Corse. TaxiNeo vous propose un transfert au forfait fixe, idéal pour rejoindre les îles d'Or ou Bandol.",
      description: "Devant la gare de Toulon, la zone taxi officielle est sur le boulevard de Tessé — un emplacement réservé aux taxis que les VTC ne peuvent pas utiliser. La gare est stratégique pour les correspondances train-ferry vers Bastia, Ajaccio et Porto-Vecchio. Nos chauffeurs connaissent les horaires des ferries et ajustent les transferts vers le port en 5-8 minutes. Réservez à l'avance en été pour les transferts vers Hyères et Porquerolles. Nous assurons aussi les trajets vers Saint-Tropez en 1h-1h15, destination très demandée en haute saison.",
      metaDescription: "Taxi Gare de Toulon : 3 millions de voyageurs/an, port ferry pour la Corse en 5 min. Transfert Porquerolles et Saint-Tropez. Forfait fixe garanti, réservez.",
      heroSubtitle: "Port méditerranéen avec 3 millions de voyageurs par an, Toulon relie le port des ferries Corse en 5 minutes. TaxiNeo assure vos correspondances train-ferry au forfait fixe et vos transferts vers Porquerolles, Hyères ou Saint-Tropez.",
      whyUs: [
        { title: "Boulevard de Tessé, port à 5 min", desc: "Station taxi boulevard de Tessé, à 5 minutes du port des ferries vers la Corse. Nos chauffeurs synchronisent les transferts avec les horaires Corsica Linea et La Méridionale." },
        { title: "Porquerolles et îles d'Or 30 min", desc: "Transfert vers le port d'embarquement de Porquerolles à la Tour Fondue en 30 minutes. Nos chauffeurs connaissent les parkings relais et les horaires de navettes maritimes." },
        { title: "Saint-Tropez en 1h par la côte", desc: "Saint-Tropez est à 1h par la D98 côtière. En été, nos chauffeurs évitent l'A57 saturée et empruntent les routes de l'arrière-pays varois pour gagner du temps." },
      ],
    },
    en: {
      intro: "Toulon station, in the centre of this Mediterranean port city, welcomes 3 million passengers per year. Served by TGV to Paris in 4h, Marseille in 1h, TER and Intercites to Nice and the Cote d'Azur, it is also 5-8 minutes from the port where ferries depart for Corsica. TaxiNeo offers a fixed-fare transfer, ideal for reaching the Golden Islands or Bandol.",
      description: "In front of Toulon station, the official taxi zone is on boulevard de Tesse — a spot reserved for taxis that ride-hailing services cannot use. The station is strategic for train-ferry connections to Bastia, Ajaccio and Porto-Vecchio. Our drivers know the ferry schedules and adjust transfers to the port in 5-8 minutes. Book ahead in summer for transfers to Hyeres and Porquerolles. We also handle trips to Saint-Tropez in 1h-1h15, a highly sought-after destination in peak season.",
      metaDescription: "Taxi Toulon station: 3M passengers/year, Corsica ferry port in just 5 min. Transfers to Porquerolles island and Saint-Tropez. Guaranteed fixed fare. Book now.",
      heroSubtitle: "Mediterranean port with 3 million passengers yearly, Toulon connects to the Corsica ferry terminal in 5 minutes. TaxiNeo handles your train-ferry connections at a fixed fare plus transfers to Porquerolles, Hyeres or Saint-Tropez.",
      whyUs: [
        { title: "Boulevard de Tesse, port 5 min", desc: "Taxi rank on boulevard de Tesse, 5 minutes from the Corsica ferry port. Our drivers synchronise transfers with Corsica Linea and La Meridionale schedules." },
        { title: "Porquerolles & Golden Islands 30 min", desc: "Transfer to the Porquerolles embarkation point at Tour Fondue in 30 minutes. Our drivers know the park-and-ride options and maritime shuttle timetables." },
        { title: "Saint-Tropez in 1h via the coast", desc: "Saint-Tropez is 1h via the coastal D98. In summer, our drivers avoid the congested A57 and take the Var hinterland roads to save time." },
      ],
    }
  },
  "clermont-ferrand": {
    fr: {
      intro: "La Gare de Clermont-Ferrand, au cœur de la capitale auvergnate et siège de Michelin, accueille 4 millions de voyageurs par an. Desservie par les Intercités vers Paris en 3h30 et les TER vers Lyon, Saint-Étienne et Vichy, elle attend encore sa future LGV. Située à 3-5 minutes de la Place de Jaude, TaxiNeo vous offre un transfert forfaitaire vers votre destination en Auvergne, au pied des volcans.",
      description: "La zone taxi officielle de la gare de Clermont-Ferrand est sur le parvis, côté avenue de l'Union Soviétique — un accès exclusif interdit aux VTC. En l'absence de TGV, les temps de trajet depuis Paris sont longs et les arrivées se concentrent sur certains créneaux : nos chauffeurs s'y adaptent. Transferts vers Vulcania en 25-30 minutes, le Puy de Dôme en 20-25 minutes et les stations thermales de Vichy et La Bourboule. Réservez à l'avance pendant les festivals de courts métrages et les événements Michelin.",
      metaDescription: "Taxi Clermont-Ferrand : 4 millions de voyageurs/an, Intercités vers Paris en 3h30. Vulcania en 25 min, Puy de Dôme en 20 min. Forfait fixe garanti. Réservez.",
      heroSubtitle: "Capitale auvergnate au pied des volcans avec 4 millions de voyageurs par an, Clermont-Ferrand relie Paris en 3h30. TaxiNeo propose des transferts au forfait fixe vers Vulcania en 25 minutes, le Puy de Dôme et les thermes de Vichy.",
      whyUs: [
        { title: "Avenue de l'Union Soviétique, Jaude 3 min", desc: "Station taxi avenue de l'Union Soviétique, à 3 minutes de la Place de Jaude et du centre piétonnier. Accès direct depuis les quais Intercités sans détour." },
        { title: "Vulcania et Puy de Dôme 25 min", desc: "Transfert vers Vulcania en 25 minutes et le sommet du Puy de Dôme en 20 minutes par la D941. Nos chauffeurs connaissent les routes sinueuses de la Chaîne des Puys." },
        { title: "Thermes de Vichy et La Bourboule", desc: "Vichy est à 35 minutes, La Bourboule à 50 minutes par l'A89. Forfait fixe pour les curistes, service porte-à-porte depuis le quai des Intercités." },
      ],
    },
    en: {
      intro: "Clermont-Ferrand station, in the heart of the Auvergne capital and Michelin headquarters, welcomes 4 million passengers per year. Served by Intercites to Paris in 3h30 and TER to Lyon, Saint-Etienne and Vichy, it still awaits its future high-speed line. Just 3-5 minutes from Place de Jaude, TaxiNeo offers a flat-rate transfer to your Auvergne destination, at the foot of the volcanoes.",
      description: "The official taxi zone at Clermont-Ferrand station is on the forecourt on the avenue de l'Union Sovietique side — exclusive access off-limits to ride-hailing services. Without a TGV connection, journey times from Paris are long and arrivals cluster at certain times: our drivers adapt accordingly. Transfers to Vulcania in 25-30 minutes, Puy de Dome in 20-25 minutes and the spa towns of Vichy and La Bourboule. Book ahead during short film festivals and Michelin events.",
      metaDescription: "Taxi Clermont-Ferrand: 4M passengers/year, Intercites to Paris in 3h30. Vulcania theme park 25 min, Puy de Dome volcano 20 min. Guaranteed fixed fare. Book now.",
      heroSubtitle: "Auvergne capital at the foot of the volcanoes with 4 million passengers yearly, Clermont-Ferrand connects to Paris in 3h30. TaxiNeo offers fixed-fare transfers to Vulcania in 25 minutes, Puy de Dome and the Vichy spa town.",
      whyUs: [
        { title: "Avenue de l'Union Sovietique, Jaude 3 min", desc: "Taxi rank on avenue de l'Union Sovietique, 3 minutes from Place de Jaude and the pedestrian centre. Direct access from the Intercites platforms without detour." },
        { title: "Vulcania & Puy de Dome 25 min", desc: "Transfer to Vulcania in 25 minutes and the summit of Puy de Dome in 20 minutes via the D941. Our drivers know the winding roads of the Chaine des Puys." },
        { title: "Vichy & La Bourboule spa towns", desc: "Vichy is 35 minutes away, La Bourboule 50 minutes via the A89. Fixed fare for spa guests, door-to-door service from the Intercites platform." },
      ],
    }
  },
  "saint-etienne-chateaucreux": {
    fr: {
      intro: "La Gare de Saint-Étienne Châteaucreux, au centre de la capitale du design, accueille 4 millions de voyageurs par an. Desservie principalement par les TER vers Lyon en 50 minutes, elle relie aussi Saint-Étienne à Clermont-Ferrand et Grenoble. Située à 3-5 minutes de la Place Jean Jaurès et du Stade Geoffroy-Guichard, TaxiNeo vous garantit un transfert au forfait fixe dans cette ville au caractère industriel et créatif.",
      description: "Devant la gare de Saint-Étienne Châteaucreux, la zone taxi officielle est sur le parvis — un emplacement exclusif interdit aux VTC. La gare est un point de passage important pour les supporters de l'ASSE les jours de match, avec un afflux massif vers le stade Geoffroy-Guichard. Nos chauffeurs assurent ce transfert en 5-8 minutes. Réservez impérativement à l'avance les jours de derby stéphanois. Nous proposons aussi les transferts vers l'aéroport Lyon-Saint-Exupéry en 50 minutes et vers la Cité du Design pour les visiteurs professionnels.",
      metaDescription: "Taxi Saint-Étienne Châteaucreux : 4 millions de voyageurs/an, TER Lyon en 50 min. Stade Geoffroy-Guichard 5 min, Cité du Design. Forfait fixe garanti. Réservez.",
      heroSubtitle: "Capitale du design avec 4 millions de voyageurs par an, Saint-Étienne relie Lyon en 50 minutes par TER. TaxiNeo vous attend au forfait fixe avec transferts vers le stade Geoffroy-Guichard en 5 minutes et l'aéroport Saint-Exupéry en 50 minutes.",
      whyUs: [
        { title: "Stade Geoffroy-Guichard en 5 min", desc: "Transfert vers le stade ASSE en 5 minutes par la rue Bergson. Nos chauffeurs sont renforcés les jours de derby et de match européen, réservation anticipée indispensable." },
        { title: "Cité du Design et centre créatif", desc: "La Cité du Design est à 8 minutes, idéale pour les visiteurs professionnels et les étudiants en design. Transfert vers le campus Manufacture en 5 minutes." },
        { title: "Lyon Saint-Exupéry en 50 min", desc: "Transfert direct vers l'aéroport Lyon-Saint-Exupéry en 50 minutes par l'A47 et l'A7. Forfait fixe, alternative au TER+Rhônexpress plus lent." },
      ],
    },
    en: {
      intro: "Saint-Etienne Chateaucreux station, in the centre of the design capital, welcomes 4 million passengers per year. Primarily served by TER to Lyon in 50 minutes, it also connects Saint-Etienne to Clermont-Ferrand and Grenoble. Just 3-5 minutes from Place Jean Jaures and Stade Geoffroy-Guichard, TaxiNeo guarantees a fixed-fare transfer in this city of industrial and creative character.",
      description: "In front of Saint-Etienne Chateaucreux station, the official taxi zone is on the forecourt — an exclusive spot off-limits to ride-hailing services. The station is a key transit point for ASSE supporters on match days, with a massive surge towards Stade Geoffroy-Guichard. Our drivers make this transfer in 5-8 minutes. Book well ahead on Stephanois derby days. We also offer transfers to Lyon-Saint-Exupery Airport in 50 minutes and to the Cite du Design for professional visitors.",
      metaDescription: "Taxi Saint-Etienne Chateaucreux: 4M passengers/year, TER to Lyon in 50 min. Geoffroy-Guichard ASSE stadium in 5 min, Cite du Design. Guaranteed fare. Book.",
      heroSubtitle: "Design capital with 4 million passengers yearly, Saint-Etienne connects to Lyon in 50 minutes by TER. TaxiNeo awaits at a fixed fare with transfers to Stade Geoffroy-Guichard in 5 minutes and Saint-Exupery Airport in 50 minutes.",
      whyUs: [
        { title: "Stade Geoffroy-Guichard in 5 min", desc: "Transfer to the ASSE stadium in 5 minutes via rue Bergson. Our drivers are reinforced on derby and European match days; advance booking essential." },
        { title: "Cite du Design & creative campus", desc: "The Cite du Design is 8 minutes away, ideal for professional visitors and design students. Transfer to the Manufacture campus in 5 minutes." },
        { title: "Lyon Saint-Exupery in 50 min", desc: "Direct transfer to Lyon-Saint-Exupery Airport in 50 minutes via the A47 and A7. Fixed fare, a faster alternative to the TER + Rhonexpress combination." },
      ],
    }
  },
  "angers-saint-laud": {
    fr: {
      intro: "La Gare d'Angers Saint-Laud, rénovée et modernisée en centre-ville, accueille 5 millions de voyageurs par an. Desservie par le TGV vers Paris en 1h30 et les TER vers Nantes, Le Mans et Tours, elle est la porte de l'Anjou et de ses vignobles. À 3-5 minutes du Château d'Angers et de la tapisserie de l'Apocalypse, TaxiNeo vous propose un chauffeur au forfait fixe pour explorer la douceur angevine.",
      description: "Devant la gare d'Angers Saint-Laud, la zone taxi officielle est sur le parvis rénové — un emplacement exclusif que les VTC ne peuvent pas utiliser. Hub important sur l'axe Paris-Nantes, la gare connaît des pics de fréquentation en fin de semaine. Nos chauffeurs assurent les transferts vers Saumur et ses caves troglodytes en 30-40 minutes, vers les vignobles d'Anjou et vers l'aéroport Angers-Marcé en 15-20 minutes. Réservez à l'avance pendant les Fêtes des Vins d'Anjou et le festival Accroche-Cœurs en septembre.",
      metaDescription: "Taxi Angers Saint-Laud : 5 millions de voyageurs/an, TGV Paris en 1h30. Saumur et châteaux de la Loire en 30 min, vignobles d'Anjou. Forfait fixe garanti.",
      heroSubtitle: "Porte de l'Anjou avec 5 millions de voyageurs par an, Angers relie Paris en 1h30 par TGV. TaxiNeo vous attend sur le parvis rénové au forfait fixe, avec transferts vers Saumur et ses caves troglodytes en 30 minutes ou les vignobles d'Anjou.",
      whyUs: [
        { title: "Parvis rénové, Château d'Angers 3 min", desc: "Station taxi sur le parvis modernisé, à 3 minutes du Château d'Angers et de la tapisserie de l'Apocalypse. Prise en charge immédiate face à la sortie principale." },
        { title: "Saumur et caves troglodytes 30 min", desc: "Transfert vers Saumur et ses caves troglodytes en 30 minutes par la D952 le long de la Loire. Forfait fixe incluant l'attente pour les visites de caves." },
        { title: "Vignobles d'Anjou et Savennières", desc: "Les vignobles de Savennières sont à 15 minutes, le Layon à 25 minutes. Circuits œnotouristiques sur mesure avec dégustations de Coteaux-du-Layon et Quarts-de-Chaume." },
      ],
    },
    en: {
      intro: "Angers Saint-Laud station, renovated and modernised in the city centre, welcomes 5 million passengers per year. Served by TGV to Paris in 1h30 and TER to Nantes, Le Mans and Tours, it is the gateway to Anjou and its vineyards. Just 3-5 minutes from the Chateau d'Angers and the Apocalypse Tapestry, TaxiNeo offers a driver at a fixed fare to explore the gentle Anjou lifestyle.",
      description: "In front of Angers Saint-Laud station, the official taxi zone is on the renovated forecourt — an exclusive spot ride-hailing services cannot use. An important hub on the Paris-Nantes line, the station sees peak traffic at weekends. Our drivers provide transfers to Saumur and its troglodyte caves in 30-40 minutes, to the Anjou vineyards and to Angers-Marce Airport in 15-20 minutes. Book ahead during the Anjou Wine Festivals and the Accroche-Coeurs festival in September.",
      metaDescription: "Taxi Angers Saint-Laud: 5M passengers/year, TGV to Paris in 1h30. Saumur and Loire chateaux 30 min, Anjou vineyards nearby. Guaranteed fixed fare. Book online.",
      heroSubtitle: "Gateway to Anjou with 5 million passengers yearly, Angers connects to Paris in 1h30 by TGV. TaxiNeo waits on the renovated forecourt at a fixed fare, with transfers to Saumur and its troglodyte caves in 30 minutes or the Anjou vineyards.",
      whyUs: [
        { title: "Renovated forecourt, Chateau 3 min", desc: "Taxi rank on the modernised forecourt, 3 minutes from the Chateau d'Angers and the Apocalypse Tapestry. Immediate pickup facing the main exit." },
        { title: "Saumur & troglodyte caves 30 min", desc: "Transfer to Saumur and its troglodyte caves in 30 minutes via the D952 along the Loire. Fixed fare including waiting time for cave visits." },
        { title: "Anjou & Savennieres vineyards", desc: "The Savennieres vineyards are 15 minutes away, the Layon valley 25 minutes. Bespoke wine-tourism circuits with Coteaux-du-Layon and Quarts-de-Chaume tastings." },
      ],
    }
  },
  "poitiers": {
    fr: {
      intro: "La Gare de Poitiers, en plein centre de cette ville universitaire millénaire, accueille 4 millions de voyageurs par an. Desservie par le TGV vers Paris en 1h20 et Bordeaux en 1h40, les TER vers Tours, Limoges et La Rochelle, elle est surtout connue pour sa proximité avec le Futuroscope, à seulement 12 km. TaxiNeo vous garantit un transfert forfaitaire avec chauffeur à la sortie, boulevard du Grand Cerf.",
      description: "La station de taxis officiels de la gare de Poitiers est boulevard du Grand Cerf — un accès direct exclusif interdit aux VTC. Le Futuroscope attire des familles par milliers : nos chauffeurs assurent le transfert gare-parc en 10-15 minutes avec des véhicules pouvant accueillir poussettes et bagages. Réservez à l'avance pendant les vacances scolaires et les week-ends, surtout au printemps. En centre-ville, nos taxis desservent aussi le patrimoine roman exceptionnel de Poitiers : Notre-Dame-la-Grande, le Baptistère Saint-Jean.",
      metaDescription: "Taxi Gare de Poitiers : 4 millions de voyageurs/an, TGV Paris en 1h20. Futuroscope en 10 min, familles et poussettes bienvenues. Forfait fixe garanti. Réservez.",
      heroSubtitle: "Ville millénaire avec 4 millions de voyageurs par an, Poitiers relie Paris en 1h20 par TGV. TaxiNeo vous attend boulevard du Grand Cerf au forfait fixe, avec transfert Futuroscope en 10 minutes dans des véhicules adaptés aux familles.",
      whyUs: [
        { title: "Boulevard du Grand Cerf, centre 5 min", desc: "Station taxi boulevard du Grand Cerf, à 5 minutes du centre-ville et de l'église Notre-Dame-la-Grande. Prise en charge directe face à la gare TGV." },
        { title: "Futuroscope en 10 min, familles", desc: "Le Futuroscope est à 10 minutes par la N10. Véhicules adaptés aux familles avec poussettes et bagages, sièges enfants disponibles sur simple demande." },
        { title: "Patrimoine roman exceptionnel", desc: "Nos chauffeurs proposent des circuits vers le baptistère Saint-Jean (5 min), l'abbaye de Saint-Savin (40 min, UNESCO) et les vallées de la Vienne et du Clain." },
      ],
    },
    en: {
      intro: "Poitiers station, in the centre of this thousand-year-old university city, welcomes 4 million passengers per year. Served by TGV to Paris in 1h20 and Bordeaux in 1h40, TER to Tours, Limoges and La Rochelle, it is best known for being close to Futuroscope, just 12 km away. TaxiNeo guarantees a flat-rate transfer with a driver at the exit on boulevard du Grand Cerf.",
      description: "The official taxi rank at Poitiers station is on boulevard du Grand Cerf — exclusive direct access off-limits to ride-hailing services. Futuroscope attracts thousands of families: our drivers handle the station-to-park transfer in 10-15 minutes with vehicles accommodating pushchairs and luggage. Book ahead during school holidays and weekends, especially in spring. In the city centre, our taxis also serve Poitiers' exceptional Romanesque heritage: Notre-Dame-la-Grande and the Baptistere Saint-Jean.",
      metaDescription: "Taxi Poitiers station: 4M passengers/year, TGV to Paris in 1h20. Futuroscope theme park in 10 min, family-friendly vehicles. Guaranteed fixed fare. Book online.",
      heroSubtitle: "Thousand-year-old city with 4 million passengers yearly, Poitiers connects to Paris in 1h20 by TGV. TaxiNeo waits on boulevard du Grand Cerf at a fixed fare, with Futuroscope transfers in 10 minutes in family-friendly vehicles.",
      whyUs: [
        { title: "Boulevard du Grand Cerf, centre 5 min", desc: "Taxi rank on boulevard du Grand Cerf, 5 minutes from the city centre and Notre-Dame-la-Grande church. Direct pickup facing the TGV station." },
        { title: "Futuroscope in 10 min, families", desc: "Futuroscope is 10 minutes via the N10. Family-friendly vehicles with pushchair and luggage space, child seats available on simple request." },
        { title: "Exceptional Romanesque heritage", desc: "Our drivers offer circuits to the Baptistere Saint-Jean (5 min), the Abbey of Saint-Savin (40 min, UNESCO) and the Vienne and Clain valleys." },
      ],
    }
  },
  "perpignan": {
    fr: {
      intro: "La Gare de Perpignan, déclarée « centre du monde » par Salvador Dalí, accueille 2 millions de voyageurs par an. Desservie par le TGV vers Paris en 5h et Barcelone en 1h30, les TER vers Montpellier, Toulouse et la côte catalane, elle est la dernière grande gare française avant l'Espagne. À 3-5 minutes du centre-ville et du Castillet, TaxiNeo vous attend au forfait fixe pour votre arrivée en terre catalane.",
      description: "La zone taxi officielle de la gare de Perpignan est sur le parvis, côté avenue du Général de Gaulle — un emplacement réservé aux taxis interdit aux VTC. Carrefour franco-espagnol, la gare voit passer des voyageurs internationaux toute l'année. Nos chauffeurs proposent des transferts vers Collioure et la Côte Vermeille en 18-25 minutes, vers les plages de Canet-en-Roussillon et vers la frontière espagnole. Réservez à l'avance en été et pendant les Fêtes de la Saint-Jean, quand la ville s'anime de célébrations catalanes.",
      metaDescription: "Taxi Perpignan : 2 millions de voyageurs/an, TGV vers Barcelone en 1h30. Collioure en 18 min, Côte Vermeille. Forfait fixe transfrontalier garanti. Réservez.",
      heroSubtitle: "Dernière grande gare avant l'Espagne avec 2 millions de voyageurs par an, Perpignan dessert Barcelone en 1h30 par TGV. TaxiNeo assure vos transferts vers Collioure et la Côte Vermeille en 18 minutes au forfait fixe, y compris vers la frontière.",
      whyUs: [
        { title: "Avenue du Général de Gaulle, Castillet 3 min", desc: "Station taxi avenue du Général de Gaulle, à 3 minutes du Castillet et du centre catalan. Prise en charge immédiate à la sortie des TGV vers Barcelone." },
        { title: "Collioure et Côte Vermeille 18 min", desc: "Transfert vers Collioure en 18 minutes et Port-Vendres en 22 minutes par la D914 côtière. Forfait fixe incluant l'accès aux criques de la Côte Vermeille." },
        { title: "Frontière espagnole au forfait", desc: "Transfert vers Le Perthus et la frontière en 25 minutes, Figueras en 40 minutes. Forfait transfrontalier fixe, idéal pour les voyageurs en correspondance TGV-Espagne." },
      ],
    },
    en: {
      intro: "Perpignan station, declared the 'centre of the world' by Salvador Dali, welcomes 2 million passengers per year. Served by TGV to Paris in 5h and Barcelona in 1h30, TER to Montpellier, Toulouse and the Catalan coast, it is the last major French station before Spain. Just 3-5 minutes from the city centre and the Castillet, TaxiNeo awaits you at a fixed fare for your arrival in Catalan country.",
      description: "The official taxi zone at Perpignan station is on the forecourt on the avenue du General de Gaulle side — a spot reserved for taxis and off-limits to ride-hailing services. A Franco-Spanish crossroads, the station sees international travellers year-round. Our drivers offer transfers to Collioure and the Cote Vermeille in 18-25 minutes, to the beaches of Canet-en-Roussillon and to the Spanish border. Book ahead in summer and during the Saint-Jean celebrations when the city comes alive with Catalan festivities.",
      metaDescription: "Taxi Perpignan: 2M passengers/year, TGV to Barcelona in 1h30. Collioure in 18 min, Cote Vermeille coast. Franco-Spanish cross-border fixed fare. Book online.",
      heroSubtitle: "Last major station before Spain with 2 million passengers yearly, Perpignan serves Barcelona in 1h30 by TGV. TaxiNeo provides transfers to Collioure and the Cote Vermeille in 18 minutes at a fixed fare, including cross-border trips.",
      whyUs: [
        { title: "Avenue du General de Gaulle, Castillet 3 min", desc: "Taxi rank on avenue du General de Gaulle, 3 minutes from the Castillet and Catalan centre. Immediate pickup from the Barcelona TGV exit." },
        { title: "Collioure & Cote Vermeille 18 min", desc: "Transfer to Collioure in 18 minutes and Port-Vendres in 22 minutes via the coastal D914. Fixed fare including access to the Cote Vermeille coves." },
        { title: "Spanish border at fixed fare", desc: "Transfer to Le Perthus and the border in 25 minutes, Figueras in 40 minutes. Fixed cross-border fare, ideal for TGV-to-Spain connecting travellers." },
      ],
    }
  },
  "caen": {
    fr: {
      intro: "La Gare de Caen, au centre de la capitale bas-normande, accueille 4 millions de voyageurs par an. Desservie par les trains directs vers Paris Saint-Lazare en 2h et les TER et Intercités vers Rouen, Cherbourg et Rennes, elle est aussi le point de départ vers les plages du Débarquement et le port de Ouistreham pour les ferries vers l'Angleterre. TaxiNeo vous offre un forfait fixe avec chauffeur à la sortie de la gare.",
      description: "Devant la gare de Caen, la station de taxis officiels est place de la Gare — un accès direct exclusif interdit aux VTC. La gare est un hub essentiel pour le tourisme de mémoire : nos chauffeurs proposent des circuits vers Omaha Beach, Utah Beach, Arromanches et le cimetière américain de Colleville. Réservez à l'avance pour le 6 juin et les commémorations du Débarquement. Les transferts vers le ferry de Ouistreham (12-18 min) et vers Deauville-Trouville (50 min) sont aussi très demandés en été.",
      metaDescription: "Taxi Gare de Caen : 4 millions de voyageurs/an, Paris en 2h. Circuits des plages du Débarquement en Normandie, ferry Ouistreham 12 min. Forfait fixe garanti.",
      heroSubtitle: "Capitale bas-normande avec 4 millions de voyageurs par an, Caen est le départ vers les plages du Débarquement. TaxiNeo propose des circuits vers Omaha Beach et Arromanches au forfait fixe, ainsi que les transferts ferry Ouistreham en 12 minutes.",
      whyUs: [
        { title: "Place de la Gare, Château 5 min", desc: "Station taxi place de la Gare, à 5 minutes du Château de Guillaume le Conquérant et du Mémorial. Prise en charge directe face à la sortie des trains Paris-Caen." },
        { title: "Omaha Beach et plages du D-Day", desc: "Circuit plages du Débarquement : Omaha Beach en 40 min, Arromanches en 30 min, cimetière américain de Colleville en 45 min. Forfait journée avec guide chauffeur." },
        { title: "Ferry Ouistreham-Portsmouth 12 min", desc: "Transfert vers le terminal ferry de Ouistreham en 12 minutes par la D515. Correspondance train-ferry optimisée pour les traversées Brittany Ferries." },
      ],
    },
    en: {
      intro: "Caen station, in the centre of the Lower Normandy capital, welcomes 4 million passengers per year. Served by direct trains to Paris Saint-Lazare in 2h, TER and Intercites to Rouen, Cherbourg and Rennes, it is also the departure point for the D-Day beaches and the port of Ouistreham for ferries to England. TaxiNeo offers a fixed fare with a driver at the station exit.",
      description: "In front of Caen station, the official taxi rank is on place de la Gare — exclusive direct access off-limits to ride-hailing services. The station is an essential hub for memorial tourism: our drivers offer circuits to Omaha Beach, Utah Beach, Arromanches and the American Cemetery at Colleville. Book well ahead for June 6th and D-Day commemorations. Transfers to the Ouistreham ferry (12-18 min) and to Deauville-Trouville (50 min) are also in high demand in summer.",
      metaDescription: "Taxi Caen station: 4M passengers/year, Paris in 2h. D-Day beach circuits across Normandy, Ouistreham ferry port in 12 min. Guaranteed fixed fare. Book online.",
      heroSubtitle: "Lower Normandy capital with 4 million passengers yearly, Caen is the departure point for D-Day beaches. TaxiNeo offers circuits to Omaha Beach and Arromanches at a fixed fare, plus Ouistreham ferry transfers in 12 minutes.",
      whyUs: [
        { title: "Place de la Gare, Castle 5 min", desc: "Taxi rank on place de la Gare, 5 minutes from William the Conqueror's Castle and the Memorial. Direct pickup facing the Paris-Caen train exit." },
        { title: "Omaha Beach & D-Day beaches", desc: "D-Day beach circuit: Omaha Beach in 40 min, Arromanches in 30 min, American Cemetery at Colleville in 45 min. Full-day package with driver-guide." },
        { title: "Ouistreham-Portsmouth ferry 12 min", desc: "Transfer to Ouistreham ferry terminal in 12 minutes via the D515. Optimised train-to-ferry connection for Brittany Ferries crossings." },
      ],
    }
  },
  "limoges-benedictins": {
    fr: {
      intro: "La Gare de Limoges-Bénédictins, souvent élue plus belle gare de France grâce à son dôme et son campanile Art Déco, accueille 3 millions de voyageurs par an. Desservie par les Intercités vers Paris en 3h et les TER vers Toulouse, Clermont-Ferrand et Brive, elle est à 3-5 minutes du centre de la capitale de la porcelaine. TaxiNeo vous attend au forfait fixe au pied de ce joyau architectural.",
      description: "La zone taxi officielle de Limoges-Bénédictins est sur le parvis, au pied de l'escalier monumental — un accès réservé aux taxis interdit aux VTC. La beauté de la gare attire de nombreux visiteurs en elle-même. Nos chauffeurs proposent des transferts vers le village martyr d'Oradour-sur-Glane en 20-25 minutes, le musée de la Porcelaine et l'aéroport Limoges-Bellegarde en 8-12 minutes. Réservez à l'avance pour les Journées du Patrimoine quand la gare accueille un afflux de visiteurs et pour les salons de la porcelaine.",
      metaDescription: "Taxi Limoges-Bénédictins : plus belle gare de France, 3 millions de voyageurs/an. Oradour-sur-Glane en 20 min, aéroport en 8 min. Forfait fixe garanti 24h/24.",
      heroSubtitle: "Plus belle gare de France avec son dôme Art Déco et 3 millions de voyageurs par an. TaxiNeo vous attend au pied de l'escalier monumental au forfait fixe, avec transferts vers Oradour-sur-Glane en 20 minutes et l'aéroport en 8 minutes.",
      whyUs: [
        { title: "Escalier monumental Art Déco", desc: "Station taxi au pied de l'escalier monumental sous le dôme Art Déco classé. La gare elle-même vaut le détour : nos chauffeurs vous accueillent dans ce cadre exceptionnel." },
        { title: "Oradour-sur-Glane en 20 min", desc: "Transfert vers le village martyr d'Oradour-sur-Glane en 20 minutes par la D9. Nos chauffeurs assurent aussi les retours après la visite du Centre de la Mémoire." },
        { title: "Aéroport Limoges-Bellegarde 8 min", desc: "L'aéroport est à seulement 8 minutes par la D704. Forfait fixe pour les vols Ryanair vers Londres-Stansted, la liaison la plus fréquentée au départ de Limoges." },
      ],
    },
    en: {
      intro: "Limoges-Benedictins station, often voted the most beautiful station in France thanks to its Art Deco dome and bell tower, welcomes 3 million passengers per year. Served by Intercites to Paris in 3h and TER to Toulouse, Clermont-Ferrand and Brive, it is 3-5 minutes from the centre of the porcelain capital. TaxiNeo awaits you at a fixed fare at the foot of this architectural gem.",
      description: "The official taxi zone at Limoges-Benedictins is on the forecourt at the foot of the monumental staircase — access reserved for taxis and off-limits to ride-hailing services. The station's beauty itself attracts many visitors. Our drivers offer transfers to the martyred village of Oradour-sur-Glane in 20-25 minutes, the Porcelain Museum and Limoges-Bellegarde Airport in 8-12 minutes. Book ahead for Heritage Days when the station sees a surge of visitors and for porcelain exhibitions.",
      metaDescription: "Taxi Limoges-Benedictins: France's most beautiful station, 3M passengers/year. Oradour-sur-Glane in 20 min, airport in 8 min. Guaranteed fixed fare. Book now.",
      heroSubtitle: "France's most beautiful station with its Art Deco dome and 3 million passengers yearly. TaxiNeo awaits at the monumental staircase at a fixed fare, with transfers to Oradour-sur-Glane in 20 minutes and the airport in 8 minutes.",
      whyUs: [
        { title: "Art Deco monumental staircase", desc: "Taxi rank at the foot of the listed Art Deco monumental staircase under the dome. Our drivers welcome you in this exceptional setting, often voted France's most beautiful station." },
        { title: "Oradour-sur-Glane in 20 min", desc: "Transfer to the martyred village of Oradour-sur-Glane in 20 minutes via the D9. Our drivers also handle returns after visiting the Memory Centre." },
        { title: "Limoges-Bellegarde Airport 8 min", desc: "The airport is just 8 minutes away via the D704. Fixed fare for Ryanair flights to London-Stansted, the busiest route from Limoges." },
      ],
    }
  },
  "orleans": {
    fr: {
      intro: "La Gare d'Orléans, dans le centre de la ville de Jeanne d'Arc, accueille 5 millions de voyageurs par an. Desservie par les TER et Intercités vers Paris-Austerlitz en 1h10, les TER vers Tours, Blois et Vierzon, c'est une étape clé sur la route des châteaux de la Loire. À 3-5 minutes de la Cathédrale Sainte-Croix, TaxiNeo vous offre un transfert forfaitaire pour rejoindre vos visites ligériennes.",
      description: "La station de taxis officiels de la gare d'Orléans est sur le parvis, côté place d'Arc — un accès exclusif interdit aux VTC. Orléans est le point de départ le plus pratique pour Chambord, accessible en 30-40 minutes en taxi, une destination impossible à atteindre directement en train. Nos chauffeurs proposent aussi des circuits vers Blois, Cheverny et les vignobles de Sologne. Réservez à l'avance pour les Fêtes johanniques en mai et les week-ends d'œnotourisme en Val de Loire.",
      metaDescription: "Taxi Gare d'Orléans : 5 millions de voyageurs/an, Paris en 1h10. Chambord en taxi 30 min, Blois et Sologne. Forfait fixe garanti, réservez en ligne 24h/24.",
      heroSubtitle: "Ville de Jeanne d'Arc avec 5 millions de voyageurs par an, Orléans est la base idéale pour Chambord, accessible uniquement en taxi en 30 minutes. TaxiNeo propose des circuits vers les châteaux de la Loire et les vignobles de Sologne au forfait fixe.",
      whyUs: [
        { title: "Place d'Arc, Paris-Austerlitz 1h10", desc: "Station taxi sur le parvis côté place d'Arc, face à la sortie des trains Intercités et TER depuis Paris-Austerlitz. Correspondance tramway ligne A à 2 minutes pour le centre-ville." },
        { title: "Chambord en 30 min par la D2020", desc: "Seul accès pratique au Château de Chambord, non desservi par le train. Circuit châteaux de la Loire : Blois en 25 min, Cheverny en 35 min, Chambord en 30 min par la D2020." },
        { title: "Circuits vignobles de Sologne", desc: "Excursions œnotourisme vers les vignobles AOC Orléans et Orléans-Cléry le long de la Loire. Forfait demi-journée avec arrêts dans les domaines viticoles entre Cléry-Saint-André et Meung-sur-Loire." },
      ],
    },
    en: {
      intro: "Orleans station, in the centre of Joan of Arc's city, welcomes 5 million passengers per year. Served by TER and Intercites to Paris-Austerlitz in 1h10, TER to Tours, Blois and Vierzon, it is a key stop on the Loire chateau route. Just 3-5 minutes from the Cathedrale Sainte-Croix, TaxiNeo offers a flat-rate transfer to reach your Loire Valley visits.",
      description: "The official taxi rank at Orleans station is on the forecourt on the place d'Arc side — exclusive access off-limits to ride-hailing services. Orleans is the most practical starting point for Chambord, reachable in 30-40 minutes by taxi — a destination impossible to reach directly by train. Our drivers also offer circuits to Blois, Cheverny and the Sologne vineyards. Book ahead for the Fetes Johanniques in May and wine tourism weekends in the Loire Valley.",
      metaDescription: "Taxi Orleans station: 5M passengers/year, Paris in 1h10. Chateau de Chambord by taxi 30 min, Blois and Sologne forest. Guaranteed fixed fare. Book online.",
      heroSubtitle: "Joan of Arc's city with 5 million passengers yearly, Orleans is the ideal base for Chambord, reachable only by taxi in 30 minutes. TaxiNeo offers circuits to Loire chateaux and Sologne vineyards at a fixed fare.",
      whyUs: [
        { title: "Place d'Arc, Paris-Austerlitz 1h10", desc: "Taxi rank on the forecourt facing place d'Arc, opposite the Intercites and TER exit from Paris-Austerlitz. Tramway line A connection 2 minutes away for the city centre." },
        { title: "Chambord in 30 min via D2020", desc: "The only practical access to Chateau de Chambord, not served by train. Loire chateau circuit: Blois in 25 min, Cheverny in 35 min, Chambord in 30 min via the D2020." },
        { title: "Sologne vineyard circuits", desc: "Wine tourism excursions to the AOC Orleans and Orleans-Clery vineyards along the Loire. Half-day package with stops at wine estates between Clery-Saint-Andre and Meung-sur-Loire." },
      ],
    }
  },
  "mulhouse-ville": {
    fr: {
      intro: "La Gare de Mulhouse-Ville, au carrefour de la France, de la Suisse et de l'Allemagne, accueille 4 millions de voyageurs par an. Desservie par le TGV vers Paris en 2h50 et les TER vers Strasbourg, Colmar et Bâle, c'est une gare résolument trinationale. À 3-8 minutes du centre-ville et de la célèbre Cité de l'Automobile, TaxiNeo vous offre un transfert au forfait fixe, y compris pour les trajets transfrontaliers.",
      description: "Devant la gare de Mulhouse, la zone taxi officielle est sur le parvis — un emplacement réservé aux taxis interdit aux VTC. La vocation transfrontalière de Mulhouse se retrouve dans nos transferts : Bâle en 20-25 minutes, l'EuroAirport Bâle-Mulhouse en 20-25 minutes, Fribourg-en-Brisgau en 35-45 minutes. Nos chauffeurs sont habitués aux passages de frontière. Réservez à l'avance pendant Art Basel et les grandes foires commerciales de Bâle, quand la demande de transferts depuis Mulhouse explose.",
      metaDescription: "Taxi Mulhouse : 4 millions de voyageurs/an, gare trinationale France-Suisse-Allemagne. Bâle en 20 min, EuroAirport en 20 min. Forfait fixe transfrontalier.",
      heroSubtitle: "Gare trinationale au carrefour France-Suisse-Allemagne avec 4 millions de voyageurs par an. TaxiNeo assure vos transferts transfrontaliers vers Bâle en 20 minutes et l'EuroAirport en 20 minutes au forfait fixe, chauffeurs habitués aux frontières.",
      whyUs: [
        { title: "Parvis gare, tram-train Soléa", desc: "Station taxi sur le parvis face à la sortie principale, à 100 m de l'arrêt tram-train Soléa ligne 2. Correspondance directe avec les TGV Paris-Mulhouse et les TER vers Colmar et Strasbourg." },
        { title: "Bâle et EuroAirport en 20 min", desc: "Transferts transfrontaliers vers Bâle-SBB en 20 minutes par l'A35 et vers l'EuroAirport Bâle-Mulhouse-Fribourg en 20 minutes. Chauffeurs expérimentés aux passages de douane Suisse et Allemagne." },
        { title: "Cité de l'Automobile 5 min", desc: "La plus grande collection automobile du monde (Schlumpf) est à 5 minutes de la gare. Transferts aussi vers le Musée du Train, le Parc du Petit Prince et les marchés de Noël de Colmar en 30 min." },
      ],
    },
    en: {
      intro: "Mulhouse-Ville station, at the crossroads of France, Switzerland and Germany, welcomes 4 million passengers per year. Served by TGV to Paris in 2h50 and TER to Strasbourg, Colmar and Basel, it is a thoroughly trinational station. Just 3-8 minutes from the city centre and the famous Cite de l'Automobile, TaxiNeo offers a fixed-fare transfer including cross-border trips.",
      description: "In front of Mulhouse station, the official taxi zone is on the forecourt — a spot reserved for taxis and off-limits to ride-hailing services. Mulhouse's cross-border vocation extends to our transfers: Basel in 20-25 minutes, EuroAirport Basel-Mulhouse in 20-25 minutes, Freiburg im Breisgau in 35-45 minutes. Our drivers are used to border crossings. Book ahead during Art Basel and major Basel trade fairs when transfer demand from Mulhouse surges.",
      metaDescription: "Taxi Mulhouse: 4M passengers/year, trinational station France-Switzerland-Germany. Basel in 20 min, EuroAirport in 20 min. Cross-border fixed fare. Book now.",
      heroSubtitle: "Trinational station at the France-Switzerland-Germany crossroads with 4 million passengers yearly. TaxiNeo handles cross-border transfers to Basel in 20 minutes and EuroAirport in 20 minutes at a fixed fare, with border-savvy drivers.",
      whyUs: [
        { title: "Forecourt, Solea tram-train link", desc: "Taxi rank on the forecourt opposite the main exit, 100 m from Solea tram-train line 2 stop. Direct connections with TGV from Paris and TER to Colmar and Strasbourg." },
        { title: "Basel & EuroAirport in 20 min", desc: "Cross-border transfers to Basel SBB in 20 minutes via the A35 and to EuroAirport Basel-Mulhouse-Freiburg in 20 minutes. Drivers experienced with Swiss and German border crossings." },
        { title: "Cite de l'Automobile 5 min", desc: "The world's largest car collection (Schlumpf) is 5 minutes from the station. Transfers also to the Train Museum, Parc du Petit Prince and Colmar Christmas markets in 30 min." },
      ],
    }
  },
  "amiens": {
    fr: {
      intro: "La Gare d'Amiens, au centre de la ville picarde, accueille 4 millions de voyageurs par an. Desservie par les trains directs vers Paris Nord en 1h10, les TER et Intercités vers Lille, Rouen et Boulogne, elle est à 3-5 minutes de la plus grande cathédrale gothique de France. TaxiNeo vous garantit un transfert au forfait fixe avec un chauffeur à la sortie, prêt à vous conduire vers les Hortillonnages ou la Baie de Somme.",
      description: "La zone taxi officielle de la gare d'Amiens est sur le parvis, côté place Alphonse Fiquet — un accès réservé aux taxis interdit aux VTC. Amiens est le point de départ de la Baie de Somme et ses phoques (40-50 min en taxi), une destination prisée des familles. Nos chauffeurs proposent aussi des transferts vers les mémoriaux de la Grande Guerre à Albert et Thiepval, et vers l'aéroport de Beauvais en 45-55 minutes. Réservez à l'avance lors du Marché de Noël d'Amiens et de la fête dans les Hortillonnages en juin.",
      metaDescription: "Taxi Gare d'Amiens : 4 millions de voyageurs/an, Paris en 1h10. Baie de Somme en 40 min, mémoriaux de la Grande Guerre 14-18. Forfait fixe garanti. Réservez.",
      heroSubtitle: "Cité picarde avec 4 millions de voyageurs par an et la plus grande cathédrale gothique de France. TaxiNeo vous emmène vers la Baie de Somme et ses phoques en 40 minutes ou les mémoriaux de la Grande Guerre au forfait fixe, avec chauffeur place Fiquet.",
      whyUs: [
        { title: "Place Fiquet, Paris Nord 1h10", desc: "Station taxi place Alphonse Fiquet face à la sortie principale, correspondance directe avec les trains Paris-Nord en 1h10. Bus Ametis lignes 1 et 2 accessibles à 100 m." },
        { title: "Baie de Somme et phoques 40 min", desc: "Transfert direct vers la Baie de Somme et la colonie de phoques du Hourdel en 40 minutes par la D1001. Circuit possible avec Saint-Valery-sur-Somme et le chemin de fer à vapeur." },
        { title: "Mémoriaux 14-18 Albert-Thiepval", desc: "Circuits mémoriaux de la Grande Guerre : Albert et son musée Somme 1916 en 25 min, Mémorial de Thiepval en 30 min, tranchées de Beaumont-Hamel en 35 min par la D929." },
      ],
    },
    en: {
      intro: "Amiens station, in the centre of the Picardy city, welcomes 4 million passengers per year. Served by direct trains to Paris Nord in 1h10, TER and Intercites to Lille, Rouen and Boulogne, it is 3-5 minutes from the largest Gothic cathedral in France. TaxiNeo guarantees a fixed-fare transfer with a driver at the exit, ready to take you to the Hortillonnages or the Baie de Somme.",
      description: "The official taxi zone at Amiens station is on the forecourt on the place Alphonse Fiquet side — access reserved for taxis and off-limits to ride-hailing services. Amiens is the starting point for the Baie de Somme and its seals (40-50 min by taxi), a popular family destination. Our drivers also offer transfers to the Great War memorials at Albert and Thiepval, and to Beauvais Airport in 45-55 minutes. Book ahead during the Amiens Christmas Market and the Hortillonnages festival in June.",
      metaDescription: "Taxi Amiens station: 4M passengers/year, Paris in 1h10. Baie de Somme nature reserve in 40 min, WWI memorial circuits. Guaranteed fixed fare. Book online now.",
      heroSubtitle: "Picardy city with 4 million passengers yearly and France's largest Gothic cathedral. TaxiNeo takes you to the Baie de Somme and its seals in 40 minutes or the Great War memorials at a fixed fare, with a driver on place Fiquet.",
      whyUs: [
        { title: "Place Fiquet, Paris Nord 1h10", desc: "Taxi rank on place Alphonse Fiquet facing the main exit, direct connection with Paris-Nord trains in 1h10. Ametis bus lines 1 and 2 accessible 100 m away." },
        { title: "Baie de Somme & seals in 40 min", desc: "Direct transfer to the Baie de Somme and the Le Hourdel seal colony in 40 minutes via the D1001. Circuit possible with Saint-Valery-sur-Somme and the steam railway." },
        { title: "WWI memorials Albert-Thiepval", desc: "Great War memorial circuits: Albert and its Somme 1916 museum in 25 min, Thiepval Memorial in 30 min, Beaumont-Hamel trenches in 35 min via the D929." },
      ],
    }
  },
  "besancon-viotte": {
    fr: {
      intro: "La Gare de Besançon Viotte, en plein centre de la capitale comtoise, accueille 3 millions de voyageurs par an. Desservie par le TGV vers Paris en 2h et les TER vers Dijon, Belfort et Pontarlier, elle est la gare historique de Besançon, à 5-8 minutes de la Citadelle Vauban classée UNESCO. TaxiNeo vous offre un forfait fixe et un chauffeur qui vous attend à la sortie, avenue de la Paix.",
      description: "La station de taxis officiels de Besançon Viotte est avenue de la Paix — un accès exclusif interdit aux VTC. Besançon possède deux gares : Viotte en centre-ville et la gare TGV Franche-Comté à 10 km. Nos chauffeurs assurent la navette entre les deux en 10-15 minutes. Transferts vers la Citadelle Vauban, les salines d'Arc-et-Senans et les stations de ski du Jura. Réservez à l'avance pour les correspondances avec le TGV à la gare Franche-Comté et pour les week-ends de ski de fond dans le Haut-Doubs.",
      metaDescription: "Taxi Besançon Viotte : 3 millions de voyageurs/an, Citadelle Vauban UNESCO. Navette vers la gare TGV en 10 min, ski dans le Jura. Forfait fixe garanti.",
      heroSubtitle: "Capitale comtoise avec 3 millions de voyageurs par an, Besançon est à 5 min de la Citadelle Vauban UNESCO. TaxiNeo assure la navette vers la gare TGV Franche-Comté en 10 minutes au forfait fixe, plus les transferts vers les salines d'Arc-et-Senans et le Jura.",
      whyUs: [
        { title: "Avenue de la Paix, tram Ginko", desc: "Station taxi avenue de la Paix face à la sortie principale, à 50 m de l'arrêt tram Ginko ligne 1. Correspondance avec les TER Dijon-Belfort et les Intercités vers Paris via Dole." },
        { title: "Navette gare TGV Franche-Comté", desc: "La gare TGV Franche-Comté est à 10 km : nos chauffeurs assurent la navette en 10-15 minutes par l'A36 pour les correspondances avec les TGV Paris-Zurich et Paris-Lausanne." },
        { title: "Citadelle Vauban et Salines UNESCO", desc: "Transfert vers la Citadelle Vauban classée UNESCO en 5 minutes par la Grande Rue. Circuit patrimoine vers la Saline Royale d'Arc-et-Senans en 25 minutes par la N83." },
      ],
    },
    en: {
      intro: "Besancon Viotte station, in the centre of the Franche-Comte capital, welcomes 3 million passengers per year. Served by TGV to Paris in 2h and TER to Dijon, Belfort and Pontarlier, it is Besancon's historic station, 5-8 minutes from the UNESCO-listed Vauban Citadel. TaxiNeo offers a fixed fare and a driver waiting for you at the exit on avenue de la Paix.",
      description: "The official taxi rank at Besancon Viotte is on avenue de la Paix — exclusive access off-limits to ride-hailing services. Besancon has two stations: Viotte in the city centre and the TGV Franche-Comte station 10 km away. Our drivers shuttle between the two in 10-15 minutes. Transfers to the Vauban Citadel, the Saline Royale d'Arc-et-Senans and Jura ski stations. Book ahead for TGV connections at Franche-Comte station and cross-country skiing weekends in the Haut-Doubs.",
      metaDescription: "Taxi Besancon Viotte: 3M passengers/year, near UNESCO Vauban Citadel. TGV station shuttle in 10 min, Jura skiing access. Guaranteed fixed fare. Book online.",
      heroSubtitle: "Franche-Comte capital with 3 million passengers yearly, Besancon is 5 min from the UNESCO Vauban Citadel. TaxiNeo shuttles to the TGV Franche-Comte station in 10 minutes at a fixed fare, plus transfers to Arc-et-Senans and the Jura.",
      whyUs: [
        { title: "Avenue de la Paix, Ginko tram", desc: "Taxi rank on avenue de la Paix facing the main exit, 50 m from Ginko tram line 1 stop. Connections with Dijon-Belfort TER and Intercites to Paris via Dole." },
        { title: "TGV Franche-Comte station shuttle", desc: "The TGV Franche-Comte station is 10 km away: our drivers shuttle in 10-15 minutes via the A36 for connections with Paris-Zurich and Paris-Lausanne TGV services." },
        { title: "Vauban Citadel & Salines UNESCO", desc: "Transfer to the UNESCO Vauban Citadel in 5 minutes via the Grande Rue. Heritage circuit to the Saline Royale d'Arc-et-Senans in 25 minutes via the N83." },
      ],
    }
  },
  "la-rochelle-ville": {
    fr: {
      intro: "La Gare de La Rochelle-Ville, à 5 minutes du Vieux-Port et des célèbres tours médiévales, accueille 2 millions de voyageurs par an. Desservie par le TGV vers Paris en 3h, les TER et Intercités vers Nantes, Bordeaux et Poitiers, elle est la porte d'entrée du littoral charentais et de l'Île de Ré. TaxiNeo vous attend au forfait fixe pour un transfert immédiat vers les embruns atlantiques.",
      description: "La zone taxi officielle de la gare de La Rochelle est sur le parvis — un emplacement réservé aux taxis que les VTC ne peuvent pas utiliser. La Rochelle est une destination estivale majeure et l'Île de Ré est à seulement 20-25 minutes en taxi (plus péage du pont). Nos chauffeurs assurent aussi les transferts vers l'Aquarium de La Rochelle et l'aéroport La Rochelle-Laleu. Réservez impérativement à l'avance en juillet-août et pendant les Francofolies, quand la demande est à son maximum.",
      metaDescription: "Taxi La Rochelle : 2 millions de voyageurs/an, TGV Paris en 3h. Île de Ré en 20 min, Aquarium et festival Francofolies. Forfait fixe garanti, réservez en ligne.",
      heroSubtitle: "Porte du littoral charentais avec 2 millions de voyageurs par an, La Rochelle relie Paris en 3h par TGV. TaxiNeo vous transfère au forfait fixe vers l'Île de Ré en 20 minutes, l'Aquarium ou l'aéroport, avec réservation indispensable en été.",
      whyUs: [
        { title: "Parvis gare, Vieux-Port 5 min", desc: "Station taxi sur le parvis face à la sortie principale, à 5 minutes à pied du Vieux-Port et des Tours de La Rochelle. Correspondance bus Yélo lignes 1 et 3 à 100 m." },
        { title: "Île de Ré par le pont en 20 min", desc: "Transfert vers l'Île de Ré en 20 minutes via le pont de 2,9 km (péage inclus dans le forfait). Desserte de Saint-Martin-de-Ré, Ars-en-Ré et la plage de la Conche des Baleines." },
        { title: "Aéroport La Rochelle-Laleu 8 min", desc: "L'aéroport La Rochelle-Île de Ré est à 8 minutes par l'avenue du Général Leclerc. Forfait fixe pour les vols EasyJet et Ryanair vers Londres, Dublin et Porto." },
      ],
    },
    en: {
      intro: "La Rochelle-Ville station, 5 minutes from the Vieux-Port and the famous medieval towers, welcomes 2 million passengers per year. Served by TGV to Paris in 3h, TER and Intercites to Nantes, Bordeaux and Poitiers, it is the gateway to the Charentes coast and the Ile de Re. TaxiNeo awaits you at a fixed fare for an immediate transfer to the Atlantic breezes.",
      description: "The official taxi zone at La Rochelle station is on the forecourt — a spot reserved for taxis that ride-hailing services cannot use. La Rochelle is a major summer destination and the Ile de Re is just 20-25 minutes by taxi (plus bridge toll). Our drivers also provide transfers to the La Rochelle Aquarium and La Rochelle-Laleu Airport. Book well ahead in July-August and during the Francofolies festival when demand peaks.",
      metaDescription: "Taxi La Rochelle: 2M passengers/year, TGV to Paris in 3h. Ile de Re island in 20 min, Aquarium and Francofolies festival. Guaranteed fixed fare. Book online.",
      heroSubtitle: "Gateway to the Charentes coast with 2 million passengers yearly, La Rochelle connects to Paris in 3h by TGV. TaxiNeo transfers you at a fixed fare to the Ile de Re in 20 minutes, the Aquarium or the airport, with booking essential in summer.",
      whyUs: [
        { title: "Forecourt, Vieux-Port 5 min", desc: "Taxi rank on the forecourt facing the main exit, 5 minutes' walk from the Vieux-Port and the Towers of La Rochelle. Yelo bus lines 1 and 3 connections 100 m away." },
        { title: "Ile de Re via the bridge in 20 min", desc: "Transfer to the Ile de Re in 20 minutes via the 2.9 km bridge (toll included in the fare). Service to Saint-Martin-de-Re, Ars-en-Re and the Conche des Baleines beach." },
        { title: "La Rochelle-Laleu Airport 8 min", desc: "La Rochelle-Ile de Re Airport is 8 minutes via avenue du General Leclerc. Fixed fare for EasyJet and Ryanair flights to London, Dublin and Porto." },
      ],
    }
  },
  "bayonne": {
    fr: {
      intro: "La Gare de Bayonne, au cœur du Pays Basque français, accueille 2 millions de voyageurs par an. Desservie par le TGV vers Paris en 4h, les TER vers Biarritz, Saint-Jean-de-Luz et Hendaye, c'est aussi un carrefour transfrontalier vers l'Espagne et San Sebastián. À 3-5 minutes de la Cathédrale et des rives de la Nive, TaxiNeo vous propose un transfert forfaitaire vers la côte basque ou au-delà de la frontière.",
      description: "Devant la gare de Bayonne, la station de taxis officiels est sur le parvis — un accès direct interdit aux VTC. Bayonne est la porte d'entrée de la côte basque : nos chauffeurs assurent les transferts vers Biarritz en 10-15 minutes, Saint-Jean-de-Luz en 18-25 minutes et San Sebastián en 45-55 minutes. Transferts transfrontaliers au forfait, sans surprise. Réservez à l'avance pendant les Fêtes de Bayonne en juillet et la saison de surf estivale, quand la demande vers Biarritz et Anglet est très forte.",
      metaDescription: "Taxi Bayonne : 2 millions de voyageurs/an, cœur du Pays Basque. Biarritz en 10 min, San Sebastián en 45 min. Forfait transfrontalier fixe garanti. Réservez.",
      heroSubtitle: "Cœur du Pays Basque avec 2 millions de voyageurs par an, Bayonne est un carrefour vers Biarritz en 10 minutes et San Sebastián en 45 minutes. TaxiNeo assure vos transferts transfrontaliers au forfait fixe, avec chauffeur disponible pendant les Fêtes et la saison surf.",
      whyUs: [
        { title: "Parvis gare, rives de la Nive", desc: "Station taxi sur le parvis face à la sortie principale, à 3 minutes de la Cathédrale Sainte-Marie et des quais de la Nive. Correspondance bus Txik Txak lignes A et B à 100 m." },
        { title: "Biarritz 10 min, côte basque", desc: "Transfert vers Biarritz et la Grande Plage en 10 minutes par l'A63, Saint-Jean-de-Luz en 18 minutes, Anglet et ses spots de surf en 8 minutes. Forfait fixe pour toute la côte basque." },
        { title: "San Sebastián en 45 min par l'A63", desc: "Transfert transfrontalier vers San Sebastián en 45 minutes via l'autoroute A63 et Irun. Chauffeurs habitués au passage de frontière franco-espagnol, forfait tout compris." },
      ],
    },
    en: {
      intro: "Bayonne station, in the heart of the French Basque Country, welcomes 2 million passengers per year. Served by TGV to Paris in 4h, TER to Biarritz, Saint-Jean-de-Luz and Hendaye, it is also a cross-border hub towards Spain and San Sebastian. Just 3-5 minutes from the Cathedral and the banks of the Nive, TaxiNeo offers a flat-rate transfer to the Basque coast or beyond the border.",
      description: "In front of Bayonne station, the official taxi rank is on the forecourt — direct access off-limits to ride-hailing services. Bayonne is the gateway to the Basque coast: our drivers provide transfers to Biarritz in 10-15 minutes, Saint-Jean-de-Luz in 18-25 minutes and San Sebastian in 45-55 minutes. Cross-border transfers at a flat rate with no surprises. Book ahead during the Fetes de Bayonne in July and the summer surf season when demand for Biarritz and Anglet surges.",
      metaDescription: "Taxi Bayonne: 2M passengers/year, heart of the Basque Country. Biarritz in 10 min, San Sebastian in 45 min. Cross-border guaranteed fixed fare. Book online.",
      heroSubtitle: "Heart of the Basque Country with 2 million passengers yearly, Bayonne is a hub for Biarritz in 10 minutes and San Sebastian in 45 minutes. TaxiNeo provides cross-border transfers at a fixed fare, with drivers available during the Fetes and surf season.",
      whyUs: [
        { title: "Forecourt, banks of the Nive", desc: "Taxi rank on the forecourt facing the main exit, 3 minutes from Sainte-Marie Cathedral and the Nive riverbanks. Txik Txak bus lines A and B connections 100 m away." },
        { title: "Biarritz 10 min, Basque coast", desc: "Transfer to Biarritz and Grande Plage in 10 minutes via the A63, Saint-Jean-de-Luz in 18 minutes, Anglet and its surf spots in 8 minutes. Fixed fare for the entire Basque coast." },
        { title: "San Sebastian in 45 min via A63", desc: "Cross-border transfer to San Sebastian in 45 minutes via the A63 motorway and Irun. Drivers experienced with the Franco-Spanish border crossing, all-inclusive fare." },
      ],
    }
  },
  "chambery": {
    fr: {
      intro: "La Gare de Chambéry, porte d'entrée des stations de ski savoyardes, accueille 3 millions de voyageurs par an. Desservie par le TGV vers Paris en 3h et les TER vers Lyon, Grenoble et Annecy, elle est le point de départ idéal pour Courchevel, Méribel, Val Thorens et les 3 Vallées. À 3-5 minutes du centre historique et du Château des Ducs, TaxiNeo vous offre un transfert au forfait fixe avec des véhicules équipés pour la montagne.",
      description: "Devant la gare de Chambéry, la zone taxi officielle est sur le parvis — un emplacement réservé aux taxis interdit aux VTC. En hiver, la gare est le hub principal des transferts vers les stations des 3 Vallées et de la Tarentaise. Nos véhicules sont systématiquement équipés de pneus neige et de chaînes. Réservez impérativement à l'avance pendant les vacances de Noël et de février. En été, nos chauffeurs proposent des transferts vers le Lac du Bourget et Aix-les-Bains en 15-20 minutes. Disponibles aussi pour l'aéroport Chambéry-Savoie.",
      metaDescription: "Taxi Chambéry : 3 millions de voyageurs/an, porte des 3 Vallées. Transferts Courchevel, Méribel et Val Thorens. Véhicules montagne, forfait fixe garanti 24h/24.",
      heroSubtitle: "Porte des stations de ski savoyardes avec 3 millions de voyageurs par an, Chambéry dessert Courchevel, Méribel et les 3 Vallées. TaxiNeo propose des véhicules équipés pneus neige et chaînes au forfait fixe, plus le Lac du Bourget en été.",
      whyUs: [
        { title: "Parvis gare, Château des Ducs 5 min", desc: "Station taxi sur le parvis face à la sortie des TGV Paris-Chambéry. Centre historique et Château des Ducs de Savoie à 5 minutes. Correspondance bus Synchro lignes 1 et 3." },
        { title: "Courchevel et 3 Vallées en 1h15", desc: "Transferts stations de ski : Courchevel en 1h15, Méribel en 1h10, Val Thorens en 1h30 par la N90 et la Tarentaise. Véhicules systématiquement équipés pneus neige et chaînes." },
        { title: "Lac du Bourget et Aix-les-Bains", desc: "Transfert vers le Lac du Bourget et Aix-les-Bains en 15 minutes par la N201. Aéroport Chambéry-Savoie en 10 minutes, idéal pour les vols charters ski en hiver." },
      ],
    },
    en: {
      intro: "Chambery station, gateway to the Savoyard ski resorts, welcomes 3 million passengers per year. Served by TGV to Paris in 3h and TER to Lyon, Grenoble and Annecy, it is the ideal departure point for Courchevel, Meribel, Val Thorens and the 3 Valleys. Just 3-5 minutes from the historic centre and the Ducal Castle, TaxiNeo offers a fixed-fare transfer with mountain-equipped vehicles.",
      description: "In front of Chambery station, the official taxi zone is on the forecourt — a spot reserved for taxis and off-limits to ride-hailing services. In winter, the station is the main hub for transfers to the 3 Valleys and Tarentaise resorts. Our vehicles are systematically fitted with snow tyres and chains. Book well ahead during Christmas and February holidays. In summer, our drivers offer transfers to Lac du Bourget and Aix-les-Bains in 15-20 minutes. Also available for Chambery-Savoie Airport.",
      metaDescription: "Taxi Chambery: 3M passengers/year, gateway to the 3 Valleys ski resorts. Courchevel, Meribel, Val Thorens. Mountain vehicles, guaranteed fixed fare. Book.",
      heroSubtitle: "Gateway to Savoyard ski resorts with 3 million passengers yearly, Chambery serves Courchevel, Meribel and the 3 Valleys. TaxiNeo offers vehicles with snow tyres and chains at a fixed fare, plus Lac du Bourget transfers in summer.",
      whyUs: [
        { title: "Forecourt, Ducal Castle 5 min", desc: "Taxi rank on the forecourt facing the TGV Paris-Chambery exit. Historic centre and the Castle of the Dukes of Savoy 5 minutes away. Synchro bus lines 1 and 3 connections." },
        { title: "Courchevel & 3 Valleys in 1h15", desc: "Ski resort transfers: Courchevel in 1h15, Meribel in 1h10, Val Thorens in 1h30 via the N90 and the Tarentaise valley. Vehicles systematically fitted with snow tyres and chains." },
        { title: "Lac du Bourget & Aix-les-Bains", desc: "Transfer to Lac du Bourget and Aix-les-Bains in 15 minutes via the N201. Chambery-Savoie Airport in 10 minutes, ideal for winter ski charter flights." },
      ],
    }
  },
  "cannes": {
    fr: {
      intro: "La Gare de Cannes, au cœur de la ville du Festival, accueille 3 millions de voyageurs par an. Desservie par le TGV vers Paris en 5h et les TER vers Nice, Monaco et Marseille le long de la Côte d'Azur, elle est à 3-5 minutes de la Croisette et du Palais des Festivals. TaxiNeo vous garantit un transfert au forfait fixe avec un chauffeur qui connaît les itinéraires même pendant les routes fermées du Festival.",
      description: "La zone taxi officielle de la gare de Cannes est sur le parvis, côté rue Jean Jaurès — un accès réservé aux taxis interdit aux VTC. Pendant le Festival de Cannes en mai, la circulation est fortement perturbée : nos chauffeurs maîtrisent les itinéraires alternatifs et sont indispensables. Transferts vers l'aéroport Nice Côte d'Azur en 30-45 minutes et vers les parfumeries de Grasse en 15-20 minutes. Réservez impérativement à l'avance pendant le Festival, le MIPIM et le MIPCOM, trois événements qui saturent la ville.",
      metaDescription: "Taxi Cannes : 3 millions de voyageurs/an, ville du Festival du Film. Croisette en 3 min, aéroport Nice 30 min, Grasse en 15 min. Forfait fixe garanti.",
      heroSubtitle: "Ville du Festival avec 3 millions de voyageurs par an, Cannes est à 3 minutes de la Croisette. TaxiNeo maîtrise les itinéraires alternatifs même pendant le Festival, avec forfait fixe et transferts vers l'aéroport Nice ou les parfumeries de Grasse.",
      whyUs: [
        { title: "Rue Jean Jaurès, Croisette 3 min", desc: "Station taxi côté rue Jean Jaurès face à la sortie principale. La Croisette et le Palais des Festivals sont à 3 minutes. Correspondance bus Palm Bus ligne 1 vers Mougins et Le Cannet." },
        { title: "Expertise Festival et MIPIM", desc: "Pendant le Festival de Cannes, le MIPIM et le MIPCOM, nos chauffeurs maîtrisent les itinéraires alternatifs malgré les routes fermées autour du boulevard de la Croisette et du Suquet." },
        { title: "Aéroport Nice 30 min, Grasse 15 min", desc: "Transfert vers l'aéroport Nice Côte d'Azur en 30 minutes par l'A8 et vers les parfumeries de Grasse (Fragonard, Galimard, Molinard) en 15 minutes par la route Napoléon." },
      ],
    },
    en: {
      intro: "Cannes station, in the heart of the Festival city, welcomes 3 million passengers per year. Served by TGV to Paris in 5h and TER to Nice, Monaco and Marseille along the Cote d'Azur, it is 3-5 minutes from the Croisette and the Palais des Festivals. TaxiNeo guarantees a fixed-fare transfer with a driver who knows the routes even during Festival road closures.",
      description: "The official taxi zone at Cannes station is on the forecourt on the rue Jean Jaures side — access reserved for taxis and off-limits to ride-hailing services. During the Cannes Film Festival in May, traffic is heavily disrupted: our drivers master alternative routes and are indispensable. Transfers to Nice Cote d'Azur Airport in 30-45 minutes and to the Grasse perfumeries in 15-20 minutes. Book well ahead during the Festival, MIPIM and MIPCOM — three events that saturate the city.",
      metaDescription: "Taxi Cannes: 3M passengers/year, home of the Film Festival. Croisette promenade in 3 min, Nice airport 30 min, Grasse 15 min. Guaranteed fixed fare. Book.",
      heroSubtitle: "Festival city with 3 million passengers yearly, Cannes is 3 minutes from the Croisette. TaxiNeo masters alternative routes even during the Festival, with a fixed fare and transfers to Nice Airport or the Grasse perfumeries.",
      whyUs: [
        { title: "Rue Jean Jaures, Croisette 3 min", desc: "Taxi rank on the rue Jean Jaures side facing the main exit. The Croisette and the Palais des Festivals are 3 minutes away. Palm Bus line 1 connection to Mougins and Le Cannet." },
        { title: "Festival & MIPIM expertise", desc: "During the Cannes Film Festival, MIPIM and MIPCOM, our drivers master alternative routes despite road closures around the boulevard de la Croisette and Le Suquet." },
        { title: "Nice Airport 30 min, Grasse 15 min", desc: "Transfer to Nice Cote d'Azur Airport in 30 minutes via the A8 and to the Grasse perfumeries (Fragonard, Galimard, Molinard) in 15 minutes via the Route Napoleon." },
      ],
    }
  },
  "versailles-chantiers": {
    fr: {
      intro: "La Gare de Versailles-Chantiers, la plus importante des gares versaillaises, accueille 15 millions de voyageurs par an. Desservie par le RER C, les Transilien N et U et les TER, elle est à 3-5 minutes du Château de Versailles. Hub de correspondance entre la banlieue sud-ouest et Paris, elle offre aussi des connexions vers Chartres et Rambouillet. TaxiNeo vous propose un transfert au forfait fixe pour éviter la marche jusqu'au Château avec vos bagages.",
      description: "Devant la gare de Versailles-Chantiers, la zone taxi officielle est sur le parvis de la gare — un accès réservé aux taxis interdit aux VTC. Des millions de touristes visitent le Château chaque année : nos chauffeurs déposent les voyageurs directement devant la grille dorée en 3-5 minutes. Réservez à l'avance le week-end et pendant les vacances scolaires, haute saison touristique. Nos taxis assurent aussi les transferts vers les aéroports : Orly en 25-35 minutes et CDG en 50 min-1h10. Idéal pour les familles avec poussettes et bagages.",
      metaDescription: "Taxi Versailles-Chantiers : 15 millions de voyageurs/an, Château de Versailles à 3 min. Transfert Orly 25 min, CDG 50 min. Forfait fixe, familles bienvenues.",
      heroSubtitle: "Première gare versaillaise avec 15 millions de voyageurs par an, à 3 minutes du Château de Versailles. TaxiNeo vous dépose devant la grille dorée au forfait fixe, avec transferts aéroports Orly et CDG, idéal pour les familles avec bagages et poussettes.",
      whyUs: [
        { title: "Parvis gare, RER C et Transilien", desc: "Station taxi sur le parvis de la gare, hub de correspondance RER C, Transilien N et U. Accès direct depuis Paris Montparnasse, Saint-Quentin-en-Yvelines et Chartres." },
        { title: "Château grille dorée en 3 min", desc: "Dépose directe devant la grille dorée du Château de Versailles en 3 minutes par l'avenue de Paris. Indispensable pour les familles avec poussettes, bagages ou mobilité réduite." },
        { title: "Orly 25 min, CDG 50 min par A86", desc: "Transfert aéroport Orly en 25 minutes par l'A86 et la N118, CDG en 50 minutes par l'A86 et l'A1. Forfait fixe incluant les péages, idéal après une journée au Château." },
      ],
    },
    en: {
      intro: "Versailles-Chantiers station, the most important of Versailles' stations, welcomes 15 million passengers per year. Served by RER C, Transilien N and U and TER, it is 3-5 minutes from the Palace of Versailles. A transfer hub between the south-western suburbs and Paris, it also offers connections to Chartres and Rambouillet. TaxiNeo offers a fixed-fare transfer to avoid walking to the Palace with your luggage.",
      description: "In front of Versailles-Chantiers station, the official taxi zone is on the station forecourt — access reserved for taxis and off-limits to ride-hailing services. Millions of tourists visit the Palace each year: our drivers drop travellers directly at the golden gates in 3-5 minutes. Book ahead at weekends and during school holidays, peak tourist season. Our taxis also provide airport transfers: Orly in 25-35 minutes and CDG in 50 min-1h10. Ideal for families with pushchairs and luggage.",
      metaDescription: "Taxi Versailles-Chantiers: 15M passengers/year, Palace of Versailles just 3 min away. Orly transfer 25 min, CDG 50 min. Fixed fare guaranteed, families welcome.",
      heroSubtitle: "Versailles' main station with 15 million passengers yearly, 3 minutes from the Palace of Versailles. TaxiNeo drops you at the golden gates at a fixed fare, with Orly and CDG airport transfers, ideal for families with luggage and pushchairs.",
      whyUs: [
        { title: "Forecourt, RER C & Transilien", desc: "Taxi rank on the station forecourt, a hub connecting RER C, Transilien N and U. Direct access from Paris Montparnasse, Saint-Quentin-en-Yvelines and Chartres." },
        { title: "Palace golden gates in 3 min", desc: "Direct drop-off at the golden gates of the Palace of Versailles in 3 minutes via avenue de Paris. Essential for families with pushchairs, luggage or reduced mobility." },
        { title: "Orly 25 min, CDG 50 min via A86", desc: "Orly Airport transfer in 25 minutes via the A86 and N118, CDG in 50 minutes via the A86 and A1. Fixed fare including tolls, ideal after a day at the Palace." },
      ],
    }
  },
  "pau": {
    fr: {
      intro: "La Gare de Pau, au pied des Pyrénées, accueille 1,5 million de voyageurs par an. Desservie par le TGV vers Paris en 4h30 et les TER vers Bayonne, Toulouse et Lourdes, elle est la porte des Pyrénées béarnaises. À 3-5 minutes du célèbre Boulevard des Pyrénées et de sa vue panoramique sur la chaîne, TaxiNeo vous attend au forfait fixe pour un transfert vers Lourdes, les stations de ski ou l'aéroport Pau-Pyrénées.",
      description: "La zone taxi officielle de la gare de Pau est sur le parvis — un emplacement réservé aux taxis que les VTC ne peuvent pas utiliser. Pau est le point de départ des pèlerinages vers Lourdes, accessible en 30-35 minutes en taxi. Nos chauffeurs assurent aussi les transferts vers l'aéroport Pau-Pyrénées en 10-15 minutes et vers les stations de ski pyrénéennes en hiver. Réservez à l'avance pendant les périodes de pèlerinage à Lourdes et les vacances d'hiver. Le Gave de Pau et ses activités de rafting sont à 10-15 minutes en taxi.",
      metaDescription: "Taxi Pau : 1,5 million de voyageurs/an, porte des Pyrénées. Lourdes en 30 min, aéroport Pau en 10 min, stations de ski proches. Forfait fixe garanti. Réservez.",
      heroSubtitle: "Porte des Pyrénées béarnaises avec 1,5 million de voyageurs par an, Pau est le départ vers Lourdes en 30 minutes. TaxiNeo vous attend au forfait fixe pour les transferts vers l'aéroport Pau-Pyrénées en 10 minutes ou les stations de ski en hiver.",
      whyUs: [
        { title: "Parvis gare, Boulevard Pyrénées 5 min", desc: "Station taxi sur le parvis face à la sortie principale, à 5 minutes du célèbre Boulevard des Pyrénées et de sa vue panoramique sur la chaîne. Correspondance bus Idelis lignes T1 et P1." },
        { title: "Lourdes pèlerinage en 30 min", desc: "Transfert direct vers le Sanctuaire de Lourdes en 30 minutes par l'A64. Nos chauffeurs connaissent les accès au Domaine de la Grotte et les horaires des processions mariales." },
        { title: "Aéroport Pau-Pyrénées 10 min", desc: "L'aéroport Pau-Pyrénées est à 10 minutes par la D802. En hiver, transferts vers les stations de ski de Gourette en 45 min et La Pierre Saint-Martin en 1h par la vallée d'Ossau." },
      ],
    },
    en: {
      intro: "Pau station, at the foot of the Pyrenees, welcomes 1.5 million passengers per year. Served by TGV to Paris in 4h30 and TER to Bayonne, Toulouse and Lourdes, it is the gateway to the Bearnese Pyrenees. Just 3-5 minutes from the famous Boulevard des Pyrenees and its panoramic mountain views, TaxiNeo awaits you at a fixed fare for a transfer to Lourdes, ski resorts or Pau-Pyrenees Airport.",
      description: "The official taxi zone at Pau station is on the forecourt — a spot reserved for taxis that ride-hailing services cannot use. Pau is the departure point for pilgrimages to Lourdes, reachable in 30-35 minutes by taxi. Our drivers also provide transfers to Pau-Pyrenees Airport in 10-15 minutes and to Pyrenean ski resorts in winter. Book ahead during Lourdes pilgrimage seasons and winter holidays. The Gave de Pau river and its rafting activities are 10-15 minutes away by taxi.",
      metaDescription: "Taxi Pau: 1.5M passengers/year, gateway to the Pyrenees mountains. Lourdes in 30 min, Pau airport in 10 min, ski resorts nearby. Guaranteed fixed fare. Book.",
      heroSubtitle: "Gateway to the Bearnese Pyrenees with 1.5 million passengers yearly, Pau is the departure point for Lourdes in 30 minutes. TaxiNeo awaits at a fixed fare for transfers to Pau-Pyrenees Airport in 10 minutes or Pyrenean ski resorts in winter.",
      whyUs: [
        { title: "Forecourt, Boulevard Pyrenees 5 min", desc: "Taxi rank on the forecourt facing the main exit, 5 minutes from the famous Boulevard des Pyrenees and its panoramic mountain views. Idelis bus lines T1 and P1 connections." },
        { title: "Lourdes pilgrimage in 30 min", desc: "Direct transfer to the Sanctuary of Lourdes in 30 minutes via the A64. Our drivers know the access points to the Grotto Domain and the schedules of Marian processions." },
        { title: "Pau-Pyrenees Airport 10 min", desc: "Pau-Pyrenees Airport is 10 minutes via the D802. In winter, transfers to Gourette ski resort in 45 min and La Pierre Saint-Martin in 1h via the Ossau valley." },
      ],
    }
  }
};

// Apply unique content
for (const st of stations) {
  const content = STATION_CONTENT[st.slug];
  if (content) {
    st.i18n.fr.intro = content.fr.intro;
    st.i18n.fr.description = content.fr.description;
    st.i18n.fr.metaDescription = content.fr.metaDescription;
    st.i18n.fr.heroSubtitle = content.fr.heroSubtitle;
    st.i18n.fr.whyUs = content.fr.whyUs;
    st.i18n.en.intro = content.en.intro;
    st.i18n.en.description = content.en.description;
    st.i18n.en.metaDescription = content.en.metaDescription;
    st.i18n.en.heroSubtitle = content.en.heroSubtitle;
    st.i18n.en.whyUs = content.en.whyUs;
  }
}

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
    icon: "mdi:train",
    title: "Transfert arrivée",
    description: "Votre chauffeur vous attend à la sortie de la gare. Suivi de train en temps réel.",
  },
  {
    icon: "solar:square-arrow-right-linear",
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
    icon: "solar:health-linear",
    title: "Transport médical",
    description: "Transfert adapté vers ou depuis la gare pour les personnes à mobilité réduite.",
  },
];
