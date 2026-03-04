import type { City } from "@/data/cities";
import { getTranslations } from "next-intl/server";

export async function CityStats({ city }: { city: City }) {
  const t = await getTranslations("city");

  return (
    <section className="border-t border-neutral-100 py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="text-center fade-up">
            <p className="text-3xl md:text-4xl font-semibold tracking-tight">{city.driverCount}+</p>
            <p className="text-sm text-neutral-500 font-light mt-1">{t("statsDrivers", { cityName: city.name })}</p>
          </div>
          <div className="text-center fade-up fade-up-delay-1">
            <p className="text-3xl md:text-4xl font-semibold tracking-tight">{city.avgWaitTime}</p>
            <p className="text-sm text-neutral-500 font-light mt-1">{t("statsWaitTime")}</p>
          </div>
          <div className="text-center fade-up fade-up-delay-2">
            <p className="text-3xl md:text-4xl font-semibold tracking-tight">{city.rating}</p>
            <p className="text-sm text-neutral-500 font-light mt-1">{t("statsRating")}</p>
          </div>
          <div className="text-center fade-up fade-up-delay-3">
            <p className="text-3xl md:text-4xl font-semibold tracking-tight">24/7</p>
            <p className="text-sm text-neutral-500 font-light mt-1">{t("statsAvailability")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
