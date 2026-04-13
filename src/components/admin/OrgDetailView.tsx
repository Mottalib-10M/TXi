"use client";

import { useState } from "react";
import { useRouter } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import { Icon } from "@iconify/react";
import { format, formatDistanceToNow } from "date-fns";
import { enUS, fr } from "date-fns/locale";
import { useLocale, useTranslations } from "next-intl";

interface OrgData {
  id: string;
  name: string;
  type: string;
  contactName: string;
  email: string;
  phone: string;
  address: string | null;
  cagnotteBalance: number;
  emailVerified: boolean;
  lastLoginAt: string | null;
  loginCount: number;
  createdAt: string;
  totalBookings: number;
  bookingsByStatus: Record<string, number>;
  recentBookings: {
    id: string;
    reference: string;
    clientName: string;
    beneficiaryName: string | null;
    departureName: string;
    arrivalName: string;
    status: string;
    lockedPrice: number | null;
    requestedDate: string;
    createdAt: string;
    driverId: string | null;
    driverName: string | null;
  }[];
  favoriteDrivers: {
    id: string;
    firstName: string;
    lastName: string;
    slug: string;
    isActive: boolean;
  }[];
  cagnotteHistory: {
    id: string;
    amount: number;
    bookingRef: string;
    createdAt: string;
  }[];
}

