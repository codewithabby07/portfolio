import { useState, useEffect } from "react";
import { cn } from "@/lib/cn";

const COMMAND_LOGS = {
  audit: [
    "$ lighthouse https://alp-buildcon-1.vercel.app",
    "Running Lighthouse audit...",
    "✔ Performance: 99 / 100",
    "✔ Accessibility: 97 / 100",
    "✔ Best Practices: 100 / 100",
    "✔ SEO: 100 / 100",
  ],
  stack: [
    "$ cat package.json | grep dependencies",
    "Parsing dependencies...",
    "▸ react ^19.0.0",
    "▸ next ^15.0.0 · typescript ^5.0.0",
    "▸ tailwindcss ^4.0.0 · node.js 22",
    "▸ mongodb · vercel · REST APIs",
  ],
  delivery: [
    "$ cat timeline.txt",
    "Day 1–2  →  Discovery & planning",
    "Day 3–4  →  Design & frontend",
    "Day 5–6  →  Backend & testing",
    "Day 6–7  →  Deploy & handover",
    "✔ 30-day support included after launch",
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
      {/* Terminal header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
          <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
          <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="text-[11px] font-medium tracking-wider text-white/50">
          codewithabby — zsh
        </div>
      </div>

      {/* Tab buttons */}
      <div className="flex flex-wrap items-center gap-2 mb-6 border-b border-white/10 pb-4">
        <span className="text-white/40 text-[10px] tracking-wider uppercase mr-2">
          Run:
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
          $ lighthouse
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
          $ stack
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
          $ timeline
        </button>
      </div>

      {/* Output */}
      <div className="space-y-2.5 min-h-[140px]">
        {displayedLogs.map((log, index) => {
          if (!log || typeof log !== "string") return null;
          const isCommand = log.startsWith("$");
          const isSuccess = log.includes("✔");
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
          <span>codewithabby:~$</span>
          <span className="h-4 w-2 bg-accent inline-block" />
        </div>
      </div>
    </div>
  );
}
