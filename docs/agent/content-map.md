---
title: Content map
phase: mapa treści
answers: What visible string belongs on which route, section, or document?
status: closed
---

Source: Figma file `websitecv`, page `0:1`. Strings are copied from the frames. A breakpoint only changes a string where this map says so. Do not invent a sentence to make the breakpoints match.

## Routes

| Surface | Route or document | Frames |
| --- | --- | --- |
| Public site | `/` with `#work`, `#about`, `#contact` | `6:2` desktop 1440, `6:14` mobile 390 |
| CV | `/cv.pdf`, selectable text, not a screenshot | `6:15`, `6:16` |
| Motivational letter | No site route and no site link | `6:17` |

The letter text is recorded below so it is not dropped. Neither site frame links it. Do not add a navigation item for it.

## Site, both breakpoints

Skip link, required by the annotation on `6:2` and `6:14`. The frames do not paint the label. Use `Skip to content`.

### Introduction

| | Desktop `6:2` | Mobile `6:14` |
| --- | --- | --- |
| Name | tomasz trębicki | tomasz trębicki |
| Eyebrow | FRONT-END DEVELOPER / FULL-STACK TYPESCRIPT | FRONT-END / FULL-STACK TYPESCRIPT |
| Headline | Human instincts. / System thinking. | same |
| Lead | I’m Tomasz. I turn complex product problems into thoughtful interfaces—and find better ways to build them. | same words, wrapped |
| Aside | A LITTLE CURIOUS. / VERY INTENTIONAL. | same |
| Mark | `*` | `*` |
| Primary | Explore my work ↘ → `#work` | same, full width |
| Secondary | Download CV ↓ → `/cv.pdf` | same, full width |
| Now | CURRENTLY AT MIMEEQ | same |
| Now body | Custom interfaces. Core product systems. | same |
| Place | WARSAW, PL · WORKING REMOTELY | same |
| Stack line | React / Next.js / TypeScript | absent |
| Scroll hint | SCROLL TO EXPLORE ↓ | absent |

### Navigation and footer

Desktop nav: `PORTFOLIO / 2026`, `Work` → `#work`, `About` → `#about`, `Contact` → `#contact`, `CV ↗` → `/cv.pdf`.

Mobile nav: name, then `CV ↓` → `/cv.pdf`. No Work, About, Contact, or `PORTFOLIO / 2026`.

Footer, both: `© 2026 TOMASZ TRĘBICKI`, `DOWNLOAD CV ↓` → `/cv.pdf`.

Desktop footer end: `BACK TO TOP ↑`. Mobile footer end: `TOP ↑`.

### Selected work, `#work`

Shared: `01 / SELECTED WORK`, `Built for real life.`

Desktop only: `Product features, commerce and a few useful experiments.`

#### Mimeeq

Desktop kicker `01 / MIMEEQ` and date `2025 — NOW`. Mobile kicker `01 / MIMEEQ · 2025 — NOW`.

Title: `The features behind the front end.`

Body: `Custom client interfaces and the systems that make a visual product platform work.`

Desktop capability line: `Translations · Trash & recovery · Revisions` / `Authentication refactor · Backend scripting`.

Mobile capability lines: `Translations · Trash & recovery` / `Revisions · Authentication refactor` / `Backend scripting`.

Desktop role: `MY ROLE` / `Front-end development / product features`. Mobile role line: `FRONT-END / PRODUCT FEATURES`.

Link, both: `Explore Mimeeq ↗` → `https://mimeeq.com/`.

Desktop diagram caption: `ILLUSTRATIVE WORKFLOW / NOT A PRODUCT SCREENSHOT`. Mobile caption: `ILLUSTRATIVE WORKFLOW`.

Desktop diagram: `Workspace / Product content`, tabs `Translations`, `Revisions`, `Trash`, `EN → PL`, columns `KEY`, `ENGLISH`, `POLISH`, rows `product.name` / `Oak chair` / `Krzesło dębowe`, `quote.add` / `Add to quote` / `Dodaj do wyceny`, `changes.save` / `Save changes` / `Zapisz zmiany`, status `✓  Changes saved · Revision history available`.

