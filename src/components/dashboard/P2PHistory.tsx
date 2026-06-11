"use client";

import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

interface P2PBooking {
  id: string;
  reference: string;
  departureName: string;
  arrivalName: string;
  requestedDate: string;
  lockedPrice: number | null;
  status: string;
  targetDriverName: string | null;
  targetDriverPhone: string | null;
  p2pCommissionRate: number | null;
  p2pCommissionAmount: number | null;
  driver: { firstName: string; lastName: string } | null;
  createdAt: string;
}

const statusConfig: Record<string, { color: string; icon: string }> = {
  PENDING: { color: "bg-amber-100 text-amber-700", icon: "solar:clock-circle-linear" },
  ACCEPTED: { color: "bg-green-100 text-green-700", icon: "solar:check-circle-linear" },
  COMPLETED: { color: "bg-blue-100 text-blue-700", icon: "solar:check-circle-bold" },
  CANCELLED: { color: "bg-neutral-100 text-neutral-500", icon: "solar:close-circle-linear" },
  REJECTED: { color: "bg-red-100 text-red-600", icon: "solar:close-circle-linear" },
};

export function P2PHistory({ bookings }: { bookings: P2PBooking[] }) {
  const t = useTranslations("dashboard.p2p");
  const td = useTranslations("dashboard");

  if (bookings.length === 0) {
    return (
      <div className="bg-white border border-neutral-200 rounded-2xl p-6 text-center">
        <Icon icon="solar:users-group-two-rounded-linear" className="text-4xl text-neutral-300 mx-auto mb-2" />
        <p className="text-sm text-neutral-500">{t("noHistory")}</p>
      </div>
    );
  }

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <div className="space-y-3">
      <h2 className="font-semibold text-sm flex items-center gap-2">
        <Icon icon="solar:history-linear" className="text-neutral-400" />
        {t("history")}
      </h2>
      {bookings.map((booking) => {
        const cfg = statusConfig[booking.status] || statusConfig.PENDING;
        const acceptedBy = booking.driver
          ? `${booking.driver.firstName} ${booking.driver.lastName}`
          : booking.targetDriverName;

        return (
          <div
            key={booking.id}
            className="bg-white border border-neutral-200 rounded-xl p-4 hover:border-neutral-300 transition-colors"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-neutral-900 leading-snug truncate">
                  {booking.departureName}
                </p>
                <p className="text-sm font-medium text-neutral-900 leading-snug truncate">
                  → {booking.arrivalName}
                </p>
              </div>
              {booking.lockedPrice != null && (
                <span className="text-sm font-bold text-neutral-900 shrink-0">
                  {booking.lockedPrice}&nbsp;€
                </span>
              )}
            </div>
            <div className="flex items-center gap-3 flex-wrap text-xs text-neutral-500">
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
                {td(booking.status === "PENDING" ? "pending" :
                  booking.status === "ACCEPTED" ? "accepted" :
                  booking.status === "COMPLETED" ? "completed" :
                  booking.status === "CANCELLED" ? "cancelled" : "rejected")}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
