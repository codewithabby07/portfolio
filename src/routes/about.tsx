import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { site } from "@/data/site";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/ui";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About CodeWithAbby | Independent Web Studio Founded by Syed Abbas Ali" },
      {
        name: "description",
        content:
          "CodeWithAbby is an independent digital studio founded by Syed Abbas Ali, building high-speed, custom web platforms for ambitious businesses worldwide.",
      },
      { property: "og:title", content: "About CodeWithAbby | Independent Web Studio" },
      {
        property: "og:description",
        content:
          "CodeWithAbby is an independent digital studio founded by Syed Abbas Ali, building high-speed, custom web platforms for ambitious businesses worldwide.",
      },
      { property: "og:url", content: `${site.url}/about` },
      { property: "og:image", content: `${site.url}/images/og.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About CodeWithAbby | Independent Web Studio" },
      { name: "twitter:description", content: "Independent digital studio founded by Syed Abbas Ali." },
      { name: "twitter:image", content: `${site.url}/images/og.jpg` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/about` }],
  }),
});

/* ─────────────────────────────────────────────────────────────
   Interactive 360° Dynamic Tech Orbit Universe (Dual-Orbit System)
   ───────────────────────────────────────────────────────────── */
const OUTER_ORBIT_TECHS = [
  {
    name: "React 19",
    role: "Component Architecture",
    metric: "60fps Fluid UI",
    color: "#61DAFB",
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5 sm:w-6 sm:h-6">
        <g fill="#61DAFB">
          <circle cx="64" cy="64" r="11.4" />
          <path d="M107.3 45.2c-2.3-.8-4.7-1.6-7-2.3.6-2.4 1.1-4.8 1.5-7.1-2.1.3-4.1.5-6.2.6-.4-2-.8-2.9-1.1-4.2-2.2.9-4.4 1.8-6.5 2.5-4.2-2.8-8.3-5.8-12-9.2-1.6 5.6-2.8 11.2-3.6 17-.3 1.3-.5 2.5-.6 3.8-4.5-.2-9-.1-13.5.2-.1-1.3-.3-2.6-.4-3.9-.8-5.8-2-11.4-3.6-17-3.8 3.5-7.8 6.4-12.1 9.2-2.1-.7-4.2-1.5-6.3-2.3-.4 1.4-.7 2.8-1.1 4.2-2.2-.1-4.3-.3-6.4-.6.4 2.3.9 4.7 1.5 7-2.4.7-4.8 1.4-7.1 2.3-4.5 9.7-5 18.8-1.4 27.5 2 5 4.9 9.8 8.7 14.3.7-.9 1.5-1.8 2.2-2.7 3.4-4.7 6.2-9.7 8.5-15-.7-1.4-1.3-2.9-1.9-4.3-2.4.1-4.9.2-7.3.4 1.8 7.7 4.5 14.8 8 21.3-4.5 1.8-8.7 3.2-12.6 4.3 1.7 3.6 3.5 7 5.5 10.3 5.8-.6 11.5-1.7 17.1-3.3-.2-1.3-.4-2.7-.6-4-3.8-1-7.4-2.3-10.8-3.8 3.6 2.6 7.4 5 11.4 7.2 2.2 1.2 4.4 2.3 6.7 3.3 2.2-1 4.4-2.1 6.5-3.3 4 2.2 7.8 4.6 11.4 7.2-3.4-1.5-7-2.8-10.8-3.8-.2 1.3-.4 2.6-.6 4 5.6 1.6 11.3 2.7 17.1 3.3 2-3.3 3.8-6.7 5.5-10.3-3.9-1.1-8.1-2.5-12.6-4.3 3.5-6.5 6.2-13.6 8-21.3-2.4-.2-4.9-.3-7.3-.4-.6 1.4-1.2 2.9-1.9 4.3 2.4 5.3 5.2 10.3 8.5 15 .7.9 1.5 1.8 2.2 2.7 3.8-4.5 6.7-9.3 8.7-14.3 3.6-8.7 3.1-17.8-1.4-27.5z" />
        </g>
      </svg>
    ),
  },
  {
    name: "Next.js",
    role: "SSR & Edge Routing",
    metric: "Sub-Second TTFB",
    color: "#FFFFFF",
    svg: (
      <svg viewBox="0 0 180 180" className="w-5 h-5 sm:w-6 sm:h-6">
        <circle cx="90" cy="90" r="90" fill="#000" />
        <path
          fill="#fff"
          d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 009.509-7.325z"
        />
        <path fill="#fff" d="M81 151.21V54h14v97.21z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    role: "Type-Safe Systems",
    metric: "Zero Runtime Bugs",
    color: "#3178C6",
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5 sm:w-6 sm:h-6">
        <rect width="128" height="128" rx="20" fill="#3178C6" />
        <path
          fill="#fff"
          d="M68 40h-24v12h11v48h13V52h11V40h-11zM103 54c-3-2-7-3-12-3-8 0-13 4-13 11 0 6 4 9 11 12 6 2 9 4 9 8 0 4-4 6-9 6-6 0-11-3-14-7l-8 9c5 7 13 10 22 10 10 0 17-5 17-13 0-6-4-10-12-13-5-2-9-4-9-7 0-3 3-5 8-5 5 0 9 2 12 5l7-9z"
        />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    role: "Design Token Architecture",
    metric: "Zero CSS Bloat",
    color: "#38BDF8",
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5 sm:w-6 sm:h-6">
        <path
          fill="#38BDF8"
          d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597C27.731 34.133 17.068 25.602 0 25.602c0 17.065 13.863 32.002 32.004 32.002 17.066 0 27.73-8.537 32-25.602 4.27 8.53 14.933 17.065 32.004 17.065 0-17.067-13.863-32.004-32.004-32.004zm0 12.8c10.656 0 17.062 5.328 19.2 16.002-3.733 8-11.2 12.8-19.2 12.8-10.656 0-17.062-5.328-19.2-16.002 3.733-8 11.2-12.8 19.2-12.8zm-32 19.2c-10.656 0-17.062-5.328-19.2-16.002 3.733-8 11.2-12.8 19.2-12.8 10.656 0 17.062 5.328 19.2 16.002-3.733 8-11.2 12.8-19.2 12.8zm64 0c-10.656 0-17.062-5.328-19.2-16.002 3.733-8 11.2-12.8 19.2-12.8 10.656 0 17.062 5.328 19.2 16.002-3.733 8-11.2 12.8-19.2 12.8z"
        />
      </svg>
    ),
  },
  {
    name: "Node.js",
    role: "Backend & Cloud APIs",
    metric: "High Concurrency",
    color: "#5FA04E",
    svg: (
      <svg viewBox="0 0 32 32" className="w-5 h-5 sm:w-6 sm:h-6">
        <path
          fill="#5FA04E"
          d="M16 2.5L3 10v12l13 7.5 13-7.5V10L16 2.5zm0 3.2l10.5 6.1v9.6L16 27.5 5.5 21.4v-9.6L16 5.7z"
        />
      </svg>
    ),
  },
  {
    name: "Vercel",
    role: "Global Edge Infrastructure",
    metric: "99.99% Global Uptime",
    color: "#FFFFFF",
    svg: (
      <svg viewBox="0 0 76 65" className="w-5 h-5 sm:w-6 sm:h-6">
        <path fill="#FFFFFF" d="M37.527 0L75.054 65H0L37.527 0z" />
      </svg>
    ),
  },
  {
    name: "TanStack",
    role: "Router & Query Engine",
    metric: "Instant State Sync",
    color: "#FF4154",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6">
        <path
          fill="#FF4154"
          d="M12 2L2 7l10 5 10-5-10-5zm0 7.8L4.6 7 12 3.8 19.4 7 12 9.8zM2 17l10 5 10-5-2.2-1.1L12 19.8 4.2 15.9 2 17zm0-5l10 5 10-5-2.2-1.1L12 14.8 4.2 10.9 2 12z"
        />
      </svg>
    ),
  },
  {
    name: "GitHub",
    role: "CI/CD & Source Control",
    metric: "100% IP Handover",
    color: "#FFFFFF",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 text-white">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
];

