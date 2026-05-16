# Handoff: Personal Website Redesign — Paran Sonthalia

## Overview

A full redesign of paransonthalia.com — a personal site for a quantitative developer at Citadel with a side life in endurance sports. Replaces a Bootstrap-era page (circa 2020) with a single-page scroll home page in a "handmade scrapbook" aesthetic (Ocean + Coral palette), plus five additional pages that share the same design system: a tutorials archive, an HTML résumé, and four project case-study pages.

## About the Design Files

The files in this bundle are **design references created in HTML** — high-fidelity prototypes showing the intended look, layout, and behavior. They are **not production code to ship directly.** Inline React via Babel was used to author them quickly; for a real implementation you should recreate these designs in your target codebase using its established framework, build tooling, and patterns.

Recommended targets (any of these, pick what fits your hosting):
- **Astro** — best fit. Mostly static content; ship as `.astro` pages with a couple of small islands for the contact form and expand toggles.
- **Next.js (App Router)** — fine if you already use it; use Server Components for static sections.
- **Plain HTML + a tiny JS bundle (Vite)** — also fine; the design has no real runtime requirements beyond a few `useState`s, one `IntersectionObserver`, and the print stylesheet on the résumé.

The current site is hosted on GitHub Pages (psonthalia.github.io). A static build deploys cleanly to GH Pages or any CDN.

## Fidelity

**High-fidelity.** Final colors, typography, spacing, copy, and interactions are all in the prototypes. Recreate them pixel-faithfully. Where the design uses inline `style={{}}` props, those should be translated to your styling system of choice (Tailwind, CSS Modules, vanilla CSS, etc.) — but the values themselves are correct and should be preserved.

---

## Site Structure

Six pages, sharing one design system. All share the sticky nav pattern, the dot-grid background, the typography stack, and the shared component library in `site/theme.jsx`.

### 1. `Personal Website.html` — Home (single-page scroll)

Sticky nav + the following sections in order:

| Anchor       | Section                | Purpose                                                         |
|--------------|------------------------|-----------------------------------------------------------------|
| `#home`      | Hero                   | Name, intro paragraph, sticker tags, polaroid photo collage      |
| `#about`     | About                  | Longer bio paragraph + photo (DeWaste fixing)                    |
| `#now`       | Now                    | 5-card row: working / training / reading / listening / building  |
| `#projects`  | Projects               | 6 + "show all 14" expand. Scrapbook-style cards.                 |
| `#work`      | Work                   | 4 + "show earlier roles" expand. Timeline rows.                  |
| `#xcelerate` | Xcelerate (YouTube)    | Channel card + **race log** (6 races, location, distance)        |
| `#press`     | Press                  | 6 + "show 6 more" expand. Compact horizontal cards.              |
| `#volunteer` | Volunteer              | 4 cards. Color-striped tops.                                     |
| —            | Tutorials + Resume CTAs| Two big buttons linking out                                      |
| `#contact`   | Contact                | Contact form (uses `mailto:` hand-off) + direct line panel       |
| —            | Footer                 | Navy ribbon                                                       |

### 2. `Tutorials.html` — Tutorials & writeups archive

- Hero with context ("written 2016–18 for high schoolers")
- Grid of 6 tutorial cards (React, Swift iOS, Objective-C iOS, Unity, JavaScript, Java)
- "How to use these" 3-step strip
- Two back-CTA cards
- Footer

Each tutorial card links to a downloadable `.zip` in `dist/tutorials/` (Unity links to a GitHub repo).

### 3. `Resume.html` — HTML résumé

A real HTML résumé in the scrapbook style. Structure:

- **Header** — Name, role line ("Quantitative developer · Citadel · Index Rebalance desk"), intro paragraph, right-aligned contact column (site, GitHub, LinkedIn, email, Manhattan)
- **§ 01 Experience** — All 7 work entries, each with logo + company + role (Caveat coral) + dates + 3–4 bullet points written specifically for the résumé
- **§ 02 Education** — UC Berkeley '22, CS + Data Science, with bullets (CSM teaching, coursework)
- **§ 03 Selected projects** — 2×2 grid of top 4 from the project list
- **§ 04 Skills** — 5-column grid: Languages / Systems / Markets / Frontend / Hardware
- **§ 05 Honors & extras** — Two-column: recognition (YC grant, Eagle Scout, Cal Hacks fellowship, press) and endurance (race list)
- **Footer**

