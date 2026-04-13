import { Icon } from "@iconify/react";
import { getTranslations, getLocale } from "next-intl/server";
import type { Trajet } from "@/data/trajets";

export async function TrajetConseils({ trajet }: { trajet: Trajet }) {
  const t = await getTranslations("trajet");
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";
  const conseils = trajet.i18n[loc].conseils;

  if (!conseils) return null;

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
            {t("conseilsSubtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {t("conseilsTitle", { from: trajet.from, to: trajet.to })}
          </h2>
        </div>

        <div className="bg-white border border-neutral-200 rounded-2xl p-8 fade-up">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-center shrink-0">
              <Icon icon="solar:lightbulb-linear" className="text-amber-600 text-xl" />
            </div>
            <div>
              <h3 className="text-base font-medium mb-1">{t("conseilsCardTitle")}</h3>
              <p className="text-xs text-neutral-500 font-light">{t("conseilsCardSubtitle", { from: trajet.from, to: trajet.to })}</p>
            </div>
          </div>
          <div className="prose prose-sm prose-neutral max-w-none font-light leading-relaxed text-neutral-600">
            {conseils.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        {trajet.peages && (
          <div className="mt-4 bg-neutral-50 border border-neutral-200 rounded-xl p-5 flex items-center gap-3 fade-up">
            <Icon icon="solar:card-linear" className="text-neutral-500 text-lg shrink-0" />
            <p className="text-sm text-neutral-600 font-light">
              <span className="font-medium">{t("conseilsPeages")}</span> {trajet.peages}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
