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
      "Complete websites from scratch: architecture, frontend, backend, and deployment.",
  },
  {
    number: "02",
    title: "FRONTEND DEVELOPMENT",
    description:
      "React and TypeScript interfaces that are responsive, accessible, and precise.",
  },
  {
    number: "03",
    title: "UI/UX IMPLEMENTATION",
    description:
      "Design translated to code: layout, typography, spacing, motion, and interactive states.",
  },
  {
    number: "04",
    title: "CREATIVE WEB EXPERIENCES",
    description:
      "Editorial layouts and interaction design for brands that want to stand out.",
  },
  {
    number: "05",
    title: "TECHNICAL SEO",
    description:
      "Semantic HTML, metadata, structured data, and site structure prepared for search engines.",
  },
  {
    number: "06",
    title: "PERFORMANCE OPTIMIZATION",
    description:
      "Faster load times, stable layout shifts, and leaner assets, without breaking the design.",
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
