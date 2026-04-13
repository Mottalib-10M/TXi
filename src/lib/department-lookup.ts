import { NATIONAL_TARIFFS, DEPARTMENT_NAMES, AIRPORT_FARES, type AirportFareGroup } from "@/data/departmental-tariffs";

/**
 * Extract postal code from a Google Places-style address string.
 * Examples:
 *   "12 Rue Blatin, 63000 Clermont-Ferrand, France" → "63000"
 *   "Ajaccio, 20000, France" → "20000"
 */
function extractPostalCode(address: string): string | null {
  const match = address.match(/\b(\d{5})\b/);
  return match ? match[1] : null;
}

/**
 * Derive the department code from a 5-digit French postal code.
 * - 20xxx → "2A" (≤20190) or "2B" (>20190) for Corsica
 * - 97x → DOM-TOM (971–976)
 * - Otherwise first 2 digits
 */
function postalCodeToDepartment(postalCode: string): string {
  if (postalCode.startsWith("97")) {
    return postalCode.slice(0, 3);
  }
  if (postalCode.startsWith("20")) {
    const num = parseInt(postalCode, 10);
    return num <= 20190 ? "2A" : "2B";
  }
  return postalCode.slice(0, 2);
}

/**
 * Fallback: map known city/area names to department codes
 * when no postal code is present in the address.
 */
const CITY_TO_DEPARTMENT: Record<string, string> = {
  "paris": "75",
  "marseille": "13",
  "lyon": "69",
  "toulouse": "31",
  "nice": "06",
  "nantes": "44",
  "montpellier": "34",
  "strasbourg": "67",
  "bordeaux": "33",
  "lille": "59",
  "rennes": "35",
  "reims": "51",
  "toulon": "83",
  "saint-étienne": "42",
  "saint-etienne": "42",
  "le havre": "76",
  "grenoble": "38",
  "dijon": "21",
  "angers": "49",
  "nîmes": "30",
  "nimes": "30",
  "clermont-ferrand": "63",
  "aix-en-provence": "13",
  "brest": "29",
  "tours": "37",
  "amiens": "80",
  "limoges": "87",
  "perpignan": "66",
  "metz": "57",
  "besançon": "25",
  "besancon": "25",
  "orléans": "45",
  "orleans": "45",
  "rouen": "76",
  "mulhouse": "68",
  "caen": "14",
  "nancy": "54",
  "ajaccio": "2A",
  "bastia": "2B",
  "cannes": "06",
  "antibes": "06",
  "monaco": "06",
  "avignon": "84",
  "poitiers": "86",
  "la rochelle": "17",
  "pau": "64",
  "calais": "62",
  "boulogne-billancourt": "92",
  "saint-denis": "93",
  "montreuil": "93",
  "argenteuil": "95",
  "créteil": "94",
  "creteil": "94",
  "versailles": "78",
  "nanterre": "92",
  "vitry-sur-seine": "94",
  "colombes": "92",
  "fort-de-france": "972",
  "pointe-à-pitre": "971",
  "pointe-a-pitre": "971",
  "saint-pierre": "974",
  "saint-denis de la réunion": "974",
  "cayenne": "973",
  "mamoudzou": "976",
};

function detectDepartmentFromCityName(address: string): string | null {
  const lower = address.toLowerCase();
  for (const [city, code] of Object.entries(CITY_TO_DEPARTMENT)) {
    if (lower.includes(city)) return code;
  }
  return null;
}

/**
 * Get the department code from a zone address string.
 * Tries postal code first, then falls back to city name detection.
 */
export function getDepartmentCode(zoneAddress: string): string | null {
  if (!zoneAddress) return null;
  const postalCode = extractPostalCode(zoneAddress);
  if (postalCode) return postalCodeToDepartment(postalCode);
  return detectDepartmentFromCityName(zoneAddress);
}

export interface OfficialTariffResult {
  departmentName: string;
  year: number;
  priseEnCharge: number;
  tarifKm: number;
  tarifHoraire: number;
  minimumCourse: number;
}

/**
 * Get the official national tariff ceilings + department name for a zone address.
 * Returns null if the postal code / department cannot be determined.
 */
export function getOfficialTariff(zoneAddress: string): OfficialTariffResult | null {
  const code = getDepartmentCode(zoneAddress);
  if (!code) return null;
  const departmentName = DEPARTMENT_NAMES[code];
  if (!departmentName) return null;
  return {
    departmentName,
    year: NATIONAL_TARIFFS.year,
    priseEnCharge: NATIONAL_TARIFFS.priseEnCharge,
    tarifKm: NATIONAL_TARIFFS.tarifKm,
    tarifHoraire: NATIONAL_TARIFFS.tarifHoraire,
    minimumCourse: NATIONAL_TARIFFS.minimumCourse,
  };
}

/**
 * Get airport flat-rate fares relevant to a given department code.
 */
export function getAirportFares(departmentCode: string | null): AirportFareGroup[] {
  if (!departmentCode) return [];
  return AIRPORT_FARES.filter((g) => g.departmentCodes.includes(departmentCode));
}
