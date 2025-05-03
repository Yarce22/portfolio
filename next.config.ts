import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],
    domains: [
      'localhost',
      'd33wubrfki0l68.cloudfront.net',
    ]
  }
};

export default nextConfig;