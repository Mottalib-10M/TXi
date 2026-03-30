import { Icon } from "@iconify/react";
import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";
import type { City } from "@/data/cities";

const ICONS = [
  "solar:shield-check-linear",
  "solar:tag-price-linear",
  "solar:routing-linear",
];

export async function CityWhyUs({ city }: { city: City }) {
  const t = await getTranslations("city");
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";
  const whyUs = city.i18n[loc].whyUs;

  // Fallback to i18n if no unique content
  const advantages = whyUs.length === 3
    ? whyUs.map((w, i) => ({ icon: ICONS[i], title: w.title, desc: w.desc }))
    : [
        {
          icon: ICONS[0],
          title: t("whyUsAdvantage1Title"),
          desc: t("whyUsAdvantage1Desc", { cityName: city.name }),
        },
        {
          icon: ICONS[1],
          title: t("whyUsAdvantage2Title"),
          desc: t("whyUsAdvantage2Desc", { cityName: city.name }),
        },
        {
          icon: ICONS[2],
          title: t("whyUsAdvantage3Title"),
          desc: t("whyUsAdvantage3Desc", { cityName: city.name }),
        },
      ];

  return (
    <section className="bg-neutral-50 border-t border-b border-neutral-100 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
            {t("whyUsSubtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {t("whyUsTitle", { cityName: city.name })}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((adv, i) => (
            <div
              key={adv.title}
              className={`bg-white border border-neutral-200 rounded-2xl p-6 card-hover fade-up fade-up-delay-${i + 1}`}
            >
              <div className="w-12 h-12 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-center mb-5">
                <Icon icon={adv.icon} className="text-neutral-900 text-2xl" />
              </div>
              <h3 className="text-lg font-medium tracking-tight mb-2">{adv.title}</h3>
              <p className="text-sm text-neutral-500 font-light leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
