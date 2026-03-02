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
      {
        source: "/taxi-aeroport-:slug",
        destination: "/aeroport/:slug",
      },
      {
        source: "/taxi-gare-:slug",
        destination: "/gare/:slug",
      },
      {
        source: "/taxi-:slug",
        destination: "/:slug",
      },
    ];
  },
};

export default nextConfig;
