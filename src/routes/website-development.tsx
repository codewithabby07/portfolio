import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HandwrittenWord, Reveal, SectionLabel } from "@/components/ui";
import {
  Code2,
  Cpu,
  Layers,
  Zap,
  ArrowRight,
  ExternalLink,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/website-development")({
  component: WebsiteDevelopmentPage,
  head: () => ({
    meta: [
      { title: "Custom Website Development | CodeWithAbby" },
      {
        name: "description",
        content:
          "Bespoke React, Next.js, and TypeScript web development engineered for speed, authority, and conversion. Founded by Syed Abbas Ali in Delhi, India.",
      },
      { property: "og:title", content: "Custom Website Development | CodeWithAbby" },
      {
        property: "og:description",
        content:
          "Bespoke React, Next.js, and TypeScript web development engineered for speed, authority, and conversion.",
      },
      { property: "og:url", content: `${site.url}/website-development` },
      { property: "og:image", content: `${site.url}/images/og.jpg` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/website-development` }],
  }),
});

function WebsiteDevelopmentPage() {
  const whatsappUrl = `https://wa.me/917055859219?text=${encodeURIComponent(
    "Hi Abby! I want to discuss a custom website development project for my business."
  )}`;

  // Top flagship projects
  const flagshipProjects = projects.filter((p) =>
    ["alp-buildcon", "creavo", "zainca", "aureline-interiors", "dentiva"].includes(p.slug)
  );

  const pillars = [
    {
      icon: Cpu,
      title: "Clean React & TypeScript Code",
      description:
        "No fragile drag-and-drop builders or bloated WordPress themes. Every project is written with typed, maintainable architecture that loads instantly.",
    },
    {
      icon: Zap,
      title: "Sub-Second Edge Speeds",
      description:
        "Worldwide edge caching, next-gen WebP/AVIF media delivery, and strict optimization targeting 95+ Google Core Web Vitals.",
    },
    {
      icon: Layers,
      title: "Conversion-Focused UI/UX",
      description:
        "Editorial typography, high-contrast layouts, and frictionless lead hooks engineered to convert cold visitors into high-ticket inquiries.",
    },
    {
      icon: ShieldCheck,
      title: "100% Code Ownership",
      description:
        "Full intellectual property ownership and direct GitHub repository access. No recurring proprietary CMS lock-ins.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#E44C1F] selection:text-white">
      <Navigation />

      <main className="relative overflow-hidden pt-28 sm:pt-36 pb-24 lg:pb-32">
        {/* Background glow */}
        <div
          className="pointer-events-none absolute top-20 left-1/4 z-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(228,76,31,0.08)_0%,transparent_70%)] blur-3xl"
          aria-hidden
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <Reveal className="border-b border-white/[0.08] pb-12">
            <SectionLabel>Core Studio Discipline</SectionLabel>
            <h1 className="font-editorial-serif italic text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.05] mt-2">
              Website{" "}
              <HandwrittenWord variant="swoosh" color="#E44C1F">
                <span className="text-[#E44C1F]">Development.</span>
              </HandwrittenWord>
            </h1>

            <p className="mt-4 max-w-3xl text-base sm:text-lg text-neutral-400 leading-relaxed font-sans">
              We design, engineer, and deploy high-performance custom websites and web applications tailored to your exact business objectives. Direct founder engineering by Syed Abbas Ali with zero agency bloat.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#E44C1F] px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#ff5d2e] shadow-[0_0_25px_rgba(228,76,31,0.35)] transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Discuss Your Project</span>
              </a>

              <Link
                to="/work"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/10 transition-all"
              >
                <span>View All {projects.length} Projects</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          {/* Pillars */}
          <div className="mt-16">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8">
              Why Businesses Choose Custom Code
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <Reveal key={idx} delay={idx * 0.08}>
                    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl h-full space-y-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#E44C1F]/10 border border-[#E44C1F]/20 text-[#E44C1F]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-bold text-lg text-white">{pillar.title}</h3>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Featured Live Client Projects */}
          <div className="mt-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#E44C1F]">
                  Selected Work
                </span>
                <h2 className="font-display text-2xl sm:text-4xl font-bold text-white mt-1">
                  Recent Production Deployments
                </h2>
              </div>
              <Link
                to="/work"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E44C1F] hover:underline"
              >
                <span>Browse Full Portfolio Archive</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {flagshipProjects.map((project, index) => (
                <Reveal key={project.id} delay={index * 0.08}>
                  <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 mb-6">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                      <div className="absolute top-3 left-3">
                        <span className="rounded-full bg-black/60 border border-white/15 px-3 py-1 text-[11px] font-mono text-white/80 backdrop-blur-md">
                          {project.category}
                        </span>
                      </div>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-white text-black px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-neutral-200 transition-all"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#E44C1F] transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
                          {project.impact}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-neutral-400 line-clamp-2">
                        {project.tagline}
                      </p>

                      <div className="pt-3 flex flex-wrap gap-1.5">
                        {project.technologies.map((t, idx) => (
                          <span
                            key={idx}
                            className="rounded-full bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] font-mono text-neutral-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Consultation CTA */}
          <div className="mt-20 rounded-3xl border border-white/10 bg-neutral-900/60 p-8 sm:p-12 text-center max-w-4xl mx-auto">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Have a Project in Mind?
            </h3>
            <p className="mt-2 text-sm text-neutral-400 max-w-xl mx-auto">
              Send your brief or schedule a direct consultation with Syed Abbas Ali. We'll review your scope, propose an architecture, and provide a fixed quote.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#E44C1F] px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#ff5d2e] shadow-[0_0_25px_rgba(228,76,31,0.35)] transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Start Direct Conversation</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/10 transition-all"
              >
                <span>Submit Detailed Brief</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
