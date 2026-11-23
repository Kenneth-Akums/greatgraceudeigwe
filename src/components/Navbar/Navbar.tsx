import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { NAV_LINKS, PROFILE } from '../../data/portfolio';
import { MagneticButton } from '../MagneticButton/MagneticButton';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import styles from './Navbar.module.css';

export function Navbar() {
  const [activeId, setActiveId] = useState<string>('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0.05 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#top" className={styles.brand} onClick={handleNavClick}>
          <span className={styles.monogram} aria-hidden="true">
            GU
          </span>
          <span className={styles.brandText}>
            <span className={styles.brandName}>{PROFILE.name.toUpperCase()}</span>
            <span className={styles.brandRole}>{PROFILE.role}</span>
          </span>
        </a>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {NAV_LINKS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className={styles.activePill}
                    transition={{ type: 'spring', stiffness: 360, damping: 32 }}
                  />
                )}
                <span className={styles.navLabel}>{item.label}</span>
              </a>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />

          <div className={styles.desktopCta}>
            <MagneticButton href="#contact" variant="primary" className={styles.ctaCompact}>
              <span>Let&apos;s Work Together</span>
              <ArrowUpRight size={16} />
            </MagneticButton>
          </div>

          <button
            type="button"
            className={styles.menuBtn}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileDrawer}
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.mobileList}>
              {NAV_LINKS.map((item, idx) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className={styles.mobileLink}
                  onClick={handleNavClick}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.045 }}
                >
                  <span className={styles.mobileIndex}>0{idx + 1}</span>
                  <span>{item.label}</span>
                </motion.a>
              ))}
              <a
                href="#contact"
                className={styles.mobileCta}
                onClick={handleNavClick}
              >
                <span>Let&apos;s Work Together</span>
                <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
