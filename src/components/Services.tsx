import { services } from "@/data/services";
import { LineReveal, Reveal, SectionLabel } from "@/components/ui";

export function Services() {
  return (
    <section
      id="services"
      className="section-pad scroll-mt-32 border-t border-border bg-surface"
      aria-labelledby="services-heading"
    >
      <div className="page-shell">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel>Capabilities</SectionLabel>
            <h2
              id="services-heading"
              className="display mt-4 text-[12vw] text-dark sm:text-6xl md:text-7xl"
            >
              <LineReveal lines={["SERVICES"]} />
            </h2>
          </div>
          <p className="max-w-sm text-muted">
            A focused set of ways to plan, build, and refine a website — from
            structure to the last interaction.
          </p>
        </Reveal>

        <ul className="mt-12 border-b border-border md:mt-16">
          {services.map((service, index) => (
            <li key={service.number}>
              <Reveal delay={index * 0.04}>
                <article className="service-row group grid gap-3 border-t border-border py-7 pl-0 transition-[padding] duration-300 hover:pl-3 md:grid-cols-12 md:items-baseline md:gap-6 md:py-9">
                  <p className="font-display text-sm font-semibold tracking-[0.18em] text-accent md:col-span-2">
                    {service.number}
                  </p>
                  <h3 className="display text-[7.2vw] text-dark transition-colors duration-300 group-hover:text-accent sm:text-4xl md:col-span-5 md:text-5xl">
                    {service.title}
                  </h3>
                  <p className="max-w-sm text-sm leading-relaxed text-muted md:col-span-4">
                    {service.description}
                  </p>
                  <span
                    className="hidden text-dark/0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent md:col-span-1 md:block md:text-right"
                    aria-hidden
                  >
                    →
                  </span>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
