import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        destination: "https://api.coingecko.com/api/v3/:path*",
        source: "/api/:path*",
      },
    ];
  },
  images: {
    unoptimized: true,
    domains: [
      "*",
      "assets.coingecko.com",
      "coin-images.coingecko.com",
      "s3-alpha-sig.figma.com",
    ],
  },
};

export default nextConfig;
