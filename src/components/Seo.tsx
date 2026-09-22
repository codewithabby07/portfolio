import { site } from "@/data/site";
import { projects, isFilled } from "@/data/projects";
import { services } from "@/data/services";

export function Seo() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Syed Abbas Ali",
    alternateName: ["CodeWithAbby", "Abby"],
    jobTitle: "Founder & Lead Full Stack Developer",
    url: `${site.url}/`,
    image: `${site.url}${site.portrait.src}`,
    knowsAbout: [
      "Custom Web Development",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Technical SEO",
      "Core Web Vitals Optimization",
      "WebGL & Three.js",
      "Frontend Architecture",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Delhi",
      addressCountry: "IN",
    },
    sameAs: site.socials.map((s) => s.href),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CodeWithAbby",
    alternateName: site.brand,
    url: `${site.url}/`,
    description: site.description,
    inLanguage: "en-US",
    publisher: {
      "@type": "Person",
      name: "Syed Abbas Ali",
    },
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "CodeWithAbby",
    image: `${site.url}${site.portrait.src}`,
    url: `${site.url}/`,
    telephone: site.phone.replace(/\s+/g, ""),
    email: site.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Delhi",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "India" },
    ],
    founder: {
      "@type": "Person",
      name: "Syed Abbas Ali",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.summary,
          url: `${site.url}/services/${s.slug}`,
        },
      })),
    },
  };

  const works = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Selected Client Work by CodeWithAbby",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: isFilled(project.description)
          ? project.description
          : `${project.title} · ${project.category} project by ${site.brand}.`,
        image: `${site.url}${project.image}`,
        creator: {
          "@type": "Person",
          name: "Syed Abbas Ali",
        },
        url: `${site.url}/work/${project.slug}`,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(works) }}
      />
    </>
  );
}

