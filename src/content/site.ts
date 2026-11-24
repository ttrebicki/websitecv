/** Visible site and CV strings from docs/agent/content-map.md. Do not invent copy. */

export const LOCAL_SITE_URL = 'http://localhost:3000';

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || LOCAL_SITE_URL;

export const siteTitle = 'Tomasz Trębicki';

export const heroLead =
  'I’m Tomasz. I turn complex product problems into thoughtful interfaces—and find better ways to build them.';

export const images = {
  portrait: {
    src: '/images/portrait.webp',
    alt: 'Tomasz Trębicki',
    width: 750,
    height: 800,
  },
  cvPortrait: {
    src: '/images/cv-portrait.webp',
    alt: 'Portrait · Original CV photograph',
    width: 96,
    height: 96,
  },
  going: {
    src: '/images/going.webp',
    alt: 'Going mobile app',
    width: 1200,
    height: 1110,
  },
  store: {
    src: '/images/store.webp',
    alt: 'Simple ecommerce',
    width: 1200,
    height: 1723,
  },
} as const;

export const site = {
  title: siteTitle,
  skipLink: 'Skip to content',
  hero: {
    name: 'tomasz trębicki',
    eyebrow: {
      desktop: 'FRONT-END DEVELOPER / FULL-STACK TYPESCRIPT',
      mobile: 'FRONT-END / FULL-STACK TYPESCRIPT',
    },
    headline: 'Human instincts. / System thinking.',
    lead: heroLead,
    aside: 'A LITTLE CURIOUS. / VERY INTENTIONAL.',
    mark: '*',
    primary: {
      label: 'Explore my work ↘',
      href: '#work',
    },
    secondary: {
      label: 'Download CV ↓',
      href: '/cv.pdf',
    },
    now: 'CURRENTLY AT MIMEEQ',
    nowBody: 'Custom interfaces. Core product systems.',
    place: 'WARSAW, PL · WORKING REMOTELY',
    stackLine: {
      desktop: 'React / Next.js / TypeScript',
      mobile: null,
    },
    scrollHint: {
      desktop: 'SCROLL TO EXPLORE ↓',
      mobile: null,
    },
  },
  nav: {
    desktop: {
      brand: 'PORTFOLIO / 2026',
      links: [
        { label: 'Work', href: '#work' },
        { label: 'About', href: '#about' },
        { label: 'Contact', href: '#contact' },
        { label: 'CV ↗', href: '/cv.pdf' },
      ],
    },
    mobile: {
      name: 'tomasz trębicki',
      cv: { label: 'CV ↓', href: '/cv.pdf' },
    },
  },
  footer: {
    copyright: '© 2026 TOMASZ TRĘBICKI',
    download: { label: 'DOWNLOAD CV ↓', href: '/cv.pdf' },
    end: {
      desktop: 'BACK TO TOP ↑',
      mobile: 'TOP ↑',
    },
  },
  work: {
    id: 'work',
    kicker: '01 / SELECTED WORK',
    title: 'Built for real life.',
    dek: {
      desktop: 'Product features, commerce and a few useful experiments.',
      mobile: null,
    },
    mimeeq: {
      kicker: {
        desktop: '01 / MIMEEQ',
        mobile: '01 / MIMEEQ · 2025 — NOW',
      },
      date: {
        desktop: '2025 — NOW',
        mobile: null,
      },
      title: 'The features behind the front end.',
      body: 'Custom client interfaces and the systems that make a visual product platform work.',
      capabilities: {
        desktop: [
          'Translations · Trash & recovery · Revisions',
          'Authentication refactor · Backend scripting',
        ],
        mobile: [
          'Translations · Trash & recovery',
          'Revisions · Authentication refactor',
          'Backend scripting',
        ],
      },
      role: {
        desktop: {
          label: 'MY ROLE',
          value: 'Front-end development / product features',
        },
        mobile: 'FRONT-END / PRODUCT FEATURES',
      },
      link: {
        label: 'Explore Mimeeq ↗',
        href: 'https://mimeeq.com/',
      },
      diagramCaption: {
        desktop: 'ILLUSTRATIVE WORKFLOW / NOT A PRODUCT SCREENSHOT',
        mobile: 'ILLUSTRATIVE WORKFLOW',
      },
      diagram: {
        desktop: {
          title: 'Workspace / Product content',
          tabs: ['Translations', 'Revisions', 'Trash'],
          language: 'EN → PL',
          columns: ['KEY', 'ENGLISH', 'POLISH'],
          rows: [
            ['product.name', 'Oak chair', 'Krzesło dębowe'],
            ['quote.add', 'Add to quote', 'Dodaj do wyceny'],
            ['changes.save', 'Save changes', 'Zapisz zmiany'],
          ],
          status: '✓  Changes saved · Revision history available',
        },
        mobile: {
          title: 'Translations',
          language: 'EN → PL',
          rows: [
            ['Product name', 'Nazwa produktu'],
            ['Add to quote', 'Dodaj do wyceny'],
            ['Save changes', 'Zapisz zmiany'],
          ],
          status: '✓ Changes saved',
        },
      },
    },
    going: {
      mediaLabel: {
        desktop: 'WEB + MOBILE',
        mobile: null,
      },
      kicker: '02 / GOING & EMPIK BILETY',
      title: 'From discovery to ticket.',
      body: 'React web and Expo mobile. Personalization, push notifications and a page builder for content teams.',
      stack: 'REACT · TYPESCRIPT · EXPO · STRAPI',
      link: {
        label: 'Visit Going ↗',
        href: 'https://goingapp.pl',
      },
      image: images.going,
    },
    store: {
      mediaLabel: {
        desktop: 'PERSONAL PROJECT',
        mobile: null,
      },
      kicker: '03 / SIMPLE-ECOMMERCE',
      title: 'Less setup. More selling.',
      body: {
        desktop:
          'A modular storefront built around Stripe, server-rendered pages and a persistent shopping cart.',
        mobile:
          'A modular storefront with Stripe, server-rendered pages and a persistent shopping cart.',
      },
      stack: 'NEXT.JS · STRIPE · FIREBASE · ZUSTAND',
      live: {
        label: 'Live project ↗',
        href: 'https://simple-ecommerce-rho-nine.vercel.app/',
      },
      github: {
        label: 'GitHub ↗',
        href: 'https://github.com/ttrebicki/simple-ecommerce',
      },
      image: images.store,
    },
    earlier: {
      title: 'EARLIER EXPLORATIONS',
      items: [
        'Partner profiles / Next.js + Strapi',
        'Artificial News Anchor / radicalzz',
      ],
      joiner: {
        desktop: ' · ',
        mobile: null,
      },
    },
  },
  practice: {
    kicker: '02 / HOW I WORK',
    title: 'More leverage.',
    titleEnd: 'Same accountability.',
    body: 'I combine AI-assisted development with agentic workflows. Clear scope, parallel work and human review stay part of the process.',
    asides: {
      desktop: ['AI-ASSISTED. AGENTIC.', 'HUMAN-REVIEWED.'],
      mobile: null,
    },
    steps: [
      {
        number: '01',
        title: 'Frame the problem',
        body: 'Understand the user, constraints and expected behavior.',
      },
      {
        number: '02',
        title: 'Delegate deliberately',
        body: 'Accelerate development with AI. Orchestrate agents in parallel.',
      },
      {
        number: '03',
        title: 'Review & integrate',
        body: {
          desktop: 'Inspect the changes, test the behavior, own the result.',
          mobile: 'Inspect changes, test the behavior, and own the result.',
        },
      },
    ],
  },
  about: {
    id: 'about',
    kicker: '03 / A PERSON, NOT A TECH STACK',
    title: 'Anthropology to interfaces.',
    paragraphs: [
      'I started with people, not frameworks. A background in cultural anthropology and UX research still shapes how I build: ask better questions, understand the context, then make the interface clear.',
      'From CMS operations and QA to design and development, I’ve seen how software works on both sides of the screen. Today, I bring that perspective to product engineering at Mimeeq.',
    ],
    caption: 'TOMASZ TRĘBICKI / WARSAW',
    image: images.portrait,
  },
  toolkit: {
    kicker: '04 / TOOLKIT',
    title: 'The right tool. Not every tool.',
    groups: [
      {
        heading: 'INTERFACES',
        items: [
          'TypeScript / JavaScript',
          'React / Next.js',
          'React Native / Expo',
          'HTML / CSS / Tailwind',
        ],
      },
      {
        heading: 'PRODUCT SYSTEMS',
        items: [
          'REST APIs / Node.js',
          'Firebase / Firestore',
          'Strapi / WordPress',
          'Stripe integrations',
        ],
      },
      {
        heading: 'QUALITY & DELIVERY',
        items: {
          shared: ['Cypress / Jest / Maestro', 'Git / GitHub / Bitbucket', 'Figma / Material UI'],
          last: {
            desktop: 'Jira / product collaboration',
            mobile: 'Jira',
          },
        },
      },
      {
        heading: 'AI DEVELOPMENT',
        items: {
          desktop: [
            'AI-assisted development',
            'Multi-agent orchestration',
            'Change review & integration',
            'Human-led decisions',
          ],
          mobile: [
            'AI-assisted coding',
            'Agent orchestration',
            'Review & integration',
            'Human-led decisions',
          ],
        },
      },
    ],
  },
  experience: {
    kicker: '05 / EXPERIENCE',
    title: 'A few chapters so far.',
    dek: {
      desktop: 'A path from understanding people to building the products they use.',
      mobile: null,
    },
    rows: [
      {
        dates: 'OCT 2025 — PRESENT',
        company: 'Mimeeq',
        role: {
          desktop: 'Front-end Developer',
          mobile: 'Front-end Developer · Remote',
        },
        where: {
          desktop: 'Remote',
          mobile: null,
        },
      },
      {
        dates: 'APR 2021 — OCT 2025',
        company: 'Going / Empik Bilety',
        role: 'Front End / Full Stack Developer',
        where: {
          desktop: 'Warsaw',
          mobile: null,
        },
      },
      {
        dates: 'JAN 2020 — PRESENT',
        company: 'Independent',
        role: 'Freelance Front-end Developer',
        where: {
          desktop: 'Warsaw',
          mobile: null,
        },
      },
      {
        dates: 'SEP 2020 — APR 2021',
        company: 'Going / Empik Bilety',
        role: 'Project management / UI design / QA',
        where: {
          desktop: 'Warsaw',
          mobile: null,
        },
      },
      {
        dates: 'AUG 2019 — SEP 2020',
        company: 'Going / Empik Bilety',
        role: 'CMS administration / Client service',
        where: {
          desktop: 'Warsaw',
          mobile: null,
        },
      },
      {
        dates: 'JUN 2018 — JUL 2019',
        company: 'radicalzz',
        role: 'UX research / Content creation',
        where: {
          desktop: 'Warsaw',
          mobile: null,
        },
      },
    ],
  },
  contact: {
    id: 'contact',
    kicker: '06 / SAY HELLO',
    title: 'Let’s make something click.',
    body: 'Thoughtful interfaces. Useful systems. A good conversation to start.',
    email: {
      label: 't.trebicki1103@gmail.com ↗',
      href: 'mailto:t.trebicki1103@gmail.com',
    },
    github: {
      label: 'GITHUB ↗',
      href: 'https://github.com/ttrebicki/',
    },
    linkedin: {
      label: 'LINKEDIN ↗',
      href: 'https://www.linkedin.com/in/ttrebicki/',
    },
  },
} as const;

