# Xaurum Fintech Pvt Ltd Website

Standalone marketing website repository for Xaurum Fintech Pvt Ltd.

## Scope Implemented

- Separate repository outside the Orob monorepo.
- Baseline landing website with Home, Pricing, and About pages.
- Pricing page with exactly 3 tiers and monthly/annual toggle.
- CI workflow for test + production build.
- Publish-ready environment placeholders and deployment steps.

## Routes

- `/` Home
- `/pricing` Pricing
- `/about` About

## Pricing Page

The pricing page includes exactly three tiers:

- Basic
- Pro
- Enterprise

Each tier has:

- `monthlyPrice`
- `annualPrice`
- `features[]`
- `ctaLabel`

Billing toggle supports:

- Monthly view
- Annual view

## Local Setup

```bash
npm install
npm run dev
```

## Build and Test

```bash
npm run test
npm run build
```

## Environment Variables

Copy `.env.example` to `.env` and set:

- `VITE_SITE_URL` - public website URL
- `VITE_ANALYTICS_ID` - analytics provider ID

## CI

Workflow: `.github/workflows/ci.yml`

- `npm ci`
- `npm run test`
- `npm run build`

## Deploy / Publish

### Vercel

1. Import repository in Vercel.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Configure env variables from `.env.example`

### Netlify

1. Connect repository in Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Configure env variables from `.env.example`

### GitHub Pages

1. Build with `npm run build`.
2. Deploy `dist/` using a GitHub Pages action.
3. Configure SPA fallback if needed.

## Publishing Checklist

- [ ] Repo is accessible in GitHub org.
- [ ] `.env` configured for production.
- [ ] `npm run test` passes.
- [ ] `npm run build` passes.
- [ ] CI is green on `main`.
- [ ] Deployment target is configured.
