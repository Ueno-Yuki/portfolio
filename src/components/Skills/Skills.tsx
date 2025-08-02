import styles from "@/styles/Skills/Skills.module.css";
import StarRating from "../Skills/StarRating";
import { SKILLS, SKILLS_TITLE } from "@/constants/contents";

export default function Skills() {
  return (
    <section className={styles.skillsSection}>
      <div className={`${styles.window} neon-border`}>
        <div className={styles.windowHeader}>
          <span>{SKILLS_TITLE}</span>
        </div>
        <div className={styles.windowContent}>
          <div className={styles.skillsContainer}>
            {SKILLS.map((category, categoryIndex) => (
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
                  {category.skills.map((skill, skillIndex) => {
                    // アイコンクラスから色クラスを抽出
                    const colorClasses = ['white-icon', 'red-icon', 'green-icon', 'blue-icon', 'yellow-icon', 'orange-icon', 'purple-icon', 'pink-icon', 'cyan-icon', 'gray-icon'];
                    const colorClass = colorClasses.find(cls => skill.iconClass.includes(cls));
                    const cleanIconClass = skill.iconClass.replace(/\s*(white-icon|red-icon|green-icon|blue-icon|yellow-icon|orange-icon|purple-icon|pink-icon|cyan-icon|gray-icon)\s*/g, '').trim();
                    
                    return (
                      <div key={skillIndex} className={`${styles.skillItem} ${colorClass ? styles[colorClass] : ''}`}>
                        <div className={styles.skillInfo}>
                          <i className={`${cleanIconClass} ${styles.skillIcon}`}></i>
                          <span className={styles.skillName}>{skill.name}</span>
                        </div>
                        <StarRating rating={skill.rating} />
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}