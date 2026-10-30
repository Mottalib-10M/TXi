"use client";

// Mesure d'usage des espaces chauffeur et organisation (PostHog, hébergement européen) :
// quels écrans servent, quelles fonctions, où l'on décroche. Les pages publiques du site
// n'en ont pas (Google Analytics s'en charge, voir src/app/[locale]/layout.tsx).
// - aucun cookie ni stockage sur l'appareil (persistance en mémoire) : rien à consentir ;
// - un compte n'est connu que par son identifiant interne, jamais par son e-mail ou son nom ;
// - le texte des pages et tout ce qui est tapé sont masqués (noms, adresses, téléphones des clients) ;
// - « Ne pas me suivre » du navigateur est respecté ;
// - sans clé (NEXT_PUBLIC_POSTHOG_KEY), rien n'est chargé ni envoyé.

import posthog from "posthog-js";

const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com";
let started = false;

type Traits = Record<string, string | number | boolean | null>;

function start() {
  if (started || !KEY || typeof window === "undefined") return false;
  if (/^(localhost|127\.0\.0\.1)$/.test(location.hostname)) return false;
  started = true;
  posthog.init(KEY, {
    api_host: HOST,
    ui_host: "https://eu.posthog.com",
    persistence: "memory",
    person_profiles: "identified_only",
    capture_pageview: "history_change",
    capture_pageleave: true,
    respect_dnt: true,
    mask_all_text: true,
    mask_all_element_attributes: true,
    session_recording: { maskAllInputs: true, maskTextSelector: "*" },
  });
  posthog.register({ platform: document.documentElement.hasAttribute("data-app") ? "app" : "web" });
  return true;
}

/** Le compte connecté : son identifiant interne et quelques traits utiles, rien de personnel. `once` : fixés une seule fois (date d'inscription, pour les cohortes). */
export function identify(id: string, traits: Traits, once?: Traits) {
  start();
  if (!started) return;
  if (posthog.get_distinct_id() !== id) posthog.identify(id, traits, once);
  else posthog.setPersonProperties(traits, once);
}

/** Une action dans l'espace. Noms en snake_case, propriétés courtes (identifiants, nombres, choix). */
export function track(event: string, props?: Record<string, string | number | boolean | null | undefined>) {
  if (!started) return;
  posthog.capture(event, props);
}
