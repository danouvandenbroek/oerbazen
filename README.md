# OERBAZEN — De Anti-Retraite Retraite

Next.js website for OERBAZEN, a 3-day immersive experience for men.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Forms:** Formspree integration
- **Deployment:** Vercel

## Features

- ✨ Smooth scroll animations with Framer Motion
- 📱 Mobile-first responsive design
- 🎬 Hero section with video background
- 🎯 Activity grid for day 2 (games)
- 📝 Full signup form with validation
- ⚡ Performance optimized with Next.js Image
- 🎨 Custom color system (black, sand, fire, white)
- 🔤 Typography: Bebas Neue (headlines) + Inter (body)

## Project Structure

```
oerbazen-site/
├── app/
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   └── aanmelden/
│       └── page.tsx       # Signup page
├── components/
│   ├── Hero.tsx           # Hero section
│   ├── Section.tsx        # Animated section wrapper
│   ├── DayBlock.tsx       # Day content block
│   ├── ActivityCard.tsx   # Activity grid card
│   ├── QuoteBlock.tsx     # Quote section
│   ├── CTA.tsx            # Call-to-action button
│   └── Form.tsx           # Signup form
├── public/                # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── BUILD.md              # Design spec
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:3000
```

## Building

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Deployment

The site is deployed on Vercel. Push to the `main` branch to trigger automatic deployment.

### GitHub Remote

```bash
git remote add origin https://github.com/danouvandenbroek/oerbazen.git
git branch -M main
git push -u origin main
```

### Vercel Deployment

1. Connect the GitHub repo to Vercel
2. Select `main` branch for production
3. Vercel auto-builds and deploys on push

## Form Submission

Update the Formspree ID in `components/Form.tsx`:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
  // ...
})
```

Get your Formspree ID from https://formspree.io after creating a new form.

## Customization

### Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  black: '#0D0D0D',
  sand: '#E5E1D8',
  'sand-dark': '#CFC7B8',
  fire: '#C26A2E',
  white: '#FFFFFF',
}
```

### Typography

Fonts are loaded in `app/layout.tsx`:

- **Headlines:** Bebas Neue (Google Fonts)
- **Body:** Inter (default Tailwind font)

### Content

Edit sections in `app/page.tsx` to update copy and structure.

## Performance

- ✅ Server-side rendering (Next.js)
- ✅ Code splitting and lazy loading
- ✅ Image optimization
- ✅ CSS-in-JS with Tailwind
- ✅ Minimal JavaScript bundle

## License

© 2024 OERBAZEN. All rights reserved.
