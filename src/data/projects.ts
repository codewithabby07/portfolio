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
];

export const featuredProject =
  projects.find((project) => project.featured) ?? projects[0];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug || p.id === slug);
}

export function isFilled(value: string) {
  return Boolean(value) && value !== "[PLACEHOLDER]";
}
