import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProjectBySlug, projects } from "@/data/projects";
import { getIndustryBySlug } from "@/data/industries";
import { site } from "@/data/site";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) {
      throw notFound();
    }
    return { project };
  },
  component: CaseStudyDetail,
  head: ({ loaderData }) => {
    const project = loaderData?.project;
    if (!project) return {};
    return {
      meta: [
        { title: `${project.title} — Case Study | CodeWithAbby Studio` },
        { name: "description", content: project.description },
        { property: "og:title", content: `${project.title} — Case Study | CodeWithAbby Studio` },
        { property: "og:description", content: project.description },
        { property: "og:url", content: `${site.url}/work/${project.slug}` },
        { property: "og:image", content: `${site.url}${project.image}` },
      ],
    };
  },
});

function CaseStudyDetail() {
  const { project } = Route.useLoaderData();
  const industry = getIndustryBySlug(project.industrySlug);

  // Find next project
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <main className="pt-28 sm:pt-36 pb-24 lg:pb-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb & Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-8">
            <Link to="/work" className="hover:text-white transition-colors">
              Work
            </Link>
            <span>/</span>
            <span className="text-[#E44C1F]">{project.title}</span>
          </div>

          {/* Hero Header */}
          <div className="border-b border-white/[0.08] pb-10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-bold text-[#E44C1F]">
                CASE STUDY {project.number}
              </span>
              <span className="text-white/30">•</span>
              <span className="text-xs font-mono uppercase tracking-wider text-white/60">
                {project.category}
              </span>
            </div>

            <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white">
              {project.title}
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl">
              {project.tagline}
            </p>

            {/* Prominent High-Contrast VISIT LIVE WEBSITE CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl bg-[#E44C1F] px-7 py-3.5 text-xs font-extrabold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#ff5d2e] hover:shadow-[0_0_30px_rgba(228,76,31,0.5)] active:scale-95"
              >
                <span>VISIT LIVE WEBSITE</span>
                <span className="text-base font-bold">↗</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:border-white/30 hover:bg-white/10 transition-all"
              >
                <span>Commission Similar Build</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Metadata Grid */}
          <div className="mt-10 grid grid-cols-2 gap-6 rounded-2xl border border-white/[0.08] bg-[#0c0c10] p-6 sm:grid-cols-4">
            <div>
              <span className="text-[11px] font-mono uppercase text-white/40">Client / Product</span>
              <p className="mt-1 text-xs font-bold text-white">{project.client}</p>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase text-white/40">Role</span>
              <p className="mt-1 text-xs font-bold text-white">{project.role}</p>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase text-white/40">Year</span>
              <p className="mt-1 text-xs font-bold text-white">{project.year}</p>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase text-white/40">Impact Metric</span>
              <p className="mt-1 text-xs font-bold text-[#E44C1F]">
                {project.impact || "Production Edge Ready"}
              </p>
            </div>
          </div>

          {/* Featured Image with Live Link Frame */}
          {(() => {
            const isContain = project.id === "alp-buildcon" || project.id === "creavo";
            return (
              <div
                className={cn(
                  "mt-10 overflow-hidden rounded-2xl border border-white/10 shadow-2xl relative group",
                  isContain ? "bg-[#090a10]" : "bg-black/60"
                )}
              >
                <img
                  src={project.image}
                  alt={`${project.title} live screenshot`}
                  className={cn(
                    "w-full transition-transform duration-700 group-hover:scale-[1.02]",
                    isContain
                      ? "object-contain max-h-[650px] p-4 sm:p-6 mx-auto"
                      : "object-cover object-top"
                  )}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex items-center justify-between">
                  <span className="text-xs font-mono text-white/80">Live Production Build</span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[#E44C1F] px-4 py-2 text-xs font-bold text-white hover:bg-[#ff5d2e] shadow-[0_0_20px_rgba(228,76,31,0.3)] transition-all"
                  >
                    <span>Launch {project.title}</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            );
          })()}

          {/* Core Case Study Sections */}
          <div className="mt-16 space-y-14">
            {/* The Challenge */}
            <div className="border-b border-white/[0.08] pb-12">
              <span className="text-xs font-mono tracking-widest text-[#E44C1F] uppercase font-bold">
                01 / THE CHALLENGE
              </span>
              <h2 className="mt-3 font-agency-headline text-2xl sm:text-3xl font-bold uppercase text-white">
                Client Goals & Requirements
              </h2>
              <p className="mt-4 text-base text-neutral-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* The Solution */}
            <div className="border-b border-white/[0.08] pb-12">
              <span className="text-xs font-mono tracking-widest text-[#E44C1F] uppercase font-bold">
                02 / THE SOLUTION
              </span>
              <h2 className="mt-3 font-agency-headline text-2xl sm:text-3xl font-bold uppercase text-white">
                Design & Implementation
              </h2>
              <p className="mt-4 text-base text-neutral-300 leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Key Features */}
            <div className="border-b border-white/[0.08] pb-12">
              <span className="text-xs font-mono tracking-widest text-[#E44C1F] uppercase font-bold">
                03 / KEY FEATURES
              </span>
              <h2 className="mt-3 font-agency-headline text-2xl sm:text-3xl font-bold uppercase text-white">
                What Was Built
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {project.keyFeatures.map((feat: { title: string; description: string }, idx: number) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/[0.08] bg-[#0c0c10] p-5"
                  >
                    <span className="font-mono text-xs text-[#E44C1F] font-bold">
                      0{idx + 1}
                    </span>
                    <h3 className="mt-2 text-sm font-bold uppercase text-white">
                      {feat.title}
                    </h3>
                    <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables Checklist */}
            <div className="border-b border-white/[0.08] pb-12">
              <span className="text-xs font-mono tracking-widest text-[#E44C1F] uppercase font-bold">
                04 / DELIVERABLES
              </span>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold uppercase text-white">
                What Was Shipped to Production
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {project.deliverables.map((item: string, idx: number) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 rounded-lg border border-white/[0.06] bg-[#0b0b0f] p-3.5 text-xs text-white/80"
                  >
                    <span className="text-[#E44C1F] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Stack Architecture */}
            <div className="border-b border-white/[0.08] pb-12">
              <span className="text-xs font-mono tracking-widest text-[#E44C1F] uppercase font-bold">
                05 / TECH SPECIFICATION
              </span>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold uppercase text-white">
                Architecture & Performance Stack
              </h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs font-semibold text-white/90"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="mt-6 space-y-2">
                {project.architecture.map((arch: string, idx: number) => (
                  <li key={idx} className="font-mono text-xs text-white/60">
                    <span className="text-[#E44C1F] mr-2">›</span>
                    {arch}
                  </li>
                ))}
              </ul>
            </div>

            {/* Linked Industry & Services */}
            {industry ? (
              <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d12] p-6 sm:p-8">
                <span className="text-xs font-mono text-[#E44C1F] uppercase font-bold">
                  INDUSTRY VERTICAL
                </span>
                <h3 className="mt-2 font-display text-xl font-bold uppercase text-white">
                  Built for {industry.title}
                </h3>
                <p className="mt-2 text-xs text-white/60 leading-relaxed max-w-xl">
                  {industry.headline}
                </p>
                <div className="mt-4">
                  <Link
                    to="/industries/$slug"
                    params={{ slug: industry.slug }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E44C1F] hover:underline"
                  >
                    <span>Explore our {industry.shortTitle} capabilities</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ) : null}
          </div>

          {/* Next Project Navigator */}
          <div className="mt-20 border-t border-white/[0.08] pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              to="/work"
              className="text-xs font-mono uppercase text-white/50 hover:text-white transition-colors"
            >
              ← Back to All Projects
            </Link>

            <Link
              to="/work/$slug"
              params={{ slug: nextProject.slug }}
              className="group flex items-center gap-4 text-right"
            >
              <div>
                <span className="text-[10px] font-mono uppercase text-[#E44C1F]">Next Project</span>
                <p className="font-display text-lg font-bold uppercase text-white group-hover:text-[#E44C1F] transition-colors">
                  {nextProject.title} →
                </p>
              </div>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
