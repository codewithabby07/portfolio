export type Industry = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  headline: string;
  description: string;
  challenges: {
    title: string;
    description: string;
  }[];
  solutions: {
    title: string;
    description: string;
  }[];
  deliverables: string[];
  techFocus: string[];
  projectSlugs: string[];
  relatedServices: string[];
};

export const industries: Industry[] = [
  {
    slug: "construction-real-estate",
    number: "01",
    title: "Construction & Real Estate",
    shortTitle: "Construction & PropTech",
    headline: "High-trust digital architecture for developers, builders, and brokers.",
    description:
      "Large-scale construction firms and luxury real estate brokerages require authority, fast visual load times, and frictionless lead capture. We engineer high-performance platforms with project showcases, interactive filtering, and direct broker consultation funnels.",
    challenges: [
      {
        title: "Slow, Media-Heavy Catalog Loading",
        description:
          "High-res architectural renders and floor plans often choke traditional CMS sites, driving bounce rates above 60%.",
      },
      {
        title: "Weak Lead Conversion Funnels",
        description:
          "Visitors look at projects but leave without submitting enquiries because forms are buried or too complex.",
      },
      {
        title: "Lack of Brand Authority",
        description:
          "Generic templates fail to convey the scale, engineering rigor, and financial credibility required for multi-crore property investments.",
      },
    ],
    solutions: [
      {
        title: "Optimized Media Pipeline & Instant CDN Delivery",
        description:
          "Zero-lag responsive picture pipelines and lazy hydration that load architectural blueprints and renders in under a second.",
      },
      {
        title: "Contextual Sticky & Slide-to-Enquire CTAs",
        description:
          "High-conversion lead hooks positioned at points of peak buyer intent, integrated directly with WhatsApp and CRM pipelines.",
      },
      {
        title: "Editorial Architectural Layouts",
        description:
          "Bespoke typography, dark luxury framing, and structured specification tables that command immediate respect.",
      },
    ],
    deliverables: [
      "Custom Project Showcase & Filter System",
      "Interactive Floor Plan & Spec Sheets",
      "Lead Capture & CRM / WhatsApp Routing",
      "Dynamic Buy / Rent Listing Architecture",
      "Fast Mobile-First Layouts & Technical SEO",
    ],
    techFocus: ["React", "Next.js", "Tailwind CSS", "Vercel Edge", "Sharp Image Optimization"],
    projectSlugs: ["alp-buildcon", "property-broker"],
    relatedServices: ["web-development", "frontend-engineering", "ui-ux-implementation"],
  },
  {
    slug: "healthcare-clinics",
    number: "02",
    title: "Healthcare & Dental Practices",
    shortTitle: "Healthcare & Clinics",
    headline: "Frictionless patient scheduling and pristine clinic presentation.",
    description:
      "Modern patients evaluate medical clinics online before booking. We build clinical platforms that balance clinical authority, empathetic patient communication, and seamless appointment booking systems.",
    challenges: [
      {
        title: "Chaotic Phone-Only Booking Systems",
        description:
          "Clinics lose 30-40% of potential after-hours patients due to lack of real-time online appointment scheduling.",
      },
      {
        title: "Patient Anxiety & Outdated Interfaces",
        description:
          "Cluttered or dated clinic websites create hesitation around clinical hygiene and doctor expertise.",
      },
    ],
    solutions: [
      {
        title: "Multi-Step Appointment Booking System",
        description:
          "Intuitive doctor, treatment, and slot selection with automatic SMS/email confirmations and schedule management.",
      },
      {
        title: "Calm, Modern Aesthetic & Trust Signals",
        description:
          "Clean visual hierarchy, verified credentials, clear treatment overviews, and transparent pricing/procedure guides.",
      },
    ],
    deliverables: [
      "Interactive Appointment Booking Engine",
      "Doctor Profiles & Specialty Breakdowns",
      "Patient Preparation Guides & FAQs",
      "Local SEO & Google Maps Synchronization",
      "Mobile-Optimized Booking Flow",
    ],
    techFocus: ["React", "Node.js", "Tailwind CSS", "REST API", "Email Automation"],
    projectSlugs: ["dentiva"],
    relatedServices: ["web-development", "frontend-engineering", "technical-seo"],
  },
  {
    slug: "creative-agencies",
    number: "03",
    title: "Creative Agencies & Design Studios",
    shortTitle: "Agencies & Studios",
    headline: "Uncompromising digital craftsmanship for brands that trade on aesthetics.",
    description:
      "For creative agencies, studios, and production houses, the website is the primary proof of creative capability. We engineer bespoke, motion-rich editorial web experiences that elevate agency pedigree and win higher-ticket client retainers.",
    challenges: [
      {
        title: "Cookie-Cutter Template Stigma",
        description:
          "Agencies cannot pitch premium retainers if their own website looks like an off-the-shelf theme.",
      },
      {
        title: "Performance Compromise from Heavy Motion",
        description:
          "Experimental animation and WebGL often cause stuttering, battery drain, and poor mobile experience.",
      },
    ],
    solutions: [
      {
        title: "Hardware-Accelerated 60fps Micro-Interactions",
        description:
          "Carefully curated CSS and WebGL transitions that deliver arresting sensory impact without sacrificing Lighthouse scores.",
      },
      {
        title: "Editorial Case Study Narratives",
        description:
          "Magazine-grade project layouts detailing strategy, typography, color theory, and business results.",
      },
    ],
    deliverables: [
      "Bespoke Editorial Web Layout",
      "Smooth Kinetic & Scroll Transitions",
      "Curated Video & Project Showcases",
      "Interactive Agency Pitch Deck Elements",
      "Custom Brand Motion Language",
    ],
    techFocus: ["React", "Three.js / WebGL", "Tailwind CSS", "Framer Motion", "Vercel"],
    projectSlugs: ["creavo"],
    relatedServices: ["creative-web-experiences", "ui-ux-implementation", "frontend-engineering"],
  },
  {
    slug: "ecommerce-retail",
    number: "04",
    title: "E-Commerce & Lifestyle Brands",
    shortTitle: "E-Commerce & Retail",
    headline: "High-speed storefronts built for visual desire and checkout velocity.",
    description:
      "Modern lifestyle and luxury consumers make split-second purchase judgments. We design e-commerce environments with clean product storytelling, instant filtering, and frictionless catalog discovery.",
    challenges: [
      {
        title: "Laggy Catalog Filtering & Search",
        description:
          "Every second of latency in product search drops e-commerce conversion rates by 7%.",
      },
      {
        title: "Generic Product Grid Fatigue",
        description:
          "Standard commodity store layouts dilute premium brand identity and fail to justify luxury price points.",
      },
    ],
    solutions: [
      {
        title: "Sub-100ms Catalog Navigation",
        description:
          "Client-side instant filtering, predictive search, and snappy product drawers that keep shoppers engaged.",
      },
      {
        title: "Editorial Lookbook Integration",
        description:
          "Blending editorial storytelling with direct shop-the-look hotspots and seamless cart transitions.",
      },
    ],
    deliverables: [
      "Custom Product Catalog Architecture",
      "Dynamic Filter & Attribute Matrix",
      "Mobile-Optimized Product Details & Gallery",
      "Speed Optimization for Core Web Vitals",
      "Structured E-Commerce Schema (Product, Review, Price)",
    ],
    techFocus: ["React", "Next.js", "Tailwind CSS", "Headless APIs", "CDN Caching"],
    projectSlugs: ["zainca"],
    relatedServices: ["web-development", "performance-optimization", "technical-seo"],
  },
  {
    slug: "saas-growth-tools",
    number: "05",
    title: "SaaS & Growth Tools",
    shortTitle: "SaaS & Growth",
    headline: "Product-grade web applications engineered for retention and virality.",
    description:
      "Software founders need marketing sites and web app frontends that clarify complex value propositions within 3 seconds and convert cold traffic into active product users.",
    challenges: [
      {
        title: "Complex Value Proposition Confusion",
        description:
          "B2B and SaaS tools often lose signups because their features are described with jargon rather than visible utility.",
      },
      {
        title: "Bridge Between Marketing & Web Application",
        description:
          "Disjointed experiences between the marketing landing page and the authenticated app dashboard.",
      },
    ],
    solutions: [
      {
        title: "Interactive Live Feature Demos",
        description:
          "Allowing prospective customers to test the tool mechanics directly on the page without signup barriers.",
      },
      {
        title: "Production React & TypeScript Architecture",
        description:
          "Clean component systems that scale seamlessly from public landing page to full customer dashboard.",
      },
    ],
    deliverables: [
      "Interactive Product Interactive Demos",
      "Conversion-Engineered Landing Pages",
      "Customer Review Routing & Feedback Funnels",
      "Dashboard UI & Component System",
      "REST & Webhook Integrations",
    ],
    techFocus: ["React", "Node.js", "TypeScript", "REST APIs", "Tailwind CSS"],
    projectSlugs: ["review-funnel"],
    relatedServices: ["web-development", "frontend-engineering", "performance-optimization"],
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((ind) => ind.slug === slug);
}
