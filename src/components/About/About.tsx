import styles from "@/styles/About/About.module.css";
import common from "@/styles/common/common.module.css";
import { ABOUT } from "@/constants/contents";
import Profile from "@/components/About/Profile";
import Introduction from "@/components/About/Introduction";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`${common.window} neon-border`}>
        <div className={common.windowHeader}>
          <span>{ABOUT.title}</span>
        </div>
        <div className={styles.aboutWindowContent}>
          <Profile />
          <Introduction />
        </div>
      </div>
    </section>
  );
}