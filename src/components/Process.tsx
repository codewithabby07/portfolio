import { Reveal, SectionLabel } from "@/components/ui";

const steps = [
  {
    number: "01",
    title: "DISCOVERY",
    emoji: "🔍",
    description:
      "We talk through your goals, audience, and what you need the site to do. I ask the questions that shape the build before writing a single line of code.",
  },
  {
    number: "02",
    title: "DESIGN",
    emoji: "🎨",
    description:
      "Wireframes and high-fidelity mockups. Every layout decision — typography, spacing, colour, motion — is deliberate before development starts.",
  },
  {
    number: "03",
    title: "DEVELOPMENT",
    emoji: "⚡",
    description:
      "Clean code in React, Next.js, and Node.js. Mobile-first, accessible, and performance-tuned from the start.",
  },
  {
    number: "04",
    title: "DELIVERY",
    emoji: "🚀",
    description:
      "Deployed, tested, and handed over with documentation. 30 days of support included after launch.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative scroll-mt-24 overflow-hidden bg-dark py-24 md:py-32"
      aria-labelledby="process-heading"
    >
      {/* Faint grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden
      />

      <div className="page-shell relative">
        {/* Header */}
        <Reveal>
          <SectionLabel light>Process.</SectionLabel>
          <div className="mt-4 flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
            <h2
              id="process-heading"
              className="display text-5xl leading-none text-white md:text-7xl"
            >
              HOW I{" "}
              <em
                className="not-italic text-accent"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Work.
              </em>
            </h2>
            <p className="max-w-xs text-sm text-white/50 md:text-right">
              Four stages, from first call to final deployment.
            </p>
          </div>
        </Reveal>

        {/* Steps grid */}
        <div className="mt-16 grid gap-px bg-white/8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1}>
              <div className="group relative flex h-full flex-col gap-6 bg-dark p-8 transition-colors duration-300 hover:bg-white/5">
                {/* Step number */}
                <span className="font-display text-[11px] font-semibold tracking-[0.22em] text-white/30 uppercase">
                  {step.number}
                </span>

                {/* Emoji icon */}
                <span
                  className="text-4xl transition-transform duration-300 group-hover:scale-110"
                  role="img"
                  aria-label={step.title}
                >
                  {step.emoji}
                </span>

                {/* Title */}
                <h3 className="font-display text-lg font-bold tracking-[0.12em] text-white uppercase">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="flex-1 text-sm leading-relaxed text-white/55">
                  {step.description}
                </p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <Reveal delay={0.4}>
          <div className="mt-px flex items-center justify-between bg-white/5 px-8 py-5">
            <p className="text-sm text-white/40">
              Typical delivery:{" "}
              <span className="font-semibold text-accent">6 – 7 Days</span>
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-accent uppercase transition-opacity hover:opacity-75"
            >
              Start a project
              <span
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden
              >
                →
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
