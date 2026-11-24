import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionConfig } from 'motion/react';
import { type CaseStudy, PROFILE } from './data/portfolio';
import { ScrollProgress } from './components/ScrollProgress/ScrollProgress';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Education } from './components/Education/Education';
import { ServicesStack } from './components/ServicesStack/ServicesStack';
import { TechStack } from './components/TechStack/TechStack';
import { CaseStudies } from './components/CaseStudies/CaseStudies';
import { Testimonials } from './components/Testimonials/Testimonials';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { MobileTabBar } from './components/MobileTabBar/MobileTabBar';
import { Modal } from './components/Modal/Modal';
import styles from './App.module.css';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [liveReviewOpen, setLiveReviewOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<CaseStudy | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      lerp: 0.095,
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About onOpenVideo={() => setVideoModalOpen(true)} />
        <Education />
        <ServicesStack />
        <TechStack />
        <CaseStudies onInspectProject={(project) => setActiveProject(project)} />
        <Testimonials onOpenLiveReview={() => setLiveReviewOpen(true)} />
        <Contact />
      </main>

      <Footer />
      <MobileTabBar />

      {/* Live Video Introduction Modal */}
      <Modal
        open={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        title="Executive Video Introduction"
        subtitle="Greatgrace Udeigwe — Operational Philosophy & Calendar Defense"
      >
        <div className={styles.modalPlaceholder}>
          <img
            src={PROFILE.portrait}
            alt="Greatgrace Udeigwe video preview"
            className={styles.modalVideoPreview}
          />
          <div className={styles.modalOverlayBox}>
            <p className={styles.modalHeading}>Ready for your video embed</p>
            <p className={styles.modalText}>
              Drop in Greatgrace&apos;s Loom, YouTube, or Vimeo embed URL (or local{' '}
              <code>.mp4</code>) and it will play right inside this executive theater
              modal.
            </p>
          </div>
        </div>
      </Modal>

      {/* Live Review Modal */}
      <Modal
        open={liveReviewOpen}
        onClose={() => setLiveReviewOpen(false)}
        title="Live Client Review — Kenneth Akunwanne"
        subtitle="Martinez Financial Group Strategies LLC"
      >
        <div className={styles.reviewModalBody}>
          <p className={styles.modalText}>
            Connect Kenneth Akunwanne&apos;s video testimonial link or embedded clip here
            so prospective founders can watch his endorsement directly on the page.
          </p>
          <a href="#contact" className={styles.modalCta} onClick={() => setLiveReviewOpen(false)}>
            Book a Discovery Conversation
          </a>
        </div>
      </Modal>

      {/* Case Study Inspection Lightbox */}
      <Modal
        open={Boolean(activeProject)}
        onClose={() => setActiveProject(null)}
        title={activeProject?.title ?? ''}
        subtitle={
          activeProject ? `${activeProject.client} • ${activeProject.tool}` : undefined
        }
      >
        {activeProject && (
          <div className={styles.caseModalBody}>
            <div className={styles.caseModalImgWrap}>
              <img
                src={activeProject.image}
                alt={activeProject.imageAlt}
                className={styles.caseModalImg}
              />
            </div>
            <div className={styles.caseModalGrid}>
              <div>
                <span className={styles.caseModalLabel}>Problem</span>
                <p>{activeProject.problem}</p>
              </div>
              <div>
                <span className={styles.caseModalLabel}>Solution</span>
                <p>{activeProject.solution}</p>
              </div>
              <div>
                <span className={styles.caseModalLabel}>Result</span>
                <p>{activeProject.result}</p>
              </div>
            </div>
            {activeProject.externalUrl && (
              <div className={styles.caseModalActions}>
                <a
                  href={activeProject.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.modalCta}
                >
                  {activeProject.externalLabel ?? 'Open Live Project'}
                </a>
              </div>
            )}
          </div>
        )}
      </Modal>
    </MotionConfig>
  );
}

export default App;
