// La mesure d'usage côté serveur (même projet PostHog que src/lib/usage.ts) : les moments
// qui comptent et ne doivent pas dépendre du navigateur (inscription, connexion, course reçue,
// acceptée ou refusée, alerte Radar). Même règle : un compte n'est connu que par son
// identifiant interne, jamais par son e-mail, son nom ou les données de ses clients.
// Envoyé après la réponse (waitUntil) : rien ne ralentit ni ne casse si PostHog ne répond pas.
// Sans clé, rien n'est envoyé.

import { waitUntil } from "@vercel/functions";

const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com";

type Props = Record<string, string | number | boolean | null | undefined>;

async function send(id: string, event: string, props: Props, setOnce?: Props) {
  try {
    await fetch(`${HOST}/i/v0/e/`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ api_key: KEY, event, distinct_id: id, properties: { ...props, platform_side: "server", ...(setOnce ? { $set_once: setOnce } : {}) } }),
      signal: AbortSignal.timeout(3000),
    });
  } catch {
    // La mesure ne doit jamais gêner l'app.
  }
}

/** Un événement pour ce chauffeur ou cette organisation (identifiant interne). `setOnce` : traits fixés une seule fois (date d'inscription…). */
export function serverTrack(id: string | null | undefined, event: string, props: Props = {}, setOnce?: Props) {
  if (!KEY || !id) return;
  waitUntil(send(id, event, props, setOnce));
}
