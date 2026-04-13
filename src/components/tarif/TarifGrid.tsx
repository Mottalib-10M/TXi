import { Icon } from "@iconify/react";
import { getTranslations, getLocale } from "next-intl/server";
import type { Tarif } from "@/data/tarifs";

export async function TarifGrid({ tarif }: { tarif: Tarif }) {
  const t = await getTranslations("tarif");
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";
  const grid = tarif.i18n[loc].grid;

  return (
    <section className="bg-neutral-50 border-t border-b border-neutral-100 py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
            {t("gridSubtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {t("gridTitle")}
          </h2>
        </div>

        <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden fade-up">
          <div className="grid grid-cols-3 bg-neutral-50 border-b border-neutral-200 px-5 py-3">
            <p className="text-xs font-medium text-neutral-500 uppercase">{t("gridRoute")}</p>
            <p className="text-xs font-medium text-neutral-500 uppercase text-center">{t("gridDay")}</p>
            <p className="text-xs font-medium text-neutral-500 uppercase text-right">{t("gridNight")}</p>
          </div>
          {grid.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 px-5 py-4 items-center ${i < grid.length - 1 ? "border-b border-neutral-100" : ""}`}
            >
              <div className="flex items-center gap-2">
                <Icon icon="solar:map-point-linear" className="text-neutral-400 text-sm shrink-0" />
                <p className="text-sm font-medium">{row.label}</p>
              </div>
              <p className="text-sm text-neutral-600 text-center">{row.priceDay}</p>
              <p className="text-sm font-semibold text-right">{row.priceNight}</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-neutral-400 font-light text-center mt-6">
          {t("gridDisclaimer")}
        </p>
      </div>
    </section>
  );
}
