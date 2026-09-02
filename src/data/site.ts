/**
 * Brand, copy, portrait, socials, and SEO.
 * Project list lives in ./projects.ts
 * Services and skills live in ./services.ts
 * Replace /public/images/portrait.jpg without changing layout.
 */
export const site = {
  brand: "CODEWITHABBY",
  name: "Abby",
  url: "https://codewithabby.com",
  email: "codewithabby07@gmail.com",
  phone: "+91 7055859219",
  whatsapp: "https://wa.me/917055859219",
  jobTitle: "Full Stack Developer & Web Architect",
  locale: "en_US",
  title: "CODEWITHABBY — Abby | High-Ticket Full Stack Developer & Web Architect",
  description:
    "CODEWITHABBY is the portfolio of Abby — a Delhi-based Full Stack Developer & Web Architect with 3 years of experience engineering high-converting websites, web apps, and bespoke digital experiences.",
  portrait: {
    src: "/images/portrait.jpg",
    alt: "Portrait of Abby, Full Stack Developer based in Delhi.",
    width: 768,
    height: 1376,
  },
  nav: [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Work", href: "#work", id: "work" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Contact", href: "#contact", id: "contact" },
  ],
  hero: {
    year: "2026",
    tagline:
      "ENGINEERING HIGH-CONVERTING DIGITAL EXPERIENCES FOR AMBITIOUS BRANDS WORLDWIDE",
    featuredLabel: "Featured",
  },
  industries: [
    "Real Estate & Construction",
    "Healthcare & Clinics",
    "SaaS & Tech Products",
    "Creative Agencies",
    "E-Commerce & Brands",
  ],
  about: {
    label: "Introduction.",
    headline: ["HIGH-TICKETS WEBSITES", "BUILT FOR SPEED,", "DESIGNED TO CONVERT."],
    body: "Abby is a Delhi-based Full Stack Developer & Web Architect with 3 years of experience crafting premium websites, scalable web applications, and conversion-focused digital systems. Every project is engineered for speed, high conversion, and flawless aesthetics.",
    still: {
      src: "/images/about-still.jpg",
      alt: "Sunlit terracotta wall with a sharp geometric shadow.",
    },
  },
  marquee: [
    "Full Stack Development",
    "High-Converting UI/UX",
    "React & Next.js",
    "Node.js & Custom APIs",
    "Performance Optimization (99+)",
    "Bespoke Web Architecture",
  ],
  cta: {
    label: "Next.",
    lines: ["LET'S BUILD", "YOUR NEXT", "BIG PROJECT."],
    button: "Get in touch",
  },
  contact: {
    label: "Contact",
    title: "Reach out",
    kicker: "Start a project",
    background: "/images/contact-bg.jpg",
    success:
      "Thanks for reaching out! I'll reply to your message within 24 hours.",
    error: "Something went wrong. Please check the form and try again.",
  },
  socials: [
    { label: "GitHub", href: "https://github.com/codewithabby07" },
    { label: "WhatsApp", href: "https://wa.me/917055859219" },
    { label: "LinkedIn", href: "" },
    { label: "Instagram", href: "" },
    { label: "X", href: "" },
  ],
  footerNote: "Available for select projects · Delhi, India · +91 7055859219",
} as const;

export type NavItem = (typeof site.nav)[number];
export type SocialLink = (typeof site.socials)[number];

