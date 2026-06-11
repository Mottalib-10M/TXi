"use client";

import { useState } from "react";
import { useRouter } from "@/i18n/navigation";
import { Icon } from "@iconify/react";
import { format } from "date-fns";
import { fr, enUS } from "date-fns/locale";
import { useTranslations, useLocale } from "next-intl";
import { trackBookingAction } from "@/lib/analytics";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

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
  referrerDriverName?: string | null;
  organizationName?: string | null;
  cancelledBy: string | null;
  clientLocale?: string;
  createdAt: string;
}

function normalizePhone(phone: string): string {
  let cleaned = phone.replace(/[\s\-().+]/g, "");
  if (cleaned.startsWith("0") && cleaned.length === 10) {
    cleaned = "33" + cleaned.slice(1);
  }
  return cleaned;
}

function buildWhatsAppUrl(phone: string, message: string): string {
  return `https://wa.me/${normalizePhone(phone)}?text=${encodeURIComponent(message)}`;
}

export function ReservationsTable({ bookings, driverName }: { bookings: Booking[]; driverName: string }) {
  const t = useTranslations("dashboard");
  const tc = useTranslations("common");
  const locale = useLocale();
  const router = useRouter();
  const [filter, setFilter] = useState<string>("ACTIVE");
  const [updating, setUpdating] = useState<string | null>(null);
  const [confirmModal, setConfirmModal] = useState<{
    bookingId: string;
    title: string;
    message: string;
  } | null>(null);

  const statusConfig: Record<string, { label: string; color: string }> = {
    PENDING: { label: t("pending"), color: "bg-amber-50 text-amber-700" },
    ACCEPTED: { label: t("accepted"), color: "bg-green-50 text-green-700" },
    REJECTED: { label: t("rejected"), color: "bg-orange-50 text-orange-700" },
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

  const statusPriority: Record<string, number> = { PENDING: 0, ACCEPTED: 1, COMPLETED: 2, REJECTED: 3, CANCELLED: 4 };

  const filtered = (filter === "ALL" ? bookings : filter === "ACTIVE" ? bookings.filter((b) => b.status === "PENDING" || b.status === "ACCEPTED") : bookings.filter((b) => b.status === filter))
    .slice()
    .sort((a, b) => {
      const pa = statusPriority[a.status] ?? 9;
      const pb = statusPriority[b.status] ?? 9;
      if (pa !== pb) return pa - pb;
      return new Date(a.requestedDate).getTime() - new Date(b.requestedDate).getTime();
    });

  async function updateStatus(bookingId: string, status: "ACCEPTED" | "REJECTED" | "COMPLETED" | "CANCELLED") {
    const actionMap = { ACCEPTED: "accept", REJECTED: "reject", COMPLETED: "complete", CANCELLED: "cancel" } as const;
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

  function handleCancelAccepted(bookingId: string) {
    setConfirmModal({
      bookingId,
      title: t("confirmCancelTitle"),
      message: t("confirmCancelMsg"),
    });
  }

  function getWhatsAppMessage(booking: Booking): string {
    const clientLang = booking.clientLocale || "fr";
    const dateFnsLoc = clientLang === "en" ? enUS : fr;
    const dateStr = format(new Date(booking.requestedDate), clientLang === "en" ? "EEEE dd MMMM yyyy 'at' HH:mm" : "EEEE dd MMMM yyyy 'à' HH:mm", { locale: dateFnsLoc });
    const price = booking.estimatedPrice ? `${booking.estimatedPrice.toFixed(0)} €` : "";

    if (clientLang === "en") {
      return [
        `Hello ${booking.clientName},`,
        ``,
        `I'm ${driverName}, your TaxiNeo driver.`,
        `I've just confirmed your booking:`,
        ``,
        `📍 ${booking.departureName} → ${booking.arrivalName}`,
        `📅 ${dateStr}`,
        price ? `💰 ${price}` : "",
        ``,
        `Don't hesitate to contact me here for any questions.`,
        ``,
        `See you soon!`,
      ].filter(Boolean).join("\n");
    }

    return [
      `Bonjour ${booking.clientName},`,
      ``,
      `Je suis ${driverName}, votre chauffeur TaxiNeo.`,
      `Je viens de confirmer votre réservation :`,
      ``,
      `📍 ${booking.departureName} → ${booking.arrivalName}`,
      `📅 ${dateStr}`,
      price ? `💰 ${price}` : "",
      ``,
      `N'hésitez pas à me contacter ici pour toutes questions.`,
      ``,
      `À bientôt !`,
    ].filter(Boolean).join("\n");
  }

  return (
    <div>
      {/* Filters */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {[
          { key: "ACTIVE", label: t("pending"), activeClass: "bg-amber-500 text-white", inactiveClass: "bg-amber-50 border border-amber-200 text-amber-700 hover:bg-amber-100" },
          { key: "COMPLETED", label: t("completed"), activeClass: "bg-neutral-600 text-white", inactiveClass: "bg-neutral-100 border border-neutral-200 text-neutral-600 hover:bg-neutral-200" },
          { key: "REJECTED", label: t("rejected"), activeClass: "bg-orange-500 text-white", inactiveClass: "bg-orange-50 border border-orange-200 text-orange-700 hover:bg-orange-100" },
          { key: "CANCELLED", label: t("cancelled"), activeClass: "bg-neutral-400 text-white", inactiveClass: "bg-neutral-50 border border-neutral-200 text-neutral-500 hover:bg-neutral-100" },
          { key: "ALL", label: tc("all"), activeClass: "bg-neutral-900 text-white", inactiveClass: "bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-300" },
        ].map((f) => {
          const count = f.key === "ALL" ? bookings.length : f.key === "ACTIVE" ? bookings.filter((b) => b.status === "PENDING" || b.status === "ACCEPTED").length : bookings.filter((b) => b.status === f.key).length;
          return (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
              filter === f.key ? f.activeClass : f.inactiveClass
            }`}
          >
            {f.label}
            {count > 0 && (
              <span className={`ml-1.5 ${filter === f.key ? "opacity-70" : "opacity-50"}`}>({count})</span>
            )}
          </button>
          );
        })}
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
            const isCompleted = booking.status === "COMPLETED";
            const isRejected = booking.status === "REJECTED";
            const isCancelled = booking.status === "CANCELLED";

            const statusStyle = isPending
              ? (today || tomorrow || urgent)
                ? "border-l-4 border-l-amber-400 border border-amber-200 bg-amber-50/40"
                : "border-l-4 border-l-amber-400 border border-neutral-200 bg-white"
              : isAccepted
                ? today
                  ? "border-l-4 border-l-green-500 border border-green-200 bg-green-50/40"
                  : tomorrow
                    ? "border-l-4 border-l-green-500 border border-green-100 bg-green-50/20"
                    : "border-l-4 border-l-green-500 border border-neutral-200 bg-white"
              : isCompleted
                ? "border-l-4 border-l-neutral-300 border border-neutral-200 bg-neutral-50/50"
              : isRejected
                ? "border-l-4 border-l-orange-400 border border-neutral-200 bg-orange-50/30"
              : isCancelled
                ? "border-l-4 border-l-neutral-300 border border-neutral-200 bg-neutral-50/30 opacity-70"
                : "border border-neutral-200 bg-white";

            return (
            <div
              key={booking.id}
              className={`rounded-2xl p-4 sm:p-5 ${statusStyle}`}
            >
              {/* Header: name + phone + status + ref */}
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <p className="text-sm font-semibold">{booking.clientName}</p>
                {booking.clientPhone && (
                  <>
                    <a
                      href={`tel:${booking.clientPhone}`}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-900 font-medium transition-colors"
                      title={t("callClient")}
                    >
                      <Icon icon="solar:phone-bold" className="text-sm" />
                      {booking.clientPhone}
                    </a>
                    <WhatsAppLink href={buildWhatsAppUrl(booking.clientPhone, getWhatsAppMessage(booking))} context="reservations" bookingId={booking.id} iconClassName="text-sm" />
                  </>
                )}
                <span
                  className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                    statusConfig[booking.status]?.color || ""
                  }`}
                >
                  {statusConfig[booking.status]?.label || booking.status}
                  {booking.status === "CANCELLED" && booking.cancelledBy && (
                    <span className="ml-1 opacity-70">
                      ({booking.cancelledBy === "SYSTEM" ? t("bySystem") : booking.cancelledBy === "CLIENT" ? t("byClient") : t("byDriver")})
                    </span>
                  )}
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
                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                  booking.source === "P2P"
                    ? "bg-violet-100 text-violet-700"
                    : "bg-neutral-100 text-neutral-500"
                }`}>
                  {booking.source === "P2P" && booking.referrerDriverName
                    ? `via ${booking.referrerDriverName}`
                    : booking.source === "ORGANIZATION" && booking.organizationName
                      ? `via ${booking.organizationName}`
                      : "via TaxiNeo"}
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
                <div className="flex items-center gap-3 mt-3 pt-3 border-t border-neutral-100">
                  <button
                    onClick={() => updateStatus(booking.id, "ACCEPTED")}
                    disabled={updating === booking.id}
                    className="inline-flex items-center gap-1.5 bg-green-600 text-white hover:bg-green-700 px-5 py-2 rounded-lg text-xs font-semibold transition-colors disabled:opacity-50"
                  >
                    <Icon icon="solar:check-circle-linear" className="text-sm" />
                    {t("accept")}
                  </button>
                  <button
                    onClick={() => updateStatus(booking.id, "REJECTED")}
                    disabled={updating === booking.id}
                    className="text-xs text-neutral-400 hover:text-red-600 transition-colors disabled:opacity-50"
                  >
                    {t("reject")}
                  </button>
                </div>
              )}

              {booking.status === "ACCEPTED" && (
                <div className="flex items-center gap-3 mt-3 pt-3 border-t border-neutral-100">
                  <button
                    onClick={() => updateStatus(booking.id, "COMPLETED")}
                    disabled={updating === booking.id}
                    className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-4 py-2 rounded-lg text-xs font-medium transition-colors disabled:opacity-50"
                  >
                    {t("complete")}
                  </button>
                  <button
                    onClick={() => handleCancelAccepted(booking.id)}
                    disabled={updating === booking.id}
                    className="text-xs text-neutral-400 hover:text-red-600 transition-colors disabled:opacity-50"
                  >
                    {t("cancelRide")}
                  </button>
                </div>
              )}
            </div>
            );
          })}
        </div>
      )}

      {/* Confirmation modal */}
      {confirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setConfirmModal(null)}
          />
          <div className="relative bg-white rounded-2xl shadow-xl max-w-md w-full mx-4 p-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                <Icon icon="solar:danger-triangle-bold" className="text-red-500 text-xl" />
              </div>
              <h3 className="text-base font-semibold text-neutral-900">{confirmModal.title}</h3>
            </div>
            <p className="text-sm text-neutral-500 mb-6 ml-[52px]">{confirmModal.message}</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setConfirmModal(null)}
                className="px-4 py-2 rounded-xl text-sm font-medium text-neutral-600 bg-neutral-100 hover:bg-neutral-200 transition-colors"
              >
                {tc("cancel")}
              </button>
              <button
                onClick={() => {
                  const bookingId = confirmModal.bookingId;
                  setConfirmModal(null);
                  updateStatus(bookingId, "CANCELLED");
                }}
                className="px-4 py-2 rounded-xl text-sm font-medium text-white bg-red-600 hover:bg-red-700 transition-colors"
              >
                {t("confirmCancelBtn")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
