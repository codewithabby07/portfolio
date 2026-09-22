import { createFileRoute, Link } from "@tanstack/react-router";
import { industries } from "@/data/industries";
import { site } from "@/data/site";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/industries/")({
  component: IndustriesIndex,
  head: () => ({
    meta: [
      { title: "Industry-Specific Web Solutions & Commercial Frameworks | CodeWithAbby" },
      {
        name: "description",
        content:
          "Tailored custom websites engineered for Construction & Real Estate, Healthcare & Dental Clinics, Creative Studios, E-Commerce Brands, and SaaS Platforms.",
      },
      { property: "og:title", content: "Industry-Specific Web Solutions | CodeWithAbby" },
      {
        property: "og:description",
        content:
          "Tailored custom websites engineered for Construction & Real Estate, Healthcare & Dental Clinics, Creative Studios, E-Commerce Brands, and SaaS Platforms.",
      },
      { property: "og:url", content: `${site.url}/industries` },
      { property: "og:image", content: `${site.url}/images/og.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Industry-Specific Web Solutions | CodeWithAbby" },
      { name: "twitter:description", content: "Custom websites engineered for commercial industry sectors." },
      { name: "twitter:image", content: `${site.url}/images/og.jpg` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/industries` }],
  }),
});

function IndustriesIndex() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#E44C1F] selection:text-white">
      <Navigation />

      <main className="relative overflow-hidden pt-28 sm:pt-36 pb-24 lg:pb-32">
        {/* Atmospheric ambient glow */}
        <div
          className="pointer-events-none absolute top-20 left-1/3 z-0 h-[550px] w-[550px] rounded-full bg-[radial-gradient(circle,rgba(228,76,31,0.08)_0%,transparent_70%)] blur-3xl"
          aria-hidden
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="border-b border-white/[0.08] pb-12">
            <h1 className="font-editorial-serif italic text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.05]">
              Industries <span className="text-[#E44C1F]">We Serve</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-neutral-400 leading-relaxed font-sans">
              We build custom websites tailored to the exact needs of your industry. From construction and clinic bookings to luxury retail and SaaS platforms.
            </p>
          </div>

          {/* Industry Cards Grid */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <div
                key={ind.slug}
                className="group relative flex flex-col justify-between rounded-[28px] sm:rounded-[32px] border border-white/[0.08] bg-[#0c0c10]/90 p-6 sm:p-8 backdrop-blur-2xl transition-all duration-300 hover:border-white/20 hover:shadow-[0_15px_45px_-15px_rgba(228,76,31,0.2)] hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#E44C1F]">
                      {ind.number}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-neutral-300">
                      Sector
                    </span>
                  </div>

                  <h2 className="mt-4 font-agency-headline text-2xl font-bold tracking-tight text-white group-hover:text-[#E44C1F] transition-colors">
                    {ind.title}
                  </h2>
                  <p className="mt-2 text-xs font-medium text-neutral-300">
                    {ind.headline}
                  </p>
                  <p className="mt-3 text-xs text-neutral-400 leading-relaxed line-clamp-3">
                    {ind.description}
                  </p>

                  {/* Core Deliverables Preview */}
                  <div className="mt-6 border-t border-white/[0.08] pt-4">
                    <span className="text-xs font-mono uppercase text-neutral-400 font-bold">
                      Key Deliverables
                    </span>
                    <ul className="mt-2.5 space-y-1.5">
                      {ind.deliverables.slice(0, 3).map((d, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                          <span className="text-[#E44C1F]">›</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-8 border-t border-white/[0.08] pt-4 flex items-center justify-between">
                  <Link
                    to="/industries/$slug"
                    params={{ slug: ind.slug }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E44C1F] hover:text-[#ff5d2e] transition-colors"
                  >
                    <span>Learn More</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Consultation Strip */}
          <div className="mt-20 rounded-[28px] sm:rounded-[36px] border border-white/10 bg-gradient-to-br from-[#12131a] via-[#090a0e] to-[#000000] p-8 sm:p-12 relative overflow-hidden shadow-2xl md:flex md:items-center md:justify-between gap-8">
            <div
              className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-[#E44C1F]/15 blur-3xl"
              aria-hidden
            />
            <div className="max-w-xl relative z-10">
              <span className="text-xs font-mono font-bold tracking-widest text-[#E44C1F] uppercase">
                CUSTOM PROJECTS
              </span>
              <h3 className="mt-2 font-agency-headline text-2xl sm:text-3xl font-extrabold text-white">
                Don't see your exact industry?
              </h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                We build tailor-made digital platforms for businesses in any industry. Let's discuss your specific goals.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 rounded-full bg-[#E44C1F] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(228,76,31,0.35)] hover:bg-[#ff5d2e] active:scale-95 transition-all relative z-10 shrink-0"
            >
              <span>Get in Touch</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
