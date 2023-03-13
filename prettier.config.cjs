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
  importOrder: ["<THIRD_PARTY_MODULES>", "^[./]"],
  importOrderBuiltinModulesToTop: true,
  importOrderCaseInsensitive: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
