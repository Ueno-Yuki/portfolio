import { SITE_METADATA, STRUCTURED_DATA } from "@/constants/metadata";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        {/* 基本的なメタタグ */}
        <meta charSet="utf-8" />
        <meta name="robots" content={SITE_METADATA.robots} />
        <meta name="theme-color" content={SITE_METADATA.themeColor} />
        <meta name="author" content={SITE_METADATA.author.name} />
        
        {/* 検索エンジン認証 */}
        {SITE_METADATA.googleSiteVerification && (
          <meta name="google-site-verification" content={SITE_METADATA.googleSiteVerification} />
        )}
        {SITE_METADATA.bingSiteVerification && (
          <meta name="msvalidate.01" content={SITE_METADATA.bingSiteVerification} />
        )}
        
        {/* プリロード・プリコネクト */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        
        {/* DNS プリフェッチ */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        
        {/* devicon重要ファイルのプリロード */}
        <link rel="preload" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/fonts/devicon.ttf?qd25fp" as="font" type="font/ttf" crossOrigin="anonymous" />
        
        {/* アイコン・マニフェスト */}
        <link rel="icon" href="/YU.png" type="image/png" />
        <link rel="icon" href="/YU.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/YU.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/YU.png" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />

        
        {/* 新しいフォント */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* 構造化データ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(STRUCTURED_DATA.person),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(STRUCTURED_DATA.website),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(STRUCTURED_DATA.professionalService),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}