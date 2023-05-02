import { defineConfig } from "astro/config";

export default defineConfig({
  srcDir: "./source",
  outDir: "./build",
  integrations: [],

  server: {
    port: 3000,
    host: true
  }
});
