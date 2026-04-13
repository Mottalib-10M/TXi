import { Icon } from "@iconify/react";
import { getTranslations } from "next-intl/server";

const serviceIcons = [
  "mdi:train",
  "solar:square-arrow-right-linear",
  "solar:users-group-rounded-linear",
  "solar:star-linear",
  "solar:clock-circle-linear",
  "solar:health-linear",
];

export async function StationServices({ stationName }: { stationName: string }) {
  const t = await getTranslations("station");

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
            {t("servicesSubtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {t("servicesTitle", { name: stationName })}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {serviceIcons.map((icon, i) => (
            <div
              key={i}
              className={`bg-white border border-neutral-200 rounded-2xl p-6 card-hover fade-up fade-up-delay-${(i % 3) + 1}`}
            >
              <div className="w-12 h-12 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-center mb-5">
                <Icon icon={icon} className="text-neutral-900 text-2xl" />
              </div>
              <h3 className="text-lg font-medium tracking-tight mb-2">
                {t(`service${i + 1}Title`)}
              </h3>
              <p className="text-sm text-neutral-500 font-light leading-relaxed">
                {t(`service${i + 1}Desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
