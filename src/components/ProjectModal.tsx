import { useEffect } from "react";
import type { Project } from "@/data/projects";
import { ArrowIcon } from "@/components/ui";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-dark/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl bg-surface p-6 sm:p-10 shadow-2xl border border-border overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-dark/10 text-dark hover:bg-dark hover:text-white transition-colors"
        >
          ✕
        </button>

        {/* Header */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-display text-sm font-bold text-accent">
            {project.number}
          </span>
          <span className="text-xs font-semibold tracking-wider text-muted uppercase">
            {project.category}
          </span>
          {project.impact ? (
            <span className="rounded-full bg-accent/10 border border-accent/30 px-3 py-0.5 text-[10px] font-bold text-accent uppercase">
              {project.impact}
            </span>
          ) : null}
        </div>

        <h3 className="display mt-2 text-3xl sm:text-5xl text-dark">
          {project.title}
        </h3>

        {/* Screenshot */}
        <div className="mt-6 overflow-hidden rounded-xl bg-dark/10 border border-border shadow-inner">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover max-h-[340px]"
          />
        </div>

        {/* Description */}
        <div className="mt-6">
          <h4 className="font-display text-xs font-bold tracking-widest text-muted uppercase">
            Architecture & Execution
          </h4>
          <p className="mt-2 text-base leading-relaxed text-dark/80">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="mt-6">
          <h4 className="font-display text-xs font-bold tracking-widest text-muted uppercase mb-3">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-sm bg-dark/5 border border-dark/10 px-3 py-1 text-xs font-medium text-dark"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-6">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-dark px-6 py-3 text-xs font-extrabold tracking-widest text-white uppercase transition-all hover:bg-accent"
            >
              <span>Visit Live Website</span>
              <ArrowIcon className="h-3 w-3" />
            </a>
          ) : null}

          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-border px-6 py-3 text-xs font-bold tracking-widest text-dark uppercase hover:bg-dark/5 transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