**Print stylesheet** is critical here. The `@media print` block:
- Hides nav, footer, and the dot-grid background
- Shrinks display type (h1 96px → 48px, h2 38px → 22px)
- Removes the warm card backgrounds
- Adds `page-break-inside: avoid` on each job and project card
- Sets `@page { size: letter; margin: 0.5in; }`
- Strips link underlines and recolors to black

Two ways to download:
1. The "print / save as PDF" button calls `window.print()` (uses the print stylesheet above).
2. The "download PDF ↓" button links to a pre-rendered PDF at `assets/Paran_Sonthalia_Resume.pdf`. This is the old PDF and will eventually be replaced by Paran with an updated one.

### 4–7. Case study pages

Four pages, all rendered by the same `<CaseStudy id="..." />` component fed by a config object:

- `mtnViewArt.html`    → Mountain View Art (civic app, 2018)
- `auxiliumHealth.html` → Auxilium Health (medication reminders, 2017)
- `minuteTutor.html`   → Minute Tutor (per-minute video tutoring, 2017)
- `teender.html`       → Teender (anonymous-message app, 2016)

Per-page structure:

- **Slim nav** — back-to-home left, breadcrumb middle ("case study · auxilium health"), back-to-projects pill right
- **Hero** — Title (Instrument Serif) + tagline (Caveat in case-accent color) + blurb paragraph + sticker tags + per-case accent color. Right column: the app icon as a polaroid (with "app icon" tape), behind it an iOS phone frame showing the first screenshot, rotated −4deg.
- **Fact sheet card** — Taped card with 5 quick facts in 5 columns (Built / Where / Stack / Outcome / What I learned, etc.)
- **§ The story** — 3 paragraphs of narrative, written specifically per case in the data
- **§ The thing itself** — Multi-phone gallery (only renders if >1 screen)
- **Next-project CTA strip** — 2 cards: back to projects + next case (cycles through all four)
- **Footer**

Each case has its own accent color but uses the same shared chrome:
- Mountain View Art — `#299ba8` (teal, from original)
- Auxilium Health — `#d23a3a` (red, from original)
- Minute Tutor — `#822121` (deep red, from original)
- Teender — `#e8602d` (orange, from original)

**Note on screenshots:** Case-study app screenshots reference external Skygear S3 URLs that were on the old site (`s3-us-west-2.amazonaws.com/skygear-cloud-asset/...`). On a real build, you should:
1. Download those images
2. Save them locally under `assets/case-studies/<id>/screen-N.png`
3. Update the `screens` arrays in `site/casestudy.jsx` to reference the local paths.
The current `<img>` tags have a `fallbackThumb` (the small project-list thumbnail) that's used if the icon URL fails.

---

## Design Tokens

### Color palette (Ocean + Coral)

```js
const C = {
  bg:        '#ebf0f2',  // cool paper, page background
  paper:     '#f4f8f9',  // card paper (lighter)
  paperWarm: '#f9f5ec',  // accent warm paper (rare use)
  ink:       '#13212a',  // body text, deepest
  inkSoft:   '#476068',  // secondary text
  inkDim:    '#86969e',  // tertiary / meta text
  rule:      '#c4d0d5',  // dividers, borders
  ruleSoft:  '#dde6e9',  // softer dividers
  // Accents
  navy:      '#1a558f',  // PRIMARY accent — section headers, primary links
  coral:     '#d36b6e',  // SECONDARY accent — em phrases, highlights, "P" logo bg
  teal:      '#0c8a8a',  // tertiary — third-tier accents
  forest:    '#3b8c4b',  // success / running / active dot
  ochre:     '#d9a23a',  // tape, sticker accent
  paperTape: '#f0d77e',  // washi-tape sticker color (semi-transparent)
};
```

Case studies use those tokens for chrome but layer a **per-case accent** on top (see list above). It replaces `C.coral` everywhere a case-page kicker/tagline/sticker would normally be coral.

