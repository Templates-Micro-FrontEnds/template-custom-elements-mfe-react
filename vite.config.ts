import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  define: {
    "process.env.NODE_ENV": '"production"',
    "process.env": "{}",
    process: "{}",
  },
  build: {
    lib: {
      entry: "src/element.tsx",
      name: "MfeReact",
      formats: ["iife"],
      fileName: () => "mfe-react.js",
    },
    rollupOptions: {},
  },
});
