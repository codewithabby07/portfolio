import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { site } from "@/data/site";
import { getPostBySlug, posts } from "@/data/posts";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Reveal, SectionLabel } from "@/components/ui";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) {
      throw notFound();
    }
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return {};
    return {
      meta: [
        { title: `${post.title} | CodeWithAbby` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: `${post.title} | CodeWithAbby` },
        { property: "og:description", content: post.excerpt },
        { property: "og:url", content: `${site.url}/blog/${post.slug}` },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: post.date },
        { property: "article:section", content: post.category },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `${post.title} | CodeWithAbby` },
        { name: "twitter:description", content: post.excerpt },
      ],
      links: [
        { rel: "canonical", href: `${site.url}/blog/${post.slug}` },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const currentIndex = posts.findIndex((p) => p.slug === post.slug);
  const nextPost = posts[(currentIndex + 1) % posts.length];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `${site.url}/blog/${post.slug}`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Syed Abbas Ali",
      url: `${site.url}/`,
    },
    publisher: {
      "@type": "Person",
      name: "Syed Abbas Ali",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${site.url}/blog/${post.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-background text-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navigation />

      <main id="main" className="pt-28 pb-20 md:pt-36 md:pb-32">
        <div className="page-shell max-w-4xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-medium text-muted">
            <Link to="/" className="hover:text-dark transition-colors">
              Home
            </Link>
            <span aria-hidden>›</span>
            <Link to="/blog" className="hover:text-dark transition-colors">
              Blog
            </Link>
            <span aria-hidden>›</span>
            <span className="text-dark/80 truncate max-w-[200px] sm:max-w-none">{post.category}</span>
          </nav>

          {/* Article Header */}
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-accent/10 px-3 py-1 text-[11px] font-bold tracking-wider text-accent uppercase">
                {post.category}
              </span>
              <span className="text-xs text-muted">{post.date}</span>
              <span className="text-xs text-muted" aria-hidden>·</span>
              <span className="text-xs text-muted">{post.readTime}</span>
            </div>

            <h1 className="display mt-4 text-3xl font-extrabold tracking-tight text-dark sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.08]">
              {post.title}
            </h1>

            <p className="mt-6 border-l-2 border-accent pl-4 text-lg leading-relaxed text-dark/80 italic md:text-xl">
              {post.content.intro}
            </p>
          </Reveal>

          {/* Article Content */}
          <div className="mt-12 space-y-12 border-t border-border pt-10 text-dark/90">
            {post.content.sections.map((section, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <section className="space-y-4">
                  <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                    {section.heading}
                  </h2>
                  <div className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {section.quote ? (
                    <blockquote className="my-6 rounded-xl border border-dark/10 bg-dark/[0.03] p-6 text-base font-medium italic text-dark md:text-lg">
                      "{section.quote}"
                    </blockquote>
                  ) : null}
                </section>
              </Reveal>
            ))}

            {/* Conclusion */}
            <Reveal delay={0.15}>
              <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
                <h3 className="font-display text-lg font-bold text-dark uppercase tracking-wider">
                  Summary &amp; Takeaway
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">
                  {post.content.conclusion}
                </p>
              </div>
            </Reveal>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-6">
              <span className="text-xs font-semibold text-muted mr-2">Filed under:</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-sm bg-dark/5 px-2.5 py-1 text-xs font-medium text-dark/70"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Box */}
          <Reveal className="mt-14 rounded-2xl border border-border bg-surface p-6 sm:p-8 md:mt-20" delay={0.1}>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
              <img
                src={site.portrait.src}
                alt="Abby"
                width={80}
                height={80}
                className="h-20 w-20 rounded-full object-cover shadow-md"
              />
              <div className="flex-1">
                <p className="label-meta text-accent">Written by</p>
                <h4 className="font-display text-xl font-bold text-dark">
                  Syed Abbas Ali (Abby)
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  Full Stack Developer &amp; Web Architect based in Delhi, India. Engineering high-performance websites and web applications for businesses worldwide.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wider">
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:underline"
                  >
                    💬 WhatsApp
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abby-undefined-436951433/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    LinkedIn ↗
                  </a>
                  <a
                    href="https://github.com/codewithabby07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark hover:underline"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Navigation to other post */}
          <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-dark hover:text-accent transition-colors"
            >
              <span>← All Articles</span>
            </Link>
            {nextPost ? (
              <Link
                to="/blog/$slug"
                params={{ slug: nextPost.slug }}
                className="inline-flex items-center gap-2 text-right text-xs font-bold uppercase tracking-widest text-dark hover:text-accent transition-colors"
              >
                <span>Next: {nextPost.title.slice(0, 32)}...</span>
                <span aria-hidden>→</span>
              </Link>
            ) : null}
          </div>

          {/* Bottom Call to Action */}
          <Reveal className="mt-16 rounded-2xl bg-dark p-8 text-white md:mt-24 md:p-12" delay={0.2}>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <SectionLabel light>Start a project</SectionLabel>
                <h3 className="display mt-2 text-3xl text-white md:text-4xl">
                  READY TO BUILD YOUR NEXT WEBSITE?
                </h3>
                <p className="mt-2 text-sm text-white/70 max-w-lg">
                  Full stack engineering, bespoke design, and 6–7 day turnaround. Let's discuss your timeline.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/#contact"
                  className="rounded-md bg-accent px-6 py-3.5 text-xs font-extrabold tracking-widest text-white uppercase transition-transform hover:scale-105"
                >
                  Get in Touch →
                </a>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-[#25D366] px-5 py-3.5 text-xs font-extrabold tracking-widest text-black uppercase transition-transform hover:scale-105"
                >
                  WhatsApp
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
