import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/edge";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

const siteUrl =
  process.env.PUBLIC_VERCEL_ENV === "production"
    ? "https://laebaqasimcreative.com/"
    : process.env.PUBLIC_VERCEL_ENV === "preview"
    ? `https://${process.env.PUBLIC_VERCEL_BRANCH_URL}`
    : "http://localhost:3000";

console.log("env: ", process.env.PUBLIC_VERCEL_ENV);
console.log("branch url: ", process.env.PUBLIC_VERCEL_BRANCH_URL);
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
  integrations: [
    tailwind(),
    react(),
    sitemap({
      filter: (page) => page !== "https://laebaqasimcreative.com/success",
    }),
    robotsTxt({
      policy: [
        {
          userAgent: "*",
          disallow: process.env.PUBLIC_VERCEL_ENV === "production" ? "" : "/",
        },
      ],
    }),
  ],
});
