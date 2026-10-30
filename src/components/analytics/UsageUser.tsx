"use client";

// Démarre la mesure d'usage (src/lib/usage.ts) dans un espace connecté et y reconnaît le
// compte par son identifiant interne ; rendu par les layouts chauffeur et organisation.

import { useEffect } from "react";
import { identify } from "@/lib/usage";

type Traits = Record<string, string | number | boolean | null>;

export function UsageUser({ id, traits, once }: { id: string; traits: Traits; once?: Traits }) {
  const key = JSON.stringify([traits, once ?? null]);
  useEffect(() => {
    const [set, setOnce] = JSON.parse(key) as [Traits, Traits | null];
    identify(id, set, setOnce ?? undefined);
  }, [id, key]);
  return null;
}
