# Xaurum Fintech Website

Standalone marketing website for Xaurum Fintech Private Limited and its orob product family.

## Product family

- **orob** — a free consumer app for comparing live gold and silver prices across bullions.
- **orob Desk** — a hosted live-rate platform for bullions to stream their own prices to customers.
- **orob Sync** — keeps a business's Tally Prime books in sync.

The public site presents all three, with launch dates: orob (mid-October 2026), orob Desk (end of October 2026) and orob Sync (November 2026). Product screens on the site are illustrations with illustrative values. Set `VITE_SHOW_CONSUMER_APP=false` to hide the orob consumer app's card, page and links.

## Routes

- `/` Home (sections `#products`, `#company`, `#security` and `#contact` can be linked directly)
- `/orob` orob
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
- `VITE_CONTACT_EMAIL` - the inbox that receives Contact us enquiries (default `contact@xaurum.in`)
- `VITE_CONTACT_FORM_KEY` - the Web3Forms access key for that inbox (see below)
- `VITE_SHOW_CONSUMER_APP` - set to `false` to hide the orob consumer app

The GitHub Pages workflow reads the last three from repository variables of the same names (`Settings -> Secrets and variables -> Actions -> Variables`).

## Contact us form

The homepage form sends each enquiry as an email to `VITE_CONTACT_EMAIL`. Delivery uses [Web3Forms](https://web3forms.com), which works from a static site on any host, so it keeps working if the site moves from GitHub Pages:

1. On web3forms.com, enter the receiving address (the same as `VITE_CONTACT_EMAIL`) to get an access key by email. The key is public by design: it can only send to that address.
2. Add it as the repository variable `VITE_CONTACT_FORM_KEY` (or the same build variable on any other host) and redeploy.

Until a key is set, submitting the form opens the visitor's email app with the enquiry filled in, addressed to `VITE_CONTACT_EMAIL`. A hidden honeypot field drops most bot submissions.

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
