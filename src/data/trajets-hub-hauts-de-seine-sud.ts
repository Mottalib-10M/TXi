import type { Trajet } from "./trajets";

function hdsSRoute(
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
    hub: "hauts-de-seine-sud",
    i18n: { fr: frMeta, en: enMeta },
  };
}

export const trajetsHautsDeSeineSud: Trajet[] = [
  // ═══════════════════════════════════════════════════════════
  // BOULOGNE-BILLANCOURT (121 000 hab.) — seul Paris manque
  // ═══════════════════════════════════════════════════════════
  hdsSRoute(
    "taxi-boulogne-billancourt-paris", "Boulogne-Billancourt", "Paris",
    48.8352, 2.2410, 48.8566, 2.3522,
    8, 15, "18 — 30 €", "ville-a-ville",
    ["Périphérique", "Bois de Boulogne", "Île Seguin", "Studios Boulogne", "Seine Musicale"],
    18, 30, 42, 25, "Périph.", "0 €", "boulogne-billancourt", "paris",
    ["taxi-boulogne-billancourt-orly", "taxi-boulogne-billancourt-cdg", "taxi-issy-les-moulineaux-paris"],
    ["ville-a-ville", "paris", "boulogne-billancourt", "seine-musicale", "hauts-de-seine"],
    {
      metaTitle: "Taxi Boulogne-Billancourt → Paris | 8 km, dès 18 € | TaxiNeo",
      metaDescription: "Transfert taxi Boulogne-Billancourt vers Paris. 15 min. 121 000 hab., Seine Musicale, île Seguin. Prix fixe 18-30 €.",
      heroTitle: "Taxi Boulogne-Billancourt → Paris",
      heroSubtitle: "Transfert Boulogne-Billancourt → Paris au prix fixe de 18 — 30 €. 8 km, 15 min.",
      description: "Paris est à 15 min de Boulogne-Billancourt.",
      routeDescription: "Via le périphérique ou les quais de Seine.",
      introduction: "Boulogne-Billancourt, 121 000 habitants, est la commune la plus peuplée d'Île-de-France hors Paris. Ancienne capitale mondiale de l'automobile (usines Renault, aujourd'hui reconverties), la ville s'est réinventée autour de l'île Seguin : la Seine Musicale, salle de concert iconique signée Shigeru Ban (2017), y programme 300 représentations annuelles attirant 400 000 spectateurs. Le quartier du Trapèze, éco-quartier bâti sur les anciens terrains Renault, mêle logements, bureaux (TF1, Bouygues) et commerces. Boulogne borde le Bois de Boulogne (846 hectares), Roland-Garros et le Parc des Princes. Le métro 9 et 10 desservent Paris en 15 min, mais le taxi est privilégié pour les sorties spectacles (Seine Musicale, Parc des Princes), les transferts avec matériel et les déplacements vers des quartiers parisiens non desservis par ces lignes.",
      itineraire: "Boulogne-Billancourt → quais de Seine ou périphérique → Paris. 15 min hors pointe, 25 min en pointe. Sans péage.",
      conseils: "La Seine Musicale programme concerts classiques, pop, jazz (réservation sur site). L'île Seguin est un modèle de reconversion industrielle. Roland-Garros est à la limite nord de Boulogne. Le marché de Boulogne (mercredi, vendredi, dimanche) est excellent.",
      comparaisonTransport: "Métro 9/10 Boulogne → Paris : 2-4 €, 15 min. Taxi 18-30 € : 15 min porte-à-porte. Le métro est moins cher solo ; le taxi est idéal pour les sorties spectacles, les groupes et les trajets avec bagages.",
      faq: [
        { question: "Prix ?", answer: "18-30 € berline, 42 € van. Tarif fixe." },
        { question: "Durée ?", answer: "15 min normalement, 25 min en pointe." },
        { question: "Seine Musicale ?", answer: "Prise en charge à la Seine Musicale, île Seguin." },
        { question: "Parc des Princes ?", answer: "Prise en charge possible les soirs de match." },
        { question: "Retour ?", answer: "Même tarif fixe." }
      ],
    },
    {
      metaTitle: "Taxi Boulogne-Billancourt → Paris | 8 km, from €18 | TaxiNeo",
      metaDescription: "Taxi from Boulogne-Billancourt to Paris. 15 min. 121,000 residents, Seine Musicale, Île Seguin. Fixed price €18-30.",
      heroTitle: "Taxi Boulogne-Billancourt → Paris",
      heroSubtitle: "Your Boulogne-Billancourt → Paris transfer at €18 — €30. 8 km, 15 min.",
      description: "Paris is 15 min from Boulogne-Billancourt.",
      routeDescription: "Via the ring road or Seine quays.",
      introduction: "Boulogne-Billancourt, 121,000 inhabitants, is Île-de-France's most populated commune outside Paris. Former world automobile capital (Renault factories, now converted), the town reinvented itself around Île Seguin: the Seine Musicale, Shigeru Ban's iconic concert hall (2017), programmes 300 annual performances drawing 400,000 spectators. The Trapèze eco-district on former Renault land blends housing, offices (TF1, Bouygues) and retail. Boulogne borders the Bois de Boulogne (846 hectares), Roland-Garros and Parc des Princes. Metro 9 and 10 serve Paris in 15 min, but taxis are preferred for show outings (Seine Musicale, Parc des Princes), transfers with equipment, and journeys to Paris areas these lines don't cover.",
      itineraire: "Your driver departs Boulogne-Billancourt with a choice of two scenic routes into Paris. The first option follows the quays along the Seine, passing through the Pont de Saint-Cloud area and along the riverside towards central Paris — a pleasant and often faster route outside of rush hour. The second option takes the Boulevard Peripherique, entering at Porte de Saint-Cloud or Porte d'Auteuil and circling to the appropriate exit for your Paris destination. Allow 15 minutes in normal traffic, extending to 25 minutes during rush hour. There are no tolls on either route. For destinations in the 15th or 16th arrondissements, the quays are typically the fastest option, while the Peripherique is more efficient for northern or eastern Paris.",
      conseils: "The Seine Musicale on Ile Seguin programmes over 300 performances annually, spanning classical concerts, pop and rock shows, jazz evenings and theatrical productions — check their website for the current season and book in advance for popular shows. Ile Seguin itself is a remarkable example of industrial conversion, transformed from the historic Renault factory site into a vibrant cultural and residential district. The Trapeze eco-quarter, built on the former Renault grounds, is home to the headquarters of TF1 and Bouygues. Roland-Garros, venue of the French Open tennis tournament, sits at Boulogne's northern edge near the Bois de Boulogne. The Parc des Princes, home stadium of Paris Saint-Germain, is also within Boulogne's boundaries. The town market runs on Wednesday, Friday and Sunday mornings and is well regarded for its quality and variety. For show evenings at the Seine Musicale or match nights at the Parc des Princes, the taxi is the most practical option to avoid parking hassles and crowded metro trains.",
      comparaisonTransport: "Metro 9/10 Boulogne → Paris: €2-4, 15 min. Taxi €18-30: 15 min door-to-door. Metro cheaper solo; taxi ideal for show outings, groups and luggage.",
      faq: [
        { question: "How much does a taxi from Boulogne-Billancourt to Paris cost?", answer: "€18-30 sedan, €42 van. Fixed fare." },
        { question: "How long is the taxi ride from Boulogne-Billancourt to Paris?", answer: "15 min normally, 25 min in rush hour." },
        { question: "Can I get a taxi from the Seine Musicale concert hall?", answer: "Pick-up at Seine Musicale, Île Seguin." },
        { question: "Can I get a taxi from Parc des Princes on match evenings?", answer: "Pick-up available on match evenings." },
        { question: "Can I book a return taxi from Paris to Boulogne-Billancourt?", answer: "Same fixed fare." }
      ],
    }
  ),
  // ═══════════════════════════════════════════════════════════
  // ISSY-LES-MOULINEAUX (69 000 hab.)
  // ═══════════════════════════════════════════════════════════
  hdsSRoute(
    "taxi-issy-les-moulineaux-orly", "Issy-les-Moulineaux", "Aéroport d'Orly",
    48.8244, 2.2700, 48.7262, 2.3652,
    15, 20, "22 — 35 €", "aeroport",
    ["Périphérique", "A6", "Orly", "Héliport de Paris", "Fort d'Issy", "Microsoft France"],
    22, 35, 48, 35, "Périph. + A6", "0 €", "issy-les-moulineaux", "orly",
    ["taxi-issy-les-moulineaux-cdg", "taxi-boulogne-billancourt-orly", "taxi-meudon-orly"],
    ["aeroport", "orly", "issy-les-moulineaux", "hauts-de-seine"],
    {
      metaTitle: "Taxi Issy-les-Moulineaux → Orly | 15 km, dès 22 € | TaxiNeo",
      metaDescription: "Transfert taxi Issy-les-Moulineaux vers Orly. 20 min. Héliport, Microsoft France, Fort d'Issy. Prix fixe 22-35 €.",
      heroTitle: "Taxi Issy-les-Moulineaux → Aéroport d'Orly",
      heroSubtitle: "Transfert Issy → Orly au prix fixe de 22 — 35 €. 15 km, 20 min.",
      description: "Orly est à 20 min d'Issy-les-Moulineaux.",
      routeDescription: "Via le périphérique sud puis A6.",
      introduction: "Issy-les-Moulineaux, 69 000 habitants, est un pôle technologique majeur de l'ouest parisien. La ville accueille les sièges de Microsoft France, Cisco, Hewlett-Packard et Arte (la chaîne franco-allemande) dans des immeubles modernes du quartier de Seine-Ouest. L'héliport de Paris, seul héliport civil de la capitale, se trouve sur le territoire isséen. Le fort d'Issy (XIXe s.), reconverti en éco-quartier résidentiel, est un modèle de reconversion urbaine. Issy est aussi la ville pionnière du numérique en France (première carte de vie quotidienne, administration 100 % dématérialisée). Le transfert vers Orly par le périphérique et l'A6 prend 20 minutes — un trajet court et direct pour les cadres du tech et les résidents.",
      itineraire: "Issy → périphérique sud → A6 → Orly. 20 min hors pointe, 35 min en pointe. Sans péage.",
      conseils: "Issy est la capitale française du numérique. Le musée français de la Carte à Jouer est unique en France. Le parc de l'Île Saint-Germain offre un bel espace vert en bord de Seine.",
      comparaisonTransport: "Métro 12 + Orlyval = 45 min, 12-15 €. Taxi 22-35 € : 20 min. Le taxi est 2× plus rapide.",
      faq: [
        { question: "Prix ?", answer: "22-35 € berline, 48 € van. Tarif fixe." },
        { question: "Durée ?", answer: "20 min normalement." },
        { question: "Terminal ?", answer: "Dépose au terminal exact." },
        { question: "Microsoft ?", answer: "Prise en charge au siège Microsoft France possible." },
        { question: "Retour ?", answer: "Même tarif, suivi de vol." }
      ],
    },
    {
      metaTitle: "Taxi Issy-les-Moulineaux → Orly | 15 km, from €22 | TaxiNeo",
      metaDescription: "Taxi from Issy-les-Moulineaux to Orly. 20 min. Heliport, Microsoft France, Fort d'Issy. Fixed price €22-35.",
      heroTitle: "Taxi Issy-les-Moulineaux → Orly Airport",
      heroSubtitle: "Your Issy → Orly transfer at €22 — €35. 15 km, 20 min.",
      description: "Orly is 20 min from Issy-les-Moulineaux.",
      routeDescription: "Via the ring road south then A6.",
      introduction: "Issy-les-Moulineaux, population 69,000, is a major tech hub in western Paris. The town hosts headquarters of Microsoft France, Cisco, Hewlett-Packard and Arte (the Franco-German channel) in modern Seine-Ouest buildings. Paris's only civilian heliport sits on Issy territory. The Fort d'Issy (19th c.), converted into a residential eco-district, is a model of urban regeneration. Issy is also France's digital pioneer (first smart-city card, 100% paperless administration). The ring road/A6 transfer to Orly takes 20 minutes — short and direct for tech executives and residents.",
      itineraire: "Your driver departs Issy-les-Moulineaux heading south towards the Boulevard Peripherique, entering at Porte de Versailles or Porte d'Issy. The route follows the Peripherique southbound, passing Porte d'Italie before connecting to the A6 motorway towards Orly Airport. Allow 20 minutes in normal traffic conditions, extending to 35 minutes during rush hour when the Peripherique can slow near Porte de Versailles, especially during trade shows at the Parc des Expositions. There are no tolls on this route. An alternative route via the D7 through Clamart and the N118 is available if the Peripherique is heavily congested.",
      conseils: "Issy-les-Moulineaux has earned its reputation as France's digital capital, pioneering smart-city initiatives and hosting the French headquarters of Microsoft, Cisco and Hewlett-Packard in the modern Seine-Ouest business district. The French Playing Card Museum (Musee de la Carte a Jouer), housed in a beautifully restored building, is unique in France and well worth a visit. The Ile Saint-Germain park offers lovely green space along the Seine, featuring the remarkable Tour aux Figures sculpture by Jean Dubuffet. The Paris heliport, France's only civilian heliport, sits within Issy's territory. The Fort d'Issy, a 19th-century military fortification converted into a residential eco-district, showcases innovative urban renewal. Orly serves domestic French routes, southern Europe and North Africa. Specify your terminal (Orly 1, 2, 3 or 4) when booking. Pick-up is available at any tech campus in Seine-Ouest, the Fort d'Issy neighbourhood or anywhere else in the town.",
      comparaisonTransport: "Metro 12 + Orlyval = 45 min, €12-15. Taxi €22-35: 20 min. Taxi is 2× faster.",
      faq: [
        { question: "How much does a taxi from Issy-les-Moulineaux to Orly Airport cost?", answer: "€22-35 sedan, €48 van. Fixed fare." },
        { question: "How long is the taxi ride from Issy-les-Moulineaux to Orly Airport?", answer: "20 min normally." },
        { question: "Which terminal at Orly will my driver drop me at?", answer: "Drop-off at exact terminal." },
        { question: "Can I get a taxi from Microsoft France headquarters in Issy?", answer: "Pick-up at Microsoft France HQ available." },
        { question: "Can I book a return taxi from Orly Airport to Issy-les-Moulineaux?", answer: "Same fare, flight tracking." }
      ],
    }
  ),
  hdsSRoute(
    "taxi-issy-les-moulineaux-cdg", "Issy-les-Moulineaux", "Aéroport CDG",
    48.8244, 2.2700, 49.0097, 2.5479,
    35, 35, "40 — 58 €", "aeroport",
    ["Périphérique", "A1", "CDG", "Microsoft France", "Héliport"],
    40, 58, 78, 55, "Périph. + A1", "~3 €", "issy-les-moulineaux", "cdg",
    ["taxi-issy-les-moulineaux-orly", "taxi-boulogne-billancourt-cdg", "taxi-meudon-cdg"],
    ["aeroport", "cdg", "roissy", "issy-les-moulineaux", "hauts-de-seine"],
    {
      metaTitle: "Taxi Issy-les-Moulineaux → CDG | 35 km, dès 40 € | TaxiNeo",
      metaDescription: "Transfert taxi Issy vers CDG. 35 min. Pôle tech, Microsoft France. Prix fixe 40-58 €.",
      heroTitle: "Taxi Issy-les-Moulineaux → Aéroport CDG",
      heroSubtitle: "Transfert Issy → CDG au prix fixe de 40 — 58 €. 35 km, 35 min.",
      description: "CDG est à 35 min d'Issy-les-Moulineaux.",
      routeDescription: "Via le périphérique nord puis A1.",
      introduction: "Issy-les-Moulineaux, ville tech de 69 000 habitants abritant Microsoft France, Cisco et Arte, est reliée à CDG en 35 minutes par le périphérique et l'A1. Les cadres de la tech isséenne voyagent fréquemment en long-courrier via CDG pour rejoindre les sièges mondiaux de leurs entreprises (Seattle, San José, Tokyo). Le métro 12 rejoint Paris rapidement mais la correspondance vers CDG (via RER B) prend 1h15. Le taxi est le choix logique pour les déplacements internationaux.",
      itineraire: "Issy → périphérique nord → A1 → CDG. 35 min hors pointe, 55 min en pointe. Péages ~3 € inclus.",
      conseils: "CDG pour vols intercontinentaux. Issy est un hub tech majeur. L'héliport de Paris est le seul de la capitale.",
      comparaisonTransport: "Métro + RER B = 1h15, 12-15 €. Taxi 40-58 € : 35 min. Le taxi divise le temps par 2.",
      faq: [
        { question: "Prix ?", answer: "40-58 € berline, 78 € van. Tarif fixe." },
        { question: "Durée ?", answer: "35 min normalement." },
        { question: "Terminal ?", answer: "Dépose au terminal exact." },
        { question: "Retour ?", answer: "Même tarif, suivi de vol." },
        { question: "Tech ?", answer: "Prise en charge à tout siège tech d'Issy." }
      ],
    },
    {
      metaTitle: "Taxi Issy-les-Moulineaux → CDG | 35 km, from €40 | TaxiNeo",
      metaDescription: "Taxi from Issy to CDG. 35 min. Tech hub, Microsoft France. Fixed price €40-58.",
      heroTitle: "Taxi Issy-les-Moulineaux → CDG Airport",
      heroSubtitle: "Your Issy → CDG transfer at €40 — €58. 35 km, 35 min.",
      description: "CDG is 35 min from Issy-les-Moulineaux.",
      routeDescription: "Via the ring road north then A1.",
      introduction: "Issy-les-Moulineaux, a thriving tech town of 69,000 residents hosting the French headquarters of Microsoft, Cisco, Hewlett-Packard and the Franco-German television channel Arte, connects to CDG Airport in 35 minutes via the Boulevard Peripherique and the A1 motorway. The town's concentration of technology companies in the modern Seine-Ouest business district generates a constant flow of executives who travel long-haul via CDG to reach global headquarters in Seattle, San Jose, Tokyo, London and beyond. Issy has earned its reputation as France's digital pioneer, being the first town to introduce a smart-city card and achieve fully paperless municipal administration. The Fort d'Issy, a converted 19th-century military fortification now serving as a model eco-district, and the Paris heliport, France's only civilian heliport, add to the town's distinctive character. Metro line 12 provides quick access to central Paris, but the connection to CDG via the RER B requires at least one transfer and totals roughly 1 hour 15 minutes. For tech professionals heading to international meetings or returning from long-haul flights, the taxi is the logical and time-efficient choice.",
      itineraire: "Your driver departs Issy-les-Moulineaux heading north towards the Boulevard Peripherique, entering at Porte de Versailles or Porte d'Issy. The route follows the Peripherique northbound past Porte de la Chapelle before joining the A1 motorway towards Roissy-CDG. Allow 35 minutes in normal conditions, but plan for up to 55 minutes during rush hour, particularly around the Porte de la Chapelle interchange which is a common congestion point. Tolls are approximately 3 euros and are included in the fixed fare. In the event of heavy traffic on the Peripherique, your driver may opt for an alternative via the A86 ring road to avoid central Paris entirely.",
      conseils: "CDG is the Air France hub for intercontinental flights, serving destinations across the Americas, Asia, Africa and the Middle East. Issy-les-Moulineaux is a major technology hub and France's digital capital, with Microsoft France, Cisco and Hewlett-Packard all based in the Seine-Ouest district. The Paris heliport, located within Issy, is the capital's only civilian heliport and serves private aviation needs. Allow 2 to 3 hours before an intercontinental departure at CDG. Specify your terminal when booking: T1 for Star Alliance, T2 for Air France and SkyTeam, T3 for budget carriers. Pick-up is available at any tech campus in Issy, the Fort d'Issy neighbourhood, the heliport area or your home address.",
      comparaisonTransport: "Metro + RER B = 1h15, €12-15. Taxi €40-58: 35 min. Taxi halves the time.",
      faq: [
        { question: "How much does a taxi from Issy-les-Moulineaux to CDG Airport cost?", answer: "€40-58 sedan, €78 van. Fixed fare." },
        { question: "How long is the taxi ride from Issy-les-Moulineaux to CDG Airport?", answer: "35 min normally." },
        { question: "Which terminal at CDG will my driver drop me at?", answer: "Drop-off at exact terminal." },
        { question: "Can I book a return taxi from CDG Airport to Issy-les-Moulineaux?", answer: "Same fare, flight tracking." },
        { question: "Can I get picked up at a tech company headquarters in Issy-les-Moulineaux?", answer: "Pick-up at any Issy tech HQ." }
      ],
    }
  ),
  // ═══════════════════════════════════════════════════════════
  // MEUDON (46 000 hab.)
  // ═══════════════════════════════════════════════════════════
  hdsSRoute(
    "taxi-meudon-orly", "Meudon", "Aéroport d'Orly",
    48.8122, 2.2350, 48.7262, 2.3652,
    18, 20, "25 — 38 €", "aeroport",
    ["N118", "A6", "Orly", "Observatoire", "Terrasse de Meudon", "ONERA"],
    25, 38, 52, 35, "N118 + A6", "0 €", "meudon", "orly",
    ["taxi-meudon-cdg", "taxi-issy-les-moulineaux-orly", "taxi-clamart-orly"],
    ["aeroport", "orly", "meudon", "observatoire", "hauts-de-seine"],
    {
      metaTitle: "Taxi Meudon → Orly | 18 km, dès 25 € | TaxiNeo",
      metaDescription: "Transfert taxi Meudon vers Orly. 20 min par N118. Observatoire, terrasse, ONERA. Prix fixe 25-38 €.",
      heroTitle: "Taxi Meudon → Aéroport d'Orly",
      heroSubtitle: "Transfert Meudon → Orly au prix fixe de 25 — 38 €. 18 km, 20 min.",
      description: "Orly est à 20 min de Meudon via la N118.",
      routeDescription: "Via la N118 puis A6 sud.",
      introduction: "Meudon, 46 000 habitants, est une ville de collines boisées dominant la vallée de la Seine, célèbre pour l'Observatoire de Meudon (rattaché à l'Observatoire de Paris, spécialisé en astrophysique solaire et planétaire), la terrasse de Meudon (panorama exceptionnel sur Paris, vestige du château de Louis XIV brûlé en 1871) et l'ONERA (Office national d'études et de recherches aérospatiales), centre de recherche aéronautique de renommée mondiale. La forêt de Meudon (1 100 hectares) s'étend sur les collines sud de la commune. Le transfert vers Orly par la N118 est direct et rapide : 20 minutes. Les chercheurs de l'ONERA et de l'Observatoire, les résidents des quartiers résidentiels de Bellevue et Meudon-Val-Fleury, et les touristes empruntent régulièrement ce trajet.",
      itineraire: "Meudon → N118 sud → A6 → Orly. 20 min hors pointe, 35 min en pointe. Sans péage.",
      conseils: "L'Observatoire de Meudon propose des visites guidées (sur réservation). La terrasse offre l'une des plus belles vues sur Paris. L'ONERA est le centre de recherche aéronautique français. La forêt de Meudon est idéale pour la randonnée.",
      comparaisonTransport: "Transilien + Orlyval = 1h, 12-15 €. Taxi 25-38 € : 20 min. Trois fois plus rapide.",
      faq: [
        { question: "Prix ?", answer: "25-38 € berline, 52 € van. Tarif fixe." },
        { question: "Durée ?", answer: "20 min normalement." },
        { question: "Observatoire ?", answer: "Prise en charge à l'Observatoire de Meudon possible." },
        { question: "Terminal ?", answer: "Dépose au terminal exact." },
        { question: "Retour ?", answer: "Même tarif, suivi de vol." }
      ],
    },
    {
      metaTitle: "Taxi Meudon → Orly | 18 km, from €25 | TaxiNeo",
      metaDescription: "Taxi from Meudon to Orly. 20 min via N118. Observatory, terrace, ONERA. Fixed price €25-38.",
      heroTitle: "Taxi Meudon → Orly Airport",
      heroSubtitle: "Your Meudon → Orly transfer at €25 — €38. 18 km, 20 min.",
      description: "Orly is 20 min from Meudon via the N118.",
      routeDescription: "Via N118 then A6 south.",
      introduction: "Meudon, 46,000 residents, is a town of wooded hills overlooking the Seine valley, famous for the Meudon Observatory (attached to the Paris Observatory, specialising in solar and planetary astrophysics), the Meudon Terrace (exceptional Paris panorama, remnant of Louis XIV's château burned in 1871) and ONERA (French national aerospace research centre), a world-renowned aeronautics facility. The Meudon forest (1,100 hectares) extends across the town's southern hills. The N118 transfer to Orly is direct and fast: 20 minutes. ONERA and Observatory researchers, residents of upmarket Bellevue and Meudon-Val-Fleury, and tourists regularly use this route.",
      itineraire: "Your driver departs Meudon heading south via the N118 dual carriageway, which provides a fast, direct connection towards the southern suburbs. The route joins the A6 motorway near Velizy-Villacoublay and continues south to the direct exit for Orly Airport. Allow 20 minutes in normal traffic conditions, extending to 35 minutes during rush hour when the N118 can slow around the Velizy commercial zone. There are no tolls on this route. The N118 descent from the Meudon hills offers brief glimpses of the Paris skyline on clear days. An alternative route through Clamart and along the D920 is available if the N118 is congested.",
      conseils: "The Meudon Observatory, part of the Paris Observatory network and specialising in solar and planetary astrophysics, offers fascinating guided tours by reservation — a unique experience for science enthusiasts before or after a trip. The Meudon Terrace provides one of the finest panoramic views of Paris, encompassing the Eiffel Tower, La Defense skyline and the Seine valley from the remnants of Louis XIV's chateau, which was destroyed by fire in 1871. ONERA, the French national aerospace research centre, is a world-renowned facility based in Meudon whose international researchers regularly need airport transfers. The Meudon forest, spanning 1,100 hectares across the town's southern hills, is ideal for hiking and offers numerous marked trails. The residential neighbourhoods of Bellevue and Meudon-Val-Fleury are among the most pleasant in the southern Hauts-de-Seine. Specify your Orly terminal (1, 2, 3 or 4) when booking.",
      comparaisonTransport: "Transilien + Orlyval = 1h, €12-15. Taxi €25-38: 20 min. Three times faster.",
      faq: [
        { question: "How much does a taxi from Meudon to Orly Airport cost?", answer: "€25-38 sedan, €52 van. Fixed fare." },
        { question: "How long is the taxi ride from Meudon to Orly Airport?", answer: "20 min normally." },
        { question: "Can I get a taxi from the Meudon Observatory?", answer: "Pick-up at Meudon Observatory available." },
        { question: "Which terminal at Orly will my driver drop me at?", answer: "Drop-off at exact terminal." },
        { question: "Can I book a return taxi from Orly Airport to Meudon?", answer: "Same fare, flight tracking." }
      ],
    }
  ),
  hdsSRoute(
    "taxi-meudon-cdg", "Meudon", "Aéroport CDG",
    48.8122, 2.2350, 49.0097, 2.5479,
    38, 35, "42 — 60 €", "aeroport",
    ["N118", "Périphérique", "A1", "CDG", "Observatoire", "ONERA"],
    42, 60, 82, 55, "Périph. + A1", "~3 €", "meudon", "cdg",
    ["taxi-meudon-orly", "taxi-issy-les-moulineaux-cdg", "taxi-clamart-cdg"],
    ["aeroport", "cdg", "roissy", "meudon", "observatoire", "hauts-de-seine"],
    {
      metaTitle: "Taxi Meudon → CDG | 38 km, dès 42 € | TaxiNeo",
      metaDescription: "Transfert taxi Meudon vers CDG. 35 min. Observatoire, ONERA, terrasse. Prix fixe 42-60 €.",
      heroTitle: "Taxi Meudon → Aéroport CDG",
      heroSubtitle: "Transfert Meudon → CDG au prix fixe de 42 — 60 €. 38 km, 35 min.",
      description: "CDG est à 35 min de Meudon.",
      routeDescription: "Via N118, périphérique nord puis A1.",
      introduction: "Meudon, ville de la science et de la nature avec son Observatoire, l'ONERA et sa forêt de 1 100 hectares, est reliée à CDG en 35 minutes. Les chercheurs internationaux de l'ONERA et de l'Observatoire voyagent régulièrement via CDG. Les résidents aisés des collines de Meudon (Bellevue, Meudon-la-Forêt) apprécient le transfert direct sans les 1h15 de correspondances métro/RER B.",
      itineraire: "Meudon → N118 → périphérique nord → A1 → CDG. 35 min hors pointe, 55 min en pointe. Péages ~3 € inclus.",
      conseils: "CDG pour vols internationaux. Meudon est un haut lieu de la recherche scientifique française.",
      comparaisonTransport: "Transilien + RER B = 1h15, 12-15 €. Taxi 42-60 € : 35 min. Moitié du temps.",
      faq: [
        { question: "Prix ?", answer: "42-60 € berline, 82 € van. Tarif fixe." },
        { question: "Durée ?", answer: "35 min normalement." },
        { question: "Terminal ?", answer: "Dépose au terminal exact." },
        { question: "ONERA ?", answer: "Prise en charge au centre ONERA possible." },
        { question: "Retour ?", answer: "Même tarif, suivi de vol." }
      ],
    },
    {
      metaTitle: "Taxi Meudon → CDG | 38 km, from €42 | TaxiNeo",
      metaDescription: "Taxi from Meudon to CDG. 35 min. Observatory, ONERA, terrace. Fixed price €42-60.",
      heroTitle: "Taxi Meudon → CDG Airport",
      heroSubtitle: "Your Meudon → CDG transfer at €42 — €60. 38 km, 35 min.",
      description: "CDG is 35 min from Meudon.",
      routeDescription: "Via N118, ring road north then A1.",
      introduction: "Meudon, a town where science and nature converge beautifully, connects to CDG Airport in 35 minutes via the N118, the Boulevard Peripherique and the A1 motorway. With 46,000 residents spread across wooded hills overlooking the Seine valley, Meudon is home to two internationally significant research institutions: the Meudon Observatory (part of the Paris Observatory, specialising in solar and planetary astrophysics) and ONERA (the French national aerospace research centre). Both attract international scientists and visiting researchers who regularly travel via CDG for conferences, collaborations and fieldwork across the globe. The Meudon Terrace, offering one of the most spectacular panoramic views of Paris from the vestiges of Louis XIV's chateau, and the vast Meudon forest covering 1,100 hectares, make this an exceptionally attractive residential town. The affluent hillside neighbourhoods of Bellevue and Meudon-la-Foret are home to families and professionals who appreciate the direct taxi transfer to CDG rather than enduring the 1 hour 15 minute journey via Transilien commuter rail and the RER B, which requires at least one transfer through congested central Paris stations.",
      itineraire: "Your driver departs Meudon via the N118 heading north towards Paris, then joins the Boulevard Peripherique heading northeast. The route follows the Peripherique past Porte de la Chapelle before connecting to the A1 motorway northbound towards Roissy-CDG. Allow 35 minutes in normal conditions, but plan for up to 55 minutes during rush hour, particularly around the N118/Peripherique junction and the Porte de la Chapelle interchange. Tolls are approximately 3 euros, included in the fixed fare. Should the Peripherique be heavily congested, your driver may use the A86 ring road as an alternative bypass around Paris.",
      conseils: "CDG is France's primary gateway for international long-haul flights, serving every major continent via the Air France hub. Meudon is a leading centre of French scientific research, with ONERA and the Observatory drawing international visitors year-round. The Meudon Observatory offers guided visits by reservation, providing a fascinating glimpse into astrophysics research. The Meudon Terrace is free to visit and offers one of the finest views of Paris. Allow 2 to 3 hours before an intercontinental departure at CDG. Specify your terminal when booking: T1 for Star Alliance, T2 for Air France and SkyTeam, T3 for budget carriers. Pick-up is available at the ONERA centre, the Observatory, the Bellevue neighbourhood or anywhere else in the town.",
      comparaisonTransport: "Transilien + RER B = 1h15, €12-15. Taxi €42-60: 35 min. Half the time.",
      faq: [
        { question: "How much does a taxi from Meudon to CDG Airport cost?", answer: "€42-60 sedan, €82 van. Fixed fare." },
        { question: "How long is the taxi ride from Meudon to CDG Airport?", answer: "35 min normally." },
        { question: "Which terminal at CDG will my driver drop me at?", answer: "Drop-off at exact terminal." },
        { question: "Can I get a taxi from the ONERA aerospace centre in Meudon?", answer: "Pick-up at ONERA centre available." },
        { question: "Can I book a return taxi from CDG Airport to Meudon?", answer: "Same fare, flight tracking." }
      ],
    }
  ),
  // ═══════════════════════════════════════════════════════════
  // ANTONY (62 000 hab.)
  // ═══════════════════════════════════════════════════════════
  hdsSRoute(
    "taxi-antony-orly", "Antony", "Aéroport d'Orly",
    48.7533, 2.2977, 48.7262, 2.3652,
    10, 15, "18 — 28 €", "aeroport",
    ["A6", "Orly 1-4", "Parc de Sceaux", "RER B", "Marché"],
    18, 28, 40, 25, "A6", "0 €", "antony", "orly",
    ["taxi-antony-cdg", "taxi-sceaux-orly"],
    ["aeroport", "orly", "antony", "hauts-de-seine"],
    {
      metaTitle: "Taxi Antony → Orly | 10 km, dès 18 € | TaxiNeo",
      metaDescription: "Transfert taxi Antony vers Orly. 15 min par A6. 62 000 hab., parc de Sceaux à proximité. Prix fixe 18-28 €.",
      heroTitle: "Taxi Antony → Aéroport d'Orly",
      heroSubtitle: "Transfert Antony → Orly au prix fixe de 18 — 28 €. 10 km, 15 min.",
      description: "Orly est à 15 min d'Antony par l'A6.",
      routeDescription: "Via l'A6 sud.",
      introduction: "Antony, 62 000 habitants, est une ville résidentielle aisée du sud des Hauts-de-Seine, directement reliée à Paris par le RER B (station Antony, connexion Orlyval). Paradoxalement, malgré la présence de la gare Orlyval, le taxi reste compétitif pour le transfert Orly : l'Orlyval coûte 11,50 € par personne et ne dessert pas le domicile. Le taxi offre un transfert porte-à-terminal en 15 minutes pour 18-28 €. Pour 2 passagers, le taxi est au même prix que l'Orlyval (9-14 €/pers.) avec l'avantage du porte-à-porte. Antony est aussi la porte d'entrée du parc de Sceaux (181 ha, Le Nôtre), l'un des plus beaux jardins à la française d'Île-de-France.",
      itineraire: "Antony → A6 → Orly. 15 min hors pointe, 25 min en pointe. Sans péage.",
      conseils: "Le parc de Sceaux (Le Nôtre, 181 ha) est à 10 min du centre d'Antony. L'Orlyval part de la gare d'Antony mais coûte 11,50 €/pers. — le taxi est souvent plus avantageux à 2+.",
      comparaisonTransport: "Orlyval = 8 min, 11,50 €/pers. Taxi 18-28 € : 15 min porte-à-terminal. À 2 passagers (9-14 €/pers.), le taxi = même prix + confort porte-à-porte.",
      faq: [
        { question: "Prix ?", answer: "18-28 € berline, 40 € van. Tarif fixe." },
        { question: "Durée ?", answer: "15 min normalement." },
        { question: "Orlyval ?", answer: "L'Orlyval coûte 11,50 €/pers. À 2+, le taxi est au même prix avec le porte-à-porte." },
        { question: "Terminal ?", answer: "Dépose au terminal exact." },
        { question: "Retour ?", answer: "Même tarif, suivi de vol." }
      ],
    },
    {
      metaTitle: "Taxi Antony → Orly | 10 km, from €18 | TaxiNeo",
      metaDescription: "Taxi from Antony to Orly. 15 min via A6. 62,000 residents, near Parc de Sceaux. Fixed price €18-28.",
      heroTitle: "Taxi Antony → Orly Airport",
      heroSubtitle: "Your Antony → Orly transfer at €18 — €28. 10 km, 15 min.",
      description: "Orly is 15 min from Antony via the A6.",
      routeDescription: "Via A6 south.",
      introduction: "Antony, 62,000 residents, is an affluent southern Hauts-de-Seine town, directly connected to Paris by RER B (Antony station, Orlyval connection). Paradoxically, despite the Orlyval station, the taxi remains competitive for Orly transfers: Orlyval costs €11.50 per person and doesn't serve your doorstep. The taxi offers a door-to-terminal transfer in 15 minutes for €18-28. For 2 passengers, the taxi matches Orlyval pricing (€9-14/pp) with door-to-door advantage. Antony is also the gateway to the Parc de Sceaux (181 ha, Le Nôtre), one of Île-de-France's finest French gardens.",
      itineraire: "Your driver departs Antony heading south via the A6 motorway towards Orly Airport. The route is straightforward and direct, following the A6 through the Wissous area before reaching the airport access road. Allow 15 minutes in normal traffic conditions, extending to 25 minutes during rush hour when the A6 can slow near the Orly interchange. There are no tolls on this route. This is one of the shortest and most direct airport transfers in the entire Hauts-de-Seine department. For destinations in the Antony town centre, your driver may take the D920 to reach the A6 access ramp. The Orlyval automated train also departs from Antony station, but the taxi offers the advantage of door-to-terminal service without a walk to the station.",
      conseils: "The Parc de Sceaux, designed by Andre Le Notre (the landscape architect behind Versailles) and spanning 181 hectares, is just 10 minutes from Antony town centre and makes for a magnificent visit. Its formal French gardens, Grand Canal and Chateau de Sceaux (housing the Musee de l'Ile-de-France) are particularly stunning during cherry blossom season in April, when the park attracts thousands of visitors. The Orlyval automated train departs from Antony RER B station and reaches Orly in 8 minutes, but costs 11.50 euros per person. For two or more passengers travelling together, the taxi is often the same price per person or cheaper, with the significant advantage of door-to-terminal service including luggage assistance. Antony's RER B station provides direct access to central Paris and, uniquely, the Orlyval link to Orly. Specify your Orly terminal (1, 2, 3 or 4) when booking for direct drop-off.",
      comparaisonTransport: "Orlyval = 8 min, €11.50/pp. Taxi €18-28: 15 min door-to-terminal. For 2 passengers (€9-14/pp), taxi = same price + door-to-door comfort.",
      faq: [
        { question: "How much does a taxi from Antony to Orly Airport cost?", answer: "€18-28 sedan, €40 van. Fixed fare." },
        { question: "How long is the taxi ride from Antony to Orly Airport?", answer: "15 min normally." },
        { question: "Is a taxi from Antony to Orly cheaper than the Orlyval?", answer: "Orlyval costs €11.50/pp. For 2+, taxi is same price with door-to-door." },
        { question: "Which terminal at Orly will my driver drop me at?", answer: "Drop-off at exact terminal." },
        { question: "Can I book a return taxi from Orly Airport to Antony?", answer: "Same fare, flight tracking." }
      ],
    }
  ),
  hdsSRoute(
    "taxi-antony-cdg", "Antony", "Aéroport CDG",
    48.7533, 2.2977, 49.0097, 2.5479,
    40, 35, "42 — 60 €", "aeroport",
    ["A6", "A86", "A1", "CDG", "RER B", "Parc de Sceaux"],
    42, 60, 82, 55, "A6 + A86 + A1", "~5 €", "antony", "cdg",
    ["taxi-antony-orly", "taxi-sceaux-cdg"],
    ["aeroport", "cdg", "roissy", "antony", "hauts-de-seine"],
    {
      metaTitle: "Taxi Antony → CDG | 40 km, dès 42 € | TaxiNeo",
      metaDescription: "Transfert taxi Antony vers CDG. 35 min par A86/A1. 62 000 hab., RER B. Prix fixe 42-60 €.",
      heroTitle: "Taxi Antony → Aéroport CDG",
      heroSubtitle: "Transfert Antony → CDG au prix fixe de 42 — 60 €. 40 km, 35 min.",
      description: "CDG est à 35 min d'Antony via A86 et A1.",
      routeDescription: "Via A86 est puis A1 nord.",
      introduction: "Antony dispose du RER B qui dessert CDG directement en 50 minutes — l'un des rares cas où le transport en commun offre une liaison directe. Toutefois, le RER B est chroniquement surchargé et sujet à des retards, notamment entre Châtelet et Gare du Nord. Pour les 62 000 Antoniens voyageant en long-courrier, le taxi par l'A86 et l'A1 contourne Paris en 35 minutes avec un confort incomparable. La certitude d'arriver à l'heure à CDG, sans aléas ferroviaires, justifie le surcoût par rapport au RER B (12-15 €).",
      itineraire: "Antony → A86 est → A1 nord → CDG. 35 min hors pointe, 55 min en pointe. Péages ~5 € inclus.",
      conseils: "Le RER B va à CDG mais est souvent en retard. Le taxi garantit la ponctualité. L'A86 contourne Paris efficacement.",
      comparaisonTransport: "RER B Antony → CDG : 12-15 €, 50 min (souvent 60+ min avec retards). Taxi 42-60 € : 35 min garanti. Le taxi offre fiabilité et confort.",
      faq: [
        { question: "Prix ?", answer: "42-60 € berline, 82 € van. Tarif fixe." },
        { question: "Durée ?", answer: "35 min normalement, 55 min en pointe." },
        { question: "RER B ?", answer: "Le RER B va à CDG mais est souvent en retard. Le taxi garantit l'heure d'arrivée." },
        { question: "Terminal ?", answer: "Dépose au terminal exact." },
        { question: "Retour ?", answer: "Même tarif, suivi de vol." }
      ],
    },
    {
      metaTitle: "Taxi Antony → CDG | 40 km, from €42 | TaxiNeo",
      metaDescription: "Taxi from Antony to CDG. 35 min via A86/A1. 62,000 residents, RER B. Fixed price €42-60.",
      heroTitle: "Taxi Antony → CDG Airport",
      heroSubtitle: "Your Antony → CDG transfer at €42 — €60. 40 km, 35 min.",
      description: "CDG is 35 min from Antony via A86 and A1.",
      routeDescription: "Via A86 east then A1 north.",
      introduction: "Antony has RER B serving CDG directly in 50 minutes — one of the rare cases of direct public transport airport links. However, RER B is chronically overcrowded and prone to delays, particularly between Châtelet and Gare du Nord. For Antony's 62,000 residents flying long-haul, the taxi via A86 and A1 bypasses Paris in 35 minutes with incomparable comfort. The certainty of arriving at CDG on time, without railway disruptions, justifies the premium over RER B (€12-15).",
      itineraire: "Your driver departs Antony heading east to join the A86 ring road. The route follows the A86 through the eastern suburbs, passing through Fresnes and Thiais, before connecting to the A1 motorway via the A86 northern section and heading towards Roissy-CDG. Allow 35 minutes in normal conditions, but plan for up to 55 minutes during rush hour, particularly around the congestion-prone interchanges in the Creteil area and near Saint-Denis. Tolls are approximately 5 euros and are included in the fixed fare. Your driver may also opt for the A6 north to the Peripherique, then the A1, depending on real-time traffic conditions. This flexibility is one of the key advantages of the taxi over the fixed-route RER B.",
      conseils: "Antony is one of the rare towns in the Paris suburbs with a direct RER B connection to CDG, but the RER B line is notorious for chronic overcrowding and frequent delays, particularly on the northern section between Chatelet-Les Halles and Gare du Nord where it shares tracks with other services. The taxi provides guaranteed punctuality and a stress-free journey, bypassing Paris entirely via the A86 ring road. Allow 2 to 3 hours before an international departure at CDG. Specify your terminal when booking: T1 for Star Alliance carriers, T2 for Air France and SkyTeam partners, T3 for budget airlines. The Parc de Sceaux, just minutes from Antony, is a magnificent Le Notre garden worth visiting before a late departure. CDG parking costs 25-40 euros per day, so the taxi becomes more economical than driving for trips of 2 or more days.",
      comparaisonTransport: "RER B Antony → CDG: €12-15, 50 min (often 60+ with delays). Taxi €42-60: 35 min guaranteed. Taxi offers reliability and comfort.",
      faq: [
        { question: "How much does a taxi from Antony to CDG Airport cost?", answer: "€42-60 sedan, €82 van. Fixed fare." },
        { question: "How long is the taxi ride from Antony to CDG Airport?", answer: "35 min normally, 55 min in rush hour." },
        { question: "Is a taxi from Antony to CDG more reliable than the RER B?", answer: "RER B goes to CDG but often delayed. Taxi guarantees arrival time." },
        { question: "Which terminal at CDG will my driver drop me at?", answer: "Drop-off at exact terminal." },
        { question: "Can I book a return taxi from CDG Airport to Antony?", answer: "Same fare, flight tracking." }
      ],
    }
  ),
];
