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
  email: "",
  jobTitle: "Web Developer",
  locale: "en_US",
  title: "CODEWITHABBY — Abby | Premium Websites & Frontend Experiences",
  description:
    "CODEWITHABBY is the portfolio of Abby — building premium websites, modern frontend experiences, and technically refined digital work.",
  ogImage: "/images/og.jpg",
  portrait: {
    src: "/images/portrait.jpg",
    alt: "Portrait of Abby, web developer.",
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
      "I BUILD PREMIUM DIGITAL EXPERIENCES THAT ARE SHARP, RESPONSIVE AND BUILT TO LAST",
    featuredLabel: "Featured",
  },
  about: {
    label: "Introduction.",
    headline: ["PREMIUM WEBSITES", "WITH PURPOSE", "AND PRECISION"],
    body: "Abby builds modern frontend experiences, responsive websites, and high-quality UI implementations. The work is focused on craft, clarity, and technical care.",
    still: {
      src: "/images/about-still.jpg",
      alt: "Sunlit terracotta wall with a sharp geometric shadow.",
    },
  },
  marquee: [
    "Web Development",
    "Frontend Development",
    "UI/UX Implementation",
    "Creative Web Experiences",
    "Technical SEO",
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
      "Thanks. Your message was validated and is ready — email delivery will be connected next.",
    error: "Something went wrong. Please check the form and try again.",
  },
  socials: [
    { label: "GitHub", href: "" },
    { label: "LinkedIn", href: "" },
    { label: "Instagram", href: "" },
    { label: "X", href: "" },
  ],
  footerNote: "Available for selected projects.",
} as const;

export type NavItem = (typeof site.nav)[number];
export type SocialLink = (typeof site.socials)[number];
