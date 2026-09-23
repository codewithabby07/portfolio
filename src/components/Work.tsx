import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { projects, isFilled, type Project } from "@/data/projects";
import { Reveal, SectionLabel, HandwrittenWord } from "@/components/ui";
import { ProjectModal } from "@/components/ProjectModal";
import { cn } from "@/lib/cn";

function getProjectTags(project: Project): string[] {
  const customTags: Record<string, string[]> = {
    "sample-video": ["Video", "Streaming"],
    "santha-editing": ["Editing", "Creator"],
    "aqua-plumbing": ["Business", "Lead-Gen"],
    "silvane-estates": ["Editorial", "Estates"],
    "kevin-vfx": ["Video", "Creator"],
    "ai-startup-saas": ["SaaS", "Startup"],
    "alp-buildcon": ["Real Estate", "Infrastructure"],
    "creavo": ["Creative", "Studio"],
    "zainca": ["E-Commerce", "Luxury"],
    "dentiva": ["Healthcare", "Clinic"],
    "review-funnel": ["SaaS", "Growth Tool"],
    "property-broker": ["Real Estate", "PropTech"],
  };

  if (customTags[project.slug] || customTags[project.id]) {
    return customTags[project.slug] || customTags[project.id];
  }

  return [project.category.split("&")[0].trim(), project.technologies[0] || "Web"];
}

function renderStyledTitle(title: string) {
  const parts = title.trim().split(" ");
  if (parts.length === 1) {
    return (
      <span className="capitalize">
        {title.toLowerCase()}{" "}
        <em
          className="font-editorial-serif italic font-normal text-[#E44C1F] not-italic ml-1"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Studio
        </em>
      </span>
    );
  }
  const mainPart = parts.slice(0, -1).join(" ");
  const lastPart = parts[parts.length - 1];

  return (
    <span className="capitalize">
      {mainPart.toLowerCase()}{" "}
      <em
        className="font-editorial-serif italic font-normal text-[#E44C1F] not-italic ml-0.5"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        {lastPart.toLowerCase()}
      </em>
    </span>
  );
}

function WorkCard({
  project,
  onOpenModal,
}: {
  project: Project;
  onOpenModal: (project: Project) => void;
}) {
  const tags = getProjectTags(project);
  const live = isFilled(project.liveUrl);
  const isContain = project.id === "alp-buildcon" || project.id === "creavo";

  return (
    <article className="group/card relative flex flex-col justify-between overflow-hidden rounded-[18px] border border-[#EFECE6] bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#E44C1F]/60 hover:shadow-[0_16px_40px_-14px_rgba(0,0,0,0.09)]">
      {/* Top Image Thumbnail Container */}
      <div
        className="relative h-[200px] sm:h-[240px] md:h-[260px] w-full overflow-hidden bg-[#F4F1EC] cursor-pointer"
        onClick={() => (live ? window.open(project.liveUrl, "_blank") : onOpenModal(project))}
      >
        <img
          src={project.image}
          alt={`${project.title} live screenshot`}
          width={1200}
          height={750}
          loading="lazy"
          className={cn(
            "h-full w-full object-top transition-transform duration-700 ease-out group-hover/card:scale-105 group-hover/card:brightness-[1.03]",
            isContain ? "object-contain p-3 bg-[#0A0A0E]" : "object-cover"
          )}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />

        {/* Top Right Project Number */}
        <span className="pointer-events-none absolute top-3 right-3.5 rounded-full bg-black/50 px-2.5 py-0.5 font-mono text-[11px] font-bold text-white backdrop-blur-md border border-white/10">
          {project.number}
        </span>

        {/* Impact Badge on thumbnail if available */}
        {project.impact && (
          <span className="pointer-events-none absolute bottom-3 left-3.5 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold text-neutral-900 shadow-sm backdrop-blur-md border border-neutral-100">
            <span className="text-[#E44C1F]">⚡</span>
            <span>{project.impact}</span>
          </span>
        )}
      </div>

      {/* Card Content Body */}
      <div className="flex flex-1 flex-col justify-between p-4.5 sm:p-5 md:p-6 gap-3">
        <div>
          {/* Tags */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {tags.map((tag, idx) => (
              <span
                key={tag}
                className={cn(
                  "rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider transition-colors",
                  idx === 0
                    ? "bg-[#E44C1F]/10 text-[#E44C1F] group-hover/card:bg-[#E44C1F]/15"
                    : "bg-neutral-100 text-neutral-600 group-hover/card:bg-neutral-200"
                )}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="mt-2.5 font-display text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 transition-colors group-hover/card:text-[#E44C1F]">
            {renderStyledTitle(project.title)}
          </h3>

          {/* Description */}
          <p className="mt-1.5 text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Footer Actions / Links */}
        <div className="mt-2 pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
          {/* Left: Visit Site with Founder/Studio Icon */}
          {live ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#E44C1F] transition-all hover:text-neutral-950"
            >
              <img
                src="/favicon.svg"
                alt="CodeWithAbby"
                className="h-5 w-5 rounded-full border border-neutral-200 bg-[#0A0A0C] p-0.5 object-contain"
              />
              <span>Visit live site</span>
              <span className="text-sm font-bold transition-transform duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5">
                ↗
              </span>
            </a>
          ) : (
            <button
              type="button"
              onClick={() => onOpenModal(project)}
              className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#E44C1F]"
            >
              <img
                src="/favicon.svg"
                alt="CodeWithAbby"
                className="h-5 w-5 rounded-full border border-neutral-200 bg-[#0A0A0C] p-0.5 object-contain"
              />
              <span>View specs</span>
              <span>→</span>
            </button>
          )}

          {/* Right: Case Study & Quick Preview */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenModal(project)}
              className="text-[11px] sm:text-xs font-medium text-neutral-500 hover:text-neutral-950 transition-colors cursor-pointer hidden sm:inline-block"
            >
              Preview
            </button>
            <Link
              to="/work/$slug"
              params={{ slug: project.slug }}
              className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-800 transition-all hover:border-[#E44C1F] hover:bg-[#E44C1F] hover:text-white"
            >
              <span>Case Study</span>
              <span className="font-bold">→</span>
            </Link>
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
                Selected Work
              </SectionLabel>
              <h2
                id="work-heading"
                className="font-display mt-2 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950"
              >
                Built different,{" "}
                <HandwrittenWord variant="swoosh">
                  <span className="text-[#E44C1F]">shipped live.</span>
                </HandwrittenWord>
              </h2>
              <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-xl leading-relaxed">
                Each project with its own voice, structure, and conversion path. All running in production right now.
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

        {/* Project Cards Grid (1 column on mobile, 2 columns on desktop) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {displayedProjects.map((project) => (
            <WorkCard
              key={project.id}
              project={project}
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
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
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

