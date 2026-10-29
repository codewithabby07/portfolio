import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { templates } from "@/data/templates";
import { TemplateOrderModal } from "@/components/TemplateOrderModal";
import { ArrowLeft, Sparkles, ExternalLink, ShieldAlert } from "lucide-react";

export const Route = createFileRoute("/templates/preview")({
  component: TemplateDemoPreview,
  head: () => ({
    meta: [
      { title: "Live Demo Preview — Cute Apology Website (₹99) | CodeWithAbby" },
      {
        name: "description",
        content:
          "Test the live working demo of our viral cute apology website. Listen to romantic music, interact with playful animations, and order your personalized version for ₹99.",
      },
    ],
  }),
});

function TemplateDemoPreview() {
  const template = templates[0]; // Cute apology template
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen w-screen bg-neutral-950 text-white overflow-hidden">
      {/* Top Floating Control Bar */}
      <header className="relative z-30 flex items-center justify-between gap-4 border-b border-white/10 bg-neutral-950/95 px-4 sm:px-6 py-3 backdrop-blur-xl shrink-0">
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <Link
            to="/templates"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-neutral-300 hover:bg-white/10 hover:text-white transition-all shrink-0"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Back to Templates</span>
            <span className="sm:hidden">Back</span>
          </Link>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="font-display text-sm sm:text-base font-bold text-white truncate">
                {template.name}
              </h1>
              <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/20 border border-rose-500/30 px-2 py-0.5 text-[10px] font-mono font-semibold text-rose-300 shrink-0">
                <span>Preview Mode</span>
              </span>
            </div>
            <p className="text-[11px] text-neutral-400 hidden sm:block truncate">
              {template.demoNotice}
            </p>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="/templates/cute-apology/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors px-2 py-1"
            title="Open standalone in new window"
          >
            <span>Full Window</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>

          <button
            type="button"
            onClick={() => setIsOrderModalOpen(true)}
            className="inline-flex items-center gap-2 rounded-full bg-[#E44C1F] px-4 sm:px-5 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#ff5d2e] shadow-[0_0_20px_rgba(228,76,31,0.4)] transition-all cursor-pointer"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Customize & Order (₹{template.price})</span>
          </button>
        </div>
      </header>

      {/* Notice Banner */}
      <div className="bg-neutral-900 border-b border-white/5 px-4 py-1.5 text-center text-[11px] text-neutral-400 flex items-center justify-center gap-1.5 shrink-0">
        <ShieldAlert className="h-3.5 w-3.5 text-amber-400 shrink-0" />
        <span>
          Preview Notice: This is a working demo template. When you order, all names, text, music, and optional photos are customized for your recipient.
        </span>
      </div>

      {/* Iframe Viewport */}
      <div className="relative flex-1 w-full bg-[#FBF5F4] overflow-hidden">
        <iframe
          src="/templates/cute-apology/index.html"
          title="Cute Apology Website Demo Preview"
          className="w-full h-full border-0"
          allow="autoplay"
        />
      </div>

      {/* Customization Modal */}
      <TemplateOrderModal
        template={template}
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </div>
  );
}
