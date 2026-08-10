import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { icons } from '../components/Icons'
import { services } from '../data/content'

const process = [
  { step: '01', title: 'Consult & Design', body: 'We study your process, agree the architecture and deliver schematics and engineering documentation.' },
  { step: '02', title: 'Build & Develop', body: 'Software is developed and panels are built in parallel — tested and versioned for maintainability.' },
  { step: '03', title: 'Commission', body: 'FAT, SAT, loop checks and on-site commissioning with a clean, documented handover.' },
  { step: '04', title: 'Support & AMC', body: 'Ongoing support, training and 24/7 AMC for electroplating and surface-treatment lines.' },
]

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            From process idea to <span className="grad">running line.</span>
          </>
        }
        lede="Design, engineering, panels, commissioning and lifelong support — everything between an idea and a commissioned line, handled by one accountable team."
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title="Six capabilities. One accountable team."
            />
          </Reveal>
          <div className="grid grid-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <article className="card">
                  <span className="card-icon">{icons[s.icon]}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ink-900)' }}>
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title="A clear path to commissioning."
              lede="A disciplined, documented process — so the system you receive is the system we designed, and your team can own it."
            />
          </Reveal>
          <div className="steps">
            {process.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.08}>
                <div className="step">
                  <span className="step-no">STEP {s.step}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <Reveal>
              <span className="num">/ 24-7</span>
              <h2>
                Electroplating AMC — <span className="grad">answered by engineers.</span>
              </h2>
              <p className="lede" style={{ marginBottom: '1.2rem' }}>
                Dedicated 24/7 AMC support for electroplating and surface-treatment lines.
                Questions, inquiries and queries of AMC users are solved by our support team —
                real engineers who know the line, not a ticket queue.
              </p>
              <div className="chips">
                <span className="chip">24/7 support</span>
                <span className="chip">Electroplating lines</span>
                <span className="chip">Phosphating lines</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="card" style={{ borderColor: 'rgba(46,230,194,0.35)', background: 'rgba(46,230,194,0.04)' }}>
                <span className="card-icon" style={{ borderColor: 'rgba(46,230,194,0.35)', background: 'rgba(46,230,194,0.1)', color: 'var(--accent-2)' }}>
                  {icons.support}
                </span>
                <h3>Live support promise</h3>
                <p style={{ margin: '0.6rem 0 1.2rem' }}>
                  When a plating line stops, every hour of downtime is money. Our AMC engineers
                  are reachable around the clock — and they know your specific line.
                </p>
                <Link to="/contact" className="btn btn-ghost">
                  Enquire about AMC {icons.arrowRight}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
