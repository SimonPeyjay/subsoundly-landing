import React from "react";
import styles from "./Hero.module.css";
import heroBackground from "../../assets/Images/Hero-image.png"
import arrowRight from "../../assets/Icons/arrow-right.svg";

const Hero: React.FC = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${heroBackground})`,
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
            and ownership is shared.
          </p>

          <p className={styles.lead}>
            Subsoundly is where artists, producers and songwriters build teams, 
            share masters and create music with the people who shape their sound.
          </p>
          <div className={styles.ctaRow}>
            
            <button className={styles.heroBtn}>
              <img src={arrowRight}
              alt=""
              className={styles.HeroBtnIcon}  
              />
              <span className={styles.HeroBtnLabel}>Get started</span>
              
            </button>
            
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default Hero;
