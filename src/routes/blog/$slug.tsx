import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { site } from "@/data/site";
import { getPostBySlug, posts } from "@/data/posts";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/ui";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
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
        {
          property: "og:image",
          content: `${site.url}${post.coverImage.src}`,
        },
        { property: "article:published_time", content: post.date },
        { property: "article:section", content: post.category },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `${post.title} | CodeWithAbby` },
        { name: "twitter:description", content: post.excerpt },
        {
          name: "twitter:image",
          content: `${site.url}${post.coverImage.src}`,
        },
      ],
      links: [{ rel: "canonical", href: `${site.url}/blog/${post.slug}` }],
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
    image: `${site.url}${post.coverImage.src}`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Syed Abbas Ali",
      url: `${site.url}/`,
    },
    publisher: {
      "@type": "Organization",
      name: "CodeWithAbby",
      logo: { "@type": "ImageObject", url: `${site.url}/favicon.svg` },
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

      {/* Cover image hero */}
      <div className="relative h-[52vh] min-h-[320px] w-full overflow-hidden bg-hero md:h-[64vh]">
        <img
          src={post.coverImage.src}
          alt={post.coverImage.alt}
          className="h-full w-full object-cover object-center opacity-60"
          loading="eager"
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(9,9,14,0.25) 0%, rgba(9,9,14,0.55) 50%, rgba(9,9,14,0.95) 100%)",
          }}
          aria-hidden
        />

        {/* Breadcrumb on image */}
        <nav
          aria-label="Breadcrumb"
          className="absolute top-24 left-0 right-0 md:top-32"
        >
          <div className="page-shell">
            <div className="flex items-center gap-2 text-xs font-medium text-white/60">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span aria-hidden>›</span>
              <Link to="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <span aria-hidden>›</span>
              <span className="text-white/80">{post.category}</span>
            </div>
          </div>
        </nav>

        {/* Title overlaid on image */}
        <div className="absolute bottom-0 left-0 right-0 pb-8 md:pb-12">
          <div className="page-shell max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-bold tracking-widest text-white uppercase">
                {post.category}
              </span>
              <span className="text-xs text-white/50">{post.date}</span>
              <span className="text-white/30" aria-hidden>
                ·
              </span>
              <span className="text-xs text-white/50">{post.readTime}</span>
            </div>
            <h1 className="display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      <main id="main" className="pb-24 md:pb-36">
        <div className="page-shell max-w-4xl">
          {/* Author bar */}
          <div className="border-b border-border py-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={site.portrait.src}
                alt="Abby"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="text-xs font-semibold text-dark">Syed Abbas Ali (Abby)</p>
                <p className="text-xs text-muted">Full Stack Developer · Delhi, India</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs text-muted">
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Cover image caption */}
          {post.coverImage.caption && (
            <p className="mt-3 text-[11px] text-muted/70 italic text-center">
              {post.coverImage.caption}
            </p>
          )}

          {/* Intro / Lead */}
          <Reveal className="mt-10">
            <div className="space-y-4 border-l-2 border-accent pl-5 md:pl-6">
              {post.content.intro.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-dark/85 md:text-[1.08rem] md:leading-[1.78]"
                >
                  {para}
                </p>
              ))}
            </div>
          </Reveal>

          {/* Article sections */}
          <div className="mt-12 space-y-14 border-t border-border pt-12">
            {post.content.sections.map((section, idx) => (
              <Reveal key={idx} delay={idx * 0.04} className="space-y-5">
                <h2 className="font-display text-xl font-bold tracking-tight text-dark sm:text-2xl md:text-3xl">
                  {section.heading}
                </h2>

                <div className="space-y-4">
                  {section.body.map((para, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-base leading-relaxed text-dark/80 md:text-[1.06rem] md:leading-[1.82]"
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {section.image && (
                  <figure className="my-6 overflow-hidden rounded-xl border border-border">
                    <img
                      src={section.image.src}
                      alt={section.image.alt}
                      className="w-full object-cover"
                      loading="lazy"
                    />
                    {section.image.caption && (
                      <figcaption className="bg-dark/[0.02] px-4 py-2.5 text-[11px] text-muted italic">
                        {section.image.caption}
                      </figcaption>
                    )}
                  </figure>
                )}

                {section.note && (
                  <div className="flex gap-3 rounded-xl border border-border bg-dark/[0.025] p-4 md:p-5">
                    <span className="mt-0.5 shrink-0 text-base" aria-hidden>
                      📌
                    </span>
                    <p className="text-sm leading-relaxed text-dark/70">
                      {section.note}
                    </p>
                  </div>
                )}

                {section.quote && (
                  <blockquote className="relative my-2 overflow-hidden rounded-xl bg-hero p-6 md:p-8">
                    <span
                      className="absolute -top-3 left-4 text-7xl font-serif text-white/5 select-none"
                      aria-hidden
                    >
                      "
                    </span>
                    <p className="relative text-base font-medium italic leading-relaxed text-white md:text-lg">
                      "{section.quote.text}"
                    </p>
                    {section.quote.attribution && (
                      <p className="mt-3 text-xs font-semibold tracking-widest text-white/40 uppercase">
                        — {section.quote.attribution}
                      </p>
                    )}
                  </blockquote>
                )}
              </Reveal>
            ))}
          </div>

          {/* Conclusion */}
          <Reveal delay={0.1}>
            <div className="mt-12 rounded-xl border border-border bg-surface p-6 md:p-8">
              <h3 className="text-xs font-bold tracking-[0.22em] text-accent uppercase mb-3">
                Final thought
              </h3>
              <p className="text-base leading-relaxed text-dark/80 md:text-[1.06rem] md:leading-[1.82]">
                {post.content.conclusion}
              </p>
            </div>
          </Reveal>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-muted mr-1">
              Tagged:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-sm bg-dark/5 px-2.5 py-1 text-xs font-medium text-dark/70"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author Box */}
          <Reveal
            className="mt-14 rounded-2xl border border-border bg-surface overflow-hidden md:mt-20"
            delay={0.08}
          >
            <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-start sm:gap-6 sm:p-8">
              <img
                src={site.portrait.src}
                alt="Abby — Full Stack Developer"
                width={88}
                height={88}
                className="h-22 w-22 rounded-full object-cover shadow-md shrink-0"
              />
              <div className="flex-1">
                <span className="text-[11px] font-bold tracking-[0.24em] text-accent uppercase">
                  Written by
                </span>
                <h4 className="font-display mt-1 text-xl font-bold text-dark">
                  Syed Abbas Ali
                  <span className="ml-2 text-sm font-normal text-muted">
                    (Abby)
                  </span>
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Full Stack Developer &amp; Web Architect based in Delhi,
                  India. 3+ years building websites and web applications for
                  founders, startups, and growing businesses. I handle
                  everything: design, frontend, backend, and deployment.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs">
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#25D366] hover:underline"
                  >
                    💬 Chat on WhatsApp
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abby-undefined-436951433/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-accent hover:underline"
                  >
                    LinkedIn ↗
                  </a>
                  <a
                    href="https://github.com/codewithabby07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-dark hover:underline"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Next post / back navigation */}
          <div className="mt-10 flex items-center justify-between gap-4 border-t border-border pt-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted hover:text-dark transition-colors"
            >
              <span aria-hidden>←</span>
              <span>All articles</span>
            </Link>
            {nextPost && nextPost.slug !== post.slug && (
              <Link
                to="/blog/$slug"
                params={{ slug: nextPost.slug }}
                className="group flex flex-col items-end gap-1 max-w-[220px] text-right"
              >
                <span className="text-[10px] font-bold tracking-widest text-muted uppercase">
                  Next article
                </span>
                <span className="text-xs font-semibold text-dark leading-snug transition-colors group-hover:text-accent">
                  {nextPost.title.length > 50
                    ? nextPost.title.slice(0, 50) + "…"
                    : nextPost.title}
                  <span className="ml-1" aria-hidden>
                    →
                  </span>
                </span>
              </Link>
            )}
          </div>

          {/* CTA */}
          <Reveal
            className="mt-14 overflow-hidden rounded-2xl bg-hero"
            delay={0.12}
          >
            <div className="relative flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-12">
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 80% 50%, #E44C1F 0%, transparent 55%)",
                }}
                aria-hidden
              />
              <div className="relative">
                <span className="text-[11px] font-bold tracking-[0.3em] text-accent uppercase">
                  Start a project
                </span>
                <h3 className="display mt-2 text-2xl text-white md:text-3xl">
                  READY TO BUILD SOMETHING?
                </h3>
                <p className="mt-1.5 text-sm text-white/60">
                  Full stack engineering, clean code, 6–7 day delivery. Let's
                  talk.
                </p>
              </div>
              <div className="relative flex flex-wrap gap-3">
                <a
                  href="/#contact"
                  className="rounded-md bg-accent px-5 py-3 text-xs font-extrabold tracking-widest text-white uppercase transition-transform hover:scale-105"
                >
                  Get in touch →
                </a>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-[#25D366] px-5 py-3 text-xs font-extrabold tracking-widest text-black uppercase transition-transform hover:scale-105"
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
