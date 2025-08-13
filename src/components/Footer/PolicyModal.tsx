import { useEffect } from "react";
import styles from "@/styles/Footer/PolicyModal.module.css";
import commonStyles from "@/styles/common/common.module.css";
import Icon from "@/components/UI/Icons";

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export default function PolicyModal({ isOpen, onClose, title, content }: PolicyModalProps) {
  useEffect(() => {
    if (isOpen) {
      // スクロール位置を保存
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      // スクロール位置をdata属性に保存
      document.body.setAttribute('data-scroll-y', scrollY.toString());
    } else if (document.body.hasAttribute('data-scroll-y')) {
      // スクロール位置を復元（モーダルが閉じられた時のみ）
      const scrollY = document.body.getAttribute('data-scroll-y');
      
      // スタイルを削除
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      
      // 次のフレームでスクロール位置を復元
      if (scrollY) {
        requestAnimationFrame(() => {
          window.scrollTo(0, parseInt(scrollY));
          document.body.removeAttribute('data-scroll-y');
        });
      }
    }

    return () => {
      // クリーンアップ（コンポーネントアンマウント時のみ）
      if (document.body.hasAttribute('data-scroll-y')) {
        const scrollY = document.body.getAttribute('data-scroll-y');
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        
        if (scrollY) {
          window.scrollTo(0, parseInt(scrollY));
          document.body.removeAttribute('data-scroll-y');
        }
      }
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2 className={`${commonStyles.titlePrimary} ${styles.modalTitle}`}>{title}</h2>
          <button 
            className={styles.closeButton}
            onClick={onClose}
            aria-label="モーダルを閉じる"
          >
            <Icon name="close" className={styles.closeIcon} />
          </button>
        </div>
        
        <div className={styles.modalBody}>
          <div 
            className={styles.policyContent}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  );
}