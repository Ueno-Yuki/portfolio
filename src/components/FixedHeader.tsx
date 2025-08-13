import { useState, useEffect } from 'react';
import styles from '@/styles/FixedHeader.module.css';
import Icon from '@/components/UI/Icons';
import ScrollToTop from '@/components/UI/ScrollToTop';
import { trackEvent } from '@/utils/analytics';

export default function FixedHeader() {
  const [activeSection, setActiveSection] = useState('hero');

  // セクションのスクロール監視
  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'certifications'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // ヘッダー分のオフセット
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初期状態を設定

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // セクションへのスムーススクロール
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      trackEvent('navigation_click', 'navigation', sectionId);
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // ナビゲーションアイテム
  const navigationItems = [
    { id: 'hero', label: 'TOP', icon: 'home' as const },
    { id: 'about', label: 'ABOUT', icon: 'user' as const },
    { id: 'skills', label: 'SKILLS', icon: 'code' as const },
    { id: 'projects', label: 'PROJECTS', icon: 'folder' as const },
    { id: 'certifications', label: 'CERTS', icon: 'award' as const },
  ];

  return (
    <div className={styles.fixedHeader}>
      {/* ナビゲーション */}
      <nav className={styles.navigation}>
        {navigationItems.map((item) => (
          <button
            key={item.id}
            className={`${styles.navItem} ${activeSection === item.id ? styles.active : ''}`}
            onClick={() => scrollToSection(item.id)}
            aria-label={`${item.label}セクションへ移動`}
          >
            <Icon name={item.icon} className={styles.navIcon} />
            <span className={styles.navLabel}>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* トップへ戻るボタン */}
      <div className={styles.scrollToTopContainer}>
        <ScrollToTop />
      </div>
    </div>
  );
}