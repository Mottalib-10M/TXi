export interface PredefinedLocation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  category: "school" | "station" | "airport" | "business";
}

export const predefinedLocations: PredefinedLocation[] = [
  {
    id: "insead-fontainebleau",
    name: "INSEAD Fontainebleau",
    lat: 48.4049,
    lng: 2.6986,
    category: "school",
  },
  {
    id: "gare-fontainebleau-avon",
    name: "Gare de Fontainebleau-Avon",
    lat: 48.4314,
    lng: 2.6977,
    category: "station",
  },
  {
    id: "aeroport-orly",
    name: "Aéroport d'Orly",
    lat: 48.7262,
    lng: 2.3652,
    category: "airport",
  },
  {
    id: "aeroport-cdg",
    name: "Aéroport Charles de Gaulle",
    lat: 49.0097,
    lng: 2.5479,
    category: "airport",
  },
  {
    id: "gare-de-lyon",
    name: "Gare de Lyon",
    lat: 48.8443,
    lng: 2.3734,
    category: "station",
  },
  {
    id: "la-defense",
    name: "La Défense",
    lat: 48.8918,
    lng: 2.2382,
    category: "business",
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
