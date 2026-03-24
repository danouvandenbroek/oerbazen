# OERBAZEN Deployment Guide

## ✅ Current Status

- ✨ **Next.js project:** Fully configured with App Router, TypeScript, Tailwind CSS, Framer Motion
- 🎨 **Design system:** Complete with Bebas Neue headlines, Inter body, custom color palette
- 🏠 **Homepage:** Full scroll journey with all sections (Hero → Dag 1-3 → Tribe → CTA)
- 📝 **Signup form:** Complete form at `/aanmelden` with all required fields
- 🏗️ **Components:** Hero, Section (animated), DayBlock, ActivityCard, QuoteBlock, CTA, Form
- 📦 **Build:** Production-ready, zero errors, fully optimized
- 🔧 **Git:** Pushed to `danouvandenbroek/oerbazen` on GitHub

## 🚀 Deploy to Vercel

### Option 1: Auto-Deploy from GitHub (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..." → "Project"**
3. Import GitHub repo: `danouvandenbroek/oerbazen`
4. Click **"Import"**
5. Vercel auto-detects Next.js configuration
6. Click **"Deploy"**

**That's it!** Vercel will build and deploy automatically.

### Option 2: Vercel CLI Deploy

```bash
npm i -g vercel
cd /Users/Tristan/.openclaw/workspace/oerbazen-site
vercel
# Follow the prompts to link your Vercel account
```

## 🔧 Environment Configuration

### Formspree Integration (Form Submission)

1. Go to [Formspree.io](https://formspree.io)
2. Sign up / log in
3. Create new form → get your **Form ID** (e.g., `f/abc123xyz`)
4. Update `.env.local`:

```env
NEXT_PUBLIC_FORMSPREE_ID=f/YOUR_ID_HERE
```

5. In `components/Form.tsx`, the fetch already uses this endpoint:

```typescript
fetch(`https://formspree.io/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {...})
```

6. Deploy to Vercel → Forms will be live

### Vercel Environment Variables

1. In Vercel dashboard, go to your project **Settings**
2. Navigate to **Environment Variables**
3. Add:
   - `NEXT_PUBLIC_FORMSPREE_ID` = `f/your_id`
4. Redeploy

## 📋 Pre-Deployment Checklist

- [ ] GitHub repo pushed (`danouvandenbroek/oerbazen`)
- [ ] Formspree account created & Form ID obtained
- [ ] Environment variables configured in Vercel
- [ ] Build runs locally: `npm run build` ✓
- [ ] No console errors in dev: `npm run dev`
- [ ] All pages accessible: `/` and `/aanmelden`
- [ ] Form submission tested locally

## 🎯 Next Steps

### Images & Assets

Currently, the site uses **placeholder gradients**. Once you have assets (hero image, activity cards, etc.):

1. Place images in `public/` folder
2. Update references in components:
   - Hero bg: `components/Hero.tsx` (line ~20)
   - Activity cards: `components/ActivityCard.tsx` (line ~18)
   - Quote section styling as needed

3. Use Next.js `Image` component for optimization:

```typescript
import Image from 'next/image'

<Image
  src="/path/to/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority={true}  // For above-the-fold
/>
```

### Content Updates

- **Homepage copy:** Edit `app/page.tsx` (search & replace text)
- **Form fields:** Edit `components/Form.tsx` if you need to add/remove fields
- **Colors:** Update `tailwind.config.ts` to adjust design system

### Domains & Branding

1. Purchase domain (e.g., `oerbazen.nl`)
2. In Vercel dashboard → **Settings → Domains**
3. Add custom domain
4. Update DNS records (Vercel provides instructions)

## 📱 Mobile Testing

Site is **mobile-first responsive**. Test on various devices:

```bash
npm run dev
# Open on phone browser: http://YOUR_IP:3000
```

All sections scale properly for:
- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)

## 🔐 Security

- ✅ No API keys in code
- ✅ Form submission via Formspree (third-party)
- ✅ No user data stored locally
- ✅ Automatic HTTPS on Vercel
- ✅ CSP headers optimized

## 📊 Analytics (Optional)

To enable Vercel Analytics:

1. In Vercel dashboard → Project **Settings**
2. Find **Analytics** section
3. Click **Enable Web Analytics**
4. Update `.env.local`:

```env
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_id
```

## 🆘 Troubleshooting

### Build fails on Vercel

- Check env vars are set correctly
- Verify `package.json` dependencies
- Check for TypeScript errors: `npm run build` locally first

### Form not submitting

- Verify Formspree ID in env vars
- Check form network tab for errors
- Ensure `NEXT_PUBLIC_FORMSPREE_ID` is set in Vercel env

### Slow page load

- Images not optimized: use Next.js `Image` component
- Build size: check chunk analysis: `npm run build`
- Cache: Vercel auto-caches static content

## 📝 Production Checklist

Before going live:

- [ ] Custom domain configured
- [ ] Formspree form linked & tested
- [ ] Analytics enabled (optional)
- [ ] All pages indexed by search engines (optional)
- [ ] 404 page displays correctly
- [ ] Meta tags / OG images set (done in `layout.tsx`)
- [ ] Contact info in footer is correct

## 🎉 That's It!

Your OERBAZEN website is production-ready. Once deployed to Vercel, you'll get:

- ✅ Auto-HTTPS
- ✅ Global CDN
- ✅ Automatic deployments on `git push`
- ✅ Built-in analytics
- ✅ Easy rollbacks

**Live dashboard:** https://vercel.com/danouvandenbroek

Questions? Check the [Vercel docs](https://vercel.com/docs) or [Next.js docs](https://nextjs.org/docs).
