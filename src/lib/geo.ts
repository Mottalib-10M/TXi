/**
 * Calculate distance between two coordinates using the Haversine formula
 * @returns distance in kilometers
 */
export function haversineDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 6371; // Earth's radius in km
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(deg: number): number {
  return deg * (Math.PI / 180);
}

/**
 * Estimate price based on distance and driver pricing
 */
export function estimatePrice(
  distanceKm: number,
  baseFare: number,
  pricePerKm: number,
  minimumFare: number
): number {
  const calculated = baseFare + distanceKm * pricePerKm;
  return Math.max(calculated, minimumFare);
}
