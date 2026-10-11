// Comptes de démonstration des stores (vérification Apple et Google) : adresses
// en @demo.taxineo.fr, créées par scripts/demo-accounts.ts. Un chauffeur de démo
// ne reçoit jamais de vraie course et n'apparaît sur aucune carte ; une course
// commandée par une organisation de démo ne va qu'aux chauffeurs de démo.

export const DEMO_DOMAIN = "@demo.taxineo.fr";

export function isDemoEmail(email: string | null | undefined): boolean {
  return Boolean(email && email.toLowerCase().endsWith(DEMO_DOMAIN));
}

/** Filtre Prisma des chauffeurs : les vrais, ou seulement ceux de démo. */
export function driverPool(demo = false) {
  return demo
    ? { email: { endsWith: DEMO_DOMAIN } }
    : { NOT: { email: { endsWith: DEMO_DOMAIN } } };
}
