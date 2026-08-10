import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { icons } from '../components/Icons'
import { careers, contact } from '../data/content'

export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Build real automation, <span className="grad">not busywork.</span>
          </>
        }
        lede="Protovec is a small, senior team in Mumbai that ships industrial automation for automotive OEMs and process industries. Every engineer here touches live plants."
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Open positions"
              title="Two roles. Real projects. Mumbai."
            />
          </Reveal>

          <div className="grid" style={{ gap: '2rem' }}>
            {careers.map((job, i) => (
              <Reveal key={job.title} delay={i * 0.1}>
                <article className="job-block">
                  <header className="job-block-head">
                    <div>
                      <div className="chips" style={{ gap: '0.5rem' }}>
                        <span className="chip" style={{ borderColor: 'rgba(0,194,255,0.4)', color: 'var(--accent)' }}>{job.ref}</span>
                        <span className="chip">{job.type}</span>
                        <span className="chip">{job.location}</span>
                      </div>
                      <h2>{job.title}</h2>
                    </div>
                    <span className="card-icon">{icons.plc}</span>
                  </header>

                  <div className="job-block-body">
                    <p className="lede" style={{ fontSize: '1rem' }}>{job.intro}</p>

                    <h4>Key responsibilities & skills</h4>
                    <ul>
                      {job.skills.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>

                    <h4>Candidate profile</h4>
                    <ul>
                      {job.profile.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>

                  <footer className="job-apply">
                    <Link to="/contact" className="btn btn-primary">
                      Apply for this role {icons.arrowRight}
                    </Link>
                    <span style={{ color: 'var(--muted)', fontSize: '0.92rem' }}>
                      {job.applyNote} Resume to <strong style={{ color: 'var(--accent)' }}>{job.email}</strong>
                    </span>
                  </footer>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ink-900)' }}>
        <div className="container">
          <div className="split">
            <Reveal>
              <span className="num">/ Why Protovec</span>
              <h2>
                Work where your work <span className="grad">runs for years.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid" style={{ gap: '1rem' }}>
                {[
                  'Own projects end-to-end — design, commission, handover, support.',
                  'Multi-brand exposure: Allen Bradley, Siemens, Mitsubishi, Omron and more.',
                  'Direct mentorship from senior engineers, not layers of management.',
                  'Work for the plants you see on the road — Tata, Bosch, Mahindra, Hyundai.',
                ].map((t) => (
                  <div key={t} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start', color: 'var(--fg-2)', fontWeight: 300 }}>
                    <span style={{ color: 'var(--accent)', marginTop: '0.15rem' }}>{icons.check}</span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div style={{ marginTop: '2.5rem', padding: '1.6rem 1.8rem', border: '1px solid rgba(46,230,194,0.3)', borderRadius: 'var(--radius)', background: 'rgba(46,230,194,0.05)' }}>
              <p style={{ color: 'var(--fg-2)', fontWeight: 300 }}>
                <strong style={{ color: 'var(--accent-2)', fontWeight: 600 }}>No role that fits, but interested in Protovec?</strong>{' '}
                Send a speculative application to {contact.careersEmail} — we hire exceptional people even without an open position.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