const INNER_ORBIT_TECHS = [
  {
    name: "GSAP Motion",
    role: "60fps Micro-interactions",
    metric: "Timeline Precision",
    color: "#0AE448",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 sm:w-5 sm:h-5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#0AE448" strokeWidth="2" strokeLinecap="round" />
        <path d="M2 17l10 5 10-5" stroke="#0AE448" strokeWidth="2" strokeLinecap="round" />
        <path d="M2 12l10 5 10-5" stroke="#0AE448" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Three.js / 3D",
    role: "WebGL & Interactive Shaders",
    metric: "GPU Accelerated",
    color: "#E44C1F",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 sm:w-5 sm:h-5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="#E44C1F" strokeWidth="2" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="#E44C1F" strokeWidth="2" />
        <line x1="12" y1="22.08" x2="12" y2="12" stroke="#E44C1F" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Technical SEO",
    role: "JSON-LD & Schema Authority",
    metric: "100/100 Lighthouse",
    color: "#10B981",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 sm:w-5 sm:h-5">
        <circle cx="11" cy="11" r="8" stroke="#10B981" strokeWidth="2" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
        <path d="M11 8v6M8 11h6" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Vite Engine",
    role: "Instant HMR & Build Bundler",
    metric: "Sub-Second Builds",
    color: "#FFC000",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 sm:w-5 sm:h-5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="#FFC000" />
      </svg>
    ),
  },
];

