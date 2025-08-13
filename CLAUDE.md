# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 開発コマンド

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

## アーキテクチャ概要

このプロジェクトは**Next.js 15.4.4**と**Pages Router**（App Routerではない）を使用したTypeScriptポートフォリオサイトです。
コンポーネントベースの構成で、集約的なコンテンツ管理を採用しています。

### 主要なアーキテクチャパターン

1. **コンテンツ管理**: すべてのコンテンツは`/src/constants/`のTypeScript定数で管理
   - `contents.ts` - スキル、プロジェクト、経歴データ（型安全）
   - `metadata.ts` - SEOメタデータとJSON-LD構造化データ
   - `urls.ts` - URL構造と外部リンク

2. **スタイリングシステム**: サイバーパンク/ネオンテーマのCSS Modules
   - 各コンポーネントに対応する`.module.css`ファイル
   - `styles/common/globals.css`でネオンカラーのグローバル変数定義
   - `styles/`ディレクトリがコンポーネント構造をミラーリング

3. **コンポーネントアーキテクチャ**:
   - React 19フックを使用した関数コンポーネント
   - スクロールアニメーション用のIntersection Observerパターン
   - スタイル分離のためのCSS Modules
   - `/src/types/`のTypeScriptインターフェースによる型安全なProps

4. **SEOとパフォーマンス**:
   - 構造化データ（JSON-LD）を含む包括的なSEO設定
   - API Routesによる動的robots.txtとサイトマップ生成
   - `next.config.ts`でセキュリティヘッダーとパフォーマンス最適化
   - webp/avif形式用の画像最適化設定

### パスエイリアス

- `@/*`と`~/*`の両方が`src/*`にマッピング（tsconfig.jsonとwebpackで設定）

### API Routesアーキテクチャ

- `/api/send-email` - Resend APIを使用したお問い合わせフォーム送信
- `/api/robots` - 動的robots.txt生成
- `/api/sitemap` - 動的sitemap.xml生成

### アニメーションシステム

コンポーネントは一貫したパターンを使用：
- 表示状態追跡のための`useState`
- スクロール検出のための`useRef` + `IntersectionObserver`
- アニメーション状態に基づく条件付きCSSクラス適用
- 状態遷移管理のためのアニメーション完了ハンドラー

### コンテンツデータ構造

スキルは1-5で評価され、種類別に分類。プロジェクトには技術スタック配列を含む。すべてのコンテンツは型付けされ、保守しやすいよう集約管理。

### 重要な設定

- **Next.js設定**: セキュリティヘッダー、画像最適化、webpackエイリアス、Vercelデプロイ設定
- **TypeScript**: パスエイリアス付きのstrict mode有効
- **フォント**: `_document.tsx`でGoogle Fonts（Inter、JetBrains Mono、Poppins）読み込み
- **ユーザーへの応答**: 回答は必ず日本語で行う
- **Githubへのコミット、プッシュ**: ユーザーで行う

アニメーションを変更する際は、`isVisible`、`animationComplete`の状態管理と対応するCSSクラス間の相互作用に注意してアニメーション競合を避けること。

### コードスタイルと規約
- 命名はキャメルケースを使用する
- DRY原則、KISS原則に従う。競合する場合はユーザーへ質問するか、より適した提案をする
- !importantなど拡張性が低下する強い制約を設けるコーディングは避けること