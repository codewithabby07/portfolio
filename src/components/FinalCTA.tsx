import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/ui";

export function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative bg-[#ECECEE] py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          {/* Centered Large Dark Charcoal / Black Rounded Card */}
          <div className="relative rounded-[2.25rem] sm:rounded-[3rem] bg-[#0A0A0C] border border-black/10 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.3)] p-10 sm:p-16 md:p-24 text-center text-white overflow-hidden">
            {/* Subtle internal dark vignette */}
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(228,76,31,0.06)_0%,transparent_70%)]"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              {/* Section Headline */}
              <h2
                id="final-cta-heading"
                className="font-display text-[clamp(2.1rem,5.2vw,4.4rem)] font-extrabold tracking-tight text-white leading-[1.08] select-none"
              >
                <span>Ready to build</span>
                <br />
                <span>something worth</span>
                <br />
                <span
                  className="font-serif italic font-semibold text-[#E44C1F] inline-block mt-1 sm:mt-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  remembering?
                </span>
              </h2>

              {/* Supporting text */}
              <p className="mt-6 sm:mt-8 text-base sm:text-lg text-white/70 font-normal leading-relaxed max-w-lg">
                Tell us what you're working on. We'll tell you if we're the right fit.
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

              {/* Prominent Rounded CTA Button */}
              <div className="mt-8 sm:mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#E44C1F] px-9 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#ff5d2e] hover:shadow-[0_0_35px_rgba(228,76,31,0.5)] active:scale-95 cursor-pointer"
                >
                  <span>START A PROJECT</span>
                  <span className="text-base font-bold">→</span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
