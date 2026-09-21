import { lazy, Suspense, useEffect, useRef, useState } from "react";
import "@designcodeio/threeui/style.css";

/**
 * Lazy-loaded SylvaLivingWorldScene.
 * CSS is imported statically (lightweight, just styles).
 * The heavy Three.js JS bundle is code-split and only fetched when
 * this section enters the viewport (IntersectionObserver rootMargin 300px).
 */
const LazySylva = lazy(() =>
  import("@designcodeio/threeui").then((m) => ({
    default: m.SylvaLivingWorldScene,
  }))
);

export function SylvaScene() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapRef}
      style={{
        width: "100%",
        minHeight: "100svh",
        position: "relative",
        overflow: "hidden",
        background: "#383b34",
      }}
      aria-hidden="true"
    >
      {shouldLoad && (
        <Suspense fallback={null}>
          <LazySylva
            variant="living-green"
            style={{ width: "100%", minHeight: "100svh" }}
          />
        </Suspense>
      )}
    </div>
  );
}
