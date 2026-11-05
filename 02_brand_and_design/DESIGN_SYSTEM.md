# Design system — Learn with SH

Source of truth for visuals = `01_reference_html/sir-hammad-academy.html` (open it, inspect it). This file explains the intent.

## Palette (see `design-tokens.json`)
Navy `#0B1026` / deep `#070D20` · surface `#131A36` · burgundy `#541329` · crimson `#C62849` · gold `#FFBD59` · cyan `#18D7F5` · electric blue `#4778F5` (glow only) · text `#F7F7FC` · muted `#A9B6D3`.
Page background = navy with fixed crimson glow left, burgundy glow right, faint blue glow top-right.

## Typography
Headings **Bricolage Grotesque 800**, tight tracking (-0.035em), sizes clamp(32px, 4.4vw, 58px); hero H1 up to 88px. Body **DM Sans**. Labels/eyebrows **Space Mono** uppercase with a short gold line before them. **Caveat** only for footer doodle notes. Emphasis words in headings = cyan, with a gold-to-crimson underline that draws in on the hero.

## Brand mark
Gold rounded-square monogram "SH" (rotated -8deg, flips +8deg on hover) + wordmark "Learn with **SH**" (SH in gold).

## Page list (matches prototype)
Home · Courses · About · Resources · Student Portal (login + preview + admin preview) · Contact

## Components and behaviours to reproduce
**Navbar**: floating glass capsule (blur, 1px border). Center link group has a crimson-to-burgundy **sliding indicator** that follows hover and returns to the active link (spring easing). Right side: ghost "Log in" + gold "Enrol now ↗" with a looping shine. A 3px **scroll-progress bar** (crimson to gold to cyan) is fixed at the very top. Mobile: burger opens a dropdown.

**Hero (desktop)**: the full-bleed neon-arch image (`hero_background_neon_arch.png`) is the background. The hero's height equals the image aspect ratio (`--iw: max(100vw,1138px); --ih: calc(var(--iw)*.5628)`), the transparent portrait is positioned so Sir Hammad stands **inside the red arch** (width 43% of iw, right offset 1.6% of iw, bottom 0). Floating glass chips sit on the arch edges: "Recorded lectures", "7 years teaching experience", "Past papers". Left: eyebrow, H1 "Where accounting finally balances.", lead text, gold + ghost buttons, three trust bullets. **Mobile (<=1000px)**: image becomes a darkened backdrop, portrait sits below the text, chips hidden.

**Ticker**: straight burgundy-to-crimson band with Space Mono accounting terms and gold diamonds, infinite marquee.

**Feature grid**: four glass cards (Recorded Lectures, Structured Syllabus, Exam Preparation, Student Portal), cyan top hairline, lift on hover.

**Experience section**: huge gold "7" that counts up when scrolled into view + "years of teaching experience", beside a 4-up grid of institute logo cards (white cards, `mix-blend-mode:multiply` so light-grey logo backgrounds blend; logos in `institutes/`).

**Course tabs**: four tab buttons (O Level, AS Level, A Level, Revision). Selected tab = crimson/burgundy gradient with gold border. Panel shows syllabus code, name, blurb, includes list, price (placeholder "PKR —"), Enrol button, and **each course's own topic list** (numbered glass chips that stagger in). Data = `03_content/courses.json`.

**Method steps (Watch, Post, Practise, Balance)**: desktop = horizontal gradient line that draws across when scrolled into view. **Mobile (<=600px)** = circles at left, text at right, a **vertical track line** whose gradient fill grows with scroll (reference point = 60% of viewport height) and each circle fills gold when reached. Text is layered above the line.

**Lecture spotlight**: sample player card with pulsing play button, progress bar animates to 67% on play, text toggles. Placeholder until real video.

**Student portal preview / dashboard**: sidebar tabs switch heading; course select; "Mark current lesson complete" moves 68% to 100% and 12 to 13 lessons (toggle/undo). In the real app this becomes the actual dashboard.

**Admin table preview**: Active/Suspended toggle buttons, progress bars, "+ Create student account".

**CTA**: crimson-burgundy gradient with a slowly rotating gold conic shimmer.

**Footer**: link columns; **doodle strip** (hand-drawn SVG icons: lightbulb, calculator, ledger book, pencil, coin, cap, plane, percent, sparkle; stroke-draw loop + float; spin/scale on hover; Caveat notes "A = L + E", "keep it balanced!", "Dr = Cr ✓"); a full-width **SVG wordmark "LEARN WITH SH"** with vertical pink-to-burgundy fade and a gold shine sweeping across (scales to container width so it never clips); italic "made by Rayan"; back-to-top.

**Motion rules**: reveal-on-scroll (fade + 44px rise, stagger via --d), no motion for `prefers-reduced-motion` (doodles stay drawn).

## Do / Don't
Do: glass panels, 1px low-alpha borders, soft crimson/cyan glows, generous spacing, large type.
Don't: blue-dominant sections, white sections, gold headings, stock "AI-looking" pills/badges, invented numbers.

## Assets
`kit/` = original Component Kit (reference sections PNG, reusable background SVG/PNG, portrait + logo, icon set in cyan and gold, theme tokens/CSS). Prefer the SVG icons and backgrounds. `portrait_transparent.png` = hero portrait.
