import { Icon } from "@iconify/react";
import { Link } from "@/i18n/navigation";
import { getTranslations, getLocale } from "next-intl/server";
import { guides } from "@/data/guides";

export async function GuideRelated({ currentSlug }: { currentSlug: string }) {
  const t = await getTranslations("guide");
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";

  const others = guides.filter((g) => g.slug !== currentSlug).slice(0, 3);

  return (
    <section className="bg-neutral-50 border-t border-neutral-100 py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 fade-up">
          <h2 className="text-2xl font-semibold tracking-tight">
            {t("relatedTitle")}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {others.map((guide, i) => (
            <Link
              key={guide.slug}
              href={`/guide/${guide.slug}`}
              className={`group bg-white border border-neutral-200 rounded-2xl p-5 hover:border-neutral-400 transition-colors card-hover fade-up fade-up-delay-${i + 1}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon icon={guide.icon} className="text-neutral-500 text-lg" />
                <span className="text-xs text-neutral-400">
                  {t("readingTime", { min: guide.readingTime })}
                </span>
              </div>
              <p className="text-sm font-medium group-hover:text-neutral-900 transition-colors">
                {guide.i18n[loc].heroTitle}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
