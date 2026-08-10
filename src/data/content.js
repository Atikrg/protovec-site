// All content pulled from protovec.com (home, products, services, applications,
// projects, careers, contact pages). Single source of truth for every route.

export const brand = {
  name: 'Protovec',
  legal: 'Protovec Technologies Pvt. Ltd.',
  tagline: 'Your Automation Solutions Partner, not just a Vendor!',
  since: 2008,
  blurb:
    'Protovec has vast experience working with major brands of PLCs, SCADA, HMI & other automation hardware and across various industries. We provide nicely engineered and simple solutions.',
  philosophy:
    'Trust us to give you an honestly suitable solution for your requirement — perhaps the reason we have not become a System House or Channel Partner for any particular company.',
  results: [
    { title: 'Total control to Operations', body: 'Systems built so production teams can steer the process with confidence.' },
    { title: 'Ease of use for Maintenance', body: 'Clean logic, labelled wiring and documentation that survives shift changes.' },
    { title: 'Knowledge to Management', body: 'MIS reporting, trends and audit trails that turn plant data into decisions.' },
  ],
}

export const hero = {
  kicker: 'Industrial Automation · Mumbai & Ratnagiri · Since 2008',
  title: 'Your Automation Solutions Partner, not just a Vendor!',
  subtitle:
    'We engineer PLC, SCADA, HMI, MES and drive systems that give total control to Operations, ease of use to Maintenance and knowledge to Management.',
  ctaPrimary: 'Start your project',
  ctaSecondary: 'Explore our systems',
}

export const stats = [
  { value: '2008', label: 'Founded in Mumbai' },
  { value: '100+', label: 'Plants commissioned' },
  { value: '13+', label: 'OEM & SCADA platforms' },
  { value: '24/7', label: 'AMC support' },
  { value: '6', label: 'Application verticals' },
]

export const products = [
  {
    id: 'plc',
    name: 'PLC',
    short: 'Programmable Logic Controllers',
    desc: 'Logic controllers engineered to run your process reliably — across the world’s leading OEM brands, with documented, maintainable application code.',
    detail:
      'We program and commission PLCs from Allen Bradley, Mitsubishi, Siemens, Omron, Schneider and Delta. From single-machine cells to multi-station production lines, our applications are structured, versioned and documented so your team can own them.',
    platforms: ['Allen Bradley', 'Siemens', 'Mitsubishi', 'Omron', 'Schneider', 'Delta'],
    icon: 'plc',
    image: '/images/products/plc.jpg',
  },
  {
    id: 'hmi',
    name: 'HMI',
    short: 'Human-Machine Interfaces',
    desc: 'Operator interfaces that put the entire plant at your fingertips — screens your team actually enjoys working with.',
    detail:
      'Graphic-rich, multi-panel HMI applications with alarms, recipes and trends. We build for the same OEM families as our PLC work, plus multi-touch panels and legacy migrations.',
    platforms: ['Siemens WinCC', 'Allen Bradley PanelView', 'Mitsubishi', 'Omron', 'Delta'],
    icon: 'hmi',
    image: '/images/products/hmi.jpg',
  },
  {
    id: 'drives',
    name: 'Drives',
    short: 'AC & Servo Drives',
    desc: 'Variable-frequency and servo drives tuned for precise process control and measurable energy savings.',
    detail:
      'Motor speed control, regenerative and servo solutions across Allen Bradley, Siemens, Schneider, Delta and Mitsubishi — commissioned and tuned on site.',
    platforms: ['Allen Bradley', 'Siemens', 'Schneider', 'Delta', 'Mitsubishi'],
    icon: 'drives',
    image: '/images/products/drives.jpg',
  },
  {
    id: 'scada',
    name: 'SCADA',
    short: 'Supervisory Control & Data Acquisition',
    desc: 'Supervision, data historians and web reporting with audit-ready records for regulated plants.',
    detail:
      'Vendor-neutral SCADA integration. We build on Intellution iFIX, Movicon, Siemens WinCC, Wonderware InTouch & System Platform, indiSCADA and FT View — whatever fits your operation best.',
    platforms: ['Intellution iFIX', 'Movicon', 'Siemens WinCC', 'Wonderware InTouch', 'Wonderware System Platform', 'indiSCADA', 'FT View'],
    icon: 'scada',
    image: '/images/products/scada.jpg',
  },
  {
    id: 'mes',
    name: 'MES',
    short: 'Manufacturing Execution Systems',
    desc: 'Manufacturing execution that connects the shop floor to the office — including the Windows 10-compliant WinEMS, now maintained by Protovec.',
    detail:
      'WinEMS MES is now maintained and supported by Protovec, with a Windows 10-compliant version launched. We also build custom execution, traceability and reporting layers.',
    platforms: ['WinEMS', 'Custom MES'],
    icon: 'mes',
    image: '/images/products/mes.jpg',
  },
  {
    id: 'alarm',
    name: 'Alarm Notification',
    short: 'Proactive Alarm & Event Notification',
    desc: 'Official system integrator for Control See — get the right alarm to the right person, instantly.',
    detail:
      'As the official system integrator for Control See, we deliver alarm notification and management that escalates plant events over SMS, e-mail and paging before they become downtime.',
    platforms: ['Control See', 'SMS Gateways', 'Email'],
    icon: 'alarm',
    image: '/images/products/alarm.jpg',
  },
  {
    id: 'safety',
    name: 'Safety Devices',
    short: 'Safety-Rated Controls & Devices',
    desc: 'Safety-rated devices and controls that protect people and process — engineered to SIL-rated standards.',
    detail:
      'Safety relays, light curtains, e-stops and guarding interlocks wired into your control architecture so production is protected and compliance is provable.',
    platforms: ['SIL-rated components', 'Safety relays', 'Light curtains'],
    icon: 'safety',
    image: '/images/products/safety.jpg',
  },
]

