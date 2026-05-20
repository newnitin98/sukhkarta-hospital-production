# Project Memory - Sukhkarta Hospital Website

## Project Overview
- **Domain:** sukhkartahospital.com
- **Type:** Production-grade premium healthcare website
- **Stack:** Next.js 16 App Router, TypeScript, Tailwind CSS
- **Phase:** Phase 1 (Static frontend, no backend)
- **Deployment:** Vercel

## Hospital Identity
- Name: Sukhkarta Hospital Orthopaedic and Cardiac Care Centre
- Location: Saoner, Nagpur district, Maharashtra, PIN 441107
- Specialities: Orthopaedics + Cardiology (dual speciality)
- Positioning: Premium local hospital; not a super-speciality city hospital
- Branding: Using official `logo_final.png` asset

## Doctors
### Dr. Gunjan R. Dhundele
- Specialty: Orthopaedics
- Key quals: MBBS, D.Ortho (Gold Medal), DNB Ortho, MNAMS, FJRS
- Unique: Fellowship-trained Joint Replacement + Pelvi-acetabular Reconstruction
- Awards: Best Paper MP Ortho Conf 2017, Gold Medal D.Ortho 2013
- Experience: 15+ years

### Dr. Tanu Dhundele
- Specialty: Cardiology (DM, Interventional)
- Key quals: MBBS Gold Medal, MD Gen Med Gold Medal, DM Cardiology
- Unique: Double gold medalist interventional cardiologist

## Architecture Decisions
1. `src/data/` centralized data layer - single source of truth for all content
2. `src/lib/schema.ts` - JSON-LD generation utilities
3. Phase 1 appointment form: Zod validation -> WhatsApp prefilled URL (no backend)
4. Security headers set in `next.config.ts`
5. Fonts: Inter (body) + Plus Jakarta Sans (headings) via Google Fonts
6. Color tokens in Tailwind config: brand.blue, brand.red, brand.green

## SEO Strategy
- Canonical: https://sukhkartahospital.com
- Primary local targets: Saoner, Nagpur district
- Schema types: Hospital, MedicalClinic, LocalBusiness, Physician, DiagnosticTest, MedicalTherapy, FAQPage, BreadcrumbList
- Sitemap: `/sitemap.xml` via Next.js MetadataRoute
- Robots: `/robots.txt` via Next.js MetadataRoute

## Content Rules
- No overclaims such as "best hospital in India"
- Medical disclaimer on every service page
- Emergency note in header and footer
- Original copy - not copied from Eka Care
- Public CTAs functional: `tel:`, WhatsApp, `mailto:`, and Google Maps
- Eka Care remains a source/reference input only and is not used as a public booking CTA

## Phase 2 Notes
- Appointment backend: Supabase or Firebase
- Email notifications: Resend or SendGrid
- Patient portal: Future Phase 3
- CMS: Sanity or Contentlayer for blog/articles
