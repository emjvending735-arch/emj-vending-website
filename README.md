# EmJ Vending — Website

Next.js 15 site. 5 pages: Home, Services, Machines, About, Contact.
Brand: jet black + electric blue (#1C70D0) + white, matching the EmJ Vending logo.

## Brand assets (in /public and /app)
- `public/emj-mark.png`      — "EmJ" monogram used in the header
- `public/emj-logo.png`      — full logo used in the footer
- `public/vending-machine.png` — real machine (cropped from your logo) in the hero
- `app/icon.png`             — favicon (browser tab)

## Run locally
    npm install
    npm run dev        # http://localhost:3000

## Before launch — 2 quick steps
1. **Leads -> Gmail:** in `components/ContactForm.jsx`, replace `YOUR_FORM_ID`
   with a free Formspree form ID (sign up at formspree.io using
   EmJVending735@gmail.com). Until then, the form falls back to opening the
   visitor's email app pre-addressed to the Gmail, so no lead is lost.
2. **Domain:** buy emjvending.com and point it at Vercel.

## Add real install photos later
Open `components/InstallGallery.jsx`, drop photos in `/public`, add them to the
`installs` array. The "Recent installations" section then appears automatically.
Use REAL photos of REAL machines — no stock, no fabricated numbers.

## Deploy
Push to GitHub, import at vercel.com (framework auto-detected as Next.js).
