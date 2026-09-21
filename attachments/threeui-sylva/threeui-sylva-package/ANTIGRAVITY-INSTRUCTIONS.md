# ThreeUI Sylva Living World — Integration Instructions

## IMPORTANT: DO NOT CHANGE ANYTHING ELSE

This is an existing website/project. Integrate the ThreeUI `SylvaLivingWorldScene` into the existing project **without rebuilding, redesigning, refactoring, or changing anything unrelated**.

### Absolute rules
- Do NOT change the existing website layout, header, navbar, typography, colors, spacing, sections, content, routes, components, or existing animations unless a change is strictly required to mount the Sylva scene.
- Do NOT replace existing files wholesale when a minimal addition/change is enough.
- Do NOT remove existing functionality.
- Do NOT install unrelated packages.
- Do NOT recreate or approximate the effect from screenshots or descriptions.
- Use the provided source material as the source of truth.
- Keep the existing project structure and coding conventions wherever possible.
- Make the smallest possible changes required for integration.
- Before editing, inspect the existing project and identify exactly where the component should be mounted.
- After editing, verify that the rest of the website behaves exactly as before.

## Component
`SylvaLivingWorldScene`

## Variant
`living-green`

## Runtime
Three.js r149

## Registered source bundle
https://threeui.com/source-code/sylva-living-world.json

## Registered source files
- `src/shaders/sylva-living-world/SylvaLivingWorldScene.tsx`
- `src/shaders/sylva-living-world/sources/inner-green-3d.html`
- `src/shaders/sylva-living-world/sources/inner-green-assets/three.min.js`
- `src/shaders/threeui.css`

## Source revisions / hashes
- Component `SylvaLivingWorldScene.tsx`: `e29b92a16596bc9383e1dbd4630e83b70ec2a59dbae48de1d3b7ddc48c0b2082`
- `inner-green-3d.html`: `69c3694bd63f44ef9f007ebe4dac57a83e4402e0cdf6b54dd10b96dd4f05e197`
- `three.min.js`: `8a5f7249903b54d30f79f708699d2fed2d6a1d0741a4cd41377d1f01bb5a2271`
- `threeui.css`: `efe4447139f1358dd8e9be68edf6fa46cbefbd1de423a4d6c439ca61d2c8eccf`

## Existing configured usage
```tsx
import { SylvaLivingWorldScene } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

export function Scene() {
  return (
    <div className="shader-frame">
      <SylvaLivingWorldScene
        variant="living-green"
      />
    </div>
  );
}
```

If the ThreeUI package is not available, use the exact provided source to create a local component. Do not substitute a different implementation.

## Exact-source requirement
First read the complete provided source before editing. Preserve the authored structure, styling, shaders, motion, interactions, responsive behavior, dependencies, and asset paths.

The supplied `threeui-sylva-source.txt` contains the source material provided with this task. Use it as source evidence together with the registered source bundle information above.

If the exact required source is genuinely unavailable, **STOP and report that instead of approximating it**.

## Integration target
Add the Sylva Living World only where requested in the existing website. Do not redesign the surrounding page.

If no placement was explicitly specified, ask before choosing a new visible location rather than changing the layout on your own.

## Verification
After implementation:
- run the existing project using its existing commands;
- verify desktop rendering;
- verify mobile rendering;
- verify resize behavior;
- verify pointer interaction;
- verify reduced-motion behavior;
- verify visibility/tab lifecycle;
- check the browser console for errors;
- verify the existing website sections and interactions remain unchanged.

## Final report
When finished, report only:
1. Which files were added/changed.
2. Where the component was mounted.
3. Whether the exact source was used.
4. Any required dependency/install command.
5. Verification result.

Do not make any additional visual or structural improvements unless explicitly requested.
