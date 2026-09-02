import { useEffect } from "react";
import { site } from "@/data/site";
import { projects, isFilled } from "@/data/projects";

export function Seo() {
  useEffect(() => {
    const metaTags = [
      { property: "og:type", content: "website" },
      { property: "og:url", content: site.url },
      { property: "og:title", content: site.title },
      { property: "og:description", content: site.description },
      { property: "og:image", content: `${site.url}/images/og.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: site.title },
      { name: "twitter:description", content: site.description },
      { name: "twitter:image", content: `${site.url}/images/og.jpg` },
    ];

    if (site.googleVerification) {
      metaTags.push({ name: "google-site-verification", content: site.googleVerification });
    }
    if (site.bingVerification) {
      metaTags.push({ name: "msvalidate.01", content: site.bingVerification });
    }

    const elements: HTMLMetaElement[] = [];

    metaTags.forEach((tag) => {
      const meta = document.createElement("meta");
      if (tag.property) meta.setAttribute("property", tag.property);
      if (tag.name) meta.setAttribute("name", tag.name);
      meta.setAttribute("content", tag.content);
      document.head.appendChild(meta);
      elements.push(meta);
    });

    return () => {
      elements.forEach((el) => el.remove());
    };
  }, []);

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
          : `${project.title} — ${project.category} project by ${site.brand}.`,
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
