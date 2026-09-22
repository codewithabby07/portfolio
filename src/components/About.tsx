import { Link } from "@tanstack/react-router";
import { Reveal, SectionLabel } from "@/components/ui";
import { StudioOrbit360 } from "@/components/StudioOrbit360";

export function About() {
  return (
    <section
      id="about"
      className="relative section-pad scroll-mt-32 overflow-hidden bg-black text-white border-t border-white/10"
      aria-labelledby="about-heading"
    >
      {/* Designer background element: Subtle radial glow */}
      <div
        className="pointer-events-none absolute top-1/2 right-[-10%] z-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(228,76,31,0.06)_0%,transparent_70%)] blur-3xl"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <SectionLabel>About The Studio</SectionLabel>
        </Reveal>

        {/* Section Headline */}
        <div className="mt-4 max-w-3xl">
          <h2
            id="about-heading"
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]"
          >
            Crafted with precision.{" "}
            <span className="text-[#E44C1F]">Built to perform.</span>
          </h2>
        </div>

        {/* Core Studio Story Grid */}
        <div className="mt-12 grid items-start gap-12 lg:grid-cols-12">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg leading-relaxed text-[#86868b]">
              Most web projects stall because of agency bloat—endless meetings, layers of intermediaries, and long delays waiting for junior teams to tweak generic templates.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-[#86868b]">
              CodeWithAbby operates on a simpler, better model: <strong className="text-white font-medium">direct founder engineering</strong>. You work directly with Syed Abbas Ali, the engineer actually building your platform. Every project is coded cleanly in modern React, Next.js, and Tailwind CSS—engineered for speed, security, and real business results.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="luxury-btn-secondary cursor-pointer"
              >
                <span>Read Full Studio Story</span>
                <span className="btn-arr">→</span>
              </Link>
              <Link
                to="/team"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#86868b] hover:text-white uppercase tracking-wider transition-colors px-4 py-3"
              >
                <span>Meet Founder Syed Abbas Ali</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Right Feature Card with Apple-grade Glass Styling */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#E44C1F]">
                  Studio Principles
                </span>
                <span className="h-2 w-2 rounded-full bg-[#E44C1F]" />
              </div>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs text-[#E44C1F] font-bold mt-0.5">01</span>
                  <div>
                    <h3 className="font-semibold text-white">Direct Founder Oversight</h3>
                    <p className="text-[#86868b] text-xs leading-relaxed mt-1">No account managers or telephone games. You collaborate directly with the builder.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs text-[#E44C1F] font-bold mt-0.5">02</span>
                  <div>
                    <h3 className="font-semibold text-white">Custom Architecture</h3>
                    <p className="text-[#86868b] text-xs leading-relaxed mt-1">Bespoke, maintainable codebases with 100% intellectual property ownership.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs text-[#E44C1F] font-bold mt-0.5">03</span>
                  <div>
                    <h3 className="font-semibold text-white">Fast, Focused Turnaround</h3>
                    <p className="text-[#86868b] text-xs leading-relaxed mt-1">Direct communication means launches happen within days, not months of back-and-forth.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs text-[#E44C1F] font-bold mt-0.5">04</span>
                  <div>
                    <h3 className="font-semibold text-white">Sub-Second Performance</h3>
                    <p className="text-[#86868b] text-xs leading-relaxed mt-1">Lightning-fast page loads and fluid 60fps animations across mobile and desktop devices.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 360 Dynamic Orbit Stack with Exact Paper Texture Background */}
        <div className="mt-16">
          <StudioOrbit360 />
        </div>
      </div>
    </section>
  );
}
