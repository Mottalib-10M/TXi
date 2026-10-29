"use client";

// Deux onglets pour l'hôtel, l'entreprise ou le particulier : Commander et
// Courses (l'accueil), plus Compte (favoris, cagnotte, paramètres).

import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { SpaceNav } from "@/components/layout/SpaceNav";

const ACCOUNT_PAGES = ["/org/compte", "/org/favoris", "/org/cagnotte", "/org/parametres"];

export function OrgSidebar({ userName, orgType }: { userName: string; orgType?: string }) {
  const t = useTranslations("org.sidebar");
  const ta = useTranslations("auth");
  const pathname = usePathname();
  const under = (pages: string[]) => pages.some((p) => pathname === p || pathname.startsWith(`${p}/`));

  const orgLabel = orgType === "HOTEL" ? ta("hotel") : orgType === "HOSPITAL" ? ta("hospital") : orgType === "INDIVIDUAL" ? ta("particulier") : ta("enterprise");

  return (
    <SpaceNav
      userName={userName}
      accountHref="/org/compte"
      navLabel={t("nav")}
      logoutLabel={t("logout")}
      tag={<span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">{orgLabel}</span>}
      tabs={[
        { href: "/org/nouvelle-course", label: t("order"), icon: "solar:add-circle-linear", active: under(["/org/nouvelle-course"]) },
        { href: "/org", label: t("rides"), icon: "solar:list-check-linear", active: pathname === "/org" || under(["/org/courses"]) },
        { href: "/org/compte", label: t("account"), icon: "solar:user-circle-linear", active: under(ACCOUNT_PAGES) },
      ]}
    />
  );
}
