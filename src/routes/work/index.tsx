import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { projects, type Project } from "@/data/projects";
import { site } from "@/data/site";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProjectModal } from "@/components/ProjectModal";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/work/")({
  component: WorkIndex,
  head: () => ({
    meta: [
      { title: "Client Work & Live Web Projects | CodeWithAbby Studio" },
      {
        name: "description",
        content:
          "Explore production websites and digital experiences built by CodeWithAbby for real businesses. Live links, case studies, and verified performance benchmarks.",
      },
      { property: "og:title", content: "Client Work & Live Web Projects | CodeWithAbby Studio" },
      {
        property: "og:description",
        content:
          "Explore production websites and digital experiences built by CodeWithAbby for real businesses. Live links, case studies, and verified performance benchmarks.",
      },
      { property: "og:url", content: `${site.url}/work` },
      { property: "og:image", content: `${site.url}/images/og.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Client Work & Live Web Projects | CodeWithAbby Studio" },
      { name: "twitter:description", content: "Explore production websites and digital experiences built by CodeWithAbby." },
      { name: "twitter:image", content: `${site.url}/images/og.jpg` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/work` }],
  }),
});

function WorkIndex() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "construction-real-estate", label: "Real Estate & Construction" },
    { id: "creative-agencies", label: "Creative & Studios" },
    { id: "ecommerce-retail", label: "E-Commerce" },
    { id: "healthcare-clinics", label: "Healthcare" },
    { id: "saas-growth-tools", label: "SaaS & Tools" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.industrySlug === filter);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#E44C1F] selection:text-white">
      <Navigation />

      {/* Project Modal for Quick Previews */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <main className="relative overflow-hidden pt-28 sm:pt-36 pb-24 lg:pb-32">
        {/* Ambient atmospheric lighting */}
        <div
          className="pointer-events-none absolute top-20 left-1/4 z-0 h-[550px] w-[550px] rounded-full bg-[radial-gradient(circle,rgba(228,76,31,0.12)_0%,transparent_70%)] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute top-96 right-10 z-0 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_70%)] blur-3xl"
          aria-hidden
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Header */}
          <div className="border-b border-white/[0.08] pb-12">
            <h1 className="font-editorial-serif italic text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.05]">
              Our <span className="text-[#E44C1F]">Work</span>
            </h1>

            <p className="mt-4 max-w-2xl text-base sm:text-lg text-neutral-400 leading-relaxed font-sans">
              Every website below is a real project designed and built for modern businesses. Browse our work, check the case studies, or test the live websites.
            </p>

            {/* Category Filter Tabs with Project Counts */}
            <div className="mt-8 flex flex-wrap items-center gap-2 pt-2">
              {categories.map((cat) => {
                const count =
                  cat.id === "all"
                    ? projects.length
                    : projects.filter((p) => p.industrySlug === cat.id).length;

                const active = filter === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setFilter(cat.id)}
                    className={cn(
                      "group inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer",
                      active
                        ? "bg-[#E44C1F] text-white shadow-[0_0_25px_rgba(228,76,31,0.4)] scale-100"
                        : "border border-white/10 bg-white/[0.03] text-neutral-400 hover:border-white/20 hover:text-white hover:bg-white/[0.06]"
                    )}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={cn(
                        "rounded-full px-1.5 py-0.2 font-mono text-[10px] font-bold transition-colors",
                        active
                          ? "bg-black/25 text-white"
                          : "bg-white/10 text-neutral-400 group-hover:text-white"
                      )}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => {
              const isContain =
                project.id === "alp-buildcon" || project.id === "creavo";

              return (
                <div
                  key={project.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c10]/90 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:shadow-[0_15px_40px_-10px_rgba(228,76,31,0.2)] hover:-translate-y-1"
                >
                  <div>
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#E44C1F]">
                        PROJECT {project.number}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-neutral-300">
                        {project.category}
                      </span>
                    </div>

                    {/* Thumbnail Frame (Fully visible, no awkward cropping) */}
                    <div
                      onClick={() => setSelectedProject(project)}
                      className={cn(
                        "relative mt-5 aspect-[16/10] overflow-hidden rounded-xl border border-white/10 transition-all duration-300 group-hover:border-[#E44C1F]/50 cursor-pointer",
                        isContain ? "bg-[#090a10]" : "bg-neutral-900"
                      )}
                      title="Click for quick preview"
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} live screenshot`}
                        className={cn(
                          "h-full w-full transition-transform duration-500 group-hover:scale-[1.03]",
                          isContain
                            ? "object-contain p-2.5 sm:p-3"
                            : "object-cover object-top"
                        )}
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-30 rounded-xl" />
                      <span className="pointer-events-none absolute right-3 bottom-2 text-3xl font-mono font-bold text-white/15">
                        {project.number}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h2 className="mt-5 font-agency-headline text-xl font-bold tracking-tight text-white group-hover:text-[#E44C1F] transition-colors">
                      {project.title}
                    </h2>
                    <p className="mt-2 text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Impact Metric Badge */}
                    {project.impact ? (
                      <div className="mt-3.5 inline-flex items-center gap-1.5 rounded-md bg-[#E44C1F]/10 border border-[#E44C1F]/20 px-2.5 py-1 text-[11px] font-bold text-[#E44C1F]">
                        <span>⚡</span>
                        <span>{project.impact}</span>
                      </div>
                    ) : null}

                    {/* Tech Stack Pills */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded bg-white/[0.04] border border-white/5 px-2 py-0.5 font-mono text-[10px] text-neutral-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Interactive Actions */}
                  <div className="mt-6 flex items-center gap-2.5 border-t border-white/[0.08] pt-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#E44C1F] py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#ff5d2e] active:scale-95 shadow-[0_0_15px_rgba(228,76,31,0.25)]"
                    >
                      <span>Live Site</span>
                      <span className="text-sm">↗</span>
                    </a>

                    <Link
                      to="/work/$slug"
                      params={{ slug: project.slug }}
                      className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:border-white/40 hover:bg-white/10 active:scale-95"
                      title="View Case Study"
                    >
                      <span>Case Study</span>
                      <span className="ml-1">→</span>
                    </Link>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] p-2.5 text-neutral-400 hover:text-white hover:border-white/30 transition-all cursor-pointer"
                      title="Quick Preview"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                        <path
                          fillRule="evenodd"
                          d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Creative Bottom CTA Banner */}
          <div className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-br from-[#12131a] via-[#090a0e] to-[#000000] p-8 sm:p-12 relative overflow-hidden shadow-2xl md:flex md:items-center md:justify-between gap-8">
            <div
              className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-[#E44C1F]/15 blur-3xl"
              aria-hidden
            />
            <div className="max-w-xl relative z-10">
              <span className="text-xs font-mono font-bold tracking-widest text-[#E44C1F] uppercase">
                START YOUR PROJECT
              </span>
              <h3 className="mt-2 font-agency-headline text-2xl sm:text-3xl font-extrabold text-white">
                Ready for a website that actually converts?
              </h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                Work directly with Syed Abbas Ali. High-speed engineering, custom design, and modern code delivered in 6–14 days.
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
