# Sir Hammad Academy — Separate Website Component Asset Kit

This kit is based on the user's approved reference. It provides **real reusable image assets**, **separately cropped reference sections**, and **theme tokens** for an Antigravity/Next.js project.

## Important distinction
* `01_reference_sections/` contains CROPS OF THE REFERENCE SCREENSHOT, including flattened text. These images are for Antigravity visual matching only; DO NOT use them as clickable website sections.
* `02_reusable_backgrounds/` contains BLANK background art with no embedded copy or interactive controls. Use the SVGs for maximum crispness, or PNG fallbacks.
* `03_portrait_and_logo/` contains Sir Hammad's transparent real-photo portrait and a replaceable SVG wordmark (concept logo, not an approved final brand mark).
* `04_icons/` contains editable SVG icons in cyan and gold.
* `05_theme_and_guides/` contains ready-to-use CSS and tokens.

## Asset mapping

| Website area | Recommended asset | Implementation |
|--|--|--|
| Homepage hero | `hero_midnight_crimson_blue_glow_1920x940.svg` | CSS `background-image` behind HTML text and portrait |
| Hero teacher portrait | `sir_hammad_portrait_transparent.png` | `<img>` or Next.js `Image`, overlay right, object-fit contain |
| Standalone blue halo | `electric_blue_halo_TRANSPARENT_900x900.svg` | Position absolutely behind portrait if needed; avoid doubling halo with hero BG |
| Course 1 card | `course_card_olevel_860x460.svg` | Background behind HTML course title and button |
| Course 2 card | `course_card_alevel_860x460.svg` | Background behind HTML course title and button |
| Revision card | `course_card_revision_860x460.svg` | Background behind HTML course title and button |
| Student portal promo | `portal_section_backdrop_1920x620.svg` | Background container; build actual dashboard in HTML |
| Enrollment CTA | `enrollment_cta_banner_1800x400.svg` | Background container; overlay HTML heading/button |
| Decorative red swoosh | `crimson_light_streak_TRANSPARENT_900x480.svg` | Optional separate overlay |
| UI icons | `04_icons/*.svg` | `<img>` or inline SVG (use semantic labels) |

## Palette
Background `#0B1026` • Burgundy `#541329` • Crimson `#C62849` • Gold `#FFBD59` • Electric Blue `#4778F5` • Electric Cyan text `#18D7F5` • White `#F7F7FC`.

IMPORTANT: Do not use metallic gold for headings or body text. Use white + cyan emphasized words, gold only for select buttons and badges.

## Antigravity workflow
1. Attach the original full-page reference + the six `01_reference_sections/` crops as visual guidance.
2. Copy chosen assets from `02_reusable_backgrounds/`, `03_portrait_and_logo/`, and `04_icons/` to `public/hammad-assets/` in your Next.js project.
3. Copy `05_theme_and_guides/theme.css` color tokens and styles into your global stylesheet; correct asset URLs if you move files.
4. Implement each section as responsive HTML/React/Tailwind DOM with REAL text and functional links: Navbar, Hero, Features, Courses, Student Portal Preview, Testimonials (only verified real testimonials), CTA, Footer.
5. Keep course prices and stats as admin-controlled data, never hardcode fake values from the concept screenshot.
6. Build the production student portal and authentication as separate real application routes/components.
7. Preserve text as DOM, not image—accessible, responsive, SEO-friendly.

## Visual references only
The uploaded original is a generated CONCEPT: its student counts, ratings, testimonials and course statistics are NOT verified. Do not publish them unless Sir Hammad provides real data.

## Suggested component filenames
`Navbar.tsx`, `Hero.tsx`, `FeaturesStrip.tsx`, `CourseGrid.tsx`, `PortalShowcase.tsx`, `Testimonials.tsx`, `EnrollmentCTA.tsx`, `Footer.tsx`.
