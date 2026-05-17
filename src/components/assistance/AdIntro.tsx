import type { City } from "@/data/cities";
import type { AdGeneratedContent } from "@/data/assistance-content-templates";
import { getTranslations, getLocale } from "next-intl/server";

export async function AdIntro({ city, content }: { city: City; content: AdGeneratedContent }) {
  const t = await getTranslations("ad");
  const locale = await getLocale();
  const pop = city.population.toLocaleString(locale === "en" ? "en-US" : "fr-FR");

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6 fade-up">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8 text-center">
          {t("introTitle", { cityName: city.name })}
        </h2>
        <p className="text-sm text-neutral-500 font-light text-center mb-8">
          {t("introPopulation", { cityName: city.name, population: pop })}
        </p>
        <div className="prose prose-neutral max-w-none font-light leading-relaxed text-neutral-600 space-y-4">
          {content.introBody.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-12 space-y-4">
          {content.introComplement.split("\n\n").filter(Boolean).map((p, i) => {
            const boldMatch = p.match(/^\*\*(.+?)\*\*\s*—?\s*([\s\S]*)/);
            if (boldMatch) {
              return (
                <div key={i} className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6">
                  <h3 className="text-base font-semibold tracking-tight mb-2">{boldMatch[1]}</h3>
                  <p className="text-sm text-neutral-600 font-light leading-relaxed">{boldMatch[2]}</p>
                </div>
              );
            }
            return <p key={i} className="text-sm text-neutral-600 font-light leading-relaxed">{p}</p>;
          })}
        </div>
      </div>
    </section>
  );
}
