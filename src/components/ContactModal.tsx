import { useState, useEffect } from "react";
import styles from "@/styles/ContactModal.module.css";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

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
    setFormData({ name: '', email: '', message: '' });
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
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('すべての項目を入力してください');
      return;
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
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setErrorMessage(data.error || 'メール送信に失敗しました');
      }
    } catch (error) {
      setErrorMessage(error + ': ネットワークエラーが発生しました');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
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
                className={styles.input} disabled={isSubmitting} required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>内容</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleInputChange}
                className={styles.textarea} rows={5} disabled={isSubmitting} required
              />
            </div>

            {errorMessage && (
              <div className={styles.errorMessage}>{errorMessage}</div>
            )}

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
  );
}