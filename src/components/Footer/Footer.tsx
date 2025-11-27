import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.footerTitle}>Rebuilding music collaboration - From the ground up</p>
        <div className={styles.footerBrand}>subsoundly</div>
        <div className={styles.footerLinks}>
          <a href="#contact">Contact</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
