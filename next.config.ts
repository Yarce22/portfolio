import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '3000',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'd33wubrfki0l68.cloudfront.net',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        pathname: '/4721kof1h75k/**',
        search: '',
      },
     
      // 'localhost',
      // 'd33wubrfki0l68.cloudfront.net',
      // 'images.ctfassets.net'
    ]
  },
};

export default nextConfig;