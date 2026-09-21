import { Link } from "@tanstack/react-router";
import { Reveal, SectionLabel } from "@/components/ui";

const steps = [
  {
    number: "01",
    title: "Discovery & Scope",
    description:
      "We discuss business goals, target audience, and functional requirements. Every architectural decision is validated before writing code.",
  },
  {
    number: "02",
    title: "Design & Blueprint",
    description:
      "Clean wireframes, typographic hierarchy, and responsive layout systems tailored to your brand identity.",
  },
  {
    number: "03",
    title: "Clean Engineering",
    description:
      "Custom development using React, Next.js, and Tailwind CSS. Zero bloat, mobile-first, and optimized for sub-second speeds.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "Comprehensive multi-device QA, edge deployment on Vercel, domain configuration, and direct post-launch support.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative scroll-mt-24 overflow-hidden bg-black text-white py-20 md:py-28 border-t border-white/10"
      aria-labelledby="process-heading"
    >
      {/* Background Dot Matrix Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <Reveal>
          <div className="border-b border-white/[0.06] pb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <SectionLabel>Methodology</SectionLabel>
              <h2
                id="process-heading"
                className="font-display mt-2 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
              >
                How We Deliver.
              </h2>
            </div>
            <p className="max-w-xs text-sm text-[#86868b]">
              A transparent 4-stage execution model from initial brief to global edge launch.
            </p>
          </div>
        </Reveal>

        {/* Steps Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.05}>
              <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">
                <div>
                  <span className="font-mono text-xs font-semibold text-[#E44C1F]">
                    Stage {step.number}
                  </span>
                  <h3 className="font-display mt-4 text-lg font-bold text-white group-hover:text-[#E44C1F] transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#86868b]">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-white/40">Step {i + 1} of 4</span>
                  <span className="text-xs text-[#E44C1F]">✦</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Velocity Banner */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl px-8 py-5">
          <p className="text-xs sm:text-sm text-[#86868b]">
            Average studio project velocity:{" "}
            <span className="font-semibold text-white">6 – 14 Business Days</span>
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E44C1F] hover:underline"
          >
            <span>Start a Project with Us</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