Mobile diagram: `Translations`, `EN → PL`, `Product name` / `Nazwa produktu`, `Add to quote` / `Dodaj do wyceny`, `Save changes` / `Zapisz zmiany`, status `✓ Changes saved`. No tabs, no key column, no `Revision history available`.

The diagram is an illustration, not a Mimeeq screenshot.

#### Going

Media label, desktop only: `WEB + MOBILE`.

Both: `02 / GOING & EMPIK BILETY`, `From discovery to ticket.`, `React web and Expo mobile. Personalization, push notifications and a page builder for content teams.`, `REACT · TYPESCRIPT · EXPO · STRAPI`, `Visit Going ↗` → `https://goingapp.pl`.

Image layer: `Going mobile app · Original project image`. Accessible name, not painted: `Going mobile app`.

#### simple-ecommerce

Media label, desktop only: `PERSONAL PROJECT`.

Both: `03 / SIMPLE-ECOMMERCE`, `Less setup. More selling.`, `NEXT.JS · STRIPE · FIREBASE · ZUSTAND`, `Live project ↗` → `https://simple-ecommerce-rho-nine.vercel.app/`, `GitHub ↗` → `https://github.com/ttrebicki/simple-ecommerce`.

Desktop body: `A modular storefront built around Stripe, server-rendered pages and a persistent shopping cart.`

Mobile body: `A modular storefront with Stripe, server-rendered pages and a persistent shopping cart.`

Image layer: `Simple ecommerce · Original project image`. Accessible name, not painted: `Simple ecommerce`.

#### Earlier

`EARLIER EXPLORATIONS`

`Partner profiles / Next.js + Strapi`

`Artificial News Anchor / radicalzz`

Desktop joins those two with `·` on one line. Mobile stacks them. They are not links.

### How I work

`02 / HOW I WORK`

`More leverage.` / `Same accountability.`

`I combine AI-assisted development with agentic workflows. Clear scope, parallel work and human review stay part of the process.`

Desktop only: `AI-ASSISTED. AGENTIC.` / `HUMAN-REVIEWED.`

`01` `Frame the problem` — `Understand the user, constraints and expected behavior.`

`02` `Delegate deliberately` — `Accelerate development with AI. Orchestrate agents in parallel.`

`03` `Review & integrate`

Desktop body: `Inspect the changes, test the behavior, own the result.`

Mobile body: `Inspect changes, test the behavior, and own the result.`

### About, `#about`

`03 / A PERSON, NOT A TECH STACK`

`Anthropology to interfaces.`

`I started with people, not frameworks. A background in cultural anthropology and UX research still shapes how I build: ask better questions, understand the context, then make the interface clear.`

`From CMS operations and QA to design and development, I’ve seen how software works on both sides of the screen. Today, I bring that perspective to product engineering at Mimeeq.`

`TOMASZ TRĘBICKI / WARSAW`

Portrait layer on mobile: `Portrait of Tomasz`. Accessible name, not painted: `Tomasz Trębicki`.

### Toolkit

`04 / TOOLKIT`

`The right tool. Not every tool.`

`INTERFACES`: `TypeScript / JavaScript`, `React / Next.js`, `React Native / Expo`, `HTML / CSS / Tailwind`

`PRODUCT SYSTEMS`: `REST APIs / Node.js`, `Firebase / Firestore`, `Strapi / WordPress`, `Stripe integrations`

`QUALITY & DELIVERY`: `Cypress / Jest / Maestro`, `Git / GitHub / Bitbucket`, `Figma / Material UI`

Desktop last quality line: `Jira / product collaboration`. Mobile last quality line: `Jira`.

`AI DEVELOPMENT`

Desktop: `AI-assisted development`, `Multi-agent orchestration`, `Change review & integration`, `Human-led decisions`

Mobile: `AI-assisted coding`, `Agent orchestration`, `Review & integration`, `Human-led decisions`

### Experience

`05 / EXPERIENCE`

`A few chapters so far.`

Desktop only: `A path from understanding people to building the products they use.`

