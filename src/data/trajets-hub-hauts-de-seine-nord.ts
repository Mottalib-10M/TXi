import type { Trajet } from "./trajets";

function hdsNRoute(
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
    hub: "hauts-de-seine-nord",
    i18n: { fr: frMeta, en: enMeta },
  };
}

export const trajetsHautsDeSeinNord: Trajet[] = [
  // ═══════════════════════════════════════════════════════════
  // NANTERRE (96 000 hab.) — Paris + Orly (CDG existe déjà)
  // ═══════════════════════════════════════════════════════════
  hdsNRoute(
    "taxi-nanterre-paris", "Nanterre", "Paris",
    48.8924, 2.2069, 48.8566, 2.3522,
    12, 20, "20 — 35 €", "ville-a-ville",
    ["A14", "La Défense", "Préfecture 92", "Université Paris-Nanterre", "Mont-Valérien"],
    20, 35, 48, 35, "A14", "~2 €", "nanterre", "paris",
    ["taxi-nanterre-cdg", "taxi-nanterre-orly", "taxi-courbevoie-paris", "taxi-rueil-malmaison-paris"],
    ["ville-a-ville", "paris", "nanterre", "la-defense", "prefecture", "hauts-de-seine"],
    {
      metaTitle: "Taxi Nanterre → Paris | 12 km, dès 20 € | TaxiNeo",
      metaDescription: "Transfert taxi Nanterre vers Paris. 20 min par A14. Préfecture des Hauts-de-Seine, La Défense, université. Prix fixe 20-35 €.",
      heroTitle: "Taxi Nanterre → Paris",
      heroSubtitle: "Transfert Nanterre → Paris au prix fixe de 20 — 35 €. 12 km, 20 min.",
      description: "Paris est à 20 min de Nanterre par l'A14.",
      routeDescription: "Via l'A14 direction Paris, ou par la N13.",
      introduction: "Nanterre, préfecture des Hauts-de-Seine avec 96 000 habitants, est un pôle majeur de l'ouest parisien. La ville abrite la préfecture du département le plus riche de France, l'université Paris-Nanterre (35 000 étudiants, berceau de Mai 68), et jouxte le quartier d'affaires de La Défense, premier centre d'affaires européen. Le Mont-Valérien, haut lieu de la mémoire nationale (mémorial de la France combattante), domine la ville. Le réseau de transport est dense (RER A, Transilien L, tramway T2, métro futur), mais le taxi reste indispensable pour les déplacements professionnels urgents, les trajets vers des quartiers parisiens mal desservis depuis Nanterre, et les transferts de nuit. La proximité de La Défense génère un flux constant de cadres, consultants et visiteurs d'affaires nécessitant des transferts rapides vers Paris intra-muros.",
      itineraire: "Départ de Nanterre par l'A14 ou la N13 direction Paris. Sortie Porte Maillot ou Porte de la Chapelle selon la destination. 20 min hors pointe, 35 min en heure de pointe. Péages ~2 € sur l'A14 (inclus).",
      conseils: "La Défense est le premier quartier d'affaires d'Europe (180 000 salariés). L'université Paris-Nanterre est sur le campus historique de Mai 68. Le Mont-Valérien se visite (gratuit, sur réservation). Le parc André-Malraux (25 ha) offre un espace vert remarquable. Le RER A est rapide mais souvent saturé aux heures de pointe.",
      comparaisonTransport: "RER A Nanterre → Paris Châtelet : 3-5 €, 15 min. Taxi 20-35 € : 20 min porte-à-porte. Le RER est moins cher pour 1 personne, mais le taxi est plus rapide vers toute destination parisienne hors ligne A.",
      faq: [
        { question: "Prix ?", answer: "20-35 € berline, 48 € van. Tarif fixe." },
        { question: "Durée ?", answer: "20 min normalement, 35 min en pointe." },
        { question: "La Défense ?", answer: "La Défense est à la limite de Nanterre. Prise en charge possible dans le quartier d'affaires." },
        { question: "Université ?", answer: "Transfert depuis le campus Paris-Nanterre possible." },
        { question: "Retour ?", answer: "Même tarif fixe." }
      ],
    },
    {
      metaTitle: "Taxi Nanterre → Paris | 12 km, from €20 | TaxiNeo",
      metaDescription: "Taxi from Nanterre to Paris. 20 min via A14. Prefecture of Hauts-de-Seine, La Défense, university. Fixed price €20-35.",
      heroTitle: "Taxi Nanterre → Paris",
      heroSubtitle: "Your Nanterre → Paris transfer at €20 — €35. 12 km, 20 min.",
      description: "Paris is 20 min from Nanterre via the A14.",
      routeDescription: "Via A14 towards Paris, or via N13.",
      introduction: "Nanterre, prefecture of Hauts-de-Seine with 96,000 inhabitants, is a major hub of western Paris. The town houses the prefecture of France's wealthiest department, Paris-Nanterre University (35,000 students, birthplace of May 68), and borders La Défense, Europe's largest business district. Mont-Valérien, a key national memorial site, overlooks the town. While public transport is dense (RER A, Transilien L, T2 tram), taxis remain essential for urgent business travel, routes to poorly connected Paris districts, and night transfers. La Défense's proximity generates constant demand from executives, consultants and business visitors needing fast transfers to central Paris.",
      itineraire: "From Nanterre via A14 or N13 towards Paris. Exit Porte Maillot or Porte de la Chapelle depending on destination. 20 min off-peak, 35 min in rush hour. A14 tolls ~€2 (included).",
      conseils: "La Défense is Europe's largest business district (180,000 workers). Paris-Nanterre University sits on the historic May 68 campus. Mont-Valérien is free to visit (reservation required). André-Malraux park (25 ha) offers remarkable green space. RER A is fast but often overcrowded at peak times.",
      comparaisonTransport: "RER A Nanterre → Paris Châtelet: €3-5, 15 min. Taxi €20-35: 20 min door-to-door. RER is cheaper solo, but taxi is faster to any Paris destination off line A.",
      faq: [
        { question: "How much does a taxi from Nanterre to Paris cost?", answer: "€20-35 sedan, €48 van. Fixed fare." },
        { question: "How long is the taxi ride from Nanterre to Paris?", answer: "20 min normally, 35 min in rush hour." },
        { question: "Can I get picked up at La Défense business district?", answer: "La Défense borders Nanterre. Pick-up in the business district available." },
        { question: "Can I get a taxi from Paris-Nanterre University?", answer: "Transfer from Paris-Nanterre campus available." },
        { question: "Can I book a return taxi from Paris to Nanterre?", answer: "Same fixed fare." }
      ],
    }
  ),
  hdsNRoute(
    "taxi-nanterre-orly", "Nanterre", "Aéroport d'Orly",
    48.8924, 2.2069, 48.7262, 2.3652,
    25, 25, "30 — 45 €", "aeroport",
    ["A86", "A6", "Orly 1-4", "La Défense", "Préfecture 92"],
    30, 45, 62, 40, "A86 + A6", "~3 €", "nanterre", "orly",
    ["taxi-nanterre-paris", "taxi-nanterre-cdg", "taxi-courbevoie-orly", "taxi-rueil-malmaison-orly"],
    ["aeroport", "orly", "nanterre", "la-defense", "hauts-de-seine"],
    {
      metaTitle: "Taxi Nanterre → Orly | 25 km, dès 30 € | TaxiNeo",
      metaDescription: "Transfert taxi Nanterre vers Orly. 25 min par A86. Préfecture 92, La Défense. Prix fixe 30-45 €.",
      heroTitle: "Taxi Nanterre → Aéroport d'Orly",
      heroSubtitle: "Transfert Nanterre → Orly au prix fixe de 30 — 45 €. 25 km, 25 min.",
      description: "Orly est à 25 min de Nanterre via l'A86.",
      routeDescription: "Via A86 sud puis direction Orly.",
      introduction: "Le transfert en taxi entre Nanterre et l'aéroport d'Orly est un trajet stratégique pour la préfecture des Hauts-de-Seine (96 000 habitants) et le quartier d'affaires de La Défense, premier centre d'affaires européen avec 180 000 salariés répartis dans 72 tours de verre et d'acier. Parmi les sièges installés à La Défense : Total, Société Générale, Saint-Gobain, Engie, Thales et des dizaines de cabinets de conseil internationaux. Ces milliers de cadres voyagent régulièrement vers les métropoles européennes et les destinations domestiques via Orly. Nanterre elle-même est un pôle d'envergure : l'université Paris-Nanterre (35 000 étudiants, berceau de Mai 68), le Mont-Valérien (mémorial de la France combattante où 1 008 résistants et otages furent fusillés entre 1941 et 1944), et le parc André-Malraux (25 hectares) sont des lieux emblématiques. L'A86 contourne le sud de Paris et rejoint Orly en 25 minutes, un trajet direct impossible à égaler en transport en commun : métro/RER vers Paris puis correspondance Orlyval, soit 1h15 minimum avec deux changements. Pour les rendez-vous d'affaires à Toulouse, Nice ou Bordeaux partant d'Orly, le taxi depuis La Défense ou la préfecture est le choix rationnel des professionnels pressés.",
      itineraire: "Votre chauffeur quitte Nanterre par l'accès à l'A86 au niveau de l'échangeur de Nanterre-La Défense. L'A86 contourne Paris par le sud en passant par Vélizy-Villacoublay, le plateau de Saclay et Rungis, avant de rejoindre la bretelle d'accès directe à l'aéroport d'Orly. Comptez 25 minutes en conditions normales de circulation, mais prévoyez 35 à 40 minutes aux heures de pointe (7h30-9h30, 17h-19h30), car l'A86 peut être chargée au niveau du tunnel de Vélizy. Péages environ 3 € (inclus dans le tarif fixe). Alternative possible par le Périphérique sud et l'A6 en cas de saturation de l'A86.",
      conseils: "Orly dessert la France métropolitaine (Nice, Toulouse, Marseille, Bordeaux, Lyon), le Maghreb (Alger, Casablanca, Tunis), le Portugal (Lisbonne, Porto) et l'Espagne (Barcelone, Madrid). Pour les cadres de La Défense, le taxi est la seule option sans perte de temps en correspondances — comptez 2h avant un vol domestique. Précisez votre terminal (Orly 1, 2, 3 ou 4) lors de la réservation. La prise en charge est possible au pied de votre tour à La Défense, devant la préfecture, ou à votre domicile à Nanterre. Le parking d'Orly coûte 25-35 €/jour, rendant le taxi compétitif dès un déplacement de 2 jours.",
      comparaisonTransport: "Métro + Orlyval = 1h15, 12-15 €. Taxi 30-45 € : 25 min. Pour 2 passagers (15-22 €/pers.), taxi = prix similaire en moitié de temps.",
      faq: [
        { question: "Prix ?", answer: "30-45 € berline, 62 € van. Tarif fixe." },
        { question: "Durée ?", answer: "25 min normalement, 40 min en pointe." },
        { question: "La Défense ?", answer: "Prise en charge au pied des tours de La Défense." },
        { question: "Terminal ?", answer: "Dépose au terminal exact." },
        { question: "Retour ?", answer: "Même tarif, suivi de vol." }
      ],
    },
    {
      metaTitle: "Taxi Nanterre → Orly | 25 km, from €30 | TaxiNeo",
      metaDescription: "Taxi from Nanterre to Orly Airport. 25 min via A86. Prefecture 92, La Défense. Fixed price €30-45.",
      heroTitle: "Taxi Nanterre → Orly Airport",
      heroSubtitle: "Your Nanterre → Orly transfer at €30 — €45. 25 km, 25 min.",
      description: "Orly is 25 min from Nanterre via the A86.",
      routeDescription: "Via A86 south towards Orly.",
      introduction: "The taxi transfer from Nanterre to Orly Airport is a strategic route for the Hauts-de-Seine prefecture (96,000 residents) and La Défense, Europe's largest business district with 180,000 employees spread across 72 glass-and-steel towers. Among the headquarters based at La Défense: Total, Société Générale, Saint-Gobain, Engie, Thales and dozens of international consultancy firms. These thousands of executives travel regularly to European cities and domestic destinations via Orly. Nanterre itself is a major hub: Paris-Nanterre University (35,000 students, birthplace of May 68), Mont-Valérien (national memorial where 1,008 resistance fighters and hostages were executed between 1941 and 1944), and Parc André-Malraux (25 hectares) are all landmark sites. The A86 bypasses southern Paris to reach Orly in 25 minutes — a direct route impossible to match by public transport: metro/RER to Paris then Orlyval connection means 1h15 minimum with two changes. For business meetings in Toulouse, Nice or Bordeaux departing from Orly, the taxi from La Défense or the prefecture is the rational choice for time-pressed professionals.",
      itineraire: "Your driver leaves Nanterre via the A86 access at the Nanterre-La Défense interchange. The A86 circles south of Paris via Vélizy-Villacoublay, the Saclay plateau and Rungis, before joining the direct slip road to Orly Airport. Allow 25 minutes in normal traffic, but plan 35 to 40 minutes during rush hour (7:30-9:30am, 5-7:30pm) as the A86 can be congested near the Vélizy tunnel. Tolls approximately €3 (included in the fixed fare). Alternative route via the southern ring road and A6 if the A86 is saturated.",
      conseils: "Orly serves mainland France (Nice, Toulouse, Marseille, Bordeaux, Lyon), North Africa (Algiers, Casablanca, Tunis), Portugal (Lisbon, Porto) and Spain (Barcelona, Madrid). For La Défense executives, the taxi is the only time-efficient airport transfer — allow 2h before a domestic flight. Specify your terminal (Orly 1, 2, 3 or 4) when booking. Pick-up available at the base of your La Défense office tower, outside the prefecture, or at your Nanterre home. Orly parking costs €25-35/day, making the taxi competitive from a 2-day business trip.",
      comparaisonTransport: "Metro + Orlyval = 1h15, €12-15. Taxi €30-45: 25 min. For 2 passengers (€15-22/pp), taxi = similar price in half the time.",
      faq: [
        { question: "How much does a taxi from Nanterre to Orly Airport cost?", answer: "€30-45 sedan, €62 van. Fixed fare." },
        { question: "How long is the taxi ride from Nanterre to Orly Airport?", answer: "25 min normally, 40 min in rush hour." },
        { question: "Can I get picked up at La Défense business district?", answer: "Pick-up at the foot of La Défense towers." },
        { question: "Which terminal at Orly will my driver drop me at?", answer: "Drop-off at exact terminal." },
        { question: "Can I book a return taxi from Orly Airport to Nanterre?", answer: "Same fare, flight tracking." }
      ],
    }
  ),
  // ═══════════════════════════════════════════════════════════
  // COURBEVOIE (82 000 hab.)
  // ═══════════════════════════════════════════════════════════
  hdsNRoute(
    "taxi-courbevoie-orly", "Courbevoie", "Aéroport d'Orly",
    48.8978, 2.2530, 48.7262, 2.3652,
    22, 25, "28 — 42 €", "aeroport",
    ["A86", "La Défense", "Bécon-les-Bruyères", "Tours Société Générale"],
    28, 42, 58, 40, "A86", "~3 €", "courbevoie", "orly",
    ["taxi-courbevoie-cdg", "taxi-nanterre-orly", "taxi-levallois-perret-orly"],
    ["aeroport", "orly", "courbevoie", "la-defense", "hauts-de-seine"],
    {
      metaTitle: "Taxi Courbevoie → Orly | 22 km, dès 28 € | TaxiNeo",
      metaDescription: "Transfert taxi Courbevoie vers Orly. 25 min par A86. La Défense, Société Générale. Prix fixe 28-42 €.",
      heroTitle: "Taxi Courbevoie → Aéroport d'Orly",
      heroSubtitle: "Transfert Courbevoie → Orly au prix fixe de 28 — 42 €. 22 km, 25 min.",
      description: "Orly est à 25 min de Courbevoie via l'A86.",
      routeDescription: "Via A86 sud.",
      introduction: "Courbevoie, commune de 82 000 habitants, est le cœur battant de La Défense : la ville accueille la majorité des tours du premier quartier d'affaires européen, notamment les sièges mondiaux de TotalEnergies (tour Coupole), Société Générale (tours Granite et Chassagne), Saint-Gobain (tour Saint-Gobain), Engie (tour T1) et Thales. Chaque jour ouvré, des dizaines de milliers de cadres, consultants et dirigeants transitent par Courbevoie pour rejoindre ces sièges sociaux. La ville est aussi un lieu de vie : le quartier résidentiel de Bécon-les-Bruyères, avec ses maisons bourgeoises du début du XXe siècle, sa gare Transilien L offrant un accès direct à Paris-Saint-Lazare en 12 minutes, et son marché réputé (jeudi et dimanche matin), en fait l'un des quartiers les plus prisés des cadres de l'ouest parisien. Le vieux Courbevoie, autour de l'église Saint-Pierre-Saint-Paul et de la place Charras, conserve un charme de village avec ses restaurants et ses boutiques indépendantes. Le transfert vers Orly par l'A86 prend 25 minutes : un trajet direct et prévisible, essentiel pour les cadres de La Défense prenant des vols d'affaires vers les métropoles régionales et européennes. Le transport en commun (métro 1 → correspondance Châtelet → Orlyval, 1h) est inadapté à un déplacement professionnel sous contrainte horaire.",
      itineraire: "Votre chauffeur quitte Courbevoie par l'accès A86 au niveau de La Défense, empruntant l'A86 en direction du sud. Le trajet contourne Paris par l'ouest et le sud en passant par Rueil-Malmaison, le tunnel de Vélizy et Rungis. Sortie directe Orly aéroport. Comptez 25 minutes en conditions normales, jusqu'à 40 minutes aux heures de pointe (7h30-9h30, 17h-19h30). Péages environ 3 € (inclus dans le tarif fixe). En alternative, le Périphérique sud via Issy-les-Moulineaux et l'A6 est disponible si l'A86 est saturée.",
      conseils: "La Défense concentre 15 des 20 premières capitalisations du CAC 40 et accueille 3 500 entreprises. Bécon-les-Bruyères offre une gare directe vers Paris-Saint-Lazare (12 min) et un marché de qualité le jeudi et dimanche matin. Le vieux Courbevoie, avec la place Charras et ses terrasses, est idéal pour un café avant le départ. Précisez votre terminal Orly (1, 2, 3 ou 4) lors de la réservation. Pour un vol à 8h, départ recommandé à 6h depuis Courbevoie. Le parking Orly coûte 25-35 €/jour — le taxi est plus économique dès 2 jours d'absence.",
      comparaisonTransport: "Métro + Orlyval = 1h, 12-15 €. Taxi 28-42 € : 25 min. Pour les professionnels, le gain de temps justifie l'écart.",
      faq: [
        { question: "Prix ?", answer: "28-42 € berline, 58 € van. Tarif fixe." },
        { question: "Durée ?", answer: "25 min normalement, 40 min en pointe." },
        { question: "La Défense ?", answer: "Prise en charge au pied des tours." },
        { question: "Terminal ?", answer: "Dépose au terminal exact." },
        { question: "Retour ?", answer: "Même tarif, suivi de vol." }
      ],
    },
    {
      metaTitle: "Taxi Courbevoie → Orly | 22 km, from €28 | TaxiNeo",
      metaDescription: "Taxi from Courbevoie to Orly. 25 min via A86. La Défense, Société Générale HQ. Fixed price €28-42.",
      heroTitle: "Taxi Courbevoie → Orly Airport",
      heroSubtitle: "Your Courbevoie → Orly transfer at €28 — €42. 22 km, 25 min.",
      description: "Orly is 25 min from Courbevoie via the A86.",
      routeDescription: "Via A86 south.",
      introduction: "Courbevoie, population 82,000, is the beating heart of La Défense: the town hosts most of the towers in Europe's largest business district, including the global headquarters of TotalEnergies (Tour Coupole), Société Générale (Tours Granite and Chassagne), Saint-Gobain (Tour Saint-Gobain), Engie (Tour T1) and Thales. Every working day, tens of thousands of executives, consultants and directors pass through Courbevoie to reach these corporate headquarters. The town is also a place to live: the Bécon-les-Bruyères residential neighbourhood, with its early 20th-century bourgeois houses, Transilien L station offering direct access to Paris-Saint-Lazare in 12 minutes, and its reputed market (Thursday and Sunday mornings), is one of the most sought-after areas for executives in western Paris. Old Courbevoie, around the Saint-Pierre-Saint-Paul church and Place Charras, retains village charm with its restaurants and independent shops. The transfer to Orly via the A86 takes 25 minutes: a direct and predictable route, essential for La Défense executives catching business flights to regional and European cities. Public transport (metro 1 → Châtelet connection → Orlyval, 1h) is unsuited to time-pressured business travel.",
      itineraire: "Your driver leaves Courbevoie via the A86 access at La Défense, heading south. The route circles Paris to the west and south via Rueil-Malmaison, the Vélizy tunnel and Rungis. Direct Orly airport exit. Allow 25 minutes normally, up to 40 minutes in rush hour (7:30-9:30am, 5-7:30pm). Tolls approximately €3 (included in the fixed fare). The southern ring road via Issy-les-Moulineaux and A6 is available as an alternative if the A86 is congested.",
      conseils: "La Défense hosts 15 of the CAC 40's top 20 market caps and 3,500 companies. Bécon-les-Bruyères offers a direct train to Paris-Saint-Lazare (12 min) and a quality market on Thursday and Sunday mornings. Old Courbevoie, with Place Charras and its terraces, is ideal for a coffee before departure. Specify your Orly terminal (1, 2, 3 or 4) when booking. For an 8am flight, recommended departure from Courbevoie at 6am. Orly parking costs €25-35/day — the taxi is cheaper from 2 days.",
      comparaisonTransport: "Metro + Orlyval = 1h, €12-15. Taxi €28-42: 25 min. For professionals, time saving justifies the difference.",
      faq: [
        { question: "How much does a taxi from Courbevoie to Orly Airport cost?", answer: "€28-42 sedan, €58 van. Fixed fare." },
        { question: "How long is the taxi ride from Courbevoie to Orly Airport?", answer: "25 min normally, 40 min in rush hour." },
        { question: "Can I get picked up at La Défense business district?", answer: "Pick-up at tower base." },
        { question: "Which terminal at Orly will my driver drop me at?", answer: "Drop-off at exact terminal." },
        { question: "Can I book a return taxi from Orly Airport to Courbevoie?", answer: "Same fare, flight tracking." }
      ],
    }
  ),
  hdsNRoute(
    "taxi-courbevoie-cdg", "Courbevoie", "Aéroport CDG",
    48.8978, 2.2530, 49.0097, 2.5479,
    35, 30, "38 — 55 €", "aeroport",
    ["A86", "A1", "CDG T1-T3", "La Défense", "Société Générale"],
    38, 55, 75, 50, "A86 + A1", "~5 €", "courbevoie", "cdg",
    ["taxi-courbevoie-orly", "taxi-nanterre-cdg", "taxi-levallois-perret-cdg"],
    ["aeroport", "cdg", "roissy", "courbevoie", "la-defense", "hauts-de-seine"],
    {
      metaTitle: "Taxi Courbevoie → CDG | 35 km, dès 38 € | TaxiNeo",
      metaDescription: "Transfert taxi Courbevoie vers CDG. 30 min par A86/A1. La Défense, 82 000 hab. Prix fixe 38-55 €.",
      heroTitle: "Taxi Courbevoie → Aéroport CDG",
      heroSubtitle: "Transfert Courbevoie → CDG au prix fixe de 38 — 55 €. 35 km, 30 min.",
      description: "CDG est à 30 min de Courbevoie via A86 et A1.",
      routeDescription: "Via A86 est puis A1 nord.",
      introduction: "Le transfert Courbevoie – CDG est l'un des plus demandés de l'ouest parisien, reliant le cœur de La Défense à Roissy en 30 minutes. Courbevoie accueille les sièges de multinationales du CAC 40 dont les cadres voyagent constamment en long-courrier via CDG. La ville résidentielle de 82 000 habitants, entre les tours de La Défense et le charme bourgeois de Bécon-les-Bruyères, génère un trafic aéroportuaire considérable. Le RER A vers Paris puis RER B vers CDG prend 1h15 avec une correspondance à Châtelet — le taxi contourne Paris par l'A86 et divise le temps par deux.",
      itineraire: "Courbevoie → A86 est → A1 nord → CDG. 30 min hors pointe, 50 min en pointe. Péages ~5 € inclus.",
      conseils: "CDG est le hub Air France pour les vols long-courriers. L'A86 contourne Paris par le nord-est. Pour les réunions internationales à La Défense, le taxi CDG est le standard.",
      comparaisonTransport: "RER A + RER B = 1h15, 12-15 €, 1 correspondance. Taxi 38-55 € : 30 min, direct. Pour les cadres, le temps gagné est précieux.",
      faq: [
        { question: "Prix ?", answer: "38-55 € berline, 75 € van. Tarif fixe." },
        { question: "Durée ?", answer: "30 min normalement, 50 min en pointe." },
        { question: "La Défense ?", answer: "Prise en charge au pied des tours, esplanade, etc." },
        { question: "Terminal ?", answer: "Dépose au terminal exact (T1, T2, T3)." },
        { question: "Retour ?", answer: "Même tarif, suivi de vol." }
      ],
    },
    {
      metaTitle: "Taxi Courbevoie → CDG | 35 km, from €38 | TaxiNeo",
      metaDescription: "Taxi from Courbevoie to CDG. 30 min via A86/A1. La Défense, 82,000 residents. Fixed price €38-55.",
      heroTitle: "Taxi Courbevoie → CDG Airport",
      heroSubtitle: "Your Courbevoie → CDG transfer at €38 — €55. 35 km, 30 min.",
      description: "CDG is 30 min from Courbevoie via A86 and A1.",
      routeDescription: "Via A86 east then A1 north.",
      introduction: "The Courbevoie to CDG transfer is one of western Paris's most requested airport routes, connecting the beating heart of La Défense business district to Roissy-Charles de Gaulle in just 30 minutes. Courbevoie, home to 82,000 residents, hosts a remarkable concentration of CAC 40 multinational headquarters whose executives travel long-haul via CDG on a daily basis. TotalEnergies (Tour Coupole), Société Générale (Tours Granite and Chassagne), Saint-Gobain, Engie and Thales all maintain their global headquarters here, generating a constant flow of international business travellers. Beyond the glass towers, the residential neighbourhood of Bécon-les-Bruyères provides a charming counterpoint with its early 20th-century bourgeois houses, its Transilien L station offering direct access to Paris-Saint-Lazare in 12 minutes, and its popular market on Thursday and Sunday mornings. The contrast between corporate La Défense and village-like old Courbevoie around Place Charras makes this a uniquely layered town. For CDG airport transfers, public transport requires taking the RER A to Paris then transferring to the RER B at Châtelet-Les Halles, totalling roughly 1h15 with one connection. The taxi bypasses Paris entirely via the A86 ring road and the A1 motorway, cutting the journey time in half with guaranteed door-to-terminal comfort.",
      itineraire: "Your driver departs Courbevoie via the A86 access ramp at the La Défense interchange, heading east along the A86. The route follows the northern bypass around Paris, passing through the Saint-Denis area before joining the A1 motorway heading north to Roissy-CDG. Allow 30 minutes in normal traffic conditions, but plan for up to 50 minutes during rush hour (7:30-9:30am and 5-7:30pm), particularly around the A86/A1 junction near Saint-Denis which can experience heavy congestion. Tolls are approximately 5 euros and are included in the fixed fare. In case of severe congestion on the A86, your driver may opt for the alternative route via the Peripherique north to Porte de la Chapelle, then the A1.",
      conseils: "CDG is the Air France hub for long-haul intercontinental flights to destinations across the Americas, Asia, Africa and the Middle East. The A86 ring road efficiently bypasses central Paris, avoiding the congested city centre entirely. For executives based at La Défense, the taxi transfer to CDG is the established standard for international business travel. Allow 2 to 3 hours before your flight for an international departure. Specify your terminal when booking (T1 for Star Alliance carriers, T2 for Air France/SkyTeam, T3 for low-cost airlines). Pick-up can be arranged at the base of your La Défense office tower, on the esplanade, or at your Bécon-les-Bruyères residence. The CDG parking fee of 25-40 euros per day means the taxi is often more economical than driving for trips of 2 or more days.",
      comparaisonTransport: "RER A + RER B = 1h15, €12-15, 1 connection. Taxi €38-55: 30 min, direct. For executives, time saved is valuable.",
      faq: [
        { question: "How much does a taxi from Courbevoie to CDG Airport cost?", answer: "€38-55 sedan, €75 van. Fixed fare." },
        { question: "How long is the taxi ride from Courbevoie to CDG Airport?", answer: "30 min normally, 50 min in rush hour." },
        { question: "Can I get picked up at La Défense business district?", answer: "Pick-up at tower base, esplanade, etc." },
        { question: "Which terminal at CDG will my driver drop me at?", answer: "Drop-off at exact terminal (T1, T2, T3)." },
        { question: "Can I book a return taxi from CDG Airport to Courbevoie?", answer: "Same fare, flight tracking." }
      ],
    }
  ),
  // ═══════════════════════════════════════════════════════════
  // LEVALLOIS-PERRET (65 000 hab.)
  // ═══════════════════════════════════════════════════════════
  hdsNRoute(
    "taxi-levallois-perret-orly", "Levallois-Perret", "Aéroport d'Orly",
    48.8933, 2.2880, 48.7262, 2.3652,
    20, 25, "28 — 42 €", "aeroport",
    ["Périphérique", "A6", "Orly", "Sièges sociaux", "Île de la Jatte"],
    28, 42, 58, 40, "Périph. + A6", "0 €", "levallois-perret", "orly",
    ["taxi-levallois-perret-cdg", "taxi-neuilly-sur-seine-orly", "taxi-courbevoie-orly"],
    ["aeroport", "orly", "levallois-perret", "hauts-de-seine"],
    {
      metaTitle: "Taxi Levallois-Perret → Orly | 20 km, dès 28 € | TaxiNeo",
      metaDescription: "Transfert taxi Levallois-Perret vers Orly. 25 min. Ville la plus dense de France, sièges sociaux. Prix fixe 28-42 €.",
      heroTitle: "Taxi Levallois-Perret → Aéroport d'Orly",
      heroSubtitle: "Transfert Levallois-Perret → Orly au prix fixe de 28 — 42 €. 20 km, 25 min.",
      description: "Orly est à 25 min de Levallois-Perret.",
      routeDescription: "Via le périphérique puis A6 sud.",
      introduction: "Levallois-Perret, commune la plus densément peuplée de France (27 000 hab./km²) avec 65 000 habitants sur 2,4 km², concentre un nombre impressionnant de sièges sociaux : Celine (LVMH), Alstom, Dassault Aviation, Amazon France, et des dizaines de startups tech. L'île de la Jatte, immortalisée par Seurat dans « Un dimanche après-midi à l'Île de la Grande Jatte », borde la commune côté Seine. Ce tissu économique dense génère un flux quotidien de voyageurs d'affaires vers Orly. Le périphérique puis l'A6 permettent d'atteindre Orly en 25 minutes — plus rapide et plus fiable que les combinaisons métro 3 → correspondance → Orlyval.",
      itineraire: "Levallois-Perret → boulevard périphérique sud → A6 → Orly. 25 min hors pointe, 40 min en pointe. Sans péage.",
      conseils: "Levallois est un centre névralgique des sièges sociaux français. L'île de la Jatte offre restaurants et promenades. Le marché de Levallois est l'un des plus grands des Hauts-de-Seine (mercredi et samedi).",
      comparaisonTransport: "Métro + Orlyval = 1h, 12-15 €. Taxi 28-42 € : 25 min. Gain de 35 min.",
      faq: [
        { question: "Prix ?", answer: "28-42 € berline, 58 € van. Tarif fixe." },
        { question: "Durée ?", answer: "25 min hors pointe." },
        { question: "Terminal ?", answer: "Dépose au terminal exact." },
        { question: "Sièges sociaux ?", answer: "Prise en charge à toute adresse de Levallois." },
        { question: "Retour ?", answer: "Même tarif, suivi de vol." }
      ],
    },
    {
      metaTitle: "Taxi Levallois-Perret → Orly | 20 km, from €28 | TaxiNeo",
      metaDescription: "Taxi from Levallois-Perret to Orly. 25 min. France's densest city, corporate HQs. Fixed price €28-42.",
      heroTitle: "Taxi Levallois-Perret → Orly Airport",
      heroSubtitle: "Your Levallois-Perret → Orly transfer at €28 — €42. 20 km, 25 min.",
      description: "Orly is 25 min from Levallois-Perret.",
      routeDescription: "Via the ring road then A6 south.",
      introduction: "Levallois-Perret, France's most densely populated town (27,000/km²) with 65,000 residents across 2.4 km², hosts an impressive number of corporate headquarters: Celine (LVMH), Alstom, Dassault Aviation, Amazon France, and dozens of tech startups. The Île de la Jatte, immortalised by Seurat in 'A Sunday Afternoon on the Island of La Grande Jatte', borders the town along the Seine. This dense business fabric generates daily flows of business travellers to Orly. The ring road then A6 reach Orly in 25 minutes — faster and more reliable than metro 3 → connection → Orlyval combinations.",
      itineraire: "Your driver leaves Levallois-Perret heading south towards the Boulevard Peripherique, entering the ring road at Porte de Champerret or Porte d'Asnières. The route follows the Peripherique south, passing through Porte de Saint-Cloud, Porte de Versailles and Porte d'Italie before joining the A6 motorway towards Orly Airport. The journey takes 25 minutes in normal traffic, but allow up to 40 minutes during rush hour when the Peripherique can slow significantly around Porte de Versailles and the A6 junction. There are no tolls on this route. If the Peripherique is heavily congested, your driver may take surface roads through Boulogne-Billancourt and Issy-les-Moulineaux as an alternative.",
      conseils: "Levallois-Perret is a nerve centre of French corporate headquarters, with Celine (LVMH), Alstom, Dassault Aviation and Amazon France all based here. The Ile de la Jatte, the Seine island that inspired Seurat's masterpiece, offers excellent waterside restaurants perfect for a meal before your trip. Levallois market, one of the largest in the Hauts-de-Seine department, runs on Wednesday and Saturday mornings on Place du Marché. Orly serves primarily domestic French destinations (Nice, Toulouse, Bordeaux, Marseille) as well as flights to southern Europe, North Africa and Portugal. Specify your terminal (Orly 1, 2, 3 or 4) when booking for direct drop-off. For an early morning flight, we recommend departing Levallois by 5:30am to allow comfortable check-in time. Orly parking costs 25-35 euros per day, making the taxi a cost-effective alternative from a 2-day trip onwards.",
      comparaisonTransport: "Metro + Orlyval = 1h, €12-15. Taxi €28-42: 25 min. 35 min saved.",
      faq: [
        { question: "How much does a taxi from Levallois-Perret to Orly Airport cost?", answer: "€28-42 sedan, €58 van. Fixed fare." },
        { question: "How long is the taxi ride from Levallois-Perret to Orly Airport?", answer: "25 min off-peak." },
        { question: "Which terminal at Orly will my driver drop me at?", answer: "Drop-off at exact terminal." },
        { question: "Can I get picked up at a corporate headquarters in Levallois-Perret?", answer: "Pick-up at any Levallois address." },
        { question: "Can I book a return taxi from Orly Airport to Levallois-Perret?", answer: "Same fare, flight tracking." }
      ],
    }
  ),
  hdsNRoute(
    "taxi-levallois-perret-cdg", "Levallois-Perret", "Aéroport CDG",
    48.8933, 2.2880, 49.0097, 2.5479,
    32, 30, "35 — 52 €", "aeroport",
    ["A86", "A1", "CDG", "Sièges sociaux", "Île de la Jatte"],
    35, 52, 72, 50, "Périph. + A1", "~3 €", "levallois-perret", "cdg",
    ["taxi-levallois-perret-orly", "taxi-neuilly-sur-seine-cdg", "taxi-courbevoie-cdg"],
    ["aeroport", "cdg", "roissy", "levallois-perret", "hauts-de-seine"],
    {
      metaTitle: "Taxi Levallois-Perret → CDG | 32 km, dès 35 € | TaxiNeo",
      metaDescription: "Transfert taxi Levallois-Perret vers CDG. 30 min. Sièges sociaux, commune la plus dense de France. Prix fixe 35-52 €.",
      heroTitle: "Taxi Levallois-Perret → Aéroport CDG",
      heroSubtitle: "Transfert Levallois-Perret → CDG au prix fixe de 35 — 52 €. 32 km, 30 min.",
      description: "CDG est à 30 min de Levallois-Perret.",
      routeDescription: "Via le périphérique nord puis A1.",
      introduction: "Le transfert Levallois-Perret – CDG est un classique de l'ouest parisien, reliant la commune la plus dense de France à Roissy en 30 minutes par le périphérique et l'A1. Les sièges sociaux de Celine (LVMH), Alstom, Dassault Aviation et Amazon France génèrent un flux constant de voyageurs d'affaires internationaux vers CDG. L'île de la Jatte, ce joyau impressionniste entre Levallois et Neuilly, accueille aussi des restaurants gastronomiques fréquentés par les cadres internationaux avant ou après un vol. Le RER B depuis Paris prend 1h avec une correspondance ; le taxi est deux fois plus rapide et offre un confort de service incomparable.",
      itineraire: "Levallois → périphérique nord → A1 → CDG. 30 min hors pointe, 50 min en pointe. Péages ~3 € inclus.",
      conseils: "CDG est le hub Air France pour les vols long-courriers. Levallois est un centre d'affaires majeur. L'île de la Jatte vaut un détour gastronomique.",
      comparaisonTransport: "Métro + RER B = 1h, 12-15 €. Taxi 35-52 € : 30 min. Moitié du temps.",
      faq: [
        { question: "Prix ?", answer: "35-52 € berline, 72 € van. Tarif fixe." },
        { question: "Durée ?", answer: "30 min normalement, 50 min en pointe." },
        { question: "Terminal ?", answer: "Dépose au terminal exact." },
        { question: "Retour ?", answer: "Même tarif, suivi de vol." },
        { question: "Sièges sociaux ?", answer: "Oui, prise en charge à tout siège social de Levallois." }
      ],
    },
    {
      metaTitle: "Taxi Levallois-Perret → CDG | 32 km, from €35 | TaxiNeo",
      metaDescription: "Taxi from Levallois-Perret to CDG. 30 min. Corporate HQs, France's densest city. Fixed price €35-52.",
      heroTitle: "Taxi Levallois-Perret → CDG Airport",
      heroSubtitle: "Your Levallois-Perret → CDG transfer at €35 — €52. 32 km, 30 min.",
      description: "CDG is 30 min from Levallois-Perret.",
      routeDescription: "Via the ring road north then A1.",
      introduction: "The Levallois-Perret to CDG transfer is a western Paris classic, connecting France's densest town to Roissy in 30 minutes via the ring road and A1. The headquarters of Celine (LVMH), Alstom, Dassault Aviation and Amazon France generate a constant flow of international business travellers to CDG. The Île de la Jatte, that Impressionist gem between Levallois and Neuilly, also hosts gourmet restaurants frequented by international executives before or after flights. RER B from Paris takes 1h with a connection; the taxi is twice as fast with incomparable service comfort.",
      itineraire: "Your driver departs Levallois-Perret heading north to join the Boulevard Peripherique, entering at Porte de Champerret or Porte de Clichy. The route follows the northern Peripherique past Porte de la Chapelle before joining the A1 motorway northbound towards Roissy-CDG. Allow 30 minutes in normal conditions, but plan for up to 50 minutes during rush hour, particularly around the Porte de la Chapelle interchange which is a frequent congestion point. Tolls are approximately 3 euros, included in the fixed fare. In the event of major delays on the Peripherique, your driver may opt for an alternative route via the A86 east and then the A1 to avoid central Paris entirely.",
      conseils: "CDG is the Air France hub for long-haul flights to the Americas, Asia, the Middle East and Africa. The headquarters of Celine (LVMH), Alstom, Dassault Aviation and Amazon France are all in Levallois, generating constant international business travel demand. The Ile de la Jatte, that Impressionist gem straddling the Seine between Levallois and Neuilly, hosts several gourmet restaurants well worth a visit before or after a long-haul flight. Allow 2 to 3 hours before an intercontinental departure. Specify your terminal when booking: T1 for Star Alliance, T2 for Air France and SkyTeam partners, T3 for budget carriers. Pick-up is available at any corporate headquarters in Levallois, at your residence, or on the Ile de la Jatte itself.",
      comparaisonTransport: "Metro + RER B = 1h, €12-15. Taxi €35-52: 30 min. Half the time.",
      faq: [
        { question: "How much does a taxi from Levallois-Perret to CDG Airport cost?", answer: "€35-52 sedan, €72 van. Fixed fare." },
        { question: "How long is the taxi ride from Levallois-Perret to CDG Airport?", answer: "30 min normally, 50 min in rush hour." },
        { question: "Which terminal at CDG will my driver drop me at?", answer: "Drop-off at exact terminal." },
        { question: "Can I book a return taxi from CDG Airport to Levallois-Perret?", answer: "Same fare, flight tracking." },
        { question: "Can I get picked up at a corporate headquarters in Levallois-Perret?", answer: "Yes, pick-up at any Levallois corporate HQ." }
      ],
    }
  ),
  // ═══════════════════════════════════════════════════════════
  // NEUILLY-SUR-SEINE (61 000 hab.)
  // ═══════════════════════════════════════════════════════════
  hdsNRoute(
    "taxi-neuilly-sur-seine-orly", "Neuilly-sur-Seine", "Aéroport d'Orly",
    48.8848, 2.2688, 48.7262, 2.3652,
    20, 25, "28 — 42 €", "aeroport",
    ["Périphérique", "A6", "Orly", "Bois de Boulogne", "Avenue Charles de Gaulle"],
    28, 42, 58, 40, "Périph. + A6", "0 €", "neuilly-sur-seine", "orly",
    ["taxi-neuilly-sur-seine-cdg", "taxi-levallois-perret-orly"],
    ["aeroport", "orly", "neuilly-sur-seine", "hauts-de-seine"],
    {
      metaTitle: "Taxi Neuilly-sur-Seine → Orly | 20 km, dès 28 € | TaxiNeo",
      metaDescription: "Transfert taxi Neuilly-sur-Seine vers Orly. 25 min. Ville la plus riche de France, Bois de Boulogne. Prix fixe 28-42 €.",
      heroTitle: "Taxi Neuilly-sur-Seine → Aéroport d'Orly",
      heroSubtitle: "Transfert Neuilly-sur-Seine → Orly au prix fixe de 28 — 42 €. 20 km, 25 min.",
      description: "Orly est à 25 min de Neuilly-sur-Seine.",
      routeDescription: "Via le périphérique sud puis A6.",
      introduction: "Neuilly-sur-Seine, 61 000 habitants, est la commune la plus aisée de France avec un revenu médian parmi les plus élevés du pays. Bordée par le Bois de Boulogne et l'avenue Charles de Gaulle (prolongement des Champs-Élysées), la ville abrite ambassades, hôtels particuliers, cliniques privées (American Hospital) et des résidents de premier plan. Le transfert vers Orly par le périphérique et l'A6 prend 25 minutes — un service rapide et discret que cette clientèle exigeante attend. Neuilly héberge également le siège de nombreuses sociétés de conseil, cabinets d'avocats d'affaires et family offices dont les collaborateurs voyagent fréquemment.",
      itineraire: "Neuilly → périphérique sud → A6 → Orly. 25 min hors pointe, 40 min en pointe. Sans péage.",
      conseils: "Neuilly jouxte le Bois de Boulogne (846 ha) et les Champs-Élysées. L'American Hospital de Paris est le premier hôpital privé anglophone de France. Le marché de Neuilly (Sablons) est réputé pour ses produits haut de gamme.",
      comparaisonTransport: "Métro 1 + Orlyval = 55 min, 12-15 €. Taxi 28-42 € : 25 min. Service premium pour clientèle premium.",
      faq: [
        { question: "Prix ?", answer: "28-42 € berline, 58 € van. Tarif fixe." },
        { question: "Durée ?", answer: "25 min normalement." },
        { question: "Terminal ?", answer: "Dépose au terminal exact." },
        { question: "Discrétion ?", answer: "Service professionnel et discret. Véhicules premium disponibles." },
        { question: "Retour ?", answer: "Même tarif, suivi de vol." }
      ],
    },
    {
      metaTitle: "Taxi Neuilly-sur-Seine → Orly | 20 km, from €28 | TaxiNeo",
      metaDescription: "Taxi from Neuilly-sur-Seine to Orly. 25 min. France's wealthiest town, Bois de Boulogne. Fixed price €28-42.",
      heroTitle: "Taxi Neuilly-sur-Seine → Orly Airport",
      heroSubtitle: "Your Neuilly-sur-Seine → Orly transfer at €28 — €42. 20 km, 25 min.",
      description: "Orly is 25 min from Neuilly-sur-Seine.",
      routeDescription: "Via the ring road south then A6.",
      introduction: "Neuilly-sur-Seine, 61,000 inhabitants, is France's wealthiest town with one of the country's highest median incomes. Bordered by the Bois de Boulogne and Avenue Charles de Gaulle (extension of the Champs-Élysées), the town hosts embassies, private mansions, exclusive clinics (American Hospital) and prominent residents. The Orly transfer via ring road and A6 takes 25 minutes — a fast, discreet service this discerning clientele expects. Neuilly also houses many consulting firms, business law practices and family offices whose staff travel frequently.",
      itineraire: "Your driver departs Neuilly-sur-Seine heading south along Avenue Charles de Gaulle towards Porte Maillot, then joins the Boulevard Peripherique southbound. The route follows the Peripherique past Porte d'Auteuil (near the Bois de Boulogne), Porte de Saint-Cloud and Porte de Versailles, before connecting to the A6 motorway towards Orly Airport. Allow 25 minutes under normal conditions, extending to 40 minutes during peak hours. There are no tolls on this route. The Peripherique can experience slowdowns around Porte de Versailles (Parc des Expositions) during trade shows and events. An alternative route via the quays along the Seine through Boulogne-Billancourt is available if the ring road is congested.",
      conseils: "Neuilly-sur-Seine sits in an exceptionally prestigious location, bordered by the Bois de Boulogne (846 hectares of parkland including the Jardin d'Acclimatation and Fondation Louis Vuitton) and the Avenue Charles de Gaulle, the direct extension of the Champs-Elysees. The American Hospital of Paris, France's foremost English-speaking private hospital, is located in Neuilly and regularly serves international patients requiring airport transfers. The Sablons market is renowned among Neuilly residents for its premium fresh produce, artisan cheeses and fine foods. Orly serves domestic French routes (Nice, Toulouse, Bordeaux), as well as southern Europe, North Africa and Portugal. For a clientele accustomed to discretion and punctuality, our service provides professional, understated transfers with premium vehicles available on request. Specify your Orly terminal (1, 2, 3 or 4) when booking.",
      comparaisonTransport: "Metro 1 + Orlyval = 55 min, €12-15. Taxi €28-42: 25 min. Premium service for premium clientele.",
      faq: [
        { question: "How much does a taxi from Neuilly-sur-Seine to Orly Airport cost?", answer: "€28-42 sedan, €58 van. Fixed fare." },
        { question: "How long is the taxi ride from Neuilly-sur-Seine to Orly Airport?", answer: "25 min normally." },
        { question: "Which terminal at Orly will my driver drop me at?", answer: "Drop-off at exact terminal." },
        { question: "Is a discreet premium taxi service available from Neuilly-sur-Seine?", answer: "Professional, discreet service. Premium vehicles available." },
        { question: "Can I book a return taxi from Orly Airport to Neuilly-sur-Seine?", answer: "Same fare, flight tracking." }
      ],
    }
  ),
  hdsNRoute(
    "taxi-neuilly-sur-seine-cdg", "Neuilly-sur-Seine", "Aéroport CDG",
    48.8848, 2.2688, 49.0097, 2.5479,
    30, 30, "35 — 52 €", "aeroport",
    ["Périphérique", "A1", "CDG", "Bois de Boulogne", "American Hospital"],
    35, 52, 72, 50, "Périph. + A1", "~3 €", "neuilly-sur-seine", "cdg",
    ["taxi-neuilly-sur-seine-orly", "taxi-levallois-perret-cdg"],
    ["aeroport", "cdg", "roissy", "neuilly-sur-seine", "hauts-de-seine"],
    {
      metaTitle: "Taxi Neuilly-sur-Seine → CDG | 30 km, dès 35 € | TaxiNeo",
      metaDescription: "Transfert taxi Neuilly-sur-Seine vers CDG. 30 min. Commune la plus aisée de France. Prix fixe 35-52 €.",
      heroTitle: "Taxi Neuilly-sur-Seine → Aéroport CDG",
      heroSubtitle: "Transfert Neuilly-sur-Seine → CDG au prix fixe de 35 — 52 €. 30 km, 30 min.",
      description: "CDG est à 30 min de Neuilly-sur-Seine.",
      routeDescription: "Via le périphérique nord puis A1.",
      introduction: "Neuilly-sur-Seine, commune la plus aisée de France, est idéalement positionnée pour un transfert CDG rapide : le périphérique nord et l'A1 y mènent en 30 minutes. Les résidents fortunés de Neuilly, les diplomates des nombreuses ambassades, les patients de l'American Hospital de Paris et les cadres des family offices voisins voyagent fréquemment en long-courrier depuis CDG. L'avenue Charles de Gaulle relie Neuilly à l'Arc de Triomphe en ligne droite — un axe symbolique qui se prolonge jusqu'à Roissy par la route. Le service taxi répond aux attentes d'une clientèle habituée à l'excellence : ponctualité, confort, discrétion.",
      itineraire: "Neuilly → périphérique nord → A1 → CDG. 30 min hors pointe, 50 min en pointe. Péages ~3 € inclus.",
      conseils: "CDG pour les vols intercontinentaux de prestige. Neuilly offre un cadre de vie exceptionnel entre Bois de Boulogne et Champs-Élysées. Véhicules haut de gamme disponibles sur demande.",
      comparaisonTransport: "Métro 1 + RER B = 1h, 12-15 €. Taxi 35-52 € : 30 min, moitié du temps. Pour une clientèle de standing, le choix est évident.",
      faq: [
        { question: "Prix ?", answer: "35-52 € berline, 72 € van. Tarif fixe." },
        { question: "Durée ?", answer: "30 min normalement, 50 min en pointe." },
        { question: "Terminal ?", answer: "Dépose au terminal exact." },
        { question: "Véhicule premium ?", answer: "Oui, sur demande : berlines de luxe et vans haut de gamme." },
        { question: "Retour ?", answer: "Même tarif, suivi de vol, accueil personnalisé." }
      ],
    },
    {
      metaTitle: "Taxi Neuilly-sur-Seine → CDG | 30 km, from €35 | TaxiNeo",
      metaDescription: "Taxi from Neuilly-sur-Seine to CDG. 30 min. France's wealthiest town. Fixed price €35-52.",
      heroTitle: "Taxi Neuilly-sur-Seine → CDG Airport",
      heroSubtitle: "Your Neuilly-sur-Seine → CDG transfer at €35 — €52. 30 km, 30 min.",
      description: "CDG is 30 min from Neuilly-sur-Seine.",
      routeDescription: "Via the ring road north then A1.",
      introduction: "Neuilly-sur-Seine, France's wealthiest town, is ideally positioned for a fast CDG transfer: the northern ring road and A1 reach it in 30 minutes. Neuilly's affluent residents, diplomats from numerous embassies, American Hospital patients and executives from neighbouring family offices frequently travel long-haul from CDG. Avenue Charles de Gaulle connects Neuilly to the Arc de Triomphe in a straight line — a symbolic axis that extends to Roissy by road. The taxi service meets the expectations of a clientele accustomed to excellence: punctuality, comfort, discretion.",
      itineraire: "Your driver departs Neuilly-sur-Seine via Avenue Charles de Gaulle towards Porte Maillot, then joins the Boulevard Peripherique heading north. The route passes Porte de Clichy and Porte de la Chapelle before connecting to the A1 motorway northbound towards Roissy-CDG. Allow 30 minutes in normal traffic, extending to 50 minutes during rush hour. Tolls are approximately 3 euros and are included in the fixed fare. The Porte de la Chapelle interchange can be congested during peak times. Should the Peripherique be heavily saturated, your driver may choose an alternative via the A86 ring road to avoid central Paris altogether.",
      conseils: "CDG is the departure point for prestige intercontinental flights, serving every major world capital. Neuilly-sur-Seine offers an exceptional setting between the Bois de Boulogne and the Champs-Elysees, home to prominent residents, diplomats from numerous embassies and professionals from leading consulting firms and family offices. Premium vehicles — luxury sedans and high-end vans — are available on request to match the expectations of this distinguished clientele. The American Hospital of Paris, located in Neuilly, regularly generates medical travel requiring discreet, reliable airport transfers. Allow 2 to 3 hours before an international departure at CDG. Specify your terminal when booking. Our drivers provide a personalised, discreet service with help for luggage and a meet-and-greet option for return journeys from CDG.",
      comparaisonTransport: "Metro 1 + RER B = 1h, €12-15. Taxi €35-52: 30 min, half the time. For a premium clientele, the choice is obvious.",
      faq: [
        { question: "How much does a taxi from Neuilly-sur-Seine to CDG Airport cost?", answer: "€35-52 sedan, €72 van. Fixed fare." },
        { question: "How long is the taxi ride from Neuilly-sur-Seine to CDG Airport?", answer: "30 min normally, 50 min in rush hour." },
        { question: "Which terminal at CDG will my driver drop me at?", answer: "Drop-off at exact terminal." },
        { question: "Can I request a premium vehicle for my Neuilly-sur-Seine to CDG transfer?", answer: "Yes, on request: luxury sedans and premium vans." },
        { question: "Can I book a return taxi from CDG Airport to Neuilly-sur-Seine?", answer: "Same fare, flight tracking, personalised welcome." }
      ],
    }
  ),
  // ═══════════════════════════════════════════════════════════
  // COLOMBES (85 000 hab.)
  // ═══════════════════════════════════════════════════════════
  hdsNRoute(
    "taxi-colombes-orly", "Colombes", "Aéroport d'Orly",
    48.9230, 2.2530, 48.7262, 2.3652,
    25, 30, "32 — 48 €", "aeroport",
    ["A86", "A6", "Orly", "Stade Yves-du-Manoir", "Coulée verte"],
    32, 48, 65, 45, "A86 + A6", "~3 €", "colombes", "orly",
    ["taxi-colombes-cdg", "taxi-asnieres-sur-seine-orly", "taxi-courbevoie-orly"],
    ["aeroport", "orly", "colombes", "hauts-de-seine"],
    {
      metaTitle: "Taxi Colombes → Orly | 25 km, dès 32 € | TaxiNeo",
      metaDescription: "Transfert taxi Colombes vers Orly. 30 min par A86. 85 000 hab., stade Yves-du-Manoir. Prix fixe 32-48 €.",
      heroTitle: "Taxi Colombes → Aéroport d'Orly",
      heroSubtitle: "Transfert Colombes → Orly au prix fixe de 32 — 48 €. 25 km, 30 min.",
      description: "Orly est à 30 min de Colombes via l'A86.",
      routeDescription: "Via A86 sud.",
      introduction: "Colombes, 85 000 habitants, est la deuxième ville des Hauts-de-Seine. Le stade Yves-du-Manoir, qui accueillit les Jeux Olympiques de 1924 et fut rénové pour Paris 2024 (hockey sur gazon), est l'emblème sportif de la ville. La coulée verte, ancienne voie ferrée reconvertie en promenade plantée, traverse la commune du nord au sud. Colombes mêle quartiers résidentiels bourgeois (Petit-Colombes) et quartiers populaires dynamiques, avec une vie culturelle riche (théâtre, médiathèque). Le transfert vers Orly par l'A86 prend 30 minutes, bien plus rapide que les correspondances Transilien → métro → Orlyval.",
      itineraire: "Colombes → A86 sud → direction Orly. 30 min hors pointe, 45 min en pointe. Péages ~3 € inclus.",
      conseils: "Le stade Yves-du-Manoir est un lieu chargé d'histoire olympique (1924 et 2024). La coulée verte est parfaite pour le jogging et le vélo. Le marché de Colombes (mercredi, samedi) est varié et animé.",
      comparaisonTransport: "Transilien + métro + Orlyval = 1h15, 12-16 €. Taxi 32-48 € : 30 min. Le taxi est 2,5× plus rapide.",
      faq: [
        { question: "Prix ?", answer: "32-48 € berline, 65 € van. Tarif fixe." },
        { question: "Durée ?", answer: "30 min normalement." },
        { question: "Terminal ?", answer: "Dépose au terminal exact." },
        { question: "Stade olympique ?", answer: "Prise en charge possible au stade Yves-du-Manoir." },
        { question: "Retour ?", answer: "Même tarif, suivi de vol." }
      ],
    },
    {
      metaTitle: "Taxi Colombes → Orly | 25 km, from €32 | TaxiNeo",
      metaDescription: "Taxi from Colombes to Orly. 30 min via A86. 85,000 residents, Yves-du-Manoir stadium. Fixed price €32-48.",
      heroTitle: "Taxi Colombes → Orly Airport",
      heroSubtitle: "Your Colombes → Orly transfer at €32 — €48. 25 km, 30 min.",
      description: "Orly is 30 min from Colombes via the A86.",
      routeDescription: "Via A86 south.",
      introduction: "Colombes, population 85,000, is the second-largest town in Hauts-de-Seine. The Yves-du-Manoir stadium, which hosted the 1924 Olympics and was renovated for Paris 2024 (field hockey), is the town's sporting emblem. The coulée verte, a former railway line converted to a planted promenade, crosses the town north to south. Colombes blends bourgeois residential areas (Petit-Colombes) with dynamic working-class neighbourhoods, and rich cultural life (theatre, media library). The A86 transfer to Orly takes 30 minutes — far faster than Transilien → metro → Orlyval connections.",
      itineraire: "Your driver departs Colombes heading south to join the A86 ring road. The route follows the A86 as it circles around the western and southern suburbs of Paris, passing through Rueil-Malmaison, the Velizy tunnel and Rungis before reaching the direct exit for Orly Airport. Allow 30 minutes under normal traffic conditions, but plan for up to 45 minutes during rush hour (7:30-9:30am, 5-7:30pm), as the A86 can experience congestion near the Velizy tunnel. Tolls are approximately 3 euros and are included in the fixed fare. An alternative route via the Boulevard Peripherique south and the A6 is available if the A86 is particularly congested.",
      conseils: "The Yves-du-Manoir stadium is steeped in Olympic history: it served as the main venue for the 1924 Paris Olympics and was renovated to host field hockey during the Paris 2024 Games, making Colombes one of the few cities worldwide to have welcomed the Olympics a century apart. The coulee verte, a former railway line converted into a tree-lined promenade, is ideal for jogging and cycling and runs the length of the town from north to south. Colombes market on Wednesday and Saturday mornings offers a varied selection of fresh produce and specialty foods. Orly serves domestic French routes, southern Europe and North Africa. Specify your terminal (Orly 1, 2, 3 or 4) when booking. For early morning flights, we recommend departing Colombes by 5:30am. Pick-up is possible from anywhere in Colombes, including the Yves-du-Manoir area and the Petit-Colombes residential quarter.",
      comparaisonTransport: "Transilien + metro + Orlyval = 1h15, €12-16. Taxi €32-48: 30 min. Taxi is 2.5× faster.",
      faq: [
        { question: "How much does a taxi from Colombes to Orly Airport cost?", answer: "€32-48 sedan, €65 van. Fixed fare." },
        { question: "How long is the taxi ride from Colombes to Orly Airport?", answer: "30 min normally." },
        { question: "Which terminal at Orly will my driver drop me at?", answer: "Drop-off at exact terminal." },
        { question: "Can I get a taxi from the Yves-du-Manoir Olympic stadium in Colombes?", answer: "Pick-up at Yves-du-Manoir stadium available." },
        { question: "Can I book a return taxi from Orly Airport to Colombes?", answer: "Same fare, flight tracking." }
      ],
    }
  ),
  hdsNRoute(
    "taxi-colombes-cdg", "Colombes", "Aéroport CDG",
    48.9230, 2.2530, 49.0097, 2.5479,
    35, 30, "38 — 55 €", "aeroport",
    ["A86", "A1", "CDG", "Stade Yves-du-Manoir", "Coulée verte"],
    38, 55, 75, 50, "A86 + A1", "~5 €", "colombes", "cdg",
    ["taxi-colombes-orly", "taxi-asnieres-sur-seine-cdg", "taxi-courbevoie-cdg"],
    ["aeroport", "cdg", "roissy", "colombes", "hauts-de-seine"],
    {
      metaTitle: "Taxi Colombes → CDG | 35 km, dès 38 € | TaxiNeo",
      metaDescription: "Transfert taxi Colombes vers CDG. 30 min par A86/A1. 85 000 hab. Prix fixe 38-55 €.",
      heroTitle: "Taxi Colombes → Aéroport CDG",
      heroSubtitle: "Transfert Colombes → CDG au prix fixe de 38 — 55 €. 35 km, 30 min.",
      description: "CDG est à 30 min de Colombes via A86 et A1.",
      routeDescription: "Via A86 est puis A1 nord.",
      introduction: "Colombes, deuxième ville des Hauts-de-Seine avec 85 000 habitants, est bien reliée à CDG par l'A86 et l'A1 en 30 minutes. La ville, connue pour son stade olympique et sa diversité culturelle, abrite une population cosmopolite qui voyage régulièrement via CDG. Le Transilien L dessert Paris-Saint-Lazare en 15 min, mais pour CDG, les correspondances (Saint-Lazare → RER B, 1h15) rendent le taxi nettement préférable.",
      itineraire: "Colombes → A86 est → A1 nord → CDG. 30 min hors pointe, 50 min en pointe. Péages ~5 € inclus.",
      conseils: "CDG pour vols long-courriers. L'A86 contourne Paris. Colombes est bien desservie par le Transilien L pour Paris, mais pas pour CDG.",
      comparaisonTransport: "Transilien + RER B = 1h15, 12-15 €. Taxi 38-55 € : 30 min. Moitié du temps.",
      faq: [
        { question: "Prix ?", answer: "38-55 € berline, 75 € van. Tarif fixe." },
        { question: "Durée ?", answer: "30 min normalement." },
        { question: "Terminal ?", answer: "Dépose au terminal exact." },
        { question: "Retour ?", answer: "Même tarif, suivi de vol." },
        { question: "Réservation ?", answer: "En ligne 24h/24." }
      ],
    },
    {
      metaTitle: "Taxi Colombes → CDG | 35 km, from €38 | TaxiNeo",
      metaDescription: "Taxi from Colombes to CDG. 30 min via A86/A1. 85,000 residents. Fixed price €38-55.",
      heroTitle: "Taxi Colombes → CDG Airport",
      heroSubtitle: "Your Colombes → CDG transfer at €38 — €55. 35 km, 30 min.",
      description: "CDG is 30 min from Colombes via A86 and A1.",
      routeDescription: "Via A86 east then A1 north.",
      introduction: "Colombes, the second-largest town in the Hauts-de-Seine department with 85,000 residents, enjoys a well-established connection to CDG Airport via the A86 ring road and the A1 motorway in just 30 minutes. The town is renowned for the Yves-du-Manoir stadium, a historic venue that hosted the 1924 Olympic Games and was renovated to welcome field hockey competitions during the Paris 2024 Olympics. Colombes is a town of remarkable cultural diversity, with a cosmopolitan population that regularly travels internationally via CDG. The coulee verte, a beautifully converted former railway line, threads through the town as a green promenade, while the residential neighbourhoods of Petit-Colombes offer a quieter, bourgeois atmosphere in contrast to the town's more dynamic eastern quarters. The Transilien L commuter train serves Paris-Saint-Lazare in 15 minutes, providing excellent connections to central Paris, but for CDG the public transport route requires a transfer from Saint-Lazare to the RER B at Gare du Nord, totalling roughly 1 hour 15 minutes with at least one connection. The taxi via the A86 and A1 bypasses Paris entirely, cutting the journey time in half with reliable door-to-terminal service.",
      itineraire: "Your driver departs Colombes heading east to join the A86 ring road. The A86 circles around the northern suburbs of Paris, passing through Gennevilliers and Saint-Denis, before connecting with the A1 motorway heading north towards Roissy-CDG. Allow 30 minutes in standard traffic conditions, but plan for up to 50 minutes during rush hour (7:30-9:30am, 5-7:30pm), particularly near the A86/A1 interchange at Saint-Denis which is a known congestion point. Tolls are approximately 5 euros and are included in the fixed fare. In the event of heavy traffic on the A86, your driver may opt for the Boulevard Peripherique north to Porte de la Chapelle, then the A1, as an alternative.",
      conseils: "CDG is France's main international gateway for long-haul flights, serving as the Air France hub for destinations across the Americas, Asia, Africa and the Middle East. The A86 ring road efficiently bypasses central Paris, providing a direct route from the northwestern suburbs to the airport. Colombes is well served by the Transilien L for quick trips to central Paris, but the connection to CDG via public transport remains cumbersome and time-consuming. Allow 2 to 3 hours before an international departure. Specify your terminal when booking: T1 for Star Alliance, T2 for Air France and SkyTeam, T3 for low-cost carriers. The Yves-du-Manoir Olympic stadium area and the coulee verte neighbourhood are popular pick-up points. CDG parking costs 25-40 euros per day, so the taxi becomes the more economical option for trips lasting 2 or more days.",
      comparaisonTransport: "Transilien + RER B = 1h15, €12-15. Taxi €38-55: 30 min. Half the time.",
      faq: [
        { question: "How much does a taxi from Colombes to CDG Airport cost?", answer: "€38-55 sedan, €75 van. Fixed fare." },
        { question: "How long is the taxi ride from Colombes to CDG Airport?", answer: "30 min normally." },
        { question: "Which terminal at CDG will my driver drop me at?", answer: "Drop-off at exact terminal." },
        { question: "Can I book a return taxi from CDG Airport to Colombes?", answer: "Same fare, flight tracking." },
        { question: "How do I book a taxi from Colombes to CDG Airport?", answer: "Online 24/7." }
      ],
    }
  ),
  // ═══════════════════════════════════════════════════════════
  // RUEIL-MALMAISON (80 000 hab.)
  // ═══════════════════════════════════════════════════════════
  hdsNRoute(
    "taxi-rueil-malmaison-orly", "Rueil-Malmaison", "Aéroport d'Orly",
    48.8769, 2.1810, 48.7262, 2.3652,
    28, 30, "35 — 50 €", "aeroport",
    ["A86", "A13", "Orly", "Château de Malmaison", "Mont-Valérien"],
    35, 50, 68, 45, "A86", "~3 €", "rueil-malmaison", "orly",
    ["taxi-rueil-malmaison-cdg", "taxi-nanterre-orly"],
    ["aeroport", "orly", "rueil-malmaison", "malmaison", "napoleon", "hauts-de-seine"],
    {
      metaTitle: "Taxi Rueil-Malmaison → Orly | 28 km, dès 35 € | TaxiNeo",
      metaDescription: "Transfert taxi Rueil-Malmaison vers Orly. 30 min par A86. Château de Malmaison, 80 000 hab. Prix fixe 35-50 €.",
      heroTitle: "Taxi Rueil-Malmaison → Aéroport d'Orly",
      heroSubtitle: "Transfert Rueil-Malmaison → Orly au prix fixe de 35 — 50 €. 28 km, 30 min.",
      description: "Orly est à 30 min de Rueil-Malmaison via l'A86.",
      routeDescription: "Via A86 sud.",
      introduction: "Rueil-Malmaison, 80 000 habitants, est une ville résidentielle aisée de l'ouest parisien, célèbre pour le château de Malmaison, résidence de Joséphine de Beauharnais et de Napoléon Bonaparte après leur mariage. Le musée national du château retrace l'épopée napoléonienne dans un décor d'époque exceptionnel (mobilier Consulat et Empire). Le Mont-Valérien, mémorial de la France combattante (1 009 fusillés pendant l'Occupation), se dresse entre Rueil et Nanterre. La ville abrite aussi le siège de Schneider Electric et de nombreuses entreprises de la Défense Ouest. Le transfert vers Orly par l'A86 prend 30 minutes, idéal pour les résidents, touristes du château et professionnels.",
      itineraire: "Rueil-Malmaison → A86 sud → direction Orly. 30 min hors pointe, 45 min en pointe. Péages ~3 € inclus.",
      conseils: "Le château de Malmaison (10 €, gratuit -26 ans UE) est un incontournable napoléonien. Le Mont-Valérien se visite sur réservation (gratuit). Rueil possède un centre-ville commerçant animé et un marché réputé.",
      comparaisonTransport: "RER A + correspondances → Orlyval = 1h15, 12-16 €. Taxi 35-50 € : 30 min. Le taxi est 2,5× plus rapide.",
      faq: [
        { question: "Prix ?", answer: "35-50 € berline, 68 € van. Tarif fixe." },
        { question: "Durée ?", answer: "30 min normalement." },
        { question: "Malmaison ?", answer: "Le château est à 5 min du centre. Prise en charge possible." },
        { question: "Terminal ?", answer: "Dépose au terminal exact." },
        { question: "Retour ?", answer: "Même tarif, suivi de vol." }
      ],
    },
    {
      metaTitle: "Taxi Rueil-Malmaison → Orly | 28 km, from €35 | TaxiNeo",
      metaDescription: "Taxi from Rueil-Malmaison to Orly. 30 min via A86. Château de Malmaison, 80,000 residents. Fixed price €35-50.",
      heroTitle: "Taxi Rueil-Malmaison → Orly Airport",
      heroSubtitle: "Your Rueil-Malmaison → Orly transfer at €35 — €50. 28 km, 30 min.",
      description: "Orly is 30 min from Rueil-Malmaison via the A86.",
      routeDescription: "Via A86 south.",
      introduction: "Rueil-Malmaison, 80,000 inhabitants, is an affluent residential town in western Paris, famous for the Château de Malmaison — residence of Joséphine de Beauharnais and Napoleon Bonaparte after their marriage. The national museum traces the Napoleonic saga in exceptional period decor (Consulate and Empire furniture). Mont-Valérien, the Fighting France memorial (1,009 executed during the Occupation), stands between Rueil and Nanterre. The town also hosts Schneider Electric's headquarters and many western La Défense companies. The A86 transfer to Orly takes 30 minutes, ideal for residents, château tourists and professionals.",
      itineraire: "Your driver departs Rueil-Malmaison heading south to join the A86 ring road. The route follows the A86 as it circles around the western and southern suburbs of Paris, passing through the Velizy-Villacoublay area, the Saclay plateau and Rungis before reaching the direct exit for Orly Airport. Allow 30 minutes under normal traffic conditions, but plan for up to 45 minutes during rush hour (7:30-9:30am, 5-7:30pm). The A86 can slow around the Velizy tunnel. Tolls are approximately 3 euros, included in the fixed fare. If the A86 is particularly congested, your driver may opt for the Peripherique south via Boulogne-Billancourt and the A6 as an alternative route.",
      conseils: "The Chateau de Malmaison (10 euros admission, free for under-26 EU citizens) is an essential Napoleonic heritage site, showcasing the private residence of Napoleon and Josephine with original Consulate and Empire period furnishings. Mont-Valerien, the Fighting France memorial where 1,009 resistance fighters were executed during the Occupation, can be visited by reservation free of charge. Rueil-Malmaison boasts a lively town centre with independent shops, cafes and a well-regarded market. Schneider Electric has its headquarters here, along with several other companies in the La Defense West area. Orly serves domestic French routes, southern Europe and North Africa. Specify your terminal (Orly 1, 2, 3 or 4) when booking. Pick-up is available anywhere in Rueil, including the chateau grounds and the Mont-Valerien area.",
      comparaisonTransport: "RER A + connections → Orlyval = 1h15, €12-16. Taxi €35-50: 30 min. Taxi is 2.5× faster.",
      faq: [
        { question: "How much does a taxi from Rueil-Malmaison to Orly Airport cost?", answer: "€35-50 sedan, €68 van. Fixed fare." },
        { question: "How long is the taxi ride from Rueil-Malmaison to Orly Airport?", answer: "30 min normally." },
        { question: "Can I get a taxi from the Château de Malmaison?", answer: "Château is 5 min from centre. Pick-up available." },
        { question: "Which terminal at Orly will my driver drop me at?", answer: "Drop-off at exact terminal." },
        { question: "Can I book a return taxi from Orly Airport to Rueil-Malmaison?", answer: "Same fare, flight tracking." }
      ],
    }
  ),
  hdsNRoute(
    "taxi-rueil-malmaison-cdg", "Rueil-Malmaison", "Aéroport CDG",
    48.8769, 2.1810, 49.0097, 2.5479,
    40, 35, "42 — 60 €", "aeroport",
    ["A86", "A1", "CDG", "Château de Malmaison", "Schneider Electric"],
    42, 60, 82, 55, "A86 + A1", "~5 €", "rueil-malmaison", "cdg",
    ["taxi-rueil-malmaison-orly", "taxi-nanterre-cdg"],
    ["aeroport", "cdg", "roissy", "rueil-malmaison", "napoleon", "hauts-de-seine"],
    {
      metaTitle: "Taxi Rueil-Malmaison → CDG | 40 km, dès 42 € | TaxiNeo",
      metaDescription: "Transfert taxi Rueil-Malmaison vers CDG. 35 min par A86/A1. Malmaison, 80 000 hab. Prix fixe 42-60 €.",
      heroTitle: "Taxi Rueil-Malmaison → Aéroport CDG",
      heroSubtitle: "Transfert Rueil-Malmaison → CDG au prix fixe de 42 — 60 €. 40 km, 35 min.",
      description: "CDG est à 35 min de Rueil-Malmaison via A86 et A1.",
      routeDescription: "Via A86 est puis A1 nord.",
      introduction: "Rueil-Malmaison, ville de Napoléon et Joséphine, est reliée à CDG en 35 minutes par l'A86 et l'A1. Les 80 000 habitants, le siège de Schneider Electric et les touristes internationaux du château de Malmaison (l'un des musées napoléoniens les plus visités au monde) alimentent un flux constant vers CDG. Le RER A vers Paris puis RER B prend 1h15 ; le taxi contourne Paris par l'A86 et divise le temps par deux. Le Mont-Valérien, avec son panorama sur tout l'ouest parisien, rappelle aux voyageurs l'importance historique de cette commune.",
      itineraire: "Rueil-Malmaison → A86 est → A1 nord → CDG. 35 min hors pointe, 55 min en pointe. Péages ~5 € inclus.",
      conseils: "CDG pour vols intercontinentaux. Le château de Malmaison mérite une visite avant un vol tardif. L'A86 contourne Paris efficacement.",
      comparaisonTransport: "RER A + RER B = 1h15, 12-15 €. Taxi 42-60 € : 35 min. Deux fois plus rapide.",
      faq: [
        { question: "Prix ?", answer: "42-60 € berline, 82 € van. Tarif fixe." },
        { question: "Durée ?", answer: "35 min normalement." },
        { question: "Terminal ?", answer: "Dépose au terminal exact." },
        { question: "Malmaison ?", answer: "Prise en charge au château possible." },
        { question: "Retour ?", answer: "Même tarif, suivi de vol." }
      ],
    },
    {
      metaTitle: "Taxi Rueil-Malmaison → CDG | 40 km, from €42 | TaxiNeo",
      metaDescription: "Taxi from Rueil-Malmaison to CDG. 35 min via A86/A1. Malmaison, 80,000 residents. Fixed price €42-60.",
      heroTitle: "Taxi Rueil-Malmaison → CDG Airport",
      heroSubtitle: "Your Rueil-Malmaison → CDG transfer at €42 — €60. 40 km, 35 min.",
      description: "CDG is 35 min from Rueil-Malmaison via A86 and A1.",
      routeDescription: "Via A86 east then A1 north.",
      introduction: "Rueil-Malmaison, Napoleon and Joséphine's town, connects to CDG in 35 minutes via A86 and A1. The 80,000 residents, Schneider Electric headquarters and international tourists visiting Château de Malmaison (one of the world's most visited Napoleonic museums) feed a constant flow to CDG. RER A to Paris then RER B takes 1h15; the taxi bypasses Paris via A86, halving the time. Mont-Valérien, with its panorama over western Paris, reminds travellers of this town's historic significance.",
      itineraire: "Your driver departs Rueil-Malmaison heading east to join the A86 ring road. The route follows the A86 around the northern suburbs, passing through Nanterre, Colombes and the Saint-Denis area before connecting to the A1 motorway heading north towards Roissy-CDG. Allow 35 minutes in normal conditions, but plan for up to 55 minutes during rush hour, especially around the A86/A1 interchange near Saint-Denis. Tolls are approximately 5 euros, included in the fixed fare. Should the A86 be heavily congested, your driver may use the Boulevard Peripherique north via Porte Maillot and Porte de la Chapelle to reach the A1 as an alternative.",
      conseils: "CDG is France's primary international airport for intercontinental flights, serving as the Air France long-haul hub with connections worldwide. The Chateau de Malmaison, one of the world's most visited Napoleonic museums, is well worth a visit before a late afternoon or evening flight, especially as it sits just 5 minutes from the town centre. The A86 ring road efficiently bypasses central Paris, providing a direct route from the western suburbs to CDG without the hassle of navigating through the city. Schneider Electric and numerous western La Defense companies are headquartered in Rueil, generating regular international business travel. Allow 2 to 3 hours before an intercontinental departure. Specify your terminal when booking. Mont-Valerien, with its panoramic views over western Paris, is a poignant reminder of the town's historical significance for visitors departing France.",
      comparaisonTransport: "RER A + RER B = 1h15, €12-15. Taxi €42-60: 35 min. Twice as fast.",
      faq: [
        { question: "How much does a taxi from Rueil-Malmaison to CDG Airport cost?", answer: "€42-60 sedan, €82 van. Fixed fare." },
        { question: "How long is the taxi ride from Rueil-Malmaison to CDG Airport?", answer: "35 min normally." },
        { question: "Which terminal at CDG will my driver drop me at?", answer: "Drop-off at exact terminal." },
        { question: "Can I get a taxi from the Château de Malmaison to CDG?", answer: "Château pick-up available." },
        { question: "Can I book a return taxi from CDG Airport to Rueil-Malmaison?", answer: "Same fare, flight tracking." }
      ],
    }
  ),
  // ═══════════════════════════════════════════════════════════
  // ASNIÈRES-SUR-SEINE (86 000 hab.)
  // ═══════════════════════════════════════════════════════════
  hdsNRoute(
    "taxi-asnieres-sur-seine-orly", "Asnières-sur-Seine", "Aéroport d'Orly",
    48.9120, 2.2850, 48.7262, 2.3652,
    22, 25, "28 — 42 €", "aeroport",
    ["Périphérique", "A6", "Orly", "Château d'Asnières", "Seine"],
    28, 42, 58, 40, "Périph. + A6", "0 €", "asnieres-sur-seine", "orly",
    ["taxi-asnieres-sur-seine-cdg", "taxi-colombes-orly", "taxi-gennevilliers-orly"],
    ["aeroport", "orly", "asnieres-sur-seine", "hauts-de-seine"],
    {
      metaTitle: "Taxi Asnières-sur-Seine → Orly | 22 km, dès 28 € | TaxiNeo",
      metaDescription: "Transfert taxi Asnières vers Orly. 25 min. 86 000 hab., château d'Asnières, bords de Seine. Prix fixe 28-42 €.",
      heroTitle: "Taxi Asnières-sur-Seine → Aéroport d'Orly",
      heroSubtitle: "Transfert Asnières → Orly au prix fixe de 28 — 42 €. 22 km, 25 min.",
      description: "Orly est à 25 min d'Asnières-sur-Seine.",
      routeDescription: "Via le périphérique sud puis A6.",
      introduction: "Asnières-sur-Seine, 86 000 habitants, est une commune en pleine mutation bordant la Seine et les quartiers nord de Paris. Le château d'Asnières (XVIIIe siècle, style rocaille), l'un des rares exemples d'architecture rococo en Île-de-France, est en cours de restauration. Les bords de Seine accueillent guinguettes et promenades. La ville attire une population jeune et dynamique grâce à ses prix immobiliers plus accessibles que Neuilly ou Levallois voisins. Le métro 13 et le Transilien L/J desservent Paris en 15 min, mais pour Orly, le taxi par le périphérique et l'A6 (25 min) est bien plus rapide que les correspondances metro/RER/Orlyval.",
      itineraire: "Asnières → périphérique sud → A6 → Orly. 25 min hors pointe, 40 min en pointe. Sans péage.",
      conseils: "Le château d'Asnières (XVIIIe s., rococo) est un joyau architectural en restauration. Les bords de Seine offrent des terrasses agréables en été. Asnières est en plein renouveau urbain.",
      comparaisonTransport: "Métro 13 + correspondances → Orlyval = 1h, 12-15 €. Taxi 28-42 € : 25 min. Gain de 35 min.",
      faq: [
        { question: "Prix ?", answer: "28-42 € berline, 58 € van. Tarif fixe." },
        { question: "Durée ?", answer: "25 min normalement." },
        { question: "Terminal ?", answer: "Dépose au terminal exact." },
        { question: "Retour ?", answer: "Même tarif, suivi de vol." },
        { question: "Réservation ?", answer: "En ligne 24h/24." }
      ],
    },
    {
      metaTitle: "Taxi Asnières-sur-Seine → Orly | 22 km, from €28 | TaxiNeo",
      metaDescription: "Taxi from Asnières to Orly. 25 min. 86,000 residents, château, Seine riverside. Fixed price €28-42.",
      heroTitle: "Taxi Asnières-sur-Seine → Orly Airport",
      heroSubtitle: "Your Asnières → Orly transfer at €28 — €42. 22 km, 25 min.",
      description: "Orly is 25 min from Asnières-sur-Seine.",
      routeDescription: "Via the ring road south then A6.",
      introduction: "Asnières-sur-Seine, 86,000 inhabitants, is a rapidly transforming town bordering the Seine and northern Paris. The Château d'Asnières (18th century, rocaille style), one of the rare examples of Rococo architecture in Île-de-France, is undergoing restoration. The Seine banks host guinguettes and promenades. The town attracts young, dynamic residents thanks to more accessible property prices than neighbouring Neuilly or Levallois. Metro 13 and Transilien L/J serve Paris in 15 min, but for Orly, the taxi via ring road and A6 (25 min) is far faster than metro/RER/Orlyval connections.",
      itineraire: "Your driver departs Asnieres-sur-Seine heading south towards the Boulevard Peripherique, entering via Porte de Clichy or Porte d'Asnieres. The route follows the Peripherique southbound, passing through Porte de Saint-Cloud, Porte de Versailles and Porte d'Italie before joining the A6 motorway towards Orly Airport. Allow 25 minutes in normal traffic conditions, extending to 40 minutes during peak hours when the Peripherique can slow around Porte de Versailles and the southern interchange with the A6. There are no tolls on this route. If the Peripherique is heavily congested, your driver may opt for an alternative via the A86 ring road south, passing through Rueil-Malmaison and Velizy to reach Orly.",
      conseils: "The Chateau d'Asnieres, an 18th-century Rococo gem and one of the rare examples of rocaille architecture in the Ile-de-France region, is currently undergoing restoration and promises to become a major cultural attraction. The Seine riverbanks in Asnieres offer pleasant guinguettes (traditional open-air riverside cafes and dance halls) and terraces during the summer months, making for a lovely farewell outing before a trip. Asnieres is in the midst of a major urban renewal, with new residential developments and improved public spaces attracting a younger, dynamic population. Orly serves domestic French destinations, southern Europe and North Africa. Specify your terminal (Orly 1, 2, 3 or 4) when booking. Metro 13 and Transilien L/J provide quick access to central Paris, but the connection to Orly via public transport requires multiple changes and over an hour of travel.",
      comparaisonTransport: "Metro 13 + connections → Orlyval = 1h, €12-15. Taxi €28-42: 25 min. 35 min saved.",
      faq: [
        { question: "How much does a taxi from Asnières-sur-Seine to Orly Airport cost?", answer: "€28-42 sedan, €58 van. Fixed fare." },
        { question: "How long is the taxi ride from Asnières-sur-Seine to Orly Airport?", answer: "25 min normally." },
        { question: "Which terminal at Orly will my driver drop me at?", answer: "Drop-off at exact terminal." },
        { question: "Can I book a return taxi from Orly Airport to Asnières-sur-Seine?", answer: "Same fare, flight tracking." },
        { question: "How do I book a taxi from Asnières-sur-Seine to Orly Airport?", answer: "Online 24/7." }
      ],
    }
  ),
  hdsNRoute(
    "taxi-asnieres-sur-seine-cdg", "Asnières-sur-Seine", "Aéroport CDG",
    48.9120, 2.2850, 49.0097, 2.5479,
    32, 25, "35 — 50 €", "aeroport",
    ["A86", "A1", "CDG", "Château d'Asnières", "Seine"],
    35, 50, 68, 45, "A86 + A1", "~4 €", "asnieres-sur-seine", "cdg",
    ["taxi-asnieres-sur-seine-orly", "taxi-colombes-cdg", "taxi-gennevilliers-cdg"],
    ["aeroport", "cdg", "roissy", "asnieres-sur-seine", "hauts-de-seine"],
    {
      metaTitle: "Taxi Asnières-sur-Seine → CDG | 32 km, dès 35 € | TaxiNeo",
      metaDescription: "Transfert taxi Asnières vers CDG. 25 min par A86/A1. 86 000 hab. Prix fixe 35-50 €.",
      heroTitle: "Taxi Asnières-sur-Seine → Aéroport CDG",
      heroSubtitle: "Transfert Asnières → CDG au prix fixe de 35 — 50 €. 32 km, 25 min.",
      description: "CDG est à 25 min d'Asnières via A86 et A1.",
      routeDescription: "Via A86 est puis A1 nord.",
      introduction: "Asnières-sur-Seine accède à CDG en 25 minutes par l'A86 et l'A1, un trajet direct contournant Paris. La ville de 86 000 habitants, en plein essor démographique et urbain, voit sa demande de transferts aéroportuaires croître. La proximité de l'A86 est un atout majeur. Le métro 13 vers Paris est rapide mais pour CDG, la correspondance via RER B prend 1h. Le taxi est le choix naturel des résidents voyageant en long-courrier.",
      itineraire: "Asnières → A86 est → A1 nord → CDG. 25 min hors pointe, 45 min en pointe. Péages ~4 € inclus.",
      conseils: "CDG pour vols long-courriers. L'A86 offre un accès rapide sans traverser Paris.",
      comparaisonTransport: "Métro + RER B = 1h, 12-15 €. Taxi 35-50 € : 25 min. Le taxi est 2,5× plus rapide.",
      faq: [
        { question: "Prix ?", answer: "35-50 € berline, 68 € van. Tarif fixe." },
        { question: "Durée ?", answer: "25 min normalement." },
        { question: "Terminal ?", answer: "Dépose au terminal exact." },
        { question: "Retour ?", answer: "Même tarif, suivi de vol." },
        { question: "Réservation ?", answer: "En ligne 24h/24." }
      ],
    },
    {
      metaTitle: "Taxi Asnières-sur-Seine → CDG | 32 km, from €35 | TaxiNeo",
      metaDescription: "Taxi from Asnières to CDG. 25 min via A86/A1. 86,000 residents. Fixed price €35-50.",
      heroTitle: "Taxi Asnières-sur-Seine → CDG Airport",
      heroSubtitle: "Your Asnières → CDG transfer at €35 — €50. 32 km, 25 min.",
      description: "CDG is 25 min from Asnières via A86 and A1.",
      routeDescription: "Via A86 east then A1 north.",
      introduction: "Asnieres-sur-Seine reaches CDG Airport in just 25 minutes via the A86 ring road and the A1 motorway, a direct route that bypasses central Paris entirely. With 86,000 residents, Asnieres is one of the most populous towns in the Hauts-de-Seine department and is experiencing significant demographic and urban growth, with new residential developments along the Seine attracting young professionals and families. This expanding population drives rising demand for airport transfers to CDG. The town's proximity to the A86 ring road is a significant geographical advantage, providing fast highway access to the northeastern suburbs and beyond to Roissy. The Chateau d'Asnieres, an exquisite 18th-century Rococo mansion, the lively Seine riverbanks with their summer guinguettes, and the nearby creative hub of the former Flins industrial zone give the town a distinctive character that blends heritage with modernity. Metro line 13 provides a fast connection to central Paris in 15 minutes, but for CDG the public transport route requires transferring to the RER B, a journey totalling roughly one hour with at least one connection and the well-known overcrowding issues of line 13 and the RER B. The taxi is the natural, stress-free choice for Asnieres residents heading to CDG for long-haul travel.",
      itineraire: "Your driver departs Asnieres-sur-Seine heading east to join the A86 ring road. The route follows the A86 through the northern suburbs, passing through Gennevilliers and the Saint-Denis area, before connecting to the A1 motorway heading north towards Roissy-CDG. Allow 25 minutes in normal traffic, but plan for up to 45 minutes during rush hour (7:30-9:30am, 5-7:30pm), particularly around the A86/A1 junction near Saint-Denis. Tolls are approximately 4 euros and are included in the fixed fare. Should the A86 be congested, your driver may use the Boulevard Peripherique north via Porte de la Chapelle to reach the A1 as an alternative.",
      conseils: "CDG is France's main gateway for long-haul international flights, serving as the Air France hub for intercontinental routes to the Americas, Asia, Africa and the Middle East. The A86 ring road provides fast, efficient access from Asnieres to CDG without the need to cross central Paris. Allow 2 to 3 hours before an intercontinental departure. Specify your terminal when booking: T1 for Star Alliance carriers, T2 for Air France and SkyTeam partners, T3 for budget airlines. Pick-up is available anywhere in Asnieres, including the Seine riverside area and the town centre near the Chateau d'Asnieres. CDG parking costs 25-40 euros per day, making the taxi a cost-effective alternative for trips of 2 or more days.",
      comparaisonTransport: "Metro + RER B = 1h, €12-15. Taxi €35-50: 25 min. Taxi is 2.5× faster.",
      faq: [
        { question: "How much does a taxi from Asnières-sur-Seine to CDG Airport cost?", answer: "€35-50 sedan, €68 van. Fixed fare." },
        { question: "How long is the taxi ride from Asnières-sur-Seine to CDG Airport?", answer: "25 min normally." },
        { question: "Which terminal at CDG will my driver drop me at?", answer: "Drop-off at exact terminal." },
        { question: "Can I book a return taxi from CDG Airport to Asnières-sur-Seine?", answer: "Same fare, flight tracking." },
        { question: "How do I book a taxi from Asnières-sur-Seine to CDG Airport?", answer: "Online 24/7." }
      ],
    }
  ),
];
