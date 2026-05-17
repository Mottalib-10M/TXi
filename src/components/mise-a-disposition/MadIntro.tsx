import type { City } from "@/data/cities";
import type { MadGeneratedContent } from "@/data/mad-content-templates";
import { getTranslations, getLocale } from "next-intl/server";

export async function MadIntro({ city, content }: { city: City; content: MadGeneratedContent }) {
  const t = await getTranslations("mad");
  const locale = await getLocale();
  const pop = city.population.toLocaleString(locale === "en" ? "en-US" : "fr-FR");
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6 fade-up">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8 text-center">
          {t("introTitle", { cityName: city.name })}
        </h2>
        <div className="prose prose-neutral max-w-none font-light leading-relaxed text-neutral-600 space-y-4">
          {content.introBody.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-8 prose prose-neutral max-w-none font-light leading-relaxed text-neutral-600 space-y-4">
          {content.introComplement.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <p className="text-sm text-neutral-400 font-light mt-6 text-center">
          {t("introPopulation", { cityName: city.name, population: pop })}
        </p>
      </div>
    </section>
  );
}
