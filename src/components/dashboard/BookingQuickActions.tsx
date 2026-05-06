"use client";

import { useState } from "react";
import { useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Icon } from "@iconify/react";
import { trackBookingAction } from "@/lib/analytics";

type Action = "ACCEPTED" | "REJECTED";

export function BookingQuickActions({ bookingId }: { bookingId: string }) {
  const t = useTranslations("dashboard");
  const locale = useLocale();
  const router = useRouter();
  const [updating, setUpdating] = useState<string | null>(null);
  const [confirm, setConfirm] = useState<Action | null>(null);

  async function updateStatus(status: Action) {
    const actionMap = { ACCEPTED: "accept", REJECTED: "reject" } as const;
    trackBookingAction({ action: actionMap[status], bookingId });
    setUpdating(status);
    setConfirm(null);
    try {
      await fetch(`/api/driver/bookings/${bookingId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status, locale }),
      });
      router.refresh();
    } catch (e) {
      console.error(e);
    } finally {
      setUpdating(null);
    }
  }

  return (
    <>
      <span
        className="flex gap-3 mt-4 pt-3 border-t border-amber-200/60"
        onClick={(e) => e.preventDefault()}
      >
        <button
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setConfirm("ACCEPTED"); }}
          disabled={updating !== null}
          className="inline-flex items-center gap-1.5 bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-lg text-xs font-semibold transition-colors disabled:opacity-50"
        >
          <Icon icon="solar:check-circle-linear" className="text-sm" />
          {updating === "ACCEPTED" ? "..." : t("accept")}
        </button>
        <button
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setConfirm("REJECTED"); }}
          disabled={updating !== null}
          className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-red-600 transition-colors disabled:opacity-50"
        >
          {updating === "REJECTED" ? "..." : t("reject")}
        </button>
      </span>

      {/* Confirmation modal */}
      {confirm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setConfirm(null); }}
        >
          <div
            className="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full mx-4 animate-in fade-in zoom-in-95"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${confirm === "ACCEPTED" ? "bg-green-100" : "bg-red-100"}`}>
                <Icon
                  icon={confirm === "ACCEPTED" ? "solar:check-circle-bold" : "solar:close-circle-bold"}
                  className={`text-xl ${confirm === "ACCEPTED" ? "text-green-600" : "text-red-500"}`}
                />
              </div>
              <h3 className="text-base font-semibold text-neutral-900">
                {confirm === "ACCEPTED" ? t("confirmAcceptTitle") : t("confirmRejectTitle")}
              </h3>
            </div>
            <p className="text-sm text-neutral-500 mb-5 ml-[52px]">
              {confirm === "ACCEPTED" ? t("confirmAcceptMsg") : t("confirmRejectMsg")}
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setConfirm(null); }}
                className="px-4 py-2 text-sm text-neutral-500 hover:text-neutral-900 rounded-lg transition-colors"
              >
                {t("cancel")}
              </button>
              <button
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); updateStatus(confirm); }}
                className={`px-4 py-2 text-sm font-semibold text-white rounded-lg transition-colors ${
                  confirm === "ACCEPTED"
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-red-500 hover:bg-red-600"
                }`}
              >
                {confirm === "ACCEPTED" ? t("confirmAcceptBtn") : t("confirmRejectBtn")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
