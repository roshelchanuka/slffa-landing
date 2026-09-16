/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://unpkg.com https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net; img-src 'self' blob: data: https://drive.google.com https://lh3.googleusercontent.com https://i.ibb.co https://res.cloudinary.com https://flagcdn.com https://avatars.githubusercontent.com; font-src 'self' data: https://fonts.gstatic.com https://cdn.jsdelivr.net; connect-src 'self' data: https://drive.google.com https://api.github.com https://unpkg.com https://cdn.jsdelivr.net https://www.githubstatus.com; media-src 'self' blob: data: https://drive.google.com;"
  }
];

const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
  },
  webpack: (config, { dev }) => {
    // Ignore AppleDouble metadata files created on USB/external drives on macOS
    config.watchOptions = {
      ...config.watchOptions,
      ignored: [
        '**/node_modules/**',
        '**/.next/**',
        '**/._*',
      ],
      poll: 1000, // Poll every second for stable file changes on USB storage
      aggregateTimeout: 500, // Give OS buffers time to fully flush file modifications before compiling
    };

    // Use memory cache instead of disk cache in development to prevent USB write sync corruption
    if (dev) {
      config.cache = {
        type: 'memory',
      };
    }

    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
};

export default nextConfig;
