import type { Airport } from "@/data/airports";
import { getTranslations, getLocale } from "next-intl/server";

export async function AirportIntro({ airport }: { airport: Airport }) {
  const t = await getTranslations("airport");
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            {t("introTitle", { airportName: airport.name })}
          </h2>
          <p className="text-base text-neutral-600 font-light leading-relaxed mb-4">
            {airport.i18n[loc].intro}
          </p>
          {airport.i18n[loc].description && (
            <p className="text-base text-neutral-600 font-light leading-relaxed mb-4">
              {airport.i18n[loc].description}
            </p>
          )}
          <p className="text-sm text-neutral-500 font-light">
            {t("introPassengers", { airportName: airport.name, passengers: airport.annualPassengers })}
          </p>
        </div>
      </div>
    </section>
  );
}
