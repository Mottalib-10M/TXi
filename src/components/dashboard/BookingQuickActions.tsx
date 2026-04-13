"use client";

import { useState } from "react";
import { useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Icon } from "@iconify/react";
import { trackBookingAction } from "@/lib/analytics";

export function BookingQuickActions({ bookingId }: { bookingId: string }) {
  const t = useTranslations("dashboard");
  const locale = useLocale();
  const router = useRouter();
  const [updating, setUpdating] = useState<string | null>(null);

  async function updateStatus(status: "ACCEPTED" | "REJECTED") {
    const actionMap = { ACCEPTED: "accept", REJECTED: "reject" } as const;
    trackBookingAction({ action: actionMap[status], bookingId });
    setUpdating(status);
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
    <span
      className="flex gap-2 mt-2"
      onClick={(e) => e.preventDefault()}
    >
      <button
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); updateStatus("ACCEPTED"); }}
        disabled={updating !== null}
        className="inline-flex items-center gap-1.5 bg-green-600 text-white hover:bg-green-700 px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors disabled:opacity-50"
      >
        <Icon icon="solar:check-circle-linear" className="text-sm" />
        {updating === "ACCEPTED" ? "..." : t("accept")}
      </button>
      <button
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); updateStatus("REJECTED"); }}
        disabled={updating !== null}
        className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-red-600 transition-colors disabled:opacity-50"
      >
        {updating === "REJECTED" ? "..." : t("reject")}
      </button>
    </span>
  );
}
