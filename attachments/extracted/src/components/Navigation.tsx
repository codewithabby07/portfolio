import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import { cn } from "@/utils/cn";
import { easeOutExpo } from "@/lib/motion";

const SECTION_IDS = site.nav.map((item) => item.id);

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const reduce = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.72);
      let current = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const main = document.getElementById("main");
    const footer = document.querySelector("footer");
    if (!open) {
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      return;
    }

    lastFocus.current = document.activeElement as HTMLElement;
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !menuRef.current) return;
      const focusable = [
        ...menuRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      ];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      lastFocus.current?.focus();
    };
  }, [open]);

  const onHero = !scrolled;

  return (
    <>
      <header
        inert={open ? true : undefined}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          onHero ? "nav-on-hero bg-transparent" : "border-b border-border bg-background/90 backdrop-blur-md",
        )}
      >
        <div className="page-shell relative flex h-[4.25rem] items-center justify-between gap-4 md:h-[5rem]">
          <a
            href="#home"
            className={cn(
              "relative z-10 font-display text-[13px] font-extrabold tracking-[0.14em] uppercase transition-colors",
              onHero ? "text-white" : "text-dark",
            )}
          >
            {site.brand}
          </a>

          <nav
            className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-9 lg:flex"
            aria-label="Primary"
          >
            {site.nav.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={cn(
                    "group relative font-sans text-[13px] font-medium tracking-wide transition-opacity",
                    onHero ? "text-white" : "text-dark",
                    isActive ? "opacity-100" : "opacity-70 hover:opacity-100",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{item.label}</span>
                  {"count" in item && item.count ? (
                    <sup className="ml-1 text-[9px] font-semibold tracking-normal opacity-70">
                      {item.count}
                    </sup>
                  ) : null}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
                      onHero ? "bg-white" : "bg-accent",
                      isActive && "scale-x-100",
                    )}
                    aria-hidden
                  />
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            className={cn(
              "relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-sm transition-colors",
              onHero ? "text-white" : "text-dark",
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen(true)}
          >
            <span className="flex w-[18px] flex-col gap-[5px]" aria-hidden>
              <span className="block h-px w-full bg-current" />
              <span className="block h-px w-[70%] self-end bg-current" />
              <span className="block h-px w-full bg-current" />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            ref={menuRef}
            id="site-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-0 z-[60] flex flex-col bg-hero text-white"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="page-shell flex h-[4.25rem] items-center justify-between md:h-[5rem]">
              <p className="font-display text-[13px] font-extrabold tracking-[0.14em] uppercase">
                {site.brand}
              </p>
              <button
                ref={closeRef}
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </button>
            </div>

            <nav className="page-shell flex flex-1 flex-col justify-center pb-16" aria-label="Mobile">
              {site.nav.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="display border-b border-white/20 py-4 text-[14vw] leading-none text-white md:text-[6.5rem]"
                  initial={reduce ? false : { y: 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.08 + index * 0.06, duration: 0.55, ease: easeOutExpo }}
                >
                  {item.label}
                  {"count" in item && item.count ? (
                    <sup className="ml-3 align-super font-sans text-base font-medium tracking-widest">
                      {item.count}
                    </sup>
                  ) : null}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
