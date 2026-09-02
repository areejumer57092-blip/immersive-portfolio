"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, User, Mail } from 'lucide-react';
import styles from './Navbar.module.css';

const navItems = [
  { path: '/', label: 'Home', icon: <Home size={16} /> },
  { path: '/work', label: 'Work', icon: <Briefcase size={16} /> },
  { path: '/about', label: 'About', icon: <User size={16} /> },
  { path: '/contact', label: 'Contact', icon: <Mail size={16} /> },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header 
      className={styles.header}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            IM<span style={{ color: 'var(--accent-color)' }}>M</span>ERSIVE
          </motion.div>
        </Link>
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link key={item.path} href={item.path} className={styles.navLink}>
              <span className={styles.navIcon}>{item.icon}</span>
              {item.label}
              {pathname === item.path && (
                <motion.div 
                  className={styles.activeIndicator}
                  layoutId="navbar-indicator"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
