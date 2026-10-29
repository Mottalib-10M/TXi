"use client";

// « Prévenir un collègue » sur une alerte du Radar : le message est prêt, avec le lien
// de parrainage du chauffeur. Feuille de partage du téléphone, sinon WhatsApp.

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

export function RadarShareButton({ title, body, referralCode }: { title: string; body: string; referralCode: string | null }) {
  const t = useTranslations("radar");
  const [canShare, setCanShare] = useState(false);
  useEffect(() => setCanShare(typeof navigator.share === "function"), []);

  const link = referralCode ? `https://www.taxineo.fr/r/${referralCode}` : "https://www.taxineo.fr";
  const message = `${title}. ${body}\n\n${t("shareInvite")} ${link}`;
  const className = "inline-flex items-center gap-1.5 h-9 px-3 rounded-xl border border-neutral-200 bg-white text-sm font-medium text-neutral-800 hover:bg-neutral-50";

  if (canShare) {
    return (
      <button type="button" className={className} onClick={() => navigator.share({ text: message }).catch(() => undefined)}>
        <Icon icon="solar:share-linear" className="text-base" />
        {t("share")}
      </button>
    );
  }
  return (
    <a className={className} href={`https://wa.me/?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer">
      <Icon icon="mdi:whatsapp" className="text-base" />
      {t("share")}
    </a>
  );
}
