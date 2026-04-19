import type { Trajet } from "./trajets";

export const trajetsNiceAeroport: Trajet[] = [
  // ═══════════════════════════════════════════════
  // HUB NICE AÉROPORT — TRANSFERTS CÔTE D'AZUR
  // ═══════════════════════════════════════════════
  {
    slug: "taxi-nice-aeroport-monaco",
    from: "Aéroport Nice Côte d'Azur",
    to: "Monaco",
    fromLat: 43.6584,
    fromLng: 7.2159,
    toLat: 43.7384,
    toLng: 7.4246,
    distanceKm: 22,
    durationMin: 25,
    priceEstimate: "45 — 65 €",
    category: "aeroport",
    highlights: [
      "Principauté de Monaco",
      "Monte-Carlo Casino",
      "Port Hercule",
      "Vue sur la Méditerranée",
      "Promenade des Anglais au départ",
    ],
    prixMin: 45,
    prixMax: 65,
    prixVan: 80,
    dureeMax: 40,
    autoroute: "A8 puis sortie Monaco / Basse Corniche",
    peages: "~2 € (section Nice–Monaco)",
    departSlug: "nice-aeroport",
    arriveeSlug: "monaco",
    liensInternes: [
      "/trajet/taxi-nice-aeroport-menton",
      "/trajet/taxi-nice-aeroport-cannes",
      "/trajet/nice-monaco",
    ],
    tags: ["aéroport nice", "monaco", "monte-carlo", "transfert aéroport", "côte d'azur"],
    hub: "nice-aeroport",
    i18n: {
      fr: {
        metaTitle: "Taxi Aéroport Nice → Monaco | Transfert NCE | TaxiNeo",
        metaDescription:
          "Réservez votre taxi aéroport Nice–Monaco dès 45 €. Transfert direct en 25 min vers la Principauté. Chauffeur en zone d'arrivée, service 24h/24.",
        heroTitle: "Taxi Aéroport Nice — Monaco",
        heroSubtitle: "Transfert direct vers la Principauté de Monaco",
        description:
          "Transfert en taxi depuis l'aéroport Nice Côte d'Azur vers Monaco-Monte-Carlo. Prise en charge en zone d'arrivée, trajet confortable de 25 minutes.",
        routeDescription: "22 km — environ 25 minutes par l'A8 ou la Basse Corniche",
        introduction:
          "L'aéroport Nice Côte d'Azur, deuxième plateforme aéroportuaire de France, accueille chaque année des millions de voyageurs dont une part importante se rend à Monaco. La Principauté, située à seulement 22 kilomètres à l'est de l'aéroport, est une destination phare de la Riviera française. Que vous veniez pour le Grand Prix de Formule 1, les tables du Casino de Monte-Carlo, le Yacht Club de Monaco ou simplement pour profiter du cadre exceptionnel de ce micro-État, le taxi reste le moyen le plus pratique et rapide de rejoindre votre hôtel depuis le terminal. Le trajet longe la Promenade des Anglais puis la Baie des Anges avant de s'engager sur l'autoroute A8 en direction de l'Italie. En moins de 30 minutes, vous passez de la piste d'atterrissage au cœur de Monte-Carlo, sans aucun changement de transport ni attente inutile. Nos chauffeurs connaissent parfaitement les accès aux différents quartiers de Monaco — Fontvieille, La Condamine, Monte-Carlo, Le Larvotto — et vous déposent directement à l'adresse de votre choix.",
        itineraire:
          "Au départ de l'aéroport Nice Côte d'Azur (Terminal 1 ou Terminal 2), le chauffeur emprunte la Promenade des Anglais en direction de l'est, longeant la célèbre baie de Nice bordée de palmiers. À hauteur du port de Nice, le véhicule rejoint l'autoroute A8 (La Provençale) en direction de Monaco et de l'Italie. L'autoroute traverse plusieurs tunnels creusés dans les collines calcaires avant la sortie Monaco. L'alternative panoramique consiste à emprunter la Basse Corniche (M6098), route littorale qui traverse Villefranche-sur-Mer et sa rade magnifique, puis Beaulieu-sur-Mer et Cap-d'Ail avant d'entrer dans la Principauté. Cette route offre des vues spectaculaires sur la Méditerranée mais ajoute environ 10 à 15 minutes au trajet, surtout en été. La Moyenne Corniche via Èze Village constitue un troisième itinéraire offrant un panorama plongeant sur Monaco depuis les hauteurs.",
        conseils:
          "À votre arrivée à l'aéroport de Nice, votre chauffeur vous attend en zone d'arrivée du terminal concerné avec une pancarte à votre nom. Communiquez votre numéro de vol lors de la réservation pour que le chauffeur suive votre atterrissage en temps réel et s'adapte à tout retard éventuel. En période de Grand Prix de Monaco (fin mai), la circulation autour de la Principauté est très perturbée : prévoyez un temps de trajet plus long et réservez impérativement à l'avance. Les heures de pointe (8h-9h30 et 17h-19h) rallongent le trajet de 10 à 15 minutes. Si vous arrivez avec un vol tardif, pas d'inquiétude : notre service fonctionne 24h/24 et les trajets nocturnes sont souvent les plus fluides. Pensez à préciser votre adresse exacte à Monaco, car la Principauté compte de nombreuses adresses accessibles uniquement par certaines voies.",
        comparaisonTransport:
          "Le bus 110 (Nice Aéroport–Monaco) coûte 22 € et met environ 45 minutes avec les arrêts. L'hélicoptère Monacair relie l'aéroport à Monaco en 7 minutes pour environ 150 €. En taxi, le trajet coûte entre 45 € et 65 € pour un transfert porte-à-porte en 25 minutes, un excellent compromis entre rapidité, confort et prix.",
        faq: [
          {
            question: "Quel est le prix d'un taxi de l'aéroport de Nice à Monaco ?",
            answer:
              "Le tarif se situe entre 45 € et 65 € selon l'heure et le trafic. Le prix est fixé à l'avance lors de la réservation. Un supplément peut s'appliquer pour les trajets de nuit (19h-7h) ou les jours fériés.",
          },
          {
            question: "Combien de temps dure le transfert aéroport Nice–Monaco ?",
            answer:
              "Comptez environ 25 minutes par l'autoroute A8 en conditions normales. Aux heures de pointe, le trajet peut prendre jusqu'à 40 minutes. La nuit, le trajet se fait souvent en 20 minutes.",
          },
          {
            question: "Le chauffeur m'attend-il directement à l'aéroport ?",
            answer:
              "Oui, le chauffeur vous attend en zone d'arrivée du Terminal 1 ou Terminal 2 avec une pancarte à votre nom. Il suit votre vol en temps réel et s'adapte en cas de retard.",
          },
          {
            question: "Peut-on réserver un taxi pour un vol arrivant très tôt ou très tard ?",
            answer:
              "Absolument. Notre service fonctionne 24h/24, 7j/7. Les transferts nocturnes sont fréquents, notamment pour les vols en provenance d'Amérique du Nord ou du Moyen-Orient.",
          },
          {
            question: "Y a-t-il assez de place pour les bagages ?",
            answer:
              "Nos berlines accueillent confortablement 3 à 4 passagers avec leurs bagages. Pour les groupes plus importants ou des bagages volumineux, optez pour un van (tarif van à 80 €).",
          },
        ],
      },
      en: {
        metaTitle: "Taxi Nice Airport → Monaco | NCE Transfer | TaxiNeo",
        metaDescription:
          "Book your Nice Airport–Monaco taxi from €45. Direct 25-minute transfer to the Principality. Driver at arrivals, 24/7 service.",
        heroTitle: "Taxi Nice Airport — Monaco",
        heroSubtitle: "Direct transfer to the Principality of Monaco",
        description:
          "Taxi transfer from Nice Côte d'Azur Airport to Monaco-Monte-Carlo. Pick-up at the arrivals area, comfortable 25-minute ride.",
        routeDescription: "22 km — approximately 25 minutes via the A8 or the Basse Corniche",
        introduction:
          "Nice Côte d'Azur Airport, France's second busiest airport, welcomes millions of travellers each year, many of whom are heading to Monaco. The Principality sits just 22 kilometres east of the airport and is one of the French Riviera's premier destinations. Whether you are visiting for the Formula 1 Grand Prix, the Monte-Carlo Casino, the Monaco Yacht Show, or simply to enjoy the exceptional Mediterranean setting, a taxi is the most convenient way to reach your hotel from the terminal. The journey takes you along the iconic Promenade des Anglais and the Bay of Angels before joining the A8 motorway towards Italy. In under 30 minutes, you travel from the runway to the heart of Monte-Carlo with no transfers and no waiting. Our drivers know every neighbourhood in Monaco — Fontvieille, La Condamine, Monte-Carlo, Le Larvotto — and deliver you right to your door.",
        itineraire:
          "From Nice Côte d'Azur Airport (Terminal 1 or Terminal 2), the driver heads east along the Promenade des Anglais, passing the famous palm-lined Bay of Nice. Near Nice Port, the vehicle joins the A8 motorway (La Provençale) towards Monaco and Italy. The motorway passes through several tunnels carved into the limestone hills before the Monaco exit. The scenic alternative follows the Basse Corniche (M6098), a coastal road through Villefranche-sur-Mer with its stunning harbour, Beaulieu-sur-Mer and Cap-d'Ail before entering the Principality. This route offers spectacular Mediterranean views but adds about 10 to 15 minutes. The Middle Corniche via Èze Village provides a third option with sweeping panoramas over Monaco from above.",
        conseils:
          "Upon arrival at Nice Airport, your driver waits in the arrivals area of your terminal with a name board. Provide your flight number when booking so the driver can track your landing in real time and adjust for any delays. During the Monaco Grand Prix (late May), traffic around the Principality is heavily disrupted: allow extra time and book well in advance. Rush hours (8-9:30am and 5-7pm) add 10 to 15 minutes. For late-night arrivals, rest assured our service runs 24/7 and night-time journeys are often the smoothest. Be sure to specify your exact address in Monaco, as many locations are only accessible via specific roads.",
        comparaisonTransport:
          "The 110 bus (Nice Airport–Monaco) costs €22 and takes about 45 minutes with stops. The Monacair helicopter links the airport to Monaco in 7 minutes for around €150. By taxi, the journey costs €45-65 for a door-to-door transfer in 25 minutes — an excellent balance of speed, comfort and value.",
        faq: [
          {
            question: "What is the fare for a taxi from Nice Airport to Monaco?",
            answer:
              "The fare ranges from €45 to €65 depending on the time and traffic. The price is fixed at booking with no surprises. A night surcharge (7pm-7am) or public holiday supplement may apply.",
          },
          {
            question: "How long does the Nice Airport to Monaco transfer take?",
            answer:
              "Allow approximately 25 minutes via the A8 motorway under normal conditions. During rush hour, the journey can take up to 40 minutes. At night, it often takes just 20 minutes.",
          },
          {
            question: "Does the driver meet me at the airport?",
            answer:
              "Yes, the driver waits in the arrivals area of Terminal 1 or Terminal 2 with a sign bearing your name. They track your flight in real time and adjust for any delays.",
          },
          {
            question: "Can I book a taxi for a very early or very late flight?",
            answer:
              "Absolutely. Our service operates 24/7. Late-night and early-morning transfers are common, particularly for flights from North America or the Middle East.",
          },
          {
            question: "Is there enough room for luggage?",
            answer:
              "Our sedans comfortably accommodate 3-4 passengers with their luggage. For larger groups or bulky bags, choose a van (van rate at €80).",
          },
        ],
      },
    },
  },
  {
    slug: "taxi-nice-aeroport-cannes",
    from: "Aéroport Nice Côte d'Azur",
    to: "Cannes",
    fromLat: 43.6584,
    fromLng: 7.2159,
    toLat: 43.5528,
    toLng: 7.0174,
    distanceKm: 30,
    durationMin: 30,
    priceEstimate: "50 — 70 €",
    category: "aeroport",
    highlights: [
      "Festival de Cannes",
      "La Croisette",
      "Palais des Festivals",
      "Îles de Lérins",
      "Vieux-Port de Cannes",
    ],
    prixMin: 50,
    prixMax: 70,
    prixVan: 90,
    dureeMax: 50,
    autoroute: "A8 (La Provençale) sortie Cannes",
    peages: "~3 € (section Nice–Cannes)",
    departSlug: "nice-aeroport",
    arriveeSlug: "cannes",
    liensInternes: [
      "/trajet/taxi-nice-aeroport-antibes",
      "/trajet/taxi-nice-aeroport-saint-tropez",
      "/trajet/nice-cannes",
    ],
    tags: ["aéroport nice", "cannes", "festival", "croisette", "transfert aéroport", "côte d'azur"],
    hub: "nice-aeroport",
    i18n: {
      fr: {
        metaTitle: "Taxi Aéroport Nice → Cannes | Transfert NCE | TaxiNeo",
        metaDescription:
          "Réservez votre taxi aéroport Nice–Cannes dès 50 €. Transfert direct en 30 min vers La Croisette. Chauffeur à l'arrivée, service 24h/24.",
        heroTitle: "Taxi Aéroport Nice — Cannes",
        heroSubtitle: "Transfert rapide vers la capitale du cinéma",
        description:
          "Transfert en taxi depuis l'aéroport Nice Côte d'Azur vers Cannes et La Croisette. Prise en charge directe au terminal, trajet de 30 minutes par l'A8.",
        routeDescription: "30 km — environ 30 minutes par l'autoroute A8",
        introduction:
          "Cannes, mondialement connue pour son Festival International du Film, est l'une des destinations les plus glamour de la Côte d'Azur. Depuis l'aéroport Nice Côte d'Azur, le trajet en taxi vers Cannes est l'un des plus demandés de la Riviera. La ville séduit par sa célèbre Croisette, boulevard bordé de palaces et de plages de sable fin qui s'étend sur deux kilomètres le long de la Méditerranée. Le Palais des Festivals, le Vieux-Port, le quartier du Suquet avec ses ruelles médiévales et la vue sur les Îles de Lérins composent un cadre d'exception. Que vous veniez pour un congrès au Palais des Festivals, un séjour dans l'un des grands hôtels de La Croisette comme le Carlton ou le Martinez, ou simplement pour profiter du climat méditerranéen, le taxi depuis l'aéroport de Nice vous assure un transfert sans stress. Le chauffeur vous prend en charge dès la sortie du terminal et vous conduit directement à votre destination en empruntant l'autoroute A8, qui offre un trajet fluide et rapide le long du littoral azuréen.",
        itineraire:
          "Le départ s'effectue depuis le Terminal 1 ou le Terminal 2 de l'aéroport Nice Côte d'Azur. Le chauffeur rejoint rapidement l'autoroute A8 (La Provençale) en direction d'Aix-en-Provence et Cannes. L'autoroute longe les collines de l'arrière-pays niçois et traverse la commune d'Antibes en hauteur. La sortie 42 (Cannes-Mougins) ou la sortie 42bis (Cannes-La Bocca) permet de rejoindre le centre-ville en quelques minutes. L'itinéraire alternatif passe par le bord de mer via la route de la Bord de Mer (D6098) qui traverse Cagnes-sur-Mer, Villeneuve-Loubet et Antibes-Juan-les-Pins. Ce parcours côtier est plus pittoresque mais nettement plus long, surtout en été lorsque le trafic sur le littoral est dense. Pour les destinations situées à l'ouest de Cannes (La Bocca, Mandelieu), la sortie 40 est plus directe.",
        conseils:
          "Pendant le Festival de Cannes (mi-mai), la ville est extrêmement fréquentée et la circulation autour du Palais des Festivals et de La Croisette est souvent congestionnée. Réservez votre taxi plusieurs jours à l'avance et prévoyez 15 à 20 minutes supplémentaires. En dehors du Festival, le trajet est rapide et fluide. Si vous avez un vol matinal au départ de Nice, prévoyez un départ de Cannes 1h30 avant l'enregistrement pour être serein. Le péage autoroutier est d'environ 3 € pour le tronçon Nice–Cannes. Les week-ends d'été, privilégiez les départs avant 10h ou après 20h pour éviter les ralentissements sur l'A8. Nos chauffeurs peuvent vous déposer directement devant votre hôtel, au Palais des Festivals ou au Vieux-Port selon vos besoins.",
        comparaisonTransport:
          "Le bus 210 (Zou!) relie l'aéroport de Nice à Cannes en environ 50 minutes pour 22 €. Le TER depuis la gare Nice-Ville met 30 minutes pour environ 7 €, mais il faut d'abord rejoindre la gare depuis l'aéroport. En taxi, le transfert est direct et porte-à-porte en 30 minutes pour 50 à 70 €, idéal avec des bagages.",
        faq: [
          {
            question: "Quel est le prix d'un taxi de l'aéroport de Nice à Cannes ?",
            answer:
              "Le tarif est compris entre 50 € et 70 € selon le trafic et l'heure. Le prix est fixé à la réservation, sans compteur ni surprise. Un supplément nuit ou jour férié peut s'appliquer.",
          },
          {
            question: "Combien de temps faut-il pour aller de l'aéroport de Nice à Cannes ?",
            answer:
              "Le trajet dure environ 30 minutes par l'autoroute A8 en conditions normales. En période de Festival ou aux heures de pointe estivales, comptez jusqu'à 50 minutes.",
          },
          {
            question: "Peut-on réserver un taxi pour le Festival de Cannes ?",
            answer:
              "Oui, et nous vous recommandons vivement de réserver à l'avance pendant le Festival (mi-mai). La demande est très forte et les disponibilités limitées. Réservez au moins 48 heures avant votre arrivée.",
          },
          {
            question: "Le chauffeur peut-il faire un arrêt à Antibes en chemin ?",
            answer:
              "Oui, un arrêt à Antibes ou Juan-les-Pins est possible sur demande. Signalez-le lors de la réservation pour adapter le tarif et le temps de trajet.",
          },
          {
            question: "Comment réserver un taxi retour Cannes–aéroport de Nice ?",
            answer:
              "Vous pouvez réserver l'aller-retour en une seule fois sur notre plateforme. Pour le retour, indiquez l'heure de prise en charge souhaitée et le chauffeur viendra vous chercher à votre hôtel ou à l'adresse de votre choix.",
          },
        ],
      },
      en: {
        metaTitle: "Taxi Nice Airport → Cannes | NCE Transfer | TaxiNeo",
        metaDescription:
          "Book your Nice Airport–Cannes taxi from €50. Direct 30-minute transfer to La Croisette. Driver at arrivals, 24/7 service.",
        heroTitle: "Taxi Nice Airport — Cannes",
        heroSubtitle: "Quick transfer to the cinema capital of the world",
        description:
          "Taxi transfer from Nice Côte d'Azur Airport to Cannes and La Croisette. Direct pick-up at the terminal, 30-minute journey via the A8.",
        routeDescription: "30 km — approximately 30 minutes via the A8 motorway",
        introduction:
          "Cannes, world-famous for its International Film Festival, is one of the most glamorous destinations on the French Riviera. The taxi ride from Nice Côte d'Azur Airport to Cannes is one of the most popular transfers on the coast. The city charms visitors with its iconic Croisette boulevard, lined with grand hotels and fine sandy beaches stretching two kilometres along the Mediterranean. The Palais des Festivals, the Old Port, the medieval Suquet quarter and the views of the Lérins Islands create an exceptional setting. Whether you are attending a conference at the Palais, staying at a Croisette palace hotel like the Carlton or the Martinez, or simply enjoying the Mediterranean sunshine, a taxi from Nice Airport ensures a stress-free arrival. Your driver meets you at the terminal exit and takes you directly to your destination via the A8 motorway.",
        itineraire:
          "Departure is from Terminal 1 or Terminal 2 of Nice Côte d'Azur Airport. The driver quickly joins the A8 motorway (La Provençale) towards Aix-en-Provence and Cannes. The motorway passes through the hills of the Nice hinterland and crosses above the town of Antibes. Exit 42 (Cannes-Mougins) or exit 42bis (Cannes-La Bocca) leads to the city centre in just a few minutes. The alternative route follows the coastal road (D6098) through Cagnes-sur-Mer, Villeneuve-Loubet and Antibes-Juan-les-Pins. This seaside route is more scenic but considerably longer, especially in summer when coastal traffic is heavy. For destinations west of Cannes (La Bocca, Mandelieu), exit 40 is more direct.",
        conseils:
          "During the Cannes Film Festival (mid-May), the city is extremely busy and traffic around the Palais des Festivals and La Croisette is often gridlocked. Book your taxi several days in advance and allow 15 to 20 extra minutes. Outside the Festival period, the journey is quick and smooth. If you have an early morning flight from Nice, plan to leave Cannes 1.5 hours before check-in. The motorway toll is about €3 for the Nice-Cannes section. On summer weekends, depart before 10am or after 8pm to avoid A8 slowdowns. Our drivers can drop you directly at your hotel, the Palais des Festivals or the Old Port.",
        comparaisonTransport:
          "Bus 210 (Zou!) connects Nice Airport to Cannes in about 50 minutes for €22. The TER train from Nice-Ville station takes 30 minutes for about €7, but you first need to get from the airport to the station. By taxi, the transfer is direct and door-to-door in 30 minutes for €50-70, ideal with luggage.",
        faq: [
          {
            question: "What is the fare for a taxi from Nice Airport to Cannes?",
            answer:
              "The fare ranges from €50 to €70 depending on traffic and time of day. The price is fixed at booking with no meter or surprises. A night or public holiday surcharge may apply.",
          },
          {
            question: "How long does it take to get from Nice Airport to Cannes?",
            answer:
              "The journey takes about 30 minutes via the A8 motorway under normal conditions. During the Film Festival or summer rush hours, allow up to 50 minutes.",
          },
          {
            question: "Can I book a taxi for the Cannes Film Festival?",
            answer:
              "Yes, and we strongly recommend booking in advance during the Festival (mid-May). Demand is very high and availability limited. Book at least 48 hours before your arrival.",
          },
          {
            question: "Can the driver stop in Antibes on the way?",
            answer:
              "Yes, a stop in Antibes or Juan-les-Pins is possible on request. Mention it when booking to adjust the fare and travel time.",
          },
          {
            question: "How do I book a return taxi from Cannes to Nice Airport?",
            answer:
              "You can book a round trip in one go on our platform. For the return, specify your desired pick-up time and the driver will collect you from your hotel or chosen address.",
          },
        ],
      },
    },
  },
  {
    slug: "taxi-nice-aeroport-antibes",
    from: "Aéroport Nice Côte d'Azur",
    to: "Antibes",
    fromLat: 43.6584,
    fromLng: 7.2159,
    toLat: 43.5808,
    toLng: 7.1239,
    distanceKm: 20,
    durationMin: 20,
    priceEstimate: "35 — 50 €",
    category: "aeroport",
    highlights: [
      "Vieil Antibes",
      "Musée Picasso",
      "Cap d'Antibes",
      "Juan-les-Pins",
      "Port Vauban",
    ],
    prixMin: 35,
    prixMax: 50,
    prixVan: 65,
    dureeMax: 35,
    autoroute: "A8 sortie Antibes / route du bord de mer D6098",
    peages: "~2 € (section Nice–Antibes)",
    departSlug: "nice-aeroport",
    arriveeSlug: "antibes",
    liensInternes: [
      "/trajet/taxi-nice-aeroport-cannes",
      "/trajet/taxi-nice-aeroport-monaco",
      "/trajet/nice-antibes",
    ],
    tags: ["aéroport nice", "antibes", "juan-les-pins", "cap d'antibes", "transfert aéroport", "côte d'azur"],
    hub: "nice-aeroport",
    i18n: {
      fr: {
        metaTitle: "Taxi Aéroport Nice → Antibes | Transfert NCE | TaxiNeo",
        metaDescription:
          "Réservez votre taxi aéroport Nice–Antibes dès 35 €. Transfert direct en 20 min vers le Vieil Antibes ou Juan-les-Pins. Service 24h/24.",
        heroTitle: "Taxi Aéroport Nice — Antibes",
        heroSubtitle: "Transfert express vers la cité de Picasso",
        description:
          "Transfert en taxi depuis l'aéroport Nice Côte d'Azur vers Antibes, Juan-les-Pins et le Cap d'Antibes. Trajet rapide de 20 minutes.",
        routeDescription: "20 km — environ 20 minutes par l'A8 ou la route du bord de mer",
        introduction:
          "Antibes, ville d'art et d'histoire nichée entre Nice et Cannes, est l'une des destinations les plus attachantes de la Côte d'Azur. Sa vieille ville fortifiée par Vauban, son marché provençal quotidien, le musée Picasso installé dans le château Grimaldi et le plus grand port de plaisance d'Europe — Port Vauban — en font un lieu incontournable de la Riviera. Le Cap d'Antibes, presqu'île sauvage bordée de criques secrètes et de villas somptueuses, attire les amoureux de nature et de luxe discret. Juan-les-Pins, station balnéaire jumelle d'Antibes, est réputée pour ses plages de sable fin et son festival international de jazz. Depuis l'aéroport Nice Côte d'Azur, Antibes n'est qu'à 20 minutes en taxi, ce qui en fait l'un des transferts les plus courts et les plus économiques de la région. Votre chauffeur vous prend en charge à la sortie du terminal et vous conduit directement à votre hébergement, que ce soit dans le Vieil Antibes, au Cap d'Antibes ou à Juan-les-Pins.",
        itineraire:
          "Le chauffeur quitte l'aéroport Nice Côte d'Azur et rejoint l'autoroute A8 en direction d'Aix-en-Provence. La sortie 44 (Antibes) permet de rejoindre le centre-ville en 5 minutes via la route de Grasse. Pour le Vieil Antibes et le Port Vauban, le chauffeur descend vers le front de mer par le boulevard Albert 1er. L'itinéraire alternatif emprunte la route du bord de mer (D6098) en passant par Cagnes-sur-Mer et Villeneuve-Loubet, offrant de belles vues sur la baie des Anges. Ce parcours côtier est légèrement plus long mais très agréable hors des heures de pointe. Pour Juan-les-Pins, la sortie 44 de l'A8 est également la plus pratique, suivie d'un parcours de quelques minutes vers la station balnéaire. Le Cap d'Antibes se rejoint par le boulevard du Cap depuis le centre d'Antibes, en longeant les propriétés luxueuses et les pinèdes méditerranéennes.",
        conseils:
          "Le transfert aéroport Nice–Antibes est l'un des plus courts de la Côte d'Azur, ce qui en fait un excellent choix pour les voyageurs souhaitant un séjour au calme tout en restant proches de Nice et Cannes. En été, le trafic sur la D6098 (route du bord de mer) peut être dense entre 11h et 14h lorsque les vacanciers rejoignent les plages. L'autoroute A8 reste fluide en dehors des vendredis et dimanches soir. Si vous séjournez au Cap d'Antibes, précisez l'adresse exacte car certaines villas sont situées dans des chemins étroits nécessitant une bonne connaissance locale. Pour le festival Jazz à Juan (juillet), les rues de Juan-les-Pins sont piétonnes le soir : le chauffeur vous déposera au plus près de l'entrée. Nos chauffeurs peuvent également vous recommander les meilleurs restaurants du Vieil Antibes si vous le souhaitez.",
        comparaisonTransport:
          "Le bus Envibus (ligne 250) relie l'aéroport à Antibes en environ 35 minutes pour 1,50 €. Le TER depuis Nice-Ville met 15 minutes pour Antibes (5 €), mais il faut d'abord rejoindre la gare depuis l'aéroport. En taxi, vous bénéficiez d'un transfert direct porte-à-porte en 20 minutes pour 35 à 50 €, sans correspondance ni attente.",
        faq: [
          {
            question: "Quel est le prix d'un taxi de l'aéroport de Nice à Antibes ?",
            answer:
              "Le tarif varie entre 35 € et 50 € selon l'heure et les conditions de circulation. Le prix est fixé à l'avance, sans compteur. Un supplément nuit peut s'appliquer entre 19h et 7h.",
          },
          {
            question: "Peut-on être déposé directement au Cap d'Antibes ?",
            answer:
              "Oui, nos chauffeurs desservent toutes les adresses du Cap d'Antibes, y compris les hôtels de luxe comme l'Hôtel du Cap-Eden-Roc. Le tarif reste dans la même fourchette que pour le centre d'Antibes.",
          },
          {
            question: "Y a-t-il un taxi disponible pour Juan-les-Pins depuis l'aéroport ?",
            answer:
              "Bien sûr. Juan-les-Pins est à la même distance qu'Antibes depuis l'aéroport. Le tarif et le temps de trajet sont identiques. Précisez votre adresse exacte lors de la réservation.",
          },
          {
            question: "Comment réserver un retour Antibes–aéroport de Nice ?",
            answer:
              "Réservez le retour en même temps que l'aller sur notre plateforme. Indiquez l'heure de vol et nous calculerons l'heure de prise en charge idéale pour arriver sereinement à l'aéroport.",
          },
          {
            question: "Le taxi peut-il transporter du matériel de plongée ou des vélos ?",
            answer:
              "Pour du matériel volumineux comme des équipements de plongée ou des vélos, nous recommandons de réserver un van (tarif à 65 €). Signalez la nature de votre équipement lors de la réservation.",
          },
        ],
      },
      en: {
        metaTitle: "Taxi Nice Airport → Antibes | NCE Transfer | TaxiNeo",
        metaDescription:
          "Book your Nice Airport–Antibes taxi from €35. Direct 20-minute transfer to Old Antibes or Juan-les-Pins. 24/7 service.",
        heroTitle: "Taxi Nice Airport — Antibes",
        heroSubtitle: "Express transfer to the city of Picasso",
        description:
          "Taxi transfer from Nice Côte d'Azur Airport to Antibes, Juan-les-Pins and Cap d'Antibes. Quick 20-minute ride.",
        routeDescription: "20 km — approximately 20 minutes via the A8 or coastal road",
        introduction:
          "Antibes, a city of art and history nestled between Nice and Cannes, is one of the most charming destinations on the French Riviera. Its old town fortified by Vauban, the daily Provençal market, the Picasso Museum housed in the Grimaldi Castle, and Europe's largest pleasure port — Port Vauban — make it a must-visit on the Riviera. Cap d'Antibes, a wild peninsula lined with secret coves and sumptuous villas, attracts nature lovers and those seeking discreet luxury. Juan-les-Pins, Antibes' twin seaside resort, is renowned for its sandy beaches and international jazz festival. From Nice Côte d'Azur Airport, Antibes is just 20 minutes by taxi, making it one of the shortest and most affordable transfers in the region. Your driver picks you up at the terminal exit and takes you directly to your accommodation.",
        itineraire:
          "The driver leaves Nice Côte d'Azur Airport and joins the A8 motorway towards Aix-en-Provence. Exit 44 (Antibes) leads to the town centre in 5 minutes via the Route de Grasse. For Old Antibes and Port Vauban, the driver heads down to the waterfront along Boulevard Albert 1er. The alternative route follows the coastal road (D6098) through Cagnes-sur-Mer and Villeneuve-Loubet, offering lovely views of the Bay of Angels. This seaside route is slightly longer but very pleasant outside rush hours. For Juan-les-Pins, exit 44 from the A8 is also the most convenient. Cap d'Antibes is reached via Boulevard du Cap from Antibes centre, passing luxurious properties and Mediterranean pine groves.",
        conseils:
          "The Nice Airport to Antibes transfer is one of the shortest on the Côte d'Azur, making it an excellent choice for travellers seeking a peaceful stay while remaining close to Nice and Cannes. In summer, traffic on the D6098 coastal road can be heavy between 11am and 2pm when holidaymakers head to the beaches. The A8 motorway remains smooth outside Friday and Sunday evenings. If staying at Cap d'Antibes, provide the exact address as some villas are on narrow lanes requiring local knowledge. For Jazz à Juan festival (July), Juan-les-Pins streets are pedestrianised in the evening: the driver will drop you as close as possible to the entrance.",
        comparaisonTransport:
          "Envibus (line 250) connects the airport to Antibes in about 35 minutes for €1.50. The TER from Nice-Ville takes 15 minutes to Antibes (€5), but you first need to reach the station from the airport. By taxi, you get a direct door-to-door transfer in 20 minutes for €35-50, with no connections or waiting.",
        faq: [
          {
            question: "What is the fare for a taxi from Nice Airport to Antibes?",
            answer:
              "The fare ranges from €35 to €50 depending on the time and traffic conditions. The price is fixed in advance with no meter. A night surcharge may apply between 7pm and 7am.",
          },
          {
            question: "Can I be dropped off at Cap d'Antibes?",
            answer:
              "Yes, our drivers serve all addresses on Cap d'Antibes, including luxury hotels such as the Hôtel du Cap-Eden-Roc. The fare remains within the same range as for Antibes centre.",
          },
          {
            question: "Is a taxi available to Juan-les-Pins from the airport?",
            answer:
              "Of course. Juan-les-Pins is the same distance as Antibes from the airport. The fare and travel time are identical. Specify your exact address when booking.",
          },
          {
            question: "How do I book a return taxi from Antibes to Nice Airport?",
            answer:
              "Book the return at the same time as the outbound trip on our platform. Provide your flight time and we will calculate the ideal pick-up time to arrive at the airport with plenty of time.",
          },
          {
            question: "Can the taxi carry diving gear or bicycles?",
            answer:
              "For bulky equipment such as diving gear or bicycles, we recommend booking a van (rate at €65). Mention the type of equipment when booking.",
          },
        ],
      },
    },
  },
  {
    slug: "taxi-nice-aeroport-menton",
    from: "Aéroport Nice Côte d'Azur",
    to: "Menton",
    fromLat: 43.6584,
    fromLng: 7.2159,
    toLat: 43.7764,
    toLng: 7.5028,
    distanceKm: 35,
    durationMin: 35,
    priceEstimate: "55 — 75 €",
    category: "aeroport",
    highlights: [
      "Perle de la France",
      "Fête du Citron",
      "Jardins d'exception",
      "Frontière italienne",
      "Vieux Menton baroque",
    ],
    prixMin: 55,
    prixMax: 75,
    prixVan: 95,
    dureeMax: 50,
    autoroute: "A8 sortie 59 Menton / Moyenne Corniche (D6007)",
    peages: "~3 € (section Nice–Menton)",
    departSlug: "nice-aeroport",
    arriveeSlug: "menton",
    liensInternes: [
      "/trajet/taxi-nice-aeroport-monaco",
      "/trajet/nice-menton",
      "/trajet/taxi-nice-aeroport-cannes",
    ],
    tags: ["aéroport nice", "menton", "frontière italie", "fête du citron", "transfert aéroport", "riviera"],
    hub: "nice-aeroport",
    i18n: {
      fr: {
        metaTitle: "Taxi Aéroport Nice → Menton | Transfert NCE | TaxiNeo",
        metaDescription:
          "Réservez votre taxi aéroport Nice–Menton dès 55 €. Transfert en 35 min vers la Perle de la France. Chauffeur au terminal, service 24h/24.",
        heroTitle: "Taxi Aéroport Nice — Menton",
        heroSubtitle: "Transfert vers la Perle de la France, aux portes de l'Italie",
        description:
          "Transfert en taxi depuis l'aéroport Nice Côte d'Azur vers Menton, dernière ville française avant la frontière italienne. Trajet de 35 minutes le long de la Riviera.",
        routeDescription: "35 km — environ 35 minutes par l'A8 ou la Moyenne Corniche",
        introduction:
          "Menton, surnommée la « Perle de la France », est la dernière commune française avant la frontière italienne. Cette ville au microclimat exceptionnel — le plus doux de toute la Côte d'Azur — est un jardin à ciel ouvert, célèbre dans le monde entier pour sa Fête du Citron qui attire chaque année plus de 200 000 visiteurs en février et mars. Le Vieux-Menton, avec ses façades pastel aux teintes ocre et rose, sa basilique Saint-Michel Archange et ses ruelles en escalier, offre une atmosphère italianisante unique en France. Depuis l'aéroport Nice Côte d'Azur, le trajet en taxi vers Menton longe l'une des côtes les plus spectaculaires de Méditerranée. Vous traversez la baie de Nice le long de la Promenade des Anglais, puis le véhicule s'engage sur l'autoroute A8 ou emprunte les légendaires routes des Corniches qui surplombent la mer. Le passage par Monaco ajoute un éclat particulier à ce trajet. En 35 minutes, vous passez du terminal aéroportuaire aux ruelles parfumées de Menton, sans stress ni correspondance. Nos chauffeurs connaissent les moindres recoins de la ville et vous déposent à l'adresse exacte de votre hébergement, que ce soit en centre-ville, sur le front de mer ou dans les hauteurs de Garavan.",
        itineraire:
          "Au départ de l'aéroport Nice Côte d'Azur, le chauffeur emprunte la voie rapide en direction de l'est et rejoint l'autoroute A8 (La Provençale). L'autoroute traverse les collines de Nice en altitude, passe au-dessus de la rade de Villefranche-sur-Mer par une succession de tunnels et de viaducs, contourne Monaco par le tunnel de Monaco-Monte-Carlo, puis franchit Roquebrune-Cap-Martin avant la sortie 59 Menton. De là, la descente vers le centre-ville se fait en 5 minutes. L'alternative panoramique emprunte la Moyenne Corniche (D6007) : le chauffeur quitte l'A8 à la sortie Nice-Est et s'engage sur cette route mythique qui serpente à flanc de falaise. Vous passez par Èze Village, perché à 429 mètres au-dessus de la mer avec un panorama à couper le souffle, puis par Beausoleil qui surplombe Monaco. La Basse Corniche (M6098) est un troisième itinéraire qui longe le littoral au plus près, traversant Villefranche-sur-Mer, Beaulieu-sur-Mer et Cap-d'Ail. Chaque itinéraire offre une expérience différente et nos chauffeurs s'adaptent à vos préférences.",
        conseils:
          "Pour les voyageurs arrivant à l'aéroport de Nice avec une destination finale à Menton, le taxi est de loin la solution la plus pratique, surtout si vous avez des bagages. Communiquez votre numéro de vol lors de la réservation afin que le chauffeur suive votre atterrissage et vous attende sans stress en zone d'arrivée. Si vous venez pour la Fête du Citron (février-mars), réservez votre taxi au moins une semaine à l'avance car la demande est exceptionnelle. Les jours de marché à Menton (mardi au dimanche matin), le trafic autour des Halles est dense et le chauffeur pourra adapter son itinéraire. En été, le trafic sur la Basse Corniche et dans la traversée de Monaco peut allonger le trajet de 15 minutes : l'autoroute A8 est alors à privilégier. Si vous souhaitez profiter de la vue, demandez au chauffeur d'emprunter la Moyenne Corniche avec un arrêt photo à Èze — la plupart acceptent volontiers moyennant un léger supplément de temps.",
        comparaisonTransport:
          "Le bus 110 (Nice Aéroport–Menton) met environ 1h15 avec les arrêts pour 22 €. Le TER Nice–Menton coûte environ 5,60 € en 35 minutes, mais il faut d'abord rejoindre la gare Nice-Ville depuis l'aéroport. En taxi, le transfert direct porte-à-porte coûte entre 55 € et 75 € en 35 minutes, avec prise en charge de vos bagages et dépose exacte à votre adresse.",
        faq: [
          {
            question: "Quel est le tarif d'un taxi de l'aéroport de Nice à Menton ?",
            answer:
              "Le prix varie entre 55 € et 75 € selon l'heure et le trafic. Il est fixé à l'avance lors de la réservation. Un supplément peut s'appliquer la nuit (19h-7h) et les jours fériés.",
          },
          {
            question: "Le taxi passe-t-il par Monaco pour aller à Menton ?",
            answer:
              "Par l'autoroute A8, le trajet contourne Monaco par un tunnel. Si vous souhaitez traverser Monaco, le chauffeur peut emprunter la Basse Corniche, ce qui ajoute environ 10 minutes au trajet.",
          },
          {
            question: "Peut-on s'arrêter à Èze Village en chemin ?",
            answer:
              "Oui, un arrêt à Èze Village est possible sur demande, notamment si vous empruntez la Moyenne Corniche. Le panorama depuis le jardin exotique est l'un des plus beaux de la Riviera. Signalez-le lors de la réservation.",
          },
          {
            question: "Y a-t-il des taxis disponibles pour les vols de nuit ?",
            answer:
              "Oui, notre service fonctionne 24h/24, 7j/7. Les transferts nocturnes vers Menton sont courants pour les voyageurs arrivant de vols long-courriers. Le trajet de nuit est souvent plus rapide grâce à la fluidité du trafic.",
          },
          {
            question: "Peut-on continuer jusqu'à Vintimille en Italie ?",
            answer:
              "Oui, nos chauffeurs peuvent vous conduire jusqu'à Vintimille (Ventimiglia), première ville italienne à 10 km de Menton. Un supplément sera appliqué pour la traversée de la frontière. Mentionnez-le lors de votre réservation.",
          },
        ],
      },
      en: {
        metaTitle: "Taxi Nice Airport → Menton | NCE Transfer | TaxiNeo",
        metaDescription:
          "Book your Nice Airport–Menton taxi from €55. 35-minute transfer to the Pearl of France. Driver at terminal, 24/7 service.",
        heroTitle: "Taxi Nice Airport — Menton",
        heroSubtitle: "Transfer to the Pearl of France, at the gateway to Italy",
        description:
          "Taxi transfer from Nice Côte d'Azur Airport to Menton, the last French town before the Italian border. 35-minute journey along the Riviera.",
        routeDescription: "35 km — approximately 35 minutes via the A8 or Moyenne Corniche",
        introduction:
          "Menton, nicknamed the 'Pearl of France', is the last French town before the Italian border. This city enjoys the mildest microclimate on the entire Côte d'Azur and is famous worldwide for its Lemon Festival, which attracts over 200,000 visitors each February and March. Old Menton, with its pastel ochre and pink facades, the Basilica of Saint Michael the Archangel and its stepped alleyways, offers a uniquely Italianate atmosphere. From Nice Côte d'Azur Airport, the taxi ride to Menton follows one of the Mediterranean's most spectacular coastlines. You pass along the Promenade des Anglais, then the vehicle takes the A8 motorway or the legendary Corniche roads overlooking the sea, passing through Monaco along the way. In 35 minutes, you travel from the airport terminal to the fragrant lanes of Menton with no stress and no connections.",
        itineraire:
          "From Nice Côte d'Azur Airport, the driver takes the expressway eastbound and joins the A8 motorway (La Provençale). The motorway crosses the Nice hills at altitude, passes above the Villefranche-sur-Mer harbour through a series of tunnels and viaducts, bypasses Monaco via the Monte-Carlo tunnel, then crosses Roquebrune-Cap-Martin before exit 59 Menton. From there, it is a 5-minute drive down to the town centre. The scenic alternative follows the Moyenne Corniche (D6007): the driver leaves the A8 at the Nice-Est exit and takes this legendary road clinging to the cliffs. You pass through Èze Village, perched 429 metres above the sea with breathtaking panoramas, then Beausoleil overlooking Monaco. The Basse Corniche (M6098) is a third option hugging the coastline through Villefranche-sur-Mer, Beaulieu-sur-Mer and Cap-d'Ail.",
        conseils:
          "For travellers arriving at Nice Airport bound for Menton, a taxi is by far the most practical option, especially with luggage. Provide your flight number when booking so the driver can track your landing and wait stress-free in the arrivals area. If visiting for the Lemon Festival (February-March), book at least a week in advance as demand is exceptional. On Menton market days (Tuesday to Sunday mornings), traffic around the Halles is heavy and the driver will adjust the route accordingly. In summer, traffic on the Basse Corniche and through Monaco can add 15 minutes: the A8 motorway is preferable. If you want to enjoy the views, ask for the Moyenne Corniche with a photo stop at Èze.",
        comparaisonTransport:
          "Bus 110 (Nice Airport–Menton) takes about 1h15 with stops for €22. The TER Nice–Menton costs about €5.60 and takes 35 minutes, but you first need to get from the airport to Nice-Ville station. By taxi, the direct door-to-door transfer costs €55-75 in 35 minutes, with luggage handled and drop-off at your exact address.",
        faq: [
          {
            question: "What is the fare for a taxi from Nice Airport to Menton?",
            answer:
              "The price ranges from €55 to €75 depending on the time and traffic. It is fixed at booking. A surcharge may apply at night (7pm-7am) and on public holidays.",
          },
          {
            question: "Does the taxi go through Monaco on the way to Menton?",
            answer:
              "Via the A8 motorway, the route bypasses Monaco through a tunnel. If you wish to drive through Monaco, the driver can take the Basse Corniche, adding about 10 minutes to the journey.",
          },
          {
            question: "Can we stop at Èze Village on the way?",
            answer:
              "Yes, a stop at Èze Village is possible on request, especially if you take the Moyenne Corniche. The panorama from the exotic garden is one of the finest on the Riviera. Mention it when booking.",
          },
          {
            question: "Are taxis available for late-night flights?",
            answer:
              "Yes, our service operates 24/7. Night-time transfers to Menton are common for travellers arriving on long-haul flights. Night journeys are often faster thanks to lighter traffic.",
          },
          {
            question: "Can we continue to Ventimiglia in Italy?",
            answer:
              "Yes, our drivers can take you to Ventimiglia, the first Italian town 10 km from Menton. A supplement applies for the border crossing. Mention it when booking.",
          },
        ],
      },
    },
  },
  {
    slug: "taxi-nice-aeroport-saint-tropez",
    from: "Aéroport Nice Côte d'Azur",
    to: "Saint-Tropez",
    fromLat: 43.6584,
    fromLng: 7.2159,
    toLat: 43.2727,
    toLng: 6.6407,
    distanceKm: 110,
    durationMin: 90,
    priceEstimate: "160 — 210 €",
    category: "aeroport",
    highlights: [
      "Village mythique",
      "Port de Saint-Tropez",
      "Plage de Pampelonne",
      "Citadelle",
      "Golfe de Saint-Tropez",
    ],
    prixMin: 160,
    prixMax: 210,
    prixVan: 260,
    dureeMax: 150,
    autoroute: "A8 puis D25 / D558 via Le Muy ou Fréjus",
    peages: "~10 € (section Nice–Le Muy)",
    departSlug: "nice-aeroport",
    arriveeSlug: "saint-tropez",
    liensInternes: [
      "/trajet/taxi-nice-aeroport-cannes",
      "/trajet/nice-saint-tropez",
      "/trajet/taxi-nice-aeroport-antibes",
    ],
    tags: ["aéroport nice", "saint-tropez", "pampelonne", "golfe", "transfert aéroport", "presqu'île"],
    hub: "nice-aeroport",
    i18n: {
      fr: {
        metaTitle: "Taxi Aéroport Nice → Saint-Tropez | Transfert NCE | TaxiNeo",
        metaDescription:
          "Réservez votre taxi aéroport Nice–Saint-Tropez dès 160 €. Transfert en 1h30 vers le village mythique de la Côte d'Azur. Service porte-à-porte 24h/24.",
        heroTitle: "Taxi Aéroport Nice — Saint-Tropez",
        heroSubtitle: "Transfert vers le village le plus mythique de la Riviera",
        description:
          "Transfert en taxi depuis l'aéroport Nice Côte d'Azur vers Saint-Tropez. 110 km de trajet à travers l'arrière-pays varois et le golfe de Saint-Tropez.",
        routeDescription: "110 km — environ 1h30 par l'A8 puis les routes départementales varoises",
        introduction:
          "Saint-Tropez, petit village de pêcheurs devenu symbole mondial du glamour et de l'art de vivre méditerranéen, est l'une des destinations les plus emblématiques de la Côte d'Azur. Rendu célèbre par Brigitte Bardot dans les années 1950, ce port aux maisons ocre et aux volets colorés attire chaque été des visiteurs du monde entier. La place des Lices avec ses joueurs de pétanque, le Vieux-Port bordé de yachts somptueux, la Citadelle offrant une vue panoramique sur le golfe, et la mythique plage de Pampelonne avec ses clubs de plage légendaires — Nikki Beach, Club 55, Tahiti Beach — composent un décor unique au monde. Depuis l'aéroport Nice Côte d'Azur, Saint-Tropez est accessible en environ 1h30 en taxi. Le trajet emprunte l'autoroute A8 à travers le massif de l'Estérel aux roches rouges spectaculaires, puis les routes départementales varoises qui serpentent jusqu'à la presqu'île de Saint-Tropez. C'est un trajet plus long que les autres transferts depuis Nice, mais nos chauffeurs le rendent agréable et confortable, vous permettant de vous détendre après votre vol tout en découvrant les paysages variés de la Provence maritime.",
        itineraire:
          "Le chauffeur quitte l'aéroport Nice Côte d'Azur et rejoint l'autoroute A8 en direction d'Aix-en-Provence. L'autoroute traverse l'arrière-pays niçois, passe au-dessus de Cannes et longe le massif de l'Estérel dont les falaises de porphyre rouge contrastent avec le bleu intense de la Méditerranée. Deux itinéraires principaux s'offrent ensuite. Le premier, par la sortie 36 (Le Muy), emprunte la D25 puis la D558 à travers les vignobles de Provence et les villages de Sainte-Maxime et du Plan de la Tour avant d'arriver à Saint-Tropez par la route côtière du golfe. Le second passe par la sortie 38 (Fréjus/Saint-Raphaël) et longe la côte par la D98A via Sainte-Maxime. En été, l'accès à la presqu'île de Saint-Tropez est souvent embouteillé, surtout le samedi. Le chauffeur choisira l'itinéraire le plus fluide en fonction du trafic en temps réel. La dernière portion de route longe le magnifique golfe de Saint-Tropez avec des vues sur les collines couvertes de pins parasols.",
        conseils:
          "Le trajet aéroport Nice–Saint-Tropez est le plus long de notre gamme de transferts depuis Nice, mais aussi l'un des plus beaux. En été (juillet-août), la presqu'île de Saint-Tropez connaît des embouteillages importants, surtout les samedis de changement de location. Prévoyez jusqu'à 2h30 de trajet les pires jours. Pour éviter les bouchons, un départ tôt le matin (avant 9h) ou en soirée (après 19h) est fortement recommandé. Le péage autoroutier s'élève à environ 10 € pour la section Nice–Le Muy. Si vous séjournez à Ramatuelle ou à la plage de Pampelonne, précisez votre adresse exacte car l'accès peut varier selon les établissements. Pour les clients exigeants, nous proposons des véhicules haut de gamme (Mercedes Classe S, BMW Série 7) qui rendent ce long trajet encore plus confortable. Pensez à réserver au moins 72 heures à l'avance en haute saison pour garantir la disponibilité.",
        comparaisonTransport:
          "Il n'existe pas de liaison ferroviaire directe vers Saint-Tropez. Le bus Zou! 7801 depuis Saint-Raphaël met environ 1h30 pour 3 €, mais il faut d'abord rejoindre Saint-Raphaël. Des navettes maritimes relient Sainte-Maxime à Saint-Tropez en 15 minutes (environ 15 €). En taxi depuis Nice, le transfert porte-à-porte en 1h30 pour 160 à 210 € reste la solution la plus directe et confortable, surtout avec des bagages.",
        faq: [
          {
            question: "Quel est le prix d'un taxi de l'aéroport de Nice à Saint-Tropez ?",
            answer:
              "Le tarif est compris entre 160 € et 210 € selon l'heure, le trafic et la saison. Le prix est fixé à la réservation, sans surprise. En haute saison (juillet-août), un supplément peut s'appliquer en raison de l'allongement du temps de trajet.",
          },
          {
            question: "Combien de temps dure le trajet Nice–Saint-Tropez en été ?",
            answer:
              "En conditions normales, comptez 1h30. En été, surtout les samedis, le trajet peut atteindre 2h à 2h30 en raison des embouteillages sur la presqu'île. Un départ avant 9h ou après 19h permet généralement d'éviter le pire.",
          },
          {
            question: "Le taxi peut-il me déposer à Pampelonne ou Ramatuelle ?",
            answer:
              "Oui, nos chauffeurs desservent toutes les adresses de la presqu'île : Saint-Tropez centre, la plage de Pampelonne, Ramatuelle, Gassin et les Parcs de Saint-Tropez. Le tarif reste dans la même fourchette.",
          },
          {
            question: "Existe-t-il un transfert en hélicoptère comme alternative ?",
            answer:
              "Oui, des compagnies proposent des vols en hélicoptère Nice–Saint-Tropez en 20 minutes pour environ 800-1 200 € par trajet. Le taxi reste une alternative beaucoup plus économique tout en offrant un excellent confort.",
          },
          {
            question: "Peut-on faire un arrêt en route, par exemple à Fréjus ou Sainte-Maxime ?",
            answer:
              "Oui, un ou deux arrêts en chemin sont possibles sur demande. Que ce soit pour visiter Fréjus, déjeuner à Sainte-Maxime ou admirer les vues de l'Estérel, signalez-le lors de la réservation pour adapter le tarif.",
          },
        ],
      },
      en: {
        metaTitle: "Taxi Nice Airport → Saint-Tropez | NCE Transfer | TaxiNeo",
        metaDescription:
          "Book your Nice Airport–Saint-Tropez taxi from €160. 90-minute transfer to the legendary Riviera village. Door-to-door service 24/7.",
        heroTitle: "Taxi Nice Airport — Saint-Tropez",
        heroSubtitle: "Transfer to the most legendary village on the Riviera",
        description:
          "Taxi transfer from Nice Côte d'Azur Airport to Saint-Tropez. 110 km through the Var hinterland and the Gulf of Saint-Tropez.",
        routeDescription: "110 km — approximately 90 minutes via the A8 then Var departmental roads",
        introduction:
          "Saint-Tropez, a small fishing village that became a global symbol of glamour and Mediterranean joie de vivre, is one of the most iconic destinations on the French Riviera. Made famous by Brigitte Bardot in the 1950s, this port town with ochre houses and colourful shutters draws visitors from around the world every summer. The Place des Lices with its pétanque players, the Old Port lined with magnificent yachts, the Citadel offering panoramic views of the gulf, and the legendary Pampelonne Beach with its famous beach clubs — Nikki Beach, Club 55, Tahiti Beach — create a setting unlike anywhere else on earth. From Nice Côte d'Azur Airport, Saint-Tropez is about 90 minutes by taxi. The journey follows the A8 motorway through the spectacular red-rock Estérel massif, then winds along Var departmental roads to the Saint-Tropez peninsula. Our drivers make this longer journey comfortable and relaxing, allowing you to unwind after your flight while discovering the varied landscapes of maritime Provence.",
        itineraire:
          "The driver leaves Nice Côte d'Azur Airport and joins the A8 motorway towards Aix-en-Provence. The motorway crosses the Nice hinterland, passes above Cannes and runs alongside the Estérel massif, where red porphyry cliffs contrast dramatically with the deep blue Mediterranean. Two main routes are then available. The first, via exit 36 (Le Muy), takes the D25 then D558 through Provence vineyards and the villages of Sainte-Maxime and Le Plan de la Tour before reaching Saint-Tropez via the gulf coastal road. The second uses exit 38 (Fréjus/Saint-Raphaël) and follows the coast via the D98A through Sainte-Maxime. In summer, access to the Saint-Tropez peninsula is often congested, especially on Saturdays. The driver will choose the smoothest route based on real-time traffic. The final stretch runs along the magnificent Gulf of Saint-Tropez with views of pine-covered hills.",
        conseils:
          "The Nice Airport to Saint-Tropez transfer is the longest in our Nice transfer range, but also one of the most beautiful. In summer (July-August), the Saint-Tropez peninsula experiences major traffic jams, especially on Saturday changeover days. Allow up to 2.5 hours on the worst days. To avoid congestion, an early morning departure (before 9am) or evening (after 7pm) is strongly recommended. The motorway toll is about €10 for the Nice-Le Muy section. If staying in Ramatuelle or at Pampelonne Beach, specify your exact address as access varies by establishment. For discerning clients, we offer premium vehicles (Mercedes S-Class, BMW 7 Series). Book at least 72 hours in advance during peak season to ensure availability.",
        comparaisonTransport:
          "There is no direct rail link to Saint-Tropez. The Zou! 7801 bus from Saint-Raphaël takes about 1.5 hours for €3, but you must first reach Saint-Raphaël. Maritime shuttles connect Sainte-Maxime to Saint-Tropez in 15 minutes (about €15). By taxi from Nice, the door-to-door transfer in 90 minutes for €160-210 remains the most direct and comfortable option, especially with luggage.",
        faq: [
          {
            question: "What is the fare for a taxi from Nice Airport to Saint-Tropez?",
            answer:
              "The fare ranges from €160 to €210 depending on the time, traffic and season. The price is fixed at booking with no surprises. In peak season (July-August), a supplement may apply due to extended travel time.",
          },
          {
            question: "How long does the Nice to Saint-Tropez journey take in summer?",
            answer:
              "Under normal conditions, allow 90 minutes. In summer, especially on Saturdays, the journey can take 2 to 2.5 hours due to peninsula traffic. Departing before 9am or after 7pm usually avoids the worst.",
          },
          {
            question: "Can the taxi drop me at Pampelonne or Ramatuelle?",
            answer:
              "Yes, our drivers serve all addresses on the peninsula: Saint-Tropez centre, Pampelonne Beach, Ramatuelle, Gassin and the Parks of Saint-Tropez. The fare remains within the same range.",
          },
          {
            question: "Is there a helicopter transfer as an alternative?",
            answer:
              "Yes, companies offer helicopter flights from Nice to Saint-Tropez in 20 minutes for about €800-1,200 per trip. A taxi remains a much more affordable alternative while offering excellent comfort.",
          },
          {
            question: "Can we make a stop along the way?",
            answer:
              "Yes, one or two stops en route are possible on request. Whether to visit Fréjus, have lunch in Sainte-Maxime, or admire the Estérel views, mention it when booking to adjust the fare.",
          },
        ],
      },
    },
  },
];
