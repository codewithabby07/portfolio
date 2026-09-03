import { site } from "@/data/site";
import { ArrowIcon, LineReveal, Reveal } from "@/components/ui";
import { onHashLinkClick } from "@/lib/scroll";

export function ContactCTA() {
  return (
    <section
      className="relative overflow-hidden bg-dark text-white"
      aria-labelledby="cta-heading"
    >
      <div className="page-shell section-pad relative">
        <Reveal>
          <p className="label-meta text-white/55">
            {site.cta.label}
          </p>
        </Reveal>

        <div className="mt-6 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <h2
            id="cta-heading"
            className="display text-[14vw] text-white sm:text-7xl md:text-8xl lg:text-[7.4rem]"
          >
            <LineReveal lines={site.cta.lines} delay={0.05} stagger={0.1} />
          </h2>

          <Reveal delay={0.12}>
            <a
              href="#contact"
              onClick={(event) => onHashLinkClick(event, "#contact")}
              className="group/cta inline-flex items-center gap-3 border border-white/20 px-6 py-4 text-sm tracking-[0.16em] uppercase transition-colors duration-300 hover:bg-white hover:text-dark active:scale-[0.96]"
            >
              {site.cta.button}
              <ArrowIcon className="cta-arrow" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
