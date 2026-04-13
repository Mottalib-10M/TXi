import { getLocale } from "next-intl/server";
import type { Guide } from "@/data/guides";

export async function GuideContent({ guide }: { guide: Guide }) {
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";

  return (
    <section className="pb-16 md:pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="space-y-12">
          {guide.i18n[loc].sections.map((section, i) => (
            <div key={i} className={`fade-up fade-up-delay-${(i % 3) + 1}`}>
              <h2 className="text-2xl font-semibold tracking-tight mb-4">
                {section.title}
              </h2>
              <p className="text-base text-neutral-600 font-light leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
