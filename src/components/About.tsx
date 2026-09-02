import { site } from "@/data/site";
import { Asterisk, LineReveal, MediaReveal, Reveal, SectionLabel } from "@/components/ui";

export function About() {
  return (
    <section
      id="about"
      className="section-pad scroll-mt-32 bg-background"
      aria-labelledby="about-heading"
    >
      <div className="page-shell">
        <Reveal>
          <SectionLabel>{site.about.label}</SectionLabel>
        </Reveal>

        <div className="mt-6 grid items-end gap-10 lg:grid-cols-12">
          <h2
            id="about-heading"
            className="display text-[13vw] text-dark sm:text-7xl md:text-8xl lg:col-span-8 lg:text-[6.4rem]"
          >
            <LineReveal lines={site.about.headline} delay={0.04} stagger={0.1} />
          </h2>

          <Reveal
            className="flex items-end justify-between gap-6 lg:col-span-4 lg:justify-end"
            delay={0.15}
          >
            <Asterisk className="hidden h-16 w-16 text-border md:block lg:h-20 lg:w-20" />
            <MediaReveal className="relative h-28 w-28 md:h-32 md:w-32" delay={0.08}>
              <img
                src={site.about.still.src}
                alt={site.about.still.alt}
                width={320}
                height={320}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </MediaReveal>
          </Reveal>
        </div>

        <Reveal className="mt-10 max-w-xl md:mt-14" delay={0.12}>
          <p className="text-lg leading-relaxed text-muted md:text-[1.2rem]">
            {site.about.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
