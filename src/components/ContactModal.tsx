import { useState, useEffect } from "react";
import styles from "@/styles/ContactModal.module.css";
import ToastContainer from "./UI/Toast";
import { useToast } from "@/hooks/useToast";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // トースト通知機能
  const { toasts, success, error, removeToast } = useToast();

  // アニメーション管理
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsAnimating(false); // 開くアニメーション：閉じた状態から開始
      document.body.style.overflow = 'hidden';
      
      // 開くアニメーション開始
      setTimeout(() => {
        setIsAnimating(true); // 開いた状態にアニメーション
      }, 10);
    } else if (isVisible) {
      // 閉じるアニメーション開始
      setIsAnimating(false); // 閉じた状態にアニメーション
      document.body.style.overflow = '';
      
      // 閉じるアニメーション完了後に非表示
      setTimeout(() => {
        setIsVisible(false);
      }, 300);
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, isVisible]);

  // フォームリセット
  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '', message: '' });
    setErrorMessage('');
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
    setErrorMessage('');

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
        resetForm();
        onClose();
        // モーダルが閉じてからトースト通知を表示
        setTimeout(() => {
          success('送信完了', 'メールが正常に送信されました');
        }, 300);
      } else {
        error('送信失敗', data.error || 'メール送信に失敗しました');
        setErrorMessage(data.error || 'メール送信に失敗しました');
      }
    } catch (err) {
      error('ネットワークエラー', 'ネットワークエラーが発生しました');
      const errorMessage = err instanceof Error ? err.message : 'ネットワークエラーが発生しました';
      setErrorMessage(errorMessage);
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
            <h2 className={styles.modalTitle}>CONTACT_FORM</h2>
            <button className={styles.closeButton} onClick={handleClose} disabled={isSubmitting}>
              ×
            </button>
          </div>

          <div className={styles.modalContent}>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>氏名</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange}
                  className={styles.input} disabled={isSubmitting} required
                  />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange}
                  className={styles.input} disabled={isSubmitting}
                  />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>電話番号</label>
                <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleInputChange}
                  className={styles.input} disabled={isSubmitting}
                  />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>内容</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange}
                  className={styles.textarea} rows={5} disabled={isSubmitting} required
                  />
              </div>

              <div className={styles.buttonGroup}>
                <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                  {isSubmitting ? 'SENDING...' : 'SEND'}
                </button>
                <button type="button" className={styles.cancelButton} onClick={handleClose} disabled={isSubmitting}>
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