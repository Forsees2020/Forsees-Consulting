# AGENTS.md

Overview of the project for developers and AI agents working on this codebase.

## Project Overview

Marketing site for Fenwick Hale Consulting, an educational consulting firm
covering curriculum strategy, materials acquisition, data management, and IT
infrastructure for K-12 districts and schools. Single-page site built with
TanStack Start and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (utility classes + CSS custom properties) |
| Language | TypeScript 5.9 |
| Deployment | Netlify |

## Directory Structure

```
├── public/
│   └── favicon.ico
├── src/
│   ├── routes/
│   │   ├── __root.tsx   # Root layout: fonts, meta tags, HTML shell
│   │   └── index.tsx    # The entire site: nav, hero, services, approach, contact, footer
│   ├── router.tsx        # TanStack Router setup
│   └── styles.css        # Tailwind import + color tokens + font-family utilities
├── netlify.toml
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Key Concepts

- File-based routing via TanStack Router: `src/routes/index.tsx` maps to `/`.
- `src/routes/__root.tsx` sets page metadata and loads the Google Fonts used
  by the site (Newsreader for display type, IBM Plex Sans for body text).
- The homepage is intentionally a single file — it's a one-page marketing
  site with no separate pages beyond `/`. If the site grows (e.g. a services
  detail page or a blog), add new files under `src/routes/`.
- Color palette and font-family shortcuts live in `src/styles.css` as CSS
  custom properties (`--color-ink`, `--color-paper`, `--color-rust`, etc.)
  and a `.font-display` utility class — reuse these rather than introducing
  new one-off colors.

## Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
```

## Conventions

- Components: PascalCase. Routes: kebab-case files.
- Tailwind utility classes for styling; CSS variables for theme tokens.
- TypeScript strict mode.
