import { createFileRoute, Link } from "@tanstack/react-router";
import { site } from "@/data/site";
import { posts } from "@/data/posts";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/ui";

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
  head: () => ({
    meta: [
      { title: "Articles & Notes | CodeWithAbby" },
      {
        name: "description",
        content:
          "Real engineering notes, case studies, and honest takes on web development by Abby — Full Stack Developer based in Delhi.",
      },
      { property: "og:title", content: "Articles & Notes | CodeWithAbby" },
      {
        property: "og:description",
        content:
          "Real engineering notes, case studies, and honest takes on web development by Abby — Full Stack Developer based in Delhi.",
      },
      { property: "og:url", content: `${site.url}/blog` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${site.url}/blog` }],
  }),
});

function BlogIndex() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "CodeWithAbby Articles & Notes",
    url: `${site.url}/blog`,
    description:
      "Real engineering notes, case studies, and honest takes on web development by Abby.",
    author: { "@type": "Person", name: "Syed Abbas Ali" },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `${site.url}/blog/${post.slug}`,
      datePublished: post.date,
      author: { "@type": "Person", name: "Syed Abbas Ali" },
    })),
  };

  return (
    <div className="min-h-screen bg-background text-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navigation />

      <main id="main" className="pb-24 md:pb-36">
        {/* Hero / header */}
        <section className="bg-hero pt-28 pb-16 md:pt-40 md:pb-24">
          <div className="page-shell">
            <Reveal>
              <span className="inline-block text-[11px] font-bold tracking-[0.3em] text-accent uppercase">
                CodeWithAbby · Notes
              </span>
              <h1 className="display mt-4 text-5xl leading-[0.94] tracking-[-0.03em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                ARTICLES &amp;<br />
                <span className="italic font-light text-white/80">NOTES.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-white/65 md:text-lg">
                Engineering process, tool comparisons, and real-world case
                studies. No fluff, no AI content farm output — just what I've
                actually worked on and learned.
              </p>
              <div className="mt-8 flex items-center gap-3 text-xs text-white/40">
                <img
                  src={site.portrait.src}
                  alt="Abby"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span>
                  Written by <strong className="text-white/75 font-semibold">Abby</strong> · Full Stack Developer, Delhi
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Featured post (first post, large card) */}
        <div className="page-shell">
          <Reveal className="mt-[-1px]">
            {(() => {
              const featured = posts[0];
              return (
                <Link
                  to="/blog/$slug"
                  params={{ slug: featured.slug }}
                  className="group mt-12 grid gap-0 overflow-hidden rounded-2xl border border-border bg-surface shadow-md transition-shadow duration-300 hover:shadow-xl md:mt-16 md:grid-cols-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={featured.coverImage.src}
                      alt={featured.coverImage.alt}
                      className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] md:h-full md:min-h-[400px]"
                      loading="eager"
                    />
                    <span className="absolute top-4 left-4 rounded-full bg-dark/70 px-3 py-1 text-[11px] font-bold tracking-widest text-white backdrop-blur-sm uppercase">
                      {featured.category}
                    </span>
                    <span className="absolute top-4 right-4 rounded-full bg-accent px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase">
                      Latest
                    </span>
                  </div>
                  <div className="flex flex-col justify-between p-8 md:p-10">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-muted">
                        <time>{featured.date}</time>
                        <span>·</span>
                        <span>{featured.readTime}</span>
                      </div>
                      <h2 className="display mt-3 text-2xl font-bold tracking-tight text-dark transition-colors group-hover:text-accent sm:text-3xl md:text-[1.85rem]">
                        {featured.title}
                      </h2>
                      <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                        {featured.excerpt}
                      </p>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {featured.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-sm bg-dark/5 px-2.5 py-1 text-[11px] font-medium text-dark/60"
                        >
                          #{tag}
                        </span>
                      ))}
                      <span className="ml-auto inline-flex items-center gap-1 text-xs font-bold tracking-widest text-dark uppercase transition-colors group-hover:text-accent">
                        Read full article <span aria-hidden>→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })()}
          </Reveal>

          {/* Remaining posts grid */}
          <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-2">
            {posts.slice(1).map((post, idx) => (
              <Reveal key={post.slug} delay={idx * 0.1}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.coverImage.src}
                      alt={post.coverImage.alt}
                      className="h-52 w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-dark/70 px-2.5 py-1 text-[10px] font-bold tracking-widest text-white backdrop-blur-sm uppercase">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-muted">
                        <time>{post.date}</time>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="display mt-2.5 text-xl font-bold tracking-tight text-dark transition-colors group-hover:text-accent sm:text-2xl">
                        {post.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-sm bg-dark/5 px-2 py-0.5 text-[10px] font-medium text-dark/60"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold tracking-widest text-dark uppercase transition-colors group-hover:text-accent">
                        Read <span aria-hidden>→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Bottom CTA */}
          <Reveal
            className="mt-16 overflow-hidden rounded-2xl bg-hero md:mt-24"
            delay={0.15}
          >
            <div className="relative flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-12">
              <div className="absolute inset-0 opacity-[0.04]"
                style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #E44C1F 0%, transparent 60%)" }}
                aria-hidden
              />
              <div className="relative">
                <span className="text-[11px] font-bold tracking-[0.3em] text-accent uppercase">
                  Work with Abby
                </span>
                <h3 className="display mt-2 text-2xl text-white md:text-3xl">
                  HAVE A PROJECT IN MIND?
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  Direct communication. Real code. 6–7 day delivery.
                </p>
              </div>
              <div className="relative flex flex-wrap gap-3">
                <a
                  href="/#contact"
                  className="rounded-md bg-accent px-5 py-3 text-xs font-extrabold tracking-widest text-white uppercase transition-transform hover:scale-105"
                >
                  Start a project →
                </a>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-[#25D366] px-5 py-3 text-xs font-extrabold tracking-widest text-black uppercase transition-transform hover:scale-105"
                >
                  💬 WhatsApp
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
