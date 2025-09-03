// SEOメタデータの定数定義
export const SITE_METADATA = {
  // 基本情報
  title: 'フルスタック開発 | Java・React・AWS認定エンジニア | 東京・副業対応',
  titleTemplate: '%s | 上野裕暉 YUKI UENO',
  description: 'Java・React・Next.jsの実務経験を持つエンジニア。AWS認定2資格保有。東京でAPI開発・システム設計・パフォーマンスチューニング。副業・フリーランス案件対応。',
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
      // 主要技術サービス
      'フルスタック開発',
      'web開発',
      'Java開発',
      'React開発', 
      'Next.js開発',
      'Spring Boot開発',
      'API開発',
      'システム開発',
      
      // エンジニア職種
      'フルスタックエンジニア',
      'webエンジニア',
      'システムエンジニア',
      'Javaエンジニア', 
      'Reactエンジニア',
      'WEBエンジニア',
      'システムエンジニア',
      
      // 地域・条件
      '東京 エンジニア',
      '副業 開発',
      'フリーランス開発',
      'リモート開発',
      '東京 システム開発',
      
      // 技術スタック
      'Java Spring Boot',
      'React TypeScript',
      'Next.js TypeScript',
      'Laravel PHP',
      'AWS認定',
      'AWS Solutions Architect',
      'AWS Developer Associate',
      
      // 専門サービス
      'API設計開発',
      'データベース設計',
      'パフォーマンスチューニング',
      'システム設計',
      '要件定義',
      '基本設計',
      'レガシーシステム改修',
      
      // ロングテールキーワード
      'Java Spring Boot 開発者',
      'React TypeScript 開発',
      'Next.js パフォーマンスチューニング', 
      'AWS認定 フルスタック',
      'システム開発 外注',
      'API開発 依頼',
      '副業エンジニア 東京',
      'フリーランス Java開発',
      
      // 最小限の個人情報
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
    alternateName: [
      SITE_METADATA.author.nameJa,
      'うえのゆうき',
      'ウエノユウキ',
      'Ueno Yuki',
      'Yuki Ueno'
    ],
    jobTitle: [
      SITE_METADATA.author.title,
      'フルスタックエンジニア',
      'webエンジニア',
      'システムエンジニア',
      'Javaエンジニア',
      'AWS認定エンジニア',
      'システムエンジニア'
    ],
    description: SITE_METADATA.description,
    workLocation: {
      '@type': 'Place',
      name: '東京',
      address: {
        '@type': 'PostalAddress',
        addressLocality: '東京',
        addressCountry: 'JP'
      }
    },
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
      'Java開発',
      'Spring Boot',
      'Spring Framework',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Vue.js',
      'PHP開発',
      'Laravel',
      'フロントエンド開発',
      'バックエンド開発',
      'フルスタック開発',
      'AWS',
      'Amazon Web Services',
      'AWS認定Solutions Architect',
      'AWS認定Developer',
      'Docker',
      'コンテナ化',
      'MySQL',
      'PostgreSQL',
      'データベース設計',
      'API開発',
      'REST API',
      'システム設計',
      'パフォーマンスチューニング',
      'Git',
      'CI/CD',
      'アジャイル開発',
      'ウォーターフォール開発'
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'ソフトウェアエンジニア',
      occupationLocation: {
        '@type': 'City',
        name: '東京'
      },
      skills: [
        'Java',
        'Spring Boot',
        'React',
        'Next.js',
        'TypeScript',
        'AWS',
        'Docker',
        'MySQL',
        'API開発',
        'システム設計'
      ]
    },
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
    name: '上野裕暉 - フルスタック開発・AWS認定エンジニアサービス',
    description: 'Java・React・Next.js・Spring Boot・Laravelを使用したフルスタック開発。AWS認定エンジニアによるクラウド設計・構築・運用。システム設計からAPI開発、データベースチューニングまで総合対応。',
    provider: {
      '@type': 'Person',
      name: SITE_METADATA.author.name,
      jobTitle: 'フルスタックエンジニア・AWS認定エンジニア・webエンジニア・システムエンジニア',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Japan',
    },
    serviceType: [
      'フルスタック開発',
      'webエンジニア',
      'システムエンジニア',
      'Java・Spring Boot開発',
      'React・Next.js開発',
      'Laravel・PHP開発',
      'AWS環境設計・構築・運用',
      'システム設計・アーキテクチャ',
      'API設計・開発',
      'データベース設計・最適化',
      'パフォーマンスチューニング',
      'CI/CD構築',
      '要件定義・基本設計',
      '副業・フリーランス開発支援',
    ],
    offers: {
      '@type': 'Offer',
      availability: 'InStock',
      businessFunction: 'Sell',
      itemOffered: {
        '@type': 'Service',
        name: 'ソフトウェア開発サービス',
        category: 'IT・ソフトウェア開発'
      }
    }
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