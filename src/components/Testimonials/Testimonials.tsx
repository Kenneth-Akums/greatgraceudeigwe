import { motion } from 'motion/react';
import { ArrowRight, Play, Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../../data/portfolio';
import styles from './Testimonials.module.css';

interface TestimonialsProps {
  onOpenLiveReview: () => void;
}

export function Testimonials({ onOpenLiveReview }: TestimonialsProps) {
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

        <div className={styles.liveWrap}>
          <button
            type="button"
            className={styles.liveCard}
            onClick={onOpenLiveReview}
          >
            <div className={styles.liveLeft}>
              <span className={styles.livePlayCircle}>
                <Play size={18} fill="currentColor" />
              </span>
              <div className={styles.liveText}>
                <span className={styles.liveName}>Kenneth Akunwanne</span>
                <span className={styles.liveSub}>
                  Watch Live Video Review • MFG Strategies
                </span>
              </div>
            </div>
            <ArrowRight size={18} className={styles.liveArrow} />
          </button>
        </div>
      </div>
    </section>
  );
}

