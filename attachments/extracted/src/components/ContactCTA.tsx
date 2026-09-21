import { site } from "@/data/site";
import { ArrowIcon, Reveal } from "@/components/ui";

export function ContactCTA() {
  return (
    <section
      className="relative overflow-hidden bg-dark text-white"
      aria-labelledby="cta-heading"
    >
      <div className="page-shell section-pad relative">
        <Reveal>
          <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.22em] text-white/55 uppercase">
            <span className="text-accent" aria-hidden>
              ✱
            </span>
            {site.cta.label}
          </p>
        </Reveal>

        <div className="mt-6 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <Reveal delay={0.05}>
            <h2
              id="cta-heading"
              className="display text-[14vw] text-white sm:text-7xl md:text-8xl lg:text-[7.4rem]"
            >
              {site.cta.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-white/20 px-6 py-4 text-sm tracking-[0.16em] uppercase transition-colors duration-300 hover:bg-white hover:text-dark"
            >
              {site.cta.button}
              <ArrowIcon />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
