// Liens universels iPhone : les adresses du site que l'app Taxineo ouvre à la
// place de Safari quand elle est installée (espaces chauffeur et organisation,
// lien de parrainage, réservations, connexion). Identifiant d'équipe Apple public.

export const dynamic = "force-static";

const APP_ID = "DMVV2JDSY4.com.taxineo.app";
const PATHS = ["/dashboard", "/dashboard/*", "/org", "/org/*", "/r/*", "/mes-reservations", "/confirmation", "/connexion"];

export function GET() {
  const all = [...PATHS, ...PATHS.map((p) => `/en${p}`)];
  const body = {
    applinks: { details: [{ appIDs: [APP_ID], components: all.map((p) => ({ "/": p })) }] },
    webcredentials: { apps: [APP_ID] },
  };
  return Response.json(body, { headers: { "cache-control": "public, max-age=3600" } });
}
