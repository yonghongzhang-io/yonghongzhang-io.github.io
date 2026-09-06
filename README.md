# Yonghong Zhang Academic Homepage

This repository contains the source for my lightweight academic homepage.

The site is intentionally built with plain HTML, CSS, and a small amount of vanilla
JavaScript: no framework, no build step, and no external runtime dependencies beyond a
web font.

## Site content

A single page in two columns. The left sidebar carries the portrait, name, research
keywords, and contact links; the main column carries, in order:

- name, position, and a one-sentence summary
- a short first-person introduction
- awards and news, grouped, with the placement in the left column
- papers and working papers, with submission status
- public research systems and demos

The design is deliberately restrained: no landing-page hero, no keyword tiles, no
section eyebrows. The substance is the papers, so they sit directly under the
introduction.

Public-facing content is intentionally separated from private or anonymous-review
research materials.

## Structure

- `index.html` — page content and navigation
- `styles.css` — design tokens, two-column layout, typography, responsive rules
  (the sidebar folds above the main column below 860px)
- `app.js` — scroll-spy navigation, sticky-header hairline, footer year
- `assets/favicon.svg` — browser tab icon
- `assets/og-cover.png` — social sharing preview (1200×630)
- `assets/Yonghong_Zhang_CV.pdf` — downloadable CV
- `.nojekyll` — tells GitHub Pages to serve the site directly

## Editing

Everything is plain HTML — edit `index.html` directly.

- **Adding an award or news item** — copy one `<li>` block inside the matching
  `<ul class="record">`; the `.rank` span is the left column (a placement, or a year).
- **Adding a paper** — copy one `<li class="pub">` block; the `pub-status` line is the
  accent-coloured status line under the abstract.
- **Replacing the photo** — overwrite `assets/avatar.jpg` with a square portrait,
  464×464 (twice the 232px display size, so it stays sharp on Retina screens).
- **Changing colours** — every colour is a CSS custom property in `:root` at the top of
  `styles.css`. The site is light-only by design; there is no dark theme.

## Publishing

This repository is named `yonghongzhang-io.github.io`, so when GitHub Pages is enabled
from the `main` branch and repository root, the site is served at:

```text
https://yonghongzhang-io.github.io/
```

For local preview, run a static server from the repository root (opening `index.html`
directly via `file://` works too, but a server matches production more closely):

```bash
python3 -m http.server 8899
```
