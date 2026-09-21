import { projects, isFilled, type Project } from "@/data/projects";
import { ArrowIcon, Reveal, SectionLabel } from "@/components/ui";
import { cn } from "@/utils/cn";

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

function ProjectBlock({ project, index }: { project: Project; index: number }) {
  const reverse = index % 2 === 1;
  const live = isFilled(project.liveUrl);
  const study = isFilled(project.caseStudyUrl);
  const href = live ? project.liveUrl : study ? project.caseStudyUrl : undefined;

  const image = (
    <div className="group relative overflow-hidden bg-dark">
      <img
        src={project.image}
        alt={`${project.title} project still`}
        width={1600}
        height={1000}
        loading="lazy"
        className="aspect-[16/10] h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <div className="pointer-events-none absolute inset-0 bg-dark/0 transition-colors duration-500 group-hover:bg-dark/20" />
      <span className="display pointer-events-none absolute right-5 bottom-3 text-6xl text-white/35 md:text-8xl">
        {project.number}
      </span>
    </div>
  );

  return (
    <article className="border-t border-border py-12 md:py-16">
      <div
        className={cn(
          "grid items-end gap-8 lg:grid-cols-12 lg:gap-12",
          reverse && "lg:[&>div:first-child]:order-2",
        )}
      >
        <Reveal className="lg:col-span-5">
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-accent">
            {project.number}
          </p>
          <h3 className="display mt-3 text-4xl text-dark md:text-6xl lg:text-[4.4rem]">
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
                className="inline-flex items-center gap-2 text-sm font-medium text-dark"
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                View project
                <ArrowIcon />
              </a>
            ) : null}
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.08}>
          {href ? (
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={`${project.title} project`}
            >
              {image}
            </a>
          ) : (
            image
          )}
        </Reveal>
      </div>
    </article>
  );
}

export function Work() {
  return (
    <section
      id="work"
      className="scroll-mt-24 bg-background pb-8 md:pb-12"
      aria-labelledby="work-heading"
    >
      <div className="page-shell">
        <Reveal>
          <SectionLabel>Portfolio</SectionLabel>
          <h2
            id="work-heading"
            className="display mt-4 text-[13vw] text-dark sm:text-7xl md:text-8xl"
          >
            SELECTED WORK.
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
