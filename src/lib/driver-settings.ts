// Pages de réglage du chauffeur, listées dans l'onglet « Moi » et dans le menu
// latéral de chacune d'elles (SettingsShell). Les libellés sont dans dashboard.me.

export type SettingsKey =
  | "publicPage"
  | "info"
  | "vehicles"
  | "pricing"
  | "zone"
  | "availability"
  | "referral"
  | "notifications";

export const DRIVER_SETTINGS: { key: SettingsKey; href: string; icon: string; section?: string }[] = [
  { key: "publicPage", href: "/dashboard/profil-public", icon: "solar:eye-linear" },
  { key: "info", href: "/dashboard/profil?section=personal", icon: "solar:user-linear", section: "personal" },
  { key: "vehicles", href: "/dashboard/profil?section=vehicle", icon: "mdi:car-outline", section: "vehicle" },
  { key: "pricing", href: "/dashboard/profil?section=pricing", icon: "solar:tag-price-linear", section: "pricing" },
  { key: "zone", href: "/dashboard/profil?section=zone", icon: "solar:map-point-linear", section: "zone" },
  { key: "availability", href: "/dashboard/profil?section=availability", icon: "solar:clock-circle-linear", section: "availability" },
  { key: "referral", href: "/dashboard/parrainage", icon: "solar:users-group-rounded-linear" },
  { key: "notifications", href: "/dashboard/profil?section=notifications", icon: "solar:bell-linear", section: "notifications" },
];

export const PROFILE_SECTIONS = ["personal", "vehicle", "zone", "pricing", "availability", "notifications"];
