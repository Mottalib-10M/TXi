import type { Trajet } from "./trajets";

function hdsSXRoute(
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
    hub: "hds-sud-ext",
    i18n: { fr: frMeta, en: enMeta },
  };
}

export const trajetsHdsSudExt: Trajet[] = [
  // ═══════════════════════════════════════════════════════════
  // FONTENAY-AUX-ROSES (24 000 hab.) — CEA, Roseraie, RER B
  // ═══════════════════════════════════════════════════════════
  hdsSXRoute(
    "taxi-fontenay-aux-roses-orly", "Fontenay-aux-Roses", "Aéroport d'Orly",
    48.7896, 2.2915, 48.7262, 2.3652,
    12, 15, "20 — 30 €", "aeroport",
    ["D906", "A6", "CEA Paris-Saclay", "Roseraie", "RER B"],
    20, 30, 42, 25, "D906 / A6", "0 €", "fontenay-aux-roses", "aeroport-orly",
    ["taxi-fontenay-aux-roses-cdg", "taxi-sceaux-orly", "taxi-bourg-la-reine-orly", "taxi-antony-orly", "taxi-meudon-orly"],
    ["aeroport", "orly", "fontenay-aux-roses", "hauts-de-seine", "cea", "roseraie", "rer-b"],
    {
      metaTitle: "Taxi Fontenay-aux-Roses → Orly | 12 km, dès 20 € | TaxiNeo",
      metaDescription: "Taxi Fontenay-aux-Roses vers Orly en 15 min via D906/A6. Prix fixe 20-30 €, bagages inclus. CEA, Roseraie. Réservation 24h/24.",
      heroTitle: "Taxi Fontenay-aux-Roses → Orly",
      heroSubtitle: "Transfert Fontenay-aux-Roses → Aéroport d'Orly au prix fixe de 20 — 30 €. 12 km, 15 min via la D906.",
      description: "L'aéroport d'Orly est à 15 min de Fontenay-aux-Roses via la D906 et l'A6.",
      routeDescription: "L'itinéraire emprunte la D906 vers le sud puis rejoint l'A6 direction Orly.",
      introduction: "Fontenay-aux-Roses est une commune résidentielle de 24 000 habitants nichée dans le sud des Hauts-de-Seine, à la lisière de la Vallée de la Bièvre. La ville doit son nom aux cultures de roses qui firent sa réputation dès le XVIIe siècle, tradition perpétuée par la magnifique Roseraie municipale où plus de 3 000 rosiers de 300 variétés différentes embellissent le parc du Panorama chaque printemps. Fontenay abrite également le site historique du CEA Paris-Saclay, centre de recherche nucléaire fondé en 1946 sous l'impulsion de Frédéric Joliot-Curie, qui emploie encore aujourd'hui près de 5 000 chercheurs et ingénieurs travaillant sur les énergies du futur et la recherche fondamentale. La gare RER B de Fontenay-aux-Roses relie la ville au centre de Paris en 25 minutes, mais les correspondances vers Orly imposent un détour fastidieux par Antony et l'Orlyval. Le taxi depuis Fontenay-aux-Roses vers Orly est la solution la plus directe et la plus confortable : prise en charge à domicile, dans le quartier résidentiel de Scarron, près de la gare ou au pied du CEA, votre chauffeur vous conduit en 15 minutes au terminal de votre vol. Service disponible 24h/24, idéal pour les chercheurs du CEA en déplacement et les familles du quartier pavillonnaire.",
      itineraire: "Votre chauffeur quitte Fontenay-aux-Roses par la D906 (avenue Gabriel Péri) en direction du sud. Cette départementale traverse le plateau de Châtillon et longe les communes de Bagneux et Cachan avant de rejoindre l'échangeur de l'A6, l'autoroute du Soleil. La bretelle vers Orly est parfaitement fléchée. Alternativement, en cas de travaux sur la D906, le chauffeur peut emprunter la D920 via Sceaux puis Antony pour rejoindre l'A6 un peu plus au sud. L'ensemble du parcours est gratuit — aucun péage à acquitter. En conditions normales de circulation, le trajet dure 15 minutes. Aux heures de pointe du matin (7h30-9h) et du soir (17h-19h), la traversée de Bagneux et l'accès à l'A6 peuvent ralentir le parcours jusqu'à 25 minutes. Le chauffeur adapte son itinéraire en temps réel grâce au GPS Waze pour éviter les éventuels bouchons sur la D906 au niveau du carrefour de la Bourgogne à Bagneux, point de congestion connu.",
      conseils: "Pour les vols matinaux depuis Orly (avant 7h30), prévoyez un départ de Fontenay vers 5h30 — la D906 est dégagée à cette heure et le trajet ne prendra que 12 à 14 minutes. Précisez votre terminal (Orly 1, 2, 3 ou 4) lors de la réservation pour une dépose au plus près du hall d'enregistrement. Si vous résidez dans le quartier de Scarron (sud de la commune), le chauffeur rejoint directement la D986 vers Châtenay-Malabry puis l'A6, un itinéraire parfois plus rapide. Pour le retour depuis Orly, communiquez votre numéro de vol : le chauffeur suit votre atterrissage en temps réel et vous attend dans le hall des arrivées avec votre nom affiché. Le parking d'Orly coûte 25-30 €/jour — un aller-retour en taxi (40-60 €) est donc plus économique dès deux jours d'absence. Ne manquez pas la Roseraie de Fontenay, gratuite et ouverte d'avril à octobre, un havre de paix unique en Île-de-France.",
      comparaisonTransport: "Le RER B Fontenay-aux-Roses → Antony puis Orlyval = 35-40 min, environ 12 € (RER + Orlyval). Le taxi à 20-30 € est direct en 15 min, sans correspondance ni escaliers avec valises. À 2-3 passagers (7-15 €/pers.), le taxi est nettement plus avantageux que le RER B + Orlyval.",
      faq: [
        { question: "Quel est le prix du taxi Fontenay-aux-Roses → Orly ?", answer: "20-30 € en berline, 42 € en van. Tarif fixe, aucun péage, bagages inclus." },
        { question: "Combien de temps dure le trajet ?", answer: "15 min en conditions normales, 25 min aux heures de pointe." },
        { question: "Le chauffeur vient me chercher au CEA ?", answer: "Oui, prise en charge à l'entrée du CEA Paris-Saclay ou à toute adresse de Fontenay." },
        { question: "Y a-t-il un transport direct Fontenay-Orly ?", answer: "Non. RER B + Orlyval = 35-40 min avec correspondance à Antony. Le taxi est direct en 15 min." },
        { question: "Peut-on réserver pour un vol très tôt ?", answer: "Oui, service dès 4h du matin. Réservez la veille pour garantir la disponibilité." }
      ],
    },
    {
      metaTitle: "Taxi Fontenay-aux-Roses → Orly | 12 km, from €20 | TaxiNeo",
      metaDescription: "Taxi Fontenay-aux-Roses to Orly in 15 min via D906/A6. Fixed price €20-30, luggage included. CEA, Rose Garden. Book 24/7.",
      heroTitle: "Taxi Fontenay-aux-Roses → Orly",
      heroSubtitle: "Your Fontenay-aux-Roses → Orly Airport transfer at €20 — €30. 12 km, 15 min via the D906.",
      description: "Orly Airport is 15 min from Fontenay-aux-Roses via the D906 and A6.",
      routeDescription: "Via the D906 south then the A6 motorway to Orly.",
      introduction: "Fontenay-aux-Roses is a residential commune of 24,000 inhabitants in the southern Hauts-de-Seine, on the edge of the Bièvre Valley. The town owes its name to the rose cultivation that made it famous since the 17th century, a tradition preserved in the stunning Roseraie municipale (Municipal Rose Garden), home to over 3,000 rose bushes of 300 varieties. Fontenay also hosts the historic CEA Paris-Saclay nuclear research centre, founded in 1946 under Frédéric Joliot-Curie, employing some 5,000 researchers today. The RER B station connects to central Paris in 25 minutes, but reaching Orly by public transport requires a detour via Antony and the Orlyval shuttle. The taxi from Fontenay is the most direct option: door-to-door pickup from the Scarron residential area, near the station or at the CEA entrance, with a 15-minute ride to your Orly terminal. Available 24/7, ideal for CEA researchers on business trips and families alike.",
      itineraire: "Your driver leaves Fontenay-aux-Roses via the D906 (avenue Gabriel Péri) heading south through Bagneux and Cachan to the A6 motorway interchange. The Orly exit is clearly signposted. If the D906 is congested, the driver can take the D920 via Sceaux and Antony. No tolls. Allow 15 min normally, up to 25 min in rush hour (7:30-9am, 5-7pm). The driver uses real-time GPS to avoid the Bagneux Bourgogne junction, a known congestion point.",
      conseils: "For early morning flights (before 7:30am), leave Fontenay around 5:30am — the D906 is clear and the trip takes just 12-14 min. Specify your terminal (Orly 1-4) when booking. From the Scarron district, the driver may use the D986 via Châtenay-Malabry for a faster route. For returns, share your flight number: the driver tracks your landing in real time. Orly parking costs €25-30/day — a taxi round trip (€40-60) is cheaper from 2 days. Don't miss the Roseraie, free and open April-October.",
      comparaisonTransport: "RER B to Antony then Orlyval = 35-40 min, ~€12. Taxi at €20-30 direct in 15 min, no changes. For 2-3 passengers (€7-15/person), taxi is far better value than RER B + Orlyval.",
      faq: [
        { question: "How much is the taxi to Orly?", answer: "€20-30 sedan, €42 van. Fixed fare, no tolls, luggage included." },
        { question: "How long is the ride?", answer: "15 min normally, 25 min in rush hour." },
        { question: "Pick-up at the CEA?", answer: "Yes, pick-up at CEA Paris-Saclay entrance or any Fontenay address." },
        { question: "Direct public transport?", answer: "No. RER B + Orlyval = 35-40 min with a change at Antony. Taxi: direct, 15 min." },
        { question: "Early morning flights?", answer: "Yes, service from 4am. Book the night before." }
      ],
    }
  ),

  hdsSXRoute(
    "taxi-fontenay-aux-roses-cdg", "Fontenay-aux-Roses", "Aéroport CDG",
    48.7896, 2.2915, 49.0097, 2.5479,
    35, 40, "65 — 85 €", "aeroport",
    ["A1", "RER B", "CEA", "Roissy", "Hauts-de-Seine"],
    65, 85, 110, 60, "A86 / A1", "~4 €", "fontenay-aux-roses", "aeroport-cdg",
    ["taxi-fontenay-aux-roses-orly", "taxi-sceaux-cdg", "taxi-bourg-la-reine-cdg", "taxi-antony-cdg", "taxi-meudon-cdg"],
    ["aeroport", "cdg", "roissy", "fontenay-aux-roses", "hauts-de-seine", "cea", "rer-b"],
    {
      metaTitle: "Taxi Fontenay-aux-Roses → CDG | 35 km, dès 65 € | TaxiNeo",
      metaDescription: "Taxi Fontenay-aux-Roses vers Roissy CDG en 40 min. Prix fixe 65-85 €, péages inclus. CEA, Roseraie. Service 24h/24.",
      heroTitle: "Taxi Fontenay-aux-Roses → CDG",
      heroSubtitle: "Transfert Fontenay-aux-Roses → Aéroport Charles de Gaulle au prix fixe de 65 — 85 €. 35 km, direct.",
      description: "L'aéroport CDG est à 40 min de Fontenay-aux-Roses via l'A86 et l'A1.",
      routeDescription: "L'itinéraire rejoint l'A86 puis l'A1 direction Roissy.",
      introduction: "Le transfert en taxi entre Fontenay-aux-Roses et l'aéroport Charles de Gaulle est un trajet fréquemment emprunté par les chercheurs et ingénieurs du CEA Paris-Saclay, dont le site historique se trouve au cœur de la commune. Fondé en 1946 par Frédéric Joliot-Curie pour développer les applications de l'énergie atomique, le centre de Fontenay-aux-Roses a été l'un des premiers laboratoires nucléaires français. Aujourd'hui, les 5 000 collaborateurs du site voyagent régulièrement vers des conférences internationales via CDG, premier aéroport français avec plus de 70 millions de passagers et 300 destinations desservies. Fontenay-aux-Roses, ville de 24 000 habitants, conserve un charme pavillonnaire remarquable, notamment dans le quartier de Scarron et le long de la rue Boucicaut. La Roseraie municipale, héritière de la tradition horticole séculaire, reste le symbole de cette commune dont le nom même évoque les roses. Le RER B dessert certes CDG depuis la gare de Fontenay, mais avec 50 minutes de trajet et de nombreux arrêts, le taxi reste la solution privilégiée pour les voyageurs avec bagages ou en horaires décalés.",
      itineraire: "Votre chauffeur quitte Fontenay-aux-Roses en empruntant la D920 vers le nord en direction de Châtillon, puis rejoint l'A86 (autoroute de contournement de Paris). L'A86 permet de contourner Paris par l'est ou par l'ouest selon le trafic en temps réel. La jonction avec l'A1 (autoroute du Nord) se fait au niveau de la Porte de la Chapelle ou via l'A3 selon l'itinéraire choisi. L'A1 mène directement aux terminaux de CDG, bien fléchés depuis l'autoroute. Les péages s'élèvent à environ 4 € sur ce parcours (inclus dans le tarif fixe). En conditions de circulation fluide, comptez 40 minutes. Aux heures de pointe (7h-9h30 et 17h-19h30), l'A86 et l'entrée de l'A1 sont souvent congestionnées : prévoyez alors 50 à 60 minutes. Votre chauffeur ajuste l'itinéraire en temps réel — il peut emprunter la Francilienne (N104) par Saclay et Marne-la-Vallée pour éviter le nord de Paris si nécessaire.",
      conseils: "Pour les vols internationaux depuis CDG, prévoyez d'arriver 3h avant le décollage. Depuis Fontenay-aux-Roses, partez donc 2h30 avant le vol en heures creuses, 3h en heures de pointe. Le meilleur créneau pour éviter les bouchons est avant 6h30 ou entre 10h et 15h30. Précisez votre terminal (T1, T2A-G ou T3) lors de la réservation : CDG est vaste, le terminal 2 seul compte sept sous-terminaux. Le RER B relie Fontenay-aux-Roses à CDG en théorie en 50 minutes, mais les retards fréquents, l'affluence aux heures de pointe et l'impossibilité de voyager confortablement avec de gros bagages rendent le taxi bien préférable. Pour le retour, le chauffeur vous attend en zone d'arrivée avec panneau nominatif, même en cas de retard de vol grâce au suivi en temps réel. Astuce : le parking longue durée de CDG coûte 20-30 €/jour — un aller-retour en taxi (130-170 €) devient rentable dès 5 jours d'absence.",
      comparaisonTransport: "RER B Fontenay-aux-Roses → CDG : 50 min, 11,45 €, mais souvent bondé et peu pratique avec valises. Taxi à 65-85 € : 40 min, direct, porte-à-porte. À 2 passagers (33-43 €/pers.), le taxi est très compétitif face au RER B inconfortable.",
      faq: [
        { question: "Quel est le prix du taxi Fontenay-aux-Roses → CDG ?", answer: "65-85 € en berline, 110 € en van. Tarif fixe, péages inclus (~4 €), bagages compris." },
        { question: "Combien de temps dure le trajet ?", answer: "40 min en conditions normales, 50-60 min aux heures de pointe." },
        { question: "Le RER B est-il une alternative ?", answer: "Le RER B fait Fontenay → CDG en ~50 min à 11,45 €, mais il est souvent bondé et peu adapté avec des valises. Le taxi est direct et confortable." },
        { question: "Prise en charge au CEA Paris-Saclay ?", answer: "Oui, le chauffeur vient à l'entrée du CEA ou à toute adresse de Fontenay-aux-Roses." },
        { question: "Van pour groupe ?", answer: "Oui, van 7 places à 110 €. Idéal pour les familles ou équipes en déplacement." }
      ],
    },
    {
      metaTitle: "Taxi Fontenay-aux-Roses → CDG | 35 km, from €65 | TaxiNeo",
      metaDescription: "Taxi Fontenay-aux-Roses to CDG Airport in 40 min. Fixed price €65-85, tolls included. CEA, Rose Garden. 24/7 service.",
      heroTitle: "Taxi Fontenay-aux-Roses → CDG",
      heroSubtitle: "Your Fontenay-aux-Roses → CDG Airport transfer at €65 — €85. 35 km, direct to Roissy.",
      description: "CDG Airport is 40 min from Fontenay-aux-Roses via the A86 and A1.",
      routeDescription: "Via the A86 ring road then the A1 motorway to Roissy-CDG.",
      introduction: "The taxi transfer from Fontenay-aux-Roses to Charles de Gaulle Airport is frequently used by researchers and engineers at the CEA Paris-Saclay nuclear research centre, whose historic site sits at the heart of the commune. Founded in 1946 by Nobel laureate Frédéric Joliot-Curie, the Fontenay centre was among France's first nuclear laboratories. Today, its 5,000 staff regularly travel to international conferences via CDG, France's largest airport with over 70 million annual passengers. Fontenay-aux-Roses (24,000 inhabitants) retains a charming suburban character, particularly in the Scarron district. The Municipal Rose Garden, heir to centuries of horticultural tradition, remains the town's symbol. While the RER B does connect Fontenay to CDG, the 50-minute ride with many stops makes the taxi the preferred option for travellers with luggage or working unusual hours.",
      itineraire: "Your driver heads north via the D920 through Châtillon to the A86 ring road, then joins the A1 (Northern Motorway) to CDG. Tolls ~€4 (included). The route choice — east or west around Paris — depends on real-time traffic. Allow 40 min normally, 50-60 min in rush hour (7-9:30am, 5-7:30pm). The driver may use the N104 via Saclay to bypass northern Paris if needed. CDG terminals are well signposted from the A1.",
      conseils: "For international flights, arrive 3h before departure — leave Fontenay 2.5h ahead (off-peak) or 3h (peak). Best windows: before 6:30am or 10am-3:30pm. Specify your terminal (T1, T2A-G, T3) when booking. RER B runs Fontenay-CDG in ~50 min (€11.45) but is often crowded and impractical with large luggage. For returns, the driver waits in arrivals with your name, tracking your flight in real time. CDG long-stay parking: €20-30/day — taxi round trip (€130-170) pays off from 5 days away.",
      comparaisonTransport: "RER B Fontenay → CDG: 50 min, €11.45, often crowded with luggage issues. Taxi €65-85: 40 min, direct, door-to-door. For 2 passengers (€33-43/person), taxi competes well with uncomfortable RER B.",
      faq: [
        { question: "How much to CDG?", answer: "€65-85 sedan, €110 van. Fixed fare, tolls included (~€4), luggage included." },
        { question: "How long?", answer: "40 min normally, 50-60 min in rush hour." },
        { question: "Is the RER B an alternative?", answer: "RER B takes ~50 min at €11.45 but is often crowded and impractical with suitcases. Taxi is direct and comfortable." },
        { question: "Pick-up at CEA?", answer: "Yes, at CEA Paris-Saclay entrance or any Fontenay address." },
        { question: "Van for groups?", answer: "Yes, 7-seat van at €110. Perfect for families or teams." }
      ],
    }
  ),

  // ═══════════════════════════════════════════════════════════
  // SCEAUX (20 000 hab.) — Parc de Sceaux, Le Nôtre, Hanami
  // ═══════════════════════════════════════════════════════════
  hdsSXRoute(
    "taxi-sceaux-orly", "Sceaux", "Aéroport d'Orly",
    48.7766, 2.2935, 48.7262, 2.3652,
    12, 15, "20 — 28 €", "aeroport",
    ["D920", "A6", "Parc de Sceaux", "Le Nôtre", "Hanami"],
    20, 28, 40, 25, "D920 / A6", "0 €", "sceaux", "aeroport-orly",
    ["taxi-sceaux-cdg", "taxi-fontenay-aux-roses-orly", "taxi-bourg-la-reine-orly", "taxi-antony-orly", "taxi-chatenay-malabry-orly"],
    ["aeroport", "orly", "sceaux", "hauts-de-seine", "parc-de-sceaux", "le-notre", "hanami"],
    {
      metaTitle: "Taxi Sceaux → Orly | 12 km, dès 20 € | TaxiNeo",
      metaDescription: "Taxi Sceaux vers Orly en 15 min via D920/A6. Prix fixe 20-28 €, bagages inclus. Parc de Sceaux, Lycée Lakanal. 24h/24.",
      heroTitle: "Taxi Sceaux → Orly",
      heroSubtitle: "Transfert Sceaux → Aéroport d'Orly au prix fixe de 20 — 28 €. 12 km, 15 min via la D920.",
      description: "L'aéroport d'Orly est à 15 min de Sceaux via la D920 et l'A6.",
      routeDescription: "L'itinéraire emprunte la D920 vers Antony puis rejoint l'A6 direction Orly.",
      introduction: "Sceaux est une commune de 20 000 habitants qui doit sa renommée mondiale au Parc de Sceaux, chef-d'œuvre paysager de 181 hectares dessiné par André Le Nôtre au XVIIe siècle pour Jean-Baptiste Colbert, ministre de Louis XIV. Ce domaine classé monument historique abrite un château reconstruit au XIXe siècle qui héberge le Musée de l'Île-de-France, l'Orangerie et le Pavillon de l'Aurore orné de peintures de Charles Le Brun. Chaque printemps, en avril, les cerisiers japonais du parc attirent des dizaines de milliers de visiteurs pour le Hanami, cet événement photographique devenu incontournable en Île-de-France, où les pelouses se couvrent de pique-niqueurs sous les nuages de fleurs roses et blanches. Sceaux est aussi réputée pour le Lycée Lakanal, fondé en 1885, l'une des institutions de classes préparatoires les plus prestigieuses de France, formant chaque année des centaines d'étudiants aux grandes écoles. La gare RER B de Sceaux relie Paris en 20 minutes, mais pour rejoindre Orly avec des bagages, le taxi reste la solution la plus efficace : 15 minutes, sans correspondance, au tarif fixe.",
      itineraire: "Votre chauffeur quitte Sceaux par la D920 (avenue de la Gare) en direction du sud vers Antony. Cette route départementale traverse le centre d'Antony avant de rejoindre l'échangeur de l'A6. L'accès aux terminaux d'Orly est direct depuis l'A6 via la sortie dédiée. L'ensemble du trajet est sans péage. En conditions normales, comptez 15 minutes. Si le centre d'Antony est encombré, votre chauffeur peut contourner par la D986 via Châtenay-Malabry pour rejoindre l'A6 un peu plus au sud, au niveau de Wissous. Aux heures de pointe (7h30-9h et 17h-19h), le rond-point de la Croix de Berny à Antony est un point de ralentissement connu : prévoyez alors 20 à 25 minutes. Le chauffeur utilise Waze pour adapter l'itinéraire en temps réel et garantir le trajet le plus rapide.",
      conseils: "Pendant la saison du Hanami (début avril), les abords du Parc de Sceaux sont très fréquentés le week-end — si vous avez un vol en fin d'après-midi, prévoyez une marge supplémentaire. Le marché historique de Sceaux (mercredi et samedi matin, place du Général de Gaulle) est l'un des plus anciens des Hauts-de-Seine. Pour un transfert matinal vers Orly, le départ avant 6h30 garantit un trajet de 12 minutes. Les étudiants de Lakanal et les familles apprécient le service pour les départs en vacances : n'hésitez pas à réserver un van pour les groupes. Pour le retour depuis Orly, communiquez votre numéro de vol : le chauffeur vous attend avec votre nom en zone d'arrivée, même en cas de retard. Conseil local : le restaurant La Table des Blot, étoilé Michelin, se situe à 5 minutes à pied de la gare de Sceaux.",
      comparaisonTransport: "RER B Sceaux → Antony puis Orlyval = 30-35 min, environ 12 €. Le taxi à 20-28 € est direct en 15 min, sans correspondance. À 2 passagers (10-14 €/pers.), le taxi est aussi économique que le RER B + Orlyval, en bien plus confortable.",
      faq: [
        { question: "Quel est le prix du taxi Sceaux → Orly ?", answer: "20-28 € en berline, 40 € en van. Tarif fixe, aucun péage, bagages inclus." },
        { question: "Combien de temps dure le trajet ?", answer: "15 min en conditions normales, 20-25 min aux heures de pointe." },
        { question: "Prise en charge près du Parc de Sceaux ?", answer: "Oui, à toute adresse de Sceaux : centre-ville, abords du Parc, quartier de la gare RER." },
        { question: "Le Hanami affecte-t-il le trajet ?", answer: "En avril, le week-end, les abords du Parc sont chargés. Prévoyez 5 min de plus." },
        { question: "Transfert Orly → Sceaux ?", answer: "Même tarif fixe. Chauffeur en zone d'arrivée avec votre nom, vol suivi en temps réel." }
      ],
    },
    {
      metaTitle: "Taxi Sceaux → Orly | 12 km, from €20 | TaxiNeo",
      metaDescription: "Taxi Sceaux to Orly in 15 min via D920/A6. Fixed price €20-28, luggage included. Parc de Sceaux, Lycée Lakanal. 24/7.",
      heroTitle: "Taxi Sceaux → Orly",
      heroSubtitle: "Your Sceaux → Orly Airport transfer at €20 — €28. 12 km, 15 min via the D920.",
      description: "Orly Airport is 15 min from Sceaux via the D920 and A6.",
      routeDescription: "Via the D920 through Antony then the A6 motorway to Orly.",
      introduction: "Sceaux is a commune of 20,000 residents renowned worldwide for the Parc de Sceaux, a 181-hectare masterpiece of landscape design by André Le Nôtre, created in the 17th century for Colbert, finance minister to Louis XIV. The estate, a classified historic monument, features a 19th-century rebuilt château housing the Musée de l'Île-de-France, the Orangerie, and the Pavilion of Dawn with paintings by Charles Le Brun. Each April, the park's Japanese cherry trees draw tens of thousands for the Hanami celebration — a photographic phenomenon that has become unmissable in the Paris region, with lawns filled with picnickers under clouds of pink and white blossoms. Sceaux is equally famous for Lycée Lakanal (founded 1885), one of France's most prestigious preparatory schools. The RER B connects to Paris in 20 minutes, but for reaching Orly with luggage, the taxi is the most efficient option: 15 minutes, no changes, fixed fare.",
      itineraire: "Your driver leaves Sceaux via the D920 south towards Antony, then joins the A6 to Orly. No tolls. 15 min normally. If central Antony is congested, the driver can detour via the D986 through Châtenay-Malabry. In rush hour (7:30-9am, 5-7pm), the Croix de Berny roundabout in Antony can add 5-10 min. Real-time GPS ensures the fastest route.",
      conseils: "During Hanami season (early April), roads near the park are busy on weekends — allow extra time for afternoon flights. The historic Sceaux market (Wednesday and Saturday mornings) is one of the oldest in Hauts-de-Seine. For early morning transfers, departing before 6:30am guarantees a 12-minute ride. For returns, share your flight number: driver waits in arrivals with your name, tracking in real time.",
      comparaisonTransport: "RER B Sceaux → Antony then Orlyval = 30-35 min, ~€12. Taxi at €20-28 direct in 15 min, no changes. For 2 passengers (€10-14/person), taxi matches RER B + Orlyval cost with far greater comfort.",
      faq: [
        { question: "How much?", answer: "€20-28 sedan, €40 van. Fixed fare, no tolls, luggage included." },
        { question: "How long?", answer: "15 min normally, 20-25 min in rush hour." },
        { question: "Pick-up near Parc de Sceaux?", answer: "Yes, from any Sceaux address: town centre, park area, RER station district." },
        { question: "Does Hanami affect the journey?", answer: "In April weekends, roads near the park are busy. Allow 5 extra minutes." },
        { question: "Orly → Sceaux transfer?", answer: "Same fixed fare. Driver in arrivals with your name, flight tracked in real time." }
      ],
    }
  ),

  hdsSXRoute(
    "taxi-sceaux-cdg", "Sceaux", "Aéroport CDG",
    48.7766, 2.2935, 49.0097, 2.5479,
    36, 40, "70 — 90 €", "aeroport",
    ["A1", "RER B", "Parc de Sceaux", "Roissy", "Lakanal"],
    70, 90, 118, 60, "A86 / A1", "~4 €", "sceaux", "aeroport-cdg",
    ["taxi-sceaux-orly", "taxi-fontenay-aux-roses-cdg", "taxi-bourg-la-reine-cdg", "taxi-antony-cdg", "taxi-meudon-cdg"],
    ["aeroport", "cdg", "roissy", "sceaux", "hauts-de-seine", "parc-de-sceaux", "lakanal"],
    {
      metaTitle: "Taxi Sceaux → CDG | 36 km, dès 70 € | TaxiNeo",
      metaDescription: "Taxi Sceaux vers Roissy CDG en 40 min. Prix fixe 70-90 €, péages inclus. Parc de Sceaux, Le Nôtre, Hanami. 24h/24.",
      heroTitle: "Taxi Sceaux → CDG",
      heroSubtitle: "Transfert Sceaux → Aéroport Charles de Gaulle au prix fixe de 70 — 90 €. 36 km, direct.",
      description: "L'aéroport CDG est à 40 min de Sceaux via l'A86 et l'A1.",
      routeDescription: "L'itinéraire rejoint l'A86 puis l'A1 direction Roissy-CDG.",
      introduction: "Le trajet en taxi de Sceaux vers l'aéroport Charles de Gaulle traverse toute l'Île-de-France, des collines boisées du sud des Hauts-de-Seine jusqu'aux plaines de la Plaine de France au nord. Sceaux, ville d'art et d'histoire de 20 000 habitants, est indissociable de son parc monumental dessiné par André Le Nôtre, le même architecte-paysagiste qui créa les jardins de Versailles. Le domaine de 181 hectares, avec ses parterres à la française, son Grand Canal, ses cascades et ses bosquets, offre l'un des plus beaux exemples de jardin classique en France. Le Lycée Lakanal, institution scolaire fondée sous la Troisième République en 1885, figure parmi les meilleures classes préparatoires aux grandes écoles du pays — ses anciens élèves incluent Alain-Fournier, auteur du Grand Meaulnes, et plusieurs prix Nobel. Le marché couvert de Sceaux, qui se tient depuis le XIXe siècle, est reconnu comme l'un des plus qualitatifs de la banlieue sud. Pour rallier CDG depuis cette commune paisible, le taxi offre un transfert sans stress : votre chauffeur gère le parcours urbain, les autoroutes et vous dépose directement à votre terminal.",
      itineraire: "Votre chauffeur quitte Sceaux par la D920 nord en direction de Bourg-la-Reine et Châtillon, puis rejoint l'A86 qui contourne Paris. Selon le trafic, il emprunte l'A86 par l'est (via Créteil) ou par l'ouest (via Vélizy) pour rejoindre l'A1 au nord de Paris. L'A1 mène directement aux terminaux de CDG. Les péages sont d'environ 4 € (inclus dans le tarif). Comptez 40 minutes en conditions fluides. Aux heures de pointe (7h-9h30 et 17h-19h30), l'A86 et le tronçon nord de l'A1 peuvent être encombrés : prévoyez 50 à 60 minutes. Votre chauffeur dispose de Waze et peut opter pour la N104 (Francilienne) via Massy et Évry si l'A86 est saturée — un itinéraire plus long en distance mais parfois plus rapide en temps. L'arrivée à CDG se fait au terminal de votre vol, au plus près du hall d'enregistrement.",
      conseils: "Depuis Sceaux, le RER B dessert directement CDG en 45-50 minutes pour 11,45 €. Cependant, la ligne est notoirement bondée aux heures de pointe, les retards sont fréquents et les escaliers des gares rendent le voyage pénible avec des valises encombrantes. Le taxi, bien que plus coûteux pour un voyageur seul, offre un confort incomparable. Pour les familles de Sceaux partant en vacances, le van 7 places à 118 € transporte parents, enfants et toutes les valises dans un seul véhicule. Astuce : les habitants du quartier des Blagis (sud de Sceaux) bénéficient d'un accès rapide à la D986 puis l'A6, un itinéraire alternatif vers l'A86 est. Réservez la veille pour les vols avant 7h. Le chauffeur suit votre vol en temps réel pour les retours.",
      comparaisonTransport: "RER B Sceaux → CDG : 45-50 min, 11,45 €, souvent bondé. Taxi à 70-90 € : 40 min, direct, confortable. À 2-3 passagers (23-45 €/pers.), le taxi rivalise avec le RER pour un confort supérieur.",
      faq: [
        { question: "Quel est le prix du taxi Sceaux → CDG ?", answer: "70-90 € en berline, 118 € en van. Tarif fixe, péages inclus (~4 €), bagages compris." },
        { question: "Le RER B Sceaux → CDG est-il pratique ?", answer: "Le RER B fait 45-50 min à 11,45 €, mais bondé et pénible avec valises. Le taxi est direct en 40 min." },
        { question: "Durée aux heures de pointe ?", answer: "50-60 min en pointe (7h-9h30, 17h-19h30). En dehors, 40 min." },
        { question: "Transfert pendant le Hanami ?", answer: "En avril, prévoir 5-10 min de plus le week-end en raison de l'affluence au Parc de Sceaux." },
        { question: "Van disponible ?", answer: "Oui, van 7 places à 118 €. Parfait pour familles ou groupes avec beaucoup de bagages." }
      ],
    },
    {
      metaTitle: "Taxi Sceaux → CDG | 36 km, from €70 | TaxiNeo",
      metaDescription: "Taxi Sceaux to CDG Airport in 40 min. Fixed price €70-90, tolls included. Parc de Sceaux, Hanami, Le Nôtre. 24/7.",
      heroTitle: "Taxi Sceaux → CDG",
      heroSubtitle: "Your Sceaux → CDG Airport transfer at €70 — €90. 36 km, direct to Roissy.",
      description: "CDG Airport is 40 min from Sceaux via the A86 and A1.",
      routeDescription: "Via the A86 ring road then the A1 motorway to CDG.",
      introduction: "The taxi journey from Sceaux to Charles de Gaulle Airport crosses the entire Île-de-France region, from the wooded hills of southern Hauts-de-Seine to the northern plains. Sceaux (20,000 inhabitants) is inseparable from its monumental park designed by André Le Nôtre, the same landscape architect who created the gardens of Versailles. The 181-hectare estate — with its French-style parterres, Grand Canal, cascades and groves — is one of France's finest classical gardens. Lycée Lakanal (founded 1885) ranks among France's top preparatory schools; alumni include Alain-Fournier, author of Le Grand Meaulnes. The covered market has been a local institution since the 19th century. For reaching CDG from this peaceful commune, the taxi offers a stress-free transfer: your driver handles urban roads, motorways, and drops you directly at your terminal.",
      itineraire: "Your driver heads north via the D920 through Bourg-la-Reine to the A86. Depending on traffic, the route goes east (via Créteil) or west (via Vélizy) to reach the A1 north of Paris. Tolls ~€4 (included). 40 min normally, 50-60 min in rush hour. The driver may use the N104 via Massy if the A86 is gridlocked. Drop-off at your specific CDG terminal.",
      conseils: "RER B runs Sceaux-CDG in 45-50 min (€11.45) but is notoriously crowded in peak hours. For families, the 7-seat van at €118 carries everyone and all luggage in one vehicle. Residents near Les Blagis (south Sceaux) benefit from quick D986 access. Book the night before for flights before 7am. Driver tracks your flight in real time for returns.",
      comparaisonTransport: "RER B Sceaux → CDG: 45-50 min, €11.45, often overcrowded. Taxi €70-90: 40 min, direct, comfortable. For 2-3 passengers (€23-45/person), taxi competes with RER in comfort and per-person cost.",
      faq: [
        { question: "How much?", answer: "€70-90 sedan, €118 van. Fixed fare, tolls included (~€4), luggage included." },
        { question: "Is the RER B practical?", answer: "45-50 min at €11.45 but crowded and difficult with suitcases. Taxi: direct, 40 min." },
        { question: "Rush hour duration?", answer: "50-60 min peak (7-9:30am, 5-7:30pm). Off-peak: 40 min." },
        { question: "Transfer during Hanami?", answer: "In April, allow 5-10 extra minutes on weekends due to Parc de Sceaux crowds." },
        { question: "Van available?", answer: "Yes, 7-seat van at €118. Perfect for families or groups with heavy luggage." }
      ],
    }
  ),

  // ═══════════════════════════════════════════════════════════
  // BOURG-LA-REINE (22 000 hab.) — Nœud RER B, André Derain
  // ═══════════════════════════════════════════════════════════
  hdsSXRoute(
    "taxi-bourg-la-reine-orly", "Bourg-la-Reine", "Aéroport d'Orly",
    48.7800, 2.3160, 48.7262, 2.3652,
    11, 14, "18 — 28 €", "aeroport",
    ["D920", "A6", "RER B", "Nœud Bourg-la-Reine", "André Derain"],
    18, 28, 38, 24, "D920", "0 €", "bourg-la-reine", "aeroport-orly",
    ["taxi-bourg-la-reine-cdg", "taxi-sceaux-orly", "taxi-fontenay-aux-roses-orly", "taxi-antony-orly", "taxi-meudon-orly"],
    ["aeroport", "orly", "bourg-la-reine", "hauts-de-seine", "rer-b", "andre-derain"],
    {
      metaTitle: "Taxi Bourg-la-Reine → Orly | 11 km, dès 18 € | TaxiNeo",
      metaDescription: "Taxi Bourg-la-Reine vers Orly en 14 min via D920. Prix fixe 18-28 €, bagages inclus. Nœud RER B, Parc de Sceaux. 24h/24.",
      heroTitle: "Taxi Bourg-la-Reine → Orly",
      heroSubtitle: "Transfert Bourg-la-Reine → Aéroport d'Orly au prix fixe de 18 — 28 €. 11 km, 14 min.",
      description: "L'aéroport d'Orly est à seulement 14 min de Bourg-la-Reine.",
      routeDescription: "L'itinéraire emprunte la D920 vers le sud puis rejoint l'A6 direction Orly.",
      introduction: "Bourg-la-Reine est une commune de 22 000 habitants stratégiquement positionnée au cœur du sud des Hauts-de-Seine, à la croisée de plusieurs axes majeurs. Sa gare RER B, l'une des plus importantes du réseau, constitue un nœud ferroviaire où la ligne se dédouble vers Robinson d'un côté et Saint-Rémy-lès-Chevreuse de l'autre — cette bifurcation historique fait de Bourg-la-Reine un point de passage quotidien pour des milliers de voyageurs. La ville porte l'empreinte d'André Derain, l'un des fondateurs du mouvement fauviste, qui y vécut de 1935 à sa mort en 1954. Sa maison-atelier, rue du Docteur-Léray, est un lieu de mémoire pour les amateurs d'art moderne. Bourg-la-Reine borde le Parc de Sceaux au sud-ouest, offrant aux résidents un accès privilégié aux 181 hectares de jardins Le Nôtre. Le marché de Bourg-la-Reine (mercredi et samedi matin) est réputé pour la qualité de ses producteurs. Pour rejoindre Orly, le taxi est le choix le plus logique : 14 minutes, sans aucune correspondance, au tarif fixe le plus bas parmi les communes voisines grâce à la proximité géographique exceptionnelle avec l'aéroport.",
      itineraire: "Votre chauffeur quitte Bourg-la-Reine par la D920 (avenue du Général Leclerc), artère principale qui traverse la ville du nord au sud. Cette route nationale traverse Antony en quelques minutes, puis rejoint le rond-point de la Croix de Berny, carrefour stratégique menant à l'A6 et à l'A10. Le chauffeur prend la direction de l'A6 sud, dont la sortie Orly est bien indiquée. L'ensemble du trajet est gratuit — aucun péage n'est appliqué sur ce parcours court. En conditions normales, le transfert ne dure que 14 minutes. Si la D920 est encombrée dans la traversée d'Antony, le chauffeur peut bifurquer par la D60 vers L'Haÿ-les-Roses et Thiais pour rejoindre Orly par le sud-est, un itinéraire à peine plus long mais souvent plus fluide. Aux heures de pointe (7h30-9h et 17h-19h), le trajet peut s'allonger jusqu'à 24 minutes en raison des feux de la D920 dans Antony.",
      conseils: "L'avantage de Bourg-la-Reine pour les transferts Orly est la distance très courte : même aux pires heures de pointe, le trajet ne dépasse pas 24 minutes. Pour les vols matinaux (avant 7h), un départ à 5h15 suffit largement. Les résidents proches de la gare RER bénéficient d'un temps de prise en charge minimal — le chauffeur est souvent là en moins de 10 minutes. Le quartier sud de la ville, côté Parc de Sceaux, est encore mieux placé : le chauffeur rejoint la D920 en 2 minutes. Pour le retour depuis Orly, communiquez votre numéro de vol lors de la réservation. Le chauffeur suit l'atterrissage en temps réel et vous attend dans le hall des arrivées avec votre nom affiché. Tarif identique dans les deux sens. Le parking d'Orly coûtant 25-30 €/jour, l'aller-retour en taxi (36-56 €) est rentable dès le premier jour d'absence.",
      comparaisonTransport: "RER B Bourg-la-Reine → Antony + Orlyval = 25-30 min, ~12 €. Le taxi à 18-28 € est direct en 14 min, sans correspondance ni escaliers. À 2 passagers (9-14 €/pers.), le taxi est au même prix que les transports pour un confort incomparable.",
      faq: [
        { question: "Quel est le prix du taxi Bourg-la-Reine → Orly ?", answer: "18-28 € en berline, 38 € en van. Tarif fixe, aucun péage, bagages inclus." },
        { question: "Combien de temps dure le trajet ?", answer: "14 min en conditions normales, 24 min maximum aux heures de pointe." },
        { question: "Prise en charge près de la gare RER ?", answer: "Oui, à toute adresse de Bourg-la-Reine. Le chauffeur arrive en moins de 10 min." },
        { question: "Le trajet est-il soumis à des péages ?", answer: "Aucun péage. L'intégralité du parcours est gratuit." },
        { question: "Transfert retour Orly → Bourg-la-Reine ?", answer: "Même tarif fixe. Chauffeur en zone d'arrivée avec votre nom. Vol suivi en temps réel." }
      ],
    },
    {
      metaTitle: "Taxi Bourg-la-Reine → Orly | 11 km, from €18 | TaxiNeo",
      metaDescription: "Taxi Bourg-la-Reine to Orly in 14 min via D920. Fixed price €18-28, luggage included. RER B hub, Parc de Sceaux. 24/7.",
      heroTitle: "Taxi Bourg-la-Reine → Orly",
      heroSubtitle: "Your Bourg-la-Reine → Orly Airport transfer at €18 — €28. 11 km, 14 min.",
      description: "Orly Airport is just 14 min from Bourg-la-Reine.",
      routeDescription: "Via the D920 south through Antony then the A6 to Orly.",
      introduction: "Bourg-la-Reine is a commune of 22,000 residents strategically positioned at the heart of the southern Hauts-de-Seine. Its RER B station is one of the network's most important junctions, where the line splits toward Robinson on one side and Saint-Rémy-lès-Chevreuse on the other — this historic bifurcation makes Bourg-la-Reine a daily transit point for thousands of commuters. The town bears the imprint of André Derain, co-founder of the Fauvist movement, who lived here from 1935 until his death in 1954. His studio-house on rue du Docteur-Léray is a memorial site for modern art enthusiasts. Bourg-la-Reine borders the Parc de Sceaux, giving residents privileged access to 181 hectares of Le Nôtre gardens. For reaching Orly, the taxi is the most logical choice: 14 minutes, no changes, at the lowest fixed fare among neighbouring communes thanks to the exceptional proximity to the airport.",
      itineraire: "Your driver takes the D920 south through Antony to the Croix de Berny roundabout, then the A6 to Orly. No tolls. 14 min normally. If the D920 through Antony is busy, the driver can detour via the D60 through L'Haÿ-les-Roses. In rush hour (7:30-9am, 5-7pm), allow up to 24 min due to traffic lights on the D920.",
      conseils: "Bourg-la-Reine's key advantage for Orly transfers is the very short distance: even at peak hours, the trip never exceeds 24 min. For early flights (before 7am), leaving at 5:15am is plenty. Residents near the RER station get minimal pick-up time — driver often arrives within 10 min. For returns, share your flight number: driver waits in arrivals, tracking your landing. Orly parking costs €25-30/day — a taxi round trip (€36-56) pays off from day one.",
      comparaisonTransport: "RER B Bourg-la-Reine → Antony + Orlyval = 25-30 min, ~€12. Taxi at €18-28 direct in 14 min, no changes. For 2 passengers (€9-14/person), taxi matches public transport cost with far superior comfort.",
      faq: [
        { question: "How much?", answer: "€18-28 sedan, €38 van. Fixed fare, no tolls, luggage included." },
        { question: "How long?", answer: "14 min normally, 24 min max in rush hour." },
        { question: "Pick-up near RER station?", answer: "Yes, any Bourg-la-Reine address. Driver arrives within 10 min." },
        { question: "Tolls?", answer: "None. The entire route is toll-free." },
        { question: "Return Orly → Bourg-la-Reine?", answer: "Same fixed fare. Driver in arrivals with your name. Flight tracked in real time." }
      ],
    }
  ),

  hdsSXRoute(
    "taxi-bourg-la-reine-cdg", "Bourg-la-Reine", "Aéroport CDG",
    48.7800, 2.3160, 49.0097, 2.5479,
    34, 38, "65 — 90 €", "aeroport",
    ["A1", "RER B", "Nœud ferroviaire", "Roissy", "Hauts-de-Seine"],
    65, 90, 115, 58, "A86 / A1", "~3 €", "bourg-la-reine", "aeroport-cdg",
    ["taxi-bourg-la-reine-orly", "taxi-sceaux-cdg", "taxi-fontenay-aux-roses-cdg", "taxi-antony-cdg", "taxi-meudon-cdg"],
    ["aeroport", "cdg", "roissy", "bourg-la-reine", "hauts-de-seine", "rer-b"],
    {
      metaTitle: "Taxi Bourg-la-Reine → CDG | 34 km, dès 65 € | TaxiNeo",
      metaDescription: "Taxi Bourg-la-Reine vers Roissy CDG en 38 min. Prix fixe 65-90 €, péages inclus. Nœud RER B. Service 24h/24.",
      heroTitle: "Taxi Bourg-la-Reine → CDG",
      heroSubtitle: "Transfert Bourg-la-Reine → Aéroport Charles de Gaulle au prix fixe de 65 — 90 €. 34 km, direct.",
      description: "L'aéroport CDG est à 38 min de Bourg-la-Reine via l'A86 et l'A1.",
      routeDescription: "L'itinéraire rejoint l'A86 puis l'A1 direction Roissy.",
      introduction: "Bourg-la-Reine occupe une position centrale dans le réseau de transport du sud des Hauts-de-Seine, ce qui en fait un point de départ idéal pour les transferts vers l'aéroport Charles de Gaulle. Le nœud ferroviaire de la gare de Bourg-la-Reine, où le RER B se divise en deux branches (Robinson et Saint-Rémy-lès-Chevreuse), témoigne de cette centralité historique. La commune de 22 000 habitants est un lieu de vie prisé par les familles et les cadres travaillant dans les pôles d'affaires du sud parisien, attirés par ses rues bordées de marronniers, ses maisons de caractère et sa proximité immédiate avec le Parc de Sceaux. André Derain, peintre fauviste majeur qui révolutionna l'usage de la couleur au début du XXe siècle, choisit d'installer son atelier à Bourg-la-Reine en 1935, où il créa certaines de ses œuvres les plus remarquables. Le marché bihebdomadaire (mercredi et samedi) est un rendez-vous incontournable pour les gourmets locaux. Si le RER B relie théoriquement Bourg-la-Reine à CDG en 40-45 minutes, la réalité est souvent moins rose : retards, affluence et difficulté à voyager avec des bagages rendent le taxi bien plus fiable pour ce trajet de 34 km.",
      itineraire: "Votre chauffeur quitte Bourg-la-Reine en remontant la D920 vers Montrouge, puis rejoint le Périphérique nord ou l'A86. L'itinéraire privilégié est ensuite l'A1 (autoroute du Nord) direction Roissy. Selon les conditions de trafic, le chauffeur peut emprunter l'A86 est via L'Haÿ-les-Roses et Créteil, ou l'A86 ouest via Vélizy et Nanterre, pour contourner Paris avant de rejoindre l'A1. Les péages s'élèvent à environ 3 € (inclus dans le tarif fixe). En conditions normales de circulation, le trajet dure 38 minutes. Aux heures de pointe (7h-9h30 et 17h-19h30), les accès au Périphérique et l'A1 nord sont souvent congestionnés — prévoyez alors 48 à 58 minutes. Le chauffeur utilise le GPS en temps réel et peut basculer sur la N104 (Francilienne) si l'A86 est saturée.",
      conseils: "Le RER B dessert CDG depuis la gare de Bourg-la-Reine en 40-45 minutes théoriques (11,45 €), mais les pannes et retards sur cette ligne sont parmi les plus fréquents du réseau francilien. Le taxi offre une fiabilité incomparable, surtout pour les vols internationaux où arriver en retard n'est pas une option. Pour les familles nombreuses de Bourg-la-Reine, le van 7 places (115 €) est la solution idéale — un seul véhicule pour parents, enfants et toutes les valises. Réservez la veille pour les départs avant 7h. Précisez votre terminal (T1, T2A-G ou T3) lors de la réservation. Pour le retour, votre chauffeur suit votre vol en temps réel et vous attend en zone d'arrivée avec un panneau nominatif, même en cas de retard. Le parking longue durée de CDG coûte 20-30 €/jour — l'aller-retour en taxi est plus économique dès 4 jours d'absence.",
      comparaisonTransport: "RER B Bourg-la-Reine → CDG : 40-45 min (théorique), 11,45 €, mais retards fréquents et bondé. Taxi à 65-90 € : 38 min, direct et fiable. À 2-3 passagers (22-45 €/pers.), le taxi est très compétitif et autrement plus confortable.",
      faq: [
        { question: "Quel est le prix du taxi Bourg-la-Reine → CDG ?", answer: "65-90 € en berline, 115 € en van. Tarif fixe, péages inclus (~3 €), bagages compris." },
        { question: "Le RER B est-il fiable pour CDG ?", answer: "Le RER B fait 40-45 min théoriques, mais les retards sont fréquents. Le taxi est direct en 38 min et fiable." },
        { question: "Durée aux heures de pointe ?", answer: "48-58 min en pointe (7h-9h30, 17h-19h30). En dehors : 38 min." },
        { question: "Le chauffeur connaît André Derain ?", answer: "Nos chauffeurs connaissent Bourg-la-Reine et récupèrent à toute adresse, y compris rue du Docteur-Léray." },
        { question: "Van pour famille nombreuse ?", answer: "Oui, van 7 places à 115 €. Idéal pour les départs en vacances." }
      ],
    },
    {
      metaTitle: "Taxi Bourg-la-Reine → CDG | 34 km, from €65 | TaxiNeo",
      metaDescription: "Taxi Bourg-la-Reine to CDG in 38 min. Fixed price €65-90, tolls included. RER B hub. 24/7 booking.",
      heroTitle: "Taxi Bourg-la-Reine → CDG",
      heroSubtitle: "Your Bourg-la-Reine → CDG Airport transfer at €65 — €90. 34 km, direct to Roissy.",
      description: "CDG Airport is 38 min from Bourg-la-Reine via the A86 and A1.",
      routeDescription: "Via the A86 ring road then the A1 to Roissy-CDG.",
      introduction: "Bourg-la-Reine holds a central position in the southern Hauts-de-Seine transport network, making it an ideal starting point for CDG Airport transfers. The railway junction at Bourg-la-Reine station, where the RER B splits into two branches (Robinson and Saint-Rémy-lès-Chevreuse), reflects this historic centrality. This commune of 22,000 is a sought-after residential area for families and professionals, drawn by its tree-lined streets, character houses and immediate proximity to the Parc de Sceaux. André Derain, the major Fauvist painter who revolutionised colour in early 20th-century art, chose to establish his studio in Bourg-la-Reine in 1935. While the RER B theoretically connects to CDG in 40-45 minutes, delays and overcrowding make the taxi far more reliable for this 34 km journey.",
      itineraire: "Your driver heads north via the D920 to the Périphérique or A86, then the A1 to Roissy. Route choice (A86 east via Créteil or west via Vélizy) depends on real-time traffic. Tolls ~€3 (included). 38 min normally, 48-58 min in rush hour. The driver can switch to the N104 if the A86 is gridlocked.",
      conseils: "RER B runs Bourg-la-Reine-CDG in 40-45 min (€11.45) but is among the most delay-prone lines in the Paris network. For families, the 7-seat van (€115) fits everyone and all luggage. Book the night before for flights before 7am. Specify terminal (T1, T2A-G, T3). CDG long-stay parking: €20-30/day — taxi round trip saves money from 4 days away.",
      comparaisonTransport: "RER B: 40-45 min (theoretical), €11.45, frequent delays and overcrowding. Taxi €65-90: 38 min, direct and reliable. For 2-3 passengers (€22-45/person), taxi is very competitive and far more comfortable.",
      faq: [
        { question: "How much?", answer: "€65-90 sedan, €115 van. Fixed fare, tolls included (~€3), luggage included." },
        { question: "Is the RER B reliable?", answer: "40-45 min theoretical, but frequent delays. Taxi: direct, 38 min, reliable." },
        { question: "Rush hour?", answer: "48-58 min peak. Off-peak: 38 min." },
        { question: "André Derain connection?", answer: "Our drivers know Bourg-la-Reine well, pick-up from any address including rue du Docteur-Léray." },
        { question: "Family van?", answer: "Yes, 7-seat van at €115. Ideal for holiday departures." }
      ],
    }
  ),

  // ═══════════════════════════════════════════════════════════
  // LE PLESSIS-ROBINSON (29 000 hab.) — Cité-jardin, Art Déco
  // ═══════════════════════════════════════════════════════════
  hdsSXRoute(
    "taxi-le-plessis-robinson-orly", "Le Plessis-Robinson", "Aéroport d'Orly",
    48.7813, 2.2615, 48.7262, 2.3652,
    13, 15, "22 — 32 €", "aeroport",
    ["D2", "A6", "Cité-jardin", "Art Déco", "Étang Colbert"],
    22, 32, 45, 25, "D2 / A6", "0 €", "le-plessis-robinson", "aeroport-orly",
    ["taxi-le-plessis-robinson-cdg", "taxi-chatenay-malabry-orly", "taxi-sceaux-orly", "taxi-antony-orly", "taxi-meudon-orly"],
    ["aeroport", "orly", "le-plessis-robinson", "hauts-de-seine", "cite-jardin", "art-deco"],
    {
      metaTitle: "Taxi Le Plessis-Robinson → Orly | 13 km, dès 22 € | TaxiNeo",
      metaDescription: "Taxi Le Plessis-Robinson vers Orly en 15 min. Prix fixe 22-32 €, bagages inclus. Cité-jardin, Étang Colbert. 24h/24.",
      heroTitle: "Taxi Le Plessis-Robinson → Orly",
      heroSubtitle: "Transfert Le Plessis-Robinson → Aéroport d'Orly au prix fixe de 22 — 32 €. 13 km, 15 min.",
      description: "L'aéroport d'Orly est à 15 min du Plessis-Robinson via la D2 et l'A6.",
      routeDescription: "L'itinéraire emprunte la D2 puis l'A6 direction Orly.",
      introduction: "Le Plessis-Robinson est une commune de 29 000 habitants dont l'identité architecturale est unique en Île-de-France. La célèbre Cité-jardin, construite entre 1924 et 1939 sous l'impulsion du département de la Seine, est un ensemble remarquable de logements sociaux de style Art Déco, inscrit à l'inventaire des monuments historiques. Ses rues aux noms de fleurs, ses jardins partagés, ses façades ornées de briques et de bas-reliefs constituent un témoignage exceptionnel de l'urbanisme utopique de l'entre-deux-guerres. Plus récemment, la ville s'est dotée du quartier du Cœur de Ville, reconstruction contemporaine inspirée du style haussmannien, qui a valu au Plessis-Robinson de nombreux prix d'urbanisme. L'Étang Colbert, miroir d'eau bordé de promenades, offre un cadre bucolique à quelques pas du centre-ville. La forêt de Verrières, poumon vert de 135 hectares, s'étend au sud de la commune. Pour les voyageurs du Plessis-Robinson, le taxi vers Orly est la solution la plus pratique : 15 minutes de trajet sans correspondance, au tarif fixe, avec prise en charge à domicile dans la Cité-jardin, près de l'Étang Colbert ou dans les nouveaux quartiers.",
      itineraire: "Votre chauffeur quitte Le Plessis-Robinson par la D2 en direction du sud-est, traversant Châtenay-Malabry avant de rejoindre l'échangeur de l'A6 au niveau de Verrières-le-Buisson ou Antony. L'A6 mène directement aux terminaux d'Orly via la sortie dédiée. L'intégralité du trajet est sans péage. En conditions normales, comptez 15 minutes. Une alternative, en cas de travaux sur la D2, consiste à emprunter la D986 via Sceaux puis la D920 via Antony. Aux heures de pointe (7h30-9h et 17h-19h), la traversée de Châtenay-Malabry et l'accès à l'A6 peuvent allonger le trajet jusqu'à 25 minutes. Le chauffeur utilise le GPS en temps réel pour choisir l'itinéraire optimal et contourner les éventuels ralentissements. L'arrivée se fait directement au terminal de votre vol (Orly 1, 2, 3 ou 4).",
      conseils: "Le Plessis-Robinson ne dispose pas de gare RER directe : la gare Robinson (terminus du RER B branche sud) se trouve en réalité à la frontière avec Sceaux. Depuis cette gare, rejoindre Orly en transports nécessite un changement à Antony pour l'Orlyval, soit 40 minutes au total. Le taxi à 22-32 € est donc la solution la plus logique. Les résidents de la Cité-jardin, situés à l'ouest de la commune, bénéficient d'un accès rapide à la D2 : le chauffeur y est en 2 minutes. Pour les vols matinaux, un départ à 5h30 garantit un trajet de 12-13 minutes. La guinguette reconstituée du restaurant Le Plessis, sur les bords de l'Étang Colbert, propose une cuisine traditionnelle dans un cadre champêtre — idéale pour un dernier dîner avant le départ. Pour le retour, le chauffeur attend en zone d'arrivée avec votre nom affiché.",
      comparaisonTransport: "RER B Robinson → Antony + Orlyval = 35-40 min, ~12 €. Le taxi à 22-32 € est direct en 15 min. À 2 passagers (11-16 €/pers.), le taxi est au même prix que les transports, en bien plus direct et confortable.",
      faq: [
        { question: "Quel est le prix du taxi Le Plessis-Robinson → Orly ?", answer: "22-32 € en berline, 45 € en van. Tarif fixe, aucun péage, bagages inclus." },
        { question: "Combien de temps dure le trajet ?", answer: "15 min en conditions normales, 25 min aux heures de pointe." },
        { question: "Prise en charge dans la Cité-jardin ?", answer: "Oui, à toute adresse du Plessis : Cité-jardin, Cœur de Ville, Étang Colbert." },
        { question: "Y a-t-il une gare au Plessis-Robinson ?", answer: "Pas directement. La gare Robinson (RER B) est à la frontière avec Sceaux. Le taxi évite toute correspondance." },
        { question: "Transfert retour depuis Orly ?", answer: "Même tarif fixe. Chauffeur en zone d'arrivée, vol suivi en temps réel." }
      ],
    },
    {
      metaTitle: "Taxi Le Plessis-Robinson → Orly | 13 km, from €22 | TaxiNeo",
      metaDescription: "Taxi Le Plessis-Robinson to Orly in 15 min. Fixed price €22-32, luggage included. Garden city, Art Deco. 24/7.",
      heroTitle: "Taxi Le Plessis-Robinson → Orly",
      heroSubtitle: "Your Le Plessis-Robinson → Orly Airport transfer at €22 — €32. 13 km, 15 min.",
      description: "Orly Airport is 15 min from Le Plessis-Robinson via the D2 and A6.",
      routeDescription: "Via the D2 then the A6 motorway to Orly.",
      introduction: "Le Plessis-Robinson is a commune of 29,000 inhabitants with a truly unique architectural identity in the Paris region. The famous Cité-jardin (Garden City), built between 1924 and 1939, is a remarkable ensemble of Art Deco social housing listed as a historic monument. Its streets named after flowers, shared gardens, and facades adorned with bricks and bas-reliefs offer an exceptional testimony to the utopian urbanism of the interwar period. More recently, the Cœur de Ville district, a contemporary reconstruction inspired by Haussmann style, has earned numerous urban planning awards. The Étang Colbert pond, bordered by walking paths, provides a bucolic setting near the town centre. The 135-hectare Verrières forest extends to the south. For travellers from Le Plessis-Robinson, the taxi to Orly is the most practical solution: 15 minutes with no changes, fixed fare, with pickup from the Garden City, near the Étang Colbert, or in the new districts.",
      itineraire: "Your driver leaves Le Plessis-Robinson via the D2 southeast through Châtenay-Malabry to the A6 interchange at Verrières-le-Buisson or Antony. The A6 leads directly to Orly terminals. No tolls. 15 min normally, up to 25 min in rush hour (7:30-9am, 5-7pm). Alternative route via D986 through Sceaux if D2 has roadworks.",
      conseils: "Le Plessis-Robinson has no direct RER station — Robinson station (RER B) is actually at the Sceaux border. From there, reaching Orly requires a change at Antony for the Orlyval (40 min total). Taxi at €22-32 is the logical choice. Garden City residents enjoy quick D2 access. For early flights, leaving at 5:30am guarantees a 12-13 min ride. Don't miss the reconstructed guinguette restaurant by the Étang Colbert for a last dinner before your trip.",
      comparaisonTransport: "RER B Robinson → Antony + Orlyval = 35-40 min, ~€12. Taxi at €22-32 direct in 15 min. For 2 passengers (€11-16/person), taxi matches transport cost with far better convenience.",
      faq: [
        { question: "How much?", answer: "€22-32 sedan, €45 van. Fixed fare, no tolls, luggage included." },
        { question: "How long?", answer: "15 min normally, 25 min in rush hour." },
        { question: "Pick-up in the Garden City?", answer: "Yes, any Le Plessis address: Garden City, Cœur de Ville, Étang Colbert." },
        { question: "Is there a station?", answer: "No direct station. Robinson (RER B) is at the Sceaux border. Taxi avoids all transfers." },
        { question: "Return from Orly?", answer: "Same fixed fare. Driver in arrivals, flight tracked in real time." }
      ],
    }
  ),

  hdsSXRoute(
    "taxi-le-plessis-robinson-cdg", "Le Plessis-Robinson", "Aéroport CDG",
    48.7813, 2.2615, 49.0097, 2.5479,
    38, 42, "65 — 85 €", "aeroport",
    ["A86", "A1", "Cité-jardin", "Roissy", "Forêt de Verrières"],
    65, 85, 110, 62, "A86 / A1", "~5 €", "le-plessis-robinson", "aeroport-cdg",
    ["taxi-le-plessis-robinson-orly", "taxi-chatenay-malabry-cdg", "taxi-sceaux-cdg", "taxi-antony-cdg", "taxi-meudon-cdg"],
    ["aeroport", "cdg", "roissy", "le-plessis-robinson", "hauts-de-seine", "cite-jardin"],
    {
      metaTitle: "Taxi Le Plessis-Robinson → CDG | 38 km, dès 65 € | TaxiNeo",
      metaDescription: "Taxi Le Plessis-Robinson vers CDG en 42 min. Prix fixe 65-85 €, péages inclus. Cité-jardin Art Déco. Service 24h/24.",
      heroTitle: "Taxi Le Plessis-Robinson → CDG",
      heroSubtitle: "Transfert Le Plessis-Robinson → Aéroport Charles de Gaulle au prix fixe de 65 — 85 €. 38 km, direct.",
      description: "L'aéroport CDG est à 42 min du Plessis-Robinson via l'A86 et l'A1.",
      routeDescription: "L'itinéraire emprunte l'A86 puis l'A1 direction Roissy.",
      introduction: "Le transfert en taxi entre Le Plessis-Robinson et l'aéroport Charles de Gaulle est un trajet qui traverse la diversité des paysages franciliens, depuis la Cité-jardin Art Déco classée et la forêt de Verrières jusqu'aux plaines céréalières du nord parisien. Le Plessis-Robinson, 29 000 habitants, est une commune dont la renaissance urbaine est considérée comme exemplaire en France. Après la construction de la Cité-jardin dans l'entre-deux-guerres — avec ses façades de brique ornementale, ses toits en ardoise et ses rues portant des noms de fleurs comme la rue des Bleuets ou la rue des Glycines —, la ville a poursuivi sa transformation avec le quartier du Cœur de Ville dans les années 2000, un centre-bourg reconstruit de zéro dans un style néo-haussmannien qui a remporté le Grand Prix national de l'urbanisme. L'Étang Colbert et la forêt domaniale de Verrières complètent cette qualité de vie exceptionnelle. Le Plessis-Robinson n'étant pas directement desservi par le RER, le taxi est la solution naturelle pour rallier CDG : prise en charge à domicile, autoroutes, dépose au terminal en 42 minutes.",
      itineraire: "Votre chauffeur quitte Le Plessis-Robinson en empruntant la D2 vers Clamart ou la D986 vers Sceaux pour rejoindre l'A86. L'autoroute de contournement de Paris permet ensuite de rallier l'A1 (autoroute du Nord) en direction de Roissy. Selon le trafic, le chauffeur choisit de contourner Paris par l'ouest (via Vélizy-Villacoublay et Nanterre) ou par l'est (via Antony et Créteil). Les péages s'élèvent à environ 5 € sur ce parcours (inclus dans le tarif). En conditions fluides, comptez 42 minutes. Aux heures de pointe (7h-9h30 et 17h-19h30), la jonction A86/Périphérique et l'entrée de l'A1 sont souvent congestionnées : prévoyez 52 à 62 minutes. Votre chauffeur peut emprunter la N104 (Francilienne) par Saclay, Massy et Évry pour éviter l'A86 si celle-ci est saturée. L'arrivée à CDG se fait directement au terminal de votre vol.",
      conseils: "Le Plessis-Robinson n'ayant pas de gare RER, le seul accès ferroviaire à CDG est via la gare Robinson (RER B, à Sceaux) puis le train direct — soit 55 minutes minimum avec marche et attente. Le taxi est donc le mode de transport le plus adapté. Pour les vols internationaux depuis CDG, partez du Plessis 2h30 avant le vol en heures creuses, 3h en heures de pointe. Le meilleur créneau pour éviter les embouteillages est avant 6h30 ou entre 10h et 15h30. Réservez un van à 110 € pour les familles nombreuses ou les groupes — le Plessis-Robinson, ville familiale par excellence, compte de nombreuses familles qui apprécient ce service. Pour le retour, le chauffeur vous attend à CDG avec panneau nominatif, suivi de vol en temps réel inclus. Avant de partir, une promenade autour de l'Étang Colbert ou dans les allées de la Cité-jardin est un plaisir unique.",
      comparaisonTransport: "Pas de RER direct : marche + RER B Robinson → CDG = 55 min minimum. Taxi à 65-85 € : 42 min, direct, porte-à-porte. À 2 passagers (33-43 €/pers.), nettement plus confortable et à peine plus cher que le transport en commun.",
      faq: [
        { question: "Quel est le prix ?", answer: "65-85 € en berline, 110 € en van. Tarif fixe, péages inclus (~5 €), bagages compris." },
        { question: "Combien de temps ?", answer: "42 min en conditions normales, 52-62 min aux heures de pointe." },
        { question: "Y a-t-il un RER au Plessis-Robinson ?", answer: "Non. La gare Robinson (RER B) est à Sceaux. Le taxi offre un transfert porte-à-porte sans correspondance." },
        { question: "Prise en charge dans la Cité-jardin ?", answer: "Oui, à toute adresse du Plessis-Robinson, y compris la Cité-jardin et le Cœur de Ville." },
        { question: "Van pour groupe ?", answer: "Oui, van 7 places à 110 €. Idéal pour familles ou groupes avec beaucoup de bagages." }
      ],
    },
    {
      metaTitle: "Taxi Le Plessis-Robinson → CDG | 38 km, from €65 | TaxiNeo",
      metaDescription: "Taxi Le Plessis-Robinson to CDG in 42 min. Fixed price €65-85, tolls included. Art Deco Garden City. 24/7.",
      heroTitle: "Taxi Le Plessis-Robinson → CDG",
      heroSubtitle: "Your Le Plessis-Robinson → CDG Airport transfer at €65 — €85. 38 km, direct to Roissy.",
      description: "CDG Airport is 42 min from Le Plessis-Robinson via the A86 and A1.",
      routeDescription: "Via the A86 ring road then the A1 to Roissy-CDG.",
      introduction: "The taxi transfer from Le Plessis-Robinson to Charles de Gaulle Airport crosses the full diversity of Île-de-France landscapes, from the classified Art Deco Garden City and the Verrières forest to the northern plains. Le Plessis-Robinson (29,000 inhabitants) is considered a model of urban renewal in France. After the interwar Garden City construction — with its ornamental brick facades, slate roofs and streets named after flowers like rue des Bleuets (Cornflowers) and rue des Glycines (Wisteria) — the town continued its transformation with the Cœur de Ville district in the 2000s, a reconstructed town centre in neo-Haussmann style that won the Grand Prix national for urbanism. The Étang Colbert pond and the Verrières state forest complete this exceptional quality of life. With no direct RER service, the taxi is the natural solution for CDG: door-to-door pickup, motorway, terminal drop-off in 42 minutes.",
      itineraire: "Your driver takes the D2 via Clamart or D986 via Sceaux to the A86, then the A1 to Roissy. Route choice (west via Vélizy or east via Antony) depends on traffic. Tolls ~€5 (included). 42 min normally, 52-62 min in rush hour. The driver may use the N104 via Saclay if the A86 is saturated. Drop-off at your specific CDG terminal.",
      conseils: "With no RER station, the only rail option is walking to Robinson (Sceaux) then RER B — 55 min minimum. Taxi is the best fit. For international flights, leave 2.5h ahead (off-peak) or 3h (peak). Best windows: before 6:30am or 10am-3:30pm. Van at €110 for families — Le Plessis-Robinson is a family-oriented town. For returns, driver waits at CDG with your name, flight tracked in real time.",
      comparaisonTransport: "No direct RER: walk + RER B Robinson → CDG = 55 min+. Taxi €65-85: 42 min, direct, door-to-door. For 2 passengers (€33-43/person), much more comfortable and barely more expensive than public transport.",
      faq: [
        { question: "How much?", answer: "€65-85 sedan, €110 van. Fixed fare, tolls included (~€5), luggage included." },
        { question: "How long?", answer: "42 min normally, 52-62 min in rush hour." },
        { question: "RER at Le Plessis-Robinson?", answer: "No. Robinson station (RER B) is in Sceaux. Taxi offers door-to-door transfer." },
        { question: "Pick-up in the Garden City?", answer: "Yes, any Le Plessis address including Garden City and Cœur de Ville." },
        { question: "Family van?", answer: "Yes, 7-seat van at €110. Perfect for families or groups." }
      ],
    }
  ),

  // ═══════════════════════════════════════════════════════════
  // CHÂTENAY-MALABRY (34 000 hab.) — Chateaubriand, Arboretum
  // ═══════════════════════════════════════════════════════════
  hdsSXRoute(
    "taxi-chatenay-malabry-orly", "Châtenay-Malabry", "Aéroport d'Orly",
    48.7651, 2.2669, 48.7262, 2.3652,
    12, 15, "22 — 30 €", "aeroport",
    ["D986", "A6", "Chateaubriand", "Arboretum", "Vallée-aux-Loups"],
    22, 30, 42, 25, "D986 / A6", "0 €", "chatenay-malabry", "aeroport-orly",
    ["taxi-chatenay-malabry-cdg", "taxi-le-plessis-robinson-orly", "taxi-sceaux-orly", "taxi-antony-orly", "taxi-meudon-orly"],
    ["aeroport", "orly", "chatenay-malabry", "hauts-de-seine", "chateaubriand", "arboretum", "vallee-aux-loups"],
    {
      metaTitle: "Taxi Châtenay-Malabry → Orly | 12 km, dès 22 € | TaxiNeo",
      metaDescription: "Taxi Châtenay-Malabry vers Orly en 15 min via D986/A6. Prix fixe 22-30 €. Vallée-aux-Loups, Arboretum. 24h/24.",
      heroTitle: "Taxi Châtenay-Malabry → Orly",
      heroSubtitle: "Transfert Châtenay-Malabry → Aéroport d'Orly au prix fixe de 22 — 30 €. 12 km, 15 min.",
      description: "L'aéroport d'Orly est à 15 min de Châtenay-Malabry via la D986 et l'A6.",
      routeDescription: "L'itinéraire emprunte la D986 vers Verrières puis rejoint l'A6 direction Orly.",
      introduction: "Châtenay-Malabry est une commune de 34 000 habitants dont le patrimoine littéraire et botanique est exceptionnel. La Maison de Chateaubriand, nichée dans le domaine de la Vallée-aux-Loups, fut la résidence de l'écrivain François-René de Chateaubriand de 1807 à 1818, période durant laquelle il rédigea une partie des Mémoires d'outre-tombe, chef-d'œuvre de la littérature française. La demeure, classée monument historique, se visite toute l'année et accueille des expositions littéraires dans un parc romantique de 14 hectares planté d'essences rares par Chateaubriand lui-même. L'Arboretum de la Vallée-aux-Loups, joyau botanique adjacent, rassemble plus de 500 espèces d'arbres et d'arbustes sur 12,7 hectares — c'est l'une des plus riches collections dendrologiques d'Europe, avec des spécimens centenaires de séquoias, cèdres du Liban et ginkgos biloba. La commune abritait jusqu'en 2017 le campus de l'École Centrale Paris, l'une des cinq plus grandes écoles d'ingénieurs françaises, avant son déménagement vers le plateau de Saclay. La Coulée verte, promenade paysagère de 4 km, traverse Châtenay du nord au sud. Pour rejoindre Orly, le taxi offre un transfert rapide et sans tracas : 15 minutes au tarif fixe.",
      itineraire: "Votre chauffeur quitte Châtenay-Malabry par la D986 (avenue de la Division Leclerc) en direction du sud vers Verrières-le-Buisson. À Verrières, il rejoint l'échangeur de l'A6, l'autoroute du Soleil, dont la sortie Orly est directe et bien signalée. L'ensemble du parcours est gratuit (aucun péage). En conditions normales, le trajet dure 15 minutes. Si la D986 est encombrée au niveau du carrefour de la Bourgogne, le chauffeur peut emprunter un itinéraire alternatif via la D2 et Antony pour rejoindre l'A6 un peu plus au nord. Aux heures de pointe (7h30-9h et 17h-19h), prévoyez 20 à 25 minutes — la D986 entre Châtenay et Verrières est un axe résidentiel qui connaît des ralentissements modérés. Le chauffeur utilise Waze pour optimiser le parcours en temps réel. Vous êtes déposé directement au terminal de votre vol, Orly 1 à 4.",
      conseils: "Châtenay-Malabry n'est pas directement desservie par le RER : les gares les plus proches sont Robinson (RER B, à 10 min à pied) et La Croix de Berny (RER B, à Antony). Depuis Robinson, le trajet vers Orly via Antony + Orlyval prend 40-45 minutes avec correspondance. Le taxi à 22-30 € est incomparablement plus pratique. Avant votre vol, ne manquez pas la visite de la Maison de Chateaubriand (7 € plein tarif, gratuit le 1er dimanche) et de l'Arboretum (gratuit), deux trésors culturels et naturels accessibles toute l'année. Les amateurs de botanique seront émerveillés par la collection de bonsaïs de l'Arboretum, unique en France. Pour le retour depuis Orly, communiquez votre numéro de vol pour un suivi en temps réel. Le parking d'Orly coûte 25-30 €/jour : un aller-retour en taxi (44-60 €) est rentable dès 2 jours.",
      comparaisonTransport: "RER B Robinson → Antony + Orlyval = 40-45 min, ~12 €, avec 10 min de marche. Le taxi à 22-30 € est direct en 15 min. À 2 passagers (11-15 €/pers.), le taxi est aussi économique que les transports pour un confort bien supérieur.",
      faq: [
        { question: "Quel est le prix du taxi Châtenay-Malabry → Orly ?", answer: "22-30 € en berline, 42 € en van. Tarif fixe, aucun péage, bagages inclus." },
        { question: "Combien de temps dure le trajet ?", answer: "15 min en conditions normales, 20-25 min aux heures de pointe." },
        { question: "Prise en charge à la Vallée-aux-Loups ?", answer: "Oui, à toute adresse de Châtenay-Malabry : Vallée-aux-Loups, Coulée verte, centre-ville." },
        { question: "Y a-t-il une gare à Châtenay ?", answer: "Pas directement. Gare Robinson (RER B) à 10 min à pied. Le taxi est porte-à-porte." },
        { question: "Visite de la Maison de Chateaubriand ?", answer: "Ouverte toute l'année. 7 € adulte, gratuit le 1er dimanche. Un incontournable avant votre vol." }
      ],
    },
    {
      metaTitle: "Taxi Châtenay-Malabry → Orly | 12 km, from €22 | TaxiNeo",
      metaDescription: "Taxi Châtenay-Malabry to Orly in 15 min via D986/A6. Fixed price €22-30. Vallée-aux-Loups, Arboretum. 24/7.",
      heroTitle: "Taxi Châtenay-Malabry → Orly",
      heroSubtitle: "Your Châtenay-Malabry → Orly Airport transfer at €22 — €30. 12 km, 15 min.",
      description: "Orly Airport is 15 min from Châtenay-Malabry via the D986 and A6.",
      routeDescription: "Via the D986 through Verrières then the A6 to Orly.",
      introduction: "Châtenay-Malabry is a commune of 34,000 inhabitants with exceptional literary and botanical heritage. The Maison de Chateaubriand, nestled in the Vallée-aux-Loups estate, was the residence of writer François-René de Chateaubriand from 1807 to 1818, during which he penned part of Mémoires d'outre-tombe, a masterpiece of French literature. The classified historic house welcomes visitors year-round in a romantic 14-hectare park planted with rare species by Chateaubriand himself. The adjacent Arboretum de la Vallée-aux-Loups, a botanical jewel, gathers over 500 tree and shrub species across 12.7 hectares — one of Europe's richest dendrological collections, featuring century-old sequoias, Lebanese cedars and ginkgo bilobas. The commune hosted the École Centrale Paris engineering school campus until 2017. The 4 km Coulée verte greenway crosses Châtenay from north to south. For reaching Orly, the taxi offers a quick, hassle-free transfer: 15 minutes at fixed fare.",
      itineraire: "Your driver takes the D986 south through Verrières-le-Buisson to the A6 interchange. The Orly exit is direct and well signposted. No tolls. 15 min normally, 20-25 min in rush hour (7:30-9am, 5-7pm). Alternative via D2 and Antony if D986 is congested. Real-time GPS for optimal routing. Drop-off at your specific Orly terminal (1-4).",
      conseils: "Châtenay-Malabry has no direct RER — nearest stations are Robinson (10 min walk) and La Croix de Berny (Antony). From Robinson, Orly via Orlyval takes 40-45 min. Taxi at €22-30 is far more practical. Before your flight, visit the Maison de Chateaubriand (€7, free 1st Sunday) and the Arboretum (free) — two cultural and natural treasures. Orly parking: €25-30/day — taxi round trip (€44-60) pays off from 2 days.",
      comparaisonTransport: "RER B Robinson → Antony + Orlyval = 40-45 min, ~€12, plus 10 min walk. Taxi at €22-30 direct in 15 min. For 2 passengers (€11-15/person), taxi matches transport cost with far superior comfort.",
      faq: [
        { question: "How much?", answer: "€22-30 sedan, €42 van. Fixed fare, no tolls, luggage included." },
        { question: "How long?", answer: "15 min normally, 20-25 min in rush hour." },
        { question: "Pick-up at Vallée-aux-Loups?", answer: "Yes, any Châtenay address: Vallée-aux-Loups, Coulée verte, town centre." },
        { question: "Station in Châtenay?", answer: "No direct station. Robinson (RER B) is 10 min walk. Taxi is door-to-door." },
        { question: "Maison de Chateaubriand?", answer: "Open year-round. €7 adult, free 1st Sunday. A must-visit before your flight." }
      ],
    }
  ),

  hdsSXRoute(
    "taxi-chatenay-malabry-cdg", "Châtenay-Malabry", "Aéroport CDG",
    48.7651, 2.2669, 49.0097, 2.5479,
    38, 42, "68 — 90 €", "aeroport",
    ["A86", "A1", "Chateaubriand", "Arboretum", "Roissy"],
    68, 90, 118, 62, "A86 / A1", "~5 €", "chatenay-malabry", "aeroport-cdg",
    ["taxi-chatenay-malabry-orly", "taxi-le-plessis-robinson-cdg", "taxi-sceaux-cdg", "taxi-antony-cdg", "taxi-meudon-cdg"],
    ["aeroport", "cdg", "roissy", "chatenay-malabry", "hauts-de-seine", "chateaubriand", "arboretum"],
    {
      metaTitle: "Taxi Châtenay-Malabry → CDG | 38 km, dès 68 € | TaxiNeo",
      metaDescription: "Taxi Châtenay-Malabry vers CDG en 42 min. Prix fixe 68-90 €, péages inclus. Chateaubriand, Arboretum. 24h/24.",
      heroTitle: "Taxi Châtenay-Malabry → CDG",
      heroSubtitle: "Transfert Châtenay-Malabry → Aéroport Charles de Gaulle au prix fixe de 68 — 90 €. 38 km, direct.",
      description: "L'aéroport CDG est à 42 min de Châtenay-Malabry via l'A86 et l'A1.",
      routeDescription: "L'itinéraire rejoint l'A86 puis l'A1 direction Roissy.",
      introduction: "Le trajet en taxi de Châtenay-Malabry vers l'aéroport Charles de Gaulle relie deux pôles emblématiques de l'Île-de-France : le domaine romantique de la Vallée-aux-Loups, où Chateaubriand écrivit certaines des plus belles pages de la littérature française, et le premier aéroport du pays avec ses 70 millions de passagers annuels. Châtenay-Malabry, 34 000 habitants, est une ville qui allie patrimoine culturel et cadre de vie verdoyant. L'Arboretum de la Vallée-aux-Loups, avec ses 500 espèces d'arbres réparties sur 12,7 hectares, est un sanctuaire botanique d'exception — sa collection de cèdres bleus de l'Atlas et ses magnolias centenaires attirent les botanistes du monde entier. L'ancien campus de l'École Centrale, fermé en 2017 lors du déménagement vers Saclay, fait l'objet d'un ambitieux projet de réaménagement urbain qui transformera ce site de 12 hectares en un nouveau quartier mixte. La Coulée verte, corridor écologique de 4 km, traverse la commune et offre des promenades bucoliques. Pour rallier CDG depuis cette ville littéraire et verte, le taxi est la solution la plus fiable : 42 minutes de transfert direct, sans les aléas du RER B.",
      itineraire: "Votre chauffeur quitte Châtenay-Malabry par la D986 vers le nord en direction de Sceaux et Bourg-la-Reine, puis rejoint l'A86 (autoroute de contournement de Paris). L'A86 permet de contourner Paris par l'est ou par l'ouest selon les conditions de trafic en temps réel, avant de rejoindre l'A1 (autoroute du Nord) en direction de Roissy. Les péages s'élèvent à environ 5 € sur ce parcours (inclus dans le tarif fixe). En conditions fluides, comptez 42 minutes. Aux heures de pointe (7h-9h30 et 17h-19h30), l'A86 et la jonction avec l'A1 peuvent être congestionnées, allongeant le trajet à 52-62 minutes. Votre chauffeur dispose d'alternatives : la N104 (Francilienne) via le plateau de Saclay et Massy, ou même un passage par la N118 vers Vélizy puis l'A86 ouest. L'arrivée à CDG se fait au terminal de votre vol, avec dépose au plus près du hall d'enregistrement.",
      conseils: "Depuis Châtenay-Malabry, le RER B (via la gare Robinson à 10 min à pied) dessert CDG en 50-55 minutes théoriques pour 11,45 €. Cependant, cette ligne est réputée pour ses retards et son inconfort en heures de pointe — avec des valises, l'expérience est particulièrement pénible dans les escaliers des gares parisiennes. Le taxi, bien que plus coûteux pour un voyageur seul, offre un confort et une fiabilité sans équivalent. Pour les familles de Châtenay partant en vacances, le van 7 places à 118 € transporte tout le monde et tous les bagages dans un seul véhicule. Astuce locale : les résidents du quartier de la Butte Rouge (ancien campus Centrale) bénéficient d'un accès rapide à la D986 nord. Réservez la veille pour les départs avant 7h. Précisez votre terminal (T1, T2A-G ou T3). Pour le retour, suivi de vol en temps réel et attente gratuite en zone d'arrivée.",
      comparaisonTransport: "RER B Robinson → CDG : 50-55 min, 11,45 €, mais marche + retards + bondé. Taxi à 68-90 € : 42 min, direct et confortable. À 2-3 passagers (23-45 €/pers.), le taxi devient très compétitif face au RER.",
      faq: [
        { question: "Quel est le prix du taxi Châtenay-Malabry → CDG ?", answer: "68-90 € en berline, 118 € en van. Tarif fixe, péages inclus (~5 €), bagages compris." },
        { question: "Le RER B est-il une option ?", answer: "Le RER B fait 50-55 min via Robinson, à 11,45 €. Mais retards fréquents et très bondé. Le taxi est direct en 42 min." },
        { question: "Durée aux heures de pointe ?", answer: "52-62 min en pointe (7h-9h30, 17h-19h30). En dehors : 42 min." },
        { question: "Visite de l'Arboretum avant le vol ?", answer: "L'Arboretum est gratuit et ouvert toute l'année. 500 espèces d'arbres sur 12,7 ha. Un lieu unique en Europe." },
        { question: "Van pour famille ?", answer: "Oui, van 7 places à 118 €. Parfait pour les départs en vacances avec enfants et bagages volumineux." }
      ],
    },
    {
      metaTitle: "Taxi Châtenay-Malabry → CDG | 38 km, from €68 | TaxiNeo",
      metaDescription: "Taxi Châtenay-Malabry to CDG in 42 min. Fixed price €68-90, tolls included. Chateaubriand, Arboretum. 24/7.",
      heroTitle: "Taxi Châtenay-Malabry → CDG",
      heroSubtitle: "Your Châtenay-Malabry → CDG Airport transfer at €68 — €90. 38 km, direct to Roissy.",
      description: "CDG Airport is 42 min from Châtenay-Malabry via the A86 and A1.",
      routeDescription: "Via the A86 ring road then the A1 to Roissy-CDG.",
      introduction: "The taxi from Châtenay-Malabry to Charles de Gaulle Airport connects two iconic Île-de-France landmarks: the romantic Vallée-aux-Loups estate, where Chateaubriand wrote some of the finest pages of French literature, and France's largest airport with 70 million annual passengers. Châtenay-Malabry (34,000 inhabitants) combines cultural heritage with a remarkably green setting. The Arboretum de la Vallée-aux-Loups, with 500 tree species across 12.7 hectares, is a botanical sanctuary of exception — its blue Atlas cedars and century-old magnolias draw botanists worldwide. The former École Centrale campus (closed 2017 for relocation to Saclay) is undergoing an ambitious urban redevelopment. The 4 km Coulée verte greenway offers bucolic walks. For reaching CDG from this literary, green town, the taxi is the most reliable solution: 42 minutes direct, avoiding the unreliable RER B.",
      itineraire: "Your driver heads north via the D986 through Sceaux and Bourg-la-Reine to the A86. Route around Paris (east or west) depends on real-time traffic, then A1 to Roissy. Tolls ~€5 (included). 42 min normally, 52-62 min in rush hour. Alternatives include N104 via Saclay or N118 via Vélizy. Drop-off at your specific CDG terminal.",
      conseils: "RER B via Robinson takes 50-55 min (€11.45) but is notoriously unreliable and uncomfortable with luggage. For families, the 7-seat van at €118 fits everyone. Butte Rouge district residents enjoy quick D986 access. Book the night before for flights before 7am. Specify terminal (T1, T2A-G, T3). Driver tracks your flight in real time for returns.",
      comparaisonTransport: "RER B via Robinson → CDG: 50-55 min, €11.45, but walk + delays + overcrowding. Taxi €68-90: 42 min, direct, comfortable. For 2-3 passengers (€23-45/person), taxi becomes very competitive.",
      faq: [
        { question: "How much?", answer: "€68-90 sedan, €118 van. Fixed fare, tolls included (~€5), luggage included." },
        { question: "Is the RER B an option?", answer: "50-55 min via Robinson, €11.45. But frequent delays and very crowded. Taxi: direct, 42 min." },
        { question: "Rush hour?", answer: "52-62 min peak. Off-peak: 42 min." },
        { question: "Arboretum visit before the flight?", answer: "Free, open year-round. 500 tree species on 12.7 ha. A unique site in Europe." },
        { question: "Family van?", answer: "Yes, 7-seat van at €118. Perfect for holiday departures with children and bulky luggage." }
      ],
    }
  ),
];
