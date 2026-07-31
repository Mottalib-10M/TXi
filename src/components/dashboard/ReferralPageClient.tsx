"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { useTranslations, useLocale } from "next-intl";
import { format, formatDistanceToNow } from "date-fns";
import { enUS, fr } from "date-fns/locale";

interface ReferralPageClientProps {
  referralCode: string;
  referralCount: number;
  referrals: {
    id: string;
    firstName: string;
    companyName: string | null;
    createdAt: string;
    isVerified: boolean;
    lastLoginAt: string | null;
  }[];
}

export function ReferralPageClient({
  referralCode,
  referralCount,
  referrals,
}: ReferralPageClientProps) {
  const t = useTranslations("dashboard");
  const locale = useLocale();
  const dateFnsLocale = locale === "en" ? enUS : fr;
  const [copied, setCopied] = useState(false);

  const referralLink = `https://taxineo.fr/r/${referralCode}`;
  const whatsAppMessage = t("referralWhatsAppMsg", { link: referralLink });
  const whatsAppUrl = `https://wa.me/?text=${encodeURIComponent(whatsAppMessage)}`;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
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

  const verifiedCount = referrals.filter((r) => r.isVerified).length;

  return (
    <div className="min-w-0">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight mb-1">
          {t("referralPageTitle")}
        </h1>
        <p className="text-sm text-neutral-500 font-light">
          {t("referralPageSubtitle")}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-white border border-neutral-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-1">
            <Icon icon="solar:users-group-rounded-linear" className="text-violet-500 text-base" />
            <span className="text-xs text-neutral-500">{t("referralPageTotalReferrals")}</span>
          </div>
          <p className="text-2xl font-bold text-neutral-900">{referrals.length}</p>
        </div>
        <div className="bg-white border border-neutral-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-1">
            <Icon icon="solar:shield-check-linear" className="text-green-500 text-base" />
            <span className="text-xs text-neutral-500">{t("referralPageVerifiedReferrals")}</span>
          </div>
          <p className="text-2xl font-bold text-neutral-900">{verifiedCount}</p>
        </div>
        <div className="bg-white border border-neutral-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-1">
            <Icon icon="solar:cursor-bold" className="text-blue-500 text-base" />
            <span className="text-xs text-neutral-500">{t("referralPageLinkClicks")}</span>
          </div>
          <p className="text-2xl font-bold text-neutral-900">{referralCount}</p>
        </div>
      </div>

      {/* Share section */}
      <div className="bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200 rounded-2xl p-5 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center shrink-0">
            <Icon icon="solar:share-bold" className="text-violet-600 text-xl" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-neutral-900">
              {t("referralPageYourLink")}
            </h2>
            <p className="text-xs text-neutral-500 font-light">
              {t("referralPageShareDesc")}
            </p>
          </div>
        </div>

        {/* Link display */}
        <div className="bg-white/70 border border-violet-200 rounded-xl px-4 py-3 mb-4 flex items-center justify-between gap-2">
          <span className="text-sm font-mono text-violet-700 truncate">
            taxineo.fr/r/{referralCode}
          </span>
          <button
            onClick={handleCopy}
            className="shrink-0 text-xs font-medium text-violet-600 hover:text-violet-800 transition-colors"
          >
            {copied ? (
              <Icon icon="solar:check-read-linear" className="text-green-600 text-lg" />
            ) : (
              <Icon icon="solar:copy-linear" className="text-lg" />
            )}
          </button>
        </div>

        {/* Share buttons */}
        <div className="grid grid-cols-2 gap-3">
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
      </div>

      {/* Referrals list */}
      <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <Icon icon="solar:users-group-rounded-linear" className="text-violet-500" />
            <h2 className="font-semibold text-sm">{t("referralPageFilleuls")}</h2>
          </div>
          <span className="text-xs text-neutral-400">{referrals.length}</span>
        </div>

        {referrals.length === 0 ? (
          <div className="px-5 py-10 text-center">
            <Icon icon="solar:users-group-rounded-linear" className="text-3xl text-neutral-200 mx-auto mb-2" />
            <p className="text-sm text-neutral-400 font-light">
              {t("referralPageNoFilleuls")}
            </p>
          </div>
        ) : (
          <div className="divide-y divide-neutral-100">
            {referrals.map((ref) => (
              <div
                key={ref.id}
                className="flex items-center gap-4 px-5 py-3.5"
              >
                <div className="w-9 h-9 bg-violet-50 rounded-xl flex items-center justify-center text-sm font-bold text-violet-600 shrink-0">
                  {ref.firstName[0]}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-medium">{ref.companyName || ref.firstName}</p>
                    {ref.isVerified && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-green-50 text-green-700 ring-1 ring-green-200">
                        <Icon icon="solar:shield-check-bold" className="inline text-xs mr-0.5" />
                        {locale === "en" ? "Verified" : "Vérifié"}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-neutral-400 font-light mt-0.5">
                    {t("referralPageJoinedOn", {
                      date: format(new Date(ref.createdAt), "dd MMM yyyy", { locale: dateFnsLocale }),
                    })}
                  </p>
                </div>
                <div className="text-right shrink-0 hidden sm:block">
                  <p className="text-xs text-neutral-400">
                    {ref.lastLoginAt
                      ? formatDistanceToNow(new Date(ref.lastLoginAt), { addSuffix: true, locale: dateFnsLocale })
                      : t("referralPageNeverConnected")}
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
