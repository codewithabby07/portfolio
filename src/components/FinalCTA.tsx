import { useState, useRef, type MouseEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal, HandwrittenWord } from "@/components/ui";

export function FinalCTA() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  }

  return (
    <section
      id="cta"
      className="relative bg-[#FAF8F5] py-24 sm:py-32 md:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-700"
      aria-labelledby="final-cta-heading"
      style={{
        backgroundImage: "url('/images/paper-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-5xl relative">
        {/* Concentric Geometry Rings in background */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[450px] h-[450px] sm:w-[650px] sm:h-[650px]">
          <div className="absolute inset-0 rounded-full border border-[#E44C1F]/15 animate-cta-radar-1" />
          <div className="absolute inset-12 rounded-full border border-black/[0.06] animate-cta-radar-2" />
          <div className="absolute inset-24 rounded-full border border-[#E44C1F]/10 animate-cta-radar-3" />
        </div>

        <Reveal>
          {/* Centered Large iPhone Glass / Frosted Obsidian Card */}
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative z-10 rounded-[2.5rem] sm:rounded-[3.25rem] bg-[#0A0A0E]/95 border border-white/20 p-10 sm:p-16 md:p-24 text-center text-white overflow-hidden shadow-[0_30px_100px_-20px_rgba(0,0,0,0.6)] backdrop-blur-3xl transition-all duration-500 hover:border-white/40 hover:shadow-[0_40px_120px_-15px_rgba(228,76,31,0.25)]"
          >
            {/* Dynamic Apple-style Flashlight / Spotlight tracking */}
            <div
              className="pointer-events-none absolute inset-0 transition-opacity duration-500"
              style={{
                opacity: isHovered ? 1 : 0.4,
                background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 255, 255, 0.12), rgba(228, 76, 31, 0.08) 40%, transparent 80%)`,
              }}
              aria-hidden="true"
            />

            {/* Subtle internal atmospheric breathing glow */}
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(228,76,31,0.18)_0%,transparent_75%)] animate-cta-breathe"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              {/* Section Headline */}
              <h2
                id="final-cta-heading"
                className="font-display text-[clamp(2.2rem,5.4vw,4.5rem)] font-extrabold tracking-tight text-white leading-[1.08] select-none"
              >
                <span>Ready to get your site</span>
                <br />
                <HandwrittenWord variant="swoosh" color="#E44C1F" className="mt-1 sm:mt-2">
                  <span
                    className="font-serif italic font-semibold text-[#E44C1F] inline-block"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    built properly.
                  </span>
                </HandwrittenWord>
              </h2>

              {/* Supporting text */}
              <p className="mt-6 sm:mt-8 text-base sm:text-lg text-neutral-300 font-normal leading-relaxed max-w-lg">
                Tell us what you're building and when you need it. Direct founder collaboration with Syed Abbas Ali. Zero fluff, clear price, and fast turnaround.
              </p>

              {/* Row of circular trust/team avatars with Apple glass styling */}
              <div className="mt-8 sm:mt-10 flex items-center justify-center -space-x-2.5 sm:-space-x-3">
                {/* 1. Founder Syed Abbas Ali */}
                <img
                  src="/images/portrait.jpg"
                  alt="Syed Abbas Ali (Founder & Lead Engineer)"
                  className="h-11 w-11 sm:h-12 sm:w-12 rounded-full border-2 border-[#0A0A0E] object-cover shadow-lg"
                />
                {/* 2. CodeWithAbby Studio Brand Icon */}
                <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-full border-2 border-[#0A0A0E] bg-[#E44C1F] flex items-center justify-center p-2.5 shadow-lg">
                  <img src="/favicon.svg" alt="CodeWithAbby Logo" className="h-full w-full object-contain" />
                </div>
                {/* 3. Engineering & Full-Stack Avatar */}
                <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-full border-2 border-[#0A0A0E] bg-[#141620] flex items-center justify-center text-[11px] font-mono font-bold text-white/90 shadow-lg tracking-wider">
                  <span>ENG</span>
                </div>
                {/* 4. Creative 3D & WebGL Avatar */}
                <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-full border-2 border-[#0A0A0E] bg-[#1b1e2a] flex items-center justify-center text-[11px] font-mono font-bold text-[#E44C1F] shadow-lg tracking-wider">
                  <span>3D</span>
                </div>
                {/* 5. Live Active Status Badge */}
                <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-full border-2 border-[#0A0A0E] bg-[#222533] flex items-center justify-center text-[10px] font-mono font-bold text-emerald-400 shadow-lg tracking-wider">
                  <span>● ON</span>
                </div>
              </div>

              {/* iPhone-style Signature Action Buttons */}
              <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center gap-3 rounded-full bg-[#E44C1F] px-10 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#ff5d2e] hover:shadow-[0_0_40px_rgba(228,76,31,0.6)] hover:scale-105 active:scale-95 shadow-xl"
                >
                  <span>START A PROJECT</span>
                  <span className="btn-arr text-base font-extrabold transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </Link>

                <a
                  href="https://wa.me/917055859219"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-9 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:scale-105 active:scale-95 shadow-lg"
                >
                  <span>CHAT ON WHATSAPP</span>
                  <span className="btn-arr text-emerald-400 group-hover:text-black transition-colors duration-300 font-bold">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
