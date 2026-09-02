export type Service = {
  number: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: "WEB DEVELOPMENT",
    description:
      "Complete websites with clean architecture, considered UI, and production-ready engineering.",
  },
  {
    number: "02",
    title: "FRONTEND DEVELOPMENT",
    description:
      "Interfaces in React and TypeScript that feel responsive, accessible, and precise.",
  },
  {
    number: "03",
    title: "UI/UX IMPLEMENTATION",
    description:
      "Design translated into high-fidelity frontend — type, spacing, motion, and states included.",
  },
  {
    number: "04",
    title: "CREATIVE WEB EXPERIENCES",
    description:
      "Interactive pages with editorial layout, considered motion, and a clear point of view.",
  },
  {
    number: "05",
    title: "TECHNICAL SEO",
    description:
      "Semantic markup, metadata, structured data, and crawlable structure prepared for search.",
  },
  {
    number: "06",
    title: "PERFORMANCE OPTIMIZATION",
    description:
      "Fast loads, stable layout, and lean assets without sacrificing the design.",
  },
];

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "MongoDB",
  "REST APIs",
  "Git",
  "Vercel",
] as const;
