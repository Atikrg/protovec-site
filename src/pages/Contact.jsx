import { useState } from 'react'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { icons } from '../components/Icons'
import { contact } from '../data/content'

const faqs = [
  {
    q: 'Are you an authorised distributor or channel partner?',
    a: 'No — deliberately. We remain a vendor-neutral systems integrator so we can recommend the platform that genuinely fits your process, rather than sell what we stock.',
  },
  {
    q: 'Which PLC and SCADA brands do you support?',
    a: 'PLC: Allen Bradley, Siemens, Mitsubishi, Omron, Schneider and Delta. SCADA: Intellution iFIX, Movicon, Siemens WinCC, Wonderware InTouch & System Platform, indiSCADA and FT View.',
  },
  {
    q: 'Do you support existing systems from other integrators?',
    a: 'Yes. We routinely take over, migrate, upgrade and support plants originally built by other integrators — including legacy HMI migrations and WinEMS, which we now maintain.',
  },
  {
    q: 'What does the 24/7 electroplating AMC include?',
    a: 'Questions, inquiries and queries of AMC users related to electroplating are solved by our dedicated 24/7 support team — answered by engineers who know your line.',
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', location: '', message: '' })

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Talk to an <span className="grad">automation engineer.</span>
          </>
        }
        lede={contact.blurb}
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="Offices"
                  title="Two offices, one Mumbai heart."
                  lede="Engineering, design and support are all handled in-house — no third-party call centres."
                />
              </Reveal>

              {contact.offices.map((o) => (
                <Reveal key={o.city} delay={0.05}>
                  <div className="office-card" style={{ marginBottom: '1.2rem' }}>
                    <h3>
                      {icons.pin}
                      {o.city}
                    </h3>
                    <p>
                      {o.lines.map((l) => (
                        <span key={l} style={{ display: 'block' }}>{l}</span>
                      ))}
                    </p>
                    <a className="phone" href={`tel:${o.phoneHref}`}>
                      {icons.phone} {o.phone}
                    </a>
                  </div>
                </Reveal>
              ))}

              <Reveal delay={0.1}>
                <div className="office-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <span className="card-icon" style={{ marginBottom: 0 }}>{icons.mail}</span>
                  <div>
                    <h3 style={{ marginBottom: '0.2rem' }}>Email us</h3>
                    <p style={{ color: 'var(--accent)', fontWeight: 500 }}>{contact.email}</p>
                  </div>
                  <p style={{ color: 'var(--muted)', marginLeft: 'auto', fontSize: '0.9rem' }}>{contact.hours}</p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <form className="contact-form" onSubmit={submit}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1.4rem' }}>Send us a message</h3>
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="cf-name">Name *</label>
                    <input id="cf-name" required value={form.name} onChange={update('name')} placeholder="Your name" />
                  </div>
                  <div className="field">
                    <label htmlFor="cf-email">Email *</label>
                    <input id="cf-email" type="email" required value={form.email} onChange={update('email')} placeholder="you@company.com" />
                  </div>
                  <div className="field">
                    <label htmlFor="cf-phone">Contact number *</label>
                    <input id="cf-phone" required value={form.phone} onChange={update('phone')} placeholder="+91 …" />
                  </div>
                  <div className="field">
                    <label htmlFor="cf-loc">Location</label>
                    <input id="cf-loc" value={form.location} onChange={update('location')} placeholder="City / Plant" />
                  </div>
                  <div className="field full">
                    <label htmlFor="cf-msg">Message</label>
                    <textarea id="cf-msg" value={form.message} onChange={update('message')} placeholder="Tell us about your process, your timeline, and what you're automating…" />
                  </div>
                  <p className="form-note">
                    This form is a demo — submit to see the success state. For a real enquiry,
                    email {contact.email} or call the office above.
                  </p>
                  <button className="btn btn-primary btn-lg" type="submit" style={{ gridColumn: '1 / -1' }}>
                    Send message {icons.arrowRight}
                  </button>
                </div>
                {sent && (
                  <div className="form-ok" role="status">
                    {icons.check} Thanks, {form.name || 'there'} — your message is ready to send. We'll be in touch within one business day.
                  </div>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ink-900)' }}>
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Good to know"
              title="Before you ask — the honest answers."
            />
          </Reveal>
          <div className="faq">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={Math.min(i * 0.05, 0.25)}>
                <details className="faq-item">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
