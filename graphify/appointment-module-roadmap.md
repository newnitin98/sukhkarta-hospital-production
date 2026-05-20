# Appointment Module Roadmap — Phase 2

## Current State (Phase 1)
- Zod-validated form in `AppointmentForm.tsx`
- On submit: generates prefilled WhatsApp URL and opens it
- No server-side storage
- Additional CTAs: Call (`tel:`); Eka Care was previously a source/reference only and is not part of the public Phase 1 booking flow

## Phase 2: Backend Appointment System

### Tech Stack Options
| Option | Pros | Cons |
|--------|------|------|
| **Supabase** | Easy PostgreSQL, realtime, free tier | Needs careful RLS setup |
| **Firebase** | Firestore realtime, easy setup | Vendor lock-in |
| **Custom Express/Node** | Full control | More dev work |

**Recommended:** Supabase + Next.js Route Handlers

### Database Schema (Supabase)
```sql
CREATE TABLE appointment_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  doctor TEXT NOT NULL,
  preferred_date DATE NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending','confirmed','cancelled')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS: only service role can read
ALTER TABLE appointment_requests ENABLE ROW LEVEL SECURITY;
```

### API Routes to Add
```
POST /api/appointment   → insert to Supabase, send email notification
GET  /api/appointment   → admin list (protected by API key or session)
```

### Email Notifications (Resend)
- Patient confirmation email
- Hospital staff notification email

### Environment Variables Needed
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
NOTIFICATION_EMAIL=sukhkartahospitalsaoner@gmail.com
```

### Security Checklist
- [ ] Rate limiting on /api/appointment (max 5 per hour per IP)
- [ ] Phone number validation server-side (Zod on server too)
- [ ] CSRF protection (Next.js handles this in Route Handlers)
- [ ] Input sanitisation before DB insert
- [ ] Row-level security in Supabase
- [ ] API key auth for admin reads

## Phase 3: Patient Portal
- OTP login (SMS via MSG91)
- Appointment history
- Report upload
- Doctor notes (limited)
