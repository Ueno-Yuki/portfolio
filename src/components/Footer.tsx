import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Footer.module.css";
import commonStyles from "@/styles/common/common.module.css";
import ContactModal from "./ContactModal";
import { CONTACT_LINKS } from "@/constants/contents";
import { ContactLink } from "@/types/footer";
import Icon from "./UI/Icons";
import { IconName } from "@/constants/icons";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEmailClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const contactLinks: ContactLink[] = CONTACT_LINKS.map(link => {
    if (link.text === "EMAIL") {
      return {
        ...link,
        onClick: handleEmailClick,
      };
    }
    return link;
  });

  return (
    <>
<footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={`${styles.contactLinks} ${commonStyles.flexCenter}`}>
            {contactLinks.map((link, index) => {
              // onClickがある場合はボタンとして描画
              if (link.onClick) {
                return (
                  <button 
                  key={index} 
                  onClick={link.onClick} 
                  className={`${commonStyles.buttonGreen} ${styles.footerButton} glow`}
                  aria-label={link.ariaLabel}
                  >
                    <Icon name={link.iconName as IconName} className={styles.icon} />
                    {link.text}
                  </button>
                );
              }
              
              // SVGがある場合の外部リンク
              if (link.hasSvg && link.svgPath) {
                return (
                  <div key={index} className={styles.githubContent}>
                    <a 
                      href={link.href} 
                      className={`${commonStyles.buttonGreen} ${styles.footerButton} glow_min`}
                      target={link.isExternal ? "_blank" : undefined}
                      rel={link.isExternal ? "noopener noreferrer" : undefined}
                      aria-label={link.ariaLabel}
                    >
                      <Image 
                        src={link.svgPath} 
                        alt={link.ariaLabel} 
                        width={25} 
                        height={25}
                        className={styles.icon} />
                      {link.text}
                    </a>
                  </div>
                );
              }
              
              // 通常の外部リンク
              return (
                <a 
                  key={index} 
                  href={link.href} 
                  className={`${commonStyles.buttonGreen} ${styles.footerButton} glow`}
                  target={link.isExternal ? "_blank" : undefined}
                  rel={link.isExternal ? "noopener noreferrer" : undefined}
                  aria-label={link.ariaLabel}
                >
                  {link.text}
                </a>
              );
            })}
          </div>
        </div>
      </footer>
      
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </>
  );
}