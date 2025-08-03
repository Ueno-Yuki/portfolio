import styles from "@/styles/About/About.module.css";
import { ABOUT } from "@/constants/contents";
import Profile from "../About/Profile";
import Introduction from "../About/Introduction";

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={`${styles.window} neon-border`}>
        <div className={styles.windowHeader}>
          <span>{ABOUT.title}</span>
        </div>
        <div className={styles.windowContent}>
          <Profile />
          <Introduction />
        </div>
      </div>
    </section>
  );
}