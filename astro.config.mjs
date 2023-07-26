import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/edge";
import { defineConfig } from "astro/config";

const siteUrl =
  process.env.VERCEL_ENV === "production"
    ? "https://laebaqasimcreative.com/"
    : process.env.VERCEL_ENV === "preview"
    ? `https://${process.env.VERCEL_BRANCH_URL}`
    : "http://localhost:3000";

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  output: "server",
  publicDir: "./public",
  adapter: vercel({
    imageService: true,
  }),
  experimental: {
    assets: true,
  },
  integrations: [tailwind(), sitemap(), react()],
});
