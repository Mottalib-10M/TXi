import type { Trajet } from "./trajets";

function hdsNERoute(
  slug: string, from: string, to: string,
  fromLat: number, fromLng: number, toLat: number, toLng: number,
  distanceKm: number, durationMin: number, priceEstimate: string,
  category: "aeroport" | "ville-a-ville",
  highlights: string[],
  prixMin: number, prixMax: number, prixVan: number, dureeMax: number,
  autoroute: string, peages: string,
  departSlug: string, arriveeSlug: string,
  liensInternes: string[], tags: string[],
  frMeta: { metaTitle: string; metaDescription: string; heroTitle: string; heroSubtitle: string; description: string; routeDescription: string; introduction: string; itineraire: string; conseils: string; comparaisonTransport: string; faq: { question: string; answer: string }[] },
  enMeta: { metaTitle: string; metaDescription: string; heroTitle: string; heroSubtitle: string; description: string; routeDescription: string; introduction: string; itineraire: string; conseils: string; comparaisonTransport: string; faq: { question: string; answer: string }[] },
): Trajet {
  return {
    slug, from, to, fromLat, fromLng, toLat, toLng,
    distanceKm, durationMin, priceEstimate, category, highlights,
    prixMin, prixMax, prixVan, dureeMax, autoroute, peages,
    departSlug, arriveeSlug, liensInternes, tags,
    hub: "hds-nord-ext",
    i18n: { fr: frMeta, en: enMeta },
  };
}

