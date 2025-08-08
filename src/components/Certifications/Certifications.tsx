import styles from "@/styles/Certifications/Certifications.module.css";
import common from "@/styles/Common/common.module.css";
import { CERTIFICATIONS } from "@/constants/contents";
import CertificationList from "../Certifications/CertificationList";

export default function Certifications() {
  return (
    <section className={styles.certificationsSection}>
      <div className={`${common.window} neon-border`}>
        <div className={common.windowHeader}>
          <span>{CERTIFICATIONS.title}</span>
        </div>
        <div className={common.windowContent}>
          <CertificationList />
        </div>
      </div>
    </section>
  );
}