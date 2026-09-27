# Repository Guidelines

## Project Structure & Module Organization
The app is a Vue 3 + Vite marketing site.
- `src/main.js` boots the app; `src/App.vue` is the shell.
- `src/router/index.js` defines routes: `/`, `/orob`, `/orob-desk`, `/orob-sync`, `/company`, `/support`, plus a catch-all 404.
- `src/pages/` contains route-level views.
- `src/components/` contains reusable UI sections.
- `src/**/*.test.js` contains Vitest specs (currently page-focused).
- `public/` stores static assets, plus static (JS-free) legal pages at `public/orob/{privacy,terms,delete-account,support}/index.html` — Vite copies these verbatim into `dist/`, and GitHub Pages serves them directly without going through the SPA. Their legal text is copied verbatim from the Orob mobile app (`consumer_legal_copy.dart`); do not reword it without bumping the version/date shown on the page.
- Product family: **orob** (free consumer app), **orob Desk** (hosted live-rate platform for bullions — never say "dealer" anywhere in its copy), **orob Sync** (keeps a business's books in sync with Tally Prime). The site never names an individual person; `src/noPersonNames.test.js` guards this.
- Design tokens (colour, type, spacing) in `src/style.css` follow the orob design system; see the Orob repo's `docs/design/orob-consumer/README.md` for the canonical source if tokens need to change.
- Root config lives in files like `vite.config.js`, `tailwind.config.js`, and `postcss.config.js`.

## Build, Test, and Development Commands
- `npm install`: install dependencies for local development.
- `npm run dev`: start Vite dev server with HMR.
- `npm run test`: run unit tests once via Vitest (`vitest run`).
- `npm run build`: produce production bundle in `dist/`.
- `npm run preview`: serve the built output locally.
- `npm ci`: clean, lockfile-based install used by CI.

Use Node `^20.19.0 || >=22.12.0` as defined in `package.json`.

## Coding Style & Naming Conventions
- Use 2-space indentation in JS/Vue files.
- Prefer single quotes and no semicolons in JS, matching existing files.
- Use PascalCase for Vue SFC filenames (`HomePage.vue`, `HeroSection.vue`).
- Keep route names lowercase in router config (`name: 'pricing'`).
- Use the `@/` alias for imports from `src/`.
- Prefer Tailwind utility classes and shared theme tokens from `src/style.css`.
- Keep test selectors stable with `data-testid` for interaction/assertion points.

## Testing Guidelines
- Frameworks: Vitest + `@vue/test-utils` with `jsdom` environment.
- Test files should be named `*.test.js` and placed under `src/` near the feature.
- Test behavior, not implementation details (rendered tiers, toggle behavior, route output).
- Run `npm run test` before opening a PR; run `npm run build` for release-impacting changes.

## Commit & Pull Request Guidelines
- Follow the existing commit style: `feat: ...`, `merge: ...`, optional ticket references (example: `feat: fulfill ORO-1 ...`).
- Keep commits focused and atomic.
- PRs should include:
  - concise summary of changes,
  - linked issue/task,
  - screenshots for UI updates,
  - verification notes (`npm run test`, `npm run build` results).

## Security & Configuration Tips
- Copy `.env.example` to `.env` for local setup.
- Only expose client-safe values via `VITE_*` variables.
- Never commit secrets or production credentials.

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.
