import { createFileRoute, Link } from "@tanstack/react-router";
import { founder } from "@/data/team";
import { site } from "@/data/site";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/team")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: "Team & Founder | CodeWithAbby Digital Studio" },
      {
        name: "description",
        content:
          "Meet Syed Abbas Ali (Abby), Founder & Lead Developer of CodeWithAbby. A founder-led web studio delivering custom high-speed websites.",
      },
      { property: "og:title", content: "Team & Founder | CodeWithAbby Digital Studio" },
      {
        property: "og:description",
        content:
          "Meet Syed Abbas Ali (Abby), Founder & Lead Developer of CodeWithAbby. A founder-led web studio delivering custom high-speed websites.",
      },
      { property: "og:url", content: `${site.url}/team` },
    ],
  }),
});

function TeamPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#E44C1F] selection:text-white">
      <Navigation />

      <main className="relative overflow-hidden pt-28 sm:pt-36 pb-24 lg:pb-32">
        {/* Atmospheric ambient glow */}
        <div
          className="pointer-events-none absolute top-24 right-1/4 z-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(228,76,31,0.08)_0%,transparent_70%)] blur-3xl"
          aria-hidden
        />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="border-b border-white/[0.08] pb-12">
            <h1 className="font-editorial-serif italic text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.05]">
              About the <span className="text-[#E44C1F]">Founder</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl font-sans">
              No account managers or junior developers. At CodeWithAbby, you work directly with the founder and lead engineer on every project.
            </p>
          </div>

          {/* Founder Profile Card */}
          <div className="mt-14 rounded-[28px] sm:rounded-[36px] border border-white/[0.08] bg-[#0c0c10]/90 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl">
            <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
              {/* Portrait */}
              <div className="w-full md:w-64 lg:w-72 shrink-0 overflow-hidden rounded-[22px] border border-white/10 bg-neutral-950 aspect-[4/5]">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              {/* Bio & Details */}
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#E44C1F]">
                    FOUNDER & LEAD ENGINEER
                  </span>
                  <span className="text-white/30">•</span>
                  <span className="text-xs font-mono text-neutral-400">
                    {founder.location}
                  </span>
                </div>

                <h2 className="mt-3 font-agency-headline text-3xl sm:text-4xl font-extrabold text-white">
                  {founder.name}
                </h2>
                <p className="mt-1 text-sm font-semibold text-[#E44C1F]">
                  {founder.role}
                </p>

                <p className="mt-4 text-sm text-neutral-300 leading-relaxed font-sans">
                  {founder.bio}
                </p>

                {/* Core Expertise Tags */}
                <div className="mt-6">
                  <span className="text-xs font-mono uppercase text-neutral-400 font-bold">
                    Core Technical Stack
                  </span>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {founder.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg bg-white/[0.04] border border-white/5 px-2.5 py-1 font-mono text-[11px] text-neutral-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 flex items-center gap-4 pt-6 border-t border-white/[0.08]">
                  {founder.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-neutral-400 hover:text-[#E44C1F] transition-colors"
                    >
                      {s.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* The Studio Model */}
          <div className="mt-14 rounded-[28px] sm:rounded-[36px] border border-white/[0.08] bg-[#0c0c10]/60 p-8 sm:p-12">
            <span className="text-xs font-mono tracking-widest text-[#E44C1F] uppercase font-bold">
              HOW WE WORK
            </span>
            <h2 className="mt-3 font-agency-headline text-2xl sm:text-3xl font-bold text-white">
              Boutique speed, senior craft
            </h2>
            <div className="mt-6 space-y-4 text-sm text-neutral-300 leading-relaxed font-sans">
              <p>
                We keep our structure lean so that we can move fast and maintain exceptional quality. You don't have to deal with endless meetings or junior handoffs.
              </p>
              <p>
                As founder and lead engineer, Syed Abbas Ali personally designs, codes, and launches every website. For projects that require 3D modeling, custom video assets, or copy, we bring in vetted creative specialists while keeping all code unified and solid.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-white">Ready to start your website?</p>
                <p className="text-xs text-neutral-400">Direct turnaround in 6–14 business days.</p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#E44C1F] px-7 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#ff5d2e] shadow-[0_0_20px_rgba(228,76,31,0.3)] transition-all active:scale-95"
              >
                <span>Talk with Syed</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
