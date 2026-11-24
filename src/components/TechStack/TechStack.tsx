import { motion } from 'motion/react';
import {
  BadgeCheck,
  Calendar,
  Cpu,
  FileText,
  Layers,
  MessageSquare,
  Search,
  Share2,
  Workflow,
} from 'lucide-react';
import { COMPETENCIES, EXTRA_TOOLS, TOOLS } from '../../data/portfolio';
import styles from './TechStack.module.css';

const competencyIcons = [
  Calendar,
  Layers,
  Share2,
  FileText,
  Workflow,
  MessageSquare,
  Search,
];

function SpotlightToolCard({
  name,
  category,
  logo,
  wideLogo,
  index,
}: {
  name: string;
  category: string;
  logo: string;
  wideLogo?: boolean;
  index: number;
}) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div
      className={styles.toolCard}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.spotlight} aria-hidden="true" />
      <div className={`${styles.toolBadge} ${wideLogo ? styles.toolBadgeWide : ''}`}>
        <img src={logo} alt={`${name} logo`} className={styles.toolLogo} />
      </div>
      <span className={styles.toolName}>{name}</span>
      <span className={styles.toolCategory}>{category}</span>
    </motion.div>
  );
}

export function TechStack() {
  return (
    <section id="tools" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">Tech Stack &amp; Methodologies</span>
          <h2 className={styles.heading}>Proficiencies &amp; Command Center</h2>
          <p className={styles.subhead}>
            The tools and operational competencies powering high-performing C-suite
            backends.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Left: Core Competencies */}
          <motion.div
            className={styles.competencyCard}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.cardHeader}>
              <BadgeCheck size={22} className={styles.headerIcon} />
              <h3 className={styles.cardTitle}>Core Competencies</h3>
            </div>

            <ul className={styles.competencyList}>
              {COMPETENCIES.map((label, idx) => {
                const Icon = competencyIcons[idx % competencyIcons.length];
                return (
                  <li key={label} className={styles.competencyItem}>
                    <Icon size={18} className={styles.itemIcon} />
                    <span>{label}</span>
                  </li>
                );
              })}
            </ul>

            <p className={styles.footnote}>
              Engineered for absolute confidentiality and swift executive onboarding.
            </p>
          </motion.div>

          {/* Right: Software Ecosystem */}
          <motion.div
            className={styles.ecosystemCard}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.ecoHeader}>
              <div className={styles.cardHeader}>
                <Cpu size={22} className={styles.headerIcon} />
                <h3 className={styles.cardTitle}>Software Ecosystem</h3>
              </div>
              <span className={styles.suiteCount}>15+ Advanced Suites</span>
            </div>

            <div className={styles.toolGrid}>
              {TOOLS.map((tool, index) => (
                <SpotlightToolCard key={tool.name} {...tool} index={index} />
              ))}
            </div>

            {/* Subtle Marquee Strip */}
            <div className={styles.marqueeWrap} aria-label="Additional tools">
              <div className={styles.marqueeTrack}>
                {[...EXTRA_TOOLS, ...EXTRA_TOOLS].map((tool, i) => (
                  <span key={`${tool.name}-${i}`} className={styles.marqueeChip}>
                    {tool.logo ? (
                      <img
                        src={tool.logo}
                        alt=""
                        aria-hidden="true"
                        className={styles.marqueeLogo}
                      />
                    ) : (
                      <span className={styles.marqueeDot} aria-hidden="true" />
                    )}
                    <span>{tool.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
