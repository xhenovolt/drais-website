# Architecture — DRAIS marketing site

How the site is put together, and what should be cleaned up. Start with the [root README](../README.md).

## What this site actually is

A statically-composed Next.js App Router site. Every page renders from code committed to this repository. There is:

- **no database** — the one API route (`/api/testimonials`) returns a hardcoded array
- **no authentication** — `/login` and `/signup` are marketing pages that link to `sims.drais.pro`
- **no CMS, no content fetch, no environment configuration**

Content changes are code changes and deploy through git.

## Page composition

```
src/app/layout.tsx
  └── page
        └── PublicLayout            src/components/public/PublicLayout.tsx
              ├── PublicNavbar
              ├── page content
              └── PublicFooter
```

Documentation pages use `DocLayout` instead of the plain content slot. Theme handling is in `SystemThemeWrapper` — light/dark follows the system preference.

The landing page (`src/app/page.tsx`) is a sequence of sections from `src/components/landing/`, each self-contained. Reordering the page is reordering that list; adding a section means adding a component and inserting it.

## Conventions worth keeping

- **Sections are self-contained.** A landing section owns its own copy, layout and animation, and takes no props. That's why sections can be reordered freely, and it should stay true.
- **Tailwind v4 with no config-level theme extension.** Styling is utility classes in the components.
- **Both themes, always.** Every surface needs its `dark:` variant. A component with no `dark:` classes is a bug that only shows up for half of visitors.
- **Icons come from `lucide-react`.** Don't add a second icon library.

## The fork inheritance

This repository was forked from the DRAIS application, and most of the application's source came with it. The consequence for anyone reading the code: **the repository contains far more than the site uses, and none of the extra code is wired up.**

Verified reachability — only `@/lib/utils` (the `cn` helper) is imported from `src/lib/` by anything the site renders. Everything else in `src/lib/` and all of `src/api/` is unreferenced.

### Cleanup backlog

Ordered by value, all low-risk. Verify with a build after each step.

1. **Delete `src/api/`.** Leftover application routes plus a `.php` file. Not App Router, not served, cannot be reached.
2. **Delete the unused `src/lib/` modules**, keeping `utils.ts`. Removes `db.ts`, `schoolDB.ts`, `auth/`, `multi-tenancy.ts`, `africastalking.ts`, `fees.ts`, `receipts.ts`, `NotificationService.ts`, `SocketService.ts` and similar. Check imports first — a build failure names anything still needed.
3. **Fix or delete `src/components/ui/index.ts`.** It re-exports `withTransaction` from `@/lib/prisma`, which does not exist. It builds only because nothing imports the barrel; anything that does will fail.
4. **Prune `package.json`.** After steps 1–2, `mysql2`, `puppeteer`, `next-auth`, `socket.io`, `pdfkit`, `xlsx`, `bcrypt`, `formidable`, `multer`, `jsonwebtoken` and similar have no importer. Removing them cuts install and build time substantially.
5. **Resolve the duplicate Next config.** `next.config.js` and `next.config.ts` both exist with different contents; only one is used. Keep one. Note that the `.ts` one configures `images.remotePatterns` for `localhost:3000/uploads/students/**` — an application concern with no meaning here.
6. **Move `docs/audit/` and `multi-tenant-compliance-report.txt`**, or clearly mark them. They audit the application, not this site, and are actively misleading in this repository.
7. **Turn off `typescript.ignoreBuildErrors`** once the dead code is gone. It is presumably set because inherited application code doesn't typecheck; with that code deleted, real type checking becomes affordable again.
8. **Extract the app URL to one constant.** `sims.drais.pro` is currently repeated across at least ten files, so changing it is a grep-and-hope operation.

### What not to "clean up"

- **Testimonials, logos and pricing are real.** They are commitments to real people and real numbers, not placeholder content.
- **`/documentation` and `/docs` are separate on purpose** — one is the guide index, the other a docs landing surface. Check both before assuming one is redundant.

## Deployment

Vercel, on push to `main`. `vercel.json` sets `next build` and `.next`. Node 24 per `engines`. No environment variables are needed, which means a preview deployment is fully functional — use one to review content changes.

## Related

- [`../README.md`](../README.md)
- [`AUTHENTICATION_INTEGRATION.md`](AUTHENTICATION_INTEGRATION.md) — the handoff to the application
