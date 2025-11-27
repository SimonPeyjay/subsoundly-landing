import React, { useState } from 'react';
import styles from './ForWho.module.css';

const items = [
  { title: 'Artists', body: 'For you as an artist this tool benefits you because Lorem ipsum dolor sit amet.' },
  { title: 'Producers', body: 'Equip your workflow with faster collaborations and clear rights.' },
  { title: 'Songwriters', body: 'Manage splits and ownership from day one with shared workflows.' },
  { title: 'Engineers', body: 'Track credits and payment splits easily for studio work.' },
  { title: 'Musicians', body: 'Invite band members and track contributions transparently.' }
];

const ForWho: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={styles.forwho}>
      <div className="container">
        <h2 className={styles.heading}>For who?</h2>
        <div className={styles.row}>
          <div className={styles.accordion}>
            {items.map((it, i) => (
              <div className={styles.accordionItem} key={i} role="listitem">
                <div>
                  <div className={styles.itemTitle}>{it.title}</div>
                  {openIndex === i && <p className={styles.itemBody}>{it.body}</p>}
                </div>
                <div>
                  <button aria-expanded={openIndex === i} onClick={() => setOpenIndex(openIndex === i ? -1 : i)} style={{ borderRadius: 6, padding: 8, width: 36, height: 36 }}>{openIndex === i ? '-' : '+'}</button>
                </div>
              </div>
            ))}
          </div>
          <div style={{ width: 400 }}>
            <img src="http://localhost:3845/assets/00db2da4b0da55a76aadd73573f8b294158d58e1.png" alt="Discover preview" style={{ borderRadius: 12, width: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWho;
