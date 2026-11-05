# Payments, video and security

## Payments
- **Bank transfer (build first, always works)**: show bank name / account title / IBAN from `SiteSetting` (placeholder until the client supplies them), receipt upload (image/PDF, 5 MB, virus/type check), admin approval queue.
- **Debit/credit card**: Stripe is generally not available for Pakistan-based businesses, so **confirm a locally available gateway with the client** (candidates to evaluate: Safepay, PayFast, Paymob, JazzCash/Easypaisa merchant APIs, or a gateway the client's bank offers). Abstract behind `PaymentProvider` interface (`createCheckout`, `verifyWebhook`) so the provider can be swapped. Build with a mock provider first. Never store card data; use hosted checkout.
- Currency PKR. Orders are idempotent; webhook signature verified; payment success is the only path to auto-enrollment.

## Video
- Host on **Bunny Stream, Cloudflare Stream or Mux** (decide with client on cost). Store only the provider asset ID.
- Playback via **short-lived signed URLs** (60-120 s) issued by `/api/video/token` after checking: logged in, ACTIVE user, ACTIVE non-expired enrollment, published lecture.
- Deterrents (be honest with the client that nothing stops screen recording): dynamic **watermark overlay** with student email + time, block concurrent sessions per account (max 2 devices), disable download, hotlink protection/allowed domains on the video provider.
- Player: resume position, 0.75x-2x speed, keyboard shortcuts, captions placeholder.

## Security checklist
- argon2id/bcrypt, no plaintext passwords, forced reset on first login for admin-issued temp passwords.
- Rate limit login and password reset; account lockout with backoff; generic error messages.
- Role checks on **every** server action/route (never trust UI hiding). Suspended users: login blocked, sessions revoked, tokens refused.
- CSRF protection, secure httpOnly cookies, strict CSP, HSTS, input validation (zod), output escaping.
- File uploads: allow-list MIME, size limits, private bucket, signed access only.
- Audit log for admin actions; PII minimal; backups; env secrets never in repo.
- Legal pages: Privacy Policy, Terms, Refund policy (client to approve text).
