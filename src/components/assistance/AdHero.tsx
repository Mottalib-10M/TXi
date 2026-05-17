import type { City } from "@/data/cities";
import type { AdGeneratedContent } from "@/data/assistance-content-templates";
import { AdDevisForm } from "./AdDevisForm";
import { getTranslations } from "next-intl/server";

export async function AdHero({ city, content }: { city: City; content: AdGeneratedContent }) {
  const t = await getTranslations("ad");
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="md:max-w-xl fade-up">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-orange-700">
                {t("heroBadge", { cityName: city.name })}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-4">
              {content.heroTitle}
            </h1>
            <p className="text-base md:text-lg text-neutral-500 mb-8 max-w-md font-light leading-relaxed">
              {content.heroSubtitle}
            </p>
          </div>
          <div className="fade-up fade-up-delay-1">
            <AdDevisForm cityName={city.name} />
          </div>
        </div>
      </div>
    </section>
  );
}
