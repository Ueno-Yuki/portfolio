import { useState, useEffect } from 'react';
import styles from '@/styles/UI/ScrollToTop.module.css';
import Icon from './Icons';
import { trackEvent } from '@/utils/analytics';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // スクロール位置を監視
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // トップへスクロール
  const scrollToTop = () => {
    trackEvent('scroll_to_top', 'navigation', 'button_click');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`${styles.scrollToTop} ${isVisible ? styles.visible : styles.hidden}`}
      onClick={scrollToTop}
      aria-label="トップへ戻る"
    >
      <Icon name="chevronUp" size="lg" />
    </button>
  );
}