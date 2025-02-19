import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'placehold.co',
      'res.cloudinary.com', // If you're using Cloudinary
      's3.amazonaws.com',   // If you're using AWS S3
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
