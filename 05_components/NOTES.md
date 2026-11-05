# Notes on `SirHammadComponents.jsx`

React + Tailwind collection supplied earlier (feature grid, stats strip, course cards, lecture preview, student dashboard, showcase).

## Reuse
- **AcademyFeatureGrid**: reuse the idea (already ported in the prototype).
- **AcademyLecturePreview**: reuse behaviour for the lecture spotlight; swap the fake player for the real video player.
- **AcademyStudentDashboard**: its local-state logic (tabs, course select, mark complete) is already ported in the prototype. In the real portal, replace the local state with real data from the database.
- Keep accessibility details (aria-current, aria-pressed, progressbar role, focus-visible).

## Do NOT ship as-is
- `AcademyStatsStrip` defaults ("500+ students", "100+ lectures", "6+ courses", "4.9/5") and course card details ("28 chapters", "42 lessons") are **illustrative, unverified numbers**. Show real values from the database only, or omit.
- Palette in the file is close but slightly off; use `02_brand_and_design/design-tokens.json`.
- Course cards there are superseded by the tabbed course component in the prototype and `courses.json` (each course has its own syllabus).
