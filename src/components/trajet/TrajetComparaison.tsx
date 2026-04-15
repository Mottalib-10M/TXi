import { Icon } from "@iconify/react";
import { getTranslations, getLocale } from "next-intl/server";
import type { Trajet } from "@/data/trajets";

export async function TrajetComparaison({ trajet }: { trajet: Trajet }) {
  const t = await getTranslations("trajet");
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";
  const comparaison = trajet.i18n[loc].comparaisonTransport;

  if (!comparaison) return null;

  return (
    <section className="py-20 md:py-28 bg-neutral-50 border-t border-b border-neutral-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
            {t("comparaisonSubtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {t("comparaisonTitle", { from: trajet.from, to: trajet.to })}
          </h2>
        </div>

        <div className="bg-white border border-neutral-200 rounded-2xl p-8 fade-up">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-center shrink-0">
              <Icon icon="solar:sort-horizontal-linear" className="text-blue-600 text-xl" />
            </div>
            <div>
              <h3 className="text-base font-medium mb-1">{t("comparaisonCardTitle")}</h3>
              <p className="text-xs text-neutral-500 font-light">{t("comparaisonCardSubtitle")}</p>
            </div>
          </div>
          <div className="prose prose-sm prose-neutral max-w-none font-light leading-relaxed text-neutral-600">
            {comparaison.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        {(trajet.prixMin || trajet.prixVan) && (
          <div className="grid md:grid-cols-2 gap-4 mt-4 fade-up">
            {trajet.prixMin && trajet.prixMax && (
              <div className="bg-white border border-neutral-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Icon icon="mdi:car-side" className="text-neutral-500" />
                  <p className="text-sm font-medium">{t("comparaisonBerline")}</p>
                </div>
                <p className="text-2xl font-semibold">{trajet.prixMin} — {trajet.prixMax} €</p>
                <p className="text-xs text-neutral-500 font-light mt-1">{t("comparaisonFixedPrice")}</p>
              </div>
            )}
            {trajet.prixVan && (
              <div className="bg-white border border-neutral-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Icon icon="solar:bus-linear" className="text-neutral-500" />
                  <p className="text-sm font-medium">{t("comparaisonVan")}</p>
                </div>
                <p className="text-2xl font-semibold">{trajet.prixVan} €</p>
                <p className="text-xs text-neutral-500 font-light mt-1">{t("comparaisonVanDesc")}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
