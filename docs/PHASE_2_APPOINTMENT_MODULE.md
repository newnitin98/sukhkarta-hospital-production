# Phase 2: Appointment Module

See `graphify/appointment-module-roadmap.md` for the full technical plan.

## Summary
In Phase 2, the appointment form will submit to a Next.js Route Handler that:
1. Validates input server-side with Zod
2. Inserts to Supabase database
3. Sends confirmation email to patient via Resend
4. Sends notification email to hospital staff

## Files to Add in Phase 2
- `src/app/api/appointment/route.ts` — POST handler
- `src/lib/supabase.ts` — Supabase client
- `src/lib/email.ts` — Resend email helpers
- `src/app/api/appointment/admin/route.ts` — Admin reads (protected)

## Migration from Phase 1
The `AppointmentForm` component needs only one change:
- Replace WhatsApp URL generation with `fetch('/api/appointment', { method: 'POST', body: ... })`
- Success state shows confirmation message + WhatsApp as optional fallback
