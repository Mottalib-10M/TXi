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
 * Check if a given hour (0-23) falls within night time (19h-7h)
 */
export function isNightTime(date: Date): boolean {
  const hour = date.getHours();
  return hour >= 19 || hour < 7;
}

/**
 * Calculate the fraction of a trip that falls during night hours (19h-7h).
 * Returns a value between 0 and 1.
 */
export function calculateNightFraction(startTime: Date, durationMinutes: number): number {
  if (durationMinutes <= 0) return isNightTime(startTime) ? 1 : 0;

  const STEP = 5; // check every 5 minutes
  const steps = Math.max(1, Math.round(durationMinutes / STEP));
  let nightSteps = 0;

  for (let i = 0; i <= steps; i++) {
    const t = new Date(startTime.getTime() + (i * durationMinutes * 60000) / steps);
    if (isNightTime(t)) nightSteps++;
  }

  return nightSteps / (steps + 1);
}

/**
 * Estimate price based on distance and driver pricing, with day/night proportional split.
 */
export function estimatePrice(
  distanceKm: number,
  baseFare: number,
  pricePerKm: number,
  minimumFare: number,
  pricePerKmNight?: number,
  bookingTime?: Date,
): number {
  if (pricePerKmNight && bookingTime) {
    const avgSpeed = distanceKm < 10 ? 25 : distanceKm < 30 ? 40 : distanceKm < 80 ? 60 : 80;
    const durationMinutes = (distanceKm / avgSpeed) * 60;
    const nightFraction = calculateNightFraction(bookingTime, durationMinutes);
    const dayFraction = 1 - nightFraction;
    const blendedRate = dayFraction * pricePerKm + nightFraction * pricePerKmNight;
    const calculated = baseFare + distanceKm * blendedRate;
    return Math.max(calculated, minimumFare);
  }

  const calculated = baseFare + distanceKm * pricePerKm;
  return Math.max(calculated, minimumFare);
}
