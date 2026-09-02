import { skills } from "@/data/services";
import { LineReveal, Reveal, SectionLabel } from "@/components/ui";

export function Skills() {
  return (
    <section className="section-pad bg-background" aria-labelledby="skills-heading">
      <div className="page-shell">
        <Reveal>
          <SectionLabel>Toolkit</SectionLabel>
          <h2
            id="skills-heading"
            className="display mt-4 max-w-3xl text-5xl text-dark md:text-7xl"
          >
            <LineReveal lines={["A FOCUSED STACK."]} />
          </h2>
        </Reveal>

        <Reveal className="mt-12 md:mt-16" delay={0.08}>
          <ul className="flex flex-wrap gap-x-3 gap-y-4 md:gap-x-5 md:gap-y-6">
            {skills.map((skill, index) => (
              <li key={skill} className="flex items-baseline gap-3 md:gap-5">
                <span className="skill-word display text-[11vw] text-dark sm:text-5xl md:text-6xl lg:text-7xl">
                  {skill}
                </span>
                {index < skills.length - 1 ? (
                  <span className="text-accent" aria-hidden>
                    ✱
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
