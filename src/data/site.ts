/**
 * Brand, copy, portrait, socials, and SEO for CodeWithAbby Digital Studio.
 */
export const site = {
  brand: "CODEWITHABBY",
  name: "Abby",
  fullName: "Syed Abbas Ali",
  url: "https://codwithabby.vercel.app",
  email: "codewithabby07@gmail.com",
  phone: "+91 7055859219",
  whatsapp: "https://wa.me/917055859219",
  jobTitle: "Founder & Lead Web Developer | CodeWithAbby (Delhi, India)",
  locale: "en_US",
  title: "CodeWithAbby — Web Developer in Delhi | Custom Business Websites",
  description:
    "Custom web development studio in Delhi by Syed Abbas Ali. Engineering high-performance React & Next.js business websites and bespoke web applications.",
  portrait: {
    src: "/images/portrait.jpg",
    alt: "Portrait of Syed Abbas Ali (Abby), Founder & Lead Web Developer at CodeWithAbby, Delhi, India.",
    width: 768,
    height: 1376,
  },
  nav: [
    { label: "Home", href: "/", id: "home" },
    { label: "Work", href: "/work", id: "work" },
    { label: "Services", href: "/services", id: "services" },
    { label: "Industries", href: "/industries", id: "industries" },
    { label: "About", href: "/about", id: "about" },
    { label: "Team", href: "/team", id: "team" },
    { label: "Blog", href: "/blog", id: "blog" },
    { label: "Contact", href: "/contact", id: "contact" },
  ],
  hero: {
    year: "2026",
    eyebrow: "WEB DEVELOPER & DIGITAL STUDIO • DELHI, INDIA",
    tagline: "High-craft business websites & digital platforms engineered for speed, authority, and conversion.",
    founderBadge: "FOUNDED BY SYED ABBAS ALI • DELHI, INDIA",
    featuredLabel: "Selected Work",
  },
  marquee: [
    "Business Website Development",
    "Custom React & Next.js Engineering",
    "Creative WebGL & 3D Experiences",
    "Editorial UI/UX & Website Design",
    "Technical SEO & Schema Architecture",
    "Sub-Second Performance Optimization",
  ],
  about: {
    label: "About the Studio.",
    headline: ["HIGH-CRAFT CODE.", "EDITORIAL PRECISION.", "ZERO AGENCY BLOAT."],
    body: "CodeWithAbby is an independent web development studio founded by Syed Abbas Ali in Delhi, India. We bridge the gap between refined visual design and senior-level software engineering. We don't use generic templates or outsource work to juniors—every line of code is purpose-built to give your business an authoritative digital presence that loads instantly and converts visitors.",
    still: {
      src: "/images/about-still.jpg",
      alt: "Architectural shadow on dark minimalist stone.",
    },
  },
  cta: {
    label: "Start a Project.",
    lines: ["HAVE A BIG VISION?", "LET'S BUILD SOMETHING", "ICONIC TOGETHER."],
    button: "Initiate Project Enquiry",
  },
  contact: {
    label: "Direct Studio Inquiries",
    title: "Initiate a Project",
    kicker: "Direct Founder Consultation • Delhi, India & Worldwide",
    background: "/images/contact-bg.jpg",
    success:
      "Thank you for contacting CodeWithAbby. Syed Abbas Ali will personally review your brief and reply within 24 hours.",
    error: "Something went wrong. Please check your details or connect with us directly via WhatsApp.",
  },
  socials: [
    { label: "WhatsApp", href: "https://wa.me/917055859219" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/abby-undefined-436951433/" },
    { label: "GitHub", href: "https://github.com/codewithabby07" },
    { label: "Instagram", href: "https://www.instagram.com/codewithabby07/" },
    { label: "X", href: "https://x.com/codewithabby07" },
  ],
  targetMarkets: [
    "Delhi / NCR",
    "Mumbai",
    "Bangalore",
    "India",
    "United States",
    "United Kingdom",
    "United Arab Emirates",
    "Canada",
    "Australia",
    "Worldwide",
  ],
  footerNote: "Web Developer in Delhi, India · Serving Businesses in Delhi NCR, Across India & Worldwide",
  availabilityStatus: "Available for Q2 2026 Studio Projects",
  googleVerification: "google06b6930185313ea1",
  bingVerification: "",
} as const;

export type NavItem = (typeof site.nav)[number];
export type SocialLink = (typeof site.socials)[number];

