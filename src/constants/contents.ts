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
    {text: "東京", iconName: "location_on",iconClass:"material-symbols-outlined"},
    {text: `${new Date().getFullYear() - 2020}年の経歴`, iconName: "crown", iconClass: "material-symbols-outlined"},
  ],
  // 経歴内容
  introductions: [
    {
      idx: "1",
      subtitle: "エンジニアを目指したきっかけ",
      date: "2018年4月",
      content: `新卒でベンチャー企業に入社し、テレマーケティング営業部に1年半ほど携わりましたが、重労働や数字のプレッシャーが心身を蝕んだことで営業事務で異動しました。

      その時使用したFilemaker ProとVBAで、エンジニアとしてのものづくりに興味を持ち、転身を決意しました。
      大学ではスポーツ科学課程に所属していたため、必要なステップを計画し、DCでインフラやLinux、「プログラミング言語っぽい」VBAを業務を通して学び、その後SES企業などで実務経験を身につけることを目指しました。`,
      tagName: "Filemaker Pro,VBA,salesforce"
    },
    {
      idx: "2",
      subtitle:"エンジニアになるために",
      date: "2020年2月",
      content: `データセンターのオペレーション業務やサーバー監視業務などを担当すると同時に、業務で使用するエクセルのVBAの学習をし、改修を行いました。
      休日はHTML/CSS、JavaScript、Javaを中心に独学を継続していました。`,
      tagName: "Zabbix,VBA"
    },
    {
      idx: "3",
      subtitle:"実務経験を積むために",
      date: "2021年9月",
      content: `SES企業に転職し、業務管理・学習管理・金融・HP制作・ECサイトなど様々な実務経験を積み、
      コーディング能力や設計書等の作成能力以外に、顧客折衝やメンバーのマネジメントも担当しました。

      当時は案件を選ぶことができない体制のため、短期間でのアサインを繰り返したことで広く浅い中途半端な習得になりました。そのため、アサイン中は自身で簡単なアプリ等を作ることで業務に必要な知識や技術を補完していました。`,
      tagName: "HTML/CSS,JavaScript,Node.js,Vue.js,Java/SpringBoot,Python,Go,PHP/Laravel,WordPress,Lambda,S3,EC2,Git,Subversion,Terraform"
    },
    {
      idx: "4",
      subtitle:"これからの展望",
      date: "2023年4月",
      content: `さらに別のSES企業へ転職し、コンサルティングファーム企業のWeb系開発や業務管理システムを中心に基本設計〜運用・保守までを担当しています。\n
      古いver.でコーディングされたPHPのリバースエンジニアリングやリファクタリング、リプレイス、リライトなど、既存システムをより良いシステムにするための業務に携わっています。`,
      tagName: "HTML/CSS,JavaScript,Node.js,React(Next.js),Java,Solidity,PHP,Git,Subversion,Terraform"
    },
  ],
  arrows: [
    {fontClass: "material-symbols-outlined down", fontName: "keyboard_arrow_down"},
    {fontClass: "material-symbols-outlined up", fontName: "keyboard_arrow_up"},
  ],
} as const;

/* ============================
   スキルセクション 
   ============================ */
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
  cycle: {
    iconName: "cycle",
    iconClass: "material-symblos-outlined",
    text: "継続的な学習と技術向上に日々取り組んでいます"
  }
}

interface SkillItem {
  name: string;
  iconClass: string;
  rating: number;
}

interface SkillCategory {
  title: string;
  iconClass: string;
  iconName: string;
  color: string;
  skills: SkillItem[];
}

