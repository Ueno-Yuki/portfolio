import styles from "@/styles/Projects.module.css";

interface Project {
  title: string;
  description: string;
  techStack: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "業務管理システム",
      description: "Java Spring Bootを用いた大規模業務システム開発",
      techStack: "Java, Spring Boot, Oracle, AWS"
    },
    {
      title: "Webアプリケーション",
      description: "PHP Laravelでの顧客管理システム構築",
      techStack: "PHP, Laravel, MySQL, Docker"
    },
    {
      title: "フロントエンド開発",
      description: "React/Next.jsを用いたSPA開発",
      techStack: "React, Next.js, TypeScript, Vercel"
    }
  ];

  return (
    <section className={styles.projectsSection}>
      <div className={`${styles.window} neon-border`}>
        <div className={styles.windowHeader}>
          <span>PROJECTS</span>
        </div>
        <div className={styles.windowContent}>
          <div className={styles.projectGrid}>
            {projects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <h3 className="glow">{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.techStack}>{project.techStack}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}