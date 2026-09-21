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
    category: "Web Development",
    description: "[PLACEHOLDER]",
    technologies: [],
    role: "[PLACEHOLDER]",
    year: "",
    image: "/images/projects/alp-buildcon.jpg",
    liveUrl: "",
    caseStudyUrl: "",
    featured: true,
  },
  {
    id: "creavo",
    number: "02",
    title: "CREAVO",
    category: "Web Development",
    description: "[PLACEHOLDER]",
    technologies: [],
    role: "[PLACEHOLDER]",
    year: "",
    image: "/images/projects/creavo.jpg",
    liveUrl: "",
    caseStudyUrl: "",
  },
  {
    id: "dentiva",
    number: "03",
    title: "DENTIVA",
    category: "Web Development",
    description: "[PLACEHOLDER]",
    technologies: [],
    role: "[PLACEHOLDER]",
    year: "",
    image: "/images/projects/dentiva.jpg",
    liveUrl: "",
    caseStudyUrl: "",
  },
  {
    id: "mainframe",
    number: "04",
    title: "MAINFRAME",
    category: "Web Development",
    description: "[PLACEHOLDER]",
    technologies: [],
    role: "[PLACEHOLDER]",
    year: "",
    image: "/images/projects/mainframe.jpg",
    liveUrl: "",
    caseStudyUrl: "",
  },
];

export const featuredProject =
  projects.find((project) => project.featured) ?? projects[0];

export function isFilled(value: string) {
  return Boolean(value) && value !== "[PLACEHOLDER]";
}
