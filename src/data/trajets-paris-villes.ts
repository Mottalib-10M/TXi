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
];
