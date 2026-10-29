import { redirect } from "next/navigation";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { getTranslations } from "next-intl/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Link } from "@/i18n/navigation";
import { DeleteAccount } from "@/components/dashboard/DeleteAccount";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { LogoutButton } from "@/components/layout/LogoutButton";
import { MenuRows } from "@/components/layout/MenuRows";
import { initials } from "@/lib/initials";
import { driverProfileChecks } from "@/lib/driver-profile";
import { DRIVER_SETTINGS } from "@/lib/driver-settings";

// Onglet « Moi » du chauffeur : toutes les pages de réglage à un appui
// (profil, véhicules, tarifs, zone, horaires, carte, page publique, parrainage, compte).

export default async function MoiPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/connexion");

  const driver = await prisma.driver.findUnique({ where: { id: session.user.id } });
  if (!driver) redirect("/connexion");

  const t = await getTranslations("dashboard.me");
  const td = await getTranslations("dashboard");

  const vehicles = Array.isArray(driver.vehicles) ? (driver.vehicles as Array<{ brand?: string; model?: string }>) : [];
  const vehicleName = vehicles[0]?.brand
    ? `${vehicles[0].brand || ""} ${vehicles[0].model || ""}`.trim()
    : `${driver.vehicleBrand || ""} ${driver.vehicleModel || ""}`.trim();
  const { completeness, missing } = driverProfileChecks(driver);
  const fullName = `${driver.firstName} ${driver.lastName}`.trim();
  const subtitle = [driver.companyName, vehicleName].filter(Boolean).join(" · ");

  const rows = DRIVER_SETTINGS.map((s) => ({
    href: s.href,
    label: t(s.key),
    desc: s.key === "zone" ? driver.zoneAddress || t("zoneDesc") : t(`${s.key}Desc`),
    icon: s.icon,
  }));

  return (
    <div className="min-w-0">
      <h1 className="text-3xl font-bold tracking-tight mb-6">{t("title")}</h1>

      {/* Mobile : profil, pages, compte. Ordinateur : profil et compte à gauche, pages à droite. */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="space-y-4 min-w-0 lg:col-start-1 lg:row-start-1">
          {/* Qui je suis */}
          <Link
            href="/dashboard/profil?section=personal"
            className="flex items-center gap-4 bg-white border border-neutral-200 rounded-2xl p-4 hover:border-neutral-300 transition-colors"
          >
            <span className="w-14 h-14 rounded-full bg-neutral-900 text-white flex items-center justify-center text-lg font-bold overflow-hidden relative shrink-0">
              {driver.photoUrl ? (
                <Image src={driver.photoUrl} alt={fullName} fill sizes="56px" className="object-cover" />
              ) : (
                initials(fullName)
              )}
            </span>
            <span className="flex-1 min-w-0">
              <span className="block text-lg font-semibold truncate">{fullName}</span>
              {subtitle && <span className="block text-sm text-neutral-500 truncate">{subtitle}</span>}
            </span>
            <Icon icon="solar:pen-linear" className="text-neutral-400 shrink-0" />
          </Link>

          {/* Ce qui manque encore */}
          {missing.length > 0 && (
            <Link
              href={`/dashboard/profil?section=${missing[0].section}`}
              className="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3 hover:border-amber-300 transition-colors"
            >
              <span className="flex-1 min-w-0">
                <span className="block text-sm font-semibold">{td("profileFilled", { percent: completeness })}</span>
                <span className="block text-xs text-neutral-600 truncate">
                  {t("toAdd")} {missing.map((c) => td(c.key).toLowerCase()).join(", ")}
                </span>
              </span>
              <Icon icon="solar:alt-arrow-right-linear" className="text-amber-600 shrink-0" />
            </Link>
          )}

          {/* Carte de visite */}
          <Link
            href="/dashboard/carte"
            className="flex items-center gap-4 bg-white border border-neutral-200 rounded-2xl p-4 hover:border-neutral-300 transition-colors"
          >
            <span className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
              <Icon icon="solar:card-2-linear" className="text-2xl text-amber-600" />
            </span>
            <span className="flex-1 min-w-0">
              <span className="block text-sm font-semibold">{t("card")}</span>
              <span className="block text-xs text-neutral-500">{t("cardDesc")}</span>
            </span>
            <Icon icon="solar:alt-arrow-right-linear" className="text-neutral-400 shrink-0" />
          </Link>
        </div>

        <div className="min-w-0 lg:col-start-2 lg:row-start-1 lg:row-span-2">
          <MenuRows rows={rows} />
        </div>
        <div className="min-w-0 lg:col-start-1 lg:row-start-2">
          <AccountBlock title={t("account")} logout={t("logout")} />
        </div>
      </div>
    </div>
  );
}

function AccountBlock({ title, logout }: { title: string; logout: string }) {
  return (
    <section>
      <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2 px-1">{title}</h2>
      <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden">
        <div className="p-3">
          <LanguageSwitcher variant="full" />
        </div>
        <div className="border-t border-neutral-100">
          <LogoutButton label={logout} />
        </div>
      </div>
      <div className="[&>details]:mt-4">
        <DeleteAccount />
      </div>
    </section>
  );
}
