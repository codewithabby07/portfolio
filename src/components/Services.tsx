import { Link } from "@tanstack/react-router";
import { services } from "@/data/services";
import { Reveal, SectionLabel } from "@/components/ui";

export function Services() {
  return (
    <section
      id="services"
      className="relative section-pad scroll-mt-32 border-t border-white/10 bg-black text-white overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 z-0 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(228,76,31,0.06)_0%,transparent_70%)] blur-3xl"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end border-b border-white/[0.06] pb-8">
          <div>
            <SectionLabel>Capabilities</SectionLabel>
            <h2
              id="services-heading"
              className="font-display mt-2 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            >
              Studio Services.
            </h2>
          </div>
          <div className="flex flex-col gap-2 max-w-md">
            <p className="text-[#86868b] text-sm leading-relaxed">
              Full-cycle engineering from architectural blueprint to live deployment. We build clean, maintainable systems that load instantly and scale smoothly.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E44C1F] uppercase tracking-wider hover:underline"
            >
              <span>Explore All Disciplines In Depth</span>
              <span>→</span>
            </Link>
          </div>
        </Reveal>

        <ul className="mt-8 space-y-3">
          {services.map((service, index) => (
            <li key={service.number}>
              <Reveal delay={index * 0.03}>
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="group flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] block"
                >
                  <div className="flex items-center gap-5 md:w-1/3">
                    <span className="font-mono text-xs font-semibold text-[#E44C1F]">
                      {service.number}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#E44C1F] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#86868b] md:w-1/2 leading-relaxed">
                    {service.summary}
                  </p>

                  <div className="flex items-center justify-end gap-2 md:w-auto text-xs font-semibold uppercase tracking-wider text-[#E44C1F]">
                    <span className="hidden sm:inline">Learn More</span>
                    <span className="text-base transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
