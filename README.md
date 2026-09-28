# Kage — Where stillness reveals the unseen

The complete authored **Kage temple experience** (ThreeUI `KageLandingPage`), implemented
from its exact registered source and preserved as an interactive full-page document with its
original navigation, scroll scenes, and local Three.js world.

**Live site:** https://abhay0069.github.io/1st3d-website/

## Run

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve dist/
```

## How it is wired

`src/Scene.tsx` is the configured usage, verbatim:

```tsx
import { KageLandingPage } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

export function Scene() {
  return (
    <div className="shader-frame">
      <KageLandingPage
        headingFont="onest"
        bodyFont="onest"
        headingWeight="400"
        bodyWeight="300"
        primaryColor="#e0231c"
        headingSize={46}
        bodySize={17}
        headingLetterSpacing={-0.012}
      />
    </div>
  );
}
```

`vite.config.ts` aliases `@designcodeio/threeui` to the vendored registered source in
`src/shaders/` (entry `src/shaders/index.ts`) and `@designcodeio/threeui/style.css` to
`src/shaders/threeui.css` — so the code that runs is the exact registered source in this
repository, built directly in the destination project.

The component renders the byte-exact authored document `public/landing-pages/kage.html`
inside a sandboxed frame and applies the typography/colour props as an override
stylesheet appended to the frame's head — the document itself is never rewritten.

## Registered source (verified byte-exact, SHA-256)

| File | Role |
| --- | --- |
| `src/shaders/landing-pages/LandingPages.tsx` | component (`KageLandingPage`) |
| `src/shaders/landing-pages/pageTypography.ts` | controls source |
| `src/shaders/landing-pages/pageRecipes.ts` | controls source (KAGE_TYPOGRAPHY recipe) |
| `src/shaders/landing-pages/LandingPageFrame.tsx` | frame component |
| `public/landing-pages/kage.html` | canonical source document |
| `public/landing-pages/secret-pathways-assets/fonts.css` | fonts (Onest, NotoJP, Wordmark) |
| `public/landing-pages/secret-pathways-assets/three.min.js` | local Three.js runtime |
| `src/shaders/threeui.css` | shared style |
| `public/landing-pages/secret-pathways-assets/generated/*.webp` (4) | gallery/scene art |
| `public/landing-pages/secret-pathways-assets/foreground/png/*.webp` (10) | 3D scene foreground layers |

All 22 files match the registered hashes from the
`kage-landing-page` source bundle (threeui.com source-code registry).
Sibling scene modules (`tidecrest-hero`, `meridian-landing-page`, `ascii-field`,
`betawise-globe`, `nocturne-hero`, `sylva-living-world`, `axonis-field`) are present as the
public build's own guard-stub seams; Kage does not invoke them.

## Verification

- `vite build` compiles the full registered module graph (49 modules)
- every public asset URL serves byte-exact (hash-checked over HTTP)
- headless-browser run: hero + all scroll scenes render, Three.js scene runs, typography
  props applied (`--vermilion: #e0231c`, Onest stack), anchor navigation lands on
  `#gate / #pathways / #lessons / #eternity`, hover targets (`data-chip`, `data-les`) wired,
  zero JS errors

## What you can change

See **[CHANGEABLE.md](./CHANGEABLE.md)** for the complete list of changeable items
(text, colours, fonts, images, video, 3D layers) and what to provide for each.
