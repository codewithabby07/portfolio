import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/motion";
import { onHashLinkClick, scrollToHash } from "@/lib/scroll";

const SECTION_IDS = site.nav.map((item) => item.id);

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [rendered, setRendered] = useState(false);
  const [shown, setShown] = useState(false);
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
        if (el.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      scrollToHash(window.location.hash, true);
    }
  }, []);

  useEffect(() => {
    if (open) {
      setRendered(true);
      const id = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(id);
    }
    setShown(false);
    const timeout = window.setTimeout(
      () => setRendered(false),
      reduce ? 0 : 420,
    );
    return () => window.clearTimeout(timeout);
  }, [open, reduce]);

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
        ...menuRef.current.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled])",
        ),
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
          "hero-stage fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
          onHero
            ? "nav-on-hero bg-transparent"
            : "border-b border-border bg-background/90 backdrop-blur-md",
        )}
        style={{ animationDelay: "0.04s" }}
      >
        <div className="page-shell relative flex h-[4.25rem] items-center justify-between gap-4 md:h-[5rem]">
          <a
            href="#home"
            onClick={(event) => onHashLinkClick(event, "#home", reduce)}
            className={cn(
              "relative z-10 flex items-center gap-2.5 font-display text-[13px] font-extrabold tracking-[0.14em] uppercase transition-colors duration-300",
              onHero ? "text-white" : "text-dark",
            )}
          >
            <img src="/favicon.svg" alt="" className="h-6 w-6 shrink-0 rounded-full" />
            <span>{site.brand}</span>
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
                  onClick={(event) => onHashLinkClick(event, item.href, reduce)}
                  className={cn(
                    "nav-link",
                    onHero ? "text-white" : "text-dark",
                    isActive ? "opacity-100" : "opacity-70 hover:opacity-100",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="nav-text">{item.label}</span>
                  <span className="nav-arrow" aria-hidden>
                    →
                  </span>
                  <span
                    className={cn(
                      "nav-line",
                      onHero ? "bg-white" : "bg-accent",
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
              "group relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-sm transition-colors",
              onHero ? "text-white" : "text-dark",
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen(true)}
          >
            <span className="flex w-[18px] flex-col gap-[5px]" aria-hidden>
              <span className="block h-px w-full bg-current transition-transform duration-300 group-hover:translate-y-px" />
              <span className="block h-px w-[70%] self-end bg-current transition-[width] duration-300 group-hover:w-full" />
              <span className="block h-px w-full bg-current transition-transform duration-300 group-hover:-translate-y-px" />
            </span>
          </button>
        </div>
      </header>

      {rendered ? (
        <div
          ref={menuRef}
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={cn(
            "menu-overlay fixed inset-0 z-[60] flex flex-col bg-hero text-white",
            shown && "is-open",
          )}
        >
          <div className="page-shell flex h-[4.25rem] items-center justify-between md:h-[5rem]">
            <div className="flex items-center gap-2.5 font-display text-[13px] font-extrabold tracking-[0.14em] uppercase">
              <img src="/favicon.svg" alt="" className="h-6 w-6 shrink-0 rounded-full" />
              <span>{site.brand}</span>
            </div>
            <button
              ref={closeRef}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            </button>
          </div>

          <nav
            className="page-shell flex flex-1 flex-col justify-center pb-16"
            aria-label="Menu"
          >
            {site.nav.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(event) => {
                  onHashLinkClick(event, item.href, reduce);
                  setOpen(false);
                }}
                className="menu-item display border-b border-white/20 py-4 text-[14vw] leading-none text-white uppercase md:text-[6.5rem]"
              >
                <span className="menu-item-inner">{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </>
  );
}
