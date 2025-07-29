import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={`${styles.window} neon-border`}>
        <div className={styles.windowHeader}>
          <span>ABOUT</span>
        </div>
        <div className={styles.windowContent}>
          <p>
            バックエンドエンジニア / JavaやPHPを用いた業務システム開発がメイン<br/>
            React.js（Next.js）でのフロントエンド開発や<br/>
            AWSでのインフラ構築などの経験もあります。
          </p>
        </div>
      </div>
    </section>
  );
}