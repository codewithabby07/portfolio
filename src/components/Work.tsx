import { useEffect, useRef, useState, type MouseEvent } from "react";
import { projects, isFilled, type Project } from "@/data/projects";
import { ArrowIcon, LineReveal, MediaReveal, Reveal, SectionLabel } from "@/components/ui";
import { cn } from "@/lib/cn";
import { usePointerFine, useReducedMotion } from "@/lib/motion";

function ProjectMeta({ project }: { project: Project }) {
  const bits = [
    isFilled(project.role) ? project.role : null,
    project.year || null,
    project.technologies.length ? project.technologies.join(" · ") : null,
  ].filter(Boolean) as string[];

  if (!bits.length) return null;

  return (
    <p className="text-[12px] tracking-[0.14em] text-muted uppercase">
      {bits.join("  /  ")}
    </p>
  );
}

function ProjectImage({
  project,
  interactive,
}: {
  project: Project;
  interactive: boolean;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const fine = usePointerFine();
  const reduce = useReducedMotion();

  function onMove(event: MouseEvent<HTMLDivElement>) {
    if (!fine || reduce) return;
    const img = frameRef.current?.querySelector("[data-img]") as HTMLElement | null;
    if (!img) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8;
    img.style.transform = `scale(1.045) translate3d(${x}px, ${y}px, 0)`;
  }

  function onLeave() {
    const img = frameRef.current?.querySelector("[data-img]") as HTMLElement | null;
    if (img) img.style.transform = "";
  }

  const isContain = project.id === "alp-buildcon" || project.id === "creavo";

  return (
    <div
      ref={frameRef}
      className={cn(
        "relative overflow-hidden rounded-xl shadow-xl",
        isContain ? "bg-[#09090c]" : "bg-dark/10"
      )}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <img
        data-img
        src={project.image}
        alt={`${project.title} project preview`}
        width={1600}
        height={1000}
        loading="lazy"
        className={cn(
          "project-img aspect-[16/10] h-full w-full rounded-xl transition-transform duration-500",
          isContain ? "object-contain p-1.5 md:p-2" : "object-cover object-top"
        )}
      />
      <div className="project-shade pointer-events-none absolute inset-0 rounded-xl" />
      <span className="project-index display pointer-events-none absolute right-6 bottom-4 text-5xl text-white/35 md:text-7xl">
        {project.number}
      </span>
      {interactive ? (
        <span className="sr-only">Open {project.title}</span>
      ) : null}
    </div>
  );
}

function ProjectBlock({ project, index }: { project: Project; index: number }) {
  const reverse = index % 2 === 1;
  const live = isFilled(project.liveUrl);
  const study = isFilled(project.caseStudyUrl);
  const href = live ? project.liveUrl : study ? project.caseStudyUrl : undefined;

  const image = (
    <MediaReveal delay={0.06}>
      <ProjectImage project={project} interactive={Boolean(href)} />
    </MediaReveal>
  );

  return (
    <article className="group/project border-t border-border py-12 transition-[border-color] duration-500 hover:border-accent/50 md:py-16">
      <div
        className={cn(
          "grid items-end gap-8 lg:grid-cols-12 lg:gap-12",
          reverse && "lg:[&>div:first-child]:order-2",
        )}
      >
        <Reveal className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <p className="font-display text-sm font-semibold tracking-[0.2em] text-accent">
              {project.number}
            </p>
            {project.impact ? (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-0.5 text-[10px] font-semibold tracking-wider text-accent uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                {project.impact}
              </span>
            ) : null}
          </div>

          <h3 className="display mt-3 text-4xl text-dark transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/project:translate-x-1 md:text-6xl lg:text-[4.4rem]">
            {project.title}
          </h3>
          <p className="mt-4 text-[12px] tracking-[0.18em] text-muted uppercase">
            {project.category}
          </p>
          {isFilled(project.description) ? (
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              {project.description}
            </p>
          ) : null}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <ProjectMeta project={project} />
            {href ? (
              <a
                href={href}
                className="project-link group/link text-sm font-medium text-dark"
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                View project
                <ArrowIcon className="cta-arrow" />
              </a>
            ) : null}
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          {href ? (
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={`${project.title} project`}
              data-view-cursor
            >
              {image}
            </a>
          ) : (
            image
          )}
        </div>
      </div>
    </article>
  );
}

function ViewHint() {
  const fine = usePointerFine();
  const reduce = useReducedMotion();
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (!fine || reduce) return;

    const onMove = (event: globalThis.MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const hovering = Boolean(target?.closest("[data-view-cursor]"));
      setOn(hovering);
      if (hovering) {
        setPoint({ x: event.clientX, y: event.clientY });
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [fine, reduce]);

  if (!fine || reduce) return null;

  return (
    <div
      className={cn("view-hint", on && "is-on")}
      style={{ left: point.x, top: point.y }}
      aria-hidden
    >
      View
    </div>
  );
}

export function Work() {
  return (
    <section
      id="work"
      className="scroll-mt-32 bg-background pb-8 md:pb-12"
      aria-labelledby="work-heading"
    >
      <ViewHint />
      <div className="page-shell">
        <Reveal>
          <SectionLabel>Portfolio</SectionLabel>
          <h2
            id="work-heading"
            className="display mt-4 text-[13vw] text-dark sm:text-7xl md:text-8xl"
          >
            <LineReveal lines={["SELECTED WORK."]} />
          </h2>
        </Reveal>

        <div className="mt-6 md:mt-8">
          {projects.map((project, index) => (
            <ProjectBlock key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
