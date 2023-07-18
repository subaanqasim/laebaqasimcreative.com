/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
export default {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  arrowParens: "always",
  endOfLine: "lf",
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss",
    "@ianvs/prettier-plugin-sort-imports",
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "",
    "^@lib/(.*)$",
    "^@components/(.*)$",
    "",
    "^[./]",
  ],
  importOrderTypeScriptVersion: "5.1.6",
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
};
