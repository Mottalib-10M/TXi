"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SharedRideSearch } from "@/components/shared-rides/SharedRideSearch";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { CoverageMap } from "@/components/shared-rides/CoverageMap";
import { predefinedLocations } from "@/data/predefined-locations";

export default function SharedTaxiPage() {
  const t = useTranslations("sharedRides");
  const { data: session } = useSession();
  const router = useRouter();
  const [departureId, setDepartureId] = useState("");

  return (
    <>
      <Navbar />
      <ScrollAnimation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="pt-24 pb-8 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-end fade-up">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                {t("heroTitle")}
                <br />
                <span className="text-neutral-400">{t("heroTitle2")}</span>
              </h1>
              <p className="mt-4 text-neutral-500 text-lg font-light max-w-xl">
                {t("heroSubtitle")}
              </p>
              {/* Search form card */}
              <div className="mt-8 bg-white border border-neutral-200 rounded-2xl p-6">
                <h3 className="text-lg font-medium mb-4">{t("searchTitle")}</h3>
                <div>
                  <label className="block text-sm text-neutral-500 mb-1">
                    {t("departure")}
                  </label>
                  <select
                    value={departureId}
                    onChange={(e) => setDepartureId(e.target.value)}
                    className="w-full border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  >
                    <option value="">{t("selectLocation")}</option>
                    {predefinedLocations.map((l) => (
                      <option key={l.id} value={l.id}>
                        {l.name}
                      </option>
                    ))}
                  </select>
                </div>
                {!session && (
                  <div className="mt-5 pt-5 border-t border-neutral-100">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-sm text-neutral-500">
                        <Icon icon="solar:add-circle-linear" className="text-lg flex-shrink-0" />
                        <span>{t("loginRequired")}</span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => router.push("/inscription?type=particulier")}
                          className="bg-neutral-900 text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors whitespace-nowrap"
                        >
                          {t("createAccount")}
                        </button>
                        <button
                          onClick={() => router.push("/connexion")}
                          className="px-5 py-2 rounded-xl text-sm font-medium border border-neutral-200 hover:bg-neutral-50 transition-colors whitespace-nowrap"
                        >
                          {t("login")}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <CoverageMap onLocationClick={(id) => setDepartureId(id)} />
          </div>
        </section>

        {/* Calendar + Results — full width */}
        <section className="pb-24 px-6">
          <div className="max-w-6xl mx-auto fade-up">
            <SharedRideSearch departureId={departureId} onDepartureIdChange={setDepartureId} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
