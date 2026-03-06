export interface MeetingPoint {
  description: string;
  address: string;
}

export interface PredefinedLocation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  category: "school" | "station" | "airport" | "business";
  meetingPoint: MeetingPoint;
}

export const predefinedLocations: PredefinedLocation[] = [
  {
    id: "insead-fontainebleau",
    name: "INSEAD Fontainebleau",
    lat: 48.4049,
    lng: 2.6986,
    category: "school",
    meetingPoint: {
      description:
        "Rendez-vous au parking principal d'INSEAD, zone visiteurs près de l'entrée principale du campus (Boulevard de Constance). Le chauffeur vous attend devant le bâtiment d'accueil.",
      address: "Boulevard de Constance, 77300 Fontainebleau",
    },
  },
  {
    id: "gare-fontainebleau-avon",
    name: "Gare de Fontainebleau-Avon",
    lat: 48.4314,
    lng: 2.6977,
    category: "station",
    meetingPoint: {
      description:
        "Rendez-vous sur le parvis de la gare, côté sortie principale. Le chauffeur stationne dans la zone de dépose-minute face à l'entrée.",
      address: "Place François Mitterrand, 77210 Avon",
    },
  },
  {
    id: "aeroport-orly",
    name: "Aéroport d'Orly",
    lat: 48.7262,
    lng: 2.3652,
    category: "airport",
    meetingPoint: {
      description:
        "Rendez-vous au point de rencontre officiel du terminal (niveau Arrivées, porte de sortie). Le chauffeur vous contacte par téléphone à votre arrivée.",
      address: "Aéroport de Paris-Orly, 94390 Orly",
    },
  },
  {
    id: "aeroport-cdg",
    name: "Aéroport Charles de Gaulle",
    lat: 49.0097,
    lng: 2.5479,
    category: "airport",
    meetingPoint: {
      description:
        "Rendez-vous au point de rencontre officiel de votre terminal (niveau Arrivées). Le chauffeur vous contacte par téléphone à votre arrivée.",
      address: "Aéroport Charles de Gaulle, 95700 Roissy-en-France",
    },
  },
  {
    id: "gare-de-lyon",
    name: "Gare de Lyon",
    lat: 48.8443,
    lng: 2.3734,
    category: "station",
    meetingPoint: {
      description:
        "Rendez-vous devant la sortie principale Hall 1 (côté rue de Bercy). Le chauffeur stationne dans la zone de dépose-minute.",
      address: "Place Louis Armand, 75012 Paris",
    },
  },
  {
    id: "la-defense",
    name: "La Défense",
    lat: 48.8918,
    lng: 2.2382,
    category: "business",
    meetingPoint: {
      description:
        "Rendez-vous au pied de la Grande Arche, côté parvis. Le chauffeur stationne dans la zone de dépose-minute du centre commercial Westfield.",
      address: "Parvis de la Défense, 92800 Puteaux",
    },
  },
  {
    id: "paris-champs-elysees",
    name: "Paris Champs-Élysées",
    lat: 48.8698,
    lng: 2.3076,
    category: "business",
    meetingPoint: {
      description:
        "Rendez-vous au niveau du rond-point des Champs-Élysées, côté avenue Montaigne.",
      address: "Rond-Point des Champs-Élysées, 75008 Paris",
    },
  },
  {
    id: "paris-louvre",
    name: "Paris Louvre",
    lat: 48.8606,
    lng: 2.3376,
    category: "business",
    meetingPoint: {
      description:
        "Rendez-vous place du Carrousel, entrée Rivoli du Louvre.",
      address: "Place du Carrousel, 75001 Paris",
    },
  },
];

export function getLocationById(id: string): PredefinedLocation | undefined {
  return predefinedLocations.find((l) => l.id === id);
}

export function getLocationsByCategory(
  category: PredefinedLocation["category"]
): PredefinedLocation[] {
  return predefinedLocations.filter((l) => l.category === category);
}
