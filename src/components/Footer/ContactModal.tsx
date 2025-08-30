import { useState, useEffect } from "react";
import styles from "@/styles/Footer/ContactModal.module.css";
import commonStyles from "@/styles/common/common.module.css";
import ToastContainer from "@/components/UI/Toast";
import { useToast } from "@/hooks/useToast";
import { trackEvent } from "@/utils/analytics";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEmailSuccess?: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactModal({ isOpen, onClose, onEmailSuccess }: ContactModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // トースト通知機能
  const { toasts, error, removeToast, clearToasts } = useToast();

  // アニメーション管理
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsAnimating(false); // 開くアニメーション：閉じた状態から開始
      
      // より強力なスクロール無効化
      const originalOverflow = document.body.style.overflow;
      const originalPosition = document.body.style.position;
      const originalTop = document.body.style.top;
      const scrollY = window.scrollY;
      
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      // 開くアニメーション開始
      setTimeout(() => {
        setIsAnimating(true); // 開いた状態にアニメーション
      }, 10);
      
      return () => {
        // スクロール位置を復元
        document.body.style.overflow = originalOverflow;
        document.body.style.position = originalPosition;
        document.body.style.top = originalTop;
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
      };
    } else if (isVisible) {
      // 閉じるアニメーション開始
      setIsAnimating(false); // 閉じた状態にアニメーション
      
      // 閉じるアニメーション完了後に非表示
      setTimeout(() => {
        setIsVisible(false);
        // モーダルが完全に閉じた時にトーストをクリア
        clearToasts();
      }, 300);
    }
  }, [isOpen, isVisible, clearToasts]);

  // フォームリセット
  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  // モーダルを閉じる
  const handleClose = () => {
    resetForm();
    onClose();
  };

  // モーダル外クリックで閉じる
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // フォーム入力変更
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // フォーム送信
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const hasName = formData.name.trim();
    const hasEmail = formData.email.trim();
    const hasPhone = formData.phone.trim();
    const hasMessage = formData.message.trim();
    
    if (!hasName || !hasMessage) {
      error('入力エラー', '氏名と内容は必須です');
      return false;
    }
    
    if (!hasEmail && !hasPhone) {
      error('入力エラー', 'メールアドレスまたは電話番号のどちらかは必須です');
      return false;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // 送信成功をトラッキング
        trackEvent('contact_form_submit', 'conversion', 'email_sent');
        resetForm();
        onClose();
        // モーダルが閉じてからトースト通知を表示（親コンポーネントで）
        setTimeout(() => {
          onEmailSuccess?.();
        }, 300);
      } else {
        // 送信失敗をトラッキング
        trackEvent('contact_form_error', 'error', data.error || 'unknown_error');
        error('送信失敗', data.error || 'メール送信に失敗しました');
      }
    } catch (err) {
      error('ネットワークエラー', 'ネットワークエラーが発生しました');
      console.log('Contact Form Error: ', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <ToastContainer toasts={toasts} onClose={removeToast} />
      <div 
        className={`${styles.modalOverlay} ${isAnimating ? styles.fadeIn : styles.fadeOut}`} 
        onClick={handleOverlayClick}
        >
        <div className={`${styles.modalContainer} ${isAnimating ? styles.slideIn : styles.slideOut}`}>
          <div className={styles.modalHeader}>
            <h2 className={commonStyles.titlePrimary}>CONTACT FORM</h2>
            <button className={`${styles.formButton} ${commonStyles.buttonSecondary}`} onClick={handleClose} disabled={isSubmitting}>
              ×
            </button>
          </div>

          <div className={styles.modalContent}>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={commonStyles.formLabel}>氏名</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange}
                  className={commonStyles.formInput} disabled={isSubmitting} required
                  />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={commonStyles.formLabel}>メールアドレス</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange}
                  className={commonStyles.formInput} disabled={isSubmitting}
                  />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={commonStyles.formLabel}>電話番号</label>
                <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleInputChange}
                  className={commonStyles.formInput} disabled={isSubmitting}
                  />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={commonStyles.formLabel}>内容</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange}
                  className={`${commonStyles.formInput} ${styles.textarea}`} rows={5} disabled={isSubmitting} required
                  />
              </div>

              <div className={`${styles.buttonGroup}`}>
                <button type="submit" className={`${styles.formButton} ${commonStyles.buttonPrimary} ${commonStyles.buttonDisabled}`} disabled={isSubmitting}>
                  {isSubmitting ? 'SENDING...' : 'SEND'}
                </button>
                <button type="button" className={`${styles.formButton} ${commonStyles.buttonSecondary} ${commonStyles.buttonDisabled}`} onClick={handleClose} disabled={isSubmitting}>
                  CANCEL
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}