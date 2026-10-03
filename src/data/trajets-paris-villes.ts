import type { Trajet } from "./trajets";

export const trajetsParisVilles: Trajet[] = [
  // ═══════════════════════════════════════════════
  // PARIS → GRANDES VILLES DE FRANCE (40 trajets)
  // ═══════════════════════════════════════════════

  // 1. PARIS → LYON

  // 2. PARIS → MARSEILLE

  // 3. PARIS → LILLE

  // 4. PARIS → TOULOUSE

  // 5. PARIS → BORDEAUX

  // 6. PARIS → NICE

  // 7. PARIS → NANTES

  // 8. PARIS → STRASBOURG

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
        metaTitle: "Taxi Paris → Montpellier | 750 km, dès 720 € | TaxiNeo",
        metaDescription:"Trajet direct A6 puis A9 en 7h10. Passage par A6/A7/A9, Vallée du Rhône, Nîmes et Place de la Comédie. Dépose à votre adresse exacte, retour possible.",
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
        metaTitle: "Taxi Paris → Montpellier | 750 km, from €720 | TaxiNeo",
        metaDescription:"Direct route via A6 then A9, 7h10. A6/A7/A9, Vallée du Rhône, Nîmes and Place de la Comédie en route. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Paris → Montpellier",
        heroSubtitle: "Private transfer Paris → Montpellier from €720–€920. Head to Languedoc in premium comfort.",
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

  // ═══════════════════════════════════════════════
  // PARIS → VILLES MOYENNES & RÉGIONALES (30 trajets)
  // ═══════════════════════════════════════════════

  // 11. PARIS → ROUEN

  // 12. PARIS → REIMS

  // 13. PARIS → AMIENS

  // 14. PARIS → TOURS

  // 15. PARIS → ORLÉANS

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
        metaTitle: "Taxi Paris → Clermont-Ferrand | 420 km, dès 430 € | TaxiNeo",
        metaDescription:"Via A71 en 4h. A71 Autoroute d'Auvergne, Viaduc de Veauce, Volcans d'Auvergne et Chaîne des Puys en chemin. Dépose à votre adresse exacte, retour possible.",
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
        metaTitle: "Taxi Paris → Clermont-Ferrand | 420 km, from €430 | TaxiNeo",
        metaDescription:"Via A71, 4 hours ride. A71 Autoroute d'Auvergne, Viaduc de Veauce, Volcans d'Auvergne and Chaîne des Puys en route. Faster and more direct than train or bus.",
        heroTitle: "Taxi Paris → Clermont-Ferrand",
        heroSubtitle:
          "Private transfer Paris → Clermont-Ferrand from €430–€560. Home pick-up, premium vehicle, professional driver 24/7.",
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
        metaTitle: "Taxi Paris → Dijon | 315 km, dès 320 €, 3h | TaxiNeo",
        metaDescription:"Via A6 en 3h. A6 Autoroute du Soleil, Vignobles de Bourgogne, Hospices de Beaune et Cité de la Gastronomie en chemin. Dépose porte-à-porte, bagages inclus.",
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
        metaDescription:"Via A6, 3 hours ride. A6 Autoroute du Soleil, Vignobles de Bourgogne, Hospices de Beaune and Cité de la Gastronomie en route. Drop-off at your exact address.",
        heroTitle: "Taxi Paris → Dijon",
        heroSubtitle:
          "Private transfer Paris → Dijon from €320–€420. Home pick-up, premium vehicle, professional driver 24/7.",
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
        metaTitle: "Taxi Paris → Metz | 330 km, dès 340 €, 3h15 | TaxiNeo",
        metaDescription:"Via A4 en 3h15. A4 Autoroute de l'Est, Centre Pompidou-Metz, Cathédrale Saint-Étienne et Place Saint-Louis en chemin. Dépose porte-à-porte, bagages inclus.",
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
        metaDescription:"Via A4, 3h15 ride. A4 Autoroute de l'Est, Centre Pompidou-Metz, Cathédrale Saint-Étienne and Place Saint-Louis en route. Drop-off at your exact address.",
        heroTitle: "Taxi Paris → Metz",
        heroSubtitle:
          "Private transfer Paris → Metz from €340–€440. Home pick-up, premium vehicle, professional driver 24/7.",
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
        metaTitle: "Taxi Paris → Nancy | 387 km, dès 400 €, 3h30 | TaxiNeo",
        metaDescription:"Via A4 en 3h30. A4 Autoroute de l'Est, Champagne, Parc naturel de Lorraine et Place Stanislas en chemin. Dépose à votre adresse exacte, retour possible.",
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
        metaDescription:"Via A4, 3h30 ride. A4 Autoroute de l'Est, Champagne, Parc naturel de Lorraine and Place Stanislas en route. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Paris → Nancy",
        heroSubtitle:
          "Private transfer Paris → Nancy from €400–€520. Home pick-up, premium vehicle, professional driver.",
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
        metaTitle: "Taxi Paris → Le Mans | 210 km, dès 250 € | TaxiNeo",
        metaDescription:"Itinéraire A11, environ 2h15. Passage par A11 L'Océane, Chartres, Circuit des 24 Heures et Vieux-Mans. Dépose à votre adresse exacte, retour possible.",
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
        metaTitle: "Taxi Paris → Le Mans | 210 km, from €250 | TaxiNeo",
        metaDescription:"A11 route, approximately 2h15. A11 L'Océane, Chartres, Circuit des 24 Heures and Vieux-Mans en route. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Paris → Le Mans",
        heroSubtitle:
          "Private transfer Paris → Le Mans from €250–€330. Door-to-door service, comfortable vehicle.",
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
        metaTitle: "Taxi Paris → Caen | 238 km, dès 280 €, 2h30 | TaxiNeo",
        metaDescription:"Par A13, 2h30 de trajet. A13 Autoroute de Normandie, Rouen, Pays d'Auge et Mémorial de Caen en chemin. Dépose à votre adresse exacte, retour possible.",
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
        metaDescription:"Direct route via A13, 2h30. A13 Autoroute de Normandie, Rouen, Pays d'Auge and Mémorial de Caen en route. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Paris → Caen",
        heroSubtitle:
          "Private transfer Paris → Caen from €280–€370. Your gateway to Normandy's history.",
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
        metaTitle: "Taxi Paris → Limoges | 392 km, dès 410 € | TaxiNeo",
        metaDescription:"Via A20 en 3h45. A20 L'Occitane, Châteauroux, Plateau de Millevaches et Porcelaine de Limoges en chemin. Dépose à votre adresse exacte, retour possible.",
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
        metaTitle: "Taxi Paris → Limoges | 392 km, from €410 | TaxiNeo",
        metaDescription:"Via A20, 3h45 ride. A20 L'Occitane, Châteauroux, Plateau de Millevaches and Porcelaine de Limoges en route. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Paris → Limoges",
        heroSubtitle:
          "Private transfer Paris → Limoges from €410–€540. Discover the porcelain capital.",
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
        metaTitle: "Taxi Paris → Poitiers | 338 km, dès 360 € | TaxiNeo",
        metaDescription:"Via A10 en 3h15. Passage par A10 L'Aquitaine, Loire Valley, Futuroscope et Église Notre-Dame-la-Grande. Dépose à votre adresse exacte, retour possible.",
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
        metaTitle: "Taxi Paris → Poitiers | 338 km, from €360 | TaxiNeo",
        metaDescription:"Via A10, 3h15 ride. A10 L'Aquitaine, Loire Valley, Futuroscope and Église Notre-Dame-la-Grande en route. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Paris → Poitiers",
        heroSubtitle:
          "Private transfer Paris → Poitiers from €360–€470. Futuroscope, Romanesque heritage and Poitou charm.",
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
        metaTitle: "Taxi Paris → Angers | 296 km, dès 320 €, 3h | TaxiNeo",
        metaDescription:"Par A11, 3h de trajet. A11 L'Océane, Le Mans, Château d'Angers et Tapisserie de l'Apocalypse en chemin. Dépose à votre adresse exacte, retour possible.",
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
        metaDescription:"Via A11, 3 hours ride. A11 L'Océane, Le Mans, Château d'Angers and Tapisserie de l'Apocalypse en route. Drop-off at your exact address, return available.",
        heroTitle: "Taxi Paris → Angers",
        heroSubtitle:
          "Private transfer Paris → Angers from €320–€420. Discover the gentle Anjou lifestyle.",
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
        metaTitle: "Taxi Paris → Troyes | 170 km, dès 200 €, 1h45 | TaxiNeo",
        metaDescription:"Via A5 en 1h45. A5 Autoroute du Soleil, Forêt de Fontainebleau, Maisons à pans de bois et Magasins d'usine en chemin. Dépose porte-à-porte, bagages inclus.",
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
        metaDescription:"Via A5, 1h45 ride. A5 Autoroute du Soleil, Forêt de Fontainebleau, Maisons à pans de bois and Magasins d'usine en route. Drop-off at your exact address.",
        heroTitle: "Taxi Paris → Troyes",
        heroSubtitle:
          "Private transfer Paris → Troyes from €200–€270. Outlet shopping, half-timbered houses and stunning stained glass.",
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
