export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  role: string;
  year: string;
  image: string;
  liveUrl: string;
  caseStudyUrl: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "alp-buildcon",
    number: "01",
    title: "ALP BUILDCON",
    category: "Construction & Real Estate",
    description:
      "A premium corporate website for ALP Buildcon — a construction & real estate company. Built with a strong editorial layout, bold typography, and a professional design system that reflects trust and authority in the sector.",
    technologies: ["React", "Tailwind CSS", "Next.js", "Vercel"],
    role: "Full Stack Developer",
    year: "2025",
    image: "/images/projects/alp-buildcon.jpg",
    liveUrl: "https://alp-buildcon-1.vercel.app/",
    caseStudyUrl: "",
    featured: true,
  },
  {
    id: "creavo",
    number: "02",
    title: "CREAVO",
    category: "Creative Agency",
    description:
      "A modern, high-impact website for Creavo — a creative agency. Designed to communicate creativity and technical excellence through bold visuals, smooth interactions, and a refined content structure.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Vercel"],
    role: "Full Stack Developer",
    year: "2025",
    image: "/images/projects/creavo.jpg",
    liveUrl: "https://creavo-steel.vercel.app/",
    caseStudyUrl: "",
  },
  {
    id: "zainca",
    number: "03",
    title: "ZAINCA",
    category: "E-Commerce & Lifestyle",
    description:
      "A sleek, conversion-focused website for Zainca — a lifestyle and e-commerce brand. Built with a focus on clean UX, product presentation, and a seamless browsing experience across all devices.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    role: "Full Stack Developer",
    year: "2025",
    image: "/images/projects/mainframe.jpg",
    liveUrl: "https://zainca-website-2.vercel.app/",
    caseStudyUrl: "",
  },
  {
    id: "dentiva",
    number: "04",
    title: "DENTIVA",
    category: "Healthcare & Dental",
    description:
      "A full-featured dental clinic website with an online appointment booking system for Dentiva. Includes a clean patient-facing UI, booking flow, and a professional design that builds trust with patients.",
    technologies: ["React", "Node.js", "Tailwind CSS", "Vercel"],
    role: "Full Stack Developer",
    year: "2024",
    image: "/images/projects/dentiva.jpg",
    liveUrl: "https://dentiva-team-appointment-final-upda.vercel.app/",
    caseStudyUrl: "",
  },
  {
    id: "review-funnel",
    number: "05",
    title: "REVIEW FUNNEL",
    category: "SaaS & Growth Tools",
    description:
      "A smart review collection funnel tool — a SaaS product designed to help businesses automatically gather positive Google reviews and manage negative feedback privately, driving reputation growth.",
    technologies: ["React", "Node.js", "JavaScript", "Vercel"],
    role: "Full Stack Developer",
    year: "2025",
    image: "/images/projects/alp-buildcon.jpg",
    liveUrl: "https://review-funnel-pearl.vercel.app/",
    caseStudyUrl: "",
  },
];

export const featuredProject =
  projects.find((project) => project.featured) ?? projects[0];

export function isFilled(value: string) {
  return Boolean(value) && value !== "[PLACEHOLDER]";
}

