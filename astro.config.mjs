import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import sanity from "astro-sanity";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.laebaqasimcreative.com",
  integrations: [
    tailwind(),
    sitemap(),
    sanity({
      projectId: "temp",
      dataset: "production",
      apiVersion: "2021-03-25",
      useCdn: true,
    }),
    preact({ compat: true }),
  ],
});
