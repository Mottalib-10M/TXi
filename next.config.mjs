import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
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
        source: "/fr/taxi-:slug((?!partage|vs-vtc).*)",
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
        source: "/en/taxi-:slug((?!partage|vs-vtc).*)",
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
        source: "/taxi-:slug((?!partage|vs-vtc).*)",
        destination: "/:slug",
      },
    ];
  },
};

export default withNextIntl(nextConfig);
