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
