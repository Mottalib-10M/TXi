import type { AssistancePricingTier } from "@/data/assistance-cities";
import { getTranslations, getLocale } from "next-intl/server";

export async function AdPricing({ pricing, cityName }: { pricing: AssistancePricingTier[]; cityName: string }) {
  const t = await getTranslations("ad");
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";
  return (
    <section className="py-20 md:py-28 bg-neutral-50 border-t border-b border-neutral-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">{t("pricingSubtitle")}</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{t("pricingTitle", { cityName })}</h2>
        </div>
        <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden fade-up">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <th className="text-left px-6 py-4 font-medium text-neutral-600">{t("pricingType")}</th>
                  <th className="text-center px-4 py-4 font-medium text-neutral-600">{t("pricingBerline")}</th>
                  <th className="text-center px-4 py-4 font-medium text-neutral-600">{t("pricingVan")}</th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((tier, i) => (
                  <tr key={tier.type} className={i < pricing.length - 1 ? "border-b border-neutral-100" : ""}>
                    <td className="px-6 py-4 font-medium">{loc === "fr" ? tier.labelFr : tier.labelEn}</td>
                    <td className="text-center px-4 py-4 text-neutral-600 font-light">{tier.berline}</td>
                    <td className="text-center px-4 py-4 text-neutral-600 font-light">{tier.van}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-xs text-neutral-400 font-light mt-4 text-center">{t("pricingNote")}</p>
      </div>
    </section>
  );
}
