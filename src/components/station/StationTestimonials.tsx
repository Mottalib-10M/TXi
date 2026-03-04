import { Icon } from "@iconify/react";
import type { Station } from "@/data/stations";
import { getTranslations, getLocale } from "next-intl/server";

export async function StationTestimonials({ station }: { station: Station }) {
  const t = await getTranslations("station");
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";

  return (
    <section className="bg-neutral-50 border-t border-b border-neutral-100 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
            {t("testimonialsSubtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {t("testimonialsTitle", { name: station.name })}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {station.i18n[loc].testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-white border border-neutral-200 rounded-2xl p-6 card-hover fade-up fade-up-delay-${i + 1}`}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Icon key={j} icon="solar:star-bold" className="text-amber-500" />
                ))}
              </div>
              <p className="text-sm text-neutral-600 font-light leading-relaxed mb-6">
                &quot;{t.text}&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-neutral-200 flex items-center justify-center text-xs font-semibold text-neutral-600">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-neutral-500 font-light">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
