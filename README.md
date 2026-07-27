# Sitara — Scrapbook Landing Page

A student-run non-profit landing page with a Y2K / scrapbook / collage aesthetic.

## Stack
- **Frontend:** React 19 + CRACO + Tailwind CSS + Radix UI (shadcn)
- **Icons:** lucide-react
- **Fonts (Google Fonts):** Alfa Slab One, Fraunces, Special Elite, Caveat, Grandstander

## Run locally
```bash
cd frontend
yarn install       # or: npm install
yarn start         # dev server on http://localhost:3000
yarn build         # production build in /build
```

## File map
```
frontend/
├── public/
│   ├── qr-sitara.jpg          # your real UPI QR (swap anytime)
│   └── index.html
├── src/
│   ├── App.js                 # routes + section order
│   ├── App.css                # scrapbook classes (paper-card, tape, doodles, gingham)
│   ├── index.css              # tailwind + font imports + shadcn tokens
│   ├── mock.js                # ALL editable content: copy, IG posts, tickets, UPI, stats
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Marquee.jsx
│   │   ├── About.jsx
│   │   ├── Project.jsx
│   │   ├── Impact.jsx         # animated stat cards + testimonials
│   │   ├── Fundraiser.jsx     # tote bag event + tickets
│   │   ├── FundAllocation.jsx # where the money goes
│   │   ├── Donation.jsx       # QR + UPI + amount buttons
│   │   ├── Instagram.jsx      # polaroid IG grid
│   │   ├── Footer.jsx
│   │   └── Doodles.jsx        # inline SVG doodles (stars, hearts, flowers…)
│   └── components/ui/         # shadcn primitives
├── tailwind.config.js
└── package.json
```

## Where to edit what

| Change                       | File                                  |
|------------------------------|---------------------------------------|
| Body copy / nav labels       | `src/mock.js`                         |
| Ticket prices / event date   | `src/mock.js → FUNDRAISER`            |
| Impact numbers / testimonials| `src/mock.js`                         |
| Instagram posts (image+link) | `src/mock.js → INSTAGRAM_POSTS`       |
| UPI ID / donation note       | `src/mock.js → DONATION`              |
| Real UPI QR image            | Replace `public/qr-sitara.jpg`        |
| Section order                | `src/App.js`                          |
| Colors / textures            | `src/App.css` (see custom classes)    |

## Palette (used everywhere)
- Navy: `#1E2A4A`
- Cream paper: `#FBF6E9`
- Pastel blue gingham: `#EAF1F8`
- Dusty pink: `#F4B6C2`
- Soft yellow: `#F7D774`
- Lavender: `#C9B6E4`
- Mint: `#B6E4CE`
- Deep purple accent: `#7A4E7E`

## Notes
- Content is 100% frontend — no backend calls required for the landing page.
- Ticket button currently shows an alert. Plug in your Luma URL in `Fundraiser.jsx` when ready.
- To swap in real IG post links, edit each `postUrl` inside `INSTAGRAM_POSTS` in `mock.js`.

Made with paint, tape & a lot of caffeine. ✦
