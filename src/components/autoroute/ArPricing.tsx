import type { AutorouteData } from "@/data/autoroutes";
import { getTranslations } from "next-intl/server";

export async function ArPricing({ autoroute }: { autoroute: AutorouteData }) {
  const t = await getTranslations("ar");
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">{t("pricingSubtitle")}</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{t("pricingTitle", { autorouteName: autoroute.name })}</h2>
        </div>
        <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden fade-up">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <th className="text-left px-6 py-4 font-medium text-neutral-600">{t("pricingFrom")}</th>
                  <th className="text-left px-4 py-4 font-medium text-neutral-600">{t("pricingTo")}</th>
                  <th className="text-center px-4 py-4 font-medium text-neutral-600">{t("pricingBerline")}</th>
                  <th className="text-center px-4 py-4 font-medium text-neutral-600">{t("pricingVan")}</th>
                </tr>
              </thead>
              <tbody>
                {autoroute.pricing.map((p, i) => (
                  <tr key={i} className={i < autoroute.pricing.length - 1 ? "border-b border-neutral-100" : ""}>
                    <td className="px-6 py-4 font-medium">{p.from}</td>
                    <td className="px-4 py-4 text-neutral-600 font-light">{p.to}</td>
                    <td className="text-center px-4 py-4 text-neutral-600 font-light">{p.berline}</td>
                    <td className="text-center px-4 py-4 text-neutral-600 font-light">{p.van}</td>
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
