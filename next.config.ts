import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  // Off so unknown ride URLs return a real 404 status instead of a streamed 200.
  partialPrefetching: false,
  images: {
    // AVIF first (smallest files), WebP for browsers without AVIF support.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
