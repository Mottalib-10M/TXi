"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { useLocale, useTranslations } from "next-intl";
import { MapsLink } from "@/components/ui/MapsLink";
import { P2PShareButtons } from "@/components/dashboard/P2PShareButtons";

interface P2PBooking {
  id: string;
  reference: string;
  clientName: string;
  clientPhone: string;
  departureName: string;
  departureLat: number;
  departureLng: number;
  arrivalName: string;
  arrivalLat: number;
  arrivalLng: number;
  requestedDate: string;
  lockedPrice: number | null;
  status: string;
  targetDriverName: string | null;
  targetDriverPhone: string | null;
  p2pCommissionRate: number | null;
  p2pCommissionAmount: number | null;
  p2pToken: string | null;
  p2pOpenedAt: string | null;
  invitedCount: number;
  driver: { firstName: string; lastName: string } | null;
  createdAt: string;
}

/** Trajet à reproposer : P2PShareForm l'écoute et préremplit le formulaire. */
export const P2P_PREFILL_EVENT = "p2p:prefill";
export interface P2PPrefill {
  departureName: string;
  departureLat: number;
  departureLng: number;
  arrivalName: string;
  arrivalLat: number;
  arrivalLng: number;
  price: number | null;
  commissionRate: number | null;
  clientName: string;
  clientPhone: string;
}

const statusConfig: Record<string, { color: string; icon: string }> = {
  PENDING: { color: "bg-amber-100 text-amber-700", icon: "solar:clock-circle-linear" },
  OPENED: { color: "bg-violet-100 text-violet-700", icon: "solar:users-group-rounded-linear" },
  ACCEPTED: { color: "bg-green-100 text-green-700", icon: "solar:check-circle-linear" },
  COMPLETED: { color: "bg-blue-100 text-blue-700", icon: "solar:check-circle-bold" },
  CANCELLED: { color: "bg-neutral-100 text-neutral-500", icon: "solar:close-circle-linear" },
  REJECTED: { color: "bg-red-100 text-red-600", icon: "solar:close-circle-linear" },
};

