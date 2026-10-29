// Ce qui manque au profil d'un chauffeur, partagé par Demandes et Moi.
// `key` est la clé de traduction (namespace dashboard), `section` celle du formulaire de profil.

type DriverForChecks = {
  phone: string | null;
  bio: string | null;
  vehicles: unknown;
  vehicleBrand: string | null;
  vehiclePlate: string | null;
  zoneLat: number | null;
};

export type ProfileCheck = {
  key: "phone" | "bio" | "vehicle" | "plate" | "zone" | "vehiclePhoto";
  hint?: "bioHint" | "vehiclePhotoHint";
  icon: string;
  section: string;
  done: boolean;
};

export function driverProfileChecks(driver: DriverForChecks) {
  const vehicles = Array.isArray(driver.vehicles) ? (driver.vehicles as Array<{ brand?: string; plate?: string; photos?: string[] }>) : [];
  const v0 = vehicles[0];
  const checks: ProfileCheck[] = [
    { key: "phone", icon: "solar:phone-linear", section: "personal", done: Boolean(driver.phone) },
    { key: "bio", hint: "bioHint", icon: "solar:document-text-linear", section: "personal", done: Boolean(driver.bio) },
    { key: "vehicle", icon: "mdi:car-outline", section: "vehicle", done: Boolean(v0?.brand || driver.vehicleBrand) },
    { key: "plate", icon: "solar:license-linear", section: "vehicle", done: Boolean(v0?.plate || driver.vehiclePlate) },
    { key: "zone", icon: "solar:map-point-linear", section: "zone", done: Boolean(driver.zoneLat) },
    { key: "vehiclePhoto", hint: "vehiclePhotoHint", icon: "solar:camera-linear", section: "vehicle", done: vehicles.some((v) => v.photos && v.photos.length > 0) },
  ];
  const completeness = Math.round((checks.filter((c) => c.done).length / checks.length) * 100);
  return { checks, missing: checks.filter((c) => !c.done), completeness };
}
