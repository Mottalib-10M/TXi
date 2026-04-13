import { Icon } from "@iconify/react";
import { getTranslations } from "next-intl/server";
import type { Trajet } from "@/data/trajets";

export async function TrajetPricing({ trajet }: { trajet: Trajet }) {
  const t = await getTranslations("trajet");

  const baseMin = parseInt(trajet.priceEstimate.split("—")[0].trim());
  const baseMax = parseInt(trajet.priceEstimate.split("—")[1].trim());
  const nightMin = Math.round(baseMin * 1.15);
  const nightMax = Math.round(baseMax * 1.15);
  const sundayMin = Math.round(baseMin * 1.1);
  const sundayMax = Math.round(baseMax * 1.1);

  const rates = [
    {
      icon: "solar:sun-2-linear",
      label: t("pricingDay"),
      time: t("pricingDayTime"),
      price: trajet.priceEstimate,
    },
    {
      icon: "solar:moon-sleep-linear",
      label: t("pricingNight"),
      time: t("pricingNightTime"),
      price: `${nightMin} — ${nightMax} €`,
    },
    {
      icon: "solar:calendar-linear",
      label: t("pricingSunday"),
      time: t("pricingSundayTime"),
      price: `${sundayMin} — ${sundayMax} €`,
    },
  ];

  return (
    <section className="bg-neutral-50 border-t border-b border-neutral-100 py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
            {t("pricingSubtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {t("pricingTitle", { from: trajet.from, to: trajet.to })}
          </h2>
          <p className="text-sm text-neutral-500 font-light mt-3 max-w-lg mx-auto">
            {t("pricingDescription")}
          </p>
        </div>
        <div className="space-y-3 fade-up">
          {rates.map((rate) => (
            <div
              key={rate.label}
              className="bg-white border border-neutral-200 rounded-xl p-5 flex items-center justify-between card-hover"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-neutral-50 border border-neutral-200 rounded-lg flex items-center justify-center shrink-0">
                  <Icon icon={rate.icon} className="text-neutral-600 text-lg" />
                </div>
                <div>
                  <p className="text-sm font-medium">{rate.label}</p>
                  <p className="text-xs text-neutral-500 font-light">{rate.time}</p>
                </div>
              </div>
              <p className="text-sm font-semibold whitespace-nowrap">{rate.price}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-neutral-400 font-light text-center mt-6">
          {t("pricingDisclaimer")}
        </p>
      </div>
    </section>
  );
}
