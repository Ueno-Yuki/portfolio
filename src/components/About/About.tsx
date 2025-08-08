import styles from "@/styles/About/About.module.css";
import common from "@/styles/Common/common.module.css";
import { ABOUT } from "@/constants/contents";
import Profile from "../About/Profile";
import Introduction from "../About/Introduction";

export default function About() {
  return (
    <section className={styles.aboutSection}>
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