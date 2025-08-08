import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Loading from "@/components/UI/Loading";
import Hero from "@/components/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Certifications from "@/components/Certifications/Certifications";
import { generateBreadcrumbList, PAGE_METADATA, SITE_METADATA } from "@/constants/metadata";
import { getFullUrl, INTERNAL_PATHS } from "@/constants/urls";

export default function Home() {
  const pageData = PAGE_METADATA.home;
  const canonicalUrl = getFullUrl(pageData.path);
  
  // パンくずリスト
  const breadcrumbList = generateBreadcrumbList([
    { name: 'ホーム', url: INTERNAL_PATHS.home },
  ]);
  
  return (
    <>
      <Head>
       {/* 基本メタタグ */}
       <title>{pageData.title}</title>
        <meta name="description" content={pageData.description} />
        <meta name="keywords" content={pageData.keywords.join(', ')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
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
        
        {/* Preload重要なリソース */}
        <link rel="preload" href="/profile.jpeg" as="image" />
        <link rel="preload" href="/SAA.png" as="image" />
        <link rel="preload" href="/DVA.png" as="image" />
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
    </>
  );
}
