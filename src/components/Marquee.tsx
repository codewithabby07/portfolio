import { site } from "@/data/site";

export function Marquee() {
  const items = [...site.marquee, ...site.marquee];

  return (
    <section
      className="border-b border-border bg-surface py-7 md:py-9"
      aria-label="Capabilities"
    >
      <div className="page-shell mb-4">
        <p className="label-meta text-muted">Capabilities</p>
      </div>
      <div className="marquee-fade overflow-hidden">
        <div className="marquee-track flex w-max gap-0">
          {items.map((item, index) => (
            <p
              key={`${item}-${index}`}
              className="flex items-center px-6 font-display text-2xl font-extrabold tracking-tight text-dark/25 uppercase md:text-4xl"
            >
              {item}
              <span className="ml-6 text-accent/70" aria-hidden>
                ✱
              </span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
