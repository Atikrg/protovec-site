import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import { icons } from '../components/Icons'
import { products } from '../data/content'

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title={
          <>
            Multi-vendor systems. <span className="grad">Zero vendor agenda.</span>
          </>
        }
        lede="We work with the world's leading PLC, SCADA, HMI and drive brands — and recommend the one that genuinely fits your process, not our shelf stock."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-3" style={{ marginBottom: '3.5rem' }}>
            {products.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 0.08}>
                <a href={`#${p.id}`} className="card prod-card">
                  <div className="prod-img">
                    <img src={p.image} alt={p.name} loading="lazy" />
                  </div>
                  <div className="prod-body">
                    <span className="prod-no">0{i + 1}</span>
                    <h3>{p.name}</h3>
                    <p>{p.short}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          {products.map((p, i) => (
            <article key={p.id} id={p.id} className="section" style={{ padding: 'clamp(3rem,6vw,4.5rem) 0', borderTop: '1px solid var(--line)' }}>
              <div className="split">
                <Reveal>
                  <span className="num">/ 0{i + 1}</span>
                  <h2 style={{ marginTop: '1.2rem' }}>{p.name}</h2>
                  <p className="lede" style={{ marginBottom: '1.2rem' }}>{p.short}</p>
                  <p className="lede" style={{ marginBottom: '1.6rem', fontSize: '1rem' }}>{p.detail}</p>
                  <div className="chips">
                    {p.platforms.map((pl) => (
                      <span className="chip" key={pl}>{pl}</span>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <figure className="prod-figure">
                    <img src={p.image} alt={p.name} loading="lazy" />
                    <figcaption>
                      <span>Protovec · {p.name}</span>
                      <span className="prod-meta">0{i + 1} / 07</span>
                    </figcaption>
                  </figure>
                </Reveal>
              </div>
            </article>
          ))}

          <Reveal>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.6vw, 2.6rem)', marginBottom: '1.2rem' }}>
                Not sure which platform is right?
              </h2>
              <p className="lede" style={{ margin: '0 auto 1.8rem', maxWidth: '54ch' }}>
                That's exactly the question we answer best — with an honest, vendor-neutral
                recommendation built on your process, budget and maintenance team.
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Ask an engineer {icons.arrowRight}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
