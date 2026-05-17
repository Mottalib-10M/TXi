import type { AdGeneratedContent } from "@/data/assistance-content-templates";
import { getTranslations } from "next-intl/server";

export async function AdPracticalInfo({ content, cityName }: { content: AdGeneratedContent; cityName: string }) {
  const t = await getTranslations("ad");
  const paragraphs = content.practicalInfo.split("\n\n").filter(Boolean);
  return (
    <section className="py-20 md:py-28 bg-neutral-50 border-t border-b border-neutral-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">{t("practicalSubtitle")}</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{t("practicalTitle", { cityName })}</h2>
        </div>
        <div className="space-y-4 fade-up">
          {paragraphs.map((p, i) => {
            const boldMatch = p.match(/^\*\*(.+?)\*\*\s*—?\s*([\s\S]*)/);
            if (boldMatch) {
              return (
                <div key={i} className="bg-white border border-neutral-200 rounded-2xl p-6">
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
