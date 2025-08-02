import styles from "@/styles/About.module.css";
import {ABOUT} from "@/constants/contents"; 

export default function Introduction() {
  return (
    <div className={styles.introduction}>
      {ABOUT.introductions.map((about, index) => (
        <div key={index} className={styles.rightContent}>
            <div className={styles.contentSubtitle}>
              <div>{about.subtitle}</div>
              {'note' in about ? <div className={styles.note}>{about.note}</div> : <></>}
              <div className={styles.date}>{about.date}</div>
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