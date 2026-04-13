import { Link } from "@/i18n/navigation";
import { Icon } from "@iconify/react";
import { getTranslations } from "next-intl/server";
import type { Trajet } from "@/data/trajets";
import { getRelatedTrajets } from "@/data/trajets";

export async function TrajetAlternatives({ trajet }: { trajet: Trajet }) {
  const t = await getTranslations("trajet");
  const related = getRelatedTrajets(trajet);

  if (related.length === 0) return null;

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
            {t("alternativesSubtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {t("alternativesTitle")}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 fade-up">
          {related.map((r, i) => (
            <Link
              key={r.slug}
              href={`/trajet/${r.slug}`}
              className={`group bg-white border border-neutral-200 rounded-2xl p-5 hover:border-neutral-400 transition-colors card-hover fade-up fade-up-delay-${(i % 3) + 1}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-neutral-50 border border-neutral-200 rounded-lg flex items-center justify-center">
                    <Icon icon="solar:route-linear" className="text-neutral-600 text-sm" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{r.from} → {r.to}</p>
                  </div>
                </div>
                <Icon
                  icon="solar:arrow-right-linear"
                  className="text-neutral-400 group-hover:text-neutral-900 transition-colors"
                />
              </div>
              <div className="flex items-center gap-3 text-xs text-neutral-500 font-light">
                <span>{r.distanceKm} km</span>
                <span>·</span>
                <span>{r.durationMin} min</span>
                <span>·</span>
                <span className="font-medium text-neutral-900">{r.priceEstimate}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
