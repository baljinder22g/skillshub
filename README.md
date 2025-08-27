<<<<<<< HEAD
# skillshub
Created a repo for the Skillhub Mohali 
=======
# SkillsHub • Gurudwara Singh Sabha (Phase 1)

A modern, mobile-first static website (React + Vite + TailwindCSS) for your community skill center.

## Quickstart

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Commit & push this repo to GitHub.
2. (Optional) In `vite.config.js`, uncomment and set `base` to `/<repo-name>/` for GitHub Pages.
3. Install gh-pages if not already: `npm i -D gh-pages`
4. Deploy: `npm run build && npm run deploy`
5. In GitHub, enable Pages for the repo (Settings → Pages) if needed.
6. Add your BigRock DNS:
   - CNAME: `www` → `<username>.github.io`
   - A records (root): 185.199.108.153 / 109.153 / 110.153 / 111.153
7. In GitHub Pages, set Custom Domain to your domain (e.g., `skillshub.co.in`), and add a `CNAME` file in `/public` if you want it auto-published.

## Notes
- Google Maps embed uses the Gurudwara coordinates (30.7276554, 76.7170392).
- Registration button links to Google Forms placeholder – replace with your form link.
- All images are local SVGs for fast, license-safe rendering.
>>>>>>> 2ee0ef4 (Initial commit - Skill Center Website)
