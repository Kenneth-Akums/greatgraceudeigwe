import { motion, useScroll, useSpring } from 'motion/react';
import styles from './ScrollProgress.module.css';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div className={styles.track} aria-hidden="true">
      <motion.div className={styles.bar} style={{ scaleX }} />
    </div>
  );
}
