import type { City } from "@/data/cities";
import { BookingForm } from "@/components/booking/BookingForm";
import { getTranslations, getLocale } from "next-intl/server";

export async function CityHero({ city }: { city: City }) {
  const t = await getTranslations("city");
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="md:max-w-xl fade-up">
            <div className="inline-flex items-center gap-2 bg-neutral-100 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-xs font-medium text-neutral-600">
                {t("heroAvailable", { cityName: city.name })}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-4">
              {city.i18n[loc].heroTitle}
            </h1>
            <p className="text-base md:text-lg text-neutral-500 mb-8 max-w-md font-light leading-relaxed">
              {city.i18n[loc].heroSubtitle}
            </p>
          </div>
          <div className="fade-up fade-up-delay-1">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
