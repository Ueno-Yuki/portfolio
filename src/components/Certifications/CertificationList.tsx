import styles from "@/styles/Certifications/CertificationList.module.css";
import commonStyles from "@/styles/common/common.module.css";
import { CERTIFICATIONS } from "@/constants/contents";
import Image from "next/image";
import Icon from "@/components/UI/Icons";
import { trackExternalLink } from "@/utils/analytics";

export default function CertificationList() {
  return (
    <>
      <div className={styles.certificationListContainer}>
        {CERTIFICATIONS.items.map((item, index) => (
          <a 
            key={index} 
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${commonStyles.card} ${commonStyles.cardHover} ${styles.certificationCard} ${styles.certificationLink}`}
            onClick={() => trackExternalLink(item.url)}
            aria-label={`${item.iconName}の詳細を確認`}
          >
            <div className={styles.externalIconContainer}>
              <Icon name="external" className={styles.externalIcon} />
            </div>
            <div className={styles.thumbnail}>
              <Image src={item.imagePath} alt={item.iconName} width={100} height={100} className={styles.cardImg}/>
              <div className={styles.date}>{item.date}</div>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.contentTitle}>{item.iconName}</div>
              <div className={styles.contentNote}>{item.note}</div>
            </div>
          </a>
        ))}
      </div>
      <div className={commonStyles.comment}>
        <Icon name={CERTIFICATIONS.comment.iconName} className={commonStyles.commentIcon} size="md" />
        <div className={commonStyles.commentText}>{CERTIFICATIONS.comment.text}</div>
      </div>
    </>
  )
}