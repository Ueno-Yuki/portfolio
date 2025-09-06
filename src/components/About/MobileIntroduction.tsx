import { useState, useRef, useEffect } from "react";
import styles from "@/styles/About/MobileIntroduction.module.css";
import { ABOUT } from "@/constants/contents";
import { ICONS } from "@/constants/icons";

export default function MobileIntroduction() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set()); // 全て未展開状態
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const toggleAccordion = (itemId: string) => {
    const newExpandedItems = new Set(expandedItems);
    
    if (expandedItems.has(itemId)) {
      newExpandedItems.delete(itemId);
    } else {
      newExpandedItems.add(itemId);
    }
    
    setExpandedItems(newExpandedItems);
  };
  
  // Intersection Observer設定
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
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
  }, [isVisible]);

  return (
    <div 
      ref={sectionRef} 
      className={styles.introduction}
    >
      {/* アコーディオンリスト */}
      <div className={styles.accordionContainer}>
        {ABOUT.introductions.map((content) => {
          const isExpanded = expandedItems.has(content.idx);
          
          return (
            <div key={content.idx} className={styles.accordionItem}>
              {/* アコーディオンヘッダー */}
              <div 
                className={`${styles.accordionHeader} ${isExpanded ? styles.expanded : ''}`}
                onClick={() => toggleAccordion(content.idx)}
              >
                <div className={styles.headerContent}>
                  <div className={`${styles.subtitle} glow_min`}>{content.subtitle}</div>
                  <div className={styles.date}>{content.date}</div>
                </div>
                <div className={`${styles.accordionIcon} ${isExpanded ? styles.rotated : ''}`}>
                  <ICONS.chevronDown size={20} />
                </div>
              </div>

              {/* アコーディオンコンテンツ */}
              <div className={`${styles.accordionContent} ${!isExpanded ? styles.collapsed : ''}`}>
                <div className={styles.contentText}>
                  {content.content}
                </div>
                <div className={styles.tagList}>
                  {content.tagName.split(",").map((tag, tagIndex) => (
                    <div key={tagIndex} className={styles.tag}>{tag}</div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}