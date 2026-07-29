"use client";

import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("error");

  // Log error for debugging
  console.error("[ErrorBoundary]", error.message, error.digest, error.stack);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center">
        <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon icon="solar:danger-triangle-linear" className="text-red-500 text-2xl" />
        </div>
        <h1 className="text-xl font-semibold tracking-tight mb-2">
          {t("title")}
        </h1>
        <p className="text-sm text-neutral-500 font-light mb-8">
          {t("description")}
        </p>
        {(error.message || error.digest) && (
          <p className="text-xs text-neutral-400 font-mono mb-4 max-w-md mx-auto break-all">
            {error.message && error.message !== "An error occurred in the Server Components render." ? error.message : null}
            {error.digest && <span className="block mt-1">Digest: {error.digest}</span>}
          </p>
        )}
        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 bg-neutral-950 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors btn-lift"
          >
            {t("retry")}
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-neutral-200 text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-50 transition-colors"
          >
            {t("home")}
          </Link>
        </div>
      </div>
    </div>
  );
}
