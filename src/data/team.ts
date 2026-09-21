export type TeamMember = {
  name: string;
  role: string;
  location: string;
  bio: string;
  skills: string[];
  image: string;
  socials: {
    label: string;
    href: string;
  }[];
};

export const founder: TeamMember = {
  name: "Syed Abbas Ali (Abby)",
  role: "Founder & Lead Full Stack Developer",
  location: "Delhi, India • Working Worldwide",
  bio: "Abby is the founder and technical director behind CodeWithAbby. With a deep passion for high-speed systems and editorial aesthetics, Abby directs architecture, frontend development, and delivery on every studio project. No account managers, no layers of bureaucracy—just direct engineering craft that ships in days, not months.",
  skills: [
    "Full-Stack Architecture",
    "React & Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Creative WebGL & Three.js",
    "Technical SEO",
  ],
  image: "/images/portrait.jpg",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/abby-undefined-436951433/" },
    { label: "GitHub", href: "https://github.com/codewithabby07" },
    { label: "X", href: "https://x.com/codewithabby07" },
    { label: "Instagram", href: "https://www.instagram.com/codewithabby07/" },
  ],
};

export const studioPhilosophy = {
  headline: "DIRECT BUILDER ENGAGEMENT. ZERO AGENCY BLOAT.",
  pillars: [
    {
      number: "01",
      title: "Direct Founder Engineering",
      description:
        "When you work with CodeWithAbby, you interface directly with the lead engineer building your product. There are no junior hand-offs, no account managers distorting requirements, and no wasted communication cycles.",
    },
    {
      number: "02",
      title: "Bespoke Code Over Disposable Templates",
      description:
        "We reject bloated WordPress themes and fragile page builders. Every project is engineered cleanly in React, TypeScript, and Tailwind CSS for instant speeds, clean security, and total intellectual property ownership.",
    },
    {
      number: "03",
      title: "Speed as a Moral Obligation",
      description:
        "Modern agencies take 3 to 6 months to ship mediocre websites. We operate with extreme technical focus, shipping custom, high-converting digital products in 6 to 14 business days without cutting corners on craft.",
    },
    {
      number: "04",
      title: "The Studio Collective Model",
      description:
        "For specialized needs like cinematic 3D assets, multi-camera video production, or specialized copywriting, we draw on a tight, trusted network of creative specialists while keeping core engineering unified under one roof.",
    },
  ],
};
