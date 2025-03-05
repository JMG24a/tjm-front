import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
  
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*", // Todas las solicitudes a /api serán redirigidas
        destination: "https://tjm-back.vercel.app/api/:path*", // URL de tu backend
      },
    ];
  },
};

export default nextConfig;
