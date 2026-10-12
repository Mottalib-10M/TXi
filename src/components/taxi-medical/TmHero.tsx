import type { City } from "@/data/cities";
import type { TmGeneratedContent } from "@/data/taxi-medical-content-templates";
import { TmDevisForm } from "./TmDevisForm";
import { getTranslations } from "next-intl/server";
import { LigneMaj } from "@/components/shared/LigneMaj";

export async function TmHero({ city, content }: { city: City; content: TmGeneratedContent }) {
  const t = await getTranslations("tm");
  return (
    <section className="pt-4 pb-12 md:pt-8 md:pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-2 md:gap-y-0 items-start">
          <div className="md:max-w-xl fade-up md:col-start-1 md:row-start-1">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-xs font-medium text-green-700">
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
          <div className="fade-up fade-up-delay-1 md:col-start-2 md:row-start-1 md:row-span-2">
            <TmDevisForm cityName={city.name} />
          </div>
          {/* RECETTE §5 (2026-10-11) : titre et réponse courte, puis le formulaire ;
              §8.4 : la date de mise à jour passe juste en dessous. */}
          <div className="md:max-w-xl mt-6 md:mt-0 md:col-start-1 md:row-start-2">
            <LigneMaj />
          </div>
        </div>
      </div>
    </section>
  );
}
