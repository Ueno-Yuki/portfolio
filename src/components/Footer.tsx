import { useState } from "react";
import styles from "@/styles/Footer.module.css";
import ContactModal from "./ContactModal";

interface ContactLink {
  href?: string;
  text: string;
  onClick?: () => void;
}

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEmailClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const contactLinks: ContactLink[] = [
    {
      text: "EMAIL",
      onClick: handleEmailClick
    },
    {
      href: "https://github.com/Ueno-Yuki",
      text: "GITHUB"
    },
  ];

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className="glow">CONTACT</p>
          <div className={styles.contactLinks}>
            {contactLinks.map((link, index) => {
              if (link.onClick) {
                return (
                  <button
                    key={index}
                    onClick={link.onClick}
                    className={`${styles.contactLink} ${styles.contactButton} glow`}
                  >
                    {link.text}
                  </button>
                );
              }
              
              return (
                <a
                  key={index}
                  href={link.href}
                  className={`${styles.contactLink} glow`}
                  target="_blank"
                  rel="noopener noreferrer"
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