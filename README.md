# AB INNOVATE — Premium Website

**Your Technology Partner for What's Next.**

## Tech Stack
- React 19 + Vite 8
- Tailwind CSS v3
- Framer Motion v14
- Lucide React v1
- Space Grotesk + Inter (Google Fonts)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:5173

# Production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── App.jsx                    # Root component
├── main.jsx                   # Entry point
├── index.css                  # Global styles + Tailwind
├── components/
│   ├── Navbar.jsx             # Sticky nav, smooth scroll, mobile menu
│   ├── Hero.jsx               # Hero with animated geometric visual
│   ├── Introduction.jsx       # Brand philosophy, 3 principles
│   ├── Services.jsx           # 7 core services grid
│   ├── WhyChooseUs.jsx        # 4 differentiators, editorial layout
│   ├── Portfolio.jsx          # Project showcase cards
│   ├── Process.jsx            # 4-step process timeline
│   ├── About.jsx              # About with animated visual
│   ├── CTA.jsx                # Call-to-action section
│   ├── Contact.jsx            # Contact form with validation
│   └── Footer.jsx             # Premium footer
└── data/
    └── content.js             # All website content (edit here)
```

## Customization

All content is centralized in `src/data/content.js`:
- `NAV_LINKS` — navigation items
- `SERVICES` — 7 service cards
- `WHY_CHOOSE_US` — differentiator cards
- `PORTFOLIO_PROJECTS` — portfolio items (add real projects here)
- `PROCESS_STEPS` — 4-stage process
- `CONTACT_INFO` — email, location, social links
- `SERVICE_OPTIONS` / `BUDGET_OPTIONS` — contact form dropdowns

## Brand Colors

| Token | Value | Usage |
|-------|-------|-------|
| `#0B0D12` | Primary Background | Main sections |
| `#11151E` | Secondary Background | Alternate sections |
| `#477BFF` | Electric Blue | Primary accent |
| `#8B5CF6` | Violet | Secondary accent |
| `#A1A1AA` | Soft Grey | Body text |
| `#252B38` | Border | Card borders |

## Contact Form

The contact form currently simulates a submission (1.8s delay → success state).  
To connect to a real email service, update the `handleSubmit` function in `Contact.jsx`:

```js
// Replace the simulation with your API call:
const response = await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(form),
  headers: { 'Content-Type': 'application/json' }
})
```

Recommended services: **EmailJS**, **Formspree**, **Resend**, or a custom backend.
