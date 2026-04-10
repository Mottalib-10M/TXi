"use client";

import { useState } from "react";
import { useRouter } from "@/i18n/navigation";
import { Icon } from "@iconify/react";
import { format } from "date-fns";
import { fr, enUS } from "date-fns/locale";
import { useTranslations, useLocale } from "next-intl";
import { trackBookingAction } from "@/lib/analytics";

interface Booking {
  id: string;
  reference: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  clientComments: string | null;
  departureName: string;
  arrivalName: string;
  requestedDate: string;
  passengerCount: number;
  estimatedPrice: number | null;
  status: string;
  source: string;
  createdAt: string;
}

export function ReservationsTable({ bookings }: { bookings: Booking[] }) {
  const t = useTranslations("dashboard");
  const tc = useTranslations("common");
  const locale = useLocale();
  const router = useRouter();
  const [filter, setFilter] = useState<string>("ALL");
  const [updating, setUpdating] = useState<string | null>(null);

  const statusConfig: Record<string, { label: string; color: string }> = {
    PENDING: { label: t("pending"), color: "bg-amber-50 text-amber-700" },
    ACCEPTED: { label: t("accepted"), color: "bg-green-50 text-green-700" },
    REJECTED: { label: t("rejected"), color: "bg-red-50 text-red-700" },
    CANCELLED: { label: t("cancelled"), color: "bg-neutral-100 text-neutral-500" },
    COMPLETED: { label: t("completed"), color: "bg-blue-50 text-blue-700" },
  };

  const now = new Date();
  const todayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const tomorrowEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2);

  function isToday(date: string) {
    const d = new Date(date);
    return d >= now && d < todayEnd;
  }
  function isTomorrow(date: string) {
    const d = new Date(date);
    return d >= todayEnd && d < tomorrowEnd;
  }
  function isUrgent(date: string) {
    const d = new Date(date);
    const hoursLeft = (d.getTime() - now.getTime()) / (1000 * 60 * 60);
    return hoursLeft > 0 && hoursLeft < 10;
  }

  const filtered = filter === "ALL" ? bookings : bookings.filter((b) => b.status === filter);

  async function updateStatus(bookingId: string, status: "ACCEPTED" | "REJECTED" | "COMPLETED") {
    const actionMap = { ACCEPTED: "accept", REJECTED: "reject", COMPLETED: "complete" } as const;
    trackBookingAction({ action: actionMap[status], bookingId });
    setUpdating(bookingId);
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
    <div>
      {/* Filters */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {[
          { key: "ALL", label: tc("all") },
          { key: "PENDING", label: t("pending") },
          { key: "ACCEPTED", label: t("acceptedPlural") },
          { key: "COMPLETED", label: t("completed") },
          { key: "REJECTED", label: t("rejected") },
        ].map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
              filter === f.key
                ? "bg-neutral-900 text-white"
                : "bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-300"
            }`}
          >
            {f.label}
            {f.key === "ALL" && (
              <span className="ml-1.5 text-neutral-400">({bookings.length})</span>
            )}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white border border-neutral-200 rounded-2xl p-12 text-center">
          <Icon icon="solar:calendar-linear" className="text-4xl text-neutral-300 mx-auto mb-3" />
          <p className="text-sm text-neutral-500 font-light">{t("noReservations")}</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((booking) => {
            const today = isToday(booking.requestedDate);
            const tomorrow = isTomorrow(booking.requestedDate);
            const urgent = isUrgent(booking.requestedDate);
            const isPending = booking.status === "PENDING";
            const isAccepted = booking.status === "ACCEPTED";
            const highlight =
              (isPending && (today || tomorrow || urgent))
                ? "border-2 border-amber-300 bg-amber-50/40"
                : (isAccepted && today)
                  ? "border-2 border-green-300 bg-green-50/40"
                  : (isAccepted && tomorrow)
                    ? "border border-green-200 bg-green-50/20"
                    : "border border-neutral-200 bg-white";

            return (
            <div
              key={booking.id}
              className={`rounded-2xl p-4 sm:p-5 ${highlight}`}
            >
              {/* Header: name + phone + status + ref */}
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <p className="text-sm font-semibold">{booking.clientName}</p>
                {booking.clientPhone && (
                  <a
                    href={`tel:${booking.clientPhone}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-900 font-medium transition-colors"
                    title={t("callClient")}
                  >
                    <Icon icon="solar:phone-bold" className="text-sm" />
                    {booking.clientPhone}
                  </a>
                )}
                <span
                  className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                    statusConfig[booking.status]?.color || ""
                  }`}
                >
                  {statusConfig[booking.status]?.label || booking.status}
                </span>
                <span className="text-xs text-neutral-400">
                  #{booking.reference}
                </span>
              </div>

              {/* Route */}
              <div className="flex items-start gap-2 text-xs text-neutral-500 mb-1.5">
                <Icon icon="solar:map-point-linear" className="text-neutral-400 shrink-0 mt-0.5" />
                <span className="break-words min-w-0">
                  {booking.departureName} → {booking.arrivalName}
                </span>
              </div>

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-400">
                <span className="flex items-center gap-1">
                  <Icon icon="solar:calendar-linear" />
                  {format(new Date(booking.requestedDate), locale === "en" ? "dd MMM yyyy 'at' HH:mm" : "dd MMM yyyy 'à' HH:mm", {
                    locale: locale === "en" ? enUS : fr,
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Icon icon="solar:users-group-rounded-linear" />
                  {booking.passengerCount} {booking.passengerCount > 1 ? tc("passengers") : tc("passenger")}
                </span>
                {booking.estimatedPrice && (
                  <span className="flex items-center gap-1">
                    <Icon icon="solar:tag-price-linear" />
                    {booking.estimatedPrice.toFixed(2).replace(".", ",")} €
                  </span>
                )}
                <span className="text-neutral-300">
                  via {booking.source === "PROFILE" ? t("fromProfile") : "Landing"}
                </span>
                {today && (isPending || isAccepted) && (
                  <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                    <Icon icon="solar:alarm-bold" className="text-xs" />
                    {t("rideToday")}
                  </span>
                )}
                {tomorrow && (isPending || isAccepted) && (
                  <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                    <Icon icon="solar:clock-circle-bold" className="text-xs" />
                    {t("rideTomorrow")}
                  </span>
                )}
                {urgent && !today && (isPending || isAccepted) && (
                  <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                    <Icon icon="solar:alarm-bold" className="text-xs" />
                    {t("inXHours", { hours: Math.round((new Date(booking.requestedDate).getTime() - now.getTime()) / (1000 * 60 * 60)) })}
                  </span>
                )}
              </div>

              {booking.clientComments && (
                <p className="text-xs text-neutral-500 mt-2 bg-neutral-50 rounded-lg px-3 py-2">
                  {booking.clientComments}
                </p>
              )}

              {/* Actions */}
              {booking.status === "PENDING" && (
                <div className="flex gap-2 mt-3 pt-3 border-t border-neutral-100">
                  <button
                    onClick={() => updateStatus(booking.id, "ACCEPTED")}
                    disabled={updating === booking.id}
                    className="flex-1 sm:flex-none bg-green-50 text-green-700 hover:bg-green-100 px-4 py-2 rounded-lg text-xs font-medium transition-colors disabled:opacity-50"
                  >
                    {t("accept")}
                  </button>
                  <button
                    onClick={() => updateStatus(booking.id, "REJECTED")}
                    disabled={updating === booking.id}
                    className="flex-1 sm:flex-none bg-red-50 text-red-700 hover:bg-red-100 px-4 py-2 rounded-lg text-xs font-medium transition-colors disabled:opacity-50"
                  >
                    {t("reject")}
                  </button>
                </div>
              )}

              {booking.status === "ACCEPTED" && (
                <div className="mt-3 pt-3 border-t border-neutral-100">
                  <button
                    onClick={() => updateStatus(booking.id, "COMPLETED")}
                    disabled={updating === booking.id}
                    className="w-full sm:w-auto bg-blue-50 text-blue-700 hover:bg-blue-100 px-4 py-2 rounded-lg text-xs font-medium transition-colors disabled:opacity-50"
                  >
                    {t("complete")}
                  </button>
                </div>
              )}
            </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
