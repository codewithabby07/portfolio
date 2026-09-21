export type Service = {
  number: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  summary: string;
  whoItsFor: string[];
  deliverables: {
    title: string;
    description: string;
  }[];
  methodology: {
    step: string;
    title: string;
    description: string;
  }[];
  techStack: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedIndustries: string[];
};

export const services: Service[] = [
  {
    number: "01",
    slug: "web-development",
    title: "CUSTOM WEB DEVELOPMENT",
    shortTitle: "Web Development",
    tagline: "End-to-end full stack web architecture engineered for speed and durability.",
    summary:
      "We design, engineer, and deploy production-grade websites from scratch. No bloated WordPress themes, no fragile page builders—only clean, maintainable React and Next.js codebases.",
    description:
      "Modern businesses cannot afford fragile site templates that break on mobile or load sluggishly. We build complete digital architectures from the ground up: database modeling, API integrations, dynamic layouts, and zero-downtime edge deployments.",
    whoItsFor: [
      "Founders launching new companies requiring an authoritative digital launchpad.",
      "Established businesses replacing slow, outdated WordPress or legacy sites.",
      "Growing teams needing custom functionality like booking portals, dynamic catalogs, or interactive quote calculators.",
    ],
    deliverables: [
      {
        title: "Bespoke Full-Stack Architecture",
        description: "Zero-bloat application setup using React, TypeScript, and modern headless frameworks.",
      },
      {
        title: "API & Third-Party Integrations",
        description: "Flawless connections to CRM, WhatsApp automation, payment gateways, and headless databases.",
      },
      {
        title: "Edge Deployment & CDN Setup",
        description: "Global low-latency hosting on Vercel Edge networks with SSL and automated CI/CD pipelines.",
      },
      {
        title: "Admin & Content Workflows",
        description: "Clean data structures that allow your internal team to manage content without touching code.",
      },
    ],
    methodology: [
      {
        step: "01",
        title: "Technical Discovery & Scope",
        description: "We define core user flows, technical constraints, data schemas, and functional benchmarks.",
      },
      {
        step: "02",
        title: "System Architecture & Prototyping",
        description: "We engineer component hierarchies, route structures, and responsive layouts before writing production code.",
      },
      {
        step: "03",
        title: "Full-Stack Development",
        description: "We build clean, typed frontend and backend logic with strict performance and security standards.",
      },
      {
        step: "04",
        title: "Edge Deployment & QA",
        description: "Comprehensive multi-device testing, Core Web Vitals validation, and smooth production rollout.",
      },
    ],
    techStack: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Vercel", "REST APIs"],
    faqs: [
      {
        question: "How long does a custom web development project take?",
        answer: "A standard studio project typically launches within 6 to 14 business days, depending on functional complexity and scope.",
      },
      {
        question: "Do you use templates or custom code?",
        answer: "Every CodeWithAbby build is written with bespoke code tailored to your exact brand, performance requirements, and user experience goals.",
      },
      {
        question: "Will I own the complete source code?",
        answer: "Yes, 100%. You receive full intellectual property ownership and direct repository access upon project completion.",
      },
    ],
    relatedIndustries: ["construction-real-estate", "healthcare-clinics", "saas-growth-tools"],
  },
  {
    number: "02",
    slug: "frontend-engineering",
    title: "FRONTEND ENGINEERING",
    shortTitle: "Frontend Engineering",
    tagline: "Ultra-responsive, type-safe interfaces built with React, TypeScript, and Tailwind CSS.",
    summary:
      "We build robust, scalable frontend codebases that turn complex UI concepts into high-speed, accessible web applications.",
    description:
      "A great visual design is only as good as the frontend engineering behind it. We translate Figma files and UI blueprints into pixel-perfect, accessible, and ultra-responsive React codebases that behave identically across every device and browser.",
    whoItsFor: [
      "Companies with existing backends needing a modernized, sleek frontend interface.",
      "Design studios looking for an elite engineering partner to bring Figma files to life.",
      "SaaS founders who need an intuitive, snappy user dashboard.",
    ],
    deliverables: [
      {
        title: "Reusable Design Component System",
        description: "Modular, accessible UI components built with Tailwind CSS and Radix primitives.",
      },
      {
        title: "Strict TypeScript Safety",
        description: "End-to-end type safety eliminating runtime bugs and simplifying long-term maintenance.",
      },
      {
        title: "Responsive Perfection Across Viewports",
        description: "Flawless rendering from 360px mobile viewports to 4K ultra-wide desktop monitors.",
      },
      {
        title: "Fluid Micro-Interactions",
        description: "Polished hover states, page transitions, and interactive controls that feel alive.",
      },
    ],
    methodology: [
      {
        step: "01",
        title: "Design System Tokenization",
        description: "Extracting typography scales, color spaces, spacing tokens, and interactive guidelines.",
      },
      {
        step: "02",
        title: "Atomic Component Construction",
        description: "Building resilient base primitives: buttons, inputs, modals, cards, and navigation drawer.",
      },
      {
        step: "03",
        title: "State Management & Data Binding",
        description: "Connecting UI state to server APIs and local storage with seamless loading and error states.",
      },
      {
        step: "04",
        title: "Cross-Device & Browser Audits",
        description: "Rigorous testing on iOS Safari, Android Chrome, desktop browsers, and touch devices.",
      },
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Zustand", "Radix UI"],
    faqs: [
      {
        question: "Can you build from my existing Figma design?",
        answer: "Absolutely. We pride ourselves on 1:1 pixel-level fidelity to your design system, including responsive adaptations.",
      },
      {
        question: "How do you ensure cross-browser compatibility?",
        answer: "We test on real physical devices across iOS, Android, macOS, and Windows, ensuring uniform visual behavior.",
      },
    ],
    relatedIndustries: ["creative-agencies", "saas-growth-tools", "ecommerce-retail"],
  },
  {
    number: "03",
    slug: "ui-ux-implementation",
    title: "UI/UX IMPLEMENTATION",
    shortTitle: "UI/UX Implementation",
    tagline: "Translating sophisticated brand aesthetics into intuitive digital journeys.",
    summary:
      "We bridge the gap between creative visual design and technical execution, crafting digital experiences that feel effortless and command respect.",
    description:
      "Most digital projects fail in the translation between design and code. We combine an editorial eye with senior engineering craft, ensuring typography, negative space, motion, and visual weight remain uncompromised in production.",
    whoItsFor: [
      "Brands wanting an elevated, luxury aesthetic that differentiates them from generic industry competitors.",
      "Firms suffering from clunky user journeys that confuse prospects or hinder conversion.",
      "Organizations modernizing their digital visual language.",
    ],
    deliverables: [
      {
        title: "Editorial Typographic Hierarchy",
        description: "High-contrast font pairings and rhythmic vertical spacing tailored to your brand voice.",
      },
      {
        title: "Conversion-Focused Information Architecture",
        description: "Clear visual hierarchy guiding prospects naturally from value proposition to inquiry.",
      },
      {
        title: "Interactive Prototypes & Feedback States",
        description: "Clear button states, loading skeletons, error indicators, and success confirmations.",
      },
      {
        title: "Dark Luxury Glassmorphism & Depth",
        description: "Layered surfaces, subtle borders, and atmospheric lighting that elevate brand perception.",
      },
    ],
    methodology: [
      {
        step: "01",
        title: "Audience & Intent Analysis",
        description: "Understanding your buyer's mental model, pain points, and decision triggers.",
      },
      {
        step: "02",
        title: "Visual Framing & Prototyping",
        description: "Balancing dark obsidian palettes with warm accents and crystal-clear typographic hierarchy.",
      },
      {
        step: "03",
        title: "Interaction Engineering",
        description: "Implementing silky-smooth scroll effects, card reveals, and micro-delight moments.",
      },
      {
        step: "04",
        title: "Usability Stress-Testing",
        description: "Validating touch targets, contrast ratios, and navigation ergonomics.",
      },
    ],
    techStack: ["CSS Grid", "Flexbox", "Tailwind CSS", "Framer Motion", "Custom Shaders"],
    faqs: [
      {
        question: "What makes your UI/UX different from standard agency work?",
        answer: "We focus on restrained luxury and speed. We avoid flashy distractions that slow down loading or confuse users, prioritizing clarity, prestige, and swift conversions.",
      },
    ],
    relatedIndustries: ["creative-agencies", "construction-real-estate", "ecommerce-retail"],
  },
  {
    number: "04",
    slug: "creative-web-experiences",
    title: "CREATIVE WEB EXPERIENCES",
    shortTitle: "Creative Experiences",
    tagline: "Interactive 3D scenes, custom shaders, and memorable brand moments.",
    summary:
      "For brands that refuse to look like everyone else: custom WebGL shaders, Three.js canvas environments, and kinetic typography that leave an unforgettable impression.",
    description:
      "When a website needs to evoke wonder and stop visitors in their tracks, we deploy WebGL, 3D canvases, and interactive canvas physics. We balance high-impact visual spectacle with strict performance budgets so your site remains smooth and instant.",
    whoItsFor: [
      "Pioneering creative agencies and design studios wanting an iconic digital flagship.",
      "High-end property developers showcasing flagship developments through immersive visuals.",
      "Brands launching high-concept digital campaigns.",
    ],
    deliverables: [
      {
        title: "Interactive WebGL & Three.js Canvases",
        description: "Custom real-time 3D particle systems, fluid simulations, and responsive living worlds.",
      },
      {
        title: "Mobile-Calibrated 60fps Shaders",
        description: "GPU-accelerated fragment shaders optimized to preserve mobile battery and frame rate.",
      },
      {
        title: "Kinetic Typography & Stagger Animations",
        description: "Cinematic hero text animations and scroll-synchronized reveal sequences.",
      },
      {
        title: "Ambient Sound & Haptic Cues",
        description: "Optional subtle audio-tactile feedback for luxury brand immersion.",
      },
    ],
    methodology: [
      {
        step: "01",
        title: "Creative Concept & Aesthetic Mood",
        description: "Defining the visual atmosphere, lighting, camera choreography, and mathematical shaders.",
      },
      {
        step: "02",
        title: "Mathematical Prototyping",
        description: "Writing custom GLSL shaders and Three.js scenes with real-time parameter tweaking.",
      },
      {
        step: "03",
        title: "Performance Throttling & Sizing",
        description: "Optimizing render passes, draw calls, and dynamic pixel ratio scaling for mobile viewports.",
      },
      {
        step: "04",
        title: "DOM & Canvas Synchrony",
        description: "Tying canvas animations smoothly into the HTML DOM layout and scroll triggers.",
      },
    ],
    techStack: ["Three.js", "GLSL / Shaders", "WebGL", "Canvas API", "Tailwind CSS"],
    faqs: [
      {
        question: "Will 3D and WebGL slow down my website?",
        answer: "Not with our implementation. We calculate device pixel ratios, throttle canvas rendering when offscreen, and optimize shaders for 60fps rendering even on mid-tier mobile phones.",
      },
      {
        question: "Can users on low-power mobile devices view the site?",
        answer: "Yes, we include automated fallbacks and graceful degradation so every visitor receives a pristine visual experience.",
      },
    ],
    relatedIndustries: ["creative-agencies", "construction-real-estate"],
  },
  {
    number: "05",
    slug: "technical-seo",
    title: "TECHNICAL SEO & DISCOVERABILITY",
    shortTitle: "Technical SEO",
    tagline: "Semantic HTML, structured metadata, and crawl architecture built for organic dominance.",
    summary:
      "We architect websites that search engines love: pristine semantic markup, rich JSON-LD schema, open graph assets, and lightning-fast indexation.",
    description:
      "A stunning website is worthless if your ideal clients can't discover it on Google. We bake technical SEO into the foundational code—structured business data, canonical routing, sitemaps, and robots configuration—so you rank organically from day one.",
    whoItsFor: [
      "Local service businesses (clinics, builders, brokerages) needing high local Google search placement.",
      "Companies launching new domains needing fast indexing and high domain trust.",
      "Brands losing search traffic due to technical crawl errors and poor site structure.",
    ],
    deliverables: [
      {
        title: "Complete JSON-LD Schema Architecture",
        description: "Structured schema for LocalBusiness, MedicalClinic, RealEstateAgent, and Organization.",
      },
      {
        title: "Semantic HTML5 Tree Structure",
        description: "Proper heading hierarchy (H1, H2, H3), ARIA tags, and accessible landmark elements.",
      },
      {
        title: "Dynamic XML Sitemap & Robots Protocol",
        description: "Clean indexing instructions that guide Googlebot and Bingbot to high-value pages.",
      },
      {
        title: "Social Share Card & OpenGraph Optimization",
        description: "Bespoke preview cards (1200x630) that look commanding when shared on WhatsApp, LinkedIn, and X.",
      },
    ],
    methodology: [
      {
        step: "01",
        title: "Crawl & Semantic Audit",
        description: "Evaluating indexability, heading structures, and competitive search intent.",
      },
      {
        step: "02",
        title: "Schema & Metadata Engineering",
        description: "Injecting rich entity markup to secure Google rich snippets and knowledge graph placement.",
      },
      {
        step: "03",
        title: "Internal Linking Matrix",
        description: "Building strategic cross-links between industries, services, and case studies to distribute page rank.",
      },
      {
        step: "04",
        title: "Search Console & Verification Integration",
        description: "Submitting verified sitemaps to Google and Bing with zero indexation errors.",
      },
    ],
    techStack: ["JSON-LD", "OpenGraph", "Semantic HTML5", "Google Search Console", "Vercel Analytics"],
    faqs: [
      {
        question: "How quickly does technical SEO produce results?",
        answer: "Clean technical architecture and schema allow search engines to index and rank new pages within days rather than months, laying the foundation for long-term organic authority.",
      },
    ],
    relatedIndustries: ["healthcare-clinics", "construction-real-estate", "ecommerce-retail"],
  },
  {
    number: "06",
    slug: "performance-optimization",
    title: "PERFORMANCE OPTIMIZATION",
    shortTitle: "Performance & Speed",
    tagline: "Sub-second load times, 90+ Core Web Vitals, and zero layout shift.",
    summary:
      "We strip latency out of web applications: code splitting, modern image pipelines, caching headers, and efficient render lifecycles.",
    description:
      "Speed is a feature and a direct driver of revenue. Every 100ms delay decreases conversion and increases bounce rates. We audit, refactor, and tune websites to score 90+ on Google PageSpeed Insights while keeping all visual polish intact.",
    whoItsFor: [
      "Companies with sluggish websites suffering high mobile bounce rates.",
      "Stores and platforms failing Google's Core Web Vitals assessment.",
      "Brands wanting an instant, app-like browsing feel.",
    ],
    deliverables: [
      {
        title: "Core Web Vitals Optimization",
        description: "Pinpoint tuning of LCP (Largest Contentful Paint), INP (Interaction to Next Paint), and CLS (Cumulative Layout Shift).",
      },
      {
        title: "Modern Next-Gen Image Pipeline",
        description: "AVIF/WebP generation with responsive srcsets and priority loading for above-the-fold assets.",
      },
      {
        title: "Bundle Splitting & Tree Shaking",
        description: "Eliminating unused JavaScript libraries and shrinking total asset payloads.",
      },
      {
        title: "Edge Caching & Stale-While-Revalidate",
        description: "Configuring lightning-fast CDN edge caching for instantaneous multi-region page responses.",
      },
    ],
    methodology: [
      {
        step: "01",
        title: "Lighthouse & Network Profiling",
        description: "Benchmarking waterfall requests, main thread blocking time, and render shifts.",
      },
      {
        step: "02",
        title: "Asset & Font Streamlining",
        description: "Subsetting webfonts, inlining critical CSS, and optimizing picture formats.",
      },
      {
        step: "03",
        title: "JavaScript Execution Deferral",
        description: "Moving heavy non-critical scripts off the critical rendering path.",
      },
      {
        step: "04",
        title: "Real-Device Load Verification",
        description: "Testing on 4G mobile networks to ensure sub-1.5s visual completion time.",
      },
    ],
    techStack: ["Vite", "Lighthouse", "Web Vitals", "Edge CDN", "Sharp"],
    faqs: [
      {
        question: "Can you optimize an existing website without rewriting it completely?",
        answer: "Yes, we can perform targeted speed surgery on existing frontends to drastically cut loading times and satisfy Google Core Web Vitals.",
      },
    ],
    relatedIndustries: ["ecommerce-retail", "saas-growth-tools", "construction-real-estate"],
  },
];

export const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Tailwind CSS",
  "Three.js / WebGL",
  "GLSL Shaders",
  "REST APIs",
  "Vercel Edge",
  "Technical SEO",
  "Core Web Vitals",
] as const;

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
