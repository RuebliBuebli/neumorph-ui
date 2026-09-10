import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  base: "/neumorph-ui/",
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^@rueblibuebli\/neumorph-ui\/styles\.css$/,
        replacement: resolve(__dirname, "../src/global.css"),
      },
      {
        find: /^@rueblibuebli\/neumorph-ui$/,
        replacement: resolve(__dirname, "../src/index.ts"),
      },
    ],
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
