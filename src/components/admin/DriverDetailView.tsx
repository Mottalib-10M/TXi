"use client";

import { useState } from "react";
import { useRouter } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import { Icon } from "@iconify/react";
import { format, formatDistanceToNow } from "date-fns";
import { enUS, fr } from "date-fns/locale";
import { useLocale, useTranslations } from "next-intl";

interface DriverData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  slug: string;
  photoUrl: string | null;
  bio: string | null;
  companyName: string | null;
  vehicle: string | null;
  vehicleColor: string | null;
  vehiclePlate: string | null;
  vehicleCapacity: number;
  zoneAddress: string | null;
  zoneRadius: number;
  baseFare: number;
  pricePerKm: number;
  minimumFare: number;
  carteProUrl: string | null;
  referralCount: number;
  referralCode: string | null;
  isActive: boolean;
  isVerified: boolean;
  emailVerified: boolean;
  lastLoginAt: string | null;
  loginCount: number;
  createdAt: string;
  totalBookings: number;
  completedBookings: number;
  totalRevenue: number;
  acceptanceRate: number;
  pendingBookings: number;
  bookingsByStatus: Record<string, number>;
  recentBookings: {
    id: string;
    reference: string;
    clientName: string;
    departureName: string;
    arrivalName: string;
    status: string;
    lockedPrice: number | null;
    requestedDate: string;
    createdAt: string;
    orgName: string | null;
  }[];
  referrals: {
    id: string;
    firstName: string;
    companyName: string | null;
    createdAt: string;
    isVerified: boolean;
    lastLoginAt: string | null;
  }[];
}

