import { Icon } from "@iconify/react";
import { getTranslations } from "next-intl/server";
import type { Airport } from "@/data/airports";

export async function AirportPricing({ airport }: { airport: Airport }) {
  const t = await getTranslations("airport");

  return (
    <section className="bg-neutral-50 border-t border-b border-neutral-100 py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
            {t("pricing.flatRates")}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {t("pricing.title", { name: airport.name })}
          </h2>
          <p className="text-sm text-neutral-500 font-light mt-3 max-w-lg mx-auto">
            {t("pricing.subtitle")}
          </p>
        </div>
        <div className="space-y-3 fade-up">
          {airport.destinations.map((dest) => (
            <div
              key={dest.name}
              className="bg-white border border-neutral-200 rounded-xl p-5 flex items-center justify-between card-hover"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-neutral-50 border border-neutral-200 rounded-lg flex items-center justify-center shrink-0">
                  <Icon icon="solar:map-point-linear" className="text-neutral-600 text-lg" />
                </div>
                <div>
                  <p className="text-sm font-medium">{dest.name}</p>
                  <p className="text-xs text-neutral-500 font-light">{dest.time}</p>
                </div>
              </div>
              <p className="text-sm font-semibold whitespace-nowrap">{dest.price}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-neutral-400 font-light text-center mt-6">
          {t("pricing.disclaimer")}
        </p>
      </div>
    </section>
  );
}
