---
title: Implementation plan
phase: fundament
answers: What does each file owner build, and what must they not edit?
status: closed
---

Stack: Next.js App Router, TypeScript, `styled-components`, CSS variables in `app/globals.css`. No Tailwind. No inline style objects. One component per file. Its styled parts live in the sibling `*.styles.ts`. Public page is a server component. Only `Hero` is a client component, because it runs the entrance motion. Copy comes from `docs/agent/content-map.md`. Do not invent a sentence.

Tokens, taken from the frames: paper `#f4f5f0`, mint `#62fdbc`, ink `#14211c`, hairline `#3dc994`, muted `#53655a`, body-muted `#355c4b`, card `#e2eae1`, going `#dce3d8`, deep `#12695d`, line `#ccd5ca`, soft `#b4c5b8`, stage-line `#43564a`. Fonts: Space Grotesk, IBM Plex Mono, Inter, via `next/font`.

Between 390px and 1440px, spacing and type change with the viewport. The page is not a scaled screenshot: no ancestor uses `transform: scale` to fit the layout. A check at 800px shows type and padding between the 390px and 1440px values.

Motion plays once. The headline rises 14px and settles in 650ms. The asterisk turns, overshoots, and settles in 1.6s. `prefers-reduced-motion` keeps the resting layout, with no offset and no turn. Animate only transform and opacity. The hero box does not change size when the motion starts.

## Milestone foundation

File owner: foundation.

Owned paths:

- `package.json`, `package-lock.json`, `tsconfig.json`, `next.config.ts`, `next-env.d.ts`, `netlify.toml`, `.gitignore`
- `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `app/sitemap.ts`, `app/robots.ts`
- `README.md`
- `public/images/portrait.webp`, `public/images/cv-portrait.webp`, `public/images/going.webp`, `public/images/store.webp`
- `src/content/site.ts`

Forbidden: every path owned by a later milestone.

`src/content/site.ts` exports the site strings and the CV strings from the content map, including every desktop and mobile variant that differs. Later owners import it. They do not edit it.

`app/page.tsx` renders `<main>` and does not import section components. Those imports are added in the compose milestone, after the section files exist, so this build can succeed.

Acceptance:

- `npm run build` exits 0.
- `app/layout.tsx` title is `Tomasz Trębicki` and the description is the hero lead from the content map. Open Graph title and description are the same strings.
- `app/sitemap.ts` and `app/robots.ts` exist and reference the site URL from an env variable, with a local fallback.
- `README.md` is Polish and says how to run and how to deploy.
- Each image is WebP, at most 300KB, and is not hotlinked to Figma. `portrait.webp` is the site crop. `cv-portrait.webp` is the CV header crop.
- `app/page.tsx` contains no section body copy and no import from `src/components`.

## Milestone sections

Starts only after foundation is accepted. These owners run in parallel. Paths do not overlap.

Links and controls are `a` or `button`. A `div` is not the clickable control. Each section uses a `section` element. Nav uses `nav`. Footer uses `footer`.

### frame

Owned: `src/components/skip-link/SkipLink.tsx`, `src/components/skip-link/SkipLink.styles.ts`, `src/components/nav/Nav.tsx`, `src/components/nav/Nav.styles.ts`, `src/components/footer/Footer.tsx`, `src/components/footer/Footer.styles.ts`.

Acceptance: skip link is the first focusable control and its name is `Skip to content`. At 1440px the nav shows `PORTFOLIO / 2026`, and the links `Work` → `#work`, `About` → `#about`, `Contact` → `#contact`, and `CV ↗` → `/cv.pdf`. A visible label whose href is missing fails. At 390px the nav shows the name `tomasz trębicki` and `CV ↓` → `/cv.pdf` only, and does not show `PORTFOLIO / 2026`, Work, About, or Contact. Footer shows `© 2026 TOMASZ TRĘBICKI` and `DOWNLOAD CV ↓` → `/cv.pdf` at both widths. The end control is `BACK TO TOP ↑` at 1440px and `TOP ↑` at 390px.

### hero

Owned: `src/components/hero/Hero.tsx`, `src/components/hero/Hero.styles.ts`.

Acceptance: the visible name is `tomasz trębicki`. Both headlines are present. The lead is `I’m Tomasz. I turn complex product problems into thoughtful interfaces—and find better ways to build them.` Also present at both widths: `A LITTLE CURIOUS.`, `VERY INTENTIONAL.`, `CURRENTLY AT MIMEEQ`, `Custom interfaces. Core product systems.`, and `WARSAW, PL · WORKING REMOTELY`. The eyebrow is `FRONT-END DEVELOPER / FULL-STACK TYPESCRIPT` at 1440px and `FRONT-END / FULL-STACK TYPESCRIPT` at 390px. `Explore my work ↘` points at `#work`. `Download CV ↓` points at `/cv.pdf`. `React / Next.js / TypeScript` and `SCROLL TO EXPLORE ↓` are present at 1440px and absent at 390px. The headline move is 14px over 650ms, once. The asterisk settles in 1.6s, once. Reduced motion leaves both at rest.

### work

Owned: `src/components/work/WorkSection.tsx`, `src/components/work/WorkSection.styles.ts`, `src/components/work/MimeeqCard.tsx`, `src/components/work/MimeeqCard.styles.ts`, `src/components/work/GoingCard.tsx`, `src/components/work/GoingCard.styles.ts`, `src/components/work/StoreCard.tsx`, `src/components/work/StoreCard.styles.ts`, `src/components/work/EarlierExplorations.tsx`, `src/components/work/EarlierExplorations.styles.ts`.

