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
      {/* Designer background element: Subtle radial glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 h-[600px] w-[700px] rounded-full bg-[radial-gradient(ellipse,rgba(228,76,31,0.09)_0%,transparent_70%)] blur-3xl"
        aria-hidden
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Reveal>
          <SectionLabel>Let's Connect</SectionLabel>

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
              className="inline-flex items-center gap-2 rounded-full bg-[#E44C1F] px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(228,76,31,0.35)] hover:bg-[#ff5d2e] transition-all duration-300 active:scale-95"
            >
              <span>Start a Project</span>
              <span>→</span>
            </Link>

            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-xs font-semibold uppercase tracking-wider text-white hover:border-white/30 hover:bg-white/10 transition-all active:scale-95"
            >
              <span>WhatsApp Direct</span>
              <span className="text-sm">↗</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-6 py-4 text-xs font-mono text-[#86868b] hover:text-white hover:border-white/20 transition-all cursor-pointer"
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
