"use client";

import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface WaitlistScreenProps {
  driverName: string;
  referralCode: string;
  referralCount: number;
  waitlistPosition: number;
  slug: string;
  hasCartePro: boolean;
}

export function WaitlistScreen({
  driverName,
  referralCode,
  referralCount,
  waitlistPosition,
  slug,
  hasCartePro,
}: WaitlistScreenProps) {
  const t = useTranslations("dashboard");
  const [copied, setCopied] = useState(false);

  const referralLink = `https://taxineo.fr/r/${referralCode}`;
  const clampedCount = Math.min(referralCount, 2);

  const whatsAppMessage = t("referralWhatsAppMsg", { link: referralLink });
  const whatsAppUrl = `https://wa.me/?text=${encodeURIComponent(whatsAppMessage)}`;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = referralLink;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  const perks = [
    {
      icon: "solar:smartphone-2-bold",
      color: "text-blue-600",
      bg: "bg-blue-50",
      iconBg: "bg-blue-100",
      title: t("perkBookingsTitle"),
      desc: t("perkBookingsDesc"),
    },
    {
      icon: "solar:hand-money-bold",
      color: "text-green-600",
      bg: "bg-green-50",
      iconBg: "bg-green-100",
      title: t("perkCommissionsTitle"),
      desc: t("perkCommissionsDesc"),
    },
    {
      icon: "solar:eye-bold",
      color: "text-violet-600",
      bg: "bg-violet-50",
      iconBg: "bg-violet-100",
      title: t("perkVisibilityTitle"),
      desc: t("perkVisibilityDesc"),
    },
    {
      icon: "solar:qr-code-bold",
      color: "text-amber-600",
      bg: "bg-amber-50",
      iconBg: "bg-amber-100",
      title: t("perkToolsTitle"),
      desc: t("perkToolsDesc"),
    },
  ];

  return (
    <div className="w-full max-w-lg space-y-5">
      {/* 1. Header */}
      <div className="text-center pt-4">
        <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
          <Icon icon="solar:shield-check-bold" className="text-amber-600 text-3xl" />
        </div>
        <h1 className="text-xl font-semibold text-neutral-900 mb-1">
          {t("waitlistTitle")}
        </h1>
        <p className="text-sm text-neutral-500 font-light">
          {t("waitlistSubtitle")}
        </p>
      </div>

      {/* 2. Position in queue */}
      <div className="bg-white border border-neutral-200 rounded-2xl p-5 text-center">
        <p className="text-4xl font-bold text-neutral-900 mb-1">
          {waitlistPosition}<sup className="text-lg">ème</sup>
        </p>
        <p className="text-sm text-neutral-500">
          {t("waitlistPosition", { position: waitlistPosition })}
        </p>
        {/* Decorative animated progress bar */}
        <div className="mt-4 w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden">
          <div className="h-full w-1/3 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full animate-shimmer" />
        </div>
      </div>

      {/* 3. Referral section */}
      <div className="bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200 rounded-2xl p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center shrink-0">
            <Icon icon="solar:rocket-2-bold" className="text-violet-600 text-xl" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-neutral-900">
              {t("referralTitle")}
            </h2>
            <p className="text-xs text-neutral-500 font-light">
              {t("referralDesc")}
            </p>
          </div>
        </div>

        {/* Visual person slots — clickable to share */}
        <div className="flex items-center justify-center gap-4 mb-4">
          {[0, 1].map((i) => {
            const filled = i < clampedCount;
            return (
              <button
                key={i}
                type="button"
                disabled={filled}
                onClick={async () => {
                  if (filled) return;
                  if (navigator.share) {
                    try {
                      await navigator.share({
                        title: t("referralShareTitle"),
                        text: whatsAppMessage,
                        url: referralLink,
                      });
                    } catch {
                      // user cancelled share
                    }
                  } else {
                    await handleCopy();
                  }
                }}
                className="flex flex-col items-center gap-1.5 group"
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ${
                    filled
                      ? "bg-green-100 border-2 border-green-400 scale-105"
                      : "bg-white border-2 border-dashed border-violet-300 group-hover:border-violet-500 group-hover:bg-violet-50 group-active:scale-95 cursor-pointer"
                  }`}
                >
                  <Icon
                    icon={filled ? "solar:user-check-bold" : "solar:user-plus-linear"}
                    className={`text-2xl ${filled ? "text-green-600" : "text-violet-400 group-hover:text-violet-600"}`}
                  />
                </div>
                <span className={`text-xs font-medium ${filled ? "text-green-600" : "text-violet-400 group-hover:text-violet-600"}`}>
                  {filled ? t("referralSlotFilled") : t("referralSlotEmpty")}
                </span>
              </button>
            );
          })}
        </div>

        {/* Progress bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-sm font-semibold text-violet-700">
              {t("referralProgress", { count: clampedCount })}
            </span>
            {clampedCount >= 2 && (
              <Icon icon="solar:check-circle-bold" className="text-green-500 text-lg" />
            )}
          </div>
          <div className="w-full h-2.5 bg-white/60 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full transition-all duration-500"
              style={{ width: `${(clampedCount / 2) * 100}%` }}
            />
          </div>
        </div>

        {/* Share buttons */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 text-white rounded-xl px-4 py-3 text-sm font-semibold hover:bg-green-700 transition-colors"
          >
            <Icon icon="mdi:whatsapp" className="text-lg" />
            {t("referralShareWhatsApp")}
          </a>
          <button
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 bg-neutral-900 text-white rounded-xl px-4 py-3 text-sm font-semibold hover:bg-neutral-800 transition-colors"
          >
            <Icon icon={copied ? "solar:check-read-linear" : "solar:copy-linear"} className="text-lg" />
            {copied ? t("referralCopied") : t("referralCopyLink")}
          </button>
        </div>

        {/* Referral link display */}
        <p className="text-center text-xs text-neutral-400 font-mono">
          taxineo.fr/r/{referralCode}
        </p>
      </div>

      {/* 4. What awaits you — premium preview grid */}
      <div className="rounded-2xl overflow-hidden border border-neutral-200">
        <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 px-5 py-4">
          <div className="flex items-center gap-2">
            <Icon icon="solar:star-shine-bold" className="text-amber-400 text-lg" />
            <h3 className="text-sm font-semibold text-white">
              {t("perksTitle")}
            </h3>
          </div>
          <p className="text-xs text-neutral-400 mt-1">
            {t("perksSubtitle")}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-px bg-neutral-200">
          {perks.map((perk) => (
            <div key={perk.title} className={`${perk.bg} p-4 flex flex-col items-center text-center`}>
              <div className={`w-11 h-11 ${perk.iconBg} rounded-2xl flex items-center justify-center mb-2.5`}>
                <Icon icon={perk.icon} className={`${perk.color} text-xl`} />
              </div>
              <p className="text-[13px] font-semibold text-neutral-900 mb-0.5">{perk.title}</p>
              <p className="text-[11px] text-neutral-500 font-light leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Footer */}
      <div className="flex items-center justify-center gap-4 pb-4">
        <a
          href="/api/auth/signout"
          className="text-sm text-neutral-400 hover:text-neutral-600 transition-colors"
        >
          {t("waitlistLogout")}
        </a>
      </div>
    </div>
  );
}
