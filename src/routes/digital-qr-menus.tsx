import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/data/site";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HandwrittenWord, Reveal, SectionLabel } from "@/components/ui";
import {
  UtensilsCrossed,
  QrCode,
  Smartphone,
  Zap,
  TrendingDown,
  Clock,
  ExternalLink,
  MessageCircle,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

export const Route = createFileRoute("/digital-qr-menus")({
  component: DigitalQrMenusPage,
  head: () => ({
    meta: [
      { title: "Digital QR Menus & Food Hub Platforms | CodeWithAbby" },
      {
        name: "description",
        content:
          "Zero-commission digital QR menus, tabletop ordering, and instant WhatsApp food cart pipelines for cafes, restaurants, and lounges. Explore live demos for NT Café and Antilia.",
      },
      { property: "og:title", content: "Digital QR Menus & Food Hub Platforms | CodeWithAbby" },
      {
        property: "og:description",
        content:
          "Zero-commission digital QR menus, tabletop ordering, and instant WhatsApp food cart pipelines for cafes, restaurants, and lounges.",
      },
      { property: "og:url", content: `${site.url}/digital-qr-menus` },
      { property: "og:image", content: `${site.url}/images/projects/nt-cafe.png` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/digital-qr-menus` }],
  }),
});

function DigitalQrMenusPage() {
  const whatsappUrl = `https://wa.me/917055859219?text=${encodeURIComponent(
    "Hi Abby! I want to get a Digital QR Menu built for my cafe/restaurant. Can we discuss features and pricing?"
  )}`;

  const menuShowcases = [
    {
      id: "nt-cafe",
      title: "NT CAFÉ (FOOD HUB)",
      subtitle: "Civil Lines, Sir Syed Nagar, Aligarh",
      description:
        "Engineered for high-volume cafe crowds. Features instant keyword dish search across momos, pizzas, shakes, and burgers, with clear Pure Veg / Non-Veg toggles and zero-wait tabletop QR access.",
      image: "/images/projects/nt-cafe.png",
      liveUrl: "https://nt-cafe-menu.vercel.app/",
      tech: ["React", "Vite", "Tailwind CSS", "Vercel Edge"],
      metrics: ["100/100 Mobile Speed", "0ms App Download", "Sub-400ms Menu Load"],
      highlights: [
        "Live instant dish search bar",
        "Clear Pure Veg / Non-Veg dietary filters",
        "Horizontal scrolling category bar",
        "Mobile-optimized high-res food cards",
        "Direct call & location links",
      ],
    },
    {
      id: "antilia-menu",
      title: "ANTILIA RESTAURANT & BAR",
      subtitle: "Full-Service Dining & Bar",
      description:
        "A dark luxury interactive dining menu featuring table number selection, dynamic cart with automatic bill calculator, digital waiter call bell, and instant WhatsApp order formatting sent directly to the manager.",
      image: "/images/projects/antilia-menu.png",
      liveUrl: "https://antilia.pages.dev/",
      tech: ["Vanilla ES6", "HTML5", "Modern CSS", "Cloudflare Pages", "WhatsApp API"],
      metrics: ["100% Digital Order Flow", "Zero Aggregator Fees", "Table Specific Dispatch"],
      highlights: [
        "Interactive tabletop cart & bill calculation",
        "Automated WhatsApp receipt dispatch with table numbers",
        "One-tap 'Call Waiter' summoning bell",
        "Built-in staff admin toggle for live sold-out dishes",
        "Dark sushi & cocktail ambient design",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#E44C1F] selection:text-white">
      <Navigation />

      <main className="relative overflow-hidden pt-28 sm:pt-36 pb-24 lg:pb-32">
        {/* Background Atmosphere */}
        <div
          className="pointer-events-none absolute top-20 left-1/4 z-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.08)_0%,transparent_70%)] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute top-96 right-10 z-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(228,76,31,0.08)_0%,transparent_70%)] blur-3xl"
          aria-hidden
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <Reveal className="border-b border-white/[0.08] pb-12">
            <SectionLabel>Specialized Hospitality Engineering</SectionLabel>
            <h1 className="font-editorial-serif italic text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.05] mt-2">
              Digital QR{" "}
              <HandwrittenWord variant="swoosh" color="#F59E0B">
                <span className="text-[#F59E0B]">Menus.</span>
              </HandwrittenWord>
            </h1>

            <p className="mt-4 max-w-3xl text-base sm:text-lg text-neutral-400 leading-relaxed font-sans">
              Stop making customers wait for greasy paper menus or download 20MB scanned PDFs that freeze their phones. We build custom, ultra-fast mobile QR menu web applications with live dish search, tabletop cart calculation, and direct zero-commission WhatsApp ordering.
            </p>

            {/* Core Benefits */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center">
                <TrendingDown className="h-5 w-5 text-emerald-400 mx-auto mb-2" />
                <span className="block font-bold text-lg text-white">0%</span>
                <span className="text-xs text-neutral-400">Commission Fees</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center">
                <Zap className="h-5 w-5 text-amber-400 mx-auto mb-2" />
                <span className="block font-bold text-lg text-white">&lt; 400ms</span>
                <span className="text-xs text-neutral-400">Load Time on 4G</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center">
                <Smartphone className="h-5 w-5 text-[#E44C1F] mx-auto mb-2" />
                <span className="block font-bold text-lg text-white">No App</span>
                <span className="text-xs text-neutral-400">Zero Download Required</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center">
                <MessageCircle className="h-5 w-5 text-emerald-400 mx-auto mb-2" />
                <span className="block font-bold text-lg text-white">WhatsApp</span>
                <span className="text-xs text-neutral-400">Instant Order Routing</span>
              </div>
            </div>
          </Reveal>

          {/* Live Showcases Section */}
          <div className="mt-16 space-y-16">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F59E0B]">
                Proven In Production
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-1">
                Explore Live Client Deployments
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2">
                Click any live demo to interact with real food categories, search dishes, and test the cart flow.
              </p>
            </div>

            {menuShowcases.map((showcase, index) => (
              <Reveal key={showcase.id} delay={index * 0.1}>
                <div className="overflow-hidden rounded-3xl border border-white/12 bg-white/[0.02] backdrop-blur-xl transition-all duration-300 hover:border-white/20 p-6 sm:p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left: Image & Live Link */}
                    <div className="lg:col-span-6 relative group">
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/15 bg-neutral-900 shadow-2xl">
                        <img
                          src={showcase.image}
                          alt={showcase.title}
                          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                        {/* Hover Overlay Button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-xs">
                          <a
                            href={showcase.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-950 px-6 py-3 text-xs font-bold uppercase tracking-wider shadow-2xl hover:scale-105 transition-all"
                          >
                            <span>Open Live Website</span>
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                      </div>

                      {/* Tech Chips */}
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        {showcase.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[11px] font-mono text-neutral-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Content & Highlights */}
                    <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F59E0B]">
                            {showcase.subtitle}
                          </span>
                          <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2.5 py-0.5 rounded-full border border-emerald-400/20">
                            Live & Operational
                          </span>
                        </div>

                        <h3 className="font-display mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-white">
                          {showcase.title}
                        </h3>

                        <p className="mt-3 text-sm text-neutral-300 leading-relaxed font-sans">
                          {showcase.description}
                        </p>

                        {/* Metric Highlights */}
                        <div className="mt-5 grid grid-cols-3 gap-2 py-3 border-y border-white/10">
                          {showcase.metrics.map((m, idx) => (
                            <div key={idx} className="text-center">
                              <span className="block text-xs font-bold text-white truncate">{m}</span>
                            </div>
                          ))}
                        </div>

                        {/* Highlights list */}
                        <div className="mt-5 space-y-2">
                          {showcase.highlights.map((h, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                              <CheckCircle2 className="h-4 w-4 text-[#F59E0B] shrink-0" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Live Link Button */}
                      <div className="pt-4 flex flex-col sm:flex-row gap-3">
                        <a
                          href={showcase.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E44C1F] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#ff5d2e] shadow-[0_0_20px_rgba(228,76,31,0.3)] transition-all"
                        >
                          <span>Test Live QR Menu</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>

                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/10 transition-all"
                        >
                          <MessageCircle className="h-3.5 w-3.5 text-emerald-400" />
                          <span>Get One For Your Cafe</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bottom WhatsApp CTA */}
          <div className="mt-20 rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.04] to-transparent p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            <div
              className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 h-44 w-96 rounded-full bg-[#E44C1F]/20 blur-3xl"
              aria-hidden
            />

            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F59E0B]">
              Ready to Upgrade Your Dining Experience?
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-bold text-white mt-2">
              Get a Custom QR Menu for Your Cafe or Restaurant
            </h3>
            <p className="mt-3 text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed">
              We provide complete setup: custom branding, photography styling, dish catalog, table QR tent cards, and staff WhatsApp integration.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#E44C1F] px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#ff5d2e] shadow-[0_0_25px_rgba(228,76,31,0.4)] transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Enquire via WhatsApp (+91 7055859219)</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
