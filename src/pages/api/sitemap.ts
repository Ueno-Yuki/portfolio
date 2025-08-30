import type { NextApiRequest, NextApiResponse } from 'next';
import { SITEMAP_URLS } from '@/constants/urls';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // sitemap.xmlの内容を生成
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${SITEMAP_URLS.map(
  (url) => `  <url>
    <loc>${url.url}</loc>
    <lastmod>${url.lastModified}</lastmod>
    <changefreq>${url.changeFrequency}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
).join('\n')}
</urlset>`;

  // レスポンスヘッダーを設定
  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, max-age=86400'); // 24時間キャッシュ
  
  res.status(200).send(sitemap);
}