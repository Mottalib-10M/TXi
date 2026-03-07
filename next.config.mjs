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
      // Default locale (fr, no prefix)
      {
        source: "/taxi-aeroport-:slug",
        destination: "/aeroport/:slug",
      },
      {
        source: "/taxi-gare-:slug",
        destination: "/gare/:slug",
      },
      {
        source: "/taxi-:slug((?!partage).*)",
        destination: "/:slug",
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
        source: "/en/taxi-:slug((?!partage).*)",
        destination: "/en/:slug",
      },
    ];
  },
};

export default withNextIntl(nextConfig);
