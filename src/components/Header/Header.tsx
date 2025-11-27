import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/Subsoundly logo icon.svg";

const Header: React.FC = () => {
  return (
    <header role="banner" className={`${styles.header} container`}>
      <div className={styles.logo}>
        <img src={logo} alt="Subsoundly" width={32} height={32} />
        <span className={styles.wordmark}>subsoundly</span>
      </div>
      <nav aria-label="Primary navigation" className={styles.nav}>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <button className={styles.outlineBtn}>Log in</button>
        <button className={styles.cta}>Sign up</button>
      </nav>
    </header>
  );
};

export default Header;
