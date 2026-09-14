# GoldenSunAI ☀️

### *Explore Beyond.*

**Built by Team GoldenSun.**

GoldenSunAI is an AI-native product studio building focused software across artificial intelligence, environmental intelligence, legal technology, personal computing, investing, planning, and digital experiences.

We combine human product leadership with specialized AI agents across product strategy, design, research, engineering, testing, and iteration.

> We do not just build products that use AI.  
> **We build products with AI.**

---

## ☀️ What is GoldenSunAI?

GoldenSunAI is the parent company and product studio behind a growing family of software projects developed by **Team GoldenSun**.

Our goal is to build practical, highly focused products that help people:

**Understand → Organize → Discover → Act.**

The company is intentionally broad enough to support both consumer products and specialized professional tools while allowing every project to maintain its own identity.

**Core company idea:**

> GoldenSunAI builds focused software that helps people understand information, navigate their environment, and make better decisions.

---

## 🌅 Team GoldenSun

Team GoldenSun is the creative, product, research, and development team behind GoldenSunAI.

| Team member | Role | Focus |
| --- | --- | --- |
| ☀️ **Nathan** | **CEO — Chief Executive Officer** | AI Product Engineering, web development, product direction, business strategy, final decisions |
| 🧭 **Ari** | **CDO — Chief Design & Digital Officer** | Product planning, UX, digital strategy, product concepts, customer experience |
| ⚙️ **Cole** | **CTO — Chief Technology Officer** | Software engineering, architecture, implementation, testing, deployment |
| 🔭 **Gal** | **CMO — Chief Marketing & Intelligence Officer** | Research, multimodal intelligence, positioning, market strategy, growth |

Nathan is the human product lead. Ari, Cole, and Gal are specialized AI collaborators used transparently as part of the GoldenSunAI development model.

**Team operating model:**

- Nathan sets the direction.
- Ari shapes the experience.
- Gal maps the market and intelligence.
- Cole builds the system.

---

## 🚀 Product Family

GoldenSunAI is building a portfolio of connected products and experiments.

| Project | Status | Focus |
| --- | --- | --- |
| ☁️ **ClearSky** | **Beta / Live** | Weather, wind, tides, air quality, UV, rain, and environmental intelligence |
| 🌎 **Ari** | **Concept / Development** | AI operating platform connecting intelligence, planning, work, home, life, and communications |
| 🧭 **Ari Planner** | **Concept / Development** | Personalized day and evening planning, local discovery, people, places, and possibilities |
| 🧠 **Capsule AI** | **Concept** | Personalization, context, archetypes, preferences, and recommendation intelligence |
| 👁️ **Q-Lens** | **Concept** | Contextual discovery and recommendation layer with a path toward visual and AR experiences |
| 🗺️ **Golden Sun Atlas** | **Coming Soon** | Portable local-AI computing platform spanning Atlas Desktop and Atlas OS |
| 🏰 **GoldCastle** | **Coming Soon** | Investing, asset tracking, wealth-building, and financial discovery |
| 🏞️ **BlackBowAI** | **Beta / Active Development** | Local-first legal document classification, migration, search, review, reporting, and AI tooling |

### 🗺️ Golden Sun Atlas

Atlas is a two-part AI computing platform:

- 💻 **Atlas Desktop** — Windows and macOS application for managing local models, agents, tools, memory, and hardware resources.
- 💾 **Atlas OS** — portable bootable SSD-based Linux environment designed to carry an AI workspace between compatible computers.

Shared Atlas technology includes the **Atlas Runtime, Model Router, Agent Layer, Memory Layer, Tool System, Hardware Profiler, and Resource Manager**.

Atlas uses a geographic release naming convention. A major **Series** represents a region, island, state, country, or geographic family; individual versions use cities, districts, towns, villages, or localities within that Series.

Example:

```text
🌊 Long Island Series
Atlas 1.0 — Long Beach
Atlas 1.1 — Island Park
Atlas 1.2 — Baldwin
Atlas 1.3 — Garden City
```

**Atlas:** *Your AI environment, wherever you go.*

---

## 🌐 GoldenSunAI Website

This repository is the home of the GoldenSunAI company website and portfolio.

The site is designed to feel like a product itself: fast, highly responsive, visually distinctive, and deliberately lightweight.

### Design direction

- deep black foundation
- three to four gold tones
- GoldenSunAI sun / optical-illusion **G** emblem
- subtle Y2K grids and pixel textures
- restrained orbital and global motifs
- occasional cobalt / Yves-blue accents
- crisp typography
- high responsiveness across desktop, tablet, and mobile
- accessible motion and minimal JavaScript

The visual target is **Y2K technological optimism + modern product design + RPG-inspired exploration + real software studio credibility**.

**GoldenSunAI** is always written as **one word**.

### Core pages

