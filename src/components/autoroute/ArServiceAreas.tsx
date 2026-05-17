import { Icon } from "@iconify/react";
import type { AutorouteData } from "@/data/autoroutes";
import { getTranslations } from "next-intl/server";

const serviceIcons: Record<string, string> = {
  fuel: "solar:gas-station-linear",
  restaurant: "solar:chef-hat-linear",
  hotel: "solar:bed-linear",
  repair: "solar:wrench-linear",
};

export async function ArServiceAreas({ autoroute }: { autoroute: AutorouteData }) {
  const t = await getTranslations("ar");
  return (
    <section className="py-20 md:py-28 bg-neutral-50 border-t border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">{t("areasSubtitle")}</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{t("areasTitle", { autorouteName: autoroute.name })}</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {autoroute.serviceAreas.map((area, i) => (
            <div key={i} className={`bg-white border border-neutral-200 rounded-2xl p-6 card-hover fade-up fade-up-delay-${(i % 3) + 1}`}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-semibold tracking-tight">{area.name}</h3>
                <span className="text-xs text-neutral-500 font-light">km {area.km}</span>
              </div>
              <p className="text-xs text-neutral-500 font-light mb-4">{t("areaDirection")}: {area.direction}</p>
              <div className="flex flex-wrap gap-2">
                {area.services.map((service) => (
                  <span key={service} className="inline-flex items-center gap-1.5 bg-neutral-50 border border-neutral-100 rounded-lg px-2.5 py-1">
                    <Icon icon={serviceIcons[service] || "solar:info-circle-linear"} className="text-neutral-500 text-sm" />
                    <span className="text-xs text-neutral-600 font-light capitalize">{service}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
