# Security Policy

## 🔒 セキュリティ方針

このポートフォリオリポジトリは、以下のセキュリティ対策を実装しています。

### ブランチ保護設定

#### mainブランチ保護ルール
- ✅ **Restrict deletions**: ブランチの削除を制限
- ✅ **Require a pull request before merging**: マージ前にプルリクエストが必要
- ✅ **Block force pushes**: フォースプッシュをブロック
- ✅ **Require status checks to pass**: ステータスチェックの通過が必要

#### 必要なステータスチェック
- ESLint検証
- TypeScript型チェック
- ビルド成功確認
- セキュリティスキャン
- CODEOWNERS検証

### アクセス制御

#### CODEOWNERS設定
全ファイルの変更には `@Ueno-Yuki` の承認が必要：
- 重要な設定ファイル（package.json、next.config.ts等）
- セキュリティ関連ファイル（.github/、CODEOWNERS等）
- API Routes（/src/pages/api/）
- プライバシー・分析関連（policies.ts、analytics.ts等）

#### プルリクエスト要件
1. **必須レビュアー**: @Ueno-Yuki
2. **ステータスチェック**: 全て通過必須
3. **ブランチの最新化**: mainブランチとの同期必須
4. **強制プッシュ禁止**: 履歴の改ざん防止

### 自動化されたセキュリティチェック

#### CI/CDパイプライン
- **脆弱性スキャン**: Trivy による依存関係チェック
- **コード品質**: ESLint + TypeScript 厳密チェック
- **セキュリティヘッダー**: next.config.ts の設定検証
- **認証確認**: 承認されたユーザーからのPRのみ許可

#### GitHub Security Features
- **Dependabot**: 依存関係の自動更新
- **Security Advisories**: 脆弱性の追跡
- **Secret Scanning**: 機密情報の検出
- **Code Scanning**: CodeQL による静的解析

### 機密情報の管理

#### 環境変数
機密情報は GitHub Secrets で管理：
```
RESEND_API_KEY
NEXT_PUBLIC_GA_MEASUREMENT_ID
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
```

#### 除外設定
`.gitignore` で以下を除外：
- `.env*` ファイル
- `node_modules/`
- ビルド成果物
- IDEファイル

### Cookie・プライバシー対応

#### 実装済み対策
- GDPR準拠のCookie同意管理
- Google Analytics の適切な制御
- プライバシーポリシー・サイトポリシー
- 個人情報保護法への準拠

#### セキュリティヘッダー
next.config.ts で以下を設定：
- Content Security Policy (CSP)
- HTTP Strict Transport Security (HSTS)
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy

## 🚨 脆弱性の報告

セキュリティ上の問題を発見した場合：

1. **機密性の維持**: GitHub Issues では報告しない
2. **直接連絡**: ポートフォリオサイトのお問い合わせフォームを利用
3. **詳細情報**: 以下を含めて報告
   - 脆弱性の種類と影響
   - 再現手順
   - 推奨される修正方法

## 📋 セキュリティチェックリスト

### プルリクエスト時の確認事項
- [ ] 機密情報（APIキー等）がコードに含まれていない
- [ ] 依存関係に既知の脆弱性がない
- [ ] 入力値の適切なバリデーション
- [ ] XSS、CSRF等の攻撃への対策
- [ ] セキュリティヘッダーの適切な設定
- [ ] ログに機密情報が出力されない

### リリース前の確認事項
- [ ] 全ての自動テストが通過
- [ ] セキュリティスキャンで問題なし
- [ ] プライバシーポリシーの最新性
- [ ] Cookie設定の適切性
- [ ] SSL証明書の有効性

## 🔄 定期的なセキュリティメンテナンス

### 月次作業
- 依存関係の更新確認
- セキュリティアドバイザリの確認
- アクセスログの監視

### 四半期作業
- セキュリティポリシーの見直し
- ブランチ保護設定の確認
- 権限設定の監査

---

**最終更新**: 2025年1月
**責任者**: @Ueno-Yuki