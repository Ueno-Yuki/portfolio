import styles from "@/styles/Hero.module.css";
import commonStyles from "@/styles/common/common.module.css";
import { HERO } from "@/constants/contents";

export default function Hero() {
  return (
    <div className={styles.heroSection}>
      <h1 className={`${commonStyles.titlePrimary} ${styles.heroTitle} glow`}>{HERO.title}</h1>
      <h2 className={`${styles.heroSubtitle}`}>{HERO.subtitle}</h2>
      <div className={styles.matrix}>
        <div className={styles.matrixCode}>{HERO.matrixCode}</div>
      </div>
    </div>
  );
}