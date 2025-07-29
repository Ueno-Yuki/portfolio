import styles from "@/styles/Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.heroSection}>
      <h1 className={`${styles.heroTitle} glow`}>
        YUKI UENO
      </h1>
      <h2 className={styles.heroSubtitle}>
        &gt; ENGINEER SINCE 2020
      </h2>
      <div className={styles.matrix}>
        <div className={styles.matrixCode}>
          01101000 01100101 01101100 01101100 01101111
        </div>
      </div>
    </div>
  );
}