A subtle background dot pattern is applied to `body` (every page except in print):
```css
body::before {
  content: '';
  position: fixed; inset: 0;
  background-image: radial-gradient(#c4d0d5 1px, transparent 1px);
  background-size: 24px 24px;
  opacity: 0.35;
  pointer-events: none;
  z-index: 0;
}
```

### Typography

Four Google Fonts (all loaded once on each page):
- **Instrument Serif** — display (section titles, H1, large quotes). Italics in coral/case-accent for emphasis.
- **Caveat** — handwritten accents (kickers, captions, polaroid labels, form labels, sticker text). Always slightly rotated (`-1deg` to `2deg`).
- **Inter** — body, paragraphs, default UI.
- **DM Mono** — metadata, tags, footer microcopy (uppercase, letter-spacing `.08em` typical), résumé contact column.

Type scale (used as inline `fontSize` in px — translate to a scale token):

| Token        | Px    | Where                                |
|--------------|-------|--------------------------------------|
| display-xxl  | 176   | Hero h1                              |
| display-xl   | 152   | Tutorials hero h1                    |
| display-lg   | 124   | Case-study hero h1                   |
| display-md   | 96    | Résumé h1                            |
| display-sm   | 64    | Section h2 (home, tutorials, cases)  |
| display-xs   | 38    | Résumé section h2                    |
| heading      | 30    | Project title, hero kicker (caveat)  |
| body-lg      | 21    | Hero/about paragraph                 |
| body-md      | 19    | Case-study story paragraph           |
| body         | 16    | Default body, card body              |
| meta         | 12–13 | DM Mono meta, sticker text           |
| micro        | 10–11 | Tags, footer                         |

### Spacing & layout

- Page max width: **1400px** (home, tutorials, cases), **1100px** (résumé — narrower so it prints well)
- Section horizontal padding: **56px** on desktop
- Section vertical padding: **40–80px** (varies by density)
- Card padding: **14–24px**
- Card border radius: **mostly 0** (scrapbook = sharp paper edges). A few CTA panels use `radius: 4–6px`.

### Shadows

Two recipes, used everywhere:
```css
/* Resting card */
box-shadow: 0 14px 26px rgba(13,33,42,.12), 0 2px 4px rgba(13,33,42,.06);

/* Hovered card */
box-shadow: 0 24px 44px rgba(13,33,42,.18);
```

### Rotation (the "scrapbook" tell)

Every card and sticker has a small persistent rotation (`-2.5deg` to `2.4deg`). On hover, cards animate to `rotate(0deg) translateY(-6px)` over `.35s cubic-bezier(.2,.7,.2,1)`.

The rotation array used for project cards:
```js
const rots = [-2.5, 1.8, -1.2, 2.4, -1.8, 1.4, -2.2, 2.0, -1.3, 2.6, -2.0, 1.0, -1.6, 2.2];
```

### Animations

```css
@keyframes pn-dash    { to { stroke-dashoffset: -40; } }
@keyframes pulse-dot  { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: .4; transform: scale(1.5); } }
@keyframes float-y    { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
```

`pn-dash` is the dashed-arrow scribble animation. `pulse-dot` is the green "open to chat" indicator. Float is unused but kept for the doodle motifs.

---

## Shared Components (see `site/theme.jsx`)

| Name          | Purpose                                                                            |
|---------------|------------------------------------------------------------------------------------|
| `<Sticker>`   | Rounded pill with optional `bg`/`fg`/`rot`. Used for hero tags everywhere.         |
| `<Tape>`      | Absolute-positioned "washi tape" strip with a Caveat label. Sits on top of cards.  |
| `<Polaroid>`  | Card with image, caption (Caveat), optional tape strip. Hero + about + case icons. |
| `<SectionHeader>` | Section title bundle: kicker (Caveat) + h2 (Instrument Serif w/ em coral) + subtitle + right text. Sets the anchor id. |
| `<WavyLink>`  | `text-decoration: underline wavy` with color animating on hover.                   |
| `<Hi>`        | Yellow-highlighter span (`linear-gradient(transparent 75%, paperTape 75%)`).       |
| `<FadeUp>`    | IntersectionObserver wrapper. Fades children up by `y` px on first viewport entry. |
| `<DoodleArrow>` | Inline-SVG dashed scribble arrow (decorative, used sparingly).                   |

