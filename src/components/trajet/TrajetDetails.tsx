import { Icon } from "@iconify/react";
import { getTranslations } from "next-intl/server";
import type { Trajet } from "@/data/trajets";

export async function TrajetDetails({ trajet }: { trajet: Trajet }) {
  const t = await getTranslations("trajet");

  const details = [
    {
      icon: "solar:route-linear",
      label: t("detailsDistance"),
      value: `${trajet.distanceKm} km`,
    },
    {
      icon: "solar:clock-circle-linear",
      label: t("detailsDuration"),
      value: trajet.durationMin < 60
        ? `${trajet.durationMin} min`
        : `${Math.floor(trajet.durationMin / 60)}h${trajet.durationMin % 60 > 0 ? `${String(trajet.durationMin % 60).padStart(2, "0")}` : ""}`,
    },
    {
      icon: "solar:tag-price-linear",
      label: t("detailsPrice"),
      value: trajet.priceEstimate,
    },
    {
      icon: "solar:clock-square-linear",
      label: t("detailsAvailability"),
      value: t("detailsAvailabilityValue"),
    },
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 fade-up">
          {details.map((d) => (
            <div
              key={d.label}
              className="bg-white border border-neutral-200 rounded-2xl p-5 text-center card-hover"
            >
              <div className="w-10 h-10 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon icon={d.icon} className="text-neutral-700 text-xl" />
              </div>
              <p className="text-xs text-neutral-500 font-light mb-1">{d.label}</p>
              <p className="text-sm font-semibold">{d.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
