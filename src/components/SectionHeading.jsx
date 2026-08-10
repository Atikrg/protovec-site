export default function SectionHeading({ eyebrow, title, lede, center = false }) {
  return (
    <div className={`section-head${center ? ' center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {lede && <p className="lede">{lede}</p>}
    </div>
  )
}
