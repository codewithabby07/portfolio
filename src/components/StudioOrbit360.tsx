import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

const TECHS = [
  {
    label: "React 19",
    svg: (
      <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-9 sm:h-9">
        <g fill="#087EA4">
          <circle cx="64" cy="64" r="11.4" />
          <path d="M107.3 45.2c-2.3-.8-4.7-1.6-7-2.3.6-2.4 1.1-4.8 1.5-7.1-2.1.3-4.1.5-6.2.6-.4-2-.8-2.9-1.1-4.2-2.2.9-4.4 1.8-6.5 2.5-4.2-2.8-8.3-5.8-12-9.2-1.6 5.6-2.8 11.2-3.6 17-.3 1.3-.5 2.5-.6 3.8-4.5-.2-9-.1-13.5.2-.1-1.3-.3-2.6-.4-3.9-.8-5.8-2-11.4-3.6-17-3.8 3.5-7.8 6.4-12.1 9.2-2.1-.7-4.2-1.5-6.3-2.3-.4 1.4-.7 2.8-1.1 4.2-2.2-.1-4.3-.3-6.4-.6.4 2.3.9 4.7 1.5 7-2.4.7-4.8 1.4-7.1 2.3-4.5 9.7-5 18.8-1.4 27.5 2 5 4.9 9.8 8.7 14.3.7-.9 1.5-1.8 2.2-2.7 3.4-4.7 6.2-9.7 8.5-15-.7-1.4-1.3-2.9-1.9-4.3-2.4.1-4.9.2-7.3.4 1.8 7.7 4.5 14.8 8 21.3-4.5 1.8-8.7 3.2-12.6 4.3 1.7 3.6 3.5 7 5.5 10.3 5.8-.6 11.5-1.7 17.1-3.3-.2-1.3-.4-2.7-.6-4-3.8-1-7.4-2.3-10.8-3.8 3.6 2.6 7.4 5 11.4 7.2 2.2 1.2 4.4 2.3 6.7 3.3 2.2-1 4.4-2.1 6.5-3.3 4 2.2 7.8 4.6 11.4 7.2-3.4-1.5-7-2.8-10.8-3.8-.2 1.3-.4 2.6-.6 4 5.6 1.6 11.3 2.7 17.1 3.3 2-3.3 3.8-6.7 5.5-10.3-3.9-1.1-8.1-2.5-12.6-4.3 3.5-6.5 6.2-13.6 8-21.3-2.4-.2-4.9-.3-7.3-.4-.6 1.4-1.2 2.9-1.9 4.3 2.4 5.3 5.2 10.3 8.5 15 .7.9 1.5 1.8 2.2 2.7 3.8-4.5 6.7-9.3 8.7-14.3 3.6-8.7 3.1-17.8-1.4-27.5z" />
        </g>
      </svg>
    ),
  },
  {
    label: "Next.js",
    svg: (
      <svg viewBox="0 0 180 180" className="w-8 h-8 sm:w-9 sm:h-9">
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
    label: "TypeScript",
    svg: (
      <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-9 sm:h-9">
        <rect width="128" height="128" rx="20" fill="#3178C6" />
        <path
          fill="#fff"
          d="M68 40h-24v12h11v48h13V52h11V40h-11zM103 54c-3-2-7-3-12-3-8 0-13 4-13 11 0 6 4 9 11 12 6 2 9 4 9 8 0 4-4 6-9 6-6 0-11-3-14-7l-8 9c5 7 13 10 22 10 10 0 17-5 17-13 0-6-4-10-12-13-5-2-9-4-9-7 0-3 3-5 8-5 5 0 9 2 12 5l7-9z"
        />
      </svg>
    ),
  },
  {
    label: "Tailwind CSS",
    svg: (
      <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-9 sm:h-9">
        <path
          fill="#38BDF8"
          d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597C27.731 34.133 17.068 25.602 0 25.602c0 17.065 13.863 32.002 32.004 32.002 17.066 0 27.73-8.537 32-25.602 4.27 8.53 14.933 17.065 32.004 17.065 0-17.067-13.863-32.004-32.004-32.004zm0 12.8c10.656 0 17.062 5.328 19.2 16.002-3.733 8-11.2 12.8-19.2 12.8-10.656 0-17.062-5.328-19.2-16.002 3.733-8 11.2-12.8 19.2-12.8zm-32 19.2c-10.656 0-17.062-5.328-19.2-16.002 3.733-8 11.2-12.8 19.2-12.8 10.656 0 17.062 5.328 19.2 16.002-3.733 8-11.2 12.8-19.2 12.8zm64 0c-10.656 0-17.062-5.328-19.2-16.002 3.733-8 11.2-12.8 19.2-12.8 10.656 0 17.062 5.328 19.2 16.002-3.733 8-11.2 12.8-19.2 12.8z"
        />
      </svg>
    ),
  },
  {
    label: "Node.js",
    svg: (
      <svg viewBox="0 0 32 32" className="w-8 h-8 sm:w-9 sm:h-9">
        <path
          fill="#5FA04E"
          d="M16 2.5L3 10v12l13 7.5 13-7.5V10L16 2.5zm0 3.2l10.5 6.1v9.6L16 27.5 5.5 21.4v-9.6L16 5.7z"
        />
      </svg>
    ),
  },
  {
    label: "Vercel",
    svg: (
      <svg viewBox="0 0 76 65" className="w-8 h-8 sm:w-9 sm:h-9">
        <path fill="#111318" d="M37.527 0L75.054 65H0L37.527 0z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    svg: (
      <svg viewBox="0 0 24 24" fill="#24292E" className="w-8 h-8 sm:w-9 sm:h-9">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "TanStack",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9">
        <path
          fill="#FF4154"
          d="M12 2L2 7l10 5 10-5-10-5zm0 7.8L4.6 7 12 3.8 19.4 7 12 9.8zM2 17l10 5 10-5-2.2-1.1L12 19.8 4.2 15.9 2 17zm0-5l10 5 10-5-2.2-1.1L12 14.8 4.2 10.9 2 12z"
        />
      </svg>
    ),
  },
];

export function StudioOrbit360() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState<number>(200);

  useEffect(() => {
    function updateRadius() {
      if (!wrapRef.current) return;
      const w = wrapRef.current.offsetWidth;
      setRadius(w * 0.38);
    }

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <section
      id="stack"
      className="relative w-full overflow-hidden text-center py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-y border-[#E6E3DC] rounded-3xl sm:rounded-[36px] my-6"
      style={{
        backgroundImage: "url('/images/paper-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#FAFAF8",
      }}
    >
      {/* ── Section Header (Exact typography from NEV Showcase) ── */}
      <div className="max-w-[640px] mx-auto mb-10 sm:mb-14">
        <div className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#E44C1F] mb-2.5 font-mono">
          My Stack
        </div>
        <h2 className="font-agency-headline text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#111318] leading-[1.04]">
          Built with{" "}
          <em
            className="font-editorial-serif italic text-[#E44C1F] font-medium"
            style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
          >
            the right tools.
          </em>
        </h2>
        <p className="mt-3.5 text-base sm:text-[17px] leading-relaxed text-[#3A3E44] max-w-[48ch] mx-auto">
          Every project picks the stack that fits the job — no framework loyalty, just what works.
        </p>
      </div>

      {/* ── Orbit Wrap (min(560px, 85vw)) ── */}
      <div
        ref={wrapRef}
        className="relative w-[min(560px,85vw)] h-[min(560px,85vw)] mx-auto my-4 flex items-center justify-center select-none"
      >
        {/* Ring 1 (Inset 60px) */}
        <div className="absolute inset-[45px] sm:inset-[60px] rounded-full border-[1.5px] border-dashed border-black/[0.08] pointer-events-none" />

        {/* Ring 2 (Inset 20px) */}
        <div className="absolute inset-[15px] sm:inset-[20px] rounded-full border-[1.5px] border-dashed border-black/[0.04] pointer-events-none" />

        {/* Center Node (100px rounded circle with Agency Logo) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85px] h-[85px] sm:w-[100px] sm:h-[100px] rounded-full z-10 bg-gradient-to-br from-[#111318] to-[#1E2328] flex items-center justify-center shadow-[0_8px_40px_rgba(0,0,0,0.2)] border border-white/10 group cursor-pointer">
          <div className="w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] rounded-full overflow-hidden flex items-center justify-center p-2">
            <img
              src="/favicon.svg"
              alt="CodeWithAbby"
              className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(228,76,31,0.8)] group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Orbit Track with 52s Spin */}
        <div className="absolute inset-0 orbit-track">
          {TECHS.map((tech, i) => {
            const count = TECHS.length;
            const angle = (i / count) * (Math.PI * 2);
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={tech.label}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                {/* Counter Spin to keep item upright */}
                <div className="orbit-item-counter relative group">
                  <div className="w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] -ml-[32px] -mt-[32px] sm:-ml-[36px] sm:-mt-[36px] rounded-[18px] bg-white border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.08)] flex items-center justify-center transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.18)] hover:scale-110 cursor-pointer">
                    {tech.svg}
                  </div>

                  {/* Tooltip on Hover */}
                  <div className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 text-[11px] font-medium text-[#111318] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white px-2.5 py-0.5 rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.08)] border border-black/[0.05] z-30">
                    {tech.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
