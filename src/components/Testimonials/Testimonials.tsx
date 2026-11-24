import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../../data/portfolio';
import styles from './Testimonials.module.css';

export function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.orbTop} aria-hidden="true" />
      <div className={styles.orbBottom} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <span className={styles.eyebrowLight}>Uncompromising Reliability</span>
          <h2 className={styles.heading}>TRUSTED BY CLIENTS</h2>
          <p className={styles.subhead}>
            Direct quotes from the founders, operators, and mentors who rely on
            Greatgrace to handle what matters most.
          </p>
        </div>

        <div className={styles.grid}>
          {TESTIMONIALS.map((item, idx) => (
            <motion.article
              key={item.name}
              className={styles.card}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Quote size={34} className={styles.quoteMark} aria-hidden="true" />

              <div className={styles.cardTop}>
                <div className={styles.avatar}>
                  <img
                    src={item.avatar}
                    alt={`${item.name} portrait`}
                    className={styles.avatarImg}
                  />
                </div>
                <div>
                  <h3 className={styles.author}>{item.name}</h3>
                  <p className={styles.role}>{item.role}</p>
                </div>
              </div>

              <p className={styles.quote}>&ldquo;{item.quote}&rdquo;</p>

              <div className={styles.stars} aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={15} fill="currentColor" />
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

