import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

const OUTER_ORBIT_TECHS = [
  {
    name: "React 19",
    role: "Component Architecture",
    metric: "60fps Fluid UI",
    color: "#61DAFB",
    svg: (
      <svg viewBox="0 0 128 128" className="w-7 h-7">
        <g fill="#087EA4">
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
    color: "#111318",
    svg: (
      <svg viewBox="0 0 180 180" className="w-7 h-7">
        <circle cx="90" cy="90" r="90" fill="#111318" />
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
      <svg viewBox="0 0 128 128" className="w-7 h-7">
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
    role: "Utility Design Engine",
    metric: "Zero CSS Bloat",
    color: "#06B6D4",
    svg: (
      <svg viewBox="0 0 128 128" className="w-7 h-7">
        <path
          fill="#06B6D4"
          d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597C27.731 34.133 17.068 25.602 0 25.602c0 17.065 13.863 32.002 32.004 32.002 17.066 0 27.73-8.537 32-25.602 4.27 8.53 14.933 17.065 32.004 17.065 0-17.067-13.863-32.004-32.004-32.004zm0 12.8c10.656 0 17.062 5.328 19.2 16.002-3.733 8-11.2 12.8-19.2 12.8-10.656 0-17.062-5.328-19.2-16.002 3.733-8 11.2-12.8 19.2-12.8zm-32 19.2c-10.656 0-17.062-5.328-19.2-16.002 3.733-8 11.2-12.8 19.2-12.8 10.656 0 17.062 5.328 19.2 16.002-3.733 8-11.2 12.8-19.2 12.8zm64 0c-10.656 0-17.062-5.328-19.2-16.002 3.733-8 11.2-12.8 19.2-12.8 10.656 0 17.062 5.328 19.2 16.002-3.733 8-11.2 12.8-19.2 12.8z"
        />
      </svg>
    ),
  },
  {
    name: "Node.js",
    role: "High-Performance APIs",
    metric: "High Concurrency",
    color: "#5FA04E",
    svg: (
      <svg viewBox="0 0 32 32" className="w-7 h-7">
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
    color: "#111318",
    svg: (
      <svg viewBox="0 0 76 65" className="w-7 h-7">
        <path fill="#111318" d="M37.527 0L75.054 65H0L37.527 0z" />
      </svg>
    ),
  },
  {
    name: "TanStack",
    role: "Router & Query Engine",
    metric: "Instant State Sync",
    color: "#FF4154",
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7">
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
    color: "#24292E",
    svg: (
      <svg viewBox="0 0 24 24" fill="#24292E" className="w-7 h-7">
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
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 sm:w-6 sm:h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#0AE448" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M2 17l10 5 10-5" stroke="#0AE448" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M2 12l10 5 10-5" stroke="#0AE448" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Three.js / 3D",
    role: "WebGL & Interactive Shaders",
    metric: "GPU Accelerated",
    color: "#E44C1F",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 sm:w-6 sm:h-6">
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
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 sm:w-6 sm:h-6">
        <circle cx="11" cy="11" r="8" stroke="#10B981" strokeWidth="2.5" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M11 8v6M8 11h6" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Vite Engine",
    role: "Instant HMR & Fast Bundler",
    metric: "Sub-Second Builds",
    color: "#F59E0B",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 sm:w-6 sm:h-6">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="#F59E0B" />
      </svg>
    ),
  },
];

export function StudioOrbit360() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [outerRadius, setOuterRadius] = useState(200);
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
    <div
      className="relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden border border-[#E6E3DC] shadow-xl flex flex-col items-center justify-center text-center p-6 sm:p-12 md:p-16 my-8"
      style={{
        backgroundImage: "url('/images/paper-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#FAFAF8",
      }}
    >
      {/* Subtle organic warm paper overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[#FAF8F5]/85 backdrop-blur-[0.5px]" />

      {/* Floating Corner Quality Badges */}
      <div className="hidden lg:flex items-center justify-between w-full relative z-10 mb-2 px-2 text-[11px] font-mono text-[#5A5E66]">
        <span className="flex items-center gap-1.5 rounded-full bg-white/80 border border-[#E6E3DC] px-3.5 py-1 shadow-sm">
          <span className="text-emerald-600">⚡</span> 99+ Core Web Vitals
        </span>
        <span className="flex items-center gap-1.5 rounded-full bg-white/80 border border-[#E6E3DC] px-3.5 py-1 shadow-sm">
          <span className="text-[#E44C1F]">🛡️</span> 100% Codebase Ownership
        </span>
      </div>

      {/* Header Tag & Dynamic Headline */}
      <div className="relative z-10 mb-6 max-w-xl">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-white/90 border border-[#E6E3DC] px-4 py-1 text-[11px] font-mono font-bold uppercase tracking-widest text-[#E44C1F] shadow-sm">
          <span className="h-2 w-2 rounded-full bg-[#E44C1F] animate-pulse" />
          <span>My Stack</span>
        </div>
        
        <h2 className="font-editorial-serif italic text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111318] mt-3">
          Built with <span className="text-[#E44C1F] not-italic font-bold">the right tools.</span>
        </h2>
        
        <p className="mt-2 text-xs sm:text-sm text-[#5A5E66] max-w-md mx-auto font-sans leading-relaxed">
          Every project picks the stack that fits the job — no framework loyalty, just what works.
        </p>

        {/* Dynamic Center Spotlight */}
        <div className="min-h-[36px] mt-3 flex items-center justify-center">
          {activeTech ? (
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E6E3DC] bg-white px-4 py-1.5 text-xs font-mono text-[#111318] shadow-md animate-fade-in">
              <span className="h-2.5 w-2.5 rounded-full shadow-sm" style={{ backgroundColor: activeTech.color }} />
              <strong className="font-bold">{activeTech.name}:</strong>
              <span className="text-[#5A5E66]">{activeTech.role}</span>
              <span className="text-[#E44C1F] font-semibold text-[10px]">({activeTech.metric})</span>
            </div>
          ) : (
            <span className="text-[11px] font-mono text-[#8B8F96] tracking-wider uppercase">
              Hover on any node to view capabilities
            </span>
          )}
        </div>
      </div>

      {/* 360 Dual-Orbit Universe */}
      <div
        ref={wrapRef}
        className="relative z-10 w-[300px] h-[300px] sm:w-[460px] sm:h-[460px] md:w-[540px] md:h-[540px] flex items-center justify-center my-2"
      >
        {/* Outer Orbit Dashed Ring */}
        <div className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-neutral-400/30 pointer-events-none" />

        {/* Middle Accent Dashed Orbit Ring */}
        <div className="absolute inset-10 sm:inset-16 rounded-full border border-dashed border-[#E44C1F]/30 pointer-events-none" />

        {/* Inner Orbit Dashed Ring */}
        <div className="absolute inset-20 sm:inset-32 rounded-full border-[1.5px] border-dashed border-neutral-400/30 pointer-events-none" />

        {/* Center Node: CODEWITHABBY Agency Logo Emblem with Luxury Obsidian Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-28 sm:h-28 rounded-full z-20 p-1.5 bg-gradient-to-br from-[#111318] via-[#1E2328] to-[#0A0B0E] shadow-[0_8px_40px_rgba(0,0,0,0.25)] flex items-center justify-center group cursor-pointer border border-neutral-800">
          <div className="w-full h-full rounded-full overflow-hidden border border-white/20 bg-[#090A0E] flex flex-col items-center justify-center relative p-2">
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

        {/* 1. Outer Orbit Track (Clockwise, 48s) */}
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
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-[18px] bg-white border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.08)] flex items-center justify-center transition-all duration-300 hover:scale-125 hover:border-[#E44C1F] hover:shadow-[0_8px_32px_rgba(228,76,31,0.25)] cursor-pointer">
                    {tech.svg}
                  </div>

                  {/* Tooltip on Hover */}
                  <div className="pointer-events-none absolute -bottom-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1 bg-white border border-[#E6E3DC] text-[#111318] text-[10px] font-mono px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl z-30 flex flex-col items-center">
                    <span className="font-bold text-[#111318]">{tech.name}</span>
                    <span className="text-[9px] text-[#E44C1F]">{tech.role}</span>
                    <span className="text-[8px] text-[#5A5E66]">{tech.metric}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. Inner Orbit Track (Counter-Clockwise, 32s) */}
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
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[14px] bg-white border border-black/[0.08] shadow-[0_4px_18px_rgba(0,0,0,0.06)] flex items-center justify-center transition-all duration-300 hover:scale-125 hover:border-[#E44C1F] hover:shadow-[0_6px_24px_rgba(228,76,31,0.25)] cursor-pointer">
                    {tech.svg}
                  </div>

                  {/* Tooltip on Hover */}
                  <div className="pointer-events-none absolute -bottom-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1 bg-white border border-[#E6E3DC] text-[#111318] text-[10px] font-mono px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl z-30 flex flex-col items-center">
                    <span className="font-bold text-[#111318]">{tech.name}</span>
                    <span className="text-[9px] text-[#E44C1F]">{tech.role}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
