import { motion } from 'motion/react';
import { Award, GraduationCap } from 'lucide-react';
import { CERTIFICATIONS, EDUCATION, PROFILE } from '../../data/portfolio';
import styles from './Education.module.css';

export function Education() {
  return (
    <section className={styles.section} aria-labelledby="education-heading">
      <div className="container">
        <div className={styles.grid}>
          {/* Left: Seated Office Portrait */}
          <motion.div
            className={styles.photoCard}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={PROFILE.officePortrait}
              alt="Greatgrace Udeigwe reviewing executive plans in her office"
              className={styles.photo}
            />
            <div className={styles.photoCaption}>
              <span className={styles.captionBadge}>6+ Years Executive Operations</span>
              <p className={styles.captionQuote}>
                Increasing executive focus by up to 30% through precision systems.
              </p>
            </div>
          </motion.div>

          {/* Right: Education & Certifications */}
          <motion.div
            className={styles.detailsCard}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.header}>
              <span className="eyebrow">Academic &amp; Professional Pedigree</span>
              <h2 id="education-heading" className={styles.heading}>
                Education &amp; Certifications
              </h2>
            </div>

            <div className={styles.degreeList}>
              {EDUCATION.map((item) => (
                <div key={item.degree} className={styles.degreeItem}>
                  <div className={styles.degreeIcon}>
                    <GraduationCap size={20} />
                  </div>
                  <div className={styles.degreeBody}>
                    <div className={styles.degreeTop}>
                      <h3 className={styles.degreeTitle}>{item.degree}</h3>
                      <span className={styles.period}>{item.period}</span>
                    </div>
                    <p className={styles.school}>{item.institution}</p>
                    <p className={styles.focus}>{item.focus}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.certBlock}>
              <div className={styles.certHeader}>
                <Award size={17} className={styles.certIcon} />
                <span>Verified Certifications</span>
              </div>
              <div className={styles.certGrid}>
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.title} className={styles.certChip}>
                    <span className={styles.certTitle}>{cert.title}</span>
                    <span className={styles.certIssuer}>{cert.issuer}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
