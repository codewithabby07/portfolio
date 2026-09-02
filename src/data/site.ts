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
  jobTitle: "Full Stack Developer",
  locale: "en_US",
  title: "CODEWITHABBY — Abby | Full Stack Developer · Delhi",
  description:
    "CODEWITHABBY is the portfolio of Abby — a Delhi-based Full Stack Developer with 3 years of experience building premium websites, scalable web apps, and bespoke digital experiences.",
  ogImage: "/images/og.jpg",
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
      "I BUILD PREMIUM FULL STACK EXPERIENCES THAT ARE SHARP, SCALABLE AND BUILT TO LAST",
    featuredLabel: "Featured",
  },
  about: {
    label: "Introduction.",
    headline: ["FULL STACK", "BUILT IN DELHI,", "BUILT FOR THE WORLD."],
    body: "Abby is a Delhi-based Full Stack Developer with 3 years of experience crafting premium websites, scalable web applications, and technically refined digital products. Every project is approached with precision, a sharp eye for design, and a commitment to clean, production-ready code.",
    still: {
      src: "/images/about-still.jpg",
      alt: "Sunlit terracotta wall with a sharp geometric shadow.",
    },
  },
  marquee: [
    "Full Stack Development",
    "React & Next.js",
    "UI/UX Implementation",
    "Node.js & APIs",
    "Creative Web Experiences",
    "Performance Optimization",
  ],
  cta: {
    label: "Next.",
    lines: ["LET'S BUILD", "SOMETHING", "WORTH SEEING."],
    button: "Get in touch",
  },
  contact: {
    label: "Contact",
    title: "Reach out",
    kicker: "Start a project",
    background: "/images/contact-bg.jpg",
    success:
      "Thanks for reaching out! I'll get back to you within 24 hours.",
    error: "Something went wrong. Please check the form and try again.",
  },
  socials: [
    { label: "GitHub", href: "https://github.com/codewithabby07" },
    { label: "LinkedIn", href: "" },
    { label: "Instagram", href: "" },
    { label: "X", href: "" },
  ],
  footerNote: "Available for selected projects · Delhi, India",
} as const;

export type NavItem = (typeof site.nav)[number];
export type SocialLink = (typeof site.socials)[number];

