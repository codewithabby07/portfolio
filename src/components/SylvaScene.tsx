import { useEffect, useState } from "react";
import { SylvaLivingWorldScene } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

/**
 * Wraps ThreeUI SylvaLivingWorldScene in a client-only guard.
 * The component itself renders an iframe+srcDoc and has its own
 * IntersectionObserver / visibility lifecycle — no extra wrapping needed.
 * We just prevent it from running during SSR.
 */
export function SylvaScene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100svh",
        position: "relative",
        background: "#4a4d44",
      }}
      aria-hidden="true"
    >
      {mounted && (
        <SylvaLivingWorldScene
          variant="living-green"
          style={{ width: "100%", height: "100%" }}
        />
      )}
    </div>
  );
}
