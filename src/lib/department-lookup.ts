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

/**
 * Approximate préfecture coordinates for each French department.
 * Used as a fallback when address parsing fails but lat/lng are available.
 */
const DEPARTMENT_CENTERS: { code: string; lat: number; lng: number }[] = [
  { code: "01", lat: 46.205, lng: 5.225 },
  { code: "02", lat: 49.563, lng: 3.624 },
  { code: "03", lat: 46.340, lng: 3.332 },
  { code: "04", lat: 44.092, lng: 6.236 },
  { code: "05", lat: 44.560, lng: 6.079 },
  { code: "06", lat: 43.710, lng: 7.262 },
  { code: "07", lat: 44.735, lng: 4.597 },
  { code: "08", lat: 49.772, lng: 4.721 },
  { code: "09", lat: 42.967, lng: 1.605 },
  { code: "10", lat: 48.297, lng: 4.074 },
  { code: "11", lat: 43.213, lng: 2.354 },
  { code: "12", lat: 44.350, lng: 2.575 },
  { code: "13", lat: 43.296, lng: 5.370 },
  { code: "14", lat: 49.183, lng: -0.370 },
  { code: "15", lat: 44.930, lng: 2.440 },
  { code: "16", lat: 45.650, lng: 0.160 },
  { code: "17", lat: 46.160, lng: -1.151 },
  { code: "18", lat: 47.083, lng: 2.399 },
  { code: "19", lat: 45.268, lng: 1.772 },
  { code: "2A", lat: 41.927, lng: 8.737 },
  { code: "2B", lat: 42.443, lng: 9.449 },
  { code: "21", lat: 47.322, lng: 5.041 },
  { code: "22", lat: 48.514, lng: -2.760 },
  { code: "23", lat: 46.167, lng: 1.871 },
  { code: "24", lat: 45.184, lng: 0.721 },
  { code: "25", lat: 47.241, lng: 6.022 },
  { code: "26", lat: 44.934, lng: 4.892 },
  { code: "27", lat: 49.028, lng: 1.151 },
  { code: "28", lat: 48.447, lng: 1.489 },
  { code: "29", lat: 48.390, lng: -4.486 },
  { code: "30", lat: 43.837, lng: 4.360 },
  { code: "31", lat: 43.605, lng: 1.444 },
  { code: "32", lat: 43.646, lng: 0.587 },
  { code: "33", lat: 44.838, lng: -0.579 },
  { code: "34", lat: 43.611, lng: 3.877 },
  { code: "35", lat: 48.114, lng: -1.676 },
  { code: "36", lat: 46.812, lng: 1.691 },
  { code: "37", lat: 47.390, lng: 0.689 },
  { code: "38", lat: 45.189, lng: 5.724 },
  { code: "39", lat: 46.674, lng: 5.556 },
  { code: "40", lat: 43.894, lng: -0.500 },
  { code: "41", lat: 47.586, lng: 1.336 },
  { code: "42", lat: 45.434, lng: 4.390 },
  { code: "43", lat: 45.043, lng: 3.885 },
  { code: "44", lat: 47.218, lng: -1.554 },
  { code: "45", lat: 47.903, lng: 1.909 },
  { code: "46", lat: 44.449, lng: 1.440 },
  { code: "47", lat: 44.203, lng: 0.616 },
  { code: "48", lat: 44.519, lng: 3.500 },
  { code: "49", lat: 47.473, lng: -0.556 },
  { code: "50", lat: 48.884, lng: -1.178 },
  { code: "51", lat: 49.258, lng: 3.620 },  // Reims area (Marne)
  { code: "52", lat: 48.112, lng: 5.139 },
  { code: "53", lat: 48.073, lng: -0.768 },
  { code: "54", lat: 48.692, lng: 6.184 },
  { code: "55", lat: 49.160, lng: 5.383 },
  { code: "56", lat: 47.658, lng: -2.761 },
  { code: "57", lat: 49.120, lng: 6.176 },
  { code: "58", lat: 46.990, lng: 3.163 },
  { code: "59", lat: 50.629, lng: 3.057 },
  { code: "60", lat: 49.418, lng: 2.826 },
  { code: "61", lat: 48.430, lng: 0.091 },
  { code: "62", lat: 50.293, lng: 2.780 },
  { code: "63", lat: 45.783, lng: 3.082 },
  { code: "64", lat: 43.295, lng: -0.370 },
  { code: "65", lat: 43.233, lng: 0.078 },
  { code: "66", lat: 42.699, lng: 2.896 },
  { code: "67", lat: 48.573, lng: 7.752 },
  { code: "68", lat: 47.750, lng: 7.336 },
  { code: "69", lat: 45.764, lng: 4.836 },
  { code: "70", lat: 47.620, lng: 6.154 },
  { code: "71", lat: 46.312, lng: 4.832 },
  { code: "72", lat: 47.995, lng: 0.200 },
  { code: "73", lat: 45.564, lng: 5.921 },
  { code: "74", lat: 45.899, lng: 6.129 },
  { code: "75", lat: 48.857, lng: 2.347 },
  { code: "76", lat: 49.443, lng: 1.100 },
  { code: "77", lat: 48.546, lng: 2.656 },
  { code: "78", lat: 48.805, lng: 2.134 },
  { code: "79", lat: 46.324, lng: -0.460 },
  { code: "80", lat: 49.894, lng: 2.296 },
  { code: "81", lat: 43.928, lng: 2.148 },
  { code: "82", lat: 44.017, lng: 1.354 },
  { code: "83", lat: 43.124, lng: 5.928 },
  { code: "84", lat: 43.949, lng: 4.806 },
  { code: "85", lat: 46.671, lng: -1.427 },
  { code: "86", lat: 46.580, lng: 0.340 },
  { code: "87", lat: 45.833, lng: 1.262 },
  { code: "88", lat: 48.174, lng: 6.451 },
  { code: "89", lat: 47.799, lng: 3.570 },
  { code: "90", lat: 47.640, lng: 6.863 },
  { code: "91", lat: 48.632, lng: 2.441 },
  { code: "92", lat: 48.828, lng: 2.219 },
  { code: "93", lat: 48.910, lng: 2.480 },
  { code: "94", lat: 48.791, lng: 2.478 },
  { code: "95", lat: 49.035, lng: 2.074 },
  { code: "971", lat: 16.265, lng: -61.551 },
  { code: "972", lat: 14.616, lng: -61.059 },
  { code: "973", lat: 4.937, lng: -52.326 },
  { code: "974", lat: -21.115, lng: 55.536 },
  { code: "976", lat: -12.781, lng: 45.228 },
];

/**
 * Find the nearest department from GPS coordinates.
 * Uses Euclidean distance on lat/lng (sufficient for France-scale proximity).
 */
export function getDepartmentFromCoords(lat: number, lng: number): string | null {
  let bestCode: string | null = null;
  let bestDist = Infinity;
  for (const d of DEPARTMENT_CENTERS) {
    const dlat = d.lat - lat;
    const dlng = d.lng - lng;
    const dist = dlat * dlat + dlng * dlng;
    if (dist < bestDist) {
      bestDist = dist;
      bestCode = d.code;
    }
  }
  return bestCode;
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
