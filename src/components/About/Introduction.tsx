import styles from "@/styles/About/Introduction.module.css";
import {ABOUT} from "@/constants/contents"; 

export default function Introduction() {
  return (
    <div className={styles.introduction}>
      {ABOUT.introductions.map((about, index) => (
        <div key={index} className={styles.rightContent}>
            <div className={styles.contentSubtitle}>
              <div className={styles.date}>{about.date}</div>
              <div className={styles.subtitle}>{about.subtitle}</div>
            </div>
            <div className={styles.content}>{about.content}</div>
        </div>
      ))}
        <div className={styles.arrows}>
          {ABOUT.arrows.map((arrow, index) => (
            <span key={index} className={`${arrow.fontClass} ${styles.arrow}`}>{arrow.fontName}</span>
        ))}
      </div>
    </div>
  );
} 