Page-specific components:

| Where           | Components                                                              |
|-----------------|-------------------------------------------------------------------------|
| `sections-a.jsx`| `Nav`, `Hero`, `About`, `Now`, `Projects`, `Work`, `ExpandButton`        |
| `sections-b.jsx`| `Xcelerate`, `Press`, `Volunteer`, `Tutorials` (CTA strip), `Contact`, `Footer` |
| `tutorials.jsx` | `TutorialsNav`, `TutorialsPage`, `TutorialCard`, `HowToUse`, ...         |
| `resume.jsx`    | `ResumeNav`, `ResumeHeader`, `R` (section), `Experience`, `Education`, `SelectedProjects`, `Skills`, `Extras`, `ResumeFooter` |
| `casestudy.jsx` | `CaseStudy`, `CaseStudyNav`, `CaseHero`, `FactSheet`, `Story`, `Gallery`, `PhoneFrame`, `NextProject`, `CaseFooter` |

---

## Interactions & Behavior

### Sticky nav with active-section highlight (home only)

The home page tracks which section is currently most visible via `IntersectionObserver`:

```js
const obs = new IntersectionObserver((entries) => {
  const visible = entries.filter(e => e.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
  if (visible[0]) setActive(visible[0].target.id);
}, { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.1, 0.3, 0.5] });
```

The active nav item gets `color: navy`, `fontWeight: 600`, and a 2px coral underline.

### Smooth scroll

`<html style="scroll-behavior: smooth">` + each section has `scrollMarginTop: 80–100` (under the sticky nav).

### Expand buttons (Projects, Work, Press)

A simple `useState(false)` toggle. `visible = expanded ? all : all.slice(0, 6)`. Button is a dashed-border pill labeled in Caveat (`show all 14 projects ↓` / `show fewer ↑`). On hover: yellow tinted bg + coral border + `translateY(-2px)`.

### Card hover

Standard treatment everywhere a card is clickable:
- Default: `transform: rotate(<persistent-rot>deg)`
- Hover: `transform: rotate(0deg) translateY(-6px)`, deeper shadow
- Transition: `.35s cubic-bezier(.2,.7,.2,1)`

### Parallax polaroids in the hero (home)

Three polaroids translate with scroll at small rates (`0.04`, `0.06`, `0.08` of `scrollY`). Use `requestAnimationFrame` + `passive` scroll listener. Skip on mobile for perf.

### Contact form (home)

`useState` for `name`, `email`, `msg`. Submit hands off to the user's mail client via `mailto:`:

```js
const body = encodeURIComponent(`From: ${name} <${email}>\n\n${msg}`);
const subject = encodeURIComponent(`Note from ${name} via paransonthalia.com`);
window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
```

When swapping in a real submit endpoint (e.g. Formspree, Resend, your own API route), replace `onSubmit`.

### Print (résumé)

The "print / save as PDF" button just calls `window.print()`. The `@media print` rules handle the rest. Test that the résumé fits on one US Letter page after any content changes — if it overflows, consider tightening the bullet point list or moving Extras into a sidebar.

### Race log (home, Xcelerate section)

Static table of 6 rows. No expand. Sits next to the YouTube card in `#xcelerate`.

### Next-project navigation (case studies)

Each case study's "next →" card uses a hardcoded order `['mtnViewArt', 'auxiliumHealth', 'minuteTutor', 'teender']` that cycles. Update the order if cases are added/removed.

---

## Content & Data

All content lives in `site/data.jsx` as a single `PARAN` object. Case-study text lives in `site/casestudy.jsx` as a `CASES` object. Résumé-specific bullet points live in `site/resume.jsx` as a `WORK_BULLETS` map (keyed by `"Company|Role"`).

Move these into:
- A typed `content.ts` (TypeScript), or
- A CMS (Sanity, Contentlayer, etc.) if Paran wants to edit without a deploy.

Sections:

