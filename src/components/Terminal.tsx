import { useState, useEffect } from "react";
import { cn } from "@/lib/cn";

const COMMAND_LOGS = {
  audit: [
    "$ codewithabby --audit-performance",
    "[INFO] Connecting to Google Lighthouse Vitals Agent...",
    "✔ First Contentful Paint (FCP): 0.4s",
    "✔ Largest Contentful Paint (LCP): 0.7s",
    "✔ Cumulative Layout Shift (CLS): 0.00",
    "✔ Final Performance Score: 99 / 100 ⚡",
  ],
  stack: [
    "$ codewithabby --list-capabilities",
    "[INFO] Inspecting enterprise tech stack...",
    "▸ Frontend: React 19, Next.js 15, TypeScript, Tailwind CSS v4",
    "▸ Backend: Node.js, REST APIs, PostgreSQL, MongoDB",
    "▸ Infrastructure: Vercel, Serverless Edge, Nitro Engine",
    "✔ Architecture Status: 100% Production-Ready 🚀",
  ],
  delivery: [
    "$ codewithabby --check-timeline",
    "[INFO] Querying standard delivery protocol...",
    "▸ Discovery & Architecture: Day 1 - Day 2",
    "▸ High-Fidelity UI & Frontend: Day 3 - Day 4",
    "▸ Backend & Testing: Day 5 - Day 6",
    "✔ Production Handover & Deployment: Day 6 - 7 ⏱️",
  ],
};

export function Terminal() {
  const [activeTab, setActiveTab] = useState<"audit" | "stack" | "delivery">("audit");
  const [displayedLogs, setDisplayedLogs] = useState<string[]>([]);

  useEffect(() => {
    const lines = COMMAND_LOGS[activeTab] || [];
    setDisplayedLogs([]);
    let i = 0;
    const interval = setInterval(() => {
      if (lines[i] !== undefined && i < lines.length) {
        setDisplayedLogs((prev) => [...prev, lines[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 180);

    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <div className="mt-12 rounded-2xl bg-[#09090c] border border-white/15 p-4 sm:p-6 shadow-2xl overflow-hidden font-mono text-xs text-white/90">
      {/* macOS Terminal Window Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
          <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
          <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="text-[11px] font-medium tracking-wider text-white/50 uppercase">
          codewithabby@atelier — zsh
        </div>
        <div className="text-[10px] text-accent font-bold">LIVE SHELL</div>
      </div>

      {/* Preset Command Buttons */}
      <div className="flex flex-wrap items-center gap-2 mb-6 border-b border-white/10 pb-4">
        <span className="text-white/40 text-[10px] tracking-wider uppercase mr-2">
          Run Commands:
        </span>
        <button
          type="button"
          onClick={() => setActiveTab("audit")}
          className={cn(
            "rounded-md px-3 py-1.5 text-[11px] font-bold transition-all",
            activeTab === "audit"
              ? "bg-accent text-white shadow-md"
              : "bg-white/5 text-white/70 hover:bg-white/10",
          )}
        >
          $ --audit
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("stack")}
          className={cn(
            "rounded-md px-3 py-1.5 text-[11px] font-bold transition-all",
            activeTab === "stack"
              ? "bg-accent text-white shadow-md"
              : "bg-white/5 text-white/70 hover:bg-white/10",
          )}
        >
          $ --stack
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("delivery")}
          className={cn(
            "rounded-md px-3 py-1.5 text-[11px] font-bold transition-all",
            activeTab === "delivery"
              ? "bg-accent text-white shadow-md"
              : "bg-white/5 text-white/70 hover:bg-white/10",
          )}
        >
          $ --timeline
        </button>
      </div>

      {/* Terminal Content Screen */}
      <div className="space-y-2.5 min-h-[140px]">
        {displayedLogs.map((log, index) => {
          if (!log || typeof log !== "string") return null;
          const isCommand = log.startsWith("$");
          const isSuccess = log.includes("✔") || log.includes("99 / 100");
          return (
            <div
              key={index}
              className={cn(
                "leading-relaxed",
                isCommand
                  ? "font-bold text-accent"
                  : isSuccess
                    ? "text-emerald-400 font-semibold"
                    : "text-white/80",
              )}
            >
              {log}
            </div>
          );
        })}
        <div className="flex items-center gap-1 text-accent animate-pulse font-bold">
          <span>codewithabby@architect:~$</span>
          <span className="h-4 w-2 bg-accent inline-block" />
        </div>
      </div>
    </div>
  );
}
