import { NextRequest, NextResponse } from "next/server";
import { handlers } from "@/lib/auth";

// Règle « sans cookie » (RECETTE §15.6) : le SessionProvider interroge /api/auth/session à
// chaque page, et Auth.js y dépose alors __Host-authjs.csrf-token et authjs.callback-url,
// même pour un simple visiteur. Sans cookie de session dans la requête, il n'y a pas de
// session à lire : on répond « null » (réponse d'Auth.js pour un visiteur) sans rien déposer.
// Les cookies d'Auth.js n'apparaissent donc qu'au moment où l'on se connecte.
function aUneSession(req: NextRequest) {
  return req.cookies.getAll().some((c) => c.name.includes("authjs.session-token"));
}

export async function GET(req: NextRequest) {
  if (req.nextUrl.pathname.endsWith("/api/auth/session") && !aUneSession(req)) {
    return NextResponse.json(null, { headers: { "Cache-Control": "no-store" } });
  }
  return handlers.GET(req);
}

export const { POST } = handlers;
