# Component Map - Sukhkarta Hospital

## Layout Components (`src/components/layout/`)
| Component | Purpose |
|-----------|---------|
| `EmergencyBar` | Top red bar with emergency contact and hours |
| `Header` | Sticky header with official `logo_final.png`, desktop nav, and mobile menu |
| `Footer` | Full footer with official `logo_final.png`, links, contact details, and internal-first CTAs |

## UI Components (`src/components/ui/`)
| Component | Purpose |
|-----------|---------|
| `Button` | Polymorphic button/link component (6 variants) |
| `SectionHeader` | Reusable section title + badge + subtitle |
| `Breadcrumb` | Breadcrumb navigation with Home icon |
| `SchemaScript` | JSON-LD injection via `dangerouslySetInnerHTML` |
| `DoctorPhoto` | Doctor image wrapper with placeholder support |

## Section Components (`src/components/sections/`)
| Component | Used On |
|-----------|---------|
| `HeroSection` | Homepage |
| `TrustBadges` | Homepage |
| `DoctorsOverview` | Homepage |
| `OrthoSection` | Homepage |
| `CardiacSection` | Homepage |
| `TMTHighlight` | Homepage |
| `FacilitiesSection` | Homepage |
| `WhyChooseUs` | Homepage |
| `AppointmentProcess` | Homepage |
| `LocationTimings` | Homepage |
| `FAQSection` | Homepage |

## Form Components (`src/components/forms/`)
| Component | Purpose |
|-----------|---------|
| `AppointmentForm` | Zod-validated enquiry form -> WhatsApp message on submit with no third-party booking CTA |

## Data Layer (`src/data/`)
| File | Contents |
|------|---------|
| `hospital.ts` | Hospital name, address, phones, hours, WhatsApp link, legal text, and CTA copy |
| `doctors.ts` | Full doctor profiles (education, awards, conditions, placeholder photo metadata) |
| `services.ts` | Ortho + Cardiac service lists |
| `facilities.ts` | Facility cards |
| `faqs.ts` | FAQ items |
| `seo.ts` | Default and per-page SEO metadata |

## Utility Library (`src/lib/`)
| File | Contents |
|------|---------|
| `utils.ts` | `cn()`, `formatPhone()`, `buildWhatsAppUrl()`, `buildTelUrl()` |
| `schema.ts` | `hospitalSchema()`, `physicianSchema()`, `faqSchema()`, `breadcrumbSchema()` |
