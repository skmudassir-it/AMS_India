import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '18.226.187.11',
      },
    ],
  },
};

export default nextConfig;
