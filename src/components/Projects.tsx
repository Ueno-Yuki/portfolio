import { PROJECT } from "@/constants/contents";
import styles from "@/styles/Projects.module.css";

export default function Projects() {
  return (
    <section className={styles.projectsSection}>
      <div className={`${styles.window} neon-border`}>
        <div className={styles.windowHeader}>
          <span>{PROJECT.title}</span>
        </div>
        <div className={styles.windowContent}>
          <div className={styles.projectGrid}>
            {PROJECT.items.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.techStack}>
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techTag}>
                      {tech}
                    </span>
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