# GoldenSunAI ☀️

**Explore Beyond.**
*Built by Team GoldenSun.*

This repository is the source for the [GoldenSunAI](https://sukonik.github.io/goldensunai/)
corporate website — a fast, mobile-first, static site built with plain
HTML, CSS, and vanilla JavaScript and deployed on GitHub Pages.

GoldenSunAI builds focused software across AI, environmental intelligence,
legal technology, personal computing, and digital experiences. This site is
the central portfolio for our products and experiments.

## Stack

- **HTML + CSS + Vanilla JavaScript** — no build step, no framework
- **GitHub Pages** for hosting, deployed via GitHub Actions

We are intentionally staying lightweight. Mobile-first, minimal JavaScript,
optimized images, accessible motion, and strong Lighthouse scores are part
of the design, not an afterthought. A framework like React is not on the
table unless a future feature gives us a compelling reason.

## Project structure

```text
goldensunai/
│
├── index.html          Home
├── about.html           About
├── work.html            Work / project portfolio
├── mission.html         Mission
├── support.html         Support GoldenSunAI
│
├── assets/              Images, logos, textures, banners, icons
├── css/                 Design tokens, base styles, components, responsive rules
├── js/                  Vanilla JS (navigation, small interactions)
├── projects/             Individual project pages (ClearSky, Atlas, GoldCastle, Ari, BlackBowAI)
│
└── .github/workflows/    GitHub Pages deployment
```

## Local development

There is no build step. Open `index.html` directly in a browser, or serve
the repository root with any static file server, e.g.:

```bash
python3 -m http.server
```

## Where things stand

The site currently exists as a working skeleton — every page below is
real, linked, and responsive, but most copy and visuals are still
first-pass placeholders waiting on PR2/PR3.

| Page | Route | Status |
| --- | --- | --- |
| Home | `index.html` | Hero, product teasers, philosophy callout |
| Work | `work.html` | Portfolio grid for all five products |
| About | `about.html` | Company overview + first look at Team GoldenSun |
| Mission | `mission.html` | Understand → Organize → Discover → Act |
| Support | `support.html` | "Fuel the Sun" — no live payment links yet |
| Project pages | `projects/*.html` | ClearSky, Golden Sun Atlas, GoldCastle, Ari Planner, BlackBowAI — placeholder profiles linked from Work |

Also in place: the black/gold/cobalt design system (`css/tokens.css`,
`base.css`, `components.css`, `responsive.css`), a mobile navigation
drawer (`js/main.js`), the GitHub Pages deploy workflow, and the
MIT / brand-license split described below.

**Not yet done:** GitHub Pages needs to be switched on in
Settings → Pages → Source: **GitHub Actions**; real brand artwork (logo,
banners, textures) still needs to replace the placeholder favicon; and the
Support page's contact address is a placeholder.

## Roadmap

- **PR0** — Project docs *(this PR)*: README and licensing, kept current
  as the source of truth for what's built and what's next.
- **PR1** — Reformat into a proper multipage site: solidify navigation,
  structure, and the shared design system across every page.
- **PR2** — Basic buildout of each page: get real, considered content and
  layout on Home, Work, About, Mission, and Support, one page at a time.
- **PR3** — Add more content: deepen each page — Team GoldenSun bios, the
  full project portfolio system, company story, and more.

## License

- **Source code** in this repository is licensed under the [MIT License](./LICENSE).
- **GoldenSunAI branding, product names, logos, and original artwork** are
  **not** covered by the MIT License and remain All Rights Reserved. See
  [`BRAND-LICENSE.md`](./BRAND-LICENSE.md) for details.

## ☀️

GoldenSunAI
Explore Beyond.
Built by Team GoldenSun.
