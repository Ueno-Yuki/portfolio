# Portfolio - YUKI UENO

エンジニア YUKI UENO のポートフォリオサイト。サイバーパンク/ネオンテーマで技術スキルとプロジェクト実績を紹介。

## 🚀 技術スタック

- **Framework:** Next.js 15.4.4 (Pages Router)
- **Language:** TypeScript
- **React:** 19.1.0
- **Styling:** CSS Modules (サイバーパンク/ネオンテーマ)
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Email:** Resend API
- **Deployment:** Vercel

## 📁 プロジェクト構造

```
src/
├── components/        # コンポーネント
│   ├── Hero.tsx      # ヒーローセクション
│   ├── About/        # プロフィール・経歴
│   ├── Skills/       # スキル表示
│   ├── Projects.tsx  # プロジェクト紹介
│   ├── Certifications/ # 資格情報
│   └── ContactModal.tsx # お問い合わせフォーム
├── constants/        # データ定義
│   ├── contents.ts   # コンテンツデータ
│   ├── metadata.ts   # SEO・構造化データ
│   └── urls.ts       # URL構造
├── pages/           # ページ
│   ├── index.tsx    # メインページ
│   └── api/         # API Routes
└── styles/          # CSS Modules
    ├── common/      # 共通スタイル
    └── *.module.css # コンポーネント別スタイル
```

## 🛠️ 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# プロダクションサーバー起動
npm start

# ESLint実行
npm run lint
```

## 🎨 デザインテーマ

- **カラーパレット:** ネオンシアン、ピンク、グリーン、ブルー
- **フォント:** Inter, JetBrains Mono, Poppins
- **エフェクト:** グリッドオーバーレイ、スキャンライン、グロー効果
- **レスポンシブ:** モバイルファーストデザイン

## 🔧 主要機能

- **SEO最適化:** 構造化データ、メタタグ、サイトマップ
- **お問い合わせフォーム:** Resend API統合
- **アニメーション:** Intersection Observer + CSS Animations
- **パフォーマンス:** 画像最適化、セキュリティヘッダー
- **PWA対応:** 将来的な対応準備済み

## 📝 コンテンツ管理

全てのコンテンツは `/src/constants/` で管理：
- `contents.ts`: スキル、プロジェクト、経歴データ
- `metadata.ts`: SEO関連データ
- `urls.ts`: URL構造とリンク

## 🌐 API Routes

- `/api/send-email`: お問い合わせメール送信
- `/api/robots`: robots.txt動的生成
- `/api/sitemap`: サイトマップ動的生成

## 🚀 デプロイ

Vercel Platform での自動デプロイに対応。`next.config.ts` でVercel最適化設定済み。

## 📧 お問い合わせ

ポートフォリオサイト内のコンタクトフォームまたは以下の方法でお問い合わせください：
- GitHub: [プロフィールページ参照]
- LinkedIn: [プロフィールページ参照]