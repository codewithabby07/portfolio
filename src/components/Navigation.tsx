import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/motion";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();
  const location = useLocation();
  const pathname = location.pathname;
  const isHome = pathname === "/";
  const closeRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on path change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Focus trap and esc key
  useEffect(() => {
    if (!open) return;
    lastFocus.current = document.activeElement as HTMLElement;
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      lastFocus.current?.focus();
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled || !isHome
            ? "border-b border-white/15 bg-black/85 backdrop-blur-2xl py-3.5 shadow-2xl"
            : "bg-black/35 backdrop-blur-md border-b border-white/10 py-4 sm:py-5"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo & Studio Badge */}
          <Link
            to="/"
            className="group flex items-center gap-3 transition-opacity hover:opacity-90"
          >
            <div className="relative flex h-9 w-9 shrink-0 items-center justify-center transition-transform group-hover:scale-105">
              <img
                src="/favicon.svg"
                alt="CodeWithAbby Logo"
                className="h-8 w-8 rounded-full shadow-[0_0_15px_rgba(228,76,31,0.5)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base font-extrabold tracking-[0.12em] uppercase text-white">
                {site.brand}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "relative py-1 text-xs font-semibold tracking-wider uppercase transition-colors duration-200",
                    isActive
                      ? "text-white font-bold"
                      : "text-white/60 hover:text-white"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#E44C1F] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#E44C1F] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#ff5d2e] hover:shadow-[0_0_20px_rgba(228,76,31,0.5)] active:scale-95 cursor-pointer"
            >
              <span>Start Project</span>
              <span className="text-white transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition-all hover:bg-white/10 md:hidden cursor-pointer"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      {open ? (
        <div
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#050507] p-6 text-white md:hidden animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2.5 font-display text-sm font-extrabold tracking-widest uppercase text-white"
            >
              <span className="text-[#E44C1F]">CODEWITHABBY</span>
              <span className="text-white/40">/</span>
              <span className="text-xs text-white/60">STUDIO</span>
            </Link>

            <button
              ref={closeRef}
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:bg-white/10 active:scale-90 cursor-pointer"
              aria-label="Close navigation"
              onClick={() => setOpen(false)}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="my-auto flex flex-col gap-2 py-4" aria-label="Mobile Navigation Links">
            {[
              { label: "Home", href: "/" },
              ...navLinks,
            ].map((link, idx) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "group flex items-center justify-between rounded-xl px-4 py-3.5 transition-all",
                    isActive
                      ? "bg-white/[0.06] text-white"
                      : "text-white/70 hover:bg-white/[0.03] hover:text-white"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[#E44C1F]">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-2xl font-bold tracking-tight uppercase">
                      {link.label}
                    </span>
                  </div>
                  <span className="text-sm text-white/30 group-hover:text-[#E44C1F] group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Quick Actions & Socials */}
          <div className="border-t border-white/10 pt-5 space-y-4">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#E44C1F] py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(228,76,31,0.3)] active:scale-95"
            >
              <span>Initiate Project Brief</span>
              <span>→</span>
            </Link>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/25 bg-emerald-500/10 py-2.5 text-xs font-bold text-emerald-400 uppercase tracking-wider"
              >
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${site.phone.replace(/\s+/g, "")}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-2.5 text-xs font-bold text-white uppercase tracking-wider"
              >
                <span>Call Studio</span>
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
