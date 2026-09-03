export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  impact: string;
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
      "Corporate website for ALP Buildcon, a construction and real estate company. Built with editorial layout, bold typography, and lead-capture integration.",
    impact: "+140% Lead Inquiries",
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
      "Website for Creavo, a creative agency. Designed around their brand identity — bold visuals, smooth transitions, and a content structure that reflects what they do.",
    impact: "",
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
      "E-commerce and lifestyle brand website for Zainca. Focused on product presentation, clean navigation, and a consistent browsing experience across devices.",
    impact: "",
    technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    role: "Full Stack Developer",
    year: "2025",
    image: "/images/projects/zainca.jpg",
    liveUrl: "https://zainca-website-2.vercel.app/",
    caseStudyUrl: "",
  },
  {
    id: "dentiva",
    number: "04",
    title: "DENTIVA",
    category: "Healthcare & Dental",
    description:
      "Full-featured dental clinic website with an online appointment booking system. Includes patient-facing UI, booking flow, and confirmation emails.",
    impact: "300+ Patient Bookings / Month",
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
      "A review collection tool that routes happy customers to Google and handles negative feedback privately. Built as a standalone SaaS product with a simple shareable link.",
    impact: "",
    technologies: ["React", "Node.js", "JavaScript", "Vercel"],
    role: "Full Stack Developer",
    year: "2025",
    image: "/images/projects/review-funnel.jpg",
    liveUrl: "https://review-funnel-pearl.vercel.app/",
    caseStudyUrl: "",
  },
];

export const featuredProject =
  projects.find((project) => project.featured) ?? projects[0];

export function isFilled(value: string) {
  return Boolean(value) && value !== "[PLACEHOLDER]";
}
