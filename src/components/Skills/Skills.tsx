import styles from "@/styles/Skills/Skills.module.css";
import common from "@/styles/common/common.module.css";
import StarRating from "../Skills/StarRating";
import { SKILL, SKILLS } from "@/constants/contents";
import { IPA_URL } from "@/constants/urls";
import Icon from "@/components/UI/Icons";

export default function Skills() {
  return (
    <section className={styles.skillsSection}>
      <div className={`${common.window} neon-border`}>
        <div className={common.windowHeader}>
          <span>{SKILL.title}</span>
        </div>
        <div className={common.windowContent}>
          <div className={styles.descContainer}>
            {SKILL.descriptions.map((desc, index) => (
              <div key={index} className={styles.desc}>
                <StarRating rating={desc.rating} />
                <div className={styles.descContent}>{desc.description}</div>
              </div>
              ))}
          </div>
          <div className={styles.descComment}>
            {SKILL.comment}
            <a href={IPA_URL} target="_blank" className={styles.link}>
              {SKILL.link}
              <Icon name={SKILL.iconName} />
            </a>
          </div>
          <div className={styles.skillsContainer}>
            {SKILLS.map((category, categoryIndex) => (
              <div key={categoryIndex} className={styles.skillCategory}>
                <div 
                  className={styles.categoryHeader}
                  style={{ borderColor: category.color }}
                >
                  <Icon name={category.iconName} size="xl" 
                    color={category.color} />
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