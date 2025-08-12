import styles from "@/styles/UI/Animation.module.css";

export default function Animation() {
  return (
    <div className={`${styles.container} ${styles.fadeIn}`}>
      <div className={styles.box}></div>
    </div>
  );
}
