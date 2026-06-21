export interface GlossaryTerm {
  id: string;
  term: { fr: string; en: string };
  definition: { fr: string; en: string };
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: "artisan-taxi",
    term: { fr: "Artisan taxi", en: "Independent taxi driver" },
    definition: {
      fr: "Chauffeur de taxi indépendant titulaire d'une licence (ADS) et exploitant son propre véhicule. Contrairement aux salariés de compagnies, l'artisan taxi est son propre patron.",
      en: "An independent taxi driver who holds their own license (ADS) and operates their own vehicle. Unlike company employees, an artisan taxi driver is self-employed.",
    },
  },
  {
    id: "ads",
    term: { fr: "ADS (Autorisation de Stationnement)", en: "ADS (Parking Authorization)" },
    definition: {
      fr: "Autorisation administrative délivrée par la mairie permettant à un taxi de stationner et de prendre des clients sur la voie publique. Chaque commune dispose d'un nombre limité d'ADS.",
      en: "Administrative authorization issued by the city hall allowing a taxi to park and pick up passengers on public roads. Each municipality has a limited number of ADS licenses.",
    },
  },
  {
    id: "compteur-horokilometrique",
    term: { fr: "Compteur horokilométrique", en: "Taximeter" },
    definition: {
      fr: "Appareil obligatoire dans tout taxi qui calcule le prix de la course en fonction de la distance parcourue et du temps d'attente. Le taximètre est homologué et régulièrement vérifié.",
      en: "A mandatory device in every taxi that calculates the fare based on distance traveled and waiting time. The taximeter is certified and regularly inspected.",
    },
  },
  {
    id: "course",
    term: { fr: "Course", en: "Ride / Trip" },
    definition: {
      fr: "Trajet effectué par un taxi entre un point de départ et une destination. La course comprend la prise en charge, le trajet et éventuellement le temps d'attente.",
      en: "A journey made by a taxi between a pickup point and a destination. A ride includes the pickup fee, the journey, and potentially waiting time.",
    },
  },
  {
    id: "forfait",
    term: { fr: "Forfait", en: "Fixed fare / Flat rate" },
    definition: {
      fr: "Tarif fixe convenu à l'avance entre le client et le chauffeur pour un trajet donné. Le forfait ne varie pas en fonction du trafic ou du temps de trajet, contrairement au compteur.",
      en: "A fixed price agreed in advance between the customer and the driver for a given journey. The flat rate does not vary based on traffic or travel time, unlike the meter.",
    },
  },
  {
    id: "lumineux",
    term: { fr: "Lumineux (dispositif)", en: "Taxi light / Roof sign" },
    definition: {
      fr: "Signal lumineux sur le toit du taxi indiquant sa disponibilité. Vert = libre, rouge = occupé, orange = en approche. Ce dispositif est obligatoire pour tout taxi en service.",
      en: "A light signal on the roof of the taxi indicating availability. Green = available, red = occupied, orange = approaching. This device is mandatory for every taxi in service.",
    },
  },
  {
    id: "maraude",
    term: { fr: "Maraude", en: "Street hailing / Cruising" },
    definition: {
      fr: "Activité consistant pour un taxi à circuler sur la voie publique à la recherche de clients. Les taxis ont le monopole de la maraude, contrairement aux VTC qui ne peuvent être réservés que sur commande.",
      en: "The activity of a taxi driving on public roads looking for passengers. Taxis have a monopoly on street hailing, unlike VTCs which can only be booked in advance.",
    },
  },
  {
    id: "prise-en-charge",
    term: { fr: "Prise en charge", en: "Pickup fee / Base fare" },
    definition: {
      fr: "Montant minimum affiché au compteur dès que la course commence. En France, la prise en charge est réglementée et ne peut dépasser un plafond fixé par arrêté préfectoral.",
      en: "The minimum amount displayed on the meter as soon as the ride begins. In France, the pickup fee is regulated and cannot exceed a ceiling set by prefectural decree.",
    },
  },
  {
    id: "supplement",
    term: { fr: "Supplément", en: "Surcharge" },
    definition: {
      fr: "Montant additionnel pouvant être appliqué en plus du prix au compteur dans certaines situations : 4e passager, bagages volumineux, animal de compagnie, réservation préalable.",
      en: "An additional amount that may be applied on top of the meter fare in certain situations: 4th passenger, bulky luggage, pets, advance booking.",
    },
  },
  {
    id: "tarif-a",
    term: { fr: "Tarif A", en: "Rate A" },
    definition: {
      fr: "Tarif applicable en journée (7h-19h) pour les courses en zone urbaine. C'est le tarif le moins cher, avec un prix au kilomètre réglementé par arrêté préfectoral.",
      en: "The rate applicable during daytime (7am-7pm) for urban area rides. This is the cheapest rate, with a per-kilometer price regulated by prefectural decree.",
    },
  },
  {
    id: "tarif-b",
    term: { fr: "Tarif B", en: "Rate B" },
    definition: {
      fr: "Tarif de nuit (19h-7h), des dimanches et jours fériés, ou des courses en banlieue. Le prix au kilomètre est majoré par rapport au tarif A.",
      en: "The rate for nighttime (7pm-7am), Sundays and public holidays, or suburban rides. The per-kilometer price is higher than Rate A.",
    },
  },
  {
    id: "tarif-c",
    term: { fr: "Tarif C", en: "Rate C" },
    definition: {
      fr: "Tarif applicable pour les courses de nuit en banlieue ou les retours à vide. C'est le tarif le plus élevé des trois tarifs réglementés.",
      en: "The rate for nighttime suburban rides or empty return trips. This is the highest of the three regulated rates.",
    },
  },
  {
    id: "transfert",
    term: { fr: "Transfert", en: "Transfer" },
    definition: {
      fr: "Course de taxi entre un point de transport (aéroport, gare) et une destination (hôtel, domicile). Les transferts sont souvent proposés à prix fixe par les plateformes de réservation.",
      en: "A taxi ride between a transport hub (airport, train station) and a destination (hotel, home). Transfers are often offered at a fixed price by booking platforms.",
    },
  },
  {
    id: "vtc",
    term: { fr: "VTC (Voiture de Transport avec Chauffeur)", en: "VTC (Chauffeured Car Service)" },
    definition: {
      fr: "Service de transport de personnes avec chauffeur, réservé exclusivement sur commande préalable. Contrairement aux taxis, les VTC ne peuvent pas pratiquer la maraude ni stationner dans les stations de taxi.",
      en: "A passenger transport service with driver, available exclusively by advance booking. Unlike taxis, VTCs cannot cruise for passengers or use taxi stands.",
    },
  },
  {
    id: "carte-professionnelle",
    term: { fr: "Carte professionnelle", en: "Professional license card" },
    definition: {
      fr: "Document obligatoire délivré par la préfecture attestant que le chauffeur a réussi l'examen de taxi et est autorisé à exercer. Elle doit être visible dans le véhicule.",
      en: "A mandatory document issued by the prefecture certifying that the driver has passed the taxi exam and is authorized to operate. It must be visible in the vehicle.",
    },
  },
  {
    id: "station-taxi",
    term: { fr: "Station de taxi", en: "Taxi stand / Taxi rank" },
    definition: {
      fr: "Emplacement réservé sur la voie publique où les taxis peuvent stationner en attente de clients. Les stations sont réparties dans la ville selon un plan établi par la mairie.",
      en: "A designated area on public roads where taxis can park while waiting for passengers. Stands are distributed across the city according to a plan established by the city hall.",
    },
  },
  {
    id: "retour-a-vide",
    term: { fr: "Retour à vide", en: "Empty return trip" },
    definition: {
      fr: "Trajet effectué par le taxi sans passager pour revenir à sa zone d'activité après une course longue distance. Le supplément retour à vide peut être facturé au client dans certains cas.",
      en: "A trip made by the taxi without passengers to return to its operating area after a long-distance ride. An empty return surcharge may be charged to the customer in certain cases.",
    },
  },
  {
    id: "mise-a-disposition",
    term: { fr: "Mise à disposition", en: "Chauffeur hire / Dedicated driver" },
    definition: {
      fr: "Service de location de taxi avec chauffeur pour une durée déterminée (demi-journée ou journée). Le client dispose du véhicule et du chauffeur pour tous ses déplacements.",
      en: "A taxi rental service with driver for a set duration (half-day or full day). The customer has the vehicle and driver available for all their trips.",
    },
  },
  {
    id: "taxi-conventionné",
    term: { fr: "Taxi conventionné", en: "Approved medical taxi" },
    definition: {
      fr: "Taxi ayant signé une convention avec la CPAM (Sécurité sociale) pour le transport de patients vers des établissements de santé. Les frais peuvent être pris en charge par l'Assurance Maladie.",
      en: "A taxi that has signed an agreement with the French social security system (CPAM) for patient transport to healthcare facilities. Costs may be covered by health insurance.",
    },
  },
  {
    id: "bon-de-transport",
    term: { fr: "Bon de transport", en: "Medical transport voucher" },
    definition: {
      fr: "Prescription médicale permettant la prise en charge du transport sanitaire par l'Assurance Maladie. Le médecin détermine le mode de transport adapté (taxi, ambulance, VSL).",
      en: "A medical prescription allowing healthcare transport costs to be covered by health insurance. The doctor determines the appropriate transport mode (taxi, ambulance, medical shuttle).",
    },
  },
  {
    id: "cpam",
    term: { fr: "CPAM (Caisse Primaire d'Assurance Maladie)", en: "CPAM (Primary Health Insurance Fund)" },
    definition: {
      fr: "Organisme de la Sécurité sociale qui rembourse les frais de transport médical. Pour être remboursé, le trajet doit être prescrit par un médecin et effectué par un transporteur conventionné.",
      en: "A social security body that reimburses medical transport costs. To be reimbursed, the trip must be prescribed by a doctor and carried out by an approved transporter.",
    },
  },
  {
    id: "tpmr",
    term: { fr: "TPMR (Transport de Personnes à Mobilité Réduite)", en: "Accessible transport (disabled passengers)" },
    definition: {
      fr: "Service de transport adapté aux personnes en fauteuil roulant ou à mobilité réduite. Les véhicules TPMR disposent d'une rampe d'accès et d'un espace aménagé.",
      en: "A transport service adapted for wheelchair users or people with reduced mobility. TPMR vehicles have an access ramp and adapted space.",
    },
  },
  {
    id: "navette",
    term: { fr: "Navette", en: "Shuttle" },
    definition: {
      fr: "Service de transport régulier entre deux points fixes (ex : aéroport-gare, hôtel-aéroport). Les navettes peuvent être partagées entre plusieurs passagers pour réduire le coût.",
      en: "A regular transport service between two fixed points (e.g., airport-station, hotel-airport). Shuttles can be shared between multiple passengers to reduce cost.",
    },
  },
  {
    id: "appli-taxi",
    term: { fr: "Application de réservation taxi", en: "Taxi booking app" },
    definition: {
      fr: "Application mobile permettant de commander un taxi en quelques clics, avec géolocalisation, estimation du prix et suivi en temps réel. TaxiNeo est une application de réservation à prix fixe.",
      en: "A mobile application for booking a taxi in a few clicks, with geolocation, price estimation, and real-time tracking. TaxiNeo is a fixed-price taxi booking app.",
    },
  },
  {
    id: "colis",
    term: { fr: "Course colis", en: "Parcel delivery ride" },
    definition: {
      fr: "Service de livraison de colis ou documents urgents par taxi. Le chauffeur effectue le trajet sans passager pour acheminer le colis à destination dans les meilleurs délais.",
      en: "A parcel or urgent document delivery service by taxi. The driver makes the trip without a passenger to deliver the parcel to its destination as quickly as possible.",
    },
  },
  {
    id: "heure-d-attente",
    term: { fr: "Heure d'attente", en: "Waiting time rate" },
    definition: {
      fr: "Tarif facturé lorsque le taxi est immobilisé à la demande du client (attente devant un commerce, embouteillage). Le prix est calculé par le taximètre en fonction du temps écoulé.",
      en: "The rate charged when the taxi is stationary at the customer's request (waiting outside a shop, traffic jam). The price is calculated by the taximeter based on elapsed time.",
    },
  },
  {
    id: "reglementation",
    term: { fr: "Réglementation taxi", en: "Taxi regulations" },
    definition: {
      fr: "Ensemble des lois et arrêtés encadrant l'activité de taxi en France. La réglementation couvre les tarifs, les conditions d'exercice, les obligations du chauffeur et les droits des passagers.",
      en: "The set of laws and decrees governing taxi operations in France. Regulations cover fares, operating conditions, driver obligations, and passenger rights.",
    },
  },
  {
    id: "centrale-radio",
    term: { fr: "Centrale radio taxi", en: "Taxi dispatch center" },
    definition: {
      fr: "Centre de réservation qui reçoit les appels des clients et dispatche les courses aux chauffeurs affiliés. La centrale radio est progressivement remplacée par les applications numériques.",
      en: "A booking center that receives customer calls and dispatches rides to affiliated drivers. Radio dispatch centers are gradually being replaced by digital applications.",
    },
  },
  {
    id: "depannage",
    term: { fr: "Taxi dépannage", en: "Breakdown taxi" },
    definition: {
      fr: "Service de taxi proposé aux automobilistes en panne ou accidentés. Le chauffeur vient chercher le client sur le lieu de la panne pour le conduire à destination ou au garage le plus proche.",
      en: "A taxi service offered to motorists who have broken down or had an accident. The driver picks up the customer at the breakdown location to take them to their destination or the nearest garage.",
    },
  },
  {
    id: "prix-fixe",
    term: { fr: "Prix fixe", en: "Fixed price" },
    definition: {
      fr: "Tarif garanti pour un trajet, calculé à l'avance lors de la réservation. Le prix fixe protège le client contre les variations de trafic et les détours. C'est le modèle proposé par TaxiNeo.",
      en: "A guaranteed fare for a journey, calculated in advance during booking. The fixed price protects the customer against traffic variations and detours. This is the model offered by TaxiNeo.",
    },
  },
];
