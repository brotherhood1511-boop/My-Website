# Site Design Plan

Finalized decisions from the planning phase. Companion to `orignaldesign.md` (the original ChatGPT scoping notes) — this is the locked-in version.

Live reference mockup: https://claude.ai/code/artifact/794dfc8f-f68b-489a-94e3-e27b2f38c16b

## Site Map

| Page | Route | Content |
|---|---|---|
| Home | `/` | Preview/landing only — photo, name, role tags, short bio, quick facts, teaser links out to the other pages |
| Military | `/military` | One long sectioned page: Service Clock, Deployments, TDYs, Career Fields, Pins & Badges, Medals & Awards, Schools/Training, Gallery |
| Resume | `/resume` | Chronological service + work history (Security Escort, ANG Data Ops/Knowledge Management, Flatiron School, current role) + downloadable PDF |
| Travel | `/travel` | General travel log, grows one entry per trip (Alaska is the first) |
| Projects | `/projects` | Card grid with tech-stack tags per project, filterable by tag |
| Contact | footer only | Email, GitHub, LinkedIn — no dedicated page |

## Tech Stack

- Vite + React + `react-router-dom`
- Static local data files for now, field-shaped to match a future Postgres/Supabase schema (swap-in later without a redesign)
- Project root is split into `frontend/` and `backend/` for organization — `backend/` is currently just a placeholder (see its README) since the site runs on static data; it's where Supabase/API code will live once that phase starts.

```
Website/
  design-plan.md
  orignaldesign.md
  backend/
    README.md          (placeholder — see Tech Stack note above)
  frontend/
    package.json
    vite.config.js
    index.html
    public/
      resume.pdf        (drop your resume PDF here)
    src/
      components/
        Navbar.jsx
        Footer.jsx
        ServiceClock.jsx
        Chip.jsx           (badges/medals)
        ProjectCard.jsx
        TravelCard.jsx
        ResumeItem.jsx
        TimelineItem.jsx
        Gallery.jsx
      pages/
        Home.jsx
        Military.jsx
        Resume.jsx
        Travel.jsx
        Projects.jsx
      data/
        projects.js
        deployments.js
        tdys.js
        timeline.js        (enlistment, basic training, tech school, promotions)
        badges.js
        medals.js
        travelEntries.js
        experience.js
        education.js
      lib/
        media.js           (import.meta.glob helpers)
      assets/
        military/
        travel/
      App.jsx
      main.jsx
      index.css
```

Run the dev server from `frontend/` (`cd frontend && npm run dev`), not the repo root.

## Assets

Real folders already created at the project root:

```
assets/
  Military/
    Enlistment 12262018
    Basic Training
    Tech school
    Promotions
    SrAPromotion
    Deployment2021
    Deployment2024
    Guam                (TDY)
  Trips/
    Italy
    Munich Germany
    Seattle
    Shandoah VA 07312019
```

Mapping to data files:
- **timeline.js** — Enlistment (2018-12-26), Basic Training, Tech School, Promotions, SrA Promotion
- **deployments.js** — Deployment2021, Deployment2024
- **tdys.js** — Guam
- **travelEntries.js** — Italy, Munich Germany, Seattle, Shenandoah VA (07/31/2019)

**Built as:** moved into `frontend/src/assets/military/` and `frontend/src/assets/travel/` (not `public/`) so `frontend/src/lib/media.js` can use Vite's `import.meta.glob` to auto-discover every photo in a folder at build time. Data files (`timeline.js`, `deployments.js`, `tdys.js`, `travelEntries.js`) only reference a folder name — no filename lists to maintain. Adding a new photo to an existing folder, or a whole new folder + one data entry, needs zero other code changes.

Note: `vite.config.js` needed `assetsInclude: ["**/*.JPG", "**/*.JPEG", "**/*.PNG"]` added — Vite doesn't treat uppercase extensions (common from phone cameras) as image assets by default, so photos were failing to load until that was added.

## Design System — Air Force theme

