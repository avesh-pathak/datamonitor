# Data Monitor — landing page

The marketing site for [Data Monitor](../README.md), the local-only Windows 11
network monitor. It explains the three surfaces, shows real screenshots of the
app, walks through the architecture, and gets a visitor to a running install in
three commands.

Built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS 4** and
**shadcn/ui**, following the MiniMax Code about-page design system.

## Run it

```powershell
cd web
npm install
npm run dev
```

Open <http://localhost:3000>.

```powershell
npm run build   # production build
npm run start   # serve the production build on :3000
npm run lint
```

## Design system

The visual system comes from the reference at
`C:\Users\iamav\Desktop\design` — the MiniMax Code about-page extraction dated
8 Nov 2026. Its tokens are mapped into `src/app/globals.css` and used directly
through Tailwind:

| Token | Value used here |
|---|---|
| Brand blue | `#2888ed` (`brand`), with `#3daeff` and `#e2f2ff` support tones |
| Signal cyan | `#00b9ff` (`signal`) for the closing call to action |
| Ink | `#171717` headings, `#232323` body, `#737373` secondary, `#a3a3a3` tertiary |
| Surfaces | `#ffffff`, `#fafafa` (`paper`), `#f7f7f7` (`paper-2`), `#0a0a0a` privacy band |
| Display face | Outfit 300–700 via `next/font/google` (`font-display`) |
| UI / body face | System stack — SF Pro / Segoe UI Variable / Segoe UI |
| Container | `1144px` max, `24px` gutter |
| Section rhythm | `128px` top / `112px` bottom, `56px` gaps |
| Radii | `6 / 8 / 10 / 14 / 16 / 20 / 24 / pill` |
| Elevation | hairline, card, hover, 24/72 ambient; almost no shadow |
| Motion | 150–200ms feedback; 480ms emphasized reveals; no loops |

The page follows the reference's composition rules: a blue field with a large
Outfit display line, one artifact per section, macOS-calm whitespace, hairline
cards and a solid cyan CTA rather than a gradient.

Devicon supplies the technology icons in the stack section.

## Screenshots

`public/screenshots/` contains only captures from the running application, not
renders:

| File | Surface |
|---|---|
| `dashboard-dark.png` | Dashboard, dark, 30 days |
| `dashboard-light.png` | Dashboard, light, 30 days |
| `app-drilldown-dark.png` | Brave drill-down modal |
| `popover-dark.png` | Hover summary, transparent 2× capture |
| `popover-light.png` | Hover summary, light |
| `taskbar-readout.png` | Original Windows 11 taskbar capture |
| `taskbar-readout-cropped.png` | Taskbar crop used in the gallery |
| `taskbar-closeup.png` | Readout close-up |

The extra captures were made from the renderer files in `../app` with the
Electron binary already installed there:

```powershell
# from the repository root
$env:TARGET = "dashboard"   # or "drilldown" / "popover"
.\app\node_modules\.bin\electron.cmd .\web\scripts\capture-surfaces.cjs
```

The script uses the real preload bridge and the real WinRT usage query, so the
numbers in the screenshots are the machine's own data. Review what appears in
them before publishing.

## SEO

- Full metadata in `src/app/layout.tsx`: title, description, keywords, authors,
  canonical, Open Graph, Twitter card, robots directives and theme colour.
- Generated OG / Twitter images at `src/app/opengraph-image.tsx` and
  `src/app/twitter-image.tsx` (1200 × 630).
- `SoftwareApplication`, `WebSite`, `WebPage`, `Person`, `FAQPage` and
  `BreadcrumbList` JSON-LD in `src/components/json-ld.tsx`.
- `sitemap.ts`, `robots.ts` and `manifest.ts` file conventions.
- One `h1`, ordered section `h2`s, descriptive image alts, and a skip link.
- Static prerendering for the whole route; no client-side data fetching.

Before deploying, set the canonical origin:

```powershell
$env:NEXT_PUBLIC_SITE_URL = "https://your-domain.example"
```

The fallback is `https://data-monitor.avesh.tech`.

## Structure

```text
web/
  src/app/
    layout.tsx          metadata, fonts, header + footer
    page.tsx            the landing page sections
    globals.css         design tokens, utilities, reveal motion
    opengraph-image.tsx 1200 × 630 social card
    icon.svg            favicon
    apple-icon.png      touch icon
    sitemap.ts robots.ts manifest.ts
  src/components/
    site-header.tsx     sticky nav, portfolio + LinkedIn, mobile sheet
    site-footer.tsx
    json-ld.tsx
    marketing/          hero demo, surfaces, gallery, features, architecture,
                        tech stack, install, FAQ, section heading, reveal
    ui/                 shadcn/ui primitives
  public/screenshots/   real app captures
  scripts/              Electron capture helpers
```

## Notes

- The page has no backend, no cookies, no analytics and no third-party scripts.
- The only external destinations are `avesh.tech`, LinkedIn and the Devicon
  credit link.
- The hero's taskbar is an interactive HTML demo; hover or focus the readout to
  see the popover. It does not talk to the real app.
- The install commands are real: `cd app`, `npm install`, `npm start` from the
  repository root.
