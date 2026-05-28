import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { jwtVerify } from "jose";
import { routing } from "@/i18n/routing";

const intlMiddleware = createMiddleware(routing);

function getLocale(pathname: string): string {
  return (
    routing.locales.find(
      (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
    ) || routing.defaultLocale
  );
}

async function verifyAdminCookie(req: NextRequest): Promise<boolean> {
  const token = req.cookies.get("admin-token")?.value;
  if (!token) return false;
  try {
    const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return payload.role === "admin";
  } catch {
    return false;
  }
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Strip locale prefix to check the actual path
  const pathnameWithoutLocale = routing.locales.reduce(
    (path, locale) =>
      path.startsWith(`/${locale}/`) || path === `/${locale}`
        ? path.replace(`/${locale}`, "") || "/"
        : path,
    pathname
  );

  // --- Admin route protection ---
  const isAdminRoute = pathnameWithoutLocale.startsWith("/admin");
  const isAdminLogin = pathnameWithoutLocale === "/admin/login";

  if (isAdminRoute && !isAdminLogin) {
    const valid = await verifyAdminCookie(req);
    if (!valid) {
      const locale = getLocale(pathname);
      return NextResponse.redirect(
        new URL(`/${locale}/admin/login`, req.nextUrl.origin)
      );
    }
  }

  if (isAdminLogin) {
    const valid = await verifyAdminCookie(req);
    if (valid) {
      const locale = getLocale(pathname);
      return NextResponse.redirect(
        new URL(`/${locale}/admin`, req.nextUrl.origin)
      );
    }
  }

  // --- Dashboard / Org route protection ---
  const protectedPaths = ["/dashboard", "/org"];
  const isProtected = protectedPaths.some(
    (p) => pathnameWithoutLocale.startsWith(p)
  );

  const authPages = ["/connexion", "/inscription"];
  const isAuthPage = authPages.some(
    (p) => pathnameWithoutLocale === p || pathnameWithoutLocale.startsWith(p + "/")
  );

  const token = isProtected || isAuthPage
    ? await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
        secureCookie: process.env.NODE_ENV === "production",
        cookieName: process.env.NODE_ENV === "production"
          ? "__Secure-authjs.session-token"
          : "authjs.session-token",
      })
    : null;

  if (isProtected && !token) {
    const locale = getLocale(pathname);
    const signInUrl = new URL(`/${locale}/connexion`, req.nextUrl.origin);
    return NextResponse.redirect(signInUrl);
  }

  // Redirect authenticated users away from login/register pages
  if (isAuthPage && token) {
    const locale = getLocale(pathname);
    const dest = (token as { role?: string }).role === "organization" ? "/org" : "/dashboard";
    const dashUrl = new URL(`/${locale}${dest}`, req.nextUrl.origin);
    return NextResponse.redirect(dashUrl);
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)" ],
};
