import { useEffect, useRef } from 'react'
import { useReducedMotion, useScrollProgress } from '../lib/hooks'

const INDIGO = '#6d5df6'
const VIOLET = '#a855f7'
const AMBER = '#ff9f43'
const FG = '#9a9aa6'
const GRID = 'rgba(148, 148, 165, 0.045)'
const MONO = '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'

const READOUTS_TL = [
  { label: 'PLC 01', val: 'RUN', color: VIOLET },
  { label: 'VFD', val: '82.4 Hz', color: INDIGO },
  { label: 'CYCLE', val: '12.4 s', color: AMBER },
  { label: 'SCADA LINK', val: 'ONLINE', color: VIOLET },
]

const READOUTS_BR = [
  { label: 'UPTIME', val: '99.7 %', color: AMBER },
  { label: 'PLANTS', val: '100+', color: INDIGO },
  { label: 'PLATFORMS', val: '13+', color: VIOLET },
  { label: 'SINCE', val: '2008', color: FG },
]

function smoothstep(a, b, x) {
  const t = Math.min(Math.max((x - a) / (b - a), 0), 1)
  return t * t * (3 - 2 * t)
}

export default function HeroScene() {
  const canvasRef = useRef(null)
  const reduced = useReducedMotion()
  const scroll = useScrollProgress(0.6)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')
    const pointer = { x: 0.5, y: 0.6 }
    let w = 0
    let h = 0
    let dpr = 1
    let raf = 0
    let running = true

    const setSize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth || window.innerWidth
      h = canvas.clientHeight || window.innerHeight
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
    }

    const onPointer = (e) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = (e.clientX - rect.left) / Math.max(rect.width, 1)
      pointer.y = 1 - (e.clientY - rect.top) / Math.max(rect.height, 1)
    }

    const draw = (t) => {
      const p = reduced ? 0 : scroll.current
      const sceneAlpha = 1 - smoothstep(0.52, 0.74, p)
      const overload = 1 + p * 3.2
      const ampScale = (1 - p * 0.55) * (0.8 + pointer.y * 0.45)
      const speed = reduced ? 0 : 1

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.globalAlpha = 1
      ctx.clearRect(0, 0, w, h)

      ctx.save()
      ctx.globalAlpha = sceneAlpha

      // --- ambient glows -------------------------------------------------
      const glow = ctx.createRadialGradient(w * 0.82, h * 0.3, 0, w * 0.82, h * 0.3, Math.max(w, h) * 0.6)
      glow.addColorStop(0, 'rgba(109, 93, 246, 0.09)')
      glow.addColorStop(1, 'rgba(109, 93, 246, 0)')
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, w, h)
      const glow2 = ctx.createRadialGradient(w * 0.15, h * 0.95, 0, w * 0.15, h * 0.95, Math.max(w, h) * 0.55)
      glow2.addColorStop(0, 'rgba(255, 159, 67, 0.06)')
      glow2.addColorStop(1, 'rgba(255, 159, 67, 0)')
      ctx.fillStyle = glow2
      ctx.fillRect(0, 0, w, h)

      // --- blueprint grid -------------------------------------------------
      ctx.strokeStyle = GRID
      ctx.lineWidth = 1
      const gs = 56
      ctx.beginPath()
      for (let x = (w % gs) / 2; x <= w; x += gs) {
        ctx.moveTo(x, 0)
        ctx.lineTo(x, h)
      }
      for (let y = (h % gs) / 2; y <= h; y += gs) {
        ctx.moveTo(0, y)
        ctx.lineTo(w, y)
      }
      ctx.stroke()

      // --- corner brackets ------------------------------------------------
      ctx.strokeStyle = 'rgba(154, 154, 166, 0.28)'
      ctx.lineWidth = 1.5
      const L = 26
      const m = 18
      ctx.beginPath()
      ;[[m, m, 1, 1], [w - m, m, -1, 1], [m, h - m, 1, -1], [w - m, h - m, -1, -1]].forEach(([x, y, dx, dy]) => {
        ctx.moveTo(x + L * dx, y)
        ctx.lineTo(x, y)
        ctx.lineTo(x, y + L * dy)
      })
      ctx.stroke()

      // --- oscilloscope traces --------------------------------------------
      const traces = [
        { y: 0.74, color: INDIGO, ph: 0.0, s1: 0.011, s2: 0.033, amp: 0.05 },
        { y: 0.85, color: VIOLET, ph: 1.7, s1: 0.016, s2: 0.047, amp: 0.06 },
        { y: 0.95, color: AMBER, ph: 3.1, s1: 0.009, s2: 0.026, amp: 0.045 },
      ]

      traces.forEach((tr) => {
        const y0 = h * tr.y
        const A = h * tr.amp * ampScale
        ctx.globalCompositeOperation = 'lighter'
        for (let pass = 0; pass < 2; pass++) {
          ctx.beginPath()
          const step = Math.max(3, Math.floor(w / 220))
          for (let x = 0; x <= w; x += step) {
            const nx = x / w
            const boost = 1 + 0.9 * Math.exp(-Math.pow((nx - pointer.x) / 0.16, 2))
            const wave =
              Math.sin(x * tr.s1 * overload + t * 1.15 * speed + tr.ph) * 0.62 +
              Math.sin(x * tr.s2 * overload - t * 2.05 * speed + tr.ph * 2) * 0.32 +
              Math.sin(x * tr.s1 * 0.35 + t * 0.7 * speed + tr.ph) * 0.16
            const y = y0 + wave * A * boost
            if (x === 0) ctx.moveTo(x, y)
            else ctx.lineTo(x, y)
          }
          if (pass === 0) {
            ctx.strokeStyle = tr.color
            ctx.globalAlpha = sceneAlpha * 0.055
            ctx.lineWidth = 9
          } else {
            ctx.strokeStyle = tr.color
            ctx.globalAlpha = sceneAlpha * 0.3
            ctx.lineWidth = 1.4
          }
          ctx.stroke()
        }
        ctx.globalCompositeOperation = 'source-over'
        ctx.globalAlpha = sceneAlpha
      })

      // --- scan line -------------------------------------------------------
      const scanX = reduced ? w * 0.32 : ((t * (0.16 + p * 0.9)) % 1) * w
      const grad = ctx.createLinearGradient(scanX - 70, 0, scanX + 70, 0)
      grad.addColorStop(0, 'rgba(168, 85, 247, 0)')
      grad.addColorStop(0.5, 'rgba(168, 85, 247, 0.08)')
      grad.addColorStop(1, 'rgba(168, 85, 247, 0)')
      ctx.fillStyle = grad
      ctx.fillRect(scanX - 70, 0, 140, h)
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.35)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(scanX, 0)
      ctx.lineTo(scanX, h)
      ctx.stroke()

      // --- telemetry readouts ----------------------------------------------
      ctx.textBaseline = 'alphabetic'
      const pad = 22
      const lh = 17
      const rows = (list, x, top) => {
        list.forEach((r, i) => {
          const yy = top ? pad + i * lh : h - pad - (list.length - i) * lh
          const blink = 0.25 + 0.45 * Math.abs(Math.sin(t * 2.3 + i * 1.3 + (reduced ? 0 : 0)))
          ctx.fillStyle = r.color
          ctx.globalAlpha = sceneAlpha * blink
          ctx.fillRect(x, yy - 4, 5, 5)
          ctx.globalAlpha = sceneAlpha * 0.8
          ctx.font = `10px ${MONO}`
          ctx.fillStyle = FG
          if ('letterSpacing' in ctx) {
            ctx.letterSpacing = '0.14em'
          }
          const lw = ctx.measureText(r.label).width
          ctx.fillText(r.label, x + 13, yy)
          ctx.font = `600 10px ${MONO}`
          ctx.fillStyle = r.color
          ctx.globalAlpha = sceneAlpha * 0.75
          ctx.fillText(r.val, x + 13 + lw + 14, yy)
          if ('letterSpacing' in ctx) ctx.letterSpacing = '0px'
        })
      }
      rows(READOUTS_TL, w - pad - 190, true)
      rows(READOUTS_BR, w - pad - 190, false)

      // bottom-left signature
      ctx.font = `10px ${MONO}`
      ctx.fillStyle = 'rgba(154, 154, 166, 0.6)'
      ctx.fillText('MUMBAI / RATNAGIRI · EST. 2008', pad, h - pad)

      // --- vignette --------------------------------------------------------
      const vig = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) * 0.35, w / 2, h / 2, Math.max(w, h) * 0.85)
      vig.addColorStop(0, 'rgba(6, 6, 6, 0)')
      vig.addColorStop(1, 'rgba(6, 6, 6, 0.5)')
      ctx.fillStyle = vig
      ctx.fillRect(0, 0, w, h)

      ctx.restore()
    }

    const renderStatic = () => draw(0)

    const loop = (time) => {
      if (running) {
        if (!reduced) draw(time * 0.001)
        raf = requestAnimationFrame(loop)
      }
    }

    // visibility: only animate while the hero is on screen
    const io = new IntersectionObserver(([entry]) => {
      const visible = entry.isIntersecting
      if (visible && !raf && !reduced) raf = requestAnimationFrame(loop)
      else if (!visible && raf) {
        cancelAnimationFrame(raf)
        raf = 0
      }
      if (!visible) renderStatic()
    })
    io.observe(canvas)

    const ro = new ResizeObserver(() => {
      setSize()
      if (reduced) renderStatic()
    })
    ro.observe(canvas.parentElement || canvas)

    setSize()
    renderStatic()
    if (!reduced) raf = requestAnimationFrame(loop)
    window.addEventListener('pointermove', onPointer, { passive: true })

    return () => {
      running = false
      if (raf) cancelAnimationFrame(raf)
      io.disconnect()
      ro.disconnect()
      window.removeEventListener('pointermove', onPointer)
    }
  }, [reduced, scroll])

  return <canvas ref={canvasRef} aria-hidden="true" />
}
