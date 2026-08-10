/* oxlint-disable react/only-export-components */

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function S({ children, ...rest }) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...rest}>
      {children}
    </svg>
  )
}

export const icons = {
  plc: (
    <S>
      <rect x="3" y="5" width="18" height="5" rx="1.2" />
      <rect x="3" y="14" width="18" height="5" rx="1.2" />
      <circle cx="6.5" cy="7.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="6.5" cy="16.5" r="0.9" fill="currentColor" stroke="none" />
      <path d="M9.5 7.5h8M9.5 16.5h8" />
    </S>
  ),
  hmi: (
    <S>
      <rect x="3" y="4" width="18" height="13" rx="1.6" />
      <path d="M9 9.5l2 2 3.5-3.5" />
      <path d="M8 20h8M12 17v3" />
    </S>
  ),
  drives: (
    <S>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M12 3.8v3.2M12 17v3.2M20.2 12H17M7 12H3.8M17.7 6.3l-2.3 2.3M8.6 15.4l-2.3 2.3M17.7 17.7l-2.3-2.3M8.6 8.6L6.3 6.3" />
      <circle cx="12" cy="12" r="2.4" />
    </S>
  ),
  scada: (
    <S>
      <path d="M4 5h16M4 5v11a2 2 0 0 0 2 2h5v2H8.5" />
      <path d="M12 9.5l2.2 2.6 2-3.4L18 11.5h2.5" />
      <circle cx="18.5" cy="18.5" r="3" />
      <path d="M17 18.5h.01M18.5 20h.01" strokeWidth="2" />
    </S>
  ),
  mes: (
    <S>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
      <path d="M7.5 8.5h6M7.5 12h9M7.5 15.5h4" />
      <path d="M15.5 14l2 2 3-3.5" />
    </S>
  ),
  alarm: (
    <S>
      <path d="M12 4v2M5.2 7l1.4 1.4M18.8 7l-1.4 1.4M4 13h2M18 13h2" />
      <path d="M12 7a6 6 0 0 0-6 6v3a2 2 0 0 1-2 2h16a2 2 0 0 1-2-2v-3a6 6 0 0 0-6-6Z" />
      <path d="M9 21h6" />
    </S>
  ),
  safety: (
    <S>
      <path d="M12 3.2 5 5.5v6.1c0 4.3 2.9 7.4 7 9.2 4.1-1.8 7-4.9 7-9.2V5.5L12 3.2Z" />
      <path d="M9.5 12l1.8 1.8 3.4-3.6" />
    </S>
  ),
  design: (
    <S>
      <path d="M12 3.5c-2.5 0-4.5 1.7-4.5 3.9 0 2.8 4.5 6.1 4.5 6.1s4.5-3.3 4.5-6.1c0-2.2-2-3.9-4.5-3.9Z" />
      <circle cx="12" cy="7.4" r="1.4" />
      <path d="M12 13.5V20.5M9 20.5h6" />
    </S>
  ),
  commission: (
    <S>
      <path d="M14.5 3.5h4a1 1 0 0 1 1 1v4M9.5 20.5h-4a1 1 0 0 1-1-1v-4" />
      <path d="M20 8.5V6a1 1 0 0 0-1-1h-2.5M4 15.5V18a1 1 0 0 0 1 1h2.5" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 8.8v3.2l2 1.2" />
    </S>
  ),
  code: (
    <S>
      <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 5l-3 14" />
    </S>
  ),
  web: (
    <S>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.2 2.3 3.3 5.1 3.3 8.5s-1.1 6.2-3.3 8.5c-2.2-2.3-3.3-5.1-3.3-8.5s1.1-6.2 3.3-8.5Z" />
    </S>
  ),
  panel: (
    <S>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M7.5 7.5h3M7.5 12h3M7.5 16.5h3" />
      <rect x="12.5" y="6.8" width="4.2" height="2.6" rx="0.5" />
      <circle cx="14.6" cy="16.4" r="0.8" fill="currentColor" stroke="none" />
    </S>
  ),
  support: (
    <S>
      <path d="M12 3.5a8.5 8.5 0 0 0-8.5 8.5v2.5a2 2 0 0 0 2 2H7v-6H5.5A6.5 6.5 0 0 1 12 5.5" />
      <path d="M12 3.5a8.5 8.5 0 0 1 8.5 8.5v2.5a2 2 0 0 1-2 2H17v-6h1.5A6.5 6.5 0 0 0 12 5.5" />
      <path d="M8 13v5a2 2 0 0 0 2 2h1" />
    </S>
  ),
  arrowRight: (
    <S>
      <path d="M4 12h16M13 5l7 7-7 7" />
    </S>
  ),
  arrowUpRight: (
    <S>
      <path d="M7 17L17 7M9 7h8v8" />
    </S>
  ),
  phone: (
    <S>
      <path d="M6.6 3.5c.9 0 1.7.6 2 1.5l.7 2.2c.2.6 0 1.3-.5 1.7l-1.2 1a12.5 12.5 0 0 0 5.5 5.5l1-1.2c.4-.5 1.1-.7 1.7-.5l2.2.7c.9.3 1.5 1.1 1.5 2v1.3a2 2 0 0 1-2.1 2A15.5 15.5 0 0 1 4.6 5.6 2 2 0 0 1 6.6 3.5Z" />
    </S>
  ),
  pin: (
    <S>
      <path d="M12 21s-6.5-5.4-6.5-10.2A6.5 6.5 0 0 1 12 4.3a6.5 6.5 0 0 1 6.5 6.5C18.5 15.6 12 21 12 21Z" />
      <circle cx="12" cy="10.6" r="2.3" />
    </S>
  ),
  mail: (
    <S>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </S>
  ),
  menu: (
    <S>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </S>
  ),
  close: (
    <S>
      <path d="M6 6l12 12M18 6L6 18" />
    </S>
  ),
  check: (
    <S>
      <path d="M5 12.5l4.2 4.2L19 7" />
    </S>
  ),
}
