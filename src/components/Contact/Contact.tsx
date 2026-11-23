import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Check, CheckCircle2, Copy, Loader2, Send } from 'lucide-react';
import { PROFILE } from '../../data/portfolio';
import { CustomSelect, type SelectOption } from '../CustomSelect/CustomSelect';
import { MagneticButton } from '../MagneticButton/MagneticButton';
import styles from './Contact.module.css';

const OPERATIONAL_NEEDS: SelectOption[] = [
  {
    value: 'High-Level Executive & Calendar Defense',
    label: 'High-Level Executive & Calendar Defense',
    description: 'Inbox triage, time-blocking, meetings & executive briefings',
  },
  {
    value: 'Systems Setup & SOP Architecture',
    label: 'Systems Setup & SOP Architecture',
    description: 'Notion, ClickUp, Drive taxonomy & repeatable playbooks',
  },
  {
    value: 'Client & Cross-Functional Project Coordination',
    label: 'Client & Cross-Functional Project Coordination',
    description: 'Onboarding, sprint tracking & stakeholder accountability',
  },
  {
    value: 'End-to-End Executive Operations Partner',
    label: 'End-to-End Executive Operations Partner',
    description: 'Full operational ownership across leadership & backend',
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    need: 'High-Level Executive & Calendar Defense',
    context: '',
    honey: '',
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2600);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formState.honey) return; // spam honeypot

    setSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PROFILE.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          _replyto: formState.email,
          operational_need: formState.need,
          message: formState.context || 'No additional notes provided.',
          _subject: `New Executive Inquiry from ${formState.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (!response.ok) {
        throw new Error('Could not deliver inquiry.');
      }

      setSubmitted(true);
    } catch {
      setErrorMsg(
        `Unable to send right now. Please email ${PROFILE.email} directly using the button on the left.`
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Left Message Column */}
          <div className={styles.copyCol}>
            <span className="eyebrow">Reclaim Your Focus</span>
            <h2 className={styles.heading}>Ready to Get Your Time Back?</h2>

            <div className={styles.prose}>
              <p>
                You&apos;ve built something worth protecting. Now let&apos;s make sure it
                runs without you in every single room.
              </p>
              <p>
                I plug in, clean up, and keep things moving—so you can focus on what only
                you can do. One conversation could change how you work forever.
              </p>
            </div>

            <div className={styles.emailBox}>
              <span className={styles.emailBoxLabel}>Direct Email</span>
              <div className={styles.emailDisplay}>
                <span className={styles.emailText}>{PROFILE.email}</span>
              </div>
              <div className={styles.emailActions}>
                <button
                  type="button"
                  className={`${styles.copyPill} ${copied ? styles.copied : ''}`}
                  onClick={handleCopyEmail}
                >
                  {copied ? <Check size={15} /> : <Copy size={15} />}
                  <span>{copied ? 'Copied!' : 'Copy Email'}</span>
                </button>
                <a href={`mailto:${PROFILE.email}`} className={styles.mailBtn}>
                  <Send size={15} />
                  <span>Open Mail App</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className={styles.formWrap}>
            {submitted ? (
              <motion.div
                className={styles.successBox}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <CheckCircle2 size={44} className={styles.successIcon} />
                <h3 className={styles.successTitle}>Inquiry Received</h3>
                <p className={styles.successDesc}>
                  Thank you, <strong>{formState.name || 'Partner'}</strong>. Greatgrace
                  will review your operational needs and respond within 24 hours.
                </p>
                <button
                  type="button"
                  className={styles.resetBtn}
                  onClick={() => {
                    setSubmitted(false);
                    setErrorMsg(null);
                    setFormState({
                      name: '',
                      email: '',
                      need: 'High-Level Executive & Calendar Defense',
                      context: '',
                      honey: '',
                    });
                  }}
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="_honey"
                  tabIndex={-1}
                  autoComplete="off"
                  className="sr-only"
                  value={formState.honey}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, honey: e.target.value }))
                  }
                />

                <div className={styles.formHeader}>
                  <h3 className={styles.formTitle}>Start an Engagement</h3>
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-name" className={styles.label}>
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Richard Dansaki"
                    className={styles.input}
                    value={formState.name}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, name: e.target.value }))
                    }
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-email" className={styles.label}>
                    Executive Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="executive@company.com"
                    className={styles.input}
                    value={formState.email}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, email: e.target.value }))
                    }
                  />
                </div>

                <div className={styles.field}>
                  <label
                    id="contact-need-label"
                    htmlFor="contact-need"
                    className={styles.label}
                  >
                    Primary Operational Need
                  </label>
                  <CustomSelect
                    id="contact-need"
                    labelId="contact-need-label"
                    value={formState.need}
                    options={OPERATIONAL_NEEDS}
                    onChange={(need) => setFormState((s) => ({ ...s, need }))}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-context" className={styles.label}>
                    Brief Context / Pain Points
                  </label>
                  <textarea
                    id="contact-context"
                    rows={3}
                    placeholder="Tell me what is taking too much of your time right now..."
                    className={styles.input}
                    value={formState.context}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, context: e.target.value }))
                    }
                  />
                </div>

                {errorMsg && <p className={styles.errorText}>{errorMsg}</p>}

                <div className={styles.submitRow}>
                  <MagneticButton
                    type="submit"
                    variant="primary"
                    className={styles.submitFull}
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={16} className={styles.spinner} />
                        <span>Sending Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Direct Inquiry</span>
                        <Send size={16} />
                      </>
                    )}
                  </MagneticButton>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
