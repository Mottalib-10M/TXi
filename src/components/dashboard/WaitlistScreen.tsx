"use client";

import { Icon } from "@iconify/react";
import { Link } from "@/i18n/navigation";
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

  const freeServices = [
    {
      label: t("freeServiceCard"),
      href: "/dashboard/carte" as const,
      icon: "solar:card-2-bold",
      bg: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      label: t("freeServiceProfile"),
      href: "/dashboard/profil-public" as const,
      icon: "solar:eye-bold",
      bg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      label: t("freeServiceQR"),
      href: `/taxi/${slug}` as "/dashboard",
      icon: "solar:qr-code-bold",
      bg: "bg-violet-50",
      iconColor: "text-violet-600",
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
        <div className="flex items-center gap-3 mb-3">
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

        {/* Referral progress */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-neutral-700">
              {t("referralProgress", { count: clampedCount })}
            </span>
            {clampedCount >= 2 && (
              <Icon icon="solar:check-circle-bold" className="text-green-500 text-lg" />
            )}
          </div>
          <div className="w-full h-2.5 bg-neutral-100 rounded-full overflow-hidden">
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

      {/* 4. Free services */}
      <div className="bg-white border border-neutral-200 rounded-2xl p-5">
        <h3 className="text-sm font-semibold text-neutral-900 mb-1">
          {t("waitlistFreeTitle")}
        </h3>
        <p className="text-xs text-neutral-500 font-light mb-3">
          {t("freeServicesDesc")}
        </p>
        <div className="grid grid-cols-3 gap-3">
          {freeServices.map((service) => (
            <Link
              key={service.label}
              href={service.href}
              className={`${service.bg} rounded-xl p-3 text-center hover:opacity-80 transition-opacity`}
            >
              <Icon
                icon={service.icon}
                className={`${service.iconColor} text-xl mx-auto mb-1`}
              />
              <span className="text-xs font-medium text-neutral-700 leading-tight block">
                {service.label}
              </span>
            </Link>
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
