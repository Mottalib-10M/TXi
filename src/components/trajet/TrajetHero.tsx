import type { Trajet } from "@/data/trajets";
import { BookingForm } from "@/components/booking/BookingForm";
import { getTranslations, getLocale } from "next-intl/server";
import { LigneMaj } from "@/components/shared/LigneMaj";
import { TexteReplie } from "@/components/shared/TexteReplie";
import { resumeTrajet } from "@/lib/resume-citable";
import { prixAffiche } from "@/lib/trajet-en";

export async function TrajetHero({ trajet }: { trajet: Trajet }) {
  const t = await getTranslations("trajet");
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";

  return (
    <section className="pt-4 pb-12 md:pt-8 md:pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-2 md:gap-y-0 items-start">
          <div className="max-w-xl fade-up md:col-start-1 md:row-start-1">
            <div className="inline-flex items-center gap-2 bg-neutral-100 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-xs font-medium text-neutral-600">
                {t("heroBadge", { distance: trajet.distanceKm, duration: trajet.durationMin })}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-4">
              {trajet.i18n[loc].heroTitle}
            </h1>
            <p className="text-base md:text-lg text-neutral-500 mb-6 max-w-md font-light leading-relaxed">
              {trajet.i18n[loc].heroSubtitle}
            </p>
          </div>
          <div className="fade-up fade-up-delay-1 md:col-start-2 md:row-start-1 md:row-span-2">
            <BookingForm />
          </div>
          {/* RECETTE §5 (2026-10-11) : titre et réponse courte, puis le simulateur ;
              la date et le paragraphe citable passent juste en dessous. */}
          <div className="max-w-xl mt-8 md:mt-0 md:col-start-1 md:row-start-2">
            {/* §8.4 et §5 : la date de mise à jour, juste sous le simulateur. */}
            <LigneMaj />
            {/* §21 : un paragraphe citable d'au moins 120 mots, dans le haut
                de la page, construit à partir des données de la page. */}
            <TexteReplie texte={resumeTrajet(trajet, loc)} className="mb-6" />
            <div className="flex flex-wrap gap-4 text-xs text-neutral-500 font-light mb-2">
              <span className="bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1">
                {t("heroDistance", { km: trajet.distanceKm })}
              </span>
              <span className="bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1">
                {t("heroDuration", { min: trajet.durationMin })}
              </span>
              <span className="bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1">
                {t("heroPrice", { price: prixAffiche(trajet.priceEstimate, loc) })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
