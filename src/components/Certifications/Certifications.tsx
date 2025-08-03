import styles from "@/styles/Certifications/Certifications.module.css";
import { CERTIFICATIONS } from "@/constants/contents";
import CertificationList from "../Certifications/CertificationList";

export default function Certifications() {
  return (
    <section className={styles.certificationsSection}>
      <div className={`${styles.window} neon-border`}>
        <div className={styles.windowHeader}>
          <span>{CERTIFICATIONS.title}</span>
        </div>
        <div className={styles.windowContent}>
          <CertificationList />
        </div>
      </div>
    </section>
  );
}