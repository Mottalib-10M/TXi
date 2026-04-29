export interface TarifFAQ {
  question: string;
  answer: string;
}

export interface TarifGridRow {
  label: string;
  priceDay: string;
  priceNight: string;
}

export interface TarifI18n {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  description: string;
  grid: TarifGridRow[];
  faq: TarifFAQ[];
  introduction?: string;
  conseils?: string;
  bonASavoir?: string;
}

export interface Tarif {
  slug: string;
  title: string;
  type: "aeroport" | "gare" | "ville" | "departement" | "special";
  lat: number;
  lng: number;
  i18n: {
    fr: TarifI18n;
    en: TarifI18n;
  };
}

export const tarifs: Tarif[] = [
  {
    slug: "tarif-taxi-paris",
    title: "Tarif Taxi Paris",
    type: "ville",
    lat: 48.8566,
    lng: 2.3522,
    i18n: {
      fr: {
        metaTitle: "Tarif Taxi Paris 2026 : prix, barème et forfaits | TaxiNeo",
        metaDescription: "Découvrez les tarifs taxi à Paris en 2026. Barème officiel, forfaits aéroport CDG et Orly, tarifs jour/nuit et astuces pour payer le juste prix avec TaxiNeo.",
        heroTitle: "Tarif Taxi Paris",
        heroSubtitle: "Tous les tarifs taxi à Paris en 2026 : barème officiel, forfaits et prix fixes TaxiNeo.",
        description: "Paris est la ville où les tarifs taxi sont les plus réglementés de France. Le compteur horokilométrique applique 4 tarifs (A, B, C, D) selon l'heure, le jour et la zone. Avec TaxiNeo, profitez de prix fixes sans compteur pour tous vos trajets parisiens.",
        grid: [
          { label: "Course courte (5 km)", priceDay: "12 — 18 €", priceNight: "15 — 22 €" },
          { label: "Traversée Paris (10 km)", priceDay: "20 — 30 €", priceNight: "25 — 35 €" },
          { label: "Paris → CDG", priceDay: "50 — 62 €", priceNight: "58 — 71 €" },
          { label: "Paris → Orly", priceDay: "36 — 45 €", priceNight: "41 — 52 €" },
          { label: "Paris → La Défense", priceDay: "25 — 35 €", priceNight: "30 — 40 €" },
          { label: "Paris → Versailles", priceDay: "40 — 55 €", priceNight: "46 — 63 €" },
        ],
        faq: [
          { question: "Quel est le tarif minimum d'un taxi à Paris ?", answer: "La prise en charge minimale est de 7,30 € en 2026. C'est le montant minimum facturé, même pour une course très courte." },
          { question: "Comment est calculé le prix d'un taxi parisien ?", answer: "Le prix combine une prise en charge fixe (2,60 €), un tarif au kilomètre (1,14 à 1,78 €/km selon le tarif) et un tarif horaire d'attente (38,96 €/h)." },
          { question: "Les tarifs taxi Paris sont-ils les mêmes le dimanche ?", answer: "Non, le dimanche et les jours fériés appliquent le tarif D, le plus élevé. Avec TaxiNeo, le prix fixe ne change pas le dimanche." },
          { question: "Existe-t-il des forfaits taxi Paris ?", answer: "Oui, les forfaits aéroport sont obligatoires depuis 2016. TaxiNeo propose des forfaits pour tous les trajets, pas seulement les aéroports." },
        ],
        introduction: "Paris applique depuis 2016 une réglementation stricte des tarifs taxi, supervisée par la préfecture de police. Le compteur horokilométrique affiche quatre tarifs distincts : A (jour, Paris intra-muros), B (nuit ou banlieue de jour), C (nuit en banlieue) et D (dimanche et jours fériés). La prise en charge est fixée à 2,60 € et le montant minimum d'une course est de 7,30 €. Les forfaits aéroports CDG et Orly sont obligatoires pour tout trajet entre Paris et ces deux plateformes. La capitale compte environ 18 000 taxis autorisés, reconnaissables à leur lumineux sur le toit. Avec TaxiNeo, vous bénéficiez d'un prix fixe annoncé à l'avance, sans compteur ni mauvaise surprise, quel que soit le trafic ou l'itinéraire emprunté.",
        conseils: "Pour économiser sur vos courses taxi à Paris, privilégiez les trajets en tarif A, appliqué en journée du lundi au samedi dans Paris intra-muros. Évitez les heures de pointe (8h-10h et 17h-19h) où les embouteillages font grimper le montant au compteur à cause du tarif horaire d'attente. Les forfaits aéroports sont souvent plus avantageux que le compteur, surtout en période de trafic dense. Pensez à réserver à l'avance sur TaxiNeo pour obtenir un prix fixe garanti. Pour les trajets réguliers, les stations taxi officielles évitent la prise en charge majorée des courses commandées par téléphone. Le métro et le RER restent imbattables pour les courts trajets, mais au-delà de deux passagers, le taxi devient compétitif.",
        bonASavoir: "Tous les taxis parisiens acceptent obligatoirement la carte bancaire depuis 2019. Le pourboire n'est pas obligatoire mais un arrondi à l'euro supérieur est apprécié. Chaque taxi peut transporter jusqu'à 3 bagages en soute sans supplément ; au-delà, un supplément de 2 € par bagage peut être facturé. Les sièges enfant ne sont pas fournis par défaut, pensez à en faire la demande lors de la réservation. En cas de litige, notez le numéro de licence affiché sur le tableau de bord.",
      },
      en: {
        metaTitle: "Paris Taxi Fares 2026: prices, rates & fixed fares | TaxiNeo",
        metaDescription: "Discover Paris taxi fares in 2026. Official rates, CDG and Orly airport flat rates, day/night pricing and expert tips for paying the right price with TaxiNeo.",
        heroTitle: "Paris Taxi Fares",
        heroSubtitle: "All Paris taxi fares in 2026: official rates, flat rates and TaxiNeo fixed prices.",
        description: "Paris has the most regulated taxi fares in France. The meter applies 4 rates (A, B, C, D) depending on time, day and zone. With TaxiNeo, enjoy fixed prices without a meter for all your Paris journeys.",
        grid: [
          { label: "Short ride (5 km)", priceDay: "€12 — €18", priceNight: "€15 — €22" },
          { label: "Across Paris (10 km)", priceDay: "€20 — €30", priceNight: "€25 — €35" },
          { label: "Paris → CDG", priceDay: "€50 — €62", priceNight: "€58 — €71" },
          { label: "Paris → Orly", priceDay: "€36 — €45", priceNight: "€41 — €52" },
          { label: "Paris → La Défense", priceDay: "€25 — €35", priceNight: "€30 — €40" },
          { label: "Paris → Versailles", priceDay: "€40 — €55", priceNight: "€46 — €63" },
        ],
        faq: [
          { question: "What is the minimum taxi fare in Paris?", answer: "The minimum fare is €7.30 in 2026. This is the minimum charged even for very short rides." },
          { question: "How is the Paris taxi price calculated?", answer: "The price combines a fixed pick-up fee (€2.60), a per-km rate (€1.14 to €1.78/km depending on the rate) and an hourly waiting rate (€38.96/h)." },
          { question: "Are Paris taxi fares the same on Sundays?", answer: "No, Sundays and holidays use rate D, the highest. With TaxiNeo, the fixed price doesn't change on Sundays." },
          { question: "Are there flat-rate taxi fares in Paris?", answer: "Yes, airport flat rates have been mandatory since 2016. TaxiNeo offers flat rates for all journeys, not just airports." },
        ],
        introduction: "Paris has enforced strict taxi fare regulations since 2016, overseen by the Paris police prefecture. The taximeter displays four distinct rates: A (daytime within Paris city limits), B (night-time or daytime suburbs), C (night-time suburbs) and D (Sundays and public holidays). The pick-up fee is set at 2.60 euros and the minimum fare is 7.30 euros. Flat-rate fares to CDG and Orly airports are mandatory for all journeys between Paris and these two hubs. The capital has approximately 18,000 licensed taxis, identifiable by the rooftop light. With TaxiNeo, you get a fixed price quoted in advance with no meter and no surprises, regardless of traffic or the route taken.",
        conseils: "To save money on Paris taxi rides, favour journeys during rate A hours, which apply on weekdays and Saturdays within Paris city limits. Avoid rush hours (8-10am and 5-7pm) when traffic jams push the meter higher due to the hourly waiting charge. Airport flat rates are often better value than the meter, especially during heavy traffic. Book ahead on TaxiNeo to lock in a guaranteed fixed price. For regular trips, official taxi ranks avoid the surcharge applied to phone-dispatched rides. The metro and RER remain unbeatable for short trips, but with more than two passengers, a taxi becomes competitive.",
        bonASavoir: "All Paris taxis have been required to accept card payments since 2019. Tipping is not mandatory but rounding up to the nearest euro is appreciated. Each taxi can carry up to 3 bags in the boot at no extra charge; beyond that, a supplement of 2 euros per bag may apply. Child seats are not provided by default so remember to request one when booking. In case of a dispute, note the licence number displayed on the dashboard.",
      },
    },
  },
  {
    slug: "tarif-taxi-cdg",
    title: "Tarif Taxi CDG",
    type: "aeroport",
    lat: 49.0097,
    lng: 2.5479,
    i18n: {
      fr: {
        metaTitle: "Tarif Taxi CDG 2026 : forfaits et prix fixes | TaxiNeo",
        metaDescription: "Tarifs taxi depuis l'aéroport CDG en 2026. Forfait officiel rive droite 56 €, rive gauche 65 €, prix vers Disneyland, La Défense et toutes vos destinations.",
        heroTitle: "Tarif Taxi Aéroport CDG",
        heroSubtitle: "Forfaits réglementés et prix fixes depuis l'aéroport Charles de Gaulle.",
        description: "Les tarifs taxi depuis CDG sont encadrés par des forfaits obligatoires vers Paris. Rive droite : 56 €, rive gauche : 65 €. TaxiNeo propose des forfaits pour toutes les destinations, pas seulement Paris.",
        grid: [
          { label: "CDG → Paris Rive Droite", priceDay: "56 €", priceNight: "56 €" },
          { label: "CDG → Paris Rive Gauche", priceDay: "65 €", priceNight: "65 €" },
          { label: "CDG → Disneyland", priceDay: "60 — 80 €", priceNight: "69 — 92 €" },
          { label: "CDG → La Défense", priceDay: "55 — 70 €", priceNight: "63 — 81 €" },
          { label: "CDG → Versailles", priceDay: "70 — 90 €", priceNight: "81 — 104 €" },
          { label: "CDG → Orly", priceDay: "65 — 85 €", priceNight: "75 — 98 €" },
        ],
        faq: [
          { question: "Quel est le forfait taxi CDG — Paris ?", answer: "Le forfait officiel est de 56 € pour la rive droite et 65 € pour la rive gauche, fixé par arrêté préfectoral." },
          { question: "Le forfait CDG est-il le même de nuit ?", answer: "Oui, les forfaits aéroport officiels s'appliquent 24h/24 sans majoration. Les destinations hors Paris peuvent avoir un supplément nuit." },
          { question: "Comment payer le taxi à CDG ?", answer: "Par carte bancaire (obligatoire), espèces ou paiement via l'application TaxiNeo." },
          { question: "Où prendre un taxi à CDG ?", answer: "Les stations taxi se trouvent à la sortie de chaque terminal, signalées par des panneaux bleus." },
        ],
        introduction: "L'aéroport Charles de Gaulle, premier aéroport de France avec plus de 67 millions de passagers par an, dispose d'un système de tarifs taxi strictement encadré. Depuis 2016, les forfaits vers Paris sont obligatoires : 56 € pour la rive droite et 65 € pour la rive gauche, applicables 24h/24 sans majoration. CDG comprend trois terminaux principaux (T1, T2 avec ses halls A à G, et T3), tous reliés par la navette automatique CDGVAL. Les files d'attente taxi se trouvent à la sortie de chaque terminal, gérées par des régulateurs officiels. Attention aux rabatteurs qui proposent des courses illégales dans les halls d'arrivée. Seuls les taxis avec lumineux sur le toit et plaque officielle sont autorisés.",
        conseils: "Pour économiser depuis CDG, vérifiez si votre destination est en rive droite ou gauche : 9 € de différence sur le forfait. Si vous voyagez léger et seul, le RER B rejoint Paris en 35 minutes pour environ 11 €. Le bus Roissybus est une alternative à 16 € vers Opéra. Pour les groupes de 3-4 personnes, le taxi au forfait devient plus économique que les transports en commun. Réservez sur TaxiNeo avant votre atterrissage pour éviter l'attente en file, qui peut dépasser 30 minutes aux heures de pointe. Le CDGVAL gratuit permet de rejoindre n'importe quel terminal pour trouver une file plus courte.",
        bonASavoir: "Le paiement par carte bancaire est obligatoire dans tous les taxis français. Le forfait CDG-Paris inclut les bagages sans supplément. Le trajet dure entre 45 minutes et 1h15 selon le trafic. Un reçu est obligatoire et doit mentionner le forfait appliqué. En cas de réclamation, contactez la préfecture de police via le numéro affiché dans le véhicule. Les taxis adaptés PMR sont disponibles sur réservation.",
      },
      en: {
        metaTitle: "CDG Airport Taxi Fares 2026: flat rates & prices | TaxiNeo",
        metaDescription: "CDG airport taxi fares in 2026. Official flat rates to Paris (Right Bank €56, Left Bank €65), prices to Disneyland, La Défense and all other destinations.",
        heroTitle: "CDG Airport Taxi Fares",
        heroSubtitle: "Regulated flat rates and fixed prices from Charles de Gaulle Airport.",
        description: "Taxi fares from CDG are regulated with mandatory flat rates to Paris. Right Bank: €56, Left Bank: €65. TaxiNeo offers flat rates to all destinations, not just Paris.",
        grid: [
          { label: "CDG → Paris Right Bank", priceDay: "€56", priceNight: "€56" },
          { label: "CDG → Paris Left Bank", priceDay: "€65", priceNight: "€65" },
          { label: "CDG → Disneyland", priceDay: "€60 — €80", priceNight: "€69 — €92" },
          { label: "CDG → La Défense", priceDay: "€55 — €70", priceNight: "€63 — €81" },
          { label: "CDG → Versailles", priceDay: "€70 — €90", priceNight: "€81 — €104" },
          { label: "CDG → Orly", priceDay: "€65 — €85", priceNight: "€75 — €98" },
        ],
        faq: [
          { question: "What is the flat rate taxi CDG — Paris?", answer: "The official flat rate is €56 for the Right Bank and €65 for the Left Bank, set by prefectural order." },
          { question: "Is the CDG flat rate the same at night?", answer: "Yes, official airport flat rates apply 24/7 with no surcharge. Destinations outside Paris may have a night supplement." },
          { question: "How to pay for a taxi at CDG?", answer: "By bank card (mandatory), cash or payment via the TaxiNeo app." },
          { question: "Where to find a taxi at CDG?", answer: "Taxi ranks are at the exit of each terminal, indicated by blue signs." },
        ],
        introduction: "Charles de Gaulle Airport, France's busiest airport with over 67 million passengers per year, has a strictly regulated taxi fare system. Since 2016, flat rates to Paris have been mandatory: 56 euros for the Right Bank and 65 euros for the Left Bank, applicable around the clock with no surcharge. CDG has three main terminals (T1, T2 with halls A to G, and T3), all connected by the free CDGVAL automated shuttle. Taxi queues are located at the exit of each terminal, managed by official dispatchers. Beware of touts offering illegal rides in the arrivals halls. Only taxis with a rooftop light and official plate are authorised.",
        conseils: "To save money from CDG, check whether your destination is on the Right Bank or Left Bank: there is a 9-euro difference on the flat rate. If you are travelling light and alone, the RER B reaches Paris in 35 minutes for around 11 euros. The Roissybus is an alternative at 16 euros to Opera. For groups of 3-4 people, the taxi flat rate becomes more economical than public transport. Book on TaxiNeo before landing to skip the queue, which can exceed 30 minutes at peak times. The free CDGVAL shuttle lets you reach any terminal to find a shorter queue.",
        bonASavoir: "Card payment is mandatory in all French taxis. The CDG-Paris flat rate includes luggage with no surcharge. The journey takes between 45 minutes and 1 hour 15 minutes depending on traffic. A receipt is mandatory and must state the flat rate applied. For complaints, contact the police prefecture via the number displayed in the vehicle. Wheelchair-accessible taxis are available upon reservation.",
      },
    },
  },
  {
    slug: "tarif-taxi-orly",
    title: "Tarif Taxi Orly",
    type: "aeroport",
    lat: 48.7262,
    lng: 2.3652,
    i18n: {
      fr: {
        metaTitle: "Tarif Taxi Orly 2026 : forfaits et prix fixes | TaxiNeo",
        metaDescription: "Tarifs taxi depuis l'aéroport d'Orly en 2026. Forfait Paris rive gauche 36 €, rive droite 45 €, prix fixes garantis vers toutes les destinations avec TaxiNeo.",
        heroTitle: "Tarif Taxi Aéroport d'Orly",
        heroSubtitle: "Forfaits réglementés et prix fixes depuis l'aéroport d'Orly.",
        description: "Les forfaits taxi Orly — Paris sont réglementés. Rive gauche : 36 €, rive droite : 45 €. TaxiNeo étend les forfaits à toutes les destinations.",
        grid: [
          { label: "Orly → Paris Rive Gauche", priceDay: "36 €", priceNight: "36 €" },
          { label: "Orly → Paris Rive Droite", priceDay: "45 €", priceNight: "45 €" },
          { label: "Orly → La Défense", priceDay: "50 — 65 €", priceNight: "58 — 75 €" },
          { label: "Orly → Versailles", priceDay: "40 — 55 €", priceNight: "46 — 63 €" },
          { label: "Orly → Disneyland", priceDay: "70 — 90 €", priceNight: "81 — 104 €" },
          { label: "Orly → CDG", priceDay: "65 — 85 €", priceNight: "75 — 98 €" },
        ],
        faq: [
          { question: "Quel est le forfait taxi Orly — Paris ?", answer: "36 € vers la rive gauche, 45 € vers la rive droite. Ces forfaits sont fixés par arrêté préfectoral." },
          { question: "Le forfait change-t-il la nuit ?", answer: "Non, les forfaits officiels aéroport sont identiques de jour comme de nuit." },
          { question: "Peut-on payer par carte à Orly ?", answer: "Oui, le paiement par carte bancaire est obligatoire dans tous les taxis français." },
          { question: "Comment trouver un taxi à Orly ?", answer: "Les stations taxi sont situées à la sortie de chaque terminal (Orly 1 à 4)." },
        ],
        introduction: "L'aéroport d'Orly, deuxième plateforme aéroportuaire de France, dessert principalement les vols domestiques, européens et le Maghreb. Depuis la réforme de 2016, les forfaits taxi vers Paris sont réglementés : 36 € vers la rive gauche et 45 € vers la rive droite, valables jour et nuit. L'aéroport comprend quatre terminaux (Orly 1 à 4) répartis sur deux zones, Sud et Ouest, reliées par l'OrlyVal automatique. Les stations taxi sont clairement signalées à la sortie de chaque terminal. Orly est également desservi par le tramway T7, le bus 183 et l'OrlyVal vers le RER B. Plus proche de Paris que CDG, les courses depuis Orly sont généralement moins chères et plus rapides.",
        conseils: "Pour réduire le coût de votre course depuis Orly, sachez que la différence entre rive gauche (36 €) et rive droite (45 €) est de 9 €. Si votre hôtel est dans le 5e, 6e ou 7e arrondissement, vous bénéficiez du forfait rive gauche, le plus avantageux. Le tramway T7 relie Orly à Villejuif-Louis Aragon (métro 7) pour seulement 2,15 €, idéal pour les voyageurs seuls et légers. Pour les familles ou groupes, le taxi reste le choix le plus pratique. Réservez à l'avance sur TaxiNeo pour un prix fixe garanti, sans attente à la station. Évitez les départs entre 7h et 9h le lundi matin, la circulation sur l'A6 est souvent saturée.",
        bonASavoir: "Le paiement par carte bancaire est accepté dans tous les taxis (obligation légale). Les forfaits Orly-Paris incluent les bagages standards. Le trajet vers le centre de Paris dure 20 à 45 minutes selon la circulation. L'OrlyVal fonctionne de 6h à 23h30. Pour les vols très matinaux ou tardifs, le taxi reste la seule option pratique. Demandez toujours un reçu mentionnant le montant du forfait.",
      },
      en: {
        metaTitle: "Orly Airport Taxi Fares 2026: flat rates & prices | TaxiNeo",
        metaDescription: "Orly airport taxi fares in 2026. Regulated flat rates to Paris (Left Bank €36, Right Bank €45), prices to all destinations and fixed fares with TaxiNeo.",
        heroTitle: "Orly Airport Taxi Fares",
        heroSubtitle: "Regulated flat rates and fixed prices from Orly Airport.",
        description: "Orly — Paris taxi flat rates are regulated. Left Bank: €36, Right Bank: €45. TaxiNeo extends flat rates to all destinations.",
        grid: [
          { label: "Orly → Paris Left Bank", priceDay: "€36", priceNight: "€36" },
          { label: "Orly → Paris Right Bank", priceDay: "€45", priceNight: "€45" },
          { label: "Orly → La Défense", priceDay: "€50 — €65", priceNight: "€58 — €75" },
          { label: "Orly → Versailles", priceDay: "€40 — €55", priceNight: "€46 — €63" },
          { label: "Orly → Disneyland", priceDay: "€70 — €90", priceNight: "€81 — €104" },
          { label: "Orly → CDG", priceDay: "€65 — €85", priceNight: "€75 — €98" },
        ],
        faq: [
          { question: "What is the flat rate Orly — Paris?", answer: "€36 to the Left Bank, €45 to the Right Bank. These flat rates are set by prefectural order." },
          { question: "Does the flat rate change at night?", answer: "No, official airport flat rates are the same day and night." },
          { question: "Can I pay by card at Orly?", answer: "Yes, card payment is mandatory in all French taxis." },
          { question: "How to find a taxi at Orly?", answer: "Taxi ranks are at the exit of each terminal (Orly 1 to 4)." },
        ],
        introduction: "Orly Airport, France's second-largest air hub, primarily serves domestic, European and North African flights. Since the 2016 reform, taxi flat rates to Paris are regulated: 36 euros to the Left Bank and 45 euros to the Right Bank, valid day and night. The airport has four terminals (Orly 1 to 4) spread across two zones, South and West, connected by the automatic OrlyVal shuttle. Taxi ranks are clearly signposted at the exit of each terminal. Orly is also served by tramway T7, bus 183 and the OrlyVal connecting to RER B. Closer to Paris than CDG, fares from Orly are generally cheaper and faster.",
        conseils: "To reduce the cost of your ride from Orly, note that the difference between the Left Bank (36 euros) and Right Bank (45 euros) flat rate is 9 euros. If your hotel is in the 5th, 6th or 7th arrondissement, you benefit from the Left Bank rate, the most affordable. Tramway T7 connects Orly to Villejuif-Louis Aragon (metro line 7) for just 2.15 euros, ideal for solo travellers with light luggage. For families or groups, a taxi remains the most practical choice. Book ahead on TaxiNeo for a guaranteed fixed price with no waiting at the rank. Avoid departures between 7am and 9am on Monday mornings when traffic on the A6 is often gridlocked.",
        bonASavoir: "Card payment is accepted in all taxis (legal requirement). Orly-Paris flat rates include standard luggage. The journey to central Paris takes 20 to 45 minutes depending on traffic. The OrlyVal runs from 6am to 11.30pm. For very early or late flights, a taxi is the only practical option. Always ask for a receipt stating the flat rate amount.",
      },
    },
  },
];

