import { Icon } from "@iconify/react";
import { getTranslations, getLocale } from "next-intl/server";
import type { Guide } from "@/data/guides";

export async function GuideHero({ guide }: { guide: Guide }) {
  const t = await getTranslations("guide");
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16">
      <div className="max-w-3xl mx-auto px-6 text-center fade-up">
        <div className="inline-flex items-center gap-2 bg-neutral-100 rounded-full px-4 py-1.5 mb-6">
          <Icon icon={guide.icon} className="text-neutral-600 text-sm" />
          <span className="text-xs font-medium text-neutral-600">
            {t("readingTime", { min: guide.readingTime })}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-4">
          {guide.i18n[loc].heroTitle}
        </h1>
        <p className="text-base md:text-lg text-neutral-500 font-light leading-relaxed max-w-2xl mx-auto">
          {guide.i18n[loc].heroSubtitle}
        </p>
      </div>
    </section>
  );
}
