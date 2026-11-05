# Architecture and routes

## Suggested structure (Next.js App Router, TypeScript)
```
app/
  (site)/            page.tsx (Home) · courses/ · courses/[slug]/ · about/ · resources/ · contact/ · checkout/[slug]/
  (auth)/login/      credentials login · forgot-password · reset-password
  portal/            layout.tsx (auth guard) · page.tsx (dashboard) · courses/[slug]/ · lectures/[id]/ · resources/ · progress/ · profile/
  admin/             layout.tsx (ADMIN guard) · page.tsx · students/ · students/[id]/ · courses/ · payments/ · analytics/ · messages/ · settings/
  api/
    auth/[...nextauth]
    progress/heartbeat        POST  {lectureId, positionSec, watchedDeltaSec}
    video/token               GET   ?lectureId  -> short-lived signed playback URL (checks enrollment, status, expiry)
    resources/[id]/download   GET   -> signed file URL
    checkout/create           POST  create Order
    checkout/receipt          POST  upload bank-transfer receipt
    webhooks/payments         POST  gateway webhook (verify signature)
    admin/*                   admin-only mutations (students, enrollments, content, payments)
components/ (ui/, site/, portal/, admin/)  ·  content/site.ts (all placeholder copy)  ·  lib/ (db, auth, video, payments, email)
middleware.ts  -> protects /portal and /admin, redirects suspended users
```
## Rendering
Marketing pages static/ISR. Portal and admin dynamic, server-side authorised. Use server actions or route handlers with zod validation.

## Port the prototype faithfully
Reuse the CSS variables, hero image alignment math, nav indicator logic, method-steps scroll progress, doodle footer SVGs and wordmark exactly as in `01_reference_html`. Build them as typed React components (`Nav`, `Hero`, `Ticker`, `FeatureGrid`, `ExperienceSection`, `CourseTabs`, `MethodSteps`, `LectureSpotlight`, `PortalPreview`, `CtaBanner`, `Footer`).

## Emails (Resend)
Welcome + credentials / set-password link · payment received (bank transfer pending) · payment approved · rejected with reason · password reset · admin notification on new order/contact message.
