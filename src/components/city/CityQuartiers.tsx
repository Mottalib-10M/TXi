import type { City } from "@/data/cities";
import { getTranslations } from "next-intl/server";

export async function CityQuartiers({ city }: { city: City }) {
  const t = await getTranslations("city");

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
            {t("quartiersSubtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {t("quartiersTitle", { cityName: city.name })}
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3 fade-up fade-up-delay-1">
          {city.quartiers.map((quartier) => (
            <span
              key={quartier}
              className="inline-flex items-center px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm font-light text-neutral-700 hover:border-neutral-400 transition-colors"
            >
              {quartier}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
