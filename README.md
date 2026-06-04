# CheckIn — waitlist landing page

A single, production-grade marketing landing page for **CheckIn** — a
landline-simple AI companion that calls an aging parent every day, helps them
stay on top of meds and appointments, remembers what matters, and texts the
family if something's wrong.

This is a **standalone** repository / Vercel project — the public marketing
site. It is not part of the main product app. The only thing it shares with the
product is a single Supabase table, `waitlist`, that it inserts into.

The page's one job: convert a visitor into a waitlist signup.

---

## Quick start

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. The page is fully demoable **with no backend** —
the waitlist form validates input, logs the signup to the server console, and
returns success even when no database is configured.

Build for production:

```bash
npm run build && npm run start
```

---

## Tech

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** + **shadcn/ui**-style primitives (Button, Input, Label,
  Accordion built on Radix)
- **Framer Motion** for restrained, accessible motion
- **@supabase/supabase-js** for the single waitlist insert (no Prisma — this
  site owns no schema)

Type: `Fraunces` (display serif) + `Plus Jakarta Sans` (humanist body), loaded
via `next/font`. Palette: warm cream/sand base, deep warm charcoal ink, a
terracotta/clay accent, and a muted sage secondary.

---

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values to persist signups.
**Both are optional** — leave them blank and the form still works in log-only
mode.

| Variable | Required? | Notes |
| --- | --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | optional | Shared Supabase project URL, e.g. `https://abcd.supabase.co` |
| `SUPABASE_SERVICE_ROLE_KEY` | optional | Service-role key (server-side only — never exposed to the browser) |

```bash
cp .env.example .env.local
```

Signups are persisted only when **both** values are present. If either is
missing, the API route skips the DB write, logs the signup, and returns success.

---

## Database — shared Supabase `waitlist` table

This site writes to one existing table in the shared Supabase project. It does
**not** manage migrations for the main app. To provision the table, run this SQL
once in the Supabase SQL editor:

```sql
create extension if not exists "pgcrypto";

create table if not exists public.waitlist (
  id                uuid primary key default gen_random_uuid(),
  email             text not null,
  relative_name     text,
  parent_first_name text,
  created_at        timestamptz not null default now()
);

-- Dedupe on email (case-insensitive). The API also handles duplicates
-- gracefully, treating "already on the list" as a friendly success.
create unique index if not exists waitlist_email_key
  on public.waitlist (lower(email));
```

### Row Level Security

The API route uses the **service-role key**, which bypasses RLS, so no policies
are required for this site to function. If RLS is enabled on the shared project
(recommended), leaving it on is fine — the service role still writes. Do not add
a public `insert` policy for the anon key; this site never uses it.

---

## How the form works

1. Client (`components/WaitlistForm.tsx`) does a quick email sanity check, then
   POSTs to `/api/waitlist`.
2. The route (`app/api/waitlist/route.ts`):
   - validates + normalizes the email server-side (lowercased, trimmed);
   - if Supabase env vars are absent → logs and returns `{ ok: true }`;
   - otherwise looks up the email; an existing row returns
     `{ ok: true, alreadyOnList: true }` (a friendly success, not an error);
   - inserts a new row, treating a unique-violation race (`23505`) as success
     too.
3. Errors render inline beneath the field — no browser alerts.

---

## Project structure

```
app/
  api/waitlist/route.ts   # POST handler: validate, dedupe, insert (or log)
  globals.css             # palette, paper grain, base type, reduced-motion
  layout.tsx              # fonts, metadata, grain overlay
  page.tsx                # section composition
components/
  ui/                     # Button, Input, Label, Accordion (Radix + cva)
  Hero, WhatItsFor, HowItWorks, WhyDifferent, Trust, FAQ, FinalCTA, Footer
  CallVisual.tsx          # animated "warm call connecting" hero visual
  WaitlistForm.tsx        # the conversion form + success state
  Reveal.tsx, CountUp.tsx # accessible scroll/number motion helpers
lib/
  supabase.ts             # server-side admin client (null when unconfigured)
  validation.ts           # email + name normalization
  utils.ts                # cn()
```

---

## Accessibility & polish

- Semantic landmarks, labelled inputs, visible focus rings, `aria-live` success
  and `role="alert"` errors.
- `prefers-reduced-motion` fully respected (animations collapse to instant).
- WCAG AA contrast on the warm palette; mobile-first responsive layout.

---

## Deploy (Vercel)

Import the repo as its own Vercel project. Add `NEXT_PUBLIC_SUPABASE_URL` and
`SUPABASE_SERVICE_ROLE_KEY` in **Project Settings → Environment Variables** (or
deploy without them for a fully working, log-only demo).
