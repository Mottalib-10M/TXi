"use client";

import { useEffect, useState } from "react";
import { useRouter } from "@/i18n/navigation";
import { Icon } from "@iconify/react";
import { format } from "date-fns";
import { enUS, fr } from "date-fns/locale";
import { useLocale, useTranslations } from "next-intl";

interface Transaction {
  id: string;
  amount: number;
  createdAt: string;
  booking: {
    reference: string;
    beneficiaryName: string | null;
    lockedPrice: number | null;
  };
}

export default function CagnottePage() {
  const t = useTranslations("org");
  const locale = useLocale();
  const router = useRouter();
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/org/profile");
        const profile = await res.json();
        if (profile.type === "INDIVIDUAL") {
          router.replace("/org");
          return;
        }
        setBalance(profile.cagnotteBalance || 0);
        setTransactions(profile.cagnotteHistory || []);
      } catch {
        // Silently fail
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Icon icon="solar:refresh-linear" className="text-2xl animate-spin text-neutral-400" />
      </div>
    );
  }

  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">{t("walletSubtitle")}</h1>
        <p className="text-sm text-neutral-500 mt-1">{t("walletDesc")}</p>
      </div>

      {/* Balance card */}
      <div className="bg-gradient-to-br from-neutral-900 to-neutral-700 text-white rounded-2xl p-8 mb-8">
        <p className="text-sm text-neutral-300 mb-1">{t("availableBalance")}</p>
        <p className="text-4xl font-bold">{balance.toFixed(2)} €</p>
        <p className="text-xs text-neutral-400 mt-2">
          {t("accumulatedOn", { count: transactions.length })}
        </p>
      </div>

      {/* History */}
      <div className="bg-white rounded-2xl border border-neutral-200">
        <div className="p-5 border-b border-neutral-100">
          <h2 className="font-medium">{t("creditHistory")}</h2>
        </div>
        {transactions.length === 0 ? (
          <div className="p-8 text-center text-sm text-neutral-500">
            {t("noCredits")}
          </div>
        ) : (
          <div className="divide-y divide-neutral-100">
            {transactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between p-4 px-5">
                <div>
                  <p className="text-sm font-medium">
                    {t("rideRef", { reference: tx.booking.reference })}
                  </p>
                  <p className="text-xs text-neutral-500">
                    {tx.booking.beneficiaryName && `${tx.booking.beneficiaryName} · `}
                    {format(new Date(tx.createdAt), "dd MMM yyyy", { locale: locale === "en" ? enUS : fr })}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-green-600">+{tx.amount.toFixed(2)} €</p>
                  {tx.booking.lockedPrice && (
                    <p className="text-xs text-neutral-400">
                      {t("creditPercent", { price: tx.booking.lockedPrice.toFixed(0) })}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
