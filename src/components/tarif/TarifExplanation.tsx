import { Icon } from "@iconify/react";
import { getTranslations, getLocale } from "next-intl/server";
import type { Tarif } from "@/data/tarifs";

export async function TarifExplanation({ tarif }: { tarif: Tarif }) {
  const t = await getTranslations("tarif");
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";

  const advantages = [
    { icon: "solar:tag-price-linear", title: t("advFixedPrice"), desc: t("advFixedPriceDesc") },
    { icon: "solar:eye-scan-linear", title: t("advTransparent"), desc: t("advTransparentDesc") },
    { icon: "solar:clock-circle-linear", title: t("adv247"), desc: t("adv247Desc") },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
            TaxiNeo
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {t("explanationTitle")}
          </h2>
        </div>

        <div className="fade-up mb-12">
          <p className="text-base text-neutral-600 font-light leading-relaxed">
            {tarif.i18n[loc].description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
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
