import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Play, TvMinimalPlay } from 'lucide-react';
import { METRICS, MILESTONES, PROFILE } from '../../data/portfolio';
import styles from './About.module.css';

interface AboutProps {
  onOpenVideo: () => void;
}

function AnimatedMetric({
  value,
  suffix,
  label,
  decimals,
}: {
  value: number;
  suffix: string;
  label: string;
  decimals: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [display, setDisplay] = useState(value === 0 ? '0' : '0');

  useEffect(() => {
    if (!inView) return;
    if (value === 0) {
      setDisplay('0');
      return;
    }
    const duration = 1100;
    const start = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = value * eased;
      setDisplay(decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString());
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [inView, value, decimals]);

  return (
    <div ref={ref} className={styles.metricItem}>
      <span className={styles.metricValue}>
        {display}
        {suffix}
      </span>
      <span className={styles.metricLabel}>{label}</span>
    </div>
  );
}

export function About({ onOpenVideo }: AboutProps) {
  return (
    <section id="about" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <motion.div
          className={styles.storyCard}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.storyContent}>
            <span className="eyebrow">About Greatgrace</span>
            <h2 className={styles.heading}>
              In the room where high-stakes decisions happen.
            </h2>

            <div className={styles.prose}>
              <p>
                Hi! I&apos;m <strong>Greatgrace</strong>, an Executive Virtual Assistant
                who works with founders, C-suite executives, and business owners who are
                scaling fast and need someone they can actually trust with the backend of
                their business.
              </p>
              <p>
                I don&apos;t just complete tasks. I think ahead, close gaps, and make sure
                nothing falls through the cracks—whether that&apos;s your calendar, your
                inbox, your client pipeline, or your entire operations workflow.
              </p>
              <p>
                I&apos;ve worked directly with startup CEOs—not on the sidelines, but in
                the room where decisions happen. Building systems, managing teams, creating
                SOPs, and keeping the business moving while they focus on growth.
              </p>
              <blockquote className={styles.pullQuote}>
                &ldquo;If you&apos;re done doing everything yourself, I&apos;m the partner
                who makes that possible.&rdquo;
              </blockquote>
            </div>
          </div>

          <div className={styles.metricsBar}>
            {METRICS.map((m) => (
              <AnimatedMetric key={m.label} {...m} />
            ))}
          </div>
        </motion.div>

        <div className={styles.rightCol}>
          <motion.div
            className={styles.videoCard}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.videoOrb} aria-hidden="true" />
            <div className={styles.videoHeader}>
              <span className={styles.videoPill}>Executive Brief</span>
              <TvMinimalPlay size={22} className={styles.videoIcon} />
            </div>
            <h3 className={styles.videoTitle}>Watch My Live Video Introduction</h3>
            <p className={styles.videoDesc}>
              A personal walkthrough of my operational philosophy, how I integrate into
              executive rhythms, and my framework for calendar defense.
            </p>

            <button
              type="button"
              className={styles.videoTrigger}
              onClick={onOpenVideo}
              aria-label="Play Greatgrace's live video introduction"
            >
              <img
                src={PROFILE.portrait}
                alt="Video introduction thumbnail featuring Greatgrace Udeigwe"
                className={styles.videoThumb}
              />
              <span className={styles.videoOverlay}>
                <span className={styles.playBtn}>
                  <Play size={24} fill="currentColor" />
                </span>
              </span>
              <span className={styles.videoDuration}>LIVE INTRO • WATCH NOW</span>
            </button>
          </motion.div>

          <motion.div
            className={styles.milestonesCard}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={styles.milestonesLabel}>Verified Milestones</span>
            <div className={styles.milestonesList}>
              {MILESTONES.map((item, i) => (
                <motion.div
                  key={item.company}
                  className={styles.milestoneRow}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.45 }}
                >
                  <div className={styles.milestoneLeft}>
                    <div className={styles.milestoneBadge}>
                      <img
                        src={item.logo}
                        alt={`${item.company} logo`}
                        className={styles.milestoneLogo}
                      />
                    </div>
                    <div className={styles.milestoneText}>
                      <p className={styles.milestoneRole}>{item.role}</p>
                      <p className={styles.milestoneCompany}>{item.company}</p>
                    </div>
                  </div>
                  <span className={styles.milestoneTag}>{item.tag}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
