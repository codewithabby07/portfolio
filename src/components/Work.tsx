import { useState, useRef, type MouseEvent } from "react";
import { Link } from "@tanstack/react-router";
import { projects, isFilled, type Project } from "@/data/projects";
import { MediaReveal, Reveal, SectionLabel, HandwrittenWord } from "@/components/ui";
import { ProjectModal } from "@/components/ProjectModal";
import { cn } from "@/lib/cn";
import { usePointerFine, useReducedMotion } from "@/lib/motion";

function ProjectMeta({ project }: { project: Project }) {
  const bits = [
    isFilled(project.role) ? project.role : null,
    project.year || null,
    project.technologies.length ? project.technologies.slice(0, 3).join(" • ") : null,
  ].filter(Boolean) as string[];

  if (!bits.length) return null;

  return (
    <p className="text-[11px] tracking-[0.14em] text-neutral-500 uppercase font-mono">
      {bits.join("  /  ")}
    </p>
  );
}

function ProjectImage({
  project,
}: {
  project: Project;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const fine = usePointerFine();
  const reduce = useReducedMotion();

  function onMove(event: MouseEvent<HTMLDivElement>) {
    if (!fine || reduce || !frameRef.current) return;
    const img = frameRef.current.querySelector("[data-img]") as HTMLElement | null;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    const rotY = x * 8;
    const rotX = -y * 6;
    frameRef.current.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.01, 1.01, 1.01)`;
    if (img) {
      img.style.transform = `scale(1.03) translate3d(${x * 6}px, ${y * 4}px, 0)`;
    }
  }

  function onLeave() {
    if (frameRef.current) {
      frameRef.current.style.transform = "";
    }
    const img = frameRef.current?.querySelector("[data-img]") as HTMLElement | null;
    if (img) img.style.transform = "";
  }

  const isContain = project.id === "alp-buildcon" || project.id === "creavo";

  return (
    <div
      ref={frameRef}
      className={cn(
        "relative overflow-hidden rounded-[20px] sm:rounded-[24px] border border-neutral-200/80 shadow-lg transition-all duration-300 ease-out group-hover/project:border-[#E44C1F]/50 group-hover/project:shadow-2xl will-change-transform",
        isContain ? "bg-[#090a10]" : "bg-neutral-900"
      )}
      style={{ transformStyle: "preserve-3d" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <img
        data-img
        src={project.image}
        alt={`${project.title} live preview`}
        width={1600}
        height={1000}
        loading="lazy"
        className={cn(
          "aspect-[16/10] h-full w-full rounded-[18px] transition-transform duration-500 ease-out",
          isContain ? "object-contain p-2 md:p-3" : "object-cover object-top"
        )}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-40 rounded-2xl" />
      <span className="pointer-events-none absolute right-4 bottom-2 text-3xl font-mono font-bold text-white/30 md:text-4xl">
        {project.number}
      </span>
    </div>
  );
}

function ProjectBlock({
  project,
  index,
  onOpenModal,
}: {
  project: Project;
  index: number;
  onOpenModal: (project: Project) => void;
}) {
  const reverse = index % 2 === 1;
  const live = isFilled(project.liveUrl);

  return (
    <article className="group/project border-t border-neutral-200 py-10 transition-[border-color] duration-300 hover:border-[#E44C1F]/40 md:py-14">
      <div
        className={cn(
          "grid items-center gap-8 lg:grid-cols-12 lg:gap-12",
          reverse && "lg:[&>div:first-child]:order-2",
        )}
      >
        <Reveal className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#E44C1F]">
              PROJECT {project.number}
            </span>
            <span className="text-neutral-300">•</span>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500">
              {project.category}
            </span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-950 group-hover/project:text-[#E44C1F] transition-colors">
            {project.title}
          </h3>

          <p className="text-sm leading-relaxed text-neutral-700">
            {project.description}
          </p>

          {project.impact ? (
            <div className="inline-flex items-center gap-1.5 rounded-md bg-[#E44C1F]/10 border border-[#E44C1F]/20 px-2.5 py-1 text-xs font-bold text-[#E44C1F]">
              <span>⚡</span>
              <span>{project.impact}</span>
            </div>
          ) : null}

          <ProjectMeta project={project} />

          {/* Action Buttons: Live Link + Case Study */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            {live ? (
              <a
                href={project.liveUrl}
                className="inline-flex items-center gap-2 rounded-xl bg-[#E44C1F] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#ff5d2e] hover:shadow-[0_0_20px_rgba(228,76,31,0.3)] active:scale-95"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Visit Live Website</span>
                <span className="text-sm font-bold">↗</span>
              </a>
            ) : null}

            <Link
              to="/work/$slug"
              params={{ slug: project.slug }}
              className="inline-flex items-center gap-1.5 rounded-xl border border-neutral-300 bg-neutral-100 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-900 hover:border-neutral-400 hover:bg-neutral-200 transition-all"
            >
              <span>Case Study</span>
              <span aria-hidden>→</span>
            </Link>

            <button
              type="button"
              onClick={() => onOpenModal(project)}
              className="inline-flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-950 transition-colors cursor-pointer ml-1 font-medium"
            >
              <span>Quick Preview</span>
            </button>
          </div>
        </Reveal>

        <div className="lg:col-span-7" onClick={() => onOpenModal(project)}>
          <div data-view-cursor className="cursor-pointer">
            <MediaReveal delay={0.06}>
              <ProjectImage project={project} />
            </MediaReveal>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<string>("featured");

  const tabs = [
    { id: "featured", label: "Featured Showcase" },
    { id: "all", label: "All Projects" },
    { id: "creative-agencies", label: "Video & Studios" },
    { id: "construction-real-estate", label: "Real Estate" },
    { id: "saas-growth-tools", label: "SaaS & AI" },
  ];

  // Featured list: includes the 6 newly integrated showcase projects + top flagships
  const FEATURED_SLUGS = [
    "sample-video",
    "santha-editing",
    "silvane-estates",
    "aqua-plumbing",
    "kevin-vfx",
    "ai-startup-saas",
    "alp-buildcon",
    "creavo",
    "zainca",
  ];

  const displayedProjects = (() => {
    if (activeTab === "featured") {
      return projects.filter((p) => FEATURED_SLUGS.includes(p.slug));
    }
    if (activeTab === "all") {
      return projects;
    }
    return projects.filter((p) => p.industrySlug === activeTab);
  })();

  return (
    <section
      id="work"
      className="relative scroll-mt-32 bg-white text-neutral-900 py-16 md:py-24 border-t border-neutral-200"
      aria-labelledby="work-heading"
    >
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-neutral-200 pb-8">
            <div>
              <SectionLabel className="text-[#E44C1F] font-mono text-xs font-bold uppercase tracking-wider">
                Production Portfolio
              </SectionLabel>
              <h2
                id="work-heading"
                className="font-display mt-2 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950"
              >
                Selected <HandwrittenWord variant="swoosh"><span className="text-[#E44C1F]">Work</span></HandwrittenWord>
              </h2>
              <p className="mt-2 text-sm text-neutral-600 max-w-xl">
                Real production web platforms designed and engineered with custom layouts, 60fps animations, and live deployments.
              </p>
            </div>

            {/* View All Projects Option */}
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-900 hover:border-[#E44C1F] hover:bg-[#E44C1F] hover:text-white transition-all shadow-sm shrink-0"
            >
              <span>Explore All 12 Projects</span>
              <span>→</span>
            </Link>
          </div>
        </Reveal>

        {/* Filter Tabs on Homepage */}
        <div className="mt-8 flex flex-wrap items-center gap-2 pb-2">
          {tabs.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer",
                  active
                    ? "bg-[#E44C1F] text-white shadow-[0_0_20px_rgba(228,76,31,0.3)]"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900 border border-neutral-200"
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Project Blocks Grid */}
        <div className="mt-6">
          {displayedProjects.map((project, index) => (
            <ProjectBlock
              key={project.id}
              project={project}
              index={index}
              onOpenModal={setSelectedProject}
            />
          ))}
        </div>

        {/* Prominent View All Projects Option at the Bottom */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-8 sm:p-10 shadow-sm">
          <div>
            <span className="text-xs font-mono text-[#E44C1F] font-semibold uppercase tracking-wider">
              Complete Portfolio Archive
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-950 mt-1">
              Want to see all case studies & performance specs?
            </h3>
            <p className="text-xs text-neutral-600 mt-1">
              Explore all live deployments across Real Estate, Healthcare, SaaS, Video Production, and Creative Studios.
            </p>
          </div>

          <Link
            to="/work"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#E44C1F] px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#ff5d2e] shadow-[0_0_25px_rgba(228,76,31,0.25)] transition-all shrink-0"
          >
            <span>View All Projects Catalog</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
