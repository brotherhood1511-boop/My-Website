import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Phone photos commonly use uppercase extensions (IMG_0001.JPG) which
  // Vite doesn't treat as assets by default.
  assetsInclude: ["**/*.JPG", "**/*.JPEG", "**/*.PNG"],
});
