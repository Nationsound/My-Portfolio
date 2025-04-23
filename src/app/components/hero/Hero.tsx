"use client";
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Hi, I'm Olusola Adebayo Oguntuase</h1>
        <h4 className={styles.heroSubtitle}>Full-Stack Developer | Music Producer | Mixing & Mastering Engineer</h4>
        <p className={styles.heroSubtitle}>
          A passionate web developer specializing in Next.js, React, Node.js and modern web technologies.
        </p>
        <a href="#projects" className={styles.heroButton}>View My Work</a>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className={styles.heroSvg}
      >
        <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="yellow" />
      </svg>
    </section>
  );
};

export default Hero;
