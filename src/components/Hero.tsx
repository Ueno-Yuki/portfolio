import styles from "@/styles/Hero.module.css";
import commonStyles from "@/styles/common/common.module.css";
import { HERO } from "@/constants/contents";
import { motion, Variants } from "framer-motion";
import { useLoading } from "@/contexts/LoadingContext";
import { useState, useEffect } from "react";

export default function Hero() {
  const { isLoadingComplete } = useLoading();
  const [isMatrixAnimating, setIsMatrixAnimating] = useState(false);

  // マトリックスアニメーション開始制御
  useEffect(() => {
    if (isLoadingComplete) {
      // 1.4秒遅延後にアニメーション開始
      const timer = setTimeout(() => {
        setIsMatrixAnimating(true);
      }, 1400);
      
      return () => clearTimeout(timer);
    }
  }, [isLoadingComplete]);

  // アニメーション variants
  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  const subtitleVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }
    }
  };

  const scrollVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, delay: 1, ease: "easeOut" }
    }
  };

  return (
    <div className={styles.heroSection}>
      <motion.h1 
        className={`${commonStyles.titlePrimary} ${styles.heroTitle} glow`}
        variants={titleVariants}
        initial="hidden"
        animate={isLoadingComplete ? "visible" : "hidden"}
      >
        {HERO.title}
      </motion.h1>
      
      <motion.h2 
        className={styles.heroSubtitle}
        variants={subtitleVariants}
        initial="hidden"
        animate={isLoadingComplete ? "visible" : "hidden"}
      >
        {HERO.subtitle}
      </motion.h2>
      
      <div 
        className={`${styles.matrixCodeText} ${isMatrixAnimating ? styles.animate : ''}`} 
        aria-hidden="true"
      >
        <div className={styles.matrixCode1}>{HERO.matrixCode}</div>
        <div className={styles.matrixCode2}>{HERO.matrixCode}</div>
        <div className={styles.matrixCode3}>{HERO.matrixCode}</div>
      </div>
      
      <motion.div 
        className={styles.scroll}
        variants={scrollVariants}
        initial="hidden"
        animate={isLoadingComplete ? "visible" : "hidden"}
      >
        <span>Scroll</span>
      </motion.div>
    </div>
  );
}