// Generate remaining tarifs programmatically
const simpleTarifs: Array<{
  slug: string; title: string; type: Tarif["type"]; lat: number; lng: number;
  frTitle: string; enTitle: string; frDesc: string; enDesc: string;
  frIntro?: string; enIntro?: string; frConseils?: string; enConseils?: string; frBonASavoir?: string; enBonASavoir?: string;
  grid: { label: string; day: string; night: string; dayEn: string; nightEn: string }[];
}> = [
  { slug: "tarif-taxi-lyon", title: "Tarif Taxi Lyon", type: "ville", lat: 45.764, lng: 4.8357,
    frTitle: "Tarif Taxi Lyon", enTitle: "Lyon Taxi Fares", frDesc: "Découvrez les tarifs taxi à Lyon en 2026. Prix des courses, forfaits aéroport Saint-Exupéry et tarifs vers les principales destinations lyonnaises.", enDesc: "Discover Lyon taxi fares in 2026. Ride prices, Saint-Exupéry airport flat rates and fares to Lyon's main destinations.",
    frIntro: "Lyon, troisième ville de France et capitale de la gastronomie, dispose d'un réseau de taxis réglementé par la préfecture du Rhône. Les deux gares principales, Part-Dieu et Perrache, disposent de stations taxi dédiées. L'aéroport Lyon-Saint-Exupéry, situé à 25 km à l'est de la ville, est relié par le Rhônexpress en 30 minutes. Les tarifs taxi lyonnais suivent le barème national avec les tarifs A (jour), B (nuit, 19h-7h) et une prise en charge d'environ 2 €. Lyon compte environ 900 taxis autorisés. La Presqu'île, la Part-Dieu et le Vieux Lyon concentrent la majorité des courses. Avec TaxiNeo, bénéficiez de prix fixes pour tous vos trajets lyonnais.",
    enIntro: "Lyon, France's third-largest city and gastronomic capital, has a taxi network regulated by the Rhone prefecture. The two main railway stations, Part-Dieu and Perrache, both have dedicated taxi ranks. Lyon-Saint-Exupéry Airport, located 25 km east of the city, is connected by the Rhônexpress in 30 minutes. Lyon taxi fares follow the national rate schedule with rate A (daytime), rate B (night, 7pm-7am) and a pick-up fee of around 2 euros. Lyon has approximately 900 licensed taxis. The Presqu'île, Part-Dieu and Vieux Lyon areas account for the majority of rides. With TaxiNeo, enjoy fixed prices for all your Lyon journeys.",
    frConseils: "Pour économiser sur vos courses taxi à Lyon, utilisez les stations de Part-Dieu ou Perrache plutôt que d'appeler un taxi par téléphone (pas de supplément d'approche). Le Rhônexpress coûte 16,30 € pour rejoindre l'aéroport, mais au-delà de deux passagers, le taxi devient plus avantageux. Évitez les heures de pointe sur le tunnel de Fourvière (8h-9h30 et 17h-19h). Pour les trajets nocturnes, le tarif B majore le prix d'environ 30 %. Réservez à l'avance sur TaxiNeo pour un prix fixe, particulièrement utile lors des événements majeurs comme la Fête des Lumières en décembre.",
    enConseils: "To save on Lyon taxi fares, use the ranks at Part-Dieu or Perrache stations rather than calling a taxi by phone (no approach surcharge). The Rhônexpress costs 16.30 euros to reach the airport, but with more than two passengers a taxi becomes better value. Avoid rush hour through the Fourvière tunnel (8-9.30am and 5-7pm). For night journeys, rate B adds about 30% to the fare. Book ahead on TaxiNeo for a fixed price, particularly useful during major events such as the Festival of Lights in December.",
    frBonASavoir: "Tous les taxis lyonnais acceptent la carte bancaire. Le pourboire n'est pas obligatoire mais un arrondi est courant. Les stations taxi sont présentes devant les gares, à l'aéroport et dans les quartiers centraux. Le métro lyonnais (4 lignes) fonctionne jusqu'à minuit, au-delà le taxi est votre meilleure option. Les taxis PMR sont disponibles sur réservation. Conservez votre reçu en cas de réclamation.",
    enBonASavoir: "All Lyon taxis accept card payment. Tipping is not mandatory but rounding up is common. Taxi ranks are available outside stations, at the airport and in central districts. The Lyon metro (4 lines) runs until midnight; beyond that a taxi is your best option. Wheelchair-accessible taxis are available on request. Keep your receipt in case of a complaint.",
    grid: [
      { label: "Course courte (5 km)", day: "10 — 15 €", night: "12 — 18 €", dayEn: "€10 — €15", nightEn: "€12 — €18" },
      { label: "Lyon → Aéroport", day: "50 — 65 €", night: "58 — 75 €", dayEn: "€50 — €65", nightEn: "€58 — €75" },
      { label: "Lyon → Part-Dieu", day: "10 — 18 €", night: "12 — 21 €", dayEn: "€10 — €18", nightEn: "€12 — €21" },
      { label: "Lyon → Grenoble", day: "130 — 160 €", night: "150 — 184 €", dayEn: "€130 — €160", nightEn: "€150 — €184" },
    ] },
  { slug: "tarif-taxi-nice", title: "Tarif Taxi Nice", type: "ville", lat: 43.7102, lng: 7.262,
    frTitle: "Tarif Taxi Nice", enTitle: "Nice Taxi Fares", frDesc: "Tarifs taxi à Nice en 2026. Prix des courses sur la Côte d'Azur, forfaits aéroport Nice et tarifs vers Monaco, Cannes et Antibes.", enDesc: "Nice taxi fares in 2026. French Riviera ride prices, Nice airport flat rates and fares to Monaco, Cannes and Antibes.",
    frIntro: "Nice, capitale de la Côte d'Azur et cinquième ville de France, bénéficie d'un réseau de taxis adapté au tourisme international. L'aéroport Nice Côte d'Azur, troisième de France, est situé à seulement 7 km du centre-ville le long de la Promenade des Anglais. Le tramway L1 traverse la ville d'est en ouest et la L2 relie l'aéroport au centre en 26 minutes. Les tarifs taxi niçois sont réglementés par la préfecture des Alpes-Maritimes. Nice est un point de départ idéal pour Monaco (20 km), Cannes (33 km) et Antibes (23 km). Les courses le long de la Promenade des Anglais sont fréquentes. TaxiNeo propose des prix fixes pour toutes les destinations azuréennes.",
    enIntro: "Nice, capital of the French Riviera and France's fifth-largest city, has a taxi network adapted to international tourism. Nice Côte d'Azur Airport, France's third busiest, is only 7 km from the city centre along the Promenade des Anglais. Tramway L1 crosses the city from east to west and L2 connects the airport to the centre in 26 minutes. Nice taxi fares are regulated by the Alpes-Maritimes prefecture. Nice is an ideal starting point for Monaco (20 km), Cannes (33 km) and Antibes (23 km). Rides along the Promenade des Anglais are frequent. TaxiNeo offers fixed prices for all Riviera destinations.",
    frConseils: "Pour économiser sur vos trajets taxi à Nice, prenez le tramway L2 depuis l'aéroport vers le centre-ville (1,50 €). Pour Monaco, le bus 100 est une alternative économique mais le taxi est nettement plus rapide. Évitez la Promenade des Anglais aux heures de pointe, notamment en été. Les tarifs augmentent sensiblement pendant le Festival de Cannes et le Grand Prix de Monaco. Depuis l'aéroport, le taxi au compteur varie entre 25 et 35 € vers le centre de Nice, mais réservez sur TaxiNeo pour un prix fixe garanti. Pour les excursions en bord de mer, un taxi à la journée peut être plus avantageux que plusieurs courses séparées.",
    enConseils: "To save on Nice taxi fares, take the L2 tramway from the airport to the city centre (1.50 euros). For Monaco, bus 100 is a cheap alternative but a taxi is significantly faster. Avoid the Promenade des Anglais during rush hour, especially in summer. Fares rise noticeably during the Cannes Film Festival and Monaco Grand Prix. From the airport, the metered taxi costs between 25 and 35 euros to central Nice, but book on TaxiNeo for a guaranteed fixed price. For coastal excursions, a full-day taxi hire can be more cost-effective than several separate rides.",
    frBonASavoir: "Les taxis niçois acceptent obligatoirement la carte bancaire. L'aéroport dispose de deux terminaux avec stations taxi dédiées. Le trajet aéroport-centre dure 15 à 30 minutes selon la circulation. Pour Monaco, comptez 30 à 45 minutes. Attention : les taxis français ne peuvent pas prendre de passagers en Principauté de Monaco (juridiction différente). Les pourboires ne sont pas obligatoires. Demandez toujours votre reçu.",
    enBonASavoir: "Nice taxis are required to accept card payment. The airport has two terminals with dedicated taxi ranks. The airport-to-centre journey takes 15 to 30 minutes depending on traffic. For Monaco, allow 30 to 45 minutes. Note: French taxis cannot pick up passengers in the Principality of Monaco (different jurisdiction). Tips are not mandatory. Always ask for your receipt.",
    grid: [
      { label: "Nice Centre (5 km)", day: "10 — 15 €", night: "12 — 18 €", dayEn: "€10 — €15", nightEn: "€12 — €18" },
      { label: "Nice → Aéroport", day: "25 — 35 €", night: "29 — 40 €", dayEn: "€25 — €35", nightEn: "€29 — €40" },
      { label: "Nice → Monaco", day: "50 — 70 €", night: "58 — 81 €", dayEn: "€50 — €70", nightEn: "€58 — €81" },
      { label: "Nice → Cannes", day: "50 — 65 €", night: "58 — 75 €", dayEn: "€50 — €65", nightEn: "€58 — €75" },
    ] },
  { slug: "tarif-taxi-marseille", title: "Tarif Taxi Marseille", type: "ville", lat: 43.2965, lng: 5.3698,
    frTitle: "Tarif Taxi Marseille", enTitle: "Marseille Taxi Fares", frDesc: "Tarifs taxi à Marseille en 2026. Prix des courses, forfait aéroport Provence, tarifs vers Aix-en-Provence et Cassis.", enDesc: "Marseille taxi fares in 2026. Ride prices, Provence airport flat rates, fares to Aix-en-Provence and Cassis.",
    frIntro: "Marseille, deuxième ville de France et premier port de Méditerranée, possède un réseau de taxis géré par la chambre des métiers des Bouches-du-Rhône. L'aéroport Marseille-Provence (Marignane), à 27 km du Vieux-Port, est relié par la navette aéroport et l'autoroute A7. Les stations taxi principales se trouvent au Vieux-Port, à la gare Saint-Charles et devant les grands hôtels. Marseille est un point de départ pour les calanques de Cassis, Aix-en-Provence et la Camargue. Le métro (2 lignes) et le tramway (3 lignes) couvrent le centre, mais le taxi reste indispensable pour l'aéroport et les excursions. TaxiNeo garantit des prix fixes pour toutes les destinations marseillaises.",
    enIntro: "Marseille, France's second-largest city and the leading Mediterranean port, has a taxi network managed by the Bouches-du-Rhône chamber of trades. Marseille-Provence Airport (Marignane), 27 km from the Vieux-Port, is connected by the airport shuttle and the A7 motorway. The main taxi ranks are at the Vieux-Port, Gare Saint-Charles and outside major hotels. Marseille is a gateway to the Cassis calanques, Aix-en-Provence and the Camargue. The metro (2 lines) and tramway (3 lines) cover the centre, but taxis remain essential for the airport and excursions. TaxiNeo guarantees fixed prices for all Marseille destinations.",
    frConseils: "Pour économiser sur vos courses taxi à Marseille, la navette aéroport relie Marignane à la gare Saint-Charles pour environ 10 € en 25 minutes. Mais au-delà de deux passagers, le taxi devient compétitif. Évitez l'autoroute A7 aux heures de pointe (7h30-9h et 17h-19h), le tunnel Prado-Carénage offre une alternative rapide moyennant un péage. Pour visiter les calanques, un taxi aller-retour avec attente est souvent moins cher que deux courses séparées. Réservez sur TaxiNeo pour un prix fixe, surtout les jours de match à l'Orange Vélodrome où la demande explose.",
    enConseils: "To save on Marseille taxi fares, the airport shuttle connects Marignane to Gare Saint-Charles for around 10 euros in 25 minutes. But with more than two passengers, a taxi becomes competitive. Avoid the A7 motorway at rush hour (7.30-9am and 5-7pm); the Prado-Carénage tunnel offers a faster alternative for a toll. To visit the calanques, a round-trip taxi with waiting time is often cheaper than two separate rides. Book on TaxiNeo for a fixed price, especially on match days at the Orange Vélodrome when demand surges.",
    frBonASavoir: "Les taxis marseillais acceptent la carte bancaire (obligation nationale). La gare Saint-Charles est le principal hub ferroviaire avec TGV vers Paris en 3h. Le trajet aéroport-Vieux-Port dure 25 à 45 minutes. Les taxis ne peuvent pas circuler dans certaines zones piétonnes du Vieux-Port. Pour les croisières au terminal Joliette, les taxis déposent devant les terminaux. Un reçu est obligatoire pour chaque course.",
    enBonASavoir: "Marseille taxis accept card payment (national requirement). Gare Saint-Charles is the main rail hub with TGV service to Paris in 3 hours. The airport-to-Vieux-Port journey takes 25 to 45 minutes. Taxis cannot enter certain pedestrian zones around the Vieux-Port. For cruises at the Joliette terminal, taxis drop off in front of the cruise terminals. A receipt is mandatory for every ride.",
    grid: [
      { label: "Marseille Centre (5 km)", day: "10 — 15 €", night: "12 — 18 €", dayEn: "€10 — €15", nightEn: "€12 — €18" },
      { label: "Marseille → Aéroport", day: "50 — 65 €", night: "58 — 75 €", dayEn: "€50 — €65", nightEn: "€58 — €75" },
      { label: "Marseille → Aix", day: "45 — 60 €", night: "52 — 69 €", dayEn: "€45 — €60", nightEn: "€52 — €69" },
      { label: "Marseille → Cassis", day: "35 — 50 €", night: "40 — 58 €", dayEn: "€35 — €50", nightEn: "€40 — €58" },
    ] },
  { slug: "tarif-taxi-toulouse", title: "Tarif Taxi Toulouse", type: "ville", lat: 43.6047, lng: 1.4442,
    frTitle: "Tarif Taxi Toulouse", enTitle: "Toulouse Taxi Fares", frDesc: "Tarifs taxi à Toulouse en 2026. Prix des courses, forfait aéroport Blagnac et tarifs vers Carcassonne.", enDesc: "Toulouse taxi fares in 2026. Ride prices, Blagnac airport flat rates and fares to Carcassonne.",
    frIntro: "Toulouse, la Ville Rose et quatrième commune de France, est le berceau de l'industrie aéronautique européenne avec Airbus. L'aéroport Toulouse-Blagnac, à seulement 8 km du centre, est accessible en taxi en 15 à 25 minutes. Le métro toulousain (lignes A et B) couvre l'axe principal de la ville, du Capitole à l'université. Les stations taxi se trouvent devant la gare Matabiau, au Capitole et à l'aéroport. Les tarifs suivent la réglementation nationale avec les tarifs A et B. Toulouse est aussi le point de départ pour le Canal du Midi, la Cité de l'Espace et les Pyrénées. TaxiNeo propose des prix fixes pour tous vos déplacements toulousains.",
    enIntro: "Toulouse, the Pink City and France's fourth-largest municipality, is the cradle of the European aeronautics industry with Airbus. Toulouse-Blagnac Airport, just 8 km from the centre, is reachable by taxi in 15 to 25 minutes. The Toulouse metro (lines A and B) covers the city's main axis, from the Capitole to the university. Taxi ranks are located outside Matabiau station, at the Capitole and at the airport. Fares follow national regulations with rates A and B. Toulouse is also the gateway to the Canal du Midi, the Cité de l'Espace and the Pyrenees. TaxiNeo offers fixed prices for all your Toulouse journeys.",
    frConseils: "Pour économiser sur vos trajets taxi à Toulouse, la navette aéroport relie Blagnac à la gare Matabiau et au centre-ville pour 9 €, mais le taxi est plus intéressant à partir de deux passagers. Le métro (lignes A et B) est efficace pour les déplacements centre-ville et fonctionne jusqu'à minuit. Pour l'aéroport, le tramway T2 est une alternative économique. Évitez le périphérique aux heures de pointe (8h-9h30 et 17h-19h), surtout les sorties Purpan et Sesquières. Réservez sur TaxiNeo pour un prix fixe, idéal lors du Salon du Bourget aéronautique local ou des matchs au Stadium.",
    enConseils: "To save on Toulouse taxi fares, the airport shuttle connects Blagnac to Matabiau station and the city centre for 9 euros, but a taxi is better value from two passengers. The metro (lines A and B) is efficient for city-centre travel and runs until midnight. For the airport, the T2 tramway is an affordable alternative. Avoid the ring road at rush hour (8-9.30am and 5-7pm), especially the Purpan and Sesquières exits. Book on TaxiNeo for a fixed price, ideal during local aeronautics events or matches at the Stadium.",
    frBonASavoir: "Tous les taxis toulousains acceptent la carte bancaire. La gare Matabiau dessert Paris en TGV (4h15) et Bordeaux (2h). Le taxi est indispensable pour rejoindre la Cité de l'Espace, mal desservie en transports. Le pourboire n'est pas obligatoire. En cas de litige, notez le numéro de licence du véhicule affiché dans l'habitacle. Les taxis adaptés PMR sont disponibles sur demande.",
    enBonASavoir: "All Toulouse taxis accept card payment. Matabiau station serves Paris by TGV (4h15) and Bordeaux (2h). A taxi is essential for reaching the Cité de l'Espace, which is poorly served by public transport. Tipping is not mandatory. In case of a dispute, note the vehicle licence number displayed inside the cab. Wheelchair-accessible taxis are available on request.",
    grid: [
      { label: "Toulouse Centre (5 km)", day: "10 — 14 €", night: "12 — 16 €", dayEn: "€10 — €14", nightEn: "€12 — €16" },
      { label: "Toulouse → Aéroport", day: "30 — 40 €", night: "35 — 46 €", dayEn: "€30 — €40", nightEn: "€35 — €46" },
      { label: "Toulouse → Carcassonne", day: "110 — 140 €", night: "127 — 161 €", dayEn: "€110 — €140", nightEn: "€127 — €161" },
    ] },
  { slug: "tarif-taxi-bordeaux", title: "Tarif Taxi Bordeaux", type: "ville", lat: 44.8378, lng: -0.5792,
    frTitle: "Tarif Taxi Bordeaux", enTitle: "Bordeaux Taxi Fares", frDesc: "Tarifs taxi à Bordeaux en 2026. Prix des courses, forfait aéroport Mérignac, tarifs vers Saint-Émilion et Arcachon.", enDesc: "Bordeaux taxi fares in 2026. Ride prices, Mérignac airport flat rates, fares to Saint-Émilion and Arcachon.",
    frIntro: "Bordeaux, classée au patrimoine mondial de l'UNESCO et capitale mondiale du vin, dispose d'un réseau de taxis réglementé par la préfecture de Gironde. L'aéroport de Bordeaux-Mérignac, à 12 km du centre, est relié par la navette 1+2+3 et par le tramway A. La gare Saint-Jean, hub TGV vers Paris (2h), est un point de départ majeur pour les taxis. Le tramway bordelais (4 lignes) dessert bien le centre-ville, mais le taxi reste essentiel pour les vignobles de Saint-Émilion, le bassin d'Arcachon et la Dune du Pilat. Les tarifs suivent la réglementation nationale. TaxiNeo offre des prix fixes pour toutes les destinations girondines.",
    enIntro: "Bordeaux, a UNESCO World Heritage city and the world capital of wine, has a taxi network regulated by the Gironde prefecture. Bordeaux-Mérignac Airport, 12 km from the centre, is connected by the 1+2+3 shuttle bus and tramway line A. Gare Saint-Jean, the TGV hub for Paris (2 hours), is a major taxi departure point. The Bordeaux tramway (4 lines) serves the city centre well, but taxis remain essential for the Saint-Émilion vineyards, the Arcachon basin and the Dune du Pilat. Fares follow national regulations. TaxiNeo offers fixed prices for all Gironde destinations.",
    frConseils: "Pour économiser sur vos courses taxi à Bordeaux, le tramway A relie l'aéroport de Mérignac au centre-ville pour 1,80 € en 45 minutes. Mais pour 2-3 passagers avec bagages, le taxi est souvent plus pratique. Évitez la rocade bordelaise aux heures de pointe (8h-9h30 et 17h-19h), notamment les échangeurs de Lormont et Villenave. Pour les excursions viticoles à Saint-Émilion ou dans le Médoc, réservez un taxi à la demi-journée pour un meilleur tarif. Le bassin d'Arcachon est à 60 km : réservez sur TaxiNeo pour un prix fixe sans surprise. Pendant la Fête du Vin en juin, anticipez vos réservations.",
    enConseils: "To save on Bordeaux taxi fares, tramway line A connects Mérignac Airport to the city centre for 1.80 euros in 45 minutes. But for 2-3 passengers with luggage, a taxi is often more practical. Avoid the Bordeaux ring road at rush hour (8-9.30am and 5-7pm), especially the Lormont and Villenave interchanges. For wine excursions to Saint-Émilion or the Médoc, book a half-day taxi for a better rate. The Arcachon basin is 60 km away: book on TaxiNeo for a fixed price with no surprises. During the Wine Festival in June, book your taxis in advance.",
    frBonASavoir: "Tous les taxis bordelais acceptent la carte bancaire. La gare Saint-Jean dessert Paris-Montparnasse en 2h par TGV. Le trajet aéroport-centre dure 20 à 35 minutes selon la circulation. Les taxis ne circulent pas sur les voies de tramway en centre-ville piétonnier. Pour les croisières fluviales sur la Garonne, les taxis déposent au quai des Chartrons. Demandez toujours un reçu.",
    enBonASavoir: "All Bordeaux taxis accept card payment. Gare Saint-Jean serves Paris-Montparnasse in 2 hours by TGV. The airport-to-centre journey takes 20 to 35 minutes depending on traffic. Taxis do not run on tramway tracks in the pedestrianised city centre. For river cruises on the Garonne, taxis drop off at the Quai des Chartrons. Always ask for a receipt.",
    grid: [
      { label: "Bordeaux Centre (5 km)", day: "10 — 14 €", night: "12 — 16 €", dayEn: "€10 — €14", nightEn: "€12 — €16" },
      { label: "Bordeaux → Aéroport", day: "35 — 45 €", night: "40 — 52 €", dayEn: "€35 — €45", nightEn: "€40 — €52" },
      { label: "Bordeaux → Saint-Émilion", day: "55 — 75 €", night: "63 — 86 €", dayEn: "€55 — €75", nightEn: "€63 — €86" },
      { label: "Bordeaux → Arcachon", day: "75 — 95 €", night: "86 — 109 €", dayEn: "€75 — €95", nightEn: "€86 — €109" },
    ] },
  { slug: "tarif-taxi-77", title: "Tarif Taxi Seine-et-Marne (77)", type: "departement", lat: 48.6, lng: 2.9,
    frTitle: "Tarif Taxi Seine-et-Marne (77)", enTitle: "Seine-et-Marne (77) Taxi Fares", frDesc: "Tarifs taxi en Seine-et-Marne (77). Prix vers CDG, Orly, Disneyland Paris et les principales villes du département.", enDesc: "Taxi fares in Seine-et-Marne (77). Prices to CDG, Orly, Disneyland Paris and main department towns.",
    frIntro: "La Seine-et-Marne (77), plus grand département d'Île-de-France, abrite Disneyland Paris à Marne-la-Vallée, le centre commercial Val d'Europe et la ville historique de Fontainebleau avec son château et sa forêt. Le RER A dessert Marne-la-Vallée et le RER E relie plusieurs villes du département à Paris. La gare de Meaux est un noeud ferroviaire important. Les taxis du 77 appliquent les tarifs franciliens, similaires aux tarifs parisiens pour les courses en banlieue (tarifs B et C). Le département est traversé par l'A4, l'A5 et la Francilienne. TaxiNeo propose des prix fixes pour tous les trajets en Seine-et-Marne.",
    enIntro: "Seine-et-Marne (77), the largest department in the Île-de-France region, is home to Disneyland Paris at Marne-la-Vallée, the Val d'Europe shopping centre and the historic town of Fontainebleau with its château and forest. RER A serves Marne-la-Vallée and RER E connects several department towns to Paris. Meaux station is an important rail hub. Taxis in the 77 apply Île-de-France rates, similar to Paris rates for suburban rides (rates B and C). The department is crossed by the A4, A5 and Francilienne motorways. TaxiNeo offers fixed prices for all Seine-et-Marne journeys.",
    frConseils: "Pour économiser en Seine-et-Marne, le RER A relie Marne-la-Vallée (Disneyland) à Paris en 40 minutes pour environ 8 €. Mais pour une famille avec enfants et bagages, le taxi est bien plus confortable. Pour CDG depuis Marne-la-Vallée, la navette Magical Shuttle coûte 24 € par adulte, le taxi devient avantageux à 2+ passagers. Depuis Fontainebleau, le Transilien R rejoint Paris-Gare de Lyon en 40 minutes. Réservez sur TaxiNeo pour éviter les taxis difficiles à trouver en zone rurale. Les tarifs de nuit (B/C) s'appliquent dès 19h : planifiez vos retours de parc avant cette heure.",
    enConseils: "To save in Seine-et-Marne, RER A connects Marne-la-Vallée (Disneyland) to Paris in 40 minutes for around 8 euros. But for a family with children and luggage, a taxi is far more comfortable. For CDG from Marne-la-Vallée, the Magical Shuttle costs 24 euros per adult; a taxi becomes better value with 2+ passengers. From Fontainebleau, Transilien R reaches Paris-Gare de Lyon in 40 minutes. Book on TaxiNeo to avoid the difficulty of finding taxis in rural areas. Night rates (B/C) apply from 7pm: plan your theme park returns before then.",
    frBonASavoir: "Les taxis du 77 acceptent la carte bancaire. Disneyland Paris dispose de stations taxi dédiées à Disney Village. Le Val d'Europe est desservi par la gare RER de Val d'Europe. Pour Fontainebleau, le taxi est indispensable depuis la gare d'Avon. Les suppléments bagages sont plafonnés à 2 € par bagage au-delà du troisième. Conservez votre reçu pour toute réclamation.",
    enBonASavoir: "Taxis in the 77 accept card payment. Disneyland Paris has dedicated taxi ranks at Disney Village. Val d'Europe is served by the Val d'Europe RER station. For Fontainebleau, a taxi is essential from Avon station. Luggage surcharges are capped at 2 euros per bag beyond the third. Keep your receipt for any complaint.",
    grid: [
      { label: "Meaux → CDG", day: "50 — 70 €", night: "58 — 81 €", dayEn: "€50 — €70", nightEn: "€58 — €81" },
      { label: "Melun → Paris", day: "60 — 80 €", night: "69 — 92 €", dayEn: "€60 — €80", nightEn: "€69 — €92" },
      { label: "Fontainebleau → Paris", day: "80 — 100 €", night: "92 — 115 €", dayEn: "€80 — €100", nightEn: "€92 — €115" },
      { label: "Marne-la-Vallée → CDG", day: "40 — 55 €", night: "46 — 63 €", dayEn: "€40 — €55", nightEn: "€46 — €63" },
    ] },
  { slug: "tarif-taxi-91", title: "Tarif Taxi Essonne (91)", type: "departement", lat: 48.5, lng: 2.3,
    frTitle: "Tarif Taxi Essonne (91)", enTitle: "Essonne (91) Taxi Fares", frDesc: "Tarifs taxi en Essonne (91). Prix vers Paris, Orly, CDG et les villes du département.", enDesc: "Taxi fares in Essonne (91). Prices to Paris, Orly, CDG and department towns.",
    frIntro: "L'Essonne (91) est un département stratégique du sud de l'Île-de-France, abritant le plateau de Saclay, pôle scientifique et technologique majeur regroupant l'École polytechnique, HEC et plusieurs centres de recherche. La gare de Massy TGV est un hub ferroviaire reliant l'Essonne à tout le réseau grande vitesse sans passer par Paris. Le RER B dessert Massy-Palaiseau et le RER C passe par Juvisy et Savigny. Évry, préfecture du département, est accessible par le RER D. L'aéroport d'Orly est situé à la frontière nord du département. Les taxis essonniens appliquent les tarifs franciliens réglementés. TaxiNeo offre des prix fixes depuis toutes les villes de l'Essonne.",
    enIntro: "Essonne (91) is a strategic department in southern Île-de-France, home to the Saclay plateau, a major scientific and technological hub grouping École Polytechnique, HEC and several research centres. Massy TGV station is a rail hub connecting Essonne to the entire high-speed network without going through Paris. RER B serves Massy-Palaiseau and RER C passes through Juvisy and Savigny. Évry, the department capital, is accessible via RER D. Orly Airport sits on the department's northern border. Essonne taxis apply regulated Île-de-France rates. TaxiNeo offers fixed prices from all Essonne towns.",
    frConseils: "Pour économiser en Essonne, le RER B relie Massy-Palaiseau à Paris en 25 minutes pour environ 5 €. La gare de Massy TGV permet de rejoindre CDG en TGV sans passer par Paris (liaison directe). Pour Orly depuis Évry, comptez 25-35 € en taxi, mais le bus 402 est une alternative économique. Le plateau de Saclay est mal desservi en transports en commun, le taxi y est souvent indispensable. Réservez sur TaxiNeo pour un prix fixe, surtout pour les navettes régulières entreprises-gare. Les tarifs de nuit majorent la course d'environ 30 %.",
    enConseils: "To save in Essonne, RER B connects Massy-Palaiseau to Paris in 25 minutes for around 5 euros. Massy TGV station provides a direct TGV link to CDG without going through Paris. For Orly from Évry, expect 25-35 euros by taxi, but bus 402 is a cheaper alternative. The Saclay plateau is poorly served by public transport, making taxis often essential there. Book on TaxiNeo for a fixed price, especially for regular business-to-station shuttles. Night rates add about 30% to the fare.",
    frBonASavoir: "Les taxis de l'Essonne acceptent la carte bancaire. La gare de Massy TGV est un noeud multimodal (TGV, RER B, RER C, bus). Le trajet Évry-Paris dure 30 à 50 minutes en taxi selon la circulation sur l'A6. Pour le plateau de Saclay, la future ligne 18 du métro automatique améliorera la desserte. Les pourboires ne sont pas obligatoires. Demandez un reçu à chaque course.",
    enBonASavoir: "Essonne taxis accept card payment. Massy TGV station is a multimodal hub (TGV, RER B, RER C, bus). The Évry-to-Paris journey takes 30 to 50 minutes by taxi depending on traffic on the A6. For the Saclay plateau, the future automated metro line 18 will improve access. Tips are not mandatory. Ask for a receipt for every ride.",
    grid: [
      { label: "Évry → Paris", day: "40 — 55 €", night: "46 — 63 €", dayEn: "€40 — €55", nightEn: "€46 — €63" },
      { label: "Évry → Orly", day: "25 — 35 €", night: "29 — 40 €", dayEn: "€25 — €35", nightEn: "€29 — €40" },
      { label: "Massy → Paris", day: "30 — 40 €", night: "35 — 46 €", dayEn: "€30 — €40", nightEn: "€35 — €46" },
    ] },
  { slug: "tarif-taxi-92", title: "Tarif Taxi Hauts-de-Seine (92)", type: "departement", lat: 48.83, lng: 2.22,
    frTitle: "Tarif Taxi Hauts-de-Seine (92)", enTitle: "Hauts-de-Seine (92) Taxi Fares", frDesc: "Tarifs taxi dans les Hauts-de-Seine (92). Prix vers Paris, CDG, Orly et La Défense.", enDesc: "Taxi fares in Hauts-de-Seine (92). Prices to Paris, CDG, Orly and La Défense.",
    frIntro: "Les Hauts-de-Seine (92), département le plus riche de France après Paris, abritent le quartier d'affaires de La Défense, premier pôle tertiaire européen avec ses 180 000 salariés quotidiens. Les villes de Boulogne-Billancourt, Neuilly-sur-Seine et Issy-les-Moulineaux concentrent de nombreux sièges sociaux. Le département est desservi par le métro 1 (prolongé à La Défense), le tramway T2 (Pont de Bezons — Porte de Versailles) et le RER A. Les stations taxi sont nombreuses à La Défense, devant les gares et les centres commerciaux. Les tarifs appliqués sont les tarifs franciliens B et C pour les courses de banlieue. TaxiNeo garantit des prix fixes pour tous les trajets des Hauts-de-Seine.",
    enIntro: "Hauts-de-Seine (92), France's wealthiest department after Paris, is home to the La Défense business district, Europe's largest purpose-built business area with 180,000 daily workers. The towns of Boulogne-Billancourt, Neuilly-sur-Seine and Issy-les-Moulineaux host numerous corporate headquarters. The department is served by metro line 1 (extended to La Défense), tramway T2 (Pont de Bezons to Porte de Versailles) and RER A. Taxi ranks are plentiful at La Défense, outside stations and shopping centres. Applied rates are the Île-de-France B and C rates for suburban rides. TaxiNeo guarantees fixed prices for all Hauts-de-Seine journeys.",
    frConseils: "Pour économiser dans les Hauts-de-Seine, le métro 1 et le RER A relient La Défense à Paris en 10-15 minutes pour 2,15 €. Le tramway T2 longe la Seine de La Défense à Issy/Porte de Versailles. Mais pour les trajets professionnels avec bagages ou les courses vers les aéroports, le taxi reste le choix le plus efficace. Évitez le pont de Neuilly aux heures de pointe. Pour CDG depuis La Défense, le RER A puis B est possible mais long : le taxi direct est souvent préférable. Réservez sur TaxiNeo pour un prix fixe, très apprécié des cadres et voyageurs d'affaires.",
    enConseils: "To save in Hauts-de-Seine, metro line 1 and RER A connect La Défense to Paris in 10-15 minutes for 2.15 euros. Tramway T2 runs along the Seine from La Défense to Issy/Porte de Versailles. But for business trips with luggage or airport runs, a taxi remains the most efficient choice. Avoid the Neuilly bridge at rush hour. For CDG from La Défense, RER A then B is possible but slow: a direct taxi is often preferable. Book on TaxiNeo for a fixed price, popular with executives and business travellers.",
    frBonASavoir: "Les taxis des Hauts-de-Seine acceptent la carte bancaire. La Défense dispose de plusieurs stations taxi aux sorties du CNIT et des Quatre Temps. Le trajet La Défense-CDG dure 35 à 60 minutes selon le trafic. Neuilly et Boulogne sont en zone tarifaire proche de Paris, les courses y sont relativement abordables. Les taxis PMR sont disponibles sur réservation. Un reçu est obligatoire.",
    enBonASavoir: "Hauts-de-Seine taxis accept card payment. La Défense has several taxi ranks at the CNIT and Quatre Temps exits. The La Défense-to-CDG journey takes 35 to 60 minutes depending on traffic. Neuilly and Boulogne are in a fare zone close to Paris, making rides relatively affordable. Wheelchair-accessible taxis are available on request. A receipt is mandatory.",
    grid: [
      { label: "La Défense → Paris", day: "25 — 35 €", night: "29 — 40 €", dayEn: "€25 — €35", nightEn: "€29 — €40" },
      { label: "La Défense → CDG", day: "55 — 70 €", night: "63 — 81 €", dayEn: "€55 — €70", nightEn: "€63 — €81" },
      { label: "Boulogne → Orly", day: "35 — 45 €", night: "40 — 52 €", dayEn: "€35 — €45", nightEn: "€40 — €52" },
    ] },
  { slug: "tarif-taxi-93", title: "Tarif Taxi Seine-Saint-Denis (93)", type: "departement", lat: 48.91, lng: 2.48,
    frTitle: "Tarif Taxi Seine-Saint-Denis (93)", enTitle: "Seine-Saint-Denis (93) Taxi Fares", frDesc: "Tarifs taxi en Seine-Saint-Denis (93). Prix vers Paris, CDG, Orly et les villes du département.", enDesc: "Taxi fares in Seine-Saint-Denis (93). Prices to Paris, CDG, Orly and department towns.",
    frIntro: "La Seine-Saint-Denis (93) est le département le plus proche de l'aéroport CDG et abrite le Stade de France à Saint-Denis, théâtre des plus grands événements sportifs et culturels. L'aéroport du Bourget accueille le Salon international de l'aéronautique et l'aviation d'affaires. Le RER B traverse le département (La Plaine, Le Bourget, Aulnay) et le métro 13 dessert Saint-Denis. Saint-Ouen accueille le marché aux puces, attraction touristique majeure. Les taxis du 93 appliquent les tarifs franciliens réglementés. La proximité avec CDG rend les courses aéroport fréquentes et compétitives. TaxiNeo propose des prix fixes pour toutes les destinations depuis le 93.",
    enIntro: "Seine-Saint-Denis (93) is the department closest to CDG Airport and home to the Stade de France in Saint-Denis, venue for major sporting and cultural events. Le Bourget Airport hosts the Paris Air Show and business aviation. RER B crosses the department (La Plaine, Le Bourget, Aulnay) and metro line 13 serves Saint-Denis. Saint-Ouen hosts the famous flea market, a major tourist attraction. Taxis in the 93 apply regulated Île-de-France rates. Proximity to CDG makes airport rides frequent and competitive. TaxiNeo offers fixed prices for all destinations from the 93.",
    frConseils: "Pour économiser en Seine-Saint-Denis, le RER B relie le département à CDG en 15-25 minutes pour environ 10 €. Le métro 13 connecte Saint-Denis au centre de Paris. Pour les événements au Stade de France, réservez votre taxi retour à l'avance sur TaxiNeo car la demande explose à la sortie des matchs et concerts. Depuis Saint-Denis, CDG est à seulement 15-20 km, ce qui rend le taxi très compétitif. Le marché aux puces de Saint-Ouen est accessible en métro 4 (Porte de Clignancourt), mais le taxi est préférable avec des achats encombrants.",
    enConseils: "To save in Seine-Saint-Denis, RER B connects the department to CDG in 15-25 minutes for around 10 euros. Metro line 13 links Saint-Denis to central Paris. For events at the Stade de France, book your return taxi in advance on TaxiNeo as demand surges after matches and concerts. From Saint-Denis, CDG is only 15-20 km away, making a taxi very competitive. The Saint-Ouen flea market is accessible via metro 4 (Porte de Clignancourt), but a taxi is preferable when carrying bulky purchases.",
    frBonASavoir: "Les taxis du 93 acceptent la carte bancaire. Le Stade de France dispose de zones de dépose taxi dédiées. L'aéroport du Bourget n'a pas de transport en commun direct, le taxi y est indispensable. Le trajet Saint-Denis-CDG dure 20 à 40 minutes selon la circulation sur l'A1. Les jours de Salon du Bourget, prévoyez un temps de trajet rallongé. Demandez toujours un reçu.",
    enBonASavoir: "Taxis in the 93 accept card payment. The Stade de France has dedicated taxi drop-off areas. Le Bourget Airport has no direct public transport, making taxis essential. The Saint-Denis-to-CDG journey takes 20 to 40 minutes depending on traffic on the A1. On Paris Air Show days, allow extra travel time. Always ask for a receipt.",
    grid: [
      { label: "Saint-Denis → CDG", day: "25 — 35 €", night: "29 — 40 €", dayEn: "€25 — €35", nightEn: "€29 — €40" },
      { label: "Bobigny → Paris", day: "20 — 30 €", night: "23 — 35 €", dayEn: "€20 — €30", nightEn: "€23 — €35" },
      { label: "Montreuil → Orly", day: "30 — 40 €", night: "35 — 46 €", dayEn: "€30 — €40", nightEn: "€35 — €46" },
    ] },
  { slug: "tarif-taxi-94", title: "Tarif Taxi Val-de-Marne (94)", type: "departement", lat: 48.78, lng: 2.47,
    frTitle: "Tarif Taxi Val-de-Marne (94)", enTitle: "Val-de-Marne (94) Taxi Fares", frDesc: "Tarifs taxi dans le Val-de-Marne (94). Prix vers Paris, Orly, CDG et les villes du département.", enDesc: "Taxi fares in Val-de-Marne (94). Prices to Paris, Orly, CDG and department towns.",
    frIntro: "Le Val-de-Marne (94), au sud-est de Paris, abrite Créteil (préfecture), le bois de Vincennes avec son château royal et le Marché d'Intérêt National (MIN) de Rungis, plus grand marché de produits frais au monde. L'aéroport d'Orly est partiellement situé sur le département. L'A86 traverse le Val-de-Marne et le métro 8 dessert Créteil. Le RER A passe par Vincennes, Fontenay et Nogent. Le département accueille aussi le parc zoologique de Paris (Vincennes). Les taxis du 94 appliquent les tarifs franciliens réglementés avec les tarifs B et C selon l'heure. TaxiNeo propose des prix fixes pour tous les trajets dans le Val-de-Marne.",
    enIntro: "Val-de-Marne (94), southeast of Paris, is home to Créteil (the department capital), the Bois de Vincennes with its royal château and the Rungis International Market (MIN), the world's largest fresh produce market. Orly Airport is partly located in the department. The A86 motorway crosses Val-de-Marne and metro line 8 serves Créteil. RER A passes through Vincennes, Fontenay and Nogent. The department also hosts the Paris Zoological Park (Vincennes). Taxis in the 94 apply regulated Île-de-France rates B and C depending on the time. TaxiNeo offers fixed prices for all Val-de-Marne journeys.",
    frConseils: "Pour économiser dans le Val-de-Marne, le métro 8 relie Créteil à Paris (Opéra) en 30 minutes pour 2,15 €. Le RER A dessert Vincennes en 10 minutes depuis Châtelet. Pour Orly depuis Créteil, le bus 393 puis l'OrlyVal sont possibles mais lents : le taxi direct coûte 20-30 € et gagne du temps. Pour CDG depuis Vincennes, le RER A jusqu'à Châtelet puis le RER B est envisageable, mais le taxi direct évite les correspondances avec bagages. Évitez l'A86 aux heures de pointe. Réservez sur TaxiNeo pour un prix fixe garanti.",
    enConseils: "To save in Val-de-Marne, metro line 8 connects Créteil to Paris (Opéra) in 30 minutes for 2.15 euros. RER A serves Vincennes in 10 minutes from Châtelet. For Orly from Créteil, bus 393 then OrlyVal are possible but slow: a direct taxi costs 20-30 euros and saves time. For CDG from Vincennes, RER A to Châtelet then RER B is feasible, but a direct taxi avoids transfers with luggage. Avoid the A86 at rush hour. Book on TaxiNeo for a guaranteed fixed price.",
    frBonASavoir: "Les taxis du Val-de-Marne acceptent la carte bancaire. Le MIN de Rungis dispose de stations taxi mais fonctionne la nuit (accès professionnel). Le château de Vincennes est accessible en métro 1. Le trajet Créteil-Orly dure 15 à 30 minutes. Le bois de Vincennes est le plus grand espace vert de Paris. Demandez toujours un reçu pour vos courses.",
    enBonASavoir: "Val-de-Marne taxis accept card payment. The Rungis MIN has taxi ranks but operates at night (professional access). The Château de Vincennes is accessible via metro line 1. The Créteil-to-Orly journey takes 15 to 30 minutes. The Bois de Vincennes is the largest green space in Paris. Always ask for a receipt for your rides.",
    grid: [
      { label: "Créteil → Paris", day: "25 — 35 €", night: "29 — 40 €", dayEn: "€25 — €35", nightEn: "€29 — €40" },
      { label: "Créteil → Orly", day: "20 — 30 €", night: "23 — 35 €", dayEn: "€20 — €30", nightEn: "€23 — €35" },
      { label: "Vincennes → CDG", day: "45 — 60 €", night: "52 — 69 €", dayEn: "€45 — €60", nightEn: "€52 — €69" },
    ] },
  { slug: "tarif-taxi-95", title: "Tarif Taxi Val-d'Oise (95)", type: "departement", lat: 49.05, lng: 2.17,
    frTitle: "Tarif Taxi Val-d'Oise (95)", enTitle: "Val-d'Oise (95) Taxi Fares", frDesc: "Tarifs taxi dans le Val-d'Oise (95). Prix vers Paris, CDG, Orly et les villes du département.", enDesc: "Taxi fares in Val-d'Oise (95). Prices to Paris, CDG, Orly and department towns.",
    frIntro: "Le Val-d'Oise (95), au nord de l'Île-de-France, abrite une partie de l'aéroport CDG à Roissy-en-France, la ville nouvelle de Cergy-Pontoise et la station thermale d'Enghien-les-Bains avec son casino. Le RER A dessert Cergy et le RER D relie plusieurs villes du département à Paris. L'autoroute A15 connecte Cergy à La Défense et Paris. Le département est également traversé par l'A1 vers CDG et le nord. Les taxis du 95 appliquent les tarifs franciliens réglementés. La proximité avec Roissy rend les navettes aéroport fréquentes. TaxiNeo propose des prix fixes pour toutes les destinations du Val-d'Oise.",
    enIntro: "Val-d'Oise (95), in northern Île-de-France, partly hosts CDG Airport at Roissy-en-France, the new town of Cergy-Pontoise and the spa resort of Enghien-les-Bains with its casino. RER A serves Cergy and RER D connects several department towns to Paris. The A15 motorway links Cergy to La Défense and Paris. The department is also crossed by the A1 towards CDG and the north. Taxis in the 95 apply regulated Île-de-France rates. Proximity to Roissy makes airport shuttles frequent. TaxiNeo offers fixed prices for all Val-d'Oise destinations.",
    frConseils: "Pour économiser dans le Val-d'Oise, le RER A relie Cergy à Paris (Châtelet) en 45 minutes pour environ 7 €. Le RER D dessert Enghien, Montmorency et Sarcelles. Pour CDG depuis Cergy, l'A15 puis l'A1 permettent un trajet direct en taxi de 40-55 € selon la circulation. La navette Les Cars Air France n'existe plus, le taxi ou TaxiNeo sont les meilleures alternatives pour l'aéroport. Pour Enghien-les-Bains, le Transilien H rejoint Paris-Nord en 15 minutes. Réservez à l'avance sur TaxiNeo pour les retours de vols tardifs à CDG.",
    enConseils: "To save in Val-d'Oise, RER A connects Cergy to Paris (Châtelet) in 45 minutes for around 7 euros. RER D serves Enghien, Montmorency and Sarcelles. For CDG from Cergy, the A15 then A1 allow a direct taxi journey at 40-55 euros depending on traffic. The former Air France coach service no longer exists; a taxi or TaxiNeo are the best airport alternatives. For Enghien-les-Bains, Transilien H reaches Paris-Nord in 15 minutes. Book ahead on TaxiNeo for late-flight returns to CDG.",
    frBonASavoir: "Les taxis du Val-d'Oise acceptent la carte bancaire. Roissy-en-France dispose de nombreuses stations taxi à CDG. Enghien-les-Bains est la seule station thermale d'Île-de-France. Le trajet Cergy-Paris dure 40 à 60 minutes en taxi selon le trafic sur l'A15. L'Isle-Adam et Auvers-sur-Oise (village des Impressionnistes) sont des destinations touristiques accessibles en taxi. Un reçu est obligatoire.",
    enBonASavoir: "Val-d'Oise taxis accept card payment. Roissy-en-France has numerous taxi ranks at CDG. Enghien-les-Bains is the only spa town in Île-de-France. The Cergy-to-Paris journey takes 40 to 60 minutes by taxi depending on traffic on the A15. L'Isle-Adam and Auvers-sur-Oise (the Impressionists' village) are tourist destinations accessible by taxi. A receipt is mandatory.",
    grid: [
      { label: "Cergy → Paris", day: "45 — 60 €", night: "52 — 69 €", dayEn: "€45 — €60", nightEn: "€52 — €69" },
      { label: "Cergy → CDG", day: "40 — 55 €", night: "46 — 63 €", dayEn: "€40 — €55", nightEn: "€46 — €63" },
      { label: "Enghien → Paris", day: "25 — 35 €", night: "29 — 40 €", dayEn: "€25 — €35", nightEn: "€29 — €40" },
    ] },
  { slug: "tarif-taxi-78", title: "Tarif Taxi Yvelines (78)", type: "departement", lat: 48.8, lng: 1.9,
    frTitle: "Tarif Taxi Yvelines (78)", enTitle: "Yvelines (78) Taxi Fares", frDesc: "Tarifs taxi dans les Yvelines (78). Prix vers Paris, CDG, Orly, Versailles et les villes du département.", enDesc: "Taxi fares in Yvelines (78). Prices to Paris, CDG, Orly, Versailles and department towns.",
    frIntro: "Les Yvelines (78) abritent le Château de Versailles, monument le plus visité de France avec 15 millions de visiteurs par an, ainsi que Saint-Germain-en-Laye et sa terrasse surplombant Paris, et la forêt de Rambouillet. Le RER C dessert Versailles (Rive Gauche, Chantiers, Porchefontaine) et le RER A passe par Saint-Germain-en-Laye. La N12 et l'A13 relient le département à Paris et La Défense. Les taxis yvelinois appliquent les tarifs franciliens réglementés. Versailles est un point de départ fréquent pour CDG et Orly. Les courses touristiques vers le château génèrent une forte demande. TaxiNeo offre des prix fixes pour toutes les destinations des Yvelines.",
    enIntro: "Yvelines (78) is home to the Palace of Versailles, France's most visited monument with 15 million visitors per year, as well as Saint-Germain-en-Laye with its terrace overlooking Paris and the Rambouillet forest. RER C serves Versailles (Rive Gauche, Chantiers, Porchefontaine) and RER A passes through Saint-Germain-en-Laye. The N12 and A13 connect the department to Paris and La Défense. Yvelines taxis apply regulated Île-de-France rates. Versailles is a frequent departure point for CDG and Orly. Tourist rides to the palace generate high demand. TaxiNeo offers fixed prices for all Yvelines destinations.",
    frConseils: "Pour économiser dans les Yvelines, le RER C relie Versailles-Rive Gauche à Paris en 30 minutes pour environ 4 €. Le RER A dessert Saint-Germain-en-Laye en 35 minutes depuis Châtelet. Pour CDG depuis Versailles, comptez 70-90 € en taxi mais le trajet RER C + RER B avec correspondance est long et pénible avec des bagages. Le taxi est imbattable pour les familles. Évitez l'A13 les vendredis soirs et les week-ends d'été. Pour visiter le château de Versailles, un taxi depuis Paris est confortable mais le RER C est bien plus économique pour les voyageurs seuls.",
    enConseils: "To save in Yvelines, RER C connects Versailles-Rive Gauche to Paris in 30 minutes for around 4 euros. RER A serves Saint-Germain-en-Laye in 35 minutes from Châtelet. For CDG from Versailles, expect 70-90 euros by taxi, but the RER C + RER B connection is long and difficult with luggage. A taxi is unbeatable for families. Avoid the A13 on Friday evenings and summer weekends. To visit the Palace of Versailles, a taxi from Paris is comfortable but the RER C is far more economical for solo travellers.",
    frBonASavoir: "Les taxis des Yvelines acceptent la carte bancaire. Le Château de Versailles n'a pas de station taxi sur place, les taxis déposent Place d'Armes face au château. La gare de Versailles-Chantiers est desservie par le Transilien N vers Montparnasse. Rambouillet est à 50 km de Paris, le taxi y est utile pour les week-ends en forêt. Les pourboires ne sont pas obligatoires. Un reçu est fourni systématiquement.",
    enBonASavoir: "Yvelines taxis accept card payment. The Palace of Versailles has no on-site taxi rank; taxis drop off at Place d'Armes facing the palace. Versailles-Chantiers station is served by Transilien N to Montparnasse. Rambouillet is 50 km from Paris; a taxi is useful for forest weekends. Tipping is not mandatory. A receipt is provided as standard.",
    grid: [
      { label: "Versailles → Paris", day: "40 — 55 €", night: "46 — 63 €", dayEn: "€40 — €55", nightEn: "€46 — €63" },
      { label: "Versailles → CDG", day: "70 — 90 €", night: "81 — 104 €", dayEn: "€70 — €90", nightEn: "€81 — €104" },
      { label: "Saint-Germain → Paris", day: "30 — 40 €", night: "35 — 46 €", dayEn: "€30 — €40", nightEn: "€35 — €46" },
    ] },
  { slug: "tarif-taxi-nuit", title: "Tarif Taxi Nuit", type: "special", lat: 48.8566, lng: 2.3522,
    frTitle: "Tarif Taxi de Nuit", enTitle: "Night Taxi Fares", frDesc: "Tarifs taxi de nuit en France. Majoration, horaires, réglementation et astuces pour payer moins cher la nuit.", enDesc: "Night taxi fares in France. Surcharges, hours, regulations and tips for paying less at night.",
    frIntro: "En France, les tarifs taxi de nuit sont réglementés par arrêté ministériel. Le passage au tarif de nuit s'effectue à 19h et revient au tarif de jour à 7h. À Paris, le tarif B (nuit dans Paris) remplace le tarif A, soit une majoration d'environ 28 %. En banlieue, le tarif C (nuit hors Paris) s'applique avec une majoration pouvant atteindre 41 %. Le lumineux sur le toit du taxi change de couleur pour indiquer le tarif en cours : vert pour le tarif A, orange pour B, et les voyants latéraux s'allument. Le dimanche et les jours fériés, c'est le tarif D qui s'applique toute la journée. Les forfaits aéroport, eux, restent identiques de jour comme de nuit.",
    enIntro: "In France, night-time taxi fares are regulated by ministerial order. The switch to night rates happens at 7pm and returns to day rates at 7am. In Paris, rate B (night within Paris) replaces rate A, representing a surcharge of about 28%. In the suburbs, rate C (night outside Paris) applies with a surcharge that can reach 41%. The rooftop light on the taxi changes colour to indicate the current rate: green for rate A, orange for B, and side lights illuminate. On Sundays and public holidays, rate D applies all day long. Airport flat rates remain the same day and night.",
    frConseils: "Pour payer moins cher en taxi la nuit, réservez à l'avance sur TaxiNeo : le prix fixe ne change pas entre jour et nuit. Si vous prenez un taxi au compteur, sachez que les forfaits aéroport (CDG et Orly) ne sont pas majorés la nuit, c'est souvent le meilleur rapport qualité-prix. Après une soirée, partagez un taxi avec d'autres personnes pour diviser la note. Les Noctilien (bus de nuit RATP) circulent de minuit à 5h30 et offrent une alternative économique. Évitez les heures de changement de tarif (19h pile) où le compteur bascule. Pour les retours de restaurants ou spectacles, la réservation anticipée évite l'attente.",
    enConseils: "To pay less for a night taxi, book ahead on TaxiNeo: the fixed price does not change between day and night. If you take a metered taxi, note that airport flat rates (CDG and Orly) have no night surcharge, often making them the best value. After an evening out, share a taxi with others to split the bill. Noctilien (RATP night buses) run from midnight to 5.30am and offer a cheap alternative. Avoid the exact rate-change time (7pm) when the meter switches. For returns from restaurants or shows, advance booking avoids waiting.",
    frBonASavoir: "Le tarif de nuit est automatiquement appliqué par le compteur horokilométrique à 19h. Le chauffeur ne peut pas choisir le tarif manuellement. En cas de doute, vérifiez le lumineux sur le toit : il indique le tarif en cours. Le paiement par carte est obligatoire 24h/24. Les taxis de nuit sont les mêmes véhicules qu'en journée, il n'existe pas de flotte dédiée. Pour les trajets après 1h du matin, le temps d'attente peut être plus long.",
    enBonASavoir: "The night rate is automatically applied by the taximeter at 7pm. The driver cannot manually select the rate. If in doubt, check the rooftop light: it shows the current rate. Card payment is mandatory around the clock. Night taxis are the same vehicles as during the day; there is no dedicated night fleet. For journeys after 1am, waiting times may be longer.",
    grid: [
      { label: "Majoration nuit Paris", day: "Tarif A/B", night: "+28 à 41 %", dayEn: "Rate A/B", nightEn: "+28 to 41%" },
      { label: "Majoration nuit province", day: "Tarif jour", night: "+15 à 30 %", dayEn: "Day rate", nightEn: "+15 to 30%" },
      { label: "Horaires nuit", day: "7h — 19h", night: "19h — 7h", dayEn: "7am — 7pm", nightEn: "7pm — 7am" },
    ] },
  { slug: "tarif-taxi-dimanche", title: "Tarif Taxi Dimanche", type: "special", lat: 48.8566, lng: 2.3522,
    frTitle: "Tarif Taxi Dimanche & Jours Fériés", enTitle: "Sunday & Holiday Taxi Fares", frDesc: "Tarifs taxi le dimanche et jours fériés en France. Majoration, réglementation et prix fixes TaxiNeo.", enDesc: "Sunday and holiday taxi fares in France. Surcharges, regulations and TaxiNeo fixed prices.",
    frIntro: "Le dimanche et les jours fériés, les tarifs taxi sont majorés en France. À Paris, le tarif D s'applique toute la journée du dimanche, de minuit à minuit, ce qui représente le tarif le plus élevé du barème. En province, une majoration variable de 15 à 50 % peut être appliquée selon les arrêtés préfectoraux locaux. La France compte 11 jours fériés officiels : 1er janvier, lundi de Pâques, 1er mai, 8 mai, Ascension, lundi de Pentecôte, 14 juillet, 15 août, 1er novembre, 11 novembre et 25 décembre. Le Nouvel An (nuit du 31 décembre) cumule tarif de nuit et jour férié. Les forfaits aéroport restent identiques le dimanche.",
    enIntro: "On Sundays and public holidays, taxi fares are higher in France. In Paris, rate D applies all day Sunday, from midnight to midnight, representing the highest rate on the schedule. In the provinces, a variable surcharge of 15 to 50% may apply depending on local prefectural orders. France has 11 official public holidays: 1 January, Easter Monday, 1 May, 8 May, Ascension, Whit Monday, 14 July, 15 August, 1 November, 11 November and 25 December. New Year's Eve (night of 31 December) combines the night rate and public holiday rate. Airport flat rates remain the same on Sundays.",
    frConseils: "Pour éviter la majoration du dimanche, réservez un prix fixe sur TaxiNeo : nos tarifs ne changent pas le dimanche ni les jours fériés. Si vous prenez un taxi au compteur, les forfaits aéroport (CDG 56/65 €, Orly 35/41 €) ne sont pas majorés, même le dimanche. Le 14 juillet et le Nouvel An sont les jours les plus chers et les plus demandés : réservez impérativement à l'avance. Le 1er mai est le seul jour férié où certaines majorations sont légalement les plus élevées. Les week-ends prolongés (ponts) entraînent aussi une forte demande. Le dimanche matin tôt (avant 7h) cumule tarif de nuit et tarif dimanche.",
    enConseils: "To avoid the Sunday surcharge, book a fixed price on TaxiNeo: our rates do not change on Sundays or public holidays. If you take a metered taxi, airport flat rates (CDG 56/65 euros, Orly 35/41 euros) are not surcharged, even on Sundays. Bastille Day (14 July) and New Year's Eve are the most expensive and busiest days: book well in advance. 1 May is the only holiday where certain surcharges are legally at their highest. Long weekends (bank holiday bridges) also cause high demand. Early Sunday morning (before 7am) combines both the night rate and Sunday rate.",
    frBonASavoir: "Le tarif dimanche est automatiquement activé par le compteur. Le chauffeur ne fixe pas le tarif manuellement. Les 11 jours fériés français sont traités comme des dimanches pour le tarif taxi. Le paiement par carte est obligatoire tous les jours. En cas de doute sur le tarif appliqué, le lumineux sur le toit et l'affichage du compteur indiquent la lettre du tarif (A, B, C ou D). Les taxis sont moins nombreux les jours fériés, prévoyez un temps d'attente plus long.",
    enBonASavoir: "The Sunday rate is automatically activated by the meter. The driver does not set the rate manually. France's 11 public holidays are treated the same as Sundays for taxi fares. Card payment is mandatory every day. If in doubt about the rate applied, the rooftop light and meter display show the rate letter (A, B, C or D). Fewer taxis operate on public holidays, so expect longer waiting times.",
    grid: [
      { label: "Majoration dimanche Paris", day: "—", night: "Tarif D toute la journée", dayEn: "—", nightEn: "Rate D all day" },
      { label: "Majoration jours fériés", day: "—", night: "+15 à 50 %", dayEn: "—", nightEn: "+15 to 50%" },
      { label: "Prix fixe TaxiNeo", day: "Identique", night: "Identique", dayEn: "Same", nightEn: "Same" },
    ] },
  { slug: "tarif-taxi-bagages", title: "Tarif Taxi Bagages", type: "special", lat: 48.8566, lng: 2.3522,
    frTitle: "Supplément Bagages Taxi", enTitle: "Taxi Luggage Surcharges", frDesc: "Supplément bagages en taxi : règles, tarifs et ce que dit la loi. Zéro supplément avec TaxiNeo.", enDesc: "Taxi luggage surcharges: rules, fares and what the law says. Zero surcharge with TaxiNeo.",
    frIntro: "La réglementation française autorise les taxis à facturer un supplément bagages, mais celui-ci est strictement encadré. Les trois premiers bagages (de taille standard, type valise cabine ou valise soute) sont gratuits et doivent être transportés sans frais. À partir du quatrième bagage, un supplément maximum de 2 € par bagage supplémentaire peut être appliqué. Les poussettes pliées sont assimilées à des bagages standards et sont donc gratuites. Les équipements sportifs encombrants comme les skis, vélos ou planches de surf peuvent faire l'objet d'un supplément si le chauffeur accepte de les transporter. Le chauffeur peut refuser un bagage qui ne rentre pas dans le coffre. Avec TaxiNeo, aucun supplément bagage n'est facturé.",
    enIntro: "French regulations allow taxis to charge a luggage surcharge, but it is strictly regulated. The first three bags (standard size, such as cabin or checked luggage) are free and must be carried at no charge. From the fourth bag onwards, a maximum supplement of 2 euros per additional bag may apply. Folded pushchairs are treated as standard luggage and are therefore free. Bulky sports equipment such as skis, bicycles or surfboards may incur a surcharge if the driver agrees to transport them. The driver may refuse luggage that does not fit in the boot. With TaxiNeo, no luggage surcharge is ever charged.",
    frConseils: "Pour éviter les frais de bagages en taxi, limitez-vous à trois valises par course ou réservez sur TaxiNeo où tous les bagages sont inclus. Si vous voyagez avec des skis ou un vélo pliant, prévenez lors de la réservation pour que le chauffeur prépare un véhicule adapté (break ou monospace). Pour les déménagements légers, un taxi n'est pas adapté : préférez un utilitaire. Les poussettes pliées ne comptent pas comme bagage supplémentaire. Si vous avez plus de 4 grosses valises, demandez un véhicule type van lors de votre réservation TaxiNeo. Les sacs à dos et petits sacs à main ne sont jamais comptabilisés.",
    enConseils: "To avoid luggage fees in a taxi, limit yourself to three suitcases per ride or book on TaxiNeo where all luggage is included. If travelling with skis or a folding bicycle, mention it when booking so the driver can prepare a suitable vehicle (estate or minivan). For light moves, a taxi is not suitable: prefer a van hire. Folded pushchairs do not count as extra luggage. If you have more than 4 large suitcases, request a van-type vehicle when booking with TaxiNeo. Backpacks and small handbags are never counted.",
    frBonASavoir: "Le supplément bagages doit figurer sur le reçu détaillé. Si un chauffeur facture un supplément pour les 3 premiers bagages, c'est illégal : notez son numéro de licence. Les forfaits aéroport incluent les bagages sans supplément. Les animaux en cage de transport ne sont pas des bagages et relèvent d'une réglementation séparée. En cas de dommage à un bagage, le chauffeur engage sa responsabilité civile professionnelle.",
    enBonASavoir: "The luggage surcharge must appear on the detailed receipt. If a driver charges for the first 3 bags, it is illegal: note their licence number. Airport flat rates include luggage with no surcharge. Animals in carriers are not classed as luggage and fall under separate regulations. In case of damage to luggage, the driver's professional liability insurance applies.",
    grid: [
      { label: "Bagage standard", day: "Gratuit", night: "Gratuit", dayEn: "Free", nightEn: "Free" },
      { label: "Bagage volumineux", day: "0 — 3 €", night: "0 — 3 €", dayEn: "€0 — €3", nightEn: "€0 — €3" },
      { label: "TaxiNeo — tous bagages", day: "Gratuit", night: "Gratuit", dayEn: "Free", nightEn: "Free" },
    ] },
  { slug: "tarif-taxi-animaux", title: "Tarif Taxi Animaux", type: "special", lat: 48.8566, lng: 2.3522,
    frTitle: "Taxi avec Animaux : Tarifs et Règles", enTitle: "Taxi with Pets: Fares & Rules", frDesc: "Prendre un taxi avec un animal : suppléments, règles et droits des passagers.", enDesc: "Taking a taxi with a pet: surcharges, rules and passenger rights.",
    frIntro: "Voyager en taxi avec un animal de compagnie en France est encadré par la réglementation. Les petits animaux (chats, petits chiens, lapins) doivent obligatoirement être transportés dans une caisse ou un sac de transport fermé, posé au sol du véhicule. Dans ce cas, aucun supplément ne peut être facturé. Les chiens de taille moyenne ou grande peuvent voyager sur la banquette arrière avec une couverture de protection, moyennant un éventuel supplément de 0 à 5 €. Les chiens guides d'aveugle et chiens d'assistance doivent obligatoirement être acceptés gratuitement : tout refus est passible d'une amende. Le chauffeur peut refuser un animal non contenu ou agressif pour des raisons de sécurité.",
    enIntro: "Travelling by taxi with a pet in France is regulated. Small animals (cats, small dogs, rabbits) must be carried in a closed carrier or bag, placed on the vehicle floor. In this case, no surcharge may be charged. Medium or large dogs may travel on the back seat with a protective cover, with a possible surcharge of 0 to 5 euros. Guide dogs and assistance dogs must be accepted free of charge: any refusal is subject to a fine. The driver may refuse an uncontained or aggressive animal for safety reasons.",
    frConseils: "Pour voyager sereinement en taxi avec votre animal, prévenez toujours lors de la réservation sur TaxiNeo. Munissez-vous d'une caisse de transport adaptée pour les petits animaux : c'est obligatoire et cela évite tout supplément. Pour les chiens moyens, une couverture ou un drap protège la banquette et rassure le chauffeur. Les races de chiens de catégorie 1 et 2 (dites dangereuses) doivent être muselées dans les transports. Évitez les heures de pointe où le stress peut agiter votre animal. Pour les longs trajets, prévoyez de l'eau et une pause si nécessaire. Le vétérinaire peut prescrire un calmant pour les animaux anxieux.",
    enConseils: "To travel smoothly in a taxi with your pet, always mention it when booking on TaxiNeo. Bring a suitable carrier for small animals: it is mandatory and avoids any surcharge. For medium dogs, a blanket or sheet protects the seat and reassures the driver. Category 1 and 2 dog breeds (classified as dangerous) must be muzzled in transport. Avoid rush hours when stress can agitate your pet. For long journeys, bring water and plan a break if needed. Your vet can prescribe a sedative for anxious animals.",
    frBonASavoir: "Le refus d'un chien guide d'aveugle est puni d'une amende pouvant atteindre 450 €. Les animaux exotiques (reptiles, oiseaux) peuvent être refusés. Le chauffeur n'est pas tenu de nettoyer le véhicule après le transport d'un animal, mais un supplément nettoyage de 5 € maximum peut être demandé si l'animal salit. Aucun document vétérinaire n'est exigé pour un trajet en taxi national. TaxiNeo accepte tous les animaux de compagnie sans supplément.",
    enBonASavoir: "Refusing a guide dog is punishable by a fine of up to 450 euros. Exotic animals (reptiles, birds) may be refused. The driver is not required to clean the vehicle after carrying an animal, but a cleaning surcharge of up to 5 euros may be charged if the animal soils the car. No veterinary documents are required for a domestic taxi journey. TaxiNeo accepts all pets with no surcharge.",
    grid: [
      { label: "Petit animal en cage", day: "Gratuit", night: "Gratuit", dayEn: "Free", nightEn: "Free" },
      { label: "Chien moyen/grand", day: "0 — 5 €", night: "0 — 5 €", dayEn: "€0 — €5", nightEn: "€0 — €5" },
      { label: "Chien guide d'aveugle", day: "Gratuit (obligatoire)", night: "Gratuit", dayEn: "Free (mandatory)", nightEn: "Free" },
    ] },
];

