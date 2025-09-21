import js from "@eslint/js";
import globals from "globals";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  // Use ESLint’s recommended config
  js.configs.recommended,

  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // Add/override rules here if needed
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];
