import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * Draftly-style scroll word reveal.
 * `text` — the headline. Wrap words containing '@' with a gradient by
 * prefixing them with "grad:" like "grad:control.".
 */
export default function WordReveal({ text, className = '', as: Tag = 'h2' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px -15% 0px' })
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setActive(true), 40)
      return () => clearTimeout(t)
    }
  }, [inView])

  const words = text.split(' ').map((w) => w.replace(/^grad:/, ''))

  return (
    <Tag ref={ref} className={`word-reveal ${className}${active ? ' wr-in' : ''}`}>
      {words.map((w, i) => {
        const isGrad = text.split(' ')[i].startsWith('grad:')
        return (
          <span
            key={i}
            className={`wr-word${isGrad ? ' grad-word' : ''}`}
            style={{ transitionDelay: `${0.05 + i * 0.045}s` }}
          >
            {w}
          </span>
        )
      })}
    </Tag>
  )
}
