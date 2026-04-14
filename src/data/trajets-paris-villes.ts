import type { Trajet } from "./trajets";

export const trajetsParisVilles: Trajet[] = [
  // ═══════════════════════════════════════════════
  // PARIS → GRANDES VILLES DE FRANCE (40 trajets)
  // ═══════════════════════════════════════════════

  // 1. PARIS → LYON
  {
    slug: "paris-lyon",
    from: "Paris",
    to: "Lyon",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 45.764,
    toLng: 4.8357,
    distanceKm: 465,
    durationMin: 270,
    priceEstimate: "480 — 620 €",
    category: "longue-distance",
    prixMin: 480,
    prixMax: 620,
    prixVan: 720,
    dureeMax: 330,
    autoroute: "A6",
    peages: "~35 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "lyon",
    liensInternes: ["paris-dijon", "paris-grenoble", "paris-chambery"],
    tags: ["longue-distance", "business"],
    hub: "paris",
    highlights: ["A6 Autoroute du Soleil", "Beaune", "Vignobles de Bourgogne", "Aire de Beaune-Tailly"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Lyon | Forfait dès 480 € | TaxiNeo",
        metaDescription:
          "Réservez votre taxi Paris → Lyon. 465 km, ~4h30, forfait dès 480 €. Chauffeur privé, véhicule confortable, Wi-Fi à bord. Alternative flexible au TGV.",
        heroTitle: "Taxi Paris → Lyon",
        heroSubtitle:
          "Transfert privé Paris → Lyon au forfait de 480 — 620 €. Prise en charge à domicile, véhicule haut de gamme, chauffeur professionnel.",
        description:
          "Le trajet Paris — Lyon est l'un des corridors les plus empruntés de France. Que vous voyagiez pour affaires dans le quartier de la Part-Dieu ou pour découvrir le Vieux Lyon, notre service de taxi longue distance vous offre un transfert porte-à-porte en toute sérénité. Contrairement au TGV, vous partez de chez vous et arrivez directement à destination, sans correspondance ni attente en gare.",
        routeDescription:
          "L'itinéraire emprunte l'autoroute A6, surnommée « Autoroute du Soleil ». Départ par la Porte d'Orléans ou la Porte d'Italie, passage par Auxerre, Beaune et Villefranche-sur-Saône avant d'atteindre Lyon.",
        introduction:
          "Le trajet Paris — Lyon en taxi privé s'adresse en priorité aux voyageurs d'affaires qui enchaînent les rendez-vous entre les deux premières métropoles françaises, aux familles nombreuses pour lesquelles le TGV représente un budget conséquent dès lors qu'il faut acheter quatre ou cinq billets, et aux cadres qui souhaitent travailler en toute tranquillité pendant le transfert grâce au Wi-Fi embarqué et aux prises USB disponibles à l'arrière du véhicule. Lyon, deuxième pôle économique du pays avec son quartier d'affaires de la Part-Dieu, son pôle pharmaceutique et chimique dans le couloir de la chimie et sa scène gastronomique mondialement réputée — les bouchons lyonnais, Paul Bocuse, la Cité internationale de la gastronomie — attire chaque année des millions de visiteurs professionnels et touristiques. Un taxi privé permet d'emporter autant de bagages que nécessaire, de choisir librement son horaire de départ — y compris très tôt le matin ou tard le soir — et de bénéficier d'un confort incomparable avec la climatisation, l'espace pour les jambes et la possibilité de passer des appels confidentiels pendant le trajet. Les équipes internationales apprécient également ce mode de transport lors de salons comme Pollutec, Sirha ou le Salon des Entrepreneurs, où la logistique de groupe est simplifiée par un véhicule unique.",
        itineraire:
          "Au départ de Paris, votre chauffeur emprunte le périphérique sud jusqu'à la Porte d'Orléans, puis s'engage sur l'autoroute A6 en direction de Lyon. La première section traverse la banlieue sud par Évry et Fontainebleau, où la forêt offre un décor verdoyant. Après la sortie d'Auxerre, le paysage change radicalement pour laisser place aux collines bourguignonnes et aux premières vignes de l'Auxerrois. L'aire de repos de Beaune-Tailly, située à mi-parcours, constitue un arrêt idéal pour une pause de 15 minutes — on y trouve des produits régionaux et un point de vue sur les vignobles de la Côte-d'Or. Le chauffeur poursuit ensuite sur l'A6 en passant par Chalon-sur-Saône et Mâcon, où le paysage se teinte des tuiles romaines du Beaujolais. La descente vers Lyon se fait par la vallée de la Saône, avec en toile de fond la colline de Fourvière. L'arrivée dans Lyon s'effectue généralement par le tunnel de Fourvière (A6/A7) ou par le contournement est (A46) selon la destination finale dans l'agglomération. En cas de trafic dense aux heures de pointe lyonnaises (7h30-9h30 et 17h-19h), le chauffeur privilégie le boulevard périphérique Laurent-Bonnevay pour desservir les quartiers est comme la Part-Dieu, Villeurbanne ou Bron.",
        conseils:
          "Pour un trajet Paris — Lyon optimal, privilégiez un départ entre 9h30 et 11h ou après 14h afin d'éviter le trafic de sortie de Paris sur le périphérique et l'A6. Le vendredi soir et le dimanche soir sont à proscrire en raison des retours de week-end, surtout en été quand la vallée du Rhône est saturée. En hiver, surveillez les conditions météo sur le tronçon Beaune — Mâcon, où le brouillard matinal est fréquent entre novembre et février : votre chauffeur adaptera sa vitesse et son itinéraire si nécessaire. La pause recommandée se situe à l'aire de Beaune-Tailly (km 310), qui propose des sanitaires propres, une boutique de produits bourguignons et un espace de restauration rapide. Si vous voyagez avec des enfants, prévoyez des divertissements pour la portion Fontainebleau — Auxerre, la plus monotone du parcours. En été, le soleil tape fort sur l'A6 entre Mâcon et Lyon : la climatisation du véhicule est évidemment incluse, mais prévoyez de l'eau supplémentaire. Enfin, si vous avez un rendez-vous tôt le matin à Lyon, un départ de Paris à 4h30 permet d'arriver avant 9h même avec le trafic.",
        comparaisonTransport:
          "Le TGV Paris Gare de Lyon → Lyon Part-Dieu met environ 2h et coûte entre 30 € (Ouigo, réservé très tôt) et 120 € (tarif flexible dernière minute) par personne. Pour une famille de quatre, le train revient donc entre 120 € et 480 €, auxquels il faut ajouter le taxi ou VTC à l'arrivée (15-25 €) et le trajet jusqu'à la gare au départ. En voiture individuelle, comptez 35 € de péages et environ 50 € d'essence, soit 85 € mais avec la fatigue de la conduite. Notre taxi forfaitaire à partir de 480 € devient très compétitif dès deux passagers : le confort porte-à-porte, zéro stress, bagages illimités et horaires flexibles font la différence. Pour les voyageurs d'affaires qui facturent leur temps, le gain de productivité pendant les 4h30 de trajet en taxi est un argument décisif par rapport au TGV où l'espace de travail reste contraint.",
        faq: [
          {
            question: "Quel est le prix d'un taxi Paris — Lyon ?",
            answer:
              "Le forfait taxi Paris — Lyon est de 480 à 620 € selon le type de véhicule (berline ou van) et l'adresse exacte de prise en charge et de dépose. Ce prix est tout compris : péages, carburant et attente inclus.",
          },
          {
            question: "Combien de temps dure le trajet Paris — Lyon en taxi ?",
            answer:
              "Comptez environ 4h30 en conditions normales via l'A6. Aux heures de pointe ou le vendredi soir, le trajet peut atteindre 5h30. Votre chauffeur adapte l'itinéraire en temps réel.",
          },
          {
            question: "Le taxi est-il plus avantageux que le TGV pour aller à Lyon ?",
            answer:
              "Pour un voyageur seul, le TGV reste moins cher (30-120 €). Mais dès 2-3 passagers, le taxi devient compétitif tout en offrant le confort porte-à-porte, les bagages illimités et la flexibilité horaire.",
          },
          {
            question: "Peut-on faire une pause pendant le trajet Paris — Lyon ?",
            answer:
              "Oui, une pause de 15-20 minutes est prévue à mi-parcours, généralement à l'aire de Beaune-Tailly. Vous pouvez demander des arrêts supplémentaires sans surcoût.",
          },
          {
            question: "Quels types de véhicules sont disponibles pour Paris — Lyon ?",
            answer:
              "Nous proposons des berlines confort (1-3 passagers, dès 480 €) et des vans (4-7 passagers, dès 720 €). Tous les véhicules disposent de la climatisation, du Wi-Fi et de prises USB.",
          },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Lyon | Fixed rate from €480 | TaxiNeo",
        metaDescription:
          "Book your private taxi Paris → Lyon. 465 km, ~4h30, fixed rate from €480. Door-to-door service, professional driver, Wi-Fi on board.",
        heroTitle: "Taxi Paris → Lyon",
        heroSubtitle:
          "Private transfer Paris → Lyon from €480 — €620. Home pick-up, premium vehicle, professional driver 24/7.",
        description:
          "The Paris — Lyon route is one of France's busiest corridors. Whether travelling for business in the Part-Dieu district or to discover Old Lyon, our long-distance taxi service offers a stress-free door-to-door transfer. Unlike the TGV, you depart from home and arrive directly at your destination.",
        routeDescription:
          "The route follows the A6 motorway, known as the 'Autoroute du Soleil'. Departure via Porte d'Orléans or Porte d'Italie, passing through Auxerre, Beaune and Villefranche-sur-Saône before reaching Lyon.",
        introduction:
          "The Paris — Lyon private taxi service primarily caters to business travellers shuttling between France's two largest cities, large families for whom TGV tickets quickly add up, and executives who want to work in peace during the journey with onboard Wi-Fi and USB charging. Lyon, the country's second economic hub with the Part-Dieu business district, its pharmaceutical corridor and world-renowned gastronomy, attracts millions of visitors annually. A private taxi lets you bring unlimited luggage, choose your departure time freely, and enjoy unmatched comfort with air conditioning and legroom.",
        itineraire:
          "From Paris, your driver takes the southern ring road to Porte d'Orléans, then joins the A6 motorway towards Lyon. The first section passes through the southern suburbs via Évry and Fontainebleau. After Auxerre, the landscape transitions to Burgundy's rolling hills and vineyards. The Beaune-Tailly rest area at the halfway point makes an ideal 15-minute break. The driver continues through Chalon-sur-Saône and Mâcon before descending into Lyon via the Saône valley with Fourvière hill as backdrop.",
        conseils:
          "For an optimal journey, depart between 9:30am and 11am or after 2pm to avoid Paris ring road traffic. Avoid Friday and Sunday evenings. In winter, watch for fog on the Beaune — Mâcon stretch. The recommended stop is at Beaune-Tailly rest area (km 310). In summer, the A6 between Mâcon and Lyon gets very hot — air conditioning is included but bring extra water.",
        comparaisonTransport:
          "The TGV from Paris Gare de Lyon to Lyon Part-Dieu takes about 2 hours and costs €30-120 per person. For a family of four, that's €120-480 plus taxis at both ends (€15-25 each). Our fixed-rate taxi from €480 becomes competitive from 2 passengers with door-to-door comfort, unlimited luggage and flexible schedules.",
        faq: [
          {
            question: "What is the price of a taxi Paris — Lyon?",
            answer:
              "The flat rate is €480 to €620 depending on vehicle type and exact addresses. This price is all-inclusive: tolls, fuel and waiting time included.",
          },
          {
            question: "How long does the Paris — Lyon taxi journey take?",
            answer:
              "About 4h30 under normal conditions via the A6. During peak hours or Friday evenings, allow up to 5h30.",
          },
          {
            question: "Is a taxi cheaper than the TGV to Lyon?",
            answer:
              "For a solo traveller, the TGV is cheaper (€30-120). But from 2-3 passengers, the taxi becomes competitive while offering door-to-door comfort and unlimited luggage.",
          },
          {
            question: "Can we make a stop during the Paris — Lyon journey?",
            answer:
              "Yes, a 15-20 minute break is planned at Beaune-Tailly rest area. Additional stops can be requested at no extra charge.",
          },
          {
            question: "What vehicle types are available?",
            answer:
              "We offer comfort sedans (1-3 passengers, from €480) and vans (4-7 passengers, from €720). All vehicles have air conditioning, Wi-Fi and USB ports.",
          },
        ],
      },
    },
  },

  // 2. PARIS → MARSEILLE
  {
    slug: "paris-marseille",
    from: "Paris",
    to: "Marseille",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 43.2965,
    toLng: 5.3698,
    distanceKm: 775,
    durationMin: 450,
    priceEstimate: "750 — 950 €",
    category: "longue-distance",
    prixMin: 750,
    prixMax: 950,
    prixVan: 1100,
    dureeMax: 520,
    autoroute: "A6 puis A7",
    peages: "~65 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "marseille",
    liensInternes: ["paris-lyon", "paris-avignon", "paris-montpellier"],
    tags: ["longue-distance", "tourisme"],
    hub: "paris",
    highlights: ["A6/A7 Autoroute du Soleil", "Vallée du Rhône", "Avignon", "Aix-en-Provence"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Marseille | Forfait dès 750 € | TaxiNeo",
        metaDescription:
          "Réservez votre taxi Paris → Marseille. 775 km, ~7h30, forfait dès 750 €. Transfert porte-à-porte, chauffeur professionnel, véhicule climatisé.",
        heroTitle: "Taxi Paris → Marseille",
        heroSubtitle:
          "Transfert privé Paris → Marseille au forfait de 750 — 950 €. Prise en charge à domicile, confort premium, chauffeur expérimenté.",
        description:
          "Le trajet Paris — Marseille traverse la France du nord au sud via la mythique Autoroute du Soleil. Ce transfert en taxi privé est idéal pour les familles se rendant en vacances sur la Côte d'Azur, les professionnels du secteur maritime ou les voyageurs avec beaucoup de bagages pour qui l'avion ou le TGV ne conviennent pas.",
        routeDescription:
          "L'itinéraire suit l'A6 jusqu'à Lyon, puis l'A7 le long de la vallée du Rhône en passant par Valence, Orange et Aix-en-Provence avant d'arriver à Marseille.",
        introduction:
          "Le trajet Paris — Marseille en taxi privé est le choix privilégié des familles partant en vacances dans le Sud avec un volume de bagages important — planches de surf, matériel de plongée, poussettes — que ni le TGV ni l'avion ne peuvent accueillir facilement. Les professionnels du port autonome de Marseille, du secteur de la logistique maritime et de l'industrie pétrochimique de Fos-sur-Mer empruntent également cette liaison pour combiner déplacements et productivité pendant le trajet. Marseille, deuxième ville de France avec plus de 870 000 habitants, est aussi la porte d'entrée des calanques, du Vieux-Port et d'une scène culturelle effervescente autour du MuCEM et de la Cité radieuse de Le Corbusier. En été, les liaisons aériennes et ferroviaires sont souvent saturées et les prix s'envolent, rendant le taxi partagé entre quatre ou cinq passagers très compétitif. Le confort d'un véhicule privé climatisé, avec arrêts à la demande dans les aires autoroutières de la vallée du Rhône, transforme un long trajet en une expérience agréable plutôt qu'une épreuve logistique.",
        itineraire:
          "Votre chauffeur quitte Paris par la Porte d'Orléans et emprunte l'A6 en direction de Lyon. Après Fontainebleau et la traversée de la Bourgogne, le véhicule atteint Lyon après environ 4h30 de route. La pause déjeuner ou café est recommandée à l'aire de Beaune-Tailly ou à celle de Lyon-Nord selon l'heure. Après le contournement de Lyon par l'A46, le chauffeur s'engage sur l'A7, l'emblématique « Autoroute du Soleil » qui longe la vallée du Rhône. On traverse Vienne, Valence — avec ses vergers de pêchers et d'abricotiers — puis Orange et son arc de triomphe romain visible depuis l'autoroute. La descente vers le sud passe par Avignon et Cavaillon avant d'atteindre Aix-en-Provence. Les derniers 30 km entre Aix et Marseille se font sur l'A51 puis l'A50, avec une arrivée par le tunnel du Prado-Carénage pour rejoindre le centre-ville ou le Vieux-Port. En période estivale, le tronçon Lyon — Orange est régulièrement encombré le samedi matin : le chauffeur peut alors emprunter l'alternative par l'A47 et la RN88 via Saint-Étienne pour contourner le bouchon de Valence.",
        conseils:
          "Le Paris — Marseille est un trajet de longue haleine : prévoyez au minimum une pause toutes les 2h30 pour le confort de tous les passagers. Les meilleures aires d'arrêt sont Beaune-Tailly (km 310), Montélimar-Ouest (km 590, célèbre pour son nougat) et Aix-en-Provence (km 740). Évitez absolument le samedi matin en juillet-août, journée classée rouge par Bison Futé, où la vallée du Rhône connaît des bouchons de plusieurs heures entre Valence et Orange. Privilégiez un départ nocturne (22h-23h) pour arriver le lendemain matin avec un trajet fluide. En hiver, le mistral peut souffler violemment dans la vallée du Rhône entre Montélimar et Marseille : votre chauffeur adaptera sa conduite en conséquence. Si vous voyagez avec des enfants, le passage à Montélimar est l'occasion d'acheter du nougat artisanal. Pensez à emporter des encas et de l'eau en quantité suffisante pour un trajet de 7 à 8 heures.",
        comparaisonTransport:
          "Le TGV Paris Gare de Lyon → Marseille Saint-Charles met 3h20 et coûte de 39 € (Ouigo) à 150 € (1ère classe flexible) par personne. Pour quatre passagers, le TGV revient entre 156 € et 600 €, plus les transferts locaux. L'avion Paris-Orly → Marseille-Provence met 1h20 en vol mais 3h porte-à-porte avec les formalités, et coûte 60 à 200 € par personne. Notre taxi à partir de 750 € tout compris (péages 65 € et carburant inclus) est compétitif dès 3 passagers et offre un avantage décisif : le transport porte-à-porte de bagages volumineux, la flexibilité totale et le confort d'un véhicule privé climatisé avec Wi-Fi.",
        faq: [
          {
            question: "Quel est le prix d'un taxi Paris — Marseille ?",
            answer:
              "Le forfait est de 750 à 950 € en berline (1-3 passagers) et à partir de 1 100 € en van (4-7 passagers). Prix tout compris : péages (~65 €), carburant et pauses inclus.",
          },
          {
            question: "Combien de temps dure le trajet Paris — Marseille en taxi ?",
            answer:
              "Environ 7h30 en conditions normales via l'A6 et l'A7, pauses comprises. Le samedi en été, comptez jusqu'à 9h à cause du trafic dans la vallée du Rhône.",
          },
          {
            question: "Fait-on des pauses pendant le Paris — Marseille ?",
            answer:
              "Oui, au moins deux pauses de 15-20 minutes sont prévues, généralement à Beaune-Tailly et Montélimar. Vous pouvez demander des arrêts supplémentaires.",
          },
          {
            question: "Peut-on être déposé dans les calanques ou à la Ciotat ?",
            answer:
              "Oui, la dépose peut se faire partout dans l'agglomération marseillaise et ses environs : calanques, Cassis, La Ciotat, Aubagne, moyennant un éventuel supplément kilométrique.",
          },
          {
            question: "Le taxi est-il adapté pour un déménagement ?",
            answer:
              "Pour un petit déménagement (valises, cartons légers), notre van 7 places offre un grand coffre. Pour un déménagement complet, nous vous recommandons un transporteur spécialisé.",
          },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Marseille | Fixed rate from €750 | TaxiNeo",
        metaDescription:
          "Book your private taxi Paris → Marseille. 775 km, ~7h30, fixed rate from €750. Door-to-door, professional driver, air-conditioned vehicle.",
        heroTitle: "Taxi Paris → Marseille",
        heroSubtitle:
          "Private transfer Paris → Marseille from €750 — €950. Home pick-up, premium comfort, experienced driver.",
        description:
          "The Paris — Marseille journey crosses France from north to south via the legendary Autoroute du Soleil. This private taxi transfer is ideal for families heading to the Côte d'Azur, maritime professionals or travellers with bulky luggage.",
        routeDescription:
          "The route follows the A6 to Lyon, then the A7 along the Rhône valley through Valence, Orange and Aix-en-Provence before reaching Marseille.",
        introduction:
          "The Paris — Marseille private taxi is the preferred choice for families heading south with bulky luggage, maritime professionals and travellers for whom the plane or TGV are impractical. Marseille, France's second city with 870,000+ inhabitants, is the gateway to the calanques, the Vieux-Port and a vibrant cultural scene. In summer, when flights and trains are overbooked, a shared taxi among 4-5 passengers becomes very competitive.",
        itineraire:
          "Your driver leaves Paris via Porte d'Orléans onto the A6 towards Lyon. After crossing Burgundy, you reach Lyon in about 4h30. After bypassing Lyon on the A46, the driver takes the A7 along the Rhône valley through Vienne, Valence, Orange and Avignon before reaching Aix-en-Provence. The final 30 km to central Marseille use the A51 and A50, arriving via the Prado-Carénage tunnel.",
        conseils:
          "Plan at least one break every 2.5 hours. Best stops are Beaune-Tailly (km 310), Montélimar (km 590, famous for nougat) and Aix-en-Provence (km 740). Avoid Saturday mornings in July-August when the Rhône valley is gridlocked. Consider a night departure (10-11pm) for smooth traffic.",
        comparaisonTransport:
          "The TGV takes 3h20 and costs €39-150 per person. Flying takes 1h20 but 3h door-to-door, costing €60-200 per person. Our taxi from €750 all-inclusive is competitive from 3 passengers with the advantage of unlimited luggage and door-to-door convenience.",
        faq: [
          {
            question: "What is the price of a taxi Paris — Marseille?",
            answer:
              "The flat rate is €750-950 for a sedan (1-3 passengers) and from €1,100 for a van (4-7 passengers). All-inclusive: tolls (~€65), fuel and breaks included.",
          },
          {
            question: "How long does the Paris — Marseille journey take?",
            answer:
              "About 7h30 under normal conditions via the A6 and A7 including breaks. On summer Saturdays, allow up to 9 hours.",
          },
          {
            question: "Are there breaks during the journey?",
            answer:
              "Yes, at least two 15-20 minute breaks, usually at Beaune-Tailly and Montélimar. Additional stops on request.",
          },
          {
            question: "Can I be dropped off at the Calanques or La Ciotat?",
            answer:
              "Yes, drop-off anywhere in the Marseille area including Cassis, La Ciotat and Aubagne, with a possible distance supplement.",
          },
          {
            question: "Is the taxi suitable for a small move?",
            answer:
              "For suitcases and light boxes, our 7-seat van has a large boot. For a full move, we recommend a specialist transporter.",
          },
        ],
      },
    },
  },

  // 3. PARIS → LILLE
  {
    slug: "paris-lille",
    from: "Paris",
    to: "Lille",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 50.6292,
    toLng: 3.0573,
    distanceKm: 225,
    durationMin: 150,
    priceEstimate: "260 — 340 €",
    category: "longue-distance",
    prixMin: 260,
    prixMax: 340,
    prixVan: 420,
    dureeMax: 200,
    autoroute: "A1",
    peages: "~18 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "lille",
    liensInternes: ["paris-amiens", "paris-reims"],
    tags: ["longue-distance", "business"],
    hub: "paris",
    highlights: ["A1 Autoroute du Nord", "Arras", "Lens", "Beffroi de Lille"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Lille | Forfait dès 260 € | TaxiNeo",
        metaDescription:
          "Réservez votre taxi Paris → Lille. 225 km, ~2h30, forfait dès 260 €. Transfert direct porte-à-porte, chauffeur professionnel.",
        heroTitle: "Taxi Paris → Lille",
        heroSubtitle:
          "Transfert privé Paris → Lille au forfait de 260 — 340 €. Prise en charge à domicile, véhicule confortable, sans correspondance.",
        description:
          "Le trajet Paris — Lille relie la capitale à la métropole européenne du Nord en seulement 2h30. Lille, capitale des Flandres, est un pôle économique majeur avec Euralille, la Braderie et sa proximité avec la Belgique. Notre taxi privé est l'alternative idéale au TGV pour les groupes et les voyageurs avec bagages.",
        routeDescription:
          "L'itinéraire emprunte l'autoroute A1, la plus ancienne autoroute de France, via la Porte de la Chapelle, Senlis, Arras et Lens. Un trajet direct et rapide.",
        introduction:
          "La liaison Paris — Lille en taxi privé répond aux besoins des cadres et dirigeants qui multiplient les allers-retours entre les deux métropoles pour des réunions dans le quartier d'affaires d'Euralille, des rendez-vous à la CCI ou des visites de sites industriels dans le bassin minier du Nord-Pas-de-Calais. Lille Métropole, forte de plus d'un million d'habitants, est également un carrefour européen stratégique à deux pas de Bruxelles, Gand et Anvers. Les événements comme la Grande Braderie de Lille en septembre, les expositions au Palais des Beaux-Arts ou les matchs au stade Pierre-Mauroy génèrent une demande soutenue en transferts privés. Les familles originaires du Nord et installées à Paris apprécient particulièrement ce service pour les retours de week-end avec bagages et provisions régionales — maroilles, gaufres, bières artisanales du Nord. Le taxi offre une souplesse incomparable : départ quand vous le souhaitez, pas de contrainte de gare, et la possibilité de faire un crochet par Arras ou Lens en chemin si nécessaire.",
        itineraire:
          "Au départ de Paris, le chauffeur rejoint la Porte de la Chapelle et s'engage sur l'A1, la célèbre « Autoroute du Nord » inaugurée en 1967. Après la traversée de la plaine de France et le passage par Senlis — dont la cathédrale gothique est visible au loin —, la route file vers le nord à travers la Picardie. Le paysage, d'abord périurbain, cède la place aux grandes plaines céréalières de l'Artois. Après l'échangeur d'Arras (km 180), reconnaissable à ses deux places baroques classées UNESCO, le trajet entre dans le bassin minier. Les terrils caractéristiques du Pas-de-Calais apparaissent à hauteur de Lens, dont le musée du Louvre-Lens mérite un détour. Les 30 derniers kilomètres traversent la conurbation Lens-Béthune-Lille avec une arrivée par la porte sud de Lille. Selon votre destination — Vieux-Lille, Euralille, Roubaix, Tourcoing — le chauffeur adapte son itinéraire par le boulevard périphérique ou la voirie urbaine.",
        conseils:
          "L'A1 est l'autoroute la plus chargée de France, surtout entre Paris et Senlis. Évitez les départs entre 7h et 9h et entre 16h30 et 19h en semaine. Les mardis et jeudis sont les jours les plus calmes pour ce trajet. Le trafic de poids lourds est important sur cette axe nord-sud, surtout entre Senlis et Arras : votre chauffeur roule dans la voie de gauche pour maintenir une allure fluide. En hiver, le verglas est fréquent sur le tronçon Arras — Lille : les véhicules TaxiNeo sont équipés de pneus hiver de novembre à mars. Si vous voyagez un jour de Braderie (premier week-end de septembre), réservez très à l'avance car la demande est exceptionnelle. Pour un aller-retour dans la journée, un départ à 7h permet d'être à Lille à 9h30 et de repartir en fin d'après-midi pour être à Paris vers 20h.",
        comparaisonTransport:
          "Le TGV Paris-Nord → Lille-Flandres met 1h02 et coûte entre 10 € (Ouigo, non flexible) et 85 € (tarif Pro 1ère) par personne. Pour un aller-retour business à deux, le TGV revient entre 40 € et 340 €, mais sans la flexibilité d'horaire ni le confort porte-à-porte. En voiture personnelle, les péages A1 coûtent environ 18 € et l'essence environ 25 €, soit 43 €, mais avec le stress de la conduite et du stationnement à Lille. Notre taxi à partir de 260 € est particulièrement avantageux pour les groupes de 2-4 personnes qui veulent optimiser leur temps de trajet en travaillant à bord.",
        faq: [
          {
            question: "Quel est le prix d'un taxi Paris — Lille ?",
            answer:
              "Le forfait taxi Paris — Lille est de 260 à 340 € en berline et à partir de 420 € en van. Prix tout compris incluant péages (~18 €) et carburant.",
          },
          {
            question: "Combien de temps faut-il pour aller de Paris à Lille en taxi ?",
            answer:
              "Environ 2h30 en conditions normales via l'A1. Aux heures de pointe, comptez 3h à 3h30, surtout en sortie de Paris.",
          },
          {
            question: "Peut-on être déposé à Euralille ou dans le Vieux-Lille ?",
            answer:
              "Oui, la dépose se fait à l'adresse exacte de votre choix : Euralille, Vieux-Lille, Roubaix, Tourcoing ou tout autre point de la métropole lilloise.",
          },
          {
            question: "Le taxi peut-il faire un arrêt à Arras ou Lens ?",
            answer:
              "Oui, un arrêt intermédiaire à Arras (Grand-Place) ou Lens (Louvre-Lens) est possible moyennant un léger supplément de 20 à 40 €.",
          },
          {
            question: "Proposez-vous des allers-retours dans la journée ?",
            answer:
              "Oui, nous proposons un forfait aller-retour Paris — Lille dans la journée avec attente sur place de 4 à 8 heures. Demandez un devis personnalisé.",
          },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Lille | Fixed rate from €260 | TaxiNeo",
        metaDescription:
          "Book your private taxi Paris → Lille. 225 km, ~2h30, fixed rate from €260. Direct door-to-door transfer, professional driver.",
        heroTitle: "Taxi Paris → Lille",
        heroSubtitle:
          "Private transfer Paris → Lille from €260 — €340. Home pick-up, comfortable vehicle, no connections.",
        description:
          "The Paris — Lille route connects the capital to northern France's European metropolis in just 2h30. Lille, capital of Flanders, is a major economic hub close to Belgium. Our private taxi is the ideal TGV alternative for groups.",
        routeDescription:
          "The route takes the A1 motorway, France's oldest, via Porte de la Chapelle, Senlis, Arras and Lens.",
        introduction:
          "The Paris — Lille private taxi serves executives commuting between both cities for meetings in Euralille, visits to industrial sites in the Nord mining basin, and families returning north with luggage. Lille's metropolitan area of over 1 million people is a strategic European crossroads near Brussels, Ghent and Antwerp. Events like the Grande Braderie in September generate exceptional demand.",
        itineraire:
          "From Paris, the driver joins Porte de la Chapelle onto the A1. After crossing the plains of France past Senlis with its Gothic cathedral, the route heads north through Picardy. After Arras (km 180) with its UNESCO-listed baroque squares, the journey enters the mining basin. The last 30 km cross the Lens-Lille conurbation.",
        conseils:
          "The A1 is France's busiest motorway. Avoid departures between 7-9am and 4:30-7pm on weekdays. In winter, black ice is common between Arras and Lille — our vehicles have winter tyres from November to March. During the Braderie (first September weekend), book well in advance.",
        comparaisonTransport:
          "The TGV takes 1h02 and costs €10-85 per person. For two business travellers on a round trip, the TGV costs €40-340. Our taxi from €260 is advantageous for groups of 2-4 who want to work during the journey with door-to-door convenience.",
        faq: [
          {
            question: "What is the price of a taxi Paris — Lille?",
            answer:
              "The flat rate is €260-340 for a sedan and from €420 for a van. All-inclusive price with tolls (~€18) and fuel.",
          },
          {
            question: "How long does the Paris — Lille taxi journey take?",
            answer:
              "About 2h30 under normal conditions via the A1. During rush hours, allow 3 to 3h30.",
          },
          {
            question: "Can I be dropped off in Euralille or Old Lille?",
            answer:
              "Yes, drop-off at your exact address: Euralille, Old Lille, Roubaix, Tourcoing or anywhere in the Lille metropolitan area.",
          },
          {
            question: "Can the taxi stop at Arras or Lens?",
            answer:
              "Yes, an intermediate stop at Arras or Lens (Louvre-Lens) is possible with a small supplement of €20-40.",
          },
          {
            question: "Do you offer same-day round trips?",
            answer:
              "Yes, we offer a Paris — Lille round-trip package with 4-8 hours on-site waiting. Request a personalised quote.",
          },
        ],
      },
    },
  },

  // 4. PARIS → TOULOUSE
  {
    slug: "paris-toulouse",
    from: "Paris",
    to: "Toulouse",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 43.6047,
    toLng: 1.4442,
    distanceKm: 680,
    durationMin: 390,
    priceEstimate: "680 — 860 €",
    category: "longue-distance",
    prixMin: 680,
    prixMax: 860,
    prixVan: 1000,
    dureeMax: 460,
    autoroute: "A10 puis A20",
    peages: "~50 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "toulouse",
    liensInternes: ["paris-bordeaux", "paris-limoges", "paris-montpellier"],
    tags: ["longue-distance", "business"],
    hub: "paris",
    highlights: ["A10/A20", "Vierzon", "Limoges", "Cahors", "Ville rose"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Toulouse | Forfait dès 680 € | TaxiNeo",
        metaDescription:
          "Réservez votre taxi Paris → Toulouse. 680 km, ~6h30, forfait dès 680 €. Transfert privé porte-à-porte, chauffeur professionnel.",
        heroTitle: "Taxi Paris → Toulouse",
        heroSubtitle:
          "Transfert privé Paris → Toulouse au forfait de 680 — 860 €. Prise en charge à domicile, véhicule haut de gamme.",
        description:
          "Le trajet Paris — Toulouse relie la capitale à la Ville rose, quatrième commune de France et capitale européenne de l'aéronautique avec Airbus et le CNES. Ce transfert privé convient parfaitement aux professionnels de l'aérospatiale et aux familles rejoignant le Sud-Ouest.",
        routeDescription:
          "L'itinéraire principal emprunte l'A10 jusqu'à Vierzon, puis l'A20 à travers le Limousin et le Quercy en passant par Limoges, Brive-la-Gaillarde et Cahors.",
        introduction:
          "Toulouse, surnommée la Ville rose pour la teinte caractéristique de ses briques, est le siège d'Airbus, du CNES et de Thales Alenia Space, faisant d'elle la capitale européenne de l'aéronautique et du spatial. Les ingénieurs, cadres et sous-traitants du secteur aérospatial effectuent régulièrement la liaison Paris — Toulouse pour des réunions sur les sites de Blagnac, Colomiers ou au centre spatial de Toulouse. Un taxi privé permet d'emporter maquettes, prototypes et dossiers confidentiels impossibles à transporter en avion ou en TGV. Les familles rejoignant leurs racines dans le Sud-Ouest apprécient le confort porte-à-porte, surtout lors des départs en vacances vers les Pyrénées, le Pays basque ou la côte atlantique accessible depuis Toulouse. La ville offre également une richesse culturelle immense : le Capitole, la basilique Saint-Sernin classée UNESCO, le marché Victor-Hugo et la gastronomie du cassoulet. Le quartier des Carmes et la rive gauche de la Garonne regorgent de restaurants étoilés et de bistrots où se mêlent tradition et créativité culinaire.",
        itineraire:
          "Le départ se fait par la Porte d'Orléans direction A10 vers Orléans. Après la traversée de la Beauce et ses immenses champs de blé, le véhicule atteint Vierzon (km 200) où il quitte l'A10 pour emprunter l'A20. Cette autoroute, en grande partie gratuite dans sa section limousine, traverse des paysages vallonnés couverts de forêts de châtaigniers. Limoges (km 380) constitue le point de mi-parcours idéal pour une pause : l'aire de Limoges-Val de l'Aurence offre des commodités complètes. Après Limoges, la descente vers le sud passe par Uzerche, surnommée la « Perle du Limousin », puis Brive-la-Gaillarde et son fameux marché. Le trajet se poursuit par Souillac et Cahors, ancienne cité médiévale dominée par le pont Valentré. Les 100 derniers kilomètres traversent le Quercy blanc avec ses causses calcaires avant d'atteindre Montauban puis Toulouse. L'arrivée se fait par la rocade est (A62/A61) ou par l'avenue des Minimes selon la destination dans l'agglomération.",
        conseils:
          "Pour un Paris — Toulouse optimal, privilégiez un départ matinal entre 6h et 8h pour arriver en début d'après-midi, ou un départ en soirée vers 20h pour profiter de routes dégagées. L'A20 étant en grande partie gratuite entre Vierzon et Brive, elle attire beaucoup de poids lourds : soyez patient dans les sections à deux voies, notamment entre Limoges et Brive. En hiver, le plateau de Millevaches (alt. 800 m) entre Limoges et Uzerche peut connaître des chutes de neige : votre chauffeur dispose de chaînes si nécessaire. La pause recommandée se situe à Limoges (3h30 après le départ) ou à Brive (4h30). Si vous souhaitez visiter Cahors et son pont Valentré, prévoyez un arrêt de 30 minutes — c'est un détour de seulement 5 minutes depuis l'A20. L'été, les températures dans le Quercy et à Toulouse dépassent régulièrement 35°C : la climatisation du véhicule est indispensable.",
        comparaisonTransport:
          "L'avion Paris-Orly → Toulouse-Blagnac met 1h15 en vol, mais 3h porte-à-porte avec les transferts et l'enregistrement, pour un coût de 50 à 250 € par personne. Le TGV via Bordeaux met environ 4h15 pour 40 à 130 € par personne. En voiture, comptez 50 € de péages et 65 € d'essence. Notre taxi à partir de 680 € tout compris est rentable dès 3 passagers et offre un avantage majeur : aucune contrainte horaire, des bagages illimités et la possibilité de travailler confortablement pendant 6h30 de trajet avec Wi-Fi et prises de courant.",
        faq: [
          {
            question: "Quel est le prix d'un taxi Paris — Toulouse ?",
            answer:
              "Le forfait est de 680 à 860 € en berline et à partir de 1 000 € en van. Prix tout compris avec péages (~50 €) et carburant inclus.",
          },
          {
            question: "Combien de temps dure le trajet Paris — Toulouse ?",
            answer:
              "Environ 6h30 à 7h via l'A10 et l'A20, pauses comprises. L'alternative par l'A10 et l'A62 via Bordeaux est plus longue (7h30) mais entièrement autoroutière.",
          },
          {
            question: "Quelle autoroute est empruntée pour Paris — Toulouse ?",
            answer:
              "L'itinéraire privilégié emprunte l'A10 puis l'A20 via Limoges et Cahors. L'A20 est en grande partie gratuite, ce qui réduit le coût des péages.",
          },
          {
            question: "Peut-on faire un arrêt à Limoges ou Cahors ?",
            answer:
              "Oui, un arrêt de 15 à 30 minutes à Limoges ou Cahors est possible sans supplément. Un arrêt prolongé avec visite peut entraîner un léger supplément.",
          },
          {
            question: "Le service est-il disponible pour les trajets professionnels Airbus ?",
            answer:
              "Oui, nous proposons des forfaits adaptés aux déplacements professionnels vers les sites Airbus de Blagnac et Colomiers, avec facturation entreprise et note de frais.",
          },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Toulouse | Fixed rate from €680 | TaxiNeo",
        metaDescription:
          "Book your private taxi Paris → Toulouse. 680 km, ~6h30, fixed rate from €680. Door-to-door private transfer.",
        heroTitle: "Taxi Paris → Toulouse",
        heroSubtitle:
          "Private transfer Paris → Toulouse from €680 — €860. Home pick-up, premium vehicle.",
        description:
          "The Paris — Toulouse route connects the capital to the Pink City, France's fourth-largest city and European aerospace capital with Airbus and CNES.",
        routeDescription:
          "The main route takes the A10 to Vierzon, then the A20 through Limousin and Quercy via Limoges, Brive and Cahors.",
        introduction:
          "Toulouse, nicknamed the Pink City, is home to Airbus, CNES and Thales Alenia Space. Aerospace professionals regularly commute between Paris and Toulouse. A private taxi allows transporting models, prototypes and confidential documents. Families heading to the South-West also appreciate the door-to-door comfort.",
        itineraire:
          "Departure via Porte d'Orléans onto the A10 through Beauce. At Vierzon (km 200), join the A20 through wooded Limousin hills. Limoges (km 380) is the ideal midpoint stop. Continue through Brive, Souillac and medieval Cahors before reaching Montauban and Toulouse.",
        conseils:
          "Depart early morning (6-8am) to arrive by early afternoon. The A20 is partly toll-free, attracting heavy goods traffic. In winter, the Millevaches plateau can see snowfall. Recommended stop at Limoges or Brive. Summer temperatures in Toulouse regularly exceed 35°C.",
        comparaisonTransport:
          "Flights take 1h15 but 3h door-to-door for €50-250 per person. The TGV via Bordeaux takes 4h15 for €40-130. Our taxi from €680 is cost-effective from 3 passengers with unlimited luggage and complete flexibility.",
        faq: [
          {
            question: "What is the price of a taxi Paris — Toulouse?",
            answer: "The flat rate is €680-860 for a sedan and from €1,000 for a van. All-inclusive.",
          },
          {
            question: "How long is the Paris — Toulouse journey?",
            answer: "About 6h30-7h via the A10 and A20 including breaks.",
          },
          {
            question: "Which motorway is used?",
            answer: "The preferred route uses the A10 then A20 via Limoges and Cahors. The A20 is partly toll-free.",
          },
          {
            question: "Can we stop at Limoges or Cahors?",
            answer: "Yes, a 15-30 minute stop is possible at no extra charge.",
          },
          {
            question: "Is the service available for Airbus business trips?",
            answer: "Yes, we offer packages for business trips to Airbus sites in Blagnac and Colomiers with corporate invoicing.",
          },
        ],
      },
    },
  },

  // 5. PARIS → BORDEAUX
  {
    slug: "paris-bordeaux",
    from: "Paris",
    to: "Bordeaux",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 44.8378,
    toLng: -0.5792,
    distanceKm: 585,
    durationMin: 360,
    priceEstimate: "580 — 740 €",
    category: "longue-distance",
    prixMin: 580,
    prixMax: 740,
    prixVan: 880,
    dureeMax: 420,
    autoroute: "A10",
    peages: "~48 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "bordeaux",
    liensInternes: ["paris-tours", "paris-poitiers", "paris-toulouse"],
    tags: ["longue-distance", "tourisme"],
    hub: "paris",
    highlights: ["A10 L'Aquitaine", "Tours", "Poitiers", "Vignobles bordelais"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Bordeaux | Forfait dès 580 € | TaxiNeo",
        metaDescription:
          "Réservez votre taxi Paris → Bordeaux. 585 km, ~6h, forfait dès 580 €. Transfert privé confortable, chauffeur professionnel 24h/24.",
        heroTitle: "Taxi Paris → Bordeaux",
        heroSubtitle:
          "Transfert privé Paris → Bordeaux au forfait de 580 — 740 €. Voyage en toute sérénité avec prise en charge à domicile.",
        description:
          "Le trajet Paris — Bordeaux emprunte l'A10 à travers le Val de Loire et le Poitou. Bordeaux, classée au patrimoine mondial de l'UNESCO, est la capitale mondiale du vin et une ville dynamique qui attire voyageurs d'affaires et touristes du monde entier.",
        routeDescription:
          "L'itinéraire suit l'autoroute A10 « L'Aquitaine » via Orléans, Tours, Poitiers et Angoulême jusqu'à Bordeaux.",
        introduction:
          "Bordeaux est devenue l'une des destinations les plus prisées de France depuis la rénovation spectaculaire de son centre-ville et l'arrivée de la LGV en 2017. La Place de la Bourse et son miroir d'eau, les quais réaménagés de la Garonne, la Cité du Vin et le quartier Saint-Pierre en font une ville d'art et de gastronomie. Le taxi privé Paris — Bordeaux séduit les amateurs de vin qui rejoignent les châteaux du Médoc, de Saint-Émilion ou de Pomerol avec du matériel de dégustation et des caisses vides à remplir. Les familles se rendant au bassin d'Arcachon, à la dune du Pilat ou sur les plages de Lacanau préfèrent le taxi pour transporter planches de surf, vélos et équipements de plage. Les professionnels du secteur viticole, de l'aérospatiale (Dassault Aviation, Thales) et du tourisme d'affaires trouvent dans ce service la flexibilité nécessaire pour enchaîner rendez-vous à Bordeaux Métropole sans dépendre des horaires de train. Depuis la Cité du Vin jusqu'aux Chartrons, Bordeaux offre un cadre de vie exceptionnel que le taxi permet de rejoindre en toute quiétude.",
        itineraire:
          "Le départ de Paris se fait par la Porte d'Orléans ou la Porte d'Italie vers l'A10. Après la traversée de la Beauce, la route passe par Orléans (km 130) et ses ponts sur la Loire, puis Tours (km 235), porte d'entrée du Val de Loire avec ses châteaux. Après Tours, l'autoroute traverse le Poitou en passant par Poitiers (km 340), ville universitaire au riche patrimoine roman. L'aire de Poitiers-Jaunay est idéale pour une pause à mi-parcours, à proximité du Futuroscope. Le trajet se poursuit vers Angoulême, la ville de la BD et de l'image, avant d'entrer en Gironde par Barbezieux et les premières vignes du Bordelais. L'arrivée sur Bordeaux se fait par la rocade nord (A10/A630) avec une sortie vers le centre-ville, les Chartrons ou Mérignac selon votre destination. En cas de trafic sur la rocade bordelaise, le chauffeur peut emprunter les quais de la Garonne pour rejoindre le centre historique.",
        conseils:
          "Le meilleur créneau de départ est entre 8h et 10h en semaine pour arriver à Bordeaux en début d'après-midi. Évitez les départs de vendredi après-midi entre mai et septembre : l'A10 entre Tours et Poitiers est alors très chargée. La rocade de Bordeaux (A630) est tristement célèbre pour ses embouteillages aux heures de pointe : privilégiez une arrivée entre 11h et 15h. Pour les amateurs de vin, demandez au chauffeur un crochet par Saint-Émilion (30 min de détour depuis l'A10, sortie Libourne) — le village médiéval et ses caves méritent le détour. En hiver, le brouillard est fréquent dans la vallée de la Loire entre Orléans et Tours : votre chauffeur adaptera sa vitesse. L'aire de Poitiers-Jaunay (km 340) et celle de Saint-André-de-Cubzac (km 555) sont les meilleures pour les pauses.",
        comparaisonTransport:
          "Le TGV Paris-Montparnasse → Bordeaux Saint-Jean met désormais 2h04 grâce à la LGV Sud Europe Atlantique, pour 16 € (Ouigo) à 120 € (Business 1ère) par personne. Pour 4 passagers, le TGV coûte 64 à 480 €, plus les taxis locaux. En voiture, comptez 48 € de péages A10 et 55 € d'essence (93 € total). Notre taxi à partir de 580 € est compétitif dès 3-4 passagers et indispensable si vous transportez du vin, des vélos ou du matériel volumineux. Le confort d'un véhicule privé avec Wi-Fi et la liberté de s'arrêter à Saint-Émilion en chemin sont des atouts que le TGV ne peut offrir.",
        faq: [
          {
            question: "Quel est le prix d'un taxi Paris — Bordeaux ?",
            answer:
              "Le forfait est de 580 à 740 € en berline et à partir de 880 € en van. Péages (~48 €) et carburant inclus dans le prix.",
          },
          {
            question: "Combien de temps dure le trajet Paris — Bordeaux ?",
            answer:
              "Environ 6h via l'A10, pauses comprises. Le trafic peut rallonger à 7h le vendredi soir en période estivale.",
          },
          {
            question: "Peut-on s'arrêter à Saint-Émilion en chemin ?",
            answer:
              "Oui, un détour par Saint-Émilion (30 min de plus) est possible sur demande. Idéal pour une visite de cave ou un déjeuner dans le village médiéval.",
          },
          {
            question: "Le taxi peut-il me déposer au bassin d'Arcachon ?",
            answer:
              "Oui, la dépose au bassin d'Arcachon, à la Dune du Pilat ou à Lacanau est possible avec un supplément de 40 à 60 € selon la distance.",
          },
          {
            question: "Le chauffeur peut-il transporter des caisses de vin au retour ?",
            answer:
              "Absolument ! Nos berlines acceptent jusqu'à 6 caisses de vin en coffre, et nos vans jusqu'à 15 caisses. Service idéal pour les achats dans les châteaux bordelais.",
          },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Bordeaux | Fixed rate from €580 | TaxiNeo",
        metaDescription:
          "Book your private taxi Paris → Bordeaux. 585 km, ~6h, fixed rate from €580. Comfortable private transfer, 24/7.",
        heroTitle: "Taxi Paris → Bordeaux",
        heroSubtitle:
          "Private transfer Paris → Bordeaux from €580 — €740. Stress-free travel with home pick-up.",
        description:
          "The Paris — Bordeaux route follows the A10 through the Loire Valley and Poitou. Bordeaux, a UNESCO World Heritage city, is the world wine capital and a dynamic destination.",
        routeDescription:
          "The route follows the A10 'L'Aquitaine' motorway via Orléans, Tours, Poitiers and Angoulême to Bordeaux.",
        introduction:
          "Bordeaux has become one of France's most sought-after destinations since its spectacular centre renovation and the 2017 high-speed rail link. The private taxi appeals to wine lovers heading to Médoc and Saint-Émilion, families bound for Arcachon Bay, and aerospace professionals.",
        itineraire:
          "From Paris via Porte d'Orléans onto the A10, passing Orléans (km 130), Tours (km 235) and Poitiers (km 340). The Poitiers-Jaunay rest area near Futuroscope is ideal for a midpoint break. Continue through Angoulême before entering the Bordeaux wine region.",
        conseils:
          "Best departure between 8-10am on weekdays. Avoid Friday afternoons May-September. Bordeaux's ring road (A630) is notorious for rush-hour jams. Wine lovers can request a detour through Saint-Émilion (30 min extra).",
        comparaisonTransport:
          "The TGV takes 2h04 for €16-120 per person. For 4 passengers, that's €64-480 plus local taxis. Our taxi from €580 is competitive from 3-4 passengers and essential for transporting wine, bikes or bulky equipment.",
        faq: [
          {
            question: "What is the price of a taxi Paris — Bordeaux?",
            answer: "The flat rate is €580-740 for a sedan and from €880 for a van. Tolls (~€48) and fuel included.",
          },
          {
            question: "How long does the journey take?",
            answer: "About 6 hours via the A10 including breaks. Up to 7 hours on Friday evenings in summer.",
          },
          {
            question: "Can we stop at Saint-Émilion?",
            answer: "Yes, a 30-minute detour through Saint-Émilion is available on request.",
          },
          {
            question: "Can the taxi drop me off at Arcachon Bay?",
            answer: "Yes, drop-off at Arcachon, Dune du Pilat or Lacanau with a €40-60 supplement.",
          },
          {
            question: "Can the driver transport wine cases on the return?",
            answer: "Yes! Sedans fit up to 6 cases, vans up to 15 cases. Ideal for château purchases.",
          },
        ],
      },
    },
  },

  // 6. PARIS → NICE
  {
    slug: "paris-nice",
    from: "Paris",
    to: "Nice",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 43.7102,
    toLng: 7.262,
    distanceKm: 930,
    durationMin: 540,
    priceEstimate: "900 — 1150 €",
    category: "longue-distance",
    prixMin: 900,
    prixMax: 1150,
    prixVan: 1350,
    dureeMax: 620,
    autoroute: "A6 puis A8",
    peages: "~80 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "nice",
    liensInternes: ["paris-marseille", "paris-lyon", "paris-avignon"],
    tags: ["longue-distance", "tourisme"],
    hub: "paris",
    highlights: ["A6/A7/A8", "Vallée du Rhône", "Côte d'Azur", "Promenade des Anglais"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Nice | Forfait dès 900 € | TaxiNeo",
        metaDescription:
          "Réservez votre taxi Paris → Nice. 930 km, ~9h, forfait dès 900 €. Transfert privé vers la Côte d'Azur, véhicule haut de gamme.",
        heroTitle: "Taxi Paris → Nice",
        heroSubtitle:
          "Transfert privé Paris → Nice au forfait de 900 — 1 150 €. Rejoignez la Côte d'Azur en tout confort.",
        description:
          "Le trajet Paris — Nice est la grande traversée vers la Côte d'Azur. Nice, cinquième ville de France, est réputée pour sa Promenade des Anglais, son vieux Nice et sa proximité avec Monaco et Cannes. Idéal pour les vacanciers chargés ou les transferts d'affaires haut de gamme.",
        routeDescription:
          "L'itinéraire principal emprunte l'A6 jusqu'à Lyon, l'A7 jusqu'à Aix-en-Provence, puis l'A8 « La Provençale » le long de la Côte d'Azur jusqu'à Nice.",
        introduction:
          "Nice, perle de la Riviera française, est la destination touristique par excellence du sud-est de la France. La ville attire aussi bien les touristes internationaux séduits par la Promenade des Anglais et le Carnaval de Nice que les professionnels de la tech installés dans la technopole de Sophia Antipolis, les congressistes du Palais des Congrès de l'Acropolis et les participants au MIPIM à Cannes toute proche. Un taxi privé Paris — Nice permet de transporter facilement clubs de golf, matériel de ski nautique ou bagages volumineux pour un séjour prolongé. Les familles nombreuses trouvent dans ce service une alternative économique à l'avion quand il faut acheter cinq ou six billets en haute saison. Le trajet traverse des paysages somptueux, de la Bourgogne à la Provence, avec la possibilité de s'arrêter pour déjeuner dans un restaurant étoilé de la vallée du Rhône ou visiter le pont du Gard en chemin. Nice offre ensuite un art de vivre méditerranéen unique, entre socca du Vieux-Nice, marchés colorés du Cours Saleya et musées Matisse et Chagall.",
        itineraire:
          "Le trajet suit l'A6 de Paris à Lyon (465 km, ~4h30), puis l'A7 le long de la vallée du Rhône jusqu'à Aix-en-Provence (770 km, ~7h). Après Aix, le véhicule emprunte l'A8 « La Provençale » qui longe la Côte d'Azur : Fréjus, Cannes, Antibes puis Nice. L'arrivée sur Nice se fait par la voie rapide du bord de mer (Promenade des Anglais) ou par l'A8 sortie Nice-Nord selon la destination. Deux pauses sont prévues : la première à mi-chemin entre Paris et Lyon (aire de Beaune-Tailly), la seconde entre Lyon et Nice (aire de Montélimar ou Vidauban). En cas de trafic estival sur l'A7, une alternative par l'A51 via Gap et Digne-les-Bains permet de rejoindre Nice par l'arrière-pays, un itinéraire plus long mais spectaculaire à travers les Alpes du Sud.",
        conseils:
          "Le Paris — Nice est un trajet de près de 9 heures : un départ tôt le matin (5h-6h) ou en soirée (20h-21h) est vivement recommandé pour éviter le trafic. Prévoyez au minimum trois pauses. Le tronçon Lyon — Orange sur l'A7 est le plus critique en été, avec des ralentissements importants le samedi (classement Bison Futé rouge ou noir en juillet-août). L'A8 entre Fréjus et Nice est souvent ralentie le dimanche soir en période estivale. En hiver, les conditions sur l'A8 dans le massif de l'Esterel peuvent être délicates (vent, pluie) mais la neige est rare sur le littoral. Si vous arrivez à Nice le soir, profitez du panorama depuis la colline du Château pour un coucher de soleil inoubliable. Pour les transferts vers Monaco, Cannes ou Antibes, un supplément de 20 à 50 € s'applique.",
        comparaisonTransport:
          "L'avion Paris-Orly ou CDG → Nice met 1h30 en vol, mais 3h30 porte-à-porte pour 50 à 300 € par personne. Le TGV Paris → Nice met environ 5h30 pour 30 à 150 € par personne. Pour une famille de cinq, l'avion revient entre 250 et 1 500 € et le TGV entre 150 et 750 €, auxquels il faut ajouter les transferts locaux. Notre taxi à partir de 900 € devient très compétitif pour 4-5 passagers, avec l'avantage incomparable de transporter tous les bagages et équipements de vacances directement du domicile parisien à l'hôtel niçois.",
        faq: [
          {
            question: "Quel est le prix d'un taxi Paris — Nice ?",
            answer:
              "Le forfait est de 900 à 1 150 € en berline et à partir de 1 350 € en van. Péages (~80 €) et carburant inclus.",
          },
          {
            question: "Combien de temps dure le trajet Paris — Nice ?",
            answer:
              "Environ 9 heures via l'A6/A7/A8, pauses comprises. En été, le trafic peut rallonger à 10-11h.",
          },
          {
            question: "Peut-on être déposé à Monaco ou Cannes ?",
            answer:
              "Oui, la dépose à Monaco, Cannes, Antibes ou Saint-Tropez est possible avec un supplément de 20 à 80 € selon la distance.",
          },
          {
            question: "Le départ de nuit est-il possible ?",
            answer:
              "Oui, un départ nocturne (22h-23h) permet d'arriver à Nice le lendemain matin avec un trajet fluide. Supplément nuit de 15 %.",
          },
          {
            question: "Combien de bagages peut-on emporter ?",
            answer:
              "La berline accepte 3 grandes valises et 2 bagages cabine. Le van peut emporter 6 grandes valises et du matériel de sport (skis nautiques, golf, etc.).",
          },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Nice | Fixed rate from €900 | TaxiNeo",
        metaDescription:
          "Book your private taxi Paris → Nice. 930 km, ~9h, from €900. Premium transfer to the French Riviera.",
        heroTitle: "Taxi Paris → Nice",
        heroSubtitle:
          "Private transfer Paris → Nice from €900 — €1,150. Reach the Côte d'Azur in complete comfort.",
        description:
          "The Paris — Nice journey is the grand traverse to the French Riviera. Nice is renowned for its Promenade des Anglais and proximity to Monaco and Cannes.",
        routeDescription:
          "The route takes the A6 to Lyon, A7 to Aix-en-Provence, then the A8 along the Côte d'Azur to Nice.",
        introduction:
          "Nice, the jewel of the French Riviera, attracts tourists, tech professionals at Sophia Antipolis, and congress attendees. A private taxi allows easy transport of golf clubs, water sports equipment and bulky luggage. For families of five, this becomes an economical alternative to flying in high season.",
        itineraire:
          "The journey follows the A6 to Lyon (465 km), A7 along the Rhône valley to Aix-en-Provence (770 km), then the A8 along the coast through Fréjus, Cannes and Antibes to Nice. Two breaks are planned: Beaune-Tailly and Montélimar or Vidauban.",
        conseils:
          "This is a 9-hour journey: depart early (5-6am) or in the evening. Plan at least three breaks. The A7 between Lyon and Orange is critical in summer. The A8 is often slow on Sunday evenings. For Monaco, Cannes or Antibes transfers, a €20-50 supplement applies.",
        comparaisonTransport:
          "Flights take 1h30 but 3h30 door-to-door for €50-300 per person. TGV takes 5h30 for €30-150. Our taxi from €900 is competitive for 4-5 passengers with unlimited luggage.",
        faq: [
          {
            question: "What is the price of a taxi Paris — Nice?",
            answer: "€900-1,150 for a sedan, from €1,350 for a van. Tolls (~€80) and fuel included.",
          },
          {
            question: "How long does the journey take?",
            answer: "About 9 hours via A6/A7/A8 including breaks. Up to 10-11h in summer.",
          },
          {
            question: "Can I be dropped off in Monaco or Cannes?",
            answer: "Yes, with a supplement of €20-80 depending on distance.",
          },
          {
            question: "Is a night departure possible?",
            answer: "Yes, departing 10-11pm allows arrival next morning. 15% night surcharge applies.",
          },
          {
            question: "How much luggage can I bring?",
            answer: "Sedan: 3 large suitcases + 2 cabin bags. Van: 6 large suitcases + sports equipment.",
          },
        ],
      },
    },
  },

  // 7. PARIS → NANTES
  {
    slug: "paris-nantes",
    from: "Paris",
    to: "Nantes",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 47.2184,
    toLng: -1.5536,
    distanceKm: 385,
    durationMin: 240,
    priceEstimate: "400 — 520 €",
    category: "longue-distance",
    prixMin: 400,
    prixMax: 520,
    prixVan: 620,
    dureeMax: 300,
    autoroute: "A11",
    peages: "~32 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "nantes",
    liensInternes: ["paris-le-mans", "paris-angers", "paris-rennes"],
    tags: ["longue-distance", "business"],
    hub: "paris",
    highlights: ["A11 L'Océane", "Le Mans", "Angers", "Machines de l'Île"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Nantes | Forfait dès 400 € | TaxiNeo",
        metaDescription:
          "Réservez votre taxi Paris → Nantes. 385 km, ~4h, forfait dès 400 €. Transfert confortable, chauffeur professionnel.",
        heroTitle: "Taxi Paris → Nantes",
        heroSubtitle:
          "Transfert privé Paris → Nantes au forfait de 400 — 520 €. Voyage direct porte-à-porte.",
        description:
          "Le trajet Paris — Nantes relie la capitale à la métropole de l'Ouest via l'A11 « L'Océane ». Nantes, élue capitale verte de l'Europe, est un pôle économique dynamique avec son quartier de la création sur l'Île de Nantes et ses célèbres Machines de l'Île.",
        routeDescription:
          "L'itinéraire emprunte l'autoroute A11 via Chartres, Le Mans et Angers. Un parcours direct et bien entretenu.",
        introduction:
          "Nantes, sixième ville de France, a connu un essor remarquable ces dernières années grâce à son attractivité économique, culturelle et son cadre de vie exceptionnel entre Loire et océan. L'Île de Nantes, avec ses Machines de l'Île — dont le Grand Éléphant mécanique qui fait le tour du monde sur les réseaux sociaux —, est devenue un symbole de la créativité nantaise. Le quartier de la création accueille startups, studios de design et agences numériques qui attirent des talents de toute la France. Le taxi privé Paris — Nantes est particulièrement apprécié des familles se rendant en Bretagne Sud ou sur la côte atlantique (La Baule, Pornic, Noirmoutier) avec tout leur équipement de vacances. Les cadres de l'industrie agroalimentaire (LU, Bel), de la construction navale (Chantiers de l'Atlantique à Saint-Nazaire) et du numérique font régulièrement ce trajet pour des raisons professionnelles. Le Voyage à Nantes, événement culturel estival qui transforme la ville en musée à ciel ouvert, attire également de nombreux visiteurs parisiens.",
        itineraire:
          "Le départ de Paris se fait par la Porte de Saint-Cloud ou la Porte de Versailles vers l'A13 puis l'A12 et l'A11. Après Chartres et ses flèches de cathédrale visibles à des kilomètres, la route traverse le Perche puis le Maine. Le Mans (km 210), célèbre pour ses 24 Heures, offre une aire de repos pratique. Après Le Mans, l'A11 continue vers Angers (km 300), la capitale de l'Anjou et du doux art de vivre ligérien. Les derniers 90 km traversent le vignoble de Muscadet avant d'atteindre Nantes par la porte nord-est. L'arrivée en ville se fait par le boulevard périphérique (A844) avec des sorties vers le centre-ville, l'Île de Nantes ou la gare Sud.",
        conseils:
          "Le trajet Paris — Nantes est relativement court (4h) et ne nécessite qu'une seule pause, idéalement au Mans ou à Angers. Évitez les départs le vendredi soir en été : l'A11 est très chargée entre Paris et Le Mans avec les vacanciers se rendant sur la côte atlantique. Le samedi matin est plus fluide. En hiver, le tronçon Chartres — Le Mans peut être affecté par le verglas : nos véhicules sont équipés en conséquence. Si vous poursuivez vers La Baule ou Saint-Nazaire, prévoyez 45 minutes supplémentaires. Pour les voyageurs d'affaires, un départ à 6h30 permet d'être à Nantes à 10h30 pour une réunion de fin de matinée.",
        comparaisonTransport:
          "Le TGV Paris-Montparnasse → Nantes met 2h15 pour 15 € (Ouigo) à 90 € (1ère classe). Pour trois personnes, le train coûte 45 à 270 €. En voiture, comptez 32 € de péages et 40 € d'essence (72 €). Notre taxi à partir de 400 € est avantageux dès 3 passagers et offre la flexibilité porte-à-porte, la possibilité de poursuivre vers La Baule ou Saint-Nazaire et un espace confortable pour travailler pendant le trajet.",
        faq: [
          {
            question: "Quel est le prix d'un taxi Paris — Nantes ?",
            answer:
              "Le forfait est de 400 à 520 € en berline et à partir de 620 € en van. Prix tout compris.",
          },
          {
            question: "Combien de temps met un taxi Paris — Nantes ?",
            answer:
              "Environ 4 heures via l'A11 en conditions normales, pause incluse.",
          },
          {
            question: "Peut-on continuer jusqu'à La Baule ou Saint-Nazaire ?",
            answer:
              "Oui, un supplément de 50 à 80 € s'applique pour une dépose à La Baule, Saint-Nazaire ou Pornic.",
          },
          {
            question: "Le service est-il adapté aux déménagements étudiants ?",
            answer:
              "Oui, notre van peut transporter cartons, valises et petit mobilier pour un déménagement étudiant Paris — Nantes.",
          },
          {
            question: "Proposez-vous un aller-retour dans la journée ?",
            answer:
              "Oui, forfait aller-retour disponible avec 4 à 8h d'attente sur place. Contactez-nous pour un devis.",
          },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Nantes | Fixed rate from €400 | TaxiNeo",
        metaDescription:
          "Book your private taxi Paris → Nantes. 385 km, ~4h, from €400. Comfortable door-to-door transfer.",
        heroTitle: "Taxi Paris → Nantes",
        heroSubtitle: "Private transfer Paris → Nantes from €400 — €520. Direct door-to-door journey.",
        description:
          "The Paris — Nantes route connects the capital to western France's dynamic metropolis via the A11. Nantes, named European Green Capital, is famous for its Machines de l'Île and creative quarter.",
        routeDescription: "The route follows the A11 motorway via Chartres, Le Mans and Angers.",
        introduction:
          "Nantes, France's sixth city, has boomed thanks to its economic attractiveness and exceptional quality of life between Loire and ocean. The private taxi is popular with families heading to Brittany and the Atlantic coast, and professionals in food industry and shipbuilding.",
        itineraire:
          "From Paris via Porte de Saint-Cloud onto the A11. Pass Chartres, Le Mans (km 210) and Angers (km 300) through Muscadet vineyards to Nantes. Arrival via the ring road (A844).",
        conseils:
          "One stop needed, ideally at Le Mans or Angers. Avoid Friday evenings in summer. Departure at 6:30am reaches Nantes by 10:30am for business travellers.",
        comparaisonTransport:
          "TGV takes 2h15 for €15-90 per person. Our taxi from €400 is advantageous from 3 passengers with door-to-door flexibility and the option to continue to La Baule.",
        faq: [
          {
            question: "What is the price of a taxi Paris — Nantes?",
            answer: "€400-520 for a sedan, from €620 for a van. All-inclusive.",
          },
          {
            question: "How long does the journey take?",
            answer: "About 4 hours via the A11 including one break.",
          },
          {
            question: "Can I continue to La Baule or Saint-Nazaire?",
            answer: "Yes, with a supplement of €50-80.",
          },
          {
            question: "Is the service suitable for student moves?",
            answer: "Yes, our van can transport boxes, suitcases and small furniture.",
          },
          {
            question: "Do you offer same-day round trips?",
            answer: "Yes, round-trip packages available with 4-8h on-site waiting.",
          },
        ],
      },
    },
  },

  // 8. PARIS → STRASBOURG
  {
    slug: "paris-strasbourg",
    from: "Paris",
    to: "Strasbourg",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 48.5734,
    toLng: 7.7521,
    distanceKm: 490,
    durationMin: 280,
    priceEstimate: "500 — 650 €",
    category: "longue-distance",
    prixMin: 500,
    prixMax: 650,
    prixVan: 780,
    dureeMax: 340,
    autoroute: "A4",
    peages: "~35 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "strasbourg",
    liensInternes: ["paris-reims", "paris-metz", "paris-nancy"],
    tags: ["longue-distance", "business"],
    hub: "paris",
    highlights: ["A4 L'Est", "Reims", "Metz", "Cathédrale de Strasbourg", "Parlement européen"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Strasbourg | Forfait dès 500 € | TaxiNeo",
        metaDescription:
          "Réservez votre taxi Paris → Strasbourg. 490 km, ~4h40, forfait dès 500 €. Chauffeur privé, transfert direct.",
        heroTitle: "Taxi Paris → Strasbourg",
        heroSubtitle:
          "Transfert privé Paris → Strasbourg au forfait de 500 — 650 €. Capitale européenne, porte-à-porte.",
        description:
          "Le trajet Paris — Strasbourg relie la capitale à la métropole alsacienne, siège du Parlement européen et capitale de Noël. Via l'A4, ce transfert traverse la Champagne et la Lorraine avant d'atteindre l'Alsace et ses paysages caractéristiques.",
        routeDescription:
          "L'itinéraire suit l'autoroute A4 « L'Est » via Reims, Metz et Saverne. Le col de Saverne marque l'entrée en Alsace.",
        introduction:
          "Strasbourg, capitale de l'Alsace et siège du Parlement européen, de la Cour européenne des droits de l'homme et du Conseil de l'Europe, accueille un flux constant de diplomates, fonctionnaires européens, lobbyistes et journalistes qui font la navette avec Paris. Le quartier européen de Strasbourg, la Petite France classée UNESCO et la cathédrale Notre-Dame avec son horloge astronomique font de la ville un mélange unique de patrimoine historique et d'institutions internationales. Le taxi privé est le moyen idéal pour rejoindre Strasbourg avec des dossiers confidentiels, du matériel de conférence ou simplement pour profiter du trajet pour préparer ses réunions. En décembre, le marché de Noël de Strasbourg, le plus ancien de France (Christkindelsmärik), attire des visiteurs de toute l'Europe. Les familles alsaciennes installées à Paris apprécient ce service pour les retours au pays avec tout leur chargement — choucroute, munster, vins d'Alsace au retour. Le parcours à travers la Champagne offre en prime la possibilité d'un arrêt dans une maison de champagne à Reims.",
        itineraire:
          "Le départ se fait par la Porte de Bercy ou la Porte de Vincennes vers l'A4. Après la traversée de la banlieue est et la forêt de Meaux, la route atteint Reims (km 145), capitale du champagne, dont les caves Taittinger et Veuve Clicquot sont inscrites au patrimoine UNESCO. Après Reims, l'A4 traverse la plaine de Champagne — paysage de grandes cultures à perte de vue — avant d'atteindre la Lorraine. Metz (km 330), avec sa gare impériale et le Centre Pompidou-Metz, constitue une pause idéale. Les 160 derniers kilomètres traversent le Pays de Sarrebourg et les Vosges du Nord avant le col de Saverne (alt. 413 m), point d'entrée spectaculaire en Alsace avec une vue panoramique sur la plaine du Rhin. La descente vers Strasbourg révèle les premiers colombages alsaciens et les vignobles de la route des Vins. L'arrivée se fait par l'A35 avec sortie vers le centre historique, le quartier européen ou Kehl en Allemagne.",
        conseils:
          "L'A4 est une autoroute fluide sauf en sortie de Paris (Porte de Bercy) entre 7h et 9h. Le créneau optimal est un départ entre 9h30 et 11h. Le col de Saverne peut être enneigé en hiver (décembre-février) : votre chauffeur est équipé de pneus hiver. Si vous voyagez en décembre pour le marché de Noël, réservez au moins une semaine à l'avance car la demande est très forte. Pour les amateurs de champagne, un arrêt à Reims (détour de 10 min depuis l'A4) permet de visiter les caves en 1h environ. L'aire de Verdun-Saint-Nicolas (km 265) est recommandée pour une pause : elle offre un espace pique-nique agréable et un petit musée sur la bataille de Verdun. En été, la route des Vins d'Alsace depuis Saverne est une alternative pittoresque pour les 50 derniers kilomètres.",
        comparaisonTransport:
          "Le TGV Est Paris — Strasbourg met 1h46 grâce à la LGV Est, pour 25 € (Ouigo) à 110 € (1ère flexible) par personne. C'est l'un des TGV les plus compétitifs de France. Cependant, notre taxi à partir de 500 € reste pertinent pour les groupes de 3-4 personnes (le TGV pour 4 revient entre 100 et 440 €), les voyageurs avec bagages encombrants et ceux qui souhaitent s'arrêter à Reims pour les champagnes ou à Metz pour le Pompidou. Pour les allers-retours professionnels, le gain de flexibilité par rapport aux horaires de TGV est un atout apprécié des cadres.",
        faq: [
          {
            question: "Quel est le prix d'un taxi Paris — Strasbourg ?",
            answer:
              "Le forfait est de 500 à 650 € en berline et à partir de 780 € en van. Péages (~35 €) et carburant inclus.",
          },
          {
            question: "Combien de temps dure le trajet ?",
            answer:
              "Environ 4h40 via l'A4, pause comprise. En hiver par temps de neige, comptez 5h à 5h30.",
          },
          {
            question: "Peut-on s'arrêter à Reims pour visiter les caves de champagne ?",
            answer:
              "Oui, un arrêt d'1h à 2h à Reims est possible avec un léger supplément. Nous pouvons réserver la visite de cave pour vous.",
          },
          {
            question: "Le taxi peut-il continuer vers l'Allemagne (Kehl, Baden-Baden) ?",
            answer:
              "Oui, la traversée du Rhin vers Kehl ou Baden-Baden est possible moyennant un supplément de 30 à 60 €.",
          },
          {
            question: "Y a-t-il des départs spéciaux pour le marché de Noël ?",
            answer:
              "En décembre, nous proposons un forfait spécial marché de Noël avec départ vendredi et retour dimanche. Contactez-nous pour les détails.",
          },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Strasbourg | Fixed rate from €500 | TaxiNeo",
        metaDescription:
          "Book your private taxi Paris → Strasbourg. 490 km, ~4h40, from €500. Direct private transfer to the European capital.",
        heroTitle: "Taxi Paris → Strasbourg",
        heroSubtitle: "Private transfer Paris → Strasbourg from €500 — €650. Door-to-door to the European capital.",
        description:
          "The Paris — Strasbourg route connects the capital to Alsace, home of the European Parliament and France's Christmas Capital.",
        routeDescription: "The route follows the A4 motorway via Reims, Metz and the Saverne pass into Alsace.",
        introduction:
          "Strasbourg, capital of Alsace and seat of the European Parliament, hosts a constant flow of diplomats and European officials. The private taxi is ideal for travelling with confidential documents or conference materials. In December, Strasbourg's Christmas market draws visitors from across Europe.",
        itineraire:
          "From Paris via Porte de Bercy onto the A4. Pass Reims (km 145), Metz (km 330) with its Pompidou Centre, then cross the Saverne pass (413m) for a spectacular entry into Alsace. Arrival via the A35.",
        conseils:
          "The A4 is smooth except for Paris exit between 7-9am. Optimal departure 9:30-11am. Saverne pass may have snow in winter. For champagne lovers, a Reims stop adds about 1 hour. Book a week ahead in December for the Christmas market.",
        comparaisonTransport:
          "The TGV takes 1h46 for €25-110 per person. Our taxi from €500 suits groups of 3-4, travellers with bulky luggage, and those wanting stops at Reims or Metz.",
        faq: [
          {
            question: "What is the price of a taxi Paris — Strasbourg?",
            answer: "€500-650 for a sedan, from €780 for a van. Tolls (~€35) and fuel included.",
          },
          {
            question: "How long does the journey take?",
            answer: "About 4h40 via the A4 including a break. Allow 5-5h30 in snowy winter conditions.",
          },
          {
            question: "Can we stop at Reims for champagne cellars?",
            answer: "Yes, a 1-2 hour stop at Reims is available with a small supplement.",
          },
          {
            question: "Can the taxi continue to Germany?",
            answer: "Yes, Kehl or Baden-Baden with a €30-60 supplement.",
          },
          {
            question: "Are there special Christmas market packages?",
            answer: "In December, we offer special weekend packages for the Strasbourg Christmas market.",
          },
        ],
      },
    },
  },

  // 9. PARIS → MONTPELLIER
  {
    slug: "paris-montpellier",
    from: "Paris",
    to: "Montpellier",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 43.6108,
    toLng: 3.8767,
    distanceKm: 750,
    durationMin: 430,
    priceEstimate: "720 — 920 €",
    category: "longue-distance",
    prixMin: 720,
    prixMax: 920,
    prixVan: 1080,
    dureeMax: 500,
    autoroute: "A6 puis A9",
    peages: "~60 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "montpellier",
    liensInternes: ["paris-lyon", "paris-nimes", "paris-avignon"],
    tags: ["longue-distance", "tourisme"],
    hub: "paris",
    highlights: ["A6/A7/A9", "Vallée du Rhône", "Nîmes", "Place de la Comédie"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Montpellier | Forfait dès 720 € | TaxiNeo",
        metaDescription:
          "Réservez votre taxi Paris → Montpellier. 750 km, ~7h, forfait dès 720 €. Transfert privé vers le sud, chauffeur professionnel.",
        heroTitle: "Taxi Paris → Montpellier",
        heroSubtitle:
          "Transfert privé Paris → Montpellier au forfait de 720 — 920 €. Direction le Languedoc en confort premium.",
        description:
          "Le trajet Paris — Montpellier traverse la France du nord au sud pour rejoindre la métropole du Languedoc. Montpellier, ville étudiante et innovante, séduit par sa Place de la Comédie, son quartier Antigone et sa proximité avec les plages méditerranéennes.",
        routeDescription:
          "L'itinéraire emprunte l'A6 jusqu'à Lyon, l'A7 le long de la vallée du Rhône, puis l'A9 « La Languedocienne » jusqu'à Montpellier.",
        introduction:
          "Montpellier est l'une des villes françaises les plus dynamiques, avec une croissance démographique parmi les plus fortes du pays. Huitième ville de France, elle accueille plus de 70 000 étudiants grâce à sa faculté de médecine — la plus ancienne en activité du monde occidental — et ses universités réputées. Le secteur de la santé, de la biotech et du numérique y est en plein essor, attirant chercheurs et entrepreneurs du monde entier. Le taxi privé Paris — Montpellier convient aux familles rejoignant le littoral languedocien (Palavas, La Grande-Motte, Carnon) avec leur matériel de plage, aux professionnels des congrès au Corum et aux étudiants déménageant en début d'année universitaire avec leurs affaires. La ville offre un cadre de vie exceptionnel entre Méditerranée et Cévennes, avec un ensoleillement record de plus de 300 jours par an. L'Écusson, centre historique médiéval aux ruelles étroites, les terrasses de cafés de la Place de la Comédie et le tramway coloré dessiné par Christian Lacroix sont emblématiques de l'art de vivre montpelliérain.",
        itineraire:
          "Le trajet suit le même itinéraire que le Paris — Marseille jusqu'à Orange. Après Lyon (4h30) et la vallée du Rhône, le véhicule quitte l'A7 à Orange pour prendre l'A9 « La Languedocienne » en direction de Nîmes puis Montpellier. Le passage par Nîmes, avec ses arènes romaines visibles depuis l'autoroute, est une étape marquante. Les derniers 50 km entre Nîmes et Montpellier traversent la garrigue languedocienne. L'arrivée à Montpellier se fait par la sortie Montpellier-Est ou Montpellier-Sud selon la destination. Pauses recommandées : Beaune-Tailly (km 310) et Montélimar ou Orange (km 600).",
        conseils:
          "Les mêmes conseils que pour le Paris — Marseille s'appliquent jusqu'à Orange. L'A9 entre Nîmes et Montpellier est souvent chargée aux heures de pointe : privilégiez une arrivée entre 10h et 15h. En été, Montpellier est une ville très chaude (souvent 35-40°C) : préférez un départ nocturne pour arriver le matin. Le tramway de Montpellier est excellent pour se déplacer en ville, mais un taxi permet de rejoindre directement les plages de Palavas (15 min) ou La Grande-Motte (25 min). Si vous êtes amateur de vin, l'arrière-pays entre Nîmes et Montpellier abrite des domaines viticoles du Pic-Saint-Loup exceptionnels.",
        comparaisonTransport:
          "Le TGV Paris — Montpellier met 3h20 (Ouigo via LGV) pour 19 à 120 € par personne. L'avion met 1h20 en vol pour 40 à 200 €. Notre taxi à partir de 720 € tout compris est compétitif dès 4 passagers et offre l'avantage de transporter tout l'équipement de vacances directement du domicile parisien à la résidence montpelliéraine ou à la plage. Le service est particulièrement adapté aux déménagements étudiants en septembre.",
        faq: [
          {
            question: "Quel est le prix d'un taxi Paris — Montpellier ?",
            answer: "Le forfait est de 720 à 920 € en berline et à partir de 1 080 € en van. Tout compris.",
          },
          {
            question: "Combien de temps dure le trajet ?",
            answer: "Environ 7 heures via l'A6/A7/A9, pauses comprises.",
          },
          {
            question: "Peut-on être déposé aux plages (Palavas, La Grande-Motte) ?",
            answer: "Oui, la dépose aux plages est possible sans supplément dans un rayon de 20 km autour de Montpellier.",
          },
          {
            question: "Le service convient-il pour un déménagement étudiant ?",
            answer: "Oui, notre van peut transporter cartons, valises et petit mobilier pour une installation étudiante.",
          },
          {
            question: "Peut-on s'arrêter à Nîmes en chemin ?",
            answer: "Oui, un arrêt de 30 min à 1h à Nîmes (arènes, Maison Carrée) est possible avec un léger supplément.",
          },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Montpellier | Fixed rate from €720 | TaxiNeo",
        metaDescription:
          "Book your private taxi Paris → Montpellier. 750 km, ~7h, from €720. Private transfer to the south.",
        heroTitle: "Taxi Paris → Montpellier",
        heroSubtitle: "Private transfer Paris → Montpellier from €720 — €920. Head to Languedoc in premium comfort.",
        description:
          "The Paris — Montpellier journey reaches the dynamic Languedoc capital, known for its Place de la Comédie and Mediterranean beaches.",
        routeDescription: "The route takes the A6 to Lyon, A7 along the Rhône valley, then A9 to Montpellier.",
        introduction:
          "Montpellier is one of France's most dynamic cities with 70,000+ students and a booming biotech sector. The private taxi suits families heading to the coast, congress professionals and students moving for the academic year.",
        itineraire:
          "Same route as Paris — Marseille to Orange, then A9 through Nîmes to Montpellier. Stops at Beaune-Tailly (km 310) and Montélimar or Orange (km 600).",
        conseils:
          "The A9 between Nîmes and Montpellier is busy at peak times. In summer, prefer a night departure. The hinterland between Nîmes and Montpellier has exceptional Pic-Saint-Loup wineries.",
        comparaisonTransport:
          "TGV takes 3h20 for €19-120. Our taxi from €720 is competitive from 4 passengers with unlimited luggage and door-to-door convenience.",
        faq: [
          {
            question: "What is the price of a taxi Paris — Montpellier?",
            answer: "€720-920 for a sedan, from €1,080 for a van. All-inclusive.",
          },
          {
            question: "How long does the journey take?",
            answer: "About 7 hours via A6/A7/A9 including breaks.",
          },
          {
            question: "Can I be dropped at the beach?",
            answer: "Yes, drop-off at Palavas or La Grande-Motte at no extra charge within 20km of Montpellier.",
          },
          {
            question: "Is the service suitable for student moves?",
            answer: "Yes, our van can transport boxes, suitcases and small furniture.",
          },
          {
            question: "Can we stop at Nîmes?",
            answer: "Yes, a 30min-1h stop at Nîmes is available with a small supplement.",
          },
        ],
      },
    },
  },

  // 10. PARIS → RENNES
  {
    slug: "paris-rennes",
    from: "Paris",
    to: "Rennes",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 48.1173,
    toLng: -1.6778,
    distanceKm: 350,
    durationMin: 220,
    priceEstimate: "370 — 480 €",
    category: "longue-distance",
    prixMin: 370,
    prixMax: 480,
    prixVan: 580,
    dureeMax: 270,
    autoroute: "A11 puis A81",
    peages: "~28 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "rennes",
    liensInternes: ["paris-le-mans", "paris-nantes", "paris-brest"],
    tags: ["longue-distance", "business"],
    hub: "paris",
    highlights: ["A11/A81", "Le Mans", "Laval", "Parlement de Bretagne"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Rennes | Forfait dès 370 € | TaxiNeo",
        metaDescription:
          "Réservez votre taxi Paris → Rennes. 350 km, ~3h40, forfait dès 370 €. Transfert direct vers la capitale bretonne.",
        heroTitle: "Taxi Paris → Rennes",
        heroSubtitle:
          "Transfert privé Paris → Rennes au forfait de 370 — 480 €. Cap sur la Bretagne en tout confort.",
        description:
          "Le trajet Paris — Rennes relie la capitale à la porte d'entrée de la Bretagne. Rennes, ville universitaire dynamique et capitale régionale, est devenue un pôle technologique majeur avec sa French Tech. Le taxi privé est parfait pour les familles se rendant en Bretagne.",
        routeDescription:
          "L'itinéraire principal emprunte l'A11 jusqu'au Mans, puis l'A81 via Laval jusqu'à Rennes. Alternative par l'A13 et la N12 via Alençon.",
        introduction:
          "Rennes, capitale de la Bretagne, a connu une transformation spectaculaire ces vingt dernières années. L'arrivée de la LGV en 2017 l'a placée à 1h25 de Paris en TGV, mais la ville garde une identité forte et indépendante. Le quartier de la Gare, le centre historique à pans de bois autour de la place des Lices et le Parlement de Bretagne témoignent d'un patrimoine riche. Rennes est aussi un pôle numérique majeur avec la French Tech Rennes-Saint-Malo, les campus de recherche de Rennes Atalante et le pôle Images & Réseaux. Le taxi privé Paris — Rennes est plébiscité par les familles bretonnes installées en Île-de-France qui rentrent au pays pour les vacances et les week-ends avec enfants, bagages et parfois le chien de la famille. Les professionnels de la tech, de l'agroalimentaire (Lactalis, Yves Rocher) et de la défense (DGA, Thales) font régulièrement cette liaison. Le service est également idéal pour rejoindre Saint-Malo, Dinard ou la côte d'Émeraude depuis Paris en un seul trajet sans rupture de charge.",
        itineraire:
          "Le départ de Paris se fait par la Porte de Saint-Cloud vers l'A13 puis l'A11 en direction du Mans. La traversée de la Beauce et du Perche offre un paysage de plaines agricoles. Au Mans (km 210), le véhicule quitte l'A11 pour l'A81 direction Laval-Rennes. Laval (km 280), préfecture de la Mayenne, est l'occasion d'apercevoir son château médiéval depuis le viaduc. Les 70 derniers kilomètres traversent le bocage breton avec ses haies et ses fermes caractéristiques. L'arrivée à Rennes se fait par la rocade est ou sud selon la destination dans l'agglomération. Le périphérique rennais est généralement fluide sauf aux heures de pointe (8h-9h et 17h30-18h30).",
        conseils:
          "Le Paris — Rennes est un trajet confortable de 3h40 qui ne nécessite qu'une seule pause, idéalement au Mans (km 210). L'A81 est une autoroute peu chargée, l'un des tronçons les plus agréables du réseau français. Évitez toutefois les départs de vendredi entre 16h et 19h en été, quand les vacanciers se dirigent vers les plages bretonnes. Si vous poursuivez vers Saint-Malo, ajoutez 1h depuis Rennes. Pour Dinard et la côte d'Émeraude, comptez 1h15 supplémentaire. En hiver, le tronçon Le Mans — Rennes peut être affecté par le verglas matinal : nos véhicules sont équipés en conséquence. La gastronomie bretonne mérite un arrêt à Rennes : les galettes de la rue Saint-Georges et les crêperies du Vieux-Rennes sont incontournables.",
        comparaisonTransport:
          "Le TGV Paris-Montparnasse → Rennes met 1h25 grâce à la LGV Bretagne-Pays de la Loire, pour 16 € (Ouigo) à 85 € (1ère). C'est l'un des TGV les plus rapides de France. Cependant, notre taxi à partir de 370 € reste pertinent pour les familles (4 billets TGV = 64-340 €, plus taxis locaux), les voyageurs avec animaux de compagnie, ceux qui poursuivent vers la côte bretonne et les professionnels qui veulent optimiser leur temps de trajet.",
        faq: [
          {
            question: "Quel est le prix d'un taxi Paris — Rennes ?",
            answer: "Le forfait est de 370 à 480 € en berline et à partir de 580 € en van. Tout compris.",
          },
          {
            question: "Combien de temps met-on en taxi de Paris à Rennes ?",
            answer: "Environ 3h40 via l'A11 et l'A81, pause incluse.",
          },
          {
            question: "Peut-on continuer vers Saint-Malo ou Dinard ?",
            answer: "Oui, supplément de 60 à 80 € pour Saint-Malo et 70 à 90 € pour Dinard.",
          },
          {
            question: "Les animaux sont-ils acceptés ?",
            answer: "Oui, les animaux de compagnie sont acceptés gratuitement. Prévoyez une couverture pour la banquette.",
          },
          {
            question: "Le service est-il disponible le week-end ?",
            answer: "Oui, nos chauffeurs sont disponibles 7j/7, 24h/24. Supplément nuit de 15 % entre 19h et 7h.",
          },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Rennes | Fixed rate from €370 | TaxiNeo",
        metaDescription:
          "Book your private taxi Paris → Rennes. 350 km, ~3h40, from €370. Direct transfer to Brittany's capital.",
        heroTitle: "Taxi Paris → Rennes",
        heroSubtitle: "Private transfer Paris → Rennes from €370 — €480. Head to Brittany in comfort.",
        description:
          "The Paris — Rennes route connects the capital to Brittany's gateway. Rennes is a dynamic university city and major tech hub.",
        routeDescription: "The route takes the A11 to Le Mans, then the A81 via Laval to Rennes.",
        introduction:
          "Rennes, Brittany's capital, has undergone a spectacular transformation. The private taxi is popular with Breton families returning home, tech professionals and travellers continuing to Saint-Malo or the Emerald Coast.",
        itineraire:
          "From Paris via Porte de Saint-Cloud onto the A11. Le Mans (km 210), then A81 through Laval (km 280) to Rennes. Arrival via the ring road.",
        conseils:
          "A comfortable 3h40 journey with one stop at Le Mans. The A81 is one of France's least congested motorways. For Saint-Malo, add 1 hour from Rennes.",
        comparaisonTransport:
          "TGV takes 1h25 for €16-85. Our taxi from €370 suits families, pet owners and those continuing to the Brittany coast.",
        faq: [
          {
            question: "What is the price of a taxi Paris — Rennes?",
            answer: "€370-480 for a sedan, from €580 for a van. All-inclusive.",
          },
          {
            question: "How long does the journey take?",
            answer: "About 3h40 via the A11 and A81 including a break.",
          },
          {
            question: "Can I continue to Saint-Malo?",
            answer: "Yes, with a supplement of €60-80 for Saint-Malo, €70-90 for Dinard.",
          },
          {
            question: "Are pets accepted?",
            answer: "Yes, pets travel free. Please bring a blanket for the seat.",
          },
          {
            question: "Is weekend service available?",
            answer: "Yes, drivers available 24/7. 15% night surcharge between 7pm-7am.",
          },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════
  // PARIS → VILLES MOYENNES & RÉGIONALES (30 trajets)
  // ═══════════════════════════════════════════════

  // 11. PARIS → ROUEN
  {
    slug: "paris-rouen",
    from: "Paris",
    to: "Rouen",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 49.4432,
    toLng: 1.0999,
    distanceKm: 135,
    durationMin: 90,
    priceEstimate: "180 — 240 €",
    category: "ville-a-ville",
    prixMin: 180,
    prixMax: 240,
    prixVan: 300,
    dureeMax: 130,
    autoroute: "A13",
    peages: "~12 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "rouen",
    liensInternes: ["paris-caen", "paris-amiens", "paris-le-mans"],
    tags: ["ville-a-ville", "business"],
    hub: "paris",
    highlights: ["A13 Autoroute de Normandie", "Boucles de la Seine", "Forêt de Bord", "Cathédrale de Rouen"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Rouen | Forfait dès 180 € | TaxiNeo",
        metaDescription:
          "Réservez votre taxi Paris → Rouen. 135 km, ~1h30, forfait dès 180 €. Transfert privé vers la capitale normande, chauffeur professionnel.",
        heroTitle: "Taxi Paris → Rouen",
        heroSubtitle:
          "Transfert privé Paris → Rouen au forfait de 180 — 240 €. Prise en charge à domicile, véhicule confortable.",
        description:
          "Le trajet Paris — Rouen est l'un des plus fréquents d'Île-de-France vers la Normandie. Rouen, capitale historique de la Normandie, séduit par sa cathédrale immortalisée par Monet et son centre médiéval à colombages. Le taxi privé est idéal pour les rendez-vous d'affaires ou les escapades culturelles.",
        routeDescription:
          "L'itinéraire emprunte l'autoroute A13, dite « Autoroute de Normandie ». Départ par la Porte d'Auteuil ou la Porte de Saint-Cloud, passage par Mantes-la-Jolie et les boucles de la Seine avant d'arriver à Rouen.",
        introduction:
          "Rouen, préfecture de la Seine-Maritime et capitale historique de la Normandie, est une ville d'art et d'histoire qui attire chaque année des centaines de milliers de visiteurs. Sa cathédrale Notre-Dame, peinte plus de trente fois par Claude Monet, son Gros-Horloge du XIVe siècle, la place du Vieux-Marché où Jeanne d'Arc fut brûlée en 1431 et ses ruelles médiévales à pans de bois en font l'une des plus belles villes du nord de la France. Rouen est également un pôle économique important avec son port maritime, le cinquième de France, ses industries pharmaceutiques et chimiques le long de la vallée de la Seine, et son centre tertiaire dynamique. Le taxi privé Paris — Rouen répond aux besoins des professionnels du port, de l'industrie et du secteur juridique qui font régulièrement la navette avec la capitale. Les familles normandes installées en Île-de-France l'utilisent aussi pour les retours de week-end, surtout quand les bagages et les enfants rendent le train inconfortable. Rouen accueille aussi de grands événements comme l'Armada, le festival de musique Beauregard à proximité, et les courses hippiques de l'hippodrome des Bruyères.",
        itineraire:
          "Votre chauffeur quitte Paris par la Porte d'Auteuil ou la Porte de Saint-Cloud et rejoint l'autoroute A13 en direction de Rouen-Caen. La traversée des Yvelines offre un paysage verdoyant avec les coteaux de la Seine à Mantes-la-Jolie (km 60). Après la barrière de péage de Buchelay, l'autoroute longe les boucles de la Seine avec des vues spectaculaires sur les falaises crayeuses et les méandres du fleuve. Le passage par la forêt de Bord-Louviers (km 100) annonce l'arrivée en agglomération rouennaise. L'entrée dans Rouen se fait par le sud via la côte de Bonsecours, offrant un panorama exceptionnel sur la ville et la Seine en contrebas, ou par l'ouest via la voie rapide sud. Le centre-ville de Rouen est compact et accessible, avec un dépôt possible directement devant la cathédrale, la gare Rouen-Rive-Droite, ou dans les quartiers d'affaires de la rive gauche. En heures de pointe (7h30-9h et 17h-18h30), le trafic sur le pont Mathilde et les quais peut ralentir l'entrée dans le centre-ville de 15 à 20 minutes.",
        conseils:
          "Le trajet Paris — Rouen est court (1h30) et ne nécessite généralement pas de pause. Cependant, l'A13 est l'une des autoroutes les plus fréquentées d'Île-de-France, surtout entre la Défense et Orgeval. Privilégiez un départ avant 7h ou entre 10h et 15h pour éviter les bouchons chroniques à Mantes-la-Jolie. Le vendredi soir en direction de la Normandie est à éviter, particulièrement en été quand les Parisiens se dirigent vers Deauville et la côte. Si vous visitez Rouen, le stationnement en centre-ville est rare et cher : le taxi vous dépose directement à destination. Pour un retour le même jour, votre chauffeur peut vous attendre sur place (supplément horaire). Rouen est aussi le point de départ idéal pour visiter Giverny (les jardins de Monet), Honfleur ou la côte d'Albâtre. En hiver, le brouillard dans la vallée de la Seine entre Mantes et Rouen est fréquent : votre chauffeur expérimenté adaptera sa conduite.",
        comparaisonTransport:
          "Le train Paris Saint-Lazare → Rouen Rive-Droite met environ 1h20 et coûte de 12 € (Nomad Train) à 28 € par personne. Pour un voyageur seul, le train est plus économique. Mais dès 3 passagers, le taxi à 180 € devient compétitif (3 billets train = 36-84 €, plus taxi local 15-20 €). Le taxi offre surtout l'avantage du porte-à-porte, de la flexibilité horaire totale et du transport de bagages volumineux. Pour les professionnels avec rendez-vous multiples dans l'agglomération rouennaise, le taxi évite les contraintes de location de voiture.",
        faq: [
          {
            question: "Quel est le prix d'un taxi Paris — Rouen ?",
            answer:
              "Le forfait est de 180 à 240 € en berline et à partir de 300 € en van. Ce tarif est tout compris : péages (~12 €), carburant et attente inclus.",
          },
          {
            question: "Combien de temps dure le trajet Paris — Rouen en taxi ?",
            answer:
              "Environ 1h30 en conditions normales via l'A13. Aux heures de pointe, comptez jusqu'à 2h10 à cause du trafic en sortie de Paris.",
          },
          {
            question: "Peut-on visiter Giverny en chemin ?",
            answer:
              "Oui, un arrêt à Giverny (jardins de Monet) est possible avec un détour de 20 minutes. Supplément de 30 à 40 € selon la durée de la visite.",
          },
          {
            question: "Le taxi dessert-il le port de Rouen ?",
            answer:
              "Oui, nous desservons le port maritime, les terminaux de croisière et toutes les zones industrielles de l'agglomération rouennaise.",
          },
          {
            question: "Peut-on réserver un aller-retour dans la journée ?",
            answer:
              "Oui, forfait aller-retour disponible avec attente sur place. Contactez-nous pour un devis personnalisé.",
          },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Rouen | Fixed rate from €180 | TaxiNeo",
        metaDescription:
          "Book your private taxi Paris → Rouen. 135 km, ~1h30, from €180. Door-to-door transfer to Normandy's historic capital.",
        heroTitle: "Taxi Paris → Rouen",
        heroSubtitle: "Private transfer Paris → Rouen from €180 — €240. Comfortable door-to-door service.",
        description:
          "The Paris — Rouen route is one of the most popular from Paris to Normandy. Rouen, with its cathedral painted by Monet and medieval half-timbered centre, is perfect for business or cultural trips.",
        routeDescription: "The route follows the A13 'Autoroute de Normandie' via Mantes-la-Jolie and the Seine loops to Rouen.",
        introduction:
          "Rouen, Normandy's historic capital, attracts hundreds of thousands of visitors annually with its cathedral, medieval streets and vibrant port economy. The private taxi serves business travellers, families and tourists heading to this artistic city.",
        itineraire:
          "From Paris via Porte d'Auteuil onto the A13. Through the Yvelines and along the Seine loops past Mantes-la-Jolie. Entry to Rouen via Bonsecours hill with panoramic views of the city.",
        conseils:
          "A short 1h30 journey, no break needed. Avoid Friday evenings and rush hours. The A13 is busy between La Défense and Orgeval. Rouen is also a great base for visiting Giverny or Honfleur.",
        comparaisonTransport:
          "Train from Paris Saint-Lazare takes 1h20 for €12-28. Our taxi from €180 suits groups of 3+ and offers door-to-door convenience with luggage.",
        faq: [
          {
            question: "What is the price of a taxi Paris — Rouen?",
            answer: "€180-240 for a sedan, from €300 for a van. All-inclusive price.",
          },
          {
            question: "How long does the journey take?",
            answer: "About 1h30 via the A13, up to 2h10 in peak traffic.",
          },
          {
            question: "Can we stop at Giverny?",
            answer: "Yes, a detour to Monet's gardens is possible for a €30-40 supplement.",
          },
          {
            question: "Does the taxi serve Rouen's port?",
            answer: "Yes, we serve the maritime port, cruise terminals and all industrial zones.",
          },
          {
            question: "Can I book a same-day return?",
            answer: "Yes, round-trip packages with waiting time are available on request.",
          },
        ],
      },
    },
  },

  // 12. PARIS → REIMS
  {
    slug: "paris-reims",
    from: "Paris",
    to: "Reims",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 49.2583,
    toLng: 4.0317,
    distanceKm: 145,
    durationMin: 95,
    priceEstimate: "190 — 250 €",
    category: "ville-a-ville",
    prixMin: 190,
    prixMax: 250,
    prixVan: 315,
    dureeMax: 130,
    autoroute: "A4",
    peages: "~10 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "reims",
    liensInternes: ["paris-metz", "paris-nancy", "paris-troyes"],
    tags: ["ville-a-ville", "tourisme", "champagne"],
    hub: "paris",
    highlights: ["A4 Autoroute de l'Est", "Vignobles de Champagne", "Cathédrale de Reims", "Montagne de Reims"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Reims | Forfait dès 190 € | TaxiNeo",
        metaDescription:
          "Réservez votre taxi Paris → Reims. 145 km, ~1h35, forfait dès 190 €. Transfert privé vers la cité des sacres et du champagne.",
        heroTitle: "Taxi Paris → Reims",
        heroSubtitle:
          "Transfert privé Paris → Reims au forfait de 190 — 250 €. Direction la capitale du champagne en tout confort.",
        description:
          "Le trajet Paris — Reims mène à la cité des sacres, ville d'art et de champagne. La cathédrale Notre-Dame de Reims, inscrite au patrimoine mondial de l'UNESCO, et les caves de champagne des grandes maisons font de cette destination un incontournable culturel et gastronomique.",
        routeDescription:
          "L'itinéraire suit l'autoroute A4, dite « Autoroute de l'Est ». Départ par la Porte de Bercy ou la Porte de Bagnolet, traversée de la Marne puis arrivée à Reims.",
        introduction:
          "Reims, cité des sacres où furent couronnés vingt-cinq rois de France à partir de Clovis en 496, est indissociable de l'histoire de la monarchie française et du champagne. La cathédrale Notre-Dame, chef-d'œuvre du gothique avec son ange au sourire, la basilique Saint-Remi et le palais du Tau forment un ensemble inscrit au patrimoine mondial de l'UNESCO depuis 1991. Mais Reims est aussi la capitale mondiale du champagne : les grandes maisons — Veuve Clicquot, Taittinger, Pommery, Ruinart, Mumm — possèdent des caves creusées dans la craie sur des kilomètres, ouvertes à la visite. Le taxi privé Paris — Reims est prisé par les amateurs d'œnotourisme qui souhaitent visiter plusieurs caves et vignobles de la Montagne de Reims sans souci de conduite. Les professionnels du secteur viticole, les avocats d'affaires et les cadres de l'industrie agroalimentaire champenoise empruntent régulièrement cette liaison. Reims est également une ville universitaire avec près de 30 000 étudiants, un campus de Sciences Po et une école de commerce reconnue (NEOMA). Les événements comme les Fêtes johanniques et les Habits de Lumière attirent des visiteurs du monde entier.",
        itineraire:
          "Le départ de Paris se fait par la Porte de Bercy ou la Porte de Bagnolet vers l'A4 en direction de Strasbourg-Metz. La traversée de la banlieue est passe par Noisy-le-Grand et Marne-la-Vallée, où l'on aperçoit au loin les structures de Disneyland Paris. Après la barrière de péage de Coutevroult, l'autoroute traverse les vastes plaines céréalières de la Brie champenoise. Le paysage change progressivement avec l'apparition des premières vignes de champagne sur les coteaux aux alentours de Dormans et Épernay. La sortie vers Reims se fait à la jonction A4/A26, avec une entrée dans la ville par le nord via la voie rapide Tinqueux-Reims ou par l'est via Cormontreuil. L'arrivée dans le centre-ville de Reims est simple, la voirie étant organisée autour de larges boulevards. Le chauffeur vous dépose devant votre hôtel, au pied de la cathédrale ou directement à la maison de champagne de votre choix.",
        conseils:
          "Le Paris — Reims est un trajet rapide d'1h35 qui ne requiert pas de pause. L'A4 est cependant très fréquentée en sortie de Paris, notamment entre la Porte de Bercy et Marne-la-Vallée : un départ avant 8h ou après 10h est recommandé. Si vous prévoyez de visiter des caves de champagne, réservez vos dégustations à l'avance car les grandes maisons (Veuve Clicquot, Taittinger) affichent complet en haute saison. Votre chauffeur peut vous accompagner pour une journée de visites dans le vignoble champenois : Épernay, Hautvillers (village de Dom Pérignon), la route des vins de la Montagne de Reims. En hiver, la plaine de la Brie peut être sujette au brouillard et au verglas : nos chauffeurs sont expérimentés sur ce tronçon. Pour les mariages et événements dans les vignobles champenois, nous proposons un service sur mesure avec attente et retour.",
        comparaisonTransport:
          "Le TGV Paris Est → Reims met 46 minutes et coûte de 15 € (Ouigo) à 50 € par personne. C'est l'un des TGV les plus rapides et moins chers de France. Cependant, la gare TGV Champagne-Ardenne est située à 10 km au sud de Reims, nécessitant un tramway ou un taxi local (15-20 €). Notre forfait taxi à partir de 190 € est pertinent dès 3 passagers et offre un avantage décisif pour les visites de caves (le chauffeur vous conduit de domaine en domaine) et le transport de bouteilles au retour, chose impossible en TGV sans surcoût bagages.",
        faq: [
          {
            question: "Quel est le prix d'un taxi Paris — Reims ?",
            answer:
              "Le forfait est de 190 à 250 € en berline, à partir de 315 € en van. Tout compris : péages, carburant, attente.",
          },
          {
            question: "Combien de temps dure le trajet ?",
            answer:
              "Environ 1h35 via l'A4. Aux heures de pointe, comptez jusqu'à 2h10 à cause du trafic en sortie de Paris.",
          },
          {
            question: "Le chauffeur peut-il nous conduire dans les caves de champagne ?",
            answer:
              "Oui, nous proposons un service à la journée pour visiter les caves et vignobles. Devis sur mesure selon l'itinéraire souhaité.",
          },
          {
            question: "Peut-on ramener des bouteilles de champagne ?",
            answer:
              "Oui, le coffre de nos véhicules peut accueillir plusieurs cartons de bouteilles. C'est un avantage clé par rapport au train.",
          },
          {
            question: "Le service est-il disponible pour les mariages ?",
            answer:
              "Oui, nous proposons des forfaits mariage avec véhicule premium, décoration et service d'attente sur mesure.",
          },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Reims | Fixed rate from €190 | TaxiNeo",
        metaDescription:
          "Book your private taxi Paris → Reims. 145 km, ~1h35, from €190. Discover the Champagne capital with door-to-door service.",
        heroTitle: "Taxi Paris → Reims",
        heroSubtitle: "Private transfer Paris → Reims from €190 — €250. Gateway to Champagne country.",
        description:
          "The Paris — Reims route leads to the coronation city, a UNESCO World Heritage site and capital of Champagne. Perfect for wine tourism and business trips.",
        routeDescription: "Via the A4 'Autoroute de l'Est' through the Brie plains to the Champagne vineyards and Reims.",
        introduction:
          "Reims, where 25 French kings were crowned, is inseparable from Champagne. The cathedral, Saint-Remi basilica and famous Champagne houses make it a must-visit. Private taxis are popular for wine touring, business trips and wedding transport.",
        itineraire:
          "From Paris via Porte de Bercy onto the A4. Through Marne-la-Vallée and the Brie plains, with Champagne vineyards appearing near Dormans. Arrival in Reims via the A4/A26 junction.",
        conseils:
          "A quick 1h35 trip, no stop needed. Avoid Paris exit traffic before 10am. For Champagne cave visits, book ahead. Your driver can serve as a wine tour chauffeur for the day.",
        comparaisonTransport:
          "TGV takes 46 minutes for €15-50, but the TGV station is 10km from Reims centre. Our taxi from €190 suits groups of 3+ and wine tourists who need cave-to-cave transport.",
        faq: [
          {
            question: "What is the price of a taxi Paris — Reims?",
            answer: "€190-250 for a sedan, from €315 for a van. All-inclusive.",
          },
          {
            question: "How long does the journey take?",
            answer: "About 1h35 via the A4, up to 2h10 in rush hour.",
          },
          {
            question: "Can the driver take us to Champagne cellars?",
            answer: "Yes, full-day wine tour service available with custom itinerary.",
          },
          {
            question: "Can we bring back Champagne bottles?",
            answer: "Yes, the boot easily accommodates several cases — a key advantage over the train.",
          },
          {
            question: "Is wedding transport available?",
            answer: "Yes, premium wedding packages with decorated vehicle and waiting service.",
          },
        ],
      },
    },
  },

  // 13. PARIS → AMIENS
  {
    slug: "paris-amiens",
    from: "Paris",
    to: "Amiens",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 49.8941,
    toLng: 2.2958,
    distanceKm: 145,
    durationMin: 100,
    priceEstimate: "190 — 250 €",
    category: "ville-a-ville",
    prixMin: 190,
    prixMax: 250,
    prixVan: 315,
    dureeMax: 140,
    autoroute: "A1",
    peages: "~11 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "amiens",
    liensInternes: ["paris-lille", "paris-rouen", "paris-calais"],
    tags: ["ville-a-ville", "tourisme", "patrimoine"],
    hub: "paris",
    highlights: ["A1 Autoroute du Nord", "Cathédrale d'Amiens", "Hortillonnages", "Quartier Saint-Leu"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Amiens | Forfait dès 190 € | TaxiNeo",
        metaDescription:
          "Réservez votre taxi Paris → Amiens. 145 km, ~1h40, forfait dès 190 €. Transfert direct vers la capitale picarde.",
        heroTitle: "Taxi Paris → Amiens",
        heroSubtitle:
          "Transfert privé Paris → Amiens au forfait de 190 — 250 €. Direction la plus grande cathédrale gothique de France.",
        description:
          "Le trajet Paris — Amiens conduit à la capitale de la Picardie, célèbre pour sa cathédrale gothique — la plus vaste de France — et ses hortillonnages, jardins flottants uniques en Europe. Amiens est aussi une ville universitaire dynamique et un pôle logistique majeur du nord de la France.",
        routeDescription:
          "L'itinéraire emprunte l'autoroute A1, dite « Autoroute du Nord ». Départ par la Porte de la Chapelle, passage par le pays de France et Senlis avant de rejoindre la sortie Amiens-Sud.",
        introduction:
          "Amiens, préfecture de la Somme, est une ville dont le patrimoine exceptionnel est souvent méconnu. Sa cathédrale Notre-Dame, plus vaste édifice gothique de France avec ses 200 000 m³ de volume intérieur, est classée au patrimoine mondial de l'UNESCO et offre un spectacle féerique lors des mises en lumière « Chroma » en été. Les hortillonnages, 300 hectares de jardins flottants sillonnés de canaux dans la Somme, constituent un écosystème unique hérité du Moyen Âge. Le quartier Saint-Leu, ancien quartier des tisserands avec ses maisons colorées sur pilotis et ses restaurants au bord de l'eau, rappelle une petite Venise du Nord. Amiens est aussi la ville natale de Jules Verne, dont la maison transformée en musée accueille des milliers de visiteurs chaque année. Économiquement, Amiens est un carrefour logistique entre Paris, Lille et Rouen, avec des plateformes de distribution majeures et un tissu industriel orienté vers l'aéronautique et le numérique. Le taxi privé Paris — Amiens sert les professionnels de la logistique, les universitaires et les touristes découvrant la Picardie.",
        itineraire:
          "Le départ de Paris s'effectue par la Porte de la Chapelle sur l'A1 en direction de Lille. L'autoroute traverse d'abord la banlieue nord dense (Saint-Denis, Roissy) avant de déboucher sur les plaines du pays de France. Après le péage de Chamant (km 50), le paysage s'ouvre sur les grandes cultures céréalières de l'Oise. On passe à proximité de Senlis, cité médiévale visible par ses flèches d'églises, et de Chantilly dont le château se devine à travers les arbres de la forêt. La sortie vers Amiens se fait à Roye (km 110) sur l'A29 ou directement par la sortie Amiens-Sud de l'A1. L'entrée dans Amiens est rapide, la rocade sud contournant la ville jusqu'au centre par le boulevard de Beauvillé. La dépose peut se faire au pied de la cathédrale, dans le quartier Saint-Leu ou à la gare d'Amiens pour une correspondance éventuelle.",
        conseils:
          "Le Paris — Amiens prend 1h40 et ne requiert pas de pause. L'A1 est l'autoroute la plus fréquentée de France, surtout entre Paris et Roissy CDG : évitez les départs entre 7h30 et 9h30 en semaine. Après Senlis, le trafic devient fluide. Si vous souhaitez visiter les hortillonnages, les barques électriques circulent d'avril à octobre et la réservation est conseillée en été. La cathédrale d'Amiens est illuminée en couleurs (Chroma) de juin à septembre, chaque soir à la tombée de la nuit — un spectacle gratuit à ne pas manquer. Pour les amateurs de Jules Verne, la maison-musée au 2 rue Charles-Dubois est ouverte du mardi au dimanche. En hiver, le brouillard dans la vallée de la Somme est fréquent le matin : prévoyez un départ en fin de matinée si possible.",
        comparaisonTransport:
          "Le train Paris Nord → Amiens met 1h10 en Intercités et coûte de 15 € à 35 € par personne. C'est une liaison cadencée et abordable. Notre taxi à partir de 190 € convient aux groupes de 3-4 passagers (3 billets train = 45-105 €), aux voyageurs avec beaucoup de bagages et aux professionnels qui enchaînent des rendez-vous dans l'agglomération amiénoise sans vouloir louer de voiture. Le taxi offre aussi la flexibilité de poursuivre vers la baie de Somme ou les sites mémoriels de la Grande Guerre.",
        faq: [
          {
            question: "Quel est le prix d'un taxi Paris — Amiens ?",
            answer:
              "Le forfait est de 190 à 250 € en berline, à partir de 315 € en van. Tarif tout compris : péages, carburant et attente inclus.",
          },
          {
            question: "Combien de temps dure le trajet ?",
            answer: "Environ 1h40 via l'A1. Aux heures de pointe, comptez jusqu'à 2h20.",
          },
          {
            question: "Peut-on visiter la baie de Somme après Amiens ?",
            answer:
              "Oui, la baie de Somme (Saint-Valery, Le Crotoy) est à 1h d'Amiens. Supplément de 80 à 100 € pour la continuation.",
          },
          {
            question: "Le taxi dessert-il les sites de mémoire 14-18 ?",
            answer:
              "Oui, nous proposons des circuits vers les mémoriaux de Thiepval, Villers-Bretonneux et le Historial de Péronne.",
          },
          {
            question: "Y a-t-il un service pour les événements à Amiens ?",
            answer:
              "Oui, service disponible pour les événements au Zénith d'Amiens, au stade de la Licorne et au Mégacité.",
          },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Amiens | Fixed rate from €190 | TaxiNeo",
        metaDescription:
          "Book your private taxi Paris → Amiens. 145 km, ~1h40, from €190. Discover France's largest Gothic cathedral.",
        heroTitle: "Taxi Paris → Amiens",
        heroSubtitle: "Private transfer Paris → Amiens from €190 — €250. Discover Picardy's hidden gem.",
        description:
          "The Paris — Amiens route leads to France's largest Gothic cathedral and the unique floating gardens (hortillonnages). A cultural gem often overlooked.",
        routeDescription: "Via the A1 'Autoroute du Nord' through the Oise plains, past Senlis and Chantilly to Amiens.",
        introduction:
          "Amiens boasts France's largest Gothic cathedral (UNESCO), unique floating gardens, and Jules Verne's birthplace. The private taxi serves logistics professionals, academics and tourists exploring Picardy and the Somme battlefields.",
        itineraire:
          "From Paris via Porte de la Chapelle onto the A1. Through the Oise plains past Senlis and Chantilly. Exit at Amiens-Sud, arriving via the southern ring road.",
        conseils:
          "A 1h40 journey, no stop needed. The A1 is France's busiest motorway — avoid 7:30-9:30am departures. Don't miss the cathedral light show (Chroma) in summer evenings.",
        comparaisonTransport:
          "Intercités train takes 1h10 for €15-35. Our taxi from €190 suits groups of 3+ and those continuing to the Somme Bay or WWI memorials.",
        faq: [
          {
            question: "What is the price of a taxi Paris — Amiens?",
            answer: "€190-250 for a sedan, from €315 for a van. All-inclusive.",
          },
          {
            question: "How long does the journey take?",
            answer: "About 1h40 via the A1, up to 2h20 in rush hour.",
          },
          {
            question: "Can we continue to the Somme Bay?",
            answer: "Yes, the Somme Bay is 1 hour from Amiens. Supplement of €80-100.",
          },
          {
            question: "Does the service cover WWI memorial sites?",
            answer: "Yes, we offer tours to Thiepval, Villers-Bretonneux and the Historial de Péronne.",
          },
          {
            question: "Is the service available for events?",
            answer: "Yes, transfers to Zénith d'Amiens, La Licorne stadium and Mégacité conference centre.",
          },
        ],
      },
    },
  },

  // 14. PARIS → TOURS
  {
    slug: "paris-tours",
    from: "Paris",
    to: "Tours",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 47.3941,
    toLng: 0.6848,
    distanceKm: 235,
    durationMin: 150,
    priceEstimate: "300 — 380 €",
    category: "ville-a-ville",
    prixMin: 300,
    prixMax: 380,
    prixVan: 475,
    dureeMax: 190,
    autoroute: "A10",
    peages: "~20 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "tours",
    liensInternes: ["paris-orleans", "paris-poitiers", "paris-bordeaux"],
    tags: ["ville-a-ville", "tourisme", "chateaux"],
    hub: "paris",
    highlights: ["A10 L'Aquitaine", "Châteaux de la Loire", "Amboise", "Chenonceau", "Vieux Tours"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Tours | Forfait dès 300 € | TaxiNeo",
        metaDescription:
          "Réservez votre taxi Paris → Tours. 235 km, ~2h30, forfait dès 300 €. Porte d'entrée des châteaux de la Loire.",
        heroTitle: "Taxi Paris → Tours",
        heroSubtitle:
          "Transfert privé Paris → Tours au forfait de 300 — 380 €. Cap sur les châteaux de la Loire.",
        description:
          "Le trajet Paris — Tours ouvre les portes du Val de Loire, inscrit au patrimoine mondial de l'UNESCO. Tours, « le jardin de la France », est le point de départ idéal pour visiter les châteaux de Chambord, Chenonceau, Amboise et Villandry. Ville universitaire vivante, Tours séduit aussi par sa gastronomie et son art de vivre.",
        routeDescription:
          "L'itinéraire suit l'autoroute A10, dite « L'Aquitaine ». Départ par la Porte d'Orléans, passage par Orléans puis la Beauce avant de rejoindre Tours.",
        introduction:
          "Tours, au cœur du Val de Loire classé au patrimoine mondial de l'UNESCO, est la porte d'entrée d'un des plus beaux ensembles de châteaux au monde. Chenonceau enjambant le Cher, Amboise surplombant la Loire, Villandry et ses jardins remarquables, Azay-le-Rideau reflété dans l'Indre — tous se trouvent à moins de 40 minutes de Tours. La ville elle-même possède un charme considérable avec sa vieille ville autour de la place Plumereau, ses maisons à pans de bois du XVe siècle, sa cathédrale Saint-Gatien et le musée des Beaux-Arts dans l'ancien palais des archevêques. Tours est aussi la capitale de la Touraine, réputée pour ses vins (Vouvray, Chinon, Bourgueil), ses rillettes, son fromage de chèvre Sainte-Maure et sa gastronomie raffinée. Le taxi privé Paris — Tours est plébiscité par les touristes internationaux qui souhaitent explorer les châteaux à leur rythme, les familles en week-end prolongé et les professionnels de la pharmacie et de l'électronique, industries bien implantées dans l'agglomération tourangelle. Le confort d'un transfert porte-à-porte, avec la possibilité de s'arrêter visiter un château en chemin, est un avantage unique du taxi.",
        itineraire:
          "Votre chauffeur quitte Paris par la Porte d'Orléans et emprunte l'A10 en direction de Bordeaux. Après la traversée de la Beauce et ses immenses champs de blé, on atteint Orléans (km 130) où le contournement par l'A71 puis retour A10 évite le centre-ville. Le paysage change après Orléans avec l'apparition de la Loire et des premières forêts de Sologne. À Amboise (km 210), il est possible de faire un arrêt pour admirer le château royal et le Clos Lucé, dernière demeure de Léonard de Vinci. Les 25 derniers kilomètres longent la Loire avec des vues magnifiques sur le fleuve. L'arrivée à Tours se fait par l'est via la voie rapide de Tours-Nord ou par le sud via Montlouis-sur-Loire. La dépose est possible au centre-ville (place Jean-Jaurès, gare de Tours), au château, ou directement dans un domaine viticole si vous poursuivez la visite.",
        conseils:
          "Le trajet Paris — Tours dure 2h30 et une pause à Orléans ou à l'aire d'Amboise est conseillée. Si vous prévoyez de visiter des châteaux, planifiez votre itinéraire à l'avance : Chambord et Chenonceau sont les plus fréquentés et les files d'attente peuvent être longues en été. Votre chauffeur peut vous proposer un circuit optimisé sur une demi-journée ou une journée complète : Amboise + Chenonceau le matin, Villandry + Azay-le-Rideau l'après-midi par exemple. La meilleure période pour visiter est mai-juin, quand les jardins sont en fleurs et les foules moindres. En été, les châteaux proposent des spectacles nocturnes (son et lumière à Chambord, nuits enchantées à Chenonceau) : un départ de Paris en milieu d'après-midi permet d'en profiter. Les amateurs de vin apprécieront un détour par les caves de Vouvray, creusées dans le tuffeau, à 10 minutes de Tours.",
        comparaisonTransport:
          "Le TGV Paris Montparnasse → Tours met 1h15 et coûte de 19 € (Ouigo) à 65 € par personne. Pour un couple, le TGV reste compétitif (38-130 € vs 300 € en taxi). Mais dès 3-4 passagers et surtout pour ceux qui souhaitent visiter les châteaux sans louer de voiture, le taxi à partir de 300 € est un excellent choix. Le chauffeur vous conduit de château en château et vous évite le stress de la conduite dans les petites routes de campagne. Pour un week-end complet, la formule taxi + nuit en Loire est souvent plus pratique et pas beaucoup plus chère que TGV + location.",
        faq: [
          {
            question: "Quel est le prix d'un taxi Paris — Tours ?",
            answer:
              "Le forfait est de 300 à 380 € en berline, à partir de 475 € en van. Tout compris : péages (~20 €), carburant et arrêts inclus.",
          },
          {
            question: "Peut-on s'arrêter visiter un château en chemin ?",
            answer:
              "Oui, un arrêt à Amboise ou Chambord est possible sans surcoût majeur. Pour une visite prolongée, un supplément d'attente horaire s'applique.",
          },
          {
            question: "Le chauffeur peut-il servir de guide pour les châteaux ?",
            answer:
              "Le chauffeur connaît bien la région et peut vous conseiller, mais nous proposons aussi des guides professionnels agréés sur demande.",
          },
          {
            question: "Peut-on réserver un circuit châteaux de la Loire ?",
            answer:
              "Oui, circuits demi-journée et journée complète disponibles. Devis sur mesure selon les châteaux souhaités.",
          },
          {
            question: "Le service est-il adapté aux touristes étrangers ?",
            answer:
              "Oui, plusieurs de nos chauffeurs parlent anglais. Service bilingue garanti sur demande.",
          },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Tours | Fixed rate from €300 | TaxiNeo",
        metaDescription:
          "Book your private taxi Paris → Tours. 235 km, ~2h30, from €300. Gateway to the Loire Valley châteaux.",
        heroTitle: "Taxi Paris → Tours",
        heroSubtitle: "Private transfer Paris → Tours from €300 — €380. Discover the Loire Valley.",
        description:
          "The Paris — Tours route opens the door to the UNESCO-listed Loire Valley. Tours is the ideal base for visiting Chambord, Chenonceau, Amboise and Villandry castles.",
        routeDescription: "Via the A10 motorway through Orléans and the Loire Valley to Tours.",
        introduction:
          "Tours, at the heart of the UNESCO Loire Valley, is the gateway to France's most famous castles. The city itself charms with medieval streets, Saint-Gatien cathedral and Touraine wines. Private taxis are ideal for château-hopping without a rental car.",
        itineraire:
          "From Paris via Porte d'Orléans onto the A10. Through the Beauce plains, past Orléans, then along the Loire to Amboise and Tours.",
        conseils:
          "A 2h30 journey with an optional stop at Amboise. Plan château visits ahead in summer. Your driver can create a custom castle circuit for a full day.",
        comparaisonTransport:
          "TGV takes 1h15 for €19-65. Our taxi from €300 is ideal for 3-4 passengers wanting door-to-château service without a rental car.",
        faq: [
          {
            question: "What is the price of a taxi Paris — Tours?",
            answer: "€300-380 for a sedan, from €475 for a van. All-inclusive.",
          },
          {
            question: "Can we stop at a château on the way?",
            answer: "Yes, a stop at Amboise is possible. Extended visits have a waiting supplement.",
          },
          {
            question: "Can the driver do a Loire Valley château tour?",
            answer: "Yes, half-day and full-day château circuits available with custom itinerary.",
          },
          {
            question: "Is the service suitable for international tourists?",
            answer: "Yes, English-speaking drivers available on request.",
          },
          {
            question: "Can we bring luggage for a weekend stay?",
            answer: "Yes, unlimited luggage — suitcases, golf bags, etc. — at no extra charge.",
          },
        ],
      },
    },
  },

  // 15. PARIS → ORLÉANS
  {
    slug: "paris-orleans",
    from: "Paris",
    to: "Orléans",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 47.9029,
    toLng: 1.9093,
    distanceKm: 130,
    durationMin: 90,
    priceEstimate: "170 — 220 €",
    category: "ville-a-ville",
    prixMin: 170,
    prixMax: 220,
    prixVan: 275,
    dureeMax: 125,
    autoroute: "A10",
    peages: "~10 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "orleans",
    liensInternes: ["paris-tours", "paris-bourges", "paris-auxerre"],
    tags: ["ville-a-ville", "business", "patrimoine"],
    hub: "paris",
    highlights: ["A10 L'Aquitaine", "Beauce", "Cathédrale Sainte-Croix", "Loire à Orléans", "Maison Jeanne d'Arc"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Orléans | Forfait dès 170 € | TaxiNeo",
        metaDescription:
          "Réservez votre taxi Paris → Orléans. 130 km, ~1h30, forfait dès 170 €. Transfert rapide vers la cité johannique.",
        heroTitle: "Taxi Paris → Orléans",
        heroSubtitle:
          "Transfert privé Paris → Orléans au forfait de 170 — 220 €. La cité de Jeanne d'Arc à portée de main.",
        description:
          "Le trajet Paris — Orléans est l'un des plus courts vers une grande ville de province. Orléans, cité johannique sur les bords de la Loire, est aussi un pôle logistique, cosmétique et pharmaceutique majeur. Le taxi privé est parfait pour les professionnels en rendez-vous ou les visiteurs du Val de Loire.",
        routeDescription:
          "L'itinéraire suit l'A10 en direction de Bordeaux. Sortie à Orléans-Nord ou Orléans-Centre après la traversée de la Beauce.",
        introduction:
          "Orléans, préfecture du Loiret et métropole de 290 000 habitants, est une ville en pleine renaissance. Indissociable de Jeanne d'Arc qui libéra la ville du siège anglais en 1429, Orléans célèbre chaque année en mai les Fêtes johanniques, un événement historique et festif majeur. La cathédrale Sainte-Croix, reconstruite après les guerres de Religion dans un style gothique flamboyant, domine le centre-ville. Les bords de Loire, réaménagés ces dernières années, offrent des promenades agréables et des guinguettes estivales. Économiquement, Orléans est un carrefour entre Paris et le sud-ouest, avec une Cosmetic Valley mondialement reconnue (premier pôle mondial de la parfumerie-cosmétique), des centres de recherche du BRGM et du CNRS, et un tissu logistique important grâce à sa position sur l'axe Paris-Bordeaux. Le taxi privé Paris — Orléans est utilisé par les cadres de la cosmétique, les chercheurs, les avocats du barreau d'Orléans et les familles en route vers les châteaux de la Loire ou la Sologne. La proximité de Paris (1h30) en fait un trajet quotidien pour beaucoup de professionnels.",
        itineraire:
          "Le départ de Paris se fait par la Porte d'Orléans (qui tire son nom de cette direction historique) sur l'A6b puis l'A10. La traversée de l'Essonne passe par Arpajon et Étampes, villes de la grande banlieue parisienne. Après la barrière de péage d'Allainville (km 60), l'autoroute traverse la Beauce, la plus grande plaine céréalière de France avec ses champs de blé et de colza à perte de vue. L'approche d'Orléans se signale par l'apparition de la forêt d'Orléans, la plus grande forêt domaniale de France métropolitaine. L'entrée dans Orléans se fait par le nord via la tangentielle ou directement par la sortie Orléans-Centre. Le pont Georges V, avec sa vue sur la Loire et la cathédrale, offre une arrivée spectaculaire en centre-ville.",
        conseils:
          "Le Paris — Orléans est un trajet rapide d'1h30 sans besoin de pause. L'A10 est fluide après Arpajon, sauf aux heures de pointe en sortie de Paris. Pour les Fêtes johanniques (début mai), réservez tôt car les hôtels et taxis sont pris d'assaut. Si vous continuez vers les châteaux, Chambord est à 45 minutes d'Orléans et Chenonceau à 1h15. La Sologne, terre de chasse et d'étangs au sud d'Orléans, est accessible en 30 minutes. En automne, la forêt d'Orléans offre de magnifiques couleurs. Le marché couvert des Halles Châtelet est ouvert le samedi matin et propose les meilleurs produits du terroir ligérien.",
        comparaisonTransport:
          "Le train Paris Austerlitz → Orléans met 1h10 en Intercités pour 12 à 30 € par personne. Le TER est cadencé mais les horaires sont contraignants. Notre taxi à partir de 170 € est compétitif pour 3-4 passagers et offre la flexibilité du porte-à-porte, essentielle pour les rendez-vous professionnels dispersés dans l'agglomération (zones industrielles, Cosmetic Valley à Chartres). Le taxi permet aussi de combiner Orléans et Chambord en une seule journée.",
        faq: [
          {
            question: "Quel est le prix d'un taxi Paris — Orléans ?",
            answer: "Le forfait est de 170 à 220 € en berline, à partir de 275 € en van. Tout compris.",
          },
          {
            question: "Combien de temps dure le trajet ?",
            answer: "Environ 1h30 via l'A10, jusqu'à 2h aux heures de pointe.",
          },
          {
            question: "Peut-on continuer vers Chambord ?",
            answer: "Oui, Chambord est à 45 minutes d'Orléans. Supplément de 50 à 70 € selon la durée de visite.",
          },
          {
            question: "Le taxi dessert-il la Cosmetic Valley ?",
            answer: "Oui, nous desservons toutes les entreprises de la Cosmetic Valley entre Chartres et Orléans.",
          },
          {
            question: "Service disponible pour les Fêtes johanniques ?",
            answer: "Oui, réservez à l'avance pour cette période très demandée début mai.",
          },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Orléans | Fixed rate from €170 | TaxiNeo",
        metaDescription:
          "Book your private taxi Paris → Orléans. 130 km, ~1h30, from €170. Quick transfer to Joan of Arc's city on the Loire.",
        heroTitle: "Taxi Paris → Orléans",
        heroSubtitle: "Private transfer Paris → Orléans from €170 — €220. Joan of Arc's city awaits.",
        description:
          "One of the shortest routes to a major French city. Orléans is a cosmetics and logistics hub, and the gateway to the Loire châteaux and Sologne.",
        routeDescription: "Via the A10 through the Beauce plains to Orléans on the Loire.",
        introduction:
          "Orléans, inseparable from Joan of Arc, is a thriving city with the world-renowned Cosmetic Valley, CNRS research and Loire Valley access. Private taxis serve professionals and tourists alike.",
        itineraire:
          "From Paris via Porte d'Orléans onto the A10. Through the Beauce plains and past the Orléans forest. Arrival via Georges V bridge with cathedral views.",
        conseils:
          "Quick 1h30 trip, no stop needed. Chambord is 45 minutes from Orléans. Book early for the Joan of Arc festival in May.",
        comparaisonTransport:
          "Train takes 1h10 for €12-30. Our taxi from €170 suits groups and those combining Orléans with Chambord or Loire Valley tours.",
        faq: [
          {
            question: "What is the price of a taxi Paris — Orléans?",
            answer: "€170-220 for a sedan, from €275 for a van. All-inclusive.",
          },
          {
            question: "How long does the journey take?",
            answer: "About 1h30 via the A10, up to 2h in rush hour.",
          },
          {
            question: "Can we continue to Chambord?",
            answer: "Yes, Chambord is 45 minutes away. Supplement of €50-70.",
          },
          {
            question: "Does the service cover Cosmetic Valley?",
            answer: "Yes, we serve all Cosmetic Valley businesses between Chartres and Orléans.",
          },
          {
            question: "Is the service available for the Joan of Arc festival?",
            answer: "Yes, book early for this busy period in early May.",
          },
        ],
      },
    },
  },

  // 16. PARIS → CLERMONT-FERRAND
  {
    slug: "paris-clermont-ferrand",
    from: "Paris",
    to: "Clermont-Ferrand",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 45.7772,
    toLng: 3.087,
    distanceKm: 420,
    durationMin: 240,
    priceEstimate: "430 — 560 €",
    category: "longue-distance",
    prixMin: 430,
    prixMax: 560,
    prixVan: 660,
    dureeMax: 300,
    autoroute: "A71",
    peages: "~30 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "clermont-ferrand",
    liensInternes: ["paris-lyon", "paris-tours", "paris-dijon"],
    tags: ["longue-distance", "business"],
    hub: "paris",
    highlights: ["A71 Autoroute d'Auvergne", "Viaduc de Veauce", "Volcans d'Auvergne", "Chaîne des Puys"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Clermont-Ferrand | Forfait dès 430 € | TaxiNeo",
        metaDescription:
          "Réservez votre taxi Paris → Clermont-Ferrand. 420 km, ~4h, forfait dès 430 €. Chauffeur privé, véhicule confortable, Wi-Fi à bord. Alternative au train Intercités.",
        heroTitle: "Taxi Paris → Clermont-Ferrand",
        heroSubtitle:
          "Transfert privé Paris → Clermont-Ferrand au forfait de 430 — 560 €. Prise en charge à domicile, véhicule haut de gamme, chauffeur professionnel.",
        description:
          "Le trajet Paris — Clermont-Ferrand relie la capitale à la métropole auvergnate, capitale européenne du volcanisme et siège mondial de Michelin. Notre service de taxi longue distance vous offre un transfert porte-à-porte confortable en environ 4 heures, sans les contraintes du train Intercités qui ne dessert Clermont qu'en 3h30 depuis Bercy avec des horaires limités.",
        routeDescription:
          "L'itinéraire emprunte l'autoroute A71, dite « Autoroute d'Auvergne ». Départ par la Porte d'Orléans, passage par Orléans, Bourges et Montluçon avant d'atteindre Clermont-Ferrand par le nord.",
        introduction:
          "Le trajet Paris — Clermont-Ferrand en taxi privé s'adresse aux cadres et ingénieurs du groupe Michelin effectuant des allers-retours réguliers entre le siège mondial de Clermont et les bureaux parisiens, aux familles souhaitant découvrir le parc naturel régional des Volcans d'Auvergne avec tout leur équipement de randonnée, et aux visiteurs du festival international du court-métrage qui se tient chaque année début février. Clermont-Ferrand, préfecture du Puy-de-Dôme, est une ville de 145 000 habitants nichée au pied de la Chaîne des Puys, inscrite au patrimoine mondial de l'UNESCO depuis 2018. La ville se distingue par son architecture en pierre de Volvic, sa cathédrale noire unique en Europe, et un tissu industriel dynamique autour du caoutchouc, de la pharmacie et des technologies de l'information avec le pôle de compétitivité Céréales Vallée et le cluster Innov'Alliance. Un taxi privé permet d'emporter skis ou vélos sans surcoût, de choisir un départ très matinal pour les réunions de 9h au siège Michelin sur la place des Carmes-Déchaux, et de profiter d'un confort optimal sur l'A71, autoroute rectiligne mais monotone où la fatigue de la conduite guette le voyageur solo.",
        itineraire:
          "Au départ de Paris, votre chauffeur emprunte le périphérique sud jusqu'à la Porte d'Orléans, puis s'engage sur l'A6 brièvement avant de bifurquer sur l'A10 en direction d'Orléans. À la hauteur d'Orléans, il rejoint l'A71, l'autoroute d'Auvergne, qui file plein sud à travers la Sologne et ses vastes forêts de pins. Le paysage change progressivement après Vierzon, où la route traverse les plaines céréalières du Berry, puis longe la ville de Bourges — dont la cathédrale gothique Saint-Étienne est visible depuis l'autoroute par temps clair. Après Bourges, l'A71 continue par Saint-Amand-Montrond et Montluçon. L'aire de repos de Montmarault, située à environ 340 km de Paris, constitue le point de pause idéal avec ses espaces verts et sa boutique de produits auvergnats. La descente vers Clermont-Ferrand se fait par Gannat et Riom, où les premiers volcans de la Chaîne des Puys apparaissent à l'horizon. L'entrée dans Clermont s'effectue par le nord via l'échangeur de la Pardieu ou par le centre en empruntant l'avenue de la République. En cas de trafic sur le boulevard périphérique clermontois aux heures de pointe (8h-9h et 17h-18h30), le chauffeur privilégie les itinéraires secondaires par Chamalières ou Beaumont.",
        conseils:
          "Pour un trajet Paris — Clermont-Ferrand optimal, privilégiez un départ entre 8h et 10h ou après 14h afin d'éviter les bouchons de sortie de Paris. Le vendredi après-midi est à éviter en raison des départs en week-end vers l'Auvergne, surtout pendant la saison de ski (décembre à mars) quand les vacanciers affluent vers Super-Besse et Le Mont-Dore. En hiver, le tronçon Montluçon — Clermont-Ferrand peut être touché par des chutes de neige et du verglas, notamment sur le plateau de Combrailles : votre chauffeur est équipé de pneus hiver et adapte sa conduite. La pause recommandée se situe à l'aire de Montmarault (km 340), qui dispose de sanitaires propres et d'un restaurant. Si vous voyagez avec des enfants, Vulcania — le parc européen du volcanisme situé à Saint-Ours-les-Roches, à 20 minutes de Clermont — peut constituer une extension intéressante à votre trajet (supplément de 30-40 €). En été, les festivals de musique de La Bourboule et du Mont-Dore génèrent un trafic accru le week-end : réservez votre taxi au moins 48h à l'avance pour garantir la disponibilité.",
        comparaisonTransport:
          "Le train Intercités Paris-Bercy → Clermont-Ferrand met environ 3h30 et coûte entre 25 € (tarif Prem's réservé tôt) et 75 € (tarif flexible) par personne. Pour une famille de quatre, le train revient entre 100 € et 300 €, auxquels il faut ajouter le taxi local à l'arrivée (12-18 €) et le trajet jusqu'à la gare de Bercy au départ. En voiture individuelle, comptez 30 € de péages A71 et environ 45 € d'essence, soit 75 € mais avec 4h de conduite fatigante sur une autoroute très rectiligne. Notre taxi forfaitaire à partir de 430 € devient compétitif dès deux passagers avec bagages volumineux : le confort porte-à-porte, le Wi-Fi à bord et la possibilité de travailler pendant le trajet font la différence. Notez que la ligne Paris — Clermont n'est pas desservie par le TGV, ce qui réduit l'avantage vitesse du train.",
        faq: [
          {
            question: "Quel est le prix d'un taxi Paris — Clermont-Ferrand ?",
            answer:
              "Le forfait taxi Paris — Clermont-Ferrand est de 430 à 560 € selon le type de véhicule (berline ou van) et les adresses exactes de prise en charge et de dépose. Ce prix est tout compris : péages A71, carburant et attente inclus.",
          },
          {
            question: "Combien de temps dure le trajet Paris — Clermont-Ferrand en taxi ?",
            answer:
              "Comptez environ 4h en conditions normales via l'A71. Aux heures de pointe ou par mauvais temps hivernal, le trajet peut atteindre 5h. Votre chauffeur adapte l'itinéraire en temps réel selon les conditions de circulation.",
          },
          {
            question: "Le taxi est-il plus avantageux que le train Intercités pour Clermont-Ferrand ?",
            answer:
              "Pour un voyageur seul, l'Intercités reste moins cher (25-75 €). Mais dès 2-3 passagers ou avec des bagages volumineux (vélos, skis), le taxi devient très compétitif tout en offrant le porte-à-porte et la flexibilité horaire. La ligne n'ayant pas de TGV, l'écart de temps est faible.",
          },
          {
            question: "Peut-on faire un détour par Vulcania ou la Chaîne des Puys ?",
            answer:
              "Oui, Vulcania est situé à Saint-Ours-les-Roches, à 20 minutes de Clermont. Un détour est possible pour un supplément de 30-40 €. De même, un arrêt photo au sommet du Puy de Dôme (accessible par le Panoramique des Dômes) peut être organisé.",
          },
          {
            question: "Le service est-il disponible pour les salariés Michelin en déplacement ?",
            answer:
              "Oui, nous assurons régulièrement des transferts pour les collaborateurs Michelin entre Paris et le siège mondial de Clermont-Ferrand. Facturation entreprise possible avec convention de transport.",
          },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Clermont-Ferrand | Fixed rate from €430 | TaxiNeo",
        metaDescription:
          "Book your private taxi Paris → Clermont-Ferrand. 420 km, ~4h, fixed rate from €430. Door-to-door service, professional driver, Wi-Fi on board.",
        heroTitle: "Taxi Paris → Clermont-Ferrand",
        heroSubtitle:
          "Private transfer Paris → Clermont-Ferrand from €430 — €560. Home pick-up, premium vehicle, professional driver 24/7.",
        description:
          "The Paris — Clermont-Ferrand route connects the capital to the Auvergne metropolis, European capital of volcanism and Michelin's global headquarters. Our long-distance taxi offers a comfortable door-to-door transfer in about 4 hours, without the constraints of the Intercités train.",
        routeDescription:
          "The route follows the A71 motorway, the 'Autoroute d'Auvergne'. Departure via Porte d'Orléans, passing through Orléans, Bourges and Montluçon before reaching Clermont-Ferrand from the north.",
        introduction:
          "The Paris — Clermont-Ferrand private taxi caters to Michelin executives commuting between the global headquarters in Clermont and Paris offices, families heading to the Auvergne Volcanoes Natural Park with hiking gear, and visitors to the International Short Film Festival each February. Clermont-Ferrand, with its unique black cathedral built from Volvic stone and the UNESCO-listed Chaîne des Puys, offers a dynamic mix of industry and nature. A private taxi lets you bring ski or cycling equipment at no extra cost and depart early enough for 9am meetings at Michelin headquarters.",
        itineraire:
          "From Paris, your driver takes the southern ring road to Porte d'Orléans, joins the A6 briefly then the A10 towards Orléans, before merging onto the A71 southbound. The road crosses the Sologne forests and Berry plains, passing Bourges with its Gothic cathedral visible from the motorway. After Montluçon, the Montmarault rest area at km 340 makes an ideal break. The final stretch descends through Gannat and Riom with the Chaîne des Puys volcanoes appearing on the horizon before entering Clermont-Ferrand.",
        conseils:
          "Depart between 8am-10am or after 2pm to avoid Paris traffic. Avoid Friday afternoons during ski season (December-March) when traffic to Super-Besse and Le Mont-Dore is heavy. In winter, the Montluçon — Clermont section may see snow and ice. The recommended stop is Montmarault rest area (km 340). Vulcania theme park near Clermont makes a great family extension for €30-40 extra.",
        comparaisonTransport:
          "The Intercités train from Paris-Bercy to Clermont-Ferrand takes about 3h30 and costs €25-75 per person. For a family of four, that's €100-300 plus local taxis. Our fixed-rate taxi from €430 is competitive from 2 passengers, especially with bulky luggage. Note there is no TGV service to Clermont, narrowing the speed advantage of rail.",
        faq: [
          {
            question: "What is the price of a taxi from Paris to Clermont-Ferrand?",
            answer: "€430-560 for a sedan, from €660 for a van. All-inclusive: tolls, fuel and waiting time included.",
          },
          {
            question: "How long does the Paris to Clermont-Ferrand taxi journey take?",
            answer: "About 4 hours via the A71 in normal conditions, up to 5 hours in heavy traffic or winter weather.",
          },
          {
            question: "Is a taxi better than the Intercités train to Clermont-Ferrand?",
            answer: "For solo travellers the train is cheaper (€25-75). From 2 passengers or with bulky luggage, the taxi is competitive with door-to-door convenience. There is no TGV to Clermont.",
          },
          {
            question: "Can we visit Vulcania or the Chaîne des Puys on the way?",
            answer: "Yes, Vulcania is 20 minutes from Clermont. A detour costs €30-40 extra. A photo stop at Puy de Dôme can also be arranged.",
          },
          {
            question: "Is the service available for Michelin business travellers?",
            answer: "Yes, we regularly transfer Michelin staff between Paris and Clermont HQ. Corporate billing available.",
          },
        ],
      },
    },
  },

  // 17. PARIS → DIJON
  {
    slug: "paris-dijon",
    from: "Paris",
    to: "Dijon",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 47.322,
    toLng: 5.0415,
    distanceKm: 315,
    durationMin: 180,
    priceEstimate: "320 — 420 €",
    category: "longue-distance",
    prixMin: 320,
    prixMax: 420,
    prixVan: 520,
    dureeMax: 240,
    autoroute: "A6",
    peages: "~22 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "dijon",
    liensInternes: ["paris-lyon", "paris-reims", "paris-strasbourg"],
    tags: ["longue-distance", "business", "gastronomie"],
    hub: "paris",
    highlights: ["A6 Autoroute du Soleil", "Vignobles de Bourgogne", "Hospices de Beaune", "Cité de la Gastronomie"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Dijon | Forfait dès 320 € | TaxiNeo",
        metaDescription:
          "Réservez votre taxi Paris → Dijon. 315 km, ~3h, forfait dès 320 €. Chauffeur privé, véhicule confortable, Wi-Fi à bord. Alternative pratique au TGV.",
        heroTitle: "Taxi Paris → Dijon",
        heroSubtitle:
          "Transfert privé Paris → Dijon au forfait de 320 — 420 €. Prise en charge à domicile, véhicule haut de gamme, chauffeur professionnel.",
        description:
          "Le trajet Paris — Dijon relie la capitale à la capitale des Ducs de Bourgogne, ville d'art et de gastronomie mondialement réputée. Notre service de taxi longue distance vous offre un transfert porte-à-porte en environ 3 heures via l'autoroute A6, avec la possibilité de faire un arrêt aux Hospices de Beaune en chemin.",
        routeDescription:
          "L'itinéraire emprunte l'autoroute A6 en direction de Lyon, puis bifurque sur l'A38 à la hauteur de Pouilly-en-Auxois pour rejoindre Dijon. Passage par Auxerre, Avallon et la côte viticole bourguignonne.",
        introduction:
          "Le trajet Paris — Dijon en taxi privé s'adresse aux amateurs de gastronomie et de vin souhaitant visiter les prestigieux vignobles de la Côte de Nuits et de la Côte de Beaune classés au patrimoine mondial de l'UNESCO, aux cadres en déplacement professionnel vers les sièges sociaux de grandes entreprises dijonnaises comme Urgo, Seb ou le pôle agroalimentaire Vitagora, et aux familles se rendant dans la région pour les vacances scolaires. Dijon, préfecture de la Côte-d'Or et métropole de 260 000 habitants, est célèbre pour sa moutarde, ses pains d'épices, son cassis et sa Cité internationale de la Gastronomie et du Vin inaugurée en 2022 dans l'ancien hôpital général. Le centre-ville historique, avec le Palais des Ducs, l'église Notre-Dame et ses ruelles médiévales bordées d'hôtels particuliers à toitures en tuiles vernissées polychromes, attire des millions de visiteurs chaque année. Un taxi privé permet de transporter caisses de vin achetées dans les domaines de la Route des Grands Crus, de choisir un horaire flexible adapté aux dégustations, et d'arriver directement à l'adresse souhaitée sans naviguer dans les rues piétonnes du centre historique.",
        itineraire:
          "Au départ de Paris, votre chauffeur emprunte le périphérique sud jusqu'à la Porte d'Orléans ou la Porte d'Italie, puis s'engage sur l'autoroute A6 en direction de Lyon. La première section traverse la banlieue sud par Évry, puis la forêt de Fontainebleau offre un premier cadre verdoyant. L'autoroute longe ensuite le Morvan par Auxerre et Avallon, deux villes médiévales visibles depuis la route. Après le péage de Fleury-en-Bière, le paysage s'ouvre progressivement sur les collines bourguignonnes. À la hauteur de Pouilly-en-Auxois (km 260), le chauffeur quitte l'A6 pour emprunter l'A38 en direction de Dijon. Cette portion de 30 km descend vers la plaine de la Saône à travers un paysage vallonné, avec le canal de Bourgogne en contrebas. L'entrée dans Dijon s'effectue par l'échangeur nord, le long du lac Kir — plan d'eau artificiel créé par le célèbre chanoine — puis par le boulevard périphérique qui contourne le centre historique. Pour les adresses en centre-ville, votre chauffeur emprunte l'avenue du Drapeau ou le cours du Général-de-Gaulle pour vous déposer au plus près de votre destination. L'aire de Venoy-Soleil Levant (km 170) constitue un arrêt idéal à mi-parcours, avec vue sur la vallée de l'Yonne et boutique de produits régionaux.",
        conseils:
          "Pour un trajet Paris — Dijon optimal, privilégiez un départ entre 9h et 11h afin d'éviter le trafic matinal sur le périphérique parisien et l'A6. Évitez le vendredi soir et le dimanche soir, surtout pendant les périodes de vendanges (septembre-octobre) où le trafic vers la Bourgogne augmente sensiblement. Si vous souhaitez visiter les Hospices de Beaune en chemin, prévoyez un supplément de temps de 45 minutes à 1h — le chauffeur quitte brièvement l'A6 à Beaune pour un détour de 10 km. En hiver, le tronçon Avallon — Pouilly-en-Auxois peut être sujet au verglas et au brouillard, notamment dans le Morvan entre novembre et février. L'aire de Venoy-Soleil Levant (km 170) est recommandée pour une pause café avec ses installations modernes. Si vous voyagez pour acheter du vin dans les domaines de Gevrey-Chambertin, Nuits-Saint-Georges ou Meursault, notre van dispose d'un espace de coffre suffisant pour transporter 6 à 12 cartons en toute sécurité. Enfin, le stationnement en centre-ville de Dijon est très réglementé : l'avantage du taxi est de vous déposer directement devant votre hôtel ou restaurant.",
        comparaisonTransport:
          "Le TGV Paris Gare de Lyon → Dijon Ville met environ 1h40 et coûte entre 25 € (Ouigo, réservé tôt) et 95 € (tarif flexible) par personne. Pour une famille de quatre, le train revient entre 100 € et 380 €, auxquels il faut ajouter un taxi local à l'arrivée (10-15 €). En voiture individuelle, comptez 22 € de péages et environ 35 € d'essence, soit 57 € mais avec 3h de conduite. Notre taxi forfaitaire à partir de 320 € devient compétitif dès deux passagers, surtout si vous souhaitez faire un arrêt en route (Hospices de Beaune, domaine viticole). Le confort porte-à-porte et la possibilité de ramener des cartons de vin sans les porter dans le TGV sont des avantages décisifs pour les amateurs d'oenotourisme.",
        faq: [
          {
            question: "Quel est le prix d'un taxi Paris — Dijon ?",
            answer:
              "Le forfait taxi Paris — Dijon est de 320 à 420 € selon le type de véhicule (berline ou van) et les adresses exactes. Ce prix est tout compris : péages A6/A38, carburant et attente inclus.",
          },
          {
            question: "Combien de temps dure le trajet Paris — Dijon en taxi ?",
            answer:
              "Comptez environ 3h en conditions normales via l'A6 et l'A38. Aux heures de pointe ou par temps hivernal difficile, le trajet peut atteindre 4h. Un arrêt aux Hospices de Beaune ajoute environ 45 minutes.",
          },
          {
            question: "Peut-on s'arrêter sur la Route des Grands Crus en chemin ?",
            answer:
              "Oui, un détour par la Route des Grands Crus (Gevrey-Chambertin, Vougeot, Nuits-Saint-Georges, Beaune) est possible. Prévoyez un supplément horaire de 40-80 € selon la durée des arrêts dans les domaines viticoles.",
          },
          {
            question: "Le taxi peut-il transporter des cartons de vin ?",
            answer:
              "Absolument. Notre berline peut transporter 4-6 cartons, et notre van jusqu'à 12 cartons. Le chauffeur dispose de couvertures de protection pour caler les bouteilles pendant le transport.",
          },
          {
            question: "Le service est-il disponible pour la Foire gastronomique de Dijon ?",
            answer:
              "Oui, nous assurons des transferts pendant la Foire internationale et gastronomique de Dijon (début novembre). Réservez au moins une semaine à l'avance car la demande est forte durant cet événement.",
          },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Dijon | Fixed rate from €320 | TaxiNeo",
        metaDescription:
          "Book your private taxi Paris → Dijon. 315 km, ~3h, fixed rate from €320. Door-to-door service, professional driver, Wi-Fi on board.",
        heroTitle: "Taxi Paris → Dijon",
        heroSubtitle:
          "Private transfer Paris → Dijon from €320 — €420. Home pick-up, premium vehicle, professional driver 24/7.",
        description:
          "The Paris — Dijon route connects the capital to the historic capital of the Dukes of Burgundy, a city renowned worldwide for its gastronomy and wine. Our long-distance taxi offers a comfortable door-to-door transfer in about 3 hours via the A6 motorway, with the option to stop at the Hospices de Beaune en route.",
        routeDescription:
          "The route follows the A6 motorway towards Lyon, then branches onto the A38 at Pouilly-en-Auxois to reach Dijon. Passing through Auxerre, Avallon and the Burgundy wine coast.",
        introduction:
          "The Paris — Dijon private taxi caters to gastronomy and wine enthusiasts visiting the prestigious Côte de Nuits and Côte de Beaune vineyards (UNESCO World Heritage), business travellers heading to Dijon-based companies like Urgo and Seb, and families on holiday. Dijon, with its 2022-inaugurated International City of Gastronomy and Wine, medieval centre with polychrome-tiled rooftops, and the Ducal Palace, attracts millions of visitors yearly. A private taxi lets you transport wine cases purchased at Grand Cru estates and arrive directly at your destination.",
        itineraire:
          "From Paris, your driver takes the southern ring road to Porte d'Orléans, then joins the A6 motorway. The route passes through Fontainebleau forest, Auxerre and Avallon. At Pouilly-en-Auxois (km 260), the driver exits onto the A38 towards Dijon. This 30 km section descends through rolling hills alongside the Burgundy Canal. Entry into Dijon is via the northern interchange, along Lac Kir. The Venoy-Soleil Levant rest area (km 170) makes an ideal midway stop.",
        conseils:
          "Depart between 9am-11am to avoid Paris traffic. Avoid Friday and Sunday evenings, especially during harvest season (September-October). For a Hospices de Beaune visit en route, add 45 minutes. In winter, watch for ice on the Avallon — Pouilly section. Our van can transport 6-12 wine cases safely if you plan vineyard purchases.",
        comparaisonTransport:
          "The TGV from Paris Gare de Lyon to Dijon takes about 1h40 and costs €25-95 per person. For a family of four, that's €100-380 plus local taxi. Our fixed-rate taxi from €320 is competitive from 2 passengers, especially with vineyard stops. The ability to transport wine cases without lugging them through TGV carriages is a decisive advantage for wine tourism.",
        faq: [
          {
            question: "What is the price of a taxi from Paris to Dijon?",
            answer: "€320-420 for a sedan, from €520 for a van. All-inclusive: A6/A38 tolls, fuel and waiting time.",
          },
          {
            question: "How long does the Paris to Dijon taxi journey take?",
            answer: "About 3 hours via the A6 and A38 in normal conditions, up to 4 hours in peak traffic. A Beaune stop adds 45 minutes.",
          },
          {
            question: "Can we stop on the Route des Grands Crus?",
            answer: "Yes, detours to Gevrey-Chambertin, Vougeot, Nuits-Saint-Georges or Beaune are possible. Allow €40-80 extra depending on stop duration.",
          },
          {
            question: "Can the taxi transport wine cases?",
            answer: "Yes, a sedan fits 4-6 cases, a van up to 12. The driver has protective blankets to secure bottles during transport.",
          },
          {
            question: "Is the service available during the Dijon Gastronomy Fair?",
            answer: "Yes, we cover the Foire Internationale et Gastronomique de Dijon (early November). Book at least one week ahead as demand is high.",
          },
        ],
      },
    },
  },

  // 18. PARIS → METZ
  {
    slug: "paris-metz",
    from: "Paris",
    to: "Metz",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 49.1193,
    toLng: 6.1757,
    distanceKm: 330,
    durationMin: 195,
    priceEstimate: "340 — 440 €",
    category: "longue-distance",
    prixMin: 340,
    prixMax: 440,
    prixVan: 540,
    dureeMax: 255,
    autoroute: "A4",
    peages: "~22 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "metz",
    liensInternes: ["paris-strasbourg", "paris-reims", "paris-lille"],
    tags: ["longue-distance", "business", "culture"],
    hub: "paris",
    highlights: ["A4 Autoroute de l'Est", "Centre Pompidou-Metz", "Cathédrale Saint-Étienne", "Place Saint-Louis"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Metz | Forfait dès 340 € | TaxiNeo",
        metaDescription:
          "Réservez votre taxi Paris → Metz. 330 km, ~3h15, forfait dès 340 €. Chauffeur privé, véhicule confortable, Wi-Fi à bord. Alternative flexible au TGV Est.",
        heroTitle: "Taxi Paris → Metz",
        heroSubtitle:
          "Transfert privé Paris → Metz au forfait de 340 — 440 €. Prise en charge à domicile, véhicule haut de gamme, chauffeur professionnel.",
        description:
          "Le trajet Paris — Metz relie la capitale à la métropole lorraine, ville d'art et d'histoire célèbre pour sa cathédrale gothique aux vitraux de Chagall et le Centre Pompidou-Metz. Notre service de taxi longue distance vous offre un transfert porte-à-porte en environ 3h15 via l'autoroute A4, avec une flexibilité que le TGV Est ne peut offrir.",
        routeDescription:
          "L'itinéraire emprunte l'autoroute A4, dite « Autoroute de l'Est ». Départ par la Porte de Bercy, passage par Reims et Verdun avant d'atteindre Metz par l'ouest.",
        introduction:
          "Le trajet Paris — Metz en taxi privé s'adresse aux cadres et ingénieurs travaillant dans le technopôle de Metz, notamment dans les secteurs de l'automobile avec le centre technique PSA-Stellantis de Tremery, de la sidérurgie avec ArcelorMittal à Florange, et des technologies numériques avec le quartier de l'Amphithéâtre en plein essor. Les amateurs de culture choisissent également ce service pour visiter le Centre Pompidou-Metz, antenne du célèbre musée parisien inaugurée en 2010 et conçue par les architectes Shigeru Ban et Jean de Gastines, dont la structure en bois tressé est devenue l'emblème de la ville. Metz, préfecture de la Moselle forte de 120 000 habitants dans sa commune et 400 000 dans son agglomération, possède un patrimoine architectural exceptionnel mêlant influences françaises et germaniques — héritage de l'annexion de 1871-1918 visible dans le quartier impérial wilhelmien autour de la gare, classé secteur sauvegardé. La cathédrale Saint-Étienne, surnommée la « Lanterne du Bon Dieu » grâce à ses 6 500 m² de vitraux dont des oeuvres de Marc Chagall et Jacques Villon, est l'une des plus hautes nefs gothiques d'Europe. Un taxi privé depuis Paris permet d'emporter des bagages volumineux, de choisir un départ très tôt pour les réunions matinales au technopôle, et de profiter d'un itinéraire personnalisé avec un arrêt possible à Reims pour une dégustation de champagne.",
        itineraire:
          "Au départ de Paris, votre chauffeur emprunte le périphérique est jusqu'à la Porte de Bercy, puis s'engage sur l'autoroute A4 en direction de Strasbourg. La première section traverse la banlieue est par Noisy-le-Grand et Marne-la-Vallée, où l'on aperçoit les structures de Disneyland Paris sur la droite. L'autoroute continue à travers les plaines champenoises, vastes étendues de blé et de betteraves, avant de longer Reims — la Cité des Sacres dont les tours de la cathédrale sont visibles par temps clair au loin. Après Reims, l'A4 traverse le vignoble champenois de la Montagne de Reims, puis pénètre dans les collines de l'Argonne et de la Meuse. L'aire de Verdun-Saint-Nicolas (km 260), située à proximité des champs de bataille de la Première Guerre mondiale, constitue un arrêt chargé d'histoire avec un espace mémoriel et une boutique de dragées de Verdun. La descente vers Metz se fait par la vallée de la Moselle, avec ses coteaux viticoles produisant le vin gris de Lorraine. L'entrée dans Metz s'effectue par l'ouest, le long de l'autoroute A31 qui longe le plan d'eau de la Moselle et offre une vue spectaculaire sur le Centre Pompidou-Metz et la cathédrale. Le chauffeur vous dépose directement en centre-ville — place Saint-Louis, quartier de la gare ou technopôle — selon votre destination.",
        conseils:
          "Pour un trajet Paris — Metz optimal, privilégiez un départ entre 9h et 11h ou après 14h pour éviter les embouteillages de sortie de Paris sur l'A4, particulièrement chargée aux heures de pointe entre Porte de Bercy et Marne-la-Vallée. Évitez le vendredi soir en direction de l'Est, surtout lors des ponts de mai et des vacances scolaires alsaciennes-lorraines (calendrier différent du reste de la France avec une zone B spécifique). En hiver, le tronçon Verdun — Metz peut être touché par le verglas et le brouillard dans la vallée de la Moselle : votre chauffeur est équipé de pneus hiver. La pause recommandée se situe à l'aire de Verdun-Saint-Nicolas (km 260), qui propose un espace mémoriel sur la bataille de Verdun et les célèbres dragées de la maison Braquier. Si vous souhaitez un arrêt à Reims pour visiter les caves de champagne (Taittinger, Veuve Clicquot, Pommery), prévoyez un supplément de 1h à 1h30 et 50-80 € — votre chauffeur attend pendant la visite. Pour les voyages d'affaires au technopôle, un départ de Paris à 6h permet d'être sur place avant 9h30 même avec le trafic.",
        comparaisonTransport:
          "Le TGV Est Paris Gare de l'Est → Metz Ville met environ 1h25 et coûte entre 25 € (Ouigo, réservé tôt) et 90 € (tarif flexible dernière minute) par personne. Pour une famille de quatre, le TGV revient entre 100 € et 360 €, auxquels il faut ajouter le tramway ou taxi local à l'arrivée (8-15 €) et le trajet jusqu'à la Gare de l'Est au départ. En voiture individuelle, comptez 22 € de péages A4 et environ 38 € d'essence, soit 60 € mais avec plus de 3h de conduite. Notre taxi forfaitaire à partir de 340 € devient très compétitif dès deux passagers : le confort porte-à-porte, la possibilité de s'arrêter à Reims pour une dégustation de champagne, et les bagages illimités sont des avantages que le TGV ne peut offrir. Pour les déplacements professionnels facturés, le gain de temps en porte-à-porte est souvent comparable au TGV une fois les transits gare comptabilisés.",
        faq: [
          {
            question: "Quel est le prix d'un taxi Paris — Metz ?",
            answer:
              "Le forfait taxi Paris — Metz est de 340 à 440 € selon le type de véhicule (berline ou van) et les adresses exactes de prise en charge et de dépose. Ce prix est tout compris : péages A4, carburant et attente inclus.",
          },
          {
            question: "Combien de temps dure le trajet Paris — Metz en taxi ?",
            answer:
              "Comptez environ 3h15 en conditions normales via l'A4. Aux heures de pointe ou en hiver, le trajet peut atteindre 4h15. Un arrêt à Reims pour visiter des caves de champagne ajoute 1h à 1h30.",
          },
          {
            question: "Peut-on faire un arrêt à Reims pour visiter les caves de champagne ?",
            answer:
              "Oui, Reims se trouve à mi-parcours sur l'A4. Un arrêt d'1h à 1h30 pour visiter les caves Taittinger, Veuve Clicquot ou Pommery est possible pour un supplément de 50-80 €. Le chauffeur attend sur place.",
          },
          {
            question: "Le taxi dessert-il le technopôle de Metz et les zones industrielles ?",
            answer:
              "Oui, nous desservons le technopôle de Metz, la zone Actipôle, le centre PSA-Stellantis de Tremery et le site ArcelorMittal de Florange. Dépose directe à l'adresse de votre choix.",
          },
          {
            question: "Le service est-il disponible pour le Marché de Noël de Metz ?",
            answer:
              "Oui, nous assurons des transferts pendant le Marché de Noël de Metz (fin novembre à fin décembre), l'un des plus anciens de France. Réservez au moins une semaine à l'avance car la demande est forte.",
          },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Metz | Fixed rate from €340 | TaxiNeo",
        metaDescription:
          "Book your private taxi Paris → Metz. 330 km, ~3h15, fixed rate from €340. Door-to-door service, professional driver, Wi-Fi on board.",
        heroTitle: "Taxi Paris → Metz",
        heroSubtitle:
          "Private transfer Paris → Metz from €340 — €440. Home pick-up, premium vehicle, professional driver 24/7.",
        description:
          "The Paris — Metz route connects the capital to the Lorraine metropolis, renowned for its Gothic cathedral with Chagall stained glass and the Centre Pompidou-Metz. Our long-distance taxi offers a comfortable door-to-door transfer in about 3h15 via the A4 motorway.",
        routeDescription:
          "The route follows the A4 motorway, the 'Autoroute de l'Est'. Departure via Porte de Bercy, passing through Reims and Verdun before reaching Metz from the west.",
        introduction:
          "The Paris — Metz private taxi caters to professionals working at the Metz technology park, including Stellantis' Tremery technical centre and ArcelorMittal at Florange, as well as culture enthusiasts visiting the Centre Pompidou-Metz designed by Shigeru Ban. Metz, with its exceptional blend of French and Germanic architecture from the 1871-1918 annexation period, the stunning Saint-Étienne Cathedral boasting 6,500 m² of stained glass including works by Chagall, and the charming Place Saint-Louis, is a city of art and history. A private taxi lets you stop in Reims for champagne tasting en route.",
        itineraire:
          "From Paris, your driver takes the eastern ring road to Porte de Bercy, then joins the A4 eastbound. The route passes Disneyland Paris, crosses the Champagne plains, and skirts Reims with its cathedral towers visible in the distance. After Reims, the A4 passes through the Argonne hills. The Verdun-Saint-Nicolas rest area (km 260) offers a WWI memorial space and famous Verdun dragées. The descent into Metz follows the Moselle valley with views of the Centre Pompidou-Metz and cathedral.",
        conseils:
          "Depart between 9am-11am or after 2pm to avoid A4 congestion near Marne-la-Vallée. Avoid Friday evenings heading east and note that Alsace-Lorraine has different school holiday dates. In winter, watch for ice in the Moselle valley. For a Reims champagne cellar visit, add 1-1.5 hours and €50-80. The Verdun-Saint-Nicolas rest area (km 260) is the recommended stop.",
        comparaisonTransport:
          "The TGV Est from Paris Gare de l'Est to Metz takes about 1h25 and costs €25-90 per person. For a family of four, that's €100-360 plus local transport. Our fixed-rate taxi from €340 is competitive from 2 passengers with door-to-door comfort and the option to stop in Reims for champagne tasting — something the TGV cannot offer.",
        faq: [
          {
            question: "What is the price of a taxi from Paris to Metz?",
            answer: "€340-440 for a sedan, from €540 for a van. All-inclusive: A4 tolls, fuel and waiting time.",
          },
          {
            question: "How long does the Paris to Metz taxi journey take?",
            answer: "About 3h15 via the A4 in normal conditions, up to 4h15 in heavy traffic or winter. A Reims champagne stop adds 1-1.5 hours.",
          },
          {
            question: "Can we stop in Reims for champagne tasting?",
            answer: "Yes, Reims is halfway on the A4. A 1-1.5 hour stop at Taittinger, Veuve Clicquot or Pommery cellars costs €50-80 extra. The driver waits on site.",
          },
          {
            question: "Does the service cover the Metz technology park and industrial zones?",
            answer: "Yes, we serve the Metz Technopôle, Actipôle zone, Stellantis Tremery and ArcelorMittal Florange. Direct drop-off at your chosen address.",
          },
          {
            question: "Is the service available during the Metz Christmas Market?",
            answer: "Yes, we cover the Metz Christmas Market (late November to late December), one of France's oldest. Book at least a week in advance during this busy period.",
          },
        ],
      },
    },
  },

  // 19. PARIS → NANCY
  {
    slug: "paris-nancy",
    from: "Paris",
    to: "Nancy",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 48.6921,
    toLng: 6.1844,
    distanceKm: 387,
    durationMin: 210,
    priceEstimate: "400 — 520 €",
    category: "longue-distance",
    prixMin: 400,
    prixMax: 520,
    prixVan: 620,
    dureeMax: 270,
    autoroute: "A4",
    peages: "~28 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "nancy",
    liensInternes: ["paris-strasbourg", "paris-reims", "paris-metz"],
    tags: ["longue-distance", "business", "patrimoine"],
    hub: "paris",
    highlights: ["A4 Autoroute de l'Est", "Champagne", "Parc naturel de Lorraine", "Place Stanislas", "Art nouveau"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Nancy | Forfait dès 400 € | TaxiNeo",
        metaDescription:
          "Réservez votre taxi Paris → Nancy. 387 km, ~3h30, forfait dès 400 €. Chauffeur privé, véhicule confortable. Alternative flexible au TGV Est.",
        heroTitle: "Taxi Paris → Nancy",
        heroSubtitle:
          "Transfert privé Paris → Nancy au forfait de 400 — 520 €. Prise en charge à domicile, véhicule haut de gamme, chauffeur professionnel.",
        description:
          "Le trajet Paris — Nancy relie la capitale à la perle de la Lorraine. Nancy, célèbre pour sa Place Stanislas classée UNESCO, son école d'Art nouveau et son dynamisme universitaire, est desservie en 3h30 par l'autoroute A4. Un taxi privé offre le confort porte-à-porte idéal pour les voyageurs d'affaires et les touristes culturels.",
        routeDescription:
          "L'itinéraire emprunte l'A4 (Autoroute de l'Est) jusqu'à Metz, puis l'A31 vers Nancy. Traversée de la Champagne et de la Lorraine.",
        introduction:
          "Nancy, préfecture de Meurthe-et-Moselle et métropole de 285 000 habitants, est l'une des plus belles villes de l'Est de la France. La Place Stanislas, chef-d'œuvre du XVIIIe siècle inscrit au patrimoine mondial de l'UNESCO depuis 1983, forme avec la Place de la Carrière et la Place d'Alliance un ensemble architectural unique en Europe. Nancy est aussi la capitale de l'Art nouveau français grâce à l'École de Nancy fondée par Émile Gallé, Louis Majorelle et les frères Daum — le musée de l'École de Nancy et la villa Majorelle témoignent de cet héritage exceptionnel. Ville universitaire majeure avec plus de 50 000 étudiants répartis entre l'Université de Lorraine, Mines Nancy, ICN Business School et l'ENSAIA, Nancy est un pôle de recherche et d'innovation reconnu, notamment dans les matériaux, les sciences de l'eau et l'intelligence artificielle. Le taxi privé Paris — Nancy est prisé par les cadres du secteur bancaire et assurantiel, les universitaires, les avocats et les familles qui souhaitent découvrir la gastronomie lorraine : quiche lorraine, bergamote de Nancy, mirabelle et baba au rhum, inventé ici par le pâtissier de Stanislas Leszczynski.",
        itineraire:
          "Le départ de Paris s'effectue par la Porte de Bercy ou la Porte de Bagnolet pour rejoindre l'A4 en direction de Metz-Strasbourg. La traversée de la Seine-et-Marne passe par Meaux et les plaines de la Brie, vastes étendues agricoles. Après le péage de Château-Thierry, l'autoroute entre en Champagne : le paysage se couvre de vignobles sur les coteaux au nord et de grandes cultures céréalières au sud. La ville de Reims reste à 30 km au nord — un détour possible sur demande. Après Châlons-en-Champagne, la route traverse les Côtes de Meuse et entre en Lorraine. L'aire de Verdun-Saint-Nicolas (km 270) offre une pause idéale avec vue sur la campagne lorraine et un espace de restauration de qualité. Après Metz, on quitte l'A4 pour prendre l'A31 plein sud pendant 60 km. L'arrivée à Nancy se fait par l'autoroute urbaine, avec la possibilité de déposer au centre-ville (Place Stanislas), au campus universitaire de Vandœuvre ou au technopôle de Nancy-Brabois selon la destination du client. Le passage par les portes de la Craffe, vestiges médiévaux de la vieille ville, offre une entrée pittoresque pour les visiteurs.",
        conseils:
          "Pour optimiser votre trajet Paris — Nancy, privilégiez un départ en semaine entre 9h et 11h, hors heures de pointe parisiennes. L'A4 est généralement fluide après Meaux, mais attention au trafic autour de Reims les jours de marché ou lors des grandes fêtes du champagne. La portion Metz — Nancy sur l'A31 peut être ralentie aux heures de pointe locales (8h-9h et 17h-18h30). En hiver, le tronçon entre Verdun et Metz est sujet au verglas et au brouillard : votre chauffeur dispose de pneus hiver et adapte sa conduite. La pause recommandée est à l'aire de Verdun-Saint-Nicolas, qui propose un restaurant avec des spécialités lorraines. Si vous visitez Nancy, ne manquez pas le marché couvert le samedi matin, la rue des Maréchaux pour le shopping et le parc de la Pépinière en toute saison. Pour les amateurs de bière, la brasserie artisanale de Nancy mérite le détour. Réservez à l'avance pendant le festival Nancy Jazz Pulsations (octobre) et la Fête de la Saint-Nicolas (décembre), périodes de forte affluence.",
        comparaisonTransport:
          "Le TGV Est Paris — Nancy met environ 1h30 pour 25 à 85 € par personne. Pour un voyageur seul, le train est plus rapide et économique. Mais dès 2-3 passagers, le taxi privé à partir de 400 € devient compétitif : le coût par personne (133-200 €) se rapproche du TGV en tarif flexible, tout en offrant le porte-à-porte, la flexibilité horaire et les bagages illimités. Le covoiturage (25-35 €) est une alternative économique mais sans confort ni fiabilité garantie. En voiture personnelle, comptez 28 € de péages et 45 € d'essence, soit 73 € mais avec la fatigue de la conduite sur 3h30. Notre forfait taxi est idéal pour les déplacements professionnels où le temps de trajet peut être mis à profit pour travailler.",
        faq: [
          {
            question: "Quel est le prix d'un taxi Paris — Nancy ?",
            answer:
              "Le forfait est de 400 à 520 € en berline selon l'adresse de prise en charge et de dépose. En van (4-7 passagers), comptez à partir de 620 €. Tout compris : péages, carburant, attente.",
          },
          {
            question: "Combien de temps dure le trajet Paris — Nancy en taxi ?",
            answer:
              "Environ 3h30 via l'A4 et l'A31 en conditions normales. Aux heures de pointe ou en cas de travaux, prévoir jusqu'à 4h30.",
          },
          {
            question: "Peut-on faire un arrêt à Reims ou Metz en chemin ?",
            answer:
              "Oui, un arrêt à Reims (visite des caves de champagne) ou à Metz (Centre Pompidou) est possible moyennant un supplément de 40 à 80 € selon la durée.",
          },
          {
            question: "Le taxi est-il disponible pour la Saint-Nicolas à Nancy ?",
            answer:
              "Oui, nous opérons toute l'année y compris pendant la Fête de la Saint-Nicolas en décembre. Réservez tôt car c'est une période très demandée.",
          },
          {
            question: "Quels véhicules sont proposés pour Paris — Nancy ?",
            answer:
              "Berlines confort (1-3 passagers, dès 400 €) et vans spacieux (4-7 passagers, dès 620 €). Tous équipés Wi-Fi, climatisation et prises USB.",
          },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Nancy | Fixed rate from €400 | TaxiNeo",
        metaDescription:
          "Book your private taxi Paris → Nancy. 387 km, ~3h30, from €400. Door-to-door service to Lorraine's Art Nouveau capital.",
        heroTitle: "Taxi Paris → Nancy",
        heroSubtitle:
          "Private transfer Paris → Nancy from €400 — €520. Home pick-up, premium vehicle, professional driver.",
        description:
          "The Paris — Nancy route connects the capital to Lorraine's jewel. Nancy is famous for its UNESCO-listed Place Stanislas, Art Nouveau heritage and vibrant university scene. A private taxi offers comfortable door-to-door service in about 3h30.",
        routeDescription:
          "Via the A4 motorway east through Champagne to Metz, then A31 south to Nancy. Scenic Lorraine countryside.",
        introduction:
          "Nancy, with its stunning Place Stanislas, Art Nouveau heritage and 50,000 students, is a cultural and academic powerhouse. Private taxis serve business travellers, academics and tourists exploring Lorraine's gastronomy and architecture.",
        itineraire:
          "From Paris via Porte de Bercy onto the A4 east. Through Brie plains and Champagne vineyards, past Verdun-Saint-Nicolas rest area. Switch to A31 south after Metz for the final stretch into Nancy centre.",
        conseils:
          "Depart between 9am and 11am for smooth traffic. Watch for ice on the Verdun-Metz stretch in winter. Recommended stop at Verdun-Saint-Nicolas. Book early for Nancy Jazz Pulsations (October) and Saint-Nicolas festival (December).",
        comparaisonTransport:
          "TGV Est takes 1h30 for €25-85 per person. Our taxi from €400 suits groups of 2+ with door-to-door convenience and unlimited luggage. Ideal when combining Nancy with Metz or Reims visits.",
        faq: [
          {
            question: "What is the price of a taxi Paris — Nancy?",
            answer: "€400-520 for a sedan, from €620 for a van. All-inclusive: tolls, fuel and waiting time.",
          },
          {
            question: "How long does the Paris — Nancy journey take?",
            answer: "About 3h30 via the A4 and A31. Allow up to 4h30 during peak hours.",
          },
          {
            question: "Can we stop at Reims or Metz on the way?",
            answer: "Yes, stops at Reims (champagne cellars) or Metz (Pompidou Centre) available for a €40-80 supplement.",
          },
          {
            question: "Is the service available during Saint-Nicolas festival?",
            answer: "Yes, we operate year-round including the December festival. Book early for this popular period.",
          },
          {
            question: "What vehicles are available for Paris — Nancy?",
            answer: "Comfort sedans (1-3 passengers, from €400) and spacious vans (4-7 passengers, from €620). All with Wi-Fi and AC.",
          },
        ],
      },
    },
  },

  // 20. PARIS → LE MANS
  {
    slug: "paris-le-mans",
    from: "Paris",
    to: "Le Mans",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 47.9959,
    toLng: 0.1996,
    distanceKm: 210,
    durationMin: 135,
    priceEstimate: "250 — 330 €",
    category: "ville-a-ville",
    prixMin: 250,
    prixMax: 330,
    prixVan: 420,
    dureeMax: 175,
    autoroute: "A11",
    peages: "~15 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "le-mans",
    liensInternes: ["paris-tours", "paris-angers", "paris-rennes"],
    tags: ["ville-a-ville", "sport-auto", "patrimoine"],
    hub: "paris",
    highlights: ["A11 L'Océane", "Chartres", "Circuit des 24 Heures", "Vieux-Mans", "Cathédrale Saint-Julien"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Le Mans | Forfait dès 250 € | TaxiNeo",
        metaDescription:
          "Réservez votre taxi Paris → Le Mans. 210 km, ~2h15, forfait dès 250 €. Transfert direct vers la cité des 24 Heures.",
        heroTitle: "Taxi Paris → Le Mans",
        heroSubtitle:
          "Transfert privé Paris → Le Mans au forfait de 250 — 330 €. Prise en charge à domicile, véhicule confortable.",
        description:
          "Le trajet Paris — Le Mans relie la capitale à la cité des 24 Heures du Mans. Ville historique avec son Vieux-Mans médiéval parfaitement conservé, Le Mans est aussi un pôle industriel majeur (assurance, automobile). Le taxi privé est idéal pendant les 24 Heures et le Grand Prix moto.",
        routeDescription:
          "L'itinéraire emprunte l'A11 (L'Océane) en direction de Nantes. Passage par Chartres puis la Beauce et le Perche avant Le Mans.",
        introduction:
          "Le Mans, préfecture de la Sarthe et métropole de 200 000 habitants, est mondialement connue pour sa course automobile d'endurance, les 24 Heures du Mans, disputée chaque année en juin sur le circuit de la Sarthe depuis 1923. Le circuit permanent Bugatti accueille également le Grand Prix de France moto et de nombreuses compétitions de sport automobile tout au long de l'année. Mais Le Mans ne se résume pas à la course : la Cité Plantagenêt, quartier médiéval remarquablement préservé avec ses maisons à pans de bois des XVe et XVIe siècles, ses ruelles pavées et son enceinte gallo-romaine du IIIe siècle — l'une des mieux conservées de France — en fait une destination patrimoniale de premier ordre. La cathédrale Saint-Julien, avec son chœur gothique spectaculaire et sa nef romane, illustre la richesse architecturale de la ville. Le Mans est aussi un centre économique dynamique : les mutuelles d'assurance (MMA, Thélem), l'industrie automobile (Renault) et l'agroalimentaire (rillettes du Mans) y sont implantés. Le taxi privé Paris — Le Mans est utilisé par les professionnels du secteur assurance, les équipes de course automobile, les touristes du patrimoine médiéval et les familles en route vers la vallée de la Loire ou la côte atlantique.",
        itineraire:
          "Le départ de Paris se fait par la Porte de Saint-Cloud ou la Porte d'Auteuil pour rejoindre l'A13 puis l'A12 et l'A11 en direction du Mans. La traversée de la banlieue ouest passe par Versailles et Rambouillet. Après Ablis, l'autoroute A11 traverse la Beauce chartraine avec ses immenses champs de céréales. La cathédrale de Chartres, visible de loin sur la plaine, est un repère emblématique. Après Chartres, le paysage change progressivement : les plaines céréalières laissent place aux collines du Perche, terre d'élevage verdoyante parsemée de manoirs et de haras. L'aire de repos de La Ferté-Bernard (km 170) offre une pause agréable dans un cadre bocager. L'arrivée au Mans se fait par le nord de l'agglomération, avec la possibilité de déposer au centre-ville (Place de la République), au circuit des 24 Heures, à la gare TGV ou dans les zones industrielles sud. La traversée de la Cité Plantagenêt à pied depuis le centre est un enchantement pour les visiteurs.",
        conseils:
          "Pour le trajet Paris — Le Mans, un départ en milieu de matinée garantit une route dégagée sur l'A11 après Ablis. Pendant les 24 Heures du Mans (mi-juin), réservez votre taxi au moins deux semaines à l'avance : la ville est prise d'assaut par 250 000 spectateurs et les transports sont saturés. L'accès au circuit est facilité par notre connaissance locale des itinéraires bis. De même, le Grand Prix moto (mi-mai) génère une affluence importante. Le Vieux-Mans est particulièrement beau lors de la Nuit des Chimères (projections lumineuses estivales sur les façades médiévales). En hiver, la portion Chartres — Le Mans peut être verglacée : votre chauffeur adapte sa conduite. Si vous prolongez vers la côte atlantique, La Baule est à 2h et Saint-Malo à 2h30 du Mans. Les rillettes du Mans sont un incontournable à rapporter — la maison Prunier est une référence.",
        comparaisonTransport:
          "Le TGV Paris Montparnasse → Le Mans met environ 1h pour 15 à 55 € par personne. C'est rapide et économique pour un voyageur seul. Mais dès 3 passagers, notre taxi à partir de 250 € (soit 83 € par personne) rivalise avec le TGV en tarif flexible, tout en offrant la prise en charge à domicile et la dépose directement au circuit, en zone industrielle ou à l'hôtel — sans taxi supplémentaire à l'arrivée. Pendant les 24 Heures, les transports locaux sont bondés et un transfert privé fait gagner un temps précieux. En voiture personnelle, comptez 15 € de péages et 25 € d'essence.",
        faq: [
          {
            question: "Quel est le prix d'un taxi Paris — Le Mans ?",
            answer:
              "Le forfait est de 250 à 330 € en berline, à partir de 420 € en van. Tout compris : péages, carburant et attente.",
          },
          {
            question: "Combien de temps dure le trajet Paris — Le Mans ?",
            answer:
              "Environ 2h15 via l'A11 en conditions normales. Jusqu'à 2h55 aux heures de pointe ou pendant les 24 Heures.",
          },
          {
            question: "Le taxi peut-il déposer directement au circuit des 24 Heures ?",
            answer:
              "Oui, nous connaissons les accès au circuit et les parkings VIP. Transfert direct depuis Paris jusqu'à l'entrée de votre choix.",
          },
          {
            question: "Peut-on réserver pendant les 24 Heures du Mans ?",
            answer:
              "Oui, nous renforçons notre flotte pour cet événement. Réservez au moins deux semaines à l'avance pour garantir la disponibilité.",
          },
          {
            question: "Le taxi peut-il continuer vers la côte atlantique ?",
            answer:
              "Oui, La Baule est à 2h et Saint-Malo à 2h30 du Mans. Nous proposons des forfaits combinés sur demande.",
          },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Le Mans | Fixed rate from €250 | TaxiNeo",
        metaDescription:
          "Book your private taxi Paris → Le Mans. 210 km, ~2h15, from €250. Direct transfer to the home of the 24 Hours race.",
        heroTitle: "Taxi Paris → Le Mans",
        heroSubtitle:
          "Private transfer Paris → Le Mans from €250 — €330. Door-to-door service, comfortable vehicle.",
        description:
          "Le Mans is world-famous for its 24 Hours endurance race and boasts a stunning medieval old town. A private taxi is perfect for race weekends when public transport is overwhelmed.",
        routeDescription:
          "Via the A11 motorway through Chartres and the Perche countryside to Le Mans.",
        introduction:
          "Le Mans, home to the legendary 24 Hours race since 1923, also offers the beautifully preserved Cité Plantagenêt medieval quarter and Saint-Julien Cathedral. A key insurance and automotive hub, private taxis serve race teams, business travellers and heritage tourists.",
        itineraire:
          "From Paris via Porte de Saint-Cloud onto the A11. Through Chartres and the Perche hills with a possible stop at La Ferté-Bernard. Arrival in Le Mans centre or directly at the circuit.",
        conseils:
          "Book two weeks ahead for the 24 Hours (mid-June) and MotoGP (mid-May). Mid-morning departures avoid traffic. Don't miss the medieval Nuit des Chimères light show in summer.",
        comparaisonTransport:
          "TGV takes just 1 hour for €15-55. Our taxi from €250 suits groups of 3+ and offers direct circuit access during race weekends when local transport is overwhelmed.",
        faq: [
          {
            question: "What is the price of a taxi Paris — Le Mans?",
            answer: "€250-330 for a sedan, from €420 for a van. All-inclusive.",
          },
          {
            question: "How long does the journey take?",
            answer: "About 2h15 via the A11, up to 2h55 in peak times.",
          },
          {
            question: "Can the taxi drop off at the 24 Hours circuit?",
            answer: "Yes, we know the circuit access points and VIP parking areas. Direct transfer from Paris.",
          },
          {
            question: "Should I book early for the 24 Hours race?",
            answer: "Yes, book at least two weeks ahead. 250,000 spectators descend on Le Mans during the event.",
          },
          {
            question: "Can we continue to the Atlantic coast?",
            answer: "Yes, La Baule is 2 hours and Saint-Malo 2h30 from Le Mans. Combined rates available.",
          },
        ],
      },
    },
  },

  // 21. PARIS → CAEN
  {
    slug: "paris-caen",
    from: "Paris",
    to: "Caen",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 49.1829,
    toLng: -0.3707,
    distanceKm: 238,
    durationMin: 150,
    priceEstimate: "280 — 370 €",
    category: "ville-a-ville",
    prixMin: 280,
    prixMax: 370,
    prixVan: 460,
    dureeMax: 195,
    autoroute: "A13",
    peages: "~18 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "caen",
    liensInternes: ["paris-rouen", "paris-le-mans", "paris-rennes"],
    tags: ["ville-a-ville", "histoire", "d-day"],
    hub: "paris",
    highlights: ["A13 Autoroute de Normandie", "Rouen", "Pays d'Auge", "Mémorial de Caen", "Plages du Débarquement"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Caen | Forfait dès 280 € | TaxiNeo",
        metaDescription:
          "Réservez votre taxi Paris → Caen. 238 km, ~2h30, forfait dès 280 €. Transfert privé vers la Normandie, le Mémorial et les plages du Débarquement.",
        heroTitle: "Taxi Paris → Caen",
        heroSubtitle:
          "Transfert privé Paris → Caen au forfait de 280 — 370 €. La Normandie historique à portée de main.",
        description:
          "Le trajet Paris — Caen est la porte d'entrée de la Normandie occidentale. Caen, ville de Guillaume le Conquérant, abrite le Mémorial pour la Paix et donne accès aux plages du Débarquement. Un taxi privé est parfait pour les circuits mémoriels et les séjours sur la Côte de Nacre.",
        routeDescription:
          "L'itinéraire emprunte l'A13 (Autoroute de Normandie) en passant par Rouen, puis l'A13 continue vers Caen à travers le Pays d'Auge.",
        introduction:
          "Caen, préfecture du Calvados et métropole de 200 000 habitants, est une ville chargée d'histoire qui résonne des siècles normands et de la Seconde Guerre mondiale. Guillaume le Conquérant y fonda l'Abbaye aux Hommes et l'Abbaye aux Dames au XIe siècle, joyaux de l'art roman normand. Largement détruite lors de la bataille de Caen en juin-juillet 1944, la ville a été reconstruite avec une architecture moderniste en pierre de Caen qui lui confère une identité unique. Le Mémorial de Caen, musée consacré à la paix et à l'histoire du XXe siècle, accueille 400 000 visiteurs par an et constitue le point de départ idéal pour découvrir les plages du Débarquement : Omaha Beach, Utah Beach, Juno Beach, Gold Beach et Sword Beach se trouvent entre 15 et 50 km de la ville. Caen est aussi une ville universitaire dynamique avec 30 000 étudiants, un pôle de recherche en physique nucléaire (GANIL) et un secteur tertiaire en expansion. Le taxi privé Paris — Caen est prisé par les touristes internationaux visitant les sites du D-Day, les familles de vétérans américains, britanniques et canadiens, les professionnels des industries normandes et les Parisiens en week-end sur la Côte de Nacre ou la Côte Fleurie (Deauville, Honfleur).",
        itineraire:
          "Le départ de Paris s'effectue par la Porte d'Auteuil ou la Porte de Saint-Cloud pour rejoindre l'A13 en direction de Rouen. La traversée des Yvelines longe les boucles de la Seine par Mantes-la-Jolie, offrant de belles vues sur le fleuve. Après Rouen — dont on aperçoit la flèche de la cathédrale —, l'A13 continue plein ouest en traversant le Pays d'Auge, terre de cidre, de camembert et de haras, avec ses collines verdoyantes et ses manoirs à colombages. L'aire de repos de Beuzeville (km 180) est un point d'arrêt agréable avec vue sur la campagne augeron. Le viaduc de la Touques et le pont de Normandie (sur la Seine, vers Le Havre) sont des ouvrages impressionnants visibles depuis l'autoroute. L'entrée dans Caen se fait par le périphérique nord, avec possibilité de dépose au centre-ville (château de Guillaume, port de plaisance), au Mémorial, à la gare SNCF ou directement sur les plages du Débarquement à 20 minutes. Le panorama sur les toits de pierre blonde de Caen depuis la colline du Mémorial est saisissant.",
        conseils:
          "Pour un trajet Paris — Caen optimal, évitez les vendredis soirs d'été et les week-ends de pont, quand l'A13 est saturée par les Parisiens en route vers la Normandie. Un départ en semaine avant 9h ou entre 10h et 14h garantit un trajet fluide de 2h30. Pour les commémorations du D-Day (6 juin et semaine environnante), réservez très tôt : l'affluence est considérable, notamment lors des anniversaires décennaux. Si vous souhaitez visiter les plages du Débarquement, prévoyez une journée complète : votre chauffeur peut vous accompagner sur un circuit Omaha — Pointe du Hoc — cimetière américain de Colleville — Sainte-Mère-Église. En dehors des plages, ne manquez pas Honfleur (30 min de Caen), son Vieux Bassin peint par les impressionnistes, et Deauville (45 min) pour ses planches. Le fromage de Normandie s'achète directement dans les fermes du Pays d'Auge.",
        comparaisonTransport:
          "Le train Paris Saint-Lazare → Caen met environ 2h en Intercités pour 20 à 50 € par personne. Les horaires sont espacés (un train toutes les 1-2 heures) et la gare de Caen est éloignée des plages du Débarquement. Notre taxi à partir de 280 € est compétitif pour 2-3 passagers et offre surtout la possibilité de combiner transfert et visite des plages dans la même journée. Pour les touristes internationaux qui ne conduisent pas en France, le taxi privé est la solution la plus pratique pour explorer la Normandie en liberté. En voiture personnelle, comptez 18 € de péages et 28 € d'essence.",
        faq: [
          {
            question: "Quel est le prix d'un taxi Paris — Caen ?",
            answer:
              "Le forfait est de 280 à 370 € en berline, à partir de 460 € en van. Prix tout compris : péages, carburant, attente.",
          },
          {
            question: "Combien de temps dure le trajet Paris — Caen ?",
            answer:
              "Environ 2h30 via l'A13 en conditions normales. Jusqu'à 3h15 les vendredis d'été.",
          },
          {
            question: "Le taxi peut-il nous emmener sur les plages du Débarquement ?",
            answer:
              "Oui, nous proposons des circuits personnalisés : Omaha, Utah, Juno, Pointe du Hoc, cimetière américain. Forfait journée sur devis.",
          },
          {
            question: "Peut-on s'arrêter à Honfleur ou Deauville en chemin ?",
            answer:
              "Oui, un détour par Honfleur ou Deauville est possible moyennant un supplément de 30 à 60 € selon la durée de l'arrêt.",
          },
          {
            question: "Service disponible pour les commémorations du 6 juin ?",
            answer:
              "Oui, nous renforçons notre service pour le D-Day. Réservez au moins trois semaines à l'avance pour cette période très demandée.",
          },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Caen | Fixed rate from €280 | TaxiNeo",
        metaDescription:
          "Book your private taxi Paris → Caen. 238 km, ~2h30, from €280. Gateway to D-Day beaches and the Caen Memorial.",
        heroTitle: "Taxi Paris → Caen",
        heroSubtitle:
          "Private transfer Paris → Caen from €280 — €370. Your gateway to Normandy's history.",
        description:
          "Caen is the gateway to the D-Day beaches and Normandy's rich history. Home to the Caen Memorial, William the Conqueror's abbeys, and within easy reach of Omaha Beach, Honfleur and Deauville.",
        routeDescription:
          "Via the A13 motorway through Rouen and the Pays d'Auge countryside to Caen.",
        introduction:
          "Caen, William the Conqueror's city, houses the renowned Caen Memorial and gives access to all D-Day beaches within 15-50 km. A major university city rebuilt in pale Caen stone after 1944, it serves as the ideal base for exploring Normandy's history, beaches and gastronomy.",
        itineraire:
          "From Paris via Porte d'Auteuil onto the A13 through Seine valley bends, past Rouen, and into the Pays d'Auge. Stop possible at Beuzeville rest area. Arrival via Caen's northern ring road.",
        conseils:
          "Avoid Friday evenings in summer. Book early for D-Day anniversaries (June 6). Combine your transfer with a D-Day beach tour: Omaha, Pointe du Hoc, Colleville cemetery. Don't miss Honfleur (30 min from Caen).",
        comparaisonTransport:
          "Intercités from Paris Saint-Lazare takes 2 hours for €20-50. Our taxi from €280 suits groups and offers direct D-Day beach access impossible by train. Ideal for international tourists exploring Normandy.",
        faq: [
          {
            question: "What is the price of a taxi Paris — Caen?",
            answer: "€280-370 for a sedan, from €460 for a van. All-inclusive.",
          },
          {
            question: "How long does the journey take?",
            answer: "About 2h30 via the A13, up to 3h15 on summer Fridays.",
          },
          {
            question: "Can the taxi take us to the D-Day beaches?",
            answer: "Yes, we offer custom tours: Omaha, Utah, Juno, Pointe du Hoc, American cemetery. Day-rate on request.",
          },
          {
            question: "Can we stop at Honfleur or Deauville?",
            answer: "Yes, a detour is possible for a €30-60 supplement depending on stop duration.",
          },
          {
            question: "Is the service available for D-Day commemorations?",
            answer: "Yes, we reinforce our fleet for June 6. Book at least three weeks ahead.",
          },
        ],
      },
    },
  },

  // 22. PARIS → LIMOGES
  {
    slug: "paris-limoges",
    from: "Paris",
    to: "Limoges",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 45.8336,
    toLng: 1.2611,
    distanceKm: 392,
    durationMin: 225,
    priceEstimate: "410 — 540 €",
    category: "longue-distance",
    prixMin: 410,
    prixMax: 540,
    prixVan: 640,
    dureeMax: 285,
    autoroute: "A20",
    peages: "~22 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "limoges",
    liensInternes: ["paris-toulouse", "paris-bordeaux", "paris-poitiers"],
    tags: ["longue-distance", "porcelaine", "patrimoine"],
    hub: "paris",
    highlights: ["A20 L'Occitane", "Châteauroux", "Plateau de Millevaches", "Porcelaine de Limoges", "Cathédrale Saint-Étienne"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Limoges | Forfait dès 410 € | TaxiNeo",
        metaDescription:
          "Réservez votre taxi Paris → Limoges. 392 km, ~3h45, forfait dès 410 €. Transfert privé vers la capitale de la porcelaine.",
        heroTitle: "Taxi Paris → Limoges",
        heroSubtitle:
          "Transfert privé Paris → Limoges au forfait de 410 — 540 €. La capitale de la porcelaine et du Limousin.",
        description:
          "Le trajet Paris — Limoges traverse le Berry et rejoint la capitale du Limousin, célèbre pour sa porcelaine, ses émaux et ses vitraux. Limoges, ville d'art et d'histoire, est aussi un pôle de recherche en céramique et une étape vers le Périgord et le plateau de Millevaches.",
        routeDescription:
          "L'itinéraire emprunte l'A10 puis l'A20 (L'Occitane) en passant par Vierzon et Châteauroux. Traversée du Berry et du nord du Limousin.",
        introduction:
          "Limoges, préfecture de la Haute-Vienne et capitale historique du Limousin, est une ville de 200 000 habitants dans l'agglomération qui a façonné l'histoire des arts du feu. La porcelaine de Limoges, produite depuis la découverte de gisements de kaolin à Saint-Yrieix-la-Perche en 1768, est reconnue dans le monde entier comme un symbole d'excellence française — les manufactures Haviland, Bernardaud et Royal Limoges perpétuent cette tradition. Les émaux de Limoges, technique médiévale d'orfèvrerie, sont exposés au musée des Beaux-Arts dans l'ancien palais épiscopal sur les bords de la Vienne. La cathédrale Saint-Étienne, chef-d'œuvre du gothique rayonnant, domine la ville avec son portail Saint-Jean sculpté d'une finesse exceptionnelle. Limoges est aussi une ville de traditions : les Ostensions limousines, processions religieuses septennales uniques en France, attirent des milliers de pèlerins. Le quartier de la Boucherie, avec ses maisons médiévales à colombages et sa chapelle Saint-Aurélien, conserve l'atmosphère du Limoges ancien. Le taxi privé Paris — Limoges est emprunté par les professionnels de l'industrie céramique et du luxe, les universitaires de l'Université de Limoges (réputée en droit et en céramique), les touristes en route vers le Périgord et le plateau de Millevaches, et les familles limousines installées à Paris.",
        itineraire:
          "Le départ de Paris se fait par la Porte d'Orléans ou la Porte d'Italie pour rejoindre l'A6b puis l'A10 direction Orléans. À Vierzon (km 200), l'autoroute bifurque vers le sud sur l'A20 en direction de Toulouse. La première partie traverse la Beauce puis le Berry, terres céréalières plates avant de s'onduler vers Châteauroux. Après Châteauroux, le paysage change : les collines du sud du Berry et les vallées de la Creuse annoncent le Limousin. L'aire de repos d'Arnac-Pompadour (km 340) offre une pause dans un cadre verdoyant à proximité du célèbre haras de Pompadour, haut lieu de l'élevage équin. La descente vers Limoges traverse le plateau limousin, succession de collines granitiques couvertes de prairies et de forêts de châtaigniers. L'entrée dans Limoges se fait par le nord via la rocade, avec dépose possible au centre-ville (Place de la République), au quartier de la cathédrale, à la gare des Bénédictins — chef-d'œuvre Art Déco classé monument historique — ou dans les zones industrielles de la porcelaine au sud de la ville.",
        conseils:
          "Le trajet Paris — Limoges de 3h45 nécessite une pause à mi-parcours. L'aire de Châteauroux-Déols ou l'aire d'Arnac-Pompadour sont recommandées. L'A20 est l'une des rares autoroutes gratuites de France sur une grande partie de son tracé (section Vierzon — Brive), ce qui réduit le coût total. En hiver, le nord du Limousin peut être enneigé, surtout au-dessus de 500 m d'altitude : votre chauffeur est équipé de pneus hiver. Si vous visitez Limoges, ne manquez pas la gare des Bénédictins, considérée comme la plus belle gare de France avec son campanile et ses vitraux Art Déco. Les amateurs de porcelaine visiteront le musée national Adrien-Dubouché et les boutiques de la rue des Boucheries. Pour un détour gastronomique, la route vers Limoges passe non loin de Brantôme et Périgueux (1h au sud), capitales du Périgord et de la truffe.",
        comparaisonTransport:
          "Le train Paris Austerlitz → Limoges met environ 3h en Intercités pour 25 à 65 € par personne. Les horaires sont limités (4-5 trains par jour) et la ligne est souvent en retard. Le POLT (Paris-Orléans-Limoges-Toulouse) est une ligne classique, sans TGV, ce qui explique la durée comparable au taxi. Notre forfait à partir de 410 € est compétitif dès 2-3 passagers et offre le confort porte-à-porte, la flexibilité et la possibilité de combiner le transfert avec un détour par le Périgord. En voiture personnelle, comptez 22 € de péages (partiellement gratuits sur l'A20) et 45 € d'essence.",
        faq: [
          {
            question: "Quel est le prix d'un taxi Paris — Limoges ?",
            answer:
              "Le forfait est de 410 à 540 € en berline, à partir de 640 € en van. Péages, carburant et attente inclus.",
          },
          {
            question: "Combien de temps dure le trajet Paris — Limoges ?",
            answer:
              "Environ 3h45 via l'A20. Jusqu'à 4h45 aux heures de pointe ou en cas de ralentissements sur l'A10 en sortie de Paris.",
          },
          {
            question: "L'A20 est-elle gratuite ?",
            answer:
              "En partie oui : la section Vierzon — Brive est gratuite, seules les portions A10 (Paris-Vierzon) et la fin vers Limoges sont payantes. Les péages sont inclus dans notre forfait.",
          },
          {
            question: "Peut-on visiter une manufacture de porcelaine à l'arrivée ?",
            answer:
              "Oui, nous pouvons vous déposer chez Bernardaud, Royal Limoges ou au musée Adrien-Dubouché. Visites guidées sur réservation.",
          },
          {
            question: "Le taxi peut-il continuer vers le Périgord ?",
            answer:
              "Oui, Périgueux est à 1h et Brive à 1h15 de Limoges. Forfaits combinés disponibles sur demande.",
          },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Limoges | Fixed rate from €410 | TaxiNeo",
        metaDescription:
          "Book your private taxi Paris → Limoges. 392 km, ~3h45, from €410. Transfer to the porcelain capital of France.",
        heroTitle: "Taxi Paris → Limoges",
        heroSubtitle:
          "Private transfer Paris → Limoges from €410 — €540. Discover the porcelain capital.",
        description:
          "Limoges is the world capital of porcelain, renowned for Haviland, Bernardaud and Royal Limoges. The city also boasts medieval enamel heritage, the Gothic Saint-Étienne Cathedral and France's most beautiful Art Deco train station.",
        routeDescription:
          "Via the A10 and A20 motorways through Berry and into the Limousin hills. Partly toll-free on the A20.",
        introduction:
          "Limoges, world capital of porcelain since 1768, combines industrial heritage with medieval charm. The Boucherie quarter, Gothic cathedral and Art Deco Bénédictins station make it a unique destination. Gateway to the Périgord and Millevaches plateau.",
        itineraire:
          "From Paris via A10 to Vierzon, then A20 south through Berry and Châteauroux. Into the Limousin hills past Arnac-Pompadour. Arrival in Limoges via the northern ring road.",
        conseils:
          "Plan a break at Châteauroux or Arnac-Pompadour. The A20 is partly toll-free. Visit the Bénédictins station, considered France's most beautiful. Porcelain lovers should see the Adrien-Dubouché museum.",
        comparaisonTransport:
          "The Intercités train takes 3 hours for €25-65 but runs infrequently (4-5 daily). Our taxi from €410 offers door-to-door service with no delays and suits groups of 2+. The A20's toll-free section keeps costs down.",
        faq: [
          {
            question: "What is the price of a taxi Paris — Limoges?",
            answer: "€410-540 for a sedan, from €640 for a van. All-inclusive.",
          },
          {
            question: "How long does the journey take?",
            answer: "About 3h45 via the A20, up to 4h45 in heavy traffic.",
          },
          {
            question: "Is the A20 toll-free?",
            answer: "Partly yes — the Vierzon-Brive section is toll-free. All tolls are included in our rate.",
          },
          {
            question: "Can we visit a porcelain factory?",
            answer: "Yes, we can drop you at Bernardaud, Royal Limoges or the Adrien-Dubouché museum.",
          },
          {
            question: "Can we continue to the Périgord?",
            answer: "Yes, Périgueux is 1 hour from Limoges. Combined rates available.",
          },
        ],
      },
    },
  },

  // 23. PARIS → POITIERS
  {
    slug: "paris-poitiers",
    from: "Paris",
    to: "Poitiers",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 46.5802,
    toLng: 0.3404,
    distanceKm: 338,
    durationMin: 195,
    priceEstimate: "360 — 470 €",
    category: "longue-distance",
    prixMin: 360,
    prixMax: 470,
    prixVan: 570,
    dureeMax: 250,
    autoroute: "A10",
    peages: "~25 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "poitiers",
    liensInternes: ["paris-tours", "paris-bordeaux", "paris-limoges"],
    tags: ["longue-distance", "futuroscope", "patrimoine"],
    hub: "paris",
    highlights: ["A10 L'Aquitaine", "Loire Valley", "Futuroscope", "Église Notre-Dame-la-Grande", "Bataille de Poitiers"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Poitiers | Forfait dès 360 € | TaxiNeo",
        metaDescription:
          "Réservez votre taxi Paris → Poitiers. 338 km, ~3h15, forfait dès 360 €. Transfert privé vers le Futuroscope et la ville aux cent clochers.",
        heroTitle: "Taxi Paris → Poitiers",
        heroSubtitle:
          "Transfert privé Paris → Poitiers au forfait de 360 — 470 €. Futuroscope, patrimoine roman et art de vivre poitevin.",
        description:
          "Le trajet Paris — Poitiers relie la capitale à l'une des plus anciennes villes de France. Poitiers, ville aux cent clochers célèbre pour son patrimoine roman exceptionnel et le Futuroscope, est un pôle universitaire et technologique majeur du centre-ouest.",
        routeDescription:
          "L'itinéraire suit l'A10 (L'Aquitaine) en direction de Bordeaux. Traversée de la Touraine puis du Poitou.",
        introduction:
          "Poitiers, préfecture de la Vienne et métropole de 130 000 habitants, est une ville charnière de l'histoire de France. C'est ici que Charles Martel arrêta l'avancée arabe en 732, et c'est ici qu'Aliénor d'Aquitaine tint sa cour au XIIe siècle dans le palais des ducs d'Aquitaine, dont la grande salle est l'une des plus anciennes salles laïques de France. Le patrimoine roman de Poitiers est exceptionnel : l'église Notre-Dame-la-Grande, avec sa façade sculptée polychrome du XIIe siècle, est un chef-d'œuvre absolu de l'art roman ; le baptistère Saint-Jean, bâtiment paléochrétien du IVe siècle, est l'un des plus anciens édifices chrétiens de France. La ville compte plus de 80 monuments classés, d'où son surnom de « ville aux cent clochers ». Mais Poitiers est aussi résolument tournée vers l'avenir : le Futuroscope, parc de loisirs technologique créé en 1987, attire 2 millions de visiteurs par an avec ses attractions immersives et ses projections en IMAX. L'université de Poitiers, fondée en 1431, accueille 29 000 étudiants et fait de la ville un centre académique vivant. Le taxi privé Paris — Poitiers est utilisé par les familles en route vers le Futuroscope, les universitaires, les professionnels du secteur assurance et les touristes du patrimoine roman.",
        itineraire:
          "Le départ de Paris se fait par la Porte d'Orléans pour rejoindre l'A10 en direction de Bordeaux. Après Orléans et la traversée de la Beauce, l'autoroute descend vers Tours en longeant la vallée de la Loire. Les châteaux d'Amboise et de Chenonceau sont à portée de détour. Après Tours, l'A10 traverse le sud de la Touraine et entre dans le Poitou, terre de vignobles et de collines calcaires. L'aire de repos de Châtellerault-Antran (km 290) offre une pause confortable avant les derniers kilomètres. L'approche de Poitiers révèle la silhouette de la ville perchée sur un promontoire au confluent du Clain et de la Boivre. L'entrée dans Poitiers se fait par le nord via la rocade, avec dépose possible au centre historique (Place du Maréchal-Leclerc), au Futuroscope (10 km au nord de la ville), au CHU ou au campus universitaire. Le panorama depuis les hauteurs de Poitiers sur les vallées du Clain est remarquable.",
        conseils:
          "Pour le trajet Paris — Poitiers de 3h15, une pause à mi-parcours à l'aire de Tours-Val de Loire est recommandée. L'A10 est l'une des autoroutes les plus empruntées de France, surtout en période estivale : évitez les départs de vacances (premier week-end de juillet et août) et les retours (dernier week-end d'août). Le Futuroscope est pris d'assaut pendant les vacances scolaires : réservez votre taxi et vos billets à l'avance. Si vous combinez le transfert avec une visite au Futuroscope, prévoyez l'aller le matin et le retour en fin de journée — votre chauffeur peut attendre sur place ou revenir vous chercher. En hiver, le plateau poitevin est peu exposé au verglas mais peut être venteux. Le marché couvert Notre-Dame le samedi matin est un incontournable gastronomique : farci poitevin, tourteau fromager, chabichou du Poitou et broyé du Poitou.",
        comparaisonTransport:
          "Le TGV Paris Montparnasse → Poitiers met environ 1h40 pour 25 à 75 € par personne. La gare TGV de Poitiers est en centre-ville, ce qui est pratique. Mais le Futuroscope est à 10 km au nord, nécessitant un transfert supplémentaire. Notre taxi à partir de 360 € est compétitif pour une famille de 3-4 personnes en tarif TGV dernière minute, surtout avec la prise en charge à domicile à Paris et la dépose directe au Futuroscope. En voiture personnelle, comptez 25 € de péages et 40 € d'essence, mais la fatigue de 3h15 de conduite. Le forfait taxi inclut aussi la possibilité de s'arrêter en Touraine sur le chemin.",
        faq: [
          {
            question: "Quel est le prix d'un taxi Paris — Poitiers ?",
            answer:
              "Le forfait est de 360 à 470 € en berline, à partir de 570 € en van. Tout compris : péages, carburant et attente.",
          },
          {
            question: "Combien de temps dure le trajet Paris — Poitiers ?",
            answer:
              "Environ 3h15 via l'A10 en conditions normales. Prévoir jusqu'à 4h10 les jours de grands départs.",
          },
          {
            question: "Le taxi peut-il déposer directement au Futuroscope ?",
            answer:
              "Oui, nous vous déposons à l'entrée du Futuroscope sans détour. Le parc est à 10 km au nord de Poitiers, directement accessible depuis l'A10.",
          },
          {
            question: "Peut-on s'arrêter visiter un château de la Loire en chemin ?",
            answer:
              "Oui, Amboise et Chenonceau sont à un léger détour de l'A10. Supplément de 40 à 80 € selon la durée de l'arrêt.",
          },
          {
            question: "Le taxi est-il disponible pour les retours du Futuroscope ?",
            answer:
              "Oui, nous organisons le trajet aller et retour. Votre chauffeur peut attendre sur place ou revenir vous chercher en fin de journée.",
          },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Poitiers | Fixed rate from €360 | TaxiNeo",
        metaDescription:
          "Book your private taxi Paris → Poitiers. 338 km, ~3h15, from €360. Direct transfer to Futuroscope and Romanesque Poitiers.",
        heroTitle: "Taxi Paris → Poitiers",
        heroSubtitle:
          "Private transfer Paris → Poitiers from €360 — €470. Futuroscope, Romanesque heritage and Poitou charm.",
        description:
          "Poitiers, one of France's oldest cities, blends exceptional Romanesque heritage with the futuristic Futuroscope theme park. A private taxi provides direct door-to-door service, ideal for families visiting the park.",
        routeDescription:
          "Via the A10 motorway south through Tours and into the Poitou countryside.",
        introduction:
          "Poitiers is a historic treasure with Notre-Dame-la-Grande's Romanesque facade, the 4th-century Saint-Jean Baptistery and the Palace of the Dukes of Aquitaine. The nearby Futuroscope theme park draws 2 million visitors annually. A major university city with 29,000 students.",
        itineraire:
          "From Paris via A10 south through Orléans and Tours. Past Loire châteaux country. Stop at Châtellerault rest area before arriving in Poitiers on its Clain valley promontory, or directly at Futuroscope.",
        conseils:
          "Avoid holiday departure weekends on the busy A10. Book ahead for school holidays at Futuroscope. Combine transfer with a Loire château stop. Saturday morning market for Poitou specialties.",
        comparaisonTransport:
          "TGV takes 1h40 for €25-75 per person but drops you in Poitiers centre, not at Futuroscope. Our taxi from €360 suits families of 3-4 with direct Futuroscope access and possible Loire Valley stops en route.",
        faq: [
          {
            question: "What is the price of a taxi Paris — Poitiers?",
            answer: "€360-470 for a sedan, from €570 for a van. All-inclusive.",
          },
          {
            question: "How long does the journey take?",
            answer: "About 3h15 via the A10, up to 4h10 on busy holiday weekends.",
          },
          {
            question: "Can the taxi drop off at Futuroscope?",
            answer: "Yes, direct drop-off at the Futuroscope entrance, 10 km north of Poitiers on the A10.",
          },
          {
            question: "Can we stop at a Loire château on the way?",
            answer: "Yes, Amboise and Chenonceau are a short detour. Supplement of €40-80.",
          },
          {
            question: "Is return from Futuroscope available?",
            answer: "Yes, we arrange round trips. Your driver can wait or return for an evening pick-up.",
          },
        ],
      },
    },
  },

  // 24. PARIS → ANGERS
  {
    slug: "paris-angers",
    from: "Paris",
    to: "Angers",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 47.4712,
    toLng: -0.5518,
    distanceKm: 296,
    durationMin: 180,
    priceEstimate: "320 — 420 €",
    category: "longue-distance",
    prixMin: 320,
    prixMax: 420,
    prixVan: 520,
    dureeMax: 235,
    autoroute: "A11",
    peages: "~22 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "angers",
    liensInternes: ["paris-nantes", "paris-le-mans", "paris-tours"],
    tags: ["longue-distance", "patrimoine", "douceur-de-vivre"],
    hub: "paris",
    highlights: ["A11 L'Océane", "Le Mans", "Château d'Angers", "Tapisserie de l'Apocalypse", "Vignoble de l'Anjou"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Angers | Forfait dès 320 € | TaxiNeo",
        metaDescription:
          "Réservez votre taxi Paris → Angers. 296 km, ~3h, forfait dès 320 €. Transfert privé vers la capitale de l'Anjou et la douceur angevine.",
        heroTitle: "Taxi Paris → Angers",
        heroSubtitle:
          "Transfert privé Paris → Angers au forfait de 320 — 420 €. La douceur angevine et le patrimoine de la Loire.",
        description:
          "Le trajet Paris — Angers relie la capitale à la douceur angevine. Angers, ville d'art et d'histoire dominée par son château médiéval aux 17 tours et abritant la plus grande tapisserie médiévale au monde, est aussi la première ville verte de France et un pôle d'innovation en végétal.",
        routeDescription:
          "L'itinéraire emprunte l'A11 (L'Océane) en passant par Le Mans. Traversée de la Beauce, du Maine et de l'Anjou.",
        introduction:
          "Angers, préfecture du Maine-et-Loire et métropole de 300 000 habitants, est régulièrement classée parmi les villes les plus agréables à vivre de France. La « douceur angevine » chantée par le poète Du Bellay n'est pas un mythe : le climat tempéré, les parcs et jardins omniprésents et le rythme de vie mesuré en font une destination prisée. Le château d'Angers, forteresse du XIIIe siècle aux 17 tours de schiste et de tuffeau, abrite la Tapisserie de l'Apocalypse, chef-d'œuvre de 100 mètres de long commandé par le duc Louis Ier d'Anjou en 1375 — c'est la plus grande tapisserie médiévale au monde. La ville est aussi un centre d'excellence du végétal : le pôle de compétitivité Végépolys Valley, leader européen du végétal spécialisé, y est implanté avec ses 500 entreprises et centres de recherche. L'université d'Angers accueille 24 000 étudiants dans un cadre exceptionnel entre Maine et Loire. Les vignobles de l'Anjou — Savennières, Quarts de Chaume, Coteaux du Layon — produisent certains des plus grands vins blancs de Loire. Le taxi privé Paris — Angers est emprunté par les professionnels du végétal et de l'agroalimentaire, les universitaires, les touristes du patrimoine et les amateurs de vin en route vers les domaines de l'Anjou.",
        itineraire:
          "Le départ de Paris s'effectue par la Porte de Saint-Cloud pour rejoindre l'A13 puis l'A12 et l'A11 en direction de l'Ouest. La traversée de l'Île-de-France passe par Versailles et Rambouillet avant d'atteindre la Beauce chartraine. Après Le Mans (km 210), l'A11 continue plein ouest en traversant la campagne sarthoise puis entre en Anjou. Le paysage change : les plaines céréalières font place aux vignobles, aux vergers et aux pépinières qui font la réputation horticole de la région. L'aire de repos de Seiches-sur-le-Loir (km 270) offre une dernière pause avant l'arrivée. L'entrée dans Angers se fait par l'est via la rocade, avec une vue progressive sur les tours du château et les ardoisières de Trélazé. La dépose est possible au centre historique (Place du Ralliement), au château, au campus Belle-Beille, au CHU ou au quartier d'affaires de la gare Saint-Laud. La promenade du bout du monde, sur les remparts du château dominant la Maine, offre un panorama exceptionnel sur la ville et la confluence.",
        conseils:
          "Pour un trajet Paris — Angers optimal, privilégiez un départ en semaine entre 9h et 11h. L'A11 est fluide après Le Mans, mais la traversée du Maine peut être ralentie par des travaux récurrents. Une pause au Mans (aire de service, km 210) permet de couper le trajet de 3h en deux parties égales. Si vous visitez Angers, consacrez une demi-journée au château et à la Tapisserie de l'Apocalypse — l'audioguide est excellent. Les amateurs de vin prévoiront un détour par les vignobles du Layon (30 min au sud) pour déguster les Quarts de Chaume et les Coteaux du Layon, vins liquoreux d'exception. En été, le festival d'Anjou (théâtre en plein air dans les châteaux) et le festival Tempo Rives (musique sur les bords de Maine) animent la ville. La cuisine angevine est généreuse : rillauds, fouées garnies et sandre au beurre blanc sont des incontournables. Le marché Bio de la Place La Rochefoucauld le samedi matin est un des meilleurs de l'Ouest.",
        comparaisonTransport:
          "Le TGV Paris Montparnasse → Angers met environ 1h35 pour 20 à 65 € par personne. C'est rapide et pratique pour un voyageur seul. Mais dès 3 passagers, notre taxi à partir de 320 € (soit 107 € par personne) rivalise avec le TGV en tarif flexible, tout en offrant le porte-à-porte et la flexibilité. Le taxi est particulièrement avantageux quand la destination finale est un domaine viticole, une entreprise dans la zone industrielle ou une adresse en campagne angevine, inaccessibles en train. En voiture personnelle, comptez 22 € de péages et 35 € d'essence, mais 3h de conduite fatiguante sur autoroute monotone.",
        faq: [
          {
            question: "Quel est le prix d'un taxi Paris — Angers ?",
            answer:
              "Le forfait est de 320 à 420 € en berline, à partir de 520 € en van. Tout compris : péages, carburant et attente.",
          },
          {
            question: "Combien de temps dure le trajet Paris — Angers ?",
            answer:
              "Environ 3h via l'A11 en conditions normales. Jusqu'à 3h55 en cas de trafic dense en sortie de Paris.",
          },
          {
            question: "Le taxi peut-il nous emmener dans les vignobles de l'Anjou ?",
            answer:
              "Oui, nous proposons des transferts vers les domaines du Layon, de Savennières et de Saumur. Forfait dégustation sur demande.",
          },
          {
            question: "Peut-on s'arrêter au Mans en chemin ?",
            answer:
              "Oui, un arrêt au Mans (Vieux-Mans, cathédrale) est possible. Supplément de 30 à 50 € selon la durée.",
          },
          {
            question: "Le taxi dessert-il le campus universitaire d'Angers ?",
            answer:
              "Oui, nous desservons tous les campus : Belle-Beille, Saint-Serge, Santé et le campus de Cholet.",
          },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Angers | Fixed rate from €320 | TaxiNeo",
        metaDescription:
          "Book your private taxi Paris → Angers. 296 km, ~3h, from €320. Transfer to Anjou's castle city and Loire wine country.",
        heroTitle: "Taxi Paris → Angers",
        heroSubtitle:
          "Private transfer Paris → Angers from €320 — €420. Discover the gentle Anjou lifestyle.",
        description:
          "Angers, regularly ranked among France's best cities to live in, boasts a stunning medieval castle with the world's largest medieval tapestry and is the European capital of plant innovation. The surrounding Anjou vineyards produce exceptional Loire whites.",
        routeDescription:
          "Via the A11 motorway west through Le Mans into the Anjou countryside.",
        introduction:
          "Angers combines medieval heritage — its 13th-century castle houses the 100-metre Apocalypse Tapestry — with modern innovation in plant sciences. Surrounded by Anjou vineyards producing world-class whites, it's one of France's greenest and most liveable cities.",
        itineraire:
          "From Paris via A11 west through Chartres and Le Mans. Into Anjou's vineyards and nurseries. Arrival via the eastern ring road with views of the castle's 17 towers.",
        conseils:
          "Break at Le Mans (km 210). Wine lovers should detour to the Layon valley. Visit the castle and Apocalypse Tapestry. In summer, enjoy the Festival d'Anjou outdoor theatre.",
        comparaisonTransport:
          "TGV takes 1h35 for €20-65 per person. Our taxi from €320 suits groups of 3+ and provides access to vineyards and rural addresses impossible by train. Ideal for wine tourism.",
        faq: [
          {
            question: "What is the price of a taxi Paris — Angers?",
            answer: "€320-420 for a sedan, from €520 for a van. All-inclusive.",
          },
          {
            question: "How long does the journey take?",
            answer: "About 3 hours via the A11, up to 3h55 in heavy traffic.",
          },
          {
            question: "Can the taxi take us to Anjou vineyards?",
            answer: "Yes, we offer transfers to Layon, Savennières and Saumur estates. Wine tour packages available.",
          },
          {
            question: "Can we stop at Le Mans on the way?",
            answer: "Yes, a stop to visit the old town is possible for a €30-50 supplement.",
          },
          {
            question: "Does the service cover Angers university campuses?",
            answer: "Yes, we serve all campuses: Belle-Beille, Saint-Serge, Santé and Cholet.",
          },
        ],
      },
    },
  },

  // 25. PARIS → TROYES
  {
    slug: "paris-troyes",
    from: "Paris",
    to: "Troyes",
    fromLat: 48.8566,
    fromLng: 2.3522,
    toLat: 48.2973,
    toLng: 4.0744,
    distanceKm: 170,
    durationMin: 105,
    priceEstimate: "200 — 270 €",
    category: "ville-a-ville",
    prixMin: 200,
    prixMax: 270,
    prixVan: 340,
    dureeMax: 140,
    autoroute: "A5",
    peages: "~12 € (inclus)",
    departSlug: "paris",
    arriveeSlug: "troyes",
    liensInternes: ["paris-reims", "paris-nancy", "paris-dijon"],
    tags: ["ville-a-ville", "magasins-usine", "patrimoine"],
    hub: "paris",
    highlights: ["A5 Autoroute du Soleil", "Forêt de Fontainebleau", "Maisons à pans de bois", "Magasins d'usine", "Vitraux"],
    i18n: {
      fr: {
        metaTitle: "Taxi Paris → Troyes | Forfait dès 200 € | TaxiNeo",
        metaDescription:
          "Réservez votre taxi Paris → Troyes. 170 km, ~1h45, forfait dès 200 €. Transfert rapide vers la capitale du vitrail et des magasins d'usine.",
        heroTitle: "Taxi Paris → Troyes",
        heroSubtitle:
          "Transfert privé Paris → Troyes au forfait de 200 — 270 €. Patrimoine médiéval, vitraux et shopping d'usine.",
        description:
          "Le trajet Paris — Troyes relie la capitale à l'ancienne capitale de la Champagne. Troyes, célèbre pour ses maisons à pans de bois, ses vitraux exceptionnels et ses magasins d'usine de grandes marques, est une escapade idéale à 1h45 de Paris.",
        routeDescription:
          "L'itinéraire emprunte l'A5 en direction de Langres. Traversée du sud de l'Île-de-France et de la Champagne crayeuse.",
        introduction:
          "Troyes, préfecture de l'Aube et ancienne capitale des comtes de Champagne, est une ville de 140 000 habitants dans l'agglomération qui concentre un patrimoine médiéval et Renaissance exceptionnel. Son centre-ville en forme de « bouchon de champagne » — un hasard géographique devenu symbole — recèle l'une des plus importantes concentrations de maisons à pans de bois de France, avec des ruelles pittoresques comme la ruelle des Chats où les encorbellements se touchent presque. Les églises troyennes abritent la plus grande surface de vitraux anciens de France après Chartres : la cathédrale Saint-Pierre-et-Saint-Paul, l'église Sainte-Madeleine avec son jubé flamboyant unique en Champagne, et la basilique Saint-Urbain sont des joyaux de l'art gothique. Troyes est aussi la capitale française du magasin d'usine : McArthurGlen Troyes, Marques Avenue et les villages de marques attirent 4 millions de visiteurs par an pour des réductions de 30 à 70 % sur les grandes marques de mode, sport et maison (Lacoste, Petit Bateau, Le Coq Sportif — toutes originaires de Troyes). Le patrimoine textile de la ville remonte au Moyen Âge avec les foires de Champagne. Le taxi privé Paris — Troyes est utilisé par les amateurs de shopping, les touristes du patrimoine, les professionnels de l'industrie textile et les familles en route vers les lacs de la Forêt d'Orient.",
        itineraire:
          "Le départ de Paris se fait par la Porte de Bercy ou la Porte de Charenton pour rejoindre l'A5 en direction de Troyes-Langres. La traversée du sud-est de l'Île-de-France passe par Melun et Montereau, où la Seine et l'Yonne confluent. Après la sortie de l'Île-de-France, le paysage s'ouvre sur les vastes plaines de la Champagne crayeuse, paysage agricole à perte de vue ponctué de silos à grains et de villages aux clochers élancés. L'autoroute est peu fréquentée et le trajet agréable. L'aire de Villeneuve-l'Archevêque (km 130) propose une halte rapide. L'arrivée à Troyes se fait par le nord-ouest de l'agglomération, avec la possibilité de dépose directe aux magasins d'usine (sortie Saint-Julien-les-Villas), au centre historique (Place Alexandre-Israël, cathédrale), au parc des expositions ou aux lacs de la Forêt d'Orient (20 km à l'est). La vue sur les toits de Troyes depuis la route de Sainte-Savine, avec les clochers des neuf églises médiévales, est saisissante.",
        conseils:
          "Le trajet Paris — Troyes de 1h45 est suffisamment court pour ne pas nécessiter de pause. L'A5 est une autoroute peu chargée, parmi les plus fluides de France — le trajet est rarement rallongé par le trafic, sauf les samedis de départ en vacances d'hiver (stations de ski de la Haute-Marne). Pour une journée shopping optimale, arrivez avant 10h aux magasins d'usine : McArthurGlen ouvre à 10h et Marques Avenue à 10h. Les soldes en janvier et juillet offrent des réductions cumulées pouvant atteindre 80 %. Si vous combinez shopping et patrimoine, consacrez la matinée aux magasins et l'après-midi au centre historique — le circuit des maisons à pans de bois et des vitraux prend environ 2h. En été, les lacs de la Forêt d'Orient (Lac d'Orient, Lac du Temple, Lac Amance) sont des espaces de loisirs nautiques à 20 minutes. L'andouillette de Troyes, emblème culinaire de la ville, se déguste dans les boucheries du centre et les restaurants traditionnels.",
        comparaisonTransport:
          "Le train Paris Est → Troyes met environ 1h30 en TER pour 15 à 30 € par personne. Les horaires sont espacés (un train toutes les 1-2 heures) et la gare est à 15 minutes à pied du centre. Notre taxi à partir de 200 € est compétitif pour 3-4 passagers, surtout pour le shopping : le coffre d'une berline ou d'un van permet de rapporter vos achats sans contrainte de bagages. Le porte-à-porte est aussi précieux pour les visiteurs chargés de sacs qui ne veulent pas traîner dans le RER puis le TER. En voiture personnelle, comptez 12 € de péages et 20 € d'essence.",
        faq: [
          {
            question: "Quel est le prix d'un taxi Paris — Troyes ?",
            answer:
              "Le forfait est de 200 à 270 € en berline, à partir de 340 € en van. Tout compris : péages, carburant et attente.",
          },
          {
            question: "Combien de temps dure le trajet Paris — Troyes ?",
            answer:
              "Environ 1h45 via l'A5, l'une des autoroutes les plus fluides de France. Rarement plus de 2h20.",
          },
          {
            question: "Le taxi peut-il déposer directement aux magasins d'usine ?",
            answer:
              "Oui, nous vous déposons à l'entrée de McArthurGlen, Marques Avenue ou Marques City. Sortie autoroute directe.",
          },
          {
            question: "Peut-on ramener beaucoup d'achats dans le taxi ?",
            answer:
              "Oui, le coffre d'une berline ou d'un van offre un grand espace pour vos achats. Pas de limite de bagages.",
          },
          {
            question: "Le taxi dessert-il les lacs de la Forêt d'Orient ?",
            answer:
              "Oui, les lacs sont à 20 minutes de Troyes. Forfait combiné Troyes + lacs disponible sur demande.",
          },
        ],
      },
      en: {
        metaTitle: "Taxi Paris → Troyes | Fixed rate from €200 | TaxiNeo",
        metaDescription:
          "Book your private taxi Paris → Troyes. 170 km, ~1h45, from €200. Outlet shopping, medieval heritage and stained glass.",
        heroTitle: "Taxi Paris → Troyes",
        heroSubtitle:
          "Private transfer Paris → Troyes from €200 — €270. Outlet shopping, half-timbered houses and stunning stained glass.",
        description:
          "Troyes combines a beautifully preserved medieval old town with France's biggest factory outlet centre. Its champagne-cork-shaped centre has the country's finest half-timbered houses and more stained glass than anywhere except Chartres.",
        routeDescription:
          "Via the A5 motorway southeast through the Champagne plains to Troyes.",
        introduction:
          "Troyes, former capital of the Counts of Champagne, packs an extraordinary density of half-timbered houses, Gothic churches with France's second-largest collection of medieval stained glass, and 4 million annual visitors to its factory outlets (McArthurGlen, Marques Avenue). A textile capital since the medieval Champagne Fairs.",
        itineraire:
          "From Paris via Porte de Bercy onto the A5. Through the Champagne plains, one of France's quietest motorways. Arrival directly at the outlet villages or the historic centre's cobbled streets.",
        conseils:
          "No stop needed for this 1h45 trip. Arrive before 10am for best outlet shopping. Combine morning shopping with afternoon heritage walking tour. In summer, the Forêt d'Orient lakes offer water sports 20 minutes away.",
        comparaisonTransport:
          "TER train takes 1h30 for €15-30 but runs infrequently. Our taxi from €200 is ideal for groups of 3-4, especially shoppers who need boot space for purchases. Door-to-door service beats lugging bags through Paris stations.",
        faq: [
          {
            question: "What is the price of a taxi Paris — Troyes?",
            answer: "€200-270 for a sedan, from €340 for a van. All-inclusive.",
          },
          {
            question: "How long does the journey take?",
            answer: "About 1h45 via the A5, one of France's smoothest motorways. Rarely over 2h20.",
          },
          {
            question: "Can the taxi drop off at the factory outlets?",
            answer: "Yes, direct drop-off at McArthurGlen, Marques Avenue or Marques City entrances.",
          },
          {
            question: "Is there room for shopping bags?",
            answer: "Yes, sedan boots and van cargo areas offer generous space for all your purchases.",
          },
          {
            question: "Does the service cover the Forêt d'Orient lakes?",
            answer: "Yes, the lakes are 20 minutes from Troyes. Combined packages available.",
          },
        ],
      },
    },
  },

];
