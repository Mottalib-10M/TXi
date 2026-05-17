import { Icon } from "@iconify/react";
import type { TmAdvantage } from "@/data/taxi-medical-content-templates";
import { getTranslations } from "next-intl/server";

export async function TmAdvantages({ advantages }: { advantages: TmAdvantage[] }) {
  const t = await getTranslations("tm");
  return (
    <section className="py-20 md:py-28 bg-neutral-50 border-t border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">{t("advantagesSubtitle")}</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{t("advantagesTitle")}</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, i) => (
            <div key={i} className={`bg-white border border-neutral-200 rounded-2xl p-6 card-hover fade-up fade-up-delay-${(i % 3) + 1}`}>
              <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center mb-4">
                <Icon icon={adv.icon} className="text-neutral-700 text-xl" />
              </div>
              <h3 className="text-base font-semibold tracking-tight mb-1">{adv.title}</h3>
              <p className="text-xs text-neutral-500 font-medium mb-3">{adv.shortDesc}</p>
              <p className="text-sm text-neutral-600 font-light leading-relaxed">{adv.longDesc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
