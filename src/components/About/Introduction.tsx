import { useState, useRef, useEffect } from "react";
import styles from "@/styles/About/Introduction.module.css";
import animateStyles from "@/styles/UI/Animation.module.css";
import { ABOUT } from "@/constants/contents"; 
import Icon from "@/components/UI/Icons";
import { useTypeWriter } from "@/hooks/useTypeWriter";

export default function Introduction() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldStartTyping, setShouldStartTyping] = useState(false);
  const maxIndex = ABOUT.introductions.length;
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const handleArrowClick = (direction: 'up' | 'down') => {
    if (direction === 'down' && currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
      setShouldStartTyping(true); // 手動切り替え時は即座にタイピング開始
    } else if (direction === 'up' && currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
      setShouldStartTyping(true); // 手動切り替え時は即座にタイピング開始
    }
  };

  // Intersection Observer設定
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            setShouldStartTyping(true);
            // 一度発火したら監視を停止
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3, // 30%が画面に入ったら発火
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

  // 現在のindexに対応するコンテンツを取得
  const currentContent = ABOUT.introductions.find(intro => parseInt(intro.idx) === currentIndex);
  
  // タイピング効果用のhook - shouldStartTypingがtrueになってから開始
  const { displayText, isTyping, skipAnimation } = useTypeWriter({ 
    text: shouldStartTyping ? (currentContent?.content || '') : '', 
    speed: 10,  // 1文字あたり10ms
    delay: 200  // 200ms待機してから開始
  });

  return (
    <div ref={sectionRef} className={styles.introduction}>
      {/* chevronUp */}
      <div className={`${styles.arrows} ${styles.arrowUp}`}>
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
            <div className={`${styles.subtitle} glow_min`}>{currentContent.subtitle}</div>
          </div>
          <div 
            className={styles.content}
            onClick={skipAnimation}
            style={{ cursor: isTyping ? 'pointer' : 'default' }}
          >
            {displayText}
          </div>
          <div 
            key={currentIndex} 
            className={`${styles.tagList} ${!isTyping ? animateStyles.fadeIn : ''}`}
            style={{ opacity: isTyping ? 0 : 1 }}
          >
            {currentContent.tagName.split(",").map((tag,index) => (
              <div key={index} className={styles.tag}>{tag}</div>
            ))}
          </div>
        </div>
      )}
      
      {/* chevronDown */}
      <div className={`${styles.arrows} ${styles.arrowDown}`}>
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