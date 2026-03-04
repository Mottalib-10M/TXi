"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { format } from "date-fns";
import { enUS, fr } from "date-fns/locale";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

interface Booking {
  id: string;
  reference: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  clientComments: string | null;
  beneficiaryName: string | null;
  departureName: string;
  arrivalName: string;
  requestedDate: string;
  passengerCount: number;
  estimatedPrice: number | null;
  lockedPrice: number | null;
  status: string;
  source: string;
  driver: { name: string; slug: string } | null;
  organization: { name: string; type: string } | null;
  createdAt: string;
}

export function AdminBookingsTable({ bookings }: { bookings: Booking[] }) {
  const t = useTranslations("admin");
  const tc = useTranslations("common");
  const td = useTranslations("dashboard");
  const locale = useLocale();

  const statusConfig: Record<string, { label: string; color: string }> = {
    PENDING: { label: t("statusPending"), color: "bg-amber-50 text-amber-700" },
    ACCEPTED: { label: t("statusAccepted"), color: "bg-green-50 text-green-700" },
    REJECTED: { label: t("statusRejected"), color: "bg-red-50 text-red-700" },
    CANCELLED: { label: t("statusCancelled"), color: "bg-neutral-100 text-neutral-500" },
    COMPLETED: { label: t("statusCompleted"), color: "bg-blue-50 text-blue-700" },
  };

  const sourceLabels: Record<string, string> = {
    LANDING: "Landing",
    PROFILE: td("fromProfile"),
    ORGANIZATION: t("organisations"),
  };

  const [filter, setFilter] = useState<string>("ALL");
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = bookings.filter((b) => {
    const matchesStatus = filter === "ALL" || b.status === filter;
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      b.reference.toLowerCase().includes(q) ||
      b.clientName.toLowerCase().includes(q) ||
      (b.driver?.name.toLowerCase().includes(q) ?? false);
    return matchesStatus && matchesSearch;
  });

  return (
    <div>
      {/* Filters */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        {[
          { key: "ALL", label: t("filterAll") },
          { key: "PENDING", label: t("filterPending") },
          { key: "ACCEPTED", label: t("filterAccepted") },
          { key: "COMPLETED", label: t("filterCompleted") },
          { key: "REJECTED", label: t("filterRejected") },
          { key: "CANCELLED", label: t("filterCancelled") },
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

      {/* Search */}
      <div className="relative mb-6">
        <Icon icon="solar:magnifer-linear" className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t("searchBookings")}
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-neutral-400 transition-colors"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white border border-neutral-200 rounded-2xl p-12 text-center">
          <Icon icon="solar:calendar-linear" className="text-4xl text-neutral-300 mx-auto mb-3" />
          <p className="text-sm text-neutral-500 font-light">{t("noBookingsFound")}</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((booking) => (
            <div
              key={booking.id}
              className="bg-white border border-neutral-200 rounded-2xl p-4 sm:p-5"
            >
              {/* Header - clickable for expand */}
              <button
                onClick={() => setExpandedId(expandedId === booking.id ? null : booking.id)}
                className="w-full text-left"
              >
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <p className="text-sm font-semibold">{booking.clientName}</p>
                  <span className="text-xs text-neutral-400">#{booking.reference}</span>
                  <span
                    className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                      statusConfig[booking.status]?.color || ""
                    }`}
                  >
                    {statusConfig[booking.status]?.label || booking.status}
                  </span>
                  {booking.organization && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-violet-50 text-violet-700">
                      {booking.organization.name}
                    </span>
                  )}
                  <Icon
                    icon={expandedId === booking.id ? "solar:alt-arrow-up-linear" : "solar:alt-arrow-down-linear"}
                    className="text-neutral-400 ml-auto"
                  />
                </div>

                {/* Route */}
                <div className="flex items-start gap-2 text-xs text-neutral-500 mb-1.5">
                  <Icon icon="solar:map-point-linear" className="text-neutral-400 shrink-0 mt-0.5" />
                  <span className="break-words min-w-0">
                    {booking.departureName} → {booking.arrivalName}
                  </span>
                </div>

                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-400">
                  <span className="flex items-center gap-1">
                    <Icon icon="solar:calendar-linear" />
                    {format(new Date(booking.requestedDate), locale === "en" ? "dd MMM yyyy 'at' HH:mm" : "dd MMM yyyy 'à' HH:mm", { locale: locale === "en" ? enUS : fr })}
                  </span>
                  {booking.driver && (
                    <span className="flex items-center gap-1">
                      <Icon icon="solar:user-linear" />
                      {booking.driver.name}
                    </span>
                  )}
                  {(booking.lockedPrice ?? booking.estimatedPrice) != null && (
                    <span className="flex items-center gap-1">
                      <Icon icon="solar:tag-price-linear" />
                      {(booking.lockedPrice ?? booking.estimatedPrice)?.toFixed(2)} &euro;
                    </span>
                  )}
                  <span className="text-neutral-300">
                    via {sourceLabels[booking.source] || booking.source}
                  </span>
                </div>
              </button>

              {/* Expanded details */}
              {expandedId === booking.id && (
                <div className="mt-3 pt-3 border-t border-neutral-100 space-y-2 text-xs text-neutral-500">
                  <div className="grid sm:grid-cols-2 gap-2">
                    <div>
                      <p className="text-neutral-400 mb-0.5">{t("client")}</p>
                      <p>{booking.clientName}</p>
                      <p>{booking.clientEmail}</p>
                      {booking.clientPhone && <p>{booking.clientPhone}</p>}
                    </div>
                    {booking.driver && (
                      <div>
                        <p className="text-neutral-400 mb-0.5">{t("driver")}</p>
                        <Link
                          href={`/taxi/${booking.driver.slug}`}
                          target="_blank"
                          className="text-blue-600 hover:underline"
                        >
                          {booking.driver.name}
                        </Link>
                      </div>
                    )}
                  </div>
                  {booking.beneficiaryName && (
                    <div>
                      <p className="text-neutral-400 mb-0.5">{t("beneficiary")}</p>
                      <p>{booking.beneficiaryName}</p>
                    </div>
                  )}
                  {booking.clientComments && (
                    <div>
                      <p className="text-neutral-400 mb-0.5">{td("comments")}</p>
                      <p className="bg-neutral-50 rounded-lg px-3 py-2">{booking.clientComments}</p>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-neutral-400">
                    <span>{booking.passengerCount} {booking.passengerCount > 1 ? tc("passengers") : tc("passenger")}</span>
                    <span>{t("createdOn", { date: format(new Date(booking.createdAt), locale === "en" ? "dd MMM yyyy 'at' HH:mm" : "dd MMM yyyy 'à' HH:mm", { locale: locale === "en" ? enUS : fr }) })}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
