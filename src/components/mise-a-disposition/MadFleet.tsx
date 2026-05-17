import { Icon } from "@iconify/react";
import { getTranslations } from "next-intl/server";

export async function MadFleet() {
  const t = await getTranslations("mad");
  const vehicles = [
    { icon: "mdi:car-side", name: t("fleetSedan"), capacity: t("fleetSedanCapacity"), desc: t("fleetSedanDesc") },
    { icon: "mdi:car-estate", name: t("fleetSUV"), capacity: t("fleetSUVCapacity"), desc: t("fleetSUVDesc") },
    { icon: "mdi:van-utility", name: t("fleetVan"), capacity: t("fleetVanCapacity"), desc: t("fleetVanDesc") },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">{t("fleetSubtitle")}</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{t("fleetTitle")}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {vehicles.map((v, i) => (
            <div key={i} className={`bg-white border border-neutral-200 rounded-2xl p-6 text-center card-hover fade-up fade-up-delay-${i + 1}`}>
              <div className="w-14 h-14 bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon icon={v.icon} className="text-neutral-700 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight mb-1">{v.name}</h3>
              <p className="text-sm text-neutral-500 font-light mb-3">{v.capacity}</p>
              <p className="text-sm text-neutral-600 font-light leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
