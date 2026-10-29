"use client";

// Fenêtre « Refuser » d'une demande : plutôt que de la laisser filer, le chauffeur
// peut la passer à un collègue. Il reçoit un message à partager (WhatsApp, feuille
// de partage) avec la ville, l'heure et le prix ; le client n'est donné qu'au
// chauffeur validé qui accepte (src/app/api/p2p/accept).
// Rendue dans document.body : sur la page Demandes, la carte de la course est un lien.

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Icon } from "@iconify/react";
import { useLocale, useTranslations } from "next-intl";
import { P2PShareButtons, type P2PShareRide } from "@/components/dashboard/P2PShareButtons";
import { trackBookingAction } from "@/lib/analytics";

type Shared = P2PShareRide & { sharerFirstName: string };

export function RefuseRideDialog({ bookingId, onClose, onDone }: { bookingId: string; onClose: () => void; onDone: () => void }) {
  const t = useTranslations("dashboard.refuse");
  const locale = useLocale();
  const [busy, setBusy] = useState<"share" | "reject" | null>(null);
  const [shared, setShared] = useState<Shared | null>(null);
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  async function refuse(share: boolean) {
    trackBookingAction({ action: "reject", bookingId });
    setBusy(share ? "share" : "reject");
    setError(false);
    try {
      const res = await fetch(`/api/driver/bookings/${bookingId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "REJECTED", locale, share }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error();
      if (share && data.share) setShared(data.share);
      else onDone();
    } catch {
      setError(true);
    } finally {
      setBusy(null);
    }
  }

  // Une fois la course passée, fermer revient à « Terminé » : la liste doit se mettre à jour.
  const close = shared ? onDone : onClose;
  const stop = (e: React.MouseEvent) => e.stopPropagation();

  if (!mounted) return null;
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/30" onClick={(e) => { stop(e); close(); }}>
      <div className="bg-white w-full sm:max-w-md rounded-t-2xl sm:rounded-2xl shadow-xl p-5 sm:p-6 max-h-[90vh] overflow-y-auto" onClick={stop}>
        {shared ? (
          <>
            <h3 className="text-lg font-semibold text-neutral-900">{t("sharedTitle")}</h3>
            <p className="text-sm text-neutral-500 mt-1 mb-4">{t("sharedDesc")}</p>

            <div className="rounded-xl border border-neutral-200 p-4 mb-4 space-y-1.5 text-sm">
              <p className="font-medium text-neutral-900">{shared.departureName} → {shared.arrivalName}</p>
              <p className="text-neutral-500">
                {new Date(shared.requestedDate).toLocaleDateString(locale === "en" ? "en-GB" : "fr-FR", { weekday: "long", day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" })}
                {shared.lockedPrice != null && ` · ${shared.lockedPrice} €`}
              </p>
              <p className="flex items-start gap-1.5 text-xs text-neutral-500 pt-1">
                <Icon icon="solar:lock-keyhole-minimalistic-linear" className="text-sm shrink-0 mt-px" />
                {t("privacy")}
              </p>
            </div>

            <P2PShareButtons ride={shared} driverFirstName={shared.sharerFirstName} />

            <p className="text-xs text-neutral-500 mt-4">{t("referent")}</p>
            <button type="button" onClick={onDone} className="w-full mt-4 py-3 text-sm font-medium text-neutral-700 rounded-xl border border-neutral-200 hover:bg-neutral-50">
              {t("done")}
            </button>
          </>
        ) : (
          <>
            <h3 className="text-lg font-semibold text-neutral-900">{t("title")}</h3>
            <p className="text-sm text-neutral-500 mt-1 mb-4">{t("desc")}</p>

            <button
              type="button"
              onClick={() => refuse(true)}
              disabled={busy !== null}
              className="w-full flex items-start gap-3 text-left rounded-xl bg-neutral-900 text-white p-4 hover:bg-neutral-800 disabled:opacity-60"
            >
              <Icon icon={busy === "share" ? "solar:refresh-circle-linear" : "solar:users-group-rounded-linear"} className={`text-xl shrink-0 mt-0.5 ${busy === "share" ? "animate-spin" : ""}`} />
              <span>
                <span className="block font-semibold">{t("share")}</span>
                <span className="block text-xs text-neutral-300 mt-0.5">{t("shareDesc")}</span>
              </span>
            </button>

            <button
              type="button"
              onClick={() => refuse(false)}
              disabled={busy !== null}
              className="w-full flex items-start gap-3 text-left rounded-xl border border-neutral-200 p-4 mt-2 hover:bg-neutral-50 disabled:opacity-60"
            >
              <Icon icon={busy === "reject" ? "solar:refresh-circle-linear" : "solar:close-circle-linear"} className={`text-xl shrink-0 mt-0.5 text-neutral-500 ${busy === "reject" ? "animate-spin" : ""}`} />
              <span>
                <span className="block font-medium text-neutral-900">{t("reject")}</span>
                <span className="block text-xs text-neutral-500 mt-0.5">{t("rejectDesc")}</span>
              </span>
            </button>

            {error && <p className="text-sm text-red-600 mt-3">{t("error")}</p>}

            <button type="button" onClick={onClose} className="w-full mt-3 py-2.5 text-sm text-neutral-500 hover:text-neutral-900">
              {t("cancel")}
            </button>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}
