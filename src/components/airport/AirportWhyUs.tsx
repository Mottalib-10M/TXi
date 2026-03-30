import { Icon } from "@iconify/react";
import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";
import type { Airport } from "@/data/airports";

const ICONS = [
  "solar:eye-scan-linear",
  "solar:tag-price-linear",
  "solar:user-id-linear",
];

export async function AirportWhyUs({ airport }: { airport: Airport }) {
  const t = await getTranslations("airport");
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";
  const whyUs = airport.i18n[loc].whyUs;

  const advantages = whyUs.length === 3
    ? whyUs.map((w, i) => ({ icon: ICONS[i], title: w.title, desc: w.desc }))
    : [
        {
          icon: ICONS[0],
          title: t("whyUs.flightTrackingTitle"),
          desc: t("whyUs.flightTrackingDesc", { name: airport.name }),
        },
        {
          icon: ICONS[1],
          title: t("whyUs.guaranteedRatesTitle"),
          desc: t("whyUs.guaranteedRatesDesc", { name: airport.name }),
        },
        {
          icon: ICONS[2],
          title: t("whyUs.personalWelcomeTitle"),
          desc: t("whyUs.personalWelcomeDesc", { name: airport.name }),
        },
      ];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
            {t("whyUs.subtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {t("whyUs.title", { name: airport.name })}
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
