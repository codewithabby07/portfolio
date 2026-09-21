import { useEffect } from "react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/cn";

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

  const isContain = project.id === "alp-buildcon" || project.id === "creavo";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-2xl transition-all duration-300 animate-in fade-in"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-[28px] sm:rounded-[36px] bg-[#0d0e14]/95 text-white p-5 sm:p-7 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] border border-white/15 my-auto backdrop-blur-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-[#E44C1F] hover:text-white transition-all cursor-pointer z-10"
        >
          ✕
        </button>

        {/* Header */}
        <div className="flex flex-wrap items-center gap-2.5 pr-10">
          <span className="font-mono text-xs font-bold text-[#E44C1F]">
            PROJECT {project.number}
          </span>
          <span className="text-white/20">•</span>
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            {project.category}
          </span>
          {project.impact ? (
            <span className="rounded-full bg-[#E44C1F]/15 border border-[#E44C1F]/30 px-2.5 py-0.5 text-[10px] font-bold text-[#E44C1F]">
              ⚡ {project.impact}
            </span>
          ) : null}
        </div>

        <h3 className="font-agency-headline mt-2 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {project.title}
        </h3>

        {/* Screenshot (Contained, iPhone-style frame) */}
        <div
          className={cn(
            "mt-4 overflow-hidden rounded-[20px] border border-white/10 shadow-inner flex items-center justify-center",
            isContain ? "bg-[#07080c] p-3" : "bg-neutral-900"
          )}
        >
          <img
            src={project.image}
            alt={project.title}
            className={cn(
              "w-full max-h-[260px] sm:max-h-[300px] rounded-[14px]",
              isContain ? "object-contain" : "object-cover object-top"
            )}
          />
        </div>

        {/* Description */}
        <div className="mt-5">
          <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400">
            About This Project
          </h4>
          <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-neutral-300 font-sans">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="mt-4">
          <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 font-mono text-[11px] text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-4">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#E44C1F] px-5 py-3 text-xs font-bold tracking-wider text-white uppercase transition-all duration-300 hover:bg-[#ff5d2e] shadow-[0_0_20px_rgba(228,76,31,0.35)] active:scale-95"
            >
              <span>Visit Live Website</span>
              <span className="text-sm">↗</span>
            </a>
          ) : null}

          <button
            type="button"
            onClick={onClose}
            className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-xs font-bold tracking-wider text-white uppercase hover:bg-white/10 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
