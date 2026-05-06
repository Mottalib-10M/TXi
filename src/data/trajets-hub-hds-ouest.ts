import type { Trajet } from "./trajets";

function hdsORoute(
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
    hub: "hds-ouest",
    i18n: { fr: frMeta, en: enMeta },
  };
}

export const trajetsHdsOuest: Trajet[] = [
  // ═══════════════════════════════════════════════════════════
  // SAINT-CLOUD (30 000 hab.)
  // ═══════════════════════════════════════════════════════════
  hdsORoute(
    "taxi-saint-cloud-orly", "Saint-Cloud", "Aéroport d'Orly",
    48.8450, 2.2088, 48.7262, 2.3652,
    20, 25, "40 — 55 €", "aeroport",
    ["N118", "A6", "Parc de Saint-Cloud", "Domaine national", "Hauts-de-Seine"],
    40, 55, 72, 40, "N118 / A6", "~2 €", "saint-cloud", "aeroport-orly",
    ["taxi-saint-cloud-cdg", "taxi-sevres-orly", "taxi-garches-orly", "taxi-boulogne-billancourt-orly", "taxi-meudon-orly"],
    ["aeroport", "transfert", "orly", "saint-cloud", "hauts-de-seine", "parc"],
    {
      metaTitle: "Taxi Saint-Cloud → Orly | 20 km, dès 40 € | TaxiNeo",
      metaDescription: "Taxi Saint-Cloud vers Orly via N118/A6 en 25 min. Domaine national, Hippodrome. Prix fixe 40-55 €, bagages inclus.",
      heroTitle: "Taxi Saint-Cloud → Orly",
      heroSubtitle: "Transfert Saint-Cloud → Aéroport d'Orly au prix fixe de 40 — 55 €. 20 km, direct par la N118.",
      description: "L'aéroport d'Orly est à 25 min de Saint-Cloud via la N118 et l'A6, liaison rapide depuis le Domaine national.",
      routeDescription: "L'itinéraire descend la N118 depuis le pont de Saint-Cloud puis rejoint l'A6 direction Orly.",
      introduction: "Saint-Cloud est une ville résidentielle prestigieuse de 30 000 habitants nichée sur les coteaux dominant la Seine, à l'ouest immédiat de Paris. La commune est mondialement connue pour son Domaine national, un parc de 460 hectares dessiné par André Le Nôtre au XVIIe siècle, classé monument historique et labellisé Jardin remarquable. Ce parc, qui accueillait autrefois le château de Saint-Cloud — résidence impériale détruite pendant la guerre de 1870 — offre des perspectives spectaculaires sur Paris et la tour Eiffel depuis la Grande Cascade, chef-d'œuvre hydraulique de 1665. L'Hippodrome de Saint-Cloud, inauguré en 1901, est l'un des plus prestigieux de France et accueille le Grand Prix de Saint-Cloud, épreuve du groupe I du galop plat. Le Musée des Avelines, installé dans un hôtel particulier du XIXe siècle, retrace l'histoire de la ville et du château disparu. Le tramway T2 relie Saint-Cloud à La Défense et à Issy-Val de Seine, mais pour rejoindre Orly, le taxi reste la solution la plus directe et la plus confortable, notamment pour les résidents du quartier Montretout ou du Val d'Or qui n'ont pas d'accès rapide aux transports en commun vers le sud.",
      itineraire: "Votre chauffeur quitte Saint-Cloud par le pont de Saint-Cloud ou la côte du Pavé des Gardes et descend immédiatement sur la N118 en direction de Vélizy-Villacoublay. Cette voie rapide à 2x2 voies longe les coteaux boisés de Meudon et de Chaville avant de rejoindre l'A6 (autoroute du Soleil) à hauteur de Vélizy. L'A6 mène directement à l'aéroport d'Orly par la bretelle dédiée. Les péages s'élèvent à environ 2 € sur ce tronçon (inclus dans le tarif). En conditions fluides, comptez 25 minutes de trajet. Aux heures de pointe (7h30-9h30 le matin, 17h-19h30 le soir), la N118 peut être ralentie à hauteur du pont de Sèvres et de l'échangeur de Vélizy — prévoyez alors 35 à 40 minutes. Votre chauffeur surveille le trafic en temps réel et peut emprunter un itinéraire alternatif par Issy-les-Moulineaux et le boulevard périphérique si la N118 est saturée.",
      conseils: "Partez au moins 1h30 avant votre vol pour les départs matinaux. La N118 est généralement fluide avant 7h et entre 10h et 16h. Précisez votre terminal Orly (1, 2, 3 ou 4) lors de la réservation pour que votre chauffeur vous dépose au plus près de votre comptoir d'enregistrement. Pour un retour depuis Orly, votre chauffeur vous attend en zone d'arrivée avec votre nom affiché, même en cas de retard de vol grâce au suivi en temps réel. Avant de partir, profitez d'une balade dans le Domaine national : l'entrée est gratuite et les jardins sont ouverts de 7h30 à la tombée de la nuit. Le parking longue durée d'Orly coûte 20 à 28 € par jour — un aller-retour en taxi (80-110 €) est plus économique dès 4 jours d'absence. Les familles apprécieront le van 7 places (72 €) pour voyager avec enfants, poussette et bagages en toute sérénité.",
      comparaisonTransport: "En transports en commun, il faut prendre le tramway T2 jusqu'au pont de Sèvres, puis le bus 183 ou le métro 9 jusqu'à Châtelet et enfin l'OrlyBus ou le tramway T7 — comptez 1h20 à 1h40 avec correspondances et marche. Le taxi à 40-55 € est direct en 25 min. À 2 passagers (20-28 €/pers.) ou 3 passagers (13-18 €/pers.), c'est un rapport qualité-prix imbattable pour le confort et le gain de temps.",
      faq: [
        { question: "Quel est le prix du taxi Saint-Cloud → Orly ?", answer: "40-55 € en berline, 72 € en van 7 places. Tarif fixe, péages (~2 €) et bagages inclus." },
        { question: "Combien de temps dure le trajet ?", answer: "25 min en conditions normales, 35-40 min aux heures de pointe (7h30-9h30, 17h-19h30)." },
        { question: "Le chauffeur m'attend-il à Orly ?", answer: "Oui, en zone d'arrivée avec votre nom affiché. Suivi de vol en temps réel, attente gratuite 30 min." },
        { question: "Prise en charge dans tout Saint-Cloud ?", answer: "Oui : centre-ville, Montretout, Val d'Or, Pasteur, Domaine national. Prise en charge devant votre porte." },
        { question: "Peut-on réserver pour un vol très tôt le matin ?", answer: "Oui, service dès 4h du matin, 7j/7. Réservez la veille pour garantir la disponibilité." }
      ],
    },
    {
      metaTitle: "Taxi Saint-Cloud → Orly | 20 km, from €40 | TaxiNeo",
      metaDescription: "Taxi Saint-Cloud to Orly via N118/A6 in 25 min. National Park, Racecourse. Fixed price €40-55, luggage included.",
      heroTitle: "Taxi Saint-Cloud → Orly",
      heroSubtitle: "Your Saint-Cloud → Orly Airport transfer at €40 — €55. 20 km, via the N118.",
      description: "Orly Airport is 25 min from Saint-Cloud via the N118 and A6, a fast connection from the National Park area.",
      routeDescription: "Via the N118 from the Saint-Cloud bridge then the A6 to Orly.",
      introduction: "Saint-Cloud is a prestigious residential town of 30,000 inhabitants perched on hillsides overlooking the Seine, directly west of Paris. The town is world-famous for its 460-hectare Domaine National, designed by André Le Nôtre in the 17th century and classified as a historic monument. This park once housed the Château de Saint-Cloud — an imperial residence destroyed during the Franco-Prussian War of 1870 — and still offers spectacular views of Paris and the Eiffel Tower from the Grande Cascade, a 1665 hydraulic masterpiece. The Saint-Cloud Racecourse, opened in 1901, hosts the prestigious Grand Prix de Saint-Cloud flat racing event. The Musée des Avelines chronicles the history of the town and its lost château. While the T2 tramway connects Saint-Cloud to La Défense, reaching Orly by public transport requires multiple changes — making the taxi the most direct and comfortable option, especially for residents of the Montretout or Val d'Or neighbourhoods.",
      itineraire: "Your driver leaves Saint-Cloud via the Saint-Cloud bridge or the Pavé des Gardes hill and immediately joins the N118 towards Vélizy-Villacoublay. This dual carriageway runs past the wooded hillsides of Meudon and Chaville before joining the A6 motorway. The A6 leads directly to Orly Airport. Tolls are approximately €2 (included). Allow 25 min, or 35-40 min in rush hour (7:30-9:30am, 5-7:30pm). Your driver monitors real-time traffic and may take an alternative route via Issy-les-Moulineaux and the Périphérique if the N118 is congested.",
      conseils: "Leave at least 1h30 before your flight for morning departures. The N118 is usually clear before 7am and between 10am-4pm. Specify your Orly terminal (1, 2, 3 or 4) when booking. For returns, your driver waits in arrivals with your name, even if your flight is delayed (real-time tracking). Orly long-stay parking costs €20-28/day — a taxi return trip (€80-110) is cheaper from 4 days. Families will appreciate the 7-seat van (€72) for travelling with children, pushchairs and luggage.",
      comparaisonTransport: "Public transport requires T2 tram to Pont de Sèvres, then bus 183 or metro and OrlyBus — 1h20-1h40 with changes. Taxi at €40-55 is direct in 25 min. For 2 passengers (€20-28 each) or 3 (€13-18 each), unbeatable value for comfort and time savings.",
      faq: [
        { question: "How much is a taxi Saint-Cloud to Orly?", answer: "€40-55 sedan, €72 van. Fixed fare, tolls (~€2) and luggage included." },
        { question: "How long does it take?", answer: "25 min normally, 35-40 min in rush hour (7:30-9:30am, 5-7:30pm)." },
        { question: "Does the driver wait at Orly?", answer: "Yes, in arrivals with your name. Real-time flight tracking, free 30-min wait." },
        { question: "Pickup anywhere in Saint-Cloud?", answer: "Yes: centre, Montretout, Val d'Or, Pasteur, National Park. Door-to-door pickup." },
        { question: "Early morning flights?", answer: "Yes, service from 4am, 7 days a week. Book the night before to guarantee availability." }
      ],
    }
  ),
  hdsORoute(
    "taxi-saint-cloud-cdg", "Saint-Cloud", "Aéroport CDG",
    48.8450, 2.2088, 49.0097, 2.5479,
    40, 40, "70 — 90 €", "aeroport",
    ["A86", "A1", "Parc de Saint-Cloud", "Roissy", "Hippodrome"],
    70, 90, 118, 60, "A86 / A1", "~6 €", "saint-cloud", "aeroport-cdg",
    ["taxi-saint-cloud-orly", "taxi-sevres-cdg", "taxi-garches-cdg", "taxi-boulogne-billancourt-cdg", "taxi-rueil-malmaison-cdg"],
    ["aeroport", "transfert", "cdg", "roissy", "saint-cloud", "hauts-de-seine"],
    {
      metaTitle: "Taxi Saint-Cloud → CDG | 40 km, dès 70 € | TaxiNeo",
      metaDescription: "Taxi Saint-Cloud vers Roissy CDG via A86/A1 en 40 min. Parc Le Nôtre, Hippodrome. Prix fixe 70-90 €, 24h/24.",
      heroTitle: "Taxi Saint-Cloud → CDG",
      heroSubtitle: "Transfert Saint-Cloud → Aéroport Charles de Gaulle au prix fixe de 70 — 90 €. 40 km, direct par l'A86.",
      description: "L'aéroport CDG est à 40 min de Saint-Cloud via l'A86 nord et l'A1, traversée directe de l'ouest parisien.",
      routeDescription: "L'itinéraire emprunte l'A86 nord puis l'A1 direction Roissy-Charles de Gaulle.",
      introduction: "Le transfert en taxi de Saint-Cloud vers l'aéroport Charles de Gaulle est un service essentiel pour les habitants de cette ville verdoyante des Hauts-de-Seine. Saint-Cloud, dont le nom évoque immédiatement son somptueux Domaine national de 460 hectares dessiné par Le Nôtre, est une commune où se côtoient cadres supérieurs, familles et diplomates attirés par la qualité de vie exceptionnelle à quelques minutes de Paris. La Grande Cascade, l'un des plus beaux ouvrages hydrauliques d'Europe, et les jardins à la française témoignent du faste de l'époque royale. L'Hippodrome de Saint-Cloud, temple du galop plat depuis 1901, accueille chaque année le Grand Prix de Saint-Cloud (groupe I), événement majeur du calendrier hippique français. Le quartier du Val d'Or, avec ses villas cossues, et le secteur Montretout, adossé au parc, abritent une population qui voyage fréquemment à l'international. CDG, premier aéroport français avec plus de 70 millions de passagers annuels, est relié à Saint-Cloud en 40 minutes par l'A86 et l'A1. Le taxi offre un service porte-à-porte sans le stress des correspondances RER, particulièrement appréciable avec des bagages ou en famille.",
      itineraire: "Au départ de Saint-Cloud, votre chauffeur rejoint l'A86 par le pont de Saint-Cloud ou la D907 et contourne Paris par l'ouest et le nord. L'A86 passe par le tunnel de la Défense (gratuit) ou contourne par Gennevilliers selon le trafic. À hauteur de Saint-Denis, le chauffeur bifurque sur l'A1 (autoroute du Nord) en direction de Roissy-CDG. L'accès aux terminaux est bien fléché : T1 (Star Alliance), T2A-G (Air France, SkyTeam) ou T3 (low cost). Les péages s'élèvent à environ 6 € (inclus dans le tarif fixe). Comptez 40 minutes en conditions de circulation fluides, mais 50 à 60 minutes en heures de pointe, notamment le matin entre 7h30 et 9h30 quand l'A86 est chargée à hauteur de Nanterre et de Gennevilliers. Votre chauffeur utilise le GPS et les informations trafic en temps réel pour choisir l'itinéraire le plus rapide.",
      conseils: "Pour les vols internationaux depuis CDG, prévoyez d'arriver 3 heures avant le décollage — partez donc de Saint-Cloud 2h à 2h30 avant votre vol si vous voyagez en heure de pointe. Les créneaux les plus fluides sont avant 7h le matin ou entre 10h et 15h30. Indiquez précisément votre terminal CDG lors de la réservation : le terminal 2 comporte sept sous-terminaux (2A à 2G) et une erreur peut coûter 20 minutes sur place. Pour le retour de CDG, votre chauffeur vous attend en zone d'arrivée avec un panneau à votre nom, même en cas de retard de vol grâce au suivi en temps réel. Le parking longue durée de CDG coûte 20 à 30 € par jour : un aller-retour en taxi (140-180 €) devient plus économique dès 5 jours d'absence. Le van 7 places (118 €) est recommandé pour les familles nombreuses ou les groupes avec beaucoup de bagages.",
      comparaisonTransport: "Depuis Saint-Cloud, il faut prendre le tramway T2 jusqu'à La Défense, puis le RER A jusqu'à Châtelet et enfin le RER B jusqu'à CDG — soit 1h30 à 1h50 avec trois correspondances et de nombreux escaliers avec bagages. Le taxi à 70-90 € est direct en 40 min sans aucune correspondance. À 2 passagers (35-45 €/pers.) ou 3 passagers (23-30 €/pers.), c'est très compétitif par rapport aux navettes partagées (32 €/pers.) qui font de multiples arrêts.",
      faq: [
        { question: "Quel est le prix du taxi Saint-Cloud → CDG ?", answer: "70-90 € en berline, 118 € en van 7 places. Tarif fixe, péages (~6 €) et bagages inclus." },
        { question: "Combien de temps faut-il pour aller à CDG ?", answer: "40 min en conditions normales, 50-60 min aux heures de pointe (7h30-9h30, 17h-19h30)." },
        { question: "Quel itinéraire est emprunté ?", answer: "A86 nord (tunnel de la Défense ou Gennevilliers) puis A1 vers Roissy. Le chauffeur choisit le plus rapide." },
        { question: "Le chauffeur m'attend en cas de retard de vol ?", answer: "Oui, suivi de vol en temps réel. Attente gratuite jusqu'à 30 min après l'atterrissage." },
        { question: "Van disponible ?", answer: "Oui, van 7 places à 118 €. Idéal pour familles ou groupes avec beaucoup de bagages." }
      ],
    },
    {
      metaTitle: "Taxi Saint-Cloud → CDG | 40 km, from €70 | TaxiNeo",
      metaDescription: "Taxi Saint-Cloud to CDG via A86/A1 in 40 min. Le Nôtre Park, Racecourse. Fixed price €70-90, 24/7.",
      heroTitle: "Taxi Saint-Cloud → CDG",
      heroSubtitle: "Your Saint-Cloud → CDG Airport transfer at €70 — €90. 40 km, via the A86.",
      description: "CDG Airport is 40 min from Saint-Cloud via the A86 north and A1, a direct route across western Paris.",
      routeDescription: "Via the A86 north then the A1 motorway to Roissy-Charles de Gaulle.",
      introduction: "The taxi transfer from Saint-Cloud to Charles de Gaulle Airport is an essential service for residents of this leafy Hauts-de-Seine town. Saint-Cloud's name immediately evokes its magnificent 460-hectare Domaine National designed by Le Nôtre, home to the Grande Cascade — one of Europe's finest hydraulic works — and formal French gardens recalling the royal era. The Saint-Cloud Racecourse has hosted the Grand Prix de Saint-Cloud (Group I flat racing) since 1901. The Val d'Or neighbourhood with its elegant villas and the Montretout area backing onto the park house a population that travels internationally frequently. CDG, France's largest airport with over 70 million annual passengers, is connected to Saint-Cloud in 40 minutes via the A86 and A1. The taxi offers seamless door-to-door service without the stress of RER connections — particularly valuable with luggage or when travelling as a family.",
      itineraire: "From Saint-Cloud, your driver joins the A86 via the Saint-Cloud bridge and circles Paris to the north. The A86 passes through the La Défense tunnel (free) or via Gennevilliers depending on traffic. At Saint-Denis, the driver takes the A1 motorway to Roissy-CDG. Terminals are clearly signposted: T1 (Star Alliance), T2A-G (Air France, SkyTeam) or T3 (low-cost). Tolls are approximately €6 (included). Allow 40 min, or 50-60 min in rush hour, especially mornings 7:30-9:30am when the A86 is busy near Nanterre and Gennevilliers.",
      conseils: "For international flights from CDG, arrive 3 hours before departure — leave Saint-Cloud 2-2.5h before your flight in rush hour. Smoothest times: before 7am or 10am-3:30pm. Specify your CDG terminal precisely (T2 has seven sub-terminals: 2A-2G). For returns, your driver waits in arrivals with your name, even if delayed (real-time tracking). CDG long-stay parking costs €20-30/day — taxi return trip (€140-180) is cheaper from 5 days. The 7-seat van (€118) suits large families or groups with heavy luggage.",
      comparaisonTransport: "From Saint-Cloud, public transport requires T2 tram to La Défense, RER A to Châtelet, then RER B to CDG — 1h30-1h50 with three changes. Taxi at €70-90 is direct in 40 min. For 2 passengers (€35-45 each) or 3 (€23-30 each), very competitive vs shared shuttles (€32/person with multiple stops).",
      faq: [
        { question: "How much is a taxi Saint-Cloud to CDG?", answer: "€70-90 sedan, €118 van. Fixed fare, tolls (~€6) and luggage included." },
        { question: "How long to CDG?", answer: "40 min normally, 50-60 min in rush hour (7:30-9:30am, 5-7:30pm)." },
        { question: "Which route?", answer: "A86 north (La Défense tunnel or Gennevilliers) then A1 to Roissy. Driver chooses the fastest." },
        { question: "Flight delay?", answer: "Real-time flight tracking. Free waiting up to 30 min after landing." },
        { question: "Van available?", answer: "Yes, 7-seat van at €118. Ideal for families or groups with heavy luggage." }
      ],
    }
  ),
  // ═══════════════════════════════════════════════════════════
  // GARCHES (18 000 hab.)
  // ═══════════════════════════════════════════════════════════
  hdsORoute(
    "taxi-garches-orly", "Garches", "Aéroport d'Orly",
    48.8454, 2.1856, 48.7262, 2.3652,
    22, 25, "45 — 60 €", "aeroport",
    ["N118", "A6", "Hôpital Raymond-Poincaré", "Forêt de la Malmaison", "Résidentiel"],
    45, 60, 78, 40, "N118 / A6", "~3 €", "garches", "aeroport-orly",
    ["taxi-garches-cdg", "taxi-saint-cloud-orly", "taxi-rueil-malmaison-orly", "taxi-ville-d-avray-orly", "taxi-meudon-orly"],
    ["aeroport", "transfert", "orly", "garches", "hauts-de-seine", "hopital"],
    {
      metaTitle: "Taxi Garches → Orly | 22 km, dès 45 € | TaxiNeo",
      metaDescription: "Taxi Garches vers Orly via N118/A6 en 25 min. Hôpital Poincaré, Forêt Malmaison. Prix fixe 45-60 €, 24h/24.",
      heroTitle: "Taxi Garches → Orly",
      heroSubtitle: "Transfert Garches → Aéroport d'Orly au prix fixe de 45 — 60 €. 22 km, direct par la N118.",
      description: "L'aéroport d'Orly est à 25 min de Garches via la N118 et l'A6, liaison directe depuis cette commune résidentielle.",
      routeDescription: "L'itinéraire emprunte la D907 puis la N118 et l'A6 direction Orly.",
      introduction: "Garches est une commune résidentielle de 18 000 habitants située sur le coteau dominant la vallée de la Seine, entre Saint-Cloud et Rueil-Malmaison. La ville est connue pour abriter l'Hôpital Raymond-Poincaré, établissement de l'AP-HP spécialisé dans la rééducation et le handicap moteur, centre de référence national qui accueille des patients venus de toute la France et de l'étranger. Le Pavillon de la Lanterne, résidence officielle du Premier ministre nichée dans un parc de 6 hectares, témoigne du prestige historique de la commune. Garches borde la forêt domaniale de la Malmaison (200 hectares), prolongement naturel du parc du château de Malmaison cher à Joséphine de Beauharnais. La commune offre un cadre de vie paisible et verdoyant, prisé des familles et des cadres travaillant à La Défense ou à Paris. Ses rues bordées de maisons de caractère et de pavillons lui confèrent une atmosphère presque villageoise à 15 minutes de la capitale. Le taxi vers Orly est particulièrement utilisé par les familles de patients de l'hôpital Poincaré, les résidents partant en voyage et les professionnels de santé du secteur hospitalier.",
      itineraire: "Votre chauffeur quitte Garches par la D907 en direction de Saint-Cloud, puis rejoint rapidement la N118 au niveau du pont de Saint-Cloud. La N118 descend en direction de Vélizy-Villacoublay en longeant les forêts de Fausses-Reposes et de Meudon. À hauteur de Vélizy, le chauffeur prend l'A6 (autoroute du Soleil) et suit les panneaux vers l'aéroport d'Orly. Les péages s'élèvent à environ 3 € sur ce parcours (inclus dans le tarif). En conditions normales, le trajet dure 25 minutes. Aux heures de pointe (7h30-9h30, 17h-19h30), la N118 connaît des ralentissements fréquents entre le pont de Sèvres et l'échangeur de Vélizy — prévoyez alors 35 à 40 minutes. En cas de forte congestion, votre chauffeur peut emprunter un itinéraire alternatif par les rues de Chaville puis Clamart pour rejoindre l'A86 sud.",
      conseils: "Pour les vols matinaux depuis Orly, partez de Garches au moins 1h30 avant le décollage. La N118 est fluide avant 7h le matin. Pensez à préciser votre terminal Orly (1, 2, 3 ou 4) lors de la réservation. Si vous êtes accompagnant d'un patient à l'hôpital Poincaré, notre service est disponible pour les allers-retours réguliers entre l'hôpital et l'aéroport. Pour le retour depuis Orly, le chauffeur vous attend en zone d'arrivée avec votre nom affiché. Le van 7 places à 78 € est idéal si vous voyagez en famille avec des bagages volumineux. Le parking d'Orly coûte 20 à 28 € par jour : au-delà de 3 jours d'absence, le taxi aller-retour est souvent plus économique. Profitez d'une promenade en forêt de la Malmaison avant votre départ — ses sentiers balisés offrent un cadre bucolique à deux pas de la ville.",
      comparaisonTransport: "En transports en commun depuis Garches, il faut prendre le bus 360 jusqu'à la gare de Saint-Cloud, puis le tramway T2 ou le train L jusqu'à Paris et enfin l'OrlyBus ou le tramway T7 — comptez 1h30 à 1h50 avec les correspondances. Le taxi à 45-60 € est direct en 25 min. À 2 passagers (23-30 €/pers.), le rapport qualité-prix est excellent. Pour les accompagnants de l'hôpital Poincaré, le taxi est souvent la seule option pratique avec des bagages médicaux.",
      faq: [
        { question: "Quel est le prix du taxi Garches → Orly ?", answer: "45-60 € en berline, 78 € en van. Tarif fixe, péages (~3 €) et bagages inclus." },
        { question: "Combien de temps dure le trajet ?", answer: "25 min en moyenne, 35-40 min aux heures de pointe." },
        { question: "Prise en charge à l'hôpital Poincaré ?", answer: "Oui, prise en charge devant l'entrée principale ou à votre domicile à Garches. Service adapté aux accompagnants." },
        { question: "Y a-t-il des péages ?", answer: "Environ 3 € de péages (inclus dans le tarif fixe)." },
        { question: "Service la nuit ?", answer: "Oui, 24h/24 et 7j/7. Réservez la veille pour les départs très matinaux." }
      ],
    },
    {
      metaTitle: "Taxi Garches → Orly | 22 km, from €45 | TaxiNeo",
      metaDescription: "Taxi Garches to Orly via N118/A6 in 25 min. Poincaré Hospital, Malmaison Forest. Fixed price €45-60, 24/7.",
      heroTitle: "Taxi Garches → Orly",
      heroSubtitle: "Your Garches → Orly Airport transfer at €45 — €60. 22 km, via the N118.",
      description: "Orly Airport is 25 min from Garches via the N118 and A6, a direct connection from this residential commune.",
      routeDescription: "Via the D907 then N118 and A6 to Orly.",
      introduction: "Garches is a residential commune of 18,000 inhabitants set on the hillside overlooking the Seine valley, between Saint-Cloud and Rueil-Malmaison. The town is known for the Raymond-Poincaré Hospital, an AP-HP facility specialising in rehabilitation and motor disability, a national reference centre welcoming patients from across France and abroad. The Pavillon de la Lanterne, the Prime Minister's official country residence set in 6 hectares of parkland, attests to the commune's historic prestige. Garches borders the 200-hectare Forêt de la Malmaison, a natural extension of Malmaison château's grounds beloved by Joséphine de Beauharnais. The town offers a peaceful, green living environment prized by families and executives working in La Défense or Paris. The taxi to Orly is particularly used by families of Poincaré Hospital patients, residents heading on holiday, and healthcare professionals.",
      itineraire: "Your driver leaves Garches via the D907 towards Saint-Cloud, then quickly joins the N118 at the Saint-Cloud bridge. The N118 descends towards Vélizy past the forests of Fausses-Reposes and Meudon. At Vélizy, the driver takes the A6 to Orly. Tolls are approximately €3 (included). Allow 25 min, or 35-40 min in rush hour (7:30-9:30am, 5-7:30pm). In heavy traffic, an alternative via Chaville and Clamart to the A86 south is available.",
      conseils: "For morning flights, leave Garches at least 1h30 before departure. N118 is clear before 7am. Specify your Orly terminal (1-4). For Poincaré Hospital visitors, regular airport runs are available. For returns, driver waits in arrivals with your name. The 7-seat van (€78) suits families with bulky luggage. Orly parking costs €20-28/day — taxi return trip is cheaper from 3 days. Enjoy a walk in Malmaison Forest before departure — its marked trails offer bucolic scenery minutes from town.",
      comparaisonTransport: "Public transport from Garches requires bus 360 to Saint-Cloud station, then T2 tram or train to Paris, then OrlyBus — 1h30-1h50. Taxi at €45-60 is direct in 25 min. For 2 passengers (€23-30 each), excellent value. For hospital visitors, taxi is often the only practical option with medical luggage.",
      faq: [
        { question: "How much is a taxi Garches to Orly?", answer: "€45-60 sedan, €78 van. Fixed fare, tolls (~€3) and luggage included." },
        { question: "How long?", answer: "25 min average, 35-40 min in rush hour." },
        { question: "Pickup at Poincaré Hospital?", answer: "Yes, at the main entrance or your Garches address. Service adapted for hospital visitors." },
        { question: "Tolls?", answer: "About €3 (included in the fixed fare)." },
        { question: "Night service?", answer: "Yes, 24/7. Book the night before for very early departures." }
      ],
    }
  ),
  hdsORoute(
    "taxi-garches-cdg", "Garches", "Aéroport CDG",
    48.8454, 2.1856, 49.0097, 2.5479,
    42, 45, "75 — 95 €", "aeroport",
    ["A86", "A1", "Hôpital Raymond-Poincaré", "Roissy", "Forêt Malmaison"],
    75, 95, 125, 65, "A86 / A1", "~6 €", "garches", "aeroport-cdg",
    ["taxi-garches-orly", "taxi-saint-cloud-cdg", "taxi-rueil-malmaison-cdg", "taxi-ville-d-avray-cdg", "taxi-meudon-cdg"],
    ["aeroport", "transfert", "cdg", "roissy", "garches", "hauts-de-seine"],
    {
      metaTitle: "Taxi Garches → CDG | 42 km, dès 75 € | TaxiNeo",
      metaDescription: "Taxi Garches vers Roissy CDG via A86/A1 en 45 min. Hôpital Poincaré, Lanterne. Prix fixe 75-95 €, 24h/24.",
      heroTitle: "Taxi Garches → CDG",
      heroSubtitle: "Transfert Garches → Aéroport Charles de Gaulle au prix fixe de 75 — 95 €. 42 km, direct par l'A86.",
      description: "L'aéroport CDG est à 45 min de Garches via l'A86 nord et l'A1, liaison directe vers Roissy.",
      routeDescription: "L'itinéraire emprunte l'A86 nord puis l'A1 direction Roissy-CDG.",
      introduction: "Le transfert en taxi de Garches vers l'aéroport Charles de Gaulle répond aux besoins d'une commune résidentielle haut de gamme nichée entre forêts et coteaux des Hauts-de-Seine. Garches, avec ses 18 000 habitants, est une ville à taille humaine où la qualité de vie prime. L'Hôpital Raymond-Poincaré, centre d'excellence de l'AP-HP en médecine physique et de réadaptation, génère un flux important de visiteurs et de professionnels de santé qui doivent rejoindre CDG pour des congrès médicaux internationaux ou des rapatriements sanitaires. Le Pavillon de la Lanterne, résidence secondaire officielle du Premier ministre de la République française, est un ancien pavillon de chasse du XVIIIe siècle entouré de jardins somptueux. La forêt domaniale de la Malmaison, vestige du domaine où Joséphine cultivait sa passion pour la botanique, borde la commune au nord. Les rues calmes de Garches, bordées de propriétés arborées, contrastent avec l'effervescence de CDG, premier aéroport français desservant plus de 300 destinations mondiales. Le taxi supprime les trois correspondances nécessaires en transport en commun et offre un trajet direct en 45 minutes.",
      itineraire: "Depuis Garches, votre chauffeur emprunte la D907 vers le nord pour rejoindre l'A86 à hauteur de Rueil-Malmaison ou de La Défense. L'A86 contourne Paris par l'ouest et le nord, passant par le tunnel de la Défense ou par Gennevilliers selon les conditions de circulation. Le chauffeur bifurque ensuite sur l'A1 (autoroute du Nord) direction Roissy-CDG. Les péages s'élèvent à environ 6 € sur ce parcours (inclus dans le tarif fixe). En conditions normales, le trajet dure 45 minutes. Aux heures de pointe (7h30-9h30, 17h-19h30), l'A86 peut être très chargée entre Nanterre et Gennevilliers, portant la durée à 55-65 minutes. L'itinéraire alternatif via le Périphérique nord (par le pont de Saint-Cloud) est parfois plus rapide le week-end. Votre chauffeur optimise en temps réel.",
      conseils: "Pour les vols long-courriers au départ de CDG, prévoyez 3 heures avant le décollage — quittez Garches 2h15 à 2h30 avant votre vol. Les créneaux les plus fluides sur l'A86 sont avant 7h ou entre 10h et 15h30. Précisez votre terminal CDG (T1, T2A-G ou T3) lors de la réservation : le terminal 2 comprend sept sous-terminaux et une erreur peut vous faire perdre 20 minutes. Pour les retours de CDG, votre chauffeur suit votre vol en temps réel et vous attend en zone d'arrivée avec un panneau nominatif, attente gratuite jusqu'à 30 minutes après l'atterrissage. Le van 7 places (125 €) est idéal pour les groupes de médecins se rendant à un congrès ou les familles nombreuses. Le parking longue durée de CDG (20-30 €/jour) rend le taxi aller-retour (150-190 €) plus économique dès 5 jours.",
      comparaisonTransport: "Depuis Garches, les transports en commun imposent le bus 360 puis le train L ou le T2 vers La Défense, le RER A vers Châtelet-Les Halles et enfin le RER B vers CDG — comptez 1h40 à 2h avec trois correspondances. Le taxi à 75-95 € est direct en 45 min. À 2 passagers (38-48 €/pers.) ou 3 passagers (25-32 €/pers.), le taxi est plus avantageux que les navettes partagées avec détours multiples.",
      faq: [
        { question: "Quel est le prix du taxi Garches → CDG ?", answer: "75-95 € en berline, 125 € en van. Tarif fixe, péages (~6 €) et bagages inclus." },
        { question: "Combien de temps dure le trajet ?", answer: "45 min en conditions normales, 55-65 min en heures de pointe." },
        { question: "Depuis l'hôpital Poincaré ?", answer: "Oui, prise en charge devant l'hôpital ou à votre domicile à Garches. Idéal pour congrès médicaux." },
        { question: "Le chauffeur m'attend en cas de retard ?", answer: "Oui, suivi de vol en temps réel. Attente gratuite 30 min après l'atterrissage." },
        { question: "Van pour un groupe ?", answer: "Oui, van 7 places à 125 €. Parfait pour familles nombreuses ou groupes professionnels." }
      ],
    },
    {
      metaTitle: "Taxi Garches → CDG | 42 km, from €75 | TaxiNeo",
      metaDescription: "Taxi Garches to CDG via A86/A1 in 45 min. Poincaré Hospital, PM Residence. Fixed price €75-95, 24/7.",
      heroTitle: "Taxi Garches → CDG",
      heroSubtitle: "Your Garches → CDG Airport transfer at €75 — €95. 42 km, via the A86.",
      description: "CDG Airport is 45 min from Garches via the A86 north and A1, a direct route to Roissy.",
      routeDescription: "Via the A86 north then the A1 to Roissy-CDG.",
      introduction: "The taxi transfer from Garches to Charles de Gaulle Airport serves a premium residential commune nestled between forests and hillsides in the Hauts-de-Seine department. Garches, with 18,000 inhabitants, is a human-scale town where quality of life comes first. The Raymond-Poincaré Hospital, an AP-HP centre of excellence in physical medicine and rehabilitation, generates significant traffic from visitors and healthcare professionals heading to CDG for international medical conferences or medical repatriation flights. The Pavillon de la Lanterne, the Prime Minister's official secondary residence, is an 18th-century hunting lodge surrounded by magnificent gardens. The Forêt de la Malmaison, remnant of the estate where Joséphine de Beauharnais pursued her passion for botany, borders the town to the north. The quiet streets of Garches, lined with tree-shaded properties, contrast with the bustle of CDG, France's largest airport serving over 300 worldwide destinations. The taxi eliminates the three connections required by public transport and provides a direct 45-minute journey.",
      itineraire: "From Garches, your driver takes the D907 north to join the A86 near Rueil-Malmaison or La Défense. The A86 circles Paris to the west and north, via the La Défense tunnel or Gennevilliers. Then the A1 motorway to Roissy-CDG. Tolls approximately €6 (included). Allow 45 min, or 55-65 min in rush hour (7:30-9:30am, 5-7:30pm). The alternative via the northern Périphérique (through Saint-Cloud bridge) can be faster on weekends. Real-time optimisation by your driver.",
      conseils: "For long-haul flights from CDG, arrive 3h before departure — leave Garches 2h15-2h30 ahead. Smoothest A86 times: before 7am or 10am-3:30pm. Specify your CDG terminal (T1, T2A-G, T3). For returns, driver tracks your flight in real time and waits in arrivals with your name — free wait up to 30 min after landing. 7-seat van (€125) ideal for medical conference groups or large families. CDG parking at €20-30/day makes taxi return (€150-190) cheaper from 5 days.",
      comparaisonTransport: "Public transport from Garches: bus 360 then train L or T2 to La Défense, RER A to Châtelet, RER B to CDG — 1h40-2h with three changes. Taxi at €75-95 direct in 45 min. For 2 passengers (€38-48 each) or 3 (€25-32 each), better value than shared shuttles with multiple detours.",
      faq: [
        { question: "How much is a taxi Garches to CDG?", answer: "€75-95 sedan, €125 van. Fixed fare, tolls (~€6) and luggage included." },
        { question: "How long?", answer: "45 min normally, 55-65 min in rush hour." },
        { question: "From Poincaré Hospital?", answer: "Yes, pickup at the hospital or your Garches address. Ideal for medical conferences." },
        { question: "Flight delay?", answer: "Real-time tracking. Free wait 30 min after landing." },
        { question: "Van for a group?", answer: "Yes, 7-seat van at €125. Perfect for large families or professional groups." }
      ],
    }
  ),
  // ═══════════════════════════════════════════════════════════
  // CHAVILLE (20 000 hab.)
  // ═══════════════════════════════════════════════════════════
  hdsORoute(
    "taxi-chaville-orly", "Chaville", "Aéroport d'Orly",
    48.8063, 2.1890, 48.7262, 2.3652,
    18, 20, "35 — 50 €", "aeroport",
    ["N118", "A6", "Forêt de Fausses-Reposes", "Forêt de Meudon", "Étang d'Ursine"],
    35, 50, 65, 35, "N118 / A6", "~2 €", "chaville", "aeroport-orly",
    ["taxi-chaville-cdg", "taxi-sevres-orly", "taxi-meudon-orly", "taxi-ville-d-avray-orly", "taxi-boulogne-billancourt-orly"],
    ["aeroport", "transfert", "orly", "chaville", "hauts-de-seine", "foret"],
    {
      metaTitle: "Taxi Chaville → Orly | 18 km, dès 35 € | TaxiNeo",
      metaDescription: "Taxi Chaville vers Orly via N118/A6 en 20 min. Forêt Fausses-Reposes, étang d'Ursine. Prix fixe 35-50 €, 24h/24.",
      heroTitle: "Taxi Chaville → Orly",
      heroSubtitle: "Transfert Chaville → Aéroport d'Orly au prix fixe de 35 — 50 €. 18 km, direct par la N118.",
      description: "L'aéroport d'Orly est à 20 min de Chaville via la N118 et l'A6, connexion rapide depuis cette ville forestière.",
      routeDescription: "L'itinéraire descend la N118 à travers les forêts domaniales puis rejoint l'A6 direction Orly.",
      introduction: "Chaville est une commune de 20 000 habitants lovée entre deux des plus belles forêts d'Île-de-France : la forêt de Fausses-Reposes (600 hectares) au nord et la forêt domaniale de Meudon au sud. Cette position unique fait de Chaville l'une des villes les plus vertes des Hauts-de-Seine, un véritable poumon vert aux portes de Paris. L'Étang d'Ursine, miroir d'eau niché au cœur de la forêt de Fausses-Reposes, est un lieu de promenade prisé des familles et des joggeurs. La gare de Chaville — Vélizy, desservie par le Transilien N (ligne Montparnasse), relie la ville à Paris en 20 minutes, mais ne permet pas de rejoindre Orly facilement. La commune accueille des institutions de recherche de premier plan, et sa proximité avec le plateau de Vélizy-Villacoublay, pôle technologique majeur (Dassault Aviation, Thales, iRobot), attire une population d'ingénieurs et de chercheurs. Le taxi vers Orly est le moyen le plus simple et le plus rapide pour les Chavillois de rejoindre l'aéroport, en seulement 20 minutes par la N118 qui traverse les forêts environnantes — un trajet aussi agréable qu'efficace.",
      itineraire: "Votre chauffeur quitte Chaville en direction de la N118, accessible en quelques minutes par la D910 ou la rue de Jouy. La N118 traverse les forêts de Fausses-Reposes et de Meudon dans un cadre boisé remarquable, offrant une descente fluide vers Vélizy-Villacoublay. À l'échangeur de Vélizy, le chauffeur rejoint l'A6 (autoroute du Soleil) direction Orly. La bretelle d'accès à l'aéroport est bien signalée. Les péages sont d'environ 2 € (inclus dans le tarif). En conditions normales, le trajet ne prend que 20 minutes grâce à la proximité de Chaville avec la N118. Aux heures de pointe, la N118 peut être ralentie à l'échangeur de Vélizy — comptez alors 30 à 35 minutes. Chaville bénéficie d'un accès particulièrement direct à la N118, ce qui en fait l'une des communes les mieux connectées à Orly dans l'ouest parisien.",
      conseils: "L'avantage de Chaville est sa proximité immédiate avec la N118 : vous êtes sur la voie rapide en moins de 5 minutes. Pour les vols matinaux, un départ 1h15 avant le décollage suffit généralement — la N118 est très fluide avant 7h. Précisez votre terminal Orly lors de la réservation. L'Étang d'Ursine mérite un détour avant votre voyage : ce plan d'eau au milieu des chênes et des charmes est accessible à pied depuis le centre de Chaville (15 minutes). La forêt de Fausses-Reposes offre des sentiers balisés pour la randonnée et le VTT. Pour le retour depuis Orly, votre chauffeur vous attend en zone d'arrivée. Le van 7 places (65 €) convient aux familles ou aux groupes. Le parking d'Orly (20-28 €/jour) rend le taxi aller-retour (70-100 €) plus économique dès 3 jours.",
      comparaisonTransport: "Le Transilien N depuis Chaville-Vélizy met 20 min pour rejoindre Montparnasse, mais il faut ensuite l'OrlyBus (30 min, 11 €) ou le métro + tramway T7 — comptez 1h10 à 1h30 au total. Le taxi à 35-50 € est direct en 20 min. À 2 passagers (18-25 €/pers.), c'est imbattable en confort et en rapidité, surtout avec des bagages.",
      faq: [
        { question: "Quel est le prix du taxi Chaville → Orly ?", answer: "35-50 € en berline, 65 € en van. Tarif fixe, péages (~2 €) et bagages inclus." },
        { question: "Combien de temps dure le trajet ?", answer: "20 min en conditions normales, 30-35 min en heures de pointe." },
        { question: "Depuis quel quartier de Chaville ?", answer: "Prise en charge partout : centre, gare Chaville-Vélizy, gare Chaville Rive Droite, Étang d'Ursine, quartier forestier." },
        { question: "Le trajet traverse-t-il la forêt ?", answer: "Oui, la N118 longe les forêts de Fausses-Reposes et de Meudon — un parcours agréable et boisé." },
        { question: "Service tôt le matin ?", answer: "Oui, dès 4h du matin, 7j/7. Réservez la veille." }
      ],
    },
    {
      metaTitle: "Taxi Chaville → Orly | 18 km, from €35 | TaxiNeo",
      metaDescription: "Taxi Chaville to Orly via N118/A6 in 20 min. Fausses-Reposes Forest, Ursine Pond. Fixed price €35-50, 24/7.",
      heroTitle: "Taxi Chaville → Orly",
      heroSubtitle: "Your Chaville → Orly Airport transfer at €35 — €50. 18 km, via the N118.",
      description: "Orly Airport is 20 min from Chaville via the N118 and A6, a fast link from this forest-surrounded town.",
      routeDescription: "Via the N118 through the forests then the A6 to Orly.",
      introduction: "Chaville is a commune of 20,000 inhabitants nestled between two of Île-de-France's finest forests: the Forêt de Fausses-Reposes (600 hectares) to the north and the Forêt de Meudon to the south. This unique position makes Chaville one of the greenest towns in the Hauts-de-Seine department, a true green lung on the doorstep of Paris. The Étang d'Ursine, a scenic pond set in the heart of the Forêt de Fausses-Reposes, is a favourite walking spot for families and joggers. The Transilien N station (Chaville-Vélizy) connects to Paris Montparnasse in 20 minutes but does not provide easy access to Orly. The town's proximity to the Vélizy-Villacoublay technology hub (Dassault Aviation, Thales) attracts engineers and researchers. The taxi to Orly is the simplest and fastest way for Chaville residents to reach the airport — just 20 minutes via the N118 cutting through the surrounding forests, a journey that is as pleasant as it is efficient.",
      itineraire: "Your driver leaves Chaville for the N118, accessible in minutes via the D910 or Rue de Jouy. The N118 passes through the forests of Fausses-Reposes and Meudon in a remarkable wooded setting, descending smoothly to Vélizy-Villacoublay. At the Vélizy interchange, the A6 leads directly to Orly. Tolls approximately €2 (included). Allow 20 min, or 30-35 min in rush hour. Chaville's direct N118 access makes it one of the best-connected communes to Orly in western Paris.",
      conseils: "Chaville's advantage is immediate N118 access — you're on the expressway within 5 minutes. For morning flights, 1h15 before departure usually suffices — N118 is very clear before 7am. Specify your Orly terminal. Étang d'Ursine is worth a visit before your trip: this pond among oaks and hornbeams is a 15-min walk from the centre. For returns, driver waits in arrivals. 7-seat van (€65) for families. Orly parking (€20-28/day) makes taxi return (€70-100) cheaper from 3 days.",
      comparaisonTransport: "Transilien N from Chaville-Vélizy to Montparnasse in 20 min, then OrlyBus (30 min, €11) or metro + T7 — 1h10-1h30 total. Taxi at €35-50 direct in 20 min. For 2 passengers (€18-25 each), unbeatable comfort and speed, especially with luggage.",
      faq: [
        { question: "How much is a taxi Chaville to Orly?", answer: "€35-50 sedan, €65 van. Fixed fare, tolls (~€2) and luggage included." },
        { question: "How long?", answer: "20 min normally, 30-35 min in rush hour." },
        { question: "Pickup areas in Chaville?", answer: "Anywhere: centre, Chaville-Vélizy station, Chaville Rive Droite, Ursine Pond, forest area." },
        { question: "Does the route go through the forest?", answer: "Yes, the N118 passes along the Fausses-Reposes and Meudon forests — a pleasant wooded route." },
        { question: "Early morning service?", answer: "Yes, from 4am, 7 days a week. Book the night before." }
      ],
    }
  ),
  hdsORoute(
    "taxi-chaville-cdg", "Chaville", "Aéroport CDG",
    48.8063, 2.1890, 49.0097, 2.5479,
    42, 45, "70 — 95 €", "aeroport",
    ["A86", "A1", "Forêt de Fausses-Reposes", "Roissy", "Étang d'Ursine"],
    70, 95, 125, 65, "A86 / A1", "~6 €", "chaville", "aeroport-cdg",
    ["taxi-chaville-orly", "taxi-sevres-cdg", "taxi-meudon-cdg", "taxi-ville-d-avray-cdg", "taxi-boulogne-billancourt-cdg"],
    ["aeroport", "transfert", "cdg", "roissy", "chaville", "hauts-de-seine"],
    {
      metaTitle: "Taxi Chaville → CDG | 42 km, dès 70 € | TaxiNeo",
      metaDescription: "Taxi Chaville vers Roissy CDG via A86/A1 en 45 min. Forêts domaniales, Ursine. Prix fixe 70-95 €, 24h/24.",
      heroTitle: "Taxi Chaville → CDG",
      heroSubtitle: "Transfert Chaville → Aéroport Charles de Gaulle au prix fixe de 70 — 95 €. 42 km, direct par l'A86.",
      description: "L'aéroport CDG est à 45 min de Chaville via l'A86 nord et l'A1, transfert direct depuis la ville des forêts.",
      routeDescription: "L'itinéraire emprunte l'A86 nord puis l'A1 direction Roissy-CDG.",
      introduction: "Chaville, lovée entre la forêt de Fausses-Reposes et la forêt de Meudon, est l'une des communes les plus boisées d'Île-de-France. Ses 20 000 habitants profitent d'un cadre de vie exceptionnel, à mi-chemin entre la tranquillité forestière et l'effervescence parisienne. La ville est desservie par deux gares — Chaville-Vélizy (Transilien N) et Chaville Rive Droite (Transilien L) — mais aucune ne permet de rallier CDG sans multiplier les correspondances. L'Étang d'Ursine, perle naturelle nichée sous la canopée de chênes centenaires, symbolise la qualité environnementale de la commune. Le plateau de Vélizy, tout proche, concentre des géants de l'aéronautique et de la défense (Dassault Aviation, Thales) dont les collaborateurs voyagent régulièrement via CDG. La proximité de Chaville avec les axes autoroutiers A86 et N118 facilite le transfert vers Roissy. Le taxi est plébiscité par les ingénieurs du plateau de Vélizy, les familles des quartiers résidentiels et les promeneurs de retour d'un séjour qui souhaitent éviter les trois correspondances RER imposées par les transports en commun. En 45 minutes, votre chauffeur vous conduit de votre porte à votre terminal CDG, bagages pris en charge.",
      itineraire: "Depuis Chaville, votre chauffeur gagne l'A86 par la D910 (avenue Roger Salengro) ou par Sèvres et le pont de Sèvres. L'A86 contourne Paris par l'ouest, passant par Rueil-Malmaison et le tunnel de la Défense, puis par le nord via Gennevilliers et Saint-Denis. Le chauffeur bifurque ensuite sur l'A1 direction Roissy-CDG. Les péages s'élèvent à environ 6 € (inclus dans le tarif fixe). En conditions fluides, le trajet dure 45 minutes. Aux heures de pointe, l'A86 peut être saturée entre Nanterre et Gennevilliers — comptez alors 55 à 65 minutes. L'itinéraire alternatif via le boulevard périphérique (en passant par le pont de Saint-Cloud) est parfois privilégié le week-end ou en période creuse. Votre chauffeur optimise le parcours en temps réel grâce au GPS et aux informations trafic.",
      conseils: "Pour les vols internationaux depuis CDG, quittez Chaville au minimum 2h15 avant votre vol en heure de pointe, 1h45 en période fluide. Les créneaux les plus dégagés sur l'A86 sont avant 7h le matin et entre 10h et 15h30 l'après-midi. Pensez à indiquer votre terminal CDG (T1, T2A-G ou T3) lors de la réservation. Le terminal 2 comprend sept sous-terminaux : une erreur peut coûter 20 minutes de marche sur place. Pour le retour de CDG, votre chauffeur vous attend en zone d'arrivée avec votre nom, même en cas de retard grâce au suivi de vol en temps réel (attente gratuite 30 minutes). Le van 7 places (125 €) est parfait pour les équipes d'ingénieurs de Vélizy ou les familles avec enfants. Le parking longue durée CDG (20-30 €/jour) rend le taxi aller-retour (140-190 €) plus économique dès 5 jours d'absence.",
      comparaisonTransport: "En transports en commun depuis Chaville : Transilien N ou L vers Paris, métro vers Gare du Nord ou Châtelet, puis RER B vers CDG — minimum 1h40, souvent 2h avec les correspondances et l'attente. Le taxi à 70-95 € est direct en 45 min. À 2 passagers (35-48 €/pers.) ou 3 passagers (23-32 €/pers.), nettement plus confortable et compétitif que les navettes partagées.",
      faq: [
        { question: "Quel est le prix du taxi Chaville → CDG ?", answer: "70-95 € en berline, 125 € en van. Tarif fixe, péages (~6 €) et bagages inclus." },
        { question: "Combien de temps pour aller à CDG ?", answer: "45 min en conditions normales, 55-65 min en heures de pointe." },
        { question: "Quel itinéraire est emprunté ?", answer: "A86 nord via La Défense ou Gennevilliers, puis A1 vers Roissy. Optimisation trafic en temps réel." },
        { question: "Chauffeur en cas de retard de vol ?", answer: "Suivi en temps réel. Attente gratuite 30 min après l'atterrissage. Panneau nominatif en zone d'arrivée." },
        { question: "Van pour un groupe de collègues ?", answer: "Oui, van 7 places à 125 €. Idéal pour les équipes professionnelles de Vélizy." }
      ],
    },
    {
      metaTitle: "Taxi Chaville → CDG | 42 km, from €70 | TaxiNeo",
      metaDescription: "Taxi Chaville to CDG via A86/A1 in 45 min. Forests of Fausses-Reposes, Meudon. Fixed price €70-95, 24/7.",
      heroTitle: "Taxi Chaville → CDG",
      heroSubtitle: "Your Chaville → CDG Airport transfer at €70 — €95. 42 km, via the A86.",
      description: "CDG Airport is 45 min from Chaville via the A86 north and A1, a direct transfer from the town of forests.",
      routeDescription: "Via the A86 north then the A1 to Roissy-CDG.",
      introduction: "Chaville, nestled between the Forêt de Fausses-Reposes and the Forêt de Meudon, is one of Île-de-France's most wooded communes. Its 20,000 residents enjoy an exceptional living environment, halfway between forest tranquillity and Parisian vibrancy. The town has two stations — Chaville-Vélizy (Transilien N) and Chaville Rive Droite (Transilien L) — but neither allows reaching CDG without multiple changes. The Étang d'Ursine, a natural gem beneath centuries-old oak canopy, epitomises the commune's environmental quality. The nearby Vélizy plateau hosts aerospace and defence giants (Dassault Aviation, Thales) whose employees travel regularly through CDG. Chaville's proximity to the A86 and N118 motorways facilitates the transfer to Roissy. The taxi is favoured by Vélizy plateau engineers, residential neighbourhood families and returning travellers who want to avoid the three RER changes imposed by public transport. In 45 minutes, your driver takes you from your door to your CDG terminal, luggage handled.",
      itineraire: "From Chaville, your driver reaches the A86 via the D910 or via Sèvres and the Pont de Sèvres. The A86 circles Paris west through Rueil-Malmaison and the La Défense tunnel, then north via Gennevilliers and Saint-Denis. Then the A1 to Roissy-CDG. Tolls approximately €6 (included). Allow 45 min, or 55-65 min in rush hour. The Périphérique route (via Saint-Cloud bridge) can be faster on weekends. Real-time GPS optimisation by your driver.",
      conseils: "For international CDG flights, leave Chaville at least 2h15 before your flight in rush hour, 1h45 off-peak. Smoothest A86 times: before 7am or 10am-3:30pm. Specify CDG terminal (T1, T2A-G, T3). For returns, driver waits with your name — free 30-min wait even if delayed. 7-seat van (€125) perfect for Vélizy engineering teams or families. CDG parking (€20-30/day) makes taxi return (€140-190) cheaper from 5 days.",
      comparaisonTransport: "Public transport from Chaville: Transilien to Paris, metro to Gare du Nord or Châtelet, RER B to CDG — minimum 1h40, often 2h. Taxi at €70-95 direct in 45 min. For 2 passengers (€35-48 each) or 3 (€23-32 each), significantly more comfortable and competitive than shared shuttles.",
      faq: [
        { question: "How much is a taxi Chaville to CDG?", answer: "€70-95 sedan, €125 van. Fixed fare, tolls (~€6) and luggage included." },
        { question: "How long to CDG?", answer: "45 min normally, 55-65 min in rush hour." },
        { question: "Which route?", answer: "A86 north via La Défense or Gennevilliers, then A1 to Roissy. Real-time traffic optimisation." },
        { question: "Flight delay?", answer: "Real-time tracking. Free 30-min wait after landing. Name board in arrivals." },
        { question: "Van for colleagues?", answer: "Yes, 7-seat van at €125. Ideal for Vélizy professional teams." }
      ],
    }
  ),
  // ═══════════════════════════════════════════════════════════
  // SÈVRES (24 000 hab.)
  // ═══════════════════════════════════════════════════════════
  hdsORoute(
    "taxi-sevres-orly", "Sèvres", "Aéroport d'Orly",
    48.8250, 2.2070, 48.7262, 2.3652,
    18, 20, "35 — 50 €", "aeroport",
    ["N118", "A6", "Manufacture de Sèvres", "Pont de Sèvres", "Porcelaine"],
    35, 50, 65, 35, "N118 / A6", "~2 €", "sevres", "aeroport-orly",
    ["taxi-sevres-cdg", "taxi-chaville-orly", "taxi-meudon-orly", "taxi-saint-cloud-orly", "taxi-boulogne-billancourt-orly"],
    ["aeroport", "transfert", "orly", "sevres", "hauts-de-seine", "porcelaine", "manufacture"],
    {
      metaTitle: "Taxi Sèvres → Orly | 18 km, dès 35 € | TaxiNeo",
      metaDescription: "Taxi Sèvres vers Orly via N118/A6 en 20 min. Manufacture de porcelaine, Pont de Sèvres. Prix fixe 35-50 €.",
      heroTitle: "Taxi Sèvres → Orly",
      heroSubtitle: "Transfert Sèvres → Aéroport d'Orly au prix fixe de 35 — 50 €. 18 km, direct par la N118.",
      description: "L'aéroport d'Orly est à 20 min de Sèvres via la N118 et l'A6, connexion rapide depuis la cité de la porcelaine.",
      routeDescription: "L'itinéraire emprunte la N118 depuis le pont de Sèvres puis l'A6 direction Orly.",
      introduction: "Sèvres est une commune de 24 000 habitants dont le nom résonne dans le monde entier grâce à sa célèbre Manufacture nationale de porcelaine, fondée en 1740 et toujours en activité. Installée au bord de la Seine, la Manufacture de Sèvres est l'une des dernières manufactures d'État au monde, produisant des pièces d'exception pour les palais de la République et les chefs d'État étrangers. Le Musée national de Céramique, attenant à la Manufacture, conserve une collection exceptionnelle de 50 000 pièces retraçant l'histoire de la céramique mondiale. Le pont de Sèvres, carrefour stratégique de l'ouest parisien, est un nœud de transport majeur desservi par le métro 9, le tramway T2 et de nombreuses lignes de bus. L'Île Seguin, partagée entre Sèvres et Boulogne-Billancourt, accueille la Seine Musicale, salle de concert iconique conçue par Shigeru Ban. Le Tramway T2, qui traverse Sèvres du nord au sud, relie Pont de Sèvres à La Défense et à Issy-Val de Seine, mais ne dessert pas Orly. Le taxi depuis Sèvres vers Orly est la solution la plus directe, empruntant la N118 depuis le pont de Sèvres, une des entrées les plus rapides de la voie express vers le sud.",
      itineraire: "Votre chauffeur quitte Sèvres par le pont de Sèvres ou la Grande Rue pour rejoindre immédiatement la N118, voie rapide à 2x2 voies qui descend vers le sud en longeant les coteaux de Meudon. La N118 rejoint l'A6 à hauteur de Vélizy-Villacoublay, puis une bretelle dédiée mène directement à l'aéroport d'Orly. L'accès est rapide et bien signalisé. Les péages s'élèvent à environ 2 € (inclus dans le tarif). En conditions normales, le trajet dure 20 minutes seulement — Sèvres bénéficie d'un accès quasi immédiat à la N118 grâce au pont de Sèvres. Aux heures de pointe, l'échangeur du pont de Sèvres peut être congestionné — comptez alors 30 à 35 minutes. Votre chauffeur surveille le trafic en temps réel et peut emprunter un itinéraire alternatif par Clamart et l'A86 sud en cas de saturation.",
      conseils: "Le pont de Sèvres est à la fois un atout (accès direct N118) et un point de vigilance (embouteillages aux heures de pointe). Partez avant 7h ou après 9h30 pour un trajet optimal. Avant votre voyage, ne manquez pas de visiter la Manufacture de Sèvres et le Musée de la Céramique (7 €, gratuit le premier dimanche du mois) : les ateliers de décor, de tournage et d'émaillage sont fascinants. Précisez votre terminal Orly (1, 2, 3 ou 4) à la réservation. Pour le retour d'Orly, votre chauffeur vous attend en zone d'arrivée. Le parking d'Orly coûte 20 à 28 € par jour — le taxi aller-retour (70-100 €) est plus économique dès 3 jours. Le van 7 places (65 €) est idéal pour les familles. Si vous arrivez de la Seine Musicale sur l'Île Seguin, votre chauffeur peut vous récupérer directement sur le parvis.",
      comparaisonTransport: "Le métro 9 (terminus Pont de Sèvres) permet de rejoindre Châtelet en 35 min, puis l'OrlyBus (30 min, 11 €) — soit 1h10 à 1h30 au total avec correspondances. Le taxi à 35-50 € est direct en 20 min. À 2 passagers (18-25 €/pers.), le taxi offre un rapport qualité-prix imbattable, surtout le soir ou le week-end quand le métro est moins fréquent.",
      faq: [
        { question: "Quel est le prix du taxi Sèvres → Orly ?", answer: "35-50 € en berline, 65 € en van. Tarif fixe, péages (~2 €) et bagages inclus." },
        { question: "Combien de temps dure le trajet ?", answer: "20 min en conditions normales, 30-35 min en heures de pointe." },
        { question: "Prise en charge à la Manufacture de Sèvres ?", answer: "Oui, devant la Manufacture, au pont de Sèvres ou à votre domicile. Service dans tout Sèvres." },
        { question: "Y a-t-il des péages ?", answer: "Environ 2 € de péages, inclus dans le tarif fixe." },
        { question: "Prise en charge à la Seine Musicale ?", answer: "Oui, prise en charge possible sur le parvis de la Seine Musicale (Île Seguin, côté Sèvres)." }
      ],
    },
    {
      metaTitle: "Taxi Sèvres → Orly | 18 km, from €35 | TaxiNeo",
      metaDescription: "Taxi Sèvres to Orly via N118/A6 in 20 min. Porcelain Manufacture, Pont de Sèvres. Fixed price €35-50.",
      heroTitle: "Taxi Sèvres → Orly",
      heroSubtitle: "Your Sèvres → Orly Airport transfer at €35 — €50. 18 km, via the N118.",
      description: "Orly Airport is 20 min from Sèvres via the N118 and A6, a fast connection from the porcelain city.",
      routeDescription: "Via the N118 from the Pont de Sèvres then the A6 to Orly.",
      introduction: "Sèvres is a commune of 24,000 inhabitants whose name resonates worldwide thanks to its famous National Porcelain Manufacture, founded in 1740 and still operating today. Located on the banks of the Seine, the Manufacture de Sèvres is one of the world's last state-owned porcelain factories, producing exceptional pieces for the palaces of the French Republic and foreign heads of state. The adjacent Musée national de Céramique houses an outstanding collection of 50,000 pieces spanning the history of world ceramics. The Pont de Sèvres, a strategic junction in western Paris, is a major transport hub served by metro line 9, tramway T2 and numerous bus routes. Île Seguin, shared between Sèvres and Boulogne-Billancourt, hosts the Seine Musicale concert hall designed by Shigeru Ban. The T2 tramway connects Sèvres to La Défense but does not serve Orly. The taxi from Sèvres to Orly is the most direct solution, using the N118 from Pont de Sèvres — one of the fastest entries onto the expressway heading south.",
      itineraire: "Your driver leaves Sèvres via the Pont de Sèvres or Grande Rue to join the N118 immediately — a dual carriageway heading south past the Meudon hillsides. The N118 meets the A6 at Vélizy-Villacoublay, then a dedicated exit leads to Orly. Tolls approximately €2 (included). Only 20 min in normal conditions — Sèvres has near-immediate N118 access via the Pont de Sèvres. In rush hour, the bridge interchange can be busy — allow 30-35 min. Your driver monitors traffic and can reroute via Clamart and the A86 south if needed.",
      conseils: "Pont de Sèvres gives direct N118 access but can be congested in rush hour. Leave before 7am or after 9:30am for optimal travel. Visit the Manufacture de Sèvres and Ceramics Museum (€7, free 1st Sunday) before your trip — the decoration, turning and glazing workshops are fascinating. Specify your Orly terminal. For returns, driver waits in arrivals. Orly parking (€20-28/day) makes taxi return (€70-100) cheaper from 3 days. 7-seat van (€65) for families. Pickup from Seine Musicale forecourt available.",
      comparaisonTransport: "Metro 9 (Pont de Sèvres terminus) to Châtelet in 35 min, then OrlyBus (30 min, €11) — 1h10-1h30 total. Taxi at €35-50 direct in 20 min. For 2 passengers (€18-25 each), unbeatable value, especially evenings or weekends when metro runs less frequently.",
      faq: [
        { question: "How much is a taxi Sèvres to Orly?", answer: "€35-50 sedan, €65 van. Fixed fare, tolls (~€2) and luggage included." },
        { question: "How long?", answer: "20 min normally, 30-35 min in rush hour." },
        { question: "Pickup at the Manufacture?", answer: "Yes, at the Manufacture, Pont de Sèvres, or your home. Service throughout Sèvres." },
        { question: "Tolls?", answer: "About €2, included in the fixed fare." },
        { question: "Pickup at Seine Musicale?", answer: "Yes, pickup from the Seine Musicale forecourt (Île Seguin, Sèvres side)." }
      ],
    }
  ),
  hdsORoute(
    "taxi-sevres-cdg", "Sèvres", "Aéroport CDG",
    48.8250, 2.2070, 49.0097, 2.5479,
    40, 40, "70 — 90 €", "aeroport",
    ["A86", "A1", "Manufacture de Sèvres", "Roissy", "Porcelaine"],
    70, 90, 118, 60, "A86 / A1", "~6 €", "sevres", "aeroport-cdg",
    ["taxi-sevres-orly", "taxi-chaville-cdg", "taxi-meudon-cdg", "taxi-saint-cloud-cdg", "taxi-boulogne-billancourt-cdg"],
    ["aeroport", "transfert", "cdg", "roissy", "sevres", "hauts-de-seine", "porcelaine"],
    {
      metaTitle: "Taxi Sèvres → CDG | 40 km, dès 70 € | TaxiNeo",
      metaDescription: "Taxi Sèvres vers Roissy CDG via A86/A1 en 40 min. Manufacture porcelaine, Musée Céramique. Prix fixe 70-90 €.",
      heroTitle: "Taxi Sèvres → CDG",
      heroSubtitle: "Transfert Sèvres → Aéroport Charles de Gaulle au prix fixe de 70 — 90 €. 40 km, direct par l'A86.",
      description: "L'aéroport CDG est à 40 min de Sèvres via l'A86 nord et l'A1, transfert direct depuis la cité de la porcelaine.",
      routeDescription: "L'itinéraire emprunte l'A86 nord ou le Périphérique puis l'A1 direction Roissy.",
      introduction: "Le transfert en taxi de Sèvres vers l'aéroport Charles de Gaulle relie la célèbre cité de la porcelaine au premier aéroport de France. Sèvres, 24 000 habitants au bord de la Seine, est indissociable de sa Manufacture nationale, fondée en 1740 sous l'impulsion de Madame de Pompadour et toujours en activité après presque trois siècles. Les artisans de Sèvres perpétuent un savoir-faire unique : chaque pièce nécessite en moyenne 60 opérations manuelles et plusieurs mois de travail. Le bleu de Sèvres, teinte iconique créée au XVIIIe siècle, est reconnu dans le monde entier. Le Musée national de Céramique, avec ses 50 000 pièces allant de l'Antiquité à la création contemporaine, est un lieu incontournable pour les amateurs d'art décoratif. Le pont de Sèvres, terminus du métro 9, est un carrefour névralgique de l'ouest parisien. La commune partage avec Boulogne-Billancourt l'Île Seguin et la Seine Musicale. Le taxi vers CDG est particulièrement prisé des artisans et négociants en art qui transportent des pièces fragiles, des touristes internationaux visitant la Manufacture, et des résidents sévrien partant en voyage depuis Roissy. Le trajet direct en 40 minutes évite les trois correspondances nécessaires en transport en commun.",
      itineraire: "Depuis Sèvres, votre chauffeur rejoint l'A86 par le pont de Sèvres ou par la D910 vers Saint-Cloud. L'A86 contourne Paris par l'ouest (tunnel de la Défense, gratuit) puis par le nord (Gennevilliers, Saint-Denis) avant de rejoindre l'A1 (autoroute du Nord) direction Roissy-CDG. Les péages s'élèvent à environ 6 € (inclus dans le tarif fixe). L'itinéraire alternatif emprunte le boulevard Périphérique nord depuis la Porte de Saint-Cloud. Votre chauffeur choisit en temps réel le parcours le plus rapide. En conditions fluides, comptez 40 minutes. En heures de pointe (7h30-9h30, 17h-19h30), prévoyez 50 à 60 minutes, la congestion se concentrant sur l'A86 entre Nanterre et Gennevilliers.",
      conseils: "Pour les vols long-courriers depuis CDG, partez de Sèvres au minimum 2h avant votre vol en période fluide, 2h30 en heure de pointe. Les créneaux idéaux sont avant 7h ou entre 10h et 15h30. Précisez votre terminal CDG : T1 (Star Alliance), T2A-G (Air France et alliés) ou T3 (low cost). Si vous transportez des objets fragiles (porcelaine, œuvres d'art), signalez-le lors de la réservation — nos chauffeurs disposent de couvertures de protection et adaptent leur conduite. Pour le retour de CDG, votre chauffeur vous attend en zone d'arrivée avec un panneau nominatif, attente gratuite 30 min après l'atterrissage. Le van 7 places (118 €) offre un espace cargo généreux pour les bagages volumineux. Le parking longue durée de CDG (20-30 €/jour) rend le taxi aller-retour (140-180 €) plus avantageux dès 5 jours.",
      comparaisonTransport: "Le métro 9 depuis Pont de Sèvres rejoint Châtelet en 35 min, puis le RER B vers CDG en 40 min — mais avec une correspondance dans les couloirs bondés de Châtelet, comptez 1h30 à 1h50 au total. Le taxi à 70-90 € est direct en 40 min. À 2 passagers (35-45 €/pers.) ou 3 passagers (23-30 €/pers.), c'est plus compétitif que les navettes partagées (32 €/pers. avec détours).",
      faq: [
        { question: "Quel est le prix du taxi Sèvres → CDG ?", answer: "70-90 € en berline, 118 € en van. Tarif fixe, péages (~6 €) et bagages inclus." },
        { question: "Combien de temps pour rejoindre CDG ?", answer: "40 min en conditions normales, 50-60 min aux heures de pointe." },
        { question: "Transport d'objets fragiles ?", answer: "Oui, signalez-le à la réservation. Couvertures de protection disponibles, conduite adaptée." },
        { question: "Le chauffeur m'attend en cas de retard ?", answer: "Oui, suivi de vol en temps réel. Attente gratuite 30 min après l'atterrissage." },
        { question: "Prise en charge sur l'Île Seguin ?", answer: "Oui, prise en charge possible à la Seine Musicale ou au parvis de l'Île Seguin." }
      ],
    },
    {
      metaTitle: "Taxi Sèvres → CDG | 40 km, from €70 | TaxiNeo",
      metaDescription: "Taxi Sèvres to CDG via A86/A1 in 40 min. Porcelain Manufacture, Ceramics Museum. Fixed price €70-90.",
      heroTitle: "Taxi Sèvres → CDG",
      heroSubtitle: "Your Sèvres → CDG Airport transfer at €70 — €90. 40 km, via the A86.",
      description: "CDG Airport is 40 min from Sèvres via the A86 north and A1, a direct transfer from the porcelain city.",
      routeDescription: "Via the A86 north or Périphérique then the A1 to Roissy.",
      introduction: "The taxi transfer from Sèvres to Charles de Gaulle Airport connects France's famous porcelain city to its largest airport. Sèvres, with 24,000 inhabitants on the banks of the Seine, is inseparable from its National Manufacture, founded in 1740 under the patronage of Madame de Pompadour and still active after nearly three centuries. Sèvres artisans perpetuate a unique craft: each piece requires an average of 60 manual operations and months of work. Bleu de Sèvres, the iconic shade created in the 18th century, is recognised worldwide. The Musée national de Céramique holds 50,000 pieces from antiquity to contemporary creation. The Pont de Sèvres, metro 9 terminus, is a key junction in western Paris. The commune shares Île Seguin and the Seine Musicale with Boulogne-Billancourt. The taxi to CDG is especially valued by artisans and art dealers transporting fragile pieces, international tourists visiting the Manufacture, and Sèvres residents departing from Roissy. The 40-minute direct journey avoids three public transport connections.",
      itineraire: "From Sèvres, your driver joins the A86 via the Pont de Sèvres or D910 towards Saint-Cloud. The A86 circles Paris west (La Défense tunnel, free) then north (Gennevilliers, Saint-Denis) to the A1 motorway towards Roissy-CDG. Tolls approximately €6 (included). Alternative via the northern Périphérique from Porte de Saint-Cloud. Real-time route choice by your driver. Allow 40 min, or 50-60 min in rush hour (7:30-9:30am, 5-7:30pm).",
      conseils: "For long-haul CDG flights, leave Sèvres at least 2h before off-peak, 2h30 in rush hour. Best times: before 7am or 10am-3:30pm. Specify your CDG terminal: T1 (Star Alliance), T2A-G (Air France) or T3 (low-cost). If transporting fragile items (porcelain, art), mention it when booking — drivers have protective blankets and adapt their driving. For returns, driver waits in arrivals with your name — free 30-min wait. 7-seat van (€118) for generous cargo space. CDG parking (€20-30/day) makes taxi return (€140-180) better value from 5 days.",
      comparaisonTransport: "Metro 9 from Pont de Sèvres to Châtelet in 35 min, then RER B to CDG in 40 min — but with a crowded Châtelet connection, 1h30-1h50 total. Taxi at €70-90 direct in 40 min. For 2 passengers (€35-45 each) or 3 (€23-30 each), more competitive than shared shuttles (€32/person with detours).",
      faq: [
        { question: "How much is a taxi Sèvres to CDG?", answer: "€70-90 sedan, €118 van. Fixed fare, tolls (~€6) and luggage included." },
        { question: "How long to CDG?", answer: "40 min normally, 50-60 min in rush hour." },
        { question: "Fragile items?", answer: "Yes, mention at booking. Protective blankets available, adapted driving." },
        { question: "Flight delay?", answer: "Real-time tracking. Free 30-min wait after landing." },
        { question: "Pickup at Île Seguin?", answer: "Yes, pickup at Seine Musicale or Île Seguin forecourt." }
      ],
    }
  ),
  // ═══════════════════════════════════════════════════════════
  // VILLE-D'AVRAY (11 000 hab.)
  // ═══════════════════════════════════════════════════════════
  hdsORoute(
    "taxi-ville-d-avray-orly", "Ville-d'Avray", "Aéroport d'Orly",
    48.8262, 2.1878, 48.7262, 2.3652,
    20, 22, "40 — 55 €", "aeroport",
    ["N118", "A6", "Étangs de Corot", "Forêt de Fausses-Reposes", "Résidentiel"],
    40, 55, 72, 38, "N118 / A6", "~2 €", "ville-d-avray", "aeroport-orly",
    ["taxi-ville-d-avray-cdg", "taxi-chaville-orly", "taxi-sevres-orly", "taxi-garches-orly", "taxi-meudon-orly"],
    ["aeroport", "transfert", "orly", "ville-d-avray", "hauts-de-seine", "corot", "etangs"],
    {
      metaTitle: "Taxi Ville-d'Avray → Orly | 20 km, dès 40 € | TaxiNeo",
      metaDescription: "Taxi Ville-d'Avray vers Orly via N118/A6 en 22 min. Étangs de Corot, forêt. Prix fixe 40-55 €, 24h/24.",
      heroTitle: "Taxi Ville-d'Avray → Orly",
      heroSubtitle: "Transfert Ville-d'Avray → Aéroport d'Orly au prix fixe de 40 — 55 €. 20 km, direct par la N118.",
      description: "L'aéroport d'Orly est à 22 min de Ville-d'Avray via la N118 et l'A6, liaison directe depuis le village de Corot.",
      routeDescription: "L'itinéraire descend vers la N118 via Sèvres ou Chaville puis rejoint l'A6 direction Orly.",
      introduction: "Ville-d'Avray est une commune résidentielle de 11 000 habitants qui incarne le charme discret de l'ouest parisien. Rendue célèbre par le peintre Jean-Baptiste Camille Corot, qui y vécut et y peignit certaines de ses plus belles toiles au XIXe siècle, la ville a conservé un caractère bucolique rare en Île-de-France. Les Étangs de Corot, classés site naturel protégé, sont deux plans d'eau entourés de saules et de chênes qui inspirèrent le maître de l'école de Barbizon pour des tableaux exposés aujourd'hui au Louvre et au musée d'Orsay. La forêt de Fausses-Reposes (600 hectares) enveloppe une grande partie de la commune, offrant un cadre de vie exceptionnel aux familles et aux cadres supérieurs qui y ont élu domicile. Les rues sinueuses bordées de propriétés arborées, les villas d'artistes et le silence des sous-bois contrastent avec la proximité de Paris, accessible en 20 minutes. La gare de Sèvres-Ville-d'Avray (Transilien L) relie la commune à Paris Saint-Lazare, mais le taxi reste indispensable pour rejoindre Orly. En 22 minutes par la N118, votre chauffeur vous transporte de la quiétude des étangs au terminal d'embarquement d'Orly.",
      itineraire: "Votre chauffeur quitte Ville-d'Avray par la D407 en direction de Sèvres ou par la rue de Marnes vers Chaville. Il rejoint la N118 au pont de Sèvres ou à hauteur de Chaville. La N118 descend ensuite en direction de Vélizy-Villacoublay à travers les coteaux boisés de Meudon et de Chaville — un parcours agréable et verdoyant. À l'échangeur de Vélizy, le chauffeur prend l'A6 puis la bretelle vers Orly. Les péages sont d'environ 2 € (inclus dans le tarif). Le trajet dure 22 minutes en conditions normales. Aux heures de pointe (7h30-9h30, 17h-19h30), des ralentissements sont fréquents au pont de Sèvres et à l'échangeur de Vélizy — prévoyez alors 32 à 38 minutes. Ville-d'Avray étant une petite commune sans embouteillages locaux, le trajet jusqu'à la N118 est toujours rapide (5 minutes maximum).",
      conseils: "L'atout majeur de Ville-d'Avray est l'absence totale de congestion locale : vous quittez votre domicile et êtes sur la N118 en 5 minutes. Pour les vols matinaux, un départ 1h20 avant le décollage est suffisant. Avant votre voyage, offrez-vous une promenade autour des Étangs de Corot : le sentier fait le tour des deux étangs en 30 minutes et offre des vues dignes d'une toile impressionniste. La Villa Thiébaut-Sisson, demeure d'artiste du XIXe siècle, mérite également un coup d'œil. Précisez votre terminal Orly lors de la réservation. Pour le retour, votre chauffeur vous attend en zone d'arrivée avec votre nom. Le van 7 places (72 €) est recommandé pour les familles avec enfants — de nombreuses familles de Ville-d'Avray partent en vacances depuis Orly. Le parking d'Orly (20-28 €/jour) rend le taxi aller-retour (80-110 €) avantageux dès 3 jours.",
      comparaisonTransport: "En transports en commun, il faut prendre le Transilien L à Sèvres-Ville-d'Avray jusqu'à Saint-Lazare, puis le métro jusqu'à Châtelet et l'OrlyBus — comptez 1h20 à 1h40 avec marche et attentes. Le taxi à 40-55 € est direct en 22 min. À 2 passagers (20-28 €/pers.), c'est imbattable. Pour une famille de 4 en van (72 €, soit 18 €/pers.), c'est moins cher que 4 billets combinés en transport en commun.",
      faq: [
        { question: "Quel est le prix du taxi Ville-d'Avray → Orly ?", answer: "40-55 € en berline, 72 € en van. Tarif fixe, péages (~2 €) et bagages inclus." },
        { question: "Combien de temps dure le trajet ?", answer: "22 min en conditions normales, 32-38 min aux heures de pointe." },
        { question: "Le chauffeur connaît-il Ville-d'Avray ?", answer: "Oui, nos chauffeurs connaissent toutes les rues de la commune, y compris les accès depuis les Étangs de Corot et les quartiers résidentiels." },
        { question: "Péages ?", answer: "Environ 2 €, inclus dans le tarif fixe. Pas de supplément." },
        { question: "Service le dimanche ?", answer: "Oui, 24h/24 et 7j/7, y compris dimanches et jours fériés. Même tarif fixe." }
      ],
    },
    {
      metaTitle: "Taxi Ville-d'Avray → Orly | 20 km, from €40 | TaxiNeo",
      metaDescription: "Taxi Ville-d'Avray to Orly via N118/A6 in 22 min. Corot's Ponds, forest. Fixed price €40-55, 24/7.",
      heroTitle: "Taxi Ville-d'Avray → Orly",
      heroSubtitle: "Your Ville-d'Avray → Orly Airport transfer at €40 — €55. 20 km, via the N118.",
      description: "Orly Airport is 22 min from Ville-d'Avray via the N118 and A6, a direct link from Corot's village.",
      routeDescription: "Via Sèvres or Chaville to the N118 then the A6 to Orly.",
      introduction: "Ville-d'Avray is a residential commune of 11,000 inhabitants that embodies the discreet charm of western Paris. Made famous by painter Jean-Baptiste Camille Corot, who lived here and painted some of his finest canvases in the 19th century, the town has preserved a bucolic character rare in Île-de-France. The Étangs de Corot, classified as a protected natural site, are two ponds surrounded by willows and oaks that inspired the master of the Barbizon school — paintings now exhibited at the Louvre and the Musée d'Orsay. The 600-hectare Forêt de Fausses-Reposes envelops much of the commune, offering an exceptional living environment for families and senior executives. Winding streets lined with tree-shaded properties, artists' villas and the silence of the undergrowth contrast with the proximity of Paris, just 20 minutes away. The Sèvres-Ville-d'Avray station (Transilien L) connects to Paris Saint-Lazare, but the taxi remains essential for reaching Orly. In 22 minutes via the N118, your driver transports you from the tranquillity of the ponds to the Orly departure terminal.",
      itineraire: "Your driver leaves Ville-d'Avray via the D407 towards Sèvres or via Rue de Marnes to Chaville, joining the N118 at Pont de Sèvres or Chaville. The N118 descends towards Vélizy through the wooded hillsides of Meudon and Chaville — a pleasant green route. At the Vélizy interchange, the A6 and then Orly exit. Tolls approximately €2 (included). Allow 22 min, or 32-38 min in rush hour. Ville-d'Avray has no local congestion, so reaching the N118 takes just 5 minutes.",
      conseils: "Ville-d'Avray's key advantage is zero local congestion — you're on the N118 in 5 minutes. For morning flights, leaving 1h20 before departure suffices. Walk around the Étangs de Corot before your trip: the 30-minute loop offers Impressionist-worthy views. Villa Thiébaut-Sisson, a 19th-century artist's house, is also worth a look. Specify your Orly terminal. Driver waits in arrivals for returns. 7-seat van (€72) recommended for families — many Ville-d'Avray families fly from Orly. Orly parking (€20-28/day) makes taxi return (€80-110) worthwhile from 3 days.",
      comparaisonTransport: "Public transport: Transilien L to Saint-Lazare, metro to Châtelet, OrlyBus — 1h20-1h40. Taxi at €40-55 direct in 22 min. For 2 passengers (€20-28 each), unbeatable. Family of 4 in van (€72, i.e. €18/person) is cheaper than 4 combined transit tickets.",
      faq: [
        { question: "How much is a taxi Ville-d'Avray to Orly?", answer: "€40-55 sedan, €72 van. Fixed fare, tolls (~€2) and luggage included." },
        { question: "How long?", answer: "22 min normally, 32-38 min in rush hour." },
        { question: "Does the driver know Ville-d'Avray?", answer: "Yes, our drivers know all streets, including access from the Étangs de Corot and residential areas." },
        { question: "Tolls?", answer: "About €2, included in the fixed fare. No extra charges." },
        { question: "Sunday service?", answer: "Yes, 24/7, including Sundays and holidays. Same fixed fare." }
      ],
    }
  ),
  hdsORoute(
    "taxi-ville-d-avray-cdg", "Ville-d'Avray", "Aéroport CDG",
    48.8262, 2.1878, 49.0097, 2.5479,
    42, 45, "75 — 95 €", "aeroport",
    ["A86", "A1", "Étangs de Corot", "Roissy", "Forêt Fausses-Reposes"],
    75, 95, 125, 65, "A86 / A1", "~6 €", "ville-d-avray", "aeroport-cdg",
    ["taxi-ville-d-avray-orly", "taxi-chaville-cdg", "taxi-sevres-cdg", "taxi-garches-cdg", "taxi-rueil-malmaison-cdg"],
    ["aeroport", "transfert", "cdg", "roissy", "ville-d-avray", "hauts-de-seine", "corot"],
    {
      metaTitle: "Taxi Ville-d'Avray → CDG | 42 km, dès 75 € | TaxiNeo",
      metaDescription: "Taxi Ville-d'Avray vers Roissy CDG via A86/A1 en 45 min. Étangs de Corot, forêt. Prix fixe 75-95 €, 24h/24.",
      heroTitle: "Taxi Ville-d'Avray → CDG",
      heroSubtitle: "Transfert Ville-d'Avray → Aéroport Charles de Gaulle au prix fixe de 75 — 95 €. 42 km, direct par l'A86.",
      description: "L'aéroport CDG est à 45 min de Ville-d'Avray via l'A86 nord et l'A1, transfert direct depuis le village des peintres.",
      routeDescription: "L'itinéraire emprunte l'A86 nord puis l'A1 direction Roissy-CDG.",
      introduction: "Le transfert en taxi de Ville-d'Avray vers l'aéroport Charles de Gaulle est un trajet contrasté : de l'un des villages les plus paisibles d'Île-de-France vers le premier hub aérien français. Ville-d'Avray, 11 000 âmes à peine, est un bijou résidentiel blotti entre les frondaisons de la forêt de Fausses-Reposes et les rives de ses étangs immortalisés par Corot. Le peintre paysagiste, figure majeure du mouvement naturaliste et précurseur de l'impressionnisme, s'installa à Ville-d'Avray en 1817 et y revint inlassablement pendant plus de cinquante ans. Ses tableaux des étangs, avec leurs reflets argentés et leur lumière vaporeuse, sont aujourd'hui conservés dans les plus grands musées du monde. La commune a su préserver cet héritage : les abords des étangs sont classés site naturel protégé et les constructions nouvelles sont strictement encadrées pour maintenir le caractère paysager. Les résidents de Ville-d'Avray — cadres dirigeants, artistes, diplomates — voyagent fréquemment à l'international via CDG, mais la commune n'est desservie ni par le métro, ni par le RER. Le taxi est donc le moyen de transport privilégié pour rejoindre Roissy en 45 minutes, porte-à-porte, avec tout le confort nécessaire pour des passagers habitués à un cadre de vie d'exception.",
      itineraire: "Depuis Ville-d'Avray, votre chauffeur gagne l'A86 par Saint-Cloud (D907) ou par Garches (D907 nord). L'A86 contourne Paris par l'ouest, traversant le secteur de La Défense (tunnel gratuit), puis poursuit vers le nord par Gennevilliers et Saint-Denis. À la jonction A86/A1, le chauffeur prend l'A1 (autoroute du Nord) direction Roissy-CDG. Les péages totalisent environ 6 € (inclus dans le tarif fixe). En conditions de trafic fluides, comptez 45 minutes. Aux heures de pointe — principalement 7h30-9h30 et 17h-19h30 — l'A86 subit des ralentissements entre La Défense et Gennevilliers, portant le trajet à 55-65 minutes. L'itinéraire alternatif via le boulevard Périphérique nord (par le pont de Saint-Cloud et la Porte Maillot) peut être plus rapide le week-end. Votre chauffeur adapte son parcours en temps réel grâce aux données GPS.",
      conseils: "Pour les vols long-courriers depuis CDG, quittez Ville-d'Avray 2h15 à 2h30 avant le décollage en heure de pointe, 1h45 en période creuse. Les meilleurs créneaux sur l'A86 sont avant 7h le matin ou entre 10h et 15h30. Indiquez votre terminal CDG précis lors de la réservation — le T2 comporte sept sous-terminaux (2A-2G). Pour le retour de CDG, votre chauffeur suit votre vol en temps réel et vous attend en zone d'arrivée avec un panneau nominatif (attente gratuite 30 minutes). Le van 7 places (125 €) est apprécié des familles de Ville-d'Avray qui partent en vacances avec enfants et bagages volumineux. Le parking longue durée de CDG (20-30 €/jour) rend le taxi aller-retour (150-190 €) économique dès 5 jours. Avant de partir, une dernière promenade aux Étangs de Corot s'impose — l'aube y est magique, fidèle aux toiles du maître.",
      comparaisonTransport: "Depuis Ville-d'Avray, les transports en commun imposent le Transilien L jusqu'à Saint-Lazare, le métro ou RER A vers Châtelet, puis le RER B vers CDG — minimum 1h40, souvent 2h avec trois correspondances et de la marche avec bagages. Le taxi à 75-95 € est direct en 45 min. À 2 passagers (38-48 €/pers.) ou 3 passagers (25-32 €/pers.), largement plus confortable et compétitif que les navettes collectives à 32 €/pers. avec multiples arrêts intermédiaires.",
      faq: [
        { question: "Quel est le prix du taxi Ville-d'Avray → CDG ?", answer: "75-95 € en berline, 125 € en van. Tarif fixe, péages (~6 €) et bagages inclus." },
        { question: "Combien de temps pour rejoindre CDG ?", answer: "45 min en conditions normales, 55-65 min aux heures de pointe." },
        { question: "Le chauffeur connaît-il les petites rues de Ville-d'Avray ?", answer: "Oui, nos chauffeurs connaissent toutes les rues de la commune, les accès depuis les Étangs et les raccourcis vers l'A86." },
        { question: "Retour de CDG vers Ville-d'Avray ?", answer: "Oui, suivi de vol en temps réel. Chauffeur en zone d'arrivée avec panneau. Attente gratuite 30 min." },
        { question: "Famille avec enfants ?", answer: "Van 7 places (125 €) avec sièges enfants disponibles sur demande. Réservez la veille." }
      ],
    },
    {
      metaTitle: "Taxi Ville-d'Avray → CDG | 42 km, from €75 | TaxiNeo",
      metaDescription: "Taxi Ville-d'Avray to CDG via A86/A1 in 45 min. Corot's Ponds, forest. Fixed price €75-95, 24/7.",
      heroTitle: "Taxi Ville-d'Avray → CDG",
      heroSubtitle: "Your Ville-d'Avray → CDG Airport transfer at €75 — €95. 42 km, via the A86.",
      description: "CDG Airport is 45 min from Ville-d'Avray via the A86 north and A1, a direct transfer from the painters' village.",
      routeDescription: "Via the A86 north then the A1 to Roissy-CDG.",
      introduction: "The taxi transfer from Ville-d'Avray to Charles de Gaulle Airport is a journey of contrasts: from one of Île-de-France's most peaceful villages to France's largest aviation hub. Ville-d'Avray, barely 11,000 souls, is a residential gem nestled between the canopy of the Forêt de Fausses-Reposes and the shores of its ponds immortalised by Corot. The landscape painter, a major figure of the naturalist movement and forerunner of Impressionism, settled in Ville-d'Avray in 1817 and returned tirelessly for over fifty years. His paintings of the ponds, with their silvery reflections and vaporous light, are now held in the world's greatest museums. The commune has preserved this heritage: the pond surroundings are classified as a protected natural site and new construction is strictly regulated to maintain the landscape character. Ville-d'Avray residents — senior executives, artists, diplomats — travel internationally frequently via CDG, but the commune has neither metro nor RER. The taxi is therefore the preferred transport to reach Roissy in 45 minutes, door-to-door, with all the comfort expected by residents accustomed to an exceptional living environment.",
      itineraire: "From Ville-d'Avray, your driver reaches the A86 via Saint-Cloud (D907) or Garches. The A86 circles Paris west through La Défense (free tunnel), then north via Gennevilliers and Saint-Denis. At the A86/A1 junction, the A1 motorway leads to Roissy-CDG. Tolls approximately €6 (included). Allow 45 min, or 55-65 min in rush hour (7:30-9:30am, 5-7:30pm). The Périphérique north route (via Saint-Cloud bridge and Porte Maillot) can be faster on weekends. Real-time GPS route adaptation.",
      conseils: "For long-haul CDG flights, leave Ville-d'Avray 2h15-2h30 before in rush hour, 1h45 off-peak. Best A86 times: before 7am or 10am-3:30pm. Specify CDG terminal (T2 has sub-terminals 2A-2G). For returns, driver tracks your flight and waits in arrivals — free 30-min wait. 7-seat van (€125) popular with Ville-d'Avray families travelling with children and bulky luggage. CDG parking (€20-30/day) makes taxi return (€150-190) economical from 5 days. A final walk around the Étangs de Corot before departure is a must — dawn here is magical, true to the master's canvases.",
      comparaisonTransport: "Public transport from Ville-d'Avray: Transilien L to Saint-Lazare, metro/RER A to Châtelet, RER B to CDG — minimum 1h40, often 2h with three changes. Taxi at €75-95 direct in 45 min. For 2 passengers (€38-48 each) or 3 (€25-32 each), far more comfortable and competitive than shared shuttles at €32/person with multiple stops.",
      faq: [
        { question: "How much is a taxi Ville-d'Avray to CDG?", answer: "€75-95 sedan, €125 van. Fixed fare, tolls (~€6) and luggage included." },
        { question: "How long to CDG?", answer: "45 min normally, 55-65 min in rush hour." },
        { question: "Does the driver know the small streets?", answer: "Yes, our drivers know all streets, pond access roads and shortcuts to the A86." },
        { question: "Return from CDG?", answer: "Real-time flight tracking. Driver in arrivals with name board. Free 30-min wait." },
        { question: "Family with children?", answer: "7-seat van (€125) with child seats on request. Book the day before." }
      ],
    }
  ),
];
