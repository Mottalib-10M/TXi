import { Icon } from "@iconify/react";
import type { City } from "@/data/cities";
import { getTranslations } from "next-intl/server";

export async function CityPopularRoutes({ city }: { city: City }) {
  const t = await getTranslations("city");

  if (city.popularRoutes.length === 0) return null;

  return (
    <section className="bg-neutral-50 border-t border-b border-neutral-100 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
            {t("routesSubtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {t("routesTitle", { cityName: city.name })}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {city.popularRoutes.map((route, i) => (
            <div
              key={`${route.from}-${route.to}`}
              className={`bg-white border border-neutral-200 rounded-2xl p-5 card-hover fade-up fade-up-delay-${(i % 3) + 1}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-neutral-50 border border-neutral-200 rounded-lg flex items-center justify-center shrink-0">
                  <Icon icon="solar:routing-2-linear" className="text-neutral-600 text-lg" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-light text-neutral-500">{t("routesFrom")}</p>
                  <p className="text-sm font-medium text-neutral-900 truncate">{route.from}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-neutral-50 border border-neutral-200 rounded-lg flex items-center justify-center shrink-0">
                  <Icon icon="solar:map-point-linear" className="text-neutral-600 text-lg" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-light text-neutral-500">{t("routesTo")}</p>
                  <p className="text-sm font-medium text-neutral-900 truncate">{route.to}</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
                <p className="text-xs text-neutral-400 font-light">{t("routesEstimate")}</p>
                <p className="text-lg font-semibold tracking-tight">{route.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
