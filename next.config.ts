import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    X_DESA_ID: process.env.X_DESA_ID,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ap-south-1.linodeobjects.com',
      },
      {
        protocol: 'https',
        hostname: 's3.ap-southeast-1.amazonaws.com',
      },
    ],
  },
}

export default nextConfig
