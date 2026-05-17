import type { ArHowItWorksStep } from "@/data/autoroute-content-templates";
import { getTranslations } from "next-intl/server";

export async function ArHowItWorks({ steps }: { steps: ArHowItWorksStep[] }) {
  const t = await getTranslations("ar");
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">{t("howItWorksSubtitle")}</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{t("howItWorksTitle")}</h2>
        </div>
        <div className="space-y-8 fade-up">
          {steps.map((s, i) => (
            <div key={i} className="flex gap-6 items-start">
              <div className="w-10 h-10 bg-neutral-950 rounded-full flex items-center justify-center shrink-0">
                <span className="text-white text-sm font-semibold">{s.step}</span>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-lg font-semibold tracking-tight mb-2">{s.title}</h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
