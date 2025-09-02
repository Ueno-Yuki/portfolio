// Cookie管理ユーティリティ

export interface CookieConsent {
  analytics: boolean;
  functional: boolean;
  timestamp: number;
}

const COOKIE_CONSENT_KEY = 'cookie-consent';
const COOKIE_EXPIRY_DAYS = 365;

// Cookieを設定
export const setCookie = (name: string, value: string, days: number = COOKIE_EXPIRY_DAYS): void => {
  if (typeof window === 'undefined') return;
  
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
};

// Cookieを取得
export const getCookie = (name: string): string | null => {
  if (typeof window === 'undefined') return null;
  
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

// Cookieを削除
export const deleteCookie = (name: string): void => {
  if (typeof window === 'undefined') return;
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
};

// Cookie同意状況を保存
export const saveCookieConsent = (consent: CookieConsent): void => {
  const consentData = {
    ...consent,
    timestamp: Date.now()
  };
  setCookie(COOKIE_CONSENT_KEY, JSON.stringify(consentData));
  
  // 同意状況変更をブロードキャスト
  if (typeof window !== 'undefined') {
    const event = new CustomEvent('cookieConsentChanged', {
      detail: consentData
    });
    window.dispatchEvent(event);
  }
};

// Cookie同意状況を取得
export const getCookieConsent = (): CookieConsent | null => {
  const consent = getCookie(COOKIE_CONSENT_KEY);
  if (!consent) return null;
  
  try {
    return JSON.parse(consent);
  } catch (error) {
    console.error('Cookie consent parsing error:', error);
    return null;
  }
};

// Cookie同意が必要かチェック
export const isCookieConsentRequired = (): boolean => {
  // 開発環境では常に表示
  if (process.env.NODE_ENV === 'development') return true;
  
  const consent = getCookieConsent();
  if (!consent) return true;
  
  // 1年経過していたら再同意が必要
  const oneYearAgo = Date.now() - (365 * 24 * 60 * 60 * 1000);
  return consent.timestamp < oneYearAgo;
};

// すべてのCookieを削除（必要な場合）
export const deleteAllCookies = (): void => {
  if (typeof window === 'undefined') return;
  
  const cookies = document.cookie.split(";");
  
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    deleteCookie(name.trim());
  }
};