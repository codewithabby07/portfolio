import { Link } from "@tanstack/react-router";
import { Reveal, HandwrittenWord } from "@/components/ui";

export function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative bg-[#ECECEE] py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      <div className="mx-auto max-w-5xl relative">
        {/* Atmospheric Radar Ripples behind Card */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[420px] h-[420px] sm:w-[600px] sm:h-[600px]">
          <div className="absolute inset-0 rounded-full border border-[#E44C1F]/20 animate-cta-radar-1" />
          <div className="absolute inset-0 rounded-full border border-[#E44C1F]/15 animate-cta-radar-2" />
          <div className="absolute inset-0 rounded-full border border-white/10 animate-cta-radar-3" />
        </div>

        <Reveal>
          {/* Centered Large Dark Charcoal / Black Rounded Card */}
          <div className="relative z-10 rounded-[2.25rem] sm:rounded-[3rem] bg-[#0A0A0C] border border-white/15 shadow-[0_30px_90px_-15px_rgba(0,0,0,0.5)] p-10 sm:p-16 md:p-24 text-center text-white overflow-hidden backdrop-blur-2xl">
            {/* Subtle internal dark vignette & glowing spotlight */}
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(228,76,31,0.14)_0%,transparent_75%)] animate-cta-breathe"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              {/* Live Availability Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-[11px] font-mono text-emerald-400 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>AVAILABLE FOR NEXT SPRINT • 1 SPOT OPEN</span>
              </div>

              {/* Section Headline */}
              <h2
                id="final-cta-heading"
                className="font-display text-[clamp(2.1rem,5.2vw,4.4rem)] font-extrabold tracking-tight text-white leading-[1.08] select-none"
              >
                <span>Ready to build</span>
                <br />
                <span>something worth</span>
                <br />
                <HandwrittenWord variant="swoosh" color="#E44C1F" className="mt-1 sm:mt-2">
                  <span
                    className="font-serif italic font-semibold text-[#E44C1F] inline-block"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    remembering?
                  </span>
                </HandwrittenWord>
              </h2>

              {/* Supporting text */}
              <p className="mt-6 sm:mt-8 text-base sm:text-lg text-white/70 font-normal leading-relaxed max-w-lg">
                Tell us what you're working on. We'll tell you if we're the right fit. Direct founder collaboration with Syed Abbas Ali.
              </p>

              {/* Row of 4–5 small circular team/avatar images */}
              <div className="mt-8 sm:mt-10 flex items-center justify-center -space-x-2.5 sm:-space-x-3">
                {/* 1. Founder Syed Abbas Ali */}
                <img
                  src="/images/portrait.jpg"
                  alt="Syed Abbas Ali (Founder & Lead Engineer)"
                  className="h-11 w-11 sm:h-12 sm:w-12 rounded-full border-2 border-[#0A0A0C] object-cover shadow-lg"
                />
                {/* 2. CodeWithAbby Studio Brand Icon */}
                <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-full border-2 border-[#0A0A0C] bg-[#E44C1F] flex items-center justify-center p-2.5 shadow-lg">
                  <img src="/favicon.svg" alt="CodeWithAbby Logo" className="h-full w-full object-contain" />
                </div>
                {/* 3. Engineering & Full-Stack Avatar */}
                <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-full border-2 border-[#0A0A0C] bg-[#141620] flex items-center justify-center text-[11px] font-mono font-bold text-white/90 shadow-lg tracking-wider">
                  <span>ENG</span>
                </div>
                {/* 4. Creative 3D & WebGL Avatar */}
                <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-full border-2 border-[#0A0A0C] bg-[#1b1e2a] flex items-center justify-center text-[11px] font-mono font-bold text-[#E44C1F] shadow-lg tracking-wider">
                  <span>3D</span>
                </div>
                {/* 5. Live Active Status Badge */}
                <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-full border-2 border-[#0A0A0C] bg-[#222533] flex items-center justify-center text-[10px] font-mono font-bold text-emerald-400 shadow-lg tracking-wider">
                  <span>● ON</span>
                </div>
              </div>

              {/* Prominent Rounded CTA Buttons */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="luxury-btn-primary cursor-pointer text-xs sm:text-sm px-9 py-4 shadow-[0_0_35px_rgba(228,76,31,0.5)]"
                >
                  <span>START A PROJECT</span>
                  <span className="btn-arr text-base font-bold">→</span>
                </Link>
                <a
                  href="https://wa.me/917055859219"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxury-btn-secondary cursor-pointer text-xs sm:text-sm px-8 py-4"
                >
                  <span>CHAT ON WHATSAPP</span>
                  <span className="btn-arr text-emerald-400">↗</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
