# Deployment Guide — Sukhkarta Hospital

## Prerequisites
- Node.js 18+
- npm 9+
- Vercel account
- GitHub repository (recommended)

## Local Development

```bash
# Clone or enter the project folder
cd sukhkarta-hospital-production

# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:3000
```

## Build Verification

```bash
# Run TypeScript check + build
npm run build

# Expected: All pages static-generated, zero errors
```

## Vercel Deployment

### Option A: GitHub Integration (Recommended)
1. Push the project to a GitHub repository
2. Go to vercel.com → New Project
3. Import the GitHub repository
4. Framework: Next.js (auto-detected)
5. Build command: `npm run build` (default)
6. Output directory: `.next` (default)
7. Click Deploy

### Option B: Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

## Custom Domain Setup
1. In Vercel project → Settings → Domains
2. Add: sukhkartahospital.com
3. Add: www.sukhkartahospital.com (redirect to apex)
4. Update DNS at your registrar:
   - A record: 76.76.19.61 (Vercel)
   - CNAME www: cname.vercel-dns.com

## SSL
Vercel provides automatic SSL via Let's Encrypt. The HSTS header in `next.config.ts` will activate once HTTPS is confirmed.

## Environment Variables (Phase 1)
No environment variables required for Phase 1 (static site).

## Environment Variables (Phase 2)
Add in Vercel project → Settings → Environment Variables:
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
NOTIFICATION_EMAIL=sukhkartahospitalsaoner@gmail.com
```

## Post-Deployment Checklist
- [ ] Visit https://sukhkartahospital.com — homepage loads
- [ ] Check all navigation links work
- [ ] Test appointment form → WhatsApp redirect works
- [ ] Check `tel:` links on mobile
- [ ] Check `/sitemap.xml` is accessible
- [ ] Check `/robots.txt` is accessible
- [ ] Verify HTTPS and redirect from HTTP
- [ ] Submit sitemap to Google Search Console
- [ ] Create/verify Google My Business listing
- [ ] Test on mobile (Chrome DevTools → Mobile view)
- [ ] Run PageSpeed Insights on homepage
