# Final Deployment Checklist - Sukhkarta Hospital

## Verification Status
- Lint status: Passed (`npm run lint`)
- Build status: Passed (`npm run build`)
- Routes verified:
  - `/`
  - `/about`
  - `/doctors`
  - `/doctors/dr-gunjan-r-dhundele`
  - `/doctors/dr-tanu-dhundele`
  - `/orthopaedic-care`
  - `/cardiac-care`
  - `/tmt-test`
  - `/health-checkups`
  - `/facilities`
  - `/gallery`
  - `/contact`
  - `/privacy-policy`
  - `/terms-and-conditions`
  - `/medical-disclaimer`
  - `/sitemap.xml`
  - `/robots.txt`
- Logo status: `public/images/logo_final.png` integrated in header, footer, and schema/metadata references
- Favicon status: `public/favicon.ico` present and metadata icons configured
- Open Graph status: `public/images/og-default.png` present and referenced in site metadata
- SEO status: Canonicals use `https://sukhkartahospital.com`, sitemap and robots are active, metadata exists per page
- JSON-LD status: Hospital, Physician, FAQ, and Breadcrumb schema configured
- Security headers status: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, CSP, and HSTS configured in `next.config.ts`
- CTA status: Public CTAs limited to phone, WhatsApp, email, directions, and internal appointment enquiry
- Public Eka Care CTA removal: Confirmed removed from public pages
- Appointment form status: Phase 1 client-only form with Zod validation and WhatsApp enquiry flow
- Mobile navigation status: Header menu supports open/close states and accessible ARIA attributes

## Remaining Hospital Inputs
- Final doctor photos
- Real facility/gallery photography
- Confirmation of Dr. Tanu Dhundele's education institutions and exact years
- Confirmation of whether both cardiology phone numbers should remain public-facing
- Final brand-approved OG/social card if desired

## Vercel Deployment Steps
1. Run `npm run lint`
2. Run `npm run build`
3. Push the final codebase to the connected Git provider
4. In Vercel, import or select the repository
5. Confirm framework preset is Next.js
6. Confirm build command is `next build`
7. Confirm output settings remain default for Next.js
8. Deploy to production
9. Open the production deployment and verify the routes above

## Domain Setup
### Primary Domain: `sukhkartahospital.com`
1. In Vercel, open the project settings
2. Add `sukhkartahospital.com` under Domains
3. Update the registrar DNS records to Vercel's required values
4. Wait for SSL issuance and confirm HTTPS is active

### Secondary Domain: `www.sukhkartahospital.com`
1. Add `www.sukhkartahospital.com` under Domains in the same project
2. Point the `www` DNS record to Vercel as instructed
3. Set the preferred primary domain to `sukhkartahospital.com`
4. Confirm `www.sukhkartahospital.com` redirects to the primary domain
