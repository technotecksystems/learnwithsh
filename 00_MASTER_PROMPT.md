# MASTER PROMPT — paste into Antigravity

You are the lead engineer and designer continuing a project called **Learn with SH**, an online accounting-education platform for **Sir Sahibzada Hammad** (O Level, AS Level and A Level Accounting teacher).

## Goal
Turn the approved single-file prototype in `01_reference_html/sir-hammad-academy.html` into a production-grade product:
1. **Public website** (multi-page, futuristic, impressive, pixel-faithful to the prototype)
2. **Student portal** (login, courses, video lectures with resume, resources, progress)
3. **Admin dashboard** for Sir Hammad (create / suspend / manage student accounts, assign courses, see watchtime and progress, approve payments, manage content)
4. **Payments**: debit/credit card checkout and manual bank transfer with receipt upload and admin approval

## Read these first, in order
1. `README_START_HERE.md`
2. `02_brand_and_design/DESIGN_SYSTEM.md` and `design-tokens.json`
3. `03_content/CONTENT_BRIEF.md` and `courses.json`
4. `04_product_specs/` (all files)
5. `05_components/NOTES.md`
6. `06_build_phases/BUILD_PHASES.md` (the plan you will follow)

## Stack (unless you have a strong reason to change; explain if so)
Next.js (App Router) + TypeScript + Tailwind CSS · PostgreSQL with Prisma (see `04_product_specs/schema.prisma`) · Auth.js (credentials, no public sign-up) · video via a signed-URL provider (Bunny Stream, Cloudflare Stream or Mux) · email via Resend · deploy on Vercel.

## Hard rules
- **Design fidelity:** match the prototype's layout, motion and components. Use only the palette in the design tokens. Fonts: Bricolage Grotesque (headings), DM Sans (body), Space Mono (labels), Caveat (footer doodles only).
- **Honesty:** never invent statistics, results, testimonials, qualifications, prices or contact details. Anything unconfirmed is a clearly marked placeholder driven from a single content file/CMS table so it can be replaced later. The only confirmed facts are listed in `CONTENT_BRIEF.md`.
- **Footer:** keep the italic "made by Rayan" badge.
- **Security first:** no public registration; passwords hashed (argon2/bcrypt); role-based access (ADMIN / STUDENT); suspended users cannot log in or play video; video URLs are short-lived and signed; see `PAYMENTS_VIDEO_SECURITY.md`.
- **Accessibility and performance:** keyboard-navigable, visible focus, `prefers-reduced-motion` respected, responsive from 360px up, Lighthouse 90+.
- Work **phase by phase**. After each phase, summarise what was built, what is mocked, and what needs client input. Do not start the next phase until told.

Start with **Phase 1** from `06_build_phases/BUILD_PHASES.md`.
