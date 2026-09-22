export type Project = {
  id: string;
  slug: string;
  number: string;
  title: string;
  client: string;
  category: string;
  industrySlug: string;
  serviceSlugs: string[];
  description: string;
  tagline: string;
  impact: string;
  technologies: string[];
  role: string;
  year: string;
  image: string;
  liveUrl: string;
  featured?: boolean;
  challenge: string;
  solution: string;
  deliverables: string[];
  keyFeatures: {
    title: string;
    description: string;
  }[];
  architecture: string[];
};

export const projects: Project[] = [
  {
    id: "alp-buildcon",
    slug: "alp-buildcon",
    number: "01",
    title: "ALP BUILDCON",
    client: "ALP Buildcon Infrastructure & Construction",
    category: "Construction & Real Estate",
    industrySlug: "construction-real-estate",
    serviceSlugs: ["web-development", "ui-ux-implementation", "technical-seo"],
    tagline: "High-authority corporate digital architecture for a premier construction company.",
    description:
      "A complete digital platform for ALP Buildcon, engineered with editorial layout, high-contrast typography, and lead-capture systems tailored to high-value infrastructure contracts.",
    impact: "+140% Qualified Inquiries",
    technologies: ["React", "Tailwind CSS", "Next.js", "Vercel", "TypeScript"],
    role: "Full Stack Developer & Architectural Lead",
    year: "2025",
    image: "/images/projects/alp-buildcon.jpg",
    liveUrl: "https://alpbuildcon.com/",
    featured: true,
    challenge:
      "ALP Buildcon needed to project immense institutional stability and engineering excellence to corporate developers and government infrastructure liaisons. Their existing presence was fragmented, lacked responsive elegance on mobile devices, and had no unified pipeline for project tender inquiries.",
    solution:
      "We engineered a bespoke React & Next.js platform showcasing their major industrial and commercial build portfolio. High-resolution project galleries load instantly through edge caching, paired with direct lead capture pipelines that route high-value contract queries straight to leadership.",
    deliverables: [
      "Bespoke Corporate Identity & Editorial Web Layout",
      "Dynamic Infrastructure & Project Portfolio Showcase",
      "High-Conversion Contract Inquiry & WhatsApp Integration",
      "Local & Industry SEO Architecture with Rich Snippets",
      "Mobile-Optimized Experience with Sub-Second Page Speeds",
    ],
    keyFeatures: [
      {
        title: "High-Impact Project Showcase",
        description: "Organized categorization of residential, industrial, and commercial developments with comprehensive specifications.",
      },
      {
        title: "Instant Direct Lead Pipeline",
        description: "Streamlined inquiry forms linked with instant notification triggers for real estate developers and buyers.",
      },
      {
        title: "Editorial Construction Typography",
        description: "Commanding headline styling and deep dark canvas conveying raw durability and structural excellence.",
      },
    ],
    architecture: [
      "Frontend: React 19 + Tailwind CSS for zero-runtime styling overhead.",
      "Deployment: Vercel Edge Network with worldwide asset caching.",
      "Performance: 98/100 Core Web Vitals score on mobile.",
    ],
  },
  {
    id: "creavo",
    slug: "creavo",
    number: "02",
    title: "CREAVO",
    client: "Creavo Creative Agency",
    category: "Creative Agency & Studio",
    industrySlug: "creative-agencies",
    serviceSlugs: ["creative-web-experiences", "frontend-engineering", "ui-ux-implementation"],
    tagline: "Motion-forward digital flagship engineered for a high-end creative agency.",
    description:
      "A bespoke agency website designed around Creavo's distinctive identity. Featuring kinetic typography, silky-smooth transitions, and an editorial grid that showcases their visual work without compromise.",
    impact: "3.2x Average Session Duration",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Vercel", "WebGL"],
    role: "Lead Creative Developer",
    year: "2025",
    image: "/images/projects/creavo.jpg",
    liveUrl: "https://creavo-steel.vercel.app/",
    challenge:
      "Creavo needed a website that served as direct living proof of their creative authority. Standard agency templates felt generic and lacked the kinetic sophistication required to win design-forward client retainers.",
    solution:
      "We built a dynamic, typography-led digital experience with fluid transitions, magnetic hover interactions, and an asymmetric layout structure that treats every case study as a high-fashion editorial spread.",
    deliverables: [
      "Custom Interaction & Micro-Animation System",
      "Asymmetric Grid & Magazine-Style Typography Hierarchy",
      "Smooth Kinetic Page Transitions & Scroll Parallax",
      "Interactive Capabilities & Services Showcase",
      "Fast Global CDN Deployment with 60fps Mobile Performance",
    ],
    keyFeatures: [
      {
        title: "Kinetic Brand Typography",
        description: "Fluid text reveals and dynamic scale transformations reacting to visitor scroll depth.",
      },
      {
        title: "Curated Agency Portfolio Layout",
        description: "Full-bleed project showcases with refined hover states and immersive detail views.",
      },
      {
        title: "Tactile Interactive Touchpoints",
        description: "Custom cursors, tactile button physics, and subtle sensory cues that delight users.",
      },
    ],
    architecture: [
      "Frontend: React with optimized CSS transform pipelines for guaranteed 60fps animations.",
      "Styling: Bespoke Tailwind utility system with refined dark obsidian and champagne tones.",
      "Hosting: Global edge delivery on Vercel.",
    ],
  },
  {
    id: "zainca",
    slug: "zainca",
    number: "03",
    title: "ZAINCA",
    client: "Zainca Enterprises Lifestyle & Retail",
    category: "E-Commerce & Lifestyle",
    industrySlug: "ecommerce-retail",
    serviceSlugs: ["web-development", "performance-optimization", "technical-seo"],
    tagline: "High-speed storefront platform engineered for luxury lifestyle goods and catalog discovery.",
    description:
      "E-commerce and brand flagship for Zainca. Focused on product presentation, frictionless catalog discovery, and a consistent luxury browsing experience across all screen sizes.",
    impact: "Sub-800ms Page Transitions",
    technologies: ["React", "Next.js", "Tailwind CSS", "Vercel", "REST APIs"],
    role: "Full Stack Developer",
    year: "2025",
    image: "/images/projects/zainca.jpg",
    liveUrl: "https://zaincaenterprises.in/",
    challenge:
      "Zainca's lifestyle products required an understated luxury aesthetic that emphasized product texture and craftsmanship, while maintaining instantaneous catalog loading on mobile cellular connections.",
    solution:
      "We engineered a clean, headless storefront layout with instantaneous client-side product filtering, responsive image optimization, and structured product schema that maximized search discoverability.",
    deliverables: [
      "Responsive E-Commerce Architecture & Catalog Engine",
      "Instantaneous Attribute & Category Filtering",
      "Mobile-Optimized Product Lookbook & Zoom Details",
      "E-Commerce Structured Schema (JSON-LD Product Markup)",
      "High-Converting WhatsApp Order & Customer Support Pipeline",
    ],
    keyFeatures: [
      {
        title: "Instantaneous Product Filtering",
        description: "Zero-latency multi-attribute filtering allowing shoppers to locate products instantly.",
      },
      {
        title: "Luxury Visual Lookbook",
        description: "High-fidelity imagery presented with crisp framing and seamless mobile touch-swipe support.",
      },
      {
        title: "Direct WhatsApp Checkout Bridge",
        description: "Seamless one-click order handover enabling personalized customer care and rapid closing.",
      },
    ],
    architecture: [
      "Framework: Next.js + React with server-side rendering for optimal indexability.",
      "Image Pipeline: Automated WebP conversion and responsive source sets.",
      "Deployment: Scalable edge architecture on Vercel.",
    ],
  },
  {
    id: "dentiva",
    slug: "dentiva",
    number: "04",
    title: "DENTIVA",
    client: "Dentiva Dental Clinic & Medical Practice",
    category: "Healthcare & Dental",
    industrySlug: "healthcare-clinics",
    serviceSlugs: ["web-development", "frontend-engineering", "technical-seo"],
    tagline: "Modern patient scheduling engine and clinical authority platform.",
    description:
      "Full-featured dental clinic digital platform with an integrated online appointment booking system, doctor profiles, patient-facing treatment guides, and automated confirmation workflows.",
    impact: "300+ Monthly Online Bookings",
    technologies: ["React", "Node.js", "Tailwind CSS", "Vercel", "REST API"],
    role: "Full Stack Developer & Systems Engineer",
    year: "2024",
    image: "/images/projects/dentiva.jpg",
    liveUrl: "https://dentiva-team-appointment-final-upda.vercel.app/",
    challenge:
      "Dentiva was losing high-value patient appointments because prospective patients were forced to call during clinic operating hours. The clinic needed an automated 24/7 booking engine that instilled immediate clinical confidence.",
    solution:
      "We engineered a multi-step interactive booking flow allowing patients to select doctors, procedures, and preferred consultation time slots. Coupled with clean medical typography and local SEO optimization, online patient bookings scaled rapidly.",
    deliverables: [
      "Interactive Multi-Step Appointment Booking Engine",
      "Doctor Profile Directory & Procedure Specialty Guides",
      "Automated Booking Confirmation & Calendar Notification",
      "Local Clinic SEO & Google Maps Entity Optimization",
      "Patient FAQ & Treatment Preparation Resource Center",
    ],
    keyFeatures: [
      {
        title: "3-Step Slot Booking Flow",
        description: "Intuitive appointment wizard selecting specialty, doctor, and date/time without account creation friction.",
      },
      {
        title: "Calm Clinical Trust Architecture",
        description: "Restrained aesthetics with verified credentials and transparent procedure breakdowns.",
      },
      {
        title: "Mobile Emergency Call & Location Bar",
        description: "Sticky mobile navigation enabling urgent one-tap patient calls and GPS directions.",
      },
    ],
    architecture: [
      "Frontend: React + Tailwind CSS with accessibility-first forms.",
      "Backend: Node.js API endpoints handling schedule slots and notifications.",
      "Hosting: Vercel Edge with zero-downtime uptime guarantee.",
    ],
  },
  {
    id: "review-funnel",
    slug: "review-funnel",
    number: "05",
    title: "REVIEW FUNNEL",
    client: "Review Funnel SaaS Platform",
    category: "SaaS & Growth Tools",
    industrySlug: "saas-growth-tools",
    serviceSlugs: ["web-development", "frontend-engineering", "performance-optimization"],
    tagline: "Automated reputation routing system directing 5-star reviews to Google while intercepting complaints.",
    description:
      "A conversion-engineered SaaS platform that routes satisfied customers directly to public Google Business profiles while capturing negative feedback privately for internal resolution.",
    impact: "94% 5-Star Public Routing Rate",
    technologies: ["React", "Node.js", "JavaScript", "Vercel", "Tailwind CSS"],
    role: "Full Stack Product Developer",
    year: "2025",
    image: "/images/projects/review-funnel.jpg",
    liveUrl: "https://review-funnel-pearl.vercel.app/",
    challenge:
      "Local businesses and multi-location brands were suffering from random 1-star public reviews left by frustrated customers who simply wanted direct manager attention. Meanwhile, hundreds of happy customers never bothered to post reviews on Google.",
    solution:
      "We built a lightweight, ultra-fast review collection funnel. A clean, single-link experience prompts customers to rate their experience: ratings of 4 or 5 stars immediately trigger the Google Review dialog, while ratings below 4 open a private feedback form sent directly to management.",
    deliverables: [
      "Dynamic Star-Rating Classification Logic",
      "Direct Google Review API Redirect Engine",
      "Private Internal Feedback Capture & Email Alerting",
      "Mobile-First Responsive Interface for QR Code Scanning",
      "Shareable Link & Print-Ready QR Code Assets",
    ],
    keyFeatures: [
      {
        title: "Smart Sentiment Routing",
        description: "Automated bifurcated logic directing positive ratings to Google and negative ratings to private resolution.",
      },
      {
        title: "Zero-Friction Customer Experience",
        description: "No login or app install required; loads in under 500ms on smartphone QR scans.",
      },
      {
        title: "Instant Merchant Alerting",
        description: "Real-time dispatch of customer complaints to business owners before damage occurs publicly.",
      },
    ],
    architecture: [
      "Frontend: Pure React with zero bloated UI libraries for maximum loading speed.",
      "Logic: Client-side routing with Node.js email dispatch.",
      "Hosting: Vercel serverless edge functions.",
    ],
  },
  {
    id: "property-broker",
    slug: "property-broker",
    number: "06",
    title: "ABBY REAL ESTATE",
    client: "Abby Real Estate & Luxury Brokerage",
    category: "Real Estate & PropTech",
    industrySlug: "construction-real-estate",
    serviceSlugs: ["web-development", "ui-ux-implementation", "frontend-engineering"],
    tagline: "Bespoke property brokerage platform built for luxury property dealers and high-net-worth investors.",
    description:
      "A premium property listing and brokerage platform built for real estate agents and luxury dealers. Features interactive search, buy/rent filters, property spec sheets, and direct broker consultation flows.",
    impact: "Instant Consultation Booking",
    technologies: ["React", "Next.js", "Tailwind CSS", "Vercel", "TypeScript"],
    role: "Full Stack Developer & Product Designer",
    year: "2026",
    image: "/images/projects/property-broker.jpg",
    liveUrl: "https://property-broker-three.vercel.app/",
    challenge:
      "Luxury real estate transactions demand an aesthetic standard far above standard mass-market property portals. High-net-worth clients expect bespoke visual framing, clear architectural details, and effortless contact options without public price spam.",
    solution:
      "We built a dark luxury real estate platform featuring high-contrast typography, interactive property filter matrices (price, location, bedroom count, property type), and instant broker consultation drawers.",
    deliverables: [
      "Luxury Property Listing & Detail Architecture",
      "Interactive Buy / Rent Filter Matrix",
      "High-Resolution Property Gallery & Floor Plan Viewer",
      "Direct Broker WhatsApp & Consultation Request Drawer",
      "Mobile Responsive Viewport with Fast Touch Gestures",
    ],
    keyFeatures: [
      {
        title: "Bespoke Luxury Property Cards",
        description: "Rich metadata displaying square footage, price per sq ft, amenities, and floor plans.",
      },
      {
        title: "Dynamic Buy / Rent Toggle",
        description: "Seamless switching between acquisition and leasing portfolios without page reloads.",
      },
      {
        title: "Private Broker Consultation Flow",
        description: "One-click scheduling for private walkthroughs and investment prospectuses.",
      },
    ],
    architecture: [
      "Frontend: React 19 + Next.js architecture with Tailwind CSS.",
      "State Management: Fast client-side filter state with responsive drawer components.",
      "Deployment: Globally cached on Vercel.",
    ],
  },
  {
    id: "sample-video",
    slug: "sample-video",
    number: "07",
    title: "SAMPLE VIDEO",
    client: "Sample Video Streaming & Creator Studio",
    category: "Video & Streaming Media",
    industrySlug: "creative-agencies",
    serviceSlugs: ["creative-web-experiences", "frontend-engineering", "performance-optimization"],
    tagline: "High-conversion video and streaming platform with scroll-stopping vertical reels.",
    description:
      "A video platform built with scroll-stopping vertical reels, high-definition streaming embeds, and direct client conversion pipelines.",
    impact: "3.8x Video Playthrough Rate",
    technologies: ["React", "Next.js", "Tailwind CSS", "Vercel", "Video Streaming"],
    role: "Lead Frontend & Media Developer",
    year: "2026",
    image: "/images/projects/sample-video.png",
    liveUrl: "https://nev-sample-vid.vercel.app/",
    challenge:
      "High-resolution video showreels often suffer from slow buffering and high visitor bounce rates on mobile networks.",
    solution:
      "We engineered a lightweight streaming framework with lazy-loaded video previews, custom playback controls, and friction-free inquiry funnels.",
    deliverables: [
      "High-Definition Video Streaming Architecture",
      "Scroll-Stopping Vertical Reel Grid",
      "Custom Media Controls & Fullscreen Modal",
      "Mobile-Optimized Touch Gestures",
      "Direct Client Inquiry Pipeline",
    ],
    keyFeatures: [
      {
        title: "Instant Video Streaming",
        description: "Edge-cached video delivery ensuring zero buffering across mobile cellular networks.",
      },
      {
        title: "Creator Showcase Grid",
        description: "Organized portfolio layout separating vertical short-form reels from cinematic long-form projects.",
      },
    ],
    architecture: [
      "Frontend: React 19 with GPU-accelerated video containers.",
      "CDN: Vercel Global Edge Network with optimized media caching.",
      "Performance: 60fps playback with zero frame drops.",
    ],
  },
  {
    id: "santha-editing",
    slug: "santha-editing",
    number: "08",
    title: "SANTHA EDITING",
    client: "Santha Video Production & Editing Studio",
    category: "Creator & Video Production",
    industrySlug: "creative-agencies",
    serviceSlugs: ["creative-web-experiences", "ui-ux-implementation", "web-development"],
    tagline: "Freelance video editor portfolio featuring curated project galleries and automated booking.",
    description:
      "A freelance video editor portfolio featuring project galleries, service tier breakdowns, and a clean path to book commercial projects.",
    impact: "+210% Client Booking Conversion",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Vercel", "GSAP"],
    role: "Lead Creative Developer",
    year: "2026",
    image: "/images/projects/santha-editing.png",
    liveUrl: "https://santha-editing-service.vercel.app/",
    challenge:
      "Creative video editors lose clients when pricing, service deliverables, and past proof are not clearly presented in a unified experience.",
    solution:
      "We built a sleek, dark editorial portfolio showcasing client transformations, editing before/after comparisons, and a streamlined 3-step booking funnel.",
    deliverables: [
      "Cinematic Video Gallery & Modal Player",
      "Transparent Service Tier Matrix",
      "Interactive Client Testimonial Slider",
      "One-Click Booking & WhatsApp Handover",
      "Mobile Responsive Media Grid",
    ],
    keyFeatures: [
      {
        title: "Interactive Reel Showcase",
        description: "High-impact video previews with instantaneous playback on hover.",
      },
      {
        title: "Transparent Pricing Tiers",
        description: "Clear package breakdowns eliminating back-and-forth pricing negotiations.",
      },
    ],
    architecture: [
      "Frontend: React with smooth CSS transform pipelines.",
      "Styling: Bespoke Tailwind utility system with high-contrast obsidian tones.",
      "Hosting: Edge-delivered on Vercel.",
    ],
  },
  {
    id: "aqua-plumbing",
    slug: "aqua-plumbing",
    number: "09",
    title: "AQUA PLUMBING",
    client: "Aqua Plumbing & Heating Solutions",
    category: "Local Services & Lead-Gen",
    industrySlug: "healthcare-clinics",
    serviceSlugs: ["web-development", "technical-seo", "performance-optimization"],
    tagline: "Local business lead-generation engine designed to get the phone ringing.",
    description:
      "A local plumber website designed to get the phone to ring — featuring an interactive quote form front and centre, plain pricing, and rapid mobile booking.",
    impact: "+185% Monthly Inbound Calls",
    technologies: ["React", "Next.js", "Tailwind CSS", "Vercel", "Local SEO Schema"],
    role: "Full Stack Developer & SEO Strategist",
    year: "2026",
    image: "/images/projects/aqua-plumbing.png",
    liveUrl: "https://aqua-plumbing-nev.vercel.app/",
    challenge:
      "Local trade businesses lose urgent customer inquiries when their website takes longer than 2 seconds to load or buries phone numbers.",
    solution:
      "We built an ultra-fast, mobile-first lead generation platform with sticky click-to-call bars, transparent service rate cards, and an instant quote form.",
    deliverables: [
      "High-Converting Quote Calculation Form",
      "Sticky Mobile Emergency Call & Location Bar",
      "Local Service Area SEO Matrix (JSON-LD LocalBusiness)",
      "Verified Customer Reviews & Trust Badges",
      "Sub-600ms Mobile Page Load Speed",
    ],
    keyFeatures: [
      {
        title: "Instant Quote Engine",
        description: "30-second inquiry form capturing service category, emergency status, and contact details.",
      },
      {
        title: "One-Tap Emergency Calling",
        description: "Prominent floating mobile action buttons routing urgent service calls directly to dispatch.",
      },
    ],
    architecture: [
      "Frontend: Next.js + React with zero bloat for instant mobile loading.",
      "SEO: Rich LocalBusiness and Service schema for top Google Maps positioning.",
      "Hosting: Vercel serverless edge network.",
    ],
  },
  {
    id: "silvane-estates",
    slug: "silvane-estates",
    number: "10",
    title: "SILVANE ESTATES",
    client: "Silvane Private Architectural Residences",
    category: "Luxury Real Estate & Estates",
    industrySlug: "construction-real-estate",
    serviceSlugs: ["creative-web-experiences", "ui-ux-implementation", "frontend-engineering"],
    tagline: "Private architectural residences presented through slow editorial pacing and quiet luxury.",
    description:
      "Private architectural residences — slow editorial pacing, museum prose, quiet luxury, and discreet private acquisition flows.",
    impact: "99+ Core Web Vitals • Private Acquisitions",
    technologies: ["React", "Next.js", "Tailwind CSS", "Vercel", "TypeScript"],
    role: "Lead Architectural & UX Engineer",
    year: "2026",
    image: "/images/projects/silvane-estates.png",
    liveUrl: "https://silvane-nev.vercel.app/",
    challenge:
      "Ultra-luxury architectural estates require museum-grade editorial pacing and high confidentiality rather than mass-market listing spam.",
    solution:
      "We engineered a museum-grade digital showcase utilizing warm neutral palettes, serene typography pairing, and private investor dossier gates.",
    deliverables: [
      "Editorial Architectural Portfolio Layout",
      "High-Resolution Residence Lookbook & Spec Sheets",
      "Confidential Investor Inquiry & Private Tour Flow",
      "Custom Typography & Smooth Ambient Parallax",
      "Sub-Second Edge Cached Experience",
    ],
    keyFeatures: [
      {
        title: "Quiet Luxury Aesthetic",
        description: "Editorial typography with spacious grid rhythm and serene neutral color palette.",
      },
      {
        title: "Private Acquisition Gate",
        description: "Confidential inquiry mechanism for verified high-net-worth buyers.",
      },
    ],
    architecture: [
      "Frontend: React 19 + Tailwind CSS with responsive luxury glass styling.",
      "Typography: Editorial serif accents paired with modern minimalist sans.",
      "Hosting: Globally edge-served on Vercel.",
    ],
  },
  {
    id: "kevin-vfx",
    slug: "kevin-vfx",
    number: "11",
    title: "KEVIN VFX",
    client: "Kevin George VFX & Post-Production",
    category: "VFX & Visual Media",
    industrySlug: "creative-agencies",
    serviceSlugs: ["creative-web-experiences", "frontend-engineering", "performance-optimization"],
    tagline: "Personal brand and high-craft showreel showcase for an elite visual effects artist.",
    description:
      "Personal brand for a visual effects editor — featuring long-form showreels, breakdown reels, and one clear commercial booking path.",
    impact: "4.5x Commercial Inquiry Rate",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Vercel", "Video CDN"],
    role: "Creative Web Engineer",
    year: "2026",
    image: "/images/projects/kevin-vfx.png",
    liveUrl: "https://www.kevingeorgevfx.com/",
    challenge:
      "VFX artists must present heavy visual effects footage without UI lag, dropped frames, or complex booking steps.",
    solution:
      "We created a dark luxury portfolio with hardware-accelerated video modal previews, project breakdown timelines, and transparent commercial hiring rates.",
    deliverables: [
      "Hardware-Accelerated Showreel Viewer",
      "Before & After VFX Breakdown Sliders",
      "Commercial Retainer & Project Booking Funnel",
      "Dark Obsidian Glass Aesthetic",
      "Mobile-Optimized Touch Video Player",
    ],
    keyFeatures: [
      {
        title: "Cinematic Showreel Hub",
        description: "Zero-latency high-definition video modal viewer with custom player controls.",
      },
      {
        title: "Direct Retainer Flow",
        description: "One-click scheduling bridge for commercial agencies and studio producers.",
      },
    ],
    architecture: [
      "Frontend: React with optimized video playback buffers.",
      "Hosting: Vercel Global Edge CDN.",
      "Performance: 60fps smooth animations across desktop and mobile.",
    ],
  },
  {
    id: "ai-startup-saas",
    slug: "ai-startup-saas",
    number: "12",
    title: "AI STARTUP SAAS",
    client: "Next-Gen AI Intelligence Platform",
    category: "SaaS & AI Technology",
    industrySlug: "saas-growth-tools",
    serviceSlugs: ["web-development", "frontend-engineering", "ui-ux-implementation"],
    tagline: "Modern AI SaaS product landing with interactive feature breakdowns and launch funnels.",
    description:
      "Modern AI product landing — clean feature story, sharp messaging, and high-converting acquisition path built for product launch.",
    impact: "+260% Beta Waitlist Signups",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    role: "Full Stack SaaS Engineer",
    year: "2026",
    image: "/images/projects/ai-startup-saas.png",
    liveUrl: "https://ai-startup-saas.vercel.app/",
    challenge:
      "Early-stage AI products frequently struggle to communicate their core value quickly to prospective users.",
    solution:
      "We designed a crisp, high-clarity SaaS landing page featuring interactive live feature demos, transparent ROI metrics, and single-click signup onboarding.",
    deliverables: [
      "High-Converting SaaS Landing Page Architecture",
      "Interactive AI Feature Breakdown & Live Demos",
      "Tiered Subscription & Pricing Matrix",
      "Automated Beta Waitlist & Stripe-Ready Flow",
      "SEO-Optimized SaaS Marketing Engine",
    ],
    keyFeatures: [
      {
        title: "Interactive Feature Walkthrough",
        description: "Hands-on UI demonstrations highlighting core productivity workflows.",
      },
      {
        title: "High-Converting Waitlist Funnel",
        description: "Frictionless email capture with automated referral incentives.",
      },
    ],
    architecture: [
      "Frontend: React 19 + TypeScript with Tailwind CSS.",
      "Edge Functions: Serverless API endpoints for real-time waitlist processing.",
      "Deployment: Vercel Edge Network with sub-second worldwide loading.",
    ],
  },
];

export const featuredProject =
  projects.find((project) => project.featured) ?? projects[0];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug || p.id === slug);
}

export function isFilled(value: string) {
  return Boolean(value) && value !== "[PLACEHOLDER]";
}
