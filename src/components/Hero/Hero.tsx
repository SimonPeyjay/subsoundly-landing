import React from "react";
import styles from "./Hero.module.css";
import heroImg from "../../assets/hero.png";

// Use Figma-provided remote background image to align with the design
const heroBackground =
  "http://localhost:3845/assets/1fa051891aa3db1c41aedccde0cc4220223ad209.png";

const Hero: React.FC = () => {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroBackground})`,
      }}
      className={styles.hero}
    >
      <div className="container">
        <div>
          <h1 className={styles.title}>
            <span className={styles.titleLine}>Where</span>
            <span className={styles.scriptOverlay}>{"songs"}</span>
            <span className={styles.titleLine}>happen</span>
          </h1>
          <p className={styles.lead}>
            We help creators and teams launch better audio products with a
            modern set of tools, components, and infrastructure.
          </p>
          <div className={styles.ctaRow}>
            <button className={styles.primaryBtn}>Start now</button>
            
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default Hero;
