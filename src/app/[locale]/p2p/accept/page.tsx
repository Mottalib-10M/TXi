"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

interface BookingInfo {
  id: string;
  departureName: string;
  arrivalName: string;
  requestedDate: string;
  lockedPrice: number | null;
  estimatedDistance: number | null;
  p2pCommissionRate: number | null;
  p2pCommissionAmount: number | null;
  referrerDriverName: string;
  alreadyAccepted: boolean;
  status: string;
}

interface AcceptedData {
  booking: {
    reference: string;
    clientName: string;
    clientPhone: string;
    departureName: string;
    arrivalName: string;
    requestedDate: string;
    lockedPrice: number | null;
  };
  driver: {
    firstName: string;
    lastName: string;
    phone: string;
  };
}

function normalizePhone(phone: string): string {
  let cleaned = phone.replace(/[\s\-().+]/g, "");
  if (cleaned.startsWith("0") && cleaned.length === 10) {
    cleaned = "33" + cleaned.slice(1);
  }
  return cleaned;
}

export default function P2PAcceptPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const t = useTranslations("p2pAccept");

  const [booking, setBooking] = useState<BookingInfo | null>(null);
  const [needsAuth, setNeedsAuth] = useState(false);
  const [driverFirstName, setDriverFirstName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [accepting, setAccepting] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [acceptedData, setAcceptedData] = useState<AcceptedData | null>(null);

  useEffect(() => {
    if (!token) {
      setError(t("invalidLink"));
      setLoading(false);
      return;
    }

    fetch(`/api/p2p/accept?token=${token}`)
      .then(async (res) => {
        if (!res.ok) {
          const data = await res.json();
          setError(data.error || t("rideNotFound"));
          return;
        }
        const data = await res.json();
        setBooking(data.booking);
        setNeedsAuth(data.needsAuth);
        setDriverFirstName(data.driverFirstName ?? null);
      })
      .catch(() => setError(t("loadError")))
      .finally(() => setLoading(false));
  }, [token, t]);

  async function handleAccept() {
    if (!token) return;
    setAccepting(true);
    setError("");

    try {
      const res = await fetch("/api/p2p/accept", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || t("acceptError"));
        return;
      }

      setAccepted(true);
      if (data.booking && data.driver) {
        setAcceptedData({ booking: data.booking, driver: data.driver });
      }
    } catch {
      setError(t("acceptError"));
    } finally {
      setAccepting(false);
    }
  }

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function buildClientWhatsAppUrl() {
    if (!acceptedData) return "#";
    const { booking: b, driver: d } = acceptedData;
    const message = [
      `Bonjour ${b.clientName},`,
      ``,
      `Je suis ${d.firstName} ${d.lastName}, votre nouveau chauffeur pour la course ${b.reference} du ${formatDate(b.requestedDate)}.`,
      ``,
      `Pour toute question, n'hésitez pas à me contacter au ${d.phone}.`,
      ``,
      `Merci et au plaisir d'assurer votre voyage.`,
    ].join("\n");
    return `https://wa.me/${normalizePhone(b.clientPhone)}?text=${encodeURIComponent(message)}`;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <Icon icon="solar:refresh-circle-linear" className="animate-spin text-3xl text-neutral-400" />
      </div>
    );
  }

  if (error && !booking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50 p-4">
        <div className="bg-white rounded-2xl border border-neutral-200 p-6 max-w-md w-full text-center">
          <Icon icon="solar:danger-triangle-linear" className="text-4xl text-red-400 mx-auto mb-3" />
          <p className="text-neutral-700">{error}</p>
        </div>
      </div>
    );
  }

  if (!booking) return null;

  const redirectPath = `/p2p/accept?token=${token}`;

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl border border-neutral-200 p-6 max-w-md w-full">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
            accepted ? "bg-green-100" : booking.alreadyAccepted ? "bg-neutral-100" : "bg-amber-100"
          }`}>
            <Icon
              icon={accepted ? "solar:check-circle-bold" : booking.alreadyAccepted ? "solar:check-circle-bold" : "solar:users-group-two-rounded-linear"}
              className={`text-xl ${accepted ? "text-green-600" : booking.alreadyAccepted ? "text-neutral-400" : "text-amber-600"}`}
            />
          </div>
          <div>
            <h1 className="font-semibold text-lg">
              {accepted ? t("rideAccepted") : booking.alreadyAccepted ? t("alreadyTaken") : t("rideProposal")}
            </h1>
            <p className="text-sm text-neutral-500">
              {t("sharedBy", { name: booking.referrerDriverName })}
            </p>
          </div>
        </div>

        {/* Ride info */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-sm">
            <Icon icon="solar:map-point-linear" className="text-neutral-400 shrink-0" />
            <span className="font-medium">{booking.departureName}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Icon icon="solar:flag-linear" className="text-neutral-400 shrink-0" />
            <span className="font-medium">{booking.arrivalName}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Icon icon="solar:calendar-linear" className="text-neutral-400 shrink-0" />
            <span>{formatDate(booking.requestedDate)}</span>
          </div>
          {booking.lockedPrice != null && (
            <div className="flex items-center gap-2 text-sm">
              <Icon icon="solar:tag-price-linear" className="text-neutral-400 shrink-0" />
              <span className="font-semibold text-lg">{booking.lockedPrice} €</span>
            </div>
          )}
          {booking.estimatedDistance != null && (
            <div className="flex items-center gap-2 text-sm">
              <Icon icon="solar:route-linear" className="text-neutral-400 shrink-0" />
              <span>{Math.round(booking.estimatedDistance * 10) / 10} km</span>
            </div>
          )}
          {booking.p2pCommissionAmount != null && (
            <div className="flex items-center gap-2 text-sm">
              <Icon icon="solar:hand-money-linear" className="text-neutral-400 shrink-0" />
              <span>{t("commission")} : {booking.p2pCommissionAmount} € ({Math.round((booking.p2pCommissionRate || 0) * 100)}%)</span>
            </div>
          )}
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 mb-4">
            {error}
          </div>
        )}

        {/* Actions */}
        {accepted ? (
          <div className="space-y-3">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
              <Icon icon="solar:check-circle-bold" className="text-green-600 text-3xl mx-auto mb-2" />
              <p className="text-sm font-medium text-green-800">{t("acceptedMessage")}</p>
            </div>
            {acceptedData && (
              <a
                href={buildClientWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-600 text-white font-semibold py-3 rounded-xl hover:bg-green-700 transition-colors"
              >
                <Icon icon="mdi:whatsapp" className="text-lg" />
                {t("contactClient")}
              </a>
            )}
            <Link
              href="/dashboard"
              className="flex items-center justify-center gap-2 w-full border border-neutral-200 text-neutral-700 font-medium py-3 rounded-xl hover:bg-neutral-50 transition-colors"
            >
              <Icon icon="solar:arrow-right-linear" className="text-sm" />
              {t("goToDashboard")}
            </Link>
          </div>
        ) : booking.alreadyAccepted ? (
          <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4 text-center">
            <p className="text-sm text-neutral-600">
              {driverFirstName
                ? t("alreadyTakenMessagePersonal", { firstName: driverFirstName })
                : t("alreadyTakenMessage")}
            </p>
          </div>
        ) : needsAuth ? (
          <div className="space-y-3">
            <p className="text-sm text-neutral-600 text-center mb-4">{t("loginRequired")}</p>
            <Link
              href={`/connexion?redirect=${encodeURIComponent(redirectPath)}` as "/connexion"}
              className="flex items-center justify-center gap-2 w-full bg-neutral-900 text-white font-semibold py-3 rounded-xl hover:bg-neutral-800 transition-colors"
            >
              <Icon icon="solar:login-linear" className="text-lg" />
              {t("login")}
            </Link>
            <Link
              href={`/inscription?type=driver&redirect=${encodeURIComponent(redirectPath)}` as "/inscription"}
              className="flex items-center justify-center gap-2 w-full border border-neutral-200 text-neutral-700 font-medium py-3 rounded-xl hover:bg-neutral-50 transition-colors"
            >
              <Icon icon="solar:user-plus-linear" className="text-lg" />
              {t("signup")}
            </Link>
          </div>
        ) : (
          <button
            onClick={handleAccept}
            disabled={accepting}
            className="w-full bg-green-600 text-white font-semibold py-3.5 rounded-xl hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {accepting ? t("acceptingRide") : t("acceptRide")}
          </button>
        )}
      </div>
    </div>
  );
}
