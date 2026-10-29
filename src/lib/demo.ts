// Comptes de démonstration des stores (vérification Apple et Google) : adresses
// courtes de DEMO_EMAILS (faciles à taper pendant la vidéo de revue) ou en
// @demo.taxineo.fr, créées par scripts/demo-accounts.ts. Un chauffeur de démo
// ne reçoit jamais de vraie course et n'apparaît sur aucune carte ; une course
// dont l'adresse du client est de démo (organisation de démo, ou passager qui
// saisit client@taxineo.fr) ne va qu'aux chauffeurs de démo et n'est
// jamais relancée (src/lib/escalation.ts).

export const DEMO_DOMAIN = "@demo.taxineo.fr";
/** Chauffeur, hôtel et client de démo (le client n'a pas de compte : c'est l'e-mail saisi en réservant). */
export const DEMO_EMAILS = ["taxi@taxineo.fr", "hotel@taxineo.fr", "client@taxineo.fr"];

export function isDemoEmail(email: string | null | undefined): boolean {
  const e = email?.trim().toLowerCase();
  return Boolean(e && (e.endsWith(DEMO_DOMAIN) || DEMO_EMAILS.includes(e)));
}

/** Filtre Prisma des chauffeurs : les vrais, ou seulement ceux de démo. */
export function driverPool(demo = false) {
  return demo
    ? { OR: [{ email: { endsWith: DEMO_DOMAIN } }, { email: { in: DEMO_EMAILS } }] }
    : { NOT: [{ email: { endsWith: DEMO_DOMAIN } }, { email: { in: DEMO_EMAILS } }] };
}
