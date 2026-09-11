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
├── work.html             Work / project portfolio
├── mission.html         Mission
├── support.html          Support GoldenSunAI
│
├── assets/               Images, logos, textures, banners
├── css/                    Design tokens, base styles, components, responsive rules
├── js/                     Vanilla JS (navigation, small interactions)
├── projects/            Individual project pages (ClearSky, Atlas, GoldCastle, Ari, BlackBowAI)
│
└── .github/workflows/    GitHub Pages deployment
```

## Local development

There is no build step. Open `index.html` directly in a browser, or serve
the repository root with any static file server, e.g.:

```bash
python3 -m http.server
```

## Roadmap

- **PR1** — Core website, navigation, and brand system *(this PR)*
- **PR2** — Full project portfolio system (ClearSky, Golden Sun Atlas, GoldCastle, Ari Planner, BlackBowAI)
- **PR3** — Team GoldenSun and deeper company story
- **PR4** — Field Notes and Shop

## License

- **Source code** in this repository is licensed under the [MIT License](./LICENSE).
- **GoldenSunAI branding, product names, logos, and original artwork** are
  **not** covered by the MIT License and remain All Rights Reserved. See
  [`BRAND-LICENSE.md`](./BRAND-LICENSE.md) for details.

## ☀️

GoldenSunAI
Explore Beyond.
Built by Team GoldenSun.
