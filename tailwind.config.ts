import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work SansVariable", ...defaultTheme.fontFamily.sans],
      },
      colors: ({ colors }) => ({
        gray: colors.neutral,
      }),
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
