import { useState, useEffect } from "react";
import styles from "@/styles/Loading.module.css";

export default function Loading() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("INITIALIZING SYSTEM...");

  const loadingSteps = [
    "INITIALIZING SYSTEM...",
    "LOADING PROTOCOLS...",
    "CONNECTING TO MAINFRAME...",
    "DECRYPTING DATA FILES...",
    "ESTABLISHING SECURE CONNECTION...",
    "LOADING PORTFOLIO DATA...",
    "SYSTEM READY"
  ];

  useEffect(() => {
    // ローディング開始時にスクロールを無効化
    const originalOverflow = document.body.style.overflow;
    const originalPosition = document.body.style.position;
    const originalWidth = document.body.style.width;
    const originalTop = document.body.style.top;
    
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = '0';

    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1;
        
        if (newProgress <= 100) {
          const stepIndex = Math.floor((newProgress / 100) * (loadingSteps.length - 1));
          setCurrentText(loadingSteps[stepIndex]);
          
          if (newProgress === 100) {
            setTimeout(() => {
              // ローディング終了時にスクロールを復元し、トップに移動
              document.body.style.overflow = originalOverflow;
              document.body.style.position = originalPosition;
              document.body.style.width = originalWidth;
              document.body.style.top = originalTop;
              
              // スクロール位置を最上部に移動
              window.scrollTo({ top: 0, behavior: 'instant' });
              
              setIsVisible(false);
            }, 1000);
          }
          
          return newProgress;
        }
        
        clearInterval(interval);
        return prev;
      });
    }, 50);

    return () => {
      clearInterval(interval);
      // クリーンアップ時にもスクロールを復元
      document.body.style.overflow = originalOverflow;
      document.body.style.position = originalPosition;
      document.body.style.width = originalWidth;
      document.body.style.top = originalTop;
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.loadingContainer}>
        <div className={styles.terminal}>
          <div className={styles.terminalHeader}>
            <span className={styles.terminalTitle}>Welcome to My page.</span>
          </div>
          <div className={styles.terminalContent}>
            <div className={styles.loadingContent}>
              <p className={`${styles.loadingText} glow`}>{currentText}</p>
              
              <div className={styles.progressBarContainer}>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: `${progress}%` }}/>
                </div>
                <span className={`${styles.progressText} glow`}>{progress}%</span>
              </div>

              <div className={styles.loadingDots}>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}