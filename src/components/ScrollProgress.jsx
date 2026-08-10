import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        setPct(Math.min(Math.max((window.scrollY / Math.max(max, 1)) * 100, 0), 100))
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="progress-rail" aria-hidden="true">
      <span>SCROLL</span>
      <span className="track"><i style={{ width: `${pct}%` }} /></span>
      <span>{Math.round(pct)}%</span>
    </div>
  )
}
