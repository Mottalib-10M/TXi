"use client";

// Écran Courses : le chauffeur qui n'est pas encore vérifié voit pourquoi il ne reçoit
// pas les courses de Taxineo, et envoie sa carte professionnelle.

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import type { VerificationStatus } from "@/lib/driver-verification";
import { compressImageClient } from "@/lib/image-client";

const MAX_PDF_BYTES = 3 * 1024 * 1024;

function readAsDataUrl(file: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

export function CarteProCard({ status, within24h, refused }: { status: VerificationStatus; within24h: boolean; refused: boolean }) {
  const t = useTranslations("dashboard.cartePro");
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  if (status === "verified") return null;

  async function upload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setError("");
    const isPdf = file.type === "application/pdf" || /\.pdf$/i.test(file.name);
    if (isPdf && file.size > MAX_PDF_BYTES) {
      setError(t("tooBig"));
      return;
    }
    setSending(true);
    try {
      const carteProBase64 = isPdf ? await readAsDataUrl(file) : await readAsDataUrl(await compressImageClient(file, 1600, 1600, 0.8));
      const res = await fetch("/api/driver/carte-pro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ carteProBase64 }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setSent(true);
      router.refresh();
    } catch {
      setError(t("error"));
    } finally {
      setSending(false);
    }
  }

  if (status === "pending" || sent) {
    return (
      <div className="mb-6 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
        <Icon icon="solar:hourglass-linear" className="mt-0.5 shrink-0 text-xl text-amber-600" />
        <div className="min-w-0">
          <h2 className="text-sm font-semibold text-neutral-900">{t("pendingTitle")}</h2>
          <p className="mt-0.5 text-sm text-neutral-600">{within24h || (sent && !refused) ? t("pendingBody24h") : t("pendingBody")}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-6 rounded-2xl border border-blue-200 bg-blue-50 p-4">
      <div className="flex gap-3">
        <Icon icon="solar:shield-check-bold" className="mt-0.5 shrink-0 text-xl text-blue-600" />
        <div className="min-w-0">
          <h2 className="text-sm font-semibold text-neutral-900">{t(refused ? "refusedTitle" : "missingTitle")}</h2>
          <p className="mt-0.5 text-sm text-neutral-600">{t(refused ? "refusedBody" : "missingBody")}</p>
        </div>
      </div>
      <label
        className={`mt-3 flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-neutral-900 px-4 text-sm font-semibold text-white sm:w-auto sm:inline-flex ${sending ? "pointer-events-none opacity-60" : ""}`}
      >
        <Icon icon="solar:upload-linear" className="text-base" />
        {sending ? t("sending") : t(refused ? "resend" : "send")}
        <input type="file" accept="image/*,.heic,.heif,.pdf,application/pdf" onChange={upload} disabled={sending} className="sr-only" />
      </label>
      <p className={`mt-2 text-xs ${error ? "text-red-600" : "text-neutral-500"}`}>{error || t("hint")}</p>
    </div>
  );
}
