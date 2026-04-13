import { Icon } from "@iconify/react";
import { getTranslations, getLocale } from "next-intl/server";
import type { Trajet } from "@/data/trajets";

export async function TrajetRoute({ trajet }: { trajet: Trajet }) {
  const t = await getTranslations("trajet");
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
            {t("routeSubtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {t("routeTitle", { from: trajet.from, to: trajet.to })}
          </h2>
        </div>

        <div className="fade-up">
          <p className="text-base text-neutral-600 font-light leading-relaxed mb-8">
            {trajet.i18n[loc].routeDescription}
          </p>

          {trajet.highlights.length > 0 && (
            <div className="bg-white border border-neutral-200 rounded-2xl p-6">
              <h3 className="text-sm font-medium mb-4 flex items-center gap-2">
                <Icon icon="solar:map-point-wave-linear" className="text-neutral-500" />
                {t("routeHighlights")}
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {trajet.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-sm text-neutral-600 font-light">
                    <Icon icon="solar:check-circle-linear" className="text-green-500 shrink-0" />
                    {h}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 fade-up">
          <p className="text-base text-neutral-600 font-light leading-relaxed">
            {trajet.i18n[loc].description}
          </p>
        </div>
      </div>
    </section>
  );
}