| Dates | Place | Role | Where |
| --- | --- | --- | --- |
| OCT 2025 — PRESENT | Mimeeq | Front-end Developer | Remote |
| APR 2021 — OCT 2025 | Going / Empik Bilety | Front End / Full Stack Developer | Warsaw on desktop only |
| JAN 2020 — PRESENT | Independent | Freelance Front-end Developer | Warsaw on desktop only |
| SEP 2020 — APR 2021 | Going / Empik Bilety | Project management / UI design / QA | Warsaw on desktop only |
| AUG 2019 — SEP 2020 | Going / Empik Bilety | CMS administration / Client service | Warsaw on desktop only |
| JUN 2018 — JUL 2019 | radicalzz | UX research / Content creation | Warsaw on desktop only |

Mobile joins the first role as `Front-end Developer · Remote` and omits `Warsaw` on the other rows.

### Contact, `#contact`

`06 / SAY HELLO`

`Let’s make something click.`

`Thoughtful interfaces. Useful systems. A good conversation to start.`

`t.trebicki1103@gmail.com ↗` → `mailto:t.trebicki1103@gmail.com`

`GITHUB ↗` → `https://github.com/ttrebicki/`

`LINKEDIN ↗` → `https://www.linkedin.com/in/ttrebicki/`

## Motion

Annotation on `6:2` and `6:14`: play once on entry. Disable the asterisk turn and the headline entrance offset when `prefers-reduced-motion` is set. Animate only transform and opacity. Do not loop, even though the Figma timeline on `6:29` and `6:35` is set to repeat.

Headline rises 14px and settles. The asterisk turns, overshoots, and settles in about 1.6 seconds.

## CV, `/cv.pdf`

Two-page, single-column, selectable text. Portrait only on page 1. No rating bars, sidebars, or tables. Page numbers `1 / 2` and `2 / 2`.

Header: `Tomasz Trębicki`, `Full-stack TypeScript Developer (frontend focus)`, `Warsaw, Poland | t.trebicki1103@gmail.com | +48 519 767 459`, `hmmmm.cool | linkedin.com/in/ttrebicki | github.com/ttrebicki`.

Page 2 repeats the name and role only.

`Profile`

`Developer with 5+ years of development experience, focused on frontend-heavy TypeScript products. Experienced in customer-facing web and mobile applications, content platforms and ticket ecommerce. Combines hands-on implementation with an earlier background in UX research, interface design and QA. Uses AI-assisted development and agentic workflows to accelerate delivery, with human review throughout. Career progression through client service, product coordination and development brings a practical understanding of both the interface and the operational work behind it.`

`Technical Skills`

`Frontend: TypeScript, JavaScript, React, Next.js, React Native, Expo, HTML, CSS, Tailwind CSS, Material UI (MUI).`

`Backend and content: REST APIs, Node.js, Firebase, Firestore, Strapi.`

`Testing and delivery: Cypress, Jest, Maestro, Git, Figma, Jira; AI-assisted and agentic coding.`

`Experience`

`Front-end Developer | Mimeeq` — `Oct 2025 - Present | Remote`

- `Build custom client frontends and product features, including a product translation system, a trash and recovery system, and a revisions system. Responsibilities span client-specific interfaces and shared product capabilities.`
- `Refactor authentication and contribute simple backend scripts alongside frontend delivery.`
- `Use AI-assisted coding to accelerate development; orchestrate and review multi-agent coding work, checking proposed changes before integrating them. Treat generated code as work to review, not as an automatically accepted result.`

`Front End / Full Stack Developer | Going / Empik Bilety` — `Apr 2021 - Oct 2025`

- `Developed React and TypeScript web products and contributed to the Going mobile app built with React Native and Expo, working across browser-based experiences and a mobile application within the same product ecosystem.`
- `Implemented follows and likes personalization with Firestore and CloudSearch, and push notifications using Firebase and Braze.`
- `Built Strapi page-builder functionality so content could be edited through composable blocks rather than page-specific code.`
- `Created a reusable Next.js ticket ecommerce template for partners, providing a shared foundation for partner storefronts rather than treating each partner implementation as a completely separate website.`

