import { NextRequest, NextResponse } from "next/server";
import { bookingCookieName, clientBookingToken, sameToken } from "@/lib/booking-link";

const COOKIE_MAX_AGE = 60 * 24 * 60 * 60;

/** Lien des e-mails client : garde le jeton dans un cookie et affiche la page à une adresse sans jeton. */
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const id = searchParams.get("id") || "";
  const prefix = searchParams.get("l") === "en" ? "/en" : "";

  if (!id || !sameToken(searchParams.get("t"), clientBookingToken(id))) {
    return NextResponse.redirect(new URL(`${prefix}/mes-reservations`, request.url));
  }

  const response = NextResponse.redirect(new URL(`${prefix}/reservation/${encodeURIComponent(id)}`, request.url));
  response.cookies.set(bookingCookieName(id), searchParams.get("t")!, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: COOKIE_MAX_AGE,
  });
  return response;
}
