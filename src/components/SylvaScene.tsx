import { lazy, Suspense, useEffect, useRef, useState } from "react";

/**
 * Lazy-loaded ThreeUI SylvaLivingWorldScene.
 * - CSS is imported dynamically so it doesn't block first paint.
 * - The heavy Three.js bundle (~220 KB gzip) is only fetched when the
 *   section is within 300px of the viewport (IntersectionObserver).
 * - Mobile: height is auto so the scene expands naturally on small screens.
 */

const LazySylva = lazy(() =>
  import("@designcodeio/threeui").then((m) => ({
    default: m.SylvaLivingWorldScene,
  }))
);

// Import CSS once — side-effect import bundled separately via dynamic import
function useSylvaCSS() {
  useEffect(() => {
    import("@designcodeio/threeui/style.css" as string);
  }, []);
}

export function SylvaScene() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useSylvaCSS();

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapRef}
      style={{
        width: "100%",
        /* desktop: full viewport height; mobile: auto so scene isn't clipped */
        minHeight: "100svh",
        position: "relative",
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      {visible && (
        <Suspense fallback={null}>
          <LazySylva
            variant="living-green"
            style={{ width: "100%", height: "100%" }}
          />
        </Suspense>
      )}
    </div>
  );
}
