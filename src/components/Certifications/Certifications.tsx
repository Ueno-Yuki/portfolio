import styles from "@/styles/Certifications/Certifications.module.css";
import commonStyles from "@/styles/common/common.module.css";
import { CERTIFICATIONS } from "@/constants/contents";
import CertificationList from "../Certifications/CertificationList";

export default function Certifications() {
  return (
    <section id="certifications" className={styles.certificationsSection}>
      <div className={`${commonStyles.window} neon-border`}>
        <div className={commonStyles.windowHeader}>
          <span>{CERTIFICATIONS.title}</span>
        </div>
        <div className={commonStyles.windowContent}>
          <CertificationList />
        </div>
      </div>
    </section>
  );
}