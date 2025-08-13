import { PROJECT } from "@/constants/contents";
import styles from "@/styles/Projects.module.css";
import commonStyles from "@/styles/common/common.module.css";
import { useState, useRef, useEffect } from "react";
import { trackEvent } from "@/utils/analytics";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // 一度アニメーションが発火したら監視を停止
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2, // 20%が画面に入ったら発火
        rootMargin: '0px 0px -50px 0px' // 少し余裕を持たせる
      }
    );

    const currentElement = sectionRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);
  return (
    <section ref={sectionRef} className={`${styles.projectsSection} ${isVisible ? styles.visible : ''}`}>
      <div className={`${commonStyles.window} neon-border`}>
        <div className={commonStyles.windowHeader}>
          <span>{PROJECT.title}</span>
        </div>
        <div className={commonStyles.windowContent}>
          <div className={styles.projectGrid}>
            {PROJECT.items.map((project, index) => {
              // 最初から両方のクラスを付与して、CSS側で制御
              const cardClasses = [
                styles.projectCard, 
                commonStyles.cardPink,
                isVisible ? styles.animateIn : '',
                styles.hoverEnabled
              ].filter(Boolean);
              
              return (
                <div 
                  key={index} 
                  className={cardClasses.join(' ')}
                  onClick={() => trackEvent('project_view', 'engagement', project.title)}>
                  <div className={styles.contentContainer}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className={styles.techStack}>
                      {project.techStack.map((tech, techIndex) => (
                        <span key={techIndex} className={commonStyles.tag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}