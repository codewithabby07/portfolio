import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";
import { Reveal, SectionLabel } from "@/components/ui";

export function ContactCTA() {
  const [copied, setCopied] = useState(false);

  function handleCopyEmail() {
    navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  return (
    <section
      className="relative overflow-hidden bg-black text-white border-t border-white/10 py-24 md:py-32"
      aria-labelledby="cta-heading"
    >
      {/* Atmospheric Radar Ripples behind CTA */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[420px] h-[420px] sm:w-[600px] sm:h-[600px]">
        <div className="absolute inset-0 rounded-full border border-[#E44C1F]/20 animate-cta-radar-1" />
        <div className="absolute inset-0 rounded-full border border-[#E44C1F]/15 animate-cta-radar-2" />
        <div className="absolute inset-0 rounded-full border border-white/5 animate-cta-radar-3" />
      </div>

      {/* Designer background element: Subtle radial glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 h-[600px] w-[700px] rounded-full bg-[radial-gradient(ellipse,rgba(228,76,31,0.12)_0%,transparent_70%)] blur-3xl animate-cta-breathe"
        aria-hidden
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-[11px] font-mono text-emerald-400 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>LET'S CONNECT • FOUNDER DIRECT</span>
          </div>

          <h2
            id="cta-heading"
            className="font-display mt-4 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] max-w-3xl mx-auto"
          >
            Have a project in mind?{" "}
            <span className="text-[#E44C1F]">Let's talk.</span>
          </h2>

          <p className="mt-5 max-w-xl mx-auto text-base sm:text-lg text-[#86868b] leading-relaxed">
            Collaborate directly with Syed Abbas Ali. Share your concept, and we'll discuss the ideal architecture, timeline, and execution plan.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="luxury-btn-primary cursor-pointer text-xs font-semibold uppercase tracking-wider shadow-[0_0_30px_rgba(228,76,31,0.4)]"
            >
              <span>Start a Project</span>
              <span className="btn-arr">→</span>
            </Link>

            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-btn-secondary cursor-pointer text-xs font-semibold uppercase tracking-wider"
            >
              <span>WhatsApp Direct</span>
              <span className="btn-arr text-emerald-400">↗</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-xs font-mono text-[#86868b] hover:text-white hover:border-white/30 transition-all cursor-pointer"
              title="Click to copy email address"
            >
              <span>{copied ? "✓ Copied!" : site.email}</span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
