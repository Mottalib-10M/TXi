"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useLocale, useTranslations } from "next-intl";

/** Ce qu'il faut pour proposer une course transmise à un collègue. */
export interface P2PShareRide {
  p2pToken: string;
  departureName: string;
  arrivalName: string;
  requestedDate: string;
  lockedPrice: number | null;
}

export function p2pAcceptLink(token: string) {
  const origin = typeof window !== "undefined" ? window.location.origin : "https://www.taxineo.fr";
  return `${origin}/p2p/accept?token=${token}`;
}

/** Message envoyé au collègue (WhatsApp, feuille de partage). */
export function p2pShareMessage(ride: P2PShareRide, driverFirstName: string, locale: string) {
  const date = new Date(ride.requestedDate).toLocaleDateString(locale === "en" ? "en-GB" : "fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  });
  const price = ride.lockedPrice != null ? `💰 ${ride.lockedPrice} €` : "";
  const lines = locale === "en"
    ? [`Hi,`, ``, `I'm offering you a ride via Taxineo:`, ``, `📍 ${ride.departureName} → ${ride.arrivalName}`, `📅 ${date}`, price, ``, `To accept it, tap here:`, p2pAcceptLink(ride.p2pToken), ``, `Sign-up takes less than 2 minutes if you don't have an account yet.`, ``, driverFirstName]
    : [`Salut,`, ``, `Je te propose une course via Taxineo :`, ``, `📍 ${ride.departureName} → ${ride.arrivalName}`, `📅 ${date}`, price, ``, `Pour accepter, clique ici :`, p2pAcceptLink(ride.p2pToken), ``, `Inscription en moins de 2 minutes si tu n'as pas encore de compte.`, ``, driverFirstName];
  return lines.filter((l, i) => l !== "" || lines[i - 1] !== "").join("\n");
}

/**
 * Boutons pour (re)proposer une course transmise : feuille de partage (app et
 * téléphones), WhatsApp, copie du lien. Utilisés à la création et dans la liste.
 */
export function P2PShareButtons({ ride, driverFirstName, compact = false }: { ride: P2PShareRide; driverFirstName: string; compact?: boolean }) {
  const t = useTranslations("dashboard.p2p");
  const locale = useLocale();
  const [copied, setCopied] = useState(false);
  const [canShare, setCanShare] = useState(false);
  useEffect(() => setCanShare(typeof navigator.share === "function"), []);

  const message = p2pShareMessage(ride, driverFirstName, locale);

  async function share() {
    try {
      await navigator.share({ text: message });
    } catch {
      // Partage annulé
    }
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(p2pAcceptLink(ride.p2pToken));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Presse-papiers refusé
    }
  }

  const base = compact
    ? "flex flex-1 min-w-0 items-center justify-center gap-1 rounded-xl px-1.5 py-2.5 text-xs font-semibold text-center leading-tight transition-colors"
    : "flex w-full items-center justify-center gap-2 rounded-xl py-3 font-semibold transition-colors";

  return (
    <div className={compact ? "flex gap-2" : "space-y-3"}>
      {canShare && (
        <button type="button" onClick={share} className={`${base} bg-violet-600 text-white hover:bg-violet-700`}>
          <Icon icon="solar:share-linear" className="text-lg shrink-0" />
          <span className={compact ? "min-w-0" : "truncate"}>{t("share")}</span>
        </button>
      )}
      <a
        href={`https://wa.me/?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} bg-green-600 text-white hover:bg-green-700`}
      >
        <Icon icon="mdi:whatsapp" className="text-lg shrink-0" />
        <span className={compact ? "min-w-0" : "truncate"}>{compact ? "WhatsApp" : t("shareWhatsApp")}</span>
      </a>
      <button type="button" onClick={copy} className={`${base} bg-neutral-900 text-white hover:bg-neutral-800`}>
        <Icon icon={copied ? "solar:check-circle-bold" : "solar:copy-linear"} className="text-lg shrink-0" />
        <span className={compact ? "min-w-0" : "truncate"}>{copied ? t("linkCopied") : t("copyLink")}</span>
      </button>
    </div>
  );
}
