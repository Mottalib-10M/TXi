import type { Trajet } from "./trajets";

function smeRoute(
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
    hub: "seine-et-marne-est",
    i18n: { fr: frMeta, en: enMeta },
  };
}

export const trajetsSeineMarneEst: Trajet[] = [
  // ═══════════════════════════════════════════════════════════
  // COULOMMIERS (15 500 hab.)
  // ═══════════════════════════════════════════════════════════
  smeRoute(
    "taxi-coulommiers-paris", "Coulommiers", "Paris",
    48.8130, 3.0860, 48.8566, 2.3522,
    60, 50, "65 — 88 €", "ville-a-ville",
    ["N34", "A4", "Fromage Coulommiers", "Grand Morin", "Commanderie des Templiers"],
    65, 88, 118, 70, "N34 + A4", "~5 €", "coulommiers", "paris",
    ["taxi-coulommiers-orly", "taxi-coulommiers-cdg"],
    ["ville-a-ville", "paris", "coulommiers", "fromage", "templiers", "seine-et-marne"],
    {
      metaTitle: "Taxi Coulommiers → Paris | 60 km, dès 65 € | TaxiNeo",
      metaDescription: "Transfert taxi Coulommiers vers Paris. 50 min par A4. Capitale du fromage, Templiers. Prix fixe 65-88 €.",
      heroTitle: "Taxi Coulommiers → Paris",
      heroSubtitle: "Transfert Coulommiers → Paris au prix fixe de 65 — 88 €. 60 km, 50 min.",
      description: "Paris est à 50 min de Coulommiers par la N34 et l'A4.",
      routeDescription: "Via la N34 puis l'A4 direction Paris.",
      introduction: "Coulommiers, 15 500 habitants, est mondialement célèbre pour son fromage à pâte molle, cousin du Brie de Meaux, fabriqué dans la vallée du Grand Morin depuis le Moyen Âge. La ville possède un patrimoine exceptionnel : la Commanderie des Templiers (XIIe-XIIIe siècle), l'un des rares sites templiers conservés en Île-de-France avec sa chapelle, sa salle capitulaire et son jardin médiéval reconstitué. Le parc des Capucins, en cœur de ville, borde le Grand Morin dont les méandres confèrent à Coulommiers son caractère bucolique. Sous-préfecture de Seine-et-Marne, la ville accueille un tribunal et des services administratifs qui génèrent des déplacements réguliers vers Paris. Le Transilien P (ligne Paris-Est – La Ferté-Milon) dessert Coulommiers en 1h10, mais le taxi est préféré pour les rendez-vous d'affaires et les correspondances aéroportuaires.",
      itineraire: "Départ de Coulommiers par la N34 direction ouest, jonction avec l'A4 à Meaux. A4 vers Paris, sortie Porte de Bercy. 50 min hors pointe, 70 min en heure de pointe. Péages ~5 € inclus.",
      conseils: "La Commanderie des Templiers se visite (5 €, gratuit -12 ans). Le fromage de Coulommiers s'achète à la fromagerie locale ou au marché (lundi matin). Le parc des Capucins est idéal pour une pause avant le départ. La fête du fromage a lieu en avril.",
      comparaisonTransport: "Transilien P Coulommiers → Paris-Est : 8-12 €, 1h10. Taxi 65-88 € : 50 min porte-à-porte. Le taxi est 20 min plus rapide et dessert tout Paris, pas seulement Gare de l'Est.",
      faq: [
        { question: "Prix ?", answer: "65-88 € berline, 118 € van. Tarif fixe." },
        { question: "Durée ?", answer: "50 min normalement, 70 min en pointe." },
        { question: "Fromage ?", answer: "Le Coulommiers est un fromage AOP proche du Brie. Achetez-le au marché du lundi." },
        { question: "Templiers ?", answer: "La Commanderie des Templiers (XIIe s.) est l'un des sites templiers les mieux conservés d'Île-de-France." },
        { question: "Retour ?", answer: "Même tarif fixe pour le retour." }
      ],
    },
    {
      metaTitle: "Taxi Coulommiers → Paris | 60 km, from €65 | TaxiNeo",
      metaDescription: "Taxi from Coulommiers to Paris. 50 min via A4. Famous cheese town, Knights Templar site. Fixed price €65-88.",
      heroTitle: "Taxi Coulommiers → Paris",
      heroSubtitle: "Your Coulommiers → Paris transfer at €65 — €88. 60 km, 50 min.",
      description: "Paris is 50 min from Coulommiers via N34 and A4.",
      routeDescription: "Via N34 then A4 towards Paris.",
      introduction: "Coulommiers, population 15,500, is world-famous for its soft cheese, cousin to Brie de Meaux, produced in the Grand Morin valley since the Middle Ages. The town holds exceptional heritage: the Knights Templar Commandery (12th-13th century), one of the few preserved Templar sites in Île-de-France with its chapel, chapter house and reconstructed medieval garden. The Parc des Capucins in the town centre borders the Grand Morin river, whose meanders give Coulommiers its bucolic character. As a sub-prefecture, the town hosts a court and administrative services generating regular Paris travel. Transilien P serves Coulommiers in 1h10, but taxis are preferred for business meetings and airport connections.",
      itineraire: "From Coulommiers via N34 west, junction with A4 at Meaux. A4 towards Paris, exit Porte de Bercy. 50 min off-peak, 70 min in rush hour. Tolls ~€5 included.",
      conseils: "The Templar Commandery is open for visits (€5, free under 12). Coulommiers cheese is sold at local fromageries or the Monday market. Parc des Capucins is ideal for a pre-departure break. The cheese festival is in April.",
      comparaisonTransport: "Transilien P Coulommiers → Paris-Est: €8-12, 1h10. Taxi €65-88: 50 min door-to-door. Taxi is 20 min faster and serves all Paris, not just Gare de l'Est.",
      faq: [
        { question: "How much does a taxi from Coulommiers to Paris cost?", answer: "€65-88 sedan, €118 van. Fixed fare." },
        { question: "How long is the taxi ride from Coulommiers to Paris?", answer: "50 min normally, 70 min in rush hour." },
        { question: "Where can I buy authentic Coulommiers cheese in Coulommiers?", answer: "Coulommiers is an AOP soft cheese related to Brie. Buy at the Monday market." },
        { question: "What is the Knights Templar Commandery in Coulommiers?", answer: "The Templar Commandery (12th c.) is one of the best-preserved Templar sites in Île-de-France." },
        { question: "Can I book a return taxi from Paris to Coulommiers?", answer: "Same fixed fare for return." }
      ],
    }
  ),
  smeRoute(
    "taxi-coulommiers-orly", "Coulommiers", "Aéroport d'Orly",
    48.8130, 3.0860, 48.7262, 2.3652,
    65, 50, "68 — 90 €", "aeroport",
    ["A4", "A86", "Orly", "Fromage", "Grand Morin"],
    68, 90, 120, 70, "A4 + A86", "~7 €", "coulommiers", "orly",
    ["taxi-coulommiers-paris", "taxi-coulommiers-cdg"],
    ["aeroport", "orly", "coulommiers", "seine-et-marne"],
    {
      metaTitle: "Taxi Coulommiers → Orly | 65 km, dès 68 € | TaxiNeo",
      metaDescription: "Transfert taxi Coulommiers vers Orly. 50 min par A4/A86. Prix fixe 68-90 €.",
      heroTitle: "Taxi Coulommiers → Aéroport d'Orly",
      heroSubtitle: "Transfert Coulommiers → Orly au prix fixe de 68 — 90 €. 65 km, 50 min.",
      description: "Orly est à 50 min de Coulommiers via A4 et A86.",
      routeDescription: "Via N34, A4 puis A86 sud.",
      introduction: "Le transfert en taxi entre Coulommiers et l'aéroport d'Orly est la liaison aéroportuaire la plus demandée par les 15 500 habitants de cette sous-préfecture de Seine-et-Marne et les communes rurales environnantes de la vallée du Grand Morin. Coulommiers, mondialement connue pour son fromage à pâte molle cousin du Brie de Meaux, est aussi une ville de patrimoine avec sa Commanderie des Templiers du XIIe siècle et son parc des Capucins en bord de rivière. L'aéroport d'Orly, deuxième plateforme parisienne avec 33 millions de passagers annuels, concentre les vols domestiques (Nice, Toulouse, Marseille, Bordeaux, Ajaccio) et les liaisons vers le Maghreb, le Portugal, l'Espagne et l'Afrique de l'Ouest — des destinations très demandées par la population seine-et-marnaise. L'itinéraire N34/A4/A86 contourne Paris par le sud en 50 minutes, une alternative indispensable au train qui impose trois correspondances éprouvantes (Transilien P → Paris-Est → RER C → Orlyval, 2h30 minimum). Pour les familles partant en vacances, les professionnels de l'agroalimentaire en déplacement ou les visiteurs internationaux de la Commanderie des Templiers, le taxi offre un transfert direct, confortable et prévisible avec prise en charge à domicile et dépose au terminal exact.",
      itineraire: "Votre chauffeur quitte Coulommiers par la N34 en direction de l'ouest, traversant la campagne briarde et ses champs de blé caractéristiques de la Brie. La N34 rejoint l'A4 (autoroute de l'Est) à hauteur de Meaux, puis votre chauffeur bifurque sur l'A86 sud à Joinville-le-Pont, contournant Paris par l'est et le sud en passant par Créteil, Thiais et le MIN de Rungis. La sortie Orly est clairement indiquée. Comptez 50 minutes en conditions normales, jusqu'à 70 minutes aux heures de pointe (7h-9h, 17h-19h30). Péages environ 7 € (inclus dans le tarif fixe). En cas de saturation de l'A86, votre chauffeur peut emprunter le périphérique sud comme alternative.",
      conseils: "Orly dessert les vols domestiques (Nice, Toulouse, Marseille, Bordeaux, Ajaccio), le Maghreb (Alger, Casablanca, Tunis), le Portugal (Lisbonne, Porto) et l'Espagne (Barcelone, Madrid). Prévoyez un départ 2h30 avant le décollage pour un vol domestique, 3h pour l'international. Précisez votre terminal (Orly 1, 2, 3 ou 4) lors de la réservation. Pour un vol matinal (avant 8h), départ de Coulommiers recommandé vers 5h. Avant de partir, faites un détour par la fromagerie locale pour ramener un authentique Coulommiers — idéal comme cadeau gastronomique. Le marché du lundi matin, place du Marché, propose les meilleurs fromages fermiers de la vallée du Grand Morin.",
      comparaisonTransport: "Le trajet en transport en commun depuis Coulommiers vers Orly est l'un des plus longs d'Île-de-France : Transilien P jusqu'à Paris-Est (1h10), métro jusqu'à Denfert-Rochereau ou Châtelet, puis Orlyval ou RER C — total 2h30 minimum, 18-24 €, avec trois correspondances et autant de transferts de bagages. Le taxi à 68-90 € divise le temps par trois en offrant un transfert direct en 50 minutes. À 2 passagers (34-45 €/pers.), le confort et le gain de temps sont indiscutables. À 3 passagers (23-30 €/pers.), c'est le meilleur rapport qualité-prix possible pour ce trajet.",
      faq: [
        { question: "Prix ?", answer: "68-90 € berline, 120 € van. Tarif fixe." },
        { question: "Durée ?", answer: "50 min normalement." },
        { question: "Terminal ?", answer: "Dépose au terminal exact." },
        { question: "Retour ?", answer: "Même tarif, suivi de vol." },
        { question: "Réservation ?", answer: "En ligne 24h/24." }
      ],
    },
    {
      metaTitle: "Taxi Coulommiers → Orly | 65 km, from €68 | TaxiNeo",
      metaDescription: "Taxi from Coulommiers to Orly. 50 min via A4/A86. Fixed price €68-90.",
      heroTitle: "Taxi Coulommiers → Orly Airport",
      heroSubtitle: "Your Coulommiers → Orly transfer at €68 — €90. 65 km, 50 min.",
      description: "Orly is 50 min from Coulommiers via A4 and A86.",
      routeDescription: "Via N34, A4 then A86 south.",
      introduction: "The taxi transfer from Coulommiers to Orly Airport is the most popular airport connection for the 15,500 residents of this Seine-et-Marne sub-prefecture and the surrounding rural communities of the Grand Morin valley. Coulommiers is world-famous for its soft cheese, cousin to Brie de Meaux, and also boasts remarkable heritage including the 12th-century Knights Templar Commandery and the riverside Parc des Capucins. Orly Airport, Paris's second platform with 33 million annual passengers, concentrates domestic flights (Nice, Toulouse, Marseille, Bordeaux, Ajaccio) and routes to North Africa, Portugal, Spain and West Africa — destinations in high demand from Seine-et-Marne residents. The N34/A4/A86 route bypasses Paris to the south in 50 minutes, an essential alternative to the train which requires three gruelling connections (Transilien P → Paris-Est → RER C → Orlyval, 2h30 minimum). For families heading on holiday, agri-food professionals on business trips or international visitors to the Templar Commandery, the taxi provides a direct, comfortable and predictable transfer with home pickup and terminal drop-off.",
      itineraire: "Your driver leaves Coulommiers via the N34 heading west, crossing the Brie countryside with its characteristic wheat fields. The N34 joins the A4 (eastern motorway) near Meaux, then your driver takes the A86 south at Joinville-le-Pont, bypassing Paris via Créteil, Thiais and the Rungis wholesale market. The Orly exit is clearly signposted. Allow 50 minutes in normal conditions, up to 70 minutes in rush hour (7-9am, 5-7:30pm). Tolls approximately €7 (included in the fixed fare). If the A86 is congested, your driver can use the southern ring road as an alternative.",
      conseils: "Orly serves domestic flights (Nice, Toulouse, Marseille, Bordeaux, Ajaccio), North Africa (Algiers, Casablanca, Tunis), Portugal (Lisbon, Porto) and Spain (Barcelona, Madrid). Allow 2h30 before domestic flights, 3h for international. Specify your terminal (Orly 1, 2, 3 or 4) when booking. For morning flights (before 8am), depart Coulommiers around 5am. Before leaving, visit a local fromagerie for authentic Coulommiers cheese — a perfect gourmet gift. Monday morning market at Place du Marché offers the finest farmhouse cheeses from the Grand Morin valley.",
      comparaisonTransport: "Public transport from Coulommiers to Orly is one of the longest journeys in Île-de-France: Transilien P to Paris-Est (1h10), metro to Denfert-Rochereau or Châtelet, then Orlyval or RER C — totalling 2h30 minimum, €18-24, with three connections and as many luggage transfers. The taxi at €68-90 cuts the time by three with a direct 50-minute transfer. For 2 passengers (€34-45 each), comfort and time savings are indisputable. For 3 passengers (€23-30 each), it's the best value possible for this journey.",
      faq: [
        { question: "How much does a taxi from Coulommiers to Orly Airport cost?", answer: "€68-90 sedan, €120 van. Fixed fare." },
        { question: "How long is the taxi ride from Coulommiers to Orly Airport?", answer: "50 min normally." },
        { question: "Which terminal at Orly Airport will my driver drop me at?", answer: "Drop-off at exact terminal." },
        { question: "Can I book a return taxi from Orly Airport to Coulommiers?", answer: "Same fare, flight tracking." },
        { question: "How do I book a taxi from Coulommiers to Orly Airport?", answer: "Online 24/7." }
      ],
    }
  ),
  smeRoute(
    "taxi-coulommiers-cdg", "Coulommiers", "Aéroport CDG",
    48.8130, 3.0860, 49.0097, 2.5479,
    70, 50, "72 — 95 €", "aeroport",
    ["A4", "A104", "A1", "CDG", "Templiers", "Fromage"],
    72, 95, 128, 70, "A4 + A104 + A1", "~8 €", "coulommiers", "cdg",
    ["taxi-coulommiers-paris", "taxi-coulommiers-orly"],
    ["aeroport", "cdg", "roissy", "coulommiers", "seine-et-marne"],
    {
      metaTitle: "Taxi Coulommiers → CDG | 70 km, dès 72 € | TaxiNeo",
      metaDescription: "Transfert taxi Coulommiers vers CDG. 50 min par A4/Francilienne. Sous-préfecture, Templiers. Prix fixe 72-95 €.",
      heroTitle: "Taxi Coulommiers → Aéroport CDG",
      heroSubtitle: "Transfert Coulommiers → CDG au prix fixe de 72 — 95 €. 70 km, 50 min.",
      description: "CDG est à 50 min de Coulommiers via A4 et Francilienne.",
      routeDescription: "Via A4 puis Francilienne (A104) nord et A1.",
      introduction: "Le transfert en taxi entre Coulommiers et l'aéroport Charles de Gaulle est le lien vital entre cette sous-préfecture historique de Seine-et-Marne et le premier aéroport de France. Coulommiers, 15 500 habitants, est une ville au patrimoine exceptionnel : la Commanderie des Templiers (XIIe-XIIIe siècle), l'un des rares sites templiers intacts en Île-de-France avec sa chapelle, sa salle capitulaire et son jardin médiéval, ainsi que le fromage de Coulommiers, fromage à pâte molle fabriqué dans la vallée du Grand Morin depuis le Moyen Âge. CDG, premier hub aérien français avec plus de 70 millions de passagers annuels, dessert toutes les destinations long-courriers : Amérique du Nord, Asie, Afrique subsaharienne, Antilles et Océan Indien. Le train vers CDG impose un calvaire logistique — Transilien P jusqu'à Paris-Est (1h10), traversée de Paris en métro, puis RER B jusqu'à Roissy — soit 2h30 et deux correspondances contraignantes avec bagages. Grâce à l'A4 et la Francilienne (A104), le taxi relie Coulommiers à CDG en 50 minutes sans jamais entrer dans Paris, un itinéraire fluide même aux heures de pointe. Touristes internationaux découvrant le patrimoine templier et fromager de la Brie, professionnels de l'agroalimentaire en déplacement vers des salons mondiaux, familles partant en vacances — tous trouvent dans le taxi la seule option raisonnable en termes de temps et de confort.",
      itineraire: "Votre chauffeur quitte Coulommiers par la N34 puis rejoint l'A4 (autoroute de l'Est) en direction de l'ouest. Au lieu de continuer vers Paris, il bifurque sur la Francilienne (A104) en direction du nord-est, contournant intégralement la capitale par Marne-la-Vallée, Villiers-sur-Marne et Aulnay-sous-Bois. La Francilienne rejoint ensuite l'A1 (autoroute du Nord) en direction de Roissy. L'accès aux terminaux est direct : T1 (Star Alliance), T2A-G (Air France, SkyTeam) ou T3 (compagnies low cost). Comptez 50 minutes en conditions normales, jusqu'à 70 minutes aux heures de pointe. Péages environ 8 € (inclus dans le tarif fixe). L'itinéraire alternatif via l'A4 puis le Périphérique nord est parfois plus rapide le week-end.",
      conseils: "CDG est le hub Air France avec plus de 300 destinations internationales. Prévoyez un départ 3h avant le décollage pour les vols long-courriers. La Francilienne contourne totalement Paris, ce qui rend le trajet fluide même aux heures de pointe. Précisez votre terminal lors de la réservation — le terminal 2 comporte sept sous-terminaux (2A à 2G) distants de plusieurs minutes à pied. Avant de partir, une visite de la Commanderie des Templiers (5 €, gratuit -12 ans) s'impose : chapelle, salle capitulaire et jardin médiéval reconstitué. Le fromage de Coulommiers s'achète à la fromagerie artisanale rue du Général-de-Gaulle ou au marché du lundi matin. Le parking longue durée de CDG coûte 20-30 €/jour — un aller-retour en taxi (144-190 €) est plus économique dès 5 jours d'absence.",
      comparaisonTransport: "Le trajet en transport en commun est un parcours du combattant : Transilien P Coulommiers → Paris-Est (1h10, 8-12 €), métro 4 ou 5 vers Gare du Nord, puis RER B vers CDG (35 min) — total 2h30, 18-24 €, avec deux correspondances dans les couloirs bondés de la gare de l'Est et du Châtelet. Le taxi à 72-95 € offre un transfert direct en 50 minutes via la Francilienne, sans jamais entrer dans Paris. À 2 passagers (36-47 €/pers.), le taxi divise le temps par trois. À 3 passagers (24-32 €/pers.), il devient même compétitif en prix par rapport au train.",
      faq: [
        { question: "Prix ?", answer: "72-95 € berline, 128 € van. Tarif fixe." },
        { question: "Durée ?", answer: "50 min normalement." },
        { question: "Par Paris ?", answer: "Non, Francilienne contourne Paris." },
        { question: "Terminal ?", answer: "Dépose au terminal exact." },
        { question: "Retour ?", answer: "Même tarif, suivi de vol." }
      ],
    },
    {
      metaTitle: "Taxi Coulommiers → CDG | 70 km, from €72 | TaxiNeo",
      metaDescription: "Taxi from Coulommiers to CDG. 50 min via A4/Francilienne. Sub-prefecture, Templars. Fixed price €72-95.",
      heroTitle: "Taxi Coulommiers → CDG Airport",
      heroSubtitle: "Your Coulommiers → CDG transfer at €72 — €95. 70 km, 50 min.",
      description: "CDG is 50 min from Coulommiers via A4 and Francilienne.",
      routeDescription: "Via A4 then Francilienne (A104) north and A1.",
      introduction: "The taxi transfer from Coulommiers to Charles de Gaulle Airport is the vital link between this historic Seine-et-Marne sub-prefecture and France's largest airport. Coulommiers, population 15,500, boasts exceptional heritage: the Knights Templar Commandery (12th-13th century), one of the few intact Templar sites in Île-de-France with its chapel, chapter house and reconstructed medieval garden, plus the famed Coulommiers cheese, a soft cheese produced in the Grand Morin valley since the Middle Ages. CDG, France's premier air hub with over 70 million annual passengers, serves all long-haul destinations: North America, Asia, sub-Saharan Africa, Caribbean and Indian Ocean. The train to CDG is a logistical ordeal — Transilien P to Paris-Est (1h10), metro across Paris, then RER B to Roissy — totalling 2h30 with two punishing luggage-laden connections. Thanks to the A4 and the Francilienne (A104), the taxi connects Coulommiers to CDG in 50 minutes without ever entering Paris, a smooth route even during rush hour. International tourists exploring Brie's Templar and cheese heritage, agri-food professionals heading to world trade fairs, families departing on holiday — all find the taxi the only reasonable option in terms of time and comfort.",
      itineraire: "Your driver leaves Coulommiers via the N34 then joins the A4 (eastern motorway) heading west. Instead of continuing towards Paris, the driver takes the Francilienne (A104) northeast, completely bypassing the capital via Marne-la-Vallée, Villiers-sur-Marne and Aulnay-sous-Bois. The Francilienne then joins the A1 (northern motorway) to Roissy. Terminal access is direct: T1 (Star Alliance), T2A-G (Air France, SkyTeam) or T3 (low-cost carriers). Allow 50 minutes in normal conditions, up to 70 minutes in rush hour. Tolls approximately €8 (included in the fixed fare). The alternative route via the A4 then the northern ring road can be faster on weekends.",
      conseils: "CDG is the Air France hub with over 300 international destinations. Allow 3 hours before departure for long-haul flights. The Francilienne completely bypasses Paris, keeping the journey smooth even in rush hour. Specify your terminal when booking — Terminal 2 has seven sub-terminals (2A to 2G) that are several minutes' walk apart. Before leaving, the Templar Commandery (€5, free under 12) is unmissable: chapel, chapter house and reconstructed medieval garden. Buy authentic Coulommiers cheese at the artisan fromagerie on Rue du Général-de-Gaulle or at the Monday morning market. CDG long-stay parking costs €20-30/day — a taxi return trip (€144-190) is cheaper from 5 days.",
      comparaisonTransport: "Public transport is an endurance test: Transilien P from Coulommiers to Paris-Est (1h10, €8-12), metro 4 or 5 to Gare du Nord, then RER B to CDG (35 min) — totalling 2h30, €18-24, with two connections through the crowded corridors of Gare de l'Est and Châtelet. The taxi at €72-95 provides a direct 50-minute transfer via the Francilienne, never entering Paris. For 2 passengers (€36-47 each), the taxi cuts travel time by three. For 3 passengers (€24-32 each), it even becomes price-competitive with the train.",
      faq: [
        { question: "How much does a taxi from Coulommiers to CDG Airport cost?", answer: "€72-95 sedan, €128 van. Fixed fare." },
        { question: "How long is the taxi ride from Coulommiers to CDG Airport?", answer: "50 min normally." },
        { question: "Does the taxi from Coulommiers to CDG go via Paris?", answer: "No, Francilienne bypasses Paris." },
        { question: "Which terminal at CDG Airport will my driver drop me at?", answer: "Drop-off at exact terminal." },
        { question: "Can I book a return taxi from CDG Airport to Coulommiers?", answer: "Same fare, flight tracking." }
      ],
    }
  ),
  // ═══════════════════════════════════════════════════════════
  // PROVINS (12 000 hab.) — UNESCO
  // ═══════════════════════════════════════════════════════════
  smeRoute(
    "taxi-provins-paris", "Provins", "Paris",
    48.5580, 3.2990, 48.8566, 2.3522,
    85, 65, "88 — 120 €", "ville-a-ville",
    ["A4", "N19", "UNESCO", "Cité médiévale", "Tour César", "Remparts"],
    88, 120, 160, 85, "N19 + A4", "~7 €", "provins", "paris",
    ["taxi-provins-orly", "taxi-provins-cdg"],
    ["ville-a-ville", "paris", "provins", "unesco", "medieval", "seine-et-marne"],
    {
      metaTitle: "Taxi Provins → Paris | 85 km, dès 88 € | TaxiNeo",
      metaDescription: "Transfert taxi Provins vers Paris. 65 min par A4. Cité médiévale UNESCO, Tour César, remparts. Prix fixe 88-120 €.",
      heroTitle: "Taxi Provins → Paris",
      heroSubtitle: "Transfert Provins → Paris au prix fixe de 88 — 120 €. 85 km, 65 min.",
      description: "Paris est à 65 min de Provins par la N19 et l'A4.",
      routeDescription: "Via la N19 puis l'A4 direction Paris.",
      introduction: "Provins, inscrite au patrimoine mondial de l'UNESCO depuis 2001, est l'une des cités médiévales les mieux préservées d'Europe. La ville haute, ceinte de 1 200 mètres de remparts du XIIIe siècle, abrite la Tour César (donjon octogonal unique en son genre), la collégiale Saint-Quiriace, les souterrains médiévaux et la grange aux dîmes. Provins fut au Moyen Âge l'une des plus grandes villes d'Europe, siège des foires de Champagne qui attiraient marchands de toute la chrétienté. Aujourd'hui, 300 000 visiteurs annuels découvrent ses spectacles médiévaux (aigles en vol, chevaliers, le bal des oiseaux) et ses roses de Provins (Rosa gallica, dont on tire confiture, miel et bonbons). Le Transilien P dessert Paris-Est en 1h20, mais le taxi est privilégié par les touristes internationaux, les groupes et les professionnels pressés.",
      itineraire: "Départ de Provins par la N19 ouest jusqu'à Nangis, puis A4 direction Paris. Sortie Porte de Bercy. 65 min hors pointe, 85 min en heure de pointe. Péages ~7 € inclus.",
      conseils: "Les spectacles médiévaux de Provins se tiennent d'avril à novembre (réservation recommandée). La Tour César offre un panorama à 360° sur la campagne briarde. Les souterrains se visitent en visite guidée. La rose de Provins est cultivée depuis le XIIIe siècle (ramenée des Croisades). Le marché a lieu samedi matin dans la ville basse.",
      comparaisonTransport: "Transilien P Provins → Paris-Est : 10-15 €, 1h20 (1 train/heure). Taxi 88-120 € : 65 min porte-à-porte. Le taxi dessert tout Paris et évite la correspondance gare.",
      faq: [
        { question: "Prix du taxi Provins → Paris ?", answer: "88-120 € berline, 160 € van 7 places. Tarif fixe." },
        { question: "Durée ?", answer: "65 min normalement, 85 min en pointe." },
        { question: "UNESCO ?", answer: "Oui, Provins est classée UNESCO depuis 2001 pour ses foires de Champagne et son patrimoine médiéval." },
        { question: "Spectacles ?", answer: "Spectacles médiévaux d'avril à novembre : aigles, chevaliers, banquet." },
        { question: "Retour ?", answer: "Même tarif fixe." }
      ],
    },
    {
      metaTitle: "Taxi Provins → Paris | 85 km, from €88 | TaxiNeo",
      metaDescription: "Taxi from Provins to Paris. 65 min via A4. UNESCO medieval city, Caesar's Tower, ramparts. Fixed price €88-120.",
      heroTitle: "Taxi Provins → Paris",
      heroSubtitle: "Your Provins → Paris transfer at €88 — €120. 85 km, 65 min.",
      description: "Paris is 65 min from Provins via N19 and A4.",
      routeDescription: "Via N19 then A4 towards Paris.",
      introduction: "Provins, a UNESCO World Heritage Site since 2001, is one of Europe's best-preserved medieval cities. The upper town, enclosed by 1,200 metres of 13th-century ramparts, houses Caesar's Tower (a unique octagonal keep), the Saint-Quiriace collegiate church, medieval underground passages and the tithe barn. In the Middle Ages, Provins was one of Europe's largest cities, hosting the Champagne Fairs that drew merchants from across Christendom. Today, 300,000 annual visitors enjoy medieval shows (eagles in flight, knights, bird displays) and Provins roses (Rosa gallica, used for jam, honey and sweets). Transilien P serves Paris-Est in 1h20, but the taxi is favoured by international tourists, groups and time-pressed professionals.",
      itineraire: "From Provins via N19 west to Nangis, then A4 towards Paris. Exit Porte de Bercy. 65 min off-peak, 85 min in rush hour. Tolls ~€7 included.",
      conseils: "Medieval shows run April to November (booking recommended). Caesar's Tower offers 360° views over the Brie countryside. Underground passages are guided visits. The Provins rose has been cultivated since the 13th century (brought from the Crusades). Market on Saturday mornings in the lower town.",
      comparaisonTransport: "Transilien P Provins → Paris-Est: €10-15, 1h20 (1 train/hour). Taxi €88-120: 65 min door-to-door. Taxi serves all Paris and avoids station connections.",
      faq: [
        { question: "How much does a taxi from Provins to Paris cost?", answer: "€88-120 sedan, €160 van. Fixed fare." },
        { question: "How long is the taxi ride from Provins to Paris?", answer: "65 min normally, 85 min in rush hour." },
        { question: "Is Provins a UNESCO World Heritage Site?", answer: "Yes, Provins has been UNESCO-listed since 2001 for its Champagne Fairs and medieval heritage." },
        { question: "Are there medieval shows in Provins?", answer: "Medieval shows April-November: eagles, knights, banquet." },
        { question: "Can I book a return taxi from Paris to Provins?", answer: "Same fixed fare." }
      ],
    }
  ),
  smeRoute(
    "taxi-provins-orly", "Provins", "Aéroport d'Orly",
    48.5580, 3.2990, 48.7262, 2.3652,
    80, 55, "82 — 110 €", "aeroport",
    ["A4", "A86", "Orly", "UNESCO", "Tour César"],
    82, 110, 148, 75, "N19 + A4 + A86", "~8 €", "provins", "orly",
    ["taxi-provins-paris", "taxi-provins-cdg"],
    ["aeroport", "orly", "provins", "unesco", "medieval", "seine-et-marne"],
    {
      metaTitle: "Taxi Provins → Orly | 80 km, dès 82 € | TaxiNeo",
      metaDescription: "Transfert taxi Provins vers Orly. 55 min par A4/A86. Cité UNESCO. Prix fixe 82-110 €.",
      heroTitle: "Taxi Provins → Aéroport d'Orly",
      heroSubtitle: "Transfert Provins → Orly au prix fixe de 82 — 110 €. 80 km, 55 min.",
      description: "Orly est à 55 min de Provins via A4 et A86.",
      routeDescription: "Via N19, A4 puis A86 sud.",
      introduction: "Le transfert Provins – Orly relie la cité médiévale UNESCO à l'aéroport en 55 minutes via l'A4 et l'A86. Provins, qui accueille 300 000 visiteurs annuels, voit une part significative de touristes internationaux arriver et repartir par avion. Les résidents des 12 000 habitants voyagent également régulièrement depuis Orly. Le train + Orlyval prend 2h30+ avec 3 correspondances — le taxi est la seule option directe raisonnable.",
      itineraire: "Provins → N19 → A4 ouest → A86 sud → Orly. 55 min hors pointe, 75 min en pointe. Péages ~8 € inclus.",
      conseils: "Orly pour vols domestiques, Maghreb, sud de l'Europe. Combinable avec une visite matinale de Provins.",
      comparaisonTransport: "Train + Orlyval = 2h30+, 20-28 €. Taxi 82-110 € : 55 min. Le taxi est 3× plus rapide.",
      faq: [
        { question: "Prix ?", answer: "82-110 € berline, 148 € van. Tarif fixe." },
        { question: "Durée ?", answer: "55 min normalement." },
        { question: "Terminal ?", answer: "Dépose au terminal exact." },
        { question: "Retour ?", answer: "Même tarif, suivi de vol." },
        { question: "Touristes ?", answer: "Idéal pour les visiteurs de Provins prenant un vol depuis Orly." }
      ],
    },
    {
      metaTitle: "Taxi Provins → Orly | 80 km, from €82 | TaxiNeo",
      metaDescription: "Taxi from Provins to Orly. 55 min via A4/A86. UNESCO city. Fixed price €82-110.",
      heroTitle: "Taxi Provins → Orly Airport",
      heroSubtitle: "Your Provins → Orly transfer at €82 — €110. 80 km, 55 min.",
      description: "Orly is 55 min from Provins via A4 and A86.",
      routeDescription: "Via N19, A4 then A86 south.",
      introduction: "The taxi transfer from Provins to Orly Airport connects one of Europe's finest medieval cities -- a UNESCO World Heritage Site since 2001 -- to Paris's second-busiest airport in just 55 minutes via the A4 and A86. Provins, home to 12,000 residents, draws over 300,000 visitors each year to its remarkably preserved upper town, where 1,200 metres of 13th-century ramparts encircle Caesar's Tower, the Saint-Quiriace collegiate church, and the famous underground passages. The medieval shows running from April to November -- featuring knights in armour, eagles in flight, and the celebrated birds of prey display -- attract families and history enthusiasts from across Europe and beyond. A significant share of these international visitors arrive and depart by air, making the Orly transfer essential. Orly concentrates flights to southern France (Nice, Toulouse, Marseille, Bordeaux, Ajaccio), the Iberian Peninsula, North Africa and French overseas territories -- destinations particularly popular with Seine-et-Marne residents. Public transport from Provins to Orly is one of the most gruelling journeys in Ile-de-France, requiring Transilien P to Paris-Est, then a metro or RER across the capital, followed by Orlyval -- totalling well over 2 hours and 30 minutes with three exhausting luggage-laden connections. The taxi bypasses all of this, collecting you from your hotel or home in Provins and delivering you straight to your Orly terminal.",
      itineraire: "Your driver departs Provins heading west on the N19, passing through the rolling Brie farmland and the town of Nangis before joining the A4 (eastern motorway) towards Paris. Rather than entering the capital, the driver takes the A86 south at Joinville-le-Pont, skirting Paris via Creteil and Thiais before reaching the Orly Airport exit. Drop-off is at your exact terminal (Orly 1, 2, 3 or 4). Allow 55 minutes in normal traffic conditions, extending to approximately 75 minutes during rush hours (7-9am, 5-7:30pm). Tolls of around 8 euros are included in the fixed fare. If the A86 is heavily congested, your driver may use the southern ring road as a faster alternative.",
      conseils: "Orly Airport is the best choice from Provins for domestic flights and Mediterranean destinations. Allow at least 2 hours 30 minutes before a domestic departure and 3 hours for international flights. Orly has four terminal sectors -- check your booking confirmation to know which one you need. If you have time before your transfer, the medieval shows in Provins's upper town are unmissable (April to November, advance booking recommended). Caesar's Tower offers a stunning 360-degree panorama over the Brie countryside, and the underground passages provide a fascinating guided tour. Pick up authentic Provins rose products -- jams, honey, and sweets made from Rosa gallica, cultivated here since the 13th century -- as distinctive travel gifts. The Saturday morning market in the lower town is excellent for local Brie cheeses and regional produce.",
      comparaisonTransport: "Train + Orlyval = 2h30+, €20-28. Taxi €82-110: 55 min. Taxi is 3× faster.",
      faq: [
        { question: "How much does a taxi from Provins to Orly Airport cost?", answer: "€82-110 sedan, €148 van. Fixed fare." },
        { question: "How long is the taxi ride from Provins to Orly Airport?", answer: "55 min normally." },
        { question: "Which terminal at Orly Airport will my driver drop me at?", answer: "Drop-off at exact terminal." },
        { question: "Can I book a return taxi from Orly Airport to Provins?", answer: "Same fare, flight tracking." },
        { question: "Can tourists visiting Provins book a taxi to Orly Airport?", answer: "Ideal for Provins visitors catching an Orly flight." }
      ],
    }
  ),
  smeRoute(
    "taxi-provins-cdg", "Provins", "Aéroport CDG",
    48.5580, 3.2990, 49.0097, 2.5479,
    95, 65, "95 — 130 €", "aeroport",
    ["A4", "A104", "A1", "CDG", "UNESCO", "Tour César"],
    95, 130, 175, 85, "A4 + A104 + A1", "~10 €", "provins", "cdg",
    ["taxi-provins-paris", "taxi-provins-orly"],
    ["aeroport", "cdg", "roissy", "provins", "unesco", "medieval", "seine-et-marne"],
    {
      metaTitle: "Taxi Provins → CDG | 95 km, dès 95 € | TaxiNeo",
      metaDescription: "Transfert taxi Provins vers CDG. 65 min par A4/Francilienne. Cité UNESCO. Prix fixe 95-130 €.",
      heroTitle: "Taxi Provins → Aéroport CDG",
      heroSubtitle: "Transfert Provins → CDG au prix fixe de 95 — 130 €. 95 km, 65 min.",
      description: "CDG est à 65 min de Provins via A4 et Francilienne.",
      routeDescription: "Via A4 puis Francilienne (A104) nord et A1.",
      introduction: "Provins, joyau médiéval classé UNESCO, est relié à CDG en 65 minutes par l'A4 et la Francilienne. Ce trajet contourne Paris et permet aux touristes internationaux (anglais, américains, japonais) visitant la cité des foires de Champagne de rejoindre directement leur vol de retour. Les 12 000 habitants accèdent aux vols long-courriers de CDG sans le calvaire des correspondances parisiennes (train → Paris → RER B, 3 heures). Le taxi est le transfert de référence pour cette destination touristique majeure d'Île-de-France.",
      itineraire: "Provins → A4 ouest → Francilienne (A104) nord → A1 → CDG. 65 min hors pointe, 85 min en pointe. Péages ~10 € inclus.",
      conseils: "CDG pour vols intercontinentaux. La Francilienne contourne Paris. Prévoir 3h30 avant le vol depuis Provins.",
      comparaisonTransport: "Train + RER B = 3h, 22-30 €. Taxi 95-130 € : 65 min. Le taxi est 3× plus rapide.",
      faq: [
        { question: "Prix ?", answer: "95-130 € berline, 175 € van. Tarif fixe." },
        { question: "Durée ?", answer: "65 min normalement." },
        { question: "Paris ?", answer: "Non, Francilienne contourne Paris." },
        { question: "Terminal ?", answer: "Dépose au terminal exact." },
        { question: "Retour ?", answer: "Même tarif, suivi de vol." }
      ],
    },
    {
      metaTitle: "Taxi Provins → CDG | 95 km, from €95 | TaxiNeo",
      metaDescription: "Taxi from Provins to CDG. 65 min via A4/Francilienne. UNESCO city. Fixed price €95-130.",
      heroTitle: "Taxi Provins → CDG Airport",
      heroSubtitle: "Your Provins → CDG transfer at €95 — €130. 95 km, 65 min.",
      description: "CDG is 65 min from Provins via A4 and Francilienne.",
      routeDescription: "Via A4 then Francilienne (A104) north and A1.",
      introduction: "The taxi transfer from Provins to Charles de Gaulle Airport is the vital link between this UNESCO World Heritage medieval city and France's largest international airport, covering 95 km in approximately 65 minutes via the A4 and the Francilienne orbital motorway. Provins, inscribed on the UNESCO list since 2001, was one of the great cities of medieval Europe, hosting the legendary Champagne Fairs that drew merchants from across Christendom. Today, the upper town's 1,200 metres of 13th-century ramparts, Caesar's Tower with its unique octagonal keep, the underground passages, and the tithe barn draw over 300,000 visitors annually -- many of them international tourists from the United Kingdom, the United States, Japan and beyond, who arrive and depart through CDG. For these visitors, a direct taxi from their Provins hotel to their departure terminal is far preferable to the punishing public transport alternative: Transilien P to Paris-Est (1 hour 20 minutes), then a metro or RER transfer across the crowded capital, followed by the RER B to Roissy -- totalling 3 hours with two stressful luggage-laden connections. The taxi route via the Francilienne bypasses Paris entirely, delivering you to CDG without ever entering the capital. The 12,000 residents of Provins also rely on this transfer for long-haul flights to North America, Asia, sub-Saharan Africa, the Caribbean and the Indian Ocean, all concentrated at CDG.",
      itineraire: "Your driver departs Provins heading west on the A4 (eastern motorway), crossing the Brie plateau through open farmland. Instead of continuing towards Paris, the driver takes the Francilienne (A104) northbound, a modern orbital motorway that completely bypasses the capital via Marne-la-Vallee and Aulnay-sous-Bois. The Francilienne then connects to the A1 (northern motorway) heading directly to Roissy-Charles de Gaulle. Terminal access is direct: T1 for Star Alliance carriers, T2A through T2G for Air France and SkyTeam partners, or T3 for low-cost airlines. Allow 65 minutes in normal conditions, extending to approximately 85 minutes during peak hours. Tolls of around 10 euros are included in the fixed fare. On weekends, the alternative route via the A4 and northern ring road may occasionally prove faster.",
      conseils: "CDG is the right airport from Provins for all intercontinental and long-haul flights. Allow at least 3 hours 30 minutes before your scheduled departure when leaving from Provins, to account for the drive and check-in. The Francilienne completely avoids Paris, keeping the journey smooth even during weekday rush hours. When booking, specify your terminal -- CDG's Terminal 2 comprises seven sub-terminals (2A to 2G) that are several minutes' walk apart. Before your departure, make time to explore Provins's extraordinary heritage: the medieval shows (April to November) are spectacular, the underground passages offer fascinating guided tours, and the Provins rose (Rosa gallica, introduced from the Crusades in the 13th century) is sold as jam, honey, and confectionery throughout the town. CDG long-stay parking costs 20-30 euros per day, meaning a taxi return trip is more economical from just five days of travel.",
      comparaisonTransport: "Train + RER B = 3h, €22-30. Taxi €95-130: 65 min. Taxi is 3× faster.",
      faq: [
        { question: "How much does a taxi from Provins to CDG Airport cost?", answer: "€95-130 sedan, €175 van. Fixed fare." },
        { question: "How long is the taxi ride from Provins to CDG Airport?", answer: "65 min normally." },
        { question: "Does the taxi from Provins to CDG go via Paris?", answer: "No, Francilienne bypasses Paris." },
        { question: "Which terminal at CDG Airport will my driver drop me at?", answer: "Drop-off at exact terminal." },
        { question: "Can I book a return taxi from CDG Airport to Provins?", answer: "Same fare, flight tracking." }
      ],
    }
  ),
  // ═══════════════════════════════════════════════════════════
  // NEMOURS (13 000 hab.)
  // ═══════════════════════════════════════════════════════════
  smeRoute(
    "taxi-nemours-paris", "Nemours", "Paris",
    48.2680, 2.6960, 48.8566, 2.3522,
    75, 55, "78 — 105 €", "ville-a-ville",
    ["A6", "Château-musée", "Loing", "Musée de Préhistoire", "Forêt"],
    78, 105, 140, 75, "A6", "~6 €", "nemours", "paris",
    ["taxi-nemours-orly", "taxi-nemours-cdg", "taxi-fontainebleau-paris"],
    ["ville-a-ville", "paris", "nemours", "prehistoire", "seine-et-marne"],
    {
      metaTitle: "Taxi Nemours → Paris | 75 km, dès 78 € | TaxiNeo",
      metaDescription: "Transfert taxi Nemours vers Paris. 55 min par A6. Château-musée, musée de Préhistoire, Loing. Prix fixe 78-105 €.",
      heroTitle: "Taxi Nemours → Paris",
      heroSubtitle: "Transfert Nemours → Paris au prix fixe de 78 — 105 €. 75 km, 55 min.",
      description: "Paris est à 55 min de Nemours par l'A6.",
      routeDescription: "Via l'A6 nord direction Paris.",
      introduction: "Nemours, 13 000 habitants, est une cité chargée d'histoire au confluent du Loing et du canal du Loing, dominée par son château médiéval du XIIe siècle (aujourd'hui musée municipal). La ville abrite surtout le Musée départemental de Préhistoire d'Île-de-France, l'un des plus importants musées préhistoriques de France, installé dans un bâtiment brutaliste remarquable signé Roland Simounet (1981) au cœur d'un parc boisé de 40 hectares parsemé de rochers de grès. Les rochers de Nemours, satellites du massif de Fontainebleau, attirent les grimpeurs de bloc du monde entier. La ville, traversée par le Loing navigable, offre un cadre fluvial pittoresque avec son église Saint-Jean-Baptiste (XIe-XVIe s.) et ses lavoirs restaurés. Le Transilien R dessert Paris-Gare de Lyon en 1h, mais le taxi est privilégié par les visiteurs des musées et les professionnels en déplacement.",
      itineraire: "Départ de Nemours, accès direct A6 nord. Direction Paris, sortie Porte d'Italie ou Porte d'Orléans. 55 min hors pointe, 75 min en heure de pointe. Péages ~6 € inclus.",
      conseils: "Le Musée de Préhistoire (architecture Simounet, collections paléolithiques exceptionnelles) vaut le détour. Le château-musée retrace l'histoire locale. Les rochers de Nemours sont un spot d'escalade de bloc prisé. Le Loing se parcourt en canoë ou à vélo le long du canal. Marché le mercredi et samedi matin.",
      comparaisonTransport: "Transilien R Nemours → Paris-Gare de Lyon : 10-14 €, 1h. Taxi 78-105 € : 55 min porte-à-porte. Pour 2-3 passagers (26-35 €/pers.), le taxi est compétitif avec un gain de temps.",
      faq: [
        { question: "Prix ?", answer: "78-105 € berline, 140 € van. Tarif fixe." },
        { question: "Durée ?", answer: "55 min normalement, 75 min en pointe." },
        { question: "Musée de Préhistoire ?", answer: "L'un des plus importants de France. Architecture Simounet dans un parc de grès." },
        { question: "Escalade ?", answer: "Les rochers de Nemours sont un spot de bloc réputé, satellite de Fontainebleau." },
        { question: "Retour ?", answer: "Même tarif fixe." }
      ],
    },
    {
      metaTitle: "Taxi Nemours → Paris | 75 km, from €78 | TaxiNeo",
      metaDescription: "Taxi from Nemours to Paris. 55 min via A6. Castle museum, Prehistory museum, Loing river. Fixed price €78-105.",
      heroTitle: "Taxi Nemours → Paris",
      heroSubtitle: "Your Nemours → Paris transfer at €78 — €105. 75 km, 55 min.",
      description: "Paris is 55 min from Nemours via the A6.",
      routeDescription: "Via A6 north towards Paris.",
      introduction: "Nemours, population 13,000, is a history-rich town at the confluence of the Loing river and canal, dominated by its 12th-century medieval castle (now a municipal museum). The town notably houses the Île-de-France Departmental Museum of Prehistory, one of France's most important prehistoric museums, set in a remarkable brutalist building by Roland Simounet (1981) within a 40-hectare wooded park studded with sandstone boulders. The Nemours rocks, satellites of the Fontainebleau massif, attract bouldering climbers from around the world. The town, crossed by the navigable Loing, offers a picturesque riverside setting with its Saint-Jean-Baptiste church (11th-16th c.) and restored washhouses. Transilien R serves Paris-Gare de Lyon in 1 hour, but the taxi is preferred by museum visitors and travelling professionals.",
      itineraire: "From Nemours, direct A6 north access. Towards Paris, exit Porte d'Italie or Porte d'Orléans. 55 min off-peak, 75 min in rush hour. Tolls ~€6 included.",
      conseils: "The Prehistory Museum (Simounet architecture, exceptional Palaeolithic collections) is worth the visit. The castle museum traces local history. Nemours rocks are a prized bouldering spot. The Loing can be explored by canoe or bike along the canal. Market on Wednesday and Saturday mornings.",
      comparaisonTransport: "Transilien R Nemours → Paris-Gare de Lyon: €10-14, 1h. Taxi €78-105: 55 min door-to-door. For 2-3 passengers (€26-35/pp), taxi is competitive with time saving.",
      faq: [
        { question: "How much does a taxi from Nemours to Paris cost?", answer: "€78-105 sedan, €140 van. Fixed fare." },
        { question: "How long is the taxi ride from Nemours to Paris?", answer: "55 min normally, 75 min in rush hour." },
        { question: "What is the Prehistory Museum in Nemours?", answer: "One of France's most important. Simounet architecture in a sandstone park." },
        { question: "Is Nemours a good spot for bouldering and climbing?", answer: "Nemours rocks are a renowned bouldering spot, satellite of Fontainebleau." },
        { question: "Can I book a return taxi from Paris to Nemours?", answer: "Same fixed fare." }
      ],
    }
  ),
  smeRoute(
    "taxi-nemours-orly", "Nemours", "Aéroport d'Orly",
    48.2680, 2.6960, 48.7262, 2.3652,
    60, 40, "65 — 88 €", "aeroport",
    ["A6", "Orly 1-4", "Loing", "Préhistoire"],
    65, 88, 118, 60, "A6", "~5 €", "nemours", "orly",
    ["taxi-nemours-paris", "taxi-nemours-cdg", "taxi-fontainebleau-orly"],
    ["aeroport", "orly", "nemours", "seine-et-marne"],
    {
      metaTitle: "Taxi Nemours → Orly | 60 km, dès 65 € | TaxiNeo",
      metaDescription: "Transfert taxi Nemours vers Orly. 40 min par A6. Musée Préhistoire, château. Prix fixe 65-88 €.",
      heroTitle: "Taxi Nemours → Aéroport d'Orly",
      heroSubtitle: "Transfert Nemours → Orly au prix fixe de 65 — 88 €. 60 km, 40 min.",
      description: "Orly est à 40 min de Nemours via l'A6.",
      routeDescription: "Via l'A6 nord puis sortie Orly.",
      introduction: "Nemours, cité du Loing et capitale de la préhistoire francilienne, accède à Orly en 40 minutes par l'A6. Cette autoroute longe la commune et offre un accès quasi immédiat. Les 13 000 Nemouriens et les visiteurs du Musée de Préhistoire et des rochers de grès utilisent ce transfert pour les vols courts et moyen-courriers d'Orly. L'alternative en transport en commun (Transilien R → Paris → Orlyval) prend 2 heures avec 2 correspondances.",
      itineraire: "Nemours → A6 nord → sortie Orly. 40 min hors pointe, 60 min en pointe. Péages ~5 € inclus.",
      conseils: "Orly pour vols domestiques et méditerranéens. L'A6 est au pied de Nemours. Prévoir 2h30 avant le vol.",
      comparaisonTransport: "Transilien + Orlyval = 2h, 16-22 €. Taxi 65-88 € : 40 min. Le taxi est 3× plus rapide.",
      faq: [
        { question: "Prix ?", answer: "65-88 € berline, 118 € van. Tarif fixe." },
        { question: "Durée ?", answer: "40 min normalement." },
        { question: "Terminal ?", answer: "Dépose au terminal exact." },
        { question: "Retour ?", answer: "Même tarif, suivi de vol." },
        { question: "Escalade ?", answer: "Prise en charge possible aux rochers de Nemours." }
      ],
    },
    {
      metaTitle: "Taxi Nemours → Orly | 60 km, from €65 | TaxiNeo",
      metaDescription: "Taxi from Nemours to Orly. 40 min via A6. Prehistory museum, castle. Fixed price €65-88.",
      heroTitle: "Taxi Nemours → Orly Airport",
      heroSubtitle: "Your Nemours → Orly transfer at €65 — €88. 60 km, 40 min.",
      description: "Orly is 40 min from Nemours via the A6.",
      routeDescription: "Via A6 north then Orly exit.",
      introduction: "The taxi transfer from Nemours to Orly Airport connects this historically rich Loing valley town -- home to the renowned Ile-de-France Departmental Museum of Prehistory -- to Paris's second airport in just 40 minutes via the A6 motorway. Nemours, population 13,000, sits at the confluence of the Loing river and canal, overlooked by a handsome 12th-century medieval castle that now serves as the municipal museum. The town's greatest cultural asset is the Prehistory Museum, housed in a striking brutalist building designed by Roland Simounet in 1981, set within a 40-hectare wooded park scattered with the sandstone boulders that are a hallmark of the wider Fontainebleau massif. These Nemours rocks draw bouldering enthusiasts from around the world, and many international climbers rely on the Orly transfer for their arrival and departure. The A6 motorway runs directly alongside the town, giving Nemours virtually immediate access to the airport with no urban congestion to navigate. Orly concentrates flights to southern France (Nice, Toulouse, Marseille, Bordeaux, Ajaccio), Corsica, Portugal, Spain and North Africa. The public transport alternative -- Transilien R to Paris-Gare de Lyon, then metro or RER across the capital, followed by Orlyval -- takes a minimum of 2 hours with two connections, making the taxi the only practical choice for travellers with luggage or time constraints.",
      itineraire: "Your driver joins the A6 motorway (Autoroute du Soleil) heading north from Nemours, one of the most straightforward airport approaches in the region. The A6 passes through the Fontainebleau forest area before reaching the Orly Airport exit south of Paris. Drop-off is at your exact terminal (Orly 1, 2, 3 or 4). Allow 40 minutes in normal conditions, extending to approximately 60 minutes during peak hours, particularly on the A6 stretch approaching Evry and the southern Parisian suburbs. Tolls of around 5 euros are included in the fixed fare.",
      conseils: "Orly Airport is the natural choice from Nemours for domestic flights and Mediterranean destinations -- its proximity via the A6, which practically runs through the town, makes this one of the most efficient airport transfers in southern Seine-et-Marne. Allow 2 hours 30 minutes before a domestic departure and 3 hours for international flights. Before your trip, the Prehistory Museum (exceptional Palaeolithic collections in Simounet's award-winning architecture) is absolutely worth a visit. The castle museum traces local history from the medieval period onwards, and the Nemours bouldering rocks are a world-class climbing destination. The Loing river and canal offer pleasant walks and canoe outings, and the town market runs on Wednesday and Saturday mornings. If you are heading to a long-haul destination, consider CDG Airport instead -- the transfer is longer (70 minutes) but CDG handles all intercontinental flights.",
      comparaisonTransport: "Transilien + Orlyval = 2h, €16-22. Taxi €65-88: 40 min. Taxi is 3× faster.",
      faq: [
        { question: "How much does a taxi from Nemours to Orly Airport cost?", answer: "€65-88 sedan, €118 van. Fixed fare." },
        { question: "How long is the taxi ride from Nemours to Orly Airport?", answer: "40 min normally." },
        { question: "Which terminal at Orly Airport will my driver drop me at?", answer: "Drop-off at exact terminal." },
        { question: "Can I book a return taxi from Orly Airport to Nemours?", answer: "Same fare, flight tracking." },
        { question: "Can I be picked up from the Nemours bouldering area?", answer: "Pick-up available at Nemours bouldering area." }
      ],
    }
  ),
  smeRoute(
    "taxi-nemours-cdg", "Nemours", "Aéroport CDG",
    48.2680, 2.6960, 49.0097, 2.5479,
    105, 70, "105 — 140 €", "aeroport",
    ["A6", "Francilienne", "A1", "CDG", "Préhistoire", "Loing"],
    105, 140, 188, 90, "A6 + A104 + A1", "~12 €", "nemours", "cdg",
    ["taxi-nemours-paris", "taxi-nemours-orly", "taxi-fontainebleau-cdg"],
    ["aeroport", "cdg", "roissy", "nemours", "seine-et-marne"],
    {
      metaTitle: "Taxi Nemours → CDG | 105 km, dès 105 € | TaxiNeo",
      metaDescription: "Transfert taxi Nemours vers CDG. 70 min par A6/Francilienne. Musée Préhistoire. Prix fixe 105-140 €.",
      heroTitle: "Taxi Nemours → Aéroport CDG",
      heroSubtitle: "Transfert Nemours → CDG au prix fixe de 105 — 140 €. 105 km, 70 min.",
      description: "CDG est à 70 min de Nemours via A6 et Francilienne.",
      routeDescription: "Via A6 puis Francilienne (A104) nord et A1.",
      introduction: "Le transfert Nemours – CDG couvre 105 km en contournant Paris via l'A6 puis la Francilienne, atteignant Roissy en 70 minutes. Nemours, avec son musée de Préhistoire de renommée nationale et ses rochers de grès prisés des grimpeurs internationaux, génère un flux de visiteurs venant des quatre coins du monde. Les résidents accèdent aux vols long-courriers de CDG par cette route directe qui évite totalement Paris. L'alternative ferroviaire (Transilien → Paris → RER B, 2h30+) est dissuasive.",
      itineraire: "Nemours → A6 nord → Francilienne (A104) → A1 → CDG. 70 min hors pointe, 90 min en pointe. Péages ~12 € inclus.",
      conseils: "CDG pour vols intercontinentaux. Route sans Paris. Prévoir 3h30 avant le vol.",
      comparaisonTransport: "Train + RER B = 2h30+, 22-30 €. Taxi 105-140 € : 70 min. Le taxi est 2× plus rapide.",
      faq: [
        { question: "Prix ?", answer: "105-140 € berline, 188 € van. Tarif fixe." },
        { question: "Durée ?", answer: "70 min normalement." },
        { question: "Paris ?", answer: "Non, route A6 + Francilienne contourne Paris." },
        { question: "Terminal ?", answer: "Dépose au terminal exact." },
        { question: "Retour ?", answer: "Même tarif, suivi de vol." }
      ],
    },
    {
      metaTitle: "Taxi Nemours → CDG | 105 km, from €105 | TaxiNeo",
      metaDescription: "Taxi from Nemours to CDG. 70 min via A6/Francilienne. Prehistory museum. Fixed price €105-140.",
      heroTitle: "Taxi Nemours → CDG Airport",
      heroSubtitle: "Your Nemours → CDG transfer at €105 — €140. 105 km, 70 min.",
      description: "CDG is 70 min from Nemours via A6 and Francilienne.",
      routeDescription: "Via A6 then Francilienne (A104) north and A1.",
      introduction: "The taxi transfer from Nemours to Charles de Gaulle Airport covers 105 km, bypassing Paris entirely via the A6 and the Francilienne orbital motorway to reach Roissy in approximately 70 minutes. Nemours, a town of 13,000 inhabitants at the confluence of the Loing river and canal in southern Seine-et-Marne, is a destination of genuine international interest. The Ile-de-France Departmental Museum of Prehistory, housed in Roland Simounet's acclaimed brutalist building within a 40-hectare park of sandstone boulders, draws archaeologists and history enthusiasts from across the globe. The Nemours rocks -- satellite formations of the Fontainebleau massif -- are a world-renowned bouldering destination, attracting climbers from Japan, the United States, the United Kingdom and Germany throughout the year. Many of these international visitors arrive and depart through CDG, France's premier airport hub with over 70 million annual passengers and connections to North America, Asia, sub-Saharan Africa, the Caribbean and the Indian Ocean. For Nemours residents, CDG is the gateway to long-haul travel. The rail alternative is prohibitively slow: Transilien R to Paris-Gare de Lyon, then metro across the capital, followed by RER B to Roissy -- a journey of well over 2 hours 30 minutes with two tiring connections. The taxi route via the A6 and Francilienne avoids Paris completely, providing a smooth, direct transfer even during weekday rush hours.",
      itineraire: "Your driver joins the A6 motorway (Autoroute du Soleil) heading north from Nemours, passing through the Fontainebleau forest area. Before reaching Paris, the driver exits onto the Francilienne (A104), the orbital motorway that sweeps around the eastern and northern fringes of the capital via Evry, Marne-la-Vallee and Aulnay-sous-Bois. The Francilienne then connects to the A1 (northern motorway) heading directly to Roissy-Charles de Gaulle. Terminal access is direct: T1, T2A through T2G, or T3. Allow 70 minutes in normal conditions, extending to approximately 90 minutes during peak hours. Tolls of around 12 euros are included in the fixed fare.",
      conseils: "CDG is the right airport choice from Nemours for all intercontinental and long-haul flights. Allow at least 3 hours 30 minutes before your scheduled departure to account for the 70-minute drive plus check-in and security. The route entirely avoids Paris, which keeps the journey predictable even on busy weekdays. When booking, specify your terminal -- Terminal 2 at CDG has seven sub-terminals (2A to 2G) that are spaced apart. CDG long-stay parking costs 20-30 euros per day, so a taxi return trip becomes more economical than driving and parking from about five days of absence. Before departing Nemours, the Prehistory Museum is absolutely worth visiting (remarkable Palaeolithic collections in stunning architecture), and the medieval castle overlooking the Loing offers panoramic views of the river valley. The town market on Wednesday and Saturday mornings is excellent for local produce.",
      comparaisonTransport: "Train + RER B = 2h30+, €22-30. Taxi €105-140: 70 min. Taxi is 2× faster.",
      faq: [
        { question: "How much does a taxi from Nemours to CDG Airport cost?", answer: "€105-140 sedan, €188 van. Fixed fare." },
        { question: "How long is the taxi ride from Nemours to CDG Airport?", answer: "70 min normally." },
        { question: "Does the taxi from Nemours to CDG go via Paris?", answer: "No, A6 + Francilienne route bypasses Paris." },
        { question: "Which terminal at CDG Airport will my driver drop me at?", answer: "Drop-off at exact terminal." },
        { question: "Can I book a return taxi from CDG Airport to Nemours?", answer: "Same fare, flight tracking." }
      ],
    }
  ),
];
