import { useEffect } from 'react';
import { getCookieConsent } from '@/utils/cookies';
import { initializeGA, enableGA, disableGA, GA_MEASUREMENT_ID } from '@/utils/analytics';

// Google Analyticsを管理するカスタムフック
export const useAnalytics = () => {
  useEffect(() => {
    // Google Analytics測定IDが設定されていない場合は何もしない
    if (!GA_MEASUREMENT_ID) {
      console.warn('Google Analytics measurement ID is not configured');
      return;
    }

    // Google Analyticsを初期化（無効状態で）
    initializeGA();

    // Cookie同意状況をチェック
    const consent = getCookieConsent();
    if (consent?.analytics) {
      enableGA();
    } else {
      disableGA();
    }

    // Cookieの同意状況変更を監視
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'cookie-consent') {
        const updatedConsent = getCookieConsent();
        if (updatedConsent?.analytics) {
          enableGA();
        } else {
          disableGA();
        }
      }
    };

    // ストレージ変更イベントをリッスン
    window.addEventListener('storage', handleStorageChange);

    // カスタムイベントをリッスン（同一タブでの変更検知）
    const handleConsentChange = ((e: CustomEvent) => {
      const consent = e.detail;
      if (consent?.analytics) {
        enableGA();
      } else {
        disableGA();
      }
    }) as EventListener;

    window.addEventListener('cookieConsentChanged', handleConsentChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cookieConsentChanged', handleConsentChange);
    };
  }, []);
};