export function P2PHistory({ bookings, driverFirstName }: { bookings: P2PBooking[]; driverFirstName: string }) {
  const t = useTranslations("dashboard.p2p");
  const td = useTranslations("dashboard");
  const locale = useLocale();
  const [openId, setOpenId] = useState<string | null>(null);

  if (bookings.length === 0) {
    return (
      <div className="bg-white border border-neutral-200 rounded-2xl p-6 text-center">
        <Icon icon="solar:users-group-two-rounded-linear" className="text-4xl text-neutral-300 mx-auto mb-2" />
        <p className="text-sm text-neutral-500">{t("noHistory")}</p>
      </div>
    );
  }

  const dateLocale = locale === "en" ? "en-GB" : "fr-FR";
  function formatDate(dateStr: string, long = false) {
    return new Date(dateStr).toLocaleDateString(dateLocale, long
      ? { weekday: "long", day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" }
      : { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
  }
  function formatTime(dateStr: string) {
    return new Date(dateStr).toLocaleTimeString(dateLocale, { hour: "2-digit", minute: "2-digit" });
  }

  function statusLabel(b: P2PBooking, opened: boolean) {
    if (b.status === "PENDING") return opened ? t("statusOpened") : t("statusWaiting");
    return td(b.status === "ACCEPTED" ? "accepted" :
      b.status === "COMPLETED" ? "completed" :
      b.status === "CANCELLED" ? "cancelled" : "rejected");
  }

  function prefill(b: P2PBooking) {
    const detail: P2PPrefill = {
      departureName: b.departureName,
      departureLat: b.departureLat,
      departureLng: b.departureLng,
      arrivalName: b.arrivalName,
      arrivalLat: b.arrivalLat,
      arrivalLng: b.arrivalLng,
      price: b.lockedPrice,
      commissionRate: b.p2pCommissionRate,
      clientName: b.clientName,
      clientPhone: b.clientPhone,
    };
    window.dispatchEvent(new CustomEvent(P2P_PREFILL_EVENT, { detail }));
  }

  return (
    <div className="space-y-3">
      <h2 className="font-semibold text-sm flex items-center gap-2">
        <Icon icon="solar:history-linear" className="text-neutral-400" />
        {t("history")}
      </h2>
      {bookings.map((booking) => {
        const opened = booking.status === "PENDING" && Boolean(booking.p2pOpenedAt);
        const cfg = statusConfig[opened ? "OPENED" : booking.status] || statusConfig.PENDING;
        const acceptedBy = booking.driver
          ? `${booking.driver.firstName} ${booking.driver.lastName}`
          : booking.targetDriverName;
        const isOpen = openId === booking.id;
        const future = new Date(booking.requestedDate).getTime() > Date.now();
        const shareable = booking.status === "PENDING" && future && booking.p2pToken;
        const openAt = new Date(new Date(booking.createdAt).getTime() + 30 * 60 * 1000).toISOString();

        return (
          <div
            key={booking.id}
            className={`bg-white border rounded-xl transition-colors ${isOpen ? "border-violet-300" : "border-neutral-200 hover:border-neutral-300"}`}
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : booking.id)}
              aria-expanded={isOpen}
              className="block w-full text-left p-4"
            >
              <span className="flex items-start justify-between gap-3 mb-2">
                <span className="min-w-0 flex-1">
                  <span className={`block text-sm font-medium text-neutral-900 leading-snug ${isOpen ? "" : "truncate"}`}>
                    {booking.departureName}
                  </span>
                  <span className={`block text-sm font-medium text-neutral-900 leading-snug ${isOpen ? "" : "truncate"}`}>
                    → {booking.arrivalName}
                  </span>
                </span>
                <span className="flex items-center gap-2 shrink-0">
                  {booking.lockedPrice != null && (
                    <span className="text-sm font-bold text-neutral-900">
                      {booking.lockedPrice}&nbsp;€
                    </span>
                  )}
                  <Icon
                    icon="solar:alt-arrow-down-linear"
                    className={`text-neutral-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </span>
              </span>
              <span className="flex items-center gap-x-3 gap-y-1.5 flex-wrap text-xs text-neutral-500">
                <span className="flex items-center gap-1">
                  <Icon icon="solar:calendar-linear" className="text-sm" />
                  {formatDate(booking.requestedDate)}
                </span>
                {acceptedBy && (
                  <span className="flex items-center gap-1">
                    <Icon icon="solar:user-linear" className="text-sm" />
                    {acceptedBy}
                  </span>
                )}
                {booking.p2pCommissionAmount != null && (
                  <span className="flex items-center gap-1">
                    <Icon icon="solar:hand-money-linear" className="text-sm" />
                    {booking.p2pCommissionAmount} €
                  </span>
                )}
                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${cfg.color}`}>
                  <Icon icon={cfg.icon} className="text-xs" />
                  {statusLabel(booking, opened)}
                </span>
              </span>
            </button>

            {isOpen && (
              <div className="px-4 pb-4 pt-3 border-t border-neutral-100 space-y-3">
                <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-3 gap-y-1.5 text-sm">
                  <dt className="text-neutral-500">{t("reference")}</dt>
                  <dd className="text-neutral-900">#{booking.reference}</dd>
                  <dt className="text-neutral-500">{t("when")}</dt>
                  <dd className="text-neutral-900">{formatDate(booking.requestedDate, true)}</dd>
                  <dt className="text-neutral-500">{t("client")}</dt>
                  <dd className="text-neutral-900 break-words">
                    {booking.clientName}
                    {booking.clientPhone && (
                      <>
                        {" · "}
                        <a href={`tel:${booking.clientPhone}`} className="text-violet-700 underline underline-offset-2">
                          {booking.clientPhone}
                        </a>
                      </>
                    )}
                  </dd>
                  {booking.p2pCommissionAmount != null && (
                    <>
                      <dt className="text-neutral-500">{t("yourCommission")}</dt>
                      <dd className="text-neutral-900">
                        {booking.p2pCommissionAmount} €
                        {booking.p2pCommissionRate != null && ` (${Math.round(booking.p2pCommissionRate * 100)} %)`}
                      </dd>
                    </>
                  )}
                  {acceptedBy && (
                    <>
                      <dt className="text-neutral-500">{t("takenBy")}</dt>
                      <dd className="text-neutral-900">{acceptedBy}</dd>
                    </>
                  )}
                </dl>

                {booking.status === "PENDING" && future && (
                  <p className="text-xs text-neutral-600 bg-neutral-50 rounded-lg px-3 py-2">
                    {opened
                      ? t("openedInfo", { count: booking.invitedCount, time: formatTime(booking.p2pOpenedAt!) })
                      : t("waitingInfo", { time: formatTime(openAt) })}
                  </p>
                )}

                <div>
                  <MapsLink origin={booking.departureName} destination={booking.arrivalName} />
                </div>

                {shareable ? (
                  <P2PShareButtons
                    compact
                    driverFirstName={driverFirstName}
                    ride={{
                      p2pToken: booking.p2pToken!,
                      departureName: booking.departureName,
                      arrivalName: booking.arrivalName,
                      requestedDate: booking.requestedDate,
                      lockedPrice: booking.lockedPrice,
                    }}
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => prefill(booking)}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-violet-200 bg-violet-50 py-2.5 text-sm font-semibold text-violet-700 hover:bg-violet-100 transition-colors"
                  >
                    <Icon icon="solar:restart-linear" className="text-base" />
                    {t("shareAgain")}
                  </button>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
