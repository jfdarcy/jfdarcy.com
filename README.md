# jfdarcy.com Portfolio

Personal website for Jean-François D'Arcy, Ph.D — UX researcher and human factors engineer.

Built with [Astro](https://astro.build) as a static site, deployed on [Vercel](https://vercel.com).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:4321/home](http://localhost:4321/home).

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repo in the [Vercel dashboard](https://vercel.com/new).
3. Framework preset: **Astro** (auto-detected).
4. Deploy — no custom build settings required.
5. Add custom domain `jfdarcy.com` and `www.jfdarcy.com` in **Project → Settings → Domains**.
6. Update DNS at your registrar:
   - `A` record for `@` → `76.76.21.21` (Vercel)
   - `CNAME` for `www` → `cname.vercel-dns.com`
7. Remove the Google Sites DNS mapping once Vercel shows the domain as verified.
8. Confirm `/` redirects to `/home` and all legacy paths resolve.

## URL structure

Matches the existing Google Sites paths:

| Page | Path |
|------|------|
| Home | `/home` |
| About Me | `/about-me` |
| UX Research Philosophy | `/ux-research-philosophy` |
| Leadership | `/leadership` |
| Portfolio | `/portfolio` |
| Case studies | `/portfolio/{slug}` |

## Assets

Image layout under `public/images/`:

```
public/images/
  hero/           — site-wide hero backgrounds
  about/          — personal and education photos
  portfolio/
    cards/        — portfolio index card thumbnails
    fair-hire-ai/ — case study screenshots
assets/source/    — original full-resolution files (not deployed)
```

- Run `node scripts/download-images.mjs` to refresh hero images from the live site (requires referer header for Google CDN)
- Run `node scripts/fetch-portfolio-cards.mjs` to refresh portfolio card thumbnails from Unsplash
