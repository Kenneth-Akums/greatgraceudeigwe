import { ArrowUp, Mail } from 'lucide-react';
import { InstagramIcon, LinkedInIcon } from '../Icons/SocialIcons';
import { PROFILE } from '../../data/portfolio';
import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.topRow}>
          <div className={styles.brandRow}>
            <div className={styles.brandIdentity}>
              <span className={styles.monogram} aria-hidden="true">
                GU
              </span>
              <div>
                <p className={styles.name}>{PROFILE.name}</p>
                <p className={styles.role}>{PROFILE.role}</p>
              </div>
            </div>

            <a href="#top" className={styles.topBtn} aria-label="Back to top">
              <ArrowUp size={16} />
            </a>
          </div>

          <div className={styles.actionsRow}>
            <a href={`mailto:${PROFILE.email}`} className={styles.emailChip}>
              <Mail size={15} />
              <span>{PROFILE.email}</span>
            </a>

            <div className={styles.socialGroup}>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialChip}
              >
                <LinkedInIcon size={15} />
                <span>LinkedIn</span>
              </a>
              <a
                href={PROFILE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialChip}
              >
                <InstagramIcon size={15} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <p>
            © {year} {PROFILE.name}. All rights reserved.
          </p>
          <p className={styles.subLabel}>Executive Operations &amp; Advisory</p>
        </div>
      </div>
    </footer>
  );
}
