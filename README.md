# Simon — Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## What's here

- **Hero** — typed terminal boot sequence, ambient cursor-glow, gradient-signal accent
- **About / Stack / Projects / Experience / Contact** — scroll-reveal sections, marquee tech ticker, hover-tilt project cards, magnetic contact links
- Content lives in one place: `lib/data.ts` — edit that file to update copy, projects, and stack without touching components
- `prefers-reduced-motion` is respected globally (`app/globals.css`)

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Editing content

Open `lib/data.ts` and update:
- `profile` — name, role, tagline, terminal boot lines
- `stack` — grouped by category, feeds both the marquee and the badge grid
- `projects` — add/edit project cards (BoraSystems and Homiqa are already in there)
- `experience` — timeline entries
- `socials` — replace the placeholder GitHub/LinkedIn/email links with your real ones before deploying

## Deploying to GitHub Pages

This project is configured for **static export** (`output: "export"` in `next.config.mjs`), which avoids the server-only features GitHub Pages can't run.

1. Push this repo to GitHub.
2. In your repo settings → **Pages**, set the source to **GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) builds on every push to `main` and deploys the `out/` folder. It also writes `.nojekyll` during the build — this is the fix for the Jekyll-interference issue where GitHub Pages tries to process the `_next/` folder as a Jekyll site and breaks asset loading. A `.nojekyll` file is also committed directly in `public/` as a fallback.
4. **If deploying to a project page** (`username.github.io/repo-name` rather than a custom domain or root `username.github.io` repo), uncomment and set `basePath` and `assetPrefix` in `next.config.mjs`:

   ```js
   const nextConfig = {
     output: "export",
     images: { unoptimized: true },
     basePath: "/repo-name",
     assetPrefix: "/repo-name/",
   };
   ```

   Without this, assets will 404 on a project page even though they build fine locally.

5. Commit `package-lock.json` — the workflow uses `npm ci`, which requires it to be present and in sync with `package.json`.

## Notes

- Fonts (Space Grotesk / Inter / JetBrains Mono) load via `next/font/google` — no external `<link>` tags, no layout shift.
- `CursorGlow` only renders on desktop (`hidden md:block`) since it's a mouse-driven effect.
- Colors, fonts, and animation keyframes are all defined as design tokens in `tailwind.config.ts` — that's the single place to adjust the palette.
