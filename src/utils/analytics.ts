// Google Analytics 管理ユーティリティ

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    [key: string]: unknown;
  }
}

// Google Analytics測定ID（環境変数から取得）
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// Google Analyticsの初期化
export const initializeGA = (): void => {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return;

  // Google Analytics スクリプトを動的に読み込み
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  // gtag関数の初期化
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    (window.dataLayer as unknown[])?.push(args);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    // Cookie無効化設定（後で制御）
    storage: 'none',
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });
};

// Google Analyticsを有効化
export const enableGA = (): void => {
  if (typeof window === 'undefined' || !window.gtag || !GA_MEASUREMENT_ID) return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    storage: 'granted',
    anonymize_ip: true,
    allow_google_signals: true,
    allow_ad_personalization_signals: false // プライバシー重視
  });

  console.log('Google Analytics enabled');
};

// Google Analyticsを無効化
export const disableGA = (): void => {
  if (typeof window === 'undefined' || !window.gtag || !GA_MEASUREMENT_ID) return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    storage: 'denied',
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });

  // データ収集を停止
  window[`ga-disable-${GA_MEASUREMENT_ID}`] = true;

  console.log('Google Analytics disabled');
};

// ページビューを送信
export const trackPageView = (url: string, title?: string): void => {
  if (typeof window === 'undefined' || !window.gtag || !GA_MEASUREMENT_ID) return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_location: url,
    page_title: title
  });
};

// カスタムイベントを送信
export const trackEvent = (
  action: string,
  category?: string,
  label?: string,
  value?: number
): void => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', action, {
    event_category: category || 'general',
    event_label: label,
    value: value
  });
};

// コンバージョン（お問い合わせ等）を追跡
export const trackConversion = (conversionType: string): void => {
  trackEvent('conversion', 'engagement', conversionType);
};

// スクロール深度を追跡
export const trackScrollDepth = (percentage: number): void => {
  trackEvent('scroll', 'engagement', `${percentage}%`, percentage);
};

// ダウンロードを追跡
export const trackDownload = (fileName: string): void => {
  trackEvent('download', 'file', fileName);
};

// 外部リンクのクリックを追跡
export const trackExternalLink = (url: string): void => {
  trackEvent('click', 'external_link', url);
};