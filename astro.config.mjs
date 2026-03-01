// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  redirects: {},
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    build: {
      cssCodeSplit: true,
    },
    css: {
      devSourcemap: true,
    },
  },
  devToolbar: {
    enabled: false,
  },
});
