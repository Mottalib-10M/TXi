export interface GuideFAQ {
  question: string;
  answer: string;
}

export interface GuideSection {
  title: string;
  content: string;
}

export interface GuideI18n {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  sections: GuideSection[];
  faq: GuideFAQ[];
}

export interface Guide {
  slug: string;
  title: string;
  icon: string;
  readingTime: number;
  i18n: {
    fr: GuideI18n;
    en: GuideI18n;
  };
}

export const guides: Guide[] = [
  {
    slug: "taxi-vs-uber",
    title: "Taxi vs Uber",
    icon: "solar:scale-linear",
    readingTime: 8,
    i18n: {
      fr: {
        metaTitle: "Taxi vs Uber en France : comparatif complet 2026 | TaxiNeo",
        metaDescription:
          "Taxi ou Uber ? Découvrez les différences de prix, réglementation, assurance et qualité de service entre taxis et VTC en France. Guide comparatif complet.",
        heroTitle: "Taxi vs Uber : quel choix en 2026 ?",
        heroSubtitle:
          "Comparez les taxis conventionnels et les VTC comme Uber pour faire le meilleur choix selon votre trajet, votre budget et vos besoins.",
        sections: [
          {
            title: "Réglementation et statut légal",
            content:
              "En France, les taxis disposent d'une licence délivrée par la préfecture, leur permettant de prendre des clients dans la rue ou aux bornes. Les VTC (Uber, Bolt, etc.) ne peuvent accepter que des courses pré-réservées via une application. Cette distinction légale, encadrée par la loi Grandguillaume de 2016, définit fondamentalement les deux modèles. Les taxis bénéficient d'un monopole sur la maraude et les stations, tandis que les VTC doivent retourner à leur base entre chaque course.",
          },
          {
            title: "Comparatif des prix",
            content:
              "Les tarifs des taxis sont réglementés par arrêté préfectoral : prise en charge, prix au kilomètre et tarif horaire sont encadrés. Chez Uber, les prix varient selon l'offre et la demande (tarification dynamique), pouvant doubler en heure de pointe. Pour les trajets aéroport, les taxis appliquent des forfaits obligatoires souvent plus avantageux. Avec TaxiNeo, vous bénéficiez de prix fixes sans compteur ni majoration surprise.",
          },
          {
            title: "Assurance et sécurité",
            content:
              "Les taxis français sont couverts par une assurance professionnelle spécifique et soumis à un contrôle technique annuel obligatoire. Le chauffeur de taxi détient une carte professionnelle délivrée par la préfecture après examen. Les VTC sont également assurés, mais les conditions varient selon les plateformes. En cas d'accident, la couverture du taxi est systématiquement plus claire et mieux encadrée juridiquement.",
          },
          {
            title: "Qualité de service",
            content:
              "Les taxis offrent un service disponible immédiatement en station ou par hélement dans la rue. Les VTC se distinguent par leur application intuitive et le suivi GPS en temps réel. Avec TaxiNeo, vous combinez le meilleur des deux mondes : la fiabilité du taxi réglementé et la simplicité de la réservation en ligne avec prix fixe garanti.",
          },
          {
            title: "Disponibilité et couverture",
            content:
              "Les taxis couvrent l'ensemble du territoire français, y compris les zones rurales, et sont disponibles 24h/24 dans les grandes villes. Les VTC sont principalement présents dans les grandes agglomérations et peuvent être rares en province ou la nuit. Pour les transferts aéroport et gare, les taxis restent la solution la plus fiable avec des stations dédiées sur place.",
          },
        ],
        faq: [
          {
            question: "Le taxi est-il moins cher qu'Uber ?",
            answer:
              "Cela dépend du trajet et de l'heure. Pour les courses aéroport, le taxi est souvent moins cher grâce aux forfaits obligatoires. En heure de pointe, Uber peut appliquer une tarification dynamique qui double le prix, rendant le taxi plus avantageux. Avec TaxiNeo, le prix fixe élimine toute incertitude.",
          },
          {
            question: "Puis-je réserver un taxi à l'avance comme un Uber ?",
            answer:
              "Oui, la réservation à l'avance est possible pour les taxis. TaxiNeo permet de réserver en ligne en quelques secondes avec un prix fixe garanti, exactement comme une application VTC mais avec un taxi professionnel.",
          },
          {
            question: "Quelles sont les garanties du taxi par rapport à Uber ?",
            answer:
              "Le taxi offre une licence préfectorale, un contrôle technique annuel obligatoire, une assurance professionnelle spécifique et un tarif réglementé. Le chauffeur a passé un examen professionnel. Ces garanties sont encadrées par la loi.",
          },
          {
            question: "Uber est-il disponible partout en France ?",
            answer:
              "Non, Uber et les VTC sont principalement présents dans les grandes villes (Paris, Lyon, Marseille, Bordeaux, etc.). Les taxis couvrent tout le territoire français, y compris les villes moyennes et les zones rurales.",
          },
        ],
      },
      en: {
        metaTitle: "Taxi vs Uber in France: full comparison 2026 | TaxiNeo",
        metaDescription:
          "Taxi or Uber? Discover the differences in pricing, regulations, insurance and service quality between taxis and ride-hailing in France. Full comparison.",
        heroTitle: "Taxi vs Uber: which to choose in 2026?",
        heroSubtitle:
          "Compare conventional taxis and ride-hailing services like Uber to make the best choice based on your trip, budget and needs.",
        sections: [
          {
            title: "Regulations and legal status",
            content:
              "In France, taxis hold a licence issued by the prefecture, allowing them to pick up passengers on the street or at taxi stands. Ride-hailing services (Uber, Bolt, etc.) can only accept pre-booked rides through an app. This legal distinction, governed by the 2016 Grandguillaume law, fundamentally defines the two models. Taxis have a monopoly on street hailing and rank pickups, while VTCs must return to their base between rides.",
          },
          {
            title: "Price comparison",
            content:
              "Taxi fares are regulated by prefectural order: pick-up charge, per-kilometre rate and hourly waiting fee are all controlled. With Uber, prices vary based on supply and demand (surge pricing), potentially doubling during peak hours. For airport transfers, taxis apply mandatory flat rates that are often more advantageous. With TaxiNeo, you get fixed prices with no meter or surprise surcharges.",
          },
          {
            title: "Insurance and safety",
            content:
              "French taxis are covered by specific professional insurance and subject to mandatory annual vehicle inspections. Taxi drivers hold a professional card issued by the prefecture after passing an exam. VTCs are also insured, but conditions vary across platforms. In case of an accident, taxi coverage is consistently clearer and better regulated legally.",
          },
          {
            title: "Quality of service",
            content:
              "Taxis offer immediately available service at ranks or by street hailing. VTCs stand out with their intuitive app and real-time GPS tracking. With TaxiNeo, you get the best of both worlds: the reliability of a regulated taxi and the simplicity of online booking with a guaranteed fixed price.",
          },
          {
            title: "Availability and coverage",
            content:
              "Taxis cover the entire French territory, including rural areas, and are available 24/7 in major cities. VTCs are mainly present in large metropolitan areas and can be scarce in smaller towns or at night. For airport and station transfers, taxis remain the most reliable option with dedicated ranks on site.",
          },
        ],
        faq: [
          {
            question: "Is a taxi cheaper than Uber?",
            answer:
              "It depends on the route and time of day. For airport rides, taxis are often cheaper thanks to mandatory flat rates. During peak hours, Uber may apply surge pricing that doubles the fare, making taxis more cost-effective. With TaxiNeo, the fixed price eliminates all uncertainty.",
          },
          {
            question: "Can I book a taxi in advance like an Uber?",
            answer:
              "Yes, advance booking is available for taxis. TaxiNeo lets you book online in seconds with a guaranteed fixed price, just like a ride-hailing app but with a professional taxi.",
          },
          {
            question:
              "What guarantees does a taxi offer compared to Uber?",
            answer:
              "Taxis offer a prefectural licence, mandatory annual vehicle inspection, specific professional insurance and regulated fares. The driver has passed a professional examination. These guarantees are enshrined in law.",
          },
          {
            question: "Is Uber available everywhere in France?",
            answer:
              "No, Uber and VTCs are mainly present in major cities (Paris, Lyon, Marseille, Bordeaux, etc.). Taxis cover the entire French territory, including medium-sized towns and rural areas.",
          },
        ],
      },
    },
  },
  {
    slug: "comment-prendre-taxi",
    title: "Comment prendre un taxi",
    icon: "solar:hand-shake-linear",
    readingTime: 6,
    i18n: {
      fr: {
        metaTitle:
          "Prendre un taxi en France : guide pratique | TaxiNeo",
        metaDescription:
          "Prendre un taxi en France : héler, stations, applications, paiement CB ou espèces et droits du passager. Guide pratique pour résidents et touristes.",
        heroTitle: "Comment prendre un taxi en France",
        heroSubtitle:
          "Tout ce que vous devez savoir pour prendre un taxi en toute sérénité : trouver un taxi, monter à bord, payer et connaître vos droits.",
        sections: [
          {
            title: "Héler un taxi dans la rue",
            content:
              "En France, vous pouvez héler un taxi libre dans la rue en levant la main. Un taxi est disponible lorsque son lumineux de toit est allumé en vert. S'il est éteint ou rouge, le taxi est occupé ou hors service. Dans les grandes villes comme Paris, cette méthode est simple et rapide, surtout en journée.",
          },
          {
            title: "Les stations de taxi",
            content:
              "Les stations de taxi (ou bornes) se trouvent devant les gares, aéroports, hôpitaux et dans les centres-villes. Elles sont signalées par un panneau bleu « TAXI ». Vous devez respecter l'ordre de la file d'attente et monter dans le premier taxi disponible. Le chauffeur n'a pas le droit de refuser une course sauf exception légale.",
          },
          {
            title: "Réserver un taxi en ligne",
            content:
              "La réservation en ligne est la méthode la plus pratique pour garantir un taxi à l'heure souhaitée. Avec TaxiNeo, vous réservez en quelques secondes avec un prix fixe affiché à l'avance. C'est idéal pour les transferts aéroport, les rendez-vous médicaux ou tout déplacement planifié. Vous recevez une confirmation immédiate par email et SMS.",
          },
          {
            title: "Pendant la course",
            content:
              "Une fois à bord, indiquez clairement votre destination au chauffeur. Le compteur horokilométrique doit être enclenché au départ de la course. Vous avez le droit de demander un reçu en fin de course. Le chauffeur doit emprunter l'itinéraire le plus court ou le plus rapide, sauf demande contraire de votre part.",
          },
          {
            title: "Payer et descendre",
            content:
              "Le paiement s'effectue en espèces ou par carte bancaire (obligatoire depuis 2022 pour les taxis). Vérifiez le montant affiché au compteur et demandez un reçu. Avec TaxiNeo, le prix est fixé à la réservation et le paiement en ligne est sécurisé. Pensez à vérifier que vous n'oubliez rien avant de descendre du véhicule.",
          },
        ],
        faq: [
          {
            question:
              "Un taxi peut-il refuser de me prendre en charge ?",
            answer:
              "Un taxi en station ou hélé dans la rue ne peut pas refuser une course sans motif légitime (distance trop courte, comportement dangereux, animal non autorisé). Le refus de course injustifié est passible d'une amende de 150 euros.",
          },
          {
            question:
              "Comment savoir si un taxi est disponible ?",
            answer:
              "Regardez le lumineux sur le toit du véhicule. Vert = libre et disponible. Rouge ou éteint = en course ou hors service. La mention « TAXI » doit être visible en permanence.",
          },
          {
            question: "Puis-je choisir l'itinéraire ?",
            answer:
              "Oui, vous pouvez demander un itinéraire spécifique. Par défaut, le chauffeur prend le trajet le plus court ou le plus rapide. Si vous imposez un détour, le tarif peut être plus élevé.",
          },
          {
            question:
              "Faut-il donner un pourboire au chauffeur ?",
            answer:
              "Le pourboire n'est pas obligatoire en France mais il est apprécié. Un pourboire de 5 à 10 % du montant de la course est un usage courant pour un service de qualité.",
          },
        ],
      },
      en: {
        metaTitle:
          "How to take a taxi in France: practical guide 2026 | TaxiNeo",
        metaDescription:
          "Learn how to take a taxi in France: hailing, taxi ranks, online booking, payment methods and passenger rights. Your complete practical guide for travellers.",
        heroTitle: "How to take a taxi in France",
        heroSubtitle:
          "Everything you need to know about taking a taxi with confidence: finding one, getting in, paying and knowing your rights.",
        sections: [
          {
            title: "Hailing a taxi on the street",
            content:
              "In France, you can hail an available taxi on the street by raising your hand. A taxi is available when its rooftop light is green. If it is off or red, the taxi is occupied or off duty. In major cities like Paris, this method is simple and quick, especially during the day.",
          },
          {
            title: "Taxi ranks",
            content:
              "Taxi ranks are found outside train stations, airports, hospitals and in city centres. They are marked with a blue 'TAXI' sign. You must respect the queue and board the first available taxi. The driver cannot legally refuse a fare except in specific legal circumstances.",
          },
          {
            title: "Booking a taxi online",
            content:
              "Online booking is the most practical way to guarantee a taxi at your preferred time. With TaxiNeo, you book in seconds with a fixed price displayed upfront. It is ideal for airport transfers, medical appointments or any planned journey. You receive instant confirmation by email and SMS.",
          },
          {
            title: "During the ride",
            content:
              "Once aboard, clearly state your destination to the driver. The taximeter must be started at the beginning of the journey. You have the right to request a receipt at the end of the ride. The driver must take the shortest or fastest route, unless you request otherwise.",
          },
          {
            title: "Paying and exiting",
            content:
              "Payment can be made in cash or by card (mandatory since 2022 for taxis). Check the amount on the meter and ask for a receipt. With TaxiNeo, the price is fixed at booking and online payment is secure. Remember to check you have not left anything behind before exiting the vehicle.",
          },
        ],
        faq: [
          {
            question: "Can a taxi refuse to take me?",
            answer:
              "A taxi at a rank or hailed on the street cannot refuse a fare without a legitimate reason (too-short distance, dangerous behaviour, unauthorised animal). Unjustified refusal is punishable by a fine of 150 euros.",
          },
          {
            question: "How do I know if a taxi is available?",
            answer:
              "Look at the light on the roof of the vehicle. Green means available. Red or off means occupied or off duty. The word 'TAXI' must be permanently visible.",
          },
          {
            question: "Can I choose the route?",
            answer:
              "Yes, you can request a specific route. By default, the driver takes the shortest or fastest route. If you request a detour, the fare may be higher.",
          },
          {
            question: "Should I tip the driver?",
            answer:
              "Tipping is not mandatory in France but it is appreciated. A tip of 5 to 10% of the fare is common practice for good service.",
          },
        ],
      },
    },
  },
  {
    slug: "taxi-conventionne-guide",
    title: "Taxi conventionné : le guide complet",
    icon: "solar:document-linear",
    readingTime: 10,
    i18n: {
      fr: {
        metaTitle:
          "Taxi conventionné CPAM : guide complet 2026 | TaxiNeo",
        metaDescription:
          "Tout savoir sur le taxi conventionné : conditions de remboursement par la CPAM, démarches, prescription médicale et prise en charge à 100 %. Guide détaillé.",
        heroTitle: "Taxi conventionné : le guide complet",
        heroSubtitle:
          "Comprenez le fonctionnement du taxi conventionné, les conditions de remboursement par l'Assurance Maladie et les démarches pour en bénéficier.",
        sections: [
          {
            title: "Qu'est-ce qu'un taxi conventionné ?",
            content:
              "Un taxi conventionné est un taxi ayant signé une convention avec la Caisse Primaire d'Assurance Maladie (CPAM). Cette convention l'autorise à transporter des patients vers des établissements de santé avec une prise en charge totale ou partielle par la Sécurité sociale. Le taxi conventionné applique les tarifs réglementés et est tenu de respecter un cahier des charges strict en matière de ponctualité, confort et hygiène.",
          },
          {
            title: "Conditions de remboursement",
            content:
              "Pour bénéficier du remboursement, vous devez disposer d'une prescription médicale de transport (PMT) établie par votre médecin avant le déplacement. Le remboursement couvre 65 % du tarif conventionné, le reste étant pris en charge par votre mutuelle. En cas d'ALD (Affection Longue Durée), d'accident du travail ou de grossesse à risque, la prise en charge peut atteindre 100 %.",
          },
          {
            title: "Comment obtenir une prescription médicale de transport",
            content:
              "La prescription médicale de transport (PMT) est délivrée par votre médecin traitant, un médecin hospitalier ou un spécialiste. Elle doit mentionner le motif médical du transport, le mode de transport (taxi), la destination et les dates. La PMT doit être établie avant le transport, sauf urgence médicale. Conservez l'original pour le présenter au chauffeur.",
          },
          {
            title: "Démarches auprès de la CPAM",
            content:
              "Après le transport, le taxi conventionné envoie directement la facture à la CPAM si vous bénéficiez du tiers payant. Sinon, vous réglez la course et envoyez la facture accompagnée de la PMT à votre caisse pour remboursement. Le délai de remboursement est généralement de 5 à 15 jours ouvrés. Vous pouvez suivre votre dossier sur ameli.fr.",
          },
          {
            title: "Cas particuliers : ALD, invalidité et AT",
            content:
              "Les patients en ALD (cancer, diabète, etc.) bénéficient d'une prise en charge à 100 % sur le tarif conventionné. Les victimes d'accident du travail ou de maladie professionnelle sont également remboursées intégralement. Les femmes enceintes à partir du 6e mois de grossesse et les nouveau-nés hospitalisés bénéficient aussi d'un transport pris en charge.",
          },
          {
            title: "Trouver un taxi conventionné près de chez vous",
            content:
              "Pour trouver un taxi conventionné, consultez le site ameli.fr, contactez votre CPAM locale ou utilisez TaxiNeo. Notre plateforme référence des chauffeurs conventionnés dans toute la France. Vous pouvez réserver en ligne et bénéficier du tiers payant directement, sans avance de frais dans la plupart des cas.",
          },
        ],
        faq: [
          {
            question:
              "Ai-je besoin d'une prescription pour un taxi conventionné ?",
            answer:
              "Oui, une prescription médicale de transport (PMT) est obligatoire pour obtenir un remboursement. Elle doit être établie par un médecin avant le transport, sauf en cas d'urgence.",
          },
          {
            question:
              "Quel est le taux de remboursement d'un taxi conventionné ?",
            answer:
              "Le taux de base est de 65 % par la Sécurité sociale, le reste pouvant être couvert par votre mutuelle. En cas d'ALD, d'accident du travail ou de grossesse, le remboursement peut atteindre 100 %.",
          },
          {
            question:
              "Puis-je choisir mon taxi conventionné ?",
            answer:
              "Oui, vous êtes libre de choisir le taxi conventionné de votre choix. Vous n'êtes pas obligé d'utiliser celui recommandé par l'hôpital ou votre médecin.",
          },
          {
            question:
              "Le taxi conventionné est-il plus cher qu'un taxi normal ?",
            answer:
              "Non, le taxi conventionné applique les mêmes tarifs réglementés qu'un taxi classique. La différence est qu'il peut facturer directement la CPAM, vous évitant l'avance de frais.",
          },
        ],
      },
      en: {
        metaTitle:
          "Approved medical taxi in France: guide 2026 | TaxiNeo",
        metaDescription:
          "Everything about approved medical taxis in France: reimbursement conditions, medical prescription, social security coverage and step-by-step procedures.",
        heroTitle: "Approved medical taxi: the complete guide",
        heroSubtitle:
          "Understand how approved medical taxis work, reimbursement conditions through French social security, and the steps to benefit from the service.",
        sections: [
          {
            title: "What is an approved medical taxi?",
            content:
              "An approved medical taxi (taxi conventionne) is a taxi that has signed an agreement with the French Health Insurance Fund (CPAM). This agreement authorises it to transport patients to healthcare facilities with full or partial coverage by social security. The approved taxi applies regulated fares and must meet strict standards for punctuality, comfort and hygiene.",
          },
          {
            title: "Reimbursement conditions",
            content:
              "To qualify for reimbursement, you need a medical transport prescription (PMT) issued by your doctor before the journey. Reimbursement covers 65% of the approved rate, with the remainder covered by your supplementary health insurance. For long-term conditions (ALD), work accidents or high-risk pregnancies, coverage can reach 100%.",
          },
          {
            title: "How to obtain a medical transport prescription",
            content:
              "The medical transport prescription (PMT) is issued by your GP, a hospital doctor or a specialist. It must state the medical reason for transport, the mode of transport (taxi), the destination and dates. The PMT must be issued before the journey, except in medical emergencies. Keep the original to present to the driver.",
          },
          {
            title: "Procedures with the CPAM",
            content:
              "After the journey, the approved taxi sends the invoice directly to the CPAM if you benefit from third-party payment. Otherwise, you pay for the ride and send the invoice with the PMT to your fund for reimbursement. Processing time is typically 5 to 15 working days. You can track your claim on ameli.fr.",
          },
          {
            title: "Special cases: chronic conditions, disability and work accidents",
            content:
              "Patients with long-term conditions (cancer, diabetes, etc.) benefit from 100% coverage on the approved rate. Work accident and occupational disease victims are also fully reimbursed. Pregnant women from the 6th month and hospitalised newborns also qualify for covered transport.",
          },
          {
            title: "Finding an approved taxi near you",
            content:
              "To find an approved medical taxi, visit ameli.fr, contact your local CPAM or use TaxiNeo. Our platform lists approved drivers across France. You can book online and benefit from direct billing in most cases, with no upfront payment required.",
          },
        ],
        faq: [
          {
            question:
              "Do I need a prescription for an approved medical taxi?",
            answer:
              "Yes, a medical transport prescription (PMT) is mandatory to obtain reimbursement. It must be issued by a doctor before the journey, except in emergencies.",
          },
          {
            question:
              "What is the reimbursement rate for an approved taxi?",
            answer:
              "The base rate is 65% covered by social security, with the remainder potentially covered by your supplementary insurance. For long-term conditions, work accidents or pregnancy, reimbursement can reach 100%.",
          },
          {
            question: "Can I choose my approved taxi?",
            answer:
              "Yes, you are free to choose any approved taxi you wish. You are not obliged to use the one recommended by the hospital or your doctor.",
          },
          {
            question:
              "Is an approved medical taxi more expensive than a regular taxi?",
            answer:
              "No, an approved taxi applies the same regulated fares as a standard taxi. The difference is that it can bill the CPAM directly, saving you from paying upfront.",
          },
        ],
      },
    },
  },
  {
    slug: "reclamer-facture-taxi",
    title: "Réclamer une facture taxi",
    icon: "solar:bill-list-linear",
    readingTime: 5,
    i18n: {
      fr: {
        metaTitle:
          "Facture de taxi : comment l'obtenir en France | TaxiNeo",
        metaDescription:
          "Comment réclamer une facture de taxi en France ? Mentions obligatoires, droits du passager, note de frais et remboursement professionnel. Guide pratique.",
        heroTitle: "Réclamer une facture de taxi",
        heroSubtitle:
          "Découvrez vos droits pour obtenir une facture de taxi, les mentions obligatoires et comment l'utiliser pour vos notes de frais professionnelles.",
        sections: [
          {
            title: "Votre droit à une facture",
            content:
              "Tout passager a le droit de demander une note (reçu) au chauffeur de taxi à la fin de la course. Ce droit est inscrit dans le Code des transports et le chauffeur ne peut pas le refuser. La note doit être remise immédiatement sur demande, que le paiement soit en espèces ou par carte bancaire. Avec TaxiNeo, la facture est générée automatiquement et envoyée par email.",
          },
          {
            title: "Mentions obligatoires sur la facture",
            content:
              "La facture de taxi doit comporter plusieurs mentions obligatoires : le nom et l'adresse du taxi ou de la compagnie, le numéro de licence, la date et l'heure de la course, les adresses de départ et d'arrivée, le montant TTC et le mode de paiement. Le numéro SIREN ou SIRET de l'entreprise de taxi doit également figurer sur le document pour qu'il soit valable fiscalement.",
          },
          {
            title: "Facture pour note de frais professionnelle",
            content:
              "Pour une note de frais, la facture doit impérativement comporter le montant HT, le montant de la TVA (10 % pour le transport de personnes) et le montant TTC. Votre employeur ou votre comptable pourra ainsi récupérer la TVA. TaxiNeo fournit des factures conformes aux exigences comptables françaises, directement téléchargeables depuis votre espace client.",
          },
          {
            title: "Que faire en cas de refus du chauffeur",
            content:
              "Si un chauffeur de taxi refuse de vous délivrer un reçu, notez son numéro de licence (affiché sur le véhicule et à l'intérieur) ainsi que l'heure et le lieu de la course. Vous pouvez signaler le refus à la préfecture de police ou à la Direction départementale de la protection des populations (DDPP). Le chauffeur s'expose à une sanction administrative.",
          },
        ],
        faq: [
          {
            question:
              "Le chauffeur de taxi est-il obligé de me donner une facture ?",
            answer:
              "Oui, le chauffeur est légalement tenu de vous remettre une note sur simple demande. Ce droit est garanti par le Code des transports. Le refus constitue une infraction.",
          },
          {
            question:
              "Puis-je obtenir une facture après la course ?",
            answer:
              "Si vous avez payé par carte, votre banque peut fournir un relevé. Si vous avez réservé via TaxiNeo, la facture est disponible dans votre espace client à tout moment. Sinon, il est difficile d'obtenir un reçu a posteriori.",
          },
          {
            question:
              "La TVA est-elle récupérable sur une facture de taxi ?",
            answer:
              "Oui, la TVA à 10 % sur le transport de personnes est récupérable pour les entreprises assujetties à la TVA, à condition que la facture comporte toutes les mentions obligatoires.",
          },
          {
            question:
              "Quelle est la différence entre une note et une facture de taxi ?",
            answer:
              "La note (ou reçu) est le document remis par le chauffeur en fin de course. La facture est un document comptable plus complet avec TVA détaillée, souvent émis par la compagnie. TaxiNeo fournit directement une facture conforme.",
          },
        ],
      },
      en: {
        metaTitle:
          "Taxi receipt in France: a complete guide 2026 | TaxiNeo",
        metaDescription:
          "How to request a taxi receipt in France. Mandatory information, passenger rights, expense reports and professional reimbursement. Full practical guide.",
        heroTitle: "How to get a taxi receipt",
        heroSubtitle:
          "Learn about your rights to obtain a taxi receipt, the mandatory details it must contain and how to use it for professional expense reports.",
        sections: [
          {
            title: "Your right to a receipt",
            content:
              "Every passenger has the right to request a receipt from the taxi driver at the end of the ride. This right is enshrined in the French Transport Code and the driver cannot refuse. The receipt must be provided immediately on request, whether you paid in cash or by card. With TaxiNeo, the invoice is generated automatically and sent by email.",
          },
          {
            title: "Mandatory information on the receipt",
            content:
              "A taxi receipt must include several mandatory details: the name and address of the taxi or company, the licence number, the date and time of the ride, pick-up and drop-off addresses, the total amount including tax and the payment method. The SIREN or SIRET number of the taxi business must also appear for the document to be fiscally valid.",
          },
          {
            title: "Receipt for professional expense reports",
            content:
              "For expense reports, the invoice must include the pre-tax amount, the VAT amount (10% for passenger transport) and the total including tax. Your employer or accountant can then reclaim the VAT. TaxiNeo provides invoices that comply with French accounting requirements, downloadable directly from your client area.",
          },
          {
            title: "What to do if the driver refuses",
            content:
              "If a taxi driver refuses to provide a receipt, note their licence number (displayed on the vehicle and inside) along with the time and location of the ride. You can report the refusal to the police prefecture or the local consumer protection authority (DDPP). The driver faces administrative sanctions.",
          },
        ],
        faq: [
          {
            question:
              "Is the taxi driver obliged to give me a receipt?",
            answer:
              "Yes, the driver is legally required to provide a receipt on request. This right is guaranteed by the French Transport Code. Refusal constitutes an offence.",
          },
          {
            question: "Can I get a receipt after the ride?",
            answer:
              "If you paid by card, your bank can provide a statement. If you booked through TaxiNeo, the invoice is available in your client area at any time. Otherwise, obtaining a receipt after the fact is difficult.",
          },
          {
            question:
              "Can VAT be reclaimed on a taxi receipt?",
            answer:
              "Yes, the 10% VAT on passenger transport is reclaimable for VAT-registered businesses, provided the invoice includes all mandatory details.",
          },
          {
            question:
              "What is the difference between a receipt and an invoice?",
            answer:
              "A receipt is the document given by the driver at the end of the ride. An invoice is a more complete accounting document with detailed VAT, often issued by the company. TaxiNeo directly provides a compliant invoice.",
          },
        ],
      },
    },
  },
  {
    slug: "tarif-taxi-reglementation",
    title: "Tarif taxi : la réglementation",
    icon: "solar:book-linear",
    readingTime: 7,
    i18n: {
      fr: {
        metaTitle:
          "Tarif taxi en France 2026 : barèmes officiels | TaxiNeo",
        metaDescription:
          "Comprendre la réglementation des tarifs taxi en France : tarifs A, B, C, D, prise en charge, forfaits aéroport et suppléments autorisés. Guide officiel.",
        heroTitle: "Tarif taxi : la réglementation en France",
        heroSubtitle:
          "Comprenez le système tarifaire réglementé des taxis français : barèmes officiels, tarifs de jour et nuit, forfaits et suppléments autorisés.",
        sections: [
          {
            title: "Le système des tarifs A, B, C, D",
            content:
              "Les taxis français appliquent quatre tarifs réglementés. Le tarif A s'applique en journée (10h-17h) pour les courses en ville. Le tarif B concerne les courses de nuit en ville ou de jour en banlieue. Le tarif C s'applique la nuit en banlieue et le dimanche. Le tarif D est le plus élevé, réservé aux courses de nuit les dimanches et jours fériés. Ces tarifs sont fixés chaque année par arrêté préfectoral.",
          },
          {
            title: "La prise en charge et le minimum de perception",
            content:
              "Chaque course de taxi commence par une prise en charge fixe, actuellement de 2,60 euros en Ile-de-France. Un montant minimum de perception est garanti : 7,30 euros à Paris en 2026. Même pour une course très courte, ce montant minimum s'applique. La prise en charge est enclenchée dès que le compteur démarre, avant même que le véhicule ne roule.",
          },
          {
            title: "Les forfaits aéroport obligatoires",
            content:
              "Depuis 2016, les forfaits pour les trajets entre Paris et les aéroports sont obligatoires. Le forfait Paris-CDG est de 56 euros (rive droite) ou 65 euros (rive gauche). Le forfait Paris-Orly est de 36 euros (rive gauche) ou 45 euros (rive droite). Ces forfaits s'appliquent quel que soit le trafic ou l'heure. Avec TaxiNeo, tous les trajets bénéficient de prix fixes, pas seulement les aéroports.",
          },
          {
            title: "Les suppléments autorisés",
            content:
              "La réglementation autorise certains suppléments : 4e passager (4 euros), réservation par téléphone ou appli (4 euros), bagages volumineux au coffre (2 euros). Le chauffeur doit afficher clairement ces suppléments dans le véhicule. Tout supplément non prévu par la réglementation est interdit. TaxiNeo inclut tous les suppléments dans le prix fixe affiché.",
          },
          {
            title: "Contrôle et sanctions",
            content:
              "Les tarifs taxi sont contrôlés par la DGCCRF (Direction générale de la concurrence). Un chauffeur qui ne respecte pas les tarifs réglementés s'expose à une amende de 1 500 euros. Le compteur doit être vérifié annuellement et plombé par un organisme agréé. Le détail des tarifs applicables doit être affiché dans le véhicule à la vue du passager.",
          },
        ],
        faq: [
          {
            question:
              "Qui fixe les tarifs des taxis en France ?",
            answer:
              "Les tarifs sont fixés chaque année par arrêté préfectoral, sur la base d'un arrêté ministériel national. La préfecture de chaque département peut adapter les tarifs localement, dans la limite d'un plafond national.",
          },
          {
            question:
              "Le chauffeur peut-il appliquer un tarif supérieur au compteur ?",
            answer:
              "Non, le tarif affiché au compteur est un maximum. Le chauffeur peut appliquer un prix inférieur (tarif forfaitaire) mais jamais supérieur. Toute surfacturation est passible d'une amende.",
          },
          {
            question: "Les tarifs sont-ils les mêmes partout en France ?",
            answer:
              "Non, chaque département a ses propres tarifs, fixés par arrêté préfectoral. Paris et l'Ile-de-France ont des tarifs spécifiques. Les tarifs de province sont généralement légèrement inférieurs.",
          },
          {
            question:
              "Le supplément bagage est-il obligatoire ?",
            answer:
              "Le supplément de 2 euros pour les bagages volumineux au coffre est autorisé mais pas obligatoire. Le chauffeur peut le facturer uniquement pour les bagages qui nécessitent une manipulation spéciale (plus de 5 kg). Avec TaxiNeo, aucun supplément bagage n'est appliqué.",
          },
        ],
      },
      en: {
        metaTitle:
          "Taxi fare regulations in France: rates guide 2026 | TaxiNeo",
        metaDescription:
          "Understand taxi fare regulations in France: A, B, C, D rates, pick-up charges, airport flat fares and all authorised surcharges. Complete official guide.",
        heroTitle: "Taxi fares: French regulations explained",
        heroSubtitle:
          "Understand the regulated fare system for French taxis: official tariff bands, day and night rates, flat fares and authorised surcharges.",
        sections: [
          {
            title: "The A, B, C, D fare system",
            content:
              "French taxis apply four regulated fare bands. Rate A applies during daytime (10am-5pm) for urban journeys. Rate B covers night-time urban rides or daytime suburban rides. Rate C applies at night in suburbs and on Sundays. Rate D is the highest, reserved for night rides on Sundays and public holidays. These rates are set annually by prefectural order.",
          },
          {
            title: "Pick-up charge and minimum fare",
            content:
              "Every taxi ride starts with a fixed pick-up charge, currently 2.60 euros in Ile-de-France. A minimum fare is guaranteed: 7.30 euros in Paris in 2026. Even for very short rides, this minimum applies. The pick-up charge is activated as soon as the meter starts, before the vehicle even moves.",
          },
          {
            title: "Mandatory airport flat fares",
            content:
              "Since 2016, flat fares for journeys between Paris and the airports are mandatory. The Paris-CDG fare is 56 euros (right bank) or 65 euros (left bank). The Paris-Orly fare is 36 euros (left bank) or 45 euros (right bank). These flat fares apply regardless of traffic or time. With TaxiNeo, all journeys benefit from fixed prices, not just airports.",
          },
          {
            title: "Authorised surcharges",
            content:
              "Regulations allow certain surcharges: 4th passenger (4 euros), phone or app booking (4 euros), bulky luggage in the boot (2 euros). The driver must clearly display these surcharges in the vehicle. Any surcharge not provided for by regulations is prohibited. TaxiNeo includes all surcharges in the displayed fixed price.",
          },
          {
            title: "Enforcement and penalties",
            content:
              "Taxi fares are monitored by the DGCCRF (consumer protection authority). A driver who does not comply with regulated fares faces a fine of 1,500 euros. The meter must be checked annually and sealed by an approved body. The applicable fare schedule must be displayed in the vehicle in view of the passenger.",
          },
        ],
        faq: [
          {
            question: "Who sets taxi fares in France?",
            answer:
              "Fares are set annually by prefectural order, based on a national ministerial decree. Each department's prefecture can adjust fares locally, within a national ceiling.",
          },
          {
            question:
              "Can the driver charge more than what the meter shows?",
            answer:
              "No, the meter fare is a maximum. The driver may charge less (flat fare) but never more. Overcharging is punishable by fine.",
          },
          {
            question: "Are fares the same across France?",
            answer:
              "No, each department has its own fares set by prefectural order. Paris and Ile-de-France have specific rates. Provincial fares are generally slightly lower.",
          },
          {
            question: "Is the luggage surcharge mandatory?",
            answer:
              "The 2-euro surcharge for bulky luggage in the boot is authorised but not mandatory. The driver can only charge it for luggage requiring special handling (over 5 kg). With TaxiNeo, no luggage surcharge is applied.",
          },
        ],
      },
    },
  },
  {
    slug: "taxi-paiement-carte",
    title: "Payer son taxi par carte",
    icon: "solar:card-linear",
    readingTime: 5,
    i18n: {
      fr: {
        metaTitle:
          "Taxi et carte bancaire : droits et obligations | TaxiNeo",
        metaDescription:
          "Le paiement par carte est-il obligatoire en taxi ? Droits du passager, obligations du chauffeur, montant minimum et que faire en cas de refus. Guide complet.",
        heroTitle: "Payer son taxi par carte bancaire",
        heroSubtitle:
          "Tout ce que vous devez savoir sur le paiement par carte dans les taxis français : vos droits, les obligations du chauffeur et les alternatives.",
        sections: [
          {
            title: "Le paiement par carte est obligatoire",
            content:
              "Depuis le 1er juillet 2022, tous les taxis français sont tenus d'accepter le paiement par carte bancaire sans montant minimum. Cette obligation s'applique à toutes les courses, quelle que soit la somme. Le terminal de paiement (TPE) doit être fonctionnel et à disposition du passager. Un chauffeur qui refuse la carte bancaire commet une infraction.",
          },
          {
            title: "Que faire si le chauffeur refuse la carte",
            content:
              "Si un chauffeur refuse votre carte bancaire, notez son numéro de licence et signalez l'incident à la préfecture de police ou à la DGCCRF. Vous n'êtes pas tenu de payer en espèces si vous aviez prévu de régler par carte. Le refus de carte est passible d'une amende pouvant aller jusqu'à 750 euros pour le chauffeur.",
          },
          {
            title: "Les moyens de paiement acceptés",
            content:
              "Les taxis doivent accepter les cartes Visa, Mastercard et CB (Carte Bancaire). Le paiement sans contact (NFC) est de plus en plus répandu. Certains taxis acceptent également Apple Pay et Google Pay. Avec TaxiNeo, le paiement en ligne est sécurisé et vous n'avez rien à régler dans le véhicule.",
          },
          {
            title: "Paiement en ligne et applications",
            content:
              "La réservation et le paiement en ligne simplifient considérablement l'expérience taxi. Avec TaxiNeo, vous payez à la réservation avec un prix fixe garanti. Votre facture est disponible immédiatement dans votre espace client. C'est la solution idéale pour les déplacements professionnels avec note de frais automatique.",
          },
        ],
        faq: [
          {
            question:
              "Y a-t-il un montant minimum pour payer par carte en taxi ?",
            answer:
              "Non, depuis juillet 2022, il n'y a aucun montant minimum. Le chauffeur doit accepter la carte pour toute course, même pour quelques euros.",
          },
          {
            question:
              "Le chauffeur peut-il me facturer un supplément pour le paiement par carte ?",
            answer:
              "Non, aucun supplément ne peut être facturé pour le paiement par carte bancaire. La loi interdit tout frais supplémentaire lié au mode de paiement.",
          },
          {
            question:
              "Le paiement sans contact fonctionne-t-il dans les taxis ?",
            answer:
              "De plus en plus de taxis sont équipés de terminaux compatibles sans contact (NFC). C'est le cas de la quasi-totalité des taxis parisiens. En province, la disponibilité peut varier.",
          },
          {
            question:
              "Puis-je payer en ligne avec TaxiNeo ?",
            answer:
              "Oui, TaxiNeo propose le paiement en ligne sécurisé à la réservation. Vous connaissez le prix exact à l'avance et n'avez rien à régler dans le véhicule. La facture est générée automatiquement.",
          },
        ],
      },
      en: {
        metaTitle:
          "Paying by card in a French taxi: your rights | TaxiNeo",
        metaDescription:
          "Is card payment mandatory in French taxis? Passenger rights, driver obligations, minimum amounts and what to do if your card is refused. Complete guide.",
        heroTitle: "Paying for a taxi by card",
        heroSubtitle:
          "Everything you need to know about card payment in French taxis: your rights, driver obligations and alternatives.",
        sections: [
          {
            title: "Card payment is mandatory",
            content:
              "Since 1 July 2022, all French taxis are required to accept card payment with no minimum amount. This obligation applies to all fares, regardless of the sum. The payment terminal must be functional and available to the passenger. A driver who refuses card payment is committing an offence.",
          },
          {
            title: "What to do if the driver refuses your card",
            content:
              "If a driver refuses your bank card, note their licence number and report the incident to the police prefecture or the DGCCRF (consumer protection). You are not required to pay in cash if you intended to pay by card. Refusal to accept a card can result in a fine of up to 750 euros for the driver.",
          },
          {
            title: "Accepted payment methods",
            content:
              "Taxis must accept Visa, Mastercard and CB (Carte Bancaire) cards. Contactless payment (NFC) is increasingly common. Some taxis also accept Apple Pay and Google Pay. With TaxiNeo, online payment is secure and you have nothing to settle in the vehicle.",
          },
          {
            title: "Online payment and apps",
            content:
              "Online booking and payment significantly simplify the taxi experience. With TaxiNeo, you pay at booking with a guaranteed fixed price. Your invoice is immediately available in your client area. It is the ideal solution for business travel with automatic expense receipts.",
          },
        ],
        faq: [
          {
            question:
              "Is there a minimum amount for card payment in a taxi?",
            answer:
              "No, since July 2022, there is no minimum amount. The driver must accept card payment for any fare, even for just a few euros.",
          },
          {
            question:
              "Can the driver charge a surcharge for card payment?",
            answer:
              "No, no surcharge can be charged for card payment. The law prohibits any additional fee related to the payment method.",
          },
          {
            question:
              "Does contactless payment work in taxis?",
            answer:
              "More and more taxis are equipped with contactless (NFC) terminals. This is the case for nearly all Parisian taxis. Availability may vary in the provinces.",
          },
          {
            question: "Can I pay online with TaxiNeo?",
            answer:
              "Yes, TaxiNeo offers secure online payment at booking. You know the exact price in advance and have nothing to pay in the vehicle. The invoice is generated automatically.",
          },
        ],
      },
    },
  },
  {
    slug: "pourboire-taxi",
    title: "Le pourboire en taxi",
    icon: "solar:hand-money-linear",
    readingTime: 4,
    i18n: {
      fr: {
        metaTitle:
          "Pourboire taxi en France : combien donner et quand | TaxiNeo",
        metaDescription:
          "Faut-il donner un pourboire au taxi en France ? Montant recommandé, usages par situation, différences avec les autres pays. Guide des bonnes pratiques.",
        heroTitle: "Le pourboire en taxi en France",
        heroSubtitle:
          "Faut-il donner un pourboire à son chauffeur de taxi ? Découvrez les usages français, les montants recommandés et les bonnes pratiques.",
        sections: [
          {
            title: "Le pourboire n'est pas obligatoire",
            content:
              "En France, contrairement aux Etats-Unis, le pourboire en taxi n'est pas obligatoire. Le prix affiché au compteur inclut la rémunération complète du chauffeur. Cependant, le pourboire reste un geste apprécié qui récompense un service de qualité. C'est une pratique courante mais jamais exigée.",
          },
          {
            title: "Combien donner en pourboire",
            content:
              "L'usage en France est de laisser un pourboire de 5 à 10 % du montant de la course. Pour une course de 20 euros, 1 à 2 euros est un pourboire courant. Pour les courses longues ou les services exceptionnels (aide avec les bagages, attente), un pourboire plus généreux est apprécié. L'arrondi à l'euro supérieur est le geste le plus fréquent.",
          },
          {
            title: "Quand donner un pourboire",
            content:
              "Le pourboire est particulièrement bienvenu lorsque le chauffeur a fourni un service au-delà de ses obligations : aide avec les valises, itinéraire optimisé, propreté impeccable du véhicule ou conversation agréable. Pour les transferts aéroport tôt le matin ou les courses sous la pluie, un pourboire est un geste de reconnaissance apprécié par les chauffeurs.",
          },
          {
            title: "Pourboire par carte ou en espèces",
            content:
              "Le pourboire peut être donné en espèces directement au chauffeur ou ajouté lors du paiement par carte. Certains terminaux de paiement permettent d'ajouter un pourboire au moment du règlement. Avec TaxiNeo, vous pouvez ajouter un pourboire lors du paiement en ligne. Les espèces restent le moyen préféré des chauffeurs car ils les reçoivent directement.",
          },
        ],
        faq: [
          {
            question:
              "Le pourboire est-il inclus dans le prix du taxi ?",
            answer:
              "Non, le prix affiché au compteur ou le forfait TaxiNeo n'inclut pas de pourboire. Le montant que vous payez correspond uniquement à la course. Le pourboire est un geste volontaire supplémentaire.",
          },
          {
            question:
              "Combien de pourboire donner pour un transfert aéroport ?",
            answer:
              "Pour un transfert aéroport (50-65 euros en moyenne), un pourboire de 3 à 5 euros est un geste apprécié, surtout si le chauffeur a aidé avec les bagages ou si la course est tôt le matin.",
          },
          {
            question:
              "Les chauffeurs de taxi s'attendent-ils à un pourboire en France ?",
            answer:
              "Les chauffeurs n'attendent pas de pourboire mais l'apprécient toujours. En France, l'absence de pourboire n'est pas considérée comme impolie, contrairement à certains pays anglo-saxons.",
          },
          {
            question:
              "Puis-je donner un pourboire via l'application TaxiNeo ?",
            answer:
              "Oui, TaxiNeo permet d'ajouter un pourboire lors du paiement en ligne ou après la course depuis votre espace client. Le montant est intégralement reversé au chauffeur.",
          },
        ],
      },
      en: {
        metaTitle:
          "Taxi tipping in France: how much & when to tip | TaxiNeo",
        metaDescription:
          "Should you tip a taxi driver in France? Recommended amounts, local customs by situation, differences with other countries. Complete best practices guide.",
        heroTitle: "Tipping your taxi driver in France",
        heroSubtitle:
          "Should you tip your taxi driver? Discover French customs, recommended amounts and best practices.",
        sections: [
          {
            title: "Tipping is not mandatory",
            content:
              "In France, unlike in the United States, tipping in a taxi is not mandatory. The fare shown on the meter includes the driver's full remuneration. However, tips are an appreciated gesture that rewards quality service. It is a common practice but never required.",
          },
          {
            title: "How much to tip",
            content:
              "The custom in France is to leave a tip of 5 to 10% of the fare. For a 20-euro ride, 1 to 2 euros is a typical tip. For longer rides or exceptional service (help with luggage, waiting), a more generous tip is appreciated. Rounding up to the nearest euro is the most common gesture.",
          },
          {
            title: "When to tip",
            content:
              "A tip is particularly welcome when the driver has gone above and beyond: help with suitcases, an optimised route, spotlessly clean vehicle or pleasant conversation. For early morning airport transfers or rides in the rain, a tip is an appreciated gesture of recognition.",
          },
          {
            title: "Tipping by card or cash",
            content:
              "Tips can be given in cash directly to the driver or added when paying by card. Some payment terminals allow you to add a tip at settlement. With TaxiNeo, you can add a tip during online payment. Cash remains the preferred method for drivers as they receive it directly.",
          },
        ],
        faq: [
          {
            question: "Is the tip included in the taxi fare?",
            answer:
              "No, the meter fare or TaxiNeo fixed price does not include a tip. The amount you pay is for the ride only. The tip is an additional voluntary gesture.",
          },
          {
            question:
              "How much should I tip for an airport transfer?",
            answer:
              "For an airport transfer (50-65 euros on average), a tip of 3 to 5 euros is appreciated, especially if the driver helped with luggage or the ride is early in the morning.",
          },
          {
            question:
              "Do taxi drivers expect a tip in France?",
            answer:
              "Drivers do not expect a tip but always appreciate one. In France, not tipping is not considered rude, unlike in some English-speaking countries.",
          },
          {
            question: "Can I tip through the TaxiNeo app?",
            answer:
              "Yes, TaxiNeo allows you to add a tip during online payment or after the ride from your client area. The full amount goes to the driver.",
          },
        ],
      },
    },
  },
  {
    slug: "taxi-bagage-cabine",
    title: "Taxi et bagages",
    icon: "solar:suitcase-linear",
    readingTime: 5,
    i18n: {
      fr: {
        metaTitle:
          "Taxi et bagages en France : règles et conseils | TaxiNeo",
        metaDescription:
          "Combien de bagages peut-on mettre dans un taxi ? Règles, suppléments autorisés, bagages volumineux et conseils pour les transferts aéroport. Guide complet.",
        heroTitle: "Taxi et bagages : tout savoir",
        heroSubtitle:
          "Combien de bagages pouvez-vous emporter en taxi ? Découvrez les règles, les suppléments éventuels et nos conseils pour voyager sereinement.",
        sections: [
          {
            title: "Nombre de bagages autorisés",
            content:
              "Un taxi standard (berline) peut accueillir 2 à 3 valises de taille classique (cabine + soute) dans son coffre. Pour les monospaces et vans, la capacité monte à 5-6 valises. Il n'y a pas de limite légale stricte au nombre de bagages, mais ils ne doivent pas gêner la conduite ni obstruer la visibilité du chauffeur. Avec TaxiNeo, indiquez le nombre de bagages à la réservation pour obtenir le véhicule adapté.",
          },
          {
            title: "Le supplément bagage",
            content:
              "La réglementation autorise un supplément de 2 euros par bagage volumineux placé dans le coffre et nécessitant une manipulation spéciale. Ce supplément ne s'applique pas aux bagages à main ni aux valises de taille standard. Avec TaxiNeo, aucun supplément bagage n'est facturé : le prix fixe inclut tous vos bagages, quel que soit leur nombre.",
          },
          {
            title: "Bagages spéciaux et équipements sportifs",
            content:
              "Pour les équipements encombrants (skis, vélos, poussettes, fauteuils roulants), il est recommandé de prévenir le chauffeur à la réservation. Certains véhicules ne peuvent pas les accueillir. Les instruments de musique volumineux et les cartons de déménagement nécessitent un véhicule de type van. TaxiNeo vous propose automatiquement le véhicule adapté à vos besoins.",
          },
          {
            title: "Conseils pour les transferts aéroport",
            content:
              "Pour un transfert aéroport, anticipez le volume de vos bagages : 2 passagers avec chacun une valise cabine et une valise soute tiennent dans une berline. Au-delà de 3 grosses valises, privilégiez un van ou un monospace. Gardez vos documents de voyage et objets de valeur dans un bagage à main que vous conserverez avec vous sur la banquette arrière.",
          },
          {
            title: "Objets oubliés dans le taxi",
            content:
              "Si vous oubliez un bagage dans un taxi, contactez immédiatement la compagnie de taxi ou le chauffeur. A Paris, le Service des objets trouvés de la Préfecture centralise les objets retrouvés dans les taxis. Avec TaxiNeo, vous pouvez contacter directement votre chauffeur via la plateforme pour récupérer rapidement vos affaires.",
          },
        ],
        faq: [
          {
            question:
              "Le chauffeur peut-il refuser mes bagages ?",
            answer:
              "Le chauffeur ne peut pas refuser des bagages de taille raisonnable. En revanche, si vos bagages dépassent la capacité du coffre et risquent de gêner la conduite, il peut vous orienter vers un véhicule plus grand.",
          },
          {
            question:
              "Dois-je payer un supplément pour mes valises ?",
            answer:
              "Un supplément de 2 euros par bagage volumineux est autorisé par la réglementation. Cependant, les valises de taille standard ne donnent lieu à aucun supplément. Avec TaxiNeo, tous les bagages sont inclus dans le prix fixe.",
          },
          {
            question:
              "Puis-je transporter un vélo dans un taxi ?",
            answer:
              "Oui, mais il faut un véhicule adapté (van ou monospace). Prévenez à la réservation pour que le bon véhicule soit envoyé. Les vélos pliants peuvent tenir dans un coffre de berline.",
          },
          {
            question:
              "Que faire si j'oublie quelque chose dans le taxi ?",
            answer:
              "Contactez immédiatement TaxiNeo ou la compagnie de taxi. A Paris, vous pouvez aussi contacter le Service des objets trouvés de la Préfecture. Gardez votre numéro de course ou reçu pour faciliter les recherches.",
          },
        ],
      },
      en: {
        metaTitle:
          "Taxi and luggage in France: rules & tips | TaxiNeo",
        metaDescription:
          "How much luggage can you take in a French taxi? Rules, authorised surcharges, oversized items and practical tips for smooth airport transfers. Full guide.",
        heroTitle: "Taxi and luggage: everything you need to know",
        heroSubtitle:
          "How much luggage can you bring in a taxi? Discover the rules, any surcharges and our tips for stress-free travel.",
        sections: [
          {
            title: "Number of bags allowed",
            content:
              "A standard taxi (saloon) can fit 2 to 3 regular-sized suitcases (cabin + hold) in its boot. Minivans and vans can hold 5-6 suitcases. There is no strict legal limit on the number of bags, but they must not obstruct driving or the driver's visibility. With TaxiNeo, specify the number of bags when booking to get the right vehicle.",
          },
          {
            title: "The luggage surcharge",
            content:
              "Regulations allow a surcharge of 2 euros per bulky item placed in the boot requiring special handling. This surcharge does not apply to hand luggage or standard-sized suitcases. With TaxiNeo, no luggage surcharge is charged: the fixed price includes all your bags, regardless of number.",
          },
          {
            title: "Special luggage and sports equipment",
            content:
              "For bulky equipment (skis, bicycles, pushchairs, wheelchairs), it is advisable to inform the driver when booking. Some vehicles cannot accommodate them. Large musical instruments and moving boxes require a van-type vehicle. TaxiNeo automatically suggests the vehicle suited to your needs.",
          },
          {
            title: "Tips for airport transfers",
            content:
              "For an airport transfer, plan for your luggage volume: 2 passengers with a cabin bag and a hold suitcase each fit in a saloon. For more than 3 large suitcases, choose a van or minivan. Keep your travel documents and valuables in a carry-on bag that you keep with you on the back seat.",
          },
          {
            title: "Items left in the taxi",
            content:
              "If you leave a bag in a taxi, contact the taxi company or driver immediately. In Paris, the Prefecture's Lost Property Service centralises items found in taxis. With TaxiNeo, you can contact your driver directly through the platform to quickly retrieve your belongings.",
          },
        ],
        faq: [
          {
            question: "Can the driver refuse my luggage?",
            answer:
              "The driver cannot refuse reasonably sized luggage. However, if your bags exceed the boot capacity and risk obstructing driving, they may direct you to a larger vehicle.",
          },
          {
            question:
              "Do I have to pay extra for my suitcases?",
            answer:
              "A surcharge of 2 euros per bulky item is allowed by regulations. However, standard-sized suitcases incur no surcharge. With TaxiNeo, all luggage is included in the fixed price.",
          },
          {
            question: "Can I transport a bicycle in a taxi?",
            answer:
              "Yes, but you need a suitable vehicle (van or minivan). Let us know when booking so the right vehicle is dispatched. Folding bikes can fit in a saloon boot.",
          },
          {
            question:
              "What if I leave something in the taxi?",
            answer:
              "Contact TaxiNeo or the taxi company immediately. In Paris, you can also contact the Prefecture's Lost Property Service. Keep your trip number or receipt to help with the search.",
          },
        ],
      },
    },
  },
  {
    slug: "securite-taxi",
    title: "La sécurité en taxi",
    icon: "solar:shield-check-linear",
    readingTime: 6,
    i18n: {
      fr: {
        metaTitle:
          "Sécurité en taxi : droits et conseils 2026 | TaxiNeo",
        metaDescription:
          "Comment vérifier qu'un taxi est en règle en France ? Droits du passager, contrôles obligatoires et conduite à tenir en cas de problème. Guide complet.",
        heroTitle: "La sécurité en taxi en France",
        heroSubtitle:
          "Découvrez comment vérifier qu'un taxi est en règle, connaître vos droits de passager et adopter les bons réflexes pour voyager en toute sécurité.",
        sections: [
          {
            title: "Vérifier que le taxi est officiel",
            content:
              "Un taxi officiel en France se reconnaît à plusieurs éléments obligatoires : le lumineux « TAXI » sur le toit, la plaque d'immatriculation professionnelle, le compteur horokilométrique homologué et la carte professionnelle du chauffeur visible dans l'habitacle. Le numéro de licence doit être affiché sur les portières arrière. Ne montez jamais dans un véhicule dépourvu de ces éléments.",
          },
          {
            title: "La carte professionnelle du chauffeur",
            content:
              "Chaque chauffeur de taxi doit détenir une carte professionnelle délivrée par la préfecture après un examen rigoureux. Cette carte, avec photo, est affichée à l'avant du véhicule. Elle atteste que le chauffeur a passé des contrôles d'honorabilité, un examen médical et une formation professionnelle. Vous avez le droit de vérifier cette carte à tout moment.",
          },
          {
            title: "Contrôle technique et assurance",
            content:
              "Les taxis sont soumis à un contrôle technique annuel, plus fréquent que pour les véhicules particuliers. L'assurance professionnelle couvre les passagers en cas d'accident. Le véhicule doit être en bon état général : pneus, freins, éclairage et ceintures de sécurité sont vérifiés régulièrement. Avec TaxiNeo, tous les chauffeurs partenaires sont vérifiés et leurs documents contrôlés.",
          },
          {
            title: "Vos droits en tant que passager",
            content:
              "En tant que passager, vous avez le droit de connaître le tarif applicable avant de monter, de choisir votre itinéraire, de demander un reçu, de payer par carte et de refuser de monter si le véhicule ne vous semble pas en règle. Vous pouvez également exiger que le compteur soit enclenché au début de la course et que la climatisation ou le chauffage fonctionne.",
          },
          {
            title: "Que faire en cas de problème",
            content:
              "En cas de litige ou de comportement inapproprié, notez le numéro de licence du taxi, l'heure et le lieu. Vous pouvez déposer une réclamation auprès de la préfecture de police, de la DGCCRF ou du médiateur des transports. En cas de danger immédiat, appelez le 17 (police). Avec TaxiNeo, un service client est disponible 24h/24 pour traiter toute réclamation.",
          },
        ],
        faq: [
          {
            question:
              "Comment savoir si un taxi est officiel ?",
            answer:
              "Vérifiez la présence du lumineux sur le toit, du compteur horokilométrique, de la carte professionnelle du chauffeur et du numéro de licence sur les portières. Ces éléments sont obligatoires pour tout taxi en France.",
          },
          {
            question:
              "La ceinture de sécurité est-elle obligatoire en taxi ?",
            answer:
              "Oui, le port de la ceinture de sécurité est obligatoire à l'arrière comme à l'avant dans un taxi. Le passager encourt une amende de 135 euros en cas de non-port de la ceinture.",
          },
          {
            question:
              "Puis-je installer un siège enfant dans un taxi ?",
            answer:
              "Les taxis sont exemptés de l'obligation du siège enfant. Les enfants peuvent voyager à l'arrière avec la ceinture de sécurité. Toutefois, TaxiNeo peut fournir un siège enfant sur demande à la réservation.",
          },
          {
            question:
              "Que faire si le chauffeur conduit dangereusement ?",
            answer:
              "Demandez poliment au chauffeur de ralentir. Si le comportement persiste, demandez à descendre en lieu sûr. Notez le numéro de licence et signalez l'incident à la préfecture ou à TaxiNeo.",
          },
        ],
      },
      en: {
        metaTitle:
          "Taxi safety in France: rights, checks & tips | TaxiNeo",
        metaDescription:
          "How to check a taxi is legitimate in France. Passenger rights, mandatory vehicle inspections and what to do if something goes wrong. Full safety guide.",
        heroTitle: "Taxi safety in France",
        heroSubtitle:
          "Learn how to verify a taxi is legitimate, know your passenger rights and adopt good habits for safe travel.",
        sections: [
          {
            title: "Checking the taxi is official",
            content:
              "An official French taxi is identified by several mandatory elements: the 'TAXI' light on the roof, professional licence plates, an approved taximeter and the driver's professional card visible in the cabin. The licence number must be displayed on the rear doors. Never board a vehicle lacking these elements.",
          },
          {
            title: "The driver's professional card",
            content:
              "Every taxi driver must hold a professional card issued by the prefecture after a rigorous exam. This card, with photo, is displayed at the front of the vehicle. It certifies the driver has passed background checks, a medical examination and professional training. You have the right to check this card at any time.",
          },
          {
            title: "Vehicle inspection and insurance",
            content:
              "Taxis undergo annual vehicle inspections, more frequent than for private cars. Professional insurance covers passengers in case of accident. The vehicle must be in good overall condition: tyres, brakes, lighting and seat belts are checked regularly. With TaxiNeo, all partner drivers are verified and their documents checked.",
          },
          {
            title: "Your rights as a passenger",
            content:
              "As a passenger, you have the right to know the applicable fare before boarding, choose your route, request a receipt, pay by card and refuse to board if the vehicle seems non-compliant. You can also insist the meter is started at the beginning of the ride and that air conditioning or heating is working.",
          },
          {
            title: "What to do if something goes wrong",
            content:
              "In case of a dispute or inappropriate behaviour, note the taxi's licence number, the time and location. You can file a complaint with the police prefecture, the DGCCRF or the transport ombudsman. In case of immediate danger, call 17 (police). With TaxiNeo, customer service is available 24/7 to handle any complaint.",
          },
        ],
        faq: [
          {
            question: "How can I tell if a taxi is official?",
            answer:
              "Check for the roof light, taximeter, driver's professional card and licence number on the doors. These elements are mandatory for all taxis in France.",
          },
          {
            question:
              "Is wearing a seat belt mandatory in a taxi?",
            answer:
              "Yes, wearing a seat belt is mandatory in the back and front of a taxi. Passengers face a 135-euro fine for not wearing one.",
          },
          {
            question:
              "Can I install a child seat in a taxi?",
            answer:
              "Taxis are exempt from the child seat requirement. Children can travel in the back with the seat belt. However, TaxiNeo can provide a child seat on request when booking.",
          },
          {
            question:
              "What if the driver is driving dangerously?",
            answer:
              "Politely ask the driver to slow down. If the behaviour continues, ask to be let out in a safe place. Note the licence number and report the incident to the prefecture or TaxiNeo.",
          },
        ],
      },
    },
  },
  {
    slug: "taxi-handicape-guide",
    title: "Taxi et handicap",
    icon: "solar:wheelchair-linear",
    readingTime: 7,
    i18n: {
      fr: {
        metaTitle:
          "Taxi et handicap : accessibilité et droits | TaxiNeo",
        metaDescription:
          "Guide complet taxi et handicap : véhicules adaptés PMR, droits des personnes handicapées, aides financières et réservation de taxis accessibles en France.",
        heroTitle: "Taxi et handicap : le guide complet",
        heroSubtitle:
          "Tout savoir sur l'accessibilité des taxis pour les personnes en situation de handicap : véhicules adaptés, droits, aides financières et réservation.",
        sections: [
          {
            title: "Les taxis accessibles PMR",
            content:
              "Les taxis accessibles PMR (Personnes à Mobilité Réduite) sont des véhicules spécialement aménagés avec rampe d'accès ou hayon élévateur pour les fauteuils roulants. Ils disposent d'un espace suffisant pour accueillir un fauteuil roulant sans le plier et de systèmes d'arrimage conformes aux normes de sécurité. En France, les grandes villes disposent d'une flotte de taxis PMR, mais leur nombre reste insuffisant.",
          },
          {
            title: "Droits des personnes en situation de handicap",
            content:
              "Un chauffeur de taxi ne peut pas refuser une personne en situation de handicap. La loi du 11 février 2005 garantit l'accessibilité des transports aux personnes handicapées. Le chauffeur est tenu d'aider le passager à monter et descendre du véhicule et de charger le fauteuil roulant ou les aides à la mobilité. Aucun supplément ne peut être facturé en raison du handicap.",
          },
          {
            title: "Le taxi conventionné pour les personnes handicapées",
            content:
              "Les personnes titulaires d'une carte mobilité inclusion (CMI) ou reconnues en invalidité peuvent bénéficier du transport en taxi conventionné avec prise en charge par la CPAM. Le taux de remboursement est de 65 % (ou 100 % en cas d'ALD, d'invalidité reconnue ou d'exonération du ticket modérateur). La prescription médicale de transport est nécessaire pour chaque déplacement médical.",
          },
          {
            title: "Les aides financières disponibles",
            content:
              "Plusieurs aides financières existent pour le transport des personnes handicapées : la Prestation de Compensation du Handicap (PCH) versée par la MDPH, l'Allocation Adulte Handicapé (AAH) qui libère du budget transport, et les aides des conseils départementaux. Certaines mutuelles proposent également un forfait transport annuel pour les personnes en situation de handicap.",
          },
          {
            title: "Réserver un taxi adapté avec TaxiNeo",
            content:
              "TaxiNeo référence des chauffeurs disposant de véhicules adaptés PMR dans toute la France. Lors de votre réservation, indiquez vos besoins spécifiques (fauteuil roulant, déambulateur, accompagnant) et nous vous attribuons automatiquement un véhicule adapté. Le prix fixe TaxiNeo s'applique sans aucun supplément lié au handicap.",
          },
        ],
        faq: [
          {
            question:
              "Un taxi peut-il refuser une personne en fauteuil roulant ?",
            answer:
              "Non, refuser une personne en raison de son handicap est illégal et constitue une discrimination passible de sanctions pénales. Le chauffeur doit accepter la course et aider le passager.",
          },
          {
            question:
              "Comment réserver un taxi adapté PMR ?",
            answer:
              "Avec TaxiNeo, cochez l'option « véhicule adapté PMR » lors de la réservation. Vous pouvez aussi préciser vos besoins dans le champ commentaire. Le véhicule adapté est garanti sans supplément.",
          },
          {
            question:
              "Le transport en taxi est-il pris en charge pour les personnes handicapées ?",
            answer:
              "Oui, avec une prescription médicale de transport, le taxi conventionné est remboursé à 65 % minimum par la CPAM. En cas d'ALD ou d'invalidité, la prise en charge peut être totale.",
          },
          {
            question:
              "Les chiens d'assistance sont-ils acceptés en taxi ?",
            answer:
              "Oui, les chiens guides d'aveugles et les chiens d'assistance sont obligatoirement acceptés dans les taxis. Le chauffeur ne peut ni les refuser ni facturer de supplément pour leur présence.",
          },
        ],
      },
      en: {
        metaTitle:
          "Taxi & disability in France: rights & access | TaxiNeo",
        metaDescription:
          "Complete guide to taxis and disability: wheelchair-accessible vehicles, disabled passenger rights, financial support and booking accessible taxis in France.",
        heroTitle: "Taxi and disability: the complete guide",
        heroSubtitle:
          "Everything about taxi accessibility for people with disabilities: adapted vehicles, rights, financial support and booking.",
        sections: [
          {
            title: "Wheelchair-accessible taxis",
            content:
              "Wheelchair-accessible taxis (PMR) are vehicles specially equipped with ramps or tail lifts for wheelchairs. They have sufficient space to accommodate a wheelchair without folding it and securing systems that comply with safety standards. In France, major cities have a fleet of accessible taxis, but their number remains insufficient.",
          },
          {
            title: "Rights of people with disabilities",
            content:
              "A taxi driver cannot refuse a person with a disability. The law of 11 February 2005 guarantees transport accessibility for people with disabilities. The driver must help the passenger board and alight from the vehicle and load the wheelchair or mobility aids. No surcharge may be applied on account of the disability.",
          },
          {
            title: "Approved medical taxis for people with disabilities",
            content:
              "Holders of a mobility inclusion card (CMI) or those recognised as disabled can benefit from approved taxi transport covered by the CPAM. The reimbursement rate is 65% (or 100% for long-term conditions, recognised disability or co-payment exemption). A medical transport prescription is required for each medical journey.",
          },
          {
            title: "Available financial support",
            content:
              "Several forms of financial support exist for disabled transport: the Disability Compensation Benefit (PCH) from the MDPH, the Disabled Adult Allowance (AAH) which frees up transport budget, and departmental council grants. Some supplementary health insurers also offer an annual transport allowance for people with disabilities.",
          },
          {
            title: "Booking an accessible taxi with TaxiNeo",
            content:
              "TaxiNeo lists drivers with wheelchair-accessible vehicles across France. When booking, specify your needs (wheelchair, walker, accompanying person) and we automatically assign a suitable vehicle. The TaxiNeo fixed price applies with no disability-related surcharge.",
          },
        ],
        faq: [
          {
            question:
              "Can a taxi refuse a wheelchair user?",
            answer:
              "No, refusing a person because of their disability is illegal and constitutes discrimination punishable by criminal sanctions. The driver must accept the fare and assist the passenger.",
          },
          {
            question:
              "How do I book a wheelchair-accessible taxi?",
            answer:
              "With TaxiNeo, tick the 'wheelchair-accessible vehicle' option when booking. You can also specify your needs in the comments field. The accessible vehicle is guaranteed at no extra charge.",
          },
          {
            question:
              "Is taxi transport covered for disabled people?",
            answer:
              "Yes, with a medical transport prescription, the approved taxi is reimbursed at a minimum of 65% by the CPAM. For long-term conditions or disability, coverage can be total.",
          },
          {
            question:
              "Are assistance dogs accepted in taxis?",
            answer:
              "Yes, guide dogs for the blind and assistance dogs must be accepted in taxis. The driver cannot refuse them or charge a surcharge for their presence.",
          },
        ],
      },
    },
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
