import { site } from "@/data/site";
import { projects, isFilled } from "@/data/projects";

export function Seo() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: site.jobTitle,
    image: `${site.url}${site.portrait.src}`,
    brand: {
      "@type": "Brand",
      name: site.brand,
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.brand,
    url: site.url,
    description: site.description,
    inLanguage: "en",
    publisher: {
      "@type": "Person",
      name: site.name,
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
          name: site.name,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(works) }}
      />
    </>
  );
}