// プログラミング言語
const PROGRAMMING_LANGUAGES: SkillItem[] = [
  { name: "Java", iconClass: "devicon-java-plain colored", rating: 4 },
  { name: "JavaScript", iconClass: "devicon-javascript-plain colored", rating: 4 },
  { name: "TypeScript", iconClass: "devicon-typescript-plain colored", rating: 4 },
  { name: "PHP", iconClass: "devicon-php-plain colored", rating: 3 },
  { name: "Solidity", iconClass: "devicon-solidity-plain colored", rating: 2 },
  { name: "Python", iconClass: "devicon-python-plain colored", rating: 2 },
  { name: "C#", iconClass: "devicon-csharp-plain colored", rating: 2 },
  { name: "Go", iconClass: "devicon-go-plain colored", rating: 1 },
] as const;

// フロントエンド
const FRONTEND_SKILLS: SkillItem[] = [
  { name: "HTML5", iconClass: "devicon-html5-plain colored", rating: 4 },
  { name: "CSS3", iconClass: "devicon-css3-plain colored", rating: 4 },
  { name: "React", iconClass: "devicon-react-original colored", rating: 3 },
  { name: "Next.js", iconClass: "devicon-nextjs-plain white-icon", rating: 3 },
  { name: "Vue.js", iconClass: "devicon-vuejs-plain colored", rating: 3 },
] as const;

// バックエンド
const BACKEND_SKILLS: SkillItem[] = [
  { name: "Node.js", iconClass: "devicon-nodejs-plain colored", rating: 4 },
  { name: "Spring Boot", iconClass: "devicon-spring-plain colored", rating: 4 },
  { name: "Laravel", iconClass: "devicon-laravel-plain colored", rating: 3 },
] as const;

// クラウド・インフラ
const CLOUD_INFRASTRUCTURE_SKILLS: SkillItem[] = [
  { name: "AWS", iconClass: "devicon-amazonwebservices-plain-wordmark colored", rating: 3 },
  { name: "Docker", iconClass: "devicon-docker-plain colored", rating: 3 },
  { name: "Vercel", iconClass: "devicon-vercel-original white-icon", rating: 3 }
] as const;

// データベース
const DATABASE_SKILLS: SkillItem[] = [
  { name: "MySQL", iconClass: "devicon-mysql-plain colored", rating: 3 },
  { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored", rating: 3 },
] as const;

// 開発ツール
const DEVELOPMENT_TOOLS: SkillItem[] = [
  { name: "Git", iconClass: "devicon-git-plain colored", rating: 4 },
  { name: "Subversion", iconClass: "devicon-subversion-plain colored", rating: 4 },
  { name: "VSCode", iconClass: "devicon-vscode-plain colored", rating: 3 },
  { name: "Eclipse", iconClass: "devicon-eclipse-plain white-icon", rating: 3 },
  { name: "Terraform", iconClass: "devicon-terraform-plain colored", rating: 3 },
] as const;

// スキルカテゴリ
export const SKILLS: SkillCategory[] = [
  {
    title: "プログラミング言語",
    iconClass: "material-symbols-outlined",
    iconName: "code",
    color: "var(--neon-blue)",
    skills: PROGRAMMING_LANGUAGES
  },
  {
    title: "フロントエンド",
    iconClass: "material-symbols-outlined",
    iconName: "desktop_windows",
    color: "var(--neon-pink)",
    skills: FRONTEND_SKILLS
  },
  {
    title: "バックエンド",
    iconClass: "material-symbols-outlined",
    iconName: "host",
    color: "var(--neon-green)",
    skills: BACKEND_SKILLS
  },
  {
    title: "クラウド・インフラ",
    iconClass: "material-symbols-outlined",
    iconName: "cloud",
    color: "var(--neon-cyan)",
    skills: CLOUD_INFRASTRUCTURE_SKILLS
  },
  {
    title: "データベース",
    iconClass: "material-symbols-outlined",
    iconName: "database",
    color: "#9966ff",
    skills: DATABASE_SKILLS
  },
  {
    title: "開発ツール",
    iconClass: "material-symbols-outlined",
    iconName: "build",
    color: "#ff9900",
    skills: DEVELOPMENT_TOOLS
  }
] as const;

// 資格
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