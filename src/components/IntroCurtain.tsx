import { useEffect, useState } from "react";

/**
 * Theater-style split curtain intro.
 * Phase 1 — "hold":  both panels closed, logo visible (1.4 s)
 * Phase 2 — "open":  panels slide apart (0.85 s ease-in-out)
 * Phase 3 — "done":  component unmounts
 */
export function IntroCurtain() {
  const [phase, setPhase] = useState<"hold" | "open" | "done">("hold");

  useEffect(() => {
    // Respect prefers-reduced-motion: skip immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
      return;
    }
    const t1 = setTimeout(() => setPhase("open"), 1400);
    const t2 = setTimeout(() => setPhase("done"), 2400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "done") return null;

  const isOpen = phase === "open";

  const panelBase: React.CSSProperties = {
    position: "fixed",
    top: 0,
    bottom: 0,
    width: "50%",
    zIndex: 9999,
    willChange: "transform",
    transition: isOpen
      ? "transform 0.9s cubic-bezier(0.76, 0, 0.24, 1)"
      : "none",
    /* Velvet curtain texture via repeating gradient */
    background: `
      repeating-linear-gradient(
        90deg,
        rgba(0,0,0,0.55) 0px,
        rgba(18,18,18,1)  6px,
        rgba(4,4,4,0.85)  12px,
        rgba(12,12,12,0.9) 18px,
        rgba(0,0,0,0.55)  24px
      ),
      #0a0a0a
    `,
  };

  return (
    <>
      {/* Overlay behind panels so website doesn't flash */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9998,
          background: "#09090c",
          pointerEvents: "none",
          opacity: isOpen ? 0 : 1,
          transition: isOpen ? "opacity 0.9s ease" : "none",
        }}
      />

      {/* Left curtain panel */}
      <div
        style={{
          ...panelBase,
          left: 0,
          transform: isOpen ? "translateX(-100%)" : "translateX(0)",
          borderRight: "1px solid rgba(228,76,31,0.15)",
          boxShadow: "inset -8px 0 24px rgba(0,0,0,0.6), 4px 0 20px rgba(0,0,0,0.8)",
        }}
      />

      {/* Right curtain panel */}
      <div
        style={{
          ...panelBase,
          right: 0,
          transform: isOpen ? "translateX(100%)" : "translateX(0)",
          borderLeft: "1px solid rgba(228,76,31,0.15)",
          boxShadow: "inset 8px 0 24px rgba(0,0,0,0.6), -4px 0 20px rgba(0,0,0,0.8)",
        }}
      />

      {/* Logo — centered above the seam */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 10000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          opacity: isOpen ? 0 : 1,
          transition: isOpen ? "opacity 0.3s ease" : "none",
        }}
      >
        <span
          style={{
            fontFamily: "'Archivo', 'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 800,
            fontSize: "clamp(2rem, 6vw, 4.5rem)",
            color: "#e44c1f",
            letterSpacing: "-0.02em",
            userSelect: "none",
            textShadow: "0 0 60px rgba(228,76,31,0.4), 0 2px 20px rgba(0,0,0,0.9)",
          }}
        >
          CodeWithAbby
        </span>
      </div>
    </>
  );
}
