import React from 'react';
import styles from './Pricing.module.css';

const plans = [
  { name: 'Free', price: 0, currency: 'sek', lead: 'Perfect for getting started as a creator.' },
  { name: 'Creator', price: 149, currency: 'sek', lead: 'Designed for creators growing their network.', featured: true },
  { name: 'Pro', price: 299, currency: 'sek', lead: 'Built for professionals managing high-volume music collaborations.' }
];

const Pricing: React.FC = () => {
  return (
    <section className={styles.pricing}>
      <div className="container">
        <h2 className={styles.pricingHeader}>Our plans</h2>
        <div className={styles.cards}>
          {plans.map((p) => (
            <div key={p.name} className={`${styles.card} ${p.featured ? styles.cardFeatured : ''}`}>
              <div className={styles.cardHeader}>
                <div className={styles.cardTitle}>{p.name}</div>
                {p.featured && <div className={styles.badge}>Most popular</div>}
              </div>
              <div className={styles.cardBody}>
                <div className={styles.priceRow}>
                  <div className={styles.price}>{p.price === 0 ? '0' : p.price}</div>
                  <div className={styles.suffix}>{p.currency}/month</div>
                </div>
                <p className={styles.subtitle}>{p.lead}</p>
              </div>
              <div className={styles.cardFooter}>
                {p.featured ? (
                  <button className={styles.cardButton}>Start trial</button>
                ) : (
                  <button className={styles.cardButtonGhost}>{p.price === 0 ? 'Start free' : 'Start trial'}</button>
                )}
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <button className={styles.compareBtn}>Compare plans</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
