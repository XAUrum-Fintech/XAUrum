# Xaurum Fintech Website

Standalone marketing website for Xaurum Fintech Private Limited and its orob product family.

## Product family

- **orob** — a free consumer app for comparing live gold and silver prices across bullions.
- **orob Desk** — a hosted live-rate platform for bullions to stream their own prices to customers.
- **orob Sync** — keeps a business's Tally Prime books in sync.

The public site currently presents orob Desk and orob Sync. It keeps orob Desk on an illustration until its product UI is redesigned; the consumer app is not announced on visible site pages yet.

## Routes

- `/` Home
- `/orob-desk` orob Desk
- `/orob-sync` orob Sync
- `/company` Company
- `/support` Support

The `/orob/{privacy,terms,delete-account,support}/` paths are static, JavaScript-free pages copied directly from `public/` into the build output. `/orob/privacy/` and `/orob/terms/` redirect to the canonical pages on orob.app; `/orob/delete-account/` and `/orob/support/` are served locally.

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

### GitHub Pages + Custom Domain

This repo includes `.github/workflows/deploy-pages.yml` to deploy on every push to `main`.
The current custom domain is `xaurum.in` (from `public/CNAME`); the workflow also supports an optional `CUSTOM_DOMAIN` repository variable.

1. In GitHub: `Settings -> Pages`, set `Source` to `GitHub Actions`.
2. In GitHub: `Settings -> Secrets and variables -> Actions -> Variables`, add:
   - `CUSTOM_DOMAIN=yourdomain.com` (or `www.yourdomain.com`)
3. Push to `main` and wait for the `Deploy to GitHub Pages` workflow to pass.

GoDaddy DNS records (for apex domain `yourdomain.com`):

- `A` record, host `@` -> `185.199.108.153`
- `A` record, host `@` -> `185.199.109.153`
- `A` record, host `@` -> `185.199.110.153`
- `A` record, host `@` -> `185.199.111.153`
- `CNAME` record, host `www` -> `<your-github-username>.github.io`

Then, in GitHub `Settings -> Pages`, set `Custom domain` to the same value used in `CUSTOM_DOMAIN` and enable `Enforce HTTPS` after certificate issuance.

Notes:
- Remove conflicting `A`, `AAAA`, or `CNAME` records for the same host.
- DNS propagation can take from a few minutes up to 24-48 hours.
- The workflow automatically adds `404.html` fallback for Vue Router history mode.
- The workflow also sets Vite base path automatically:
  - no custom domain -> `/<repo-name>/`
  - custom domain set -> `/`

## Publishing Checklist

- [ ] Repo is accessible in GitHub org.
- [ ] `.env` configured for production.
- [ ] `npm run test` passes.
- [ ] `npm run build` passes.
- [ ] CI is green on `main`.
- [ ] Deployment target is configured.
