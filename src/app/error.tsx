"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center">
        <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon icon="solar:danger-triangle-linear" className="text-red-500 text-2xl" />
        </div>
        <h1 className="text-xl font-semibold tracking-tight mb-2">
          Une erreur est survenue
        </h1>
        <p className="text-sm text-neutral-500 font-light mb-8">
          Quelque chose ne s&apos;est pas passé comme prévu. Veuillez réessayer.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 bg-neutral-950 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors btn-lift"
          >
            Réessayer
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-neutral-200 text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-50 transition-colors"
          >
            Accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
