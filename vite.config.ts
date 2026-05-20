import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: "esnext",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("three")) {
            return "three-fiber";
          }
          if (id.includes("framer-motion") || id.includes("gsap")) {
            return "animation";
          }
          if (id.includes("react")) {
            return "vendor";
          }
          if (id.includes("lucide-react")) {
            return "icons";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false,
    cssCodeSplit: true,
    sourcemap: false,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion", "lucide-react"],
    rolldownOptions: {
      external: [],
    },
  },
});
