# PRD — Student portal and admin dashboard

## Roles
- **VISITOR**: browses public site, can start checkout.
- **STUDENT**: logs in with credentials issued by admin (or auto-issued after confirmed payment). No self-registration.
- **ADMIN** (Sir Hammad; optionally staff later).

## Public site
Pages as in prototype (Home, Courses, About, Resources, Student Portal login, Contact) plus `/courses/[slug]` detail pages and `/checkout/[slug]`. Content from `courses.json` + site content file. Contact form stores messages and emails admin.

## Enrol / checkout flow
1. Visitor chooses a course pack, enters name, email, phone.
2. Pays by **card** (gateway, redirect or hosted fields) **or** **bank transfer** (shows account details, uploads receipt image/PDF).
3. Card success webhook → order PAID → create student (if new) + enrollment → email credentials/set-password link.
4. Bank transfer → order PENDING_REVIEW → appears in admin "Payments" queue → admin approves/rejects → on approve same as step 3.
5. Admin can also grant access manually (existing students) with optional expiry date.

## Student portal (`/portal`)
- Login (email + password), forgot/reset password, change password. Suspended or expired users see a clear message and cannot play video.
- **Dashboard**: welcome, enrolled courses, overall progress %, lessons completed, "Continue learning" (resume last lecture at saved position).
- **My courses** → course page with modules/chapters and lecture list (done / in progress / not started).
- **Lecture player**: signed-URL video, speed control, resume from last position, mark complete automatically at >=90% watched, next lecture button, dynamic watermark with student email, lecture notes/attachments.
- **Resources**: formulae booklets and past-paper files per course (signed download links).
- **Progress**: per course and per module; total watchtime.
- **Profile**: name, password.

## Admin dashboard (`/admin`)
- **Overview**: active students, new this week, pending payments, total watchtime (real numbers only).
- **Students**: list/search/filter; **create** (name, email, phone, course(s), temp password or invite link); **edit**; **suspend / reactivate**; reset password; delete (soft); bulk CSV import; force logout.
- **Student detail**: enrollments (add/remove/extend), per-course progress, per-lecture watched time and completion, last active, login history.
- **Courses & content**: CRUD courses, modules, lectures (title, video ID, duration, order, preview flag), resources (upload PDF). Draft/published states.
- **Payments**: orders table, filters, approve/reject bank transfers with receipt preview, refunds noted, CSV export.
- **Analytics**: watchtime by course/lecture, drop-off points, completion rates, most-rewatched lectures.
- **Messages**: contact-form inbox.
- **Settings**: bank details, prices, contact info, testimonials/results (all content placeholders become editable here), admin users.
- **Audit log** of admin actions.

## Watchtime and progress rules
- Player sends a heartbeat every 10s while playing: `{lectureId, positionSec, watchedDeltaSec}`.
- `watchedSec` increases only by real playback (not by seeking). Cap delta per heartbeat to guard abuse.
- Lecture is complete at >= 90% of duration watched or position. Course progress = completed lectures / total published lectures.

## Non-functional
Responsive from 360px, WCAG AA contrast, `prefers-reduced-motion`, p95 page load < 2.5s on 4G, rate-limit login (5/min/IP+email), full audit trail, daily DB backups, GDPR-style data export/delete on request.
