import styles from "@/styles/About/Profile.module.css";
import Image from "next/image";
import { ABOUT } from "@/constants/contents";
import Icon from "@/components/UI/Icons";
import { trackExternalLink } from "@/utils/analytics";

export default function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.imageContainer}>
        <Image 
          src={ABOUT.image_path} 
          alt="Profile" 
          width={170} 
          height={170} 
          className={styles.profileImage}
          priority
          quality={75}
        />
      </div>
      <div className={styles.leftText}>
        {ABOUT.items.map((profile, index) => (
          <div key={index}>
            <div className={styles.leftTextContent}>
              <Icon name={profile.iconName} size="sm"></Icon>
              <div>{profile.text}</div>
            </div>
          </div>
        ))}
        <div className={styles.sns}>
          <a 
            href={ABOUT.sns.href}
            target={ABOUT.sns.isExternal ? "_blank" : undefined}
            rel={ABOUT.sns.isExternal ? "noopener noreferrer" : undefined}
            aria-label={ABOUT.sns.alt}
            onClick={() => {
              if (ABOUT.sns.isExternal && ABOUT.sns.href) {
                trackExternalLink(ABOUT.sns.href);
              }
            }}
          >
            <Image 
              src={ABOUT.sns.svgPath} 
              alt={ABOUT.sns.alt} 
              width={20}
              height={20}/>
          </a>
        </div>
      </div> 
    </div>
  );
}