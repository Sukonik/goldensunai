# GoldenSunAI Brand Kit

This folder is the canonical source archive for GoldenSunAI's brand
assets — the raw files, at full resolution, as delivered. It is **not**
optimized for the website; production-ready derivatives (transparent,
resized, compressed) live in [`../assets/logos/`](../assets/logos/) and
get referenced directly from the site's HTML/CSS.

Licensing: everything in this folder is brand identity, not source code —
see [`../BRAND-LICENSE.md`](../BRAND-LICENSE.md). All rights reserved.

## Structure

```text
brand/
├── Logos/     Every logo/emblem exploration and color way (PNG, 1254×1254)
├── Images/    Composed marketing artwork (LinkedIn banners)
└── Text/      Brand voice, LinkedIn copy, product family, team copy
```

## Logos

The primary mark is a "G" set inside a sunburst / compass emblem. In
rough order of how finished/likely-to-be-used each is:

| File | Description | Suggested use |
| --- | --- | --- |
| `golden_g_compass_emblem.png` | Gold mark on solid black | **Primary mark for dark UI** — this is what `assets/logos/emblem-gold_512.png` is derived from (background keyed to transparent) |
| `GoldenSunAI_Selected_BlackWhite.png` / `GoldenSunAI_Logo_BlackWhite_Original.png` | Black mark, high contrast (identical files) | Favicon, print, anywhere maximum legibility matters — source for `assets/logos/emblem-mono_512.png` |
| `GoldenSunAI_Logo_BlackWhite_RetroSunburst.png` | Alternate black & white sunburst treatment | Reference only |
| `cobalt_g_compass_sun_emblem.png` | Same mark in cobalt blue | Blue-accent contexts (matches the site's cobalt accent token) |
| `chrome_g_compass_emblem.png` | Glossy chrome 3D render | Reference / novelty use only — too skeuomorphic for the flat site UI |
| `GoldenSunAI_Selected_Gold_2D.png` / `GoldenSunAI_Logo_Gold_2D.png` | Gold mark on cream paper texture (identical files) | Reference — background isn't flat enough to key out cleanly |
| `goldensun_ai_wordmark.png` | "GoldenSun AI" wordmark, cobalt, on white | ⚠️ **Spacing conflict** — this file reads "GoldenSun AI" (two words). The brand rule is **GoldenSunAI as one word everywhere**. Don't ship this file as-is on the site; the site's nav/footer use a hand-styled one-word text lockup instead. Flag for a corrected wordmark render. |
| `GoldenSunAI_Logo_PixelForestWater_*.png`, `GoldenSunAI_Selected_PixelScene.png` | Sun/G emblem over a pixel-art RPG overworld (forest + water) | Social banners, "Field Notes" / community-facing moments — Golden-Sun-the-game-inspired |
| `GoldenSunAI_Logo_GlowingForest.png`, `GoldenSunAI_Selected_GlowingScene.png` | Emblem glowing over a pixel forest scene | Reserved for launches, announcements, and major milestones — not for routine pages. Good inspiration for a one-off "unique page" treatment (motion + pixels) when something ships that deserves it. |
| `GoldenSunAI_Logo_Ruins_2D.png` | Emblem among pixel-art ruins | Reference only |

See `Text/Logo_Manifest.txt` for original filenames and checksums.

## Images

`Images/linkedin-banners/` — four LinkedIn cover explorations. All share
the same visual system: a dotted/wireframe globe with a warm gold horizon
glow, fine network arcs, and a pixel/mosaic grid texture. **`cover-4.png`
is the founder's pick** and is the reference for the "global systems"
motif on the website's Home hero.

## Text

Ready-to-use company copy, LinkedIn profile kit, the full product family
(including two products not yet on the website roadmap — **Capsule AI**
and **Q-Lens** — see `Product_Family.txt`), team structure, and brand
voice notes. Pull from these verbatim where the tone matches; the
website's own copy has drifted slightly in places (e.g. "Explore Beyond."
vs. "Software for information, environments, and everyday life.") and
that's fine — treat this folder as raw material, not a mandate to match
word-for-word.