export const services = [
  { title: 'System Design', desc: 'Control architecture, schematics and engineering documentation built for maintainability from day one.', icon: 'design' },
  { title: 'Commissioning', desc: 'Site installation, loop checks, FAT/SAT and a clean, documented handover to your team.', icon: 'commission' },
  { title: 'Software Development', desc: 'PLC, SCADA and HMI application development — structured, versioned and documented.', icon: 'code' },
  { title: 'MIS Reports on Web', desc: 'Management information dashboards delivered securely over the web for real-time decisions.', icon: 'web' },
  { title: 'Panel Building', desc: 'Control panels engineered, fabricated and tested to specification and international standards.', icon: 'panel' },
  { title: 'Electroplating Support', desc: 'Dedicated 24/7 AMC support for electroplating and surface-treatment lines — answered by engineers, not bots.', icon: 'support' },
]

export const applications = [
  {
    id: 'surface-treatment',
    title: 'Surface Treatment',
    desc: 'Electroplating and phosphating lines with precise bath, current and time control across every stage.',
    items: ['Electroplating', 'Phosphating'],
  },
  {
    id: '21-cfr',
    title: '21 CFR Compliance',
    desc: 'Audit-trail and electronic-signature systems built for regulated and validated processes.',
    items: ['Audit trail', 'Electronic signature'],
  },
  {
    id: 'propane-handling',
    title: 'Propane Handling',
    desc: 'Safe, monitored propane handling and control systems for storage, vaporisation and dispensing.',
    items: ['Storage control', 'Dispensing', 'Safety interlocks'],
  },
  {
    id: 'fuel-handling',
    title: 'Fuel Handling at Automotive Plants',
    desc: 'Reliable fuel supply and handling automation for automotive production lines.',
    items: ['Supply automation', 'Monitoring', 'Safety layers'],
  },
  {
    id: 'tonner',
    title: 'Tonner Charging / Discharging',
    desc: 'Automated charging and discharging of gas tonners with weight, flow and level tracking.',
    items: ['Charging', 'Discharging', 'Inventory tracking'],
  },
  {
    id: 'weight-monitoring',
    title: 'Weight Monitoring',
    desc: 'Continuous weight monitoring and reporting for process lines and batching.',
    items: ['Load-cell integration', 'Trends', 'Batching'],
  },
  {
    id: 'gas-monitoring',
    title: 'Gas Monitoring System',
    desc: 'Gas detection, monitoring and alarm systems that protect plant and people.',
    items: ['Detection', 'Alarm zoning', 'Historian'],
  },
]

export const projects = [
  {
    application: 'Surface Treatment',
    image: '/images/projects/surface.jpg',
    clients: ['Tata Motors', 'Bosch', 'Varroc', 'Innova Rubbers', 'Mahindra', 'Tata Steel', 'Vikram Ispat'],
  },
  {
    application: 'Propane Handling',
    image: '/images/projects/propane.jpg',
    clients: ['Hyundai'],
  },
  {
    application: 'Fuel Handling at Automotive Plants',
    image: '/images/projects/automotive.jpg',
    clients: ['MFL', 'Mahindra'],
  },
  {
    application: 'Tonner Charging / Discharging',
    image: '/images/projects/tonner.jpg',
    clients: ['Solar Semiconductor', 'Bambino'],
  },
  {
    application: 'Weight Monitoring',
    image: '/images/projects/weight.jpg',
    clients: ['MFL'],
  },
  {
    application: 'Gas Monitoring System',
    image: '/images/projects/gasmon.jpg',
    clients: ['Bambino', 'Solar Semiconductor'],
  },
]

export const allClients = [...new Set(projects.flatMap((p) => p.clients))]

export const clientLogoMap = {
  'Tata Motors': '/images/logos/tata-motors.png',
  'Bosch': '/images/logos/bosch.png',
  'Mahindra': '/images/logos/mahindra.png',
  'Hyundai': '/images/logos/hyundai.png',
  'Tata Steel': '/images/logos/tata-steel.png',
}

