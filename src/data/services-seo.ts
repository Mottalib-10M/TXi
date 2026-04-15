export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceI18n {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  description: string;
  benefits: string[];
  faq: ServiceFAQ[];
  detailedDescription?: string;
  useCases?: string;
  howItWorks?: string;
}

export interface ServiceSeo {
  slug: string;
  title: string;
  icon: string;
  category: "transport" | "special" | "premium";
  i18n: {
    fr: ServiceI18n;
    en: ServiceI18n;
  };
}

export const services: ServiceSeo[] = [
  {
    slug: "taxi-7-places",
    title: "Taxi 7 places",
    icon: "solar:users-group-rounded-linear",
    category: "transport",
    i18n: {
      fr: {
        metaTitle: "Taxi 7 places : réservez un minivan pour groupe | TaxiNeo",
        metaDescription:
          "Réservez un taxi 7 places en France pour vos déplacements en groupe, en famille ou entre amis. Minivan spacieux, prix fixe garanti, réservation en ligne 24h/24.",
        heroTitle: "Taxi 7 places",
        heroSubtitle:
          "Voyagez en groupe confortablement dans un minivan spacieux. Idéal pour les familles nombreuses et les groupes d'amis.",
        description:
          "Le taxi 7 places est la solution idéale pour les trajets en groupe sans se séparer. Nos minivans offrent un espace généreux pour les passagers et leurs bagages. Que ce soit pour un transfert aéroport en famille ou une sortie entre amis, profitez du confort d'un véhicule spacieux avec chauffeur professionnel.",
        benefits: [
          "Minivan spacieux avec 7 sièges confortables",
          "Grand coffre pour tous vos bagages",
          "Prix fixe pour tout le groupe, pas par personne",
          "Sièges enfant disponibles sur demande",
          "Idéal pour transferts aéroport en famille",
        ],
        faq: [
          {
            question: "Combien de passagers peut accueillir un taxi 7 places ?",
            answer:
              "Nos taxis 7 places accueillent jusqu'à 7 passagers confortablement, avec un espace bagage suffisant pour 7 valises cabine ou 4 grandes valises.",
          },
          {
            question: "Le prix est-il plus élevé qu'un taxi classique ?",
            answer:
              "Le tarif est légèrement supérieur à un taxi standard, mais le prix est fixé par course et non par passager. Pour un groupe de 5 à 7 personnes, c'est souvent plus économique que deux taxis.",
          },
          {
            question: "Peut-on installer des sièges enfant dans un taxi 7 places ?",
            answer:
              "Oui, nos chauffeurs peuvent installer des sièges auto et rehausseurs sur demande. Précisez le nombre et l'âge des enfants lors de la réservation.",
          },
          {
            question: "Quels types de véhicules sont utilisés ?",
            answer:
              "Nos taxis 7 places sont des minivans récents type Mercedes Classe V, Volkswagen Caravelle ou Ford Tourneo. Tous climatisés et parfaitement entretenus.",
          },
        ],
        detailedDescription:
          "Le taxi 7 places représente la solution de transport collectif la plus demandée en France pour les familles nombreuses et les groupes de voyageurs. Nos minivans de référence — Mercedes Classe V, Renault Trafic Passenger et Volkswagen Caravelle — sont sélectionnés pour leur habitacle généreux, leur confort de suspension et leur volume de coffre capable d'accueillir simultanément 7 passagers et leurs bagages. Chaque véhicule dispose de la climatisation bi-zone, de prises USB à chaque rangée et de sièges ergonomiques inclinables. Le taxi 7 places est particulièrement plébiscité pour les transferts aéroport en famille, où la possibilité de voyager ensemble dans un seul véhicule évite le stress de se séparer entre deux taxis classiques. Nos chauffeurs professionnels, titulaires de la carte T, connaissent les itinéraires optimaux et adaptent leur conduite au confort de tous les passagers, y compris les enfants en bas âge. Le prix est calculé par course et non par passager, ce qui rend le taxi 7 places nettement plus économique qu'un VTC classique dès que vous voyagez à cinq personnes ou plus.",
        useCases:
          "Les familles avec enfants utilisent le taxi 7 places pour les transferts entre domicile et aéroport, gare ou lieu de vacances, en profitant d'un seul véhicule spacieux avec sièges enfant installés à la demande. Les groupes d'amis le réservent pour les week-ends de mariage, les sorties culturelles ou les événements sportifs, évitant ainsi la contrainte de désigner un conducteur. Les professionnels en déplacement collectif choisissent cette formule pour rejoindre un salon, un séminaire ou un site client, tout en travaillant à bord grâce au WiFi et aux prises de recharge. Enfin, les seniors voyageant en petit groupe apprécient le confort et l'assistance du chauffeur pour charger et décharger les bagages.",
        howItWorks:
          "Réservez en ligne sur TaxiNeo en sélectionnant l'option « 7 places ». Indiquez le nombre de passagers, le nombre de bagages et précisez si vous avez besoin de sièges enfant. Vous recevez instantanément un prix fixe garanti. Le jour J, votre chauffeur vous attend à l'adresse indiquée avec un minivan spacieux, aide au chargement des bagages et vous conduit à destination en toute sérénité.",
      },
      en: {
        metaTitle: "7-Seater Taxi: book a minivan for groups | TaxiNeo",
        metaDescription:
          "Book a 7-seater taxi in France for group, family or friends trips. Spacious minivan, guaranteed fixed price, online booking 24/7.",
        heroTitle: "7-Seater Taxi",
        heroSubtitle:
          "Travel comfortably as a group in a spacious minivan. Perfect for large families and groups of friends.",
        description:
          "The 7-seater taxi is the ideal solution for group trips without splitting up. Our minivans offer generous space for passengers and their luggage. Whether for a family airport transfer or an outing with friends, enjoy the comfort of a spacious vehicle with a professional driver.",
        benefits: [
          "Spacious minivan with 7 comfortable seats",
          "Large boot for all your luggage",
          "Fixed price for the whole group, not per person",
          "Child seats available on request",
          "Perfect for family airport transfers",
        ],
        faq: [
          {
            question: "How many passengers can a 7-seater taxi accommodate?",
            answer:
              "Our 7-seater taxis comfortably accommodate up to 7 passengers, with enough luggage space for 7 cabin bags or 4 large suitcases.",
          },
          {
            question: "Is the price higher than a standard taxi?",
            answer:
              "The fare is slightly higher than a standard taxi, but the price is set per trip, not per passenger. For a group of 5 to 7 people, it is often more economical than two taxis.",
          },
          {
            question: "Can child seats be installed in a 7-seater taxi?",
            answer:
              "Yes, our drivers can install car seats and booster seats on request. Specify the number and age of children when booking.",
          },
          {
            question: "What types of vehicles are used?",
            answer:
              "Our 7-seater taxis are recent minivans such as Mercedes V-Class, Volkswagen Caravelle or Ford Tourneo. All air-conditioned and perfectly maintained.",
          },
        ],
        detailedDescription:
          "The 7-seater taxi is the most popular group transport solution in France for large families and travelling groups. Our flagship minivans — Mercedes V-Class, Renault Trafic Passenger and Volkswagen Caravelle — are selected for their spacious cabin, smooth suspension and boot volume capable of carrying 7 passengers and their luggage simultaneously. Each vehicle features dual-zone climate control, USB ports at every row and ergonomic reclining seats. The 7-seater taxi is especially popular for family airport transfers, where travelling together in a single vehicle eliminates the stress of splitting between two standard taxis. Our professional drivers, fully licensed and vetted, know the optimal routes and adapt their driving for the comfort of all passengers, including young children. The fare is calculated per trip rather than per passenger, making the 7-seater taxi significantly more economical than a standard ride-hailing car once you travel with five or more people.",
        useCases:
          "Families with children use the 7-seater taxi for transfers between home and airport, train station or holiday destination, enjoying a single spacious vehicle with child seats fitted on request. Groups of friends book it for wedding weekends, cultural outings or sporting events, avoiding the need to designate a driver. Business teams on group trips choose this option to reach a trade show, seminar or client site while working on board thanks to WiFi and charging ports. Seniors travelling in small groups appreciate the comfort and the driver's assistance with loading and unloading luggage.",
        howItWorks:
          "Book online on TaxiNeo by selecting the '7-seater' option. Enter the number of passengers, amount of luggage and specify if you need child seats. You instantly receive a guaranteed fixed price. On the day, your driver meets you at the specified address with a spacious minivan, helps load luggage and drives you to your destination in complete comfort.",
      },
    },
  },
  {
    slug: "taxi-van",
    title: "Taxi Van",
    icon: "mdi:van-utility",
    category: "transport",
    i18n: {
      fr: {
        metaTitle: "Taxi Van : transport de groupe jusqu'à 8 passagers | TaxiNeo",
        metaDescription:
          "Réservez un taxi van pour vos déplacements en grand groupe. Jusqu'à 8 passagers, bagages volumineux, prix fixe. Réservation en ligne.",
        heroTitle: "Taxi Van",
        heroSubtitle:
          "Le taxi van pour vos déplacements en grand groupe avec bagages volumineux. Confort et espace garantis.",
        description:
          "Le taxi van est conçu pour les groupes ayant besoin d'un espace maximal. Idéal pour les transferts aéroport avec de nombreux bagages, les séminaires d'entreprise ou les événements sportifs. Nos vans offrent un confort premium avec un espace de rangement exceptionnel.",
        benefits: [
          "Capacité jusqu'à 8 passagers",
          "Espace bagage XXL pour valises et équipements",
          "Parfait pour séminaires et événements",
          "Climatisation zone arrière indépendante",
          "Chargement facilité par portes coulissantes",
        ],
        faq: [
          {
            question: "Quelle est la différence entre un taxi van et un taxi 7 places ?",
            answer:
              "Le taxi van offre un espace de chargement nettement supérieur et peut accueillir jusqu'à 8 passagers. Il est idéal quand vous avez beaucoup de bagages ou d'équipements en plus des passagers.",
          },
          {
            question: "Peut-on transporter du matériel volumineux en taxi van ?",
            answer:
              "Oui, nos taxis van sont adaptés au transport de matériel volumineux : équipements sportifs, instruments de musique, matériel événementiel. Précisez les dimensions lors de la réservation.",
          },
          {
            question: "Le taxi van est-il disponible pour les longues distances ?",
            answer:
              "Absolument. Nos taxis van sont parfaitement adaptés aux longs trajets avec tout le confort nécessaire : climatisation, prises USB, sièges inclinables.",
          },
          {
            question: "Quel est le délai de réservation pour un taxi van ?",
            answer:
              "Nous recommandons de réserver au moins 24 heures à l'avance pour garantir la disponibilité d'un van. En cas d'urgence, nous faisons notre possible pour répondre sous 2 heures.",
          },
        ],
        detailedDescription:
          "Le taxi van est la solution de transport grand format pour les groupes de 8 à 9 passagers nécessitant un espace de chargement supérieur à celui d'un minivan classique. Nos vans — Mercedes Sprinter, Ford Transit Custom et Peugeot Traveller — offrent un habitacle haut de plafond, des portes coulissantes latérales pour un embarquement facilité et un volume de coffre pouvant accueillir valises, équipements sportifs ou matériel professionnel. La climatisation arrière indépendante garantit un confort optimal quelle que soit la saison. Le taxi van est le choix privilégié des entreprises organisant des séminaires, des équipes sportives en déplacement et des groupes participant à des voyages organisés ou des événements culturels. Chaque van est équipé de prises 220V, du WiFi embarqué et de sièges inclinables avec appuie-tête réglables. Nos chauffeurs, expérimentés dans la conduite de véhicules grand gabarit, assurent une conduite souple et anticipative, même sur autoroute ou en zone urbaine dense. Le tarif unique par course rend le van particulièrement avantageux pour les grands groupes comparé à la réservation de plusieurs taxis séparés.",
        useCases:
          "Les entreprises réservent le taxi van pour transporter leurs collaborateurs lors de séminaires, team buildings ou salons professionnels, en combinant gain de temps et esprit d'équipe. Les associations sportives l'utilisent pour les déplacements de compétition, avec assez de place pour les joueurs, les sacs de sport et le matériel technique. Les agences de voyage et tours opérateurs le choisissent pour les excursions journée et les circuits touristiques en petit groupe. Les familles élargies et groupes d'amis le réservent pour les mariages, fêtes de famille ou week-ends de célébration, bénéficiant d'un seul véhicule confortable pour tout le monde.",
        howItWorks:
          "Sélectionnez l'option « Van » lors de votre réservation sur TaxiNeo. Précisez le nombre exact de passagers, la quantité et le type de bagages ou équipements. Recevez votre devis instantané à prix fixe. Le jour prévu, le chauffeur arrive avec le van, ouvre les portes coulissantes pour faciliter le chargement et vous accompagne jusqu'à votre destination dans un confort spacieux.",
      },
      en: {
        metaTitle: "Taxi Van: group transport up to 8 passengers | TaxiNeo",
        metaDescription:
          "Book a taxi van for your large group trips. Up to 8 passengers, oversized luggage, fixed price. Online booking available.",
        heroTitle: "Taxi Van",
        heroSubtitle:
          "The taxi van for your large group trips with oversized luggage. Comfort and space guaranteed.",
        description:
          "The taxi van is designed for groups needing maximum space. Ideal for airport transfers with lots of luggage, corporate seminars or sporting events. Our vans offer premium comfort with exceptional storage space.",
        benefits: [
          "Capacity up to 8 passengers",
          "XXL luggage space for suitcases and equipment",
          "Perfect for seminars and events",
          "Independent rear air conditioning",
          "Easy loading through sliding doors",
        ],
        faq: [
          {
            question: "What is the difference between a taxi van and a 7-seater taxi?",
            answer:
              "The taxi van offers significantly more loading space and can accommodate up to 8 passengers. It is ideal when you have lots of luggage or equipment in addition to passengers.",
          },
          {
            question: "Can bulky equipment be transported in a taxi van?",
            answer:
              "Yes, our taxi vans are suitable for transporting bulky items: sports equipment, musical instruments, event materials. Specify the dimensions when booking.",
          },
          {
            question: "Is the taxi van available for long distances?",
            answer:
              "Absolutely. Our taxi vans are perfectly suited for long journeys with all the necessary comfort: air conditioning, USB ports, reclining seats.",
          },
          {
            question: "How far in advance should I book a taxi van?",
            answer:
              "We recommend booking at least 24 hours in advance to guarantee van availability. In case of emergency, we do our best to respond within 2 hours.",
          },
        ],
        detailedDescription:
          "The taxi van is the large-format transport solution for groups of 8 to 9 passengers requiring more loading space than a standard minivan. Our vans — Mercedes Sprinter, Ford Transit Custom and Peugeot Traveller — feature a high-ceiling cabin, lateral sliding doors for easy boarding and a boot volume capable of accommodating suitcases, sports equipment or professional gear. Independent rear climate control ensures optimal comfort regardless of the season. The taxi van is the preferred choice for companies organising seminars, sports teams on the move and groups attending organised trips or cultural events. Each van is equipped with 220V outlets, onboard WiFi and reclining seats with adjustable headrests. Our drivers, experienced in handling large vehicles, ensure smooth and anticipatory driving, even on motorways or in dense urban areas. The single per-trip fare makes the van particularly advantageous for large groups compared to booking several separate taxis.",
        useCases:
          "Businesses book the taxi van to transport their teams to seminars, team-building events or trade fairs, combining time savings with team spirit. Sports clubs use it for competition travel, with ample room for players, sports bags and technical equipment. Travel agencies and tour operators choose it for day excursions and small-group sightseeing tours. Extended families and friend groups reserve it for weddings, family celebrations or weekend getaways, benefiting from a single comfortable vehicle for everyone.",
        howItWorks:
          "Select the 'Van' option when booking on TaxiNeo. Specify the exact number of passengers, the quantity and type of luggage or equipment. Receive your instant fixed-price quote. On the scheduled day, the driver arrives with the van, opens the sliding doors for easy loading and accompanies you to your destination in spacious comfort.",
      },
    },
  },
  {
    slug: "taxi-pmr",
    title: "Taxi PMR",
    icon: "solar:wheelchair-linear",
    category: "special",
    i18n: {
      fr: {
        metaTitle: "Taxi PMR : transport adapté handicap et mobilité réduite | TaxiNeo",
        metaDescription:
          "Réservez un taxi PMR adapté aux personnes à mobilité réduite. Véhicules accessibles fauteuil roulant, rampe d'accès, chauffeur formé. Prix fixe garanti.",
        heroTitle: "Taxi PMR",
        heroSubtitle:
          "Transport adapté aux personnes à mobilité réduite. Véhicules accessibles et chauffeurs formés à votre service.",
        description:
          "Notre service de taxi PMR garantit un transport digne et confortable pour les personnes à mobilité réduite. Tous nos véhicules adaptés sont équipés de rampes d'accès ou de plateformes élévatrices pour fauteuil roulant. Nos chauffeurs sont spécialement formés à l'accompagnement des personnes handicapées.",
        benefits: [
          "Véhicules équipés de rampes d'accès fauteuil roulant",
          "Chauffeurs formés à l'accompagnement PMR",
          "Système d'arrimage sécurisé pour fauteuil roulant",
          "Assistance au montée et descente du véhicule",
          "Réservation simplifiée par téléphone ou en ligne",
        ],
        faq: [
          {
            question: "Quels types de fauteuils roulants sont acceptés ?",
            answer:
              "Nos véhicules PMR acceptent tous les types de fauteuils roulants : manuels, électriques et scooters de mobilité. La rampe supporte jusqu'à 300 kg.",
          },
          {
            question: "Le chauffeur aide-t-il à monter dans le véhicule ?",
            answer:
              "Oui, tous nos chauffeurs PMR sont formés pour assister les passagers lors de la montée et de la descente du véhicule, ainsi que pour l'arrimage sécurisé du fauteuil.",
          },
          {
            question: "Faut-il un bon de transport pour un taxi PMR ?",
            answer:
              "Non, aucun bon de transport n'est nécessaire pour réserver un taxi PMR avec TaxiNeo. En revanche, si vous disposez d'une prescription médicale de transport, consultez notre service de taxi conventionné.",
          },
          {
            question: "Le taxi PMR coûte-t-il plus cher qu'un taxi classique ?",
            answer:
              "Un léger supplément peut s'appliquer en raison du véhicule spécialisé, mais nos tarifs restent compétitifs. Le prix fixe est communiqué à la réservation, sans surprise.",
          },
        ],
        detailedDescription:
          "Le taxi PMR (Personne à Mobilité Réduite) de TaxiNeo est un service de transport spécialement conçu pour garantir l'accessibilité et la dignité des personnes en fauteuil roulant ou souffrant de handicaps moteurs. Nos véhicules adaptés sont équipés de rampes d'accès homologuées ou de plateformes élévatrices hydrauliques capables de supporter des fauteuils roulants manuels, électriques et scooters de mobilité jusqu'à 300 kg. Un système d'arrimage certifié maintient le fauteuil fermement en place pendant tout le trajet, assurant une sécurité maximale même en cas de freinage brusque. Nos chauffeurs suivent une formation spécifique à l'accompagnement des personnes handicapées, couvrant les gestes d'assistance, la communication bienveillante et les protocoles de sécurité. Le plancher surbaissé et l'espace intérieur élargi permettent une installation confortable sans transfert obligatoire hors du fauteuil. Ce service répond aux exigences de la loi sur l'accessibilité des transports et convient aussi bien aux déplacements quotidiens qu'aux rendez-vous médicaux, sorties familiales ou voyages. Le transport médical conventionné CPAM est possible via nos chauffeurs partenaires agréés.",
        useCases:
          "Les personnes en fauteuil roulant utilisent le taxi PMR pour leurs rendez-vous médicaux réguliers — consultations hospitalières, séances de kinésithérapie ou dialyse — avec la garantie d'un véhicule parfaitement adapté à chaque trajet. Les familles accompagnant un proche handicapé le réservent pour les sorties culturelles, les visites familiales ou les déplacements vers les centres de rééducation. Les établissements de soins et les associations d'aide aux personnes handicapées font appel à ce service pour organiser les transferts de leurs résidents ou adhérents. Les professionnels en fauteuil roulant choisissent le taxi PMR pour leurs déplacements d'affaires, garantissant ponctualité et accessibilité à chaque rendez-vous.",
        howItWorks:
          "Lors de la réservation en ligne sur TaxiNeo, sélectionnez l'option « PMR / Fauteuil roulant ». Précisez le type de fauteuil (manuel, électrique ou scooter) et ses dimensions si nécessaire. Un véhicule adapté avec rampe ou plateforme élévatrice est attribué automatiquement. Le chauffeur formé arrive, déploie la rampe, vous assiste pour l'installation et sécurise l'arrimage du fauteuil avant le départ.",
      },
      en: {
        metaTitle: "Wheelchair Accessible Taxi: adapted transport for reduced mobility | TaxiNeo",
        metaDescription:
          "Book a wheelchair accessible taxi adapted for people with reduced mobility. Wheelchair-accessible vehicles, ramp access, trained driver. Guaranteed fixed price.",
        heroTitle: "Wheelchair Accessible Taxi",
        heroSubtitle:
          "Transport adapted for people with reduced mobility. Accessible vehicles and trained drivers at your service.",
        description:
          "Our wheelchair accessible taxi service guarantees dignified and comfortable transport for people with reduced mobility. All our adapted vehicles are equipped with access ramps or lift platforms for wheelchairs. Our drivers are specially trained in assisting people with disabilities.",
        benefits: [
          "Vehicles equipped with wheelchair access ramps",
          "Drivers trained in disability assistance",
          "Secure wheelchair restraint system",
          "Assistance getting in and out of the vehicle",
          "Simplified booking by phone or online",
        ],
        faq: [
          {
            question: "What types of wheelchairs are accepted?",
            answer:
              "Our accessible vehicles accept all types of wheelchairs: manual, electric and mobility scooters. The ramp supports up to 300 kg.",
          },
          {
            question: "Does the driver help getting into the vehicle?",
            answer:
              "Yes, all our accessible taxi drivers are trained to assist passengers getting in and out of the vehicle, as well as securing the wheelchair safely.",
          },
          {
            question: "Do I need a transport voucher for an accessible taxi?",
            answer:
              "No transport voucher is needed to book an accessible taxi with TaxiNeo. However, if you have a medical transport prescription, check our conventional taxi service.",
          },
          {
            question: "Does an accessible taxi cost more than a standard taxi?",
            answer:
              "A small surcharge may apply due to the specialised vehicle, but our rates remain competitive. The fixed price is communicated at booking, with no surprises.",
          },
        ],
        detailedDescription:
          "The TaxiNeo wheelchair accessible taxi is a transport service specifically designed to guarantee accessibility and dignity for people in wheelchairs or with motor disabilities. Our adapted vehicles are fitted with approved access ramps or hydraulic lift platforms capable of supporting manual wheelchairs, electric wheelchairs and mobility scooters up to 300 kg. A certified restraint system holds the wheelchair firmly in place throughout the journey, ensuring maximum safety even during sudden braking. Our drivers undergo specific training in assisting people with disabilities, covering assistance techniques, compassionate communication and safety protocols. The lowered floor and widened interior space allow comfortable installation without requiring a transfer out of the wheelchair. This service meets transport accessibility law requirements and is suitable for daily travel, medical appointments, family outings and longer trips. CPAM-approved medical transport is available through our licensed partner drivers.",
        useCases:
          "People in wheelchairs use the accessible taxi for regular medical appointments — hospital consultations, physiotherapy sessions or dialysis — with the assurance of a perfectly adapted vehicle for every journey. Families accompanying a disabled relative book it for cultural outings, family visits or travel to rehabilitation centres. Healthcare facilities and disability support organisations use this service to arrange transfers for their residents or members. Wheelchair-using professionals choose the accessible taxi for business travel, guaranteeing punctuality and accessibility at every meeting.",
        howItWorks:
          "When booking online on TaxiNeo, select the 'Wheelchair Accessible' option. Specify the type of wheelchair (manual, electric or scooter) and its dimensions if necessary. An adapted vehicle with ramp or lift platform is automatically assigned. The trained driver arrives, deploys the ramp, assists you with boarding and secures the wheelchair restraints before departure.",
      },
    },
  },
  {
    slug: "taxi-mariage",
    title: "Taxi Mariage",
    icon: "mdi:ring",
    category: "special",
    i18n: {
      fr: {
        metaTitle: "Taxi Mariage : voiture avec chauffeur pour votre jour J | TaxiNeo",
        metaDescription:
          "Réservez un taxi mariage élégant avec chauffeur pour votre jour J. Véhicule décoré, ponctualité garantie, service premium. Devis personnalisé.",
        heroTitle: "Taxi Mariage",
        heroSubtitle:
          "Rendez votre jour J inoubliable avec un service de transport élégant et ponctuel pour les mariés et leurs invités.",
        description:
          "Votre mariage mérite un service de transport à la hauteur de l'événement. Nos taxis mariage offrent des véhicules haut de gamme avec chauffeur en tenue, décoration florale possible et un service irréprochable. De la mairie à la salle de réception, nous assurons chaque déplacement avec élégance et ponctualité.",
        benefits: [
          "Véhicules haut de gamme type berline ou SUV premium",
          "Chauffeur en tenue élégante",
          "Décoration du véhicule possible (fleurs, rubans)",
          "Organisation du transport de tous les invités",
          "Ponctualité absolue garantie",
        ],
        faq: [
          {
            question: "Quels véhicules sont disponibles pour un mariage ?",
            answer:
              "Nous proposons des berlines premium (Mercedes Classe E, BMW Série 5), des SUV de luxe et des minivans pour les invités. Tous sont récents, impeccables et décorables.",
          },
          {
            question: "Peut-on décorer le véhicule pour le mariage ?",
            answer:
              "Oui, nous pouvons décorer le véhicule avec des fleurs, des rubans et des nœuds selon vos souhaits. Parlez-en lors de la réservation pour organiser les détails.",
          },
          {
            question: "Combien de temps à l'avance faut-il réserver ?",
            answer:
              "Pour un mariage, nous recommandons de réserver au moins 1 mois à l'avance, surtout en haute saison (mai à septembre). Plus tôt vous réservez, plus le choix de véhicules est large.",
          },
          {
            question: "Pouvez-vous transporter tous les invités du mariage ?",
            answer:
              "Oui, nous pouvons organiser le transport de tous vos invités avec une flotte de véhicules coordonnés. Nous proposons un devis global pour le transport complet du mariage.",
          },
        ],
        detailedDescription:
          "Le taxi mariage TaxiNeo transforme chaque déplacement de votre jour J en un moment d'élégance et de sérénité. Nous proposons une sélection de berlines premium — Mercedes Classe E et Classe S, BMW Série 5 et Série 7, Audi A6 et A8 — toutes récentes, immaculées et disponibles en coloris sobre (noir, blanc nacré, gris anthracite). La décoration du véhicule est réalisée selon vos souhaits : compositions florales assorties au thème du mariage, rubans de satin, noeud sur le capot et guirlandes discrètes. Le chauffeur, en costume sombre et gants blancs, assure un service protocolaire : ouverture de porte, assistance à la descente de la mariée, timing millimétré entre mairie, lieu de culte, séance photo et salle de réception. Nous coordonnons également le transport de tous les invités grâce à une flotte de véhicules dédiés — berlines, minivans et vans — avec un planning horaire précis communiqué à chaque chauffeur. Le véhicule des mariés reste à disposition pendant toute la durée de la cérémonie et des photos, garantissant une liberté totale sans contrainte de temps.",
        useCases:
          "Les mariés réservent le taxi mariage pour leur transfert entre le domicile, la mairie, le lieu de culte et la salle de réception, avec un véhicule décoré et un chauffeur au service protocolaire impeccable. Les témoins et demoiselles d'honneur bénéficient d'un transport coordonné pour arriver ensemble et à l'heure aux différents lieux. Les familles des mariés organisent le transport des parents, grands-parents et proches, notamment les personnes âgées nécessitant un accompagnement attentionné. Les wedding planners font appel à TaxiNeo pour gérer la logistique transport de A à Z, avec un interlocuteur unique et un planning partagé en temps réel.",
        howItWorks:
          "Contactez TaxiNeo en précisant la date du mariage, le nombre de véhicules souhaités, les lieux et horaires de chaque étape. Nous élaborons un devis personnalisé incluant la décoration, le nombre de chauffeurs et le planning détaillé. Après validation, chaque chauffeur reçoit son itinéraire. Le jour J, les véhicules décorés arrivent en avance, prêts à rendre votre mariage inoubliable.",
      },
      en: {
        metaTitle: "Wedding Taxi: chauffeured car for your big day | TaxiNeo",
        metaDescription:
          "Book an elegant wedding taxi with chauffeur for your big day. Decorated vehicle, guaranteed punctuality, premium service. Custom quote available.",
        heroTitle: "Wedding Taxi",
        heroSubtitle:
          "Make your big day unforgettable with an elegant and punctual transport service for the couple and their guests.",
        description:
          "Your wedding deserves a transport service that matches the occasion. Our wedding taxis offer high-end vehicles with a suited chauffeur, optional floral decoration and impeccable service. From the town hall to the reception venue, we ensure every journey with elegance and punctuality.",
        benefits: [
          "High-end vehicles: premium sedan or SUV",
          "Chauffeur in elegant attire",
          "Vehicle decoration available (flowers, ribbons)",
          "Transport organisation for all guests",
          "Absolute punctuality guaranteed",
        ],
        faq: [
          {
            question: "What vehicles are available for a wedding?",
            answer:
              "We offer premium sedans (Mercedes E-Class, BMW 5 Series), luxury SUVs and minivans for guests. All are recent, spotless and can be decorated.",
          },
          {
            question: "Can the vehicle be decorated for the wedding?",
            answer:
              "Yes, we can decorate the vehicle with flowers, ribbons and bows according to your wishes. Discuss this when booking to arrange the details.",
          },
          {
            question: "How far in advance should I book?",
            answer:
              "For a wedding, we recommend booking at least 1 month in advance, especially during peak season (May to September). The earlier you book, the wider the vehicle choice.",
          },
          {
            question: "Can you transport all wedding guests?",
            answer:
              "Yes, we can organise transport for all your guests with a coordinated fleet of vehicles. We offer a comprehensive quote for the entire wedding transport.",
          },
        ],
        detailedDescription:
          "The TaxiNeo wedding taxi transforms every journey on your big day into a moment of elegance and serenity. We offer a selection of premium sedans — Mercedes E-Class and S-Class, BMW 5 Series and 7 Series, Audi A6 and A8 — all recent, immaculate and available in understated colours (black, pearl white, anthracite grey). Vehicle decoration is carried out according to your wishes: floral arrangements matching the wedding theme, satin ribbons, bonnet bows and subtle garlands. The chauffeur, in a dark suit and white gloves, provides a ceremonial service: door opening, assistance for the bride, precisely timed transfers between the town hall, place of worship, photo session and reception venue. We also coordinate transport for all guests through a dedicated fleet — sedans, minivans and vans — with a precise timetable communicated to each driver. The couple's vehicle remains at your disposal throughout the ceremony and photos, guaranteeing complete freedom with no time constraints.",
        useCases:
          "The couple books the wedding taxi for their transfer between home, town hall, place of worship and reception venue, with a decorated vehicle and a chauffeur providing impeccable ceremonial service. Best men and bridesmaids benefit from coordinated transport to arrive together and on time at each venue. The families of the couple arrange transport for parents, grandparents and close relatives, particularly elderly guests requiring attentive assistance. Wedding planners call on TaxiNeo to manage transport logistics from start to finish, with a single point of contact and a shared real-time schedule.",
        howItWorks:
          "Contact TaxiNeo specifying the wedding date, number of vehicles required, venues and timings for each stage. We prepare a personalised quote including decoration, number of chauffeurs and detailed schedule. After confirmation, each driver receives their itinerary. On the big day, decorated vehicles arrive early, ready to make your wedding unforgettable.",
      },
    },
  },
  {
    slug: "taxi-evenement",
    title: "Taxi Événement",
    icon: "solar:calendar-linear",
    category: "special",
    i18n: {
      fr: {
        metaTitle: "Taxi Événement : transport pour concerts, salons et soirées | TaxiNeo",
        metaDescription:
          "Réservez un taxi pour vos événements : concerts, salons, soirées, conférences. Service ponctuel, prix fixe, retour garanti. Réservation en ligne.",
        heroTitle: "Taxi Événement",
        heroSubtitle:
          "Transport fiable et ponctuel pour tous vos événements. Concerts, salons, galas, conférences : arrivez et repartez sereinement.",
        description:
          "Ne laissez pas le transport gâcher votre soirée. Notre service taxi événement vous assure un aller et un retour fiables pour tous vos événements. Que ce soit un concert au Stade de France, un salon au Parc des Expositions ou un gala d'entreprise, votre chauffeur vous attend à la sortie.",
        benefits: [
          "Retour garanti même en fin de soirée",
          "Chauffeur qui attend à la sortie de l'événement",
          "Prix fixe aller-retour sans surprises",
          "Réservation groupée pour plusieurs participants",
          "Connaissance des lieux d'événements et accès",
        ],
        faq: [
          {
            question: "Comment réserver un taxi pour un événement ?",
            answer:
              "Réservez en ligne en précisant le lieu de l'événement, l'heure d'arrivée souhaitée et l'heure de retour estimée. Vous pouvez modifier l'heure de retour jusqu'à 30 minutes avant.",
          },
          {
            question: "Le chauffeur attend-il pendant l'événement ?",
            answer:
              "Pour les événements courts (moins de 3 heures), le chauffeur peut attendre sur place. Pour les événements plus longs, nous planifions un retour à l'heure convenue. Aucun frais d'attente caché.",
          },
          {
            question: "Peut-on réserver pour un groupe allant au même événement ?",
            answer:
              "Oui, nous proposons des tarifs groupés pour plusieurs personnes se rendant au même événement. Un ou plusieurs véhicules seront coordonnés selon le nombre de participants.",
          },
          {
            question: "Que se passe-t-il si l'événement finit plus tard que prévu ?",
            answer:
              "Vous pouvez ajuster l'heure de retour via notre application ou en contactant votre chauffeur directement. Nous nous adaptons à votre emploi du temps sans pénalité.",
          },
        ],
        detailedDescription:
          "Le taxi événement TaxiNeo est le service de transport dédié aux spectateurs, participants et organisateurs d'événements de toute nature : concerts au Stade de France ou à l'Accor Arena, festivals de musique, salons professionnels au Parc des Expositions, matchs de football et de rugby, galas d'entreprise, soirées privées et conférences. Le principal avantage de ce service réside dans la garantie absolue du retour : votre chauffeur se positionne à proximité de la sortie de l'événement et vous attend, même si la fin se prolonge au-delà de l'horaire prévu. Nous connaissons les points d'accès, les zones de dépose rapide et les contraintes de circulation propres à chaque lieu événementiel en France. La réservation anticipée vous permet de sécuriser un véhicule même lors des pics de demande — fins de concert, nuits de match ou clôture de salon. Le prix fixe aller-retour est communiqué dès la réservation et ne change pas, quels que soient les embouteillages ou le temps d'attente du chauffeur. Pour les groupes, nous coordonnons plusieurs véhicules avec un point de rendez-vous unique à la sortie.",
        useCases:
          "Les amateurs de concerts et festivals réservent le taxi événement pour profiter pleinement de leur soirée sans se soucier du stationnement, de l'alcool au volant ou de la disponibilité des transports en commun tardifs. Les professionnels se rendant à des salons, congrès ou conférences l'utilisent pour arriver à l'heure et repartir dès la fin des sessions sans attendre. Les supporters réservent leur trajet retour avant le match, évitant la cohue des taxis à la sortie du stade. Les entreprises organisent le transport collectif de leurs collaborateurs pour les soirées d'entreprise, galas de fin d'année ou team buildings, garantissant la sécurité de chacun sur le trajet retour.",
        howItWorks:
          "Réservez sur TaxiNeo en indiquant le lieu de l'événement, l'heure d'arrivée souhaitée et l'heure de retour estimée. Vous pouvez ajuster l'heure de retour jusqu'à 30 minutes avant via l'application ou par SMS au chauffeur. Le prix fixe aller-retour est confirmé instantanément. Le jour de l'événement, votre chauffeur vous conduit sur place puis revient vous chercher à la sortie au point convenu.",
      },
      en: {
        metaTitle: "Event Taxi: transport for concerts, exhibitions and parties | TaxiNeo",
        metaDescription:
          "Book a taxi for your events: concerts, exhibitions, parties, conferences. Punctual service, fixed price, guaranteed return. Online booking.",
        heroTitle: "Event Taxi",
        heroSubtitle:
          "Reliable and punctual transport for all your events. Concerts, exhibitions, galas, conferences: arrive and leave with peace of mind.",
        description:
          "Do not let transport spoil your evening. Our event taxi service ensures a reliable outward and return journey for all your events. Whether it is a concert at the Stade de France, an exhibition at the Parc des Expositions or a corporate gala, your driver waits for you at the exit.",
        benefits: [
          "Guaranteed return even late at night",
          "Driver waiting at the event exit",
          "Fixed round-trip price with no surprises",
          "Group booking for multiple attendees",
          "Knowledge of event venues and access points",
        ],
        faq: [
          {
            question: "How do I book a taxi for an event?",
            answer:
              "Book online specifying the event venue, desired arrival time and estimated return time. You can change the return time up to 30 minutes beforehand.",
          },
          {
            question: "Does the driver wait during the event?",
            answer:
              "For short events (under 3 hours), the driver can wait on site. For longer events, we schedule a return at the agreed time. No hidden waiting fees.",
          },
          {
            question: "Can I book for a group going to the same event?",
            answer:
              "Yes, we offer group rates for multiple people going to the same event. One or more vehicles will be coordinated based on the number of attendees.",
          },
          {
            question: "What happens if the event finishes later than planned?",
            answer:
              "You can adjust the return time via our app or by contacting your driver directly. We adapt to your schedule without penalty.",
          },
        ],
        detailedDescription:
          "The TaxiNeo event taxi is the dedicated transport service for spectators, attendees and organisers of events of all kinds: concerts at the Stade de France or Accor Arena, music festivals, trade shows at the Parc des Expositions, football and rugby matches, corporate galas, private parties and conferences. The key advantage of this service is the absolute guarantee of a return journey: your driver positions near the event exit and waits for you, even if the event runs beyond schedule. We know the access points, quick drop-off zones and traffic constraints specific to each event venue in France. Advance booking lets you secure a vehicle even during peak demand — concert endings, match nights or trade show closings. The fixed round-trip price is communicated at booking and does not change, regardless of traffic or the driver's waiting time. For groups, we coordinate multiple vehicles with a single meeting point at the exit.",
        useCases:
          "Concert and festival fans book the event taxi to fully enjoy their evening without worrying about parking, drink-driving or the availability of late-night public transport. Professionals attending trade shows, congresses or conferences use it to arrive on time and leave as soon as sessions end. Sports fans secure their return journey before the match, avoiding the taxi scramble at stadium exits. Companies organise collective transport for their staff for corporate evenings, year-end galas or team-building events, ensuring everyone gets home safely.",
        howItWorks:
          "Book on TaxiNeo by entering the event venue, desired arrival time and estimated return time. You can adjust the return time up to 30 minutes beforehand via the app or by texting the driver. The fixed round-trip price is confirmed instantly. On the event day, your driver takes you there and returns to collect you at the exit at the agreed meeting point.",
      },
    },
  },
  {
    slug: "taxi-medical",
    title: "Taxi Médical",
    icon: "solar:hospital-linear",
    category: "special",
    i18n: {
      fr: {
        metaTitle: "Taxi Médical : transport sanitaire vers hôpitaux et cliniques | TaxiNeo",
        metaDescription:
          "Réservez un taxi médical pour vos rendez-vous médicaux, hospitalisations et traitements. Chauffeur ponctuel, véhicule confortable, prix fixe.",
        heroTitle: "Taxi Médical",
        heroSubtitle:
          "Transport fiable et confortable pour tous vos rendez-vous médicaux. Ponctualité et bienveillance à chaque trajet.",
        description:
          "Le taxi médical TaxiNeo vous accompagne pour tous vos déplacements de santé : consultations, hospitalisations, séances de chimiothérapie, dialyse ou rééducation. Nos chauffeurs sont formés à l'accompagnement de patients et assurent un transport ponctuel, confortable et bienveillant.",
        benefits: [
          "Ponctualité absolue pour vos rendez-vous médicaux",
          "Chauffeurs formés à l'accompagnement de patients",
          "Véhicules confortables et adaptés",
          "Service récurrent pour traitements réguliers",
          "Prise en charge à domicile et accompagnement jusqu'à l'accueil",
        ],
        faq: [
          {
            question: "Le taxi médical est-il remboursé par la Sécurité sociale ?",
            answer:
              "Le taxi médical TaxiNeo n'est pas directement remboursé. Pour un remboursement Sécurité sociale, vous avez besoin d'une prescription médicale et d'un taxi conventionné. Consultez notre page taxi conventionné.",
          },
          {
            question: "Peut-on réserver un taxi médical récurrent ?",
            answer:
              "Oui, pour les traitements réguliers (dialyse, chimiothérapie, rééducation), nous proposons des réservations récurrentes avec le même chauffeur dans la mesure du possible.",
          },
          {
            question: "Le chauffeur accompagne-t-il le patient jusqu'à l'accueil ?",
            answer:
              "Oui, nos chauffeurs accompagnent les patients de leur domicile jusqu'à l'accueil de l'établissement médical, et inversement pour le retour.",
          },
          {
            question: "Quels établissements médicaux desservez-vous ?",
            answer:
              "Nous desservons tous les hôpitaux, cliniques, centres de dialyse, centres de rééducation et cabinets médicaux en France. Aucune restriction géographique.",
          },
        ],
        detailedDescription:
          "Le taxi médical TaxiNeo est un service de transport sanitaire pensé pour les patients ayant des rendez-vous médicaux réguliers ou ponctuels dans les hôpitaux, cliniques, centres de dialyse, centres de rééducation et cabinets spécialisés. Contrairement aux ambulances, le taxi médical convient aux patients autonomes ou semi-autonomes qui n'ont pas besoin d'équipement médical embarqué mais qui nécessitent un transport ponctuel, confortable et bienveillant. Nos chauffeurs reçoivent une formation spécifique à l'accompagnement de patients : aide à la montée et descente du véhicule, patience pendant les temps d'attente, connaissance des accès hospitaliers et des protocoles de dépose devant les urgences ou consultations. Pour les traitements récurrents comme la chimiothérapie, la dialyse trois fois par semaine ou les séances de rééducation, nous proposons des réservations programmées avec attribution du même chauffeur afin de créer un lien de confiance bénéfique au bien-être du patient. Le véhicule est nettoyé et désinfecté entre chaque course médicale. Un bon de transport médical n'est pas requis pour utiliser notre service, mais si vous disposez d'une prescription médicale de transport, nous vous orientons vers notre page taxi conventionné pour un éventuel remboursement.",
        useCases:
          "Les patients atteints d'affection longue durée (ALD) réservent le taxi médical pour leurs séances régulières de dialyse, chimiothérapie ou radiothérapie, avec la certitude d'un chauffeur ponctuel et attentionné. Les personnes âgées l'utilisent pour se rendre à leurs consultations spécialisées, opérations ambulatoires ou examens hospitaliers, accompagnées de leur domicile jusqu'à l'accueil de l'établissement. Les parents accompagnant un enfant malade bénéficient d'un transport adapté et rassurant vers les hôpitaux pédiatriques. Les convalescents sortant d'hospitalisation réservent le taxi médical pour un retour à domicile en douceur, sans effort et en toute sécurité.",
        howItWorks:
          "Réservez en ligne sur TaxiNeo en sélectionnant le service « Médical ». Indiquez l'établissement de santé, la date et l'heure du rendez-vous. Pour les traitements récurrents, configurez un planning hebdomadaire. Le chauffeur arrive à votre domicile en avance, vous aide à monter en voiture, vous conduit à l'accueil de l'établissement et revient vous chercher à l'heure convenue pour le retour.",
      },
      en: {
        metaTitle: "Medical Taxi: healthcare transport to hospitals and clinics | TaxiNeo",
        metaDescription:
          "Book a medical taxi for your medical appointments, hospitalisations and treatments. Punctual driver, comfortable vehicle, fixed price.",
        heroTitle: "Medical Taxi",
        heroSubtitle:
          "Reliable and comfortable transport for all your medical appointments. Punctuality and care on every journey.",
        description:
          "TaxiNeo medical taxi accompanies you for all your healthcare journeys: consultations, hospitalisations, chemotherapy sessions, dialysis or rehabilitation. Our drivers are trained in patient care and ensure punctual, comfortable and considerate transport.",
        benefits: [
          "Absolute punctuality for your medical appointments",
          "Drivers trained in patient assistance",
          "Comfortable and adapted vehicles",
          "Recurring service for regular treatments",
          "Home pick-up and escort to reception",
        ],
        faq: [
          {
            question: "Is the medical taxi reimbursed by health insurance?",
            answer:
              "TaxiNeo medical taxi is not directly reimbursed. For health insurance reimbursement, you need a medical prescription and a conventional taxi. Check our conventional taxi page.",
          },
          {
            question: "Can I book a recurring medical taxi?",
            answer:
              "Yes, for regular treatments (dialysis, chemotherapy, rehabilitation), we offer recurring bookings with the same driver whenever possible.",
          },
          {
            question: "Does the driver accompany the patient to reception?",
            answer:
              "Yes, our drivers accompany patients from their home to the medical facility reception, and back again for the return journey.",
          },
          {
            question: "Which medical facilities do you serve?",
            answer:
              "We serve all hospitals, clinics, dialysis centres, rehabilitation centres and medical offices in France. No geographical restrictions.",
          },
        ],
        detailedDescription:
          "The TaxiNeo medical taxi is a healthcare transport service designed for patients with regular or one-off appointments at hospitals, clinics, dialysis centres, rehabilitation facilities and specialist practices. Unlike ambulances, the medical taxi is suitable for autonomous or semi-autonomous patients who do not need onboard medical equipment but require punctual, comfortable and considerate transport. Our drivers receive specific patient-care training: help getting in and out of the vehicle, patience during waiting times, familiarity with hospital access routes and drop-off protocols near emergency departments or consultation areas. For recurring treatments such as chemotherapy, dialysis three times a week or rehabilitation sessions, we offer scheduled bookings with the same driver assigned to build a trusting relationship that benefits patient wellbeing. Each vehicle is cleaned and disinfected between medical trips. A medical transport voucher is not required to use our service, but if you have a medical transport prescription, we direct you to our conventional taxi page for potential reimbursement.",
        useCases:
          "Patients with long-term conditions (ALD) book the medical taxi for regular dialysis, chemotherapy or radiotherapy sessions, with the certainty of a punctual and caring driver. Elderly people use it for specialist consultations, outpatient procedures or hospital examinations, escorted from their doorstep to the facility reception. Parents accompanying a sick child benefit from adapted and reassuring transport to paediatric hospitals. Patients recovering from hospitalisation book the medical taxi for a gentle, effortless and safe return home.",
        howItWorks:
          "Book online on TaxiNeo by selecting the 'Medical' service. Enter the healthcare facility, date and appointment time. For recurring treatments, set up a weekly schedule. The driver arrives at your home ahead of time, helps you into the car, takes you to the facility reception and returns to collect you at the agreed time for the journey home.",
      },
    },
  },
  {
    slug: "taxi-animal",
    title: "Taxi Animaux",
    icon: "solar:cat-linear",
    category: "special",
    i18n: {
      fr: {
        metaTitle: "Taxi Animaux : transport de vos animaux de compagnie | TaxiNeo",
        metaDescription:
          "Réservez un taxi acceptant les animaux de compagnie : chiens, chats et autres. Véhicule adapté, chauffeur bienveillant, prix fixe garanti.",
        heroTitle: "Taxi Animaux",
        heroSubtitle:
          "Voyagez avec vos animaux de compagnie en toute sérénité. Nos chauffeurs accueillent vos compagnons à quatre pattes.",
        description:
          "Trouver un taxi qui accepte les animaux n'est plus un casse-tête. Avec TaxiNeo, vos animaux de compagnie voyagent confortablement et en sécurité. Nos véhicules sont équipés de protections et nos chauffeurs sont habitués à accueillir chiens, chats et autres compagnons.",
        benefits: [
          "Animaux de compagnie acceptés sans supplément caché",
          "Véhicules équipés de protections de siège",
          "Chauffeurs habitués aux animaux",
          "Transport vers vétérinaires et pensions",
          "Cages de transport acceptées, toutes tailles",
        ],
        faq: [
          {
            question: "Quels animaux sont acceptés dans le taxi ?",
            answer:
              "Nous acceptons chiens, chats et petits animaux de compagnie (lapins, furets, etc.). Les animaux doivent être tenus en laisse ou en cage de transport. Précisez la taille et le type d'animal lors de la réservation.",
          },
          {
            question: "Y a-t-il un supplément pour les animaux ?",
            answer:
              "Un léger supplément peut s'appliquer pour couvrir le nettoyage du véhicule. Ce supplément est indiqué clairement lors de la réservation, sans surprise.",
          },
          {
            question: "Mon chien de grande taille est-il accepté ?",
            answer:
              "Oui, les chiens de toutes tailles sont acceptés. Pour les très grands chiens, nous pouvons prévoir un véhicule plus spacieux type van. Précisez la race et le poids lors de la réservation.",
          },
          {
            question: "Puis-je me rendre chez le vétérinaire en taxi animaux ?",
            answer:
              "Absolument. C'est l'un des usages les plus courants. Le chauffeur peut attendre le temps de la consultation pour vous ramener ensuite avec votre animal.",
          },
        ],
        detailedDescription:
          "Le taxi animaux TaxiNeo met fin à la difficulté de trouver un chauffeur acceptant les animaux de compagnie. Nos véhicules sont spécialement préparés pour accueillir chiens, chats, lapins, furets et autres petits animaux domestiques dans les meilleures conditions de sécurité et d'hygiène. Les sièges arrière sont protégés par des housses imperméables lavables, et le coffre peut recevoir des caisses de transport de toutes tailles, des paniers rigides aux sacs souples ventilés. Nos chauffeurs sont habitués aux animaux et adoptent une conduite douce pour éviter le stress de votre compagnon : pas de freinages brusques, musique calme et température agréable. Aucune race de chien n'est refusée, y compris les grands gabarits type berger allemand, labrador ou dogue, à condition que l'animal soit tenu en laisse ou en caisse. Le tarif appliqué est identique à celui d'une course classique, avec un éventuel léger supplément de nettoyage clairement indiqué lors de la réservation. Le taxi animaux convient aussi bien pour les trajets quotidiens vers le vétérinaire, le toiletteur ou la pension que pour les déplacements plus longs comme les départs en vacances avec votre compagnon.",
        useCases:
          "Les propriétaires de chiens et chats utilisent le taxi animaux pour les visites vétérinaires, notamment les urgences où la rapidité du transport est cruciale. Les familles partant en vacances avec leur animal réservent ce service pour rejoindre la gare ou l'aéroport sans laisser leur compagnon derrière. Les personnes âgées accompagnées de leur animal de compagnie l'utilisent pour les déplacements médicaux ou les visites familiales. Les éleveurs et professionnels du secteur animalier font appel au taxi animaux pour transporter des animaux vers des expositions, des concours ou des pensions spécialisées.",
        howItWorks:
          "Réservez sur TaxiNeo en cochant l'option « Animaux acceptés ». Précisez l'espèce, la race, la taille approximative de l'animal et si vous utiliserez une caisse de transport. Le prix fixe est calculé instantanément, avec le supplément nettoyage éventuel affiché clairement. Le chauffeur arrive avec les protections de siège installées, accueille votre compagnon avec bienveillance et vous conduit à destination en douceur.",
      },
      en: {
        metaTitle: "Pet Taxi: transport for your pets | TaxiNeo",
        metaDescription:
          "Book a pet-friendly taxi: dogs, cats and more. Adapted vehicle, caring driver, guaranteed fixed price.",
        heroTitle: "Pet Taxi",
        heroSubtitle:
          "Travel with your pets with complete peace of mind. Our drivers welcome your four-legged companions.",
        description:
          "Finding a taxi that accepts pets is no longer a headache. With TaxiNeo, your pets travel comfortably and safely. Our vehicles are equipped with seat protections and our drivers are accustomed to welcoming dogs, cats and other companions.",
        benefits: [
          "Pets accepted with no hidden surcharge",
          "Vehicles equipped with seat protections",
          "Drivers accustomed to animals",
          "Transport to vets and kennels",
          "Pet carriers accepted, all sizes",
        ],
        faq: [
          {
            question: "What animals are accepted in the taxi?",
            answer:
              "We accept dogs, cats and small pets (rabbits, ferrets, etc.). Animals must be on a leash or in a carrier. Specify the size and type of animal when booking.",
          },
          {
            question: "Is there a surcharge for animals?",
            answer:
              "A small surcharge may apply to cover vehicle cleaning. This surcharge is clearly indicated at booking, with no surprises.",
          },
          {
            question: "Is my large dog accepted?",
            answer:
              "Yes, dogs of all sizes are accepted. For very large dogs, we can arrange a more spacious vehicle such as a van. Specify the breed and weight when booking.",
          },
          {
            question: "Can I go to the vet by pet taxi?",
            answer:
              "Absolutely. It is one of the most common uses. The driver can wait during the consultation to bring you back with your pet afterwards.",
          },
        ],
        detailedDescription:
          "The TaxiNeo pet taxi eliminates the difficulty of finding a driver who accepts pets. Our vehicles are specially prepared to welcome dogs, cats, rabbits, ferrets and other small domestic animals in the best conditions of safety and hygiene. Rear seats are protected with washable waterproof covers, and the boot can accommodate carriers of all sizes, from rigid crates to ventilated soft bags. Our drivers are accustomed to animals and adopt smooth driving to minimise your companion's stress: no sudden braking, calm music and a comfortable temperature. No dog breed is refused, including large breeds such as German shepherds, labradors or mastiffs, provided the animal is on a leash or in a carrier. The fare applied is identical to a standard trip, with a possible small cleaning surcharge clearly indicated at booking. The pet taxi is suitable for everyday trips to the vet, groomer or kennel as well as longer journeys such as holiday departures with your companion.",
        useCases:
          "Dog and cat owners use the pet taxi for veterinary visits, especially emergencies where speed of transport is crucial. Families going on holiday with their pet book this service to reach the train station or airport without leaving their companion behind. Elderly people accompanied by their pet use it for medical trips or family visits. Breeders and animal industry professionals call on the pet taxi to transport animals to shows, competitions or specialist boarding facilities.",
        howItWorks:
          "Book on TaxiNeo by ticking the 'Pets accepted' option. Specify the species, breed, approximate size of the animal and whether you will use a carrier. The fixed price is calculated instantly, with any cleaning surcharge clearly displayed. The driver arrives with seat protections already fitted, welcomes your companion warmly and drives you to your destination smoothly.",
      },
    },
  },
  {
    slug: "taxi-colis",
    title: "Taxi Colis",
    icon: "solar:box-linear",
    category: "special",
    i18n: {
      fr: {
        metaTitle: "Taxi Colis : livraison express de paquets et documents | TaxiNeo",
        metaDescription:
          "Envoyez vos colis et documents urgents par taxi. Livraison express en ville, suivi en temps réel, preuve de livraison. Prix fixe garanti.",
        heroTitle: "Taxi Colis",
        heroSubtitle:
          "Livraison express de vos colis et documents urgents. Plus rapide qu'un coursier, avec suivi en temps réel.",
        description:
          "Le taxi colis est la solution la plus rapide pour expédier des documents importants, des colis urgents ou des pièces sensibles. Nos chauffeurs assurent un service de coursier premium avec enlèvement immédiat et livraison en main propre, avec preuve de remise.",
        benefits: [
          "Enlèvement en moins de 30 minutes",
          "Livraison en main propre avec preuve de remise",
          "Suivi GPS en temps réel du colis",
          "Documents confidentiels traités avec discrétion",
          "Disponible 7j/7, y compris le week-end",
        ],
        faq: [
          {
            question: "Quels types de colis peut-on envoyer par taxi ?",
            answer:
              "Vous pouvez envoyer documents, paquets, pièces détachées, échantillons, clés, médicaments et tout objet transportable en véhicule. Le poids maximal est de 30 kg par colis.",
          },
          {
            question: "En combien de temps le colis est-il livré ?",
            answer:
              "Le délai dépend de la distance. En ville, comptez 30 à 60 minutes. Pour les trajets interurbains, le délai est communiqué à la réservation selon la distance.",
          },
          {
            question: "Le colis est-il assuré pendant le transport ?",
            answer:
              "Oui, tous les colis sont couverts par notre assurance transport. Pour les objets de valeur, une assurance complémentaire est disponible sur demande.",
          },
          {
            question: "Peut-on suivre le colis en temps réel ?",
            answer:
              "Oui, un lien de suivi GPS vous est envoyé par SMS dès l'enlèvement. Vous pouvez suivre votre colis en temps réel jusqu'à la livraison.",
          },
        ],
        detailedDescription:
          "Le taxi colis TaxiNeo est un service de coursier premium qui utilise la rapidité et la disponibilité du réseau taxi pour assurer la livraison express de vos plis, documents et colis urgents. Contrairement aux services de livraison classiques avec des délais de 24 à 48 heures, le taxi colis garantit un enlèvement en moins de 30 minutes et une livraison le jour même, souvent en moins d'une heure en zone urbaine. Chaque envoi bénéficie d'un suivi GPS en temps réel : vous recevez un lien de tracking par SMS dès l'enlèvement et pouvez suivre votre colis jusqu'à la remise en main propre au destinataire. Une preuve de livraison avec signature électronique et horodatage vous est envoyée instantanément. Le service est particulièrement prisé par les cabinets d'avocats pour les plis confidentiels, les entreprises pour les contrats urgents, les laboratoires pour les échantillons biologiques, les pharmacies pour les médicaments sensibles et les particuliers pour les clés, papiers d'identité ou objets oubliés. Tous les colis sont couverts par notre assurance transport, avec option d'assurance complémentaire pour les objets de valeur. Le service fonctionne 7 jours sur 7, week-ends et jours fériés compris.",
        useCases:
          "Les entreprises et cabinets juridiques envoient des contrats, des documents notariés et des plis confidentiels nécessitant une livraison rapide et sécurisée avec preuve de remise. Les laboratoires médicaux et les pharmacies font transporter des échantillons biologiques, des résultats d'analyses ou des médicaments thermosensibles dans des conditions contrôlées. Les professionnels de l'informatique expédient des pièces détachées, disques durs ou serveurs de remplacement pour minimiser les temps d'arrêt. Les particuliers utilisent le taxi colis pour envoyer des clés à un proche, faire livrer un cadeau en urgence ou récupérer des documents oubliés dans un autre lieu.",
        howItWorks:
          "Créez votre demande de livraison sur TaxiNeo en précisant l'adresse d'enlèvement, l'adresse de livraison, la nature du colis et son poids approximatif. Recevez un prix fixe instantané. Un chauffeur-coursier se présente à l'adresse d'enlèvement en moins de 30 minutes, prend en charge votre colis et le livre en main propre au destinataire. Vous recevez la preuve de livraison signée par SMS.",
      },
      en: {
        metaTitle: "Parcel Taxi: express delivery of packages and documents | TaxiNeo",
        metaDescription:
          "Send your urgent parcels and documents by taxi. Express city delivery, real-time tracking, proof of delivery. Guaranteed fixed price.",
        heroTitle: "Parcel Taxi",
        heroSubtitle:
          "Express delivery of your urgent parcels and documents. Faster than a courier, with real-time tracking.",
        description:
          "The parcel taxi is the fastest solution for shipping important documents, urgent packages or sensitive items. Our drivers provide a premium courier service with immediate collection and hand-to-hand delivery, with proof of receipt.",
        benefits: [
          "Collection within 30 minutes",
          "Hand-to-hand delivery with proof of receipt",
          "Real-time GPS tracking of the parcel",
          "Confidential documents handled with discretion",
          "Available 7 days a week, including weekends",
        ],
        faq: [
          {
            question: "What types of parcels can be sent by taxi?",
            answer:
              "You can send documents, packages, spare parts, samples, keys, medication and any vehicle-transportable item. Maximum weight is 30 kg per parcel.",
          },
          {
            question: "How quickly is the parcel delivered?",
            answer:
              "The time depends on the distance. In the city, allow 30 to 60 minutes. For intercity journeys, the time is communicated at booking based on the distance.",
          },
          {
            question: "Is the parcel insured during transport?",
            answer:
              "Yes, all parcels are covered by our transport insurance. For valuable items, additional insurance is available on request.",
          },
          {
            question: "Can the parcel be tracked in real time?",
            answer:
              "Yes, a GPS tracking link is sent to you by SMS upon collection. You can track your parcel in real time until delivery.",
          },
        ],
        detailedDescription:
          "The TaxiNeo parcel taxi is a premium courier service that leverages the speed and availability of the taxi network to provide express delivery of your letters, documents and urgent packages. Unlike standard delivery services with 24 to 48-hour timescales, the parcel taxi guarantees collection within 30 minutes and same-day delivery, often under an hour in urban areas. Every shipment benefits from real-time GPS tracking: you receive a tracking link by SMS upon collection and can follow your parcel until hand-to-hand delivery to the recipient. A proof of delivery with electronic signature and timestamp is sent to you instantly. The service is especially valued by law firms for confidential documents, businesses for urgent contracts, laboratories for biological samples, pharmacies for sensitive medications and individuals for keys, identity papers or forgotten items. All parcels are covered by our transport insurance, with optional additional cover for high-value items. The service operates 7 days a week, including weekends and public holidays.",
        useCases:
          "Businesses and law firms send contracts, notarised documents and confidential letters requiring fast, secure delivery with proof of receipt. Medical laboratories and pharmacies transport biological samples, test results or temperature-sensitive medications under controlled conditions. IT professionals ship spare parts, hard drives or replacement servers to minimise downtime. Private individuals use the parcel taxi to send keys to a relative, have a gift delivered urgently or retrieve documents left at another location.",
        howItWorks:
          "Create your delivery request on TaxiNeo by entering the collection address, delivery address, nature of the parcel and approximate weight. Receive an instant fixed price. A courier-driver arrives at the collection address within 30 minutes, takes charge of your parcel and delivers it hand-to-hand to the recipient. You receive signed proof of delivery by SMS.",
      },
    },
  },
  {
    slug: "taxi-nuit",
    title: "Taxi de Nuit",
    icon: "solar:moon-linear",
    category: "transport",
    i18n: {
      fr: {
        metaTitle: "Taxi de Nuit : chauffeur disponible 24h/24 partout en France | TaxiNeo",
        metaDescription:
          "Réservez un taxi de nuit en France. Disponible de 19h à 7h, chauffeur professionnel, prix fixe sans majoration surprise. Réservation immédiate.",
        heroTitle: "Taxi de Nuit",
        heroSubtitle:
          "Un chauffeur disponible à toute heure de la nuit. Rentrez chez vous en toute sécurité, sans attendre.",
        description:
          "Le taxi de nuit TaxiNeo vous assure un transport sûr et fiable entre 19h et 7h du matin. Que vous sortiez d'un restaurant, d'une soirée ou que vous ayez un vol matinal, nos chauffeurs sont disponibles partout en France. Le prix est fixé à la réservation, sans majoration surprise.",
        benefits: [
          "Disponible de 19h à 7h, 7 jours sur 7",
          "Prix fixe communiqué à la réservation",
          "Chauffeurs professionnels et véhicules récents",
          "Temps d'attente réduit même en pleine nuit",
          "Idéal pour les sorties et les vols matinaux",
        ],
        faq: [
          {
            question: "Le taxi de nuit coûte-t-il plus cher ?",
            answer:
              "Les tarifs de nuit sont généralement légèrement supérieurs au tarif de jour, conformément à la réglementation. Avec TaxiNeo, le prix fixe est communiqué à la réservation sans aucune surprise.",
          },
          {
            question: "Peut-on réserver un taxi de nuit à la dernière minute ?",
            answer:
              "Oui, nous acceptons les réservations immédiates même en pleine nuit. Un chauffeur peut généralement être chez vous en 10 à 20 minutes selon votre localisation.",
          },
          {
            question: "Le taxi de nuit est-il sûr ?",
            answer:
              "Tous nos chauffeurs sont des professionnels vérifiés avec carte professionnelle. Les véhicules sont géolocalisés et vous recevez les coordonnées du chauffeur avant la prise en charge.",
          },
          {
            question: "Quelles zones sont couvertes la nuit ?",
            answer:
              "Notre service de nuit couvre toute la France métropolitaine, y compris les zones rurales. La disponibilité peut varier selon la zone, mais nous faisons notre maximum pour accepter chaque demande.",
          },
        ],
        detailedDescription:
          "Le taxi de nuit TaxiNeo assure un service de transport continu entre 19 heures et 7 heures du matin, comblant le creux de disponibilité des transports en commun et la rareté des taxis conventionnels aux heures tardives. Nos chauffeurs de nuit sont des professionnels expérimentés, titulaires de la carte T, qui connaissent parfaitement les itinéraires nocturnes, les rues à sens unique et les zones à éviter. Chaque véhicule est géolocalisé en permanence et les coordonnées du chauffeur vous sont communiquées avant la prise en charge, garantissant une transparence et une sécurité totales. Le tarif de nuit, conforme à la réglementation tarifaire en vigueur (tarif C et D), est communiqué à l'avance lors de la réservation et reste fixe, sans majoration surprise liée aux embouteillages ou aux détours. Le taxi de nuit est particulièrement sollicité pour les sorties de restaurant, les retours de soirée, les fins de concert, les vols retardés ou décalés au petit matin et les urgences médicales nocturnes. Même en pleine nuit, un chauffeur peut généralement être à votre adresse en 10 à 20 minutes dans les grandes agglomérations, et sous 30 minutes en zone périurbaine.",
        useCases:
          "Les noctambules réservent le taxi de nuit pour rentrer en sécurité après une soirée entre amis, un dîner au restaurant ou une sortie en boîte de nuit, sans risquer l'alcool au volant. Les voyageurs ayant un vol matinal très tôt ou un vol retardé atterrissant tard dans la nuit l'utilisent pour rejoindre l'aéroport ou rentrer chez eux sans stress. Les professionnels de la santé — infirmières, médecins de garde, aides-soignantes — font appel au taxi de nuit pour leurs trajets domicile-hôpital lors des gardes nocturnes. Les personnes confrontées à une urgence médicale non vitale, comme une forte fièvre ou une blessure nécessitant les urgences, utilisent ce service pour un transport rapide et sûr vers l'hôpital le plus proche.",
        howItWorks:
          "Réservez votre taxi de nuit sur TaxiNeo en indiquant l'adresse de prise en charge et la destination. La réservation est possible à l'avance ou en temps réel, même à 3 heures du matin. Le prix fixe de nuit s'affiche instantanément. Un chauffeur professionnel est assigné et ses coordonnées vous sont envoyées par SMS. Il arrive à l'adresse indiquée, vous prend en charge en toute sécurité et vous conduit à destination.",
      },
      en: {
        metaTitle: "Night Taxi: driver available 24/7 across France | TaxiNeo",
        metaDescription:
          "Book a night taxi in France. Available from 7pm to 7am, professional driver, fixed price with no surprise surcharge. Instant booking.",
        heroTitle: "Night Taxi",
        heroSubtitle:
          "A driver available at any hour of the night. Get home safely without waiting.",
        description:
          "TaxiNeo night taxi ensures safe and reliable transport between 7pm and 7am. Whether you are leaving a restaurant, a party or have an early morning flight, our drivers are available across France. The price is set at booking with no surprise surcharge.",
        benefits: [
          "Available from 7pm to 7am, 7 days a week",
          "Fixed price communicated at booking",
          "Professional drivers and recent vehicles",
          "Reduced waiting time even in the middle of the night",
          "Ideal for nights out and early flights",
        ],
        faq: [
          {
            question: "Does a night taxi cost more?",
            answer:
              "Night rates are generally slightly higher than daytime rates, in line with regulations. With TaxiNeo, the fixed price is communicated at booking with no surprises.",
          },
          {
            question: "Can I book a night taxi at the last minute?",
            answer:
              "Yes, we accept immediate bookings even in the middle of the night. A driver can usually be with you in 10 to 20 minutes depending on your location.",
          },
          {
            question: "Is a night taxi safe?",
            answer:
              "All our drivers are verified professionals with a professional licence. Vehicles are geolocated and you receive the driver's details before pick-up.",
          },
          {
            question: "What areas are covered at night?",
            answer:
              "Our night service covers all of mainland France, including rural areas. Availability may vary by area, but we do our best to accept every request.",
          },
        ],
        detailedDescription:
          "The TaxiNeo night taxi provides continuous transport between 7pm and 7am, filling the gap left by reduced public transport and the scarcity of conventional taxis during late hours. Our night drivers are experienced professionals, fully licensed, who know nocturnal routes, one-way streets and areas to avoid inside out. Every vehicle is permanently geolocated and the driver's contact details are sent to you before pick-up, guaranteeing complete transparency and safety. The night fare, compliant with current tariff regulations (tariff C and D), is communicated in advance at booking and remains fixed, with no surprise surcharges due to traffic or detours. The night taxi is especially popular for restaurant outings, party returns, concert endings, delayed flights or early-morning departures and nocturnal medical emergencies. Even in the middle of the night, a driver can usually reach your address in 10 to 20 minutes in major cities, and within 30 minutes in suburban areas.",
        useCases:
          "Night owls book the night taxi to get home safely after an evening with friends, a restaurant dinner or a nightclub outing, avoiding the risk of drink-driving. Travellers with very early morning flights or delayed flights landing late at night use it to reach the airport or get home without stress. Healthcare professionals — nurses, on-call doctors, care assistants — rely on the night taxi for home-to-hospital journeys during night shifts. People facing a non-life-threatening medical emergency, such as a high fever or an injury requiring A&E, use this service for fast, safe transport to the nearest hospital.",
        howItWorks:
          "Book your night taxi on TaxiNeo by entering the pick-up address and destination. Booking is possible in advance or in real time, even at 3am. The fixed night fare is displayed instantly. A professional driver is assigned and their contact details are sent to you by SMS. They arrive at the specified address, collect you safely and drive you to your destination.",
      },
    },
  },
  {
    slug: "taxi-femme",
    title: "Taxi Femme",
    icon: "solar:women-linear",
    category: "special",
    i18n: {
      fr: {
        metaTitle: "Taxi Femme : chauffeure femme pour voyager en confiance | TaxiNeo",
        metaDescription:
          "Réservez un taxi avec chauffeure femme. Service dédié aux passagères souhaitant voyager en confiance, de jour comme de nuit. Prix fixe garanti.",
        heroTitle: "Taxi Femme",
        heroSubtitle:
          "Voyagez en toute confiance avec une chauffeure femme. Un service pensé pour votre confort et votre sérénité.",
        description:
          "Le taxi femme TaxiNeo répond à une demande croissante de passagères souhaitant voyager avec une chauffeure femme. Que ce soit pour des raisons de confort personnel, culturelles ou de sécurité, nos chauffeures professionnelles vous assurent un trajet serein, de jour comme de nuit.",
        benefits: [
          "Chauffeure femme professionnelle et expérimentée",
          "Service disponible 24h/24, 7j/7",
          "Idéal pour les trajets de nuit en toute sérénité",
          "Même qualité de service et tarifs que nos autres taxis",
          "Véhicules récents, propres et confortables",
        ],
        faq: [
          {
            question: "Comment réserver un taxi avec chauffeure femme ?",
            answer:
              "Lors de la réservation en ligne, cochez simplement l'option 'Chauffeure femme'. Nous attribuerons une chauffeure femme à votre course. En cas d'indisponibilité, nous vous préviendrons à l'avance.",
          },
          {
            question: "Le service est-il réservé aux femmes ?",
            answer:
              "Non, le service est ouvert à tous. Toute personne souhaitant voyager avec une chauffeure femme peut réserver ce service, quels que soient ses motifs.",
          },
          {
            question: "Y a-t-il un supplément pour ce service ?",
            answer:
              "Non, le tarif est identique à celui d'un taxi classique. Aucun supplément n'est appliqué pour le choix d'une chauffeure femme.",
          },
          {
            question: "Des chauffeures femmes sont-elles disponibles la nuit ?",
            answer:
              "Oui, nos chauffeures femmes sont disponibles de jour comme de nuit. La disponibilité peut varier selon les zones, mais nous couvrons les principales agglomérations 24h/24.",
          },
        ],
        detailedDescription:
          "Le taxi femme TaxiNeo répond à un besoin de plus en plus exprimé par les passagères — et parfois les passagers — de pouvoir choisir une chauffeure femme pour leurs déplacements. Ce service naît d'un constat simple : de nombreuses femmes se sentent plus à l'aise et plus en sécurité lorsqu'elles voyagent avec une conductrice, en particulier lors de trajets nocturnes, de retours de soirée ou de déplacements dans des zones peu familières. Nos chauffeures sont des professionnelles titulaires de la carte T, sélectionnées avec les mêmes critères d'exigence que l'ensemble de notre réseau : expérience de conduite, connaissance des itinéraires, ponctualité et sens du service. Le tarif est strictement identique à celui d'un taxi classique, sans aucun supplément. Le service est ouvert à toutes et à tous, sans distinction : femmes voyageant seules, mères avec enfants, personnes âgées, ou toute personne souhaitant voyager avec une chauffeure femme pour des raisons personnelles, culturelles ou religieuses. La disponibilité des chauffeures femmes couvre les principales agglomérations françaises 24 heures sur 24, avec une couverture étendue en province aux heures de forte demande.",
        useCases:
          "Les femmes voyageant seules la nuit réservent le taxi femme pour rentrer chez elles après une soirée, une garde nocturne ou un vol tardif, avec la tranquillité d'esprit d'être conduite par une femme. Les mères avec enfants en bas âge apprécient la présence rassurante d'une chauffeure pour les trajets vers l'école, les activités ou l'aéroport. Les femmes enceintes proches du terme choisissent ce service pour leurs déplacements médicaux, avec une conductrice sensible à leur état. Les professionnelles en déplacement d'affaires l'utilisent pour les transferts hôtel-lieu de rendez-vous dans des villes qu'elles ne connaissent pas, gagnant en sérénité et en confiance.",
        howItWorks:
          "Lors de votre réservation sur TaxiNeo, cochez simplement l'option « Chauffeure femme ». Indiquez votre trajet et vos horaires comme pour toute réservation. Le système attribue une chauffeure femme disponible dans votre zone. En cas d'indisponibilité, vous êtes prévenue à l'avance et pouvez choisir de maintenir ou reporter votre course. Le tarif affiché est identique à celui d'un taxi standard.",
      },
      en: {
        metaTitle: "Female Driver Taxi: travel with confidence | TaxiNeo",
        metaDescription:
          "Book a taxi with a female driver. Dedicated service for passengers wanting to travel with confidence, day or night. Guaranteed fixed price.",
        heroTitle: "Female Driver Taxi",
        heroSubtitle:
          "Travel with complete confidence with a female driver. A service designed for your comfort and peace of mind.",
        description:
          "TaxiNeo female driver taxi meets a growing demand from passengers wishing to travel with a female driver. Whether for personal comfort, cultural reasons or safety, our professional female drivers ensure a peaceful journey, day or night.",
        benefits: [
          "Professional and experienced female driver",
          "Service available 24/7",
          "Ideal for night journeys with peace of mind",
          "Same quality of service and rates as our other taxis",
          "Recent, clean and comfortable vehicles",
        ],
        faq: [
          {
            question: "How do I book a taxi with a female driver?",
            answer:
              "When booking online, simply tick the 'Female driver' option. We will assign a female driver to your ride. If unavailable, we will let you know in advance.",
          },
          {
            question: "Is the service only for women?",
            answer:
              "No, the service is open to everyone. Anyone wishing to travel with a female driver can book this service, regardless of their reasons.",
          },
          {
            question: "Is there a surcharge for this service?",
            answer:
              "No, the fare is identical to a standard taxi. No surcharge is applied for choosing a female driver.",
          },
          {
            question: "Are female drivers available at night?",
            answer:
              "Yes, our female drivers are available day and night. Availability may vary by area, but we cover the main metropolitan areas 24/7.",
          },
        ],
        detailedDescription:
          "The TaxiNeo female driver taxi addresses a growing need expressed by passengers — particularly women — to be able to choose a female driver for their journeys. This service stems from a simple observation: many women feel more comfortable and safer when travelling with a female driver, especially during nighttime trips, party returns or travel in unfamiliar areas. Our female drivers are professionals holding a full taxi licence, selected with the same demanding criteria as our entire network: driving experience, route knowledge, punctuality and service mindset. The fare is strictly identical to a standard taxi, with no surcharge whatsoever. The service is open to everyone without distinction: women travelling alone, mothers with children, elderly people, or anyone wishing to travel with a female driver for personal, cultural or religious reasons. Female driver availability covers the main French metropolitan areas 24 hours a day, with extended coverage in provincial cities during peak demand hours.",
        useCases:
          "Women travelling alone at night book the female driver taxi to get home after an evening out, a night shift or a late flight, with the peace of mind of being driven by a woman. Mothers with young children appreciate the reassuring presence of a female driver for trips to school, activities or the airport. Pregnant women close to their due date choose this service for medical journeys, with a driver sensitive to their condition. Businesswomen on work trips use it for hotel-to-meeting transfers in unfamiliar cities, gaining serenity and confidence.",
        howItWorks:
          "When booking on TaxiNeo, simply tick the 'Female driver' option. Enter your route and times as for any booking. The system assigns an available female driver in your area. If none is available, you are notified in advance and can choose to keep or reschedule your trip. The displayed fare is identical to a standard taxi.",
      },
    },
  },
  {
    slug: "taxi-enfant",
    title: "Taxi Enfant",
    icon: "solar:baby-linear",
    category: "special",
    i18n: {
      fr: {
        metaTitle: "Taxi Enfant : transport sécurisé avec siège auto | TaxiNeo",
        metaDescription:
          "Réservez un taxi enfant avec siège auto adapté. Transport sécurisé pour vos enfants : école, activités, garde alternée. Chauffeur de confiance, prix fixe.",
        heroTitle: "Taxi Enfant",
        heroSubtitle:
          "Transport sécurisé et adapté pour vos enfants. Sièges auto fournis, chauffeurs de confiance.",
        description:
          "Le taxi enfant TaxiNeo assure le transport sécurisé de vos enfants avec des sièges auto adaptés à leur âge et leur taille. Idéal pour les trajets école, activités extrascolaires ou garde alternée. Nos chauffeurs sont sélectionnés pour leur fiabilité et leur bienveillance envers les enfants.",
        benefits: [
          "Sièges auto et rehausseurs fournis (0-10 ans)",
          "Chauffeurs vérifiés et bienveillants",
          "Service récurrent pour trajets école",
          "SMS de confirmation à chaque prise en charge et dépose",
          "Transport sécurisé en garde alternée",
        ],
        faq: [
          {
            question: "Un enfant peut-il voyager seul en taxi ?",
            answer:
              "Oui, à partir de 6 ans, un enfant peut voyager seul en taxi avec l'autorisation écrite des parents. Le chauffeur confirme la prise en charge et la dépose par SMS aux parents.",
          },
          {
            question: "Quels sièges auto sont disponibles ?",
            answer:
              "Nous fournissons des sièges auto groupe 0+ (naissance à 13 kg), groupe 1 (9 à 18 kg), groupe 2/3 (15 à 36 kg) et des rehausseurs. Précisez l'âge et le poids de l'enfant à la réservation.",
          },
          {
            question: "Peut-on réserver un taxi récurrent pour l'école ?",
            answer:
              "Oui, nous proposons des abonnements pour les trajets scolaires quotidiens. Le même chauffeur est attribué dans la mesure du possible pour créer un lien de confiance.",
          },
          {
            question: "Comment les chauffeurs sont-ils sélectionnés ?",
            answer:
              "Tous nos chauffeurs sont titulaires de la carte professionnelle, vérifiés (casier judiciaire) et formés à l'accueil des enfants. Ils font l'objet d'une sélection renforcée pour ce service.",
          },
        ],
        detailedDescription:
          "Le taxi enfant TaxiNeo est un service de transport sécurisé spécialement conçu pour les familles avec enfants, de la naissance à l'adolescence. Chaque véhicule est équipé de sièges auto homologués adaptés à l'âge et au poids de l'enfant : nacelle groupe 0 pour les nouveau-nés, siège coque groupe 0+ jusqu'à 13 kg, siège groupe 1 de 9 à 18 kg, rehausseur groupe 2/3 de 15 à 36 kg. Nos chauffeurs font l'objet d'une sélection renforcée incluant la vérification du casier judiciaire, un entretien approfondi et une formation spécifique à l'accueil des mineurs. Ils savent installer correctement chaque type de siège, adopter une conduite particulièrement douce et rassurer les enfants pendant le trajet. Pour les trajets scolaires quotidiens, TaxiNeo propose un service d'abonnement avec attribution du même chauffeur afin de créer un lien de confiance entre le conducteur, l'enfant et les parents. À chaque prise en charge et chaque dépose, les parents reçoivent un SMS de confirmation horodaté. Les enfants à partir de 6 ans peuvent voyager sans accompagnateur adulte avec une autorisation parentale écrite. Ce service est également adapté à la garde alternée, assurant le transfert régulier et ponctuel de l'enfant entre les deux domiciles parentaux.",
        useCases:
          "Les parents débordés utilisent le taxi enfant pour les trajets école-domicile, domicile-activités extrascolaires (sport, musique, cours particuliers) lorsqu'ils ne peuvent pas se libérer. Les familles en garde alternée programment des transferts réguliers entre les deux domiciles parentaux, avec le même chauffeur de confiance chaque semaine. Les familles voyageant avec des bébés et jeunes enfants réservent le taxi enfant pour les transferts aéroport, bénéficiant de sièges auto adaptés sans avoir à transporter les leurs. Les parents d'adolescents l'utilisent pour les retours de soirée ou de fêtes d'anniversaire, garantissant un transport sûr supervisé par un chauffeur vérifié.",
        howItWorks:
          "Réservez sur TaxiNeo en sélectionnant « Taxi enfant ». Indiquez l'âge et le poids de chaque enfant pour l'attribution automatique du siège adapté. Précisez si l'enfant voyage accompagné ou seul (avec autorisation parentale). Pour un abonnement scolaire, configurez les jours, horaires et adresses récurrents. Le chauffeur vérifié arrive avec les sièges installés, confirme la prise en charge par SMS aux parents et assure un trajet sécurisé.",
      },
      en: {
        metaTitle: "Child Taxi: safe transport with child car seat | TaxiNeo",
        metaDescription:
          "Book a child taxi with an adapted car seat. Safe transport for your children: school, activities, shared custody. Trusted driver, fixed price.",
        heroTitle: "Child Taxi",
        heroSubtitle:
          "Safe and adapted transport for your children. Car seats provided, trusted drivers.",
        description:
          "TaxiNeo child taxi ensures safe transport for your children with car seats adapted to their age and size. Ideal for school runs, extracurricular activities or shared custody. Our drivers are selected for their reliability and kindness towards children.",
        benefits: [
          "Car seats and boosters provided (ages 0-10)",
          "Verified and caring drivers",
          "Recurring service for school runs",
          "SMS confirmation at every pick-up and drop-off",
          "Secure transport for shared custody",
        ],
        faq: [
          {
            question: "Can a child travel alone in a taxi?",
            answer:
              "Yes, from age 6, a child can travel alone in a taxi with written parental consent. The driver confirms pick-up and drop-off by SMS to the parents.",
          },
          {
            question: "What car seats are available?",
            answer:
              "We provide group 0+ car seats (birth to 13 kg), group 1 (9 to 18 kg), group 2/3 (15 to 36 kg) and booster seats. Specify the child's age and weight when booking.",
          },
          {
            question: "Can I book a recurring taxi for school?",
            answer:
              "Yes, we offer subscriptions for daily school runs. The same driver is assigned whenever possible to build trust.",
          },
          {
            question: "How are drivers selected?",
            answer:
              "All our drivers hold a professional licence, are verified (criminal record check) and trained in welcoming children. They undergo enhanced screening for this service.",
          },
        ],
        detailedDescription:
          "The TaxiNeo child taxi is a secure transport service specifically designed for families with children, from newborns to teenagers. Every vehicle is fitted with approved child car seats matched to the child's age and weight: group 0 carrycot for newborns, group 0+ infant carrier up to 13 kg, group 1 seat from 9 to 18 kg, group 2/3 booster from 15 to 36 kg. Our drivers undergo enhanced selection including criminal record checks, in-depth interviews and specific training in transporting minors. They know how to correctly install each type of seat, adopt particularly gentle driving and reassure children during the journey. For daily school runs, TaxiNeo offers a subscription service with the same driver assigned to build a trusting relationship between driver, child and parents. At every pick-up and drop-off, parents receive a timestamped SMS confirmation. Children aged 6 and over can travel without an adult accompanier with written parental consent. This service is also suited to shared custody arrangements, ensuring regular and punctual transfers between both parental homes.",
        useCases:
          "Busy parents use the child taxi for school-to-home and home-to-extracurricular activity runs (sport, music, tutoring) when they cannot get away. Shared custody families schedule regular transfers between both parental homes with the same trusted driver each week. Families travelling with babies and toddlers book the child taxi for airport transfers, benefiting from fitted child seats without having to carry their own. Parents of teenagers use it for returns from parties or birthday celebrations, ensuring safe transport supervised by a vetted driver.",
        howItWorks:
          "Book on TaxiNeo by selecting 'Child taxi'. Enter each child's age and weight for automatic assignment of the correct seat. Specify whether the child travels accompanied or alone (with parental consent). For a school subscription, configure recurring days, times and addresses. The vetted driver arrives with seats already fitted, confirms pick-up by SMS to parents and ensures a safe journey.",
      },
    },
  },
  {
    slug: "taxi-longue-distance",
    title: "Taxi Longue Distance",
    icon: "solar:route-linear",
    category: "transport",
    i18n: {
      fr: {
        metaTitle: "Taxi Longue Distance : trajets interurbains partout en France | TaxiNeo",
        metaDescription:
          "Réservez un taxi longue distance pour vos trajets interurbains en France. Paris-Lyon, Paris-Lille, toutes destinations. Prix fixe, confort garanti.",
        heroTitle: "Taxi Longue Distance",
        heroSubtitle:
          "Voyagez sur de longues distances en tout confort. Prix fixe garanti, pas de stress, un seul chauffeur de bout en bout.",
        description:
          "Le taxi longue distance est la solution idéale pour les trajets interurbains quand le train ou l'avion ne conviennent pas. De porte à porte, sans correspondance ni attente, nos chauffeurs vous conduisent partout en France avec un confort premium. Le prix est fixé à la réservation pour éviter toute surprise.",
        benefits: [
          "Prix fixe garanti sur toutes les distances",
          "De porte à porte, sans correspondance",
          "Véhicules confortables pour longs trajets (prises USB, eau)",
          "Possibilité d'arrêts en route (pauses, repas)",
          "Alternative au train quand les horaires ne conviennent pas",
        ],
        faq: [
          {
            question: "Quel est le prix d'un taxi longue distance ?",
            answer:
              "Le prix dépend de la distance et du type de véhicule. À titre indicatif : Paris-Lyon environ 450-550 €, Paris-Lille environ 250-320 €. Le prix exact est communiqué à la réservation.",
          },
          {
            question: "Peut-on faire des arrêts pendant le trajet ?",
            answer:
              "Oui, des arrêts sont possibles et même recommandés pour les longs trajets. Pause café, aire de repos, arrêt repas : précisez vos souhaits et nous les intégrons à l'itinéraire.",
          },
          {
            question: "Le taxi longue distance est-il plus cher que le train ?",
            answer:
              "Pour un voyageur seul, le taxi est généralement plus cher. Mais à partir de 3 passagers, le prix par personne devient souvent comparable au train, avec le confort du porte-à-porte en plus.",
          },
          {
            question: "Quelles destinations longue distance proposez-vous ?",
            answer:
              "Nous proposons toutes les destinations en France métropolitaine, sans limite de distance. Paris-Marseille, Paris-Bordeaux, Lyon-Nice : toutes les combinaisons sont possibles.",
          },
        ],
        detailedDescription:
          "Le taxi longue distance TaxiNeo offre une alternative premium au train et à l'avion pour les trajets interurbains à travers toute la France métropolitaine. Ce service de porte à porte supprime les contraintes des transports collectifs : pas de correspondance, pas d'attente en gare, pas de limitation de bagages et un départ à l'heure exacte qui vous convient. Nos berlines confortables — Mercedes Classe E, BMW Série 5, Peugeot 508 — sont équipées pour les longs trajets : sièges inclinables en cuir, climatisation bi-zone, prises USB et 220V, bouteilles d'eau offertes et WiFi embarqué. Le prix au kilomètre est dégressif : plus la distance est longue, plus le tarif kilométrique diminue, rendant le taxi longue distance compétitif dès 3 passagers par rapport au TGV. Les pauses en route sont non seulement possibles mais encouragées pour le confort de tous : arrêt café sur aire d'autoroute, pause déjeuner dans un restaurant recommandé par le chauffeur, visite express d'un site touristique en chemin. Nos chauffeurs sont expérimentés sur les trajets autoroutiers et connaissent les itinéraires les plus fluides entre les grandes métropoles françaises. Le tarif fixe est garanti dès la réservation et ne varie jamais, quelles que soient les conditions de circulation.",
        useCases:
          "Les familles avec enfants en bas âge préfèrent le taxi longue distance au train pour éviter le stress des gares, des correspondances et des bagages à porter, tout en gardant les sièges auto installés dans le véhicule. Les cadres et dirigeants l'utilisent pour les déplacements inter-villes (Paris-Lyon, Paris-Bordeaux, Lyon-Marseille), transformant le temps de trajet en temps de travail productif grâce au WiFi et au calme de l'habitacle. Les personnes âgées ou à mobilité réduite choisissent ce service pour le confort du porte-à-porte et l'assistance du chauffeur à chaque étape. Les groupes d'amis en week-end ou en vacances mutualisent le coût d'un taxi longue distance, souvent moins cher par personne que le billet de train en période de pointe.",
        howItWorks:
          "Entrez votre ville de départ et votre destination sur TaxiNeo. Le prix fixe dégressif au kilomètre s'affiche immédiatement. Précisez vos préférences : type de véhicule, arrêts souhaités en route, heure de départ. Validez votre réservation. Le jour du départ, votre chauffeur vous attend à l'adresse indiquée, charge vos bagages et vous conduit à destination avec des pauses confort selon vos envies.",
      },
      en: {
        metaTitle: "Long Distance Taxi: intercity trips across France | TaxiNeo",
        metaDescription:
          "Book a long distance taxi for intercity trips in France. Paris-Lyon, Paris-Lille, all destinations. Fixed price, guaranteed comfort.",
        heroTitle: "Long Distance Taxi",
        heroSubtitle:
          "Travel long distances in complete comfort. Guaranteed fixed price, no stress, one driver from start to finish.",
        description:
          "The long distance taxi is the ideal solution for intercity trips when the train or plane is not suitable. Door to door, with no connections or waiting, our drivers take you anywhere in France with premium comfort. The price is set at booking to avoid any surprises.",
        benefits: [
          "Guaranteed fixed price over all distances",
          "Door to door, no connections",
          "Comfortable vehicles for long journeys (USB ports, water)",
          "Possibility of stops en route (breaks, meals)",
          "Alternative to trains when schedules do not suit",
        ],
        faq: [
          {
            question: "What is the price of a long distance taxi?",
            answer:
              "The price depends on the distance and vehicle type. As a guide: Paris-Lyon approximately 450-550 euros, Paris-Lille approximately 250-320 euros. The exact price is communicated at booking.",
          },
          {
            question: "Can we make stops during the journey?",
            answer:
              "Yes, stops are possible and even recommended for long trips. Coffee break, rest area, meal stop: specify your wishes and we will include them in the route.",
          },
          {
            question: "Is a long distance taxi more expensive than the train?",
            answer:
              "For a single traveller, the taxi is generally more expensive. But from 3 passengers, the per-person price often becomes comparable to the train, with the added comfort of door-to-door service.",
          },
          {
            question: "What long distance destinations do you offer?",
            answer:
              "We offer all destinations in mainland France, with no distance limit. Paris-Marseille, Paris-Bordeaux, Lyon-Nice: all combinations are possible.",
          },
        ],
        detailedDescription:
          "The TaxiNeo long distance taxi offers a premium alternative to train and plane for intercity journeys across mainland France. This door-to-door service eliminates the constraints of public transport: no connections, no station waiting, no luggage restrictions and departure at the exact time that suits you. Our comfortable sedans — Mercedes E-Class, BMW 5 Series, Peugeot 508 — are equipped for long journeys: reclining leather seats, dual-zone climate control, USB and 220V outlets, complimentary water bottles and onboard WiFi. The per-kilometre price is degressive: the longer the distance, the lower the rate per kilometre, making the long distance taxi competitive from 3 passengers compared to high-speed rail. Stops en route are not only possible but encouraged for everyone's comfort: coffee break at a motorway service area, lunch at a restaurant recommended by the driver, quick visit to a tourist site along the way. Our drivers are experienced on motorway routes and know the smoothest itineraries between major French cities. The fixed fare is guaranteed at booking and never changes, regardless of traffic conditions.",
        useCases:
          "Families with young children prefer the long distance taxi over the train to avoid the stress of stations, connections and carrying luggage, while keeping child seats fitted in the vehicle. Executives and business leaders use it for intercity trips (Paris-Lyon, Paris-Bordeaux, Lyon-Marseille), turning travel time into productive work time thanks to WiFi and the quiet cabin. Elderly people or those with reduced mobility choose this service for the comfort of door-to-door travel and the driver's assistance at every stage. Groups of friends on weekend or holiday trips share the cost of a long distance taxi, often cheaper per person than a peak-time train ticket.",
        howItWorks:
          "Enter your departure city and destination on TaxiNeo. The fixed degressive per-kilometre price is displayed immediately. Specify your preferences: vehicle type, desired stops en route, departure time. Confirm your booking. On the day of departure, your driver meets you at the specified address, loads your luggage and drives you to your destination with comfort breaks whenever you wish.",
      },
    },
  },
  {
    slug: "taxi-aller-retour",
    title: "Taxi Aller-Retour",
    icon: "solar:refresh-linear",
    category: "transport",
    i18n: {
      fr: {
        metaTitle: "Taxi Aller-Retour : réservez votre trajet complet à prix réduit | TaxiNeo",
        metaDescription:
          "Réservez un taxi aller-retour et bénéficiez d'un tarif préférentiel. Prix fixe pour l'aller et le retour, chauffeur dédié, aucune attente.",
        heroTitle: "Taxi Aller-Retour",
        heroSubtitle:
          "Réservez l'aller et le retour en une seule fois. Tarif préférentiel et chauffeur dédié pour tout votre déplacement.",
        description:
          "Le taxi aller-retour est la formule la plus pratique et économique pour vos déplacements avec retour prévu. Réservez les deux trajets en une seule fois et bénéficiez d'un tarif préférentiel. Votre chauffeur vous attend sur place ou revient vous chercher à l'heure convenue.",
        benefits: [
          "Tarif réduit par rapport à deux courses séparées",
          "Réservation unique pour les deux trajets",
          "Chauffeur dédié qui vous attend ou revient",
          "Flexibilité sur l'heure de retour",
          "Idéal pour rendez-vous médicaux et démarches",
        ],
        faq: [
          {
            question: "Le tarif aller-retour est-il vraiment moins cher ?",
            answer:
              "Oui, le tarif aller-retour offre une réduction par rapport à deux courses séparées. L'économie varie selon la distance mais se situe généralement entre 10% et 20%.",
          },
          {
            question: "Le chauffeur attend-il entre l'aller et le retour ?",
            answer:
              "Pour les attentes courtes (moins de 2 heures), le chauffeur peut rester sur place. Pour des durées plus longues, il revient vous chercher à l'heure convenue. Pas de frais d'attente excessifs.",
          },
          {
            question: "Puis-je modifier l'heure de retour ?",
            answer:
              "Oui, vous pouvez ajuster l'heure de retour jusqu'à 30 minutes avant l'heure prévue. Contactez votre chauffeur ou modifiez en ligne.",
          },
          {
            question: "Le taxi aller-retour est-il disponible pour les longues distances ?",
            answer:
              "Oui, la formule aller-retour est disponible pour toutes les distances, y compris les trajets interurbains. Plus la distance est longue, plus l'économie est importante.",
          },
        ],
        detailedDescription:
          "Le taxi aller-retour TaxiNeo est une formule tout-en-un qui combine le trajet aller et le trajet retour en une seule réservation, à un tarif préférentiel de 10 à 20 % inférieur à deux courses séparées. Ce service est conçu pour les déplacements avec un retour programmé : rendez-vous médical, démarche administrative, séance shopping, excursion touristique à la journée ou visite familiale. Votre chauffeur dédié vous conduit à destination, puis soit reste sur place si l'attente est courte (moins de 2 heures), soit revient vous chercher à l'heure convenue pour les attentes plus longues. Cette flexibilité vous libère du souci de retrouver un taxi pour le retour, notamment dans les zones moins desservies ou aux heures creuses. Le prix forfaitaire aller-retour est communiqué dès la réservation et intègre le temps d'attente éventuel du chauffeur, garantissant l'absence totale de frais cachés. Vous pouvez ajuster l'heure de retour jusqu'à 30 minutes avant le créneau prévu, par SMS au chauffeur ou via l'application. La formule est disponible pour toutes les distances, des trajets urbains courts aux longs parcours interurbains, et l'économie réalisée augmente proportionnellement avec la distance.",
        useCases:
          "Les patients se rendant à un rendez-vous médical réservent l'aller-retour pour être certains d'avoir un taxi au retour, surtout après une consultation qui peut durer plus longtemps que prévu. Les familles organisent des excursions à la journée — visite de château, parc d'attractions, marché artisanal — avec la tranquillité d'un chauffeur qui les ramène en fin de journée. Les professionnels en rendez-vous client hors de leur ville utilisent la formule pour optimiser leur déplacement sans perdre de temps à chercher un transport retour. Les seniors effectuant des démarches administratives (préfecture, notaire, banque) apprécient la sécurité de savoir que le chauffeur les attend ou revient les chercher.",
        howItWorks:
          "Sur TaxiNeo, sélectionnez la formule « Aller-retour ». Entrez l'adresse de départ, la destination, l'heure de départ et l'heure estimée de retour. Le tarif préférentiel aller-retour s'affiche avec l'économie réalisée par rapport à deux courses séparées. Le chauffeur vous conduit à destination, vous confirme sa disponibilité ou son heure de retour, puis vous ramène au point de départ à l'heure convenue.",
      },
      en: {
        metaTitle: "Round Trip Taxi: book your complete journey at a reduced rate | TaxiNeo",
        metaDescription:
          "Book a round trip taxi and benefit from a preferential rate. Fixed price for outward and return, dedicated driver, no waiting.",
        heroTitle: "Round Trip Taxi",
        heroSubtitle:
          "Book the outward and return journey in one go. Preferential rate and dedicated driver for your entire trip.",
        description:
          "The round trip taxi is the most practical and economical option for your journeys with a planned return. Book both trips at once and benefit from a preferential rate. Your driver waits on site or returns to collect you at the agreed time.",
        benefits: [
          "Reduced rate compared to two separate trips",
          "Single booking for both journeys",
          "Dedicated driver who waits or returns",
          "Flexibility on return time",
          "Ideal for medical appointments and errands",
        ],
        faq: [
          {
            question: "Is the round trip fare really cheaper?",
            answer:
              "Yes, the round trip fare offers a discount compared to two separate trips. The saving varies by distance but is generally between 10% and 20%.",
          },
          {
            question: "Does the driver wait between the outward and return?",
            answer:
              "For short waits (under 2 hours), the driver can stay on site. For longer durations, they return to collect you at the agreed time. No excessive waiting charges.",
          },
          {
            question: "Can I change the return time?",
            answer:
              "Yes, you can adjust the return time up to 30 minutes before the scheduled time. Contact your driver or change online.",
          },
          {
            question: "Is the round trip taxi available for long distances?",
            answer:
              "Yes, the round trip formula is available for all distances, including intercity journeys. The longer the distance, the greater the saving.",
          },
        ],
        detailedDescription:
          "The TaxiNeo round trip taxi is an all-in-one formula combining the outward and return journey in a single booking, at a preferential rate 10 to 20 percent lower than two separate trips. This service is designed for journeys with a planned return: medical appointments, administrative errands, shopping trips, day excursions or family visits. Your dedicated driver takes you to your destination, then either waits on site if the wait is short (under 2 hours) or returns to collect you at the agreed time for longer waits. This flexibility frees you from the worry of finding a taxi for the return, particularly in less-served areas or during off-peak hours. The all-inclusive round trip price is communicated at booking and includes any driver waiting time, guaranteeing no hidden charges whatsoever. You can adjust the return time up to 30 minutes before the scheduled slot, by texting the driver or via the app. The formula is available for all distances, from short urban journeys to long intercity routes, and the savings increase proportionally with distance.",
        useCases:
          "Patients going to medical appointments book a round trip to be certain of having a taxi for the return, especially after a consultation that may run longer than expected. Families organise day excursions — castle visits, theme parks, craft markets — with the peace of mind of a driver bringing them home at the end of the day. Professionals on client visits outside their city use the formula to optimise their trip without wasting time finding return transport. Seniors running administrative errands (prefecture, solicitor, bank) appreciate the security of knowing the driver waits or returns for them.",
        howItWorks:
          "On TaxiNeo, select the 'Round trip' formula. Enter the departure address, destination, departure time and estimated return time. The preferential round trip fare is displayed along with the saving compared to two separate trips. The driver takes you to your destination, confirms their availability or return time, then brings you back to the starting point at the agreed time.",
      },
    },
  },
  {
    slug: "navette-aeroport",
    title: "Navette Aéroport",
    icon: "solar:airplane-linear",
    category: "transport",
    i18n: {
      fr: {
        metaTitle: "Navette Aéroport : transfert taxi vers tous les aéroports | TaxiNeo",
        metaDescription:
          "Réservez votre navette aéroport avec TaxiNeo. Transfert vers CDG, Orly, Lyon, Nice et tous les aéroports de France. Prix fixe, suivi de vol inclus.",
        heroTitle: "Navette Aéroport",
        heroSubtitle:
          "Transfert fiable et ponctuel vers tous les aéroports de France. Prix fixe, suivi de vol et attente gratuite en cas de retard.",
        description:
          "La navette aéroport TaxiNeo est le moyen le plus fiable de rejoindre votre terminal. Nos chauffeurs suivent votre vol en temps réel et vous attendent gratuitement en cas de retard. Du départ au terminal ou de l'atterrissage à votre domicile, profitez d'un transfert sans stress à prix fixe.",
        benefits: [
          "Prix fixe garanti, communiqué à la réservation",
          "Suivi de vol en temps réel inclus",
          "Attente gratuite jusqu'à 60 min en cas de retard de vol",
          "Prise en charge avec panneau nominatif en zone arrivée",
          "Tous les aéroports de France couverts",
        ],
        faq: [
          {
            question: "Que se passe-t-il si mon vol est en retard ?",
            answer:
              "Nous suivons votre vol en temps réel. En cas de retard, votre chauffeur adapte son heure d'arrivée automatiquement. Jusqu'à 60 minutes de retard, aucun supplément n'est facturé.",
          },
          {
            question: "Le chauffeur m'attend-il à l'aéroport avec un panneau ?",
            answer:
              "Oui, pour les arrivées, votre chauffeur vous attend en zone arrivée avec un panneau à votre nom. Vous recevez ses coordonnées par SMS pour le contacter facilement.",
          },
          {
            question: "Quels aéroports sont desservis ?",
            answer:
              "Nous desservons tous les aéroports de France : Paris CDG, Paris Orly, Lyon Saint-Exupéry, Nice Côte d'Azur, Marseille Provence, Toulouse Blagnac, Bordeaux Mérignac, et bien d'autres.",
          },
          {
            question: "À quelle heure faut-il réserver pour un vol matinal ?",
            answer:
              "Pour un vol matinal, nous calculons l'heure de départ idéale en fonction de la distance et du terminal. Réservez la veille et nous nous occupons du timing optimal.",
          },
        ],
        detailedDescription:
          "La navette aéroport TaxiNeo est le service de transfert le plus fiable et le plus complet pour rejoindre ou quitter n'importe quel aéroport de France : Paris-Charles de Gaulle, Paris-Orly, Beauvais-Tillé, Lyon Saint-Exupéry, Nice Côte d'Azur, Marseille Provence, Toulouse Blagnac, Bordeaux Mérignac, Nantes Atlantique et tous les aéroports régionaux. Le système de suivi de vol intégré permet à votre chauffeur de connaître en temps réel l'état de votre vol — retard, avance, changement de terminal — et d'adapter automatiquement son heure d'arrivée. En cas de retard de votre vol, le chauffeur vous attend gratuitement jusqu'à 60 minutes sans supplément. Pour les arrivées, votre chauffeur se positionne en zone arrivée avec un panneau nominatif et vous aide avec vos bagages jusqu'au véhicule. Pour les départs, il calcule l'heure de prise en charge idéale en fonction de la distance, du terminal et du temps d'enregistrement recommandé. Le prix fixe est garanti dès la réservation et ne varie jamais, quelles que soient les conditions de circulation. Nos véhicules sont climatisés, récents et disposent d'un espace bagage dimensionné pour les voyageurs internationaux avec plusieurs valises.",
        useCases:
          "Les voyageurs d'affaires réservent la navette aéroport pour un transfert ponctuel et professionnel entre leur domicile ou hôtel et l'aéroport, avec prise en charge des bagages et conduite en berline confortable. Les familles partant en vacances utilisent ce service pour éviter le stress du stationnement longue durée et bénéficier d'un véhicule spacieux capable d'accueillir poussettes, valises et sièges enfant. Les voyageurs arrivant en France pour la première fois apprécient l'accueil personnalisé avec panneau nominatif, éliminant l'incertitude de trouver un transport à la sortie du terminal. Les passagers ayant des vols très matinaux (4h-6h) ou des arrivées tardives (23h-2h) comptent sur la navette aéroport pour un transport garanti à des heures où les transports en commun ne circulent pas.",
        howItWorks:
          "Réservez sur TaxiNeo en entrant votre adresse, l'aéroport et le numéro de vol. Pour un départ, le système calcule l'heure de prise en charge optimale. Pour une arrivée, le suivi de vol ajuste automatiquement l'heure du chauffeur. Le prix fixe s'affiche instantanément. Le jour J, le chauffeur vous envoie un SMS avec sa position. À l'arrivée, il vous attend avec un panneau nominatif en zone arrivée et prend en charge vos bagages.",
      },
      en: {
        metaTitle: "Airport Shuttle: taxi transfer to all airports | TaxiNeo",
        metaDescription:
          "Book your airport shuttle with TaxiNeo. Transfer to CDG, Orly, Lyon, Nice and all French airports. Fixed price, flight tracking included.",
        heroTitle: "Airport Shuttle",
        heroSubtitle:
          "Reliable and punctual transfer to all French airports. Fixed price, flight tracking and free waiting in case of delay.",
        description:
          "The TaxiNeo airport shuttle is the most reliable way to reach your terminal. Our drivers track your flight in real time and wait for you free of charge in case of delay. From departure to terminal or from landing to your home, enjoy a stress-free transfer at a fixed price.",
        benefits: [
          "Guaranteed fixed price, communicated at booking",
          "Real-time flight tracking included",
          "Free waiting up to 60 min for flight delays",
          "Meet and greet with name board in arrivals",
          "All French airports covered",
        ],
        faq: [
          {
            question: "What happens if my flight is delayed?",
            answer:
              "We track your flight in real time. In case of delay, your driver automatically adjusts their arrival time. Up to 60 minutes of delay, no surcharge is applied.",
          },
          {
            question: "Does the driver wait at the airport with a sign?",
            answer:
              "Yes, for arrivals, your driver waits in the arrivals area with a sign bearing your name. You receive their contact details by SMS for easy communication.",
          },
          {
            question: "Which airports are served?",
            answer:
              "We serve all French airports: Paris CDG, Paris Orly, Lyon Saint-Exupery, Nice Cote d'Azur, Marseille Provence, Toulouse Blagnac, Bordeaux Merignac, and many more.",
          },
          {
            question: "What time should I book for an early morning flight?",
            answer:
              "For an early morning flight, we calculate the ideal departure time based on distance and terminal. Book the day before and we handle the optimal timing.",
          },
        ],
        detailedDescription:
          "The TaxiNeo airport shuttle is the most reliable and comprehensive transfer service for reaching or leaving any airport in France: Paris-Charles de Gaulle, Paris-Orly, Beauvais-Tille, Lyon Saint-Exupery, Nice Cote d'Azur, Marseille Provence, Toulouse Blagnac, Bordeaux Merignac, Nantes Atlantique and all regional airports. The integrated flight tracking system allows your driver to know your flight status in real time — delay, early arrival, terminal change — and automatically adjust their arrival time. If your flight is delayed, the driver waits free of charge for up to 60 minutes at no extra cost. For arrivals, your driver positions in the arrivals area with a name board and helps with your luggage to the vehicle. For departures, they calculate the ideal pick-up time based on distance, terminal and recommended check-in time. The fixed price is guaranteed at booking and never changes, regardless of traffic conditions. Our vehicles are air-conditioned, recent and have luggage space sized for international travellers with multiple suitcases.",
        useCases:
          "Business travellers book the airport shuttle for a punctual and professional transfer between their home or hotel and the airport, with luggage handling and a comfortable sedan ride. Families going on holiday use this service to avoid the stress of long-term parking and benefit from a spacious vehicle for pushchairs, suitcases and child seats. Travellers arriving in France for the first time appreciate the personalised meet and greet with name board, eliminating the uncertainty of finding transport outside the terminal. Passengers with very early flights (4am-6am) or late arrivals (11pm-2am) rely on the airport shuttle for guaranteed transport at hours when public transport is not running.",
        howItWorks:
          "Book on TaxiNeo by entering your address, the airport and your flight number. For departures, the system calculates the optimal pick-up time. For arrivals, flight tracking automatically adjusts the driver's schedule. The fixed price is displayed instantly. On the day, the driver sends you an SMS with their position. On arrival, they meet you with a name board in the arrivals area and handle your luggage.",
      },
    },
  },
  {
    slug: "taxi-conventionne",
    title: "Taxi Conventionné",
    icon: "solar:document-linear",
    category: "special",
    i18n: {
      fr: {
        metaTitle: "Taxi Conventionné : transport remboursé par la CPAM | TaxiNeo",
        metaDescription:
          "Informations sur le taxi conventionné remboursé par la Sécurité sociale. Conditions, prescription médicale, démarches. Trouvez un chauffeur conventionné.",
        heroTitle: "Taxi Conventionné",
        heroSubtitle:
          "Tout savoir sur le transport sanitaire remboursé. Conditions d'accès, démarches et mise en relation avec des chauffeurs conventionnés.",
        description:
          "Le taxi conventionné est un service de transport sanitaire dont les frais peuvent être pris en charge par l'Assurance Maladie. Une prescription médicale de transport est nécessaire. TaxiNeo vous informe sur les conditions et vous aide à trouver un chauffeur conventionné dans votre zone.",
        benefits: [
          "Remboursement possible par la Sécurité sociale",
          "Information claire sur les conditions d'accès",
          "Aide à la recherche de taxis conventionnés",
          "Accompagnement dans les démarches administratives",
          "Alternative si aucun taxi conventionné n'est disponible",
        ],
        faq: [
          {
            question: "Qu'est-ce qu'un taxi conventionné ?",
            answer:
              "Un taxi conventionné est un taxi ayant signé une convention avec la CPAM (Caisse Primaire d'Assurance Maladie). Les frais de transport sanitaire peuvent alors être pris en charge, sous conditions, par l'Assurance Maladie.",
          },
          {
            question: "Quelles sont les conditions de remboursement ?",
            answer:
              "Pour être remboursé, vous devez disposer d'une prescription médicale de transport (PMT) délivrée par votre médecin, et utiliser un taxi conventionné. Le taux de remboursement est généralement de 65%.",
          },
          {
            question: "TaxiNeo est-il un service de taxi conventionné ?",
            answer:
              "TaxiNeo n'est pas un taxi conventionné en tant que tel. Cependant, certains de nos chauffeurs partenaires sont conventionnés. Nous pouvons vous orienter vers un chauffeur conventionné de notre réseau.",
          },
          {
            question: "Que faire si aucun taxi conventionné n'est disponible ?",
            answer:
              "Si aucun taxi conventionné n'est disponible dans votre zone, vous pouvez utiliser TaxiNeo et demander un remboursement a posteriori à votre CPAM avec la facture et votre prescription médicale.",
          },
        ],
        detailedDescription:
          "Le taxi conventionné est un dispositif encadré par l'Assurance Maladie (CPAM) permettant aux patients de bénéficier d'un remboursement partiel ou total de leurs frais de transport vers les établissements de santé. Pour en bénéficier, le patient doit disposer d'une prescription médicale de transport (PMT) délivrée par son médecin traitant ou spécialiste, et le taxi utilisé doit avoir signé une convention avec la CPAM locale. Le remboursement standard s'élève à 65 % du tarif conventionnel, le reste étant pris en charge par la mutuelle complémentaire si le patient en possède une. Pour les patients en affection longue durée (ALD) — dialyse, chimiothérapie, radiothérapie — le remboursement peut atteindre 100 % dans le cadre du tiers payant, le patient n'avançant alors aucun frais. TaxiNeo vous informe sur l'ensemble des conditions d'éligibilité et vous aide à trouver un chauffeur conventionné dans notre réseau de partenaires. Si aucun taxi conventionné n'est disponible dans votre zone, nous vous proposons une alternative avec notre service standard et vous accompagnons dans la démarche de remboursement a posteriori auprès de votre caisse.",
        useCases:
          "Les patients en ALD nécessitant des séances de dialyse trois fois par semaine utilisent le taxi conventionné en tiers payant pour se rendre au centre de dialyse sans avancer de frais. Les patients suivant des traitements de chimiothérapie ou radiothérapie bénéficient du transport conventionné pour leurs allers-retours réguliers entre domicile et centre anti-cancéreux. Les personnes âgées disposant d'une prescription médicale l'utilisent pour leurs consultations spécialisées, examens d'imagerie ou hospitalisations programmées. Les patients sortant d'opération chirurgicale réservent un taxi conventionné pour leur retour à domicile, avec un bon de transport délivré par l'hôpital.",
        howItWorks:
          "Obtenez une prescription médicale de transport (PMT) auprès de votre médecin. Sur TaxiNeo, sélectionnez le service « Taxi conventionné » et indiquez votre numéro de Sécurité sociale. Nous recherchons un chauffeur conventionné disponible dans votre zone. Si un partenaire conventionné est trouvé, le trajet est réservé en tiers payant. Sinon, nous vous proposons une course standard avec une facture détaillée pour demander le remboursement à votre CPAM.",
      },
      en: {
        metaTitle: "Conventional Taxi: transport reimbursed by French health insurance | TaxiNeo",
        metaDescription:
          "Information about conventional taxis reimbursed by French social security. Conditions, medical prescription, procedures. Find a conventional driver.",
        heroTitle: "Conventional Taxi",
        heroSubtitle:
          "Everything you need to know about reimbursed medical transport. Access conditions, procedures and connecting with conventional drivers.",
        description:
          "The conventional taxi is a medical transport service whose costs may be covered by French Health Insurance. A medical transport prescription is required. TaxiNeo informs you about the conditions and helps you find a conventional driver in your area.",
        benefits: [
          "Possible reimbursement by French social security",
          "Clear information on access conditions",
          "Help finding conventional taxis",
          "Support with administrative procedures",
          "Alternative if no conventional taxi is available",
        ],
        faq: [
          {
            question: "What is a conventional taxi?",
            answer:
              "A conventional taxi has signed an agreement with the CPAM (French primary health insurance fund). Medical transport costs can then be covered, subject to conditions, by French Health Insurance.",
          },
          {
            question: "What are the reimbursement conditions?",
            answer:
              "To be reimbursed, you need a medical transport prescription (PMT) issued by your doctor, and you must use a conventional taxi. The reimbursement rate is generally 65%.",
          },
          {
            question: "Is TaxiNeo a conventional taxi service?",
            answer:
              "TaxiNeo is not a conventional taxi as such. However, some of our partner drivers are conventional. We can direct you to a conventional driver in our network.",
          },
          {
            question: "What if no conventional taxi is available?",
            answer:
              "If no conventional taxi is available in your area, you can use TaxiNeo and request reimbursement afterwards from your CPAM with the invoice and your medical prescription.",
          },
        ],
        detailedDescription:
          "The conventional taxi is a scheme regulated by French Health Insurance (CPAM) enabling patients to receive partial or full reimbursement of their transport costs to healthcare facilities. To qualify, the patient must have a medical transport prescription (PMT) issued by their GP or specialist, and the taxi used must have signed an agreement with the local CPAM. Standard reimbursement is 65 percent of the conventional rate, with the remainder covered by supplementary health insurance if the patient has one. For patients with long-term conditions (ALD) — dialysis, chemotherapy, radiotherapy — reimbursement can reach 100 percent under the third-party payment system, meaning the patient pays nothing upfront. TaxiNeo provides information on all eligibility conditions and helps you find a conventional driver within our partner network. If no conventional taxi is available in your area, we offer an alternative through our standard service and guide you through the process of claiming reimbursement from your fund afterwards.",
        useCases:
          "ALD patients requiring dialysis sessions three times a week use the conventional taxi with third-party payment to reach the dialysis centre without paying upfront. Patients undergoing chemotherapy or radiotherapy benefit from conventional transport for their regular round trips between home and the cancer treatment centre. Elderly people with a medical prescription use it for specialist consultations, imaging examinations or planned hospitalisations. Post-surgical patients book a conventional taxi for their return home, with a transport voucher issued by the hospital.",
        howItWorks:
          "Obtain a medical transport prescription (PMT) from your doctor. On TaxiNeo, select the 'Conventional taxi' service and enter your social security number. We search for an available conventional driver in your area. If a conventional partner is found, the trip is booked under third-party payment. If not, we offer a standard trip with a detailed invoice for you to claim reimbursement from your CPAM.",
      },
    },
  },
  {
    slug: "taxi-luxe",
    title: "Taxi Luxe",
    icon: "solar:star-linear",
    category: "premium",
    i18n: {
      fr: {
        metaTitle: "Taxi de Luxe : berline premium avec chauffeur privé | TaxiNeo",
        metaDescription:
          "Réservez un taxi de luxe avec chauffeur privé. Mercedes Classe S, BMW Série 7, Audi A8. Service VIP, confort exceptionnel, prix fixe.",
        heroTitle: "Taxi de Luxe",
        heroSubtitle:
          "Vivez une expérience de transport d'exception. Berlines premium, chauffeurs en costume et service VIP personnalisé.",
        description:
          "Le taxi de luxe TaxiNeo offre une expérience de transport haut de gamme pour les clients les plus exigeants. Nos berlines premium (Mercedes Classe S, BMW Série 7, Audi A8) et nos chauffeurs en costume offrent un service irréprochable. Idéal pour les déplacements d'affaires, les événements prestigieux ou simplement pour se faire plaisir.",
        benefits: [
          "Berlines premium : Mercedes Classe S, BMW Série 7, Audi A8",
          "Chauffeur en costume, discret et professionnel",
          "Eau minérale, journaux et WiFi à bord",
          "Ouverture de porte et prise en charge des bagages",
          "Service VIP personnalisé selon vos préférences",
        ],
        faq: [
          {
            question: "Quels véhicules de luxe sont disponibles ?",
            answer:
              "Notre flotte premium comprend des Mercedes Classe S, BMW Série 7, Audi A8 et des SUV de luxe (Mercedes GLE, BMW X5). Tous les véhicules sont récents (moins de 2 ans) et impeccablement entretenus.",
          },
          {
            question: "Le taxi de luxe est-il disponible pour les transferts aéroport ?",
            answer:
              "Oui, le transfert aéroport est l'un des usages les plus populaires. Accueil personnalisé en zone arrivée, prise en charge des bagages et trajet en berline premium.",
          },
          {
            question: "Peut-on réserver un taxi de luxe pour une journée entière ?",
            answer:
              "Oui, nous proposons la mise à disposition à la journée ou à la demi-journée. Votre chauffeur reste à votre disposition pour tous vos déplacements durant la période choisie.",
          },
          {
            question: "Le tarif inclut-il les prestations VIP ?",
            answer:
              "Oui, toutes les prestations VIP (eau, journaux, WiFi, ouverture de porte, prise en charge bagages) sont incluses dans le tarif. Aucun supplément caché.",
          },
        ],
        detailedDescription:
          "Le taxi de luxe TaxiNeo incarne l'excellence du transport privé haut de gamme en France. Notre flotte premium comprend les berlines les plus prestigieuses du marché : Mercedes Classe S avec sellerie cuir Nappa et suspension pneumatique, BMW Série 7 avec éclairage d'ambiance et insonorisation renforcée, et Audi A8 avec sièges massants et toit panoramique. Chaque véhicule est entretenu selon des standards d'exigence supérieurs, avec un contrôle minutieux avant chaque course : propreté irréprochable, parfum d'ambiance discret, bouteilles d'eau minérale fraîche, presse du jour et connexion WiFi haut débit. Nos chauffeurs de luxe portent un costume sombre, une cravate et des gants blancs. Ils sont formés au protocole VIP : ouverture de porte, assistance bagages, discrétion absolue et adaptation aux demandes spécifiques du client (température, musique, itinéraire). Le service est disponible en réservation ponctuelle ou en mise à disposition à la journée et à la demi-journée, permettant aux clients de disposer d'un chauffeur personnel pour enchaîner plusieurs rendez-vous. Une coupe de champagne peut être servie à bord sur demande pour célébrer une occasion spéciale.",
        useCases:
          "Les dirigeants d'entreprise et cadres supérieurs utilisent le taxi de luxe pour leurs déplacements professionnels quotidiens, transferts aéroport et rendez-vous clients, projetant une image de prestige et de sérieux. Les célébrités, artistes et personnalités publiques apprécient la discrétion totale du chauffeur et le confort exceptionnel de la berline pour leurs déplacements privés. Les voyageurs d'affaires internationaux réservent le service pour leur séjour en France, bénéficiant d'un chauffeur personnel à la journée qui les accompagne entre hôtel, réunions et dîners d'affaires. Les particuliers souhaitant marquer un anniversaire, une demande en mariage ou une célébration spéciale choisissent le taxi de luxe avec champagne à bord pour une expérience mémorable.",
        howItWorks:
          "Réservez sur TaxiNeo en sélectionnant la gamme « Luxe ». Choisissez votre modèle de berline préféré et indiquez vos préférences (champagne, presse spécifique, température). Pour une mise à disposition, précisez la durée et le programme de la journée. Le tarif tout compris s'affiche immédiatement, sans frais cachés. Le chauffeur en costume vous attend à l'adresse indiquée, ouvre la porte et vous accueille dans un habitacle luxueux préparé selon vos souhaits.",
      },
      en: {
        metaTitle: "Luxury Taxi: premium sedan with private chauffeur | TaxiNeo",
        metaDescription:
          "Book a luxury taxi with private chauffeur. Mercedes S-Class, BMW 7 Series, Audi A8. VIP service, exceptional comfort, fixed price.",
        heroTitle: "Luxury Taxi",
        heroSubtitle:
          "Experience exceptional transport. Premium sedans, suited chauffeurs and personalised VIP service.",
        description:
          "TaxiNeo luxury taxi offers a high-end transport experience for the most demanding clients. Our premium sedans (Mercedes S-Class, BMW 7 Series, Audi A8) and suited chauffeurs provide impeccable service. Ideal for business trips, prestigious events or simply treating yourself.",
        benefits: [
          "Premium sedans: Mercedes S-Class, BMW 7 Series, Audi A8",
          "Suited, discreet and professional chauffeur",
          "Mineral water, newspapers and WiFi on board",
          "Door opening and luggage handling",
          "Personalised VIP service tailored to your preferences",
        ],
        faq: [
          {
            question: "What luxury vehicles are available?",
            answer:
              "Our premium fleet includes Mercedes S-Class, BMW 7 Series, Audi A8 and luxury SUVs (Mercedes GLE, BMW X5). All vehicles are recent (under 2 years old) and impeccably maintained.",
          },
          {
            question: "Is the luxury taxi available for airport transfers?",
            answer:
              "Yes, the airport transfer is one of the most popular uses. Personalised meet and greet in arrivals, luggage handling and journey in a premium sedan.",
          },
          {
            question: "Can I book a luxury taxi for a full day?",
            answer:
              "Yes, we offer full-day or half-day hire. Your chauffeur remains at your disposal for all your journeys during the chosen period.",
          },
          {
            question: "Does the fare include VIP amenities?",
            answer:
              "Yes, all VIP amenities (water, newspapers, WiFi, door opening, luggage handling) are included in the fare. No hidden surcharges.",
          },
        ],
        detailedDescription:
          "The TaxiNeo luxury taxi embodies the pinnacle of premium private transport in France. Our prestige fleet includes the most distinguished sedans on the market: Mercedes S-Class with Nappa leather upholstery and air suspension, BMW 7 Series with ambient lighting and enhanced sound insulation, and Audi A8 with massage seats and panoramic roof. Every vehicle is maintained to superior standards, with meticulous checks before each trip: spotless cleanliness, subtle ambient fragrance, chilled mineral water bottles, daily newspapers and high-speed WiFi. Our luxury chauffeurs wear a dark suit, tie and white gloves. They are trained in VIP protocol: door opening, luggage assistance, absolute discretion and adaptation to the client's specific requests (temperature, music, route). The service is available as a one-off booking or as full-day and half-day hire, allowing clients to have a personal chauffeur for consecutive appointments. A glass of champagne can be served on board upon request to celebrate a special occasion.",
        useCases:
          "CEOs and senior executives use the luxury taxi for daily business travel, airport transfers and client meetings, projecting an image of prestige and professionalism. Celebrities, artists and public figures appreciate the chauffeur's total discretion and the sedan's exceptional comfort for private journeys. International business travellers book the service for their stay in France, benefiting from a personal chauffeur for the day who accompanies them between hotel, meetings and business dinners. Private clients wishing to mark a birthday, a marriage proposal or a special celebration choose the luxury taxi with champagne on board for a memorable experience.",
        howItWorks:
          "Book on TaxiNeo by selecting the 'Luxury' tier. Choose your preferred sedan model and indicate your preferences (champagne, specific newspapers, temperature). For full-day hire, specify the duration and the day's programme. The all-inclusive fare is displayed immediately, with no hidden charges. The suited chauffeur meets you at the specified address, opens the door and welcomes you into a luxurious cabin prepared to your wishes.",
      },
    },
  },
  {
    slug: "taxi-ecologique",
    title: "Taxi Écologique",
    icon: "solar:leaf-linear",
    category: "premium",
    i18n: {
      fr: {
        metaTitle: "Taxi Écologique : véhicule électrique ou hybride | TaxiNeo",
        metaDescription:
          "Réservez un taxi écologique : véhicule 100% électrique ou hybride. Réduisez votre empreinte carbone sans compromis sur le confort. Prix fixe garanti.",
        heroTitle: "Taxi Écologique",
        heroSubtitle:
          "Voyagez responsable en taxi électrique ou hybride. Même confort, même service, empreinte carbone réduite.",
        description:
          "Le taxi écologique TaxiNeo vous permet de voyager de manière responsable sans compromettre le confort. Nos véhicules 100% électriques (Tesla Model 3, Mercedes EQS) ou hybrides offrent une conduite silencieuse et un confort premium, tout en réduisant significativement les émissions de CO2.",
        benefits: [
          "Véhicules 100% électriques ou hybrides rechargeables",
          "Conduite silencieuse et ultra-confortable",
          "Réduction significative des émissions de CO2",
          "Tesla Model 3, Mercedes EQS et autres modèles premium",
          "Même tarif qu'un taxi classique, sans supplément",
        ],
        faq: [
          {
            question: "Quels véhicules écologiques sont disponibles ?",
            answer:
              "Notre flotte écologique comprend des Tesla Model 3 et Model Y, des Mercedes EQS et EQE, des Hyundai Ioniq 5 et des hybrides rechargeables de dernière génération.",
          },
          {
            question: "Le taxi écologique coûte-t-il plus cher ?",
            answer:
              "Non, le tarif est identique à celui d'un taxi classique. Choisir un véhicule écologique ne coûte rien de plus avec TaxiNeo.",
          },
          {
            question: "Un taxi électrique a-t-il assez d'autonomie pour les longs trajets ?",
            answer:
              "Nos Tesla et Mercedes EQS disposent d'une autonomie de 400 à 600 km. Pour les très longs trajets, nous pouvons prévoir un arrêt rapide de recharge (30 min) si nécessaire.",
          },
          {
            question: "Comment réduisez-vous l'empreinte carbone ?",
            answer:
              "Au-delà des véhicules électriques, nous optimisons les itinéraires pour réduire les distances, nous compensons les émissions résiduelles et nous investissons dans des projets de reforestation.",
          },
        ],
        detailedDescription:
          "Le taxi écologique TaxiNeo permet de concilier mobilité urbaine et engagement environnemental sans aucun compromis sur le confort, la ponctualité ou le tarif. Notre flotte verte est composée de véhicules 100 % électriques de dernière génération — Tesla Model 3 et Model Y, Mercedes EQS et EQE, Hyundai Ioniq 5 — ainsi que d'hybrides rechargeables premium pour les trajets nécessitant une autonomie étendue. Les véhicules électriques offrent une expérience de conduite unique : silence total de l'habitacle, accélération progressive et fluide, absence de vibration moteur et climatisation performante alimentée par la batterie. L'autonomie de nos modèles phares atteint 400 à 600 km, couvrant sans difficulté la grande majorité des trajets urbains et périurbains. Pour les longs parcours, un arrêt de recharge rapide de 20 à 30 minutes sur borne Supercharger ou Ionity suffit à reprendre la route. Le tarif du taxi écologique est strictement identique à celui d'un taxi classique thermique : choisir l'option verte ne coûte pas un centime de plus. Au-delà du choix des véhicules, TaxiNeo optimise les itinéraires pour réduire les distances parcourues, compense les émissions résiduelles des hybrides via des programmes certifiés et investit dans des projets de reforestation en France.",
        useCases:
          "Les entreprises engagées dans une démarche RSE choisissent le taxi écologique pour les déplacements professionnels de leurs collaborateurs, affichant concrètement leur engagement environnemental auprès de leurs clients et partenaires. Les particuliers sensibles à l'écologie l'utilisent pour leurs trajets quotidiens, transferts aéroport et sorties, réduisant leur empreinte carbone sans modifier leurs habitudes de transport. Les collectivités locales et administrations publiques le réservent pour le transport de leurs élus et agents dans le cadre de plans de mobilité durable. Les voyageurs découvrant les véhicules électriques pour la première fois profitent du taxi écologique pour expérimenter le silence, le confort et la technologie embarquée d'une Tesla ou d'une Mercedes EQS avant un éventuel achat personnel.",
        howItWorks:
          "Sur TaxiNeo, cochez l'option « Véhicule écologique » lors de votre réservation. Vous pouvez choisir entre 100 % électrique ou hybride rechargeable selon vos préférences. Le tarif affiché est identique à celui d'un taxi classique. Un véhicule vert disponible dans votre zone est attribué automatiquement. Le chauffeur arrive dans un véhicule silencieux et zéro émission, vous offrant un trajet confortable et responsable jusqu'à votre destination.",
      },
      en: {
        metaTitle: "Eco Taxi: electric or hybrid vehicle | TaxiNeo",
        metaDescription:
          "Book an eco taxi: 100% electric or hybrid vehicle. Reduce your carbon footprint without compromising on comfort. Guaranteed fixed price.",
        heroTitle: "Eco Taxi",
        heroSubtitle:
          "Travel responsibly in an electric or hybrid taxi. Same comfort, same service, reduced carbon footprint.",
        description:
          "TaxiNeo eco taxi lets you travel responsibly without compromising comfort. Our 100% electric vehicles (Tesla Model 3, Mercedes EQS) or hybrids offer a silent ride and premium comfort, while significantly reducing CO2 emissions.",
        benefits: [
          "100% electric or plug-in hybrid vehicles",
          "Silent and ultra-comfortable ride",
          "Significant reduction in CO2 emissions",
          "Tesla Model 3, Mercedes EQS and other premium models",
          "Same fare as a standard taxi, no surcharge",
        ],
        faq: [
          {
            question: "What eco vehicles are available?",
            answer:
              "Our eco fleet includes Tesla Model 3 and Model Y, Mercedes EQS and EQE, Hyundai Ioniq 5 and latest-generation plug-in hybrids.",
          },
          {
            question: "Does the eco taxi cost more?",
            answer:
              "No, the fare is identical to a standard taxi. Choosing an eco vehicle costs nothing extra with TaxiNeo.",
          },
          {
            question: "Does an electric taxi have enough range for long trips?",
            answer:
              "Our Teslas and Mercedes EQS have a range of 400 to 600 km. For very long trips, we can plan a quick recharging stop (30 min) if needed.",
          },
          {
            question: "How do you reduce your carbon footprint?",
            answer:
              "Beyond electric vehicles, we optimise routes to reduce distances, offset residual emissions and invest in reforestation projects.",
          },
        ],
        detailedDescription:
          "The TaxiNeo eco taxi lets you combine urban mobility with environmental commitment without any compromise on comfort, punctuality or fare. Our green fleet consists of latest-generation 100 percent electric vehicles — Tesla Model 3 and Model Y, Mercedes EQS and EQE, Hyundai Ioniq 5 — as well as premium plug-in hybrids for journeys requiring extended range. Electric vehicles offer a unique driving experience: total cabin silence, smooth progressive acceleration, no engine vibration and efficient climate control powered by the battery. The range of our flagship models reaches 400 to 600 km, easily covering the vast majority of urban and suburban journeys. For long trips, a quick 20 to 30-minute recharging stop at a Supercharger or Ionity station is enough to continue the journey. The eco taxi fare is strictly identical to a standard combustion-engine taxi: choosing the green option does not cost a single penny more. Beyond vehicle choice, TaxiNeo optimises routes to reduce distances travelled, offsets residual hybrid emissions through certified programmes and invests in reforestation projects in France.",
        useCases:
          "Companies committed to CSR choose the eco taxi for their employees' business travel, visibly demonstrating their environmental commitment to clients and partners. Environmentally conscious individuals use it for daily journeys, airport transfers and outings, reducing their carbon footprint without changing their transport habits. Local authorities and public administrations book it for transporting elected officials and staff as part of sustainable mobility plans. Travellers discovering electric vehicles for the first time enjoy the eco taxi to experience the silence, comfort and onboard technology of a Tesla or Mercedes EQS before a potential personal purchase.",
        howItWorks:
          "On TaxiNeo, tick the 'Eco vehicle' option when booking. You can choose between 100 percent electric or plug-in hybrid according to your preference. The displayed fare is identical to a standard taxi. An available green vehicle in your area is automatically assigned. The driver arrives in a silent, zero-emission vehicle, offering you a comfortable and responsible journey to your destination.",
      },
    },
  },
];

export function getServiceBySlug(slug: string): ServiceSeo | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServiceSeo["category"]): ServiceSeo[] {
  return services.filter((s) => s.category === category);
}
