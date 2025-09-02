import Head from "next/head";
import { useState } from "react";
import styles from "@/styles/Home.module.css";
import Loading from "@/components/UI/Loading";
import Hero from "@/components/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer/Footer";
import PolicyModal from "@/components/Footer/PolicyModal";
import Certifications from "@/components/Certifications/Certifications";
import FixedHeader from "@/components/UI/FixedHeader";
import CookieBanner from "@/components/UI/CookieBanner";
import { generateBreadcrumbList, PAGE_METADATA, SITE_METADATA } from "@/constants/metadata";
import { getFullUrl, INTERNAL_PATHS } from "@/constants/urls";
import { PRIVACY_POLICY } from "@/constants/policies";
import { LoadingProvider } from "@/contexts/LoadingContext";
import { useAnalytics } from "@/hooks/useAnalytics";

export default function Home() {
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
  
  // Google Analyticsを初期化
  useAnalytics();
  
  
  const pageData = PAGE_METADATA.home;
  const canonicalUrl = getFullUrl(pageData.path);
  
  // パンくずリスト
  const breadcrumbList = generateBreadcrumbList([
    { name: 'ホーム', url: INTERNAL_PATHS.home },
  ]);

  const handlePolicyClick = () => {
    setIsPolicyModalOpen(true);
  };

  const handleClosePolicyModal = () => {
    setIsPolicyModalOpen(false);
  };
  
  return (
    <LoadingProvider>
      <Head>
       {/* 基本メタタグ */}
       <title>{pageData.title}</title>
        <meta name="description" content={pageData.description} />
        <meta name="keywords" content={pageData.keywords.join(', ')} />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover" />
        
        {/* 正規URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_METADATA.siteName} />
        <meta property="og:title" content={pageData.title} />
        <meta property="og:description" content={pageData.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={getFullUrl(SITE_METADATA.ogImage.url)} />
        <meta property="og:image:width" content={SITE_METADATA.ogImage.width.toString()} />
        <meta property="og:image:height" content={SITE_METADATA.ogImage.height.toString()} />
        <meta property="og:image:alt" content={SITE_METADATA.ogImage.alt} />
        <meta property="og:locale" content={SITE_METADATA.locale} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.title} />
        <meta name="twitter:description" content={pageData.description} />
        <meta name="twitter:image" content={getFullUrl(SITE_METADATA.ogImage.url)} />
        <meta name="twitter:image:alt" content={SITE_METADATA.ogImage.alt} />
        
        {/* 追加の構造化データ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbList),
          }}
        />
        
        {/* Preload重要なリソース - 初期表示で即座に必要な画像のみ */}
      </Head>
      
      <Loading />
      
      <div className={styles.container}>
        <main className={styles.main}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
        </main>

        <Footer />
      </div>
      
      <FixedHeader />
      <CookieBanner onPolicyClick={handlePolicyClick} />
      
      <PolicyModal
        isOpen={isPolicyModalOpen}
        onClose={handleClosePolicyModal}
        title="プライバシーポリシー"
        content={PRIVACY_POLICY}
      />
    </LoadingProvider>
  );
}