Acceptance: the section id is `work`. `01 / SELECTED WORK` and `Built for real life.` are present. `Product features, commerce and a few useful experiments.` is present at 1440px and absent at 390px. Mimeeq, Going, and simple-ecommerce use the breakpoint-specific sentences in the content map. The desktop storefront sentence contains `built around Stripe`. The mobile sentence is `A modular storefront with Stripe, server-rendered pages and a persistent shopping cart.` Images have width and height attributes. The Going image accessible name is `Going mobile app`. The simple-ecommerce image accessible name is `Simple ecommerce`. The diagram is HTML, not a screenshot. Links match the content map. Earlier explorations shows `Partner profiles / Next.js + Strapi` and `Artificial News Anchor / radicalzz`, joined by `·` on one line at 1440px and stacked without `·` at 390px. Removing any other string the content map assigns to this section fails.

### profile

Owned: `src/components/practice/Practice.tsx`, `src/components/practice/Practice.styles.ts`, `src/components/about/About.tsx`, `src/components/about/About.styles.ts`, `src/components/toolkit/Toolkit.tsx`, `src/components/toolkit/Toolkit.styles.ts`, `src/components/experience/Experience.tsx`, `src/components/experience/Experience.styles.ts`.

Acceptance: `02 / HOW I WORK`, `More leverage.`, and `Same accountability.` are present. The body is `I combine AI-assisted development with agentic workflows. Clear scope, parallel work and human review stay part of the process.` The three steps are `Frame the problem`, `Delegate deliberately`, and `Review & integrate`, with the bodies from the content map. `AI-ASSISTED. AGENTIC.` and `HUMAN-REVIEWED.` are present at 1440px and absent at 390px. The desktop step-03 body is `Inspect the changes, test the behavior, own the result.` The mobile step-03 body is `Inspect changes, test the behavior, and own the result.` Section id `about` is on About. Visible text includes `03 / A PERSON, NOT A TECH STACK`, `Anthropology to interfaces.`, both About paragraphs, and `TOMASZ TRĘBICKI / WARSAW`. The site image `portrait.webp` is rendered with the accessible name `Tomasz Trębicki`. `04 / TOOLKIT` and `The right tool. Not every tool.` are present. The shared groups `INTERFACES`, `PRODUCT SYSTEMS`, `QUALITY & DELIVERY`, and `AI DEVELOPMENT` are present, including `TypeScript / JavaScript` and `React / Next.js`, plus the breakpoint-specific toolkit lines from the content map. `05 / EXPERIENCE` and `A few chapters so far.` are present. The desktop-only line `A path from understanding people to building the products they use.` is present at 1440px and absent at 390px. The six experience rows are present. At 390px the Mimeeq row reads `Front-end Developer · Remote`. `Warsaw` is shown on the desktop rows the map marks desktop-only, and those rows omit `Warsaw` at 390px. Removing any other string the content map assigns to this section fails.

### contact

Owned: `src/components/contact/Contact.tsx`, `src/components/contact/Contact.styles.ts`.

Acceptance: section id `contact`. The visible text includes `06 / SAY HELLO`, `Let’s make something click.`, and `Thoughtful interfaces. Useful systems. A good conversation to start.` The email is `mailto:t.trebicki1103@gmail.com`. GitHub and LinkedIn match the content map. The phone number is not rendered.

## Milestone cv

Starts after foundation. May run beside sections. Paths do not overlap with them.

File owner: cv.

Owned: `scripts/build-cv.tsx`, `public/cv.pdf`.

Acceptance: `public/cv.pdf` has two pages in a single column. Extracted text contains `1 / 2` and `2 / 2` and every CV string in the content map, including Profile, Technical Skills, Experience, Experience Continued, Selected Projects, Education and Certifications, Languages, and each bullet. The file is text, not a bitmap of the Figma frame. The CV portrait from `public/images/cv-portrait.webp` is on page 1 only. Page 2 has no portrait. Page 2 repeats `Tomasz Trębicki` and `Full-stack TypeScript Developer (frontend focus)` only: no phone, no links, and no street header. The site portrait is not the CV image. There is no second column, table, sidebar, or rating bar. The motivational letter is not in the PDF and is not linked.

## Milestone compose

Starts after sections and cv are accepted. One file owner: foundation. No other implementer runs.

Owned: `app/page.tsx` only.

Acceptance: `app/page.tsx` imports and renders, in order, `SkipLink`, `Nav`, `Hero`, `WorkSection`, `Practice`, `About`, `Toolkit`, `Experience`, `Contact`, `Footer`, inside `main`. `npm run build` exits 0. The rendered text at 1440px and 390px still matches the section criteria above.

## Product bar

Every public page:

- Static where the page has no user-specific data.
- Images are the WebP files from foundation, each at most 300KB, with reserved width and height. The first viewport does not shift when they load or when Hero hydrates.
- Semantic HTML: landmarks and real links or buttons, not clickable `div`s. Heading levels do not skip.
- The sentences named in the section criteria are in the document. An empty About, Practice, or contact introduction fails.
- Names, visible focus, contrast, and keyboard reach every control.
- Metadata title and description, Open Graph, sitemap, and robots.

Do not invent copy.

## Out of scope

`/Users/tomasz/websitecv-plain`. The motivational letter as a published page. A second host.