// Build full tarif objects from simplified data
for (const t of simpleTarifs) {
  tarifs.push({
    slug: t.slug,
    title: t.title,
    type: t.type,
    lat: t.lat,
    lng: t.lng,
    i18n: {
      fr: {
        metaTitle: `${t.frTitle} 2026 : prix, barème taxi | TaxiNeo`,
        metaDescription: t.frDesc,
        heroTitle: t.frTitle,
        heroSubtitle: `Tous les tarifs taxi en 2026 : barème officiel, forfaits et prix fixes TaxiNeo.`,
        description: t.frDesc,
        grid: t.grid.map((g) => ({ label: g.label, priceDay: g.day, priceNight: g.night })),
        faq: [
          { question: `Quel est le tarif taxi pour ${t.title.replace("Tarif Taxi ", "")} ?`, answer: `Les tarifs varient selon la distance et l'heure. Consultez notre grille tarifaire ci-dessus pour les prix détaillés.` },
          { question: "Les prix sont-ils garantis ?", answer: "Avec TaxiNeo, tous les prix sont fixés à la réservation et garantis. Pas de compteur, pas de surprise." },
          { question: "Y a-t-il un supplément pour les bagages ?", answer: "Non, aucun supplément bagage avec TaxiNeo. Nos véhicules accueillent jusqu'à 4 passagers avec leurs valises." },
          { question: "Comment réserver ?", answer: "Réservez en ligne sur taxineo.fr ou par téléphone. Réservation possible jusqu'à 30 jours à l'avance." },
        ],
        ...(t.frIntro && { introduction: t.frIntro }),
        ...(t.frConseils && { conseils: t.frConseils }),
        ...(t.frBonASavoir && { bonASavoir: t.frBonASavoir }),
      },
      en: {
        metaTitle: `${t.enTitle} 2026: all rates & prices | TaxiNeo`,
        metaDescription: t.enDesc,
        heroTitle: t.enTitle,
        heroSubtitle: `All taxi fares in 2026: official rates, flat rates and TaxiNeo fixed prices.`,
        description: t.enDesc,
        grid: t.grid.map((g) => ({ label: g.label, priceDay: g.dayEn, priceNight: g.nightEn })),
        faq: [
          { question: `What is the taxi fare for ${t.enTitle.replace(" Taxi Fares", "")}?`, answer: `Fares vary by distance and time. See our fare grid above for detailed prices.` },
          { question: "Are prices guaranteed?", answer: "With TaxiNeo, all prices are set at booking and guaranteed. No meter, no surprises." },
          { question: "Is there a luggage surcharge?", answer: "No, no luggage surcharge with TaxiNeo. Our vehicles accommodate up to 4 passengers with suitcases." },
          { question: "How to book?", answer: "Book online at taxineo.fr or by phone. Booking available up to 30 days in advance." },
        ],
        ...(t.enIntro && { introduction: t.enIntro }),
        ...(t.enConseils && { conseils: t.enConseils }),
        ...(t.enBonASavoir && { bonASavoir: t.enBonASavoir }),
      },
    },
  });
}

export function getTarifBySlug(slug: string): Tarif | undefined {
  return tarifs.find((t) => t.slug === slug);
}

export function getTarifsByType(type: Tarif["type"]): Tarif[] {
  return tarifs.filter((t) => t.type === type);
}
