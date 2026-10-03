export interface TrajetFAQ {
  question: string;
  answer: string;
}

export interface TrajetI18n {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  description: string;
  routeDescription: string;
  /** Enriched content: 150+ word unique introduction with local context */
  introduction?: string;
  /** Enriched content: 150+ word detailed route description */
  itineraire?: string;
  /** Enriched content: 150+ word practical tips specific to this route */
  conseils?: string;
  /** Enriched content: 100+ word taxi vs alternatives comparison with real prices */
  comparaisonTransport?: string;
  faq: TrajetFAQ[];
}

export interface Trajet {
  slug: string;
  from: string;
  to: string;
  fromLat: number;
  fromLng: number;
  toLat: number;
  toLng: number;
  distanceKm: number;
  durationMin: number;
  priceEstimate: string;
  category: "aeroport" | "gare" | "touristique" | "ville-a-ville" | "longue-distance";
  highlights: string[];
  i18n: {
    fr: TrajetI18n;
    en: TrajetI18n;
  };
  /** Minimum price in euros */
  prixMin?: number;
  /** Maximum price in euros */
  prixMax?: number;
  /** Van price in euros */
  prixVan?: number;
  /** Maximum duration in minutes (peak hour) */
  dureeMax?: number;
  /** Main highway/road used */
  autoroute?: string;
  /** Toll cost description */
  peages?: string;
  /** Slug linking to departure city page */
  departSlug?: string;
  /** Slug linking to arrival city page */
  arriveeSlug?: string;
  /** Related page slugs for internal linking */
  liensInternes?: string[];
  /** Content tags */
  tags?: string[];
  /** Hub city this route belongs to */
  hub?: string;
}

export const categoryLabels = {
  aeroport: { fr: "Transferts Aéroport", en: "Airport Transfers" },
  gare: { fr: "Transferts Gare", en: "Station Transfers" },
  touristique: { fr: "Trajets Touristiques", en: "Tourist Routes" },
  "ville-a-ville": { fr: "Ville à Ville", en: "City to City" },
  "longue-distance": { fr: "Longue Distance", en: "Long Distance" },
};

export const trajets: Trajet[] = [
  // ═══════════════════════════════════════════════
  // CATÉGORIE : AÉROPORT (~25)
  // ═══════════════════════════════════════════════
  {
    slug: "paris-cdg",
    from: "Paris",
    to: "Aéroport CDG",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 49.0097,
    toLng: 2.5479,
    distanceKm: 25,
    durationMin: 35,
    priceEstimate: "50 — 62 €",
    category: "aeroport",
    highlights: ["Autoroute A1", "Stade de France", "Parc des Expositions de Villepinte"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Aéroport CDG | 25 km, dès 50 € | TaxiNeo",
        metaDescription: "Via Autoroute A1 en 35 min. Autoroute A1, Stade de France et Parc des Expositions de Villepinte en chemin. Dépose au terminal exact, suivi de vol en temps réel.",
        heroTitle: "Taxi Paris → Aéroport CDG",
        heroSubtitle: "Votre transfert Paris → Aéroport Charles de Gaulle au prix fixe de 50 — 62 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Le trajet Paris — Aéroport CDG est le transfert aéroport le plus demandé en Île-de-France. CDG, premier aéroport français avec plus de 67 millions de passagers par an, est situé à seulement 25 km au nord de Paris. Votre chauffeur TaxiNeo vous prend en charge à l'adresse de votre choix et vous dépose directement au terminal de votre vol.",
        routeDescription: "L'itinéraire emprunte l'autoroute A1 direction Lille, en passant par la Porte de la Chapelle et le Stade de France à Saint-Denis. En fonction du trafic, votre chauffeur peut également emprunter l'A3 via Bagnolet pour éviter les embouteillages du périphérique nord.",
        faq: [
          { question: "Quel est le prix d'un taxi Paris — CDG ?", answer: "Le prix d'un taxi Paris — CDG est fixé entre 50 € et 62 € selon l'adresse exacte de prise en charge dans Paris. Ce tarif est garanti et ne change pas, même en cas d'embouteillages." },
          { question: "Combien de temps dure le trajet Paris — CDG ?", answer: "Le trajet dure en moyenne 35 minutes en conditions normales de circulation. Aux heures de pointe (7h-9h et 17h-19h), comptez 45 à 60 minutes." },
          { question: "Peut-on réserver un taxi Paris — CDG à l'avance ?", answer: "Oui, vous pouvez réserver votre taxi jusqu'à 30 jours à l'avance. La réservation est gratuite et peut être annulée sans frais jusqu'à 6h avant le départ." },
          { question: "Y a-t-il un supplément pour les bagages ?", answer: "Non, il n'y a aucun supplément pour les bagages. Nos véhicules accueillent jusqu'à 4 passagers avec leurs valises." },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Aéroport CDG | 25 km, from €50 | TaxiNeo",
        metaDescription: "Via Autoroute A1, 35 min ride. Autoroute A1, Stade de France and Parc des Expositions de Villepinte along the way. Terminal drop-off, flight tracking.",
        heroTitle: "Taxi Paris → CDG Airport",
        heroSubtitle: "Your Paris → Charles de Gaulle Airport transfer at a fixed price of €50–€62. Online booking, professional driver 24/7.",
        description: "The Paris — CDG Airport route is the most requested airport transfer in the Paris region. CDG, France's largest airport with over 67 million passengers per year, is located just 25 km north of Paris. Your TaxiNeo driver picks you up at your chosen address and drops you off directly at your flight terminal.",
        routeDescription: "The route takes the A1 motorway towards Lille, passing through Porte de la Chapelle and the Stade de France in Saint-Denis. Depending on traffic, your driver may also take the A3 via Bagnolet to avoid congestion on the northern ring road.",
        faq: [
          { question: "What is the price of a taxi Paris — CDG?", answer: "The price of a taxi Paris — CDG is fixed between €50 and €62 depending on the exact pick-up address in Paris. This rate is guaranteed and does not change, even in case of traffic jams." },
          { question: "How long does the Paris — CDG journey take?", answer: "The journey takes an average of 35 minutes under normal traffic conditions. During rush hours (7-9am and 5-7pm), allow 45 to 60 minutes." },
          { question: "Can I book a Paris — CDG taxi in advance?", answer: "Yes, you can book your taxi up to 30 days in advance. Booking is free and can be cancelled at no charge up to 6 hours before departure." },
          { question: "Is there a surcharge for luggage?", answer: "No, there is no surcharge for luggage. Our vehicles accommodate up to 4 passengers with their suitcases." },
        ],
      },
    },
  },
  {
    slug: "cdg-paris",
    from: "Aéroport CDG",
    to: "Paris",
    fromLat: 49.0097,
    fromLng: 2.5479,
    toLat: 48.8566,
    toLng: 2.3522,
    distanceKm: 25,
    durationMin: 35,
    priceEstimate: "50 — 62 €",
    category: "aeroport",
    highlights: ["Autoroute A1", "Stade de France", "Porte de la Chapelle"],
    i18n: {
      fr: {
        metaTitle: "Taxi Aéroport CDG → Paris | 25 km, dès 50 € | TaxiNeo",
        metaDescription: "Via Autoroute A1 en 35 min. Passage par Autoroute A1, Stade de France et Porte de la Chapelle. Accueil au terminal, attente gratuite si retard de vol.",
        heroTitle: "Taxi Aéroport CDG → Paris",
        heroSubtitle: "Votre transfert Aéroport CDG → Paris au prix fixe de 50 — 62 €. Accueil personnalisé avec pancarte, suivi de vol en temps réel.",
        description: "À votre arrivée à CDG, votre chauffeur TaxiNeo vous attend en zone d'arrivée avec une pancarte à votre nom. Grâce au suivi de vol en temps réel, il s'adapte automatiquement aux retards éventuels. Attente gratuite jusqu'à 45 minutes après l'atterrissage.",
        routeDescription: "Depuis CDG, le trajet rejoint Paris par l'autoroute A1 en direction de la Porte de la Chapelle. Le chauffeur vous dépose à l'adresse exacte de votre choix dans Paris, que ce soit un hôtel, votre domicile ou un lieu de rendez-vous.",
        faq: [
          { question: "Quel est le prix d'un taxi CDG — Paris ?", answer: "Le prix est fixé entre 50 € et 62 € selon votre adresse de destination dans Paris. Ce forfait est garanti, sans surprise." },
          { question: "Comment retrouver mon chauffeur à CDG ?", answer: "Votre chauffeur vous attend en zone d'arrivée avec une pancarte à votre nom. Vous recevez un SMS avec ses coordonnées dès que votre vol a atterri." },
          { question: "Que se passe-t-il si mon vol a du retard ?", answer: "Votre chauffeur suit votre vol en temps réel. En cas de retard, il ajuste automatiquement son heure d'arrivée. L'attente est gratuite jusqu'à 45 minutes après l'atterrissage." },
          { question: "Puis-je réserver pour une arrivée tardive la nuit ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24. Un supplément nuit de 15% s'applique entre 19h et 7h du matin." },
        ],
      },
      en: {
        metaTitle: "Taxi Aéroport CDG → Paris | 25 km, from €50 | TaxiNeo",
        metaDescription: "Via Autoroute A1, 35 min ride. Autoroute A1, Stade de France and Porte de la Chapelle along the way. Terminal drop-off, real-time flight tracking included.",
        heroTitle: "Taxi CDG Airport → Paris",
        heroSubtitle: "Your CDG Airport → Paris transfer at a fixed price of €50–€62. Personalised welcome with name board, real-time flight tracking.",
        description: "On your arrival at CDG, your TaxiNeo driver awaits you in the arrivals area with a name board. Thanks to real-time flight tracking, they automatically adjust for any delays. Free waiting up to 45 minutes after landing.",
        routeDescription: "From CDG, the route joins Paris via the A1 motorway towards Porte de la Chapelle. Your driver drops you off at your exact chosen address in Paris, whether it's a hotel, your home or a meeting point.",
        faq: [
          { question: "What is the price of a taxi CDG — Paris?", answer: "The price is fixed between €50 and €62 depending on your destination address in Paris. This flat rate is guaranteed, with no surprises." },
          { question: "How do I find my driver at CDG?", answer: "Your driver waits for you in the arrivals area with a name board. You receive an SMS with their contact details as soon as your flight has landed." },
          { question: "What happens if my flight is delayed?", answer: "Your driver tracks your flight in real time. In case of delay, they automatically adjust their arrival time. Waiting is free for up to 45 minutes after landing." },
          { question: "Can I book for a late night arrival?", answer: "Yes, our drivers are available 24/7. A 15% night surcharge applies between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "paris-orly",
    from: "Paris",
    to: "Aéroport d'Orly",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 48.7262,
    toLng: 2.3652,
    distanceKm: 18,
    durationMin: 30,
    priceEstimate: "36 — 45 €",
    category: "aeroport",
    highlights: ["Périphérique Sud", "A6 Autoroute du Soleil", "Rungis"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Aéroport d'Orly | 18 km, dès 36 € | TaxiNeo",
        metaDescription: "Via A6 Autoroute du Soleil en 30 min. Périphérique Sud, A6 Autoroute du Soleil et Rungis en chemin. Dépose au terminal exact, suivi de vol en temps réel.",
        heroTitle: "Taxi Paris → Aéroport d'Orly",
        heroSubtitle: "Votre transfert Paris → Orly au prix fixe de 36 — 45 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Le transfert Paris — Orly est rapide et direct. Orly, deuxième aéroport parisien, accueille principalement des vols domestiques et européens. Situé à seulement 18 km au sud de Paris, le trajet est généralement fluide hors heures de pointe.",
        routeDescription: "Le trajet emprunte le périphérique sud puis l'autoroute A6 en direction de Lyon. La sortie Orly permet d'accéder directement aux terminaux Orly 1, 2, 3 et 4.",
        faq: [
          { question: "Quel est le prix d'un taxi Paris — Orly ?", answer: "Le prix est fixé entre 36 € et 45 € selon l'adresse de prise en charge. Ce forfait est garanti et inclut les bagages." },
          { question: "Combien de temps faut-il pour rejoindre Orly ?", answer: "Comptez environ 30 minutes en conditions normales. Aux heures de pointe, le trajet peut prendre 40 à 50 minutes." },
          { question: "Le chauffeur dépose directement au terminal ?", answer: "Oui, votre chauffeur vous dépose devant le terminal exact de votre vol (Orly 1, 2, 3 ou 4)." },
          { question: "Peut-on partager un taxi vers Orly ?", answer: "TaxiNeo propose un service de taxi partagé pour les trajets aéroport, permettant de réduire le coût par passager." },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Aéroport d'Orly | 18 km, from €36 | TaxiNeo",
        metaDescription: "Via A6 Autoroute du Soleil, 30 min ride. Périphérique Sud, A6 Autoroute du Soleil and Rungis along the way. Meet at terminal, free wait if flight delayed.",
        heroTitle: "Taxi Paris → Orly Airport",
        heroSubtitle: "Your Paris → Orly transfer at a fixed price of €36–€45. Online booking, professional driver 24/7.",
        description: "The Paris — Orly transfer is quick and direct. Orly, Paris's second airport, mainly handles domestic and European flights. Located just 18 km south of Paris, the journey is generally smooth outside rush hours.",
        routeDescription: "The route takes the southern ring road then the A6 motorway towards Lyon. The Orly exit provides direct access to terminals Orly 1, 2, 3 and 4.",
        faq: [
          { question: "What is the price of a taxi Paris — Orly?", answer: "The price is fixed between €36 and €45 depending on the pick-up address. This flat rate is guaranteed and includes luggage." },
          { question: "How long does it take to reach Orly?", answer: "Allow about 30 minutes under normal conditions. During rush hours, the journey may take 40 to 50 minutes." },
          { question: "Does the driver drop off directly at the terminal?", answer: "Yes, your driver drops you off in front of the exact terminal of your flight (Orly 1, 2, 3 or 4)." },
          { question: "Can I share a taxi to Orly?", answer: "TaxiNeo offers a shared taxi service for airport journeys, allowing you to reduce the cost per passenger." },
        ],
      },
    },
  },
  {
    slug: "orly-paris",
    from: "Aéroport d'Orly",
    to: "Paris",
    fromLat: 48.7262,
    fromLng: 2.3652,
    toLat: 48.8566,
    toLng: 2.3522,
    distanceKm: 18,
    durationMin: 30,
    priceEstimate: "35 — 45 €",
    category: "aeroport",
    highlights: ["A6 Autoroute du Soleil", "Porte d'Italie", "Paris Rive Gauche"],
    i18n: {
      fr: {
        metaTitle: "Taxi Aéroport d'Orly → Paris | 18 km, dès 36 € | TaxiNeo",
        metaDescription: "Via A6 Autoroute du Soleil en 30 min. A6 Autoroute du Soleil, Porte d'Italie et Paris Rive Gauche en chemin. Suivi de vol, dépose directe au terminal.",
        heroTitle: "Taxi Aéroport d'Orly → Paris",
        heroSubtitle: "Votre transfert Orly → Paris au prix fixe de 35 — 45 €. Accueil personnalisé, suivi de vol en temps réel.",
        description: "Votre chauffeur vous attend à la sortie d'Orly et vous conduit directement à votre destination dans Paris. Service d'accueil personnalisé avec pancarte à votre nom.",
        routeDescription: "Le trajet depuis Orly emprunte l'A6 en direction de Paris, puis rejoint le périphérique ou les portes sud de Paris selon votre destination finale.",
        faq: [
          { question: "Quel est le tarif d'un taxi Orly — Paris ?", answer: "Le tarif forfaitaire est de 35 à 45 € selon votre destination dans Paris. Prix garanti sans supplément." },
          { question: "Où retrouver mon chauffeur à Orly ?", answer: "Votre chauffeur vous attend en zone d'arrivée avec une pancarte. Vous recevez un SMS avec ses coordonnées." },
          { question: "L'attente est-elle facturée si mon vol a du retard ?", answer: "Non, l'attente est gratuite jusqu'à 45 minutes après l'atterrissage grâce au suivi de vol en temps réel." },
          { question: "Peut-on payer par carte bancaire ?", answer: "Oui, le paiement s'effectue par carte bancaire, Apple Pay ou espèces directement dans le véhicule." },
        ],
      },
      en: {
        metaTitle: "Taxi Aéroport d'Orly → Paris | 18 km, from €36 | TaxiNeo",
        metaDescription: "Via A6 Autoroute du Soleil, 30 min ride. A6 Autoroute du Soleil, Porte d'Italie and Paris Rive Gauche along the way. Terminal drop-off, flight tracking.",
        heroTitle: "Taxi Orly Airport → Paris",
        heroSubtitle: "Your Orly → Paris transfer at a fixed price of €35–€45. Personalised welcome, real-time flight tracking.",
        description: "Your driver awaits you at Orly exit and drives you directly to your destination in Paris. Personalised meet & greet service with name board.",
        routeDescription: "The route from Orly takes the A6 towards Paris, then joins the ring road or the southern gates of Paris depending on your final destination.",
        faq: [
          { question: "What is the fare for a taxi Orly — Paris?", answer: "The flat rate is €35 to €45 depending on your destination in Paris. Guaranteed price with no surcharges." },
          { question: "Where do I find my driver at Orly?", answer: "Your driver waits for you in the arrivals area with a name board. You receive an SMS with their contact details." },
          { question: "Is waiting charged if my flight is delayed?", answer: "No, waiting is free for up to 45 minutes after landing thanks to real-time flight tracking." },
          { question: "Can I pay by card?", answer: "Yes, payment can be made by bank card, Apple Pay or cash directly in the vehicle." },
        ],
      },
    },
  },
  {
    slug: "cdg-disneyland",
    from: "Aéroport CDG",
    to: "Disneyland Paris",
    fromLat: 49.0097,
    fromLng: 2.5479,
    toLat: 48.8674,
    toLng: 2.7836,
    distanceKm: 42,
    durationMin: 40,
    priceEstimate: "60 — 80 €",
    category: "aeroport",
    highlights: ["A104 Francilienne", "Val d'Europe", "Marne-la-Vallée"],
    i18n: {
      fr: {
        metaTitle: "Taxi Aéroport CDG → Disneyland Paris | 42 km, 60 € | TaxiNeo",
        metaDescription: "Via A104 Francilienne en 40 min. A104 Francilienne, Val d'Europe et Marne-la-Vallée en chemin. Accueil au terminal, attente gratuite si retard de vol.",
        heroTitle: "Taxi CDG → Disneyland Paris",
        heroSubtitle: "Votre transfert CDG → Disneyland au prix fixe de 60 — 80 €. Idéal pour les familles avec enfants.",
        description: "Le transfert CDG — Disneyland est le trajet idéal pour les familles arrivant en France. En 40 minutes, rejoignez directement votre hôtel Disney ou l'entrée du parc sans escale ni correspondance.",
        routeDescription: "Le trajet emprunte la Francilienne (A104) puis l'A4 direction Metz. La sortie Marne-la-Vallée / Val d'Europe mène directement au complexe Disneyland Paris.",
        faq: [
          { question: "Combien coûte un taxi CDG — Disneyland ?", answer: "Le forfait est de 60 à 80 € selon le terminal de départ et votre hôtel Disney exact. Jusqu'à 4 passagers et bagages inclus." },
          { question: "Le chauffeur peut-il me déposer à mon hôtel Disney ?", answer: "Oui, votre chauffeur vous dépose directement devant votre hôtel : Disneyland Hotel, Newport Bay, Sequoia Lodge, Santa Fe ou tout autre hébergement du complexe." },
          { question: "Un siège enfant est-il disponible ?", answer: "Oui, précisez-le lors de la réservation et un siège enfant adapté sera installé gratuitement dans le véhicule." },
          { question: "Peut-on réserver un van pour un groupe ?", answer: "Oui, nos vans accueillent jusqu'à 8 passagers avec bagages. Tarif sur devis." },
        ],
      },
      en: {
        metaTitle: "Taxi Aéroport CDG → Disneyland Paris | 42 km, €60 | TaxiNeo",
        metaDescription: "Via A104 Francilienne, 40 min ride. A104 Francilienne, Val d'Europe and Marne-la-Vallée along the way. Terminal drop-off, real-time flight tracking included.",
        heroTitle: "Taxi CDG → Disneyland Paris",
        heroSubtitle: "Your CDG → Disneyland transfer at a fixed price of €60–€80. Perfect for families with children.",
        description: "The CDG — Disneyland transfer is the ideal journey for families arriving in France. In 40 minutes, reach your Disney hotel or the park entrance directly without stops or connections.",
        routeDescription: "The route takes the Francilienne (A104) then the A4 towards Metz. The Marne-la-Vallée / Val d'Europe exit leads directly to the Disneyland Paris complex.",
        faq: [
          { question: "How much is a taxi CDG — Disneyland?", answer: "The flat rate is €60 to €80 depending on the departure terminal and your exact Disney hotel. Up to 4 passengers and luggage included." },
          { question: "Can the driver drop me at my Disney hotel?", answer: "Yes, your driver drops you off directly in front of your hotel: Disneyland Hotel, Newport Bay, Sequoia Lodge, Santa Fe or any other accommodation in the complex." },
          { question: "Is a child seat available?", answer: "Yes, specify it when booking and a suitable child seat will be installed free of charge in the vehicle." },
          { question: "Can I book a van for a group?", answer: "Yes, our vans accommodate up to 8 passengers with luggage. Price on request." },
        ],
      },
    },
  },
  {
    slug: "orly-disneyland",
    from: "Aéroport d'Orly",
    to: "Disneyland Paris",
    fromLat: 48.7262,
    fromLng: 2.3652,
    toLat: 48.8674,
    toLng: 2.7836,
    distanceKm: 55,
    durationMin: 50,
    priceEstimate: "70 — 90 €",
    category: "aeroport",
    highlights: ["A86", "A4 Autoroute de l'Est", "Val d'Europe"],
    i18n: {
      fr: {
        metaTitle: "Taxi Aéroport d'Orly → Disneyland Paris | 55 km | TaxiNeo",
        metaDescription: "Via A86 en 50 min. A4 Autoroute de l'Est et Val d'Europe en chemin. Dépose au terminal exact, suivi de vol en temps réel.",
        heroTitle: "Taxi Orly → Disneyland Paris",
        heroSubtitle: "Votre transfert Orly → Disneyland au prix fixe de 70 — 90 €. Confort garanti pour toute la famille.",
        description: "Rejoignez Disneyland Paris depuis Orly en 50 minutes. Transfert direct et confortable, idéal après un vol avec des enfants fatigués.",
        routeDescription: "L'itinéraire emprunte l'A86 puis l'A4 en direction de Marne-la-Vallée. Le trajet contourne Paris par le sud-est.",
        faq: [
          { question: "Combien coûte un taxi Orly — Disneyland ?", answer: "Le forfait est de 70 à 90 € tout compris, bagages inclus, jusqu'à 4 passagers." },
          { question: "Le trajet Orly — Disneyland est-il long ?", answer: "Comptez environ 50 minutes en conditions normales, un peu plus aux heures de pointe." },
          { question: "Peut-on réserver pour une arrivée tardive ?", answer: "Oui, service 24h/24. Un supplément nuit de 15% s'applique entre 19h et 7h." },
          { question: "Y a-t-il des sièges bébé ?", answer: "Oui, des sièges bébé et rehausseurs sont disponibles gratuitement sur demande lors de la réservation." },
        ],
      },
      en: {
        metaTitle: "Taxi Aéroport d'Orly → Disneyland Paris | 55 km | TaxiNeo",
        metaDescription: "Via A86, 50 min ride. A4 Autoroute de l'Est and Val d'Europe along the way. Terminal drop-off, flight tracking. Meet at terminal, free wait if flight delayed.",
        heroTitle: "Taxi Orly → Disneyland Paris",
        heroSubtitle: "Your Orly → Disneyland transfer at a fixed price of €70–€90. Guaranteed comfort for the whole family.",
        description: "Reach Disneyland Paris from Orly in 50 minutes. Direct and comfortable transfer, ideal after a flight with tired children.",
        routeDescription: "The route takes the A86 then the A4 towards Marne-la-Vallée. The journey bypasses Paris via the south-east.",
        faq: [
          { question: "How much is a taxi Orly — Disneyland?", answer: "The flat rate is €70 to €90 all inclusive, luggage included, up to 4 passengers." },
          { question: "Is the Orly — Disneyland journey long?", answer: "Allow about 50 minutes under normal conditions, a little more during rush hours." },
          { question: "Can I book for a late arrival?", answer: "Yes, service available 24/7. A 15% night surcharge applies between 7pm and 7am." },
          { question: "Are baby seats available?", answer: "Yes, baby seats and booster seats are available free of charge on request when booking." },
        ],
      },
    },
  },
  {
    slug: "cdg-orly",
    from: "Aéroport CDG",
    to: "Aéroport d'Orly",
    fromLat: 49.0097,
    fromLng: 2.5479,
    toLat: 48.7262,
    toLng: 2.3652,
    distanceKm: 40,
    durationMin: 45,
    priceEstimate: "65 — 85 €",
    category: "aeroport",
    highlights: ["A1", "Périphérique Est", "A6"],
    i18n: {
      fr: {
        metaTitle: "Taxi Aéroport CDG → Aéroport d'Orly | 40 km, 65 € | TaxiNeo",
        metaDescription: "Via A1 en 45 min. Passage par Périphérique Est. Dépose au terminal exact, suivi de vol en temps réel. Accueil au terminal, attente gratuite si retard de vol.",
        heroTitle: "Taxi CDG → Orly",
        heroSubtitle: "Transfert inter-aéroport CDG → Orly au prix fixe de 65 — 85 €. Correspondance rapide et confortable.",
        description: "Le transfert CDG — Orly est essentiel pour les voyageurs en correspondance entre les deux aéroports parisiens. Plus rapide et confortable que les transports en commun, c'est la solution idéale pour ne pas rater votre vol.",
        routeDescription: "Le trajet relie les deux aéroports en contournant Paris par le périphérique est. L'itinéraire passe par l'A1, le périphérique puis l'A6 direction Orly.",
        faq: [
          { question: "Combien coûte un taxi CDG — Orly ?", answer: "Le transfert inter-aéroport CDG — Orly coûte entre 65 € et 85 € au forfait." },
          { question: "Combien de temps pour aller de CDG à Orly ?", answer: "Environ 45 minutes en conditions normales, jusqu'à 1h15 aux heures de pointe." },
          { question: "Le chauffeur m'attend-il à CDG si mon vol a du retard ?", answer: "Oui, avec le suivi de vol, votre chauffeur ajuste son arrivée. Attente gratuite 45 min après atterrissage." },
          { question: "Y a-t-il des alternatives plus économiques ?", answer: "Le bus OrlyVal + RER B est moins cher mais prend 1h30 minimum avec correspondances. Le taxi est plus rapide et direct." },
        ],
      },
      en: {
        metaTitle: "Taxi Aéroport CDG → Aéroport d'Orly | 40 km, €65 | TaxiNeo",
        metaDescription: "Via A1, 45 min ride. Périphérique Est along the way. Terminal drop-off, real-time flight tracking included. Meet at terminal, free wait if flight delayed.",
        heroTitle: "Taxi CDG → Orly",
        heroSubtitle: "Inter-airport transfer CDG → Orly at a fixed price of €65–€85. Fast and comfortable connection.",
        description: "The CDG — Orly transfer is essential for travellers connecting between Paris's two airports. Faster and more comfortable than public transport, it's the ideal solution to avoid missing your flight.",
        routeDescription: "The journey connects the two airports by bypassing Paris via the eastern ring road. The route takes the A1, the ring road then the A6 towards Orly.",
        faq: [
          { question: "How much is a taxi CDG — Orly?", answer: "The inter-airport transfer CDG — Orly costs between €65 and €85 at a flat rate." },
          { question: "How long from CDG to Orly?", answer: "About 45 minutes under normal conditions, up to 1h15 during rush hours." },
          { question: "Does the driver wait if my flight is delayed?", answer: "Yes, with flight tracking, your driver adjusts their arrival. Free waiting 45 min after landing." },
          { question: "Are there cheaper alternatives?", answer: "The OrlyVal bus + RER B is cheaper but takes at least 1h30 with connections. The taxi is faster and direct." },
        ],
      },
    },
  },
  {
    slug: "orly-versailles",
    from: "Aéroport d'Orly",
    to: "Versailles",
    fromLat: 48.7262,
    fromLng: 2.3652,
    toLat: 48.8048,
    toLng: 2.1204,
    distanceKm: 25,
    durationMin: 30,
    priceEstimate: "40 — 55 €",
    category: "aeroport",
    highlights: ["A86", "Vélizy-Villacoublay", "Château de Versailles"],
    i18n: {
      fr: {
        metaTitle: "Taxi Aéroport d'Orly → Versailles | 25 km, 40 € | TaxiNeo",
        metaDescription: "Via A86 en 30 min. Vélizy-Villacoublay et Château de Versailles en chemin. Suivi de vol, dépose directe au terminal.",
        heroTitle: "Taxi Orly → Versailles",
        heroSubtitle: "Transfert Orly → Versailles au prix fixe de 40 — 55 €. Direct vers le Château ou votre hébergement.",
        description: "Rejoignez Versailles et son célèbre château directement depuis l'aéroport d'Orly. Un trajet court et direct pour débuter votre visite sans perdre de temps.",
        routeDescription: "L'itinéraire passe par l'A86 en direction de Vélizy-Villacoublay, puis rejoint Versailles par la N12.",
        faq: [
          { question: "Combien coûte un taxi Orly — Versailles ?", answer: "Le forfait est de 40 à 55 €, bagages et pourboire non obligatoire inclus." },
          { question: "Quelle est la durée du trajet Orly — Versailles ?", answer: "Environ 30 minutes en conditions normales de circulation." },
          { question: "Le chauffeur peut-il me déposer au Château ?", answer: "Oui, votre chauffeur vous dépose directement à l'entrée du Château de Versailles ou à votre hôtel." },
          { question: "Peut-on réserver un aller-retour ?", answer: "Oui, vous pouvez réserver un aller-retour avec attente du chauffeur sur place. Devis sur demande." },
        ],
      },
      en: {
        metaTitle: "Taxi Aéroport d'Orly → Versailles | 25 km, €40 | TaxiNeo",
        metaDescription: "Via A86, 30 min ride. Vélizy-Villacoublay and Palace of Versailles along the way. Terminal drop-off, real-time flight tracking included. Card payment accepted.",
        heroTitle: "Taxi Orly → Versailles",
        heroSubtitle: "Transfer Orly → Versailles at a fixed price of €40–€55. Direct to the Palace or your accommodation.",
        description: "Reach Versailles and its famous palace directly from Orly Airport. A short, direct journey to start your visit without wasting time.",
        routeDescription: "The route takes the A86 towards Vélizy-Villacoublay, then joins Versailles via the N12.",
        faq: [
          { question: "How much is a taxi Orly — Versailles?", answer: "The flat rate is €40 to €55, luggage included." },
          { question: "How long is the Orly — Versailles journey?", answer: "About 30 minutes under normal traffic conditions." },
          { question: "Can the driver drop me at the Palace?", answer: "Yes, your driver drops you off directly at the entrance of the Palace of Versailles or at your hotel." },
          { question: "Can I book a round trip?", answer: "Yes, you can book a round trip with driver waiting on site. Quote on request." },
        ],
      },
    },
  },
  {
    slug: "cdg-la-defense",
    from: "Aéroport CDG",
    to: "La Défense",
    fromLat: 49.0097,
    fromLng: 2.5479,
    toLat: 48.8918,
    toLng: 2.2382,
    distanceKm: 30,
    durationMin: 40,
    priceEstimate: "55 — 70 €",
    category: "aeroport",
    highlights: ["A1", "A86", "Grande Arche de La Défense"],
    i18n: {
      fr: {
        metaTitle: "Taxi Aéroport CDG → La Défense | 30 km, dès 55 € | TaxiNeo",
        metaDescription: "Via A1 en 40 min. Passage par Grande Arche de La Défense. Dépose au terminal exact, suivi de vol en temps réel.",
        heroTitle: "Taxi CDG → La Défense",
        heroSubtitle: "Transfert CDG → La Défense au prix fixe de 55 — 70 €. Solution business rapide et fiable.",
        description: "Le transfert CDG — La Défense est prisé par les voyageurs d'affaires. Rejoignez le premier quartier d'affaires européen directement depuis l'aéroport, sans détour par Paris.",
        routeDescription: "Le trajet emprunte l'A1 puis l'A86 ouest pour rejoindre La Défense directement, en évitant le centre de Paris.",
        faq: [
          { question: "Quel est le prix du taxi CDG — La Défense ?", answer: "Le forfait est de 55 à 70 € selon le terminal de départ. Prix garanti." },
          { question: "Le trajet est-il plus rapide que le RER ?", answer: "Oui, le taxi met 40 min contre 1h15 minimum en RER B + métro/RER A. Sans bagages à porter." },
          { question: "Puis-je avoir une facture entreprise ?", answer: "Oui, une facture professionnelle est émise automatiquement. Compatible TaxiNeo Business." },
          { question: "Y a-t-il des véhicules premium ?", answer: "Oui, des berlines premium (Mercedes Classe E, BMW Série 5) sont disponibles sur demande." },
        ],
      },
      en: {
        metaTitle: "Taxi Aéroport CDG → La Défense | 30 km, from €55 | TaxiNeo",
        metaDescription: "Via A1, 40 min ride. Past Grande Arche de La Défense. Terminal drop-off, real-time flight tracking included. Meet at terminal, free wait if flight delayed.",
        heroTitle: "Taxi CDG → La Défense",
        heroSubtitle: "Transfer CDG → La Défense at a fixed price of €55–€70. Fast and reliable business solution.",
        description: "The CDG — La Défense transfer is popular with business travellers. Reach Europe's largest business district directly from the airport, with no detour through Paris.",
        routeDescription: "The route takes the A1 then the western A86 to reach La Défense directly, avoiding central Paris.",
        faq: [
          { question: "What is the price of a taxi CDG — La Défense?", answer: "The flat rate is €55 to €70 depending on the departure terminal. Guaranteed price." },
          { question: "Is the journey faster than the RER?", answer: "Yes, the taxi takes 40 min compared to at least 1h15 by RER B + metro/RER A. No luggage to carry." },
          { question: "Can I get a business invoice?", answer: "Yes, a professional invoice is issued automatically. Compatible with TaxiNeo Business." },
          { question: "Are premium vehicles available?", answer: "Yes, premium sedans (Mercedes E-Class, BMW 5 Series) are available on request." },
        ],
      },
    },
  },
  {
    slug: "beauvais-paris",
    from: "Aéroport de Beauvais",
    to: "Paris",
    fromLat: 49.4544,
    fromLng: 2.1128,
    toLat: 48.8566,
    toLng: 2.3522,
    distanceKm: 85,
    durationMin: 75,
    priceEstimate: "120 — 150 €",
    category: "aeroport",
    highlights: ["A16", "Chantilly", "A1 Autoroute du Nord"],
    i18n: {
      fr: {
        metaTitle: "Taxi Aéroport de Beauvais → Paris | 85 km, 120 € | TaxiNeo",
        metaDescription: "Via A16 en 1h15. Chantilly et A1 Autoroute du Nord en chemin. Dépose au terminal, suivi de vol. Accueil au terminal, attente gratuite si retard de vol.",
        heroTitle: "Taxi Beauvais → Paris",
        heroSubtitle: "Transfert Beauvais → Paris au prix fixe de 120 — 150 €. Plus rapide et confortable que la navette.",
        description: "L'aéroport de Beauvais-Tillé, utilisé par les compagnies low-cost comme Ryanair et Wizz Air, est situé à 85 km de Paris. Le taxi est l'alternative la plus confortable à la navette bus (1h15 à 2h).",
        routeDescription: "Le trajet emprunte l'A16 puis l'A1 pour rejoindre Paris par le nord. Le paysage traverse la campagne picarde et le sud de l'Oise.",
        faq: [
          { question: "Combien coûte un taxi Beauvais — Paris ?", answer: "Le forfait est de 120 à 150 € selon l'adresse de destination. C'est plus cher que la navette mais beaucoup plus rapide et confortable." },
          { question: "Le taxi est-il plus rapide que la navette ?", answer: "Oui, le taxi met environ 1h15 contre 1h30 à 2h pour la navette, avec le confort du porte-à-porte." },
          { question: "Peut-on partager les frais à plusieurs ?", answer: "Oui, à 3 ou 4 passagers le prix par personne revient à 30-40 €, comparable à la navette." },
          { question: "Le chauffeur m'attend si l'avion a du retard ?", answer: "Oui, attente gratuite 45 min après atterrissage grâce au suivi de vol en temps réel." },
        ],
      },
      en: {
        metaTitle: "Taxi Aéroport de Beauvais → Paris | 85 km, €120 | TaxiNeo",
        metaDescription: "Via A16, 1h15 ride. Chantilly and A1 Autoroute du Nord along the way. Terminal drop-off, real-time flight tracking included.",
        heroTitle: "Taxi Beauvais → Paris",
        heroSubtitle: "Transfer Beauvais → Paris at a fixed price of €120–€150. Faster and more comfortable than the shuttle.",
        description: "Beauvais-Tillé Airport, used by low-cost airlines like Ryanair and Wizz Air, is located 85 km from Paris. The taxi is the most comfortable alternative to the shuttle bus (1h15 to 2h).",
        routeDescription: "The route takes the A16 then the A1 to reach Paris from the north. The landscape crosses the Picardy countryside and the south of the Oise.",
        faq: [
          { question: "How much is a taxi Beauvais — Paris?", answer: "The flat rate is €120 to €150 depending on the destination address. More expensive than the shuttle but much faster and more comfortable." },
          { question: "Is the taxi faster than the shuttle?", answer: "Yes, the taxi takes about 1h15 compared to 1h30 to 2h for the shuttle, with door-to-door comfort." },
          { question: "Can we share the cost between several people?", answer: "Yes, with 3 or 4 passengers the price per person comes to €30-40, comparable to the shuttle." },
          { question: "Does the driver wait if the plane is late?", answer: "Yes, free waiting 45 min after landing thanks to real-time flight tracking." },
        ],
      },
    },
  },
  {
    slug: "nice-aeroport-centre",
    from: "Aéroport Nice",
    to: "Nice Centre",
    fromLat: 43.6584,
    fromLng: 7.2158,
    toLat: 43.7102,
    toLng: 7.2620,
    distanceKm: 7,
    durationMin: 15,
    priceEstimate: "25 — 35 €",
    category: "aeroport",
    highlights: ["Promenade des Anglais", "Baie des Anges"],
    i18n: {
      fr: {
        metaTitle: "Taxi Aéroport Nice → Nice Centre | 7 km, dès 25 € | TaxiNeo",
        metaDescription: "Trajet direct en 15 min. Promenade des Anglais et Baie des Anges en chemin. Suivi de vol, dépose directe au terminal.",
        heroTitle: "Taxi Aéroport Nice → Nice Centre",
        heroSubtitle: "Transfert Aéroport Nice → Nice Centre au prix fixe de 25 — 35 €.",
        description: "L'aéroport de Nice est à seulement 7 km du centre-ville. Profitez d'un transfert rapide le long de la Promenade des Anglais.",
        routeDescription: "Le trajet longe la Promenade des Anglais avec vue sur la Baie des Anges avant de rejoindre le centre-ville.",
        faq: [
          { question: "Combien coûte un taxi Nice Aéroport — Centre ?", answer: "Le forfait est de 25 à 35 € selon l'adresse exacte dans Nice." },
          { question: "Combien de temps dure le trajet ?", answer: "Environ 15 minutes en conditions normales." },
          { question: "Où retrouver mon chauffeur ?", answer: "Votre chauffeur vous attend en zone d'arrivée avec une pancarte à votre nom." },
          { question: "Y a-t-il un supplément la nuit ?", answer: "Un supplément de 15 % s'applique entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Aéroport Nice → Nice Centre | 7 km, from €25 | TaxiNeo",
        metaDescription: "Direct 15 min ride. Promenade des Anglais and Baie des Anges along the way. Terminal drop-off, flight tracking. Meet at terminal, free wait if flight delayed.",
        heroTitle: "Taxi Nice Airport → Nice Centre",
        heroSubtitle: "Nice Airport → Nice Centre transfer at a fixed price of €25–€35.",
        description: "Nice Airport is just 7 km from the city centre. Enjoy a quick transfer along the Promenade des Anglais.",
        routeDescription: "The route follows the Promenade des Anglais with views of the Baie des Anges before reaching the city centre.",
        faq: [
          { question: "How much is a taxi Nice Airport — Centre?", answer: "The flat rate is €25 to €35 depending on the exact address in Nice." },
          { question: "How long is the journey?", answer: "About 15 minutes under normal conditions." },
          { question: "Where do I find my driver?", answer: "Your driver waits in the arrivals area with a name board." },
          { question: "Is there a night surcharge?", answer: "A 15% surcharge applies between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "nice-aeroport-cannes",
    from: "Aéroport Nice",
    to: "Cannes",
    fromLat: 43.6584,
    fromLng: 7.2158,
    toLat: 43.5528,
    toLng: 7.0174,
    distanceKm: 30,
    durationMin: 35,
    priceEstimate: "55 — 70 €",
    category: "aeroport",
    highlights: ["A8 Autoroute", "Antibes", "La Croisette"],
    i18n: {
      fr: {
        metaTitle: "Taxi Aéroport Nice → Cannes | 30 km, dès 55 € | TaxiNeo",
        metaDescription: "Itinéraire A8 Autoroute, environ 35 min. En passant par A8 Autoroute, Antibes et La Croisette. Accueil au terminal, attente gratuite si retard de vol.",
        heroTitle: "Taxi Aéroport Nice → Cannes",
        heroSubtitle: "Transfert Aéroport Nice → Cannes au prix fixe de 55 — 70 €.",
        description: "Rejoignez Cannes et la Croisette directement depuis l'aéroport de Nice en 35 minutes via l'autoroute A8.",
        routeDescription: "L'itinéraire emprunte l'A8 en longeant la côte, en passant par Antibes avant d'arriver à Cannes.",
        faq: [
          { question: "Combien coûte un taxi Nice Aéroport — Cannes ?", answer: "Le forfait est de 55 à 70 € tout compris." },
          { question: "Combien de temps dure le trajet ?", answer: "Environ 35 minutes par l'autoroute A8." },
          { question: "Le chauffeur peut-il me déposer à mon hôtel ?", answer: "Oui, directement devant votre hôtel ou tout lieu à Cannes." },
          { question: "Peut-on réserver pendant le Festival de Cannes ?", answer: "Oui, réservation recommandée à l'avance pendant le festival." },
        ],
      },
      en: {
        metaTitle: "Taxi Aéroport Nice → Cannes | 30 km, from €55 | TaxiNeo",
        metaDescription: "A8 Autoroute route, approximately 35 min. A8 Autoroute, Antibes and La Croisette along the way. Terminal drop-off, real-time flight tracking included.",
        heroTitle: "Taxi Nice Airport → Cannes",
        heroSubtitle: "Nice Airport → Cannes transfer at a fixed price of €55–€70.",
        description: "Reach Cannes and La Croisette directly from Nice Airport in 35 minutes via the A8 motorway.",
        routeDescription: "The route takes the A8 along the coast, passing through Antibes before arriving in Cannes.",
        faq: [
          { question: "How much is a taxi Nice Airport — Cannes?", answer: "The flat rate is €55 to €70 all inclusive." },
          { question: "How long is the journey?", answer: "About 35 minutes via the A8 motorway." },
          { question: "Can the driver drop me at my hotel?", answer: "Yes, directly in front of your hotel or any location in Cannes." },
          { question: "Can I book during the Cannes Film Festival?", answer: "Yes, advance booking is recommended during the festival." },
        ],
      },
    },
  },
  {
    slug: "lyon-aeroport-centre",
    from: "Aéroport Lyon Saint-Exupéry",
    to: "Lyon Centre",
    fromLat: 45.7256,
    fromLng: 5.0811,
    toLat: 45.7640,
    toLng: 4.8357,
    distanceKm: 25,
    durationMin: 30,
    priceEstimate: "50 — 65 €",
    category: "aeroport",
    highlights: ["A43", "Vieux Lyon", "Part-Dieu"],
    i18n: {
      fr: {
        metaTitle: "Taxi Lyon St-Exupéry → Lyon Centre | 25 km, 50 € | TaxiNeo",
        metaDescription: "Via A43 en 30 min. Vieux Lyon et Part-Dieu en chemin. Accueil au terminal, attente gratuite si retard de vol. Suivi de vol, dépose directe au terminal.",
        heroTitle: "Taxi Aéroport Lyon → Lyon Centre",
        heroSubtitle: "Transfert Aéroport Lyon Saint-Exupéry → Lyon Centre au prix fixe de 50 — 65 €.",
        description: "L'aéroport Lyon Saint-Exupéry est à 25 km du centre de Lyon. Votre chauffeur vous conduit directement à votre destination.",
        routeDescription: "Le trajet emprunte l'A43 pour rejoindre Lyon, en passant à proximité de la gare Part-Dieu et du Vieux Lyon.",
        faq: [
          { question: "Combien coûte un taxi Lyon Aéroport — Centre ?", answer: "Le forfait est de 50 à 65 € selon l'adresse dans Lyon." },
          { question: "Combien de temps dure le trajet ?", answer: "Environ 30 minutes en conditions normales." },
          { question: "Y a-t-il un service de nuit ?", answer: "Oui, service 24h/24 avec supplément nuit de 15 %." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance." },
        ],
      },
      en: {
        metaTitle: "Taxi Lyon St-Exupéry → Lyon Centre | 25 km, €50 | TaxiNeo",
        metaDescription: "Via A43, 30 min ride. Vieux Lyon and Part-Dieu along the way. Terminal drop-off, real-time flight tracking included.",
        heroTitle: "Taxi Lyon Airport → Lyon Centre",
        heroSubtitle: "Lyon Saint-Exupéry Airport → Lyon Centre transfer at a fixed price of €50–€65.",
        description: "Lyon Saint-Exupéry Airport is 25 km from Lyon city centre. Your driver takes you directly to your destination.",
        routeDescription: "The route takes the A43 into Lyon, passing near Part-Dieu station and Vieux Lyon.",
        faq: [
          { question: "How much is a taxi Lyon Airport — Centre?", answer: "The flat rate is €50 to €65 depending on the address in Lyon." },
          { question: "How long is the journey?", answer: "About 30 minutes under normal conditions." },
          { question: "Is there a night service?", answer: "Yes, 24/7 service with a 15% night surcharge." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance." },
        ],
      },
    },
  },
  {
    slug: "marseille-aeroport-centre",
    from: "Aéroport Marseille-Provence",
    to: "Marseille Centre",
    fromLat: 43.4393,
    fromLng: 5.2214,
    toLat: 43.2965,
    toLng: 5.3698,
    distanceKm: 27,
    durationMin: 30,
    priceEstimate: "50 — 65 €",
    category: "aeroport",
    highlights: ["A7 Autoroute du Soleil", "L'Estaque", "Vieux-Port"],
    i18n: {
      fr: {
        metaTitle: "Taxi Marseille-Provence → Marseille Centre | 27 km | TaxiNeo",
        metaDescription: "Via A7 Autoroute du Soleil en 30 min. A7 Autoroute du Soleil, L'Estaque et Vieux-Port en chemin. Dépose au terminal exact, suivi de vol en temps réel.",
        heroTitle: "Taxi Aéroport Marseille → Marseille Centre",
        heroSubtitle: "Transfert Aéroport Marseille-Provence → Marseille Centre au prix fixe de 50 — 65 €.",
        description: "L'aéroport Marseille-Provence est situé à 27 km du centre-ville. Rejoignez le Vieux-Port rapidement en taxi.",
        routeDescription: "Le trajet emprunte l'A7 Autoroute du Soleil, en passant par L'Estaque avant de rejoindre le centre de Marseille.",
        faq: [
          { question: "Combien coûte un taxi Marseille Aéroport — Centre ?", answer: "Le forfait est de 50 à 65 € selon la destination." },
          { question: "Combien de temps dure le trajet ?", answer: "Environ 30 minutes en conditions normales." },
          { question: "Le chauffeur m'attend-il à l'arrivée ?", answer: "Oui, accueil en zone d'arrivée avec pancarte à votre nom." },
          { question: "Peut-on payer par carte ?", answer: "Oui, paiement par carte bancaire, Apple Pay ou espèces." },
        ],
      },
      en: {
        metaTitle: "Taxi Marseille-Provence → Marseille Centre | 27 km | TaxiNeo",
        metaDescription: "Via A7 Autoroute du Soleil, 30 min ride. A7 Autoroute du Soleil, L'Estaque and Vieux-Port along the way. Terminal drop-off, real-time flight tracking included.",
        heroTitle: "Taxi Marseille Airport → Marseille Centre",
        heroSubtitle: "Marseille-Provence Airport → Marseille Centre transfer at a fixed price of €50–€65.",
        description: "Marseille-Provence Airport is 27 km from the city centre. Reach the Vieux-Port quickly by taxi.",
        routeDescription: "The route takes the A7 Autoroute du Soleil, passing through L'Estaque before reaching central Marseille.",
        faq: [
          { question: "How much is a taxi Marseille Airport — Centre?", answer: "The flat rate is €50 to €65 depending on the destination." },
          { question: "How long is the journey?", answer: "About 30 minutes under normal conditions." },
          { question: "Does the driver meet me at arrivals?", answer: "Yes, meet & greet in the arrivals area with a name board." },
          { question: "Can I pay by card?", answer: "Yes, payment by bank card, Apple Pay or cash." },
        ],
      },
    },
  },
  {
    slug: "toulouse-aeroport-centre",
    from: "Aéroport Toulouse-Blagnac",
    to: "Toulouse Centre",
    fromLat: 43.6293,
    fromLng: 1.3638,
    toLat: 43.6047,
    toLng: 1.4442,
    distanceKm: 12,
    durationMin: 20,
    priceEstimate: "30 — 40 €",
    category: "aeroport",
    highlights: ["Rocade", "Capitole"],
    i18n: {
      fr: {
        metaTitle: "Taxi Toulouse-Blagnac → Toulouse Centre | 12 km | TaxiNeo",
        metaDescription: "Trajet direct en 20 min. Rocade et Capitole en chemin. Dépose au terminal exact, suivi de vol en temps réel.",
        heroTitle: "Taxi Aéroport Toulouse → Toulouse Centre",
        heroSubtitle: "Transfert Aéroport Toulouse-Blagnac → Toulouse Centre au prix fixe de 30 — 40 €.",
        description: "L'aéroport Toulouse-Blagnac est à 12 km du centre-ville. Rejoignez la place du Capitole en 20 minutes.",
        routeDescription: "Le trajet passe par la rocade toulousaine avant de rejoindre le centre-ville et la place du Capitole.",
        faq: [
          { question: "Combien coûte un taxi Toulouse Aéroport — Centre ?", answer: "Le forfait est de 30 à 40 € selon l'adresse." },
          { question: "Combien de temps dure le trajet ?", answer: "Environ 20 minutes en conditions normales." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles jour et nuit." },
          { question: "Peut-on réserver pour un groupe ?", answer: "Oui, vans disponibles jusqu'à 8 passagers sur demande." },
        ],
      },
      en: {
        metaTitle: "Taxi Toulouse-Blagnac → Toulouse Centre | 12 km | TaxiNeo",
        metaDescription: "Direct 20 min ride. Rocade and Capitole along the way. Terminal drop-off, real-time flight tracking included. Meet at terminal, free wait if flight delayed.",
        heroTitle: "Taxi Toulouse Airport → Toulouse Centre",
        heroSubtitle: "Toulouse-Blagnac Airport → Toulouse Centre transfer at a fixed price of €30–€40.",
        description: "Toulouse-Blagnac Airport is 12 km from the city centre. Reach Place du Capitole in 20 minutes.",
        routeDescription: "The route takes the Toulouse ring road before reaching the city centre and Place du Capitole.",
        faq: [
          { question: "How much is a taxi Toulouse Airport — Centre?", answer: "The flat rate is €30 to €40 depending on the address." },
          { question: "How long is the journey?", answer: "About 20 minutes under normal conditions." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available day and night." },
          { question: "Can I book for a group?", answer: "Yes, vans available for up to 8 passengers on request." },
        ],
      },
    },
  },
  {
    slug: "bordeaux-aeroport-centre",
    from: "Aéroport Bordeaux-Mérignac",
    to: "Bordeaux Centre",
    fromLat: 44.8283,
    fromLng: -0.7156,
    toLat: 44.8378,
    toLng: -0.5792,
    distanceKm: 15,
    durationMin: 25,
    priceEstimate: "35 — 45 €",
    category: "aeroport",
    highlights: ["Rocade bordelaise", "Place de la Bourse"],
    i18n: {
      fr: {
        metaTitle: "Taxi Bordeaux-Mérignac → Bordeaux Centre | 15 km | TaxiNeo",
        metaDescription: "Trajet direct en 25 min. Rocade bordelaise et Place de la Bourse en chemin. Suivi de vol, dépose directe au terminal.",
        heroTitle: "Taxi Aéroport Bordeaux-Mérignac → Bordeaux Centre",
        heroSubtitle: "Votre transfert Aéroport Bordeaux-Mérignac → Bordeaux Centre au prix fixe de 35 — 45 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "L'aéroport de Bordeaux-Mérignac est à 15 km du centre. Rejoignez la place de la Bourse en 25 minutes.",
        routeDescription: "Le trajet emprunte la rocade bordelaise puis rejoint le centre-ville par les boulevards.",
        faq: [
          { question: "Quel est le prix d'un taxi Aéroport Bordeaux-Mérignac — Bordeaux Centre ?", answer: "Le forfait est de 35 — 45 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Aéroport Bordeaux-Mérignac — Bordeaux Centre ?", answer: "Environ 25 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Bordeaux-Mérignac → Bordeaux Centre | 15 km | TaxiNeo",
        metaDescription: "Direct 25 min ride. Rocade bordelaise and Place de la Bourse along the way. Terminal drop-off, flight tracking. Meet at terminal, free wait if flight delayed.",
        heroTitle: "Taxi Bordeaux-Mérignac Airport → Bordeaux Centre",
        heroSubtitle: "Your Bordeaux-Mérignac Airport → Bordeaux Centre transfer at a fixed price of €35–€45. Online booking, professional driver 24/7.",
        description: "Bordeaux-Mérignac Airport is 15 km from the centre. Reach Place de la Bourse in 25 minutes.",
        routeDescription: "The route takes the Bordeaux ring road then joins the city centre via the boulevards.",
        faq: [
          { question: "What is the price of a taxi Bordeaux-Mérignac Airport — Bordeaux Centre?", answer: "The flat rate is €35–€45 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Bordeaux-Mérignac Airport — Bordeaux Centre journey?", answer: "About 25 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "nantes-aeroport-centre",
    from: "Aéroport Nantes-Atlantique",
    to: "Nantes Centre",
    fromLat: 47.1532,
    fromLng: -1.6108,
    toLat: 47.2184,
    toLng: -1.5536,
    distanceKm: 12,
    durationMin: 20,
    priceEstimate: "30 — 40 €",
    category: "aeroport",
    highlights: ["Périphérique sud", "Île de Nantes"],
    i18n: {
      fr: {
        metaTitle: "Taxi Nantes-Atlantique → Nantes Centre | 12 km | TaxiNeo",
        metaDescription: "Trajet direct en 20 min. Périphérique sud et Île de Nantes en chemin. Dépose au terminal exact, suivi de vol en temps réel.",
        heroTitle: "Taxi Aéroport Nantes-Atlantique → Nantes Centre",
        heroSubtitle: "Votre transfert Aéroport Nantes-Atlantique → Nantes Centre au prix fixe de 30 — 40 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "L'aéroport Nantes-Atlantique est à 12 km du centre-ville. Un trajet court et direct vers l'Île de Nantes.",
        routeDescription: "Le trajet emprunte le périphérique sud nantais pour rejoindre le centre-ville.",
        faq: [
          { question: "Quel est le prix d'un taxi Aéroport Nantes-Atlantique — Nantes Centre ?", answer: "Le forfait est de 30 — 40 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Aéroport Nantes-Atlantique — Nantes Centre ?", answer: "Environ 20 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Nantes-Atlantique → Nantes Centre | 12 km | TaxiNeo",
        metaDescription: "Direct 20 min ride. Périphérique sud and Île de Nantes along the way. Terminal drop-off, real-time flight tracking included.",
        heroTitle: "Taxi Nantes-Atlantique Airport → Nantes Centre",
        heroSubtitle: "Your Nantes-Atlantique Airport → Nantes Centre transfer at a fixed price of €30–€40. Online booking, professional driver 24/7.",
        description: "Nantes-Atlantique Airport is 12 km from the city centre. A short, direct journey to Île de Nantes.",
        routeDescription: "The route takes the southern Nantes ring road to reach the city centre.",
        faq: [
          { question: "What is the price of a taxi Nantes-Atlantique Airport — Nantes Centre?", answer: "The flat rate is €30–€40 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Nantes-Atlantique Airport — Nantes Centre journey?", answer: "About 20 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "strasbourg-aeroport-centre",
    from: "Aéroport Strasbourg",
    to: "Strasbourg Centre",
    fromLat: 48.5384,
    fromLng: 7.6282,
    toLat: 48.5734,
    toLng: 7.7521,
    distanceKm: 15,
    durationMin: 20,
    priceEstimate: "30 — 40 €",
    category: "aeroport",
    highlights: ["A35", "Petite France", "Cathédrale"],
    i18n: {
      fr: {
        metaTitle: "Taxi Strasbourg → Strasbourg Centre | 15 km, 30 € | TaxiNeo",
        metaDescription: "Via A35 en 20 min. Petite France et Cathédrale en chemin. Dépose au terminal exact, suivi de vol en temps réel.",
        heroTitle: "Taxi Aéroport Strasbourg → Strasbourg Centre",
        heroSubtitle: "Votre transfert Aéroport Strasbourg → Strasbourg Centre au prix fixe de 30 — 40 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "L'aéroport de Strasbourg-Entzheim est à 15 km du centre. Rejoignez la Petite France en 20 minutes.",
        routeDescription: "Le trajet emprunte l'A35 puis rejoint le centre historique et la cathédrale.",
        faq: [
          { question: "Quel est le prix d'un taxi Aéroport Strasbourg — Strasbourg Centre ?", answer: "Le forfait est de 30 — 40 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Aéroport Strasbourg — Strasbourg Centre ?", answer: "Environ 20 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Strasbourg → Strasbourg Centre | 15 km, €30 | TaxiNeo",
        metaDescription: "Via A35, 20 min ride. Petite France and Cathédrale along the way. Terminal drop-off, real-time flight tracking included.",
        heroTitle: "Taxi Strasbourg Airport → Strasbourg Centre",
        heroSubtitle: "Your Strasbourg Airport → Strasbourg Centre transfer at a fixed price of €30–€40. Online booking, professional driver 24/7.",
        description: "Strasbourg-Entzheim Airport is 15 km from the centre. Reach Petite France in 20 minutes.",
        routeDescription: "The route takes the A35 then reaches the historic centre and the cathedral.",
        faq: [
          { question: "What is the price of a taxi Strasbourg Airport — Strasbourg Centre?", answer: "The flat rate is €30–€40 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Strasbourg Airport — Strasbourg Centre journey?", answer: "About 20 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "montpellier-aeroport-centre",
    from: "Aéroport Montpellier",
    to: "Montpellier Centre",
    fromLat: 43.5762,
    fromLng: 3.963,
    toLat: 43.6108,
    toLng: 3.8767,
    distanceKm: 10,
    durationMin: 15,
    priceEstimate: "25 — 35 €",
    category: "aeroport",
    highlights: ["D66", "Place de la Comédie"],
    i18n: {
      fr: {
        metaTitle: "Taxi Montpellier → Montpellier Centre | 10 km | TaxiNeo",
        metaDescription: "Via D66 en 15 min. Vue sur Place de la Comédie en chemin. Dépose au terminal exact, suivi de vol en temps réel.",
        heroTitle: "Taxi Aéroport Montpellier → Montpellier Centre",
        heroSubtitle: "Votre transfert Aéroport Montpellier → Montpellier Centre au prix fixe de 25 — 35 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "L'aéroport de Montpellier est à seulement 10 km. Rejoignez la place de la Comédie en 15 minutes.",
        routeDescription: "Le trajet emprunte la D66 pour rejoindre directement le centre-ville.",
        faq: [
          { question: "Quel est le prix d'un taxi Aéroport Montpellier — Montpellier Centre ?", answer: "Le forfait est de 25 — 35 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Aéroport Montpellier — Montpellier Centre ?", answer: "Environ 15 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Montpellier → Montpellier Centre | 10 km, €25 | TaxiNeo",
        metaDescription: "Via D66, 15 min ride. Place de la Comédie along the way. Terminal drop-off, real-time flight tracking included. Meet at terminal, free wait if flight delayed.",
        heroTitle: "Taxi Montpellier Airport → Montpellier Centre",
        heroSubtitle: "Your Montpellier Airport → Montpellier Centre transfer at a fixed price of €25–€35. Online booking, professional driver 24/7.",
        description: "Montpellier Airport is only 10 km away. Reach Place de la Comédie in 15 minutes.",
        routeDescription: "The route takes the D66 to reach the city centre directly.",
        faq: [
          { question: "What is the price of a taxi Montpellier Airport — Montpellier Centre?", answer: "The flat rate is €25–€35 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Montpellier Airport — Montpellier Centre journey?", answer: "About 15 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "cdg-gare-du-nord",
    from: "Aéroport CDG",
    to: "Gare du Nord",
    fromLat: 49.0097,
    fromLng: 2.5479,
    toLat: 48.8809,
    toLng: 2.3553,
    distanceKm: 28,
    durationMin: 35,
    priceEstimate: "50 — 65 €",
    category: "aeroport",
    highlights: ["A1", "Stade de France", "Gare Eurostar"],
    i18n: {
      fr: {
        metaTitle: "Taxi Aéroport CDG → Gare du Nord | 28 km, dès 50 € | TaxiNeo",
        metaDescription: "Via A1 en 35 min. Stade de France et Gare Eurostar en chemin. Dépose au terminal, suivi de vol. Accueil au terminal, attente gratuite si retard de vol.",
        heroTitle: "Taxi Aéroport CDG → Gare du Nord",
        heroSubtitle: "Votre transfert Aéroport CDG → Gare du Nord au prix fixe de 50 — 65 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert direct CDG — Gare du Nord pour les connexions Eurostar, Thalys et TGV Nord.",
        routeDescription: "L'itinéraire emprunte l'A1 puis rejoint la Gare du Nord par la Porte de la Chapelle.",
        faq: [
          { question: "Quel est le prix d'un taxi Aéroport CDG — Gare du Nord ?", answer: "Le forfait est de 50 — 65 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Aéroport CDG — Gare du Nord ?", answer: "Environ 35 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Aéroport CDG → Gare du Nord | 28 km, from €50 | TaxiNeo",
        metaDescription: "Via A1, 35 min ride. Stade de France and Gare Eurostar along the way. Terminal drop-off, real-time flight tracking included.",
        heroTitle: "Taxi CDG Airport → Gare du Nord",
        heroSubtitle: "Your CDG Airport → Gare du Nord transfer at a fixed price of €50–€65. Online booking, professional driver 24/7.",
        description: "Direct CDG — Gare du Nord transfer for Eurostar, Thalys and TGV Nord connections.",
        routeDescription: "The route takes the A1 then reaches Gare du Nord via Porte de la Chapelle.",
        faq: [
          { question: "What is the price of a taxi CDG Airport — Gare du Nord?", answer: "The flat rate is €50–€65 all inclusive. Price guaranteed at booking." },
          { question: "How long is the CDG Airport — Gare du Nord journey?", answer: "About 35 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "orly-gare-de-lyon",
    from: "Aéroport d'Orly",
    to: "Gare de Lyon",
    fromLat: 48.7262,
    fromLng: 2.3652,
    toLat: 48.8448,
    toLng: 2.3735,
    distanceKm: 18,
    durationMin: 25,
    priceEstimate: "35 — 50 €",
    category: "aeroport",
    highlights: ["A6", "Bercy", "Paris Rive Gauche"],
    i18n: {
      fr: {
        metaTitle: "Taxi Aéroport d'Orly → Gare de Lyon | 18 km, 36 € | TaxiNeo",
        metaDescription: "Via A6 en 25 min. Bercy et Paris Rive Gauche en chemin. Dépose au terminal exact, suivi de vol en temps réel.",
        heroTitle: "Taxi Aéroport d'Orly → Gare de Lyon",
        heroSubtitle: "Votre transfert Aéroport d'Orly → Gare de Lyon au prix fixe de 35 — 50 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Orly — Gare de Lyon pour vos correspondances TGV Sud-Est.",
        routeDescription: "Le trajet emprunte l'A6 puis rejoint la Gare de Lyon par le quai de Bercy.",
        faq: [
          { question: "Quel est le prix d'un taxi Aéroport d'Orly — Gare de Lyon ?", answer: "Le forfait est de 35 — 50 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Aéroport d'Orly — Gare de Lyon ?", answer: "Environ 25 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Aéroport d'Orly → Gare de Lyon | 18 km, €35 | TaxiNeo",
        metaDescription: "Via A6, 25 min ride. Bercy and Paris Rive Gauche along the way. Terminal drop-off, real-time flight tracking included.",
        heroTitle: "Taxi Orly Airport → Gare de Lyon",
        heroSubtitle: "Your Orly Airport → Gare de Lyon transfer at a fixed price of €35–€50. Online booking, professional driver 24/7.",
        description: "Orly — Gare de Lyon transfer for your TGV South-East connections.",
        routeDescription: "The route takes the A6 then reaches Gare de Lyon via Quai de Bercy.",
        faq: [
          { question: "What is the price of a taxi Orly Airport — Gare de Lyon?", answer: "The flat rate is €35–€50 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Orly Airport — Gare de Lyon journey?", answer: "About 25 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "cdg-marne-la-vallee",
    from: "Aéroport CDG",
    to: "Marne-la-Vallée",
    fromLat: 49.0097,
    fromLng: 2.5479,
    toLat: 48.8529,
    toLng: 2.7814,
    distanceKm: 40,
    durationMin: 40,
    priceEstimate: "60 — 75 €",
    category: "aeroport",
    highlights: ["A104", "Val d'Europe", "Chessy"],
    i18n: {
      fr: {
        metaTitle: "Taxi Aéroport CDG → Marne-la-Vallée | 40 km, 60 € | TaxiNeo",
        metaDescription: "Via A104 en 40 min. Val d'Europe et Chessy en chemin. Accueil au terminal, attente gratuite si retard de vol. Suivi de vol, dépose directe au terminal.",
        heroTitle: "Taxi Aéroport CDG → Marne-la-Vallée",
        heroSubtitle: "Votre transfert Aéroport CDG → Marne-la-Vallée au prix fixe de 60 — 75 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert CDG — Marne-la-Vallée, idéal pour rejoindre le Val d'Europe ou Chessy.",
        routeDescription: "Le trajet emprunte la Francilienne (A104) pour rejoindre Marne-la-Vallée directement.",
        faq: [
          { question: "Quel est le prix d'un taxi Aéroport CDG — Marne-la-Vallée ?", answer: "Le forfait est de 60 — 75 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Aéroport CDG — Marne-la-Vallée ?", answer: "Environ 40 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Aéroport CDG → Marne-la-Vallée | 40 km, €60 | TaxiNeo",
        metaDescription: "Via A104, 40 min ride. Val d'Europe and Chessy along the way. Terminal drop-off, real-time flight tracking included.",
        heroTitle: "Taxi CDG Airport → Marne-la-Vallée",
        heroSubtitle: "Your CDG Airport → Marne-la-Vallée transfer at a fixed price of €60–€75. Online booking, professional driver 24/7.",
        description: "CDG — Marne-la-Vallée transfer, ideal for reaching Val d'Europe or Chessy.",
        routeDescription: "The route takes the Francilienne (A104) to reach Marne-la-Vallée directly.",
        faq: [
          { question: "What is the price of a taxi CDG Airport — Marne-la-Vallée?", answer: "The flat rate is €60–€75 all inclusive. Price guaranteed at booking." },
          { question: "How long is the CDG Airport — Marne-la-Vallée journey?", answer: "About 40 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "orly-la-defense",
    from: "Aéroport d'Orly",
    to: "La Défense",
    fromLat: 48.7262,
    fromLng: 2.3652,
    toLat: 48.8918,
    toLng: 2.2382,
    distanceKm: 30,
    durationMin: 35,
    priceEstimate: "50 — 65 €",
    category: "aeroport",
    highlights: ["A86", "Pont de Sèvres", "Grande Arche"],
    i18n: {
      fr: {
        metaTitle: "Taxi Aéroport d'Orly → La Défense | 30 km, 50 € | TaxiNeo",
        metaDescription: "Via A86 en 35 min. Pont de Sèvres et Grande Arche en chemin. Dépose au terminal, suivi de vol. Accueil au terminal, attente gratuite si retard de vol.",
        heroTitle: "Taxi Aéroport d'Orly → La Défense",
        heroSubtitle: "Votre transfert Aéroport d'Orly → La Défense au prix fixe de 50 — 65 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Orly — La Défense pour les voyageurs d'affaires. Direct sans passer par Paris.",
        routeDescription: "L'itinéraire contourne Paris par l'A86 ouest, via le Pont de Sèvres.",
        faq: [
          { question: "Quel est le prix d'un taxi Aéroport d'Orly — La Défense ?", answer: "Le forfait est de 50 — 65 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Aéroport d'Orly — La Défense ?", answer: "Environ 35 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Aéroport d'Orly → La Défense | 30 km, €50 | TaxiNeo",
        metaDescription: "Via A86, 35 min ride. Pont de Sèvres and Grande Arche along the way. Terminal drop-off, real-time flight tracking included.",
        heroTitle: "Taxi Orly Airport → La Défense",
        heroSubtitle: "Your Orly Airport → La Défense transfer at a fixed price of €50–€65. Online booking, professional driver 24/7.",
        description: "Orly — La Défense transfer for business travellers. Direct without going through Paris.",
        routeDescription: "The route bypasses Paris via the western A86, through Pont de Sèvres.",
        faq: [
          { question: "What is the price of a taxi Orly Airport — La Défense?", answer: "The flat rate is €50–€65 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Orly Airport — La Défense journey?", answer: "About 35 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "nice-aeroport-monaco",
    from: "Aéroport Nice",
    to: "Monaco",
    fromLat: 43.6584,
    fromLng: 7.2158,
    toLat: 43.7384,
    toLng: 7.4246,
    distanceKm: 30,
    durationMin: 30,
    priceEstimate: "80 — 100 €",
    category: "aeroport",
    highlights: ["Bord de mer", "Èze", "Monte-Carlo"],
    i18n: {
      fr: {
        metaTitle: "Taxi Aéroport Nice → Monaco | 30 km, dès 80 € | TaxiNeo",
        metaDescription: "Trajet direct en 30 min. Bord de mer, Èze et Monte-Carlo en chemin. Dépose au terminal exact, suivi de vol en temps réel.",
        heroTitle: "Taxi Aéroport Nice → Monaco",
        heroSubtitle: "Votre transfert Aéroport Nice → Monaco au prix fixe de 80 — 100 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert premium Nice Aéroport — Monaco le long de la Côte d'Azur. Vue mer exceptionnelle.",
        routeDescription: "Le trajet longe la côte par la Basse ou Moyenne Corniche, en passant par Èze et Cap-d'Ail.",
        faq: [
          { question: "Quel est le prix d'un taxi Aéroport Nice — Monaco ?", answer: "Le forfait est de 80 — 100 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Aéroport Nice — Monaco ?", answer: "Environ 30 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Aéroport Nice → Monaco | 30 km, from €80 | TaxiNeo",
        metaDescription: "Direct 30 min ride. Bord de mer, Èze and Monte-Carlo along the way. Terminal drop-off, real-time flight tracking included.",
        heroTitle: "Taxi Nice Airport → Monaco",
        heroSubtitle: "Your Nice Airport → Monaco transfer at a fixed price of €80–€100. Online booking, professional driver 24/7.",
        description: "Premium Nice Airport — Monaco transfer along the French Riviera. Exceptional sea views.",
        routeDescription: "The route follows the coast via the Basse or Moyenne Corniche, passing through Èze and Cap-d'Ail.",
        faq: [
          { question: "What is the price of a taxi Nice Airport — Monaco?", answer: "The flat rate is €80–€100 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Nice Airport — Monaco journey?", answer: "About 30 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "lyon-aeroport-grenoble",
    from: "Aéroport Lyon",
    to: "Grenoble",
    fromLat: 45.7256,
    fromLng: 5.0811,
    toLat: 45.1885,
    toLng: 5.7245,
    distanceKm: 100,
    durationMin: 70,
    priceEstimate: "130 — 160 €",
    category: "aeroport",
    highlights: ["A43", "A48", "Massif de la Chartreuse"],
    i18n: {
      fr: {
        metaTitle: "Taxi Aéroport Lyon → Grenoble | 100 km, dès 130 € | TaxiNeo",
        metaDescription: "Via A43 en 1h10. Passage par Massif de la Chartreuse. Accueil au terminal, attente gratuite si retard de vol. Suivi de vol, dépose directe au terminal.",
        heroTitle: "Taxi Aéroport Lyon → Grenoble",
        heroSubtitle: "Votre transfert Aéroport Lyon → Grenoble au prix fixe de 130 — 160 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Lyon Aéroport — Grenoble à travers le massif de la Chartreuse. Idéal pour les stations de ski.",
        routeDescription: "Le trajet emprunte l'A43 puis l'A48 en direction de Grenoble, traversant le paysage alpin.",
        faq: [
          { question: "Quel est le prix d'un taxi Aéroport Lyon — Grenoble ?", answer: "Le forfait est de 130 — 160 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Aéroport Lyon — Grenoble ?", answer: "Environ 70 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Aéroport Lyon → Grenoble | 100 km, from €130 | TaxiNeo",
        metaDescription: "Via A43, 1h10 ride. Past Massif de la Chartreuse. Terminal drop-off, real-time flight tracking included. Meet at terminal, free wait if flight delayed.",
        heroTitle: "Taxi Lyon Airport → Grenoble",
        heroSubtitle: "Your Lyon Airport → Grenoble transfer at a fixed price of €130–€160. Online booking, professional driver 24/7.",
        description: "Lyon Airport — Grenoble transfer through the Chartreuse massif. Ideal for ski resorts.",
        routeDescription: "The route takes the A43 then A48 towards Grenoble, crossing the Alpine landscape.",
        faq: [
          { question: "What is the price of a taxi Lyon Airport — Grenoble?", answer: "The flat rate is €130–€160 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Lyon Airport — Grenoble journey?", answer: "About 70 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "gare-de-lyon-orly",
    from: "Gare de Lyon",
    to: "Aéroport d'Orly",
    fromLat: 48.8448,
    fromLng: 2.3735,
    toLat: 48.7262,
    toLng: 2.3652,
    distanceKm: 18,
    durationMin: 25,
    priceEstimate: "35 — 45 €",
    category: "gare",
    highlights: ["A6", "Rungis"],
    i18n: {
      fr: {
        metaTitle: "Taxi Gare de Lyon → Aéroport d'Orly | 18 km, 36 € | TaxiNeo",
        metaDescription: "Via A6 en 25 min, dépose directe au terminal (Orly 1 à 4). Plus rapide que métro + OrlyVal avec des bagages. Prise en charge devant la gare. Devis en ligne.",
        heroTitle: "Taxi Gare de Lyon → Aéroport d'Orly",
        heroSubtitle: "Votre transfert Gare de Lyon → Aéroport d'Orly au prix fixe de 35 — 45 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Gare de Lyon — Orly pour vos correspondances train-avion.",
        routeDescription: "Le trajet emprunte l'A6 en direction d'Orly, via Rungis.",
        faq: [
          { question: "Quel est le prix d'un taxi Gare de Lyon — Aéroport d'Orly ?", answer: "Le forfait est de 35 — 45 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Gare de Lyon — Aéroport d'Orly ?", answer: "Environ 25 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Gare de Lyon → Aéroport d'Orly | 18 km, €35 | TaxiNeo",
        metaDescription: "Via A6 in 25 min, drop-off at your exact terminal (Orly 1-4). Faster than metro + OrlyVal with luggage. Pickup at the station entrance. Instant quote online.",
        heroTitle: "Taxi Gare de Lyon → Orly Airport",
        heroSubtitle: "Your Gare de Lyon → Orly Airport transfer at a fixed price of €35–€45. Online booking, professional driver 24/7.",
        description: "Gare de Lyon — Orly transfer for your train-plane connections.",
        routeDescription: "The route takes the A6 towards Orly, via Rungis.",
        faq: [
          { question: "What is the price of a taxi Gare de Lyon — Orly Airport?", answer: "The flat rate is €35–€45 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Gare de Lyon — Orly Airport journey?", answer: "About 25 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "gare-du-nord-cdg",
    from: "Gare du Nord",
    to: "Aéroport CDG",
    fromLat: 48.8809,
    fromLng: 2.3553,
    toLat: 49.0097,
    toLng: 2.5479,
    distanceKm: 28,
    durationMin: 35,
    priceEstimate: "55 — 65 €",
    category: "gare",
    highlights: ["A1", "Stade de France"],
    i18n: {
      fr: {
        metaTitle: "Taxi Gare du Nord → Aéroport CDG | 28 km, dès 55 € | TaxiNeo",
        metaDescription: "Trajet direct A1 en 35 min. Vue sur Stade de France en chemin. Alternative directe au train ou au bus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Gare du Nord → Aéroport CDG",
        heroSubtitle: "Votre transfert Gare du Nord → Aéroport CDG au prix fixe de 55 — 65 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Gare du Nord — CDG. Idéal après un Eurostar ou Thalys.",
        routeDescription: "L'itinéraire emprunte l'A1 direction nord pour rejoindre CDG.",
        faq: [
          { question: "Quel est le prix d'un taxi Gare du Nord — Aéroport CDG ?", answer: "Le forfait est de 55 — 65 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Gare du Nord — Aéroport CDG ?", answer: "Environ 35 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Gare du Nord → Aéroport CDG | 28 km, from €55 | TaxiNeo",
        metaDescription: "Direct route via A1, 35 min. Stade de France along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Gare du Nord → CDG Airport",
        heroSubtitle: "Your Gare du Nord → CDG Airport transfer at a fixed price of €55–€65. Online booking, professional driver 24/7.",
        description: "Gare du Nord — CDG transfer. Ideal after a Eurostar or Thalys.",
        routeDescription: "The route takes the A1 northbound to reach CDG.",
        faq: [
          { question: "What is the price of a taxi Gare du Nord — CDG Airport?", answer: "The flat rate is €55–€65 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Gare du Nord — CDG Airport journey?", answer: "About 35 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "gare-montparnasse-orly",
    from: "Gare Montparnasse",
    to: "Aéroport d'Orly",
    fromLat: 48.8414,
    fromLng: 2.3209,
    toLat: 48.7262,
    toLng: 2.3652,
    distanceKm: 20,
    durationMin: 30,
    priceEstimate: "40 — 50 €",
    category: "gare",
    highlights: ["Périphérique", "A6"],
    i18n: {
      fr: {
        metaTitle: "Taxi Gare Montparnasse → Aéroport d'Orly | 20 km | TaxiNeo",
        metaDescription: "Itinéraire A6, environ 30 min. Vue sur Périphérique en chemin. Alternative directe au train ou au bus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Gare Montparnasse → Aéroport d'Orly",
        heroSubtitle: "Votre transfert Gare Montparnasse → Aéroport d'Orly au prix fixe de 40 — 50 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert rapide Montparnasse — Orly pour vos correspondances TGV-avion.",
        routeDescription: "Le trajet emprunte le périphérique sud puis l'A6 vers Orly.",
        faq: [
          { question: "Quel est le prix d'un taxi Gare Montparnasse — Aéroport d'Orly ?", answer: "Le forfait est de 40 — 50 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Gare Montparnasse — Aéroport d'Orly ?", answer: "Environ 30 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Gare Montparnasse → Aéroport d'Orly | 20 km | TaxiNeo",
        metaDescription: "A6 route, approximately 30 min. Périphérique along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Gare Montparnasse → Orly Airport",
        heroSubtitle: "Your Gare Montparnasse → Orly Airport transfer at a fixed price of €40–€50. Online booking, professional driver 24/7.",
        description: "Quick Montparnasse — Orly transfer for your TGV-plane connections.",
        routeDescription: "The route takes the southern ring road then the A6 towards Orly.",
        faq: [
          { question: "What is the price of a taxi Gare Montparnasse — Orly Airport?", answer: "The flat rate is €40–€50 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Gare Montparnasse — Orly Airport journey?", answer: "About 30 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "gare-de-lyon-cdg",
    from: "Gare de Lyon",
    to: "Aéroport CDG",
    fromLat: 48.8448,
    fromLng: 2.3735,
    toLat: 49.0097,
    toLng: 2.5479,
    distanceKm: 30,
    durationMin: 40,
    priceEstimate: "60 — 70 €",
    category: "gare",
    highlights: ["A4", "A104"],
    i18n: {
      fr: {
        metaTitle: "Taxi Gare de Lyon → Aéroport CDG | 30 km, dès 60 € | TaxiNeo",
        metaDescription: "Via Périphérique et A1 en 40 min. Dépose au terminal exact (1, 2E, 2F, 2G). Évitez le RER B bondé avec vos valises. Suivi de vol inclus en cas de retard avion.",
        heroTitle: "Taxi Gare de Lyon → Aéroport CDG",
        heroSubtitle: "Votre transfert Gare de Lyon → Aéroport CDG au prix fixe de 60 — 70 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Gare de Lyon — CDG pour vos connexions TGV-avion.",
        routeDescription: "Le trajet emprunte l'A4 puis la Francilienne pour rejoindre CDG.",
        faq: [
          { question: "Quel est le prix d'un taxi Gare de Lyon — Aéroport CDG ?", answer: "Le forfait est de 60 — 70 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Gare de Lyon — Aéroport CDG ?", answer: "Environ 40 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Gare de Lyon → Aéroport CDG | 30 km, from €60 | TaxiNeo",
        metaDescription: "Via ring road and A1, 40 min ride. Drop-off at your exact terminal (1, 2E, 2F, 2G). Skip the crowded RER B with luggage. Flight tracking included for any delay.",
        heroTitle: "Taxi Gare de Lyon → CDG Airport",
        heroSubtitle: "Your Gare de Lyon → CDG Airport transfer at a fixed price of €60–€70. Online booking, professional driver 24/7.",
        description: "Gare de Lyon — CDG transfer for your TGV-plane connections.",
        routeDescription: "The route takes the A4 then the Francilienne to reach CDG.",
        faq: [
          { question: "What is the price of a taxi Gare de Lyon — CDG Airport?", answer: "The flat rate is €60–€70 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Gare de Lyon — CDG Airport journey?", answer: "About 40 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "gare-du-nord-orly",
    from: "Gare du Nord",
    to: "Aéroport d'Orly",
    fromLat: 48.8809,
    fromLng: 2.3553,
    toLat: 48.7262,
    toLng: 2.3652,
    distanceKm: 22,
    durationMin: 30,
    priceEstimate: "45 — 55 €",
    category: "gare",
    highlights: ["Périphérique", "A6"],
    i18n: {
      fr: {
        metaTitle: "Taxi Gare du Nord → Aéroport d'Orly | 22 km, 40 € | TaxiNeo",
        metaDescription: "Itinéraire A6, environ 30 min. Vue sur Périphérique en chemin. Alternative directe au train ou au bus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Gare du Nord → Aéroport d'Orly",
        heroSubtitle: "Votre transfert Gare du Nord → Aéroport d'Orly au prix fixe de 45 — 55 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Gare du Nord — Orly en 30 minutes.",
        routeDescription: "L'itinéraire passe par le périphérique puis l'A6 direction Orly.",
        faq: [
          { question: "Quel est le prix d'un taxi Gare du Nord — Aéroport d'Orly ?", answer: "Le forfait est de 45 — 55 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Gare du Nord — Aéroport d'Orly ?", answer: "Environ 30 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Gare du Nord → Aéroport d'Orly | 22 km, €40 | TaxiNeo",
        metaDescription: "A6 route, approximately 30 min. Périphérique along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Gare du Nord → Orly Airport",
        heroSubtitle: "Your Gare du Nord → Orly Airport transfer at a fixed price of €45–€55. Online booking, professional driver 24/7.",
        description: "Gare du Nord — Orly transfer in 30 minutes.",
        routeDescription: "The route goes via the ring road then the A6 towards Orly.",
        faq: [
          { question: "What is the price of a taxi Gare du Nord — Orly Airport?", answer: "The flat rate is €45–€55 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Gare du Nord — Orly Airport journey?", answer: "About 30 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "gare-saint-lazare-cdg",
    from: "Gare Saint-Lazare",
    to: "Aéroport CDG",
    fromLat: 48.8762,
    fromLng: 2.3254,
    toLat: 49.0097,
    toLng: 2.5479,
    distanceKm: 32,
    durationMin: 45,
    priceEstimate: "65 — 75 €",
    category: "gare",
    highlights: ["A1", "Porte de la Chapelle"],
    i18n: {
      fr: {
        metaTitle: "Taxi Gare Saint-Lazare → Aéroport CDG | 32 km | TaxiNeo",
        metaDescription: "Par A1, 45 min de trajet. Vue sur Porte de la Chapelle en chemin. Dépose porte-à-porte, bagages inclus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Gare Saint-Lazare → Aéroport CDG",
        heroSubtitle: "Votre transfert Gare Saint-Lazare → Aéroport CDG au prix fixe de 65 — 75 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Saint-Lazare — CDG pour vos correspondances Normandie-avion.",
        routeDescription: "Le trajet emprunte la direction de la Porte de la Chapelle puis l'A1.",
        faq: [
          { question: "Quel est le prix d'un taxi Gare Saint-Lazare — Aéroport CDG ?", answer: "Le forfait est de 65 — 75 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Gare Saint-Lazare — Aéroport CDG ?", answer: "Environ 45 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Gare Saint-Lazare → Aéroport CDG | 32 km, €55 | TaxiNeo",
        metaDescription: "Direct route via A1, 45 min. Porte de la Chapelle along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Gare Saint-Lazare → CDG Airport",
        heroSubtitle: "Your Gare Saint-Lazare → CDG Airport transfer at a fixed price of €65–€75. Online booking, professional driver 24/7.",
        description: "Saint-Lazare — CDG transfer for your Normandy-plane connections.",
        routeDescription: "The route heads to Porte de la Chapelle then takes the A1.",
        faq: [
          { question: "What is the price of a taxi Gare Saint-Lazare — CDG Airport?", answer: "The flat rate is €65–€75 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Gare Saint-Lazare — CDG Airport journey?", answer: "About 45 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "gare-de-lyon-disneyland",
    from: "Gare de Lyon",
    to: "Disneyland Paris",
    fromLat: 48.8448,
    fromLng: 2.3735,
    toLat: 48.8674,
    toLng: 2.7836,
    distanceKm: 45,
    durationMin: 45,
    priceEstimate: "90 — 105 €",
    category: "gare",
    highlights: ["A4", "Marne-la-Vallée"],
    i18n: {
      fr: {
        metaTitle: "Taxi Gare de Lyon → Disneyland Paris | 45 km, 65 € | TaxiNeo",
        metaDescription: "Trajet direct A4 en 45 min. Vue sur Marne-la-Vallée en chemin. Alternative directe au train ou au bus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Gare de Lyon → Disneyland Paris",
        heroSubtitle: "Votre transfert Gare de Lyon → Disneyland Paris au prix fixe de 90 — 105 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Gare de Lyon — Disneyland Paris en 45 minutes par l'A4.",
        routeDescription: "L'itinéraire emprunte l'A4 direction est vers Marne-la-Vallée.",
        faq: [
          { question: "Quel est le prix d'un taxi Gare de Lyon — Disneyland Paris ?", answer: "Le forfait est de 90 — 105 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Gare de Lyon — Disneyland Paris ?", answer: "Environ 45 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Gare de Lyon → Disneyland Paris | 45 km, €65 | TaxiNeo",
        metaDescription: "Direct route via A4, 45 min. Marne-la-Vallée along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Gare de Lyon → Disneyland Paris",
        heroSubtitle: "Your Gare de Lyon → Disneyland Paris transfer at a fixed price of €90–€105. Online booking, professional driver 24/7.",
        description: "Gare de Lyon — Disneyland Paris transfer in 45 minutes via the A4.",
        routeDescription: "The route takes the A4 eastbound towards Marne-la-Vallée.",
        faq: [
          { question: "What is the price of a taxi Gare de Lyon — Disneyland Paris?", answer: "The flat rate is €90–€105 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Gare de Lyon — Disneyland Paris journey?", answer: "About 45 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "gare-du-nord-disneyland",
    from: "Gare du Nord",
    to: "Disneyland Paris",
    fromLat: 48.8809,
    fromLng: 2.3553,
    toLat: 48.8674,
    toLng: 2.7836,
    distanceKm: 42,
    durationMin: 45,
    priceEstimate: "80 — 100 €",
    category: "gare",
    highlights: ["A104", "Val d'Europe"],
    i18n: {
      fr: {
        metaTitle: "Taxi Gare du Nord → Disneyland Paris | 42 km, 60 € | TaxiNeo",
        metaDescription: "Itinéraire A104, environ 45 min. Vue sur Val d'Europe en chemin. Dépose porte-à-porte, bagages inclus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Gare du Nord → Disneyland Paris",
        heroSubtitle: "Votre transfert Gare du Nord → Disneyland Paris au prix fixe de 80 — 100 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Gare du Nord — Disneyland, idéal après un Eurostar depuis Londres.",
        routeDescription: "Le trajet contourne Paris par le nord-est via la Francilienne.",
        faq: [
          { question: "Quel est le prix d'un taxi Gare du Nord — Disneyland Paris ?", answer: "Le forfait est de 80 — 100 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Gare du Nord — Disneyland Paris ?", answer: "Environ 45 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Gare du Nord → Disneyland Paris | 42 km, €60 | TaxiNeo",
        metaDescription: "Direct route via A104, 45 min. Val d'Europe along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Gare du Nord → Disneyland Paris",
        heroSubtitle: "Your Gare du Nord → Disneyland Paris transfer at a fixed price of €80–€100. Online booking, professional driver 24/7.",
        description: "Gare du Nord — Disneyland transfer, ideal after a Eurostar from London.",
        routeDescription: "The route bypasses Paris via the north-east through the Francilienne.",
        faq: [
          { question: "What is the price of a taxi Gare du Nord — Disneyland Paris?", answer: "The flat rate is €80–€100 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Gare du Nord — Disneyland Paris journey?", answer: "About 45 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "gare-de-lyon-versailles",
    from: "Gare de Lyon",
    to: "Versailles",
    fromLat: 48.8448,
    fromLng: 2.3735,
    toLat: 48.8048,
    toLng: 2.1204,
    distanceKm: 25,
    durationMin: 35,
    priceEstimate: "50 — 60 €",
    category: "gare",
    highlights: ["Périphérique", "A13", "Château de Versailles"],
    i18n: {
      fr: {
        metaTitle: "Taxi Gare de Lyon → Versailles | 25 km, dès 50 € | TaxiNeo",
        metaDescription: "Via A13 en 35 min. Périphérique et Château de Versailles en chemin. Dépose porte-à-porte, bagages inclus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Gare de Lyon → Versailles",
        heroSubtitle: "Votre transfert Gare de Lyon → Versailles au prix fixe de 50 — 60 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Gare de Lyon — Versailles. Rejoignez le Château en 35 minutes.",
        routeDescription: "Le trajet emprunte le périphérique puis l'A13 vers Versailles.",
        faq: [
          { question: "Quel est le prix d'un taxi Gare de Lyon — Versailles ?", answer: "Le forfait est de 50 — 60 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Gare de Lyon — Versailles ?", answer: "Environ 35 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Gare de Lyon → Versailles | 25 km, from €50 | TaxiNeo",
        metaDescription: "Via A13, 35 min ride. Périphérique and Palace of Versailles along the way. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Gare de Lyon → Versailles",
        heroSubtitle: "Your Gare de Lyon → Versailles transfer at a fixed price of €50–€60. Online booking, professional driver 24/7.",
        description: "Gare de Lyon — Versailles transfer. Reach the Palace in 35 minutes.",
        routeDescription: "The route takes the ring road then the A13 towards Versailles.",
        faq: [
          { question: "What is the price of a taxi Gare de Lyon — Versailles?", answer: "The flat rate is €50–€60 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Gare de Lyon — Versailles journey?", answer: "About 35 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "gare-montparnasse-versailles",
    from: "Gare Montparnasse",
    to: "Versailles",
    fromLat: 48.8414,
    fromLng: 2.3209,
    toLat: 48.8048,
    toLng: 2.1204,
    distanceKm: 18,
    durationMin: 25,
    priceEstimate: "35 — 45 €",
    category: "gare",
    highlights: ["Porte de Versailles", "A13"],
    i18n: {
      fr: {
        metaTitle: "Taxi Gare Montparnasse → Versailles | 18 km, 35 € | TaxiNeo",
        metaDescription: "Par A13, 25 min de trajet. Vue sur Porte de Versailles en chemin. Dépose porte-à-porte, bagages inclus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Gare Montparnasse → Versailles",
        heroSubtitle: "Votre transfert Gare Montparnasse → Versailles au prix fixe de 35 — 45 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Le trajet le plus court depuis une gare parisienne vers Versailles.",
        routeDescription: "Le trajet passe par la Porte de Versailles puis rejoint le Château.",
        faq: [
          { question: "Quel est le prix d'un taxi Gare Montparnasse — Versailles ?", answer: "Le forfait est de 35 — 45 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Gare Montparnasse — Versailles ?", answer: "Environ 25 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Gare Montparnasse → Versailles | 18 km, €35 | TaxiNeo",
        metaDescription: "Direct route via A13, 25 min. Porte de Versailles along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Gare Montparnasse → Versailles",
        heroSubtitle: "Your Gare Montparnasse → Versailles transfer at a fixed price of €35–€45. Online booking, professional driver 24/7.",
        description: "The shortest journey from a Parisian station to Versailles.",
        routeDescription: "The route goes through Porte de Versailles then reaches the Palace.",
        faq: [
          { question: "What is the price of a taxi Gare Montparnasse — Versailles?", answer: "The flat rate is €35–€45 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Gare Montparnasse — Versailles journey?", answer: "About 25 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "gare-montparnasse-cdg",
    from: "Gare Montparnasse",
    to: "Aéroport CDG",
    fromLat: 48.8414,
    fromLng: 2.3209,
    toLat: 49.0097,
    toLng: 2.5479,
    distanceKm: 35,
    durationMin: 45,
    priceEstimate: "70 — 85 €",
    category: "gare",
    highlights: ["Périphérique", "A1"],
    i18n: {
      fr: {
        metaTitle: "Taxi Gare Montparnasse → Aéroport CDG | 35 km | TaxiNeo",
        metaDescription: "Itinéraire A1, environ 45 min. Vue sur Périphérique en chemin. Alternative directe au train ou au bus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Gare Montparnasse → Aéroport CDG",
        heroSubtitle: "Votre transfert Gare Montparnasse → Aéroport CDG au prix fixe de 70 — 85 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Correspondance TGV Ouest — avion à CDG. Plus rapide que le RER.",
        routeDescription: "Le trajet traverse Paris par le périphérique puis emprunte l'A1.",
        faq: [
          { question: "Quel est le prix d'un taxi Gare Montparnasse — Aéroport CDG ?", answer: "Le forfait est de 70 — 85 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Gare Montparnasse — Aéroport CDG ?", answer: "Environ 45 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Gare Montparnasse → Aéroport CDG | 35 km, €55 | TaxiNeo",
        metaDescription: "A1 route, approximately 45 min. Périphérique along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Gare Montparnasse → CDG Airport",
        heroSubtitle: "Your Gare Montparnasse → CDG Airport transfer at a fixed price of €70–€85. Online booking, professional driver 24/7.",
        description: "TGV West — CDG plane connection. Faster than the RER.",
        routeDescription: "The route crosses Paris via the ring road then takes the A1.",
        faq: [
          { question: "What is the price of a taxi Gare Montparnasse — CDG Airport?", answer: "The flat rate is €70–€85 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Gare Montparnasse — CDG Airport journey?", answer: "About 45 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "gare-de-lyon-la-defense",
    from: "Gare de Lyon",
    to: "La Défense",
    fromLat: 48.8448,
    fromLng: 2.3735,
    toLat: 48.8918,
    toLng: 2.2382,
    distanceKm: 18,
    durationMin: 30,
    priceEstimate: "35 — 45 €",
    category: "gare",
    highlights: ["Quais de Seine", "Arc de Triomphe"],
    i18n: {
      fr: {
        metaTitle: "Taxi Gare de Lyon → La Défense | 18 km, dès 35 € | TaxiNeo",
        metaDescription: "Trajet direct en 30 min. Quais de Seine et Arc de Triomphe en chemin. Dépose porte-à-porte, bagages inclus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Gare de Lyon → La Défense",
        heroSubtitle: "Votre transfert Gare de Lyon → La Défense au prix fixe de 35 — 45 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Gare de Lyon — La Défense pour les rendez-vous business.",
        routeDescription: "Le trajet longe les quais de Seine puis rejoint La Défense par l'ouest parisien.",
        faq: [
          { question: "Quel est le prix d'un taxi Gare de Lyon — La Défense ?", answer: "Le forfait est de 35 — 45 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Gare de Lyon — La Défense ?", answer: "Environ 30 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Gare de Lyon → La Défense | 18 km, from €35 | TaxiNeo",
        metaDescription: "Direct 30 min ride. Quais de Seine and Arc de Triomphe along the way. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Gare de Lyon → La Défense",
        heroSubtitle: "Your Gare de Lyon → La Défense transfer at a fixed price of €35–€45. Online booking, professional driver 24/7.",
        description: "Gare de Lyon — La Défense transfer for business meetings.",
        routeDescription: "The route follows the Seine quays then reaches La Défense via western Paris.",
        faq: [
          { question: "What is the price of a taxi Gare de Lyon — La Défense?", answer: "The flat rate is €35–€45 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Gare de Lyon — La Défense journey?", answer: "About 30 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "gare-du-nord-la-defense",
    from: "Gare du Nord",
    to: "La Défense",
    fromLat: 48.8809,
    fromLng: 2.3553,
    toLat: 48.8918,
    toLng: 2.2382,
    distanceKm: 15,
    durationMin: 25,
    priceEstimate: "30 — 35 €",
    category: "gare",
    highlights: ["Boulevard Haussmann", "Arc de Triomphe"],
    i18n: {
      fr: {
        metaTitle: "Taxi Gare du Nord → La Défense | 15 km, dès 30 € | TaxiNeo",
        metaDescription: "Trajet direct en 25 min. Boulevard Haussmann et Arc de Triomphe en chemin. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Gare du Nord → La Défense",
        heroSubtitle: "Votre transfert Gare du Nord → La Défense au prix fixe de 30 — 35 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert rapide Gare du Nord — La Défense en 25 minutes.",
        routeDescription: "Le trajet traverse Paris par les grands boulevards jusqu'à La Défense.",
        faq: [
          { question: "Quel est le prix d'un taxi Gare du Nord — La Défense ?", answer: "Le forfait est de 30 — 35 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Gare du Nord — La Défense ?", answer: "Environ 25 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Gare du Nord → La Défense | 15 km, from €30 | TaxiNeo",
        metaDescription: "Direct 25 min ride. Boulevard Haussmann and Arc de Triomphe along the way. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Gare du Nord → La Défense",
        heroSubtitle: "Your Gare du Nord → La Défense transfer at a fixed price of €30–€35. Online booking, professional driver 24/7.",
        description: "Quick Gare du Nord — La Défense transfer in 25 minutes.",
        routeDescription: "The route crosses Paris via the main boulevards to La Défense.",
        faq: [
          { question: "What is the price of a taxi Gare du Nord — La Défense?", answer: "The flat rate is €30–€35 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Gare du Nord — La Défense journey?", answer: "About 25 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "gare-lyon-part-dieu-aeroport",
    from: "Gare Part-Dieu Lyon",
    to: "Aéroport Lyon",
    fromLat: 45.7606,
    fromLng: 4.86,
    toLat: 45.7256,
    toLng: 5.0811,
    distanceKm: 25,
    durationMin: 30,
    priceEstimate: "50 — 60 €",
    category: "gare",
    highlights: ["A43", "Rocade Est"],
    i18n: {
      fr: {
        metaTitle: "Taxi Gare Part-Dieu Lyon → Aéroport Lyon | 25 km | TaxiNeo",
        metaDescription: "Via A43 en 30 min, dépose au terminal de Saint-Exupéry. Alternative directe au Rhônexpress sans correspondance. Prise en charge devant la gare Part-Dieu.",
        heroTitle: "Taxi Gare Part-Dieu Lyon → Aéroport Lyon",
        heroSubtitle: "Votre transfert Gare Part-Dieu Lyon → Aéroport Lyon au prix fixe de 50 — 60 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Part-Dieu — Aéroport Lyon en 30 minutes.",
        routeDescription: "Le trajet emprunte la rocade est puis l'A43 vers l'aéroport.",
        faq: [
          { question: "Quel est le prix d'un taxi Gare Part-Dieu Lyon — Aéroport Lyon ?", answer: "Le forfait est de 50 — 60 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Gare Part-Dieu Lyon — Aéroport Lyon ?", answer: "Environ 30 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Gare Part-Dieu Lyon → Aéroport Lyon | 25 km | TaxiNeo",
        metaDescription: "A43 route, approximately 30 min. Rocade Est along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Lyon Part-Dieu Station → Lyon Airport",
        heroSubtitle: "Your Lyon Part-Dieu Station → Lyon Airport transfer at a fixed price of €50–€60. Online booking, professional driver 24/7.",
        description: "Part-Dieu — Lyon Airport transfer in 30 minutes.",
        routeDescription: "The route takes the eastern bypass then the A43 to the airport.",
        faq: [
          { question: "What is the price of a taxi Lyon Part-Dieu Station — Lyon Airport?", answer: "The flat rate is €50–€60 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Lyon Part-Dieu Station — Lyon Airport journey?", answer: "About 30 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "gare-marseille-aeroport",
    from: "Gare Saint-Charles",
    to: "Aéroport Marseille",
    fromLat: 43.3028,
    fromLng: 5.3803,
    toLat: 43.4393,
    toLng: 5.2214,
    distanceKm: 27,
    durationMin: 30,
    priceEstimate: "55 — 65 €",
    category: "gare",
    highlights: ["A7", "L'Estaque"],
    i18n: {
      fr: {
        metaTitle: "Taxi St-Charles → Marseille | 27 km, dès 55 € | TaxiNeo",
        metaDescription: "Par autoroute en 30 min, dépose au terminal exact (MP1 ou MP2). Plus rapide que la navette bus (45 min + attente). Prise en charge devant Saint-Charles.",
        heroTitle: "Taxi Gare Saint-Charles → Aéroport Marseille",
        heroSubtitle: "Votre transfert Gare Saint-Charles → Aéroport Marseille au prix fixe de 55 — 65 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Saint-Charles — Aéroport Marseille-Provence.",
        routeDescription: "Le trajet emprunte l'A7 en direction de l'aéroport Marseille-Provence.",
        faq: [
          { question: "Quel est le prix d'un taxi Gare Saint-Charles — Aéroport Marseille ?", answer: "Le forfait est de 55 — 65 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Gare Saint-Charles — Aéroport Marseille ?", answer: "Environ 30 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi St-Charles → Marseille | 27 km, from €55 | TaxiNeo",
        metaDescription: "Via motorway in 30 min, drop-off at your terminal (MP1 or MP2). Faster than shuttle bus (45 min + wait time). Pickup in front of Saint-Charles station.",
        heroTitle: "Taxi Marseille Saint-Charles Station → Marseille Airport",
        heroSubtitle: "Your Marseille Saint-Charles Station → Marseille Airport transfer at a fixed price of €55–€65. Online booking, professional driver 24/7.",
        description: "Saint-Charles — Marseille-Provence Airport transfer.",
        routeDescription: "The route takes the A7 towards Marseille-Provence Airport.",
        faq: [
          { question: "What is the price of a taxi Marseille Saint-Charles Station — Marseille Airport?", answer: "The flat rate is €55–€65 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Marseille Saint-Charles Station — Marseille Airport journey?", answer: "About 30 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "gare-nice-aeroport",
    from: "Gare Nice-Ville",
    to: "Aéroport Nice",
    fromLat: 43.7045,
    fromLng: 7.2619,
    toLat: 43.6584,
    toLng: 7.2158,
    distanceKm: 7,
    durationMin: 12,
    priceEstimate: "15 — 20 €",
    category: "gare",
    highlights: ["Promenade des Anglais"],
    i18n: {
      fr: {
        metaTitle: "Taxi Gare Nice-Ville → Aéroport Nice | 7 km, 20 € | TaxiNeo",
        metaDescription: "Trajet direct en 12 min. Vue sur Promenade des Anglais en chemin. Dépose porte-à-porte, bagages inclus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Gare Nice-Ville → Aéroport Nice",
        heroSubtitle: "Votre transfert Gare Nice-Ville → Aéroport Nice au prix fixe de 15 — 20 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert express Gare Nice — Aéroport en 12 minutes seulement.",
        routeDescription: "Le trajet descend vers la Promenade des Anglais pour rejoindre l'aéroport.",
        faq: [
          { question: "Quel est le prix d'un taxi Gare Nice-Ville — Aéroport Nice ?", answer: "Le forfait est de 15 — 20 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Gare Nice-Ville — Aéroport Nice ?", answer: "Environ 12 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Gare Nice-Ville → Aéroport Nice | 7 km, €20 | TaxiNeo",
        metaDescription: "Direct route, 12 min journey. Promenade des Anglais along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Nice-Ville Station → Nice Airport",
        heroSubtitle: "Your Nice-Ville Station → Nice Airport transfer at a fixed price of €15–€20. Online booking, professional driver 24/7.",
        description: "Express Nice Station — Airport transfer in just 12 minutes.",
        routeDescription: "The route heads down to the Promenade des Anglais to reach the airport.",
        faq: [
          { question: "What is the price of a taxi Nice-Ville Station — Nice Airport?", answer: "The flat rate is €15–€20 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Nice-Ville Station — Nice Airport journey?", answer: "About 12 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "gare-bordeaux-aeroport",
    from: "Gare Bordeaux Saint-Jean",
    to: "Aéroport Bordeaux",
    fromLat: 44.8258,
    fromLng: -0.5565,
    toLat: 44.8283,
    toLng: -0.7156,
    distanceKm: 15,
    durationMin: 20,
    priceEstimate: "30 — 35 €",
    category: "gare",
    highlights: ["Rocade bordelaise"],
    i18n: {
      fr: {
        metaTitle: "Taxi Bordeaux St-Jean → Bordeaux | 15 km, dès 30 € | TaxiNeo",
        metaDescription: "Trajet de 20 min environ. Vue sur Rocade bordelaise en chemin. Alternative directe au train ou au bus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Gare Bordeaux Saint-Jean → Aéroport Bordeaux",
        heroSubtitle: "Votre transfert Gare Bordeaux Saint-Jean → Aéroport Bordeaux au prix fixe de 30 — 35 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Gare Saint-Jean — Aéroport Bordeaux en 20 minutes.",
        routeDescription: "Le trajet emprunte la rocade bordelaise pour rejoindre l'aéroport.",
        faq: [
          { question: "Quel est le prix d'un taxi Gare Bordeaux Saint-Jean — Aéroport Bordeaux ?", answer: "Le forfait est de 30 — 35 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Gare Bordeaux Saint-Jean — Aéroport Bordeaux ?", answer: "Environ 20 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Bordeaux St-Jean → Bordeaux | 15 km, from €30 | TaxiNeo",
        metaDescription: "Direct route, 20 min journey. Rocade bordelaise along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Bordeaux Saint-Jean Station → Bordeaux Airport",
        heroSubtitle: "Your Bordeaux Saint-Jean Station → Bordeaux Airport transfer at a fixed price of €30–€35. Online booking, professional driver 24/7.",
        description: "Gare Saint-Jean — Bordeaux Airport transfer in 20 minutes.",
        routeDescription: "The route takes the Bordeaux ring road to reach the airport.",
        faq: [
          { question: "What is the price of a taxi Bordeaux Saint-Jean Station — Bordeaux Airport?", answer: "The flat rate is €30–€35 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Bordeaux Saint-Jean Station — Bordeaux Airport journey?", answer: "About 20 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "gare-toulouse-aeroport",
    from: "Gare Matabiau",
    to: "Aéroport Blagnac",
    fromLat: 43.6111,
    fromLng: 1.4537,
    toLat: 43.6293,
    toLng: 1.3638,
    distanceKm: 12,
    durationMin: 18,
    priceEstimate: "25 — 30 €",
    category: "gare",
    highlights: ["Rocade", "Blagnac"],
    i18n: {
      fr: {
        metaTitle: "Taxi Gare Matabiau → Aéroport Blagnac | 12 km | TaxiNeo",
        metaDescription: "Route directe, environ 18 min. Rocade et Blagnac sur le parcours. Dépose porte-à-porte, bagages inclus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Gare Matabiau → Aéroport Blagnac",
        heroSubtitle: "Votre transfert Gare Matabiau → Aéroport Blagnac au prix fixe de 25 — 30 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Gare Matabiau — Aéroport Blagnac en 18 minutes.",
        routeDescription: "Le trajet emprunte la rocade toulousaine direction Blagnac.",
        faq: [
          { question: "Quel est le prix d'un taxi Gare Matabiau — Aéroport Blagnac ?", answer: "Le forfait est de 25 — 30 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Gare Matabiau — Aéroport Blagnac ?", answer: "Environ 18 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Gare Matabiau → Aéroport Blagnac | 12 km, €25 | TaxiNeo",
        metaDescription: "Direct route, 18 min journey. Rocade and Blagnac along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Gare Matabiau → Blagnac Airport",
        heroSubtitle: "Your Gare Matabiau → Blagnac Airport transfer at a fixed price of €25–€30. Online booking, professional driver 24/7.",
        description: "Gare Matabiau — Blagnac Airport transfer in 18 minutes.",
        routeDescription: "The route takes the Toulouse ring road towards Blagnac.",
        faq: [
          { question: "What is the price of a taxi Gare Matabiau — Blagnac Airport?", answer: "The flat rate is €25–€30 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Gare Matabiau — Blagnac Airport journey?", answer: "About 18 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "gare-nantes-aeroport",
    from: "Gare Nantes",
    to: "Aéroport Nantes",
    fromLat: 47.2173,
    fromLng: -1.5419,
    toLat: 47.1532,
    toLng: -1.6108,
    distanceKm: 12,
    durationMin: 18,
    priceEstimate: "25 — 30 €",
    category: "gare",
    highlights: ["Périphérique sud"],
    i18n: {
      fr: {
        metaTitle: "Taxi Gare Nantes → Aéroport Nantes | 12 km, 25 € | TaxiNeo",
        metaDescription: "Route directe, environ 18 min. Vue sur Périphérique sud en chemin. Dépose porte-à-porte, bagages inclus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Gare Nantes → Aéroport Nantes",
        heroSubtitle: "Votre transfert Gare Nantes → Aéroport Nantes au prix fixe de 25 — 30 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Gare Nantes — Aéroport Nantes-Atlantique en 18 minutes.",
        routeDescription: "Le trajet emprunte le périphérique sud nantais.",
        faq: [
          { question: "Quel est le prix d'un taxi Gare Nantes — Aéroport Nantes ?", answer: "Le forfait est de 25 — 30 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Gare Nantes — Aéroport Nantes ?", answer: "Environ 18 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Gare Nantes → Aéroport Nantes | 12 km, €25 | TaxiNeo",
        metaDescription: "Direct route, 18 min journey. Périphérique sud along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Nantes Station → Nantes Airport",
        heroSubtitle: "Your Nantes Station → Nantes Airport transfer at a fixed price of €25–€30. Online booking, professional driver 24/7.",
        description: "Nantes Station — Nantes-Atlantique Airport transfer in 18 minutes.",
        routeDescription: "The route takes the southern Nantes ring road.",
        faq: [
          { question: "What is the price of a taxi Nantes Station — Nantes Airport?", answer: "The flat rate is €25–€30 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Nantes Station — Nantes Airport journey?", answer: "About 18 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "gare-strasbourg-aeroport",
    from: "Gare Strasbourg",
    to: "Aéroport Strasbourg",
    fromLat: 48.5851,
    fromLng: 7.7337,
    toLat: 48.5384,
    toLng: 7.6282,
    distanceKm: 15,
    durationMin: 18,
    priceEstimate: "30 — 35 €",
    category: "gare",
    highlights: ["A35", "Entzheim"],
    i18n: {
      fr: {
        metaTitle: "Taxi Gare Strasbourg → Aéroport Strasbourg | 15 km | TaxiNeo",
        metaDescription: "Via A35, 18 min porte-à-terminal Entzheim. Évitez les correspondances de la navette ferroviaire. Prise en charge gare centrale. Idéal vols tôt le matin.",
        heroTitle: "Taxi Gare Strasbourg → Aéroport Strasbourg",
        heroSubtitle: "Votre transfert Gare Strasbourg → Aéroport Strasbourg au prix fixe de 30 — 35 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Gare Strasbourg — Aéroport Entzheim en 18 minutes.",
        routeDescription: "Le trajet emprunte l'A35 direction Entzheim.",
        faq: [
          { question: "Quel est le prix d'un taxi Gare Strasbourg — Aéroport Strasbourg ?", answer: "Le forfait est de 30 — 35 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Gare Strasbourg — Aéroport Strasbourg ?", answer: "Environ 18 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Gare Strasbourg → Aéroport Strasbourg | 15 km | TaxiNeo",
        metaDescription: "Via A35, 18 min door-to-terminal at Entzheim. Skip train shuttle connections. Pickup at Strasbourg central station. Perfect for early or late flights.",
        heroTitle: "Taxi Strasbourg Station → Strasbourg Airport",
        heroSubtitle: "Your Strasbourg Station → Strasbourg Airport transfer at a fixed price of €30–€35. Online booking, professional driver 24/7.",
        description: "Strasbourg Station — Entzheim Airport transfer in 18 minutes.",
        routeDescription: "The route takes the A35 towards Entzheim.",
        faq: [
          { question: "What is the price of a taxi Strasbourg Station — Strasbourg Airport?", answer: "The flat rate is €30–€35 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Strasbourg Station — Strasbourg Airport journey?", answer: "About 18 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "paris-versailles",
    from: "Paris",
    to: "Château de Versailles",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 48.8048,
    toLng: 2.1204,
    distanceKm: 22,
    durationMin: 35,
    priceEstimate: "45 — 55 €",
    category: "touristique",
    prixMin: 45,
    prixMax: 55,
    prixVan: 70,
    dureeMax: 55,
    autoroute: "A13 puis N12",
    peages: "Aucun péage sur ce trajet",
    departSlug: "paris",
    arriveeSlug: "versailles",
    liensInternes: ["paris-saint-germain-en-laye", "paris-velizy", "paris-saint-quentin-en-yvelines"],
    tags: ["versailles", "château", "yvelines", "tourisme", "culture"],
    hub: "paris",
    highlights: ["A13", "Bois de Boulogne", "Château de Versailles"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Château de Versailles | 22 km, 40 € | TaxiNeo",
        metaDescription: "Via A13 en 35 min. Bois de Boulogne et Château de Versailles en chemin. Arrêt possible pour photos et visites en chemin.",
        heroTitle: "Taxi Paris → Château de Versailles",
        heroSubtitle: "Votre transfert Paris → Château de Versailles au prix fixe de 45 — 55 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Excursion Paris — Versailles, le château le plus visité de France avec ses jardins à la française.",
        routeDescription: "Le trajet emprunte l'A13 en passant par le Bois de Boulogne et Saint-Cloud.",
        introduction:
          "Versailles, ancienne résidence des rois de France, attire chaque année plus de dix millions de visiteurs venus du monde entier pour admirer le Château et ses jardins exceptionnels. Mais Versailles est aussi une ville dynamique de 85 000 habitants, siège de la préfecture des Yvelines et pôle économique majeur avec le quartier Satory qui accueille des entreprises de défense et de haute technologie. Les familles apprécient ses écoles réputées, notamment le lycée Hoche, et son cadre de vie verdoyant entre la forêt de Meudon et le parc du château. Le taxi Paris — Versailles est donc emprunté autant par les touristes internationaux en visite au château que par les cadres et les familles qui font le trajet quotidiennement. Les hommes d'affaires qui se rendent aux événements du Château de Versailles, devenu un lieu prisé pour les congrès et réceptions de prestige, apprécient particulièrement le confort d'un taxi privé pour arriver détendus à leur rendez-vous. En soirée, le trajet permet aussi de profiter des spectacles des Grandes Eaux musicales sans se soucier du stationnement.",
        itineraire:
          "Au départ de Paris, votre chauffeur TaxiNeo rejoint le boulevard périphérique en direction de la Porte de Saint-Cloud. L'autoroute A13, dite autoroute de Normandie, est empruntée sur environ 8 kilomètres en direction de Rouen. Ce tronçon traverse le tunnel de Saint-Cloud, un point névralgique souvent ralenti aux heures de pointe. À la sortie de Vaucresson, l'itinéraire emprunte la N12 qui longe la forêt de Fausses-Reposes avant d'arriver à Versailles par l'avenue de Saint-Cloud. Pour les départs depuis la rive gauche, une alternative consiste à emprunter la D910 via Issy-les-Moulineaux, Meudon et Chaville, un itinéraire plus pittoresque qui traverse la forêt de Meudon. En cas de forte circulation sur l'A13, notamment le vendredi soir ou les jours de départ en vacances, le chauffeur peut également passer par Boulogne-Billancourt et le pont de Sèvres pour rejoindre Versailles par la rive gauche de la Seine. Le trajet se termine généralement place d'Armes, face au Château, ou à l'adresse de votre choix dans Versailles.",
        conseils:
          "Pour visiter le Château de Versailles, privilégiez un départ entre 7h30 et 8h00 afin d'arriver avant l'ouverture à 9h00 et éviter les files d'attente. Le mardi, jour de fermeture du Château, est à éviter si vous êtes touriste. Les heures de pointe sur l'A13 se situent entre 7h30-9h30 le matin et 17h00-19h30 le soir : le trajet peut alors durer jusqu'à 55 minutes au lieu de 35. Le samedi matin est généralement fluide et idéal pour un départ vers Versailles. Si vous assistez aux Grandes Eaux musicales (avril à octobre, les samedis), réservez votre taxi retour pour 18h00 afin d'éviter l'afflux de visiteurs. Le stationnement à Versailles étant très limité et coûteux (place d'Armes à 7 €/heure), le taxi est une solution bien plus économique pour une visite à la journée. Pensez à préciser à votre chauffeur si vous souhaitez être déposé à l'entrée principale du Château (grille d'honneur) ou au Grand Trianon, situé à 2 km dans le parc.",
        comparaisonTransport:
          "Le RER C relie Paris (gare d'Austerlitz, Saint-Michel) à Versailles Château Rive Gauche en 35 à 45 minutes pour 4,05 € par personne. Cependant, les trains sont souvent bondés et les retards fréquents sur cette ligne. Le bus 171 depuis le pont de Sèvres (métro ligne 9) met environ 35 minutes pour 2 €. En taxi avec TaxiNeo, le trajet coûte entre 45 € et 60 € mais offre un confort porte-à-porte incomparable : pas de correspondances, pas d'attente sur le quai, et vous arrivez directement à votre destination. Pour une famille de 4 personnes, le taxi revient à environ 12 € par personne, soit à peine plus cher que le RER, avec un gain de temps et de confort considérable. En Uber, comptez 35 à 55 € selon la demande, sans garantie de prix fixe.",
        faq: [
          { question: "Quel est le prix d'un taxi Paris — Château de Versailles ?", answer: "Le forfait est de 45 — 55 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Paris — Château de Versailles ?", answer: "Environ 35 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Château de Versailles | 22 km, €40 | TaxiNeo",
        metaDescription: "Via A13, 35 min ride. Bois de Boulogne and Palace of Versailles along the way. Stops for sightseeing possible en route. Perfect for a day trip without driving.",
        heroTitle: "Taxi Paris → Palace of Versailles",
        heroSubtitle: "Your Paris → Palace of Versailles transfer at a fixed price of €45–€55. Online booking, professional driver 24/7.",
        description: "Paris — Versailles excursion, the most visited château in France with its French-style gardens.",
        routeDescription: "The route takes the A13 passing through the Bois de Boulogne and Saint-Cloud.",
        introduction:
          "Versailles, the former residence of French kings, attracts over ten million visitors each year from around the world to admire the Palace and its exceptional gardens. But Versailles is also a dynamic city of 85,000 inhabitants, seat of the Yvelines prefecture and a major economic hub with the Satory district hosting defence and high-technology companies. Families appreciate its renowned schools, including the prestigious Lycée Hoche, and its green living environment between the Meudon forest and the palace park. The Paris — Versailles taxi is used by international tourists visiting the palace as well as executives and families making the daily commute. Business travellers attending events at the Palace of Versailles, which has become a prized venue for conferences and prestigious receptions, particularly appreciate the comfort of a private taxi to arrive relaxed at their appointments.",
        itineraire:
          "From Paris, your TaxiNeo driver joins the boulevard périphérique towards Porte de Saint-Cloud. The A13 motorway, known as the Normandy motorway, is taken for about 8 kilometres towards Rouen. This section passes through the Saint-Cloud tunnel, a neuralgic point often slowed during rush hours. At the Vaucresson exit, the route takes the N12 which runs alongside the Fausses-Reposes forest before arriving in Versailles via avenue de Saint-Cloud. For departures from the Left Bank, an alternative is to take the D910 via Issy-les-Moulineaux, Meudon and Chaville, a more scenic route through the Meudon forest. The journey typically ends at Place d'Armes, facing the Palace, or at your chosen address in Versailles.",
        conseils:
          "To visit the Palace of Versailles, aim to depart between 7:30 and 8:00 AM to arrive before the 9:00 AM opening and avoid queues. Tuesday is the Palace's closing day. Rush hours on the A13 are 7:30-9:30 AM and 5:00-7:30 PM, when the journey can take up to 55 minutes instead of 35. Saturday mornings are generally smooth. If attending the Musical Fountains shows (April to October, Saturdays), book your return taxi for 6:00 PM. Parking in Versailles is limited and expensive (Place d'Armes at €7/hour), making a taxi much more economical for a day visit.",
        comparaisonTransport:
          "The RER C connects Paris to Versailles Château Rive Gauche in 35-45 minutes for €4.05 per person. However, trains are often crowded with frequent delays. Bus 171 from Pont de Sèvres takes about 35 minutes for €2. With TaxiNeo, the journey costs €45-€60 but offers incomparable door-to-door comfort. For a family of 4, a taxi works out to about €12 per person, barely more than the RER with significant time and comfort gains.",
        faq: [
          { question: "What is the price of a taxi Paris — Palace of Versailles?", answer: "The flat rate is €45–€55 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Paris — Palace of Versailles journey?", answer: "About 35 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "paris-disneyland",
    from: "Paris",
    to: "Disneyland Paris",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 48.8674,
    toLng: 2.7836,
    distanceKm: 40,
    durationMin: 40,
    priceEstimate: "80 — 95 €",
    category: "touristique",
    highlights: ["A4", "Marne-la-Vallée", "Val d'Europe"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Disneyland Paris | 40 km, dès 80 € | TaxiNeo",
        metaDescription: "Via A4 en 40 min. Passage par Marne-la-Vallée et Val d'Europe. Arrêt possible pour photos et visites en chemin.",
        heroTitle: "Taxi Paris → Disneyland Paris",
        heroSubtitle: "Votre transfert Paris → Disneyland Paris au prix fixe de 80 — 95 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Paris — Disneyland pour une journée magique en famille.",
        routeDescription: "L'itinéraire emprunte l'A4 direction est vers Marne-la-Vallée.",
        faq: [
          { question: "Quel est le prix d'un taxi Paris — Disneyland Paris ?", answer: "Le forfait est de 80 — 95 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Paris — Disneyland Paris ?", answer: "Environ 40 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Disneyland Paris | 40 km, from €80 | TaxiNeo",
        metaDescription: "Through A4 in 40 min. Marne-la-Vallée and Val d'Europe along the way. Stops for sightseeing possible en route. Perfect for a day trip without driving.",
        heroTitle: "Taxi Paris → Disneyland Paris",
        heroSubtitle: "Your Paris → Disneyland Paris transfer at a fixed price of €80–€95. Online booking, professional driver 24/7.",
        description: "Paris — Disneyland transfer for a magical family day out.",
        routeDescription: "The route takes the A4 eastbound towards Marne-la-Vallée.",
        faq: [
          { question: "What is the price of a taxi Paris — Disneyland Paris?", answer: "The flat rate is €80–€95 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Paris — Disneyland Paris journey?", answer: "About 40 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "paris-fontainebleau",
    from: "Paris",
    to: "Château de Fontainebleau",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 48.401,
    toLng: 2.7018,
    distanceKm: 68,
    durationMin: 55,
    priceEstimate: "130 — 160 €",
    category: "touristique",
    prixMin: 130,
    prixMax: 160,
    prixVan: 210,
    dureeMax: 85,
    autoroute: "A6",
    peages: "Aucun péage sur l'A6 jusqu'à Fontainebleau",
    departSlug: "paris",
    arriveeSlug: "fontainebleau",
    liensInternes: ["paris-melun", "paris-evry", "paris-provins"],
    tags: ["fontainebleau", "chateau", "foret", "escalade", "napoleon"],
    hub: "paris",
    highlights: ["A6", "Forêt de Fontainebleau"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Château de Fontainebleau | 65 km | TaxiNeo",
        metaDescription: "Par A6, 55 min de trajet. Passage par Forêt de Fontainebleau. Idéal pour une excursion sans conduire. Arrêt possible pour photos et visites en chemin.",
        heroTitle: "Taxi Paris → Château de Fontainebleau",
        heroSubtitle: "Votre transfert Paris → Château de Fontainebleau au prix fixe de 130 — 160 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Excursion Paris — Fontainebleau à travers la célèbre forêt domaniale.",
        routeDescription: "Le trajet emprunte l'A6 Autoroute du Soleil jusqu'à la sortie Fontainebleau.",
        introduction:
          "Fontainebleau est une ville de 15 000 habitants mondialement connue pour son château, résidence des souverains français de François Ier à Napoléon III, inscrit au patrimoine mondial de l'UNESCO. Le château de Fontainebleau est le seul en France à avoir été habité continuellement pendant huit siècles par les rois, empereurs et présidents. Ses 1 500 pièces, ses quatre musées et ses jardins à la française en font un rival direct de Versailles, mais avec une affluence bien moindre et une atmosphère plus intime. La forêt de Fontainebleau, classée Réserve de biosphère par l'UNESCO, s'étend sur 25 000 hectares et attire des millions de promeneurs, grimpeurs et artistes. Les rochers de grès de Fontainebleau sont le spot de bloc (escalade de bloc) le plus célèbre au monde, attirant des grimpeurs de tous les continents. L'INSEAD, prestigieuse école de commerce internationale, y a son campus européen, amenant des étudiants MBA du monde entier. Les touristes, les grimpeurs, les étudiants de l'INSEAD et les amoureux de la nature constituent la clientèle variée du taxi Paris — Fontainebleau.",
        itineraire:
          "Le chauffeur emprunte le périphérique sud puis l'autoroute A6, dite autoroute du Soleil, en direction de Lyon. L'A6 est une autoroute large et bien entretenue, gratuite jusqu'à la sortie Fontainebleau à 60 km de Paris. On traverse successivement les plaines de l'Essonne, la forêt de Sénart et les environs de Melun. La sortie « Fontainebleau » donne accès à la N37 qui mène directement au centre-ville et au château en 10 minutes. L'entrée du château se fait par la cour du Cheval Blanc (grille principale) ou par la porte Dorée côté jardin. Pour la forêt et les sites d'escalade (Franchard, Cuvier, Apremont), le chauffeur emprunte les routes forestières balisées. Pour l'INSEAD, situé boulevard de Constance, l'accès est direct depuis le centre-ville. En cas d'embouteillages sur l'A6, particulièrement fréquents lors des départs en vacances, le chauffeur peut emprunter la N7 via Orly et Évry, un itinéraire historique plus long mais parfois plus fluide.",
        conseils:
          "Le château de Fontainebleau est ouvert tous les jours sauf le mardi, de 9h30 à 17h00 (18h00 d'avril à septembre). Un départ à 8h00 de Paris vous permet d'arriver à l'ouverture et de profiter du château avant l'arrivée des groupes vers 10h30. Le lundi est souvent le jour le plus calme. Pour l'escalade de bloc en forêt, les meilleurs secteurs sont Franchard Isatis (débutants), Cuvier (intermédiaires) et Apremont (tous niveaux). Prévoyez des chaussons d'escalade, un crash pad et un paillasson — votre chauffeur TaxiNeo peut transporter ce matériel dans le coffre. En automne (octobre-novembre), la forêt offre des couleurs spectaculaires et les conditions d'escalade sont optimales avec la fraîcheur. Le restaurant L'Axel, 2 étoiles Michelin, est une table d'exception si vous souhaitez prolonger la visite par un déjeuner gastronomique. Le week-end, partez avant 8h00 ou après 11h00 pour éviter le trafic sur l'A6.",
        comparaisonTransport:
          "Le Transilien R depuis la Gare de Lyon dessert Fontainebleau-Avon en 40 minutes pour 9,60 €. La gare est à 2 km du château, accessible en bus A (10 min) ou à pied (25 min). En taxi TaxiNeo à 130-160 €, vous êtes déposé directement devant le château en 55 minutes, sans correspondance. Pour une famille de 4 avec matériel (poussette, pique-nique), le taxi revient à 33-40 € par personne, un investissement justifié par le confort. Les grimpeurs avec crash pads et matériel n'ont pas d'alternative viable au taxi ou à la voiture personnelle. En VTC, le prix varie selon l'heure et la demande (80-130 €), sans prix fixe garanti.",
        faq: [
          { question: "Quel est le prix d'un taxi Paris — Château de Fontainebleau ?", answer: "Le forfait est de 130 — 160 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Paris — Château de Fontainebleau ?", answer: "Environ 55 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Château de Fontainebleau | 65 km, €80 | TaxiNeo",
        metaDescription: "A6 route, approximately 55 min. Forêt de Fontainebleau along the way. Stops for sightseeing possible en route. Perfect for a day trip without driving.",
        heroTitle: "Taxi Paris → Palace of Fontainebleau",
        heroSubtitle: "Your Paris → Palace of Fontainebleau transfer at a fixed price of €130–€160. Online booking, professional driver 24/7.",
        description: "Paris — Fontainebleau excursion through the famous royal forest.",
        routeDescription: "The route takes the A6 Autoroute du Soleil to the Fontainebleau exit.",
        introduction:
          "Fontainebleau is world-famous for its UNESCO-listed palace, the only one in France continuously inhabited for eight centuries. The 25,000-hectare forest is a UNESCO Biosphere Reserve and the world's most famous bouldering destination. INSEAD business school brings international MBA students. Tourists, climbers, INSEAD students and nature lovers make up the varied Paris — Fontainebleau taxi clientele.",
        itineraire:
          "The driver takes the southern ring road and A6 towards Lyon, toll-free for 60 km. The 'Fontainebleau' exit leads to the N37 and town centre in 10 minutes. For forest climbing sites (Franchard, Cuvier, Apremont), the driver uses marked forest roads. When the A6 is congested, the historic N7 via Orly and Évry offers an alternative.",
        conseils:
          "The palace opens daily except Tuesday, 9:30 AM-5:00 PM (6:00 PM April-September). Depart at 8:00 AM to arrive at opening. Monday is quietest. For bouldering, top sectors include Franchard Isatis (beginners), Cuvier (intermediate) and Apremont (all levels). Autumn offers spectacular colours and optimal climbing conditions. On weekends, depart before 8:00 AM or after 11:00 AM to avoid A6 traffic.",
        comparaisonTransport:
          "Transilien R from Gare de Lyon serves Fontainebleau-Avon in 40 minutes for €9.60, but the station is 2 km from the palace requiring bus A. By TaxiNeo at €130-160, you're dropped at the palace door in 55 minutes. For a family of 4, the taxi costs €33-40 per person. Climbers with crash pads have no viable alternative to taxi or car.",
        faq: [
          { question: "What is the price of a taxi Paris — Palace of Fontainebleau?", answer: "The flat rate is €130–€160 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Paris — Palace of Fontainebleau journey?", answer: "About 55 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "paris-giverny",
    from: "Paris",
    to: "Giverny",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 49.075,
    toLng: 1.5333,
    distanceKm: 75,
    durationMin: 70,
    priceEstimate: "145 — 175 €",
    category: "touristique",
    prixMin: 145,
    prixMax: 175,
    prixVan: 230,
    dureeMax: 90,
    autoroute: "A13",
    peages: "~8 € (A13)",
    departSlug: "paris",
    arriveeSlug: "giverny",
    liensInternes: ["paris-auvers-sur-oise", "paris-chartres", "paris-honfleur"],
    tags: ["tourisme", "impressionnisme", "culture", "jardin"],
    hub: "paris",
    highlights: ["A13", "Jardins de Monet", "Vernon"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Giverny | forfait dès 145 €, 1h05 | TaxiNeo",
        metaDescription: "Par A13, 1h10 de trajet. Jardins de Monet et Vernon en chemin. Arrêt possible pour photos et visites en chemin.",
        heroTitle: "Taxi Paris → Giverny",
        heroSubtitle: "Votre transfert Paris → Giverny au prix fixe de 145 — 175 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Excursion Paris — Giverny pour découvrir les jardins et la maison de Claude Monet.",
        routeDescription: "L'itinéraire emprunte l'A13 direction Rouen, sortie Vernon, puis route vers Giverny.",
        introduction:
          "Giverny est un village emblématique de l'histoire de l'art mondial, situé aux portes de la Normandie dans le département de l'Eure. C'est ici que le maître de l'impressionnisme Claude Monet s'installa en 1883 et créa l'un des jardins les plus photographiés au monde. Le Clos Normand, avec ses massifs de fleurs chatoyantes, et le Jardin d'Eau, avec son célèbre pont japonais et ses nymphéas, ont inspiré les toiles les plus connues du peintre. La Fondation Claude Monet gère aujourd'hui la maison et les jardins, ouverts au public d'avril à octobre. Le village abrite également le Musée des Impressionnismes, qui présente des expositions temporaires consacrées au mouvement impressionniste et à ses héritiers. Se rendre à Giverny en taxi depuis Paris est la solution la plus pratique car le village est mal desservi par les transports en commun, nécessitant un trajet en train jusqu'à Vernon puis un bus ou taxi local. Avec TaxiNeo, vous êtes déposé directement à l'entrée des jardins, sans correspondance ni attente.",
        itineraire:
          "Le départ s'effectue depuis votre adresse parisienne. Votre chauffeur TaxiNeo rejoint le périphérique ouest puis l'autoroute A13 en direction de Rouen-Caen. L'A13 traverse les Yvelines et longe les méandres de la Seine dans un paysage verdoyant. Après environ 55 km sur autoroute, vous prenez la sortie 16 vers Bonnières-sur-Seine. La route départementale D5 vous conduit ensuite à travers les collines de la vallée de l'Epte, offrant des vues panoramiques sur la campagne normande. Le village de Giverny apparaît au détour d'un virage, avec ses maisons de pierre calcaire typiques. Votre chauffeur vous dépose au parking principal, à quelques pas de l'entrée de la maison de Monet. Le trajet de retour peut s'effectuer par le même itinéraire ou, si vous le souhaitez, votre chauffeur peut emprunter la route des crêtes qui offre un panorama exceptionnel sur la vallée de la Seine. En cas de trafic dense aux portes de Paris, un itinéraire alternatif par l'A14 et La Défense permet d'éviter les bouchons habituels sur l'A13 à hauteur de Saint-Cloud.",
        conseils:
          "La Fondation Claude Monet est ouverte du 1er avril au 1er novembre, de 9h30 à 18h00. Nous recommandons vivement d'arriver dès l'ouverture à 9h30 pour profiter des jardins avant l'affluence, qui atteint son pic entre 11h et 14h. Réservez vos billets en ligne à l'avance sur le site fondation-monet.com pour éviter la file d'attente. Le tarif d'entrée est de 11 € pour les adultes et 6,50 € pour les enfants de 7 à 17 ans. Prévoyez environ 2h30 pour la visite complète de la maison et des jardins. Le Musée des Impressionnismes, situé à 200 mètres, mérite également une visite (entrée 9 €). Pour le déjeuner, le restaurant Les Nymphéas face à l'entrée principale propose une cuisine locale de qualité. Demandez à votre chauffeur TaxiNeo de vous attendre sur place ou convenez d'une heure de retour — nos forfaits aller-retour avec attente sont particulièrement avantageux pour cette excursion. Les mois de mai et juin offrent la plus belle floraison, notamment les iris, les pivoines et bien sûr les nymphéas sur le bassin.",
        comparaisonTransport:
          "En train, le trajet Paris Saint-Lazare → Vernon dure environ 45 minutes (billet SNCF à partir de 15,20 €), mais il faut ensuite prendre une navette ou un taxi local de Vernon à Giverny (8 km, environ 15 € l'aller). Le temps total porte-à-porte dépasse souvent 1h30 avec les correspondances. En voiture de location, comptez environ 60 € pour la journée plus 8 € de péage et le carburant, mais vous devez gérer le parking et la conduite. Le bus touristique depuis Paris coûte entre 80 et 100 € par personne avec visite guidée. En taxi TaxiNeo, l'aller simple coûte 145 à 175 € et l'aller-retour avec attente se chiffre sur devis, soit un bon rapport qualité-prix pour 2 à 4 personnes voyageant ensemble, avec le confort d'un service porte-à-porte sans stress.",
        faq: [
          { question: "Quel est le prix d'un taxi Paris — Giverny ?", answer: "Le forfait est de 145 — 175 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Paris — Giverny ?", answer: "Environ 70 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Giverny | Fixed price from €145 | TaxiNeo",
        metaDescription: "Direct route via A13, 1h10. Jardins de Monet and Vernon along the way. Stops for sightseeing possible en route. Perfect for a day trip without driving.",
        heroTitle: "Taxi Paris → Giverny",
        heroSubtitle: "Your Paris → Giverny transfer at a fixed price of €145–€175. Online booking, professional driver 24/7.",
        description: "Paris — Giverny excursion to discover Claude Monet's gardens and house.",
        routeDescription: "The route takes the A13 towards Rouen, Vernon exit, then road to Giverny.",
        introduction:
          "Giverny is an iconic village in world art history, located on the edge of Normandy in the Eure department. It was here that the master of Impressionism Claude Monet settled in 1883 and created one of the most photographed gardens in the world. The Clos Normand, with its colourful flower beds, and the Water Garden, with its famous Japanese bridge and water lilies, inspired the painter's most famous canvases. The Claude Monet Foundation now manages the house and gardens, open to the public from April to October. The village also houses the Museum of Impressionism, which presents temporary exhibitions dedicated to the Impressionist movement and its heirs. Getting to Giverny by taxi from Paris is the most practical solution as the village is poorly served by public transport, requiring a train to Vernon then a local bus or taxi. With TaxiNeo, you are dropped off directly at the garden entrance, with no connections or waiting.",
        itineraire:
          "Departure is from your Paris address. Your TaxiNeo driver joins the western ring road then the A13 motorway towards Rouen-Caen. The A13 crosses the Yvelines and follows the meanders of the Seine through green landscapes. After about 55 km on the motorway, you take exit 16 towards Bonnières-sur-Seine. The D5 departmental road then takes you through the hills of the Epte valley, offering panoramic views of the Norman countryside. The village of Giverny appears around a bend, with its typical limestone houses. Your driver drops you off at the main car park, just steps from the entrance to Monet's house. The return journey can follow the same route or, if you wish, your driver can take the ridge road offering exceptional views over the Seine valley. In case of heavy traffic at the gates of Paris, an alternative route via the A14 and La Défense avoids the usual congestion on the A13 near Saint-Cloud.",
        conseils:
          "The Claude Monet Foundation is open from 1 April to 1 November, from 9:30am to 6:00pm. We strongly recommend arriving at opening time to enjoy the gardens before the crowds, which peak between 11am and 2pm. Book your tickets online in advance at fondation-monet.com to skip the queue. Admission is €11 for adults and €6.50 for children aged 7-17. Allow about 2.5 hours for the full visit of the house and gardens. The Museum of Impressionism, 200 metres away, is also worth a visit (admission €9). For lunch, Les Nymphéas restaurant opposite the main entrance offers quality local cuisine. Ask your TaxiNeo driver to wait on site or agree on a return time — our round-trip packages with waiting time are particularly good value for this excursion. May and June offer the most beautiful blooms, including irises, peonies and of course the water lilies on the pond.",
        comparaisonTransport:
          "By train, the Paris Saint-Lazare → Vernon journey takes about 45 minutes (SNCF ticket from €15.20), but you then need to take a shuttle or local taxi from Vernon to Giverny (8 km, about €15 one way). Total door-to-door time often exceeds 1h30 with connections. By rental car, expect about €60 for the day plus €8 in tolls and fuel, but you have to manage parking and driving. Tourist buses from Paris cost between €80 and €100 per person with guided tour. By TaxiNeo taxi, a one-way transfer costs €145 to €175 and a round trip with waiting time is quoted on request, making it good value for 2 to 4 people travelling together, with the comfort of a stress-free door-to-door service.",
        faq: [
          { question: "What is the price of a taxi Paris — Giverny?", answer: "The flat rate is €145–€175 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Paris — Giverny journey?", answer: "About 70 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "paris-chantilly",
    from: "Paris",
    to: "Château de Chantilly",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 49.1945,
    toLng: 2.4839,
    distanceKm: 48,
    durationMin: 45,
    priceEstimate: "95 — 115 €",
    category: "touristique",
    prixMin: 95,
    prixMax: 115,
    prixVan: 150,
    dureeMax: 70,
    autoroute: "A1",
    peages: "Péage A1 : environ 3,80 €",
    departSlug: "paris",
    arriveeSlug: "chantilly",
    liensInternes: ["paris-senlis", "paris-roissy-en-france", "paris-gonesse"],
    tags: ["chantilly", "chateau", "hippodrome", "oise", "musee-conde"],
    hub: "paris",
    highlights: ["A1", "Hippodrome de Chantilly", "Musée Condé"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Château de Chantilly | 50 km, 65 € | TaxiNeo",
        metaDescription: "Via A1 en 45 min. Hippodrome de Chantilly et Musée Condé en chemin. Arrêt possible pour photos et visites en chemin.",
        heroTitle: "Taxi Paris → Château de Chantilly",
        heroSubtitle: "Votre transfert Paris → Château de Chantilly au prix fixe de 95 — 115 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Excursion Paris — Chantilly pour visiter le château et ses écuries princières.",
        routeDescription: "Le trajet emprunte l'A1 direction Lille, sortie Chantilly.",
        introduction:
          "Chantilly, petite ville de 11 000 habitants dans l'Oise, possède un rayonnement culturel et équestre sans commune mesure avec sa taille. Le château de Chantilly, reconstruit au XIXe siècle par le duc d'Aumale, abrite le musée Condé qui possède la deuxième collection de peintures anciennes de France après le Louvre, avec des œuvres de Raphaël, Botticelli, Poussin et Delacroix. Les Grandes Écuries, chef-d'œuvre architectural du XVIIIe siècle pouvant accueillir 240 chevaux, abritent le musée vivant du Cheval et des spectacles équestres. L'hippodrome de Chantilly, l'un des plus prestigieux au monde, accueille chaque année le Prix du Jockey Club et le Prix de Diane, attirant l'élégance parisienne et internationale. La forêt de Chantilly, 6 300 hectares de chênaies et de futaies, est un paradis pour les randonneurs et les cavaliers. La crème Chantilly, inventée ici selon la légende par le maître d'hôtel Vatel, est indissociable de la réputation gastronomique de la ville. Les touristes culturels, les amateurs de courses hippiques, les cavaliers et les amoureux de nature constituent la clientèle du taxi Paris — Chantilly.",
        itineraire:
          "Le trajet emprunte le périphérique nord puis l'autoroute A1 direction Lille depuis la Porte de la Chapelle. L'A1, autoroute la plus fréquentée de France, traverse Saint-Denis, le Stade de France, puis la plaine de France et l'aéroport CDG. Après le péage de Chamant (environ 3,80 €, inclus dans le tarif), la sortie « Chantilly / Senlis » mène à la D924a qui traverse la forêt de Chantilly avant d'arriver en ville. Le château est au centre, accessible par la rue du Connétable. L'hippodrome est à l'est de la ville, route de Creil. En période de courses (juin principalement), la circulation aux abords de l'hippodrome est très dense. Le chauffeur peut alors accéder par la route forestière du Poteau de la Patte d'Oie. En cas de bouchon sur l'A1, notamment le vendredi soir, une alternative emprunte la N16 via Luzarches et la forêt de Carnelle, un itinéraire rural mais plus long.",
        conseils:
          "Le château de Chantilly est ouvert tous les jours sauf le mardi (10h00-18h00 en saison). Un départ à 8h30 de Paris permet d'arriver à l'ouverture. Le prix du Jockey Club se tient le premier dimanche de juin et le Prix de Diane le dimanche suivant : ces journées attirent 15 000 à 20 000 spectateurs élégants. Réservez votre taxi impérativement à l'avance pour ces dates. Le dress code est de rigueur (chapeaux pour les dames, costumes pour les messieurs). Pour une journée complète château + Grandes Écuries + spectacle équestre, prévoyez 5 à 6 heures sur place. Le restaurant La Capitainerie dans le château offre un déjeuner avec vue sur les jardins Le Nôtre. En automne, la forêt de Chantilly est spectaculaire avec les couleurs des feuilles. Les sentiers de randonnée balisés permettent de belles balades depuis le parking du château.",
        comparaisonTransport:
          "Le TER depuis la Gare du Nord dessert Chantilly-Gouvieux en 25 minutes pour 8,70 €. La gare est à 2 km du château (navette gratuite en saison ou bus DUC). C'est l'option la plus rapide et économique pour un voyageur seul. En taxi TaxiNeo à 95-115 €, le trajet prend 45 minutes porte-à-porte avec dépose devant le château. Pour une famille de quatre, le taxi revient à 24-29 € par personne, un surcoût modéré pour un confort maximal. Les jours de courses, le taxi est indispensable : les trains sont bondés et les navettes saturées. En VTC, comptez 55-85 € sans garantie de prix fixe.",
        faq: [
          { question: "Quel est le prix d'un taxi Paris — Château de Chantilly ?", answer: "Le forfait est de 95 — 115 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Paris — Château de Chantilly ?", answer: "Environ 45 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Château de Chantilly | 50 km, €65 | TaxiNeo",
        metaDescription: "Via A1, 45 min ride. Hippodrome de Chantilly and Musée Condé along the way. Stops for sightseeing possible en route. Perfect for a day trip without driving.",
        heroTitle: "Taxi Paris → Château de Chantilly",
        heroSubtitle: "Your Paris → Château de Chantilly transfer at a fixed price of €95–€115. Online booking, professional driver 24/7.",
        description: "Paris — Chantilly excursion to visit the château and its princely stables.",
        routeDescription: "The route takes the A1 towards Lille, Chantilly exit.",
        introduction:
          "Chantilly, with just 11,000 inhabitants, punches far above its weight in culture and equestrianism. The castle houses France's second-largest collection of old paintings after the Louvre. The Great Stables host equestrian shows. The racecourse hosts the prestigious Prix du Jockey Club and Prix de Diane. The 6,300-hectare forest is paradise for hikers and riders. Chantilly cream was legendarily invented here by Vatel.",
        itineraire:
          "From Paris, the route takes the northern ring road and A1 towards Lille from Porte de la Chapelle. After the Chamant toll (€3.80, included), the 'Chantilly/Senlis' exit leads to the D924a through the forest. The castle is central, the racecourse to the east. During racing events, the driver can access via forest roads to avoid congestion.",
        conseils:
          "The castle is open daily except Tuesday (10:00 AM-6:00 PM in season). Depart at 8:30 AM. The Prix du Jockey Club is the first Sunday of June, Prix de Diane the following Sunday — book taxis well in advance. Dress code applies. Allow 5-6 hours for a full visit. Restaurant La Capitainerie in the castle offers dining with garden views. In autumn, the forest is spectacular.",
        comparaisonTransport:
          "TER from Gare du Nord serves Chantilly-Gouvieux in 25 minutes for €8.70. The station is 2 km from the castle. By TaxiNeo at €95-115, the journey takes 45 minutes door-to-door with castle drop-off. For a couple, that's €48-58 per person; for a family of four, €24-29 each. On race days, a taxi is essential as trains and shuttles are overwhelmed.",
        faq: [
          { question: "What is the price of a taxi Paris — Château de Chantilly?", answer: "The flat rate is €95–€115 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Paris — Château de Chantilly journey?", answer: "About 45 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "paris-vaux-le-vicomte",
    from: "Paris",
    to: "Château de Vaux-le-Vicomte",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 48.5662,
    toLng: 2.7139,
    distanceKm: 55,
    durationMin: 50,
    priceEstimate: "105 — 130 €",
    category: "touristique",
    prixMin: 105,
    prixMax: 130,
    prixVan: 170,
    dureeMax: 70,
    autoroute: "A5",
    peages: "~3 € (A5)",
    departSlug: "paris",
    arriveeSlug: "maincy",
    liensInternes: ["paris-barbizon", "paris-blandy-les-tours", "paris-senart"],
    tags: ["tourisme", "château", "jardin", "patrimoine", "histoire"],
    hub: "paris",
    highlights: ["A5", "Melun"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Château de Vaux-le-Vicomte | 55 km | TaxiNeo",
        metaDescription: "Via A4 et A5b en 50 min. Aucun transport en commun direct vers ce château baroque. Visites chandelles en été, jardins Le Nôtre. Attente et retour possibles.",
        heroTitle: "Taxi Paris → Château de Vaux-le-Vicomte",
        heroSubtitle: "Votre transfert Paris → Château de Vaux-le-Vicomte au prix fixe de 105 — 130 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Excursion Paris — Vaux-le-Vicomte, le château qui inspira Versailles.",
        routeDescription: "Le trajet emprunte l'A5 puis rejoint Maincy via Melun.",
        introduction:
          "Le château de Vaux-le-Vicomte, situé à Maincy en Seine-et-Marne, est l'un des plus remarquables châteaux du XVIIe siècle français. Construit entre 1656 et 1661 pour Nicolas Fouquet, surintendant des finances de Louis XIV, il réunit pour la première fois les talents de l'architecte Louis Le Vau, du peintre Charles Le Brun et du jardinier André Le Nôtre — le même trio qui créera ensuite Versailles. La fête inaugurale du 17 août 1661, d'un faste inouï, provoqua la jalousie du Roi-Soleil et conduisit à l'arrestation de Fouquet. Le château présente des intérieurs somptueusement décorés, notamment le Grand Salon ovale coiffé d'une coupole de 18 mètres que Le Brun n'eut jamais le temps d'achever. Les jardins à la française, chef-d'œuvre de Le Nôtre, s'étendent sur 33 hectares avec parterres de broderies, bassins, cascades et grottes. Le domaine est aujourd'hui propriété privée de la famille de Vogüé qui l'a magistralement restauré. Les soirées aux chandelles les samedis d'été, avec 2 000 bougies illuminant le château et les jardins, sont un spectacle féerique unique en France.",
        itineraire:
          "Votre chauffeur TaxiNeo vous prend en charge à votre adresse parisienne et rejoint l'autoroute A5 par le périphérique sud-est, direction Troyes-Sens. L'A5 traverse rapidement la banlieue sud-est de Paris et la plaine de Brie. Après environ 40 km, vous prenez la sortie Melun puis la D215 à travers la campagne de Maincy. Le château apparaît soudain au détour d'un chemin bordé d'arbres, offrant une perspective saisissante sur la façade nord. Votre chauffeur vous dépose devant l'entrée principale du domaine. Un itinéraire alternatif par la N104 (Francilienne) puis la D606 via Melun est possible en cas de bouchons sur l'A5. Le retour peut être combiné avec une halte au village médiéval de Blandy-les-Tours (10 km) ou au château de Fontainebleau (20 km). Les soirées aux chandelles se terminant vers 23h, votre chauffeur TaxiNeo assure un retour confortable même tard.",
        conseils:
          "Le château de Vaux-le-Vicomte est ouvert de mi-mars à début novembre, de 10h à 18h. L'entrée adulte coûte 18,90 € (château + jardins) ou 8,90 € pour les jardins seuls. Prévoyez 3 à 4 heures pour la visite complète : le château (1h30), les jardins (1h30) et le musée des Équipages dans les écuries. Les soirées aux chandelles ont lieu les samedis de mai à octobre de 19h à 23h (tarif spécial 21,90 €) : 2 000 bougies éclairent le château et les jardins, créant une atmosphère magique. Un service de voiturettes électriques permet de parcourir les jardins sans effort (5 €). Le restaurant Le Relais de l'Écureuil propose déjeuner et goûter dans les communs. L'audioguide (3 €) est recommandé pour comprendre l'histoire fascinante de Fouquet. Les enfants apprécient la chasse au trésor et les costumes d'époque disponibles à la location.",
        comparaisonTransport:
          "En train, le trajet Gare de Lyon → Melun dure 25 minutes en Transilien R (8,95 €), mais il faut ensuite un taxi local de Melun à Vaux-le-Vicomte (7 km, environ 15-20 €) car aucun bus ne dessert le château. Le temps total atteint 1h avec l'attente. En voiture de location, comptez 40 € la journée plus péage. Le navibus Châteaubus circule les samedis et dimanches d'avril à octobre (7 €) mais avec des horaires très contraints. En taxi TaxiNeo à 105 €, le transfert direct porte-à-porte en 50 minutes est la solution la plus confortable, surtout pour les soirées aux chandelles où les transports en commun ne fonctionnent plus.",
        faq: [
          { question: "Quel est le prix d'un taxi Paris — Château de Vaux-le-Vicomte ?", answer: "Le forfait est de 105 — 130 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Paris — Château de Vaux-le-Vicomte ?", answer: "Environ 50 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Château de Vaux-le-Vicomte | 55 km | TaxiNeo",
        metaDescription: "Via A4 and A5b, 50 min drive. No direct public transport to this baroque château. Candlelit visits in summer, Le Nôtre gardens. Wait-and-return available.",
        heroTitle: "Taxi Paris → Château de Vaux-le-Vicomte",
        heroSubtitle: "Your Paris → Château de Vaux-le-Vicomte transfer at a fixed price of €105–€130. Online booking, professional driver 24/7.",
        description: "Paris — Vaux-le-Vicomte excursion, the château that inspired Versailles.",
        routeDescription: "The route takes the A5 then reaches Maincy via Melun.",
        introduction:
          "The Château de Vaux-le-Vicomte, located in Maincy in Seine-et-Marne, is one of the most remarkable 17th-century French châteaux. Built between 1656 and 1661 for Nicolas Fouquet, Louis XIV's superintendent of finances, it brought together for the first time the talents of architect Louis Le Vau, painter Charles Le Brun and gardener André Le Nôtre — the same trio that would later create Versailles. The inaugural celebration on 17 August 1661, of unprecedented splendour, provoked the Sun King's jealousy and led to Fouquet's arrest. The château features sumptuously decorated interiors, notably the oval Grand Salon topped by an 18-metre dome that Le Brun never had time to complete. The French formal gardens, Le Nôtre's masterpiece, extend over 33 hectares with embroidered parterres, pools, cascades and grottos. The estate is now privately owned by the de Vogüé family who have magnificently restored it. Candlelight evenings on summer Saturdays, with 2,000 candles illuminating château and gardens, are a fairytale spectacle unique to France.",
        itineraire:
          "Your TaxiNeo driver picks you up from your Paris address and joins the A5 motorway via the south-eastern ring road towards Troyes-Sens. The A5 quickly crosses the south-eastern suburbs and the Brie plain. After about 40 km, you take the Melun exit then the D215 through the Maincy countryside. The château appears suddenly around a tree-lined path, offering a striking perspective of the north façade. Your driver drops you at the main estate entrance. An alternative route via the N104 (Francilienne) then the D606 via Melun is possible if the A5 is congested. The return can be combined with a stop at the medieval village of Blandy-les-Tours (10 km) or Fontainebleau château (20 km). Candlelight evenings ending around 11pm, your TaxiNeo driver ensures a comfortable late return.",
        conseils:
          "Vaux-le-Vicomte is open mid-March to early November, 10am-6pm. Adult admission is €18.90 (château + gardens) or €8.90 for gardens only. Allow 3-4 hours for the full visit: château (1.5h), gardens (1.5h) and Carriage Museum in the stables. Candlelight evenings take place Saturdays May-October, 7pm-11pm (special rate €21.90): 2,000 candles light up château and gardens, creating a magical atmosphere. An electric cart service lets you tour the gardens effortlessly (€5). Le Relais de l'Écureuil restaurant offers lunch and tea in the outbuildings. The audioguide (€3) is recommended to understand Fouquet's fascinating story. Children enjoy the treasure hunt and period costumes available for hire.",
        comparaisonTransport:
          "By train, Gare de Lyon → Melun takes 25 minutes on Transilien R (€8.95), but you then need a local taxi from Melun to Vaux-le-Vicomte (7 km, about €15-20) as no bus serves the château. Total time reaches 1 hour with waiting. By rental car, expect €40 per day plus tolls. The Châteaubus shuttle runs Saturdays and Sundays April-October (€7) but with very limited schedules. By TaxiNeo taxi at €105, the direct door-to-door 50-minute transfer is the most comfortable solution, especially for candlelight evenings when public transport no longer operates.",
        faq: [
          { question: "What is the price of a taxi Paris — Château de Vaux-le-Vicomte?", answer: "The flat rate is €105–€130 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Paris — Château de Vaux-le-Vicomte journey?", answer: "About 50 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "paris-provins",
    from: "Paris",
    to: "Cité médiévale de Provins",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 48.5593,
    toLng: 3.2987,
    distanceKm: 88,
    durationMin: 70,
    priceEstimate: "170 — 205 €",
    category: "touristique",
    prixMin: 170,
    prixMax: 205,
    prixVan: 270,
    dureeMax: 95,
    autoroute: "A4 puis N36/D231",
    peages: "Péage A4 : environ 5,60 €",
    departSlug: "paris",
    arriveeSlug: "provins",
    liensInternes: ["paris-meaux", "paris-melun", "paris-fontainebleau"],
    tags: ["provins", "seine-et-marne", "medieval", "unesco", "spectacle"],
    hub: "paris",
    highlights: ["A4", "Cité médiévale UNESCO"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Cité médiévale de Provins | 90 km | TaxiNeo",
        metaDescription: "Par A4, 1h10 de trajet. Vue sur Cité médiévale UNESCO en chemin. Arrêt possible pour photos et visites en chemin.",
        heroTitle: "Taxi Paris → Cité médiévale de Provins",
        heroSubtitle: "Votre transfert Paris → Cité médiévale de Provins au prix fixe de 170 — 205 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Excursion Paris — Provins pour découvrir cette cité médiévale classée UNESCO.",
        routeDescription: "Le trajet emprunte l'A4 direction Metz puis la sortie Provins.",
        introduction:
          "Provins est l'une des grandes cités médiévales de France, inscrite au patrimoine mondial de l'UNESCO depuis 2001 pour ses foires de Champagne et son architecture médiévale exceptionnellement préservée. Au XIIIe siècle, Provins était la troisième ville de France par sa population et l'un des centres commerciaux les plus importants d'Europe grâce à ses grandes foires de Champagne qui attiraient des marchands de toute la Méditerranée et du nord de l'Europe. La ville haute, fortifiée par des remparts de 5 km percés de 22 tours, conserve la Tour César (donjon du XIIe siècle), la collégiale Saint-Quiriace et de remarquables maisons à colombages. Les souterrains médiévaux, réseau de galeries creusées dans la pierre, sont une attraction unique. Les spectacles médiévaux (joutes équestres, fauconnerie, banquets) attirent 500 000 visiteurs par an. La rose de Provins, rapportée des croisades par Thibaut IV de Champagne, reste un symbole de la ville et se décline en confitures, bonbons et cosmétiques. Les familles, les amateurs de médiéval, les touristes étrangers en excursion depuis Paris et les gourmands constituent la clientèle du taxi Paris — Provins.",
        itineraire:
          "Le chauffeur emprunte le périphérique est puis l'autoroute A4 en direction de Metz-Strasbourg. Après environ 65 km et le péage de Coutevroult (5,60 €, inclus), il emprunte la sortie vers la N36 direction Provins. La route traverse les plaines céréalières de la Brie champenoise avant d'arriver à Provins. La cité médiévale est visible de loin grâce à la silhouette caractéristique de la Tour César et de la collégiale Saint-Quiriace. L'entrée dans la ville haute se fait par la Porte Saint-Jean ou la Porte de Jouy. Le parking des remparts, en contrebas de la ville haute, est le point de dépose le plus pratique. La ville basse (commerces, gare, restaurants) est accessible par la D619. L'itinéraire alternatif emprunte la N4 via Rozay-en-Brie, moins rapide mais sans péage et traversant de jolis villages briards.",
        conseils:
          "Provins mérite une journée entière de visite. Les spectacles médiévaux ont lieu d'avril à novembre, les week-ends et tous les jours en été. Le spectacle de joutes « La Légende des Chevaliers » est le plus populaire et démarre à 14h30 : arrivez avant 14h00. En été, les températures peuvent être élevées dans la ville haute sans ombre : prévoyez eau et chapeau. Le marché médiéval, en juin, est l'événement phare avec des centaines de figurants en costume d'époque. La boutique de la Rose de Provins, rue du Val, propose des confitures, pétales cristallisés et cosmétiques uniques. Les souterrains sont à 12°C toute l'année : prévoyez un gilet. Pour le déjeuner, La Table Saint-Jean dans la ville haute propose une cuisine médiévale inspirée. Réservez votre taxi retour à l'avance car il y a très peu de taxis locaux et pas d'Uber à Provins.",
        comparaisonTransport:
          "Le Transilien P depuis la Gare de l'Est dessert Provins en 1h20 à 1h30 pour 12,10 €. Les trains sont peu fréquents (toutes les heures environ) et la gare est en ville basse, à 1 km de la cité médiévale. En taxi TaxiNeo à 170-205 €, vous êtes au pied des remparts en 70 minutes, sans correspondance et avec flexibilité pour le retour. Le train est imbattable en prix pour un voyageur seul, mais pour une famille de 4 (48 € A/R en train), le taxi offre un gain de confort et de temps appréciable pour un surcoût de 120-160 €. Pas de Uber ni de VTC disponible à Provins : le taxi réservé est votre seule option fiable pour le retour.",
        faq: [
          { question: "Quel est le prix d'un taxi Paris — Cité médiévale de Provins ?", answer: "Le forfait est de 170 — 205 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Paris — Cité médiévale de Provins ?", answer: "Environ 70 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Cité médiévale de Provins | 90 km | TaxiNeo",
        metaDescription: "Via A4 in 70 min. UNESCO medieval city with jousting shows and ramparts. No direct public transport. Wait-and-return option for day trips. Quick online quote.",
        heroTitle: "Taxi Paris → Cité médiévale de Provins",
        heroSubtitle: "Your Paris → Cité médiévale de Provins transfer at a fixed price of €170–€205. Online booking, professional driver 24/7.",
        description: "Paris — Provins excursion to discover this UNESCO-listed medieval city.",
        routeDescription: "The route takes the A4 towards Metz then the Provins exit.",
        introduction:
          "Provins has been a UNESCO World Heritage Site since 2001 for its Champagne fairs and exceptionally preserved medieval architecture. In the 13th century, it was France's third-largest city and one of Europe's most important commercial centres. The upper town, fortified by 5 km of ramparts, preserves the Caesar Tower, Saint-Quiriace Collegiate and remarkable half-timbered houses. Medieval shows attract 500,000 visitors annually. The Provins rose, brought from the Crusades, remains the town's symbol.",
        itineraire:
          "The driver takes the eastern ring road and A4 towards Metz. After about 65 km and the Coutevroult toll (€5.60, included), the N36 exit leads to Provins. The medieval town is visible from afar. Entry through Porte Saint-Jean or Porte de Jouy. The ramparts car park is the most practical drop-off point.",
        conseils:
          "Provins deserves a full day. Medieval shows run April-November, weekends and daily in summer. The jousting show starts at 2:30 PM — arrive by 2:00 PM. Summer temperatures can be high in the shadeless upper town. The underground galleries are 12°C year-round. Book your return taxi ahead as there are no Uber or VTC services in Provins.",
        comparaisonTransport:
          "Transilien P from Gare de l'Est serves Provins in 1h20-1h30 for €12.10. Trains are infrequent (hourly) and the station is 1 km from the medieval town. By TaxiNeo at €170-205, you're at the ramparts in 70 minutes. For a family of 4, the taxi offers significant comfort gains over the train. No Uber available in Provins — a pre-booked taxi is your only reliable return option.",
        faq: [
          { question: "What is the price of a taxi Paris — Cité médiévale de Provins?", answer: "The flat rate is €170–€205 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Paris — Cité médiévale de Provins journey?", answer: "About 70 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "paris-auvers-sur-oise",
    from: "Paris",
    to: "Auvers-sur-Oise",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 49.0718,
    toLng: 2.17,
    distanceKm: 35,
    durationMin: 45,
    priceEstimate: "70 — 85 €",
    category: "touristique",
    prixMin: 70,
    prixMax: 85,
    prixVan: 110,
    dureeMax: 65,
    autoroute: "A15 / N184",
    peages: "Aucun",
    departSlug: "paris",
    arriveeSlug: "auvers-sur-oise",
    liensInternes: ["paris-giverny", "paris-compiegne", "paris-barbizon"],
    tags: ["tourisme", "impressionnisme", "van-gogh", "art", "peinture"],
    hub: "paris",
    highlights: ["A15", "Maison Van Gogh", "Église d'Auvers"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Auvers-sur-Oise | 35 km, dès 70 € | TaxiNeo",
        metaDescription: "Via A15 en 45 min. Maison Van Gogh et Église d'Auvers en chemin. Arrêt possible pour photos et visites en chemin.",
        heroTitle: "Taxi Paris → Auvers-sur-Oise",
        heroSubtitle: "Votre transfert Paris → Auvers-sur-Oise au prix fixe de 70 — 85 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Sur les traces de Van Gogh à Auvers-sur-Oise, village d'artistes au nord de Paris.",
        routeDescription: "Le trajet emprunte l'A15 direction Cergy puis rejoint Auvers.",
        introduction:
          "Auvers-sur-Oise est un village d'artistes niché dans la vallée de l'Oise, à 35 km au nord-ouest de Paris. Ce petit bourg de 7 000 habitants est mondialement connu comme le dernier lieu de vie de Vincent van Gogh, qui y passa les 70 derniers jours de son existence, du 20 mai au 29 juillet 1890. Durant cette période d'une intensité créatrice inouïe, le peintre hollandais réalisa pas moins de 80 œuvres, dont certaines de ses toiles les plus célèbres : « L'Église d'Auvers-sur-Oise », « Le Champ de blé aux corbeaux » et « Le Portrait du docteur Gachet ». Avant Van Gogh, le village avait déjà attiré Daubigny, Corot, Pissarro et Cézanne, faisant d'Auvers un véritable berceau de l'impressionnisme et du post-impressionnisme. L'Auberge Ravoux, où Van Gogh a vécu et est mort dans la chambre numéro 5, est ouverte au public. Le Château d'Auvers propose une immersion multimédia dans l'impressionnisme. Le cimetière communal abrite les tombes de Vincent et de son frère Theo, côte à côte, couvertes de lierre. Le taxi est idéal pour cette excursion car Auvers est mal relié à Paris par les transports en commun malgré sa proximité.",
        itineraire:
          "Votre chauffeur TaxiNeo vous emmène depuis Paris par l'A15 direction Cergy-Pontoise. L'autoroute traverse la banlieue nord-ouest jusqu'à Argenteuil, autre village cher aux impressionnistes. Après Cergy, vous prenez la N184 puis la D4 qui longe la vallée de l'Oise. Le paysage s'ouvre sur les coteaux boisés et les champs qui ont si peu changé depuis l'époque de Van Gogh. L'arrivée à Auvers se fait par la route de Pontoise, passant devant le château. Votre chauffeur peut vous déposer devant l'Auberge Ravoux sur la place de la Mairie, point de départ idéal pour la visite. Le trajet ne prend que 45 minutes en dehors des heures de pointe. Aux heures de pointe, le passage par Argenteuil peut être ralenti ; votre chauffeur empruntera alors la D922 par Méry-sur-Oise pour éviter les bouchons. Aucun péage n'est nécessaire pour ce trajet.",
        conseils:
          "La chambre de Van Gogh à l'Auberge Ravoux est ouverte de mars à octobre, du mercredi au dimanche, de 10h à 18h (entrée 6 €). La visite est sobre et émouvante : la pièce minuscule de 7 m² où le peintre a rendu son dernier souffle est restée dans son état d'origine. Le Château d'Auvers (entrée 15 €) propose un parcours multimédia « Voyage au temps des Impressionnistes ». L'église d'Auvers, immortalisée par Van Gogh, est accessible gratuitement. Un parcours fléché dans le village permet de retrouver les sites peints par Van Gogh, avec des reproductions de ses toiles devant les lieux réels. Le cimetière se trouve en haut du village, à 10 minutes à pied de l'auberge. Pour le déjeuner, le restaurant de l'Auberge Ravoux propose une cuisine traditionnelle dans le cadre historique. Prévoyez 3 à 4 heures pour une visite complète du village. La Maison du Docteur Gachet se visite sur réservation (gratuit).",
        comparaisonTransport:
          "En train, le trajet Gare du Nord → Auvers-sur-Oise prend environ 1h15 avec une correspondance à Pontoise ou Valmondois (billet à partir de 6,50 € en Transilien). Les trains sont peu fréquents (toutes les heures environ). En voiture de location, comptez 40 € la journée et 8 € de carburant, sans péage. En taxi TaxiNeo à 70 €, le transfert direct en 45 minutes est la solution la plus pratique. L'aller-retour avec attente est proposé à partir de 120 €, idéal pour une demi-journée de visite sans souci de transport.",
        faq: [
          { question: "Quel est le prix d'un taxi Paris — Auvers-sur-Oise ?", answer: "Le forfait est de 70 — 85 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Paris — Auvers-sur-Oise ?", answer: "Environ 45 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Auvers-sur-Oise | 35 km, from €70 | TaxiNeo",
        metaDescription: "Via A15, 45 min ride. Maison Van Gogh and Église d'Auvers along the way. Stops for sightseeing possible en route. Perfect for a day trip without driving.",
        heroTitle: "Taxi Paris → Auvers-sur-Oise",
        heroSubtitle: "Your Paris → Auvers-sur-Oise transfer at a fixed price of €70–€85. Online booking, professional driver 24/7.",
        description: "Following Van Gogh's footsteps in Auvers-sur-Oise, an artists' village north of Paris.",
        routeDescription: "The route takes the A15 towards Cergy then reaches Auvers.",
        introduction:
          "Auvers-sur-Oise is an artists' village in the Oise valley, 35 km northwest of Paris. This small town of 7,000 inhabitants is world-famous as Vincent van Gogh's last home, where he spent the final 70 days of his life from 20 May to 29 July 1890. During this period of extraordinary creative intensity, the Dutch painter produced no fewer than 80 works including some of his most famous canvases: 'The Church at Auvers', 'Wheatfield with Crows' and 'Portrait of Dr Gachet'. Before Van Gogh, the village had already attracted Daubigny, Corot, Pissarro and Cézanne, making Auvers a true cradle of Impressionism and Post-Impressionism. The Auberge Ravoux, where Van Gogh lived and died in room number 5, is open to the public. The Château d'Auvers offers a multimedia immersion in Impressionism. The communal cemetery holds the graves of Vincent and his brother Theo, side by side, covered in ivy. A taxi is ideal for this excursion as Auvers is poorly connected to Paris by public transport despite its proximity.",
        itineraire:
          "Your TaxiNeo driver takes you from Paris via the A15 towards Cergy-Pontoise. The motorway crosses the northwest suburbs to Argenteuil, another village dear to the Impressionists. After Cergy, you take the N184 then the D4 along the Oise valley. The landscape opens onto wooded hillsides and fields that have changed little since Van Gogh's time. Arrival at Auvers is via the Pontoise road, passing the château. Your driver can drop you at the Auberge Ravoux on Place de la Mairie, the ideal starting point. The journey takes just 45 minutes outside rush hour. During rush hour, Argenteuil can be slow; your driver will take the D922 via Méry-sur-Oise to avoid congestion. No tolls are required.",
        conseils:
          "Van Gogh's room at Auberge Ravoux is open March to October, Wednesday to Sunday, 10am-6pm (admission €6). The visit is sober and moving: the tiny 7 m² room where the painter drew his last breath remains in its original state. The Château d'Auvers (admission €15) offers a multimedia 'Journey to the Time of the Impressionists'. The Church of Auvers, immortalised by Van Gogh, is freely accessible. A signposted trail through the village lets you find sites painted by Van Gogh, with reproductions of his paintings at the actual locations. The cemetery is at the top of the village, 10 minutes' walk from the inn. For lunch, the Auberge Ravoux restaurant serves traditional cuisine in the historic setting. Allow 3-4 hours for a complete village visit. The Doctor Gachet's House can be visited by reservation (free).",
        comparaisonTransport:
          "By train, Gare du Nord → Auvers-sur-Oise takes about 1h15 with a connection at Pontoise or Valmondois (ticket from €6.50 Transilien). Trains are infrequent (roughly hourly). By rental car, expect €40 per day and €8 fuel, no tolls. By TaxiNeo taxi at €70, the direct 45-minute transfer is the most practical solution. Round trip with waiting is offered from €120, ideal for a half-day visit without transport worries.",
        faq: [
          { question: "What is the price of a taxi Paris — Auvers-sur-Oise?", answer: "The flat rate is €70–€85 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Paris — Auvers-sur-Oise journey?", answer: "About 45 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "paris-reims",
    from: "Paris",
    to: "Reims",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 49.2533,
    toLng: 3.2681,
    distanceKm: 145,
    durationMin: 95,
    priceEstimate: "280 — 335 €",
    category: "touristique",
    prixMin: 280,
    prixMax: 335,
    prixVan: 440,
    dureeMax: 130,
    autoroute: "A4",
    peages: "~10 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "reims",
    liensInternes: ["paris-metz", "paris-nancy", "paris-troyes"],
    tags: ["ville-a-ville", "tourisme", "champagne"],
    hub: "paris",
    highlights: ["A4", "Vignobles de Champagne", "Cathédrale de Reims"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Reims | 145 km, dès 280 €, 1h30 | TaxiNeo",
        metaDescription: "Via A4 en 1h35. Vignobles de Champagne et Cathédrale de Reims en chemin. Arrêt possible pour photos et visites en chemin.",
        heroTitle: "Taxi Paris → Reims",
        heroSubtitle: "Votre transfert Paris → Reims au prix fixe de 280 — 335 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Excursion Paris — Reims au cœur de la Champagne, entre cathédrale gothique et caves prestigieuses.",
        routeDescription: "L'itinéraire emprunte l'A4 à travers la Brie champenoise.",
        introduction:
          "Reims, cité des sacres où furent couronnés vingt-cinq rois de France à partir de Clovis en 496, est indissociable de l'histoire de la monarchie française et du champagne. La cathédrale Notre-Dame, chef-d'œuvre du gothique avec son ange au sourire, la basilique Saint-Remi et le palais du Tau forment un ensemble inscrit au patrimoine mondial de l'UNESCO depuis 1991. Mais Reims est aussi la capitale mondiale du champagne : les grandes maisons — Veuve Clicquot, Taittinger, Pommery, Ruinart, Mumm — possèdent des caves creusées dans la craie sur des kilomètres, ouvertes à la visite. Le taxi privé Paris — Reims est prisé par les amateurs d'œnotourisme qui souhaitent visiter plusieurs caves et vignobles de la Montagne de Reims sans souci de conduite. Les professionnels du secteur viticole, les avocats d'affaires et les cadres de l'industrie agroalimentaire champenoise empruntent régulièrement cette liaison. Reims est également une ville universitaire avec près de 30 000 étudiants, un campus de Sciences Po et une école de commerce reconnue (NEOMA). Les événements comme les Fêtes johanniques et les Habits de Lumière attirent des visiteurs du monde entier.",
        itineraire:
          "Le départ de Paris se fait par la Porte de Bercy ou la Porte de Bagnolet vers l'A4 en direction de Strasbourg-Metz. La traversée de la banlieue est passe par Noisy-le-Grand et Marne-la-Vallée, où l'on aperçoit au loin les structures de Disneyland Paris. Après la barrière de péage de Coutevroult, l'autoroute traverse les vastes plaines céréalières de la Brie champenoise. Le paysage change progressivement avec l'apparition des premières vignes de champagne sur les coteaux aux alentours de Dormans et Épernay. La sortie vers Reims se fait à la jonction A4/A26, avec une entrée dans la ville par le nord via la voie rapide Tinqueux-Reims ou par l'est via Cormontreuil. L'arrivée dans le centre-ville de Reims est simple, la voirie étant organisée autour de larges boulevards. Le chauffeur vous dépose devant votre hôtel, au pied de la cathédrale ou directement à la maison de champagne de votre choix.",
        conseils:
          "Le Paris — Reims est un trajet rapide d'1h35 qui ne requiert pas de pause. L'A4 est cependant très fréquentée en sortie de Paris, notamment entre la Porte de Bercy et Marne-la-Vallée : un départ avant 8h ou après 10h est recommandé. Si vous prévoyez de visiter des caves de champagne, réservez vos dégustations à l'avance car les grandes maisons (Veuve Clicquot, Taittinger) affichent complet en haute saison. Votre chauffeur peut vous accompagner pour une journée de visites dans le vignoble champenois : Épernay, Hautvillers (village de Dom Pérignon), la route des vins de la Montagne de Reims. En hiver, la plaine de la Brie peut être sujette au brouillard et au verglas : nos chauffeurs sont expérimentés sur ce tronçon. Pour les mariages et événements dans les vignobles champenois, nous proposons un service sur mesure avec attente et retour.",
        comparaisonTransport:
          "Le TGV Paris Est → Reims met 46 minutes et coûte de 15 € (Ouigo) à 50 € par personne. C'est l'un des TGV les plus rapides et moins chers de France. Cependant, la gare TGV Champagne-Ardenne est située à 10 km au sud de Reims, nécessitant un tramway ou un taxi local (15-20 €). Notre forfait taxi à partir de 280 € est pertinent dès 3 passagers et offre un avantage décisif pour les visites de caves (le chauffeur vous conduit de domaine en domaine) et le transport de bouteilles au retour, chose impossible en TGV sans surcoût bagages.",
        faq: [
          { question: "Quel est le prix d'un taxi Paris — Reims ?", answer: "Le forfait est de 280 — 335 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Paris — Reims ?", answer: "Environ 95 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Reims | Fixed price from €280 | TaxiNeo",
        metaDescription: "Via A4, 1h35 ride. Vignobles de Champagne and Cathédrale de Reims along the way. Perfect for a day trip without driving. Scenic stops available along the route.",
        heroTitle: "Taxi Paris → Reims",
        heroSubtitle: "Your Paris → Reims transfer at a fixed price of €280–€335. Online booking, professional driver 24/7.",
        description: "Paris — Reims excursion at the heart of Champagne, between Gothic cathedral and prestigious cellars.",
        routeDescription: "The route takes the A4 through the Champagne region.",
        introduction:
          "Reims, where 25 French kings were crowned, is inseparable from Champagne. The cathedral, Saint-Remi basilica and famous Champagne houses make it a must-visit. Private taxis are popular for wine touring, business trips and wedding transport.",
        itineraire:
          "From Paris via Porte de Bercy onto the A4. Through Marne-la-Vallée and the Brie plains, with Champagne vineyards appearing near Dormans. Arrival in Reims via the A4/A26 junction.",
        conseils:
          "A quick 1h35 trip, no stop needed. Avoid Paris exit traffic before 10am. For Champagne cave visits, book ahead. Your driver can serve as a wine tour chauffeur for the day.",
        comparaisonTransport:
          "TGV takes 46 minutes for €15-50, but the TGV station is 10km from Reims centre. Our taxi from €280 suits groups of 3+ and wine tourists who need cave-to-cave transport.",
        faq: [
          { question: "What is the price of a taxi Paris — Reims?", answer: "The flat rate is €280–€335 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Paris — Reims journey?", answer: "About 95 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "paris-mont-saint-michel",
    from: "Paris",
    to: "Mont Saint-Michel",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 48.636,
    toLng: -1.5115,
    distanceKm: 360,
    durationMin: 240,
    priceEstimate: "690 — 835 €",
    category: "touristique",
    prixMin: 690,
    prixMax: 835,
    prixVan: 1090,
    dureeMax: 300,
    autoroute: "A13 / A84",
    peages: "~22 € (A13 + sections A84)",
    departSlug: "paris",
    arriveeSlug: "mont-saint-michel",
    liensInternes: ["paris-deauville", "paris-honfleur", "paris-chartres"],
    tags: ["tourisme", "patrimoine-mondial", "unesco", "abbaye", "normandie"],
    hub: "paris",
    highlights: ["A13", "A84", "Normandie", "Baie du Mont"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Mont Saint-Michel | 360 km, dès 690 € | TaxiNeo",
        metaDescription: "Par A13, 4h de trajet. Passage par Normandie et Baie du Mont. Idéal pour une excursion sans conduire. Arrêt possible pour photos et visites en chemin.",
        heroTitle: "Taxi Paris → Mont Saint-Michel",
        heroSubtitle: "Votre transfert Paris → Mont Saint-Michel au prix fixe de 690 — 835 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Excursion Paris — Mont Saint-Michel, merveille de l'Occident classée UNESCO.",
        routeDescription: "L'itinéraire emprunte l'A13 puis l'A84 à travers la Normandie.",
        introduction:
          "Le Mont-Saint-Michel est sans conteste l'un des monuments les plus extraordinaires de France et du monde. Classé au patrimoine mondial de l'UNESCO depuis 1979, cet îlot rocheux de granite s'élève à 92 mètres au-dessus de la baie, couronné par une abbaye bénédictine fondée au VIIIe siècle. Surnommé « la Merveille de l'Occident », le Mont accueille chaque année plus de 2,5 millions de visiteurs venus du monde entier. La baie du Mont-Saint-Michel est le théâtre des plus grandes marées d'Europe continentale, avec un marnage pouvant atteindre 15 mètres lors des grandes marées d'équinoxe. Le village médiéval qui s'accroche aux flancs du rocher, avec ses ruelles étroites et ses maisons à colombages, constitue un véritable voyage dans le temps. La Grande Rue, artère principale bordée de boutiques et restaurants, monte jusqu'à l'entrée de l'abbaye dont l'architecture romane et gothique témoigne de huit siècles de construction. Le passerelle-pont inauguré en 2014 a redonné au Mont son caractère insulaire lors des grandes marées. Rejoindre le Mont-Saint-Michel en taxi depuis Paris est la solution la plus confortable pour ce trajet de 4 heures, vous permettant de vous reposer et d'arriver frais pour la visite.",
        itineraire:
          "Le départ de Paris emprunte l'autoroute A13 en direction de Caen. Après environ 230 km, à hauteur de Caen, vous rejoignez l'A84 surnommée « Route des Estuaires » en direction de Rennes-Mont-Saint-Michel. Cette autoroute gratuite traverse la campagne normande du bocage virois et les vertes collines du Mortainais. Après Villedieu-les-Poêles, célèbre pour ses fonderies de cloches, les derniers 30 km sur la D976 puis la D275 offrent une progression spectaculaire : le Mont apparaît d'abord comme une silhouette lointaine, puis grossit peu à peu jusqu'à révéler toute sa majesté. Le parking principal est situé à 2,5 km du Mont (gratuit pour les taxis en dépose). Depuis le parking, une navette gratuite ou une passerelle piétonne de 900 mètres vous conduit au pied du Mont. Votre chauffeur TaxiNeo vous dépose au plus près possible et convient avec vous de l'heure de retour. Pour le retour, un itinéraire alternatif par Fougères et l'A11 via Le Mans peut être envisagé pour varier les paysages.",
        conseils:
          "L'abbaye est ouverte toute l'année : de 9h30 à 18h (mai à août jusqu'à 19h, dernier accès 1h avant fermeture). Le tarif d'entrée est de 11 € pour les adultes, gratuit pour les moins de 26 ans résidents de l'UE. Arrivez tôt le matin (avant 10h) ou en fin d'après-midi pour éviter la foule. Prévoyez 2 à 3 heures pour la visite de l'abbaye et du village. Les traversées de la baie à pied avec un guide agréé sont une expérience inoubliable (environ 20 €, 3h, réservation obligatoire). Consultez les horaires de marée car les grandes marées transforment complètement le paysage. La Mère Poulard est le restaurant historique du Mont, célèbre pour son omelette soufflée (35 € environ). Pour un hébergement sur le Mont même, Les Terrasses Poulard ou l'Auberge Saint-Pierre offrent une expérience unique quand le Mont redevient île le soir. Portez des chaussures confortables car les ruelles sont pentues et pavées. En été, les illuminations nocturnes du Mont sont féeriques.",
        comparaisonTransport:
          "En TGV, Paris Montparnasse → Rennes dure 1h25 (à partir de 29 € en Ouigo), puis il faut prendre un car Flixbus ou Keolis (1h10, environ 15 €) jusqu'au Mont. Temps total : environ 3h30 avec correspondances. Le bus direct Flixbus Paris → Mont-Saint-Michel prend 4h30 et coûte environ 20-35 €. En voiture de location, comptez 90 € la journée plus 22 € de péage et 40 € de carburant. Les excursions organisées coûtent 130 à 180 € par personne pour la journée. En taxi TaxiNeo à 690 €, pour 4 passagers le coût par personne est d'environ 173 €, avec un confort inégalé et la possibilité de s'arrêter en chemin à Villedieu-les-Poêles ou Avranches.",
        faq: [
          { question: "Quel est le prix d'un taxi Paris — Mont Saint-Michel ?", answer: "Le forfait est de 690 — 835 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Paris — Mont Saint-Michel ?", answer: "Environ 240 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Mont Saint-Michel | 360 km, from €690 | TaxiNeo",
        metaDescription: "Direct route via A13, 4 hours. Normandie and Baie du Mont along the way. Stops for sightseeing possible en route. Perfect for a day trip without driving.",
        heroTitle: "Taxi Paris → Mont Saint-Michel",
        heroSubtitle: "Your Paris → Mont Saint-Michel transfer at a fixed price of €690–€835. Online booking, professional driver 24/7.",
        description: "Paris — Mont Saint-Michel excursion, UNESCO-listed wonder of the Western world.",
        routeDescription: "The route takes the A13 then the A84 through Normandy.",
        introduction:
          "Mont-Saint-Michel is undoubtedly one of the most extraordinary monuments in France and the world. A UNESCO World Heritage Site since 1979, this granite rocky islet rises 92 metres above the bay, crowned by a Benedictine abbey founded in the 8th century. Known as 'the Wonder of the Western World', the Mont welcomes over 2.5 million visitors from around the world each year. Mont-Saint-Michel bay has the greatest tidal range in continental Europe, reaching 15 metres during equinox spring tides. The medieval village clinging to the rock's flanks, with its narrow streets and half-timbered houses, is a true journey through time. The Grande Rue, the main street lined with shops and restaurants, climbs to the abbey entrance whose Romanesque and Gothic architecture bears witness to eight centuries of construction. The footbridge inaugurated in 2014 restored the Mont's island character during high tides. Getting to Mont-Saint-Michel by taxi from Paris is the most comfortable solution for this 4-hour journey, letting you rest and arrive fresh for the visit.",
        itineraire:
          "Departure from Paris takes the A13 motorway towards Caen. After about 230 km near Caen, you join the A84 nicknamed 'Route des Estuaires' towards Rennes-Mont-Saint-Michel. This toll-free motorway crosses the Norman bocage countryside and the green hills of the Mortainais. After Villedieu-les-Poêles, famous for its bell foundries, the last 30 km on the D976 then D275 offer a spectacular progression: the Mont first appears as a distant silhouette, then gradually grows to reveal its full majesty. The main car park is 2.5 km from the Mont (free for taxi drop-offs). From the car park, a free shuttle or 900-metre pedestrian walkway takes you to the foot of the Mont. Your TaxiNeo driver drops you as close as possible and agrees on a return time. For the return, an alternative route via Fougères and the A11 via Le Mans can vary the scenery.",
        conseils:
          "The abbey is open year-round: 9:30am to 6pm (May to August until 7pm, last entry 1h before closing). Admission is €11 for adults, free for under-26 EU residents. Arrive early morning (before 10am) or late afternoon to avoid crowds. Allow 2-3 hours for the abbey and village visit. Bay crossings on foot with a licensed guide are unforgettable (about €20, 3h, booking required). Check tide times as spring tides completely transform the landscape. La Mère Poulard is the Mont's historic restaurant, famous for its soufflé omelette (about €35). For accommodation on the Mont itself, Les Terrasses Poulard or Auberge Saint-Pierre offer a unique experience when the Mont becomes an island again in the evening. Wear comfortable shoes as the streets are steep and cobbled. In summer, the Mont's night illuminations are magical.",
        comparaisonTransport:
          "By TGV, Paris Montparnasse → Rennes takes 1h25 (from €29 Ouigo), then take a Flixbus or Keolis coach (1h10, about €15) to the Mont. Total time: about 3h30 with connections. Direct Flixbus Paris → Mont-Saint-Michel takes 4h30 at €20-35. By rental car, expect €90 per day plus €22 tolls and €40 fuel. Organised excursions cost €130-180 per person for the day. By TaxiNeo taxi at €690, for 4 passengers the cost per person is about €173, with unmatched comfort and the option to stop en route at Villedieu-les-Poêles or Avranches.",
        faq: [
          { question: "What is the price of a taxi Paris — Mont Saint-Michel?", answer: "The flat rate is €690–€835 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Paris — Mont Saint-Michel journey?", answer: "About 240 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "nice-monaco",
    from: "Nice",
    to: "Monaco",
    fromLat: 43.7102,
    fromLng: 7.262,
    toLat: 43.7384,
    toLng: 7.4246,
    distanceKm: 20,
    durationMin: 25,
    priceEstimate: "40 — 50 €",
    category: "touristique",
    prixMin: 40,
    prixMax: 50,
    prixVan: 65,
    dureeMax: 45,
    autoroute: "A8 ou Basse Corniche (M6098)",
    peages: "~2 € (section Nice–Monaco via A8)",
    departSlug: "nice",
    arriveeSlug: "monaco",
    liensInternes: ["/trajet/nice-menton", "/trajet/nice-eze", "/trajet/nice-cap-dail"],
    tags: ["monaco", "monte-carlo", "principauté", "luxe", "grand prix"],
    hub: "nice",
    highlights: ["Basse Corniche", "Cap-d'Ail", "Monte-Carlo"],
    i18n: {
      fr: {
        metaTitle: "Taxi Nice → Monaco | forfait dès 40 €, 25 min | TaxiNeo",
        metaDescription: "Trajet direct en 25 min. Basse Corniche, Cap-d'Ail et Monte-Carlo en chemin. Arrêt possible pour photos et visites en chemin.",
        heroTitle: "Taxi Nice → Monaco",
        heroSubtitle: "Votre transfert Nice → Monaco au prix fixe de 40 — 50 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Nice — Monaco le long de la Côte d'Azur. Vue panoramique sur la Méditerranée.",
        routeDescription: "Le trajet suit la Basse Corniche en longeant le littoral jusqu'à Monte-Carlo.",
        introduction:
          "Monaco, deuxième plus petit État souverain du monde après le Vatican, est un joyau enchâssé entre mer et montagne sur la Côte d'Azur. La Principauté attire chaque année des millions de visiteurs venus admirer le Casino de Monte-Carlo, le Palais Princier, le Musée Océanographique et les Jardins Exotiques perchés à flanc de falaise. Le trajet depuis Nice longe l'une des côtes les plus spectaculaires de la Méditerranée, offrant des panoramas à couper le souffle sur les eaux turquoise et les falaises calcaires. Monaco est également mondialement célèbre pour son Grand Prix de Formule 1, disputé dans les rues étroites de la ville chaque mois de mai, ainsi que pour son tournoi de tennis Masters 1000 au Monte-Carlo Country Club de Roquebrune-Cap-Martin. La vie nocturne, les boutiques de luxe et la gastronomie étoilée complètent l'attrait de cette destination unique au monde. Que vous voyagiez pour affaires, pour un événement sportif ou pour le plaisir, le taxi depuis Nice vous dépose au cœur de la Principauté sans aucun souci de stationnement.",
        itineraire:
          "Depuis Nice, trois itinéraires principaux mènent à Monaco. Le plus rapide emprunte l'autoroute A8 : prenez la direction de l'Italie, traversez le tunnel de Monaco et sortez à la sortie 56 Monaco/Monte-Carlo. Vous descendez ensuite vers le centre par le boulevard du Jardin Exotique. L'itinéraire le plus pittoresque suit la Basse Corniche (M6098) qui longe le littoral en passant par Villefranche-sur-Mer, le cap de Nice, Beaulieu-sur-Mer et Cap-d'Ail avant d'entrer dans Monaco par l'avenue d'Ostende. La Moyenne Corniche (D6007) offre un compromis entre rapidité et paysage : elle traverse Èze Village avec son panorama exceptionnel sur la rade de Villefranche et sur le cap Ferrat, puis descend vers Monaco par Beausoleil. Chaque itinéraire a son charme et votre chauffeur vous conseillera selon l'heure et le trafic du moment. En période de Grand Prix, certaines rues de Monaco sont fermées et les accès sont modifiés : votre chauffeur connaît parfaitement les itinéraires alternatifs.",
        conseils:
          "Le stationnement à Monaco est extrêmement coûteux et les places sont rares : le taxi est de loin la solution la plus pratique pour s'y rendre. En été et lors des grands événements (Grand Prix en mai, Yacht Show en septembre, Fête Nationale le 19 novembre), le trafic peut être dense aux portes de Monaco : prévoyez 10 à 15 minutes supplémentaires. Lors du Grand Prix de F1, les tarifs de taxi peuvent être majorés et il est impératif de réserver plusieurs jours à l'avance. Si vous souhaitez visiter le Palais Princier, demandez à être déposé sur le Rocher ; pour le Casino, au square Beaumarchais ou à la place du Casino. Les tenues correctes sont exigées dans certains établissements monégasques, notamment au Casino. Le soir, la Principauté brille de mille feux et le retour en taxi vous évite tout souci lié à l'alcool au volant après un dîner festif.",
        comparaisonTransport:
          "Le bus 100 de la Ligne d'Azur relie Nice à Monaco en environ 45 minutes pour 1,50 €, mais il est souvent bondé en été et ne dessert pas précisément votre destination. Le TER coûte environ 4,10 € et met 20 minutes, mais la gare de Monaco-Monte-Carlo est excentrée par rapport au Rocher et au Casino. En taxi, vous êtes pris en charge directement à votre hôtel ou à l'aéroport et déposé à l'adresse exacte de votre choix dans la Principauté, avec vos bagages en sécurité, en 25 minutes porte-à-porte.",
        faq: [
          { question: "Quel est le prix d'un taxi Nice — Monaco ?", answer: "Le forfait est de 40 — 50 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Nice — Monaco ?", answer: "Environ 25 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Nice → Monaco | Fixed price from €40 | TaxiNeo",
        metaDescription: "Direct 25 min ride. Basse Corniche, Cap-d'Ail and Monte-Carlo along the way. Stops for sightseeing possible en route. Perfect for a day trip without driving.",
        heroTitle: "Taxi Nice → Monaco",
        heroSubtitle: "Your Nice → Monaco transfer at a fixed price of €40–€50. Online booking, professional driver 24/7.",
        description: "Nice — Monaco transfer along the French Riviera. Panoramic Mediterranean views.",
        routeDescription: "The route follows the Basse Corniche along the coastline to Monte-Carlo.",
        introduction:
          "Monaco, the world's second-smallest sovereign state after the Vatican, is a jewel set between sea and mountains on the French Riviera. The Principality attracts millions of visitors each year who come to admire the Monte-Carlo Casino, the Prince's Palace, the Oceanographic Museum and the Exotic Gardens perched on the cliffsides. The journey from Nice follows one of the most spectacular coastlines in the Mediterranean, offering breathtaking views of turquoise waters and limestone cliffs. Monaco is also world-famous for its Formula 1 Grand Prix, held through the narrow streets of the city every May, as well as its Masters 1000 tennis tournament at the Monte-Carlo Country Club in Roquebrune-Cap-Martin. Nightlife, luxury shopping and Michelin-starred dining complete the appeal of this unique destination. Whether you are travelling on business, for a sporting event or for pleasure, a taxi from Nice drops you right in the heart of the Principality with no parking worries.",
        itineraire:
          "From Nice, three main routes lead to Monaco. The fastest takes the A8 motorway: head towards Italy, pass through the Monaco tunnel and take exit 56 Monaco/Monte-Carlo. You then descend to the centre via Boulevard du Jardin Exotique. The most scenic route follows the Lower Corniche (M6098) along the coast through Villefranche-sur-Mer, the Cap de Nice, Beaulieu-sur-Mer and Cap-d'Ail before entering Monaco via Avenue d'Ostende. The Middle Corniche (D6007) offers a compromise between speed and scenery: it passes through Èze Village with its exceptional panorama of the Villefranche harbour and Cap Ferrat, then descends into Monaco through Beausoleil. Each route has its charm and your driver will advise based on the time and current traffic. During Grand Prix week, certain Monaco streets are closed and access routes change: your driver knows the alternative routes perfectly.",
        conseils:
          "Parking in Monaco is extremely expensive and scarce: a taxi is by far the most practical way to get there. In summer and during major events (Grand Prix in May, Yacht Show in September, National Day on 19 November), traffic can be heavy at Monaco's entrances: allow an extra 10 to 15 minutes. During the F1 Grand Prix, taxi fares may be increased and booking several days in advance is essential. If you wish to visit the Prince's Palace, ask to be dropped at the Rock; for the Casino, at Place du Casino. Smart dress codes apply in certain Monaco establishments, particularly the Casino. In the evening, the Principality sparkles and a taxi ride home avoids any drink-driving concerns after a festive dinner.",
        comparaisonTransport:
          "Bus 100 (Ligne d'Azur) connects Nice to Monaco in about 45 minutes for €1.50, but it is often packed in summer and does not serve your exact destination. The TER train costs about €4.10 and takes 20 minutes, but Monaco-Monte-Carlo station is far from the Rock and Casino. By taxi, you are picked up directly from your hotel or the airport and dropped at the exact address of your choice in the Principality, with your luggage safely stored, in 25 minutes door-to-door.",
        faq: [
          { question: "What is the price of a taxi Nice — Monaco?", answer: "The flat rate is €40–€50 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Nice — Monaco journey?", answer: "About 25 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "nice-saint-tropez",
    from: "Nice",
    to: "Saint-Tropez",
    fromLat: 43.7102,
    fromLng: 7.262,
    toLat: 43.2727,
    toLng: 6.6406,
    distanceKm: 120,
    durationMin: 95,
    priceEstimate: "230 — 280 €",
    category: "touristique",
    prixMin: 230,
    prixMax: 280,
    prixVan: 365,
    dureeMax: 150,
    autoroute: "A8 puis D25 et D98A",
    peages: "~9 € (section Nice–Le Muy via A8)",
    departSlug: "nice",
    arriveeSlug: "saint-tropez",
    liensInternes: ["/trajet/nice-sainte-maxime", "/trajet/nice-frejus", "/trajet/nice-cannes"],
    tags: ["saint-tropez", "pampelonne", "côte d'azur", "jet-set", "port", "plages"],
    hub: "nice",
    highlights: ["A8", "Fréjus", "Golfe de Saint-Tropez"],
    i18n: {
      fr: {
        metaTitle: "Taxi Nice → Saint-Tropez | 110 km, dès 210 € | TaxiNeo",
        metaDescription: "Via A8 en 1h35. Fréjus et Golfe de Saint-Tropez sur le parcours. Arrêt possible pour photos et visites en chemin.",
        heroTitle: "Taxi Nice → Saint-Tropez",
        heroSubtitle: "Votre transfert Nice → Saint-Tropez au prix fixe de 230 — 280 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Nice — Saint-Tropez pour rejoindre le village mythique de la Côte d'Azur.",
        routeDescription: "L'itinéraire emprunte l'A8 jusqu'à Fréjus puis la route côtière vers Saint-Tropez.",
        introduction:
          "Saint-Tropez est bien plus qu'une destination : c'est un mythe. Ce petit village de pêcheurs du Var, rendu célèbre par Brigitte Bardot dans les années 1950, est devenu le symbole mondial du glamour méditerranéen. Pourtant, derrière le strass des yachts et des boîtes de nuit, Saint-Tropez conserve une authenticité étonnante. Le Vieux Port, avec ses façades ocre et roses, ses terrasses de café et ses pointus (barques traditionnelles) qui se balancent au soleil, offre un spectacle intemporel. Le Musée de l'Annonciade, installé dans une chapelle du XVIe siècle face au port, abrite une collection exceptionnelle de pointillistes et de fauves — Signac, Matisse, Bonnard, Derain — qui trouvèrent ici la lumière qui révolutionna la peinture moderne. La Citadelle, dominant la baie depuis le XVIe siècle, offre un panorama époustouflant sur le golfe et les Maures. La plage de Pampelonne, longue de 5 km de sable blond, est devenue mythique avec ses beach clubs et ses eaux turquoise. Le marché provençal de la Place des Lices, où les Tropéziens jouent à la pétanque sous les platanes centenaires, est l'un des plus célèbres de Provence. Le trajet depuis Nice traverse le Var par l'A8 avant de plonger vers la presqu'île par des routes sinueuses à travers le massif des Maures, pinèdes parfumées de résine et de romarin.",
        itineraire:
          "Depuis Nice, empruntez l'autoroute A8 en direction d'Aix-en-Provence. Prenez la sortie 37 Le Muy et suivez la D25 vers le sud, à travers les collines boisées du massif des Maures. Vous traversez Sainte-Maxime sur la rive nord du golfe, puis contournez le golfe par la D98A en direction de Cogolin et Gassin. L'entrée de Saint-Tropez se fait par la RD98A qui peut être très encombrée en été, surtout le samedi (jour de rotation des locations). L'alternative par Fréjus (sortie 38) et la D559 côtière via Saint-Raphaël est plus longue mais offre des vues mer. Nos chauffeurs choisissent l'itinéraire optimal en fonction du trafic et peuvent adapter en temps réel grâce à leur connaissance du terrain. Le dernier tronçon vers Saint-Tropez est le plus critique en termes de circulation estivale.",
        conseils:
          "En juillet-août, le trafic vers Saint-Tropez est légendairement difficile. Partez avant 8h ou après 18h pour éviter les pires bouchons. Le samedi (jour de changement de location) est le pire jour pour circuler. Le marché de la Place des Lices le mardi et samedi matin est incontournable mais arrivez tôt (avant 9h). Pour les plages de Pampelonne, la réservation d'un transat est recommandée en haute saison. Le Musée de l'Annonciade est souvent ignoré des touristes pressés : c'est pourtant l'un des plus beaux musées du sud de la France. Dîner au Vieux Port au coucher du soleil est un moment magique. Réservez votre taxi de retour à l'avance, surtout le soir en été, car la demande est très forte. Pour une approche originale, le bateau-navette depuis Sainte-Maxime (15 min) évite les bouchons de la presqu'île.",
        comparaisonTransport:
          "Il n'y a pas de gare à Saint-Tropez. Le bus VarLib 7601 relie Nice à Saint-Tropez en environ 3h pour 20 € avec correspondance. En voiture de location, les embouteillages et le parking en été sont cauchemardesques (jusqu'à 2h de bouchons pour 10 km). Le taxi offre un trajet direct en 1h35 hors pointe, avec un chauffeur qui connaît les itinéraires bis et vous dépose au port ou à votre hôtel sans souci de stationnement.",
        faq: [
          { question: "Quel est le prix d'un taxi Nice — Saint-Tropez ?", answer: "Le forfait est de 230 — 280 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Nice — Saint-Tropez ?", answer: "Environ 95 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Nice → Saint-Tropez | 110 km, from €210 | TaxiNeo",
        metaDescription: "Direct route via A8, 1h35. Fréjus and Golfe de Saint-Tropez along the way. Stops for sightseeing possible en route. Perfect for a day trip without driving.",
        heroTitle: "Taxi Nice → Saint-Tropez",
        heroSubtitle: "Your Nice → Saint-Tropez transfer at a fixed price of €230–€280. Online booking, professional driver 24/7.",
        description: "Nice — Saint-Tropez transfer to reach the legendary village of the French Riviera.",
        routeDescription: "The route takes the A8 to Fréjus then the coastal road to Saint-Tropez.",
        introduction:
          "Saint-Tropez is more than a destination: it is a myth. This small Var fishing village, made famous by Brigitte Bardot in the 1950s, has become the global symbol of Mediterranean glamour. Yet behind the glitz of yachts and nightclubs, Saint-Tropez retains surprising authenticity. The Old Port, with its ochre and pink facades, café terraces and pointus (traditional boats) swaying in the sun, offers a timeless spectacle. The Annonciade Museum, housed in a 16th-century chapel facing the port, holds an exceptional collection of Pointillist and Fauvist works — Signac, Matisse, Bonnard, Derain — who found here the light that revolutionised modern painting. The Citadel, overlooking the bay since the 16th century, offers breathtaking panoramas of the gulf and the Maures. Pampelonne beach, stretching 5 km of golden sand, has become legendary with its beach clubs and turquoise waters. The Provençal market at Place des Lices, where locals play pétanque under centuries-old plane trees, is one of Provence's most famous. The journey from Nice crosses the Var via the A8 before plunging towards the peninsula on winding roads through the Maures massif, pine forests fragrant with resin and rosemary.",
        itineraire:
          "From Nice, take the A8 motorway towards Aix-en-Provence. Take exit 37 Le Muy and follow the D25 southward through the wooded hills of the Maures massif. You pass through Sainte-Maxime on the gulf's north shore, then follow the gulf on the D98A towards Cogolin and Gassin. The entrance to Saint-Tropez is via the RD98A which can be very congested in summer, especially on Saturdays (rental changeover day). The alternative via Fréjus (exit 38) and the D559 coastal road through Saint-Raphaël is longer but offers sea views. Our drivers choose the optimal route based on traffic and can adapt in real time thanks to their local knowledge. The final stretch into Saint-Tropez is the most critical in terms of summer traffic.",
        conseils:
          "In July-August, traffic to Saint-Tropez is legendarily difficult. Leave before 8am or after 6pm to avoid the worst jams. Saturday (rental changeover day) is the worst day to travel. The Place des Lices market on Tuesday and Saturday mornings is unmissable but arrive early (before 9am). For Pampelonne beaches, booking a sun lounger is recommended in high season. The Annonciade Museum is often overlooked by hurried tourists: yet it is one of southern France's finest museums. Dining at the Old Port at sunset is a magical moment. Book your return taxi in advance, especially for evenings in summer, as demand is very high. For an original approach, the ferry from Sainte-Maxime (15 min) avoids the peninsula traffic jams.",
        comparaisonTransport:
          "There is no railway station in Saint-Tropez. VarLib bus 7601 connects Nice to Saint-Tropez in about 3h for €20 with a connection. With a rental car, summer traffic and parking are nightmarish (up to 2h of jams for 10 km). A taxi offers a direct journey in 1h35 off-peak, with a driver who knows alternative routes and drops you at the port or your hotel with no parking worries.",
        faq: [
          { question: "What is the price of a taxi Nice — Saint-Tropez?", answer: "The flat rate is €230–€280 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Nice — Saint-Tropez journey?", answer: "About 95 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "nice-eze",
    from: "Nice",
    to: "Èze Village",
    fromLat: 43.7102,
    fromLng: 7.262,
    toLat: 43.728,
    toLng: 7.3612,
    distanceKm: 12,
    durationMin: 20,
    priceEstimate: "25 — 30 €",
    category: "touristique",
    prixMin: 25,
    prixMax: 30,
    prixVan: 40,
    dureeMax: 35,
    autoroute: "Moyenne Corniche (D6007)",
    peages: "Aucun péage",
    departSlug: "nice",
    arriveeSlug: "eze",
    liensInternes: ["/trajet/nice-monaco", "/trajet/nice-villefranche-sur-mer", "/trajet/nice-la-turbie"],
    tags: ["èze", "village perché", "jardin exotique", "corniche", "panorama"],
    hub: "nice",
    highlights: ["Moyenne Corniche", "Vue panoramique", "Jardin exotique"],
    i18n: {
      fr: {
        metaTitle: "Taxi Nice → Èze Village | 12 km, dès 25 € | TaxiNeo",
        metaDescription: "Trajet direct en 20 min. Moyenne Corniche, Vue panoramique et Jardin exotique en chemin. Arrêt visite possible en chemin. Arrêt possible pour visites ou photos.",
        heroTitle: "Taxi Nice → Èze Village",
        heroSubtitle: "Votre transfert Nice → Èze Village au prix fixe de 25 — 30 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Excursion Nice — Èze, village perché avec vue panoramique sur la Méditerranée.",
        routeDescription: "Le trajet emprunte la Moyenne Corniche, route spectaculaire à flanc de falaise.",
        introduction:
          "Èze est sans doute le village perché le plus célèbre et le plus spectaculaire de la Côte d'Azur. Accroché à un piton rocheux à 429 mètres au-dessus de la mer, ce village médiéval fortifié offre un panorama vertigineux sur la Méditerranée, du cap Ferrat jusqu'à la côte italienne par temps clair. Ses ruelles pavées, étroites et sinueuses, abritent des ateliers d'artisans, des galeries d'art et des boutiques de produits provençaux. Au sommet, le Jardin Exotique d'Èze, aménagé dans les ruines du château médiéval, présente une collection exceptionnelle de cactus et de succulentes avec une vue panoramique à 360 degrés considérée comme l'une des plus belles de la Riviera. La parfumerie Fragonard possède une usine-musée à Èze-bord-de-mer, au pied de la falaise. Friedrich Nietzsche composa une partie d'Ainsi parlait Zarathoustra lors d'un séjour à Èze, et le sentier qui relie le bord de mer au village porte son nom. Le village compte aussi deux restaurants étoilés Michelin, dont le Château de la Chèvre d'Or, qui contribuent à la renommée gastronomique d'Èze.",
        itineraire:
          "L'itinéraire le plus direct et le plus spectaculaire emprunte la Moyenne Corniche (D6007) depuis Nice. Prenez la direction de la Corniche André de Joly qui monte en lacets depuis le port de Nice, offrant des vues plongeantes sur la baie des Anges. Après avoir traversé le col de Villefranche, la route serpente à flanc de falaise avec la mer en contrebas. Èze Village se dresse soudain sur votre droite, reconnaissable à son piton rocheux surmonté des ruines du château. Le parking se trouve en contrebas du village (parking de la Corniche). L'alternative par l'autoroute A8 est un peu plus rapide mais moins spectaculaire : sortie 57 La Turbie, puis D2564 vers Èze. Par la Grande Corniche (D2564), la vue depuis le col d'Èze est extraordinaire, plongeant sur Monaco et le cap Ferrat. Le chauffeur vous dépose au parking le plus proche de l'entrée du village piéton.",
        conseils:
          "Le village d'Èze est entièrement piéton et les ruelles sont en pente raide : portez des chaussures confortables. Le Jardin Exotique au sommet coûte 6 € l'entrée et mérite absolument la montée. Arrivez tôt le matin (avant 10h) ou en fin d'après-midi pour éviter la foule, surtout en été et les jours d'escale de paquebots à Villefranche. En été, la chaleur peut être intense dans les ruelles sans ombre : prévoyez de l'eau et un chapeau. Pour une expérience complète, combinez Èze Village avec Èze-bord-de-mer (usine Fragonard) en empruntant le sentier Nietzsche (45 minutes de descente raide). Le chauffeur peut vous récupérer en bas. Les restaurants gastronomiques du village (Château de la Chèvre d'Or, Château Eza) nécessitent une réservation plusieurs semaines à l'avance en haute saison.",
        comparaisonTransport:
          "Le bus 82 (Ligne d'Azur) relie Nice à Èze Village en 30 minutes pour 1,50 €, mais les fréquences sont limitées (toutes les heures environ). Il n'y a pas de gare à Èze Village (la gare d'Èze-bord-de-mer est en contrebas, d'où il faut grimper le sentier Nietzsche pendant 45 minutes). Le taxi est de loin la solution la plus pratique, surtout pour les familles et les personnes ayant des difficultés à marcher, car il vous dépose directement à l'entrée du village.",
        faq: [
          { question: "Quel est le prix d'un taxi Nice — Èze Village ?", answer: "Le forfait est de 25 — 30 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Nice — Èze Village ?", answer: "Environ 20 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Nice → Èze Village | 12 km, from €25 | TaxiNeo",
        metaDescription: "Direct 20 min ride. Moyenne Corniche, Vue panoramique and Jardin exotique along the way. Stops for sightseeing possible en route. Return trip at same rate.",
        heroTitle: "Taxi Nice → Èze Village",
        heroSubtitle: "Your Nice → Èze Village transfer at a fixed price of €25–€30. Online booking, professional driver 24/7.",
        description: "Nice — Èze excursion, a hilltop village with panoramic views of the Mediterranean.",
        routeDescription: "The route takes the Moyenne Corniche, a spectacular cliffside road.",
        introduction:
          "Èze is arguably the most famous and most spectacular perched village on the French Riviera. Clinging to a rocky peak 429 metres above the sea, this fortified medieval village offers dizzying panoramic views over the Mediterranean, from Cap Ferrat to the Italian coast on clear days. Its narrow, winding cobbled alleys house artisan workshops, art galleries and Provençal product shops. At the summit, the Èze Exotic Garden, laid out among the ruins of the medieval castle, features an exceptional collection of cacti and succulents with a 360-degree panoramic view considered one of the finest on the Riviera. The Fragonard perfumery has a factory-museum at Èze-bord-de-mer, at the foot of the cliff. Friedrich Nietzsche composed part of Thus Spoke Zarathustra during a stay in Èze, and the path connecting the seafront to the village bears his name. The village also boasts two Michelin-starred restaurants, including the Château de la Chèvre d'Or, which add to Èze's gastronomic reputation.",
        itineraire:
          "The most direct and spectacular route takes the Middle Corniche (D6007) from Nice. Head towards Corniche André de Joly which climbs in hairpin bends from Nice port, offering sweeping views over the Baie des Anges. After crossing the Col de Villefranche, the road winds along the cliffsides with the sea below. Èze Village suddenly appears on your right, recognisable by its rocky peak topped by castle ruins. Parking is below the village (Parking de la Corniche). The alternative via the A8 motorway is slightly faster but less spectacular: exit 57 La Turbie, then D2564 towards Èze. Via the Grande Corniche (D2564), the view from the Col d'Èze is extraordinary, looking down over Monaco and Cap Ferrat. The driver drops you at the nearest car park to the pedestrian village entrance.",
        conseils:
          "Èze village is entirely pedestrianised and the alleys are steeply sloped: wear comfortable shoes. The Exotic Garden at the top costs €6 entry and is well worth the climb. Arrive early in the morning (before 10am) or late afternoon to avoid crowds, especially in summer and on cruise ship days in Villefranche. In summer, the heat can be intense in the shadeless alleys: bring water and a hat. For the full experience, combine Èze Village with Èze-bord-de-mer (Fragonard factory) by walking down the Nietzsche Path (45 minutes steep descent). The driver can collect you at the bottom. The gourmet restaurants in the village (Château de la Chèvre d'Or, Château Eza) require booking several weeks in advance in high season.",
        comparaisonTransport:
          "Bus 82 (Ligne d'Azur) connects Nice to Èze Village in 30 minutes for €1.50, but frequency is limited (roughly hourly). There is no station at Èze Village (Èze-bord-de-mer station is at the bottom, from where you must climb the Nietzsche Path for 45 minutes). A taxi is by far the most practical option, especially for families and those with mobility difficulties, as it drops you directly at the village entrance.",
        faq: [
          { question: "What is the price of a taxi Nice — Èze Village?", answer: "The flat rate is €25–€30 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Nice — Èze Village journey?", answer: "About 20 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "nice-antibes",
    from: "Nice",
    to: "Antibes",
    fromLat: 43.7102,
    fromLng: 7.262,
    toLat: 43.5808,
    toLng: 7.1253,
    distanceKm: 23,
    durationMin: 25,
    priceEstimate: "45 — 55 €",
    category: "touristique",
    prixMin: 45,
    prixMax: 55,
    prixVan: 75,
    dureeMax: 45,
    autoroute: "A8 (La Provençale)",
    peages: "~2 € (section Nice–Antibes)",
    departSlug: "nice",
    arriveeSlug: "antibes",
    liensInternes: ["/trajet/nice-cannes", "/trajet/nice-sophia-antipolis", "/trajet/nice-cagnes-sur-mer"],
    tags: ["antibes", "cap d'antibes", "picasso", "côte d'azur", "juan-les-pins"],
    hub: "nice",
    highlights: ["Bord de mer", "Cap d'Antibes", "Musée Picasso"],
    i18n: {
      fr: {
        metaTitle: "Taxi Nice → Antibes | forfait dès 45 €, 25 min | TaxiNeo",
        metaDescription: "Trajet direct en 25 min. Bord de mer, Cap d'Antibes et Musée Picasso en chemin. Arrêt visite possible en chemin. Arrêt possible pour visites ou photos.",
        heroTitle: "Taxi Nice → Antibes",
        heroSubtitle: "Votre transfert Nice → Antibes au prix fixe de 45 — 55 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Nice — Antibes pour découvrir le Cap d'Antibes et le vieil Antibes.",
        routeDescription: "Le trajet longe la côte en passant par l'aéroport et Cagnes-sur-Mer.",
        introduction:
          "Antibes est l'une des perles de la Côte d'Azur, alliant patrimoine historique et art de vivre méditerranéen. Sa vieille ville fortifiée par Vauban abrite des ruelles pittoresques, le célèbre marché provençal couvert et le musée Picasso installé dans le château Grimaldi, où le maître espagnol travailla en 1946. Le port Vauban, plus grand port de plaisance d'Europe, accueille les plus beaux yachts du monde. Le Cap d'Antibes, presqu'île sauvage et luxueuse, offre des sentiers côtiers avec des vues extraordinaires sur les Alpes enneigées et les îles de Lérins. Juan-les-Pins, station balnéaire jumelle d'Antibes, est réputée pour son festival de jazz international chaque été et ses plages de sable fin bordées de pins parasols. Le trajet depuis Nice est court et agréable, longeant la baie des Anges avant de rejoindre la ville fortifiée. Antibes est aussi la porte d'entrée de Sophia Antipolis, première technopole d'Europe, ce qui en fait une destination prisée des voyageurs d'affaires.",
        itineraire:
          "Le trajet le plus rapide emprunte l'autoroute A8 direction Cannes/Aix-en-Provence. Depuis Nice, vous passez le péage de Saint-Isidore puis longez la vallée du Var en surplomb. Prenez la sortie 44 Antibes/Juan-les-Pins et descendez vers le centre-ville par le boulevard du Général Vautrin. En alternative, la route du bord de mer (D6098 puis D6007) traverse Cagnes-sur-Mer et Villeneuve-Loubet, longeant la plage de galets puis les marinas avant d'arriver à Antibes par le port Vauban. Cet itinéraire est plus long (40 minutes) mais offre une vue continue sur la mer. Si votre destination est le Cap d'Antibes, le chauffeur empruntera le boulevard Francis Meilland qui contourne la presqu'île. Pour Sophia Antipolis, la sortie 44 de l'A8 donne un accès direct à la technopole par la D35.",
        conseils:
          "En été, le boulevard du bord de mer entre Nice et Antibes est très encombré : privilégiez l'A8 pour un trajet rapide. Le marché provençal d'Antibes (cours Masséna) a lieu tous les matins sauf le lundi : demandez au chauffeur de vous déposer à proximité pour en profiter. Si vous visitez le Cap d'Antibes, prévoyez des chaussures confortables pour le sentier du littoral (sentier de Tire-Poil), l'un des plus beaux de la Côte d'Azur. Pour le festival Jazz à Juan (juillet), réservez votre taxi à l'avance car la demande est forte. Le stationnement en vieille ville d'Antibes est quasi impossible en haute saison : le taxi vous évite ce casse-tête. Pensez à combiner Antibes avec une visite de Juan-les-Pins ou de Sophia Antipolis dans la même course.",
        comparaisonTransport:
          "Le TER Nice–Antibes coûte environ 5,20 € et met 25 minutes, mais la gare d'Antibes est à 10 minutes à pied de la vieille ville. Le bus Zou! (ligne 200) met environ 50 minutes pour 1,50 €. En voiture de location, comptez le péage (2 €), l'essence et surtout le stationnement très difficile en centre-ville. Le taxi vous dépose exactement à votre destination — vieille ville, Cap d'Antibes ou Juan-les-Pins — en 25 minutes, bagages inclus, sans souci de parking.",
        faq: [
          { question: "Quel est le prix d'un taxi Nice — Antibes ?", answer: "Le forfait est de 45 — 55 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Nice — Antibes ?", answer: "Environ 25 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Nice → Antibes | Fixed price from €45 | TaxiNeo",
        metaDescription: "Direct 25 min ride. Bord de mer, Cap d'Antibes and Musée Picasso along the way. Stops for sightseeing possible en route. Perfect for a day trip without driving.",
        heroTitle: "Taxi Nice → Antibes",
        heroSubtitle: "Your Nice → Antibes transfer at a fixed price of €45–€55. Online booking, professional driver 24/7.",
        description: "Nice — Antibes transfer to discover Cap d'Antibes and the old town.",
        routeDescription: "The route follows the coast passing the airport and Cagnes-sur-Mer.",
        introduction:
          "Antibes is one of the gems of the French Riviera, combining historical heritage with a Mediterranean way of life. Its old town, fortified by Vauban, features picturesque alleyways, the famous covered Provençal market and the Picasso Museum housed in the Château Grimaldi, where the Spanish master worked in 1946. Port Vauban, the largest marina in Europe, welcomes the world's finest yachts. Cap d'Antibes, a wild yet luxurious peninsula, offers coastal paths with extraordinary views of the snow-capped Alps and the Lérins Islands. Juan-les-Pins, the twin seaside resort of Antibes, is renowned for its international jazz festival every summer and its sandy beaches lined with umbrella pines. The journey from Nice is short and pleasant, following the Baie des Anges before reaching the fortified town. Antibes is also the gateway to Sophia Antipolis, Europe's leading technology park, making it a popular destination for business travellers.",
        itineraire:
          "The fastest route takes the A8 motorway towards Cannes/Aix-en-Provence. From Nice, you pass the Saint-Isidore toll then follow the Var valley from above. Take exit 44 Antibes/Juan-les-Pins and descend to the town centre via Boulevard du Général Vautrin. Alternatively, the coastal road (D6098 then D6007) passes through Cagnes-sur-Mer and Villeneuve-Loubet, following the pebble beach then the marinas before arriving in Antibes via Port Vauban. This route is longer (40 minutes) but offers continuous sea views. If your destination is Cap d'Antibes, the driver will take Boulevard Francis Meilland around the peninsula. For Sophia Antipolis, exit 44 on the A8 gives direct access to the technology park via the D35.",
        conseils:
          "In summer, the coastal boulevard between Nice and Antibes is very congested: prefer the A8 for a quick journey. The Provençal market in Antibes (Cours Masséna) takes place every morning except Monday: ask the driver to drop you nearby to enjoy it. If visiting Cap d'Antibes, bring comfortable shoes for the coastal path (Sentier de Tire-Poil), one of the finest on the Riviera. For Jazz à Juan festival (July), book your taxi in advance as demand is high. Parking in the old town is virtually impossible in high season: a taxi saves you the hassle. Consider combining Antibes with a visit to Juan-les-Pins or Sophia Antipolis in the same trip.",
        comparaisonTransport:
          "The TER train from Nice to Antibes costs about €5.20 and takes 25 minutes, but the station is a 10-minute walk from the old town. The Zou! bus (line 200) takes about 50 minutes for €1.50. With a rental car, factor in tolls (€2), fuel and the very difficult parking in the town centre. A taxi drops you exactly at your destination — old town, Cap d'Antibes or Juan-les-Pins — in 25 minutes, luggage included, with no parking worries.",
        faq: [
          { question: "What is the price of a taxi Nice — Antibes?", answer: "The flat rate is €45–€55 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Nice — Antibes journey?", answer: "About 25 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "marseille-cassis",
    from: "Marseille",
    to: "Cassis",
    fromLat: 43.2965,
    fromLng: 5.3698,
    toLat: 43.2145,
    toLng: 5.5368,
    distanceKm: 23,
    durationMin: 25,
    priceEstimate: "45 — 55 €",
    category: "touristique",
    prixMin: 45,
    prixMax: 55,
    prixVan: 75,
    dureeMax: 45,
    autoroute: "A50 ou D559 (route côtière)",
    peages: "Aucun péage",
    departSlug: "marseille",
    arriveeSlug: "cassis",
    liensInternes: ["marseille-la-ciotat", "marseille-aubagne", "marseille-bandol"],
    tags: ["touristique", "calanques", "port", "falaises", "vin-blanc", "balnéaire"],
    hub: "marseille",
    highlights: ["Route des Calanques", "Cap Canaille"],
    i18n: {
      fr: {
        metaTitle: "Taxi Marseille → Cassis | 23 km, dès 45 € | TaxiNeo",
        metaDescription: "Trajet direct en 25 min. Route des Calanques et Cap Canaille en chemin. Arrêt possible pour photos et visites en chemin.",
        heroTitle: "Taxi Marseille → Cassis",
        heroSubtitle: "Votre transfert Marseille → Cassis au prix fixe de 45 — 55 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Excursion Marseille — Cassis pour les calanques et le Cap Canaille.",
        routeDescription: "Le trajet emprunte la route des Calanques avec vue sur la Méditerranée.",
        introduction:
          "Cassis, petit port de pêche blotti entre les falaises du Cap Canaille — les plus hautes de France avec 394 mètres de parois vertigineuses plongeant dans la Méditerranée — et le parc national des Calanques, est l'une des destinations les plus prisées de la côte provençale. Ce village de 7 500 habitants séduit par son port miniature bordé de restaurants aux terrasses colorées, ses ruelles provençales parfumées de jasmin et de bougainvilliers, et surtout l'accès aux calanques de Port-Miou, Port-Pin et En-Vau, considérées parmi les plus belles criques de Méditerranée. Cassis est aussi réputée pour son vignoble, l'un des plus anciens de France, qui produit un vin blanc sec et minéral idéal avec la bouillabaisse et les oursins. Depuis Marseille, le taxi est le moyen le plus pratique pour rejoindre Cassis, surtout en été quand la route d'accès est saturée et le stationnement quasi impossible. Les bateaux-mouches partent du port pour des excursions dans les calanques, mais l'arrivée en taxi vous épargne la longue descente sinueuse depuis la D559. Frédéric Mistral disait : « Qui a vu Paris et n'a pas vu Cassis n'a rien vu. »",
        itineraire:
          "Deux itinéraires s'offrent à vous depuis Marseille. Le plus rapide emprunte l'A50 en direction de Toulon : après Aubagne, la sortie Cassis mène à la D559 puis à la descente sinueuse vers le village (5 km de lacets). Le plus spectaculaire passe par la corniche du Président-Kennedy, longe les calanques de Marseille (Callelongue, Marseilleveyre) puis monte sur la route des Crêtes (D141) entre La Ciotat et Cassis : de là, la vue sur le Cap Canaille, la baie de Cassis et les îles du Frioul est à couper le souffle. Ce second itinéraire est plus long (45 min) mais constitue en lui-même une excursion touristique. Votre chauffeur peut vous déposer directement sur le port (dépose-minute), au parking des Gorguettes en haut du village, ou à votre hébergement. En été, l'accès au village est réglementé de 9h à 19h : seuls les résidents et véhicules autorisés (dont les taxis) peuvent descendre, ce qui rend le taxi encore plus pertinent.",
        conseils:
          "En été (juillet-août), l'accès à Cassis en voiture personnelle est interdit de 9h à 19h : la navette depuis le parking des Gorguettes est alors obligatoire. En taxi, vous bénéficiez d'un accès direct au village — c'est l'un des grands avantages du transport en taxi. Pour les calanques, les bateaux partent du port toutes les 30 minutes en haute saison (3, 5 ou 8 calanques, durée 45 min à 2h). La randonnée vers la calanque d'En-Vau (2h aller depuis le parking de la Gardiole) est magnifique mais sportive — prévoyez de l'eau et des chaussures adaptées. Le vignoble de Cassis mérite une dégustation : le Clos Sainte-Magdeleine, situé sous le Cap Canaille, offre une vue extraordinaire. Pour le déjeuner, les restaurants du port sont touristiques ; préférez les ruelles du centre (Chez Gilbert pour la bouillabaisse, La Villa Madie pour la gastronomie étoilée). Le Cap Canaille se visite en voiture via la route des Crêtes — demandez à votre chauffeur, c'est un détour de 15 minutes spectaculaire.",
        comparaisonTransport:
          "Le bus Zou! M08 depuis Castellane (Marseille) coûte 2 € et met environ 45 minutes, mais dessert Cassis village en haut, à 15 minutes à pied du port. En voiture personnelle, comptez 5 € d'essence, pas de péage, mais le parking est à 6 €/jour aux Gorguettes et l'accès est interdit en été. Le train ne dessert pas Cassis directement (gare la plus proche : La Ciotat, à 12 km). Le taxi TaxiNeo à 45 — 55 € vous dépose au port et vous récupère quand vous voulez. Pour 3-4 passagers (11 à 18 €/personne), c'est imbattable face au bus + marche, et surtout c'est le seul moyen d'accéder au village en été sans navette.",
        faq: [
          { question: "Quel est le prix d'un taxi Marseille — Cassis ?", answer: "Le forfait est de 45 — 55 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Marseille — Cassis ?", answer: "Environ 25 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Marseille → Cassis | 23 km, from €45 | TaxiNeo",
        metaDescription: "Direct 25 min ride. Route des Calanques and Cap Canaille along the way. Stops for sightseeing possible en route. Perfect for a day trip without driving.",
        heroTitle: "Taxi Marseille → Cassis",
        heroSubtitle: "Your Marseille → Cassis transfer at a fixed price of €45–€55. Online booking, professional driver 24/7.",
        description: "Marseille — Cassis excursion for the calanques and Cap Canaille.",
        routeDescription: "The route takes the Calanques road with Mediterranean views.",
        introduction:
          "Cassis, a small fishing port sheltered between the cliffs of Cap Canaille — France's highest sea cliffs at 394 metres of vertiginous walls plunging into the Mediterranean — and the Calanques National Park, is one of the most sought-after destinations on the Provencal coast. This village of 7,500 inhabitants charms visitors with its miniature harbour lined with colourful restaurant terraces, its Provencal lanes scented with jasmine and bougainvillea, and above all access to the calanques of Port-Miou, Port-Pin and En-Vau, considered among the Mediterranean's most beautiful coves. Cassis is also renowned for its vineyard, one of France's oldest, producing a dry, mineral white wine ideal with bouillabaisse and sea urchins. From Marseille, a taxi is the most practical way to reach Cassis, especially in summer when the access road is congested and parking virtually impossible. Excursion boats depart from the port for calanques trips, but arriving by taxi spares you the long winding descent from the D559. As Frederic Mistral said: 'He who has seen Paris but not Cassis has seen nothing.'",
        itineraire:
          "Two routes are available from Marseille. The fastest takes the A50 towards Toulon: after Aubagne, the Cassis exit leads to the D559 then the winding descent to the village (5 km of hairpin bends). The most spectacular follows the Corniche du President-Kennedy, skirts Marseille's calanques (Callelongue, Marseilleveyre) then climbs the Route des Cretes (D141) between La Ciotat and Cassis: from there, the view over Cap Canaille, Cassis bay and the Frioul islands is breathtaking. This second route is longer (45 min) but is a tourist excursion in itself. Your driver can drop you directly at the port (brief stop), at the Gorguettes car park at the top of the village, or at your accommodation. In summer, village access is restricted from 9am to 7pm: only residents and authorised vehicles (including taxis) may drive down, making a taxi even more relevant.",
        conseils:
          "In summer (July-August), private car access to Cassis is banned from 9am to 7pm: the shuttle from the Gorguettes car park is then mandatory. By taxi, you get direct village access — one of the great advantages of taxi transport. For the calanques, boats leave the port every 30 minutes in high season (3, 5 or 8 calanques, duration 45 min to 2h). The hike to En-Vau calanque (2h one way from Gardiole car park) is stunning but challenging — bring water and proper shoes. The Cassis vineyard deserves a tasting: Clos Sainte-Magdeleine, set beneath Cap Canaille, offers extraordinary views. For lunch, port-side restaurants are touristy; try the centre's lanes instead (Chez Gilbert for bouillabaisse, La Villa Madie for Michelin-starred cuisine). Cap Canaille can be visited by car via the Route des Cretes — ask your driver, it is a spectacular 15-minute detour.",
        comparaisonTransport:
          "The Zou! M08 bus from Castellane (Marseille) costs 2 euros and takes about 45 minutes, but serves Cassis village at the top, 15 minutes' walk from the port. By car, expect 5 euros in fuel, no tolls, but parking is 6 euros per day at Gorguettes and access is banned in summer. The train does not serve Cassis directly (nearest station: La Ciotat, 12 km away). The TaxiNeo taxi at 45 to 55 euros drops you at the port and picks you up whenever you wish. For 3-4 passengers (11 to 18 euros per person), it is unbeatable compared to bus plus walking, and crucially it is the only way to access the village in summer without the shuttle.",
        faq: [
          { question: "What is the price of a taxi Marseille — Cassis?", answer: "The flat rate is €45–€55 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Marseille — Cassis journey?", answer: "About 25 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "marseille-aix-en-provence",
    from: "Marseille",
    to: "Aix-en-Provence",
    fromLat: 43.2965,
    fromLng: 5.3698,
    toLat: 43.5297,
    toLng: 5.4474,
    distanceKm: 30,
    durationMin: 30,
    priceEstimate: "60 — 70 €",
    category: "touristique",
    highlights: ["A51", "Pays d'Aix", "Cours Mirabeau"],
    i18n: {
      fr: {
        metaTitle: "Taxi Marseille → Aix-en-Provence | 30 km, dès 60 € | TaxiNeo",
        metaDescription: "Via A51 en 30 min. Pays d'Aix et Cours Mirabeau sur le parcours. Arrêt possible pour photos et visites en chemin.",
        heroTitle: "Taxi Marseille → Aix-en-Provence",
        heroSubtitle: "Votre transfert Marseille → Aix-en-Provence au prix fixe de 60 — 70 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Marseille — Aix-en-Provence, ville d'art et cité de Cézanne.",
        routeDescription: "Le trajet emprunte l'A51 à travers le pays d'Aix.",
        faq: [
          { question: "Quel est le prix d'un taxi Marseille — Aix-en-Provence ?", answer: "Le forfait est de 60 — 70 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Marseille — Aix-en-Provence ?", answer: "Environ 30 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Marseille → Aix-en-Provence | 30 km, from €60 | TaxiNeo",
        metaDescription: "Direct route via A51, 30 min. Pays d'Aix and Cours Mirabeau along the way. Stops for sightseeing possible en route. Perfect for a day trip without driving.",
        heroTitle: "Taxi Marseille → Aix-en-Provence",
        heroSubtitle: "Your Marseille → Aix-en-Provence transfer at a fixed price of €60–€70. Online booking, professional driver 24/7.",
        description: "Marseille — Aix-en-Provence transfer, city of art and home of Cézanne.",
        routeDescription: "The route takes the A51 through the Aix countryside.",
        faq: [
          { question: "What is the price of a taxi Marseille — Aix-en-Provence?", answer: "The flat rate is €60–€70 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Marseille — Aix-en-Provence journey?", answer: "About 30 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "lyon-perouges",
    from: "Lyon",
    to: "Pérouges",
    fromLat: 45.764,
    fromLng: 4.8357,
    toLat: 45.9037,
    toLng: 5.1786,
    distanceKm: 35,
    durationMin: 35,
    priceEstimate: "70 — 85 €",
    category: "touristique",
    highlights: ["A42", "Cité médiévale de Pérouges"],
    i18n: {
      fr: {
        metaTitle: "Taxi Lyon → Pérouges | forfait dès 70 €, 35 min | TaxiNeo",
        metaDescription: "Via A42 en 35 min. Vue sur Cité médiévale de Pérouges en chemin. Arrêt possible pour photos et visites en chemin.",
        heroTitle: "Taxi Lyon → Pérouges",
        heroSubtitle: "Votre transfert Lyon → Pérouges au prix fixe de 70 — 85 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Excursion Lyon — Pérouges, cité médiévale parmi les plus beaux villages de France.",
        routeDescription: "Le trajet emprunte l'A42 direction Genève puis sortie Pérouges.",
        faq: [
          { question: "Quel est le prix d'un taxi Lyon — Pérouges ?", answer: "Le forfait est de 70 — 85 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Lyon — Pérouges ?", answer: "Environ 35 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Lyon → Pérouges | Fixed price from €70 | TaxiNeo",
        metaDescription: "Direct route via A42, 35 min. Cité médiévale de Pérouges along the way. Stops for sightseeing possible en route. Perfect for a day trip without driving.",
        heroTitle: "Taxi Lyon → Pérouges",
        heroSubtitle: "Your Lyon → Pérouges transfer at a fixed price of €70–€85. Online booking, professional driver 24/7.",
        description: "Lyon — Pérouges excursion, a medieval city among France's most beautiful villages.",
        routeDescription: "The route takes the A42 towards Geneva then the Pérouges exit.",
        faq: [
          { question: "What is the price of a taxi Lyon — Pérouges?", answer: "The flat rate is €70–€85 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Lyon — Pérouges journey?", answer: "About 35 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "bordeaux-saint-emilion",
    from: "Bordeaux",
    to: "Saint-Émilion",
    fromLat: 44.8378,
    fromLng: -0.5792,
    toLat: 44.8944,
    toLng: -0.1546,
    distanceKm: 45,
    durationMin: 40,
    priceEstimate: "90 — 105 €",
    category: "touristique",
    prixMin: 90,
    prixMax: 105,
    prixVan: 140,
    dureeMax: 55,
    autoroute: "A89 puis D243",
    peages: "~3 € de péages",
    departSlug: "bordeaux",
    arriveeSlug: "saint-emilion",
    liensInternes: ["bordeaux-pauillac", "bordeaux-bergerac", "bordeaux-libourne"],
    tags: ["touristique", "vin", "unesco", "medieval", "gastronomie"],
    hub: "bordeaux",
    highlights: ["D936", "Vignobles de Saint-Émilion"],
    i18n: {
      fr: {
        metaTitle: "Taxi Bordeaux → Saint-Émilion | 40 km, dès 80 € | TaxiNeo",
        metaDescription: "Via D936 en 40 min. Vue sur Vignobles de Saint-Émilion en chemin. Arrêt possible pour photos et visites en chemin.",
        heroTitle: "Taxi Bordeaux → Saint-Émilion",
        heroSubtitle: "Votre transfert Bordeaux → Saint-Émilion au prix fixe de 90 — 105 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Excursion Bordeaux — Saint-Émilion au cœur des vignobles classés UNESCO.",
        routeDescription: "Le trajet emprunte la D936 à travers les vignobles bordelais.",
        introduction:
          "Saint-Émilion est le joyau absolu du vignoble bordelais et l'un des sites les plus visités de Nouvelle-Aquitaine. Classé au patrimoine mondial de l'UNESCO depuis 1999 (premier vignoble inscrit au monde au titre du « paysage culturel »), ce village médiéval perché sur un promontoire calcaire surplombe un océan de vignes qui s'étend à perte de vue. Le monument le plus extraordinaire est l'église monolithe, la plus grande d'Europe : creusée entièrement dans la roche au XIe siècle, cette église souterraine de 38 mètres de long et 20 mètres de haut est soutenue par d'immenses piliers taillés dans le calcaire. La visite guidée (obligatoire) descend dans les catacombes, la chapelle de la Trinité et cette nef souterraine saisissante. Au-dessus, la place du Marché avec sa terrasse panoramique est le cœur battant du village. Les ruelles pavées, les remparts, la tour du Roy (seul donjon rond de Gironde), les couvents et les cloîtres composent un ensemble médiéval d'une cohérence rare. Côté vin, Saint-Émilion possède son propre classement (distinct du classement de 1855 du Médoc), révisé tous les dix ans : Château Cheval Blanc et Château Ausone trônaient au sommet comme « Premiers Grands Crus Classés A ». L'appellation compte plus de 800 propriétés viticoles, des plus prestigieuses aux plus accessibles, offrant une expérience œnologique pour tous les budgets.",
        itineraire:
          "Depuis Bordeaux, votre chauffeur emprunte la rocade nord-est puis l'autoroute A89 en direction de Périgueux/Lyon. Après le péage (~3 €), on sort à Libourne après 25 minutes. La traversée de Libourne, bastide médiévale au confluent de la Dordogne et de l'Isle, est rapide. On prend ensuite la D243 qui monte vers Saint-Émilion à travers un paysage de vignes vallonnées absolument splendide. Les châteaux et propriétés viticoles se succèdent de part et d'autre de la route : on aperçoit les vignes de Figeac, de Cheval Blanc, de Canon, de Beau-Séjour Bécot. L'arrivée à Saint-Émilion se fait par la porte Brunet ou la porte de la Cadène, et votre chauffeur vous dépose au plus près du centre (la circulation automobile est restreinte dans le village). Comptez 40 minutes en conditions normales. Le trajet est court mais visuellement somptueux, surtout en automne quand les vignes se parent de rouge et d'or.",
        conseils:
          "La visite de l'église monolithe et des monuments souterrains est le must absolu : réservez la visite guidée à l'Office de Tourisme (12 €, 45 min, départs réguliers). Le village se visite à pied en 2-3 heures (ruelles pavées et pentues : chaussures confortables obligatoires). La Maison du Vin de Saint-Émilion (place Pierre Meyrat) propose des dégustations guidées à partir de 8 €, idéal pour découvrir l'appellation. Pour les grands crus classés, les visites sont sur réservation : Château Canon (vue panoramique exceptionnelle), Château Troplong Mondot (restaurant étoilé), Château de Pressac (accessible et chaleureux). Le marché de Saint-Émilion (dimanche matin, place du Marché) est charmant mais petit. Les macarons de Saint-Émilion (Nadia Fermigier ou Blanchez) sont la spécialité locale : petits gâteaux moelleux aux amandes, recette des Ursulines du XVIIe siècle. La formule mise à disposition (demi-journée ~200 €) est idéale pour combiner Saint-Émilion avec 2-3 châteaux alentour.",
        comparaisonTransport:
          "Le TER Bordeaux–Saint-Émilion (gare de Saint-Émilion) coûte 8-10 € et met 35 min (direct, 4-5 trains/jour). C'est une bonne option mais la gare est à 2 km du village (20 min à pied en montée). Le taxi TaxiNeo à 90 — 105 € offre le porte-à-porte : dépose directement aux portes du village, indispensable pour les personnes à mobilité réduite, les familles et ceux qui veulent enchaîner avec des visites de châteaux. À 3-4 passagers (23-35 €/pers.), c'est compétitif avec le train + taxi local. La mise à disposition demi-journée (~200 €) est la formule reine pour explorer Saint-Émilion et ses châteaux sans contrainte.",
        faq: [
          { question: "Quel est le prix d'un taxi Bordeaux — Saint-Émilion ?", answer: "Le forfait est de 90 — 105 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Bordeaux — Saint-Émilion ?", answer: "Environ 40 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Bordeaux → Saint-Émilion | 40 km, from €80 | TaxiNeo",
        metaDescription: "Direct route via D936, 40 min. Vignobles de Saint-Émilion along the way. Stops for sightseeing possible en route. Perfect for a day trip without driving.",
        heroTitle: "Taxi Bordeaux → Saint-Émilion",
        heroSubtitle: "Your Bordeaux → Saint-Émilion transfer at a fixed price of €90–€105. Online booking, professional driver 24/7.",
        description: "Bordeaux — Saint-Émilion excursion at the heart of UNESCO-listed vineyards.",
        routeDescription: "The route takes the D936 through the Bordeaux vineyards.",
        introduction:
          "Saint-Émilion is the absolute jewel of the Bordeaux vineyard and one of the most visited sites in Nouvelle-Aquitaine. Listed as a UNESCO World Heritage Site since 1999 (the first vineyard in the world inscribed as a 'cultural landscape'), this medieval village perched on a limestone promontory overlooks an ocean of vines stretching as far as the eye can see. The most extraordinary monument is the monolithic church, the largest in Europe: carved entirely from rock in the 11th century, this underground church measuring 38 metres long and 20 metres high is supported by immense pillars cut from limestone. The guided tour (compulsory) descends into the catacombs, the Trinity chapel and this striking underground nave. Above, the Place du Marché with its panoramic terrace is the beating heart of the village. The cobbled lanes, ramparts, Tour du Roy (the only round keep in the Gironde), convents and cloisters form a medieval ensemble of rare coherence. On the wine front, Saint-Émilion has its own classification (distinct from the 1855 Médoc classification), revised every ten years: Château Cheval Blanc and Château Ausone sat at the top as 'Premiers Grands Crus Classés A'. The appellation has over 800 wine properties, from the most prestigious to the most accessible, offering an oenological experience for every budget.",
        itineraire:
          "From Bordeaux, your driver takes the north-east ring road then the A89 motorway towards Périgueux/Lyon. After the toll (~€3), you exit at Libourne after 25 minutes. The crossing of Libourne, a medieval bastide at the confluence of the Dordogne and Isle rivers, is quick. You then take the D243 which climbs towards Saint-Émilion through absolutely splendid rolling vineyard landscape. Châteaux and wine estates line both sides of the road: you glimpse the vineyards of Figeac, Cheval Blanc, Canon, Beau-Séjour Bécot. Arrival at Saint-Émilion is through the Porte Brunet or Porte de la Cadène, and your driver drops you as close to the centre as possible (car traffic is restricted in the village). Allow 40 minutes in normal conditions. The journey is short but visually sumptuous, especially in autumn when the vines turn red and gold.",
        conseils:
          "The monolithic church and underground monuments visit is the absolute must: book the guided tour at the Tourist Office (€12, 45 min, regular departures). The village takes 2-3 hours on foot (cobbled and steep lanes: comfortable shoes essential). The Maison du Vin de Saint-Émilion (Place Pierre Meyrat) offers guided tastings from €8, ideal for discovering the appellation. For classified great growths, visits are by reservation: Château Canon (exceptional panoramic view), Château Troplong Mondot (Michelin-starred restaurant), Château de Pressac (accessible and welcoming). The Saint-Émilion market (Sunday morning, Place du Marché) is charming but small. Saint-Émilion macarons (Nadia Fermigier or Blanchez) are the local speciality: small, soft almond cakes from a 17th-century Ursuline recipe. The hourly hire formula (half day ~€200) is ideal for combining Saint-Émilion with 2-3 surrounding châteaux.",
        comparaisonTransport:
          "The TER Bordeaux–Saint-Émilion (Saint-Émilion station) costs €8-10 and takes 35 min (direct, 4-5 trains/day). It is a good option but the station is 2 km from the village (20 min uphill walk). The TaxiNeo taxi at €90–€105 offers door-to-door: drops you directly at the village gates, essential for those with reduced mobility, families and those wanting to continue with château visits. For 3-4 passengers (€16-30 per person), it competes with train + local taxi. The half-day hire (~€200) is the best formula for exploring Saint-Émilion and its châteaux without constraints.",
        faq: [
          { question: "What is the price of a taxi Bordeaux — Saint-Émilion?", answer: "The flat rate is €90–€105 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Bordeaux — Saint-Émilion journey?", answer: "About 40 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "bordeaux-arcachon",
    from: "Bordeaux",
    to: "Bassin d'Arcachon",
    fromLat: 44.8378,
    fromLng: -0.5792,
    toLat: 44.6614,
    toLng: -1.1681,
    distanceKm: 65,
    durationMin: 50,
    priceEstimate: "125 — 155 €",
    category: "touristique",
    prixMin: 125,
    prixMax: 155,
    prixVan: 200,
    dureeMax: 70,
    autoroute: "A63 puis A660",
    peages: "~4 € de péages",
    departSlug: "bordeaux",
    arriveeSlug: "arcachon",
    liensInternes: ["bordeaux-mimizan", "bordeaux-medoc", "bordeaux-dax"],
    tags: ["touristique", "plage", "huitres", "dune-du-pilat", "bassin-arcachon"],
    hub: "bordeaux",
    highlights: ["A63", "Dune du Pilat", "Île aux Oiseaux"],
    i18n: {
      fr: {
        metaTitle: "Taxi Bordeaux → Bassin d'Arcachon | 65 km, 75 € | TaxiNeo",
        metaDescription: "Via A63 en 50 min. Dune du Pilat et Île aux Oiseaux en chemin. Arrêt possible pour photos et visites en chemin.",
        heroTitle: "Taxi Bordeaux → Bassin d'Arcachon",
        heroSubtitle: "Votre transfert Bordeaux → Bassin d'Arcachon au prix fixe de 125 — 155 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Excursion Bordeaux — Arcachon pour la Dune du Pilat et les huîtres du Bassin.",
        routeDescription: "Le trajet emprunte l'A63 direction Bayonne puis sortie Arcachon.",
        introduction:
          "Arcachon est la station balnéaire la plus célèbre de la côte atlantique sud et la destination de week-end préférée des Bordelais. Le bassin d'Arcachon, vaste lagune de 155 km² ouverte sur l'océan par les passes du bassin, est un écosystème unique en Europe : parcs à huîtres, banc d'Arguin (réserve naturelle), île aux Oiseaux et ses tchanquées (cabanes sur pilotis), forêt de pins littoraux. La Dune du Pilat, plus haute dune d'Europe (106 m), offre un panorama stupéfiant sur l'océan, le bassin et la forêt — c'est l'un des sites naturels les plus visités de France (plus de 2 millions de visiteurs par an). La ville d'Arcachon elle-même se divise en quatre quartiers correspondant aux quatre saisons : la Ville d'Été (front de mer, casino, plage), la Ville d'Hiver (quartier résidentiel huppé du XIXe siècle avec ses villas fantaisistes néo-mauresques, néo-gothiques et coloniales), la Ville d'Automne (port de pêche, halles aux poissons) et la Ville de Printemps (parc Pereire). Les cabanes ostréicoles du port de Gujan-Mestras et de l'Herbe (presqu'île du Cap-Ferret) sont des adresses mythiques pour déguster huîtres et fruits de mer les pieds dans l'eau. Le bassin est aussi un paradis pour le voile, le kayak, le kitesurf et le stand-up paddle.",
        itineraire:
          "Depuis Bordeaux, votre chauffeur emprunte la rocade sud puis l'A63 direction Bayonne. À Cestas, on prend la sortie A660 direction Arcachon. Cette autoroute traverse la forêt de pins des Landes de Gascogne en ligne droite sur 30 km — un corridor vert apaisant. Passé La Teste-de-Buch, on arrive dans Arcachon. Le chauffeur peut vous déposer au centre-ville (front de mer, casino), à la gare, dans la Ville d'Hiver (villas) ou directement à la Dune du Pilat (5 km au sud d'Arcachon). Les péages sont modestes (~4 €). Le trajet de 50 minutes est l'un des plus agréables au départ de Bordeaux. Attention : les samedis de juillet-août, l'A660 peut être saturée entre Cestas et La Teste (prévoir 15-20 min de plus). Le retour le dimanche soir est également chargé.",
        conseils:
          "La Dune du Pilat est incontournable : montez au sommet (20 min, escalier saisonnier ou sable) pour un panorama à 360° unique. Idéal au coucher du soleil. En été, arrivez tôt (avant 10h) ou tard (après 17h) pour éviter la foule. Les cabanes ostréicoles sont l'expérience authentique du bassin : dégustez des huîtres fraîches avec du vin blanc et des crépinettes (saucisses) face au bassin. Les meilleures adresses : Chez Boulan (l'Herbe, Cap-Ferret), les cabanes du port de Larros (Gujan-Mestras). La Ville d'Hiver mérite une promenade d'1h : circuit des villas (plan à l'Office de Tourisme), architecture fantaisiste du XIXe siècle. Le tour du bassin en taxi (mise à disposition demi-journée ~250 €) permet de voir Arcachon, la Dune du Pilat, Gujan-Mestras, le Cap-Ferret et ses villages ostréicoles. La traversée du bassin en bateau (Arcachon–Cap Ferret, 25 min, UBA) est une excursion délicieuse.",
        comparaisonTransport:
          "Le TER Bordeaux–Arcachon est fréquent et rapide (50 min, 10-15 €, 15+ trains/jour). C'est une excellente liaison. Le taxi TaxiNeo à 125 — 155 € se justifie pour les familles (matériel de plage, poussettes), les groupes (3-4 passagers : 20-37 €/pers.), ceux qui veulent accéder directement à la Dune du Pilat (pas de gare à proximité) ou combiner plusieurs sites du bassin. Le porte-à-porte est précieux avec du matériel encombrant. En voiture, comptez 8 € d'essence et 4 € de péages, mais le stationnement à Arcachon est difficile et cher en été (2-3 €/h).",
        faq: [
          { question: "Quel est le prix d'un taxi Bordeaux — Bassin d'Arcachon ?", answer: "Le forfait est de 125 — 155 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Bordeaux — Bassin d'Arcachon ?", answer: "Environ 50 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Bordeaux → Bassin d'Arcachon | 65 km, €75 | TaxiNeo",
        metaDescription: "Via A63, 50 min ride. Dune du Pilat and Île aux Oiseaux along the way. Stops for sightseeing possible en route. Perfect for a day trip without driving.",
        heroTitle: "Taxi Bordeaux → Bassin d'Arcachon",
        heroSubtitle: "Your Bordeaux → Bassin d'Arcachon transfer at a fixed price of €125–€155. Online booking, professional driver 24/7.",
        description: "Bordeaux — Arcachon excursion for the Dune du Pilat and the Basin's oysters.",
        routeDescription: "The route takes the A63 towards Bayonne then the Arcachon exit.",
        introduction:
          "Arcachon is the most famous seaside resort on the southern Atlantic coast and Bordelais' favourite weekend destination. The Arcachon basin, a vast 155 km² lagoon open to the ocean through the basin passes, is a unique European ecosystem: oyster parks, Banc d'Arguin (nature reserve), Bird Island with its tchanquées (cabins on stilts), coastal pine forest. The Dune du Pilat, Europe's tallest dune (106 m), offers a stunning panorama over the ocean, basin and forest — it is one of France's most visited natural sites (over 2 million visitors annually). The town of Arcachon itself is divided into four quarters corresponding to the four seasons: the Summer Town (seafront, casino, beach), the Winter Town (upscale 19th-century residential quarter with fanciful neo-Moorish, neo-Gothic and colonial villas), the Autumn Town (fishing port, fish market) and the Spring Town (Pereire park). The oyster huts at the port of Gujan-Mestras and L'Herbe (Cap-Ferret peninsula) are legendary addresses for tasting oysters and seafood with your feet in the water. The basin is also a paradise for sailing, kayaking, kitesurfing and stand-up paddling.",
        itineraire:
          "From Bordeaux, your driver takes the southern ring road then the A63 towards Bayonne. At Cestas, you take the A660 exit towards Arcachon. This motorway crosses the Landes de Gascogne pine forest in a straight line for 30 km — a soothing green corridor. Past La Teste-de-Buch, you arrive in Arcachon. Your driver can drop you at the town centre (seafront, casino), the station, in the Winter Town (villas) or directly at the Dune du Pilat (5 km south of Arcachon). Tolls are modest (~€4). The 50-minute journey is one of the most pleasant from Bordeaux. Note: on July-August Saturdays, the A660 can be congested between Cestas and La Teste (allow 15-20 min extra). The Sunday evening return is also busy.",
        conseils:
          "The Dune du Pilat is unmissable: climb to the summit (20 min, seasonal staircase or sand) for a unique 360° panorama. Ideal at sunset. In summer, arrive early (before 10am) or late (after 5pm) to avoid crowds. Oyster huts are the authentic basin experience: taste fresh oysters with white wine and crépinettes (sausages) facing the basin. Best addresses: Chez Boulan (L'Herbe, Cap-Ferret), the huts at Larros port (Gujan-Mestras). The Winter Town deserves a 1h walk: villa circuit (map from Tourist Office), fanciful 19th-century architecture. The basin tour by taxi (half-day hire ~€250) lets you see Arcachon, the Dune du Pilat, Gujan-Mestras, Cap-Ferret and its oyster villages. The basin crossing by boat (Arcachon–Cap Ferret, 25 min, UBA) is a delightful excursion.",
        comparaisonTransport:
          "The TER Bordeaux–Arcachon is frequent and fast (50 min, €10-15, 15+ trains/day). It is an excellent connection. The TaxiNeo taxi at €125–€155 is justified for families (beach gear, pushchairs), groups (3-4 passengers: €20-37 per person), those wanting direct access to the Dune du Pilat (no station nearby) or to combine several basin sites. Door-to-door is invaluable with bulky gear. By car, expect €8 fuel and €4 tolls, but parking in Arcachon is difficult and expensive in summer (€2-3/h).",
        faq: [
          { question: "What is the price of a taxi Bordeaux — Bassin d'Arcachon?", answer: "The flat rate is €125–€155 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Bordeaux — Bassin d'Arcachon journey?", answer: "About 50 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "paris-la-vallee-village",
    from: "Paris",
    to: "La Vallée Village",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 48.8534,
    toLng: 2.7852,
    distanceKm: 35,
    durationMin: 35,
    priceEstimate: "70 — 85 €",
    category: "touristique",
    highlights: ["A4", "Val d'Europe", "Outlet shopping"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → La Vallée Village | 35 km, dès 70 € | TaxiNeo",
        metaDescription: "Via A4 en 35 min. Passage par Val d'Europe et Outlet shopping. Arrêt possible pour photos et visites en chemin.",
        heroTitle: "Taxi Paris → La Vallée Village",
        heroSubtitle: "Votre transfert Paris → La Vallée Village au prix fixe de 70 — 85 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Paris — La Vallée Village pour le shopping outlet de luxe.",
        routeDescription: "L'itinéraire emprunte l'A4 direction Marne-la-Vallée.",
        faq: [
          { question: "Quel est le prix d'un taxi Paris — La Vallée Village ?", answer: "Le forfait est de 70 — 85 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Paris — La Vallée Village ?", answer: "Environ 35 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → La Vallée Village | 35 km, from €70 | TaxiNeo",
        metaDescription: "Through A4 in 35 min. Val d'Europe and Outlet shopping along the way. Stops for sightseeing possible en route. Perfect for a day trip without driving.",
        heroTitle: "Taxi Paris → La Vallée Village",
        heroSubtitle: "Your Paris → La Vallée Village transfer at a fixed price of €70–€85. Online booking, professional driver 24/7.",
        description: "Paris — La Vallée Village transfer for luxury outlet shopping.",
        routeDescription: "The route takes the A4 towards Marne-la-Vallée.",
        faq: [
          { question: "What is the price of a taxi Paris — La Vallée Village?", answer: "The flat rate is €70–€85 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Paris — La Vallée Village journey?", answer: "About 35 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "paris-lyon",
    from: "Paris",
    to: "Lyon",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 45.764,
    toLng: 4.8357,
    distanceKm: 465,
    durationMin: 270,
    priceEstimate: "890 — 1075 €",
    category: "ville-a-ville",
    prixMin: 890,
    prixMax: 1075,
    prixVan: 1410,
    dureeMax: 330,
    autoroute: "A6",
    peages: "~35 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "lyon",
    liensInternes: ["paris-dijon", "paris-grenoble", "paris-chambery"],
    tags: ["longue-distance", "business"],
    hub: "paris",
    highlights: ["A6", "Beaune", "Mâcon"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Lyon | 465 km, dès 890 €, 4h30 | TaxiNeo",
        metaDescription: "Par A6 via Beaune et Mâcon. À 4 passagers, 125 €/pers porte-à-porte (vs TGV 90 € + taxi gare). Arrêt dégustation aux domaines bourguignons ou déjeuner à Beaune.",
        heroTitle: "Taxi Paris → Lyon",
        heroSubtitle: "Votre transfert Paris → Lyon au prix fixe de 890 — 1075 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert longue distance Paris — Lyon par l'A6 Autoroute du Soleil.",
        routeDescription: "L'itinéraire emprunte l'A6 via Auxerre, Beaune et Mâcon.",
        introduction:
          "Le trajet Paris — Lyon en taxi privé s'adresse en priorité aux voyageurs d'affaires qui enchaînent les rendez-vous entre les deux premières métropoles françaises, aux familles nombreuses pour lesquelles le TGV représente un budget conséquent dès lors qu'il faut acheter quatre ou cinq billets, et aux cadres qui souhaitent travailler en toute tranquillité pendant le transfert grâce au Wi-Fi embarqué et aux prises USB disponibles à l'arrière du véhicule. Lyon, deuxième pôle économique du pays avec son quartier d'affaires de la Part-Dieu, son pôle pharmaceutique et chimique dans le couloir de la chimie et sa scène gastronomique mondialement réputée — les bouchons lyonnais, Paul Bocuse, la Cité internationale de la gastronomie — attire chaque année des millions de visiteurs professionnels et touristiques. Un taxi privé permet d'emporter autant de bagages que nécessaire, de choisir librement son horaire de départ — y compris très tôt le matin ou tard le soir — et de bénéficier d'un confort incomparable avec la climatisation, l'espace pour les jambes et la possibilité de passer des appels confidentiels pendant le trajet. Les équipes internationales apprécient également ce mode de transport lors de salons comme Pollutec, Sirha ou le Salon des Entrepreneurs, où la logistique de groupe est simplifiée par un véhicule unique.",
        itineraire:
          "Au départ de Paris, votre chauffeur emprunte le périphérique sud jusqu'à la Porte d'Orléans, puis s'engage sur l'autoroute A6 en direction de Lyon. La première section traverse la banlieue sud par Évry et Fontainebleau, où la forêt offre un décor verdoyant. Après la sortie d'Auxerre, le paysage change radicalement pour laisser place aux collines bourguignonnes et aux premières vignes de l'Auxerrois. L'aire de repos de Beaune-Tailly, située à mi-parcours, constitue un arrêt idéal pour une pause de 15 minutes — on y trouve des produits régionaux et un point de vue sur les vignobles de la Côte-d'Or. Le chauffeur poursuit ensuite sur l'A6 en passant par Chalon-sur-Saône et Mâcon, où le paysage se teinte des tuiles romaines du Beaujolais. La descente vers Lyon se fait par la vallée de la Saône, avec en toile de fond la colline de Fourvière. L'arrivée dans Lyon s'effectue généralement par le tunnel de Fourvière (A6/A7) ou par le contournement est (A46) selon la destination finale dans l'agglomération. En cas de trafic dense aux heures de pointe lyonnaises (7h30-9h30 et 17h-19h), le chauffeur privilégie le boulevard périphérique Laurent-Bonnevay pour desservir les quartiers est comme la Part-Dieu, Villeurbanne ou Bron.",
        conseils:
          "Pour un trajet Paris — Lyon optimal, privilégiez un départ entre 9h30 et 11h ou après 14h afin d'éviter le trafic de sortie de Paris sur le périphérique et l'A6. Le vendredi soir et le dimanche soir sont à proscrire en raison des retours de week-end, surtout en été quand la vallée du Rhône est saturée. En hiver, surveillez les conditions météo sur le tronçon Beaune — Mâcon, où le brouillard matinal est fréquent entre novembre et février : votre chauffeur adaptera sa vitesse et son itinéraire si nécessaire. La pause recommandée se situe à l'aire de Beaune-Tailly (km 310), qui propose des sanitaires propres, une boutique de produits bourguignons et un espace de restauration rapide. Si vous voyagez avec des enfants, prévoyez des divertissements pour la portion Fontainebleau — Auxerre, la plus monotone du parcours. En été, le soleil tape fort sur l'A6 entre Mâcon et Lyon : la climatisation du véhicule est évidemment incluse, mais prévoyez de l'eau supplémentaire. Enfin, si vous avez un rendez-vous tôt le matin à Lyon, un départ de Paris à 4h30 permet d'arriver avant 9h même avec le trafic.",
        comparaisonTransport:
          "Le TGV Paris Gare de Lyon → Lyon Part-Dieu met environ 2h et coûte entre 30 € (Ouigo, réservé très tôt) et 120 € (tarif flexible dernière minute) par personne. Pour une famille de quatre, le train revient donc entre 120 € et 480 €, auxquels il faut ajouter le taxi ou VTC à l'arrivée (15-25 €) et le trajet jusqu'à la gare au départ. En voiture individuelle, comptez 35 € de péages et environ 50 € d'essence, soit 85 € mais avec la fatigue de la conduite. Notre taxi forfaitaire à partir de 890 € se justifie surtout à plusieurs ou avec beaucoup de bagages : le confort porte-à-porte, zéro stress, bagages illimités et horaires flexibles font la différence. Pour les voyageurs d'affaires qui facturent leur temps, le gain de productivité pendant les 4h30 de trajet en taxi est un argument décisif par rapport au TGV où l'espace de travail reste contraint.",
        faq: [
          { question: "Quel est le prix d'un taxi Paris — Lyon ?", answer: "Le forfait est de 890 — 1075 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Paris — Lyon ?", answer: "Environ 270 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Lyon | Fixed price from €890 | TaxiNeo",
        metaDescription: "Direct route via A6, 4h30. Beaune and Mâcon along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Paris → Lyon",
        heroSubtitle: "Your Paris → Lyon transfer at a fixed price of €890–€1075. Online booking, professional driver 24/7.",
        description: "Long-distance Paris — Lyon transfer via the A6 Autoroute du Soleil.",
        routeDescription: "The route takes the A6 via Auxerre, Beaune and Mâcon.",
        introduction:
          "The Paris — Lyon private taxi service primarily caters to business travellers shuttling between France's two largest cities, large families for whom TGV tickets quickly add up, and executives who want to work in peace during the journey with onboard Wi-Fi and USB charging. Lyon, the country's second economic hub with the Part-Dieu business district, its pharmaceutical corridor and world-renowned gastronomy, attracts millions of visitors annually. A private taxi lets you bring unlimited luggage, choose your departure time freely, and enjoy unmatched comfort with air conditioning and legroom.",
        itineraire:
          "From Paris, your driver takes the southern ring road to Porte d'Orléans, then joins the A6 motorway towards Lyon. The first section passes through the southern suburbs via Évry and Fontainebleau. After Auxerre, the landscape transitions to Burgundy's rolling hills and vineyards. The Beaune-Tailly rest area at the halfway point makes an ideal 15-minute break. The driver continues through Chalon-sur-Saône and Mâcon before descending into Lyon via the Saône valley with Fourvière hill as backdrop.",
        conseils:
          "For an optimal journey, depart between 9:30am and 11am or after 2pm to avoid Paris ring road traffic. Avoid Friday and Sunday evenings. In winter, watch for fog on the Beaune — Mâcon stretch. The recommended stop is at Beaune-Tailly rest area (km 310). In summer, the A6 between Mâcon and Lyon gets very hot — air conditioning is included but bring extra water.",
        comparaisonTransport:
          "The TGV from Paris Gare de Lyon to Lyon Part-Dieu takes about 2 hours and costs €30-120 per person. For a family of four, that's €120-480 plus taxis at both ends (€15-25 each). Our fixed-rate taxi from €890 makes most sense for groups or travellers with a lot of luggage, with door-to-door comfort, unlimited luggage and flexible schedules.",
        faq: [
          { question: "What is the price of a taxi Paris — Lyon?", answer: "The flat rate is €890–€1075 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Paris — Lyon journey?", answer: "About 270 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "paris-lille",
    from: "Paris",
    to: "Lille",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 50.6292,
    toLng: 3.0573,
    distanceKm: 225,
    durationMin: 150,
    priceEstimate: "430 — 520 €",
    category: "ville-a-ville",
    prixMin: 430,
    prixMax: 520,
    prixVan: 685,
    dureeMax: 200,
    autoroute: "A1",
    peages: "~18 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "lille",
    liensInternes: ["paris-amiens", "paris-reims"],
    tags: ["longue-distance", "business"],
    hub: "paris",
    highlights: ["A1", "Arras", "Douai"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Lille | 225 km, dès 430 €, 2h30 | TaxiNeo",
        metaDescription: "Par A1 via Arras et la Picardie. À 4 passagers, 63 €/pers porte-à-porte (vs TGV 45 € + taxis). Idéal déménagement, bagages volumineux ou matériel encombrant.",
        heroTitle: "Taxi Paris → Lille",
        heroSubtitle: "Votre transfert Paris → Lille au prix fixe de 430 — 520 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Paris — Lille par l'A1, la capitale des Flandres à 2h30.",
        routeDescription: "L'itinéraire emprunte l'A1 Autoroute du Nord via Arras.",
        introduction:
          "La liaison Paris — Lille en taxi privé répond aux besoins des cadres et dirigeants qui multiplient les allers-retours entre les deux métropoles pour des réunions dans le quartier d'affaires d'Euralille, des rendez-vous à la CCI ou des visites de sites industriels dans le bassin minier du Nord-Pas-de-Calais. Lille Métropole, forte de plus d'un million d'habitants, est également un carrefour européen stratégique à deux pas de Bruxelles, Gand et Anvers. Les événements comme la Grande Braderie de Lille en septembre, les expositions au Palais des Beaux-Arts ou les matchs au stade Pierre-Mauroy génèrent une demande soutenue en transferts privés. Les familles originaires du Nord et installées à Paris apprécient particulièrement ce service pour les retours de week-end avec bagages et provisions régionales — maroilles, gaufres, bières artisanales du Nord. Le taxi offre une souplesse incomparable : départ quand vous le souhaitez, pas de contrainte de gare, et la possibilité de faire un crochet par Arras ou Lens en chemin si nécessaire.",
        itineraire:
          "Au départ de Paris, le chauffeur rejoint la Porte de la Chapelle et s'engage sur l'A1, la célèbre « Autoroute du Nord » inaugurée en 1967. Après la traversée de la plaine de France et le passage par Senlis — dont la cathédrale gothique est visible au loin —, la route file vers le nord à travers la Picardie. Le paysage, d'abord périurbain, cède la place aux grandes plaines céréalières de l'Artois. Après l'échangeur d'Arras (km 180), reconnaissable à ses deux places baroques classées UNESCO, le trajet entre dans le bassin minier. Les terrils caractéristiques du Pas-de-Calais apparaissent à hauteur de Lens, dont le musée du Louvre-Lens mérite un détour. Les 30 derniers kilomètres traversent la conurbation Lens-Béthune-Lille avec une arrivée par la porte sud de Lille. Selon votre destination — Vieux-Lille, Euralille, Roubaix, Tourcoing — le chauffeur adapte son itinéraire par le boulevard périphérique ou la voirie urbaine.",
        conseils:
          "L'A1 est l'autoroute la plus chargée de France, surtout entre Paris et Senlis. Évitez les départs entre 7h et 9h et entre 16h30 et 19h en semaine. Les mardis et jeudis sont les jours les plus calmes pour ce trajet. Le trafic de poids lourds est important sur cette axe nord-sud, surtout entre Senlis et Arras : votre chauffeur roule dans la voie de gauche pour maintenir une allure fluide. En hiver, le verglas est fréquent sur le tronçon Arras — Lille : les véhicules TaxiNeo sont équipés de pneus hiver de novembre à mars. Si vous voyagez un jour de Braderie (premier week-end de septembre), réservez très à l'avance car la demande est exceptionnelle. Pour un aller-retour dans la journée, un départ à 7h permet d'être à Lille à 9h30 et de repartir en fin d'après-midi pour être à Paris vers 20h.",
        comparaisonTransport:
          "Le TGV Paris-Nord → Lille-Flandres met 1h02 et coûte entre 10 € (Ouigo, non flexible) et 85 € (tarif Pro 1ère) par personne. Pour un aller-retour business à deux, le TGV revient entre 40 € et 340 €, mais sans la flexibilité d'horaire ni le confort porte-à-porte. En voiture personnelle, les péages A1 coûtent environ 18 € et l'essence environ 25 €, soit 43 €, mais avec le stress de la conduite et du stationnement à Lille. Notre taxi à partir de 430 € s'adresse surtout aux groupes de 3-4 personnes qui veulent optimiser leur temps de trajet en travaillant à bord.",
        faq: [
          { question: "Quel est le prix d'un taxi Paris — Lille ?", answer: "Le forfait est de 430 — 520 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Paris — Lille ?", answer: "Environ 150 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Lille | Fixed price from €430 | TaxiNeo",
        metaDescription: "A1 route, approximately 2h30. Arras and Douai along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Paris → Lille",
        heroSubtitle: "Your Paris → Lille transfer at a fixed price of €430–€520. Online booking, professional driver 24/7.",
        description: "Paris — Lille transfer via the A1, the capital of Flanders in 2h30.",
        routeDescription: "The route takes the A1 Autoroute du Nord via Arras.",
        introduction:
          "The Paris — Lille private taxi serves executives commuting between both cities for meetings in Euralille, visits to industrial sites in the Nord mining basin, and families returning north with luggage. Lille's metropolitan area of over 1 million people is a strategic European crossroads near Brussels, Ghent and Antwerp. Events like the Grande Braderie in September generate exceptional demand.",
        itineraire:
          "From Paris, the driver joins Porte de la Chapelle onto the A1. After crossing the plains of France past Senlis with its Gothic cathedral, the route heads north through Picardy. After Arras (km 180) with its UNESCO-listed baroque squares, the journey enters the mining basin. The last 30 km cross the Lens-Lille conurbation.",
        conseils:
          "The A1 is France's busiest motorway. Avoid departures between 7-9am and 4:30-7pm on weekdays. In winter, black ice is common between Arras and Lille — our vehicles have winter tyres from November to March. During the Braderie (first September weekend), book well in advance.",
        comparaisonTransport:
          "The TGV takes 1h02 and costs €10-85 per person. For two business travellers on a round trip, the TGV costs €40-340. Our taxi from €430 mainly suits groups of 3-4 who want to work during the journey with door-to-door convenience.",
        faq: [
          { question: "What is the price of a taxi Paris — Lille?", answer: "The flat rate is €430–€520 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Paris — Lille journey?", answer: "About 150 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "paris-rouen",
    from: "Paris",
    to: "Rouen",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 49.4432,
    toLng: 1.0993,
    distanceKm: 135,
    durationMin: 90,
    priceEstimate: "260 — 315 €",
    category: "ville-a-ville",
    prixMin: 260,
    prixMax: 315,
    prixVan: 410,
    dureeMax: 130,
    autoroute: "A13",
    peages: "~12 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "rouen",
    liensInternes: ["paris-caen", "paris-amiens", "paris-le-mans"],
    tags: ["ville-a-ville", "business"],
    hub: "paris",
    highlights: ["A13", "Giverny", "Cathédrale de Rouen"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Rouen | 135 km, dès 260 €, 1h30 | TaxiNeo",
        metaDescription: "Via A13 en 1h30. Giverny et Cathédrale de Rouen sur le parcours. Dépose porte-à-porte, bagages inclus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Paris → Rouen",
        heroSubtitle: "Votre transfert Paris → Rouen au prix fixe de 260 — 315 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Paris — Rouen, capitale historique de la Normandie.",
        routeDescription: "L'itinéraire emprunte l'A13 à travers les boucles de la Seine.",
        introduction:
          "Rouen, préfecture de la Seine-Maritime et capitale historique de la Normandie, est une ville d'art et d'histoire qui attire chaque année des centaines de milliers de visiteurs. Sa cathédrale Notre-Dame, peinte plus de trente fois par Claude Monet, son Gros-Horloge du XIVe siècle, la place du Vieux-Marché où Jeanne d'Arc fut brûlée en 1431 et ses ruelles médiévales à pans de bois en font l'une des plus belles villes du nord de la France. Rouen est également un pôle économique important avec son port maritime, le cinquième de France, ses industries pharmaceutiques et chimiques le long de la vallée de la Seine, et son centre tertiaire dynamique. Le taxi privé Paris — Rouen répond aux besoins des professionnels du port, de l'industrie et du secteur juridique qui font régulièrement la navette avec la capitale. Les familles normandes installées en Île-de-France l'utilisent aussi pour les retours de week-end, surtout quand les bagages et les enfants rendent le train inconfortable. Rouen accueille aussi de grands événements comme l'Armada, le festival de musique Beauregard à proximité, et les courses hippiques de l'hippodrome des Bruyères.",
        itineraire:
          "Votre chauffeur quitte Paris par la Porte d'Auteuil ou la Porte de Saint-Cloud et rejoint l'autoroute A13 en direction de Rouen-Caen. La traversée des Yvelines offre un paysage verdoyant avec les coteaux de la Seine à Mantes-la-Jolie (km 60). Après la barrière de péage de Buchelay, l'autoroute longe les boucles de la Seine avec des vues spectaculaires sur les falaises crayeuses et les méandres du fleuve. Le passage par la forêt de Bord-Louviers (km 100) annonce l'arrivée en agglomération rouennaise. L'entrée dans Rouen se fait par le sud via la côte de Bonsecours, offrant un panorama exceptionnel sur la ville et la Seine en contrebas, ou par l'ouest via la voie rapide sud. Le centre-ville de Rouen est compact et accessible, avec un dépôt possible directement devant la cathédrale, la gare Rouen-Rive-Droite, ou dans les quartiers d'affaires de la rive gauche. En heures de pointe (7h30-9h et 17h-18h30), le trafic sur le pont Mathilde et les quais peut ralentir l'entrée dans le centre-ville de 15 à 20 minutes.",
        conseils:
          "Le trajet Paris — Rouen est court (1h30) et ne nécessite généralement pas de pause. Cependant, l'A13 est l'une des autoroutes les plus fréquentées d'Île-de-France, surtout entre la Défense et Orgeval. Privilégiez un départ avant 7h ou entre 10h et 15h pour éviter les bouchons chroniques à Mantes-la-Jolie. Le vendredi soir en direction de la Normandie est à éviter, particulièrement en été quand les Parisiens se dirigent vers Deauville et la côte. Si vous visitez Rouen, le stationnement en centre-ville est rare et cher : le taxi vous dépose directement à destination. Pour un retour le même jour, votre chauffeur peut vous attendre sur place (supplément horaire). Rouen est aussi le point de départ idéal pour visiter Giverny (les jardins de Monet), Honfleur ou la côte d'Albâtre. En hiver, le brouillard dans la vallée de la Seine entre Mantes et Rouen est fréquent : votre chauffeur expérimenté adaptera sa conduite.",
        comparaisonTransport:
          "Le train Paris Saint-Lazare → Rouen Rive-Droite met environ 1h20 et coûte de 12 € (Nomad Train) à 28 € par personne. Pour un voyageur seul, le train est plus économique. À trois passagers, le taxi à 260 € reste plus cher que le train (3 billets = 36-84 €, plus taxi local 15-20 €), mais l'écart se réduit. Le taxi offre surtout l'avantage du porte-à-porte, de la flexibilité horaire totale et du transport de bagages volumineux. Pour les professionnels avec rendez-vous multiples dans l'agglomération rouennaise, le taxi évite les contraintes de location de voiture.",
        faq: [
          { question: "Quel est le prix d'un taxi Paris — Rouen ?", answer: "Le forfait est de 260 — 315 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Paris — Rouen ?", answer: "Environ 90 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Rouen | Fixed price from €260 | TaxiNeo",
        metaDescription: "Via A13, 1h30 ride. Giverny and Cathédrale de Rouen along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Paris → Rouen",
        heroSubtitle: "Your Paris → Rouen transfer at a fixed price of €260–€315. Online booking, professional driver 24/7.",
        description: "Paris — Rouen transfer, historic capital of Normandy.",
        routeDescription: "The route takes the A13 through the Seine loops.",
        introduction:
          "Rouen, Normandy's historic capital, attracts hundreds of thousands of visitors annually with its cathedral, medieval streets and vibrant port economy. The private taxi serves business travellers, families and tourists heading to this artistic city.",
        itineraire:
          "From Paris via Porte d'Auteuil onto the A13. Through the Yvelines and along the Seine loops past Mantes-la-Jolie. Entry to Rouen via Bonsecours hill with panoramic views of the city.",
        conseils:
          "A short 1h30 journey, no break needed. Avoid Friday evenings and rush hours. The A13 is busy between La Défense and Orgeval. Rouen is also a great base for visiting Giverny or Honfleur.",
        comparaisonTransport:
          "Train from Paris Saint-Lazare takes 1h20 for €12-28. Our taxi from €260 suits groups of 3+ and offers door-to-door convenience with luggage.",
        faq: [
          { question: "What is the price of a taxi Paris — Rouen?", answer: "The flat rate is €260–€315 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Paris — Rouen journey?", answer: "About 90 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "paris-orleans",
    from: "Paris",
    to: "Orléans",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 47.9029,
    toLng: 1.9039,
    distanceKm: 130,
    durationMin: 90,
    priceEstimate: "250 — 305 €",
    category: "ville-a-ville",
    prixMin: 250,
    prixMax: 305,
    prixVan: 395,
    dureeMax: 125,
    autoroute: "A10",
    peages: "~10 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "orleans",
    liensInternes: ["paris-tours", "paris-bourges", "paris-auxerre"],
    tags: ["ville-a-ville", "business", "patrimoine"],
    hub: "paris",
    highlights: ["A10", "Cathédrale d'Orléans"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Orléans | 130 km, dès 250 € | TaxiNeo",
        metaDescription: "Par A10, 1h30 de trajet. Vue sur Cathédrale d'Orléans en chemin. Dépose porte-à-porte, bagages inclus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Paris → Orléans",
        heroSubtitle: "Votre transfert Paris → Orléans au prix fixe de 250 — 305 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Paris — Orléans, porte d'entrée des châteaux de la Loire.",
        routeDescription: "Le trajet emprunte l'A10 Autoroute de l'Aquitaine.",
        introduction:
          "Orléans, préfecture du Loiret et métropole de 290 000 habitants, est une ville en pleine renaissance. Indissociable de Jeanne d'Arc qui libéra la ville du siège anglais en 1429, Orléans célèbre chaque année en mai les Fêtes johanniques, un événement historique et festif majeur. La cathédrale Sainte-Croix, reconstruite après les guerres de Religion dans un style gothique flamboyant, domine le centre-ville. Les bords de Loire, réaménagés ces dernières années, offrent des promenades agréables et des guinguettes estivales. Économiquement, Orléans est un carrefour entre Paris et le sud-ouest, avec une Cosmetic Valley mondialement reconnue (premier pôle mondial de la parfumerie-cosmétique), des centres de recherche du BRGM et du CNRS, et un tissu logistique important grâce à sa position sur l'axe Paris-Bordeaux. Le taxi privé Paris — Orléans est utilisé par les cadres de la cosmétique, les chercheurs, les avocats du barreau d'Orléans et les familles en route vers les châteaux de la Loire ou la Sologne. La proximité de Paris (1h30) en fait un trajet quotidien pour beaucoup de professionnels.",
        itineraire:
          "Le départ de Paris se fait par la Porte d'Orléans (qui tire son nom de cette direction historique) sur l'A6b puis l'A10. La traversée de l'Essonne passe par Arpajon et Étampes, villes de la grande banlieue parisienne. Après la barrière de péage d'Allainville (km 60), l'autoroute traverse la Beauce, la plus grande plaine céréalière de France avec ses champs de blé et de colza à perte de vue. L'approche d'Orléans se signale par l'apparition de la forêt d'Orléans, la plus grande forêt domaniale de France métropolitaine. L'entrée dans Orléans se fait par le nord via la tangentielle ou directement par la sortie Orléans-Centre. Le pont Georges V, avec sa vue sur la Loire et la cathédrale, offre une arrivée spectaculaire en centre-ville.",
        conseils:
          "Le Paris — Orléans est un trajet rapide d'1h30 sans besoin de pause. L'A10 est fluide après Arpajon, sauf aux heures de pointe en sortie de Paris. Pour les Fêtes johanniques (début mai), réservez tôt car les hôtels et taxis sont pris d'assaut. Si vous continuez vers les châteaux, Chambord est à 45 minutes d'Orléans et Chenonceau à 1h15. La Sologne, terre de chasse et d'étangs au sud d'Orléans, est accessible en 30 minutes. En automne, la forêt d'Orléans offre de magnifiques couleurs. Le marché couvert des Halles Châtelet est ouvert le samedi matin et propose les meilleurs produits du terroir ligérien.",
        comparaisonTransport:
          "Le train Paris Austerlitz → Orléans met 1h10 en Intercités pour 12 à 30 € par personne. Le TER est cadencé mais les horaires sont contraignants. Notre taxi à partir de 250 € est intéressant pour 3-4 passagers et offre la flexibilité du porte-à-porte, essentielle pour les rendez-vous professionnels dispersés dans l'agglomération (zones industrielles, Cosmetic Valley à Chartres). Le taxi permet aussi de combiner Orléans et Chambord en une seule journée.",
        faq: [
          { question: "Quel est le prix d'un taxi Paris — Orléans ?", answer: "Le forfait est de 250 — 305 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Paris — Orléans ?", answer: "Environ 90 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Orléans | 130 km, from €250 | TaxiNeo",
        metaDescription: "Direct route via A10, 1h30. Cathédrale d'Orléans along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Paris → Orléans",
        heroSubtitle: "Your Paris → Orléans transfer at a fixed price of €250–€305. Online booking, professional driver 24/7.",
        description: "Paris — Orléans transfer, gateway to the Loire Valley châteaux.",
        routeDescription: "The route takes the A10 Autoroute de l'Aquitaine.",
        introduction:
          "Orléans, inseparable from Joan of Arc, is a thriving city with the world-renowned Cosmetic Valley, CNRS research and Loire Valley access. Private taxis serve professionals and tourists alike.",
        itineraire:
          "From Paris via Porte d'Orléans onto the A10. Through the Beauce plains and past the Orléans forest. Arrival via Georges V bridge with cathedral views.",
        conseils:
          "Quick 1h30 trip, no stop needed. Chambord is 45 minutes from Orléans. Book early for the Joan of Arc festival in May.",
        comparaisonTransport:
          "Train takes 1h10 for €12-30. Our taxi from €250 suits groups and those combining Orléans with Chambord or Loire Valley tours.",
        faq: [
          { question: "What is the price of a taxi Paris — Orléans?", answer: "The flat rate is €250–€305 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Paris — Orléans journey?", answer: "About 90 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "paris-tours",
    from: "Paris",
    to: "Tours",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 47.3941,
    toLng: 0.6848,
    distanceKm: 235,
    durationMin: 150,
    priceEstimate: "450 — 545 €",
    category: "ville-a-ville",
    prixMin: 450,
    prixMax: 545,
    prixVan: 715,
    dureeMax: 190,
    autoroute: "A10",
    peages: "~20 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "tours",
    liensInternes: ["paris-orleans", "paris-poitiers", "paris-bordeaux"],
    tags: ["ville-a-ville", "tourisme", "chateaux"],
    hub: "paris",
    highlights: ["A10", "Châteaux de la Loire", "Amboise"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Tours | 235 km, dès 450 €, 2h30 | TaxiNeo",
        metaDescription: "Via A10 en 2h30. Châteaux de la Loire et Amboise sur le parcours. Dépose porte-à-porte, bagages inclus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Paris → Tours",
        heroSubtitle: "Votre transfert Paris → Tours au prix fixe de 450 — 545 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Paris — Tours au cœur des châteaux de la Loire.",
        routeDescription: "L'itinéraire emprunte l'A10 via Orléans et Blois.",
        introduction:
          "Tours, au cœur du Val de Loire classé au patrimoine mondial de l'UNESCO, est la porte d'entrée d'un des plus beaux ensembles de châteaux au monde. Chenonceau enjambant le Cher, Amboise surplombant la Loire, Villandry et ses jardins remarquables, Azay-le-Rideau reflété dans l'Indre — tous se trouvent à moins de 40 minutes de Tours. La ville elle-même possède un charme considérable avec sa vieille ville autour de la place Plumereau, ses maisons à pans de bois du XVe siècle, sa cathédrale Saint-Gatien et le musée des Beaux-Arts dans l'ancien palais des archevêques. Tours est aussi la capitale de la Touraine, réputée pour ses vins (Vouvray, Chinon, Bourgueil), ses rillettes, son fromage de chèvre Sainte-Maure et sa gastronomie raffinée. Le taxi privé Paris — Tours est plébiscité par les touristes internationaux qui souhaitent explorer les châteaux à leur rythme, les familles en week-end prolongé et les professionnels de la pharmacie et de l'électronique, industries bien implantées dans l'agglomération tourangelle. Le confort d'un transfert porte-à-porte, avec la possibilité de s'arrêter visiter un château en chemin, est un avantage unique du taxi.",
        itineraire:
          "Votre chauffeur quitte Paris par la Porte d'Orléans et emprunte l'A10 en direction de Bordeaux. Après la traversée de la Beauce et ses immenses champs de blé, on atteint Orléans (km 130) où le contournement par l'A71 puis retour A10 évite le centre-ville. Le paysage change après Orléans avec l'apparition de la Loire et des premières forêts de Sologne. À Amboise (km 210), il est possible de faire un arrêt pour admirer le château royal et le Clos Lucé, dernière demeure de Léonard de Vinci. Les 25 derniers kilomètres longent la Loire avec des vues magnifiques sur le fleuve. L'arrivée à Tours se fait par l'est via la voie rapide de Tours-Nord ou par le sud via Montlouis-sur-Loire. La dépose est possible au centre-ville (place Jean-Jaurès, gare de Tours), au château, ou directement dans un domaine viticole si vous poursuivez la visite.",
        conseils:
          "Le trajet Paris — Tours dure 2h30 et une pause à Orléans ou à l'aire d'Amboise est conseillée. Si vous prévoyez de visiter des châteaux, planifiez votre itinéraire à l'avance : Chambord et Chenonceau sont les plus fréquentés et les files d'attente peuvent être longues en été. Votre chauffeur peut vous proposer un circuit optimisé sur une demi-journée ou une journée complète : Amboise + Chenonceau le matin, Villandry + Azay-le-Rideau l'après-midi par exemple. La meilleure période pour visiter est mai-juin, quand les jardins sont en fleurs et les foules moindres. En été, les châteaux proposent des spectacles nocturnes (son et lumière à Chambord, nuits enchantées à Chenonceau) : un départ de Paris en milieu d'après-midi permet d'en profiter. Les amateurs de vin apprécieront un détour par les caves de Vouvray, creusées dans le tuffeau, à 10 minutes de Tours.",
        comparaisonTransport:
          "Le TGV Paris Montparnasse → Tours met 1h15 et coûte de 19 € (Ouigo) à 65 € par personne. Pour un couple, le TGV reste nettement moins cher (38-130 € contre 450 € en taxi). Mais dès 3-4 passagers et surtout pour ceux qui souhaitent visiter les châteaux sans louer de voiture, le taxi à partir de 450 € est un excellent choix. Le chauffeur vous conduit de château en château et vous évite le stress de la conduite dans les petites routes de campagne. Pour un week-end complet, la formule taxi + nuit en Loire est souvent plus pratique et pas beaucoup plus chère que TGV + location.",
        faq: [
          { question: "Quel est le prix d'un taxi Paris — Tours ?", answer: "Le forfait est de 450 — 545 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Paris — Tours ?", answer: "Environ 150 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Tours | Fixed price from €450 | TaxiNeo",
        metaDescription: "Via A10, 2h30 ride. Châteaux de la Loire and Amboise along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Paris → Tours",
        heroSubtitle: "Your Paris → Tours transfer at a fixed price of €450–€545. Online booking, professional driver 24/7.",
        description: "Paris — Tours transfer at the heart of the Loire Valley châteaux.",
        routeDescription: "The route takes the A10 via Orléans and Blois.",
        introduction:
          "Tours, at the heart of the UNESCO Loire Valley, is the gateway to France's most famous castles. The city itself charms with medieval streets, Saint-Gatien cathedral and Touraine wines. Private taxis are ideal for château-hopping without a rental car.",
        itineraire:
          "From Paris via Porte d'Orléans onto the A10. Through the Beauce plains, past Orléans, then along the Loire to Amboise and Tours.",
        conseils:
          "A 2h30 journey with an optional stop at Amboise. Plan château visits ahead in summer. Your driver can create a custom castle circuit for a full day.",
        comparaisonTransport:
          "TGV takes 1h15 for €19-65. Our taxi from €450 is ideal for 3-4 passengers wanting door-to-château service without a rental car.",
        faq: [
          { question: "What is the price of a taxi Paris — Tours?", answer: "The flat rate is €450–€545 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Paris — Tours journey?", answer: "About 150 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "paris-amiens",
    from: "Paris",
    to: "Amiens",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 49.8941,
    toLng: 2.2958,
    distanceKm: 145,
    durationMin: 100,
    priceEstimate: "280 — 335 €",
    category: "ville-a-ville",
    prixMin: 280,
    prixMax: 335,
    prixVan: 440,
    dureeMax: 140,
    autoroute: "A1",
    peages: "~11 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "amiens",
    liensInternes: ["paris-lille", "paris-rouen", "paris-calais"],
    tags: ["ville-a-ville", "tourisme", "patrimoine"],
    hub: "paris",
    highlights: ["A1", "A29", "Cathédrale d'Amiens"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Amiens | 145 km, dès 280 €, 1h40 | TaxiNeo",
        metaDescription: "Par A1, 1h40 de trajet. Vue sur Cathédrale d'Amiens en chemin. Alternative directe au train ou au bus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Paris → Amiens",
        heroSubtitle: "Votre transfert Paris → Amiens au prix fixe de 280 — 335 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Paris — Amiens, ville de Jules Verne et sa cathédrale gothique.",
        routeDescription: "L'itinéraire emprunte l'A1 puis l'A29 vers Amiens.",
        introduction:
          "Amiens, préfecture de la Somme, est une ville dont le patrimoine exceptionnel est souvent méconnu. Sa cathédrale Notre-Dame, plus vaste édifice gothique de France avec ses 200 000 m³ de volume intérieur, est classée au patrimoine mondial de l'UNESCO et offre un spectacle féerique lors des mises en lumière « Chroma » en été. Les hortillonnages, 300 hectares de jardins flottants sillonnés de canaux dans la Somme, constituent un écosystème unique hérité du Moyen Âge. Le quartier Saint-Leu, ancien quartier des tisserands avec ses maisons colorées sur pilotis et ses restaurants au bord de l'eau, rappelle une petite Venise du Nord. Amiens est aussi la ville natale de Jules Verne, dont la maison transformée en musée accueille des milliers de visiteurs chaque année. Économiquement, Amiens est un carrefour logistique entre Paris, Lille et Rouen, avec des plateformes de distribution majeures et un tissu industriel orienté vers l'aéronautique et le numérique. Le taxi privé Paris — Amiens sert les professionnels de la logistique, les universitaires et les touristes découvrant la Picardie.",
        itineraire:
          "Le départ de Paris s'effectue par la Porte de la Chapelle sur l'A1 en direction de Lille. L'autoroute traverse d'abord la banlieue nord dense (Saint-Denis, Roissy) avant de déboucher sur les plaines du pays de France. Après le péage de Chamant (km 50), le paysage s'ouvre sur les grandes cultures céréalières de l'Oise. On passe à proximité de Senlis, cité médiévale visible par ses flèches d'églises, et de Chantilly dont le château se devine à travers les arbres de la forêt. La sortie vers Amiens se fait à Roye (km 110) sur l'A29 ou directement par la sortie Amiens-Sud de l'A1. L'entrée dans Amiens est rapide, la rocade sud contournant la ville jusqu'au centre par le boulevard de Beauvillé. La dépose peut se faire au pied de la cathédrale, dans le quartier Saint-Leu ou à la gare d'Amiens pour une correspondance éventuelle.",
        conseils:
          "Le Paris — Amiens prend 1h40 et ne requiert pas de pause. L'A1 est l'autoroute la plus fréquentée de France, surtout entre Paris et Roissy CDG : évitez les départs entre 7h30 et 9h30 en semaine. Après Senlis, le trafic devient fluide. Si vous souhaitez visiter les hortillonnages, les barques électriques circulent d'avril à octobre et la réservation est conseillée en été. La cathédrale d'Amiens est illuminée en couleurs (Chroma) de juin à septembre, chaque soir à la tombée de la nuit — un spectacle gratuit à ne pas manquer. Pour les amateurs de Jules Verne, la maison-musée au 2 rue Charles-Dubois est ouverte du mardi au dimanche. En hiver, le brouillard dans la vallée de la Somme est fréquent le matin : prévoyez un départ en fin de matinée si possible.",
        comparaisonTransport:
          "Le train Paris Nord → Amiens met 1h10 en Intercités et coûte de 15 € à 35 € par personne. C'est une liaison cadencée et abordable. Notre taxi à partir de 280 € convient aux groupes de 3-4 passagers (3 billets train = 45-105 €), aux voyageurs avec beaucoup de bagages et aux professionnels qui enchaînent des rendez-vous dans l'agglomération amiénoise sans vouloir louer de voiture. Le taxi offre aussi la flexibilité de poursuivre vers la baie de Somme ou les sites mémoriels de la Grande Guerre.",
        faq: [
          { question: "Quel est le prix d'un taxi Paris — Amiens ?", answer: "Le forfait est de 280 — 335 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Paris — Amiens ?", answer: "Environ 100 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Amiens | Fixed price from €280 | TaxiNeo",
        metaDescription: "Direct route via A1, 1h40. Cathédrale d'Amiens along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Paris → Amiens",
        heroSubtitle: "Your Paris → Amiens transfer at a fixed price of €280–€335. Online booking, professional driver 24/7.",
        description: "Paris — Amiens transfer, city of Jules Verne and its Gothic cathedral.",
        routeDescription: "The route takes the A1 then the A29 towards Amiens.",
        introduction:
          "Amiens boasts France's largest Gothic cathedral (UNESCO), unique floating gardens, and Jules Verne's birthplace. The private taxi serves logistics professionals, academics and tourists exploring Picardy and the Somme battlefields.",
        itineraire:
          "From Paris via Porte de la Chapelle onto the A1. Through the Oise plains past Senlis and Chantilly. Exit at Amiens-Sud, arriving via the southern ring road.",
        conseils:
          "A 1h40 journey, no stop needed. The A1 is France's busiest motorway — avoid 7:30-9:30am departures. Don't miss the cathedral light show (Chroma) in summer evenings.",
        comparaisonTransport:
          "Intercités train takes 1h10 for €15-35. Our taxi from €280 suits groups of 3+ and those continuing to the Somme Bay or WWI memorials.",
        faq: [
          { question: "What is the price of a taxi Paris — Amiens?", answer: "The flat rate is €280–€335 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Paris — Amiens journey?", answer: "About 100 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "paris-chartres",
    from: "Paris",
    to: "Chartres",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 48.4469,
    toLng: 1.4892,
    distanceKm: 90,
    durationMin: 75,
    priceEstimate: "175 — 210 €",
    category: "ville-a-ville",
    prixMin: 175,
    prixMax: 210,
    prixVan: 275,
    dureeMax: 100,
    autoroute: "A11",
    peages: "~7 € (A11)",
    departSlug: "paris",
    arriveeSlug: "chartres",
    liensInternes: ["paris-giverny", "paris-vaux-le-vicomte", "paris-compiegne"],
    tags: ["tourisme", "patrimoine-mondial", "unesco", "cathedrale", "vitraux"],
    hub: "paris",
    highlights: ["A11", "Cathédrale de Chartres", "Beauce"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Chartres | 90 km, dès 175 € | TaxiNeo",
        metaDescription: "Via A11 en 1h15. Passage par Cathédrale de Chartres et Beauce. Alternative directe au train ou au bus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Paris → Chartres",
        heroSubtitle: "Votre transfert Paris → Chartres au prix fixe de 175 — 210 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Paris — Chartres pour sa cathédrale classée UNESCO.",
        routeDescription: "Le trajet emprunte l'A11 à travers la plaine de la Beauce.",
        introduction:
          "Chartres est une ville d'art et d'histoire dont la cathédrale Notre-Dame constitue l'un des chefs-d'œuvre absolus de l'architecture gothique. Inscrite au patrimoine mondial de l'UNESCO depuis 1979, cette cathédrale du XIIe-XIIIe siècle possède le plus grand ensemble de vitraux médiévaux conservé au monde, soit plus de 2 600 m² de verrières d'une qualité exceptionnelle. Le célèbre « bleu de Chartres », obtenu par un procédé dont le secret s'est perdu, confère aux vitraux une luminosité incomparable. La cathédrale présente aussi un labyrinthe pavé dans la nef centrale, utilisé au Moyen Âge comme pèlerinage symbolique vers Jérusalem. Au-delà de sa cathédrale, Chartres séduit par sa vieille ville aux ruelles médiévales descendant vers l'Eure, ses maisons à colombages et ses ponts pittoresques. L'événement « Chartres en Lumières » illumine chaque été (avril à octobre) plus de 24 sites de la ville avec des projections monumentales qui transforment la cathédrale et les monuments en tableaux vivants. Le trajet en taxi depuis Paris ne prend qu'1h15, faisant de Chartres une excursion idéale à la demi-journée ou à la journée.",
        itineraire:
          "Votre chauffeur TaxiNeo vous prend en charge à Paris et rejoint l'autoroute A11, dite « L'Océane », par la porte d'Orléans ou la porte de Versailles. L'autoroute traverse la banlieue sud de Paris puis s'ouvre sur les vastes étendues de la plaine de Beauce, l'un des greniers à blé de la France. Par temps clair, les deux flèches de la cathédrale apparaissent à l'horizon dès la sortie de Rambouillet, à plus de 30 km de distance, spectacle qui impressionnait déjà Charles Péguy lors de son pèlerinage. La sortie « Chartres Centre » vous amène directement vers le centre historique. Votre chauffeur vous dépose au pied de la cathédrale, place de la Cathédrale ou rue du Cardinal Pie. Le parking est difficile dans le centre de Chartres, ce qui rend le taxi particulièrement pratique. Le trajet dure environ 1h15 en conditions normales, un peu plus aux heures de pointe sur la section urbaine au départ de Paris.",
        conseils:
          "La cathédrale est ouverte gratuitement tous les jours de 8h30 à 19h30. La visite des tours (montée de 300 marches) coûte 9 € et offre une vue panoramique sur la ville et la Beauce. La crypte, l'une des plus grandes d'Europe, se visite avec un guide (5,50 €, départs à 11h, 14h15 et 16h30). Le labyrinthe est accessible le vendredi de 10h à 17h quand les chaises de la nef sont retirées. « Chartres en Lumières » a lieu chaque soir d'avril à octobre (gratuit) : la cathédrale illuminée est un spectacle féerique à ne pas manquer. La Maison Picassiette, entièrement décorée de mosaïques de faïence par Raymond Isidore, est un lieu unique et poétique (entrée 5 €). Pour le déjeuner, la rue des Changes et la place Marceau offrent de bons restaurants. Le Centre International du Vitrail propose des expositions et ateliers de découverte. Prévoyez 3 à 4 heures pour une visite complète de la cathédrale et de la vieille ville.",
        comparaisonTransport:
          "En train, le trajet Paris Montparnasse → Chartres dure environ 1h10 en TER (billet à partir de 16 €, plein tarif 20 €). Les trains circulent environ toutes les heures. La gare de Chartres est à 800 mètres de la cathédrale. En voiture de location, comptez 50 € la journée plus 7 € de péage et 12 € de carburant. BlaBlaCar propose des covoiturages à partir de 7 €. En taxi TaxiNeo à 175 €, pour 2 personnes le coût par personne est d'environ 88 €, plus cher que le train mais avec le confort du porte-à-porte et la possibilité de combiner avec une visite au château de Maintenon à proximité. L'aller-retour avec attente est proposé à partir de 300 €.",
        faq: [
          { question: "Quel est le prix d'un taxi Paris — Chartres ?", answer: "Le forfait est de 175 — 210 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Paris — Chartres ?", answer: "Environ 75 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Chartres | 90 km, from €175 | TaxiNeo",
        metaDescription: "Via A11, 1h15 ride. Cathédrale de Chartres and Beauce along the way. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Paris → Chartres",
        heroSubtitle: "Your Paris → Chartres transfer at a fixed price of €175–€210. Online booking, professional driver 24/7.",
        description: "Paris — Chartres transfer for its UNESCO-listed cathedral.",
        routeDescription: "The route takes the A11 through the Beauce plain.",
        introduction:
          "Chartres is a city of art and history whose Notre-Dame Cathedral is one of the absolute masterpieces of Gothic architecture. A UNESCO World Heritage Site since 1979, this 12th-13th century cathedral has the largest collection of medieval stained glass windows preserved in the world, over 2,600 m² of exceptional quality. The famous 'Chartres blue', achieved by a process whose secret has been lost, gives the windows an incomparable luminosity. The cathedral also features a paved labyrinth in the central nave, used in the Middle Ages as a symbolic pilgrimage to Jerusalem. Beyond the cathedral, Chartres charms with its old town's medieval lanes descending to the Eure river, half-timbered houses and picturesque bridges. The 'Chartres en Lumières' event illuminates over 24 city sites each summer (April to October) with monumental projections transforming the cathedral and monuments into living paintings. The taxi journey from Paris takes just 1h15, making Chartres an ideal half-day or full-day excursion.",
        itineraire:
          "Your TaxiNeo driver picks you up in Paris and joins the A11 motorway, known as 'L'Océane', via Porte d'Orléans or Porte de Versailles. The motorway crosses Paris's southern suburbs then opens onto the vast expanses of the Beauce plain, one of France's breadbaskets. In clear weather, the cathedral's two spires appear on the horizon from Rambouillet exit, over 30 km away, a sight that already impressed Charles Péguy during his pilgrimage. The 'Chartres Centre' exit leads directly to the historic centre. Your driver drops you at the foot of the cathedral, at Place de la Cathédrale or Rue du Cardinal Pie. Parking is difficult in central Chartres, making a taxi particularly practical. The journey takes about 1h15 under normal conditions, slightly longer during rush hour on the urban section leaving Paris.",
        conseils:
          "The cathedral is open free of charge daily from 8:30am to 7:30pm. Tower visits (300-step climb) cost €9 and offer panoramic views over the city and Beauce. The crypt, one of Europe's largest, is visited with a guide (€5.50, departures at 11am, 2:15pm and 4:30pm). The labyrinth is accessible Fridays 10am-5pm when nave chairs are removed. 'Chartres en Lumières' runs every evening April to October (free): the illuminated cathedral is a magical spectacle not to be missed. Maison Picassiette, entirely decorated with faience mosaics by Raymond Isidore, is a unique and poetic place (admission €5). For lunch, Rue des Changes and Place Marceau offer good restaurants. The International Stained Glass Centre offers exhibitions and discovery workshops. Allow 3-4 hours for a complete visit of the cathedral and old town.",
        comparaisonTransport:
          "By train, Paris Montparnasse → Chartres takes about 1h10 by TER (ticket from €16, full fare €20). Trains run approximately hourly. Chartres station is 800 metres from the cathedral. By rental car, expect €50 per day plus €7 tolls and €12 fuel. BlaBlaCar offers rides from €7. By TaxiNeo taxi at €175, for 2 people the cost per person is about €88, more than the train but with door-to-door comfort and the option to combine with a visit to nearby Château de Maintenon. Round trip with waiting available from €300.",
        faq: [
          { question: "What is the price of a taxi Paris — Chartres?", answer: "The flat rate is €175–€210 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Paris — Chartres journey?", answer: "About 75 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "paris-deauville",
    from: "Paris",
    to: "Deauville",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 49.3583,
    toLng: 0.0743,
    distanceKm: 200,
    durationMin: 135,
    priceEstimate: "385 — 465 €",
    category: "ville-a-ville",
    prixMin: 385,
    prixMax: 465,
    prixVan: 610,
    dureeMax: 180,
    autoroute: "A13 / A132",
    peages: "~18 € (A13 + A132)",
    departSlug: "paris",
    arriveeSlug: "deauville",
    liensInternes: ["paris-honfleur", "paris-cabourg", "paris-etretat"],
    tags: ["tourisme", "plage", "normandie", "luxe"],
    hub: "paris",
    highlights: ["A13", "Pont de Normandie", "Planches de Deauville"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Deauville | 195 km, dès 375 € | TaxiNeo",
        metaDescription: "Via A13 en 2h15. Pont de Normandie et Planches de Deauville en chemin. Dépose porte-à-porte, bagages inclus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Paris → Deauville",
        heroSubtitle: "Votre transfert Paris → Deauville au prix fixe de 385 — 465 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Paris — Deauville pour un week-end chic sur la côte normande.",
        routeDescription: "L'itinéraire emprunte l'A13 direction Caen puis sortie Deauville.",
        introduction:
          "Deauville est une station balnéaire mythique de la Côte Fleurie en Normandie, dans le département du Calvados. Fondée en 1860 par le duc de Morny, demi-frère de Napoléon III, elle est rapidement devenue le lieu de villégiature favori de l'aristocratie et de la bourgeoisie parisienne. Aujourd'hui encore, Deauville conserve ce prestige avec ses hôtels de luxe comme le Normandy et le Royal Barrière, ses boutiques de créateurs sur la rue Eugène-Colas, et son casino emblématique face à la mer. Les Planches, cette promenade de bois longeant la plage, sont devenues un symbole de la ville et portent les noms de stars du cinéma américain en hommage au Festival du Film Américain qui s'y tient chaque septembre. L'hippodrome de Deauville-La Touques accueille certaines des courses les plus prestigieuses de France, notamment les ventes de yearlings qui attirent les propriétaires du monde entier. Se rendre à Deauville en taxi depuis Paris offre une liberté totale pour profiter du littoral normand à votre rythme, sans les contraintes des horaires de train.",
        itineraire:
          "Votre chauffeur TaxiNeo vous prend en charge à votre adresse parisienne et rejoint l'autoroute A13 par la porte d'Auteuil ou la porte de Saint-Cloud. L'A13, surnommée « l'autoroute de Normandie », traverse d'abord les Yvelines en longeant la forêt de Saint-Germain-en-Laye, puis les collines de l'Eure. Après Évreux, l'autoroute poursuit à travers les vastes plaines agricoles du Calvados. À hauteur de Dozulé, vous quittez l'A13 pour emprunter l'A132 en direction de Deauville-Trouville. La descente vers la côte offre les premiers aperçus de la mer et du paysage bocager normand. L'arrivée à Deauville se fait par le boulevard de la Mer, offrant une vue spectaculaire sur la plage et les élégantes villas qui bordent le front de mer. Votre chauffeur vous dépose à l'adresse exacte de votre choix, que ce soit votre hôtel, le casino ou directement aux Planches. Le trajet total prend environ 2h15 en conditions normales, mais peut atteindre 3h le vendredi soir ou les week-ends de juillet-août lors des grands départs.",
        conseils:
          "Les meilleurs moments pour visiter Deauville sont de mai à septembre. Le Festival du Cinéma Américain se tient début septembre et attire de nombreuses personnalités. Les Planches sont accessibles toute l'année et gratuitement. Le casino Barrière est ouvert tous les jours à partir de 10h (pièce d'identité obligatoire). Pour un déjeuner face à la mer, le Bar du Soleil sur les Planches est une institution. La plage de Deauville est l'une des rares plages de sable fin de Normandie. Prévoyez un coupe-vent même en été, car le vent marin peut être frais. Si vous visitez un week-end, profitez-en pour découvrir le marché couvert le samedi matin et le port de Trouville-sur-Mer juste de l'autre côté de la Touques, où vous pouvez acheter du poisson frais directement aux pêcheurs. Pour un séjour prolongé, demandez à votre chauffeur TaxiNeo un transfert aller simple et réservez le retour séparément selon vos disponibilités.",
        comparaisonTransport:
          "En train, le trajet Paris Saint-Lazare → Trouville-Deauville dure environ 2h00 (billet SNCF à partir de 25 € en Intercités, jusqu'à 45 € en période de pointe). Il faut ensuite rejoindre votre hôtel en taxi local ou à pied. En voiture de location, comptez environ 80 € pour le week-end plus 18 € de péages et environ 25 € de carburant. Le covoiturage BlaBlaCar propose des trajets à partir de 15 € par personne mais avec des horaires contraints. En taxi TaxiNeo à 385 €, le coût par personne pour 4 passagers revient à environ 96 €, plus cher que le train mais avec un service porte-à-porte, sans bagages à porter dans les gares et avec une flexibilité totale sur les horaires.",
        faq: [
          { question: "Quel est le prix d'un taxi Paris — Deauville ?", answer: "Le forfait est de 385 — 465 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Paris — Deauville ?", answer: "Environ 135 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Deauville | 195 km, from €375 | TaxiNeo",
        metaDescription: "Via A13, 2h15 ride. Pont de Normandie and Planches de Deauville along the way. Drop-off at your exact address. Faster and more direct than train or bus.",
        heroTitle: "Taxi Paris → Deauville",
        heroSubtitle: "Your Paris → Deauville transfer at a fixed price of €385–€465. Online booking, professional driver 24/7.",
        description: "Paris — Deauville transfer for a chic weekend on the Normandy coast.",
        routeDescription: "The route takes the A13 towards Caen then the Deauville exit.",
        introduction:
          "Deauville is a legendary seaside resort on the Côte Fleurie in Normandy, in the Calvados department. Founded in 1860 by the Duke of Morny, half-brother of Napoleon III, it quickly became the favourite holiday destination of Parisian aristocracy and bourgeoisie. Today, Deauville retains this prestige with luxury hotels like the Normandy and Royal Barrière, designer boutiques on Rue Eugène-Colas, and its iconic beachfront casino. Les Planches, the wooden boardwalk along the beach, have become a symbol of the town and bear the names of American cinema stars in tribute to the American Film Festival held every September. The Deauville-La Touques racecourse hosts some of France's most prestigious races, including yearling sales attracting owners from around the world. Travelling to Deauville by taxi from Paris offers complete freedom to enjoy the Norman coastline at your own pace, without train schedule constraints.",
        itineraire:
          "Your TaxiNeo driver picks you up at your Paris address and joins the A13 motorway via Porte d'Auteuil or Porte de Saint-Cloud. The A13, known as the 'Normandy motorway', first crosses the Yvelines along the Saint-Germain-en-Laye forest, then the hills of the Eure. After Évreux, the motorway continues through the vast agricultural plains of Calvados. At Dozulé, you leave the A13 for the A132 towards Deauville-Trouville. The descent to the coast offers first glimpses of the sea and the Norman bocage landscape. Arrival in Deauville is via Boulevard de la Mer, offering spectacular views of the beach and elegant seafront villas. Your driver drops you at your exact address, whether your hotel, the casino or directly at Les Planches. The total journey takes about 2h15 under normal conditions, but can reach 3h on Friday evenings or summer weekends during peak departures.",
        conseils:
          "The best times to visit Deauville are from May to September. The American Film Festival is held in early September and attracts many celebrities. Les Planches are accessible all year round and free of charge. The Barrière casino is open daily from 10am (ID required). For seaside lunch, the Bar du Soleil on Les Planches is an institution. Deauville beach is one of the few fine sand beaches in Normandy. Bring a windbreaker even in summer as the sea breeze can be cool. If visiting on a weekend, take the opportunity to explore the covered market on Saturday morning and Trouville-sur-Mer harbour just across the Touques river, where you can buy fresh fish directly from fishermen. For longer stays, ask your TaxiNeo driver for a one-way transfer and book the return separately according to your schedule.",
        comparaisonTransport:
          "By train, the Paris Saint-Lazare → Trouville-Deauville journey takes about 2 hours (SNCF ticket from €25 Intercités, up to €45 at peak times). You then need to reach your hotel by local taxi or on foot. By rental car, expect about €80 for the weekend plus €18 in tolls and about €25 in fuel. BlaBlaCar carpooling offers rides from €15 per person but with fixed schedules. By TaxiNeo taxi at €385, the cost per person for 4 passengers is about €96, more than the train but with door-to-door service, no luggage to carry through stations and complete schedule flexibility.",
        faq: [
          { question: "What is the price of a taxi Paris — Deauville?", answer: "The flat rate is €385–€465 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Paris — Deauville journey?", answer: "About 135 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "paris-honfleur",
    from: "Paris",
    to: "Honfleur",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 49.4185,
    toLng: 0.2327,
    distanceKm: 195,
    durationMin: 130,
    priceEstimate: "375 — 455 €",
    category: "ville-a-ville",
    prixMin: 375,
    prixMax: 455,
    prixVan: 595,
    dureeMax: 170,
    autoroute: "A13 / A29",
    peages: "~20 € (A13 + Pont de Normandie 5,80 €)",
    departSlug: "paris",
    arriveeSlug: "honfleur",
    liensInternes: ["paris-deauville", "paris-etretat", "paris-cabourg"],
    tags: ["tourisme", "normandie", "art", "port"],
    hub: "paris",
    highlights: ["A13", "Pont de Normandie", "Vieux Bassin"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Honfleur | 195 km, dès 375 € | TaxiNeo",
        metaDescription: "Via A13 en 2h10. Passage par Pont de Normandie et Vieux Bassin. Alternative directe au train ou au bus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Paris → Honfleur",
        heroSubtitle: "Votre transfert Paris → Honfleur au prix fixe de 375 — 455 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Paris — Honfleur, joyau de la côte normande et ses peintres impressionnistes.",
        routeDescription: "L'itinéraire emprunte l'A13 puis le Pont de Normandie.",
        introduction:
          "Honfleur est une cité maritime d'exception nichée sur la rive sud de l'estuaire de la Seine, dans le département du Calvados. Ce port millénaire a joué un rôle majeur dans l'histoire maritime française, servant de point de départ aux explorations vers le Canada au XVIe siècle. Mais c'est surtout comme berceau de l'impressionnisme que Honfleur est célèbre : Eugène Boudin, natif de la ville, y a fondé une école de peinture en plein air qui a attiré Monet, Courbet, Jongkind et bien d'autres artistes. Le Vieux Bassin, construit sous Colbert au XVIIe siècle, est encadré de hautes maisons étroites aux façades d'ardoise qui se reflètent dans l'eau calme du port. L'église Sainte-Catherine, unique en France avec sa structure entièrement en bois et son clocher séparé, témoigne du savoir-faire des charpentiers de marine. Les ruelles pavées de la vieille ville regorgent de galeries d'art, de restaurants gastronomiques et de boutiques artisanales. Rejoindre Honfleur en taxi depuis Paris permet de profiter pleinement du charme de cette ville sans se soucier du stationnement très limité en centre historique.",
        itineraire:
          "Le départ de Paris s'effectue par l'autoroute A13 en direction de Rouen-Caen. Après avoir traversé les paysages vallonnés de l'Eure et des plaines normandes, vous atteignez la bifurcation vers le Pont de Normandie à hauteur de Beuzeville. Le Pont de Normandie, inauguré en 1995, est un chef-d'œuvre d'ingénierie de 2 143 mètres de long qui enjambe majestueusement l'estuaire de la Seine. La traversée offre des panoramas spectaculaires sur Le Havre à gauche et la campagne normande à droite. Le péage du pont est de 5,80 € pour un véhicule léger. Après le pont, la route descend vers Honfleur par la D580. Votre chauffeur vous dépose au plus près de votre destination, sachant que le centre historique est en grande partie piétonnier. Le parking le plus proche du Vieux Bassin est celui du Bassin Carnot. En alternative, pour les voyageurs souhaitant éviter le péage du pont, l'itinéraire par l'A13 jusqu'à Pont-l'Évêque puis la D579 rallonge le trajet de 15 minutes mais offre une traversée charmante du Pays d'Auge.",
        conseils:
          "Honfleur est une destination agréable toute l'année, mais particulièrement belle au printemps et en automne lorsque la lumière est idéale pour les artistes et photographes. Le Vieux Bassin est le cœur de la visite et mérite au moins une heure de promenade. Le Musée Eugène Boudin (8 €) présente une collection remarquable de peintures impressionnistes et préimpressionnistes. L'église Sainte-Catherine est ouverte gratuitement et constitue un incontournable architectural. Pour déjeuner, la rue Haute offre d'excellents restaurants de fruits de mer — essayez les moules de bouchot ou le plateau de fruits de mer. La Lieutenance, ancienne porte fortifiée à l'entrée du port, offre un beau point de vue. Le marché se tient le samedi matin sur la place Sainte-Catherine. Le stationnement étant très limité et cher en centre-ville, le taxi est idéal pour éviter ce problème. Prévoyez 3 à 4 heures pour une visite complète de Honfleur.",
        comparaisonTransport:
          "Il n'existe pas de liaison ferroviaire directe Paris — Honfleur. En train, il faut aller jusqu'à Deauville-Trouville (2h, à partir de 25 €) puis prendre un bus (ligne 20, environ 30 min, 2,50 €) ou un taxi local (environ 35 €). Le trajet total porte-à-porte dépasse 3h. En voiture de location, comptez environ 70 € la journée plus 20 € de péages et 25 € d'essence, avec le stress du stationnement à Honfleur. Les excursions en car depuis Paris coûtent 90 à 130 € par personne. En taxi TaxiNeo à 375 €, pour 3-4 passagers, vous bénéficiez d'un transfert porte-à-porte direct en 2h10, sans correspondance ni souci de parking.",
        faq: [
          { question: "Quel est le prix d'un taxi Paris — Honfleur ?", answer: "Le forfait est de 375 — 455 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Paris — Honfleur ?", answer: "Environ 130 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Honfleur | 195 km, from €375 | TaxiNeo",
        metaDescription: "Via A13, 2h10 ride. Pont de Normandie and Vieux Bassin along the way. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Paris → Honfleur",
        heroSubtitle: "Your Paris → Honfleur transfer at a fixed price of €375–€455. Online booking, professional driver 24/7.",
        description: "Paris — Honfleur transfer, jewel of the Normandy coast and its Impressionist painters.",
        routeDescription: "The route takes the A13 then the Pont de Normandie.",
        introduction:
          "Honfleur is an exceptional maritime town nestled on the southern bank of the Seine estuary in the Calvados department. This thousand-year-old port played a major role in French maritime history, serving as a departure point for explorations to Canada in the 16th century. But it is above all as the birthplace of Impressionism that Honfleur is famous: Eugène Boudin, born in the town, founded an open-air painting school that attracted Monet, Courbet, Jongkind and many other artists. The Old Harbour, built under Colbert in the 17th century, is framed by tall narrow houses with slate facades reflecting in the calm port waters. Sainte-Catherine Church, unique in France with its entirely wooden structure and separate bell tower, showcases the skill of naval carpenters. The cobbled streets of the old town are filled with art galleries, gourmet restaurants and craft shops. Getting to Honfleur by taxi from Paris lets you fully enjoy this town's charm without worrying about the very limited parking in the historic centre.",
        itineraire:
          "Departure from Paris is via the A13 motorway towards Rouen-Caen. After crossing the rolling landscapes of the Eure and Norman plains, you reach the junction for the Pont de Normandie near Beuzeville. The Pont de Normandie, inaugurated in 1995, is an engineering masterpiece 2,143 metres long that majestically spans the Seine estuary. The crossing offers spectacular panoramas of Le Havre on the left and the Norman countryside on the right. The bridge toll is €5.80 for a light vehicle. After the bridge, the road descends to Honfleur via the D580. Your driver drops you as close as possible to your destination, noting that the historic centre is largely pedestrianised. The nearest car park to the Old Harbour is the Bassin Carnot car park. Alternatively, for travellers wishing to avoid the bridge toll, the route via the A13 to Pont-l'Évêque then the D579 adds 15 minutes but offers a charming crossing of the Pays d'Auge.",
        conseils:
          "Honfleur is a pleasant destination year-round but particularly beautiful in spring and autumn when the light is ideal for artists and photographers. The Old Harbour is the heart of any visit and deserves at least an hour's stroll. The Eugène Boudin Museum (€8) houses a remarkable collection of Impressionist and pre-Impressionist paintings. Sainte-Catherine Church is free to visit and an architectural must-see. For lunch, Rue Haute offers excellent seafood restaurants — try the bouchot mussels or seafood platter. La Lieutenance, the old fortified gate at the harbour entrance, offers fine views. The market is held Saturday morning on Place Sainte-Catherine. As parking is very limited and expensive in the town centre, a taxi is ideal to avoid this problem. Allow 3 to 4 hours for a complete visit of Honfleur.",
        comparaisonTransport:
          "There is no direct Paris — Honfleur rail link. By train, you must go to Deauville-Trouville (2h, from €25) then take a bus (line 20, about 30 min, €2.50) or local taxi (about €35). Total door-to-door time exceeds 3h. By rental car, expect about €70 per day plus €20 in tolls and €25 in fuel, with the stress of parking in Honfleur. Coach excursions from Paris cost €90 to €130 per person. By TaxiNeo taxi at €375, for 3-4 passengers you get a direct door-to-door transfer in 2h10, with no connections or parking worries.",
        faq: [
          { question: "What is the price of a taxi Paris — Honfleur?", answer: "The flat rate is €375–€455 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Paris — Honfleur journey?", answer: "About 130 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "nice-cannes",
    from: "Nice",
    to: "Cannes",
    fromLat: 43.7102,
    fromLng: 7.262,
    toLat: 43.5528,
    toLng: 7.0174,
    distanceKm: 33,
    durationMin: 30,
    priceEstimate: "65 — 80 €",
    category: "ville-a-ville",
    prixMin: 65,
    prixMax: 80,
    prixVan: 105,
    dureeMax: 55,
    autoroute: "A8 (La Provençale)",
    peages: "~3 € (section Nice–Cannes)",
    departSlug: "nice",
    arriveeSlug: "cannes",
    liensInternes: ["/trajet/nice-antibes", "/trajet/nice-mougins", "/trajet/nice-mandelieu-la-napoule"],
    tags: ["cannes", "croisette", "festival", "cinéma", "luxe"],
    hub: "nice",
    highlights: ["A8", "La Croisette", "Festival de Cannes"],
    i18n: {
      fr: {
        metaTitle: "Taxi Nice → Cannes | forfait dès 65 €, 30 min | TaxiNeo",
        metaDescription: "Via A8 en 30 min. La Croisette et Festival de Cannes en chemin. Alternative directe au train ou au bus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Nice → Cannes",
        heroSubtitle: "Votre transfert Nice → Cannes au prix fixe de 65 — 80 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Nice — Cannes le long de la Côte d'Azur.",
        routeDescription: "Le trajet emprunte l'A8 en longeant la côte méditerranéenne.",
        introduction:
          "Cannes, mondialement connue pour son Festival du Film, est l'une des villes les plus glamour de la Côte d'Azur. La célèbre Croisette, boulevard bordé de palmiers longeant la baie de Cannes, aligne palaces mythiques comme le Carlton, le Martinez et le Majestic. Le Palais des Festivals, où montent les marches les stars chaque mois de mai, est devenu un symbole du cinéma mondial. Au-delà du faste, Cannes offre un charmant vieux quartier, le Suquet, perché sur une colline avec vue panoramique sur la baie et les îles de Lérins. Le port Canto et le Vieux Port accueillent des centaines de yachts. Les îles de Lérins, accessibles en 15 minutes de bateau, offrent un havre de nature avec le monastère fortifié de l'île Saint-Honorat et le Fort Royal de l'île Sainte-Marguerite où fut emprisonné le mystérieux Masque de Fer. Cannes accueille aussi le MIPIM, le MIPCOM, le Festival de la Publicité et d'innombrables congrès qui drainent des professionnels du monde entier tout au long de l'année.",
        itineraire:
          "L'itinéraire le plus rapide emprunte l'autoroute A8 direction Aix-en-Provence. Depuis Nice, passez le péage de Saint-Isidore, traversez la plaine du Var puis les collines de Mougins. Prenez la sortie 42 Cannes/Mougins et descendez vers la Croisette par le boulevard Carnot. L'ensemble du trajet autoroutier est fluide en dehors des heures de pointe. L'alternative côtière par la D6098 passe par Cagnes-sur-Mer, Villeneuve-Loubet, Antibes et Juan-les-Pins avant d'arriver à Cannes par le boulevard du Midi. Ce parcours longeant la mer est magnifique mais prend 50 à 60 minutes en raison de la traversée de plusieurs centres-villes. Pour le quartier de la Bocca (ouest de Cannes), la sortie 41 de l'A8 est plus directe. Le chauffeur adapte l'itinéraire selon votre destination exacte dans Cannes.",
        conseils:
          "Pendant le Festival du Film (mai), la circulation dans Cannes est extrêmement dense et les tarifs hôteliers explosent. Réservez votre taxi plusieurs jours à l'avance. Le même conseil s'applique pour le MIPIM (mars) et les Lions de Cannes (juin). En été, évitez les départs entre 17h et 19h quand l'A8 est saturée. Le stationnement à Cannes est hors de prix, surtout près de la Croisette : le taxi est la solution la plus économique et pratique. Si vous visitez les îles de Lérins, demandez au chauffeur de vous déposer au Vieux Port où partent les navettes. Pour un dîner sur la Croisette, un retour en taxi vous permet de profiter pleinement de la soirée sans contrainte. La Croisette est piétonne certains week-ends d'été : le chauffeur vous déposera au plus près.",
        comparaisonTransport:
          "Le TER Nice–Cannes coûte environ 7,50 € et met 30 à 40 minutes. Le bus Zou! (ligne 200) prend 1h30 pour 1,50 € avec de nombreux arrêts. En voiture de location, le péage (3 €), l'essence et le stationnement cannois (3 à 4 €/h en centre-ville, 30 à 40 €/jour dans les parkings souterrains) rendent le taxi très compétitif. Le taxi vous dépose devant votre hôtel ou directement sur la Croisette en 30 minutes, sans stress.",
        faq: [
          { question: "Quel est le prix d'un taxi Nice — Cannes ?", answer: "Le forfait est de 65 — 80 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Nice — Cannes ?", answer: "Environ 30 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Nice → Cannes | Fixed price from €65 | TaxiNeo",
        metaDescription: "Via A8, 30 min ride. La Croisette and Festival de Cannes along the way. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Nice → Cannes",
        heroSubtitle: "Your Nice → Cannes transfer at a fixed price of €65–€80. Online booking, professional driver 24/7.",
        description: "Nice — Cannes transfer along the French Riviera.",
        routeDescription: "The route takes the A8 along the Mediterranean coast.",
        introduction:
          "Cannes, world-renowned for its Film Festival, is one of the most glamorous cities on the French Riviera. The famous Croisette, a palm-lined boulevard along the Bay of Cannes, is home to legendary hotels such as the Carlton, the Martinez and the Majestic. The Palais des Festivals, where stars walk the red carpet every May, has become a symbol of world cinema. Beyond the glitz, Cannes offers a charming old quarter, Le Suquet, perched on a hill with panoramic views of the bay and the Lérins Islands. Port Canto and the Old Port host hundreds of yachts. The Lérins Islands, accessible in 15 minutes by boat, offer a haven of nature with the fortified monastery on Île Saint-Honorat and the Fort Royal on Île Sainte-Marguerite where the mysterious Man in the Iron Mask was imprisoned. Cannes also hosts MIPIM, MIPCOM, the Advertising Festival and countless congresses attracting professionals from around the world throughout the year.",
        itineraire:
          "The fastest route takes the A8 motorway towards Aix-en-Provence. From Nice, pass the Saint-Isidore toll, cross the Var plain then the Mougins hills. Take exit 42 Cannes/Mougins and descend towards the Croisette via Boulevard Carnot. The motorway journey is smooth outside peak hours. The coastal alternative via the D6098 passes through Cagnes-sur-Mer, Villeneuve-Loubet, Antibes and Juan-les-Pins before arriving in Cannes via Boulevard du Midi. This seaside route is beautiful but takes 50 to 60 minutes due to passing through several town centres. For the La Bocca district (west Cannes), exit 41 on the A8 is more direct. The driver adapts the route based on your exact destination in Cannes.",
        conseils:
          "During the Film Festival (May), traffic in Cannes is extremely heavy and hotel rates soar. Book your taxi several days in advance. The same applies for MIPIM (March) and the Cannes Lions (June). In summer, avoid departures between 5pm and 7pm when the A8 is saturated. Parking in Cannes is very expensive, especially near the Croisette: a taxi is the most economical and practical solution. If visiting the Lérins Islands, ask the driver to drop you at the Old Port where shuttles depart. For dinner on the Croisette, a return taxi lets you fully enjoy the evening without constraints. The Croisette is pedestrianised on some summer weekends: the driver will drop you as close as possible.",
        comparaisonTransport:
          "The TER train from Nice to Cannes costs about €7.50 and takes 30 to 40 minutes. The Zou! bus (line 200) takes 1h30 for €1.50 with many stops. With a rental car, the toll (€3), fuel and Cannes parking (€3 to €4/hour in town, €30 to €40/day in underground car parks) make a taxi very competitive. A taxi drops you in front of your hotel or right on the Croisette in 30 minutes, stress-free.",
        faq: [
          { question: "What is the price of a taxi Nice — Cannes?", answer: "The flat rate is €65–€80 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Nice — Cannes journey?", answer: "About 30 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "nice-grasse",
    from: "Nice",
    to: "Grasse",
    fromLat: 43.7102,
    fromLng: 7.262,
    toLat: 43.6584,
    toLng: 6.9231,
    distanceKm: 40,
    durationMin: 40,
    priceEstimate: "80 — 95 €",
    category: "ville-a-ville",
    prixMin: 80,
    prixMax: 95,
    prixVan: 125,
    dureeMax: 60,
    autoroute: "A8 puis sortie 42, D6085",
    peages: "~3 € (section Nice–Mougins via A8)",
    departSlug: "nice",
    arriveeSlug: "grasse",
    liensInternes: ["/trajet/nice-cannes", "/trajet/nice-mougins", "/trajet/nice-vence"],
    tags: ["grasse", "parfum", "fragonard", "molinard", "galimard", "provence"],
    hub: "nice",
    highlights: ["Pénétrante Grasse", "Capitale du parfum"],
    i18n: {
      fr: {
        metaTitle: "Taxi Nice → Grasse | forfait dès 80 €, 40 min | TaxiNeo",
        metaDescription: "Trajet direct en 40 min. Pénétrante Grasse et Capitale du parfum en chemin. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Nice → Grasse",
        heroSubtitle: "Votre transfert Nice → Grasse au prix fixe de 80 — 95 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Nice — Grasse, capitale mondiale du parfum.",
        routeDescription: "Le trajet emprunte la pénétrante de Grasse à travers l'arrière-pays niçois.",
        introduction:
          "Grasse est unanimement reconnue comme la capitale mondiale du parfum. Depuis le XVIIIe siècle, cette ville perchée à 350 mètres d'altitude dans l'arrière-pays cannois concentre les plus grands noms de la parfumerie : Fragonard, Molinard et Galimard ouvrent leurs portes aux visiteurs pour des ateliers olfactifs fascinants où l'on peut créer son propre parfum. Le savoir-faire grassois en matière de parfumerie est inscrit au patrimoine immatériel de l'UNESCO depuis 2018. Mais Grasse ne se résume pas aux parfums : sa vieille ville médiévale aux ruelles étroites et aux façades ocre abrite la cathédrale Notre-Dame-du-Puy, qui contient des œuvres de Rubens et de Fragonard le peintre, natif de la ville. Le Musée International de la Parfumerie retrace 4000 ans d'histoire des senteurs. Les champs de roses, de jasmin et de tubéreuses qui entourent la ville offrent un spectacle enchanteur au printemps. Grasse domine la plaine de Cannes avec une vue exceptionnelle sur la mer, les îles de Lérins et le massif de l'Estérel.",
        itineraire:
          "Depuis Nice, le trajet emprunte l'autoroute A8 direction Cannes/Aix-en-Provence. Après le péage de Saint-Isidore, vous traversez la plaine du Var. Prenez la sortie 42 direction Grasse/Mougins. La D6085 (ancienne route Napoléon) monte progressivement vers Grasse à travers les collines boisées de Mouans-Sartoux et le Pré-du-Lac. L'arrivée sur Grasse offre un panorama spectaculaire sur la mer et les Préalpes. En alternative, la route par la Pénétrante de Grasse (voie rapide gratuite) depuis Cannes-la-Bocca est parfois plus fluide. Pour les amateurs de paysages, la D2085 via le col de l'Écre offre des vues plongeantes sur les gorges du Loup mais rallonge le trajet de 20 minutes. Le chauffeur vous déposera au plus près de la vieille ville, dont l'accès en voiture est limité.",
        conseils:
          "La vieille ville de Grasse est en grande partie piétonne : le chauffeur vous dépose à l'entrée la plus proche de votre destination (place du Cours, place aux Aires ou parking Notre-Dame des Fleurs). Prévoyez une demi-journée pour visiter une parfumerie et la vieille ville. Les ateliers de création de parfum chez Fragonard, Molinard ou Galimard se réservent à l'avance, surtout en été. En mai-juin, les champs de roses de Grasse sont en fleur : un spectacle et des parfums inoubliables. Le marché provençal de la place aux Aires a lieu tous les matins et est l'un des plus authentiques de la région. Grasse est plus fraîche que le littoral (2 à 3 °C de moins) : prévoyez une petite veste le soir. Combinez Grasse avec Mougins (village gastronomique à 10 km) pour une journée parfaite.",
        comparaisonTransport:
          "Le bus Zou! 600 relie Nice à Grasse en environ 1h30 pour 1,50 €, avec un arrêt à Cannes. Il n'y a pas de liaison ferroviaire directe Nice–Grasse (il faut changer à Cannes, trajet total 1h15, environ 10 €). En voiture, le péage A8 coûte 3 €, plus l'essence et le stationnement (gratuit en périphérie, payant en centre). Le taxi est la solution la plus confortable pour une excursion d'une journée depuis Nice, avec la flexibilité de combiner plusieurs visites.",
        faq: [
          { question: "Quel est le prix d'un taxi Nice — Grasse ?", answer: "Le forfait est de 80 — 95 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Nice — Grasse ?", answer: "Environ 40 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Nice → Grasse | Fixed price from €80 | TaxiNeo",
        metaDescription: "Direct 40 min ride. Pénétrante Grasse and Capitale du parfum along the way. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Nice → Grasse",
        heroSubtitle: "Your Nice → Grasse transfer at a fixed price of €80–€95. Online booking, professional driver 24/7.",
        description: "Nice — Grasse transfer, the world capital of perfume.",
        routeDescription: "The route takes the Grasse expressway through the Nice hinterland.",
        introduction:
          "Grasse is universally recognised as the world capital of perfume. Since the 18th century, this town perched at 350 metres altitude in the Cannes hinterland has been home to the greatest names in perfumery: Fragonard, Molinard and Galimard open their doors to visitors for fascinating olfactory workshops where you can create your own perfume. Grasse's perfumery expertise has been listed as UNESCO Intangible Cultural Heritage since 2018. But Grasse is more than perfume: its medieval old town with narrow alleys and ochre facades houses the Notre-Dame-du-Puy cathedral, containing works by Rubens and the painter Fragonard, a native of the town. The International Museum of Perfumery traces 4,000 years of fragrance history. The fields of roses, jasmine and tuberose surrounding the town offer an enchanting spectacle in spring. Grasse overlooks the Cannes plain with exceptional views of the sea, the Lérins Islands and the Estérel massif.",
        itineraire:
          "From Nice, the route takes the A8 motorway towards Cannes/Aix-en-Provence. After the Saint-Isidore toll, you cross the Var plain. Take exit 42 towards Grasse/Mougins. The D6085 (former Napoleon Road) climbs gradually towards Grasse through the wooded hills of Mouans-Sartoux and Pré-du-Lac. The arrival in Grasse offers a spectacular panorama of the sea and the Pre-Alps. Alternatively, the route via the Pénétrante de Grasse (free dual carriageway) from Cannes-la-Bocca is sometimes more fluid. For scenic enthusiasts, the D2085 via the Col de l'Écre offers sweeping views of the Loup gorges but adds 20 minutes. The driver will drop you as close as possible to the old town, where car access is limited.",
        conseils:
          "Grasse's old town is largely pedestrianised: the driver drops you at the nearest entrance to your destination (Place du Cours, Place aux Aires or Notre-Dame des Fleurs car park). Allow half a day to visit a perfumery and the old town. Perfume creation workshops at Fragonard, Molinard or Galimard should be booked in advance, especially in summer. In May-June, Grasse's rose fields are in bloom: an unforgettable sight and scent. The Provençal market at Place aux Aires takes place every morning and is one of the most authentic in the region. Grasse is cooler than the coast (2 to 3 °C lower): bring a light jacket for the evening. Combine Grasse with Mougins (a gourmet village 10 km away) for a perfect day out.",
        comparaisonTransport:
          "The Zou! 600 bus connects Nice to Grasse in about 1h30 for €1.50, with a stop in Cannes. There is no direct Nice–Grasse train (you must change at Cannes, total journey 1h15, about €10). By car, the A8 toll costs €3, plus fuel and parking (free on the outskirts, paid in the centre). A taxi is the most comfortable solution for a day trip from Nice, with the flexibility to combine several visits.",
        faq: [
          { question: "What is the price of a taxi Nice — Grasse?", answer: "The flat rate is €80–€95 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Nice — Grasse journey?", answer: "About 40 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "lyon-grenoble",
    from: "Lyon",
    to: "Grenoble",
    fromLat: 45.764,
    fromLng: 4.8357,
    toLat: 45.1885,
    toLng: 5.7245,
    distanceKm: 115,
    durationMin: 75,
    priceEstimate: "220 — 270 €",
    category: "ville-a-ville",
    prixMin: 220,
    prixMax: 270,
    prixVan: 350,
    dureeMax: 100,
    autoroute: "A43 puis A48",
    peages: "~8,50 € (inclus dans le prix)",
    departSlug: "lyon",
    arriveeSlug: "grenoble",
    liensInternes: ["grenoble-lyon", "lyon-chambery", "lyon-alpe-d-huez", "lyon-les-deux-alpes"],
    tags: ["ville-a-ville", "alpes", "A48", "chartreuse"],
    hub: "lyon",
    highlights: ["A48", "Massif de la Chartreuse", "Alpes"],
    i18n: {
      fr: {
        metaTitle: "Taxi Lyon → Grenoble | 110 km, dès 210 € | TaxiNeo",
        metaDescription: "Via A48 en 1h15. Passage par Massif de la Chartreuse et Alpes. Alternative directe au train ou au bus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Lyon → Grenoble",
        heroSubtitle: "Votre transfert Lyon → Grenoble au prix fixe de 220 — 270 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Lyon — Grenoble, porte des Alpes françaises.",
        routeDescription: "L'itinéraire emprunte l'A48 à travers le massif de la Chartreuse.",
        introduction:
          "Grenoble, surnommée la capitale des Alpes, est une métropole dynamique nichée entre trois massifs montagneux : la Chartreuse, le Vercors et Belledonne. Le trajet depuis Lyon est l'un des axes les plus empruntés de la région, tant par les professionnels que par les touristes se rendant dans les stations de ski des Alpes du Nord. Grenoble accueille de nombreux centres de recherche, des universités réputées et un tissu économique orienté vers les nouvelles technologies et l'industrie de pointe. Le taxi Lyon — Grenoble est particulièrement apprécié des voyageurs arrivant à l'aéroport Lyon-Saint Exupéry ou à la gare Part-Dieu qui souhaitent rejoindre Grenoble sans les contraintes du train ou de la location de voiture. TaxiNeo propose un service porte-à-porte avec un tarif fixe garanti, sans surprise liée aux péages ou au trafic. Nos chauffeurs professionnels connaissent parfaitement cet itinéraire et les alternatives en cas de perturbation sur l'A48.",
        itineraire:
          "Le parcours débute dans Lyon, généralement depuis le quartier de la Part-Dieu, la Presqu'île ou le secteur de Perrache. Le chauffeur rejoint rapidement le périphérique Est (boulevard Laurent Bonnevay) ou emprunte le tunnel de Fourvière pour accéder à l'A43 en direction de Chambéry. L'autoroute traverse d'abord la plaine de l'Est lyonnais, passant par Saint-Priest et l'Isle-d'Abeau. À l'échangeur de Bourgoin-Jallieu, le trajet bifurque vers l'A48 direction Grenoble. On longe alors le massif de la Chartreuse par sa face ouest, traversant Voiron, ville connue pour sa liqueur de Chartreuse. Le passage de la cluse de Voreppe marque l'entrée dans le sillon alpin. La descente vers Grenoble est spectaculaire, avec le panorama sur la chaîne de Belledonne enneigée en hiver et le Vercors à l'ouest. L'arrivée à Grenoble se fait par l'A480, autoroute urbaine qui permet de rejoindre le centre-ville, la gare, le campus universitaire ou les quartiers sud. Le péage total sur ce trajet est d'environ 8,50 €, inclus dans le tarif TaxiNeo.",
        conseils:
          "Pour votre trajet Lyon — Grenoble, privilégiez les départs en dehors des heures de pointe. L'A43 à la sortie de Lyon et la cluse de Voreppe sont deux points de congestion fréquents, surtout le vendredi soir et les départs en vacances scolaires. Si vous voyagez en hiver pour rejoindre une station de ski au-delà de Grenoble (Alpe d'Huez, Les Deux Alpes, Chamrousse), votre chauffeur peut vous déposer directement en station. Pensez à préciser vos besoins en espace bagages lors de la réservation, surtout si vous transportez des équipements de ski. Nos véhicules sont équipés de pneus hiver de novembre à mars. Pour les voyageurs d'affaires, le trajet d'1h15 peut être mis à profit grâce au Wi-Fi embarqué et aux prises de recharge. Grenoble étant une ville en zone à faibles émissions (ZFE), nos véhicules disposent tous de la vignette Crit'Air nécessaire pour circuler sans restriction.",
        comparaisonTransport:
          "Le TER Lyon — Grenoble met environ 1h30 pour un billet à partir de 19 €, avec une fréquence d'un train toutes les heures environ. Le bus Ouibus/FlixBus propose des tarifs dès 9 €, mais le trajet dure 1h45 à 2h. BlaBlaCar affiche des prix entre 8 € et 15 € par passager. En voiture personnelle, comptez environ 15 € d'essence et 8,50 € de péage, soit 23,50 € hors stationnement à Grenoble (souvent difficile et coûteux). Le taxi TaxiNeo à 220 — 270 € pour 1 à 4 passagers offre le confort absolu du porte-à-porte, sans se soucier du stationnement ni des correspondances. Pour 3 ou 4 passagers, le coût par personne (37 à 63 €) reste raisonnable au regard du service premium proposé.",
        faq: [
          { question: "Quel est le prix d'un taxi Lyon — Grenoble ?", answer: "Le forfait est de 220 — 270 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Lyon — Grenoble ?", answer: "Environ 75 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Lyon → Grenoble | 110 km, from €210 | TaxiNeo",
        metaDescription: "Via A48, 1h15 ride. Massif de la Chartreuse and Alpes along the way. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Lyon → Grenoble",
        heroSubtitle: "Your Lyon → Grenoble transfer at a fixed price of €220–€270. Online booking, professional driver 24/7.",
        description: "Lyon — Grenoble transfer, gateway to the French Alps.",
        routeDescription: "The route takes the A48 through the Chartreuse massif.",
        introduction:
          "Grenoble, nicknamed the Capital of the Alps, is a dynamic metropolis nestled between three mountain ranges: the Chartreuse, the Vercors and Belledonne. The journey from Lyon is one of the region's busiest routes, used by professionals and tourists heading to the Northern Alps ski resorts alike. Grenoble hosts numerous research centres, renowned universities and an economy focused on new technologies and cutting-edge industry. The Lyon — Grenoble taxi is particularly popular with travellers arriving at Lyon-Saint Exupéry airport or Part-Dieu station who wish to reach Grenoble without the constraints of trains or car hire. TaxiNeo offers a door-to-door service with a guaranteed fixed rate, with no surprises related to tolls or traffic. Our professional drivers know this route perfectly and the alternatives in case of disruption on the A48.",
        itineraire:
          "The journey begins in Lyon, typically from the Part-Dieu district, the Presqu'île or the Perrache area. The driver quickly reaches the eastern ring road (boulevard Laurent Bonnevay) or takes the Fourvière tunnel to access the A43 towards Chambéry. The motorway first crosses the eastern Lyon plain, passing through Saint-Priest and l'Isle-d'Abeau. At the Bourgoin-Jallieu interchange, the route branches towards the A48 direction Grenoble. You then follow the western face of the Chartreuse massif, passing through Voiron, a town famous for its Chartreuse liqueur. The Voreppe gorge marks the entrance to the Alpine corridor. The descent towards Grenoble is spectacular, with panoramic views of the snow-covered Belledonne range in winter and the Vercors to the west. Arrival in Grenoble is via the A480 urban motorway to reach the city centre, station, university campus or southern districts. The total toll on this route is approximately €8.50, included in the TaxiNeo fare.",
        conseils:
          "For your Lyon — Grenoble journey, favour departures outside rush hours. The A43 leaving Lyon and the Voreppe gorge are two frequent congestion points, especially on Friday evenings and school holiday departures. If you are travelling in winter to reach a ski resort beyond Grenoble (Alpe d'Huez, Les Deux Alpes, Chamrousse), your driver can drop you directly at the resort. Remember to specify your luggage space needs when booking, especially if carrying ski equipment. Our vehicles are fitted with winter tyres from November to March. For business travellers, the 1h15 journey can be productive thanks to onboard Wi-Fi and charging ports. As Grenoble is a low-emission zone (ZFE), all our vehicles have the required Crit'Air sticker to circulate without restriction.",
        comparaisonTransport:
          "The TER Lyon — Grenoble takes about 1h30 for a ticket from €19, with roughly one train per hour. Ouibus/FlixBus offers fares from €9, but the journey takes 1h45 to 2h. BlaBlaCar lists prices between €8 and €15 per passenger. By personal car, budget around €15 for fuel and €8.50 for tolls, totalling €23.50 excluding parking in Grenoble (often difficult and expensive). The TaxiNeo taxi at €220–€270 for 1 to 4 passengers offers absolute door-to-door comfort, without worrying about parking or connections. For 3 or 4 passengers, the cost per person (€37 to €63) remains reasonable given the premium service offered.",
        faq: [
          { question: "What is the price of a taxi Lyon — Grenoble?", answer: "The flat rate is €220–€270 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Lyon — Grenoble journey?", answer: "About 75 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "lyon-saint-etienne",
    from: "Lyon",
    to: "Saint-Étienne",
    fromLat: 45.764,
    fromLng: 4.8357,
    toLat: 45.4397,
    toLng: 4.3872,
    distanceKm: 62,
    durationMin: 50,
    priceEstimate: "120 — 145 €",
    category: "ville-a-ville",
    prixMin: 120,
    prixMax: 145,
    prixVan: 190,
    dureeMax: 75,
    autoroute: "A47",
    peages: "Gratuit (A47 sans péage)",
    departSlug: "lyon",
    arriveeSlug: "saint-etienne",
    liensInternes: ["saint-etienne-lyon", "lyon-grenoble", "lyon-clermont-ferrand"],
    tags: ["ville-a-ville", "rhone-alpes", "A47", "sans-peage"],
    hub: "lyon",
    highlights: ["A47", "Pilat", "Design"],
    i18n: {
      fr: {
        metaTitle: "Taxi Lyon → Saint-Étienne | 60 km, dès 115 € | TaxiNeo",
        metaDescription: "Itinéraire A47, environ 50 min. Pilat et Design sur le parcours. Dépose porte-à-porte, bagages inclus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Lyon → Saint-Étienne",
        heroSubtitle: "Votre transfert Lyon → Saint-Étienne au prix fixe de 120 — 145 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Lyon — Saint-Étienne, ville UNESCO de design.",
        routeDescription: "Le trajet emprunte l'A47 en longeant le massif du Pilat.",
        introduction:
          "Lyon et Saint-Étienne forment un binôme urbain unique en France. Capitale des Gaules d'un côté, cité du design de l'autre, ces deux métropoles partagent une histoire industrielle commune et une complémentarité économique remarquable. Chaque jour, des milliers de navetteurs, professionnels et visiteurs effectuent ce trajet pour des réunions d'affaires, des événements sportifs au stade Geoffroy-Guichard ou des visites culturelles à la Cité du Design. Le taxi reste la solution la plus confortable pour ce trajet, surtout lorsque l'on voyage avec des bagages ou en groupe. Contrairement au TER qui impose de rejoindre la gare de Part-Dieu ou Perrache, le taxi vous prend en charge à votre adresse exacte à Lyon et vous dépose directement à destination à Saint-Étienne, sans rupture de charge ni attente sur le quai. TaxiNeo propose un tarif fixe garanti pour ce trajet, sans surprise liée au trafic ou aux conditions météorologiques.",
        itineraire:
          "Le parcours débute généralement dans le centre de Lyon, que vous partiez de la Presqu'île, du quartier de la Part-Dieu ou de tout autre point de la métropole. Le chauffeur rejoint rapidement le tunnel de Fourvière ou le périphérique sud pour accéder à l'A47 en direction de Saint-Étienne. L'autoroute longe le Rhône jusqu'à Givors, puis s'engage dans la vallée du Gier, un corridor naturel entre les monts du Lyonnais et le massif du Pilat. On traverse successivement les communes de Rive-de-Gier, connue pour son patrimoine verrier, puis Saint-Chamond, ancienne capitale de la tresse et du lacet. L'arrivée à Saint-Étienne se fait par le quartier de Terrenoire ou par l'échangeur de la Métare selon votre destination finale. Le trajet est entièrement gratuit en péage, ce qui constitue un avantage notable par rapport à d'autres axes autoroutiers de la région. En conditions normales, comptez 50 minutes ; aux heures de pointe, notamment le matin entre 7h30 et 9h00, le trajet peut s'allonger jusqu'à 75 minutes en raison des ralentissements à Givors et Rive-de-Gier.",
        conseils:
          "Pour optimiser votre trajet Lyon — Saint-Étienne, nous recommandons de privilégier les départs avant 7h00 ou après 9h30 le matin, et avant 16h30 ou après 19h00 le soir. L'A47 est en effet l'une des autoroutes les plus saturées de France aux heures de pointe, avec des bouchons récurrents entre Givors et Rive-de-Gier. Si vous voyagez pour un match au stade Geoffroy-Guichard, pensez à réserver votre taxi retour à l'avance car la demande est très forte après les rencontres de l'AS Saint-Étienne. Pour les déplacements professionnels, sachez que nos chauffeurs connaissent parfaitement les zones d'activité de Saint-Étienne (Technopôle, Châteaucreux, Monthieu) et peuvent vous déposer directement devant votre lieu de rendez-vous. Nos véhicules disposent du Wi-Fi et de prises USB pour que vous puissiez travailler pendant le trajet. En hiver, soyez vigilant : la vallée du Gier peut être sujette au verglas, mais nos chauffeurs sont équipés de pneus hiver pour garantir votre sécurité.",
        comparaisonTransport:
          "Le TER Lyon — Saint-Étienne coûte environ 12,40 € et met 45 minutes, mais impose de se rendre à la gare et d'attendre le prochain départ. BlaBlaCar propose des trajets entre 5 € et 8 €, mais avec des horaires peu flexibles et aucune garantie de ponctualité. En voiture personnelle, le trajet revient à environ 8 € d'essence (diesel) sans péage. Le taxi TaxiNeo à 120 — 145 € (partageable entre 1 à 4 passagers) offre le confort du porte-à-porte, la flexibilité horaire totale et la certitude d'arriver à l'heure. Pour 2 à 4 personnes voyageant ensemble, le coût par personne (22 à 45 €) devient très compétitif face au train, surtout en ajoutant le coût d'un taxi ou VTC pour rejoindre la gare.",
        faq: [
          { question: "Quel est le prix d'un taxi Lyon — Saint-Étienne ?", answer: "Le forfait est de 120 — 145 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Lyon — Saint-Étienne ?", answer: "Environ 50 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Lyon → Saint-Étienne | 60 km, from €115 | TaxiNeo",
        metaDescription: "Direct route via A47, 50 min. Pilat and Design along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Lyon → Saint-Étienne",
        heroSubtitle: "Your Lyon → Saint-Étienne transfer at a fixed price of €120–€145. Online booking, professional driver 24/7.",
        description: "Lyon — Saint-Étienne transfer, UNESCO City of Design.",
        routeDescription: "The route takes the A47 along the Pilat massif.",
        introduction:
          "Lyon and Saint-Étienne form a unique urban duo in France. The Capital of the Gauls on one side, the City of Design on the other, these two metropolises share a common industrial history and remarkable economic complementarity. Every day, thousands of commuters, professionals and visitors make this journey for business meetings, sporting events at Geoffroy-Guichard stadium, or cultural visits to the Cité du Design. A taxi remains the most comfortable solution for this trip, especially when travelling with luggage or in a group. Unlike the TER train which requires getting to Part-Dieu or Perrache station, a taxi picks you up at your exact address in Lyon and drops you directly at your destination in Saint-Étienne, with no transfers or platform waiting. TaxiNeo offers a guaranteed fixed rate for this route, with no surprises due to traffic or weather conditions.",
        itineraire:
          "The journey typically begins in central Lyon, whether you are departing from the Presqu'île, the Part-Dieu district, or any other point in the metropolitan area. The driver quickly reaches the Fourvière tunnel or the southern ring road to access the A47 towards Saint-Étienne. The motorway follows the Rhône to Givors, then enters the Gier Valley, a natural corridor between the Lyonnais hills and the Pilat massif. You pass through Rive-de-Gier, known for its glass-making heritage, then Saint-Chamond, the former capital of braid and lace. Arrival in Saint-Étienne is via the Terrenoire district or the Métare interchange depending on your final destination. The entire route is toll-free, which is a notable advantage over other regional motorways. Under normal conditions, allow 50 minutes; during rush hours, particularly between 7:30 and 9:00 AM, the journey can extend to 75 minutes due to slowdowns at Givors and Rive-de-Gier.",
        conseils:
          "To optimise your Lyon — Saint-Étienne journey, we recommend departing before 7:00 AM or after 9:30 AM in the morning, and before 4:30 PM or after 7:00 PM in the evening. The A47 is one of France's most congested motorways during rush hours, with recurring traffic jams between Givors and Rive-de-Gier. If you are travelling for a match at Geoffroy-Guichard stadium, remember to book your return taxi in advance as demand is very high after AS Saint-Étienne games. For business trips, our drivers know Saint-Étienne's business zones perfectly (Technopôle, Châteaucreux, Monthieu) and can drop you directly at your meeting venue. Our vehicles have Wi-Fi and USB ports so you can work during the journey. In winter, be aware that the Gier Valley can be prone to black ice, but our drivers are equipped with winter tyres for your safety.",
        comparaisonTransport:
          "The TER Lyon — Saint-Étienne costs around €12.40 and takes 45 minutes, but requires getting to the station and waiting for the next departure. BlaBlaCar offers rides between €5 and €8, but with inflexible schedules and no punctuality guarantee. By personal car, the journey costs around €8 in diesel with no tolls. The TaxiNeo taxi at €120–€145 (shareable among 1 to 4 passengers) offers door-to-door comfort, complete schedule flexibility and the certainty of arriving on time. For 2 to 4 people travelling together, the cost per person (€22 to €45) becomes very competitive against the train, especially when adding the cost of a taxi or VTC to reach the station.",
        faq: [
          { question: "What is the price of a taxi Lyon — Saint-Étienne?", answer: "The flat rate is €120–€145 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Lyon — Saint-Étienne journey?", answer: "About 50 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "marseille-toulon",
    from: "Marseille",
    to: "Toulon",
    fromLat: 43.2965,
    fromLng: 5.3698,
    toLat: 43.1242,
    toLng: 5.928,
    distanceKm: 65,
    durationMin: 50,
    priceEstimate: "125 — 155 €",
    category: "ville-a-ville",
    prixMin: 125,
    prixMax: 155,
    prixVan: 200,
    dureeMax: 75,
    autoroute: "A50 (autoroute Est)",
    peages: "~4 € de péages",
    departSlug: "marseille",
    arriveeSlug: "toulon",
    liensInternes: ["marseille-bandol", "marseille-hyeres", "marseille-la-seyne-sur-mer", "marseille-sanary-sur-mer"],
    tags: ["ville-a-ville", "marine", "rade", "Var", "préfecture"],
    hub: "marseille",
    highlights: ["A50", "Bandol", "Sanary"],
    i18n: {
      fr: {
        metaTitle: "Taxi Marseille → Toulon | 65 km, dès 125 € | TaxiNeo",
        metaDescription: "Trajet direct A50 en 50 min. Bandol et Sanary sur le parcours. Alternative directe au train ou au bus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Marseille → Toulon",
        heroSubtitle: "Votre transfert Marseille → Toulon au prix fixe de 125 — 155 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Marseille — Toulon le long de la côte provençale.",
        routeDescription: "Le trajet emprunte l'A50 en passant par Bandol et Sanary.",
        introduction:
          "Toulon, préfecture du Var et premier port militaire français, abrite l'une des plus belles rades d'Europe dans un amphithéâtre de montagnes dominé par le mont Faron (584 m). La ville, profondément marquée par la marine nationale depuis Richelieu, accueille la base navale la plus importante de la Méditerranée, le porte-avions Charles de Gaulle y faisant régulièrement escale. Au-delà de sa vocation militaire, Toulon séduit par son vieux centre rénové, ses ruelles provençales bordées de fontaines, son marché du Cours Lafayette — l'un des plus animés de Provence — et son opéra, le deuxième plus grand de France après celui de Paris. Le téléphérique du mont Faron, unique sur le littoral méditerranéen français, offre un panorama époustouflant sur la rade, les îles d'Hyères et la presqu'île de Saint-Mandrier. Le taxi depuis Marseille constitue une solution idéale pour les militaires en mission, les voyageurs d'affaires travaillant avec le pôle Mer Méditerranée, ou les touristes en croisière débarquant au port de Toulon, devenu une escale importante en Méditerranée occidentale.",
        itineraire:
          "Depuis Marseille, votre chauffeur emprunte l'A50 (autoroute Est) en direction de Toulon. L'autoroute traverse d'abord la vallée de l'Huveaune et la ville d'Aubagne, puis s'enfonce dans le massif des Calanques par un tunnel. À la sortie, la vue s'ouvre sur la Méditerranée et La Ciotat avec ses chantiers navals historiques. L'A50 longe ensuite les vignobles de Bandol et traverse Ollioules dans une gorge spectaculaire creusée par la Reppe. Les derniers kilomètres offrent une vue panoramique sur la rade de Toulon, l'une des plus profondes de Méditerranée. Votre chauffeur peut vous déposer au centre-ville (Place de la Liberté, gare SNCF), au port de commerce (terminal croisières), à la base navale (porte principale) ou dans les quartiers résidentiels du Mourillon, du Cap Brun ou de La Garde. Le péage sur ce trajet s'élève à environ 4 euros. En conditions normales, le trajet dure 50 minutes, mais peut atteindre 1h15 aux heures de pointe, particulièrement dans la traversée d'Aubagne et à l'entrée de Toulon.",
        conseils:
          "Pour rejoindre Toulon depuis Marseille, évitez les heures de pointe (7h30-9h et 17h-19h) qui rallongent significativement le trajet dans la traversée d'Aubagne. Le marché du Cours Lafayette se tient tous les matins sauf lundi et offre les meilleurs produits provençaux à des prix très raisonnables. Le téléphérique du mont Faron fonctionne de février à décembre (fermé par vent fort) et offre la plus belle vue de la côte — montée en 6 minutes. Si vous visitez le Musée national de la Marine sur le port, combiné avec la visite du Charles de Gaulle (journées portes ouvertes), réservez bien à l'avance. Le Mourillon, ancien quartier de pêcheurs devenu le quartier balnéaire chic de Toulon, possède de jolies plages aménagées et d'excellents restaurants. Pour les croisières, le terminal est à 10 minutes à pied du centre-ville, mais votre chauffeur vous dépose directement devant le terminal. En été, les navettes maritimes relient Toulon aux îles d'Hyères (Porquerolles, Port-Cros) depuis la Tour Royale.",
        comparaisonTransport:
          "Le TER Marseille — Toulon coûte environ 13 € et met 45 minutes à 1h selon le type de train. Il y a un train toutes les 30 minutes en semaine. Le bus Zou! coûte 3 € mais met 1h30 avec de nombreux arrêts. En voiture personnelle, comptez 10 € d'essence et 4 € de péages, soit 14 € sans parking (difficile et payant en centre-ville). Le taxi TaxiNeo à 125 — 155 € offre le porte-à-porte depuis votre adresse marseillaise jusqu'à votre destination exacte à Toulon. Pour 3-4 passagers (31 à 52 €/personne), le coût reste très raisonnable par rapport au train, surtout si vous devez ensuite prendre un taxi local à Toulon.",
        faq: [
          { question: "Quel est le prix d'un taxi Marseille — Toulon ?", answer: "Le forfait est de 125 — 155 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Marseille — Toulon ?", answer: "Environ 50 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Marseille → Toulon | 65 km, from €125 | TaxiNeo",
        metaDescription: "Direct route via A50, 50 min. Bandol and Sanary along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Marseille → Toulon",
        heroSubtitle: "Your Marseille → Toulon transfer at a fixed price of €125–€155. Online booking, professional driver 24/7.",
        description: "Marseille — Toulon transfer along the Provençal coast.",
        routeDescription: "The route takes the A50 passing through Bandol and Sanary.",
        introduction:
          "Toulon, prefecture of the Var department and France's foremost naval port, boasts one of Europe's finest natural harbours set in an amphitheatre of mountains dominated by Mont Faron (584 m). The city, deeply shaped by the French Navy since Richelieu, hosts the Mediterranean's largest naval base, with the aircraft carrier Charles de Gaulle regularly berthed here. Beyond its military calling, Toulon charms visitors with its renovated old centre, Provencal lanes lined with fountains, the Cours Lafayette market — one of Provence's liveliest — and its opera house, France's second largest after Paris. The Mont Faron cable car, unique on the French Mediterranean coast, offers breathtaking views over the harbour, the Hyeres islands and the Saint-Mandrier peninsula. A taxi from Marseille is ideal for military personnel on assignment, business travellers working with the Pole Mer Mediterranee, or cruise passengers disembarking at Toulon port, which has become a major western Mediterranean cruise stop.",
        itineraire:
          "From Marseille, your driver takes the A50 (eastern motorway) towards Toulon. The motorway first crosses the Huveaune valley and Aubagne, then tunnels through the Calanques massif. Emerging, the view opens onto the Mediterranean and La Ciotat with its historic shipyards. The A50 then skirts the Bandol vineyards and passes through Ollioules in a spectacular gorge carved by the Reppe river. The final kilometres offer panoramic views over Toulon harbour, one of the deepest in the Mediterranean. Your driver can drop you in the city centre (Place de la Liberte, railway station), at the commercial port (cruise terminal), at the naval base (main gate) or in the residential quarters of Mourillon, Cap Brun or La Garde. Tolls on this route amount to approximately 4 euros. Under normal conditions, the journey takes 50 minutes but can reach 1h15 during rush hours, particularly through Aubagne and entering Toulon.",
        conseils:
          "To reach Toulon from Marseille, avoid rush hours (7:30-9am and 5-7pm) which significantly lengthen the journey through Aubagne. The Cours Lafayette market runs every morning except Monday and offers the best Provencal produce at very reasonable prices. The Mont Faron cable car operates from February to December (closed in strong winds) and offers the coast's finest views — 6-minute ascent. If visiting the National Naval Museum on the port, combined with a Charles de Gaulle visit (open days), book well in advance. Mourillon, a former fishing quarter turned Toulon's chic seaside district, has lovely managed beaches and excellent restaurants. For cruises, the terminal is 10 minutes' walk from the centre, but your driver drops you right at the terminal door. In summer, maritime shuttles link Toulon to the Hyeres islands (Porquerolles, Port-Cros) from the Tour Royale.",
        comparaisonTransport:
          "The TER Marseille — Toulon costs around 13 euros and takes 45 minutes to 1 hour depending on the service. There is a train every 30 minutes on weekdays. The Zou! bus costs 3 euros but takes 1h30 with many stops. By car, expect 10 euros in fuel and 4 euros in tolls, totalling 14 euros excluding parking (difficult and chargeable in the centre). The TaxiNeo taxi at 125 to 155 euros offers door-to-door service from your Marseille address to your exact destination in Toulon. For 3-4 passengers (31 to 52 euros per person), the cost remains very reasonable compared to the train, especially if you then need a local taxi in Toulon.",
        faq: [
          { question: "What is the price of a taxi Marseille — Toulon?", answer: "The flat rate is €125–€155 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Marseille — Toulon journey?", answer: "About 50 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "marseille-avignon",
    from: "Marseille",
    to: "Avignon",
    fromLat: 43.2965,
    fromLng: 5.3698,
    toLat: 43.9493,
    toLng: 4.8055,
    distanceKm: 100,
    durationMin: 65,
    priceEstimate: "195 — 235 €",
    category: "ville-a-ville",
    prixMin: 195,
    prixMax: 235,
    prixVan: 305,
    dureeMax: 90,
    autoroute: "A7 (Autoroute du Soleil)",
    peages: "~9 € de péages",
    departSlug: "marseille",
    arriveeSlug: "avignon",
    liensInternes: ["marseille-arles", "marseille-orange", "marseille-nimes", "marseille-carpentras"],
    tags: ["ville-a-ville", "provence", "patrimoine", "UNESCO", "Palais-des-Papes", "festival"],
    hub: "marseille",
    highlights: ["A7", "Pont d'Avignon", "Palais des Papes"],
    i18n: {
      fr: {
        metaTitle: "Taxi Marseille → Avignon | 100 km, dès 195 € | TaxiNeo",
        metaDescription: "Via A7 en 1h05. Passage par Pont d'Avignon et Palais des Papes. Alternative directe au train ou au bus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Marseille → Avignon",
        heroSubtitle: "Votre transfert Marseille → Avignon au prix fixe de 195 — 235 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Marseille — Avignon, cité des Papes et du festival de théâtre.",
        routeDescription: "L'itinéraire emprunte l'A7 Autoroute du Soleil à travers la Provence.",
        introduction:
          "Avignon, classée au patrimoine mondial de l'UNESCO pour son centre historique, son Palais des Papes et le célèbre pont Saint-Bénézet, est l'une des villes les plus visitées de Provence. Ancienne résidence des papes au XIVe siècle, elle conserve un patrimoine architectural exceptionnel ceint de remparts médiévaux parfaitement conservés. Le Palais des Papes, plus grand palais gothique d'Europe, domine la ville depuis le Rocher des Doms et attire plus de 700 000 visiteurs par an. Chaque été, le Festival d'Avignon transforme la cité en capitale mondiale du théâtre : créé par Jean Vilar en 1947, il accueille des centaines de spectacles dans la Cour d'honneur du Palais et dans toute la ville lors du Off. Depuis Marseille, le taxi est le moyen le plus confortable pour rejoindre Avignon, surtout en juillet quand la ville est en effervescence festivalière et que les trains sont bondés. Les voyageurs d'affaires apprécient la flexibilité du porte-à-porte, tandis que les touristes profitent d'un trajet sans stress à travers les paysages de la Provence intérieure. Avignon est aussi un point de départ idéal pour explorer le Luberon, les Alpilles et les vignobles des Côtes du Rhône.",
        itineraire:
          "Au départ de Marseille, votre chauffeur rejoint l'autoroute A7 par la rocade L2 ou le tunnel de la Joliette selon votre point de prise en charge. L'A7, dite autoroute du Soleil, traverse le nord de la métropole marseillaise en passant par les échangeurs de Septèmes-les-Vallons et Plan-de-Campagne. Après le péage de Lançon-de-Provence (environ 9 €), l'autoroute file à travers la plaine de la Durance, offrant des vues sur la chaîne des Alpilles à l'ouest et le massif du Luberon à l'est. À hauteur de Cavaillon, la silhouette du mont Ventoux apparaît au nord-est par temps clair. La sortie Avignon Sud mène directement à la rocade qui longe les remparts médiévaux. Votre chauffeur peut vous déposer Porte de la République (face à la gare TGV intra-muros), Porte de l'Oulle (près du pont d'Avignon) ou à toute adresse dans le centre historique. En conditions normales, le trajet dure environ 1h05, mais peut atteindre 1h30 les vendredis soir d'été et lors des grands départs de vacances sur l'A7, notamment au péage de Lançon.",
        conseils:
          "Pour rejoindre Avignon depuis Marseille, privilégiez les départs tôt le matin ou en milieu de journée pour éviter les bouchons sur l'A7 à hauteur de Plan-de-Campagne et au péage de Lançon. En juillet, pendant le Festival d'Avignon, réservez votre taxi au moins 48h à l'avance car la demande est très forte. Le centre historique intra-muros est en grande partie piétonnier : demandez à être déposé à la porte la plus proche de votre hébergement. Si vous venez pour le Festival, votre chauffeur peut vous déposer Porte Saint-Lazare pour accéder rapidement à la Cour d'honneur du Palais des Papes. Pour les amateurs de vin, le taxi permet un arrêt facile à Châteauneuf-du-Pape (15 km au nord d'Avignon) pour une dégustation — prévoyez un supplément de 30 € environ. Le marché des Halles d'Avignon (du mardi au dimanche, couvert) est un incontournable gastronomique. Attention au mistral, vent violent du nord qui peut souffler à plus de 100 km/h dans la vallée du Rhône — emportez une veste même en été.",
        comparaisonTransport:
          "Le TGV Marseille Saint-Charles — Avignon TGV met 35 minutes et coûte 20 à 40 € selon la réservation, mais la gare TGV d'Avignon est à 5 km du centre (navette 1,60 € ou taxi local 15 €). Le TER direct coûte 18 € pour 1h15. Le bus Zou! coûte 10 € mais met 1h45 avec arrêts. En voiture personnelle, comptez 15 € d'essence et 9 € de péages, soit 24 € sans parking (souvent difficile intra-muros). Le taxi TaxiNeo à 195 — 235 € offre le porte-à-porte complet. Pour 3-4 passagers (49 à 78 €/personne), le coût dépasse celui du TGV + taxi local, avec en contrepartie l'avantage de la flexibilité horaire et du transport de bagages.",
        faq: [
          { question: "Quel est le prix d'un taxi Marseille — Avignon ?", answer: "Le forfait est de 195 — 235 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Marseille — Avignon ?", answer: "Environ 65 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Marseille → Avignon | 100 km, from €195 | TaxiNeo",
        metaDescription: "Via A7, 1h05 ride. Pont d'Avignon and Palais des Papes along the way. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Marseille → Avignon",
        heroSubtitle: "Your Marseille → Avignon transfer at a fixed price of €195–€235. Online booking, professional driver 24/7.",
        description: "Marseille — Avignon transfer, city of the Popes and the theatre festival.",
        routeDescription: "The route takes the A7 Autoroute du Soleil through Provence.",
        introduction:
          "Avignon, a UNESCO World Heritage site for its historic centre, Palace of the Popes and the famous Pont Saint-Bénézet, is one of Provence's most visited cities. Former papal residence in the 14th century, it retains exceptional architectural heritage enclosed within perfectly preserved medieval ramparts. The Palace of the Popes, Europe's largest Gothic palace, towers over the city from the Rocher des Doms and attracts over 700,000 visitors annually. Every summer, the Festival d'Avignon transforms the city into the world capital of theatre: founded by Jean Vilar in 1947, it hosts hundreds of shows in the Cour d'honneur and throughout the city during the Off festival. From Marseille, a taxi is the most comfortable way to reach Avignon, especially in July when the city buzzes with festival energy and trains are packed. Business travellers appreciate the door-to-door flexibility, while tourists enjoy a stress-free journey through the landscapes of inland Provence. Avignon is also an ideal starting point for exploring the Luberon, Alpilles and Cotes du Rhone vineyards.",
        itineraire:
          "Departing from Marseille, your driver joins the A7 motorway via the L2 ring road or Joliette tunnel depending on your pick-up point. The A7, known as the Autoroute du Soleil, crosses the northern Marseille suburbs past Septemes-les-Vallons and Plan-de-Campagne. After the Lancon-de-Provence toll (approximately 9 euros), the motorway runs through the Durance plain, offering views of the Alpilles range to the west and the Luberon massif to the east. Near Cavaillon, the silhouette of Mont Ventoux appears to the northeast on clear days. The Avignon Sud exit leads directly to the ring road skirting the medieval ramparts. Your driver can drop you at Porte de la Republique (opposite the intra-muros TGV station), Porte de l'Oulle (near the Pont d'Avignon) or at any address in the historic centre. Under normal conditions, the journey takes about 1h05 but can reach 1h30 on Friday evenings in summer and during major holiday departures on the A7, particularly at the Lancon toll.",
        conseils:
          "To reach Avignon from Marseille, favour early morning or mid-day departures to avoid traffic on the A7 near Plan-de-Campagne and at the Lancon toll. In July during the Festival d'Avignon, book your taxi at least 48 hours ahead as demand is very high. The intra-muros historic centre is largely pedestrianised: ask to be dropped at the gate nearest your accommodation. If attending the Festival, your driver can drop you at Porte Saint-Lazare for quick access to the Palace's Cour d'honneur. Wine lovers can easily stop at Chateauneuf-du-Pape (15 km north of Avignon) for a tasting — expect a supplement of around 30 euros. The Halles d'Avignon indoor market (Tuesday to Sunday) is a gastronomic must. Beware the Mistral, a fierce northerly wind that can blow over 100 km/h in the Rhone valley — bring a jacket even in summer.",
        comparaisonTransport:
          "The TGV from Marseille Saint-Charles to Avignon TGV takes 35 minutes and costs 20 to 40 euros depending on booking, but Avignon TGV station is 5 km from the centre (shuttle 1.60 euros or local taxi 15 euros). The direct TER costs 18 euros for 1h15. The Zou! bus costs 10 euros but takes 1h45 with stops. By car, expect 15 euros in fuel and 9 euros in tolls, totalling 24 euros excluding parking (often difficult intra-muros). The TaxiNeo taxi at 195 to 235 euros offers complete door-to-door service. For 3-4 passengers (49 to 78 euros per person), the cost is higher than TGV plus local taxi, in exchange for the benefits of schedule flexibility and luggage handling.",
        faq: [
          { question: "What is the price of a taxi Marseille — Avignon?", answer: "The flat rate is €195–€235 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Marseille — Avignon journey?", answer: "About 65 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "toulouse-carcassonne",
    from: "Toulouse",
    to: "Carcassonne",
    fromLat: 43.6047,
    fromLng: 1.4442,
    toLat: 43.213,
    toLng: 2.3491,
    distanceKm: 95,
    durationMin: 65,
    priceEstimate: "185 — 220 €",
    category: "ville-a-ville",
    highlights: ["A61", "Cité de Carcassonne", "Canal du Midi"],
    i18n: {
      fr: {
        metaTitle: "Taxi Toulouse → Carcassonne | 95 km, dès 185 € | TaxiNeo",
        metaDescription: "Via A61 en 1h05. Cité de Carcassonne et Canal du Midi en chemin. Dépose porte-à-porte, bagages inclus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Toulouse → Carcassonne",
        heroSubtitle: "Votre transfert Toulouse → Carcassonne au prix fixe de 185 — 220 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Toulouse — Carcassonne pour visiter la cité médiévale classée UNESCO.",
        routeDescription: "Le trajet emprunte l'A61 le long du Canal du Midi.",
        faq: [
          { question: "Quel est le prix d'un taxi Toulouse — Carcassonne ?", answer: "Le forfait est de 185 — 220 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Toulouse — Carcassonne ?", answer: "Environ 65 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Toulouse → Carcassonne | 95 km, from €185 | TaxiNeo",
        metaDescription: "Via A61, 1h05 ride. Cité de Carcassonne and Canal du Midi along the way. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Toulouse → Carcassonne",
        heroSubtitle: "Your Toulouse → Carcassonne transfer at a fixed price of €185–€220. Online booking, professional driver 24/7.",
        description: "Toulouse — Carcassonne transfer to visit the UNESCO-listed medieval city.",
        routeDescription: "The route takes the A61 along the Canal du Midi.",
        faq: [
          { question: "What is the price of a taxi Toulouse — Carcassonne?", answer: "The flat rate is €185–€220 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Toulouse — Carcassonne journey?", answer: "About 65 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "bordeaux-biarritz",
    from: "Bordeaux",
    to: "Biarritz",
    fromLat: 44.8378,
    fromLng: -0.5792,
    toLat: 43.4832,
    toLng: -1.5586,
    distanceKm: 200,
    durationMin: 120,
    priceEstimate: "385 — 465 €",
    category: "ville-a-ville",
    prixMin: 385,
    prixMax: 465,
    prixVan: 610,
    dureeMax: 150,
    autoroute: "A63 direction Espagne",
    peages: "~17 € de péages",
    departSlug: "bordeaux",
    arriveeSlug: "biarritz",
    liensInternes: ["bordeaux-bayonne", "bordeaux-dax", "bordeaux-pau"],
    tags: ["longue-distance", "surf", "pays-basque", "plage", "luxe", "gastronomie"],
    hub: "bordeaux",
    highlights: ["A63", "Landes", "Côte basque"],
    i18n: {
      fr: {
        metaTitle: "Taxi Bordeaux → Biarritz | 200 km, dès 385 € | TaxiNeo",
        metaDescription: "Par A63, 2h de trajet. Landes et Côte basque sur le parcours. Alternative directe au train ou au bus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Bordeaux → Biarritz",
        heroSubtitle: "Votre transfert Bordeaux → Biarritz au prix fixe de 385 — 465 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Bordeaux — Biarritz à travers les Landes et la côte basque.",
        routeDescription: "L'itinéraire emprunte l'A63 à travers la forêt des Landes.",
        introduction:
          "Biarritz est une ville d'exception, à la croisée de deux mondes : l'élégance aristocratique héritée du XIXe siècle et l'énergie brute du surf atlantique. C'est l'impératrice Eugénie, épouse de Napoléon III, qui lança Biarritz en y faisant construire sa résidence d'été en 1854, devenue aujourd'hui l'Hôtel du Palais, palace 5 étoiles surplombant la Grande Plage. Depuis, Biarritz est restée une destination de prestige international. Le Rocher de la Vierge, relié à la côte par une passerelle métallique attribuée à Gustave Eiffel, offre un panorama spectaculaire sur l'océan et les Pyrénées par temps clair — on peut voir jusqu'à la côte espagnole. La Grande Plage, encadrée par l'Hôtel du Palais et le Casino municipal (Art Déco), est l'une des plus belles plages urbaines d'Europe. Mais Biarritz est aussi la capitale européenne du surf depuis les années 1960 : la Côte des Basques, la Plage de Marbella et la Grande Plage offrent des vagues de classe mondiale. L'Aquarium de Biarritz (Musée de la Mer), le phare de Biarritz (panorama à 360°), les Halles de Biarritz (marché couvert avec pintxos et produits basques) et le quartier de Port-Vieux (petit port de pêche pittoresque) complètent un tableau urbain d'une richesse rare. La gastronomie est exceptionnelle : plusieurs étoilés Michelin, pintxos basques, chipirons (calamars), ttoro (bouillabaisse basque), gâteau basque.",
        itineraire:
          "Depuis Bordeaux, votre chauffeur emprunte la rocade sud puis l'A63 en direction de l'Espagne. L'autoroute traverse la forêt des Landes de Gascogne sur plus de 100 km, un long corridor de pins maritimes. On passe Langon, Labouheyre, puis Castets. Après Dax et son échangeur, l'A63 continue vers le sud-ouest. Le paysage change progressivement : les Landes plates cèdent la place aux collines vertes du piémont pyrénéen. Après Bayonne, on prend la sortie Biarritz, et l'arrivée en ville est rapide. Votre chauffeur vous dépose au centre (Grande Plage, Hôtel du Palais), au port des Pêcheurs, à la Côte des Basques ou à votre hébergement. Les péages s'élèvent à environ 17 €. Le trajet dure 2h en conditions normales, mais peut atteindre 2h30 les samedis de juillet-août quand l'A63 est très chargée entre Dax et Bayonne.",
        conseils:
          "Le Rocher de la Vierge est le spot photo numéro un de Biarritz : accès libre et gratuit, splendide au coucher du soleil. Le phare de Biarritz (3 €, 248 marches) offre le meilleur panorama à 360° de la côte basque. Les Halles de Biarritz (marché couvert, tous les matins) sont un must : pintxos, fromage de brebis, piment d'Espelette, jambon de Bayonne. Pour le surf, la Côte des Basques est le spot historique (école de surf, location) ; la Grande Plage est plus protégée pour la baignade. L'Aquarium de Biarritz est une visite familiale appréciée (14 €, 1h30). Le quartier de Port-Vieux (minuscule port de pêche) est charmant pour un apéritif. Biarritz est aussi un excellent point de départ vers Espelette (piment, 25 km), Saint-Jean-de-Luz (15 km), San Sebastián en Espagne (50 km). Nos chauffeurs proposent des circuits journée Pays basque sur devis.",
        comparaisonTransport:
          "Le TGV Bordeaux–Biarritz coûte 20-50 € et met 1h50 (direct, 5-7 trains/jour, gare de Biarritz-La Négresse). C'est une très bonne liaison. Le taxi TaxiNeo à 385 — 465 € est pertinent pour les groupes (3-4 passagers : 65-108 €/pers.), les familles avec matériel de surf ou de plage, ceux qui souhaitent des arrêts (Dax, Hossegor) et les voyageurs pendant les périodes de pointe quand les trains sont complets. La gare de Biarritz-La Négresse est à 3 km du centre — le taxi offre le porte-à-porte. En voiture, comptez 23 € d'essence et 17 € de péages.",
        faq: [
          { question: "Quel est le prix d'un taxi Bordeaux — Biarritz ?", answer: "Le forfait est de 385 — 465 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Bordeaux — Biarritz ?", answer: "Environ 120 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Bordeaux → Biarritz | 200 km, from €385 | TaxiNeo",
        metaDescription: "Through A63 in 2h. Landes and Côte basque along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Bordeaux → Biarritz",
        heroSubtitle: "Your Bordeaux → Biarritz transfer at a fixed price of €385–€465. Online booking, professional driver 24/7.",
        description: "Bordeaux — Biarritz transfer through the Landes and the Basque coast.",
        routeDescription: "The route takes the A63 through the Landes forest.",
        introduction:
          "Biarritz is an exceptional city, at the crossroads of two worlds: the aristocratic elegance inherited from the 19th century and the raw energy of Atlantic surfing. It was Empress Eugénie, wife of Napoleon III, who launched Biarritz by having her summer residence built there in 1854, now the Hôtel du Palais, a 5-star palace overlooking the Grande Plage. Since then, Biarritz has remained an internationally prestigious destination. The Rocher de la Vierge, connected to the coast by a metal footbridge attributed to Gustave Eiffel, offers a spectacular panorama over the ocean and the Pyrenees in clear weather — you can see as far as the Spanish coast. The Grande Plage, framed by the Hôtel du Palais and the Municipal Casino (Art Deco), is one of Europe's most beautiful urban beaches. But Biarritz has also been Europe's surfing capital since the 1960s: the Côte des Basques, Marbella Beach and Grande Plage offer world-class waves. The Biarritz Aquarium (Sea Museum), Biarritz lighthouse (360° panorama), Biarritz market hall (covered market with pintxos and Basque products) and the Port-Vieux quarter (quaint little fishing port) complete a remarkably rich urban picture. The gastronomy is exceptional: several Michelin stars, Basque pintxos, chipirons (squid), ttoro (Basque bouillabaisse), Basque cake.",
        itineraire:
          "From Bordeaux, your driver takes the southern ring road then the A63 towards Spain. The motorway crosses the Landes de Gascogne forest for over 100 km, a long corridor of maritime pines. You pass Langon, Labouheyre, then Castets. After Dax and its interchange, the A63 continues south-west. The landscape gradually changes: the flat Landes give way to green foothills of the Pyrenees. After Bayonne, you take the Biarritz exit, and arrival in town is quick. Your driver drops you at the centre (Grande Plage, Hôtel du Palais), the fishermen's port, Côte des Basques or your accommodation. Tolls amount to about €17. The journey takes 2h normally but can reach 2h30 on July-August Saturdays when the A63 is very busy between Dax and Bayonne.",
        conseils:
          "The Rocher de la Vierge is Biarritz's number one photo spot: free access, splendid at sunset. The Biarritz lighthouse (€3, 248 steps) offers the best 360° panorama of the Basque coast. Biarritz market hall (covered market, every morning) is a must: pintxos, sheep cheese, Espelette pepper, Bayonne ham. For surfing, the Côte des Basques is the historic spot (surf school, rental); the Grande Plage is more sheltered for swimming. The Biarritz Aquarium is an appreciated family visit (€14, 1h30). The Port-Vieux quarter (tiny fishing port) is charming for an aperitif. Biarritz is also an excellent starting point for Espelette (pepper, 25 km), Saint-Jean-de-Luz (15 km), San Sebastián in Spain (50 km). Our drivers offer full-day Basque Country circuits on request.",
        comparaisonTransport:
          "The TGV Bordeaux–Biarritz costs €20-50 and takes 1h50 (direct, 5-7 trains/day, Biarritz-La Négresse station). It is a very good connection. The TaxiNeo taxi at €385–€465 is relevant for groups (3-4 passengers: €65-108 per person), families with surf or beach gear, those wanting stops (Dax, Hossegor) and travellers during peak periods when trains are full. Biarritz-La Négresse station is 3 km from the centre — the taxi offers door-to-door. By car, expect €23 fuel and €17 tolls.",
        faq: [
          { question: "What is the price of a taxi Bordeaux — Biarritz?", answer: "The flat rate is €385–€465 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Bordeaux — Biarritz journey?", answer: "About 120 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "nantes-la-baule",
    from: "Nantes",
    to: "La Baule",
    fromLat: 47.2184,
    fromLng: -1.5536,
    toLat: 47.2863,
    toLng: -2.3933,
    distanceKm: 80,
    durationMin: 55,
    priceEstimate: "155 — 185 €",
    category: "ville-a-ville",
    prixMin: 155,
    prixMax: 185,
    prixVan: 245,
    dureeMax: 70,
    autoroute: "N165/N171",
    peages: "Gratuit",
    departSlug: "nantes",
    arriveeSlug: "la-baule",
    liensInternes: ["nantes-saint-nazaire", "nantes-pornichet", "la-baule-nantes", "nantes-guerande"],
    tags: ["touristique", "plage", "cote-d-amour", "station-balneaire"],
    hub: "nantes",
    highlights: ["N171", "Saint-Nazaire", "Côte d'Amour"],
    i18n: {
      fr: {
        metaTitle: "Taxi Nantes → La Baule | 80 km, dès 155 € | TaxiNeo",
        metaDescription: "Via N171 en 1h. N171, Saint-Nazaire et Côte d'Amour en chemin. Alternative directe au train ou au bus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Nantes → La Baule",
        heroSubtitle: "Votre transfert Nantes → La Baule au prix fixe de 155 — 185 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Nantes — La Baule pour la plus belle baie d'Europe.",
        routeDescription: "Le trajet emprunte la N171 via Saint-Nazaire.",
        introduction:
          "La Baule-Escoublac est la station balnéaire la plus prestigieuse de la côte atlantique française. Sa baie majestueuse de 9 kilomètres de sable fin, bordée de pins maritimes et de villas Belle Époque, lui vaut régulièrement le titre de « plus belle plage d'Europe ». Fondée comme station balnéaire à la fin du XIXe siècle par des industriels nantais et parisiens, La Baule a conservé son élégance avec ses hôtels-palaces (l'Hermitage, le Royal, le Castel Marie-Louise), son casino Barrière, son centre de thalassothérapie et son golf international. La ville accueille chaque été le jumping international CSI 5* (un des plus grands concours hippiques du monde) et de nombreux événements nautiques. Le trajet depuis Nantes est emprunté par les familles nantaises le week-end, les vacanciers parisiens arrivant en TGV à Nantes, et les participants aux séminaires d'entreprise organisés dans les hôtels de la côte. Le taxi offre l'avantage de déposer directement à l'hôtel ou à la résidence de vacances, sans les contraintes du parking en plein été.",
        itineraire:
          "Depuis Nantes, votre chauffeur emprunte la N165 (voie express gratuite) en direction de Saint-Nazaire. Après avoir longé l'estuaire de la Loire pendant 50 km, on bifurque sur la N171 en direction de Pornichet et La Baule avant d'atteindre Saint-Nazaire centre. La route traverse la zone de Trignac puis Pornichet, station voisine de La Baule réputée pour son port de plaisance. L'arrivée à La Baule se fait par l'avenue du Général-de-Gaulle ou l'avenue Louis-Lajarrige selon votre destination. Le front de mer (boulevard de l'Océan) est accessible en voiture, ce qui permet une dépose directe face à la plage. L'ensemble du trajet est gratuit (aucun péage). Comptez 55 minutes en conditions normales, mais les vendredis soir d'été et les samedis matin, le trafic sur la N165 peut rallonger le trajet de 15-20 minutes.",
        conseils:
          "En été (juillet-août), La Baule est très fréquentée. Le stationnement y est payant et difficile (2,50 €/h en front de mer, 15-20 €/jour dans les parkings). Le taxi est la solution idéale pour éviter ce casse-tête. Si vous séjournez dans un hôtel-palace (Hermitage, Royal), le chauffeur peut vous déposer directement à l'entrée. Le marché couvert de La Baule (tous les matins en été, fermé le lundi) est réputé pour ses huîtres de Guérande et ses crevettes roses. La côte sauvage du Croisic (à 10 minutes de La Baule) offre des paysages spectaculaires et vaut le détour. Le casino Barrière est ouvert tous les jours dès 10h (pièce d'identité obligatoire). Pour le jumping international (août), réservez votre taxi une semaine à l'avance car la demande est très forte pendant cet événement qui attire 50 000 spectateurs.",
        comparaisonTransport:
          "Le TER Nantes — La Baule-Escoublac coûte 12,70 € et met 55-65 minutes (train direct) avec 6-8 trains par jour. En été, des TGV directs Paris — La Baule existent (3h30, dès 39 €). Le bus LILA dessert La Baule depuis Nantes en 1h30 pour 2 €. En voiture, comptez 9 € d'essence (pas de péage) mais le parking est un vrai problème en été (15-20 €/jour). Le taxi TaxiNeo à 155 — 185 € est le choix du confort pour les familles et les groupes : à 3-4 passagers (39-62 €/pers.), c'est comparable au train en ajoutant la navette depuis la gare de La Baule, avec la dépose directe à votre hébergement et la prise en charge des bagages de vacances.",
        faq: [
          { question: "Quel est le prix d'un taxi Nantes — La Baule ?", answer: "Le forfait est de 155 — 185 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Nantes — La Baule ?", answer: "Environ 55 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Nantes → La Baule | 80 km, from €155 | TaxiNeo",
        metaDescription: "Via N171, 1 hour ride. N171, Saint-Nazaire and Côte d'Amour along the way. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Nantes → La Baule",
        heroSubtitle: "Your Nantes → La Baule transfer at a fixed price of €155–€185. Online booking, professional driver 24/7.",
        description: "Nantes — La Baule transfer to Europe's most beautiful bay.",
        routeDescription: "The route takes the N171 via Saint-Nazaire.",
        introduction:
          "La Baule-Escoublac is the most prestigious seaside resort on the French Atlantic coast. Its majestic 9-kilometre bay of fine sand, lined with maritime pines and Belle Époque villas, regularly earns it the title of 'Europe's finest beach'. Founded as a seaside resort in the late 19th century by industrialists from Nantes and Paris, La Baule has retained its elegance with palace hotels (l'Hermitage, le Royal, le Castel Marie-Louise), its Barrière casino, thalassotherapy centre and international golf course. Each summer the town hosts the CSI 5* international show jumping event (one of the world's largest equestrian competitions) and numerous sailing events. The journey from Nantes is popular with local families at weekends, Parisian holidaymakers arriving by TGV to Nantes, and participants in corporate seminars held in coastal hotels. A taxi offers the advantage of direct drop-off at your hotel or holiday rental, without the parking headaches of peak summer.",
        itineraire:
          "From Nantes, your driver takes the N165 (free dual carriageway) towards Saint-Nazaire. After following the Loire estuary for 50 km, you turn onto the N171 towards Pornichet and La Baule before reaching Saint-Nazaire centre. The road crosses the Trignac area then Pornichet, La Baule's neighbouring resort known for its marina. Arrival in La Baule is via Avenue du Général-de-Gaulle or Avenue Louis-Lajarrige depending on your destination. The seafront (Boulevard de l'Océan) is accessible by car, allowing a direct drop-off facing the beach. The entire journey is toll-free. Allow 55 minutes normally, but on summer Friday evenings and Saturday mornings, traffic on the N165 can add 15-20 minutes.",
        conseils:
          "In summer (July-August), La Baule is very busy. Parking is paid and difficult (€2.50/h on the seafront, €15-20/day in car parks). A taxi is the ideal solution to avoid this headache. If staying at a palace hotel (Hermitage, Royal), your driver drops you directly at the entrance. La Baule covered market (every morning in summer, closed Mondays) is renowned for Guérande oysters and pink shrimp. The wild coast of Le Croisic (10 minutes from La Baule) offers spectacular scenery and is worth the detour. The Barrière casino opens daily from 10am (ID required). For the international show jumping (August), book your taxi a week ahead as demand surges during this 50,000-spectator event.",
        comparaisonTransport:
          "The TER train Nantes — La Baule-Escoublac costs €12.70 and takes 55-65 minutes (direct service) with 6-8 trains daily. In summer, direct TGV services run Paris — La Baule (3h30, from €39). The LILA bus serves La Baule from Nantes in 1h30 for €2. By car, expect €9 in fuel (no tolls) but parking is a real problem in summer (€15-20/day). The TaxiNeo taxi at €155–€185 is the comfort choice for families and groups: for 3-4 passengers (€25-42 per person), it compares to the train plus shuttle from La Baule station, with direct drop-off at your accommodation and holiday luggage handling.",
        faq: [
          { question: "What is the price of a taxi Nantes — La Baule?", answer: "The flat rate is €155–€185 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Nantes — La Baule journey?", answer: "About 55 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "lille-dunkerque",
    from: "Lille",
    to: "Dunkerque",
    fromLat: 50.6292,
    fromLng: 3.0573,
    toLat: 51.0347,
    toLng: 2.3768,
    distanceKm: 80,
    durationMin: 55,
    priceEstimate: "155 — 185 €",
    category: "ville-a-ville",
    prixMin: 155,
    prixMax: 185,
    prixVan: 245,
    dureeMax: 75,
    autoroute: "A25",
    peages: "Aucun péage (A25 gratuite)",
    departSlug: "lille",
    arriveeSlug: "dunkerque",
    liensInternes: ["lille-calais", "lille-boulogne-sur-mer", "lille-saint-omer", "lille-bruges"],
    tags: ["ville-a-ville", "port", "carnaval", "plage", "cote-opale"],
    hub: "lille",
    highlights: ["A25", "Flandres", "Port de Dunkerque"],
    i18n: {
      fr: {
        metaTitle: "Taxi Lille → Dunkerque | 80 km, dès 155 € | TaxiNeo",
        metaDescription: "Par A25, 1h de trajet. Flandres et Port de Dunkerque en chemin. Alternative directe au train ou au bus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Lille → Dunkerque",
        heroSubtitle: "Votre transfert Lille → Dunkerque au prix fixe de 155 — 185 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Lille — Dunkerque à travers les plaines flamandes.",
        routeDescription: "Le trajet emprunte l'A25 en traversant les Flandres.",
        introduction:
          "Dunkerque, troisième port de France et ville la plus septentrionale de l'Hexagone, est une cité au caractère bien trempé, forgé par l'histoire maritime et les épreuves. La ville est mondialement connue pour deux événements : l'opération Dynamo de 1940, quand 338 000 soldats alliés furent évacués des plages sous le feu ennemi (événement retracé dans le film Dunkirk de Christopher Nolan), et son carnaval, l'un des derniers carnavals traditionnels de France, inscrit au patrimoine culturel immatériel. Pendant trois mois (janvier à mars), les « carnavaleux » défilent en bandes costumées dans les rues au son des fifres et des tambours, et le moment phare est le jet de harengs depuis le balcon de l'hôtel de ville. Dunkerque possède aussi un riche patrimoine maritime : le Musée portuaire installé dans un ancien entrepôt de tabac, le bateau-feu « Sandettié », le phare du Risban, et le musée Dunkerque 1940 — Opération Dynamo. La longue plage de sable fin, les dunes de Flandre (réserve naturelle) et le port industriel offrent des paysages contrastés et saisissants. La ville est un pôle économique majeur des Hauts-de-France grâce à son port (pétrochimie, sidérurgie, conteneurs) et à la centrale nucléaire de Gravelines, la plus puissante d'Europe occidentale.",
        itineraire:
          "Votre chauffeur quitte Lille par le périphérique ouest et rejoint l'autoroute A25, axe direct Lille — Dunkerque. L'A25 est une autoroute entièrement gratuite, ce qui est rare en France — aucun péage sur les 80 km du trajet. L'autoroute traverse la plaine de Flandre intérieure, paysage très plat de champs de blé, de lin et de pommes de terre, ponctué de fermes flamandes en briques rouges, de moulins à vent et de petits villages aux noms flamands (Steenvoorde, Cassel, Wormhout, Bergues). Par temps clair, on aperçoit au loin les collines des monts de Flandre (Mont Cassel, Mont des Cats, Mont Noir). L'arrivée à Dunkerque se fait par la zone industrialo-portuaire, puis le centre-ville. Votre chauffeur vous dépose à la gare, en centre-ville (place Jean-Bart), à la plage de Malo-les-Bains ou au port selon votre destination. Le trajet dure 55 minutes en conditions normales et peut atteindre 1h15 pendant le carnaval (février-mars) quand des rues sont fermées pour les bandes.",
        conseils:
          "Pendant le carnaval de Dunkerque (janvier-mars), réservez votre taxi à l'avance car la ville est très fréquentée et la circulation perturbée. Les trois temps forts sont les bandes de Dunkerque (dimanche avant Mardi Gras), de Rosendaël et de Malo-les-Bains. Portez de vieux vêtements — le jet de harengs saurs depuis le balcon de la mairie est une tradition incontournable et salissante ! Hors carnaval, la plage de Malo-les-Bains est agréable en été (eau fraîche mais baignable), et le front de mer avec ses restaurants de fruits de mer (moules, crevettes grises, waterzooi) vaut le détour. Le Musée Dunkerque 1940 (5 €) retrace l'opération Dynamo de manière poignante. Le FRAC Grand Large, musée d'art contemporain dans l'ancien chantier naval AP2, est une architecture spectaculaire. Bergues, charmante petite ville fortifiée à 10 km (connue grâce au film Bienvenue chez les Ch'tis), mérite un détour de 20 minutes.",
        comparaisonTransport:
          "Le TER Lille — Dunkerque coûte environ 13 € et met 1h10 à 1h30. Il y a environ un train par heure, mais la correspondance n'est pas toujours directe (parfois changement à Hazebrouck). Le bus régional est plus lent (2h). En voiture, comptez 8 € d'essence et aucun péage (A25 gratuite). Le taxi TaxiNeo à 155 — 185 € offre le trajet direct porte-à-porte en 55 minutes, sans correspondance. À 3-4 passagers, le coût (39-62 €/pers.) est raisonnable face au train, avec l'avantage de la dépose directe à la plage, au port ou au lieu du carnaval.",
        faq: [
          { question: "Quel est le prix d'un taxi Lille — Dunkerque ?", answer: "Le forfait est de 155 — 185 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Lille — Dunkerque ?", answer: "Environ 55 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Lille → Dunkerque | 80 km, from €155 | TaxiNeo",
        metaDescription: "Via A25, 1 hour ride. Flandres and Port de Dunkerque along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Lille → Dunkerque",
        heroSubtitle: "Your Lille → Dunkerque transfer at a fixed price of €155–€185. Online booking, professional driver 24/7.",
        description: "Lille — Dunkerque transfer through the Flemish plains.",
        routeDescription: "The route takes the A25 through Flanders.",
        introduction:
          "Dunkirk, France's third-largest port and most northerly city, is a place of strong character forged by maritime history and adversity. The city is world-famous for two events: Operation Dynamo in 1940, when 338,000 Allied soldiers were evacuated from the beaches under enemy fire (depicted in Christopher Nolan's film Dunkirk), and its carnival, one of France's last traditional carnivals, listed as intangible cultural heritage. For three months (January to March), costumed 'carnavaleux' parade through the streets to the sound of fifes and drums, and the highlight is the throwing of herrings from the town hall balcony. Dunkirk also boasts rich maritime heritage: the Harbour Museum in a former tobacco warehouse, the Sandettié lightship, the Risban lighthouse, and the Dunkirk 1940 — Operation Dynamo museum. The long sandy beach, the Flanders dunes (nature reserve) and the industrial port offer striking contrasting landscapes. The city is a major economic hub of northern France thanks to its port (petrochemicals, steel, containers) and the Gravelines nuclear power station, Western Europe's most powerful.",
        itineraire:
          "Your driver leaves Lille via the western ring road and joins the A25 motorway, the direct Lille — Dunkirk route. The A25 is entirely toll-free, which is rare in France — no tolls across the full 80 km. The motorway crosses the inland Flanders plain, a very flat landscape of wheat, flax and potato fields, dotted with red-brick Flemish farms, windmills and small villages with Flemish names (Steenvoorde, Cassel, Wormhout, Bergues). On clear days, the Flanders hills are visible in the distance (Mont Cassel, Mont des Cats, Mont Noir). Arrival in Dunkirk passes through the port-industrial zone, then the town centre. Your driver drops you at the station, in the centre (Place Jean-Bart), at Malo-les-Bains beach or at the port depending on your destination. The journey takes 55 minutes normally and can reach 1h15 during carnival (February-March) when streets are closed for parades.",
        conseils:
          "During the Dunkirk Carnival (January-March), book your taxi in advance as the city is very busy and traffic disrupted. The three highlights are the Dunkirk, Rosendaël and Malo-les-Bains 'bandes' (parades). Wear old clothes — the throwing of smoked herrings from the town hall balcony is an unmissable and messy tradition! Outside carnival, Malo-les-Bains beach is pleasant in summer (cool water but swimmable), and the seafront with its seafood restaurants (mussels, grey shrimps, waterzooi) is worth a visit. The Dunkirk 1940 Museum (€5) retraces Operation Dynamo movingly. The FRAC Grand Large contemporary art museum in the former AP2 shipyard is architecturally spectacular. Bergues, a charming small fortified town 10 km away (famous from the film Bienvenue chez les Ch'tis), deserves a 20-minute detour.",
        comparaisonTransport:
          "The TER Lille — Dunkirk costs about €13 and takes 1h10 to 1h30. There is roughly one train per hour, but the journey is not always direct (sometimes a change at Hazebrouck). The regional bus is slower (2h). By car, expect €8 in fuel and no tolls (A25 is free). The TaxiNeo taxi at €155–€185 provides a direct door-to-door journey in 55 minutes with no connections. For 3-4 passengers, the cost (€25-43 per person) is reasonable against the train, with the advantage of direct drop-off at the beach, port or carnival venue.",
        faq: [
          { question: "What is the price of a taxi Lille — Dunkerque?", answer: "The flat rate is €155–€185 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Lille — Dunkerque journey?", answer: "About 55 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "strasbourg-colmar",
    from: "Strasbourg",
    to: "Colmar",
    fromLat: 48.5734,
    fromLng: 7.7521,
    toLat: 48.0794,
    toLng: 7.3583,
    distanceKm: 75,
    durationMin: 55,
    priceEstimate: "145 — 175 €",
    category: "ville-a-ville",
    highlights: ["A35", "Route des Vins", "Petite Venise"],
    i18n: {
      fr: {
        metaTitle: "Taxi Strasbourg → Colmar | 75 km, dès 145 € | TaxiNeo",
        metaDescription: "Via A35 en 55 min. Passage par Route des Vins et Petite Venise. Alternative directe au train ou au bus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Strasbourg → Colmar",
        heroSubtitle: "Votre transfert Strasbourg → Colmar au prix fixe de 145 — 175 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Strasbourg — Colmar sur la Route des Vins d'Alsace.",
        routeDescription: "L'itinéraire emprunte l'A35 le long de la plaine d'Alsace.",
        faq: [
          { question: "Quel est le prix d'un taxi Strasbourg — Colmar ?", answer: "Le forfait est de 145 — 175 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Strasbourg — Colmar ?", answer: "Environ 55 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Strasbourg → Colmar | 75 km, from €145 | TaxiNeo",
        metaDescription: "Via A35, 55 min ride. Route des Vins and Petite Venise along the way. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Strasbourg → Colmar",
        heroSubtitle: "Your Strasbourg → Colmar transfer at a fixed price of €145–€175. Online booking, professional driver 24/7.",
        description: "Strasbourg — Colmar transfer on the Alsace Wine Route.",
        routeDescription: "The route takes the A35 along the Alsace plain.",
        faq: [
          { question: "What is the price of a taxi Strasbourg — Colmar?", answer: "The flat rate is €145–€175 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Strasbourg — Colmar journey?", answer: "About 55 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "paris-bruxelles",
    from: "Paris",
    to: "Bruxelles",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 50.8503,
    toLng: 4.3517,
    distanceKm: 310,
    durationMin: 190,
    priceEstimate: "595 — 720 €",
    category: "longue-distance",
    highlights: ["A1", "Cambrai", "Mons", "Belgique"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Bruxelles | 310 km, dès 595 € | TaxiNeo",
        metaDescription: "Par A1, 3h10 de trajet. Passage par Cambrai, Mons et Belgique. Alternative directe au train ou au bus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Paris → Bruxelles",
        heroSubtitle: "Votre transfert Paris → Bruxelles au prix fixe de 595 — 720 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert international Paris — Bruxelles. Plus flexible que le Thalys pour les groupes.",
        routeDescription: "L'itinéraire emprunte l'A1 puis l'E19 en passant par Cambrai et Mons.",
        faq: [
          { question: "Quel est le prix d'un taxi Paris — Bruxelles ?", answer: "Le forfait est de 595 — 720 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Paris — Bruxelles ?", answer: "Environ 190 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Bruxelles | 310 km, from €595 | TaxiNeo",
        metaDescription: "Via A1, 3h10 ride. Cambrai, Mons and Belgique along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Paris → Brussels",
        heroSubtitle: "Your Paris → Brussels transfer at a fixed price of €595–€720. Online booking, professional driver 24/7.",
        description: "International Paris — Brussels transfer. More flexible than Thalys for groups.",
        routeDescription: "The route takes the A1 then the E19 via Cambrai and Mons.",
        faq: [
          { question: "What is the price of a taxi Paris — Brussels?", answer: "The flat rate is €595–€720 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Paris — Brussels journey?", answer: "About 190 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "paris-amsterdam",
    from: "Paris",
    to: "Amsterdam",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 52.3676,
    toLng: 4.9041,
    distanceKm: 500,
    durationMin: 300,
    priceEstimate: "955 — 1155 €",
    category: "longue-distance",
    highlights: ["A1", "Bruxelles", "Anvers", "Pays-Bas"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Amsterdam | 500 km, dès 955 € | TaxiNeo",
        metaDescription: "Par A1, 5h de trajet. Bruxelles, Anvers et Pays-Bas en chemin. Alternative directe au train ou au bus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Paris → Amsterdam",
        heroSubtitle: "Votre transfert Paris → Amsterdam au prix fixe de 955 — 1155 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert longue distance Paris — Amsterdam à travers la Belgique et les Pays-Bas.",
        routeDescription: "L'itinéraire emprunte l'A1, l'E19 via Bruxelles et Anvers, puis l'A2 néerlandaise.",
        faq: [
          { question: "Quel est le prix d'un taxi Paris — Amsterdam ?", answer: "Le forfait est de 955 — 1155 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Paris — Amsterdam ?", answer: "Environ 300 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Amsterdam | 500 km, from €955 | TaxiNeo",
        metaDescription: "Via A1, 5 hours ride. Brussels, Anvers and Pays-Bas along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Paris → Amsterdam",
        heroSubtitle: "Your Paris → Amsterdam transfer at a fixed price of €955–€1155. Online booking, professional driver 24/7.",
        description: "Long-distance Paris — Amsterdam transfer through Belgium and the Netherlands.",
        routeDescription: "The route takes the A1, E19 via Brussels and Antwerp, then the Dutch A2.",
        faq: [
          { question: "What is the price of a taxi Paris — Amsterdam?", answer: "The flat rate is €955–€1155 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Paris — Amsterdam journey?", answer: "About 300 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "paris-londres",
    from: "Paris",
    to: "Londres",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 51.5074,
    toLng: -0.1278,
    distanceKm: 450,
    durationMin: 300,
    priceEstimate: "860 — 1040 €",
    category: "longue-distance",
    highlights: ["A26", "Eurotunnel Calais", "M20 Angleterre"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Londres | 450 km, dès 860 € | TaxiNeo",
        metaDescription: "Via A26 en 5h. Passage par Eurotunnel Calais et M20 Angleterre. Alternative directe au train ou au bus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Paris → Londres",
        heroSubtitle: "Votre transfert Paris → Londres au prix fixe de 860 — 1040 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Paris — Londres via l'Eurotunnel de Calais. Idéal avec beaucoup de bagages.",
        routeDescription: "L'itinéraire emprunte l'A26 jusqu'à Calais, l'Eurotunnel puis la M20 vers Londres.",
        faq: [
          { question: "Quel est le prix d'un taxi Paris — Londres ?", answer: "Le forfait est de 860 — 1040 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Paris — Londres ?", answer: "Environ 300 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Londres | 450 km, from €860 | TaxiNeo",
        metaDescription: "Via A26, 5 hours ride. Eurotunnel Calais and M20 Angleterre along the way. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Paris → London",
        heroSubtitle: "Your Paris → London transfer at a fixed price of €860–€1040. Online booking, professional driver 24/7.",
        description: "Paris — London transfer via the Calais Eurotunnel. Ideal with lots of luggage.",
        routeDescription: "The route takes the A26 to Calais, the Eurotunnel then the M20 to London.",
        faq: [
          { question: "What is the price of a taxi Paris — London?", answer: "The flat rate is €860–€1040 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Paris — London journey?", answer: "About 300 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "lyon-geneve",
    from: "Lyon",
    to: "Genève",
    fromLat: 45.764,
    fromLng: 4.8357,
    toLat: 46.2044,
    toLng: 6.1432,
    distanceKm: 155,
    durationMin: 100,
    priceEstimate: "295 — 360 €",
    category: "longue-distance",
    prixMin: 295,
    prixMax: 360,
    prixVan: 470,
    dureeMax: 130,
    autoroute: "A42 puis A40",
    peages: "~18 € (inclus)",
    departSlug: "lyon",
    arriveeSlug: "geneve",
    liensInternes: ["geneve-lyon", "lyon-annecy", "lyon-nantua", "lyon-bourg-en-bresse"],
    tags: ["longue-distance", "international", "suisse", "A40"],
    hub: "lyon",
    highlights: ["A42", "Nantua", "Pays de Gex", "Suisse"],
    i18n: {
      fr: {
        metaTitle: "Taxi Lyon → Genève | 150 km, dès 290 €, 1h40 | TaxiNeo",
        metaDescription: "Via A42 en 1h40. En passant par Nantua, Pays de Gex et Suisse. Alternative directe au train ou au bus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Lyon → Genève",
        heroSubtitle: "Votre transfert Lyon → Genève au prix fixe de 295 — 360 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Lyon — Genève à travers le Jura et le Pays de Gex.",
        routeDescription: "L'itinéraire emprunte l'A42 via Ambérieu puis l'A40 vers Genève.",
        introduction:
          "Genève est une ville cosmopolite par excellence, abritant le siège européen des Nations Unies, l'Organisation mondiale de la Santé, le CERN et plus de 200 organisations internationales. Le trajet en taxi depuis Lyon est un classique pour les diplomates, les fonctionnaires internationaux et les hommes d'affaires qui préfèrent le confort du porte-à-porte aux contraintes du TGV ou de l'avion. Le parcours traverse des paysages remarquables, de la Dombes au Jura, avant de déboucher sur le bassin genevois et le lac Léman. TaxiNeo assure ce transfert international avec des chauffeurs qui connaissent les formalités douanières et les accès aux différents quartiers de Genève, des Organisations internationales au quartier des banques en passant par l'aéroport de Genève-Cointrin. Notre tarif fixe en euros inclut les péages français et la vignette autoroutière suisse n'est pas nécessaire car nous empruntons l'autoroute suisse sur un tronçon court gratuit.",
        itineraire:
          "Le parcours quitte Lyon par le périphérique nord et rejoint l'A42 en direction de Genève/Bourg-en-Bresse. On traverse d'abord le plateau de la Dombes avec ses étangs caractéristiques, puis Bourg-en-Bresse. L'A40, autoroute des Titans, prend le relais et s'enfonce dans le massif du Jura. Le passage le plus spectaculaire est le viaduc de Nantua qui enjambe le lac de Nantua à 80 mètres de hauteur, offrant une vue à couper le souffle. L'autoroute traverse ensuite le pays de Gex, au pied du massif du Jura, avec des vues sur le Mont-Blanc par temps clair. Le passage de la frontière franco-suisse se fait à Bardonnex, généralement sans arrêt grâce à l'espace Schengen. L'arrivée à Genève se fait par l'autoroute suisse qui dessert le centre-ville, les organisations internationales (quartier des Nations) ou l'aéroport de Cointrin. Les péages français totalisent environ 18 €, inclus dans le tarif TaxiNeo.",
        conseils:
          "Le trajet Lyon — Genève peut être rallongé de manière significative les vendredis soir (trafic frontalier intense) et lors des grands salons de Genève (Salon de l'Auto, etc.). Nous recommandons les départs tôt le matin ou en milieu de journée. Si vous traversez la frontière avec des marchandises, vérifiez les réglementations douanières suisses. Nos chauffeurs sont familiarisés avec les procédures de contrôle à Bardonnex. Pour les voyageurs se rendant au Palais des Nations, au CERN ou au quartier des organisations internationales, nos chauffeurs connaissent les accès spécifiques et les contrôles de sécurité. Le paiement se fait en euros, au tarif fixe convenu lors de la réservation. Si vous souhaitez être déposé à l'aéroport de Genève-Cointrin pour un vol, précisez-le lors de la réservation pour que le chauffeur s'adapte à votre horaire de vol.",
        comparaisonTransport:
          "Le TGV Lyon Part-Dieu — Genève Cornavin met environ 1h50 pour un billet de 30 à 80 € selon la réservation. Le bus FlixBus propose des tarifs dès 15 € pour 2h à 2h30. BlaBlaCar affiche des prix entre 12 € et 20 €. En voiture, comptez 16 € d'essence et 18 € de péage français, plus la vignette suisse (40 CHF/an). Le taxi TaxiNeo à 295 — 360 € pour 1 à 4 passagers offre un transfert international en toute sérénité, sans se soucier des contraintes douanières, du stationnement à Genève (très cher : 3 à 5 CHF/h) ou de la vignette autoroutière. Pour 3 à 4 passagers, le coût par personne (55 à 93 €) reste compétitif face au TGV en réservation tardive.",
        faq: [
          { question: "Quel est le prix d'un taxi Lyon — Genève ?", answer: "Le forfait est de 295 — 360 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Lyon — Genève ?", answer: "Environ 100 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Lyon → Genève | Fixed price from €290 | TaxiNeo",
        metaDescription: "Via A42, 1h40 ride. Nantua, Pays de Gex and Suisse along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Lyon → Geneva",
        heroSubtitle: "Your Lyon → Geneva transfer at a fixed price of €295–€360. Online booking, professional driver 24/7.",
        description: "Lyon — Geneva transfer through the Jura and Pays de Gex.",
        routeDescription: "The route takes the A42 via Ambérieu then the A40 towards Geneva.",
        introduction:
          "Geneva is a cosmopolitan city par excellence, housing the European headquarters of the United Nations, the World Health Organisation, CERN and over 200 international organisations. The taxi from Lyon is a classic choice for diplomats, international civil servants and business people who prefer door-to-door comfort over the constraints of the TGV or plane. The route crosses remarkable landscapes, from the Dombes to the Jura, before opening onto the Geneva basin and Lake Geneva. TaxiNeo provides this international transfer with drivers who know customs procedures and access to Geneva's various districts, from the International Organisations to the banking quarter via Geneva-Cointrin airport. Our fixed Euro rate includes French tolls and the Swiss motorway vignette is not required as we use a short free section of Swiss motorway.",
        itineraire:
          "The route leaves Lyon via the northern ring road and joins the A42 towards Geneva/Bourg-en-Bresse. You first cross the Dombes plateau with its characteristic ponds, then Bourg-en-Bresse. The A40, the Motorway of the Titans, takes over and plunges into the Jura massif. The most spectacular passage is the Nantua viaduct spanning Lake Nantua at 80 metres height, offering breathtaking views. The motorway then crosses the Pays de Gex at the foot of the Jura, with views of Mont Blanc in clear weather. The Franco-Swiss border crossing at Bardonnex is usually without stopping thanks to the Schengen area. Arrival in Geneva is via the Swiss motorway serving the city centre, international organisations (Nations quarter) or Cointrin airport. French tolls total approximately €18, included in the TaxiNeo fare.",
        conseils:
          "The Lyon — Geneva journey can be significantly extended on Friday evenings (intense cross-border traffic) and during major Geneva exhibitions (Motor Show, etc.). We recommend early morning or midday departures. If crossing the border with goods, check Swiss customs regulations. Our drivers are familiar with Bardonnex checkpoint procedures. For travellers heading to the Palais des Nations, CERN or the international organisations quarter, our drivers know the specific access points and security checks. Payment is in euros at the fixed rate agreed when booking. If you wish to be dropped at Geneva-Cointrin airport for a flight, specify this when booking so the driver can adapt to your flight schedule.",
        comparaisonTransport:
          "The TGV Lyon Part-Dieu — Geneva Cornavin takes about 1h50 for a ticket from €30 to €80 depending on booking time. FlixBus offers fares from €15 for 2h to 2h30. BlaBlaCar lists prices between €12 and €20. By car, budget €16 for fuel and €18 for French tolls, plus the Swiss vignette (40 CHF/year). The TaxiNeo taxi at €295–€360 for 1 to 4 passengers offers a stress-free international transfer, without worrying about customs, parking in Geneva (very expensive: 3 to 5 CHF/h) or the motorway vignette. For 3 to 4 passengers, the per-person cost (€55 to €93) remains competitive against late-booking TGV fares.",
        faq: [
          { question: "What is the price of a taxi Lyon — Geneva?", answer: "The flat rate is €295–€360 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Lyon — Geneva journey?", answer: "About 100 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "paris-strasbourg",
    from: "Paris",
    to: "Strasbourg",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 48.5734,
    toLng: 7.7521,
    distanceKm: 490,
    durationMin: 280,
    priceEstimate: "935 — 1135 €",
    category: "longue-distance",
    prixMin: 935,
    prixMax: 1135,
    prixVan: 1485,
    dureeMax: 340,
    autoroute: "A4",
    peages: "~35 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "strasbourg",
    liensInternes: ["paris-reims", "paris-metz", "paris-nancy"],
    tags: ["longue-distance", "business"],
    hub: "paris",
    highlights: ["A4", "Metz", "Saverne", "Alsace"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Strasbourg | 490 km, dès 935 € | TaxiNeo",
        metaDescription: "Par A4, 4h40 de trajet. Metz, Saverne, Alsace sur le parcours. Alternative directe au train ou au bus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Paris → Strasbourg",
        heroSubtitle: "Votre transfert Paris → Strasbourg au prix fixe de 935 — 1135 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert longue distance Paris — Strasbourg, capitale européenne.",
        routeDescription: "L'itinéraire emprunte l'A4 via Reims, Metz et le col de Saverne.",
        introduction:
          "Strasbourg, capitale de l'Alsace et siège du Parlement européen, de la Cour européenne des droits de l'homme et du Conseil de l'Europe, accueille un flux constant de diplomates, fonctionnaires européens, lobbyistes et journalistes qui font la navette avec Paris. Le quartier européen de Strasbourg, la Petite France classée UNESCO et la cathédrale Notre-Dame avec son horloge astronomique font de la ville un mélange unique de patrimoine historique et d'institutions internationales. Le taxi privé est le moyen idéal pour rejoindre Strasbourg avec des dossiers confidentiels, du matériel de conférence ou simplement pour profiter du trajet pour préparer ses réunions. En décembre, le marché de Noël de Strasbourg, le plus ancien de France (Christkindelsmärik), attire des visiteurs de toute l'Europe. Les familles alsaciennes installées à Paris apprécient ce service pour les retours au pays avec tout leur chargement — choucroute, munster, vins d'Alsace au retour. Le parcours à travers la Champagne offre en prime la possibilité d'un arrêt dans une maison de champagne à Reims.",
        itineraire:
          "Le départ se fait par la Porte de Bercy ou la Porte de Vincennes vers l'A4. Après la traversée de la banlieue est et la forêt de Meaux, la route atteint Reims (km 145), capitale du champagne, dont les caves Taittinger et Veuve Clicquot sont inscrites au patrimoine UNESCO. Après Reims, l'A4 traverse la plaine de Champagne — paysage de grandes cultures à perte de vue — avant d'atteindre la Lorraine. Metz (km 330), avec sa gare impériale et le Centre Pompidou-Metz, constitue une pause idéale. Les 160 derniers kilomètres traversent le Pays de Sarrebourg et les Vosges du Nord avant le col de Saverne (alt. 413 m), point d'entrée spectaculaire en Alsace avec une vue panoramique sur la plaine du Rhin. La descente vers Strasbourg révèle les premiers colombages alsaciens et les vignobles de la route des Vins. L'arrivée se fait par l'A35 avec sortie vers le centre historique, le quartier européen ou Kehl en Allemagne.",
        conseils:
          "L'A4 est une autoroute fluide sauf en sortie de Paris (Porte de Bercy) entre 7h et 9h. Le créneau optimal est un départ entre 9h30 et 11h. Le col de Saverne peut être enneigé en hiver (décembre-février) : votre chauffeur est équipé de pneus hiver. Si vous voyagez en décembre pour le marché de Noël, réservez au moins une semaine à l'avance car la demande est très forte. Pour les amateurs de champagne, un arrêt à Reims (détour de 10 min depuis l'A4) permet de visiter les caves en 1h environ. L'aire de Verdun-Saint-Nicolas (km 265) est recommandée pour une pause : elle offre un espace pique-nique agréable et un petit musée sur la bataille de Verdun. En été, la route des Vins d'Alsace depuis Saverne est une alternative pittoresque pour les 50 derniers kilomètres.",
        comparaisonTransport:
          "Le TGV Est Paris — Strasbourg met 1h46 grâce à la LGV Est, pour 25 € (Ouigo) à 110 € (1ère flexible) par personne. C'est l'un des TGV les plus compétitifs de France. Cependant, notre taxi à partir de 935 € reste pertinent pour les groupes de 3-4 personnes (le TGV pour 4 revient entre 100 et 440 €), les voyageurs avec bagages encombrants et ceux qui souhaitent s'arrêter à Reims pour les champagnes ou à Metz pour le Pompidou. Pour les allers-retours professionnels, le gain de flexibilité par rapport aux horaires de TGV est un atout apprécié des cadres.",
        faq: [
          { question: "Quel est le prix d'un taxi Paris — Strasbourg ?", answer: "Le forfait est de 935 — 1135 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Paris — Strasbourg ?", answer: "Environ 280 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Strasbourg | 490 km, from €935 | TaxiNeo",
        metaDescription: "Via A4, 4h40 ride. Metz, Saverne and Alsace along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Paris → Strasbourg",
        heroSubtitle: "Your Paris → Strasbourg transfer at a fixed price of €935–€1135. Online booking, professional driver 24/7.",
        description: "Long-distance Paris — Strasbourg transfer, European capital.",
        routeDescription: "The route takes the A4 via Reims, Metz and the Saverne pass.",
        introduction:
          "Strasbourg, capital of Alsace and seat of the European Parliament, hosts a constant flow of diplomats and European officials. The private taxi is ideal for travelling with confidential documents or conference materials. In December, Strasbourg's Christmas market draws visitors from across Europe.",
        itineraire:
          "From Paris via Porte de Bercy onto the A4. Pass Reims (km 145), Metz (km 330) with its Pompidou Centre, then cross the Saverne pass (413m) for a spectacular entry into Alsace. Arrival via the A35.",
        conseils:
          "The A4 is smooth except for Paris exit between 7-9am. Optimal departure 9:30-11am. Saverne pass may have snow in winter. For champagne lovers, a Reims stop adds about 1 hour. Book a week ahead in December for the Christmas market.",
        comparaisonTransport:
          "The TGV takes 1h46 for €25-110 per person. Our taxi from €935 suits groups of 3-4, travellers with bulky luggage, and those wanting stops at Reims or Metz.",
        faq: [
          { question: "What is the price of a taxi Paris — Strasbourg?", answer: "The flat rate is €935–€1135 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Paris — Strasbourg journey?", answer: "About 280 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "paris-bordeaux",
    from: "Paris",
    to: "Bordeaux",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 44.8378,
    toLng: -0.5792,
    distanceKm: 585,
    durationMin: 360,
    priceEstimate: "1115 — 1350 €",
    category: "longue-distance",
    prixMin: 1115,
    prixMax: 1350,
    prixVan: 1775,
    dureeMax: 420,
    autoroute: "A10",
    peages: "~48 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "bordeaux",
    liensInternes: ["paris-tours", "paris-poitiers", "paris-toulouse"],
    tags: ["longue-distance", "tourisme"],
    hub: "paris",
    highlights: ["A10", "Tours", "Poitiers", "Vignobles"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Bordeaux | 585 km, dès 1115 € | TaxiNeo",
        metaDescription: "Par A10, 6h de trajet. Tours, Poitiers et Vignobles en chemin. Dépose porte-à-porte, bagages inclus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Paris → Bordeaux",
        heroSubtitle: "Votre transfert Paris → Bordeaux au prix fixe de 1115 — 1350 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert longue distance Paris — Bordeaux, capitale mondiale du vin.",
        routeDescription: "L'itinéraire emprunte l'A10 via Tours et Poitiers.",
        introduction:
          "Bordeaux est devenue l'une des destinations les plus prisées de France depuis la rénovation spectaculaire de son centre-ville et l'arrivée de la LGV en 2017. La Place de la Bourse et son miroir d'eau, les quais réaménagés de la Garonne, la Cité du Vin et le quartier Saint-Pierre en font une ville d'art et de gastronomie. Le taxi privé Paris — Bordeaux séduit les amateurs de vin qui rejoignent les châteaux du Médoc, de Saint-Émilion ou de Pomerol avec du matériel de dégustation et des caisses vides à remplir. Les familles se rendant au bassin d'Arcachon, à la dune du Pilat ou sur les plages de Lacanau préfèrent le taxi pour transporter planches de surf, vélos et équipements de plage. Les professionnels du secteur viticole, de l'aérospatiale (Dassault Aviation, Thales) et du tourisme d'affaires trouvent dans ce service la flexibilité nécessaire pour enchaîner rendez-vous à Bordeaux Métropole sans dépendre des horaires de train. Depuis la Cité du Vin jusqu'aux Chartrons, Bordeaux offre un cadre de vie exceptionnel que le taxi permet de rejoindre en toute quiétude.",
        itineraire:
          "Le départ de Paris se fait par la Porte d'Orléans ou la Porte d'Italie vers l'A10. Après la traversée de la Beauce, la route passe par Orléans (km 130) et ses ponts sur la Loire, puis Tours (km 235), porte d'entrée du Val de Loire avec ses châteaux. Après Tours, l'autoroute traverse le Poitou en passant par Poitiers (km 340), ville universitaire au riche patrimoine roman. L'aire de Poitiers-Jaunay est idéale pour une pause à mi-parcours, à proximité du Futuroscope. Le trajet se poursuit vers Angoulême, la ville de la BD et de l'image, avant d'entrer en Gironde par Barbezieux et les premières vignes du Bordelais. L'arrivée sur Bordeaux se fait par la rocade nord (A10/A630) avec une sortie vers le centre-ville, les Chartrons ou Mérignac selon votre destination. En cas de trafic sur la rocade bordelaise, le chauffeur peut emprunter les quais de la Garonne pour rejoindre le centre historique.",
        conseils:
          "Le meilleur créneau de départ est entre 8h et 10h en semaine pour arriver à Bordeaux en début d'après-midi. Évitez les départs de vendredi après-midi entre mai et septembre : l'A10 entre Tours et Poitiers est alors très chargée. La rocade de Bordeaux (A630) est tristement célèbre pour ses embouteillages aux heures de pointe : privilégiez une arrivée entre 11h et 15h. Pour les amateurs de vin, demandez au chauffeur un crochet par Saint-Émilion (30 min de détour depuis l'A10, sortie Libourne) — le village médiéval et ses caves méritent le détour. En hiver, le brouillard est fréquent dans la vallée de la Loire entre Orléans et Tours : votre chauffeur adaptera sa vitesse. L'aire de Poitiers-Jaunay (km 340) et celle de Saint-André-de-Cubzac (km 555) sont les meilleures pour les pauses.",
        comparaisonTransport:
          "Le TGV Paris-Montparnasse → Bordeaux Saint-Jean met désormais 2h04 grâce à la LGV Sud Europe Atlantique, pour 16 € (Ouigo) à 120 € (Business 1ère) par personne. Pour 4 passagers, le TGV coûte 64 à 480 €, plus les taxis locaux. En voiture, comptez 48 € de péages A10 et 55 € d'essence (93 € total). Notre taxi à partir de 1115 € se justifie à 3-4 passagers, et devient indispensable si vous transportez du vin, des vélos ou du matériel volumineux. Le confort d'un véhicule privé avec Wi-Fi et la liberté de s'arrêter à Saint-Émilion en chemin sont des atouts que le TGV ne peut offrir.",
        faq: [
          { question: "Quel est le prix d'un taxi Paris — Bordeaux ?", answer: "Le forfait est de 1115 — 1350 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Paris — Bordeaux ?", answer: "Environ 360 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Bordeaux | 585 km, from €1115 | TaxiNeo",
        metaDescription: "Via A10, 6h ride. Tours, Poitiers and Vignobles along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Paris → Bordeaux",
        heroSubtitle: "Your Paris → Bordeaux transfer at a fixed price of €1115–€1350. Online booking, professional driver 24/7.",
        description: "Long-distance Paris — Bordeaux transfer, world wine capital.",
        routeDescription: "The route takes the A10 via Tours and Poitiers.",
        introduction:
          "Bordeaux has become one of France's most sought-after destinations since its spectacular centre renovation and the 2017 high-speed rail link. The private taxi appeals to wine lovers heading to Médoc and Saint-Émilion, families bound for Arcachon Bay, and aerospace professionals.",
        itineraire:
          "From Paris via Porte d'Orléans onto the A10, passing Orléans (km 130), Tours (km 235) and Poitiers (km 340). The Poitiers-Jaunay rest area near Futuroscope is ideal for a midpoint break. Continue through Angoulême before entering the Bordeaux wine region.",
        conseils:
          "Best departure between 8-10am on weekdays. Avoid Friday afternoons May-September. Bordeaux's ring road (A630) is notorious for rush-hour jams. Wine lovers can request a detour through Saint-Émilion (30 min extra).",
        comparaisonTransport:
          "The TGV takes 2h04 for €16-120 per person. For 4 passengers, that's €64-480 plus local taxis. Our taxi from €1115 makes sense for 3-4 passengers and is essential for transporting wine, bikes or bulky equipment.",
        faq: [
          { question: "What is the price of a taxi Paris — Bordeaux?", answer: "The flat rate is €1115–€1350 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Paris — Bordeaux journey?", answer: "About 360 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "paris-marseille",
    from: "Paris",
    to: "Marseille",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 43.2965,
    toLng: 5.3698,
    distanceKm: 775,
    durationMin: 450,
    priceEstimate: "1480 — 1790 €",
    category: "longue-distance",
    prixMin: 1480,
    prixMax: 1790,
    prixVan: 2345,
    dureeMax: 520,
    autoroute: "A6 puis A7",
    peages: "~65 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "marseille",
    liensInternes: ["paris-lyon", "paris-avignon", "paris-montpellier"],
    tags: ["longue-distance", "tourisme"],
    hub: "paris",
    highlights: ["A6", "Lyon", "Vallée du Rhône", "Provence"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Marseille | 775 km, dès 1480 € | TaxiNeo",
        metaDescription: "Via A6 en 7h30. Lyon, Vallée du Rhône, Provence sur le parcours. Alternative directe au train ou au bus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Paris → Marseille",
        heroSubtitle: "Votre transfert Paris → Marseille au prix fixe de 1480 — 1790 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Paris — Marseille à travers la vallée du Rhône et la Provence.",
        routeDescription: "L'itinéraire emprunte l'A6 puis l'A7 via Lyon et la vallée du Rhône.",
        introduction:
          "Le trajet Paris — Marseille en taxi privé est le choix privilégié des familles partant en vacances dans le Sud avec un volume de bagages important — planches de surf, matériel de plongée, poussettes — que ni le TGV ni l'avion ne peuvent accueillir facilement. Les professionnels du port autonome de Marseille, du secteur de la logistique maritime et de l'industrie pétrochimique de Fos-sur-Mer empruntent également cette liaison pour combiner déplacements et productivité pendant le trajet. Marseille, deuxième ville de France avec plus de 870 000 habitants, est aussi la porte d'entrée des calanques, du Vieux-Port et d'une scène culturelle effervescente autour du MuCEM et de la Cité radieuse de Le Corbusier. En été, les liaisons aériennes et ferroviaires sont souvent saturées et les prix s'envolent, rendant le taxi partagé entre quatre ou cinq passagers très compétitif. Le confort d'un véhicule privé climatisé, avec arrêts à la demande dans les aires autoroutières de la vallée du Rhône, transforme un long trajet en une expérience agréable plutôt qu'une épreuve logistique.",
        itineraire:
          "Votre chauffeur quitte Paris par la Porte d'Orléans et emprunte l'A6 en direction de Lyon. Après Fontainebleau et la traversée de la Bourgogne, le véhicule atteint Lyon après environ 4h30 de route. La pause déjeuner ou café est recommandée à l'aire de Beaune-Tailly ou à celle de Lyon-Nord selon l'heure. Après le contournement de Lyon par l'A46, le chauffeur s'engage sur l'A7, l'emblématique « Autoroute du Soleil » qui longe la vallée du Rhône. On traverse Vienne, Valence — avec ses vergers de pêchers et d'abricotiers — puis Orange et son arc de triomphe romain visible depuis l'autoroute. La descente vers le sud passe par Avignon et Cavaillon avant d'atteindre Aix-en-Provence. Les derniers 30 km entre Aix et Marseille se font sur l'A51 puis l'A50, avec une arrivée par le tunnel du Prado-Carénage pour rejoindre le centre-ville ou le Vieux-Port. En période estivale, le tronçon Lyon — Orange est régulièrement encombré le samedi matin : le chauffeur peut alors emprunter l'alternative par l'A47 et la RN88 via Saint-Étienne pour contourner le bouchon de Valence.",
        conseils:
          "Le Paris — Marseille est un trajet de longue haleine : prévoyez au minimum une pause toutes les 2h30 pour le confort de tous les passagers. Les meilleures aires d'arrêt sont Beaune-Tailly (km 310), Montélimar-Ouest (km 590, célèbre pour son nougat) et Aix-en-Provence (km 740). Évitez absolument le samedi matin en juillet-août, journée classée rouge par Bison Futé, où la vallée du Rhône connaît des bouchons de plusieurs heures entre Valence et Orange. Privilégiez un départ nocturne (22h-23h) pour arriver le lendemain matin avec un trajet fluide. En hiver, le mistral peut souffler violemment dans la vallée du Rhône entre Montélimar et Marseille : votre chauffeur adaptera sa conduite en conséquence. Si vous voyagez avec des enfants, le passage à Montélimar est l'occasion d'acheter du nougat artisanal. Pensez à emporter des encas et de l'eau en quantité suffisante pour un trajet de 7 à 8 heures.",
        comparaisonTransport:
          "Le TGV Paris Gare de Lyon → Marseille Saint-Charles met 3h20 et coûte de 39 € (Ouigo) à 150 € (1ère classe flexible) par personne. Pour quatre passagers, le TGV revient entre 156 € et 600 €, plus les transferts locaux. L'avion Paris-Orly → Marseille-Provence met 1h20 en vol mais 3h porte-à-porte avec les formalités, et coûte 60 à 200 € par personne. Notre taxi à partir de 1480 € tout compris (péages 65 € et carburant inclus) se justifie surtout à 3 ou 4 passagers et offre un avantage décisif : le transport porte-à-porte de bagages volumineux, la flexibilité totale et le confort d'un véhicule privé climatisé avec Wi-Fi.",
        faq: [
          { question: "Quel est le prix d'un taxi Paris — Marseille ?", answer: "Le forfait est de 1480 — 1790 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Paris — Marseille ?", answer: "Environ 450 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h30." },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Marseille | 775 km, from €1480 | TaxiNeo",
        metaDescription: "Via A6, 7 hours ride. Lyon, Vallée du Rhône and Provence along the way. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Paris → Marseille",
        heroSubtitle: "Your Paris → Marseille transfer at a fixed price of €1480–€1790. Online booking, professional driver 24/7.",
        description: "Paris — Marseille transfer through the Rhône Valley and Provence.",
        routeDescription: "The route takes the A6 then the A7 via Lyon and the Rhône Valley.",
        introduction:
          "The Paris — Marseille private taxi is the preferred choice for families heading south with bulky luggage, maritime professionals and travellers for whom the plane or TGV are impractical. Marseille, France's second city with 870,000+ inhabitants, is the gateway to the calanques, the Vieux-Port and a vibrant cultural scene. In summer, when flights and trains are overbooked, a shared taxi among 4-5 passengers becomes very competitive.",
        itineraire:
          "Your driver leaves Paris via Porte d'Orléans onto the A6 towards Lyon. After crossing Burgundy, you reach Lyon in about 4h30. After bypassing Lyon on the A46, the driver takes the A7 along the Rhône valley through Vienne, Valence, Orange and Avignon before reaching Aix-en-Provence. The final 30 km to central Marseille use the A51 and A50, arriving via the Prado-Carénage tunnel.",
        conseils:
          "Plan at least one break every 2.5 hours. Best stops are Beaune-Tailly (km 310), Montélimar (km 590, famous for nougat) and Aix-en-Provence (km 740). Avoid Saturday mornings in July-August when the Rhône valley is gridlocked. Consider a night departure (10-11pm) for smooth traffic.",
        comparaisonTransport:
          "The TGV takes 3h20 and costs €39-150 per person. Flying takes 1h20 but 3h door-to-door, costing €60-200 per person. Our taxi from €1480 all-inclusive makes most sense for 3 or 4 passengers, with the advantage of unlimited luggage and door-to-door convenience.",
        faq: [
          { question: "What is the price of a taxi Paris — Marseille?", answer: "The flat rate is €1480–€1790 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Paris — Marseille journey?", answer: "About 450 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "paris-nice",
    from: "Paris",
    to: "Nice",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 43.7102,
    toLng: 7.262,
    distanceKm: 930,
    durationMin: 540,
    priceEstimate: "1775 — 2150 €",
    category: "longue-distance",
    prixMin: 1775,
    prixMax: 2150,
    prixVan: 2815,
    dureeMax: 620,
    autoroute: "A6 puis A8",
    peages: "~80 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "nice",
    liensInternes: ["paris-marseille", "paris-lyon", "paris-avignon"],
    tags: ["longue-distance", "tourisme"],
    hub: "paris",
    highlights: ["A6", "A8", "Côte d'Azur", "Provence"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Nice | 930 km, dès 1775 €, 8h20 | TaxiNeo",
        metaDescription: "Par A6, 9h de trajet. Côte d'Azur et Provence sur le parcours. Dépose porte-à-porte, bagages inclus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Paris → Nice",
        heroSubtitle: "Votre transfert Paris → Nice au prix fixe de 1775 — 2150 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Paris — Nice sur la Côte d'Azur. Idéal pour voyager avec beaucoup de bagages.",
        routeDescription: "L'itinéraire emprunte l'A6, l'A7 puis l'A8 le long de la Côte d'Azur.",
        introduction:
          "Nice, perle de la Riviera française, est la destination touristique par excellence du sud-est de la France. La ville attire aussi bien les touristes internationaux séduits par la Promenade des Anglais et le Carnaval de Nice que les professionnels de la tech installés dans la technopole de Sophia Antipolis, les congressistes du Palais des Congrès de l'Acropolis et les participants au MIPIM à Cannes toute proche. Un taxi privé Paris — Nice permet de transporter facilement clubs de golf, matériel de ski nautique ou bagages volumineux pour un séjour prolongé. Les familles nombreuses trouvent dans ce service une alternative économique à l'avion quand il faut acheter cinq ou six billets en haute saison. Le trajet traverse des paysages somptueux, de la Bourgogne à la Provence, avec la possibilité de s'arrêter pour déjeuner dans un restaurant étoilé de la vallée du Rhône ou visiter le pont du Gard en chemin. Nice offre ensuite un art de vivre méditerranéen unique, entre socca du Vieux-Nice, marchés colorés du Cours Saleya et musées Matisse et Chagall.",
        itineraire:
          "Le trajet suit l'A6 de Paris à Lyon (465 km, ~4h30), puis l'A7 le long de la vallée du Rhône jusqu'à Aix-en-Provence (770 km, ~7h). Après Aix, le véhicule emprunte l'A8 « La Provençale » qui longe la Côte d'Azur : Fréjus, Cannes, Antibes puis Nice. L'arrivée sur Nice se fait par la voie rapide du bord de mer (Promenade des Anglais) ou par l'A8 sortie Nice-Nord selon la destination. Deux pauses sont prévues : la première à mi-chemin entre Paris et Lyon (aire de Beaune-Tailly), la seconde entre Lyon et Nice (aire de Montélimar ou Vidauban). En cas de trafic estival sur l'A7, une alternative par l'A51 via Gap et Digne-les-Bains permet de rejoindre Nice par l'arrière-pays, un itinéraire plus long mais spectaculaire à travers les Alpes du Sud.",
        conseils:
          "Le Paris — Nice est un trajet de près de 9 heures : un départ tôt le matin (5h-6h) ou en soirée (20h-21h) est vivement recommandé pour éviter le trafic. Prévoyez au minimum trois pauses. Le tronçon Lyon — Orange sur l'A7 est le plus critique en été, avec des ralentissements importants le samedi (classement Bison Futé rouge ou noir en juillet-août). L'A8 entre Fréjus et Nice est souvent ralentie le dimanche soir en période estivale. En hiver, les conditions sur l'A8 dans le massif de l'Esterel peuvent être délicates (vent, pluie) mais la neige est rare sur le littoral. Si vous arrivez à Nice le soir, profitez du panorama depuis la colline du Château pour un coucher de soleil inoubliable. Pour les transferts vers Monaco, Cannes ou Antibes, un supplément de 20 à 50 € s'applique.",
        comparaisonTransport:
          "L'avion Paris-Orly ou CDG → Nice met 1h30 en vol, mais 3h30 porte-à-porte pour 50 à 300 € par personne. Le TGV Paris → Nice met environ 5h30 pour 30 à 150 € par personne. Pour une famille de cinq, l'avion revient entre 250 et 1 500 € et le TGV entre 150 et 750 €, auxquels il faut ajouter les transferts locaux. Notre taxi à partir de 1775 € se justifie surtout pour 4-5 passagers, avec l'avantage incomparable de transporter tous les bagages et équipements de vacances directement du domicile parisien à l'hôtel niçois.",
        faq: [
          { question: "Quel est le prix d'un taxi Paris — Nice ?", answer: "Le forfait est de 1775 — 2150 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Paris — Nice ?", answer: "Environ 540 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Nice | Fixed price from €1775 | TaxiNeo",
        metaDescription: "Via A6, 9h ride. Côte d'Azur and Provence along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Paris → Nice",
        heroSubtitle: "Your Paris → Nice transfer at a fixed price of €1775–€2150. Online booking, professional driver 24/7.",
        description: "Paris — Nice transfer to the French Riviera. Ideal for travelling with lots of luggage.",
        routeDescription: "The route takes the A6, A7 then A8 along the French Riviera.",
        introduction:
          "Nice, the jewel of the French Riviera, attracts tourists, tech professionals at Sophia Antipolis, and congress attendees. A private taxi allows easy transport of golf clubs, water sports equipment and bulky luggage. For families of five, this becomes an economical alternative to flying in high season.",
        itineraire:
          "The journey follows the A6 to Lyon (465 km), A7 along the Rhône valley to Aix-en-Provence (770 km), then the A8 along the coast through Fréjus, Cannes and Antibes to Nice. Two breaks are planned: Beaune-Tailly and Montélimar or Vidauban.",
        conseils:
          "This is a 9-hour journey: depart early (5-6am) or in the evening. Plan at least three breaks. The A7 between Lyon and Orange is critical in summer. The A8 is often slow on Sunday evenings. For Monaco, Cannes or Antibes transfers, a €20-50 supplement applies.",
        comparaisonTransport:
          "Flights take 1h30 but 3h30 door-to-door for €50-300 per person. TGV takes 5h30 for €30-150. Our taxi from €1775 makes most sense for 4-5 passengers with unlimited luggage.",
        faq: [
          { question: "What is the price of a taxi Paris — Nice?", answer: "The flat rate is €1775–€2150 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Paris — Nice journey?", answer: "About 540 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "paris-toulouse",
    from: "Paris",
    to: "Toulouse",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 43.6047,
    toLng: 1.4442,
    distanceKm: 680,
    durationMin: 390,
    priceEstimate: "1295 — 1570 €",
    category: "longue-distance",
    prixMin: 1295,
    prixMax: 1570,
    prixVan: 2060,
    dureeMax: 460,
    autoroute: "A10 puis A20",
    peages: "~50 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "toulouse",
    liensInternes: ["paris-bordeaux", "paris-limoges", "paris-montpellier"],
    tags: ["longue-distance", "business"],
    hub: "paris",
    highlights: ["A10", "A20", "Limoges", "Cahors"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Toulouse | 680 km, dès 1295 € | TaxiNeo",
        metaDescription: "Itinéraire A10, environ 6h30. Limoges et Cahors sur le parcours. Dépose porte-à-porte, bagages inclus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Paris → Toulouse",
        heroSubtitle: "Votre transfert Paris → Toulouse au prix fixe de 1295 — 1570 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Paris — Toulouse, la ville rose, via le Limousin.",
        routeDescription: "L'itinéraire emprunte l'A10 puis l'A20 via Limoges et Cahors.",
        introduction:
          "Toulouse, surnommée la Ville rose pour la teinte caractéristique de ses briques, est le siège d'Airbus, du CNES et de Thales Alenia Space, faisant d'elle la capitale européenne de l'aéronautique et du spatial. Les ingénieurs, cadres et sous-traitants du secteur aérospatial effectuent régulièrement la liaison Paris — Toulouse pour des réunions sur les sites de Blagnac, Colomiers ou au centre spatial de Toulouse. Un taxi privé permet d'emporter maquettes, prototypes et dossiers confidentiels impossibles à transporter en avion ou en TGV. Les familles rejoignant leurs racines dans le Sud-Ouest apprécient le confort porte-à-porte, surtout lors des départs en vacances vers les Pyrénées, le Pays basque ou la côte atlantique accessible depuis Toulouse. La ville offre également une richesse culturelle immense : le Capitole, la basilique Saint-Sernin classée UNESCO, le marché Victor-Hugo et la gastronomie du cassoulet. Le quartier des Carmes et la rive gauche de la Garonne regorgent de restaurants étoilés et de bistrots où se mêlent tradition et créativité culinaire.",
        itineraire:
          "Le départ se fait par la Porte d'Orléans direction A10 vers Orléans. Après la traversée de la Beauce et ses immenses champs de blé, le véhicule atteint Vierzon (km 200) où il quitte l'A10 pour emprunter l'A20. Cette autoroute, en grande partie gratuite dans sa section limousine, traverse des paysages vallonnés couverts de forêts de châtaigniers. Limoges (km 380) constitue le point de mi-parcours idéal pour une pause : l'aire de Limoges-Val de l'Aurence offre des commodités complètes. Après Limoges, la descente vers le sud passe par Uzerche, surnommée la « Perle du Limousin », puis Brive-la-Gaillarde et son fameux marché. Le trajet se poursuit par Souillac et Cahors, ancienne cité médiévale dominée par le pont Valentré. Les 100 derniers kilomètres traversent le Quercy blanc avec ses causses calcaires avant d'atteindre Montauban puis Toulouse. L'arrivée se fait par la rocade est (A62/A61) ou par l'avenue des Minimes selon la destination dans l'agglomération.",
        conseils:
          "Pour un Paris — Toulouse optimal, privilégiez un départ matinal entre 6h et 8h pour arriver en début d'après-midi, ou un départ en soirée vers 20h pour profiter de routes dégagées. L'A20 étant en grande partie gratuite entre Vierzon et Brive, elle attire beaucoup de poids lourds : soyez patient dans les sections à deux voies, notamment entre Limoges et Brive. En hiver, le plateau de Millevaches (alt. 800 m) entre Limoges et Uzerche peut connaître des chutes de neige : votre chauffeur dispose de chaînes si nécessaire. La pause recommandée se situe à Limoges (3h30 après le départ) ou à Brive (4h30). Si vous souhaitez visiter Cahors et son pont Valentré, prévoyez un arrêt de 30 minutes — c'est un détour de seulement 5 minutes depuis l'A20. L'été, les températures dans le Quercy et à Toulouse dépassent régulièrement 35°C : la climatisation du véhicule est indispensable.",
        comparaisonTransport:
          "L'avion Paris-Orly → Toulouse-Blagnac met 1h15 en vol, mais 3h porte-à-porte avec les transferts et l'enregistrement, pour un coût de 50 à 250 € par personne. Le TGV via Bordeaux met environ 4h15 pour 40 à 130 € par personne. En voiture, comptez 50 € de péages et 65 € d'essence. Notre taxi à partir de 1295 € tout compris se justifie surtout à plusieurs et offre un avantage majeur : aucune contrainte horaire, des bagages illimités et la possibilité de travailler confortablement pendant 6h30 de trajet avec Wi-Fi et prises de courant.",
        faq: [
          { question: "Quel est le prix d'un taxi Paris — Toulouse ?", answer: "Le forfait est de 1295 — 1570 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Paris — Toulouse ?", answer: "Environ 390 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Toulouse | 680 km, from €1295 | TaxiNeo",
        metaDescription: "Direct route via A10, 6h30. Limoges and Cahors along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Paris → Toulouse",
        heroSubtitle: "Your Paris → Toulouse transfer at a fixed price of €1295–€1570. Online booking, professional driver 24/7.",
        description: "Paris — Toulouse, the Pink City, via Limousin.",
        routeDescription: "The route takes the A10 then A20 via Limoges and Cahors.",
        introduction:
          "Toulouse, nicknamed the Pink City, is home to Airbus, CNES and Thales Alenia Space. Aerospace professionals regularly commute between Paris and Toulouse. A private taxi allows transporting models, prototypes and confidential documents. Families heading to the South-West also appreciate the door-to-door comfort.",
        itineraire:
          "Departure via Porte d'Orléans onto the A10 through Beauce. At Vierzon (km 200), join the A20 through wooded Limousin hills. Limoges (km 380) is the ideal midpoint stop. Continue through Brive, Souillac and medieval Cahors before reaching Montauban and Toulouse.",
        conseils:
          "Depart early morning (6-8am) to arrive by early afternoon. The A20 is partly toll-free, attracting heavy goods traffic. In winter, the Millevaches plateau can see snowfall. Recommended stop at Limoges or Brive. Summer temperatures in Toulouse regularly exceed 35°C.",
        comparaisonTransport:
          "Flights take 1h15 but 3h door-to-door for €50-250 per person. The TGV via Bordeaux takes 4h15 for €40-130. Our taxi from €1295 makes most sense for groups, with unlimited luggage and complete flexibility.",
        faq: [
          { question: "What is the price of a taxi Paris — Toulouse?", answer: "The flat rate is €1295–€1570 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Paris — Toulouse journey?", answer: "About 390 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "paris-nantes",
    from: "Paris",
    to: "Nantes",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 47.2184,
    toLng: -1.5536,
    distanceKm: 385,
    durationMin: 240,
    priceEstimate: "735 — 890 €",
    category: "longue-distance",
    prixMin: 735,
    prixMax: 890,
    prixVan: 1170,
    dureeMax: 300,
    autoroute: "A11",
    peages: "~32 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "nantes",
    liensInternes: ["paris-le-mans", "paris-angers", "paris-rennes"],
    tags: ["longue-distance", "business"],
    hub: "paris",
    highlights: ["A11", "Le Mans", "Angers"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Nantes | 385 km, dès 735 €, 3h50 | TaxiNeo",
        metaDescription: "Itinéraire A11, environ 4h. Le Mans et Angers sur le parcours. Dépose porte-à-porte, bagages inclus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Paris → Nantes",
        heroSubtitle: "Votre transfert Paris → Nantes au prix fixe de 735 — 890 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Paris — Nantes à travers le Maine et l'Anjou.",
        routeDescription: "L'itinéraire emprunte l'A11 via Le Mans et Angers.",
        introduction:
          "Nantes, sixième ville de France, a connu un essor remarquable ces dernières années grâce à son attractivité économique, culturelle et son cadre de vie exceptionnel entre Loire et océan. L'Île de Nantes, avec ses Machines de l'Île — dont le Grand Éléphant mécanique qui fait le tour du monde sur les réseaux sociaux —, est devenue un symbole de la créativité nantaise. Le quartier de la création accueille startups, studios de design et agences numériques qui attirent des talents de toute la France. Le taxi privé Paris — Nantes est particulièrement apprécié des familles se rendant en Bretagne Sud ou sur la côte atlantique (La Baule, Pornic, Noirmoutier) avec tout leur équipement de vacances. Les cadres de l'industrie agroalimentaire (LU, Bel), de la construction navale (Chantiers de l'Atlantique à Saint-Nazaire) et du numérique font régulièrement ce trajet pour des raisons professionnelles. Le Voyage à Nantes, événement culturel estival qui transforme la ville en musée à ciel ouvert, attire également de nombreux visiteurs parisiens.",
        itineraire:
          "Le départ de Paris se fait par la Porte de Saint-Cloud ou la Porte de Versailles vers l'A13 puis l'A12 et l'A11. Après Chartres et ses flèches de cathédrale visibles à des kilomètres, la route traverse le Perche puis le Maine. Le Mans (km 210), célèbre pour ses 24 Heures, offre une aire de repos pratique. Après Le Mans, l'A11 continue vers Angers (km 300), la capitale de l'Anjou et du doux art de vivre ligérien. Les derniers 90 km traversent le vignoble de Muscadet avant d'atteindre Nantes par la porte nord-est. L'arrivée en ville se fait par le boulevard périphérique (A844) avec des sorties vers le centre-ville, l'Île de Nantes ou la gare Sud.",
        conseils:
          "Le trajet Paris — Nantes est relativement court (4h) et ne nécessite qu'une seule pause, idéalement au Mans ou à Angers. Évitez les départs le vendredi soir en été : l'A11 est très chargée entre Paris et Le Mans avec les vacanciers se rendant sur la côte atlantique. Le samedi matin est plus fluide. En hiver, le tronçon Chartres — Le Mans peut être affecté par le verglas : nos véhicules sont équipés en conséquence. Si vous poursuivez vers La Baule ou Saint-Nazaire, prévoyez 45 minutes supplémentaires. Pour les voyageurs d'affaires, un départ à 6h30 permet d'être à Nantes à 10h30 pour une réunion de fin de matinée.",
        comparaisonTransport:
          "Le TGV Paris-Montparnasse → Nantes met 2h15 pour 15 € (Ouigo) à 90 € (1ère classe). Pour trois personnes, le train coûte 45 à 270 €. En voiture, comptez 32 € de péages et 40 € d'essence (72 €). Notre taxi à partir de 735 € devient intéressant à plusieurs et offre la flexibilité porte-à-porte, la possibilité de poursuivre vers La Baule ou Saint-Nazaire et un espace confortable pour travailler pendant le trajet.",
        faq: [
          { question: "Quel est le prix d'un taxi Paris — Nantes ?", answer: "Le forfait est de 735 — 890 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Paris — Nantes ?", answer: "Environ 240 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Nantes | Fixed price from €735 | TaxiNeo",
        metaDescription: "Direct route via A11, 4h. Le Mans and Angers along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Paris → Nantes",
        heroSubtitle: "Your Paris → Nantes transfer at a fixed price of €735–€890. Online booking, professional driver 24/7.",
        description: "Paris — Nantes transfer through Maine and Anjou.",
        routeDescription: "The route takes the A11 via Le Mans and Angers.",
        introduction:
          "Nantes, France's sixth city, has boomed thanks to its economic attractiveness and exceptional quality of life between Loire and ocean. The private taxi is popular with families heading to Brittany and the Atlantic coast, and professionals in food industry and shipbuilding.",
        itineraire:
          "From Paris via Porte de Saint-Cloud onto the A11. Pass Chartres, Le Mans (km 210) and Angers (km 300) through Muscadet vineyards to Nantes. Arrival via the ring road (A844).",
        conseils:
          "One stop needed, ideally at Le Mans or Angers. Avoid Friday evenings in summer. Departure at 6:30am reaches Nantes by 10:30am for business travellers.",
        comparaisonTransport:
          "TGV takes 2h15 for €15-90 per person. Our taxi from €735 becomes worthwhile for groups, with door-to-door flexibility and the option to continue to La Baule.",
        faq: [
          { question: "What is the price of a taxi Paris — Nantes?", answer: "The flat rate is €735–€890 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Paris — Nantes journey?", answer: "About 240 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "paris-rennes",
    from: "Paris",
    to: "Rennes",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 48.1173,
    toLng: -1.6778,
    distanceKm: 350,
    durationMin: 220,
    priceEstimate: "670 — 810 €",
    category: "longue-distance",
    prixMin: 670,
    prixMax: 810,
    prixVan: 1060,
    dureeMax: 270,
    autoroute: "A11 puis A81",
    peages: "~28 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "rennes",
    liensInternes: ["paris-le-mans", "paris-nantes", "paris-brest"],
    tags: ["longue-distance", "business"],
    hub: "paris",
    highlights: ["A11", "A81", "Laval", "Bretagne"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Rennes | 350 km, dès 670 €, 3h30 | TaxiNeo",
        metaDescription: "Itinéraire A11, environ 3h40. Laval et Bretagne sur le parcours. Dépose porte-à-porte, bagages inclus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Paris → Rennes",
        heroSubtitle: "Votre transfert Paris → Rennes au prix fixe de 670 — 810 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Paris — Rennes, porte d'entrée de la Bretagne.",
        routeDescription: "L'itinéraire emprunte l'A11 puis l'A81 via Laval.",
        introduction:
          "Rennes, capitale de la Bretagne, a connu une transformation spectaculaire ces vingt dernières années. L'arrivée de la LGV en 2017 l'a placée à 1h25 de Paris en TGV, mais la ville garde une identité forte et indépendante. Le quartier de la Gare, le centre historique à pans de bois autour de la place des Lices et le Parlement de Bretagne témoignent d'un patrimoine riche. Rennes est aussi un pôle numérique majeur avec la French Tech Rennes-Saint-Malo, les campus de recherche de Rennes Atalante et le pôle Images & Réseaux. Le taxi privé Paris — Rennes est plébiscité par les familles bretonnes installées en Île-de-France qui rentrent au pays pour les vacances et les week-ends avec enfants, bagages et parfois le chien de la famille. Les professionnels de la tech, de l'agroalimentaire (Lactalis, Yves Rocher) et de la défense (DGA, Thales) font régulièrement cette liaison. Le service est également idéal pour rejoindre Saint-Malo, Dinard ou la côte d'Émeraude depuis Paris en un seul trajet sans rupture de charge.",
        itineraire:
          "Le départ de Paris se fait par la Porte de Saint-Cloud vers l'A13 puis l'A11 en direction du Mans. La traversée de la Beauce et du Perche offre un paysage de plaines agricoles. Au Mans (km 210), le véhicule quitte l'A11 pour l'A81 direction Laval-Rennes. Laval (km 280), préfecture de la Mayenne, est l'occasion d'apercevoir son château médiéval depuis le viaduc. Les 70 derniers kilomètres traversent le bocage breton avec ses haies et ses fermes caractéristiques. L'arrivée à Rennes se fait par la rocade est ou sud selon la destination dans l'agglomération. Le périphérique rennais est généralement fluide sauf aux heures de pointe (8h-9h et 17h30-18h30).",
        conseils:
          "Le Paris — Rennes est un trajet confortable de 3h40 qui ne nécessite qu'une seule pause, idéalement au Mans (km 210). L'A81 est une autoroute peu chargée, l'un des tronçons les plus agréables du réseau français. Évitez toutefois les départs de vendredi entre 16h et 19h en été, quand les vacanciers se dirigent vers les plages bretonnes. Si vous poursuivez vers Saint-Malo, ajoutez 1h depuis Rennes. Pour Dinard et la côte d'Émeraude, comptez 1h15 supplémentaire. En hiver, le tronçon Le Mans — Rennes peut être affecté par le verglas matinal : nos véhicules sont équipés en conséquence. La gastronomie bretonne mérite un arrêt à Rennes : les galettes de la rue Saint-Georges et les crêperies du Vieux-Rennes sont incontournables.",
        comparaisonTransport:
          "Le TGV Paris-Montparnasse → Rennes met 1h25 grâce à la LGV Bretagne-Pays de la Loire, pour 16 € (Ouigo) à 85 € (1ère). C'est l'un des TGV les plus rapides de France. Cependant, notre taxi à partir de 670 € reste pertinent pour les familles (4 billets TGV = 64-340 €, plus taxis locaux), les voyageurs avec animaux de compagnie, ceux qui poursuivent vers la côte bretonne et les professionnels qui veulent optimiser leur temps de trajet.",
        faq: [
          { question: "Quel est le prix d'un taxi Paris — Rennes ?", answer: "Le forfait est de 670 — 810 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Paris — Rennes ?", answer: "Environ 220 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Rennes | Fixed price from €670 | TaxiNeo",
        metaDescription: "Direct route via A11, 3h40. Laval and Bretagne along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Paris → Rennes",
        heroSubtitle: "Your Paris → Rennes transfer at a fixed price of €670–€810. Online booking, professional driver 24/7.",
        description: "Paris — Rennes transfer, gateway to Brittany.",
        routeDescription: "The route takes the A11 then A81 via Laval.",
        introduction:
          "Rennes, Brittany's capital, has undergone a spectacular transformation. The private taxi is popular with Breton families returning home, tech professionals and travellers continuing to Saint-Malo or the Emerald Coast.",
        itineraire:
          "From Paris via Porte de Saint-Cloud onto the A11. Le Mans (km 210), then A81 through Laval (km 280) to Rennes. Arrival via the ring road.",
        conseils:
          "A comfortable 3h40 journey with one stop at Le Mans. The A81 is one of France's least congested motorways. For Saint-Malo, add 1 hour from Rennes.",
        comparaisonTransport:
          "TGV takes 1h25 for €16-85. Our taxi from €670 suits families, pet owners and those continuing to the Brittany coast.",
        faq: [
          { question: "What is the price of a taxi Paris — Rennes?", answer: "The flat rate is €670–€810 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Paris — Rennes journey?", answer: "About 220 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "lyon-marseille",
    from: "Lyon",
    to: "Marseille",
    fromLat: 45.764,
    fromLng: 4.8357,
    toLat: 43.2965,
    toLng: 5.3698,
    distanceKm: 315,
    durationMin: 180,
    priceEstimate: "600 — 730 €",
    category: "longue-distance",
    prixMin: 600,
    prixMax: 730,
    prixVan: 955,
    dureeMax: 220,
    autoroute: "A7 (Autoroute du Soleil)",
    peages: "~28 € de péages",
    hub: "lyon",
    tags: ["longue-distance", "business", "tourisme"],
    highlights: ["A7", "Vallée du Rhône", "Orange", "Avignon"],
    i18n: {
      fr: {
        metaTitle: "Taxi Lyon → Marseille | 315 km, dès 600 € | TaxiNeo",
        metaDescription: "Via A7 en 3h. Vallée du Rhône, Orange, Avignon sur le parcours. Alternative directe au train ou au bus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Lyon → Marseille",
        heroSubtitle: "Votre transfert Lyon → Marseille au prix fixe de 600 — 730 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Lyon — Marseille par la vallée du Rhône.",
        routeDescription: "L'itinéraire emprunte l'A7 à travers la vallée du Rhône via Orange.",
        introduction:
          "Le trajet Lyon — Marseille est l'un des grands classiques de l'axe nord-sud français. Reliant la capitale des Gaules à la cité phocéenne, ce parcours de 315 km descend la vallée du Rhône à travers certains des plus beaux paysages de France : vignobles des Côtes du Rhône, champs de lavande du Tricastin, vergers de la Drôme provençale. Ce transfert est prisé des voyageurs d'affaires ayant des rendez-vous dans les deux métropoles, des familles partant en vacances sur la côte méditerranéenne, et des touristes souhaitant combiner la gastronomie lyonnaise et le charme provençal. En taxi TaxiNeo, vous profitez de 3 heures de confort dans un véhicule climatisé, avec possibilité de travailler ou de vous reposer.",
        itineraire:
          "Départ de Lyon par le tunnel de Fourvière (ou le périphérique est en cas d'embouteillage) pour rejoindre l'A7 direction sud. Passage par Vienne (ancienne capitale romaine) après 30 km, puis Valence à 100 km — la « porte du Midi ». À Montélimar (170 km), vous entrez en Provence : le paysage change, les toits deviennent en tuiles, les cyprès apparaissent. Orange (210 km) marque l'entrée dans le Vaucluse. L'A7 fusionne avec l'A9 à Orange avant de descendre vers Aix-en-Provence (280 km). Les derniers 35 km jusqu'à Marseille empruntent l'A51 puis l'A50 le long de l'Huveaune. Point de vigilance : le tronçon Valence-Montélimar est notoirement chargé les samedis d'été (bouchon du week-end classique).",
        conseils:
          "Évitez les départs le samedi matin en juillet-août : le tronçon Valence-Montélimar est systématiquement embouteillé (jusqu'à 2h de bouchon). Partez avant 7h ou après 14h. En hiver, le mistral peut souffler fort entre Orange et Marseille — pas de danger en berline mais inconfortable en moto. Pour les voyageurs d'affaires, nos véhicules disposent du WiFi et de prises USB — idéal pour 3h de travail productif. Astuce : demandez un arrêt à Montélimar pour acheter du nougat artisanal (10 min d'arrêt, gratuit). Si vous devez être à Marseille pour un vol depuis l'aéroport Marseille-Provence, prévenez le chauffeur qui ajustera l'itinéraire par l'A51/A7 sortie Vitrolles.",
        comparaisonTransport:
          "Le TGV Lyon Part-Dieu → Marseille Saint-Charles met 1h40 pour 30-80 € mais vous dépose en gare, pas à votre destination finale. Avec un taxi local depuis la gare (15-25 €), le budget total est de 45-105 €. BlaBlaCar : 20-30 €. En voiture : ~30 € d'essence + 28 € de péage = 58 €. Le taxi TaxiNeo à 600-730 € est premium mais imbattable en confort : porte-à-porte, pas de gare, pas de parking. À 3-4 passagers, le coût revient à 95-160 €/pers — comparable au TGV première classe avec le service en plus.",
        faq: [
          { question: "Quel est le prix d'un taxi Lyon — Marseille ?", answer: "Le forfait est de 600 — 730 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Lyon — Marseille ?", answer: "Environ 180 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Lyon → Marseille | 315 km, from €600 | TaxiNeo",
        metaDescription: "Via A7, 3 hours ride. Vallée du Rhône, Orange and Avignon along the way. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Lyon → Marseille",
        heroSubtitle: "Your Lyon → Marseille transfer at a fixed price of €600–€730. Online booking, professional driver 24/7.",
        description: "Lyon — Marseille transfer through the Rhône Valley.",
        routeDescription: "The route takes the A7 through the Rhône Valley via Orange.",
        introduction:
          "The Lyon — Marseille route is one of the great north-south French classics. Connecting the capital of Gaul to the Phocaean city, this 315 km journey descends the Rhône valley through some of France's most beautiful landscapes: Côtes du Rhône vineyards, Tricastin lavender fields, Drôme Provençale orchards. This transfer is popular with business travelers, families heading to the Mediterranean coast, and tourists combining Lyonnaise gastronomy with Provençal charm. In a TaxiNeo taxi, you enjoy 3 hours of comfort in an air-conditioned vehicle with the possibility to work or rest.",
        itineraire:
          "Departure from Lyon via the Fourvière tunnel to join the A7 south. Past Vienne (ancient Roman capital) after 30 km, then Valence at 100 km. At Montélimar (170 km), you enter Provence: the landscape transforms with terracotta roofs and cypress trees. Orange (210 km) marks the Vaucluse entry. The last 35 km to Marseille take the A51 then A50. Watch out: the Valence-Montélimar section is notoriously congested on summer Saturdays.",
        conseils:
          "Avoid Saturday morning departures in July-August: the Valence-Montélimar section is systematically jammed (up to 2h delay). Leave before 7am or after 2pm. For business travelers, our vehicles have WiFi and USB ports — ideal for 3 hours of productive work. Tip: request a stop at Montélimar for artisanal nougat (10-min stop, free).",
        comparaisonTransport:
          "TGV Lyon Part-Dieu → Marseille Saint-Charles takes 1h40 for €30-80 but drops you at the station, not your final destination. With a local taxi from the station (€15-25), total budget is €45-105. TaxiNeo at €600-730 is premium but unbeatable in comfort: door-to-door, no station, no parking. At 3-4 passengers, it's €95-160/person — comparable to first-class TGV with added service.",
        faq: [
          { question: "What is the price of a taxi Lyon — Marseille?", answer: "The flat rate is €600–€730 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Lyon — Marseille journey?", answer: "About 180 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "nice-milan",
    from: "Nice",
    to: "Milan",
    fromLat: 43.7102,
    fromLng: 7.262,
    toLat: 45.4642,
    toLng: 9.19,
    distanceKm: 330,
    durationMin: 210,
    priceEstimate: "630 — 765 €",
    category: "longue-distance",
    highlights: ["A10 italienne", "Gênes", "Ligurie"],
    i18n: {
      fr: {
        metaTitle: "Taxi Nice → Milan | 330 km, dès 630 €, 3h30 | TaxiNeo",
        metaDescription: "Via A10 italienne en 3h30. A10 italienne, Gênes et Ligurie en chemin. Dépose porte-à-porte, bagages inclus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Nice → Milan",
        heroSubtitle: "Votre transfert Nice → Milan au prix fixe de 630 — 765 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert international Nice — Milan via la Ligurie italienne.",
        routeDescription: "L'itinéraire emprunte l'A10 italienne en longeant la côte ligure via Gênes.",
        faq: [
          { question: "Quel est le prix d'un taxi Nice — Milan ?", answer: "Le forfait est de 630 — 765 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Nice — Milan ?", answer: "Environ 210 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Nice → Milan | Fixed price from €630 | TaxiNeo",
        metaDescription: "Via A10 italienne, 3h30 ride. A10 italienne, Gênes and Ligurie along the way. Drop-off at your exact address. Faster and more direct than train or bus.",
        heroTitle: "Taxi Nice → Milan",
        heroSubtitle: "Your Nice → Milan transfer at a fixed price of €630–€765. Online booking, professional driver 24/7.",
        description: "International Nice — Milan transfer via the Italian Riviera.",
        routeDescription: "The route takes the Italian A10 along the Ligurian coast via Genoa.",
        faq: [
          { question: "What is the price of a taxi Nice — Milan?", answer: "The flat rate is €630–€765 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Nice — Milan journey?", answer: "About 210 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "strasbourg-luxembourg",
    from: "Strasbourg",
    to: "Luxembourg",
    fromLat: 48.5734,
    fromLng: 7.7521,
    toLat: 49.6116,
    toLng: 6.1319,
    distanceKm: 230,
    durationMin: 140,
    priceEstimate: "440 — 535 €",
    category: "longue-distance",
    highlights: ["A4", "Metz", "Thionville"],
    i18n: {
      fr: {
        metaTitle: "Taxi Strasbourg → Luxembourg | 230 km, dès 440 € | TaxiNeo",
        metaDescription: "Itinéraire A4, environ 2h20. Metz et Thionville sur le parcours. Dépose porte-à-porte, bagages inclus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Strasbourg → Luxembourg",
        heroSubtitle: "Votre transfert Strasbourg → Luxembourg au prix fixe de 440 — 535 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert Strasbourg — Luxembourg via Metz et la Lorraine.",
        routeDescription: "L'itinéraire emprunte l'A4 puis l'A31 via Metz et Thionville.",
        faq: [
          { question: "Quel est le prix d'un taxi Strasbourg — Luxembourg ?", answer: "Le forfait est de 440 — 535 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Strasbourg — Luxembourg ?", answer: "Environ 140 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Strasbourg → Luxembourg | 230 km, from €440 | TaxiNeo",
        metaDescription: "Direct route via A4, 2h20. Metz and Thionville along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Strasbourg → Luxembourg",
        heroSubtitle: "Your Strasbourg → Luxembourg transfer at a fixed price of €440–€535. Online booking, professional driver 24/7.",
        description: "Strasbourg — Luxembourg transfer via Metz and Lorraine.",
        routeDescription: "The route takes the A4 then A31 via Metz and Thionville.",
        faq: [
          { question: "What is the price of a taxi Strasbourg — Luxembourg?", answer: "The flat rate is €440–€535 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Strasbourg — Luxembourg journey?", answer: "About 140 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },
  {
    slug: "lille-bruxelles",
    from: "Lille",
    to: "Bruxelles",
    fromLat: 50.6292,
    fromLng: 3.0573,
    toLat: 50.8503,
    toLng: 4.3517,
    distanceKm: 115,
    durationMin: 80,
    priceEstimate: "220 — 270 €",
    category: "longue-distance",
    prixMin: 220,
    prixMax: 270,
    prixVan: 350,
    dureeMax: 110,
    autoroute: "A27 puis E42 (Belgique)",
    peages: "~3 € de péages (France uniquement)",
    departSlug: "lille",
    arriveeSlug: "bruxelles",
    liensInternes: ["lille-bruges", "lille-gand", "lille-tournai", "lille-calais"],
    tags: ["longue-distance", "belgique", "capitale", "europe", "affaires"],
    hub: "lille",
    highlights: ["A27", "E19", "Tournai", "Belgique"],
    i18n: {
      fr: {
        metaTitle: "Taxi Lille → Bruxelles | 110 km, dès 210 € | TaxiNeo",
        metaDescription: "Par A27, 1h20 de trajet. Passage par E19, Tournai et Belgique. Alternative directe au train ou au bus. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Lille → Bruxelles",
        heroSubtitle: "Votre transfert Lille → Bruxelles au prix fixe de 220 — 270 €. Réservation en ligne, chauffeur professionnel 24h/24.",
        description: "Transfert transfrontalier Lille — Bruxelles en 1h20.",
        routeDescription: "L'itinéraire emprunte l'A27 puis l'E19 via Tournai.",
        introduction:
          "Bruxelles, capitale du Royaume de Belgique et siège des principales institutions européennes — Commission européenne, Conseil de l'Union européenne, Parlement européen (sessions plénières à Strasbourg) — est une métropole cosmopolite de 1,2 million d'habitants (2,1 millions dans la région métropolitaine). La Grand-Place, considérée comme l'une des plus belles places du monde et classée au patrimoine mondial de l'UNESCO, est entourée de maisons de corporations baroques aux façades dorées. Bruxelles est aussi la ville du Manneken Pis, de l'Atomium (construit pour l'Expo 58), du quartier Art nouveau de Victor Horta, des Musées Royaux des Beaux-Arts (Bruegel, Rubens, Magritte), du chocolat belge (Neuhaus, Marcolini, Wittamer), des gaufres et des frites. La ville est un carrefour linguistique unique : officiellement bilingue français-néerlandais, elle accueille une population internationale liée aux institutions européennes et à l'OTAN. Depuis Lille, Bruxelles est une destination incontournable pour les voyageurs d'affaires, les eurocrates en transit, les touristes culturels et les amateurs de gastronomie belge. Le taxi offre un confort inégalé face au Thalys pour les groupes ou les déplacements avec bagages volumineux.",
        itineraire:
          "Votre chauffeur quitte Lille par l'A27 en direction de Tournai et de la Belgique. La frontière franco-belge est franchie sans contrôle (espace Schengen). Après Tournai, l'itinéraire rejoint l'E42 (autoroute de Wallonie) en direction de Mons et Bruxelles. On traverse le Hainaut wallon, région de collines douces, de prairies et de villages agricoles. Après Ath, petite ville médiévale connue pour sa Ducasse (cortège folklorique UNESCO), l'autoroute oblique vers le nord-est en direction de Bruxelles. L'arrivée dans la capitale belge se fait par le Ring de Bruxelles (R0), périphérique qui permet de desservir tous les quartiers : centre historique (Grand-Place, Manneken Pis), quartier européen (Schuman, Berlaymont), Atomium (Heysel), gare du Midi (Eurostar/Thalys) ou aéroport de Bruxelles-Zaventem si besoin. Les péages sont limités au tronçon français de l'A27 (environ 3 €) ; les autoroutes belges sont gratuites. Le trajet dure 1h20 en conditions normales et peut atteindre 1h50 aux heures de pointe bruxelloises (le Ring est notoirement congestionné entre 7h30-9h30 et 16h30-19h).",
        conseils:
          "Le Ring de Bruxelles est l'un des axes les plus embouteillés d'Europe — évitez les arrivées entre 8h et 9h30 ou entre 17h et 19h en semaine. Si vous êtes en voyage d'affaires au quartier européen, demandez à être déposé à la station de métro Schuman ou directement devant le Berlaymont (siège de la Commission). Pour le tourisme, la Grand-Place est le point de départ idéal : Manneken Pis à 5 min, galeries Saint-Hubert (passage couvert de 1847) à 2 min, Musée de la BD (Hergé, Tintin) à 10 min. Les frites belges se dégustent chez Maison Antoine (place Jourdan) ou chez Fritland (rue Henri Maus). Le chocolat chez Pierre Marcolini (Grand Sablon) est exceptionnel. La bière se savoure au Delirium Café (2 000 bières au menu, record du monde) ou à la Mort Subite (brasserie historique). Pour les musées, le Musée Magritte et les Musées Royaux des Beaux-Arts sont à ne pas manquer. L'Atomium et le Mini-Europe (maquettes des monuments européens) sont parfaits pour les familles.",
        comparaisonTransport:
          "Le Thalys/TGV INOUI Lille — Bruxelles-Midi coûte 20-65 € et met seulement 35 minutes. C'est rapide et fréquent (environ 10 trains/jour). Cependant, la gare de Bruxelles-Midi est excentrée et le métro bruxellois est nécessaire pour rejoindre le centre ou le quartier européen. Le bus FlixBus propose des billets dès 8 € pour 2h de trajet. Le taxi TaxiNeo à 220 — 270 € offre le porte-à-porte total : prise en charge à domicile à Lille, dépose à l'adresse exacte à Bruxelles (hôtel, bureau, restaurant). À 3-4 passagers, le coût (55-90 €/pers.) est comparable au Thalys tout en offrant plus de confort et de flexibilité, surtout avec des bagages.",
        faq: [
          { question: "Quel est le prix d'un taxi Lille — Bruxelles ?", answer: "Le forfait est de 220 — 270 € tout compris. Prix garanti à la réservation." },
          { question: "Combien de temps dure le trajet Lille — Bruxelles ?", answer: "Environ 80 minutes en conditions normales de circulation." },
          { question: "Peut-on réserver à l'avance ?", answer: "Oui, réservation possible jusqu'à 30 jours à l'avance. Annulation gratuite jusqu'à 6h avant." },
          { question: "Le service est-il disponible 24h/24 ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24, 7j/7. Supplément nuit de 15 % entre 19h et 7h." },
        ],
      },
      en: {
        metaTitle: "Taxi Lille → Bruxelles | 110 km, from €210 | TaxiNeo",
        metaDescription: "Via A27, 1h20 ride. E19, Tournai and Belgique along the way. Faster and more direct than train or bus. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Lille → Brussels",
        heroSubtitle: "Your Lille → Brussels transfer at a fixed price of €220–€270. Online booking, professional driver 24/7.",
        description: "Cross-border Lille — Brussels transfer in 1h20.",
        routeDescription: "The route takes the A27 then E19 via Tournai.",
        introduction:
          "Brussels, capital of the Kingdom of Belgium and seat of the main European institutions — the European Commission, the Council of the European Union, the European Parliament (plenary sessions in Strasbourg) — is a cosmopolitan metropolis of 1.2 million inhabitants (2.1 million in the metropolitan region). The Grand-Place, considered one of the most beautiful squares in the world and a UNESCO World Heritage Site, is surrounded by baroque guild houses with gilded façades. Brussels is also the city of the Manneken Pis, the Atomium (built for Expo 58), Victor Horta's Art Nouveau quarter, the Royal Museums of Fine Arts (Bruegel, Rubens, Magritte), Belgian chocolate (Neuhaus, Marcolini, Wittamer), waffles and frites. The city is a unique linguistic crossroads: officially bilingual French-Dutch, it hosts an international population linked to EU institutions and NATO. From Lille, Brussels is an essential destination for business travellers, eurocrats in transit, cultural tourists and Belgian gastronomy lovers. A taxi offers unmatched comfort compared to the Thalys for groups or trips with bulky luggage.",
        itineraire:
          "Your driver leaves Lille via the A27 towards Tournai and Belgium. The Franco-Belgian border is crossed without checks (Schengen area). After Tournai, the route joins the E42 (Walloon motorway) towards Mons and Brussels. You cross Walloon Hainaut, a region of gentle hills, meadows and farming villages. After Ath, a small medieval town known for its Ducasse (UNESCO folk procession), the motorway angles northeast towards Brussels. Arrival in the Belgian capital is via the Brussels Ring (R0), which serves all districts: historic centre (Grand-Place, Manneken Pis), European quarter (Schuman, Berlaymont), Atomium (Heysel), Gare du Midi (Eurostar/Thalys) or Brussels-Zaventem airport if needed. Tolls are limited to the French section of the A27 (about €3); Belgian motorways are free. The journey takes 1h20 normally and can reach 1h50 during Brussels rush hours (the Ring is notoriously congested between 7:30-9:30am and 4:30-7pm).",
        conseils:
          "The Brussels Ring is one of Europe's most congested routes — avoid arrivals between 8-9:30am or 5-7pm on weekdays. If on a business trip to the European quarter, ask to be dropped at Schuman metro station or directly outside the Berlaymont (European Commission HQ). For tourism, the Grand-Place is the ideal starting point: Manneken Pis 5 min away, Galeries Saint-Hubert (1847 covered arcade) 2 min, Comic Strip Museum (Hergé, Tintin) 10 min. Belgian frites are best at Maison Antoine (Place Jourdan) or Fritland (Rue Henri Maus). Chocolate at Pierre Marcolini (Grand Sablon) is exceptional. Beer is savoured at Delirium Café (2,000 beers on the menu, world record) or Mort Subite (historic brasserie). For museums, the Magritte Museum and Royal Museums of Fine Arts are unmissable. The Atomium and Mini-Europe (scale models of European monuments) are perfect for families.",
        comparaisonTransport:
          "The Thalys/TGV INOUI Lille — Brussels-Midi costs €20-65 and takes just 35 minutes. It is fast and frequent (about 10 trains/day). However, Brussels-Midi station is off-centre and the Brussels metro is needed to reach the centre or EU quarter. FlixBus offers tickets from €8 for a 2h journey. The TaxiNeo taxi at €220–€270 provides complete door-to-door service: home pickup in Lille, drop-off at the exact address in Brussels (hotel, office, restaurant). For 3-4 passengers, the cost (€36-62 per person) is comparable to Thalys while offering more comfort and flexibility, especially with luggage.",
        faq: [
          { question: "What is the price of a taxi Lille — Brussels?", answer: "The flat rate is €220–€270 all inclusive. Price guaranteed at booking." },
          { question: "How long is the Lille — Brussels journey?", answer: "About 80 minutes under normal traffic conditions." },
          { question: "Can I book in advance?", answer: "Yes, booking available up to 30 days in advance. Free cancellation up to 6 hours before." },
          { question: "Is the service available 24/7?", answer: "Yes, our drivers are available 24/7. 15% night surcharge between 7pm and 7am." },
        ],
      },
    },
  },

];

// Import hub expansion files (each uses `import type { Trajet }` to avoid circular deps)
import { trajetsParis } from "./trajets-hub-paris";
import { trajetsParisVilles } from "./trajets-paris-villes";
import { trajetsParisToursime } from "./trajets-paris-tourisme";
import { trajetsParisArrondissements } from "./trajets-paris-arrondissements";
import { trajetsLyon } from "./trajets-hub-lyon";
import { trajetsParisArr8to13 } from "./trajets-paris-arr-8-13";
import { trajetsParisArr14to20 } from "./trajets-paris-arr-14-20";
import { trajetsLyonPart2 } from "./trajets-lyon-part2";
import { trajetsMarseille } from "./trajets-hub-marseille";
import { trajetsNice } from "./trajets-hub-nice";
import { trajetsToulouse } from "./trajets-hub-toulouse";
import { trajetsBordeaux } from "./trajets-hub-bordeaux";
import { trajetsLille } from "./trajets-hub-lille";
import { trajetsRennes } from "./trajets-hub-rennes";
import { trajetsNantes as trajetsNantesHub } from "./trajets-hub-nantes";
import { trajetsToursAvignon } from "./trajets-hub-tours-avignon";
import { trajetsCaenRouen } from "./trajets-hub-caen-rouen";
import { trajetsLyonPart3 } from "./trajets-lyon-part3";
import { trajetsPerpignanPau } from "./trajets-hub-perpignan-pau";
import { trajetsStrasbourgHub } from "./trajets-hub-strasbourg";
import { trajetsMontpellierHub } from "./trajets-hub-montpellier";
import { trajetsGrenobleAnnecy } from "./trajets-hub-grenoble-annecy";
import { trajetsDijonClermont } from "./trajets-hub-dijon-clermont";
import { trajetsAnnecyHub } from "./trajets-hub-annecy";
import { trajetsClermontHub } from "./trajets-hub-clermont";
import { trajetsReimsMetz } from "./trajets-hub-reims-metz";
import { trajetsBiarritzHub } from "./trajets-hub-biarritz";
import { trajetsCaenRouen2 } from "./trajets-hub-caen-rouen-2";
import { trajetsLimogesPoitiers } from "./trajets-hub-limoges-poitiers";
import { trajetsNantesHub2 } from "./trajets-hub-nantes-2";
import { trajetsRennesHub2 } from "./trajets-hub-rennes-2";
import { trajetsStrasbourgHub2 } from "./trajets-hub-strasbourg-2";
import { trajetsMontpellierHub2 } from "./trajets-hub-montpellier-2";
import { trajetsOrleansLeMans } from "./trajets-hub-orleans-lemans";
import { trajetsAmiensTolon } from "./trajets-hub-amiens-toulon";
import { trajetsParisRetours } from "./trajets-hub-paris-retours";
import { trajetsLyonPart4 } from "./trajets-hub-lyon-4";
import { trajetsAvignonHub } from "./trajets-hub-avignon";
import { trajetsGrenobleHub2 } from "./trajets-hub-grenoble-2";
import { trajetsToursHub2 } from "./trajets-hub-tours-2";
import { trajetsParisRetours2 } from "./trajets-hub-paris-retours-2";
import { trajetsParisRetours3 } from "./trajets-hub-paris-retours-3";
import { trajetsDijonReims } from "./trajets-hub-dijon-reims";
import { trajetsChamberyValence } from "./trajets-hub-chambery-valence";
import { trajetsBesanconMulhouse } from "./trajets-hub-besancon-mulhouse";
import { trajetsBayonnePau2 } from "./trajets-hub-bayonne-pau-2";
import { trajetsLille2 } from "./trajets-hub-lille-2";
import { trajetsRouenCaen3 } from "./trajets-hub-rouen-caen-3";
import { trajetsToulouse2 } from "./trajets-hub-toulouse-2";
import { trajetsAixEnProvence } from "./trajets-hub-aix-en-provence";
import { trajetsCannes } from "./trajets-hub-cannes";
import { trajetsNancy } from "./trajets-hub-nancy";
import { trajetsSaintEtienne } from "./trajets-hub-saint-etienne";
import { trajetsNimes } from "./trajets-hub-nimes";
import { trajetsLaRochelle } from "./trajets-hub-la-rochelle";
import { trajetsAngers } from "./trajets-hub-angers";
import { trajetsBrest } from "./trajets-hub-brest";
import { trajetsMonaco } from "./trajets-hub-monaco";
import { trajetsLeHavre } from "./trajets-hub-le-havre";
import { trajetsDunkerqueCalais } from "./trajets-hub-dunkerque-calais";
import { trajetsTroyesAuxerre } from "./trajets-hub-troyes-auxerre";
import { trajetsVannesLorient } from "./trajets-hub-vannes-lorient";
import { trajetsPerpignan2 } from "./trajets-hub-perpignan-2";
import { trajetsColmar } from "./trajets-hub-colmar";
import { trajetsMaconChalon } from "./trajets-hub-macon-chalon";
import { trajetsRoanneVichy } from "./trajets-hub-roanne-vichy";
import { trajetsTarbesLourdes } from "./trajets-hub-tarbes-lourdes";
import { trajetsPau3 } from "./trajets-hub-pau-3";
import { trajetsAgenMontauban } from "./trajets-hub-agen-montauban";
import { trajetsAngoulemeCognac } from "./trajets-hub-angouleme-cognac";
import { trajetsBourgesNevers } from "./trajets-hub-bourges-nevers";
import { trajetsChartresDreux } from "./trajets-hub-chartres-dreux";
import { trajetsBeauvaisCompiegne } from "./trajets-hub-beauvais-compiegne";
import { trajetsArlesCamargue } from "./trajets-hub-arles-camargue";
import { trajetsGapBriancon } from "./trajets-hub-gap-briancon";
import { trajetsCarcassonne } from "./trajets-hub-carcassonne";
import { trajetsLavalMayenne } from "./trajets-hub-laval-mayenne";
import { trajetsRodezCahors } from "./trajets-hub-rodez-cahors";
import { trajetsCherbourg } from "./trajets-hub-cherbourg-saintlo";
import { trajetsAlbiCastres } from "./trajets-hub-albi-castres";
import { trajetsAuchCondom } from "./trajets-hub-auch-condom";
import { trajetsAurillacLePuy } from "./trajets-hub-aurillac-lepuy";
import { trajetsBloisVendome } from "./trajets-hub-blois-vendome";
import { trajetsBriveTulle } from "./trajets-hub-brive-tulle";
import { trajetsChamonix } from "./trajets-hub-chamonix";
import { trajetsChateaurouxGueret } from "./trajets-hub-chateauroux-gueret";
import { trajetsDaxMontDeMarsan } from "./trajets-hub-dax-montdemarsan";
import { trajetsEpinalVerdun } from "./trajets-hub-epinal-verdun";
import { trajetsEvianThonon } from "./trajets-hub-evian-thonon";
import { trajetsEvreuxLisieux } from "./trajets-hub-evreux-lisieux";
import { trajetsFoixAndorre } from "./trajets-hub-foix-andorre";
import { trajetsHyeresFrejus } from "./trajets-hub-hyeres-frejus";
import { trajetsLensArras } from "./trajets-hub-lens-arras";
import { trajetsLibourneBergerac } from "./trajets-hub-libourne-bergerac";
import { trajetsMendeMillau } from "./trajets-hub-mende-millau";
import { trajetsMoulinsMontlucon } from "./trajets-hub-moulins-montlucon";
import { trajetsNiortBressuire } from "./trajets-hub-niort-bressuire";
import { trajetsPérigord } from "./trajets-hub-perigueux-sarlat";
import { trajetsQuimper } from "./trajets-hub-quimper";
import { trajetsRochefortSaintes } from "./trajets-hub-rochefort-saintes";
import { trajetsSaintMaloDinard } from "./trajets-hub-saint-malo-dinard";
import { trajetsSensMelun } from "./trajets-hub-sens-melun";
import { trajetsSeteAgde } from "./trajets-hub-sete-agde";
import { trajetsMentonAntibes } from "./trajets-hub-menton-antibes";
import { trajetsGrasseDinan } from "./trajets-hub-grasse-dinan";
import { trajetsSaintBrieucDinan } from "./trajets-hub-saint-brieuc-dinan";
import { trajetsVersailles } from "./trajets-hub-versailles";
import { trajetsCDGAeroport } from "./trajets-hub-cdg-aeroport";
import { trajetsOrlyAeroport } from "./trajets-hub-orly-aeroport";
import { trajetsFontainebleau } from "./trajets-hub-fontainebleau";
import { trajetsMeauxMarne } from "./trajets-hub-meaux-marne";
import { trajetsCergyPontoise } from "./trajets-hub-cergy-pontoise";
import { trajetsLyonSaintExupery } from "./trajets-hub-lyon-saint-exupery";
import { trajetsNiceAeroport } from "./trajets-hub-nice-aeroport";
import { trajetsMarseilleAeroport } from "./trajets-hub-marseille-aeroport";
import { trajetsToulouseAeroport } from "./trajets-hub-toulouse-aeroport";
import { trajetsBordeauxAeroport } from "./trajets-hub-bordeaux-aeroport";
import { trajetsValenceRomans } from "./trajets-hub-valence-romans";
import { trajetsBéziersNarbonne } from "./trajets-hub-beziers-narbonne";
import { trajetsAjaccioBastia } from "./trajets-hub-ajaccio-bastia";
import { trajetsBelfortMontbeliard } from "./trajets-hub-belfort-montbeliard";
import { trajetsBourgEnBresse } from "./trajets-hub-bourg-en-bresse";
import { trajetsOrangeCarpentras } from "./trajets-hub-orange-carpentras";
import { trajetsDraguignanBrignoles } from "./trajets-hub-draguignan-brignoles";
import { trajetsSaintTropez } from "./trajets-hub-saint-tropez";
import { trajetsPoitiers } from "./trajets-hub-poitiers";
import { trajetsLonsLeSaunier } from "./trajets-hub-lons-le-saunier";
import { trajetsDignéManosque } from "./trajets-hub-digne-manosque";
import { trajetsAubagneCassis } from "./trajets-hub-aubagne-cassis";
import { trajetsNantesAeroport } from "./trajets-hub-nantes-aeroport";
import { trajetsStrasbourgAeroport } from "./trajets-hub-strasbourg-aeroport";
import { trajetsPrivasAubenas } from "./trajets-hub-privas-aubenas";
import { trajetsVillefrancheTarare } from "./trajets-hub-villefranche-tarare";
import { trajetsVienneBourgoin } from "./trajets-hub-vienne-bourgoin";
import { trajetsSalonMartigues } from "./trajets-hub-salon-martigues";
import { trajetsAptCavaillon } from "./trajets-hub-apt-cavaillon";
import { trajetsEvryCorbeil } from "./trajets-hub-evry-corbeil";
import { trajetsMantesPoissy } from "./trajets-hub-mantes-poissy";
import { trajetsSaintQuentinLaon } from "./trajets-hub-saint-quentin-laon";
import { trajetsCambraiValenciennes } from "./trajets-hub-cambrai-valenciennes";
import { trajetsCholetSaumur } from "./trajets-hub-cholet-saumur";
import { trajetsLaRocheSurYon } from "./trajets-hub-la-roche-sur-yon";
import { trajetsChâlonsVitry } from "./trajets-hub-chalons-vitry";
import { trajetsMontargisPithiviers } from "./trajets-hub-montargis-pithiviers";
import { trajetsChaumontLangres } from "./trajets-hub-chaumont-langres";
import { trajetsThononAnnemasse } from "./trajets-hub-thonon-annemasse";
import { trajetsAlençonFlers } from "./trajets-hub-alencon-flers";
import { trajetsBoulogneNanterre } from "./trajets-hub-boulogne-nanterre";
import { trajetsSaintDenisBobigny } from "./trajets-hub-saint-denis-bobigny";
import { trajetsCreteilVitry } from "./trajets-hub-creteil-vitry";
import { trajetsDisneylandRoissy } from "./trajets-hub-disneyland-roissy";
import { trajetsFigeacDecazeville } from "./trajets-hub-figeac-decazeville";
import { trajetsBayeuxLisieux } from "./trajets-hub-bayeux-lisieux";
import { trajetsDeauvilleHonfleur } from "./trajets-hub-deauville-honfleur";
import { trajetsArcachonBassin } from "./trajets-hub-arcachon-bassin";
import { trajetsMillauLodeve } from "./trajets-hub-millau-lodeve";
import { trajetsMontSaintMichel } from "./trajets-hub-mont-saint-michel";
import { trajetsRocamadourSarlat } from "./trajets-hub-rocamadour-sarlat";
import { trajetsLorientConcarneau } from "./trajets-hub-lorient-concarneau";
import { trajetsChateaubriantRedon } from "./trajets-hub-chateaubriant-redon";
import { trajetsVichyClermont } from "./trajets-hub-vichy-clermont";
import { trajetsLourdesCauterets } from "./trajets-hub-lourdes-cauterets";
import { trajetsSaintJeanDeLuz } from "./trajets-hub-saint-jean-de-luz";
import { trajetsEpernayChateauThierry } from "./trajets-hub-epernay-chateau-thierry";
import { trajetsMorlaixRoscoff } from "./trajets-hub-morlaix-roscoff";
import { trajetsAbbevilleBerck } from "./trajets-hub-abbeville-berck";
import { trajetsDieppeFecamp } from "./trajets-hub-dieppe-fecamp";
import { trajetsMaubeugeAvesnes } from "./trajets-hub-maubeuge-avesnes";
import { trajetsSedanCharleville } from "./trajets-hub-sedan-charleville";
import { trajetsSarregueminesForbach } from "./trajets-hub-sarreguemines-forbach";
import { trajetsThionvilleLongwy } from "./trajets-hub-thionville-longwy";
import { trajetsDouaiBethune } from "./trajets-hub-douai-bethune";
import { trajetsSaverneWissembourg } from "./trajets-hub-saverne-wissembourg";
import { trajetsIssoudunVierzon } from "./trajets-hub-issoudun-vierzon";
import { trajetsChatelleraultLoudun } from "./trajets-hub-chatellerault-loudun";
import { trajetsMontelimarPierrelatte } from "./trajets-hub-montelimar-pierrelatte";
import { trajetsMarmandeVilleneuve } from "./trajets-hub-marmande-villeneuve";
import { trajetsRoyanIleDeRe } from "./trajets-hub-royan-ile-de-re";
import { trajetsNeufchateauBarLeDuc } from "./trajets-hub-neufchateau-barleduc";
import { trajetsTulleUssel } from "./trajets-hub-tulle-ussel";
import { trajetsGueretAubusson } from "./trajets-hub-gueret-aubusson";
import { trajetsMaconTournus } from "./trajets-hub-macon-tournus";
import { trajetsBeauneAutun } from "./trajets-hub-beaune-autun";
import { trajetsCluses } from "./trajets-hub-cluses-sallanches";
import { trajetsPerpignanCollioure } from "./trajets-hub-perpignan-collioure";
import { trajetsDolFougeres } from "./trajets-hub-dol-fougeres";
import { trajetsCahorsGourdon } from "./trajets-hub-cahors-gourdon";
import { trajetsAuxerreTonnerre } from "./trajets-hub-auxerre-tonnerre";
import { trajetsOleronRochefort } from "./trajets-hub-oleron-rochefort";
import { trajetsMontaubanCastres } from "./trajets-hub-montauban-castres";
import { trajetsSeineMarneNord } from "./trajets-hub-seine-et-marne-nord";
import { trajetsMarnelaVallee } from "./trajets-hub-marne-la-vallee";
import { trajetsMelunSenart } from "./trajets-hub-melun-senart";
import { trajetsSeineMarneEst } from "./trajets-hub-seine-et-marne-est";
import { trajetsHautsDeSeinNord } from "./trajets-hub-hauts-de-seine-nord";
import { trajetsHautsDeSeineSud } from "./trajets-hub-hauts-de-seine-sud";
import { trajetsHdsNordExt } from "./trajets-hub-hds-nord-ext";
import { trajetsHdsOuest } from "./trajets-hub-hds-ouest";
import { trajetsHdsSudEst } from "./trajets-hub-hds-sud-est";
import { trajetsHdsSudExt } from "./trajets-hub-hds-sud-ext";
import { trajetsHdsComplement } from "./trajets-hub-hds-complement";
import { trajetsMarnelaVallee2 } from "./trajets-hub-marne-la-vallee-2";
import { trajetsSenart } from "./trajets-hub-senart";
import { trajetsMelunSenart2 } from "./trajets-hub-melun-senart-2";
import { trajetsClermontTourisme } from "./trajets-hub-clermont-tourisme";

// Merge hub trajets into the main array
trajets.push(
  ...trajetsParis,
  ...trajetsParisVilles,
  ...trajetsParisToursime,
  ...trajetsParisArrondissements,
  ...trajetsLyon,
  ...trajetsParisArr8to13,
  ...trajetsParisArr14to20,
  ...trajetsLyonPart2,
  ...trajetsMarseille,
  ...trajetsNice,
  ...trajetsToulouse,
  ...trajetsBordeaux,
  ...trajetsLille,
  ...trajetsRennes,
  ...trajetsNantesHub,
  ...trajetsToursAvignon,
  ...trajetsCaenRouen,
  ...trajetsLyonPart3,
  ...trajetsPerpignanPau,
  ...trajetsStrasbourgHub,
  ...trajetsMontpellierHub,
  ...trajetsGrenobleAnnecy,
  ...trajetsDijonClermont,
  ...trajetsAnnecyHub,
  ...trajetsClermontHub,
  ...trajetsReimsMetz,
  ...trajetsBiarritzHub,
  ...trajetsCaenRouen2,
  ...trajetsLimogesPoitiers,
  ...trajetsNantesHub2,
  ...trajetsRennesHub2,
  ...trajetsStrasbourgHub2,
  ...trajetsMontpellierHub2,
  ...trajetsOrleansLeMans,
  ...trajetsAmiensTolon,
  ...trajetsParisRetours,
  ...trajetsLyonPart4,
  ...trajetsAvignonHub,
  ...trajetsGrenobleHub2,
  ...trajetsToursHub2,
  ...trajetsParisRetours2,
  ...trajetsParisRetours3,
  ...trajetsDijonReims,
  ...trajetsChamberyValence,
  ...trajetsBesanconMulhouse,
  ...trajetsBayonnePau2,
  ...trajetsLille2,
  ...trajetsRouenCaen3,
  ...trajetsToulouse2,
  ...trajetsAixEnProvence,
  ...trajetsCannes,
  ...trajetsNancy,
  ...trajetsSaintEtienne,
  ...trajetsNimes,
  ...trajetsLaRochelle,
  ...trajetsAngers,
  ...trajetsBrest,
  ...trajetsMonaco,
  ...trajetsLeHavre,
  ...trajetsDunkerqueCalais,
  ...trajetsTroyesAuxerre,
  ...trajetsVannesLorient,
  ...trajetsPerpignan2,
  ...trajetsColmar,
  ...trajetsMaconChalon,
  ...trajetsRoanneVichy,
  ...trajetsTarbesLourdes,
  ...trajetsPau3,
  ...trajetsAgenMontauban,
  ...trajetsAngoulemeCognac,
  ...trajetsBourgesNevers,
  ...trajetsChartresDreux,
  ...trajetsBeauvaisCompiegne,
  ...trajetsArlesCamargue,
  ...trajetsGapBriancon,
  ...trajetsCarcassonne,
  ...trajetsLavalMayenne,
  ...trajetsRodezCahors,
  ...trajetsCherbourg,
  ...trajetsAlbiCastres,
  ...trajetsAuchCondom,
  ...trajetsAurillacLePuy,
  ...trajetsBloisVendome,
  ...trajetsBriveTulle,
  ...trajetsChamonix,
  ...trajetsChateaurouxGueret,
  ...trajetsDaxMontDeMarsan,
  ...trajetsEpinalVerdun,
  ...trajetsEvianThonon,
  ...trajetsEvreuxLisieux,
  ...trajetsFoixAndorre,
  ...trajetsHyeresFrejus,
  ...trajetsLensArras,
  ...trajetsLibourneBergerac,
  ...trajetsMendeMillau,
  ...trajetsMoulinsMontlucon,
  ...trajetsNiortBressuire,
  ...trajetsPérigord,
  ...trajetsQuimper,
  ...trajetsRochefortSaintes,
  ...trajetsSaintMaloDinard,
  ...trajetsSensMelun,
  ...trajetsSeteAgde,
  ...trajetsMentonAntibes,
  ...trajetsGrasseDinan,
  ...trajetsSaintBrieucDinan,
  ...trajetsVersailles,
  ...trajetsCDGAeroport,
  ...trajetsOrlyAeroport,
  ...trajetsFontainebleau,
  ...trajetsMeauxMarne,
  ...trajetsCergyPontoise,
  ...trajetsLyonSaintExupery,
  ...trajetsNiceAeroport,
  ...trajetsMarseilleAeroport,
  ...trajetsToulouseAeroport,
  ...trajetsBordeauxAeroport,
  ...trajetsValenceRomans,
  ...trajetsBéziersNarbonne,
  ...trajetsAjaccioBastia,
  ...trajetsBelfortMontbeliard,
  ...trajetsBourgEnBresse,
  ...trajetsOrangeCarpentras,
  ...trajetsDraguignanBrignoles,
  ...trajetsSaintTropez,
  ...trajetsPoitiers,
  ...trajetsLonsLeSaunier,
  ...trajetsDignéManosque,
  ...trajetsAubagneCassis,
  ...trajetsNantesAeroport,
  ...trajetsStrasbourgAeroport,
  ...trajetsPrivasAubenas,
  ...trajetsVillefrancheTarare,
  ...trajetsVienneBourgoin,
  ...trajetsSalonMartigues,
  ...trajetsAptCavaillon,
  ...trajetsEvryCorbeil,
  ...trajetsMantesPoissy,
  ...trajetsSaintQuentinLaon,
  ...trajetsCambraiValenciennes,
  ...trajetsCholetSaumur,
  ...trajetsLaRocheSurYon,
  ...trajetsChâlonsVitry,
  ...trajetsMontargisPithiviers,
  ...trajetsChaumontLangres,
  ...trajetsThononAnnemasse,
  ...trajetsAlençonFlers,
  ...trajetsBoulogneNanterre,
  ...trajetsSaintDenisBobigny,
  ...trajetsCreteilVitry,
  ...trajetsDisneylandRoissy,
  ...trajetsFigeacDecazeville,
  ...trajetsBayeuxLisieux,
  ...trajetsDeauvilleHonfleur,
  ...trajetsArcachonBassin,
  ...trajetsMillauLodeve,
  ...trajetsMontSaintMichel,
  ...trajetsRocamadourSarlat,
  ...trajetsLorientConcarneau,
  ...trajetsChateaubriantRedon,
  ...trajetsVichyClermont,
  ...trajetsLourdesCauterets,
  ...trajetsSaintJeanDeLuz,
  ...trajetsEpernayChateauThierry,
  ...trajetsMorlaixRoscoff,
  ...trajetsAbbevilleBerck,
  ...trajetsDieppeFecamp,
  ...trajetsMaubeugeAvesnes,
  ...trajetsSedanCharleville,
  ...trajetsSarregueminesForbach,
  ...trajetsThionvilleLongwy,
  ...trajetsDouaiBethune,
  ...trajetsSaverneWissembourg,
  ...trajetsIssoudunVierzon,
  ...trajetsChatelleraultLoudun,
  ...trajetsMontelimarPierrelatte,
  ...trajetsMarmandeVilleneuve,
  ...trajetsRoyanIleDeRe,
  ...trajetsNeufchateauBarLeDuc,
  ...trajetsTulleUssel,
  ...trajetsGueretAubusson,
  ...trajetsMaconTournus,
  ...trajetsBeauneAutun,
  ...trajetsCluses,
  ...trajetsPerpignanCollioure,
  ...trajetsDolFougeres,
  ...trajetsCahorsGourdon,
  ...trajetsAuxerreTonnerre,
  ...trajetsOleronRochefort,
  ...trajetsMontaubanCastres,
  ...trajetsSeineMarneNord,
  ...trajetsMarnelaVallee,
  ...trajetsMelunSenart,
  ...trajetsSeineMarneEst,
  ...trajetsHautsDeSeinNord,
  ...trajetsHautsDeSeineSud,
  ...trajetsHdsNordExt,
  ...trajetsHdsOuest,
  ...trajetsHdsSudEst,
  ...trajetsHdsSudExt,
  ...trajetsHdsComplement,
  ...trajetsMarnelaVallee2,
  ...trajetsSenart,
  ...trajetsMelunSenart2,
  ...trajetsClermontTourisme,
);

export function getTrajetBySlug(slug: string): Trajet | undefined {
  return trajets.find((t) => t.slug === slug);
}

export function getTrajetsByCategory(category: Trajet["category"]): Trajet[] {
  return trajets.filter((t) => t.category === category);
}

export function getTrajetsByHub(hub: string): Trajet[] {
  return trajets.filter((t) => t.hub === hub);
}

export function getRelatedTrajets(trajet: Trajet): Trajet[] {
  // Prioritize liensInternes if populated
  if (trajet.liensInternes && trajet.liensInternes.length > 0) {
    const linked = trajet.liensInternes
      .map((slug) => trajets.find((t) => t.slug === slug))
      .filter((t): t is Trajet => t !== undefined && t.slug !== trajet.slug);
    if (linked.length >= 3) return linked.slice(0, 6);
    // Supplement with from/to matches if liensInternes gives fewer than 3
    const linkedSlugs = new Set(linked.map((t) => t.slug));
    const extra = trajets
      .filter(
        (t) =>
          t.slug !== trajet.slug &&
          !linkedSlugs.has(t.slug) &&
          (t.from === trajet.from || t.to === trajet.to || t.from === trajet.to || t.to === trajet.from)
      )
      .slice(0, 6 - linked.length);
    return [...linked, ...extra];
  }

  return trajets
    .filter(
      (t) =>
        t.slug !== trajet.slug &&
        (t.from === trajet.from || t.to === trajet.to || t.from === trajet.to || t.to === trajet.from)
    )
    .slice(0, 6);
}

import { haversineDistance } from "@/lib/geo";

export function getTrajetsForDepartement(dept: { lat: number; lng: number }, limit = 6): Trajet[] {
  return trajets
    .map((t) => {
      const distFrom = haversineDistance(dept.lat, dept.lng, t.fromLat, t.fromLng);
      const distTo = haversineDistance(dept.lat, dept.lng, t.toLat, t.toLng);
      return { t, dist: Math.min(distFrom, distTo) };
    })
    .filter((x) => x.dist < 50)
    .sort((a, b) => a.dist - b.dist)
    .slice(0, limit)
    .map((x) => x.t);
}

export function getTrajetsNearPoint(lat: number, lng: number, limit = 4): Trajet[] {
  return trajets
    .map((t) => {
      const distFrom = haversineDistance(lat, lng, t.fromLat, t.fromLng);
      const distTo = haversineDistance(lat, lng, t.toLat, t.toLng);
      return { t, dist: Math.min(distFrom, distTo) };
    })
    .filter((x) => x.dist < 30)
    .sort((a, b) => a.dist - b.dist)
    .slice(0, limit)
    .map((x) => x.t);
}

export function findTrajetSlugForRoute(from: string, to: string): string | undefined {
  const normalize = (s: string) => s.toLowerCase().trim();
  const f = normalize(from);
  const t = normalize(to);
  const match = trajets.find(
    (tr) =>
      (normalize(tr.from) === f && normalize(tr.to) === t) ||
      (normalize(tr.from) === t && normalize(tr.to) === f)
  );
  return match?.slug;
}
