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

// メインビジュアル
export const HERO = {
  title: "YUKI UENO",
  subtitle: "ENGINEER SINCE 2020",
  matrixCode: "01101000 01100101 01101100 01101100 01101111",
} as const;

// プロフィール画像
export const PROFILE = {
  image_path: "/profile.jpeg",
  items: [
    {text: "東京", iconName: "location_on",iconClass:"material-symbols-outlined"},
    {text: `${new Date().getFullYear() - 2020}年の経歴`, iconName: "crown", iconClass: "material-symbols-outlined"},
  ] 
} as const;

// 自身の紹介
export const ABOUT = {
  title: "ABOUT",
  introductions: [
    {
      idx: "1",
      subtitle:"大学卒業後",
      date: "2018年4月",
      content: "株式会社Wizへ営業として入社し、テレマーケティングでの営業を担当しました。"
    },
    {
      idx: "2",
      subtitle:"トランス・コスモス株式会社",
      date: "2020年2月",
      content: "データセンターのオペレーション業務を担当し、"
    },
    {
      idx: "3",
      subtitle:"株式会社エクソナ",
      date: "2021年9月",
      content: "データセンターのオペレーション業務をメインとして、"
    },
    {
      idx: "4",
      subtitle:"株式会社アイ・ディ・エイチ",
      date: "2023年4月",
      note: "現在",
      content: "データセンターのオペレーション業務をメインとして、"
    },
  ],
  arrows: [
    {fontClass: "material-symbols-outlined down", fontName: "keyboard_arrow_down"},
    {fontClass: "material-symbols-outlined up", fontName: "keyboard_arrow_up"},
  ],
} as const;

// スキル定数
export const SKILLS_TITLE = "SKILLS" as const;

// プログラミング言語
const PROGRAMMING_LANGUAGES: SkillItem[] = [
  { name: "Java", iconClass: "devicon-java-plain colored", rating: 4 },
  { name: "JavaScript", iconClass: "devicon-javascript-plain colored", rating: 4 },
  { name: "TypeScript", iconClass: "devicon-typescript-plain colored", rating: 4 },
  { name: "PHP", iconClass: "devicon-php-plain colored", rating: 3 },
  { name: "Solidity", iconClass: "devicon-solidity-plain colored", rating: 3 },
  { name: "Python", iconClass: "devicon-python-plain colored", rating: 2 },
] as const;

// フロントエンド
const FRONTEND_SKILLS: SkillItem[] = [
  { name: "HTML5", iconClass: "devicon-html5-plain colored", rating: 4 },
  { name: "CSS3", iconClass: "devicon-css3-plain colored", rating: 4 },
  { name: "React", iconClass: "devicon-react-original colored", rating: 4 },
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
  { name: "AWS", iconClass: "devicon-amazonwebservices-plain-wordmark colored", rating: 4 },
  { name: "Docker", iconClass: "devicon-docker-plain colored", rating: 3 },
  { name: "Vercel", iconClass: "devicon-vercel-original white-icon", rating: 3 }
] as const;

// データベース
const DATABASE_SKILLS: SkillItem[] = [
  { name: "MySQL", iconClass: "devicon-mysql-plain colored", rating: 4 },
  { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored", rating: 3 },
] as const;

// 開発ツール
const DEVELOPMENT_TOOLS: SkillItem[] = [
  { name: "VSCode/Cursor", iconClass: "devicon-vscode-plain colored", rating: 4 },
  { name: "Eclipse", iconClass: "devicon-eclipse-plain white-icon", rating: 4 },
  { name: "Git", iconClass: "devicon-git-plain colored", rating: 4 },
  { name: "Subversion", iconClass: "devicon-subversion-plain colored", rating: 4 },
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