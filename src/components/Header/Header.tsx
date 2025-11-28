import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/Subsoundly logo icon.svg";

const Header: React.FC = () => {
  return (
    <header role="banner" className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.logo}>
          <img src={logo} alt="Subsoundly" width={32} height={32} />
          <span className={styles.wordmark}>subsoundly</span>
        </div>
        <nav aria-label="Primary navigation" className={styles.nav}>
        <button className={styles.outlineBtn}>Log in</button>
        <button className={styles.cta}>Sign up</button>
       </nav>
      </div>
    </header>
  );
};

export default Header;
