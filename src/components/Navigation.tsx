import { useEffect, useRef, useState } from "react";
import { useLocation } from "@tanstack/react-router";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/motion";
import { onHashLinkClick, scrollToHash } from "@/lib/scroll";

const SECTION_IDS = site.nav.filter((i) => i.href.startsWith("#")).map((item) => item.id);

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [rendered, setRendered] = useState(false);
  const [shown, setShown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const reduce = useReducedMotion();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const closeRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isHome) {
      if (location.pathname.startsWith("/blog")) {
        setActive("blog");
      }
      return;
    }

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
  }, [isHome, location.pathname]);

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

  const onHero = isHome && !scrolled;

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
            href={isHome ? "#home" : "/"}
            onClick={isHome ? (event) => onHashLinkClick(event, "#home", reduce) : undefined}
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
              const targetHref = !isHome && item.href.startsWith("#") ? `/${item.href}` : item.href;
              return (
                <a
                  key={item.id}
                  href={targetHref}
                  onClick={(event) => {
                    if (targetHref.startsWith("#")) {
                      onHashLinkClick(event, targetHref, reduce);
                    }
                  }}
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
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
          className={cn(
            "menu-backdrop fixed inset-0 z-[60] flex items-center justify-center p-3.5 sm:p-5 md:p-6 bg-black/80 backdrop-blur-2xl",
            shown && "is-open",
          )}
        >
          {/* Large rounded floating dark navigation panel */}
          <div
            className="menu-panel relative flex flex-col justify-between w-full max-w-lg h-full max-h-[92svh] overflow-y-auto rounded-[1.75rem] sm:rounded-[2rem] border border-white/10 bg-[#09090c]/95 p-6 sm:p-8 text-white shadow-[0_30px_80px_-15px_rgba(0,0,0,0.95)] backdrop-blur-xl"
          >
            {/* Panel Top: Logo & Minimal Close Button */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 sm:pb-5">
              <a
                href={isHome ? "#home" : "/"}
                onClick={() => {
                  setOpen(false);
                  if (isHome) scrollToHash("#home", reduce);
                }}
                className="flex items-center gap-2.5 font-display text-[13px] font-extrabold tracking-[0.14em] uppercase text-white hover:opacity-90 transition-opacity"
              >
                <img src="/favicon.svg" alt="" className="h-6 w-6 shrink-0 rounded-full" />
                <span>{site.brand}</span>
              </a>

              <button
                ref={closeRef}
                type="button"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:border-white/40 hover:bg-white/10 active:scale-95 cursor-pointer"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-200 group-hover:rotate-90" fill="none" aria-hidden>
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Panel Middle: Spacious Navigation Links */}
            <nav className="my-auto py-4 sm:py-6 flex flex-col justify-center space-y-1" aria-label="Mobile Navigation">
              {site.nav.map((item, idx) => {
                const targetHref = !isHome && item.href.startsWith("#") ? `/${item.href}` : item.href;
                const isActive = active === item.id;
                return (
                  <a
                    key={item.id}
                    href={targetHref}
                    onClick={(event) => {
                      if (targetHref.startsWith("#")) {
                        onHashLinkClick(event, targetHref, reduce);
                      }
                      setOpen(false);
                    }}
                    className={cn(
                      "menu-item group flex items-center justify-between rounded-xl border-b border-white/[0.06] py-3 sm:py-3.5 px-2 transition-all duration-200",
                      isActive ? "bg-white/[0.04]" : "hover:bg-white/[0.02]"
                    )}
                  >
                    <div className="menu-item-inner flex items-center gap-3.5 sm:gap-4">
                      <span className={cn(
                        "text-xs font-mono tracking-wider transition-colors",
                        isActive ? "text-accent font-bold" : "text-white/30 group-hover:text-white/60"
                      )}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className={cn(
                        "font-display text-xl sm:text-2xl font-bold tracking-tight uppercase transition-all duration-200 group-hover:translate-x-1.5",
                        isActive ? "text-white" : "text-white/80 group-hover:text-white"
                      )}>
                        {item.label}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                      )}
                      <span
                        className={cn(
                          "text-sm transition-all duration-200",
                          isActive ? "text-accent translate-x-0" : "text-white/20 group-hover:text-accent group-hover:translate-x-1"
                        )}
                        aria-hidden
                      >
                        →
                      </span>
                    </div>
                  </a>
                );
              })}
            </nav>

            {/* Panel Bottom: Quick Actions */}
            <div className="border-t border-white/[0.08] pt-4 sm:pt-5 flex flex-col gap-3">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 py-3 px-3 text-xs font-bold text-emerald-400 uppercase tracking-wider transition-all hover:bg-emerald-500/20 active:scale-95"
              >
                <span aria-hidden>💬</span>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
