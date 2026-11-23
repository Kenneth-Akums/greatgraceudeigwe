import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, FolderKanban, Home, Mail } from 'lucide-react';
import styles from './MobileTabBar.module.css';

const TABS = [
  { id: 'top', label: 'Overview', href: '#top', icon: Home },
  { id: 'services', label: 'Advisory', href: '#services', icon: Briefcase },
  { id: 'case-studies', label: 'Work', href: '#case-studies', icon: FolderKanban },
  { id: 'contact', label: 'Contact', href: '#contact', icon: Mail },
];

export function MobileTabBar() {
  const [activeTab, setActiveTab] = useState('top');

  useEffect(() => {
    const sections = ['top', 'about', 'services', 'tools', 'case-studies', 'testimonials', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          if (id === 'top' || id === 'about') setActiveTab('top');
          else if (id === 'services' || id === 'tools') setActiveTab('services');
          else if (id === 'case-studies' || id === 'testimonials') setActiveTab('case-studies');
          else if (id === 'contact') setActiveTab('contact');
        });
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: 0.05 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={styles.bar} aria-label="Mobile quick navigation">
      <div className={styles.inner}>
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <a
              key={tab.id}
              href={tab.href}
              className={`${styles.tab} ${isActive ? styles.active : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {isActive && (
                <motion.span
                  layoutId="mobile-tab-indicator"
                  className={styles.indicator}
                  transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                />
              )}
              <Icon size={20} className={styles.icon} />
              <span className={styles.label}>{tab.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}