export const news = [
  {
    tag: 'Support',
    title: '24/7 Electroplating AMC support',
    body: 'Questions, inquiries and queries of AMC users related to Electroplating are solved by our dedicated 24/7 support team.',
  },
  {
    tag: 'Product',
    title: 'Introducing CigRate',
    body: 'A self-made mobile application that manages logistics, performs analysis, controls and displays data as per your requirement — including additional analysis based on geological data input.',
  },
  {
    tag: 'Company',
    title: 'We have shifted to a more convenient location',
    body: 'Protovec now operates from 2nd Floor, Ajanta House, 35, Marol Coop. Industrial Estate, Off Sir M.V. Road, Marol, Andheri (East), Mumbai 400059.',
  },
  {
    tag: 'Product',
    title: 'Windows 10 compliant WinEMS launched',
    body: 'A Windows 10-compliant version of WinEMS is now available — and the software is maintained end-to-end by Protovec.',
  },
  {
    tag: 'Partnership',
    title: 'Official Control See integrator',
    body: 'Protovec is now an official system integrator for Control See alarm notification solutions.',
  },
]

export const careers = [
  {
    ref: 'EE – Mumbai',
    title: 'Automation Engineer',
    type: 'Full-time',
    location: 'Mumbai',
    email: 'kalpesh.urunkar@protovec.com',
    intro:
      'Design and commission industrial automation projects end-to-end — from PLC and SCADA development to FAT, SAT and on-site commissioning.',
    skills: [
      'Expertise in PLC programming, SCADA system design, FAT, SAT and installation & commissioning of industrial automation projects.',
      'Strong knowledge of instrumentation and industrial sensors — proximity sensors, RTDs, flow transmitters — and their working principles.',
      'PLC programming exposure on any one or more of: Allen Bradley (Micro/CompactLogix), Mitsubishi (FX & Q series), Siemens (S7 300/400/1200/1500), Omron.',
      'HMI application development — new applications, animation and PLC communication.',
      'Strong knowledge of switchgear — relays, contactors, MCBs, MPCBs, ELCBs and circuit breakers.',
      'Practical panel design experience — star-delta & DOL starters, CTs, PTs and complete wiring layouts.',
      'Working knowledge of three-phase induction motor starting and speed-control techniques.',
    ],
    profile: ['Any certification course or knowledge of PLC/HMI/SCADA', 'B.E./B.Tech in Electrical / E&TC / Instrumentation', 'Punctual, dedicated and committed to high-quality work delivered on time.'],
    applyNote: 'Send your resume with job reference EE – Mumbai in the subject line.',
  },
  {
    ref: 'SE – Mumbai',
    title: 'Sales Engineer',
    type: 'Full-time',
    location: 'Marol, Andheri (East), Mumbai',
    email: 'kalpesh.urunkar@protovec.com',
    intro:
      'Own the technical sales cycle for industrial automation and control-system solutions — manage customers, prepare techno-commercial offers and convert leads into closures.',
    skills: [
      'Maintain and strengthen customer relationships and ensure smooth project execution.',
      'Convert leads into confirmed sales orders and support digital-marketing lead generation.',
      'Work out costing and prepare professional techno-commercial offers.',
      'Analyse RFQs and work with the engineering team to propose the right-fit solution.',
    ],
    profile: ['Basic knowledge of PLC systems, control panels and industrial automation', 'Strong communication, presentation and negotiation skills', 'Self-motivated, team-oriented and target-driven', 'Proficiency in MS Office (Excel, Word, PowerPoint)', 'B.E. Electrical / E&TC / Instrumentation'],
    applyNote: 'Experience 0–3 years. Send your resume with job reference SE – Mumbai in the subject line.',
  },
]

export const contact = {
  heading: 'Talk to an automation engineer',
  blurb: 'Tell us about your process. We respond with an honest, vendor-neutral recommendation — not a sales pitch.',
  offices: [
    {
      city: 'Mumbai Office',
      lines: [
        '2nd Floor, Ajanta House,',
        '35, Marol Coop. Industrial Estate,',
        'Off Sir M.V. Road, Marol,',
        'Andheri (East), Mumbai,',
        'Maharashtra 400059',
      ],
      phone: '+91 22 4120 6095',
      phoneHref: '+912241206095',
    },
    {
      city: 'Ratnagiri Office',
      lines: [
        'D17, Mirjole Block,',
        'Near Jagrut Motors, MIDC,',
        'Ratnagiri – 415 639,',
        'Maharashtra, INDIA',
      ],
      phone: '+91 2352 231 114',
      phoneHref: '+912352231114',
    },
  ],
  email: 'info@protovec.com',
  careersEmail: 'kalpesh.urunkar@protovec.com',
  hours: 'Mon–Sat · 9:00–18:30 IST',
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Services', to: '/services' },
  { label: 'Applications', to: '/applications' },
  { label: 'Projects', to: '/projects' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]
