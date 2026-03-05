"use client";

import { useTranslations } from "next-intl";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SharedRideSearch } from "@/components/shared-rides/SharedRideSearch";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

export default function CovoituragePage() {
  const t = useTranslations("sharedRides");

  return (
    <>
      <Navbar />
      <ScrollAnimation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-3xl mx-auto text-center fade-up">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
              {t("heroTitle")}
              <br />
              <span className="text-neutral-400">{t("heroTitle2")}</span>
            </h1>
            <p className="mt-4 text-neutral-500 text-lg font-light max-w-xl mx-auto">
              {t("heroSubtitle")}
            </p>
          </div>
        </section>

        {/* Search */}
        <section className="pb-24 px-6">
          <div className="max-w-3xl mx-auto fade-up">
            <SharedRideSearch />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
