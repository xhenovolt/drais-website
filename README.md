# DRAIS — Marketing website

The public site for DRAIS (Digital Record and Attendance Information System), a school management and biometric attendance system for East African schools.

**This repository is the marketing site only.** It holds no school data and no application logic. The product lives in a separate repository; this site hands off to the hosted app at `sims.drais.pro` for login and signup.

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router), React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4, light/dark theme |
| Icons | `lucide-react` |
| Animation | `framer-motion` |
| Hosting | Vercel (`vercel.json`; Node 24) |

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

No environment variables are required. The site renders entirely from code — no database, no CMS.

## What's here

```
src/app/                    one folder per public page
  page.tsx                  landing
  features/  pricing/  about/  contact/  support/  training/
  attendance/  attendance-demo/  demo/  device-integration/
  reliability/  security/  screenshots/  testimonials/
  documentation/  docs/     end-user guides
  login/  signup/           marketing pages that hand off to sims.drais.pro
  api/testimonials/         returns a hardcoded array — no database

src/components/
  landing/                  landing-page sections
  public/                   PublicLayout, PublicNavbar, PublicFooter, DocLayout
  ui/  common/  layout/     shared primitives
```

The landing page composes `src/components/landing/`: `LandingHero`, `FeaturesSection`, `BenefitsSection`, `MicroDemoCarousel`, `TahfizSection`, `ObjectionCrusherSection`, `EnhancedTestimonialsSection`, `ClientLogosSection`, `PricingSection`, `CTASection`, `Footer`.

**Every call to action points at `sims.drais.pro`, and the URL is repeated per page** rather than held in one constant. Changing the destination means grepping for it — at least ten files currently contain it.

## Content that needs care

- **Pricing** (`src/app/pricing/page.tsx`, `components/landing/PricingSection.tsx`) — real UGX figures for real plans. Coordinate changes with whoever sells.
- **Testimonials** — named real people at named real schools. Don't reword an existing quote and don't invent new ones.
- **Client logos** — same.
- **Documentation pages** (`/documentation`, `/docs`) — end-user guides describing the actual product. Nothing links them to the product, so they go stale silently when it changes.

## This repo was forked from the application

That history explains most of what looks odd here, and it's worth knowing before you trust anything you find:

- **`src/lib/` is almost entirely dead code** inherited from the app — `db.ts`, `auth/`, `multi-tenancy.ts`, `africastalking.ts`, `fees.ts`, `schoolDB.ts`, `NotificationService.ts` and more. **Only `@/lib/utils` (`cn`) is imported by the site.** None of it runs; nothing connects to a database.
- **`src/api/`** holds leftover application routes, including a `.php` file. Not App Router, not served.
- **`package.json` carries the application's dependency list** — `mysql2`, `puppeteer`, `next-auth`, `socket.io`, `pdfkit`, `xlsx`, `bcrypt` and others a static marketing site doesn't need. They inflate install and build time.
- **`src/components/ui/index.ts` re-exports from `@/lib/prisma`, which does not exist.** It builds only because nothing imports that barrel.
- **`docs/audit/` and `multi-tenant-compliance-report.txt` describe the application, not this site** — DRAIS routes, attendance, devices, database. Reading them here will mislead you.
- **`typescript.ignoreBuildErrors: true`** — type errors don't fail the build. Run `npx tsc --noEmit` deliberately for the truth.
- **Two Next configs exist**, `next.config.js` and `next.config.ts`, with different contents. Only one takes effect; confirm which before editing either.

None of this is dangerous — no credentials are in the repo and no `.env` is tracked — but **you cannot infer what the site does from what the repo contains.** Assume a file is unused until you find an import.

Cleaning it up is low-risk and worth doing; see [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## Deployment

Pushes to `main` deploy on Vercel. `vercel.json` pins the build to `next build` with `.next` as the output directory.

## Related

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — how the site is put together, and the cleanup backlog
- [`docs/AUTHENTICATION_INTEGRATION.md`](docs/AUTHENTICATION_INTEGRATION.md) — how sign-in hands off to the app

---

*Built for East African schools.*
