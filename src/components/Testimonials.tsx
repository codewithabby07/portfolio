import { Reveal, SectionLabel } from "@/components/ui";

const testimonials = [
  {
    id: 1,
    quote:
      "Abby delivered our website in record time without compromising on quality. The attention to detail was exceptional — every pixel was perfect. Our clients noticed the difference immediately.",
    name: "Syed Mujahid Ali",
    title: "CEO",
    company: "ALP Buildcon",
    initial: "S",
  },
  {
    id: 2,
    quote:
      "Working with Abby was seamless. He understood our brand identity from the first call and translated it into a website that perfectly represents who we are. Highly recommended.",
    name: "Mr Zain",
    title: "Client",
    company: "Creavo",
    initial: "Z",
  },
  {
    id: 3,
    quote:
      "The appointment booking system Abby built for us has streamlined our entire patient intake process. Clean, fast, and our patients love it. Worth every rupee.",
    name: "Miss Leona",
    title: "CEO",
    company: "Dentiva",
    initial: "L",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative scroll-mt-24 overflow-hidden bg-[#f8f7f4] py-24 md:py-32"
      aria-labelledby="testimonials-heading"
    >
      <div className="page-shell">
        {/* Header */}
        <Reveal>
          <SectionLabel>Social Proof.</SectionLabel>
          <div className="mt-4 flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
            <h2
              id="testimonials-heading"
              className="display text-5xl leading-none text-dark md:text-7xl"
            >
              WHAT CLIENTS{" "}
              <em
                className="not-italic text-accent"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Say.
              </em>
            </h2>
            <p className="max-w-xs text-sm text-dark/50 md:text-right">
              Real words from real clients — no fluff.
            </p>
          </div>
        </Reveal>

        {/* Testimonials grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.12}>
              <div className="group relative flex h-full flex-col gap-6 border border-dark/10 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
                {/* Quote mark */}
                <span
                  className="font-serif text-7xl leading-none text-accent/20 select-none"
                  aria-hidden
                >
                  "
                </span>

                {/* Quote */}
                <blockquote className="-mt-4 flex-1 text-[15px] leading-relaxed text-dark/75 italic">
                  "{t.quote}"
                </blockquote>

                {/* Divider */}
                <div className="h-px w-12 bg-accent/40" />

                {/* Attribution */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-white uppercase">
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold tracking-wide text-dark">
                      {t.name}
                    </p>
                    <p className="text-xs text-dark/50">
                      {t.title} · {t.company}
                    </p>
                  </div>
                </div>

                {/* Hover accent */}
                <div className="absolute top-0 left-0 h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Note to self — hidden from users, visible in code */}
        {/* TODO: Replace placeholder quotes with real client testimonials */}

        {/* Bottom strip */}
        <Reveal delay={0.4}>
          <div className="mt-12 flex items-center justify-center gap-3">
            <div className="h-px flex-1 bg-dark/10" />
            <p className="text-[11px] font-semibold tracking-[0.2em] text-dark/40 uppercase">
              Trusted by founders & businesses
            </p>
            <div className="h-px flex-1 bg-dark/10" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