- `PARAN.now` — 5 entries (label + text). Updated occasionally.
- `PARAN.races` — 6 entries (event + where + dist). Race ledger.
- `PARAN.projects` — 14 entries (title, year, role, text, img, tags, optional url).
- `PARAN.work` — 7 entries (co, role, years, note, img, loc, url).
- `PARAN.press` — 12 entries (src, title, url, img).
- `PARAN.volunteer` — 4 entries (co, role, note, img, url).
- `PARAN.socials` — 5 entries (GitHub, LinkedIn, Twitter, YouTube, Email).

### Copy notes (tone)

These specific lines set the voice of the site and shouldn't be tweaked lightly:

- Hero kicker: *"hello, hi, namaste — i'm"* (lowercase, Caveat). Don't capitalize.
- All sticker text is lowercase: `manhattan, ny` / `citadel · quant dev` / `cal '22`.
- Race ledger subtitle: *"kept here mostly for the math"*. Footer: *"Numbers, not medals. The channel is mostly about the part between sign-up and finish line."*
- Press section kicker: *"📰 in case anyone's interested"* — humble framing.
- Tutorials hero subtitle ends with *"They're frozen in time — Swift was new, Objective-C was still around, React felt like a fad — but the fundamentals haven't moved much."*
- Résumé footer: *"© PARAN SONTHALIA · MANHATTAN, NY · 2026 · ONE PAGE BUT IT'S A LONG PAGE"*

### Story paragraphs in case studies

The 3-paragraph story per case study in `casestudy.jsx` was written based on each app's brief original description. The narrative voice (matter-of-fact, mildly reflective, mentions what was learned) should be preserved if Paran wants to edit them — keep the structure of *what it does → how it was built → what stuck with me afterward*.

---

## Assets

Images live in `/assets/`. Categories:

