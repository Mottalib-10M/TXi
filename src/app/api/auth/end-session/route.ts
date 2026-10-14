import { NextResponse } from "next/server";

// Compte suspendu (?reason=suspended) ou supprimé alors qu'une session était
// encore ouverte (espace chauffeur ou organisation) : la session est fermée,
// retour à la connexion.

export async function GET(request: Request) {
  const suspended = new URL(request.url).searchParams.get("reason") === "suspended";
  const res = NextResponse.redirect(new URL(suspended ? "/connexion?error=suspended" : "/connexion", request.url));
  for (const name of ["__Secure-authjs.session-token", "authjs.session-token"]) {
    res.cookies.set(name, "", { path: "/", maxAge: 0 });
  }
  return res;
}