export const cv = {
  name: 'Tomasz Trębicki',
  role: 'Full-stack TypeScript Developer (frontend focus)',
  pageNumbers: ['1 / 2', '2 / 2'],
  header: {
    locationLine: 'Warsaw, Poland | t.trebicki1103@gmail.com | +48 519 767 459',
    linksLine: 'hmmmm.cool | linkedin.com/in/ttrebicki | github.com/ttrebicki',
  },
  portrait: images.cvPortrait,
  profile: {
    heading: 'Profile',
    body: 'Developer with 5+ years of development experience, focused on frontend-heavy TypeScript products. Experienced in customer-facing web and mobile applications, content platforms and ticket ecommerce. Combines hands-on implementation with an earlier background in UX research, interface design and QA. Uses AI-assisted development and agentic workflows to accelerate delivery, with human review throughout. Career progression through client service, product coordination and development brings a practical understanding of both the interface and the operational work behind it.',
  },
  technicalSkills: {
    heading: 'Technical Skills',
    frontend:
      'Frontend: TypeScript, JavaScript, React, Next.js, React Native, Expo, HTML, CSS, Tailwind CSS, Material UI (MUI).',
    backend: 'Backend and content: REST APIs, Node.js, Firebase, Firestore, Strapi.',
    testing:
      'Testing and delivery: Cypress, Jest, Maestro, Git, Figma, Jira; AI-assisted and agentic coding.',
  },
  experience: {
    heading: 'Experience',
    continuedHeading: 'Experience, Continued',
    jobs: [
      {
        title: 'Front-end Developer | Mimeeq',
        meta: 'Oct 2025 - Present | Remote',
        bullets: [
          'Build custom client frontends and product features, including a product translation system, a trash and recovery system, and a revisions system. Responsibilities span client-specific interfaces and shared product capabilities.',
          'Refactor authentication and contribute simple backend scripts alongside frontend delivery.',
          'Use AI-assisted coding to accelerate development; orchestrate and review multi-agent coding work, checking proposed changes before integrating them. Treat generated code as work to review, not as an automatically accepted result.',
        ],
      },
      {
        title: 'Front End / Full Stack Developer | Going / Empik Bilety',
        meta: 'Apr 2021 - Oct 2025',
        bullets: [
          'Developed React and TypeScript web products and contributed to the Going mobile app built with React Native and Expo, working across browser-based experiences and a mobile application within the same product ecosystem.',
          'Implemented follows and likes personalization with Firestore and CloudSearch, and push notifications using Firebase and Braze.',
          'Built Strapi page-builder functionality so content could be edited through composable blocks rather than page-specific code.',
          'Created a reusable Next.js ticket ecommerce template for partners, providing a shared foundation for partner storefronts rather than treating each partner implementation as a completely separate website.',
        ],
      },
      {
        title: 'Freelance Front-end Developer',
        meta: 'Jan 2020 - Present | Warsaw, Poland',
        bullets: [
          'Build ecommerce, content and affiliate marketing websites with WordPress and Shoper, translating client requirements into practical website implementations. This ongoing freelance work complements product development with projects centered on selling, publishing and affiliate content.',
        ],
      },
      {
        title: 'PM / UI Designer / QA | Going',
        meta: 'Sep 2020 - Apr 2021',
        bullets: [
          'Coordinated scope and timelines, prepared wireframes and prototypes, worked on a Material design system, and performed manual QA. Combined coordination, interface design and testing responsibilities before moving into a dedicated developer role.',
        ],
      },
      {
        title: 'CMS Administrator / Client Service | Going',
        meta: 'Aug 2019 - Sep 2020',
        bullets: [
          'Handled 150+ partner requests per month, worked with Seats.io, and standardized event forms to support consistent event setup.',
        ],
      },
      {
        title: 'UX Researcher / Content Creator | radicalzz',
        meta: 'Jun 2018 - Jul 2019',
        bullets: [
          'Conducted qualitative research into circular-economy furniture leasing, created sustainability content featuring a CGI news anchor, and contributed to FUTURO workshop cards.',
        ],
      },
    ],
  },
  selectedProjects: {
    heading: 'Selected Projects',
    items: [
      'simple-ecommerce: Next.js ecommerce project using Stripe, Firebase Authentication, Zustand and Tailwind CSS, with server-side rendering. Combines server-rendered pages with client-side state, authentication and payment integration.',
      'Partner profile: Next.js and Strapi implementation with composable content blocks, originally used for Winiary and SBM. Those original implementations were later replaced; current sites are not presented as my work.',
      'Going app: Contributed to the React Native and Expo application as part of the Going / Empik Bilety developer role, alongside React and TypeScript web development.',
    ],
  },
  education: {
    heading: 'Education and Certifications',
    items: [
      {
        title: 'BA, Ethnology and Cultural Anthropology',
        meta: 'University of Warsaw | Oct 2014 - Oct 2017',
      },
      {
        title: 'freeCodeCamp | 2019: JavaScript Algorithms and Data Structures; Responsive Web Design.',
      },
    ],
  },
  languages: {
    heading: 'Languages',
    body: 'Polish: Native. English: Full professional proficiency.',
  },
} as const;
