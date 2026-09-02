"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './page.module.css';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className={styles.main} ref={containerRef}>
      <motion.section 
        className={styles.hero}
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={styles.heroContent}
        >
          <h1 className={styles.title}>
            CREATIVE<br />
            <span className={styles.highlight}>DEVELOPER</span>
          </h1>
          <p className={styles.subtitle}>
            Building immersive web experiences with modern tools and premium design engineering.
          </p>
        </motion.div>
      </motion.section>

      <section className={styles.contentSection}>
        <div className={`container ${styles.grid}`}>
          <motion.div 
            className={styles.card}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2>Premium Aesthetics</h2>
            <p>Utilizing high-end typographic scales, considered whitespace, and refined color palettes avoiding pure black and white.</p>
          </motion.div>

          <motion.div 
            className={styles.card}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2>Purposeful Motion</h2>
            <p>Spring-based physics and scroll-driven interactions that feel tactile, responsive, and hardware-accelerated.</p>
          </motion.div>
          
          <motion.div 
            className={styles.card}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2>Robust Architecture</h2>
            <p>Powered by Next.js, Supabase, and Playwright to ensure performance, reliability, and full-stack capabilities.</p>
          </motion.div>
        </div>
      </section>
      
      {/* Scroll spacer to demonstrate lenis */}
      <div style={{ height: '50vh' }} />
    </div>
  );
}
