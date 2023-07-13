/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
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
    require.resolve("prettier-plugin-tailwindcss"),
    require.resolve("@ianvs/prettier-plugin-sort-imports"),
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
