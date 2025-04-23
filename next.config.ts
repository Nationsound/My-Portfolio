import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    allowedDevOrigins: ["http://172.20.10.3:3000"], // Replace with your actual dev URL
  },
};

export default nextConfig;
