import { useEffect, useState } from "react";
import { SylvaLivingWorldScene } from "@/shaders/sylva-living-world/SylvaLivingWorldScene";

/**
 * SylvaScene — ThreeUI Sylva Living World Scene (living-green)
 * - Sized with 100dvh to handle dynamic mobile browser viewport changes.
 * - Prevents horizontal overflow and double scrollbars.
 * - Full-width, full-viewport framing on both desktop and mobile.
 */
export function SylvaScene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="sylva-living-world"
      className="sylva-scene-host"
      style={{
        width: "100%",
        maxWidth: "100vw",
        height: "100dvh",
        minHeight: "100dvh",
        position: "relative",
        overflow: "hidden",
        background: "#4a4d44",
      }}
      aria-hidden="true"
    >
      {mounted && (
        <SylvaLivingWorldScene
          variant="living-green"
          style={{
            width: "100%",
            height: "100%",
            minHeight: "100dvh",
          }}
        />
      )}
    </section>
  );
}
