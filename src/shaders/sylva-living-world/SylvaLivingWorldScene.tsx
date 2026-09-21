import { useRef, useState, useEffect, useMemo, type CSSProperties } from "react";
import innerGreenHtml from "./sources/inner-green-3d.html?raw";
import threeRuntime from "./sources/inner-green-assets/three.min.js";

const HERO_ISOLATE = '<main class="hero" id="hero"><canvas id="scene" role="img" aria-label="Sylva Living Green"></canvas><div class="stage" id="stage" aria-hidden="true"></div></main>';

const BASE_STYLES = `<style data-threeui-sylva-scene>
html, body {
  width: 100% !important;
  height: 100% !important;
  min-height: 100dvh !important;
  margin: 0 !important;
  overflow: hidden !important;
}
body {
  position: relative !important;
  background: #4a4d44 !important;
}
.hero {
  width: 100% !important;
  height: 100% !important;
  min-height: 100dvh !important;
  overflow: hidden !important;
}
#scene {
  width: 100% !important;
  height: 100% !important;
  pointer-events: auto !important;
}
</style>`;

function buildSylvaDoc(reducedMotion: boolean): string {
  const heroIndex = innerGreenHtml.indexOf('<main class="hero" id="hero">');
  const scriptIndex = innerGreenHtml.indexOf('<script src="inner-green-assets/three.min.js"><\/script>');
  if (heroIndex < 0 || scriptIndex < 0 || scriptIndex <= heroIndex) {
    throw new Error("Sylva scene adapter could not isolate the authored Three.js scene.");
  }

  let doc = `${innerGreenHtml.slice(0, heroIndex)}${HERO_ISOLATE}\n\n${innerGreenHtml.slice(scriptIndex)}`
    .replace("</head>", `${BASE_STYLES}</head>`)
    .replace(
      '<script src="inner-green-assets/three.min.js"><\/script>',
      `<script data-threeui-three-runtime>${threeRuntime}<\/script>`
    )
    .replace(
      "var BLADES_NEAR = small ? 70000 : 190000;",
      "var BLADES_NEAR = small ? 32000 : 55000;"
    )
    .replace(
      "var BLADES_FAR  = small ? 20000 :  60000;",
      "var BLADES_FAR  = small ? 8000 : 15000;"
    )
    .replace(
      "renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, small ? 1.6 : 2));",
      "renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));"
    );

  if (reducedMotion) {
    doc = doc.replace(
      "(function loop() { requestAnimationFrame(loop); tick(); })();",
      "(function loop() { if (!REDUCED) requestAnimationFrame(loop); tick(); })();"
    );
  }

  return doc;
}

export type SylvaLivingWorldVariant = "living-green";

export type SylvaLivingWorldSceneProps = {
  variant?: SylvaLivingWorldVariant;
  className?: string;
  style?: CSSProperties;
};

export function SylvaLivingWorldScene({
  className = "",
  style,
}: SylvaLivingWorldSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  const [isVisible, setIsVisible] = useState(() => typeof document === "undefined" || !document.hidden);
  const [reducedMotion, setReducedMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry?.isIntersecting ?? true);
    }, { rootMargin: "400px" });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const onVisibilityChange = () => setIsVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const srcDoc = useMemo(() => buildSylvaDoc(reducedMotion), [reducedMotion]);
  const shouldRender = inView && isVisible;

  useEffect(() => {
    setReady(false);
  }, [shouldRender, reducedMotion]);

  return (
    <div
      ref={containerRef}
      className={`threeui-background sylva-living-world-scene${className ? ` ${className}` : ""}`}
      role="img"
      aria-label="Sylva Living Green with ferns, flowers, pollen, and a butterfly"
      data-variant="living-green"
      data-state={ready ? "ready" : "loading"}
      style={{
        background: "#4a4d44",
        pointerEvents: "auto",
        position: "relative",
        width: "100%",
        height: "100%",
        ...style,
      }}
    >
      {shouldRender && (
        <iframe
          title="Sylva Living Green"
          srcDoc={srcDoc}
          sandbox="allow-scripts"
          loading="eager"
          onLoad={() => setReady(true)}
          style={{
            position: "absolute",
            inset: 0,
            display: "block",
            width: "100%",
            height: "100%",
            border: 0,
            background: "#4a4d44",
          }}
        />
      )}
    </div>
  );
}
