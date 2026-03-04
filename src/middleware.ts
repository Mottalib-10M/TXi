import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { routing } from "@/i18n/routing";

const intlMiddleware = createMiddleware(routing);

export async function middleware(req: NextRequest) {
  // Auth protection for dashboard and org routes
  const { pathname } = req.nextUrl;

  // Strip locale prefix to check the actual path
  const pathnameWithoutLocale = routing.locales.reduce(
    (path, locale) =>
      path.startsWith(`/${locale}/`) || path === `/${locale}`
        ? path.replace(`/${locale}`, "") || "/"
        : path,
    pathname
  );

  const protectedPaths = ["/dashboard", "/org"];
  const isProtected = protectedPaths.some(
    (p) => pathnameWithoutLocale.startsWith(p)
  );

  if (isProtected) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token) {
      const locale = routing.locales.find(
        (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
      ) || routing.defaultLocale;
      const signInUrl = new URL(
        locale === routing.defaultLocale ? "/connexion" : `/${locale}/connexion`,
        req.nextUrl.origin
      );
      return NextResponse.redirect(signInUrl);
    }
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)" ],
};
