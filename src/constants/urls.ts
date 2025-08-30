// URL構造の定数定義

// 基本URL
export const BASE_URL = 'https://yuki-ueno.com';

// 内部パス
export const INTERNAL_PATHS = {
  home: '/',
  about: '/#about',
  skills: '/#skills', 
  projects: '/#projects',
  certifications: '/#certifications',
  contact: '/#contact',
} as const;

// 外部URL
export const EXTERNAL_URLS = {
  // SNS・プロフィール
  github: 'https://github.com/Ueno-Yuki',
  
  // AWS認定資格
  awsSAA: 'https://www.credly.com/badges/4689da15-2eeb-4c1a-a3be-60c9e5263d0c/public_url', // 実際のバッジURLに変更
  awsDeveloper: 'https://www.credly.com/badges/c7aecacd-c788-4af0-98f1-869970824c19/public_url', // 実際のバッジURLに変更
  
  // 参考資料・外部リンク
  ipaSkillStandard: 'https://www.ipa.go.jp/archive/files/000005100.pdf#page=32',
  awsCertifications: 'https://aws.amazon.com/jp/certification/',
  
  // 技術関連
  nextjsDocs: 'https://nextjs.org/docs',
  reactDocs: 'https://ja.react.dev/',
  springBootDocs: 'https://spring.io/projects/spring-boot',
  laravelDocs: 'https://laravel.com/docs',
  
  // 開発ツール
  vercel: 'https://vercel.com/',
  docker: 'https://www.docker.com/',
  git: 'https://git-scm.com/',
} as const;

// 完全URL生成関数
export const getFullUrl = (path: string): string => {
  return `${BASE_URL}${path}`;
};

// 内部リンク生成関数
export const getInternalUrl = (key: keyof typeof INTERNAL_PATHS): string => {
  return INTERNAL_PATHS[key];
};

// サイトマップ用URL構造
export const SITEMAP_URLS = [
  {
    url: getFullUrl(INTERNAL_PATHS.home),
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 1.0,
  },
] as const;

// robots.txt用設定
export const ROBOTS_CONFIG = {
  rules: [
    {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
  ],
  sitemap: `${BASE_URL}/api/sitemap`,
  host: BASE_URL,
} as const;

// 既存のURL定数（後方互換性のため残す）
export const IPA_URL = EXTERNAL_URLS.ipaSkillStandard;
export const PAGE_URL = BASE_URL;