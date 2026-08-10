import { Link } from 'react-router-dom'
import Logo from './Logo'
import { icons } from './Icons'
import { brand, products, services, contact } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cta">
        <div className="container">
          <h2>Have a process that needs engineering?</h2>
          <p>
            Tell us what you're automating. We'll respond with an honest, vendor-neutral
            recommendation — not a sales pitch.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Start your project {icons.arrowRight}
          </Link>
        </div>
      </div>

      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>{brand.tagline} Engineering simple, reliable automation since {brand.since}.</p>
          </div>

          <div className="footer-col">
            <h4>Systems</h4>
            <ul>
              {products.map((p) => (
                <li key={p.id}>
                  <Link to="/products">{p.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              {services.slice(0, 3).map((s) => (
                <li key={s.title}>
                  <Link to="/services">{s.title}</Link>
                </li>
              ))}
              <li>
                <Link to="/applications">Applications</Link>
              </li>
              <li>
                <Link to="/projects">Our Projects</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col footer-offices">
            <h4>Contact</h4>
            <p>
              <strong>Mumbai</strong>
              {contact.offices[0].lines[0]}<br />
              {contact.offices[0].lines[1]}<br />
              {contact.offices[0].phone}
            </p>
            <p style={{ marginTop: '0.8rem' }}>
              <strong>Ratnagiri</strong>
              {contact.offices[1].lines[0]}<br />
              {contact.offices[1].phone}
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {brand.legal}. All rights reserved.</span>
          <span>
            All trademarks are property of their respective owners.
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            {icons.mail} {contact.email}
          </span>
        </div>
      </div>
    </footer>
  )
}
