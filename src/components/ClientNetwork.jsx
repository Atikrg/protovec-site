import { useEffect, useMemo, useRef, useState } from 'react'
import { useReducedMotion } from '../lib/hooks'
import { allClients, clientLogoMap, projects } from '../data/content'

const W = 1200
const H = 640
const CX = W / 2
const CY = H / 2
const RX = 470
const RY = 250

const clientApps = {}
projects.forEach((p) => {
  p.clients.forEach((c) => {
    ;(clientApps[c] = clientApps[c] || []).push(p.application)
  })
})

const LOGO_W = 132
const LOGO_H = 46

function logosFor(name) {
  const src = clientLogoMap[name]
  return src ? [{ src, alt: name }] : []
}

function NodeContent({ name, hovered, dim }) {
  const logos = logosFor(name)
  const cls = `cn-node${hovered ? ' active' : ''}${dim ? ' dim' : ''}`
  return (
    <g className={cls}>
      <g className="cn-scale">
        {logos.length === 1 ? (
          <g>
            <image
              className="cn-img"
              href={logos[0].src}
              alt={logos[0].alt}
              x={-LOGO_W / 2}
              y={-LOGO_H / 2}
              width={LOGO_W}
              height={LOGO_H}
              preserveAspectRatio="xMidYMid meet"
            />
            <text className="cn-label" y={LOGO_H / 2 + 20} textAnchor="middle">
              {name}
            </text>
          </g>
        ) : (
          <g>
            <text className="cn-word" textAnchor="middle" dy="0.34em">
              {name}
            </text>
            <text className="cn-label" y={22} textAnchor="middle">
              {clientApps[name].join(' · ')}
            </text>
          </g>
        )}
      </g>
    </g>
  )
}

export default function ClientNetwork() {
  const reduced = useReducedMotion()
  const [hovered, setHovered] = useState(null)
  const wrapRefs = useRef([])

  const nodes = useMemo(() => {
    const n = allClients.length
    return allClients.map((name, i) => {
      const a = -Math.PI / 2 + (i * 2 * Math.PI) / n
      return { name, x: CX + RX * Math.cos(a), y: CY + RY * Math.sin(a) }
    })
  }, [])

  useEffect(() => {
    if (reduced) return undefined
    let raf = 0
    const t0 = performance.now()
    const loop = (t) => {
      const el = (t - t0) / 1000
      nodes.forEach((node, i) => {
        const g = wrapRefs.current[i]
        if (!g) return
        const dx = Math.sin(el * 0.9 + i * 1.7) * 5
        const dy = Math.cos(el * 0.7 + i * 2.1) * 4
        g.setAttribute('transform', `translate(${dx.toFixed(2)} ${dy.toFixed(2)})`)
      })
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [reduced, nodes])

  const active = hovered != null ? nodes[hovered] : null
  const readout = active
    ? { name: active.name, apps: clientApps[active.name].join(' · ') }
    : null

  return (
    <div className="network">
      <div className="network-svg">
        <svg className="cn-svg" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Protovec client network">
          <defs>
            <linearGradient id="cnGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6d5df6" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ff9f43" />
            </linearGradient>
            <radialGradient id="cnHaloGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(168,85,247,0.22)" />
              <stop offset="100%" stopColor="rgba(168,85,247,0)" />
            </radialGradient>
          </defs>

          <ellipse className="cn-guide" cx={CX} cy={CY} rx={RX} ry={RY} />

          {nodes.map((node, i) => (
            <line
              key={'s' + node.name}
              className={`cn-spoke${hovered === i ? ' hot' : ''}`}
              x1={CX}
              y1={CY}
              x2={node.x}
              y2={node.y}
            />
          ))}

          {!reduced &&
            nodes.map((node, i) => (
              <circle key={'p' + node.name} className="cn-pulse" r={3.2} fill="url(#cnGrad)">
                <animateMotion
                  dur={`${2.6 + (i % 5) * 0.35}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.55}s`}
                  path={`M ${CX} ${CY} L ${node.x} ${node.y}`}
                />
              </circle>
            ))}

          <g className="cn-center" transform={`translate(${CX} ${CY})`}>
            <circle className="cn-halo" r={130} fill="url(#cnHaloGrad)" />
            <circle className="cn-ring" r={52} />
            <g className="cn-center-mark">
              <path d="M-13 16 L0 -18 L13 16" fill="none" stroke="url(#cnGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M-9 9 H9" fill="none" stroke="url(#cnGrad)" strokeWidth="2.4" strokeLinecap="round" />
              <text className="cn-center-word" y={36} textAnchor="middle">
                PROTOVEC
              </text>
              <text className="cn-center-tag" y={52} textAnchor="middle">
                AUTOMATION SOLUTIONS
              </text>
            </g>
          </g>

          {nodes.map((node, i) => (
            <g key={node.name} className="cn-float" ref={(el) => { wrapRefs.current[i] = el }}>
              <a
                href="#/projects"
                tabIndex={0}
                aria-label={`${node.name} — ${clientApps[node.name].join(', ')}. View projects.`}
                className="cn-node-link"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(i)}
                onBlur={() => setHovered(null)}
              >
                <g transform={`translate(${node.x} ${node.y})`}>
                  <NodeContent name={node.name} hovered={hovered === i} dim={hovered !== null && hovered !== i} />
                </g>
              </a>
            </g>
          ))}
        </svg>

        <div className="cn-readout" aria-live="polite">
          {readout ? (
            <>
              <b>{readout.name}</b>
              <span>{readout.apps}</span>
            </>
          ) : (
            <>
              <b>11 key references</b>
              <span>Hover a node to see what we automate</span>
            </>
          )}
        </div>
      </div>

      <div className="network-grid">
        {allClients.map((name) => {
          const logos = logosFor(name)
          return (
            <a key={name} href="#/projects" className="cn-tile">
              {logos.length === 1 ? (
                <span className="cn-tile-holder">
                  <img src={logos[0].src} alt={logos[0].alt} loading="lazy" />
                </span>
              ) : (
                <span className="cn-tile-word">{name}</span>
              )}
              <span className="cn-tile-app">{clientApps[name].join(' · ')}</span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
