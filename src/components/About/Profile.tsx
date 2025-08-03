import styles from "@/styles/About/Profile.module.css";
import Image from "next/image";
import {ABOUT} from "@/constants/contents";

export default function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.imageContainer}>
        <Image src={ABOUT.image_path} alt="Profile" width={170} height={170} className={styles.profileImage} />
      </div>
      <div className={styles.leftText}>
        {ABOUT.items.map((profile, index) => (
          <div key={index}>
            <div className={styles.leftTextContent}>
              <i className={profile.iconClass}>{profile.iconName}</i>
              <div>{profile.text}</div>
            </div>
          </div>
        ))}
      </div> 
    </div>
  );
}