- **Portrait:** `cover_photo.png` (Tahoe, used in hero)
- **In-context shots:** `dewaste_fixing.jpeg`, `yc_interview.jpeg`, `presentation.jpeg`, `berkeley_innovation.jpg`
- **Project thumbnails:** `dewaste.png`, `xcelerate.png`, `drone.png`, `trashcam.png`, `collegeAppPlanner.png`, `robotany.png`, `mtnViewArt.png`, `droidcontrol.png`, `auxiliumHealth.png`, `minuteTutor.png`, `teender.png`, `hyve.png`, `spikeballAttack.png`, `easyStudy.png`
- **Employer logos:** `citadel.png`, `amazon.png`, `pivotal.jpg`, `mangoapps.png`, `leanData.png`
- **Press logos:** `ycombinator.png`, `hackernoon.png`, `latc.png`, `startu.jpeg`, `evca.png`, `berkeley_innovation.jpg`, `breaker_audio.png`, `fundraising_radio.jpeg`, `understory.jpg`, `cpentrepreneurs.png`, `medium.png`, `oracle.png`
- **Volunteer logos:** `mvhacks.png`, `csm.png`, `boyScouts.png`, `codeone.png`
- **Tutorial logos:** `reactjs.png`, `xcode.png`, `unity.png`, `javascript.png`, `java.png`
- **Social icons:** `github.png`, `linkedin.png`, `twitter.png` (unused in current design — could be SVG'd)
- **Résumé PDF:** `Paran_Sonthalia_Resume.pdf` (linked by the "download PDF" button)

All assets came from the existing site. They're optimized for the old layout — recommend re-exporting at 2× density and converting to WebP/AVIF before launch.

**Case-study screenshots** are still hosted on `s3-us-west-2.amazonaws.com/skygear-cloud-asset/...`. These have been online since ~2017 but you should localize them. Pull each `src` from `site/casestudy.jsx` → `CASES[*].screens[*]`, download, save to `assets/case-studies/<id>/`, and update the references.

Tutorial downloads (in `dist/tutorials/`):
- `react_js_tutorial.zip`
- `ios_swift_tutorial.zip`
- `ios_obj_c_tutorial.zip`
- `javascript_tutorial.zip`
- `java_tutorial.zip`
- (Unity tutorial links out to `github.com/psonthalia/JavaOne4Kids2017`.)

---

## Files in this bundle

```
Personal Website.html        — Home page entry (loads via Babel for prototype)
Tutorials.html               — Tutorials archive page entry
Resume.html                  — HTML résumé entry
mtnViewArt.html              — Case study: Mountain View Art
auxiliumHealth.html          — Case study: Auxilium Health
minuteTutor.html             — Case study: Minute Tutor
teender.html                 — Case study: Teender

site/
  data.jsx                   — Shared content (PARAN object)
  theme.jsx                  — Palette + shared components
  sections-a.jsx             — Home nav + Hero/About/Now/Projects/Work
  sections-b.jsx             — Home Xcelerate/Press/Volunteer/Tutorials-CTA/Contact/Footer
  tutorials.jsx              — Tutorials page
  resume.jsx                 — Résumé page
  casestudy.jsx              — Case-study template + data for all 4

assets/                      — All images + résumé PDF
dist/tutorials/              — Tutorial download zips
```

The four case-study HTML files (`mtnViewArt.html` etc.) are tiny — each just loads the shared scripts and renders `<CaseStudy id="..." />`. The actual page content lives in `casestudy.jsx`.

---

## Recommendations for the real build

1. **Strip Babel.** Move JSX to a proper bundler (Vite + React, or Astro components).
2. **Use static rendering.** None of this needs to be client-rendered. The contact form, expand buttons, and the print() button are the only stateful parts.
3. **Replace inline styles** with Tailwind, CSS Modules, or vanilla CSS — whichever fits the developer's preference. Keep the design tokens table as the source of truth.
4. **Responsive.** The prototypes are desktop-only. Add a mobile breakpoint (~768px and below):
   - Nav → hamburger
   - Hero grid → single column, photos move below text
   - Projects/press → 1 col on small, 2 col on medium, 3 col on large
   - Reduce most font sizes 20–30%
   - Case-study hero stacks: title above icon+phone
   - Résumé experience grid collapses to single column with the dates moving to a sub-row
5. **Images.** Re-export at 2× density. Add `<picture>` with WebP. Lazy-load below-the-fold images. **Localize the case-study screenshots from S3.**
6. **SEO.** The current prototypes have minimal `<meta>`. Add proper OG tags, Twitter card, JSON-LD person schema (`@type: Person`, `jobTitle`, `worksFor: Citadel`, etc.), and a `<link rel="canonical">`. Each case study and the résumé should have their own OG image.
7. **Analytics.** The old site uses `gtag` (UA-68870135-4). Universal Analytics is sunset — migrate to GA4 or Plausible.
8. **Accessibility.** Add `aria-current="page"` on the active nav item. Ensure rotated cards still meet WCAG focus visibility. Add a reduce-motion media query that disables the parallax hero, the dashed arrow animation, and the pulse dot.
9. **The "P" logo.** Currently rendered as a circle with the letter P in Caveat at `rot(-6deg)`. Consider making it an actual SVG mark for crisp rendering at any size.
10. **Résumé PDF generation.** The current "download PDF" link points to an existing PDF that's slightly outdated. Options:
    - Keep manual — Paran updates the PDF separately and re-uploads
    - Auto-generate at build time — Puppeteer or `chromium-aws-lambda` renders `Resume.html?print=1` to PDF on every deploy
    - Use the print button — drop the download link entirely and just rely on browser print-to-PDF
11. **Tracking changes to data.** If Paran will update `now` and `races` regularly, plan for a CMS or a markdown-driven workflow.
12. **Case-study completeness.** Some cases have only one screenshot. If Paran has more screenshots from the old projects, the design auto-handles up to 6 phones in the gallery row.

---

## Open questions for the developer to confirm with Paran

- Hosting target (GH Pages? Vercel? Netlify?).
- Should the contact form actually send (Formspree / Resend), or stay as `mailto:`?
- Mobile design — does he want a dedicated mobile layout pass, or just sensible responsive collapse?
- The race log dates are intentionally omitted in the design. If he wants years, the table will need a 4th column.
- Tutorials — keep the old .zip downloads, or rewrite as web-readable articles?
- Résumé bullets — confirm accuracy. The Citadel bullets (Index Rebalance desk) and others were written based on my best understanding; they should be reviewed before going public.
- Case-study story paragraphs — they read as plausible reflection, but Paran should review each before going live.
