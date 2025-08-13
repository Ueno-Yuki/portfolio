import { ContactLink } from "@/types/footer";
import { SkillItem, SkillCategory } from "@/types/skills";
import { IconName } from "./icons";
import { Project } from "@/types";

/* ============================
   メインビジュアル 
   ============================ */
export const HERO = {
  title: "YUKI UENO",
  subtitle: "ENGINEER SINCE 2020",
  matrixCode: "01101000 01100101 01101100 01101100 01101111",
} as const;

/* ============================
   自己紹介
   ============================ */
export const ABOUT = {
  title: "ABOUT",
  // プロフィール画像
  image_path: "/profile.jpeg",
  items: [
    {text: "東京", iconName: "location"},
    {text: `${new Date().getFullYear() - 2020}年の経歴`, iconName: "award"},
  ],
  // 経歴内容
  introductions: [
    {
      idx: "1",
      subtitle: "プログラミングとの邂逅",
      date: "2018年4月",
      content: `新卒でベンチャー企業に入社し、テレマーケティング営業部に1年半ほど携わり、その後営業事務へ異動しました。

      営業事務ではKPI指標管理や、営業成績管理をメインに担当しており、業務でFilemaker ProとVBAを使用した際に、エンジニアとしてのものづくりへの興味やコードを書く楽しさ、プログラムを考える楽しさを知り、転身を決意しました。
      大学ではスポーツ科学課程に所属していたため、必要なステップを計画し、DCでインフラやLinux、「プログラミング言語っぽい」VBAを業務を通して学び、その後SES企業などで実務経験を身につけることを目指しました。`,
      tagName: "Filemaker Pro,VBA,salesforce"
    },
    {
      idx: "2",
      subtitle:"エンジニアになるために",
      date: "2020年2月",
      content: `データセンターのオペレーション業務やサーバー監視業務などを担当すると同時に、業務で使用するエクセルのVBAの学習をし、改修を行いました。
      入館カードに2日分の入館者情報を読み込ませる作業は、ポータルサイトから出力したCSVファイルをエクセルのマクロで取り込み、人の手でセルフチェックをしていました。
      スクレイピングとデータ取り込み、出力、チェックをマクロで行い、最初の1枚と最後の1枚をチェックすることで作業が完了させるように改修した経験があります。（4時間の作業を30分に短縮）
      休日はHTML/CSS、JavaScript、Javaを中心に独学を継続していました。`,
      tagName: "Zabbix,VBA"
    },
    {
      idx: "3",
      subtitle:"実務経験を積むために",
      date: "2021年9月",
      content: `SES企業に転職し、業務管理・学習管理・金融・HP制作・ECサイトなど様々な実務経験を積み、コーディング能力や設計書等の作成能力以外に、顧客折衝やメンバーのマネジメントも担当しました。

      当時は案件を選ぶことができない体制のため、短期間でのアサインを繰り返したことで広く浅い中途半端な習得になりました。そのため、アサイン中は自身で簡単なアプリ等を作ることで業務に必要な知識や技術を補完していました。`,
      tagName: "HTML/CSS,JavaScript,Node.js,Vue.js,Java/SpringBoot,Python,Go,PHP/Laravel,WordPress,Lambda,S3,EC2,Git,Subversion,Terraform"
    },
    {
      idx: "4",
      subtitle:"現在",
      date: "2023年4月~",
      content: `さらに別のSES企業へ転職し、コンサルティングファーム企業のWeb系開発や業務システム開発を中心に基本設計〜運用・保守までを担当しています。\n
      Java・PHPを使用した既存システムのリバースエンジニアリングやリファクタリング、リプレイス、リライト、DBチューニング、バッチ最適化など、既存システムをより良いシステムにするための開発業務に携わっています。
      
      副業案件では、Next.jsとSolidityを使用したブロックチェーン開発（自社仮想通貨の作成と仮想通貨取引所への上場）や、Java・JavaScriptを使用したWeb開発に携わっています。
      副業の目的は継続的な学習に加えて、実務経験の習得やスキル研鑽を目的とし、積極的に取り組んでいます。`,
      tagName: "HTML/CSS,JavaScript,Node.js,React/Next.js,Java,Solidity,PHP,Git,Subversion,Terraform"
    },
  ],
  arrows: [
    {fontName: "chevronDown"},
    {fontName: "chevronUp"},
  ],
} as const;

