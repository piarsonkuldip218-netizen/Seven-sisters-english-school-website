# Seven Sister's English School — Official Website

Premium website for **Seven Sister's English School** (Estd. 1988, Reg. No. 2738), Rangapara, Sonitpur, Assam.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Hosting:** GitHub Pages (free, static export)

## Design System

**Editorial Academic** — magazine-inspired, premium private school aesthetic.

- **Colors:** Deep Navy `#0A1628` · Cream `#F8F4E9` · Gold `#C9A961`
- **Typography:** Playfair Display (serif headings) + Inter (body)

## Local Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build & Preview

```bash
npm run build
# Output in /out
```

## Deployment

Auto-deploys to GitHub Pages on push to `main` via `.github/workflows/deploy.yml`.

Live URL: `https://piarsonkuldip218-netizen.github.io/seven-sisters-english-school-website/`

## Updating Content

All school data lives in [`lib/data.ts`](./lib/data.ts) — update there and changes propagate everywhere.

Sections to fill:
- [ ] Real address with pincode
- [ ] Real phone numbers (main + WhatsApp)
- [ ] Principal name + photo + message
- [ ] 5-8 faculty members with photos
- [ ] 15-20 campus + event photos (replace `/public/*-placeholder.svg`)
- [ ] News announcements
- [ ] Social media links
- [ ] Google Maps embed URL

## Sections

1. **Hero** — School identity, established year, dual CTAs
2. **About** — Story of SSES with editorial drop-cap
3. **Vision & Mission** — Guiding principles + 4 core values
4. **Principal's Message** — Portrait + welcome note
5. **Academics** — 4 programmes (Pre-Primary → Secondary)
6. **Facilities** — 6 campus facilities with icons
7. **Faculty** — Teacher portrait grid
8. **Gallery** — Editorial mosaic of campus photos
9. **News** — Announcements + achievements
10. **Admissions** — 4-step process, documents, WhatsApp inquiry
11. **Contact** — Address, phone, email, embedded map
12. **Footer** — Brand, quick links, contact, social
