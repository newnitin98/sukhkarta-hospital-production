# Security Guardrails — Sukhkarta Hospital Website

## Headers (next.config.ts)
All responses include:
- `X-Frame-Options: DENY` — prevents clickjacking
- `X-Content-Type-Options: nosniff` — prevents MIME sniffing
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=(self), payment=()`
- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
- `Content-Security-Policy` — restricts script/style sources

## Form Security
- All form inputs validated with Zod on the client
- Name: regex restricted to valid name characters (prevents script injection)
- Phone: regex enforced to Indian mobile format (10-digit, starts 6-9)
- Message: max 500 characters
- No sensitive medical data collected (no diagnosis, no symptoms, no medications)
- `noValidate` on form — Zod handles validation, not browser native validation

## Data Handling (Phase 1)
- No server-side database in Phase 1
- Form submission generates a WhatsApp URL — data is never stored on our server
- WhatsApp URL uses `encodeURIComponent` for all user input (prevents URL injection)

## External Links
- All external links use `rel="noopener noreferrer"`
- Only trusted external domains used publicly: WhatsApp and Google Maps

## No Exposed Secrets
- No API keys in client-side code
- No hardcoded tokens
- `.env.local` is in `.gitignore`

## No Sensitive Medical Data
- Appointment form only collects: name, phone, service, doctor preference, date, optional message
- Explicitly instructs users NOT to include detailed medical records
- Privacy policy discloses data handling

## Dependency Safety
- All dependencies are well-maintained npm packages
- No unmaintained or suspicious packages

## Phase 2 Security Additions (When Backend is Added)
- Rate limiting: 5 requests per IP per hour on /api/appointment
- CORS: restrict to sukhkartahospital.com origin
- Server-side Zod validation (not just client-side)
- Supabase Row-Level Security
- Environment variable validation with @t3-oss/env-nextjs or similar
- API route auth for admin endpoints