/** ==========================================
 *  スキルセクション
 *  ========================================== */
export const SKILL = {
  title: "SKILLS",
  descriptions: [
    {description: "レベル1", iconClass: "devicon-java-plain colored", rating: 1},
    {description: "レベル2", iconClass: "devicon-java-plain colored", rating: 2},
    {description: "レベル3", iconClass: "devicon-java-plain colored", rating: 3},
    {description: "レベル4", iconClass: "devicon-java-plain colored", rating: 4},
    {description: "レベル5", iconClass: "devicon-java-plain colored", rating: 5},
  ],
  comment: "※IPA 独立行政法人 情報処理推進機構の基準値を参考にしています。", 
  link: "詳細はこちら",
  iconName: "external" as IconName,
  cycle: {
    iconName: "cycle",
    iconClass: "material-symblos-outlined",
    text: "継続的な学習と技術向上に日々取り組んでいます"
  }
}

/* プログラミング言語 */
const PROGRAMMING_LANGUAGES: SkillItem[] = [
  { name: "Java", iconClass: "devicon-java-plain colored", rating: 4 },
  { name: "JavaScript", iconClass: "devicon-javascript-plain colored", rating: 4 },
  { name: "TypeScript", iconClass: "devicon-typescript-plain colored", rating: 3 },
  { name: "PHP", iconClass: "devicon-php-plain colored", rating: 3 },
  { name: "Solidity", iconClass: "devicon-solidity-plain colored", rating: 2 },
  { name: "Python", iconClass: "devicon-python-plain colored", rating: 2 },
  { name: "C#", iconClass: "devicon-csharp-plain colored", rating: 2 },
  { name: "Go", iconClass: "devicon-go-plain colored", rating: 1 },
] as const;

/* フロントエンド */
const FRONTEND_SKILLS: SkillItem[] = [
  { name: "HTML5", iconClass: "devicon-html5-plain colored", rating: 4 },
  { name: "CSS3", iconClass: "devicon-css3-plain colored", rating: 4 },
  { name: "React", iconClass: "devicon-react-original colored", rating: 3 },
  { name: "Next.js", iconClass: "devicon-nextjs-plain white-icon", rating: 3 },
  { name: "Vue.js", iconClass: "devicon-vuejs-plain colored", rating: 3 },
] as const;

/* バックエンド */
const BACKEND_SKILLS: SkillItem[] = [
  { name: "Node.js", iconClass: "devicon-nodejs-plain colored", rating: 4 },
  { name: "Spring Boot", iconClass: "devicon-spring-plain colored", rating: 3 },
  { name: "Laravel", iconClass: "devicon-laravel-plain colored", rating: 3 },
] as const;

/* クラウド・インフラ */
const CLOUD_INFRASTRUCTURE_SKILLS: SkillItem[] = [
  { name: "AWS", iconClass: "devicon-amazonwebservices-plain-wordmark colored", rating: 3 },
  { name: "Docker", iconClass: "devicon-docker-plain colored", rating: 3 },
  { name: "Vercel", iconClass: "devicon-vercel-original white-icon", rating: 3 }
] as const;

