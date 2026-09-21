import { Link } from "@tanstack/react-router";
import { industries } from "@/data/industries";
import { Reveal, SectionLabel } from "@/components/ui";

export function IndustrySection() {
  return (
    <section
      id="industries-section"
      className="relative section-pad scroll-mt-32 border-t border-white/10 bg-black text-white overflow-hidden"
      aria-labelledby="industries-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end border-b border-white/[0.06] pb-8">
          <div>
            <SectionLabel>Verticals</SectionLabel>
            <h2
              id="industries-heading"
              className="font-display mt-2 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            >
              Industry Solutions.
            </h2>
          </div>
          <div className="flex flex-col gap-2 max-w-md">
            <p className="text-[#86868b] text-sm leading-relaxed">
              Tailored digital solutions built around specific commercial requirements: lead generation for construction, booking engines for clinics, and modern e-commerce.
            </p>
            <Link
              to="/industries"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E44C1F] uppercase tracking-wider hover:underline"
            >
              <span>Explore All Industry Frameworks</span>
              <span>→</span>
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, idx) => (
            <Reveal key={ind.slug} delay={idx * 0.04}>
              <Link
                to="/industries/$slug"
                params={{ slug: ind.slug }}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] block h-full"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-[#E44C1F]">
                      {ind.number}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[10px] font-mono uppercase text-white/60">
                      Sector
                    </span>
                  </div>

                  <h3 className="font-display mt-4 text-xl sm:text-2xl font-bold text-white group-hover:text-[#E44C1F] transition-colors">
                    {ind.title}
                  </h3>
                  <p className="mt-2 text-xs font-medium text-white/80">
                    {ind.headline}
                  </p>
                  <p className="mt-3 text-xs text-[#86868b] leading-relaxed line-clamp-3">
                    {ind.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/[0.06] pt-4 text-xs font-semibold uppercase tracking-wider text-[#E44C1F]">
                  <span>Explore Sector</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
