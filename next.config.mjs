import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self)" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          // CSP report-only — monitors violations without blocking anything.
          // Review reports at /api/csp-report (or browser console) then promote to Content-Security-Policy.
          {
            key: "Content-Security-Policy-Report-Only",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://maps.googleapis.com https://challenges.cloudflare.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https://res.cloudinary.com https://maps.googleapis.com https://maps.gstatic.com https://*.google.com https://*.googleusercontent.com",
              "font-src 'self'",
              "connect-src 'self' https://www.google-analytics.com https://maps.googleapis.com https://challenges.cloudflare.com https://api.resend.com https://*.upstash.io",
              "frame-src https://challenges.cloudflare.com https://www.google.com",
              "object-src 'none'",
              "base-uri 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      // French locale
      {
        source: "/fr/taxi-aeroport-:slug",
        destination: "/fr/aeroport/:slug",
      },
      {
        source: "/fr/taxi-gare-:slug",
        destination: "/fr/gare/:slug",
      },
      {
        source: "/fr/taxi-:slug((?!partage|vs-vtc|medical).*)",
        destination: "/fr/:slug",
      },
      // English locale
      {
        source: "/en/taxi-aeroport-:slug",
        destination: "/en/aeroport/:slug",
      },
      {
        source: "/en/taxi-gare-:slug",
        destination: "/en/gare/:slug",
      },
      {
        source: "/en/taxi-:slug((?!partage|vs-vtc|medical).*)",
        destination: "/en/:slug",
      },
      // No prefix (fallback)
      {
        source: "/taxi-aeroport-:slug",
        destination: "/aeroport/:slug",
      },
      {
        source: "/taxi-gare-:slug",
        destination: "/gare/:slug",
      },
      {
        source: "/taxi-:slug((?!partage|vs-vtc|medical).*)",
        destination: "/:slug",
      },
    ];
  },
};

export default withNextIntl(nextConfig);
