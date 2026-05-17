import type { MadGeneratedContent } from "@/data/mad-content-templates";
import { getTranslations } from "next-intl/server";

export async function MadCityGuide({ content, cityName }: { content: MadGeneratedContent; cityName: string }) {
  const t = await getTranslations("mad");
  const paragraphs = content.cityGuideBody.split("\n\n").filter(Boolean);
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">{t("cityGuideSubtitle")}</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{t("cityGuideTitle", { cityName })}</h2>
        </div>
        <div className="prose prose-neutral max-w-none font-light leading-relaxed text-neutral-600 space-y-4 fade-up">
          {paragraphs.map((p, i) => {
            const boldMatch = p.match(/^\*\*(.+?)\*\*\s*—?\s*(.*)/s);
            if (boldMatch) {
              return (
                <div key={i}>
                  <h3 className="text-lg font-semibold tracking-tight text-neutral-900 mt-8 mb-3">{boldMatch[1]}</h3>
                  <p className="text-sm text-neutral-600 font-light leading-relaxed">{boldMatch[2]}</p>
                </div>
              );
            }
            return <p key={i}>{p}</p>;
          })}
        </div>
      </div>
    </section>
  );
}
