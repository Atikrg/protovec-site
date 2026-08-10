import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { icons } from '../components/Icons'
import { projects, allClients } from '../data/content'

export default function Projects() {
  const total = projects.reduce((sum, p) => sum + p.clients.length, 0)
  return (
    <>
      <PageHero
        eyebrow="Our Projects"
        title={
          <>
            Reference installations <span className="grad">you can verify.</span>
          </>
        }
        lede={`${total} named client relationships across ${projects.length} application verticals. Click any application to see the plants our systems run in — and ask them how we work.`}
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="By application"
              title="Who we've automated, where."
            />
          </Reveal>
          <div className="grid grid-2" style={{ gap: '1.25rem' }}>
            {projects.map((p, i) => (
              <Reveal key={p.application} delay={Math.min((i % 2) * 0.08, 0.3)}>
                <div className="card prod-card">
                  <div className="prod-img">
                    <img src={p.image} alt={p.application} loading="lazy" />
                  </div>
                  <div className="prod-body">
                    <span className="prod-no">
                      / {String(i + 1).padStart(2, '0')} · {p.clients.length} reference clients
                    </span>
                    <h3>{p.application}</h3>
                    <div className="chips">
                      {p.clients.map((c) => (
                        <span className="client-logo" key={c}>{c}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ink-900)' }}>
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Full client roster"
              title="The names behind the installations."
              lede="Across Tata Motors, Bosch, Mahindra, Hyundai, Tata Steel and more."
            />
          </Reveal>
          <Reveal>
            <div className="chips" style={{ gap: '0.7rem' }}>
              {allClients.map((c) => (
                <span className="client-logo" key={c}>{c}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <Reveal>
              <h2>
                Long-term relationships, <span className="grad">not one-off projects.</span>
              </h2>
              <p className="lede" style={{ marginBottom: '1.4rem' }}>
                A project ends at commissioning. A relationship survives it. Our AMC and support
                work keeps these plants running years after handover — which is why the same
                names keep coming back.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="stats" style={{ gridTemplateColumns: '1fr 1fr' }}>
                <div className="stat">
                  <div className="val">6</div>
                  <div className="lbl">Verticals</div>
                </div>
                <div className="stat">
                  <div className="val">{total}</div>
                  <div className="lbl">Named clients</div>
                </div>
                <div className="stat">
                  <div className="val">100+</div>
                  <div className="lbl">Plants</div>
                </div>
                <div className="stat">
                  <div className="val">24/7</div>
                  <div className="lbl">AMC</div>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Become the next reference {icons.arrowRight}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
