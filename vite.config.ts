import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import peerDependencies from "./package.json" with { type: "json" };

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  css: {
    devSourcemap: true,
  },
  build: {
    lib: {
      entry: "src/index.ts",
      name: "NeumorphUI",
      formats: ["es", "cjs"],
      fileName: (format) => `neumorph-ui.${format}.js`,
      cssFileName: "neumorph-ui",
    },
    rollupOptions: {
      external: Object.keys(peerDependencies),
    },
  },
});