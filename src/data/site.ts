/**
 * Brand, copy, portrait, socials, and SEO for CodeWithAbby Digital Studio.
 */
export const site = {
  brand: "CODEWITHABBY",
  name: "Abby",
  fullName: "Syed Abbas Ali",
  url: "https://codewithabby-portfolio.vercel.app",
  email: "codewithabby07@gmail.com",
  phone: "+91 7055859219",
  whatsapp: "https://wa.me/917055859219",
  jobTitle: "Founder & Lead Full Stack Developer | CodeWithAbby Studio",
  locale: "en_US",
  title: "CodeWithAbby — Custom Web Development & Digital Studio | Syed Abbas Ali",
  description:
    "CodeWithAbby is a boutique custom web development studio founded by Syed Abbas Ali. Engineering high-performance React & Next.js websites, WebGL experiences, and conversion-focused web applications for businesses in the US, UK, UAE, Canada, Australia, India, and worldwide.",
  portrait: {
    src: "/images/portrait.jpg",
    alt: "Portrait of Syed Abbas Ali (Abby), Founder & Lead Developer at CodeWithAbby.",
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
    eyebrow: "PREMIUM WEB & DIGITAL STUDIO",
    tagline: "High-craft digital platforms engineered for speed, authority, and conversion.",
    founderBadge: "FOUNDED BY SYED ABBAS ALI",
    featuredLabel: "Selected Work",
  },
  marquee: [
    "Full-Stack Web Development",
    "Bespoke Frontend Engineering",
    "Creative WebGL & 3D Experiences",
    "Editorial UI/UX Architecture",
    "Technical SEO & Schema",
    "Sub-Second Performance Optimization",
  ],
  about: {
    label: "About the Studio.",
    headline: ["HIGH-CRAFT CODE.", "EDITORIAL PRECISION.", "ZERO AGENCY BLOAT."],
    body: "CodeWithAbby is a modern boutique digital studio founded by Syed Abbas Ali. We bridge the gap between uncompromising aesthetic design and senior-level software engineering. We don't use generic templates or outsource work to juniors—every line of code is purpose-built to give your brand an unfair digital advantage.",
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
    kicker: "Direct Founder Consultation",
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
    "United States",
    "United Kingdom",
    "United Arab Emirates",
    "Canada",
    "Australia",
    "India",
    "Europe",
    "Worldwide",
  ],
  footerNote: "Serving Clients Across the US, UK, UAE, Australia, Canada, India & Worldwide",
  availabilityStatus: "Available for Q2 2026 Studio Projects",
  googleVerification: "google06b6930185313ea1",
  bingVerification: "",
} as const;

export type NavItem = (typeof site.nav)[number];
export type SocialLink = (typeof site.socials)[number];

