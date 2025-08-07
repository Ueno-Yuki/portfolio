import { useState } from "react";
import styles from "@/styles/About/Introduction.module.css";
import { ABOUT } from "@/constants/contents"; 
import Icon from "@/components/UI/Icons";

export default function Introduction() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const maxIndex = ABOUT.introductions.length;
  
  const handleArrowClick = (direction: 'up' | 'down') => {
    if (direction === 'down' && currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else if (direction === 'up' && currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // 現在のindexに対応するコンテンツを取得
  const currentContent = ABOUT.introductions.find(intro => parseInt(intro.idx) === currentIndex);

  return (
    <div className={styles.introduction}>
      {/* chevronUp */}
      <div className={styles.arrows}>
        <span 
          className={styles.arrows}
          onClick={() => handleArrowClick('up')}
          style={{ visibility: currentIndex > 1 ? 'visible' : 'hidden' }}
        >
          <Icon name={ABOUT.arrows[1].fontName} size="xl" />
        </span>
      </div>
      
      {currentContent && (
        <div className={styles.rightContent}>
          <div className={styles.contentSubtitle}>
            <div className={styles.date}>{currentContent.date}</div>
            <div className={styles.subtitle}>{currentContent.subtitle}</div>
          </div>
          <div className={styles.content}>{currentContent.content}</div>
          <div className={styles.tagList}>
            {currentContent.tagName.split(",").map((tag,index) => (
              <div key={index} className={styles.tag}>{tag}</div>
            ))}
          </div>
        </div>
      )}
      
      {/* chevronDown */}
      <div className={styles.arrows}>
        <span 
          className={styles.arrow}
          onClick={() => handleArrowClick('down')}
          style={{ visibility: currentIndex < maxIndex ? 'visible' : 'hidden' }}
        >
          <Icon name={ABOUT.arrows[0].fontName} size="xl" />
        </span>
      </div>
    </div>
  );
} 