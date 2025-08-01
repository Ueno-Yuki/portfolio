import styles from "@/styles/About.module.css";
import {ABOUT_CONTENTS} from "@/constants/contents"; 

export default function Introduction() {
  return (
    <div className={styles.introduction}>
      {ABOUT_CONTENTS.map((about, index) => (
        <div key={index} className={styles.rightContent}>
            <div className={styles.contentTitle}>{about.subtitle}</div> 
            <div className={styles.content}>{about.content}</div>
        </div>
      ))}
    </div>
  );
} 