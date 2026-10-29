"use client";

// Cadre des pages ouvertes depuis « Moi » : le titre de la page, puis
// sur ordinateur la liste des réglages à droite pour passer de l'un à l'autre.
// Sur les pages du formulaire de profil, la page active vient de ?section=.

import { Icon } from "@iconify/react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { DRIVER_SETTINGS, PROFILE_SECTIONS, type SettingsKey } from "@/lib/driver-settings";

export function SettingsShell({
  active,
  showTitle = true,
  children,
}: {
  active?: SettingsKey;
  showTitle?: boolean;
  children: React.ReactNode;
}) {
  const t = useTranslations("dashboard.me");
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  const current =
    active ??
    DRIVER_SETTINGS.find((s) => s.section === (section && PROFILE_SECTIONS.includes(section) ? section : "personal"))!.key;

  return (
    <div className="min-w-0 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-6 items-start">
      <div className="min-w-0">
        {showTitle && (
          <div className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight">{t(current)}</h1>
            <p className="text-sm text-neutral-500 mt-1">{t(`${current}Desc`)}</p>
          </div>
        )}
        {children}
      </div>

      <nav aria-label={t("title")} className="hidden lg:block sticky top-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2 px-1">{t("title")}</p>
        <ul className="bg-white border border-neutral-200 rounded-2xl p-2">
          {DRIVER_SETTINGS.map((s) => {
            const on = s.key === current;
            return (
              <li key={s.key}>
                <Link
                  href={s.href as "/dashboard"}
                  scroll={false}
                  aria-current={on ? "page" : undefined}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${
                    on ? "bg-neutral-900 text-white font-medium" : "text-neutral-700 hover:bg-neutral-100"
                  }`}
                >
                  <Icon icon={s.icon} className={`text-lg shrink-0 ${on ? "" : "text-neutral-500"}`} />
                  {t(s.key)}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
