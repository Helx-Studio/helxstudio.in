import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    workerThreads: false,
    cpus: 1,
    optimizePackageImports: ["lucide-react", "pixelarticons"],
  },
};

export default nextConfig;



