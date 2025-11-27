import React, { useEffect, useRef, useState } from 'react';
import styles from './Discover.module.css';

const images = [
  { src: 'http://localhost:3845/assets/1a18d045a2e89c51f4fb9e2f6c05f1171c00f527.png', left: 80, top: 292, size: 303, opacity: 0.5 },
  { src: 'http://localhost:3845/assets/b814520dd67c5f5e32fb9e9956d45e9e1a7443d.png', left: 567, top: 165, size: 361, opacity: 0.2 },
  { src: 'http://localhost:3845/assets/3c375a345f3073c83828157538140dc4a734cc97.png', left: 902, top: 676, size: 251, opacity: 0.5, rotate: -6, z: 2 },
  { src: 'http://localhost:3845/assets/9cfbc7040c4c56d001ff486458cca5aa3ee02f69.png', left: 1112, top: 421, size: 348, opacity: 0.5, rotate: 6, z: 3 },
  { src: 'http://localhost:3845/assets/6e92eaebf7923a395441260efe1e3589506613dd.png', left: 878, top: 1077, size: 327, opacity: 0.5, rotate: -2, z: 1 },
  { src: 'http://localhost:3845/assets/367d31ccc3c7bd8ba89a3fb798c3e5c715408b3e.png', left: 242, top: 959, size: 251, opacity: 0.5, rotate: 6, z: 2 },
  { src: 'http://localhost:3845/assets/00db2da4b0da55a76aadd73573f8b294158d58e1.png', left: 1004, top: 73, size: 215, opacity: 0.2, rotate: -12, z: 1 },
  { src: 'http://localhost:3845/assets/b1d0dca236c6a39583f7f0b64ba02941fb3d60c6.png', left: 639, top: 815, size: 148, opacity: 0.1, rotate: 2, z: 1 },
  { src: 'http://localhost:3845/assets/08af6841560cb3992f5bae5a62103f6c5505fdc9.png', left: 463, top: 1122, size: 176, opacity: 0.25, rotate: -4, z: 1 },
  { src: 'http://localhost:3845/assets/1196466b06600ac82d6dee064261a1ccc87b17f9.png', left: 1286, top: 873, size: 171, opacity: 0.25, rotate: 8, z: 1 }
];

const Discover: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function updateScale() {
      const containerWidth = containerRef.current?.clientWidth || 1120;
      const computed = containerWidth / 1600;
      setScale(computed);
    }
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);
  return (
    <section className={styles.discover}>
      <div className="container">
        <div className={styles.discoverInner}>
          <div className={styles.bgWord}>Discover</div>
          <div style={{ flex: 1 }}>
            <h2 className={styles.title}>Discover new people, collaborate and release music together.</h2>
            <p className={styles.lead}>Use Subsoundly to find the right collaborators, lock in clear splits and rights from day one, and release music you actually own – without waiting for a traditional label.</p>
            <button style={{ marginTop: 20, padding: '12px 20px', borderRadius: 40, background: 'var(--color-primary)', color: '#fff' }}>Find your people</button>
          </div>
          </div>
        </div>
        { /* absolute canvas positioned at the section level so images can span full width */ }
        <div ref={containerRef} className={styles.discoverCanvas} aria-hidden style={{ transform: `translateX(-50%) scale(${scale})` }}>
          <div style={{ width: '1600px', height: '1350px', position: 'relative' }}>
            {images.map((img, i) => {
              const style: React.CSSProperties = {
                left: `${img.left}px`,
                top: `${img.top}px`,
                width: img.size,
                height: img.size,
                borderRadius: 20,
                backgroundImage: `url(${img.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: img.opacity,
                transform: `translate(-50%, -50%) scale(${1600 / 1600}) rotate(${img.rotate || 0}deg)`,
                position: 'absolute',
                zIndex: img.z || 1
              };
              return <div key={i} style={style} role="img" aria-label={`Discover image ${i + 1}`} />;
            })}
          </div>
      </div>
    </section>
  );
};

export default Discover;