export const trajetsHdsNordExt: Trajet[] = [
  // ═══════════════════════════════════════════════════════════
  // CLICHY (63 000 hab.)
  // ═══════════════════════════════════════════════════════════
  hdsNERoute(
    "taxi-clichy-orly", "Clichy", "Aéroport d'Orly",
    48.9040, 2.3053, 48.7262, 2.3652,
    25, 30, "45 — 60 €", "aeroport",
    ["Périphérique", "A6", "Hôpital Beaujon", "L'Oréal", "Métro 13"],
    45, 60, 78, 45, "Périph. + A6", "~2 €", "clichy", "aeroport-orly",
    ["taxi-clichy-cdg", "taxi-asnieres-sur-seine-orly", "taxi-levallois-perret-orly", "taxi-gennevilliers-orly"],
    ["aeroport", "orly", "clichy", "beaujon", "loreal", "hauts-de-seine"],
    {
      metaTitle: "Taxi Clichy → Orly | 25 km, dès 45 € | TaxiNeo",
      metaDescription: "Transfert taxi Clichy vers Orly. 30 min par Périph./A6. Hôpital Beaujon, L'Oréal, Métro 13. Prix fixe 45-60 €.",
      heroTitle: "Taxi Clichy → Aéroport d'Orly",
      heroSubtitle: "Transfert Clichy → Orly au prix fixe de 45 — 60 €. 25 km, 30 min par le Périphérique.",
      description: "L'aéroport d'Orly est à 30 min de Clichy via le Périphérique et l'A6.",
      routeDescription: "Via le boulevard Périphérique sud puis l'A6 direction Orly.",
      introduction: "Clichy-la-Garenne, commune de 63 000 habitants limitrophe de Paris (17e arrondissement), est un carrefour économique et médical majeur du nord des Hauts-de-Seine. L'hôpital Beaujon (AP-HP), centre de référence en hépatologie et chirurgie digestive, attire patients et praticiens de toute la France. Le siège historique de L'Oréal, premier groupe mondial de cosmétiques, ancre Clichy dans le paysage économique international. La ville est desservie par le métro 13 (stations Mairie de Clichy et Porte de Clichy) et le RER C, mais aucun de ces réseaux ne relie directement Orly. Le taxi depuis Clichy emprunte le boulevard Périphérique sud puis l'A6, offrant un transfert porte-à-porte en 30 minutes sans correspondance. Pour les patients de Beaujon voyageant après une consultation, les employés de L'Oréal en déplacement professionnel ou les résidents des berges de Seine, le taxi est la solution la plus fiable et confortable vers Orly.",
      itineraire: "Votre chauffeur quitte Clichy par la porte de Clichy ou la porte d'Asnières, rejoint le boulevard Périphérique sud en longeant Paris, puis bifurque sur l'A6a (autoroute du Soleil) direction Lyon/Orly. La sortie Orly est clairement indiquée après le tunnel de Gentilly. L'ensemble du trajet est quasiment gratuit (péages ~2 € inclus dans le tarif fixe). Comptez 30 minutes en conditions normales de circulation, mais prévoyez 40 à 45 minutes aux heures de pointe (7h30-9h30, 17h-19h30) car le Périphérique sud peut être saturé. En alternative, votre chauffeur peut emprunter les quais de Seine puis le boulevard des Maréchaux si le Périphérique est bloqué, optimisant le trajet grâce au suivi GPS en temps réel.",
      conseils: "Pour les vols matinaux (avant 8h), partez au moins 1h30 avant le décollage depuis Clichy. Le Périphérique est généralement fluide avant 7h. Si vous êtes hospitalisé ou en consultation à Beaujon, prévoyez votre taxi retour à l'avance pour éviter l'attente. Précisez votre terminal (Orly 1, 2, 3 ou 4) lors de la réservation. Clichy dispose de nombreux hôtels proches de l'hôpital Beaujon — idéal pour un transfert aéroport le lendemain d'un rendez-vous médical. Le Pavillon Vendôme (XVIIe siècle, classé monument historique) mérite un détour si vous avez du temps avant votre vol. Pour le retour depuis Orly, votre chauffeur vous attend en zone d'arrivée avec votre nom affiché.",
      comparaisonTransport: "Le métro 13 (Mairie de Clichy → Châtelet, 20 min) puis RER B/Orlyval ajoute 1h de correspondances et escaliers, pour un total d'1h20 et ~14 €. Le taxi à 45-60 € est direct en 30 min. À 2 passagers (22-30 €/pers.), le taxi est compétitif. À 3 passagers (15-20 €/pers.), il est imbattable en confort et rapidité.",
      faq: [
        { question: "Quel est le prix du taxi Clichy-Orly ?", answer: "45-60 € en berline, 78 € en van 7 places. Tarif fixe, péages inclus, bagages inclus." },
        { question: "Combien de temps dure le trajet ?", answer: "30 min en moyenne, 40-45 min aux heures de pointe." },
        { question: "Prise en charge à l'hôpital Beaujon ?", answer: "Oui, votre chauffeur vous prend en charge devant l'entrée principale de Beaujon ou à toute adresse de Clichy." },
        { question: "Y a-t-il des péages ?", answer: "Péages minimes (~2 €) inclus dans le tarif fixe." },
        { question: "Service de nuit disponible ?", answer: "Oui, 24h/24 et 7j/7. Idéal pour les vols très tôt ou les arrivées tardives à Orly." }
      ],
    },
    {
      metaTitle: "Taxi Clichy → Orly Airport | 25 km, from €45 | TaxiNeo",
      metaDescription: "Taxi from Clichy to Orly. 30 min via ring road/A6. Beaujon Hospital, L'Oréal HQ, Metro 13. Fixed price €45-60.",
      heroTitle: "Taxi Clichy → Orly Airport",
      heroSubtitle: "Your Clichy → Orly Airport transfer at €45 — €60. 25 km, 30 min via the Périphérique.",
      description: "Orly Airport is 30 min from Clichy via the ring road and A6.",
      routeDescription: "Via the southern ring road then the A6 to Orly.",
      introduction: "Clichy-la-Garenne, a town of 63,000 bordering Paris's 17th arrondissement, is a major economic and medical hub in northern Hauts-de-Seine. Beaujon Hospital (AP-HP), a national reference centre for hepatology and digestive surgery, attracts patients and practitioners from across France. The historic headquarters of L'Oréal, the world's leading cosmetics group, anchors Clichy in the international business landscape. The town is served by metro line 13 (Mairie de Clichy and Porte de Clichy stations) and RER C, but neither network connects directly to Orly. The taxi from Clichy takes the southern ring road then A6, providing a door-to-door transfer in 30 minutes with no connections. For Beaujon patients travelling after consultations, L'Oréal employees on business trips, or residents along the Seine banks, the taxi is the most reliable and comfortable option to Orly.",
      itineraire: "Your driver leaves Clichy via Porte de Clichy or Porte d'Asnières, joins the southern ring road, then takes the A6 to Orly. Minimal tolls (~€2 included). Allow 30 min off-peak, 40-45 min in rush hour (7.30-9.30am, 5-7.30pm). Alternative route via Seine quays if the ring road is congested.",
      conseils: "For morning flights (before 8am), leave at least 1h30 before departure. The ring road is clear before 7am. If visiting Beaujon Hospital, book your return taxi in advance. Specify your Orly terminal (1, 2, 3 or 4) when booking. The Pavillon Vendôme (17th-century listed monument) is worth a visit if time allows. For returns, your driver waits in arrivals with your name.",
      comparaisonTransport: "Metro 13 (Mairie de Clichy → Châtelet, 20 min) then RER B/Orlyval adds 1h of connections, totalling 1h20 at ~€14. Taxi at €45-60 is direct in 30 min. For 2 passengers (€22-30/pp), taxi is competitive. For 3 (€15-20/pp), unbeatable comfort.",
      faq: [
        { question: "How much is a taxi Clichy to Orly?", answer: "€45-60 sedan, €78 van (7 seats). Fixed fare, tolls and luggage included." },
        { question: "How long does it take?", answer: "30 min average, 40-45 min in rush hour." },
        { question: "Pick-up at Beaujon Hospital?", answer: "Yes, at the main entrance or any Clichy address." },
        { question: "Are there tolls?", answer: "Minimal tolls (~€2) included in the fixed fare." },
        { question: "Night service?", answer: "Yes, 24/7. Ideal for early or late Orly flights." }
      ],
    }
  ),
  hdsNERoute(
    "taxi-clichy-cdg", "Clichy", "Aéroport CDG",
    48.9040, 2.3053, 49.0097, 2.5479,
    30, 35, "50 — 65 €", "aeroport",
    ["A86", "A1", "Hôpital Beaujon", "L'Oréal", "Roissy"],
    50, 65, 85, 55, "A86 + A1", "~5 €", "clichy", "aeroport-cdg",
    ["taxi-clichy-orly", "taxi-asnieres-sur-seine-cdg", "taxi-levallois-perret-cdg", "taxi-gennevilliers-cdg"],
    ["aeroport", "cdg", "roissy", "clichy", "beaujon", "loreal", "hauts-de-seine"],
    {
      metaTitle: "Taxi Clichy → CDG | 30 km, dès 50 € | TaxiNeo",
      metaDescription: "Transfert taxi Clichy vers CDG. 35 min par A86/A1. Beaujon, L'Oréal, 63 000 hab. Prix fixe 50-65 €.",
      heroTitle: "Taxi Clichy → Aéroport CDG",
      heroSubtitle: "Transfert Clichy → CDG au prix fixe de 50 — 65 €. 30 km, 35 min par l'A86 et l'A1.",
      description: "L'aéroport CDG est à 35 min de Clichy via l'A86 et l'A1.",
      routeDescription: "Via l'A86 nord-est puis l'A1 direction Roissy.",
      introduction: "Le transfert Clichy – Charles de Gaulle relie en 35 minutes cette commune dynamique de 63 000 habitants au premier aéroport français. Clichy-la-Garenne occupe une position stratégique entre Paris et la boucle nord de la Seine, à mi-chemin entre le 17e arrondissement et Asnières-sur-Seine. L'hôpital Beaujon, pôle d'excellence de l'AP-HP, génère un flux régulier de patients et de personnel médical voyageant en avion. Le siège historique de L'Oréal emploie des milliers de collaborateurs internationaux qui transitent par CDG pour leurs déplacements professionnels. Les berges de Seine, réaménagées ces dernières années, ont transformé le cadre de vie de la ville. Le Pavillon Vendôme, élégante demeure du XVIIe siècle classée monument historique, témoigne du riche passé aristocratique de Clichy. Le taxi contourne Paris par l'A86 nord et rejoint l'A1, évitant totalement la traversée de la capitale.",
      itineraire: "Départ de Clichy vers l'A86 par la porte d'Asnières ou la N315. Le chauffeur emprunte l'A86 en direction de Saint-Denis et Bobigny, puis rejoint l'A1 (autoroute du Nord) vers Roissy-CDG. L'accès aux terminaux est direct depuis la sortie Roissy de l'A1. Péages ~5 € inclus dans le tarif fixe. Comptez 35 minutes en conditions fluides (avant 7h, après 20h), 45 à 55 minutes aux heures de pointe. L'itinéraire alternatif via le Périphérique nord est utilisé si l'A86 est saturée. Le chauffeur ajuste en temps réel grâce au GPS et aux alertes trafic Waze/Google Maps.",
      conseils: "CDG est le hub Air France avec plus de 300 destinations internationales. Pour les vols long-courriers, arrivez 3h avant le décollage. Partez de Clichy au moins 2h avant votre vol en heures de pointe. Précisez votre terminal (T1, T2A-G ou T3) lors de la réservation. Le terminal 2 comprend sept sous-terminaux. Pour le retour de CDG, votre chauffeur surveille votre vol en temps réel et vous attend en zone d'arrivée avec un panneau nominatif, même en cas de retard. Le parking longue durée CDG coûte 20-30 €/jour — un aller-retour en taxi (100-130 €) est plus économique dès 4 jours d'absence.",
      comparaisonTransport: "Le métro 13 vers Saint-Denis puis RER B vers CDG prend 50-60 min pour ~12 €, mais avec une correspondance contraignante avec bagages. Le taxi à 50-65 € est direct en 35 min. À 2 passagers (25-32 €/pers.), le taxi est compétitif. À 3 passagers (17-22 €/pers.), c'est le meilleur rapport qualité-prix.",
      faq: [
        { question: "Quel est le prix du taxi Clichy-CDG ?", answer: "50-65 € en berline, 85 € en van 7 places. Tarif fixe, péages et bagages inclus." },
        { question: "Combien de temps dure le trajet ?", answer: "35 min en moyenne, 45-55 min aux heures de pointe." },
        { question: "Quel itinéraire est emprunté ?", answer: "A86 nord-est puis A1 direction Roissy. Ou Périphérique nord + A1 selon le trafic." },
        { question: "Mon chauffeur m'attend en cas de retard de vol ?", answer: "Oui, suivi de vol en temps réel. Attente gratuite jusqu'à 30 min après l'atterrissage." },
        { question: "Peut-on réserver un van ?", answer: "Oui, van 7 places à 85 €. Parfait pour familles ou groupes avec bagages volumineux." }
      ],
    },
    {
      metaTitle: "Taxi Clichy → CDG Airport | 30 km, from €50 | TaxiNeo",
      metaDescription: "Taxi from Clichy to CDG. 35 min via A86/A1. Beaujon Hospital, L'Oréal HQ, 63,000 residents. Fixed price €50-65.",
      heroTitle: "Taxi Clichy → CDG Airport",
      heroSubtitle: "Your Clichy → CDG Airport transfer at €50 — €65. 30 km, 35 min via A86 and A1.",
      description: "CDG Airport is 35 min from Clichy via the A86 and A1.",
      routeDescription: "Via the A86 northeast then the A1 to Roissy.",
      introduction: "The Clichy to Charles de Gaulle transfer connects this dynamic 63,000-resident town to France's largest airport in 35 minutes. Clichy-la-Garenne holds a strategic position between Paris and the northern Seine loop, midway between the 17th arrondissement and Asnières-sur-Seine. Beaujon Hospital, an AP-HP centre of excellence, generates regular flows of patients and medical staff travelling by air. L'Oréal's historic headquarters employs thousands of international staff who transit through CDG for business trips. The Seine banks, redesigned in recent years, have transformed the town's living environment. The Pavillon Vendôme, an elegant 17th-century listed mansion, testifies to Clichy's rich aristocratic past. The taxi bypasses Paris entirely via the A86 north and joins the A1.",
      itineraire: "From Clichy via Porte d'Asnières or N315 to the A86 towards Saint-Denis and Bobigny, then A1 north to Roissy-CDG. Tolls ~€5 included. Allow 35 min off-peak, 45-55 min in rush hour. Alternative via northern ring road if A86 is congested. Real-time GPS and traffic alerts for optimal routing.",
      conseils: "CDG is the Air France hub with 300+ international destinations. For long-haul flights, arrive 3h before departure. Leave Clichy at least 2h before your flight in rush hour. Specify terminal (T1, T2A-G or T3). For returns, driver monitors your flight and waits in arrivals with your name, even if delayed. CDG long-stay parking costs €20-30/day — taxi return trip (€100-130) is cheaper from 4 days.",
      comparaisonTransport: "Metro 13 to Saint-Denis then RER B to CDG takes 50-60 min at ~€12, with an awkward luggage connection. Taxi at €50-65 is direct in 35 min. For 2 passengers (€25-32/pp), competitive. For 3 (€17-22/pp), best value.",
      faq: [
        { question: "How much is a taxi Clichy to CDG?", answer: "€50-65 sedan, €85 van (7 seats). Fixed fare, tolls and luggage included." },
        { question: "How long does it take?", answer: "35 min average, 45-55 min in rush hour." },
        { question: "Which route?", answer: "A86 northeast then A1 to Roissy. Or northern ring road + A1 depending on traffic." },
        { question: "Flight delay?", answer: "Real-time flight tracking. Free waiting up to 30 min after landing." },
        { question: "Van available?", answer: "Yes, 7-seat van at €85. Perfect for families or groups with bulky luggage." }
      ],
    }
  ),
  // ═══════════════════════════════════════════════════════════
  // GENNEVILLIERS (48 000 hab.)
  // ═══════════════════════════════════════════════════════════
  hdsNERoute(
    "taxi-gennevilliers-orly", "Gennevilliers", "Aéroport d'Orly",
    48.9326, 2.2927, 48.7262, 2.3652,
    30, 35, "55 — 70 €", "aeroport",
    ["A86", "A6", "Port fluvial", "T1 tramway", "Zone industrielle"],
    55, 70, 92, 50, "A86 + A6", "~4 €", "gennevilliers", "aeroport-orly",
    ["taxi-gennevilliers-cdg", "taxi-asnieres-sur-seine-orly", "taxi-colombes-orly", "taxi-villeneuve-la-garenne-orly"],
    ["aeroport", "orly", "gennevilliers", "port-fluvial", "hauts-de-seine"],
    {
      metaTitle: "Taxi Gennevilliers → Orly | 30 km, dès 55 € | TaxiNeo",
      metaDescription: "Transfert taxi Gennevilliers vers Orly. 35 min par A86/A6. Port fluvial d'IDF, T1 tramway. Prix fixe 55-70 €.",
      heroTitle: "Taxi Gennevilliers → Aéroport d'Orly",
      heroSubtitle: "Transfert Gennevilliers → Orly au prix fixe de 55 — 70 €. 30 km, 35 min par l'A86.",
      description: "L'aéroport d'Orly est à 35 min de Gennevilliers via l'A86 et l'A6.",
      routeDescription: "Via l'A86 sud puis l'A6 direction Orly.",
      introduction: "Gennevilliers, ville de 48 000 habitants, abrite le port de Gennevilliers, premier port fluvial d'Île-de-France et deuxième de France après le port autonome de Strasbourg. Cette infrastructure logistique majeure, s'étendant sur 400 hectares le long de la Seine, accueille plus de 3 000 entreprises et génère un trafic de 20 millions de tonnes de marchandises par an. La ville est aussi connue pour son Théâtre de Gennevilliers, Centre Dramatique National réputé pour sa programmation avant-gardiste qui attire les amateurs de théâtre contemporain de toute l'Île-de-France. Le tramway T1, reliant Asnières à Noisy-le-Sec, traverse la commune et la connecte au réseau métropolitain. Cependant, pour rejoindre Orly, les transports en commun nécessitent de multiples correspondances. Le taxi emprunte l'A86 sud, contourne Paris et atteint Orly en 35 minutes, offrant un transfert direct idéal pour les professionnels du port, les résidents et les visiteurs culturels.",
      itineraire: "Votre chauffeur quitte Gennevilliers par l'accès à l'A86, contourne le sud de Paris en passant par Nanterre, Vélizy-Villacoublay et Rungis, puis rejoint l'A6 direction Orly. Les péages (~4 €) sont inclus dans le tarif fixe. Comptez 35 minutes en conditions fluides, 45 à 50 minutes aux heures de pointe (7h30-9h30, 17h-19h30). L'itinéraire alternatif via le Périphérique sud est possible mais souvent plus chargé. Le chauffeur optimise le parcours en temps réel grâce au suivi GPS et aux informations trafic.",
      conseils: "Le port de Gennevilliers est un site industriel actif — si votre prise en charge est dans la zone portuaire, précisez l'adresse exacte (quai, entreprise). Le Théâtre de Gennevilliers propose des spectacles jusqu'à 22h30 — idéal pour un taxi vers Orly le lendemain matin. Prévoyez 1h30 avant le décollage pour les vols matinaux. Le marché de Gennevilliers (mardi, vendredi, dimanche) est l'un des plus animés du secteur. Pour le retour depuis Orly, réservez votre taxi à l'avance et votre chauffeur vous attend en zone d'arrivée avec panneau nominatif.",
      comparaisonTransport: "Le T1 tramway + métro + Orlyval = 1h30, ~14 €, avec 3 correspondances. Le taxi à 55-70 € est direct en 35 min. À 2 passagers (27-35 €/pers.), le taxi gagne 55 min. À 3 passagers (18-23 €/pers.), imbattable.",
      faq: [
        { question: "Quel est le prix du taxi Gennevilliers-Orly ?", answer: "55-70 € en berline, 92 € en van 7 places. Tarif fixe, péages et bagages inclus." },
        { question: "Combien de temps dure le trajet ?", answer: "35 min en moyenne, 45-50 min aux heures de pointe." },
        { question: "Prise en charge dans la zone portuaire ?", answer: "Oui, précisez l'adresse exacte dans la zone du port de Gennevilliers." },
        { question: "Y a-t-il des péages ?", answer: "Oui, ~4 € de péages, inclus dans le tarif fixe." },
        { question: "Service disponible 24h/24 ?", answer: "Oui, service continu jour et nuit, week-ends et jours fériés compris." }
      ],
    },
    {
      metaTitle: "Taxi Gennevilliers → Orly Airport | 30 km, from €55 | TaxiNeo",
      metaDescription: "Taxi from Gennevilliers to Orly. 35 min via A86/A6. Largest river port in IDF, T1 tram. Fixed price €55-70.",
      heroTitle: "Taxi Gennevilliers → Orly Airport",
      heroSubtitle: "Your Gennevilliers → Orly Airport transfer at €55 — €70. 30 km, 35 min via the A86.",
      description: "Orly Airport is 35 min from Gennevilliers via the A86 and A6.",
      routeDescription: "Via the A86 south then A6 towards Orly.",
      introduction: "Gennevilliers, a town of 48,000 inhabitants, is home to the Port of Gennevilliers, the largest river port in Île-de-France and France's second after Strasbourg. This major logistics hub, spanning 400 hectares along the Seine, hosts over 3,000 businesses and handles 20 million tonnes of freight annually. The town is also known for its Théâtre de Gennevilliers, a National Drama Centre renowned for its avant-garde programming attracting contemporary theatre lovers from across the Paris region. The T1 tramway, linking Asnières to Noisy-le-Sec, crosses the town and connects it to the metropolitan network. However, reaching Orly by public transport requires multiple connections. The taxi takes the A86 south, bypasses Paris and reaches Orly in 35 minutes, providing an ideal direct transfer for port professionals, residents and cultural visitors.",
      itineraire: "Your driver leaves Gennevilliers via the A86 access, bypasses southern Paris through Nanterre, Vélizy-Villacoublay and Rungis, then joins the A6 to Orly. Tolls (~€4) included. Allow 35 min off-peak, 45-50 min in rush hour. Alternative via the southern ring road is possible but often busier. Real-time GPS routing.",
      conseils: "The Port of Gennevilliers is an active industrial site — for pick-ups in the port zone, specify the exact address (dock, company). The theatre stages shows until 10.30pm — perfect timing for an Orly taxi the next morning. Allow 1h30 before departure for morning flights. For returns from Orly, book ahead and your driver waits in arrivals with your name.",
      comparaisonTransport: "T1 tram + metro + Orlyval = 1h30, ~€14, 3 connections. Taxi at €55-70 is direct in 35 min. For 2 passengers (€27-35/pp), taxi saves 55 min. For 3 (€18-23/pp), unbeatable.",
      faq: [
        { question: "How much is a taxi Gennevilliers to Orly?", answer: "€55-70 sedan, €92 van (7 seats). Fixed fare, tolls and luggage included." },
        { question: "How long does it take?", answer: "35 min average, 45-50 min in rush hour." },
        { question: "Pick-up in the port zone?", answer: "Yes, specify exact address within Port of Gennevilliers." },
        { question: "Tolls?", answer: "~€4 tolls included in the fixed fare." },
        { question: "24/7 service?", answer: "Yes, continuous service day and night, weekends and holidays." }
      ],
    }
  ),
  hdsNERoute(
    "taxi-gennevilliers-cdg", "Gennevilliers", "Aéroport CDG",
    48.9326, 2.2927, 49.0097, 2.5479,
    25, 30, "45 — 60 €", "aeroport",
    ["A86", "A1", "Port fluvial", "CDG", "T1 tramway"],
    45, 60, 78, 45, "A86 + A1", "~4 €", "gennevilliers", "aeroport-cdg",
    ["taxi-gennevilliers-orly", "taxi-asnieres-sur-seine-cdg", "taxi-colombes-cdg", "taxi-villeneuve-la-garenne-cdg"],
    ["aeroport", "cdg", "roissy", "gennevilliers", "port-fluvial", "hauts-de-seine"],
    {
      metaTitle: "Taxi Gennevilliers → CDG | 25 km, dès 45 € | TaxiNeo",
      metaDescription: "Transfert taxi Gennevilliers vers CDG. 30 min par A86/A1. Port fluvial, 48 000 hab. Prix fixe 45-60 €.",
      heroTitle: "Taxi Gennevilliers → Aéroport CDG",
      heroSubtitle: "Transfert Gennevilliers → CDG au prix fixe de 45 — 60 €. 25 km, 30 min par l'A86.",
      description: "L'aéroport CDG est à 30 min de Gennevilliers via l'A86 et l'A1.",
      routeDescription: "Via l'A86 est puis l'A1 nord direction Roissy.",
      introduction: "Gennevilliers bénéficie d'un accès rapide à l'aéroport Charles de Gaulle grâce à sa position nord dans les Hauts-de-Seine, à proximité directe de l'A86. Cette commune de 48 000 habitants est dominée par son port fluvial, véritable poumon logistique de la région parisienne qui emploie plus de 6 000 personnes directement. Les entreprises de la zone portuaire — logistique, import-export, industrie — envoient régulièrement des collaborateurs en déplacement international via CDG. Le Théâtre de Gennevilliers, labellisé Centre Dramatique National depuis 1983, est un phare culturel qui attire un public averti de toute la métropole. Le tramway T1 traverse la ville mais ne dessert pas CDG. En transports en commun, il faut emprunter le T1, puis le métro, puis le RER B — un parcours d'1h15 avec 2 correspondances. Le taxi par l'A86 et l'A1 divise ce temps par deux et offre un confort sans comparaison pour les voyageurs avec bagages.",
      itineraire: "Votre chauffeur rejoint l'A86 est depuis Gennevilliers, passe par Saint-Denis et Le Bourget, puis emprunte l'A1 nord en direction de Roissy-CDG. L'accès aux terminaux est direct depuis la sortie Roissy de l'A1. Péages ~4 € inclus dans le tarif. Comptez 30 minutes en conditions fluides, 40 à 45 minutes en heures de pointe. L'alternative par la N1 et la Francilienne (N104) est parfois utilisée en cas de blocage sur l'A1. Votre chauffeur optimise le parcours grâce au suivi trafic en temps réel.",
      conseils: "CDG est le hub international par excellence avec plus de 70 millions de passagers par an. Pour les vols intercontinentaux, arrivez 3h avant le décollage. Depuis Gennevilliers, partez au moins 1h45 avant votre vol en heures de pointe. Précisez votre terminal CDG (T1, T2A-G ou T3). Le T2 est le plus grand avec ses 7 sous-terminaux — vérifiez bien votre terminal sur votre billet. Pour le retour, votre chauffeur suit votre vol en temps réel et vous attend en zone d'arrivée. Le marché de Gennevilliers (mardi, vendredi, dimanche) offre des produits frais variés à ramener avant un voyage.",
      comparaisonTransport: "T1 + métro 13 + RER B = 1h15, ~12 €, 2 correspondances laborieuses. Le taxi à 45-60 € est direct en 30 min. À 2 passagers (22-30 €/pers.), excellent rapport qualité-prix. À 3 passagers (15-20 €/pers.), imbattable.",
      faq: [
        { question: "Quel est le prix du taxi Gennevilliers-CDG ?", answer: "45-60 € en berline, 78 € en van 7 places. Tarif fixe, péages et bagages inclus." },
        { question: "Combien de temps faut-il ?", answer: "30 min en moyenne, 40-45 min aux heures de pointe." },
        { question: "Prise en charge dans la zone portuaire ?", answer: "Oui, précisez l'adresse exacte (quai, bâtiment) pour une prise en charge au plus près." },
        { question: "Mon chauffeur m'attend en cas de retard ?", answer: "Oui, suivi de vol en temps réel. Attente gratuite jusqu'à 30 min après l'atterrissage." },
        { question: "Peut-on réserver un van ?", answer: "Oui, van 7 places à 78 €. Idéal pour les groupes ou familles avec beaucoup de bagages." }
      ],
    },
    {
      metaTitle: "Taxi Gennevilliers → CDG Airport | 25 km, from €45 | TaxiNeo",
      metaDescription: "Taxi from Gennevilliers to CDG. 30 min via A86/A1. Largest IDF river port, 48,000 residents. Fixed price €45-60.",
      heroTitle: "Taxi Gennevilliers → CDG Airport",
      heroSubtitle: "Your Gennevilliers → CDG Airport transfer at €45 — €60. 25 km, 30 min via the A86.",
      description: "CDG Airport is 30 min from Gennevilliers via the A86 and A1.",
      routeDescription: "Via the A86 east then A1 north to Roissy.",
      introduction: "Gennevilliers enjoys fast access to Charles de Gaulle Airport thanks to its northern Hauts-de-Seine position, close to the A86. This 48,000-resident town is dominated by its river port, the Paris region's logistical powerhouse employing over 6,000 people directly. Port zone companies — logistics, import-export, industry — regularly send staff on international business trips via CDG. The Théâtre de Gennevilliers, a National Drama Centre since 1983, is a cultural beacon drawing discerning audiences from across the metropolis. The T1 tramway crosses the town but does not serve CDG. By public transport, one must take T1, then metro, then RER B — a 1h15 journey with 2 connections. The taxi via A86 and A1 halves this time and offers incomparable comfort for travellers with luggage.",
      itineraire: "Your driver joins the A86 east from Gennevilliers, passes through Saint-Denis and Le Bourget, then takes the A1 north to Roissy-CDG. Direct terminal access from the A1 Roissy exit. Tolls ~€4 included. Allow 30 min off-peak, 40-45 min in rush hour. Alternative via N1 and Francilienne (N104) if A1 is blocked. Real-time traffic optimisation.",
      conseils: "CDG is the premier international hub with 70+ million passengers annually. For intercontinental flights, arrive 3h before departure. From Gennevilliers, leave at least 1h45 before your flight in rush hour. Specify your CDG terminal (T1, T2A-G or T3). T2 is the largest with 7 sub-terminals. For returns, your driver tracks your flight and waits in arrivals.",
      comparaisonTransport: "T1 + metro 13 + RER B = 1h15, ~€12, 2 tedious connections. Taxi at €45-60 is direct in 30 min. For 2 passengers (€22-30/pp), excellent value. For 3 (€15-20/pp), unbeatable.",
      faq: [
        { question: "How much is a taxi Gennevilliers to CDG?", answer: "€45-60 sedan, €78 van (7 seats). Fixed fare, tolls and luggage included." },
        { question: "How long?", answer: "30 min average, 40-45 min in rush hour." },
        { question: "Port zone pick-up?", answer: "Yes, specify exact address (dock, building) for closest pick-up." },
        { question: "Flight delay?", answer: "Real-time flight tracking. Free waiting up to 30 min after landing." },
        { question: "Van available?", answer: "Yes, 7-seat van at €78. Ideal for groups or families with heavy luggage." }
      ],
    }
  ),
  // ═══════════════════════════════════════════════════════════
  // VILLENEUVE-LA-GARENNE (25 000 hab.)
  // ═══════════════════════════════════════════════════════════
  hdsNERoute(
    "taxi-villeneuve-la-garenne-orly", "Villeneuve-la-Garenne", "Aéroport d'Orly",
    48.9376, 2.3254, 48.7262, 2.3652,
    32, 35, "55 — 75 €", "aeroport",
    ["A86", "A6", "Qwartz", "Bords de Seine", "T1 tramway"],
    55, 75, 95, 50, "A86 + A6", "~4 €", "villeneuve-la-garenne", "aeroport-orly",
    ["taxi-villeneuve-la-garenne-cdg", "taxi-gennevilliers-orly", "taxi-asnieres-sur-seine-orly", "taxi-colombes-orly"],
    ["aeroport", "orly", "villeneuve-la-garenne", "qwartz", "hauts-de-seine"],
    {
      metaTitle: "Taxi Villeneuve-la-Garenne → Orly | 32 km, dès 55 € | TaxiNeo",
      metaDescription: "Transfert taxi Villeneuve-la-Garenne vers Orly. 35 min par A86/A6. Centre Qwartz, bords de Seine. Prix fixe 55-75 €.",
      heroTitle: "Taxi Villeneuve-la-Garenne → Aéroport d'Orly",
      heroSubtitle: "Transfert Villeneuve-la-Garenne → Orly au prix fixe de 55 — 75 €. 32 km, 35 min.",
      description: "L'aéroport d'Orly est à 35 min de Villeneuve-la-Garenne via l'A86 et l'A6.",
      routeDescription: "Via l'A86 sud puis l'A6 direction Orly.",
      introduction: "Villeneuve-la-Garenne est une commune de 25 000 habitants nichée dans une boucle de la Seine, au nord des Hauts-de-Seine. Cette ville à taille humaine partage avec Neuilly-sur-Seine et Levallois-Perret les rives de l'île de la Jatte, ce joyau paysager immortalisé par les peintres impressionnistes. Le centre commercial Qwartz, ouvert en 2014 sur les bords de Seine, est devenu un pôle commercial majeur du nord-92 avec ses 165 boutiques et son cinéma multiplexe. Le tramway T1 traverse la ville et la relie à Asnières et Saint-Denis, mais pour Orly, les transports en commun imposent un parcours complexe de plus d'1h30. Les bords de Seine offrent une promenade agréable et accueillent des événements nautiques. La ville connaît un renouveau urbain avec la construction de nouveaux quartiers résidentiels. Le taxi depuis Villeneuve-la-Garenne emprunte l'A86 puis l'A6, contournant Paris pour atteindre Orly en 35 minutes, un transfert direct et confortable.",
      itineraire: "Votre chauffeur quitte Villeneuve-la-Garenne par l'accès A86 (échangeur de Gennevilliers), contourne le sud de Paris par Nanterre et Vélizy, puis emprunte l'A6 direction Orly. Les péages (~4 €) sont inclus dans le tarif fixe. Comptez 35 minutes en conditions normales, 45 à 50 minutes aux heures de pointe. L'itinéraire peut varier selon le trafic en temps réel, avec une alternative par le Périphérique sud si l'A86 est encombrée. Votre chauffeur vous dépose directement au terminal d'Orly souhaité (Orly 1, 2, 3 ou 4).",
      conseils: "Le centre commercial Qwartz propose des restaurants et des boutiques idéales pour les achats de dernière minute avant un voyage. Les bords de Seine à Villeneuve-la-Garenne offrent un cadre verdoyant pour une promenade relaxante avant un vol. Pour les vols matinaux depuis Orly, partez au moins 1h30 avant le décollage. Précisez votre terminal lors de la réservation. Le tramway T1 est pratique pour les déplacements locaux mais inadapté pour les transferts aéroport avec bagages. Pour le retour depuis Orly, votre chauffeur vous attend en zone d'arrivée avec votre nom affiché.",
      comparaisonTransport: "T1 tramway + métro + correspondances vers Orly = 1h30, ~15 €, 3 changements minimum. Le taxi à 55-75 € est direct en 35 min. À 2 passagers (27-37 €/pers.), le taxi est largement justifié. À 3 passagers (18-25 €/pers.), c'est le choix le plus rationnel.",
      faq: [
        { question: "Quel est le prix ?", answer: "55-75 € en berline, 95 € en van 7 places. Tarif fixe, péages et bagages inclus." },
        { question: "Combien de temps dure le trajet ?", answer: "35 min en moyenne, 45-50 min aux heures de pointe." },
        { question: "Prise en charge au centre Qwartz ?", answer: "Oui, devant l'entrée principale de Qwartz ou à toute adresse de Villeneuve-la-Garenne." },
        { question: "Y a-t-il des péages ?", answer: "Oui, ~4 € inclus dans le tarif fixe." },
        { question: "Retour depuis Orly ?", answer: "Oui, même tarif fixe. Chauffeur en zone d'arrivée avec panneau nominatif." }
      ],
    },
    {
      metaTitle: "Taxi Villeneuve-la-Garenne → Orly | 32 km, from €55 | TaxiNeo",
      metaDescription: "Taxi from Villeneuve-la-Garenne to Orly. 35 min via A86/A6. Qwartz mall, Seine banks. Fixed price €55-75.",
      heroTitle: "Taxi Villeneuve-la-Garenne → Orly Airport",
      heroSubtitle: "Your Villeneuve-la-Garenne → Orly transfer at €55 — €75. 32 km, 35 min.",
      description: "Orly Airport is 35 min from Villeneuve-la-Garenne via the A86 and A6.",
      routeDescription: "Via the A86 south then A6 to Orly.",
      introduction: "Villeneuve-la-Garenne is a 25,000-resident town nestled in a bend of the Seine in northern Hauts-de-Seine. This human-scale town shares the Île de la Jatte riverbanks with Neuilly-sur-Seine and Levallois-Perret — a landscape gem immortalised by Impressionist painters. The Qwartz shopping centre, opened in 2014 on the Seine banks, has become a major retail hub in northern 92 with 165 shops and a multiplex cinema. The T1 tramway crosses the town, connecting it to Asnières and Saint-Denis, but reaching Orly by public transport requires a complex journey of over 1h30. The Seine banks offer pleasant walks and host nautical events. The town is experiencing urban renewal with new residential developments. The taxi from Villeneuve-la-Garenne takes the A86 then A6, bypassing Paris to reach Orly in 35 minutes — a direct, comfortable transfer.",
      itineraire: "Your driver leaves Villeneuve-la-Garenne via the A86 access (Gennevilliers interchange), bypasses southern Paris through Nanterre and Vélizy, then takes the A6 to Orly. Tolls (~€4) included. Allow 35 min off-peak, 45-50 min in rush hour. Route may vary with real-time traffic, with an alternative via the southern ring road. Drop-off at your chosen Orly terminal (1, 2, 3 or 4).",
      conseils: "Qwartz shopping centre offers restaurants and shops for last-minute purchases before travel. The Seine banks provide a relaxing green setting before a flight. For morning Orly flights, leave at least 1h30 before departure. Specify your terminal when booking. T1 tram is fine locally but unsuitable for airport transfers with luggage. For returns, driver waits in arrivals with your name.",
      comparaisonTransport: "T1 tram + metro + Orly connections = 1h30, ~€15, 3+ changes. Taxi at €55-75 is direct in 35 min. For 2 passengers (€27-37/pp), well justified. For 3 (€18-25/pp), the most rational choice.",
      faq: [
        { question: "How much?", answer: "€55-75 sedan, €95 van (7 seats). Fixed fare, tolls and luggage included." },
        { question: "How long?", answer: "35 min average, 45-50 min in rush hour." },
        { question: "Pick-up at Qwartz?", answer: "Yes, at Qwartz main entrance or any Villeneuve-la-Garenne address." },
        { question: "Tolls?", answer: "~€4 included in the fixed fare." },
        { question: "Return from Orly?", answer: "Yes, same fixed fare. Driver in arrivals with your name." }
      ],
    }
  ),
  hdsNERoute(
    "taxi-villeneuve-la-garenne-cdg", "Villeneuve-la-Garenne", "Aéroport CDG",
    48.9376, 2.3254, 49.0097, 2.5479,
    22, 25, "40 — 55 €", "aeroport",
    ["A86", "A1", "CDG", "Qwartz", "Bords de Seine"],
    40, 55, 72, 40, "A86 + A1", "~4 €", "villeneuve-la-garenne", "aeroport-cdg",
    ["taxi-villeneuve-la-garenne-orly", "taxi-gennevilliers-cdg", "taxi-asnieres-sur-seine-cdg", "taxi-colombes-cdg"],
    ["aeroport", "cdg", "roissy", "villeneuve-la-garenne", "qwartz", "hauts-de-seine"],
    {
      metaTitle: "Taxi Villeneuve-la-Garenne → CDG | 22 km, dès 40 € | TaxiNeo",
      metaDescription: "Transfert taxi Villeneuve-la-Garenne vers CDG. 25 min par A86/A1. Centre Qwartz, 25 000 hab. Prix fixe 40-55 €.",
      heroTitle: "Taxi Villeneuve-la-Garenne → Aéroport CDG",
      heroSubtitle: "Transfert Villeneuve-la-Garenne → CDG au prix fixe de 40 — 55 €. 22 km, 25 min.",
      description: "L'aéroport CDG est à 25 min de Villeneuve-la-Garenne via l'A86 et l'A1.",
      routeDescription: "Via l'A86 est puis l'A1 nord direction Roissy.",
      introduction: "Villeneuve-la-Garenne offre un accès particulièrement rapide à l'aéroport Charles de Gaulle grâce à sa situation géographique au nord des Hauts-de-Seine. À seulement 22 km de Roissy, cette commune de 25 000 habitants est l'une des plus proches de CDG dans le département. La proximité de l'A86, qui longe la ville au sud, permet de rejoindre rapidement l'A1 vers Roissy en contournant Paris par le nord-est. Le centre commercial Qwartz, avec ses 165 enseignes, attire une clientèle venant de tout le nord-92, y compris des voyageurs faisant leurs derniers achats avant un vol. Les bords de Seine offrent un cadre résidentiel agréable qui séduit de jeunes familles. Le tramway T1 relie Villeneuve-la-Garenne à la gare d'Asnières et au réseau métropolitain, mais pour CDG, les correspondances T1 + métro + RER B prennent plus d'1h. Le taxi réduit ce trajet à 25 minutes sans stress ni correspondance.",
      itineraire: "Votre chauffeur emprunte l'A86 est depuis l'échangeur de Gennevilliers/Villeneuve, passe par Saint-Denis et Le Bourget, puis rejoint l'A1 nord direction Roissy-CDG. L'accès aux terminaux est direct. Péages ~4 € inclus. Comptez 25 minutes en conditions fluides, 35 à 40 minutes en heures de pointe. Le trajet est l'un des plus courts vers CDG depuis les Hauts-de-Seine grâce à la position nord de Villeneuve-la-Garenne.",
      conseils: "Villeneuve-la-Garenne est l'une des communes des Hauts-de-Seine les plus proches de CDG — profitez-en pour partir sereinement, même en heures de pointe. Pour les vols long-courriers, prévoyez 3h à l'aéroport, soit un départ de Villeneuve 1h30 à 2h avant le vol. Précisez votre terminal CDG (T1, T2A-G, T3). Le T1 dessert les compagnies asiatiques et américaines hors alliance SkyTeam. Le T2 est le hub Air France. Pour le retour, votre chauffeur suit votre vol en temps réel.",
      comparaisonTransport: "T1 tram + métro + RER B = 1h10, ~12 €, 2 correspondances. Le taxi à 40-55 € est direct en 25 min. À 2 passagers (20-27 €/pers.), le taxi est très compétitif. Avec la proximité de Villeneuve, c'est un excellent rapport qualité-prix.",
      faq: [
        { question: "Quel est le prix ?", answer: "40-55 € en berline, 72 € en van 7 places. Tarif fixe, péages et bagages inclus." },
        { question: "Combien de temps faut-il ?", answer: "25 min en moyenne, 35-40 min aux heures de pointe." },
        { question: "Pourquoi Villeneuve est-elle si proche de CDG ?", answer: "Sa position nord dans les Hauts-de-Seine et l'accès direct à l'A86 en font l'une des villes les plus proches de CDG dans le 92." },
        { question: "Mon chauffeur m'attend à CDG ?", answer: "Oui, en zone d'arrivée avec panneau nominatif. Suivi de vol en temps réel." },
        { question: "Réservation à l'avance ?", answer: "Oui, en ligne 24h/24, jusqu'à 30 jours à l'avance." }
      ],
    },
    {
      metaTitle: "Taxi Villeneuve-la-Garenne → CDG | 22 km, from €40 | TaxiNeo",
      metaDescription: "Taxi from Villeneuve-la-Garenne to CDG. 25 min via A86/A1. Qwartz mall, 25,000 residents. Fixed price €40-55.",
      heroTitle: "Taxi Villeneuve-la-Garenne → CDG Airport",
      heroSubtitle: "Your Villeneuve-la-Garenne → CDG transfer at €40 — €55. 22 km, 25 min.",
      description: "CDG Airport is 25 min from Villeneuve-la-Garenne via the A86 and A1.",
      routeDescription: "Via the A86 east then A1 north to Roissy.",
      introduction: "Villeneuve-la-Garenne offers particularly fast access to Charles de Gaulle Airport thanks to its location in northern Hauts-de-Seine. Just 22 km from Roissy, this 25,000-resident town is one of the closest to CDG in the department. The A86's proximity, running along the town's south, enables a quick connection to the A1 towards Roissy by bypassing Paris to the northeast. The Qwartz shopping centre, with 165 stores, draws customers from across northern 92, including travellers making last purchases before a flight. The Seine banks offer a pleasant residential setting attracting young families. The T1 tramway connects Villeneuve-la-Garenne to Asnières station and the metropolitan network, but for CDG, T1 + metro + RER B connections take over 1h. The taxi cuts this to 25 minutes with no stress or transfers.",
      itineraire: "Your driver takes the A86 east from the Gennevilliers/Villeneuve interchange, through Saint-Denis and Le Bourget, then A1 north to Roissy-CDG. Direct terminal access. Tolls ~€4 included. Allow 25 min off-peak, 35-40 min in rush hour. One of the shortest routes to CDG from Hauts-de-Seine thanks to Villeneuve's northern position.",
      conseils: "Villeneuve-la-Garenne is one of Hauts-de-Seine's closest towns to CDG — take advantage for a relaxed departure even in rush hour. For long-haul flights, allow 3h at the airport, meaning departure from Villeneuve 1.5-2h before your flight. Specify your CDG terminal (T1, T2A-G, T3). T1 serves Asian and American airlines outside SkyTeam. T2 is the Air France hub. For returns, your driver tracks your flight in real time.",
      comparaisonTransport: "T1 tram + metro + RER B = 1h10, ~€12, 2 connections. Taxi at €40-55 is direct in 25 min. For 2 passengers (€20-27/pp), very competitive. With Villeneuve's proximity, excellent value.",
      faq: [
        { question: "How much?", answer: "€40-55 sedan, €72 van (7 seats). Fixed fare, tolls and luggage included." },
        { question: "How long?", answer: "25 min average, 35-40 min in rush hour." },
        { question: "Why is Villeneuve so close to CDG?", answer: "Its northern Hauts-de-Seine position and direct A86 access make it one of the closest 92 towns to CDG." },
        { question: "Driver waiting at CDG?", answer: "Yes, in arrivals with your name. Real-time flight tracking." },
        { question: "Advance booking?", answer: "Yes, online 24/7, up to 30 days ahead." }
      ],
    }
  ),
  // ═══════════════════════════════════════════════════════════
  // PUTEAUX (45 000 hab.)
  // ═══════════════════════════════════════════════════════════
  hdsNERoute(
    "taxi-puteaux-orly", "Puteaux", "Aéroport d'Orly",
    48.8843, 2.2387, 48.7262, 2.3652,
    25, 25, "50 — 65 €", "aeroport",
    ["A86", "A6", "La Défense", "CNIT", "Grande Arche", "Île de Puteaux"],
    50, 65, 85, 40, "A86 + A6", "~3 €", "puteaux", "aeroport-orly",
    ["taxi-puteaux-cdg", "taxi-la-defense-orly", "taxi-suresnes-orly", "taxi-courbevoie-orly"],
    ["aeroport", "orly", "puteaux", "la-defense", "grande-arche", "hauts-de-seine"],
    {
      metaTitle: "Taxi Puteaux → Orly | 25 km, dès 50 € | TaxiNeo",
      metaDescription: "Transfert taxi Puteaux vers Orly. 25 min par A86/A6. La Défense, CNIT, Grande Arche. Prix fixe 50-65 €.",
      heroTitle: "Taxi Puteaux → Aéroport d'Orly",
      heroSubtitle: "Transfert Puteaux → Orly au prix fixe de 50 — 65 €. 25 km, 25 min depuis La Défense.",
      description: "L'aéroport d'Orly est à 25 min de Puteaux via l'A86 et l'A6.",
      routeDescription: "Via l'A86 sud puis l'A6 direction Orly.",
      introduction: "Puteaux, commune de 45 000 habitants, est le berceau historique du quartier d'affaires de La Défense dont elle accueille la majeure partie, incluant la Grande Arche (110 m de haut, inaugurée en 1989), le CNIT (Centre des Nouvelles Industries et Technologies, premier bâtiment de La Défense construit en 1958) et les tours emblématiques comme la tour Total Energies. Mais Puteaux ne se résume pas à La Défense : le Vieux Puteaux, autour de la rue de la République et de l'église Notre-Dame-de-Pitié, conserve un charme de village avec ses commerces de proximité et ses restaurants. L'île de Puteaux, accessible par une passerelle sur la Seine, offre un havre de verdure avec son stade, sa piscine et ses espaces de promenade. L'esplanade de La Défense, qui domine le quartier, est un lieu d'art contemporain en plein air avec ses sculptures monumentales. Le transfert vers Orly par l'A86 prend 25 minutes — essentiel pour les dizaines de milliers de professionnels de La Défense prenant des vols domestiques et européens.",
      itineraire: "Votre chauffeur quitte Puteaux par le boulevard circulaire de La Défense ou la N13, rejoint l'A86 sud direction Vélizy-Villacoublay, puis emprunte l'A6 vers Orly. Les péages (~3 €) sont inclus dans le tarif fixe. Comptez 25 minutes en conditions fluides, 35 à 40 minutes aux heures de pointe. L'itinéraire alternatif via l'A13 et le Périphérique sud est utilisé si l'A86 est saturée. Votre chauffeur peut vous prendre en charge au pied de votre tour à La Défense, dans le Vieux Puteaux ou sur l'île de Puteaux.",
      conseils: "Si vous travaillez dans une tour de La Défense, précisez l'adresse exacte (nom de la tour, esplanade, rue) pour un enlèvement au plus près. L'esplanade de La Défense est vaste — le point de rendez-vous doit être précis. Pour les vols Orly du matin, partez avant 7h pour éviter les embouteillages du quartier d'affaires. L'île de Puteaux est un lieu agréable pour patienter avant un transfert. Pour le retour, facture professionnelle disponible pour notes de frais. Le CNIT accueille régulièrement des salons professionnels générant un flux important vers Orly.",
      comparaisonTransport: "Pas de transport direct Puteaux-Orly. Métro 1 + RER/Orlyval : 1h10, ~15 €. Le taxi à 50-65 € est direct en 25 min. Pour 2-3 passagers d'affaires (17-32 €/pers.), le choix évident pour le confort et la ponctualité.",
      faq: [
        { question: "Quel est le prix ?", answer: "50-65 € en berline, 85 € en van 7 places. Tarif fixe, péages et bagages inclus." },
        { question: "Prise en charge au pied de ma tour La Défense ?", answer: "Oui, précisez l'adresse exacte : tour, esplanade ou rue dans le quartier d'affaires." },
        { question: "Combien de temps ?", answer: "25 min en moyenne, 35-40 min aux heures de pointe." },
        { question: "Facture pour note de frais ?", answer: "Oui, facture professionnelle détaillée envoyée par email après chaque course." },
        { question: "Retour depuis Orly ?", answer: "Oui, même tarif fixe. Chauffeur en zone d'arrivée avec votre nom." }
      ],
    },
    {
      metaTitle: "Taxi Puteaux → Orly Airport | 25 km, from €50 | TaxiNeo",
      metaDescription: "Taxi from Puteaux to Orly. 25 min via A86/A6. La Défense, CNIT, Grande Arche. Fixed price €50-65.",
      heroTitle: "Taxi Puteaux → Orly Airport",
      heroSubtitle: "Your Puteaux → Orly Airport transfer at €50 — €65. 25 km, 25 min from La Défense.",
      description: "Orly Airport is 25 min from Puteaux via the A86 and A6.",
      routeDescription: "Via the A86 south then A6 to Orly.",
      introduction: "Puteaux, a town of 45,000 residents, is the historic cradle of the La Défense business district, hosting its largest section including the Grande Arche (110 m, inaugurated 1989), the CNIT (Centre for New Industries and Technologies, La Défense's first building from 1958) and iconic towers like Tour Total Energies. But Puteaux is more than La Défense: the Vieux Puteaux (Old Puteaux), around rue de la République and Notre-Dame-de-Pitié church, retains village charm with local shops and restaurants. The Île de Puteaux, accessible by a footbridge over the Seine, offers a green haven with its stadium, swimming pool and walking paths. The La Défense esplanade is an open-air contemporary art venue with monumental sculptures. The A86 transfer to Orly takes 25 minutes — essential for the tens of thousands of La Défense professionals catching domestic and European flights.",
      itineraire: "Your driver leaves Puteaux via the La Défense circular boulevard or N13, joins the A86 south towards Vélizy-Villacoublay, then takes the A6 to Orly. Tolls (~€3) included. Allow 25 min off-peak, 35-40 min in rush hour. Alternative via A13 and southern ring road if A86 is congested. Pick-up at your La Défense tower, in Vieux Puteaux or on Île de Puteaux.",
      conseils: "If you work in a La Défense tower, specify exact address (tower name, esplanade, street) for closest pick-up. The La Défense esplanade is vast — be precise about the meeting point. For morning Orly flights, leave before 7am to avoid business district congestion. Professional invoice available for expenses. The CNIT regularly hosts trade fairs generating heavy Orly traffic.",
      comparaisonTransport: "No direct Puteaux-Orly transport. Metro 1 + RER/Orlyval: 1h10, ~€15. Taxi at €50-65 is direct in 25 min. For 2-3 business travellers (€17-32/pp), the obvious choice for comfort and punctuality.",
      faq: [
        { question: "How much?", answer: "€50-65 sedan, €85 van (7 seats). Fixed fare, tolls and luggage included." },
        { question: "Pick-up at my La Défense tower?", answer: "Yes, give exact address: tower, esplanade or street in the business district." },
        { question: "How long?", answer: "25 min average, 35-40 min in rush hour." },
        { question: "Business invoice?", answer: "Yes, detailed professional invoice emailed after each trip." },
        { question: "Return from Orly?", answer: "Yes, same fixed fare. Driver in arrivals with your name." }
      ],
    }
  ),
  hdsNERoute(
    "taxi-puteaux-cdg", "Puteaux", "Aéroport CDG",
    48.8843, 2.2387, 49.0097, 2.5479,
    35, 35, "60 — 80 €", "aeroport",
    ["A86", "A1", "La Défense", "Grande Arche", "Roissy", "CNIT"],
    60, 80, 105, 55, "A86 + A1", "~5 €", "puteaux", "aeroport-cdg",
    ["taxi-puteaux-orly", "taxi-la-defense-cdg", "taxi-suresnes-cdg", "taxi-courbevoie-cdg"],
    ["aeroport", "cdg", "roissy", "puteaux", "la-defense", "grande-arche", "hauts-de-seine"],
    {
      metaTitle: "Taxi Puteaux → CDG | 35 km, dès 60 € | TaxiNeo",
      metaDescription: "Transfert taxi Puteaux vers CDG. 35 min par A86/A1. La Défense, Grande Arche, CNIT. Prix fixe 60-80 €.",
      heroTitle: "Taxi Puteaux → Aéroport CDG",
      heroSubtitle: "Transfert Puteaux → CDG au prix fixe de 60 — 80 €. 35 km, 35 min depuis La Défense.",
      description: "L'aéroport CDG est à 35 min de Puteaux via l'A86 et l'A1.",
      routeDescription: "Via l'A86 nord puis l'A1 direction Roissy.",
      introduction: "Le transfert Puteaux – Charles de Gaulle est le trajet business par excellence pour les cadres et dirigeants de La Défense. Puteaux, qui héberge le cœur historique du premier quartier d'affaires européen, voit transiter quotidiennement des milliers de voyageurs internationaux vers CDG. La Grande Arche, achèvement symbolique de l'axe historique parisien (Louvre – Champs-Élysées – Arc de Triomphe – Grande Arche), domine l'esplanade où se côtoient sculptures contemporaines et tours de bureaux abritant les sièges de multinationales du CAC 40. Le CNIT, rénové et reconverti en espace événementiel, accueille des congrès internationaux dont les participants se rendent à CDG. Le Vieux Puteaux, avec ses ruelles pittoresques et son marché animé (mercredi, samedi et dimanche), rappelle que la ville a une identité propre au-delà de La Défense. L'île de Puteaux sur la Seine est un poumon vert apprécié des résidents. Le taxi contourne Paris par l'A86 nord et rejoint l'A1 vers Roissy en 35 minutes.",
      itineraire: "Votre chauffeur quitte Puteaux par le boulevard circulaire ou l'avenue de la Division Leclerc, rejoint l'A86 nord en direction de Gennevilliers et Saint-Denis, puis emprunte l'A1 (autoroute du Nord) vers Roissy-CDG. L'accès aux terminaux est direct. Péages ~5 € inclus dans le tarif fixe. Comptez 35 minutes en conditions normales, 45 à 55 minutes aux heures de pointe (7h-9h30, 17h-19h30). L'itinéraire via l'A14 puis l'A86 est peut être préféré si le tronçon nord de l'A86 est saturé.",
      conseils: "Pour les vols long-courriers depuis CDG, prévoyez 3h à l'aéroport. Partez de Puteaux 2h à 2h30 avant votre vol en heures de pointe. Précisez votre terminal CDG (T1, T2A-G, T3). Le terminal 2 est le hub Air France avec 7 sous-terminaux. Si vous venez d'un salon au CNIT, précisez l'adresse de prise en charge. Demandez une facture professionnelle pour votre note de frais. Pour les voyageurs fréquents, TaxiNeo propose un compte entreprise avec facturation mensuelle et réservations simplifiées.",
      comparaisonTransport: "RER A (La Défense → Châtelet) + RER B (→ CDG) = 1h15, ~12 €, 1 correspondance avec escaliers et bagages. Le taxi à 60-80 € est direct en 35 min. Pour 2 passagers d'affaires (30-40 €/pers.), c'est le meilleur rapport temps/coût. Pour 3 passagers (20-27 €/pers.), imbattable.",
      faq: [
        { question: "Quel est le prix ?", answer: "60-80 € en berline, 105 € en van 7 places. Tarif fixe, péages et bagages inclus." },
        { question: "Prise en charge à La Défense ?", answer: "Oui, au pied de votre tour, sur l'esplanade ou à toute adresse de Puteaux." },
        { question: "Combien de temps faut-il ?", answer: "35 min en moyenne, 45-55 min aux heures de pointe." },
        { question: "Facture entreprise ?", answer: "Oui, facture professionnelle détaillée. Compte entreprise disponible." },
        { question: "Mon chauffeur m'attend en cas de retard ?", answer: "Oui, suivi de vol en temps réel. Attente gratuite jusqu'à 30 min après l'atterrissage." }
      ],
    },
    {
      metaTitle: "Taxi Puteaux → CDG Airport | 35 km, from €60 | TaxiNeo",
      metaDescription: "Taxi from Puteaux to CDG. 35 min via A86/A1. La Défense, Grande Arche, CNIT. Fixed price €60-80.",
      heroTitle: "Taxi Puteaux → CDG Airport",
      heroSubtitle: "Your Puteaux → CDG Airport transfer at €60 — €80. 35 km, 35 min from La Défense.",
      description: "CDG Airport is 35 min from Puteaux via the A86 and A1.",
      routeDescription: "Via the A86 north then A1 to Roissy.",
      introduction: "The Puteaux to Charles de Gaulle transfer is the quintessential business route for La Défense executives and directors. Puteaux, which houses the historic heart of Europe's largest business district, sees thousands of international travellers transit to CDG daily. The Grande Arche, symbolic completion of Paris's historic axis (Louvre – Champs-Élysées – Arc de Triomphe – Grande Arche), overlooks the esplanade where contemporary sculptures stand alongside office towers housing CAC 40 multinational headquarters. The CNIT, renovated as an events venue, hosts international congresses whose participants head to CDG. The Vieux Puteaux, with its picturesque lanes and lively market (Wednesday, Saturday and Sunday), reminds visitors that the town has its own identity beyond La Défense. The Île de Puteaux on the Seine is a green lung cherished by residents. The taxi bypasses Paris via the A86 north and reaches the A1 to Roissy in 35 minutes.",
      itineraire: "Your driver leaves Puteaux via the circular boulevard or avenue de la Division Leclerc, takes the A86 north towards Gennevilliers and Saint-Denis, then the A1 to Roissy-CDG. Direct terminal access. Tolls ~€5 included. Allow 35 min off-peak, 45-55 min in rush hour. A14 then A86 east alternative if A86 north is congested.",
      conseils: "For long-haul CDG flights, allow 3h at the airport. Leave Puteaux 2-2.5h before your flight in rush hour. Specify CDG terminal (T1, T2A-G, T3). T2 is the Air France hub with 7 sub-terminals. If coming from a CNIT trade fair, specify pick-up address. Professional invoice available for expenses. Corporate accounts with monthly billing for frequent travellers.",
      comparaisonTransport: "RER A (La Défense → Châtelet) + RER B (→ CDG) = 1h15, ~€12, 1 connection with stairs and luggage. Taxi at €60-80 is direct in 35 min. For 2 business travellers (€30-40/pp), best time-to-cost ratio. For 3 (€20-27/pp), unbeatable.",
      faq: [
        { question: "How much?", answer: "€60-80 sedan, €105 van (7 seats). Fixed fare, tolls and luggage included." },
        { question: "La Défense pick-up?", answer: "Yes, at your tower base, on the esplanade, or any Puteaux address." },
        { question: "How long?", answer: "35 min average, 45-55 min in rush hour." },
        { question: "Corporate invoice?", answer: "Yes, detailed professional invoice. Corporate accounts available." },
        { question: "Flight delay?", answer: "Real-time flight tracking. Free waiting up to 30 min after landing." }
      ],
    }
  ),
  // ═══════════════════════════════════════════════════════════
  // LA GARENNE-COLOMBES (29 000 hab.)
  // ═══════════════════════════════════════════════════════════
  hdsNERoute(
    "taxi-la-garenne-colombes-orly", "La Garenne-Colombes", "Aéroport d'Orly",
    48.9065, 2.2452, 48.7262, 2.3652,
    28, 30, "50 — 65 €", "aeroport",
    ["A86", "A6", "Transilien J/L", "La Défense", "Quartier résidentiel"],
    50, 65, 85, 45, "A86 + A6", "~3 €", "la-garenne-colombes", "aeroport-orly",
    ["taxi-la-garenne-colombes-cdg", "taxi-colombes-orly", "taxi-courbevoie-orly", "taxi-nanterre-orly"],
    ["aeroport", "orly", "la-garenne-colombes", "la-defense", "hauts-de-seine"],
    {
      metaTitle: "Taxi La Garenne-Colombes → Orly | 28 km, dès 50 € | TaxiNeo",
      metaDescription: "Transfert taxi La Garenne-Colombes vers Orly. 30 min par A86/A6. Proximité La Défense. Prix fixe 50-65 €.",
      heroTitle: "Taxi La Garenne-Colombes → Aéroport d'Orly",
      heroSubtitle: "Transfert La Garenne-Colombes → Orly au prix fixe de 50 — 65 €. 28 km, 30 min.",
      description: "L'aéroport d'Orly est à 30 min de La Garenne-Colombes via l'A86 et l'A6.",
      routeDescription: "Via l'A86 sud puis l'A6 direction Orly.",
      introduction: "La Garenne-Colombes, surnommée « la Garenne » par ses habitants, est une commune résidentielle prisée de 29 000 habitants nichée entre Courbevoie, Colombes et Nanterre, aux portes de La Défense. Cette « ville dans la ville » se distingue par son ambiance villageoise remarquable au cœur de la métropole parisienne : rues pavées du centre, marché animé (mercredi et samedi), petits commerces de bouche et restaurants de quartier créent une atmosphère conviviale unique. La gare de La Garenne-Colombes, desservie par les lignes Transilien J et L, relie Paris-Saint-Lazare en 12 minutes, ce qui en fait un lieu de résidence privilégié des cadres travaillant à La Défense ou dans les 8e et 9e arrondissements. La proximité immédiate de La Défense (à pied ou en bus en 10 minutes) renforce l'attractivité de cette commune familiale où les prix immobiliers restent plus accessibles qu'à Neuilly ou Levallois. Le transfert vers Orly nécessite un taxi car aucun transport en commun ne relie directement La Garenne à l'aéroport.",
      itineraire: "Votre chauffeur quitte La Garenne-Colombes par l'avenue de Verdun ou la rue de l'Aigle, rejoint l'A86 sud via Nanterre ou Courbevoie, puis emprunte l'A6 en direction d'Orly. Les péages (~3 €) sont inclus dans le tarif. Comptez 30 minutes en conditions fluides, 40 à 45 minutes aux heures de pointe. L'itinéraire alternatif via le Périphérique sud est possible si l'A86 est encombrée. La prise en charge se fait à votre adresse exacte, dans n'importe quel quartier de La Garenne.",
      conseils: "Le charme de La Garenne-Colombes réside dans son centre-ville piéton et ses commerces de proximité. Si vous partez tôt le matin, le quartier est calme et la circulation fluide avant 7h. Pour les vols Orly avant 9h, prévoyez un départ 1h30 avant le décollage. La Garenne est à 10 min à pied de La Défense — si vous y travaillez, un taxi depuis votre bureau est aussi simple. Précisez votre terminal Orly (1 à 4) lors de la réservation. Le retour depuis Orly est au même tarif fixe, votre chauffeur vous attend en zone d'arrivée.",
      comparaisonTransport: "Transilien J/L → Paris-Saint-Lazare (12 min) puis correspondances vers Orly = 1h15, ~14 €. Le taxi à 50-65 € est direct en 30 min. À 2 passagers (25-32 €/pers.), le taxi est compétitif et évite tout stress de correspondances avec les bagages.",
      faq: [
        { question: "Quel est le prix ?", answer: "50-65 € en berline, 85 € en van 7 places. Tarif fixe, péages et bagages inclus." },
        { question: "Combien de temps dure le trajet ?", answer: "30 min en moyenne, 40-45 min aux heures de pointe." },
        { question: "Prise en charge dans quel quartier ?", answer: "Partout à La Garenne-Colombes : centre, gare, quartiers résidentiels." },
        { question: "Y a-t-il des péages ?", answer: "~3 € de péages, inclus dans le tarif fixe." },
        { question: "Service de nuit ?", answer: "Oui, 24h/24. Idéal pour les vols très matinaux depuis Orly." }
      ],
    },
    {
      metaTitle: "Taxi La Garenne-Colombes → Orly | 28 km, from €50 | TaxiNeo",
      metaDescription: "Taxi La Garenne-Colombes to Orly. 30 min via A86/A6. Near La Défense, village charm. Fixed price €50-65.",
      heroTitle: "Taxi La Garenne-Colombes → Orly Airport",
      heroSubtitle: "Your La Garenne-Colombes → Orly transfer at €50 — €65. 28 km, 30 min.",
      description: "Orly Airport is 30 min from La Garenne-Colombes via the A86 and A6.",
      routeDescription: "Via the A86 south then A6 to Orly.",
      introduction: "La Garenne-Colombes, nicknamed 'la Garenne' by its residents, is a sought-after residential town of 29,000 nestled between Courbevoie, Colombes and Nanterre, at the gates of La Défense. This 'village within a city' stands out for its remarkable village atmosphere in the heart of the Paris metropolis: cobbled centre streets, lively market (Wednesday and Saturday), local food shops and neighbourhood restaurants create a uniquely convivial feel. La Garenne-Colombes station, served by Transilien J and L lines, reaches Paris-Saint-Lazare in 12 minutes, making it a prime residential choice for executives working at La Défense or in the 8th and 9th arrondissements. The immediate proximity to La Défense (on foot or by bus in 10 minutes) reinforces the appeal of this family-friendly town where property prices remain more accessible than Neuilly or Levallois. The Orly transfer requires a taxi as no public transport connects La Garenne directly to the airport.",
      itineraire: "Your driver leaves La Garenne-Colombes via avenue de Verdun or rue de l'Aigle, joins the A86 south through Nanterre or Courbevoie, then takes the A6 to Orly. Tolls (~€3) included. Allow 30 min off-peak, 40-45 min in rush hour. Alternative via the southern ring road if A86 is busy. Pick-up at your exact address, any La Garenne neighbourhood.",
      conseils: "La Garenne-Colombes's charm lies in its pedestrian centre and local shops. For early morning departures, the area is quiet with fluid traffic before 7am. For Orly flights before 9am, allow 1h30 before departure. La Garenne is 10 min walk from La Défense — taxi from your office equally easy. Specify Orly terminal (1-4). Return at the same fixed fare, driver waits in arrivals.",
      comparaisonTransport: "Transilien J/L → Saint-Lazare (12 min) then connections to Orly = 1h15, ~€14. Taxi at €50-65 is direct in 30 min. For 2 passengers (€25-32/pp), competitive and avoids all luggage-laden connection stress.",
      faq: [
        { question: "How much?", answer: "€50-65 sedan, €85 van (7 seats). Fixed fare, tolls and luggage included." },
        { question: "How long?", answer: "30 min average, 40-45 min in rush hour." },
        { question: "Pick-up area?", answer: "Anywhere in La Garenne-Colombes: centre, station, residential areas." },
        { question: "Tolls?", answer: "~€3 included in the fixed fare." },
        { question: "Night service?", answer: "Yes, 24/7. Ideal for very early Orly flights." }
      ],
    }
  ),
  hdsNERoute(
    "taxi-la-garenne-colombes-cdg", "La Garenne-Colombes", "Aéroport CDG",
    48.9065, 2.2452, 49.0097, 2.5479,
    32, 35, "50 — 70 €", "aeroport",
    ["A86", "A1", "CDG", "La Défense", "Transilien J/L"],
    50, 70, 90, 50, "A86 + A1", "~5 €", "la-garenne-colombes", "aeroport-cdg",
    ["taxi-la-garenne-colombes-orly", "taxi-colombes-cdg", "taxi-courbevoie-cdg", "taxi-nanterre-cdg"],
    ["aeroport", "cdg", "roissy", "la-garenne-colombes", "la-defense", "hauts-de-seine"],
    {
      metaTitle: "Taxi La Garenne-Colombes → CDG | 32 km, dès 50 € | TaxiNeo",
      metaDescription: "Transfert taxi La Garenne-Colombes vers CDG. 35 min par A86/A1. Village prisé, La Défense. Prix fixe 50-70 €.",
      heroTitle: "Taxi La Garenne-Colombes → Aéroport CDG",
      heroSubtitle: "Transfert La Garenne-Colombes → CDG au prix fixe de 50 — 70 €. 32 km, 35 min.",
      description: "L'aéroport CDG est à 35 min de La Garenne-Colombes via l'A86 et l'A1.",
      routeDescription: "Via l'A86 nord-est puis l'A1 direction Roissy.",
      introduction: "La Garenne-Colombes, petite commune résidentielle de 29 000 habitants, est un bijou de l'ouest parisien qui combine la proximité de La Défense avec une qualité de vie villageoise. Les cadres et familles qui y résident choisissent cette ville pour son centre-ville charmant, ses écoles réputées et sa connexion rapide à Paris-Saint-Lazare par le Transilien (12 minutes). Lorsque ces résidents voyagent en avion, CDG est le point de départ naturel des vols long-courriers. L'A86 offre un accès rapide en contournant Paris par le nord, et l'A1 mène directement à Roissy. En transports en commun, le trajet impose un Transilien jusqu'à Saint-Lazare, puis un métro ou RER vers Châtelet, puis le RER B vers CDG — un parcours d'1h20 avec 2 correspondances et des escaliers à franchir avec les valises. Le taxi élimine cette complexité en offrant un transfert porte-à-porte en 35 minutes, avec prise en charge devant votre domicile garennois et dépose au terminal exact de CDG.",
      itineraire: "Votre chauffeur quitte La Garenne-Colombes par Courbevoie ou Colombes, rejoint l'A86 nord en direction de Gennevilliers et Saint-Denis, puis emprunte l'A1 (autoroute du Nord) vers Roissy-CDG. Les terminaux sont accessibles directement depuis la sortie Roissy de l'A1. Péages ~5 € inclus dans le tarif fixe. Comptez 35 minutes en conditions fluides, 45 à 50 minutes aux heures de pointe. Le chauffeur adapte l'itinéraire en temps réel selon le trafic.",
      conseils: "La Garenne-Colombes est à 10 min de La Défense — si vous partez de votre bureau, le taxi vous prend en charge sur place. Pour les vols internationaux, prévoyez 3h à CDG. Partez de La Garenne au moins 2h avant votre vol en heures de pointe. Précisez votre terminal CDG (T1, T2A-G, T3). Le marché de La Garenne (mercredi, samedi) est l'un des plus agréables du secteur — idéal pour ramener des produits frais avant un voyage. Pour le retour, votre chauffeur suit votre vol et vous attend en zone d'arrivée.",
      comparaisonTransport: "Transilien + métro/RER + RER B = 1h20, ~14 €, 2 correspondances. Le taxi à 50-70 € est direct en 35 min. À 2 passagers (25-35 €/pers.), le taxi supprime tout stress logistique. À 3 passagers (17-23 €/pers.), prix comparable au transport en commun.",
      faq: [
        { question: "Quel est le prix ?", answer: "50-70 € en berline, 90 € en van 7 places. Tarif fixe, péages et bagages inclus." },
        { question: "Combien de temps faut-il ?", answer: "35 min en moyenne, 45-50 min aux heures de pointe." },
        { question: "Prise en charge devant mon domicile ?", answer: "Oui, à toute adresse de La Garenne-Colombes. Le chauffeur vous attend devant votre porte." },
        { question: "Mon chauffeur m'attend à CDG ?", answer: "Oui, suivi de vol en temps réel. Panneau nominatif en zone d'arrivée." },
        { question: "Compte entreprise ?", answer: "Oui, facturation mensuelle et réservations simplifiées pour les voyageurs réguliers." }
      ],
    },
    {
      metaTitle: "Taxi La Garenne-Colombes → CDG | 32 km, from €50 | TaxiNeo",
      metaDescription: "Taxi La Garenne-Colombes to CDG. 35 min via A86/A1. Charming village, near La Défense. Fixed price €50-70.",
      heroTitle: "Taxi La Garenne-Colombes → CDG Airport",
      heroSubtitle: "Your La Garenne-Colombes → CDG transfer at €50 — €70. 32 km, 35 min.",
      description: "CDG Airport is 35 min from La Garenne-Colombes via the A86 and A1.",
      routeDescription: "Via the A86 northeast then A1 to Roissy.",
      introduction: "La Garenne-Colombes, a small residential town of 29,000, is a western Paris gem combining La Défense proximity with village-like quality of life. The executives and families who live here choose this town for its charming centre, reputable schools and fast Transilien connection to Paris-Saint-Lazare (12 minutes). When these residents fly, CDG is the natural departure point for long-haul flights. The A86 provides fast access bypassing Paris to the north, and the A1 leads directly to Roissy. By public transport, the journey requires a Transilien to Saint-Lazare, then metro or RER to Châtelet, then RER B to CDG — a 1h20 journey with 2 connections and stairs to navigate with suitcases. The taxi eliminates this complexity with a 35-minute door-to-door transfer, picking you up at your La Garenne home and dropping you at your exact CDG terminal.",
      itineraire: "Your driver leaves La Garenne-Colombes via Courbevoie or Colombes, joins the A86 north towards Gennevilliers and Saint-Denis, then takes the A1 to Roissy-CDG. Terminals directly accessible from the A1 Roissy exit. Tolls ~€5 included. Allow 35 min off-peak, 45-50 min in rush hour. Real-time route adaptation based on traffic.",
      conseils: "La Garenne-Colombes is 10 min from La Défense — if leaving from your office, the taxi picks you up there. For international flights, allow 3h at CDG. Leave La Garenne at least 2h before your flight in rush hour. Specify CDG terminal (T1, T2A-G, T3). La Garenne market (Wednesday, Saturday) is one of the area's most pleasant — perfect for picking up fresh produce before a trip. For returns, driver tracks your flight and waits in arrivals.",
      comparaisonTransport: "Transilien + metro/RER + RER B = 1h20, ~€14, 2 connections. Taxi at €50-70 is direct in 35 min. For 2 passengers (€25-35/pp), taxi removes all logistics stress. For 3 (€17-23/pp), comparable to public transport cost.",
      faq: [
        { question: "How much?", answer: "€50-70 sedan, €90 van (7 seats). Fixed fare, tolls and luggage included." },
        { question: "How long?", answer: "35 min average, 45-50 min in rush hour." },
        { question: "Pick-up at my door?", answer: "Yes, at any La Garenne-Colombes address. Driver waits at your door." },
        { question: "Driver waiting at CDG?", answer: "Real-time flight tracking. Name board in arrivals." },
        { question: "Corporate account?", answer: "Yes, monthly billing and simplified bookings for regular travellers." }
      ],
    }
  ),
  // ═══════════════════════════════════════════════════════════
  // SURESNES (49 000 hab.)
  // ═══════════════════════════════════════════════════════════
  hdsNERoute(
    "taxi-suresnes-orly", "Suresnes", "Aéroport d'Orly",
    48.8713, 2.2293, 48.7262, 2.3652,
    22, 25, "45 — 60 €", "aeroport",
    ["A13", "A6", "Mont-Valérien", "Tramway T2", "Vignoble"],
    45, 60, 78, 40, "A13 + A6", "~3 €", "suresnes", "aeroport-orly",
    ["taxi-suresnes-cdg", "taxi-puteaux-orly", "taxi-la-defense-orly", "taxi-rueil-malmaison-orly"],
    ["aeroport", "orly", "suresnes", "mont-valerien", "hauts-de-seine"],
    {
      metaTitle: "Taxi Suresnes → Orly | 22 km, dès 45 € | TaxiNeo",
      metaDescription: "Transfert taxi Suresnes vers Orly. 25 min par A13/A6. Mont-Valérien, vignoble, tramway T2. Prix fixe 45-60 €.",
      heroTitle: "Taxi Suresnes → Aéroport d'Orly",
      heroSubtitle: "Transfert Suresnes → Orly au prix fixe de 45 — 60 €. 22 km, 25 min.",
      description: "L'aéroport d'Orly est à 25 min de Suresnes via l'A13 et l'A6.",
      routeDescription: "Via l'A13 direction Paris puis l'A6 vers Orly.",
      introduction: "Suresnes, commune de 49 000 habitants perchée sur les coteaux surplombant la Seine, est une ville au patrimoine exceptionnel et à l'identité forte. Le Mont-Valérien, qui culmine à 162 mètres, est le plus haut point de l'agglomération parisienne et abrite le Mémorial de la France combattante, haut lieu de la mémoire nationale où furent fusillés plus de 1 000 résistants et otages pendant l'Occupation allemande. Suresnes est aussi la seule commune d'Île-de-France à posséder un vignoble municipal en activité : le clos du Pas Saint-Maurice, dont la vendange annuelle (Fête des Vendanges de Suresnes, en octobre) attire des milliers de visiteurs. Le Musée d'Histoire urbaine de Suresnes retrace l'évolution de la ville, de la cité-jardins des années 1920 (classée patrimoine remarquable) aux projets contemporains. Le tramway T2 traverse la commune en longeant la Seine et relie La Défense au pont de Sèvres, mais pour Orly, les correspondances restent longues. Le cimetière américain de Suresnes, dédié aux soldats américains des deux guerres mondiales, est un lieu de recueillement visité par les diplomates et les familles.",
      itineraire: "Votre chauffeur quitte Suresnes par le boulevard Henri-Sellier ou la N13, rejoint l'A13 (autoroute de Normandie) direction Paris, emprunte le boulevard Périphérique sud par la Porte de Saint-Cloud, puis bifurque sur l'A6 vers Orly. Péages ~3 € inclus dans le tarif fixe. Comptez 25 minutes en conditions normales, 35 à 40 minutes aux heures de pointe. L'itinéraire alternatif via la N118 et le pont de Sèvres peut être utilisé en soirée pour éviter le Périphérique. Le chauffeur optimise le parcours en temps réel.",
      conseils: "Le Mont-Valérien se visite gratuitement sur réservation — un détour historique avant un vol tardif. Le vignoble de Suresnes est ouvert lors de la Fête des Vendanges (octobre). La cité-jardins de Suresnes, construite par Henri Sellier dans les années 1920, est un exemple unique d'urbanisme social inscrit au patrimoine. Le tramway T2 est pratique pour La Défense mais pas pour Orly. Pour les vols matinaux, partez avant 7h. Le cimetière américain est ouvert tous les jours sauf le 25 décembre. Pour le retour, votre chauffeur vous attend en zone d'arrivée à Orly.",
      comparaisonTransport: "Tramway T2 + métro + correspondances Orly = 1h15, ~14 €. Le taxi à 45-60 € est direct en 25 min. À 2 passagers (22-30 €/pers.), le taxi est compétitif. À 3 passagers (15-20 €/pers.), nettement plus avantageux que les transports.",
      faq: [
        { question: "Quel est le prix ?", answer: "45-60 € en berline, 78 € en van 7 places. Tarif fixe, péages et bagages inclus." },
        { question: "Combien de temps dure le trajet ?", answer: "25 min en moyenne, 35-40 min aux heures de pointe." },
        { question: "Prise en charge près du Mont-Valérien ?", answer: "Oui, à toute adresse de Suresnes, y compris les hauteurs du Mont-Valérien." },
        { question: "Y a-t-il des péages ?", answer: "~3 € de péages, inclus dans le tarif fixe." },
        { question: "Retour depuis Orly ?", answer: "Oui, même tarif fixe. Chauffeur en zone d'arrivée avec panneau nominatif." }
      ],
    },
    {
      metaTitle: "Taxi Suresnes → Orly Airport | 22 km, from €45 | TaxiNeo",
      metaDescription: "Taxi from Suresnes to Orly. 25 min via A13/A6. Mont-Valérien memorial, vineyard, T2 tram. Fixed price €45-60.",
      heroTitle: "Taxi Suresnes → Orly Airport",
      heroSubtitle: "Your Suresnes → Orly Airport transfer at €45 — €60. 22 km, 25 min.",
      description: "Orly Airport is 25 min from Suresnes via the A13 and A6.",
      routeDescription: "Via the A13 towards Paris then A6 to Orly.",
      introduction: "Suresnes, a town of 49,000 residents perched on hillsides overlooking the Seine, boasts exceptional heritage and a strong identity. Mont-Valérien, peaking at 162 metres, is the highest point in the Paris metropolitan area and houses the Fighting France Memorial, a key national remembrance site where over 1,000 resistance fighters and hostages were executed during the German Occupation. Suresnes is also the only Île-de-France municipality with an active municipal vineyard: the Clos du Pas Saint-Maurice, whose annual harvest (Suresnes Grape Harvest Festival, October) draws thousands of visitors. The Suresnes Urban History Museum traces the town's evolution from the 1920s garden city (classified remarkable heritage) to contemporary projects. The T2 tramway crosses the town along the Seine, connecting La Défense to Pont de Sèvres, but Orly connections remain long. The Suresnes American Cemetery, dedicated to American soldiers from both World Wars, is a place of remembrance visited by diplomats and families.",
      itineraire: "Your driver leaves Suresnes via boulevard Henri-Sellier or N13, joins the A13 towards Paris, takes the southern ring road from Porte de Saint-Cloud, then the A6 to Orly. Tolls ~€3 included. Allow 25 min off-peak, 35-40 min in rush hour. Alternative via N118 and Pont de Sèvres in the evening. Real-time route optimisation.",
      conseils: "Mont-Valérien is free to visit by reservation — a historic detour before a late flight. Suresnes vineyard opens during the Grape Harvest Festival (October). The Suresnes garden city, built by Henri Sellier in the 1920s, is a unique example of social urbanism. T2 tram serves La Défense but not Orly. For morning flights, leave before 7am. The American Cemetery is open daily except 25 December. For returns, driver waits in Orly arrivals.",
      comparaisonTransport: "T2 tram + metro + Orly connections = 1h15, ~€14. Taxi at €45-60 is direct in 25 min. For 2 passengers (€22-30/pp), competitive. For 3 (€15-20/pp), significantly cheaper than transport.",
      faq: [
        { question: "How much?", answer: "€45-60 sedan, €78 van (7 seats). Fixed fare, tolls and luggage included." },
        { question: "How long?", answer: "25 min average, 35-40 min in rush hour." },
        { question: "Pick-up near Mont-Valérien?", answer: "Yes, at any Suresnes address, including Mont-Valérien heights." },
        { question: "Tolls?", answer: "~€3 included in the fixed fare." },
        { question: "Return from Orly?", answer: "Yes, same fixed fare. Driver in arrivals with your name." }
      ],
    }
  ),
  hdsNERoute(
    "taxi-suresnes-cdg", "Suresnes", "Aéroport CDG",
    48.8713, 2.2293, 49.0097, 2.5479,
    38, 40, "60 — 80 €", "aeroport",
    ["A86", "A1", "Mont-Valérien", "CDG", "Vignoble", "Cimetière américain"],
    60, 80, 105, 60, "A86 + A1", "~6 €", "suresnes", "aeroport-cdg",
    ["taxi-suresnes-orly", "taxi-puteaux-cdg", "taxi-la-defense-cdg", "taxi-rueil-malmaison-cdg"],
    ["aeroport", "cdg", "roissy", "suresnes", "mont-valerien", "hauts-de-seine"],
    {
      metaTitle: "Taxi Suresnes → CDG | 38 km, dès 60 € | TaxiNeo",
      metaDescription: "Transfert taxi Suresnes vers CDG. 40 min par A86/A1. Mont-Valérien, vignoble, 49 000 hab. Prix fixe 60-80 €.",
      heroTitle: "Taxi Suresnes → Aéroport CDG",
      heroSubtitle: "Transfert Suresnes → CDG au prix fixe de 60 — 80 €. 38 km, 40 min.",
      description: "L'aéroport CDG est à 40 min de Suresnes via l'A86 et l'A1.",
      routeDescription: "Via l'A86 nord puis l'A1 direction Roissy.",
      introduction: "Le transfert Suresnes – Charles de Gaulle traverse toute la moitié nord de l'Île-de-France pour relier en 40 minutes cette ville de caractère à l'aéroport international de Roissy. Suresnes, forte de ses 49 000 habitants et de ses coteaux verdoyants, offre un cadre de vie privilégié dans l'ouest parisien. Le Mont-Valérien, point culminant de l'agglomération à 162 mètres, est un lieu de mémoire nationale majeur que visitent régulièrement les chefs d'État étrangers — le taxi depuis Suresnes est alors sollicité pour les transferts diplomatiques vers CDG. Le vignoble municipal de Suresnes, le clos du Pas Saint-Maurice, produit chaque année quelques milliers de bouteilles dans le cadre de la Fête des Vendanges, un événement qui attire des visiteurs internationaux. Le Musée d'Histoire urbaine documente la remarquable cité-jardins conçue par Henri Sellier dans les années 1920, modèle d'urbanisme social copié dans toute l'Europe. Le cimetière américain de Suresnes, au pied du Mont-Valérien, honore les soldats américains des deux guerres mondiales et accueille des cérémonies officielles auxquelles participent les ambassades. L'A86 permet de contourner Paris efficacement vers CDG.",
      itineraire: "Votre chauffeur quitte Suresnes par le boulevard du Maréchal de Lattre de Tassigny ou la route de la Révolte, rejoint l'A86 nord via Puteaux et La Défense, poursuit vers Gennevilliers et Saint-Denis, puis emprunte l'A1 vers Roissy-CDG. Péages ~6 € inclus dans le tarif fixe. Comptez 40 minutes en conditions fluides, 50 à 60 minutes aux heures de pointe. L'itinéraire alternatif via le Périphérique nord peut être utilisé si l'A86 est encombrée au niveau de La Défense. Votre chauffeur ajuste le parcours en temps réel pour le trajet le plus rapide.",
      conseils: "CDG est à 38 km de Suresnes, l'un des trajets les plus longs depuis les Hauts-de-Seine — prévoyez des marges confortables. Pour les vols long-courriers, partez 2h30 avant le décollage en heures de pointe. Précisez votre terminal CDG (T1, T2A-G, T3). Le T2E/F dessert les vols intercontinentaux Air France. Si vous habitez les hauteurs du Mont-Valérien, le chauffeur vous prend en charge à votre porte même dans les rues étroites. Le vignoble de Suresnes est un souvenir unique à ramener pour des amis à l'étranger. Le retour depuis CDG est au même tarif fixe, avec suivi de vol et attente gratuite.",
      comparaisonTransport: "T2 tramway → La Défense → RER A → Châtelet → RER B → CDG = 1h30, ~14 €, 3 correspondances. Le taxi à 60-80 € est direct en 40 min. À 2 passagers (30-40 €/pers.), le taxi offre un confort incomparable. À 3 passagers (20-27 €/pers.), le meilleur choix pour un vol international.",
      faq: [
        { question: "Quel est le prix ?", answer: "60-80 € en berline, 105 € en van 7 places. Tarif fixe, péages et bagages inclus." },
        { question: "Combien de temps faut-il ?", answer: "40 min en moyenne, 50-60 min aux heures de pointe." },
        { question: "Prise en charge sur les hauteurs ?", answer: "Oui, même dans les rues étroites du Mont-Valérien. Le chauffeur vient à votre porte." },
        { question: "Mon chauffeur m'attend à CDG ?", answer: "Oui, suivi de vol en temps réel, panneau nominatif en zone d'arrivée. Attente gratuite 30 min." },
        { question: "Véhicule premium disponible ?", answer: "Oui, berlines de luxe et vans haut de gamme sur demande." }
      ],
    },
    {
      metaTitle: "Taxi Suresnes → CDG Airport | 38 km, from €60 | TaxiNeo",
      metaDescription: "Taxi from Suresnes to CDG. 40 min via A86/A1. Mont-Valérien memorial, vineyard, 49,000 residents. Fixed price €60-80.",
      heroTitle: "Taxi Suresnes → CDG Airport",
      heroSubtitle: "Your Suresnes → CDG Airport transfer at €60 — €80. 38 km, 40 min.",
      description: "CDG Airport is 40 min from Suresnes via the A86 and A1.",
      routeDescription: "Via the A86 north then A1 to Roissy.",
      introduction: "The Suresnes to Charles de Gaulle transfer crosses northern Île-de-France to connect this characterful town to Roissy international airport in 40 minutes. Suresnes, with its 49,000 residents and verdant hillsides, offers a privileged living environment in western Paris. Mont-Valérien, the metropolitan area's highest point at 162 metres, is a major national remembrance site regularly visited by foreign heads of state — taxis from Suresnes are then called upon for diplomatic transfers to CDG. The municipal Suresnes vineyard, the Clos du Pas Saint-Maurice, produces a few thousand bottles annually during the Grape Harvest Festival, an event attracting international visitors. The Urban History Museum documents the remarkable garden city designed by Henri Sellier in the 1920s, a social urbanism model copied across Europe. The Suresnes American Cemetery, at the foot of Mont-Valérien, honours American soldiers from both World Wars and hosts official ceremonies with embassy participation. The A86 efficiently bypasses Paris towards CDG.",
      itineraire: "Your driver leaves Suresnes via boulevard du Maréchal de Lattre de Tassigny or route de la Révolte, joins the A86 north through Puteaux and La Défense, continues to Gennevilliers and Saint-Denis, then takes the A1 to Roissy-CDG. Tolls ~€6 included. Allow 40 min off-peak, 50-60 min in rush hour. Northern ring road alternative if A86 is congested near La Défense. Real-time route adjustment.",
      conseils: "CDG is 38 km from Suresnes, one of the longest Hauts-de-Seine routes — allow comfortable margins. For long-haul flights, leave 2.5h before departure in rush hour. Specify CDG terminal (T1, T2A-G, T3). T2E/F serves Air France intercontinental flights. If you live on Mont-Valérien heights, driver picks you up at your door even in narrow streets. Suresnes vineyard wine makes a unique souvenir for friends abroad. Return from CDG at the same fixed fare with flight tracking.",
      comparaisonTransport: "T2 tram → La Défense → RER A → Châtelet → RER B → CDG = 1h30, ~€14, 3 connections. Taxi at €60-80 is direct in 40 min. For 2 passengers (€30-40/pp), incomparable comfort. For 3 (€20-27/pp), best choice for an international flight.",
      faq: [
        { question: "How much?", answer: "€60-80 sedan, €105 van (7 seats). Fixed fare, tolls and luggage included." },
        { question: "How long?", answer: "40 min average, 50-60 min in rush hour." },
        { question: "Hillside pick-up?", answer: "Yes, even in Mont-Valérien's narrow streets. Driver comes to your door." },
        { question: "Driver at CDG?", answer: "Real-time flight tracking, name board in arrivals. Free 30 min wait." },
        { question: "Premium vehicle?", answer: "Yes, luxury sedans and premium vans on request." }
      ],
    }
  ),
];
