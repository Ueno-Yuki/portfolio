// SEOメタデータの定数定義
export const SITE_METADATA = {
  // 基本情報
  title: 'WEBエンジニア 上野裕暉(うえのゆうき) | Java開発5年・副業対応・東京 | YUKI UENO',
  titleTemplate: '%s | YUKI UENO',
  description: '東京在住のWEBエンジニア上野裕暉(うえのゆうき/ウエノユウキ)のポートフォリオ。Java・JavaScript・PHP開発5年の実務経験。副業・フリーランス案件対応可能。AWS認定資格保有。業務システム開発からWeb開発まで幅広く対応。',
  siteName: 'YUKI UENO Portfolio',
  siteUrl: 'https://yuki-ueno.com',
  
  // 個人情報
  author: {
    name: 'YUKI UENO',
    nameJa: '上野裕暉',
    title: 'Web Engineer',
    titleJa: 'WEBエンジニア',
    experience: '2020年〜',
    location: '東京',
    email: 'jam14_01@icloud.com',
  },
  
  // OGP画像
  ogImage: {
    url: '/YU.png',
    width: 512,
    height: 512,
    alt: 'YUKI UENO - Webエンジニア Portfolio',
  },
  
  // ロゴ・ファビコン
  logo: {
    url: '/YU.png',
    width: 512,
    height: 512,
  },
  
  // SNS
  social: {
    github: 'https://github.com/Ueno-Yuki',
  },
  
  // 言語・地域設定
  locale: 'ja_JP',
  language: 'ja',
  region: 'JP',
  
  // テーマカラー
  themeColor: '#00ffff', // --neon-cyan
  
  // 検索エンジン設定
  robots: 'index, follow',
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION, // Google Search Consoleの認証コード
  bingSiteVerification: '', // Bing Webmaster Toolsの認証コード
} as const;

// ページ別メタデータ
export const PAGE_METADATA = {
  home: {
    title: 'YUKI UENO | WEBエンジニア',
    description: SITE_METADATA.description,
    keywords: [
      'エンジニア',
      'ポートフォリオ',
      'Java',
      'JavaScript',
      'TypeScript',
      'PHP',
      'React',
      'Next.js',
      'Vue.js',
      'AWS',
      '開発',
      'WEB開発',
      'リファクタリング',
      'チューニング',
      '業務システム開発',
      '上流工程',
      '下流工程',
      '要件定義',
      '基本設計',
      '詳細設計',
      '上野裕暉',
      'YUKI UENO'
    ],
    path: '/',
  },
} as const;

// 構造化データ（JSON-LD）
export const STRUCTURED_DATA = {
  // 個人プロフィール
  person: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_METADATA.author.name,
    alternateName: SITE_METADATA.author.nameJa,
    jobTitle: SITE_METADATA.author.title,
    description: SITE_METADATA.description,
    url: SITE_METADATA.siteUrl,
    image: `${SITE_METADATA.siteUrl}${SITE_METADATA.ogImage.url}`,
    email: SITE_METADATA.author.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE_METADATA.author.location,
      addressCountry: 'JP',
    },
    sameAs: [
      SITE_METADATA.social.github,
    ],
    knowsAbout: [
      'Java',
      'JavaScript',
      'TypeScript',
      'PHP',
      'React',
      'Next.js',
      'Spring Boot',
      'Laravel',
      'AWS',
      'Docker',
      'MySQL',
      'PostgreSQL',
      'Git',
      'Subversion'
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'AWS Certified Solutions Architect - Associate',
        credentialCategory: 'certification',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Amazon Web Services',
        },
        dateCreated: '2022-12',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'AWS Certified Developer - Associate',
        credentialCategory: 'certification',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Amazon Web Services',
        },
        dateCreated: '2023-03',
      },
    ],
  },
  
  // ウェブサイト
  website: {
    '@context': 'https://schema.org',
    '@type': 'Website',
    name: SITE_METADATA.siteName,
    description: SITE_METADATA.description,
    url: SITE_METADATA.siteUrl,
    author: {
      '@type': 'Person',
      name: SITE_METADATA.author.name,
    },
    inLanguage: SITE_METADATA.language,
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      '@type': 'Person',
      name: SITE_METADATA.author.name,
    },
  },
  
  // プロフェッショナルサービス
  professionalService: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${SITE_METADATA.author.name} - Web Development Services`,
    description: 'JavaやJavaScript、PHPを使用したWebアプリケーション開発、AWS環境での運用・保守サービス',
    provider: {
      '@type': 'Person',
      name: SITE_METADATA.author.name,
      jobTitle: SITE_METADATA.author.title,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Japan',
    },
    serviceType: [
      'Webアプリケーション開発',
      'システム設計・開発',
      '下流工程',
      'AWS環境構築',
      'データベース設計',
      'チューニング',
      'API開発',
    ],
  },
} as const;

// パンくずリスト生成関数
export const generateBreadcrumbList = (items: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_METADATA.siteUrl}${item.url}`,
    })),
  };
};