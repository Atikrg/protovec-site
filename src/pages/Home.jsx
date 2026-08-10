import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import WordReveal from '../components/WordReveal'
import { icons } from '../components/Icons'
import { hero, brand, stats, products, applications, news, careers } from '../data/content'
import ClientNetwork from '../components/ClientNetwork'

const HeroScene = lazy(() => import('../scenes/HeroScene'))

const marqueeBrands = [
  'Allen Bradley', 'Siemens', 'Mitsubishi', 'Omron', 'Schneider', 'Delta',
  'Intellution iFIX', 'Movicon', 'WinCC', 'Wonderware', 'FT View', 'indiSCADA',
]

const specs = [
  ['UPTIME', '99.7%'],
  ['PLATFORMS', '13+'],
  ['PLANTS', '100+'],
  ['ALARMS ACTIVE', '0'],
  ['AMC', '24/7'],
  ['SINCE', '2008'],
]

export default function Home() {
  return (
    <>
      {/* ================================================================ HERO */}
      <section className="hero">
        <div className="hero-scene" aria-hidden="true">
          <Suspense fallback={<div className="scene-fallback" />}>
            <HeroScene />
          </Suspense>
        </div>

        <div className="container">
          <div className="hero-content">
            <motion.span
              className="hero-kicker"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {hero.kicker}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1 }}
            >
              Your Automation
              <br />
              <span className="grad">Solutions Partner,</span>
              <br />
              not just a Vendor!
            </motion.h1>
            <motion.p
              className="hero-sub"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.22 }}
            >
              {hero.subtitle}
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.34 }}
            >
              <Link to="/contact" className="btn btn-primary btn-lg">
                {hero.ctaPrimary} {icons.arrowRight}
              </Link>
              <Link to="/products" className="btn btn-ghost btn-lg">
                {hero.ctaSecondary}
              </Link>
            </motion.div>
            <motion.div
              className="hero-strip"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.55 }}
            >
              {stats.slice(0, 4).map((s) => (
                <span key={s.label}>
                  {s.value} · {s.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* technical spec card — Draftly "Auto Machines" vibe */}
          <motion.aside
            className="spec-card"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            aria-hidden="true"
          >
            <div className="spec-title">Plant / Prototype 001</div>
            {specs.map(([k, v]) => (
              <div className="spec-row" key={k}>
                <span>{k}</span>
                <b>{v}</b>
              </div>
            ))}
          </motion.aside>
        </div>

        <div className="scroll-hint" aria-hidden="true">
          <span>Scroll to animate</span>
          <span className="rail" />
        </div>
      </section>

      {/* ============================================================ MARQUEE 1 */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marqueeBrands, ...marqueeBrands].map((m, i) => (
            <span className="marquee-item" key={i}>{m}</span>
          ))}
        </div>
      </div>

      {/* ======================================================= WORD REVEAL */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <WordReveal text="We engineer control, grad:not catalogues." />
          <Reveal delay={0.2}>
            <p className="lede" style={{ maxWidth: '56ch', margin: '2rem auto 0' }}>
              {brand.blurb}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="lede" style={{ maxWidth: '56ch', margin: '1rem auto 0', color: 'var(--muted)', fontSize: '0.98rem' }}>
              {brand.philosophy}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===================================================== PHILOSOPHY */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="The Protovec promise"
              title="Our solutions give you three things."
              center
            />
          </Reveal>
          <div className="philosophy-grid">
            {brand.results.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.1}>
                <div className="philosophy-item">
                  <h3>{r.title}</h3>
                  <p>{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ STATS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="stats">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="stat">
                  <div className="val">{s.value}</div>
                  <div className="lbl">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================= PIPELINE */}
      <section className="section" style={{ background: 'var(--bg-2)' }}>
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Our systems"
              title="Seven pillars. Zero vendor agenda."
              lede="We work with the world's leading brands and recommend the one that genuinely fits your process — not our shelf stock."
            />
          </Reveal>
          <div className="pipeline">
            {products.map((p, i) => (
              <Reveal key={p.id} delay={Math.min(i * 0.05, 0.3)}>
                <Link to="/products" className="pipeline-row">
                  <span className="p-num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="p-main">
                    <h3>{p.name}</h3>
                    <p>{p.short}</p>
                  </div>
                  <div className="p-thumb">
                    <img src={p.image} alt={p.name} loading="lazy" />
                  </div>
                  <div className="p-chips">
                    {p.platforms.slice(0, 4).map((pl) => (
                      <span className="chip" key={pl}>{pl}</span>
                    ))}
                    {p.platforms.length > 4 && <span className="chip">+{p.platforms.length - 4}</span>}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================== TRUST NETWORK */}
      <section className="section trust-network">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Trusted by industry"
              title="A network of plants we keep running."
              lede="Automotive OEMs, tier-1 suppliers and process plants across India — each running on Protovec-engineered control. Hover a node to see the process behind the name."
              center
            />
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <ClientNetwork />
        </Reveal>
      </section>

      {/* ====================================================== APPLICATIONS */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Application verticals"
              title="Processes we speak fluently."
              lede="From automotive OEMs to chemical process lines — regulated, heavy, continuous or hazardous, each vertical has its own rules."
            />
          </Reveal>
          <div className="app-list">
            {applications.map((a, i) => (
              <Reveal key={a.id} delay={Math.min(i * 0.04, 0.25)}>
                <Link to="/applications" className="app-row">
                  <div>
                    <h3>{a.title}</h3>
                    <p>{a.desc}</p>
                  </div>
                  <span className="arrow">{icons.arrowUpRight}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= NEWS */}
      <section className="section" style={{ background: 'var(--bg-2)' }}>
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="News & announcements"
              title="From the workbench."
              lede="Product launches, partnerships and service updates straight from the engineering team."
            />
          </Reveal>
          <div className="grid grid-2">
            {news.slice(0, 4).map((n, i) => (
              <Reveal key={n.title} delay={(i % 2) * 0.08}>
                <article className="news-item">
                  <span className="news-tag">{n.tag}</span>
                  <div>
                    <h3>{n.title}</h3>
                    <p>{n.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================== CAREERS */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="We're hiring"
              title="Come build with us."
              lede="A small, senior engineering team in Mumbai that ships real industrial automation."
            />
          </Reveal>
          <div className="grid grid-2">
            {careers.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <article className="card career-card">
                  <div className="meta">
                    <span>{c.type}</span>
                    <span>{c.location}</span>
                    <span style={{ borderColor: 'rgba(168,85,247,0.45)', color: 'var(--violet)' }}>{c.ref}</span>
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.intro}</p>
                  <Link to="/careers" className="card-link">
                    View role {icons.arrowRight}
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= CTA PANEL */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="cta-panel">
              <h2>
                Your process, engineered <span className="grad">honestly.</span>
              </h2>
              <p>
                Tell us what you're automating. We respond with a vendor-neutral
                recommendation — not a sales pitch.
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Start your project {icons.arrowRight}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
