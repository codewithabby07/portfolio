import { SylvaLivingWorldScene } from "@designcodeio/threeui";
import "@designcodeio/threeui/lib-dist/style.css";

/**
 * SylvaScene — ThreeUI "living-green" variant mounted as a full-viewport
 * immersive section between About and Work.
 * Uses the exact source from the registered ThreeUI package (MIT).
 */
export function SylvaScene() {
  return (
    <div
      style={{
        width: "100%",
        height: "100svh",
        position: "relative",
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      <SylvaLivingWorldScene
        variant="living-green"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
