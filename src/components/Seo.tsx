import { site } from "@/data/site";
import { projects, isFilled } from "@/data/projects";
import { services } from "@/data/services";

export function Seo() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Syed Abbas Ali",
    alternateName: ["CodeWithAbby", "Abby"],
    jobTitle: "Founder & Lead Web Developer",
    url: `${site.url}/`,
    image: `${site.url}${site.portrait.src}`,
    knowsAbout: [
      "Custom Web Development",
      "Business Website Development",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Technical SEO",
      "Core Web Vitals Optimization",
      "E-commerce Website Development",
      "Website Redesign",
      "WebGL & Three.js",
      "Frontend Architecture",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110001",
      addressCountry: "IN",
    },
    sameAs: site.socials.map((s) => s.href),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CodeWithAbby",
    alternateName: [site.brand, "CodeWithAbby Studio", "CodeWithAbby Web Development"],
    url: `${site.url}/`,
    description: site.description,
    inLanguage: "en-US",
    publisher: {
      "@type": "Person",
      name: "Syed Abbas Ali",
    },
  };

  const localBusinessService = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    name: "CodeWithAbby",
    image: `${site.url}${site.portrait.src}`,
    url: `${site.url}/`,
    telephone: site.phone.replace(/\s+/g, ""),
    email: site.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.6139,
      longitude: 77.2090,
    },
    areaServed: [
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "New Delhi" },
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Australia" },
    ],
    founder: {
      "@type": "Person",
      name: "Syed Abbas Ali",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Website Development & Engineering Services",
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
        headline: project.tagline,
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

  // ── AEO: FAQ Schema — Answer Engine Optimization ──────────────────────────
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does CodeWithAbby do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CodeWithAbby is a boutique custom web development studio founded by Syed Abbas Ali in Delhi, India. We engineer high-performance React and Next.js business websites, custom web applications, e-commerce storefronts, and conversion-focused digital platforms for businesses in Delhi NCR, across India, and worldwide.",
        },
      },
      {
        "@type": "Question",
        name: "Where is CodeWithAbby located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CodeWithAbby is based in New Delhi, Delhi, India. The studio collaborates with local businesses across Delhi NCR and India as well as international clients in the US, UK, UAE, Canada, and Australia.",
        },
      },
      {
        "@type": "Question",
        name: "Who is the developer behind CodeWithAbby?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Syed Abbas Ali (Abby) is the founder and lead web developer of CodeWithAbby. He personally designs and engineers each client project in React, Next.js, and TypeScript with zero junior outsourcing or agency bloat.",
        },
      },
      {
        "@type": "Question",
        name: "What services does CodeWithAbby offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CodeWithAbby provides Business Website Development, Custom Web Development, Website Design & UI/UX Implementation, E-commerce Store Development, Website Redesign, Technical SEO, and Sub-Second Performance Optimization.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a website project take with CodeWithAbby?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most business website development projects are delivered in 6 to 14 business days. Custom full-stack web applications with dynamic databases and integrations typically take 2 to 3 weeks.",
        },
      },
      {
        "@type": "Question",
        name: "Does CodeWithAbby use WordPress templates or custom code?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every CodeWithAbby project is hand-coded with clean, custom React, Next.js, TypeScript, and Tailwind CSS. We do not use bloated page builders or generic off-the-shelf WordPress themes.",
        },
      },
      {
        "@type": "Question",
        name: "Does CodeWithAbby work with international clients?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. In addition to serving Indian businesses, CodeWithAbby actively partners with clients across the US, UK, UAE, Europe, Canada, and Australia through regular async progress updates, live staging milestones, and video strategy briefings.",
        },
      },
      {
        "@type": "Question",
        name: "Will I own the complete source code of my website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, 100%. Full intellectual property ownership, source code, and complete Git repository access are transferred to the client upon final project delivery.",
        },
      },
    ],
  };

  // ── AEO: Speakable & Breadcrumbs ──────────────────────────────────────────
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: site.title,
    url: `${site.url}/`,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [
        "[data-speakable='hero']",
        "[data-speakable='about']",
        "[data-speakable='services']",
      ],
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
        { "@type": "ListItem", position: 2, name: "Work", item: `${site.url}/work` },
        { "@type": "ListItem", position: 3, name: "Services", item: `${site.url}/services` },
        { "@type": "ListItem", position: 4, name: "About", item: `${site.url}/about` },
        { "@type": "ListItem", position: 5, name: "Contact", item: `${site.url}/contact` },
      ],
    },
  };

  // ── GEO: HowTo Schema ─────────────────────────────────────────────────────
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Commission a Custom Business Website with CodeWithAbby",
    description:
      "A streamlined 4-step process to commission a high-speed custom website with CodeWithAbby Digital Studio.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Submit a Project Brief",
        text: "Fill out the project inquiry form on the Contact page with your business goals, required features, and timeline. Syed Abbas Ali personally reviews every brief within 24 hours.",
        url: `${site.url}/contact`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Discovery & Strategy Call",
        text: "We schedule a focused founder consultation to finalize scope, technical architecture, and milestones before writing code.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Engineering & Live Staging",
        text: "Our studio builds your website with bespoke React & Next.js code, sharing live preview staging links for transparent progress review.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Launch, Code Transfer & Support",
        text: "After approval, we deploy to production on Vercel Edge and transfer 100% of the source code, repository, and provide 30 days of post-launch support.",
      },
    ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(works) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
    </>
  );
}
