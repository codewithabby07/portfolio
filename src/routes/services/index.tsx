import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/services/")({
  component: ServicesIndex,
  head: () => ({
    meta: [
      { title: "Services | CodeWithAbby Web Studio" },
      {
        name: "description",
        content:
          "Custom web development, frontend engineering, UI/UX design, and performance optimization for growing businesses.",
      },
      { property: "og:title", content: "Services | CodeWithAbby Web Studio" },
      {
        property: "og:description",
        content:
          "Custom web development, frontend engineering, UI/UX design, and performance optimization for growing businesses.",
      },
      { property: "og:url", content: `${site.url}/services` },
    ],
  }),
});

function ServicesIndex() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#E44C1F] selection:text-white">
      <Navigation />

      <main className="relative overflow-hidden pt-28 sm:pt-36 pb-24 lg:pb-32">
        {/* Ambient atmospheric glow */}
        <div
          className="pointer-events-none absolute top-20 left-1/2 -translate-x-1/2 z-0 h-[600px] w-[700px] rounded-full bg-[radial-gradient(ellipse,rgba(228,76,31,0.08)_0%,transparent_70%)] blur-3xl"
          aria-hidden
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="border-b border-white/[0.08] pb-12">
            <h1 className="font-editorial-serif italic text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.05]">
              Our <span className="text-[#E44C1F]">Services</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-neutral-400 leading-relaxed font-sans">
              We design and develop custom websites that look great, load fast, and convert visitors into clients. Direct collaboration, clean code, and zero fluff.
            </p>
          </div>

          {/* Services Stacked Grid */}
          <div className="mt-12 space-y-8">
            {services.map((service) => (
              <div
                key={service.slug}
                className="group relative overflow-hidden rounded-[28px] sm:rounded-[32px] border border-white/[0.08] bg-[#0c0c10]/90 p-6 sm:p-10 backdrop-blur-2xl transition-all duration-300 hover:border-white/20 hover:shadow-[0_15px_45px_-15px_rgba(228,76,31,0.2)] hover:-translate-y-1"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                  {/* Left Column: Title & Overview */}
                  <div className="max-w-xl">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#E44C1F]">
                        SERVICE {service.number}
                      </span>
                      <span className="text-white/20">•</span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-neutral-300">
                        {service.shortTitle}
                      </span>
                    </div>

                    <h2 className="mt-4 font-agency-headline text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[#E44C1F] transition-colors">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-sm font-medium text-neutral-200">
                      {service.tagline}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                      {service.summary}
                    </p>

                    {/* Tech Stack */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {service.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg bg-white/[0.04] border border-white/5 px-2.5 py-1 font-mono text-[10px] text-neutral-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Key Deliverables & Action */}
                  <div className="flex flex-col justify-between border-t border-white/[0.08] pt-6 lg:border-t-0 lg:pt-0 lg:border-l lg:border-white/[0.08] lg:pl-10 max-w-md w-full">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold">
                        What's Included
                      </span>
                      <ul className="mt-3 space-y-2.5">
                        {service.deliverables.slice(0, 3).map((deliv, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                            <span className="text-[#E44C1F] font-bold">✓</span>
                            <span>{deliv.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 flex items-center gap-3">
                      <Link
                        to="/services/$slug"
                        params={{ slug: service.slug }}
                        className="inline-flex items-center gap-2 rounded-2xl bg-[#E44C1F] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#ff5d2e] transition-all shadow-[0_0_20px_rgba(228,76,31,0.25)] active:scale-95"
                      >
                        <span>Learn More</span>
                        <span>→</span>
                      </Link>

                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-xs font-bold uppercase text-white hover:border-white/30 hover:bg-white/10 transition-all active:scale-95"
                      >
                        <span>Get in Touch</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Process Banner */}
          <div className="mt-20 rounded-[28px] sm:rounded-[36px] border border-white/10 bg-gradient-to-br from-[#12131a] via-[#090a0e] to-[#000000] p-8 sm:p-12 relative overflow-hidden shadow-2xl md:flex md:items-center md:justify-between gap-8">
            <div
              className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-[#E44C1F]/15 blur-3xl"
              aria-hidden
            />
            <div className="max-w-2xl relative z-10">
              <span className="text-xs font-mono font-bold tracking-widest text-[#E44C1F] uppercase">
                HOW WE WORK
              </span>
              <h3 className="mt-2 font-agency-headline text-2xl sm:text-3xl font-extrabold text-white">
                Simple, transparent process from day one.
              </h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                Work directly with Syed Abbas Ali. No middlemen, no endless back-and-forth. Clean code, modern aesthetics, and fast turnaround.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { step: "01", title: "Discovery & Scope", desc: "Define user flows, architectural constraints, and deliverables." },
                { step: "02", title: "Architectural Blueprint", desc: "Design system, database schema, and component hierarchy." },
                { step: "03", title: "Pure Code Execution", desc: "Zero-bloat React, TypeScript, and Tailwind CSS development." },
                { step: "04", title: "Edge Launch & QA", desc: "Core Web Vitals audit, multi-device verification, and deployment." },
              ].map((m) => (
                <div key={m.step} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                  <span className="font-mono text-xs font-bold text-[#E44C1F]">{m.step}</span>
                  <h4 className="mt-2 text-sm font-bold uppercase text-white">{m.title}</h4>
                  <p className="mt-1 text-xs text-white/60">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
