import { site } from "@/data/site";
import { projects, isFilled } from "@/data/projects";

export function Seo() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Syed Abbas Ali",
    alternateName: "CodeWithAbby",
    jobTitle: "Full Stack Developer",
    url: `${site.url}/`,
    image: `${site.url}${site.portrait.src}`,
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
    address: {
      "@type": "PostalAddress",
      addressLocality: "Delhi",
      addressCountry: "IN",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Delhi",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    founder: {
      "@type": "Person",
      name: "Syed Abbas Ali",
    },
  };

  const works = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Selected work by CODEWITHABBY",
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
        url: isFilled(project.liveUrl) ? project.liveUrl : `${site.url}/#work`,
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
