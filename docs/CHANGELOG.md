# Changelog - Sukhkarta Hospital Website

## [1.1.1] - 2026-05-20

### Changed
- Removed all public-facing Eka Care and third-party booking CTAs from the appointment form, footer, contact page, and doctor pages.
- Updated the public appointment journey so the allowed booking flow is now website enquiry form, WhatsApp, phone, email, and directions only.
- Updated privacy policy, terms, FAQs, schema/logo references, and graphify notes to match the final public booking policy.
- Added final deployment documentation for Vercel launch, domain setup, and post-build verification.

## [1.1.0] - 2026-05-20

### Changed
- Replaced the temporary SVG logo with the official `logo_final.png` asset across the website and metadata.
- Polished UI/UX across all sections (Hero, Doctors, Ortho, Cardiac, TMT, Facilities) to establish a premium healthcare aesthetic.
- Enhanced Contact page with a visual map embed placeholder and improved form layout.
- Added "Get Directions" and "Book Appointment" CTAs to key sections for better conversion.

## [1.0.1] - 2026-05-20

### Changed
- Replaced the header and footer text placeholder with a reusable SVG hospital logo mark derived from the existing print assets.
- Replaced brochure-based gallery content with eight representative AI-generated healthcare visuals matched to the existing facility categories.
- Added a clear Phase 1 note on the gallery page so temporary visuals are not presented as actual hospital photography.
- Updated the site icon and graphify logo reference to the new SVG logo asset.
- Centralized public contact details, address, timings, legal disclaimer text, and appointment CTA messaging through the `src/data` layer.
- Replaced brochure-only doctor visuals with clearly marked placeholder portraits pending hospital-approved photos.
- Added a branded OG image and favicon, updated metadata icon wiring, and tightened footer/form/public page consistency for production use.
- Synced graphify content with the latest hospital and doctor data, including explicit `needs_confirmation` markers for pending hospital inputs.
- Reduced unnecessary client-side rendering, improved menu/FAQ accessibility states, and documented the final production audit status.

## [1.0.0] - 2026-05-20

### Added
- Full Next.js App Router project scaffold
- TypeScript, Tailwind CSS, ESLint configuration
- Security headers in `next.config.ts`
- Centralized data layer: `hospital.ts`, `doctors.ts`, `services.ts`, `facilities.ts`, `faqs.ts`, `seo.ts`
- Layout components: `EmergencyBar`, `Header`, `Footer`
- UI components: `Button`, `SectionHeader`, `Breadcrumb`, `SchemaScript`
- Homepage with 11 sections: Hero, TrustBadges, Doctors, Ortho, Cardiac, TMT, Facilities, WhyChooseUs, AppointmentProcess, Location, FAQs
- Public pages for home, about, doctors, doctor profiles, orthopaedic care, cardiac care, TMT test, health checkups, facilities, gallery, contact, privacy policy, terms, medical disclaimer, sitemap, robots, and 404
- AppointmentForm component with Zod validation and WhatsApp CTA (no backend)
- JSON-LD structured data: Hospital, MedicalClinic, Physician, FAQPage, BreadcrumbList
- Next.js sitemap and robots metadata routes
- Graphify knowledge layer and supporting documentation

### Architecture Notes
- Phase 1: Static frontend only, no backend, no database
- Appointment: WhatsApp prefill pattern (Phase 1)
- Phase 2 plan: Supabase + Resend backend (see `docs/PHASE_2_APPOINTMENT_MODULE.md`)
