import { useState, useEffect } from 'react';
import styles from '@/styles/CookieBanner.module.css';
import commonStyles from '@/styles/common/common.module.css';
import Icon from './UI/Icons';
import { COOKIE_BANNER } from '@/constants/contents';
import { saveCookieConsent, isCookieConsentRequired, CookieConsent } from '@/utils/cookies';

interface CookieBannerProps {
  onPolicyClick: () => void;
}

export default function CookieBanner({ onPolicyClick }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookieConsent>({
    analytics: false,
    functional: true,
    timestamp: 0
  });

  useEffect(() => {
    // Cookie同意が必要かチェック
    if (isCookieConsentRequired()) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent: CookieConsent = {
      analytics: true,
      functional: true,
      timestamp: Date.now()
    };
    saveCookieConsent(consent);
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    saveCookieConsent(preferences);
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const consent: CookieConsent = {
      analytics: false,
      functional: true, // 機能的Cookieは常に必要
      timestamp: Date.now()
    };
    saveCookieConsent(consent);
    setIsVisible(false);
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const updatePreference = (type: keyof Omit<CookieConsent, 'timestamp'>, value: boolean) => {
    setPreferences(prev => ({
      ...prev,
      [type]: value
    }));
  };

  if (!isVisible) return null;

  return (
    <div className={styles.cookieBanner}>
      <div className={styles.bannerContent}>
        <div className={styles.bannerIcon}>
          <Icon name="info" className={styles.icon} />
        </div>
        
        <div className={styles.bannerText}>
          <h3 className={styles.bannerTitle}>{COOKIE_BANNER.title}</h3>
          <p className={styles.bannerDescription}>
            {COOKIE_BANNER.description}
            <button 
              className={styles.policyLink}
              onClick={onPolicyClick}
              aria-label="プライバシーポリシーを開く"
            >
              {COOKIE_BANNER.policyLinkText}
            </button>
            {COOKIE_BANNER.policyLinkSuffix}
          </p>
        </div>

        <div className={styles.bannerActions}>
          {!showSettings ? (
            <>
              <button 
                className={`${commonStyles.buttonSecondary} ${styles.actionButton}`}
                onClick={toggleSettings}
              >
                {COOKIE_BANNER.buttons.settings}
              </button>
              <button 
                className={`${commonStyles.buttonPrimary} ${styles.actionButton}`}
                onClick={handleAcceptAll}
              >
                {COOKIE_BANNER.buttons.acceptAll}
              </button>
            </>
          ) : (
            <div className={styles.settingsContainer}>
              <div className={styles.cookieSettings}>
                <div className={styles.cookieOption}>
                  <div className={styles.optionInfo}>
                    <strong>{COOKIE_BANNER.cookieTypes.functional.title}</strong>
                    <p>{COOKIE_BANNER.cookieTypes.functional.description}</p>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={true} 
                    disabled 
                    className={styles.checkbox}
                  />
                </div>
                
                <div className={styles.cookieOption}>
                  <div className={styles.optionInfo}>
                    <strong>{COOKIE_BANNER.cookieTypes.analytics.title}</strong>
                    <p>{COOKIE_BANNER.cookieTypes.analytics.description}</p>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={preferences.analytics}
                    onChange={(e) => updatePreference('analytics', e.target.checked)}
                    className={styles.checkbox}
                  />
                </div>
              </div>
              
              <div className={styles.settingsActions}>
                <button 
                  className={`${commonStyles.buttonSecondary} ${styles.actionButton}`}
                  onClick={handleRejectAll}
                >
                  {COOKIE_BANNER.buttons.reject}
                </button>
                <button 
                  className={`${commonStyles.buttonPrimary} ${styles.actionButton}`}
                  onClick={handleAcceptSelected}
                >
                  {COOKIE_BANNER.buttons.saveSelection}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}