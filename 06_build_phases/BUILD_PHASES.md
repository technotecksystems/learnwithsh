# Build phases — run one at a time

## Phase 1 — Project setup + public website
Create the Next.js + TypeScript + Tailwind project. Implement tokens (`design-tokens.json`), fonts, global background. Port every public page from `01_reference_html` faithfully (Nav with sliding indicator + scroll bar, Hero with arch alignment, Ticker, Feature grid, Experience + institute logos, Course tabs from `courses.json`, Method steps with mobile scroll line, Lecture spotlight, Portal preview, CTA, Footer with doodles + SVG wordmark + "made by Rayan"). Real routes instead of hash routing; add `/courses/[slug]`. SEO metadata, OG image, sitemap. Placeholders via `content/site.ts`. **Acceptance:** side-by-side visual match at 1440, 1024, 768, 390 px; Lighthouse 90+; reduced-motion respected.

## Phase 2 — Database + auth
Postgres + Prisma (`schema.prisma`), seed script (admin user, 4 courses from `courses.json`, sample modules/lectures clearly marked demo). Auth.js credentials login, middleware guards, forgot/reset password, suspended-user handling, session revocation, login rate limiting. **Acceptance:** admin and student can log in; suspended student cannot; unauthorised routes blocked (tests).

## Phase 3 — Student portal
Dashboard, My courses, course page, lecture player with signed-URL provider abstraction (mock provider first), resume, heartbeat progress API, completion rule, resources downloads, progress page, profile. Replace the prototype's static dashboard with real data. **Acceptance:** progress and watchtime persist; resume works across devices.

## Phase 4 — Admin dashboard
Students CRUD (create, suspend, reactivate, reset password, import CSV), enrollments (grant/extend/revoke), student detail with per-lecture watchtime, content management (courses/modules/lectures/resources, draft/publish), messages inbox, settings (prices, bank details, contact, testimonials/results), audit log, analytics. **Acceptance:** every admin action audited; all prototype admin-table features work for real.

## Phase 5 — Checkout and payments
Checkout page, bank-transfer flow with receipt upload + approval queue + emails, `PaymentProvider` interface with mock + the gateway the client chooses, webhook handling, auto-enrollment, credentials email. **Acceptance:** end-to-end test for both payment methods; idempotent webhooks.

## Phase 6 — Hardening and launch
Security checklist, error pages, 404, loading/empty states, analytics (privacy-friendly), legal pages, backups, monitoring, performance budget, accessibility audit, deploy to Vercel with env docs and a handover README for Rayan and Sir Hammad. **Acceptance:** launch checklist signed off, open questions in `CONTENT_BRIEF.md` resolved or placeholdered.

## After each phase
Reply with: what was built, what is mocked, screenshots, what the client must supply. Wait for approval.
