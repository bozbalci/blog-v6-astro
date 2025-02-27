// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
        },
      },
    },
  },

  integrations: [mdx()],
  adapter: cloudflare(),
});