`Experience, Continued`

`Freelance Front-end Developer` — `Jan 2020 - Present | Warsaw, Poland`

- `Build ecommerce, content and affiliate marketing websites with WordPress and Shoper, translating client requirements into practical website implementations. This ongoing freelance work complements product development with projects centered on selling, publishing and affiliate content.`

`PM / UI Designer / QA | Going` — `Sep 2020 - Apr 2021`

- `Coordinated scope and timelines, prepared wireframes and prototypes, worked on a Material design system, and performed manual QA. Combined coordination, interface design and testing responsibilities before moving into a dedicated developer role.`

`CMS Administrator / Client Service | Going` — `Aug 2019 - Sep 2020`

- `Handled 150+ partner requests per month, worked with Seats.io, and standardized event forms to support consistent event setup.`

`UX Researcher / Content Creator | radicalzz` — `Jun 2018 - Jul 2019`

- `Conducted qualitative research into circular-economy furniture leasing, created sustainability content featuring a CGI news anchor, and contributed to FUTURO workshop cards.`

`Selected Projects`

`simple-ecommerce: Next.js ecommerce project using Stripe, Firebase Authentication, Zustand and Tailwind CSS, with server-side rendering. Combines server-rendered pages with client-side state, authentication and payment integration.`

`Partner profile: Next.js and Strapi implementation with composable content blocks, originally used for Winiary and SBM. Those original implementations were later replaced; current sites are not presented as my work.`

`Going app: Contributed to the React Native and Expo application as part of the Going / Empik Bilety developer role, alongside React and TypeScript web development.`

`Education and Certifications`

`BA, Ethnology and Cultural Anthropology` — `University of Warsaw | Oct 2014 - Oct 2017`

`freeCodeCamp | 2019: JavaScript Algorithms and Data Structures; Responsive Web Design.`

`Languages`

`Polish: Native. English: Full professional proficiency.`

CV portrait layer: `Portrait · Original CV photograph`. It is the CV header photo, separate from the site portrait crop.

## Motivational letter, not linked

Header matches the CV, including the phone number. Title `Motivational letter`. Page number `1 / 1`.

`Dear Hiring Team,`

`I am looking for a frontend-heavy TypeScript role where I can take responsibility for useful product features, from understanding a problem to delivering and maintaining the implementation. I bring more than five years of development experience across web and mobile products, supported by an earlier background in UX research, interface design and quality assurance.`

`In my current role, I build custom client frontends and work on product capabilities including translations, trash and recovery, revisions, and an authentication refactor. My work also includes simple backend scripting and automation. I use AI tools and coordinate multi-agent coding workflows as practical development aids, while taking responsibility for reviewing the resulting changes and deciding what should be integrated.`

`Previously, working on ticketing products, I developed React and TypeScript web products and contributed to a React Native and Expo application. My responsibilities included follows and likes personalization, push notifications, a Strapi page builder, and a reusable Next.js ticket ecommerce template for partners. These projects gave me experience connecting interfaces to content workflows, customer communication and the systems behind a purchase.`

`Before moving fully into development, I coordinated product scope and timelines, created wireframes and prototypes, worked with a Material design system, and performed manual QA. That experience still shapes how I approach engineering: clarify the intended behavior, consider how people will use a feature, and check the details rather than treating implementation as an isolated handoff.`

`I would welcome a conversation about contributing to a product team that values thoughtful interfaces, maintainable code and practical collaboration. I am particularly interested in work that connects user needs with reliable, understandable software. I am based in Warsaw and work professionally in English. Thank you for considering my application.`

`Kind regards,`

`Tomasz Trębicki`

The frame annotation says to tailor the opening and closing before a real application. This delivery does not tailor it and does not publish it.

## Gaps

These are absent from the frames. They do not block the map.

- No production hostname. Do not invent one.
- The phone number is only on the CV and the letter.
- `Skip to content` is required by annotation and is not painted.
- Image accessible names above are layer names, not painted captions.
- The letter has no site link.
