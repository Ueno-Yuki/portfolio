import { PROJECT } from "@/constants/contents";
import styles from "@/styles/Projects.module.css";
import commonStyles from "@/styles/Common/common.module.css";
import { useState, useRef, useEffect, useCallback } from "react";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // アニメーション完了を検知する関数
  const handleAnimationEnd = useCallback(() => {
    setAnimationComplete(true);
  }, []);
  
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
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
            {PROJECT.items.map((project, index) => (
              <div key={index} className={`
                  ${styles.projectCard} 
                  ${isVisible && !animationComplete ? styles.animateIn : ''} 
                  ${animationComplete ? styles.hoverEnabled : ''}
              `}
              onAnimationEnd={index === 0 ? handleAnimationEnd : undefined}>
                <div className={styles.contentContainer}>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}