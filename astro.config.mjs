import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/edge";
import { defineConfig } from "astro/config";

const siteUrl =
  import.meta.env.PUBLIC_VERCEL_ENV === "production"
    ? "https://laebaqasimcreative.com/"
    : import.meta.env.PUBLIC_VERCEL_ENV === "preview"
    ? `https://${import.meta.env.PUBLIC_VERCEL_BRANCH_URL}`
    : "http://localhost:3000";

console.log("siteUrl:", siteUrl);

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  output: "hybrid",
  publicDir: "./public",
  adapter: vercel({
    imageService: true,
  }),
  experimental: {
    assets: true,
  },
  integrations: [tailwind(), sitemap(), react()],
});
