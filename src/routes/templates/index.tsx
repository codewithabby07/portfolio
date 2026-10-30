import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { templates, type WebsiteTemplate } from "@/data/templates";
import { site } from "@/data/site";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TemplateOrderModal } from "@/components/TemplateOrderModal";
import { HandwrittenWord, Reveal, SectionLabel } from "@/components/ui";
import { Sparkles, Eye, MessageCircle, Check, Music, Heart, Smartphone, Zap } from "lucide-react";

export const Route = createFileRoute("/templates/")({
  component: TemplatesGallery,
  head: () => ({
    meta: [
      { title: "Website Templates Gallery (₹99) | CodeWithAbby" },
      {
        name: "description",
        content:
          "Browse viral aesthetic website templates starting at just ₹99. Interactive cute apology sites, love letters, celebrations, and creator portfolios personalized with your names, photos, and music.",
      },
      { property: "og:title", content: "Website Templates Gallery (₹99) | CodeWithAbby" },
      {
        property: "og:description",
        content:
          "Browse viral aesthetic website templates starting at just ₹99. Personalized with your names, photos, and music within minutes.",
      },
      { property: "og:url", content: `${site.url}/templates` },
      { property: "og:image", content: `${site.url}/templates/cute-apology/cover-v1.webp` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/templates` }],
  }),
});

function TemplatesGallery() {
  const [selectedTemplate, setSelectedTemplate] = useState<WebsiteTemplate | null>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const handleOpenOrder = (tpl: WebsiteTemplate) => {
    setSelectedTemplate(tpl);
    setIsOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#E44C1F] selection:text-white">
      <Navigation />

      {/* Customization Order Modal */}
      <TemplateOrderModal
        template={selectedTemplate}
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />

      <main className="relative overflow-hidden pt-28 sm:pt-36 pb-24 lg:pb-32">
        {/* Ambient atmospheric lighting */}
        <div
          className="pointer-events-none absolute top-20 left-1/3 z-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(238,149,187,0.1)_0%,transparent_70%)] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute top-96 right-10 z-0 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(228,76,31,0.08)_0%,transparent_70%)] blur-3xl"
          aria-hidden
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Header */}
          <Reveal className="border-b border-white/[0.08] pb-12">
            <SectionLabel>Template Catalog</SectionLabel>
            <h1 className="font-editorial-serif italic text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.05] mt-2">
              Website{" "}
              <HandwrittenWord variant="swoosh" color="#EE95BB">
                <span className="text-[#EE95BB]">Templates.</span>
              </HandwrittenWord>
            </h1>

            <p className="mt-4 max-w-2xl text-base sm:text-lg text-neutral-400 leading-relaxed font-sans">
              Viral, interactive, and beautifully animated websites starting at just <strong className="text-white font-semibold">₹99</strong>. Test the live interactive demo below, customize your names and message, and receive your personalized link within minutes.
            </p>

            {/* Quick Selling Value Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-neutral-300">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/10 px-3.5 py-1.5">
                <Music className="h-3.5 w-3.5 text-[#EE95BB]" />
                <span>Romantic Music Included</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/10 px-3.5 py-1.5">
                <Smartphone className="h-3.5 w-3.5 text-emerald-400" />
                <span>Fast 60fps Mobile Performance</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/10 px-3.5 py-1.5">
                <Zap className="h-3.5 w-3.5 text-amber-400" />
                <span>Delivered via WhatsApp in Minutes</span>
              </span>
            </div>
          </Reveal>

          {/* Templates Grid */}
          <div className="mt-12 space-y-12">
            {templates.map((tpl) => (
              <Reveal key={tpl.id}>
                <div className="overflow-hidden rounded-3xl border border-white/12 bg-white/[0.02] backdrop-blur-xl transition-all duration-300 hover:border-white/20 p-6 sm:p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left: Preview Card */}
                    <div className="lg:col-span-5 relative group">
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/15 bg-neutral-900 shadow-2xl">
                        <img
                          src={tpl.previewImage}
                          alt={tpl.name}
                          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                        {/* Top Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/90 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white shadow-lg">
                            <Heart className="h-3.5 w-3.5 fill-current" />
                            <span>{tpl.badge || "Trending"}</span>
                          </span>
                        </div>

                        {/* Overlay View Demo Pill on Hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-xs">
                          <Link
                            to="/templates/preview" search={{ template: tpl.slug }}
                            className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-950 px-5 py-2.5 text-xs font-bold uppercase tracking-wider shadow-xl hover:scale-105 transition-all"
                          >
                            <Eye className="h-4 w-4" />
                            <span>Open Working Demo</span>
                          </Link>
                        </div>
                      </div>

                      {/* Demo Watermark Notice */}
                      <p className="mt-3 text-[11px] text-neutral-400 text-center font-mono">
                        👁️ Includes actual music, animations & interactive buttons
                      </p>
                    </div>

                    {/* Right: Details & Order CTA */}
                    <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
                      <div>
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#EE95BB]">
                            {tpl.category}
                          </span>

                          {/* Pricing Badge */}
                          <div className="flex items-baseline gap-2">
                            <span className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                              {tpl.currency}{tpl.price}
                            </span>
                            <span className="text-sm font-semibold text-neutral-500 line-through">
                              {tpl.currency}{tpl.originalPrice}
                            </span>
                            <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
                              80% OFF
                            </span>
                          </div>
                        </div>

                        <h2 className="font-display mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                          {tpl.name}
                        </h2>

                        <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                          {tpl.description}
                        </p>

                        {/* Features List */}
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {tpl.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#E44C1F]/20 text-[#E44C1F] mt-0.5">
                                <Check className="h-2.5 w-2.5 stroke-[3]" />
                              </span>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                        {/* View Demo Button */}
                        <Link
                          to="/templates/preview" search={{ template: tpl.slug }}
                          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/10 hover:border-white/30 transition-all text-center"
                        >
                          <Eye className="h-4 w-4 text-[#EE95BB]" />
                          <span>View Demo</span>
                        </Link>

                        {/* Customize / Order Button */}
                        <button
                          type="button"
                          onClick={() => handleOpenOrder(tpl)}
                          className="flex-1 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#E44C1F] px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#ff5d2e] shadow-[0_0_25px_rgba(228,76,31,0.35)] transition-all cursor-pointer text-center"
                        >
                          <Sparkles className="h-4 w-4" />
                          <span>Customize / Order Now • {tpl.currency}{tpl.price}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* How It Works & Future Templates Notice */}
          <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-10 backdrop-blur-xl">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#E44C1F]">
                Fast 3-Step Process
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                How You Get Your Personalized Website
              </h3>
              <p className="text-sm text-neutral-400">
                No technical skills required. We personalize and host everything for you.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 space-y-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#E44C1F]/20 text-[#E44C1F] font-mono text-sm font-bold">
                  1
                </span>
                <h4 className="font-bold text-base text-white">Fill Simple Details</h4>
                <p className="text-xs text-neutral-400">
                  Enter your sender name, receiver name, and optional custom message in the customization form.
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 space-y-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#EE95BB]/20 text-[#EE95BB] font-mono text-sm font-bold">
                  2
                </span>
                <h4 className="font-bold text-base text-white">WhatsApp Order & UPI</h4>
                <p className="text-xs text-neutral-400">
                  WhatsApp opens with your prefilled brief. Send the message and complete the ₹99 payment securely via UPI.
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 space-y-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-sm font-bold">
                  3
                </span>
                <h4 className="font-bold text-base text-white">Receive Your Live Link</h4>
                <p className="text-xs text-neutral-400">
                  We generate your personalized, working link with custom music and animations ready to send on WhatsApp or Instagram!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
