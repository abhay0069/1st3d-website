import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// `@designcodeio/threeui` is wired directly to the vendored registered source
// (src/shaders/index.ts re-exports the landing-page components). The import in
// src/Scene.tsx stays exactly the documented usage; the code that runs is the
// exact registered source in this repository, not a re-implementation.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@designcodeio/threeui/style.css",
        replacement: fileURLToPath(new URL("./src/shaders/threeui.css", import.meta.url)),
      },
      {
        find: "@designcodeio/threeui",
        replacement: fileURLToPath(new URL("./src/shaders/index.ts", import.meta.url)),
      },
    ],
  },
  server: {
    host: true,
    port: 5173,
    allowedHosts: true,
  },
  preview: {
    host: true,
    port: 4173,
    allowedHosts: true,
  },
});
