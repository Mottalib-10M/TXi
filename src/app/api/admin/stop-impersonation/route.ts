import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  const isSecure = process.env.NODE_ENV === "production";
  const cookieName = isSecure ? "__Secure-authjs.session-token" : "authjs.session-token";

  const cookieStore = await cookies();
  cookieStore.delete(cookieName);

  return NextResponse.json({ message: "Impersonation terminée" });
}
