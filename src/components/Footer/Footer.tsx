import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Footer/Footer.module.css";
import commonStyles from "@/styles/common/common.module.css";
import ContactModal from "@/components/Footer/ContactModal";
import PolicyModal from "@/components/Footer/PolicyModal";
import ToastContainer from "@/components/UI/Toast";
import { CONTACT_LINKS } from "@/constants/contents";
import { PRIVACY_POLICY, SITE_POLICY, COPYRIGHT_TEXT } from "@/constants/policies";
import { ContactLink } from "@/types/footer";
import Icon from "@/components/UI/Icons";
import { IconName } from "@/constants/icons";
import { trackEvent, trackExternalLink } from "@/utils/analytics";
import { useToast } from "@/hooks/useToast";

export default function Footer() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
  const [policyType, setPolicyType] = useState<'privacy' | 'site'>('privacy');
  
  // トースト通知機能（Footer側で管理）
  const { toasts, success, removeToast } = useToast();

  const handleEmailClick = () => {
    trackEvent('contact_modal_open', 'engagement', 'email');
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
  };

  // メール送信成功時のコールバック
  const handleEmailSuccess = () => {
    success('送信完了', 'メールが正常に送信されました');
  };

  const handlePrivacyPolicyClick = () => {
    trackEvent('policy_view', 'engagement', 'privacy_policy');
    setPolicyType('privacy');
    setIsPolicyModalOpen(true);
  };

  const handleSitePolicyClick = () => {
    trackEvent('policy_view', 'engagement', 'site_policy');
    setPolicyType('site');
    setIsPolicyModalOpen(true);
  };

  const handleClosePolicyModal = () => {
    setIsPolicyModalOpen(false);
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
                      onClick={() => {
                        if (link.isExternal && link.href) {
                          trackExternalLink(link.href);
                        }
                      }}
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
                  onClick={() => {
                    if (link.isExternal && link.href) {
                      trackExternalLink(link.href);
                    }
                  }}
                >
                  {link.text}
                </a>
              );
            })}
          </div>

          {/* ポリシーリンクとコピーライト */}
          <div className={styles.footerBottom}>
            <div className={styles.policyLinks}>
              <button 
                onClick={handlePrivacyPolicyClick}
                className={styles.policyLink}
                aria-label="プライバシーポリシーを開く"
              >
                プライバシーポリシー
              </button>
              <span className={styles.separator}>|</span>
              <button 
                onClick={handleSitePolicyClick}
                className={styles.policyLink}
                aria-label="サイトポリシーを開く"
              >
                サイトポリシー
              </button>
            </div>
            <div className={styles.copyright}>
              {COPYRIGHT_TEXT}
            </div>
          </div>
        </div>
      </footer>
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={handleCloseContactModal}
        onEmailSuccess={handleEmailSuccess}
      />
      
      <PolicyModal
        isOpen={isPolicyModalOpen}
        onClose={handleClosePolicyModal}
        title={policyType === 'privacy' ? 'プライバシーポリシー' : 'サイトポリシー'}
        content={policyType === 'privacy' ? PRIVACY_POLICY : SITE_POLICY}
      />
      
      <ToastContainer toasts={toasts} onClose={removeToast} />
    </>
  );
}