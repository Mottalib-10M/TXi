"use client";

import { useState, useEffect, useCallback } from "react";
import { Icon } from "@iconify/react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import QRCode from "qrcode";

export function QRCodeButton({ slug }: { slug: string }) {
  const t = useTranslations("dashboard");
  const [open, setOpen] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState("");

  const profileUrl = `${typeof window !== "undefined" ? window.location.origin : ""}/taxi/${slug}`;

  const generate = useCallback(async () => {
    try {
      const url = await QRCode.toDataURL(profileUrl, {
        width: 300,
        margin: 2,
        color: { dark: "#0a0a0a", light: "#ffffff" },
      });
      setQrDataUrl(url);
    } catch {
      // ignore
    }
  }, [profileUrl]);

  useEffect(() => {
    if (open && !qrDataUrl) generate();
  }, [open, qrDataUrl, generate]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 bg-neutral-900 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors"
      >
        <Icon icon="solar:qr-code-linear" className="text-lg" />
        {t("qrCode")}
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-50"
            onClick={() => setOpen(false)}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 relative">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 p-1 hover:bg-neutral-100 rounded-lg transition-colors"
              >
                <Icon icon="solar:close-circle-linear" className="text-xl text-neutral-400" />
              </button>

              <div className="text-center">
                <h3 className="text-lg font-semibold tracking-tight mb-1">{t("qrCode")}</h3>
                <p className="text-xs text-neutral-500 font-light mb-6">
                  {t("qrCodeShareDesc")}
                </p>

                {qrDataUrl ? (
                  <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4 inline-block mb-6">
                    <img src={qrDataUrl} alt="QR Code" className="w-56 h-56" />
                  </div>
                ) : (
                  <div className="w-56 h-56 bg-neutral-100 rounded-xl mx-auto mb-6 animate-pulse" />
                )}

                <div className="space-y-2">
                  <button
                    onClick={async () => {
                      if (!qrDataUrl) return;
                      const res = await fetch(qrDataUrl);
                      const blob = await res.blob();
                      const file = new File([blob], `qrcode-${slug}.png`, { type: "image/png" });
                      if (navigator.share && navigator.canShare?.({ files: [file] })) {
                        navigator.share({ files: [file] });
                      } else {
                        const a = document.createElement("a");
                        a.href = qrDataUrl;
                        a.download = `qrcode-${slug}.png`;
                        a.click();
                      }
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-neutral-950 text-white rounded-xl py-3 text-sm font-medium hover:bg-neutral-800 transition-colors"
                  >
                    <Icon icon="solar:download-minimalistic-linear" className="text-lg" />
                    {t("qrCodeSavePhoto")}
                  </button>

                  <Link
                    href={`/taxi/${slug}`}
                    onClick={() => setOpen(false)}
                    className="w-full flex items-center justify-center gap-2 bg-white border border-neutral-200 text-neutral-700 rounded-xl py-3 text-sm font-medium hover:bg-neutral-50 transition-colors"
                  >
                    <Icon icon="solar:eye-linear" className="text-lg" />
                    {t("qrCodeViewProfile")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
