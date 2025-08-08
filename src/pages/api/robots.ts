import type { NextApiRequest, NextApiResponse } from 'next';
import { ROBOTS_CONFIG } from '@/constants/urls';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // robots.txtの内容を生成
  const robotsTxt = `
# robots.txt for ${ROBOTS_CONFIG.host}

${ROBOTS_CONFIG.rules
  .map(
    (rule) => `
User-agent: ${rule.userAgent}
${rule.allow ? `Allow: ${rule.allow}` : ''}
${rule.disallow?.map((path) => `Disallow: ${path}`).join('\n') || ''}
`
  )
  .join('\n')}

# Sitemap
Sitemap: ${ROBOTS_CONFIG.sitemap}

# Host
Host: ${ROBOTS_CONFIG.host}
`.trim();

  // レスポンスヘッダーを設定
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Cache-Control', 'public, max-age=86400'); // 24時間キャッシュ
  
  res.status(200).send(robotsTxt);
}