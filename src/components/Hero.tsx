import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";
import { SylvaLivingWorldScene } from "@/shaders/sylva-living-world/SylvaLivingWorldScene";

export function Hero() {
  const [sceneMounted, setSceneMounted] = useState(false);

  useEffect(() => {
    setSceneMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative isolate min-h-[92svh] overflow-hidden bg-black text-white flex flex-col justify-between pt-24 pb-10 md:pt-32 md:pb-12"
      aria-labelledby="hero-heading"
      style={{ contain: "paint" }}
    >
      {/* ── 3D Sylva Living World Scene as Hero Backdrop (GPU-optimized) ── */}
      <div
        className="absolute inset-0 z-0 overflow-hidden pointer-events-auto"
        aria-hidden="true"
        style={{ transform: "translateZ(0)", willChange: "transform" }}
      >
        {sceneMounted && (
          <SylvaLivingWorldScene
            variant="living-green"
            style={{
              width: "100%",
              height: "100%",
              minHeight: "100%",
            }}
          />
        )}
      </div>

      {/* ── Smooth Contrast Protection Overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/70 via-black/35 to-black/90"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 flex flex-1 flex-col justify-center items-center w-full text-center my-auto py-10 md:py-16">
        {/* Main Headline (Curated Creative Agency Editorial Typography) */}
        <h1
          id="hero-heading"
          className="max-w-4xl tracking-tight text-white flex flex-col items-center select-none pb-2 sm:pb-3"
        >
          {/* Line 1: Premium bold modern sans-serif in crisp white */}
          <span
            className="block text-[clamp(1.85rem,4.2vw,3.4rem)] text-white leading-[1.12]"
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontWeight: 800,
              letterSpacing: "-0.035em",
              textShadow: "0 2px 12px rgba(0,0,0,0.85)",
            }}
          >
            Your business deserves
          </span>

          {/* Line 2: Elegant high-contrast editorial serif italic in orange with hand-drawn brush underline */}
          <div className="relative inline-block mt-2 sm:mt-2.5">
            <span
              className="block text-[clamp(2.5rem,6.6vw,5.4rem)] text-[#E44C1F] leading-[1.04]"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 600,
                fontStyle: "italic",
                letterSpacing: "-0.015em",
                textShadow: "0 2px 12px rgba(0,0,0,0.8)",
              }}
            >
              a better website.
            </span>

            {/* Hand-drawn organic brush-stroke underline */}
            <svg
              className="absolute -bottom-1 sm:-bottom-1.5 left-0 w-full pointer-events-none select-none overflow-visible"
              viewBox="0 0 360 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              style={{ height: "15px", maxHeight: "20px" }}
              aria-hidden="true"
            >
              {/* Primary tapered brush stroke with organic curve and subtle upward angle */}
              <path
                d="M 4 16.5 C 38 14.8, 85 13.5, 142 14.5 C 205 15.6, 275 12.8, 354 4.5 C 358.5 4, 359.5 6, 356 7.2 C 298 15.2, 218 20.5, 142 19.5 C 88 18.8, 40 18.5, 2 18.8 C 0.8 18.8, 1.2 16.8, 4 16.5 Z"
                fill="#E44C1F"
              />
              {/* Secondary natural pressure flick */}
              <path
                d="M 16 19.2 C 75 19.5, 160 20.2, 245 17.5 C 285 16.2, 325 13.8, 348 11"
                stroke="#E44C1F"
                strokeWidth="1.8"
                strokeLinecap="round"
                opacity="0.85"
              />
            </svg>
          </div>
        </h1>

        {/* Shortened, Punchy Subtitle */}
        <p
          className="mt-6 max-w-xl text-base sm:text-lg font-normal leading-relaxed text-white/90"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.95)" }}
        >
          We build fast, high-converting websites and modern digital experiences that turn visitors into clients.
        </p>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 rounded-full bg-[#E44C1F] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:bg-[#ff5d2e] shadow-[0_0_30px_rgba(228,76,31,0.5)] active:scale-95 cursor-pointer"
          >
            <span>View Selected Work</span>
            <span>→</span>
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/70 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-200 hover:border-white/60 hover:bg-black/90 active:scale-95 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
          >
            <span>Start a Project</span>
            <span>→</span>
          </Link>

          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-black/70 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-emerald-400 backdrop-blur-md hover:bg-black/90 hover:border-emerald-400 transition-all active:scale-95 shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
          >
            <span>WhatsApp Direct</span>
            <span className="text-sm">↗</span>
          </a>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-5 text-xs font-mono tracking-wider uppercase text-white/80">
        <div>
          <span>©{site.hero.year} {site.brand} STUDIO</span>
        </div>

        <div className="flex items-center gap-6">
          <Link to="/work" className="hover:text-[#E44C1F] transition-colors font-medium">
            Work →
          </Link>
          <Link to="/services" className="hover:text-[#E44C1F] transition-colors font-medium">
            Services →
          </Link>
          <Link to="/about" className="hover:text-[#E44C1F] transition-colors font-medium">
            About →
          </Link>
          <Link to="/contact" className="hover:text-[#E44C1F] transition-colors font-medium">
            Contact →
          </Link>
        </div>
      </div>
    </section>
  );
}
