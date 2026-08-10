import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { icons } from '../components/Icons'
import { applications, projects } from '../data/content'

export default function Applications() {
  return (
    <>
      <PageHero
        eyebrow="Applications"
        title={
          <>
            Six verticals. <span className="grad">One standard of engineering.</span>
          </>
        }
        lede="Regulated, heavy, continuous or hazardous — each vertical has its own rules, standards and failure modes. We've been inside all of them."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {applications.map((a, i) => {
              const match = projects.find((p) => p.application === a.title)
              return (
                <Reveal key={a.id} delay={(i % 3) * 0.08}>
                  <article className="card app-card">
                    <div>
                      <span className="num" style={{ display: 'block', marginBottom: '0.9rem' }}>
                        / {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3>{a.title}</h3>
                      <p>{a.desc}</p>
                    </div>
                    <div className="app-chip">
                      <div className="chips" style={{ marginBottom: '1rem' }}>
                        {a.items.map((it) => (
                          <span className="chip" key={it}>{it}</span>
                        ))}
                      </div>
                      {match && (
                        <Link to="/projects" className="card-link">
                          {match.clients.length} reference clients {icons.arrowUpRight}
                        </Link>
                      )}
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ink-900)' }}>
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Proven in production"
              title="Where our systems run."
              lede="Every vertical below ships with named reference installations — you can call these plants and ask how our systems perform."
            />
          </Reveal>
          <div className="projects-table">
            {applications.map((a, i) => {
              const match = projects.find((p) => p.application === a.title)
              if (!match) return null
              return (
                <Reveal key={a.id} delay={Math.min(i * 0.05, 0.3)}>
                  <div className="project-row">
                    <div>
                      <h3>{a.title}</h3>
                      <span className="count">{match.clients.length} reference clients</span>
                    </div>
                    <div className="chips">
                      {match.clients.map((c) => (
                        <span className="client-logo" key={c}>{c}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.6vw, 2.6rem)', marginBottom: '1.1rem' }}>
              Your process isn't on the list?
            </h2>
            <p className="lede" style={{ maxWidth: '54ch', margin: '0 auto 1.8rem' }}>
              That's usually the interesting one. Tell us what you're making, handling or
              monitoring — we'll scope the automation honestly.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Scope my process {icons.arrowRight}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
