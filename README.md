New Website Link - https://protovec-site.vercel.app/#/contact

Old Website Link - https://protovec.com/

# Protovec Site

Marketing website for **Protovec Technologies Pvt. Ltd.** — "Your Automation Solutions Partner, not just a Vendor!" Protovec engineers PLC, SCADA, HMI, MES and drive systems for industrial automation, serving Mumbai & Ratnagiri since 2008.

Built with **React 19 + Vite**, using **framer-motion** for animations and **react-router-dom** for routing.

## Tech Stack

- [React 19](https://react.dev/) with JSX
- [Vite](https://vite.dev/) — dev server, build, preview
- [framer-motion](https://www.framer.com/motion/) — scroll reveals, word reveals, hero scene
- [react-router-dom](https://reactrouter.com/) — client-side routing
- [oxlint](https://oxc.rs/docs/guide/usage/linter.html) — linting
- [Three.js](https://threejs.org/) types (`@types/three`) for the WebGL hero background

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Production build (outputs to dist/)
npm run build

# Preview the production build
npm run preview

# Lint
npm run lint
```

## Project Structure

```
src/
├── App.jsx               # Router setup
├── main.jsx              # Entry point
├── index.css             # Global styles
├── data/
│   └── content.js        # Single source of truth for all site content
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── Services.jsx
│   ├── Applications.jsx
│   ├── Projects.jsx
│   ├── Careers.jsx
│   └── Contact.jsx
├── components/           # Header, Footer, Reveal, WordReveal, PageHero, etc.
├── scenes/
│   └── HeroScene.jsx     # WebGL hero background
└── lib/
    └── hooks.js          # Shared React hooks
```

## Content

All copy (home, products, services, applications, projects, careers, contact) is pulled from [protovec.com](https://protovec.com) and lives in `src/data/content.js` — the single source of truth for every route. Product images and client logos are served from `public/images/`.

## Pages

- **Home** — hero, stats, philosophy, results, client network
- **Products** — PLC, HMI, SCADA, MES, Drives, Safety & Alarms
- **Services** — engineering services
- **Applications** — six application verticals
- **Projects** — case studies with photos
- **Careers** — openings
- **Contact** — Mumbai & Ratnagiri contact details
# protovec-site