function StudioOrbit360() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [outerRadius, setOuterRadius] = useState(195);
  const [innerRadius, setInnerRadius] = useState(115);
  const [activeTech, setActiveTech] = useState<{
    name: string;
    role: string;
    metric: string;
    color: string;
  } | null>(null);

  useEffect(() => {
    const updateRadius = () => {
      if (!wrapRef.current) return;
      const w = wrapRef.current.offsetWidth;
      if (w < 380) {
        setOuterRadius(115);
        setInnerRadius(65);
      } else if (w < 640) {
        setOuterRadius(155);
        setInnerRadius(90);
      } else {
        setOuterRadius(Math.min(220, Math.floor(w * 0.4)));
        setInnerRadius(Math.min(130, Math.floor(w * 0.24)));
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <div className="relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden border border-white/10 bg-[#08080c] p-6 sm:p-12 shadow-2xl flex flex-col items-center justify-center text-center">
      {/* Ambient background lighting */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(228,76,31,0.15)_0%,transparent_70%)] blur-3xl animate-cta-breathe"
        aria-hidden
      />

      {/* Floating Corner Quality Badges */}
      <div className="hidden lg:flex items-center justify-between w-full relative z-10 mb-2 px-2 text-[11px] font-mono text-neutral-400">
        <span className="flex items-center gap-1.5 rounded-full bg-white/[0.03] border border-white/10 px-3 py-1">
          <span className="text-emerald-400">⚡</span> 99+ Core Web Vitals
        </span>
        <span className="flex items-center gap-1.5 rounded-full bg-white/[0.03] border border-white/10 px-3 py-1">
          <span className="text-[#E44C1F]">🛡️</span> 100% Repository Ownership
        </span>
      </div>

      {/* Header Tag & Live Spotlight */}
      <div className="relative z-10 mb-4 max-w-xl">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3.5 py-1 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#E44C1F]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#E44C1F] animate-pulse" />
          <span>STUDIO TECH ECOSYSTEM</span>
        </span>
        <h2 className="font-agency-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-3">
          The Right Tools. <span className="text-[#E44C1F]">Zero Framework Dogma.</span>
        </h2>

        {/* Dynamic Center Spotlight */}
        <div className="min-h-[38px] mt-2 flex items-center justify-center">
          {activeTech ? (
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-mono text-white animate-fade-in">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: activeTech.color }} />
              <strong className="font-bold">{activeTech.name}:</strong>
              <span className="text-neutral-300">{activeTech.role}</span>
              <span className="text-[#E44C1F] text-[10px]">({activeTech.metric})</span>
            </div>
          ) : (
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto">
              Every platform is custom engineered with modern, high-speed tools chosen for conversion and scale.
            </p>
          )}
        </div>
      </div>

      {/* 360 Dual-Orbit Universe */}
      <div
        ref={wrapRef}
        className="relative z-10 w-[300px] h-[300px] sm:w-[460px] sm:h-[460px] md:w-[540px] md:h-[540px] flex items-center justify-center my-2"
      >
        {/* Outer Orbit Dashed Ring */}
        <div className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-white/10 pointer-events-none" />

        {/* Middle Accent Dashed Orbit Ring */}
        <div className="absolute inset-10 sm:inset-16 rounded-full border border-dashed border-[#E44C1F]/20 pointer-events-none" />

        {/* Inner Orbit Dashed Ring */}
        <div className="absolute inset-20 sm:inset-32 rounded-full border-[1.5px] border-dashed border-white/10 pointer-events-none" />

        {/* Center Node: CODEWITHABBY Agency Logo Emblem */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-28 sm:h-28 rounded-full z-20 p-1.5 bg-gradient-to-br from-[#E44C1F] via-[#ff7a45] to-[#111318] shadow-[0_0_50px_rgba(228,76,31,0.45)] flex items-center justify-center group cursor-pointer">
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/30 bg-[#07070a] flex flex-col items-center justify-center relative p-2">
            <img
              src="/favicon.svg"
              alt="CODEWITHABBY Agency Logo"
              className="w-8 h-8 sm:w-11 sm:h-11 object-contain drop-shadow-[0_0_12px_rgba(228,76,31,0.8)] group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-[8px] sm:text-[9px] font-mono font-extrabold tracking-wider text-white uppercase mt-0.5 opacity-90">
              ABBY
            </span>
          </div>
        </div>

        {/* 1. Outer Orbit Track (Clockwise, 45s) */}
        <div className="absolute inset-0 orbit-track">
          {OUTER_ORBIT_TECHS.map((tech, i) => {
            const count = OUTER_ORBIT_TECHS.length;
            const angle = (i / count) * (Math.PI * 2);
            const x = Math.cos(angle) * outerRadius;
            const y = Math.sin(angle) * outerRadius;

            return (
              <div
                key={tech.name}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                {/* Counter-Spin Node to keep logo upright */}
                <div
                  className="orbit-item-counter relative group"
                  onMouseEnter={() => setActiveTech(tech)}
                  onMouseLeave={() => setActiveTech(null)}
                >
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-[#0f1017]/95 border border-white/15 backdrop-blur-xl shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-120 hover:border-[#E44C1F] hover:shadow-[0_0_30px_rgba(228,76,31,0.5)] cursor-pointer">
                    {tech.svg}
                  </div>

                  {/* Tooltip on Hover */}
                  <div className="pointer-events-none absolute -bottom-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1 bg-[#14151d] border border-white/20 text-white text-[10px] font-mono px-3 py-1.5 rounded-lg whitespace-nowrap shadow-2xl z-30 flex flex-col items-center">
                    <span className="font-bold text-white">{tech.name}</span>
                    <span className="text-[9px] text-[#E44C1F]">{tech.role}</span>
                    <span className="text-[8px] text-neutral-400">{tech.metric}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. Inner Orbit Track (Counter-Clockwise, 30s) */}
        <div className="absolute inset-0 orbit-track-inner">
          {INNER_ORBIT_TECHS.map((tech, i) => {
            const count = INNER_ORBIT_TECHS.length;
            const angle = (i / count) * (Math.PI * 2);
            const x = Math.cos(angle) * innerRadius;
            const y = Math.sin(angle) * innerRadius;

            return (
              <div
                key={tech.name}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                {/* Counter-Spin Node for inner ring */}
                <div
                  className="orbit-item-counter-reverse relative group"
                  onMouseEnter={() => setActiveTech(tech)}
                  onMouseLeave={() => setActiveTech(null)}
                >
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#14151f]/95 border border-white/20 backdrop-blur-xl shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-120 hover:border-[#E44C1F] hover:shadow-[0_0_25px_rgba(228,76,31,0.5)] cursor-pointer">
                    {tech.svg}
                  </div>

                  {/* Tooltip on Hover */}
                  <div className="pointer-events-none absolute -bottom-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1 bg-[#14151d] border border-white/20 text-white text-[10px] font-mono px-3 py-1.5 rounded-lg whitespace-nowrap shadow-2xl z-30 flex flex-col items-center">
                    <span className="font-bold text-white">{tech.name}</span>
                    <span className="text-[9px] text-[#E44C1F]">{tech.role}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Caption & Metrics */}
      <div className="relative z-10 mt-4 flex flex-wrap items-center justify-center gap-4 text-[10px] sm:text-xs font-mono text-neutral-400">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 border border-white/10">
          <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-ping" />
          <span>Dual-Ring 360° Orbit • Hover any tech to inspect</span>
        </span>
        <span className="hidden sm:inline-flex items-center gap-1 text-neutral-400">
          <span>🚀 6–7 Day Sprint Velocity</span>
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Interactive Studio Carousel Slider
   ───────────────────────────────────────────────────────────── */
const CAROUSEL_SLIDES = [
  {
    id: "founder-led",
    number: "01",
    tag: "Studio Model",
    title: "Direct Founder Engineering",
    description:
      "You collaborate directly with Syed Abbas Ali. No project managers, no junior developers, and no broken games of telephone.",
    highlight: "Direct Slack / WhatsApp channel with the engineer writing your code.",
    icon: "⚡",
  },
  {
    id: "speed-craft",
    number: "02",
    tag: "Performance",
    title: "Sub-Second Page Loads",
    description:
      "Every platform is written in clean, modern React, Next.js, and Tailwind CSS. Zero CMS bloat, tuned for 99+ Core Web Vitals on mobile.",
    highlight: "Optimized for speed, SEO rankings, and instant user interaction.",
    icon: "🚀",
  },
  {
    id: "code-ownership",
    number: "03",
    tag: "Transparency",
    title: "100% Code Ownership",
    description:
      "You own full rights to your repository, custom design systems, and deployment pipelines. No proprietary lock-in, zero ongoing royalties.",
    highlight: "Full GitHub repository handover upon project completion.",
    icon: "🔒",
  },
  {
    id: "rapid-delivery",
    number: "04",
    tag: "Timeline",
    title: "1 to 2 Weeks Turnaround",
    description:
      "By eliminating agency bureaucracy, we move at startup velocity. Transparent milestones, live staging previews, and rapid turnarounds.",
    highlight: "Agile sprints with daily async updates and prototype reviews.",
    icon: "⏱️",
  },
  {
    id: "bespoke-design",
    number: "05",
    tag: "Aesthetics",
    title: "Editorial & Modern Visual Craft",
    description:
      "We design bespoke interfaces with high-contrast typography, tactile micro-animations, and smooth motion physics that captivate visitors.",
    highlight: "Stand out from competitors with an authentic, luxury digital presence.",
    icon: "✨",
  },
];

function StudioCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = CAROUSEL_SLIDES.length;

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, totalSlides]);

  const goToSlide = (idx: number) => {
    setCurrent(idx);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  };

  const slide = CAROUSEL_SLIDES[current];

  return (
    <div
      className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border border-white/10 bg-gradient-to-br from-[#12131a] via-[#0a0a0f] to-[#050508] p-6 sm:p-10 shadow-2xl backdrop-blur-2xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#E44C1F]/15 blur-3xl" />

      {/* Top Slider Controls Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6 relative z-10">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-[#E44C1F]">
            PRINCIPLE {slide.number}
          </span>
          <span className="text-white/20">•</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-neutral-300">
            {slide.tag}
          </span>
        </div>

        {/* Arrow Navigation */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/20 active:scale-90 transition-all cursor-pointer"
          >
            ←
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-[#E44C1F] active:scale-90 transition-all cursor-pointer"
          >
            →
          </button>
        </div>
      </div>

      {/* Slide Content with Silky Smooth Fade Transition */}
      <div
        key={slide.id}
        className="mt-8 relative z-10 animate-in fade-in slide-in-from-right-4 duration-500 ease-out"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl">{slide.icon}</span>
          <h3 className="font-agency-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {slide.title}
          </h3>
        </div>

        <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-sans max-w-2xl min-h-[52px]">
          {slide.description}
        </p>

        <div className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white/[0.04] border border-white/10 px-4 py-2.5 text-xs text-neutral-200 font-mono">
          <span className="text-[#E44C1F] font-bold">✓</span>
          <span>{slide.highlight}</span>
        </div>
      </div>

      {/* Slide Indicator Navigation */}
      <div className="mt-8 flex items-center gap-2 pt-6 border-t border-white/10 relative z-10">
        {CAROUSEL_SLIDES.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={cn(
              "h-2 rounded-full transition-all duration-300 cursor-pointer",
              current === idx
                ? "w-8 bg-[#E44C1F]"
                : "w-2.5 bg-white/20 hover:bg-white/50"
            )}
          />
        ))}
        <span className="ml-auto text-[11px] font-mono text-neutral-400">
          0{current + 1} / 0{CAROUSEL_SLIDES.length}
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Step-by-Step Onboarding & Delivery Workflow Component (Pure English, 25/75 Milestone)
   ───────────────────────────────────────────────────────────── */
const ONBOARDING_STEPS = [
  {
    step: "01",
    phase: "Discovery & Scope Lock",
    title: "1. Scope & Feature Mapping",
    desc: "We discuss your business goals, target audience, page structure, reference websites, and timeline. Everything is defined clearly before writing any code.",
    highlight: "Clear scope & deliverables checklist",
  },
  {
    step: "02",
    phase: "Service Agreement First",
    title: "2. Mutual Service Agreement",
    desc: "We execute a formal mutual service agreement that formalizes the timeline, milestone schedule, and exact deliverables. Zero code begins without a signed contract.",
    highlight: "Formal contract & milestone lock",
  },
  {
    step: "03",
    phase: "Advance Deposit (25%)",
    title: "3. 25% Advance Milestone & Kickoff",
    desc: "An initial 25% milestone deposit invoice is issued upon contract execution to reserve your sprint kickoff and private communication channel.",
    highlight: "25% advance sprint reservation",
  },
  {
    step: "04",
    phase: "Design & Development",
    title: "4. Bespoke Code & Staging Previews",
    desc: "Syed Abbas Ali builds your platform in clean React, Next.js, and Tailwind CSS. You receive live staging preview links to review real-time progress.",
    highlight: "Live staging links & regular updates",
  },
  {
    step: "05",
    phase: "QA, Handover & Final (75%)",
    title: "5. Testing, Final 75% & Handover",
    desc: "We test on real mobile and desktop devices for 99+ Core Web Vitals speed. Upon final approval and 75% settlement, you receive 100% repository ownership and live deployment.",
    highlight: "100% GitHub code ownership & live launch",
  },
];

function WorkingMethodology() {
  return (
    <div className="mt-16 rounded-[28px] sm:rounded-[36px] border border-white/10 bg-[#0c0c10]/90 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl">
      <div className="max-w-2xl">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E44C1F]">
          OUR WORKING METHODOLOGY
        </span>
        <h2 className="font-agency-headline mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
          How we partner with clients from start to finish.
        </h2>
        <p className="mt-3 text-sm text-neutral-400 leading-relaxed font-sans">
          A transparent, professional process designed for clarity and speed. From contract agreement to final deployment.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {ONBOARDING_STEPS.map((s, idx) => (
          <div
            key={s.step}
            className={cn(
              "group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]",
              idx === ONBOARDING_STEPS.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
            )}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#E44C1F]">
                  STEP {s.step}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-mono uppercase text-neutral-400">
                  {s.phase}
                </span>
              </div>

              <h3 className="font-agency-headline mt-3 text-base sm:text-lg font-bold text-white group-hover:text-[#E44C1F] transition-colors">
                {s.title}
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                {s.desc}
              </p>
            </div>

            <div className="mt-5 border-t border-white/[0.06] pt-3 flex items-center gap-1.5 text-[11px] font-mono text-neutral-300">
              <span className="text-[#E44C1F] font-bold">✓</span>
              <span>{s.highlight}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main About Page Component
   ───────────────────────────────────────────────────────────── */
function AboutPage() {
  const [activeTab, setActiveTab] = useState<"philosophy" | "stack" | "standards">("philosophy");

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#E44C1F] selection:text-white">
      <Navigation />

      <main className="relative overflow-hidden pt-28 sm:pt-36 pb-24 lg:pb-32">
        {/* Ambient atmospheric lighting */}
        <div
          className="pointer-events-none absolute top-20 left-1/4 z-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(228,76,31,0.1)_0%,transparent_70%)] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute top-96 right-10 z-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_70%)] blur-3xl"
          aria-hidden
        />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          {/* Header */}
          <Reveal>
            <div className="border-b border-white/[0.08] pb-12">
              <h1 className="font-editorial-serif italic text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.05]">
                About <span className="text-[#E44C1F]">CodeWithAbby</span>
              </h1>
              <p className="mt-4 max-w-2xl text-base sm:text-lg text-neutral-400 leading-relaxed font-sans">
                An independent web development studio founded by Syed Abbas Ali. We build fast, high-converting digital flagships for ambitious businesses worldwide.
              </p>
            </div>
          </Reveal>

          {/* Interactive 360° Tech Orbit Universe */}
          <Reveal delay={0.05}>
            <div>
              <StudioOrbit360 />
            </div>
          </Reveal>

          {/* Key Studio Metric Cards (iPhone Curves) */}
          <Reveal delay={0.1}>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Performance Score", value: "99+", desc: "Mobile Core Web Vitals benchmark" },
                { label: "Typical Turnaround", value: "1–2 Weeks", desc: "Fast milestone-driven sprints" },
                { label: "Engineering Model", value: "100%", desc: "Direct founder collaboration" },
                { label: "Template Bloat", value: "0%", desc: "Bespoke React & Tailwind code" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="rounded-[24px] sm:rounded-[28px] border border-white/[0.08] bg-[#0c0c10]/90 p-6 backdrop-blur-xl shadow-lg transition-all duration-300 hover:border-white/20 hover:-translate-y-1"
                >
                  <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-bold">
                    {stat.label}
                  </span>
                  <p className="font-agency-headline text-3xl sm:text-4xl font-extrabold text-white mt-2">
                    {stat.value}
                  </p>
                  <p className="text-xs text-neutral-400 mt-1">{stat.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Step-by-Step Onboarding & Delivery Workflow (Agreement -> Invoice -> Development -> Launch) */}
          <Reveal delay={0.15}>
            <WorkingMethodology />
          </Reveal>

          {/* Interactive Studio Carousel */}
          <Reveal delay={0.2}>
            <div>
              <div className="mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E44C1F]">
                  STUDIO PRINCIPLES
                </span>
                <h2 className="font-agency-headline text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  How we engineer digital excellence.
                </h2>
              </div>
              <StudioCarousel />
            </div>
          </Reveal>

          {/* Deep Dive Tabs: Philosophy, Stack, Standards */}
          <Reveal delay={0.25}>
            <div className="rounded-[28px] sm:rounded-[36px] border border-white/[0.08] bg-[#0c0c10]/80 p-6 sm:p-10 backdrop-blur-2xl">
              {/* Tabs Header */}
              <div className="flex flex-wrap items-center gap-2 border-b border-white/[0.08] pb-6">
                {[
                  { id: "philosophy", label: "Our Story & Approach" },
                  { id: "stack", label: "Technology Stack" },
                  { id: "standards", label: "Engineering Standards" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={cn(
                      "rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer",
                      activeTab === tab.id
                        ? "bg-[#E44C1F] text-white shadow-[0_0_20px_rgba(228,76,31,0.35)]"
                        : "border border-white/10 bg-white/[0.03] text-neutral-400 hover:text-white hover:border-white/20"
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Contents */}
              <div className="mt-8">
                {activeTab === "philosophy" && (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <h3 className="font-agency-headline text-2xl sm:text-3xl font-extrabold text-white">
                      Why Direct Founder Engineering Wins
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                      Most web projects stall because of agency bloat—endless layers of account managers, miscommunicated feedback, and template clutter that degrades performance over time.
                    </p>
                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                      CodeWithAbby operates on a direct, human model: <strong className="text-white font-medium">direct founder-led engineering</strong>. You work directly with Syed Abbas Ali, the engineer crafting your codebase. Every platform we deliver is written in clean, modern React, Next.js, and Tailwind CSS—giving your business speed, security, and long-term scalability.
                    </p>
                  </div>
                )}

                {activeTab === "stack" && (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <h3 className="font-agency-headline text-2xl sm:text-3xl font-extrabold text-white">
                      Zero Bloat, Modern Production Stack
                    </h3>
                    <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                      We select tools that provide lightning-fast performance, rock-solid security, and effortless maintenance.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-3 pt-2">
                      {[
                        { name: "React 19 & Next.js", desc: "Component architecture with server-side rendering and edge routing." },
                        { name: "Tailwind CSS", desc: "Zero runtime overhead, pixel-perfect responsive layouts." },
                        { name: "TypeScript", desc: "Type safety, robust maintainability, and zero runtime crashes." },
                        { name: "Vercel Edge Network", desc: "Worldwide sub-second caching and instant global deployment." },
                        { name: "Modern WebGL & Motion", desc: "Silky 60fps animations and tactile micro-interactions." },
                        { name: "Clean Headless CMS", desc: "Easy content management without sacrificing speed or code quality." },
                      ].map((item, idx) => (
                        <div key={idx} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                          <span className="text-[#E44C1F] font-mono text-xs font-bold">0{idx + 1}</span>
                          <h4 className="mt-1 text-sm font-bold text-white">{item.name}</h4>
                          <p className="mt-1 text-xs text-neutral-400">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "standards" && (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <h3 className="font-agency-headline text-2xl sm:text-3xl font-extrabold text-white">
                      Our Non-Negotiable Engineering Standards
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-3 pt-2">
                      {[
                        { title: "Sub-Second Global Delivery", desc: "Edge routing and optimized media assets ensuring instant loads across mobile networks." },
                        { title: "100% Repository Handover", desc: "Full GitHub ownership, comprehensive documentation, and zero vendor lock-in." },
                        { title: "Physical Device Testing", desc: "Verified on real iOS, Android, macOS, and Windows hardware before deployment." },
                      ].map((std, idx) => (
                        <div key={idx} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                          <span className="text-[#E44C1F] font-bold">✦</span>
                          <h4 className="mt-2 text-sm font-bold text-white">{std.title}</h4>
                          <p className="mt-1 text-xs text-neutral-400 leading-relaxed">{std.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Reveal>

          {/* Location & Global Reach */}
          <Reveal delay={0.3}>
            <div className="rounded-[28px] sm:rounded-[36px] border border-white/[0.08] bg-[#0c0c10]/90 backdrop-blur-2xl p-8 sm:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <span className="text-xs font-mono text-[#E44C1F] font-semibold uppercase tracking-wider">
                  Studio Location & Reach
                </span>
                <h3 className="mt-2 font-agency-headline text-2xl font-bold text-white">
                  Delhi, India • Serving Global Founders
                </h3>
                <p className="mt-2 text-xs text-neutral-400 max-w-lg leading-relaxed font-sans">
                  Whether you are based in Delhi, Mumbai, London, Dubai, or the US, we manage asynchronous collaboration, transparent staging links, and rapid milestone updates smoothly across time zones.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#E44C1F] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#ff5d2e] shadow-[0_0_25px_rgba(228,76,31,0.35)] active:scale-95 transition-all shrink-0"
              >
                <span>Work With Us</span>
                <span>→</span>
              </Link>
            </div>
          </Reveal>

          {/* Final CTA Card with White "Contact Us" Button */}
          <Reveal delay={0.35}>
            <div className="rounded-[28px] sm:rounded-[36px] border border-white/10 bg-gradient-to-br from-[#151620] via-[#0b0c10] to-[#000000] p-8 sm:p-14 relative overflow-hidden shadow-2xl md:flex md:items-center md:justify-between gap-8">
              <div
                className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-[#E44C1F]/20 blur-3xl"
                aria-hidden
              />
              <div className="max-w-xl relative z-10">
                <span className="text-xs font-mono font-bold tracking-widest text-[#E44C1F] uppercase">
                  START YOUR PROJECT
                </span>
                <h3 className="mt-2 font-agency-headline text-2xl sm:text-4xl font-extrabold text-white">
                  Ready to build something exceptional?
                </h3>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed font-sans">
                  Partner directly with Syed Abbas Ali. High-speed engineering, custom design, and modern code delivered with milestone transparency.
                </p>
              </div>

              <div className="mt-8 md:mt-0 flex flex-wrap items-center gap-4 relative z-10 shrink-0">
                {/* White Contact Us Button */}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-xs font-extrabold uppercase tracking-wider text-neutral-950 hover:bg-neutral-200 shadow-[0_0_30px_rgba(255,255,255,0.25)] active:scale-95 transition-all"
                >
                  <span>Contact Us</span>
                  <span>→</span>
                </Link>

                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-all active:scale-95"
                >
                  <span>💬 WhatsApp</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </main>

      <Footer />
    </div>
  );
}
