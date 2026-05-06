import type { Trajet } from "./trajets";

function hdsSERoute(
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
    hub: "hds-sud-est",
    i18n: { fr: frMeta, en: enMeta },
  };
}

export const trajetsHdsSudEst: Trajet[] = [
  // ═══════════════════════════════════════════════════════════
  // MONTROUGE (50 000 hab.)
  // ═══════════════════════════════════════════════════════════
  hdsSERoute(
    "taxi-montrouge-orly", "Montrouge", "Aéroport d'Orly",
    48.8171, 2.3190, 48.7262, 2.3652,
    15, 18, "25 — 35 €", "aeroport",
    ["Périphérique", "A6", "Porte d'Orléans", "Beffroi de Montrouge", "Hauts-de-Seine"],
    25, 35, 48, 30, "Périph. + A6", "0 €", "montrouge", "aeroport-orly",
    ["taxi-montrouge-cdg", "taxi-malakoff-orly", "taxi-bagneux-orly", "taxi-issy-les-moulineaux-orly", "taxi-antony-orly"],
    ["aeroport", "orly", "montrouge", "hauts-de-seine", "porte-orleans"],
    {
      metaTitle: "Taxi Montrouge → Orly | 15 km, dès 25 € | TaxiNeo",
      metaDescription: "Transfert taxi Montrouge vers Orly. 18 min via Périph. + A6. Beffroi, Porte d'Orléans. Prix fixe 25-35 €, bagages inclus.",
      heroTitle: "Taxi Montrouge → Aéroport d'Orly",
      heroSubtitle: "Transfert Montrouge → Aéroport d'Orly au prix fixe de 25 — 35 €. 15 km, direct par le Périphérique.",
      description: "L'aéroport d'Orly est à 18 min de Montrouge via le Périphérique sud et l'A6.",
      routeDescription: "L'itinéraire emprunte le boulevard Périphérique par la Porte d'Orléans puis l'A6 direction Orly.",
      introduction: "Montrouge est une commune de 50 000 habitants nichée aux portes sud de Paris, immédiatement au-delà de la Porte d'Orléans. Souvent surnommée « le petit Montmartre du sud », elle séduit par son atmosphère villageoise et son dynamisme culturel, incarné par le Beffroi de Montrouge, ancien hôtel de ville reconverti en centre d'expositions accueillant chaque année le Salon de Montrouge, événement phare de l'art contemporain émergent en France depuis 1955. La ville bénéficie d'une desserte exceptionnelle grâce au métro 4 (terminus Mairie de Montrouge, prolongé en 2013) et au métro 13 (Châtillon-Montrouge). Le marché Brossolette, qui se tient chaque mercredi, vendredi et dimanche matin, est réputé pour la qualité de ses étals de fruits, légumes et fromages fermiers. Le quartier de la Mairie, avec ses rues commerçantes animées et ses bistrots, rappelle un village provençal transposé en banlieue parisienne. Le transfert vers Orly est rapide et direct : 15 kilomètres par le Périphérique sud et l'A6, sans péage. Le taxi vous prend en charge devant votre porte — que vous résidiez près du Beffroi, du quartier Haut-Mesnil ou de la Porte d'Orléans — et vous dépose au terminal d'Orly souhaité en 18 minutes.",
      itineraire: "Votre chauffeur quitte Montrouge en rejoignant le boulevard Périphérique par la Porte d'Orléans, l'un des accès les plus directs au Périphérique depuis la banlieue sud. Il emprunte ensuite le Périphérique sud en direction de l'ouest, longeant la Cité internationale universitaire de Paris et le Parc Montsouris, deux repères parisiens bien connus. À la hauteur de la Porte d'Italie, le Périphérique bifurque vers l'A6a (autoroute du Soleil) direction Lyon/Orly. La sortie Aéroport d'Orly est clairement signalée. L'ensemble du trajet est gratuit — aucun péage sur ce tronçon. En conditions de circulation fluide, comptez 18 minutes porte-à-terminal. Aux heures de pointe, notamment entre 7h30 et 9h30 le matin et entre 17h et 19h30 le soir, le Périphérique sud peut être chargé : prévoyez alors 25 à 30 minutes. Votre chauffeur suit le trafic en temps réel via GPS et peut emprunter un itinéraire alternatif par la D920 et Bagneux si le Périphérique est saturé.",
      conseils: "Pour les vols du matin (décollage avant 8h), partez de Montrouge au moins 1h30 avant le décollage. Le Périphérique est fluide avant 7h. Précisez votre terminal (Orly 1, 2, 3 ou 4) lors de la réservation pour une dépose au plus près de votre porte d'embarquement. Le Salon de Montrouge au Beffroi se tient chaque printemps : si vous partez en voyage pendant cette période, visitez-le avant votre transfert. Le cimetière de Montrouge, bien que méconnu, abrite les tombes de personnalités culturelles et mérite un détour pour les amateurs d'histoire. Le stationnement à Orly coûte 25-35 €/jour ; un aller-retour en taxi (50-70 €) est plus économique dès 2 jours d'absence. Pour le retour, votre chauffeur vous attend en zone d'arrivée avec votre nom affiché, même en cas de retard de vol grâce au suivi en temps réel. Les habitants du quartier Plein Sud bénéficient d'un accès encore plus rapide au Périphérique.",
      comparaisonTransport: "Le métro 4 (Mairie de Montrouge) rejoint Denfert-Rochereau en 5 min, puis l'Orlyval (20 min, 12,10 €) mène à Orly — total 40 min, ~14 €. Le taxi à 25-35 € est direct en 18 min, sans correspondance ni escaliers avec bagages. À 2 passagers (12-17 €/pers.), le taxi est quasiment au même prix que les transports et 2 fois plus rapide.",
      faq: [
        { question: "Quel est le prix du taxi Montrouge-Orly ?", answer: "25-35 € en berline, 48 € en van. Tarif fixe, aucun péage. Bagages inclus." },
        { question: "Combien de temps dure le trajet ?", answer: "18 min en conditions normales, 25-30 min aux heures de pointe." },
        { question: "Prise en charge dans quel quartier ?", answer: "Partout à Montrouge : Beffroi, Mairie, Haut-Mesnil, Plein Sud, Porte d'Orléans." },
        { question: "Y a-t-il des péages ?", answer: "Aucun péage. Le Périphérique et l'A6 sont gratuits sur ce tronçon." },
        { question: "Service de nuit disponible ?", answer: "Oui, 24h/24. Idéal pour les vols très tôt le matin ou les arrivées tardives." }
      ],
    },
    {
      metaTitle: "Taxi Montrouge → Orly | 15 km, from €25 | TaxiNeo",
      metaDescription: "Taxi from Montrouge to Orly Airport. 18 min via ring road + A6. Beffroi, Porte d'Orleans. Fixed price €25-35, luggage included.",
      heroTitle: "Taxi Montrouge → Orly Airport",
      heroSubtitle: "Your Montrouge → Orly Airport transfer at €25 — €35. 15 km, via the Peripherique.",
      description: "Orly Airport is 18 min from Montrouge via the southern Peripherique and A6.",
      routeDescription: "Via the Peripherique from Porte d'Orleans then A6 to Orly.",
      introduction: "Montrouge is a charming commune of 50,000 residents nestled just beyond Paris's Porte d'Orleans. Often called the 'little Montmartre of the south,' it is known for the Beffroi de Montrouge, a former town hall now housing the prestigious Salon de Montrouge contemporary art exhibition held annually since 1955. The town benefits from excellent metro access (line 4 terminus Mairie de Montrouge, line 13 Chatillon-Montrouge). The Brossolette market on Wednesdays, Fridays and Sundays is famous for its quality produce. The transfer to Orly is quick and toll-free: 15 km via the southern Peripherique and A6, with door-to-door pickup from anywhere in Montrouge to your Orly terminal in just 18 minutes.",
      itineraire: "Your driver joins the Peripherique via Porte d'Orleans, heads south past Cite Universitaire and Parc Montsouris, then takes the A6 to Orly. No tolls. Allow 18 min off-peak, 25-30 min in rush hour (7:30-9:30am, 5-7:30pm). Alternative route via D920 through Bagneux if Peripherique is congested.",
      conseils: "For morning flights (before 8am), leave Montrouge at least 1h30 before departure. Specify your Orly terminal (1-4) when booking. Orly parking costs €25-35/day — taxi return trip is cheaper from 2 days. The Salon de Montrouge at the Beffroi runs each spring. Driver waits in arrivals with your name for return trips, with real-time flight tracking.",
      comparaisonTransport: "Metro 4 to Denfert-Rochereau then Orlyval: 40 min, ~€14. Taxi at €25-€35 direct in 18 min, no changes. For 2 passengers (€12-17 each), taxi matches public transport cost at twice the speed.",
      faq: [
        { question: "How much?", answer: "€25-35 sedan, €48 van. Fixed fare, no tolls. Luggage included." },
        { question: "How long?", answer: "18 min normal, 25-30 min in rush hour." },
        { question: "Pickup area?", answer: "Anywhere in Montrouge: Beffroi, Mairie, Haut-Mesnil, Plein Sud, Porte d'Orleans." },
        { question: "Tolls?", answer: "None. Peripherique and A6 are free on this section." },
        { question: "Night service?", answer: "Yes, 24/7. Ideal for early morning or late night flights." }
      ],
    }
  ),
  hdsSERoute(
    "taxi-montrouge-cdg", "Montrouge", "Aéroport CDG",
    48.8171, 2.3190, 49.0097, 2.5479,
    32, 35, "55 — 75 €", "aeroport",
    ["Périphérique", "A1", "Porte d'Orléans", "Roissy", "Beffroi de Montrouge"],
    55, 75, 98, 55, "Périph. + A1", "~3 €", "montrouge", "aeroport-cdg",
    ["taxi-montrouge-orly", "taxi-malakoff-cdg", "taxi-bagneux-cdg", "taxi-antony-cdg", "taxi-chatillon-cdg"],
    ["aeroport", "cdg", "roissy", "montrouge", "hauts-de-seine"],
    {
      metaTitle: "Taxi Montrouge → CDG | 32 km, dès 55 € | TaxiNeo",
      metaDescription: "Transfert taxi Montrouge vers Roissy CDG. 35 min via Périph. + A1. Beffroi, Porte d'Orléans. Prix fixe 55-75 €.",
      heroTitle: "Taxi Montrouge → Aéroport CDG",
      heroSubtitle: "Transfert Montrouge → Aéroport Charles de Gaulle au prix fixe de 55 — 75 €. 32 km, direct.",
      description: "L'aéroport CDG est à 35 min de Montrouge via le Périphérique et l'A1.",
      routeDescription: "L'itinéraire emprunte le Périphérique nord puis l'A1 direction Roissy.",
      introduction: "Le transfert en taxi de Montrouge vers l'aéroport Charles de Gaulle est un trajet classique pour les résidents de cette commune des Hauts-de-Seine limitrophe du 14e arrondissement de Paris. Montrouge, avec ses 50 000 habitants répartis sur seulement 1,55 km², est l'une des villes les plus densément peuplées de France, ce qui témoigne de son attractivité résidentielle. La proximité immédiate avec Paris — la Porte d'Orléans est à quelques centaines de mètres — fait de Montrouge un choix prisé des jeunes actifs et des familles souhaitant vivre aux portes de la capitale à un coût plus accessible. Le Beffroi de Montrouge, classé monument historique, est le symbole de la ville et accueille le célèbre Salon de Montrouge, tremplin de l'art contemporain français. CDG, premier aéroport de France avec plus de 70 millions de passagers annuels, est accessible en 35 minutes par le Périphérique et l'A1. Le taxi supprime la contrainte du RER B — souvent bondé aux heures de pointe — et offre un transfert direct, confortable et ponctuel depuis votre adresse montrougienne jusqu'au terminal de votre vol.",
      itineraire: "Votre chauffeur quitte Montrouge par la Porte d'Orléans et rejoint le boulevard Périphérique en direction de l'est puis du nord. Il emprunte la Porte de la Chapelle pour accéder à l'A1 (autoroute du Nord) direction Lille/Roissy. Le trajet traverse Saint-Denis, passe à proximité du Stade de France puis longe la zone de Villepinte avant d'atteindre les terminaux de CDG. L'itinéraire alternatif passe par l'A3 via la Porte de Bagnolet, utile quand le Périphérique nord est saturé. Les péages sont d'environ 3 € (inclus dans le tarif). Comptez 35 minutes en conditions fluides, 45 à 55 minutes aux heures de pointe. Votre chauffeur dispose d'un GPS actualisé en temps réel pour optimiser votre trajet selon les conditions de circulation du moment.",
      conseils: "Pour les vols internationaux, prévoyez d'arriver 3h avant le décollage. Depuis Montrouge, partez donc 2h à 2h30 avant votre vol en heures de pointe. Le meilleur créneau est avant 6h30 ou entre 10h et 15h. Précisez votre terminal CDG (T1, T2A-G ou T3) — le terminal 2 comprend sept sous-terminaux distants de plusieurs minutes à pied. Le RER B depuis Denfert-Rochereau (accessible en métro 4 depuis Montrouge) prend 45-50 min mais impose une correspondance avec bagages dans les escaliers. Le parking longue durée de CDG coûte 20-30 €/jour : un aller-retour en taxi (110-150 €) est plus économique dès 4 jours. Pensez à réserver votre retour en même temps que l'aller pour bénéficier d'un suivi de vol en temps réel.",
      comparaisonTransport: "Métro 4 + RER B (Denfert-Rochereau → CDG) : 50 min, ~12 €, 1 correspondance avec escaliers. Le taxi à 55-75 € est direct en 35 min. À 2-3 passagers (18-37 €/pers.), très compétitif et sans la contrainte des bagages dans le métro.",
      faq: [
        { question: "Quel est le prix ?", answer: "55-75 € en berline, 98 € en van. Tarif fixe, péages inclus (~3 €)." },
        { question: "Combien de temps faut-il ?", answer: "35 min hors pointe, 45-55 min en heures chargées." },
        { question: "Mon chauffeur m'attend à CDG ?", answer: "Oui, en zone d'arrivée avec votre nom. Suivi de vol en temps réel, attente gratuite." },
        { question: "Quel itinéraire ?", answer: "Périphérique nord + A1, ou A3 via Bagnolet selon le trafic." },
        { question: "Van disponible ?", answer: "Oui, van 7 places à 98 €. Idéal pour familles ou groupes." }
      ],
    },
    {
      metaTitle: "Taxi Montrouge → CDG | 32 km, from €55 | TaxiNeo",
      metaDescription: "Taxi from Montrouge to CDG Airport. 35 min via ring road + A1. Beffroi, Porte d'Orleans. Fixed price €55-75.",
      heroTitle: "Taxi Montrouge → CDG Airport",
      heroSubtitle: "Your Montrouge → CDG Airport transfer at €55 — €75. 32 km, direct to Roissy.",
      description: "CDG Airport is 35 min from Montrouge via the Peripherique and A1.",
      routeDescription: "Via the northern Peripherique then A1 to Roissy.",
      introduction: "The taxi transfer from Montrouge to Charles de Gaulle Airport is a popular route for residents of this Hauts-de-Seine commune bordering Paris's 14th arrondissement. Montrouge, with 50,000 inhabitants packed into just 1.55 km², is one of the most densely populated cities in France — a testament to its residential appeal. Its immediate proximity to Paris (Porte d'Orleans is a few hundred metres away) makes Montrouge a favourite for young professionals and families seeking affordable near-Paris living. The Beffroi de Montrouge, a listed historic monument, hosts the prestigious Salon de Montrouge contemporary art showcase. CDG is accessible in 35 minutes via the Peripherique and A1. The taxi eliminates the often-crowded RER B, providing a direct, comfortable door-to-terminal transfer.",
      itineraire: "Your driver leaves Montrouge via Porte d'Orleans, takes the Peripherique north to Porte de la Chapelle, then the A1 to Roissy. Alternative via A3 from Porte de Bagnolet if the northern Peripherique is congested. Tolls ~€3 (included). Allow 35 min off-peak, 45-55 min in rush hour.",
      conseils: "For international flights, arrive 3h before departure — leave Montrouge 2-2.5h before. Best times: before 6:30am or 10am-3pm. Specify CDG terminal (T1, T2A-G, T3). RER B from Denfert-Rochereau takes 50 min with luggage on stairs. CDG parking €20-30/day — taxi return cheaper from 4 days. Book return trip for real-time flight tracking.",
      comparaisonTransport: "Metro 4 + RER B from Denfert-Rochereau: 50 min, ~€12, 1 change with stairs. Taxi at €55-€75 direct in 35 min. For 2-3 passengers (€18-37 each), very competitive without metro luggage hassle.",
      faq: [
        { question: "How much?", answer: "€55-75 sedan, €98 van. Fixed fare, tolls included (~€3)." },
        { question: "How long?", answer: "35 min off-peak, 45-55 min in rush hour." },
        { question: "Driver meets at CDG?", answer: "Yes, in arrivals with your name. Real-time flight tracking, free waiting." },
        { question: "Which route?", answer: "Northern Peripherique + A1, or A3 via Bagnolet depending on traffic." },
        { question: "Van available?", answer: "Yes, 7-seat van at €98. Ideal for families or groups." }
      ],
    }
  ),
  // ═══════════════════════════════════════════════════════════
  // MALAKOFF (31 000 hab.)
  // ═══════════════════════════════════════════════════════════
  hdsSERoute(
    "taxi-malakoff-orly", "Malakoff", "Aéroport d'Orly",
    48.8191, 2.2981, 48.7262, 2.3652,
    16, 20, "25 — 35 €", "aeroport",
    ["Périphérique", "A6", "Métro 13", "Théâtre 71", "Hauts-de-Seine"],
    25, 35, 48, 32, "Périph. + A6", "0 €", "malakoff", "aeroport-orly",
    ["taxi-malakoff-cdg", "taxi-montrouge-orly", "taxi-vanves-orly", "taxi-issy-les-moulineaux-orly", "taxi-chatillon-orly"],
    ["aeroport", "orly", "malakoff", "hauts-de-seine", "theatre-71"],
    {
      metaTitle: "Taxi Malakoff → Orly | 16 km, dès 25 € | TaxiNeo",
      metaDescription: "Transfert taxi Malakoff vers Orly. 20 min via Périph. + A6. Théâtre 71, Métro 13. Prix fixe 25-35 €, bagages inclus.",
      heroTitle: "Taxi Malakoff → Aéroport d'Orly",
      heroSubtitle: "Transfert Malakoff → Aéroport d'Orly au prix fixe de 25 — 35 €. 16 km, direct par le Périphérique.",
      description: "L'aéroport d'Orly est à 20 min de Malakoff via le Périphérique sud et l'A6.",
      routeDescription: "L'itinéraire emprunte le Périphérique sud depuis la Porte de Vanves puis l'A6 direction Orly.",
      introduction: "Malakoff est une commune de 31 000 habitants des Hauts-de-Seine, reconnue pour sa vie culturelle intense et son tissu associatif particulièrement riche. La ville tire son nom de la tour Malakoff, érigée au XIXe siècle en référence à la bataille de Malakoff (Crimée, 1855). Le Théâtre 71, scène nationale depuis 1971, est l'un des équipements culturels phares du sud des Hauts-de-Seine : il programme chaque saison une quarantaine de spectacles mêlant théâtre contemporain, danse et cirque. La station de métro Malakoff-Plateau de Vanves (ligne 13) relie la ville au centre de Paris en 20 minutes. Le marché de Malakoff, qui se tient chaque samedi matin place du 11-Novembre, est un rendez-vous convivial pour les habitants. La ville accueille également une importante résidence universitaire qui attire des étudiants de toute l'Île-de-France. Le transfert vers Orly est simple et rapide : 16 kilomètres par le Périphérique sud et l'A6, sans péage. Le taxi vous prend en charge à votre porte — centre-ville, quartier Plateau de Vanves ou secteur Tour Malakoff — et vous dépose directement au terminal d'Orly en 20 minutes.",
      itineraire: "Votre chauffeur quitte Malakoff en rejoignant le boulevard Périphérique par la Porte de Vanves ou la Porte de Châtillon. Il emprunte le Périphérique sud en direction de l'est, passant sous la Porte d'Orléans et la Porte d'Italie, avant de bifurquer sur l'A6a direction Lyon/Orly. Le parcours est entièrement gratuit — aucun péage. Comptez 20 minutes en conditions normales. Aux heures de pointe (7h30-9h30 et 17h-19h30), le Périphérique sud peut ralentir : prévoyez 28 à 32 minutes. L'alternative par les rues de Montrouge puis la D920 vers Bagneux et Antony est possible mais rarement plus rapide. Votre chauffeur ajuste l'itinéraire en temps réel pour garantir le trajet le plus court.",
      conseils: "Le Théâtre 71 propose des spectacles en soirée : pensez à réserver votre taxi retour si vous combinez une sortie culturelle et un vol matinal le lendemain. La ligne 13 du métro est notoirement bondée aux heures de pointe — le taxi est une alternative de confort, surtout avec des bagages. Précisez votre terminal Orly (1, 2, 3, 4) lors de la réservation. Le parking d'Orly coûte 25-35 €/jour : l'aller-retour en taxi (50-70 €) est rentable dès 2 jours. Malakoff dispose de bonnes boulangeries artisanales autour de la place du 11-Novembre si vous souhaitez emporter des provisions avant votre vol. Pour le retour, votre chauffeur surveille votre vol en temps réel et vous attend dans le hall d'arrivée.",
      comparaisonTransport: "Métro 13 (Malakoff-Plateau de Vanves) + métro 4 ou 6 + Orlyval ou bus 183 : 50-60 min, 2 correspondances, ~14 €. Le taxi à 25-35 € est direct en 20 min. À 2 passagers (12-17 €/pers.), le taxi est au même prix que les transports avec un gain de temps considérable.",
      faq: [
        { question: "Quel est le prix ?", answer: "25-35 € en berline, 48 € en van. Tarif fixe, sans péage." },
        { question: "Combien de temps ?", answer: "20 min en conditions normales, 28-32 min en heures de pointe." },
        { question: "Prise en charge où à Malakoff ?", answer: "Partout : centre-ville, Plateau de Vanves, Tour Malakoff, résidence universitaire." },
        { question: "Y a-t-il des péages ?", answer: "Aucun péage. Périphérique et A6 gratuits." },
        { question: "Service 24h/24 ?", answer: "Oui, jour et nuit. Idéal pour les vols très matinaux." }
      ],
    },
    {
      metaTitle: "Taxi Malakoff → Orly | 16 km, from €25 | TaxiNeo",
      metaDescription: "Taxi from Malakoff to Orly Airport. 20 min via ring road + A6. Theatre 71, Metro 13. Fixed price €25-35.",
      heroTitle: "Taxi Malakoff → Orly Airport",
      heroSubtitle: "Your Malakoff → Orly Airport transfer at €25 — €35. 16 km, via the Peripherique.",
      description: "Orly Airport is 20 min from Malakoff via the southern Peripherique and A6.",
      routeDescription: "Via the Peripherique from Porte de Vanves then A6 to Orly.",
      introduction: "Malakoff is a commune of 31,000 residents in Hauts-de-Seine, known for its vibrant cultural life. Named after the Tower of Malakoff (a reference to the 1855 Battle of Malakoff in Crimea), the town is home to Theatre 71, a national stage since 1971 programming contemporary theatre, dance and circus. Metro line 13 (Malakoff-Plateau de Vanves) connects to central Paris in 20 minutes. The Saturday market at Place du 11-Novembre is a lively local tradition. The transfer to Orly is straightforward and toll-free: 16 km via the southern Peripherique and A6, with door-to-door pickup and drop-off at your Orly terminal in 20 minutes.",
      itineraire: "Your driver joins the Peripherique via Porte de Vanves or Porte de Chatillon, heads east on the southern ring, then takes the A6 to Orly. No tolls. Allow 20 min off-peak, 28-32 min in rush hour. Real-time traffic adjustment for fastest route.",
      conseils: "Theatre 71 has evening shows — book a return taxi if combining a cultural outing with an early flight. Metro 13 is notoriously crowded at peak times; taxi is a comfort upgrade with luggage. Specify Orly terminal (1-4). Orly parking €25-35/day — return taxi cheaper from 2 days. Driver tracks your flight for returns.",
      comparaisonTransport: "Metro 13 + connections + Orlyval/bus 183: 50-60 min, 2 changes, ~€14. Taxi at €25-€35 direct in 20 min. For 2 passengers (€12-17 each), same price as public transport but far faster.",
      faq: [
        { question: "How much?", answer: "€25-35 sedan, €48 van. Fixed fare, no tolls." },
        { question: "How long?", answer: "20 min normal, 28-32 min in rush hour." },
        { question: "Pickup in Malakoff?", answer: "Anywhere: city centre, Plateau de Vanves, Tour Malakoff, student residence." },
        { question: "Tolls?", answer: "None. Peripherique and A6 are free." },
        { question: "24/7 service?", answer: "Yes, day and night. Ideal for early morning flights." }
      ],
    }
  ),
  hdsSERoute(
    "taxi-malakoff-cdg", "Malakoff", "Aéroport CDG",
    48.8191, 2.2981, 49.0097, 2.5479,
    33, 35, "55 — 75 €", "aeroport",
    ["Périphérique", "A1", "Métro 13", "Roissy", "Théâtre 71"],
    55, 75, 98, 55, "Périph. + A1", "~3 €", "malakoff", "aeroport-cdg",
    ["taxi-malakoff-orly", "taxi-montrouge-cdg", "taxi-vanves-cdg", "taxi-chatillon-cdg", "taxi-antony-cdg"],
    ["aeroport", "cdg", "roissy", "malakoff", "hauts-de-seine"],
    {
      metaTitle: "Taxi Malakoff → CDG | 33 km, dès 55 € | TaxiNeo",
      metaDescription: "Transfert taxi Malakoff vers Roissy CDG. 35 min via Périph. + A1. Théâtre 71, Métro 13. Prix fixe 55-75 €.",
      heroTitle: "Taxi Malakoff → Aéroport CDG",
      heroSubtitle: "Transfert Malakoff → Aéroport Charles de Gaulle au prix fixe de 55 — 75 €. 33 km, direct.",
      description: "L'aéroport CDG est à 35 min de Malakoff via le Périphérique nord et l'A1.",
      routeDescription: "L'itinéraire emprunte le Périphérique nord puis l'A1 direction Roissy-CDG.",
      introduction: "Malakoff, commune résidentielle et culturelle de 31 000 habitants, est idéalement située pour rejoindre l'aéroport Charles de Gaulle par la route. Bordée par Montrouge au sud-est, Vanves au sud-ouest et le 14e arrondissement de Paris au nord, Malakoff bénéficie d'un accès direct au Périphérique par la Porte de Vanves et la Porte de Châtillon. La ville est particulièrement appréciée des amateurs de culture vivante grâce au Théâtre 71, scène nationale qui a vu défiler depuis un demi-siècle les plus grands noms du spectacle vivant français, de Peter Brook à Wajdi Mouawad. Le tissu associatif malakoffiot est l'un des plus denses des Hauts-de-Seine, avec plus de 200 associations actives couvrant le sport, la culture, l'entraide et l'environnement. CDG, hub international d'Air France desservant plus de 300 destinations, est accessible en 35 minutes par le Périphérique et l'A1. Le taxi offre un transfert direct et confortable, évitant les correspondances laborieuses entre métro 13, RER B et les escaliers encombrés de la gare Châtelet-Les Halles.",
      itineraire: "Depuis Malakoff, votre chauffeur rejoint le Périphérique par la Porte de Vanves et emprunte la voie nord en direction de la Porte de la Chapelle. Il accède ensuite à l'A1 (autoroute du Nord) direction Lille/Roissy. Les péages sont d'environ 3 € (inclus dans le tarif). L'itinéraire alternatif passe par l'A3 depuis la Porte de Bagnolet en cas de saturation du Périphérique nord. Comptez 35 minutes en conditions fluides, 45 à 55 minutes aux heures de pointe. CDG est vaste : précisez votre terminal pour un dépôt au plus près.",
      conseils: "Pour les vols internationaux au départ de CDG, prévoyez d'arriver 3h avant. Quittez Malakoff 2h à 2h30 avant le vol en heures de pointe. Les meilleurs créneaux sont avant 6h30 et entre 10h et 15h. Le terminal 2 de CDG comprend sept sous-terminaux (2A à 2G) : vérifiez bien le vôtre. La résidence universitaire de Malakoff accueille des étudiants internationaux qui utilisent régulièrement le taxi vers CDG pour leurs voyages. Le marché du samedi matin place du 11-Novembre vous permet de faire vos dernières courses avant le départ. Pour les retours de CDG, réservez à l'avance : le chauffeur suit votre vol en temps réel et vous attend en zone d'arrivée.",
      comparaisonTransport: "Métro 13 + RER B (via Châtelet ou Saint-Michel) : 55-65 min, 2 correspondances, ~12 €. Le taxi à 55-75 € est direct en 35 min. À 2-3 passagers (18-37 €/pers.), le taxi est compétitif et bien plus confortable avec des valises.",
      faq: [
        { question: "Quel est le prix ?", answer: "55-75 € en berline, 98 € en van. Tarif fixe, péages inclus (~3 €)." },
        { question: "Combien de temps ?", answer: "35 min hors pointe, 45-55 min en heures chargées." },
        { question: "Prise en charge étudiants ?", answer: "Oui, prise en charge à la résidence universitaire ou partout à Malakoff." },
        { question: "Attente à CDG ?", answer: "Oui, chauffeur en arrivée avec votre nom. Vol suivi en temps réel." },
        { question: "Réservation de nuit ?", answer: "Oui, service 24h/24 y compris nuits et week-ends." }
      ],
    },
    {
      metaTitle: "Taxi Malakoff → CDG | 33 km, from €55 | TaxiNeo",
      metaDescription: "Taxi from Malakoff to CDG Airport. 35 min via ring road + A1. Theatre 71, Metro 13. Fixed price €55-75.",
      heroTitle: "Taxi Malakoff → CDG Airport",
      heroSubtitle: "Your Malakoff → CDG Airport transfer at €55 — €75. 33 km, direct to Roissy.",
      description: "CDG Airport is 35 min from Malakoff via the northern Peripherique and A1.",
      routeDescription: "Via the northern Peripherique then A1 to Roissy-CDG.",
      introduction: "Malakoff, a residential and cultural commune of 31,000 inhabitants, enjoys direct Peripherique access via Porte de Vanves and Porte de Chatillon. The town is celebrated for Theatre 71, a national stage for over fifty years showcasing France's finest contemporary performers. With more than 200 active associations, Malakoff has one of the densest community networks in Hauts-de-Seine. CDG Airport, Air France's international hub serving 300+ destinations, is reachable in 35 minutes via the Peripherique and A1. The taxi provides a direct, comfortable transfer, avoiding the tedious metro 13 to RER B connections through the crowded Chatelet-Les Halles interchange.",
      itineraire: "Your driver joins the Peripherique via Porte de Vanves, heads north to Porte de la Chapelle, then takes the A1 to Roissy. Tolls ~€3 (included). Alternative via A3 from Porte de Bagnolet if northern Peripherique is congested. Allow 35 min off-peak, 45-55 min in rush hour.",
      conseils: "For international flights, arrive 3h before departure. Leave Malakoff 2-2.5h before in rush hour. Best times: before 6:30am, 10am-3pm. CDG Terminal 2 has seven sub-terminals (2A-2G) — check yours. Saturday market at Place du 11-Novembre for last-minute shopping. Driver tracks flight in real time for returns.",
      comparaisonTransport: "Metro 13 + RER B via Chatelet: 55-65 min, 2 changes, ~€12. Taxi at €55-€75 direct in 35 min. For 2-3 passengers (€18-37 each), competitive and far more comfortable with suitcases.",
      faq: [
        { question: "How much?", answer: "€55-75 sedan, €98 van. Fixed fare, tolls included (~€3)." },
        { question: "How long?", answer: "35 min off-peak, 45-55 min in rush hour." },
        { question: "Student pickup?", answer: "Yes, pickup at student residence or anywhere in Malakoff." },
        { question: "Waiting at CDG?", answer: "Yes, driver in arrivals with your name. Real-time flight tracking." },
        { question: "Night booking?", answer: "Yes, 24/7 service including nights and weekends." }
      ],
    }
  ),
  // ═══════════════════════════════════════════════════════════
  // VANVES (28 000 hab.)
  // ═══════════════════════════════════════════════════════════
  hdsSERoute(
    "taxi-vanves-orly", "Vanves", "Aéroport d'Orly",
    48.8205, 2.2889, 48.7262, 2.3652,
    16, 20, "30 — 40 €", "aeroport",
    ["Périphérique", "A6", "Lycée Michelet", "Parc Frédéric Pic", "Transilien N"],
    30, 40, 52, 32, "Périph. + A6", "0 €", "vanves", "aeroport-orly",
    ["taxi-vanves-cdg", "taxi-malakoff-orly", "taxi-chatillon-orly", "taxi-issy-les-moulineaux-orly", "taxi-clamart-orly"],
    ["aeroport", "orly", "vanves", "hauts-de-seine", "lycee-michelet"],
    {
      metaTitle: "Taxi Vanves → Orly | 16 km, dès 30 € | TaxiNeo",
      metaDescription: "Transfert taxi Vanves vers Orly. 20 min via Périph. + A6. Lycée Michelet, Parc F. Pic. Prix fixe 30-40 €.",
      heroTitle: "Taxi Vanves → Aéroport d'Orly",
      heroSubtitle: "Transfert Vanves → Aéroport d'Orly au prix fixe de 30 — 40 €. 16 km, direct par le Périphérique.",
      description: "L'aéroport d'Orly est à 20 min de Vanves via le Périphérique sud et l'A6.",
      routeDescription: "L'itinéraire emprunte le Périphérique depuis la Porte de Châtillon puis l'A6 vers Orly.",
      introduction: "Vanves est la plus petite commune des Hauts-de-Seine par sa superficie — seulement 155 hectares — mais elle compense largement par son charme résidentiel et son patrimoine remarquable. La ville est dominée par le lycée Michelet, ancien domaine royal classé monument historique, dont le parc de 6 hectares constitue un véritable poumon vert au coeur de la commune. Fondé en 1798, ce lycée prestigieux occupe les bâtiments d'un ancien château construit pour Louvois, ministre de la Guerre de Louis XIV, et ses jardins à la française sont ouverts au public lors des Journées du patrimoine. Le parc Frédéric Pic, autre espace vert apprécié des Vanvéens, offre aire de jeux et kiosque à musique dans une ambiance bucolique. La gare de Vanves-Malakoff (Transilien N) relie Montparnasse en 8 minutes, attestant de l'excellente desserte de la commune. Malgré sa petite taille, Vanves affiche un dynamisme commercial avec ses rues piétonnes et son marché dominical. Le transfert vers Orly est direct : 16 kilomètres par le Périphérique et l'A6, sans péage, en 20 minutes porte-à-terminal.",
      itineraire: "Votre chauffeur quitte Vanves en direction de la Porte de Châtillon pour accéder au boulevard Périphérique sud. Il emprunte ensuite le Périphérique en direction de l'est, passant par la Porte d'Orléans et la Porte d'Italie, avant de rejoindre l'A6a direction Lyon/Orly. La sortie Aéroport d'Orly est clairement indiquée. Aucun péage sur l'ensemble du parcours. En conditions de circulation fluide, comptez 20 minutes. Aux heures de pointe (7h30-9h30, 17h-19h30), le Périphérique sud peut être saturé : prévoyez 28 à 32 minutes. L'itinéraire alternatif par Châtillon et Bagneux via la D906 puis l'A6 permet parfois d'éviter les embouteillages du Périphérique.",
      conseils: "Vanves est si compacte que votre chauffeur arrive en quelques minutes depuis n'importe quel point de la commune. Les Journées du patrimoine (troisième week-end de septembre) ouvrent les portes du magnifique parc du lycée Michelet — à visiter avant un départ en voyage. Précisez votre terminal Orly (1-4) lors de la réservation. Le parking d'Orly coûte 25-35 €/jour : l'aller-retour taxi (60-80 €) est rentable dès 2 jours. La gare Vanves-Malakoff n'offre aucune correspondance vers Orly par les transports en commun — le taxi est la solution la plus logique pour ce trajet. Pour le retour, votre chauffeur vous attend en zone d'arrivée avec votre nom, suivi de vol en temps réel.",
      comparaisonTransport: "Transilien N + métro + Orlyval : 1h minimum, 2-3 correspondances, ~16 €. Le taxi à 30-40 € est direct en 20 min. À 2 passagers (15-20 €/pers.), le taxi coûte autant que les transports mais en 3 fois moins de temps.",
      faq: [
        { question: "Quel est le prix ?", answer: "30-40 € en berline, 52 € en van. Tarif fixe, aucun péage." },
        { question: "Combien de temps ?", answer: "20 min hors pointe, 28-32 min en heures chargées." },
        { question: "La plus petite ville du 92 ?", answer: "Oui, 155 hectares. Votre chauffeur est chez vous en minutes." },
        { question: "Péages ?", answer: "Aucun. Périphérique et A6 gratuits sur ce trajet." },
        { question: "Vol matinal ?", answer: "Oui, service dès 4h du matin. Réservez la veille." }
      ],
    },
    {
      metaTitle: "Taxi Vanves → Orly | 16 km, from €30 | TaxiNeo",
      metaDescription: "Taxi from Vanves to Orly Airport. 20 min via ring road + A6. Lycee Michelet, Parc F. Pic. Fixed price €30-40.",
      heroTitle: "Taxi Vanves → Orly Airport",
      heroSubtitle: "Your Vanves → Orly Airport transfer at €30 — €40. 16 km, via the Peripherique.",
      description: "Orly Airport is 20 min from Vanves via the southern Peripherique and A6.",
      routeDescription: "Via the Peripherique from Porte de Chatillon then A6 to Orly.",
      introduction: "Vanves is the smallest commune in Hauts-de-Seine by area — just 155 hectares — yet packs remarkable character and heritage. The town is dominated by Lycee Michelet, a former royal estate classified as a historic monument, whose 6-hectare park provides a green oasis at the heart of the commune. Founded in 1798 in buildings originally constructed for Louvois, Louis XIV's Minister of War, the school's French gardens open to the public during Heritage Days. Parc Frederic Pic offers playgrounds and a bandstand in a bucolic setting. The Vanves-Malakoff station (Transilien N) reaches Montparnasse in 8 minutes. Despite its compact size, Vanves thrives with pedestrian streets and a lively Sunday market. The Orly transfer is direct and toll-free: 16 km via the Peripherique and A6 in 20 minutes.",
      itineraire: "Your driver heads to Porte de Chatillon for the southern Peripherique, goes east past Porte d'Orleans and Porte d'Italie, then takes the A6 to Orly. No tolls. Allow 20 min off-peak, 28-32 min in rush hour. Alternative via D906 through Chatillon and Bagneux if Peripherique is congested.",
      conseils: "Vanves is so compact your driver arrives within minutes from any point. Heritage Days (third weekend of September) open Lycee Michelet's magnificent park. Specify Orly terminal (1-4). Orly parking €25-35/day — return taxi cheaper from 2 days. No direct public transport from Vanves-Malakoff station to Orly. Driver tracks flight for returns.",
      comparaisonTransport: "Transilien N + metro + Orlyval: 1h+, 2-3 changes, ~€16. Taxi at €30-€40 direct in 20 min. For 2 passengers (€15-20 each), same cost as public transport but 3 times faster.",
      faq: [
        { question: "How much?", answer: "€30-40 sedan, €52 van. Fixed fare, no tolls." },
        { question: "How long?", answer: "20 min off-peak, 28-32 min in rush hour." },
        { question: "Smallest town in 92?", answer: "Yes, 155 hectares. Driver reaches you within minutes." },
        { question: "Tolls?", answer: "None. Peripherique and A6 are free." },
        { question: "Early flight?", answer: "Yes, service from 4am. Book the night before." }
      ],
    }
  ),
  hdsSERoute(
    "taxi-vanves-cdg", "Vanves", "Aéroport CDG",
    48.8205, 2.2889, 49.0097, 2.5479,
    34, 35, "60 — 80 €", "aeroport",
    ["Périphérique", "A1", "Lycée Michelet", "Roissy", "Transilien N"],
    60, 80, 105, 55, "Périph. + A1", "~3 €", "vanves", "aeroport-cdg",
    ["taxi-vanves-orly", "taxi-malakoff-cdg", "taxi-chatillon-cdg", "taxi-clamart-cdg", "taxi-issy-les-moulineaux-cdg"],
    ["aeroport", "cdg", "roissy", "vanves", "hauts-de-seine"],
    {
      metaTitle: "Taxi Vanves → CDG | 34 km, dès 60 € | TaxiNeo",
      metaDescription: "Transfert taxi Vanves vers Roissy CDG. 35 min via Périph. + A1. Lycée Michelet, Transilien N. Prix fixe 60-80 €.",
      heroTitle: "Taxi Vanves → Aéroport CDG",
      heroSubtitle: "Transfert Vanves → Aéroport Charles de Gaulle au prix fixe de 60 — 80 €. 34 km, direct.",
      description: "L'aéroport CDG est à 35 min de Vanves via le Périphérique nord et l'A1.",
      routeDescription: "L'itinéraire emprunte le Périphérique nord puis l'A1 direction Roissy.",
      introduction: "Le transfert en taxi de Vanves vers l'aéroport Charles de Gaulle est la solution privilégiée des Vanvéens pour rejoindre le premier aéroport de France sans les contraintes des transports en commun. Vanves, plus petite commune du département des Hauts-de-Seine avec ses 155 hectares et 28 000 habitants, est paradoxalement l'une des mieux connectées grâce à la gare Vanves-Malakoff (Transilien N vers Montparnasse en 8 min) et au métro 13 tout proche. Cependant, aucune de ces lignes ne mène directement à CDG — il faudrait combiner le Transilien ou le métro avec le RER B, soit au minimum deux correspondances et plus d'une heure de trajet. Le lycée Michelet, joyau architectural de la ville, attire chaque année des visiteurs lors des Journées du patrimoine. Le parc Frédéric Pic et les rues commerçantes du centre ajoutent au cadre de vie agréable. CDG, desservant plus de 300 destinations mondiales avec 70 millions de passagers par an, est accessible depuis Vanves en 35 minutes par le Périphérique et l'A1, pour un tarif fixe de 60 à 80 euros incluant les péages. Le taxi assure un transfert porte-à-terminal, avec prise en charge de tous vos bagages.",
      itineraire: "Votre chauffeur quitte Vanves par la Porte de Châtillon ou la Porte de Vanves pour rejoindre le boulevard Périphérique. Il emprunte la voie nord en direction de la Porte de la Chapelle, puis accède à l'A1 direction Lille/Roissy. Le trajet passe à proximité du Stade de France à Saint-Denis et longe le Parc des Expositions de Villepinte avant d'arriver aux terminaux de CDG. Les péages sont d'environ 3 € (inclus dans le tarif). En conditions normales, comptez 35 minutes. Aux heures de pointe (7h-9h30, 17h-19h30), prévoyez 45 à 55 minutes. L'alternative par l'A3 via Bagnolet est envisagée par le chauffeur en cas de saturation du Périphérique nord.",
      conseils: "Depuis Vanves, la petite taille de la commune est un avantage : votre chauffeur est chez vous en quelques minutes où que vous habitiez. Pour les vols internationaux, prévoyez d'arriver 3h avant à CDG — quittez Vanves 2h à 2h30 avant le vol en semaine. Les créneaux les plus fluides sont avant 6h30 et entre 10h et 15h. Précisez votre terminal CDG (T1, T2A-G, T3). Le parking longue durée CDG coûte 20-30 €/jour : un aller-retour taxi (120-160 €) est rentable dès 4-5 jours. Pour le retour, réservez en avance — suivi de vol en temps réel, chauffeur en zone d'arrivée avec panneau nominatif.",
      comparaisonTransport: "Transilien N ou métro 13 + RER B : 1h10-1h20, 2-3 correspondances, ~14 €. Le taxi à 60-80 € est direct en 35 min. À 2-3 passagers (20-40 €/pers.), le taxi est très compétitif face au temps perdu dans les transports.",
      faq: [
        { question: "Quel est le prix ?", answer: "60-80 € en berline, 105 € en van. Tarif fixe, péages inclus (~3 €)." },
        { question: "Combien de temps ?", answer: "35 min hors pointe, 45-55 min en heures chargées." },
        { question: "Chauffeur en attente à CDG ?", answer: "Oui, en zone d'arrivée avec votre nom. Suivi de vol gratuit." },
        { question: "Quel itinéraire ?", answer: "Périphérique nord + A1. Alternative par A3 si trafic chargé." },
        { question: "Van pour famille ?", answer: "Oui, van 7 places à 105 €. Espace pour poussette et bagages." }
      ],
    },
    {
      metaTitle: "Taxi Vanves → CDG | 34 km, from €60 | TaxiNeo",
      metaDescription: "Taxi from Vanves to CDG Airport. 35 min via ring road + A1. Lycee Michelet, Transilien N. Fixed price €60-80.",
      heroTitle: "Taxi Vanves → CDG Airport",
      heroSubtitle: "Your Vanves → CDG Airport transfer at €60 — €80. 34 km, direct to Roissy.",
      description: "CDG Airport is 35 min from Vanves via the northern Peripherique and A1.",
      routeDescription: "Via the northern Peripherique then A1 to Roissy.",
      introduction: "The taxi transfer from Vanves to Charles de Gaulle Airport is the preferred solution for Vanves residents needing to reach France's largest airport without public transport hassles. Vanves, the smallest commune in Hauts-de-Seine at just 155 hectares with 28,000 inhabitants, is paradoxically well-connected via the Vanves-Malakoff station (Transilien N, 8 min to Montparnasse) and nearby metro 13. However, neither line leads directly to CDG, requiring at least two changes and over an hour of travel. The historic Lycee Michelet, an architectural gem, draws visitors during Heritage Days. CDG, serving 300+ worldwide destinations with 70 million annual passengers, is reachable from Vanves in 35 minutes via the Peripherique and A1, at a fixed fare of €60-80 including tolls.",
      itineraire: "Your driver leaves Vanves via Porte de Chatillon or Porte de Vanves, takes the northern Peripherique to Porte de la Chapelle, then the A1 to Roissy. Passes near Stade de France and Villepinte Exhibition Centre. Tolls ~€3 (included). Allow 35 min off-peak, 45-55 min in rush hour. Alternative via A3 from Bagnolet if needed.",
      conseils: "Vanves's compact size means your driver arrives within minutes from any address. For international flights, arrive 3h early at CDG — leave Vanves 2-2.5h before. Best times: before 6:30am, 10am-3pm. Specify CDG terminal (T1, T2A-G, T3). CDG parking €20-30/day — return taxi cheaper from 4-5 days. Book return for real-time flight tracking.",
      comparaisonTransport: "Transilien N or metro 13 + RER B: 1h10-1h20, 2-3 changes, ~€14. Taxi at €60-€80 direct in 35 min. For 2-3 passengers (€20-40 each), very competitive against time lost in public transport.",
      faq: [
        { question: "How much?", answer: "€60-80 sedan, €105 van. Fixed fare, tolls included (~€3)." },
        { question: "How long?", answer: "35 min off-peak, 45-55 min in rush hour." },
        { question: "Driver waiting at CDG?", answer: "Yes, in arrivals with your name. Free flight tracking." },
        { question: "Which route?", answer: "Northern Peripherique + A1. Alternative via A3 if traffic heavy." },
        { question: "Family van?", answer: "Yes, 7-seat van at €105. Room for stroller and luggage." }
      ],
    }
  ),
  // ═══════════════════════════════════════════════════════════
  // CHATILLON (37 000 hab.)
  // ═══════════════════════════════════════════════════════════
  hdsSERoute(
    "taxi-chatillon-orly", "Châtillon", "Aéroport d'Orly",
    48.8100, 2.2935, 48.7262, 2.3652,
    14, 18, "25 — 35 €", "aeroport",
    ["A86", "A6", "Métro 13", "Coulée verte", "Fort de Châtillon"],
    25, 35, 48, 30, "A86 + A6", "~2 €", "chatillon", "aeroport-orly",
    ["taxi-chatillon-cdg", "taxi-montrouge-orly", "taxi-clamart-orly", "taxi-bagneux-orly", "taxi-antony-orly"],
    ["aeroport", "orly", "chatillon", "hauts-de-seine", "metro-13"],
    {
      metaTitle: "Taxi Châtillon → Orly | 14 km, dès 25 € | TaxiNeo",
      metaDescription: "Transfert taxi Châtillon vers Orly. 18 min via A86 + A6. Métro 13, Fort de Châtillon. Prix fixe 25-35 €.",
      heroTitle: "Taxi Châtillon → Aéroport d'Orly",
      heroSubtitle: "Transfert Châtillon → Aéroport d'Orly au prix fixe de 25 — 35 €. 14 km, direct par l'A86.",
      description: "L'aéroport d'Orly est à 18 min de Châtillon via l'A86 et l'A6.",
      routeDescription: "L'itinéraire emprunte l'A86 direction sud puis l'A6 vers les terminaux d'Orly.",
      introduction: "Châtillon est une commune dynamique de 37 000 habitants située au coeur des Hauts-de-Seine, connue pour abriter le terminus sud de la ligne 13 du métro (station Châtillon-Montrouge), l'un des noeuds de transport les plus fréquentés du département. La ville possède un patrimoine historique singulier avec le Fort de Châtillon, construit entre 1874 et 1880 dans le cadre de la ceinture fortifiée de Paris. Ce fort a joué un rôle majeur dans l'histoire scientifique française : c'est là que le Commissariat à l'énergie atomique (CEA) a installé ses premiers laboratoires en 1946, sous la direction de Frédéric Joliot-Curie, pour mener les premières expériences nucléaires françaises. Le site est aujourd'hui partiellement ouvert au public. La Coulée verte de Châtillon, ancienne voie ferrée reconvertie en promenade paysagère, traverse la ville du nord au sud et offre un parcours piéton et cyclable agréable. Le centre commercial de Châtillon et les commerces de proximité le long de l'avenue de Paris complètent l'offre urbaine. Le transfert vers Orly est rapide : 14 kilomètres par l'A86 et l'A6, en seulement 18 minutes.",
      itineraire: "Votre chauffeur quitte Châtillon en empruntant l'A86 direction sud depuis l'échangeur de Châtillon. L'autoroute A86 contourne Paris par l'ouest et le sud, passant par Bagneux et Arcueil. À la jonction avec l'A6, votre chauffeur bifurque vers le sud direction Lyon/Orly. Les terminaux d'Orly sont ensuite directement accessibles. Les péages sont minimes, environ 2 € (inclus dans le tarif). En conditions normales, le trajet prend 18 minutes. Aux heures de pointe, notamment le matin entre 7h30 et 9h et le soir entre 17h et 19h, l'A86 peut être chargée : prévoyez 25 à 30 minutes. L'alternative par le Périphérique via la Porte de Châtillon est parfois plus rapide selon les conditions de trafic en temps réel.",
      conseils: "La station Châtillon-Montrouge est le terminus de la ligne 13 — c'est un excellent point de repère pour les chauffeurs. Indiquez si vous êtes plus proche de la station ou du Fort. Les vols du matin depuis Orly bénéficient d'un trajet fluide si vous partez avant 7h. Précisez votre terminal (Orly 1-4). Le Fort de Châtillon, site historique du CEA, mérite une visite lors des Journées du patrimoine. Le parking Orly coûte 25-35 €/jour — l'aller-retour taxi (50-70 €) est économique dès le 2e jour d'absence. Pour le retour, votre chauffeur vous attend en zone d'arrivée avec suivi en temps réel de votre vol.",
      comparaisonTransport: "Métro 13 (Châtillon-Montrouge) + correspondance + Orlyval : 55-65 min, ~14 €. Le taxi à 25-35 € est direct en 18 min. À 2 passagers (12-17 €/pers.), prix quasi identique mais 3 fois plus rapide.",
      faq: [
        { question: "Quel est le prix ?", answer: "25-35 € en berline, 48 € en van. Tarif fixe, péages inclus (~2 €)." },
        { question: "Combien de temps ?", answer: "18 min normalement, 25-30 min en heures de pointe." },
        { question: "Le Fort de Châtillon ?", answer: "Ancien site CEA, berceau du nucléaire français. Prise en charge possible à proximité." },
        { question: "Péages ?", answer: "Environ 2 € sur l'A86. Inclus dans le tarif fixe." },
        { question: "Service tôt le matin ?", answer: "Oui, 24h/24. Réservez la veille pour un vol matinal." }
      ],
    },
    {
      metaTitle: "Taxi Chatillon → Orly | 14 km, from €25 | TaxiNeo",
      metaDescription: "Taxi from Chatillon to Orly Airport. 18 min via A86 + A6. Metro 13, Fort de Chatillon. Fixed price €25-35.",
      heroTitle: "Taxi Chatillon → Orly Airport",
      heroSubtitle: "Your Chatillon → Orly Airport transfer at €25 — €35. 14 km, via the A86.",
      description: "Orly Airport is 18 min from Chatillon via the A86 and A6.",
      routeDescription: "Via the A86 south then A6 to Orly terminals.",
      introduction: "Chatillon is a dynamic commune of 37,000 residents in the heart of Hauts-de-Seine, home to the southern terminus of metro line 13 (Chatillon-Montrouge station), one of the department's busiest transport hubs. The town has unique historical heritage in the Fort de Chatillon, built between 1874 and 1880 as part of Paris's defensive ring. This fort played a pivotal role in French science: in 1946, the Atomic Energy Commission (CEA) established its first laboratories here under Frederic Joliot-Curie for France's earliest nuclear experiments. The Coulee Verte, a former railway converted into a landscaped walkway, crosses the town north to south. The transfer to Orly takes just 18 minutes via the A86 and A6.",
      itineraire: "Your driver takes the A86 south from the Chatillon interchange, bypassing Paris through Bagneux and Arcueil, then joins the A6 towards Orly. Tolls ~€2 (included). Allow 18 min off-peak, 25-30 min in rush hour. Alternative via Peripherique from Porte de Chatillon depending on traffic.",
      conseils: "Chatillon-Montrouge station (metro 13 terminus) is a good landmark for drivers. Indicate if you are near the station or the Fort. Leave before 7am for smooth morning flights. Specify Orly terminal (1-4). Fort de Chatillon opens during Heritage Days. Orly parking €25-35/day — return taxi cheaper from day 2. Driver tracks flight for returns.",
      comparaisonTransport: "Metro 13 + connections + Orlyval: 55-65 min, ~€14. Taxi at €25-€35 direct in 18 min. For 2 passengers (€12-17 each), nearly same price but 3 times faster.",
      faq: [
        { question: "How much?", answer: "€25-35 sedan, €48 van. Fixed fare, tolls included (~€2)." },
        { question: "How long?", answer: "18 min normally, 25-30 min in rush hour." },
        { question: "Fort de Chatillon?", answer: "Former CEA site, birthplace of French nuclear science. Pickup nearby available." },
        { question: "Tolls?", answer: "About €2 on A86. Included in fixed fare." },
        { question: "Early morning?", answer: "Yes, 24/7. Book the night before for morning flights." }
      ],
    }
  ),
  hdsSERoute(
    "taxi-chatillon-cdg", "Châtillon", "Aéroport CDG",
    48.8100, 2.2935, 49.0097, 2.5479,
    35, 40, "60 — 80 €", "aeroport",
    ["A86", "A1", "Métro 13", "Roissy", "Fort de Châtillon"],
    60, 80, 105, 60, "A86 + A1", "~5 €", "chatillon", "aeroport-cdg",
    ["taxi-chatillon-orly", "taxi-montrouge-cdg", "taxi-clamart-cdg", "taxi-bagneux-cdg", "taxi-antony-cdg"],
    ["aeroport", "cdg", "roissy", "chatillon", "hauts-de-seine"],
    {
      metaTitle: "Taxi Châtillon → CDG | 35 km, dès 60 € | TaxiNeo",
      metaDescription: "Transfert taxi Châtillon vers Roissy CDG. 40 min via A86 + A1. Métro 13, Fort de Châtillon. Prix fixe 60-80 €.",
      heroTitle: "Taxi Châtillon → Aéroport CDG",
      heroSubtitle: "Transfert Châtillon → Aéroport Charles de Gaulle au prix fixe de 60 — 80 €. 35 km, direct.",
      description: "L'aéroport CDG est à 40 min de Châtillon via l'A86 et l'A1.",
      routeDescription: "L'itinéraire emprunte l'A86 nord puis l'A1 direction Roissy-CDG.",
      introduction: "Le transfert de Châtillon vers l'aéroport Charles de Gaulle représente un trajet de 35 kilomètres que le taxi accomplit en 40 minutes par l'A86 et l'A1. Châtillon, 37 000 habitants, est une ville qui se distingue par son mélange unique d'histoire scientifique et de vie urbaine moderne. Le Fort de Châtillon, où le CEA a conduit les premières recherches nucléaires françaises sous l'impulsion de Frédéric Joliot-Curie, confère à la commune un prestige scientifique rare en Île-de-France. La Coulée verte, promenade plantée sur une ancienne voie ferrée, relie le centre-ville aux communes voisines de Clamart et Fontenay-aux-Roses, offrant un axe de mobilité douce apprécié des habitants. Le métro 13, dont le terminus est à Châtillon-Montrouge, relie Paris en 25 minutes mais ne conduit pas directement à CDG. Les correspondances nécessaires (métro + RER B) prennent au moins une heure avec les bagages. Le taxi offre donc un gain de temps considérable : 40 minutes de porte à terminal, avec vos valises prises en charge.",
      itineraire: "Votre chauffeur emprunte l'A86 depuis l'échangeur de Châtillon en direction du nord. L'autoroute contourne Paris par l'ouest, passant par Boulogne-Billancourt et la Défense, puis rejoint le nord parisien à hauteur de Gennevilliers et Saint-Denis. Il bifurque ensuite sur l'A1 direction Lille/Roissy pour accéder directement aux terminaux de CDG. Les péages totaux sont d'environ 5 € (inclus dans le tarif). Comptez 40 minutes en conditions fluides, 50 à 60 minutes aux heures de pointe. L'itinéraire alternatif par le Périphérique (Porte de Châtillon → Porte de la Chapelle → A1) est privilégié quand l'A86 ouest est saturée.",
      conseils: "Châtillon est bien positionné pour un départ vers CDG : l'A86 est accessible en quelques minutes depuis tous les quartiers. Pour les vols long-courriers, partez 2h30 avant le décollage en semaine. Les créneaux les plus fluides sur l'A86 sont avant 6h30 et après 20h. Précisez votre terminal CDG (T1, T2A-G ou T3). La Coulée verte de Châtillon est parfaite pour une promenade avant un long voyage. Le parking CDG coûte 20-30 €/jour : un aller-retour taxi (120-160 €) est économique dès 5 jours. Pour le retour, suivi de vol en temps réel et chauffeur avec panneau nominatif en zone d'arrivée.",
      comparaisonTransport: "Métro 13 + RER B via Châtelet : 1h05-1h20, 2 correspondances, ~14 €. Le taxi à 60-80 € est direct en 40 min. À 2-3 passagers (20-40 €/pers.), gain de temps et confort incomparables.",
      faq: [
        { question: "Quel est le prix ?", answer: "60-80 € en berline, 105 € en van. Tarif fixe, péages inclus (~5 €)." },
        { question: "Combien de temps ?", answer: "40 min hors pointe, 50-60 min en heures chargées." },
        { question: "Quel itinéraire ?", answer: "A86 nord + A1, ou Périphérique + A1 selon le trafic." },
        { question: "Attente à CDG ?", answer: "Oui, chauffeur en arrivée avec votre nom. Suivi de vol gratuit." },
        { question: "Facturation pro ?", answer: "Oui, facture professionnelle par email pour notes de frais." }
      ],
    },
    {
      metaTitle: "Taxi Chatillon → CDG | 35 km, from €60 | TaxiNeo",
      metaDescription: "Taxi from Chatillon to CDG Airport. 40 min via A86 + A1. Metro 13, Fort de Chatillon. Fixed price €60-80.",
      heroTitle: "Taxi Chatillon → CDG Airport",
      heroSubtitle: "Your Chatillon → CDG Airport transfer at €60 — €80. 35 km, direct to Roissy.",
      description: "CDG Airport is 40 min from Chatillon via the A86 and A1.",
      routeDescription: "Via the A86 north then A1 to Roissy-CDG.",
      introduction: "The transfer from Chatillon to Charles de Gaulle Airport covers 35 km in 40 minutes via the A86 and A1. Chatillon, population 37,000, is distinguished by its unique blend of scientific history and modern urban life. The Fort de Chatillon, where the CEA conducted France's first nuclear research under Frederic Joliot-Curie, gives the town a rare scientific prestige. The Coulee Verte, a planted promenade on a former railway, connects the town centre to neighbouring Clamart and Fontenay-aux-Roses. Metro 13 (terminus Chatillon-Montrouge) reaches Paris in 25 minutes but has no direct CDG connection. The necessary changes (metro + RER B) take over an hour with luggage. The taxi saves considerable time: 40 minutes door-to-terminal with luggage handled.",
      itineraire: "Your driver takes the A86 north from the Chatillon interchange, bypassing Paris via Boulogne-Billancourt and La Defense, then joins the A1 to Roissy-CDG. Tolls ~€5 (included). Allow 40 min off-peak, 50-60 min in rush hour. Alternative via Peripherique (Porte de Chatillon to Porte de la Chapelle then A1) when A86 west is congested.",
      conseils: "Chatillon has quick A86 access from all neighbourhoods. For long-haul flights, leave 2.5h before departure on weekdays. Smoothest times on A86: before 6:30am and after 8pm. Specify CDG terminal (T1, T2A-G, T3). Coulee Verte perfect for a pre-trip stroll. CDG parking €20-30/day — return taxi cheaper from 5 days. Real-time flight tracking for returns.",
      comparaisonTransport: "Metro 13 + RER B via Chatelet: 1h05-1h20, 2 changes, ~€14. Taxi at €60-€80 direct in 40 min. For 2-3 passengers (€20-40 each), unmatched time and comfort.",
      faq: [
        { question: "How much?", answer: "€60-80 sedan, €105 van. Fixed fare, tolls included (~€5)." },
        { question: "How long?", answer: "40 min off-peak, 50-60 min in rush hour." },
        { question: "Which route?", answer: "A86 north + A1, or Peripherique + A1 depending on traffic." },
        { question: "Waiting at CDG?", answer: "Yes, driver in arrivals with your name. Free flight tracking." },
        { question: "Business invoice?", answer: "Yes, professional invoice emailed for expenses." }
      ],
    }
  ),
  // ═══════════════════════════════════════════════════════════
  // CLAMART (53 000 hab.)
  // ═══════════════════════════════════════════════════════════
  hdsSERoute(
    "taxi-clamart-orly", "Clamart", "Aéroport d'Orly",
    48.8003, 2.2646, 48.7262, 2.3652,
    14, 18, "30 — 40 €", "aeroport",
    ["A86", "A6", "Forêt de Meudon", "Hôpital Béclère", "Tramway T6"],
    30, 40, 52, 30, "A86 + A6", "~2 €", "clamart", "aeroport-orly",
    ["taxi-clamart-cdg", "taxi-chatillon-orly", "taxi-meudon-orly", "taxi-vanves-orly", "taxi-antony-orly"],
    ["aeroport", "orly", "clamart", "hauts-de-seine", "foret-meudon"],
    {
      metaTitle: "Taxi Clamart → Orly | 14 km, dès 30 € | TaxiNeo",
      metaDescription: "Transfert taxi Clamart vers Orly. 18 min via A86 + A6. Forêt de Meudon, hôpital Béclère. Prix fixe 30-40 €.",
      heroTitle: "Taxi Clamart → Aéroport d'Orly",
      heroSubtitle: "Transfert Clamart → Aéroport d'Orly au prix fixe de 30 — 40 €. 14 km, direct par l'A86.",
      description: "L'aéroport d'Orly est à 18 min de Clamart via l'A86 et l'A6.",
      routeDescription: "L'itinéraire emprunte l'A86 direction sud-est puis l'A6 vers les terminaux d'Orly.",
      introduction: "Clamart est une commune verdoyante de 53 000 habitants des Hauts-de-Seine, réputée pour sa proximité exceptionnelle avec la forêt domaniale de Meudon. Cette forêt de 1 100 hectares, l'une des plus vastes d'Île-de-France, borde le territoire clamartois à l'ouest et au sud, offrant aux résidents un cadre de vie unique entre urbanité et nature. L'hôpital Antoine-Béclère, établissement de l'AP-HP situé à Clamart, est mondialement connu comme le lieu de naissance de la fécondation in vitro en France : c'est ici que le professeur René Frydman et le biologiste Jacques Testart ont réalisé la première FIV française en 1982, donnant naissance à Amandine, premier « bébé-éprouvette » français. L'hôpital reste l'une des maternités les plus réputées d'Île-de-France. Le tramway T6, mis en service en 2014, relie Clamart à Viroflay et Châtillon-Montrouge, améliorant considérablement la desserte de la commune. Le quartier Percy, au nord de la ville, abrite l'hôpital militaire Percy, référence nationale en traitement des brûlures. Le Jardin parisien de la Vallée, espace paysager en contrebas du centre-ville, complète l'offre d'espaces verts. Le transfert vers Orly est efficace : 14 kilomètres par l'A86 et l'A6 en 18 minutes.",
      itineraire: "Votre chauffeur quitte Clamart en direction de l'A86, accessible en quelques minutes depuis le centre-ville ou le quartier Percy. L'autoroute A86 contourne Paris par le sud en passant par le Petit-Clamart et Antony. À la jonction avec l'A6, le chauffeur prend la direction Lyon/Orly pour accéder directement aux terminaux. Les péages sont d'environ 2 € (inclus dans le tarif). Comptez 18 minutes en conditions fluides. Aux heures de pointe (7h30-9h, 17h-19h), l'A86 peut être encombrée entre Clamart et Antony : prévoyez 25 à 30 minutes. L'itinéraire alternatif par la D906 à travers Fontenay-aux-Roses et Bagneux vers l'A6 est possible en cas de saturation de l'A86.",
      conseils: "Si vous résidez près de la forêt de Meudon, profitez d'une dernière promenade dans les sous-bois avant votre départ — les sentiers balisés sont accessibles à pied depuis de nombreux quartiers de Clamart. L'hôpital Béclère génère un trafic important aux heures de visite : évitez la D2 aux abords de l'hôpital entre 14h et 15h. Précisez votre terminal Orly (1-4) lors de la réservation. Le tramway T6 ne dessert pas Orly : le taxi est la liaison la plus directe depuis Clamart. Le parking Orly coûte 25-35 €/jour ; l'aller-retour taxi (60-80 €) est avantageux dès 2 jours. Pour le retour, votre chauffeur suit votre vol en temps réel et vous attend en zone d'arrivée.",
      comparaisonTransport: "Tramway T6 + métro 13 + Orlyval : 1h minimum, 2-3 correspondances, ~16 €. Le taxi à 30-40 € est direct en 18 min. À 2 passagers (15-20 €/pers.), le taxi est à peine plus cher et 3 fois plus rapide.",
      faq: [
        { question: "Quel est le prix ?", answer: "30-40 € en berline, 52 € en van. Tarif fixe, péages inclus (~2 €)." },
        { question: "Combien de temps ?", answer: "18 min normalement, 25-30 min en heures de pointe." },
        { question: "Prise en charge près de l'hôpital Béclère ?", answer: "Oui, prise en charge partout : Béclère, Percy, centre-ville, quartier Forêt." },
        { question: "Transport en commun vers Orly ?", answer: "Pas de liaison directe. T6 + métro + Orlyval = 1h+. Le taxi est en 18 min." },
        { question: "Réservation de nuit ?", answer: "Oui, 24h/24 y compris les week-ends et jours fériés." }
      ],
    },
    {
      metaTitle: "Taxi Clamart → Orly | 14 km, from €30 | TaxiNeo",
      metaDescription: "Taxi from Clamart to Orly Airport. 18 min via A86 + A6. Meudon forest, Beclere hospital. Fixed price €30-40.",
      heroTitle: "Taxi Clamart → Orly Airport",
      heroSubtitle: "Your Clamart → Orly Airport transfer at €30 — €40. 14 km, via the A86.",
      description: "Orly Airport is 18 min from Clamart via the A86 and A6.",
      routeDescription: "Via the A86 south-east then A6 to Orly terminals.",
      introduction: "Clamart is a leafy commune of 53,000 residents in Hauts-de-Seine, famous for its proximity to the Meudon State Forest. This 1,100-hectare forest, one of the largest in Ile-de-France, borders Clamart to the west and south, giving residents a unique blend of urban convenience and natural beauty. Antoine-Beclere Hospital (AP-HP) is globally recognised as the birthplace of IVF in France: Professor Rene Frydman and biologist Jacques Testart performed France's first in-vitro fertilisation here in 1982, resulting in Amandine, the country's first 'test-tube baby.' Tramway T6, opened in 2014, connects Clamart to Viroflay and Chatillon-Montrouge. The Jardin parisien de la Vallee adds to the green landscape. The transfer to Orly is efficient: 14 km via the A86 and A6 in just 18 minutes.",
      itineraire: "Your driver takes the A86 from Clamart, bypassing Paris through Petit-Clamart and Antony, then joins the A6 towards Orly. Tolls ~€2 (included). Allow 18 min off-peak, 25-30 min in rush hour. Alternative via D906 through Fontenay-aux-Roses and Bagneux if A86 congested.",
      conseils: "If you live near Meudon Forest, enjoy a last woodland walk before departure — trails are accessible on foot from many Clamart neighbourhoods. Beclere Hospital creates traffic during visiting hours; avoid the D2 near the hospital 2-3pm. Specify Orly terminal (1-4). T6 tram does not serve Orly — taxi is the most direct link. Orly parking €25-35/day — return taxi cheaper from 2 days. Driver tracks flight for returns.",
      comparaisonTransport: "Tram T6 + metro 13 + Orlyval: 1h+, 2-3 changes, ~€16. Taxi at €30-€40 direct in 18 min. For 2 passengers (€15-20 each), barely more expensive and 3 times faster.",
      faq: [
        { question: "How much?", answer: "€30-40 sedan, €52 van. Fixed fare, tolls included (~€2)." },
        { question: "How long?", answer: "18 min normally, 25-30 min in rush hour." },
        { question: "Pickup near Beclere Hospital?", answer: "Yes, pickup anywhere: Beclere, Percy, city centre, Forest area." },
        { question: "Public transport to Orly?", answer: "No direct link. T6 + metro + Orlyval = 1h+. Taxi: 18 min." },
        { question: "Night booking?", answer: "Yes, 24/7 including weekends and holidays." }
      ],
    }
  ),
  hdsSERoute(
    "taxi-clamart-cdg", "Clamart", "Aéroport CDG",
    48.8003, 2.2646, 49.0097, 2.5479,
    38, 40, "65 — 85 €", "aeroport",
    ["A86", "A1", "Forêt de Meudon", "Roissy", "Hôpital Béclère"],
    65, 85, 110, 60, "A86 + A1", "~5 €", "clamart", "aeroport-cdg",
    ["taxi-clamart-orly", "taxi-chatillon-cdg", "taxi-meudon-orly", "taxi-vanves-cdg", "taxi-antony-cdg"],
    ["aeroport", "cdg", "roissy", "clamart", "hauts-de-seine"],
    {
      metaTitle: "Taxi Clamart → CDG | 38 km, dès 65 € | TaxiNeo",
      metaDescription: "Transfert taxi Clamart vers Roissy CDG. 40 min via A86 + A1. Forêt de Meudon, hôpital Béclère. Prix fixe 65-85 €.",
      heroTitle: "Taxi Clamart → Aéroport CDG",
      heroSubtitle: "Transfert Clamart → Aéroport Charles de Gaulle au prix fixe de 65 — 85 €. 38 km, direct.",
      description: "L'aéroport CDG est à 40 min de Clamart via l'A86 et l'A1.",
      routeDescription: "L'itinéraire emprunte l'A86 nord puis l'A1 direction Roissy-CDG.",
      introduction: "Le transfert en taxi de Clamart vers l'aéroport Charles de Gaulle parcourt 38 kilomètres en 40 minutes par l'A86 et l'A1. Clamart, 53 000 habitants, est l'une des communes les plus vertes des Hauts-de-Seine grâce à la forêt domaniale de Meudon qui longe ses limites occidentales. Cette proximité avec la nature attire des familles et des cadres en quête d'un équilibre entre vie urbaine et accès aux grands espaces. L'hôpital Antoine-Béclère, maternité de référence et berceau de la FIV française (1982), confère à Clamart une renommée médicale internationale. Le quartier Jardin parisien de la Vallée, en contrebas du plateau clamartois, offre un cadre de vie recherché avec ses maisons individuelles et ses espaces paysagers. Le tramway T6, inauguré en 2014, a modernisé la desserte de la ville en la reliant à Châtillon-Montrouge (métro 13) et Viroflay. Cependant, aucune ligne de transport en commun ne relie directement Clamart à CDG : les correspondances nécessaires (T6 + métro 13 + RER B ou bus) prennent plus d'1h30. Le taxi, avec son tarif fixe de 65 à 85 euros, offre un transfert direct et confortable en 40 minutes.",
      itineraire: "Votre chauffeur emprunte l'A86 depuis Clamart en direction du nord, contournant Paris par l'ouest via Boulogne-Billancourt et la Défense. Il rejoint ensuite l'A86 nord vers Gennevilliers et Saint-Denis avant de bifurquer sur l'A1 direction Lille/Roissy. Les terminaux de CDG sont directement accessibles depuis la sortie Roissy de l'A1. Les péages totaux sont d'environ 5 € (inclus dans le tarif). Comptez 40 minutes en conditions fluides, 50 à 60 minutes en heures de pointe. L'itinéraire alternatif par le Périphérique (Porte de Châtillon → Porte de la Chapelle → A1) est parfois plus rapide le week-end.",
      conseils: "Clamart est à environ 40 minutes de CDG en conditions normales — prévoyez de quitter votre domicile 2h30 à 3h avant votre vol pour les destinations internationales. Les meilleurs créneaux sont avant 6h30, entre 10h et 15h, et après 20h. L'A86 au niveau de la Défense peut être lente le matin : votre chauffeur adapte l'itinéraire en temps réel. Précisez votre terminal CDG (T1, T2A-G ou T3). Le parking CDG coûte 20-30 €/jour : un aller-retour taxi (130-170 €) est plus économique dès 5 jours. Profitez de la forêt de Meudon pour une promenade matinale avant un vol de l'après-midi.",
      comparaisonTransport: "T6 + métro 13 + RER B : 1h30+, 3 correspondances, ~16 €. Le taxi à 65-85 € est direct en 40 min. À 2-3 passagers (22-42 €/pers.), le taxi est très compétitif pour un gain de temps majeur.",
      faq: [
        { question: "Quel est le prix ?", answer: "65-85 € en berline, 110 € en van. Tarif fixe, péages inclus (~5 €)." },
        { question: "Combien de temps ?", answer: "40 min hors pointe, 50-60 min en heures chargées." },
        { question: "Prise en charge quartier Forêt ?", answer: "Oui, partout à Clamart : centre, Percy, Forêt, Vallée, Béclère." },
        { question: "Attente à CDG ?", answer: "Oui, chauffeur en arrivée avec panneau nominatif. Suivi de vol gratuit." },
        { question: "Réservation pour le retour ?", answer: "Oui, réservez à l'avance. Même tarif fixe, suivi en temps réel." }
      ],
    },
    {
      metaTitle: "Taxi Clamart → CDG | 38 km, from €65 | TaxiNeo",
      metaDescription: "Taxi from Clamart to CDG Airport. 40 min via A86 + A1. Meudon forest, Beclere hospital. Fixed price €65-85.",
      heroTitle: "Taxi Clamart → CDG Airport",
      heroSubtitle: "Your Clamart → CDG Airport transfer at €65 — €85. 38 km, direct to Roissy.",
      description: "CDG Airport is 40 min from Clamart via the A86 and A1.",
      routeDescription: "Via the A86 north then A1 to Roissy-CDG.",
      introduction: "The taxi transfer from Clamart to Charles de Gaulle Airport covers 38 km in 40 minutes via the A86 and A1. Clamart, population 53,000, is one of the greenest communes in Hauts-de-Seine thanks to the Meudon State Forest along its western border. This proximity to nature attracts families and professionals seeking a balance between urban living and open spaces. Antoine-Beclere Hospital, a reference maternity unit and birthplace of French IVF (1982), gives Clamart international medical renown. Tramway T6, inaugurated in 2014, modernised local transport by connecting to Chatillon-Montrouge (metro 13) and Viroflay. However, no public transport line connects Clamart directly to CDG — required connections (T6 + metro 13 + RER B) take over 1h30. The taxi at €65-85 fixed fare provides a direct, comfortable 40-minute transfer.",
      itineraire: "Your driver takes the A86 north from Clamart, bypassing Paris west via Boulogne-Billancourt and La Defense, then continues to Gennevilliers and Saint-Denis before joining the A1 to Roissy. Tolls ~€5 (included). Allow 40 min off-peak, 50-60 min in rush hour. Alternative via Peripherique (Porte de Chatillon to Porte de la Chapelle, A1) sometimes faster on weekends.",
      conseils: "Clamart is about 40 min from CDG normally — leave 2.5-3h before international flights. Best times: before 6:30am, 10am-3pm, after 8pm. A86 near La Defense can be slow mornings; driver adjusts in real time. Specify CDG terminal (T1, T2A-G, T3). CDG parking €20-30/day — return taxi cheaper from 5 days. Enjoy Meudon Forest for a morning walk before an afternoon flight.",
      comparaisonTransport: "T6 + metro 13 + RER B: 1h30+, 3 changes, ~€16. Taxi at €65-€85 direct in 40 min. For 2-3 passengers (€22-42 each), very competitive for a major time saving.",
      faq: [
        { question: "How much?", answer: "€65-85 sedan, €110 van. Fixed fare, tolls included (~€5)." },
        { question: "How long?", answer: "40 min off-peak, 50-60 min in rush hour." },
        { question: "Pickup near forest area?", answer: "Yes, anywhere in Clamart: centre, Percy, Forest, Vallee, Beclere." },
        { question: "Waiting at CDG?", answer: "Yes, driver in arrivals with name board. Free flight tracking." },
        { question: "Return booking?", answer: "Yes, book ahead. Same fixed fare, real-time tracking." }
      ],
    }
  ),
  // ═══════════════════════════════════════════════════════════
  // BAGNEUX (42 000 hab.)
  // ═══════════════════════════════════════════════════════════
  hdsSERoute(
    "taxi-bagneux-orly", "Bagneux", "Aéroport d'Orly",
    48.7971, 2.3145, 48.7262, 2.3652,
    13, 15, "25 — 35 €", "aeroport",
    ["A6", "Métro 4", "Cimetière parisien", "ZAC Victor Hugo", "Hauts-de-Seine"],
    25, 35, 48, 28, "A6", "0 €", "bagneux", "aeroport-orly",
    ["taxi-bagneux-cdg", "taxi-montrouge-orly", "taxi-chatillon-orly", "taxi-antony-orly", "taxi-clamart-orly"],
    ["aeroport", "orly", "bagneux", "hauts-de-seine", "metro-4"],
    {
      metaTitle: "Taxi Bagneux → Orly | 13 km, dès 25 € | TaxiNeo",
      metaDescription: "Transfert taxi Bagneux vers Orly. 15 min via A6. Métro 4 prolongé, cimetière parisien. Prix fixe 25-35 €.",
      heroTitle: "Taxi Bagneux → Aéroport d'Orly",
      heroSubtitle: "Transfert Bagneux → Aéroport d'Orly au prix fixe de 25 — 35 €. 13 km, direct par l'A6.",
      description: "L'aéroport d'Orly est à seulement 15 min de Bagneux via l'A6.",
      routeDescription: "L'itinéraire emprunte la D920 puis l'A6 direction Orly.",
      introduction: "Bagneux est une commune en pleine transformation de 42 000 habitants, située au sud des Hauts-de-Seine. La ville a connu un tournant historique en 2024 avec le prolongement de la ligne 4 du métro, qui dessert désormais deux nouvelles stations sur son territoire : Barbara et Bagneux-Lucie Aubrac. Ce prolongement, attendu depuis des décennies par les Balnéolais, a considérablement amélioré la connexion de la ville avec le centre de Paris — Montparnasse est désormais accessible en 15 minutes. La commune accueille le grand cimetière parisien de Bagneux, deuxième plus grand cimetière de la région parisienne après celui du Père-Lachaise, où reposent de nombreuses personnalités. La ZAC Victor Hugo, vaste projet de rénovation urbaine au nord de la ville, transforme un ancien quartier d'habitat social en un éco-quartier mixte avec logements, bureaux, commerces et espaces verts. Le quartier nord rénové illustre la mutation urbaine de Bagneux, qui attire de plus en plus de jeunes familles et de primo-accédants séduits par les prix immobiliers encore abordables et la nouvelle desserte métro. Le transfert vers Orly est l'un des plus courts et économiques du sud des Hauts-de-Seine : 13 kilomètres par l'A6, sans péage, en 15 minutes seulement.",
      itineraire: "Votre chauffeur quitte Bagneux par la D920 en direction du sud, traversant rapidement Bourg-la-Reine et rejoignant l'A6 à la hauteur d'Antony. L'autoroute A6 mène directement aux terminaux d'Orly en quelques minutes. Aucun péage sur ce parcours. Le trajet est remarquablement court : 15 minutes en conditions normales. Aux heures de pointe (7h30-9h et 17h-19h), la D920 peut être encombrée à la traversée de Bourg-la-Reine : prévoyez alors 22 à 28 minutes. L'alternative par l'A86 via Arcueil et Rungis est disponible si la D920 est saturée. Votre chauffeur ajuste l'itinéraire en temps réel pour le trajet le plus rapide.",
      conseils: "Avec le prolongement du métro 4 en 2024, Bagneux est devenue l'une des communes les mieux desservies du sud du 92. Cependant, le métro 4 ne conduit pas directement à Orly — il faudrait rejoindre Denfert-Rochereau puis prendre l'Orlyval, soit 40 minutes. Le taxi en 15 minutes reste imbattable. Précisez votre terminal Orly (1-4) lors de la réservation. Si vous résidez dans le quartier de la ZAC Victor Hugo ou près du métro Barbara, votre chauffeur vous prend en charge à l'adresse exacte. Le parking Orly coûte 25-35 €/jour ; l'aller-retour taxi (50-70 €) est rentable dès 2 jours. Pour le retour, votre chauffeur suit votre vol et vous attend en zone d'arrivée.",
      comparaisonTransport: "Métro 4 (Bagneux-Lucie Aubrac) + RER B (Denfert) + Orlyval : 40-45 min, 2 correspondances, ~14 €. Le taxi à 25-35 € est direct en 15 min, sans péage. À 2 passagers (12-17 €/pers.), le taxi coûte autant que les transports en 3 fois moins de temps.",
      faq: [
        { question: "Quel est le prix ?", answer: "25-35 € en berline, 48 € en van. Tarif fixe, aucun péage." },
        { question: "Combien de temps ?", answer: "15 min normalement, 22-28 min en heures de pointe." },
        { question: "Le métro 4 va-t-il à Orly ?", answer: "Non. Le métro 4 prolongé dessert Bagneux mais pas Orly. Le taxi est la liaison la plus directe." },
        { question: "Prise en charge ZAC Victor Hugo ?", answer: "Oui, prise en charge partout : ZAC, Barbara, Lucie Aubrac, centre-ville, cimetière." },
        { question: "Service 24h/24 ?", answer: "Oui, jour et nuit, week-ends et jours fériés inclus." }
      ],
    },
    {
      metaTitle: "Taxi Bagneux → Orly | 13 km, from €25 | TaxiNeo",
      metaDescription: "Taxi from Bagneux to Orly Airport. 15 min via A6. Metro 4 extended, Paris cemetery. Fixed price €25-35.",
      heroTitle: "Taxi Bagneux → Orly Airport",
      heroSubtitle: "Your Bagneux → Orly Airport transfer at €25 — €35. 13 km, via the A6.",
      description: "Orly Airport is just 15 min from Bagneux via the A6.",
      routeDescription: "Via the D920 then A6 to Orly terminals.",
      introduction: "Bagneux is a transforming commune of 42,000 residents in southern Hauts-de-Seine. The town reached a historic milestone in 2024 with the extension of metro line 4, now serving two new stations on its territory: Barbara and Bagneux-Lucie Aubrac. This long-awaited extension connects Bagneux to central Paris in 15 minutes (Montparnasse). The town hosts the Grand Cimetiere Parisien de Bagneux, the second-largest cemetery in the Paris region after Pere-Lachaise. The ZAC Victor Hugo, a major urban renewal project, is transforming a former social housing area into a mixed eco-district. The north quarter renovation attracts young families drawn by affordable property and the new metro. The transfer to Orly is one of the shortest in southern Hauts-de-Seine: 13 km via the A6, toll-free, in just 15 minutes.",
      itineraire: "Your driver takes the D920 south through Bourg-la-Reine, joins the A6 near Antony, and reaches Orly terminals within minutes. No tolls. Allow 15 min off-peak, 22-28 min in rush hour (D920 can be busy through Bourg-la-Reine). Alternative via A86 through Arcueil and Rungis if D920 congested.",
      conseils: "Metro 4 extension (2024) makes Bagneux well-connected to Paris but does not reach Orly — you would need Denfert-Rochereau + Orlyval (40 min). Taxi in 15 min is unbeatable. Specify Orly terminal (1-4). For ZAC Victor Hugo or metro Barbara residents, pickup at your exact address. Orly parking €25-35/day — return taxi cheaper from 2 days. Driver tracks flight for returns.",
      comparaisonTransport: "Metro 4 + RER B + Orlyval: 40-45 min, 2 changes, ~€14. Taxi at €25-€35 direct in 15 min, no tolls. For 2 passengers (€12-17 each), same cost as public transport in a third of the time.",
      faq: [
        { question: "How much?", answer: "€25-35 sedan, €48 van. Fixed fare, no tolls." },
        { question: "How long?", answer: "15 min normal, 22-28 min in rush hour." },
        { question: "Does metro 4 go to Orly?", answer: "No. Metro 4 extended serves Bagneux but not Orly. Taxi is the most direct link." },
        { question: "Pickup ZAC Victor Hugo?", answer: "Yes, pickup anywhere: ZAC, Barbara, Lucie Aubrac, city centre, cemetery." },
        { question: "24/7 service?", answer: "Yes, day and night, weekends and holidays included." }
      ],
    }
  ),
  hdsSERoute(
    "taxi-bagneux-cdg", "Bagneux", "Aéroport CDG",
    48.7971, 2.3145, 49.0097, 2.5479,
    33, 38, "60 — 80 €", "aeroport",
    ["A1", "Métro 4", "Cimetière parisien", "Roissy", "ZAC Victor Hugo"],
    60, 80, 105, 58, "A1", "~3 €", "bagneux", "aeroport-cdg",
    ["taxi-bagneux-orly", "taxi-montrouge-cdg", "taxi-chatillon-cdg", "taxi-antony-cdg", "taxi-clamart-cdg"],
    ["aeroport", "cdg", "roissy", "bagneux", "hauts-de-seine"],
    {
      metaTitle: "Taxi Bagneux → CDG | 33 km, dès 60 € | TaxiNeo",
      metaDescription: "Transfert taxi Bagneux vers Roissy CDG. 38 min via A1. Métro 4 prolongé, ZAC Victor Hugo. Prix fixe 60-80 €.",
      heroTitle: "Taxi Bagneux → Aéroport CDG",
      heroSubtitle: "Transfert Bagneux → Aéroport Charles de Gaulle au prix fixe de 60 — 80 €. 33 km, direct.",
      description: "L'aéroport CDG est à 38 min de Bagneux via le Périphérique et l'A1.",
      routeDescription: "L'itinéraire emprunte le Périphérique nord ou l'A86 puis l'A1 direction Roissy.",
      introduction: "Le transfert en taxi de Bagneux vers l'aéroport Charles de Gaulle est devenu encore plus pratique depuis le prolongement du métro 4 en 2024, qui place Bagneux au coeur du réseau de transport parisien. Toutefois, si le métro 4 rapproche les Balnéolais de Paris, il ne les conduit pas à CDG : il faudrait enchaîner métro 4 + RER B depuis Denfert-Rochereau ou Châtelet, soit 1h10-1h20 avec deux correspondances et des escaliers encombrés de bagages. Le taxi parcourt les 33 kilomètres en 38 minutes par le Périphérique et l'A1, pour un tarif fixe de 60 à 80 euros. Bagneux vit une profonde mutation urbaine : la ZAC Victor Hugo au nord transforme le paysage avec de nouveaux immeubles mixtes, le quartier nord rénové accueille de nouveaux commerces et espaces publics, et le grand cimetière parisien de Bagneux — 60 hectares, deuxième plus vaste de la région — reste un patrimoine funéraire remarquable où reposent des personnalités comme Louis Aragon et Elsa Triolet. Les deux nouvelles stations de métro, Barbara (en hommage à la chanteuse qui vécut à Bagneux) et Bagneux-Lucie Aubrac (en hommage à la résistante), symbolisent le renouveau de la ville. Le taxi offre le transfert le plus fluide vers CDG : un seul trajet, pas de correspondance, bagages pris en charge.",
      itineraire: "Votre chauffeur quitte Bagneux en direction de Paris par la D920 ou rejoint directement le Périphérique par la Porte d'Orléans. Il emprunte ensuite le Périphérique nord jusqu'à la Porte de la Chapelle, puis accède à l'A1 (autoroute du Nord) direction Lille/Roissy. L'itinéraire alternatif par l'A86 est disponible si le Périphérique est saturé. Les péages sont d'environ 3 € (inclus dans le tarif). Comptez 38 minutes en conditions normales, 48 à 58 minutes aux heures de pointe. Votre chauffeur choisit le meilleur itinéraire en temps réel grâce au GPS et à la connaissance du trafic francilien.",
      conseils: "Le prolongement du métro 4 a valorisé Bagneux mais n'a pas créé de liaison directe vers CDG. Pour les vols internationaux, quittez Bagneux 2h à 2h30 avant le décollage en semaine. Les créneaux les plus fluides sont avant 6h30 et entre 10h et 15h. Précisez votre terminal CDG (T1, T2A-G, T3). Si vous résidez près de la station Barbara ou Bagneux-Lucie Aubrac, votre chauffeur vous prend en charge à l'adresse exacte. Le parking CDG coûte 20-30 €/jour : l'aller-retour taxi (120-160 €) est rentable dès 4-5 jours. Pour le retour, réservez à l'avance — suivi de vol en temps réel, chauffeur en zone d'arrivée avec panneau nominatif.",
      comparaisonTransport: "Métro 4 + RER B (Denfert ou Châtelet) : 1h10-1h20, 2 correspondances, ~14 €. Le taxi à 60-80 € est direct en 38 min. À 2-3 passagers (20-40 €/pers.), le taxi est très compétitif pour un transfert sans stress.",
      faq: [
        { question: "Quel est le prix ?", answer: "60-80 € en berline, 105 € en van. Tarif fixe, péages inclus (~3 €)." },
        { question: "Combien de temps ?", answer: "38 min hors pointe, 48-58 min en heures chargées." },
        { question: "Le métro 4 mène-t-il à CDG ?", answer: "Non. Le métro 4 prolongé ne va pas à CDG. Il faut 2 correspondances, 1h10+. Le taxi fait le trajet en 38 min." },
        { question: "Prise en charge station Barbara ?", answer: "Oui, prise en charge à toute adresse de Bagneux, y compris près de Barbara et Lucie Aubrac." },
        { question: "Retour depuis CDG ?", answer: "Oui, même tarif. Chauffeur en zone d'arrivée, suivi de vol gratuit." }
      ],
    },
    {
      metaTitle: "Taxi Bagneux → CDG | 33 km, from €60 | TaxiNeo",
      metaDescription: "Taxi from Bagneux to CDG Airport. 38 min via A1. Metro 4 extended, ZAC Victor Hugo. Fixed price €60-80.",
      heroTitle: "Taxi Bagneux → CDG Airport",
      heroSubtitle: "Your Bagneux → CDG Airport transfer at €60 — €80. 33 km, direct to Roissy.",
      description: "CDG Airport is 38 min from Bagneux via the Peripherique and A1.",
      routeDescription: "Via the northern Peripherique or A86 then A1 to Roissy.",
      introduction: "The taxi transfer from Bagneux to Charles de Gaulle Airport has become even more practical since the 2024 metro line 4 extension, which places Bagneux at the heart of the Parisian transport network. Yet while metro 4 brings Bagneux closer to Paris, it does not reach CDG — you would need metro 4 + RER B from Denfert-Rochereau or Chatelet, totalling 1h10-1h20 with two changes and luggage on stairs. The taxi covers 33 km in 38 minutes via the Peripherique and A1, at a fixed fare of €60-80. Bagneux is undergoing deep urban renewal: the ZAC Victor Hugo creates mixed-use buildings, the renovated north quarter attracts new shops, and the Grand Cimetiere Parisien de Bagneux (60 hectares) houses notable figures including Louis Aragon and Elsa Triolet. The two new metro stations — Barbara (honouring the singer who lived in Bagneux) and Bagneux-Lucie Aubrac (honouring the Resistance heroine) — symbolise the town's revival.",
      itineraire: "Your driver leaves Bagneux via D920 or joins the Peripherique at Porte d'Orleans, heads north to Porte de la Chapelle, then takes the A1 to Roissy. Alternative via A86 if Peripherique congested. Tolls ~€3 (included). Allow 38 min off-peak, 48-58 min in rush hour. Real-time GPS routing.",
      conseils: "Metro 4 extension boosted Bagneux but created no direct CDG link. For international flights, leave 2-2.5h before departure on weekdays. Best times: before 6:30am, 10am-3pm. Specify CDG terminal (T1, T2A-G, T3). Barbara or Lucie Aubrac station residents: pickup at your exact address. CDG parking €20-30/day — return taxi cheaper from 4-5 days. Book return for real-time flight tracking.",
      comparaisonTransport: "Metro 4 + RER B (Denfert or Chatelet): 1h10-1h20, 2 changes, ~€14. Taxi at €60-€80 direct in 38 min. For 2-3 passengers (€20-40 each), very competitive for a stress-free transfer.",
      faq: [
        { question: "How much?", answer: "€60-80 sedan, €105 van. Fixed fare, tolls included (~€3)." },
        { question: "How long?", answer: "38 min off-peak, 48-58 min in rush hour." },
        { question: "Does metro 4 go to CDG?", answer: "No. Metro 4 extended does not reach CDG. Requires 2 changes, 1h10+. Taxi: 38 min." },
        { question: "Pickup near Barbara station?", answer: "Yes, pickup at any Bagneux address, including near Barbara and Lucie Aubrac stations." },
        { question: "Return from CDG?", answer: "Yes, same fare. Driver in arrivals, free flight tracking." }
      ],
    }
  ),
];
