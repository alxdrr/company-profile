import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "./src/main.jsx",
        page1: "./src/pages/HomePage.jsx",
        page2: "./src/pages/ServicePage.jsx",
        // Tambahkan halaman lainnya sesuai kebutuhan
      },
    },
  },
});
