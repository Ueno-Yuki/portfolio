import styles from "@/styles/About/Profile.module.css";
import Image from "next/image";
import {PROFILE} from "@/constants/contents";

export default function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.imageContainer}>
        <Image src={PROFILE.image_path} alt="Profile" width={170} height={170} className={styles.profileImage} />
      </div>
      <div className={styles.leftText}>
        {PROFILE.items.map((profile, index) => (
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