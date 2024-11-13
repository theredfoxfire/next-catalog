// components/Navigation.js
import { useState } from 'react';
import Link from 'next/link';
import styles from '@/src/styles/navigation.module.scss';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(() => !isOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">NextCatalog</Link>
      </div>
      <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle Menu">
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </button>
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        <li><Link href="/">Catalog</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
