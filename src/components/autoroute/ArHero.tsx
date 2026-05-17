import type { AutorouteData } from "@/data/autoroutes";
import type { ArGeneratedContent } from "@/data/autoroute-content-templates";
import { ArDevisForm } from "./ArDevisForm";
import { getTranslations } from "next-intl/server";

export async function ArHero({ autoroute, content }: { autoroute: AutorouteData; content: ArGeneratedContent }) {
  const t = await getTranslations("ar");
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="md:max-w-xl fade-up">
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-red-700">
                {t("heroBadge", { autorouteName: autoroute.name })}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-4">
              {content.heroTitle}
            </h1>
            <p className="text-base md:text-lg text-neutral-500 mb-8 max-w-md font-light leading-relaxed">
              {content.heroSubtitle}
            </p>
          </div>
          <div className="fade-up fade-up-delay-1">
            <ArDevisForm autorouteName={autoroute.name} />
          </div>
        </div>
      </div>
    </section>
  );
}
