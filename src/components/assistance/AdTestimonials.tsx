import { Icon } from "@iconify/react";
import type { AdTestimonial } from "@/data/assistance-content-templates";
import { getTranslations } from "next-intl/server";

export async function AdTestimonials({ testimonials, cityName }: { testimonials: AdTestimonial[]; cityName: string }) {
  const t = await getTranslations("ad");
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">{t("testimonialsSubtitle")}</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{t("testimonialsTitle", { cityName })}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, i) => (
            <div key={i} className={`bg-white border border-neutral-200 rounded-2xl p-6 card-hover fade-up fade-up-delay-${(i % 3) + 1}`}>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Icon key={j} icon="solar:star-bold" className="text-amber-500" />
                ))}
              </div>
              <p className="text-sm text-neutral-600 font-light leading-relaxed mb-6">&quot;{item.text}&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-neutral-200 flex items-center justify-center text-xs font-semibold text-neutral-600">{item.initials}</div>
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-neutral-500 font-light">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
