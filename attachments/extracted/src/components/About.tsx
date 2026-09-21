import { site } from "@/data/site";
import { Asterisk, Reveal, SectionLabel } from "@/components/ui";

export function About() {
  return (
    <section
      id="about"
      className="section-pad scroll-mt-24 bg-background"
      aria-labelledby="about-heading"
    >
      <div className="page-shell">
        <Reveal>
          <SectionLabel>{site.about.label}</SectionLabel>
        </Reveal>

        <div className="mt-6 grid items-end gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-8" delay={0.05}>
            <h2
              id="about-heading"
              className="display text-[13vw] text-dark sm:text-7xl md:text-8xl lg:text-[6.4rem]"
            >
              {site.about.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>

          <Reveal className="flex items-end justify-between gap-6 lg:col-span-4 lg:justify-end" delay={0.15}>
            <Asterisk className="hidden h-16 w-16 text-border md:block lg:h-20 lg:w-20" />
            <figure className="relative h-28 w-28 overflow-hidden md:h-32 md:w-32">
              <img
                src={site.about.still.src}
                alt={site.about.still.alt}
                width={320}
                height={320}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </figure>
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
