# Portfolio - YUKI UENO

エンジニア YUKI UENO のポートフォリオサイト。技術スキルとプロジェクト実績、保有資格を紹介するWebサイト。

## 🚀 技術スタック

- **Framework:** Next.js 15.4.4 (Pages Router)
- **Language:** TypeScript
- **React:** 19.1.0
- **Styling:** CSS Modules
- **Animation:** Framer Motion + Intersection Observer
- **Icons:** Lucide React + DevIcons
- **Email:** Resend API
- **Analytics:** Google Analytics 4 (Cookie同意管理付き)
- **Security:** セキュリティヘッダー、CSP対応
- **Deployment:** Vercel

## 📁 プロジェクト構造

```
src/
├── components/        # コンポーネント
│   ├── Hero.tsx      # ヒーローセクション
│   ├── About/        # プロフィール・経歴セクション
│   ├── Skills/       # スキル表示 (5段階評価)
│   ├── Projects.tsx  # プロジェクト紹介カード
│   ├── Certifications/ # 資格情報 (外部リンク付き)
│   ├── ContactModal.tsx # お問い合わせフォーム
│   ├── FixedHeader.tsx # 固定ナビゲーションヘッダー
│   ├── CookieBanner.tsx # Cookie同意バナー
│   ├── PolicyModal.tsx # ポリシー表示モーダル
│   └── UI/           # UI コンポーネント
├── constants/        # データ定義
│   ├── contents.ts   # コンテンツデータ (集約管理)
│   ├── metadata.ts   # SEO・構造化データ
│   ├── policies.ts   # プライバシーポリシー・サイトポリシー
│   ├── icons.ts      # アイコン定義
│   └── urls.ts       # URL構造とリンク
├── contexts/         # React Context
├── hooks/           # カスタムフック
│   ├── useAnalytics.ts # Google Analytics管理
│   └── useToast.ts   # トースト通知
├── pages/           # ページ
│   ├── index.tsx    # メインページ
│   └── api/         # API Routes
├── styles/          # CSS Modules
│   ├── common/      # 共通スタイル
│   ├── UI/          # UIコンポーネントスタイル
│   └── *.module.css # コンポーネント別スタイル
├── types/           # TypeScript型定義
└── utils/           # ユーティリティ
    ├── analytics.ts  # Google Analytics関数
    └── cookies.ts    # Cookie管理
```

## 🛠️ 開発コマンド

```bash
# Turbopackを使用した開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# プロダクションサーバー起動
npm start

# ESLint実行
npm run lint
```

## 🔧 環境変数設定

```env
# Resend API (お問い合わせフォーム用)
RESEND_API_KEY=your_resend_api_key

# 送信者情報
EMAIL_FROM_NAME="contact"
EMAIL_FROM_DOMAIN="your-domain.com"

# Google Search Console (SEO用)
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION="your_verification_code"

# Google Analytics (分析用)
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
```

## 🎨 デザインテーマ

- **テーマ:** Y2K
- **カラーパレット:** ネオンシアン、ピンク、グリーン、ブルー
- **フォント:** Inter, JetBrains Mono, Poppins
- **エフェクト:** グリッドオーバーレイ、スキャンライン、グロー効果、マトリックスアニメーション
- **レスポンシブ:** モバイルファーストデザイン
- **インタラクション:** ホバーエフェクト、スムーススクロール、アニメーション

## 🔧 主要機能

### 📱 UI/UX機能
- **固定ナビゲーション:** デスクトップは右側縦配置、モバイルは上部横配置
- **スムーススクロール:** セクション間の滑らかな移動
- **アニメーション:** Intersection Observer + Framer Motion + CSS Animations
- **レスポンシブ設計:** 全デバイス対応 (デスクトップ・タブレット・モバイル)

### 📧 機能面
- **お問い合わせフォーム:** Resend API統合、バリデーション、送信状態管理
- **外部リンク統合:** 資格カードからAWS認定詳細へのリンク
- **Google Analytics:** Cookie同意管理付きアクセス解析
- **Cookie管理:** GDPR準拠のCookie同意システム

### 🔒 セキュリティ・プライバシー
- **プライバシーポリシー:** 個人情報保護法準拠
- **サイトポリシー:** 利用規約・免責事項
- **セキュリティヘッダー:** CSP、HSTS等
- **Cookie同意管理:** 機能Cookie・分析Cookieの個別制御

### 📈 SEO・パフォーマンス
- **SEO最適化:** 構造化データ、メタタグ、サイトマップ、robots.txt
- **キーワード最適化:** ターゲットキーワード対応
- **画像最適化:** Next.js Image Optimization
- **動的生成:** robots.txt、sitemap.xmlの動的生成

## 📝 コンテンツ管理

全てのコンテンツは `/src/constants/` で集約管理：
- `contents.ts`: スキル、プロジェクト、経歴、資格データ (型安全)
- `metadata.ts`: SEO関連データ、構造化データ
- `policies.ts`: プライバシーポリシー・サイトポリシー
- `icons.ts`: Lucide Reactアイコン定義
- `urls.ts`: URL構造とリンク

### データ構造の特徴
- **型安全性**: TypeScript strictモードによる厳密な型チェック
- **集約管理**: 散在しがちなコンテンツデータを一元管理
- **保守性**: 変更時の影響範囲を最小化
- **国際化対応**: 将来的な多言語対応を想定した構造

## 🌐 API Routes

- `/api/send-email`: お問い合わせメール送信 (Resend API統合)
- `/api/robots`: robots.txt動的生成 (SEO最適化)
- `/api/sitemap`: サイトマップ動的生成 (検索エンジン対応)

## 🎯 アーキテクチャ特徴

### パフォーマンス最適化
- **コンポーネント分離**: CSS Modulesによるスタイル分離
- **遅延読み込み**: Intersection Observerによる最適なアニメーション制御
- **画像最適化**: Next.js Image Optimizationとwebp/avif対応

### 開発体験
- **TypeScript strict**: 厳密な型チェックによる品質向上
- **ESLint**: コード品質の自動チェック
- **CSS Modules**: 名前空間の衝突回避
- **パスエイリアス**: `@/*`、`~/*`による相対パス解決

## 🚀 デプロイ

Vercel Platform での自動デプロイに対応：
- **自動ビルド**: Gitプッシュ時の自動デプロイ
- **プレビュー**: プルリクエスト時のプレビュー環境
- **最適化設定**: `next.config.ts`でVercel固有の最適化
- **環境変数**: Vercel Dashboardで環境変数管理

## 📊 分析・監視

- **Google Analytics 4**: Cookie同意管理付きアクセス解析
- **Core Web Vitals**: Webサイトのパフォーマンス監視
- **Search Console**: 検索エンジンでの表示状況監視

## 📧 お問い合わせ

ポートフォリオサイト内のコンタクトフォームまたは以下の方法でお問い合わせください：
- **GitHub**: [https://github.com/Ueno-Yuki](https://github.com/Ueno-Yuki)
- **Portfolio Contact**: サイト内お問い合わせフォーム

---

## 🏗️ 開発履歴

このポートフォリオサイトは継続的に改善を重ねており、以下の主要機能を段階的に実装：

1. **基本実装** - Next.js + TypeScript + CSS Modules
2. **デザインシステム** - Y2K + アニメーション
3. **機能拡張** - お問い合わせフォーム + SEO最適化
4. **プライバシー対応** - Cookie管理 + ポリシー整備  
5. **分析機能** - Google Analytics統合
6. **UI/UX改善** - 固定ナビゲーション + レスポンシブ最適化