import { useEffect, useRef } from "react";
import { site } from "@/data/site";
import { ArrowIcon, Portrait } from "@/components/ui";
import { usePointerFine, useReducedMotion } from "@/lib/motion";
import { onHashLinkClick } from "@/lib/scroll";

export function Hero() {
  const reduce = useReducedMotion();
  const fine = usePointerFine();
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduce || !fine) return;
    const headline = headlineRef.current;
    const card = cardRef.current;
    if (!headline || !card) return;

    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 12;
      const y = (event.clientY / window.innerHeight - 0.5) * 10;
      headline.style.transform = `translate3d(${x * 0.4}px, ${y * 0.3}px, 0)`;
      card.style.transform = `perspective(1000px) rotateY(${x * 0.6}deg) rotateX(${-y * 0.6}deg) translate3d(${x * 0.2}px, ${y * 0.2}px, 0)`;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      headline.style.transform = "";
      card.style.transform = "";
    };
  }, [reduce, fine]);

  return (
    <section
      id="home"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#09090c] text-white flex flex-col justify-between pt-24 pb-8 md:pt-28 md:pb-10"
      aria-labelledby="hero-heading"
    >
      {/* Radial ambient */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.04),transparent)]"
        aria-hidden
      />

      {/* Background watermark */}
      <div
        aria-hidden
        className="hero-fade display pointer-events-none absolute top-[14%] left-1/2 z-0 -translate-x-1/2 text-[18vw] leading-none whitespace-nowrap text-white/[0.02] select-none uppercase tracking-widest"
      >
        {site.brand}
      </div>

      <div className="page-shell relative z-10 flex flex-1 flex-col justify-between gap-10">
        {/* Top row */}
        <div className="hero-stage flex flex-wrap items-center justify-end gap-4 border-b border-white/[0.08] pb-4">
          <div className="hidden items-center gap-4 text-[11px] font-medium tracking-[0.22em] uppercase text-white/50 md:flex">
            <span>Full Stack Developer</span>
            <span className="h-1 w-1 rounded-full bg-accent/60" />
            <span>Delhi, India · Remote</span>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12 py-2 md:py-6">
          {/* Left: Headline + CTA */}
          <div className="hero-stage lg:col-span-7 flex flex-col justify-center">
            <div className="mb-4 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <h1 className="text-[11px] font-semibold tracking-[0.24em] uppercase text-white/75">
                Full Stack Developer &amp; Web Developer in Delhi
              </h1>
            </div>

            <div
              ref={headlineRef}
              id="hero-heading"
              className="display text-[clamp(2.5rem,6.5vw,5.4rem)] leading-[0.94] tracking-[-0.035em] text-white transition-transform duration-200 will-change-transform"
              role="text"
              aria-label="Building websites that actually work."
            >
              <span className="block font-light text-white/80">BUILDING</span>
              <span className="block bg-gradient-to-r from-white via-white/95 to-white/75 bg-clip-text text-transparent">
                WEBSITES THAT
              </span>
              <span className="block italic font-light text-white/90">
                ACTUALLY WORK.
              </span>
            </div>

            <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-white/70 md:text-lg">
              {site.description} Fast delivery, clean code, and a design that fits your brand.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
              <a
                href="#work"
                onClick={(event) => onHashLinkClick(event, "#work", reduce)}
                className="luxury-btn-primary group"
              >
                <span>View My Work</span>
                <ArrowIcon className="cta-arrow transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-md bg-[#25D366] px-6 py-3.5 text-[12px] font-extrabold tracking-[0.16em] text-black uppercase shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105 hover:bg-[#20bd5a] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] active:scale-95"
              >
                <span className="text-base" aria-hidden>💬</span>
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${site.phone.replace(/\s+/g, "")}`}
                className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-md border border-white/30 bg-white/10 px-6 py-3.5 text-[12px] font-extrabold tracking-[0.16em] text-white uppercase shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/70 hover:bg-white/20 active:scale-95"
              >
                <span className="text-base" aria-hidden>📞</span>
                <span>Call Now</span>
              </a>
            </div>

            {/* Stats strip: real numbers only */}
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-white/[0.08] pt-5 max-w-lg">
              <div>
                <span className="block font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                  3+
                </span>
                <span className="mt-1 block text-[10px] tracking-[0.16em] uppercase text-white/50">
                  Years Experience
                </span>
              </div>
              <div>
                <span className="block font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                  15+
                </span>
                <span className="mt-1 block text-[10px] tracking-[0.16em] uppercase text-white/50">
                  Projects Delivered
                </span>
              </div>
              <div>
                <span className="block font-display text-2xl font-bold tracking-tight text-accent md:text-3xl">
                  6–7 Days
                </span>
                <span className="mt-1 block text-[10px] tracking-[0.16em] uppercase text-white/50">
                  Avg. Delivery
                </span>
              </div>
            </div>
          </div>

          {/* Right: Portrait card */}
          <div className="hero-stage relative flex justify-center lg:col-span-5 lg:justify-end">
            <div
              ref={cardRef}
              className="luxury-glass-card relative w-full max-w-[400px] rounded-2xl p-3 sm:p-4 transition-transform duration-300 ease-out will-change-transform"
            >
              {/* Card bar */}
              <div className="mb-3 flex items-center justify-between px-2 text-[10px] tracking-[0.2em] uppercase text-white/55">
                <span className="flex items-center gap-1.5 font-semibold text-white/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {site.name}
                </span>
                <span>{site.hero.year}</span>
              </div>

              {/* Portrait */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-dark/60 shadow-inner">
                <Portrait
                  priority
                  sizes="(min-width: 1024px) 380px, 90vw"
                  className="h-full w-full object-cover object-[center_20%] transition-transform duration-1000 ease-out hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/15 to-transparent" />

                {/* Portrait caption */}
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <span className="inline-block rounded-sm bg-white/10 px-2.5 py-1 text-[9px] font-semibold tracking-[0.18em] uppercase text-white backdrop-blur-md">
                    Full Stack Developer
                  </span>
                  <p className="mt-1.5 text-xs font-medium text-white/90">
                    Delhi, India · Available Worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar: copyright, scroll, socials */}
        <div className="hero-stage flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-5 text-[11px] tracking-[0.16em] uppercase text-white/50">
          <div className="hidden sm:block">
            <span>©{site.hero.year} {site.brand}</span>
          </div>

          {/* Scroll indicator */}
          <div className="mx-auto sm:mx-0">
            <a
              href="#about"
              onClick={(event) => onHashLinkClick(event, "#about", reduce)}
              className="scroll-capsule group"
              aria-label="Scroll to learn more about Abby"
            >
              <span className="scroll-pill-wheel group-hover:border-white/60 transition-colors" />
              <span className="text-[9px] tracking-[0.2em] font-medium text-white/50 group-hover:text-white transition-colors">
                Scroll
              </span>
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-5">
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
