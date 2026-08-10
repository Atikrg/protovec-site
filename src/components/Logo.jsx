import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Protovec — home">
      <span className="logo-mark">
        <svg viewBox="0 0 24 24" fill="none" stroke="#04121f" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6.5 18 12 6l5.5 12" />
          <path d="M9.5 14h5" />
        </svg>
      </span>
      <span>
        <span className="logo-word">Protovec</span>
        <span className="logo-tag">Automation Solutions Partner</span>
      </span>
    </Link>
  )
}
