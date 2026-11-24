import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, Maximize2, Sparkles } from 'lucide-react';
import { CASE_STUDIES, type CaseStudy } from '../../data/portfolio';
import { MagneticButton } from '../MagneticButton/MagneticButton';
import styles from './CaseStudies.module.css';

gsap.registerPlugin(ScrollTrigger);

interface CaseStudiesProps {
  onInspectProject: (project: CaseStudy) => void;
}

export function CaseStudies({ onInspectProject }: CaseStudiesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const mobileStackRef = useRef<HTMLDivElement>(null);
  const activeProject = CASE_STUDIES[activeIndex];

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(max-width: 1023px) and (prefers-reduced-motion: no-preference)', () => {
        const cards = gsap.utils.toArray<HTMLElement>('[data-case-fold]');

        cards.forEach((card, index) => {
          const nextCard = cards[index + 1];
          if (!nextCard) return;

          gsap.to(card, {
            scale: 0.93 - index * 0.01,
            filter: 'brightness(0.94)',
            ease: 'none',
            scrollTrigger: {
              trigger: nextCard,
              start: 'top 86%',
              end: 'top 24%',
              scrub: true,
            },
          });
        });
      });

      return () => mm.revert();
    },
    { scope: mobileStackRef }
  );

  return (
    <section id="case-studies" className={styles.section}>
      <div className="container">
        <div className={styles.headerRow}>
          <div className={styles.headerCopy}>
            <span className="eyebrow">Proof of Execution</span>
            <h2 className={styles.heading}>Featured Case Studies</h2>
            <p className={styles.subhead}>
              Real problems solved, operational frameworks established, and measurable
              executive outcomes.
            </p>
          </div>

          {/* Desktop Tab Switcher */}
          <div
            className={styles.tabs}
            role="tablist"
            aria-label="Case study selector"
          >
            {CASE_STUDIES.map((study, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={study.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`${styles.tabBtn} ${isSelected ? styles.tabBtnActive : ''}`}
                  onClick={() => setActiveIndex(idx)}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="case-study-tab-pill"
                      className={styles.tabPill}
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className={styles.tabLabel}>{study.number}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop Interactive Showcase */}
        <div className={styles.desktopStage}>
          <AnimatePresence mode="wait">
            <motion.article
              key={activeProject.id}
              className={styles.desktopCard}
              initial={{ opacity: 0, y: 20, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.985 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.detailsCol}>
                <div className={styles.metaRow}>
                  <span className={styles.clientBadge}>{activeProject.client}</span>
                  <span className={styles.toolLabel}>• {activeProject.tool}</span>
                </div>

                <h3 className={styles.projectTitle}>{activeProject.title}</h3>

                <div className={styles.blocks}>
                  <div className={styles.block}>
                    <span className={`${styles.blockTag} ${styles.tagProblem}`}>
                      Problem
                    </span>
                    <p>{activeProject.problem}</p>
                  </div>
                  <div className={styles.block}>
                    <span className={`${styles.blockTag} ${styles.tagSolution}`}>
                      Solution
                    </span>
                    <p>{activeProject.solution}</p>
                  </div>
                  <div className={styles.block}>
                    <span className={`${styles.blockTag} ${styles.tagResult}`}>
                      Result
                    </span>
                    <p>{activeProject.result}</p>
                  </div>
                </div>

                <div className={styles.metricChips}>
                  {activeProject.metrics.map((metric) => (
                    <span key={metric} className={styles.metricChip}>
                      <Sparkles size={13} />
                      {metric}
                    </span>
                  ))}
                </div>

                <div className={styles.ctaWrap}>
                  <MagneticButton
                    variant="primary"
                    onClick={() => onInspectProject(activeProject)}
                  >
                    <span>{activeProject.ctaLabel}</span>
                    <ArrowUpRight size={17} />
                  </MagneticButton>
                </div>
              </div>

              <div className={styles.visualCol}>
                <button
                  type="button"
                  className={styles.previewFrame}
                  onClick={() => onInspectProject(activeProject)}
                  aria-label={`Inspect ${activeProject.title} screenshot`}
                >
                  <div className={styles.browserBar} aria-hidden="true">
                    <span className={styles.dots}>
                      <i />
                      <i />
                      <i />
                    </span>
                    <span className={styles.browserTitle}>
                      {activeProject.tool} — Case {activeProject.number}
                    </span>
                    <Maximize2 size={14} className={styles.expandIcon} />
                  </div>
                  <div className={styles.imageViewport}>
                    <img
                      src={activeProject.image}
                      alt={activeProject.imageAlt}
                      className={styles.previewImg}
                    />
                  </div>
                </button>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        {/* Mobile Sticky Folding Cards Deck (matches Koya folding behavior) */}
        <div ref={mobileStackRef} className={styles.mobileStack}>
          {CASE_STUDIES.map((project, index) => (
            <div
              key={project.id}
              className={styles.mobileStickySlot}
              style={{
                top: `calc(var(--header-height) + ${10 + index * 12}px)`,
                zIndex: index + 1,
              }}
            >
              <article data-case-fold className={styles.mobileCard}>
                <div className={styles.mobileCardHead}>
                  <span className={styles.mobileNum}>CASE {project.number}</span>
                  <span className={styles.toolLabel}>{project.tool}</span>
                </div>

                <h3 className={styles.mobileTitle}>{project.title}</h3>
                <p className={styles.mobileClient}>{project.client}</p>

                <button
                  type="button"
                  className={styles.mobilePreview}
                  onClick={() => onInspectProject(project)}
                  aria-label={`Open full preview of ${project.title}`}
                >
                  <div className={styles.browserBar} aria-hidden="true">
                    <span className={styles.dots}>
                      <i />
                      <i />
                      <i />
                    </span>
                    <span className={styles.browserTitle}>{project.tool}</span>
                  </div>
                  <div className={styles.mobileImgWrap}>
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className={styles.previewImg}
                    />
                  </div>
                </button>

                <p className={styles.mobileSummary}>{project.result}</p>

                <button
                  type="button"
                  className={styles.mobileInspectBtn}
                  onClick={() => onInspectProject(project)}
                >
                  <span>View Full Breakdown</span>
                  <ArrowUpRight size={16} />
                </button>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

