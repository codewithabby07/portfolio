import { Link } from "@tanstack/react-router";
import { Reveal, SectionLabel, HandwrittenWord } from "@/components/ui";
import { Sparkles, UtensilsCrossed, Code2, ArrowUpRight } from "lucide-react";

export function WhatWeDo() {
  const services = [
    {
      id: "templates",
      title: "Website Templates",
      badge: "From ₹99 • Instant Setup",
      badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
      icon: Sparkles,
      iconColor: "text-rose-400",
      description:
        "Viral aesthetic websites for apologies, birthdays, portfolios & celebrations with sweet music and animations.",
      image: "/templates/cute-apology/cover-v1.webp",
      href: "/templates",
      cta: "Explore Templates",
      highlight: "₹99 Only",
    },
    {
      id: "digital-qr-menus",
      title: "Digital QR Menus",
      badge: "",
      badgeColor: "",
      icon: UtensilsCrossed,
      iconColor: "text-amber-400",
      description:
        "Sub-second interactive mobile menus with live table carts, dietary filters, and direct WhatsApp ordering.",
      image: "/images/projects/antilia-menu.png",
      href: "/digital-qr-menus",
      cta: "Explore QR Menus",
      highlight: "Live Demos",
    },
    {
      id: "website-development",
      title: "Website Development",
      badge: "",
      badgeColor: "",
      icon: Code2,
      iconColor: "text-[#E44C1F]",
      description:
        "Custom React & Next.js digital platforms engineered for brand authority, high conversion, and sub-second load times.",
      image: "/images/projects/alp-buildcon.jpg",
      href: "/website-development",
      cta: "Explore Custom Websites",
      highlight: "15+ Live Builds",
    },
  ];

  return (
    <section
      id="what-we-do"
      className="relative scroll-mt-24 border-t border-white/10 bg-neutral-950 text-white py-16 md:py-24 overflow-hidden"
      aria-labelledby="what-we-do-heading"
    >
      {/* Background radial atmosphere */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[radial-gradient(circle,rgba(228,76,31,0.08)_0%,transparent_70%)] blur-3xl"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-white/[0.08] pb-10">
          <div>
            <SectionLabel>What We Do</SectionLabel>
            <h2
              id="what-we-do-heading"
              className="font-display mt-2 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            >
              Three Ways We{" "}
              <HandwrittenWord variant="swoosh" color="#E44C1F">
                <span className="text-[#E44C1F]">Build.</span>
              </HandwrittenWord>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-neutral-400 leading-relaxed font-sans">
            From viral ₹99 interactive templates to high-speed digital cafe menus and custom enterprise platforms. Click any discipline to explore.
          </p>
        </Reveal>

        {/* 3 Clickable Service Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.id} delay={index * 0.08}>
                <Link
                  to={item.href}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#E44C1F]/10 block h-full"
                >
                  <div>
                    {/* Visual Preview Image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 mb-6">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />

                      {/* Floating pill badge */}
                      {item.badge ? (
                        <div className="absolute top-3 left-3">
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-mono font-semibold tracking-wide backdrop-blur-md ${item.badgeColor}`}
                          >
                            <Icon className="h-3 w-3" />
                            <span>{item.badge}</span>
                          </span>
                        </div>
                      ) : null}

                      {/* Arrow Icon in Top Right */}
                      <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 border border-white/15 text-white/70 group-hover:text-white group-hover:bg-[#E44C1F] group-hover:border-[#E44C1F] transition-all">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Card Title & Description */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#E44C1F] transition-colors">
                          {item.title}
                        </h3>
                        <span className="text-xs font-mono font-semibold text-neutral-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                          {item.highlight}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Explore Button */}
                  <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#E44C1F] group-hover:translate-x-1 transition-transform">
                      {item.cta} →
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500">
                      View Dedicated Page
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
