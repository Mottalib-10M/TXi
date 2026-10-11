"use client";

// Barre d'onglets en bas de l'écran, seulement dans l'app iPhone et Android
// (masquée sur le site par globals.css tant que <html data-app> est absent) :
// réserver, ses courses, son espace, l'aide. Les liens suivent le rôle connecté.

import { Icon } from "@iconify/react";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export function AppTabBar() {
  const t = useTranslations("appTabs");
  const pathname = usePathname();
  const { data } = useSession();
  const role = data?.user?.role;
  const rides = role === "organization" ? "/org/courses" : role === "driver" ? "/dashboard/reservations" : "/mes-reservations";
  const space = role === "organization" ? "/org" : role === "driver" ? "/dashboard" : "/connexion";
  const tabs = [
    { href: "/app", label: t("book"), icon: "solar:map-point-wave-linear", active: pathname === "/app" || pathname === "/" },
    { href: rides, label: t("rides"), icon: "solar:calendar-linear", active: pathname.startsWith(rides) || pathname.startsWith("/mes-reservations") },
    { href: space, label: t("space"), icon: "solar:user-circle-linear", active: (pathname.startsWith(space) && !pathname.startsWith(rides)) || pathname.startsWith("/inscription") },
    { href: "/contact", label: t("help"), icon: "solar:chat-round-line-linear", active: pathname.startsWith("/contact") },
  ];
  return (
    <nav className="app-tabbar" aria-label={t("menu")}>
      {tabs.map((tab) => (
        <Link key={tab.label} href={tab.href} className={tab.active ? "is-active" : undefined} aria-current={tab.active ? "page" : undefined}>
          <Icon icon={tab.icon} className="text-[22px]" />
          <span>{tab.label}</span>
        </Link>
      ))}
    </nav>
  );
}
