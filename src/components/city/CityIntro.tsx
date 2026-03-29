import type { City } from "@/data/cities";
import { getTranslations, getLocale } from "next-intl/server";

export async function CityIntro({ city }: { city: City }) {
  const t = await getTranslations("city");
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";

  const formattedPopulation = city.population.toLocaleString(loc === "fr" ? "fr-FR" : "en-US");

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            {t("introTitle", { cityName: city.name })}
          </h2>
          <p className="text-base text-neutral-600 font-light leading-relaxed mb-4">
            {city.i18n[loc].intro}
          </p>
          {city.i18n[loc].description && (
            <p className="text-base text-neutral-600 font-light leading-relaxed mb-4">
              {city.i18n[loc].description}
            </p>
          )}
          <p className="text-sm text-neutral-500 font-light">
            {t("introPopulation", { cityName: city.name, population: formattedPopulation })}
          </p>
        </div>
      </div>
    </section>
  );
}
