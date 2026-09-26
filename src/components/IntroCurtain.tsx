import { useEffect, useState } from "react";

const TEXT = "CodeWithAbby";

export function IntroCurtain() {
  const [mounted, setMounted] = useState(false);
  const [revealed, setRevealed] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Only run on client
    setMounted(true);

    // If user prefers reduced motion, dismiss immediately
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsDone(true);
      return;
    }

    // Step 1: Type text smoothly character by character
    const charDelay = 70;
    const typingTimers: ReturnType<typeof setTimeout>[] = [];

    for (let i = 1; i <= TEXT.length; i++) {
      const t = setTimeout(() => {
        setRevealed(i);
      }, 200 + i * charDelay);
      typingTimers.push(t);
    }

    // Step 2: Hard failsafe unmount timer at 2.6s
    const doneTimer = setTimeout(() => {
      setIsDone(true);
      try {
        sessionStorage.setItem("cwa_intro_seen", "1");
      } catch {}
    }, 2500);

    return () => {
      typingTimers.forEach(clearTimeout);
      clearTimeout(doneTimer);
    };
  }, []);

  if (isDone) return null;

  return (
    <div
      aria-hidden="true"
      className="intro-curtain-wrapper"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* ── Rolling Shutter Panel (Automatic CSS Roll-Up Guarantee) ── */}
      <div
        className="intro-curtain-shutter"
        style={{
          position: "absolute",
          inset: 0,
          background: `
            repeating-linear-gradient(
              180deg,
              #0d0d10 0px,
              #17171a 3px,
              #08080a 6px,
              #121215 9px,
              #0d0d10 12px
            )
          `,
          boxShadow: "0 10px 50px rgba(0,0,0,0.95)",
          borderBottom: "2px solid rgba(228,76,31,0.4)",
          animation: "curtainRollUp 0.85s cubic-bezier(0.76, 0, 0.24, 1) 1.5s forwards",
        }}
      />

      {/* ── Ambient Radial Glow behind brand ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at center, rgba(228,76,31,0.12) 0%, transparent 65%)",
          animation: "curtainFadeOut 0.4s ease 1.45s forwards",
        }}
      />

      {/* ── Brand Typography Display ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: "curtainFadeOut 0.35s ease 1.45s forwards",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              fontFamily: "'Birthstone', cursive",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "clamp(3.8rem, 11vw, 8.5rem)",
              color: "#e44c1f",
              letterSpacing: "0.02em",
              userSelect: "none",
              textShadow:
                "0 0 60px rgba(228,76,31,0.65), 0 0 25px rgba(228,76,31,0.4), 0 4px 30px rgba(0,0,0,0.9)",
              lineHeight: 1.1,
            }}
          >
            {mounted ? TEXT.slice(0, revealed) : TEXT}
          </span>

          {/* Blinking cursor */}
          {revealed < TEXT.length && (
            <span
              style={{
                display: "inline-block",
                width: "3px",
                height: "clamp(2.8rem, 8vw, 6.4rem)",
                background: "#e44c1f",
                marginLeft: "6px",
                borderRadius: "2px",
                animation: "curtainBlink 0.5s step-end infinite",
              }}
            />
          )}
        </div>
      </div>

      <style>{`
        @keyframes curtainRollUp {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-102%);
          }
        }

        @keyframes curtainFadeOut {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes curtainBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
