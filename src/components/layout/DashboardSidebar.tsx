"use client";

// Trois onglets pour le chauffeur : Demandes (l'accueil), Courses (reçues et
// transmises) et Moi (profil, véhicules, tarifs, zone, carte, parrainage, compte).

import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { SpaceNav } from "@/components/layout/SpaceNav";

const ME_PAGES = ["/dashboard/moi", "/dashboard/profil", "/dashboard/profil-public", "/dashboard/carte", "/dashboard/parrainage"];
const RIDE_PAGES = ["/dashboard/reservations", "/dashboard/p2p", "/dashboard/taxi-partage"];

export function DashboardSidebar({ userName, pendingCount = 0 }: { userName: string; pendingCount?: number }) {
  const t = useTranslations("dashboard.sidebar");
  const pathname = usePathname();
  const under = (pages: string[]) => pages.some((p) => pathname === p || pathname.startsWith(`${p}/`));

  return (
    <SpaceNav
      userName={userName}
      accountHref="/dashboard/moi"
      navLabel={t("nav")}
      logoutLabel={t("logout")}
      tag={<span className="text-xs bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded-full">Pro</span>}
      tabs={[
        { href: "/dashboard", label: t("requests"), icon: "solar:bell-linear", active: pathname === "/dashboard", badge: pendingCount },
        { href: "/dashboard/reservations", label: t("rides"), icon: "solar:list-check-linear", active: under(RIDE_PAGES) },
        { href: "/dashboard/moi", label: t("me"), icon: "solar:user-circle-linear", active: under(ME_PAGES) },
      ]}
    />
  );
}
