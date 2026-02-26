# Xaurum Fintech Pvt Ltd Website

Standalone marketing website repository for Xaurum Fintech Pvt Ltd.

## Tech Stack

- Vue 3
- Vite
- TypeScript
- Vue Router
- Vitest

## Routes

- `/` Home
- `/pricing` Pricing (3 tiers, monthly/annual toggle)
- `/about` About

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

## Build and Test

Run tests:

```bash
npm run test
```

Run production build:

```bash
npm run build
```

## Environment Variables

Copy `.env.example` to `.env` and set values:

- `VITE_SITE_URL` - Production site URL
- `VITE_ANALYTICS_ID` - Analytics provider ID

## Deploy

### Vercel

1. Import this repository in Vercel.
2. Framework preset: `Vite`.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Add environment variables from `.env.example`.

### Netlify

1. Connect repository in Netlify.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Add environment variables from `.env.example`.

### GitHub Pages

1. Build with `npm run build`.
2. Deploy `dist/` using a GitHub Pages action (or `gh-pages` branch).
3. Ensure SPA routing fallback is configured.

## CI

GitHub Actions workflow: `.github/workflows/ci.yml`

- `npm ci`
- `npm run test`
- `npm run build`

## Publishing Checklist

- [ ] Repository exists under org and is accessible.
- [ ] `.env` is configured for production values.
- [ ] CI passes on `main`.
- [ ] `npm run test` passes.
- [ ] `npm run build` passes.
- [ ] Deployment target (Vercel/Netlify/GitHub Pages) configured.
