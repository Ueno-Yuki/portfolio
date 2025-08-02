import styles from "@/styles/Certifications.module.css";
import { CERTIFICATIONS } from "@/constants/contents";
import Image from "next/image";

export default function CertificationList() {
  return (
    <div className={styles.certificationListContainer}>
      {CERTIFICATIONS.items.map((item, index) => (
        <div key={index} className={styles.certificationCard}>
          <div className={styles.thumbnail}>
            <Image src={item.imagePath} alt={item.iconName} width={100} height={100} className={styles.cardImg}/>
            <div className={styles.date}>{item.date}</div>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.contentTitle}>{item.iconName}</div>
            <div className={styles.contentNote}>{item.note}</div>
          </div>
        </div>
      ))}
    </div>
  )
}