import styles from "@/styles/Skills.module.css";

export default function Skills() {
  const skills = [
    "Java / Spring Boot",
    "PHP / Laravel",
    "HTML / CSS",
    "JavaScript / TypeScript",
    "React / Next.js",
    "Node.js",
    "AWS / Docker"
  ];

  return (
    <section className={styles.skillsSection}>
      <div className={`${styles.window} neon-border`}>
        <div className={styles.windowHeader}>
          <span>SKILLS</span>
        </div>
        <div className={styles.windowContent}>
          <div className={styles.skillGrid}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                <span className="glow">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}