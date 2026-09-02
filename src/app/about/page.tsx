"use client";

import { motion } from 'framer-motion';
import styles from './page.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.text}>
          I am a Creative Developer specializing in highly interactive, 3D immersive web experiences. I combine modern frameworks with premium design aesthetics to craft digital experiences that don't just work, but feel extraordinary.
        </p>
        <p className={styles.text}>
          My stack includes Next.js, Three.js, Framer Motion, and a relentless pursuit of 60fps animations.
        </p>
      </motion.div>
    </div>
  );
}