/* データベース */
const DATABASE_SKILLS: SkillItem[] = [
  { name: "MySQL", iconClass: "devicon-mysql-plain colored", rating: 3 },
  { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored", rating: 3 },
] as const;

/* 開発ツール */
const DEVELOPMENT_TOOLS: SkillItem[] = [
  { name: "Git", iconClass: "devicon-git-plain colored", rating: 4 },
  { name: "Subversion", iconClass: "devicon-subversion-plain colored", rating: 4 },
  { name: "VSCode", iconClass: "devicon-vscode-plain colored", rating: 3 },
  { name: "Eclipse", iconClass: "devicon-eclipse-plain white-icon", rating: 3 },
  { name: "Terraform", iconClass: "devicon-terraform-plain colored", rating: 3 },
] as const;

/* スキルカテゴリ */
export const SKILLS: SkillCategory[] = [
  {
    title: "プログラミング言語",
    iconName: "code",
    color: "var(--neon-blue)",
    skills: PROGRAMMING_LANGUAGES
  },
  {
    title: "フロントエンド",
    iconName: "monitor",
    color: "var(--neon-pink)",
    skills: FRONTEND_SKILLS
  },
  {
    title: "バックエンド",
    iconName: "server",
    color: "var(--neon-green)",
    skills: BACKEND_SKILLS
  },
  {
    title: "クラウド・インフラ",
    iconName: "cloud",
    color: "var(--neon-cyan)",
    skills: CLOUD_INFRASTRUCTURE_SKILLS
  },
  {
    title: "データベース",
    iconName: "database",
    color: "#9966ff",
    skills: DATABASE_SKILLS
  },
  {
    title: "開発ツール",
    iconName: "wrench",
    color: "#ff9900",
    skills: DEVELOPMENT_TOOLS
  }
] as const;

export const PROJECT = {
  title: "PROJECT",
  items: [
    {
      title: "学習管理システム",
      description: "動画の学習コンテンツの管理とライブチャット機能の実装",
      techStack: ["Vue.js", "Spring Boot", "PostgreSQL", "REST API", "Docker",]
    },
    {
      title: "理容組合HP制作",
      description: "理容組合に所属する店舗の紹介と予約受付、問合せシステムの実装",
      techStack: ["WordPress", "PHP", "HTML/CSS", "JavaScript", "顧客折衝", ]
    },
    {
      title: "電子交付目論見書交付システム",
      description: "重要情報シート追加に伴うメール配信システム改修",
      techStack: ["Python", "S3", "Labmda", "DynamoDB", "SES", ]
    },
    {
      title: "社員管理システム",
      description: "自社管理本部の紙ベース業務のDX化",
      techStack: ["Vue.js", "Spring Boot", "Bootstrap", "PostgreSQL", "WSL", "PL"]
    },
    {
      title: "異動受付支援システム",
      description: `自治体で利用されているシステムの移行と機能改修、追加実装`,
      techStack: ["C#", "ASP.NET", "HTML/CSS", "JavaScript", "JQuery", "PostgreSQL"]
    },
    {
      title: "ECサイト構築サービス",
      description: "オンプレからクラウドへのリプレイスとDB設計とパフォーマンスチューニング",
      techStack: ["React", "PHP", "Perl", "Shell", "MySQL"]
    },
    {
      title: "IR/SRシステム開発",
      description: "ポータルサイトの新規機能開発や改修、リファクタリング、DB設計、パフォーマンスチューニング、バッチ実装",
      techStack: ["PHP", "Java", "Node.js", "PostgreSQL", "MySQL", "JQuery", "独自FW"]
    },
    {
      title: "ブロックチェーン開発",
      description: "自社オリジナル仮想通貨の作成とアプリケーションの開発",
      techStack: ["Next.js", "Node.js", "Solidity", "Hardhat", "openzeppelin",]
    }
  ] as Project[],
};

/** ==========================================
 *  資格
 *  ========================================== */
export const CERTIFICATIONS = {
  title: "資格",
  items: [
    {
      imagePath: "/SAA.png",
      iconName: "AWS Certified Solution Architect - Associate",
      date: "2022年12月",
      note: "Amazon Web Service"
    },
    {
      imagePath: "/DVA.png",
      iconName: "AWS Certified Developer - Associate",
      date: "2023年3月",
      note: "Amazon Web Service"
    }
  ]
} as const;

/** ==========================================
 *  フッター
 *  ========================================== */
export const CONTACT_LINKS: Omit<ContactLink, 'onClick'>[] = [
  {
    text: "EMAIL",
    iconName: "mail",
    ariaLabel: "メールでお問い合わせ",
    isExternal: false,
    hasSvg: false,
  },
  {
    href: "https://github.com/Ueno-Yuki",
    text: "GITHUB",
    ariaLabel: "GitHubプロフィールを見る",
    isExternal: true,
    svgPath: "/github.svg", // publicフォルダ内のパス
    hasSvg: true,
  },
] as const;