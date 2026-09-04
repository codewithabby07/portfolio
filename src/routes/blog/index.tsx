import { createFileRoute, Link } from "@tanstack/react-router";
import { site } from "@/data/site";
import { posts } from "@/data/posts";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Reveal, SectionLabel } from "@/components/ui";

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
  head: () => ({
    meta: [
      { title: "Articles & Web Architecture Insights | CodeWithAbby" },
      {
        name: "description",
        content:
          "Practical technical articles, case studies, and modern web architecture insights by Delhi-based Full Stack Developer Abby (CodeWithAbby).",
      },
      { property: "og:title", content: "Articles & Web Architecture Insights | CodeWithAbby" },
      {
        property: "og:description",
        content:
          "Practical technical articles, case studies, and modern web architecture insights by Delhi-based Full Stack Developer Abby.",
      },
      { property: "og:url", content: `${site.url}/blog` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Articles & Web Architecture Insights | CodeWithAbby" },
      {
        name: "twitter:description",
        content:
          "Practical technical articles, case studies, and modern web architecture insights by Delhi-based Full Stack Developer Abby.",
      },
    ],
    links: [
      { rel: "canonical", href: `${site.url}/blog` },
    ],
  }),
});

function BlogIndex() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "CodeWithAbby Articles & Insights",
    url: `${site.url}/blog`,
    description:
      "Practical technical articles, case studies, and modern web architecture insights by Delhi-based Full Stack Developer Abby.",
    author: {
      "@type": "Person",
      name: "Syed Abbas Ali",
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `${site.url}/blog/${post.slug}`,
      datePublished: post.date,
      author: {
        "@type": "Person",
        name: "Syed Abbas Ali",
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background text-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navigation />

      <main id="main" className="pt-28 pb-20 md:pt-36 md:pb-32">
        <div className="page-shell">
          {/* Header */}
          <Reveal>
            <SectionLabel>Articles &amp; Notes</SectionLabel>
            <h1 className="display mt-4 text-5xl tracking-tight text-dark sm:text-6xl md:text-7xl lg:text-8xl">
              ARTICLES &amp; INSIGHTS.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              Engineering notes, architecture decisions, and real-world case studies
              on building high-performance websites without agency bloat.
            </p>
          </Reveal>

          {/* Posts List */}
          <div className="mt-14 divide-y divide-border border-t border-b border-border md:mt-20">
            {posts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.08}>
                <article className="group relative py-10 transition-colors duration-300 hover:bg-dark/[0.02] md:py-14">
                  <div className="grid gap-6 md:grid-cols-12 md:items-start md:gap-10">
                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-3 md:col-span-4 md:flex-col md:items-start md:gap-2">
                      <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-[11px] font-bold tracking-wider text-accent uppercase">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2 text-xs text-muted">
                        <time>{post.date}</time>
                        <span aria-hidden>·</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-8">
                      <h2 className="display text-2xl tracking-tight text-dark transition-colors duration-200 group-hover:text-accent sm:text-3xl md:text-4xl">
                        <Link to="/blog/$slug" params={{ slug: post.slug }} className="focus:outline-none">
                          <span className="absolute inset-0" aria-hidden="true" />
                          {post.title}
                        </Link>
                      </h2>

                      <p className="mt-4 text-base leading-relaxed text-muted">
                        {post.excerpt}
                      </p>

                      <div className="mt-6 flex flex-wrap items-center gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-sm bg-dark/5 px-2.5 py-1 text-[11px] font-medium text-dark/70"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-dark uppercase transition-colors group-hover:text-accent">
                        <span>Read article</span>
                        <span aria-hidden="true">→</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Bottom CTA */}
          <Reveal className="mt-16 rounded-2xl bg-dark p-8 text-white md:mt-24 md:p-12" delay={0.2}>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="label-meta text-accent">Work with Abby</p>
                <h3 className="display mt-2 text-3xl text-white md:text-4xl">
                  NEED A FAST, CUSTOM WEBSITE FOR YOUR BUSINESS?
                </h3>
                <p className="mt-2 text-sm text-white/70 max-w-lg">
                  Direct communication, zero agency runaround, and delivery in 6–7 days.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/#contact"
                  className="rounded-md bg-accent px-6 py-3.5 text-xs font-extrabold tracking-widest text-white uppercase transition-transform hover:scale-105"
                >
                  Start a Project →
                </a>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-[#25D366] px-5 py-3.5 text-xs font-extrabold tracking-widest text-black uppercase transition-transform hover:scale-105"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </main>

      <Footer />
    </div>
  );
}