export function OrgDetailView({ org }: { org: OrgData }) {
  const t = useTranslations("admin");
  const locale = useLocale();
  const router = useRouter();
  const dateFnsLocale = locale === "en" ? enUS : fr;
  const [impersonating, setImpersonating] = useState(false);

  const statusConfig: Record<string, { label: string; color: string; dot: string }> = {
    PENDING: { label: t("statusPending"), color: "bg-amber-50 text-amber-700 ring-1 ring-amber-200", dot: "bg-amber-400" },
    ACCEPTED: { label: t("statusAccepted"), color: "bg-green-50 text-green-700 ring-1 ring-green-200", dot: "bg-green-500" },
    REJECTED: { label: t("statusRejected"), color: "bg-red-50 text-red-700 ring-1 ring-red-200", dot: "bg-red-400" },
    CANCELLED: { label: t("statusCancelled"), color: "bg-neutral-50 text-neutral-500 ring-1 ring-neutral-200", dot: "bg-neutral-400" },
    COMPLETED: { label: t("statusCompleted"), color: "bg-blue-50 text-blue-700 ring-1 ring-blue-200", dot: "bg-blue-500" },
  };

  const typeConfig: Record<string, { label: string; color: string }> = {
    HOTEL: { label: t("typeHotel"), color: "bg-blue-50 text-blue-700" },
    HOSPITAL: { label: t("typeHospital"), color: "bg-red-50 text-red-700" },
    ENTERPRISE: { label: t("typeEnterprise"), color: "bg-neutral-800 text-white" },
    INDIVIDUAL: { label: t("typeIndividual"), color: "bg-neutral-100 text-neutral-600" },
  };

  async function impersonate() {
    setImpersonating(true);
    try {
      const res = await fetch("/api/admin/impersonate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ organizationId: org.id }),
      });
      if (res.ok) {
        router.push("/org");
        router.refresh();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setImpersonating(false);
    }
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/admin/organisations"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-900 transition-colors mb-4"
        >
          <Icon icon="solar:arrow-left-linear" />
          {t("backToOrgs")}
        </Link>

        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-violet-50 rounded-2xl flex items-center justify-center text-lg font-bold text-violet-600 shrink-0">
              {org.name.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl font-semibold">{org.name}</h1>
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${typeConfig[org.type]?.color || ""}`}>
                  {typeConfig[org.type]?.label || org.type}
                </span>
                <span
                  className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                    org.emailVerified
                      ? "bg-blue-50 text-blue-700 ring-1 ring-blue-200"
                      : "bg-amber-50 text-amber-700 ring-1 ring-amber-200"
                  }`}
                >
                  {org.emailVerified ? t("emailVerified") : t("emailNotVerified")}
                </span>
              </div>
              <p className="text-sm text-neutral-500 mt-0.5">{org.contactName}</p>
            </div>
          </div>

          <button
            onClick={impersonate}
            disabled={impersonating}
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-50 text-amber-700 hover:bg-amber-100 transition-colors flex items-center gap-1 disabled:opacity-50"
          >
            <Icon icon="solar:square-arrow-right-linear" />
            {impersonating ? "..." : t("loginAs")}
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="bg-white border border-neutral-200 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
              <Icon icon="solar:calendar-bold" className="text-blue-500 text-sm" />
            </div>
            <span className="text-xs text-neutral-500">{t("kpiTotalBookings")}</span>
          </div>
          <p className="text-2xl font-bold">{org.totalBookings}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {Object.entries(org.bookingsByStatus).map(([status, count]) => (
              <span key={status} className="text-[10px] text-neutral-400 flex items-center gap-1">
                <span className={`w-1.5 h-1.5 rounded-full ${statusConfig[status]?.dot || "bg-neutral-300"}`} />
                {count} {statusConfig[status]?.label?.toLowerCase() || status.toLowerCase()}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white border border-neutral-200 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
              <Icon icon="solar:wallet-money-bold" className="text-emerald-500 text-sm" />
            </div>
            <span className="text-xs text-neutral-500">{t("kpiWallet")}</span>
          </div>
          <p className="text-2xl font-bold">{org.cagnotteBalance.toFixed(2)}<span className="text-sm ml-1">&euro;</span></p>
        </div>

        <div className="bg-white border border-neutral-200 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-violet-50 rounded-lg flex items-center justify-center">
              <Icon icon="solar:login-3-bold" className="text-violet-500 text-sm" />
            </div>
            <span className="text-xs text-neutral-500">{t("kpiConnections")}</span>
          </div>
          <p className="text-2xl font-bold">{org.loginCount}</p>
        </div>

        <div className="bg-white border border-neutral-200 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center">
              <Icon icon="solar:clock-circle-bold" className="text-amber-500 text-sm" />
            </div>
            <span className="text-xs text-neutral-500">{t("kpiLastLogin")}</span>
          </div>
          <p className="text-lg font-semibold">
            {org.lastLoginAt
              ? formatDistanceToNow(new Date(org.lastLoginAt), { addSuffix: true, locale: dateFnsLocale })
              : t("neverConnected")}
          </p>
        </div>

        <div className="bg-white border border-neutral-200 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-pink-50 rounded-lg flex items-center justify-center">
              <Icon icon="solar:heart-bold" className="text-pink-500 text-sm" />
            </div>
            <span className="text-xs text-neutral-500">{t("kpiFavoriteDrivers")}</span>
          </div>
          <p className="text-2xl font-bold">{org.favoriteDrivers.length}</p>
        </div>

        <div className="bg-white border border-neutral-200 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center">
              <Icon icon="solar:hourglass-bold" className="text-orange-500 text-sm" />
            </div>
            <span className="text-xs text-neutral-500">{t("kpiPending")}</span>
          </div>
          <p className="text-2xl font-bold">{org.bookingsByStatus["PENDING"] || 0}</p>
        </div>
      </div>

      {/* Organisation info */}
      <div className="bg-white border border-neutral-200 rounded-2xl p-5 mb-8">
        <h2 className="text-sm font-semibold mb-4 flex items-center gap-2">
          <Icon icon="solar:buildings-2-linear" className="text-neutral-400" />
          {t("orgInfo")}
        </h2>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
          <div className="flex items-center gap-2">
            <Icon icon="solar:letter-linear" className="text-neutral-400 shrink-0" />
            <span className="text-neutral-500">{org.email}</span>
          </div>
          {org.phone && (
            <div className="flex items-center gap-2">
              <Icon icon="solar:phone-linear" className="text-neutral-400 shrink-0" />
              <span className="text-neutral-500">{org.phone}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Icon icon="solar:user-linear" className="text-neutral-400 shrink-0" />
            <span className="text-neutral-500">{org.contactName}</span>
          </div>
          {org.address && (
            <div className="flex items-center gap-2">
              <Icon icon="solar:map-point-linear" className="text-neutral-400 shrink-0" />
              <span className="text-neutral-500">{org.address}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Icon icon="solar:calendar-add-linear" className="text-neutral-400 shrink-0" />
            <span className="text-neutral-500">
              {t("registeredOnFem", { date: format(new Date(org.createdAt), "dd MMM yyyy", { locale: dateFnsLocale }) })}
            </span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Cagnotte history */}
        <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden">
          <div className="px-5 py-4 border-b border-neutral-100">
            <div className="flex items-center gap-2">
              <Icon icon="solar:wallet-money-linear" className="text-emerald-500" />
              <h2 className="font-semibold text-sm">{t("cagnotteHistory")}</h2>
            </div>
          </div>
          {org.cagnotteHistory.length === 0 ? (
            <div className="px-5 py-8 text-center">
              <Icon icon="solar:wallet-money-linear" className="text-3xl text-neutral-200 mx-auto mb-2" />
              <p className="text-sm text-neutral-400 font-light">{t("noCagnotteHistory")}</p>
            </div>
          ) : (
            <div className="divide-y divide-neutral-100">
              {org.cagnotteHistory.map((tx) => (
                <div key={tx.id} className="flex items-center justify-between px-5 py-3">
                  <div>
                    <p className="text-sm font-medium text-emerald-600">+{tx.amount.toFixed(2)}&euro;</p>
                    <p className="text-xs text-neutral-400 font-mono">#{tx.bookingRef}</p>
                  </div>
                  <span className="text-xs text-neutral-400">
                    {format(new Date(tx.createdAt), "dd MMM yyyy", { locale: dateFnsLocale })}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Favorite drivers */}
        <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden">
          <div className="px-5 py-4 border-b border-neutral-100">
            <div className="flex items-center gap-2">
              <Icon icon="solar:heart-linear" className="text-pink-500" />
              <h2 className="font-semibold text-sm">{t("favoriteDriversTitle")}</h2>
            </div>
          </div>
          {org.favoriteDrivers.length === 0 ? (
            <div className="px-5 py-8 text-center">
              <Icon icon="solar:heart-linear" className="text-3xl text-neutral-200 mx-auto mb-2" />
              <p className="text-sm text-neutral-400 font-light">{t("noFavoriteDrivers")}</p>
            </div>
          ) : (
            <div className="divide-y divide-neutral-100">
              {org.favoriteDrivers.map((d) => (
                <Link
                  key={d.id}
                  href={`/admin/chauffeurs/${d.id}`}
                  className="flex items-center gap-3 px-5 py-3 hover:bg-neutral-50 transition-colors"
                >
                  <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-xs font-semibold text-blue-600 shrink-0">
                    {d.firstName[0]}{d.lastName[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{d.firstName} {d.lastName}</p>
                  </div>
                  <span className={`w-2 h-2 rounded-full ${d.isActive ? "bg-green-500" : "bg-neutral-300"}`} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Recent bookings */}
      <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <Icon icon="solar:calendar-linear" className="text-amber-500" />
            <h2 className="font-semibold text-sm">{t("orgRecentBookings")}</h2>
          </div>
          <span className="text-xs text-neutral-400">{t("showingLast", { count: org.recentBookings.length })}</span>
        </div>
        {org.recentBookings.length === 0 ? (
          <div className="px-5 py-8 text-center">
            <Icon icon="solar:calendar-linear" className="text-3xl text-neutral-200 mx-auto mb-2" />
            <p className="text-sm text-neutral-400 font-light">{t("noBookings")}</p>
          </div>
        ) : (
          <div className="divide-y divide-neutral-100">
            {org.recentBookings.map((booking) => (
              <div
                key={booking.id}
                className="flex items-center gap-4 px-5 py-3.5 hover:bg-neutral-50 transition-colors"
              >
                <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${statusConfig[booking.status]?.dot || "bg-neutral-300"}`} />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-medium">{booking.beneficiaryName || booking.clientName}</p>
                    <span className="text-[11px] text-neutral-400 font-mono">#{booking.reference}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${statusConfig[booking.status]?.color || ""}`}>
                      {statusConfig[booking.status]?.label || booking.status}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 font-light truncate mt-0.5">
                    <Icon icon="solar:map-point-linear" className="inline text-neutral-300 mr-1" />
                    {booking.departureName} &rarr; {booking.arrivalName}
                  </p>
                </div>
                <div className="text-right shrink-0 hidden sm:block">
                  {booking.driverName && (
                    <p className="text-xs text-neutral-500 flex items-center gap-1 justify-end">
                      <Icon icon="solar:user-linear" className="text-neutral-300" />
                      {booking.driverName}
                    </p>
                  )}
                  {booking.lockedPrice != null && (
                    <p className="text-sm font-semibold">{booking.lockedPrice.toFixed(2)}&euro;</p>
                  )}
                  <p className="text-xs text-neutral-400">
                    {format(new Date(booking.createdAt), "dd MMM yyyy", { locale: dateFnsLocale })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
