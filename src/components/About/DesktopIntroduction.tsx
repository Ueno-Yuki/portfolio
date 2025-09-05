import { useState, useRef, useEffect } from "react";
import styles from "@/styles/About/DesktopIntroduction.module.css";
import animateStyles from "@/styles/UI/Animation.module.css";
import { ABOUT } from "@/constants/contents"; 
import { useTypeWriter } from "@/hooks/useTypeWriter";

export default function DesktopIntroduction() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldStartTyping, setShouldStartTyping] = useState(false);
  const maxIndex = ABOUT.introductions.length;
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const handleArrowClick = (direction: 'up' | 'down') => {
    if (direction === 'down' && currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
      setShouldStartTyping(true);
    } else if (direction === 'up' && currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
      setShouldStartTyping(true);
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

  // 現在のindexに対応するコンテンツを取得
  const currentContent = ABOUT.introductions.find(intro => parseInt(intro.idx) === currentIndex);

  // タイピング効果用のhook
  const { displayText, isTyping, skipAnimation } = useTypeWriter({ 
    text: shouldStartTyping ? (currentContent?.content || '') : '', 
    speed: 10,
    delay: 200
  });

  return (
    <div 
      ref={sectionRef} 
      className={styles.introduction}
      onClick={skipAnimation}
      style={{ cursor: isTyping ? 'pointer' : 'default' }}
    >
      {/* メインコンテンツ */}
      <div className={styles.contentArea}>
        <div className={styles.contentSubtitle}>
          <div className={styles.date}>{currentContent?.date}</div>
          <div className={`${styles.subtitle} glow_min`}>{currentContent?.subtitle}</div>
        </div>
        <div className={styles.contentTagArea}>
          <div className={styles.content}>
            {displayText}
          </div>
          <div 
            className={`${styles.tagList} ${!isTyping ? animateStyles.fadeIn : ''}`}
            style={{ opacity: isTyping ? 0 : 1 }}
          >
            {currentContent?.tagName.split(",").map((tag, tagIndex) => (
              <div key={tagIndex} className={styles.tag}>{tag}</div>
            ))}
          </div>
        </div>
      </div>

      {/* ナビゲーション（← Prev　【ページネーションドット】　Next →） */}
      <div className={styles.navigation}>
        <div 
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={(e) => {
            e.stopPropagation();
            handleArrowClick('up');
          }}
          style={{ opacity: currentIndex > 1 ? 1 : 0.3, pointerEvents: currentIndex > 1 ? 'auto' : 'none' }}
        >
          <span className={styles.navText}>Prev</span>
        </div>

        {/* ページネーションドット */}
        <div className={styles.paginationDots}>
          {Array.from({ length: maxIndex }, (_, index) => (
            <button
              key={index + 1}
              className={`${styles.dot} ${currentIndex === index + 1 ? styles.active : ''}`}
              onClick={() => {
                setCurrentIndex(index + 1);
                setShouldStartTyping(true);
              }}
              aria-label={`${index + 1}番目のコンテンツへ移動`}
            />
          ))}
        </div>

        <div 
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={(e) => {
            e.stopPropagation();
            handleArrowClick('down');
          }}
          style={{ opacity: currentIndex < maxIndex ? 1 : 0.3, pointerEvents: currentIndex < maxIndex ? 'auto' : 'none' }}
        >
          <span className={styles.navText}>Next</span>
        </div>
      </div>
    </div>
  );
}