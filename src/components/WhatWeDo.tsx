import { Link } from "@tanstack/react-router";
import { Reveal, SectionLabel, HandwrittenWord } from "@/components/ui";
import { Sparkles, UtensilsCrossed, Code2, ArrowUpRight } from "lucide-react";

export function WhatWeDo() {
  const services = [
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
              What We{" "}
              <HandwrittenWord variant="swoosh" color="#E44C1F">
                <span className="text-[#E44C1F]">Build.</span>
              </HandwrittenWord>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-neutral-400 leading-relaxed font-sans">
            From custom high-conversion enterprise platforms to lightning-fast digital cafe menus and viral ₹99 interactive templates. Click any service to explore.
          </p>
        </Reveal>

        {/* 3 Clickable Service Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="h-full">
                <Link
                  to={item.href}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/12 bg-white/[0.03] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-white/25 hover:bg-white/[0.05] hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] cursor-pointer h-full"
                >
                  <div>
                    {/* Visual Preview Header Image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/10 bg-neutral-900">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />

                      {/* Top Badges */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                        {item.badge ? (
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold backdrop-blur-md ${item.badgeColor}`}
                          >
                            <span>{item.badge}</span>
                          </span>
                        ) : (
                          <span />
                        )}
                        <span className="inline-flex items-center rounded-full bg-black/60 border border-white/15 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider text-neutral-300">
                          {item.highlight}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-7">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06] border border-white/10">
                          <Icon className={`h-4.5 w-4.5 ${item.iconColor}`} />
                        </div>
                        <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#E44C1F] transition-colors">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-3 text-sm text-neutral-400 leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2">
                    <div className="flex items-center justify-between border-t border-white/[0.08] pt-4 text-xs font-semibold uppercase tracking-wider text-neutral-300 group-hover:text-white transition-colors">
                      <span>{item.cta}</span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:bg-[#E44C1F] group-hover:border-[#E44C1F] group-hover:text-white transition-all">
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
