"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
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
  const locale = useLocale();
  const { data: session } = useSession();
  const router = useRouter();
  const [departureId, setDepartureId] = useState("");

  // Propose form state (auth users only)
  const [destinationId, setDestinationId] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [totalSeats, setTotalSeats] = useState(1);
  const [comment, setComment] = useState("");
  const [proposeLoading, setProposeLoading] = useState(false);
  const [proposeResult, setProposeResult] = useState<{ driversNotified: number } | null>(null);
  const [proposeError, setProposeError] = useState("");
  const [proposeOpen, setProposeOpen] = useState(false);

  async function handlePropose(e: FormEvent) {
    e.preventDefault();
    setProposeLoading(true);
    setProposeError("");
    setProposeResult(null);

    try {
      const res = await fetch("/api/shared-routes/propose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          departureLocationId: departureId,
          destinationLocationId: destinationId,
          departureTime,
          totalSeats,
          comment: comment || undefined,
          locale,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Erreur");
      setProposeResult({ driversNotified: json.driversNotified });
    } catch (err) {
      setProposeError(err instanceof Error ? err.message : "Erreur");
    } finally {
      setProposeLoading(false);
    }
  }

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
                {session && departureId && (
                  <div className="mt-5 pt-5 border-t border-neutral-100">
                    <button
                      type="button"
                      onClick={() => setProposeOpen(!proposeOpen)}
                      className="w-full flex items-center justify-between bg-neutral-100 text-neutral-900 rounded-xl px-4 py-3 text-sm font-medium hover:bg-neutral-200 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Icon icon="solar:add-circle-bold" className="text-lg" />
                        {t("proposeRideAuth")}
                      </span>
                      <Icon
                        icon="solar:alt-arrow-down-linear"
                        className={`text-lg transition-transform ${proposeOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {proposeOpen && (proposeResult ? (
                      <div className="mt-3 bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm">
                        <p className="font-medium text-emerald-800">{t("proposeSuccess")}</p>
                        <p className="text-emerald-600 mt-1">
                          {t("proposeSuccessDesc", { count: proposeResult.driversNotified })}
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handlePropose} className="mt-3 space-y-3">
                        <div>
                          <label className="block text-sm text-neutral-500 mb-1">
                            {t("destination")}
                          </label>
                          <select
                            required
                            value={destinationId}
                            onChange={(e) => setDestinationId(e.target.value)}
                            className="w-full border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
                          >
                            <option value="">{t("selectLocation")}</option>
                            {predefinedLocations
                              .filter((l) => l.id !== departureId)
                              .map((l) => (
                                <option key={l.id} value={l.id}>
                                  {l.name}
                                </option>
                              ))}
                          </select>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-sm text-neutral-500 mb-1">
                              {t("proposeDepartureTime")}
                            </label>
                            <input
                              type="datetime-local"
                              required
                              value={departureTime}
                              onChange={(e) => setDepartureTime(e.target.value)}
                              onClick={(e) => (e.target as HTMLInputElement).showPicker()}
                              className="w-full border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 cursor-pointer"
                            />
                          </div>
                          <div>
                            <label className="block text-sm text-neutral-500 mb-1">
                              {t("proposeSeats")}
                            </label>
                            <div className="flex items-center border border-neutral-200 rounded-xl overflow-hidden">
                              <button
                                type="button"
                                onClick={() => setTotalSeats(Math.max(1, totalSeats - 1))}
                                className="px-3 py-2.5 text-lg font-medium hover:bg-neutral-100 transition-colors disabled:opacity-30"
                                disabled={totalSeats <= 1}
                              >
                                &minus;
                              </button>
                              <span className="flex-1 text-center text-sm font-medium">{totalSeats}</span>
                              <button
                                type="button"
                                onClick={() => setTotalSeats(Math.min(4, totalSeats + 1))}
                                className="px-3 py-2.5 text-lg font-medium hover:bg-neutral-100 transition-colors disabled:opacity-30"
                                disabled={totalSeats >= 4}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm text-neutral-500 mb-1">
                            {t("proposeComment")}
                          </label>
                          <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder={t("proposeCommentPlaceholder")}
                            maxLength={500}
                            rows={2}
                            className="w-full border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 resize-none"
                          />
                        </div>
                        {proposeError && (
                          <p className="text-sm text-red-600">{proposeError}</p>
                        )}
                        <button
                          type="submit"
                          disabled={proposeLoading}
                          className="w-full bg-neutral-900 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50"
                        >
                          {proposeLoading ? t("proposeSubmitting") : t("proposeSubmit")}
                        </button>
                      </form>
                    ))}
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
            <SharedRideSearch departureId={departureId} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
