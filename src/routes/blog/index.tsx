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
          "Engineering notes, web design lessons, and case studies by Syed Abbas Ali (Abby).",
      },
      { property: "og:title", content: "Articles & Notes | CodeWithAbby" },
      {
        property: "og:description",
        content:
          "Engineering notes, web design lessons, and case studies by Syed Abbas Ali (Abby).",
      },
      { property: "og:url", content: `${site.url}/blog` },
      { property: "og:type", content: "website" },
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
      "Engineering notes, web design lessons, and case studies by Syed Abbas Ali.",
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
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#E44C1F] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navigation />

      <main id="main" className="pt-28 sm:pt-36 pb-24 lg:pb-32">
        {/* Atmospheric ambient glow */}
        <div
          className="pointer-events-none absolute top-20 left-1/3 z-0 h-[550px] w-[550px] rounded-full bg-[radial-gradient(circle,rgba(228,76,31,0.08)_0%,transparent_70%)] blur-3xl"
          aria-hidden
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="border-b border-white/[0.08] pb-12">
            <h1 className="font-editorial-serif italic text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.05]">
              Articles & <span className="text-[#E44C1F]">Notes</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-neutral-400 leading-relaxed font-sans">
              Thoughts on web design, modern frontend engineering, and real-world project lessons. Written by Syed Abbas Ali.
            </p>
          </div>

          {/* Featured post */}
          <div className="mt-12">
            {(() => {
              const featured = posts[0];
              return (
                <Link
                  to="/blog/$slug"
                  params={{ slug: featured.slug }}
                  className="group relative grid gap-0 overflow-hidden rounded-[28px] sm:rounded-[36px] border border-white/[0.08] bg-[#0c0c10]/90 shadow-2xl transition-all duration-300 hover:border-white/20 hover:shadow-[0_20px_50px_-15px_rgba(228,76,31,0.2)] md:grid-cols-2 backdrop-blur-2xl"
                >
                  <div className="relative overflow-hidden aspect-[16/10] md:aspect-auto">
                    <img
                      src={featured.coverImage.src}
                      alt={featured.coverImage.alt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="eager"
                    />
                    <span className="absolute top-4 left-4 rounded-full bg-black/70 px-3 py-1 text-[11px] font-mono font-bold tracking-wider text-white backdrop-blur-md uppercase border border-white/10">
                      {featured.category}
                    </span>
                  </div>
                  <div className="flex flex-col justify-between p-8 sm:p-10">
                    <div>
                      <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
                        <time>{featured.date}</time>
                        <span>•</span>
                        <span>{featured.readTime}</span>
                      </div>
                      <h2 className="font-agency-headline mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white transition-colors group-hover:text-[#E44C1F]">
                        {featured.title}
                      </h2>
                      <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-400">
                        {featured.excerpt}
                      </p>
                    </div>
                    <div className="mt-8 flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.08] pt-6">
                      <div className="flex flex-wrap gap-1.5">
                        {featured.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 font-mono text-[10px] text-neutral-400"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#E44C1F] uppercase transition-colors">
                        Read article <span>→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })()}
          </div>

          {/* Remaining posts grid */}
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {posts.slice(1).map((post, idx) => (
              <Reveal key={post.slug} delay={idx * 0.08}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="group flex flex-col overflow-hidden rounded-[24px] sm:rounded-[28px] border border-white/[0.08] bg-[#0c0c10]/90 backdrop-blur-2xl transition-all duration-300 hover:border-white/20 hover:shadow-[0_15px_40px_-15px_rgba(228,76,31,0.2)] hover:-translate-y-1 h-full"
                >
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={post.coverImage.src}
                      alt={post.coverImage.alt}
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider text-white backdrop-blur-md uppercase border border-white/10">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                        <time>{post.date}</time>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="font-agency-headline mt-3 text-xl sm:text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-[#E44C1F]">
                        {post.title}
                      </h2>
                      <p className="mt-3 text-xs sm:text-sm leading-relaxed text-neutral-400 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.08] pt-4">
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-lg bg-white/5 border border-white/10 px-2 py-0.5 font-mono text-[10px] text-neutral-400"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-bold tracking-wider text-[#E44C1F] uppercase transition-colors">
                        Read <span>→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 rounded-[28px] sm:rounded-[36px] border border-white/10 bg-gradient-to-br from-[#12131a] via-[#090a0e] to-[#000000] p-8 sm:p-12 relative overflow-hidden shadow-2xl md:flex md:items-center md:justify-between gap-8">
            <div
              className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-[#E44C1F]/15 blur-3xl"
              aria-hidden
            />
            <div className="max-w-xl relative z-10">
              <span className="text-xs font-mono font-bold tracking-widest text-[#E44C1F] uppercase">
                GET IN TOUCH
              </span>
              <h3 className="mt-2 font-agency-headline text-2xl sm:text-3xl font-extrabold text-white">
                Have a project in mind?
              </h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                Direct communication, modern design, and fast execution delivered in 6–14 days.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 rounded-full bg-[#E44C1F] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(228,76,31,0.35)] hover:bg-[#ff5d2e] active:scale-95 transition-all relative z-10 shrink-0"
            >
              <span>Start a Project</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
