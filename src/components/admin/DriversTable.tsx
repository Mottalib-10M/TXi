"use client";

import { useState, useMemo } from "react";
import { useRouter } from "@/i18n/navigation";
import { Icon } from "@iconify/react";
import { format, formatDistanceToNow } from "date-fns";
import { enUS, fr } from "date-fns/locale";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import QRCode from "qrcode";

interface Driver {
  id: string;
  firstName: string;
  lastName: string;
  companyName: string | null;
  email: string;
  phone: string;
  slug: string;
  vehicle: string | null;
  vehicleBrand: string | null;
  vehicleModel: string | null;
  zone: string | null;
  isActive: boolean;
  isVerified: boolean;
  emailVerified: boolean;
  lastLoginAt: string | null;
  loginCount: number;
  bookingsCount: number;
  createdAt: string;
}

export function DriversTable({ drivers }: { drivers: Driver[] }) {
  const t = useTranslations("admin");
  const locale = useLocale();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [updating, setUpdating] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [impersonating, setImpersonating] = useState<string | null>(null);

  function extractCity(zone: string | null): string {
    if (!zone) return t("notSpecified");
    return zone.split(/\s*[-,]\s*/)[0].trim() || t("notSpecified");
  }

  const filtered = useMemo(() => {
    return drivers.filter((d) => {
      const q = search.toLowerCase();
      return (
        d.firstName.toLowerCase().includes(q) ||
        d.lastName.toLowerCase().includes(q) ||
        d.email.toLowerCase().includes(q) ||
        (d.zone?.toLowerCase().includes(q) ?? false)
      );
    });
  }, [drivers, search]);

  // Group by city
  const grouped = useMemo(() => {
    const notSpecifiedLabel = t("notSpecified");
    const map = new Map<string, Driver[]>();
    for (const d of filtered) {
      const city = extractCity(d.zone);
      if (!map.has(city)) map.set(city, []);
      map.get(city)!.push(d);
    }
    // Sort: cities with most drivers first, "Non renseignée" always last
    return Array.from(map.entries()).sort(([a, driversA], [b, driversB]) => {
      if (a === notSpecifiedLabel) return 1;
      if (b === notSpecifiedLabel) return -1;
      return driversB.length - driversA.length;
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtered, t]);

  const cities = useMemo(() => grouped.map(([city]) => city), [grouped]);

  const displayedGroups = selectedCity
    ? grouped.filter(([city]) => city === selectedCity)
    : grouped;

  async function impersonate(driverId: string) {
    setImpersonating(driverId);
    try {
      const res = await fetch("/api/admin/impersonate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ driverId }),
      });
      if (res.ok) {
        router.push("/dashboard");
        router.refresh();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setImpersonating(null);
    }
  }

  async function toggleField(driverId: string, field: "isActive" | "isVerified", value: boolean) {
    setUpdating(driverId);
    try {
      await fetch(`/api/admin/drivers/${driverId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [field]: value }),
      });
      router.refresh();
    } catch (e) {
      console.error(e);
    } finally {
      setUpdating(null);
    }
  }

  async function printQrLabel(driver: Driver) {
    const profileUrl = `https://taxineo.fr/taxi/${driver.slug}`;
    const qrDataUrl = await QRCode.toDataURL(profileUrl, {
      width: 300,
      margin: 0,
      color: { dark: "#171717", light: "#ffffff" },
    });
    const { jsPDF } = await import("jspdf");
    const W = 50, H = 30;
    const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: [W, H] });

    // QR code — left, vertically centered
    const qrSize = 24;
    const qrX = 2;
    const qrY = (H - qrSize) / 2;
    doc.addImage(qrDataUrl, "PNG", qrX, qrY, qrSize, qrSize);

    // Text block — right side
    const textX = qrX + qrSize + 2.5;
    // Company name (or driver name fallback), truncated to 10 chars
    const displayName = (driver.companyName || `${driver.firstName} ${driver.lastName}`).slice(0, 10);

    // TaxiNeo — top
    let y = 7;
    doc.setFontSize(9); doc.setFont("helvetica", "bold");
    doc.setTextColor(115, 115, 115); doc.text("Taxi", textX, y);
    const tw = doc.getTextWidth("Taxi");
    doc.setTextColor(23, 23, 23); doc.text("Neo", textX + tw, y);

    // Company/taxi name — same size as TaxiNeo
    y += 5.5;
    doc.setFontSize(9); doc.setFont("helvetica", "bold"); doc.setTextColor(23, 23, 23);
    doc.text(displayName, textX, y);

    // Vehicle — brand then model on next line
    if (driver.vehicleBrand) {
      y += 4.5;
      doc.setFontSize(6.5); doc.setFont("helvetica", "normal"); doc.setTextColor(100, 100, 100);
      doc.text(driver.vehicleBrand, textX, y);
      if (driver.vehicleModel) {
        y += 3;
        doc.text(driver.vehicleModel, textX, y);
      }
      y += 4;
    } else {
      y += 5;
    }

    // CTA — italic, big
    doc.setFontSize(7); doc.setFont("helvetica", "bolditalic"); doc.setTextColor(23, 23, 23);
    doc.text("Voir ma fiche !", textX, y);

    // Taxi badge — bottom right
    const badgeW = 10;
    const badgeH = 4;
    const badgeX = W - badgeW - 1.5;
    const badgeY = H - badgeH - 1.5;
    doc.setFillColor(23, 23, 23);
    doc.roundedRect(badgeX, badgeY, badgeW, badgeH, 1, 1, "F");
    doc.setFontSize(5.5); doc.setFont("helvetica", "bold"); doc.setTextColor(255, 255, 255);
    doc.text("TAXI", badgeX + badgeW / 2, badgeY + badgeH / 2 + 1, { align: "center" });

    doc.save(`qr-label-${driver.slug}.pdf`);
  }

  const notSpecifiedLabel = t("notSpecified");
  const dateFnsLocale = locale === "en" ? enUS : fr;

  function activityStatus(lastLoginAt: string | null): { color: string; label: string } {
    if (!lastLoginAt) return { color: "bg-neutral-300", label: t("neverConnected") };
    const diff = Date.now() - new Date(lastLoginAt).getTime();
    const days = diff / (1000 * 60 * 60 * 24);
    if (days < 7) return { color: "bg-green-500", label: t("recentlyActive") };
    if (days < 30) return { color: "bg-amber-400", label: t("activeThisMonth") };
    return { color: "bg-red-400", label: t("inactiveLong") };
  }

  return (
    <div>
      {/* Search */}
      <div className="relative mb-4">
        <Icon icon="solar:magnifer-linear" className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t("searchDrivers")}
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-neutral-400 transition-colors"
        />
      </div>

      {/* City filter pills */}
      {cities.length > 1 && (
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedCity(null)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
              selectedCity === null
                ? "bg-neutral-900 text-white"
                : "bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-300"
            }`}
          >
            {t("allCities")}
            <span className="ml-1.5 opacity-60">({filtered.length})</span>
          </button>
          {cities.map((city) => {
            const count = grouped.find(([c]) => c === city)?.[1].length || 0;
            return (
              <button
                key={city}
                onClick={() => setSelectedCity(selectedCity === city ? null : city)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                  selectedCity === city
                    ? "bg-neutral-900 text-white"
                    : "bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-300"
                }`}
              >
                <Icon icon="solar:map-point-linear" className="text-sm" />
                {city}
                <span className="opacity-60">({count})</span>
              </button>
            );
          })}
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="bg-white border border-neutral-200 rounded-2xl p-12 text-center">
          <Icon icon="solar:user-cross-linear" className="text-4xl text-neutral-300 mx-auto mb-3" />
          <p className="text-sm text-neutral-500 font-light">{t("noDriversFound")}</p>
        </div>
      ) : (
        <div className="space-y-8">
          {displayedGroups.map(([city, cityDrivers]) => (
            <div key={city}>
              {/* City header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center gap-2 bg-white border border-neutral-200 rounded-xl px-4 py-2">
                  <Icon
                    icon={city === notSpecifiedLabel ? "solar:map-point-wave-linear" : "solar:map-point-bold"}
                    className={city === notSpecifiedLabel ? "text-neutral-400" : "text-blue-500"}
                  />
                  <span className="text-sm font-semibold">{city}</span>
                  <span className="text-xs text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-full">
                    {cityDrivers.length}
                  </span>
                </div>
                <div className="flex-1 h-px bg-neutral-200" />
              </div>

              {/* Drivers in this city */}
              <div className="space-y-3">
                {cityDrivers.map((driver) => (
                  <div
                    key={driver.id}
                    className="bg-white border border-neutral-200 rounded-2xl p-4 sm:p-5"
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <div className="relative w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-xs font-semibold text-blue-600 shrink-0">
                        {driver.firstName[0]}{driver.lastName[0]}
                        <span
                          className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${activityStatus(driver.lastLoginAt).color}`}
                          title={activityStatus(driver.lastLoginAt).label}
                        />
                      </div>
                      <Link
                        href={`/admin/chauffeurs/${driver.id}`}
                        className="text-sm font-semibold hover:text-blue-600 transition-colors"
                      >
                        {driver.firstName} {driver.lastName}
                      </Link>
                      <span
                        className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                          driver.isActive
                            ? "bg-green-50 text-green-700 ring-1 ring-green-200"
                            : "bg-neutral-100 text-neutral-500 ring-1 ring-neutral-200"
                        }`}
                      >
                        {driver.isActive ? t("active") : t("inactive")}
                      </span>
                      <span
                        className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                          driver.emailVerified
                            ? "bg-blue-50 text-blue-700 ring-1 ring-blue-200"
                            : "bg-amber-50 text-amber-700 ring-1 ring-amber-200"
                        }`}
                      >
                        {driver.emailVerified ? t("emailVerified") : t("emailNotVerified")}
                      </span>
                      {driver.isVerified && (
                        <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-violet-50 text-violet-700 ring-1 ring-violet-200">
                          {t("verified")}
                        </span>
                      )}
                    </div>

                    {/* Details */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Icon icon="solar:letter-linear" className="text-neutral-400" />
                        {driver.email}
                      </span>
                      {driver.phone && (
                        <span className="flex items-center gap-1">
                          <Icon icon="solar:phone-linear" className="text-neutral-400" />
                          {driver.phone}
                        </span>
                      )}
                      {driver.vehicle && (
                        <span className="flex items-center gap-1">
                          <Icon icon="mdi:car-outline" className="text-neutral-400" />
                          {driver.vehicle}
                        </span>
                      )}
                      {driver.zone && (
                        <span className="flex items-center gap-1">
                          <Icon icon="solar:map-point-linear" className="text-neutral-400" />
                          {driver.zone}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Icon icon="solar:calendar-linear" className="text-neutral-400" />
                        {t("ridesCount", { count: driver.bookingsCount })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon icon="solar:square-arrow-right-linear" className="text-neutral-400" />
                        {t("connectionsCount", { count: driver.loginCount })}
                      </span>
                      {driver.lastLoginAt && (
                        <span className="flex items-center gap-1" title={format(new Date(driver.lastLoginAt), "dd MMM yyyy HH:mm", { locale: dateFnsLocale })}>
                          <Icon icon="solar:clock-circle-linear" className="text-neutral-400" />
                          {t("lastSeen", { time: formatDistanceToNow(new Date(driver.lastLoginAt), { addSuffix: true, locale: dateFnsLocale }) })}
                        </span>
                      )}
                      <span className="text-neutral-400">
                        {t("registeredOn", { date: format(new Date(driver.createdAt), "dd MMM yyyy", { locale: dateFnsLocale }) })}
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-neutral-100">
                      <button
                        onClick={() => toggleField(driver.id, "isActive", !driver.isActive)}
                        disabled={updating === driver.id}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors disabled:opacity-50 ${
                          driver.isActive
                            ? "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                            : "bg-green-50 text-green-700 hover:bg-green-100"
                        }`}
                      >
                        {driver.isActive ? t("deactivate") : t("activate")}
                      </button>
                      <button
                        onClick={() => toggleField(driver.id, "isVerified", !driver.isVerified)}
                        disabled={updating === driver.id}
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
                        onClick={() => impersonate(driver.id)}
                        disabled={impersonating === driver.id}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-50 text-amber-700 hover:bg-amber-100 transition-colors flex items-center gap-1 disabled:opacity-50"
                      >
                        <Icon icon="solar:square-arrow-right-linear" />
                        {impersonating === driver.id ? "..." : t("loginAs")}
                      </button>
                      <button
                        onClick={() => printQrLabel(driver)}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-50 text-neutral-700 hover:bg-neutral-100 transition-colors flex items-center gap-1 border border-neutral-200"
                      >
                        <Icon icon="solar:qr-code-linear" />
                        QR 50×30
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
