import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // SEO設定
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // 静的ファイルの最適化
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },
  
  // 画像最適化
  images: {
    domains: ['yuki-ueno.com'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30日
  },
  
  // 実験的機能（critters依存のoptimizeCssを無効化）
  // experimental: {
  //   optimizeCss: true,
  // },
  
  // 出力設定
  trailingSlash: false,
  
  // パフォーマンス最適化
  compress: true,
  
  // PWA設定（将来的に）
  async redirects() {
    return [
      // 必要に応じてリダイレクト設定を追加
    ];
  },
};

export default nextConfig;