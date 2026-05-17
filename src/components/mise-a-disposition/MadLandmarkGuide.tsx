import type { MadGeneratedContent } from "@/data/mad-content-templates";
import { getTranslations } from "next-intl/server";

export async function MadLandmarkGuide({ content, cityName }: { content: MadGeneratedContent; cityName: string }) {
  const t = await getTranslations("mad");
  const paragraphs = content.landmarkGuide.split("\n\n").filter(Boolean);
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">{t("landmarkSubtitle")}</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{t("landmarkTitle", { cityName })}</h2>
        </div>
        <div className="space-y-6 fade-up">
          {paragraphs.map((p, i) => {
            const boldMatch = p.match(/^\*\*(.+?)\*\*\s*—?\s*(.*)/s);
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
