import type { AutorouteData } from "@/data/autoroutes";
import { getTranslations } from "next-intl/server";

export async function ArStats({ autoroute }: { autoroute: AutorouteData }) {
  const t = await getTranslations("ar");
  return (
    <section className="border-t border-neutral-100 py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="text-center fade-up">
            <p className="text-3xl md:text-4xl font-semibold tracking-tight">{autoroute.lengthKm} km</p>
            <p className="text-sm text-neutral-500 font-light mt-1">{t("statsLength")}</p>
          </div>
          <div className="text-center fade-up fade-up-delay-1">
            <p className="text-3xl md:text-4xl font-semibold tracking-tight">{autoroute.citiesServed.length}</p>
            <p className="text-sm text-neutral-500 font-light mt-1">{t("statsCities")}</p>
          </div>
          <div className="text-center fade-up fade-up-delay-2">
            <p className="text-3xl md:text-4xl font-semibold tracking-tight">{autoroute.serviceAreas.length}</p>
            <p className="text-sm text-neutral-500 font-light mt-1">{t("statsAreas")}</p>
          </div>
          <div className="text-center fade-up fade-up-delay-3">
            <p className="text-3xl md:text-4xl font-semibold tracking-tight">24/7</p>
            <p className="text-sm text-neutral-500 font-light mt-1">{t("statsAvailability")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
