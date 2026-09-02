import { useEffect, useRef } from "react";
import { site } from "@/data/site";
import { ArrowIcon, Portrait } from "@/components/ui";
import { usePointerFine, useReducedMotion } from "@/lib/motion";
import { onHashLinkClick } from "@/lib/scroll";

export function Hero() {
  const reduce = useReducedMotion();
  const fine = usePointerFine();
  const headlineRef = useRef<HTMLHeadingElement>(null);
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
      {/* Ultra-subtle studio background gradient */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.04),transparent)]"
        aria-hidden
      />

      {/* Subtle Editorial Background Watermark */}
      <div
        aria-hidden
        className="hero-fade display pointer-events-none absolute top-[14%] left-1/2 z-0 -translate-x-1/2 text-[18vw] leading-none whitespace-nowrap text-white/[0.02] select-none uppercase tracking-widest"
      >
        {site.brand}
      </div>

      <div className="page-shell relative z-10 flex flex-1 flex-col justify-between gap-10">
        {/* Top Status & Atelier Row */}
        <div className="hero-stage flex flex-wrap items-center justify-end gap-4 border-b border-white/[0.08] pb-4">
          <div className="hidden items-center gap-4 text-[11px] font-medium tracking-[0.22em] uppercase text-white/50 md:flex">
            <span>Full Stack Architecture</span>
            <span className="h-1 w-1 rounded-full bg-accent/60" />
            <span>Digital Atelier // 2026</span>
          </div>
        </div>

        {/* Main Centerpiece Stage */}
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12 py-2 md:py-6">
          {/* Left Column: Command Editorial Headline & Narrative */}
          <div className="hero-stage lg:col-span-7 flex flex-col justify-center">
            <div className="mb-4 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-white/70">
                {site.name} — {site.jobTitle}
              </span>
            </div>

            <h1
              ref={headlineRef}
              id="hero-heading"
              className="display text-[clamp(2.5rem,6.5vw,5.4rem)] leading-[0.94] tracking-[-0.035em] text-white transition-transform duration-200 will-change-transform"
            >
              <span className="block font-light text-white/80">ELEVATING</span>
              <span className="block bg-gradient-to-r from-white via-white/95 to-white/75 bg-clip-text text-transparent">
                DIGITAL VISION
              </span>
              <span className="block italic font-light text-white/90">
                INTO MASTERPIECES.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-white/70 md:text-lg">
              {site.description} Crafted with bespoke interactions, technical rigor, and architectural clarity.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
              <a
                href="#work"
                onClick={(event) => onHashLinkClick(event, "#work", reduce)}
                className="luxury-btn-primary group"
              >
                <span>Explore Selected Works</span>
                <ArrowIcon className="cta-arrow transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-md bg-[#25D366] px-6 py-3.5 text-[12px] font-extrabold tracking-[0.16em] text-black uppercase shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105 hover:bg-[#20bd5a] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] active:scale-95"
              >
                <span className="text-base animate-bounce">💬</span>
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${site.phone.replace(/\s+/g, "")}`}
                className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-md border border-white/30 bg-white/10 px-6 py-3.5 text-[12px] font-extrabold tracking-[0.16em] text-white uppercase shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/70 hover:bg-white/20 active:scale-95"
              >
                <span className="text-base">📞</span>
                <span>Call Now</span>
              </a>
            </div>

            {/* Micro Metrics Strip */}
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-white/[0.08] pt-5 max-w-lg">
              <div>
                <span className="block font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                  100%
                </span>
                <span className="mt-1 block text-[10px] tracking-[0.16em] uppercase text-white/50">
                  Custom Engineering
                </span>
              </div>
              <div>
                <span className="block font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                  99+
                </span>
                <span className="mt-1 block text-[10px] tracking-[0.16em] uppercase text-white/50">
                  Speed & Performance
                </span>
              </div>
              <div>
                <span className="block font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                  A+
                </span>
                <span className="mt-1 block text-[10px] tracking-[0.16em] uppercase text-white/50">
                  Aesthetic Rigor
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Framed Luxury Centerpiece */}
          <div className="hero-stage relative flex justify-center lg:col-span-5 lg:justify-end">
            <div
              ref={cardRef}
              className="luxury-glass-card relative w-full max-w-[400px] rounded-2xl p-3 sm:p-4 transition-transform duration-300 ease-out will-change-transform"
            >
              {/* Top Card Bar */}
              <div className="mb-3 flex items-center justify-between px-2 text-[10px] tracking-[0.2em] uppercase text-white/55">
                <span className="flex items-center gap-1.5 font-semibold text-white/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {site.name}
                </span>
                <span>ATELIER // {site.hero.year}</span>
              </div>

              {/* High-End Portrait Display */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-dark/60 shadow-inner">
                <Portrait
                  priority
                  sizes="(min-width: 1024px) 380px, 90vw"
                  className="h-full w-full object-cover object-[center_20%] transition-transform duration-1000 ease-out hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/15 to-transparent" />

                {/* Bottom Portrait Caption */}
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <span className="inline-block rounded-sm bg-white/10 px-2.5 py-1 text-[9px] font-semibold tracking-[0.18em] uppercase text-white backdrop-blur-md">
                    Full Stack Specialist
                  </span>
                  <p className="mt-1.5 text-xs font-medium text-white/90">
                    Bespoke UI & Full Stack Architecture
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Coordinates, Scroll Indicator, Socials */}
        <div className="hero-stage flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-5 text-[11px] tracking-[0.16em] uppercase text-white/50">
          <div className="hidden sm:block">
            <span>©{site.hero.year} {site.brand} · All Rights Reserved</span>
          </div>

          {/* Central Scroll Indicator */}
          <div className="mx-auto sm:mx-0">
            <a
              href="#about"
              onClick={(event) => onHashLinkClick(event, "#about", reduce)}
              className="scroll-capsule group"
              aria-label="Scroll to learn more about Abby"
            >
              <span className="scroll-pill-wheel group-hover:border-white/60 transition-colors" />
              <span className="text-[9px] tracking-[0.2em] font-medium text-white/50 group-hover:text-white transition-colors">
                Scroll To Explore
              </span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            {site.socials.map((social) =>
              social.href ? (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {social.label}
                </a>
              ) : (
                <span
                  key={social.label}
                  className="text-white/40 hover:text-white/80 transition-colors cursor-default"
                >
                  {social.label}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
