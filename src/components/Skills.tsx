import styles from "@/styles/Skills.module.css";
import StarRating from "./StarRating";

interface SkillItem {
  name: string;
  iconClass: string;
  rating: number;
}

interface SkillCategory {
  title: string;
  iconClass: string;
  iconName?: string;
  color: string;
  skills: SkillItem[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "プログラミング言語",
      iconClass: "material-symbols-outlined",
      iconName: "code",
      color: "var(--neon-blue)",
      skills: [
        { name: "Java", iconClass: "devicon-java-plain colored", rating: 4 },
        { name: "JavaScript", iconClass: "devicon-javascript-plain colored", rating: 4 },
        { name: "TypeScript", iconClass: "devicon-typescript-plain colored", rating: 4 },
        { name: "PHP", iconClass: "devicon-php-plain colored", rating: 3 },
        { name: "Python", iconClass: "devicon-python-plain colored", rating: 2 },
      ]
    },
    {
      title: "フロントエンド",
      iconClass: "material-symbols-outlined",
      iconName: "web",
      color: "var(--neon-pink)",
      skills: [
        { name: "HTML5", iconClass: "devicon-html5-plain colored", rating: 4 },
        { name: "CSS3", iconClass: "devicon-css3-plain colored", rating: 4 },
        { name: "React", iconClass: "devicon-react-original colored", rating: 4 },
        { name: "Next.js", iconClass: "devicon-nextjs-original colored", rating: 3 },
        { name: "Vue.js", iconClass: "devicon-vuejs-plain colored", rating: 3 },
      ]
    },
    {
      title: "バックエンド",
      iconClass: "material-symbols-outlined",
      iconName: "settings",
      color: "var(--neon-green)",
      skills: [
        { name: "Node.js", iconClass: "devicon-nodejs-plain colored", rating: 4 },
        { name: "Spring Boot", iconClass: "devicon-spring-plain colored", rating: 4 },
        { name: "Laravel", iconClass: "devicon-laravel-plain colored", rating: 3 },
      ]
    },
    {
      title: "クラウド・インフラ",
      iconClass: "material-symbols-outlined",
      iconName: "cloud",
      color: "var(--neon-cyan)",
      skills: [
        { name: "AWS", iconClass: "devicon-amazonwebservices-plain-wordmark colored", rating: 4 },
        { name: "Docker", iconClass: "devicon-docker-plain colored", rating: 3 },
        { name: "Vercel", iconClass: "devicon-vercel-original-wordmark colored", rating: 3 }
      ]
    },
    {
      title: "データベース",
      iconClass: "material-symbols-outlined",
      iconName: "database",
      color: "#9966ff",
      skills: [
        { name: "MySQL", iconClass: "devicon-mysql-plain colored", rating: 4 },
        { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored", rating: 3 },
      ]
    },
    {
      title: "開発ツール",
      iconClass: "material-symbols-outlined",
      iconName: "build",
      color: "#ff9900",
      skills: [
        { name: "VS Code", iconClass: "devicon-vscode-plain colored", rating: 4 },
        { name: "Eclipse", iconClass: "devicon-eclipse-plain-wordmark colored", rating: 4 },
        { name: "Git", iconClass: "devicon-git-plain colored", rating: 4 },
        { name: "Terraform", iconClass: "devicon-terraform-plain colored", rating: 3 },
      ]
    }
  ];

  return (
    <section className={styles.skillsSection}>
      <div className={`${styles.window} neon-border`}>
        <div className={styles.windowHeader}>
          <span>SKILLS</span>
        </div>
        <div className={styles.windowContent}>
          <div className={styles.skillsContainer}>
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className={styles.skillCategory}>
                <div 
                  className={styles.categoryHeader}
                  style={{ borderColor: category.color }}
                >
                  <i 
                    className={`${category.iconClass} ${styles.categoryIcon}`}
                    style={{ color: category.color }}
                  >
                    {category.iconName}
                  </i>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                </div>
                <div className={styles.skillsList}>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className={styles.skillItem}>
                      <div className={styles.skillInfo}>
                        <i className={`${skill.iconClass} ${styles.skillIcon}`}></i>
                        <span className={styles.skillName}>{skill.name}</span>
                      </div>
                      <StarRating rating={skill.rating} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}