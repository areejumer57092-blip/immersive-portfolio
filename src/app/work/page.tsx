"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import styles from './work.module.css';

const projects = [
  {
    id: 1,
    title: 'Neon Nexus',
    category: 'E-Commerce Experience',
    image: '/project3.jpg',
  },
  {
    id: 2,
    title: 'Glass Matrix',
    category: 'Corporate Identity',
    image: '/project1.jpg',
  },
  {
    id: 3,
    title: 'Dark Analytics',
    category: 'Web Application UI',
    image: '/project2.jpg',
  },
];

function ProjectCard({ project, i }: { project: any, i: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div 
      ref={ref}
      style={{ scale, opacity }}
      className={styles.projectCard}
    >
      <div className={styles.imageContainer}>
        <Image src={project.image} alt={project.title} fill className={styles.image} />
      </div>
      <div className={styles.projectInfo}>
        <h2>{project.title}</h2>
        <p>{project.category}</p>
        <button className={styles.viewButton}>
          View Case Study <ArrowRight size={16} />
        </button>
      </div>
    </motion.div>
  );
}

export default function Work() {
  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className={styles.title}>Selected Work</h1>
      </motion.div>

      <div className={styles.projectsList}>
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} i={i} />
        ))}
      </div>
    </div>
  );
}
