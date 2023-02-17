import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  server: {
    open: true,
  },
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.js"),
      formats: ["umd"],
      name: "changeVideoPlayer",
    },
  },
});
