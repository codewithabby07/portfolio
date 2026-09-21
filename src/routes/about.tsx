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
      { title: "About | CodeWithAbby Web Studio" },
      {
        name: "description",
        content:
          "CodeWithAbby is an independent digital studio founded by Syed Abbas Ali in Delhi, building high-speed, custom web platforms for modern businesses.",
      },
      { property: "og:title", content: "About | CodeWithAbby Web Studio" },
      {
        property: "og:description",
        content:
          "CodeWithAbby is an independent digital studio founded by Syed Abbas Ali in Delhi, building high-speed, custom web platforms for modern businesses.",
      },
      { property: "og:url", content: `${site.url}/about` },
    ],
  }),
});

/* ─────────────────────────────────────────────────────────────
   Interactive 3D Geometric Orbit Canvas
   ───────────────────────────────────────────────────────────── */
function Studio3DCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio || 600);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio || 400);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio || 600;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio || 400;
    };

    window.addEventListener("resize", handleResize);

    // Mouse tracking for interactive tilt
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let rotX = 0;
    let rotY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      targetRotY = (x / rect.width) * 0.8;
      targetRotX = -(y / rect.height) * 0.8;
    };

    window.addEventListener("mousemove", onMouseMove);

    // 3D Nodes definition (representing Code, Design, Speed, Performance, Scale)
    const nodes = [
      { x: 0, y: 0, z: 0, label: "CodeWithAbby", accent: true, radius: 8 },
      { x: -140, y: -80, z: 50, label: "Design", accent: false, radius: 5 },
      { x: 140, y: -70, z: -50, label: "Engineering", accent: true, radius: 6 },
      { x: 130, y: 90, z: 80, label: "Performance", accent: false, radius: 5 },
      { x: -130, y: 80, z: -70, label: "Speed", accent: true, radius: 6 },
      { x: 0, y: -130, z: 60, label: "Scale", accent: false, radius: 5 },
      { x: 0, y: 130, z: -60, label: "Launch", accent: true, radius: 5 },
      { x: -80, y: -30, z: -100, label: "React", accent: false, radius: 4 },
      { x: 80, y: 30, z: 100, label: "Next.js", accent: false, radius: 4 },
    ];

    // Orbiting particle rings
    const rings = [
      { r: 160, tilt: 0.4, speed: 0.008, angle: 0, color: "rgba(228,76,31,0.25)" },
      { r: 210, tilt: -0.6, speed: -0.006, angle: Math.PI / 4, color: "rgba(255,255,255,0.12)" },
      { r: 260, tilt: 0.8, speed: 0.004, angle: Math.PI / 2, color: "rgba(228,76,31,0.15)" },
    ];

    let t = 0;

    const render = () => {
      t += 0.015;
      rotX += (targetRotX - rotX) * 0.05;
      rotY += (targetRotY - rotY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const scale = Math.min(width, height) / 460;

      const currentRotY = rotY + t * 0.2;
      const currentRotX = rotX + Math.sin(t * 0.3) * 0.15;

      // Project 3D Point to 2D Screen
      const project = (x: number, y: number, z: number) => {
        const cosY = Math.cos(currentRotY);
        const sinY = Math.sin(currentRotY);
        const x1 = x * cosY + z * sinY;
        const z1 = -x * sinY + z * cosY;

        const cosX = Math.cos(currentRotX);
        const sinX = Math.sin(currentRotX);
        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;

        const fov = 400;
        const p = fov / (fov + z2);

        return {
          px: cx + x1 * p * scale,
          py: cy + y2 * p * scale,
          p,
          z: z2,
        };
      };

      // Draw Orbiting Rings
      rings.forEach((ring) => {
        ring.angle += ring.speed;
        ctx.beginPath();
        ctx.strokeStyle = ring.color;
        ctx.lineWidth = 1.2 * window.devicePixelRatio;

        const steps = 60;
        for (let i = 0; i <= steps; i++) {
          const a = (i / steps) * Math.PI * 2;
          const rx = Math.cos(a) * ring.r;
          const ry = Math.sin(a) * ring.r * Math.cos(ring.tilt);
          const rz = Math.sin(a) * ring.r * Math.sin(ring.tilt);

          const pt = project(rx, ry, rz);
          if (i === 0) ctx.moveTo(pt.px, pt.py);
          else ctx.lineTo(pt.px, pt.py);
        }
        ctx.stroke();
      });

      // Draw Connecting Lines between close nodes
      const projectedNodes = nodes.map((n) => ({
        ...n,
        ...project(n.x, n.y, n.z),
      }));

      projectedNodes.sort((a, b) => a.z - b.z);

      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const a = projectedNodes[i];
          const b = projectedNodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
          if (dist < 200) {
            const alpha = (1 - dist / 200) * 0.35 * Math.min(a.p, b.p);
            ctx.beginPath();
            ctx.strokeStyle =
              a.accent || b.accent
                ? `rgba(228,76,31,${alpha})`
                : `rgba(255,255,255,${alpha * 0.7})`;
            ctx.lineWidth = 1 * window.devicePixelRatio;
            ctx.moveTo(a.px, a.py);
            ctx.lineTo(b.px, b.py);
            ctx.stroke();
          }
        }
      }

      // Draw Nodes & Labels
      projectedNodes.forEach((node) => {
        const radius = node.radius * node.p * window.devicePixelRatio;

        if (node.accent) {
          const grad = ctx.createRadialGradient(
            node.px,
            node.py,
            0,
            node.px,
            node.py,
            radius * 3.5
          );
          grad.addColorStop(0, "rgba(228,76,31,0.7)");
          grad.addColorStop(1, "rgba(228,76,31,0)");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(node.px, node.py, radius * 3.5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.beginPath();
        ctx.fillStyle = node.accent ? "#E44C1F" : "#FFFFFF";
        ctx.arc(node.px, node.py, radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.font = `${Math.max(9, Math.floor(11 * node.p * window.devicePixelRatio))}px monospace`;
        ctx.fillStyle = node.accent ? "#ff7a45" : "rgba(255,255,255,0.75)";
        ctx.textAlign = "center";
        ctx.fillText(node.label, node.px, node.py + radius + 14 * window.devicePixelRatio);
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-[360px] sm:h-[440px] rounded-[28px] sm:rounded-[36px] overflow-hidden border border-white/10 bg-[#0a0a0f] shadow-2xl flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="pointer-events-none absolute bottom-4 left-6 text-[10px] font-mono uppercase text-white/40 tracking-wider">
        Interactive 3D Node Map • Move Cursor
      </div>
      <div className="pointer-events-none absolute top-4 right-6 inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[10px] font-mono text-[#E44C1F]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#E44C1F] animate-pulse" />
        <span>Direct Engineering</span>
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

          {/* Interactive 3D Orbit Canvas Section */}
          <Reveal delay={0.05}>
            <div>
              <Studio3DCanvas />
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
