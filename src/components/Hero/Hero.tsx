import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Layers } from 'lucide-react';
import { InstagramIcon, LinkedInIcon } from '../Icons/SocialIcons';
import { PROFILE } from '../../data/portfolio';
import { MagneticButton } from '../MagneticButton/MagneticButton';
import styles from './Hero.module.css';

const ROTATING_WORDS = ['Founders.', 'CEOs.', 'Executives.', 'Leaders.'];

function TypewriterWord({ words }: { words: string[] }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(words[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setText(words[0]);
      return;
    }

    const currentWord = words[wordIndex];
    let delay = isDeleting ? 52 : 95;

    if (!isDeleting && text === currentWord) {
      delay = 1900;
    } else if (isDeleting && text === '') {
      delay = 280;
    }

    const timer = window.setTimeout(() => {
      if (!isDeleting && text === currentWord) {
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setText(
          isDeleting
            ? currentWord.slice(0, text.length - 1)
            : currentWord.slice(0, text.length + 1)
        );
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <span className={styles.typewriterWrap}>
      <span className={styles.italicAccent}>{text}</span>
      <span className={styles.cursor} aria-hidden="true" />
    </span>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section id="top" ref={sectionRef} className={styles.hero}>
      <div className={styles.glowPrimary} aria-hidden="true" />
      <div className={styles.glowSecondary} aria-hidden="true" />

      <div className={`container ${styles.grid}`}>
        <div className={styles.copyCol}>
          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            The Executive Partner Behind{' '}
            <span className={styles.noBreak}>High-Growth</span>{' '}
            <TypewriterWord words={ROTATING_WORDS} />
          </motion.h1>

          <motion.p
            className={styles.lead}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            I run your operations so you can run your business. A strategic Executive
            Assistant &amp; Systems Architect plugging directly into high-growth
            leadership to protect bandwidth, eliminate friction, and scale without chaos.
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.54, ease: [0.22, 1, 0.36, 1] }}
          >
            <MagneticButton href="#contact" variant="primary">
              <span>Let&apos;s Work Together</span>
              <ArrowRight size={17} />
            </MagneticButton>

            <MagneticButton href="#case-studies" variant="secondary">
              <span>Explore Case Studies</span>
              <Layers size={17} />
            </MagneticButton>
          </motion.div>

          <motion.div
            className={styles.socialRow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.68 }}
          >
            <span className={styles.socialLabel}>Connect</span>
            <div className={styles.socialPills}>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <LinkedInIcon size={15} />
                <span>LinkedIn</span>
              </a>
              <a
                href={PROFILE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <InstagramIcon size={15} />
                <span>Instagram</span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.visualCol}
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.portraitStage}>
            <div className={styles.backdropCard} aria-hidden="true" />

            <motion.div className={styles.portraitFrame} style={{ y: portraitY }}>
              <div className={styles.portraitInner}>
                <img
                  src={PROFILE.portrait}
                  alt="Portrait of Greatgrace Udeigwe, Executive Operations Partner"
                  className={styles.portraitImg}
                />
                <div className={styles.portraitGradient} aria-hidden="true" />
                <div className={styles.portraitCaption}>
                  <p className={styles.captionName}>{PROFILE.name}</p>
                  <p className={styles.captionRole}>{PROFILE.role}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
