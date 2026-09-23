import { useEffect, useRef, useState } from "react";

const TEXT = "CodeWithAbby";
// ms per character reveal
const CHAR_DELAY = 85;
// total typing duration
const TYPE_DURATION = TEXT.length * CHAR_DELAY; // ~1020ms

/**
 * Phases:
 * "closed"  — shutter slides DOWN from top, covering screen    (0.65s)
 * "typing"  — text types out L→R while shutter is closed
 * "open"    — shutter slides back UP, revealing the website    (0.75s)
 * "done"    — component unmounts
 */
type Phase = "closed" | "typing" | "open" | "done";

export function IntroCurtain() {
  const [phase, setPhase] = useState<Phase>(() => {
    if (typeof window !== "undefined") {
      try {
        if (sessionStorage.getItem("cwa_intro_seen") === "1") {
          return "done";
        }
      } catch {
        // Fallback safely
      }
    }
    return "closed";
  });
  const [revealed, setRevealed] = useState(0); // chars typed so far
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("cwa_intro_seen") === "1") {
        setPhase("done");
        return;
      }
    } catch {
      // Fallback safely
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
      return;
    }

    const push = (fn: () => void, ms: number) => {
      const id = setTimeout(fn, ms);
      timers.current.push(id);
      return id;
    };

    // After shutter closes (650ms slide), start typing
    push(() => {
      setPhase("typing");
      for (let i = 1; i <= TEXT.length; i++) {
        push(() => setRevealed(i), i * CHAR_DELAY);
      }
    }, 700);

    // After typing finishes, open the shutter and mark session as seen
    push(() => {
      setPhase("open");
      try {
        sessionStorage.setItem("cwa_intro_seen", "1");
      } catch {
        // Fallback safely
      }
    }, 700 + TYPE_DURATION + 400);

    // Unmount after shutter slides away
    push(() => setPhase("done"), 700 + TYPE_DURATION + 400 + 850);

    return () => timers.current.forEach(clearTimeout);
  }, []);

  if (phase === "done") return null;

  const isOpen = phase === "open";

  return (
    <>
      {/* Dark backdrop so website doesn't flash through */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9997,
          background: "#09090c",
          pointerEvents: "none",
          opacity: isOpen ? 0 : 1,
          transition: isOpen ? "opacity 0.75s ease" : "none",
        }}
      />

      {/* ── Shutter panel ─────────────────────────────────────────────── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9998,
          transform: isOpen ? "translateY(-100%)" : "translateY(0)",
          transition: isOpen
            ? "transform 0.75s cubic-bezier(0.76, 0, 0.24, 1)"
            : "transform 0.65s cubic-bezier(0.76, 0, 0.24, 1)",
          // Horizontal slat texture — like a real rolling shutter
          background: `
            repeating-linear-gradient(
              180deg,
              #0e0e10 0px,
              #161618 3px,
              #0a0a0c 6px,
              #131315 9px,
              #0e0e10 12px
            )
          `,
          boxShadow: "0 8px 40px rgba(0,0,0,0.9)",
          borderBottom: "2px solid rgba(228,76,31,0.25)",
        }}
      />

      {/* ── Typing text (sits above shutter) ──────────────────────────── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          opacity: isOpen ? 0 : phase === "typing" || revealed > 0 ? 1 : 0,
          transition: isOpen ? "opacity 0.2s ease" : "none",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
          {/* Revealed characters */}
          <span
            style={{
              fontFamily: "'Birthstone', cursive",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "clamp(3.5rem, 10vw, 8rem)",
              color: "#e44c1f",
              letterSpacing: "0.02em",
              userSelect: "none",
              textShadow:
                "0 0 60px rgba(228,76,31,0.55), 0 0 20px rgba(228,76,31,0.35), 0 2px 24px rgba(0,0,0,1)",
              lineHeight: 1.1,
            }}
          >
            {TEXT.slice(0, revealed)}
          </span>

          {/* Blinking cursor — only while typing */}
          {phase === "typing" && revealed < TEXT.length && (
            <span
              style={{
                display: "inline-block",
                width: "3px",
                height: "clamp(2.8rem, 8vw, 6.4rem)",
                background: "#e44c1f",
                marginLeft: "4px",
                borderRadius: "2px",
                animation: "curtain-blink 0.6s step-end infinite",
              }}
            />
          )}
        </div>
      </div>

      {/* Blink keyframe injected inline */}
      <style>{`
        @keyframes curtain-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </>
  );
}
