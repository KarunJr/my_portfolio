import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.1.216'],
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