- 🏠 **Home**
- 💼 **Work**
- 👋 **About**
- 🎯 **Mission**
- ☀️ **Support / Fuel the Sun**

Planned later:

- 📝 **Field Notes** — product updates, AI experiments, design explorations, and development journals
- 🛍️ **Shop** — merchandise, artwork, wallpapers, and future digital products

---

## 🧱 Technology

The website intentionally starts simple:

- **HTML5**
- **CSS3**
- **Vanilla JavaScript**
- **GitHub Pages**
- **GitHub Actions**

There is no heavy frontend framework or mandatory build step. Performance, accessibility, mobile responsiveness, and maintainability are part of the product requirements rather than cleanup tasks for later.

A larger framework should only be introduced if a future feature creates a real need for one.

---

## 📁 Repository Structure

The website is organized around a small static-site architecture:

```text
goldensunai/
│
├── index.html
├── about.html
├── work.html
├── mission.html
├── support.html
│
├── assets/
│   ├── brand/
│   ├── logos/
│   ├── projects/
│   ├── banners/
│   ├── icons/
│   └── textures/
│
├── brand/
│   ├── Logos/
│   ├── Images/
│   └── Text/
│
├── css/
│   ├── tokens.css
│   ├── base.css
│   ├── components.css
│   └── responsive.css
│
├── js/
│   └── main.js
│
├── projects/
│   ├── clearsky.html
│   ├── ari-platform.html
│   ├── ari.html
│   ├── capsule-ai.html
│   ├── q-lens.html
│   ├── atlas.html
│   ├── goldcastle.html
│   └── blackbowai.html
│
├── .github/
│   └── workflows/
│       └── pages.yml
│
├── .gitignore
├── LICENSE
├── BRAND-LICENSE.md
└── README.md
```

The structure will evolve as the active website PRs are integrated into `main`.

---

## 🛠️ Local Development

The site is intentionally easy to run locally.

Open `index.html` directly, or serve the repository with any static server:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

---

## 🧪 Preview + Publish Protocol

Every meaningful website PR should end with a reviewable development handoff.

Cole's standard website handoff should include:

- 🧪 **Test Site** — current preview / internal demo
- 🚀 **Publish** — clear deployment action or workflow
- ☀️ **Live Site** — current production URL
- 📸 screenshots for meaningful visual changes
- 🔖 PR / commit reference
- ✅ desktop, tablet, mobile, navigation, and console-error verification

Development builds may expose a **dev-only publish strip** with:

```text
[ Open Test Site ]   [ Publish Site ]   [ Open Live Site ]
```

That control must never appear on the production website, and the publish action must never report success unless deployment actually succeeds.

The production target is GitHub Pages:

```text
https://sukonik.github.io/goldensunai/
```

Until GitHub Pages is enabled and the production workflow succeeds, that address should be treated as the deployment target rather than a confirmed live release.

---

## 🗺️ Website Roadmap

### PR0 — Project foundation

- README and source-of-truth documentation
- MIT / brand-license split
- repository standards

### PR1 — Core multipage site

- Home
- Work
- About
- Mission
- Support
- responsive navigation
- shared design system
- GitHub Pages workflow

### PR2 — Portfolio + visual buildout

- real GoldenSunAI brand assets
- homepage global / systems motif
- reusable project cards and banners
- ClearSky live link
- Ari
- Ari Planner
- Capsule AI
- Q-Lens
- Golden Sun Atlas
- GoldCastle
- BlackBowAI

### PR3 — Team + company story

- Team GoldenSun profiles
- deeper About and Mission content
- company philosophy
- development model
- social and GitHub links
- contact information

### PR4 — Field Notes + Shop

- GoldenSunAI Field Notes
- product development updates
- AI experiments
- design explorations
- merchandise
- wallpapers / project art
- future digital products

---

## 🎨 Brand Principles

GoldenSunAI should feel:

**Warm. Optimistic. Technical. Inventive. Human-directed. Product-focused. Retro-future. Practical.**

Avoid generic AI visual clichés such as excessive purple gradients, glowing brains, random robots, or cluttered cyberpunk dashboards.

The GoldenSunAI identity is built around exploration, intelligence, software, environments, and possibility.

### Signature language

> **Explore Beyond.**

> **Built by Team GoldenSun. ☀️**

> **Understand → Organize → Discover → Act.**

---

## ⚖️ License

### Source code

Source code in this repository is licensed under the [MIT License](./LICENSE).

### GoldenSunAI brand assets

The **GoldenSunAI name, sun/G emblem, Team GoldenSun identity, product names and logos, original artwork, project banners, and other brand assets are not granted under the MIT License**.

Those assets remain **All Rights Reserved** unless explicitly stated otherwise. See [`BRAND-LICENSE.md`](./BRAND-LICENSE.md) once it lands on `main` for the full brand terms.

---

## ☀️ GoldenSunAI

### *Explore Beyond.*

**Built by Team GoldenSun.**
