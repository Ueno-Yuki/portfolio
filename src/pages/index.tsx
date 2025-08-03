import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Loading from "@/components/UI/Loading";
import Hero from "@/components/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Certifications from "@/components/Certifications/Certifications";

export default function Home() {
  return (
    <>
      <Head>
        <title>YUKI UENO - Engineer Portfolio</title>
        <meta name="description" content="engineer portfolio - Yuki Ueno" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
