import Link from "next/link";
import { Icon } from "@iconify/react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-6xl font-semibold text-neutral-200 mb-4">404</p>
        <h1 className="text-xl font-semibold tracking-tight mb-2">
          Page introuvable
        </h1>
        <p className="text-sm text-neutral-500 font-light mb-8">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-neutral-950 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors btn-lift"
        >
          <Icon icon="solar:arrow-left-linear" />
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