export function DriverDetailView({ driver }: { driver: DriverData }) {
  const t = useTranslations("admin");
  const locale = useLocale();
  const router = useRouter();
  const dateFnsLocale = locale === "en" ? enUS : fr;
  const [impersonating, setImpersonating] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [deleting, setDeleting] = useState(false);

  function openCarteProUrl(url: string) {
    if (url.startsWith("data:")) {
      // Data URIs are blocked by browsers with target="_blank"
      // Convert to blob URL first
      const [header, base64] = url.split(",");
      const mime = header.match(/data:(.*?);/)?.[1] || "application/octet-stream";
      const bytes = atob(base64);
      const arr = new Uint8Array(bytes.length);
      for (let i = 0; i < bytes.length; i++) arr[i] = bytes.charCodeAt(i);
      const blob = new Blob([arr], { type: mime });
      const blobUrl = URL.createObjectURL(blob);
      window.open(blobUrl, "_blank");
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }

  const statusConfig: Record<string, { label: string; color: string; dot: string }> = {
    PENDING: { label: t("statusPending"), color: "bg-amber-50 text-amber-700 ring-1 ring-amber-200", dot: "bg-amber-400" },
    ACCEPTED: { label: t("statusAccepted"), color: "bg-green-50 text-green-700 ring-1 ring-green-200", dot: "bg-green-500" },
    REJECTED: { label: t("statusRejected"), color: "bg-red-50 text-red-700 ring-1 ring-red-200", dot: "bg-red-400" },
    CANCELLED: { label: t("statusCancelled"), color: "bg-neutral-50 text-neutral-500 ring-1 ring-neutral-200", dot: "bg-neutral-400" },
    COMPLETED: { label: t("statusCompleted"), color: "bg-blue-50 text-blue-700 ring-1 ring-blue-200", dot: "bg-blue-500" },
  };

  async function impersonate() {
    setImpersonating(true);
    try {
      const res = await fetch("/api/admin/impersonate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ driverId: driver.id }),
      });
      if (res.ok) {
        router.push("/dashboard");
        router.refresh();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setImpersonating(false);
    }
  }

  async function toggleField(field: "isActive" | "isVerified", value: boolean) {
    setUpdating(true);
    try {
      await fetch(`/api/admin/drivers/${driver.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [field]: value }),
      });
      router.refresh();
    } catch (e) {
      console.error(e);
    } finally {
      setUpdating(false);
    }
  }

  async function deleteDriver() {
    if (!window.confirm(t("confirmDeleteDriver", { name: `${driver.firstName} ${driver.lastName}` }))) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/admin/drivers/${driver.id}`, { method: "DELETE" });
      if (res.ok) {
        router.push("/admin/chauffeurs");
        router.refresh();
      } else {
        alert(t("deleteError"));
      }
    } catch (e) {
      console.error(e);
      alert(t("deleteError"));
    } finally {
      setDeleting(false);
    }
  }

  return (
    <div>
      {/* Back link */}
      <Link
        href="/admin/chauffeurs"
        className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-900 transition-colors mb-4"
      >
        <Icon icon="solar:arrow-left-linear" />
        {t("backToDrivers")}
      </Link>

      {/* Unified profile card */}
      <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden mb-8">
        {/* Identity + Actions */}
        <div className="px-5 py-5 sm:px-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-lg font-bold text-blue-600 shrink-0">
                {driver.firstName[0]}{driver.lastName[0]}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-xl font-semibold">{driver.firstName} {driver.lastName}</h1>
                  <span
                    className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                      driver.isActive
                        ? "bg-green-50 text-green-700 ring-1 ring-green-200"
                        : "bg-neutral-100 text-neutral-500 ring-1 ring-neutral-200"
                    }`}
                  >
                    {driver.isActive ? t("active") : t("inactive")}
                  </span>
                  {driver.isVerified && (
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-violet-50 text-violet-700 ring-1 ring-violet-200">
                      {t("verified")}
                    </span>
                  )}
                  <span
                    className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                      driver.emailVerified
                        ? "bg-blue-50 text-blue-700 ring-1 ring-blue-200"
                        : "bg-amber-50 text-amber-700 ring-1 ring-amber-200"
                    }`}
                  >
                    {driver.emailVerified ? t("emailVerified") : t("emailNotVerified")}
                  </span>
                </div>
                {driver.companyName && (
                  <p className="text-sm text-neutral-500 mt-0.5">{driver.companyName}</p>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => toggleField("isActive", !driver.isActive)}
                disabled={updating}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors disabled:opacity-50 ${
                  driver.isActive
                    ? "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                    : "bg-green-50 text-green-700 hover:bg-green-100"
                }`}
              >
                {driver.isActive ? t("deactivate") : t("activate")}
              </button>
              <button
                onClick={() => toggleField("isVerified", !driver.isVerified)}
                disabled={updating}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors disabled:opacity-50 ${
                  driver.isVerified
                    ? "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                    : "bg-violet-50 text-violet-700 hover:bg-violet-100"
                }`}
              >
                {driver.isVerified ? t("removeVerification") : t("verify")}
              </button>
              <Link
                href={`/taxi/${driver.slug}`}
                target="_blank"
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors flex items-center gap-1"
              >
                <Icon icon="solar:eye-linear" />
                {t("publicPage")}
              </Link>
              <button
                onClick={impersonate}
                disabled={impersonating}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-50 text-amber-700 hover:bg-amber-100 transition-colors flex items-center gap-1 disabled:opacity-50"
              >
                <Icon icon="solar:square-arrow-right-linear" />
                {impersonating ? "..." : t("loginAs")}
              </button>
              <button
                onClick={deleteDriver}
                disabled={deleting}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-red-50 text-red-700 hover:bg-red-100 transition-colors flex items-center gap-1 disabled:opacity-50"
              >
                <Icon icon="solar:trash-bin-minimalistic-linear" />
                {deleting ? "..." : t("deleteDriverLong")}
              </button>
            </div>
          </div>
        </div>

        {/* KPI Stats */}
        <div className="border-t border-neutral-100 px-5 py-4 sm:px-6 bg-neutral-50/50">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-x-6 gap-y-3">
            <div className="text-center">
              <p className="text-lg font-bold leading-none">{driver.totalBookings}</p>
              <p className="text-[11px] text-neutral-400 mt-1">{t("kpiTotalBookings")}</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold leading-none">{driver.totalRevenue.toFixed(0)}<span className="text-xs ml-0.5">&euro;</span></p>
              <p className="text-[11px] text-neutral-400 mt-1">{t("kpiRevenue")}</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold leading-none">{driver.acceptanceRate}<span className="text-xs ml-0.5">%</span></p>
              <p className="text-[11px] text-neutral-400 mt-1">{t("kpiAcceptanceRate")}</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold leading-none">{driver.pendingBookings}</p>
              <p className="text-[11px] text-neutral-400 mt-1">{t("kpiPending")}</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold leading-none">{driver.loginCount}</p>
              <p className="text-[11px] text-neutral-400 mt-1">{t("kpiConnections")}</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold leading-none">
                {driver.lastLoginAt
                  ? formatDistanceToNow(new Date(driver.lastLoginAt), { addSuffix: true, locale: dateFnsLocale })
                  : t("neverConnected")}
              </p>
              <p className="text-[11px] text-neutral-400 mt-1">{t("kpiLastLogin")}</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold leading-none">{driver.referralCount}</p>
              <p className="text-[11px] text-neutral-400 mt-1">
                {t("kpiReferrals")}
                {driver.referralCode && <span className="font-mono ml-1 text-neutral-300">{driver.referralCode}</span>}
              </p>
            </div>
          </div>
        </div>

        {/* Profile info */}
        <div className="border-t border-neutral-100 px-5 py-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2.5 text-sm">
            <div className="flex items-center gap-2">
              <Icon icon="solar:letter-linear" className="text-neutral-400 shrink-0 text-base" />
              <span className="text-neutral-600 truncate">{driver.email}</span>
            </div>
            {driver.phone && (
              <div className="flex items-center gap-2">
                <Icon icon="solar:phone-linear" className="text-neutral-400 shrink-0 text-base" />
                <a href={`tel:${driver.phone}`} className="text-neutral-600 hover:text-neutral-900">{driver.phone}</a>
              </div>
            )}
            {driver.vehicle && (
              <div className="flex items-center gap-2">
                <Icon icon="mdi:car-outline" className="text-neutral-400 shrink-0 text-base" />
                <span className="text-neutral-600 truncate">
                  {driver.vehicle}
                  {driver.vehicleColor ? ` (${driver.vehicleColor})` : ""}
                  {driver.vehiclePlate ? ` - ${driver.vehiclePlate}` : ""}
                </span>
              </div>
            )}
            {driver.zoneAddress && (
              <div className="flex items-center gap-2">
                <Icon icon="solar:map-point-linear" className="text-neutral-400 shrink-0 text-base" />
                <span className="text-neutral-600 truncate">{driver.zoneAddress} ({driver.zoneRadius} km)</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Icon icon="solar:tag-price-linear" className="text-neutral-400 shrink-0 text-base" />
              <span className="text-neutral-600">
                {t("pricingInfo", {
                  base: driver.baseFare.toFixed(2).replace(".", ","),
                  km: driver.pricePerKm.toFixed(2).replace(".", ","),
                  min: driver.minimumFare.toFixed(2).replace(".", ","),
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="solar:calendar-add-linear" className="text-neutral-400 shrink-0 text-base" />
              <span className="text-neutral-600">
                {t("registeredOn", { date: format(new Date(driver.createdAt), "dd MMM yyyy", { locale: dateFnsLocale }) })}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Carte professionnelle */}
      <div className="bg-white border border-neutral-200 rounded-2xl p-5 mb-8">
        <h2 className="text-sm font-semibold mb-4 flex items-center gap-2">
          <Icon icon="solar:document-medicine-linear" className="text-neutral-400" />
          {t("carteProTitle")}
        </h2>
        {driver.carteProUrl ? (
          <div>
            {driver.carteProUrl.includes("application/pdf") || driver.carteProUrl.endsWith(".pdf") ? (
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                  <Icon icon="solar:file-text-bold" className="text-red-500 text-lg" />
                </div>
                <div>
                  <p className="text-sm font-medium">{t("carteProPdf")}</p>
                  <button
                    onClick={() => openCarteProUrl(driver.carteProUrl!)}
                    className="text-xs text-blue-600 hover:underline"
                  >
                    {t("downloadFullSize")}
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-2 mb-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={driver.carteProUrl}
                  alt={t("carteProTitle")}
                  className="w-full max-w-sm rounded-xl border border-neutral-200"
                />
                <button
                  onClick={() => openCarteProUrl(driver.carteProUrl!)}
                  className="text-xs text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  <Icon icon="solar:magnifer-linear" className="text-xs" />
                  {t("downloadFullSize")}
                </button>
              </div>
            )}
            <p className="text-xs text-neutral-400 mb-3">{t("carteProReviewHint")}</p>
            {!driver.isVerified && (
              <button
                onClick={() => toggleField("isVerified", true)}
                disabled={updating}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition-colors disabled:opacity-50 flex items-center gap-2"
              >
                <Icon icon="solar:shield-check-bold" />
                {t("approveDriver")}
              </button>
            )}
          </div>
        ) : (
          <p className="text-sm text-neutral-400 font-light">{t("noCartePro")}</p>
        )}
      </div>

      {/* Filleuls (Referrals) */}
      {driver.referrals.length > 0 && (
        <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden mb-8">
          <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100">
            <div className="flex items-center gap-2">
              <Icon icon="solar:users-group-rounded-linear" className="text-violet-500" />
              <h2 className="font-semibold text-sm">{t("referralsSection")}</h2>
            </div>
            <span className="text-xs text-neutral-400">{driver.referrals.length}</span>
          </div>
          <div className="divide-y divide-neutral-100">
            {driver.referrals.map((ref) => (
              <Link
                key={ref.id}
                href={`/admin/chauffeurs/${ref.id}` as "/admin/chauffeurs/[id]"}
                className="flex items-center gap-4 px-5 py-3.5 hover:bg-neutral-50 transition-colors"
              >
                <div className="w-9 h-9 bg-violet-50 rounded-xl flex items-center justify-center text-sm font-bold text-violet-600 shrink-0">
                  {ref.firstName[0]}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-medium">{ref.companyName || ref.firstName}</p>
                    {ref.isVerified && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-violet-50 text-violet-700 ring-1 ring-violet-200">
                        {t("verified")}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-neutral-400 font-light mt-0.5">
                    {t("referralJoinedOn", { date: format(new Date(ref.createdAt), "dd MMM yyyy", { locale: dateFnsLocale }) })}
                  </p>
                </div>
                <div className="text-right shrink-0 hidden sm:block">
                  <p className="text-xs text-neutral-400">
                    {ref.lastLoginAt
                      ? formatDistanceToNow(new Date(ref.lastLoginAt), { addSuffix: true, locale: dateFnsLocale })
                      : t("neverConnected")}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Recent bookings */}
      <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <Icon icon="solar:calendar-linear" className="text-amber-500" />
            <h2 className="font-semibold text-sm">{t("driverRecentBookings")}</h2>
          </div>
          <span className="text-xs text-neutral-400">{t("showingLast", { count: driver.recentBookings.length })}</span>
        </div>
        {driver.recentBookings.length === 0 ? (
          <div className="px-5 py-8 text-center">
            <Icon icon="solar:calendar-linear" className="text-3xl text-neutral-200 mx-auto mb-2" />
            <p className="text-sm text-neutral-400 font-light">{t("noBookings")}</p>
          </div>
        ) : (
          <div className="divide-y divide-neutral-100">
            {driver.recentBookings.map((booking) => (
              <div
                key={booking.id}
                className="flex items-center gap-4 px-5 py-3.5 hover:bg-neutral-50 transition-colors"
              >
                <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${statusConfig[booking.status]?.dot || "bg-neutral-300"}`} />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-medium">{booking.clientName}</p>
                    <span className="text-[11px] text-neutral-400 font-mono">#{booking.reference}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${statusConfig[booking.status]?.color || ""}`}>
                      {statusConfig[booking.status]?.label || booking.status}
                    </span>
                    {booking.orgName && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-50 text-violet-600 ring-1 ring-violet-200">
                        {booking.orgName}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-neutral-400 font-light truncate mt-0.5">
                    <Icon icon="solar:map-point-linear" className="inline text-neutral-300 mr-1" />
                    {booking.departureName} &rarr; {booking.arrivalName}
                  </p>
                </div>
                <div className="text-right shrink-0 hidden sm:block">
                  {booking.lockedPrice != null && (
                    <p className="text-sm font-semibold">{booking.lockedPrice.toFixed(2).replace(".", ",")}&euro;</p>
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
