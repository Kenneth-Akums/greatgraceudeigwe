import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import styles from './MagneticButton.module.css';

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  type?: 'button' | 'submit';
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  target,
  rel,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.22);
    y.set(relY * 0.22);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const combinedClass = `${styles.btn} ${styles[variant]} ${className}`.trim();

  return (
    <motion.div
      ref={ref}
      className={styles.wrapper}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
    >
      {href ? (
        <a
          href={href}
          className={combinedClass}
          target={target}
          rel={rel}
          aria-label={ariaLabel}
          onClick={onClick}
        >
          <span className={styles.sheen} aria-hidden="true" />
          <span className={styles.content}>{children}</span>
        </a>
      ) : (
        <button
          type={type}
          className={combinedClass}
          onClick={onClick}
          aria-label={ariaLabel}
        >
          <span className={styles.sheen} aria-hidden="true" />
          <span className={styles.content}>{children}</span>
        </button>
      )}
    </motion.div>
  );
}
