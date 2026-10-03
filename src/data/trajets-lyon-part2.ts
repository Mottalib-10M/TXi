import type { Trajet } from "./trajets";

export const trajetsLyonPart2: Trajet[] = [
  // ═══════════════════════════════════════════════
  // 1. LYON → AIX-LES-BAINS
  // ═══════════════════════════════════════════════
  {
    slug: "lyon-aix-les-bains",
    from: "Lyon",
    to: "Aix-les-Bains",
    fromLat: 45.764,
    fromLng: 4.8357,
    toLat: 45.6884,
    toLng: 5.9153,
    distanceKm: 110,
    durationMin: 75,
    priceEstimate: "150 — 190 €",
    category: "ville-a-ville",
    highlights: ["A43", "Lac du Bourget", "Thermes", "Chambéry", "Savoie"],
    prixMin: 150,
    prixMax: 190,
    prixVan: 240,
    dureeMax: 100,
    autoroute: "A43",
    peages: "~14,20 € (inclus dans le prix)",
    departSlug: "lyon",
    arriveeSlug: "aix-les-bains",
    liensInternes: ["lyon-chambery", "lyon-annecy", "lyon-grenoble"],
    tags: ["ville-a-ville", "savoie", "A43", "thermalisme", "lac-du-bourget"],
    hub: "lyon",
    i18n: {
      fr: {
        metaTitle: "Taxi Lyon → Aix-les-Bains | 110 km, dès 150 € | TaxiNeo",
        metaDescription: "Via A43 en 1h15. Lac du Bourget, Thermes, Chambéry et Savoie en chemin. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Lyon → Aix-les-Bains",
        heroSubtitle: "Votre transfert Lyon → Aix-les-Bains au prix fixe de 150 — 190 €. Trajet direct par l'A43, 1h15 de route. Réservation en ligne.",
        description: "Le trajet Lyon — Aix-les-Bains relie la métropole lyonnaise à la célèbre station thermale savoyarde, nichée au bord du lac du Bourget. Distantes de 110 km, les deux villes sont reliées par l'autoroute A43, qui traverse les paysages de l'Avant-Pays savoyard. Votre chauffeur TaxiNeo vous prend en charge à Lyon et vous conduit directement à votre hôtel ou établissement thermal.",
        routeDescription: "L'itinéraire emprunte l'A43 depuis Lyon en direction de Chambéry, passant par Bourgoin-Jallieu et la Tour-du-Pin. Après Chambéry, la route rejoint Aix-les-Bains par la N201 le long du lac du Bourget. En cas de trafic dense, le chauffeur peut emprunter des alternatives par les routes départementales de l'Avant-Pays savoyard.",
        introduction: "Aix-les-Bains, perle de la Savoie, est l'une des plus anciennes stations thermales d'Europe. Depuis l'époque romaine, ses eaux chaudes naturelles attirent des visiteurs en quête de bien-être et de guérison. Aujourd'hui, la ville séduit autant par ses thermes modernes que par son cadre exceptionnel au bord du lac du Bourget, le plus grand lac naturel de France. Le trajet en taxi depuis Lyon est la solution idéale pour les curistes et les touristes qui souhaitent arriver détendus, sans le stress de la conduite sur l'autoroute. De nombreux visiteurs arrivent par le TGV en gare de Lyon Part-Dieu ou par avion à l'aéroport Lyon-Saint Exupéry et ont besoin d'un transfert fiable vers Aix-les-Bains. TaxiNeo répond parfaitement à ce besoin avec un service porte-à-porte, des véhicules confortables et un tarif fixe garanti. Que vous veniez pour une cure thermale de trois semaines, un week-end romantique au bord du lac ou une randonnée dans le massif de l'Épine, votre chauffeur vous dépose directement à l'adresse de votre choix, que ce soit aux Thermes Chevalley, au Grand Port ou dans l'un des nombreux hôtels de la station.",
        itineraire: "Le parcours débute dans Lyon, où votre chauffeur vous prend en charge à l'adresse indiquée lors de la réservation : domicile, hôtel, gare Part-Dieu ou Perrache, ou encore aéroport Saint Exupéry. Le véhicule rejoint rapidement le périphérique Est pour accéder à l'A43 en direction de Chambéry. L'autoroute traverse d'abord la plaine de l'Est lyonnais, avec ses zones logistiques et commerciales, avant d'atteindre les collines de l'Isle-d'Abeau et Bourgoin-Jallieu. Le paysage devient progressivement plus vallonné en traversant la Tour-du-Pin et les Abrets, portes de l'Avant-Pays savoyard. Après le péage de Chignin, l'autoroute contourne Chambéry par le sud et le chauffeur emprunte la sortie vers Aix-les-Bains. La dernière portion du trajet longe les contreforts du massif de l'Épine avant de révéler le panorama spectaculaire du lac du Bourget, avec la silhouette de la Dent du Chat en arrière-plan. L'arrivée à Aix-les-Bains se fait par le boulevard de la Roche-du-Roi ou par la route du bord du lac selon votre destination finale. Le péage total sur l'A43 s'élève à environ 14,20 €, entièrement inclus dans le tarif TaxiNeo.",
        conseils: "Pour votre trajet Lyon — Aix-les-Bains, nous vous conseillons de réserver votre taxi à l'avance, surtout en période de cure thermale (mars à novembre) où la demande est forte. Si vous arrivez en gare de Lyon Part-Dieu par le TGV, indiquez votre numéro de train lors de la réservation : votre chauffeur surveillera l'horaire réel d'arrivée et vous attendra même en cas de retard. Pour les curistes, pensez à préciser si vous avez des bagages volumineux ou du matériel médical : nos véhicules berline offrent un grand coffre, et notre service Van peut accueillir des équipements plus encombrants. Si vous souhaitez profiter du trajet pour découvrir la région, demandez à votre chauffeur un arrêt photo au belvédère du lac du Bourget, accessible depuis la route. En été, Aix-les-Bains est très prisée et le stationnement y est difficile : un argument de plus pour choisir le taxi plutôt que la voiture personnelle. Nos chauffeurs connaissent parfaitement les adresses des principaux établissements thermaux et hôteliers de la station.",
        comparaisonTransport: "Le TER Lyon — Aix-les-Bains met environ 1h20 pour un billet à partir de 17,50 €, avec un changement fréquent à Chambéry. Le TGV direct est rare sur cette ligne et coûte environ 25 à 40 €. BlaBlaCar propose des trajets entre 10 € et 15 € par passager, mais avec des horaires aléatoires. En voiture personnelle, comptez environ 14 € d'essence et 14,20 € de péage, soit 28 € hors stationnement. Le taxi TaxiNeo à 150 — 190 € pour 1 à 4 passagers offre le porte-à-porte total, sans correspondance en gare de Chambéry ni recherche de parking à Aix-les-Bains. Pour 2 curistes voyageant ensemble avec leurs bagages, le coût de 75 à 95 € par personne reste très raisonnable face au confort et à la simplicité du service.",
        faq: [
          { question: "Quel est le prix d'un taxi Lyon — Aix-les-Bains ?", answer: "Le tarif fixe TaxiNeo est de 150 à 190 € selon les adresses exactes. Ce prix inclut les péages autoroutiers (~14,20 €) et ne varie pas en fonction du trafic. Supplément de 15 % entre 19h et 7h." },
          { question: "Combien de temps dure le trajet Lyon — Aix-les-Bains ?", answer: "Le trajet dure environ 1h15 en conditions normales. Aux heures de pointe ou en période de vacances, comptez jusqu'à 1h40." },
          { question: "Peut-on être déposé directement aux Thermes d'Aix-les-Bains ?", answer: "Oui, votre chauffeur vous dépose à l'adresse exacte de votre choix : Thermes Chevalley, Thermes Marlioz, votre hôtel ou tout autre point dans Aix-les-Bains." },
          { question: "Le taxi peut-il me prendre à l'aéroport Lyon-Saint Exupéry ?", answer: "Oui, nous proposons le transfert aéroport Saint Exupéry — Aix-les-Bains. Le trajet est d'environ 100 km (1h10) et le tarif est ajusté en conséquence." },
          { question: "Peut-on transporter des bagages de cure (matériel médical) ?", answer: "Nos berlines disposent d'un grand coffre adapté aux valises et petit matériel. Pour du matériel médical volumineux, optez pour notre Van à 240 €." }
        ],
      },
      en: {
        metaTitle: "Taxi Lyon → Aix-les-Bains | 110 km, from €150 | TaxiNeo",
        metaDescription: "Via A43, 1h15 ride. Lac du Bourget, Thermes, Chambéry and Savoie en route. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Lyon → Aix-les-Bains",
        heroSubtitle: "Your Lyon → Aix-les-Bains transfer at a fixed price of €150–€190. Direct route via A43, 1h15 drive. Online booking.",
        description: "The Lyon — Aix-les-Bains route connects the Lyon metropolitan area to the famous Savoyard thermal spa town, nestled on the shores of Lac du Bourget. 110 km apart, the two cities are linked by the A43 motorway through the Avant-Pays Savoyard landscapes. Your TaxiNeo driver picks you up in Lyon and takes you directly to your hotel or spa establishment.",
        routeDescription: "The route takes the A43 from Lyon towards Chambéry, passing through Bourgoin-Jallieu and La Tour-du-Pin. After Chambéry, the road reaches Aix-les-Bains via the N201 along Lac du Bourget. In heavy traffic, the driver can use alternative routes through the Avant-Pays Savoyard departmental roads.",
        introduction: "Aix-les-Bains, the jewel of Savoie, is one of Europe's oldest thermal spa towns. Since Roman times, its natural hot springs have attracted visitors seeking wellness and healing. Today, the town appeals with both its modern spa facilities and its exceptional setting on the shores of Lac du Bourget, the largest natural lake in France. A taxi from Lyon is the ideal solution for spa-goers and tourists who want to arrive relaxed, without the stress of motorway driving. Many visitors arrive via TGV at Lyon Part-Dieu station or by air at Lyon-Saint Exupéry airport and need a reliable transfer to Aix-les-Bains. TaxiNeo perfectly meets this need with a door-to-door service, comfortable vehicles and a guaranteed fixed fare. Whether you are coming for a three-week spa treatment, a romantic lakeside weekend or a hike in the Épine massif, your driver drops you directly at your chosen address, be it the Thermes Chevalley, the Grand Port or one of the resort's many hotels.",
        itineraire: "The journey begins in Lyon, where your driver picks you up at the address given during booking: home, hotel, Part-Dieu or Perrache station, or Saint Exupéry airport. The vehicle quickly reaches the eastern ring road to access the A43 towards Chambéry. The motorway first crosses the eastern Lyon plain with its logistics and commercial zones, before reaching the hills of l'Isle-d'Abeau and Bourgoin-Jallieu. The landscape gradually becomes more hilly through La Tour-du-Pin and Les Abrets, gateways to the Avant-Pays Savoyard. After the Chignin toll, the motorway bypasses Chambéry to the south and the driver takes the exit for Aix-les-Bains. The final section runs along the foothills of the Épine massif before revealing the spectacular panorama of Lac du Bourget, with the silhouette of the Dent du Chat in the background. Arrival in Aix-les-Bains is via the boulevard de la Roche-du-Roi or the lakeside road depending on your final destination. The total toll on the A43 is approximately €14.20, fully included in the TaxiNeo fare.",
        conseils: "For your Lyon — Aix-les-Bains journey, we recommend booking your taxi in advance, especially during spa season (March to November) when demand is high. If arriving at Lyon Part-Dieu station by TGV, provide your train number when booking: your driver will monitor the actual arrival time and wait even in case of delay. For spa-goers, remember to mention bulky luggage or medical equipment: our sedan vehicles have a large boot, and our Van service can accommodate more cumbersome items. If you want to enjoy the journey to discover the region, ask your driver for a photo stop at the Lac du Bourget viewpoint, accessible from the road. In summer, Aix-les-Bains is very popular and parking is difficult: another reason to choose a taxi over a personal car. Our drivers know the addresses of all major spa establishments and hotels in the resort perfectly.",
        comparaisonTransport: "The TER Lyon — Aix-les-Bains takes about 1h20 for a ticket from €17.50, often requiring a change at Chambéry. Direct TGV services are rare on this line and cost around €25 to €40. BlaBlaCar offers rides between €10 and €15 per passenger, but with unpredictable schedules. By personal car, budget around €14 for fuel and €14.20 for tolls, totalling €28 excluding parking. The TaxiNeo taxi at €150–€190 for 1 to 4 passengers offers complete door-to-door service, with no connections at Chambéry station and no parking hassle in Aix-les-Bains. For 2 spa-goers travelling together with their luggage, the cost of €75 to €95 per person remains very reasonable given the comfort and simplicity of the service.",
        faq: [
          { question: "What is the price of a taxi Lyon — Aix-les-Bains?", answer: "The TaxiNeo fixed rate is €150 to €190 depending on exact addresses. This price includes motorway tolls (~€14.20) and does not vary with traffic. A 15% surcharge applies between 7pm and 7am." },
          { question: "How long does the Lyon — Aix-les-Bains taxi journey take?", answer: "The journey takes about 1h15 under normal conditions. During rush hours or holiday periods, allow up to 1h40." },
          { question: "Can I be dropped directly at the Aix-les-Bains thermal spas?", answer: "Yes, your driver drops you at your exact chosen address: Thermes Chevalley, Thermes Marlioz, your hotel or any other point in Aix-les-Bains." },
          { question: "Can the taxi pick me up at Lyon-Saint Exupéry airport?", answer: "Yes, we offer transfers from Saint Exupéry airport to Aix-les-Bains. The journey is about 100 km (1h10) and the fare is adjusted accordingly." },
          { question: "Can medical or spa equipment be transported?", answer: "Our sedans have a large boot suitable for suitcases and small equipment. For bulky medical equipment, choose our Van service at €240." }
        ],
      },
    },
  },
  // ═══════════════════════════════════════════════
  // 2. LYON → ANNEMASSE
  // ═══════════════════════════════════════════════
  {
    slug: "lyon-annemasse",
    from: "Lyon",
    to: "Annemasse",
    fromLat: 45.764,
    fromLng: 4.8357,
    toLat: 46.1934,
    toLng: 6.2364,
    distanceKm: 150,
    durationMin: 100,
    priceEstimate: "200 — 250 €",
    category: "ville-a-ville",
    highlights: ["A42", "A41", "Nantua", "Bellegarde-sur-Valserine", "Frontière suisse"],
    prixMin: 200,
    prixMax: 250,
    prixVan: 310,
    dureeMax: 130,
    autoroute: "A42 puis A41",
    peages: "~18,60 € (inclus dans le prix)",
    departSlug: "lyon",
    arriveeSlug: "annemasse",
    liensInternes: ["lyon-geneve", "lyon-annecy", "lyon-chambery"],
    tags: ["ville-a-ville", "haute-savoie", "A41", "frontalier", "geneve"],
    hub: "lyon",
    i18n: {
      fr: {
        metaTitle: "Taxi Lyon → Annemasse | 150 km, dès 200 € | TaxiNeo",
        metaDescription: "Par A42 puis A41, 1h40 de trajet. En passant par Nantua, Bellegarde-sur-Valserine et Frontière suisse. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Lyon → Annemasse",
        heroSubtitle: "Votre transfert Lyon → Annemasse au prix fixe de 200 — 250 €. Trajet direct par A42/A41, 1h40 de route. Réservation en ligne.",
        description: "Le trajet Lyon — Annemasse relie la métropole lyonnaise à la ville frontalière de Haute-Savoie, porte d'entrée vers Genève. Distantes de 150 km, les deux villes sont connectées par les autoroutes A42 puis A41, traversant le Bugey et le Genevois. Votre chauffeur TaxiNeo assure un transfert direct, idéal pour les travailleurs frontaliers et les voyageurs en transit vers la Suisse.",
        routeDescription: "Depuis Lyon, l'itinéraire emprunte l'A42 vers Bourg-en-Bresse puis bifurque sur l'A40 à travers le massif du Jura via Nantua et Bellegarde-sur-Valserine. L'autoroute rejoint ensuite l'A41 pour descendre vers Annemasse par Saint-Julien-en-Genevois. Le parcours offre des paysages variés entre plaines de la Dombes, gorges du Jura et panorama sur le mont Salève.",
        introduction: "Annemasse, deuxième ville de Haute-Savoie, occupe une position stratégique unique à la frontière franco-suisse, à quelques centaines de mètres seulement de Genève. Cette proximité en fait une ville dynamique où cohabitent résidents français, travailleurs frontaliers et expatriés internationaux. Le Léman Express, tramway transfrontalier reliant Annemasse à Genève, a renforcé encore l'attractivité de cette agglomération du Genevois français. Le trajet en taxi depuis Lyon est particulièrement prisé par les voyageurs d'affaires se rendant aux organisations internationales de Genève (ONU, CERN, OMS), les familles rejoignant les stations de ski du Chablais et du Faucigny, et les frontaliers qui déménagent ou se déplacent avec des bagages volumineux. TaxiNeo offre un service porte-à-porte depuis n'importe quelle adresse lyonnaise jusqu'à Annemasse ou les communes environnantes. Le tarif fixe inclut les péages autoroutiers et ne varie jamais en fonction du trafic ou des conditions météorologiques, vous garantissant une totale transparence tarifaire.",
        itineraire: "Le parcours quitte Lyon par le nord-est en empruntant l'autoroute A42 en direction de Genève. Cette première section traverse la plaine de la Dombes, célèbre pour ses mille étangs et sa gastronomie, notamment ses grenouilles et sa volaille de Bresse. À hauteur de Bourg-en-Bresse, le chauffeur continue sur l'A40 qui s'enfonce dans le massif du Jura. Le viaduc de Nantua, ouvrage spectaculaire surplombant le lac émeraude du même nom, constitue un moment fort du voyage. L'autoroute traverse ensuite les gorges de l'Ain et le tunnel de Chamoise avant d'atteindre Bellegarde-sur-Valserine, au confluent du Rhône et de la Valserine. À partir de là, le trajet suit la vallée du Rhône en direction de l'A41 vers Saint-Julien-en-Genevois, avec une vue imprenable sur le mont Salève, montagne emblématique surplombant Genève. L'arrivée à Annemasse se fait par l'échangeur de la douane de Bardonnex ou par Saint-Julien-en-Genevois selon votre destination exacte. Le péage total s'élève à environ 18,60 €, intégralement inclus dans le tarif TaxiNeo.",
        conseils: "Pour votre trajet Lyon — Annemasse, évitez les départs le dimanche soir et le lundi matin : les frontaliers suisses créent une forte affluence sur l'A40 et l'A41 à ces créneaux. Si vous devez vous rendre à Genève même, sachez que votre chauffeur TaxiNeo peut vous y conduire directement moyennant un léger supplément pour la traversée de frontière, mais il est souvent plus pratique d'être déposé à Annemasse et de prendre le Léman Express (8 minutes jusqu'à Genève Cornavin). Pour les voyageurs en correspondance à l'aéroport de Genève-Cointrin, indiquez-le lors de la réservation afin que le chauffeur prenne l'itinéraire le plus adapté. En hiver, l'A40 dans le Jura peut être enneigée : nos véhicules sont systématiquement équipés de pneus hiver. Pensez également à emporter votre passeport ou carte d'identité si votre chauffeur doit traverser la frontière suisse pour votre dépose.",
        comparaisonTransport: "Le TER Lyon — Annemasse met environ 2h à 2h30 avec un ou deux changements (souvent à Aix-les-Bains ou Chambéry) pour un billet autour de 30 €. Le TGV Lyria Lyon — Genève (puis Léman Express vers Annemasse) coûte 40 à 80 € et prend environ 2h porte-à-porte. BlaBlaCar affiche des tarifs entre 15 € et 22 € par passager. En voiture, comptez 18 € d'essence et 18,60 € de péage, soit environ 37 € hors stationnement. Le taxi TaxiNeo à 200 — 250 € pour 1 à 4 passagers offre le confort absolu du porte-à-porte sans changement ni passage en gare. Pour 3 ou 4 personnes voyageant ensemble, le coût par personne (50 à 83 €) est comparable au TGV Lyria tout en offrant un service premium et une flexibilité horaire totale.",
        faq: [
          { question: "Quel est le prix d'un taxi Lyon — Annemasse ?", answer: "Le tarif fixe TaxiNeo est de 200 à 250 € selon les adresses exactes de prise en charge et de dépose. Ce prix inclut les péages autoroutiers (~18,60 €) et ne varie pas selon le trafic." },
          { question: "Combien de temps dure le trajet Lyon — Annemasse ?", answer: "Le trajet dure environ 1h40 en conditions normales. En période de pointe ou de trafic hivernal, comptez jusqu'à 2h10." },
          { question: "Le chauffeur peut-il me déposer à Genève plutôt qu'Annemasse ?", answer: "Oui, nos chauffeurs peuvent vous conduire directement à Genève (aéroport Cointrin, gare Cornavin ou toute adresse). Un supplément transfrontalier s'applique et est communiqué lors de la réservation." },
          { question: "Faut-il un passeport pour ce trajet ?", answer: "Pour un trajet Lyon — Annemasse (France), aucun passeport n'est nécessaire. Si votre chauffeur doit traverser la frontière suisse, une pièce d'identité valide est requise." },
          { question: "Peut-on réserver un taxi pour un transfert vers l'aéroport de Genève ?", answer: "Oui, TaxiNeo assure les transferts Lyon — Genève Aéroport (Cointrin). Le trajet est similaire en distance et le tarif est ajusté. Précisez-le lors de la réservation." }
        ],
      },
      en: {
        metaTitle: "Taxi Lyon → Annemasse | 150 km, from €200 | TaxiNeo",
        metaDescription: "Direct route via A42 then A41, 1h40. Nantua, Bellegarde-sur-Valserine and Frontière suisse along the way. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Lyon → Annemasse",
        heroSubtitle: "Your Lyon → Annemasse transfer at a fixed price of €200–€250. Direct route via A42/A41, 1h40 drive. Online booking.",
        description: "The Lyon — Annemasse route connects the Lyon metropolitan area to the Haute-Savoie border town, gateway to Geneva. 150 km apart, the two cities are linked by the A42 then A41 motorways through the Bugey and the Genevois regions. Your TaxiNeo driver provides a direct transfer, ideal for cross-border workers and travellers in transit to Switzerland.",
        routeDescription: "From Lyon, the route takes the A42 towards Bourg-en-Bresse then branches onto the A40 through the Jura massif via Nantua and Bellegarde-sur-Valserine. The motorway then joins the A41 to descend towards Annemasse via Saint-Julien-en-Genevois. The route offers varied landscapes from the Dombes plains to Jura gorges and views of Mont Salève.",
        introduction: "Annemasse, the second largest city in Haute-Savoie, occupies a uniquely strategic position on the Franco-Swiss border, just a few hundred metres from Geneva. This proximity makes it a dynamic town where French residents, cross-border workers and international expatriates live side by side. The Léman Express, a cross-border tram linking Annemasse to Geneva, has further boosted the attractiveness of this French Genevois conurbation. The taxi journey from Lyon is particularly popular with business travellers heading to Geneva's international organisations (UN, CERN, WHO), families joining ski resorts in the Chablais and Faucigny areas, and cross-border workers moving or travelling with bulky luggage. TaxiNeo offers a door-to-door service from any Lyon address to Annemasse or surrounding communes. The fixed fare includes motorway tolls and never varies with traffic or weather conditions, guaranteeing complete price transparency.",
        itineraire: "The route leaves Lyon to the northeast via the A42 motorway towards Geneva. This first section crosses the Dombes plain, famous for its thousand ponds and gastronomy, notably its frogs and Bresse poultry. At Bourg-en-Bresse, the driver continues on the A40 which enters the Jura massif. The Nantua viaduct, a spectacular structure overlooking the emerald lake of the same name, is a highlight of the journey. The motorway then crosses the Ain gorges and the Chamoise tunnel before reaching Bellegarde-sur-Valserine, at the confluence of the Rhône and the Valserine. From there, the route follows the Rhône valley towards the A41 to Saint-Julien-en-Genevois, with a stunning view of Mont Salève, the iconic mountain overlooking Geneva. Arrival in Annemasse is via the Bardonnex customs interchange or Saint-Julien-en-Genevois depending on your exact destination. The total toll is approximately €18.60, fully included in the TaxiNeo fare.",
        conseils: "For your Lyon — Annemasse journey, avoid departures on Sunday evenings and Monday mornings: Swiss cross-border workers create heavy traffic on the A40 and A41 at these times. If you need to reach Geneva itself, your TaxiNeo driver can take you there directly with a small supplement for the border crossing, but it is often more convenient to be dropped at Annemasse and take the Léman Express (8 minutes to Geneva Cornavin). For travellers connecting at Geneva-Cointrin airport, mention this when booking so the driver takes the most suitable route. In winter, the A40 through the Jura can be snowy: our vehicles are systematically equipped with winter tyres. Also remember to bring your passport or ID card if your driver needs to cross the Swiss border for your drop-off.",
        comparaisonTransport: "The TER Lyon — Annemasse takes about 2h to 2h30 with one or two changes (often at Aix-les-Bains or Chambéry) for a ticket around €30. The TGV Lyria Lyon — Geneva (then Léman Express to Annemasse) costs €40 to €80 and takes about 2h door-to-door. BlaBlaCar lists fares between €15 and €22 per passenger. By car, budget €18 for fuel and €18.60 for tolls, about €37 excluding parking. The TaxiNeo taxi at €200–€250 for 1 to 4 passengers offers absolute door-to-door comfort with no changes or station visits. For 3 or 4 people travelling together, the cost per person (€50 to €83) is comparable to the TGV Lyria while offering premium service and complete schedule flexibility.",
        faq: [
          { question: "What is the price of a taxi Lyon — Annemasse?", answer: "The TaxiNeo fixed rate is €200 to €250 depending on exact pick-up and drop-off addresses. This price includes motorway tolls (~€18.60) and does not vary with traffic." },
          { question: "How long does the Lyon — Annemasse taxi journey take?", answer: "The journey takes about 1h40 under normal conditions. During peak times or winter traffic, allow up to 2h10." },
          { question: "Can the driver drop me in Geneva instead of Annemasse?", answer: "Yes, our drivers can take you directly to Geneva (Cointrin airport, Cornavin station or any address). A cross-border supplement applies and is communicated at booking." },
          { question: "Do I need a passport for this journey?", answer: "For a Lyon — Annemasse journey (within France), no passport is needed. If your driver needs to cross the Swiss border, a valid ID is required." },
          { question: "Can I book a taxi for a transfer to Geneva airport?", answer: "Yes, TaxiNeo provides Lyon — Geneva Airport (Cointrin) transfers. The distance is similar and the fare is adjusted. Specify this when booking." }
        ],
      },
    },
  },
  // ═══════════════════════════════════════════════
  // 3. LYON → MONTÉLIMAR
  // ═══════════════════════════════════════════════
  // ═══════════════════════════════════════════════
  // 4. LYON → CLERMONT-FERRAND
  // ═══════════════════════════════════════════════
  // ═══════════════════════════════════════════════
  // 5. LYON → DIJON
  // ═══════════════════════════════════════════════
  // ═══════════════════════════════════════════════
  // 6. LYON → MARSEILLE
  // ═══════════════════════════════════════════════
  // ═══════════════════════════════════════════════
  // 7. LYON → TURIN
  // ═══════════════════════════════════════════════
  {
    slug: "lyon-turin",
    from: "Lyon",
    to: "Turin",
    fromLat: 45.764,
    fromLng: 4.8357,
    toLat: 45.0703,
    toLng: 7.6869,
    distanceKm: 310,
    durationMin: 195,
    priceEstimate: "420 — 520 €",
    category: "longue-distance",
    highlights: ["A43", "Tunnel du Fréjus", "Modane", "Susa", "Val di Susa", "Alpes"],
    prixMin: 420,
    prixMax: 520,
    prixVan: 620,
    dureeMax: 250,
    autoroute: "A43 puis tunnel du Fréjus (T4)",
    peages: "~55 € (péages + tunnel Fréjus, inclus dans le prix)",
    departSlug: "lyon",
    arriveeSlug: "turin",
    liensInternes: ["lyon-chambery", "lyon-grenoble", "lyon-milan"],
    tags: ["longue-distance", "international", "italie", "A43", "frejus", "alpes"],
    hub: "lyon",
    i18n: {
      fr: {
        metaTitle: "Taxi Lyon → Turin | 310 km, dès 420 €, 3h15 | TaxiNeo",
        metaDescription: "Par A43 puis tunnel du Fréjus, 3h15 de trajet. Tunnel du Fréjus, Modane, Susa et Val di Susa en chemin. Dépose à votre adresse exacte, retour possible.",
        heroTitle: "Taxi Lyon → Turin",
        heroSubtitle: "Votre transfert Lyon → Turin au prix fixe de 420 — 520 €. Trajet par A43 et tunnel du Fréjus, 3h15 de route. Réservation en ligne.",
        description: "Le trajet Lyon — Turin est un transfert international traversant les Alpes par le tunnel routier du Fréjus. 310 km séparent la capitale des Gaules de la première capitale de l'Italie unie, en passant par Chambéry, la Maurienne et le Val di Susa. Votre chauffeur TaxiNeo assure ce transfert transalpin en toute sécurité et confort.",
        routeDescription: "L'itinéraire emprunte l'A43 depuis Lyon via Chambéry, puis remonte la vallée de la Maurienne jusqu'à Modane. Le trajet traverse le tunnel du Fréjus (12,9 km) pour entrer en Italie et descend ensuite le Val di Susa jusqu'à Turin par l'autoroute A32 italienne. Un parcours alpin spectaculaire.",
        introduction: "Turin (Torino), première capitale de l'Italie unifiée en 1861, est une métropole élégante au pied des Alpes, réputée pour son architecture baroque, le musée égyptien (le deuxième au monde après Le Caire), la Mole Antonelliana et bien sûr la Fiat et la Juventus. Le trajet en taxi depuis Lyon offre une traversée alpine mémorable, du sillon alpin français aux vallées piémontaises. Ce transfert international est particulièrement apprécié des voyageurs d'affaires franco-italiens, des familles expatriées, des passionnés d'automobile se rendant au musée de l'Automobile de Turin, et des touristes combinant un séjour Lyon-Turin. Le tunnel du Fréjus, ouvert en 1980 et long de 12,9 km, constitue le passage routier principal entre la France et l'Italie du Nord à travers les Alpes. TaxiNeo propose un tarif fixe tout compris pour ce trajet international, incluant les péages français, le tunnel du Fréjus et les péages italiens, vous garantissant une transparence tarifaire totale sans mauvaise surprise à la douane ou au péage.",
        itineraire: "Le parcours transalpin débute à Lyon et rejoint l'A43 en direction de Chambéry. Après avoir contourné Chambéry, la route s'engage dans la vallée de la Maurienne, l'une des plus longues vallées des Alpes françaises. On remonte l'Arc, torrent alpin, en passant par Saint-Jean-de-Maurienne, ancienne capitale du comté de Maurienne, puis par Saint-Michel-de-Maurienne et Modane, dernière ville française avant le tunnel. Le tunnel routier du Fréjus, percé sous le col du même nom à 1 228 m d'altitude, s'étend sur 12,9 km entre Modane (France) et Bardonecchia (Italie). La traversée dure environ 15 minutes dans ce tube moderne et sécurisé. Côté italien, le Val di Susa déroule ses panoramas alpins : Bardonecchia, Oulx, Susa, et les vignobles du Piémont commencent à apparaître. L'autoroute A32 italienne descend ensuite rapidement vers la plaine du Pô. L'arrivée à Turin se fait par la tangenziale (périphérique) qui dessert les différents quartiers de la ville. Le coût total des péages et du tunnel s'élève à environ 55 € (péages A43 + tunnel du Fréjus + péages italiens), intégralement inclus dans le tarif TaxiNeo.",
        conseils: "Pour votre trajet Lyon — Turin, assurez-vous d'avoir votre passeport ou carte d'identité en cours de validité, même si la frontière Schengen est généralement ouverte. Des contrôles aléatoires peuvent avoir lieu à l'entrée ou à la sortie du tunnel du Fréjus. En hiver, la vallée de la Maurienne et l'accès au tunnel peuvent être soumis à des conditions hivernales rigoureuses : nos véhicules sont équipés de pneus hiver et de chaînes en cas de besoin. Le tunnel du Fréjus peut connaître des fermetures temporaires pour maintenance : nos chauffeurs vérifient les conditions en temps réel et peuvent basculer sur le tunnel du Mont-Blanc (via Chamonix) si nécessaire, avec un temps de trajet similaire. Si vous voyagez pour le Salon de l'Automobile de Turin ou un match de la Juventus, réservez tôt car la demande est forte. Pour le retour, TaxiNeo peut également organiser le trajet inverse Turin — Lyon.",
        comparaisonTransport: "Le TGV Lyon — Turin (via le Fréjus ferroviaire) met environ 3h45 à 4h avec un changement à Chambéry ou Modane, pour un billet de 40 à 80 €. Le bus FlixBus propose des trajets dès 19 €, mais le trajet dure 4h30 à 5h. En voiture, comptez 35 € d'essence, 20 € de péages français, environ 48 € pour le tunnel du Fréjus (aller simple véhicule léger) et 8 € de péages italiens, soit environ 111 € hors stationnement. Le taxi TaxiNeo à 420 — 520 € pour 1 à 4 passagers inclut l'intégralité de ces frais dans un tarif fixe. Pour 4 passagers, le coût par personne (105 à 130 €) est comparable au train tout en offrant un confort porte-à-porte international, sans changement ni manipulation de bagages en gare.",
        faq: [
          { question: "Quel est le prix d'un taxi Lyon — Turin ?", answer: "Le tarif fixe TaxiNeo est de 420 à 520 € selon les adresses exactes. Ce prix inclut tous les péages français (~20 €), le tunnel du Fréjus (~48 €) et les péages italiens (~8 €)." },
          { question: "Combien de temps dure le trajet Lyon — Turin ?", answer: "Le trajet dure environ 3h15 en conditions normales. En hiver ou en cas de trafic au tunnel du Fréjus, comptez jusqu'à 4h10." },
          { question: "Faut-il un passeport pour aller à Turin ?", answer: "Oui, une pièce d'identité valide (carte d'identité ou passeport) est requise pour la traversée de la frontière franco-italienne, même au sein de l'espace Schengen." },
          { question: "Le tunnel du Fréjus est-il ouvert toute l'année ?", answer: "Oui, le tunnel du Fréjus est ouvert 24h/24 toute l'année, sauf fermetures exceptionnelles pour maintenance. Nos chauffeurs vérifient en temps réel et peuvent utiliser le Mont-Blanc comme alternative." },
          { question: "Peut-on être déposé à l'aéroport de Turin-Caselle ?", answer: "Oui, nos chauffeurs peuvent vous déposer à l'aéroport de Turin-Caselle (TRN), situé à 15 km au nord de Turin. Précisez-le lors de la réservation." }
        ],
      },
      en: {
        metaTitle: "Taxi Lyon → Turin | Fixed price from €420 | TaxiNeo",
        metaDescription: "Direct route via A43 then tunnel du Fréjus, 3h15. Tunnel du Fréjus, Modane, Susa and Val di Susa en route. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Lyon → Turin",
        heroSubtitle: "Your Lyon → Turin transfer at a fixed price of €420–€520. Route via A43 and Fréjus tunnel, 3h15 drive. Online booking.",
        description: "The Lyon — Turin route is an international transfer crossing the Alps through the Fréjus road tunnel. 310 km separate the Capital of the Gauls from the first capital of unified Italy, passing through Chambéry, the Maurienne Valley and the Val di Susa. Your TaxiNeo driver ensures this transalpine transfer safely and comfortably.",
        routeDescription: "The route takes the A43 from Lyon via Chambéry, then climbs the Maurienne Valley to Modane. The journey crosses the Fréjus tunnel (12.9 km) to enter Italy and descends the Val di Susa to Turin via the Italian A32 motorway. A spectacular Alpine route.",
        introduction: "Turin (Torino), the first capital of unified Italy in 1861, is an elegant metropolis at the foot of the Alps, renowned for its baroque architecture, the Egyptian Museum (second largest after Cairo), the Mole Antonelliana and of course Fiat and Juventus. The taxi journey from Lyon offers a memorable Alpine crossing, from the French Alpine corridor to the Piedmontese valleys. This international transfer is particularly popular with Franco-Italian business travellers, expatriate families, automobile enthusiasts heading to Turin's Automobile Museum, and tourists combining a Lyon-Turin trip. The Fréjus tunnel, opened in 1980 and 12.9 km long, is the main road crossing between France and northern Italy through the Alps. TaxiNeo offers an all-inclusive fixed fare for this international route, including French tolls, the Fréjus tunnel and Italian tolls, guaranteeing complete price transparency with no surprises at customs or toll booths.",
        itineraire: "The transalpine route begins in Lyon and joins the A43 towards Chambéry. After bypassing Chambéry, the road enters the Maurienne Valley, one of the longest valleys in the French Alps. You follow the Arc, an Alpine torrent, passing through Saint-Jean-de-Maurienne, former capital of the County of Maurienne, then Saint-Michel-de-Maurienne and Modane, the last French town before the tunnel. The Fréjus road tunnel, bored beneath the pass of the same name at 1,228 m altitude, extends 12.9 km between Modane (France) and Bardonecchia (Italy). The crossing takes about 15 minutes through this modern, secure tube. On the Italian side, the Val di Susa unfolds its Alpine panoramas: Bardonecchia, Oulx, Susa, and the Piedmont vineyards begin to appear. The Italian A32 motorway then descends rapidly towards the Po plain. Arrival in Turin is via the tangenziale (ring road) serving the city's various districts. The total cost of tolls and tunnel is approximately €55 (A43 tolls + Fréjus tunnel + Italian tolls), fully included in the TaxiNeo fare.",
        conseils: "For your Lyon — Turin journey, make sure you have a valid passport or ID card, even though the Schengen border is normally open. Random checks may occur at the entrance or exit of the Fréjus tunnel. In winter, the Maurienne Valley and tunnel access can experience severe winter conditions: our vehicles are equipped with winter tyres and chains if needed. The Fréjus tunnel may have temporary closures for maintenance: our drivers check conditions in real time and can switch to the Mont Blanc tunnel (via Chamonix) if necessary, with a similar journey time. If travelling for the Turin Motor Show or a Juventus match, book early as demand is high. For the return, TaxiNeo can also arrange the reverse Turin — Lyon journey.",
        comparaisonTransport: "The TGV Lyon — Turin (via the Fréjus rail tunnel) takes about 3h45 to 4h with a change at Chambéry or Modane, for a ticket of €40 to €80. FlixBus offers rides from €19, but the journey takes 4h30 to 5h. By car, budget €35 for fuel, €20 for French tolls, about €48 for the Fréjus tunnel (one-way light vehicle) and €8 for Italian tolls, totalling about €111 excluding parking. The TaxiNeo taxi at €420–€520 for 1 to 4 passengers includes all these costs in a fixed fare. For 4 passengers, the cost per person (€105 to €130) is comparable to the train while offering international door-to-door comfort, with no changes or luggage handling at stations.",
        faq: [
          { question: "What is the price of a taxi Lyon — Turin?", answer: "The TaxiNeo fixed rate is €420 to €520 depending on exact addresses. This price includes all French tolls (~€20), the Fréjus tunnel (~€48) and Italian tolls (~€8)." },
          { question: "How long does the Lyon — Turin taxi journey take?", answer: "The journey takes about 3h15 under normal conditions. In winter or with traffic at the Fréjus tunnel, allow up to 4h10." },
          { question: "Do I need a passport to go to Turin?", answer: "Yes, a valid ID (identity card or passport) is required for crossing the Franco-Italian border, even within the Schengen area." },
          { question: "Is the Fréjus tunnel open all year?", answer: "Yes, the Fréjus tunnel is open 24/7 all year, except exceptional maintenance closures. Our drivers check in real time and can use the Mont Blanc tunnel as an alternative." },
          { question: "Can I be dropped at Turin-Caselle airport?", answer: "Yes, our drivers can drop you at Turin-Caselle airport (TRN), located 15 km north of Turin. Specify this when booking." }
        ],
      },
    },
  },
  // ═══════════════════════════════════════════════
  // 8. LYON → GENÈVE
  // ═══════════════════════════════════════════════
];
