import { Icon } from "@iconify/react";
import { getTranslations } from "next-intl/server";
import type { Departement } from "@/data/departements";

export async function DepartementVilles({ dept }: { dept: Departement }) {
  const t = await getTranslations("departement");

  return (
    <section className="bg-neutral-50 border-t border-b border-neutral-100 py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
            {t("villesSubtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {t("villesTitle", { name: dept.name })}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 fade-up">
          {dept.mainCities.map((city, i) => (
            <div
              key={city}
              className={`flex items-center gap-3 bg-white border border-neutral-200 rounded-2xl p-5 card-hover fade-up fade-up-delay-${(i % 3) + 1}`}
            >
              <Icon icon="solar:map-point-linear" className="text-neutral-400 text-lg shrink-0" />
              <p className="text-sm font-medium">{city}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
