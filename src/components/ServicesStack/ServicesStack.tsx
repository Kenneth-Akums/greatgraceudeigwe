import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  GitBranch,
  Handshake,
} from 'lucide-react';
import { SERVICE_PILLARS, type ServicePillar } from '../../data/portfolio';
import styles from './ServicesStack.module.css';

gsap.registerPlugin(ScrollTrigger);

function PillarIcon({ icon }: { icon: ServicePillar['icon'] }) {
  if (icon === 'schedule') return <CalendarClock size={24} />;
  if (icon === 'handshake') return <Handshake size={24} />;
  return <GitBranch size={24} />;
}

export function ServicesStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const cards = gsap.utils.toArray<HTMLElement>('[data-fold-card]');

        cards.forEach((card, index) => {
          const nextCard = cards[index + 1];
          if (!nextCard) return;

          gsap.to(card, {
            scale: 0.92 - index * 0.015,
            filter: 'brightness(0.92)',
            ease: 'none',
            scrollTrigger: {
              trigger: nextCard,
              start: 'top 85%',
              end: 'top 22%',
              scrub: true,
            },
          });
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <div className={styles.headerRow}>
          <div className={styles.headerCopy}>
            <span className="eyebrow">Comprehensive Offerings</span>
            <h2 className={styles.heading}>How I Support Your Business</h2>
            <p className={styles.subhead}>
              Three foundational pillars engineered to eliminate operational friction and
              give high-growth leaders uninterrupted focus.
            </p>
          </div>

          <a href="#contact" className={styles.inquireLink}>
            <span>Inquire about a custom retainer</span>
            <ArrowRight size={17} />
          </a>
        </div>

        {/* Sticky Folding / Colliding Deck */}
        <div ref={containerRef} className={styles.stackContainer}>
          {SERVICE_PILLARS.map((pillar, index) => (
            <div
              key={pillar.id}
              className={styles.stickySlot}
              style={{
                top: `calc(var(--header-height) + ${14 + index * 18}px)`,
                zIndex: index + 1,
              }}
            >
              <article
                data-fold-card
                className={`${styles.card} ${styles[pillar.tone]}`}
              >
                <div className={styles.cardTop}>
                  <div className={styles.cardMeta}>
                    <span className={styles.pillarNum}>PILLAR {pillar.number}</span>
                    <span className={styles.pillarTag}>{pillar.tag}</span>
                  </div>
                  <div className={styles.iconBox}>
                    <PillarIcon icon={pillar.icon} />
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.cardIntro}>
                    <h3 className={styles.cardTitle}>{pillar.title}</h3>
                    <p className={styles.cardSubtitle}>{pillar.subtitle}</p>
                    <div className={styles.deliverableTags}>
                      {pillar.deliverableBadge.split('•').map((item) => (
                        <span key={item.trim()} className={styles.deliverableChip}>
                          {item.trim()}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ul className={styles.pointList}>
                    {pillar.points.map((point) => (
                      <li key={point} className={styles.pointItem}>
                        <CheckCircle2 size={18} className={styles.checkIcon} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