**Palette**
| Token | Value | Use |
|---|---|---|
| `--bg` | `#0a0d14` | page background (navy-black) |
| `--panel` | `#10151f` | card/panel background |
| `--panel-2` | `#141b28` | photo-placeholder texture |
| `--ink` | `#e7ecf2` | primary text |
| `--muted` | `#7c8894` | secondary text |
| `--line` | `rgba(120,150,190,0.16)` | borders/dividers |
| `--grid` | `rgba(120,150,190,0.05)` | subtle background grid |
| `--blue` | `#4e9be0` | primary accent (Air Force blue) — links, active states, badges, service clock |
| `--blue-dim` | `#2c5a86` | borders on blue elements |
| `--silver` | `#b9c2cb` | secondary labels, type tags, project tech pills |
| `--gold` | `#c9a227` | reserved *only* for medals/awards — never used elsewhere |

**Type**
- System sans (`-apple-system, "Segoe UI", system-ui`) for all running text and headings
- Monospace (`"Cascadia Code", "SF Mono", Consolas`) reserved for data/readouts: dates, coordinates, the service clock, quick-fact fields — never for prose

**Layout language**
- Subtle grid-line background site-wide (42px grid, near-invisible)
- Bordered panels with square corners (no border-radius) — reads as instrumentation, not consumer-app
- Sticky top nav, translucent + blurred

## Page-Specific Components

- **Home** — "personnel dossier" card: photo panel, name, role tags (blue outline), bio paragraph, 3-column quick-fact strip (mono)
- **Military** — service clock (live-ticking years/days/hours/min/sec from enlistment date **2018-12-26 15:48**) + "loadout grid" of bordered chips for badges/quals (blue) and medals (gold variant, distinct border/icon color)
- **Resume** — download button + chronological list, each row: date range (mono) / title / org (blue label) / description
- **Travel** — "flight log" cards: photo, date (mono), location name, coordinates (mono, silver), short note
- **Projects** — filter pill bar (tag toggle, multi-select, OR logic, "All" resets) + card grid, each card: title, description, tech-stack pills (silver) pinned to the bottom

## Content To Fill In Before Build

- [x] Real photo for Home dossier panel (`frontend/src/assets/travel/Italy/IMG_5416.PNG`)
- [x] Real resume PDF dropped in and linked (`frontend/public/resume.pdf`)
- [x] Real experience/education pulled from actual resume PDF (Armament Systems Technician, Security Assistant, Security Escort, Data Operations Specialist; Flatiron, UMGC, Northern HS, Career & Technology Academy)
- [x] Real projects from resume (JS Event Logging System, Web Page Dev Project, Debugging Lab, GitHub Workflow) replacing the placeholders
- [x] Deployments filled in — both to Prince Sultan Air Base (PSAB), Saudi Arabia: 2021-07-10–2021-10-22 and 2024-01-18–2024-05-05
- [x] TDY filled in — Guam, 2025-12-04–2025-12-15, training mission with a one-night stay in Japan en route
- [x] Timeline filled in — Enlistment (2018-12-26 15:48, sworn in by his dad, at the time Maj Siciliano), Basic Training (Lackland AFB, TX, Oct–Dec 2019), Tech School (Sheppard AFB, Wichita Falls TX, Armament Technician AFSC 2W1X1F, Dec 2019–Apr 2020), Coined by a Two-Star General (2022-09-11, Army/Air NG, Washington DC), Senior Airman Promotion (2022-03-20, E-4)
- [x] Travel fully filled in — Shenandoah (2019-07-31, weekend away with Hunter and Brendon before Basic Training), Seattle (3 visits: May 2023, Dec 2023, May–Jun 2024, visiting Hunter — data model changed from a single `date` string to a `dates` array to support repeat visits), Munich (Oktoberfest via Amsterdam, Sep 2022), Italy (25th birthday trip via Amsterdam, Nov 2024).
- [x] Real medals/ribbons list (12 total) with real public-domain ribbon images from Wikimedia Commons and correct devices (Oak Leaf Clusters, Service Stars, gold border, "M" device) — `frontend/src/data/medals.js`, images in `frontend/src/assets/military/medals/`. No confirmed badges yet (`badges.js` is empty — Knowledge Management badge not earned).
- [x] Enlistment description filled in — sworn in by his dad, at the time Maj Siciliano, 2018-12-26 15:48 (matches the live service clock start time)

## Build Status

Scaffolded and verified running (`npm install && npm run dev`, all 5 routes screenshot-tested, project filter interaction confirmed working, zero console errors). All photo folders wired up and rendering. Remaining work is filling in the TODO content noted above, not further scaffolding.
