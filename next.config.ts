import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // @ts-ignore - allowedDevOrigins is required for cross-origin local network access in dev
  allowedDevOrigins: ['192.168.8.114'],
};

export default nextConfig;
