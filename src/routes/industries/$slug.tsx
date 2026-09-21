import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getIndustryBySlug } from "@/data/industries";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const industry = getIndustryBySlug(params.slug);
    if (!industry) {
      throw notFound();
    }
    return { industry };
  },
  component: IndustryDetail,
  head: ({ loaderData }) => {
    const industry = loaderData?.industry;
    if (!industry) return {};
    return {
      meta: [
        { title: `${industry.title} Digital Solutions | CodeWithAbby Studio` },
        { name: "description", content: industry.description },
        { property: "og:title", content: `${industry.title} Digital Solutions | CodeWithAbby Studio` },
        { property: "og:description", content: industry.description },
        { property: "og:url", content: `${site.url}/industries/${industry.slug}` },
      ],
    };
  },
});

function IndustryDetail() {
  const { industry } = Route.useLoaderData();

  // Find matching projects for this industry
  const matchingProjects = projects.filter((p) =>
    industry.projectSlugs.includes(p.slug) || p.industrySlug === industry.slug
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <main className="pt-28 sm:pt-36 pb-24 lg:pb-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-8">
            <Link to="/industries" className="hover:text-white transition-colors">
              Industries
            </Link>
            <span>/</span>
            <span className="text-[#E44C1F]">{industry.shortTitle}</span>
          </div>

          {/* Hero Header */}
          <div className="border-b border-white/[0.08] pb-12">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-bold text-[#E44C1F]">
                VERTICAL {industry.number}
              </span>
              <span className="text-white/30">•</span>
              <span className="text-xs font-mono uppercase tracking-wider text-white/60">
                Industry Solutions
              </span>
            </div>

            <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white">
              {industry.title}
            </h1>
            <p className="mt-4 text-lg sm:text-xl font-medium text-white/80 leading-relaxed max-w-3xl">
              {industry.headline}
            </p>
            <p className="mt-4 text-base text-white/60 leading-relaxed max-w-3xl">
              {industry.description}
            </p>

            {/* Quick Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#E44C1F] px-7 py-3.5 text-xs font-extrabold uppercase tracking-widest text-white transition-all hover:bg-[#ff5d2e] hover:shadow-[0_0_25px_rgba(228,76,31,0.4)]"
              >
                <span>Initiate {industry.shortTitle} Project</span>
                <span>→</span>
              </Link>

              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:bg-emerald-500/20 transition-all"
              >
                <span>Direct WhatsApp Scoping</span>
              </a>
            </div>
          </div>

          {/* Core Industry Challenges */}
          <div className="mt-14 border-b border-white/[0.08] pb-12">
            <span className="text-xs font-mono tracking-widest text-[#E44C1F] uppercase font-bold">
              01 / DOMAIN FRICTION
            </span>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold uppercase text-white">
              Typical Failures in {industry.shortTitle} Websites
            </h2>
            <div className="mt-6 space-y-4">
              {industry.challenges.map((c: { title: string; description: string }, idx: number) => (
                <div
                  key={idx}
                  className="rounded-xl border border-rose-500/20 bg-rose-500/5 p-5"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-rose-400 font-bold">✕</span>
                    <h3 className="font-display text-sm font-bold uppercase text-white">
                      {c.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-xs text-white/60 leading-relaxed">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Engineered Solutions */}
          <div className="mt-14 border-b border-white/[0.08] pb-12">
            <span className="text-xs font-mono tracking-widest text-[#E44C1F] uppercase font-bold">
              02 / THE ARCHITECTURAL REMEDY
            </span>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold uppercase text-white">
              How CodeWithAbby Solves This
            </h2>
            <div className="mt-6 space-y-4">
              {industry.solutions.map((s: { title: string; description: string }, idx: number) => (
                <div
                  key={idx}
                  className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <h3 className="font-display text-sm font-bold uppercase text-white">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-xs text-white/60 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sector Deliverables */}
          <div className="mt-14 border-b border-white/[0.08] pb-12">
            <span className="text-xs font-mono tracking-widest text-[#E44C1F] uppercase font-bold">
              03 / DELIVERABLES
            </span>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold uppercase text-white">
              Standard Package Architecture
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {industry.deliverables.map((item: string, idx: number) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 rounded-lg border border-white/[0.06] bg-[#0c0c10] p-4 text-xs text-white/80"
                >
                  <span className="text-[#E44C1F] font-bold">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Matching Proven Case Studies */}
          {matchingProjects.length > 0 ? (
            <div className="mt-14 border-b border-white/[0.08] pb-12">
              <span className="text-xs font-mono tracking-widest text-[#E44C1F] uppercase font-bold">
                04 / REAL CLIENT PROOF
              </span>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold uppercase text-white">
                Live Platforms in {industry.shortTitle}
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
                      <h3 className="font-display text-lg font-bold uppercase text-white">
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
                        Visit Live Website ↗
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

          {/* Navigation Bottom */}
          <div className="mt-20 border-t border-white/[0.08] pt-12 flex items-center justify-between">
            <Link
              to="/industries"
              className="text-xs font-mono uppercase text-white/50 hover:text-white transition-colors"
            >
              ← Back to All Industries
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#E44C1F] px-6 py-2.5 text-xs font-bold uppercase text-white hover:bg-[#ff5d2e]"
            >
              <span>Build for {industry.shortTitle}</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
