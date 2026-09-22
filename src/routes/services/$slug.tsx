import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getServiceBySlug } from "@/data/services";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) {
      throw notFound();
    }
    return { service };
  },
  component: ServiceDetail,
  head: ({ loaderData }) => {
    const service = loaderData?.service;
    if (!service) return {};
    return {
      meta: [
        { title: `${service.title} — Custom Engineering & Deliverables | CodeWithAbby` },
        { name: "description", content: `${service.tagline} ${service.summary}` },
        { property: "og:title", content: `${service.title} | CodeWithAbby Studio` },
        { property: "og:description", content: service.summary },
        { property: "og:url", content: `${site.url}/services/${service.slug}` },
        { property: "og:image", content: `${site.url}/images/og.jpg` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `${service.title} | CodeWithAbby` },
        { name: "twitter:description", content: service.summary },
        { name: "twitter:image", content: `${site.url}/images/og.jpg` },
      ],
      links: [{ rel: "canonical", href: `${site.url}/services/${service.slug}` }],
    };
  },
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();

  // Find matching projects for this service
  const matchingProjects = projects.filter((p) =>
    p.serviceSlugs.includes(service.slug)
  );

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.shortTitle,
    description: service.description,
    provider: {
      "@type": "Person",
      name: "Syed Abbas Ali",
      url: `${site.url}/`,
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "India" },
    ],
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: `${site.url}/contact`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f: { question: string; answer: string }) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${site.url}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${site.url}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.shortTitle,
        item: `${site.url}/services/${service.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navigation />

      <main className="pt-28 sm:pt-36 pb-24 lg:pb-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-8">
            <Link to="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-[#E44C1F]">{service.shortTitle}</span>
          </div>

          {/* Hero Header */}
          <div className="border-b border-white/[0.08] pb-12">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-bold text-[#E44C1F]">
                SERVICE {service.number}
              </span>
              <span className="text-white/30">•</span>
              <span className="text-xs font-mono uppercase tracking-wider text-white/60">
                Core Discipline
              </span>
            </div>

            <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white">
              {service.title}
            </h1>
            <p className="mt-4 text-lg sm:text-xl font-medium text-white/80 leading-relaxed max-w-3xl">
              {service.tagline}
            </p>
            <p className="mt-4 text-base text-white/60 leading-relaxed max-w-3xl">
              {service.description}
            </p>

            {/* Quick Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#E44C1F] px-7 py-3.5 text-xs font-extrabold uppercase tracking-widest text-white transition-all hover:bg-[#ff5d2e] hover:shadow-[0_0_25px_rgba(228,76,31,0.4)]"
              >
                <span>Commission {service.shortTitle}</span>
                <span>→</span>
              </Link>

              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:bg-emerald-500/20 transition-all"
              >
                <span>Direct WhatsApp Consultation</span>
              </a>
            </div>
          </div>

          {/* Who It Is For */}
          <div className="mt-14 border-b border-white/[0.08] pb-12">
            <span className="text-xs font-mono tracking-widest text-[#E44C1F] uppercase font-bold">
              01 / PROFILE FIT
            </span>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold uppercase text-white">
              Who Benefits Most From This Service
            </h2>
            <ul className="mt-6 space-y-3">
              {service.whoItsFor.map((item: string, idx: number) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-[#0c0c10] p-4 text-sm text-white/80"
                >
                  <span className="font-mono text-xs text-[#E44C1F] font-bold mt-0.5">
                    0{idx + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables Breakdown */}
          <div className="mt-14 border-b border-white/[0.08] pb-12">
            <span className="text-xs font-mono tracking-widest text-[#E44C1F] uppercase font-bold">
              02 / DELIVERABLES
            </span>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold uppercase text-white">
              Concrete Deliverables You Receive
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {service.deliverables.map((deliv: { title: string; description: string }, idx: number) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/[0.08] bg-[#0c0c10] p-5"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[#E44C1F] font-bold">✓</span>
                    <h3 className="font-display text-sm font-bold uppercase text-white">
                      {deliv.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-xs text-white/60 leading-relaxed">
                    {deliv.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step Methodology */}
          <div className="mt-14 border-b border-white/[0.08] pb-12">
            <span className="text-xs font-mono tracking-widest text-[#E44C1F] uppercase font-bold">
              03 / EXECUTION BLUEPRINT
            </span>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold uppercase text-white">
              Our 4-Phase Delivery Process
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {service.methodology.map((m: { step: string; title: string; description: string }) => (
                <div
                  key={m.step}
                  className="rounded-xl border border-white/[0.06] bg-[#0b0b0f] p-5 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs font-bold text-[#E44C1F]">
                      {m.step}
                    </span>
                    <h3 className="mt-2 text-sm font-bold uppercase text-white">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-xs text-white/60 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-14 border-b border-white/[0.08] pb-12">
            <span className="text-xs font-mono tracking-widest text-[#E44C1F] uppercase font-bold">
              04 / TECHNICAL TOOLING
            </span>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold uppercase text-white">
              Technologies & Frameworks Utilized
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {service.techStack.map((tech: string) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs font-semibold text-white/90"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Matching Featured Projects */}
          {matchingProjects.length > 0 ? (
            <div className="mt-14 border-b border-white/[0.08] pb-12">
              <span className="text-xs font-mono tracking-widest text-[#E44C1F] uppercase font-bold">
                05 / PROVEN WORK
              </span>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold uppercase text-white">
                Featured Projects Delivered in This Discipline
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {matchingProjects.map((p) => (
                  <div
                    key={p.id}
                    className="rounded-xl border border-white/[0.08] bg-[#0d0d12] p-5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="aspect-[16/10] overflow-hidden rounded-lg bg-black/40 mb-4">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <span className="font-mono text-[10px] text-[#E44C1F] uppercase font-bold">
                        {p.category}
                      </span>
                      <h3 className="font-display text-lg font-bold uppercase text-white mt-1">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-xs text-white/60 line-clamp-2">
                        {p.description}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center gap-2 pt-4 border-t border-white/[0.06]">
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center rounded-lg bg-[#E44C1F] py-2 px-3 text-xs font-bold uppercase text-white hover:bg-[#ff5d2e]"
                      >
                        Visit Live ↗
                      </a>
                      <Link
                        to="/work/$slug"
                        params={{ slug: p.slug }}
                        className="rounded-lg border border-white/10 bg-white/5 py-2 px-3 text-xs font-bold text-white hover:bg-white/10"
                      >
                        Case Study
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {/* FAQs */}
          <div className="mt-14">
            <span className="text-xs font-mono tracking-widest text-[#E44C1F] uppercase font-bold">
              06 / COMMON QUESTIONS
            </span>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold uppercase text-white">
              Frequently Asked Questions
            </h2>
            <div className="mt-6 space-y-4">
              {service.faqs.map((faq: { question: string; answer: string }, idx: number) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/[0.06] bg-[#0c0c10] p-5"
                >
                  <h3 className="text-sm font-bold text-white uppercase">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-xs text-white/60 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation to other services */}
          <div className="mt-20 border-t border-white/[0.08] pt-12 flex items-center justify-between">
            <Link
              to="/services"
              className="text-xs font-mono uppercase text-white/50 hover:text-white transition-colors"
            >
              ← Back to All Services
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#E44C1F] px-6 py-2.5 text-xs font-bold uppercase text-white hover:bg-[#ff5d2e]"
            >
              <span>Commission This Service</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
